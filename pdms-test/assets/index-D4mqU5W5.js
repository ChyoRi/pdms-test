(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function LR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gm={exports:{}},Fu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE;function jR(){if(NE)return Fu;NE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Fu.Fragment=e,Fu.jsx=n,Fu.jsxs=n,Fu}var PE;function UR(){return PE||(PE=1,Gm.exports=jR()),Gm.exports}var _=UR(),Ym={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function qR(){if(VE)return Ve;VE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function T(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function O(I,ee,se){this.props=I,this.context=ee,this.refs=z,this.updater=se||C}O.prototype.isReactComponent={},O.prototype.setState=function(I,ee){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ee,"setState")},O.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function N(){}N.prototype=O.prototype;function L(I,ee,se){this.props=I,this.context=ee,this.refs=z,this.updater=se||C}var U=L.prototype=new N;U.constructor=L,V(U,O.prototype),U.isPureReactComponent=!0;var te=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function R(I,ee,se,ie,de,xe){return se=xe.ref,{$$typeof:t,type:I,key:ee,ref:se!==void 0?se:null,props:xe}}function A(I,ee){return R(I.type,ee,void 0,void 0,void 0,I.props)}function D(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function k(I){var ee={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return ee[se]})}var j=/\/+/g;function q(I,ee){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):ee.toString(36)}function M(){}function he(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(M,M):(I.status="pending",I.then(function(ee){I.status==="pending"&&(I.status="fulfilled",I.value=ee)},function(ee){I.status==="pending"&&(I.status="rejected",I.reason=ee)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ge(I,ee,se,ie,de){var xe=typeof I;(xe==="undefined"||xe==="boolean")&&(I=null);var we=!1;if(I===null)we=!0;else switch(xe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(I.$$typeof){case t:case e:we=!0;break;case v:return we=I._init,ge(we(I._payload),ee,se,ie,de)}}if(we)return de=de(I),we=ie===""?"."+q(I,0):ie,te(de)?(se="",we!=null&&(se=we.replace(j,"$&/")+"/"),ge(de,ee,se,"",function(bt){return bt})):de!=null&&(D(de)&&(de=A(de,se+(de.key==null||I&&I.key===de.key?"":(""+de.key).replace(j,"$&/")+"/")+we)),ee.push(de)),1;we=0;var ft=ie===""?".":ie+":";if(te(I))for(var He=0;He<I.length;He++)ie=I[He],xe=ft+q(ie,He),we+=ge(ie,ee,se,xe,de);else if(He=T(I),typeof He=="function")for(I=He.call(I),He=0;!(ie=I.next()).done;)ie=ie.value,xe=ft+q(ie,He++),we+=ge(ie,ee,se,xe,de);else if(xe==="object"){if(typeof I.then=="function")return ge(he(I),ee,se,ie,de);throw ee=String(I),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(I,ee,se){if(I==null)return I;var ie=[],de=0;return ge(I,ie,"","",function(xe){return ee.call(se,xe,de++)}),ie}function le(I){if(I._status===-1){var ee=I._result;ee=ee(),ee.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=ee)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function ve(){}return Ve.Children={map:K,forEach:function(I,ee,se){K(I,function(){ee.apply(this,arguments)},se)},count:function(I){var ee=0;return K(I,function(){ee++}),ee},toArray:function(I){return K(I,function(ee){return ee})||[]},only:function(I){if(!D(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ve.Component=O,Ve.Fragment=n,Ve.Profiler=a,Ve.PureComponent=L,Ve.StrictMode=i,Ve.Suspense=p,Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Ve.__COMPILER_RUNTIME={__proto__:null,c:function(I){return $.H.useMemoCache(I)}},Ve.cache=function(I){return function(){return I.apply(null,arguments)}},Ve.cloneElement=function(I,ee,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ie=V({},I.props),de=I.key,xe=void 0;if(ee!=null)for(we in ee.ref!==void 0&&(xe=void 0),ee.key!==void 0&&(de=""+ee.key),ee)!ne.call(ee,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ee.ref===void 0||(ie[we]=ee[we]);var we=arguments.length-2;if(we===1)ie.children=se;else if(1<we){for(var ft=Array(we),He=0;He<we;He++)ft[He]=arguments[He+2];ie.children=ft}return R(I.type,de,void 0,void 0,xe,ie)},Ve.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Ve.createElement=function(I,ee,se){var ie,de={},xe=null;if(ee!=null)for(ie in ee.key!==void 0&&(xe=""+ee.key),ee)ne.call(ee,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=ee[ie]);var we=arguments.length-2;if(we===1)de.children=se;else if(1<we){for(var ft=Array(we),He=0;He<we;He++)ft[He]=arguments[He+2];de.children=ft}if(I&&I.defaultProps)for(ie in we=I.defaultProps,we)de[ie]===void 0&&(de[ie]=we[ie]);return R(I,xe,void 0,void 0,null,de)},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(I){return{$$typeof:d,render:I}},Ve.isValidElement=D,Ve.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:le}},Ve.memo=function(I,ee){return{$$typeof:g,type:I,compare:ee===void 0?null:ee}},Ve.startTransition=function(I){var ee=$.T,se={};$.T=se;try{var ie=I(),de=$.S;de!==null&&de(se,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ve,fe)}catch(xe){fe(xe)}finally{$.T=ee}},Ve.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Ve.use=function(I){return $.H.use(I)},Ve.useActionState=function(I,ee,se){return $.H.useActionState(I,ee,se)},Ve.useCallback=function(I,ee){return $.H.useCallback(I,ee)},Ve.useContext=function(I){return $.H.useContext(I)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(I,ee){return $.H.useDeferredValue(I,ee)},Ve.useEffect=function(I,ee,se){var ie=$.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(I,ee)},Ve.useId=function(){return $.H.useId()},Ve.useImperativeHandle=function(I,ee,se){return $.H.useImperativeHandle(I,ee,se)},Ve.useInsertionEffect=function(I,ee){return $.H.useInsertionEffect(I,ee)},Ve.useLayoutEffect=function(I,ee){return $.H.useLayoutEffect(I,ee)},Ve.useMemo=function(I,ee){return $.H.useMemo(I,ee)},Ve.useOptimistic=function(I,ee){return $.H.useOptimistic(I,ee)},Ve.useReducer=function(I,ee,se){return $.H.useReducer(I,ee,se)},Ve.useRef=function(I){return $.H.useRef(I)},Ve.useState=function(I){return $.H.useState(I)},Ve.useSyncExternalStore=function(I,ee,se){return $.H.useSyncExternalStore(I,ee,se)},Ve.useTransition=function(){return $.H.useTransition()},Ve.version="19.1.0",Ve}var LE;function uy(){return LE||(LE=1,Ym.exports=qR()),Ym.exports}var B=uy();const me=LR(B);var Wm={exports:{}},$u={},Qm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function BR(){return jE||(jE=1,function(t){function e(K,le){var fe=K.length;K.push(le);e:for(;0<fe;){var ve=fe-1>>>1,I=K[ve];if(0<a(I,le))K[ve]=le,K[fe]=I,fe=ve;else break e}}function n(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var le=K[0],fe=K.pop();if(fe!==le){K[0]=fe;e:for(var ve=0,I=K.length,ee=I>>>1;ve<ee;){var se=2*(ve+1)-1,ie=K[se],de=se+1,xe=K[de];if(0>a(ie,fe))de<I&&0>a(xe,ie)?(K[ve]=xe,K[de]=fe,ve=de):(K[ve]=ie,K[se]=fe,ve=se);else if(de<I&&0>a(xe,fe))K[ve]=xe,K[de]=fe,ve=de;else break e}}return le}function a(K,le){var fe=K.sortIndex-le.sortIndex;return fe!==0?fe:K.id-le.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,b=null,T=3,C=!1,V=!1,z=!1,O=!1,N=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function te(K){for(var le=n(g);le!==null;){if(le.callback===null)i(g);else if(le.startTime<=K)i(g),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(g)}}function $(K){if(z=!1,te(K),!V)if(n(p)!==null)V=!0,ne||(ne=!0,q());else{var le=n(g);le!==null&&ge($,le.startTime-K)}}var ne=!1,R=-1,A=5,D=-1;function k(){return O?!0:!(t.unstable_now()-D<A)}function j(){if(O=!1,ne){var K=t.unstable_now();D=K;var le=!0;try{e:{V=!1,z&&(z=!1,L(R),R=-1),C=!0;var fe=T;try{t:{for(te(K),b=n(p);b!==null&&!(b.expirationTime>K&&k());){var ve=b.callback;if(typeof ve=="function"){b.callback=null,T=b.priorityLevel;var I=ve(b.expirationTime<=K);if(K=t.unstable_now(),typeof I=="function"){b.callback=I,te(K),le=!0;break t}b===n(p)&&i(p),te(K)}else i(p);b=n(p)}if(b!==null)le=!0;else{var ee=n(g);ee!==null&&ge($,ee.startTime-K),le=!1}}break e}finally{b=null,T=fe,C=!1}le=void 0}}finally{le?q():ne=!1}}}var q;if(typeof U=="function")q=function(){U(j)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,he=M.port2;M.port1.onmessage=j,q=function(){he.postMessage(null)}}else q=function(){N(j,0)};function ge(K,le){R=N(function(){K(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(K){switch(T){case 1:case 2:case 3:var le=3;break;default:le=T}var fe=T;T=le;try{return K()}finally{T=fe}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var fe=T;T=K;try{return le()}finally{T=fe}},t.unstable_scheduleCallback=function(K,le,fe){var ve=t.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?ve+fe:ve):fe=ve,K){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=fe+I,K={id:v++,callback:le,priorityLevel:K,startTime:fe,expirationTime:I,sortIndex:-1},fe>ve?(K.sortIndex=fe,e(g,K),n(p)===null&&K===n(g)&&(z?(L(R),R=-1):z=!0,ge($,fe-ve))):(K.sortIndex=I,e(p,K),V||C||(V=!0,ne||(ne=!0,q()))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var le=T;return function(){var fe=T;T=le;try{return K.apply(this,arguments)}finally{T=fe}}}}(Km)),Km}var UE;function zR(){return UE||(UE=1,Qm.exports=BR()),Qm.exports}var Xm={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE;function FR(){if(qE)return wn;qE=1;var t=uy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,wn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},wn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},wn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},wn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},wn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,b=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:C}):v==="script"&&i.d.X(p,{crossOrigin:b,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},wn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},wn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,b=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},wn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},wn.requestFormReset=function(p){i.d.r(p)},wn.unstable_batchedUpdates=function(p,g){return p(g)},wn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},wn.useFormStatus=function(){return c.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var BE;function $R(){if(BE)return Xm.exports;BE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Xm.exports=FR(),Xm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function HR(){if(zE)return $u;zE=1;var t=zR(),e=uy(),n=$R();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var w=!1,S=f.child;S;){if(S===o){w=!0,o=f,u=m;break}if(S===u){w=!0,u=f,o=m;break}S=S.sibling}if(!w){for(S=m.child;S;){if(S===o){w=!0,o=m,u=f;break}if(S===u){w=!0,u=m,o=f;break}S=S.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=j&&r[j]||r["@@iterator"],typeof r=="function"?r:null)}var M=Symbol.for("react.client.reference");function he(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===M?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case V:return"Fragment";case O:return"Profiler";case z:return"StrictMode";case $:return"Suspense";case ne:return"SuspenseList";case D:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case U:return(r.displayName||"Context")+".Provider";case L:return(r._context.displayName||"Context")+".Consumer";case te:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case R:return s=r.displayName||null,s!==null?s:he(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return he(r(s))}catch{}}return null}var ge=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},ve=[],I=-1;function ee(r){return{current:r}}function se(r){0>I||(r.current=ve[I],ve[I]=null,I--)}function ie(r,s){I++,ve[I]=r.current,r.current=s}var de=ee(null),xe=ee(null),we=ee(null),ft=ee(null);function He(r,s){switch(ie(we,s),ie(xe,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?lE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=lE(s),r=uE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}se(de),ie(de,r)}function bt(){se(de),se(xe),se(we)}function Pn(r){r.memoizedState!==null&&ie(ft,r);var s=de.current,o=uE(s,r.type);s!==o&&(ie(xe,r),ie(de,o))}function vn(r){xe.current===r&&(se(de),se(xe)),ft.current===r&&(se(ft),ju._currentValue=fe)}var Kt=Object.prototype.hasOwnProperty,fi=t.unstable_scheduleCallback,Mr=t.unstable_cancelCallback,ca=t.unstable_shouldYield,co=t.unstable_requestPaint,Vn=t.unstable_now,Bl=t.unstable_getCurrentPriorityLevel,ha=t.unstable_ImmediatePriority,as=t.unstable_UserBlockingPriority,di=t.unstable_NormalPriority,ho=t.unstable_LowPriority,Nr=t.unstable_IdlePriority,pi=t.log,fo=t.unstable_setDisableYieldValue,_t=null,Ze=null;function Dn(r){if(typeof pi=="function"&&fo(r),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(_t,r)}catch{}}var Xt=Math.clz32?Math.clz32:mi,po=Math.log,zl=Math.LN2;function mi(r){return r>>>=0,r===0?32:31-(po(r)/zl|0)|0}var gi=256,yi=4194304;function zn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function _i(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,w=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=zn(u):(w&=S,w!==0?f=zn(w):o||(o=S&~r,o!==0&&(f=zn(o))))):(S=u&~m,S!==0?f=zn(S):w!==0?f=zn(w):o||(o=u&~r,o!==0&&(f=zn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function vi(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function os(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var r=gi;return gi<<=1,(gi&4194048)===0&&(gi=256),r}function et(){var r=yi;return yi<<=1,(yi&62914560)===0&&(yi=4194304),r}function Ce(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function Ke(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Zt(r,s,o,u,f,m){var w=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,P=r.expirationTimes,Q=r.hiddenUpdates;for(o=w&~o;0<o;){var re=31-Xt(o),ue=1<<re;S[re]=0,P[re]=-1;var X=Q[re];if(X!==null)for(Q[re]=null,re=0;re<X.length;re++){var Z=X[re];Z!==null&&(Z.lane&=-536870913)}o&=~ue}u!==0&&Pe(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(w&~s))}function Pe(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-Xt(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function fa(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-Xt(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Pr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ls(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function tr(){var r=le.p;return r!==0?r:(r=window.event,r===void 0?32:CE(r.type))}function us(r,s){var o=le.p;try{return le.p=r,s()}finally{le.p=o}}var vt=Math.random().toString(36).slice(2),Ft="__reactFiber$"+vt,Mt="__reactProps$"+vt,nr="__reactContainer$"+vt,Fl="__reactEvents$"+vt,Qd="__reactListeners$"+vt,cs="__reactHandles$"+vt,Gc="__reactResources$"+vt,da="__reactMarker$"+vt;function hs(r){delete r[Ft],delete r[Mt],delete r[Fl],delete r[Qd],delete r[cs]}function Ei(r){var s=r[Ft];if(s)return s;for(var o=r.parentNode;o;){if(s=o[nr]||o[Ft]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=dE(r);r!==null;){if(o=r[Ft])return o;r=dE(r)}return s}r=o,o=r.parentNode}return null}function Vr(r){if(r=r[Ft]||r[nr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Lr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function kn(r){var s=r[Gc];return s||(s=r[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function It(r){r[da]=!0}var $l=new Set,mo={};function _r(r,s){wi(r,s),wi(r+"Capture",s)}function wi(r,s){for(mo[r]=s,r=0;r<s.length;r++)$l.add(s[r])}var Yc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wc={},pa={};function Qc(r){return Kt.call(pa,r)?!0:Kt.call(Wc,r)?!1:Yc.test(r)?pa[r]=!0:(Wc[r]=!0,!1)}function fs(r,s,o){if(Qc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function jr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function cn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ma,Kc;function bi(r){if(ma===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ma=s&&s[1]||"",Kc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ma+r+Kc}var go=!1;function yo(r,s){if(!r||go)return"";go=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ue=function(){throw Error()};if(Object.defineProperty(ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ue,[])}catch(Z){var X=Z}Reflect.construct(r,[],ue)}else{try{ue.call()}catch(Z){X=Z}r.call(ue.prototype)}}else{try{throw Error()}catch(Z){X=Z}(ue=r())&&typeof ue.catch=="function"&&ue.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),w=m[0],S=m[1];if(w&&S){var P=w.split(`
`),Q=S.split(`
`);for(f=u=0;u<P.length&&!P[u].includes("DetermineComponentFrameRoot");)u++;for(;f<Q.length&&!Q[f].includes("DetermineComponentFrameRoot");)f++;if(u===P.length||f===Q.length)for(u=P.length-1,f=Q.length-1;1<=u&&0<=f&&P[u]!==Q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(P[u]!==Q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||P[u]!==Q[f]){var re=`
`+P[u].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=u&&0<=f);break}}}finally{go=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?bi(o):""}function Hl(r){switch(r.tag){case 26:case 27:case 5:return bi(r.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return yo(r.type,!1);case 11:return yo(r.type.render,!1);case 1:return yo(r.type,!0);case 31:return bi("Activity");default:return""}}function _o(r){try{var s="";do s+=Hl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function On(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Gl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Kd(r){var s=Gl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function vo(r){r._valueTracker||(r._valueTracker=Kd(r))}function Yl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Gl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function ga(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Xd=/[\n"\\]/g;function Nt(r){return r.replace(Xd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Fn(r,s,o,u,f,m,w,S){r.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.type=w:r.removeAttribute("type"),s!=null?w==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+On(s)):r.value!==""+On(s)&&(r.value=""+On(s)):w!=="submit"&&w!=="reset"||r.removeAttribute("value"),s!=null?ds(r,w,On(s)):o!=null?ds(r,w,On(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+On(S):r.removeAttribute("name")}function ya(r,s,o,u,f,m,w,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+On(o):"",s=s!=null?""+On(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(r.name=w)}function ds(r,s,o){s==="number"&&ga(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ti(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+On(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ot(r,s,o){if(s!=null&&(s=""+On(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+On(o):""}function _a(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(ge(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=On(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function rr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var va=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xc(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||va.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Wl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&Xc(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&Xc(r,m,s[m])}function Ql(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(r){return Jd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Si=null;function ir(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xi=null,Ai=null;function Kl(r){var s=Vr(r);if(s&&(r=s.stateNode)){var o=r[Mt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Fn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Mt]||null;if(!f)throw Error(i(90));Fn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Yl(u)}break e;case"textarea":ot(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ti(r,!!o.multiple,s,!1)}}}var Ur=!1;function Zc(r,s,o){if(Ur)return r(s,o);Ur=!0;try{var u=r(s);return u}finally{if(Ur=!1,(xi!==null||Ai!==null)&&(Hh(),xi&&(s=xi,r=Ai,Ai=xi=null,Kl(s),r)))for(s=0;s<r.length;s++)Kl(r[s])}}function Ea(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(vr)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){sr=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{sr=!1}var qr=null,ps=null,Ri=null;function Xl(){if(Ri)return Ri;var r,s=ps,o=s.length,u,f="value"in qr?qr.value:qr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var w=o-r;for(u=1;u<=w&&s[o-u]===f[m-u];u++);return Ri=f.slice(r,1<u?1-u:void 0)}function Br(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function zr(){return!0}function Zl(){return!1}function Jt(r){function s(o,u,f,m,w){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zr:Zl,this.isPropagationStopped=Zl,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),s}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wo=Jt(tt),ba=v({},tt,{view:0,detail:0}),Jc=Jt(ba),bo,To,Fr,Ta=v({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Fr&&(Fr&&r.type==="mousemove"?(bo=r.screenX-Fr.screenX,To=r.screenY-Fr.screenY):To=bo=0,Fr=r),bo)},movementY:function(r){return"movementY"in r?r.movementY:To}}),ar=Jt(Ta),eh=v({},Ta,{dataTransfer:0}),ep=Jt(eh),Sa=v({},ba,{relatedTarget:0}),So=Jt(Sa),Jl=v({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),xo=Jt(Jl),th=v({},tt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ao=Jt(th),tp=v({},tt,{data:0}),eu=Jt(tp),xa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=rh[r])?!!s[r]:!1}function Aa(){return tu}var ih=v({},ba,{key:function(r){if(r.key){var s=xa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Br(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?nh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(r){return r.type==="keypress"?Br(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Br(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ro=Jt(ih),sh=v({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Jt(sh),Ci=v({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),ah=Jt(Ci),oh=v({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Jt(oh),uh=v({},Ta,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Co=Jt(uh),Mn=v({},tt,{newState:0,oldState:0}),ch=Jt(Mn),hh=[9,13,27,32],$r=vr&&"CompositionEvent"in window,h=null;vr&&"documentMode"in document&&(h=document.documentMode);var y=vr&&"TextEvent"in window&&!h,E=vr&&(!$r||h&&8<h&&11>=h),x=" ",Y=!1;function J(r,s){switch(r){case"keyup":return hh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ge=!1;function $t(r,s){switch(r){case"compositionend":return pe(s);case"keypress":return s.which!==32?null:(Y=!0,x);case"textInput":return r=s.data,r===x&&Y?null:r;default:return null}}function Ye(r,s){if(Ge)return r==="compositionend"||!$r&&J(r,s)?(r=Xl(),Ri=ps=qr=null,Ge=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ht(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!en[r.type]:s==="textarea"}function Ii(r,s,o,u){xi?Ai?Ai.push(u):Ai=[u]:xi=u,s=Xh(s,"onChange"),0<s.length&&(o=new wo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var hn=null,Hr=null;function ru(r){rE(r,0)}function fh(r){var s=Lr(r);if(Yl(s))return r}function S_(r,s){if(r==="change")return s}var x_=!1;if(vr){var np;if(vr){var rp="oninput"in document;if(!rp){var A_=document.createElement("div");A_.setAttribute("oninput","return;"),rp=typeof A_.oninput=="function"}np=rp}else np=!1;x_=np&&(!document.documentMode||9<document.documentMode)}function R_(){hn&&(hn.detachEvent("onpropertychange",C_),Hr=hn=null)}function C_(r){if(r.propertyName==="value"&&fh(Hr)){var s=[];Ii(s,Hr,r,ir(r)),Zc(ru,s)}}function dA(r,s,o){r==="focusin"?(R_(),hn=s,Hr=o,hn.attachEvent("onpropertychange",C_)):r==="focusout"&&R_()}function pA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return fh(Hr)}function mA(r,s){if(r==="click")return fh(s)}function gA(r,s){if(r==="input"||r==="change")return fh(s)}function yA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var $n=typeof Object.is=="function"?Object.is:yA;function iu(r,s){if($n(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Kt.call(s,f)||!$n(r[f],s[f]))return!1}return!0}function I_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function D_(r,s){var o=I_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=I_(o)}}function k_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?k_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function O_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ga(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ga(r.document)}return s}function ip(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var _A=vr&&"documentMode"in document&&11>=document.documentMode,Io=null,sp=null,su=null,ap=!1;function M_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ap||Io==null||Io!==ga(u)||(u=Io,"selectionStart"in u&&ip(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),su&&iu(su,u)||(su=u,u=Xh(sp,"onSelect"),0<u.length&&(s=new wo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Io)))}function Ra(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Do={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},op={},N_={};vr&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function Ca(r){if(op[r])return op[r];if(!Do[r])return r;var s=Do[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in N_)return op[r]=s[o];return r}var P_=Ca("animationend"),V_=Ca("animationiteration"),L_=Ca("animationstart"),vA=Ca("transitionrun"),EA=Ca("transitionstart"),wA=Ca("transitioncancel"),j_=Ca("transitionend"),U_=new Map,lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lp.push("scrollEnd");function Er(r,s){U_.set(r,s),_r(s,[r])}var q_=new WeakMap;function or(r,s){if(typeof r=="object"&&r!==null){var o=q_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:_o(s)},q_.set(r,s),s)}return{value:r,source:s,stack:_o(s)}}var lr=[],ko=0,up=0;function dh(){for(var r=ko,s=up=ko=0;s<r;){var o=lr[s];lr[s++]=null;var u=lr[s];lr[s++]=null;var f=lr[s];lr[s++]=null;var m=lr[s];if(lr[s++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}m!==0&&B_(o,f,m)}}function ph(r,s,o,u){lr[ko++]=r,lr[ko++]=s,lr[ko++]=o,lr[ko++]=u,up|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function cp(r,s,o,u){return ph(r,s,o,u),mh(r)}function Oo(r,s){return ph(r,null,null,s),mh(r)}function B_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-Xt(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function mh(r){if(50<Du)throw Du=0,gm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Mo={};function bA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(r,s,o,u){return new bA(r,s,o,u)}function hp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Di(r,s){var o=r.alternate;return o===null?(o=Hn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function z_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function gh(r,s,o,u,f,m){var w=0;if(u=r,typeof r=="function")hp(r)&&(w=1);else if(typeof r=="string")w=SR(r,o,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case D:return r=Hn(31,o,s,f),r.elementType=D,r.lanes=m,r;case V:return Ia(o.children,f,m,s);case z:w=8,f|=24;break;case O:return r=Hn(12,o,s,f|2),r.elementType=O,r.lanes=m,r;case $:return r=Hn(13,o,s,f),r.elementType=$,r.lanes=m,r;case ne:return r=Hn(19,o,s,f),r.elementType=ne,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:case U:w=10;break e;case L:w=9;break e;case te:w=11;break e;case R:w=14;break e;case A:w=16,u=null;break e}w=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Hn(w,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Ia(r,s,o,u){return r=Hn(7,r,u,s),r.lanes=o,r}function fp(r,s,o){return r=Hn(6,r,null,s),r.lanes=o,r}function dp(r,s,o){return s=Hn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var No=[],Po=0,yh=null,_h=0,ur=[],cr=0,Da=null,ki=1,Oi="";function ka(r,s){No[Po++]=_h,No[Po++]=yh,yh=r,_h=s}function F_(r,s,o){ur[cr++]=ki,ur[cr++]=Oi,ur[cr++]=Da,Da=r;var u=ki;r=Oi;var f=32-Xt(u)-1;u&=~(1<<f),o+=1;var m=32-Xt(s)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,ki=1<<32-Xt(s)+f|o<<f|u,Oi=m+r}else ki=1<<m|o<<f|u,Oi=r}function pp(r){r.return!==null&&(ka(r,1),F_(r,1,0))}function mp(r){for(;r===yh;)yh=No[--Po],No[Po]=null,_h=No[--Po],No[Po]=null;for(;r===Da;)Da=ur[--cr],ur[cr]=null,Oi=ur[--cr],ur[cr]=null,ki=ur[--cr],ur[cr]=null}var Nn=null,At=null,Je=!1,Oa=null,Gr=!1,gp=Error(i(519));function Ma(r){var s=Error(i(418,""));throw lu(or(s,r)),gp}function $_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Ft]=r,s[Mt]=u,o){case"dialog":Be("cancel",s),Be("close",s);break;case"iframe":case"object":case"embed":Be("load",s);break;case"video":case"audio":for(o=0;o<Ou.length;o++)Be(Ou[o],s);break;case"source":Be("error",s);break;case"img":case"image":case"link":Be("error",s),Be("load",s);break;case"details":Be("toggle",s);break;case"input":Be("invalid",s),ya(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),vo(s);break;case"select":Be("invalid",s);break;case"textarea":Be("invalid",s),_a(s,u.value,u.defaultValue,u.children),vo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||oE(s.textContent,o)?(u.popover!=null&&(Be("beforetoggle",s),Be("toggle",s)),u.onScroll!=null&&Be("scroll",s),u.onScrollEnd!=null&&Be("scrollend",s),u.onClick!=null&&(s.onclick=Zh),s=!0):s=!1,s||Ma(r)}function H_(r){for(Nn=r.return;Nn;)switch(Nn.tag){case 5:case 13:Gr=!1;return;case 27:case 3:Gr=!0;return;default:Nn=Nn.return}}function au(r){if(r!==Nn)return!1;if(!Je)return H_(r),Je=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Om(r.type,r.memoizedProps)),o=!o),o&&At&&Ma(r),H_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){At=br(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}At=null}}else s===27?(s=At,Ds(r.type)?(r=Vm,Vm=null,At=r):At=s):At=Nn?br(r.stateNode.nextSibling):null;return!0}function ou(){At=Nn=null,Je=!1}function G_(){var r=Oa;return r!==null&&(Un===null?Un=r:Un.push.apply(Un,r),Oa=null),r}function lu(r){Oa===null?Oa=[r]:Oa.push(r)}var yp=ee(null),Na=null,Mi=null;function ms(r,s,o){ie(yp,s._currentValue),s._currentValue=o}function Ni(r){r._currentValue=yp.current,se(yp)}function _p(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function vp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var P=0;P<s.length;P++)if(S.context===s[P]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),_p(m.return,o,r),u||(w=null);break e}m=S.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(i(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),_p(w,o,r),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===r){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function uu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var S=f.type;$n(f.pendingProps.value,w.value)||(r!==null?r.push(S):r=[S])}}else if(f===ft.current){if(w=f.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(ju):r=[ju])}f=f.return}r!==null&&vp(s,r,o,u),s.flags|=262144}function vh(r){for(r=r.firstContext;r!==null;){if(!$n(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Pa(r){Na=r,Mi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function En(r){return Y_(Na,r)}function Eh(r,s){return Na===null&&Pa(r),Y_(r,s)}function Y_(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Mi===null){if(r===null)throw Error(i(308));Mi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Mi=Mi.next=s;return o}var TA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},SA=t.unstable_scheduleCallback,xA=t.unstable_NormalPriority,Gt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ep(){return{controller:new TA,data:new Map,refCount:0}}function cu(r){r.refCount--,r.refCount===0&&SA(xA,function(){r.controller.abort()})}var hu=null,wp=0,Vo=0,Lo=null;function AA(r,s){if(hu===null){var o=hu=[];wp=0,Vo=Tm(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return wp++,s.then(W_,W_),s}function W_(){if(--wp===0&&hu!==null){Lo!==null&&(Lo.status="fulfilled");var r=hu;hu=null,Vo=0,Lo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function RA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Q_=K.S;K.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&AA(r,s),Q_!==null&&Q_(r,s)};var Va=ee(null);function bp(){var r=Va.current;return r!==null?r:mt.pooledCache}function wh(r,s){s===null?ie(Va,Va.current):ie(Va,s.pool)}function K_(){var r=bp();return r===null?null:{parent:Gt._currentValue,pool:r}}var fu=Error(i(460)),X_=Error(i(474)),bh=Error(i(542)),Tp={then:function(){}};function Z_(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Th(){}function J_(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Th,Th),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,tv(r),r;default:if(typeof s.status=="string")s.then(Th,Th);else{if(r=mt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,tv(r),r}throw du=s,fu}}var du=null;function ev(){if(du===null)throw Error(i(459));var r=du;return du=null,r}function tv(r){if(r===fu||r===bh)throw Error(i(483))}var gs=!1;function Sp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ys(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function _s(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(it&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=mh(r),B_(r,null,o),s}return ph(r,u,s,o),mh(r)}function pu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,fa(r,o)}}function Ap(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Rp=!1;function mu(){if(Rp){var r=Lo;if(r!==null)throw r}}function gu(r,s,o,u){Rp=!1;var f=r.updateQueue;gs=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var P=S,Q=P.next;P.next=null,w===null?m=Q:w.next=Q,w=P;var re=r.alternate;re!==null&&(re=re.updateQueue,S=re.lastBaseUpdate,S!==w&&(S===null?re.firstBaseUpdate=Q:S.next=Q,re.lastBaseUpdate=P))}if(m!==null){var ue=f.baseState;w=0,re=Q=P=null,S=m;do{var X=S.lane&-536870913,Z=X!==S.lane;if(Z?(We&X)===X:(u&X)===X){X!==0&&X===Vo&&(Rp=!0),re!==null&&(re=re.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ke=r,Ae=S;X=s;var ct=o;switch(Ae.tag){case 1:if(ke=Ae.payload,typeof ke=="function"){ue=ke.call(ct,ue,X);break e}ue=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Ae.payload,X=typeof ke=="function"?ke.call(ct,ue,X):ke,X==null)break e;ue=v({},ue,X);break e;case 2:gs=!0}}X=S.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},re===null?(Q=re=Z,P=ue):re=re.next=Z,w|=X;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Z=S,S=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);re===null&&(P=ue),f.baseState=P,f.firstBaseUpdate=Q,f.lastBaseUpdate=re,m===null&&(f.shared.lanes=0),As|=w,r.lanes=w,r.memoizedState=ue}}function nv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function rv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)nv(o[r],s)}var jo=ee(null),Sh=ee(0);function iv(r,s){r=Bi,ie(Sh,r),ie(jo,s),Bi=r|s.baseLanes}function Cp(){ie(Sh,Bi),ie(jo,jo.current)}function Ip(){Bi=Sh.current,se(jo),se(Sh)}var vs=0,je=null,lt=null,Pt=null,xh=!1,Uo=!1,La=!1,Ah=0,yu=0,qo=null,CA=0;function Dt(){throw Error(i(321))}function Dp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!$n(r[o],s[o]))return!1;return!0}function kp(r,s,o,u,f,m){return vs=m,je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=r===null||r.memoizedState===null?Bv:zv,La=!1,m=o(u,f),La=!1,Uo&&(m=av(s,o,u,f)),sv(r),m}function sv(r){K.H=Oh;var s=lt!==null&&lt.next!==null;if(vs=0,Pt=lt=je=null,xh=!1,yu=0,qo=null,s)throw Error(i(300));r===null||tn||(r=r.dependencies,r!==null&&vh(r)&&(tn=!0))}function av(r,s,o,u){je=r;var f=0;do{if(Uo&&(qo=null),yu=0,Uo=!1,25<=f)throw Error(i(301));if(f+=1,Pt=lt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=PA,m=s(o,u)}while(Uo);return m}function IA(){var r=K.H,s=r.useState()[0];return s=typeof s.then=="function"?_u(s):s,r=r.useState()[0],(lt!==null?lt.memoizedState:null)!==r&&(je.flags|=1024),s}function Op(){var r=Ah!==0;return Ah=0,r}function Mp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Np(r){if(xh){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xh=!1}vs=0,Pt=lt=je=null,Uo=!1,yu=Ah=0,qo=null}function Ln(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?je.memoizedState=Pt=r:Pt=Pt.next=r,Pt}function Vt(){if(lt===null){var r=je.alternate;r=r!==null?r.memoizedState:null}else r=lt.next;var s=Pt===null?je.memoizedState:Pt.next;if(s!==null)Pt=s,lt=r;else{if(r===null)throw je.alternate===null?Error(i(467)):Error(i(310));lt=r,r={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},Pt===null?je.memoizedState=Pt=r:Pt=Pt.next=r}return Pt}function Pp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(r){var s=yu;return yu+=1,qo===null&&(qo=[]),r=J_(qo,r,s),s=je,(Pt===null?s.memoizedState:Pt.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?Bv:zv),r}function Rh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return _u(r);if(r.$$typeof===U)return En(r)}throw Error(i(438,String(r)))}function Vp(r){var s=null,o=je.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=je.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Pp(),je.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=k;return s.index++,o}function Pi(r,s){return typeof s=="function"?s(r):s}function Ch(r){var s=Vt();return Lp(s,lt,r)}function Lp(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=w=null,P=null,Q=s,re=!1;do{var ue=Q.lane&-536870913;if(ue!==Q.lane?(We&ue)===ue:(vs&ue)===ue){var X=Q.revertLane;if(X===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ue===Vo&&(re=!0);else if((vs&X)===X){Q=Q.next,X===Vo&&(re=!0);continue}else ue={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(S=P=ue,w=m):P=P.next=ue,je.lanes|=X,As|=X;ue=Q.action,La&&o(m,ue),m=Q.hasEagerState?Q.eagerState:o(m,ue)}else X={lane:ue,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(S=P=X,w=m):P=P.next=X,je.lanes|=ue,As|=ue;Q=Q.next}while(Q!==null&&Q!==s);if(P===null?w=m:P.next=S,!$n(m,r.memoizedState)&&(tn=!0,re&&(o=Lo,o!==null)))throw o;r.memoizedState=m,r.baseState=w,r.baseQueue=P,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function jp(r){var s=Vt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=r(m,w.action),w=w.next;while(w!==f);$n(m,s.memoizedState)||(tn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function ov(r,s,o){var u=je,f=Vt(),m=Je;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var w=!$n((lt||f).memoizedState,o);w&&(f.memoizedState=o,tn=!0),f=f.queue;var S=cv.bind(null,u,f,r);if(vu(2048,8,S,[r]),f.getSnapshot!==s||w||Pt!==null&&Pt.memoizedState.tag&1){if(u.flags|=2048,Bo(9,Ih(),uv.bind(null,u,f,o,s),null),mt===null)throw Error(i(349));m||(vs&124)!==0||lv(u,s,o)}return o}function lv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=je.updateQueue,s===null?(s=Pp(),je.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function uv(r,s,o,u){s.value=o,s.getSnapshot=u,hv(s)&&fv(r)}function cv(r,s,o){return o(function(){hv(s)&&fv(r)})}function hv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!$n(r,o)}catch{return!0}}function fv(r){var s=Oo(r,2);s!==null&&Kn(s,r,2)}function Up(r){var s=Ln();if(typeof r=="function"){var o=r;if(r=o(),La){Dn(!0);try{o()}finally{Dn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:r},s}function dv(r,s,o,u){return r.baseState=o,Lp(r,lt,typeof u=="function"?u:Pi)}function DA(r,s,o,u,f){if(kh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};K.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,pv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function pv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=K.T,w={};K.T=w;try{var S=o(f,u),P=K.S;P!==null&&P(w,S),mv(r,s,S)}catch(Q){qp(r,s,Q)}finally{K.T=m}}else try{m=o(f,u),mv(r,s,m)}catch(Q){qp(r,s,Q)}}function mv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){gv(r,s,u)},function(u){return qp(r,s,u)}):gv(r,s,o)}function gv(r,s,o){s.status="fulfilled",s.value=o,yv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,pv(r,o)))}function qp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,yv(s),s=s.next;while(s!==u)}r.action=null}function yv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function _v(r,s){return s}function vv(r,s){if(Je){var o=mt.formState;if(o!==null){e:{var u=je;if(Je){if(At){t:{for(var f=At,m=Gr;f.nodeType!==8;){if(!m){f=null;break t}if(f=br(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){At=br(f.nextSibling),u=f.data==="F!";break e}}Ma(u)}u=!1}u&&(s=o[0])}}return o=Ln(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_v,lastRenderedState:s},o.queue=u,o=jv.bind(null,je,u),u.dispatch=o,u=Up(!1),m=Hp.bind(null,je,!1,u.queue),u=Ln(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=DA.bind(null,je,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Ev(r){var s=Vt();return wv(s,lt,r)}function wv(r,s,o){if(s=Lp(r,s,_v)[0],r=Ch(Pi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=_u(s)}catch(w){throw w===fu?bh:w}else u=s;s=Vt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(je.flags|=2048,Bo(9,Ih(),kA.bind(null,f,o),null)),[u,m,r]}function kA(r,s){r.action=s}function bv(r){var s=Vt(),o=lt;if(o!==null)return wv(s,o,r);Vt(),s=s.memoizedState,o=Vt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Bo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=je.updateQueue,s===null&&(s=Pp(),je.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Ih(){return{destroy:void 0,resource:void 0}}function Tv(){return Vt().memoizedState}function Dh(r,s,o,u){var f=Ln();u=u===void 0?null:u,je.flags|=r,f.memoizedState=Bo(1|s,Ih(),o,u)}function vu(r,s,o,u){var f=Vt();u=u===void 0?null:u;var m=f.memoizedState.inst;lt!==null&&u!==null&&Dp(u,lt.memoizedState.deps)?f.memoizedState=Bo(s,m,o,u):(je.flags|=r,f.memoizedState=Bo(1|s,m,o,u))}function Sv(r,s){Dh(8390656,8,r,s)}function xv(r,s){vu(2048,8,r,s)}function Av(r,s){return vu(4,2,r,s)}function Rv(r,s){return vu(4,4,r,s)}function Cv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Iv(r,s,o){o=o!=null?o.concat([r]):null,vu(4,4,Cv.bind(null,s,r),o)}function Bp(){}function Dv(r,s){var o=Vt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Dp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function kv(r,s){var o=Vt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Dp(s,u[1]))return u[0];if(u=r(),La){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u}function zp(r,s,o){return o===void 0||(vs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=N0(),je.lanes|=r,As|=r,o)}function Ov(r,s,o,u){return $n(o,s)?o:jo.current!==null?(r=zp(r,o,u),$n(r,s)||(tn=!0),r):(vs&42)===0?(tn=!0,r.memoizedState=o):(r=N0(),je.lanes|=r,As|=r,s)}function Mv(r,s,o,u,f){var m=le.p;le.p=m!==0&&8>m?m:8;var w=K.T,S={};K.T=S,Hp(r,!1,s,o);try{var P=f(),Q=K.S;if(Q!==null&&Q(S,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var re=RA(P,u);Eu(r,s,re,Qn(r))}else Eu(r,s,u,Qn(r))}catch(ue){Eu(r,s,{then:function(){},status:"rejected",reason:ue},Qn())}finally{le.p=m,K.T=w}}function OA(){}function Fp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Nv(r).queue;Mv(r,f,s,fe,o===null?OA:function(){return Pv(r),o(u)})}function Nv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:fe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Pv(r){var s=Nv(r).next.queue;Eu(r,s,{},Qn())}function $p(){return En(ju)}function Vv(){return Vt().memoizedState}function Lv(){return Vt().memoizedState}function MA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Qn();r=ys(o);var u=_s(s,r,o);u!==null&&(Kn(u,s,o),pu(u,s,o)),s={cache:Ep()},r.payload=s;return}s=s.return}}function NA(r,s,o){var u=Qn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kh(r)?Uv(s,o):(o=cp(r,s,o,u),o!==null&&(Kn(o,r,u),qv(o,s,u)))}function jv(r,s,o){var u=Qn();Eu(r,s,o,u)}function Eu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(r))Uv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,S=m(w,o);if(f.hasEagerState=!0,f.eagerState=S,$n(S,w))return ph(r,s,f,0),mt===null&&dh(),!1}catch{}finally{}if(o=cp(r,s,f,u),o!==null)return Kn(o,r,u),qv(o,s,u),!0}return!1}function Hp(r,s,o,u){if(u={lane:2,revertLane:Tm(),action:u,hasEagerState:!1,eagerState:null,next:null},kh(r)){if(s)throw Error(i(479))}else s=cp(r,o,u,2),s!==null&&Kn(s,r,2)}function kh(r){var s=r.alternate;return r===je||s!==null&&s===je}function Uv(r,s){Uo=xh=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function qv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,fa(r,o)}}var Oh={readContext:En,use:Rh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},Bv={readContext:En,use:Rh,useCallback:function(r,s){return Ln().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:Sv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Dh(4194308,4,Cv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Dh(4194308,4,r,s)},useInsertionEffect:function(r,s){Dh(4,2,r,s)},useMemo:function(r,s){var o=Ln();s=s===void 0?null:s;var u=r();if(La){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Ln();if(o!==void 0){var f=o(s);if(La){Dn(!0);try{o(s)}finally{Dn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=NA.bind(null,je,r),[u.memoizedState,r]},useRef:function(r){var s=Ln();return r={current:r},s.memoizedState=r},useState:function(r){r=Up(r);var s=r.queue,o=jv.bind(null,je,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Bp,useDeferredValue:function(r,s){var o=Ln();return zp(o,r,s)},useTransition:function(){var r=Up(!1);return r=Mv.bind(null,je,r.queue,!0,!1),Ln().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=je,f=Ln();if(Je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),mt===null)throw Error(i(349));(We&124)!==0||lv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,Sv(cv.bind(null,u,m,r),[r]),u.flags|=2048,Bo(9,Ih(),uv.bind(null,u,m,o,s),null),o},useId:function(){var r=Ln(),s=mt.identifierPrefix;if(Je){var o=Oi,u=ki;o=(u&~(1<<32-Xt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ah++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=CA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:$p,useFormState:vv,useActionState:vv,useOptimistic:function(r){var s=Ln();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Hp.bind(null,je,!0,o),o.dispatch=s,[r,s]},useMemoCache:Vp,useCacheRefresh:function(){return Ln().memoizedState=MA.bind(null,je)}},zv={readContext:En,use:Rh,useCallback:Dv,useContext:En,useEffect:xv,useImperativeHandle:Iv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:kv,useReducer:Ch,useRef:Tv,useState:function(){return Ch(Pi)},useDebugValue:Bp,useDeferredValue:function(r,s){var o=Vt();return Ov(o,lt.memoizedState,r,s)},useTransition:function(){var r=Ch(Pi)[0],s=Vt().memoizedState;return[typeof r=="boolean"?r:_u(r),s]},useSyncExternalStore:ov,useId:Vv,useHostTransitionStatus:$p,useFormState:Ev,useActionState:Ev,useOptimistic:function(r,s){var o=Vt();return dv(o,lt,r,s)},useMemoCache:Vp,useCacheRefresh:Lv},PA={readContext:En,use:Rh,useCallback:Dv,useContext:En,useEffect:xv,useImperativeHandle:Iv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:kv,useReducer:jp,useRef:Tv,useState:function(){return jp(Pi)},useDebugValue:Bp,useDeferredValue:function(r,s){var o=Vt();return lt===null?zp(o,r,s):Ov(o,lt.memoizedState,r,s)},useTransition:function(){var r=jp(Pi)[0],s=Vt().memoizedState;return[typeof r=="boolean"?r:_u(r),s]},useSyncExternalStore:ov,useId:Vv,useHostTransitionStatus:$p,useFormState:bv,useActionState:bv,useOptimistic:function(r,s){var o=Vt();return lt!==null?dv(o,lt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Vp,useCacheRefresh:Lv},zo=null,wu=0;function Mh(r){var s=wu;return wu+=1,zo===null&&(zo=[]),J_(zo,r,s)}function bu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Nh(r,s){throw s.$$typeof===b?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Fv(r){var s=r._init;return s(r._payload)}function $v(r){function s(G,F){if(r){var W=G.deletions;W===null?(G.deletions=[F],G.flags|=16):W.push(F)}}function o(G,F){if(!r)return null;for(;F!==null;)s(G,F),F=F.sibling;return null}function u(G){for(var F=new Map;G!==null;)G.key!==null?F.set(G.key,G):F.set(G.index,G),G=G.sibling;return F}function f(G,F){return G=Di(G,F),G.index=0,G.sibling=null,G}function m(G,F,W){return G.index=W,r?(W=G.alternate,W!==null?(W=W.index,W<F?(G.flags|=67108866,F):W):(G.flags|=67108866,F)):(G.flags|=1048576,F)}function w(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function S(G,F,W,ae){return F===null||F.tag!==6?(F=fp(W,G.mode,ae),F.return=G,F):(F=f(F,W),F.return=G,F)}function P(G,F,W,ae){var Ee=W.type;return Ee===V?re(G,F,W.props.children,ae,W.key):F!==null&&(F.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===A&&Fv(Ee)===F.type)?(F=f(F,W.props),bu(F,W),F.return=G,F):(F=gh(W.type,W.key,W.props,null,G.mode,ae),bu(F,W),F.return=G,F)}function Q(G,F,W,ae){return F===null||F.tag!==4||F.stateNode.containerInfo!==W.containerInfo||F.stateNode.implementation!==W.implementation?(F=dp(W,G.mode,ae),F.return=G,F):(F=f(F,W.children||[]),F.return=G,F)}function re(G,F,W,ae,Ee){return F===null||F.tag!==7?(F=Ia(W,G.mode,ae,Ee),F.return=G,F):(F=f(F,W),F.return=G,F)}function ue(G,F,W){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=fp(""+F,G.mode,W),F.return=G,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case T:return W=gh(F.type,F.key,F.props,null,G.mode,W),bu(W,F),W.return=G,W;case C:return F=dp(F,G.mode,W),F.return=G,F;case A:var ae=F._init;return F=ae(F._payload),ue(G,F,W)}if(ge(F)||q(F))return F=Ia(F,G.mode,W,null),F.return=G,F;if(typeof F.then=="function")return ue(G,Mh(F),W);if(F.$$typeof===U)return ue(G,Eh(G,F),W);Nh(G,F)}return null}function X(G,F,W,ae){var Ee=F!==null?F.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return Ee!==null?null:S(G,F,""+W,ae);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case T:return W.key===Ee?P(G,F,W,ae):null;case C:return W.key===Ee?Q(G,F,W,ae):null;case A:return Ee=W._init,W=Ee(W._payload),X(G,F,W,ae)}if(ge(W)||q(W))return Ee!==null?null:re(G,F,W,ae,null);if(typeof W.then=="function")return X(G,F,Mh(W),ae);if(W.$$typeof===U)return X(G,F,Eh(G,W),ae);Nh(G,W)}return null}function Z(G,F,W,ae,Ee){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return G=G.get(W)||null,S(F,G,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case T:return G=G.get(ae.key===null?W:ae.key)||null,P(F,G,ae,Ee);case C:return G=G.get(ae.key===null?W:ae.key)||null,Q(F,G,ae,Ee);case A:var Ue=ae._init;return ae=Ue(ae._payload),Z(G,F,W,ae,Ee)}if(ge(ae)||q(ae))return G=G.get(W)||null,re(F,G,ae,Ee,null);if(typeof ae.then=="function")return Z(G,F,W,Mh(ae),Ee);if(ae.$$typeof===U)return Z(G,F,W,Eh(F,ae),Ee);Nh(F,ae)}return null}function ke(G,F,W,ae){for(var Ee=null,Ue=null,be=F,Re=F=0,rn=null;be!==null&&Re<W.length;Re++){be.index>Re?(rn=be,be=null):rn=be.sibling;var Xe=X(G,be,W[Re],ae);if(Xe===null){be===null&&(be=rn);break}r&&be&&Xe.alternate===null&&s(G,be),F=m(Xe,F,Re),Ue===null?Ee=Xe:Ue.sibling=Xe,Ue=Xe,be=rn}if(Re===W.length)return o(G,be),Je&&ka(G,Re),Ee;if(be===null){for(;Re<W.length;Re++)be=ue(G,W[Re],ae),be!==null&&(F=m(be,F,Re),Ue===null?Ee=be:Ue.sibling=be,Ue=be);return Je&&ka(G,Re),Ee}for(be=u(be);Re<W.length;Re++)rn=Z(be,G,Re,W[Re],ae),rn!==null&&(r&&rn.alternate!==null&&be.delete(rn.key===null?Re:rn.key),F=m(rn,F,Re),Ue===null?Ee=rn:Ue.sibling=rn,Ue=rn);return r&&be.forEach(function(Ps){return s(G,Ps)}),Je&&ka(G,Re),Ee}function Ae(G,F,W,ae){if(W==null)throw Error(i(151));for(var Ee=null,Ue=null,be=F,Re=F=0,rn=null,Xe=W.next();be!==null&&!Xe.done;Re++,Xe=W.next()){be.index>Re?(rn=be,be=null):rn=be.sibling;var Ps=X(G,be,Xe.value,ae);if(Ps===null){be===null&&(be=rn);break}r&&be&&Ps.alternate===null&&s(G,be),F=m(Ps,F,Re),Ue===null?Ee=Ps:Ue.sibling=Ps,Ue=Ps,be=rn}if(Xe.done)return o(G,be),Je&&ka(G,Re),Ee;if(be===null){for(;!Xe.done;Re++,Xe=W.next())Xe=ue(G,Xe.value,ae),Xe!==null&&(F=m(Xe,F,Re),Ue===null?Ee=Xe:Ue.sibling=Xe,Ue=Xe);return Je&&ka(G,Re),Ee}for(be=u(be);!Xe.done;Re++,Xe=W.next())Xe=Z(be,G,Re,Xe.value,ae),Xe!==null&&(r&&Xe.alternate!==null&&be.delete(Xe.key===null?Re:Xe.key),F=m(Xe,F,Re),Ue===null?Ee=Xe:Ue.sibling=Xe,Ue=Xe);return r&&be.forEach(function(VR){return s(G,VR)}),Je&&ka(G,Re),Ee}function ct(G,F,W,ae){if(typeof W=="object"&&W!==null&&W.type===V&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case T:e:{for(var Ee=W.key;F!==null;){if(F.key===Ee){if(Ee=W.type,Ee===V){if(F.tag===7){o(G,F.sibling),ae=f(F,W.props.children),ae.return=G,G=ae;break e}}else if(F.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===A&&Fv(Ee)===F.type){o(G,F.sibling),ae=f(F,W.props),bu(ae,W),ae.return=G,G=ae;break e}o(G,F);break}else s(G,F);F=F.sibling}W.type===V?(ae=Ia(W.props.children,G.mode,ae,W.key),ae.return=G,G=ae):(ae=gh(W.type,W.key,W.props,null,G.mode,ae),bu(ae,W),ae.return=G,G=ae)}return w(G);case C:e:{for(Ee=W.key;F!==null;){if(F.key===Ee)if(F.tag===4&&F.stateNode.containerInfo===W.containerInfo&&F.stateNode.implementation===W.implementation){o(G,F.sibling),ae=f(F,W.children||[]),ae.return=G,G=ae;break e}else{o(G,F);break}else s(G,F);F=F.sibling}ae=dp(W,G.mode,ae),ae.return=G,G=ae}return w(G);case A:return Ee=W._init,W=Ee(W._payload),ct(G,F,W,ae)}if(ge(W))return ke(G,F,W,ae);if(q(W)){if(Ee=q(W),typeof Ee!="function")throw Error(i(150));return W=Ee.call(W),Ae(G,F,W,ae)}if(typeof W.then=="function")return ct(G,F,Mh(W),ae);if(W.$$typeof===U)return ct(G,F,Eh(G,W),ae);Nh(G,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,F!==null&&F.tag===6?(o(G,F.sibling),ae=f(F,W),ae.return=G,G=ae):(o(G,F),ae=fp(W,G.mode,ae),ae.return=G,G=ae),w(G)):o(G,F)}return function(G,F,W,ae){try{wu=0;var Ee=ct(G,F,W,ae);return zo=null,Ee}catch(be){if(be===fu||be===bh)throw be;var Ue=Hn(29,be,null,G.mode);return Ue.lanes=ae,Ue.return=G,Ue}finally{}}}var Fo=$v(!0),Hv=$v(!1),hr=ee(null),Yr=null;function Es(r){var s=r.alternate;ie(Yt,Yt.current&1),ie(hr,r),Yr===null&&(s===null||jo.current!==null||s.memoizedState!==null)&&(Yr=r)}function Gv(r){if(r.tag===22){if(ie(Yt,Yt.current),ie(hr,r),Yr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Yr=r)}}else ws()}function ws(){ie(Yt,Yt.current),ie(hr,hr.current)}function Vi(r){se(hr),Yr===r&&(Yr=null),se(Yt)}var Yt=ee(0);function Ph(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Pm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Gp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Yp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Qn(),f=ys(u);f.payload=s,o!=null&&(f.callback=o),s=_s(r,f,u),s!==null&&(Kn(s,r,u),pu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Qn(),f=ys(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=_s(r,f,u),s!==null&&(Kn(s,r,u),pu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Qn(),u=ys(o);u.tag=2,s!=null&&(u.callback=s),s=_s(r,u,o),s!==null&&(Kn(s,r,o),pu(s,r,o))}};function Yv(r,s,o,u,f,m,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,w):s.prototype&&s.prototype.isPureReactComponent?!iu(o,u)||!iu(f,m):!0}function Wv(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Yp.enqueueReplaceState(s,s.state,null)}function ja(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Vh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Qv(r){Vh(r)}function Kv(r){console.error(r)}function Xv(r){Vh(r)}function Lh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function Zv(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Wp(r,s,o){return o=ys(o),o.tag=3,o.payload={element:null},o.callback=function(){Lh(r,s)},o}function Jv(r){return r=ys(r),r.tag=3,r}function e0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){Zv(s,o,u)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(r.callback=function(){Zv(s,o,u),typeof f!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function VA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&uu(s,o,f,!0),o=hr.current,o!==null){switch(o.tag){case 13:return Yr===null?_m():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Tp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Em(r,u,f)),!1;case 22:return o.flags|=65536,u===Tp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Em(r,u,f)),!1}throw Error(i(435,o.tag))}return Em(r,u,f),_m(),!1}if(Je)return s=hr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==gp&&(r=Error(i(422),{cause:u}),lu(or(r,o)))):(u!==gp&&(s=Error(i(423),{cause:u}),lu(or(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=or(u,o),f=Wp(r.stateNode,u,f),Ap(r,f),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:u});if(m=or(m,o),Iu===null?Iu=[m]:Iu.push(m),Rt!==4&&(Rt=2),s===null)return!0;u=or(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Wp(o.stateNode,u,r),Ap(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Rs===null||!Rs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Jv(f),e0(f,r,o,u),Ap(o,f),!1}o=o.return}while(o!==null);return!1}var t0=Error(i(461)),tn=!1;function fn(r,s,o,u){s.child=r===null?Hv(s,null,o,u):Fo(s,r.child,o,u)}function n0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var w={};for(var S in u)S!=="ref"&&(w[S]=u[S])}else w=u;return Pa(s),u=kp(r,s,o,w,m,f),S=Op(),r!==null&&!tn?(Mp(r,s,f),Li(r,s,f)):(Je&&S&&pp(s),s.flags|=1,fn(r,s,u,f),s.child)}function r0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!hp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,i0(r,s,m,u,f)):(r=gh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!nm(r,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:iu,o(w,u)&&r.ref===s.ref)return Li(r,s,f)}return s.flags|=1,r=Di(m,u),r.ref=s.ref,r.return=s,s.child=r}function i0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(iu(m,u)&&r.ref===s.ref)if(tn=!1,s.pendingProps=u=m,nm(r,f))(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Li(r,s,f)}return Qp(r,s,o,u,f)}function s0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return a0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&wh(s,m!==null?m.cachePool:null),m!==null?iv(s,m):Cp(),Gv(s);else return s.lanes=s.childLanes=536870912,a0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(wh(s,m.cachePool),iv(s,m),ws(),s.memoizedState=null):(r!==null&&wh(s,null),Cp(),ws());return fn(r,s,f,o),s.child}function a0(r,s,o,u){var f=bp();return f=f===null?null:{parent:Gt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&wh(s,null),Cp(),Gv(s),r!==null&&uu(r,s,u,!0),null}function jh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Qp(r,s,o,u,f){return Pa(s),o=kp(r,s,o,u,void 0,f),u=Op(),r!==null&&!tn?(Mp(r,s,f),Li(r,s,f)):(Je&&u&&pp(s),s.flags|=1,fn(r,s,o,f),s.child)}function o0(r,s,o,u,f,m){return Pa(s),s.updateQueue=null,o=av(s,u,o,f),sv(r),u=Op(),r!==null&&!tn?(Mp(r,s,m),Li(r,s,m)):(Je&&u&&pp(s),s.flags|=1,fn(r,s,o,m),s.child)}function l0(r,s,o,u,f){if(Pa(s),s.stateNode===null){var m=Mo,w=o.contextType;typeof w=="object"&&w!==null&&(m=En(w)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Yp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Sp(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?En(w):Mo,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(Gp(s,o,w,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Yp.enqueueReplaceState(m,m.state,null),gu(s,u,m,f),mu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,P=ja(o,S);m.props=P;var Q=m.context,re=o.contextType;w=Mo,typeof re=="object"&&re!==null&&(w=En(re));var ue=o.getDerivedStateFromProps;re=typeof ue=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||Q!==w)&&Wv(s,m,u,w),gs=!1;var X=s.memoizedState;m.state=X,gu(s,u,m,f),mu(),Q=s.memoizedState,S||X!==Q||gs?(typeof ue=="function"&&(Gp(s,o,ue,u),Q=s.memoizedState),(P=gs||Yv(s,o,P,u,X,Q,w))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=Q),m.props=u,m.state=Q,m.context=w,u=P):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,xp(r,s),w=s.memoizedProps,re=ja(o,w),m.props=re,ue=s.pendingProps,X=m.context,Q=o.contextType,P=Mo,typeof Q=="object"&&Q!==null&&(P=En(Q)),S=o.getDerivedStateFromProps,(Q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==ue||X!==P)&&Wv(s,m,u,P),gs=!1,X=s.memoizedState,m.state=X,gu(s,u,m,f),mu();var Z=s.memoizedState;w!==ue||X!==Z||gs||r!==null&&r.dependencies!==null&&vh(r.dependencies)?(typeof S=="function"&&(Gp(s,o,S,u),Z=s.memoizedState),(re=gs||Yv(s,o,re,u,X,Z,P)||r!==null&&r.dependencies!==null&&vh(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Z,P),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Z,P)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),m.props=u,m.state=Z,m.context=P,u=re):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,jh(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Fo(s,r.child,null,f),s.child=Fo(s,null,o,f)):fn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Li(r,s,f),r}function u0(r,s,o,u){return ou(),s.flags|=256,fn(r,s,o,u),s.child}var Kp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xp(r){return{baseLanes:r,cachePool:K_()}}function Zp(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=fr),r}function c0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=r!==null&&r.memoizedState===null?!1:(Yt.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(f?Es(s):ws(),Je){var S=At,P;if(P=S){e:{for(P=S,S=Gr;P.nodeType!==8;){if(!S){S=null;break e}if(P=br(P.nextSibling),P===null){S=null;break e}}S=P}S!==null?(s.memoizedState={dehydrated:S,treeContext:Da!==null?{id:ki,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},P=Hn(18,null,null,0),P.stateNode=S,P.return=s,s.child=P,Nn=s,At=null,P=!0):P=!1}P||Ma(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Pm(S)?s.lanes=32:s.lanes=536870912,null;Vi(s)}return S=u.children,u=u.fallback,f?(ws(),f=s.mode,S=Uh({mode:"hidden",children:S},f),u=Ia(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Xp(o),f.childLanes=Zp(r,w,o),s.memoizedState=Kp,u):(Es(s),Jp(s,S))}if(P=r.memoizedState,P!==null&&(S=P.dehydrated,S!==null)){if(m)s.flags&256?(Es(s),s.flags&=-257,s=em(r,s,o)):s.memoizedState!==null?(ws(),s.child=r.child,s.flags|=128,s=null):(ws(),f=u.fallback,S=s.mode,u=Uh({mode:"visible",children:u.children},S),f=Ia(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Fo(s,r.child,null,o),u=s.child,u.memoizedState=Xp(o),u.childLanes=Zp(r,w,o),s.memoizedState=Kp,s=f);else if(Es(s),Pm(S)){if(w=S.nextSibling&&S.nextSibling.dataset,w)var Q=w.dgst;w=Q,u=Error(i(419)),u.stack="",u.digest=w,lu({value:u,source:null,stack:null}),s=em(r,s,o)}else if(tn||uu(r,s,o,!1),w=(o&r.childLanes)!==0,tn||w){if(w=mt,w!==null&&(u=o&-o,u=(u&42)!==0?1:Pr(u),u=(u&(w.suspendedLanes|o))!==0?0:u,u!==0&&u!==P.retryLane))throw P.retryLane=u,Oo(r,u),Kn(w,r,u),t0;S.data==="$?"||_m(),s=em(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=P.treeContext,At=br(S.nextSibling),Nn=s,Je=!0,Oa=null,Gr=!1,r!==null&&(ur[cr++]=ki,ur[cr++]=Oi,ur[cr++]=Da,ki=r.id,Oi=r.overflow,Da=s),s=Jp(s,u.children),s.flags|=4096);return s}return f?(ws(),f=u.fallback,S=s.mode,P=r.child,Q=P.sibling,u=Di(P,{mode:"hidden",children:u.children}),u.subtreeFlags=P.subtreeFlags&65011712,Q!==null?f=Di(Q,f):(f=Ia(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=Xp(o):(P=S.cachePool,P!==null?(Q=Gt._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=K_(),S={baseLanes:S.baseLanes|o,cachePool:P}),f.memoizedState=S,f.childLanes=Zp(r,w,o),s.memoizedState=Kp,u):(Es(s),o=r.child,r=o.sibling,o=Di(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(w=s.deletions,w===null?(s.deletions=[r],s.flags|=16):w.push(r)),s.child=o,s.memoizedState=null,o)}function Jp(r,s){return s=Uh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Uh(r,s){return r=Hn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function em(r,s,o){return Fo(s,r.child,null,o),r=Jp(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function h0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),_p(r.return,s,o)}function tm(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function f0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(fn(r,s,u.children,o),u=Yt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&h0(r,o,s);else if(r.tag===19)h0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ie(Yt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Ph(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),tm(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Ph(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}tm(s,!0,o,null,m);break;case"together":tm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Li(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),As|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(uu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Di(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Di(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function nm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&vh(r)))}function LA(r,s,o){switch(s.tag){case 3:He(s,s.stateNode.containerInfo),ms(s,Gt,r.memoizedState.cache),ou();break;case 27:case 5:Pn(s);break;case 4:He(s,s.stateNode.containerInfo);break;case 10:ms(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Es(s),s.flags|=128,null):(o&s.child.childLanes)!==0?c0(r,s,o):(Es(s),r=Li(r,s,o),r!==null?r.sibling:null);Es(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(uu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return f0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Yt,Yt.current),u)break;return null;case 22:case 23:return s.lanes=0,s0(r,s,o);case 24:ms(s,Gt,r.memoizedState.cache)}return Li(r,s,o)}function d0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)tn=!0;else{if(!nm(r,o)&&(s.flags&128)===0)return tn=!1,LA(r,s,o);tn=(r.flags&131072)!==0}else tn=!1,Je&&(s.flags&1048576)!==0&&F_(s,_h,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")hp(u)?(r=ja(u,r),s.tag=1,s=l0(null,s,u,r,o)):(s.tag=0,s=Qp(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===te){s.tag=11,s=n0(null,s,u,r,o);break e}else if(f===R){s.tag=14,s=r0(null,s,u,r,o);break e}}throw s=he(u)||u,Error(i(306,s,""))}}return s;case 0:return Qp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=ja(u,s.pendingProps),l0(r,s,u,f,o);case 3:e:{if(He(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,xp(r,s),gu(s,u,null,o);var w=s.memoizedState;if(u=w.cache,ms(s,Gt,u),u!==m.cache&&vp(s,[Gt],o,!0),mu(),u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=u0(r,s,u,o);break e}else if(u!==f){f=or(Error(i(424)),s),lu(f),s=u0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(At=br(r.firstChild),Nn=s,Je=!0,Oa=null,Gr=!0,o=Hv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ou(),u===f){s=Li(r,s,o);break e}fn(r,s,u,o)}s=s.child}return s;case 26:return jh(r,s),r===null?(o=yE(s.type,null,s.pendingProps,null))?s.memoizedState=o:Je||(o=s.type,r=s.pendingProps,u=Jh(we.current).createElement(o),u[Ft]=s,u[Mt]=r,pn(u,o,r),It(u),s.stateNode=u):s.memoizedState=yE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Pn(s),r===null&&Je&&(u=s.stateNode=pE(s.type,s.pendingProps,we.current),Nn=s,Gr=!0,f=At,Ds(s.type)?(Vm=f,At=br(u.firstChild)):At=f),fn(r,s,s.pendingProps.children,o),jh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((f=u=At)&&(u=hR(u,s.type,s.pendingProps,Gr),u!==null?(s.stateNode=u,Nn=s,At=br(u.firstChild),Gr=!1,f=!0):f=!1),f||Ma(s)),Pn(s),f=s.type,m=s.pendingProps,w=r!==null?r.memoizedProps:null,u=m.children,Om(f,m)?u=null:w!==null&&Om(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=kp(r,s,IA,null,null,o),ju._currentValue=f),jh(r,s),fn(r,s,u,o),s.child;case 6:return r===null&&Je&&((r=o=At)&&(o=fR(o,s.pendingProps,Gr),o!==null?(s.stateNode=o,Nn=s,At=null,r=!0):r=!1),r||Ma(s)),null;case 13:return c0(r,s,o);case 4:return He(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Fo(s,null,u,o):fn(r,s,u,o),s.child;case 11:return n0(r,s,s.type,s.pendingProps,o);case 7:return fn(r,s,s.pendingProps,o),s.child;case 8:return fn(r,s,s.pendingProps.children,o),s.child;case 12:return fn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ms(s,s.type,u.value),fn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Pa(s),f=En(f),u=u(f),s.flags|=1,fn(r,s,u,o),s.child;case 14:return r0(r,s,s.type,s.pendingProps,o);case 15:return i0(r,s,s.type,s.pendingProps,o);case 19:return f0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Uh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Di(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return s0(r,s,o);case 24:return Pa(s),u=En(Gt),r===null?(f=bp(),f===null&&(f=mt,m=Ep(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Sp(s),ms(s,Gt,f)):((r.lanes&o)!==0&&(xp(r,s),gu(s,null,null,o),mu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ms(s,Gt,u)):(u=m.cache,ms(s,Gt,u),u!==f.cache&&vp(s,[Gt],o,!0))),fn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ji(r){r.flags|=4}function p0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!bE(s)){if(s=hr.current,s!==null&&((We&4194048)===We?Yr!==null:(We&62914560)!==We&&(We&536870912)===0||s!==Yr))throw du=Tp,X_;r.flags|=8192}}function qh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?et():536870912,r.lanes|=s,Yo|=s)}function Tu(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Tt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function jA(r,s,o){var u=s.pendingProps;switch(mp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(s),null;case 1:return Tt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Ni(Gt),bt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(au(s)?ji(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,G_())),Tt(s),null;case 26:return o=s.memoizedState,r===null?(ji(s),o!==null?(Tt(s),p0(s,o)):(Tt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(ji(s),Tt(s),p0(s,o)):(Tt(s),s.flags&=-16777217):(r.memoizedProps!==u&&ji(s),Tt(s),s.flags&=-16777217),null;case 27:vn(s),o=we.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&ji(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}r=de.current,au(s)?$_(s):(r=pE(f,u,o),s.stateNode=r,ji(s))}return Tt(s),null;case 5:if(vn(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&ji(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}if(r=de.current,au(s))$_(s);else{switch(f=Jh(we.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Ft]=s,r[Mt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(pn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ji(s)}}return Tt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&ji(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=we.current,au(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Ft]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||oE(r.nodeValue,o)),r||Ma(s)}else r=Jh(r).createTextNode(u),r[Ft]=s,s.stateNode=r}return Tt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=au(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ft]=s}else ou(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tt(s),f=!1}else f=G_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Vi(s),s):(Vi(s),null)}if(Vi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),qh(s,s.updateQueue),Tt(s),null;case 4:return bt(),r===null&&Rm(s.stateNode.containerInfo),Tt(s),null;case 10:return Ni(s.type),Tt(s),null;case 19:if(se(Yt),f=s.memoizedState,f===null)return Tt(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)Tu(f,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=Ph(r),m!==null){for(s.flags|=128,Tu(f,!1),r=m.updateQueue,s.updateQueue=r,qh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)z_(o,r),o=o.sibling;return ie(Yt,Yt.current&1|2),s.child}r=r.sibling}f.tail!==null&&Vn()>Fh&&(s.flags|=128,u=!0,Tu(f,!1),s.lanes=4194304)}else{if(!u)if(r=Ph(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,qh(s,r),Tu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Je)return Tt(s),null}else 2*Vn()-f.renderingStartTime>Fh&&o!==536870912&&(s.flags|=128,u=!0,Tu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Vn(),s.sibling=null,r=Yt.current,ie(Yt,u?r&1|2:r&1),s):(Tt(s),null);case 22:case 23:return Vi(s),Ip(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(Tt(s),s.subtreeFlags&6&&(s.flags|=8192)):Tt(s),o=s.updateQueue,o!==null&&qh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&se(Va),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ni(Gt),Tt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function UA(r,s){switch(mp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ni(Gt),bt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return vn(s),null;case 13:if(Vi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));ou()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return se(Yt),null;case 4:return bt(),null;case 10:return Ni(s.type),null;case 22:case 23:return Vi(s),Ip(),r!==null&&se(Va),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Ni(Gt),null;case 25:return null;default:return null}}function m0(r,s){switch(mp(s),s.tag){case 3:Ni(Gt),bt();break;case 26:case 27:case 5:vn(s);break;case 4:bt();break;case 13:Vi(s);break;case 19:se(Yt);break;case 10:Ni(s.type);break;case 22:case 23:Vi(s),Ip(),r!==null&&se(Va);break;case 24:Ni(Gt)}}function Su(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,w=o.inst;u=m(),w.destroy=u}o=o.next}while(o!==f)}}catch(S){dt(s,s.return,S)}}function bs(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var w=u.inst,S=w.destroy;if(S!==void 0){w.destroy=void 0,f=s;var P=o,Q=S;try{Q()}catch(re){dt(f,P,re)}}}u=u.next}while(u!==m)}}catch(re){dt(s,s.return,re)}}function g0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{rv(s,o)}catch(u){dt(r,r.return,u)}}}function y0(r,s,o){o.props=ja(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){dt(r,s,u)}}function xu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){dt(r,s,f)}}function Wr(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){dt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(r,s,f)}else o.current=null}function _0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){dt(r,r.return,f)}}function rm(r,s,o){try{var u=r.stateNode;aR(u,r.type,o,s),u[Mt]=s}catch(f){dt(r,r.return,f)}}function v0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ds(r.type)||r.tag===4}function im(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||v0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ds(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function sm(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Zh));else if(u!==4&&(u===27&&Ds(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(sm(r,s,o),r=r.sibling;r!==null;)sm(r,s,o),r=r.sibling}function Bh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Ds(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Bh(r,s,o),r=r.sibling;r!==null;)Bh(r,s,o),r=r.sibling}function E0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);pn(s,u,o),s[Ft]=r,s[Mt]=o}catch(m){dt(r,r.return,m)}}var Ui=!1,kt=!1,am=!1,w0=typeof WeakSet=="function"?WeakSet:Set,nn=null;function qA(r,s){if(r=r.containerInfo,Dm=af,r=O_(r),ip(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,S=-1,P=-1,Q=0,re=0,ue=r,X=null;t:for(;;){for(var Z;ue!==o||f!==0&&ue.nodeType!==3||(S=w+f),ue!==m||u!==0&&ue.nodeType!==3||(P=w+u),ue.nodeType===3&&(w+=ue.nodeValue.length),(Z=ue.firstChild)!==null;)X=ue,ue=Z;for(;;){if(ue===r)break t;if(X===o&&++Q===f&&(S=w),X===m&&++re===u&&(P=w),(Z=ue.nextSibling)!==null)break;ue=X,X=ue.parentNode}ue=Z}o=S===-1||P===-1?null:{start:S,end:P}}else o=null}o=o||{start:0,end:0}}else o=null;for(km={focusedElem:r,selectionRange:o},af=!1,nn=s;nn!==null;)if(s=nn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,nn=r;else for(;nn!==null;){switch(s=nn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var ke=ja(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(ke,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ae){dt(o,o.return,Ae)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Nm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Nm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,nn=r;break}nn=s.return}}function b0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ts(r,o),u&4&&Su(5,o);break;case 1:if(Ts(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(w){dt(o,o.return,w)}else{var f=ja(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(w){dt(o,o.return,w)}}u&64&&g0(o),u&512&&xu(o,o.return);break;case 3:if(Ts(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{rv(r,s)}catch(w){dt(o,o.return,w)}}break;case 27:s===null&&u&4&&E0(o);case 26:case 5:Ts(r,o),s===null&&u&4&&_0(o),u&512&&xu(o,o.return);break;case 12:Ts(r,o);break;case 13:Ts(r,o),u&4&&x0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=QA.bind(null,o),dR(r,o))));break;case 22:if(u=o.memoizedState!==null||Ui,!u){s=s!==null&&s.memoizedState!==null||kt,f=Ui;var m=kt;Ui=u,(kt=s)&&!m?Ss(r,o,(o.subtreeFlags&8772)!==0):Ts(r,o),Ui=f,kt=m}break;case 30:break;default:Ts(r,o)}}function T0(r){var s=r.alternate;s!==null&&(r.alternate=null,T0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&hs(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Et=null,jn=!1;function qi(r,s,o){for(o=o.child;o!==null;)S0(r,s,o),o=o.sibling}function S0(r,s,o){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:kt||Wr(o,s),qi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:kt||Wr(o,s);var u=Et,f=jn;Ds(o.type)&&(Et=o.stateNode,jn=!1),qi(r,s,o),Nu(o.stateNode),Et=u,jn=f;break;case 5:kt||Wr(o,s);case 6:if(u=Et,f=jn,Et=null,qi(r,s,o),Et=u,jn=f,Et!==null)if(jn)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(o.stateNode)}catch(m){dt(o,s,m)}else try{Et.removeChild(o.stateNode)}catch(m){dt(o,s,m)}break;case 18:Et!==null&&(jn?(r=Et,fE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),zu(r)):fE(Et,o.stateNode));break;case 4:u=Et,f=jn,Et=o.stateNode.containerInfo,jn=!0,qi(r,s,o),Et=u,jn=f;break;case 0:case 11:case 14:case 15:kt||bs(2,o,s),kt||bs(4,o,s),qi(r,s,o);break;case 1:kt||(Wr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&y0(o,s,u)),qi(r,s,o);break;case 21:qi(r,s,o);break;case 22:kt=(u=kt)||o.memoizedState!==null,qi(r,s,o),kt=u;break;default:qi(r,s,o)}}function x0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{zu(r)}catch(o){dt(s,s.return,o)}}function BA(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new w0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new w0),s;default:throw Error(i(435,r.tag))}}function om(r,s){var o=BA(r);s.forEach(function(u){var f=KA.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Gn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,w=s,S=w;e:for(;S!==null;){switch(S.tag){case 27:if(Ds(S.type)){Et=S.stateNode,jn=!1;break e}break;case 5:Et=S.stateNode,jn=!1;break e;case 3:case 4:Et=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(Et===null)throw Error(i(160));S0(m,w,f),Et=null,jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)A0(s,r),s=s.sibling}var wr=null;function A0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Gn(s,r),Yn(r),u&4&&(bs(3,r,r.return),Su(3,r),bs(5,r,r.return));break;case 1:Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),u&64&&Ui&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=wr;if(Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[da]||m[Ft]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),pn(m,u,o),m[Ft]=r,It(m),u=m;break e;case"link":var w=EE("link","href",f).get(u+(o.href||""));if(w){for(var S=0;S<w.length;S++)if(m=w[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;case"meta":if(w=EE("meta","content",f).get(u+(o.content||""))){for(S=0;S<w.length;S++)if(m=w[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[Ft]=r,It(m),u=m}r.stateNode=u}else wE(f,r.type,r.stateNode);else r.stateNode=vE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?wE(f,r.type,r.stateNode):vE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&rm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),o!==null&&u&4&&rm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),r.flags&32){f=r.stateNode;try{rr(f,"")}catch(Z){dt(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,rm(r,f,o!==null?o.memoizedProps:f)),u&1024&&(am=!0);break;case 6:if(Gn(s,r),Yn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){dt(r,r.return,Z)}}break;case 3:if(nf=null,f=wr,wr=ef(s.containerInfo),Gn(s,r),wr=f,Yn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{zu(s.containerInfo)}catch(Z){dt(r,r.return,Z)}am&&(am=!1,R0(r));break;case 4:u=wr,wr=ef(r.stateNode.containerInfo),Gn(s,r),Yn(r),wr=u;break;case 12:Gn(s,r),Yn(r);break;case 13:Gn(s,r),Yn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dm=Vn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,om(r,u)));break;case 22:f=r.memoizedState!==null;var P=o!==null&&o.memoizedState!==null,Q=Ui,re=kt;if(Ui=Q||f,kt=re||P,Gn(s,r),kt=re,Ui=Q,Yn(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||P||Ui||kt||Ua(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){P=o=s;try{if(m=P.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{S=P.stateNode;var ue=P.memoizedProps.style,X=ue!=null&&ue.hasOwnProperty("display")?ue.display:null;S.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){dt(P,P.return,Z)}}}else if(s.tag===6){if(o===null){P=s;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(Z){dt(P,P.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,om(r,o))));break;case 19:Gn(s,r),Yn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,om(r,u)));break;case 30:break;case 21:break;default:Gn(s,r),Yn(r)}}function Yn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(v0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=im(r);Bh(r,m,f);break;case 5:var w=o.stateNode;o.flags&32&&(rr(w,""),o.flags&=-33);var S=im(r);Bh(r,S,w);break;case 3:case 4:var P=o.stateNode.containerInfo,Q=im(r);sm(r,Q,P);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function R0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;R0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ts(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)b0(r,s.alternate,s),s=s.sibling}function Ua(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:bs(4,s,s.return),Ua(s);break;case 1:Wr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&y0(s,s.return,o),Ua(s);break;case 27:Nu(s.stateNode);case 26:case 5:Wr(s,s.return),Ua(s);break;case 22:s.memoizedState===null&&Ua(s);break;case 30:Ua(s);break;default:Ua(s)}r=r.sibling}}function Ss(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:Ss(f,m,o),Su(4,m);break;case 1:if(Ss(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Q){dt(u,u.return,Q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)nv(P[f],S)}catch(Q){dt(u,u.return,Q)}}o&&w&64&&g0(m),xu(m,m.return);break;case 27:E0(m);case 26:case 5:Ss(f,m,o),o&&u===null&&w&4&&_0(m),xu(m,m.return);break;case 12:Ss(f,m,o);break;case 13:Ss(f,m,o),o&&w&4&&x0(f,m);break;case 22:m.memoizedState===null&&Ss(f,m,o),xu(m,m.return);break;case 30:break;default:Ss(f,m,o)}s=s.sibling}}function lm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&cu(o))}function um(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&cu(r))}function Qr(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)C0(r,s,o,u),s=s.sibling}function C0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Qr(r,s,o,u),f&2048&&Su(9,s);break;case 1:Qr(r,s,o,u);break;case 3:Qr(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&cu(r)));break;case 12:if(f&2048){Qr(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,w=m.id,S=m.onPostCommit;typeof S=="function"&&S(w,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(P){dt(s,s.return,P)}}else Qr(r,s,o,u);break;case 13:Qr(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?Qr(r,s,o,u):Au(r,s):m._visibility&2?Qr(r,s,o,u):(m._visibility|=2,$o(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&lm(w,s);break;case 24:Qr(r,s,o,u),f&2048&&um(s.alternate,s);break;default:Qr(r,s,o,u)}}function $o(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,w=s,S=o,P=u,Q=w.flags;switch(w.tag){case 0:case 11:case 15:$o(m,w,S,P,f),Su(8,w);break;case 23:break;case 22:var re=w.stateNode;w.memoizedState!==null?re._visibility&2?$o(m,w,S,P,f):Au(m,w):(re._visibility|=2,$o(m,w,S,P,f)),f&&Q&2048&&lm(w.alternate,w);break;case 24:$o(m,w,S,P,f),f&&Q&2048&&um(w.alternate,w);break;default:$o(m,w,S,P,f)}s=s.sibling}}function Au(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Au(o,u),f&2048&&lm(u.alternate,u);break;case 24:Au(o,u),f&2048&&um(u.alternate,u);break;default:Au(o,u)}s=s.sibling}}var Ru=8192;function Ho(r){if(r.subtreeFlags&Ru)for(r=r.child;r!==null;)I0(r),r=r.sibling}function I0(r){switch(r.tag){case 26:Ho(r),r.flags&Ru&&r.memoizedState!==null&&AR(wr,r.memoizedState,r.memoizedProps);break;case 5:Ho(r);break;case 3:case 4:var s=wr;wr=ef(r.stateNode.containerInfo),Ho(r),wr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ru,Ru=16777216,Ho(r),Ru=s):Ho(r));break;default:Ho(r)}}function D0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Cu(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,O0(u,r)}D0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)k0(r),r=r.sibling}function k0(r){switch(r.tag){case 0:case 11:case 15:Cu(r),r.flags&2048&&bs(9,r,r.return);break;case 3:Cu(r);break;case 12:Cu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,zh(r)):Cu(r);break;default:Cu(r)}}function zh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,O0(u,r)}D0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:bs(8,s,s.return),zh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,zh(s));break;default:zh(s)}r=r.sibling}}function O0(r,s){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:bs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:cu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,nn=u;else e:for(o=r;nn!==null;){u=nn;var f=u.sibling,m=u.return;if(T0(u),u===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var zA={getCacheForType:function(r){var s=En(Gt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},FA=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,qe=null,We=0,st=0,Wn=null,xs=!1,Go=!1,cm=!1,Bi=0,Rt=0,As=0,qa=0,hm=0,fr=0,Yo=0,Iu=null,Un=null,fm=!1,dm=0,Fh=1/0,$h=null,Rs=null,dn=0,Cs=null,Wo=null,Qo=0,pm=0,mm=null,M0=null,Du=0,gm=null;function Qn(){if((it&2)!==0&&We!==0)return We&-We;if(K.T!==null){var r=Vo;return r!==0?r:Tm()}return tr()}function N0(){fr===0&&(fr=(We&536870912)===0||Je?Ne():536870912);var r=hr.current;return r!==null&&(r.flags|=32),fr}function Kn(r,s,o){(r===mt&&(st===2||st===9)||r.cancelPendingCommit!==null)&&(Ko(r,0),Is(r,We,fr,!1)),Ke(r,o),((it&2)===0||r!==mt)&&(r===mt&&((it&2)===0&&(qa|=o),Rt===4&&Is(r,We,fr,!1)),Kr(r))}function P0(r,s,o){if((it&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||vi(r,s),f=u?GA(r,s):vm(r,s,!0),m=u;do{if(f===0){Go&&!u&&Is(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!$A(o)){f=vm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var S=r;f=Iu;var P=S.current.memoizedState.isDehydrated;if(P&&(Ko(S,w).flags|=256),w=vm(S,w,!1),w!==2){if(cm&&!P){S.errorRecoveryDisabledLanes|=m,qa|=m,f=4;break e}m=Un,Un=f,m!==null&&(Un===null?Un=m:Un.push.apply(Un,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){Ko(r,0),Is(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Is(u,s,fr,!xs);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=dm+300-Vn(),10<f)){if(Is(u,s,fr,!xs),_i(u,0,!0)!==0)break e;u.timeoutHandle=cE(V0.bind(null,u,o,Un,$h,fm,s,fr,qa,Yo,xs,m,2,-0,0),f);break e}V0(u,o,Un,$h,fm,s,fr,qa,Yo,xs,m,0,-0,0)}}break}while(!0);Kr(r)}function V0(r,s,o,u,f,m,w,S,P,Q,re,ue,X,Z){if(r.timeoutHandle=-1,ue=s.subtreeFlags,(ue&8192||(ue&16785408)===16785408)&&(Lu={stylesheets:null,count:0,unsuspend:xR},I0(s),ue=RR(),ue!==null)){r.cancelPendingCommit=ue(F0.bind(null,r,s,m,o,u,f,w,S,P,re,1,X,Z)),Is(r,m,w,!Q);return}F0(r,s,m,o,u,f,w,S,P)}function $A(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Is(r,s,o,u){s&=~hm,s&=~qa,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-Xt(f),w=1<<m;u[m]=-1,f&=~w}o!==0&&Pe(r,o,s)}function Hh(){return(it&6)===0?(ku(0),!1):!0}function ym(){if(qe!==null){if(st===0)var r=qe.return;else r=qe,Mi=Na=null,Np(r),zo=null,wu=0,r=qe;for(;r!==null;)m0(r.alternate,r),r=r.return;qe=null}}function Ko(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,lR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),ym(),mt=r,qe=o=Di(r.current,null),We=s,st=0,Wn=null,xs=!1,Go=vi(r,s),cm=!1,Yo=fr=hm=qa=As=Rt=0,Un=Iu=null,fm=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-Xt(u),m=1<<f;s|=r[f],u&=~m}return Bi=s,dh(),o}function L0(r,s){je=null,K.H=Oh,s===fu||s===bh?(s=ev(),st=3):s===X_?(s=ev(),st=4):st=s===t0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Wn=s,qe===null&&(Rt=1,Lh(r,or(s,r.current)))}function j0(){var r=K.H;return K.H=Oh,r===null?Oh:r}function U0(){var r=K.A;return K.A=zA,r}function _m(){Rt=4,xs||(We&4194048)!==We&&hr.current!==null||(Go=!0),(As&134217727)===0&&(qa&134217727)===0||mt===null||Is(mt,We,fr,!1)}function vm(r,s,o){var u=it;it|=2;var f=j0(),m=U0();(mt!==r||We!==s)&&($h=null,Ko(r,s)),s=!1;var w=Rt;e:do try{if(st!==0&&qe!==null){var S=qe,P=Wn;switch(st){case 8:ym(),w=6;break e;case 3:case 2:case 9:case 6:hr.current===null&&(s=!0);var Q=st;if(st=0,Wn=null,Xo(r,S,P,Q),o&&Go){w=0;break e}break;default:Q=st,st=0,Wn=null,Xo(r,S,P,Q)}}HA(),w=Rt;break}catch(re){L0(r,re)}while(!0);return s&&r.shellSuspendCounter++,Mi=Na=null,it=u,K.H=f,K.A=m,qe===null&&(mt=null,We=0,dh()),w}function HA(){for(;qe!==null;)q0(qe)}function GA(r,s){var o=it;it|=2;var u=j0(),f=U0();mt!==r||We!==s?($h=null,Fh=Vn()+500,Ko(r,s)):Go=vi(r,s);e:do try{if(st!==0&&qe!==null){s=qe;var m=Wn;t:switch(st){case 1:st=0,Wn=null,Xo(r,s,m,1);break;case 2:case 9:if(Z_(m)){st=0,Wn=null,B0(s);break}s=function(){st!==2&&st!==9||mt!==r||(st=7),Kr(r)},m.then(s,s);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:Z_(m)?(st=0,Wn=null,B0(s)):(st=0,Wn=null,Xo(r,s,m,7));break;case 5:var w=null;switch(qe.tag){case 26:w=qe.memoizedState;case 5:case 27:var S=qe;if(!w||bE(w)){st=0,Wn=null;var P=S.sibling;if(P!==null)qe=P;else{var Q=S.return;Q!==null?(qe=Q,Gh(Q)):qe=null}break t}}st=0,Wn=null,Xo(r,s,m,5);break;case 6:st=0,Wn=null,Xo(r,s,m,6);break;case 8:ym(),Rt=6;break e;default:throw Error(i(462))}}YA();break}catch(re){L0(r,re)}while(!0);return Mi=Na=null,K.H=u,K.A=f,it=o,qe!==null?0:(mt=null,We=0,dh(),Rt)}function YA(){for(;qe!==null&&!ca();)q0(qe)}function q0(r){var s=d0(r.alternate,r,Bi);r.memoizedProps=r.pendingProps,s===null?Gh(r):qe=s}function B0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=o0(o,s,s.pendingProps,s.type,void 0,We);break;case 11:s=o0(o,s,s.pendingProps,s.type.render,s.ref,We);break;case 5:Np(s);default:m0(o,s),s=qe=z_(s,Bi),s=d0(o,s,Bi)}r.memoizedProps=r.pendingProps,s===null?Gh(r):qe=s}function Xo(r,s,o,u){Mi=Na=null,Np(s),zo=null,wu=0;var f=s.return;try{if(VA(r,f,s,o,We)){Rt=1,Lh(r,or(o,r.current)),qe=null;return}}catch(m){if(f!==null)throw qe=f,m;Rt=1,Lh(r,or(o,r.current)),qe=null;return}s.flags&32768?(Je||u===1?r=!0:Go||(We&536870912)!==0?r=!1:(xs=r=!0,(u===2||u===9||u===3||u===6)&&(u=hr.current,u!==null&&u.tag===13&&(u.flags|=16384))),z0(s,r)):Gh(s)}function Gh(r){var s=r;do{if((s.flags&32768)!==0){z0(s,xs);return}r=s.return;var o=jA(s.alternate,s,Bi);if(o!==null){qe=o;return}if(s=s.sibling,s!==null){qe=s;return}qe=s=r}while(s!==null);Rt===0&&(Rt=5)}function z0(r,s){do{var o=UA(r.alternate,r);if(o!==null){o.flags&=32767,qe=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){qe=r;return}qe=r=o}while(r!==null);Rt=6,qe=null}function F0(r,s,o,u,f,m,w,S,P){r.cancelPendingCommit=null;do Yh();while(dn!==0);if((it&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=up,Zt(r,o,m,w,S,P),r===mt&&(qe=mt=null,We=0),Wo=s,Cs=r,Qo=o,pm=m,mm=f,M0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,XA(di,function(){return W0(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=le.p,le.p=2,w=it,it|=4;try{qA(r,s,o)}finally{it=w,le.p=f,K.T=u}}dn=1,$0(),H0(),G0()}}function $0(){if(dn===1){dn=0;var r=Cs,s=Wo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=le.p;le.p=2;var f=it;it|=4;try{A0(s,r);var m=km,w=O_(r.containerInfo),S=m.focusedElem,P=m.selectionRange;if(w!==S&&S&&S.ownerDocument&&k_(S.ownerDocument.documentElement,S)){if(P!==null&&ip(S)){var Q=P.start,re=P.end;if(re===void 0&&(re=Q),"selectionStart"in S)S.selectionStart=Q,S.selectionEnd=Math.min(re,S.value.length);else{var ue=S.ownerDocument||document,X=ue&&ue.defaultView||window;if(X.getSelection){var Z=X.getSelection(),ke=S.textContent.length,Ae=Math.min(P.start,ke),ct=P.end===void 0?Ae:Math.min(P.end,ke);!Z.extend&&Ae>ct&&(w=ct,ct=Ae,Ae=w);var G=D_(S,Ae),F=D_(S,ct);if(G&&F&&(Z.rangeCount!==1||Z.anchorNode!==G.node||Z.anchorOffset!==G.offset||Z.focusNode!==F.node||Z.focusOffset!==F.offset)){var W=ue.createRange();W.setStart(G.node,G.offset),Z.removeAllRanges(),Ae>ct?(Z.addRange(W),Z.extend(F.node,F.offset)):(W.setEnd(F.node,F.offset),Z.addRange(W))}}}}for(ue=[],Z=S;Z=Z.parentNode;)Z.nodeType===1&&ue.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ue.length;S++){var ae=ue[S];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}af=!!Dm,km=Dm=null}finally{it=f,le.p=u,K.T=o}}r.current=s,dn=2}}function H0(){if(dn===2){dn=0;var r=Cs,s=Wo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=le.p;le.p=2;var f=it;it|=4;try{b0(r,s.alternate,s)}finally{it=f,le.p=u,K.T=o}}dn=3}}function G0(){if(dn===4||dn===3){dn=0,co();var r=Cs,s=Wo,o=Qo,u=M0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?dn=5:(dn=0,Wo=Cs=null,Y0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Rs=null),ls(o),s=s.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(_t,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=K.T,f=le.p,le.p=2,K.T=null;try{for(var m=r.onRecoverableError,w=0;w<u.length;w++){var S=u[w];m(S.value,{componentStack:S.stack})}}finally{K.T=s,le.p=f}}(Qo&3)!==0&&Yh(),Kr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===gm?Du++:(Du=0,gm=r):Du=0,ku(0)}}function Y0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,cu(s)))}function Yh(r){return $0(),H0(),G0(),W0()}function W0(){if(dn!==5)return!1;var r=Cs,s=pm;pm=0;var o=ls(Qo),u=K.T,f=le.p;try{le.p=32>o?32:o,K.T=null,o=mm,mm=null;var m=Cs,w=Qo;if(dn=0,Wo=Cs=null,Qo=0,(it&6)!==0)throw Error(i(331));var S=it;if(it|=4,k0(m.current),C0(m,m.current,w,o),it=S,ku(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{le.p=f,K.T=u,Y0(r,s)}}function Q0(r,s,o){s=or(o,s),s=Wp(r.stateNode,s,2),r=_s(r,s,2),r!==null&&(Ke(r,2),Kr(r))}function dt(r,s,o){if(r.tag===3)Q0(r,r,o);else for(;s!==null;){if(s.tag===3){Q0(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Rs===null||!Rs.has(u))){r=or(o,r),o=Jv(2),u=_s(s,o,2),u!==null&&(e0(o,u,s,r),Ke(u,2),Kr(u));break}}s=s.return}}function Em(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new FA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(cm=!0,f.add(o),r=WA.bind(null,r,s,o),s.then(r,r))}function WA(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,mt===r&&(We&o)===o&&(Rt===4||Rt===3&&(We&62914560)===We&&300>Vn()-dm?(it&2)===0&&Ko(r,0):hm|=o,Yo===We&&(Yo=0)),Kr(r)}function K0(r,s){s===0&&(s=et()),r=Oo(r,s),r!==null&&(Ke(r,s),Kr(r))}function QA(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),K0(r,o)}function KA(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),K0(r,o)}function XA(r,s){return fi(r,s)}var Wh=null,Zo=null,wm=!1,Qh=!1,bm=!1,Ba=0;function Kr(r){r!==Zo&&r.next===null&&(Zo===null?Wh=Zo=r:Zo=Zo.next=r),Qh=!0,wm||(wm=!0,JA())}function ku(r,s){if(!bm&&Qh){bm=!0;do for(var o=!1,u=Wh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var w=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Xt(42|r)+1)-1,m&=f&~(w&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,eE(u,m))}else m=We,m=_i(u,u===mt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||vi(u,m)||(o=!0,eE(u,m));u=u.next}while(o);bm=!1}}function ZA(){X0()}function X0(){Qh=wm=!1;var r=0;Ba!==0&&(oR()&&(r=Ba),Ba=0);for(var s=Vn(),o=null,u=Wh;u!==null;){var f=u.next,m=Z0(u,s);m===0?(u.next=null,o===null?Wh=f:o.next=f,f===null&&(Zo=o)):(o=u,(r!==0||(m&3)!==0)&&(Qh=!0)),u=f}ku(r)}function Z0(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var w=31-Xt(m),S=1<<w,P=f[w];P===-1?((S&o)===0||(S&u)!==0)&&(f[w]=os(S,s)):P<=s&&(r.expiredLanes|=S),m&=~S}if(s=mt,o=We,o=_i(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(st===2||st===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Mr(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||vi(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Mr(u),ls(o)){case 2:case 8:o=as;break;case 32:o=di;break;case 268435456:o=Nr;break;default:o=di}return u=J0.bind(null,r),o=fi(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Mr(u),r.callbackPriority=2,r.callbackNode=null,2}function J0(r,s){if(dn!==0&&dn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Yh()&&r.callbackNode!==o)return null;var u=We;return u=_i(r,r===mt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(P0(r,u,s),Z0(r,Vn()),r.callbackNode!=null&&r.callbackNode===o?J0.bind(null,r):null)}function eE(r,s){if(Yh())return null;P0(r,s,!0)}function JA(){uR(function(){(it&6)!==0?fi(ha,ZA):X0()})}function Tm(){return Ba===0&&(Ba=Ne()),Ba}function tE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Eo(""+r)}function nE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function eR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=tE((f[Mt]||null).action),w=u.submitter;w&&(s=(s=w[Mt]||null)?tE(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var S=new wo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ba!==0){var P=w?nE(f,w):new FormData(f);Fp(o,{pending:!0,data:P,method:f.method,action:m},null,P)}}else typeof m=="function"&&(S.preventDefault(),P=w?nE(f,w):new FormData(f),Fp(o,{pending:!0,data:P,method:f.method,action:m},m,P))},currentTarget:f}]})}}for(var Sm=0;Sm<lp.length;Sm++){var xm=lp[Sm],tR=xm.toLowerCase(),nR=xm[0].toUpperCase()+xm.slice(1);Er(tR,"on"+nR)}Er(P_,"onAnimationEnd"),Er(V_,"onAnimationIteration"),Er(L_,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(vA,"onTransitionRun"),Er(EA,"onTransitionStart"),Er(wA,"onTransitionCancel"),Er(j_,"onTransitionEnd"),wi("onMouseEnter",["mouseout","mouseover"]),wi("onMouseLeave",["mouseout","mouseover"]),wi("onPointerEnter",["pointerout","pointerover"]),wi("onPointerLeave",["pointerout","pointerover"]),_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_r("onBeforeInput",["compositionend","keypress","textInput","paste"]),_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ou));function rE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var w=u.length-1;0<=w;w--){var S=u[w],P=S.instance,Q=S.currentTarget;if(S=S.listener,P!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(re){Vh(re)}f.currentTarget=null,m=P}else for(w=0;w<u.length;w++){if(S=u[w],P=S.instance,Q=S.currentTarget,S=S.listener,P!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(re){Vh(re)}f.currentTarget=null,m=P}}}}function Be(r,s){var o=s[Fl];o===void 0&&(o=s[Fl]=new Set);var u=r+"__bubble";o.has(u)||(iE(s,r,2,!1),o.add(u))}function Am(r,s,o){var u=0;s&&(u|=4),iE(o,r,u,s)}var Kh="_reactListening"+Math.random().toString(36).slice(2);function Rm(r){if(!r[Kh]){r[Kh]=!0,$l.forEach(function(o){o!=="selectionchange"&&(rR.has(o)||Am(o,!1,r),Am(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Kh]||(s[Kh]=!0,Am("selectionchange",!1,s))}}function iE(r,s,o,u){switch(CE(s)){case 2:var f=DR;break;case 8:f=kR;break;default:f=Bm}o=f.bind(null,s,o,r),f=void 0,!sr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Cm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var S=u.stateNode.containerInfo;if(S===f)break;if(w===4)for(w=u.return;w!==null;){var P=w.tag;if((P===3||P===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;S!==null;){if(w=Ei(S),w===null)return;if(P=w.tag,P===5||P===6||P===26||P===27){u=m=w;continue e}S=S.parentNode}}u=u.return}Zc(function(){var Q=m,re=ir(o),ue=[];e:{var X=U_.get(r);if(X!==void 0){var Z=wo,ke=r;switch(r){case"keypress":if(Br(o)===0)break e;case"keydown":case"keyup":Z=Ro;break;case"focusin":ke="focus",Z=So;break;case"focusout":ke="blur",Z=So;break;case"beforeblur":case"afterblur":Z=So;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=ah;break;case P_:case V_:case L_:Z=xo;break;case j_:Z=lh;break;case"scroll":case"scrollend":Z=Jc;break;case"wheel":Z=Co;break;case"copy":case"cut":case"paste":Z=Ao;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=nu;break;case"toggle":case"beforetoggle":Z=ch}var Ae=(s&4)!==0,ct=!Ae&&(r==="scroll"||r==="scrollend"),G=Ae?X!==null?X+"Capture":null:X;Ae=[];for(var F=Q,W;F!==null;){var ae=F;if(W=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||W===null||G===null||(ae=Ea(F,G),ae!=null&&Ae.push(Mu(F,ae,W))),ct)break;F=F.return}0<Ae.length&&(X=new Z(X,ke,null,o,re),ue.push({event:X,listeners:Ae}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&o!==Si&&(ke=o.relatedTarget||o.fromElement)&&(Ei(ke)||ke[nr]))break e;if((Z||X)&&(X=re.window===re?re:(X=re.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(ke=o.relatedTarget||o.toElement,Z=Q,ke=ke?Ei(ke):null,ke!==null&&(ct=l(ke),Ae=ke.tag,ke!==ct||Ae!==5&&Ae!==27&&Ae!==6)&&(ke=null)):(Z=null,ke=Q),Z!==ke)){if(Ae=ar,ae="onMouseLeave",G="onMouseEnter",F="mouse",(r==="pointerout"||r==="pointerover")&&(Ae=nu,ae="onPointerLeave",G="onPointerEnter",F="pointer"),ct=Z==null?X:Lr(Z),W=ke==null?X:Lr(ke),X=new Ae(ae,F+"leave",Z,o,re),X.target=ct,X.relatedTarget=W,ae=null,Ei(re)===Q&&(Ae=new Ae(G,F+"enter",ke,o,re),Ae.target=W,Ae.relatedTarget=ct,ae=Ae),ct=ae,Z&&ke)t:{for(Ae=Z,G=ke,F=0,W=Ae;W;W=Jo(W))F++;for(W=0,ae=G;ae;ae=Jo(ae))W++;for(;0<F-W;)Ae=Jo(Ae),F--;for(;0<W-F;)G=Jo(G),W--;for(;F--;){if(Ae===G||G!==null&&Ae===G.alternate)break t;Ae=Jo(Ae),G=Jo(G)}Ae=null}else Ae=null;Z!==null&&sE(ue,X,Z,Ae,!1),ke!==null&&ct!==null&&sE(ue,ct,ke,Ae,!0)}}e:{if(X=Q?Lr(Q):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var Ee=S_;else if(Ht(X))if(x_)Ee=gA;else{Ee=pA;var Ue=dA}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Q&&Ql(Q.elementType)&&(Ee=S_):Ee=mA;if(Ee&&(Ee=Ee(r,Q))){Ii(ue,Ee,o,re);break e}Ue&&Ue(r,X,Q),r==="focusout"&&Q&&X.type==="number"&&Q.memoizedProps.value!=null&&ds(X,"number",X.value)}switch(Ue=Q?Lr(Q):window,r){case"focusin":(Ht(Ue)||Ue.contentEditable==="true")&&(Io=Ue,sp=Q,su=null);break;case"focusout":su=sp=Io=null;break;case"mousedown":ap=!0;break;case"contextmenu":case"mouseup":case"dragend":ap=!1,M_(ue,o,re);break;case"selectionchange":if(_A)break;case"keydown":case"keyup":M_(ue,o,re)}var be;if($r)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ge?J(r,o)&&(Re="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Re="onCompositionStart");Re&&(E&&o.locale!=="ko"&&(Ge||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ge&&(be=Xl()):(qr=re,ps="value"in qr?qr.value:qr.textContent,Ge=!0)),Ue=Xh(Q,Re),0<Ue.length&&(Re=new eu(Re,r,null,o,re),ue.push({event:Re,listeners:Ue}),be?Re.data=be:(be=pe(o),be!==null&&(Re.data=be)))),(be=y?$t(r,o):Ye(r,o))&&(Re=Xh(Q,"onBeforeInput"),0<Re.length&&(Ue=new eu("onBeforeInput","beforeinput",null,o,re),ue.push({event:Ue,listeners:Re}),Ue.data=be)),eR(ue,r,Q,o,re)}rE(ue,s)})}function Mu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Xh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ea(r,o),f!=null&&u.unshift(Mu(r,f,m)),f=Ea(r,s),f!=null&&u.push(Mu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function Jo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function sE(r,s,o,u,f){for(var m=s._reactName,w=[];o!==null&&o!==u;){var S=o,P=S.alternate,Q=S.stateNode;if(S=S.tag,P!==null&&P===u)break;S!==5&&S!==26&&S!==27||Q===null||(P=Q,f?(Q=Ea(o,m),Q!=null&&w.unshift(Mu(o,Q,P))):f||(Q=Ea(o,m),Q!=null&&w.push(Mu(o,Q,P)))),o=o.return}w.length!==0&&r.push({event:s,listeners:w})}var iR=/\r\n?/g,sR=/\u0000|\uFFFD/g;function aE(r){return(typeof r=="string"?r:""+r).replace(iR,`
`).replace(sR,"")}function oE(r,s){return s=aE(s),aE(r)===s}function Zh(){}function ut(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||rr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&rr(r,""+u);break;case"className":jr(r,"class",u);break;case"tabIndex":jr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":jr(r,o,u);break;case"style":Wl(r,u,m);break;case"data":if(s!=="object"){jr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Eo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ut(r,s,"name",f.name,f,null),ut(r,s,"formEncType",f.formEncType,f,null),ut(r,s,"formMethod",f.formMethod,f,null),ut(r,s,"formTarget",f.formTarget,f,null)):(ut(r,s,"encType",f.encType,f,null),ut(r,s,"method",f.method,f,null),ut(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Eo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Zh);break;case"onScroll":u!=null&&Be("scroll",r);break;case"onScrollEnd":u!=null&&Be("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Eo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Be("beforetoggle",r),Be("toggle",r),fs(r,"popover",u);break;case"xlinkActuate":cn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":cn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":cn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":cn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":cn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":cn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":cn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":cn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":cn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":fs(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Zd.get(o)||o,fs(r,o,u))}}function Im(r,s,o,u,f,m){switch(o){case"style":Wl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?rr(r,u):(typeof u=="number"||typeof u=="bigint")&&rr(r,""+u);break;case"onScroll":u!=null&&Be("scroll",r);break;case"onScrollEnd":u!=null&&Be("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Mt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):fs(r,o,u)}}}function pn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",r),Be("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ut(r,s,m,w,o,null)}}f&&ut(r,s,"srcSet",o.srcSet,o,null),u&&ut(r,s,"src",o.src,o,null);return;case"input":Be("invalid",r);var S=m=w=f=null,P=null,Q=null;for(u in o)if(o.hasOwnProperty(u)){var re=o[u];if(re!=null)switch(u){case"name":f=re;break;case"type":w=re;break;case"checked":P=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":S=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:ut(r,s,u,re,o,null)}}ya(r,m,S,P,Q,w,f,!1),vo(r);return;case"select":Be("invalid",r),u=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":w=S;break;case"multiple":u=S;default:ut(r,s,f,S,o,null)}s=m,o=w,r.multiple=!!u,s!=null?Ti(r,!!u,s,!1):o!=null&&Ti(r,!!u,o,!0);return;case"textarea":Be("invalid",r),m=f=u=null;for(w in o)if(o.hasOwnProperty(w)&&(S=o[w],S!=null))switch(w){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:ut(r,s,w,S,o,null)}_a(r,u,f,m),vo(r);return;case"option":for(P in o)if(o.hasOwnProperty(P)&&(u=o[P],u!=null))switch(P){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ut(r,s,P,u,o,null)}return;case"dialog":Be("beforetoggle",r),Be("toggle",r),Be("cancel",r),Be("close",r);break;case"iframe":case"object":Be("load",r);break;case"video":case"audio":for(u=0;u<Ou.length;u++)Be(Ou[u],r);break;case"image":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"embed":case"source":case"link":Be("error",r),Be("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in o)if(o.hasOwnProperty(Q)&&(u=o[Q],u!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ut(r,s,Q,u,o,null)}return;default:if(Ql(s)){for(re in o)o.hasOwnProperty(re)&&(u=o[re],u!==void 0&&Im(r,s,re,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ut(r,s,S,u,o,null))}function aR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,S=null,P=null,Q=null,re=null;for(Z in o){var ue=o[Z];if(o.hasOwnProperty(Z)&&ue!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":P=ue;default:u.hasOwnProperty(Z)||ut(r,s,Z,null,u,ue)}}for(var X in u){var Z=u[X];if(ue=o[X],u.hasOwnProperty(X)&&(Z!=null||ue!=null))switch(X){case"type":m=Z;break;case"name":f=Z;break;case"checked":Q=Z;break;case"defaultChecked":re=Z;break;case"value":w=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==ue&&ut(r,s,X,Z,u,ue)}}Fn(r,w,S,P,Q,re,m,f);return;case"select":Z=w=S=X=null;for(m in o)if(P=o[m],o.hasOwnProperty(m)&&P!=null)switch(m){case"value":break;case"multiple":Z=P;default:u.hasOwnProperty(m)||ut(r,s,m,null,u,P)}for(f in u)if(m=u[f],P=o[f],u.hasOwnProperty(f)&&(m!=null||P!=null))switch(f){case"value":X=m;break;case"defaultValue":S=m;break;case"multiple":w=m;default:m!==P&&ut(r,s,f,m,u,P)}s=S,o=w,u=Z,X!=null?Ti(r,!!o,X,!1):!!u!=!!o&&(s!=null?Ti(r,!!o,s,!0):Ti(r,!!o,o?[]:"",!1));return;case"textarea":Z=X=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ut(r,s,S,null,u,f)}for(w in u)if(f=u[w],m=o[w],u.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":X=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&ut(r,s,w,f,u,m)}ot(r,X,Z);return;case"option":for(var ke in o)if(X=o[ke],o.hasOwnProperty(ke)&&X!=null&&!u.hasOwnProperty(ke))switch(ke){case"selected":r.selected=!1;break;default:ut(r,s,ke,null,u,X)}for(P in u)if(X=u[P],Z=o[P],u.hasOwnProperty(P)&&X!==Z&&(X!=null||Z!=null))switch(P){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ut(r,s,P,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in o)X=o[Ae],o.hasOwnProperty(Ae)&&X!=null&&!u.hasOwnProperty(Ae)&&ut(r,s,Ae,null,u,X);for(Q in u)if(X=u[Q],Z=o[Q],u.hasOwnProperty(Q)&&X!==Z&&(X!=null||Z!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:ut(r,s,Q,X,u,Z)}return;default:if(Ql(s)){for(var ct in o)X=o[ct],o.hasOwnProperty(ct)&&X!==void 0&&!u.hasOwnProperty(ct)&&Im(r,s,ct,void 0,u,X);for(re in u)X=u[re],Z=o[re],!u.hasOwnProperty(re)||X===Z||X===void 0&&Z===void 0||Im(r,s,re,X,u,Z);return}}for(var G in o)X=o[G],o.hasOwnProperty(G)&&X!=null&&!u.hasOwnProperty(G)&&ut(r,s,G,null,u,X);for(ue in u)X=u[ue],Z=o[ue],!u.hasOwnProperty(ue)||X===Z||X==null&&Z==null||ut(r,s,ue,X,u,Z)}var Dm=null,km=null;function Jh(r){return r.nodeType===9?r:r.ownerDocument}function lE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Om(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mm=null;function oR(){var r=window.event;return r&&r.type==="popstate"?r===Mm?!1:(Mm=r,!0):(Mm=null,!1)}var cE=typeof setTimeout=="function"?setTimeout:void 0,lR=typeof clearTimeout=="function"?clearTimeout:void 0,hE=typeof Promise=="function"?Promise:void 0,uR=typeof queueMicrotask=="function"?queueMicrotask:typeof hE<"u"?function(r){return hE.resolve(null).then(r).catch(cR)}:cE;function cR(r){setTimeout(function(){throw r})}function Ds(r){return r==="head"}function fE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var w=r.ownerDocument;if(o&1&&Nu(w.documentElement),o&2&&Nu(w.body),o&4)for(o=w.head,Nu(o),w=o.firstChild;w;){var S=w.nextSibling,P=w.nodeName;w[da]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=S}}if(f===0){r.removeChild(m),zu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);zu(s)}function Nm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Nm(o),hs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function hR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[da])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=br(r.nextSibling),r===null)break}return null}function fR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=br(r.nextSibling),r===null))return null;return r}function Pm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function dR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function br(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Vm=null;function dE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function pE(r,s,o){switch(s=Jh(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Nu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);hs(r)}var dr=new Map,mE=new Set;function ef(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var zi=le.d;le.d={f:pR,r:mR,D:gR,C:yR,L:_R,m:vR,X:wR,S:ER,M:bR};function pR(){var r=zi.f(),s=Hh();return r||s}function mR(r){var s=Vr(r);s!==null&&s.tag===5&&s.type==="form"?Pv(s):zi.r(r)}var el=typeof document>"u"?null:document;function gE(r,s,o){var u=el;if(u&&typeof s=="string"&&s){var f=Nt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),mE.has(f)||(mE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),pn(s,"link",r),It(s),u.head.appendChild(s)))}}function gR(r){zi.D(r),gE("dns-prefetch",r,null)}function yR(r,s){zi.C(r,s),gE("preconnect",r,s)}function _R(r,s,o){zi.L(r,s,o);var u=el;if(u&&r&&s){var f='link[rel="preload"][as="'+Nt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Nt(o.imageSizes)+'"]')):f+='[href="'+Nt(r)+'"]';var m=f;switch(s){case"style":m=tl(r);break;case"script":m=nl(r)}dr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),dr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(Pu(m))||s==="script"&&u.querySelector(Vu(m))||(s=u.createElement("link"),pn(s,"link",r),It(s),u.head.appendChild(s)))}}function vR(r,s){zi.m(r,s);var o=el;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Nt(u)+'"][href="'+Nt(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(r)}if(!dr.has(m)&&(r=v({rel:"modulepreload",href:r},s),dr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Vu(m)))return}u=o.createElement("link"),pn(u,"link",r),It(u),o.head.appendChild(u)}}}function ER(r,s,o){zi.S(r,s,o);var u=el;if(u&&r){var f=kn(u).hoistableStyles,m=tl(r);s=s||"default";var w=f.get(m);if(!w){var S={loading:0,preload:null};if(w=u.querySelector(Pu(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=dr.get(m))&&Lm(r,o);var P=w=u.createElement("link");It(P),pn(P,"link",r),P._p=new Promise(function(Q,re){P.onload=Q,P.onerror=re}),P.addEventListener("load",function(){S.loading|=1}),P.addEventListener("error",function(){S.loading|=2}),S.loading|=4,tf(w,s,u)}w={type:"stylesheet",instance:w,count:1,state:S},f.set(m,w)}}}function wR(r,s){zi.X(r,s);var o=el;if(o&&r){var u=kn(o).hoistableScripts,f=nl(r),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(r=v({src:r,async:!0},s),(s=dr.get(f))&&jm(r,s),m=o.createElement("script"),It(m),pn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function bR(r,s){zi.M(r,s);var o=el;if(o&&r){var u=kn(o).hoistableScripts,f=nl(r),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=dr.get(f))&&jm(r,s),m=o.createElement("script"),It(m),pn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function yE(r,s,o,u){var f=(f=we.current)?ef(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=kn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=tl(o.href);var m=kn(f).hoistableStyles,w=m.get(r);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,w),(m=f.querySelector(Pu(r)))&&!m._p&&(w.instance=m,w.state.loading=5),dr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},dr.set(r,o),m||TR(f,r,o,w.state))),s&&u===null)throw Error(i(528,""));return w}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=kn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function tl(r){return'href="'+Nt(r)+'"'}function Pu(r){return'link[rel="stylesheet"]['+r+"]"}function _E(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function TR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),pn(s,"link",o),It(s),r.head.appendChild(s))}function nl(r){return'[src="'+Nt(r)+'"]'}function Vu(r){return"script[async]"+r}function vE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(u)return s.instance=u,It(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),It(u),pn(u,"style",f),tf(u,o.precedence,r),s.instance=u;case"stylesheet":f=tl(o.href);var m=r.querySelector(Pu(f));if(m)return s.state.loading|=4,s.instance=m,It(m),m;u=_E(o),(f=dr.get(f))&&Lm(u,f),m=(r.ownerDocument||r).createElement("link"),It(m);var w=m;return w._p=new Promise(function(S,P){w.onload=S,w.onerror=P}),pn(m,"link",u),s.state.loading|=4,tf(m,o.precedence,r),s.instance=m;case"script":return m=nl(o.src),(f=r.querySelector(Vu(m)))?(s.instance=f,It(f),f):(u=o,(f=dr.get(m))&&(u=v({},o),jm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),It(f),pn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,tf(u,o.precedence,r));return s.instance}function tf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,w=0;w<u.length;w++){var S=u[w];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Lm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function jm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var nf=null;function EE(r,s,o){if(nf===null){var u=new Map,f=nf=new Map;f.set(o,u)}else f=nf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[da]||m[Ft]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=r+w;var S=u.get(w);S?S.push(m):u.set(w,[m])}}return u}function wE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function SR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function bE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Lu=null;function xR(){}function AR(r,s,o){if(Lu===null)throw Error(i(475));var u=Lu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=tl(o.href),m=r.querySelector(Pu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=rf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,It(m);return}m=r.ownerDocument||r,o=_E(o),(f=dr.get(f))&&Lm(o,f),m=m.createElement("link"),It(m);var w=m;w._p=new Promise(function(S,P){w.onload=S,w.onerror=P}),pn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=rf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function RR(){if(Lu===null)throw Error(i(475));var r=Lu;return r.stylesheets&&r.count===0&&Um(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Um(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function rf(){if(this.count--,this.count===0){if(this.stylesheets)Um(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var sf=null;function Um(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,sf=new Map,s.forEach(CR,r),sf=null,rf.call(r))}function CR(r,s){if(!(s.state.loading&4)){var o=sf.get(r);if(o)var u=o.get(null);else{o=new Map,sf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),u=w)}u&&o.set(null,u)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||u,m===u&&o.set(null,f),o.set(w,f),this.count++,u=rf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var ju={$$typeof:U,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function IR(r,s,o,u,f,m,w,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function TE(r,s,o,u,f,m,w,S,P,Q,re,ue){return r=new IR(r,s,o,w,S,P,Q,ue),s=1,m===!0&&(s|=24),m=Hn(3,null,null,s),r.current=m,m.stateNode=r,s=Ep(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Sp(m),r}function SE(r){return r?(r=Mo,r):Mo}function xE(r,s,o,u,f,m){f=SE(f),u.context===null?u.context=f:u.pendingContext=f,u=ys(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=_s(r,u,s),o!==null&&(Kn(o,r,s),pu(o,r,s))}function AE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function qm(r,s){AE(r,s),(r=r.alternate)&&AE(r,s)}function RE(r){if(r.tag===13){var s=Oo(r,67108864);s!==null&&Kn(s,r,67108864),qm(r,67108864)}}var af=!0;function DR(r,s,o,u){var f=K.T;K.T=null;var m=le.p;try{le.p=2,Bm(r,s,o,u)}finally{le.p=m,K.T=f}}function kR(r,s,o,u){var f=K.T;K.T=null;var m=le.p;try{le.p=8,Bm(r,s,o,u)}finally{le.p=m,K.T=f}}function Bm(r,s,o,u){if(af){var f=zm(u);if(f===null)Cm(r,s,u,of,o),IE(r,u);else if(MR(f,r,s,o,u))u.stopPropagation();else if(IE(r,u),s&4&&-1<OR.indexOf(r)){for(;f!==null;){var m=Vr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=zn(m.pendingLanes);if(w!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;w;){var P=1<<31-Xt(w);S.entanglements[1]|=P,w&=~P}Kr(m),(it&6)===0&&(Fh=Vn()+500,ku(0))}}break;case 13:S=Oo(m,2),S!==null&&Kn(S,m,2),Hh(),qm(m,2)}if(m=zm(u),m===null&&Cm(r,s,u,of,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Cm(r,s,u,null,o)}}function zm(r){return r=ir(r),Fm(r)}var of=null;function Fm(r){if(of=null,r=Ei(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return of=r,null}function CE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bl()){case ha:return 2;case as:return 8;case di:case ho:return 32;case Nr:return 268435456;default:return 32}default:return 32}}var $m=!1,ks=null,Os=null,Ms=null,Uu=new Map,qu=new Map,Ns=[],OR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function IE(r,s){switch(r){case"focusin":case"focusout":ks=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":Uu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qu.delete(s.pointerId)}}function Bu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Vr(s),s!==null&&RE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function MR(r,s,o,u,f){switch(s){case"focusin":return ks=Bu(ks,r,s,o,u,f),!0;case"dragenter":return Os=Bu(Os,r,s,o,u,f),!0;case"mouseover":return Ms=Bu(Ms,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Uu.set(m,Bu(Uu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,qu.set(m,Bu(qu.get(m)||null,r,s,o,u,f)),!0}return!1}function DE(r){var s=Ei(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,us(r.priority,function(){if(o.tag===13){var u=Qn();u=Pr(u);var f=Oo(o,u);f!==null&&Kn(f,o,u),qm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function lf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=zm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Si=u,o.target.dispatchEvent(u),Si=null}else return s=Vr(o),s!==null&&RE(s),r.blockedOn=o,!1;s.shift()}return!0}function kE(r,s,o){lf(r)&&o.delete(s)}function NR(){$m=!1,ks!==null&&lf(ks)&&(ks=null),Os!==null&&lf(Os)&&(Os=null),Ms!==null&&lf(Ms)&&(Ms=null),Uu.forEach(kE),qu.forEach(kE)}function uf(r,s){r.blockedOn===s&&(r.blockedOn=null,$m||($m=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,NR)))}var cf=null;function OE(r){cf!==r&&(cf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){cf===r&&(cf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Fm(u||o)===null)continue;break}var m=Vr(o);m!==null&&(r.splice(s,3),s-=3,Fp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function zu(r){function s(P){return uf(P,r)}ks!==null&&uf(ks,r),Os!==null&&uf(Os,r),Ms!==null&&uf(Ms,r),Uu.forEach(s),qu.forEach(s);for(var o=0;o<Ns.length;o++){var u=Ns[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Ns.length&&(o=Ns[0],o.blockedOn===null);)DE(o),o.blockedOn===null&&Ns.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],w=f[Mt]||null;if(typeof m=="function")w||OE(o);else if(w){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[Mt]||null)S=w.formAction;else if(Fm(f)!==null)continue}else S=w.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),OE(o)}}}function Hm(r){this._internalRoot=r}hf.prototype.render=Hm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Qn();xE(o,u,r,s,null,null)},hf.prototype.unmount=Hm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;xE(r.current,2,null,r,null,null),Hh(),s[nr]=null}};function hf(r){this._internalRoot=r}hf.prototype.unstable_scheduleHydration=function(r){if(r){var s=tr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Ns.length&&s!==0&&s<Ns[o].priority;o++);Ns.splice(o,0,r),o===0&&DE(r)}};var ME=e.version;if(ME!=="19.1.0")throw Error(i(527,ME,"19.1.0"));le.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var PR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{_t=ff.inject(PR),Ze=ff}catch{}}return $u.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=Qv,m=Kv,w=Xv,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=TE(r,1,!1,null,null,o,u,f,m,w,S,null),r[nr]=s.current,Rm(r),new Hm(s)},$u.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=Qv,w=Kv,S=Xv,P=null,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(P=o.unstable_transitionCallbacks),o.formState!==void 0&&(Q=o.formState)),s=TE(r,1,!0,s,o??null,u,f,m,w,S,P,Q),s.context=SE(null),o=s.current,u=Qn(),u=Pr(u),f=ys(u),f.callback=null,_s(o,f,u),o=u,s.current.lanes=o,Ke(s,o),Kr(s),r[nr]=s.current,Rm(r),new hf(s)},$u.version="19.1.0",$u}var FE;function GR(){if(FE)return Wm.exports;FE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Wm.exports=HR(),Wm.exports}var YR=GR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $E="popstate";function WR(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Tg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:fc(a)}return KR(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ir(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QR(){return Math.random().toString(36).substring(2,10)}function HE(t,e){return{usr:t.state,key:t.key,idx:e}}function Tg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Cl(e):e,state:n,key:e&&e.key||i||QR()}}function fc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Cl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function KR(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function b(){d="POP";let O=v(),N=O==null?null:O-g;g=O,p&&p({action:d,location:z.location,delta:N})}function T(O,N){d="PUSH";let L=Tg(z.location,O,N);g=v()+1;let U=HE(L,g),te=z.createHref(L);try{c.pushState(U,"",te)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(te)}l&&p&&p({action:d,location:z.location,delta:1})}function C(O,N){d="REPLACE";let L=Tg(z.location,O,N);g=v();let U=HE(L,g),te=z.createHref(L);c.replaceState(U,"",te),l&&p&&p({action:d,location:z.location,delta:0})}function V(O){return XR(O)}let z={get action(){return d},get location(){return t(a,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener($E,b),p=O,()=>{a.removeEventListener($E,b),p=null}},createHref(O){return e(a,O)},createURL:V,encodeLocation(O){let N=V(O);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:T,replace:C,go(O){return c.go(O)}};return z}function XR(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),wt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:fc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function pT(t,e,n="/"){return ZR(t,e,n,!1)}function ZR(t,e,n,i){let a=typeof e=="string"?Cl(e):e,l=Zi(a.pathname||"/",n);if(l==null)return null;let c=mT(t);JR(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=cC(l);d=lC(c[p],g,i)}return d}function mT(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(wt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=Qi([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(wt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),mT(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:aC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of gT(l.path))a(l,c,p)}),e}function gT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=gT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function JR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var eC=/^:[\w-]+$/,tC=3,nC=2,rC=1,iC=10,sC=-2,GE=t=>t==="*";function aC(t,e){let n=t.split("/"),i=n.length;return n.some(GE)&&(i+=sC),e&&(i+=nC),n.filter(a=>!GE(a)).reduce((a,l)=>a+(eC.test(l)?tC:l===""?rC:iC),i)}function oC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function lC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",b=Ff({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!b&&g&&n&&!i[i.length-1].route.index&&(b=Ff({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!b)return null;Object.assign(a,b.params),c.push({params:a,pathname:Qi([l,b.pathname]),pathnameBase:pC(Qi([l,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(l=Qi([l,b.pathnameBase]))}return c}function Ff(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=uC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:b},T)=>{if(v==="*"){let V=d[T]||"";c=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const C=d[T];return b&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function uC(t,e=!1,n=!0){Ir(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function cC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ir(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Zi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function hC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Cl(t):t;return{pathname:n?n.startsWith("/")?n:fC(n,e):e,search:mC(i),hash:gC(a)}}function fC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Zm(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cy(t){let e=dC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function hy(t,e,n,i=!1){let a;typeof t=="string"?a=Cl(t):(a={...t},wt(!a.pathname||!a.pathname.includes("?"),Zm("?","pathname","search",a)),wt(!a.pathname||!a.pathname.includes("#"),Zm("#","pathname","hash",a)),wt(!a.search||!a.search.includes("#"),Zm("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let b=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),b-=1;a.pathname=T.join("/")}d=b>=0?e[b]:"/"}let p=hC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var Qi=t=>t.join("/").replace(/\/\/+/g,"/"),pC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var yT=["POST","PUT","PATCH","DELETE"];new Set(yT);var _C=["GET",...yT];new Set(_C);var Il=B.createContext(null);Il.displayName="DataRouter";var dd=B.createContext(null);dd.displayName="DataRouterState";B.createContext(!1);var _T=B.createContext({isTransitioning:!1});_T.displayName="ViewTransition";var vC=B.createContext(new Map);vC.displayName="Fetchers";var EC=B.createContext(null);EC.displayName="Await";var Or=B.createContext(null);Or.displayName="Navigation";var Cc=B.createContext(null);Cc.displayName="Location";var ci=B.createContext({outlet:null,matches:[],isDataRoute:!1});ci.displayName="Route";var fy=B.createContext(null);fy.displayName="RouteError";function wC(t,{relative:e}={}){wt(Dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=B.useContext(Or),{hash:a,pathname:l,search:c}=Dc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:Qi([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Dl(){return B.useContext(Cc)!=null}function sa(){return wt(Dl(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(Cc).location}var vT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ET(t){B.useContext(Or).static||B.useLayoutEffect(t)}function Ic(){let{isDataRoute:t}=B.useContext(ci);return t?NC():bC()}function bC(){wt(Dl(),"useNavigate() may be used only in the context of a <Router> component.");let t=B.useContext(Il),{basename:e,navigator:n}=B.useContext(Or),{matches:i}=B.useContext(ci),{pathname:a}=sa(),l=JSON.stringify(cy(i)),c=B.useRef(!1);return ET(()=>{c.current=!0}),B.useCallback((p,g={})=>{if(Ir(c.current,vT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=hy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Qi([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}B.createContext(null);function Dc(t,{relative:e}={}){let{matches:n}=B.useContext(ci),{pathname:i}=sa(),a=JSON.stringify(cy(n));return B.useMemo(()=>hy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function TC(t,e){return wT(t,e)}function wT(t,e,n,i){var N;wt(Dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=B.useContext(Or),{matches:l}=B.useContext(ci),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let L=v&&v.path||"";bT(p,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let b=sa(),T;if(e){let L=typeof e=="string"?Cl(e):e;wt(g==="/"||((N=L.pathname)==null?void 0:N.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),T=L}else T=b;let C=T.pathname||"/",V=C;if(g!=="/"){let L=g.replace(/^\//,"").split("/");V="/"+C.replace(/^\//,"").split("/").slice(L.length).join("/")}let z=pT(t,{pathname:V});Ir(v||z!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Ir(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=CC(z&&z.map(L=>Object.assign({},L,{params:Object.assign({},d,L.params),pathname:Qi([g,a.encodeLocation?a.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:Qi([g,a.encodeLocation?a.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,n,i);return e&&O?B.createElement(Cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},O):O}function SC(){let t=MC(),e=yC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:a},n):null,c)}var xC=B.createElement(SC,null),AC=class extends B.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?B.createElement(ci.Provider,{value:this.props.routeContext},B.createElement(fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RC({routeContext:t,match:e,children:n}){let i=B.useContext(Il);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(ci.Provider,{value:t},n)}function CC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);wt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:b}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let b,T=!1,C=null,V=null;n&&(b=l&&g.route.id?l[g.route.id]:void 0,C=g.route.errorElement||xC,c&&(d<0&&v===0?(bT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,V=null):d===v&&(T=!0,V=g.route.hydrateFallbackElement||null)));let z=e.concat(a.slice(0,v+1)),O=()=>{let N;return b?N=C:T?N=V:g.route.Component?N=B.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=p,B.createElement(RC,{match:g,routeContext:{outlet:p,matches:z,isDataRoute:n!=null},children:N})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?B.createElement(AC,{location:n.location,revalidation:n.revalidation,component:C,error:b,children:O(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):O()},null)}function dy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IC(t){let e=B.useContext(Il);return wt(e,dy(t)),e}function DC(t){let e=B.useContext(dd);return wt(e,dy(t)),e}function kC(t){let e=B.useContext(ci);return wt(e,dy(t)),e}function py(t){let e=kC(t),n=e.matches[e.matches.length-1];return wt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function OC(){return py("useRouteId")}function MC(){var i;let t=B.useContext(fy),e=DC("useRouteError"),n=py("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function NC(){let{router:t}=IC("useNavigate"),e=py("useNavigate"),n=B.useRef(!1);return ET(()=>{n.current=!0}),B.useCallback(async(a,l={})=>{Ir(n.current,vT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var YE={};function bT(t,e,n){!e&&!YE[t]&&(YE[t]=!0,Ir(!1,n))}B.memo(PC);function PC({routes:t,future:e,state:n}){return wT(t,void 0,n,e)}function VC({to:t,replace:e,state:n,relative:i}){wt(Dl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=B.useContext(Or);Ir(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=B.useContext(ci),{pathname:c}=sa(),d=Ic(),p=hy(t,cy(l),c,i==="path"),g=JSON.stringify(p);return B.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function xf(t){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){wt(!Dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Cl(n));let{pathname:p="/",search:g="",hash:v="",state:b=null,key:T="default"}=n,C=B.useMemo(()=>{let V=Zi(p,c);return V==null?null:{location:{pathname:V,search:g,hash:v,state:b,key:T},navigationType:i}},[c,p,g,v,b,T,i]);return Ir(C!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:B.createElement(Or.Provider,{value:d},B.createElement(Cc.Provider,{children:e,value:C}))}function jC({children:t,location:e}){return TC(Sg(t),e)}function Sg(t,e=[]){let n=[];return B.Children.forEach(t,(i,a)=>{if(!B.isValidElement(i))return;let l=[...e,a];if(i.type===B.Fragment){n.push.apply(n,Sg(i.props.children,l));return}wt(i.type===xf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Sg(i.props.children,l)),n.push(c)}),n}var Af="get",Rf="application/x-www-form-urlencoded";function pd(t){return t!=null&&typeof t.tagName=="string"}function UC(t){return pd(t)&&t.tagName.toLowerCase()==="button"}function qC(t){return pd(t)&&t.tagName.toLowerCase()==="form"}function BC(t){return pd(t)&&t.tagName.toLowerCase()==="input"}function zC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FC(t,e){return t.button===0&&(!e||e==="_self")&&!zC(t)}var df=null;function $C(){if(df===null)try{new FormData(document.createElement("form"),0),df=!1}catch{df=!0}return df}var HC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jm(t){return t!=null&&!HC.has(t)?(Ir(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rf}"`),null):t}function GC(t,e){let n,i,a,l,c;if(qC(t)){let d=t.getAttribute("action");i=d?Zi(d,e):null,n=t.getAttribute("method")||Af,a=Jm(t.getAttribute("enctype"))||Rf,l=new FormData(t)}else if(UC(t)||BC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?Zi(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Af,a=Jm(t.getAttribute("formenctype"))||Jm(d.getAttribute("enctype"))||Rf,l=new FormData(d,t),!$C()){let{name:g,type:v,value:b}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,b)}}else{if(pd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Af,i=null,a=Rf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function my(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function YC(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Zi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function WC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function KC(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await WC(l,n);return c.links?c.links():[]}return[]}));return eI(i.flat(1).filter(QC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function WE(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var b;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((b=n[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function XC(t,e,{includeHydrateFallback:n}={}){return ZC(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function ZC(t){return[...new Set(t)]}function JC(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function eI(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(JC(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function TT(){let t=B.useContext(Il);return my(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function tI(){let t=B.useContext(dd);return my(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gy=B.createContext(void 0);gy.displayName="FrameworkContext";function ST(){let t=B.useContext(gy);return my(t,"You must render this element inside a <HydratedRouter> element"),t}function nI(t,e){let n=B.useContext(gy),[i,a]=B.useState(!1),[l,c]=B.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:b}=e,T=B.useRef(null);B.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let z=N=>{N.forEach(L=>{c(L.isIntersecting)})},O=new IntersectionObserver(z,{threshold:.5});return T.current&&O.observe(T.current),()=>{O.disconnect()}}},[t]),B.useEffect(()=>{if(i){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[i]);let C=()=>{a(!0)},V=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Hu(d,C),onBlur:Hu(p,V),onMouseEnter:Hu(g,C),onMouseLeave:Hu(v,V),onTouchStart:Hu(b,C)}]:[!1,T,{}]}function Hu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function rI({page:t,...e}){let{router:n}=TT(),i=B.useMemo(()=>pT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?B.createElement(sI,{page:t,matches:i,...e}):null}function iI(t){let{manifest:e,routeModules:n}=ST(),[i,a]=B.useState([]);return B.useEffect(()=>{let l=!1;return KC(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function sI({page:t,matches:e,...n}){let i=sa(),{manifest:a,routeModules:l}=ST(),{basename:c}=TT(),{loaderData:d,matches:p}=tI(),g=B.useMemo(()=>WE(t,e,p,a,i,"data"),[t,e,p,a,i]),v=B.useMemo(()=>WE(t,e,p,a,i,"assets"),[t,e,p,a,i]),b=B.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let V=new Set,z=!1;if(e.forEach(N=>{var U;let L=a.routes[N.route.id];!L||!L.hasLoader||(!g.some(te=>te.route.id===N.route.id)&&N.route.id in d&&((U=l[N.route.id])!=null&&U.shouldRevalidate)||L.hasClientLoader?z=!0:V.add(N.route.id))}),V.size===0)return[];let O=YC(t,c,"data");return z&&V.size>0&&O.searchParams.set("_routes",e.filter(N=>V.has(N.route.id)).map(N=>N.route.id).join(",")),[O.pathname+O.search]},[c,d,i,a,g,e,t,l]),T=B.useMemo(()=>XC(v,a),[v,a]),C=iI(v);return B.createElement(B.Fragment,null,b.map(V=>B.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...n})),T.map(V=>B.createElement("link",{key:V,rel:"modulepreload",href:V,...n})),C.map(({key:V,link:z})=>B.createElement("link",{key:V,...z})))}function aI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var xT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xT&&(window.__reactRouterVersion="7.7.0")}catch{}function oI({basename:t,children:e,window:n}){let i=B.useRef();i.current==null&&(i.current=WR({window:n,v5Compat:!0}));let a=i.current,[l,c]=B.useState({action:a.action,location:a.location}),d=B.useCallback(p=>{B.startTransition(()=>c(p))},[c]);return B.useLayoutEffect(()=>a.listen(d),[a,d]),B.createElement(LC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var AT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RT=B.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:b,...T},C){let{basename:V}=B.useContext(Or),z=typeof g=="string"&&AT.test(g),O,N=!1;if(typeof g=="string"&&z&&(O=g,xT))try{let D=new URL(window.location.href),k=g.startsWith("//")?new URL(D.protocol+g):new URL(g),j=Zi(k.pathname,V);k.origin===D.origin&&j!=null?g=j+k.search+k.hash:N=!0}catch{Ir(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=wC(g,{relative:a}),[U,te,$]=nI(i,T),ne=hI(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:b});function R(D){e&&e(D),D.defaultPrevented||ne(D)}let A=B.createElement("a",{...T,...$,href:O||L,onClick:N||l?e:R,ref:aI(C,te),target:p,"data-discover":!z&&n==="render"?"true":void 0});return U&&!z?B.createElement(B.Fragment,null,A,B.createElement(rI,{page:L})):A});RT.displayName="Link";var lI=B.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let b=Dc(c,{relative:g.relative}),T=sa(),C=B.useContext(dd),{navigator:V,basename:z}=B.useContext(Or),O=C!=null&&gI(b)&&d===!0,N=V.encodeLocation?V.encodeLocation(b).pathname:b.pathname,L=T.pathname,U=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(L=L.toLowerCase(),U=U?U.toLowerCase():null,N=N.toLowerCase()),U&&z&&(U=Zi(U,z)||U);const te=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let $=L===N||!a&&L.startsWith(N)&&L.charAt(te)==="/",ne=U!=null&&(U===N||!a&&U.startsWith(N)&&U.charAt(N.length)==="/"),R={isActive:$,isPending:ne,isTransitioning:O},A=$?e:void 0,D;typeof i=="function"?D=i(R):D=[i,$?"active":null,ne?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(R):l;return B.createElement(RT,{...g,"aria-current":A,className:D,ref:v,style:k,to:c,viewTransition:d},typeof p=="function"?p(R):p)});lI.displayName="NavLink";var uI=B.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Af,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:b,...T},C)=>{let V=pI(),z=mI(d,{relative:g}),O=c.toLowerCase()==="get"?"get":"post",N=typeof d=="string"&&AT.test(d),L=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let te=U.nativeEvent.submitter,$=(te==null?void 0:te.getAttribute("formmethod"))||c;V(te||U.currentTarget,{fetcherKey:e,method:$,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:b})};return B.createElement("form",{ref:C,method:O,action:z,onSubmit:i?p:L,...T,"data-discover":!N&&t==="render"?"true":void 0})});uI.displayName="Form";function cI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CT(t){let e=B.useContext(Il);return wt(e,cI(t)),e}function hI(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Ic(),p=sa(),g=Dc(t,{relative:l});return B.useCallback(v=>{if(FC(v,e)){v.preventDefault();let b=n!==void 0?n:fc(p)===fc(g);d(t,{replace:b,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var fI=0,dI=()=>`__${String(++fI)}__`;function pI(){let{router:t}=CT("useSubmit"),{basename:e}=B.useContext(Or),n=OC();return B.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=GC(i,e);if(a.navigate===!1){let v=a.fetcherKey||dI();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function mI(t,{relative:e}={}){let{basename:n}=B.useContext(Or),i=B.useContext(ci);wt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Dc(t||".",{relative:e})},c=sa();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Qi([n,l.pathname])),fc(l)}function gI(t,e={}){let n=B.useContext(_T);wt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=CT("useViewTransitionState"),a=Dc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Zi(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=Zi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Ff(a.pathname,c)!=null||Ff(a.pathname,l)!=null}var un=function(){return un=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},un.apply(this,arguments)};function dc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var yt="-ms-",sc="-moz-",nt="-webkit-",IT="comm",md="rule",yy="decl",yI="@import",DT="@keyframes",_I="@layer",kT=Math.abs,_y=String.fromCharCode,xg=Object.assign;function vI(t,e){return ln(t,0)^45?(((e<<2^ln(t,0))<<2^ln(t,1))<<2^ln(t,2))<<2^ln(t,3):0}function OT(t){return t.trim()}function $i(t,e){return(t=e.exec(t))?t[0]:t}function Le(t,e,n){return t.replace(e,n)}function Cf(t,e,n){return t.indexOf(e,n)}function ln(t,e){return t.charCodeAt(e)|0}function ml(t,e,n){return t.slice(e,n)}function ei(t){return t.length}function MT(t){return t.length}function Xu(t,e){return e.push(t),t}function EI(t,e){return t.map(e).join("")}function QE(t,e){return t.filter(function(n){return!$i(n,e)})}var gd=1,gl=1,NT=0,yr=0,jt=0,kl="";function yd(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:gd,column:gl,length:c,return:"",siblings:d}}function js(t,e){return xg(yd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function rl(t){for(;t.root;)t=js(t.root,{children:[t]});Xu(t,t.siblings)}function wI(){return jt}function bI(){return jt=yr>0?ln(kl,--yr):0,gl--,jt===10&&(gl=1,gd--),jt}function Ar(){return jt=yr<NT?ln(kl,yr++):0,gl++,jt===10&&(gl=1,gd++),jt}function Wa(){return ln(kl,yr)}function If(){return yr}function _d(t,e){return ml(kl,t,e)}function Ag(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function TI(t){return gd=gl=1,NT=ei(kl=t),yr=0,[]}function SI(t){return kl="",t}function eg(t){return OT(_d(yr-1,Rg(t===91?t+2:t===40?t+1:t)))}function xI(t){for(;(jt=Wa())&&jt<33;)Ar();return Ag(t)>2||Ag(jt)>3?"":" "}function AI(t,e){for(;--e&&Ar()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return _d(t,If()+(e<6&&Wa()==32&&Ar()==32))}function Rg(t){for(;Ar();)switch(jt){case t:return yr;case 34:case 39:t!==34&&t!==39&&Rg(jt);break;case 40:t===41&&Rg(t);break;case 92:Ar();break}return yr}function RI(t,e){for(;Ar()&&t+jt!==57;)if(t+jt===84&&Wa()===47)break;return"/*"+_d(e,yr-1)+"*"+_y(t===47?t:Ar())}function CI(t){for(;!Ag(Wa());)Ar();return _d(t,yr)}function II(t){return SI(Df("",null,null,null,[""],t=TI(t),0,[0],t))}function Df(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,b=c,T=0,C=0,V=0,z=1,O=1,N=1,L=0,U="",te=a,$=l,ne=i,R=U;O;)switch(V=L,L=Ar()){case 40:if(V!=108&&ln(R,b-1)==58){Cf(R+=Le(eg(L),"&","&\f"),"&\f",kT(g?d[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:R+=eg(L);break;case 9:case 10:case 13:case 32:R+=xI(V);break;case 92:R+=AI(If()-1,7);continue;case 47:switch(Wa()){case 42:case 47:Xu(DI(RI(Ar(),If()),e,n,p),p);break;default:R+="/"}break;case 123*z:d[g++]=ei(R)*N;case 125*z:case 59:case 0:switch(L){case 0:case 125:O=0;case 59+v:N==-1&&(R=Le(R,/\f/g,"")),C>0&&ei(R)-b&&Xu(C>32?XE(R+";",i,n,b-1,p):XE(Le(R," ","")+";",i,n,b-2,p),p);break;case 59:R+=";";default:if(Xu(ne=KE(R,e,n,g,v,a,d,U,te=[],$=[],b,l),l),L===123)if(v===0)Df(R,e,ne,ne,te,l,b,d,$);else switch(T===99&&ln(R,3)===110?100:T){case 100:case 108:case 109:case 115:Df(t,ne,ne,i&&Xu(KE(t,ne,ne,0,0,a,d,U,a,te=[],b,$),$),a,$,b,d,i?te:$);break;default:Df(R,ne,ne,ne,[""],$,0,d,$)}}g=v=C=0,z=N=1,U=R="",b=c;break;case 58:b=1+ei(R),C=V;default:if(z<1){if(L==123)--z;else if(L==125&&z++==0&&bI()==125)continue}switch(R+=_y(L),L*z){case 38:N=v>0?1:(R+="\f",-1);break;case 44:d[g++]=(ei(R)-1)*N,N=1;break;case 64:Wa()===45&&(R+=eg(Ar())),T=Wa(),v=b=ei(U=R+=CI(If())),L++;break;case 45:V===45&&ei(R)==2&&(z=0)}}return l}function KE(t,e,n,i,a,l,c,d,p,g,v,b){for(var T=a-1,C=a===0?l:[""],V=MT(C),z=0,O=0,N=0;z<i;++z)for(var L=0,U=ml(t,T+1,T=kT(O=c[z])),te=t;L<V;++L)(te=OT(O>0?C[L]+" "+U:Le(U,/&\f/g,C[L])))&&(p[N++]=te);return yd(t,e,n,a===0?md:d,p,g,v,b)}function DI(t,e,n,i){return yd(t,e,n,IT,_y(wI()),ml(t,2,-2),0,i)}function XE(t,e,n,i,a){return yd(t,e,n,yy,ml(t,0,i),ml(t,i+1,-1),i,a)}function PT(t,e,n){switch(vI(t,e)){case 5103:return nt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nt+t+t;case 4789:return sc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+t+sc+t+yt+t+t;case 5936:switch(ln(t,e+11)){case 114:return nt+t+yt+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return nt+t+yt+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return nt+t+yt+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return nt+t+yt+t+t;case 6165:return nt+t+yt+"flex-"+t+t;case 5187:return nt+t+Le(t,/(\w+).+(:[^]+)/,nt+"box-$1$2"+yt+"flex-$1$2")+t;case 5443:return nt+t+yt+"flex-item-"+Le(t,/flex-|-self/g,"")+($i(t,/flex-|baseline/)?"":yt+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return nt+t+yt+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return nt+t+yt+Le(t,"shrink","negative")+t;case 5292:return nt+t+yt+Le(t,"basis","preferred-size")+t;case 6060:return nt+"box-"+Le(t,"-grow","")+nt+t+yt+Le(t,"grow","positive")+t;case 4554:return nt+Le(t,/([^-])(transform)/g,"$1"+nt+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nt+t+t;case 4200:if(!$i(t,/flex-|baseline/))return yt+"grid-column-align"+ml(t,e)+t;break;case 2592:case 3360:return yt+Le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,$i(i.props,/grid-\w+-end/)})?~Cf(t+(n=n[e].value),"span",0)?t:yt+Le(t,"-start","")+t+yt+"grid-row-span:"+(~Cf(n,"span",0)?$i(n,/\d+/):+$i(n,/\d+/)-+$i(t,/\d+/))+";":yt+Le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return $i(i.props,/grid-\w+-start/)})?t:yt+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,nt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ei(t)-1-e>6)switch(ln(t,e+1)){case 109:if(ln(t,e+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+sc+(ln(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cf(t,"stretch",0)?PT(Le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return yt+a+":"+l+g+(c?yt+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(ln(t,e+6)===121)return Le(t,":",":"+nt)+t;break;case 6444:switch(ln(t,ln(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nt+(ln(t,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+yt+"$2box$3")+t;case 100:return Le(t,":",":"+yt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function $f(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function kI(t,e,n,i){switch(t.type){case _I:if(t.children.length)break;case yI:case yy:return t.return=t.return||t.value;case IT:return"";case DT:return t.return=t.value+"{"+$f(t.children,i)+"}";case md:if(!ei(t.value=t.props.join(",")))return""}return ei(n=$f(t.children,i))?t.return=t.value+"{"+n+"}":""}function OI(t){var e=MT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function MI(t){return function(e){e.root||(e=e.return)&&t(e)}}function NI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case yy:t.return=PT(t.value,t.length,n);return;case DT:return $f([js(t,{value:Le(t.value,"@","@"+nt)})],i);case md:if(t.length)return EI(n=t.props,function(a){switch($i(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rl(js(t,{props:[Le(a,/:(read-\w+)/,":"+sc+"$1")]})),rl(js(t,{props:[a]})),xg(t,{props:QE(n,i)});break;case"::placeholder":rl(js(t,{props:[Le(a,/:(plac\w+)/,":"+nt+"input-$1")]})),rl(js(t,{props:[Le(a,/:(plac\w+)/,":"+sc+"$1")]})),rl(js(t,{props:[Le(a,/:(plac\w+)/,yt+"input-$1")]})),rl(js(t,{props:[a]})),xg(t,{props:QE(n,i)});break}return""})}}var PI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xn={},yl=typeof process<"u"&&Xn!==void 0&&(Xn.REACT_APP_SC_ATTR||Xn.SC_ATTR)||"data-styled",VT="active",LT="data-styled-version",vd="6.1.19",vy=`/*!sc*/
`,Hf=typeof window<"u"&&typeof document<"u",VI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xn!==void 0&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==""?Xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xn!==void 0&&Xn.SC_DISABLE_SPEEDY!==void 0&&Xn.SC_DISABLE_SPEEDY!==""&&Xn.SC_DISABLE_SPEEDY!=="false"&&Xn.SC_DISABLE_SPEEDY),LI={},Ed=Object.freeze([]),_l=Object.freeze({});function jT(t,e,n){return n===void 0&&(n=_l),t.theme!==n.theme&&t.theme||e||n.theme}var UT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UI=/(^-|-$)/g;function ZE(t){return t.replace(jI,"-").replace(UI,"")}var qI=/(a)(d)/gi,pf=52,JE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Cg(t){var e,n="";for(e=Math.abs(t);e>pf;e=e/pf|0)n=JE(e%pf)+n;return(JE(e%pf)+n).replace(qI,"$1-$2")}var tg,qT=5381,ul=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},BT=function(t){return ul(qT,t)};function zT(t){return Cg(BT(t)>>>0)}function BI(t){return t.displayName||t.name||"Component"}function ng(t){return typeof t=="string"&&!0}var FT=typeof Symbol=="function"&&Symbol.for,$T=FT?Symbol.for("react.memo"):60115,zI=FT?Symbol.for("react.forward_ref"):60112,FI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$I={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HI=((tg={})[zI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tg[$T]=HT,tg);function ew(t){return("type"in(e=t)&&e.type.$$typeof)===$T?HT:"$$typeof"in t?HI[t.$$typeof]:FI;var e}var GI=Object.defineProperty,YI=Object.getOwnPropertyNames,tw=Object.getOwnPropertySymbols,WI=Object.getOwnPropertyDescriptor,QI=Object.getPrototypeOf,nw=Object.prototype;function GT(t,e,n){if(typeof e!="string"){if(nw){var i=QI(e);i&&i!==nw&&GT(t,i,n)}var a=YI(e);tw&&(a=a.concat(tw(e)));for(var l=ew(t),c=ew(e),d=0;d<a.length;++d){var p=a[d];if(!(p in $I||n&&n[p]||c&&p in c||l&&p in l)){var g=WI(e,p);try{GI(t,p,g)}catch{}}}}return t}function Za(t){return typeof t=="function"}function Ey(t){return typeof t=="object"&&"styledComponentId"in t}function Ha(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ig(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function pc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Dg(t,e,n){if(n===void 0&&(n=!1),!n&&!pc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Dg(t[i],e[i]);else if(pc(e))for(var i in e)t[i]=Dg(t[i],e[i]);return t}function wy(t,e){Object.defineProperty(t,"toString",{value:e})}function Ja(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var KI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw Ja(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(vy);return n},t}(),kf=new Map,Gf=new Map,Of=1,mf=function(t){if(kf.has(t))return kf.get(t);for(;Gf.has(Of);)Of++;var e=Of++;return kf.set(t,e),Gf.set(e,t),e},XI=function(t,e){Of=e+1,kf.set(t,e),Gf.set(e,t)},ZI="style[".concat(yl,"][").concat(LT,'="').concat(vd,'"]'),JI=new RegExp("^".concat(yl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eD=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},tD=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(vy),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(JI);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(XI(v,g),eD(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},rw=function(t){for(var e=document.querySelectorAll(ZI),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(yl)!==VT&&(tD(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function nD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var YT=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(yl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(yl,VT),i.setAttribute(LT,vd);var c=nD();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},rD=function(){function t(e){this.element=YT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw Ja(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),iD=function(){function t(e){this.element=YT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),sD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),iw=Hf,aD={isServer:!Hf,useCSSOMInjection:!VI},Yf=function(){function t(e,n,i){e===void 0&&(e=_l),n===void 0&&(n={});var a=this;this.options=un(un({},aD),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Hf&&iw&&(iw=!1,rw(this)),wy(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(b){var T=function(N){return Gf.get(N)}(b);if(T===void 0)return"continue";var C=l.names.get(T),V=c.getGroup(b);if(C===void 0||!C.size||V.length===0)return"continue";var z="".concat(yl,".g").concat(b,'[id="').concat(T,'"]'),O="";C!==void 0&&C.forEach(function(N){N.length>0&&(O+="".concat(N,","))}),p+="".concat(V).concat(z,'{content:"').concat(O,'"}').concat(vy)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return mf(e)},t.prototype.rehydrate=function(){!this.server&&Hf&&rw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(un(un({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new sD(a):i?new rD(a):new iD(a)}(this.options),new KI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(mf(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(mf(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(mf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),oD=/&/g,lD=/^\s*\/\/.*$/gm;function WT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=WT(n.children,e)),n})}function uD(t){var e,n,i,a=_l,l=a.options,c=l===void 0?_l:l,d=a.plugins,p=d===void 0?Ed:d,g=function(T,C,V){return V.startsWith(n)&&V.endsWith(n)&&V.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===md&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(oD,n).replace(i,g))}),c.prefix&&v.push(NI),v.push(kI);var b=function(T,C,V,z){C===void 0&&(C=""),V===void 0&&(V=""),z===void 0&&(z="&"),e=z,n=C,i=new RegExp("\\".concat(n,"\\b"),"g");var O=T.replace(lD,""),N=II(V||C?"".concat(V," ").concat(C," { ").concat(O," }"):O);c.namespace&&(N=WT(N,c.namespace));var L=[];return $f(N,OI(v.concat(MI(function(U){return L.push(U)})))),L};return b.hash=p.length?p.reduce(function(T,C){return C.name||Ja(15),ul(T,C.name)},qT).toString():"",b}var cD=new Yf,kg=uD(),QT=me.createContext({shouldForwardProp:void 0,styleSheet:cD,stylis:kg});QT.Consumer;me.createContext(void 0);function Og(){return B.useContext(QT)}var hD=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=kg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,wy(this,function(){throw Ja(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=kg),this.name+e.hash},t}(),fD=function(t){return t>="A"&&t<="Z"};function sw(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;fD(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var KT=function(t){return t==null||t===!1||t===""},XT=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!KT(l)&&(Array.isArray(l)&&l.isCss||Za(l)?i.push("".concat(sw(a),":"),l,";"):pc(l)?i.push.apply(i,dc(dc(["".concat(a," {")],XT(l),!1),["}"],!1)):i.push("".concat(sw(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in PI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function $s(t,e,n,i){if(KT(t))return[];if(Ey(t))return[".".concat(t.styledComponentId)];if(Za(t)){if(!Za(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return $s(a,e,n,i)}var l;return t instanceof hD?n?(t.inject(n,i),[t.getName(i)]):[t]:pc(t)?XT(t):Array.isArray(t)?Array.prototype.concat.apply(Ed,t.map(function(c){return $s(c,e,n,i)})):[t.toString()]}function ZT(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Za(n)&&!Ey(n))return!1}return!0}var dD=BT(vd),pD=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ZT(e),this.componentId=n,this.baseHash=ul(dD,n),this.baseStyle=i,Yf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Ha(a,this.staticRulesId);else{var l=Ig($s(this.rules,e,n,i)),c=Cg(ul(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Ha(a,c),this.staticRulesId=c}else{for(var p=ul(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var T=Ig($s(b,e,n,i));p=ul(p,T+v),g+=T}}if(g){var C=Cg(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,i(g,".".concat(C),void 0,this.componentId)),a=Ha(a,C)}}return a},t}(),mc=me.createContext(void 0);mc.Consumer;function mD(t){var e=me.useContext(mc),n=B.useMemo(function(){return function(i,a){if(!i)throw Ja(14);if(Za(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw Ja(8);return a?un(un({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?me.createElement(mc.Provider,{value:n},t.children):null}var rg={};function gD(t,e,n){var i=Ey(t),a=t,l=!ng(t),c=e.attrs,d=c===void 0?Ed:c,p=e.componentId,g=p===void 0?function(te,$){var ne=typeof te!="string"?"sc":ZE(te);rg[ne]=(rg[ne]||0)+1;var R="".concat(ne,"-").concat(zT(vd+ne+rg[ne]));return $?"".concat($,"-").concat(R):R}(e.displayName,e.parentComponentId):p,v=e.displayName,b=v===void 0?function(te){return ng(te)?"styled.".concat(te):"Styled(".concat(BI(te),")")}(t):v,T=e.displayName&&e.componentId?"".concat(ZE(e.displayName),"-").concat(e.componentId):e.componentId||g,C=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,V=e.shouldForwardProp;if(i&&a.shouldForwardProp){var z=a.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;V=function(te,$){return z(te,$)&&O(te,$)}}else V=z}var N=new pD(n,T,i?a.componentStyle:void 0);function L(te,$){return function(ne,R,A){var D=ne.attrs,k=ne.componentStyle,j=ne.defaultProps,q=ne.foldedComponentIds,M=ne.styledComponentId,he=ne.target,ge=me.useContext(mc),K=Og(),le=ne.shouldForwardProp||K.shouldForwardProp,fe=jT(R,ge,j)||_l,ve=function(xe,we,ft){for(var He,bt=un(un({},we),{className:void 0,theme:ft}),Pn=0;Pn<xe.length;Pn+=1){var vn=Za(He=xe[Pn])?He(bt):He;for(var Kt in vn)bt[Kt]=Kt==="className"?Ha(bt[Kt],vn[Kt]):Kt==="style"?un(un({},bt[Kt]),vn[Kt]):vn[Kt]}return we.className&&(bt.className=Ha(bt.className,we.className)),bt}(D,R,fe),I=ve.as||he,ee={};for(var se in ve)ve[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&ve.theme===fe||(se==="forwardedAs"?ee.as=ve.forwardedAs:le&&!le(se,I)||(ee[se]=ve[se]));var ie=function(xe,we){var ft=Og(),He=xe.generateAndInjectStyles(we,ft.styleSheet,ft.stylis);return He}(k,ve),de=Ha(q,M);return ie&&(de+=" "+ie),ve.className&&(de+=" "+ve.className),ee[ng(I)&&!UT.has(I)?"class":"className"]=de,A&&(ee.ref=A),B.createElement(I,ee)}(U,te,$)}L.displayName=b;var U=me.forwardRef(L);return U.attrs=C,U.componentStyle=N,U.displayName=b,U.shouldForwardProp=V,U.foldedComponentIds=i?Ha(a.foldedComponentIds,a.styledComponentId):"",U.styledComponentId=T,U.target=i?a.target:t,Object.defineProperty(U,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function($){for(var ne=[],R=1;R<arguments.length;R++)ne[R-1]=arguments[R];for(var A=0,D=ne;A<D.length;A++)Dg($,D[A],!0);return $}({},a.defaultProps,te):te}}),wy(U,function(){return".".concat(U.styledComponentId)}),l&&GT(U,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),U}function aw(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var ow=function(t){return Object.assign(t,{isCss:!0})};function JT(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Za(t)||pc(t))return ow($s(aw(Ed,dc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?$s(i):ow($s(aw(i,e)))}function Mg(t,e,n){if(n===void 0&&(n=_l),!e)throw Ja(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,JT.apply(void 0,dc([a],l,!1)))};return i.attrs=function(a){return Mg(t,e,un(un({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Mg(t,e,un(un({},n),a))},i}var e1=function(t){return Mg(gD,t)},H=e1;UT.forEach(function(t){H[t]=e1(t)});var yD=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=ZT(e),Yf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Ig($s(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Yf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function t1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=JT.apply(void 0,dc([t],e,!1)),a="sc-global-".concat(zT(JSON.stringify(i))),l=new yD(i,a),c=function(p){var g=Og(),v=me.useContext(mc),b=me.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(b,p,g.styleSheet,v,g.stylis),me.useLayoutEffect(function(){if(!g.styleSheet.server)return d(b,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(b,g.styleSheet)}},[b,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,b,T){if(l.isStatic)l.renderStyles(p,LI,v,T);else{var C=un(un({},g),{theme:jT(g,b,c.defaultProps)});l.renderStyles(p,C,v,T)}}return me.memo(c)}/**
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
 */const _D=()=>{};var lw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},vD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},r1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,b=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,C=g&63;p||(C=64,c||(T=64)),i.push(n[v],n[b],n[T],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const b=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new ED;const T=l<<2|d>>4;if(i.push(T),g!==64){const C=d<<4&240|g>>2;if(i.push(C),b!==64){const V=g<<6&192|b;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ED extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wD=function(t){const e=n1(t);return r1.encodeByteArray(e,!0)},Wf=function(t){return wD(t).replace(/\./g,"")},i1=function(t){try{return r1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TD=()=>bD().__FIREBASE_DEFAULTS__,SD=()=>{if(typeof process>"u"||typeof lw>"u")return;const t=lw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&i1(t[1]);return e&&JSON.parse(e)},wd=()=>{try{return _D()||TD()||SD()||xD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s1=t=>{var e,n;return(n=(e=wd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},AD=t=>{const e=s1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},a1=()=>{var t;return(t=wd())==null?void 0:t.config},o1=t=>{var e;return(e=wd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ol(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function l1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function CD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Wf(JSON.stringify(n)),Wf(JSON.stringify(c)),""].join(".")}const ac={};function ID(){const t={prod:[],emulator:[]};for(const e of Object.keys(ac))ac[e]?t.emulator.push(e):t.prod.push(e);return t}function DD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let uw=!1;function u1(t,e){if(typeof window>"u"||typeof document>"u"||!Ol(window.location.host)||ac[t]===e||ac[t]||uw)return;ac[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=ID().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{uw=!0,c()},T}function v(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function b(){const T=DD(i),C=n("text"),V=document.getElementById(C)||document.createElement("span"),z=n("learnmore"),O=document.getElementById(z)||document.createElement("a"),N=n("preprendIcon"),L=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const U=T.element;d(U),v(O,z);const te=g();p(L,N),U.append(L,V,O,te),document.body.appendChild(U)}l?(V.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function OD(){var e;const t=(e=wd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ND(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VD(){const t=In();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LD(){return!OD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jD(){try{return typeof indexedDB=="object"}catch{return!1}}function UD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="FirebaseError";class rs extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=qD,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kc.prototype.create)}}class kc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?BD(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new rs(a,d,i)}}function BD(t,e){return t.replace(zD,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const zD=/\{\$([^}]+)}/g;function FD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(cw(l)&&cw(c)){if(!eo(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function cw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zu(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Ju(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $D(t,e){const n=new HD(t,e);return n.subscribe.bind(n)}class HD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");GD(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=ig),a.error===void 0&&(a.error=ig),a.complete===void 0&&(a.complete=ig);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ig(){}/**
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
 */function zt(t){return t&&t._delegate?t._delegate:t}class to{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fa="[DEFAULT]";/**
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
 */class YD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new RD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QD(e))try{this.getOrInitializeService({instanceIdentifier:Fa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Fa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fa){return this.instances.has(e)}getOptions(e=Fa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:WD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fa){return this.component?this.component.multipleInstances?e:Fa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WD(t){return t===Fa?void 0:t}function QD(t){return t.instantiationMode==="EAGER"}/**
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
 */class KD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const XD={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},ZD=ze.INFO,JD={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},ek=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=JD[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class by{constructor(e){this.name=e,this._logLevel=ZD,this._logHandler=ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const tk=(t,e)=>e.some(n=>t instanceof n);let hw,fw;function nk(){return hw||(hw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rk(){return fw||(fw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c1=new WeakMap,Ng=new WeakMap,h1=new WeakMap,sg=new WeakMap,Ty=new WeakMap;function ik(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Hs(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&c1.set(n,t)}).catch(()=>{}),Ty.set(e,t),e}function sk(t){if(Ng.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Ng.set(t,e)}let Pg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ng.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ak(t){Pg=t(Pg)}function ok(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ag(this),e,...n);return h1.set(i,e.sort?e.sort():[e]),Hs(i)}:rk().includes(t)?function(...e){return t.apply(ag(this),e),Hs(c1.get(this))}:function(...e){return Hs(t.apply(ag(this),e))}}function lk(t){return typeof t=="function"?ok(t):(t instanceof IDBTransaction&&sk(t),tk(t,nk())?new Proxy(t,Pg):t)}function Hs(t){if(t instanceof IDBRequest)return ik(t);if(sg.has(t))return sg.get(t);const e=lk(t);return e!==t&&(sg.set(t,e),Ty.set(e,t)),e}const ag=t=>Ty.get(t);function uk(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=Hs(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Hs(c.result),p.oldVersion,p.newVersion,Hs(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const ck=["get","getKey","getAll","getAllKeys","count"],hk=["put","add","delete","clear"],og=new Map;function dw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(og.get(e))return og.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=hk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||ck.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return og.set(e,l),l}ak(t=>({...t,get:(e,n,i)=>dw(e,n)||t.get(e,n,i),has:(e,n)=>!!dw(e,n)||t.has(e,n)}));/**
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
 */class fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function dk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vg="@firebase/app",pw="0.14.0";/**
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
 */const Ji=new by("@firebase/app"),pk="@firebase/app-compat",mk="@firebase/analytics-compat",gk="@firebase/analytics",yk="@firebase/app-check-compat",_k="@firebase/app-check",vk="@firebase/auth",Ek="@firebase/auth-compat",wk="@firebase/database",bk="@firebase/data-connect",Tk="@firebase/database-compat",Sk="@firebase/functions",xk="@firebase/functions-compat",Ak="@firebase/installations",Rk="@firebase/installations-compat",Ck="@firebase/messaging",Ik="@firebase/messaging-compat",Dk="@firebase/performance",kk="@firebase/performance-compat",Ok="@firebase/remote-config",Mk="@firebase/remote-config-compat",Nk="@firebase/storage",Pk="@firebase/storage-compat",Vk="@firebase/firestore",Lk="@firebase/ai",jk="@firebase/firestore-compat",Uk="firebase",qk="12.0.0";/**
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
 */const Lg="[DEFAULT]",Bk={[Vg]:"fire-core",[pk]:"fire-core-compat",[gk]:"fire-analytics",[mk]:"fire-analytics-compat",[_k]:"fire-app-check",[yk]:"fire-app-check-compat",[vk]:"fire-auth",[Ek]:"fire-auth-compat",[wk]:"fire-rtdb",[bk]:"fire-data-connect",[Tk]:"fire-rtdb-compat",[Sk]:"fire-fn",[xk]:"fire-fn-compat",[Ak]:"fire-iid",[Rk]:"fire-iid-compat",[Ck]:"fire-fcm",[Ik]:"fire-fcm-compat",[Dk]:"fire-perf",[kk]:"fire-perf-compat",[Ok]:"fire-rc",[Mk]:"fire-rc-compat",[Nk]:"fire-gcs",[Pk]:"fire-gcs-compat",[Vk]:"fire-fst",[jk]:"fire-fst-compat",[Lk]:"fire-vertex","fire-js":"fire-js",[Uk]:"fire-js-all"};/**
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
 */const Qf=new Map,zk=new Map,jg=new Map;function mw(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vl(t){const e=t.name;if(jg.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;jg.set(e,t);for(const n of Qf.values())mw(n,t);for(const n of zk.values())mw(n,t);return!0}function Sy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gs=new kc("app","Firebase",Fk);/**
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
 */class $k{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new to("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ml=qk;function f1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Lg,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Gs.create("bad-app-name",{appName:String(a)});if(n||(n=a1()),!n)throw Gs.create("no-options");const l=Qf.get(a);if(l){if(eo(n,l.options)&&eo(i,l.config))return l;throw Gs.create("duplicate-app",{appName:a})}const c=new KD(a);for(const p of jg.values())c.addComponent(p);const d=new $k(n,i,c);return Qf.set(a,d),d}function d1(t=Lg){const e=Qf.get(t);if(!e&&t===Lg&&a1())return f1();if(!e)throw Gs.create("no-app",{appName:t});return e}function Ys(t,e,n){let i=Bk[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(c.join(" "));return}vl(new to(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hk="firebase-heartbeat-database",Gk=1,gc="firebase-heartbeat-store";let lg=null;function p1(){return lg||(lg=uk(Hk,Gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gc)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gs.create("idb-open",{originalErrorMessage:t.message})})),lg}async function Yk(t){try{const n=(await p1()).transaction(gc),i=await n.objectStore(gc).get(m1(t));return await n.done,i}catch(e){if(e instanceof rs)Ji.warn(e.message);else{const n=Gs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function gw(t,e){try{const i=(await p1()).transaction(gc,"readwrite");await i.objectStore(gc).put(e,m1(t)),await i.done}catch(n){if(n instanceof rs)Ji.warn(n.message);else{const i=Gs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(i.message)}}}function m1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wk=1024,Qk=30;class Kk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Qk){const c=Jk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ji.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yw(),{heartbeatsToSend:i,unsentEntries:a}=Xk(this._heartbeatsCache.heartbeats),l=Wf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Ji.warn(n),""}}}function yw(){return new Date().toISOString().substring(0,10)}function Xk(t,e=Wk){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),_w(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),_w(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Zk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jD()?UD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _w(t){return Wf(JSON.stringify({version:2,heartbeats:t})).length}function Jk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function eO(t){vl(new to("platform-logger",e=>new fk(e),"PRIVATE")),vl(new to("heartbeat",e=>new Kk(e),"PRIVATE")),Ys(Vg,pw,t),Ys(Vg,pw,"esm2020"),Ys("fire-js","")}eO("");function g1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tO=g1,y1=new kc("auth","Firebase",g1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new by("@firebase/auth");function nO(t,...e){Kf.logLevel<=ze.WARN&&Kf.warn(`Auth (${Ml}): ${t}`,...e)}function Mf(t,...e){Kf.logLevel<=ze.ERROR&&Kf.error(`Auth (${Ml}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,...e){throw xy(t,...e)}function ni(t,...e){return xy(t,...e)}function _1(t,e,n){const i={...tO(),[e]:n};return new kc("auth","Firebase",i).create(e,{appName:t.name})}function Ki(t){return _1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xy(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return y1.create(t,...e)}function Ie(t,e,...n){if(!t)throw xy(e,...n)}function Hi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mf(e),new Error(e)}function es(t,e){t||Hi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function rO(){return vw()==="http:"||vw()==="https:"}function vw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rO()||ND()||"connection"in navigator)?navigator.onLine:!0}function sO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.shortDelay=e,this.longDelay=n,es(n>e,"Short delay should be less than long delay!"),this.isMobile=kD()||PD()}get(){return iO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e){es(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lO=new Mc(3e4,6e4);function aa(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function is(t,e,n,i,a={}){return E1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Oc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return MD()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Ol(t.emulatorConfig.host)&&(g.credentials="include"),v1.fetch()(await w1(t,t.config.apiHost,n,d),g)})}async function E1(t,e,n){t._canInitEmulator=!1;const i={...aO,...e};try{const a=new cO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw gf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw gf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw gf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw _1(t,v,g);Dr(t,v)}}catch(a){if(a instanceof rs)throw a;Dr(t,"network-request-failed",{message:String(a)})}}async function Nc(t,e,n,i,a={}){const l=await is(t,e,n,i,a);return"mfaPendingCredential"in l&&Dr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function w1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Ay(t.config,a):`${t.config.apiScheme}://${a}`;return oO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function uO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ni(this.auth,"network-request-failed")),lO.get())})}}function gf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=ni(t,e,i);return a.customData._tokenResponse=n,a}function Ew(t){return t!==void 0&&t.enterprise!==void 0}class hO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fO(t,e){return is(t,"GET","/v2/recaptchaConfig",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function Xf(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pO(t,e=!1){const n=zt(t),i=await n.getIdToken(e),a=Ry(i);Ie(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:oc(ug(a.auth_time)),issuedAtTime:oc(ug(a.iat)),expirationTime:oc(ug(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function ug(t){return Number(t)*1e3}function Ry(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Mf("JWT malformed, contained fewer than 3 sections"),null;try{const a=i1(n);return a?JSON.parse(a):(Mf("Failed to decode base64 JWT payload"),null)}catch(a){return Mf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function ww(t){const e=Ry(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof rs&&mO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function mO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oc(this.lastLoginAt),this.creationTime=oc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zf(t){var b;const e=t.auth,n=await t.getIdToken(),i=await El(t,Xf(e,{idToken:n}));Ie(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(b=a.providerUserInfo)!=null&&b.length?b1(a.providerUserInfo):[],c=_O(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new qg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function yO(t){const e=zt(t);await Zf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _O(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function b1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e){const n=await E1(t,{},async()=>{const i=Oc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await w1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Ol(t.emulatorConfig.host)&&(p.credentials="include"),v1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EO(t,e){return is(t,"POST","/v2/accounts:revokeToken",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ww(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=ww(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await vO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new hl;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Ie(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hl,this.toJSON())}_performRefresh(){return Hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new gO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new qg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pO(this,e)}reload(){return yO(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Zf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Ki(this.auth));const e=await this.getIdToken();return await El(this,dO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:b,emailVerified:T,isAnonymous:C,providerData:V,stsTokenManager:z}=n;Ie(b&&z,e,"internal-error");const O=hl.fromJSON(this.name,z);Ie(typeof b=="string",e,"internal-error"),Vs(i,e.name),Vs(a,e.name),Ie(typeof T=="boolean",e,"internal-error"),Ie(typeof C=="boolean",e,"internal-error"),Vs(l,e.name),Vs(c,e.name),Vs(d,e.name),Vs(p,e.name),Vs(g,e.name),Vs(v,e.name);const N=new Sr({uid:b,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:C,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:O,createdAt:g,lastLoginAt:v});return V&&Array.isArray(V)&&(N.providerData=V.map(L=>({...L}))),p&&(N._redirectEventId=p),N}static async _fromIdTokenResponse(e,n,i=!1){const a=new hl;a.updateFromServerResponse(n);const l=new Sr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Zf(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];Ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?b1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new hl;d.updateFromIdToken(i);const p=new Sr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new qg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Map;function Gi(t){es(t instanceof Function,"Expected a class definition");let e=bw.get(t);return e?(es(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bw.set(t,e),e)}/**
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
 */class T1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T1.type="NONE";const Tw=T1;/**
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
 */function Nf(t,e,n){return`firebase:${t}:${e}:${n}`}class fl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Nf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Nf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xf(this.auth,{idToken:e}).catch(()=>{});return n?Sr._fromGetAccountInfoResponse(this.auth,n,e):null}return Sr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new fl(Gi(Tw),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Gi(Tw);const c=Nf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let b;if(typeof v=="string"){const T=await Xf(e,{idToken:v}).catch(()=>{});if(!T)break;b=await Sr._fromGetAccountInfoResponse(e,T,v)}else b=Sr._fromJSON(e,v);g!==l&&(d=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new fl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new fl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I1(e))return"Blackberry";if(D1(e))return"Webos";if(x1(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(C1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function S1(t=In()){return/firefox\//i.test(t)}function x1(t=In()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=In()){return/crios\//i.test(t)}function R1(t=In()){return/iemobile/i.test(t)}function C1(t=In()){return/android/i.test(t)}function I1(t=In()){return/blackberry/i.test(t)}function D1(t=In()){return/webos/i.test(t)}function Cy(t=In()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wO(t=In()){var e;return Cy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function bO(){return VD()&&document.documentMode===10}function k1(t=In()){return Cy(t)||C1(t)||D1(t)||I1(t)||/windows phone/i.test(t)||R1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e=[]){let n;switch(t){case"Browser":n=Sw(In());break;case"Worker":n=`${Sw(In())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ml}/${i}`}/**
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
 */class TO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function SO(t,e={}){return is(t,"GET","/v2/passwordPolicy",aa(t,e))}/**
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
 */const xO=6;class AO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xw(this),this.idTokenSubscription=new xw(this),this.beforeStateQueue=new TO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await fl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xf(this,{idToken:e}),i=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(mr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Ki(this));const n=e?zt(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SO(this),n=new AO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await EO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gi(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await fl.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&nO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oo(t){return zt(t)}class xw{constructor(e){this.auth=e,this.observer=null,this.addObserver=$D(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CO(t){bd=t}function M1(t){return bd.loadJS(t)}function IO(){return bd.recaptchaEnterpriseScript}function DO(){return bd.gapiScript}function kO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class OO{constructor(){this.enterprise=new MO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class MO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NO="recaptcha-enterprise",N1="NO_RECAPTCHA";class PO{constructor(e){this.type=NO,this.auth=oo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{fO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new hO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Ew(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(N1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Ew(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=IO();p.length!==0&&(p+=d),M1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Aw(t,e,n,i=!1,a=!1){const l=new PO(t);let c;if(a)c=N1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Bg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Aw(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Aw(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e){const n=Sy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(eo(l,e??{}))return a;Dr(a,"already-initialized")}return n.initialize({options:e})}function LO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jO(t,e,n){const i=oo(t);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=P1(e),{host:c,port:d}=UO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(eo(g,i.config.emulator)&&eo(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Ol(c)?(l1(`${l}//${c}${p}`),u1("Auth",!0)):qO()}function P1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UO(t){const e=P1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Rw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Rw(c)}}}function Rw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hi("not implemented")}_getIdTokenResponse(e){return Hi("not implemented")}_linkToIdToken(e,n){return Hi("not implemented")}_getReauthenticationResolver(e){return Hi("not implemented")}}async function BO(t,e){return is(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(t,e){return Nc(t,"POST","/v1/accounts:signInWithPassword",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return Nc(t,"POST","/v1/accounts:signInWithEmailLink",aa(t,e))}async function $O(t,e){return Nc(t,"POST","/v1/accounts:signInWithEmailLink",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends Iy{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new yc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new yc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bg(e,n,"signInWithPassword",zO);case"emailLink":return FO(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bg(e,i,"signUpPassword",BO);case"emailLink":return $O(e,{idToken:n,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e){return Nc(t,"POST","/v1/accounts:signInWithIdp",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO="http://localhost";class no extends Iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new no(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new no(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return dl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,dl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dl(e,n)}buildRequest(){const e={requestUri:HO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YO(t){const e=Zu(Ju(t)).link,n=e?Zu(Ju(e)).deep_link_id:null,i=Zu(Ju(t)).deep_link_id;return(i?Zu(Ju(i)).link:null)||i||n||e||t}class Dy{constructor(e){const n=Zu(Ju(e)),i=n.apiKey??null,a=n.oobCode??null,l=GO(n.mode??null);Ie(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=YO(e);try{return new Dy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.providerId=Nl.PROVIDER_ID}static credential(e,n){return yc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Dy.parseLink(n);return Ie(i,"argument-error"),yc._fromEmailAndCode(e,i.code,i.tenantId)}}Nl.PROVIDER_ID="password";Nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pc extends V1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Pc{constructor(){super("facebook.com")}static credential(e){return no._fromParams({providerId:Us.PROVIDER_ID,signInMethod:Us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Us.credentialFromTaggedObject(e)}static credentialFromError(e){return Us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Us.credential(e.oauthAccessToken)}catch{return null}}}Us.FACEBOOK_SIGN_IN_METHOD="facebook.com";Us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return no._fromParams({providerId:qs.PROVIDER_ID,signInMethod:qs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qs.credentialFromTaggedObject(e)}static credentialFromError(e){return qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qs.credential(n,i)}catch{return null}}}qs.GOOGLE_SIGN_IN_METHOD="google.com";qs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Pc{constructor(){super("github.com")}static credential(e){return no._fromParams({providerId:Bs.PROVIDER_ID,signInMethod:Bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bs.credentialFromTaggedObject(e)}static credentialFromError(e){return Bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bs.credential(e.oauthAccessToken)}catch{return null}}}Bs.GITHUB_SIGN_IN_METHOD="github.com";Bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Pc{constructor(){super("twitter.com")}static credential(e,n){return no._fromParams({providerId:zs.PROVIDER_ID,signInMethod:zs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zs.credentialFromTaggedObject(e)}static credentialFromError(e){return zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return zs.credential(n,i)}catch{return null}}}zs.TWITTER_SIGN_IN_METHOD="twitter.com";zs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e){return Nc(t,"POST","/v1/accounts:signUp",aa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Sr._fromIdTokenResponse(e,i,a),c=Cw(i);return new ro({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=Cw(i);return new ro({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function Cw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends rs{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Jf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new Jf(e,n,i,a)}}function L1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Jf._fromErrorAndOperation(t,l,e,i):l})}async function QO(t,e,n=!1){const i=await El(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ro._forOperation(t,"link",i)}/**
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
 */async function KO(t,e,n=!1){const{auth:i}=t;if(mr(i.app))return Promise.reject(Ki(i));const a="reauthenticate";try{const l=await El(t,L1(i,a,e,t),n);Ie(l.idToken,i,"internal-error");const c=Ry(l.idToken);Ie(c,i,"internal-error");const{sub:d}=c;return Ie(t.uid===d,i,"user-mismatch"),ro._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Dr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e,n=!1){if(mr(t.app))return Promise.reject(Ki(t));const i="signIn",a=await L1(t,i,e),l=await ro._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function XO(t,e){return j1(oo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t){const e=oo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZO(t,e,n){if(mr(t.app))return Promise.reject(Ki(t));const i=oo(t),c=await Bg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&U1(t),p}),d=await ro._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function JO(t,e,n){return mr(t.app)?Promise.reject(Ki(t)):XO(zt(t),Nl.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&U1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(t,e){return is(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=zt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await El(i,eM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function nM(t,e,n,i){return zt(t).onIdTokenChanged(e,n,i)}function rM(t,e,n){return zt(t).beforeAuthStateChanged(e,n)}function Td(t,e,n,i){return zt(t).onAuthStateChanged(e,n,i)}function iM(t){return zt(t).signOut()}const ed="__sak";/**
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
 */class q1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ed,"1"),this.storage.removeItem(ed),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=1e3,aM=10;class B1 extends q1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);bO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,aM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},sM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}B1.type="LOCAL";const oM=B1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1 extends q1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}z1.type="SESSION";const F1=z1;/**
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
 */function lM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Sd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await lM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=ky("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(b){const T=b;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return window}function cM(t){ri().location.href=t}/**
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
 */function $1(){return typeof ri().WorkerGlobalScope<"u"&&typeof ri().importScripts=="function"}async function hM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dM(){return $1()?self:null}/**
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
 */const H1="firebaseLocalStorageDb",pM=1,td="firebaseLocalStorage",G1="fbase_key";class Vc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xd(t,e){return t.transaction([td],e?"readwrite":"readonly").objectStore(td)}function mM(){const t=indexedDB.deleteDatabase(H1);return new Vc(t).toPromise()}function zg(){const t=indexedDB.open(H1,pM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(td,{keyPath:G1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(td)?e(i):(i.close(),await mM(),e(await zg()))})})}async function Iw(t,e,n){const i=xd(t,!0).put({[G1]:e,value:n});return new Vc(i).toPromise()}async function gM(t,e){const n=xd(t,!1).get(e),i=await new Vc(n).toPromise();return i===void 0?null:i.value}function Dw(t,e){const n=xd(t,!0).delete(e);return new Vc(n).toPromise()}const yM=800,_M=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>_M)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(dM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await hM(),!this.activeServiceWorker)return;this.sender=new uM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zg();return await Iw(e,ed,"1"),await Dw(e,ed),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Iw(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>gM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=xd(a,!1).getAll();return new Vc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const vM=Y1;new Mc(3e4,6e4);/**
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
 */function EM(t,e){return e?Gi(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Oy extends Iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wM(t){return j1(t.auth,new Oy(t),t.bypassAuthState)}function bM(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),KO(n,new Oy(t),t.bypassAuthState)}async function TM(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),QO(n,new Oy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wM;case"linkViaPopup":case"linkViaRedirect":return TM;case"reauthViaPopup":case"reauthViaRedirect":return bM;default:Dr(this.auth,"internal-error")}}resolve(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=new Mc(2e3,1e4);class cl extends W1{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,cl.currentPopupAction&&cl.currentPopupAction.cancel(),cl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){es(this.filter.length===1,"Popup operations only handle one event");const e=ky();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SM.get())};e()}}cl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM="pendingRedirect",Pf=new Map;class AM extends W1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Pf.get(this.auth._key());if(!e){try{const i=await RM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Pf.set(this.auth._key(),e)}return this.bypassAuthState||Pf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RM(t,e){const n=DM(e),i=IM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function CM(t,e){Pf.set(t._key(),e)}function IM(t){return Gi(t._redirectPersistence)}function DM(t){return Nf(xM,t.config.apiKey,t.name)}async function kM(t,e,n=!1){if(mr(t.app))return Promise.reject(Ki(t));const i=oo(t),a=EM(i,e),c=await new AM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=600*1e3;class MM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Q1(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(ni(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OM&&this.cachedEventUids.clear(),this.cachedEventUids.has(kw(e))}saveEventToCache(e){this.cachedEventUids.add(kw(e)),this.lastProcessedEventTime=Date.now()}}function kw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Q1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LM=/^https?/;async function jM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PM(t);for(const n of e)try{if(UM(n))return}catch{}Dr(t,"unauthorized-domain")}function UM(t){const e=Ug(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!LM.test(n))return!1;if(VM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const qM=new Mc(3e4,6e4);function Ow(){const t=ri().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BM(t){return new Promise((e,n)=>{var a,l,c;function i(){Ow(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ow(),n(ni(t,"network-request-failed"))},timeout:qM.get()})}if((l=(a=ri().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=ri().gapi)!=null&&c.load)i();else{const d=kO("iframefcb");return ri()[d]=()=>{gapi.load?i():n(ni(t,"network-request-failed"))},M1(`${DO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw Vf=null,e})}let Vf=null;function zM(t){return Vf=Vf||BM(t),Vf}/**
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
 */const FM=new Mc(5e3,15e3),$M="__/auth/iframe",HM="emulator/auth/iframe",GM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WM(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ay(e,HM):`https://${t.config.authDomain}/${$M}`,i={apiKey:e.apiKey,appName:t.name,v:Ml},a=YM.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Oc(i).slice(1)}`}async function QM(t){const e=await zM(t),n=ri().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:WM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GM,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=ni(t,"network-request-failed"),d=ri().setTimeout(()=>{l(c)},FM.get());function p(){ri().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const KM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XM=500,ZM=600,JM="_blank",eN="http://localhost";class Mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tN(t,e,n,i=XM,a=ZM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...KM,width:i.toString(),height:a.toString(),top:l,left:c},g=In().toLowerCase();n&&(d=A1(g)?JM:n),S1(g)&&(e=e||eN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[C,V])=>`${T}${C}=${V},`,"");if(wO(g)&&d!=="_self")return nN(e||"",d),new Mw(null);const b=window.open(e||"",d,v);Ie(b,t,"popup-blocked");try{b.focus()}catch{}return new Mw(b)}function nN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const rN="__/auth/handler",iN="emulator/auth/handler",sN=encodeURIComponent("fac");async function Nw(t,e,n,i,a,l){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ml,eventId:a};if(e instanceof V1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",FD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries({}))c[v]=b}if(e instanceof Pc){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${sN}=${encodeURIComponent(p)}`:"";return`${aN(t)}?${Oc(d).slice(1)}${g}`}function aN({config:t}){return t.emulator?Ay(t,iN):`https://${t.authDomain}/${rN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="webStorageSupport";class oN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F1,this._completeRedirectFn=kM,this._overrideRedirectResult=CM}async _openPopup(e,n,i,a){var c;es((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Nw(e,n,i,Ug(),a);return tN(e,l,ky())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await Nw(e,n,i,Ug(),a);return cM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(es(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await QM(e),i=new MM(e);return n.register("authEvent",a=>(Ie(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cg,{type:cg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[cg];l!==void 0&&n(!!l),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k1()||x1()||Cy()}}const lN=oN;var Pw="@firebase/auth",Vw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hN(t){vl(new to("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O1(t)},g=new RO(i,a,l,p);return LO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),vl(new to("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(i=>new uN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ys(Pw,Vw,cN(t)),Ys(Pw,Vw,"esm2020")}/**
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
 */const fN=300,dN=o1("authIdTokenMaxAge")||fN;let Lw=null;const pN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>dN)return;const a=n==null?void 0:n.token;Lw!==a&&(Lw=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function mN(t=d1()){const e=Sy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VO(t,{popupRedirectResolver:lN,persistence:[vM,oM,F1]}),i=o1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=pN(l.toString());rM(n,c,()=>c(n.currentUser)),nM(n,d=>c(d))}}const a=s1("auth");return a&&jO(n,`http://${a}`),n}function gN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}CO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=ni("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",gN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hN("Browser");var yN="firebase",_N="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ys(yN,_N,"app");var jw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,K1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function D(){}D.prototype=A.prototype,R.D=A.prototype,R.prototype=new D,R.prototype.constructor=R,R.C=function(k,j,q){for(var M=Array(arguments.length-2),he=2;he<arguments.length;he++)M[he-2]=arguments[he];return A.prototype[j].apply(k,M)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,A,D){D||(D=0);var k=Array(16);if(typeof A=="string")for(var j=0;16>j;++j)k[j]=A.charCodeAt(D++)|A.charCodeAt(D++)<<8|A.charCodeAt(D++)<<16|A.charCodeAt(D++)<<24;else for(j=0;16>j;++j)k[j]=A[D++]|A[D++]<<8|A[D++]<<16|A[D++]<<24;A=R.g[0],D=R.g[1],j=R.g[2];var q=R.g[3],M=A+(q^D&(j^q))+k[0]+3614090360&4294967295;A=D+(M<<7&4294967295|M>>>25),M=q+(j^A&(D^j))+k[1]+3905402710&4294967295,q=A+(M<<12&4294967295|M>>>20),M=j+(D^q&(A^D))+k[2]+606105819&4294967295,j=q+(M<<17&4294967295|M>>>15),M=D+(A^j&(q^A))+k[3]+3250441966&4294967295,D=j+(M<<22&4294967295|M>>>10),M=A+(q^D&(j^q))+k[4]+4118548399&4294967295,A=D+(M<<7&4294967295|M>>>25),M=q+(j^A&(D^j))+k[5]+1200080426&4294967295,q=A+(M<<12&4294967295|M>>>20),M=j+(D^q&(A^D))+k[6]+2821735955&4294967295,j=q+(M<<17&4294967295|M>>>15),M=D+(A^j&(q^A))+k[7]+4249261313&4294967295,D=j+(M<<22&4294967295|M>>>10),M=A+(q^D&(j^q))+k[8]+1770035416&4294967295,A=D+(M<<7&4294967295|M>>>25),M=q+(j^A&(D^j))+k[9]+2336552879&4294967295,q=A+(M<<12&4294967295|M>>>20),M=j+(D^q&(A^D))+k[10]+4294925233&4294967295,j=q+(M<<17&4294967295|M>>>15),M=D+(A^j&(q^A))+k[11]+2304563134&4294967295,D=j+(M<<22&4294967295|M>>>10),M=A+(q^D&(j^q))+k[12]+1804603682&4294967295,A=D+(M<<7&4294967295|M>>>25),M=q+(j^A&(D^j))+k[13]+4254626195&4294967295,q=A+(M<<12&4294967295|M>>>20),M=j+(D^q&(A^D))+k[14]+2792965006&4294967295,j=q+(M<<17&4294967295|M>>>15),M=D+(A^j&(q^A))+k[15]+1236535329&4294967295,D=j+(M<<22&4294967295|M>>>10),M=A+(j^q&(D^j))+k[1]+4129170786&4294967295,A=D+(M<<5&4294967295|M>>>27),M=q+(D^j&(A^D))+k[6]+3225465664&4294967295,q=A+(M<<9&4294967295|M>>>23),M=j+(A^D&(q^A))+k[11]+643717713&4294967295,j=q+(M<<14&4294967295|M>>>18),M=D+(q^A&(j^q))+k[0]+3921069994&4294967295,D=j+(M<<20&4294967295|M>>>12),M=A+(j^q&(D^j))+k[5]+3593408605&4294967295,A=D+(M<<5&4294967295|M>>>27),M=q+(D^j&(A^D))+k[10]+38016083&4294967295,q=A+(M<<9&4294967295|M>>>23),M=j+(A^D&(q^A))+k[15]+3634488961&4294967295,j=q+(M<<14&4294967295|M>>>18),M=D+(q^A&(j^q))+k[4]+3889429448&4294967295,D=j+(M<<20&4294967295|M>>>12),M=A+(j^q&(D^j))+k[9]+568446438&4294967295,A=D+(M<<5&4294967295|M>>>27),M=q+(D^j&(A^D))+k[14]+3275163606&4294967295,q=A+(M<<9&4294967295|M>>>23),M=j+(A^D&(q^A))+k[3]+4107603335&4294967295,j=q+(M<<14&4294967295|M>>>18),M=D+(q^A&(j^q))+k[8]+1163531501&4294967295,D=j+(M<<20&4294967295|M>>>12),M=A+(j^q&(D^j))+k[13]+2850285829&4294967295,A=D+(M<<5&4294967295|M>>>27),M=q+(D^j&(A^D))+k[2]+4243563512&4294967295,q=A+(M<<9&4294967295|M>>>23),M=j+(A^D&(q^A))+k[7]+1735328473&4294967295,j=q+(M<<14&4294967295|M>>>18),M=D+(q^A&(j^q))+k[12]+2368359562&4294967295,D=j+(M<<20&4294967295|M>>>12),M=A+(D^j^q)+k[5]+4294588738&4294967295,A=D+(M<<4&4294967295|M>>>28),M=q+(A^D^j)+k[8]+2272392833&4294967295,q=A+(M<<11&4294967295|M>>>21),M=j+(q^A^D)+k[11]+1839030562&4294967295,j=q+(M<<16&4294967295|M>>>16),M=D+(j^q^A)+k[14]+4259657740&4294967295,D=j+(M<<23&4294967295|M>>>9),M=A+(D^j^q)+k[1]+2763975236&4294967295,A=D+(M<<4&4294967295|M>>>28),M=q+(A^D^j)+k[4]+1272893353&4294967295,q=A+(M<<11&4294967295|M>>>21),M=j+(q^A^D)+k[7]+4139469664&4294967295,j=q+(M<<16&4294967295|M>>>16),M=D+(j^q^A)+k[10]+3200236656&4294967295,D=j+(M<<23&4294967295|M>>>9),M=A+(D^j^q)+k[13]+681279174&4294967295,A=D+(M<<4&4294967295|M>>>28),M=q+(A^D^j)+k[0]+3936430074&4294967295,q=A+(M<<11&4294967295|M>>>21),M=j+(q^A^D)+k[3]+3572445317&4294967295,j=q+(M<<16&4294967295|M>>>16),M=D+(j^q^A)+k[6]+76029189&4294967295,D=j+(M<<23&4294967295|M>>>9),M=A+(D^j^q)+k[9]+3654602809&4294967295,A=D+(M<<4&4294967295|M>>>28),M=q+(A^D^j)+k[12]+3873151461&4294967295,q=A+(M<<11&4294967295|M>>>21),M=j+(q^A^D)+k[15]+530742520&4294967295,j=q+(M<<16&4294967295|M>>>16),M=D+(j^q^A)+k[2]+3299628645&4294967295,D=j+(M<<23&4294967295|M>>>9),M=A+(j^(D|~q))+k[0]+4096336452&4294967295,A=D+(M<<6&4294967295|M>>>26),M=q+(D^(A|~j))+k[7]+1126891415&4294967295,q=A+(M<<10&4294967295|M>>>22),M=j+(A^(q|~D))+k[14]+2878612391&4294967295,j=q+(M<<15&4294967295|M>>>17),M=D+(q^(j|~A))+k[5]+4237533241&4294967295,D=j+(M<<21&4294967295|M>>>11),M=A+(j^(D|~q))+k[12]+1700485571&4294967295,A=D+(M<<6&4294967295|M>>>26),M=q+(D^(A|~j))+k[3]+2399980690&4294967295,q=A+(M<<10&4294967295|M>>>22),M=j+(A^(q|~D))+k[10]+4293915773&4294967295,j=q+(M<<15&4294967295|M>>>17),M=D+(q^(j|~A))+k[1]+2240044497&4294967295,D=j+(M<<21&4294967295|M>>>11),M=A+(j^(D|~q))+k[8]+1873313359&4294967295,A=D+(M<<6&4294967295|M>>>26),M=q+(D^(A|~j))+k[15]+4264355552&4294967295,q=A+(M<<10&4294967295|M>>>22),M=j+(A^(q|~D))+k[6]+2734768916&4294967295,j=q+(M<<15&4294967295|M>>>17),M=D+(q^(j|~A))+k[13]+1309151649&4294967295,D=j+(M<<21&4294967295|M>>>11),M=A+(j^(D|~q))+k[4]+4149444226&4294967295,A=D+(M<<6&4294967295|M>>>26),M=q+(D^(A|~j))+k[11]+3174756917&4294967295,q=A+(M<<10&4294967295|M>>>22),M=j+(A^(q|~D))+k[2]+718787259&4294967295,j=q+(M<<15&4294967295|M>>>17),M=D+(q^(j|~A))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(j+(M<<21&4294967295|M>>>11))&4294967295,R.g[2]=R.g[2]+j&4294967295,R.g[3]=R.g[3]+q&4294967295}i.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var D=A-this.blockSize,k=this.B,j=this.h,q=0;q<A;){if(j==0)for(;q<=D;)a(this,R,q),q+=this.blockSize;if(typeof R=="string"){for(;q<A;)if(k[j++]=R.charCodeAt(q++),j==this.blockSize){a(this,k),j=0;break}}else for(;q<A;)if(k[j++]=R[q++],j==this.blockSize){a(this,k),j=0;break}}this.h=j,this.o+=A},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var D=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=D&255,D/=256;for(this.u(R),R=Array(16),A=D=0;4>A;++A)for(var k=0;32>k;k+=8)R[D++]=this.g[A]>>>k&255;return R};function l(R,A){var D=d;return Object.prototype.hasOwnProperty.call(D,R)?D[R]:D[R]=A(R)}function c(R,A){this.h=A;for(var D=[],k=!0,j=R.length-1;0<=j;j--){var q=R[j]|0;k&&q==A||(D[j]=q,k=!1)}this.g=D}var d={};function p(R){return-128<=R&&128>R?l(R,function(A){return new c([A|0],0>A?-1:0)}):new c([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return b;if(0>R)return O(g(-R));for(var A=[],D=1,k=0;R>=D;k++)A[k]=R/D|0,D*=4294967296;return new c(A,0)}function v(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return O(v(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var D=g(Math.pow(A,8)),k=b,j=0;j<R.length;j+=8){var q=Math.min(8,R.length-j),M=parseInt(R.substring(j,j+q),A);8>q?(q=g(Math.pow(A,q)),k=k.j(q).add(g(M))):(k=k.j(D),k=k.add(g(M)))}return k}var b=p(0),T=p(1),C=p(16777216);t=c.prototype,t.m=function(){if(z(this))return-O(this).m();for(var R=0,A=1,D=0;D<this.g.length;D++){var k=this.i(D);R+=(0<=k?k:4294967296+k)*A,A*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(V(this))return"0";if(z(this))return"-"+O(this).toString(R);for(var A=g(Math.pow(R,6)),D=this,k="";;){var j=te(D,A).g;D=N(D,j.j(A));var q=((0<D.g.length?D.g[0]:D.h)>>>0).toString(R);if(D=j,V(D))return q+k;for(;6>q.length;)q="0"+q;k=q+k}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function V(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function z(R){return R.h==-1}t.l=function(R){return R=N(this,R),z(R)?-1:V(R)?0:1};function O(R){for(var A=R.g.length,D=[],k=0;k<A;k++)D[k]=~R.g[k];return new c(D,~R.h).add(T)}t.abs=function(){return z(this)?O(this):this},t.add=function(R){for(var A=Math.max(this.g.length,R.g.length),D=[],k=0,j=0;j<=A;j++){var q=k+(this.i(j)&65535)+(R.i(j)&65535),M=(q>>>16)+(this.i(j)>>>16)+(R.i(j)>>>16);k=M>>>16,q&=65535,M&=65535,D[j]=M<<16|q}return new c(D,D[D.length-1]&-2147483648?-1:0)};function N(R,A){return R.add(O(A))}t.j=function(R){if(V(this)||V(R))return b;if(z(this))return z(R)?O(this).j(O(R)):O(O(this).j(R));if(z(R))return O(this.j(O(R)));if(0>this.l(C)&&0>R.l(C))return g(this.m()*R.m());for(var A=this.g.length+R.g.length,D=[],k=0;k<2*A;k++)D[k]=0;for(k=0;k<this.g.length;k++)for(var j=0;j<R.g.length;j++){var q=this.i(k)>>>16,M=this.i(k)&65535,he=R.i(j)>>>16,ge=R.i(j)&65535;D[2*k+2*j]+=M*ge,L(D,2*k+2*j),D[2*k+2*j+1]+=q*ge,L(D,2*k+2*j+1),D[2*k+2*j+1]+=M*he,L(D,2*k+2*j+1),D[2*k+2*j+2]+=q*he,L(D,2*k+2*j+2)}for(k=0;k<A;k++)D[k]=D[2*k+1]<<16|D[2*k];for(k=A;k<2*A;k++)D[k]=0;return new c(D,0)};function L(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function U(R,A){this.g=R,this.h=A}function te(R,A){if(V(A))throw Error("division by zero");if(V(R))return new U(b,b);if(z(R))return A=te(O(R),A),new U(O(A.g),O(A.h));if(z(A))return A=te(R,O(A)),new U(O(A.g),A.h);if(30<R.g.length){if(z(R)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var D=T,k=A;0>=k.l(R);)D=$(D),k=$(k);var j=ne(D,1),q=ne(k,1);for(k=ne(k,2),D=ne(D,2);!V(k);){var M=q.add(k);0>=M.l(R)&&(j=j.add(D),q=M),k=ne(k,1),D=ne(D,1)}return A=N(R,j.j(A)),new U(j,A)}for(j=b;0<=R.l(A);){for(D=Math.max(1,Math.floor(R.m()/A.m())),k=Math.ceil(Math.log(D)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),q=g(D),M=q.j(A);z(M)||0<M.l(R);)D-=k,q=g(D),M=q.j(A);V(q)&&(q=T),j=j.add(q),R=N(R,M)}return new U(j,R)}t.A=function(R){return te(this,R).h},t.and=function(R){for(var A=Math.max(this.g.length,R.g.length),D=[],k=0;k<A;k++)D[k]=this.i(k)&R.i(k);return new c(D,this.h&R.h)},t.or=function(R){for(var A=Math.max(this.g.length,R.g.length),D=[],k=0;k<A;k++)D[k]=this.i(k)|R.i(k);return new c(D,this.h|R.h)},t.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),D=[],k=0;k<A;k++)D[k]=this.i(k)^R.i(k);return new c(D,this.h^R.h)};function $(R){for(var A=R.g.length+1,D=[],k=0;k<A;k++)D[k]=R.i(k)<<1|R.i(k-1)>>>31;return new c(D,R.h)}function ne(R,A){var D=A>>5;A%=32;for(var k=R.g.length-D,j=[],q=0;q<k;q++)j[q]=0<A?R.i(q+D)>>>A|R.i(q+D+1)<<32-A:R.i(q+D);return new c(j,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,K1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ws=c}).apply(typeof jw<"u"?jw:typeof self<"u"?self:typeof window<"u"?window:{});var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X1,ec,Z1,Lf,Fg,J1,eS,tS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof yf=="object"&&yf];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var x=0;x<h.length-1;x++){var Y=h[x];if(!(Y in E))break e;E=E[Y]}h=h[h.length-1],x=E[h],y=y(x),y!=x&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,x=!1,Y={next:function(){if(!x&&E<h.length){var J=E++;return{value:y(J,h[J]),done:!1}}return x=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function b(h,y,E){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var Y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Y,x),h.apply(y,Y)}}return function(){return h.apply(y,arguments)}}function T(h,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,T.apply(null,arguments)}function C(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var x=E.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function V(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(x,Y,J){for(var pe=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)pe[Ge-2]=arguments[Ge];return y.prototype[Y].apply(x,pe)}}function z(h){const y=h.length;if(0<y){const E=Array(y);for(let x=0;x<y;x++)E[x]=h[x];return E}return[]}function O(h,y){for(let E=1;E<arguments.length;E++){const x=arguments[E];if(p(x)){const Y=h.length||0,J=x.length||0;h.length=Y+J;for(let pe=0;pe<J;pe++)h[Y+pe]=x[pe]}else h.push(x)}}class N{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function L(h){return/^[\s\xa0]*$/.test(h)}function U(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function te(h){return te[" "](h),h}te[" "]=function(){};var $=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function ne(h,y,E){for(const x in h)y.call(E,h[x],x,h)}function R(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function A(h){const y={};for(const E in h)y[E]=h[E];return y}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,y){let E,x;for(let Y=1;Y<arguments.length;Y++){x=arguments[Y];for(E in x)h[E]=x[E];for(let J=0;J<D.length;J++)E=D[J],Object.prototype.hasOwnProperty.call(x,E)&&(h[E]=x[E])}}function j(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function q(h){d.setTimeout(()=>{throw h},0)}function M(){var h=ve;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class he{constructor(){this.h=this.g=null}add(y,E){const x=ge.get();x.set(y,E),this.h?this.h.next=x:this.g=x,this.h=x}}var ge=new N(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let le,fe=!1,ve=new he,I=()=>{const h=d.Promise.resolve(void 0);le=()=>{h.then(ee)}};var ee=()=>{for(var h;h=M();){try{h.h.call(h.g)}catch(E){q(E)}var y=ge;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}fe=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function xe(h,y){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if($){e:{try{te(y.nodeName);var Y=!0;break e}catch{}Y=!1}Y||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}V(xe,ie);var we={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),He=0;function bt(h,y,E,x,Y){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!x,this.ha=Y,this.key=++He,this.da=this.fa=!1}function Pn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function vn(h){this.src=h,this.g={},this.h=0}vn.prototype.add=function(h,y,E,x,Y){var J=h.toString();h=this.g[J],h||(h=this.g[J]=[],this.h++);var pe=fi(h,y,x,Y);return-1<pe?(y=h[pe],E||(y.fa=!1)):(y=new bt(y,this.src,J,!!x,Y),y.fa=E,h.push(y)),y};function Kt(h,y){var E=y.type;if(E in h.g){var x=h.g[E],Y=Array.prototype.indexOf.call(x,y,void 0),J;(J=0<=Y)&&Array.prototype.splice.call(x,Y,1),J&&(Pn(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function fi(h,y,E,x){for(var Y=0;Y<h.length;++Y){var J=h[Y];if(!J.da&&J.listener==y&&J.capture==!!E&&J.ha==x)return Y}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),ca={};function co(h,y,E,x,Y){if(Array.isArray(y)){for(var J=0;J<y.length;J++)co(h,y[J],E,x,Y);return null}return E=fo(E),h&&h[ft]?h.K(y,E,g(x)?!!x.capture:!1,Y):Vn(h,y,E,!1,x,Y)}function Vn(h,y,E,x,Y,J){if(!y)throw Error("Invalid event type");var pe=g(Y)?!!Y.capture:!!Y,Ge=Nr(h);if(Ge||(h[Mr]=Ge=new vn(h)),E=Ge.add(y,E,x,pe,J),E.proxy)return E;if(x=Bl(),E.proxy=x,x.src=h,x.listener=E,h.addEventListener)de||(Y=pe),Y===void 0&&(Y=!1),h.addEventListener(y.toString(),x,Y);else if(h.attachEvent)h.attachEvent(di(y.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Bl(){function h(E){return y.call(h.src,h.listener,E)}const y=ho;return h}function ha(h,y,E,x,Y){if(Array.isArray(y))for(var J=0;J<y.length;J++)ha(h,y[J],E,x,Y);else x=g(x)?!!x.capture:!!x,E=fo(E),h&&h[ft]?(h=h.i,y=String(y).toString(),y in h.g&&(J=h.g[y],E=fi(J,E,x,Y),-1<E&&(Pn(J[E]),Array.prototype.splice.call(J,E,1),J.length==0&&(delete h.g[y],h.h--)))):h&&(h=Nr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=fi(y,E,x,Y)),(E=-1<h?y[h]:null)&&as(E))}function as(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[ft])Kt(y.i,h);else{var E=h.type,x=h.proxy;y.removeEventListener?y.removeEventListener(E,x,h.capture):y.detachEvent?y.detachEvent(di(E),x):y.addListener&&y.removeListener&&y.removeListener(x),(E=Nr(y))?(Kt(E,h),E.h==0&&(E.src=null,y[Mr]=null)):Pn(h)}}}function di(h){return h in ca?ca[h]:ca[h]="on"+h}function ho(h,y){if(h.da)h=!0;else{y=new xe(y,this);var E=h.listener,x=h.ha||h.src;h.fa&&as(h),h=E.call(x,y)}return h}function Nr(h){return h=h[Mr],h instanceof vn?h:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function fo(h){return typeof h=="function"?h:(h[pi]||(h[pi]=function(y){return h.handleEvent(y)}),h[pi])}function _t(){se.call(this),this.i=new vn(this),this.M=this,this.F=null}V(_t,se),_t.prototype[ft]=!0,_t.prototype.removeEventListener=function(h,y,E,x){ha(this,h,y,E,x)};function Ze(h,y){var E,x=h.F;if(x)for(E=[];x;x=x.F)E.push(x);if(h=h.M,x=y.type||y,typeof y=="string")y=new ie(y,h);else if(y instanceof ie)y.target=y.target||h;else{var Y=y;y=new ie(x,h),k(y,Y)}if(Y=!0,E)for(var J=E.length-1;0<=J;J--){var pe=y.g=E[J];Y=Dn(pe,x,!0,y)&&Y}if(pe=y.g=h,Y=Dn(pe,x,!0,y)&&Y,Y=Dn(pe,x,!1,y)&&Y,E)for(J=0;J<E.length;J++)pe=y.g=E[J],Y=Dn(pe,x,!1,y)&&Y}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],x=0;x<E.length;x++)Pn(E[x]);delete h.g[y],h.h--}}this.F=null},_t.prototype.K=function(h,y,E,x){return this.i.add(String(h),y,!1,E,x)},_t.prototype.L=function(h,y,E,x){return this.i.add(String(h),y,!0,E,x)};function Dn(h,y,E,x){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var Y=!0,J=0;J<y.length;++J){var pe=y[J];if(pe&&!pe.da&&pe.capture==E){var Ge=pe.listener,$t=pe.ha||pe.src;pe.fa&&Kt(h.i,pe),Y=Ge.call($t,x)!==!1&&Y}}return Y&&!x.defaultPrevented}function Xt(h,y,E){if(typeof h=="function")E&&(h=T(h,E));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function po(h){h.g=Xt(()=>{h.g=null,h.i&&(h.i=!1,po(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class zl extends se{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(h){se.call(this),this.h=h,this.g={}}V(mi,se);var gi=[];function yi(h){ne(h.g,function(y,E){this.g.hasOwnProperty(E)&&as(y)},h),h.g={}}mi.prototype.N=function(){mi.aa.N.call(this),yi(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=d.JSON.stringify,_i=d.JSON.parse,vi=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function os(){}os.prototype.h=null;function Ne(h){return h.h||(h.h=h.i())}function et(){}var Ce={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ke(){ie.call(this,"d")}V(Ke,ie);function Zt(){ie.call(this,"c")}V(Zt,ie);var Pe={},fa=null;function Pr(){return fa=fa||new _t}Pe.La="serverreachability";function ls(h){ie.call(this,Pe.La,h)}V(ls,ie);function tr(h){const y=Pr();Ze(y,new ls(y))}Pe.STAT_EVENT="statevent";function us(h,y){ie.call(this,Pe.STAT_EVENT,h),this.stat=y}V(us,ie);function vt(h){const y=Pr();Ze(y,new us(y,h))}Pe.Ma="timingevent";function Ft(h,y){ie.call(this,Pe.Ma,h),this.size=y}V(Ft,ie);function Mt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function Fl(h,y,E,x,Y,J){h.info(function(){if(h.g)if(J)for(var pe="",Ge=J.split("&"),$t=0;$t<Ge.length;$t++){var Ye=Ge[$t].split("=");if(1<Ye.length){var en=Ye[0];Ye=Ye[1];var Ht=en.split("_");pe=2<=Ht.length&&Ht[1]=="type"?pe+(en+"="+Ye+"&"):pe+(en+"=redacted&")}}else pe=null;else pe=J;return"XMLHTTP REQ ("+x+") [attempt "+Y+"]: "+y+`
`+E+`
`+pe})}function Qd(h,y,E,x,Y,J,pe){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+Y+"]: "+y+`
`+E+`
`+J+" "+pe})}function cs(h,y,E,x){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+da(h,E)+(x?" "+x:"")})}function Gc(h,y){h.info(function(){return"TIMEOUT: "+y})}nr.prototype.info=function(){};function da(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var x=E[h];if(!(2>x.length)){var Y=x[1];if(Array.isArray(Y)&&!(1>Y.length)){var J=Y[0];if(J!="noop"&&J!="stop"&&J!="close")for(var pe=1;pe<Y.length;pe++)Y[pe]=""}}}}return zn(E)}catch{return y}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vr;function Lr(){}V(Lr,os),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Vr=new Lr;function kn(h,y,E,x){this.j=h,this.i=y,this.l=E,this.R=x||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}var $l={},mo={};function _r(h,y,E){h.L=1,h.v=_a(Fn(y)),h.m=E,h.P=!0,wi(h,null)}function wi(h,y){h.F=Date.now(),pa(h),h.A=Fn(h.v);var E=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Kl(E.i,"t",x),h.C=0,E=h.j.J,h.h=new It,h.g=lh(h.j,E?y:null,!h.m),0<h.O&&(h.M=new zl(T(h.Y,h,h.g),h.O)),y=h.U,E=h.g,x=h.ca;var Y="readystatechange";Array.isArray(Y)||(Y&&(gi[0]=Y.toString()),Y=gi);for(var J=0;J<Y.length;J++){var pe=co(E,Y[J],x||y.handleEvent,!1,y.h||y);if(!pe)break;y.g[pe.key]=pe}y=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),tr(),Fl(h.i,h.u,h.A,h.l,h.R,h.m)}kn.prototype.ca=function(h){h=h.target;const y=this.M;y&&ar(h)==3?y.j():this.Y(h)},kn.prototype.Y=function(h){try{if(h==this.g)e:{const Ht=ar(this.g);var y=this.g.Ba();const Ii=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||Ht!=4||y==7||(y==8||0>=Ii?tr(3):tr(2)),fs(this);var E=this.g.Z();this.X=E;t:if(Yc(this)){var x=eh(this.g);h="";var Y=x.length,J=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),jr(this);var pe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<Y;y++)this.h.h=!0,h+=this.h.i.decode(x[y],{stream:!(J&&y==Y-1)});x.length=0,this.h.g+=h,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=E==200,Qd(this.i,this.u,this.A,this.l,this.R,Ht,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,$t=this.g;if((Ge=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ge)){var Ye=Ge;break t}}Ye=null}if(E=Ye)cs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,E);else{this.o=!1,this.s=3,vt(12),cn(this),jr(this);break e}}if(this.P){E=!0;let hn;for(;!this.J&&this.C<pe.length;)if(hn=Wc(this,pe),hn==mo){Ht==4&&(this.s=4,vt(14),E=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==$l){this.s=4,vt(15),cs(this.i,this.l,pe,"[Invalid Chunk]"),E=!1;break}else cs(this.i,this.l,hn,null),ma(this,hn);if(Yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||pe.length!=0||this.h.h||(this.s=1,vt(16),E=!1),this.o=this.o&&E,!E)cs(this.i,this.l,pe,"[Invalid Chunked Response]"),cn(this),jr(this);else if(0<pe.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Aa(en),en.M=!0,vt(11))}}else cs(this.i,this.l,pe,null),ma(this,pe);Ht==4&&cn(this),this.o&&!this.J&&(Ht==4?sh(this.j,this):(this.o=!1,pa(this)))}else ep(this.g),E==400&&0<pe.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),cn(this),jr(this)}}}catch{}finally{}};function Yc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Wc(h,y){var E=h.C,x=y.indexOf(`
`,E);return x==-1?mo:(E=Number(y.substring(E,x)),isNaN(E)?$l:(x+=1,x+E>y.length?mo:(y=y.slice(x,x+E),h.C=x+E,y)))}kn.prototype.cancel=function(){this.J=!0,cn(this)};function pa(h){h.S=Date.now()+h.I,Qc(h,h.I)}function Qc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Mt(T(h.ba,h),y)}function fs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}kn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Gc(this.i,this.A),this.L!=2&&(tr(),vt(17)),cn(this),this.s=2,jr(this)):Qc(this,this.S-h)};function jr(h){h.j.G==0||h.J||sh(h.j,h)}function cn(h){fs(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,yi(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function ma(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Hl(E.h,h))){if(!h.K&&Hl(E.h,h)&&E.G==3){try{var x=E.Da.g.parse(y)}catch{x=null}if(Array.isArray(x)&&x.length==3){var Y=x;if(Y[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Ro(E),xo(E);else break e;tu(E),vt(18)}}else E.za=Y[1],0<E.za-E.T&&37500>Y[2]&&E.F&&E.v==0&&!E.C&&(E.C=Mt(T(E.Za,E),6e3));if(1>=yo(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ci(E,11)}else if((h.K||E.g==h)&&Ro(E),!L(y))for(Y=E.Da.g.parse(y),y=0;y<Y.length;y++){let Ye=Y[y];if(E.T=Ye[0],Ye=Ye[1],E.G==2)if(Ye[0]=="c"){E.K=Ye[1],E.ia=Ye[2];const en=Ye[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const Ht=Ye[4];Ht!=null&&(E.Aa=Ht,E.j.info("SVER="+E.Aa));const Ii=Ye[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(x=1.5*Ii,E.L=x,E.j.info("backChannelRequestTimeoutMs_="+x)),x=E;const hn=h.g;if(hn){const Hr=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var J=x.h;J.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(J.j=J.l,J.g=new Set,J.h&&(_o(J,J.h),J.h=null))}if(x.D){const ru=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;ru&&(x.ya=ru,ot(x.I,x.D,ru))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),x=E;var pe=h;if(x.qa=oh(x,x.J?x.ia:null,x.W),pe.K){On(x.h,pe);var Ge=pe,$t=x.L;$t&&(Ge.I=$t),Ge.B&&(fs(Ge),pa(Ge)),x.g=pe}else rh(x);0<E.i.length&&Ao(E)}else Ye[0]!="stop"&&Ye[0]!="close"||Ci(E,7);else E.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?Ci(E,7):Jl(E):Ye[0]!="noop"&&E.l&&E.l.ta(Ye),E.v=0)}}tr(4)}catch{}}var Kc=class{constructor(h,y){this.g=h,this.map=y}};function bi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function go(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function yo(h){return h.h?1:h.g?h.g.size:0}function Hl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function _o(h,y){h.g?h.g.add(y):h.h=y}function On(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}bi.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Gl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return z(h.i)}function Kd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,x=0;x<E;x++)y.push(h[x]);return y}y=[],E=0;for(x in h)y[E++]=h[x];return y}function vo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const x in h)y[E++]=x;return y}}}function Yl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=vo(h),x=Kd(h),Y=x.length,J=0;J<Y;J++)y.call(void 0,x[J],E&&E[J],h)}var ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xd(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var x=h[E].indexOf("="),Y=null;if(0<=x){var J=h[E].substring(0,x);Y=h[E].substring(x+1)}else J=h[E];y(J,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Nt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Nt){this.h=h.h,ya(this,h.j),this.o=h.o,this.g=h.g,ds(this,h.s),this.l=h.l;var y=h.i,E=new Si;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Ti(this,E),this.m=h.m}else h&&(y=String(h).match(ga))?(this.h=!1,ya(this,y[1]||"",!0),this.o=rr(y[2]||""),this.g=rr(y[3]||"",!0),ds(this,y[4]),this.l=rr(y[5]||"",!0),Ti(this,y[6]||"",!0),this.m=rr(y[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Nt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(va(y,Wl,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(va(y,Wl,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(va(E,E.charAt(0)=="/"?Zd:Ql,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",va(E,Eo)),h.join("")};function Fn(h){return new Nt(h)}function ya(h,y,E){h.j=E?rr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function ds(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Ti(h,y,E){y instanceof Si?(h.i=y,Zc(h.i,h.h)):(E||(y=va(y,Jd)),h.i=new Si(y,h.h))}function ot(h,y,E){h.i.set(y,E)}function _a(h){return ot(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function rr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function va(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,Xc),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Xc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Wl=/[#\/\?@]/g,Ql=/[#\?:]/g,Zd=/[#\?]/g,Jd=/[#\?@]/g,Eo=/#/g;function Si(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function ir(h){h.g||(h.g=new Map,h.h=0,h.i&&Xd(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}t=Si.prototype,t.add=function(h,y){ir(this),this.i=null,h=Ur(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function xi(h,y){ir(h),y=Ur(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Ai(h,y){return ir(h),y=Ur(h,y),h.g.has(y)}t.forEach=function(h,y){ir(this),this.g.forEach(function(E,x){E.forEach(function(Y){h.call(y,Y,x,this)},this)},this)},t.na=function(){ir(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let x=0;x<y.length;x++){const Y=h[x];for(let J=0;J<Y.length;J++)E.push(y[x])}return E},t.V=function(h){ir(this);let y=[];if(typeof h=="string")Ai(this,h)&&(y=y.concat(this.g.get(Ur(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},t.set=function(h,y){return ir(this),this.i=null,h=Ur(this,h),Ai(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Kl(h,y,E){xi(h,y),0<E.length&&(h.i=null,h.g.set(Ur(h,y),z(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var x=y[E];const J=encodeURIComponent(String(x)),pe=this.V(x);for(x=0;x<pe.length;x++){var Y=J;pe[x]!==""&&(Y+="="+encodeURIComponent(String(pe[x]))),h.push(Y)}}return this.i=h.join("&")};function Ur(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function Zc(h,y){y&&!h.j&&(ir(h),h.i=null,h.g.forEach(function(E,x){var Y=x.toLowerCase();x!=Y&&(xi(this,x),Kl(this,Y,E))},h)),h.j=y}function Ea(h,y){const E=new nr;if(d.Image){const x=new Image;x.onload=C(sr,E,"TestLoadImage: loaded",!0,y,x),x.onerror=C(sr,E,"TestLoadImage: error",!1,y,x),x.onabort=C(sr,E,"TestLoadImage: abort",!1,y,x),x.ontimeout=C(sr,E,"TestLoadImage: timeout",!1,y,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else y(!1)}function vr(h,y){const E=new nr,x=new AbortController,Y=setTimeout(()=>{x.abort(),sr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:x.signal}).then(J=>{clearTimeout(Y),J.ok?sr(E,"TestPingServer: ok",!0,y):sr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(Y),sr(E,"TestPingServer: error",!1,y)})}function sr(h,y,E,x,Y){try{Y&&(Y.onload=null,Y.onerror=null,Y.onabort=null,Y.ontimeout=null),x(E)}catch{}}function wa(){this.g=new vi}function qr(h,y,E){const x=E||"";try{Yl(h,function(Y,J){let pe=Y;g(Y)&&(pe=zn(Y)),y.push(x+J+"="+encodeURIComponent(pe))})}catch(Y){throw y.push(x+"type="+encodeURIComponent("_badmap")),Y}}function ps(h){this.l=h.Ub||null,this.j=h.eb||!1}V(ps,os),ps.prototype.g=function(){return new Ri(this.l,this.j)},ps.prototype.i=function(h){return function(){return h}}({});function Ri(h,y){_t.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ri,_t),t=Ri.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,zr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Br(this):zr(this),this.readyState==3&&Xl(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Br(this))},t.Qa=function(h){this.g&&(this.response=h,Br(this))},t.ga=function(){this.g&&Br(this)};function Br(h){h.readyState=4,h.l=null,h.j=null,h.v=null,zr(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function zr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Zl(h){let y="";return ne(h,function(E,x){y+=x,y+=":",y+=E,y+=`\r
`}),y}function Jt(h,y,E){e:{for(x in E){var x=!1;break e}x=!0}x||(E=Zl(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):ot(h,y,E))}function tt(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(tt,_t);var wo=/^https?$/i,ba=["POST","PUT"];t=tt.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,E,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vr.g(),this.v=this.o?Ne(this.o):Ne(Vr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(J){Jc(this,J);return}if(h=E||"",E=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var Y in x)E.set(Y,x[Y]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const J of x.keys())E.set(J,x.get(J));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(E.keys()).find(J=>J.toLowerCase()=="content-type"),Y=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ba,y,void 0))||x||Y||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[J,pe]of E)this.g.setRequestHeader(J,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ta(this),this.u=!0,this.g.send(h),this.u=!1}catch(J){Jc(this,J)}};function Jc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,bo(h),Fr(h)}function bo(h){h.A||(h.A=!0,Ze(h,"complete"),Ze(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ze(this,"complete"),Ze(this,"abort"),Fr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?To(this):this.bb())},t.bb=function(){To(this)};function To(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ar(h)!=4||h.Z()!=2)){if(h.u&&ar(h)==4)Xt(h.Ea,0,h);else if(Ze(h,"readystatechange"),ar(h)==4){h.h=!1;try{const pe=h.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var x;if(x=pe===0){var Y=String(h.D).match(ga)[1]||null;!Y&&d.self&&d.self.location&&(Y=d.self.location.protocol.slice(0,-1)),x=!wo.test(Y?Y.toLowerCase():"")}E=x}if(E)Ze(h,"complete"),Ze(h,"success");else{h.m=6;try{var J=2<ar(h)?h.g.statusText:""}catch{J=""}h.l=J+" ["+h.Z()+"]",bo(h)}}finally{Fr(h)}}}}function Fr(h,y){if(h.g){Ta(h);const E=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Ze(h,"ready");try{E.onreadystatechange=x}catch{}}}function Ta(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function ar(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),_i(y)}};function eh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ep(h){const y={};h=(h.g&&2<=ar(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if(L(h[x]))continue;var E=j(h[x]);const Y=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const J=y[Y]||[];y[Y]=J,J.push(E)}R(y,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function So(h){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sa("baseRetryDelayMs",5e3,h),this.cb=Sa("retryDelaySeedMs",1e4,h),this.Wa=Sa("forwardChannelMaxRetries",2,h),this.wa=Sa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(h&&h.concurrentRequestLimit),this.Da=new wa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=So.prototype,t.la=8,t.G=1,t.connect=function(h,y,E,x){vt(0),this.W=h,this.H=y||{},E&&x!==void 0&&(this.H.OSID=E,this.H.OAID=x),this.F=this.X,this.I=oh(this,null,this.W),Ao(this)};function Jl(h){if(th(h),h.G==3){var y=h.U++,E=Fn(h.I);if(ot(E,"SID",h.K),ot(E,"RID",y),ot(E,"TYPE","terminate"),xa(h,E),y=new kn(h,h.j,y),y.L=2,y.v=_a(Fn(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=lh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),pa(y)}ah(h)}function xo(h){h.g&&(Aa(h),h.g.cancel(),h.g=null)}function th(h){xo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ro(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ao(h){if(!go(h.h)&&!h.s){h.s=!0;var y=h.Ga;le||I(),fe||(le(),fe=!0),ve.add(y,h),h.B=0}}function tp(h,y){return yo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Mt(T(h.Ga,h,y),nu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Y=new kn(this,this.j,h);let J=this.o;if(this.S&&(J?(J=A(J),k(J,this.S)):J=this.S),this.m!==null||this.O||(Y.H=J,J=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var x=this.i[E];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(y+=x,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=nh(this,Y,y),E=Fn(this.I),ot(E,"RID",h),ot(E,"CVER",22),this.D&&ot(E,"X-HTTP-Session-Id",this.D),xa(this,E),J&&(this.O?y="headers="+encodeURIComponent(String(Zl(J)))+"&"+y:this.m&&Jt(E,this.m,J)),_o(this.h,Y),this.Ua&&ot(E,"TYPE","init"),this.P?(ot(E,"$req",y),ot(E,"SID","null"),Y.T=!0,_r(Y,E,null)):_r(Y,E,y),this.G=2}}else this.G==3&&(h?eu(this,h):this.i.length==0||go(this.h)||eu(this))};function eu(h,y){var E;y?E=y.l:E=h.U++;const x=Fn(h.I);ot(x,"SID",h.K),ot(x,"RID",E),ot(x,"AID",h.T),xa(h,x),h.m&&h.o&&Jt(x,h.m,h.o),E=new kn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=nh(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),_o(h.h,E),_r(E,x,y)}function xa(h,y){h.H&&ne(h.H,function(E,x){ot(y,x,E)}),h.l&&Yl({},function(E,x){ot(y,x,E)})}function nh(h,y,E){E=Math.min(h.i.length,E);var x=h.l?T(h.l.Na,h.l,h):null;e:{var Y=h.i;let J=-1;for(;;){const pe=["count="+E];J==-1?0<E?(J=Y[0].g,pe.push("ofs="+J)):J=0:pe.push("ofs="+J);let Ge=!0;for(let $t=0;$t<E;$t++){let Ye=Y[$t].g;const en=Y[$t].map;if(Ye-=J,0>Ye)J=Math.max(0,Y[$t].g-100),Ge=!1;else try{qr(en,pe,"req"+Ye+"_")}catch{x&&x(en)}}if(Ge){x=pe.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,x}function rh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;le||I(),fe||(le(),fe=!0),ve.add(y,h),h.v=0}}function tu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Mt(T(h.Fa,h),nu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Mt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),xo(this),ih(this))};function Aa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function ih(h){h.g=new kn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Fn(h.qa);ot(y,"RID","rpc"),ot(y,"SID",h.K),ot(y,"AID",h.T),ot(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&ot(y,"TO",h.ja),ot(y,"TYPE","xmlhttp"),xa(h,y),h.m&&h.o&&Jt(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=_a(Fn(y)),E.m=null,E.P=!0,wi(E,h)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),tu(this),vt(19))};function Ro(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function sh(h,y){var E=null;if(h.g==y){Ro(h),Aa(h),h.g=null;var x=2}else if(Hl(h.h,y))E=y.D,On(h.h,y),x=1;else return;if(h.G!=0){if(y.o)if(x==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var Y=h.B;x=Pr(),Ze(x,new Ft(x,E)),Ao(h)}else rh(h);else if(Y=y.s,Y==3||Y==0&&0<y.X||!(x==1&&tp(h,y)||x==2&&tu(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),Y){case 1:Ci(h,5);break;case 4:Ci(h,10);break;case 3:Ci(h,6);break;default:Ci(h,2)}}}function nu(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Ci(h,y){if(h.j.info("Error code "+y),y==2){var E=T(h.fb,h),x=h.Xa;const Y=!x;x=new Nt(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ya(x,"https"),_a(x),Y?Ea(x.toString(),E):vr(x.toString(),E)}else vt(2);h.G=0,h.l&&h.l.sa(y),ah(h),th(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ah(h){if(h.G=0,h.ka=[],h.l){const y=Gl(h.h);(y.length!=0||h.i.length!=0)&&(O(h.ka,y),O(h.ka,h.i),h.h.i.length=0,z(h.i),h.i.length=0),h.l.ra()}}function oh(h,y,E){var x=E instanceof Nt?Fn(E):new Nt(E);if(x.g!="")y&&(x.g=y+"."+x.g),ds(x,x.s);else{var Y=d.location;x=Y.protocol,y=y?y+"."+Y.hostname:Y.hostname,Y=+Y.port;var J=new Nt(null);x&&ya(J,x),y&&(J.g=y),Y&&ds(J,Y),E&&(J.l=E),x=J}return E=h.D,y=h.ya,E&&y&&ot(x,E,y),ot(x,"VER",h.la),xa(h,x),x}function lh(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new tt(new ps({eb:E})):new tt(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}t=uh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Co(){}Co.prototype.g=function(h,y){return new Mn(h,y)};function Mn(h,y){_t.call(this),this.g=new So(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!L(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!L(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new $r(this)}V(Mn,_t),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){Jl(this.g)},Mn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=zn(h),h=E);y.i.push(new Kc(y.Ya++,h)),y.G==3&&Ao(y)},Mn.prototype.N=function(){this.g.l=null,delete this.j,Jl(this.g),delete this.g,Mn.aa.N.call(this)};function ch(h){Ke.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}V(ch,Ke);function hh(){Zt.call(this),this.status=1}V(hh,Zt);function $r(h){this.g=h}V($r,uh),$r.prototype.ua=function(){Ze(this.g,"a")},$r.prototype.ta=function(h){Ze(this.g,new ch(h))},$r.prototype.sa=function(h){Ze(this.g,new hh)},$r.prototype.ra=function(){Ze(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,tS=function(){return new Co},eS=function(){return Pr()},J1=Pe,Fg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Lf=hs,Ei.COMPLETE="complete",Z1=Ei,et.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",_t.prototype.listen=_t.prototype.K,ec=et,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,X1=tt}).apply(typeof yf<"u"?yf:typeof self<"u"?self:typeof window<"u"?window:{});const Uw="@firebase/firestore",qw="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rn.UNAUTHENTICATED=new Rn(null),Rn.GOOGLE_CREDENTIALS=new Rn("google-credentials-uid"),Rn.FIRST_PARTY=new Rn("first-party-uid"),Rn.MOCK_USER=new Rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new by("@firebase/firestore");function sl(){return io.logLevel}function _e(t,...e){if(io.logLevel<=ze.DEBUG){const n=e.map(My);io.debug(`Firestore (${Pl}): ${t}`,...n)}}function ts(t,...e){if(io.logLevel<=ze.ERROR){const n=e.map(My);io.error(`Firestore (${Pl}): ${t}`,...n)}}function wl(t,...e){if(io.logLevel<=ze.WARN){const n=e.map(My);io.warn(`Firestore (${Pl}): ${t}`,...n)}}function My(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function De(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,nS(t,i,n)}function nS(t,e,n){let i=`FIRESTORE (${Pl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ts(i),new Error(i)}function rt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||nS(e,a,i)}function Me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rn.UNAUTHENTICATED))}shutdown(){}}class EN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wN{constructor(e){this.t=e,this.currentUser=Rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){rt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Xi,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Xi)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(rt(typeof i.accessToken=="string",31837,{l:i}),new rS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string",2055,{h:e}),new Rn(e)}}class bN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new bN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){rt(this.o===void 0,3512);const i=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=xN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function Fe(t,e){return t<e?-1:t>e?1:0}function $g(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return hg(a)===hg(l)?Fe(a,l):hg(a)?1:-1}return Fe(t.length,e.length)}const AN=55296,RN=57343;function hg(t){const e=t.charCodeAt(0);return e>=AN&&e<=RN}function bl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="__name__";class Jr{constructor(e,n,i){n===void 0?n=0:n>e.length&&De(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&De(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Jr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=Jr.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return Fe(e.length,n.length)}static compareSegments(e,n){const i=Jr.isNumericId(e),a=Jr.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?Jr.extractNumericId(e).compare(Jr.extractNumericId(n)):$g(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ws.fromString(e.substring(4,e.length-2))}}class gt extends Jr{construct(e,n,i){return new gt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ye(oe.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yn extends Jr{construct(e,n,i){return new yn(e,n,i)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zw}static keyField(){return new yn([zw])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ye(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ye(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yn(n)}static emptyPath(){return new yn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(gt.fromString(e))}static fromName(e){return new Se(gt.fromString(e).popFirst(5))}static empty(){return new Se(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return gt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new gt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e,n){if(!n)throw new ye(oe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IN(t,e,n,i){if(e===!0&&i===!0)throw new ye(oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fw(t){if(!Se.isDocumentKey(t))throw new ye(oe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $w(t){if(Se.isDocumentKey(t))throw new ye(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":De(12329,{type:typeof t})}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ad(t);throw new ye(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Bt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lc(t,e){if(!sS(t))throw new ye(oe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ye(oe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=-62135596800,Gw=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Gw);return new pt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Hw)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gw}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lc(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Bt("string",pt._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new pt(0,0))}static max(){return new Oe(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _c=-1;function DN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Oe.fromTimestamp(i===1e9?new pt(n+1,0):new pt(n,i));return new Xs(a,Se.empty(),e)}function kN(t){return new Xs(t.readTime,t.key,_c)}class Xs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Xs(Oe.min(),Se.empty(),_c)}static max(){return new Xs(Oe.max(),Se.empty(),_c)}}function ON(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Se.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){if(t.code!==oe.FAILED_PRECONDITION||t.message!==MN)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&De(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ce((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ce?n:ce.resolve(n)}catch(n){return ce.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ce.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ce.reject(n)}static resolve(e){return new ce((n,i)=>{n(e)})}static reject(e){return new ce((n,i)=>{i(e)})}static waitFor(e){return new ce((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=ce.resolve(!1);for(const i of e)n=n.next(a=>a?ce.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new ce((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new ce((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function PN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Rd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Rd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=-1;function Cd(t){return t==null}function nd(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!nd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="";function LN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yw(e)),e=jN(t.get(n),e);return Yw(e)}function jN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case aS:n+="";break;default:n+=l}}return n}function Yw(t){return t+aS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||gn.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _f(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _f(this.root,e,this.comparator,!1)}getReverseIterator(){return new _f(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _f(this.root,e,this.comparator,!0)}}class _f{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??gn.RED,this.left=a??gn.EMPTY,this.right=l??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new gn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw De(43730,{key:this.key,value:this.value});if(this.right.isRed())throw De(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw De(27949);return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw De(57766)}get value(){throw De(16141)}get color(){throw De(16727)}get left(){throw De(29726)}get right(){throw De(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new gn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qw(this.data.getIterator())}getIteratorFrom(e){return new Qw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Wt(this.comparator);return n.data=e,n}}class Qw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(yn.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new Wt(yn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class lS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new lS("Invalid base64 string: "+l):l}}(e);return new _n(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new _n(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const UN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zs(t){if(rt(!!t,39018),typeof t=="string"){let e=0;const n=UN.exec(t);if(rt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ot(t.seconds),nanos:Ot(t.nanos)}}function Ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?_n.fromBase64String(t):_n.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="server_timestamp",cS="__type__",hS="__previous_value__",fS="__local_write_time__";function Vy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[cS])==null?void 0:i.stringValue)===uS}function Id(t){const e=t.mapValue.fields[hS];return Vy(e)?Id(e):e}function vc(t){const e=Zs(t.mapValue.fields[fS].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const rd="(default)";class Ec{constructor(e,n){this.projectId=e,this.database=n||rd}static empty(){return new Ec("","")}get isDefaultDatabase(){return this.database===rd}isEqual(e){return e instanceof Ec&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="__type__",BN="__max__",vf={mapValue:{}},pS="__vector__",id="value";function ea(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vy(t)?4:FN(t)?9007199254740991:zN(t)?10:11:De(28295,{value:t})}function ui(t,e){if(t===e)return!0;const n=ea(t);if(n!==ea(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vc(t).isEqual(vc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Zs(a.timestampValue),d=Zs(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return Js(a.bytesValue).isEqual(Js(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ot(a.doubleValue),d=Ot(l.doubleValue);return c===d?nd(c)===nd(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return bl(t.arrayValue.values||[],e.arrayValue.values||[],ui);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(Ww(c)!==Ww(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!ui(c[p],d[p])))return!1;return!0}(t,e);default:return De(52216,{left:t})}}function wc(t,e){return(t.values||[]).find(n=>ui(n,e))!==void 0}function Tl(t,e){if(t===e)return 0;const n=ea(t),i=ea(e);if(n!==i)return Fe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Ot(l.integerValue||l.doubleValue),p=Ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return Kw(t.timestampValue,e.timestampValue);case 4:return Kw(vc(t),vc(e));case 5:return $g(t.stringValue,e.stringValue);case 6:return function(l,c){const d=Js(l),p=Js(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Fe(d[g],p[g]);if(v!==0)return v}return Fe(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Fe(Ot(l.latitude),Ot(c.latitude));return d!==0?d:Fe(Ot(l.longitude),Ot(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xw(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,C,V,z;const d=l.fields||{},p=c.fields||{},g=(T=d[id])==null?void 0:T.arrayValue,v=(C=p[id])==null?void 0:C.arrayValue,b=Fe(((V=g==null?void 0:g.values)==null?void 0:V.length)||0,((z=v==null?void 0:v.values)==null?void 0:z.length)||0);return b!==0?b:Xw(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===vf.mapValue&&c===vf.mapValue)return 0;if(l===vf.mapValue)return 1;if(c===vf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let b=0;b<p.length&&b<v.length;++b){const T=$g(p[b],v[b]);if(T!==0)return T;const C=Tl(d[p[b]],g[v[b]]);if(C!==0)return C}return Fe(p.length,v.length)}(t.mapValue,e.mapValue);default:throw De(23264,{he:n})}}function Kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=Zs(t),i=Zs(e),a=Fe(n.seconds,i.seconds);return a!==0?a:Fe(n.nanos,i.nanos)}function Xw(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=Tl(n[a],i[a]);if(l)return l}return Fe(n.length,i.length)}function Sl(t){return Hg(t)}function Hg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Zs(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Js(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Hg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Hg(n.fields[c])}`;return a+"}"}(t.mapValue):De(61005,{value:t})}function jf(t){switch(ea(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Id(t);return e?16+jf(e):16;case 5:return 2*t.stringValue.length;case 6:return Js(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+jf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return oa(i.fields,(l,c)=>{a+=l.length+jf(c)}),a}(t.mapValue);default:throw De(13486,{value:t})}}function Zw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gg(t){return!!t&&"integerValue"in t}function Ly(t){return!!t&&"arrayValue"in t}function Jw(t){return!!t&&"nullValue"in t}function eb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uf(t){return!!t&&"mapValue"in t}function zN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[dS])==null?void 0:i.stringValue)===pS}function lc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return oa(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=lc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lc(t.arrayValue.values[n]);return e}return{...t}}function FN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Uf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lc(n)}setAll(e){let n=yn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=lc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Uf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ui(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Uf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){oa(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Bn(lc(this.value))}}function mS(t){const e=[];return oa(t.fields,(n,i)=>{const a=new yn([n]);if(Uf(i)){const l=mS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Cn(e,0,Oe.min(),Oe.min(),Oe.min(),Bn.empty(),0)}static newFoundDocument(e,n,i,a){return new Cn(e,1,n,Oe.min(),i,a,0)}static newNoDocument(e,n){return new Cn(e,2,n,Oe.min(),Oe.min(),Bn.empty(),0)}static newUnknownDocument(e,n){return new Cn(e,3,n,Oe.min(),Oe.min(),Bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sd{constructor(e,n){this.position=e,this.inclusive=n}}function tb(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Se.comparator(Se.fromName(c.referenceValue),n.key):i=Tl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function nb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ui(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bc{constructor(e,n="asc"){this.field=e,this.dir=n}}function $N(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gS{}class Ut extends gS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new GN(e,n,i):n==="array-contains"?new QN(e,i):n==="in"?new KN(e,i):n==="not-in"?new XN(e,i):n==="array-contains-any"?new ZN(e,i):new Ut(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new YN(e,i):new WN(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Tl(n,this.value)):n!==null&&ea(this.value)===ea(n)&&this.matchesComparison(Tl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return De(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends gS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new kr(e,n)}matches(e){return yS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yS(t){return t.op==="and"}function _S(t){return HN(t)&&yS(t)}function HN(t){for(const e of t.filters)if(e instanceof kr)return!1;return!0}function Yg(t){if(t instanceof Ut)return t.field.canonicalString()+t.op.toString()+Sl(t.value);if(_S(t))return t.filters.map(e=>Yg(e)).join(",");{const e=t.filters.map(n=>Yg(n)).join(",");return`${t.op}(${e})`}}function vS(t,e){return t instanceof Ut?function(i,a){return a instanceof Ut&&i.op===a.op&&i.field.isEqual(a.field)&&ui(i.value,a.value)}(t,e):t instanceof kr?function(i,a){return a instanceof kr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&vS(c,a.filters[d]),!0):!1}(t,e):void De(19439)}function ES(t){return t instanceof Ut?function(n){return`${n.field.canonicalString()} ${n.op} ${Sl(n.value)}`}(t):t instanceof kr?function(n){return n.op.toString()+" {"+n.getFilters().map(ES).join(" ,")+"}"}(t):"Filter"}class GN extends Ut{constructor(e,n,i){super(e,n,i),this.key=Se.fromName(i.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class YN extends Ut{constructor(e,n){super(e,"in",n),this.keys=wS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WN extends Ut{constructor(e,n){super(e,"not-in",n),this.keys=wS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Se.fromName(i.referenceValue))}class QN extends Ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ly(n)&&wc(n.arrayValue,this.value)}}class KN extends Ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wc(this.value.arrayValue,n)}}class XN extends Ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(wc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wc(this.value.arrayValue,n)}}class ZN extends Ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ly(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>wc(this.value.arrayValue,i))}}/**
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
 */class JN{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function rb(t,e=null,n=[],i=[],a=null,l=null,c=null){return new JN(t,e,n,i,a,l,c)}function jy(t){const e=Me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Yg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Sl(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Sl(i)).join(",")),e.Te=n}return e.Te}function Uy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$N(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nb(t.startAt,e.startAt)&&nb(t.endAt,e.endAt)}function Wg(t){return Se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function e2(t,e,n,i,a,l,c,d){return new jl(t,e,n,i,a,l,c,d)}function Dd(t){return new jl(t)}function ib(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bS(t){return t.collectionGroup!==null}function uc(t){const e=Me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Wt(yn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new bc(l,i))}),n.has(yn.keyField().canonicalString())||e.Ie.push(new bc(yn.keyField(),i))}return e.Ie}function ii(t){const e=Me(t);return e.Ee||(e.Ee=t2(e,uc(t))),e.Ee}function t2(t,e){if(t.limitType==="F")return rb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new bc(a.field,l)});const n=t.endAt?new sd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new sd(t.startAt.position,t.startAt.inclusive):null;return rb(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Qg(t,e){const n=t.filters.concat([e]);return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kg(t,e,n){return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kd(t,e){return Uy(ii(t),ii(e))&&t.limitType===e.limitType}function TS(t){return`${jy(ii(t))}|lt:${t.limitType}`}function al(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>ES(a)).join(", ")}]`),Cd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Sl(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Sl(a)).join(",")),`Target(${i})`}(ii(t))}; limitType=${t.limitType})`}function Od(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Se.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of uc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=tb(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,uc(i),a)||i.endAt&&!function(c,d,p){const g=tb(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,uc(i),a))}(t,e)}function n2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SS(t){return(e,n)=>{let i=!1;for(const a of uc(t)){const l=r2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function r2(t,e,n){const i=t.field.isKeyField()?Se.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Tl(p,g):De(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return De(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){oa(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return oS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new xt(Se.comparator);function ns(){return i2}const xS=new xt(Se.comparator);function tc(...t){let e=xS;for(const n of t)e=e.insert(n.key,n);return e}function AS(t){let e=xS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ga(){return cc()}function RS(){return cc()}function cc(){return new lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const s2=new xt(Se.comparator),a2=new Wt(Se.comparator);function $e(...t){let e=a2;for(const n of t)e=e.add(n);return e}const o2=new Wt(Fe);function l2(){return o2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nd(e)?"-0":e}}function CS(t){return{integerValue:""+t}}function u2(t,e){return VN(e)?CS(e):qy(t,e)}/**
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
 */class Md{constructor(){this._=void 0}}function c2(t,e,n){return t instanceof Tc?function(a,l){const c={fields:{[cS]:{stringValue:uS},[fS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Vy(l)&&(l=Id(l)),l&&(c.fields[hS]=l),{mapValue:c}}(n,e):t instanceof Sc?DS(t,e):t instanceof xc?kS(t,e):function(a,l){const c=IS(a,l),d=sb(c)+sb(a.Ae);return Gg(c)&&Gg(a.Ae)?CS(d):qy(a.serializer,d)}(t,e)}function h2(t,e,n){return t instanceof Sc?DS(t,e):t instanceof xc?kS(t,e):n}function IS(t,e){return t instanceof ad?function(i){return Gg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Tc extends Md{}class Sc extends Md{constructor(e){super(),this.elements=e}}function DS(t,e){const n=OS(e);for(const i of t.elements)n.some(a=>ui(a,i))||n.push(i);return{arrayValue:{values:n}}}class xc extends Md{constructor(e){super(),this.elements=e}}function kS(t,e){let n=OS(e);for(const i of t.elements)n=n.filter(a=>!ui(a,i));return{arrayValue:{values:n}}}class ad extends Md{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function sb(t){return Ot(t.integerValue||t.doubleValue)}function OS(t){return Ly(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n){this.field=e,this.transform=n}}function d2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof Sc&&a instanceof Sc||i instanceof xc&&a instanceof xc?bl(i.elements,a.elements,ui):i instanceof ad&&a instanceof ad?ui(i.Ae,a.Ae):i instanceof Tc&&a instanceof Tc}(t.transform,e.transform)}class p2{constructor(e,n){this.version=e,this.transformResults=n}}class Rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nd{}function MS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new PS(t.key,Rr.none()):new jc(t.key,t.data,Rr.none());{const n=t.data,i=Bn.empty();let a=new Wt(yn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new la(t.key,i,new Jn(a.toArray()),Rr.none())}}function m2(t,e,n){t instanceof jc?function(a,l,c){const d=a.value.clone(),p=ob(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof la?function(a,l,c){if(!qf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=ob(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(NS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function hc(t,e,n,i){return t instanceof jc?function(l,c,d,p){if(!qf(l.precondition,c))return d;const g=l.value.clone(),v=lb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof la?function(l,c,d,p){if(!qf(l.precondition,c))return d;const g=lb(l.fieldTransforms,p,c),v=c.data;return v.setAll(NS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(t,e,n,i):function(l,c,d){return qf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function g2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=IS(i.transform,a||null);l!=null&&(n===null&&(n=Bn.empty()),n.set(i.field,l))}return n||null}function ab(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&bl(i,a,(l,c)=>d2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jc extends Nd{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class la extends Nd{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function NS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function ob(t,e,n){const i=new Map;rt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,h2(c,d,n[a]))}return i}function lb(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,c2(l,c,e))}return i}class PS extends Nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y2 extends Nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&m2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=hc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=hc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=RS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=MS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Oe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&bl(this.mutations,e.mutations,(n,i)=>ab(n,i))&&bl(this.baseMutations,e.baseMutations,(n,i)=>ab(n,i))}}class By{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){rt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return s2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new By(e,n,i,a)}}/**
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
 */class v2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,Qe;function w2(t){switch(t){case oe.OK:return De(64938);case oe.CANCELLED:case oe.UNKNOWN:case oe.DEADLINE_EXCEEDED:case oe.RESOURCE_EXHAUSTED:case oe.INTERNAL:case oe.UNAVAILABLE:case oe.UNAUTHENTICATED:return!1;case oe.INVALID_ARGUMENT:case oe.NOT_FOUND:case oe.ALREADY_EXISTS:case oe.PERMISSION_DENIED:case oe.FAILED_PRECONDITION:case oe.ABORTED:case oe.OUT_OF_RANGE:case oe.UNIMPLEMENTED:case oe.DATA_LOSS:return!0;default:return De(15467,{code:t})}}function VS(t){if(t===void 0)return ts("GRPC error has no .code"),oe.UNKNOWN;switch(t){case Lt.OK:return oe.OK;case Lt.CANCELLED:return oe.CANCELLED;case Lt.UNKNOWN:return oe.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return oe.INTERNAL;case Lt.UNAVAILABLE:return oe.UNAVAILABLE;case Lt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case Lt.NOT_FOUND:return oe.NOT_FOUND;case Lt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case Lt.ABORTED:return oe.ABORTED;case Lt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case Lt.DATA_LOSS:return oe.DATA_LOSS;default:return De(39323,{code:t})}}(Qe=Lt||(Lt={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b2(){return new TextEncoder}/**
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
 */const T2=new Ws([4294967295,4294967295],0);function ub(t){const e=b2().encode(t),n=new K1;return n.update(e),new Uint8Array(n.digest())}function cb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ws([n,i],0),new Ws([a,l],0)]}class zy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new nc(`Invalid padding: ${n}`);if(i<0)throw new nc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new nc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new nc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ws.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(Ws.fromNumber(i)));return a.compare(T2)===1&&(a=new Ws([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ub(e),[i,a]=cb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new zy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=ub(e),[i,a]=cb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class nc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Uc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pd(Oe.min(),a,new xt(Fe),ns(),$e())}}class Uc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Uc(i,n,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class LS{constructor(e,n){this.targetId=e,this.Ce=n}}class jS{constructor(e,n,i=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class hb{constructor(){this.ve=0,this.Fe=fb(),this.Me=_n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$e(),n=$e(),i=$e();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:De(38017,{changeType:l})}}),new Uc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=fb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,rt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class S2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ns(),this.Je=Ef(),this.He=Ef(),this.Ye=new xt(Fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:De(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(Wg(l))if(i===0){const c=new Se(l.path);this.et(n,c,Cn.newNoDocument(c,Oe.min()))}else rt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=Js(i).toUint8Array()}catch(p){if(p instanceof lS)return wl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new zy(c,a,l)}catch(p){return wl(p instanceof nc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Wg(d.target)){const p=new Se(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Cn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=$e();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new Pd(e,n,this.Ye,this.je,i);return this.je=ns(),this.Je=Ef(),this.He=Ef(),this.Ye=new xt(Fe),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new hb,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Wt(Fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Wt(Fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ef(){return new xt(Se.comparator)}function fb(){return new xt(Se.comparator)}const x2={asc:"ASCENDING",desc:"DESCENDING"},A2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class C2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xg(t,e){return t.useProto3Json||Cd(e)?e:{value:e}}function od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function US(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function I2(t,e){return od(t,e.toTimestamp())}function si(t){return rt(!!t,49232),Oe.fromTimestamp(function(n){const i=Zs(n);return new pt(i.seconds,i.nanos)}(t))}function Fy(t,e){return Zg(t,e).canonicalString()}function Zg(t,e){const n=function(a){return new gt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qS(t){const e=gt.fromString(t);return rt(HS(e),10190,{key:e.toString()}),e}function Jg(t,e){return Fy(t.databaseId,e.path)}function fg(t,e){const n=qS(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(zS(n))}function BS(t,e){return Fy(t.databaseId,e)}function D2(t){const e=qS(t);return e.length===4?gt.emptyPath():zS(e)}function ey(t){return new gt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zS(t){return rt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function db(t,e,n){return{name:Jg(t,e),fields:n.value.mapValue.fields}}function k2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:De(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(rt(v===void 0||typeof v=="string",58123),_n.fromBase64String(v||"")):(rt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),_n.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?oe.UNKNOWN:VS(g.code);return new ye(v,g.message||"")}(c);n=new jS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=fg(t,i.document.name),l=si(i.document.updateTime),c=i.document.createTime?si(i.document.createTime):Oe.min(),d=new Bn({mapValue:{fields:i.document.fields}}),p=Cn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Bf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=fg(t,i.document),l=i.readTime?si(i.readTime):Oe.min(),c=Cn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Bf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=fg(t,i.document),l=i.removedTargetIds||[];n=new Bf([],l,a,null)}else{if(!("filter"in e))return De(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new E2(a,l),d=i.targetId;n=new LS(d,c)}}return n}function O2(t,e){let n;if(e instanceof jc)n={update:db(t,e.key,e.value)};else if(e instanceof PS)n={delete:Jg(t,e.key)};else if(e instanceof la)n={update:db(t,e.key,e.data),updateMask:B2(e.fieldMask)};else{if(!(e instanceof y2))return De(16599,{Vt:e.type});n={verify:Jg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Tc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Sc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ad)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw De(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:I2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:De(27497)}(t,e.precondition)),n}function M2(t,e){return t&&t.length>0?(rt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?si(a.updateTime):si(l);return c.isEqual(Oe.min())&&(c=si(l)),new p2(c,a.transformResults||[])}(n,e))):[]}function N2(t,e){return{documents:[BS(t,e.path)]}}function P2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=BS(t,a);const l=function(g){if(g.length!==0)return $S(kr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:ol(T.field),direction:j2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=Xg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function V2(t){let e=D2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){rt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(b){const T=FS(b);return T instanceof kr&&_S(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(b){return b.map(T=>function(V){return new bc(ll(V.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(b){let T;return T=typeof b=="object"?b.value:b,Cd(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(b){const T=!!b.before,C=b.values||[];return new sd(C,T)}(n.startAt));let g=null;return n.endAt&&(g=function(b){const T=!b.before,C=b.values||[];return new sd(C,T)}(n.endAt)),e2(e,a,c,l,d,"F",p,g)}function L2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return De(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ll(n.unaryFilter.field);return Ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=ll(n.unaryFilter.field);return Ut.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ll(n.unaryFilter.field);return Ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ll(n.unaryFilter.field);return Ut.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return De(61313);default:return De(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ut.create(ll(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return De(58110);default:return De(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kr.create(n.compositeFilter.filters.map(i=>FS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return De(1026)}}(n.compositeFilter.op))}(t):De(30097,{filter:t})}function j2(t){return x2[t]}function U2(t){return A2[t]}function q2(t){return R2[t]}function ol(t){return{fieldPath:t.canonicalString()}}function ll(t){return yn.fromServerFormat(t.fieldPath)}function $S(t){return t instanceof Ut?function(n){if(n.op==="=="){if(eb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NAN"}};if(Jw(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(eb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NOT_NAN"}};if(Jw(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ol(n.field),op:U2(n.op),value:n.value}}}(t):t instanceof kr?function(n){const i=n.getFilters().map(a=>$S(a));return i.length===1?i[0]:{compositeFilter:{op:q2(n.op),filters:i}}}(t):De(54877,{filter:t})}function B2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,i,a,l=Oe.min(),c=Oe.min(),d=_n.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.yt=e}}function F2(t){const e=V2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kg(e,e.limit,"L"):e}/**
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
 */class $2{constructor(){this.Cn=new H2}addToCollectionParentIndex(e,n){return this.Cn.add(n),ce.resolve()}getCollectionParents(e,n){return ce.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ce.resolve()}deleteFieldIndex(e,n){return ce.resolve()}deleteAllFieldIndexes(e){return ce.resolve()}createTargetIndexes(e,n){return ce.resolve()}getDocumentsMatchingTarget(e,n){return ce.resolve(null)}getIndexType(e,n){return ce.resolve(0)}getFieldIndexes(e,n){return ce.resolve([])}getNextCollectionGroupToUpdate(e){return ce.resolve(null)}getMinOffset(e,n){return ce.resolve(Xs.min())}getMinOffsetFromCollectionGroup(e,n){return ce.resolve(Xs.min())}updateCollectionGroup(e,n,i){return ce.resolve()}updateIndexEntries(e,n){return ce.resolve()}}class H2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new Wt(gt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Wt(gt.comparator)).toArray()}}/**
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
 */const pb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},GS=41943040;class qn{static withCacheSize(e){return new qn(e,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.DEFAULT_COLLECTION_PERCENTILE=10,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qn.DEFAULT=new qn(GS,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qn.DISABLED=new qn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xl(0)}static cr(){return new xl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="LruGarbageCollector",G2=1048576;function gb([t,e],[n,i]){const a=Fe(t,n);return a===0?Fe(e,i):a}class Y2{constructor(e){this.Ir=e,this.buffer=new Wt(gb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();gb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class W2{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(mb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ll(n)?_e(mb,"Ignoring IndexedDB error during garbage collection: ",n):await Vl(n)}await this.Vr(3e5)})}}class Q2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return ce.resolve(Rd.ce);const i=new Y2(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ce.resolve(pb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pb):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a))).next(b=>(i=b,d=Date.now(),this.removeTargets(e,i,n))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(g=Date.now(),sl()<=ze.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ce.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b})))}}function K2(t,e){return new Q2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.changes=new lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ce.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&hc(i.mutation,a,Jn.empty(),pt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,$e()).next(()=>i))}getLocalViewOfDocuments(e,n,i=$e()){const a=Ga();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=tc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Ga();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,$e()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=ns();const c=cc(),d=function(){return cc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof la)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),hc(v.mutation,g,v.mutation.getFieldMask(),pt.now())):c.set(g.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new Z2(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=cc();let a=new xt((c,d)=>c-d),l=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||Jn.empty();v=d.applyToLocalView(g,v),i.set(p,v);const b=(a.get(d.batchId)||$e()).add(p);a=a.insert(d.batchId,b)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,b=RS();v.forEach(T=>{if(!l.has(T)){const C=MS(n.get(T),i.get(T));C!==null&&b.set(T,C),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ce.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Se.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):ce.resolve(Ga());let d=_c,p=l;return c.next(g=>ce.forEach(g,(v,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(v)?ce.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,$e())).next(v=>({batchId:d,changes:AS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Se(n)).next(i=>{let a=tc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=tc();return this.indexManager.getCollectionParents(e,l).next(d=>ce.forEach(d,p=>{const g=function(b,T){return new jl(T,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((b,T)=>{c=c.insert(b,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Cn.newInvalidDocument(v)))});let d=tc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&hc(v.mutation,g,Jn.empty(),pt.now()),Od(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ce.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:si(a.createTime)}}(n)),ce.resolve()}getNamedQuery(e,n){return ce.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:F2(a.bundledQuery),readTime:si(a.readTime)}}(n)),ce.resolve()}}/**
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
 */class tP{constructor(){this.overlays=new xt(Se.comparator),this.qr=new Map}getOverlay(e,n){return ce.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ga();return ce.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),ce.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),ce.resolve()}getOverlaysForCollection(e,n,i){const a=Ga(),l=n.length+1,c=new Se(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ce.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new xt((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Ga(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ga(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return ce.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new v2(n,i));let l=this.qr.get(n);l===void 0&&(l=$e(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class nP{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return ce.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ce.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.Qr=new Wt(on.$r),this.Ur=new Wt(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new on(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new on(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Se(new gt([])),i=new on(n,e),a=new on(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Se(new gt([])),i=new on(n,e),a=new on(n,e+1);let l=$e();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new on(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class on{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Se.comparator(e.key,n.key)||Fe(e.Yr,n.Yr)}static Kr(e,n){return Fe(e.Yr,n.Yr)||Se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(on.$r)}checkEmpty(e){return ce.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new _2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ce.resolve(c)}lookupMutationBatch(e,n){return ce.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return ce.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ce.resolve(this.mutationQueue.length===0?Py:this.tr-1)}getAllMutationBatches(e){return ce.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new on(n,0),a=new on(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),ce.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Wt(Fe);return n.forEach(a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),ce.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Se.isDocumentKey(l)||(l=l.child(""));const c=new on(new Se(l),0);let d=new Wt(Fe);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),ce.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){rt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return ce.forEach(n.mutations,a=>{const l=new on(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new on(n,0),a=this.Zr.firstAfterOrEqual(i);return ce.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ce.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.ri=e,this.docs=function(){return new xt(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ce.resolve(i?i.document.mutableCopy():Cn.newInvalidDocument(n))}getEntries(e,n){let i=ns();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Cn.newInvalidDocument(a))}),ce.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=ns();const c=n.path,d=new Se(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||ON(kN(v),i)<=0||(a.has(v.key)||Od(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ce.resolve(l)}getAllFromCollectionGroup(e,n,i,a){De(9500)}ii(e,n){return ce.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new sP(this)}getSize(e){return ce.resolve(this.size)}}class sP extends X2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),ce.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.persistence=e,this.si=new lo(n=>jy(n),Uy),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.oi=0,this._i=new $y,this.targetCount=0,this.ai=xl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),ce.resolve()}getLastRemoteSnapshotVersion(e){return ce.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ce.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ce.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),ce.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ce.resolve()}updateTargetData(e,n){return this.Pr(n),ce.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ce.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ce.waitFor(l).next(()=>a)}getTargetCount(e){return ce.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return ce.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),ce.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ce.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ce.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return ce.resolve(i)}containsKey(e,n){return ce.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Rd(0),this.li=!1,this.li=!0,this.hi=new nP,this.referenceDelegate=e(this),this.Pi=new aP(this),this.indexManager=new $2,this.remoteDocumentCache=function(a){return new iP(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new z2(n),this.Ii=new eP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new rP(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){_e("MemoryPersistence","Starting transaction:",e);const a=new oP(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return ce.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class oP extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class Hy{constructor(e){this.persistence=e,this.Ri=new $y,this.Vi=null}static mi(e){return new Hy(e)}get fi(){if(this.Vi)return this.Vi;throw De(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),ce.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),ce.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ce.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ce.forEach(this.fi,i=>{const a=Se.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Oe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ce.or([()=>ce.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ld{constructor(e,n){this.persistence=e,this.pi=new lo(i=>LN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=K2(this,n)}static mi(e,n){return new ld(e,n)}Ei(){}di(e){return ce.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return ce.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?ce.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Oe.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ce.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ce.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jf(e.data.value)),n}br(e,n,i){return ce.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return ce.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=$e(),a=$e();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Gy(e,n.fromCache,i,a)}}/**
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
 */class lP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return LD()?8:PN(In())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new lP;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(sl()<=ze.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",al(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ce.resolve()):(sl()<=ze.DEBUG&&_e("QueryEngine","Query:",al(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(sl()<=ze.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",al(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ii(n))):ce.resolve())}ys(e,n){if(ib(n))return ce.resolve(null);let i=ii(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Kg(n,null,"F"),i=ii(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=$e(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,Kg(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return ib(n)||a.isEqual(Oe.min())?ce.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?ce.resolve(null):(sl()<=ze.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),al(n)),this.vs(e,c,n,DN(a,_c)).next(d=>d))})}Ds(e,n){let i=new Wt(SS(e));return n.forEach((a,l)=>{Od(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return sl()<=ze.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",al(n)),this.ps.getDocumentsMatchingQuery(e,n,Xs.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="LocalStore",cP=3e8;class hP{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new xt(Fe),this.xs=new lo(l=>jy(l),Uy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function fP(t,e,n,i){return new hP(t,e,n,i)}async function WS(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=$e();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function dP(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const b=g.batch,T=b.keys();let C=ce.resolve();return T.forEach(V=>{C=C.next(()=>v.getEntry(p,V)).next(z=>{const O=g.docVersions.get(V);rt(O!==null,48541),z.version.compareTo(O)<0&&(b.applyToRemoteDocument(z,g),z.isValidDocument()&&(z.setReadTime(g.commitVersion),v.addEntry(z)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=$e();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function QS(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function pP(t,e){const n=Me(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,b)=>{const T=a.get(b);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,b)));let C=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?C=C.withResumeToken(_n.EMPTY_BYTE_STRING,Oe.min()).withLastLimboFreeSnapshotVersion(Oe.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,i)),a=a.insert(b,C),function(z,O,N){return z.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=cP?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(T,C,v)&&d.push(n.Pi.updateTargetData(l,C))});let p=ns(),g=$e();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(mP(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Oe.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(b=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return ce.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function mP(t,e,n){let i=$e(),a=$e();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=ns();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Oe.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):_e(Yy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function gP(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Py),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function yP(t,e){const n=Me(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,ce.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Fs(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function ty(t,e,n){const i=Me(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ll(c))throw c;_e(Yy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function yb(t,e,n){const i=Me(t);let a=Oe.min(),l=$e();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const b=Me(p),T=b.xs.get(v);return T!==void 0?ce.resolve(b.Ms.get(T)):b.Pi.getTargetData(g,v)}(i,c,ii(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Oe.min(),n?l:$e())).next(d=>(_P(i,n2(e),d),{documents:d,Qs:l})))}function _P(t,e,n){let i=t.Os.get(e)||Oe.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class _b{constructor(){this.activeTargetIds=l2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vP{constructor(){this.Mo=new _b,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new _b,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EP{Oo(e){}shutdown(){}}/**
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
 */const vb="ConnectivityMonitor";class Eb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(vb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(vb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wf=null;function ny(){return wf===null?wf=function(){return 268435456+Math.round(2147483648*Math.random())}():wf++,"0x"+wf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="RestConnection",wP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===rd?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=ny(),d=this.zo(e,n.toUriEncodedString());_e(dg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Ol(g);return this.Jo(e,d,p,i,v).then(b=>(_e(dg,`Received RPC '${e}' ${c}: `,b),b),b=>{throw wl(dg,`RPC '${e}' ${c} failed with error: `,b,"url: ",d,"request:",i),b})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=wP[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class SP extends bP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=ny();return new Promise((d,p)=>{const g=new X1;g.setWithCredentials(!0),g.listenOnce(Z1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Lf.NO_ERROR:const b=g.getResponseJson();_e(bn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),d(b);break;case Lf.TIMEOUT:_e(bn,`RPC '${e}' ${c} timed out`),p(new ye(oe.DEADLINE_EXCEEDED,"Request time out"));break;case Lf.HTTP_ERROR:const T=g.getStatus();if(_e(bn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const z=function(N){const L=N.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf(L)>=0?L:oe.UNKNOWN}(V.status);p(new ye(z,V.message))}else p(new ye(oe.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(oe.UNAVAILABLE,"Connection failed."));break;default:De(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{_e(bn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);_e(bn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=ny(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=tS(),d=eS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");_e(bn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const b=c.createWebChannel(v,p);this.I_(b);let T=!1,C=!1;const V=new TP({Yo:O=>{C?_e(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,O):(T||(_e(bn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),T=!0),_e(bn,`RPC '${e}' stream ${a} sending:`,O),b.send(O))},Zo:()=>b.close()}),z=(O,N,L)=>{O.listen(N,U=>{try{L(U)}catch(te){setTimeout(()=>{throw te},0)}})};return z(b,ec.EventType.OPEN,()=>{C||(_e(bn,`RPC '${e}' stream ${a} transport opened.`),V.o_())}),z(b,ec.EventType.CLOSE,()=>{C||(C=!0,_e(bn,`RPC '${e}' stream ${a} transport closed`),V.a_(),this.E_(b))}),z(b,ec.EventType.ERROR,O=>{C||(C=!0,wl(bn,`RPC '${e}' stream ${a} transport errored. Name:`,O.name,"Message:",O.message),V.a_(new ye(oe.UNAVAILABLE,"The operation could not be completed")))}),z(b,ec.EventType.MESSAGE,O=>{var N;if(!C){const L=O.data[0];rt(!!L,16349);const U=L,te=(U==null?void 0:U.error)||((N=U[0])==null?void 0:N.error);if(te){_e(bn,`RPC '${e}' stream ${a} received error:`,te);const $=te.status;let ne=function(D){const k=Lt[D];if(k!==void 0)return VS(k)}($),R=te.message;ne===void 0&&(ne=oe.INTERNAL,R="Unknown error status: "+$+" with message "+te.message),C=!0,V.a_(new ye(ne,R)),b.close()}else _e(bn,`RPC '${e}' stream ${a} received:`,L),V.u_(L)}}),z(d,J1.STAT_EVENT,O=>{O.stat===Fg.PROXY?_e(bn,`RPC '${e}' stream ${a} detected buffering proxy`):O.stat===Fg.NOPROXY&&_e(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{V.__()},0),V}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function pg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){return new C2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="PersistentStream";class XS{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new KS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===oe.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ye(oe.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return _e(wb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(_e(wb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xP extends XS{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=k2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Oe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Oe.min():c.readTime?si(c.readTime):Oe.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=ey(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Wg(p)?{documents:N2(l,p)}:{query:P2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=US(l,c.resumeToken);const g=Xg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Oe.min())>0){d.readTime=od(l,c.snapshotVersion.toTimestamp());const g=Xg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=L2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=ey(this.serializer),n.removeTarget=e,this.q_(n)}}class AP extends XS{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return rt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){rt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=M2(e.writeResults,e.commitTime),i=si(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=ey(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>O2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{}class CP extends RP{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,Zg(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(oe.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,Zg(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(oe.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class IP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ts(n),this.aa=!1):_e("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="RemoteStore";class DP{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{uo(this)&&(_e(so,"Restarting streams for network reachability change."),await async function(p){const g=Me(p);g.Ea.add(4),await qc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ld(g)}(this))})}),this.Ra=new IP(i,a)}}async function Ld(t){if(uo(t))for(const e of t.da)await e(!0)}async function qc(t){for(const e of t.da)await e(!1)}function ZS(t,e){const n=Me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Xy(n)?Ky(n):Ul(n).O_()&&Qy(n,e))}function Wy(t,e){const n=Me(t),i=Ul(n);n.Ia.delete(e),i.O_()&&JS(n,e),n.Ia.size===0&&(i.O_()?i.L_():uo(n)&&n.Ra.set("Unknown"))}function Qy(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ul(t).Y_(e)}function JS(t,e){t.Va.Ue(e),Ul(t).Z_(e)}function Ky(t){t.Va=new S2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ul(t).start(),t.Ra.ua()}function Xy(t){return uo(t)&&!Ul(t).x_()&&t.Ia.size>0}function uo(t){return Me(t).Ea.size===0}function ex(t){t.Va=void 0}async function kP(t){t.Ra.set("Online")}async function OP(t){t.Ia.forEach((e,n)=>{Qy(t,e)})}async function MP(t,e){ex(t),Xy(t)?(t.Ra.ha(e),Ky(t)):t.Ra.set("Unknown")}async function NP(t,e,n){if(t.Ra.set("Online"),e instanceof jS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){_e(so,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ud(t,i)}else if(e instanceof Bf?t.Va.Ze(e):e instanceof LS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Oe.min()))try{const i=await QS(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(_n.EMPTY_BYTE_STRING,v.snapshotVersion)),JS(l,p);const b=new Fs(v.target,p,g,v.sequenceNumber);Qy(l,b)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){_e(so,"Failed to raise snapshot:",i),await ud(t,i)}}async function ud(t,e,n){if(!Ll(e))throw e;t.Ea.add(1),await qc(t),t.Ra.set("Offline"),n||(n=()=>QS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e(so,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ld(t)})}function tx(t,e){return e().catch(n=>ud(t,n,e))}async function jd(t){const e=Me(t),n=ta(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Py;for(;PP(e);)try{const a=await gP(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,VP(e,a)}catch(a){await ud(e,a)}nx(e)&&rx(e)}function PP(t){return uo(t)&&t.Ta.length<10}function VP(t,e){t.Ta.push(e);const n=ta(t);n.O_()&&n.X_&&n.ea(e.mutations)}function nx(t){return uo(t)&&!ta(t).x_()&&t.Ta.length>0}function rx(t){ta(t).start()}async function LP(t){ta(t).ra()}async function jP(t){const e=ta(t);for(const n of t.Ta)e.ea(n.mutations)}async function UP(t,e,n){const i=t.Ta.shift(),a=By.from(i,e,n);await tx(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await jd(t)}async function qP(t,e){e&&ta(t).X_&&await async function(i,a){if(function(c){return w2(c)&&c!==oe.ABORTED}(a.code)){const l=i.Ta.shift();ta(i).B_(),await tx(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await jd(i)}}(t,e),nx(t)&&rx(t)}async function bb(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),_e(so,"RemoteStore received new credentials");const i=uo(n);n.Ea.add(3),await qc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ld(n)}async function BP(t,e){const n=Me(t);e?(n.Ea.delete(2),await Ld(n)):e||(n.Ea.add(2),await qc(n),n.Ra.set("Unknown"))}function Ul(t){return t.ma||(t.ma=function(n,i,a){const l=Me(n);return l.sa(),new xP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:kP.bind(null,t),t_:OP.bind(null,t),r_:MP.bind(null,t),H_:NP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Xy(t)?Ky(t):t.Ra.set("Unknown")):(await t.ma.stop(),ex(t))})),t.ma}function ta(t){return t.fa||(t.fa=function(n,i,a){const l=Me(n);return l.sa(),new AP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:LP.bind(null,t),r_:qP.bind(null,t),ta:jP.bind(null,t),na:UP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await jd(t)):(await t.fa.stop(),t.Ta.length>0&&(_e(so,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new Zy(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jy(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Ll(t))return new ye(oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static emptySet(e){return new pl(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Se.comparator(n.key,i.key):(n,i)=>Se.comparator(n.key,i.key),this.keyedMap=tc(),this.sortedSet=new xt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pl)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new pl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.ga=new xt(Se.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):De(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Al{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Al(e,n,pl.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class FP{constructor(){this.queries=Sb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=Me(n),l=a.queries;a.queries=Sb(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ye(oe.ABORTED,"Firestore shutting down"))}}function Sb(){return new lo(t=>TS(t),kd)}async function e_(t,e){const n=Me(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new zP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=Jy(c,`Initialization of query '${al(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&n_(n)}async function t_(t,e){const n=Me(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function $P(t,e){const n=Me(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&n_(n)}function HP(t,e,n){const i=Me(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function n_(t){t.Ca.forEach(e=>{e.next()})}var ry,xb;(xb=ry||(ry={})).Ma="default",xb.Cache="cache";class r_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Al(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Al.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ry.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.key=e}}class sx{constructor(e){this.key=e}}class GP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=$e(),this.mutatedKeys=$e(),this.eu=SS(e),this.tu=new pl(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Tb,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,b)=>{const T=a.get(v),C=Od(this.query,b)?b:null,V=!!T&&this.mutatedKeys.has(T.key),z=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let O=!1;T&&C?T.data.isEqual(C.data)?V!==z&&(i.track({type:3,doc:C}),O=!0):this.su(T,C)||(i.track({type:2,doc:C}),O=!0,(p&&this.eu(C,p)>0||g&&this.eu(C,g)<0)&&(d=!0)):!T&&C?(i.track({type:0,doc:C}),O=!0):T&&!C&&(i.track({type:1,doc:T}),O=!0,(p||g)&&(d=!0)),O&&(C?(c=c.add(C),l=z?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,b)=>function(C,V){const z=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return De(20277,{Rt:O})}};return z(C)-z(V)}(v.type,b.type)||this.eu(v.doc,b.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Al(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Tb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=$e(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new sx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new ix(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=$e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Al.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const i_="SyncEngine";class YP{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class WP{constructor(e){this.key=e,this.hu=!1}}class QP{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new lo(d=>TS(d),kd),this.Iu=new Map,this.Eu=new Set,this.du=new xt(Se.comparator),this.Au=new Map,this.Ru=new $y,this.Vu={},this.mu=new Map,this.fu=xl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KP(t,e,n=!0){const i=hx(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await ax(i,e,n,!0),a}async function XP(t,e){const n=hx(t);await ax(n,e,!0,!1)}async function ax(t,e,n,i){const a=await yP(t.localStore,ii(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await ZP(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&ZS(t.remoteStore,a),d}async function ZP(t,e,n,i,a){t.pu=(b,T,C)=>async function(z,O,N,L){let U=O.view.ru(N);U.Cs&&(U=await yb(z.localStore,O.query,!1).then(({documents:R})=>O.view.ru(R,U)));const te=L&&L.targetChanges.get(O.targetId),$=L&&L.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(U,z.isPrimaryClient,te,$);return Rb(z,O.targetId,ne.au),ne.snapshot}(t,b,T,C);const l=await yb(t.localStore,e,!0),c=new GP(e,l.Qs),d=c.ru(l.documents),p=Uc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Rb(t,n,g.au);const v=new YP(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function JP(t,e,n){const i=Me(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!kd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await ty(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&Wy(i.remoteStore,a.targetId),iy(i,a.targetId)}).catch(Vl)):(iy(i,a.targetId),await ty(i.localStore,a.targetId,!0))}async function e4(t,e){const n=Me(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Wy(n.remoteStore,i.targetId))}async function t4(t,e,n){const i=l4(t);try{const a=await function(c,d){const p=Me(c),g=pt.now(),v=d.reduce((C,V)=>C.add(V.key),$e());let b,T;return p.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=ns(),z=$e();return p.Ns.getEntries(C,v).next(O=>{V=O,V.forEach((N,L)=>{L.isValidDocument()||(z=z.add(N))})}).next(()=>p.localDocuments.getOverlayedDocuments(C,V)).next(O=>{b=O;const N=[];for(const L of d){const U=g2(L,b.get(L.key).overlayedDocument);U!=null&&N.push(new la(L.key,U,mS(U.value.mapValue),Rr.exists(!0)))}return p.mutationQueue.addMutationBatch(C,g,N,d)}).next(O=>{T=O;const N=O.applyToLocalDocumentSet(b,z);return p.documentOverlayCache.saveOverlays(C,O.batchId,N)})}).then(()=>({batchId:T.batchId,changes:AS(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new xt(Fe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await Bc(i,a.changes),await jd(i.remoteStore)}catch(a){const l=Jy(a,"Failed to persist write");n.reject(l)}}async function ox(t,e){const n=Me(t);try{const i=await pP(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(rt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?rt(c.hu,14607):a.removedDocuments.size>0&&(rt(c.hu,42227),c.hu=!1))}),await Bc(n,i,e)}catch(i){await Vl(i)}}function Ab(t,e,n){const i=Me(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Me(c);p.onlineState=d;let g=!1;p.queries.forEach((v,b)=>{for(const T of b.Sa)T.va(d)&&(g=!0)}),g&&n_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function n4(t,e,n){const i=Me(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new xt(Se.comparator);c=c.insert(l,Cn.newNoDocument(l,Oe.min()));const d=$e().add(l),p=new Pd(Oe.min(),new Map,new xt(Fe),c,d);await ox(i,p),i.du=i.du.remove(l),i.Au.delete(e),s_(i)}else await ty(i.localStore,e,!1).then(()=>iy(i,e,n)).catch(Vl)}async function r4(t,e){const n=Me(t),i=e.batch.batchId;try{const a=await dP(n.localStore,e);ux(n,i,null),lx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bc(n,a)}catch(a){await Vl(a)}}async function i4(t,e,n){const i=Me(t);try{const a=await function(c,d){const p=Me(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(b=>(rt(b!==null,37113),v=b.keys(),p.mutationQueue.removeMutationBatch(g,b))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);ux(i,e,n),lx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Bc(i,a)}catch(a){await Vl(a)}}function lx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ux(t,e,n){const i=Me(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function iy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||cx(t,i)})}function cx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Wy(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),s_(t))}function Rb(t,e,n){for(const i of n)i instanceof ix?(t.Ru.addReference(i.key,e),s4(t,i)):i instanceof sx?(_e(i_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||cx(t,i.key)):De(19791,{wu:i})}function s4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(_e(i_,"New document in limbo: "+n),t.Eu.add(i),s_(t))}function s_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Se(gt.fromString(e)),i=t.fu.next();t.Au.set(i,new WP(n)),t.du=t.du.insert(n,i),ZS(t.remoteStore,new Fs(ii(Dd(n.path)),i,"TargetPurposeLimboResolution",Rd.ce))}}async function Bc(t,e,n){const i=Me(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const b=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){a.push(g);const b=Gy.As(p.targetId,g);l.push(b)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=Me(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>ce.forEach(g,T=>ce.forEach(T.Es,C=>v.persistence.referenceDelegate.addReference(b,T.targetId,C)).next(()=>ce.forEach(T.ds,C=>v.persistence.referenceDelegate.removeReference(b,T.targetId,C)))))}catch(b){if(!Ll(b))throw b;_e(Yy,"Failed to update sequence numbers: "+b)}for(const b of g){const T=b.targetId;if(!b.fromCache){const C=v.Ms.get(T),V=C.snapshotVersion,z=C.withLastLimboFreeSnapshotVersion(V);v.Ms=v.Ms.insert(T,z)}}}(i.localStore,l))}async function a4(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){_e(i_,"User change. New user:",e.toKey());const i=await WS(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ye(oe.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Bc(n,i.Ls)}}function o4(t,e){const n=Me(t),i=n.Au.get(e);if(i&&i.hu)return $e().add(i.key);{let a=$e();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function hx(t){const e=Me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ox.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n4.bind(null,e),e.Pu.H_=$P.bind(null,e.eventManager),e.Pu.yu=HP.bind(null,e.eventManager),e}function l4(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i4.bind(null,e),e}class cd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return fP(this.persistence,new uP,e.initialUser,this.serializer)}Cu(e){return new YS(Hy.mi,this.serializer)}Du(e){return new vP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cd.provider={build:()=>new cd};class u4 extends cd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){rt(this.persistence.referenceDelegate instanceof ld,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new W2(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?qn.withCacheSize(this.cacheSizeBytes):qn.DEFAULT;return new YS(i=>ld.mi(i,n),this.serializer)}}class sy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ab(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=a4.bind(null,this.syncEngine),await BP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FP}()}createDatastore(e){const n=Vd(e.databaseInfo.databaseId),i=function(l){return new SP(l)}(e.databaseInfo);return function(l,c,d,p){return new CP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new DP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Ab(this.syncEngine,n,0),function(){return Eb.v()?new Eb:new EP}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const b=new QP(a,l,c,d,p,g);return v&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=Me(a);_e(so,"RemoteStore shutting down."),l.Ea.add(5),await qc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}sy.provider={build:()=>new sy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class a_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="FirestoreClient";class c4{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Rn.UNAUTHENTICATED,this.clientId=Ny.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{_e(na,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(_e(na,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Jy(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function mg(t,e){t.asyncQueue.verifyOperationInProgress(),_e(na,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await WS(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h4(t);_e(na,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>bb(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>bb(e.remoteStore,a)),t._onlineComponents=e}async function h4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_e(na,"Using user provided OfflineComponentProvider");try{await mg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===oe.FAILED_PRECONDITION||a.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;wl("Error using user provided cache. Falling back to memory cache: "+n),await mg(t,new cd)}}else _e(na,"Using default OfflineComponentProvider"),await mg(t,new u4(void 0));return t._offlineComponents}async function fx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_e(na,"Using user provided OnlineComponentProvider"),await Cb(t,t._uninitializedComponentsProvider._online)):(_e(na,"Using default OnlineComponentProvider"),await Cb(t,new sy))),t._onlineComponents}function f4(t){return fx(t).then(e=>e.syncEngine)}async function hd(t){const e=await fx(t),n=e.eventManager;return n.onListen=KP.bind(null,e.syncEngine),n.onUnlisten=JP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=e4.bind(null,e.syncEngine),n}function d4(t,e,n={}){const i=new Xi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new a_({next:T=>{v.Nu(),c.enqueueAndForget(()=>t_(l,b));const C=T.docs.has(d);!C&&T.fromCache?g.reject(new ye(oe.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&T.fromCache&&p&&p.source==="server"?g.reject(new ye(oe.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),b=new r_(Dd(d.path),v,{includeMetadataChanges:!0,qa:!0});return e_(l,b)}(await hd(t),t.asyncQueue,e,n,i)),i.promise}function p4(t,e,n={}){const i=new Xi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new a_({next:T=>{v.Nu(),c.enqueueAndForget(()=>t_(l,b)),T.fromCache&&p.source==="server"?g.reject(new ye(oe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),b=new r_(d,v,{includeMetadataChanges:!0,qa:!0});return e_(l,b)}(await hd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function dx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="firestore.googleapis.com",Db=!0;class kb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=px,this.ssl=Db}else this.host=e.host,this.ssl=e.ssl??Db;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=GS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G2)throw new ye(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ud{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new vN;switch(i.type){case"firstParty":return new TN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Ib.get(n);i&&(_e("ComponentProvider","Removing Datastore"),Ib.delete(n),i.terminate())}(this),Promise.resolve()}}function m4(t,e,n,i={}){var g;t=er(t,Ud);const a=Ol(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(l1(`https://${d}`),u1("Firestore",!0)),l.host!==px&&l.host!==d&&wl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!eo(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,b;if(typeof i.mockUserToken=="string")v=i.mockUserToken,b=Rn.MOCK_USER;else{v=CD(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ye(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Rn(T)}t._authCredentials=new EN(new rS(v,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ua(this.firestore,e,this._query)}}class Ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Lc(n,Ct._jsonSchema))return new Ct(e,i||null,new Se(gt.fromString(n.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:Bt("string",Ct._jsonSchemaVersion),referencePath:Bt("string")};class Qs extends ua{constructor(e,n,i){super(e,n,Dd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Se(e))}withConverter(e){return new Qs(this.firestore,e,this._path)}}function ai(t,e,...n){if(t=zt(t),iS("collection","path",e),t instanceof Ud){const i=gt.fromString(e,...n);return $w(i),new Qs(t,null,i)}{if(!(t instanceof Ct||t instanceof Qs))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(gt.fromString(e,...n));return $w(i),new Qs(t.firestore,null,i)}}function Cr(t,e,...n){if(t=zt(t),arguments.length===1&&(e=Ny.newId()),iS("doc","path",e),t instanceof Ud){const i=gt.fromString(e,...n);return Fw(i),new Ct(t,null,new Se(i))}{if(!(t instanceof Ct||t instanceof Qs))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(gt.fromString(e,...n));return Fw(i),new Ct(t.firestore,t instanceof Qs?t.converter:null,new Se(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="AsyncQueue";class Mb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new KS(this,"async_queue_retry"),this._c=()=>{const i=pg();i&&_e(Ob,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=pg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=pg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ll(e))throw e;_e(Ob,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,ts("INTERNAL UNHANDLED ERROR: ",Nb(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Zy.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&De(47125,{Pc:Nb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Nb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Pb(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class ra extends Ud{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new Mb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mb(e),this._firestoreClient=void 0,await e}}}function mx(t,e){const n=typeof t=="object"?t:d1(),i=typeof t=="string"?t:rd,a=Sy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=AD("firestore");l&&m4(a,...l)}return a}function qd(t){if(t._terminated)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||g4(t),t._firestoreClient}function g4(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new qN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,dx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new c4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gr(_n.fromBase64String(e))}catch(n){throw new ye(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gr(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lc(e,gr._jsonSchema))return gr.fromBase64String(e.bytes)}}gr._jsonSchemaVersion="firestore/bytes/1.0",gr._jsonSchema={type:Bt("string",gr._jsonSchemaVersion),bytes:Bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oi._jsonSchemaVersion}}static fromJSON(e){if(Lc(e,oi._jsonSchema))return new oi(e.latitude,e.longitude)}}oi._jsonSchemaVersion="firestore/geoPoint/1.0",oi._jsonSchema={type:Bt("string",oi._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
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
 */class li{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lc(e,li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new li(e.vectorValues);throw new ye(oe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}li._jsonSchemaVersion="firestore/vectorValue/1.0",li._jsonSchema={type:Bt("string",li._jsonSchemaVersion),vectorValues:Bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=/^__.*__$/;class _4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new la(e,this.data,this.fieldMask,n,this.fieldTransforms):new jc(e,this.data,n,this.fieldTransforms)}}class gx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new la(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw De(40011,{Ac:t})}}class o_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new o_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(yx(this.Ac)&&y4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class v4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Vd(e)}Cc(e,n,i,a=!1){return new o_({Ac:e,methodName:n,Dc:i,path:yn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fd(t){const e=t._freezeSettings(),n=Vd(t._databaseId);return new v4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _x(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);u_("Data must be an object, but it was:",c,i);const d=vx(i,c);let p,g;if(l.merge)p=new Jn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const b of l.mergeFields){const T=ay(e,b,n);if(!c.contains(T))throw new ye(oe.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);wx(v,T)||v.push(T)}p=new Jn(v),g=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=c.fieldTransforms;return new _4(new Bn(d),p,g)}class $d extends zd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $d}}class l_ extends zd{_toFieldTransform(e){return new f2(e.path,new Tc)}isEqual(e){return e instanceof l_}}function E4(t,e,n,i){const a=t.Cc(1,e,n);u_("Data must be an object, but it was:",a,i);const l=[],c=Bn.empty();oa(i,(p,g)=>{const v=c_(e,p,n);g=zt(g);const b=a.yc(v);if(g instanceof $d)l.push(v);else{const T=zc(g,b);T!=null&&(l.push(v),c.set(v,T))}});const d=new Jn(l);return new gx(c,d,a.fieldTransforms)}function w4(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[ay(e,i,n)],p=[a];if(l.length%2!=0)throw new ye(oe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(ay(e,l[T])),p.push(l[T+1]);const g=[],v=Bn.empty();for(let T=d.length-1;T>=0;--T)if(!wx(g,d[T])){const C=d[T];let V=p[T];V=zt(V);const z=c.yc(C);if(V instanceof $d)g.push(C);else{const O=zc(V,z);O!=null&&(g.push(C),v.set(C,O))}}const b=new Jn(g);return new gx(v,b,c.fieldTransforms)}function b4(t,e,n,i=!1){return zc(n,t.Cc(i?4:3,e))}function zc(t,e){if(Ex(t=zt(t)))return u_("Unsupported field value:",e,t),vx(t,e);if(t instanceof zd)return function(i,a){if(!yx(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=zc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=zt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return u2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=pt.fromDate(i);return{timestampValue:od(a.serializer,l)}}if(i instanceof pt){const l=new pt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:od(a.serializer,l)}}if(i instanceof oi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof gr)return{bytesValue:US(a.serializer,i._byteString)};if(i instanceof Ct){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Fy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof li)return function(c,d){return{mapValue:{fields:{[dS]:{stringValue:pS},[id]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return qy(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${Ad(i)}`)}(t,e)}function vx(t,e){const n={};return oS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oa(t,(i,a)=>{const l=zc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Ex(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof oi||t instanceof gr||t instanceof Ct||t instanceof zd||t instanceof li)}function u_(t,e,n){if(!Ex(n)||!sS(n)){const i=Ad(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function ay(t,e,n){if((e=zt(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return c_(t,e);throw fd("Field path arguments must be of type string or ",t,!1,void 0,n)}const T4=new RegExp("[~\\*/\\[\\]]");function c_(t,e,n){if(e.search(T4)>=0)throw fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bd(...e.split("."))._internalPath}catch{throw fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fd(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ye(oe.INVALID_ARGUMENT,d+t+p)}function wx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S4 extends bx{data(){return super.data()}}function Hd(t,e){return typeof e=="string"?c_(t,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class h_{}class Sx extends h_{}function Ks(t,e,...n){let i=[];e instanceof h_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof f_).length,d=l.filter(p=>p instanceof Gd).length;if(c>1||c>0&&d>0)throw new ye(oe.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Gd extends Sx{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Gd(e,n,i)}_apply(e){const n=this._parse(e);return xx(e._query,n),new ua(e.firestore,e.converter,Qg(e._query,n))}_parse(e){const n=Fd(e.firestore);return function(l,c,d,p,g,v,b){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ye(oe.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Lb(b,v);const V=[];for(const z of b)V.push(Vb(p,l,z));T={arrayValue:{values:V}}}else T=Vb(p,l,b)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Lb(b,v),T=b4(d,c,b,v==="in"||v==="not-in");return Ut.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ia(t,e,n){const i=e,a=Hd("where",t);return Gd._create(a,i,n)}class f_ extends h_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new f_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:kr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)xx(c,p),c=Qg(c,p)}(e._query,n),new ua(e.firestore,e.converter,Qg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class d_ extends Sx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new d_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ye(oe.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ye(oe.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bc(l,c)}(e._query,this._field,this._direction);return new ua(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new jl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function p_(t,e="asc"){const n=e,i=Hd("orderBy",t);return d_._create(i,n)}function Vb(t,e,n){if(typeof(n=zt(n))=="string"){if(n==="")throw new ye(oe.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bS(e)&&n.indexOf("/")!==-1)throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(gt.fromString(n));if(!Se.isDocumentKey(i))throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zw(t,new Se(i))}if(n instanceof Ct)return Zw(t,n._key);throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ad(n)}.`)}function Lb(t,e){if(!Array.isArray(t)||t.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ye(oe.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ye(oe.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class x4{convertValue(e,n="none"){switch(ea(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw De(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return oa(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[id].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>Ot(c.doubleValue));return new li(n)}convertGeoPoint(e){return new oi(Ot(e.latitude),Ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Id(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(vc(e));default:return null}}convertTimestamp(e){const n=Zs(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=gt.fromString(e);rt(HS(i),9688,{name:e});const a=new Ec(i.get(1),i.get(3)),l=new Se(i.popFirst(5));return a.isEqual(n)||ts(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class rc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qa extends bx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Hd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qa._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:Bt("string",Qa._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class zf extends Qa{data(e={}){return super.data(e)}}class Ka{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new rc(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new zf(this._firestore,this._userDataWriter,i.key,i,new rc(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new zf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new rc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new zf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new rc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:A4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ka._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ny.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function A4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return De(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){t=er(t,Ct);const e=er(t.firestore,ra);return d4(qd(e),t._key).then(n=>Rx(e,t,n))}Ka._jsonSchemaVersion="firestore/querySnapshot/1.0",Ka._jsonSchema={type:Bt("string",Ka._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class g_ extends x4{constructor(e){super(),this.firestore=e}convertBytes(e){return new gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function oy(t){t=er(t,ua);const e=er(t.firestore,ra),n=qd(e),i=new g_(e);return Tx(t._query),p4(n,t._query).then(a=>new Ka(e,i,t,a))}function R4(t,e,n){t=er(t,Ct);const i=er(t.firestore,ra),a=Ax(t.converter,e);return y_(i,[_x(Fd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Rr.none())])}function Xa(t,e,n,...i){t=er(t,Ct);const a=er(t.firestore,ra),l=Fd(a);let c;return c=typeof(e=zt(e))=="string"||e instanceof Bd?w4(l,"updateDoc",t._key,e,n,i):E4(l,"updateDoc",t._key,e),y_(a,[c.toMutation(t._key,Rr.exists(!0))])}function C4(t,e){const n=er(t.firestore,ra),i=Cr(t),a=Ax(t.converter,e);return y_(n,[_x(Fd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Rr.exists(!1))]).then(()=>i)}function Yd(t,...e){var p,g,v;t=zt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Pb(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Pb(e[i])){const b=e[i];e[i]=(p=b.next)==null?void 0:p.bind(b),e[i+1]=(g=b.error)==null?void 0:g.bind(b),e[i+2]=(v=b.complete)==null?void 0:v.bind(b)}let l,c,d;if(t instanceof Ct)c=er(t.firestore,ra),d=Dd(t._key.path),l={next:b=>{e[i]&&e[i](Rx(c,t,b))},error:e[i+1],complete:e[i+2]};else{const b=er(t,ua);c=er(b.firestore,ra),d=b._query;const T=new g_(c);l={next:C=>{e[i]&&e[i](new Ka(c,T,b,C))},error:e[i+1],complete:e[i+2]},Tx(t._query)}return function(T,C,V,z){const O=new a_(z),N=new r_(C,O,V);return T.asyncQueue.enqueueAndForget(async()=>e_(await hd(T),N)),()=>{O.Nu(),T.asyncQueue.enqueueAndForget(async()=>t_(await hd(T),N))}}(qd(c),d,a,l)}function y_(t,e){return function(i,a){const l=new Xi;return i.asyncQueue.enqueueAndForget(async()=>t4(await f4(i),a,l)),l.promise}(qd(t),e)}function Rx(t,e,n){const i=n.docs.get(e._key),a=new g_(t);return new Qa(t,a,e._key,i,new rc(n.hasPendingWrites,n.fromCache),e.converter)}function jb(){return new l_("serverTimestamp")}(function(e,n=!0){(function(a){Pl=a})(Ml),vl(new to("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new ra(new wN(i.getProvider("auth-internal")),new SN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ec(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ys(Uw,qw,e),Ys(Uw,qw,"esm2020")})();const I4={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},__=f1(I4);mx(__);const qt=mx(__),ao=mN(__);function D4({onLoginSuccess:t}){const[e,n]=B.useState(""),[i,a]=B.useState(""),l=Ic(),c=()=>{l("/signup")},d=()=>{JO(ao,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(k4,{children:[_.jsxs(O4,{children:[_.jsxs(M4,{children:[_.jsx(N4,{children:"PDMS"}),_.jsx(P4,{children:"Pushcomz Design Management System"})]}),_.jsxs(V4,{children:[_.jsx(L4,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(j4,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(U4,{onClick:d,children:"로그인"}),_.jsxs(B4,{children:[_.jsx(z4,{children:"계정이 없습니까?"}),_.jsx(F4,{onClick:c,children:"등록하기"})]})]}),_.jsx(q4,{children:"© Pushcomz Corp."})]})}const k4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,O4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,M4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,N4=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,P4=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,V4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,L4=H.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,j4=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,U4=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,q4=H.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,B4=H.div`
  
`,z4=H.span`
  margin-right: 10px;
  font-size: 13px;
`,F4=H.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,Cx="./assets/logo-NEcdCz8m.svg";function $4(){const[t,e]=B.useState(""),[n,i]=B.useState(null),a=Ic();B.useEffect(()=>{const d=Td(ao,async p=>{if(p){p.displayName&&e(p.displayName);const g=await m_(Cr(qt,"users",p.uid));g.exists()?i(g.data().role):i(null)}else e(""),i(null)});return()=>d()},[]);const l=()=>{iM(ao).then(()=>{a("/")}).catch(d=>{alert("로그아웃 중 오류가 발생했습니다: "+d.message)})},c=d=>{switch(d){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(H4,{children:[_.jsx(G4,{src:Cx}),_.jsxs(Y4,{children:[_.jsxs(W4,{children:[_.jsx(Q4,{children:t}),"님(",c(n),") 환영합니다."]}),_.jsx(K4,{onClick:l,children:"로그아웃"}),_.jsx(X4,{})]})]})}const H4=H.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,G4=H.img``,Y4=H.div``,W4=H.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,Q4=H.span`
  font-weight: 700;
`,K4=H.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,X4=H.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,v_="./assets/url-icon-DJKri2bW.svg";function Z4({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(J4,{isCanceled:t.status==="취소",children:[_.jsx(Tr,{children:e}),_.jsx(Tr,{children:_.jsx(sV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(Tr,{children:c(t.request_date)}),_.jsx(eV,{children:c(t.completion_dt)}),_.jsx(tV,{children:c(t.open_dt)}),_.jsx(Tr,{children:t.task_form}),_.jsx(nV,{children:t.task_type}),_.jsx(rV,{children:_.jsxs(aV,{children:[t.emergency?_.jsx(Ix,{children:"긴급"}):"",_.jsx(oV,{onClick:d,children:t.requirement})]})}),_.jsx(Tr,{children:_.jsx(Ub,{href:t.url,target:"_blank"})}),_.jsx(iV,{children:_.jsx(lV,{onClick:d,children:t.note||""})}),_.jsx(Tr,{children:_.jsx(uV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status==="검수중"?"검수요청":t.status||"대기"})}),_.jsx(Tr,{children:t.assigned_designer||"미배정"}),_.jsx(Tr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(Ub,{href:t.result_url,target:"_blank"}):""}),_.jsx(Tr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(Dx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(cV,{children:"검수완료"}):""}),_.jsx(Tr,{children:_.jsx(kx,{onClick:()=>a(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(Tr,{children:_.jsx(Ox,{onClick:()=>i(t.id),children:"취소"})})]})}const J4=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Ix} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Dx}, ${kx}, ${Ox} {
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
`,Tr=H.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,eV=H.td`
  color: ${({theme:t})=>t.colors.red};
`,tV=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,nV=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,rV=H.td`
  line-height: 15px;
  text-align: left;
`,iV=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,sV=H.span`
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
`,aV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,oV=H.span`
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
`,Ix=H.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Ub=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${v_}) no-repeat center / contain;
`,lV=H.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`,uV=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,Dx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,cV=H.span`
  color: green;
  font-weight: bold;
`,kx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`,Ox=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`;function hV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(fV,{children:_.jsxs(dV,{children:[_.jsx(pV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Tn,{children:"번호"}),_.jsx(Tn,{children:"문서번호"}),_.jsx(Tn,{children:"요청일"}),_.jsxs(Tn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Tn,{children:"오픈일"}),_.jsx(Tn,{children:"업무형태"}),_.jsx(Tn,{children:"업무타입"}),_.jsx(Tn,{children:"작업항목"}),_.jsx(Tn,{children:"요청서 URL"}),_.jsx(Tn,{children:"메모"}),_.jsx(Tn,{children:"진행상태"}),_.jsx(Tn,{children:"디자이너"}),_.jsx(Tn,{children:"산출물 URL"}),_.jsx(Tn,{children:"검수"}),_.jsx(Tn,{children:"수정"}),_.jsx(Tn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(Z4,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const fV=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,dV=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,pV=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Tn=H.th`
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
`;function E_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(mV,{children:_.jsxs(gV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const mV=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,gV=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Mx="./assets/selectbox-arrow-BwC8UGU0.svg";function yV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const gg={},ic={};function Ya(t,e){try{const i=(gg[t]||(gg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in ic?ic[i]:qb(i,i.split(":"))}catch{if(t in ic)return ic[t];const n=t==null?void 0:t.match(_V);return n?qb(t,n.slice(1)):NaN}}const _V=/([+-]\d\d):?(\d\d)?/;function qb(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return ic[t]=n*60+i>0?n*60+i+a:n*60-i-a}class ti extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Ya(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),Nx(this),ly(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new ti(...n,e):new ti(Date.now(),e)}withTimeZone(e){return new ti(+this,e)}getTimezoneOffset(){const e=-Ya(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),ly(this),+this}[Symbol.for("constructDateFrom")](e){return new ti(+new Date(e),this.timeZone)}}const Bb=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!Bb.test(t))return;const e=t.replace(Bb,"$1UTC");ti.prototype[e]&&(t.startsWith("get")?ti.prototype[t]=function(){return this.internal[e]()}:(ti.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),vV(this),+this},ti.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),ly(this),+this}))});function ly(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Ya(t.timeZone,t)*60))}function vV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),Nx(t)}function Nx(t){const e=Ya(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,b=Math.round(-(Ya(t.timeZone,t)*60))%60;(b||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+b),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+b+v));const T=Ya(t.timeZone,t),C=T>0?Math.floor(T):Math.ceil(T),z=-new Date(+t).getTimezoneOffset()-C,O=C!==n,N=z-p;if(O&&N){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+N);const L=Ya(t.timeZone,t),U=L>0?Math.floor(L):Math.ceil(L),te=C-U;te&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+te),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+te))}}class An extends ti{static tz(e,...n){return n.length?new An(...n,e):new An(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${yV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new An(+this,e)}[Symbol.for("constructDateFrom")](e){return new An(+new Date(e),this.timeZone)}}const Px=6048e5,EV=864e5,zb=Symbol.for("constructDateFrom");function Qt(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&zb in t?t[zb](e):t instanceof Date?new t.constructor(e):new Date(e)}function ht(t,e){return Qt(e||t,t)}function Vx(t,e,n){const i=ht(t,n==null?void 0:n.in);return isNaN(e)?Qt(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function Lx(t,e,n){const i=ht(t,n==null?void 0:n.in);if(isNaN(e))return Qt(t,NaN);if(!e)return i;const a=i.getDate(),l=Qt(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let wV={};function Fc(){return wV}function Rl(t,e){var d,p,g,v;const n=Fc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ht(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Ac(t,e){return Rl(t,{...e,weekStartsOn:1})}function jx(t,e){const n=ht(t,e==null?void 0:e.in),i=n.getFullYear(),a=Qt(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Ac(a),c=Qt(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Ac(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Fb(t){const e=ht(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ql(t,...e){const n=Qt.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Rc(t,e){const n=ht(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Ux(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e),l=Rc(i),c=Rc(a),d=+l-Fb(l),p=+c-Fb(c);return Math.round((d-p)/EV)}function bV(t,e){const n=jx(t,e),i=Qt(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Ac(i)}function TV(t,e,n){return Vx(t,e*7,n)}function SV(t,e,n){return Lx(t,e*12,n)}function xV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Qt.bind(null,a));const l=ht(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),Qt(i,n||NaN)}function AV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Qt.bind(null,a));const l=ht(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),Qt(i,n||NaN)}function RV(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return+Rc(i)==+Rc(a)}function qx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function CV(t){return!(!qx(t)&&typeof t!="number"||isNaN(+ht(t)))}function IV(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function DV(t,e){const n=ht(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function kV(t,e){const[n,i]=ql(t,e.start,e.end);return{start:n,end:i}}function OV(t,e){const{start:n,end:i}=kV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(Qt(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function MV(t,e){const n=ht(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function NV(t,e){const n=ht(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function Bx(t,e){const n=ht(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function zx(t,e){var d,p,g,v;const n=Fc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ht(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function PV(t,e){return zx(t,{...e,weekStartsOn:1})}const VV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},LV=(t,e,n)=>{let i;const a=VV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function yg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const jV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},UV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},qV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},BV={date:yg({formats:jV,defaultWidth:"full"}),time:yg({formats:UV,defaultWidth:"full"}),dateTime:yg({formats:qV,defaultWidth:"full"})},zV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},FV=(t,e,n,i)=>zV[t];function Gu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const $V={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},HV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},GV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},YV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},WV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},QV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},KV=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},XV={ordinalNumber:KV,era:Gu({values:$V,defaultWidth:"wide"}),quarter:Gu({values:HV,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Gu({values:GV,defaultWidth:"wide"}),day:Gu({values:YV,defaultWidth:"wide"}),dayPeriod:Gu({values:WV,defaultWidth:"wide",formattingValues:QV,defaultFormattingWidth:"wide"})};function Yu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?JV(d,b=>b.test(c)):ZV(d,b=>b.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function ZV(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function JV(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function e6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const t6=/^(\d+)(th|st|nd|rd)?/i,n6=/\d+/i,r6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},i6={any:[/^b/i,/^(a|c)/i]},s6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},a6={any:[/1/i,/2/i,/3/i,/4/i]},o6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},l6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},u6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},c6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},f6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},d6={ordinalNumber:e6({matchPattern:t6,parsePattern:n6,valueCallback:t=>parseInt(t,10)}),era:Yu({matchPatterns:r6,defaultMatchWidth:"wide",parsePatterns:i6,defaultParseWidth:"any"}),quarter:Yu({matchPatterns:s6,defaultMatchWidth:"wide",parsePatterns:a6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Yu({matchPatterns:o6,defaultMatchWidth:"wide",parsePatterns:l6,defaultParseWidth:"any"}),day:Yu({matchPatterns:u6,defaultMatchWidth:"wide",parsePatterns:c6,defaultParseWidth:"any"}),dayPeriod:Yu({matchPatterns:h6,defaultMatchWidth:"any",parsePatterns:f6,defaultParseWidth:"any"})},w_={code:"en-US",formatDistance:LV,formatLong:BV,formatRelative:FV,localize:XV,match:d6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function p6(t,e){const n=ht(t,e==null?void 0:e.in);return Ux(n,Bx(n))+1}function Fx(t,e){const n=ht(t,e==null?void 0:e.in),i=+Ac(n)-+bV(n);return Math.round(i/Px)+1}function $x(t,e){var v,b,T,C;const n=ht(t,e==null?void 0:e.in),i=n.getFullYear(),a=Fc(),l=(e==null?void 0:e.firstWeekContainsDate)??((b=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??a.firstWeekContainsDate??((C=(T=a.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=Qt((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Rl(c,e),p=Qt((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Rl(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function m6(t,e){var d,p,g,v;const n=Fc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=$x(t,e),l=Qt((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Rl(l,e)}function Hx(t,e){const n=ht(t,e==null?void 0:e.in),i=+Rl(n,e)-+m6(n,e);return Math.round(i/Px)+1}function at(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Ls={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return at(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):at(n+1,2)},d(t,e){return at(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return at(t.getHours()%12||12,e.length)},H(t,e){return at(t.getHours(),e.length)},m(t,e){return at(t.getMinutes(),e.length)},s(t,e){return at(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return at(a,e.length)}},il={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$b={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Ls.y(t,e)},Y:function(t,e,n,i){const a=$x(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return at(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):at(l,e.length)},R:function(t,e){const n=jx(t);return at(n,e.length)},u:function(t,e){const n=t.getFullYear();return at(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return at(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return at(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Ls.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return at(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Hx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):at(a,e.length)},I:function(t,e,n){const i=Fx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):at(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ls.d(t,e)},D:function(t,e,n){const i=p6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):at(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return at(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return at(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return at(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=il.noon:i===0?a=il.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=il.evening:i>=12?a=il.afternoon:i>=4?a=il.morning:a=il.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ls.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ls.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):at(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):at(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ls.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ls.s(t,e)},S:function(t,e){return Ls.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Gb(i);case"XXXX":case"XX":return $a(i);case"XXXXX":case"XXX":default:return $a(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Gb(i);case"xxxx":case"xx":return $a(i);case"xxxxx":case"xxx":default:return $a(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Hb(i,":");case"OOOO":default:return"GMT"+$a(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Hb(i,":");case"zzzz":default:return"GMT"+$a(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return at(i,e.length)},T:function(t,e,n){return at(+t,e.length)}};function Hb(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+at(l,2)}function Gb(t,e){return t%60===0?(t>0?"-":"+")+at(Math.abs(t)/60,2):$a(t,e)}function $a(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=at(Math.trunc(i/60),2),l=at(i%60,2);return n+a+e+l}const Yb=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Gx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},g6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Yb(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Yb(i,e)).replace("{{time}}",Gx(a,e))},y6={p:Gx,P:g6},_6=/^D+$/,v6=/^Y+$/,E6=["D","DD","YY","YYYY"];function w6(t){return _6.test(t)}function b6(t){return v6.test(t)}function T6(t,e,n){const i=S6(t,e,n);if(console.warn(i),E6.includes(t))throw new RangeError(i)}function S6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const x6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R6=/^'([^]*?)'?$/,C6=/''/g,I6=/[a-zA-Z]/;function D6(t,e,n){var v,b,T,C,V,z,O,N;const i=Fc(),a=(n==null?void 0:n.locale)??i.locale??w_,l=(n==null?void 0:n.firstWeekContainsDate)??((b=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??i.firstWeekContainsDate??((C=(T=i.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((z=(V=n==null?void 0:n.locale)==null?void 0:V.options)==null?void 0:z.weekStartsOn)??i.weekStartsOn??((N=(O=i.locale)==null?void 0:O.options)==null?void 0:N.weekStartsOn)??0,d=ht(t,n==null?void 0:n.in);if(!CV(d))throw new RangeError("Invalid time value");let p=e.match(A6).map(L=>{const U=L[0];if(U==="p"||U==="P"){const te=y6[U];return te(L,a.formatLong)}return L}).join("").match(x6).map(L=>{if(L==="''")return{isToken:!1,value:"'"};const U=L[0];if(U==="'")return{isToken:!1,value:k6(L)};if($b[U])return{isToken:!0,value:L};if(U.match(I6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+U+"`");return{isToken:!1,value:L}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(L=>{if(!L.isToken)return L.value;const U=L.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&b6(U)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&w6(U))&&T6(U,e,String(t));const te=$b[U[0]];return te(d,U,a.localize,g)}).join("")}function k6(t){const e=t.match(R6);return e?e[1].replace(C6,"'"):t}function O6(t,e){const n=ht(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=Qt(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function M6(t,e){return ht(t,e==null?void 0:e.in).getMonth()}function N6(t,e){return ht(t,e==null?void 0:e.in).getFullYear()}function P6(t,e){return+ht(t)>+ht(e)}function V6(t,e){return+ht(t)<+ht(e)}function L6(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function j6(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function U6(t,e,n){const i=ht(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=Qt(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=O6(c);return i.setMonth(e,Math.min(l,d)),i}function q6(t,e,n){const i=ht(t,n==null?void 0:n.in);return isNaN(+i)?Qt(t,NaN):(i.setFullYear(e),i)}const Wb=5,B6=4;function z6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,Wb*7-1);return e.getMonth(t)===e.getMonth(l)?Wb:B6}function Yx(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function F6(t,e){const n=Yx(t,e),i=z6(t,e);return e.addDays(n,i*7-1)}class ss{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?An.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new An(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Vx(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):Lx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):TV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):SV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):Ux(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):IV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):OV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):F6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):PV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):DV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):zx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):NV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):D6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Fx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):M6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):N6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Hx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):P6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):V6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):qx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):RV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):L6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):j6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):xV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):AV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):U6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):q6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):Yx(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Rc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Ac(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):MV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Rl(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):Bx(i)},this.options={locale:w_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const hi=new ss;class Wx{constructor(e,n,i=hi){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class $6{constructor(e,n){this.date=e,this.weeks=n}}class H6{constructor(e,n){this.days=n,this.weekNumber=e}}function G6(t){return me.createElement("button",{...t})}function Y6(t){return me.createElement("span",{...t})}function W6(t){const{size:e=24,orientation:n="left",className:i}=t;return me.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&me.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&me.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&me.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&me.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Q6(t){const{day:e,modifiers:n,...i}=t;return me.createElement("td",{...i})}function K6(t){const{day:e,modifiers:n,...i}=t,a=me.useRef(null);return me.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),me.createElement("button",{ref:a,...i})}var Te;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(Te||(Te={}));var St;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(St||(St={}));var xr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(xr||(xr={}));var Zn;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(Zn||(Zn={}));function X6(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[Te.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return me.createElement("span",{"data-disabled":l.disabled,className:a[Te.DropdownRoot]},me.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>me.createElement(i.Option,{key:p,value:p,disabled:v},g))),me.createElement("span",{className:a[Te.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,me.createElement(i.Chevron,{orientation:"down",size:18,className:a[Te.Chevron]})))}function Z6(t){return me.createElement("div",{...t})}function J6(t){return me.createElement("div",{...t})}function eL(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i},t.children)}function tL(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i})}function nL(t){return me.createElement("table",{...t})}function rL(t){return me.createElement("div",{...t})}const Qx=B.createContext(void 0);function $c(){const t=B.useContext(Qx);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function iL(t){const{components:e}=$c();return me.createElement(e.Dropdown,{...t})}function sL(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=$c(),v=B.useCallback(T=>{a&&(n==null||n(T))},[a,n]),b=B.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return me.createElement("nav",{...l},me.createElement(c.PreviousMonthButton,{type:"button",className:d[Te.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:b},me.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[Te.Chevron],orientation:"left"})),me.createElement(c.NextMonthButton,{type:"button",className:d[Te.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},me.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[Te.Chevron]})))}function aL(t){const{components:e}=$c();return me.createElement(e.Button,{...t})}function oL(t){return me.createElement("option",{...t})}function lL(t){const{components:e}=$c();return me.createElement(e.Button,{...t})}function uL(t){const{rootRef:e,...n}=t;return me.createElement("div",{...n,ref:e})}function cL(t){return me.createElement("select",{...t})}function hL(t){const{week:e,...n}=t;return me.createElement("tr",{...n})}function fL(t){return me.createElement("th",{...t})}function dL(t){return me.createElement("thead",{"aria-hidden":!0},me.createElement("tr",{...t}))}function pL(t){const{week:e,...n}=t;return me.createElement("th",{...n})}function mL(t){return me.createElement("th",{...t})}function gL(t){return me.createElement("tbody",{...t})}function yL(t){const{components:e}=$c();return me.createElement(e.Dropdown,{...t})}const _L=Object.freeze(Object.defineProperty({__proto__:null,Button:G6,CaptionLabel:Y6,Chevron:W6,Day:Q6,DayButton:K6,Dropdown:X6,DropdownNav:Z6,Footer:J6,Month:eL,MonthCaption:tL,MonthGrid:nL,Months:rL,MonthsDropdown:iL,Nav:sL,NextMonthButton:aL,Option:oL,PreviousMonthButton:lL,Root:uL,Select:cL,Week:hL,WeekNumber:pL,WeekNumberHeader:mL,Weekday:fL,Weekdays:dL,Weeks:gL,YearsDropdown:yL},Symbol.toStringTag,{value:"Module"}));function Yi(t,e,n=!1,i=hi){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function Kx(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function b_(t){return!!(t&&typeof t=="object"&&"from"in t)}function Xx(t){return!!(t&&typeof t=="object"&&"after"in t)}function Zx(t){return!!(t&&typeof t=="object"&&"before"in t)}function Jx(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function eA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function Wi(t,e,n=hi){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(eA(d,n))return d.includes(t);if(b_(d))return Yi(d,t,!1,n);if(Jx(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(Kx(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,b=g<0;return c(d.before,d.after)?b&&v:v||b}return Xx(d)?l(t,d.after)>0:Zx(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function vL(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:b,isSameMonth:T,startOfMonth:C,isBefore:V,endOfMonth:z,isAfter:O}=a,N=n&&C(n),L=i&&z(i),U={[St.focused]:[],[St.outside]:[],[St.disabled]:[],[St.hidden]:[],[St.today]:[]},te={};for(const $ of t){const{date:ne,displayMonth:R}=$,A=!!(R&&!T(ne,R)),D=!!(N&&V(ne,N)),k=!!(L&&O(ne,L)),j=!!(l&&Wi(ne,l,a)),q=!!(c&&Wi(ne,c,a))||D||k||!g&&!p&&A||g&&p===!1&&A,M=b(ne,v??a.today());A&&U.outside.push($),j&&U.disabled.push($),q&&U.hidden.push($),M&&U.today.push($),d&&Object.keys(d).forEach(he=>{const ge=d==null?void 0:d[he];ge&&Wi(ne,ge,a)&&(te[he]?te[he].push($):te[he]=[$])})}return $=>{const ne={[St.focused]:!1,[St.disabled]:!1,[St.hidden]:!1,[St.outside]:!1,[St.today]:!1},R={};for(const A in U){const D=U[A];ne[A]=D.some(k=>k===$)}for(const A in te)R[A]=te[A].some(D=>D===$);return{...ne,...R}}}function EL(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[St[l]]?a.push(e[St[l]]):e[xr[l]]&&a.push(e[xr[l]]),a),[e[Te.Day]])}function wL(t){return{..._L,...t}}function bL(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function TL(){const t={};for(const e in Te)t[Te[e]]=`rdp-${Te[e]}`;for(const e in St)t[St[e]]=`rdp-${St[e]}`;for(const e in xr)t[xr[e]]=`rdp-${xr[e]}`;for(const e in Zn)t[Zn[e]]=`rdp-${Zn[e]}`;return t}function tA(t,e,n){return(n??new ss(e)).format(t,"LLLL y")}const SL=tA;function xL(t,e,n){return(n??new ss(e)).format(t,"d")}function AL(t,e=hi){return e.format(t,"LLLL")}function RL(t,e,n){return(n??new ss(e)).format(t,"cccccc")}function CL(t,e=hi){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function IL(){return""}function nA(t,e=hi){return e.format(t,"yyyy")}const DL=nA,kL=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:tA,formatDay:xL,formatMonthCaption:SL,formatMonthDropdown:AL,formatWeekNumber:CL,formatWeekNumberHeader:IL,formatWeekdayName:RL,formatYearCaption:DL,formatYearDropdown:nA},Symbol.toStringTag,{value:"Module"}));function OL(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...kL,...t}}function ML(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const C=i.formatMonthDropdown(T,a),V=g(T),z=e&&T<l(e)||n&&T>l(n)||!1;return{value:V,label:C,disabled:z}})}function NL(t,e={},n={}){let i={...e==null?void 0:e[Te.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function PL(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function VL(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,b=l(t),T=c(e),C=[];let V=b;for(;g(V,T)||v(V,T);)C.push(V),V=d(V,1);return a&&C.reverse(),C.map(z=>{const O=n.formatYearDropdown(z,i);return{value:p(z),label:O,disabled:!1}})}function rA(t,e,n,i){let a=(i??new ss(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const LL=rA;function iA(t,e,n){return(n??new ss(e)).format(t,"LLLL y")}const jL=iA;function UL(t,e,n,i){let a=(i??new ss(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function qL(t){return"Choose the Month"}function BL(){return""}function zL(t){return"Go to the Next Month"}function FL(t){return"Go to the Previous Month"}function $L(t,e,n){return(n??new ss(e)).format(t,"cccc")}function HL(t,e){return`Week ${t}`}function GL(t){return"Week Number"}function YL(t){return"Choose the Year"}const WL=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:jL,labelDay:LL,labelDayButton:rA,labelGrid:iA,labelGridcell:UL,labelMonthDropdown:qL,labelNav:BL,labelNext:zL,labelPrevious:FL,labelWeekNumber:HL,labelWeekNumberHeader:GL,labelWeekday:$L,labelYearDropdown:YL},Symbol.toStringTag,{value:"Module"})),Hc=t=>t instanceof HTMLElement?t:null,_g=t=>[...t.querySelectorAll("[data-animated-month]")??[]],QL=t=>Hc(t.querySelector("[data-animated-month]")),vg=t=>Hc(t.querySelector("[data-animated-caption]")),Eg=t=>Hc(t.querySelector("[data-animated-weeks]")),KL=t=>Hc(t.querySelector("[data-animated-nav]")),XL=t=>Hc(t.querySelector("[data-animated-weekdays]"));function ZL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=B.useRef(null),d=B.useRef(i),p=B.useRef(!1);B.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),b=l.isAfter(i[0].date,g[0].date),T=b?n[Zn.caption_after_enter]:n[Zn.caption_before_enter],C=b?n[Zn.weeks_after_enter]:n[Zn.weeks_before_enter],V=c.current,z=t.current.cloneNode(!0);if(z instanceof HTMLElement?(_g(z).forEach(U=>{if(!(U instanceof HTMLElement))return;const te=QL(U);te&&U.contains(te)&&U.removeChild(te);const $=vg(U);$&&$.classList.remove(T);const ne=Eg(U);ne&&ne.classList.remove(C)}),c.current=z):c.current=null,p.current||v||a)return;const O=V instanceof HTMLElement?_g(V):[],N=_g(t.current);if(N!=null&&N.every(L=>L instanceof HTMLElement)&&O&&O.every(L=>L instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const L=KL(t.current);L&&(L.style.zIndex="1"),N.forEach((U,te)=>{const $=O[te];if(!$)return;U.style.position="relative",U.style.overflow="hidden";const ne=vg(U);ne&&ne.classList.add(T);const R=Eg(U);R&&R.classList.add(C);const A=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),L&&(L.style.zIndex=""),ne&&ne.classList.remove(T),R&&R.classList.remove(C),U.style.position="",U.style.overflow="",U.contains($)&&U.removeChild($)};$.style.pointerEvents="none",$.style.position="absolute",$.style.overflow="hidden",$.setAttribute("aria-hidden","true");const D=XL($);D&&(D.style.opacity="0");const k=vg($);k&&(k.classList.add(b?n[Zn.caption_before_exit]:n[Zn.caption_after_exit]),k.addEventListener("animationend",A));const j=Eg($);j&&j.classList.add(b?n[Zn.weeks_before_exit]:n[Zn.weeks_after_exit]),U.insertBefore($,U.firstChild)})}})}function JL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:b,endOfBroadcastWeek:T,endOfISOWeek:C,endOfMonth:V,endOfWeek:z,isAfter:O,startOfBroadcastWeek:N,startOfISOWeek:L,startOfWeek:U}=i,te=p?N(a,i):c?L(a):U(a),$=p?T(l):c?C(V(l)):z(V(l)),ne=v($,te),R=b(l,a)+1,A=[];for(let j=0;j<=ne;j++){const q=g(te,j);if(e&&O(q,e))break;A.push(q)}const k=(p?35:42)*R;if(d&&A.length<k){const j=k-A.length;for(let q=0;q<j;q++){const M=g(A[A.length-1],1);A.push(M)}}return A}function ej(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function tj(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function Qb(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:b}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),b(p)}function nj(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:b,startOfISOWeek:T,startOfWeek:C}=i,V=t.reduce((z,O)=>{const N=n.broadcastCalendar?b(O,i):n.ISOWeek?T(O):C(O),L=n.broadcastCalendar?l(O):n.ISOWeek?c(d(O)):p(d(O)),U=e.filter(R=>R>=N&&R<=L),te=n.broadcastCalendar?35:42;if(n.fixedWeeks&&U.length<te){const R=e.filter(A=>{const D=te-U.length;return A>L&&A<=a(L,D)});U.push(...R)}const $=U.reduce((R,A)=>{const D=n.ISOWeek?g(A):v(A),k=R.find(q=>q.weekNumber===D),j=new Wx(A,O,i);return k?k.days.push(j):R.push(new H6(D,[j])),R},[]),ne=new $6(O,$);return z.push(ne),z},[]);return n.reverseMonths?V.reverse():V}function rj(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:b}=e,{fromYear:T,toYear:C,fromMonth:V,toMonth:z}=t;!n&&V&&(n=V),!n&&T&&(n=e.newDate(T,0,1)),!i&&z&&(i=z),!i&&C&&(i=v(C,11,31));const O=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&O&&(n=a(p(t.today??b(),-100))),i?i=d(i):C?i=v(C,11,31):!i&&O&&(i=g(t.today??b())),[n&&l(n),i&&l(i)]}function ij(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function sj(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function aj(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function Wd(t,e){const[n,i]=B.useState(t);return[e===void 0?n:e,i]}function oj(t,e){const[n,i]=rj(t,e),{startOfMonth:a,endOfMonth:l}=e,c=Qb(t,n,i,e),[d,p]=Wd(c,t.month?c:void 0);B.useEffect(()=>{const ne=Qb(t,n,i,e);p(ne)},[t.timeZone]);const g=tj(d,i,t,e),v=JL(g,t.endMonth?l(t.endMonth):void 0,t,e),b=nj(g,v,t,e),T=aj(b),C=ej(b),V=sj(d,n,t,e),z=ij(d,i,t,e),{disableNavigation:O,onMonthChange:N}=t,L=ne=>T.some(R=>R.days.some(A=>A.isEqualTo(ne))),U=ne=>{if(O)return;let R=a(ne);n&&R<a(n)&&(R=a(n)),i&&R>a(i)&&(R=a(i)),p(R),N==null||N(R)};return{months:b,weeks:T,days:C,navStart:n,navEnd:i,previousMonth:V,nextMonth:z,goToMonth:U,goToDay:ne=>{L(ne)||U(ne.date)}}}var Zr;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(Zr||(Zr={}));function Kb(t){return!t[St.disabled]&&!t[St.hidden]&&!t[St.outside]}function lj(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);Kb(d)&&(d[St.focused]&&l<Zr.FocusedModifier?(a=c,l=Zr.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<Zr.LastFocused?(a=c,l=Zr.LastFocused):n(c.date)&&l<Zr.Selected?(a=c,l=Zr.Selected):d[St.today]&&l<Zr.Today&&(a=c,l=Zr.Today))}return a||(a=t.find(c=>Kb(e(c)))),a}function uj(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:b,addYears:T,endOfBroadcastWeek:C,endOfISOWeek:V,endOfWeek:z,max:O,min:N,startOfBroadcastWeek:L,startOfISOWeek:U,startOfWeek:te}=c;let ne={day:g,week:b,month:v,year:T,startOfWeek:R=>p?L(R,c):d?U(R):te(R),endOfWeek:R=>p?C(R):d?V(R):z(R)}[t](n,e==="after"?1:-1);return e==="before"&&i?ne=O([i,ne]):e==="after"&&a&&(ne=N([a,ne])),ne}function sA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=uj(t,e,n.date,i,a,l,c),g=!!(l.disabled&&Wi(p,l.disabled,c)),v=!!(l.hidden&&Wi(p,l.hidden,c)),b=p,T=new Wx(p,b,c);return!g&&!v?T:sA(t,e,T,i,a,l,c,d+1)}function cj(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=B.useState(),p=lj(e.days,n,i||(()=>!1),c),[g,v]=B.useState(l?p:void 0);return{isFocusTarget:z=>!!(p!=null&&p.isEqualTo(z)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(z,O)=>{if(!g)return;const N=sA(z,O,g,e.navStart,e.navEnd,t,a);N&&(e.goToDay(N),v(N))}}}function hj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Wd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=C=>(d==null?void 0:d.some(V=>p(V,C)))??!1,{min:v,max:b}=t;return{selected:d,select:(C,V,z)=>{let O=[...d??[]];if(g(C)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;O=d==null?void 0:d.filter(N=>!p(N,C))}else(d==null?void 0:d.length)===b?O=[C]:O=[...O,C];return a||c(O),a==null||a(O,C,V,z),O},isSelected:g}}function fj(t,e,n=0,i=0,a=!1,l=hi){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let b;if(!c&&!d)b={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?b={from:c,to:t}:a?b={from:c,to:void 0}:b=void 0:v(t,c)?b={from:t,to:c}:b={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?b={from:c,to:d}:b=void 0;else if(p(c,t))b={from:c,to:n>0?void 0:t};else if(p(d,t))b={from:t,to:n>0?void 0:t};else if(v(t,c))b={from:t,to:d};else if(g(t,c))b={from:c,to:t};else if(g(t,d))b={from:c,to:t};else throw new Error("Invalid range");if(b!=null&&b.from&&(b!=null&&b.to)){const T=l.differenceInCalendarDays(b.to,b.from);i>0&&T>i?b={from:t,to:void 0}:n>1&&T<n&&(b={from:t,to:void 0})}return b}function dj(t,e,n=hi){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function Xb(t,e,n=hi){return Yi(t,e.from,!1,n)||Yi(t,e.to,!1,n)||Yi(e,t.from,!1,n)||Yi(e,t.to,!1,n)}function pj(t,e,n=hi){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Yi(t,d,!1,n):eA(d,n)?d.some(p=>Yi(t,p,!1,n)):b_(d)?d.from&&d.to?Xb(t,{from:d.from,to:d.to},n):!1:Jx(d)?dj(t,d.dayOfWeek,n):Kx(d)?n.isAfter(d.before,d.after)?Xb(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Wi(t.from,d,n)||Wi(t.to,d,n):Xx(d)||Zx(d)?Wi(t.from,d,n)||Wi(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function mj(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=Wd(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,C,V)=>{const{min:z,max:O}=t,N=T?fj(T,g,z,O,l,e):void 0;return i&&n&&(N!=null&&N.from)&&N.to&&pj({from:N.from,to:N.to},n,e)&&(N.from=T,N.to=void 0),c||p(N),c==null||c(N,T,C,V),N},isSelected:T=>g&&Yi(g,T,!1,e)}}function gj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Wd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(b,T,C)=>{let V=b;return!i&&d&&d&&p(b,d)&&(V=void 0),a||c(V),a==null||a(V,b,T,C),V},isSelected:b=>d?p(d,b):!1}}function yj(t,e){const n=gj(t,e),i=hj(t,e),a=mj(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function _j(t){var os;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new An(e.today,e.timeZone)),e.month&&(e.month=new An(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new An(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new An(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new An(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new An(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(os=e.selected)==null?void 0:os.map(Ne=>new An(Ne,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new An(e.selected.from,e.timeZone):void 0,to:e.selected.to?new An(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=B.useMemo(()=>{const Ne={...w_,...e.locale};return{dateLib:new ss({locale:Ne,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:wL(e.components),formatters:OL(e.formatters),labels:{...WL,...e.labels},locale:Ne,classNames:{...TL(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:b=1,onDayBlur:T,onDayClick:C,onDayFocus:V,onDayKeyDown:z,onDayMouseEnter:O,onDayMouseLeave:N,onNextClick:L,onPrevClick:U,showWeekNumber:te,styles:$}=e,{formatCaption:ne,formatDay:R,formatMonthDropdown:A,formatWeekNumber:D,formatWeekNumberHeader:k,formatWeekdayName:j,formatYearDropdown:q}=i,M=oj(e,l),{days:he,months:ge,navStart:K,navEnd:le,previousMonth:fe,nextMonth:ve,goToMonth:I}=M,ee=vL(he,e,K,le,l),{isSelected:se,select:ie,selected:de}=yj(e,l)??{},{blur:xe,focused:we,isFocusTarget:ft,moveFocus:He,setFocused:bt}=cj(e,M,ee,se??(()=>!1),l),{labelDayButton:Pn,labelGridcell:vn,labelGrid:Kt,labelMonthDropdown:fi,labelNav:Mr,labelPrevious:ca,labelNext:co,labelWeekday:Vn,labelWeekNumber:Bl,labelWeekNumberHeader:ha,labelYearDropdown:as}=a,di=B.useMemo(()=>PL(l,e.ISOWeek),[l,e.ISOWeek]),ho=g!==void 0||C!==void 0,Nr=B.useCallback(()=>{fe&&(I(fe),U==null||U(fe))},[fe,I,U]),pi=B.useCallback(()=>{ve&&(I(ve),L==null||L(ve))},[I,ve,L]),fo=B.useCallback((Ne,et)=>Ce=>{Ce.preventDefault(),Ce.stopPropagation(),bt(Ne),ie==null||ie(Ne.date,et,Ce),C==null||C(Ne.date,et,Ce)},[ie,C,bt]),_t=B.useCallback((Ne,et)=>Ce=>{bt(Ne),V==null||V(Ne.date,et,Ce)},[V,bt]),Ze=B.useCallback((Ne,et)=>Ce=>{xe(),T==null||T(Ne.date,et,Ce)},[xe,T]),Dn=B.useCallback((Ne,et)=>Ce=>{const Ke={ArrowLeft:[Ce.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[Ce.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[Ce.shiftKey?"year":"week","after"],ArrowUp:[Ce.shiftKey?"year":"week","before"],PageUp:[Ce.shiftKey?"year":"month","before"],PageDown:[Ce.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Ke[Ce.key]){Ce.preventDefault(),Ce.stopPropagation();const[Zt,Pe]=Ke[Ce.key];He(Zt,Pe)}z==null||z(Ne.date,et,Ce)},[He,z,e.dir]),Xt=B.useCallback((Ne,et)=>Ce=>{O==null||O(Ne.date,et,Ce)},[O]),po=B.useCallback((Ne,et)=>Ce=>{N==null||N(Ne.date,et,Ce)},[N]),zl=B.useCallback(Ne=>et=>{const Ce=Number(et.target.value),Ke=l.setMonth(l.startOfMonth(Ne),Ce);I(Ke)},[l,I]),mi=B.useCallback(Ne=>et=>{const Ce=Number(et.target.value),Ke=l.setYear(l.startOfMonth(Ne),Ce);I(Ke)},[l,I]),{className:gi,style:yi}=B.useMemo(()=>({className:[d[Te.Root],e.className].filter(Boolean).join(" "),style:{...$==null?void 0:$[Te.Root],...e.style}}),[d,e.className,e.style,$]),zn=bL(e),_i=B.useRef(null);ZL(_i,!!e.animate,{classNames:d,months:ge,focused:we,dateLib:l});const vi={dayPickerProps:e,selected:de,select:ie,isSelected:se,months:ge,nextMonth:ve,previousMonth:fe,goToMonth:I,getModifiers:ee,components:n,classNames:d,styles:$,labels:a,formatters:i};return me.createElement(Qx.Provider,{value:vi},me.createElement(n.Root,{rootRef:e.animate?_i:void 0,className:gi,style:yi,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...zn},me.createElement(n.Months,{className:d[Te.Months],style:$==null?void 0:$[Te.Months]},!e.hideNavigation&&!v&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Te.Nav],style:$==null?void 0:$[Te.Nav],"aria-label":Mr(),onPreviousClick:Nr,onNextClick:pi,previousMonth:fe,nextMonth:ve}),ge.map((Ne,et)=>me.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[Te.Month],style:$==null?void 0:$[Te.Month],key:et,displayIndex:et,calendarMonth:Ne},v==="around"&&!e.hideNavigation&&et===0&&me.createElement(n.PreviousMonthButton,{type:"button",className:d[Te.PreviousMonthButton],tabIndex:fe?void 0:-1,"aria-disabled":fe?void 0:!0,"aria-label":ca(fe),onClick:Nr,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:fe?void 0:!0,className:d[Te.Chevron],orientation:e.dir==="rtl"?"right":"left"})),me.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[Te.MonthCaption],style:$==null?void 0:$[Te.MonthCaption],calendarMonth:Ne,displayIndex:et},p!=null&&p.startsWith("dropdown")?me.createElement(n.DropdownNav,{className:d[Te.Dropdowns],style:$==null?void 0:$[Te.Dropdowns]},p==="dropdown"||p==="dropdown-months"?me.createElement(n.MonthsDropdown,{className:d[Te.MonthsDropdown],"aria-label":fi(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:zl(Ne.date),options:ML(Ne.date,K,le,i,l),style:$==null?void 0:$[Te.Dropdown],value:l.getMonth(Ne.date)}):me.createElement("span",null,A(Ne.date,l)),p==="dropdown"||p==="dropdown-years"?me.createElement(n.YearsDropdown,{className:d[Te.YearsDropdown],"aria-label":as(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:mi(Ne.date),options:VL(K,le,i,l,!!e.reverseYears),style:$==null?void 0:$[Te.Dropdown],value:l.getYear(Ne.date)}):me.createElement("span",null,q(Ne.date,l)),me.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},ne(Ne.date,l.options,l))):me.createElement(n.CaptionLabel,{className:d[Te.CaptionLabel],role:"status","aria-live":"polite"},ne(Ne.date,l.options,l))),v==="around"&&!e.hideNavigation&&et===b-1&&me.createElement(n.NextMonthButton,{type:"button",className:d[Te.NextMonthButton],tabIndex:ve?void 0:-1,"aria-disabled":ve?void 0:!0,"aria-label":co(ve),onClick:pi,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:ve?void 0:!0,className:d[Te.Chevron],orientation:e.dir==="rtl"?"left":"right"})),et===b-1&&v==="after"&&!e.hideNavigation&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Te.Nav],style:$==null?void 0:$[Te.Nav],"aria-label":Mr(),onPreviousClick:Nr,onNextClick:pi,previousMonth:fe,nextMonth:ve}),me.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Kt(Ne.date,l.options,l)||void 0,className:d[Te.MonthGrid],style:$==null?void 0:$[Te.MonthGrid]},!e.hideWeekdays&&me.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[Te.Weekdays],style:$==null?void 0:$[Te.Weekdays]},te&&me.createElement(n.WeekNumberHeader,{"aria-label":ha(l.options),className:d[Te.WeekNumberHeader],style:$==null?void 0:$[Te.WeekNumberHeader],scope:"col"},k()),di.map(Ce=>me.createElement(n.Weekday,{"aria-label":Vn(Ce,l.options,l),className:d[Te.Weekday],key:String(Ce),style:$==null?void 0:$[Te.Weekday],scope:"col"},j(Ce,l.options,l)))),me.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[Te.Weeks],style:$==null?void 0:$[Te.Weeks]},Ne.weeks.map(Ce=>me.createElement(n.Week,{className:d[Te.Week],key:Ce.weekNumber,style:$==null?void 0:$[Te.Week],week:Ce},te&&me.createElement(n.WeekNumber,{week:Ce,style:$==null?void 0:$[Te.WeekNumber],"aria-label":Bl(Ce.weekNumber,{locale:c}),className:d[Te.WeekNumber],scope:"row",role:"rowheader"},D(Ce.weekNumber,l)),Ce.days.map(Ke=>{const{date:Zt}=Ke,Pe=ee(Ke);if(Pe[St.focused]=!Pe.hidden&&!!(we!=null&&we.isEqualTo(Ke)),Pe[xr.selected]=(se==null?void 0:se(Zt))||Pe.selected,b_(de)){const{from:tr,to:us}=de;Pe[xr.range_start]=!!(tr&&us&&l.isSameDay(Zt,tr)),Pe[xr.range_end]=!!(tr&&us&&l.isSameDay(Zt,us)),Pe[xr.range_middle]=Yi(de,Zt,!0,l)}const fa=NL(Pe,$,e.modifiersStyles),Pr=EL(Pe,d,e.modifiersClassNames),ls=!ho&&!Pe.hidden?vn(Zt,Pe,l.options,l):void 0;return me.createElement(n.Day,{key:`${l.format(Zt,"yyyy-MM-dd")}_${l.format(Ke.displayMonth,"yyyy-MM")}`,day:Ke,modifiers:Pe,className:Pr.join(" "),style:fa,role:"gridcell","aria-selected":Pe.selected||void 0,"aria-label":ls,"data-day":l.format(Zt,"yyyy-MM-dd"),"data-month":Ke.outside?l.format(Zt,"yyyy-MM"):void 0,"data-selected":Pe.selected||void 0,"data-disabled":Pe.disabled||void 0,"data-hidden":Pe.hidden||void 0,"data-outside":Ke.outside||void 0,"data-focused":Pe.focused||void 0,"data-today":Pe.today||void 0},!Pe.hidden&&ho?me.createElement(n.DayButton,{className:d[Te.DayButton],style:$==null?void 0:$[Te.DayButton],type:"button",day:Ke,modifiers:Pe,disabled:Pe.disabled||void 0,tabIndex:ft(Ke)?0:-1,"aria-label":Pn(Zt,Pe,l.options,l),onClick:fo(Ke,Pe),onBlur:Ze(Ke,Pe),onFocus:_t(Ke,Pe),onKeyDown:Dn(Ke,Pe),onMouseEnter:Xt(Ke,Pe),onMouseLeave:po(Ke,Pe)},R(Zt,l.options,l)):!Pe.hidden&&R(Ke.date,l.options,l))})))))))),e.footer&&me.createElement(n.Footer,{className:d[Te.Footer],style:$==null?void 0:$[Te.Footer],role:"status","aria-live":"polite"},e.footer)))}const vj="./assets/calendar-arrow-BfXL-r2k.png";function Ej({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var z;const[a,l]=B.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=B.useState(((z=t==null?void 0:t.start)==null?void 0:z.getFullYear())??new Date().getFullYear()),[p,g]=B.useState(!1),v=B.useMemo(()=>{const O=N=>`${N.getFullYear()}.${String(N.getMonth()+1).padStart(2,"0")}.${String(N.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${O(a.start)} ~ ${O(a.end)}`:a.start?`${O(a.start)} ~`:""},[a]),b=new Date().getMonth(),T=B.useRef(null);B.useEffect(()=>{if(p&&T.current){const O=T.current.querySelectorAll(".month-box")[b];O&&O.scrollIntoView({block:"start"})}},[p]);const C=B.useRef(null);B.useEffect(()=>{const O=N=>{C.current&&!C.current.contains(N.target)&&g(!1)};return p&&document.addEventListener("click",O),()=>{document.removeEventListener("click",O)}},[p]),B.useEffect(()=>{const O=U=>U instanceof Date?new Date(U.getFullYear(),U.getMonth(),U.getDate()).getTime():null,N=(t==null?void 0:t.start)??null,L=(t==null?void 0:t.end)??null;(O(a.start)!==O(N)||O(a.end)!==O(L))&&(l({start:N,end:L}),d((N==null?void 0:N.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const V=O=>{if(!a.start||a.start&&a.end){l({start:O,end:null});return}if(a.start&&!a.end)if(O<a.start)l({start:O,end:null});else{const N={start:a.start,end:O};l(N),e==null||e(N),i&&g(!1)}};return _.jsxs(wj,{ref:C,children:[_.jsx(Oj,{}),_.jsx(bj,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(O=>!O)}),p&&_.jsxs(Sj,{children:[_.jsxs(xj,{children:[_.jsx(Aj,{dir:"prev",onClick:()=>d(O=>O-1)}),_.jsx("span",{children:c}),_.jsx(Rj,{dir:"next",onClick:()=>d(O=>O+1)})]}),_.jsx(Cj,{children:["일","월","화","수","목","금","토"].map(O=>_.jsx("span",{children:O},O))}),_.jsx(Tj,{children:_.jsx(Ij,{ref:T,children:Array.from({length:12}).map((O,N)=>{const L=new Date(c,N,1),U=$=>new Date($.getFullYear(),$.getMonth(),$.getDate()).getTime(),te=$=>$.getFullYear()===L.getFullYear()&&$.getMonth()===L.getMonth();return _.jsxs(Dj,{className:"month-box",children:[_.jsx(kj,{children:String(N+1).padStart(2,"0")}),_.jsx(_j,{mode:"single",month:L,selected:void 0,onDayClick:V,showOutsideDays:!1,modifiers:{start:$=>!!a.start&&te($)&&U($)===U(a.start),end:$=>!!a.end&&te($)&&U($)===U(a.end),middle:$=>{if(!a.start||!a.end||!te($))return!1;const ne=U($),R=U(a.start),A=U(a.end);return ne>R&&ne<A}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},N)})})})]})]})}const wj=H.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,bj=H.input`
  width: 100%;
  padding: 11.5px 12px;
  border: 1px solid ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.gray02)||"#d0d5dd"}};
  border-radius: 10px;
  font-family: 'Pretendard';
  font-size: 16px;
  cursor: pointer;

  &::placeholder {
    color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.black)||"#111"}};
  }
`,Tj=H.div`
  overflow-y: auto;
  max-height: 385px;

  /* ===== Firefox ===== */
  scrollbar-width: thin;
  scrollbar-color: ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.gray03)||"#c9ced6"}}
                    transparent;

  &::-webkit-scrollbar {
    width: 10px !important;
  }

  /* ===== WebKit (Chrome/Edge/Safari) ===== */
  &::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
    border: none !important;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.gray04)||"#aeb4be"}};
  }
`,Sj=H.div`
  position: absolute;
  top: 60px;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  z-index: 100;
  width: 380px;
  max-height: 480px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,xj=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,aA=H.button`
  width: 48px;
  height: 100%;
  background-image: url(${vj});
  background-repeat: no-repeat;
`,Aj=H(aA)``,Rj=H(aA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,Cj=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-size: 12px;
  padding: 0 11px;
  border-bottom: 1px solid ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray03}};

  span {
    flex: 1;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #757575;
  }
`,Ij=H.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,Dj=H.div`
  .rdp-months {
    width: 100%;

    table {
      width: 100%;
    }
  }

  .rdp-tbody {
    display: contents !important; /* table body 제거 */
  }

  .rdp-row {
    display: contents !important; /* tr 제거 */
  }

  .rdp-cell {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }

  .rdp-day {
    font-size: 13px;
    line-height: 31px;
    border: none;
    text-align: center;
    cursor: pointer;

    & button {
      width: 100%;
      padding: 8px 0;
      font-family: 'Pretendard';
    }
  }

  /* ✅ 오늘 날짜 강조 */
  .rdp-day.rdp-today {
    background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
    font-weight: 700;

    button {
      color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.white01}};
    }
  }

  /* ❶ 라이브러리 기본 range 클래스 전부 무력화 (혹시 붙어도 표시 안 되게) */
  .rdp-range_start,
  .rdp-range_middle,
  .rdp-range_end {
    background: none !important;
    color: inherit !important;
  }

  /* ❷ 우리가 지정한 커스텀 클래스만 색칠 */
  .sel-start,
  .sel-end,
  .sel-mid {
    background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.red}} !important;

    & button {
      color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.white01}};
    }
  }
`,kj=H.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,Oj=t1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,Wu="진행 상태 선택",Qu="요청자 선택",Ku="디자이너 선택",wg={start:null,end:null};function Mj({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c}){const[d,p]=B.useState(wg),[g,v]=B.useState(Wu),[b,T]=B.useState(Qu),[C,V]=B.useState(Ku),z=()=>{v(Wu),p(wg),T(Qu),V(Ku),t(Wu),e(wg),a==null||a(Qu),c==null||c(Ku)};return _.jsxs(Nj,{children:[_.jsx(Ej,{value:d,onApply:O=>{p(O),e(O)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(bg,{"aria-label":"요청자 선택",value:b,onChange:O=>{T(O.target.value),a==null||a(O.target.value)},children:[_.jsx("option",{value:Qu,children:Qu}),i.map(O=>_.jsx("option",{value:O,children:O},O))]}),_.jsxs(bg,{"aria-label":"디자이너 선택",value:C,onChange:O=>{const N=O.target.value;V(N),c==null||c(N)},children:[_.jsx("option",{value:Ku,children:Ku}),l.map(O=>_.jsx("option",{value:O,children:O},O))]})]}),_.jsxs(bg,{value:g,onChange:O=>{const N=O.target.value;v(N),t(N)},children:[_.jsx("option",{value:Wu,children:Wu}),_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]}),_.jsx(Pj,{type:"button",onClick:z,children:"초기화"})]})}const Nj=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,bg=H.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  margin-right: 8px;
  padding: 11px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({theme:t})=>t.colors.white01};
  background-image: url(${Mx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,Pj=H.button`
  padding: 12.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,Vj="./assets/search-icon-g0O6fOpZ.svg";function Lj({keyword:t,onKeywordChange:e,onSearch:n}){const i=()=>n(t.trim());return _.jsxs(jj,{children:[_.jsx(Uj,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>e(a.target.value)}),_.jsx(qj,{type:"button",onClick:i})]})}const jj=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 11px 14.5px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
`,Uj=H.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,qj=H.button`
  width: 24px;
  height: 24px;
  background-image: url(${Vj});
`;function T_({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g}){return _.jsxs(Bj,{children:[_.jsx(Mj,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g}),_.jsx(Lj,{keyword:i,onKeywordChange:a,onSearch:n})]})}const Bj=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`;function zj({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=B.useState(""),[l,c]=B.useState([]),[d,p]=B.useState("진행 상태 선택"),[g,v]=B.useState({start:null,end:null}),[b,T]=B.useState(""),[C,V]=B.useState("");B.useEffect(()=>{const k=Td(ao,j=>{j&&j.displayName&&a(j.displayName)});return()=>k()},[]),B.useEffect(()=>{if(!i)return;const k=Ks(ai(qt,"design_request"),ia("requester","==",i),p_("design_request_id","desc")),j=Yd(k,q=>{const M=q.docs.map(he=>({id:he.id,...he.data()}));c(M)});return()=>j()},[i]);const z=k=>v(k),O=k=>p(k),N=k=>V(k),L=k=>k==="검수요청"?"진행중":k==="검수중"?"검수요청":k,U=k=>new Date(k.getFullYear(),k.getMonth(),k.getDate()),te=k=>{if(!k)return null;if(typeof k=="object"&&typeof k.toDate=="function")return U(k.toDate());if(k instanceof Date)return U(k);if(typeof k=="number")return U(new Date(k));if(typeof k=="string"){const q=k.replace(/\./g,"-").replace(/\//g,"-").split("-");if(q.length===3){const[he,ge,K]=q.map(Number),le=he>31?he:new Date().getFullYear();return new Date(le,ge-1,K)}if(q.length===2){const[he,ge]=q.map(Number),K=new Date().getFullYear();return new Date(K,he-1,ge)}const M=new Date(k);return isNaN(+M)?null:U(M)}return null},$=B.useMemo(()=>{const k=g.start?U(g.start):null,j=g.end?U(g.end):null,q=C.trim().toLowerCase();return l.map(M=>({...M,displayStatus:L(M.status)})).filter(M=>{let he=!0;if(d&&d!=="진행 상태 선택"&&(he=he&&M.displayStatus===d),k&&j){const ge=te(M.request_date)||te(M.requested_at)||te(M.requestDate)||null;he=he&&!!ge&&ge>=k&&ge<=j}if(q){const ge=String(M.design_request_id??"").toLowerCase(),K=String(M.requirement??"").toLowerCase();he=he&&(ge.includes(q)||K.includes(q))}return he})},[l,d,g,C]),ne=async k=>{await Xa(Cr(qt,"design_request",k),{status:"완료",requester_review_status:"검수완료"}),c(j=>j.map(q=>q.id===k?{...q,status:"완료",requester_review_status:"검수완료"}:q)),alert("완료 처리되었습니다.")},R=async k=>{const j=Cr(qt,"design_request",k);await Xa(j,{requester_edit_state:!0});const q=await m_(j);if(q.exists()){const M={id:q.id,...q.data()};e(M),t(!0)}},A=k=>{n(k),t(!0)},D=async k=>{await Xa(Cr(qt,"design_request",k),{status:"취소"}),c(j=>j.map(q=>q.id===k?{...q,status:"취소"}:q))};return _.jsxs(_.Fragment,{children:[_.jsx(E_,{}),_.jsxs(Fj,{children:[_.jsx(T_,{onApplyStatus:O,onApplyRange:z,onSearch:N,keyword:b,onKeywordChange:T}),_.jsx(hV,{data:$,onReviewComplete:ne,onCancel:D,onEditClick:R,onDetailClick:A})]})]})}const Fj=H.div`
  padding: 0 48px;
`;function $j({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(e)};return _.jsxs(Hj,{isCanceled:e.status==="취소",children:[_.jsx(Fi,{children:t}),_.jsx(Fi,{children:_.jsx(Xj,{onClick:d,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Fi,{children:c(e.request_date)}),_.jsx(Fi,{children:e.requester}),_.jsx(Gj,{children:c(e.completion_dt)}),_.jsx(Yj,{children:c(e.open_dt)}),_.jsx(Fi,{children:e.task_form}),_.jsx(Wj,{children:e.task_type}),_.jsx(Qj,{children:_.jsxs(Zj,{children:[e.emergency?_.jsx(oA,{children:"긴급"}):"",_.jsx(Jj,{onClick:d,children:e.requirement})]})}),_.jsx(Fi,{children:_.jsx(e3,{href:e.url,target:"_blank"})}),_.jsx(Kj,{children:_.jsx(t3,{onClick:d,children:e.note||""})}),_.jsx(Zb,{children:_.jsx(Jb,{type:"date",value:n.start_dt??"",onChange:p=>i(e.id,"start_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(Zb,{children:_.jsx(Jb,{type:"date",value:n.end_dt??"",onChange:p=>i(e.id,"end_dt",p.target.value),disabled:e.status==="취소"})}),_.jsx(Fi,{children:_.jsx(n3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:p=>i(e.id,"result_url",p.target.value),disabled:e.status==="취소"})}),_.jsx(Fi,{children:_.jsxs("select",{value:n.status??"대기",onChange:p=>i(e.id,"status",p.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기중",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"})]})}),_.jsx(Fi,{children:_.jsx(lA,{onClick:()=>a(e.id),disabled:e.status==="취소",children:"저장"})})]})}const Hj=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${oA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${lA} {
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
`,Fi=H.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,Gj=H.td`
  color: ${({theme:t})=>t.colors.red};
`,Yj=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,Wj=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,Qj=H.td`
  line-height: 15px;
  text-align: left;
`,Kj=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,Zb=H.td`
  padding: 0 6px;
`,Xj=H.span`
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
`,Zj=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,oA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Jj=H.span`
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
`,e3=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${v_}) no-repeat center / contain;
`,t3=H.span`
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
`,Jb=H.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,n3=H.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,lA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function r3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(i3,{children:_.jsxs(s3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Sn,{children:"번호"}),_.jsx(Sn,{children:"문서번호"}),_.jsx(Sn,{children:"요청일"}),_.jsx(Sn,{children:"요청자"}),_.jsxs(Sn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Sn,{children:"오픈일"}),_.jsx(Sn,{children:"업무형태"}),_.jsx(Sn,{children:"업무타입"}),_.jsx(Sn,{children:"작업항목"}),_.jsx(Sn,{children:"요청서 URL"}),_.jsx(Sn,{children:"메모"}),_.jsx(Sn,{children:"디자인 시작일"}),_.jsx(Sn,{children:"디자인 종료일"}),_.jsx(Sn,{children:"산출물 링크"}),_.jsx(Sn,{children:"진행상태"}),_.jsx(Sn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx($j,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const i3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,s3=H.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,Sn=H.th`
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
`;function a3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=B.useState([]),[a,l]=B.useState(""),[c,d]=B.useState({}),[p,g]=B.useState("진행 상태 선택"),[v,b]=B.useState({start:null,end:null}),[T,C]=B.useState(""),[V,z]=B.useState("");B.useEffect(()=>{const he=Td(ao,ge=>{ge!=null&&ge.displayName&&l(ge.displayName)});return()=>he()},[]),B.useEffect(()=>{if(!a)return;const he=Ks(ai(qt,"design_request"),ia("assigned_designer","==",a),p_("design_request_id","desc")),ge=Yd(he,K=>{const le=K.docs.map(fe=>({id:fe.id,...fe.data()}));i(le)});return()=>ge()},[a]);const O=he=>b(he),N=he=>g(he),L=he=>new Date(he.getFullYear(),he.getMonth(),he.getDate()),U=he=>{if(!he)return null;if(typeof he=="object"&&typeof he.toDate=="function")return L(he.toDate());if(he instanceof Date)return L(he);if(typeof he=="number")return L(new Date(he));if(typeof he=="string"){const K=he.replace(/\./g,"-").replace(/\//g,"-").split("-");if(K.length===3){const[fe,ve,I]=K.map(Number),ee=fe>31?fe:new Date().getFullYear();return new Date(ee,ve-1,I)}if(K.length===2){const[fe,ve]=K.map(Number),I=new Date().getFullYear();return new Date(I,fe-1,ve)}const le=new Date(he);return isNaN(+le)?null:L(le)}return null},te=he=>he??"대기",$=he=>{const ge=he.getFullYear(),K=String(he.getMonth()+1).padStart(2,"0"),le=String(he.getDate()).padStart(2,"0");return`${ge}-${K}-${le}`},ne=he=>{if(!he)return"";if(typeof he=="object"&&typeof he.toDate=="function")return $(he.toDate());if(he instanceof Date)return $(he);const ge=new Date(he);return isNaN(+ge)?"":$(ge)},R=B.useMemo(()=>n.map(he=>({...he,designer_start_date:ne(he.designer_start_date),designer_end_date:ne(he.designer_end_date),result_url:he.result_url??"",status:he.status??"대기"})),[n]),A=B.useMemo(()=>{const he=v.start?L(v.start):null,ge=v.end?L(v.end):null,K=V.trim().toLowerCase();return R.map(le=>({...le,displayStatus:te(le.status)})).filter(le=>{let fe=!0;if(p&&p!=="진행 상태 선택"&&(fe=fe&&le.displayStatus===p),he&&ge){const ve=U(le.request_date)||U(le.requested_at)||U(le.requestDate)||null;fe=fe&&!!ve&&ve>=he&&ve<=ge}if(K){const ve=String(le.design_request_id??"").toLowerCase(),I=String(le.requirement??"").toLowerCase();fe=fe&&(ve.includes(K)||I.includes(K))}return fe})},[R,p,v,V]),D=he=>z(he);B.useEffect(()=>{n.length&&d(he=>{const ge={...he};return n.forEach(K=>{ge[K.id]===void 0&&(ge[K.id]={start_dt:ne(K.designer_start_date),end_dt:ne(K.designer_end_date),result_url:K.result_url||"",status:K.status||"대기"})}),ge})},[n]);const k=(he,ge,K)=>{d(le=>({...le,[he]:{...le[he],[ge]:K}}))},j=he=>{if(!he)return null;const ge=new Date(he);return isNaN(+ge)?null:pt.fromDate(ge)},q=async he=>{const ge=c[he];if(!ge){alert("변경된 내용이 없습니다.");return}await Xa(Cr(qt,"design_request",he),{designer_start_date:j(ge.start_dt),designer_end_date:j(ge.end_dt),result_url:ge.result_url??"",status:ge.status??"대기"}),alert("저장되었습니다.")},M=he=>{e(he),t(!0)};return _.jsxs(o3,{children:[_.jsx(E_,{}),_.jsxs(l3,{children:[_.jsx(u3,{children:"디자이너 화면"}),_.jsx(T_,{onApplyStatus:N,onApplyRange:O,onSearch:D,keyword:T,onKeywordChange:C}),_.jsx(r3,{requests:A,formData:c,onChange:k,onSave:q,onDetailClick:M})]})]})}const o3=H.div``,l3=H.div`
  padding: 0 48px;
`,u3=H.h2`
  margin-top: 20px;
`;function c3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d}){const p=v=>{if(!v)return"-";if(v.toDate){const b=v.toDate();return`${b.getMonth()+1}/${b.getDate()}`}return v},g=v=>{v.stopPropagation(),d(e)};return _.jsxs(h3,{isCanceled:e.status==="취소",children:[_.jsx(pr,{children:t}),_.jsx(pr,{children:_.jsx(y3,{onClick:g,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(pr,{children:p(e.request_date)}),_.jsx(pr,{children:e.requester}),_.jsx(f3,{children:p(e.completion_dt)}),_.jsx(d3,{children:p(e.open_dt)}),_.jsx(pr,{children:e.task_form}),_.jsx(p3,{children:e.task_type}),_.jsx(m3,{children:_.jsxs(_3,{children:[e.emergency?_.jsx(uA,{children:"긴급"}):"",_.jsx(v3,{onClick:g,children:e.requirement})]})}),_.jsx(pr,{children:_.jsx(eT,{href:e.url,target:"_blank"})}),_.jsx(g3,{children:_.jsx(E3,{onClick:g,children:e.note||""})}),_.jsx(pr,{children:_.jsx(w3,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),_.jsx(pr,{children:e.result_url?_.jsx(eT,{href:e.result_url,target:"_blank"}):""}),_.jsx(pr,{children:p(e.designer_start_date)}),_.jsx(pr,{children:p(e.designer_end_date)}),_.jsxs(pr,{children:[_.jsxs(b3,{value:i,onChange:v=>a(v.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(v=>_.jsx("option",{value:v.name,children:v.name},v.id))]}),_.jsx(cA,{onClick:l,disabled:e.status==="취소",children:"배정"})]}),_.jsx(pr,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(hA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(T3,{children:"검수완료"}):""})]})}const h3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${uA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${hA}, ${cA} {
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
`,pr=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,f3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,d3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,p3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,m3=H.td`
  line-height: 15px;
  text-align: left;
`,g3=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,y3=H.span`
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
`,_3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,uA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,v3=H.span`
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
`,eT=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${v_}) no-repeat center / contain;
`,E3=H.span`
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
`,w3=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,cA=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,b3=H.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,hA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,T3=H.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function S3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c}){return _.jsx(x3,{children:_.jsxs(A3,{children:[_.jsx(R3,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(mn,{children:"번호"}),_.jsx(mn,{children:"문서번호"}),_.jsx(mn,{children:"요청일"}),_.jsx(mn,{children:"요청자"}),_.jsxs(mn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(mn,{children:"오픈일"}),_.jsx(mn,{children:"업무형태"}),_.jsx(mn,{children:"업무타입"}),_.jsx(mn,{children:"작업항목"}),_.jsx(mn,{children:"요청서 URL"}),_.jsx(mn,{children:"메모"}),_.jsx(mn,{children:"진행상태"}),_.jsx(mn,{children:"산출물 URL"}),_.jsxs(mn,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(mn,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(mn,{children:"디자이너 배정"}),_.jsx(mn,{children:"검수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((d,p)=>_.jsx(c3,{index:p+1,item:d,designerList:e,selectedDesigner:n[d.id]||"",onDesignerSelect:g=>i(d.id,g),onAssignDesigner:()=>a(d.id),onSendToRequester:()=>l(d.id),onDetailClick:c},d.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const x3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,A3=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,R3=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,mn=H.th`
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
`,tT="진행 상태 선택",nT="요청자 선택",rT="디자이너 선택";function C3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=B.useState([]),[a,l]=B.useState([]),[c,d]=B.useState({}),[p,g]=B.useState(tT),[v,b]=B.useState({start:null,end:null}),[T,C]=B.useState(""),[V,z]=B.useState(""),[O,N]=B.useState([]),[L,U]=B.useState(nT),[te,$]=B.useState([]),[ne,R]=B.useState(rT);B.useEffect(()=>{const I=Ks(ai(qt,"design_request"),p_("design_request_id","desc")),ee=Yd(I,se=>{const ie=se.docs.map(de=>({id:de.id,...de.data()}));i(ie)});return()=>ee()},[]),B.useEffect(()=>{n.length&&d(I=>{const ee={...I};return n.forEach(se=>{ee[se.id]===void 0&&(ee[se.id]=se.assigned_designer??"")}),ee})},[n]),B.useEffect(()=>{(async()=>{const ee=Ks(ai(qt,"users"),ia("role","==",2)),ie=(await oy(ee)).docs.map(de=>({id:de.id,...de.data()}));l(ie),$(ie.map(de=>de.name).filter(Boolean))})()},[]);const A=(I,ee)=>{d(se=>({...se,[I]:ee}))},D=async I=>{const ee=c[I];if(!ee){alert("디자이너를 선택하세요.");return}const se=Cr(qt,"design_request",I);await Xa(se,{assigned_designer:ee}),alert("디자이너가 배정되었습니다!"),i(ie=>ie.map(de=>de.id===I?{...de,assigned_designer:ee}:de))},k=async I=>{await Xa(Cr(qt,"design_request",I),{manager_review_status:"검수완료",status:"검수중"}),i(ee=>ee.map(se=>se.id===I?{...se,manager_review_status:"검수완료",status:"검수중"}:se)),alert("요청자에게 전달되었습니다.")};B.useEffect(()=>{(async()=>{const I=Ks(ai(qt,"users"),ia("role","==",1)),se=(await oy(I)).docs.map(ie=>ie.data().name).filter(Boolean);N(se)})()},[]);const j=I=>{e(I),t(!0)},q=I=>b(I),M=I=>g(I),he=I=>z(I.trim()),ge=I=>U(I),K=I=>R(I),le=I=>new Date(I.getFullYear(),I.getMonth(),I.getDate()),fe=I=>{if(!I)return null;if(typeof I=="object"&&typeof I.toDate=="function")return le(I.toDate());if(I instanceof Date)return le(I);if(typeof I=="number")return le(new Date(I));if(typeof I=="string"){const se=I.replace(/\./g,"-").replace(/\//g,"-").split("-");if(se.length===3){const[de,xe,we]=se.map(Number),ft=de>31?de:new Date().getFullYear();return new Date(ft,xe-1,we)}if(se.length===2){const[de,xe]=se.map(Number),we=new Date().getFullYear();return new Date(we,de-1,xe)}const ie=new Date(I);return isNaN(+ie)?null:le(ie)}return null},ve=B.useMemo(()=>{const I=v.start?le(v.start):null,ee=v.end?le(v.end):null,se=V.toLowerCase();return n.filter(ie=>{if(p!==tT&&ie.status!==p||L!==nT&&ie.requester!==L||ne!==rT&&ie.assigned_designer!==ne)return!1;if(I&&ee){const de=fe(ie.request_date)||fe(ie.requested_at)||fe(ie.requestDate);if(!de||de<I||de>ee)return!1}if(se){const de=String(ie.design_request_id??"").toLowerCase(),xe=String(ie.requirement??"").toLowerCase();if(!de.includes(se)&&!xe.includes(se))return!1}return!0})},[n,p,L,ne,v,V]);return _.jsxs(I3,{children:[_.jsx(E_,{}),_.jsxs(D3,{children:[_.jsx(k3,{children:"매니저 요청리스트"}),_.jsx(T_,{onApplyStatus:M,onApplyRange:q,onSearch:he,keyword:T,onKeywordChange:C,isManager:!0,requesterOptions:O,onApplyRequester:ge,designerOptions:te,onApplyDesigner:K}),_.jsx(S3,{data:ve,designerList:a,selectedDesigners:c,designerSelect:A,assignDesigner:D,sendToRequester:k,onDetailClick:j})]})]})}const I3=H.div``,D3=H.div`
  padding: 0 48px;
`,k3=H.h2`
  margin-top: 20px;
`;function O3({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(zj,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(a3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(C3,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(M3,{children:a()})}const M3=H.main``,N3="./assets/aside-logo-DoEwMgfJ.svg",P3="./assets/myrequest-icon-DhmqrZY6.svg";function V3({item:t}){return _.jsxs(L3,{status:t.status,children:[_.jsx(j3,{children:t.status}),_.jsx(U3,{status:t.status,children:t.count})]})}const L3=H.li`
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
`,j3=H.span`
  font-size: 16px;
  font-weight: 500;
`,U3=H.span`
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
`;function q3({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=[{status:"대기중",count:t.filter(c=>c.status==="대기").length},{status:"작업중",count:t.filter(c=>c.status==="진행중").length},{status:"완료",count:t.filter(c=>c.status==="완료").length}],l=(c,d)=>{switch(c){case 1:return`${d}님의 요청`;case 2:return`${d}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return _.jsxs(B3,{children:[_.jsxs(z3,{children:[_.jsx(F3,{src:N3}),_.jsx($3,{children:"업무 관리시스템"})]}),e===1&&_.jsx(H3,{children:_.jsx(G3,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(Y3,{children:[_.jsxs(W3,{children:[_.jsx(Q3,{src:P3}),_.jsx(K3,{children:l(e,n)})]}),_.jsx(X3,{children:a.map(c=>_.jsx(V3,{item:c},c.status))})]})]})}const B3=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,z3=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,F3=H.img`
  margin-right: 8px;
`,$3=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,H3=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,G3=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Y3=H.div`
  padding: 0 24px;
`,W3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,Q3=H.img``,K3=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,X3=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function Z3({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(J3,{isVisible:t,onClick:e}),_.jsx(e9,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const J3=H.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,e9=H.div`
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
`,fA="./assets/requestformexit-button-BcAG546a.svg",t9="./assets/checkbox-checked-eOVFoR8b.svg",bf={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function iT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=B.useState(bf),[d,p]=B.useState([]),g=(N,L)=>{c(U=>({...U,[N]:L}))},v=()=>p(N=>[...N,{...bf}]),b=N=>p(L=>L.filter((U,te)=>te!==N)),T=(N,L,U)=>p(te=>{const $=[...te];return $[N]={...$[N],[L]:U},$}),C=N=>N?pt.fromDate(new Date(N)):null,V=async()=>{const N=new Date,L=N.getFullYear().toString().slice(2),U=(N.getMonth()+1).toString().padStart(2,"0"),te=Ks(ai(qt,"design_request"),ia("design_request_id",">=",`H${L}${U}000`),ia("design_request_id","<",`H${L}${U}999`)),$=await oy(te);return{year:L,month:U,base:$.size}},z=(N,L,U)=>`H${N}${L}${U.toString().padStart(3,"0")}`,O=async N=>{if(N.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await Xa(Cr(qt,"design_request",e.id),{completion_dt:C(l.completion_dt),open_dt:C(l.open_dt),task_form:l.task_form,task_type:l.task_type,requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:jb()}),alert("요청이 수정되었습니다!"),i();return}const L=[l,...d],U=L.findIndex(D=>!D.requirement);if(U!==-1){alert(`${U+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:te,month:$,base:ne}=await V();let R=ne;const A=new Date;for(const D of L){R+=1;const k=z(te,$,R);await C4(ai(qt,"design_request"),{design_request_id:k,request_date:C(A.toISOString()),requester:t,completion_dt:C(D.completion_dt),open_dt:C(D.open_dt),task_form:D.task_form,task_type:D.task_type,requirement:D.requirement,url:D.url,note:D.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:D.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:jb(),updated_at:null,delete_at:null,work_hour:""})}alert(`${L.length}건이 등록되었습니다!`),p([]),c(bf),i()};return B.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),B.useEffect(()=>{!n||a||(c(bf),p([]))},[n]),_.jsxs(_.Fragment,{children:[_.jsxs(r9,{children:[_.jsx(i9,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(s9,{type:"button",onClick:i})]}),_.jsxs(n9,{onSubmit:O,children:[_.jsxs(a9,{children:[!a&&d.map((N,L)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",L+1]}),_.jsx("button",{type:"button",onClick:()=>b(L),children:"삭제"})]}),_.jsxs(sT,{children:[_.jsx(aT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(sn,{children:"문서번호"}),_.jsx(an,{})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`completion_dt_ex_${L}`,children:"완료 요청일"})}),_.jsx(an,{children:_.jsx(Tf,{id:`completion_dt_ex_${L}`,type:"date",value:N.completion_dt||"",onChange:U=>T(L,"completion_dt",U.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`open_dt_ex_${L}`,children:"오픈일"})}),_.jsx(an,{children:_.jsx(Tf,{id:`open_dt_ex_${L}`,type:"date",value:N.open_dt||"",onChange:U=>T(L,"open_dt",U.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`task_form_ex_${L}`,children:"업무 형태"})}),_.jsx(an,{children:_.jsxs(Sf,{id:`task_form_ex_${L}`,value:N.task_form||"GHS",onChange:U=>T(L,"task_form",U.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`task_type_ex_${L}`,children:"업무 유형"})}),_.jsx(an,{children:_.jsxs(Sf,{id:`task_type_ex_${L}`,value:N.task_type||"프론트테마",onChange:U=>T(L,"task_type",U.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`requirement_ex_${L}`,children:"작업 항목"})}),_.jsx(an,{children:_.jsx(oT,{id:`requirement_ex_${L}`,type:"text",value:N.requirement||"",onChange:U=>T(L,"requirement",U.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`emergency_ex_${L}`,children:"긴급 일정"})}),_.jsx(an,{children:_.jsx(cT,{children:_.jsxs(hT,{htmlFor:`emergency_ex_${L}`,children:[_.jsx(fT,{id:`emergency_ex_${L}`,type:"checkbox",checked:!!N.emergency,onChange:U=>T(L,"emergency",U.target.checked)}),_.jsx(dT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`url_ex_${L}`,children:"요청서 URL"})}),_.jsx(an,{children:_.jsx(lT,{id:`url_ex_${L}`,value:N.url||"",onChange:U=>T(L,"url",U.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`note_ex_${L}`,children:"메모"})}),_.jsx(an,{children:_.jsx(uT,{id:`note_ex_${L}`,rows:4,value:N.note||"",onChange:U=>T(L,"note",U.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},L)),_.jsxs(sT,{children:[_.jsx(aT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(sn,{children:"문서번호"}),_.jsx(an,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(an,{children:_.jsx(Tf,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:N=>g("completion_dt",N.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(an,{children:_.jsx(Tf,{type:"date",id:"open_dt",value:l.open_dt,onChange:N=>g("open_dt",N.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx(an,{children:_.jsxs(Sf,{id:"task_form",value:l.task_form,onChange:N=>g("task_form",N.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(an,{children:_.jsxs(Sf,{id:"task_type",value:l.task_type,onChange:N=>g("task_type",N.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(an,{children:_.jsx(oT,{type:"text",id:"requirement",value:l.requirement,onChange:N=>g("requirement",N.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(an,{children:_.jsx(cT,{children:_.jsxs(hT,{htmlFor:"emergency",children:[_.jsx(fT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:N=>g("emergency",N.target.checked)}),_.jsx(dT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(an,{children:_.jsx(lT,{id:"url",value:l.url,onChange:N=>g("url",N.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"note",children:"메모"})}),_.jsx(an,{children:_.jsx(uT,{id:"note",rows:4,value:l.note,onChange:N=>g("note",N.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(o9,{children:[_.jsx(l9,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(u9,{type:"button",onClick:v,children:"추가 등록하기"})]})]})]})}const n9=H.form`
  font-family: 'Pretendard';
`,r9=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,i9=H.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,s9=H.button`
  width: 24px;
  height: 24px;
  background: url(${fA}) no-repeat center;
  background-size: contain;
`,sT=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,a9=H.div`
  max-height: 690px;
  overflow: auto;
`,aT=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,sn=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,an=H.td`
  padding: 12px 24px;
  border-right: none;
`,xn=H.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Tf=H.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,oT=H.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,lT=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,uT=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,cT=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,hT=H.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,fT=H.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${t9}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,dT=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,Sf=H.select`
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
  background-image: url(${Mx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,o9=H.div`
  margin-top: 24px;
  text-align: center;
`,l9=H.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,u9=H.button`
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
`;function c9({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(h9,{children:[_.jsx(f9,{children:"디자인 요청 상세"}),_.jsx(d9,{type:"button",onClick:e})]}),_.jsxs(p9,{children:[_.jsx(m9,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Xr,{children:"문서번호"}),_.jsx(za,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"요청일"}),_.jsx(za,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"완료 요청일"}),_.jsx(g9,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"오픈일"}),_.jsx(y9,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"업무 형태"}),_.jsx(za,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"업무 유형"}),_.jsx(za,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"작업 항목"}),_.jsx(za,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"긴급 일정"}),_.jsx(za,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"요청서 URL"}),_.jsx(za,{children:t!=null&&t.url?_.jsx(v9,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"메모"}),_.jsx(_9,{children:_.jsx(E9,{children:t.note})})]})]})]})]})}const h9=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,f9=H.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,d9=H.button`
  width: 24px;
  height: 24px;
  background: url(${fA}) no-repeat center;
  background-size: contain;
`,p9=H.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,m9=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Xr=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,za=H.td`
  padding: 12px 24px;
  border-right: none;
`,g9=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,y9=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,_9=H.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,v9=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,E9=H.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function w9(){const[t,e]=B.useState(0),[n,i]=B.useState([]),[a,l]=B.useState(""),[c,d]=B.useState(!1),[p,g]=B.useState(void 0),[v,b]=B.useState(null);B.useEffect(()=>{const V=Td(ao,async z=>{if(z){l(z.displayName||"");const O=await m_(Cr(qt,"users",z.uid));if(O.exists()){const L=O.data().role,U=z.displayName;e(L);let te;L===1?te=Ks(ai(qt,"design_request"),ia("requester","==",U)):L===2?te=Ks(ai(qt,"design_request"),ia("assigned_designer","==",U)):te=ai(qt,"design_request"),Yd(te,$=>{const ne=$.docs.map(R=>{const A=R.data();return{id:R.id,status:A.status??"대기중"}});i(ne)})}}else e(0),l(""),i([])});return()=>V()},[]);const T=()=>{g(void 0),b("create"),d(!0)},C=()=>{d(!1),g(void 0)};return _.jsxs(b9,{children:[_.jsx(q3,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(T9,{children:[_.jsx($4,{}),_.jsx(O3,{userRole:t,setIsDrawerOpen:d,setEditData:V=>{g(V),b("edit")},setDetailData:V=>{g(V),b("detail")}})]}),_.jsxs(Z3,{isOpen:c,onClose:C,children:[v==="create"&&_.jsx(iT,{userName:a,isDrawerOpen:c,onClose:C}),v==="edit"&&p&&_.jsx(iT,{userName:a,isDrawerOpen:c,editData:p,onClose:C}),v==="detail"&&p&&_.jsx(c9,{data:p,onClose:C})]})]})}const b9=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,T9=H.div`
  flex: 1;
`;function S9(){const[t,e]=B.useState(""),[n,i]=B.useState(""),[a,l]=B.useState(""),[c,d]=B.useState(""),p=Ic(),g=async()=>{if(a!==c){alert("비밀번호가 일치하지 않습니다.");return}ZO(ao,n,a).then(async v=>{const b=v.user;await tM(b,{displayName:t}),await R4(Cr(qt,"users",b.uid),{name:t,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),p("/")}).catch(v=>{alert("회원가입 중 오류 발생: "+v.message)})};return _.jsx(x9,{children:_.jsxs(A9,{children:[_.jsxs(R9,{children:[_.jsx(C9,{children:"PDMS"}),_.jsx(I9,{children:"Pushcomz Design Management System"})]}),_.jsx(D9,{children:_.jsx(k9,{src:Cx})}),_.jsxs(O9,{children:[_.jsx(M9,{type:"text",value:t,onChange:v=>e(v.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(N9,{type:"text",value:n,onChange:v=>i(v.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(P9,{type:"password",value:a,onChange:v=>l(v.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(V9,{type:"password",value:c,onChange:v=>d(v.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(L9,{onClick:g,children:"등록하기"})]})})}const x9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,A9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,R9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,C9=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,I9=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,D9=H.div`
  margin-right: auto;
`,k9=H.img`
  
`,O9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,M9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,N9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,P9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,V9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,L9=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function j9(){const[t,e]=B.useState(!1);return _.jsx(oI,{basename:"/pdms-test",children:_.jsxs(jC,{children:[_.jsx(xf,{path:"/",element:_.jsx(D4,{onLoginSuccess:()=>e(!0)})}),_.jsx(xf,{path:"/dashboard",element:t?_.jsx(w9,{}):_.jsx(VC,{to:"/"})}),_.jsx(xf,{path:"/signup",element:_.jsx(S9,{})})]})})}const U9="/assets/Pretendard-Bold-C0IAtCzs.woff2",q9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",B9="/assets/Pretendard-Medium-BCuOcOjL.woff2",z9="/assets/Pretendard-Regular-BnvhP503.woff2",F9=t1`
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
    src: url(${U9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${q9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${B9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${z9}) format('woff2');
    font-weight: 400;
  }

`,$9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},H9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},G9={colors:$9,mixin:H9};YR.createRoot(document.getElementById("root")).render(_.jsx(B.StrictMode,{children:_.jsxs(mD,{theme:G9,children:[_.jsx(j9,{}),_.jsx(F9,{})]})}));
