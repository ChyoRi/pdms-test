(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function CR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fm={exports:{}},Fu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE;function IR(){if(RE)return Fu;RE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Fu.Fragment=e,Fu.jsx=n,Fu.jsxs=n,Fu}var CE;function DR(){return CE||(CE=1,Fm.exports=IR()),Fm.exports}var _=DR(),$m={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE;function kR(){if(IE)return Ne;IE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,q={};function k(L,se,ue){this.props=L,this.context=se,this.refs=q,this.updater=ue||C}k.prototype.isReactComponent={},k.prototype.setState=function(L,se){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,se,"setState")},k.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=k.prototype;function j(L,se,ue){this.props=L,this.context=se,this.refs=q,this.updater=ue||C}var B=j.prototype=new P;B.constructor=j,D(B,k.prototype),B.isPureReactComponent=!0;var te=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function A(L,se,ue,le,ye,Ie){return ue=Ie.ref,{$$typeof:t,type:L,key:se,ref:ue!==void 0?ue:null,props:Ie}}function R(L,se){return A(L.type,se,void 0,void 0,void 0,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function V(L){var se={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ue){return se[ue]})}var U=/\/+/g;function $(L,se){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):se.toString(36)}function N(){}function dt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(se){L.status==="pending"&&(L.status="fulfilled",L.value=se)},function(se){L.status==="pending"&&(L.status="rejected",L.reason=se)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Ke(L,se,ue,le,ye){var Ie=typeof L;(Ie==="undefined"||Ie==="boolean")&&(L=null);var _e=!1;if(L===null)_e=!0;else switch(Ie){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(L.$$typeof){case t:case e:_e=!0;break;case v:return _e=L._init,Ke(_e(L._payload),se,ue,le,ye)}}if(_e)return ye=ye(L),_e=le===""?"."+$(L,0):le,te(ye)?(ue="",_e!=null&&(ue=_e.replace(U,"$&/")+"/"),Ke(ye,se,ue,"",function(Tt){return Tt})):ye!=null&&(I(ye)&&(ye=R(ye,ue+(ye.key==null||L&&L.key===ye.key?"":(""+ye.key).replace(U,"$&/")+"/")+_e)),se.push(ye)),1;_e=0;var gt=le===""?".":le+":";if(te(L))for(var Fe=0;Fe<L.length;Fe++)le=L[Fe],Ie=gt+$(le,Fe),_e+=Ke(le,se,ue,Ie,ye);else if(Fe=w(L),typeof Fe=="function")for(L=Fe.call(L),Fe=0;!(le=L.next()).done;)le=le.value,Ie=gt+$(le,Fe++),_e+=Ke(le,se,ue,Ie,ye);else if(Ie==="object"){if(typeof L.then=="function")return Ke(dt(L),se,ue,le,ye);throw se=String(L),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return _e}function ee(L,se,ue){if(L==null)return L;var le=[],ye=0;return Ke(L,le,"","",function(Ie){return se.call(ue,Ie,ye++)}),le}function ce(L){if(L._status===-1){var se=L._result;se=se(),se.then(function(ue){(L._status===0||L._status===-1)&&(L._status=1,L._result=ue)},function(ue){(L._status===0||L._status===-1)&&(L._status=2,L._result=ue)}),L._status===-1&&(L._status=0,L._result=se)}if(L._status===1)return L._result.default;throw L._result}var pe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Te(){}return Ne.Children={map:ee,forEach:function(L,se,ue){ee(L,function(){se.apply(this,arguments)},ue)},count:function(L){var se=0;return ee(L,function(){se++}),se},toArray:function(L){return ee(L,function(se){return se})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ne.Component=k,Ne.Fragment=n,Ne.Profiler=a,Ne.PureComponent=j,Ne.StrictMode=i,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(L){return M.H.useMemoCache(L)}},Ne.cache=function(L){return function(){return L.apply(null,arguments)}},Ne.cloneElement=function(L,se,ue){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var le=D({},L.props),ye=L.key,Ie=void 0;if(se!=null)for(_e in se.ref!==void 0&&(Ie=void 0),se.key!==void 0&&(ye=""+se.key),se)!J.call(se,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&se.ref===void 0||(le[_e]=se[_e]);var _e=arguments.length-2;if(_e===1)le.children=ue;else if(1<_e){for(var gt=Array(_e),Fe=0;Fe<_e;Fe++)gt[Fe]=arguments[Fe+2];le.children=gt}return A(L.type,ye,void 0,void 0,Ie,le)},Ne.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},Ne.createElement=function(L,se,ue){var le,ye={},Ie=null;if(se!=null)for(le in se.key!==void 0&&(Ie=""+se.key),se)J.call(se,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ye[le]=se[le]);var _e=arguments.length-2;if(_e===1)ye.children=ue;else if(1<_e){for(var gt=Array(_e),Fe=0;Fe<_e;Fe++)gt[Fe]=arguments[Fe+2];ye.children=gt}if(L&&L.defaultProps)for(le in _e=L.defaultProps,_e)ye[le]===void 0&&(ye[le]=_e[le]);return A(L,Ie,void 0,void 0,null,ye)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(L){return{$$typeof:d,render:L}},Ne.isValidElement=I,Ne.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ce}},Ne.memo=function(L,se){return{$$typeof:g,type:L,compare:se===void 0?null:se}},Ne.startTransition=function(L){var se=M.T,ue={};M.T=ue;try{var le=L(),ye=M.S;ye!==null&&ye(ue,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Te,pe)}catch(Ie){pe(Ie)}finally{M.T=se}},Ne.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},Ne.use=function(L){return M.H.use(L)},Ne.useActionState=function(L,se,ue){return M.H.useActionState(L,se,ue)},Ne.useCallback=function(L,se){return M.H.useCallback(L,se)},Ne.useContext=function(L){return M.H.useContext(L)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(L,se){return M.H.useDeferredValue(L,se)},Ne.useEffect=function(L,se,ue){var le=M.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return le.useEffect(L,se)},Ne.useId=function(){return M.H.useId()},Ne.useImperativeHandle=function(L,se,ue){return M.H.useImperativeHandle(L,se,ue)},Ne.useInsertionEffect=function(L,se){return M.H.useInsertionEffect(L,se)},Ne.useLayoutEffect=function(L,se){return M.H.useLayoutEffect(L,se)},Ne.useMemo=function(L,se){return M.H.useMemo(L,se)},Ne.useOptimistic=function(L,se){return M.H.useOptimistic(L,se)},Ne.useReducer=function(L,se,ue){return M.H.useReducer(L,se,ue)},Ne.useRef=function(L){return M.H.useRef(L)},Ne.useState=function(L){return M.H.useState(L)},Ne.useSyncExternalStore=function(L,se,ue){return M.H.useSyncExternalStore(L,se,ue)},Ne.useTransition=function(){return M.H.useTransition()},Ne.version="19.1.0",Ne}var DE;function ry(){return DE||(DE=1,$m.exports=kR()),$m.exports}var F=ry();const fe=CR(F);var Hm={exports:{}},$u={},Gm={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function OR(){return kE||(kE=1,function(t){function e(ee,ce){var pe=ee.length;ee.push(ce);e:for(;0<pe;){var Te=pe-1>>>1,L=ee[Te];if(0<a(L,ce))ee[Te]=ce,ee[pe]=L,pe=Te;else break e}}function n(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var ce=ee[0],pe=ee.pop();if(pe!==ce){ee[0]=pe;e:for(var Te=0,L=ee.length,se=L>>>1;Te<se;){var ue=2*(Te+1)-1,le=ee[ue],ye=ue+1,Ie=ee[ye];if(0>a(le,pe))ye<L&&0>a(Ie,le)?(ee[Te]=Ie,ee[ye]=pe,Te=ye):(ee[Te]=le,ee[ue]=pe,Te=ue);else if(ye<L&&0>a(Ie,pe))ee[Te]=Ie,ee[ye]=pe,Te=ye;else break e}}return ce}function a(ee,ce){var pe=ee.sortIndex-ce.sortIndex;return pe!==0?pe:ee.id-ce.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,w=3,C=!1,D=!1,q=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function te(ee){for(var ce=n(g);ce!==null;){if(ce.callback===null)i(g);else if(ce.startTime<=ee)i(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(g)}}function M(ee){if(q=!1,te(ee),!D)if(n(p)!==null)D=!0,J||(J=!0,$());else{var ce=n(g);ce!==null&&Ke(M,ce.startTime-ee)}}var J=!1,A=-1,R=5,I=-1;function V(){return k?!0:!(t.unstable_now()-I<R)}function U(){if(k=!1,J){var ee=t.unstable_now();I=ee;var ce=!0;try{e:{D=!1,q&&(q=!1,j(A),A=-1),C=!0;var pe=w;try{t:{for(te(ee),T=n(p);T!==null&&!(T.expirationTime>ee&&V());){var Te=T.callback;if(typeof Te=="function"){T.callback=null,w=T.priorityLevel;var L=Te(T.expirationTime<=ee);if(ee=t.unstable_now(),typeof L=="function"){T.callback=L,te(ee),ce=!0;break t}T===n(p)&&i(p),te(ee)}else i(p);T=n(p)}if(T!==null)ce=!0;else{var se=n(g);se!==null&&Ke(M,se.startTime-ee),ce=!1}}break e}finally{T=null,w=pe,C=!1}ce=void 0}}finally{ce?$():J=!1}}}var $;if(typeof B=="function")$=function(){B(U)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,dt=N.port2;N.port1.onmessage=U,$=function(){dt.postMessage(null)}}else $=function(){P(U,0)};function Ke(ee,ce){A=P(function(){ee(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ee){ee.callback=null},t.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_next=function(ee){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var pe=w;w=ce;try{return ee()}finally{w=pe}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(ee,ce){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var pe=w;w=ee;try{return ce()}finally{w=pe}},t.unstable_scheduleCallback=function(ee,ce,pe){var Te=t.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Te+pe:Te):pe=Te,ee){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=pe+L,ee={id:v++,callback:ce,priorityLevel:ee,startTime:pe,expirationTime:L,sortIndex:-1},pe>Te?(ee.sortIndex=pe,e(g,ee),n(p)===null&&ee===n(g)&&(q?(j(A),A=-1):q=!0,Ke(M,pe-Te))):(ee.sortIndex=L,e(p,ee),D||C||(D=!0,J||(J=!0,$()))),ee},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(ee){var ce=w;return function(){var pe=w;w=ce;try{return ee.apply(this,arguments)}finally{w=pe}}}}(Ym)),Ym}var OE;function MR(){return OE||(OE=1,Gm.exports=OR()),Gm.exports}var Wm={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME;function NR(){if(ME)return bn;ME=1;var t=ry();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,bn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},bn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},bn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},bn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},bn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:C}):v==="script"&&i.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},bn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},bn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},bn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},bn.requestFormReset=function(p){i.d.r(p)},bn.unstable_batchedUpdates=function(p,g){return p(g)},bn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},bn.useFormStatus=function(){return c.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var NE;function PR(){if(NE)return Wm.exports;NE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Wm.exports=NR(),Wm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PE;function VR(){if(PE)return $u;PE=1;var t=MR(),e=ry(),n=PR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var b=!1,S=f.child;S;){if(S===o){b=!0,o=f,u=m;break}if(S===u){b=!0,u=f,o=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===o){b=!0,o=m,u=f;break}if(S===u){b=!0,u=m,o=f;break}S=S.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),B=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function $(r){return r===null||typeof r!="object"?null:(r=U&&r[U]||r["@@iterator"],typeof r=="function"?r:null)}var N=Symbol.for("react.client.reference");function dt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===N?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case k:return"Profiler";case q:return"StrictMode";case M:return"Suspense";case J:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case B:return(r.displayName||"Context")+".Provider";case j:return(r._context.displayName||"Context")+".Consumer";case te:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case A:return s=r.displayName||null,s!==null?s:dt(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return dt(r(s))}catch{}}return null}var Ke=Array.isArray,ee=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Te=[],L=-1;function se(r){return{current:r}}function ue(r){0>L||(r.current=Te[L],Te[L]=null,L--)}function le(r,s){L++,Te[L]=r.current,r.current=s}var ye=se(null),Ie=se(null),_e=se(null),gt=se(null);function Fe(r,s){switch(le(_e,s),le(Ie,r),le(ye,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?tE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=tE(s),r=nE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(ye),le(ye,r)}function Tt(){ue(ye),ue(Ie),ue(_e)}function Pn(r){r.memoizedState!==null&&le(gt,r);var s=ye.current,o=nE(s,r.type);s!==o&&(le(Ie,r),le(ye,o))}function vn(r){Ie.current===r&&(ue(ye),ue(Ie)),gt.current===r&&(ue(gt),ju._currentValue=pe)}var Kt=Object.prototype.hasOwnProperty,hi=t.unstable_scheduleCallback,Mr=t.unstable_cancelCallback,la=t.unstable_shouldYield,co=t.unstable_requestPaint,Vn=t.unstable_now,Bl=t.unstable_getCurrentPriorityLevel,ua=t.unstable_ImmediatePriority,as=t.unstable_UserBlockingPriority,fi=t.unstable_NormalPriority,ho=t.unstable_LowPriority,Nr=t.unstable_IdlePriority,di=t.log,fo=t.unstable_setDisableYieldValue,_t=null,Xe=null;function Dn(r){if(typeof di=="function"&&fo(r),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(_t,r)}catch{}}var Xt=Math.clz32?Math.clz32:pi,po=Math.log,zl=Math.LN2;function pi(r){return r>>>=0,r===0?32:31-(po(r)/zl|0)|0}var mi=256,gi=4194304;function zn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function yi(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=zn(u):(b&=S,b!==0?f=zn(b):o||(o=S&~r,o!==0&&(f=zn(o))))):(S=u&~m,S!==0?f=zn(S):b!==0?f=zn(b):o||(o=u&~r,o!==0&&(f=zn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function _i(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function os(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var r=mi;return mi<<=1,(mi&4194048)===0&&(mi=256),r}function Je(){var r=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),r}function xe(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function We(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Zt(r,s,o,u,f,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,O=r.expirationTimes,Q=r.hiddenUpdates;for(o=b&~o;0<o;){var ne=31-Xt(o),ae=1<<ne;S[ne]=0,O[ne]=-1;var K=Q[ne];if(K!==null)for(Q[ne]=null,ne=0;ne<K.length;ne++){var X=K[ne];X!==null&&(X.lane&=-536870913)}o&=~ae}u!==0&&Me(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Me(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-Xt(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function ca(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-Xt(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Pr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ls(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function tr(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:bE(r.type))}function us(r,s){var o=ce.p;try{return ce.p=r,s()}finally{ce.p=o}}var vt=Math.random().toString(36).slice(2),zt="__reactFiber$"+vt,Mt="__reactProps$"+vt,nr="__reactContainer$"+vt,Fl="__reactEvents$"+vt,Gd="__reactListeners$"+vt,cs="__reactHandles$"+vt,Fc="__reactResources$"+vt,ha="__reactMarker$"+vt;function hs(r){delete r[zt],delete r[Mt],delete r[Fl],delete r[Gd],delete r[cs]}function vi(r){var s=r[zt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[nr]||o[zt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=aE(r);r!==null;){if(o=r[zt])return o;r=aE(r)}return s}r=o,o=r.parentNode}return null}function Vr(r){if(r=r[zt]||r[nr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Lr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function kn(r){var s=r[Fc];return s||(s=r[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function It(r){r[ha]=!0}var $l=new Set,mo={};function _r(r,s){Ei(r,s),Ei(r+"Capture",s)}function Ei(r,s){for(mo[r]=s,r=0;r<s.length;r++)$l.add(s[r])}var $c=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hc={},fa={};function Gc(r){return Kt.call(fa,r)?!0:Kt.call(Hc,r)?!1:$c.test(r)?fa[r]=!0:(Hc[r]=!0,!1)}function fs(r,s,o){if(Gc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function jr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function cn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var da,Yc;function bi(r){if(da===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);da=s&&s[1]||"",Yc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+da+r+Yc}var go=!1;function yo(r,s){if(!r||go)return"";go=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(X){var K=X}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(X){K=X}r.call(ae.prototype)}}else{try{throw Error()}catch(X){K=X}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(X){if(X&&K&&typeof X.stack=="string")return[X.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var O=b.split(`
`),Q=S.split(`
`);for(f=u=0;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;for(;f<Q.length&&!Q[f].includes("DetermineComponentFrameRoot");)f++;if(u===O.length||f===Q.length)for(u=O.length-1,f=Q.length-1;1<=u&&0<=f&&O[u]!==Q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(O[u]!==Q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||O[u]!==Q[f]){var ne=`
`+O[u].replace(" at new "," at ");return r.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",r.displayName)),ne}while(1<=u&&0<=f);break}}}finally{go=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?bi(o):""}function Hl(r){switch(r.tag){case 26:case 27:case 5:return bi(r.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return yo(r.type,!1);case 11:return yo(r.type.render,!1);case 1:return yo(r.type,!0);case 31:return bi("Activity");default:return""}}function _o(r){try{var s="";do s+=Hl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function On(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Gl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Yd(r){var s=Gl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function vo(r){r._valueTracker||(r._valueTracker=Yd(r))}function Yl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Gl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function pa(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Wd=/[\n"\\]/g;function Nt(r){return r.replace(Wd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Fn(r,s,o,u,f,m,b,S){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+On(s)):r.value!==""+On(s)&&(r.value=""+On(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?ds(r,b,On(s)):o!=null?ds(r,b,On(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+On(S):r.removeAttribute("name")}function ma(r,s,o,u,f,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+On(o):"",s=s!=null?""+On(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function ds(r,s,o){s==="number"&&pa(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ti(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+On(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function at(r,s,o){if(s!=null&&(s=""+On(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+On(o):""}function ga(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(Ke(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=On(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function rr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var ya=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||ya.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Wl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&Wc(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&Wc(r,m,s[m])}function Ql(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(r){return Kd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var wi=null;function ir(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Si=null,xi=null;function Kl(r){var s=Vr(r);if(s&&(r=s.stateNode)){var o=r[Mt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Fn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Mt]||null;if(!f)throw Error(i(90));Fn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Yl(u)}break e;case"textarea":at(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ti(r,!!o.multiple,s,!1)}}}var Ur=!1;function Qc(r,s,o){if(Ur)return r(s,o);Ur=!0;try{var u=r(s);return u}finally{if(Ur=!1,(Si!==null||xi!==null)&&(zh(),Si&&(s=Si,r=xi,xi=Si=null,Kl(s),r)))for(s=0;s<r.length;s++)Kl(r[s])}}function _a(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(vr)try{var va={};Object.defineProperty(va,"passive",{get:function(){sr=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{sr=!1}var qr=null,ps=null,Ai=null;function Xl(){if(Ai)return Ai;var r,s=ps,o=s.length,u,f="value"in qr?qr.value:qr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var b=o-r;for(u=1;u<=b&&s[o-u]===f[m-u];u++);return Ai=f.slice(r,1<u?1-u:void 0)}function Br(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function zr(){return!0}function Zl(){return!1}function Jt(r){function s(o,u,f,m,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zr:Zl,this.isPropagationStopped=Zl,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),s}var et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Jt(et),Ea=v({},et,{view:0,detail:0}),Kc=Jt(Ea),To,wo,Fr,ba=v({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Fr&&(Fr&&r.type==="mousemove"?(To=r.screenX-Fr.screenX,wo=r.screenY-Fr.screenY):wo=To=0,Fr=r),To)},movementY:function(r){return"movementY"in r?r.movementY:wo}}),ar=Jt(ba),Xc=v({},ba,{dataTransfer:0}),Xd=Jt(Xc),Ta=v({},Ea,{relatedTarget:0}),So=Jt(Ta),Jl=v({},et,{animationName:0,elapsedTime:0,pseudoElement:0}),xo=Jt(Jl),Zc=v({},et,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ao=Jt(Zc),Zd=v({},et,{data:0}),eu=Jt(Zd),wa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=eh[r])?!!s[r]:!1}function Sa(){return tu}var th=v({},Ea,{key:function(r){if(r.key){var s=wa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Br(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Jc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(r){return r.type==="keypress"?Br(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Br(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ro=Jt(th),nh=v({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Jt(nh),Ri=v({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),rh=Jt(Ri),ih=v({},et,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=Jt(ih),ah=v({},ba,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Co=Jt(ah),Mn=v({},et,{newState:0,oldState:0}),oh=Jt(Mn),lh=[9,13,27,32],$r=vr&&"CompositionEvent"in window,h=null;vr&&"documentMode"in document&&(h=document.documentMode);var y=vr&&"TextEvent"in window&&!h,E=vr&&(!$r||h&&8<h&&11>=h),x=" ",Y=!1;function Z(r,s){switch(r){case"keyup":return lh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $e=!1;function Ft(r,s){switch(r){case"compositionend":return he(s);case"keypress":return s.which!==32?null:(Y=!0,x);case"textInput":return r=s.data,r===x&&Y?null:r;default:return null}}function He(r,s){if($e)return r==="compositionend"||!$r&&Z(r,s)?(r=Xl(),Ai=ps=qr=null,$e=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $t(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!en[r.type]:s==="textarea"}function Ci(r,s,o,u){Si?xi?xi.push(u):xi=[u]:Si=u,s=Wh(s,"onChange"),0<s.length&&(o=new bo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var hn=null,Hr=null;function ru(r){K0(r,0)}function uh(r){var s=Lr(r);if(Yl(s))return r}function y_(r,s){if(r==="change")return s}var __=!1;if(vr){var Jd;if(vr){var ep="oninput"in document;if(!ep){var v_=document.createElement("div");v_.setAttribute("oninput","return;"),ep=typeof v_.oninput=="function"}Jd=ep}else Jd=!1;__=Jd&&(!document.documentMode||9<document.documentMode)}function E_(){hn&&(hn.detachEvent("onpropertychange",b_),Hr=hn=null)}function b_(r){if(r.propertyName==="value"&&uh(Hr)){var s=[];Ci(s,Hr,r,ir(r)),Qc(ru,s)}}function iA(r,s,o){r==="focusin"?(E_(),hn=s,Hr=o,hn.attachEvent("onpropertychange",b_)):r==="focusout"&&E_()}function sA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return uh(Hr)}function aA(r,s){if(r==="click")return uh(s)}function oA(r,s){if(r==="input"||r==="change")return uh(s)}function lA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var $n=typeof Object.is=="function"?Object.is:lA;function iu(r,s){if($n(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Kt.call(s,f)||!$n(r[f],s[f]))return!1}return!0}function T_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function w_(r,s){var o=T_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=T_(o)}}function S_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?S_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function x_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=pa(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=pa(r.document)}return s}function tp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var uA=vr&&"documentMode"in document&&11>=document.documentMode,Io=null,np=null,su=null,rp=!1;function A_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;rp||Io==null||Io!==pa(u)||(u=Io,"selectionStart"in u&&tp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),su&&iu(su,u)||(su=u,u=Wh(np,"onSelect"),0<u.length&&(s=new bo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Io)))}function xa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Do={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},ip={},R_={};vr&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function Aa(r){if(ip[r])return ip[r];if(!Do[r])return r;var s=Do[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in R_)return ip[r]=s[o];return r}var C_=Aa("animationend"),I_=Aa("animationiteration"),D_=Aa("animationstart"),cA=Aa("transitionrun"),hA=Aa("transitionstart"),fA=Aa("transitioncancel"),k_=Aa("transitionend"),O_=new Map,sp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sp.push("scrollEnd");function Er(r,s){O_.set(r,s),_r(s,[r])}var M_=new WeakMap;function or(r,s){if(typeof r=="object"&&r!==null){var o=M_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:_o(s)},M_.set(r,s),s)}return{value:r,source:s,stack:_o(s)}}var lr=[],ko=0,ap=0;function ch(){for(var r=ko,s=ap=ko=0;s<r;){var o=lr[s];lr[s++]=null;var u=lr[s];lr[s++]=null;var f=lr[s];lr[s++]=null;var m=lr[s];if(lr[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}m!==0&&N_(o,f,m)}}function hh(r,s,o,u){lr[ko++]=r,lr[ko++]=s,lr[ko++]=o,lr[ko++]=u,ap|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function op(r,s,o,u){return hh(r,s,o,u),fh(r)}function Oo(r,s){return hh(r,null,null,s),fh(r)}function N_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-Xt(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function fh(r){if(50<Du)throw Du=0,dm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Mo={};function dA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(r,s,o,u){return new dA(r,s,o,u)}function lp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ii(r,s){var o=r.alternate;return o===null?(o=Hn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function P_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function dh(r,s,o,u,f,m){var b=0;if(u=r,typeof r=="function")lp(r)&&(b=1);else if(typeof r=="string")b=mR(r,o,ye.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=Hn(31,o,s,f),r.elementType=I,r.lanes=m,r;case D:return Ra(o.children,f,m,s);case q:b=8,f|=24;break;case k:return r=Hn(12,o,s,f|2),r.elementType=k,r.lanes=m,r;case M:return r=Hn(13,o,s,f),r.elementType=M,r.lanes=m,r;case J:return r=Hn(19,o,s,f),r.elementType=J,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:case B:b=10;break e;case j:b=9;break e;case te:b=11;break e;case A:b=14;break e;case R:b=16,u=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Hn(b,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Ra(r,s,o,u){return r=Hn(7,r,u,s),r.lanes=o,r}function up(r,s,o){return r=Hn(6,r,null,s),r.lanes=o,r}function cp(r,s,o){return s=Hn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var No=[],Po=0,ph=null,mh=0,ur=[],cr=0,Ca=null,Di=1,ki="";function Ia(r,s){No[Po++]=mh,No[Po++]=ph,ph=r,mh=s}function V_(r,s,o){ur[cr++]=Di,ur[cr++]=ki,ur[cr++]=Ca,Ca=r;var u=Di;r=ki;var f=32-Xt(u)-1;u&=~(1<<f),o+=1;var m=32-Xt(s)+f;if(30<m){var b=f-f%5;m=(u&(1<<b)-1).toString(32),u>>=b,f-=b,Di=1<<32-Xt(s)+f|o<<f|u,ki=m+r}else Di=1<<m|o<<f|u,ki=r}function hp(r){r.return!==null&&(Ia(r,1),V_(r,1,0))}function fp(r){for(;r===ph;)ph=No[--Po],No[Po]=null,mh=No[--Po],No[Po]=null;for(;r===Ca;)Ca=ur[--cr],ur[cr]=null,ki=ur[--cr],ur[cr]=null,Di=ur[--cr],ur[cr]=null}var Nn=null,At=null,Ze=!1,Da=null,Gr=!1,dp=Error(i(519));function ka(r){var s=Error(i(418,""));throw lu(or(s,r)),dp}function L_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[zt]=r,s[Mt]=u,o){case"dialog":Ue("cancel",s),Ue("close",s);break;case"iframe":case"object":case"embed":Ue("load",s);break;case"video":case"audio":for(o=0;o<Ou.length;o++)Ue(Ou[o],s);break;case"source":Ue("error",s);break;case"img":case"image":case"link":Ue("error",s),Ue("load",s);break;case"details":Ue("toggle",s);break;case"input":Ue("invalid",s),ma(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),vo(s);break;case"select":Ue("invalid",s);break;case"textarea":Ue("invalid",s),ga(s,u.value,u.defaultValue,u.children),vo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||eE(s.textContent,o)?(u.popover!=null&&(Ue("beforetoggle",s),Ue("toggle",s)),u.onScroll!=null&&Ue("scroll",s),u.onScrollEnd!=null&&Ue("scrollend",s),u.onClick!=null&&(s.onclick=Qh),s=!0):s=!1,s||ka(r)}function j_(r){for(Nn=r.return;Nn;)switch(Nn.tag){case 5:case 13:Gr=!1;return;case 27:case 3:Gr=!0;return;default:Nn=Nn.return}}function au(r){if(r!==Nn)return!1;if(!Ze)return j_(r),Ze=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Im(r.type,r.memoizedProps)),o=!o),o&&At&&ka(r),j_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){At=Tr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}At=null}}else s===27?(s=At,Ds(r.type)?(r=Mm,Mm=null,At=r):At=s):At=Nn?Tr(r.stateNode.nextSibling):null;return!0}function ou(){At=Nn=null,Ze=!1}function U_(){var r=Da;return r!==null&&(Un===null?Un=r:Un.push.apply(Un,r),Da=null),r}function lu(r){Da===null?Da=[r]:Da.push(r)}var pp=se(null),Oa=null,Oi=null;function ms(r,s,o){le(pp,s._currentValue),s._currentValue=o}function Mi(r){r._currentValue=pp.current,ue(pp)}function mp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function gp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var O=0;O<s.length;O++)if(S.context===s[O]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),mp(m.return,o,r),u||(b=null);break e}m=S.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),mp(b,o,r),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function uu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var S=f.type;$n(f.pendingProps.value,b.value)||(r!==null?r.push(S):r=[S])}}else if(f===gt.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(ju):r=[ju])}f=f.return}r!==null&&gp(s,r,o,u),s.flags|=262144}function gh(r){for(r=r.firstContext;r!==null;){if(!$n(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ma(r){Oa=r,Oi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function En(r){return q_(Oa,r)}function yh(r,s){return Oa===null&&Ma(r),q_(r,s)}function q_(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Oi===null){if(r===null)throw Error(i(308));Oi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Oi=Oi.next=s;return o}var pA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},mA=t.unstable_scheduleCallback,gA=t.unstable_NormalPriority,Ht={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yp(){return{controller:new pA,data:new Map,refCount:0}}function cu(r){r.refCount--,r.refCount===0&&mA(gA,function(){r.controller.abort()})}var hu=null,_p=0,Vo=0,Lo=null;function yA(r,s){if(hu===null){var o=hu=[];_p=0,Vo=Em(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return _p++,s.then(B_,B_),s}function B_(){if(--_p===0&&hu!==null){Lo!==null&&(Lo.status="fulfilled");var r=hu;hu=null,Vo=0,Lo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function _A(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var z_=ee.S;ee.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&yA(r,s),z_!==null&&z_(r,s)};var Na=se(null);function vp(){var r=Na.current;return r!==null?r:pt.pooledCache}function _h(r,s){s===null?le(Na,Na.current):le(Na,s.pool)}function F_(){var r=vp();return r===null?null:{parent:Ht._currentValue,pool:r}}var fu=Error(i(460)),$_=Error(i(474)),vh=Error(i(542)),Ep={then:function(){}};function H_(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Eh(){}function G_(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Eh,Eh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,W_(r),r;default:if(typeof s.status=="string")s.then(Eh,Eh);else{if(r=pt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,W_(r),r}throw du=s,fu}}var du=null;function Y_(){if(du===null)throw Error(i(459));var r=du;return du=null,r}function W_(r){if(r===fu||r===vh)throw Error(i(483))}var gs=!1;function bp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ys(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function _s(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(rt&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=fh(r),N_(r,null,o),s}return hh(r,u,s,o),fh(r)}function pu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,ca(r,o)}}function wp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Sp=!1;function mu(){if(Sp){var r=Lo;if(r!==null)throw r}}function gu(r,s,o,u){Sp=!1;var f=r.updateQueue;gs=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var O=S,Q=O.next;O.next=null,b===null?m=Q:b.next=Q,b=O;var ne=r.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==b&&(S===null?ne.firstBaseUpdate=Q:S.next=Q,ne.lastBaseUpdate=O))}if(m!==null){var ae=f.baseState;b=0,ne=Q=O=null,S=m;do{var K=S.lane&-536870913,X=K!==S.lane;if(X?(Ge&K)===K:(u&K)===K){K!==0&&K===Vo&&(Sp=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ce=r,we=S;K=s;var ut=o;switch(we.tag){case 1:if(Ce=we.payload,typeof Ce=="function"){ae=Ce.call(ut,ae,K);break e}ae=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=we.payload,K=typeof Ce=="function"?Ce.call(ut,ae,K):Ce,K==null)break e;ae=v({},ae,K);break e;case 2:gs=!0}}K=S.callback,K!==null&&(r.flags|=64,X&&(r.flags|=8192),X=f.callbacks,X===null?f.callbacks=[K]:X.push(K))}else X={lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(Q=ne=X,O=ae):ne=ne.next=X,b|=K;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;X=S,S=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);ne===null&&(O=ae),f.baseState=O,f.firstBaseUpdate=Q,f.lastBaseUpdate=ne,m===null&&(f.shared.lanes=0),As|=b,r.lanes=b,r.memoizedState=ae}}function Q_(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function K_(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Q_(o[r],s)}var jo=se(null),bh=se(0);function X_(r,s){r=qi,le(bh,r),le(jo,s),qi=r|s.baseLanes}function xp(){le(bh,qi),le(jo,jo.current)}function Ap(){qi=bh.current,ue(jo),ue(bh)}var vs=0,Ve=null,ot=null,Pt=null,Th=!1,Uo=!1,Pa=!1,wh=0,yu=0,qo=null,vA=0;function Dt(){throw Error(i(321))}function Rp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!$n(r[o],s[o]))return!1;return!0}function Cp(r,s,o,u,f,m){return vs=m,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ee.H=r===null||r.memoizedState===null?Nv:Pv,Pa=!1,m=o(u,f),Pa=!1,Uo&&(m=J_(s,o,u,f)),Z_(r),m}function Z_(r){ee.H=Ih;var s=ot!==null&&ot.next!==null;if(vs=0,Pt=ot=Ve=null,Th=!1,yu=0,qo=null,s)throw Error(i(300));r===null||tn||(r=r.dependencies,r!==null&&gh(r)&&(tn=!0))}function J_(r,s,o,u){Ve=r;var f=0;do{if(Uo&&(qo=null),yu=0,Uo=!1,25<=f)throw Error(i(301));if(f+=1,Pt=ot=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}ee.H=AA,m=s(o,u)}while(Uo);return m}function EA(){var r=ee.H,s=r.useState()[0];return s=typeof s.then=="function"?_u(s):s,r=r.useState()[0],(ot!==null?ot.memoizedState:null)!==r&&(Ve.flags|=1024),s}function Ip(){var r=wh!==0;return wh=0,r}function Dp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function kp(r){if(Th){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Th=!1}vs=0,Pt=ot=Ve=null,Uo=!1,yu=wh=0,qo=null}function Ln(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Ve.memoizedState=Pt=r:Pt=Pt.next=r,Pt}function Vt(){if(ot===null){var r=Ve.alternate;r=r!==null?r.memoizedState:null}else r=ot.next;var s=Pt===null?Ve.memoizedState:Pt.next;if(s!==null)Pt=s,ot=r;else{if(r===null)throw Ve.alternate===null?Error(i(467)):Error(i(310));ot=r,r={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Pt===null?Ve.memoizedState=Pt=r:Pt=Pt.next=r}return Pt}function Op(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(r){var s=yu;return yu+=1,qo===null&&(qo=[]),r=G_(qo,r,s),s=Ve,(Pt===null?s.memoizedState:Pt.next)===null&&(s=s.alternate,ee.H=s===null||s.memoizedState===null?Nv:Pv),r}function Sh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return _u(r);if(r.$$typeof===B)return En(r)}throw Error(i(438,String(r)))}function Mp(r){var s=null,o=Ve.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ve.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Op(),Ve.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=V;return s.index++,o}function Ni(r,s){return typeof s=="function"?s(r):s}function xh(r){var s=Vt();return Np(s,ot,r)}function Np(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=b=null,O=null,Q=s,ne=!1;do{var ae=Q.lane&-536870913;if(ae!==Q.lane?(Ge&ae)===ae:(vs&ae)===ae){var K=Q.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ae===Vo&&(ne=!0);else if((vs&K)===K){Q=Q.next,K===Vo&&(ne=!0);continue}else ae={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(S=O=ae,b=m):O=O.next=ae,Ve.lanes|=K,As|=K;ae=Q.action,Pa&&o(m,ae),m=Q.hasEagerState?Q.eagerState:o(m,ae)}else K={lane:ae,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(S=O=K,b=m):O=O.next=K,Ve.lanes|=ae,As|=ae;Q=Q.next}while(Q!==null&&Q!==s);if(O===null?b=m:O.next=S,!$n(m,r.memoizedState)&&(tn=!0,ne&&(o=Lo,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=O,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Pp(r){var s=Vt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do m=r(m,b.action),b=b.next;while(b!==f);$n(m,s.memoizedState)||(tn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function ev(r,s,o){var u=Ve,f=Vt(),m=Ze;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!$n((ot||f).memoizedState,o);b&&(f.memoizedState=o,tn=!0),f=f.queue;var S=rv.bind(null,u,f,r);if(vu(2048,8,S,[r]),f.getSnapshot!==s||b||Pt!==null&&Pt.memoizedState.tag&1){if(u.flags|=2048,Bo(9,Ah(),nv.bind(null,u,f,o,s),null),pt===null)throw Error(i(349));m||(vs&124)!==0||tv(u,s,o)}return o}function tv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ve.updateQueue,s===null?(s=Op(),Ve.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function nv(r,s,o,u){s.value=o,s.getSnapshot=u,iv(s)&&sv(r)}function rv(r,s,o){return o(function(){iv(s)&&sv(r)})}function iv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!$n(r,o)}catch{return!0}}function sv(r){var s=Oo(r,2);s!==null&&Kn(s,r,2)}function Vp(r){var s=Ln();if(typeof r=="function"){var o=r;if(r=o(),Pa){Dn(!0);try{o()}finally{Dn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:r},s}function av(r,s,o,u){return r.baseState=o,Np(r,ot,typeof u=="function"?u:Ni)}function bA(r,s,o,u,f){if(Ch(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};ee.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,ov(s,m)):(m.next=o.next,s.pending=o.next=m)}}function ov(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=ee.T,b={};ee.T=b;try{var S=o(f,u),O=ee.S;O!==null&&O(b,S),lv(r,s,S)}catch(Q){Lp(r,s,Q)}finally{ee.T=m}}else try{m=o(f,u),lv(r,s,m)}catch(Q){Lp(r,s,Q)}}function lv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){uv(r,s,u)},function(u){return Lp(r,s,u)}):uv(r,s,o)}function uv(r,s,o){s.status="fulfilled",s.value=o,cv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,ov(r,o)))}function Lp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,cv(s),s=s.next;while(s!==u)}r.action=null}function cv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function hv(r,s){return s}function fv(r,s){if(Ze){var o=pt.formState;if(o!==null){e:{var u=Ve;if(Ze){if(At){t:{for(var f=At,m=Gr;f.nodeType!==8;){if(!m){f=null;break t}if(f=Tr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){At=Tr(f.nextSibling),u=f.data==="F!";break e}}ka(u)}u=!1}u&&(s=o[0])}}return o=Ln(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hv,lastRenderedState:s},o.queue=u,o=kv.bind(null,Ve,u),u.dispatch=o,u=Vp(!1),m=zp.bind(null,Ve,!1,u.queue),u=Ln(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=bA.bind(null,Ve,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function dv(r){var s=Vt();return pv(s,ot,r)}function pv(r,s,o){if(s=Np(r,s,hv)[0],r=xh(Ni)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=_u(s)}catch(b){throw b===fu?vh:b}else u=s;s=Vt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(Ve.flags|=2048,Bo(9,Ah(),TA.bind(null,f,o),null)),[u,m,r]}function TA(r,s){r.action=s}function mv(r){var s=Vt(),o=ot;if(o!==null)return pv(s,o,r);Vt(),s=s.memoizedState,o=Vt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Bo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ve.updateQueue,s===null&&(s=Op(),Ve.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Ah(){return{destroy:void 0,resource:void 0}}function gv(){return Vt().memoizedState}function Rh(r,s,o,u){var f=Ln();u=u===void 0?null:u,Ve.flags|=r,f.memoizedState=Bo(1|s,Ah(),o,u)}function vu(r,s,o,u){var f=Vt();u=u===void 0?null:u;var m=f.memoizedState.inst;ot!==null&&u!==null&&Rp(u,ot.memoizedState.deps)?f.memoizedState=Bo(s,m,o,u):(Ve.flags|=r,f.memoizedState=Bo(1|s,m,o,u))}function yv(r,s){Rh(8390656,8,r,s)}function _v(r,s){vu(2048,8,r,s)}function vv(r,s){return vu(4,2,r,s)}function Ev(r,s){return vu(4,4,r,s)}function bv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Tv(r,s,o){o=o!=null?o.concat([r]):null,vu(4,4,bv.bind(null,s,r),o)}function jp(){}function wv(r,s){var o=Vt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Rp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Sv(r,s){var o=Vt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Rp(s,u[1]))return u[0];if(u=r(),Pa){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u}function Up(r,s,o){return o===void 0||(vs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=R0(),Ve.lanes|=r,As|=r,o)}function xv(r,s,o,u){return $n(o,s)?o:jo.current!==null?(r=Up(r,o,u),$n(r,s)||(tn=!0),r):(vs&42)===0?(tn=!0,r.memoizedState=o):(r=R0(),Ve.lanes|=r,As|=r,s)}function Av(r,s,o,u,f){var m=ce.p;ce.p=m!==0&&8>m?m:8;var b=ee.T,S={};ee.T=S,zp(r,!1,s,o);try{var O=f(),Q=ee.S;if(Q!==null&&Q(S,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=_A(O,u);Eu(r,s,ne,Qn(r))}else Eu(r,s,u,Qn(r))}catch(ae){Eu(r,s,{then:function(){},status:"rejected",reason:ae},Qn())}finally{ce.p=m,ee.T=b}}function wA(){}function qp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Rv(r).queue;Av(r,f,s,pe,o===null?wA:function(){return Cv(r),o(u)})}function Rv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:pe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Cv(r){var s=Rv(r).next.queue;Eu(r,s,{},Qn())}function Bp(){return En(ju)}function Iv(){return Vt().memoizedState}function Dv(){return Vt().memoizedState}function SA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Qn();r=ys(o);var u=_s(s,r,o);u!==null&&(Kn(u,s,o),pu(u,s,o)),s={cache:yp()},r.payload=s;return}s=s.return}}function xA(r,s,o){var u=Qn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Ch(r)?Ov(s,o):(o=op(r,s,o,u),o!==null&&(Kn(o,r,u),Mv(o,s,u)))}function kv(r,s,o){var u=Qn();Eu(r,s,o,u)}function Eu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ch(r))Ov(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,S=m(b,o);if(f.hasEagerState=!0,f.eagerState=S,$n(S,b))return hh(r,s,f,0),pt===null&&ch(),!1}catch{}finally{}if(o=op(r,s,f,u),o!==null)return Kn(o,r,u),Mv(o,s,u),!0}return!1}function zp(r,s,o,u){if(u={lane:2,revertLane:Em(),action:u,hasEagerState:!1,eagerState:null,next:null},Ch(r)){if(s)throw Error(i(479))}else s=op(r,o,u,2),s!==null&&Kn(s,r,2)}function Ch(r){var s=r.alternate;return r===Ve||s!==null&&s===Ve}function Ov(r,s){Uo=Th=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Mv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,ca(r,o)}}var Ih={readContext:En,use:Sh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},Nv={readContext:En,use:Sh,useCallback:function(r,s){return Ln().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:yv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Rh(4194308,4,bv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Rh(4194308,4,r,s)},useInsertionEffect:function(r,s){Rh(4,2,r,s)},useMemo:function(r,s){var o=Ln();s=s===void 0?null:s;var u=r();if(Pa){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Ln();if(o!==void 0){var f=o(s);if(Pa){Dn(!0);try{o(s)}finally{Dn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=xA.bind(null,Ve,r),[u.memoizedState,r]},useRef:function(r){var s=Ln();return r={current:r},s.memoizedState=r},useState:function(r){r=Vp(r);var s=r.queue,o=kv.bind(null,Ve,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:jp,useDeferredValue:function(r,s){var o=Ln();return Up(o,r,s)},useTransition:function(){var r=Vp(!1);return r=Av.bind(null,Ve,r.queue,!0,!1),Ln().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ve,f=Ln();if(Ze){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),pt===null)throw Error(i(349));(Ge&124)!==0||tv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,yv(rv.bind(null,u,m,r),[r]),u.flags|=2048,Bo(9,Ah(),nv.bind(null,u,m,o,s),null),o},useId:function(){var r=Ln(),s=pt.identifierPrefix;if(Ze){var o=ki,u=Di;o=(u&~(1<<32-Xt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=wh++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=vA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Bp,useFormState:fv,useActionState:fv,useOptimistic:function(r){var s=Ln();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=zp.bind(null,Ve,!0,o),o.dispatch=s,[r,s]},useMemoCache:Mp,useCacheRefresh:function(){return Ln().memoizedState=SA.bind(null,Ve)}},Pv={readContext:En,use:Sh,useCallback:wv,useContext:En,useEffect:_v,useImperativeHandle:Tv,useInsertionEffect:vv,useLayoutEffect:Ev,useMemo:Sv,useReducer:xh,useRef:gv,useState:function(){return xh(Ni)},useDebugValue:jp,useDeferredValue:function(r,s){var o=Vt();return xv(o,ot.memoizedState,r,s)},useTransition:function(){var r=xh(Ni)[0],s=Vt().memoizedState;return[typeof r=="boolean"?r:_u(r),s]},useSyncExternalStore:ev,useId:Iv,useHostTransitionStatus:Bp,useFormState:dv,useActionState:dv,useOptimistic:function(r,s){var o=Vt();return av(o,ot,r,s)},useMemoCache:Mp,useCacheRefresh:Dv},AA={readContext:En,use:Sh,useCallback:wv,useContext:En,useEffect:_v,useImperativeHandle:Tv,useInsertionEffect:vv,useLayoutEffect:Ev,useMemo:Sv,useReducer:Pp,useRef:gv,useState:function(){return Pp(Ni)},useDebugValue:jp,useDeferredValue:function(r,s){var o=Vt();return ot===null?Up(o,r,s):xv(o,ot.memoizedState,r,s)},useTransition:function(){var r=Pp(Ni)[0],s=Vt().memoizedState;return[typeof r=="boolean"?r:_u(r),s]},useSyncExternalStore:ev,useId:Iv,useHostTransitionStatus:Bp,useFormState:mv,useActionState:mv,useOptimistic:function(r,s){var o=Vt();return ot!==null?av(o,ot,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Mp,useCacheRefresh:Dv},zo=null,bu=0;function Dh(r){var s=bu;return bu+=1,zo===null&&(zo=[]),G_(zo,r,s)}function Tu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function kh(r,s){throw s.$$typeof===T?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Vv(r){var s=r._init;return s(r._payload)}function Lv(r){function s(H,z){if(r){var W=H.deletions;W===null?(H.deletions=[z],H.flags|=16):W.push(z)}}function o(H,z){if(!r)return null;for(;z!==null;)s(H,z),z=z.sibling;return null}function u(H){for(var z=new Map;H!==null;)H.key!==null?z.set(H.key,H):z.set(H.index,H),H=H.sibling;return z}function f(H,z){return H=Ii(H,z),H.index=0,H.sibling=null,H}function m(H,z,W){return H.index=W,r?(W=H.alternate,W!==null?(W=W.index,W<z?(H.flags|=67108866,z):W):(H.flags|=67108866,z)):(H.flags|=1048576,z)}function b(H){return r&&H.alternate===null&&(H.flags|=67108866),H}function S(H,z,W,re){return z===null||z.tag!==6?(z=up(W,H.mode,re),z.return=H,z):(z=f(z,W),z.return=H,z)}function O(H,z,W,re){var ge=W.type;return ge===D?ne(H,z,W.props.children,re,W.key):z!==null&&(z.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===R&&Vv(ge)===z.type)?(z=f(z,W.props),Tu(z,W),z.return=H,z):(z=dh(W.type,W.key,W.props,null,H.mode,re),Tu(z,W),z.return=H,z)}function Q(H,z,W,re){return z===null||z.tag!==4||z.stateNode.containerInfo!==W.containerInfo||z.stateNode.implementation!==W.implementation?(z=cp(W,H.mode,re),z.return=H,z):(z=f(z,W.children||[]),z.return=H,z)}function ne(H,z,W,re,ge){return z===null||z.tag!==7?(z=Ra(W,H.mode,re,ge),z.return=H,z):(z=f(z,W),z.return=H,z)}function ae(H,z,W){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=up(""+z,H.mode,W),z.return=H,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return W=dh(z.type,z.key,z.props,null,H.mode,W),Tu(W,z),W.return=H,W;case C:return z=cp(z,H.mode,W),z.return=H,z;case R:var re=z._init;return z=re(z._payload),ae(H,z,W)}if(Ke(z)||$(z))return z=Ra(z,H.mode,W,null),z.return=H,z;if(typeof z.then=="function")return ae(H,Dh(z),W);if(z.$$typeof===B)return ae(H,yh(H,z),W);kh(H,z)}return null}function K(H,z,W,re){var ge=z!==null?z.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ge!==null?null:S(H,z,""+W,re);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return W.key===ge?O(H,z,W,re):null;case C:return W.key===ge?Q(H,z,W,re):null;case R:return ge=W._init,W=ge(W._payload),K(H,z,W,re)}if(Ke(W)||$(W))return ge!==null?null:ne(H,z,W,re,null);if(typeof W.then=="function")return K(H,z,Dh(W),re);if(W.$$typeof===B)return K(H,z,yh(H,W),re);kh(H,W)}return null}function X(H,z,W,re,ge){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return H=H.get(W)||null,S(z,H,""+re,ge);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case w:return H=H.get(re.key===null?W:re.key)||null,O(z,H,re,ge);case C:return H=H.get(re.key===null?W:re.key)||null,Q(z,H,re,ge);case R:var Le=re._init;return re=Le(re._payload),X(H,z,W,re,ge)}if(Ke(re)||$(re))return H=H.get(W)||null,ne(z,H,re,ge,null);if(typeof re.then=="function")return X(H,z,W,Dh(re),ge);if(re.$$typeof===B)return X(H,z,W,yh(z,re),ge);kh(z,re)}return null}function Ce(H,z,W,re){for(var ge=null,Le=null,ve=z,Se=z=0,rn=null;ve!==null&&Se<W.length;Se++){ve.index>Se?(rn=ve,ve=null):rn=ve.sibling;var Qe=K(H,ve,W[Se],re);if(Qe===null){ve===null&&(ve=rn);break}r&&ve&&Qe.alternate===null&&s(H,ve),z=m(Qe,z,Se),Le===null?ge=Qe:Le.sibling=Qe,Le=Qe,ve=rn}if(Se===W.length)return o(H,ve),Ze&&Ia(H,Se),ge;if(ve===null){for(;Se<W.length;Se++)ve=ae(H,W[Se],re),ve!==null&&(z=m(ve,z,Se),Le===null?ge=ve:Le.sibling=ve,Le=ve);return Ze&&Ia(H,Se),ge}for(ve=u(ve);Se<W.length;Se++)rn=X(ve,H,Se,W[Se],re),rn!==null&&(r&&rn.alternate!==null&&ve.delete(rn.key===null?Se:rn.key),z=m(rn,z,Se),Le===null?ge=rn:Le.sibling=rn,Le=rn);return r&&ve.forEach(function(Ps){return s(H,Ps)}),Ze&&Ia(H,Se),ge}function we(H,z,W,re){if(W==null)throw Error(i(151));for(var ge=null,Le=null,ve=z,Se=z=0,rn=null,Qe=W.next();ve!==null&&!Qe.done;Se++,Qe=W.next()){ve.index>Se?(rn=ve,ve=null):rn=ve.sibling;var Ps=K(H,ve,Qe.value,re);if(Ps===null){ve===null&&(ve=rn);break}r&&ve&&Ps.alternate===null&&s(H,ve),z=m(Ps,z,Se),Le===null?ge=Ps:Le.sibling=Ps,Le=Ps,ve=rn}if(Qe.done)return o(H,ve),Ze&&Ia(H,Se),ge;if(ve===null){for(;!Qe.done;Se++,Qe=W.next())Qe=ae(H,Qe.value,re),Qe!==null&&(z=m(Qe,z,Se),Le===null?ge=Qe:Le.sibling=Qe,Le=Qe);return Ze&&Ia(H,Se),ge}for(ve=u(ve);!Qe.done;Se++,Qe=W.next())Qe=X(ve,H,Se,Qe.value,re),Qe!==null&&(r&&Qe.alternate!==null&&ve.delete(Qe.key===null?Se:Qe.key),z=m(Qe,z,Se),Le===null?ge=Qe:Le.sibling=Qe,Le=Qe);return r&&ve.forEach(function(RR){return s(H,RR)}),Ze&&Ia(H,Se),ge}function ut(H,z,W,re){if(typeof W=="object"&&W!==null&&W.type===D&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case w:e:{for(var ge=W.key;z!==null;){if(z.key===ge){if(ge=W.type,ge===D){if(z.tag===7){o(H,z.sibling),re=f(z,W.props.children),re.return=H,H=re;break e}}else if(z.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===R&&Vv(ge)===z.type){o(H,z.sibling),re=f(z,W.props),Tu(re,W),re.return=H,H=re;break e}o(H,z);break}else s(H,z);z=z.sibling}W.type===D?(re=Ra(W.props.children,H.mode,re,W.key),re.return=H,H=re):(re=dh(W.type,W.key,W.props,null,H.mode,re),Tu(re,W),re.return=H,H=re)}return b(H);case C:e:{for(ge=W.key;z!==null;){if(z.key===ge)if(z.tag===4&&z.stateNode.containerInfo===W.containerInfo&&z.stateNode.implementation===W.implementation){o(H,z.sibling),re=f(z,W.children||[]),re.return=H,H=re;break e}else{o(H,z);break}else s(H,z);z=z.sibling}re=cp(W,H.mode,re),re.return=H,H=re}return b(H);case R:return ge=W._init,W=ge(W._payload),ut(H,z,W,re)}if(Ke(W))return Ce(H,z,W,re);if($(W)){if(ge=$(W),typeof ge!="function")throw Error(i(150));return W=ge.call(W),we(H,z,W,re)}if(typeof W.then=="function")return ut(H,z,Dh(W),re);if(W.$$typeof===B)return ut(H,z,yh(H,W),re);kh(H,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,z!==null&&z.tag===6?(o(H,z.sibling),re=f(z,W),re.return=H,H=re):(o(H,z),re=up(W,H.mode,re),re.return=H,H=re),b(H)):o(H,z)}return function(H,z,W,re){try{bu=0;var ge=ut(H,z,W,re);return zo=null,ge}catch(ve){if(ve===fu||ve===vh)throw ve;var Le=Hn(29,ve,null,H.mode);return Le.lanes=re,Le.return=H,Le}finally{}}}var Fo=Lv(!0),jv=Lv(!1),hr=se(null),Yr=null;function Es(r){var s=r.alternate;le(Gt,Gt.current&1),le(hr,r),Yr===null&&(s===null||jo.current!==null||s.memoizedState!==null)&&(Yr=r)}function Uv(r){if(r.tag===22){if(le(Gt,Gt.current),le(hr,r),Yr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Yr=r)}}else bs()}function bs(){le(Gt,Gt.current),le(hr,hr.current)}function Pi(r){ue(hr),Yr===r&&(Yr=null),ue(Gt)}var Gt=se(0);function Oh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Om(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Fp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var $p={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Qn(),f=ys(u);f.payload=s,o!=null&&(f.callback=o),s=_s(r,f,u),s!==null&&(Kn(s,r,u),pu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Qn(),f=ys(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=_s(r,f,u),s!==null&&(Kn(s,r,u),pu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Qn(),u=ys(o);u.tag=2,s!=null&&(u.callback=s),s=_s(r,u,o),s!==null&&(Kn(s,r,o),pu(s,r,o))}};function qv(r,s,o,u,f,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,b):s.prototype&&s.prototype.isPureReactComponent?!iu(o,u)||!iu(f,m):!0}function Bv(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&$p.enqueueReplaceState(s,s.state,null)}function Va(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Mh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function zv(r){Mh(r)}function Fv(r){console.error(r)}function $v(r){Mh(r)}function Nh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function Hv(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hp(r,s,o){return o=ys(o),o.tag=3,o.payload={element:null},o.callback=function(){Nh(r,s)},o}function Gv(r){return r=ys(r),r.tag=3,r}function Yv(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){Hv(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){Hv(s,o,u),typeof f!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function RA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&uu(s,o,f,!0),o=hr.current,o!==null){switch(o.tag){case 13:return Yr===null?mm():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Ep?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),ym(r,u,f)),!1;case 22:return o.flags|=65536,u===Ep?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),ym(r,u,f)),!1}throw Error(i(435,o.tag))}return ym(r,u,f),mm(),!1}if(Ze)return s=hr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==dp&&(r=Error(i(422),{cause:u}),lu(or(r,o)))):(u!==dp&&(s=Error(i(423),{cause:u}),lu(or(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=or(u,o),f=Hp(r.stateNode,u,f),wp(r,f),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:u});if(m=or(m,o),Iu===null?Iu=[m]:Iu.push(m),Rt!==4&&(Rt=2),s===null)return!0;u=or(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Hp(o.stateNode,u,r),wp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Rs===null||!Rs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Gv(f),Yv(f,r,o,u),wp(o,f),!1}o=o.return}while(o!==null);return!1}var Wv=Error(i(461)),tn=!1;function fn(r,s,o,u){s.child=r===null?jv(s,null,o,u):Fo(s,r.child,o,u)}function Qv(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var b={};for(var S in u)S!=="ref"&&(b[S]=u[S])}else b=u;return Ma(s),u=Cp(r,s,o,b,m,f),S=Ip(),r!==null&&!tn?(Dp(r,s,f),Vi(r,s,f)):(Ze&&S&&hp(s),s.flags|=1,fn(r,s,u,f),s.child)}function Kv(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!lp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Xv(r,s,m,u,f)):(r=dh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Jp(r,f)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:iu,o(b,u)&&r.ref===s.ref)return Vi(r,s,f)}return s.flags|=1,r=Ii(m,u),r.ref=s.ref,r.return=s,s.child=r}function Xv(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(iu(m,u)&&r.ref===s.ref)if(tn=!1,s.pendingProps=u=m,Jp(r,f))(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Vi(r,s,f)}return Gp(r,s,o,u,f)}function Zv(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return Jv(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&_h(s,m!==null?m.cachePool:null),m!==null?X_(s,m):xp(),Uv(s);else return s.lanes=s.childLanes=536870912,Jv(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(_h(s,m.cachePool),X_(s,m),bs(),s.memoizedState=null):(r!==null&&_h(s,null),xp(),bs());return fn(r,s,f,o),s.child}function Jv(r,s,o,u){var f=vp();return f=f===null?null:{parent:Ht._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&_h(s,null),xp(),Uv(s),r!==null&&uu(r,s,u,!0),null}function Ph(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Gp(r,s,o,u,f){return Ma(s),o=Cp(r,s,o,u,void 0,f),u=Ip(),r!==null&&!tn?(Dp(r,s,f),Vi(r,s,f)):(Ze&&u&&hp(s),s.flags|=1,fn(r,s,o,f),s.child)}function e0(r,s,o,u,f,m){return Ma(s),s.updateQueue=null,o=J_(s,u,o,f),Z_(r),u=Ip(),r!==null&&!tn?(Dp(r,s,m),Vi(r,s,m)):(Ze&&u&&hp(s),s.flags|=1,fn(r,s,o,m),s.child)}function t0(r,s,o,u,f){if(Ma(s),s.stateNode===null){var m=Mo,b=o.contextType;typeof b=="object"&&b!==null&&(m=En(b)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$p,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},bp(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?En(b):Mo,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Fp(s,o,b,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&$p.enqueueReplaceState(m,m.state,null),gu(s,u,m,f),mu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,O=Va(o,S);m.props=O;var Q=m.context,ne=o.contextType;b=Mo,typeof ne=="object"&&ne!==null&&(b=En(ne));var ae=o.getDerivedStateFromProps;ne=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||Q!==b)&&Bv(s,m,u,b),gs=!1;var K=s.memoizedState;m.state=K,gu(s,u,m,f),mu(),Q=s.memoizedState,S||K!==Q||gs?(typeof ae=="function"&&(Fp(s,o,ae,u),Q=s.memoizedState),(O=gs||qv(s,o,O,u,K,Q,b))?(ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=Q),m.props=u,m.state=Q,m.context=b,u=O):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Tp(r,s),b=s.memoizedProps,ne=Va(o,b),m.props=ne,ae=s.pendingProps,K=m.context,Q=o.contextType,O=Mo,typeof Q=="object"&&Q!==null&&(O=En(Q)),S=o.getDerivedStateFromProps,(Q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==ae||K!==O)&&Bv(s,m,u,O),gs=!1,K=s.memoizedState,m.state=K,gu(s,u,m,f),mu();var X=s.memoizedState;b!==ae||K!==X||gs||r!==null&&r.dependencies!==null&&gh(r.dependencies)?(typeof S=="function"&&(Fp(s,o,S,u),X=s.memoizedState),(ne=gs||qv(s,o,ne,u,K,X,O)||r!==null&&r.dependencies!==null&&gh(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,X,O),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,X,O)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=X),m.props=u,m.state=X,m.context=O,u=ne):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,Ph(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Fo(s,r.child,null,f),s.child=Fo(s,null,o,f)):fn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Vi(r,s,f),r}function n0(r,s,o,u){return ou(),s.flags|=256,fn(r,s,o,u),s.child}var Yp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wp(r){return{baseLanes:r,cachePool:F_()}}function Qp(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=fr),r}function r0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(Gt.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ze){if(f?Es(s):bs(),Ze){var S=At,O;if(O=S){e:{for(O=S,S=Gr;O.nodeType!==8;){if(!S){S=null;break e}if(O=Tr(O.nextSibling),O===null){S=null;break e}}S=O}S!==null?(s.memoizedState={dehydrated:S,treeContext:Ca!==null?{id:Di,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},O=Hn(18,null,null,0),O.stateNode=S,O.return=s,s.child=O,Nn=s,At=null,O=!0):O=!1}O||ka(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Om(S)?s.lanes=32:s.lanes=536870912,null;Pi(s)}return S=u.children,u=u.fallback,f?(bs(),f=s.mode,S=Vh({mode:"hidden",children:S},f),u=Ra(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Wp(o),f.childLanes=Qp(r,b,o),s.memoizedState=Yp,u):(Es(s),Kp(s,S))}if(O=r.memoizedState,O!==null&&(S=O.dehydrated,S!==null)){if(m)s.flags&256?(Es(s),s.flags&=-257,s=Xp(r,s,o)):s.memoizedState!==null?(bs(),s.child=r.child,s.flags|=128,s=null):(bs(),f=u.fallback,S=s.mode,u=Vh({mode:"visible",children:u.children},S),f=Ra(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Fo(s,r.child,null,o),u=s.child,u.memoizedState=Wp(o),u.childLanes=Qp(r,b,o),s.memoizedState=Yp,s=f);else if(Es(s),Om(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var Q=b.dgst;b=Q,u=Error(i(419)),u.stack="",u.digest=b,lu({value:u,source:null,stack:null}),s=Xp(r,s,o)}else if(tn||uu(r,s,o,!1),b=(o&r.childLanes)!==0,tn||b){if(b=pt,b!==null&&(u=o&-o,u=(u&42)!==0?1:Pr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==O.retryLane))throw O.retryLane=u,Oo(r,u),Kn(b,r,u),Wv;S.data==="$?"||mm(),s=Xp(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=O.treeContext,At=Tr(S.nextSibling),Nn=s,Ze=!0,Da=null,Gr=!1,r!==null&&(ur[cr++]=Di,ur[cr++]=ki,ur[cr++]=Ca,Di=r.id,ki=r.overflow,Ca=s),s=Kp(s,u.children),s.flags|=4096);return s}return f?(bs(),f=u.fallback,S=s.mode,O=r.child,Q=O.sibling,u=Ii(O,{mode:"hidden",children:u.children}),u.subtreeFlags=O.subtreeFlags&65011712,Q!==null?f=Ii(Q,f):(f=Ra(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=Wp(o):(O=S.cachePool,O!==null?(Q=Ht._currentValue,O=O.parent!==Q?{parent:Q,pool:Q}:O):O=F_(),S={baseLanes:S.baseLanes|o,cachePool:O}),f.memoizedState=S,f.childLanes=Qp(r,b,o),s.memoizedState=Yp,u):(Es(s),o=r.child,r=o.sibling,o=Ii(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function Kp(r,s){return s=Vh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Vh(r,s){return r=Hn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Xp(r,s,o){return Fo(s,r.child,null,o),r=Kp(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function i0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),mp(r.return,s,o)}function Zp(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function s0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(fn(r,s,u.children,o),u=Gt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&i0(r,o,s);else if(r.tag===19)i0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(le(Gt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Oh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Zp(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Oh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Zp(s,!0,o,null,m);break;case"together":Zp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),As|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(uu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Ii(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Ii(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function Jp(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&gh(r)))}function CA(r,s,o){switch(s.tag){case 3:Fe(s,s.stateNode.containerInfo),ms(s,Ht,r.memoizedState.cache),ou();break;case 27:case 5:Pn(s);break;case 4:Fe(s,s.stateNode.containerInfo);break;case 10:ms(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Es(s),s.flags|=128,null):(o&s.child.childLanes)!==0?r0(r,s,o):(Es(s),r=Vi(r,s,o),r!==null?r.sibling:null);Es(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(uu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return s0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),le(Gt,Gt.current),u)break;return null;case 22:case 23:return s.lanes=0,Zv(r,s,o);case 24:ms(s,Ht,r.memoizedState.cache)}return Vi(r,s,o)}function a0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)tn=!0;else{if(!Jp(r,o)&&(s.flags&128)===0)return tn=!1,CA(r,s,o);tn=(r.flags&131072)!==0}else tn=!1,Ze&&(s.flags&1048576)!==0&&V_(s,mh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")lp(u)?(r=Va(u,r),s.tag=1,s=t0(null,s,u,r,o)):(s.tag=0,s=Gp(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===te){s.tag=11,s=Qv(null,s,u,r,o);break e}else if(f===A){s.tag=14,s=Kv(null,s,u,r,o);break e}}throw s=dt(u)||u,Error(i(306,s,""))}}return s;case 0:return Gp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Va(u,s.pendingProps),t0(r,s,u,f,o);case 3:e:{if(Fe(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,Tp(r,s),gu(s,u,null,o);var b=s.memoizedState;if(u=b.cache,ms(s,Ht,u),u!==m.cache&&gp(s,[Ht],o,!0),mu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=n0(r,s,u,o);break e}else if(u!==f){f=or(Error(i(424)),s),lu(f),s=n0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(At=Tr(r.firstChild),Nn=s,Ze=!0,Da=null,Gr=!0,o=jv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ou(),u===f){s=Vi(r,s,o);break e}fn(r,s,u,o)}s=s.child}return s;case 26:return Ph(r,s),r===null?(o=cE(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ze||(o=s.type,r=s.pendingProps,u=Kh(_e.current).createElement(o),u[zt]=s,u[Mt]=r,pn(u,o,r),It(u),s.stateNode=u):s.memoizedState=cE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Pn(s),r===null&&Ze&&(u=s.stateNode=oE(s.type,s.pendingProps,_e.current),Nn=s,Gr=!0,f=At,Ds(s.type)?(Mm=f,At=Tr(u.firstChild)):At=f),fn(r,s,s.pendingProps.children,o),Ph(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ze&&((f=u=At)&&(u=nR(u,s.type,s.pendingProps,Gr),u!==null?(s.stateNode=u,Nn=s,At=Tr(u.firstChild),Gr=!1,f=!0):f=!1),f||ka(s)),Pn(s),f=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,u=m.children,Im(f,m)?u=null:b!==null&&Im(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Cp(r,s,EA,null,null,o),ju._currentValue=f),Ph(r,s),fn(r,s,u,o),s.child;case 6:return r===null&&Ze&&((r=o=At)&&(o=rR(o,s.pendingProps,Gr),o!==null?(s.stateNode=o,Nn=s,At=null,r=!0):r=!1),r||ka(s)),null;case 13:return r0(r,s,o);case 4:return Fe(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Fo(s,null,u,o):fn(r,s,u,o),s.child;case 11:return Qv(r,s,s.type,s.pendingProps,o);case 7:return fn(r,s,s.pendingProps,o),s.child;case 8:return fn(r,s,s.pendingProps.children,o),s.child;case 12:return fn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ms(s,s.type,u.value),fn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Ma(s),f=En(f),u=u(f),s.flags|=1,fn(r,s,u,o),s.child;case 14:return Kv(r,s,s.type,s.pendingProps,o);case 15:return Xv(r,s,s.type,s.pendingProps,o);case 19:return s0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Vh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Ii(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return Zv(r,s,o);case 24:return Ma(s),u=En(Ht),r===null?(f=vp(),f===null&&(f=pt,m=yp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},bp(s),ms(s,Ht,f)):((r.lanes&o)!==0&&(Tp(r,s),gu(s,null,null,o),mu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ms(s,Ht,u)):(u=m.cache,ms(s,Ht,u),u!==f.cache&&gp(s,[Ht],o,!0))),fn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Li(r){r.flags|=4}function o0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!mE(s)){if(s=hr.current,s!==null&&((Ge&4194048)===Ge?Yr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Yr))throw du=Ep,$_;r.flags|=8192}}function Lh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Je():536870912,r.lanes|=s,Yo|=s)}function wu(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function IA(r,s,o){var u=s.pendingProps;switch(fp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Mi(Ht),Tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(au(s)?Li(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,U_())),wt(s),null;case 26:return o=s.memoizedState,r===null?(Li(s),o!==null?(wt(s),o0(s,o)):(wt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Li(s),wt(s),o0(s,o)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==u&&Li(s),wt(s),s.flags&=-16777217),null;case 27:vn(s),o=_e.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Li(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=ye.current,au(s)?L_(s):(r=oE(f,u,o),s.stateNode=r,Li(s))}return wt(s),null;case 5:if(vn(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Li(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=ye.current,au(s))L_(s);else{switch(f=Kh(_e.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[zt]=s,r[Mt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(pn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Li(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Li(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=_e.current,au(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[zt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||eE(r.nodeValue,o)),r||ka(s)}else r=Kh(r).createTextNode(u),r[zt]=s,s.stateNode=r}return wt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=au(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[zt]=s}else ou(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),f=!1}else f=U_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Pi(s),s):(Pi(s),null)}if(Pi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Lh(s,s.updateQueue),wt(s),null;case 4:return Tt(),r===null&&Sm(s.stateNode.containerInfo),wt(s),null;case 10:return Mi(s.type),wt(s),null;case 19:if(ue(Gt),f=s.memoizedState,f===null)return wt(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)wu(f,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=Oh(r),m!==null){for(s.flags|=128,wu(f,!1),r=m.updateQueue,s.updateQueue=r,Lh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)P_(o,r),o=o.sibling;return le(Gt,Gt.current&1|2),s.child}r=r.sibling}f.tail!==null&&Vn()>qh&&(s.flags|=128,u=!0,wu(f,!1),s.lanes=4194304)}else{if(!u)if(r=Oh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Lh(s,r),wu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ze)return wt(s),null}else 2*Vn()-f.renderingStartTime>qh&&o!==536870912&&(s.flags|=128,u=!0,wu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Vn(),s.sibling=null,r=Gt.current,le(Gt,u?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Pi(s),Ap(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),o=s.updateQueue,o!==null&&Lh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ue(Na),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Mi(Ht),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function DA(r,s){switch(fp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Mi(Ht),Tt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return vn(s),null;case 13:if(Pi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));ou()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(Gt),null;case 4:return Tt(),null;case 10:return Mi(s.type),null;case 22:case 23:return Pi(s),Ap(),r!==null&&ue(Na),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Mi(Ht),null;case 25:return null;default:return null}}function l0(r,s){switch(fp(s),s.tag){case 3:Mi(Ht),Tt();break;case 26:case 27:case 5:vn(s);break;case 4:Tt();break;case 13:Pi(s);break;case 19:ue(Gt);break;case 10:Mi(s.type);break;case 22:case 23:Pi(s),Ap(),r!==null&&ue(Na);break;case 24:Mi(Ht)}}function Su(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==f)}}catch(S){ht(s,s.return,S)}}function Ts(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var b=u.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,f=s;var O=o,Q=S;try{Q()}catch(ne){ht(f,O,ne)}}}u=u.next}while(u!==m)}}catch(ne){ht(s,s.return,ne)}}function u0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{K_(s,o)}catch(u){ht(r,r.return,u)}}}function c0(r,s,o){o.props=Va(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){ht(r,s,u)}}function xu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){ht(r,s,f)}}function Wr(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ht(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ht(r,s,f)}else o.current=null}function h0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ht(r,r.return,f)}}function em(r,s,o){try{var u=r.stateNode;XA(u,r.type,o,s),u[Mt]=s}catch(f){ht(r,r.return,f)}}function f0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ds(r.type)||r.tag===4}function tm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||f0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ds(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function nm(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Qh));else if(u!==4&&(u===27&&Ds(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(nm(r,s,o),r=r.sibling;r!==null;)nm(r,s,o),r=r.sibling}function jh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Ds(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(jh(r,s,o),r=r.sibling;r!==null;)jh(r,s,o),r=r.sibling}function d0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);pn(s,u,o),s[zt]=r,s[Mt]=o}catch(m){ht(r,r.return,m)}}var ji=!1,kt=!1,rm=!1,p0=typeof WeakSet=="function"?WeakSet:Set,nn=null;function kA(r,s){if(r=r.containerInfo,Rm=nf,r=x_(r),tp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,S=-1,O=-1,Q=0,ne=0,ae=r,K=null;t:for(;;){for(var X;ae!==o||f!==0&&ae.nodeType!==3||(S=b+f),ae!==m||u!==0&&ae.nodeType!==3||(O=b+u),ae.nodeType===3&&(b+=ae.nodeValue.length),(X=ae.firstChild)!==null;)K=ae,ae=X;for(;;){if(ae===r)break t;if(K===o&&++Q===f&&(S=b),K===m&&++ne===u&&(O=b),(X=ae.nextSibling)!==null)break;ae=K,K=ae.parentNode}ae=X}o=S===-1||O===-1?null:{start:S,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cm={focusedElem:r,selectionRange:o},nf=!1,nn=s;nn!==null;)if(s=nn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,nn=r;else for(;nn!==null;){switch(s=nn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ce=Va(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ce,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(we){ht(o,o.return,we)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)km(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":km(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,nn=r;break}nn=s.return}}function m0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ws(r,o),u&4&&Su(5,o);break;case 1:if(ws(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){ht(o,o.return,b)}else{var f=Va(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){ht(o,o.return,b)}}u&64&&u0(o),u&512&&xu(o,o.return);break;case 3:if(ws(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{K_(r,s)}catch(b){ht(o,o.return,b)}}break;case 27:s===null&&u&4&&d0(o);case 26:case 5:ws(r,o),s===null&&u&4&&h0(o),u&512&&xu(o,o.return);break;case 12:ws(r,o);break;case 13:ws(r,o),u&4&&_0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=qA.bind(null,o),iR(r,o))));break;case 22:if(u=o.memoizedState!==null||ji,!u){s=s!==null&&s.memoizedState!==null||kt,f=ji;var m=kt;ji=u,(kt=s)&&!m?Ss(r,o,(o.subtreeFlags&8772)!==0):ws(r,o),ji=f,kt=m}break;case 30:break;default:ws(r,o)}}function g0(r){var s=r.alternate;s!==null&&(r.alternate=null,g0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&hs(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Et=null,jn=!1;function Ui(r,s,o){for(o=o.child;o!==null;)y0(r,s,o),o=o.sibling}function y0(r,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:kt||Wr(o,s),Ui(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:kt||Wr(o,s);var u=Et,f=jn;Ds(o.type)&&(Et=o.stateNode,jn=!1),Ui(r,s,o),Nu(o.stateNode),Et=u,jn=f;break;case 5:kt||Wr(o,s);case 6:if(u=Et,f=jn,Et=null,Ui(r,s,o),Et=u,jn=f,Et!==null)if(jn)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(o.stateNode)}catch(m){ht(o,s,m)}else try{Et.removeChild(o.stateNode)}catch(m){ht(o,s,m)}break;case 18:Et!==null&&(jn?(r=Et,sE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),zu(r)):sE(Et,o.stateNode));break;case 4:u=Et,f=jn,Et=o.stateNode.containerInfo,jn=!0,Ui(r,s,o),Et=u,jn=f;break;case 0:case 11:case 14:case 15:kt||Ts(2,o,s),kt||Ts(4,o,s),Ui(r,s,o);break;case 1:kt||(Wr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&c0(o,s,u)),Ui(r,s,o);break;case 21:Ui(r,s,o);break;case 22:kt=(u=kt)||o.memoizedState!==null,Ui(r,s,o),kt=u;break;default:Ui(r,s,o)}}function _0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{zu(r)}catch(o){ht(s,s.return,o)}}function OA(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new p0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new p0),s;default:throw Error(i(435,r.tag))}}function im(r,s){var o=OA(r);s.forEach(function(u){var f=BA.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Gn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,b=s,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(Ds(S.type)){Et=S.stateNode,jn=!1;break e}break;case 5:Et=S.stateNode,jn=!1;break e;case 3:case 4:Et=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(Et===null)throw Error(i(160));y0(m,b,f),Et=null,jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)v0(s,r),s=s.sibling}var br=null;function v0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Gn(s,r),Yn(r),u&4&&(Ts(3,r,r.return),Su(3,r),Ts(5,r,r.return));break;case 1:Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),u&64&&ji&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=br;if(Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ha]||m[zt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),pn(m,u,o),m[zt]=r,It(m),u=m;break e;case"link":var b=dE("link","href",f).get(u+(o.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;case"meta":if(b=dE("meta","content",f).get(u+(o.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[zt]=r,It(m),u=m}r.stateNode=u}else pE(f,r.type,r.stateNode);else r.stateNode=fE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?pE(f,r.type,r.stateNode):fE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&em(r,r.memoizedProps,o.memoizedProps)}break;case 27:Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),o!==null&&u&4&&em(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Gn(s,r),Yn(r),u&512&&(kt||o===null||Wr(o,o.return)),r.flags&32){f=r.stateNode;try{rr(f,"")}catch(X){ht(r,r.return,X)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,em(r,f,o!==null?o.memoizedProps:f)),u&1024&&(rm=!0);break;case 6:if(Gn(s,r),Yn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(X){ht(r,r.return,X)}}break;case 3:if(Jh=null,f=br,br=Xh(s.containerInfo),Gn(s,r),br=f,Yn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{zu(s.containerInfo)}catch(X){ht(r,r.return,X)}rm&&(rm=!1,E0(r));break;case 4:u=br,br=Xh(r.stateNode.containerInfo),Gn(s,r),Yn(r),br=u;break;case 12:Gn(s,r),Yn(r);break;case 13:Gn(s,r),Yn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(cm=Vn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,im(r,u)));break;case 22:f=r.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,Q=ji,ne=kt;if(ji=Q||f,kt=ne||O,Gn(s,r),kt=ne,ji=Q,Yn(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||O||ji||kt||La(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){O=o=s;try{if(m=O.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=O.stateNode;var ae=O.memoizedProps.style,K=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;S.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(X){ht(O,O.return,X)}}}else if(s.tag===6){if(o===null){O=s;try{O.stateNode.nodeValue=f?"":O.memoizedProps}catch(X){ht(O,O.return,X)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,im(r,o))));break;case 19:Gn(s,r),Yn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,im(r,u)));break;case 30:break;case 21:break;default:Gn(s,r),Yn(r)}}function Yn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(f0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=tm(r);jh(r,m,f);break;case 5:var b=o.stateNode;o.flags&32&&(rr(b,""),o.flags&=-33);var S=tm(r);jh(r,S,b);break;case 3:case 4:var O=o.stateNode.containerInfo,Q=tm(r);nm(r,Q,O);break;default:throw Error(i(161))}}catch(ne){ht(r,r.return,ne)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function E0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;E0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ws(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)m0(r,s.alternate,s),s=s.sibling}function La(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Ts(4,s,s.return),La(s);break;case 1:Wr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&c0(s,s.return,o),La(s);break;case 27:Nu(s.stateNode);case 26:case 5:Wr(s,s.return),La(s);break;case 22:s.memoizedState===null&&La(s);break;case 30:La(s);break;default:La(s)}r=r.sibling}}function Ss(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ss(f,m,o),Su(4,m);break;case 1:if(Ss(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Q){ht(u,u.return,Q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)Q_(O[f],S)}catch(Q){ht(u,u.return,Q)}}o&&b&64&&u0(m),xu(m,m.return);break;case 27:d0(m);case 26:case 5:Ss(f,m,o),o&&u===null&&b&4&&h0(m),xu(m,m.return);break;case 12:Ss(f,m,o);break;case 13:Ss(f,m,o),o&&b&4&&_0(f,m);break;case 22:m.memoizedState===null&&Ss(f,m,o),xu(m,m.return);break;case 30:break;default:Ss(f,m,o)}s=s.sibling}}function sm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&cu(o))}function am(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&cu(r))}function Qr(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)b0(r,s,o,u),s=s.sibling}function b0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Qr(r,s,o,u),f&2048&&Su(9,s);break;case 1:Qr(r,s,o,u);break;case 3:Qr(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&cu(r)));break;case 12:if(f&2048){Qr(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(O){ht(s,s.return,O)}}else Qr(r,s,o,u);break;case 13:Qr(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?Qr(r,s,o,u):Au(r,s):m._visibility&2?Qr(r,s,o,u):(m._visibility|=2,$o(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&sm(b,s);break;case 24:Qr(r,s,o,u),f&2048&&am(s.alternate,s);break;default:Qr(r,s,o,u)}}function $o(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,S=o,O=u,Q=b.flags;switch(b.tag){case 0:case 11:case 15:$o(m,b,S,O,f),Su(8,b);break;case 23:break;case 22:var ne=b.stateNode;b.memoizedState!==null?ne._visibility&2?$o(m,b,S,O,f):Au(m,b):(ne._visibility|=2,$o(m,b,S,O,f)),f&&Q&2048&&sm(b.alternate,b);break;case 24:$o(m,b,S,O,f),f&&Q&2048&&am(b.alternate,b);break;default:$o(m,b,S,O,f)}s=s.sibling}}function Au(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Au(o,u),f&2048&&sm(u.alternate,u);break;case 24:Au(o,u),f&2048&&am(u.alternate,u);break;default:Au(o,u)}s=s.sibling}}var Ru=8192;function Ho(r){if(r.subtreeFlags&Ru)for(r=r.child;r!==null;)T0(r),r=r.sibling}function T0(r){switch(r.tag){case 26:Ho(r),r.flags&Ru&&r.memoizedState!==null&&yR(br,r.memoizedState,r.memoizedProps);break;case 5:Ho(r);break;case 3:case 4:var s=br;br=Xh(r.stateNode.containerInfo),Ho(r),br=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ru,Ru=16777216,Ho(r),Ru=s):Ho(r));break;default:Ho(r)}}function w0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Cu(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,x0(u,r)}w0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)S0(r),r=r.sibling}function S0(r){switch(r.tag){case 0:case 11:case 15:Cu(r),r.flags&2048&&Ts(9,r,r.return);break;case 3:Cu(r);break;case 12:Cu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Uh(r)):Cu(r);break;default:Cu(r)}}function Uh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];nn=u,x0(u,r)}w0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Ts(8,s,s.return),Uh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Uh(s));break;default:Uh(s)}r=r.sibling}}function x0(r,s){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:Ts(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:cu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,nn=u;else e:for(o=r;nn!==null;){u=nn;var f=u.sibling,m=u.return;if(g0(u),u===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var MA={getCacheForType:function(r){var s=En(Ht),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},NA=typeof WeakMap=="function"?WeakMap:Map,rt=0,pt=null,je=null,Ge=0,it=0,Wn=null,xs=!1,Go=!1,om=!1,qi=0,Rt=0,As=0,ja=0,lm=0,fr=0,Yo=0,Iu=null,Un=null,um=!1,cm=0,qh=1/0,Bh=null,Rs=null,dn=0,Cs=null,Wo=null,Qo=0,hm=0,fm=null,A0=null,Du=0,dm=null;function Qn(){if((rt&2)!==0&&Ge!==0)return Ge&-Ge;if(ee.T!==null){var r=Vo;return r!==0?r:Em()}return tr()}function R0(){fr===0&&(fr=(Ge&536870912)===0||Ze?Oe():536870912);var r=hr.current;return r!==null&&(r.flags|=32),fr}function Kn(r,s,o){(r===pt&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(Ko(r,0),Is(r,Ge,fr,!1)),We(r,o),((rt&2)===0||r!==pt)&&(r===pt&&((rt&2)===0&&(ja|=o),Rt===4&&Is(r,Ge,fr,!1)),Kr(r))}function C0(r,s,o){if((rt&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||_i(r,s),f=u?LA(r,s):gm(r,s,!0),m=u;do{if(f===0){Go&&!u&&Is(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!PA(o)){f=gm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var S=r;f=Iu;var O=S.current.memoizedState.isDehydrated;if(O&&(Ko(S,b).flags|=256),b=gm(S,b,!1),b!==2){if(om&&!O){S.errorRecoveryDisabledLanes|=m,ja|=m,f=4;break e}m=Un,Un=f,m!==null&&(Un===null?Un=m:Un.push.apply(Un,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Ko(r,0),Is(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Is(u,s,fr,!xs);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=cm+300-Vn(),10<f)){if(Is(u,s,fr,!xs),yi(u,0,!0)!==0)break e;u.timeoutHandle=rE(I0.bind(null,u,o,Un,Bh,um,s,fr,ja,Yo,xs,m,2,-0,0),f);break e}I0(u,o,Un,Bh,um,s,fr,ja,Yo,xs,m,0,-0,0)}}break}while(!0);Kr(r)}function I0(r,s,o,u,f,m,b,S,O,Q,ne,ae,K,X){if(r.timeoutHandle=-1,ae=s.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Lu={stylesheets:null,count:0,unsuspend:gR},T0(s),ae=_R(),ae!==null)){r.cancelPendingCommit=ae(V0.bind(null,r,s,m,o,u,f,b,S,O,ne,1,K,X)),Is(r,m,b,!Q);return}V0(r,s,m,o,u,f,b,S,O)}function PA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Is(r,s,o,u){s&=~lm,s&=~ja,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-Xt(f),b=1<<m;u[m]=-1,f&=~b}o!==0&&Me(r,o,s)}function zh(){return(rt&6)===0?(ku(0),!1):!0}function pm(){if(je!==null){if(it===0)var r=je.return;else r=je,Oi=Oa=null,kp(r),zo=null,bu=0,r=je;for(;r!==null;)l0(r.alternate,r),r=r.return;je=null}}function Ko(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,JA(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),pm(),pt=r,je=o=Ii(r.current,null),Ge=s,it=0,Wn=null,xs=!1,Go=_i(r,s),om=!1,Yo=fr=lm=ja=As=Rt=0,Un=Iu=null,um=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-Xt(u),m=1<<f;s|=r[f],u&=~m}return qi=s,ch(),o}function D0(r,s){Ve=null,ee.H=Ih,s===fu||s===vh?(s=Y_(),it=3):s===$_?(s=Y_(),it=4):it=s===Wv?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Wn=s,je===null&&(Rt=1,Nh(r,or(s,r.current)))}function k0(){var r=ee.H;return ee.H=Ih,r===null?Ih:r}function O0(){var r=ee.A;return ee.A=MA,r}function mm(){Rt=4,xs||(Ge&4194048)!==Ge&&hr.current!==null||(Go=!0),(As&134217727)===0&&(ja&134217727)===0||pt===null||Is(pt,Ge,fr,!1)}function gm(r,s,o){var u=rt;rt|=2;var f=k0(),m=O0();(pt!==r||Ge!==s)&&(Bh=null,Ko(r,s)),s=!1;var b=Rt;e:do try{if(it!==0&&je!==null){var S=je,O=Wn;switch(it){case 8:pm(),b=6;break e;case 3:case 2:case 9:case 6:hr.current===null&&(s=!0);var Q=it;if(it=0,Wn=null,Xo(r,S,O,Q),o&&Go){b=0;break e}break;default:Q=it,it=0,Wn=null,Xo(r,S,O,Q)}}VA(),b=Rt;break}catch(ne){D0(r,ne)}while(!0);return s&&r.shellSuspendCounter++,Oi=Oa=null,rt=u,ee.H=f,ee.A=m,je===null&&(pt=null,Ge=0,ch()),b}function VA(){for(;je!==null;)M0(je)}function LA(r,s){var o=rt;rt|=2;var u=k0(),f=O0();pt!==r||Ge!==s?(Bh=null,qh=Vn()+500,Ko(r,s)):Go=_i(r,s);e:do try{if(it!==0&&je!==null){s=je;var m=Wn;t:switch(it){case 1:it=0,Wn=null,Xo(r,s,m,1);break;case 2:case 9:if(H_(m)){it=0,Wn=null,N0(s);break}s=function(){it!==2&&it!==9||pt!==r||(it=7),Kr(r)},m.then(s,s);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:H_(m)?(it=0,Wn=null,N0(s)):(it=0,Wn=null,Xo(r,s,m,7));break;case 5:var b=null;switch(je.tag){case 26:b=je.memoizedState;case 5:case 27:var S=je;if(!b||mE(b)){it=0,Wn=null;var O=S.sibling;if(O!==null)je=O;else{var Q=S.return;Q!==null?(je=Q,Fh(Q)):je=null}break t}}it=0,Wn=null,Xo(r,s,m,5);break;case 6:it=0,Wn=null,Xo(r,s,m,6);break;case 8:pm(),Rt=6;break e;default:throw Error(i(462))}}jA();break}catch(ne){D0(r,ne)}while(!0);return Oi=Oa=null,ee.H=u,ee.A=f,rt=o,je!==null?0:(pt=null,Ge=0,ch(),Rt)}function jA(){for(;je!==null&&!la();)M0(je)}function M0(r){var s=a0(r.alternate,r,qi);r.memoizedProps=r.pendingProps,s===null?Fh(r):je=s}function N0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=e0(o,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=e0(o,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:kp(s);default:l0(o,s),s=je=P_(s,qi),s=a0(o,s,qi)}r.memoizedProps=r.pendingProps,s===null?Fh(r):je=s}function Xo(r,s,o,u){Oi=Oa=null,kp(s),zo=null,bu=0;var f=s.return;try{if(RA(r,f,s,o,Ge)){Rt=1,Nh(r,or(o,r.current)),je=null;return}}catch(m){if(f!==null)throw je=f,m;Rt=1,Nh(r,or(o,r.current)),je=null;return}s.flags&32768?(Ze||u===1?r=!0:Go||(Ge&536870912)!==0?r=!1:(xs=r=!0,(u===2||u===9||u===3||u===6)&&(u=hr.current,u!==null&&u.tag===13&&(u.flags|=16384))),P0(s,r)):Fh(s)}function Fh(r){var s=r;do{if((s.flags&32768)!==0){P0(s,xs);return}r=s.return;var o=IA(s.alternate,s,qi);if(o!==null){je=o;return}if(s=s.sibling,s!==null){je=s;return}je=s=r}while(s!==null);Rt===0&&(Rt=5)}function P0(r,s){do{var o=DA(r.alternate,r);if(o!==null){o.flags&=32767,je=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){je=r;return}je=r=o}while(r!==null);Rt=6,je=null}function V0(r,s,o,u,f,m,b,S,O){r.cancelPendingCommit=null;do $h();while(dn!==0);if((rt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=ap,Zt(r,o,m,b,S,O),r===pt&&(je=pt=null,Ge=0),Wo=s,Cs=r,Qo=o,hm=m,fm=f,A0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,zA(fi,function(){return B0(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=ee.T,ee.T=null,f=ce.p,ce.p=2,b=rt,rt|=4;try{kA(r,s,o)}finally{rt=b,ce.p=f,ee.T=u}}dn=1,L0(),j0(),U0()}}function L0(){if(dn===1){dn=0;var r=Cs,s=Wo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=ee.T,ee.T=null;var u=ce.p;ce.p=2;var f=rt;rt|=4;try{v0(s,r);var m=Cm,b=x_(r.containerInfo),S=m.focusedElem,O=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&S_(S.ownerDocument.documentElement,S)){if(O!==null&&tp(S)){var Q=O.start,ne=O.end;if(ne===void 0&&(ne=Q),"selectionStart"in S)S.selectionStart=Q,S.selectionEnd=Math.min(ne,S.value.length);else{var ae=S.ownerDocument||document,K=ae&&ae.defaultView||window;if(K.getSelection){var X=K.getSelection(),Ce=S.textContent.length,we=Math.min(O.start,Ce),ut=O.end===void 0?we:Math.min(O.end,Ce);!X.extend&&we>ut&&(b=ut,ut=we,we=b);var H=w_(S,we),z=w_(S,ut);if(H&&z&&(X.rangeCount!==1||X.anchorNode!==H.node||X.anchorOffset!==H.offset||X.focusNode!==z.node||X.focusOffset!==z.offset)){var W=ae.createRange();W.setStart(H.node,H.offset),X.removeAllRanges(),we>ut?(X.addRange(W),X.extend(z.node,z.offset)):(W.setEnd(z.node,z.offset),X.addRange(W))}}}}for(ae=[],X=S;X=X.parentNode;)X.nodeType===1&&ae.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ae.length;S++){var re=ae[S];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}nf=!!Rm,Cm=Rm=null}finally{rt=f,ce.p=u,ee.T=o}}r.current=s,dn=2}}function j0(){if(dn===2){dn=0;var r=Cs,s=Wo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=ee.T,ee.T=null;var u=ce.p;ce.p=2;var f=rt;rt|=4;try{m0(r,s.alternate,s)}finally{rt=f,ce.p=u,ee.T=o}}dn=3}}function U0(){if(dn===4||dn===3){dn=0,co();var r=Cs,s=Wo,o=Qo,u=A0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?dn=5:(dn=0,Wo=Cs=null,q0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Rs=null),ls(o),s=s.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(_t,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=ee.T,f=ce.p,ce.p=2,ee.T=null;try{for(var m=r.onRecoverableError,b=0;b<u.length;b++){var S=u[b];m(S.value,{componentStack:S.stack})}}finally{ee.T=s,ce.p=f}}(Qo&3)!==0&&$h(),Kr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===dm?Du++:(Du=0,dm=r):Du=0,ku(0)}}function q0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,cu(s)))}function $h(r){return L0(),j0(),U0(),B0()}function B0(){if(dn!==5)return!1;var r=Cs,s=hm;hm=0;var o=ls(Qo),u=ee.T,f=ce.p;try{ce.p=32>o?32:o,ee.T=null,o=fm,fm=null;var m=Cs,b=Qo;if(dn=0,Wo=Cs=null,Qo=0,(rt&6)!==0)throw Error(i(331));var S=rt;if(rt|=4,S0(m.current),b0(m,m.current,b,o),rt=S,ku(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{ce.p=f,ee.T=u,q0(r,s)}}function z0(r,s,o){s=or(o,s),s=Hp(r.stateNode,s,2),r=_s(r,s,2),r!==null&&(We(r,2),Kr(r))}function ht(r,s,o){if(r.tag===3)z0(r,r,o);else for(;s!==null;){if(s.tag===3){z0(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Rs===null||!Rs.has(u))){r=or(o,r),o=Gv(2),u=_s(s,o,2),u!==null&&(Yv(o,u,s,r),We(u,2),Kr(u));break}}s=s.return}}function ym(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new NA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(om=!0,f.add(o),r=UA.bind(null,r,s,o),s.then(r,r))}function UA(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,pt===r&&(Ge&o)===o&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Vn()-cm?(rt&2)===0&&Ko(r,0):lm|=o,Yo===Ge&&(Yo=0)),Kr(r)}function F0(r,s){s===0&&(s=Je()),r=Oo(r,s),r!==null&&(We(r,s),Kr(r))}function qA(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),F0(r,o)}function BA(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),F0(r,o)}function zA(r,s){return hi(r,s)}var Hh=null,Zo=null,_m=!1,Gh=!1,vm=!1,Ua=0;function Kr(r){r!==Zo&&r.next===null&&(Zo===null?Hh=Zo=r:Zo=Zo.next=r),Gh=!0,_m||(_m=!0,$A())}function ku(r,s){if(!vm&&Gh){vm=!0;do for(var o=!1,u=Hh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var b=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Xt(42|r)+1)-1,m&=f&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Y0(u,m))}else m=Ge,m=yi(u,u===pt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||_i(u,m)||(o=!0,Y0(u,m));u=u.next}while(o);vm=!1}}function FA(){$0()}function $0(){Gh=_m=!1;var r=0;Ua!==0&&(ZA()&&(r=Ua),Ua=0);for(var s=Vn(),o=null,u=Hh;u!==null;){var f=u.next,m=H0(u,s);m===0?(u.next=null,o===null?Hh=f:o.next=f,f===null&&(Zo=o)):(o=u,(r!==0||(m&3)!==0)&&(Gh=!0)),u=f}ku(r)}function H0(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-Xt(m),S=1<<b,O=f[b];O===-1?((S&o)===0||(S&u)!==0)&&(f[b]=os(S,s)):O<=s&&(r.expiredLanes|=S),m&=~S}if(s=pt,o=Ge,o=yi(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(it===2||it===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Mr(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||_i(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Mr(u),ls(o)){case 2:case 8:o=as;break;case 32:o=fi;break;case 268435456:o=Nr;break;default:o=fi}return u=G0.bind(null,r),o=hi(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Mr(u),r.callbackPriority=2,r.callbackNode=null,2}function G0(r,s){if(dn!==0&&dn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if($h()&&r.callbackNode!==o)return null;var u=Ge;return u=yi(r,r===pt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(C0(r,u,s),H0(r,Vn()),r.callbackNode!=null&&r.callbackNode===o?G0.bind(null,r):null)}function Y0(r,s){if($h())return null;C0(r,s,!0)}function $A(){eR(function(){(rt&6)!==0?hi(ua,FA):$0()})}function Em(){return Ua===0&&(Ua=Oe()),Ua}function W0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Eo(""+r)}function Q0(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function HA(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=W0((f[Mt]||null).action),b=u.submitter;b&&(s=(s=b[Mt]||null)?W0(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var S=new bo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ua!==0){var O=b?Q0(f,b):new FormData(f);qp(o,{pending:!0,data:O,method:f.method,action:m},null,O)}}else typeof m=="function"&&(S.preventDefault(),O=b?Q0(f,b):new FormData(f),qp(o,{pending:!0,data:O,method:f.method,action:m},m,O))},currentTarget:f}]})}}for(var bm=0;bm<sp.length;bm++){var Tm=sp[bm],GA=Tm.toLowerCase(),YA=Tm[0].toUpperCase()+Tm.slice(1);Er(GA,"on"+YA)}Er(C_,"onAnimationEnd"),Er(I_,"onAnimationIteration"),Er(D_,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(cA,"onTransitionRun"),Er(hA,"onTransitionStart"),Er(fA,"onTransitionCancel"),Er(k_,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_r("onBeforeInput",["compositionend","keypress","textInput","paste"]),_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ou));function K0(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var b=u.length-1;0<=b;b--){var S=u[b],O=S.instance,Q=S.currentTarget;if(S=S.listener,O!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(ne){Mh(ne)}f.currentTarget=null,m=O}else for(b=0;b<u.length;b++){if(S=u[b],O=S.instance,Q=S.currentTarget,S=S.listener,O!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=Q;try{m(f)}catch(ne){Mh(ne)}f.currentTarget=null,m=O}}}}function Ue(r,s){var o=s[Fl];o===void 0&&(o=s[Fl]=new Set);var u=r+"__bubble";o.has(u)||(X0(s,r,2,!1),o.add(u))}function wm(r,s,o){var u=0;s&&(u|=4),X0(o,r,u,s)}var Yh="_reactListening"+Math.random().toString(36).slice(2);function Sm(r){if(!r[Yh]){r[Yh]=!0,$l.forEach(function(o){o!=="selectionchange"&&(WA.has(o)||wm(o,!1,r),wm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Yh]||(s[Yh]=!0,wm("selectionchange",!1,s))}}function X0(r,s,o,u){switch(bE(s)){case 2:var f=bR;break;case 8:f=TR;break;default:f=jm}o=f.bind(null,s,o,r),f=void 0,!sr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function xm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===f)break;if(b===4)for(b=u.return;b!==null;){var O=b.tag;if((O===3||O===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;S!==null;){if(b=vi(S),b===null)return;if(O=b.tag,O===5||O===6||O===26||O===27){u=m=b;continue e}S=S.parentNode}}u=u.return}Qc(function(){var Q=m,ne=ir(o),ae=[];e:{var K=O_.get(r);if(K!==void 0){var X=bo,Ce=r;switch(r){case"keypress":if(Br(o)===0)break e;case"keydown":case"keyup":X=Ro;break;case"focusin":Ce="focus",X=So;break;case"focusout":Ce="blur",X=So;break;case"beforeblur":case"afterblur":X=So;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=rh;break;case C_:case I_:case D_:X=xo;break;case k_:X=sh;break;case"scroll":case"scrollend":X=Kc;break;case"wheel":X=Co;break;case"copy":case"cut":case"paste":X=Ao;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=nu;break;case"toggle":case"beforetoggle":X=oh}var we=(s&4)!==0,ut=!we&&(r==="scroll"||r==="scrollend"),H=we?K!==null?K+"Capture":null:K;we=[];for(var z=Q,W;z!==null;){var re=z;if(W=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||W===null||H===null||(re=_a(z,H),re!=null&&we.push(Mu(z,re,W))),ut)break;z=z.return}0<we.length&&(K=new X(K,Ce,null,o,ne),ae.push({event:K,listeners:we}))}}if((s&7)===0){e:{if(K=r==="mouseover"||r==="pointerover",X=r==="mouseout"||r==="pointerout",K&&o!==wi&&(Ce=o.relatedTarget||o.fromElement)&&(vi(Ce)||Ce[nr]))break e;if((X||K)&&(K=ne.window===ne?ne:(K=ne.ownerDocument)?K.defaultView||K.parentWindow:window,X?(Ce=o.relatedTarget||o.toElement,X=Q,Ce=Ce?vi(Ce):null,Ce!==null&&(ut=l(Ce),we=Ce.tag,Ce!==ut||we!==5&&we!==27&&we!==6)&&(Ce=null)):(X=null,Ce=Q),X!==Ce)){if(we=ar,re="onMouseLeave",H="onMouseEnter",z="mouse",(r==="pointerout"||r==="pointerover")&&(we=nu,re="onPointerLeave",H="onPointerEnter",z="pointer"),ut=X==null?K:Lr(X),W=Ce==null?K:Lr(Ce),K=new we(re,z+"leave",X,o,ne),K.target=ut,K.relatedTarget=W,re=null,vi(ne)===Q&&(we=new we(H,z+"enter",Ce,o,ne),we.target=W,we.relatedTarget=ut,re=we),ut=re,X&&Ce)t:{for(we=X,H=Ce,z=0,W=we;W;W=Jo(W))z++;for(W=0,re=H;re;re=Jo(re))W++;for(;0<z-W;)we=Jo(we),z--;for(;0<W-z;)H=Jo(H),W--;for(;z--;){if(we===H||H!==null&&we===H.alternate)break t;we=Jo(we),H=Jo(H)}we=null}else we=null;X!==null&&Z0(ae,K,X,we,!1),Ce!==null&&ut!==null&&Z0(ae,ut,Ce,we,!0)}}e:{if(K=Q?Lr(Q):window,X=K.nodeName&&K.nodeName.toLowerCase(),X==="select"||X==="input"&&K.type==="file")var ge=y_;else if($t(K))if(__)ge=oA;else{ge=sA;var Le=iA}else X=K.nodeName,!X||X.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Q&&Ql(Q.elementType)&&(ge=y_):ge=aA;if(ge&&(ge=ge(r,Q))){Ci(ae,ge,o,ne);break e}Le&&Le(r,K,Q),r==="focusout"&&Q&&K.type==="number"&&Q.memoizedProps.value!=null&&ds(K,"number",K.value)}switch(Le=Q?Lr(Q):window,r){case"focusin":($t(Le)||Le.contentEditable==="true")&&(Io=Le,np=Q,su=null);break;case"focusout":su=np=Io=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,A_(ae,o,ne);break;case"selectionchange":if(uA)break;case"keydown":case"keyup":A_(ae,o,ne)}var ve;if($r)e:{switch(r){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else $e?Z(r,o)&&(Se="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(E&&o.locale!=="ko"&&($e||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&$e&&(ve=Xl()):(qr=ne,ps="value"in qr?qr.value:qr.textContent,$e=!0)),Le=Wh(Q,Se),0<Le.length&&(Se=new eu(Se,r,null,o,ne),ae.push({event:Se,listeners:Le}),ve?Se.data=ve:(ve=he(o),ve!==null&&(Se.data=ve)))),(ve=y?Ft(r,o):He(r,o))&&(Se=Wh(Q,"onBeforeInput"),0<Se.length&&(Le=new eu("onBeforeInput","beforeinput",null,o,ne),ae.push({event:Le,listeners:Se}),Le.data=ve)),HA(ae,r,Q,o,ne)}K0(ae,s)})}function Mu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Wh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=_a(r,o),f!=null&&u.unshift(Mu(r,f,m)),f=_a(r,s),f!=null&&u.push(Mu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function Jo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Z0(r,s,o,u,f){for(var m=s._reactName,b=[];o!==null&&o!==u;){var S=o,O=S.alternate,Q=S.stateNode;if(S=S.tag,O!==null&&O===u)break;S!==5&&S!==26&&S!==27||Q===null||(O=Q,f?(Q=_a(o,m),Q!=null&&b.unshift(Mu(o,Q,O))):f||(Q=_a(o,m),Q!=null&&b.push(Mu(o,Q,O)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var QA=/\r\n?/g,KA=/\u0000|\uFFFD/g;function J0(r){return(typeof r=="string"?r:""+r).replace(QA,`
`).replace(KA,"")}function eE(r,s){return s=J0(s),J0(r)===s}function Qh(){}function lt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||rr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&rr(r,""+u);break;case"className":jr(r,"class",u);break;case"tabIndex":jr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":jr(r,o,u);break;case"style":Wl(r,u,m);break;case"data":if(s!=="object"){jr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Eo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&lt(r,s,"name",f.name,f,null),lt(r,s,"formEncType",f.formEncType,f,null),lt(r,s,"formMethod",f.formMethod,f,null),lt(r,s,"formTarget",f.formTarget,f,null)):(lt(r,s,"encType",f.encType,f,null),lt(r,s,"method",f.method,f,null),lt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Eo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Qh);break;case"onScroll":u!=null&&Ue("scroll",r);break;case"onScrollEnd":u!=null&&Ue("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Eo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ue("beforetoggle",r),Ue("toggle",r),fs(r,"popover",u);break;case"xlinkActuate":cn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":cn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":cn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":cn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":cn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":cn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":cn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":cn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":cn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":fs(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Qd.get(o)||o,fs(r,o,u))}}function Am(r,s,o,u,f,m){switch(o){case"style":Wl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?rr(r,u):(typeof u=="number"||typeof u=="bigint")&&rr(r,""+u);break;case"onScroll":u!=null&&Ue("scroll",r);break;case"onScrollEnd":u!=null&&Ue("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Qh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Mt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):fs(r,o,u)}}}function pn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",r),Ue("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:lt(r,s,m,b,o,null)}}f&&lt(r,s,"srcSet",o.srcSet,o,null),u&&lt(r,s,"src",o.src,o,null);return;case"input":Ue("invalid",r);var S=m=b=f=null,O=null,Q=null;for(u in o)if(o.hasOwnProperty(u)){var ne=o[u];if(ne!=null)switch(u){case"name":f=ne;break;case"type":b=ne;break;case"checked":O=ne;break;case"defaultChecked":Q=ne;break;case"value":m=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,s));break;default:lt(r,s,u,ne,o,null)}}ma(r,m,S,O,Q,b,f,!1),vo(r);return;case"select":Ue("invalid",r),u=b=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":u=S;default:lt(r,s,f,S,o,null)}s=m,o=b,r.multiple=!!u,s!=null?Ti(r,!!u,s,!1):o!=null&&Ti(r,!!u,o,!0);return;case"textarea":Ue("invalid",r),m=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(S=o[b],S!=null))switch(b){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:lt(r,s,b,S,o,null)}ga(r,u,f,m),vo(r);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(u=o[O],u!=null))switch(O){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:lt(r,s,O,u,o,null)}return;case"dialog":Ue("beforetoggle",r),Ue("toggle",r),Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":Ue("load",r);break;case"video":case"audio":for(u=0;u<Ou.length;u++)Ue(Ou[u],r);break;case"image":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"embed":case"source":case"link":Ue("error",r),Ue("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in o)if(o.hasOwnProperty(Q)&&(u=o[Q],u!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:lt(r,s,Q,u,o,null)}return;default:if(Ql(s)){for(ne in o)o.hasOwnProperty(ne)&&(u=o[ne],u!==void 0&&Am(r,s,ne,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&lt(r,s,S,u,o,null))}function XA(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,S=null,O=null,Q=null,ne=null;for(X in o){var ae=o[X];if(o.hasOwnProperty(X)&&ae!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":O=ae;default:u.hasOwnProperty(X)||lt(r,s,X,null,u,ae)}}for(var K in u){var X=u[K];if(ae=o[K],u.hasOwnProperty(K)&&(X!=null||ae!=null))switch(K){case"type":m=X;break;case"name":f=X;break;case"checked":Q=X;break;case"defaultChecked":ne=X;break;case"value":b=X;break;case"defaultValue":S=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:X!==ae&&lt(r,s,K,X,u,ae)}}Fn(r,b,S,O,Q,ne,m,f);return;case"select":X=b=S=K=null;for(m in o)if(O=o[m],o.hasOwnProperty(m)&&O!=null)switch(m){case"value":break;case"multiple":X=O;default:u.hasOwnProperty(m)||lt(r,s,m,null,u,O)}for(f in u)if(m=u[f],O=o[f],u.hasOwnProperty(f)&&(m!=null||O!=null))switch(f){case"value":K=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==O&&lt(r,s,f,m,u,O)}s=S,o=b,u=X,K!=null?Ti(r,!!o,K,!1):!!u!=!!o&&(s!=null?Ti(r,!!o,s,!0):Ti(r,!!o,o?[]:"",!1));return;case"textarea":X=K=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:lt(r,s,S,null,u,f)}for(b in u)if(f=u[b],m=o[b],u.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":K=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&lt(r,s,b,f,u,m)}at(r,K,X);return;case"option":for(var Ce in o)if(K=o[Ce],o.hasOwnProperty(Ce)&&K!=null&&!u.hasOwnProperty(Ce))switch(Ce){case"selected":r.selected=!1;break;default:lt(r,s,Ce,null,u,K)}for(O in u)if(K=u[O],X=o[O],u.hasOwnProperty(O)&&K!==X&&(K!=null||X!=null))switch(O){case"selected":r.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:lt(r,s,O,K,u,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)K=o[we],o.hasOwnProperty(we)&&K!=null&&!u.hasOwnProperty(we)&&lt(r,s,we,null,u,K);for(Q in u)if(K=u[Q],X=o[Q],u.hasOwnProperty(Q)&&K!==X&&(K!=null||X!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,s));break;default:lt(r,s,Q,K,u,X)}return;default:if(Ql(s)){for(var ut in o)K=o[ut],o.hasOwnProperty(ut)&&K!==void 0&&!u.hasOwnProperty(ut)&&Am(r,s,ut,void 0,u,K);for(ne in u)K=u[ne],X=o[ne],!u.hasOwnProperty(ne)||K===X||K===void 0&&X===void 0||Am(r,s,ne,K,u,X);return}}for(var H in o)K=o[H],o.hasOwnProperty(H)&&K!=null&&!u.hasOwnProperty(H)&&lt(r,s,H,null,u,K);for(ae in u)K=u[ae],X=o[ae],!u.hasOwnProperty(ae)||K===X||K==null&&X==null||lt(r,s,ae,K,u,X)}var Rm=null,Cm=null;function Kh(r){return r.nodeType===9?r:r.ownerDocument}function tE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Im(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Dm=null;function ZA(){var r=window.event;return r&&r.type==="popstate"?r===Dm?!1:(Dm=r,!0):(Dm=null,!1)}var rE=typeof setTimeout=="function"?setTimeout:void 0,JA=typeof clearTimeout=="function"?clearTimeout:void 0,iE=typeof Promise=="function"?Promise:void 0,eR=typeof queueMicrotask=="function"?queueMicrotask:typeof iE<"u"?function(r){return iE.resolve(null).then(r).catch(tR)}:rE;function tR(r){setTimeout(function(){throw r})}function Ds(r){return r==="head"}function sE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var b=r.ownerDocument;if(o&1&&Nu(b.documentElement),o&2&&Nu(b.body),o&4)for(o=b.head,Nu(o),b=o.firstChild;b;){var S=b.nextSibling,O=b.nodeName;b[ha]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=S}}if(f===0){r.removeChild(m),zu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);zu(s)}function km(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":km(o),hs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function nR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[ha])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Tr(r.nextSibling),r===null)break}return null}function rR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Tr(r.nextSibling),r===null))return null;return r}function Om(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function iR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Tr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Mm=null;function aE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function oE(r,s,o){switch(s=Kh(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Nu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);hs(r)}var dr=new Map,lE=new Set;function Xh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Bi=ce.d;ce.d={f:sR,r:aR,D:oR,C:lR,L:uR,m:cR,X:fR,S:hR,M:dR};function sR(){var r=Bi.f(),s=zh();return r||s}function aR(r){var s=Vr(r);s!==null&&s.tag===5&&s.type==="form"?Cv(s):Bi.r(r)}var el=typeof document>"u"?null:document;function uE(r,s,o){var u=el;if(u&&typeof s=="string"&&s){var f=Nt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),lE.has(f)||(lE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),pn(s,"link",r),It(s),u.head.appendChild(s)))}}function oR(r){Bi.D(r),uE("dns-prefetch",r,null)}function lR(r,s){Bi.C(r,s),uE("preconnect",r,s)}function uR(r,s,o){Bi.L(r,s,o);var u=el;if(u&&r&&s){var f='link[rel="preload"][as="'+Nt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Nt(o.imageSizes)+'"]')):f+='[href="'+Nt(r)+'"]';var m=f;switch(s){case"style":m=tl(r);break;case"script":m=nl(r)}dr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),dr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(Pu(m))||s==="script"&&u.querySelector(Vu(m))||(s=u.createElement("link"),pn(s,"link",r),It(s),u.head.appendChild(s)))}}function cR(r,s){Bi.m(r,s);var o=el;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Nt(u)+'"][href="'+Nt(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(r)}if(!dr.has(m)&&(r=v({rel:"modulepreload",href:r},s),dr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Vu(m)))return}u=o.createElement("link"),pn(u,"link",r),It(u),o.head.appendChild(u)}}}function hR(r,s,o){Bi.S(r,s,o);var u=el;if(u&&r){var f=kn(u).hoistableStyles,m=tl(r);s=s||"default";var b=f.get(m);if(!b){var S={loading:0,preload:null};if(b=u.querySelector(Pu(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=dr.get(m))&&Nm(r,o);var O=b=u.createElement("link");It(O),pn(O,"link",r),O._p=new Promise(function(Q,ne){O.onload=Q,O.onerror=ne}),O.addEventListener("load",function(){S.loading|=1}),O.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Zh(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:S},f.set(m,b)}}}function fR(r,s){Bi.X(r,s);var o=el;if(o&&r){var u=kn(o).hoistableScripts,f=nl(r),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(r=v({src:r,async:!0},s),(s=dr.get(f))&&Pm(r,s),m=o.createElement("script"),It(m),pn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function dR(r,s){Bi.M(r,s);var o=el;if(o&&r){var u=kn(o).hoistableScripts,f=nl(r),m=u.get(f);m||(m=o.querySelector(Vu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=dr.get(f))&&Pm(r,s),m=o.createElement("script"),It(m),pn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function cE(r,s,o,u){var f=(f=_e.current)?Xh(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=tl(o.href),o=kn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=tl(o.href);var m=kn(f).hoistableStyles,b=m.get(r);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=f.querySelector(Pu(r)))&&!m._p&&(b.instance=m,b.state.loading=5),dr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},dr.set(r,o),m||pR(f,r,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=nl(o),o=kn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function tl(r){return'href="'+Nt(r)+'"'}function Pu(r){return'link[rel="stylesheet"]['+r+"]"}function hE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function pR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),pn(s,"link",o),It(s),r.head.appendChild(s))}function nl(r){return'[src="'+Nt(r)+'"]'}function Vu(r){return"script[async]"+r}function fE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(u)return s.instance=u,It(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),It(u),pn(u,"style",f),Zh(u,o.precedence,r),s.instance=u;case"stylesheet":f=tl(o.href);var m=r.querySelector(Pu(f));if(m)return s.state.loading|=4,s.instance=m,It(m),m;u=hE(o),(f=dr.get(f))&&Nm(u,f),m=(r.ownerDocument||r).createElement("link"),It(m);var b=m;return b._p=new Promise(function(S,O){b.onload=S,b.onerror=O}),pn(m,"link",u),s.state.loading|=4,Zh(m,o.precedence,r),s.instance=m;case"script":return m=nl(o.src),(f=r.querySelector(Vu(m)))?(s.instance=f,It(f),f):(u=o,(f=dr.get(m))&&(u=v({},o),Pm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),It(f),pn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Zh(u,o.precedence,r));return s.instance}function Zh(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,b=0;b<u.length;b++){var S=u[b];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Nm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Pm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Jh=null;function dE(r,s,o){if(Jh===null){var u=new Map,f=Jh=new Map;f.set(o,u)}else f=Jh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[ha]||m[zt]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var S=u.get(b);S?S.push(m):u.set(b,[m])}}return u}function pE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function mR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function mE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Lu=null;function gR(){}function yR(r,s,o){if(Lu===null)throw Error(i(475));var u=Lu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=tl(o.href),m=r.querySelector(Pu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=ef.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,It(m);return}m=r.ownerDocument||r,o=hE(o),(f=dr.get(f))&&Nm(o,f),m=m.createElement("link"),It(m);var b=m;b._p=new Promise(function(S,O){b.onload=S,b.onerror=O}),pn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=ef.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function _R(){if(Lu===null)throw Error(i(475));var r=Lu;return r.stylesheets&&r.count===0&&Vm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Vm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function ef(){if(this.count--,this.count===0){if(this.stylesheets)Vm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var tf=null;function Vm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,tf=new Map,s.forEach(vR,r),tf=null,ef.call(r))}function vR(r,s){if(!(s.state.loading&4)){var o=tf.get(r);if(o)var u=o.get(null);else{o=new Map,tf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,f),o.set(b,f),this.count++,u=ef.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var ju={$$typeof:B,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function ER(r,s,o,u,f,m,b,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function gE(r,s,o,u,f,m,b,S,O,Q,ne,ae){return r=new ER(r,s,o,b,S,O,Q,ae),s=1,m===!0&&(s|=24),m=Hn(3,null,null,s),r.current=m,m.stateNode=r,s=yp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},bp(m),r}function yE(r){return r?(r=Mo,r):Mo}function _E(r,s,o,u,f,m){f=yE(f),u.context===null?u.context=f:u.pendingContext=f,u=ys(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=_s(r,u,s),o!==null&&(Kn(o,r,s),pu(o,r,s))}function vE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Lm(r,s){vE(r,s),(r=r.alternate)&&vE(r,s)}function EE(r){if(r.tag===13){var s=Oo(r,67108864);s!==null&&Kn(s,r,67108864),Lm(r,67108864)}}var nf=!0;function bR(r,s,o,u){var f=ee.T;ee.T=null;var m=ce.p;try{ce.p=2,jm(r,s,o,u)}finally{ce.p=m,ee.T=f}}function TR(r,s,o,u){var f=ee.T;ee.T=null;var m=ce.p;try{ce.p=8,jm(r,s,o,u)}finally{ce.p=m,ee.T=f}}function jm(r,s,o,u){if(nf){var f=Um(u);if(f===null)xm(r,s,u,rf,o),TE(r,u);else if(SR(f,r,s,o,u))u.stopPropagation();else if(TE(r,u),s&4&&-1<wR.indexOf(r)){for(;f!==null;){var m=Vr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=zn(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var O=1<<31-Xt(b);S.entanglements[1]|=O,b&=~O}Kr(m),(rt&6)===0&&(qh=Vn()+500,ku(0))}}break;case 13:S=Oo(m,2),S!==null&&Kn(S,m,2),zh(),Lm(m,2)}if(m=Um(u),m===null&&xm(r,s,u,rf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else xm(r,s,u,null,o)}}function Um(r){return r=ir(r),qm(r)}var rf=null;function qm(r){if(rf=null,r=vi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return rf=r,null}function bE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bl()){case ua:return 2;case as:return 8;case fi:case ho:return 32;case Nr:return 268435456;default:return 32}default:return 32}}var Bm=!1,ks=null,Os=null,Ms=null,Uu=new Map,qu=new Map,Ns=[],wR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function TE(r,s){switch(r){case"focusin":case"focusout":ks=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":Uu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qu.delete(s.pointerId)}}function Bu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Vr(s),s!==null&&EE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function SR(r,s,o,u,f){switch(s){case"focusin":return ks=Bu(ks,r,s,o,u,f),!0;case"dragenter":return Os=Bu(Os,r,s,o,u,f),!0;case"mouseover":return Ms=Bu(Ms,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Uu.set(m,Bu(Uu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,qu.set(m,Bu(qu.get(m)||null,r,s,o,u,f)),!0}return!1}function wE(r){var s=vi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,us(r.priority,function(){if(o.tag===13){var u=Qn();u=Pr(u);var f=Oo(o,u);f!==null&&Kn(f,o,u),Lm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function sf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Um(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);wi=u,o.target.dispatchEvent(u),wi=null}else return s=Vr(o),s!==null&&EE(s),r.blockedOn=o,!1;s.shift()}return!0}function SE(r,s,o){sf(r)&&o.delete(s)}function xR(){Bm=!1,ks!==null&&sf(ks)&&(ks=null),Os!==null&&sf(Os)&&(Os=null),Ms!==null&&sf(Ms)&&(Ms=null),Uu.forEach(SE),qu.forEach(SE)}function af(r,s){r.blockedOn===s&&(r.blockedOn=null,Bm||(Bm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,xR)))}var of=null;function xE(r){of!==r&&(of=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){of===r&&(of=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(qm(u||o)===null)continue;break}var m=Vr(o);m!==null&&(r.splice(s,3),s-=3,qp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function zu(r){function s(O){return af(O,r)}ks!==null&&af(ks,r),Os!==null&&af(Os,r),Ms!==null&&af(Ms,r),Uu.forEach(s),qu.forEach(s);for(var o=0;o<Ns.length;o++){var u=Ns[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Ns.length&&(o=Ns[0],o.blockedOn===null);)wE(o),o.blockedOn===null&&Ns.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],b=f[Mt]||null;if(typeof m=="function")b||xE(o);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Mt]||null)S=b.formAction;else if(qm(f)!==null)continue}else S=b.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),xE(o)}}}function zm(r){this._internalRoot=r}lf.prototype.render=zm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Qn();_E(o,u,r,s,null,null)},lf.prototype.unmount=zm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;_E(r.current,2,null,r,null,null),zh(),s[nr]=null}};function lf(r){this._internalRoot=r}lf.prototype.unstable_scheduleHydration=function(r){if(r){var s=tr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Ns.length&&s!==0&&s<Ns[o].priority;o++);Ns.splice(o,0,r),o===0&&wE(r)}};var AE=e.version;if(AE!=="19.1.0")throw Error(i(527,AE,"19.1.0"));ce.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var AR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:ee,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uf.isDisabled&&uf.supportsFiber)try{_t=uf.inject(AR),Xe=uf}catch{}}return $u.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=zv,m=Fv,b=$v,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=gE(r,1,!1,null,null,o,u,f,m,b,S,null),r[nr]=s.current,Sm(r),new zm(s)},$u.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=zv,b=Fv,S=$v,O=null,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(Q=o.formState)),s=gE(r,1,!0,s,o??null,u,f,m,b,S,O,Q),s.context=yE(null),o=s.current,u=Qn(),u=Pr(u),f=ys(u),f.callback=null,_s(o,f,u),o=u,s.current.lanes=o,We(s,o),Kr(s),r[nr]=s.current,Sm(r),new lf(s)},$u.version="19.1.0",$u}var VE;function LR(){if(VE)return Hm.exports;VE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Hm.exports=VR(),Hm.exports}var jR=LR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var LE="popstate";function UR(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return _g("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:uc(a)}return BR(e,n,null,t)}function bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ir(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qR(){return Math.random().toString(36).substring(2,10)}function jE(t,e){return{usr:t.state,key:t.key,idx:e}}function _g(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Cl(e):e,state:n,key:e&&e.key||i||qR()}}function uc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Cl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function BR(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let k=v(),P=k==null?null:k-g;g=k,p&&p({action:d,location:q.location,delta:P})}function w(k,P){d="PUSH";let j=_g(q.location,k,P);g=v()+1;let B=jE(j,g),te=q.createHref(j);try{c.pushState(B,"",te)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(te)}l&&p&&p({action:d,location:q.location,delta:1})}function C(k,P){d="REPLACE";let j=_g(q.location,k,P);g=v();let B=jE(j,g),te=q.createHref(j);c.replaceState(B,"",te),l&&p&&p({action:d,location:q.location,delta:0})}function D(k){return zR(k)}let q={get action(){return d},get location(){return t(a,c)},listen(k){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(LE,T),p=k,()=>{a.removeEventListener(LE,T),p=null}},createHref(k){return e(a,k)},createURL:D,encodeLocation(k){let P=D(k);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:C,go(k){return c.go(k)}};return q}function zR(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),bt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:uc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function iw(t,e,n="/"){return FR(t,e,n,!1)}function FR(t,e,n,i){let a=typeof e=="string"?Cl(e):e,l=Zi(a.pathname||"/",n);if(l==null)return null;let c=sw(t);$R(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=tC(l);d=JR(c[p],g,i)}return d}function sw(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(bt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=Wi([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(bt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),sw(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:XR(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of aw(l.path))a(l,c,p)}),e}function aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=aw(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function $R(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZR(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var HR=/^:[\w-]+$/,GR=3,YR=2,WR=1,QR=10,KR=-2,UE=t=>t==="*";function XR(t,e){let n=t.split("/"),i=n.length;return n.some(UE)&&(i+=KR),e&&(i+=YR),n.filter(a=>!UE(a)).reduce((a,l)=>a+(HR.test(l)?GR:l===""?WR:QR),i)}function ZR(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function JR(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),w=p.route;if(!T&&g&&n&&!i[i.length-1].route.index&&(T=qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:Wi([l,T.pathname]),pathnameBase:sC(Wi([l,T.pathnameBase])),route:w}),T.pathnameBase!=="/"&&(l=Wi([l,T.pathnameBase]))}return c}function qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=eC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:T},w)=>{if(v==="*"){let D=d[w]||"";c=l.slice(0,l.length-D.length).replace(/(.)\/+$/,"$1")}const C=d[w];return T&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function eC(t,e=!1,n=!0){Ir(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function tC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ir(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Zi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function nC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Cl(t):t;return{pathname:n?n.startsWith("/")?n:rC(n,e):e,search:aC(i),hash:oC(a)}}function rC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Qm(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function iy(t){let e=iC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function sy(t,e,n,i=!1){let a;typeof t=="string"?a=Cl(t):(a={...t},bt(!a.pathname||!a.pathname.includes("?"),Qm("?","pathname","search",a)),bt(!a.pathname||!a.pathname.includes("#"),Qm("#","pathname","hash",a)),bt(!a.search||!a.search.includes("#"),Qm("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let T=e.length-1;if(!i&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),T-=1;a.pathname=w.join("/")}d=T>=0?e[T]:"/"}let p=nC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var Wi=t=>t.join("/").replace(/\/\/+/g,"/"),sC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var ow=["POST","PUT","PATCH","DELETE"];new Set(ow);var uC=["GET",...ow];new Set(uC);var Il=F.createContext(null);Il.displayName="DataRouter";var cd=F.createContext(null);cd.displayName="DataRouterState";F.createContext(!1);var lw=F.createContext({isTransitioning:!1});lw.displayName="ViewTransition";var cC=F.createContext(new Map);cC.displayName="Fetchers";var hC=F.createContext(null);hC.displayName="Await";var Or=F.createContext(null);Or.displayName="Navigation";var xc=F.createContext(null);xc.displayName="Location";var ui=F.createContext({outlet:null,matches:[],isDataRoute:!1});ui.displayName="Route";var ay=F.createContext(null);ay.displayName="RouteError";function fC(t,{relative:e}={}){bt(Dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=F.useContext(Or),{hash:a,pathname:l,search:c}=Rc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:Wi([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Dl(){return F.useContext(xc)!=null}function ra(){return bt(Dl(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(xc).location}var uw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cw(t){F.useContext(Or).static||F.useLayoutEffect(t)}function Ac(){let{isDataRoute:t}=F.useContext(ui);return t?xC():dC()}function dC(){bt(Dl(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(Il),{basename:e,navigator:n}=F.useContext(Or),{matches:i}=F.useContext(ui),{pathname:a}=ra(),l=JSON.stringify(iy(i)),c=F.useRef(!1);return cw(()=>{c.current=!0}),F.useCallback((p,g={})=>{if(Ir(c.current,uw),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=sy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Wi([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}F.createContext(null);function Rc(t,{relative:e}={}){let{matches:n}=F.useContext(ui),{pathname:i}=ra(),a=JSON.stringify(iy(n));return F.useMemo(()=>sy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function pC(t,e){return hw(t,e)}function hw(t,e,n,i){var P;bt(Dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=F.useContext(Or),{matches:l}=F.useContext(ui),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let j=v&&v.path||"";fw(p,!v||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let T=ra(),w;if(e){let j=typeof e=="string"?Cl(e):e;bt(g==="/"||((P=j.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${j.pathname}" was given in the \`location\` prop.`),w=j}else w=T;let C=w.pathname||"/",D=C;if(g!=="/"){let j=g.replace(/^\//,"").split("/");D="/"+C.replace(/^\//,"").split("/").slice(j.length).join("/")}let q=iw(t,{pathname:D});Ir(v||q!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ir(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=vC(q&&q.map(j=>Object.assign({},j,{params:Object.assign({},d,j.params),pathname:Wi([g,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:Wi([g,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,i);return e&&k?F.createElement(xc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},k):k}function mC(){let t=SC(),e=lC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:l},"ErrorBoundary")," or"," ",F.createElement("code",{style:l},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:a},n):null,c)}var gC=F.createElement(mC,null),yC=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(ui.Provider,{value:this.props.routeContext},F.createElement(ay.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _C({routeContext:t,match:e,children:n}){let i=F.useContext(Il);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(ui.Provider,{value:t},n)}function vC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);bt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:T}=n,w=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let T,w=!1,C=null,D=null;n&&(T=l&&g.route.id?l[g.route.id]:void 0,C=g.route.errorElement||gC,c&&(d<0&&v===0?(fw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,D=null):d===v&&(w=!0,D=g.route.hydrateFallbackElement||null)));let q=e.concat(a.slice(0,v+1)),k=()=>{let P;return T?P=C:w?P=D:g.route.Component?P=F.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=p,F.createElement(_C,{match:g,routeContext:{outlet:p,matches:q,isDataRoute:n!=null},children:P})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?F.createElement(yC,{location:n.location,revalidation:n.revalidation,component:C,error:T,children:k(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):k()},null)}function oy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EC(t){let e=F.useContext(Il);return bt(e,oy(t)),e}function bC(t){let e=F.useContext(cd);return bt(e,oy(t)),e}function TC(t){let e=F.useContext(ui);return bt(e,oy(t)),e}function ly(t){let e=TC(t),n=e.matches[e.matches.length-1];return bt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function wC(){return ly("useRouteId")}function SC(){var i;let t=F.useContext(ay),e=bC("useRouteError"),n=ly("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function xC(){let{router:t}=EC("useNavigate"),e=ly("useNavigate"),n=F.useRef(!1);return cw(()=>{n.current=!0}),F.useCallback(async(a,l={})=>{Ir(n.current,uw),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var qE={};function fw(t,e,n){!e&&!qE[t]&&(qE[t]=!0,Ir(!1,n))}F.memo(AC);function AC({routes:t,future:e,state:n}){return hw(t,void 0,n,e)}function RC({to:t,replace:e,state:n,relative:i}){bt(Dl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=F.useContext(Or);Ir(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=F.useContext(ui),{pathname:c}=ra(),d=Ac(),p=sy(t,iy(l),c,i==="path"),g=JSON.stringify(p);return F.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function Tf(t){bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){bt(!Dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=F.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Cl(n));let{pathname:p="/",search:g="",hash:v="",state:T=null,key:w="default"}=n,C=F.useMemo(()=>{let D=Zi(p,c);return D==null?null:{location:{pathname:D,search:g,hash:v,state:T,key:w},navigationType:i}},[c,p,g,v,T,w,i]);return Ir(C!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:F.createElement(Or.Provider,{value:d},F.createElement(xc.Provider,{children:e,value:C}))}function IC({children:t,location:e}){return pC(vg(t),e)}function vg(t,e=[]){let n=[];return F.Children.forEach(t,(i,a)=>{if(!F.isValidElement(i))return;let l=[...e,a];if(i.type===F.Fragment){n.push.apply(n,vg(i.props.children,l));return}bt(i.type===Tf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),bt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=vg(i.props.children,l)),n.push(c)}),n}var wf="get",Sf="application/x-www-form-urlencoded";function hd(t){return t!=null&&typeof t.tagName=="string"}function DC(t){return hd(t)&&t.tagName.toLowerCase()==="button"}function kC(t){return hd(t)&&t.tagName.toLowerCase()==="form"}function OC(t){return hd(t)&&t.tagName.toLowerCase()==="input"}function MC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function NC(t,e){return t.button===0&&(!e||e==="_self")&&!MC(t)}var cf=null;function PC(){if(cf===null)try{new FormData(document.createElement("form"),0),cf=!1}catch{cf=!0}return cf}var VC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Km(t){return t!=null&&!VC.has(t)?(Ir(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sf}"`),null):t}function LC(t,e){let n,i,a,l,c;if(kC(t)){let d=t.getAttribute("action");i=d?Zi(d,e):null,n=t.getAttribute("method")||wf,a=Km(t.getAttribute("enctype"))||Sf,l=new FormData(t)}else if(DC(t)||OC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?Zi(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||wf,a=Km(t.getAttribute("formenctype"))||Km(d.getAttribute("enctype"))||Sf,l=new FormData(d,t),!PC()){let{name:g,type:v,value:T}=t;if(v==="image"){let w=g?`${g}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else g&&l.append(g,T)}}else{if(hd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wf,i=null,a=Sf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jC(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Zi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function UC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function BC(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await UC(l,n);return c.links?c.links():[]}return[]}));return HC(i.flat(1).filter(qC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function BE(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=n[0])==null?void 0:T.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function zC(t,e,{includeHydrateFallback:n}={}){return FC(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function FC(t){return[...new Set(t)]}function $C(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function HC(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify($C(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function dw(){let t=F.useContext(Il);return uy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function GC(){let t=F.useContext(cd);return uy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var cy=F.createContext(void 0);cy.displayName="FrameworkContext";function pw(){let t=F.useContext(cy);return uy(t,"You must render this element inside a <HydratedRouter> element"),t}function YC(t,e){let n=F.useContext(cy),[i,a]=F.useState(!1),[l,c]=F.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:T}=e,w=F.useRef(null);F.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let q=P=>{P.forEach(j=>{c(j.isIntersecting)})},k=new IntersectionObserver(q,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[t]),F.useEffect(()=>{if(i){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[i]);let C=()=>{a(!0)},D=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,w,{}]:[l,w,{onFocus:Hu(d,C),onBlur:Hu(p,D),onMouseEnter:Hu(g,C),onMouseLeave:Hu(v,D),onTouchStart:Hu(T,C)}]:[!1,w,{}]}function Hu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function WC({page:t,...e}){let{router:n}=dw(),i=F.useMemo(()=>iw(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?F.createElement(KC,{page:t,matches:i,...e}):null}function QC(t){let{manifest:e,routeModules:n}=pw(),[i,a]=F.useState([]);return F.useEffect(()=>{let l=!1;return BC(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function KC({page:t,matches:e,...n}){let i=ra(),{manifest:a,routeModules:l}=pw(),{basename:c}=dw(),{loaderData:d,matches:p}=GC(),g=F.useMemo(()=>BE(t,e,p,a,i,"data"),[t,e,p,a,i]),v=F.useMemo(()=>BE(t,e,p,a,i,"assets"),[t,e,p,a,i]),T=F.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let D=new Set,q=!1;if(e.forEach(P=>{var B;let j=a.routes[P.route.id];!j||!j.hasLoader||(!g.some(te=>te.route.id===P.route.id)&&P.route.id in d&&((B=l[P.route.id])!=null&&B.shouldRevalidate)||j.hasClientLoader?q=!0:D.add(P.route.id))}),D.size===0)return[];let k=jC(t,c,"data");return q&&D.size>0&&k.searchParams.set("_routes",e.filter(P=>D.has(P.route.id)).map(P=>P.route.id).join(",")),[k.pathname+k.search]},[c,d,i,a,g,e,t,l]),w=F.useMemo(()=>zC(v,a),[v,a]),C=QC(v);return F.createElement(F.Fragment,null,T.map(D=>F.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...n})),w.map(D=>F.createElement("link",{key:D,rel:"modulepreload",href:D,...n})),C.map(({key:D,link:q})=>F.createElement("link",{key:D,...q})))}function XC(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var mw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mw&&(window.__reactRouterVersion="7.7.0")}catch{}function ZC({basename:t,children:e,window:n}){let i=F.useRef();i.current==null&&(i.current=UR({window:n,v5Compat:!0}));let a=i.current,[l,c]=F.useState({action:a.action,location:a.location}),d=F.useCallback(p=>{F.startTransition(()=>c(p))},[c]);return F.useLayoutEffect(()=>a.listen(d),[a,d]),F.createElement(CC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var gw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yw=F.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:T,...w},C){let{basename:D}=F.useContext(Or),q=typeof g=="string"&&gw.test(g),k,P=!1;if(typeof g=="string"&&q&&(k=g,mw))try{let I=new URL(window.location.href),V=g.startsWith("//")?new URL(I.protocol+g):new URL(g),U=Zi(V.pathname,D);V.origin===I.origin&&U!=null?g=U+V.search+V.hash:P=!0}catch{Ir(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=fC(g,{relative:a}),[B,te,M]=YC(i,w),J=nI(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:T});function A(I){e&&e(I),I.defaultPrevented||J(I)}let R=F.createElement("a",{...w,...M,href:k||j,onClick:P||l?e:A,ref:XC(C,te),target:p,"data-discover":!q&&n==="render"?"true":void 0});return B&&!q?F.createElement(F.Fragment,null,R,F.createElement(WC,{page:j})):R});yw.displayName="Link";var JC=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let T=Rc(c,{relative:g.relative}),w=ra(),C=F.useContext(cd),{navigator:D,basename:q}=F.useContext(Or),k=C!=null&&oI(T)&&d===!0,P=D.encodeLocation?D.encodeLocation(T).pathname:T.pathname,j=w.pathname,B=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(j=j.toLowerCase(),B=B?B.toLowerCase():null,P=P.toLowerCase()),B&&q&&(B=Zi(B,q)||B);const te=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let M=j===P||!a&&j.startsWith(P)&&j.charAt(te)==="/",J=B!=null&&(B===P||!a&&B.startsWith(P)&&B.charAt(P.length)==="/"),A={isActive:M,isPending:J,isTransitioning:k},R=M?e:void 0,I;typeof i=="function"?I=i(A):I=[i,M?"active":null,J?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let V=typeof l=="function"?l(A):l;return F.createElement(yw,{...g,"aria-current":R,className:I,ref:v,style:V,to:c,viewTransition:d},typeof p=="function"?p(A):p)});JC.displayName="NavLink";var eI=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=wf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:T,...w},C)=>{let D=sI(),q=aI(d,{relative:g}),k=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&gw.test(d),j=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let te=B.nativeEvent.submitter,M=(te==null?void 0:te.getAttribute("formmethod"))||c;D(te||B.currentTarget,{fetcherKey:e,method:M,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:T})};return F.createElement("form",{ref:C,method:k,action:q,onSubmit:i?p:j,...w,"data-discover":!P&&t==="render"?"true":void 0})});eI.displayName="Form";function tI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _w(t){let e=F.useContext(Il);return bt(e,tI(t)),e}function nI(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Ac(),p=ra(),g=Rc(t,{relative:l});return F.useCallback(v=>{if(NC(v,e)){v.preventDefault();let T=n!==void 0?n:uc(p)===uc(g);d(t,{replace:T,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var rI=0,iI=()=>`__${String(++rI)}__`;function sI(){let{router:t}=_w("useSubmit"),{basename:e}=F.useContext(Or),n=wC();return F.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=LC(i,e);if(a.navigate===!1){let v=a.fetcherKey||iI();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function aI(t,{relative:e}={}){let{basename:n}=F.useContext(Or),i=F.useContext(ui);bt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Rc(t||".",{relative:e})},c=ra();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Wi([n,l.pathname])),uc(l)}function oI(t,e={}){let n=F.useContext(lw);bt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=_w("useViewTransitionState"),a=Rc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Zi(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=Zi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return qf(a.pathname,c)!=null||qf(a.pathname,l)!=null}var un=function(){return un=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},un.apply(this,arguments)};function cc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var yt="-ms-",nc="-moz-",tt="-webkit-",vw="comm",fd="rule",hy="decl",lI="@import",Ew="@keyframes",uI="@layer",bw=Math.abs,fy=String.fromCharCode,Eg=Object.assign;function cI(t,e){return ln(t,0)^45?(((e<<2^ln(t,0))<<2^ln(t,1))<<2^ln(t,2))<<2^ln(t,3):0}function Tw(t){return t.trim()}function Fi(t,e){return(t=e.exec(t))?t[0]:t}function Pe(t,e,n){return t.replace(e,n)}function xf(t,e,n){return t.indexOf(e,n)}function ln(t,e){return t.charCodeAt(e)|0}function ml(t,e,n){return t.slice(e,n)}function ei(t){return t.length}function ww(t){return t.length}function Wu(t,e){return e.push(t),t}function hI(t,e){return t.map(e).join("")}function zE(t,e){return t.filter(function(n){return!Fi(n,e)})}var dd=1,gl=1,Sw=0,yr=0,jt=0,kl="";function pd(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:dd,column:gl,length:c,return:"",siblings:d}}function js(t,e){return Eg(pd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function rl(t){for(;t.root;)t=js(t.root,{children:[t]});Wu(t,t.siblings)}function fI(){return jt}function dI(){return jt=yr>0?ln(kl,--yr):0,gl--,jt===10&&(gl=1,dd--),jt}function Ar(){return jt=yr<Sw?ln(kl,yr++):0,gl++,jt===10&&(gl=1,dd++),jt}function Ga(){return ln(kl,yr)}function Af(){return yr}function md(t,e){return ml(kl,t,e)}function bg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pI(t){return dd=gl=1,Sw=ei(kl=t),yr=0,[]}function mI(t){return kl="",t}function Xm(t){return Tw(md(yr-1,Tg(t===91?t+2:t===40?t+1:t)))}function gI(t){for(;(jt=Ga())&&jt<33;)Ar();return bg(t)>2||bg(jt)>3?"":" "}function yI(t,e){for(;--e&&Ar()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return md(t,Af()+(e<6&&Ga()==32&&Ar()==32))}function Tg(t){for(;Ar();)switch(jt){case t:return yr;case 34:case 39:t!==34&&t!==39&&Tg(jt);break;case 40:t===41&&Tg(t);break;case 92:Ar();break}return yr}function _I(t,e){for(;Ar()&&t+jt!==57;)if(t+jt===84&&Ga()===47)break;return"/*"+md(e,yr-1)+"*"+fy(t===47?t:Ar())}function vI(t){for(;!bg(Ga());)Ar();return md(t,yr)}function EI(t){return mI(Rf("",null,null,null,[""],t=pI(t),0,[0],t))}function Rf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,T=c,w=0,C=0,D=0,q=1,k=1,P=1,j=0,B="",te=a,M=l,J=i,A=B;k;)switch(D=j,j=Ar()){case 40:if(D!=108&&ln(A,T-1)==58){xf(A+=Pe(Xm(j),"&","&\f"),"&\f",bw(g?d[g-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:A+=Xm(j);break;case 9:case 10:case 13:case 32:A+=gI(D);break;case 92:A+=yI(Af()-1,7);continue;case 47:switch(Ga()){case 42:case 47:Wu(bI(_I(Ar(),Af()),e,n,p),p);break;default:A+="/"}break;case 123*q:d[g++]=ei(A)*P;case 125*q:case 59:case 0:switch(j){case 0:case 125:k=0;case 59+v:P==-1&&(A=Pe(A,/\f/g,"")),C>0&&ei(A)-T&&Wu(C>32?$E(A+";",i,n,T-1,p):$E(Pe(A," ","")+";",i,n,T-2,p),p);break;case 59:A+=";";default:if(Wu(J=FE(A,e,n,g,v,a,d,B,te=[],M=[],T,l),l),j===123)if(v===0)Rf(A,e,J,J,te,l,T,d,M);else switch(w===99&&ln(A,3)===110?100:w){case 100:case 108:case 109:case 115:Rf(t,J,J,i&&Wu(FE(t,J,J,0,0,a,d,B,a,te=[],T,M),M),a,M,T,d,i?te:M);break;default:Rf(A,J,J,J,[""],M,0,d,M)}}g=v=C=0,q=P=1,B=A="",T=c;break;case 58:T=1+ei(A),C=D;default:if(q<1){if(j==123)--q;else if(j==125&&q++==0&&dI()==125)continue}switch(A+=fy(j),j*q){case 38:P=v>0?1:(A+="\f",-1);break;case 44:d[g++]=(ei(A)-1)*P,P=1;break;case 64:Ga()===45&&(A+=Xm(Ar())),w=Ga(),v=T=ei(B=A+=vI(Af())),j++;break;case 45:D===45&&ei(A)==2&&(q=0)}}return l}function FE(t,e,n,i,a,l,c,d,p,g,v,T){for(var w=a-1,C=a===0?l:[""],D=ww(C),q=0,k=0,P=0;q<i;++q)for(var j=0,B=ml(t,w+1,w=bw(k=c[q])),te=t;j<D;++j)(te=Tw(k>0?C[j]+" "+B:Pe(B,/&\f/g,C[j])))&&(p[P++]=te);return pd(t,e,n,a===0?fd:d,p,g,v,T)}function bI(t,e,n,i){return pd(t,e,n,vw,fy(fI()),ml(t,2,-2),0,i)}function $E(t,e,n,i,a){return pd(t,e,n,hy,ml(t,0,i),ml(t,i+1,-1),i,a)}function xw(t,e,n){switch(cI(t,e)){case 5103:return tt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+t+t;case 4789:return nc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+t+nc+t+yt+t+t;case 5936:switch(ln(t,e+11)){case 114:return tt+t+yt+Pe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tt+t+yt+Pe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tt+t+yt+Pe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tt+t+yt+t+t;case 6165:return tt+t+yt+"flex-"+t+t;case 5187:return tt+t+Pe(t,/(\w+).+(:[^]+)/,tt+"box-$1$2"+yt+"flex-$1$2")+t;case 5443:return tt+t+yt+"flex-item-"+Pe(t,/flex-|-self/g,"")+(Fi(t,/flex-|baseline/)?"":yt+"grid-row-"+Pe(t,/flex-|-self/g,""))+t;case 4675:return tt+t+yt+"flex-line-pack"+Pe(t,/align-content|flex-|-self/g,"")+t;case 5548:return tt+t+yt+Pe(t,"shrink","negative")+t;case 5292:return tt+t+yt+Pe(t,"basis","preferred-size")+t;case 6060:return tt+"box-"+Pe(t,"-grow","")+tt+t+yt+Pe(t,"grow","positive")+t;case 4554:return tt+Pe(t,/([^-])(transform)/g,"$1"+tt+"$2")+t;case 6187:return Pe(Pe(Pe(t,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),t,"")+t;case 5495:case 3959:return Pe(t,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Pe(Pe(t,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+t+t;case 4200:if(!Fi(t,/flex-|baseline/))return yt+"grid-column-align"+ml(t,e)+t;break;case 2592:case 3360:return yt+Pe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,Fi(i.props,/grid-\w+-end/)})?~xf(t+(n=n[e].value),"span",0)?t:yt+Pe(t,"-start","")+t+yt+"grid-row-span:"+(~xf(n,"span",0)?Fi(n,/\d+/):+Fi(n,/\d+/)-+Fi(t,/\d+/))+";":yt+Pe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Fi(i.props,/grid-\w+-start/)})?t:yt+Pe(Pe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Pe(t,/(.+)-inline(.+)/,tt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ei(t)-1-e>6)switch(ln(t,e+1)){case 109:if(ln(t,e+4)!==45)break;case 102:return Pe(t,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+nc+(ln(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~xf(t,"stretch",0)?xw(Pe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Pe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return yt+a+":"+l+g+(c?yt+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(ln(t,e+6)===121)return Pe(t,":",":"+tt)+t;break;case 6444:switch(ln(t,ln(t,14)===45?18:11)){case 120:return Pe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(ln(t,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+yt+"$2box$3")+t;case 100:return Pe(t,":",":"+yt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Pe(t,"scroll-","scroll-snap-")+t}return t}function Bf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function TI(t,e,n,i){switch(t.type){case uI:if(t.children.length)break;case lI:case hy:return t.return=t.return||t.value;case vw:return"";case Ew:return t.return=t.value+"{"+Bf(t.children,i)+"}";case fd:if(!ei(t.value=t.props.join(",")))return""}return ei(n=Bf(t.children,i))?t.return=t.value+"{"+n+"}":""}function wI(t){var e=ww(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function SI(t){return function(e){e.root||(e=e.return)&&t(e)}}function xI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case hy:t.return=xw(t.value,t.length,n);return;case Ew:return Bf([js(t,{value:Pe(t.value,"@","@"+tt)})],i);case fd:if(t.length)return hI(n=t.props,function(a){switch(Fi(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rl(js(t,{props:[Pe(a,/:(read-\w+)/,":"+nc+"$1")]})),rl(js(t,{props:[a]})),Eg(t,{props:zE(n,i)});break;case"::placeholder":rl(js(t,{props:[Pe(a,/:(plac\w+)/,":"+tt+"input-$1")]})),rl(js(t,{props:[Pe(a,/:(plac\w+)/,":"+nc+"$1")]})),rl(js(t,{props:[Pe(a,/:(plac\w+)/,yt+"input-$1")]})),rl(js(t,{props:[a]})),Eg(t,{props:zE(n,i)});break}return""})}}var AI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xn={},yl=typeof process<"u"&&Xn!==void 0&&(Xn.REACT_APP_SC_ATTR||Xn.SC_ATTR)||"data-styled",Aw="active",Rw="data-styled-version",gd="6.1.19",dy=`/*!sc*/
`,zf=typeof window<"u"&&typeof document<"u",RI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xn!==void 0&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==""?Xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xn!==void 0&&Xn.SC_DISABLE_SPEEDY!==void 0&&Xn.SC_DISABLE_SPEEDY!==""&&Xn.SC_DISABLE_SPEEDY!=="false"&&Xn.SC_DISABLE_SPEEDY),CI={},yd=Object.freeze([]),_l=Object.freeze({});function Cw(t,e,n){return n===void 0&&(n=_l),t.theme!==n.theme&&t.theme||e||n.theme}var Iw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),II=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DI=/(^-|-$)/g;function HE(t){return t.replace(II,"-").replace(DI,"")}var kI=/(a)(d)/gi,hf=52,GE=function(t){return String.fromCharCode(t+(t>25?39:97))};function wg(t){var e,n="";for(e=Math.abs(t);e>hf;e=e/hf|0)n=GE(e%hf)+n;return(GE(e%hf)+n).replace(kI,"$1-$2")}var Zm,Dw=5381,ul=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},kw=function(t){return ul(Dw,t)};function Ow(t){return wg(kw(t)>>>0)}function OI(t){return t.displayName||t.name||"Component"}function Jm(t){return typeof t=="string"&&!0}var Mw=typeof Symbol=="function"&&Symbol.for,Nw=Mw?Symbol.for("react.memo"):60115,MI=Mw?Symbol.for("react.forward_ref"):60112,NI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VI=((Zm={})[MI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zm[Nw]=Pw,Zm);function YE(t){return("type"in(e=t)&&e.type.$$typeof)===Nw?Pw:"$$typeof"in t?VI[t.$$typeof]:NI;var e}var LI=Object.defineProperty,jI=Object.getOwnPropertyNames,WE=Object.getOwnPropertySymbols,UI=Object.getOwnPropertyDescriptor,qI=Object.getPrototypeOf,QE=Object.prototype;function Vw(t,e,n){if(typeof e!="string"){if(QE){var i=qI(e);i&&i!==QE&&Vw(t,i,n)}var a=jI(e);WE&&(a=a.concat(WE(e)));for(var l=YE(t),c=YE(e),d=0;d<a.length;++d){var p=a[d];if(!(p in PI||n&&n[p]||c&&p in c||l&&p in l)){var g=UI(e,p);try{LI(t,p,g)}catch{}}}}return t}function Ka(t){return typeof t=="function"}function py(t){return typeof t=="object"&&"styledComponentId"in t}function Fa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Sg(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function hc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function xg(t,e,n){if(n===void 0&&(n=!1),!n&&!hc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=xg(t[i],e[i]);else if(hc(e))for(var i in e)t[i]=xg(t[i],e[i]);return t}function my(t,e){Object.defineProperty(t,"toString",{value:e})}function Xa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var BI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw Xa(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(dy);return n},t}(),Cf=new Map,Ff=new Map,If=1,ff=function(t){if(Cf.has(t))return Cf.get(t);for(;Ff.has(If);)If++;var e=If++;return Cf.set(t,e),Ff.set(e,t),e},zI=function(t,e){If=e+1,Cf.set(t,e),Ff.set(e,t)},FI="style[".concat(yl,"][").concat(Rw,'="').concat(gd,'"]'),$I=new RegExp("^".concat(yl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HI=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},GI=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(dy),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match($I);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(zI(v,g),HI(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},KE=function(t){for(var e=document.querySelectorAll(FI),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(yl)!==Aw&&(GI(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function YI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Lw=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(yl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(yl,Aw),i.setAttribute(Rw,gd);var c=YI();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},WI=function(){function t(e){this.element=Lw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw Xa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),QI=function(){function t(e){this.element=Lw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),KI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),XE=zf,XI={isServer:!zf,useCSSOMInjection:!RI},$f=function(){function t(e,n,i){e===void 0&&(e=_l),n===void 0&&(n={});var a=this;this.options=un(un({},XI),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&zf&&XE&&(XE=!1,KE(this)),my(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(T){var w=function(P){return Ff.get(P)}(T);if(w===void 0)return"continue";var C=l.names.get(w),D=c.getGroup(T);if(C===void 0||!C.size||D.length===0)return"continue";var q="".concat(yl,".g").concat(T,'[id="').concat(w,'"]'),k="";C!==void 0&&C.forEach(function(P){P.length>0&&(k+="".concat(P,","))}),p+="".concat(D).concat(q,'{content:"').concat(k,'"}').concat(dy)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return ff(e)},t.prototype.rehydrate=function(){!this.server&&zf&&KE(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(un(un({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new KI(a):i?new WI(a):new QI(a)}(this.options),new BI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ff(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(ff(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ff(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ZI=/&/g,JI=/^\s*\/\/.*$/gm;function jw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jw(n.children,e)),n})}function eD(t){var e,n,i,a=_l,l=a.options,c=l===void 0?_l:l,d=a.plugins,p=d===void 0?yd:d,g=function(w,C,D){return D.startsWith(n)&&D.endsWith(n)&&D.replaceAll(n,"").length>0?".".concat(e):w},v=p.slice();v.push(function(w){w.type===fd&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(ZI,n).replace(i,g))}),c.prefix&&v.push(xI),v.push(TI);var T=function(w,C,D,q){C===void 0&&(C=""),D===void 0&&(D=""),q===void 0&&(q="&"),e=q,n=C,i=new RegExp("\\".concat(n,"\\b"),"g");var k=w.replace(JI,""),P=EI(D||C?"".concat(D," ").concat(C," { ").concat(k," }"):k);c.namespace&&(P=jw(P,c.namespace));var j=[];return Bf(P,wI(v.concat(SI(function(B){return j.push(B)})))),j};return T.hash=p.length?p.reduce(function(w,C){return C.name||Xa(15),ul(w,C.name)},Dw).toString():"",T}var tD=new $f,Ag=eD(),Uw=fe.createContext({shouldForwardProp:void 0,styleSheet:tD,stylis:Ag});Uw.Consumer;fe.createContext(void 0);function Rg(){return F.useContext(Uw)}var nD=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Ag);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,my(this,function(){throw Xa(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ag),this.name+e.hash},t}(),rD=function(t){return t>="A"&&t<="Z"};function ZE(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;rD(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var qw=function(t){return t==null||t===!1||t===""},Bw=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!qw(l)&&(Array.isArray(l)&&l.isCss||Ka(l)?i.push("".concat(ZE(a),":"),l,";"):hc(l)?i.push.apply(i,cc(cc(["".concat(a," {")],Bw(l),!1),["}"],!1)):i.push("".concat(ZE(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in AI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function $s(t,e,n,i){if(qw(t))return[];if(py(t))return[".".concat(t.styledComponentId)];if(Ka(t)){if(!Ka(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return $s(a,e,n,i)}var l;return t instanceof nD?n?(t.inject(n,i),[t.getName(i)]):[t]:hc(t)?Bw(t):Array.isArray(t)?Array.prototype.concat.apply(yd,t.map(function(c){return $s(c,e,n,i)})):[t.toString()]}function zw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ka(n)&&!py(n))return!1}return!0}var iD=kw(gd),sD=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&zw(e),this.componentId=n,this.baseHash=ul(iD,n),this.baseStyle=i,$f.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Fa(a,this.staticRulesId);else{var l=Sg($s(this.rules,e,n,i)),c=wg(ul(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Fa(a,c),this.staticRulesId=c}else{for(var p=ul(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var T=this.rules[v];if(typeof T=="string")g+=T;else if(T){var w=Sg($s(T,e,n,i));p=ul(p,w+v),g+=w}}if(g){var C=wg(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,i(g,".".concat(C),void 0,this.componentId)),a=Fa(a,C)}}return a},t}(),fc=fe.createContext(void 0);fc.Consumer;function aD(t){var e=fe.useContext(fc),n=F.useMemo(function(){return function(i,a){if(!i)throw Xa(14);if(Ka(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw Xa(8);return a?un(un({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?fe.createElement(fc.Provider,{value:n},t.children):null}var eg={};function oD(t,e,n){var i=py(t),a=t,l=!Jm(t),c=e.attrs,d=c===void 0?yd:c,p=e.componentId,g=p===void 0?function(te,M){var J=typeof te!="string"?"sc":HE(te);eg[J]=(eg[J]||0)+1;var A="".concat(J,"-").concat(Ow(gd+J+eg[J]));return M?"".concat(M,"-").concat(A):A}(e.displayName,e.parentComponentId):p,v=e.displayName,T=v===void 0?function(te){return Jm(te)?"styled.".concat(te):"Styled(".concat(OI(te),")")}(t):v,w=e.displayName&&e.componentId?"".concat(HE(e.displayName),"-").concat(e.componentId):e.componentId||g,C=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,D=e.shouldForwardProp;if(i&&a.shouldForwardProp){var q=a.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;D=function(te,M){return q(te,M)&&k(te,M)}}else D=q}var P=new sD(n,w,i?a.componentStyle:void 0);function j(te,M){return function(J,A,R){var I=J.attrs,V=J.componentStyle,U=J.defaultProps,$=J.foldedComponentIds,N=J.styledComponentId,dt=J.target,Ke=fe.useContext(fc),ee=Rg(),ce=J.shouldForwardProp||ee.shouldForwardProp,pe=Cw(A,Ke,U)||_l,Te=function(Ie,_e,gt){for(var Fe,Tt=un(un({},_e),{className:void 0,theme:gt}),Pn=0;Pn<Ie.length;Pn+=1){var vn=Ka(Fe=Ie[Pn])?Fe(Tt):Fe;for(var Kt in vn)Tt[Kt]=Kt==="className"?Fa(Tt[Kt],vn[Kt]):Kt==="style"?un(un({},Tt[Kt]),vn[Kt]):vn[Kt]}return _e.className&&(Tt.className=Fa(Tt.className,_e.className)),Tt}(I,A,pe),L=Te.as||dt,se={};for(var ue in Te)Te[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&Te.theme===pe||(ue==="forwardedAs"?se.as=Te.forwardedAs:ce&&!ce(ue,L)||(se[ue]=Te[ue]));var le=function(Ie,_e){var gt=Rg(),Fe=Ie.generateAndInjectStyles(_e,gt.styleSheet,gt.stylis);return Fe}(V,Te),ye=Fa($,N);return le&&(ye+=" "+le),Te.className&&(ye+=" "+Te.className),se[Jm(L)&&!Iw.has(L)?"class":"className"]=ye,R&&(se.ref=R),F.createElement(L,se)}(B,te,M)}j.displayName=T;var B=fe.forwardRef(j);return B.attrs=C,B.componentStyle=P,B.displayName=T,B.shouldForwardProp=D,B.foldedComponentIds=i?Fa(a.foldedComponentIds,a.styledComponentId):"",B.styledComponentId=w,B.target=i?a.target:t,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function(M){for(var J=[],A=1;A<arguments.length;A++)J[A-1]=arguments[A];for(var R=0,I=J;R<I.length;R++)xg(M,I[R],!0);return M}({},a.defaultProps,te):te}}),my(B,function(){return".".concat(B.styledComponentId)}),l&&Vw(B,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function JE(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var eb=function(t){return Object.assign(t,{isCss:!0})};function Fw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ka(t)||hc(t))return eb($s(JE(yd,cc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?$s(i):eb($s(JE(i,e)))}function Cg(t,e,n){if(n===void 0&&(n=_l),!e)throw Xa(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,Fw.apply(void 0,cc([a],l,!1)))};return i.attrs=function(a){return Cg(t,e,un(un({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Cg(t,e,un(un({},n),a))},i}var $w=function(t){return Cg(oD,t)},G=$w;Iw.forEach(function(t){G[t]=$w(t)});var lD=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=zw(e),$f.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Sg($s(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&$f.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function Hw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Fw.apply(void 0,cc([t],e,!1)),a="sc-global-".concat(Ow(JSON.stringify(i))),l=new lD(i,a),c=function(p){var g=Rg(),v=fe.useContext(fc),T=fe.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(T,p,g.styleSheet,v,g.stylis),fe.useLayoutEffect(function(){if(!g.styleSheet.server)return d(T,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(T,g.styleSheet)}},[T,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,T,w){if(l.isStatic)l.renderStyles(p,CI,v,w);else{var C=un(un({},g),{theme:Cw(g,T,c.defaultProps)});l.renderStyles(p,C,v,w)}}return fe.memo(c)}/**
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
 */const uD=()=>{};var tb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},cD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Yw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,C=g&63;p||(C=64,c||(w=64)),i.push(n[v],n[T],n[w],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const T=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new hD;const w=l<<2|d>>4;if(i.push(w),g!==64){const C=d<<4&240|g>>2;if(i.push(C),T!==64){const D=g<<6&192|T;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fD=function(t){const e=Gw(t);return Yw.encodeByteArray(e,!0)},Hf=function(t){return fD(t).replace(/\./g,"")},Ww=function(t){try{return Yw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pD=()=>dD().__FIREBASE_DEFAULTS__,mD=()=>{if(typeof process>"u"||typeof tb>"u")return;const t=tb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ww(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return uD()||pD()||mD()||gD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>{var e,n;return(n=(e=_d())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},yD=t=>{const e=Qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Kw=()=>{var t;return(t=_d())==null?void 0:t.config},Xw=t=>{var e;return(e=_d())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ol(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hf(JSON.stringify(n)),Hf(JSON.stringify(c)),""].join(".")}const rc={};function ED(){const t={prod:[],emulator:[]};for(const e of Object.keys(rc))rc[e]?t.emulator.push(e):t.prod.push(e);return t}function bD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let nb=!1;function Jw(t,e){if(typeof window>"u"||typeof document>"u"||!Ol(window.location.host)||rc[t]===e||rc[t]||nb)return;rc[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",l=ED().prod.length>0;function c(){const w=document.getElementById(i);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{nb=!0,c()},w}function v(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=bD(i),C=n("text"),D=document.getElementById(C)||document.createElement("span"),q=n("learnmore"),k=document.getElementById(q)||document.createElement("a"),P=n("preprendIcon"),j=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const B=w.element;d(B),v(k,q);const te=g();p(j,P),B.append(j,D,k,te),document.body.appendChild(B)}l?(D.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function wD(){var e;const t=(e=_d())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RD(){const t=In();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CD(){return!wD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ID(){try{return typeof indexedDB=="object"}catch{return!1}}function DD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="FirebaseError";class rs extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=kD,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cc.prototype.create)}}class Cc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?OD(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new rs(a,d,i)}}function OD(t,e){return t.replace(MD,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const MD=/\{\$([^}]+)}/g;function ND(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(rb(l)&&rb(c)){if(!Za(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function rb(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Qu(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Ku(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PD(t,e){const n=new VD(t,e);return n.subscribe.bind(n)}class VD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");LD(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=tg),a.error===void 0&&(a.error=tg),a.complete===void 0&&(a.complete=tg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tg(){}/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Ja{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ba="[DEFAULT]";/**
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
 */class jD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _D;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qD(e))try{this.getOrInitializeService({instanceIdentifier:Ba})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Ba){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ba){return this.instances.has(e)}getOptions(e=Ba){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:UD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ba){return this.component?this.component.multipleInstances?e:Ba:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UD(t){return t===Ba?void 0:t}function qD(t){return t.instantiationMode==="EAGER"}/**
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
 */class BD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(qe||(qe={}));const zD={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},FD=qe.INFO,$D={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},HD=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=$D[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gy{constructor(e){this.name=e,this._logLevel=FD,this._logHandler=HD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const GD=(t,e)=>e.some(n=>t instanceof n);let ib,sb;function YD(){return ib||(ib=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WD(){return sb||(sb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e1=new WeakMap,Ig=new WeakMap,t1=new WeakMap,ng=new WeakMap,yy=new WeakMap;function QD(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Hs(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&e1.set(n,t)}).catch(()=>{}),yy.set(e,t),e}function KD(t){if(Ig.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Ig.set(t,e)}let Dg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ig.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XD(t){Dg=t(Dg)}function ZD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(rg(this),e,...n);return t1.set(i,e.sort?e.sort():[e]),Hs(i)}:WD().includes(t)?function(...e){return t.apply(rg(this),e),Hs(e1.get(this))}:function(...e){return Hs(t.apply(rg(this),e))}}function JD(t){return typeof t=="function"?ZD(t):(t instanceof IDBTransaction&&KD(t),GD(t,YD())?new Proxy(t,Dg):t)}function Hs(t){if(t instanceof IDBRequest)return QD(t);if(ng.has(t))return ng.get(t);const e=JD(t);return e!==t&&(ng.set(t,e),yy.set(e,t)),e}const rg=t=>yy.get(t);function ek(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=Hs(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Hs(c.result),p.oldVersion,p.newVersion,Hs(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const tk=["get","getKey","getAll","getAllKeys","count"],nk=["put","add","delete","clear"],ig=new Map;function ab(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ig.get(e))return ig.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=nk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||tk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return ig.set(e,l),l}XD(t=>({...t,get:(e,n,i)=>ab(e,n)||t.get(e,n,i),has:(e,n)=>!!ab(e,n)||t.has(e,n)}));/**
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
 */class rk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ik(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ik(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kg="@firebase/app",ob="0.14.0";/**
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
 */const Ji=new gy("@firebase/app"),sk="@firebase/app-compat",ak="@firebase/analytics-compat",ok="@firebase/analytics",lk="@firebase/app-check-compat",uk="@firebase/app-check",ck="@firebase/auth",hk="@firebase/auth-compat",fk="@firebase/database",dk="@firebase/data-connect",pk="@firebase/database-compat",mk="@firebase/functions",gk="@firebase/functions-compat",yk="@firebase/installations",_k="@firebase/installations-compat",vk="@firebase/messaging",Ek="@firebase/messaging-compat",bk="@firebase/performance",Tk="@firebase/performance-compat",wk="@firebase/remote-config",Sk="@firebase/remote-config-compat",xk="@firebase/storage",Ak="@firebase/storage-compat",Rk="@firebase/firestore",Ck="@firebase/ai",Ik="@firebase/firestore-compat",Dk="firebase",kk="12.0.0";/**
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
 */const Og="[DEFAULT]",Ok={[kg]:"fire-core",[sk]:"fire-core-compat",[ok]:"fire-analytics",[ak]:"fire-analytics-compat",[uk]:"fire-app-check",[lk]:"fire-app-check-compat",[ck]:"fire-auth",[hk]:"fire-auth-compat",[fk]:"fire-rtdb",[dk]:"fire-data-connect",[pk]:"fire-rtdb-compat",[mk]:"fire-fn",[gk]:"fire-fn-compat",[yk]:"fire-iid",[_k]:"fire-iid-compat",[vk]:"fire-fcm",[Ek]:"fire-fcm-compat",[bk]:"fire-perf",[Tk]:"fire-perf-compat",[wk]:"fire-rc",[Sk]:"fire-rc-compat",[xk]:"fire-gcs",[Ak]:"fire-gcs-compat",[Rk]:"fire-fst",[Ik]:"fire-fst-compat",[Ck]:"fire-vertex","fire-js":"fire-js",[Dk]:"fire-js-all"};/**
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
 */const Gf=new Map,Mk=new Map,Mg=new Map;function lb(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vl(t){const e=t.name;if(Mg.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;Mg.set(e,t);for(const n of Gf.values())lb(n,t);for(const n of Mk.values())lb(n,t);return!0}function _y(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Nk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gs=new Cc("app","Firebase",Nk);/**
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
 */class Pk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ja("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ml=kk;function n1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Og,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Gs.create("bad-app-name",{appName:String(a)});if(n||(n=Kw()),!n)throw Gs.create("no-options");const l=Gf.get(a);if(l){if(Za(n,l.options)&&Za(i,l.config))return l;throw Gs.create("duplicate-app",{appName:a})}const c=new BD(a);for(const p of Mg.values())c.addComponent(p);const d=new Pk(n,i,c);return Gf.set(a,d),d}function r1(t=Og){const e=Gf.get(t);if(!e&&t===Og&&Kw())return n1();if(!e)throw Gs.create("no-app",{appName:t});return e}function Ys(t,e,n){let i=Ok[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(c.join(" "));return}vl(new Ja(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vk="firebase-heartbeat-database",Lk=1,dc="firebase-heartbeat-store";let sg=null;function i1(){return sg||(sg=ek(Vk,Lk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dc)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gs.create("idb-open",{originalErrorMessage:t.message})})),sg}async function jk(t){try{const n=(await i1()).transaction(dc),i=await n.objectStore(dc).get(s1(t));return await n.done,i}catch(e){if(e instanceof rs)Ji.warn(e.message);else{const n=Gs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function ub(t,e){try{const i=(await i1()).transaction(dc,"readwrite");await i.objectStore(dc).put(e,s1(t)),await i.done}catch(n){if(n instanceof rs)Ji.warn(n.message);else{const i=Gs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(i.message)}}}function s1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uk=1024,qk=30;class Bk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cb();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>qk){const c=$k(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ji.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cb(),{heartbeatsToSend:i,unsentEntries:a}=zk(this._heartbeatsCache.heartbeats),l=Hf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Ji.warn(n),""}}}function cb(){return new Date().toISOString().substring(0,10)}function zk(t,e=Uk){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),hb(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),hb(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Fk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ID()?DD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ub(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ub(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hb(t){return Hf(JSON.stringify({version:2,heartbeats:t})).length}function $k(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Hk(t){vl(new Ja("platform-logger",e=>new rk(e),"PRIVATE")),vl(new Ja("heartbeat",e=>new Bk(e),"PRIVATE")),Ys(kg,ob,t),Ys(kg,ob,"esm2020"),Ys("fire-js","")}Hk("");function a1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gk=a1,o1=new Cc("auth","Firebase",a1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new gy("@firebase/auth");function Yk(t,...e){Yf.logLevel<=qe.WARN&&Yf.warn(`Auth (${Ml}): ${t}`,...e)}function Df(t,...e){Yf.logLevel<=qe.ERROR&&Yf.error(`Auth (${Ml}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,...e){throw vy(t,...e)}function ni(t,...e){return vy(t,...e)}function l1(t,e,n){const i={...Gk(),[e]:n};return new Cc("auth","Firebase",i).create(e,{appName:t.name})}function Qi(t){return l1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vy(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return o1.create(t,...e)}function Ae(t,e,...n){if(!t)throw vy(e,...n)}function $i(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Df(e),new Error(e)}function es(t,e){t||$i(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Wk(){return fb()==="http:"||fb()==="https:"}function fb(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wk()||xD()||"connection"in navigator)?navigator.onLine:!0}function Kk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.shortDelay=e,this.longDelay=n,es(n>e,"Short delay should be less than long delay!"),this.isMobile=TD()||AD()}get(){return Qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e){es(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jk=new Dc(3e4,6e4);function ia(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function is(t,e,n,i,a={}){return c1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Ic({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return SD()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Ol(t.emulatorConfig.host)&&(g.credentials="include"),u1.fetch()(await h1(t,t.config.apiHost,n,d),g)})}async function c1(t,e,n){t._canInitEmulator=!1;const i={...Xk,...e};try{const a=new tO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw df(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw df(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw df(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw df(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw l1(t,v,g);Dr(t,v)}}catch(a){if(a instanceof rs)throw a;Dr(t,"network-request-failed",{message:String(a)})}}async function kc(t,e,n,i,a={}){const l=await is(t,e,n,i,a);return"mfaPendingCredential"in l&&Dr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function h1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Ey(t.config,a):`${t.config.apiScheme}://${a}`;return Zk.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function eO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ni(this.auth,"network-request-failed")),Jk.get())})}}function df(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=ni(t,e,i);return a.customData._tokenResponse=n,a}function db(t){return t!==void 0&&t.enterprise!==void 0}class nO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rO(t,e){return is(t,"GET","/v2/recaptchaConfig",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function Wf(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sO(t,e=!1){const n=Bt(t),i=await n.getIdToken(e),a=by(i);Ae(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:ic(ag(a.auth_time)),issuedAtTime:ic(ag(a.iat)),expirationTime:ic(ag(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function ag(t){return Number(t)*1e3}function by(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Df("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ww(n);return a?JSON.parse(a):(Df("Failed to decode base64 JWT payload"),null)}catch(a){return Df("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function pb(t){const e=by(t);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof rs&&aO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function aO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ic(this.lastLoginAt),this.creationTime=ic(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qf(t){var T;const e=t.auth,n=await t.getIdToken(),i=await El(t,Wf(e,{idToken:n}));Ae(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?f1(a.providerUserInfo):[],c=uO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Pg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function lO(t){const e=Bt(t);await Qf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function f1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e){const n=await c1(t,{},async()=>{const i=Ic({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await h1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Ol(t.emulatorConfig.host)&&(p.credentials="include"),u1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hO(t,e){return is(t,"POST","/v2/accounts:revokeToken",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=pb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await cO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new hl;return i&&(Ae(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hl,this.toJSON())}_performRefresh(){return $i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){Ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new oO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Pg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sO(this,e)}reload(){return lO(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Qf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Qi(this.auth));const e=await this.getIdToken();return await El(this,iO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:C,providerData:D,stsTokenManager:q}=n;Ae(T&&q,e,"internal-error");const k=hl.fromJSON(this.name,q);Ae(typeof T=="string",e,"internal-error"),Vs(i,e.name),Vs(a,e.name),Ae(typeof w=="boolean",e,"internal-error"),Ae(typeof C=="boolean",e,"internal-error"),Vs(l,e.name),Vs(c,e.name),Vs(d,e.name),Vs(p,e.name),Vs(g,e.name),Vs(v,e.name);const P=new Sr({uid:T,auth:e,email:a,emailVerified:w,displayName:i,isAnonymous:C,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:k,createdAt:g,lastLoginAt:v});return D&&Array.isArray(D)&&(P.providerData=D.map(j=>({...j}))),p&&(P._redirectEventId=p),P}static async _fromIdTokenResponse(e,n,i=!1){const a=new hl;a.updateFromServerResponse(n);const l=new Sr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Qf(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?f1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new hl;d.updateFromIdToken(i);const p=new Sr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Pg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new Map;function Hi(t){es(t instanceof Function,"Expected a class definition");let e=mb.get(t);return e?(es(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mb.set(t,e),e)}/**
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
 */class d1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d1.type="NONE";const gb=d1;/**
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
 */function kf(t,e,n){return`firebase:${t}:${e}:${n}`}class fl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=kf(this.userKey,a.apiKey,l),this.fullPersistenceKey=kf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wf(this.auth,{idToken:e}).catch(()=>{});return n?Sr._fromGetAccountInfoResponse(this.auth,n,e):null}return Sr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new fl(Hi(gb),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Hi(gb);const c=kf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await Wf(e,{idToken:v}).catch(()=>{});if(!w)break;T=await Sr._fromGetAccountInfoResponse(e,w,v)}else T=Sr._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new fl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new fl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v1(e))return"Blackberry";if(E1(e))return"Webos";if(m1(e))return"Safari";if((e.includes("chrome/")||g1(e))&&!e.includes("edge/"))return"Chrome";if(_1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function p1(t=In()){return/firefox\//i.test(t)}function m1(t=In()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g1(t=In()){return/crios\//i.test(t)}function y1(t=In()){return/iemobile/i.test(t)}function _1(t=In()){return/android/i.test(t)}function v1(t=In()){return/blackberry/i.test(t)}function E1(t=In()){return/webos/i.test(t)}function Ty(t=In()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fO(t=In()){var e;return Ty(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dO(){return RD()&&document.documentMode===10}function b1(t=In()){return Ty(t)||_1(t)||E1(t)||v1(t)||/windows phone/i.test(t)||y1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e=[]){let n;switch(t){case"Browser":n=yb(In());break;case"Worker":n=`${yb(In())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ml}/${i}`}/**
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
 */class pO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function mO(t,e={}){return is(t,"GET","/v2/passwordPolicy",ia(t,e))}/**
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
 */const gO=6;class yO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _b(this),this.idTokenSubscription=new _b(this),this.beforeStateQueue=new pO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hi(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await fl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wf(this,{idToken:e}),i=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(mr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Qi(this));const n=e?Bt(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mO(this),n=new yO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hi(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await fl.create(this,[Hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Yk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oo(t){return Bt(t)}class _b{constructor(e){this.auth=e,this.observer=null,this.addObserver=PD(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vO(t){vd=t}function w1(t){return vd.loadJS(t)}function EO(){return vd.recaptchaEnterpriseScript}function bO(){return vd.gapiScript}function TO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wO{constructor(){this.enterprise=new SO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xO="recaptcha-enterprise",S1="NO_RECAPTCHA";class AO{constructor(e){this.type=xO,this.auth=oo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{rO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new nO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;db(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(S1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&db(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=EO();p.length!==0&&(p+=d),w1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function vb(t,e,n,i=!1,a=!1){const l=new AO(t);let c;if(a)c=S1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Vg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await vb(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await vb(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t,e){const n=_y(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(Za(l,e??{}))return a;Dr(a,"already-initialized")}return n.initialize({options:e})}function CO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Hi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function IO(t,e,n){const i=oo(t);Ae(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=x1(e),{host:c,port:d}=DO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Ae(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ae(Za(g,i.config.emulator)&&Za(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Ol(c)?(Zw(`${l}//${c}${p}`),Jw("Auth",!0)):kO()}function x1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DO(t){const e=x1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Eb(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Eb(c)}}}function Eb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $i("not implemented")}_getIdTokenResponse(e){return $i("not implemented")}_linkToIdToken(e,n){return $i("not implemented")}_getReauthenticationResolver(e){return $i("not implemented")}}async function OO(t,e){return is(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e){return kc(t,"POST","/v1/accounts:signInWithPassword",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return kc(t,"POST","/v1/accounts:signInWithEmailLink",ia(t,e))}async function PO(t,e){return kc(t,"POST","/v1/accounts:signInWithEmailLink",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends wy{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new pc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new pc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vg(e,n,"signInWithPassword",MO);case"emailLink":return NO(e,{email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vg(e,i,"signUpPassword",OO);case"emailLink":return PO(e,{idToken:n,email:this._email,oobCode:this._password});default:Dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e){return kc(t,"POST","/v1/accounts:signInWithIdp",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO="http://localhost";class eo extends wy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new eo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new eo(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return dl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,dl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dl(e,n)}buildRequest(){const e={requestUri:VO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ic(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jO(t){const e=Qu(Ku(t)).link,n=e?Qu(Ku(e)).deep_link_id:null,i=Qu(Ku(t)).deep_link_id;return(i?Qu(Ku(i)).link:null)||i||n||e||t}class Sy{constructor(e){const n=Qu(Ku(e)),i=n.apiKey??null,a=n.oobCode??null,l=LO(n.mode??null);Ae(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=jO(e);try{return new Sy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.providerId=Nl.PROVIDER_ID}static credential(e,n){return pc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Sy.parseLink(n);return Ae(i,"argument-error"),pc._fromEmailAndCode(e,i.code,i.tenantId)}}Nl.PROVIDER_ID="password";Nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oc extends A1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Oc{constructor(){super("facebook.com")}static credential(e){return eo._fromParams({providerId:Us.PROVIDER_ID,signInMethod:Us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Us.credentialFromTaggedObject(e)}static credentialFromError(e){return Us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Us.credential(e.oauthAccessToken)}catch{return null}}}Us.FACEBOOK_SIGN_IN_METHOD="facebook.com";Us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return eo._fromParams({providerId:qs.PROVIDER_ID,signInMethod:qs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qs.credentialFromTaggedObject(e)}static credentialFromError(e){return qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qs.credential(n,i)}catch{return null}}}qs.GOOGLE_SIGN_IN_METHOD="google.com";qs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Oc{constructor(){super("github.com")}static credential(e){return eo._fromParams({providerId:Bs.PROVIDER_ID,signInMethod:Bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bs.credentialFromTaggedObject(e)}static credentialFromError(e){return Bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bs.credential(e.oauthAccessToken)}catch{return null}}}Bs.GITHUB_SIGN_IN_METHOD="github.com";Bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Oc{constructor(){super("twitter.com")}static credential(e,n){return eo._fromParams({providerId:zs.PROVIDER_ID,signInMethod:zs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zs.credentialFromTaggedObject(e)}static credentialFromError(e){return zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return zs.credential(n,i)}catch{return null}}}zs.TWITTER_SIGN_IN_METHOD="twitter.com";zs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UO(t,e){return kc(t,"POST","/v1/accounts:signUp",ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Sr._fromIdTokenResponse(e,i,a),c=bb(i);return new to({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=bb(i);return new to({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function bb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends rs{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Kf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new Kf(e,n,i,a)}}function R1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Kf._fromErrorAndOperation(t,l,e,i):l})}async function qO(t,e,n=!1){const i=await El(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return to._forOperation(t,"link",i)}/**
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
 */async function BO(t,e,n=!1){const{auth:i}=t;if(mr(i.app))return Promise.reject(Qi(i));const a="reauthenticate";try{const l=await El(t,R1(i,a,e,t),n);Ae(l.idToken,i,"internal-error");const c=by(l.idToken);Ae(c,i,"internal-error");const{sub:d}=c;return Ae(t.uid===d,i,"user-mismatch"),to._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Dr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e,n=!1){if(mr(t.app))return Promise.reject(Qi(t));const i="signIn",a=await R1(t,i,e),l=await to._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function zO(t,e){return C1(oo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(t){const e=oo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FO(t,e,n){if(mr(t.app))return Promise.reject(Qi(t));const i=oo(t),c=await Vg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&I1(t),p}),d=await to._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function $O(t,e,n){return mr(t.app)?Promise.reject(Qi(t)):zO(Bt(t),Nl.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&I1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){return is(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Bt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await El(i,HO(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function YO(t,e,n,i){return Bt(t).onIdTokenChanged(e,n,i)}function WO(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}function Ed(t,e,n,i){return Bt(t).onAuthStateChanged(e,n,i)}function QO(t){return Bt(t).signOut()}const Xf="__sak";/**
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
 */class D1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xf,"1"),this.storage.removeItem(Xf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=1e3,XO=10;class k1 extends D1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);dO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,XO):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},KO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k1.type="LOCAL";const ZO=k1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends D1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O1.type="SESSION";const M1=O1;/**
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
 */function JO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new bd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await JO(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=xy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return window}function tM(t){ri().location.href=t}/**
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
 */function N1(){return typeof ri().WorkerGlobalScope<"u"&&typeof ri().importScripts=="function"}async function nM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iM(){return N1()?self:null}/**
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
 */const P1="firebaseLocalStorageDb",sM=1,Zf="firebaseLocalStorage",V1="fbase_key";class Mc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Td(t,e){return t.transaction([Zf],e?"readwrite":"readonly").objectStore(Zf)}function aM(){const t=indexedDB.deleteDatabase(P1);return new Mc(t).toPromise()}function Lg(){const t=indexedDB.open(P1,sM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Zf,{keyPath:V1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Zf)?e(i):(i.close(),await aM(),e(await Lg()))})})}async function Tb(t,e,n){const i=Td(t,!0).put({[V1]:e,value:n});return new Mc(i).toPromise()}async function oM(t,e){const n=Td(t,!1).get(e),i=await new Mc(n).toPromise();return i===void 0?null:i.value}function wb(t,e){const n=Td(t,!0).delete(e);return new Mc(n).toPromise()}const lM=800,uM=3;class L1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>uM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bd._getInstance(iM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await nM(),!this.activeServiceWorker)return;this.sender=new eM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lg();return await Tb(e,Xf,"1"),await wb(e,Xf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Tb(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>oM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Td(a,!1).getAll();return new Mc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L1.type="LOCAL";const cM=L1;new Dc(3e4,6e4);/**
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
 */function hM(t,e){return e?Hi(e):(Ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ay extends wy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fM(t){return C1(t.auth,new Ay(t),t.bypassAuthState)}function dM(t){const{auth:e,user:n}=t;return Ae(n,e,"internal-error"),BO(n,new Ay(t),t.bypassAuthState)}async function pM(t){const{auth:e,user:n}=t;return Ae(n,e,"internal-error"),qO(n,new Ay(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fM;case"linkViaPopup":case"linkViaRedirect":return pM;case"reauthViaPopup":case"reauthViaRedirect":return dM;default:Dr(this.auth,"internal-error")}}resolve(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){es(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=new Dc(2e3,1e4);class cl extends j1{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,cl.currentPopupAction&&cl.currentPopupAction.cancel(),cl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){es(this.filter.length===1,"Popup operations only handle one event");const e=xy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mM.get())};e()}}cl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="pendingRedirect",Of=new Map;class yM extends j1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Of.get(this.auth._key());if(!e){try{const i=await _M(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Of.set(this.auth._key(),e)}return this.bypassAuthState||Of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _M(t,e){const n=bM(e),i=EM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function vM(t,e){Of.set(t._key(),e)}function EM(t){return Hi(t._redirectPersistence)}function bM(t){return kf(gM,t.config.apiKey,t.name)}async function TM(t,e,n=!1){if(mr(t.app))return Promise.reject(Qi(t));const i=oo(t),a=hM(i,e),c=await new yM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=600*1e3;class SM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!U1(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(ni(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sb(e))}saveEventToCache(e){this.cachedEventUids.add(Sb(e)),this.lastProcessedEventTime=Date.now()}}function Sb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e={}){return is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CM=/^https?/;async function IM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AM(t);for(const n of e)try{if(DM(n))return}catch{}Dr(t,"unauthorized-domain")}function DM(t){const e=Ng(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!CM.test(n))return!1;if(RM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const kM=new Dc(3e4,6e4);function xb(){const t=ri().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OM(t){return new Promise((e,n)=>{var a,l,c;function i(){xb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xb(),n(ni(t,"network-request-failed"))},timeout:kM.get()})}if((l=(a=ri().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=ri().gapi)!=null&&c.load)i();else{const d=TO("iframefcb");return ri()[d]=()=>{gapi.load?i():n(ni(t,"network-request-failed"))},w1(`${bO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw Mf=null,e})}let Mf=null;function MM(t){return Mf=Mf||OM(t),Mf}/**
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
 */const NM=new Dc(5e3,15e3),PM="__/auth/iframe",VM="emulator/auth/iframe",LM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UM(t){const e=t.config;Ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ey(e,VM):`https://${t.config.authDomain}/${PM}`,i={apiKey:e.apiKey,appName:t.name,v:Ml},a=jM.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ic(i).slice(1)}`}async function qM(t){const e=await MM(t),n=ri().gapi;return Ae(n,t,"internal-error"),e.open({where:document.body,url:UM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LM,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=ni(t,"network-request-failed"),d=ri().setTimeout(()=>{l(c)},NM.get());function p(){ri().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const BM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zM=500,FM=600,$M="_blank",HM="http://localhost";class Ab{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GM(t,e,n,i=zM,a=FM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...BM,width:i.toString(),height:a.toString(),top:l,left:c},g=In().toLowerCase();n&&(d=g1(g)?$M:n),p1(g)&&(e=e||HM,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[C,D])=>`${w}${C}=${D},`,"");if(fO(g)&&d!=="_self")return YM(e||"",d),new Ab(null);const T=window.open(e||"",d,v);Ae(T,t,"popup-blocked");try{T.focus()}catch{}return new Ab(T)}function YM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const WM="__/auth/handler",QM="emulator/auth/handler",KM=encodeURIComponent("fac");async function Rb(t,e,n,i,a,l){Ae(t.config.authDomain,t,"auth-domain-config-required"),Ae(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ml,eventId:a};if(e instanceof A1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",ND(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Oc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${KM}=${encodeURIComponent(p)}`:"";return`${XM(t)}?${Ic(d).slice(1)}${g}`}function XM({config:t}){return t.emulator?Ey(t,QM):`https://${t.authDomain}/${WM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="webStorageSupport";class ZM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M1,this._completeRedirectFn=TM,this._overrideRedirectResult=vM}async _openPopup(e,n,i,a){var c;es((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Rb(e,n,i,Ng(),a);return GM(e,l,xy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await Rb(e,n,i,Ng(),a);return tM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(es(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await qM(e),i=new SM(e);return n.register("authEvent",a=>(Ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(og,{type:og},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[og];l!==void 0&&n(!!l),Dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b1()||m1()||Ty()}}const JM=ZM;var Cb="@firebase/auth",Ib="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nN(t){vl(new Ja("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T1(t)},g=new _O(i,a,l,p);return CO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),vl(new Ja("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(i=>new eN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ys(Cb,Ib,tN(t)),Ys(Cb,Ib,"esm2020")}/**
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
 */const rN=300,iN=Xw("authIdTokenMaxAge")||rN;let Db=null;const sN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>iN)return;const a=n==null?void 0:n.token;Db!==a&&(Db=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function aN(t=r1()){const e=_y(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RO(t,{popupRedirectResolver:JM,persistence:[cM,ZO,M1]}),i=Xw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=sN(l.toString());WO(n,c,()=>c(n.currentUser)),YO(n,d=>c(d))}}const a=Qw("auth");return a&&IO(n,`http://${a}`),n}function oN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=ni("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",oN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nN("Browser");var lN="firebase",uN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ys(lN,uN,"app");var kb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,q1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,R){function I(){}I.prototype=R.prototype,A.D=R.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(V,U,$){for(var N=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)N[dt-2]=arguments[dt];return R.prototype[U].apply(V,N)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(A,R,I){I||(I=0);var V=Array(16);if(typeof R=="string")for(var U=0;16>U;++U)V[U]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(U=0;16>U;++U)V[U]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=A.g[0],I=A.g[1],U=A.g[2];var $=A.g[3],N=R+($^I&(U^$))+V[0]+3614090360&4294967295;R=I+(N<<7&4294967295|N>>>25),N=$+(U^R&(I^U))+V[1]+3905402710&4294967295,$=R+(N<<12&4294967295|N>>>20),N=U+(I^$&(R^I))+V[2]+606105819&4294967295,U=$+(N<<17&4294967295|N>>>15),N=I+(R^U&($^R))+V[3]+3250441966&4294967295,I=U+(N<<22&4294967295|N>>>10),N=R+($^I&(U^$))+V[4]+4118548399&4294967295,R=I+(N<<7&4294967295|N>>>25),N=$+(U^R&(I^U))+V[5]+1200080426&4294967295,$=R+(N<<12&4294967295|N>>>20),N=U+(I^$&(R^I))+V[6]+2821735955&4294967295,U=$+(N<<17&4294967295|N>>>15),N=I+(R^U&($^R))+V[7]+4249261313&4294967295,I=U+(N<<22&4294967295|N>>>10),N=R+($^I&(U^$))+V[8]+1770035416&4294967295,R=I+(N<<7&4294967295|N>>>25),N=$+(U^R&(I^U))+V[9]+2336552879&4294967295,$=R+(N<<12&4294967295|N>>>20),N=U+(I^$&(R^I))+V[10]+4294925233&4294967295,U=$+(N<<17&4294967295|N>>>15),N=I+(R^U&($^R))+V[11]+2304563134&4294967295,I=U+(N<<22&4294967295|N>>>10),N=R+($^I&(U^$))+V[12]+1804603682&4294967295,R=I+(N<<7&4294967295|N>>>25),N=$+(U^R&(I^U))+V[13]+4254626195&4294967295,$=R+(N<<12&4294967295|N>>>20),N=U+(I^$&(R^I))+V[14]+2792965006&4294967295,U=$+(N<<17&4294967295|N>>>15),N=I+(R^U&($^R))+V[15]+1236535329&4294967295,I=U+(N<<22&4294967295|N>>>10),N=R+(U^$&(I^U))+V[1]+4129170786&4294967295,R=I+(N<<5&4294967295|N>>>27),N=$+(I^U&(R^I))+V[6]+3225465664&4294967295,$=R+(N<<9&4294967295|N>>>23),N=U+(R^I&($^R))+V[11]+643717713&4294967295,U=$+(N<<14&4294967295|N>>>18),N=I+($^R&(U^$))+V[0]+3921069994&4294967295,I=U+(N<<20&4294967295|N>>>12),N=R+(U^$&(I^U))+V[5]+3593408605&4294967295,R=I+(N<<5&4294967295|N>>>27),N=$+(I^U&(R^I))+V[10]+38016083&4294967295,$=R+(N<<9&4294967295|N>>>23),N=U+(R^I&($^R))+V[15]+3634488961&4294967295,U=$+(N<<14&4294967295|N>>>18),N=I+($^R&(U^$))+V[4]+3889429448&4294967295,I=U+(N<<20&4294967295|N>>>12),N=R+(U^$&(I^U))+V[9]+568446438&4294967295,R=I+(N<<5&4294967295|N>>>27),N=$+(I^U&(R^I))+V[14]+3275163606&4294967295,$=R+(N<<9&4294967295|N>>>23),N=U+(R^I&($^R))+V[3]+4107603335&4294967295,U=$+(N<<14&4294967295|N>>>18),N=I+($^R&(U^$))+V[8]+1163531501&4294967295,I=U+(N<<20&4294967295|N>>>12),N=R+(U^$&(I^U))+V[13]+2850285829&4294967295,R=I+(N<<5&4294967295|N>>>27),N=$+(I^U&(R^I))+V[2]+4243563512&4294967295,$=R+(N<<9&4294967295|N>>>23),N=U+(R^I&($^R))+V[7]+1735328473&4294967295,U=$+(N<<14&4294967295|N>>>18),N=I+($^R&(U^$))+V[12]+2368359562&4294967295,I=U+(N<<20&4294967295|N>>>12),N=R+(I^U^$)+V[5]+4294588738&4294967295,R=I+(N<<4&4294967295|N>>>28),N=$+(R^I^U)+V[8]+2272392833&4294967295,$=R+(N<<11&4294967295|N>>>21),N=U+($^R^I)+V[11]+1839030562&4294967295,U=$+(N<<16&4294967295|N>>>16),N=I+(U^$^R)+V[14]+4259657740&4294967295,I=U+(N<<23&4294967295|N>>>9),N=R+(I^U^$)+V[1]+2763975236&4294967295,R=I+(N<<4&4294967295|N>>>28),N=$+(R^I^U)+V[4]+1272893353&4294967295,$=R+(N<<11&4294967295|N>>>21),N=U+($^R^I)+V[7]+4139469664&4294967295,U=$+(N<<16&4294967295|N>>>16),N=I+(U^$^R)+V[10]+3200236656&4294967295,I=U+(N<<23&4294967295|N>>>9),N=R+(I^U^$)+V[13]+681279174&4294967295,R=I+(N<<4&4294967295|N>>>28),N=$+(R^I^U)+V[0]+3936430074&4294967295,$=R+(N<<11&4294967295|N>>>21),N=U+($^R^I)+V[3]+3572445317&4294967295,U=$+(N<<16&4294967295|N>>>16),N=I+(U^$^R)+V[6]+76029189&4294967295,I=U+(N<<23&4294967295|N>>>9),N=R+(I^U^$)+V[9]+3654602809&4294967295,R=I+(N<<4&4294967295|N>>>28),N=$+(R^I^U)+V[12]+3873151461&4294967295,$=R+(N<<11&4294967295|N>>>21),N=U+($^R^I)+V[15]+530742520&4294967295,U=$+(N<<16&4294967295|N>>>16),N=I+(U^$^R)+V[2]+3299628645&4294967295,I=U+(N<<23&4294967295|N>>>9),N=R+(U^(I|~$))+V[0]+4096336452&4294967295,R=I+(N<<6&4294967295|N>>>26),N=$+(I^(R|~U))+V[7]+1126891415&4294967295,$=R+(N<<10&4294967295|N>>>22),N=U+(R^($|~I))+V[14]+2878612391&4294967295,U=$+(N<<15&4294967295|N>>>17),N=I+($^(U|~R))+V[5]+4237533241&4294967295,I=U+(N<<21&4294967295|N>>>11),N=R+(U^(I|~$))+V[12]+1700485571&4294967295,R=I+(N<<6&4294967295|N>>>26),N=$+(I^(R|~U))+V[3]+2399980690&4294967295,$=R+(N<<10&4294967295|N>>>22),N=U+(R^($|~I))+V[10]+4293915773&4294967295,U=$+(N<<15&4294967295|N>>>17),N=I+($^(U|~R))+V[1]+2240044497&4294967295,I=U+(N<<21&4294967295|N>>>11),N=R+(U^(I|~$))+V[8]+1873313359&4294967295,R=I+(N<<6&4294967295|N>>>26),N=$+(I^(R|~U))+V[15]+4264355552&4294967295,$=R+(N<<10&4294967295|N>>>22),N=U+(R^($|~I))+V[6]+2734768916&4294967295,U=$+(N<<15&4294967295|N>>>17),N=I+($^(U|~R))+V[13]+1309151649&4294967295,I=U+(N<<21&4294967295|N>>>11),N=R+(U^(I|~$))+V[4]+4149444226&4294967295,R=I+(N<<6&4294967295|N>>>26),N=$+(I^(R|~U))+V[11]+3174756917&4294967295,$=R+(N<<10&4294967295|N>>>22),N=U+(R^($|~I))+V[2]+718787259&4294967295,U=$+(N<<15&4294967295|N>>>17),N=I+($^(U|~R))+V[9]+3951481745&4294967295,A.g[0]=A.g[0]+R&4294967295,A.g[1]=A.g[1]+(U+(N<<21&4294967295|N>>>11))&4294967295,A.g[2]=A.g[2]+U&4294967295,A.g[3]=A.g[3]+$&4294967295}i.prototype.u=function(A,R){R===void 0&&(R=A.length);for(var I=R-this.blockSize,V=this.B,U=this.h,$=0;$<R;){if(U==0)for(;$<=I;)a(this,A,$),$+=this.blockSize;if(typeof A=="string"){for(;$<R;)if(V[U++]=A.charCodeAt($++),U==this.blockSize){a(this,V),U=0;break}}else for(;$<R;)if(V[U++]=A[$++],U==this.blockSize){a(this,V),U=0;break}}this.h=U,this.o+=R},i.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var R=1;R<A.length-8;++R)A[R]=0;var I=8*this.o;for(R=A.length-8;R<A.length;++R)A[R]=I&255,I/=256;for(this.u(A),A=Array(16),R=I=0;4>R;++R)for(var V=0;32>V;V+=8)A[I++]=this.g[R]>>>V&255;return A};function l(A,R){var I=d;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=R(A)}function c(A,R){this.h=R;for(var I=[],V=!0,U=A.length-1;0<=U;U--){var $=A[U]|0;V&&$==R||(I[U]=$,V=!1)}this.g=I}var d={};function p(A){return-128<=A&&128>A?l(A,function(R){return new c([R|0],0>R?-1:0)}):new c([A|0],0>A?-1:0)}function g(A){if(isNaN(A)||!isFinite(A))return T;if(0>A)return k(g(-A));for(var R=[],I=1,V=0;A>=I;V++)R[V]=A/I|0,I*=4294967296;return new c(R,0)}function v(A,R){if(A.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(A.charAt(0)=="-")return k(v(A.substring(1),R));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(R,8)),V=T,U=0;U<A.length;U+=8){var $=Math.min(8,A.length-U),N=parseInt(A.substring(U,U+$),R);8>$?($=g(Math.pow(R,$)),V=V.j($).add(g(N))):(V=V.j(I),V=V.add(g(N)))}return V}var T=p(0),w=p(1),C=p(16777216);t=c.prototype,t.m=function(){if(q(this))return-k(this).m();for(var A=0,R=1,I=0;I<this.g.length;I++){var V=this.i(I);A+=(0<=V?V:4294967296+V)*R,R*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D(this))return"0";if(q(this))return"-"+k(this).toString(A);for(var R=g(Math.pow(A,6)),I=this,V="";;){var U=te(I,R).g;I=P(I,U.j(R));var $=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=U,D(I))return $+V;for(;6>$.length;)$="0"+$;V=$+V}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function D(A){if(A.h!=0)return!1;for(var R=0;R<A.g.length;R++)if(A.g[R]!=0)return!1;return!0}function q(A){return A.h==-1}t.l=function(A){return A=P(this,A),q(A)?-1:D(A)?0:1};function k(A){for(var R=A.g.length,I=[],V=0;V<R;V++)I[V]=~A.g[V];return new c(I,~A.h).add(w)}t.abs=function(){return q(this)?k(this):this},t.add=function(A){for(var R=Math.max(this.g.length,A.g.length),I=[],V=0,U=0;U<=R;U++){var $=V+(this.i(U)&65535)+(A.i(U)&65535),N=($>>>16)+(this.i(U)>>>16)+(A.i(U)>>>16);V=N>>>16,$&=65535,N&=65535,I[U]=N<<16|$}return new c(I,I[I.length-1]&-2147483648?-1:0)};function P(A,R){return A.add(k(R))}t.j=function(A){if(D(this)||D(A))return T;if(q(this))return q(A)?k(this).j(k(A)):k(k(this).j(A));if(q(A))return k(this.j(k(A)));if(0>this.l(C)&&0>A.l(C))return g(this.m()*A.m());for(var R=this.g.length+A.g.length,I=[],V=0;V<2*R;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(var U=0;U<A.g.length;U++){var $=this.i(V)>>>16,N=this.i(V)&65535,dt=A.i(U)>>>16,Ke=A.i(U)&65535;I[2*V+2*U]+=N*Ke,j(I,2*V+2*U),I[2*V+2*U+1]+=$*Ke,j(I,2*V+2*U+1),I[2*V+2*U+1]+=N*dt,j(I,2*V+2*U+1),I[2*V+2*U+2]+=$*dt,j(I,2*V+2*U+2)}for(V=0;V<R;V++)I[V]=I[2*V+1]<<16|I[2*V];for(V=R;V<2*R;V++)I[V]=0;return new c(I,0)};function j(A,R){for(;(A[R]&65535)!=A[R];)A[R+1]+=A[R]>>>16,A[R]&=65535,R++}function B(A,R){this.g=A,this.h=R}function te(A,R){if(D(R))throw Error("division by zero");if(D(A))return new B(T,T);if(q(A))return R=te(k(A),R),new B(k(R.g),k(R.h));if(q(R))return R=te(A,k(R)),new B(k(R.g),R.h);if(30<A.g.length){if(q(A)||q(R))throw Error("slowDivide_ only works with positive integers.");for(var I=w,V=R;0>=V.l(A);)I=M(I),V=M(V);var U=J(I,1),$=J(V,1);for(V=J(V,2),I=J(I,2);!D(V);){var N=$.add(V);0>=N.l(A)&&(U=U.add(I),$=N),V=J(V,1),I=J(I,1)}return R=P(A,U.j(R)),new B(U,R)}for(U=T;0<=A.l(R);){for(I=Math.max(1,Math.floor(A.m()/R.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),$=g(I),N=$.j(R);q(N)||0<N.l(A);)I-=V,$=g(I),N=$.j(R);D($)&&($=w),U=U.add($),A=P(A,N)}return new B(U,A)}t.A=function(A){return te(this,A).h},t.and=function(A){for(var R=Math.max(this.g.length,A.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)&A.i(V);return new c(I,this.h&A.h)},t.or=function(A){for(var R=Math.max(this.g.length,A.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)|A.i(V);return new c(I,this.h|A.h)},t.xor=function(A){for(var R=Math.max(this.g.length,A.g.length),I=[],V=0;V<R;V++)I[V]=this.i(V)^A.i(V);return new c(I,this.h^A.h)};function M(A){for(var R=A.g.length+1,I=[],V=0;V<R;V++)I[V]=A.i(V)<<1|A.i(V-1)>>>31;return new c(I,A.h)}function J(A,R){var I=R>>5;R%=32;for(var V=A.g.length-I,U=[],$=0;$<V;$++)U[$]=0<R?A.i($+I)>>>R|A.i($+I+1)<<32-R:A.i($+I);return new c(U,A.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,q1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ws=c}).apply(typeof kb<"u"?kb:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B1,Xu,z1,Nf,jg,F1,$1,H1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var x=0;x<h.length-1;x++){var Y=h[x];if(!(Y in E))break e;E=E[Y]}h=h[h.length-1],x=E[h],y=y(x),y!=x&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,x=!1,Y={next:function(){if(!x&&E<h.length){var Z=E++;return{value:y(Z,h[Z]),done:!1}}return x=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function T(h,y,E){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var Y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Y,x),h.apply(y,Y)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function C(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var x=E.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function D(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(x,Y,Z){for(var he=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)he[$e-2]=arguments[$e];return y.prototype[Y].apply(x,he)}}function q(h){const y=h.length;if(0<y){const E=Array(y);for(let x=0;x<y;x++)E[x]=h[x];return E}return[]}function k(h,y){for(let E=1;E<arguments.length;E++){const x=arguments[E];if(p(x)){const Y=h.length||0,Z=x.length||0;h.length=Y+Z;for(let he=0;he<Z;he++)h[Y+he]=x[he]}else h.push(x)}}class P{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function j(h){return/^[\s\xa0]*$/.test(h)}function B(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function te(h){return te[" "](h),h}te[" "]=function(){};var M=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function J(h,y,E){for(const x in h)y.call(E,h[x],x,h)}function A(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function R(h){const y={};for(const E in h)y[E]=h[E];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,y){let E,x;for(let Y=1;Y<arguments.length;Y++){x=arguments[Y];for(E in x)h[E]=x[E];for(let Z=0;Z<I.length;Z++)E=I[Z],Object.prototype.hasOwnProperty.call(x,E)&&(h[E]=x[E])}}function U(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function $(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Te;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class dt{constructor(){this.h=this.g=null}add(y,E){const x=Ke.get();x.set(y,E),this.h?this.h.next=x:this.g=x,this.h=x}}var Ke=new P(()=>new ee,h=>h.reset());class ee{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,pe=!1,Te=new dt,L=()=>{const h=d.Promise.resolve(void 0);ce=()=>{h.then(se)}};var se=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){$(E)}var y=Ke;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}pe=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function Ie(h,y){if(le.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(M){e:{try{te(y.nodeName);var Y=!0;break e}catch{}Y=!1}Y||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:_e[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ie.aa.h.call(this)}}D(Ie,le);var _e={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Tt(h,y,E,x,Y){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!x,this.ha=Y,this.key=++Fe,this.da=this.fa=!1}function Pn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function vn(h){this.src=h,this.g={},this.h=0}vn.prototype.add=function(h,y,E,x,Y){var Z=h.toString();h=this.g[Z],h||(h=this.g[Z]=[],this.h++);var he=hi(h,y,x,Y);return-1<he?(y=h[he],E||(y.fa=!1)):(y=new Tt(y,this.src,Z,!!x,Y),y.fa=E,h.push(y)),y};function Kt(h,y){var E=y.type;if(E in h.g){var x=h.g[E],Y=Array.prototype.indexOf.call(x,y,void 0),Z;(Z=0<=Y)&&Array.prototype.splice.call(x,Y,1),Z&&(Pn(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function hi(h,y,E,x){for(var Y=0;Y<h.length;++Y){var Z=h[Y];if(!Z.da&&Z.listener==y&&Z.capture==!!E&&Z.ha==x)return Y}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),la={};function co(h,y,E,x,Y){if(Array.isArray(y)){for(var Z=0;Z<y.length;Z++)co(h,y[Z],E,x,Y);return null}return E=fo(E),h&&h[gt]?h.K(y,E,g(x)?!!x.capture:!1,Y):Vn(h,y,E,!1,x,Y)}function Vn(h,y,E,x,Y,Z){if(!y)throw Error("Invalid event type");var he=g(Y)?!!Y.capture:!!Y,$e=Nr(h);if($e||(h[Mr]=$e=new vn(h)),E=$e.add(y,E,x,he,Z),E.proxy)return E;if(x=Bl(),E.proxy=x,x.src=h,x.listener=E,h.addEventListener)ye||(Y=he),Y===void 0&&(Y=!1),h.addEventListener(y.toString(),x,Y);else if(h.attachEvent)h.attachEvent(fi(y.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Bl(){function h(E){return y.call(h.src,h.listener,E)}const y=ho;return h}function ua(h,y,E,x,Y){if(Array.isArray(y))for(var Z=0;Z<y.length;Z++)ua(h,y[Z],E,x,Y);else x=g(x)?!!x.capture:!!x,E=fo(E),h&&h[gt]?(h=h.i,y=String(y).toString(),y in h.g&&(Z=h.g[y],E=hi(Z,E,x,Y),-1<E&&(Pn(Z[E]),Array.prototype.splice.call(Z,E,1),Z.length==0&&(delete h.g[y],h.h--)))):h&&(h=Nr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=hi(y,E,x,Y)),(E=-1<h?y[h]:null)&&as(E))}function as(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[gt])Kt(y.i,h);else{var E=h.type,x=h.proxy;y.removeEventListener?y.removeEventListener(E,x,h.capture):y.detachEvent?y.detachEvent(fi(E),x):y.addListener&&y.removeListener&&y.removeListener(x),(E=Nr(y))?(Kt(E,h),E.h==0&&(E.src=null,y[Mr]=null)):Pn(h)}}}function fi(h){return h in la?la[h]:la[h]="on"+h}function ho(h,y){if(h.da)h=!0;else{y=new Ie(y,this);var E=h.listener,x=h.ha||h.src;h.fa&&as(h),h=E.call(x,y)}return h}function Nr(h){return h=h[Mr],h instanceof vn?h:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function fo(h){return typeof h=="function"?h:(h[di]||(h[di]=function(y){return h.handleEvent(y)}),h[di])}function _t(){ue.call(this),this.i=new vn(this),this.M=this,this.F=null}D(_t,ue),_t.prototype[gt]=!0,_t.prototype.removeEventListener=function(h,y,E,x){ua(this,h,y,E,x)};function Xe(h,y){var E,x=h.F;if(x)for(E=[];x;x=x.F)E.push(x);if(h=h.M,x=y.type||y,typeof y=="string")y=new le(y,h);else if(y instanceof le)y.target=y.target||h;else{var Y=y;y=new le(x,h),V(y,Y)}if(Y=!0,E)for(var Z=E.length-1;0<=Z;Z--){var he=y.g=E[Z];Y=Dn(he,x,!0,y)&&Y}if(he=y.g=h,Y=Dn(he,x,!0,y)&&Y,Y=Dn(he,x,!1,y)&&Y,E)for(Z=0;Z<E.length;Z++)he=y.g=E[Z],Y=Dn(he,x,!1,y)&&Y}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],x=0;x<E.length;x++)Pn(E[x]);delete h.g[y],h.h--}}this.F=null},_t.prototype.K=function(h,y,E,x){return this.i.add(String(h),y,!1,E,x)},_t.prototype.L=function(h,y,E,x){return this.i.add(String(h),y,!0,E,x)};function Dn(h,y,E,x){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var Y=!0,Z=0;Z<y.length;++Z){var he=y[Z];if(he&&!he.da&&he.capture==E){var $e=he.listener,Ft=he.ha||he.src;he.fa&&Kt(h.i,he),Y=$e.call(Ft,x)!==!1&&Y}}return Y&&!x.defaultPrevented}function Xt(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function po(h){h.g=Xt(()=>{h.g=null,h.i&&(h.i=!1,po(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class zl extends ue{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(h){ue.call(this),this.h=h,this.g={}}D(pi,ue);var mi=[];function gi(h){J(h.g,function(y,E){this.g.hasOwnProperty(E)&&as(y)},h),h.g={}}pi.prototype.N=function(){pi.aa.N.call(this),gi(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=d.JSON.stringify,yi=d.JSON.parse,_i=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function os(){}os.prototype.h=null;function Oe(h){return h.h||(h.h=h.i())}function Je(){}var xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function We(){le.call(this,"d")}D(We,le);function Zt(){le.call(this,"c")}D(Zt,le);var Me={},ca=null;function Pr(){return ca=ca||new _t}Me.La="serverreachability";function ls(h){le.call(this,Me.La,h)}D(ls,le);function tr(h){const y=Pr();Xe(y,new ls(y))}Me.STAT_EVENT="statevent";function us(h,y){le.call(this,Me.STAT_EVENT,h),this.stat=y}D(us,le);function vt(h){const y=Pr();Xe(y,new us(y,h))}Me.Ma="timingevent";function zt(h,y){le.call(this,Me.Ma,h),this.size=y}D(zt,le);function Mt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function Fl(h,y,E,x,Y,Z){h.info(function(){if(h.g)if(Z)for(var he="",$e=Z.split("&"),Ft=0;Ft<$e.length;Ft++){var He=$e[Ft].split("=");if(1<He.length){var en=He[0];He=He[1];var $t=en.split("_");he=2<=$t.length&&$t[1]=="type"?he+(en+"="+He+"&"):he+(en+"=redacted&")}}else he=null;else he=Z;return"XMLHTTP REQ ("+x+") [attempt "+Y+"]: "+y+`
`+E+`
`+he})}function Gd(h,y,E,x,Y,Z,he){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+Y+"]: "+y+`
`+E+`
`+Z+" "+he})}function cs(h,y,E,x){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+ha(h,E)+(x?" "+x:"")})}function Fc(h,y){h.info(function(){return"TIMEOUT: "+y})}nr.prototype.info=function(){};function ha(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var x=E[h];if(!(2>x.length)){var Y=x[1];if(Array.isArray(Y)&&!(1>Y.length)){var Z=Y[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var he=1;he<Y.length;he++)Y[he]=""}}}}return zn(E)}catch{return y}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vr;function Lr(){}D(Lr,os),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Vr=new Lr;function kn(h,y,E,x){this.j=h,this.i=y,this.l=E,this.R=x||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}var $l={},mo={};function _r(h,y,E){h.L=1,h.v=ga(Fn(y)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,y){h.F=Date.now(),fa(h),h.A=Fn(h.v);var E=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Kl(E.i,"t",x),h.C=0,E=h.j.J,h.h=new It,h.g=sh(h.j,E?y:null,!h.m),0<h.O&&(h.M=new zl(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,x=h.ca;var Y="readystatechange";Array.isArray(Y)||(Y&&(mi[0]=Y.toString()),Y=mi);for(var Z=0;Z<Y.length;Z++){var he=co(E,Y[Z],x||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),tr(),Fl(h.i,h.u,h.A,h.l,h.R,h.m)}kn.prototype.ca=function(h){h=h.target;const y=this.M;y&&ar(h)==3?y.j():this.Y(h)},kn.prototype.Y=function(h){try{if(h==this.g)e:{const $t=ar(this.g);var y=this.g.Ba();const Ci=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||Xc(this.g)))){this.J||$t!=4||y==7||(y==8||0>=Ci?tr(3):tr(2)),fs(this);var E=this.g.Z();this.X=E;t:if($c(this)){var x=Xc(this.g);h="";var Y=x.length,Z=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),jr(this);var he="";break t}this.h.i=new d.TextDecoder}for(y=0;y<Y;y++)this.h.h=!0,h+=this.h.i.decode(x[y],{stream:!(Z&&y==Y-1)});x.length=0,this.h.g+=h,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=E==200,Gd(this.i,this.u,this.A,this.l,this.R,$t,E),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Ft=this.g;if(($e=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j($e)){var He=$e;break t}}He=null}if(E=He)cs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,E);else{this.o=!1,this.s=3,vt(12),cn(this),jr(this);break e}}if(this.P){E=!0;let hn;for(;!this.J&&this.C<he.length;)if(hn=Hc(this,he),hn==mo){$t==4&&(this.s=4,vt(14),E=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==$l){this.s=4,vt(15),cs(this.i,this.l,he,"[Invalid Chunk]"),E=!1;break}else cs(this.i,this.l,hn,null),da(this,hn);if($c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||he.length!=0||this.h.h||(this.s=1,vt(16),E=!1),this.o=this.o&&E,!E)cs(this.i,this.l,he,"[Invalid Chunked Response]"),cn(this),jr(this);else if(0<he.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),Sa(en),en.M=!0,vt(11))}}else cs(this.i,this.l,he,null),da(this,he);$t==4&&cn(this),this.o&&!this.J&&($t==4?nh(this.j,this):(this.o=!1,fa(this)))}else Xd(this.g),E==400&&0<he.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),cn(this),jr(this)}}}catch{}finally{}};function $c(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Hc(h,y){var E=h.C,x=y.indexOf(`
`,E);return x==-1?mo:(E=Number(y.substring(E,x)),isNaN(E)?$l:(x+=1,x+E>y.length?mo:(y=y.slice(x,x+E),h.C=x+E,y)))}kn.prototype.cancel=function(){this.J=!0,cn(this)};function fa(h){h.S=Date.now()+h.I,Gc(h,h.I)}function Gc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Mt(w(h.ba,h),y)}function fs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}kn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Fc(this.i,this.A),this.L!=2&&(tr(),vt(17)),cn(this),this.s=2,jr(this)):Gc(this,this.S-h)};function jr(h){h.j.G==0||h.J||nh(h.j,h)}function cn(h){fs(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,gi(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function da(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Hl(E.h,h))){if(!h.K&&Hl(E.h,h)&&E.G==3){try{var x=E.Da.g.parse(y)}catch{x=null}if(Array.isArray(x)&&x.length==3){var Y=x;if(Y[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Ro(E),xo(E);else break e;tu(E),vt(18)}}else E.za=Y[1],0<E.za-E.T&&37500>Y[2]&&E.F&&E.v==0&&!E.C&&(E.C=Mt(w(E.Za,E),6e3));if(1>=yo(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ri(E,11)}else if((h.K||E.g==h)&&Ro(E),!j(y))for(Y=E.Da.g.parse(y),y=0;y<Y.length;y++){let He=Y[y];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const en=He[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const $t=He[4];$t!=null&&(E.Aa=$t,E.j.info("SVER="+E.Aa));const Ci=He[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(x=1.5*Ci,E.L=x,E.j.info("backChannelRequestTimeoutMs_="+x)),x=E;const hn=h.g;if(hn){const Hr=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var Z=x.h;Z.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(_o(Z,Z.h),Z.h=null))}if(x.D){const ru=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;ru&&(x.ya=ru,at(x.I,x.D,ru))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),x=E;var he=h;if(x.qa=ih(x,x.J?x.ia:null,x.W),he.K){On(x.h,he);var $e=he,Ft=x.L;Ft&&($e.I=Ft),$e.B&&(fs($e),fa($e)),x.g=he}else eh(x);0<E.i.length&&Ao(E)}else He[0]!="stop"&&He[0]!="close"||Ri(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Ri(E,7):Jl(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}tr(4)}catch{}}var Yc=class{constructor(h,y){this.g=h,this.map=y}};function bi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function go(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function yo(h){return h.h?1:h.g?h.g.size:0}function Hl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function _o(h,y){h.g?h.g.add(y):h.h=y}function On(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}bi.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Gl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return q(h.i)}function Yd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,x=0;x<E;x++)y.push(h[x]);return y}y=[],E=0;for(x in h)y[E++]=h[x];return y}function vo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const x in h)y[E++]=x;return y}}}function Yl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=vo(h),x=Yd(h),Y=x.length,Z=0;Z<Y;Z++)y.call(void 0,x[Z],E&&E[Z],h)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wd(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var x=h[E].indexOf("="),Y=null;if(0<=x){var Z=h[E].substring(0,x);Y=h[E].substring(x+1)}else Z=h[E];y(Z,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Nt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Nt){this.h=h.h,ma(this,h.j),this.o=h.o,this.g=h.g,ds(this,h.s),this.l=h.l;var y=h.i,E=new wi;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Ti(this,E),this.m=h.m}else h&&(y=String(h).match(pa))?(this.h=!1,ma(this,y[1]||"",!0),this.o=rr(y[2]||""),this.g=rr(y[3]||"",!0),ds(this,y[4]),this.l=rr(y[5]||"",!0),Ti(this,y[6]||"",!0),this.m=rr(y[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Nt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ya(y,Wl,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ya(y,Wl,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ya(E,E.charAt(0)=="/"?Qd:Ql,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ya(E,Eo)),h.join("")};function Fn(h){return new Nt(h)}function ma(h,y,E){h.j=E?rr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function ds(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Ti(h,y,E){y instanceof wi?(h.i=y,Qc(h.i,h.h)):(E||(y=ya(y,Kd)),h.i=new wi(y,h.h))}function at(h,y,E){h.i.set(y,E)}function ga(h){return at(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function rr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ya(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,Wc),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Wc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Wl=/[#\/\?@]/g,Ql=/[#\?:]/g,Qd=/[#\?]/g,Kd=/[#\?@]/g,Eo=/#/g;function wi(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function ir(h){h.g||(h.g=new Map,h.h=0,h.i&&Wd(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}t=wi.prototype,t.add=function(h,y){ir(this),this.i=null,h=Ur(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Si(h,y){ir(h),y=Ur(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function xi(h,y){return ir(h),y=Ur(h,y),h.g.has(y)}t.forEach=function(h,y){ir(this),this.g.forEach(function(E,x){E.forEach(function(Y){h.call(y,Y,x,this)},this)},this)},t.na=function(){ir(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let x=0;x<y.length;x++){const Y=h[x];for(let Z=0;Z<Y.length;Z++)E.push(y[x])}return E},t.V=function(h){ir(this);let y=[];if(typeof h=="string")xi(this,h)&&(y=y.concat(this.g.get(Ur(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},t.set=function(h,y){return ir(this),this.i=null,h=Ur(this,h),xi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Kl(h,y,E){Si(h,y),0<E.length&&(h.i=null,h.g.set(Ur(h,y),q(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var x=y[E];const Z=encodeURIComponent(String(x)),he=this.V(x);for(x=0;x<he.length;x++){var Y=Z;he[x]!==""&&(Y+="="+encodeURIComponent(String(he[x]))),h.push(Y)}}return this.i=h.join("&")};function Ur(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function Qc(h,y){y&&!h.j&&(ir(h),h.i=null,h.g.forEach(function(E,x){var Y=x.toLowerCase();x!=Y&&(Si(this,x),Kl(this,Y,E))},h)),h.j=y}function _a(h,y){const E=new nr;if(d.Image){const x=new Image;x.onload=C(sr,E,"TestLoadImage: loaded",!0,y,x),x.onerror=C(sr,E,"TestLoadImage: error",!1,y,x),x.onabort=C(sr,E,"TestLoadImage: abort",!1,y,x),x.ontimeout=C(sr,E,"TestLoadImage: timeout",!1,y,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else y(!1)}function vr(h,y){const E=new nr,x=new AbortController,Y=setTimeout(()=>{x.abort(),sr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:x.signal}).then(Z=>{clearTimeout(Y),Z.ok?sr(E,"TestPingServer: ok",!0,y):sr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(Y),sr(E,"TestPingServer: error",!1,y)})}function sr(h,y,E,x,Y){try{Y&&(Y.onload=null,Y.onerror=null,Y.onabort=null,Y.ontimeout=null),x(E)}catch{}}function va(){this.g=new _i}function qr(h,y,E){const x=E||"";try{Yl(h,function(Y,Z){let he=Y;g(Y)&&(he=zn(Y)),y.push(x+Z+"="+encodeURIComponent(he))})}catch(Y){throw y.push(x+"type="+encodeURIComponent("_badmap")),Y}}function ps(h){this.l=h.Ub||null,this.j=h.eb||!1}D(ps,os),ps.prototype.g=function(){return new Ai(this.l,this.j)},ps.prototype.i=function(h){return function(){return h}}({});function Ai(h,y){_t.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ai,_t),t=Ai.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,zr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Br(this):zr(this),this.readyState==3&&Xl(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Br(this))},t.Qa=function(h){this.g&&(this.response=h,Br(this))},t.ga=function(){this.g&&Br(this)};function Br(h){h.readyState=4,h.l=null,h.j=null,h.v=null,zr(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function zr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Zl(h){let y="";return J(h,function(E,x){y+=x,y+=":",y+=E,y+=`\r
`}),y}function Jt(h,y,E){e:{for(x in E){var x=!1;break e}x=!0}x||(E=Zl(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):at(h,y,E))}function et(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,_t);var bo=/^https?$/i,Ea=["POST","PUT"];t=et.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,E,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vr.g(),this.v=this.o?Oe(this.o):Oe(Vr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(Z){Kc(this,Z);return}if(h=E||"",E=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var Y in x)E.set(Y,x[Y]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const Z of x.keys())E.set(Z,x.get(Z));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(E.keys()).find(Z=>Z.toLowerCase()=="content-type"),Y=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ea,y,void 0))||x||Y||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,he]of E)this.g.setRequestHeader(Z,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ba(this),this.u=!0,this.g.send(h),this.u=!1}catch(Z){Kc(this,Z)}};function Kc(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,To(h),Fr(h)}function To(h){h.A||(h.A=!0,Xe(h,"complete"),Xe(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Xe(this,"complete"),Xe(this,"abort"),Fr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wo(this):this.bb())},t.bb=function(){wo(this)};function wo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ar(h)!=4||h.Z()!=2)){if(h.u&&ar(h)==4)Xt(h.Ea,0,h);else if(Xe(h,"readystatechange"),ar(h)==4){h.h=!1;try{const he=h.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var x;if(x=he===0){var Y=String(h.D).match(pa)[1]||null;!Y&&d.self&&d.self.location&&(Y=d.self.location.protocol.slice(0,-1)),x=!bo.test(Y?Y.toLowerCase():"")}E=x}if(E)Xe(h,"complete"),Xe(h,"success");else{h.m=6;try{var Z=2<ar(h)?h.g.statusText:""}catch{Z=""}h.l=Z+" ["+h.Z()+"]",To(h)}}finally{Fr(h)}}}}function Fr(h,y){if(h.g){ba(h);const E=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Xe(h,"ready");try{E.onreadystatechange=x}catch{}}}function ba(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function ar(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),yi(y)}};function Xc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Xd(h){const y={};h=(h.g&&2<=ar(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if(j(h[x]))continue;var E=U(h[x]);const Y=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Z=y[Y]||[];y[Y]=Z,Z.push(E)}A(y,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ta(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function So(h){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ta("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ta("baseRetryDelayMs",5e3,h),this.cb=Ta("retryDelaySeedMs",1e4,h),this.Wa=Ta("forwardChannelMaxRetries",2,h),this.wa=Ta("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(h&&h.concurrentRequestLimit),this.Da=new va,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=So.prototype,t.la=8,t.G=1,t.connect=function(h,y,E,x){vt(0),this.W=h,this.H=y||{},E&&x!==void 0&&(this.H.OSID=E,this.H.OAID=x),this.F=this.X,this.I=ih(this,null,this.W),Ao(this)};function Jl(h){if(Zc(h),h.G==3){var y=h.U++,E=Fn(h.I);if(at(E,"SID",h.K),at(E,"RID",y),at(E,"TYPE","terminate"),wa(h,E),y=new kn(h,h.j,y),y.L=2,y.v=ga(Fn(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=sh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),fa(y)}rh(h)}function xo(h){h.g&&(Sa(h),h.g.cancel(),h.g=null)}function Zc(h){xo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ro(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ao(h){if(!go(h.h)&&!h.s){h.s=!0;var y=h.Ga;ce||L(),pe||(ce(),pe=!0),Te.add(y,h),h.B=0}}function Zd(h,y){return yo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Mt(w(h.Ga,h,y),nu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Y=new kn(this,this.j,h);let Z=this.o;if(this.S&&(Z?(Z=R(Z),V(Z,this.S)):Z=this.S),this.m!==null||this.O||(Y.H=Z,Z=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var x=this.i[E];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(y+=x,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Jc(this,Y,y),E=Fn(this.I),at(E,"RID",h),at(E,"CVER",22),this.D&&at(E,"X-HTTP-Session-Id",this.D),wa(this,E),Z&&(this.O?y="headers="+encodeURIComponent(String(Zl(Z)))+"&"+y:this.m&&Jt(E,this.m,Z)),_o(this.h,Y),this.Ua&&at(E,"TYPE","init"),this.P?(at(E,"$req",y),at(E,"SID","null"),Y.T=!0,_r(Y,E,null)):_r(Y,E,y),this.G=2}}else this.G==3&&(h?eu(this,h):this.i.length==0||go(this.h)||eu(this))};function eu(h,y){var E;y?E=y.l:E=h.U++;const x=Fn(h.I);at(x,"SID",h.K),at(x,"RID",E),at(x,"AID",h.T),wa(h,x),h.m&&h.o&&Jt(x,h.m,h.o),E=new kn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=Jc(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),_o(h.h,E),_r(E,x,y)}function wa(h,y){h.H&&J(h.H,function(E,x){at(y,x,E)}),h.l&&Yl({},function(E,x){at(y,x,E)})}function Jc(h,y,E){E=Math.min(h.i.length,E);var x=h.l?w(h.l.Na,h.l,h):null;e:{var Y=h.i;let Z=-1;for(;;){const he=["count="+E];Z==-1?0<E?(Z=Y[0].g,he.push("ofs="+Z)):Z=0:he.push("ofs="+Z);let $e=!0;for(let Ft=0;Ft<E;Ft++){let He=Y[Ft].g;const en=Y[Ft].map;if(He-=Z,0>He)Z=Math.max(0,Y[Ft].g-100),$e=!1;else try{qr(en,he,"req"+He+"_")}catch{x&&x(en)}}if($e){x=he.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,x}function eh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;ce||L(),pe||(ce(),pe=!0),Te.add(y,h),h.v=0}}function tu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Mt(w(h.Fa,h),nu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,th(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Mt(w(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),xo(this),th(this))};function Sa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function th(h){h.g=new kn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Fn(h.qa);at(y,"RID","rpc"),at(y,"SID",h.K),at(y,"AID",h.T),at(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&at(y,"TO",h.ja),at(y,"TYPE","xmlhttp"),wa(h,y),h.m&&h.o&&Jt(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=ga(Fn(y)),E.m=null,E.P=!0,Ei(E,h)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),tu(this),vt(19))};function Ro(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function nh(h,y){var E=null;if(h.g==y){Ro(h),Sa(h),h.g=null;var x=2}else if(Hl(h.h,y))E=y.D,On(h.h,y),x=1;else return;if(h.G!=0){if(y.o)if(x==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var Y=h.B;x=Pr(),Xe(x,new zt(x,E)),Ao(h)}else eh(h);else if(Y=y.s,Y==3||Y==0&&0<y.X||!(x==1&&Zd(h,y)||x==2&&tu(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),Y){case 1:Ri(h,5);break;case 4:Ri(h,10);break;case 3:Ri(h,6);break;default:Ri(h,2)}}}function nu(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Ri(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),x=h.Xa;const Y=!x;x=new Nt(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ma(x,"https"),ga(x),Y?_a(x.toString(),E):vr(x.toString(),E)}else vt(2);h.G=0,h.l&&h.l.sa(y),rh(h),Zc(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function rh(h){if(h.G=0,h.ka=[],h.l){const y=Gl(h.h);(y.length!=0||h.i.length!=0)&&(k(h.ka,y),k(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function ih(h,y,E){var x=E instanceof Nt?Fn(E):new Nt(E);if(x.g!="")y&&(x.g=y+"."+x.g),ds(x,x.s);else{var Y=d.location;x=Y.protocol,y=y?y+"."+Y.hostname:Y.hostname,Y=+Y.port;var Z=new Nt(null);x&&ma(Z,x),y&&(Z.g=y),Y&&ds(Z,Y),E&&(Z.l=E),x=Z}return E=h.D,y=h.ya,E&&y&&at(x,E,y),at(x,"VER",h.la),wa(h,x),x}function sh(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new et(new ps({eb:E})):new et(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ah(){}t=ah.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Co(){}Co.prototype.g=function(h,y){return new Mn(h,y)};function Mn(h,y){_t.call(this),this.g=new So(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!j(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!j(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new $r(this)}D(Mn,_t),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){Jl(this.g)},Mn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=zn(h),h=E);y.i.push(new Yc(y.Ya++,h)),y.G==3&&Ao(y)},Mn.prototype.N=function(){this.g.l=null,delete this.j,Jl(this.g),delete this.g,Mn.aa.N.call(this)};function oh(h){We.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}D(oh,We);function lh(){Zt.call(this),this.status=1}D(lh,Zt);function $r(h){this.g=h}D($r,ah),$r.prototype.ua=function(){Xe(this.g,"a")},$r.prototype.ta=function(h){Xe(this.g,new oh(h))},$r.prototype.sa=function(h){Xe(this.g,new lh)},$r.prototype.ra=function(){Xe(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,H1=function(){return new Co},$1=function(){return Pr()},F1=Me,jg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Nf=hs,vi.COMPLETE="complete",z1=vi,Je.EventType=xe,xe.OPEN="a",xe.CLOSE="b",xe.ERROR="c",xe.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Xu=Je,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,B1=et}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const Ob="@firebase/firestore",Mb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const no=new gy("@firebase/firestore");function sl(){return no.logLevel}function me(t,...e){if(no.logLevel<=qe.DEBUG){const n=e.map(Ry);no.debug(`Firestore (${Pl}): ${t}`,...n)}}function ts(t,...e){if(no.logLevel<=qe.ERROR){const n=e.map(Ry);no.error(`Firestore (${Pl}): ${t}`,...n)}}function bl(t,...e){if(no.logLevel<=qe.WARN){const n=e.map(Ry);no.warn(`Firestore (${Pl}): ${t}`,...n)}}function Ry(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Re(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,G1(t,i,n)}function G1(t,e,n){let i=`FIRESTORE (${Pl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ts(i),new Error(i)}function nt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||G1(e,a,i)}function ke(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rn.UNAUTHENTICATED))}shutdown(){}}class hN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fN{constructor(e){this.t=e,this.currentUser=Rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){nt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ki,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ki)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(nt(typeof i.accessToken=="string",31837,{l:i}),new Y1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string",2055,{h:e}),new Rn(e)}}class dN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new dN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){nt(this.o===void 0,3512);const i=l=>{l.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,me("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=gN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function Be(t,e){return t<e?-1:t>e?1:0}function Ug(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return lg(a)===lg(l)?Be(a,l):lg(a)?1:-1}return Be(t.length,e.length)}const yN=55296,_N=57343;function lg(t){const e=t.charCodeAt(0);return e>=yN&&e<=_N}function Tl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="__name__";class Jr{constructor(e,n,i){n===void 0?n=0:n>e.length&&Re(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Re(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Jr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=Jr.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return Be(e.length,n.length)}static compareSegments(e,n){const i=Jr.isNumericId(e),a=Jr.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?Jr.extractNumericId(e).compare(Jr.extractNumericId(n)):Ug(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ws.fromString(e.substring(4,e.length-2))}}class mt extends Jr{construct(e,n,i){return new mt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new de(ie.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const vN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yn extends Jr{construct(e,n,i){return new yn(e,n,i)}static isValidIdentifier(e){return vN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pb}static keyField(){return new yn([Pb])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new de(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new de(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new de(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yn(n)}static emptyPath(){return new yn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(mt.fromString(e))}static fromName(e){return new be(mt.fromString(e).popFirst(5))}static empty(){return new be(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new mt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e,n){if(!n)throw new de(ie.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EN(t,e,n,i){if(e===!0&&i===!0)throw new de(ie.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vb(t){if(!be.isDocumentKey(t))throw new de(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lb(t){if(be.isDocumentKey(t))throw new de(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Q1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Re(12329,{type:typeof t})}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(t);throw new de(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function qt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Nc(t,e){if(!Q1(t))throw new de(ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new de(ie.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=-62135596800,Ub=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Ub);return new ft(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jb)throw new de(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ub}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nc(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:qt("string",ft._jsonSchemaVersion),seconds:qt("number"),nanoseconds:qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new ft(0,0))}static max(){return new De(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const mc=-1;function bN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=De.fromTimestamp(i===1e9?new ft(n+1,0):new ft(n,i));return new Ks(a,be.empty(),e)}function TN(t){return new Ks(t.readTime,t.key,mc)}class Ks{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ks(De.min(),be.empty(),mc)}static max(){return new Ks(De.max(),be.empty(),mc)}}function wN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:Be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){if(t.code!==ie.FAILED_PRECONDITION||t.message!==SN)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new oe((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof oe?n:oe.resolve(n)}catch(n){return oe.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):oe.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):oe.reject(n)}static resolve(e){return new oe((n,i)=>{n(e)})}static reject(e){return new oe((n,i)=>{i(e)})}static waitFor(e){return new oe((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=oe.resolve(!1);for(const i of e)n=n.next(a=>a?oe.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new oe((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new oe((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function AN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=-1;function xd(t){return t==null}function Jf(t){return t===0&&1/t==-1/0}function RN(t){return typeof t=="number"&&Number.isInteger(t)&&!Jf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="";function CN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qb(e)),e=IN(t.get(n),e);return qb(e)}function IN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case K1:n+="";break;default:n+=l}}return n}function qb(t){return t+K1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||gn.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mf(this.root,e,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mf(this.root,e,this.comparator,!0)}}class mf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??gn.RED,this.left=a??gn.EMPTY,this.right=l??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new gn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Re(27949);return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw Re(57766)}get value(){throw Re(16141)}get color(){throw Re(16727)}get left(){throw Re(29726)}get right(){throw Re(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new gn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zb(this.data.getIterator())}getIteratorFrom(e){return new zb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Wt(this.comparator);return n.data=e,n}}class zb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(yn.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new Wt(yn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Z1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Z1("Invalid base64 string: "+l):l}}(e);return new _n(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new _n(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const DN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(t){if(nt(!!t,39018),typeof t=="string"){let e=0;const n=DN.exec(t);if(nt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ot(t.seconds),nanos:Ot(t.nanos)}}function Ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zs(t){return typeof t=="string"?_n.fromBase64String(t):_n.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="server_timestamp",eS="__type__",tS="__previous_value__",nS="__local_write_time__";function Dy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[eS])==null?void 0:i.stringValue)===J1}function Ad(t){const e=t.mapValue.fields[tS];return Dy(e)?Ad(e):e}function gc(t){const e=Xs(t.mapValue.fields[nS].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const ed="(default)";class yc{constructor(e,n){this.projectId=e,this.database=n||ed}static empty(){return new yc("","")}get isDefaultDatabase(){return this.database===ed}isEqual(e){return e instanceof yc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="__type__",ON="__max__",gf={mapValue:{}},iS="__vector__",td="value";function Js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dy(t)?4:NN(t)?9007199254740991:MN(t)?10:11:Re(28295,{value:t})}function li(t,e){if(t===e)return!0;const n=Js(t);if(n!==Js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gc(t).isEqual(gc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Xs(a.timestampValue),d=Xs(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return Zs(a.bytesValue).isEqual(Zs(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ot(a.doubleValue),d=Ot(l.doubleValue);return c===d?Jf(c)===Jf(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Tl(t.arrayValue.values||[],e.arrayValue.values||[],li);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(Bb(c)!==Bb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!li(c[p],d[p])))return!1;return!0}(t,e);default:return Re(52216,{left:t})}}function _c(t,e){return(t.values||[]).find(n=>li(n,e))!==void 0}function wl(t,e){if(t===e)return 0;const n=Js(t),i=Js(e);if(n!==i)return Be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Be(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Ot(l.integerValue||l.doubleValue),p=Ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return Fb(t.timestampValue,e.timestampValue);case 4:return Fb(gc(t),gc(e));case 5:return Ug(t.stringValue,e.stringValue);case 6:return function(l,c){const d=Zs(l),p=Zs(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Be(d[g],p[g]);if(v!==0)return v}return Be(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Be(Ot(l.latitude),Ot(c.latitude));return d!==0?d:Be(Ot(l.longitude),Ot(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $b(t.arrayValue,e.arrayValue);case 10:return function(l,c){var w,C,D,q;const d=l.fields||{},p=c.fields||{},g=(w=d[td])==null?void 0:w.arrayValue,v=(C=p[td])==null?void 0:C.arrayValue,T=Be(((D=g==null?void 0:g.values)==null?void 0:D.length)||0,((q=v==null?void 0:v.values)==null?void 0:q.length)||0);return T!==0?T:$b(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===gf.mapValue&&c===gf.mapValue)return 0;if(l===gf.mapValue)return 1;if(c===gf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=Ug(p[T],v[T]);if(w!==0)return w;const C=wl(d[p[T]],g[v[T]]);if(C!==0)return C}return Be(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Re(23264,{he:n})}}function Fb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Be(t,e);const n=Xs(t),i=Xs(e),a=Be(n.seconds,i.seconds);return a!==0?a:Be(n.nanos,i.nanos)}function $b(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=wl(n[a],i[a]);if(l)return l}return Be(n.length,i.length)}function Sl(t){return qg(t)}function qg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Xs(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return be.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=qg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${qg(n.fields[c])}`;return a+"}"}(t.mapValue):Re(61005,{value:t})}function Pf(t){switch(Js(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ad(t);return e?16+Pf(e):16;case 5:return 2*t.stringValue.length;case 6:return Zs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Pf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return sa(i.fields,(l,c)=>{a+=l.length+Pf(c)}),a}(t.mapValue);default:throw Re(13486,{value:t})}}function Hb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bg(t){return!!t&&"integerValue"in t}function ky(t){return!!t&&"arrayValue"in t}function Gb(t){return!!t&&"nullValue"in t}function Yb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vf(t){return!!t&&"mapValue"in t}function MN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[rS])==null?void 0:i.stringValue)===iS}function sc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return sa(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=sc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sc(t.arrayValue.values[n]);return e}return{...t}}function NN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ON}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Vf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sc(n)}setAll(e){let n=yn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=sc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Vf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return li(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Vf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){sa(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Bn(sc(this.value))}}function sS(t){const e=[];return sa(t.fields,(n,i)=>{const a=new yn([n]);if(Vf(i)){const l=sS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Cn(e,0,De.min(),De.min(),De.min(),Bn.empty(),0)}static newFoundDocument(e,n,i,a){return new Cn(e,1,n,De.min(),i,a,0)}static newNoDocument(e,n){return new Cn(e,2,n,De.min(),De.min(),Bn.empty(),0)}static newUnknownDocument(e,n){return new Cn(e,3,n,De.min(),De.min(),Bn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(e,n){this.position=e,this.inclusive=n}}function Wb(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=be.comparator(be.fromName(c.referenceValue),n.key):i=wl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!li(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vc{constructor(e,n="asc"){this.field=e,this.dir=n}}function PN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class aS{}class Ut extends aS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new LN(e,n,i):n==="array-contains"?new qN(e,i):n==="in"?new BN(e,i):n==="not-in"?new zN(e,i):n==="array-contains-any"?new FN(e,i):new Ut(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new jN(e,i):new UN(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(wl(n,this.value)):n!==null&&Js(this.value)===Js(n)&&this.matchesComparison(wl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends aS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new kr(e,n)}matches(e){return oS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oS(t){return t.op==="and"}function lS(t){return VN(t)&&oS(t)}function VN(t){for(const e of t.filters)if(e instanceof kr)return!1;return!0}function zg(t){if(t instanceof Ut)return t.field.canonicalString()+t.op.toString()+Sl(t.value);if(lS(t))return t.filters.map(e=>zg(e)).join(",");{const e=t.filters.map(n=>zg(n)).join(",");return`${t.op}(${e})`}}function uS(t,e){return t instanceof Ut?function(i,a){return a instanceof Ut&&i.op===a.op&&i.field.isEqual(a.field)&&li(i.value,a.value)}(t,e):t instanceof kr?function(i,a){return a instanceof kr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&uS(c,a.filters[d]),!0):!1}(t,e):void Re(19439)}function cS(t){return t instanceof Ut?function(n){return`${n.field.canonicalString()} ${n.op} ${Sl(n.value)}`}(t):t instanceof kr?function(n){return n.op.toString()+" {"+n.getFilters().map(cS).join(" ,")+"}"}(t):"Filter"}class LN extends Ut{constructor(e,n,i){super(e,n,i),this.key=be.fromName(i.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.matchesComparison(n)}}class jN extends Ut{constructor(e,n){super(e,"in",n),this.keys=hS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends Ut{constructor(e,n){super(e,"not-in",n),this.keys=hS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>be.fromName(i.referenceValue))}class qN extends Ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ky(n)&&_c(n.arrayValue,this.value)}}class BN extends Ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_c(this.value.arrayValue,n)}}class zN extends Ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(_c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_c(this.value.arrayValue,n)}}class FN extends Ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ky(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>_c(this.value.arrayValue,i))}}/**
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
 */class $N{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function Kb(t,e=null,n=[],i=[],a=null,l=null,c=null){return new $N(t,e,n,i,a,l,c)}function Oy(t){const e=ke(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>zg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Sl(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Sl(i)).join(",")),e.Te=n}return e.Te}function My(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qb(t.startAt,e.startAt)&&Qb(t.endAt,e.endAt)}function Fg(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HN(t,e,n,i,a,l,c,d){return new jl(t,e,n,i,a,l,c,d)}function Rd(t){return new jl(t)}function Xb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fS(t){return t.collectionGroup!==null}function ac(t){const e=ke(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Wt(yn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new vc(l,i))}),n.has(yn.keyField().canonicalString())||e.Ie.push(new vc(yn.keyField(),i))}return e.Ie}function ii(t){const e=ke(t);return e.Ee||(e.Ee=GN(e,ac(t))),e.Ee}function GN(t,e){if(t.limitType==="F")return Kb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new vc(a.field,l)});const n=t.endAt?new nd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nd(t.startAt.position,t.startAt.inclusive):null;return Kb(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function $g(t,e){const n=t.filters.concat([e]);return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hg(t,e,n){return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cd(t,e){return My(ii(t),ii(e))&&t.limitType===e.limitType}function dS(t){return`${Oy(ii(t))}|lt:${t.limitType}`}function al(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>cS(a)).join(", ")}]`),xd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Sl(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Sl(a)).join(",")),`Target(${i})`}(ii(t))}; limitType=${t.limitType})`}function Id(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):be.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of ac(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=Wb(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,ac(i),a)||i.endAt&&!function(c,d,p){const g=Wb(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,ac(i),a))}(t,e)}function YN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pS(t){return(e,n)=>{let i=!1;for(const a of ac(t)){const l=WN(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function WN(t,e,n){const i=t.field.isKeyField()?be.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?wl(p,g):Re(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Re(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){sa(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return X1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new xt(be.comparator);function ns(){return QN}const mS=new xt(be.comparator);function Zu(...t){let e=mS;for(const n of t)e=e.insert(n.key,n);return e}function gS(t){let e=mS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function $a(){return oc()}function yS(){return oc()}function oc(){return new lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new xt(be.comparator),XN=new Wt(be.comparator);function ze(...t){let e=XN;for(const n of t)e=e.add(n);return e}const ZN=new Wt(Be);function JN(){return ZN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jf(e)?"-0":e}}function _S(t){return{integerValue:""+t}}function e2(t,e){return RN(e)?_S(e):Ny(t,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function t2(t,e,n){return t instanceof Ec?function(a,l){const c={fields:{[eS]:{stringValue:J1},[nS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Dy(l)&&(l=Ad(l)),l&&(c.fields[tS]=l),{mapValue:c}}(n,e):t instanceof bc?ES(t,e):t instanceof Tc?bS(t,e):function(a,l){const c=vS(a,l),d=Zb(c)+Zb(a.Ae);return Bg(c)&&Bg(a.Ae)?_S(d):Ny(a.serializer,d)}(t,e)}function n2(t,e,n){return t instanceof bc?ES(t,e):t instanceof Tc?bS(t,e):n}function vS(t,e){return t instanceof rd?function(i){return Bg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Ec extends Dd{}class bc extends Dd{constructor(e){super(),this.elements=e}}function ES(t,e){const n=TS(e);for(const i of t.elements)n.some(a=>li(a,i))||n.push(i);return{arrayValue:{values:n}}}class Tc extends Dd{constructor(e){super(),this.elements=e}}function bS(t,e){let n=TS(e);for(const i of t.elements)n=n.filter(a=>!li(a,i));return{arrayValue:{values:n}}}class rd extends Dd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Zb(t){return Ot(t.integerValue||t.doubleValue)}function TS(t){return ky(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n){this.field=e,this.transform=n}}function i2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof bc&&a instanceof bc||i instanceof Tc&&a instanceof Tc?Tl(i.elements,a.elements,li):i instanceof rd&&a instanceof rd?li(i.Ae,a.Ae):i instanceof Ec&&a instanceof Ec}(t.transform,e.transform)}class s2{constructor(e,n){this.version=e,this.transformResults=n}}class Rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kd{}function wS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xS(t.key,Rr.none()):new Pc(t.key,t.data,Rr.none());{const n=t.data,i=Bn.empty();let a=new Wt(yn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new aa(t.key,i,new Jn(a.toArray()),Rr.none())}}function a2(t,e,n){t instanceof Pc?function(a,l,c){const d=a.value.clone(),p=eT(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof aa?function(a,l,c){if(!Lf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=eT(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(SS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function lc(t,e,n,i){return t instanceof Pc?function(l,c,d,p){if(!Lf(l.precondition,c))return d;const g=l.value.clone(),v=tT(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof aa?function(l,c,d,p){if(!Lf(l.precondition,c))return d;const g=tT(l.fieldTransforms,p,c),v=c.data;return v.setAll(SS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(t,e,n,i):function(l,c,d){return Lf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function o2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=vS(i.transform,a||null);l!=null&&(n===null&&(n=Bn.empty()),n.set(i.field,l))}return n||null}function Jb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Tl(i,a,(l,c)=>i2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pc extends kd{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class aa extends kd{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function SS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function eT(t,e,n){const i=new Map;nt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,n2(c,d,n[a]))}return i}function tT(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,t2(l,c,e))}return i}class xS extends kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l2 extends kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&a2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=lc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=lc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=yS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=wS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(De.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ze())}isEqual(e){return this.batchId===e.batchId&&Tl(this.mutations,e.mutations,(n,i)=>Jb(n,i))&&Tl(this.baseMutations,e.baseMutations,(n,i)=>Jb(n,i))}}class Py{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){nt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return KN}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new Py(e,n,i,a)}}/**
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
 */class c2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,Ye;function f2(t){switch(t){case ie.OK:return Re(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Re(15467,{code:t})}}function AS(t){if(t===void 0)return ts("GRPC error has no .code"),ie.UNKNOWN;switch(t){case Lt.OK:return ie.OK;case Lt.CANCELLED:return ie.CANCELLED;case Lt.UNKNOWN:return ie.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return ie.INTERNAL;case Lt.UNAVAILABLE:return ie.UNAVAILABLE;case Lt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Lt.NOT_FOUND:return ie.NOT_FOUND;case Lt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Lt.ABORTED:return ie.ABORTED;case Lt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Lt.DATA_LOSS:return ie.DATA_LOSS;default:return Re(39323,{code:t})}}(Ye=Lt||(Lt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d2(){return new TextEncoder}/**
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
 */const p2=new Ws([4294967295,4294967295],0);function nT(t){const e=d2().encode(t),n=new q1;return n.update(e),new Uint8Array(n.digest())}function rT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ws([n,i],0),new Ws([a,l],0)]}class Vy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ju(`Invalid padding: ${n}`);if(i<0)throw new Ju(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ju(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Ju(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ws.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(Ws.fromNumber(i)));return a.compare(p2)===1&&(a=new Ws([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=nT(e),[i,a]=rT(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Vy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=nT(e),[i,a]=rT(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Ju extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Vc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Od(De.min(),a,new xt(Be),ns(),ze())}}class Vc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Vc(i,n,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class RS{constructor(e,n){this.targetId=e,this.Ce=n}}class CS{constructor(e,n,i=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class iT{constructor(){this.ve=0,this.Fe=sT(),this.Me=_n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),n=ze(),i=ze();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Re(38017,{changeType:l})}}),new Vc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=sT()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class m2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ns(),this.Je=yf(),this.He=yf(),this.Ye=new xt(Be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(Fg(l))if(i===0){const c=new be(l.path);this.et(n,c,Cn.newNoDocument(c,De.min()))}else nt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=Zs(i).toUint8Array()}catch(p){if(p instanceof Z1)return bl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Vy(c,a,l)}catch(p){return bl(p instanceof Ju?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Fg(d.target)){const p=new be(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Cn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=ze();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new Od(e,n,this.Ye,this.je,i);return this.je=ns(),this.Je=yf(),this.He=yf(),this.Ye=new xt(Be),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new iT,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Wt(Be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Wt(Be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||me("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new iT),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function yf(){return new xt(be.comparator)}function sT(){return new xt(be.comparator)}const g2={asc:"ASCENDING",desc:"DESCENDING"},y2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_2={and:"AND",or:"OR"};class v2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gg(t,e){return t.useProto3Json||xd(e)?e:{value:e}}function id(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E2(t,e){return id(t,e.toTimestamp())}function si(t){return nt(!!t,49232),De.fromTimestamp(function(n){const i=Xs(n);return new ft(i.seconds,i.nanos)}(t))}function Ly(t,e){return Yg(t,e).canonicalString()}function Yg(t,e){const n=function(a){return new mt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DS(t){const e=mt.fromString(t);return nt(PS(e),10190,{key:e.toString()}),e}function Wg(t,e){return Ly(t.databaseId,e.path)}function ug(t,e){const n=DS(e);if(n.get(1)!==t.databaseId.projectId)throw new de(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new de(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(OS(n))}function kS(t,e){return Ly(t.databaseId,e)}function b2(t){const e=DS(t);return e.length===4?mt.emptyPath():OS(e)}function Qg(t){return new mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OS(t){return nt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function aT(t,e,n){return{name:Wg(t,e),fields:n.value.mapValue.fields}}function T2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Re(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(nt(v===void 0||typeof v=="string",58123),_n.fromBase64String(v||"")):(nt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),_n.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?ie.UNKNOWN:AS(g.code);return new de(v,g.message||"")}(c);n=new CS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=ug(t,i.document.name),l=si(i.document.updateTime),c=i.document.createTime?si(i.document.createTime):De.min(),d=new Bn({mapValue:{fields:i.document.fields}}),p=Cn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new jf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=ug(t,i.document),l=i.readTime?si(i.readTime):De.min(),c=Cn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new jf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=ug(t,i.document),l=i.removedTargetIds||[];n=new jf([],l,a,null)}else{if(!("filter"in e))return Re(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new h2(a,l),d=i.targetId;n=new RS(d,c)}}return n}function w2(t,e){let n;if(e instanceof Pc)n={update:aT(t,e.key,e.value)};else if(e instanceof xS)n={delete:Wg(t,e.key)};else if(e instanceof aa)n={update:aT(t,e.key,e.data),updateMask:O2(e.fieldMask)};else{if(!(e instanceof l2))return Re(16599,{Vt:e.type});n={verify:Wg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Ec)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof bc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Tc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof rd)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Re(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:E2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Re(27497)}(t,e.precondition)),n}function S2(t,e){return t&&t.length>0?(nt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?si(a.updateTime):si(l);return c.isEqual(De.min())&&(c=si(l)),new s2(c,a.transformResults||[])}(n,e))):[]}function x2(t,e){return{documents:[kS(t,e.path)]}}function A2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=kS(t,a);const l=function(g){if(g.length!==0)return NS(kr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(w){return{field:ol(w.field),direction:I2(w.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=Gg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function R2(t){let e=b2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){nt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(T){const w=MS(T);return w instanceof kr&&lS(w)?w.getFilters():[w]}(n.where));let c=[];n.orderBy&&(c=function(T){return T.map(w=>function(D){return new vc(ll(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(n.orderBy));let d=null;n.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,xd(w)?null:w}(n.limit));let p=null;n.startAt&&(p=function(T){const w=!!T.before,C=T.values||[];return new nd(C,w)}(n.startAt));let g=null;return n.endAt&&(g=function(T){const w=!T.before,C=T.values||[];return new nd(C,w)}(n.endAt)),HN(e,a,c,l,d,"F",p,g)}function C2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function MS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ll(n.unaryFilter.field);return Ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=ll(n.unaryFilter.field);return Ut.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ll(n.unaryFilter.field);return Ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ll(n.unaryFilter.field);return Ut.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Re(61313);default:return Re(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ut.create(ll(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Re(58110);default:return Re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kr.create(n.compositeFilter.filters.map(i=>MS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Re(1026)}}(n.compositeFilter.op))}(t):Re(30097,{filter:t})}function I2(t){return g2[t]}function D2(t){return y2[t]}function k2(t){return _2[t]}function ol(t){return{fieldPath:t.canonicalString()}}function ll(t){return yn.fromServerFormat(t.fieldPath)}function NS(t){return t instanceof Ut?function(n){if(n.op==="=="){if(Yb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NAN"}};if(Gb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NOT_NAN"}};if(Gb(n.value))return{unaryFilter:{field:ol(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ol(n.field),op:D2(n.op),value:n.value}}}(t):t instanceof kr?function(n){const i=n.getFilters().map(a=>NS(a));return i.length===1?i[0]:{compositeFilter:{op:k2(n.op),filters:i}}}(t):Re(54877,{filter:t})}function O2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,i,a,l=De.min(),c=De.min(),d=_n.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.yt=e}}function N2(t){const e=R2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hg(e,e.limit,"L"):e}/**
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
 */class P2{constructor(){this.Cn=new V2}addToCollectionParentIndex(e,n){return this.Cn.add(n),oe.resolve()}getCollectionParents(e,n){return oe.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return oe.resolve()}deleteFieldIndex(e,n){return oe.resolve()}deleteAllFieldIndexes(e){return oe.resolve()}createTargetIndexes(e,n){return oe.resolve()}getDocumentsMatchingTarget(e,n){return oe.resolve(null)}getIndexType(e,n){return oe.resolve(0)}getFieldIndexes(e,n){return oe.resolve([])}getNextCollectionGroupToUpdate(e){return oe.resolve(null)}getMinOffset(e,n){return oe.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return oe.resolve(Ks.min())}updateCollectionGroup(e,n,i){return oe.resolve()}updateIndexEntries(e,n){return oe.resolve()}}class V2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new Wt(mt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Wt(mt.comparator)).toArray()}}/**
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
 */const oT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VS=41943040;class qn{static withCacheSize(e){return new qn(e,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.DEFAULT_COLLECTION_PERCENTILE=10,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qn.DEFAULT=new qn(VS,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qn.DISABLED=new qn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const lT="LruGarbageCollector",L2=1048576;function uT([t,e],[n,i]){const a=Be(t,n);return a===0?Be(e,i):a}class j2{constructor(e){this.Ir=e,this.buffer=new Wt(uT),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();uT(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class U2{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){me(lT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ll(n)?me(lT,"Ignoring IndexedDB error during garbage collection: ",n):await Vl(n)}await this.Vr(3e5)})}}class q2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return oe.resolve(Sd.ce);const i=new j2(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),oe.resolve(oT)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oT):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,n))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(g=Date.now(),sl()<=qe.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),oe.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function B2(t,e){return new q2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.changes=new lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?oe.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class F2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&lc(i.mutation,a,Jn.empty(),ft.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ze()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ze()){const a=$a();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=Zu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=$a();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ze()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=ns();const c=oc(),d=function(){return oc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof aa)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),lc(v.mutation,g,v.mutation.getFieldMask(),ft.now())):c.set(g.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new F2(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=oc();let a=new xt((c,d)=>c-d),l=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||Jn.empty();v=d.applyToLocalView(g,v),i.set(p,v);const T=(a.get(d.batchId)||ze()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=yS();v.forEach(w=>{if(!l.has(w)){const C=wS(n.get(w),i.get(w));C!==null&&T.set(w,C),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return oe.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):oe.resolve($a());let d=mc,p=l;return c.next(g=>oe.forEach(g,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?oe.resolve():this.remoteDocumentCache.getEntry(e,v).next(w=>{p=p.insert(v,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,ze())).next(v=>({batchId:d,changes:gS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(i=>{let a=Zu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=Zu();return this.indexManager.getCollectionParents(e,l).next(d=>oe.forEach(d,p=>{const g=function(T,w){return new jl(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Cn.newInvalidDocument(v)))});let d=Zu();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&lc(v.mutation,g,Jn.empty(),ft.now()),Id(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return oe.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:si(a.createTime)}}(n)),oe.resolve()}getNamedQuery(e,n){return oe.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:N2(a.bundledQuery),readTime:si(a.readTime)}}(n)),oe.resolve()}}/**
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
 */class G2{constructor(){this.overlays=new xt(be.comparator),this.qr=new Map}getOverlay(e,n){return oe.resolve(this.overlays.get(n))}getOverlays(e,n){const i=$a();return oe.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),oe.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),oe.resolve()}getOverlaysForCollection(e,n,i){const a=$a(),l=n.length+1,c=new be(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return oe.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new xt((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=$a(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=$a(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return oe.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new c2(n,i));let l=this.qr.get(n);l===void 0&&(l=ze(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class Y2{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return oe.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,oe.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.Qr=new Wt(on.$r),this.Ur=new Wt(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new on(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new on(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new be(new mt([])),i=new on(n,e),a=new on(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new be(new mt([])),i=new on(n,e),a=new on(n,e+1);let l=ze();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new on(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class on{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return be.comparator(e.key,n.key)||Be(e.Yr,n.Yr)}static Kr(e,n){return Be(e.Yr,n.Yr)||be.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(on.$r)}checkEmpty(e){return oe.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new u2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return oe.resolve(c)}lookupMutationBatch(e,n){return oe.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return oe.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return oe.resolve(this.mutationQueue.length===0?Iy:this.tr-1)}getAllMutationBatches(e){return oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new on(n,0),a=new on(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),oe.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Wt(Be);return n.forEach(a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),oe.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;be.isDocumentKey(l)||(l=l.child(""));const c=new on(new be(l),0);let d=new Wt(Be);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),oe.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){nt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return oe.forEach(n.mutations,a=>{const l=new on(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new on(n,0),a=this.Zr.firstAfterOrEqual(i);return oe.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,oe.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.ri=e,this.docs=function(){return new xt(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return oe.resolve(i?i.document.mutableCopy():Cn.newInvalidDocument(n))}getEntries(e,n){let i=ns();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Cn.newInvalidDocument(a))}),oe.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=ns();const c=n.path,d=new be(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||wN(TN(v),i)<=0||(a.has(v.key)||Id(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return oe.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Re(9500)}ii(e,n){return oe.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new K2(this)}getSize(e){return oe.resolve(this.size)}}class K2 extends z2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),oe.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.persistence=e,this.si=new lo(n=>Oy(n),My),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.oi=0,this._i=new jy,this.targetCount=0,this.ai=xl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),oe.resolve()}getLastRemoteSnapshotVersion(e){return oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return oe.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),oe.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),oe.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,oe.resolve()}updateTargetData(e,n){return this.Pr(n),oe.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,oe.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),oe.waitFor(l).next(()=>a)}getTargetCount(e){return oe.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return oe.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),oe.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),oe.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),oe.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return oe.resolve(i)}containsKey(e,n){return oe.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Sd(0),this.li=!1,this.li=!0,this.hi=new Y2,this.referenceDelegate=e(this),this.Pi=new X2(this),this.indexManager=new P2,this.remoteDocumentCache=function(a){return new Q2(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new M2(n),this.Ii=new H2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new W2(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){me("MemoryPersistence","Starting transaction:",e);const a=new Z2(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return oe.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class Z2 extends xN{constructor(e){super(),this.currentSequenceNumber=e}}class Uy{constructor(e){this.persistence=e,this.Ri=new jy,this.Vi=null}static mi(e){return new Uy(e)}get fi(){if(this.Vi)return this.Vi;throw Re(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),oe.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),oe.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),oe.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oe.forEach(this.fi,i=>{const a=be.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,De.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return oe.or([()=>oe.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class sd{constructor(e,n){this.persistence=e,this.pi=new lo(i=>CN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=B2(this,n)}static mi(e,n){return new sd(e,n)}Ei(){}di(e){return oe.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return oe.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?oe.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,De.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),oe.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),oe.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),oe.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),oe.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pf(e.data.value)),n}br(e,n,i){return oe.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return oe.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=ze(),a=ze();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new qy(e,n.fromCache,i,a)}}/**
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
 */class J2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class e4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return CD()?8:AN(In())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new J2;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(sl()<=qe.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",al(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),oe.resolve()):(sl()<=qe.DEBUG&&me("QueryEngine","Query:",al(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(sl()<=qe.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",al(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ii(n))):oe.resolve())}ys(e,n){if(Xb(n))return oe.resolve(null);let i=ii(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Hg(n,null,"F"),i=ii(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=ze(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,Hg(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return Xb(n)||a.isEqual(De.min())?oe.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?oe.resolve(null):(sl()<=qe.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),al(n)),this.vs(e,c,n,bN(a,mc)).next(d=>d))})}Ds(e,n){let i=new Wt(pS(e));return n.forEach((a,l)=>{Id(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return sl()<=qe.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",al(n)),this.ps.getDocumentsMatchingQuery(e,n,Ks.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="LocalStore",t4=3e8;class n4{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new xt(Be),this.xs=new lo(l=>Oy(l),My),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function r4(t,e,n,i){return new n4(t,e,n,i)}async function jS(t,e){const n=ke(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=ze();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function i4(t,e){const n=ke(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const T=g.batch,w=T.keys();let C=oe.resolve();return w.forEach(D=>{C=C.next(()=>v.getEntry(p,D)).next(q=>{const k=g.docVersions.get(D);nt(k!==null,48541),q.version.compareTo(k)<0&&(T.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),v.addEntry(q)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ze();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function US(t){const e=ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function s4(t,e){const n=ke(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,T)=>{const w=a.get(T);if(!w)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,T).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,T)));let C=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?C=C.withResumeToken(_n.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,i)),a=a.insert(T,C),function(q,k,P){return q.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=t4?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(w,C,v)&&d.push(n.Pi.updateTargetData(l,C))});let p=ns(),g=ze();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(a4(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(De.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(T=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return oe.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function a4(t,e,n){let i=ze(),a=ze();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=ns();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(De.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):me(By,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function o4(t,e){const n=ke(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Iy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function l4(t,e){const n=ke(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,oe.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Fs(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function Kg(t,e,n){const i=ke(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ll(c))throw c;me(By,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function cT(t,e,n){const i=ke(t);let a=De.min(),l=ze();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const T=ke(p),w=T.xs.get(v);return w!==void 0?oe.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,v)}(i,c,ii(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:De.min(),n?l:ze())).next(d=>(u4(i,YN(e),d),{documents:d,Qs:l})))}function u4(t,e,n){let i=t.Os.get(e)||De.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class hT{constructor(){this.activeTargetIds=JN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c4{constructor(){this.Mo=new hT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hT,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const fT="ConnectivityMonitor";class dT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){me(fT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){me(fT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _f=null;function Xg(){return _f===null?_f=function(){return 268435456+Math.round(2147483648*Math.random())}():_f++,"0x"+_f.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="RestConnection",f4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===ed?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=Xg(),d=this.zo(e,n.toUriEncodedString());me(cg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Ol(g);return this.Jo(e,d,p,i,v).then(T=>(me(cg,`Received RPC '${e}' ${c}: `,T),T),T=>{throw bl(cg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",i),T})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=f4[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Tn="WebChannelConnection";class m4 extends d4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=Xg();return new Promise((d,p)=>{const g=new B1;g.setWithCredentials(!0),g.listenOnce(z1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Nf.NO_ERROR:const T=g.getResponseJson();me(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Nf.TIMEOUT:me(Tn,`RPC '${e}' ${c} timed out`),p(new de(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Nf.HTTP_ERROR:const w=g.getStatus();if(me(Tn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const D=C==null?void 0:C.error;if(D&&D.status&&D.message){const q=function(P){const j=P.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(j)>=0?j:ie.UNKNOWN}(D.status);p(new de(q,D.message))}else p(new de(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new de(ie.UNAVAILABLE,"Connection failed."));break;default:Re(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{me(Tn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);me(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=Xg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=H1(),d=$1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");me(Tn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let w=!1,C=!1;const D=new p4({Yo:k=>{C?me(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,k):(w||(me(Tn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),me(Tn,`RPC '${e}' stream ${a} sending:`,k),T.send(k))},Zo:()=>T.close()}),q=(k,P,j)=>{k.listen(P,B=>{try{j(B)}catch(te){setTimeout(()=>{throw te},0)}})};return q(T,Xu.EventType.OPEN,()=>{C||(me(Tn,`RPC '${e}' stream ${a} transport opened.`),D.o_())}),q(T,Xu.EventType.CLOSE,()=>{C||(C=!0,me(Tn,`RPC '${e}' stream ${a} transport closed`),D.a_(),this.E_(T))}),q(T,Xu.EventType.ERROR,k=>{C||(C=!0,bl(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,k.name,"Message:",k.message),D.a_(new de(ie.UNAVAILABLE,"The operation could not be completed")))}),q(T,Xu.EventType.MESSAGE,k=>{var P;if(!C){const j=k.data[0];nt(!!j,16349);const B=j,te=(B==null?void 0:B.error)||((P=B[0])==null?void 0:P.error);if(te){me(Tn,`RPC '${e}' stream ${a} received error:`,te);const M=te.status;let J=function(I){const V=Lt[I];if(V!==void 0)return AS(V)}(M),A=te.message;J===void 0&&(J=ie.INTERNAL,A="Unknown error status: "+M+" with message "+te.message),C=!0,D.a_(new de(J,A)),T.close()}else me(Tn,`RPC '${e}' stream ${a} received:`,j),D.u_(j)}}),q(d,F1.STAT_EVENT,k=>{k.stat===jg.PROXY?me(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):k.stat===jg.NOPROXY&&me(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){return new v2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&me("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="PersistentStream";class BS{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new de(ie.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return me(pT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(me(pT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g4 extends BS{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=T2(this.serializer,e),i=function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?si(c.readTime):De.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=Qg(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Fg(p)?{documents:x2(l,p)}:{query:A2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=IS(l,c.resumeToken);const g=Gg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=id(l,c.snapshotVersion.toTimestamp());const g=Gg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=C2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=Qg(this.serializer),n.removeTarget=e,this.q_(n)}}class y4 extends BS{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return nt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,nt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){nt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=S2(e.writeResults,e.commitTime),i=si(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=Qg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>w2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{}class v4 extends _4{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new de(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,Yg(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(ie.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,Yg(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(ie.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class E4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ts(n),this.aa=!1):me("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="RemoteStore";class b4{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{uo(this)&&(me(ro,"Restarting streams for network reachability change."),await async function(p){const g=ke(p);g.Ea.add(4),await Lc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Nd(g)}(this))})}),this.Ra=new E4(i,a)}}async function Nd(t){if(uo(t))for(const e of t.da)await e(!0)}async function Lc(t){for(const e of t.da)await e(!1)}function zS(t,e){const n=ke(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Hy(n)?$y(n):Ul(n).O_()&&Fy(n,e))}function zy(t,e){const n=ke(t),i=Ul(n);n.Ia.delete(e),i.O_()&&FS(n,e),n.Ia.size===0&&(i.O_()?i.L_():uo(n)&&n.Ra.set("Unknown"))}function Fy(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ul(t).Y_(e)}function FS(t,e){t.Va.Ue(e),Ul(t).Z_(e)}function $y(t){t.Va=new m2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ul(t).start(),t.Ra.ua()}function Hy(t){return uo(t)&&!Ul(t).x_()&&t.Ia.size>0}function uo(t){return ke(t).Ea.size===0}function $S(t){t.Va=void 0}async function T4(t){t.Ra.set("Online")}async function w4(t){t.Ia.forEach((e,n)=>{Fy(t,e)})}async function S4(t,e){$S(t),Hy(t)?(t.Ra.ha(e),$y(t)):t.Ra.set("Unknown")}async function x4(t,e,n){if(t.Ra.set("Online"),e instanceof CS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){me(ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ad(t,i)}else if(e instanceof jf?t.Va.Ze(e):e instanceof RS?t.Va.st(e):t.Va.tt(e),!n.isEqual(De.min()))try{const i=await US(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(_n.EMPTY_BYTE_STRING,v.snapshotVersion)),FS(l,p);const T=new Fs(v.target,p,g,v.sequenceNumber);Fy(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){me(ro,"Failed to raise snapshot:",i),await ad(t,i)}}async function ad(t,e,n){if(!Ll(e))throw e;t.Ea.add(1),await Lc(t),t.Ra.set("Offline"),n||(n=()=>US(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me(ro,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Nd(t)})}function HS(t,e){return e().catch(n=>ad(t,n,e))}async function Pd(t){const e=ke(t),n=ea(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Iy;for(;A4(e);)try{const a=await o4(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,R4(e,a)}catch(a){await ad(e,a)}GS(e)&&YS(e)}function A4(t){return uo(t)&&t.Ta.length<10}function R4(t,e){t.Ta.push(e);const n=ea(t);n.O_()&&n.X_&&n.ea(e.mutations)}function GS(t){return uo(t)&&!ea(t).x_()&&t.Ta.length>0}function YS(t){ea(t).start()}async function C4(t){ea(t).ra()}async function I4(t){const e=ea(t);for(const n of t.Ta)e.ea(n.mutations)}async function D4(t,e,n){const i=t.Ta.shift(),a=Py.from(i,e,n);await HS(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await Pd(t)}async function k4(t,e){e&&ea(t).X_&&await async function(i,a){if(function(c){return f2(c)&&c!==ie.ABORTED}(a.code)){const l=i.Ta.shift();ea(i).B_(),await HS(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Pd(i)}}(t,e),GS(t)&&YS(t)}async function mT(t,e){const n=ke(t);n.asyncQueue.verifyOperationInProgress(),me(ro,"RemoteStore received new credentials");const i=uo(n);n.Ea.add(3),await Lc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nd(n)}async function O4(t,e){const n=ke(t);e?(n.Ea.delete(2),await Nd(n)):e||(n.Ea.add(2),await Lc(n),n.Ra.set("Unknown"))}function Ul(t){return t.ma||(t.ma=function(n,i,a){const l=ke(n);return l.sa(),new g4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:T4.bind(null,t),t_:w4.bind(null,t),r_:S4.bind(null,t),H_:x4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Hy(t)?$y(t):t.Ra.set("Unknown")):(await t.ma.stop(),$S(t))})),t.ma}function ea(t){return t.fa||(t.fa=function(n,i,a){const l=ke(n);return l.sa(),new y4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:C4.bind(null,t),r_:k4.bind(null,t),ta:I4.bind(null,t),na:D4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Pd(t)):(await t.fa.stop(),t.Ta.length>0&&(me(ro,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new Gy(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yy(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Ll(t))return new de(ie.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static emptySet(e){return new pl(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||be.comparator(n.key,i.key):(n,i)=>be.comparator(n.key,i.key),this.keyedMap=Zu(),this.sortedSet=new xt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pl)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class gT{constructor(){this.ga=new xt(be.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Re(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Al{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Al(e,n,pl.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class N4{constructor(){this.queries=yT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=ke(n),l=a.queries;a.queries=yT(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new de(ie.ABORTED,"Firestore shutting down"))}}function yT(){return new lo(t=>dS(t),Cd)}async function Wy(t,e){const n=ke(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new M4,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=Yy(c,`Initialization of query '${al(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&Ky(n)}async function Qy(t,e){const n=ke(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function P4(t,e){const n=ke(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&Ky(n)}function V4(t,e,n){const i=ke(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function Ky(t){t.Ca.forEach(e=>{e.next()})}var Zg,_T;(_T=Zg||(Zg={})).Ma="default",_T.Cache="cache";class Xy{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Al(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Al.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.key=e}}class QS{constructor(e){this.key=e}}class L4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ze(),this.mutatedKeys=ze(),this.eu=pS(e),this.tu=new pl(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new gT,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,T)=>{const w=a.get(v),C=Id(this.query,T)?T:null,D=!!w&&this.mutatedKeys.has(w.key),q=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let k=!1;w&&C?w.data.isEqual(C.data)?D!==q&&(i.track({type:3,doc:C}),k=!0):this.su(w,C)||(i.track({type:2,doc:C}),k=!0,(p&&this.eu(C,p)>0||g&&this.eu(C,g)<0)&&(d=!0)):!w&&C?(i.track({type:0,doc:C}),k=!0):w&&!C&&(i.track({type:1,doc:w}),k=!0,(p||g)&&(d=!0)),k&&(C?(c=c.add(C),l=q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,T)=>function(C,D){const q=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re(20277,{Rt:k})}};return q(C)-q(D)}(v.type,T.type)||this.eu(v.doc,T.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Al(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ze(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new QS(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new WS(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=ze();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Al.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zy="SyncEngine";class j4{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class U4{constructor(e){this.key=e,this.hu=!1}}class q4{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new lo(d=>dS(d),Cd),this.Iu=new Map,this.Eu=new Set,this.du=new xt(be.comparator),this.Au=new Map,this.Ru=new jy,this.Vu={},this.mu=new Map,this.fu=xl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function B4(t,e,n=!0){const i=tx(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await KS(i,e,n,!0),a}async function z4(t,e){const n=tx(t);await KS(n,e,!0,!1)}async function KS(t,e,n,i){const a=await l4(t.localStore,ii(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await F4(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&zS(t.remoteStore,a),d}async function F4(t,e,n,i,a){t.pu=(T,w,C)=>async function(q,k,P,j){let B=k.view.ru(P);B.Cs&&(B=await cT(q.localStore,k.query,!1).then(({documents:A})=>k.view.ru(A,B)));const te=j&&j.targetChanges.get(k.targetId),M=j&&j.targetMismatches.get(k.targetId)!=null,J=k.view.applyChanges(B,q.isPrimaryClient,te,M);return ET(q,k.targetId,J.au),J.snapshot}(t,T,w,C);const l=await cT(t.localStore,e,!0),c=new L4(e,l.Qs),d=c.ru(l.documents),p=Vc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);ET(t,n,g.au);const v=new j4(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function $4(t,e,n){const i=ke(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Cd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await Kg(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&zy(i.remoteStore,a.targetId),Jg(i,a.targetId)}).catch(Vl)):(Jg(i,a.targetId),await Kg(i.localStore,a.targetId,!0))}async function H4(t,e){const n=ke(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),zy(n.remoteStore,i.targetId))}async function G4(t,e,n){const i=J4(t);try{const a=await function(c,d){const p=ke(c),g=ft.now(),v=d.reduce((C,D)=>C.add(D.key),ze());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=ns(),q=ze();return p.Ns.getEntries(C,v).next(k=>{D=k,D.forEach((P,j)=>{j.isValidDocument()||(q=q.add(P))})}).next(()=>p.localDocuments.getOverlayedDocuments(C,D)).next(k=>{T=k;const P=[];for(const j of d){const B=o2(j,T.get(j.key).overlayedDocument);B!=null&&P.push(new aa(j.key,B,sS(B.value.mapValue),Rr.exists(!0)))}return p.mutationQueue.addMutationBatch(C,g,P,d)}).next(k=>{w=k;const P=k.applyToLocalDocumentSet(T,q);return p.documentOverlayCache.saveOverlays(C,k.batchId,P)})}).then(()=>({batchId:w.batchId,changes:gS(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new xt(Be)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await jc(i,a.changes),await Pd(i.remoteStore)}catch(a){const l=Yy(a,"Failed to persist write");n.reject(l)}}async function XS(t,e){const n=ke(t);try{const i=await s4(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(nt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?nt(c.hu,14607):a.removedDocuments.size>0&&(nt(c.hu,42227),c.hu=!1))}),await jc(n,i,e)}catch(i){await Vl(i)}}function vT(t,e,n){const i=ke(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=ke(c);p.onlineState=d;let g=!1;p.queries.forEach((v,T)=>{for(const w of T.Sa)w.va(d)&&(g=!0)}),g&&Ky(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Y4(t,e,n){const i=ke(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new xt(be.comparator);c=c.insert(l,Cn.newNoDocument(l,De.min()));const d=ze().add(l),p=new Od(De.min(),new Map,new xt(Be),c,d);await XS(i,p),i.du=i.du.remove(l),i.Au.delete(e),Jy(i)}else await Kg(i.localStore,e,!1).then(()=>Jg(i,e,n)).catch(Vl)}async function W4(t,e){const n=ke(t),i=e.batch.batchId;try{const a=await i4(n.localStore,e);JS(n,i,null),ZS(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await jc(n,a)}catch(a){await Vl(a)}}async function Q4(t,e,n){const i=ke(t);try{const a=await function(c,d){const p=ke(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(nt(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);JS(i,e,n),ZS(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await jc(i,a)}catch(a){await Vl(a)}}function ZS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function JS(t,e,n){const i=ke(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function Jg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||ex(t,i)})}function ex(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(zy(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Jy(t))}function ET(t,e,n){for(const i of n)i instanceof WS?(t.Ru.addReference(i.key,e),K4(t,i)):i instanceof QS?(me(Zy,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||ex(t,i.key)):Re(19791,{wu:i})}function K4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(me(Zy,"New document in limbo: "+n),t.Eu.add(i),Jy(t))}function Jy(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new be(mt.fromString(e)),i=t.fu.next();t.Au.set(i,new U4(n)),t.du=t.du.insert(n,i),zS(t.remoteStore,new Fs(ii(Rd(n.path)),i,"TargetPurposeLimboResolution",Sd.ce))}}async function jc(t,e,n){const i=ke(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const T=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=qy.As(p.targetId,g);l.push(T)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=ke(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>oe.forEach(g,w=>oe.forEach(w.Es,C=>v.persistence.referenceDelegate.addReference(T,w.targetId,C)).next(()=>oe.forEach(w.ds,C=>v.persistence.referenceDelegate.removeReference(T,w.targetId,C)))))}catch(T){if(!Ll(T))throw T;me(By,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const C=v.Ms.get(w),D=C.snapshotVersion,q=C.withLastLimboFreeSnapshotVersion(D);v.Ms=v.Ms.insert(w,q)}}}(i.localStore,l))}async function X4(t,e){const n=ke(t);if(!n.currentUser.isEqual(e)){me(Zy,"User change. New user:",e.toKey());const i=await jS(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new de(ie.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await jc(n,i.Ls)}}function Z4(t,e){const n=ke(t),i=n.Au.get(e);if(i&&i.hu)return ze().add(i.key);{let a=ze();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function tx(t){const e=ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Y4.bind(null,e),e.Pu.H_=P4.bind(null,e.eventManager),e.Pu.yu=V4.bind(null,e.eventManager),e}function J4(t){const e=ke(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q4.bind(null,e),e}class od{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return r4(this.persistence,new e4,e.initialUser,this.serializer)}Cu(e){return new LS(Uy.mi,this.serializer)}Du(e){return new c4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}od.provider={build:()=>new od};class eP extends od{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){nt(this.persistence.referenceDelegate instanceof sd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new U2(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?qn.withCacheSize(this.cacheSizeBytes):qn.DEFAULT;return new LS(i=>sd.mi(i,n),this.serializer)}}class ey{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vT(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=X4.bind(null,this.syncEngine),await O4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N4}()}createDatastore(e){const n=Md(e.databaseInfo.databaseId),i=function(l){return new m4(l)}(e.databaseInfo);return function(l,c,d,p){return new v4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new b4(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>vT(this.syncEngine,n,0),function(){return dT.v()?new dT:new h4}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const T=new q4(a,l,c,d,p,g);return v&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=ke(a);me(ro,"RemoteStore shutting down."),l.Ea.add(5),await Lc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ey.provider={build:()=>new ey};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="FirestoreClient";class tP{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Rn.UNAUTHENTICATED,this.clientId=Cy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{me(ta,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(me(ta,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Yy(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function fg(t,e){t.asyncQueue.verifyOperationInProgress(),me(ta,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await jS(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nP(t);me(ta,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>mT(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>mT(e.remoteStore,a)),t._onlineComponents=e}async function nP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){me(ta,"Using user provided OfflineComponentProvider");try{await fg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===ie.FAILED_PRECONDITION||a.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;bl("Error using user provided cache. Falling back to memory cache: "+n),await fg(t,new od)}}else me(ta,"Using default OfflineComponentProvider"),await fg(t,new eP(void 0));return t._offlineComponents}async function nx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(me(ta,"Using user provided OnlineComponentProvider"),await bT(t,t._uninitializedComponentsProvider._online)):(me(ta,"Using default OnlineComponentProvider"),await bT(t,new ey))),t._onlineComponents}function rP(t){return nx(t).then(e=>e.syncEngine)}async function ld(t){const e=await nx(t),n=e.eventManager;return n.onListen=B4.bind(null,e.syncEngine),n.onUnlisten=$4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=z4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H4.bind(null,e.syncEngine),n}function iP(t,e,n={}){const i=new Ki;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new e_({next:w=>{v.Nu(),c.enqueueAndForget(()=>Qy(l,T));const C=w.docs.has(d);!C&&w.fromCache?g.reject(new de(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&p&&p.source==="server"?g.reject(new de(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Xy(Rd(d.path),v,{includeMetadataChanges:!0,qa:!0});return Wy(l,T)}(await ld(t),t.asyncQueue,e,n,i)),i.promise}function sP(t,e,n={}){const i=new Ki;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new e_({next:w=>{v.Nu(),c.enqueueAndForget(()=>Qy(l,T)),w.fromCache&&p.source==="server"?g.reject(new de(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Xy(d,v,{includeMetadataChanges:!0,qa:!0});return Wy(l,T)}(await ld(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function rx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="firestore.googleapis.com",wT=!0;class ST{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ix,this.ssl=wT}else this.host=e.host,this.ssl=e.ssl??wT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<L2)throw new de(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new de(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ST({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ST(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new cN;switch(i.type){case"firstParty":return new pN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new de(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=TT.get(n);i&&(me("ComponentProvider","Removing Datastore"),TT.delete(n),i.terminate())}(this),Promise.resolve()}}function aP(t,e,n,i={}){var g;t=er(t,Vd);const a=Ol(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(Zw(`https://${d}`),Jw("Firestore",!0)),l.host!==ix&&l.host!==d&&bl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!Za(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=Rn.MOCK_USER;else{v=vD(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new de(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Rn(w)}t._authCredentials=new hN(new Y1(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new oa(this.firestore,e,this._query)}}class Ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Nc(n,Ct._jsonSchema))return new Ct(e,i||null,new be(mt.fromString(n.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:qt("string",Ct._jsonSchemaVersion),referencePath:qt("string")};class Qs extends oa{constructor(e,n,i){super(e,n,Rd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new be(e))}withConverter(e){return new Qs(this.firestore,e,this._path)}}function Xi(t,e,...n){if(t=Bt(t),W1("collection","path",e),t instanceof Vd){const i=mt.fromString(e,...n);return Lb(i),new Qs(t,null,i)}{if(!(t instanceof Ct||t instanceof Qs))throw new de(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mt.fromString(e,...n));return Lb(i),new Qs(t.firestore,null,i)}}function Cr(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=Cy.newId()),W1("doc","path",e),t instanceof Vd){const i=mt.fromString(e,...n);return Vb(i),new Ct(t,null,new be(i))}{if(!(t instanceof Ct||t instanceof Qs))throw new de(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mt.fromString(e,...n));return Vb(i),new Ct(t.firestore,t instanceof Qs?t.converter:null,new be(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="AsyncQueue";class AT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qS(this,"async_queue_retry"),this._c=()=>{const i=hg();i&&me(xT,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=hg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ki;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ll(e))throw e;me(xT,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,ts("INTERNAL UNHANDLED ERROR: ",RT(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Gy.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Re(47125,{Pc:RT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function RT(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function CT(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class na extends Vd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new AT,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AT(e),this._firestoreClient=void 0,await e}}}function sx(t,e){const n=typeof t=="object"?t:r1(),i=typeof t=="string"?t:ed,a=_y(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=yD("firestore");l&&aP(a,...l)}return a}function Ld(t){if(t._terminated)throw new de(ie.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oP(t),t._firestoreClient}function oP(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new kN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,rx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gr(_n.fromBase64String(e))}catch(n){throw new de(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gr(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nc(e,gr._jsonSchema))return gr.fromBase64String(e.bytes)}}gr._jsonSchemaVersion="firestore/bytes/1.0",gr._jsonSchema={type:qt("string",gr._jsonSchemaVersion),bytes:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ai._jsonSchemaVersion}}static fromJSON(e){if(Nc(e,ai._jsonSchema))return new ai(e.latitude,e.longitude)}}ai._jsonSchemaVersion="firestore/geoPoint/1.0",ai._jsonSchema={type:qt("string",ai._jsonSchemaVersion),latitude:qt("number"),longitude:qt("number")};/**
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
 */class oi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:oi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nc(e,oi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new oi(e.vectorValues);throw new de(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}oi._jsonSchemaVersion="firestore/vectorValue/1.0",oi._jsonSchema={type:qt("string",oi._jsonSchemaVersion),vectorValues:qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=/^__.*__$/;class uP{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new aa(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pc(e,this.data,n,this.fieldTransforms)}}class ax{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new aa(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ox(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re(40011,{Ac:t})}}class t_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new t_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ud(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ox(this.Ac)&&lP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cP{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Md(e)}Cc(e,n,i,a=!1){return new t_({Ac:e,methodName:n,Dc:i,path:yn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qd(t){const e=t._freezeSettings(),n=Md(t._databaseId);return new cP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);r_("Data must be an object, but it was:",c,i);const d=ux(i,c);let p,g;if(l.merge)p=new Jn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=ty(e,T,n);if(!c.contains(w))throw new de(ie.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);hx(v,w)||v.push(w)}p=new Jn(v),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new uP(new Bn(d),p,g)}class Bd extends Ud{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bd}}class n_ extends Ud{_toFieldTransform(e){return new r2(e.path,new Ec)}isEqual(e){return e instanceof n_}}function hP(t,e,n,i){const a=t.Cc(1,e,n);r_("Data must be an object, but it was:",a,i);const l=[],c=Bn.empty();sa(i,(p,g)=>{const v=i_(e,p,n);g=Bt(g);const T=a.yc(v);if(g instanceof Bd)l.push(v);else{const w=Uc(g,T);w!=null&&(l.push(v),c.set(v,w))}});const d=new Jn(l);return new ax(c,d,a.fieldTransforms)}function fP(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[ty(e,i,n)],p=[a];if(l.length%2!=0)throw new de(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(ty(e,l[w])),p.push(l[w+1]);const g=[],v=Bn.empty();for(let w=d.length-1;w>=0;--w)if(!hx(g,d[w])){const C=d[w];let D=p[w];D=Bt(D);const q=c.yc(C);if(D instanceof Bd)g.push(C);else{const k=Uc(D,q);k!=null&&(g.push(C),v.set(C,k))}}const T=new Jn(g);return new ax(v,T,c.fieldTransforms)}function dP(t,e,n,i=!1){return Uc(n,t.Cc(i?4:3,e))}function Uc(t,e){if(cx(t=Bt(t)))return r_("Unsupported field value:",e,t),ux(t,e);if(t instanceof Ud)return function(i,a){if(!ox(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Uc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Bt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return e2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=ft.fromDate(i);return{timestampValue:id(a.serializer,l)}}if(i instanceof ft){const l=new ft(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:id(a.serializer,l)}}if(i instanceof ai)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof gr)return{bytesValue:IS(a.serializer,i._byteString)};if(i instanceof Ct){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ly(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof oi)return function(c,d){return{mapValue:{fields:{[rS]:{stringValue:iS},[td]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return Ny(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${wd(i)}`)}(t,e)}function ux(t,e){const n={};return X1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sa(t,(i,a)=>{const l=Uc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function cx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof ai||t instanceof gr||t instanceof Ct||t instanceof Ud||t instanceof oi)}function r_(t,e,n){if(!cx(n)||!Q1(n)){const i=wd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function ty(t,e,n){if((e=Bt(e))instanceof jd)return e._internalPath;if(typeof e=="string")return i_(t,e);throw ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const pP=new RegExp("[~\\*/\\[\\]]");function i_(t,e,n){if(e.search(pP)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jd(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new de(ie.INVALID_ARGUMENT,d+t+p)}function hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mP extends fx{data(){return super.data()}}function zd(t,e){return typeof e=="string"?i_(t,e):e instanceof jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new de(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class s_{}class px extends s_{}function io(t,e,...n){let i=[];e instanceof s_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof a_).length,d=l.filter(p=>p instanceof Fd).length;if(c>1||c>0&&d>0)throw new de(ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Fd extends px{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Fd(e,n,i)}_apply(e){const n=this._parse(e);return mx(e._query,n),new oa(e.firestore,e.converter,$g(e._query,n))}_parse(e){const n=qd(e.firestore);return function(l,c,d,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new de(ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){DT(T,v);const D=[];for(const q of T)D.push(IT(p,l,q));w={arrayValue:{values:D}}}else w=IT(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||DT(T,v),w=dP(d,c,T,v==="in"||v==="not-in");return Ut.create(g,v,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function so(t,e,n){const i=e,a=zd("where",t);return Fd._create(a,i,n)}class a_ extends s_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new a_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:kr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)mx(c,p),c=$g(c,p)}(e._query,n),new oa(e.firestore,e.converter,$g(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class o_ extends px{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new o_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new de(ie.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new de(ie.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vc(l,c)}(e._query,this._field,this._direction);return new oa(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new jl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function l_(t,e="asc"){const n=e,i=zd("orderBy",t);return o_._create(i,n)}function IT(t,e,n){if(typeof(n=Bt(n))=="string"){if(n==="")throw new de(ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fS(e)&&n.indexOf("/")!==-1)throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(mt.fromString(n));if(!be.isDocumentKey(i))throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Hb(t,new be(i))}if(n instanceof Ct)return Hb(t,n._key);throw new de(ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(n)}.`)}function DT(t,e){if(!Array.isArray(t)||t.length===0)throw new de(ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new de(ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gP{convertValue(e,n="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return sa(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[td].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>Ot(c.doubleValue));return new oi(n)}convertGeoPoint(e){return new ai(Ot(e.latitude),Ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ad(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(gc(e));default:return null}}convertTimestamp(e){const n=Xs(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=mt.fromString(e);nt(PS(i),9688,{name:e});const a=new yc(i.get(1),i.get(3)),l=new be(i.popFirst(5));return a.isEqual(n)||ts(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class ec{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ya extends fx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(zd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ya._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ya._jsonSchema={type:qt("string",Ya._jsonSchemaVersion),bundleSource:qt("string","DocumentSnapshot"),bundleName:qt("string"),bundle:qt("string")};class Uf extends Ya{data(e={}){return super.data(e)}}class Wa{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ec(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Uf(this._firestore,this._userDataWriter,i.key,i,new ec(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Uf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ec(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Uf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ec(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:yP(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){t=er(t,Ct);const e=er(t.firestore,na);return iP(Ld(e),t._key).then(n=>_x(e,t,n))}Wa._jsonSchemaVersion="firestore/querySnapshot/1.0",Wa._jsonSchema={type:qt("string",Wa._jsonSchemaVersion),bundleSource:qt("string","QuerySnapshot"),bundleName:qt("string"),bundle:qt("string")};class c_ extends gP{constructor(e){super(),this.firestore=e}convertBytes(e){return new gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function yx(t){t=er(t,oa);const e=er(t.firestore,na),n=Ld(e),i=new c_(e);return dx(t._query),sP(n,t._query).then(a=>new Wa(e,i,t,a))}function _P(t,e,n){t=er(t,Ct);const i=er(t.firestore,na),a=gx(t.converter,e);return h_(i,[lx(qd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Rr.none())])}function Qa(t,e,n,...i){t=er(t,Ct);const a=er(t.firestore,na),l=qd(a);let c;return c=typeof(e=Bt(e))=="string"||e instanceof jd?fP(l,"updateDoc",t._key,e,n,i):hP(l,"updateDoc",t._key,e),h_(a,[c.toMutation(t._key,Rr.exists(!0))])}function vP(t,e){const n=er(t.firestore,na),i=Cr(t),a=gx(t.converter,e);return h_(n,[lx(qd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Rr.exists(!1))]).then(()=>i)}function $d(t,...e){var p,g,v;t=Bt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||CT(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(CT(e[i])){const T=e[i];e[i]=(p=T.next)==null?void 0:p.bind(T),e[i+1]=(g=T.error)==null?void 0:g.bind(T),e[i+2]=(v=T.complete)==null?void 0:v.bind(T)}let l,c,d;if(t instanceof Ct)c=er(t.firestore,na),d=Rd(t._key.path),l={next:T=>{e[i]&&e[i](_x(c,t,T))},error:e[i+1],complete:e[i+2]};else{const T=er(t,oa);c=er(T.firestore,na),d=T._query;const w=new c_(c);l={next:C=>{e[i]&&e[i](new Wa(c,w,T,C))},error:e[i+1],complete:e[i+2]},dx(t._query)}return function(w,C,D,q){const k=new e_(q),P=new Xy(C,k,D);return w.asyncQueue.enqueueAndForget(async()=>Wy(await ld(w),P)),()=>{k.Nu(),w.asyncQueue.enqueueAndForget(async()=>Qy(await ld(w),P))}}(Ld(c),d,a,l)}function h_(t,e){return function(i,a){const l=new Ki;return i.asyncQueue.enqueueAndForget(async()=>G4(await rP(i),a,l)),l.promise}(Ld(t),e)}function _x(t,e,n){const i=n.docs.get(e._key),a=new c_(t);return new Ya(t,a,e._key,i,new ec(n.hasPendingWrites,n.fromCache),e.converter)}function kT(){return new n_("serverTimestamp")}(function(e,n=!0){(function(a){Pl=a})(Ml),vl(new Ja("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new na(new fN(i.getProvider("auth-internal")),new mN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ys(Ob,Mb,e),Ys(Ob,Mb,"esm2020")})();const EP={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},f_=n1(EP);sx(f_);const Yt=sx(f_),ao=aN(f_);function bP({onLoginSuccess:t}){const[e,n]=F.useState(""),[i,a]=F.useState(""),l=Ac(),c=()=>{l("/signup")},d=()=>{$O(ao,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(TP,{children:[_.jsxs(wP,{children:[_.jsxs(SP,{children:[_.jsx(xP,{children:"PDMS"}),_.jsx(AP,{children:"Pushcomz Design Management System"})]}),_.jsxs(RP,{children:[_.jsx(CP,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(IP,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(DP,{onClick:d,children:"로그인"}),_.jsxs(OP,{children:[_.jsx(MP,{children:"계정이 없습니까?"}),_.jsx(NP,{onClick:c,children:"등록하기"})]})]}),_.jsx(kP,{children:"© Pushcomz Corp."})]})}const TP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,wP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,SP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,xP=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,AP=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,RP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,CP=G.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,IP=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,DP=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,kP=G.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,OP=G.div`
  
`,MP=G.span`
  margin-right: 10px;
  font-size: 13px;
`,NP=G.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,vx="./assets/logo-NEcdCz8m.svg";function PP(){const[t,e]=F.useState(""),[n,i]=F.useState(null),a=Ac();F.useEffect(()=>{const d=Ed(ao,async p=>{if(p){p.displayName&&e(p.displayName);const g=await u_(Cr(Yt,"users",p.uid));g.exists()?i(g.data().role):i(null)}else e(""),i(null)});return()=>d()},[]);const l=()=>{QO(ao).then(()=>{a("/")}).catch(d=>{alert("로그아웃 중 오류가 발생했습니다: "+d.message)})},c=d=>{switch(d){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(VP,{children:[_.jsx(LP,{src:vx}),_.jsxs(jP,{children:[_.jsxs(UP,{children:[_.jsx(qP,{children:t}),"님(",c(n),") 환영합니다."]}),_.jsx(BP,{onClick:l,children:"로그아웃"}),_.jsx(zP,{})]})]})}const VP=G.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,LP=G.img``,jP=G.div``,UP=G.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,qP=G.span`
  font-weight: 700;
`,BP=G.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,zP=G.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,d_="./assets/url-icon-DJKri2bW.svg";function FP({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs($P,{isCanceled:t.status==="취소",children:[_.jsx(wr,{children:e}),_.jsx(wr,{children:_.jsx(KP,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(wr,{children:c(t.request_date)}),_.jsx(HP,{children:c(t.completion_dt)}),_.jsx(GP,{children:c(t.open_dt)}),_.jsx(wr,{children:t.task_form}),_.jsx(YP,{children:t.task_type}),_.jsx(WP,{children:_.jsxs(XP,{children:[t.emergency?_.jsx(Ex,{children:"긴급"}):"",_.jsx(ZP,{onClick:d,children:t.requirement})]})}),_.jsx(wr,{children:_.jsx(OT,{href:t.url,target:"_blank"})}),_.jsx(QP,{children:_.jsx(JP,{onClick:d,children:t.note||""})}),_.jsx(wr,{children:_.jsx(eV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status==="검수중"?"검수요청":t.status||"대기"})}),_.jsx(wr,{children:t.assigned_designer||"미배정"}),_.jsx(wr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(OT,{href:t.result_url,target:"_blank"}):""}),_.jsx(wr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(bx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(tV,{children:"검수완료"}):""}),_.jsx(wr,{children:_.jsx(Tx,{onClick:()=>a(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(wr,{children:_.jsx(wx,{onClick:()=>i(t.id),children:"취소"})})]})}const $P=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Ex} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${bx}, ${Tx}, ${wx} {
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
`,wr=G.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,HP=G.td`
  color: ${({theme:t})=>t.colors.red};
`,GP=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,YP=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,WP=G.td`
  line-height: 15px;
  text-align: left;
`,QP=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,KP=G.span`
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
`,XP=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,ZP=G.span`
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
`,Ex=G.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,OT=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${d_}) no-repeat center / contain;
`,JP=G.span`
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
`,eV=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,bx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,tV=G.span`
  color: green;
  font-weight: bold;
`,Tx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`,wx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`;function nV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(rV,{children:_.jsxs(iV,{children:[_.jsx(sV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(wn,{children:"번호"}),_.jsx(wn,{children:"문서번호"}),_.jsx(wn,{children:"요청일"}),_.jsxs(wn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(wn,{children:"오픈일"}),_.jsx(wn,{children:"업무형태"}),_.jsx(wn,{children:"업무타입"}),_.jsx(wn,{children:"작업항목"}),_.jsx(wn,{children:"요청서 URL"}),_.jsx(wn,{children:"메모"}),_.jsx(wn,{children:"진행상태"}),_.jsx(wn,{children:"디자이너"}),_.jsx(wn,{children:"산출물 URL"}),_.jsx(wn,{children:"검수"}),_.jsx(wn,{children:"수정"}),_.jsx(wn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(FP,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const rV=G.div`
  padding: 0 48px;
`,iV=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,sV=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,wn=G.th`
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
`;function p_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(aV,{children:_.jsxs(oV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const aV=G.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,oV=G.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Sx="./assets/selectbox-arrow-BwC8UGU0.svg";function lV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const dg={},tc={};function Ha(t,e){try{const i=(dg[t]||(dg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in tc?tc[i]:MT(i,i.split(":"))}catch{if(t in tc)return tc[t];const n=t==null?void 0:t.match(uV);return n?MT(t,n.slice(1)):NaN}}const uV=/([+-]\d\d):?(\d\d)?/;function MT(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return tc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class ti extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Ha(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),xx(this),ny(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new ti(...n,e):new ti(Date.now(),e)}withTimeZone(e){return new ti(+this,e)}getTimezoneOffset(){const e=-Ha(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),ny(this),+this}[Symbol.for("constructDateFrom")](e){return new ti(+new Date(e),this.timeZone)}}const NT=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!NT.test(t))return;const e=t.replace(NT,"$1UTC");ti.prototype[e]&&(t.startsWith("get")?ti.prototype[t]=function(){return this.internal[e]()}:(ti.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),cV(this),+this},ti.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),ny(this),+this}))});function ny(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Ha(t.timeZone,t)*60))}function cV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),xx(t)}function xx(t){const e=Ha(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,T=Math.round(-(Ha(t.timeZone,t)*60))%60;(T||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+T),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+T+v));const w=Ha(t.timeZone,t),C=w>0?Math.floor(w):Math.ceil(w),q=-new Date(+t).getTimezoneOffset()-C,k=C!==n,P=q-p;if(k&&P){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+P);const j=Ha(t.timeZone,t),B=j>0?Math.floor(j):Math.ceil(j),te=C-B;te&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+te),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+te))}}class An extends ti{static tz(e,...n){return n.length?new An(...n,e):new An(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${lV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new An(+this,e)}[Symbol.for("constructDateFrom")](e){return new An(+new Date(e),this.timeZone)}}const Ax=6048e5,hV=864e5,PT=Symbol.for("constructDateFrom");function Qt(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&PT in t?t[PT](e):t instanceof Date?new t.constructor(e):new Date(e)}function ct(t,e){return Qt(e||t,t)}function Rx(t,e,n){const i=ct(t,n==null?void 0:n.in);return isNaN(e)?Qt(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function Cx(t,e,n){const i=ct(t,n==null?void 0:n.in);if(isNaN(e))return Qt(t,NaN);if(!e)return i;const a=i.getDate(),l=Qt(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let fV={};function qc(){return fV}function Rl(t,e){var d,p,g,v;const n=qc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ct(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function wc(t,e){return Rl(t,{...e,weekStartsOn:1})}function Ix(t,e){const n=ct(t,e==null?void 0:e.in),i=n.getFullYear(),a=Qt(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=wc(a),c=Qt(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=wc(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function VT(t){const e=ct(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ql(t,...e){const n=Qt.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Sc(t,e){const n=ct(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Dx(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e),l=Sc(i),c=Sc(a),d=+l-VT(l),p=+c-VT(c);return Math.round((d-p)/hV)}function dV(t,e){const n=Ix(t,e),i=Qt(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),wc(i)}function pV(t,e,n){return Rx(t,e*7,n)}function mV(t,e,n){return Cx(t,e*12,n)}function gV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Qt.bind(null,a));const l=ct(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),Qt(i,n||NaN)}function yV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Qt.bind(null,a));const l=ct(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),Qt(i,n||NaN)}function _V(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return+Sc(i)==+Sc(a)}function kx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function vV(t){return!(!kx(t)&&typeof t!="number"||isNaN(+ct(t)))}function EV(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function bV(t,e){const n=ct(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function TV(t,e){const[n,i]=ql(t,e.start,e.end);return{start:n,end:i}}function wV(t,e){const{start:n,end:i}=TV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(Qt(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function SV(t,e){const n=ct(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function xV(t,e){const n=ct(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function Ox(t,e){const n=ct(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Mx(t,e){var d,p,g,v;const n=qc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ct(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function AV(t,e){return Mx(t,{...e,weekStartsOn:1})}const RV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},CV=(t,e,n)=>{let i;const a=RV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function pg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const IV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},DV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},OV={date:pg({formats:IV,defaultWidth:"full"}),time:pg({formats:DV,defaultWidth:"full"}),dateTime:pg({formats:kV,defaultWidth:"full"})},MV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},NV=(t,e,n,i)=>MV[t];function Gu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const PV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},VV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},LV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},UV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},BV=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},zV={ordinalNumber:BV,era:Gu({values:PV,defaultWidth:"wide"}),quarter:Gu({values:VV,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Gu({values:LV,defaultWidth:"wide"}),day:Gu({values:jV,defaultWidth:"wide"}),dayPeriod:Gu({values:UV,defaultWidth:"wide",formattingValues:qV,defaultFormattingWidth:"wide"})};function Yu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?$V(d,T=>T.test(c)):FV(d,T=>T.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function FV(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function $V(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function HV(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const GV=/^(\d+)(th|st|nd|rd)?/i,YV=/\d+/i,WV={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},QV={any:[/^b/i,/^(a|c)/i]},KV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},XV={any:[/1/i,/2/i,/3/i,/4/i]},ZV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},JV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},e6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},t6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},n6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},r6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},i6={ordinalNumber:HV({matchPattern:GV,parsePattern:YV,valueCallback:t=>parseInt(t,10)}),era:Yu({matchPatterns:WV,defaultMatchWidth:"wide",parsePatterns:QV,defaultParseWidth:"any"}),quarter:Yu({matchPatterns:KV,defaultMatchWidth:"wide",parsePatterns:XV,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Yu({matchPatterns:ZV,defaultMatchWidth:"wide",parsePatterns:JV,defaultParseWidth:"any"}),day:Yu({matchPatterns:e6,defaultMatchWidth:"wide",parsePatterns:t6,defaultParseWidth:"any"}),dayPeriod:Yu({matchPatterns:n6,defaultMatchWidth:"any",parsePatterns:r6,defaultParseWidth:"any"})},m_={code:"en-US",formatDistance:CV,formatLong:OV,formatRelative:NV,localize:zV,match:i6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function s6(t,e){const n=ct(t,e==null?void 0:e.in);return Dx(n,Ox(n))+1}function Nx(t,e){const n=ct(t,e==null?void 0:e.in),i=+wc(n)-+dV(n);return Math.round(i/Ax)+1}function Px(t,e){var v,T,w,C;const n=ct(t,e==null?void 0:e.in),i=n.getFullYear(),a=qc(),l=(e==null?void 0:e.firstWeekContainsDate)??((T=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:T.firstWeekContainsDate)??a.firstWeekContainsDate??((C=(w=a.locale)==null?void 0:w.options)==null?void 0:C.firstWeekContainsDate)??1,c=Qt((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Rl(c,e),p=Qt((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Rl(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function a6(t,e){var d,p,g,v;const n=qc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Px(t,e),l=Qt((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Rl(l,e)}function Vx(t,e){const n=ct(t,e==null?void 0:e.in),i=+Rl(n,e)-+a6(n,e);return Math.round(i/Ax)+1}function st(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Ls={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return st(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):st(n+1,2)},d(t,e){return st(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return st(t.getHours()%12||12,e.length)},H(t,e){return st(t.getHours(),e.length)},m(t,e){return st(t.getMinutes(),e.length)},s(t,e){return st(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return st(a,e.length)}},il={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},LT={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Ls.y(t,e)},Y:function(t,e,n,i){const a=Px(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return st(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):st(l,e.length)},R:function(t,e){const n=Ix(t);return st(n,e.length)},u:function(t,e){const n=t.getFullYear();return st(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return st(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return st(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Ls.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return st(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Vx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):st(a,e.length)},I:function(t,e,n){const i=Nx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):st(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ls.d(t,e)},D:function(t,e,n){const i=s6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):st(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return st(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return st(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return st(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=il.noon:i===0?a=il.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=il.evening:i>=12?a=il.afternoon:i>=4?a=il.morning:a=il.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ls.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ls.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):st(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):st(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ls.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ls.s(t,e)},S:function(t,e){return Ls.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return UT(i);case"XXXX":case"XX":return za(i);case"XXXXX":case"XXX":default:return za(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return UT(i);case"xxxx":case"xx":return za(i);case"xxxxx":case"xxx":default:return za(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+jT(i,":");case"OOOO":default:return"GMT"+za(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+jT(i,":");case"zzzz":default:return"GMT"+za(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return st(i,e.length)},T:function(t,e,n){return st(+t,e.length)}};function jT(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+st(l,2)}function UT(t,e){return t%60===0?(t>0?"-":"+")+st(Math.abs(t)/60,2):za(t,e)}function za(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=st(Math.trunc(i/60),2),l=st(i%60,2);return n+a+e+l}const qT=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Lx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},o6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return qT(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",qT(i,e)).replace("{{time}}",Lx(a,e))},l6={p:Lx,P:o6},u6=/^D+$/,c6=/^Y+$/,h6=["D","DD","YY","YYYY"];function f6(t){return u6.test(t)}function d6(t){return c6.test(t)}function p6(t,e,n){const i=m6(t,e,n);if(console.warn(i),h6.includes(t))throw new RangeError(i)}function m6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const g6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,y6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_6=/^'([^]*?)'?$/,v6=/''/g,E6=/[a-zA-Z]/;function b6(t,e,n){var v,T,w,C,D,q,k,P;const i=qc(),a=(n==null?void 0:n.locale)??i.locale??m_,l=(n==null?void 0:n.firstWeekContainsDate)??((T=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:T.firstWeekContainsDate)??i.firstWeekContainsDate??((C=(w=i.locale)==null?void 0:w.options)==null?void 0:C.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((q=(D=n==null?void 0:n.locale)==null?void 0:D.options)==null?void 0:q.weekStartsOn)??i.weekStartsOn??((P=(k=i.locale)==null?void 0:k.options)==null?void 0:P.weekStartsOn)??0,d=ct(t,n==null?void 0:n.in);if(!vV(d))throw new RangeError("Invalid time value");let p=e.match(y6).map(j=>{const B=j[0];if(B==="p"||B==="P"){const te=l6[B];return te(j,a.formatLong)}return j}).join("").match(g6).map(j=>{if(j==="''")return{isToken:!1,value:"'"};const B=j[0];if(B==="'")return{isToken:!1,value:T6(j)};if(LT[B])return{isToken:!0,value:j};if(B.match(E6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+B+"`");return{isToken:!1,value:j}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(j=>{if(!j.isToken)return j.value;const B=j.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&d6(B)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&f6(B))&&p6(B,e,String(t));const te=LT[B[0]];return te(d,B,a.localize,g)}).join("")}function T6(t){const e=t.match(_6);return e?e[1].replace(v6,"'"):t}function w6(t,e){const n=ct(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=Qt(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function S6(t,e){return ct(t,e==null?void 0:e.in).getMonth()}function x6(t,e){return ct(t,e==null?void 0:e.in).getFullYear()}function A6(t,e){return+ct(t)>+ct(e)}function R6(t,e){return+ct(t)<+ct(e)}function C6(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function I6(t,e,n){const[i,a]=ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function D6(t,e,n){const i=ct(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=Qt(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=w6(c);return i.setMonth(e,Math.min(l,d)),i}function k6(t,e,n){const i=ct(t,n==null?void 0:n.in);return isNaN(+i)?Qt(t,NaN):(i.setFullYear(e),i)}const BT=5,O6=4;function M6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,BT*7-1);return e.getMonth(t)===e.getMonth(l)?BT:O6}function jx(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function N6(t,e){const n=jx(t,e),i=M6(t,e);return e.addDays(n,i*7-1)}class ss{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?An.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new An(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Rx(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):Cx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):pV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):mV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):Dx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):EV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):wV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):N6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):AV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):bV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Mx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):xV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):b6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Nx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):S6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):x6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Vx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):A6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):R6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):kx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):_V(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):C6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):I6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):gV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):yV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):D6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):k6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):jx(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Sc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):wc(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):SV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Rl(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):Ox(i)},this.options={locale:m_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const ci=new ss;class Ux{constructor(e,n,i=ci){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class P6{constructor(e,n){this.date=e,this.weeks=n}}class V6{constructor(e,n){this.days=n,this.weekNumber=e}}function L6(t){return fe.createElement("button",{...t})}function j6(t){return fe.createElement("span",{...t})}function U6(t){const{size:e=24,orientation:n="left",className:i}=t;return fe.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&fe.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&fe.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&fe.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&fe.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function q6(t){const{day:e,modifiers:n,...i}=t;return fe.createElement("td",{...i})}function B6(t){const{day:e,modifiers:n,...i}=t,a=fe.useRef(null);return fe.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),fe.createElement("button",{ref:a,...i})}var Ee;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(Ee||(Ee={}));var St;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(St||(St={}));var xr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(xr||(xr={}));var Zn;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(Zn||(Zn={}));function z6(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[Ee.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return fe.createElement("span",{"data-disabled":l.disabled,className:a[Ee.DropdownRoot]},fe.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>fe.createElement(i.Option,{key:p,value:p,disabled:v},g))),fe.createElement("span",{className:a[Ee.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,fe.createElement(i.Chevron,{orientation:"down",size:18,className:a[Ee.Chevron]})))}function F6(t){return fe.createElement("div",{...t})}function $6(t){return fe.createElement("div",{...t})}function H6(t){const{calendarMonth:e,displayIndex:n,...i}=t;return fe.createElement("div",{...i},t.children)}function G6(t){const{calendarMonth:e,displayIndex:n,...i}=t;return fe.createElement("div",{...i})}function Y6(t){return fe.createElement("table",{...t})}function W6(t){return fe.createElement("div",{...t})}const qx=F.createContext(void 0);function Bc(){const t=F.useContext(qx);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function Q6(t){const{components:e}=Bc();return fe.createElement(e.Dropdown,{...t})}function K6(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Bc(),v=F.useCallback(w=>{a&&(n==null||n(w))},[a,n]),T=F.useCallback(w=>{i&&(e==null||e(w))},[i,e]);return fe.createElement("nav",{...l},fe.createElement(c.PreviousMonthButton,{type:"button",className:d[Ee.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:T},fe.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[Ee.Chevron],orientation:"left"})),fe.createElement(c.NextMonthButton,{type:"button",className:d[Ee.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},fe.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[Ee.Chevron]})))}function X6(t){const{components:e}=Bc();return fe.createElement(e.Button,{...t})}function Z6(t){return fe.createElement("option",{...t})}function J6(t){const{components:e}=Bc();return fe.createElement(e.Button,{...t})}function eL(t){const{rootRef:e,...n}=t;return fe.createElement("div",{...n,ref:e})}function tL(t){return fe.createElement("select",{...t})}function nL(t){const{week:e,...n}=t;return fe.createElement("tr",{...n})}function rL(t){return fe.createElement("th",{...t})}function iL(t){return fe.createElement("thead",{"aria-hidden":!0},fe.createElement("tr",{...t}))}function sL(t){const{week:e,...n}=t;return fe.createElement("th",{...n})}function aL(t){return fe.createElement("th",{...t})}function oL(t){return fe.createElement("tbody",{...t})}function lL(t){const{components:e}=Bc();return fe.createElement(e.Dropdown,{...t})}const uL=Object.freeze(Object.defineProperty({__proto__:null,Button:L6,CaptionLabel:j6,Chevron:U6,Day:q6,DayButton:B6,Dropdown:z6,DropdownNav:F6,Footer:$6,Month:H6,MonthCaption:G6,MonthGrid:Y6,Months:W6,MonthsDropdown:Q6,Nav:K6,NextMonthButton:X6,Option:Z6,PreviousMonthButton:J6,Root:eL,Select:tL,Week:nL,WeekNumber:sL,WeekNumberHeader:aL,Weekday:rL,Weekdays:iL,Weeks:oL,YearsDropdown:lL},Symbol.toStringTag,{value:"Module"}));function Gi(t,e,n=!1,i=ci){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function Bx(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function g_(t){return!!(t&&typeof t=="object"&&"from"in t)}function zx(t){return!!(t&&typeof t=="object"&&"after"in t)}function Fx(t){return!!(t&&typeof t=="object"&&"before"in t)}function $x(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function Hx(t,e){return Array.isArray(t)&&t.every(e.isDate)}function Yi(t,e,n=ci){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(Hx(d,n))return d.includes(t);if(g_(d))return Gi(d,t,!1,n);if($x(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(Bx(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,T=g<0;return c(d.before,d.after)?T&&v:v||T}return zx(d)?l(t,d.after)>0:Fx(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function cL(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:T,isSameMonth:w,startOfMonth:C,isBefore:D,endOfMonth:q,isAfter:k}=a,P=n&&C(n),j=i&&q(i),B={[St.focused]:[],[St.outside]:[],[St.disabled]:[],[St.hidden]:[],[St.today]:[]},te={};for(const M of t){const{date:J,displayMonth:A}=M,R=!!(A&&!w(J,A)),I=!!(P&&D(J,P)),V=!!(j&&k(J,j)),U=!!(l&&Yi(J,l,a)),$=!!(c&&Yi(J,c,a))||I||V||!g&&!p&&R||g&&p===!1&&R,N=T(J,v??a.today());R&&B.outside.push(M),U&&B.disabled.push(M),$&&B.hidden.push(M),N&&B.today.push(M),d&&Object.keys(d).forEach(dt=>{const Ke=d==null?void 0:d[dt];Ke&&Yi(J,Ke,a)&&(te[dt]?te[dt].push(M):te[dt]=[M])})}return M=>{const J={[St.focused]:!1,[St.disabled]:!1,[St.hidden]:!1,[St.outside]:!1,[St.today]:!1},A={};for(const R in B){const I=B[R];J[R]=I.some(V=>V===M)}for(const R in te)A[R]=te[R].some(I=>I===M);return{...J,...A}}}function hL(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[St[l]]?a.push(e[St[l]]):e[xr[l]]&&a.push(e[xr[l]]),a),[e[Ee.Day]])}function fL(t){return{...uL,...t}}function dL(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function pL(){const t={};for(const e in Ee)t[Ee[e]]=`rdp-${Ee[e]}`;for(const e in St)t[St[e]]=`rdp-${St[e]}`;for(const e in xr)t[xr[e]]=`rdp-${xr[e]}`;for(const e in Zn)t[Zn[e]]=`rdp-${Zn[e]}`;return t}function Gx(t,e,n){return(n??new ss(e)).format(t,"LLLL y")}const mL=Gx;function gL(t,e,n){return(n??new ss(e)).format(t,"d")}function yL(t,e=ci){return e.format(t,"LLLL")}function _L(t,e,n){return(n??new ss(e)).format(t,"cccccc")}function vL(t,e=ci){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function EL(){return""}function Yx(t,e=ci){return e.format(t,"yyyy")}const bL=Yx,TL=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Gx,formatDay:gL,formatMonthCaption:mL,formatMonthDropdown:yL,formatWeekNumber:vL,formatWeekNumberHeader:EL,formatWeekdayName:_L,formatYearCaption:bL,formatYearDropdown:Yx},Symbol.toStringTag,{value:"Module"}));function wL(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...TL,...t}}function SL(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(w=>{const C=i.formatMonthDropdown(w,a),D=g(w),q=e&&w<l(e)||n&&w>l(n)||!1;return{value:D,label:C,disabled:q}})}function xL(t,e={},n={}){let i={...e==null?void 0:e[Ee.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function AL(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function RL(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,T=l(t),w=c(e),C=[];let D=T;for(;g(D,w)||v(D,w);)C.push(D),D=d(D,1);return a&&C.reverse(),C.map(q=>{const k=n.formatYearDropdown(q,i);return{value:p(q),label:k,disabled:!1}})}function Wx(t,e,n,i){let a=(i??new ss(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const CL=Wx;function Qx(t,e,n){return(n??new ss(e)).format(t,"LLLL y")}const IL=Qx;function DL(t,e,n,i){let a=(i??new ss(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function kL(t){return"Choose the Month"}function OL(){return""}function ML(t){return"Go to the Next Month"}function NL(t){return"Go to the Previous Month"}function PL(t,e,n){return(n??new ss(e)).format(t,"cccc")}function VL(t,e){return`Week ${t}`}function LL(t){return"Week Number"}function jL(t){return"Choose the Year"}const UL=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:IL,labelDay:CL,labelDayButton:Wx,labelGrid:Qx,labelGridcell:DL,labelMonthDropdown:kL,labelNav:OL,labelNext:ML,labelPrevious:NL,labelWeekNumber:VL,labelWeekNumberHeader:LL,labelWeekday:PL,labelYearDropdown:jL},Symbol.toStringTag,{value:"Module"})),zc=t=>t instanceof HTMLElement?t:null,mg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],qL=t=>zc(t.querySelector("[data-animated-month]")),gg=t=>zc(t.querySelector("[data-animated-caption]")),yg=t=>zc(t.querySelector("[data-animated-weeks]")),BL=t=>zc(t.querySelector("[data-animated-nav]")),zL=t=>zc(t.querySelector("[data-animated-weekdays]"));function FL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=F.useRef(null),d=F.useRef(i),p=F.useRef(!1);F.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),T=l.isAfter(i[0].date,g[0].date),w=T?n[Zn.caption_after_enter]:n[Zn.caption_before_enter],C=T?n[Zn.weeks_after_enter]:n[Zn.weeks_before_enter],D=c.current,q=t.current.cloneNode(!0);if(q instanceof HTMLElement?(mg(q).forEach(B=>{if(!(B instanceof HTMLElement))return;const te=qL(B);te&&B.contains(te)&&B.removeChild(te);const M=gg(B);M&&M.classList.remove(w);const J=yg(B);J&&J.classList.remove(C)}),c.current=q):c.current=null,p.current||v||a)return;const k=D instanceof HTMLElement?mg(D):[],P=mg(t.current);if(P!=null&&P.every(j=>j instanceof HTMLElement)&&k&&k.every(j=>j instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const j=BL(t.current);j&&(j.style.zIndex="1"),P.forEach((B,te)=>{const M=k[te];if(!M)return;B.style.position="relative",B.style.overflow="hidden";const J=gg(B);J&&J.classList.add(w);const A=yg(B);A&&A.classList.add(C);const R=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),j&&(j.style.zIndex=""),J&&J.classList.remove(w),A&&A.classList.remove(C),B.style.position="",B.style.overflow="",B.contains(M)&&B.removeChild(M)};M.style.pointerEvents="none",M.style.position="absolute",M.style.overflow="hidden",M.setAttribute("aria-hidden","true");const I=zL(M);I&&(I.style.opacity="0");const V=gg(M);V&&(V.classList.add(T?n[Zn.caption_before_exit]:n[Zn.caption_after_exit]),V.addEventListener("animationend",R));const U=yg(M);U&&U.classList.add(T?n[Zn.weeks_before_exit]:n[Zn.weeks_after_exit]),B.insertBefore(M,B.firstChild)})}})}function $L(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:T,endOfBroadcastWeek:w,endOfISOWeek:C,endOfMonth:D,endOfWeek:q,isAfter:k,startOfBroadcastWeek:P,startOfISOWeek:j,startOfWeek:B}=i,te=p?P(a,i):c?j(a):B(a),M=p?w(l):c?C(D(l)):q(D(l)),J=v(M,te),A=T(l,a)+1,R=[];for(let U=0;U<=J;U++){const $=g(te,U);if(e&&k($,e))break;R.push($)}const V=(p?35:42)*A;if(d&&R.length<V){const U=V-R.length;for(let $=0;$<U;$++){const N=g(R[R.length-1],1);R.push(N)}}return R}function HL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function GL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function zT(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:T}=i;if(n&&g(n,p)<d-1){const w=-1*(d-1);p=v(n,w)}return e&&g(p,e)<0&&(p=e),T(p)}function YL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:T,startOfISOWeek:w,startOfWeek:C}=i,D=t.reduce((q,k)=>{const P=n.broadcastCalendar?T(k,i):n.ISOWeek?w(k):C(k),j=n.broadcastCalendar?l(k):n.ISOWeek?c(d(k)):p(d(k)),B=e.filter(A=>A>=P&&A<=j),te=n.broadcastCalendar?35:42;if(n.fixedWeeks&&B.length<te){const A=e.filter(R=>{const I=te-B.length;return R>j&&R<=a(j,I)});B.push(...A)}const M=B.reduce((A,R)=>{const I=n.ISOWeek?g(R):v(R),V=A.find($=>$.weekNumber===I),U=new Ux(R,k,i);return V?V.days.push(U):A.push(new V6(I,[U])),A},[]),J=new P6(k,M);return q.push(J),q},[]);return n.reverseMonths?D.reverse():D}function WL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:T}=e,{fromYear:w,toYear:C,fromMonth:D,toMonth:q}=t;!n&&D&&(n=D),!n&&w&&(n=e.newDate(w,0,1)),!i&&q&&(i=q),!i&&C&&(i=v(C,11,31));const k=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):w?n=v(w,0,1):!n&&k&&(n=a(p(t.today??T(),-100))),i?i=d(i):C?i=v(C,11,31):!i&&k&&(i=g(t.today??T())),[n&&l(n),i&&l(i)]}function QL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function KL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function XL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function Hd(t,e){const[n,i]=F.useState(t);return[e===void 0?n:e,i]}function ZL(t,e){const[n,i]=WL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=zT(t,n,i,e),[d,p]=Hd(c,t.month?c:void 0);F.useEffect(()=>{const J=zT(t,n,i,e);p(J)},[t.timeZone]);const g=GL(d,i,t,e),v=$L(g,t.endMonth?l(t.endMonth):void 0,t,e),T=YL(g,v,t,e),w=XL(T),C=HL(T),D=KL(d,n,t,e),q=QL(d,i,t,e),{disableNavigation:k,onMonthChange:P}=t,j=J=>w.some(A=>A.days.some(R=>R.isEqualTo(J))),B=J=>{if(k)return;let A=a(J);n&&A<a(n)&&(A=a(n)),i&&A>a(i)&&(A=a(i)),p(A),P==null||P(A)};return{months:T,weeks:w,days:C,navStart:n,navEnd:i,previousMonth:D,nextMonth:q,goToMonth:B,goToDay:J=>{j(J)||B(J.date)}}}var Zr;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(Zr||(Zr={}));function FT(t){return!t[St.disabled]&&!t[St.hidden]&&!t[St.outside]}function JL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);FT(d)&&(d[St.focused]&&l<Zr.FocusedModifier?(a=c,l=Zr.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<Zr.LastFocused?(a=c,l=Zr.LastFocused):n(c.date)&&l<Zr.Selected?(a=c,l=Zr.Selected):d[St.today]&&l<Zr.Today&&(a=c,l=Zr.Today))}return a||(a=t.find(c=>FT(e(c)))),a}function ej(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:T,addYears:w,endOfBroadcastWeek:C,endOfISOWeek:D,endOfWeek:q,max:k,min:P,startOfBroadcastWeek:j,startOfISOWeek:B,startOfWeek:te}=c;let J={day:g,week:T,month:v,year:w,startOfWeek:A=>p?j(A,c):d?B(A):te(A),endOfWeek:A=>p?C(A):d?D(A):q(A)}[t](n,e==="after"?1:-1);return e==="before"&&i?J=k([i,J]):e==="after"&&a&&(J=P([a,J])),J}function Kx(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=ej(t,e,n.date,i,a,l,c),g=!!(l.disabled&&Yi(p,l.disabled,c)),v=!!(l.hidden&&Yi(p,l.hidden,c)),T=p,w=new Ux(p,T,c);return!g&&!v?w:Kx(t,e,w,i,a,l,c,d+1)}function tj(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=F.useState(),p=JL(e.days,n,i||(()=>!1),c),[g,v]=F.useState(l?p:void 0);return{isFocusTarget:q=>!!(p!=null&&p.isEqualTo(q)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(q,k)=>{if(!g)return;const P=Kx(q,k,g,e.navStart,e.navEnd,t,a);P&&(e.goToDay(P),v(P))}}}function nj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Hd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=C=>(d==null?void 0:d.some(D=>p(D,C)))??!1,{min:v,max:T}=t;return{selected:d,select:(C,D,q)=>{let k=[...d??[]];if(g(C)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;k=d==null?void 0:d.filter(P=>!p(P,C))}else(d==null?void 0:d.length)===T?k=[C]:k=[...k,C];return a||c(k),a==null||a(k,C,D,q),k},isSelected:g}}function rj(t,e,n=0,i=0,a=!1,l=ci){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let T;if(!c&&!d)T={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?T={from:c,to:t}:a?T={from:c,to:void 0}:T=void 0:v(t,c)?T={from:t,to:c}:T={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?T={from:c,to:d}:T=void 0;else if(p(c,t))T={from:c,to:n>0?void 0:t};else if(p(d,t))T={from:t,to:n>0?void 0:t};else if(v(t,c))T={from:t,to:d};else if(g(t,c))T={from:c,to:t};else if(g(t,d))T={from:c,to:t};else throw new Error("Invalid range");if(T!=null&&T.from&&(T!=null&&T.to)){const w=l.differenceInCalendarDays(T.to,T.from);i>0&&w>i?T={from:t,to:void 0}:n>1&&w<n&&(T={from:t,to:void 0})}return T}function ij(t,e,n=ci){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function $T(t,e,n=ci){return Gi(t,e.from,!1,n)||Gi(t,e.to,!1,n)||Gi(e,t.from,!1,n)||Gi(e,t.to,!1,n)}function sj(t,e,n=ci){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Gi(t,d,!1,n):Hx(d,n)?d.some(p=>Gi(t,p,!1,n)):g_(d)?d.from&&d.to?$T(t,{from:d.from,to:d.to},n):!1:$x(d)?ij(t,d.dayOfWeek,n):Bx(d)?n.isAfter(d.before,d.after)?$T(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Yi(t.from,d,n)||Yi(t.to,d,n):zx(d)||Fx(d)?Yi(t.from,d,n)||Yi(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function aj(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=Hd(a,c?a:void 0),g=c?a:d;return{selected:g,select:(w,C,D)=>{const{min:q,max:k}=t,P=w?rj(w,g,q,k,l,e):void 0;return i&&n&&(P!=null&&P.from)&&P.to&&sj({from:P.from,to:P.to},n,e)&&(P.from=w,P.to=void 0),c||p(P),c==null||c(P,w,C,D),P},isSelected:w=>g&&Gi(g,w,!1,e)}}function oj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Hd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(T,w,C)=>{let D=T;return!i&&d&&d&&p(T,d)&&(D=void 0),a||c(D),a==null||a(D,T,w,C),D},isSelected:T=>d?p(d,T):!1}}function lj(t,e){const n=oj(t,e),i=nj(t,e),a=aj(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function uj(t){var os;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new An(e.today,e.timeZone)),e.month&&(e.month=new An(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new An(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new An(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new An(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new An(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(os=e.selected)==null?void 0:os.map(Oe=>new An(Oe,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new An(e.selected.from,e.timeZone):void 0,to:e.selected.to?new An(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=F.useMemo(()=>{const Oe={...m_,...e.locale};return{dateLib:new ss({locale:Oe,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:fL(e.components),formatters:wL(e.formatters),labels:{...UL,...e.labels},locale:Oe,classNames:{...pL(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:T=1,onDayBlur:w,onDayClick:C,onDayFocus:D,onDayKeyDown:q,onDayMouseEnter:k,onDayMouseLeave:P,onNextClick:j,onPrevClick:B,showWeekNumber:te,styles:M}=e,{formatCaption:J,formatDay:A,formatMonthDropdown:R,formatWeekNumber:I,formatWeekNumberHeader:V,formatWeekdayName:U,formatYearDropdown:$}=i,N=ZL(e,l),{days:dt,months:Ke,navStart:ee,navEnd:ce,previousMonth:pe,nextMonth:Te,goToMonth:L}=N,se=cL(dt,e,ee,ce,l),{isSelected:ue,select:le,selected:ye}=lj(e,l)??{},{blur:Ie,focused:_e,isFocusTarget:gt,moveFocus:Fe,setFocused:Tt}=tj(e,N,se,ue??(()=>!1),l),{labelDayButton:Pn,labelGridcell:vn,labelGrid:Kt,labelMonthDropdown:hi,labelNav:Mr,labelPrevious:la,labelNext:co,labelWeekday:Vn,labelWeekNumber:Bl,labelWeekNumberHeader:ua,labelYearDropdown:as}=a,fi=F.useMemo(()=>AL(l,e.ISOWeek),[l,e.ISOWeek]),ho=g!==void 0||C!==void 0,Nr=F.useCallback(()=>{pe&&(L(pe),B==null||B(pe))},[pe,L,B]),di=F.useCallback(()=>{Te&&(L(Te),j==null||j(Te))},[L,Te,j]),fo=F.useCallback((Oe,Je)=>xe=>{xe.preventDefault(),xe.stopPropagation(),Tt(Oe),le==null||le(Oe.date,Je,xe),C==null||C(Oe.date,Je,xe)},[le,C,Tt]),_t=F.useCallback((Oe,Je)=>xe=>{Tt(Oe),D==null||D(Oe.date,Je,xe)},[D,Tt]),Xe=F.useCallback((Oe,Je)=>xe=>{Ie(),w==null||w(Oe.date,Je,xe)},[Ie,w]),Dn=F.useCallback((Oe,Je)=>xe=>{const We={ArrowLeft:[xe.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[xe.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[xe.shiftKey?"year":"week","after"],ArrowUp:[xe.shiftKey?"year":"week","before"],PageUp:[xe.shiftKey?"year":"month","before"],PageDown:[xe.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(We[xe.key]){xe.preventDefault(),xe.stopPropagation();const[Zt,Me]=We[xe.key];Fe(Zt,Me)}q==null||q(Oe.date,Je,xe)},[Fe,q,e.dir]),Xt=F.useCallback((Oe,Je)=>xe=>{k==null||k(Oe.date,Je,xe)},[k]),po=F.useCallback((Oe,Je)=>xe=>{P==null||P(Oe.date,Je,xe)},[P]),zl=F.useCallback(Oe=>Je=>{const xe=Number(Je.target.value),We=l.setMonth(l.startOfMonth(Oe),xe);L(We)},[l,L]),pi=F.useCallback(Oe=>Je=>{const xe=Number(Je.target.value),We=l.setYear(l.startOfMonth(Oe),xe);L(We)},[l,L]),{className:mi,style:gi}=F.useMemo(()=>({className:[d[Ee.Root],e.className].filter(Boolean).join(" "),style:{...M==null?void 0:M[Ee.Root],...e.style}}),[d,e.className,e.style,M]),zn=dL(e),yi=F.useRef(null);FL(yi,!!e.animate,{classNames:d,months:Ke,focused:_e,dateLib:l});const _i={dayPickerProps:e,selected:ye,select:le,isSelected:ue,months:Ke,nextMonth:Te,previousMonth:pe,goToMonth:L,getModifiers:se,components:n,classNames:d,styles:M,labels:a,formatters:i};return fe.createElement(qx.Provider,{value:_i},fe.createElement(n.Root,{rootRef:e.animate?yi:void 0,className:mi,style:gi,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...zn},fe.createElement(n.Months,{className:d[Ee.Months],style:M==null?void 0:M[Ee.Months]},!e.hideNavigation&&!v&&fe.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Ee.Nav],style:M==null?void 0:M[Ee.Nav],"aria-label":Mr(),onPreviousClick:Nr,onNextClick:di,previousMonth:pe,nextMonth:Te}),Ke.map((Oe,Je)=>fe.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[Ee.Month],style:M==null?void 0:M[Ee.Month],key:Je,displayIndex:Je,calendarMonth:Oe},v==="around"&&!e.hideNavigation&&Je===0&&fe.createElement(n.PreviousMonthButton,{type:"button",className:d[Ee.PreviousMonthButton],tabIndex:pe?void 0:-1,"aria-disabled":pe?void 0:!0,"aria-label":la(pe),onClick:Nr,"data-animated-button":e.animate?"true":void 0},fe.createElement(n.Chevron,{disabled:pe?void 0:!0,className:d[Ee.Chevron],orientation:e.dir==="rtl"?"right":"left"})),fe.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[Ee.MonthCaption],style:M==null?void 0:M[Ee.MonthCaption],calendarMonth:Oe,displayIndex:Je},p!=null&&p.startsWith("dropdown")?fe.createElement(n.DropdownNav,{className:d[Ee.Dropdowns],style:M==null?void 0:M[Ee.Dropdowns]},p==="dropdown"||p==="dropdown-months"?fe.createElement(n.MonthsDropdown,{className:d[Ee.MonthsDropdown],"aria-label":hi(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:zl(Oe.date),options:SL(Oe.date,ee,ce,i,l),style:M==null?void 0:M[Ee.Dropdown],value:l.getMonth(Oe.date)}):fe.createElement("span",null,R(Oe.date,l)),p==="dropdown"||p==="dropdown-years"?fe.createElement(n.YearsDropdown,{className:d[Ee.YearsDropdown],"aria-label":as(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:pi(Oe.date),options:RL(ee,ce,i,l,!!e.reverseYears),style:M==null?void 0:M[Ee.Dropdown],value:l.getYear(Oe.date)}):fe.createElement("span",null,$(Oe.date,l)),fe.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},J(Oe.date,l.options,l))):fe.createElement(n.CaptionLabel,{className:d[Ee.CaptionLabel],role:"status","aria-live":"polite"},J(Oe.date,l.options,l))),v==="around"&&!e.hideNavigation&&Je===T-1&&fe.createElement(n.NextMonthButton,{type:"button",className:d[Ee.NextMonthButton],tabIndex:Te?void 0:-1,"aria-disabled":Te?void 0:!0,"aria-label":co(Te),onClick:di,"data-animated-button":e.animate?"true":void 0},fe.createElement(n.Chevron,{disabled:Te?void 0:!0,className:d[Ee.Chevron],orientation:e.dir==="rtl"?"left":"right"})),Je===T-1&&v==="after"&&!e.hideNavigation&&fe.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Ee.Nav],style:M==null?void 0:M[Ee.Nav],"aria-label":Mr(),onPreviousClick:Nr,onNextClick:di,previousMonth:pe,nextMonth:Te}),fe.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Kt(Oe.date,l.options,l)||void 0,className:d[Ee.MonthGrid],style:M==null?void 0:M[Ee.MonthGrid]},!e.hideWeekdays&&fe.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[Ee.Weekdays],style:M==null?void 0:M[Ee.Weekdays]},te&&fe.createElement(n.WeekNumberHeader,{"aria-label":ua(l.options),className:d[Ee.WeekNumberHeader],style:M==null?void 0:M[Ee.WeekNumberHeader],scope:"col"},V()),fi.map(xe=>fe.createElement(n.Weekday,{"aria-label":Vn(xe,l.options,l),className:d[Ee.Weekday],key:String(xe),style:M==null?void 0:M[Ee.Weekday],scope:"col"},U(xe,l.options,l)))),fe.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[Ee.Weeks],style:M==null?void 0:M[Ee.Weeks]},Oe.weeks.map(xe=>fe.createElement(n.Week,{className:d[Ee.Week],key:xe.weekNumber,style:M==null?void 0:M[Ee.Week],week:xe},te&&fe.createElement(n.WeekNumber,{week:xe,style:M==null?void 0:M[Ee.WeekNumber],"aria-label":Bl(xe.weekNumber,{locale:c}),className:d[Ee.WeekNumber],scope:"row",role:"rowheader"},I(xe.weekNumber,l)),xe.days.map(We=>{const{date:Zt}=We,Me=se(We);if(Me[St.focused]=!Me.hidden&&!!(_e!=null&&_e.isEqualTo(We)),Me[xr.selected]=(ue==null?void 0:ue(Zt))||Me.selected,g_(ye)){const{from:tr,to:us}=ye;Me[xr.range_start]=!!(tr&&us&&l.isSameDay(Zt,tr)),Me[xr.range_end]=!!(tr&&us&&l.isSameDay(Zt,us)),Me[xr.range_middle]=Gi(ye,Zt,!0,l)}const ca=xL(Me,M,e.modifiersStyles),Pr=hL(Me,d,e.modifiersClassNames),ls=!ho&&!Me.hidden?vn(Zt,Me,l.options,l):void 0;return fe.createElement(n.Day,{key:`${l.format(Zt,"yyyy-MM-dd")}_${l.format(We.displayMonth,"yyyy-MM")}`,day:We,modifiers:Me,className:Pr.join(" "),style:ca,role:"gridcell","aria-selected":Me.selected||void 0,"aria-label":ls,"data-day":l.format(Zt,"yyyy-MM-dd"),"data-month":We.outside?l.format(Zt,"yyyy-MM"):void 0,"data-selected":Me.selected||void 0,"data-disabled":Me.disabled||void 0,"data-hidden":Me.hidden||void 0,"data-outside":We.outside||void 0,"data-focused":Me.focused||void 0,"data-today":Me.today||void 0},!Me.hidden&&ho?fe.createElement(n.DayButton,{className:d[Ee.DayButton],style:M==null?void 0:M[Ee.DayButton],type:"button",day:We,modifiers:Me,disabled:Me.disabled||void 0,tabIndex:gt(We)?0:-1,"aria-label":Pn(Zt,Me,l.options,l),onClick:fo(We,Me),onBlur:Xe(We,Me),onFocus:_t(We,Me),onKeyDown:Dn(We,Me),onMouseEnter:Xt(We,Me),onMouseLeave:po(We,Me)},A(Zt,l.options,l)):!Me.hidden&&A(We.date,l.options,l))})))))))),e.footer&&fe.createElement(n.Footer,{className:d[Ee.Footer],style:M==null?void 0:M[Ee.Footer],role:"status","aria-live":"polite"},e.footer)))}const cj="./assets/calendar-arrow-BfXL-r2k.png";function hj({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var q;const[a,l]=F.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=F.useState(((q=t==null?void 0:t.start)==null?void 0:q.getFullYear())??new Date().getFullYear()),[p,g]=F.useState(!1),v=F.useMemo(()=>{const k=P=>`${P.getFullYear()}.${String(P.getMonth()+1).padStart(2,"0")}.${String(P.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${k(a.start)} ~ ${k(a.end)}`:a.start?`${k(a.start)} ~`:""},[a]),T=new Date().getMonth(),w=F.useRef(null);F.useEffect(()=>{if(p&&w.current){const k=w.current.querySelectorAll(".month-box")[T];k&&k.scrollIntoView({block:"start"})}},[p]);const C=F.useRef(null);F.useEffect(()=>{const k=P=>{C.current&&!C.current.contains(P.target)&&g(!1)};return p&&document.addEventListener("click",k),()=>{document.removeEventListener("click",k)}},[p]);const D=k=>{if(!a.start||a.start&&a.end){l({start:k,end:null});return}if(a.start&&!a.end)if(k<a.start)l({start:k,end:null});else{const P={start:a.start,end:k};l(P),e==null||e(P),i&&g(!1)}};return _.jsxs(fj,{ref:C,children:[_.jsx(wj,{}),_.jsx(dj,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(k=>!k)}),p&&_.jsxs(mj,{children:[_.jsxs(gj,{children:[_.jsx(yj,{dir:"prev",onClick:()=>d(k=>k-1)}),_.jsx("span",{children:c}),_.jsx(_j,{dir:"next",onClick:()=>d(k=>k+1)})]}),_.jsx(vj,{children:["일","월","화","수","목","금","토"].map(k=>_.jsx("span",{children:k},k))}),_.jsx(pj,{children:_.jsx(Ej,{ref:w,children:Array.from({length:12}).map((k,P)=>{const j=new Date(c,P,1),B=M=>new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime(),te=M=>M.getFullYear()===j.getFullYear()&&M.getMonth()===j.getMonth();return _.jsxs(bj,{className:"month-box",children:[_.jsx(Tj,{children:String(P+1).padStart(2,"0")}),_.jsx(uj,{mode:"single",month:j,selected:void 0,onDayClick:D,showOutsideDays:!1,modifiers:{start:M=>!!a.start&&te(M)&&B(M)===B(a.start),end:M=>!!a.end&&te(M)&&B(M)===B(a.end),middle:M=>{if(!a.start||!a.end||!te(M))return!1;const J=B(M),A=B(a.start),R=B(a.end);return J>A&&J<R}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},P)})})})]})]})}const fj=G.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,dj=G.input`
  width: 100%;
  padding: 11.5px 12px;
  border: 1px solid ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.gray02)||"#d0d5dd"}};
  border-radius: 10px;
  font-family: 'Pretendard';
  font-size: 16px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>{var e;return((e=t==null?void 0:t.colors)==null?void 0:e.black)||"#111"}};
  }
`,pj=G.div`
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
`,mj=G.div`
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
`,gj=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,Xx=G.button`
  width: 48px;
  height: 100%;
  background-image: url(${cj});
  background-repeat: no-repeat;
`,yj=G(Xx)``,_j=G(Xx)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,vj=G.div`
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
`,Ej=G.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,bj=G.div`
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
`,Tj=G.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,wj=Hw`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`;function Sj({onApplyStatus:t,onApplyRange:e}){const[n,i]=F.useState({start:null,end:null}),[a,l]=F.useState("진행 상태 선택");return _.jsxs(xj,{children:[_.jsx(hj,{value:n,onApply:c=>{i(c),e(c)}}),_.jsxs(Aj,{value:a,onChange:c=>l(c.target.value),children:[_.jsx("option",{children:"진행 상태 선택"}),_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]}),_.jsx(Rj,{type:"button",onClick:()=>t(a),children:"필터 적용"})]})}const xj=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Aj=G.select`
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
  background-image: url(${Sx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,Rj=G.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01}
`,Cj="./assets/search-icon-g0O6fOpZ.svg";function Ij(){return _.jsxs(Dj,{children:[_.jsx(kj,{placeholder:"검색어를 입력해 주세요."}),_.jsx(Oj,{type:"button"})]})}const Dj=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 11px 14.5px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
`,kj=G.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,Oj=G.button`
  width: 24px;
  height: 24px;
  background-image: url(${Cj});
`;function Mj({onApplyStatus:t,onApplyRange:e}){return _.jsxs(Nj,{children:[_.jsx(Sj,{onApplyStatus:t,onApplyRange:e}),_.jsx(Ij,{})]})}const Nj=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 48px 30px;
`;function Pj({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=F.useState(""),[l,c]=F.useState([]),[d,p]=F.useState("진행 상태 선택"),[g,v]=F.useState({start:null,end:null});F.useEffect(()=>{const M=Ed(ao,J=>{J&&J.displayName&&a(J.displayName)});return()=>M()},[]),F.useEffect(()=>{if(!i)return;const M=io(Xi(Yt,"design_request"),so("requester","==",i),l_("design_request_id","desc")),J=$d(M,A=>{const R=A.docs.map(I=>({id:I.id,...I.data()}));c(R)});return()=>J()},[i]);const T=M=>v(M),w=M=>p(M),C=M=>M==="검수요청"?"진행중":M==="검수중"?"검수요청":M,D=M=>new Date(M.getFullYear(),M.getMonth(),M.getDate()),q=M=>{if(!M)return null;if(typeof M=="object"&&typeof M.toDate=="function")return D(M.toDate());if(M instanceof Date)return D(M);if(typeof M=="number")return D(new Date(M));if(typeof M=="string"){const A=M.replace(/\./g,"-").replace(/\//g,"-").split("-");if(A.length===3){const[I,V,U]=A.map(Number),$=I>31?I:new Date().getFullYear();return new Date($,V-1,U)}if(A.length===2){const[I,V]=A.map(Number),U=new Date().getFullYear();return new Date(U,I-1,V)}const R=new Date(M);return isNaN(+R)?null:D(R)}return null},k=F.useMemo(()=>{const M=g.start?D(g.start):null,J=g.end?D(g.end):null;return l.map(A=>({...A,displayStatus:C(A.status)})).filter(A=>{if(d&&d!=="진행 상태 선택"&&A.displayStatus!==d)return!1;if(M&&J){const R=q(A.request_date)||q(A.requested_at)||q(A.requestDate)||null;return R?R>=M&&R<=J:!1}return!0})},[l,d,g]),P=async M=>{await Qa(Cr(Yt,"design_request",M),{status:"완료",requester_review_status:"검수완료"}),c(J=>J.map(A=>A.id===M?{...A,status:"완료",requester_review_status:"검수완료"}:A)),alert("완료 처리되었습니다.")},j=async M=>{const J=Cr(Yt,"design_request",M);await Qa(J,{requester_edit_state:!0});const A=await u_(J);if(A.exists()){const R={id:A.id,...A.data()};e(R),t(!0)}},B=M=>{n(M),t(!0)},te=async M=>{await Qa(Cr(Yt,"design_request",M),{status:"취소"}),c(J=>J.map(A=>A.id===M?{...A,status:"취소"}:A))};return _.jsxs(_.Fragment,{children:[_.jsx(p_,{}),_.jsx(Mj,{onApplyStatus:w,onApplyRange:T}),_.jsx(nV,{data:k,onReviewComplete:P,onCancel:te,onEditClick:j,onDetailClick:B})]})}function Vj({index:t,item:e,onChange:n,onSave:i,onDetailClick:a}){const l=d=>{if(!d)return"-";if(d.toDate){const p=d.toDate();return`${p.getMonth()+1}/${p.getDate()}`}return d},c=d=>{d.stopPropagation(),a(e)};return _.jsxs(Lj,{isCanceled:e.status==="취소",children:[_.jsx(zi,{children:t}),_.jsx(zi,{children:_.jsx(Fj,{onClick:c,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(zi,{children:l(e.request_date)}),_.jsx(zi,{children:e.requester}),_.jsx(jj,{children:l(e.completion_dt)}),_.jsx(Uj,{children:l(e.open_dt)}),_.jsx(zi,{children:e.task_form}),_.jsx(qj,{children:e.task_type}),_.jsx(Bj,{children:_.jsxs($j,{children:[e.emergency?_.jsx(Zx,{children:"긴급"}):"",_.jsx(Hj,{onClick:c,children:e.requirement})]})}),_.jsx(zi,{children:_.jsx(Gj,{href:e.url,target:"_blank"})}),_.jsx(zj,{children:_.jsx(Yj,{onClick:c,children:e.note||""})}),_.jsx(HT,{children:_.jsx(GT,{type:"date",onChange:d=>n(e.id,"start_dt",d.target.value),disabled:e.status==="취소"})}),_.jsx(HT,{children:_.jsx(GT,{type:"date",onChange:d=>n(e.id,"end_dt",d.target.value),disabled:e.status==="취소"})}),_.jsx(zi,{children:_.jsx(Wj,{type:"text",placeholder:"산출물 URL을 입력해주세요.",onChange:d=>n(e.id,"result_url",d.target.value),disabled:e.status==="취소"})}),_.jsx(zi,{children:_.jsxs("select",{onChange:d=>n(e.id,"status",d.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기중",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"})]})}),_.jsx(zi,{children:_.jsx(Jx,{onClick:()=>i(e.id),disabled:e.status==="취소",children:"저장"})})]})}const Lj=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${Zx} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Jx} {
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
`,zi=G.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,jj=G.td`
  color: ${({theme:t})=>t.colors.red};
`,Uj=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,qj=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,Bj=G.td`
  line-height: 15px;
  text-align: left;
`,zj=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,HT=G.td`
  padding: 0 6px;
`,Fj=G.span`
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
`,$j=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,Zx=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Hj=G.span`
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
`,Gj=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${d_}) no-repeat center / contain;
`,Yj=G.span`
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
`,GT=G.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Wj=G.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,Jx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function Qj({requests:t,onChange:e,onSave:n,onDetailClick:i}){return _.jsx(Kj,{children:_.jsxs(Xj,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Sn,{children:"번호"}),_.jsx(Sn,{children:"문서번호"}),_.jsx(Sn,{children:"요청일"}),_.jsx(Sn,{children:"요청자"}),_.jsxs(Sn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Sn,{children:"오픈일"}),_.jsx(Sn,{children:"업무형태"}),_.jsx(Sn,{children:"업무타입"}),_.jsx(Sn,{children:"작업항목"}),_.jsx(Sn,{children:"요청서 URL"}),_.jsx(Sn,{children:"메모"}),_.jsx(Sn,{children:"디자인 시작일"}),_.jsx(Sn,{children:"디자인 종료일"}),_.jsx(Sn,{children:"산출물 링크"}),_.jsx(Sn,{children:"진행상태"}),_.jsx(Sn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((a,l)=>_.jsx(Vj,{index:l+1,item:a,onChange:e,onSave:n,onDetailClick:i},a.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const Kj=G.div`
  padding: 0 48px;
`,Xj=G.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,Sn=G.th`
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
`;function Zj({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=F.useState([]),[a,l]=F.useState(""),[c,d]=F.useState({});F.useEffect(()=>{const w=Ed(ao,C=>{C&&C.displayName&&l(C.displayName)});return()=>w()},[]),F.useEffect(()=>{if(!a)return;const w=io(Xi(Yt,"design_request"),so("assigned_designer","==",a),l_("design_request_id","desc")),C=$d(w,D=>{const q=D.docs.map(k=>({id:k.id,...k.data()}));i(q)});return()=>C()},[a]);const p=(w,C,D)=>{d(q=>({...q,[w]:{...q[w],[C]:D}}))},g=w=>w?ft.fromDate(new Date(w)):null,v=async w=>{const C=Cr(Yt,"design_request",w),D=c[w];if(!D){alert("변경된 내용이 없습니다.");return}await Qa(C,{designer_start_date:g(D.start_dt),designer_end_date:g(D.end_dt),result_url:D.result_url||"",status:D.status}),alert("저장되었습니다.")},T=w=>{e(w),t(!0)};return _.jsxs(Jj,{children:[_.jsx(p_,{}),_.jsx(e3,{children:"디자이너 화면"}),_.jsx(Qj,{requests:n,formData:c,onChange:p,onSave:v,onDetailClick:T})]})}const Jj=G.div``,e3=G.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function t3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d}){const p=v=>{if(!v)return"-";if(v.toDate){const T=v.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return v},g=v=>{v.stopPropagation(),d(e)};return _.jsxs(n3,{isCanceled:e.status==="취소",children:[_.jsx(pr,{children:t}),_.jsx(pr,{children:_.jsx(l3,{onClick:g,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(pr,{children:p(e.request_date)}),_.jsx(pr,{children:e.requester}),_.jsx(r3,{children:p(e.completion_dt)}),_.jsx(i3,{children:p(e.open_dt)}),_.jsx(pr,{children:e.task_form}),_.jsx(s3,{children:e.task_type}),_.jsx(a3,{children:_.jsxs(u3,{children:[e.emergency?_.jsx(eA,{children:"긴급"}):"",_.jsx(c3,{onClick:g,children:e.requirement})]})}),_.jsx(pr,{children:_.jsx(YT,{href:e.url,target:"_blank"})}),_.jsx(o3,{children:_.jsx(h3,{onClick:g,children:e.note||""})}),_.jsx(pr,{children:_.jsx(f3,{status:e.status,children:e.status==="검수요청"?"검수중":e.status||"대기"})}),_.jsx(pr,{children:e.result_url?_.jsx(YT,{href:e.result_url,target:"_blank"}):""}),_.jsx(pr,{children:p(e.designer_start_date)}),_.jsx(pr,{children:p(e.designer_end_date)}),_.jsxs(pr,{children:[_.jsxs(d3,{value:i,onChange:v=>a(v.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(v=>_.jsx("option",{value:v.name,children:v.name},v.id))]}),_.jsx(tA,{onClick:l,disabled:e.status==="취소",children:"배정"})]}),_.jsx(pr,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(nA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(p3,{children:"검수완료"}):""})]})}const n3=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${eA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${nA}, ${tA} {
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
`,pr=G.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,r3=G.td`
  color: ${({theme:t})=>t.colors.red};
`,i3=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,s3=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,a3=G.td`
  line-height: 15px;
  text-align: left;
`,o3=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,l3=G.span`
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
`,u3=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,eA=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,c3=G.span`
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
`,YT=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${d_}) no-repeat center / contain;
`,h3=G.span`
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
`,f3=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,tA=G.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,d3=G.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,nA=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,p3=G.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;function m3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c}){return _.jsx(g3,{children:_.jsxs(y3,{children:[_.jsx(_3,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(mn,{children:"번호"}),_.jsx(mn,{children:"문서번호"}),_.jsx(mn,{children:"요청일"}),_.jsx(mn,{children:"요청자"}),_.jsxs(mn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(mn,{children:"오픈일"}),_.jsx(mn,{children:"업무형태"}),_.jsx(mn,{children:"업무타입"}),_.jsx(mn,{children:"작업항목"}),_.jsx(mn,{children:"요청서 URL"}),_.jsx(mn,{children:"메모"}),_.jsx(mn,{children:"진행상태"}),_.jsx(mn,{children:"산출물 URL"}),_.jsxs(mn,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(mn,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(mn,{children:"배정"}),_.jsx(mn,{children:"검수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((d,p)=>_.jsx(t3,{index:p+1,item:d,designerList:e,selectedDesigner:n[d.id]||"",onDesignerSelect:g=>i(d.id,g),onAssignDesigner:()=>a(d.id),onSendToRequester:()=>l(d.id),onDetailClick:c},d.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const g3=G.div`
  padding: 0 48px;
`,y3=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,_3=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,mn=G.th`
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
`;function v3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=F.useState([]),[a,l]=F.useState([]),[c,d]=F.useState({});F.useEffect(()=>{const w=io(Xi(Yt,"design_request"),l_("design_request_id","desc")),C=$d(w,D=>{const q=D.docs.map(k=>({id:k.id,...k.data()}));i(q)});return()=>C()},[]),F.useEffect(()=>{(async()=>{const C=io(Xi(Yt,"users"),so("role","==",2)),q=(await yx(C)).docs.map(k=>({id:k.id,...k.data()}));l(q)})()},[]);const p=(w,C)=>{d(D=>({...D,[w]:C}))},g=async w=>{const C=c[w];if(!C){alert("디자이너를 선택하세요.");return}const D=Cr(Yt,"design_request",w);await Qa(D,{assigned_designer:C}),alert("디자이너가 배정되었습니다!"),i(q=>q.map(k=>k.id===w?{...k,assigned_designer:C}:k))},v=async w=>{await Qa(Cr(Yt,"design_request",w),{manager_review_status:"검수완료",status:"검수중"}),i(C=>C.map(D=>D.id===w?{...D,manager_review_status:"검수완료",status:"검수중"}:D)),alert("요청자에게 전달되었습니다.")},T=w=>{e(w),t(!0)};return _.jsxs(E3,{children:[_.jsx(p_,{}),_.jsx(b3,{children:"매니저 요청리스트"}),_.jsx(m3,{data:n,designerList:a,selectedDesigners:c,designerSelect:p,assignDesigner:g,sendToRequester:v,onDetailClick:T})]})}const E3=G.div``,b3=G.h2`
  margin-bottom: 20px;
  padding: 0 48px;
`;function T3({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(Pj,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(Zj,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(v3,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(w3,{children:a()})}const w3=G.main``,S3="./assets/aside-logo-DoEwMgfJ.svg",x3="./assets/myrequest-icon-DhmqrZY6.svg";function A3({item:t}){return _.jsxs(R3,{status:t.status,children:[_.jsx(C3,{children:t.status}),_.jsx(I3,{status:t.status,children:t.count})]})}const R3=G.li`
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
`,C3=G.span`
  font-size: 16px;
  font-weight: 500;
`,I3=G.span`
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
`;function D3({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=[{status:"대기중",count:t.filter(c=>c.status==="대기").length},{status:"작업중",count:t.filter(c=>c.status==="진행중").length},{status:"완료",count:t.filter(c=>c.status==="완료").length}],l=(c,d)=>{switch(c){case 1:return`${d}님의 요청`;case 2:return`${d}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};return _.jsxs(k3,{children:[_.jsxs(O3,{children:[_.jsx(M3,{src:S3}),_.jsx(N3,{children:"업무 관리시스템"})]}),e===1&&_.jsx(P3,{children:_.jsx(V3,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(L3,{children:[_.jsxs(j3,{children:[_.jsx(U3,{src:x3}),_.jsx(q3,{children:l(e,n)})]}),_.jsx(B3,{children:a.map(c=>_.jsx(A3,{item:c},c.status))})]})]})}const k3=G.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,O3=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,M3=G.img`
  margin-right: 8px;
`,N3=G.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,P3=G.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,V3=G.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,L3=G.div`
  padding: 0 24px;
`,j3=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,U3=G.img``,q3=G.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,B3=G.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function z3({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(F3,{isVisible:t,onClick:e}),_.jsx($3,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const F3=G.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,$3=G.div`
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
`,rA="/assets/requestformexit-button-BcAG546a.svg",H3="./assets/checkbox-checked-eOVFoR8b.svg",vf={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function WT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=F.useState(vf),[d,p]=F.useState([]),g=(P,j)=>{c(B=>({...B,[P]:j}))},v=()=>p(P=>[...P,{...vf}]),T=P=>p(j=>j.filter((B,te)=>te!==P)),w=(P,j,B)=>p(te=>{const M=[...te];return M[P]={...M[P],[j]:B},M}),C=P=>P?ft.fromDate(new Date(P)):null,D=async()=>{const P=new Date,j=P.getFullYear().toString().slice(2),B=(P.getMonth()+1).toString().padStart(2,"0"),te=io(Xi(Yt,"design_request"),so("design_request_id",">=",`H${j}${B}000`),so("design_request_id","<",`H${j}${B}999`)),M=await yx(te);return{year:j,month:B,base:M.size}},q=(P,j,B)=>`H${P}${j}${B.toString().padStart(3,"0")}`,k=async P=>{if(P.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await Qa(Cr(Yt,"design_request",e.id),{completion_dt:C(l.completion_dt),open_dt:C(l.open_dt),task_form:l.task_form,task_type:l.task_type,requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:kT()}),alert("요청이 수정되었습니다!"),i();return}const j=[l,...d],B=j.findIndex(I=>!I.requirement);if(B!==-1){alert(`${B+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:te,month:M,base:J}=await D();let A=J;const R=new Date;for(const I of j){A+=1;const V=q(te,M,A);await vP(Xi(Yt,"design_request"),{design_request_id:V,request_date:C(R.toISOString()),requester:t,completion_dt:C(I.completion_dt),open_dt:C(I.open_dt),task_form:I.task_form,task_type:I.task_type,requirement:I.requirement,url:I.url,note:I.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:I.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:kT(),updated_at:null,delete_at:null,work_hour:""})}alert(`${j.length}건이 등록되었습니다!`),p([]),c(vf),i()};return F.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),F.useEffect(()=>{!n||a||(c(vf),p([]))},[n]),_.jsxs(_.Fragment,{children:[_.jsxs(Y3,{children:[_.jsx(W3,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(Q3,{type:"button",onClick:i})]}),_.jsxs(G3,{onSubmit:k,children:[_.jsxs(K3,{children:[!a&&d.map((P,j)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",j+1]}),_.jsx("button",{type:"button",onClick:()=>T(j),children:"삭제"})]}),_.jsxs(QT,{children:[_.jsx(KT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(sn,{children:"문서번호"}),_.jsx(an,{})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`completion_dt_ex_${j}`,children:"완료 요청일"})}),_.jsx(an,{children:_.jsx(Ef,{id:`completion_dt_ex_${j}`,type:"date",value:P.completion_dt||"",onChange:B=>w(j,"completion_dt",B.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`open_dt_ex_${j}`,children:"오픈일"})}),_.jsx(an,{children:_.jsx(Ef,{id:`open_dt_ex_${j}`,type:"date",value:P.open_dt||"",onChange:B=>w(j,"open_dt",B.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`task_form_ex_${j}`,children:"업무 형태"})}),_.jsx(an,{children:_.jsxs(bf,{id:`task_form_ex_${j}`,value:P.task_form||"GHS",onChange:B=>w(j,"task_form",B.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`task_type_ex_${j}`,children:"업무 유형"})}),_.jsx(an,{children:_.jsxs(bf,{id:`task_type_ex_${j}`,value:P.task_type||"프론트테마",onChange:B=>w(j,"task_type",B.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`requirement_ex_${j}`,children:"작업 항목"})}),_.jsx(an,{children:_.jsx(XT,{id:`requirement_ex_${j}`,type:"text",value:P.requirement||"",onChange:B=>w(j,"requirement",B.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`emergency_ex_${j}`,children:"긴급 일정"})}),_.jsx(an,{children:_.jsx(ew,{children:_.jsxs(tw,{htmlFor:`emergency_ex_${j}`,children:[_.jsx(nw,{id:`emergency_ex_${j}`,type:"checkbox",checked:!!P.emergency,onChange:B=>w(j,"emergency",B.target.checked)}),_.jsx(rw,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`url_ex_${j}`,children:"요청서 URL"})}),_.jsx(an,{children:_.jsx(ZT,{id:`url_ex_${j}`,value:P.url||"",onChange:B=>w(j,"url",B.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:`note_ex_${j}`,children:"메모"})}),_.jsx(an,{children:_.jsx(JT,{id:`note_ex_${j}`,rows:4,value:P.note||"",onChange:B=>w(j,"note",B.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},j)),_.jsxs(QT,{children:[_.jsx(KT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(sn,{children:"문서번호"}),_.jsx(an,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(an,{children:_.jsx(Ef,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:P=>g("completion_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(an,{children:_.jsx(Ef,{type:"date",id:"open_dt",value:l.open_dt,onChange:P=>g("open_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx(an,{children:_.jsxs(bf,{id:"task_form",value:l.task_form,onChange:P=>g("task_form",P.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(an,{children:_.jsxs(bf,{id:"task_type",value:l.task_type,onChange:P=>g("task_type",P.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(an,{children:_.jsx(XT,{type:"text",id:"requirement",value:l.requirement,onChange:P=>g("requirement",P.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(an,{children:_.jsx(ew,{children:_.jsxs(tw,{htmlFor:"emergency",children:[_.jsx(nw,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:P=>g("emergency",P.target.checked)}),_.jsx(rw,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(an,{children:_.jsx(ZT,{id:"url",value:l.url,onChange:P=>g("url",P.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(sn,{children:_.jsx(xn,{htmlFor:"note",children:"메모"})}),_.jsx(an,{children:_.jsx(JT,{id:"note",rows:4,value:l.note,onChange:P=>g("note",P.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(X3,{children:[_.jsx(Z3,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(J3,{type:"button",onClick:v,children:"추가 등록하기"})]})]})]})}const G3=G.form`
  font-family: 'Pretendard';
`,Y3=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,W3=G.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,Q3=G.button`
  width: 24px;
  height: 24px;
  background: url(${rA}) no-repeat center;
  background-size: contain;
`,QT=G.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,K3=G.div`
  max-height: 690px;
  overflow: auto;
`,KT=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,sn=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,an=G.td`
  padding: 12px 24px;
  border-right: none;
`,xn=G.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Ef=G.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,XT=G.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,ZT=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,JT=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,ew=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,tw=G.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,nw=G.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${H3}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,rw=G.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,bf=G.select`
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
  background-image: url(${Sx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,X3=G.div`
  margin-top: 24px;
  text-align: center;
`,Z3=G.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,J3=G.button`
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
`;function e9({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(t9,{children:[_.jsx(n9,{children:"디자인 요청 상세"}),_.jsx(r9,{type:"button",onClick:e})]}),_.jsxs(i9,{children:[_.jsx(s9,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Xr,{children:"문서번호"}),_.jsx(qa,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"요청일"}),_.jsx(qa,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"완료 요청일"}),_.jsx(a9,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"오픈일"}),_.jsx(o9,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"업무 형태"}),_.jsx(qa,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"업무 유형"}),_.jsx(qa,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"작업 항목"}),_.jsx(qa,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"긴급 일정"}),_.jsx(qa,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"요청서 URL"}),_.jsx(qa,{children:t!=null&&t.url?_.jsx(u9,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Xr,{children:"메모"}),_.jsx(l9,{children:_.jsx(c9,{children:t.note})})]})]})]})]})}const t9=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,n9=G.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,r9=G.button`
  width: 24px;
  height: 24px;
  background: url(${rA}) no-repeat center;
  background-size: contain;
`,i9=G.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,s9=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Xr=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,qa=G.td`
  padding: 12px 24px;
  border-right: none;
`,a9=G.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,o9=G.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,l9=G.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,u9=G.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,c9=G.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function h9(){const[t,e]=F.useState(0),[n,i]=F.useState([]),[a,l]=F.useState(""),[c,d]=F.useState(!1),[p,g]=F.useState(void 0),[v,T]=F.useState(null);F.useEffect(()=>{const D=Ed(ao,async q=>{if(q){l(q.displayName||"");const k=await u_(Cr(Yt,"users",q.uid));if(k.exists()){const j=k.data().role,B=q.displayName;e(j);let te;j===1?te=io(Xi(Yt,"design_request"),so("requester","==",B)):j===2?te=io(Xi(Yt,"design_request"),so("assigned_designer","==",B)):te=Xi(Yt,"design_request"),$d(te,M=>{const J=M.docs.map(A=>{const R=A.data();return{id:A.id,status:R.status??"대기중"}});i(J)})}}else e(0),l(""),i([])});return()=>D()},[]);const w=()=>{g(void 0),T("create"),d(!0)},C=()=>{d(!1),g(void 0)};return _.jsxs(f9,{children:[_.jsx(D3,{requests:n,userName:a,role:t,onRequestButtonClick:w}),_.jsxs(d9,{children:[_.jsx(PP,{}),_.jsx(T3,{userRole:t,setIsDrawerOpen:d,setEditData:D=>{g(D),T("edit")},setDetailData:D=>{g(D),T("detail")}})]}),_.jsxs(z3,{isOpen:c,onClose:C,children:[v==="create"&&_.jsx(WT,{userName:a,isDrawerOpen:c,onClose:C}),v==="edit"&&p&&_.jsx(WT,{userName:a,isDrawerOpen:c,editData:p,onClose:C}),v==="detail"&&p&&_.jsx(e9,{data:p,onClose:C})]})]})}const f9=G.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,d9=G.div`
  flex: 1;
`;function p9(){const[t,e]=F.useState(""),[n,i]=F.useState(""),[a,l]=F.useState(""),[c,d]=F.useState(""),p=Ac(),g=async()=>{if(a!==c){alert("비밀번호가 일치하지 않습니다.");return}FO(ao,n,a).then(async v=>{const T=v.user;await GO(T,{displayName:t}),await _P(Cr(Yt,"users",T.uid),{name:t,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),p("/")}).catch(v=>{alert("회원가입 중 오류 발생: "+v.message)})};return _.jsx(m9,{children:_.jsxs(g9,{children:[_.jsxs(y9,{children:[_.jsx(_9,{children:"PDMS"}),_.jsx(v9,{children:"Pushcomz Design Management System"})]}),_.jsx(E9,{children:_.jsx(b9,{src:vx})}),_.jsxs(T9,{children:[_.jsx(w9,{type:"text",value:t,onChange:v=>e(v.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(S9,{type:"text",value:n,onChange:v=>i(v.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(x9,{type:"password",value:a,onChange:v=>l(v.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(A9,{type:"password",value:c,onChange:v=>d(v.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(R9,{onClick:g,children:"등록하기"})]})})}const m9=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,g9=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,y9=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,_9=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,v9=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,E9=G.div`
  margin-right: auto;
`,b9=G.img`
  
`,T9=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,w9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,S9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,x9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,A9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,R9=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function C9(){const[t,e]=F.useState(!1);return _.jsx(ZC,{basename:"/pdms-test",children:_.jsxs(IC,{children:[_.jsx(Tf,{path:"/",element:_.jsx(bP,{onLoginSuccess:()=>e(!0)})}),_.jsx(Tf,{path:"/dashboard",element:t?_.jsx(h9,{}):_.jsx(RC,{to:"/"})}),_.jsx(Tf,{path:"/signup",element:_.jsx(p9,{})})]})})}const I9="/assets/Pretendard-Bold-C0IAtCzs.woff2",D9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",k9="/assets/Pretendard-Medium-BCuOcOjL.woff2",O9="/assets/Pretendard-Regular-BnvhP503.woff2",M9=Hw`
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
    src: url(${I9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${D9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${k9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${O9}) format('woff2');
    font-weight: 400;
  }

`,N9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},P9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},V9={colors:N9,mixin:P9};jR.createRoot(document.getElementById("root")).render(_.jsx(F.StrictMode,{children:_.jsxs(aD,{theme:V9,children:[_.jsx(C9,{}),_.jsx(M9,{})]})}));
