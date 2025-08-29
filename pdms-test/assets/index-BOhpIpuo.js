(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function YR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},Gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function GR(){if(BE)return Gu;BE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Gu.Fragment=e,Gu.jsx=n,Gu.jsxs=n,Gu}var zE;function WR(){return zE||(zE=1,Zm.exports=GR()),Zm.exports}var _=WR(),Jm={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function QR(){if($E)return qe;$E=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,q={};function N(L,te,he){this.props=L,this.context=te,this.refs=q,this.updater=he||D}N.prototype.isReactComponent={},N.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},N.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=N.prototype;function z(L,te,he){this.props=L,this.context=te,this.refs=q,this.updater=he||D}var M=z.prototype=new F;M.constructor=z,P(M,N.prototype),M.isPureReactComponent=!0;var J=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},re=Object.prototype.hasOwnProperty;function C(L,te,he,ce,ve,De){return he=De.ref,{$$typeof:t,type:L,key:te,ref:he!==void 0?he:null,props:De}}function S(L,te){return C(L.type,te,void 0,void 0,void 0,L.props)}function A(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function V(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return te[he]})}var I=/\/+/g;function O(L,te){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):te.toString(36)}function k(){}function Me(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(k,k):(L.status="pending",L.then(function(te){L.status==="pending"&&(L.status="fulfilled",L.value=te)},function(te){L.status==="pending"&&(L.status="rejected",L.reason=te)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function oe(L,te,he,ce,ve){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(De){case"bigint":case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case t:case e:be=!0;break;case v:return be=L._init,oe(be(L._payload),te,he,ce,ve)}}if(be)return ve=ve(L),be=ce===""?"."+O(L,0):ce,J(ve)?(he="",be!=null&&(he=be.replace(I,"$&/")+"/"),oe(ve,te,he,"",function(Tt){return Tt})):ve!=null&&(A(ve)&&(ve=S(ve,he+(ve.key==null||L&&L.key===ve.key?"":(""+ve.key).replace(I,"$&/")+"/")+be)),te.push(ve)),1;be=0;var yt=ce===""?".":ce+":";if(J(L))for(var Fe=0;Fe<L.length;Fe++)ce=L[Fe],De=yt+O(ce,Fe),be+=oe(ce,te,he,De,ve);else if(Fe=T(L),typeof Fe=="function")for(L=Fe.call(L),Fe=0;!(ce=L.next()).done;)ce=ce.value,De=yt+O(ce,Fe++),be+=oe(ce,te,he,De,ve);else if(De==="object"){if(typeof L.then=="function")return oe(Me(L),te,he,ce,ve);throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(L,te,he){if(L==null)return L;var ce=[],ve=0;return oe(L,ce,"","",function(De){return te.call(he,De,ve++)}),ce}function ie(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ye(){}return qe.Children={map:Y,forEach:function(L,te,he){Y(L,function(){te.apply(this,arguments)},he)},count:function(L){var te=0;return Y(L,function(){te++}),te},toArray:function(L){return Y(L,function(te){return te})||[]},only:function(L){if(!A(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},qe.Component=N,qe.Fragment=n,qe.Profiler=a,qe.PureComponent=z,qe.StrictMode=i,qe.Suspense=p,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,qe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return $.H.useMemoCache(L)}},qe.cache=function(L){return function(){return L.apply(null,arguments)}},qe.cloneElement=function(L,te,he){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ce=P({},L.props),ve=L.key,De=void 0;if(te!=null)for(be in te.ref!==void 0&&(De=void 0),te.key!==void 0&&(ve=""+te.key),te)!re.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(ce[be]=te[be]);var be=arguments.length-2;if(be===1)ce.children=he;else if(1<be){for(var yt=Array(be),Fe=0;Fe<be;Fe++)yt[Fe]=arguments[Fe+2];ce.children=yt}return C(L.type,ve,void 0,void 0,De,ce)},qe.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},qe.createElement=function(L,te,he){var ce,ve={},De=null;if(te!=null)for(ce in te.key!==void 0&&(De=""+te.key),te)re.call(te,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(ve[ce]=te[ce]);var be=arguments.length-2;if(be===1)ve.children=he;else if(1<be){for(var yt=Array(be),Fe=0;Fe<be;Fe++)yt[Fe]=arguments[Fe+2];ve.children=yt}if(L&&L.defaultProps)for(ce in be=L.defaultProps,be)ve[ce]===void 0&&(ve[ce]=be[ce]);return C(L,De,void 0,void 0,null,ve)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(L){return{$$typeof:d,render:L}},qe.isValidElement=A,qe.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ie}},qe.memo=function(L,te){return{$$typeof:g,type:L,compare:te===void 0?null:te}},qe.startTransition=function(L){var te=$.T,he={};$.T=he;try{var ce=L(),ve=$.S;ve!==null&&ve(he,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(ye,fe)}catch(De){fe(De)}finally{$.T=te}},qe.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},qe.use=function(L){return $.H.use(L)},qe.useActionState=function(L,te,he){return $.H.useActionState(L,te,he)},qe.useCallback=function(L,te){return $.H.useCallback(L,te)},qe.useContext=function(L){return $.H.useContext(L)},qe.useDebugValue=function(){},qe.useDeferredValue=function(L,te){return $.H.useDeferredValue(L,te)},qe.useEffect=function(L,te,he){var ce=$.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ce.useEffect(L,te)},qe.useId=function(){return $.H.useId()},qe.useImperativeHandle=function(L,te,he){return $.H.useImperativeHandle(L,te,he)},qe.useInsertionEffect=function(L,te){return $.H.useInsertionEffect(L,te)},qe.useLayoutEffect=function(L,te){return $.H.useLayoutEffect(L,te)},qe.useMemo=function(L,te){return $.H.useMemo(L,te)},qe.useOptimistic=function(L,te){return $.H.useOptimistic(L,te)},qe.useReducer=function(L,te,he){return $.H.useReducer(L,te,he)},qe.useRef=function(L){return $.H.useRef(L)},qe.useState=function(L){return $.H.useState(L)},qe.useSyncExternalStore=function(L,te,he){return $.H.useSyncExternalStore(L,te,he)},qe.useTransition=function(){return $.H.useTransition()},qe.version="19.1.0",qe}var FE;function my(){return FE||(FE=1,Jm.exports=QR()),Jm.exports}var U=my();const me=YR(U);var eg={exports:{}},Wu={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function KR(){return HE||(HE=1,function(t){function e(Y,ie){var fe=Y.length;Y.push(ie);e:for(;0<fe;){var ye=fe-1>>>1,L=Y[ye];if(0<a(L,ie))Y[ye]=ie,Y[fe]=L,fe=ye;else break e}}function n(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var ie=Y[0],fe=Y.pop();if(fe!==ie){Y[0]=fe;e:for(var ye=0,L=Y.length,te=L>>>1;ye<te;){var he=2*(ye+1)-1,ce=Y[he],ve=he+1,De=Y[ve];if(0>a(ce,fe))ve<L&&0>a(De,ce)?(Y[ye]=De,Y[ve]=fe,ye=ve):(Y[ye]=ce,Y[he]=fe,ye=he);else if(ve<L&&0>a(De,fe))Y[ye]=De,Y[ve]=fe,ye=ve;else break e}}return ie}function a(Y,ie){var fe=Y.sortIndex-ie.sortIndex;return fe!==0?fe:Y.id-ie.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,E=null,T=3,D=!1,P=!1,q=!1,N=!1,F=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function J(Y){for(var ie=n(g);ie!==null;){if(ie.callback===null)i(g);else if(ie.startTime<=Y)i(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=n(g)}}function $(Y){if(q=!1,J(Y),!P)if(n(p)!==null)P=!0,re||(re=!0,O());else{var ie=n(g);ie!==null&&oe($,ie.startTime-Y)}}var re=!1,C=-1,S=5,A=-1;function V(){return N?!0:!(t.unstable_now()-A<S)}function I(){if(N=!1,re){var Y=t.unstable_now();A=Y;var ie=!0;try{e:{P=!1,q&&(q=!1,z(C),C=-1),D=!0;var fe=T;try{t:{for(J(Y),E=n(p);E!==null&&!(E.expirationTime>Y&&V());){var ye=E.callback;if(typeof ye=="function"){E.callback=null,T=E.priorityLevel;var L=ye(E.expirationTime<=Y);if(Y=t.unstable_now(),typeof L=="function"){E.callback=L,J(Y),ie=!0;break t}E===n(p)&&i(p),J(Y)}else i(p);E=n(p)}if(E!==null)ie=!0;else{var te=n(g);te!==null&&oe($,te.startTime-Y),ie=!1}}break e}finally{E=null,T=fe,D=!1}ie=void 0}}finally{ie?O():re=!1}}}var O;if(typeof M=="function")O=function(){M(I)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Me=k.port2;k.port1.onmessage=I,O=function(){Me.postMessage(null)}}else O=function(){F(I,0)};function oe(Y,ie){C=F(function(){Y(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var ie=3;break;default:ie=T}var fe=T;T=ie;try{return Y()}finally{T=fe}},t.unstable_requestPaint=function(){N=!0},t.unstable_runWithPriority=function(Y,ie){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var fe=T;T=Y;try{return ie()}finally{T=fe}},t.unstable_scheduleCallback=function(Y,ie,fe){var ye=t.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?ye+fe:ye):fe=ye,Y){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=fe+L,Y={id:v++,callback:ie,priorityLevel:Y,startTime:fe,expirationTime:L,sortIndex:-1},fe>ye?(Y.sortIndex=fe,e(g,Y),n(p)===null&&Y===n(g)&&(q?(z(C),C=-1):q=!0,oe($,fe-ye))):(Y.sortIndex=L,e(p,Y),P||D||(P=!0,re||(re=!0,O()))),Y},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(Y){var ie=T;return function(){var fe=T;T=ie;try{return Y.apply(this,arguments)}finally{T=fe}}}}(ng)),ng}var YE;function XR(){return YE||(YE=1,tg.exports=KR()),tg.exports}var rg={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE;function ZR(){if(GE)return In;GE=1;var t=my();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,In.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},In.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},In.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},In.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},In.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:D}):v==="script"&&i.d.X(p,{crossOrigin:E,integrity:T,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},In.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},In.requestFormReset=function(p){i.d.r(p)},In.unstable_batchedUpdates=function(p,g){return p(g)},In.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},In.useFormStatus=function(){return c.H.useHostTransitionStatus()},In.version="19.1.0",In}var WE;function JR(){if(WE)return rg.exports;WE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),rg.exports=ZR(),rg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE;function eC(){if(QE)return Wu;QE=1;var t=XR(),e=my(),n=JR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var b=!1,x=f.child;x;){if(x===o){b=!0,o=f,u=m;break}if(x===u){b=!0,u=f,o=m;break}x=x.sibling}if(!b){for(x=m.child;x;){if(x===o){b=!0,o=m,u=f;break}if(x===u){b=!0,u=m,o=f;break}x=x.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),M=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function O(r){return r===null||typeof r!="object"?null:(r=I&&r[I]||r["@@iterator"],typeof r=="function"?r:null)}var k=Symbol.for("react.client.reference");function Me(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===k?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case N:return"Profiler";case q:return"StrictMode";case $:return"Suspense";case re:return"SuspenseList";case A:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case D:return"Portal";case M:return(r.displayName||"Context")+".Provider";case z:return(r._context.displayName||"Context")+".Consumer";case J:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case C:return s=r.displayName||null,s!==null?s:Me(r.type)||"Memo";case S:s=r._payload,r=r._init;try{return Me(r(s))}catch{}}return null}var oe=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},ye=[],L=-1;function te(r){return{current:r}}function he(r){0>L||(r.current=ye[L],ye[L]=null,L--)}function ce(r,s){L++,ye[L]=r.current,r.current=s}var ve=te(null),De=te(null),be=te(null),yt=te(null);function Fe(r,s){switch(ce(be,s),ce(De,r),ce(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?mE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=mE(s),r=gE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}he(ve),ce(ve,r)}function Tt(){he(ve),he(De),he(be)}function Cn(r){r.memoizedState!==null&&ce(yt,r);var s=ve.current,o=gE(s,r.type);s!==o&&(ce(De,r),ce(ve,o))}function de(r){De.current===r&&(he(ve),he(De)),yt.current===r&&(he(yt),zu._currentValue=fe)}var Te=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,it=t.unstable_shouldYield,Qn=t.unstable_requestPaint,Lt=t.unstable_now,Hr=t.unstable_getCurrentPriorityLevel,Kn=t.unstable_ImmediatePriority,cr=t.unstable_UserBlockingPriority,Si=t.unstable_NormalPriority,go=t.unstable_LowPriority,Yr=t.unstable_IdlePriority,xi=t.log,yo=t.unstable_setDisableYieldValue,xt=null,nt=null;function Vn(r){if(typeof xi=="function"&&yo(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(xt,r)}catch{}}var ln=Math.clz32?Math.clz32:Ai,_o=Math.log,Yl=Math.LN2;function Ai(r){return r>>>=0,r===0?32:31-(_o(r)/Yl|0)|0}var Ri=256,Ci=4194304;function Xn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Di(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var x=u&134217727;return x!==0?(u=x&~m,u!==0?f=Xn(u):(b&=x,b!==0?f=Xn(b):o||(o=x&~r,o!==0&&(f=Xn(o))))):(x=u&~m,x!==0?f=Xn(x):b!==0?f=Xn(b):o||(o=u&~r,o!==0&&(f=Xn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Ii(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function gs(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var r=Ri;return Ri<<=1,(Ri&4194048)===0&&(Ri=256),r}function st(){var r=Ci;return Ci<<=1,(Ci&62914560)===0&&(Ci=4194304),r}function Ie(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function et(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function un(r,s,o,u,f,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var x=r.entanglements,j=r.expirationTimes,K=r.hiddenUpdates;for(o=b&~o;0<o;){var ne=31-ln(o),le=1<<ne;x[ne]=0,j[ne]=-1;var X=K[ne];if(X!==null)for(K[ne]=null,ne=0;ne<X.length;ne++){var Z=X[ne];Z!==null&&(Z.lane&=-536870913)}o&=~le}u!==0&&Ue(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ue(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-ln(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function va(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-ln(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Gr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ys(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function hr(){var r=ie.p;return r!==0?r:(r=window.event,r===void 0?32:PE(r.type))}function _s(r,s){var o=ie.p;try{return ie.p=r,s()}finally{ie.p=o}}var At=Math.random().toString(36).slice(2),en="__reactFiber$"+At,$t="__reactProps$"+At,fr="__reactContainer$"+At,Gl="__reactEvents$"+At,tp="__reactListeners$"+At,vs="__reactHandles$"+At,Xc="__reactResources$"+At,Ea="__reactMarker$"+At;function Es(r){delete r[en],delete r[$t],delete r[Gl],delete r[tp],delete r[vs]}function ki(r){var s=r[en];if(s)return s;for(var o=r.parentNode;o;){if(s=o[fr]||o[en]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=EE(r);r!==null;){if(o=r[en])return o;r=EE(r)}return s}r=o,o=r.parentNode}return null}function Wr(r){if(r=r[en]||r[fr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Qr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function jn(r){var s=r[Xc];return s||(s=r[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Ut(r){r[Ea]=!0}var Wl=new Set,vo={};function Ir(r,s){Oi(r,s),Oi(r+"Capture",s)}function Oi(r,s){for(vo[r]=s,r=0;r<s.length;r++)Wl.add(s[r])}var Zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},wa={};function eh(r){return Te.call(wa,r)?!0:Te.call(Jc,r)?!1:Zc.test(r)?wa[r]=!0:(Jc[r]=!0,!1)}function ws(r,s,o){if(eh(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Kr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function vn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ba,th;function Mi(r){if(ba===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ba=s&&s[1]||"",th=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ba+r+th}var Eo=!1;function wo(r,s){if(!r||Eo)return"";Eo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(Z){var X=Z}Reflect.construct(r,[],le)}else{try{le.call()}catch(Z){X=Z}r.call(le.prototype)}}else{try{throw Error()}catch(Z){X=Z}(le=r())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],x=m[1];if(b&&x){var j=b.split(`
`),K=x.split(`
`);for(f=u=0;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(u===j.length||f===K.length)for(u=j.length-1,f=K.length-1;1<=u&&0<=f&&j[u]!==K[f];)f--;for(;1<=u&&0<=f;u--,f--)if(j[u]!==K[f]){if(u!==1||f!==1)do if(u--,f--,0>f||j[u]!==K[f]){var ne=`
`+j[u].replace(" at new "," at ");return r.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",r.displayName)),ne}while(1<=u&&0<=f);break}}}finally{Eo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Mi(o):""}function Ql(r){switch(r.tag){case 26:case 27:case 5:return Mi(r.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return wo(r.type,!1);case 11:return wo(r.type.render,!1);case 1:return wo(r.type,!0);case 31:return Mi("Activity");default:return""}}function bo(r){try{var s="";do s+=Ql(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Ln(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Kl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function np(r){var s=Kl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function To(r){r._valueTracker||(r._valueTracker=np(r))}function Xl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Kl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function Ta(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var rp=/[\n"\\]/g;function Ft(r){return r.replace(rp,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Zn(r,s,o,u,f,m,b,x){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Ln(s)):r.value!==""+Ln(s)&&(r.value=""+Ln(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?bs(r,b,Ln(s)):o!=null?bs(r,b,Ln(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?r.name=""+Ln(x):r.removeAttribute("name")}function Sa(r,s,o,u,f,m,b,x){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Ln(o):"",s=s!=null?""+Ln(s):o,x||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=x?r.checked:!!u,r.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function bs(r,s,o){s==="number"&&Ta(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ni(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Ln(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ft(r,s,o){if(s!=null&&(s=""+Ln(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Ln(o):""}function xa(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(oe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Ln(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function dr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nh(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Aa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Zl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&nh(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&nh(r,m,s[m])}function Jl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(r){return sp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Pi=null;function pr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Vi=null,ji=null;function eu(r){var s=Wr(r);if(s&&(r=s.stateNode)){var o=r[$t]||null;e:switch(r=s.stateNode,s.type){case"input":if(Zn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ft(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[$t]||null;if(!f)throw Error(i(90));Zn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Xl(u)}break e;case"textarea":ft(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ni(r,!!o.multiple,s,!1)}}}var Xr=!1;function rh(r,s,o){if(Xr)return r(s,o);Xr=!0;try{var u=r(s);return u}finally{if(Xr=!1,(Vi!==null||ji!==null)&&(Kh(),Vi&&(s=Vi,r=ji,ji=Vi=null,eu(s),r)))for(s=0;s<r.length;s++)eu(r[s])}}function Ra(r,s){var o=r.stateNode;if(o===null)return null;var u=o[$t]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mr=!1;if(kr)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){mr=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{mr=!1}var Zr=null,Ts=null,Li=null;function tu(){if(Li)return Li;var r,s=Ts,o=s.length,u,f="value"in Zr?Zr.value:Zr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var b=o-r;for(u=1;u<=b&&s[o-u]===f[m-u];u++);return Li=f.slice(r,1<u?1-u:void 0)}function Jr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ei(){return!0}function nu(){return!1}function cn(r){function s(o,u,f,m,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var x in r)r.hasOwnProperty(x)&&(o=r[x],this[x]=o?o(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ei:nu,this.isPropagationStopped=nu,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),s}var at={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=cn(at),Da=v({},at,{view:0,detail:0}),ih=cn(Da),Ao,Ro,ti,Ia=v({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(Ao=r.screenX-ti.screenX,Ro=r.screenY-ti.screenY):Ro=Ao=0,ti=r),Ao)},movementY:function(r){return"movementY"in r?r.movementY:Ro}}),gr=cn(Ia),sh=v({},Ia,{dataTransfer:0}),ap=cn(sh),ka=v({},Da,{relatedTarget:0}),Co=cn(ka),ru=v({},at,{animationName:0,elapsedTime:0,pseudoElement:0}),Do=cn(ru),ah=v({},at,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Io=cn(ah),op=v({},at,{data:0}),iu=cn(op),Oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function su(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=lh[r])?!!s[r]:!1}function Ma(){return su}var uh=v({},Da,{key:function(r){if(r.key){var s=Oa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Jr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?oh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(r){return r.type==="keypress"?Jr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Jr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ko=cn(uh),ch=v({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=cn(ch),Ui=v({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),hh=cn(Ui),fh=v({},at,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=cn(fh),ph=v({},Ia,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oo=cn(ph),Un=v({},at,{newState:0,oldState:0}),mh=cn(Un),gh=[9,13,27,32],ni=kr&&"CompositionEvent"in window,h=null;kr&&"documentMode"in document&&(h=document.documentMode);var y=kr&&"TextEvent"in window&&!h,w=kr&&(!ni||h&&8<h&&11>=h),R=" ",W=!1;function ee(r,s){switch(r){case"keyup":return gh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ke=!1;function tn(r,s){switch(r){case"compositionend":return pe(s);case"keypress":return s.which!==32?null:(W=!0,R);case"textInput":return r=s.data,r===R&&W?null:r;default:return null}}function Xe(r,s){if(Ke)return r==="compositionend"||!ni&&ee(r,s)?(r=tu(),Li=Ts=Zr=null,Ke=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return w&&s.locale!=="ko"?null:s.data;default:return null}}var hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nn(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!hn[r.type]:s==="textarea"}function qi(r,s,o,u){Vi?ji?ji.push(u):ji=[u]:Vi=u,s=nf(s,"onChange"),0<s.length&&(o=new xo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var En=null,ri=null;function ou(r){cE(r,0)}function yh(r){var s=Qr(r);if(Xl(s))return r}function k_(r,s){if(r==="change")return s}var O_=!1;if(kr){var lp;if(kr){var up="oninput"in document;if(!up){var M_=document.createElement("div");M_.setAttribute("oninput","return;"),up=typeof M_.oninput=="function"}lp=up}else lp=!1;O_=lp&&(!document.documentMode||9<document.documentMode)}function N_(){En&&(En.detachEvent("onpropertychange",P_),ri=En=null)}function P_(r){if(r.propertyName==="value"&&yh(ri)){var s=[];qi(s,ri,r,pr(r)),rh(ou,s)}}function bA(r,s,o){r==="focusin"?(N_(),En=s,ri=o,En.attachEvent("onpropertychange",P_)):r==="focusout"&&N_()}function TA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return yh(ri)}function SA(r,s){if(r==="click")return yh(s)}function xA(r,s){if(r==="input"||r==="change")return yh(s)}function AA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Jn=typeof Object.is=="function"?Object.is:AA;function lu(r,s){if(Jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Te.call(s,f)||!Jn(r[f],s[f]))return!1}return!0}function V_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function j_(r,s){var o=V_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=V_(o)}}function L_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?L_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function U_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Ta(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Ta(r.document)}return s}function cp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var RA=kr&&"documentMode"in document&&11>=document.documentMode,Mo=null,hp=null,uu=null,fp=!1;function q_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fp||Mo==null||Mo!==Ta(u)||(u=Mo,"selectionStart"in u&&cp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),uu&&lu(uu,u)||(uu=u,u=nf(hp,"onSelect"),0<u.length&&(s=new xo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Mo)))}function Na(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var No={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},dp={},B_={};kr&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Pa(r){if(dp[r])return dp[r];if(!No[r])return r;var s=No[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in B_)return dp[r]=s[o];return r}var z_=Pa("animationend"),$_=Pa("animationiteration"),F_=Pa("animationstart"),CA=Pa("transitionrun"),DA=Pa("transitionstart"),IA=Pa("transitioncancel"),H_=Pa("transitionend"),Y_=new Map,pp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pp.push("scrollEnd");function Or(r,s){Y_.set(r,s),Ir(s,[r])}var G_=new WeakMap;function yr(r,s){if(typeof r=="object"&&r!==null){var o=G_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:bo(s)},G_.set(r,s),s)}return{value:r,source:s,stack:bo(s)}}var _r=[],Po=0,mp=0;function _h(){for(var r=Po,s=mp=Po=0;s<r;){var o=_r[s];_r[s++]=null;var u=_r[s];_r[s++]=null;var f=_r[s];_r[s++]=null;var m=_r[s];if(_r[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}m!==0&&W_(o,f,m)}}function vh(r,s,o,u){_r[Po++]=r,_r[Po++]=s,_r[Po++]=o,_r[Po++]=u,mp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function gp(r,s,o,u){return vh(r,s,o,u),Eh(r)}function Vo(r,s){return vh(r,null,null,s),Eh(r)}function W_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-ln(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function Eh(r){if(50<Nu)throw Nu=0,bm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var jo={};function kA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function er(r,s,o,u){return new kA(r,s,o,u)}function yp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Bi(r,s){var o=r.alternate;return o===null?(o=er(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function Q_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function wh(r,s,o,u,f,m){var b=0;if(u=r,typeof r=="function")yp(r)&&(b=1);else if(typeof r=="string")b=MR(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case A:return r=er(31,o,s,f),r.elementType=A,r.lanes=m,r;case P:return Va(o.children,f,m,s);case q:b=8,f|=24;break;case N:return r=er(12,o,s,f|2),r.elementType=N,r.lanes=m,r;case $:return r=er(13,o,s,f),r.elementType=$,r.lanes=m,r;case re:return r=er(19,o,s,f),r.elementType=re,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case F:case M:b=10;break e;case z:b=9;break e;case J:b=11;break e;case C:b=14;break e;case S:b=16,u=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=er(b,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Va(r,s,o,u){return r=er(7,r,u,s),r.lanes=o,r}function _p(r,s,o){return r=er(6,r,null,s),r.lanes=o,r}function vp(r,s,o){return s=er(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Lo=[],Uo=0,bh=null,Th=0,vr=[],Er=0,ja=null,zi=1,$i="";function La(r,s){Lo[Uo++]=Th,Lo[Uo++]=bh,bh=r,Th=s}function K_(r,s,o){vr[Er++]=zi,vr[Er++]=$i,vr[Er++]=ja,ja=r;var u=zi;r=$i;var f=32-ln(u)-1;u&=~(1<<f),o+=1;var m=32-ln(s)+f;if(30<m){var b=f-f%5;m=(u&(1<<b)-1).toString(32),u>>=b,f-=b,zi=1<<32-ln(s)+f|o<<f|u,$i=m+r}else zi=1<<m|o<<f|u,$i=r}function Ep(r){r.return!==null&&(La(r,1),K_(r,1,0))}function wp(r){for(;r===bh;)bh=Lo[--Uo],Lo[Uo]=null,Th=Lo[--Uo],Lo[Uo]=null;for(;r===ja;)ja=vr[--Er],vr[Er]=null,$i=vr[--Er],vr[Er]=null,zi=vr[--Er],vr[Er]=null}var qn=null,Pt=null,rt=!1,Ua=null,ii=!1,bp=Error(i(519));function qa(r){var s=Error(i(418,""));throw fu(yr(s,r)),bp}function X_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[en]=r,s[$t]=u,o){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(o=0;o<Vu.length;o++)Ye(Vu[o],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ye("invalid",s),Sa(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),To(s);break;case"select":Ye("invalid",s);break;case"textarea":Ye("invalid",s),xa(s,u.value,u.defaultValue,u.children),To(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||pE(s.textContent,o)?(u.popover!=null&&(Ye("beforetoggle",s),Ye("toggle",s)),u.onScroll!=null&&Ye("scroll",s),u.onScrollEnd!=null&&Ye("scrollend",s),u.onClick!=null&&(s.onclick=rf),s=!0):s=!1,s||qa(r)}function Z_(r){for(qn=r.return;qn;)switch(qn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:qn=qn.return}}function cu(r){if(r!==qn)return!1;if(!rt)return Z_(r),rt=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Lm(r.type,r.memoizedProps)),o=!o),o&&Pt&&qa(r),Z_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Pt=Nr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Pt=null}}else s===27?(s=Pt,Us(r.type)?(r=zm,zm=null,Pt=r):Pt=s):Pt=qn?Nr(r.stateNode.nextSibling):null;return!0}function hu(){Pt=qn=null,rt=!1}function J_(){var r=Ua;return r!==null&&(Hn===null?Hn=r:Hn.push.apply(Hn,r),Ua=null),r}function fu(r){Ua===null?Ua=[r]:Ua.push(r)}var Tp=te(null),Ba=null,Fi=null;function Ss(r,s,o){ce(Tp,s._currentValue),s._currentValue=o}function Hi(r){r._currentValue=Tp.current,he(Tp)}function Sp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function xp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var x=m;m=f;for(var j=0;j<s.length;j++)if(x.context===s[j]){m.lanes|=o,x=m.alternate,x!==null&&(x.lanes|=o),Sp(m.return,o,r),u||(b=null);break e}m=x.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Sp(b,o,r),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function du(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var x=f.type;Jn(f.pendingProps.value,b.value)||(r!==null?r.push(x):r=[x])}}else if(f===yt.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(zu):r=[zu])}f=f.return}r!==null&&xp(s,r,o,u),s.flags|=262144}function Sh(r){for(r=r.firstContext;r!==null;){if(!Jn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function za(r){Ba=r,Fi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Dn(r){return ev(Ba,r)}function xh(r,s){return Ba===null&&za(r),ev(r,s)}function ev(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Fi===null){if(r===null)throw Error(i(308));Fi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Fi=Fi.next=s;return o}var OA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},MA=t.unstable_scheduleCallback,NA=t.unstable_NormalPriority,rn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ap(){return{controller:new OA,data:new Map,refCount:0}}function pu(r){r.refCount--,r.refCount===0&&MA(NA,function(){r.controller.abort()})}var mu=null,Rp=0,qo=0,Bo=null;function PA(r,s){if(mu===null){var o=mu=[];Rp=0,qo=Dm(),Bo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rp++,s.then(tv,tv),s}function tv(){if(--Rp===0&&mu!==null){Bo!==null&&(Bo.status="fulfilled");var r=mu;mu=null,qo=0,Bo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function VA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var nv=Y.S;Y.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&PA(r,s),nv!==null&&nv(r,s)};var $a=te(null);function Cp(){var r=$a.current;return r!==null?r:Et.pooledCache}function Ah(r,s){s===null?ce($a,$a.current):ce($a,s.pool)}function rv(){var r=Cp();return r===null?null:{parent:rn._currentValue,pool:r}}var gu=Error(i(460)),iv=Error(i(474)),Rh=Error(i(542)),Dp={then:function(){}};function sv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ch(){}function av(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ch,Ch),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,lv(r),r;default:if(typeof s.status=="string")s.then(Ch,Ch);else{if(r=Et,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,lv(r),r}throw yu=s,gu}}var yu=null;function ov(){if(yu===null)throw Error(i(459));var r=yu;return yu=null,r}function lv(r){if(r===gu||r===Rh)throw Error(i(483))}var xs=!1;function Ip(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function As(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Rs(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ut&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Eh(r),W_(r,null,o),s}return vh(r,u,s,o),Eh(r)}function _u(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,va(r,o)}}function Op(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Mp=!1;function vu(){if(Mp){var r=Bo;if(r!==null)throw r}}function Eu(r,s,o,u){Mp=!1;var f=r.updateQueue;xs=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,x=f.shared.pending;if(x!==null){f.shared.pending=null;var j=x,K=j.next;j.next=null,b===null?m=K:b.next=K,b=j;var ne=r.alternate;ne!==null&&(ne=ne.updateQueue,x=ne.lastBaseUpdate,x!==b&&(x===null?ne.firstBaseUpdate=K:x.next=K,ne.lastBaseUpdate=j))}if(m!==null){var le=f.baseState;b=0,ne=K=j=null,x=m;do{var X=x.lane&-536870913,Z=X!==x.lane;if(Z?(Ze&X)===X:(u&X)===X){X!==0&&X===qo&&(Mp=!0),ne!==null&&(ne=ne.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Ne=r,Re=x;X=s;var mt=o;switch(Re.tag){case 1:if(Ne=Re.payload,typeof Ne=="function"){le=Ne.call(mt,le,X);break e}le=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Re.payload,X=typeof Ne=="function"?Ne.call(mt,le,X):Ne,X==null)break e;le=v({},le,X);break e;case 2:xs=!0}}X=x.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:x.tag,payload:x.payload,callback:x.callback,next:null},ne===null?(K=ne=Z,j=le):ne=ne.next=Z,b|=X;if(x=x.next,x===null){if(x=f.shared.pending,x===null)break;Z=x,x=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);ne===null&&(j=le),f.baseState=j,f.firstBaseUpdate=K,f.lastBaseUpdate=ne,m===null&&(f.shared.lanes=0),Ps|=b,r.lanes=b,r.memoizedState=le}}function uv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function cv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)uv(o[r],s)}var zo=te(null),Dh=te(0);function hv(r,s){r=Zi,ce(Dh,r),ce(zo,s),Zi=r|s.baseLanes}function Np(){ce(Dh,Zi),ce(zo,zo.current)}function Pp(){Zi=Dh.current,he(zo),he(Dh)}var Cs=0,ze=null,dt=null,Ht=null,Ih=!1,$o=!1,Fa=!1,kh=0,wu=0,Fo=null,jA=0;function qt(){throw Error(i(321))}function Vp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Jn(r[o],s[o]))return!1;return!0}function jp(r,s,o,u,f,m){return Cs=m,ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=r===null||r.memoizedState===null?Wv:Qv,Fa=!1,m=o(u,f),Fa=!1,$o&&(m=dv(s,o,u,f)),fv(r),m}function fv(r){Y.H=jh;var s=dt!==null&&dt.next!==null;if(Cs=0,Ht=dt=ze=null,Ih=!1,wu=0,Fo=null,s)throw Error(i(300));r===null||fn||(r=r.dependencies,r!==null&&Sh(r)&&(fn=!0))}function dv(r,s,o,u){ze=r;var f=0;do{if($o&&(Fo=null),wu=0,$o=!1,25<=f)throw Error(i(301));if(f+=1,Ht=dt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=FA,m=s(o,u)}while($o);return m}function LA(){var r=Y.H,s=r.useState()[0];return s=typeof s.then=="function"?bu(s):s,r=r.useState()[0],(dt!==null?dt.memoizedState:null)!==r&&(ze.flags|=1024),s}function Lp(){var r=kh!==0;return kh=0,r}function Up(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function qp(r){if(Ih){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ih=!1}Cs=0,Ht=dt=ze=null,$o=!1,wu=kh=0,Fo=null}function $n(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?ze.memoizedState=Ht=r:Ht=Ht.next=r,Ht}function Yt(){if(dt===null){var r=ze.alternate;r=r!==null?r.memoizedState:null}else r=dt.next;var s=Ht===null?ze.memoizedState:Ht.next;if(s!==null)Ht=s,dt=r;else{if(r===null)throw ze.alternate===null?Error(i(467)):Error(i(310));dt=r,r={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ht===null?ze.memoizedState=Ht=r:Ht=Ht.next=r}return Ht}function Bp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bu(r){var s=wu;return wu+=1,Fo===null&&(Fo=[]),r=av(Fo,r,s),s=ze,(Ht===null?s.memoizedState:Ht.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?Wv:Qv),r}function Oh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return bu(r);if(r.$$typeof===M)return Dn(r)}throw Error(i(438,String(r)))}function zp(r){var s=null,o=ze.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=ze.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Bp(),ze.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=V;return s.index++,o}function Yi(r,s){return typeof s=="function"?s(r):s}function Mh(r){var s=Yt();return $p(s,dt,r)}function $p(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var x=b=null,j=null,K=s,ne=!1;do{var le=K.lane&-536870913;if(le!==K.lane?(Ze&le)===le:(Cs&le)===le){var X=K.revertLane;if(X===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),le===qo&&(ne=!0);else if((Cs&X)===X){K=K.next,X===qo&&(ne=!0);continue}else le={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},j===null?(x=j=le,b=m):j=j.next=le,ze.lanes|=X,Ps|=X;le=K.action,Fa&&o(m,le),m=K.hasEagerState?K.eagerState:o(m,le)}else X={lane:le,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},j===null?(x=j=X,b=m):j=j.next=X,ze.lanes|=le,Ps|=le;K=K.next}while(K!==null&&K!==s);if(j===null?b=m:j.next=x,!Jn(m,r.memoizedState)&&(fn=!0,ne&&(o=Bo,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=j,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Fp(r){var s=Yt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do m=r(m,b.action),b=b.next;while(b!==f);Jn(m,s.memoizedState)||(fn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function pv(r,s,o){var u=ze,f=Yt(),m=rt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!Jn((dt||f).memoizedState,o);b&&(f.memoizedState=o,fn=!0),f=f.queue;var x=yv.bind(null,u,f,r);if(Tu(2048,8,x,[r]),f.getSnapshot!==s||b||Ht!==null&&Ht.memoizedState.tag&1){if(u.flags|=2048,Ho(9,Nh(),gv.bind(null,u,f,o,s),null),Et===null)throw Error(i(349));m||(Cs&124)!==0||mv(u,s,o)}return o}function mv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=ze.updateQueue,s===null?(s=Bp(),ze.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function gv(r,s,o,u){s.value=o,s.getSnapshot=u,_v(s)&&vv(r)}function yv(r,s,o){return o(function(){_v(s)&&vv(r)})}function _v(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Jn(r,o)}catch{return!0}}function vv(r){var s=Vo(r,2);s!==null&&sr(s,r,2)}function Hp(r){var s=$n();if(typeof r=="function"){var o=r;if(r=o(),Fa){Vn(!0);try{o()}finally{Vn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:r},s}function Ev(r,s,o,u){return r.baseState=o,$p(r,dt,typeof u=="function"?u:Yi)}function UA(r,s,o,u,f){if(Vh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,wv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function wv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=Y.T,b={};Y.T=b;try{var x=o(f,u),j=Y.S;j!==null&&j(b,x),bv(r,s,x)}catch(K){Yp(r,s,K)}finally{Y.T=m}}else try{m=o(f,u),bv(r,s,m)}catch(K){Yp(r,s,K)}}function bv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Tv(r,s,u)},function(u){return Yp(r,s,u)}):Tv(r,s,o)}function Tv(r,s,o){s.status="fulfilled",s.value=o,Sv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,wv(r,o)))}function Yp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Sv(s),s=s.next;while(s!==u)}r.action=null}function Sv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function xv(r,s){return s}function Av(r,s){if(rt){var o=Et.formState;if(o!==null){e:{var u=ze;if(rt){if(Pt){t:{for(var f=Pt,m=ii;f.nodeType!==8;){if(!m){f=null;break t}if(f=Nr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Pt=Nr(f.nextSibling),u=f.data==="F!";break e}}qa(u)}u=!1}u&&(s=o[0])}}return o=$n(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:s},o.queue=u,o=Hv.bind(null,ze,u),u.dispatch=o,u=Hp(!1),m=Xp.bind(null,ze,!1,u.queue),u=$n(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=UA.bind(null,ze,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Rv(r){var s=Yt();return Cv(s,dt,r)}function Cv(r,s,o){if(s=$p(r,s,xv)[0],r=Mh(Yi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=bu(s)}catch(b){throw b===gu?Rh:b}else u=s;s=Yt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ze.flags|=2048,Ho(9,Nh(),qA.bind(null,f,o),null)),[u,m,r]}function qA(r,s){r.action=s}function Dv(r){var s=Yt(),o=dt;if(o!==null)return Cv(s,o,r);Yt(),s=s.memoizedState,o=Yt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Ho(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=ze.updateQueue,s===null&&(s=Bp(),ze.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Nh(){return{destroy:void 0,resource:void 0}}function Iv(){return Yt().memoizedState}function Ph(r,s,o,u){var f=$n();u=u===void 0?null:u,ze.flags|=r,f.memoizedState=Ho(1|s,Nh(),o,u)}function Tu(r,s,o,u){var f=Yt();u=u===void 0?null:u;var m=f.memoizedState.inst;dt!==null&&u!==null&&Vp(u,dt.memoizedState.deps)?f.memoizedState=Ho(s,m,o,u):(ze.flags|=r,f.memoizedState=Ho(1|s,m,o,u))}function kv(r,s){Ph(8390656,8,r,s)}function Ov(r,s){Tu(2048,8,r,s)}function Mv(r,s){return Tu(4,2,r,s)}function Nv(r,s){return Tu(4,4,r,s)}function Pv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Vv(r,s,o){o=o!=null?o.concat([r]):null,Tu(4,4,Pv.bind(null,s,r),o)}function Gp(){}function jv(r,s){var o=Yt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Vp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Lv(r,s){var o=Yt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Vp(s,u[1]))return u[0];if(u=r(),Fa){Vn(!0);try{r()}finally{Vn(!1)}}return o.memoizedState=[u,s],u}function Wp(r,s,o){return o===void 0||(Cs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=B0(),ze.lanes|=r,Ps|=r,o)}function Uv(r,s,o,u){return Jn(o,s)?o:zo.current!==null?(r=Wp(r,o,u),Jn(r,s)||(fn=!0),r):(Cs&42)===0?(fn=!0,r.memoizedState=o):(r=B0(),ze.lanes|=r,Ps|=r,s)}function qv(r,s,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var b=Y.T,x={};Y.T=x,Xp(r,!1,s,o);try{var j=f(),K=Y.S;if(K!==null&&K(x,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var ne=VA(j,u);Su(r,s,ne,ir(r))}else Su(r,s,u,ir(r))}catch(le){Su(r,s,{then:function(){},status:"rejected",reason:le},ir())}finally{ie.p=m,Y.T=b}}function BA(){}function Qp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Bv(r).queue;qv(r,f,s,fe,o===null?BA:function(){return zv(r),o(u)})}function Bv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:fe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function zv(r){var s=Bv(r).next.queue;Su(r,s,{},ir())}function Kp(){return Dn(zu)}function $v(){return Yt().memoizedState}function Fv(){return Yt().memoizedState}function zA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=ir();r=As(o);var u=Rs(s,r,o);u!==null&&(sr(u,s,o),_u(u,s,o)),s={cache:Ap()},r.payload=s;return}s=s.return}}function $A(r,s,o){var u=ir();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Vh(r)?Yv(s,o):(o=gp(r,s,o,u),o!==null&&(sr(o,r,u),Gv(o,s,u)))}function Hv(r,s,o){var u=ir();Su(r,s,o,u)}function Su(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vh(r))Yv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,x=m(b,o);if(f.hasEagerState=!0,f.eagerState=x,Jn(x,b))return vh(r,s,f,0),Et===null&&_h(),!1}catch{}finally{}if(o=gp(r,s,f,u),o!==null)return sr(o,r,u),Gv(o,s,u),!0}return!1}function Xp(r,s,o,u){if(u={lane:2,revertLane:Dm(),action:u,hasEagerState:!1,eagerState:null,next:null},Vh(r)){if(s)throw Error(i(479))}else s=gp(r,o,u,2),s!==null&&sr(s,r,2)}function Vh(r){var s=r.alternate;return r===ze||s!==null&&s===ze}function Yv(r,s){$o=Ih=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Gv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,va(r,o)}}var jh={readContext:Dn,use:Oh,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt},Wv={readContext:Dn,use:Oh,useCallback:function(r,s){return $n().memoizedState=[r,s===void 0?null:s],r},useContext:Dn,useEffect:kv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Ph(4194308,4,Pv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Ph(4194308,4,r,s)},useInsertionEffect:function(r,s){Ph(4,2,r,s)},useMemo:function(r,s){var o=$n();s=s===void 0?null:s;var u=r();if(Fa){Vn(!0);try{r()}finally{Vn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=$n();if(o!==void 0){var f=o(s);if(Fa){Vn(!0);try{o(s)}finally{Vn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=$A.bind(null,ze,r),[u.memoizedState,r]},useRef:function(r){var s=$n();return r={current:r},s.memoizedState=r},useState:function(r){r=Hp(r);var s=r.queue,o=Hv.bind(null,ze,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Gp,useDeferredValue:function(r,s){var o=$n();return Wp(o,r,s)},useTransition:function(){var r=Hp(!1);return r=qv.bind(null,ze,r.queue,!0,!1),$n().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=ze,f=$n();if(rt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),Et===null)throw Error(i(349));(Ze&124)!==0||mv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,kv(yv.bind(null,u,m,r),[r]),u.flags|=2048,Ho(9,Nh(),gv.bind(null,u,m,o,s),null),o},useId:function(){var r=$n(),s=Et.identifierPrefix;if(rt){var o=$i,u=zi;o=(u&~(1<<32-ln(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=kh++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=jA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Kp,useFormState:Av,useActionState:Av,useOptimistic:function(r){var s=$n();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Xp.bind(null,ze,!0,o),o.dispatch=s,[r,s]},useMemoCache:zp,useCacheRefresh:function(){return $n().memoizedState=zA.bind(null,ze)}},Qv={readContext:Dn,use:Oh,useCallback:jv,useContext:Dn,useEffect:Ov,useImperativeHandle:Vv,useInsertionEffect:Mv,useLayoutEffect:Nv,useMemo:Lv,useReducer:Mh,useRef:Iv,useState:function(){return Mh(Yi)},useDebugValue:Gp,useDeferredValue:function(r,s){var o=Yt();return Uv(o,dt.memoizedState,r,s)},useTransition:function(){var r=Mh(Yi)[0],s=Yt().memoizedState;return[typeof r=="boolean"?r:bu(r),s]},useSyncExternalStore:pv,useId:$v,useHostTransitionStatus:Kp,useFormState:Rv,useActionState:Rv,useOptimistic:function(r,s){var o=Yt();return Ev(o,dt,r,s)},useMemoCache:zp,useCacheRefresh:Fv},FA={readContext:Dn,use:Oh,useCallback:jv,useContext:Dn,useEffect:Ov,useImperativeHandle:Vv,useInsertionEffect:Mv,useLayoutEffect:Nv,useMemo:Lv,useReducer:Fp,useRef:Iv,useState:function(){return Fp(Yi)},useDebugValue:Gp,useDeferredValue:function(r,s){var o=Yt();return dt===null?Wp(o,r,s):Uv(o,dt.memoizedState,r,s)},useTransition:function(){var r=Fp(Yi)[0],s=Yt().memoizedState;return[typeof r=="boolean"?r:bu(r),s]},useSyncExternalStore:pv,useId:$v,useHostTransitionStatus:Kp,useFormState:Dv,useActionState:Dv,useOptimistic:function(r,s){var o=Yt();return dt!==null?Ev(o,dt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:zp,useCacheRefresh:Fv},Yo=null,xu=0;function Lh(r){var s=xu;return xu+=1,Yo===null&&(Yo=[]),av(Yo,r,s)}function Au(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Uh(r,s){throw s.$$typeof===E?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Kv(r){var s=r._init;return s(r._payload)}function Xv(r){function s(G,B){if(r){var Q=G.deletions;Q===null?(G.deletions=[B],G.flags|=16):Q.push(B)}}function o(G,B){if(!r)return null;for(;B!==null;)s(G,B),B=B.sibling;return null}function u(G){for(var B=new Map;G!==null;)G.key!==null?B.set(G.key,G):B.set(G.index,G),G=G.sibling;return B}function f(G,B){return G=Bi(G,B),G.index=0,G.sibling=null,G}function m(G,B,Q){return G.index=Q,r?(Q=G.alternate,Q!==null?(Q=Q.index,Q<B?(G.flags|=67108866,B):Q):(G.flags|=67108866,B)):(G.flags|=1048576,B)}function b(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function x(G,B,Q,se){return B===null||B.tag!==6?(B=_p(Q,G.mode,se),B.return=G,B):(B=f(B,Q),B.return=G,B)}function j(G,B,Q,se){var Ee=Q.type;return Ee===P?ne(G,B,Q.props.children,se,Q.key):B!==null&&(B.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&Kv(Ee)===B.type)?(B=f(B,Q.props),Au(B,Q),B.return=G,B):(B=wh(Q.type,Q.key,Q.props,null,G.mode,se),Au(B,Q),B.return=G,B)}function K(G,B,Q,se){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=vp(Q,G.mode,se),B.return=G,B):(B=f(B,Q.children||[]),B.return=G,B)}function ne(G,B,Q,se,Ee){return B===null||B.tag!==7?(B=Va(Q,G.mode,se,Ee),B.return=G,B):(B=f(B,Q),B.return=G,B)}function le(G,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=_p(""+B,G.mode,Q),B.return=G,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case T:return Q=wh(B.type,B.key,B.props,null,G.mode,Q),Au(Q,B),Q.return=G,Q;case D:return B=vp(B,G.mode,Q),B.return=G,B;case S:var se=B._init;return B=se(B._payload),le(G,B,Q)}if(oe(B)||O(B))return B=Va(B,G.mode,Q,null),B.return=G,B;if(typeof B.then=="function")return le(G,Lh(B),Q);if(B.$$typeof===M)return le(G,xh(G,B),Q);Uh(G,B)}return null}function X(G,B,Q,se){var Ee=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ee!==null?null:x(G,B,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:return Q.key===Ee?j(G,B,Q,se):null;case D:return Q.key===Ee?K(G,B,Q,se):null;case S:return Ee=Q._init,Q=Ee(Q._payload),X(G,B,Q,se)}if(oe(Q)||O(Q))return Ee!==null?null:ne(G,B,Q,se,null);if(typeof Q.then=="function")return X(G,B,Lh(Q),se);if(Q.$$typeof===M)return X(G,B,xh(G,Q),se);Uh(G,Q)}return null}function Z(G,B,Q,se,Ee){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return G=G.get(Q)||null,x(B,G,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case T:return G=G.get(se.key===null?Q:se.key)||null,j(B,G,se,Ee);case D:return G=G.get(se.key===null?Q:se.key)||null,K(B,G,se,Ee);case S:var $e=se._init;return se=$e(se._payload),Z(G,B,Q,se,Ee)}if(oe(se)||O(se))return G=G.get(Q)||null,ne(B,G,se,Ee,null);if(typeof se.then=="function")return Z(G,B,Q,Lh(se),Ee);if(se.$$typeof===M)return Z(G,B,Q,xh(B,se),Ee);Uh(B,se)}return null}function Ne(G,B,Q,se){for(var Ee=null,$e=null,Se=B,Ce=B=0,pn=null;Se!==null&&Ce<Q.length;Ce++){Se.index>Ce?(pn=Se,Se=null):pn=Se.sibling;var tt=X(G,Se,Q[Ce],se);if(tt===null){Se===null&&(Se=pn);break}r&&Se&&tt.alternate===null&&s(G,Se),B=m(tt,B,Ce),$e===null?Ee=tt:$e.sibling=tt,$e=tt,Se=pn}if(Ce===Q.length)return o(G,Se),rt&&La(G,Ce),Ee;if(Se===null){for(;Ce<Q.length;Ce++)Se=le(G,Q[Ce],se),Se!==null&&(B=m(Se,B,Ce),$e===null?Ee=Se:$e.sibling=Se,$e=Se);return rt&&La(G,Ce),Ee}for(Se=u(Se);Ce<Q.length;Ce++)pn=Z(Se,G,Ce,Q[Ce],se),pn!==null&&(r&&pn.alternate!==null&&Se.delete(pn.key===null?Ce:pn.key),B=m(pn,B,Ce),$e===null?Ee=pn:$e.sibling=pn,$e=pn);return r&&Se.forEach(function(Fs){return s(G,Fs)}),rt&&La(G,Ce),Ee}function Re(G,B,Q,se){if(Q==null)throw Error(i(151));for(var Ee=null,$e=null,Se=B,Ce=B=0,pn=null,tt=Q.next();Se!==null&&!tt.done;Ce++,tt=Q.next()){Se.index>Ce?(pn=Se,Se=null):pn=Se.sibling;var Fs=X(G,Se,tt.value,se);if(Fs===null){Se===null&&(Se=pn);break}r&&Se&&Fs.alternate===null&&s(G,Se),B=m(Fs,B,Ce),$e===null?Ee=Fs:$e.sibling=Fs,$e=Fs,Se=pn}if(tt.done)return o(G,Se),rt&&La(G,Ce),Ee;if(Se===null){for(;!tt.done;Ce++,tt=Q.next())tt=le(G,tt.value,se),tt!==null&&(B=m(tt,B,Ce),$e===null?Ee=tt:$e.sibling=tt,$e=tt);return rt&&La(G,Ce),Ee}for(Se=u(Se);!tt.done;Ce++,tt=Q.next())tt=Z(Se,G,Ce,tt.value,se),tt!==null&&(r&&tt.alternate!==null&&Se.delete(tt.key===null?Ce:tt.key),B=m(tt,B,Ce),$e===null?Ee=tt:$e.sibling=tt,$e=tt);return r&&Se.forEach(function(HR){return s(G,HR)}),rt&&La(G,Ce),Ee}function mt(G,B,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===P&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:e:{for(var Ee=Q.key;B!==null;){if(B.key===Ee){if(Ee=Q.type,Ee===P){if(B.tag===7){o(G,B.sibling),se=f(B,Q.props.children),se.return=G,G=se;break e}}else if(B.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&Kv(Ee)===B.type){o(G,B.sibling),se=f(B,Q.props),Au(se,Q),se.return=G,G=se;break e}o(G,B);break}else s(G,B);B=B.sibling}Q.type===P?(se=Va(Q.props.children,G.mode,se,Q.key),se.return=G,G=se):(se=wh(Q.type,Q.key,Q.props,null,G.mode,se),Au(se,Q),se.return=G,G=se)}return b(G);case D:e:{for(Ee=Q.key;B!==null;){if(B.key===Ee)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){o(G,B.sibling),se=f(B,Q.children||[]),se.return=G,G=se;break e}else{o(G,B);break}else s(G,B);B=B.sibling}se=vp(Q,G.mode,se),se.return=G,G=se}return b(G);case S:return Ee=Q._init,Q=Ee(Q._payload),mt(G,B,Q,se)}if(oe(Q))return Ne(G,B,Q,se);if(O(Q)){if(Ee=O(Q),typeof Ee!="function")throw Error(i(150));return Q=Ee.call(Q),Re(G,B,Q,se)}if(typeof Q.then=="function")return mt(G,B,Lh(Q),se);if(Q.$$typeof===M)return mt(G,B,xh(G,Q),se);Uh(G,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(o(G,B.sibling),se=f(B,Q),se.return=G,G=se):(o(G,B),se=_p(Q,G.mode,se),se.return=G,G=se),b(G)):o(G,B)}return function(G,B,Q,se){try{xu=0;var Ee=mt(G,B,Q,se);return Yo=null,Ee}catch(Se){if(Se===gu||Se===Rh)throw Se;var $e=er(29,Se,null,G.mode);return $e.lanes=se,$e.return=G,$e}finally{}}}var Go=Xv(!0),Zv=Xv(!1),wr=te(null),si=null;function Ds(r){var s=r.alternate;ce(sn,sn.current&1),ce(wr,r),si===null&&(s===null||zo.current!==null||s.memoizedState!==null)&&(si=r)}function Jv(r){if(r.tag===22){if(ce(sn,sn.current),ce(wr,r),si===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(si=r)}}else Is()}function Is(){ce(sn,sn.current),ce(wr,wr.current)}function Gi(r){he(wr),si===r&&(si=null),he(sn)}var sn=te(0);function qh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Bm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Zp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Jp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=ir(),f=As(u);f.payload=s,o!=null&&(f.callback=o),s=Rs(r,f,u),s!==null&&(sr(s,r,u),_u(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=ir(),f=As(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Rs(r,f,u),s!==null&&(sr(s,r,u),_u(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=ir(),u=As(o);u.tag=2,s!=null&&(u.callback=s),s=Rs(r,u,o),s!==null&&(sr(s,r,o),_u(s,r,o))}};function e0(r,s,o,u,f,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,b):s.prototype&&s.prototype.isPureReactComponent?!lu(o,u)||!lu(f,m):!0}function t0(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Jp.enqueueReplaceState(s,s.state,null)}function Ha(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Bh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function n0(r){Bh(r)}function r0(r){console.error(r)}function i0(r){Bh(r)}function zh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function s0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function em(r,s,o){return o=As(o),o.tag=3,o.payload={element:null},o.callback=function(){zh(r,s)},o}function a0(r){return r=As(r),r.tag=3,r}function o0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){s0(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){s0(s,o,u),typeof f!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var x=u.stack;this.componentDidCatch(u.value,{componentStack:x!==null?x:""})})}function HA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&du(s,o,f,!0),o=wr.current,o!==null){switch(o.tag){case 13:return si===null?Sm():o.alternate===null&&Vt===0&&(Vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Dp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Am(r,u,f)),!1;case 22:return o.flags|=65536,u===Dp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Am(r,u,f)),!1}throw Error(i(435,o.tag))}return Am(r,u,f),Sm(),!1}if(rt)return s=wr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==bp&&(r=Error(i(422),{cause:u}),fu(yr(r,o)))):(u!==bp&&(s=Error(i(423),{cause:u}),fu(yr(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=yr(u,o),f=em(r.stateNode,u,f),Op(r,f),Vt!==4&&(Vt=2)),!1;var m=Error(i(520),{cause:u});if(m=yr(m,o),Mu===null?Mu=[m]:Mu.push(m),Vt!==4&&(Vt=2),s===null)return!0;u=yr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=em(o.stateNode,u,r),Op(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vs===null||!Vs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=a0(f),o0(f,r,o,u),Op(o,f),!1}o=o.return}while(o!==null);return!1}var l0=Error(i(461)),fn=!1;function wn(r,s,o,u){s.child=r===null?Zv(s,null,o,u):Go(s,r.child,o,u)}function u0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var b={};for(var x in u)x!=="ref"&&(b[x]=u[x])}else b=u;return za(s),u=jp(r,s,o,b,m,f),x=Lp(),r!==null&&!fn?(Up(r,s,f),Wi(r,s,f)):(rt&&x&&Ep(s),s.flags|=1,wn(r,s,u,f),s.child)}function c0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!yp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,h0(r,s,m,u,f)):(r=wh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!lm(r,f)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:lu,o(b,u)&&r.ref===s.ref)return Wi(r,s,f)}return s.flags|=1,r=Bi(m,u),r.ref=s.ref,r.return=s,s.child=r}function h0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(lu(m,u)&&r.ref===s.ref)if(fn=!1,s.pendingProps=u=m,lm(r,f))(r.flags&131072)!==0&&(fn=!0);else return s.lanes=r.lanes,Wi(r,s,f)}return tm(r,s,o,u,f)}function f0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return d0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ah(s,m!==null?m.cachePool:null),m!==null?hv(s,m):Np(),Jv(s);else return s.lanes=s.childLanes=536870912,d0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Ah(s,m.cachePool),hv(s,m),Is(),s.memoizedState=null):(r!==null&&Ah(s,null),Np(),Is());return wn(r,s,f,o),s.child}function d0(r,s,o,u){var f=Cp();return f=f===null?null:{parent:rn._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Ah(s,null),Np(),Jv(s),r!==null&&du(r,s,u,!0),null}function $h(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function tm(r,s,o,u,f){return za(s),o=jp(r,s,o,u,void 0,f),u=Lp(),r!==null&&!fn?(Up(r,s,f),Wi(r,s,f)):(rt&&u&&Ep(s),s.flags|=1,wn(r,s,o,f),s.child)}function p0(r,s,o,u,f,m){return za(s),s.updateQueue=null,o=dv(s,u,o,f),fv(r),u=Lp(),r!==null&&!fn?(Up(r,s,m),Wi(r,s,m)):(rt&&u&&Ep(s),s.flags|=1,wn(r,s,o,m),s.child)}function m0(r,s,o,u,f){if(za(s),s.stateNode===null){var m=jo,b=o.contextType;typeof b=="object"&&b!==null&&(m=Dn(b)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Ip(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?Dn(b):jo,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Zp(s,o,b,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Jp.enqueueReplaceState(m,m.state,null),Eu(s,u,m,f),vu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var x=s.memoizedProps,j=Ha(o,x);m.props=j;var K=m.context,ne=o.contextType;b=jo,typeof ne=="object"&&ne!==null&&(b=Dn(ne));var le=o.getDerivedStateFromProps;ne=typeof le=="function"||typeof m.getSnapshotBeforeUpdate=="function",x=s.pendingProps!==x,ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x||K!==b)&&t0(s,m,u,b),xs=!1;var X=s.memoizedState;m.state=X,Eu(s,u,m,f),vu(),K=s.memoizedState,x||X!==K||xs?(typeof le=="function"&&(Zp(s,o,le,u),K=s.memoizedState),(j=xs||e0(s,o,j,u,X,K,b))?(ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=K),m.props=u,m.state=K,m.context=b,u=j):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,kp(r,s),b=s.memoizedProps,ne=Ha(o,b),m.props=ne,le=s.pendingProps,X=m.context,K=o.contextType,j=jo,typeof K=="object"&&K!==null&&(j=Dn(K)),x=o.getDerivedStateFromProps,(K=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==le||X!==j)&&t0(s,m,u,j),xs=!1,X=s.memoizedState,m.state=X,Eu(s,u,m,f),vu();var Z=s.memoizedState;b!==le||X!==Z||xs||r!==null&&r.dependencies!==null&&Sh(r.dependencies)?(typeof x=="function"&&(Zp(s,o,x,u),Z=s.memoizedState),(ne=xs||e0(s,o,ne,u,X,Z,j)||r!==null&&r.dependencies!==null&&Sh(r.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Z,j),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Z,j)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),m.props=u,m.state=Z,m.context=j,u=ne):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,$h(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Go(s,r.child,null,f),s.child=Go(s,null,o,f)):wn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Wi(r,s,f),r}function g0(r,s,o,u){return hu(),s.flags|=256,wn(r,s,o,u),s.child}var nm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rm(r){return{baseLanes:r,cachePool:rv()}}function im(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=br),r}function y0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(sn.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(rt){if(f?Ds(s):Is(),rt){var x=Pt,j;if(j=x){e:{for(j=x,x=ii;j.nodeType!==8;){if(!x){x=null;break e}if(j=Nr(j.nextSibling),j===null){x=null;break e}}x=j}x!==null?(s.memoizedState={dehydrated:x,treeContext:ja!==null?{id:zi,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},j=er(18,null,null,0),j.stateNode=x,j.return=s,s.child=j,qn=s,Pt=null,j=!0):j=!1}j||qa(s)}if(x=s.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return Bm(x)?s.lanes=32:s.lanes=536870912,null;Gi(s)}return x=u.children,u=u.fallback,f?(Is(),f=s.mode,x=Fh({mode:"hidden",children:x},f),u=Va(u,f,o,null),x.return=s,u.return=s,x.sibling=u,s.child=x,f=s.child,f.memoizedState=rm(o),f.childLanes=im(r,b,o),s.memoizedState=nm,u):(Ds(s),sm(s,x))}if(j=r.memoizedState,j!==null&&(x=j.dehydrated,x!==null)){if(m)s.flags&256?(Ds(s),s.flags&=-257,s=am(r,s,o)):s.memoizedState!==null?(Is(),s.child=r.child,s.flags|=128,s=null):(Is(),f=u.fallback,x=s.mode,u=Fh({mode:"visible",children:u.children},x),f=Va(f,x,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Go(s,r.child,null,o),u=s.child,u.memoizedState=rm(o),u.childLanes=im(r,b,o),s.memoizedState=nm,s=f);else if(Ds(s),Bm(x)){if(b=x.nextSibling&&x.nextSibling.dataset,b)var K=b.dgst;b=K,u=Error(i(419)),u.stack="",u.digest=b,fu({value:u,source:null,stack:null}),s=am(r,s,o)}else if(fn||du(r,s,o,!1),b=(o&r.childLanes)!==0,fn||b){if(b=Et,b!==null&&(u=o&-o,u=(u&42)!==0?1:Gr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==j.retryLane))throw j.retryLane=u,Vo(r,u),sr(b,r,u),l0;x.data==="$?"||Sm(),s=am(r,s,o)}else x.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=j.treeContext,Pt=Nr(x.nextSibling),qn=s,rt=!0,Ua=null,ii=!1,r!==null&&(vr[Er++]=zi,vr[Er++]=$i,vr[Er++]=ja,zi=r.id,$i=r.overflow,ja=s),s=sm(s,u.children),s.flags|=4096);return s}return f?(Is(),f=u.fallback,x=s.mode,j=r.child,K=j.sibling,u=Bi(j,{mode:"hidden",children:u.children}),u.subtreeFlags=j.subtreeFlags&65011712,K!==null?f=Bi(K,f):(f=Va(f,x,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,x=r.child.memoizedState,x===null?x=rm(o):(j=x.cachePool,j!==null?(K=rn._currentValue,j=j.parent!==K?{parent:K,pool:K}:j):j=rv(),x={baseLanes:x.baseLanes|o,cachePool:j}),f.memoizedState=x,f.childLanes=im(r,b,o),s.memoizedState=nm,u):(Ds(s),o=r.child,r=o.sibling,o=Bi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function sm(r,s){return s=Fh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Fh(r,s){return r=er(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function am(r,s,o){return Go(s,r.child,null,o),r=sm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function _0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Sp(r.return,s,o)}function om(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function v0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(wn(r,s,u.children,o),u=sn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&_0(r,o,s);else if(r.tag===19)_0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ce(sn,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&qh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),om(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&qh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}om(s,!0,o,null,m);break;case"together":om(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),Ps|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(du(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Bi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Bi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function lm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Sh(r)))}function YA(r,s,o){switch(s.tag){case 3:Fe(s,s.stateNode.containerInfo),Ss(s,rn,r.memoizedState.cache),hu();break;case 27:case 5:Cn(s);break;case 4:Fe(s,s.stateNode.containerInfo);break;case 10:Ss(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ds(s),s.flags|=128,null):(o&s.child.childLanes)!==0?y0(r,s,o):(Ds(s),r=Wi(r,s,o),r!==null?r.sibling:null);Ds(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(du(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return v0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ce(sn,sn.current),u)break;return null;case 22:case 23:return s.lanes=0,f0(r,s,o);case 24:Ss(s,rn,r.memoizedState.cache)}return Wi(r,s,o)}function E0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)fn=!0;else{if(!lm(r,o)&&(s.flags&128)===0)return fn=!1,YA(r,s,o);fn=(r.flags&131072)!==0}else fn=!1,rt&&(s.flags&1048576)!==0&&K_(s,Th,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")yp(u)?(r=Ha(u,r),s.tag=1,s=m0(null,s,u,r,o)):(s.tag=0,s=tm(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===J){s.tag=11,s=u0(null,s,u,r,o);break e}else if(f===C){s.tag=14,s=c0(null,s,u,r,o);break e}}throw s=Me(u)||u,Error(i(306,s,""))}}return s;case 0:return tm(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ha(u,s.pendingProps),m0(r,s,u,f,o);case 3:e:{if(Fe(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,kp(r,s),Eu(s,u,null,o);var b=s.memoizedState;if(u=b.cache,Ss(s,rn,u),u!==m.cache&&xp(s,[rn],o,!0),vu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=g0(r,s,u,o);break e}else if(u!==f){f=yr(Error(i(424)),s),fu(f),s=g0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Pt=Nr(r.firstChild),qn=s,rt=!0,Ua=null,ii=!0,o=Zv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(hu(),u===f){s=Wi(r,s,o);break e}wn(r,s,u,o)}s=s.child}return s;case 26:return $h(r,s),r===null?(o=SE(s.type,null,s.pendingProps,null))?s.memoizedState=o:rt||(o=s.type,r=s.pendingProps,u=sf(be.current).createElement(o),u[en]=s,u[$t]=r,Tn(u,o,r),Ut(u),s.stateNode=u):s.memoizedState=SE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Cn(s),r===null&&rt&&(u=s.stateNode=wE(s.type,s.pendingProps,be.current),qn=s,ii=!0,f=Pt,Us(s.type)?(zm=f,Pt=Nr(u.firstChild)):Pt=f),wn(r,s,s.pendingProps.children,o),$h(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&rt&&((f=u=Pt)&&(u=ER(u,s.type,s.pendingProps,ii),u!==null?(s.stateNode=u,qn=s,Pt=Nr(u.firstChild),ii=!1,f=!0):f=!1),f||qa(s)),Cn(s),f=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,u=m.children,Lm(f,m)?u=null:b!==null&&Lm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=jp(r,s,LA,null,null,o),zu._currentValue=f),$h(r,s),wn(r,s,u,o),s.child;case 6:return r===null&&rt&&((r=o=Pt)&&(o=wR(o,s.pendingProps,ii),o!==null?(s.stateNode=o,qn=s,Pt=null,r=!0):r=!1),r||qa(s)),null;case 13:return y0(r,s,o);case 4:return Fe(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Go(s,null,u,o):wn(r,s,u,o),s.child;case 11:return u0(r,s,s.type,s.pendingProps,o);case 7:return wn(r,s,s.pendingProps,o),s.child;case 8:return wn(r,s,s.pendingProps.children,o),s.child;case 12:return wn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Ss(s,s.type,u.value),wn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,za(s),f=Dn(f),u=u(f),s.flags|=1,wn(r,s,u,o),s.child;case 14:return c0(r,s,s.type,s.pendingProps,o);case 15:return h0(r,s,s.type,s.pendingProps,o);case 19:return v0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Fh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Bi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return f0(r,s,o);case 24:return za(s),u=Dn(rn),r===null?(f=Cp(),f===null&&(f=Et,m=Ap(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Ip(s),Ss(s,rn,f)):((r.lanes&o)!==0&&(kp(r,s),Eu(s,null,null,o),vu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ss(s,rn,u)):(u=m.cache,Ss(s,rn,u),u!==f.cache&&xp(s,[rn],o,!0))),wn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Qi(r){r.flags|=4}function w0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!DE(s)){if(s=wr.current,s!==null&&((Ze&4194048)===Ze?si!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||s!==si))throw yu=Dp,iv;r.flags|=8192}}function Hh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?st():536870912,r.lanes|=s,Xo|=s)}function Ru(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function It(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function GA(r,s,o){var u=s.pendingProps;switch(wp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(s),null;case 1:return It(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Hi(rn),Tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(cu(s)?Qi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,J_())),It(s),null;case 26:return o=s.memoizedState,r===null?(Qi(s),o!==null?(It(s),w0(s,o)):(It(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Qi(s),It(s),w0(s,o)):(It(s),s.flags&=-16777217):(r.memoizedProps!==u&&Qi(s),It(s),s.flags&=-16777217),null;case 27:de(s),o=be.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}r=ve.current,cu(s)?X_(s):(r=wE(f,u,o),s.stateNode=r,Qi(s))}return It(s),null;case 5:if(de(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}if(r=ve.current,cu(s))X_(s);else{switch(f=sf(be.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[en]=s,r[$t]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(Tn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Qi(s)}}return It(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=be.current,cu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=qn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[en]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||pE(r.nodeValue,o)),r||qa(s)}else r=sf(r).createTextNode(u),r[en]=s,s.stateNode=r}return It(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=cu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[en]=s}else hu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;It(s),f=!1}else f=J_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Gi(s),s):(Gi(s),null)}if(Gi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Hh(s,s.updateQueue),It(s),null;case 4:return Tt(),r===null&&Mm(s.stateNode.containerInfo),It(s),null;case 10:return Hi(s.type),It(s),null;case 19:if(he(sn),f=s.memoizedState,f===null)return It(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)Ru(f,!1);else{if(Vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=qh(r),m!==null){for(s.flags|=128,Ru(f,!1),r=m.updateQueue,s.updateQueue=r,Hh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)Q_(o,r),o=o.sibling;return ce(sn,sn.current&1|2),s.child}r=r.sibling}f.tail!==null&&Lt()>Wh&&(s.flags|=128,u=!0,Ru(f,!1),s.lanes=4194304)}else{if(!u)if(r=qh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Hh(s,r),Ru(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!rt)return It(s),null}else 2*Lt()-f.renderingStartTime>Wh&&o!==536870912&&(s.flags|=128,u=!0,Ru(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Lt(),s.sibling=null,r=sn.current,ce(sn,u?r&1|2:r&1),s):(It(s),null);case 22:case 23:return Gi(s),Pp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(It(s),s.subtreeFlags&6&&(s.flags|=8192)):It(s),o=s.updateQueue,o!==null&&Hh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&he($a),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Hi(rn),It(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function WA(r,s){switch(wp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Hi(rn),Tt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return de(s),null;case 13:if(Gi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));hu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return he(sn),null;case 4:return Tt(),null;case 10:return Hi(s.type),null;case 22:case 23:return Gi(s),Pp(),r!==null&&he($a),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Hi(rn),null;case 25:return null;default:return null}}function b0(r,s){switch(wp(s),s.tag){case 3:Hi(rn),Tt();break;case 26:case 27:case 5:de(s);break;case 4:Tt();break;case 13:Gi(s);break;case 19:he(sn);break;case 10:Hi(s.type);break;case 22:case 23:Gi(s),Pp(),r!==null&&he($a);break;case 24:Hi(rn)}}function Cu(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==f)}}catch(x){_t(s,s.return,x)}}function ks(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var b=u.inst,x=b.destroy;if(x!==void 0){b.destroy=void 0,f=s;var j=o,K=x;try{K()}catch(ne){_t(f,j,ne)}}}u=u.next}while(u!==m)}}catch(ne){_t(s,s.return,ne)}}function T0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{cv(s,o)}catch(u){_t(r,r.return,u)}}}function S0(r,s,o){o.props=Ha(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){_t(r,s,u)}}function Du(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){_t(r,s,f)}}function ai(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){_t(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){_t(r,s,f)}else o.current=null}function x0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){_t(r,r.return,f)}}function um(r,s,o){try{var u=r.stateNode;mR(u,r.type,o,s),u[$t]=s}catch(f){_t(r,r.return,f)}}function A0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Us(r.type)||r.tag===4}function cm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||A0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Us(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hm(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rf));else if(u!==4&&(u===27&&Us(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(hm(r,s,o),r=r.sibling;r!==null;)hm(r,s,o),r=r.sibling}function Yh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Us(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Yh(r,s,o),r=r.sibling;r!==null;)Yh(r,s,o),r=r.sibling}function R0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Tn(s,u,o),s[en]=r,s[$t]=o}catch(m){_t(r,r.return,m)}}var Ki=!1,Bt=!1,fm=!1,C0=typeof WeakSet=="function"?WeakSet:Set,dn=null;function QA(r,s){if(r=r.containerInfo,Vm=hf,r=U_(r),cp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,x=-1,j=-1,K=0,ne=0,le=r,X=null;t:for(;;){for(var Z;le!==o||f!==0&&le.nodeType!==3||(x=b+f),le!==m||u!==0&&le.nodeType!==3||(j=b+u),le.nodeType===3&&(b+=le.nodeValue.length),(Z=le.firstChild)!==null;)X=le,le=Z;for(;;){if(le===r)break t;if(X===o&&++K===f&&(x=b),X===m&&++ne===u&&(j=b),(Z=le.nextSibling)!==null)break;le=X,X=le.parentNode}le=Z}o=x===-1||j===-1?null:{start:x,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(jm={focusedElem:r,selectionRange:o},hf=!1,dn=s;dn!==null;)if(s=dn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,dn=r;else for(;dn!==null;){switch(s=dn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ne=Ha(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ne,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Re){_t(o,o.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)qm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":qm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,dn=r;break}dn=s.return}}function D0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Os(r,o),u&4&&Cu(5,o);break;case 1:if(Os(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){_t(o,o.return,b)}else{var f=Ha(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){_t(o,o.return,b)}}u&64&&T0(o),u&512&&Du(o,o.return);break;case 3:if(Os(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{cv(r,s)}catch(b){_t(o,o.return,b)}}break;case 27:s===null&&u&4&&R0(o);case 26:case 5:Os(r,o),s===null&&u&4&&x0(o),u&512&&Du(o,o.return);break;case 12:Os(r,o);break;case 13:Os(r,o),u&4&&O0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=iR.bind(null,o),bR(r,o))));break;case 22:if(u=o.memoizedState!==null||Ki,!u){s=s!==null&&s.memoizedState!==null||Bt,f=Ki;var m=Bt;Ki=u,(Bt=s)&&!m?Ms(r,o,(o.subtreeFlags&8772)!==0):Os(r,o),Ki=f,Bt=m}break;case 30:break;default:Os(r,o)}}function I0(r){var s=r.alternate;s!==null&&(r.alternate=null,I0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Es(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Rt=null,Fn=!1;function Xi(r,s,o){for(o=o.child;o!==null;)k0(r,s,o),o=o.sibling}function k0(r,s,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(xt,o)}catch{}switch(o.tag){case 26:Bt||ai(o,s),Xi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Bt||ai(o,s);var u=Rt,f=Fn;Us(o.type)&&(Rt=o.stateNode,Fn=!1),Xi(r,s,o),Lu(o.stateNode),Rt=u,Fn=f;break;case 5:Bt||ai(o,s);case 6:if(u=Rt,f=Fn,Rt=null,Xi(r,s,o),Rt=u,Fn=f,Rt!==null)if(Fn)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(o.stateNode)}catch(m){_t(o,s,m)}else try{Rt.removeChild(o.stateNode)}catch(m){_t(o,s,m)}break;case 18:Rt!==null&&(Fn?(r=Rt,vE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Yu(r)):vE(Rt,o.stateNode));break;case 4:u=Rt,f=Fn,Rt=o.stateNode.containerInfo,Fn=!0,Xi(r,s,o),Rt=u,Fn=f;break;case 0:case 11:case 14:case 15:Bt||ks(2,o,s),Bt||ks(4,o,s),Xi(r,s,o);break;case 1:Bt||(ai(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&S0(o,s,u)),Xi(r,s,o);break;case 21:Xi(r,s,o);break;case 22:Bt=(u=Bt)||o.memoizedState!==null,Xi(r,s,o),Bt=u;break;default:Xi(r,s,o)}}function O0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Yu(r)}catch(o){_t(s,s.return,o)}}function KA(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new C0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new C0),s;default:throw Error(i(435,r.tag))}}function dm(r,s){var o=KA(r);s.forEach(function(u){var f=sR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function tr(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,b=s,x=b;e:for(;x!==null;){switch(x.tag){case 27:if(Us(x.type)){Rt=x.stateNode,Fn=!1;break e}break;case 5:Rt=x.stateNode,Fn=!1;break e;case 3:case 4:Rt=x.stateNode.containerInfo,Fn=!0;break e}x=x.return}if(Rt===null)throw Error(i(160));k0(m,b,f),Rt=null,Fn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)M0(s,r),s=s.sibling}var Mr=null;function M0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:tr(s,r),nr(r),u&4&&(ks(3,r,r.return),Cu(3,r),ks(5,r,r.return));break;case 1:tr(s,r),nr(r),u&512&&(Bt||o===null||ai(o,o.return)),u&64&&Ki&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Mr;if(tr(s,r),nr(r),u&512&&(Bt||o===null||ai(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ea]||m[en]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Tn(m,u,o),m[en]=r,Ut(m),u=m;break e;case"link":var b=RE("link","href",f).get(u+(o.href||""));if(b){for(var x=0;x<b.length;x++)if(m=b[x],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(x,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;case"meta":if(b=RE("meta","content",f).get(u+(o.content||""))){for(x=0;x<b.length;x++)if(m=b[x],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(x,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[en]=r,Ut(m),u=m}r.stateNode=u}else CE(f,r.type,r.stateNode);else r.stateNode=AE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?CE(f,r.type,r.stateNode):AE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&um(r,r.memoizedProps,o.memoizedProps)}break;case 27:tr(s,r),nr(r),u&512&&(Bt||o===null||ai(o,o.return)),o!==null&&u&4&&um(r,r.memoizedProps,o.memoizedProps);break;case 5:if(tr(s,r),nr(r),u&512&&(Bt||o===null||ai(o,o.return)),r.flags&32){f=r.stateNode;try{dr(f,"")}catch(Z){_t(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,um(r,f,o!==null?o.memoizedProps:f)),u&1024&&(fm=!0);break;case 6:if(tr(s,r),nr(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){_t(r,r.return,Z)}}break;case 3:if(lf=null,f=Mr,Mr=af(s.containerInfo),tr(s,r),Mr=f,nr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Yu(s.containerInfo)}catch(Z){_t(r,r.return,Z)}fm&&(fm=!1,N0(r));break;case 4:u=Mr,Mr=af(r.stateNode.containerInfo),tr(s,r),nr(r),Mr=u;break;case 12:tr(s,r),nr(r);break;case 13:tr(s,r),nr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(vm=Lt()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dm(r,u)));break;case 22:f=r.memoizedState!==null;var j=o!==null&&o.memoizedState!==null,K=Ki,ne=Bt;if(Ki=K||f,Bt=ne||j,tr(s,r),Bt=ne,Ki=K,nr(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||j||Ki||Bt||Ya(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){j=o=s;try{if(m=j.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{x=j.stateNode;var le=j.memoizedProps.style,X=le!=null&&le.hasOwnProperty("display")?le.display:null;x.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){_t(j,j.return,Z)}}}else if(s.tag===6){if(o===null){j=s;try{j.stateNode.nodeValue=f?"":j.memoizedProps}catch(Z){_t(j,j.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,dm(r,o))));break;case 19:tr(s,r),nr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dm(r,u)));break;case 30:break;case 21:break;default:tr(s,r),nr(r)}}function nr(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(A0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=cm(r);Yh(r,m,f);break;case 5:var b=o.stateNode;o.flags&32&&(dr(b,""),o.flags&=-33);var x=cm(r);Yh(r,x,b);break;case 3:case 4:var j=o.stateNode.containerInfo,K=cm(r);hm(r,K,j);break;default:throw Error(i(161))}}catch(ne){_t(r,r.return,ne)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function N0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;N0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Os(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)D0(r,s.alternate,s),s=s.sibling}function Ya(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ks(4,s,s.return),Ya(s);break;case 1:ai(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&S0(s,s.return,o),Ya(s);break;case 27:Lu(s.stateNode);case 26:case 5:ai(s,s.return),Ya(s);break;case 22:s.memoizedState===null&&Ya(s);break;case 30:Ya(s);break;default:Ya(s)}r=r.sibling}}function Ms(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ms(f,m,o),Cu(4,m);break;case 1:if(Ms(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){_t(u,u.return,K)}if(u=m,f=u.updateQueue,f!==null){var x=u.stateNode;try{var j=f.shared.hiddenCallbacks;if(j!==null)for(f.shared.hiddenCallbacks=null,f=0;f<j.length;f++)uv(j[f],x)}catch(K){_t(u,u.return,K)}}o&&b&64&&T0(m),Du(m,m.return);break;case 27:R0(m);case 26:case 5:Ms(f,m,o),o&&u===null&&b&4&&x0(m),Du(m,m.return);break;case 12:Ms(f,m,o);break;case 13:Ms(f,m,o),o&&b&4&&O0(f,m);break;case 22:m.memoizedState===null&&Ms(f,m,o),Du(m,m.return);break;case 30:break;default:Ms(f,m,o)}s=s.sibling}}function pm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&pu(o))}function mm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&pu(r))}function oi(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)P0(r,s,o,u),s=s.sibling}function P0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:oi(r,s,o,u),f&2048&&Cu(9,s);break;case 1:oi(r,s,o,u);break;case 3:oi(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&pu(r)));break;case 12:if(f&2048){oi(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,x=m.onPostCommit;typeof x=="function"&&x(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(j){_t(s,s.return,j)}}else oi(r,s,o,u);break;case 13:oi(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?oi(r,s,o,u):Iu(r,s):m._visibility&2?oi(r,s,o,u):(m._visibility|=2,Wo(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&pm(b,s);break;case 24:oi(r,s,o,u),f&2048&&mm(s.alternate,s);break;default:oi(r,s,o,u)}}function Wo(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,x=o,j=u,K=b.flags;switch(b.tag){case 0:case 11:case 15:Wo(m,b,x,j,f),Cu(8,b);break;case 23:break;case 22:var ne=b.stateNode;b.memoizedState!==null?ne._visibility&2?Wo(m,b,x,j,f):Iu(m,b):(ne._visibility|=2,Wo(m,b,x,j,f)),f&&K&2048&&pm(b.alternate,b);break;case 24:Wo(m,b,x,j,f),f&&K&2048&&mm(b.alternate,b);break;default:Wo(m,b,x,j,f)}s=s.sibling}}function Iu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Iu(o,u),f&2048&&pm(u.alternate,u);break;case 24:Iu(o,u),f&2048&&mm(u.alternate,u);break;default:Iu(o,u)}s=s.sibling}}var ku=8192;function Qo(r){if(r.subtreeFlags&ku)for(r=r.child;r!==null;)V0(r),r=r.sibling}function V0(r){switch(r.tag){case 26:Qo(r),r.flags&ku&&r.memoizedState!==null&&PR(Mr,r.memoizedState,r.memoizedProps);break;case 5:Qo(r);break;case 3:case 4:var s=Mr;Mr=af(r.stateNode.containerInfo),Qo(r),Mr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=ku,ku=16777216,Qo(r),ku=s):Qo(r));break;default:Qo(r)}}function j0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Ou(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];dn=u,U0(u,r)}j0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)L0(r),r=r.sibling}function L0(r){switch(r.tag){case 0:case 11:case 15:Ou(r),r.flags&2048&&ks(9,r,r.return);break;case 3:Ou(r);break;case 12:Ou(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Gh(r)):Ou(r);break;default:Ou(r)}}function Gh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];dn=u,U0(u,r)}j0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ks(8,s,s.return),Gh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Gh(s));break;default:Gh(s)}r=r.sibling}}function U0(r,s){for(;dn!==null;){var o=dn;switch(o.tag){case 0:case 11:case 15:ks(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:pu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,dn=u;else e:for(o=r;dn!==null;){u=dn;var f=u.sibling,m=u.return;if(I0(u),u===o){dn=null;break e}if(f!==null){f.return=m,dn=f;break e}dn=m}}}var XA={getCacheForType:function(r){var s=Dn(rn),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},ZA=typeof WeakMap=="function"?WeakMap:Map,ut=0,Et=null,He=null,Ze=0,ct=0,rr=null,Ns=!1,Ko=!1,gm=!1,Zi=0,Vt=0,Ps=0,Ga=0,ym=0,br=0,Xo=0,Mu=null,Hn=null,_m=!1,vm=0,Wh=1/0,Qh=null,Vs=null,bn=0,js=null,Zo=null,Jo=0,Em=0,wm=null,q0=null,Nu=0,bm=null;function ir(){if((ut&2)!==0&&Ze!==0)return Ze&-Ze;if(Y.T!==null){var r=qo;return r!==0?r:Dm()}return hr()}function B0(){br===0&&(br=(Ze&536870912)===0||rt?Le():536870912);var r=wr.current;return r!==null&&(r.flags|=32),br}function sr(r,s,o){(r===Et&&(ct===2||ct===9)||r.cancelPendingCommit!==null)&&(el(r,0),Ls(r,Ze,br,!1)),et(r,o),((ut&2)===0||r!==Et)&&(r===Et&&((ut&2)===0&&(Ga|=o),Vt===4&&Ls(r,Ze,br,!1)),li(r))}function z0(r,s,o){if((ut&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||Ii(r,s),f=u?tR(r,s):xm(r,s,!0),m=u;do{if(f===0){Ko&&!u&&Ls(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!JA(o)){f=xm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var x=r;f=Mu;var j=x.current.memoizedState.isDehydrated;if(j&&(el(x,b).flags|=256),b=xm(x,b,!1),b!==2){if(gm&&!j){x.errorRecoveryDisabledLanes|=m,Ga|=m,f=4;break e}m=Hn,Hn=f,m!==null&&(Hn===null?Hn=m:Hn.push.apply(Hn,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){el(r,0),Ls(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Ls(u,s,br,!Ns);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=vm+300-Lt(),10<f)){if(Ls(u,s,br,!Ns),Di(u,0,!0)!==0)break e;u.timeoutHandle=yE($0.bind(null,u,o,Hn,Qh,_m,s,br,Ga,Xo,Ns,m,2,-0,0),f);break e}$0(u,o,Hn,Qh,_m,s,br,Ga,Xo,Ns,m,0,-0,0)}}break}while(!0);li(r)}function $0(r,s,o,u,f,m,b,x,j,K,ne,le,X,Z){if(r.timeoutHandle=-1,le=s.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(Bu={stylesheets:null,count:0,unsuspend:NR},V0(s),le=VR(),le!==null)){r.cancelPendingCommit=le(K0.bind(null,r,s,m,o,u,f,b,x,j,ne,1,X,Z)),Ls(r,m,b,!K);return}K0(r,s,m,o,u,f,b,x,j)}function JA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Jn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ls(r,s,o,u){s&=~ym,s&=~Ga,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-ln(f),b=1<<m;u[m]=-1,f&=~b}o!==0&&Ue(r,o,s)}function Kh(){return(ut&6)===0?(Pu(0),!1):!0}function Tm(){if(He!==null){if(ct===0)var r=He.return;else r=He,Fi=Ba=null,qp(r),Yo=null,xu=0,r=He;for(;r!==null;)b0(r.alternate,r),r=r.return;He=null}}function el(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,yR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Tm(),Et=r,He=o=Bi(r.current,null),Ze=s,ct=0,rr=null,Ns=!1,Ko=Ii(r,s),gm=!1,Xo=br=ym=Ga=Ps=Vt=0,Hn=Mu=null,_m=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-ln(u),m=1<<f;s|=r[f],u&=~m}return Zi=s,_h(),o}function F0(r,s){ze=null,Y.H=jh,s===gu||s===Rh?(s=ov(),ct=3):s===iv?(s=ov(),ct=4):ct=s===l0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,rr=s,He===null&&(Vt=1,zh(r,yr(s,r.current)))}function H0(){var r=Y.H;return Y.H=jh,r===null?jh:r}function Y0(){var r=Y.A;return Y.A=XA,r}function Sm(){Vt=4,Ns||(Ze&4194048)!==Ze&&wr.current!==null||(Ko=!0),(Ps&134217727)===0&&(Ga&134217727)===0||Et===null||Ls(Et,Ze,br,!1)}function xm(r,s,o){var u=ut;ut|=2;var f=H0(),m=Y0();(Et!==r||Ze!==s)&&(Qh=null,el(r,s)),s=!1;var b=Vt;e:do try{if(ct!==0&&He!==null){var x=He,j=rr;switch(ct){case 8:Tm(),b=6;break e;case 3:case 2:case 9:case 6:wr.current===null&&(s=!0);var K=ct;if(ct=0,rr=null,tl(r,x,j,K),o&&Ko){b=0;break e}break;default:K=ct,ct=0,rr=null,tl(r,x,j,K)}}eR(),b=Vt;break}catch(ne){F0(r,ne)}while(!0);return s&&r.shellSuspendCounter++,Fi=Ba=null,ut=u,Y.H=f,Y.A=m,He===null&&(Et=null,Ze=0,_h()),b}function eR(){for(;He!==null;)G0(He)}function tR(r,s){var o=ut;ut|=2;var u=H0(),f=Y0();Et!==r||Ze!==s?(Qh=null,Wh=Lt()+500,el(r,s)):Ko=Ii(r,s);e:do try{if(ct!==0&&He!==null){s=He;var m=rr;t:switch(ct){case 1:ct=0,rr=null,tl(r,s,m,1);break;case 2:case 9:if(sv(m)){ct=0,rr=null,W0(s);break}s=function(){ct!==2&&ct!==9||Et!==r||(ct=7),li(r)},m.then(s,s);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:sv(m)?(ct=0,rr=null,W0(s)):(ct=0,rr=null,tl(r,s,m,7));break;case 5:var b=null;switch(He.tag){case 26:b=He.memoizedState;case 5:case 27:var x=He;if(!b||DE(b)){ct=0,rr=null;var j=x.sibling;if(j!==null)He=j;else{var K=x.return;K!==null?(He=K,Xh(K)):He=null}break t}}ct=0,rr=null,tl(r,s,m,5);break;case 6:ct=0,rr=null,tl(r,s,m,6);break;case 8:Tm(),Vt=6;break e;default:throw Error(i(462))}}nR();break}catch(ne){F0(r,ne)}while(!0);return Fi=Ba=null,Y.H=u,Y.A=f,ut=o,He!==null?0:(Et=null,Ze=0,_h(),Vt)}function nR(){for(;He!==null&&!it();)G0(He)}function G0(r){var s=E0(r.alternate,r,Zi);r.memoizedProps=r.pendingProps,s===null?Xh(r):He=s}function W0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=p0(o,s,s.pendingProps,s.type,void 0,Ze);break;case 11:s=p0(o,s,s.pendingProps,s.type.render,s.ref,Ze);break;case 5:qp(s);default:b0(o,s),s=He=Q_(s,Zi),s=E0(o,s,Zi)}r.memoizedProps=r.pendingProps,s===null?Xh(r):He=s}function tl(r,s,o,u){Fi=Ba=null,qp(s),Yo=null,xu=0;var f=s.return;try{if(HA(r,f,s,o,Ze)){Vt=1,zh(r,yr(o,r.current)),He=null;return}}catch(m){if(f!==null)throw He=f,m;Vt=1,zh(r,yr(o,r.current)),He=null;return}s.flags&32768?(rt||u===1?r=!0:Ko||(Ze&536870912)!==0?r=!1:(Ns=r=!0,(u===2||u===9||u===3||u===6)&&(u=wr.current,u!==null&&u.tag===13&&(u.flags|=16384))),Q0(s,r)):Xh(s)}function Xh(r){var s=r;do{if((s.flags&32768)!==0){Q0(s,Ns);return}r=s.return;var o=GA(s.alternate,s,Zi);if(o!==null){He=o;return}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Vt===0&&(Vt=5)}function Q0(r,s){do{var o=WA(r.alternate,r);if(o!==null){o.flags&=32767,He=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){He=r;return}He=r=o}while(r!==null);Vt=6,He=null}function K0(r,s,o,u,f,m,b,x,j){r.cancelPendingCommit=null;do Zh();while(bn!==0);if((ut&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=mp,un(r,o,m,b,x,j),r===Et&&(He=Et=null,Ze=0),Zo=s,js=r,Jo=o,Em=m,wm=f,q0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,aR(Si,function(){return tE(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=ie.p,ie.p=2,b=ut,ut|=4;try{QA(r,s,o)}finally{ut=b,ie.p=f,Y.T=u}}bn=1,X0(),Z0(),J0()}}function X0(){if(bn===1){bn=0;var r=js,s=Zo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=ie.p;ie.p=2;var f=ut;ut|=4;try{M0(s,r);var m=jm,b=U_(r.containerInfo),x=m.focusedElem,j=m.selectionRange;if(b!==x&&x&&x.ownerDocument&&L_(x.ownerDocument.documentElement,x)){if(j!==null&&cp(x)){var K=j.start,ne=j.end;if(ne===void 0&&(ne=K),"selectionStart"in x)x.selectionStart=K,x.selectionEnd=Math.min(ne,x.value.length);else{var le=x.ownerDocument||document,X=le&&le.defaultView||window;if(X.getSelection){var Z=X.getSelection(),Ne=x.textContent.length,Re=Math.min(j.start,Ne),mt=j.end===void 0?Re:Math.min(j.end,Ne);!Z.extend&&Re>mt&&(b=mt,mt=Re,Re=b);var G=j_(x,Re),B=j_(x,mt);if(G&&B&&(Z.rangeCount!==1||Z.anchorNode!==G.node||Z.anchorOffset!==G.offset||Z.focusNode!==B.node||Z.focusOffset!==B.offset)){var Q=le.createRange();Q.setStart(G.node,G.offset),Z.removeAllRanges(),Re>mt?(Z.addRange(Q),Z.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),Z.addRange(Q))}}}}for(le=[],Z=x;Z=Z.parentNode;)Z.nodeType===1&&le.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<le.length;x++){var se=le[x];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}hf=!!Vm,jm=Vm=null}finally{ut=f,ie.p=u,Y.T=o}}r.current=s,bn=2}}function Z0(){if(bn===2){bn=0;var r=js,s=Zo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=ie.p;ie.p=2;var f=ut;ut|=4;try{D0(r,s.alternate,s)}finally{ut=f,ie.p=u,Y.T=o}}bn=3}}function J0(){if(bn===4||bn===3){bn=0,Qn();var r=js,s=Zo,o=Jo,u=q0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?bn=5:(bn=0,Zo=js=null,eE(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Vs=null),ys(o),s=s.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(xt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,f=ie.p,ie.p=2,Y.T=null;try{for(var m=r.onRecoverableError,b=0;b<u.length;b++){var x=u[b];m(x.value,{componentStack:x.stack})}}finally{Y.T=s,ie.p=f}}(Jo&3)!==0&&Zh(),li(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===bm?Nu++:(Nu=0,bm=r):Nu=0,Pu(0)}}function eE(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,pu(s)))}function Zh(r){return X0(),Z0(),J0(),tE()}function tE(){if(bn!==5)return!1;var r=js,s=Em;Em=0;var o=ys(Jo),u=Y.T,f=ie.p;try{ie.p=32>o?32:o,Y.T=null,o=wm,wm=null;var m=js,b=Jo;if(bn=0,Zo=js=null,Jo=0,(ut&6)!==0)throw Error(i(331));var x=ut;if(ut|=4,L0(m.current),P0(m,m.current,b,o),ut=x,Pu(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(xt,m)}catch{}return!0}finally{ie.p=f,Y.T=u,eE(r,s)}}function nE(r,s,o){s=yr(o,s),s=em(r.stateNode,s,2),r=Rs(r,s,2),r!==null&&(et(r,2),li(r))}function _t(r,s,o){if(r.tag===3)nE(r,r,o);else for(;s!==null;){if(s.tag===3){nE(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Vs===null||!Vs.has(u))){r=yr(o,r),o=a0(2),u=Rs(s,o,2),u!==null&&(o0(o,u,s,r),et(u,2),li(u));break}}s=s.return}}function Am(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new ZA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(gm=!0,f.add(o),r=rR.bind(null,r,s,o),s.then(r,r))}function rR(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,Et===r&&(Ze&o)===o&&(Vt===4||Vt===3&&(Ze&62914560)===Ze&&300>Lt()-vm?(ut&2)===0&&el(r,0):ym|=o,Xo===Ze&&(Xo=0)),li(r)}function rE(r,s){s===0&&(s=st()),r=Vo(r,s),r!==null&&(et(r,s),li(r))}function iR(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),rE(r,o)}function sR(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),rE(r,o)}function aR(r,s){return we(r,s)}var Jh=null,nl=null,Rm=!1,ef=!1,Cm=!1,Wa=0;function li(r){r!==nl&&r.next===null&&(nl===null?Jh=nl=r:nl=nl.next=r),ef=!0,Rm||(Rm=!0,lR())}function Pu(r,s){if(!Cm&&ef){Cm=!0;do for(var o=!1,u=Jh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var b=u.suspendedLanes,x=u.pingedLanes;m=(1<<31-ln(42|r)+1)-1,m&=f&~(b&~x),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,oE(u,m))}else m=Ze,m=Di(u,u===Et?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ii(u,m)||(o=!0,oE(u,m));u=u.next}while(o);Cm=!1}}function oR(){iE()}function iE(){ef=Rm=!1;var r=0;Wa!==0&&(gR()&&(r=Wa),Wa=0);for(var s=Lt(),o=null,u=Jh;u!==null;){var f=u.next,m=sE(u,s);m===0?(u.next=null,o===null?Jh=f:o.next=f,f===null&&(nl=o)):(o=u,(r!==0||(m&3)!==0)&&(ef=!0)),u=f}Pu(r)}function sE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-ln(m),x=1<<b,j=f[b];j===-1?((x&o)===0||(x&u)!==0)&&(f[b]=gs(x,s)):j<=s&&(r.expiredLanes|=x),m&=~x}if(s=Et,o=Ze,o=Di(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(ct===2||ct===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Pe(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Ii(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Pe(u),ys(o)){case 2:case 8:o=cr;break;case 32:o=Si;break;case 268435456:o=Yr;break;default:o=Si}return u=aE.bind(null,r),o=we(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Pe(u),r.callbackPriority=2,r.callbackNode=null,2}function aE(r,s){if(bn!==0&&bn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Zh()&&r.callbackNode!==o)return null;var u=Ze;return u=Di(r,r===Et?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(z0(r,u,s),sE(r,Lt()),r.callbackNode!=null&&r.callbackNode===o?aE.bind(null,r):null)}function oE(r,s){if(Zh())return null;z0(r,s,!0)}function lR(){_R(function(){(ut&6)!==0?we(Kn,oR):iE()})}function Dm(){return Wa===0&&(Wa=Le()),Wa}function lE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:So(""+r)}function uE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function uR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=lE((f[$t]||null).action),b=u.submitter;b&&(s=(s=b[$t]||null)?lE(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var x=new xo("action","action",null,u,f);r.push({event:x,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Wa!==0){var j=b?uE(f,b):new FormData(f);Qp(o,{pending:!0,data:j,method:f.method,action:m},null,j)}}else typeof m=="function"&&(x.preventDefault(),j=b?uE(f,b):new FormData(f),Qp(o,{pending:!0,data:j,method:f.method,action:m},m,j))},currentTarget:f}]})}}for(var Im=0;Im<pp.length;Im++){var km=pp[Im],cR=km.toLowerCase(),hR=km[0].toUpperCase()+km.slice(1);Or(cR,"on"+hR)}Or(z_,"onAnimationEnd"),Or($_,"onAnimationIteration"),Or(F_,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(CA,"onTransitionRun"),Or(DA,"onTransitionStart"),Or(IA,"onTransitionCancel"),Or(H_,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vu));function cE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var b=u.length-1;0<=b;b--){var x=u[b],j=x.instance,K=x.currentTarget;if(x=x.listener,j!==m&&f.isPropagationStopped())break e;m=x,f.currentTarget=K;try{m(f)}catch(ne){Bh(ne)}f.currentTarget=null,m=j}else for(b=0;b<u.length;b++){if(x=u[b],j=x.instance,K=x.currentTarget,x=x.listener,j!==m&&f.isPropagationStopped())break e;m=x,f.currentTarget=K;try{m(f)}catch(ne){Bh(ne)}f.currentTarget=null,m=j}}}}function Ye(r,s){var o=s[Gl];o===void 0&&(o=s[Gl]=new Set);var u=r+"__bubble";o.has(u)||(hE(s,r,2,!1),o.add(u))}function Om(r,s,o){var u=0;s&&(u|=4),hE(o,r,u,s)}var tf="_reactListening"+Math.random().toString(36).slice(2);function Mm(r){if(!r[tf]){r[tf]=!0,Wl.forEach(function(o){o!=="selectionchange"&&(fR.has(o)||Om(o,!1,r),Om(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tf]||(s[tf]=!0,Om("selectionchange",!1,s))}}function hE(r,s,o,u){switch(PE(s)){case 2:var f=UR;break;case 8:f=qR;break;default:f=Gm}o=f.bind(null,s,o,r),f=void 0,!mr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Nm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var x=u.stateNode.containerInfo;if(x===f)break;if(b===4)for(b=u.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;x!==null;){if(b=ki(x),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){u=m=b;continue e}x=x.parentNode}}u=u.return}rh(function(){var K=m,ne=pr(o),le=[];e:{var X=Y_.get(r);if(X!==void 0){var Z=xo,Ne=r;switch(r){case"keypress":if(Jr(o)===0)break e;case"keydown":case"keyup":Z=ko;break;case"focusin":Ne="focus",Z=Co;break;case"focusout":Ne="blur",Z=Co;break;case"beforeblur":case"afterblur":Z=Co;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=hh;break;case z_:case $_:case F_:Z=Do;break;case H_:Z=dh;break;case"scroll":case"scrollend":Z=ih;break;case"wheel":Z=Oo;break;case"copy":case"cut":case"paste":Z=Io;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=au;break;case"toggle":case"beforetoggle":Z=mh}var Re=(s&4)!==0,mt=!Re&&(r==="scroll"||r==="scrollend"),G=Re?X!==null?X+"Capture":null:X;Re=[];for(var B=K,Q;B!==null;){var se=B;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||G===null||(se=Ra(B,G),se!=null&&Re.push(ju(B,se,Q))),mt)break;B=B.return}0<Re.length&&(X=new Z(X,Ne,null,o,ne),le.push({event:X,listeners:Re}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&o!==Pi&&(Ne=o.relatedTarget||o.fromElement)&&(ki(Ne)||Ne[fr]))break e;if((Z||X)&&(X=ne.window===ne?ne:(X=ne.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(Ne=o.relatedTarget||o.toElement,Z=K,Ne=Ne?ki(Ne):null,Ne!==null&&(mt=l(Ne),Re=Ne.tag,Ne!==mt||Re!==5&&Re!==27&&Re!==6)&&(Ne=null)):(Z=null,Ne=K),Z!==Ne)){if(Re=gr,se="onMouseLeave",G="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Re=au,se="onPointerLeave",G="onPointerEnter",B="pointer"),mt=Z==null?X:Qr(Z),Q=Ne==null?X:Qr(Ne),X=new Re(se,B+"leave",Z,o,ne),X.target=mt,X.relatedTarget=Q,se=null,ki(ne)===K&&(Re=new Re(G,B+"enter",Ne,o,ne),Re.target=Q,Re.relatedTarget=mt,se=Re),mt=se,Z&&Ne)t:{for(Re=Z,G=Ne,B=0,Q=Re;Q;Q=rl(Q))B++;for(Q=0,se=G;se;se=rl(se))Q++;for(;0<B-Q;)Re=rl(Re),B--;for(;0<Q-B;)G=rl(G),Q--;for(;B--;){if(Re===G||G!==null&&Re===G.alternate)break t;Re=rl(Re),G=rl(G)}Re=null}else Re=null;Z!==null&&fE(le,X,Z,Re,!1),Ne!==null&&mt!==null&&fE(le,mt,Ne,Re,!0)}}e:{if(X=K?Qr(K):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var Ee=k_;else if(nn(X))if(O_)Ee=xA;else{Ee=TA;var $e=bA}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?K&&Jl(K.elementType)&&(Ee=k_):Ee=SA;if(Ee&&(Ee=Ee(r,K))){qi(le,Ee,o,ne);break e}$e&&$e(r,X,K),r==="focusout"&&K&&X.type==="number"&&K.memoizedProps.value!=null&&bs(X,"number",X.value)}switch($e=K?Qr(K):window,r){case"focusin":(nn($e)||$e.contentEditable==="true")&&(Mo=$e,hp=K,uu=null);break;case"focusout":uu=hp=Mo=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,q_(le,o,ne);break;case"selectionchange":if(RA)break;case"keydown":case"keyup":q_(le,o,ne)}var Se;if(ni)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ke?ee(r,o)&&(Ce="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ce="onCompositionStart");Ce&&(w&&o.locale!=="ko"&&(Ke||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ke&&(Se=tu()):(Zr=ne,Ts="value"in Zr?Zr.value:Zr.textContent,Ke=!0)),$e=nf(K,Ce),0<$e.length&&(Ce=new iu(Ce,r,null,o,ne),le.push({event:Ce,listeners:$e}),Se?Ce.data=Se:(Se=pe(o),Se!==null&&(Ce.data=Se)))),(Se=y?tn(r,o):Xe(r,o))&&(Ce=nf(K,"onBeforeInput"),0<Ce.length&&($e=new iu("onBeforeInput","beforeinput",null,o,ne),le.push({event:$e,listeners:Ce}),$e.data=Se)),uR(le,r,K,o,ne)}cE(le,s)})}function ju(r,s,o){return{instance:r,listener:s,currentTarget:o}}function nf(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ra(r,o),f!=null&&u.unshift(ju(r,f,m)),f=Ra(r,s),f!=null&&u.push(ju(r,f,m))),r.tag===3)return u;r=r.return}return[]}function rl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function fE(r,s,o,u,f){for(var m=s._reactName,b=[];o!==null&&o!==u;){var x=o,j=x.alternate,K=x.stateNode;if(x=x.tag,j!==null&&j===u)break;x!==5&&x!==26&&x!==27||K===null||(j=K,f?(K=Ra(o,m),K!=null&&b.unshift(ju(o,K,j))):f||(K=Ra(o,m),K!=null&&b.push(ju(o,K,j)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var dR=/\r\n?/g,pR=/\u0000|\uFFFD/g;function dE(r){return(typeof r=="string"?r:""+r).replace(dR,`
`).replace(pR,"")}function pE(r,s){return s=dE(s),dE(r)===s}function rf(){}function pt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||dr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&dr(r,""+u);break;case"className":Kr(r,"class",u);break;case"tabIndex":Kr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Kr(r,o,u);break;case"style":Zl(r,u,m);break;case"data":if(s!=="object"){Kr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&pt(r,s,"name",f.name,f,null),pt(r,s,"formEncType",f.formEncType,f,null),pt(r,s,"formMethod",f.formMethod,f,null),pt(r,s,"formTarget",f.formTarget,f,null)):(pt(r,s,"encType",f.encType,f,null),pt(r,s,"method",f.method,f,null),pt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=rf);break;case"onScroll":u!=null&&Ye("scroll",r);break;case"onScrollEnd":u!=null&&Ye("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=So(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ye("beforetoggle",r),Ye("toggle",r),ws(r,"popover",u);break;case"xlinkActuate":vn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":vn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":vn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":vn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":vn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":vn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":vn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":vn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":vn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ws(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ip.get(o)||o,ws(r,o,u))}}function Pm(r,s,o,u,f,m){switch(o){case"style":Zl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?dr(r,u):(typeof u=="number"||typeof u=="bigint")&&dr(r,""+u);break;case"onScroll":u!=null&&Ye("scroll",r);break;case"onScrollEnd":u!=null&&Ye("scrollend",r);break;case"onClick":u!=null&&(r.onclick=rf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[$t]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):ws(r,o,u)}}}function Tn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",r),Ye("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,m,b,o,null)}}f&&pt(r,s,"srcSet",o.srcSet,o,null),u&&pt(r,s,"src",o.src,o,null);return;case"input":Ye("invalid",r);var x=m=b=f=null,j=null,K=null;for(u in o)if(o.hasOwnProperty(u)){var ne=o[u];if(ne!=null)switch(u){case"name":f=ne;break;case"type":b=ne;break;case"checked":j=ne;break;case"defaultChecked":K=ne;break;case"value":m=ne;break;case"defaultValue":x=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,s));break;default:pt(r,s,u,ne,o,null)}}Sa(r,m,x,j,K,b,f,!1),To(r);return;case"select":Ye("invalid",r),u=b=m=null;for(f in o)if(o.hasOwnProperty(f)&&(x=o[f],x!=null))switch(f){case"value":m=x;break;case"defaultValue":b=x;break;case"multiple":u=x;default:pt(r,s,f,x,o,null)}s=m,o=b,r.multiple=!!u,s!=null?Ni(r,!!u,s,!1):o!=null&&Ni(r,!!u,o,!0);return;case"textarea":Ye("invalid",r),m=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(x=o[b],x!=null))switch(b){case"value":u=x;break;case"defaultValue":f=x;break;case"children":m=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(i(91));break;default:pt(r,s,b,x,o,null)}xa(r,u,f,m),To(r);return;case"option":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:pt(r,s,j,u,o,null)}return;case"dialog":Ye("beforetoggle",r),Ye("toggle",r),Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":Ye("load",r);break;case"video":case"audio":for(u=0;u<Vu.length;u++)Ye(Vu[u],r);break;case"image":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"embed":case"source":case"link":Ye("error",r),Ye("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in o)if(o.hasOwnProperty(K)&&(u=o[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,K,u,o,null)}return;default:if(Jl(s)){for(ne in o)o.hasOwnProperty(ne)&&(u=o[ne],u!==void 0&&Pm(r,s,ne,u,o,void 0));return}}for(x in o)o.hasOwnProperty(x)&&(u=o[x],u!=null&&pt(r,s,x,u,o,null))}function mR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,x=null,j=null,K=null,ne=null;for(Z in o){var le=o[Z];if(o.hasOwnProperty(Z)&&le!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":j=le;default:u.hasOwnProperty(Z)||pt(r,s,Z,null,u,le)}}for(var X in u){var Z=u[X];if(le=o[X],u.hasOwnProperty(X)&&(Z!=null||le!=null))switch(X){case"type":m=Z;break;case"name":f=Z;break;case"checked":K=Z;break;case"defaultChecked":ne=Z;break;case"value":b=Z;break;case"defaultValue":x=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==le&&pt(r,s,X,Z,u,le)}}Zn(r,b,x,j,K,ne,m,f);return;case"select":Z=b=x=X=null;for(m in o)if(j=o[m],o.hasOwnProperty(m)&&j!=null)switch(m){case"value":break;case"multiple":Z=j;default:u.hasOwnProperty(m)||pt(r,s,m,null,u,j)}for(f in u)if(m=u[f],j=o[f],u.hasOwnProperty(f)&&(m!=null||j!=null))switch(f){case"value":X=m;break;case"defaultValue":x=m;break;case"multiple":b=m;default:m!==j&&pt(r,s,f,m,u,j)}s=x,o=b,u=Z,X!=null?Ni(r,!!o,X,!1):!!u!=!!o&&(s!=null?Ni(r,!!o,s,!0):Ni(r,!!o,o?[]:"",!1));return;case"textarea":Z=X=null;for(x in o)if(f=o[x],o.hasOwnProperty(x)&&f!=null&&!u.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:pt(r,s,x,null,u,f)}for(b in u)if(f=u[b],m=o[b],u.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":X=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&pt(r,s,b,f,u,m)}ft(r,X,Z);return;case"option":for(var Ne in o)if(X=o[Ne],o.hasOwnProperty(Ne)&&X!=null&&!u.hasOwnProperty(Ne))switch(Ne){case"selected":r.selected=!1;break;default:pt(r,s,Ne,null,u,X)}for(j in u)if(X=u[j],Z=o[j],u.hasOwnProperty(j)&&X!==Z&&(X!=null||Z!=null))switch(j){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:pt(r,s,j,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in o)X=o[Re],o.hasOwnProperty(Re)&&X!=null&&!u.hasOwnProperty(Re)&&pt(r,s,Re,null,u,X);for(K in u)if(X=u[K],Z=o[K],u.hasOwnProperty(K)&&X!==Z&&(X!=null||Z!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:pt(r,s,K,X,u,Z)}return;default:if(Jl(s)){for(var mt in o)X=o[mt],o.hasOwnProperty(mt)&&X!==void 0&&!u.hasOwnProperty(mt)&&Pm(r,s,mt,void 0,u,X);for(ne in u)X=u[ne],Z=o[ne],!u.hasOwnProperty(ne)||X===Z||X===void 0&&Z===void 0||Pm(r,s,ne,X,u,Z);return}}for(var G in o)X=o[G],o.hasOwnProperty(G)&&X!=null&&!u.hasOwnProperty(G)&&pt(r,s,G,null,u,X);for(le in u)X=u[le],Z=o[le],!u.hasOwnProperty(le)||X===Z||X==null&&Z==null||pt(r,s,le,X,u,Z)}var Vm=null,jm=null;function sf(r){return r.nodeType===9?r:r.ownerDocument}function mE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Lm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Um=null;function gR(){var r=window.event;return r&&r.type==="popstate"?r===Um?!1:(Um=r,!0):(Um=null,!1)}var yE=typeof setTimeout=="function"?setTimeout:void 0,yR=typeof clearTimeout=="function"?clearTimeout:void 0,_E=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof _E<"u"?function(r){return _E.resolve(null).then(r).catch(vR)}:yE;function vR(r){setTimeout(function(){throw r})}function Us(r){return r==="head"}function vE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var b=r.ownerDocument;if(o&1&&Lu(b.documentElement),o&2&&Lu(b.body),o&4)for(o=b.head,Lu(o),b=o.firstChild;b;){var x=b.nextSibling,j=b.nodeName;b[Ea]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=x}}if(f===0){r.removeChild(m),Yu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Yu(s)}function qm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":qm(o),Es(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function ER(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[Ea])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Nr(r.nextSibling),r===null)break}return null}function wR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Nr(r.nextSibling),r===null))return null;return r}function Bm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function bR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Nr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var zm=null;function EE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function wE(r,s,o){switch(s=sf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Lu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Es(r)}var Tr=new Map,bE=new Set;function af(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Ji=ie.d;ie.d={f:TR,r:SR,D:xR,C:AR,L:RR,m:CR,X:IR,S:DR,M:kR};function TR(){var r=Ji.f(),s=Kh();return r||s}function SR(r){var s=Wr(r);s!==null&&s.tag===5&&s.type==="form"?zv(s):Ji.r(r)}var il=typeof document>"u"?null:document;function TE(r,s,o){var u=il;if(u&&typeof s=="string"&&s){var f=Ft(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),bE.has(f)||(bE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Tn(s,"link",r),Ut(s),u.head.appendChild(s)))}}function xR(r){Ji.D(r),TE("dns-prefetch",r,null)}function AR(r,s){Ji.C(r,s),TE("preconnect",r,s)}function RR(r,s,o){Ji.L(r,s,o);var u=il;if(u&&r&&s){var f='link[rel="preload"][as="'+Ft(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ft(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ft(o.imageSizes)+'"]')):f+='[href="'+Ft(r)+'"]';var m=f;switch(s){case"style":m=sl(r);break;case"script":m=al(r)}Tr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),Tr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(Uu(m))||s==="script"&&u.querySelector(qu(m))||(s=u.createElement("link"),Tn(s,"link",r),Ut(s),u.head.appendChild(s)))}}function CR(r,s){Ji.m(r,s);var o=il;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ft(u)+'"][href="'+Ft(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=al(r)}if(!Tr.has(m)&&(r=v({rel:"modulepreload",href:r},s),Tr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(qu(m)))return}u=o.createElement("link"),Tn(u,"link",r),Ut(u),o.head.appendChild(u)}}}function DR(r,s,o){Ji.S(r,s,o);var u=il;if(u&&r){var f=jn(u).hoistableStyles,m=sl(r);s=s||"default";var b=f.get(m);if(!b){var x={loading:0,preload:null};if(b=u.querySelector(Uu(m)))x.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=Tr.get(m))&&$m(r,o);var j=b=u.createElement("link");Ut(j),Tn(j,"link",r),j._p=new Promise(function(K,ne){j.onload=K,j.onerror=ne}),j.addEventListener("load",function(){x.loading|=1}),j.addEventListener("error",function(){x.loading|=2}),x.loading|=4,of(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:x},f.set(m,b)}}}function IR(r,s){Ji.X(r,s);var o=il;if(o&&r){var u=jn(o).hoistableScripts,f=al(r),m=u.get(f);m||(m=o.querySelector(qu(f)),m||(r=v({src:r,async:!0},s),(s=Tr.get(f))&&Fm(r,s),m=o.createElement("script"),Ut(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function kR(r,s){Ji.M(r,s);var o=il;if(o&&r){var u=jn(o).hoistableScripts,f=al(r),m=u.get(f);m||(m=o.querySelector(qu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=Tr.get(f))&&Fm(r,s),m=o.createElement("script"),Ut(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function SE(r,s,o,u){var f=(f=be.current)?af(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=jn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=sl(o.href);var m=jn(f).hoistableStyles,b=m.get(r);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=f.querySelector(Uu(r)))&&!m._p&&(b.instance=m,b.state.loading=5),Tr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Tr.set(r,o),m||OR(f,r,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=al(o),o=jn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function sl(r){return'href="'+Ft(r)+'"'}function Uu(r){return'link[rel="stylesheet"]['+r+"]"}function xE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function OR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Tn(s,"link",o),Ut(s),r.head.appendChild(s))}function al(r){return'[src="'+Ft(r)+'"]'}function qu(r){return"script[async]"+r}function AE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Ft(o.href)+'"]');if(u)return s.instance=u,Ut(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Ut(u),Tn(u,"style",f),of(u,o.precedence,r),s.instance=u;case"stylesheet":f=sl(o.href);var m=r.querySelector(Uu(f));if(m)return s.state.loading|=4,s.instance=m,Ut(m),m;u=xE(o),(f=Tr.get(f))&&$m(u,f),m=(r.ownerDocument||r).createElement("link"),Ut(m);var b=m;return b._p=new Promise(function(x,j){b.onload=x,b.onerror=j}),Tn(m,"link",u),s.state.loading|=4,of(m,o.precedence,r),s.instance=m;case"script":return m=al(o.src),(f=r.querySelector(qu(m)))?(s.instance=f,Ut(f),f):(u=o,(f=Tr.get(m))&&(u=v({},o),Fm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Ut(f),Tn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,of(u,o.precedence,r));return s.instance}function of(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,b=0;b<u.length;b++){var x=u[b];if(x.dataset.precedence===s)m=x;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function $m(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Fm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var lf=null;function RE(r,s,o){if(lf===null){var u=new Map,f=lf=new Map;f.set(o,u)}else f=lf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[Ea]||m[en]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var x=u.get(b);x?x.push(m):u.set(b,[m])}}return u}function CE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function MR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function DE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Bu=null;function NR(){}function PR(r,s,o){if(Bu===null)throw Error(i(475));var u=Bu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=sl(o.href),m=r.querySelector(Uu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=uf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,Ut(m);return}m=r.ownerDocument||r,o=xE(o),(f=Tr.get(f))&&$m(o,f),m=m.createElement("link"),Ut(m);var b=m;b._p=new Promise(function(x,j){b.onload=x,b.onerror=j}),Tn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=uf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function VR(){if(Bu===null)throw Error(i(475));var r=Bu;return r.stylesheets&&r.count===0&&Hm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Hm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function uf(){if(this.count--,this.count===0){if(this.stylesheets)Hm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var cf=null;function Hm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,cf=new Map,s.forEach(jR,r),cf=null,uf.call(r))}function jR(r,s){if(!(s.state.loading&4)){var o=cf.get(r);if(o)var u=o.get(null);else{o=new Map,cf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,f),o.set(b,f),this.count++,u=uf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var zu={$$typeof:M,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function LR(r,s,o,u,f,m,b,x){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function IE(r,s,o,u,f,m,b,x,j,K,ne,le){return r=new LR(r,s,o,b,x,j,K,le),s=1,m===!0&&(s|=24),m=er(3,null,null,s),r.current=m,m.stateNode=r,s=Ap(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Ip(m),r}function kE(r){return r?(r=jo,r):jo}function OE(r,s,o,u,f,m){f=kE(f),u.context===null?u.context=f:u.pendingContext=f,u=As(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Rs(r,u,s),o!==null&&(sr(o,r,s),_u(o,r,s))}function ME(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Ym(r,s){ME(r,s),(r=r.alternate)&&ME(r,s)}function NE(r){if(r.tag===13){var s=Vo(r,67108864);s!==null&&sr(s,r,67108864),Ym(r,67108864)}}var hf=!0;function UR(r,s,o,u){var f=Y.T;Y.T=null;var m=ie.p;try{ie.p=2,Gm(r,s,o,u)}finally{ie.p=m,Y.T=f}}function qR(r,s,o,u){var f=Y.T;Y.T=null;var m=ie.p;try{ie.p=8,Gm(r,s,o,u)}finally{ie.p=m,Y.T=f}}function Gm(r,s,o,u){if(hf){var f=Wm(u);if(f===null)Nm(r,s,u,ff,o),VE(r,u);else if(zR(f,r,s,o,u))u.stopPropagation();else if(VE(r,u),s&4&&-1<BR.indexOf(r)){for(;f!==null;){var m=Wr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Xn(m.pendingLanes);if(b!==0){var x=m;for(x.pendingLanes|=2,x.entangledLanes|=2;b;){var j=1<<31-ln(b);x.entanglements[1]|=j,b&=~j}li(m),(ut&6)===0&&(Wh=Lt()+500,Pu(0))}}break;case 13:x=Vo(m,2),x!==null&&sr(x,m,2),Kh(),Ym(m,2)}if(m=Wm(u),m===null&&Nm(r,s,u,ff,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Nm(r,s,u,null,o)}}function Wm(r){return r=pr(r),Qm(r)}var ff=null;function Qm(r){if(ff=null,r=ki(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return ff=r,null}function PE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hr()){case Kn:return 2;case cr:return 8;case Si:case go:return 32;case Yr:return 268435456;default:return 32}default:return 32}}var Km=!1,qs=null,Bs=null,zs=null,$u=new Map,Fu=new Map,$s=[],BR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function VE(r,s){switch(r){case"focusin":case"focusout":qs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":$u.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fu.delete(s.pointerId)}}function Hu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Wr(s),s!==null&&NE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function zR(r,s,o,u,f){switch(s){case"focusin":return qs=Hu(qs,r,s,o,u,f),!0;case"dragenter":return Bs=Hu(Bs,r,s,o,u,f),!0;case"mouseover":return zs=Hu(zs,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return $u.set(m,Hu($u.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Fu.set(m,Hu(Fu.get(m)||null,r,s,o,u,f)),!0}return!1}function jE(r){var s=ki(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,_s(r.priority,function(){if(o.tag===13){var u=ir();u=Gr(u);var f=Vo(o,u);f!==null&&sr(f,o,u),Ym(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function df(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Wm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Pi=u,o.target.dispatchEvent(u),Pi=null}else return s=Wr(o),s!==null&&NE(s),r.blockedOn=o,!1;s.shift()}return!0}function LE(r,s,o){df(r)&&o.delete(s)}function $R(){Km=!1,qs!==null&&df(qs)&&(qs=null),Bs!==null&&df(Bs)&&(Bs=null),zs!==null&&df(zs)&&(zs=null),$u.forEach(LE),Fu.forEach(LE)}function pf(r,s){r.blockedOn===s&&(r.blockedOn=null,Km||(Km=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$R)))}var mf=null;function UE(r){mf!==r&&(mf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){mf===r&&(mf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Qm(u||o)===null)continue;break}var m=Wr(o);m!==null&&(r.splice(s,3),s-=3,Qp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Yu(r){function s(j){return pf(j,r)}qs!==null&&pf(qs,r),Bs!==null&&pf(Bs,r),zs!==null&&pf(zs,r),$u.forEach(s),Fu.forEach(s);for(var o=0;o<$s.length;o++){var u=$s[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<$s.length&&(o=$s[0],o.blockedOn===null);)jE(o),o.blockedOn===null&&$s.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],b=f[$t]||null;if(typeof m=="function")b||UE(o);else if(b){var x=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[$t]||null)x=b.formAction;else if(Qm(f)!==null)continue}else x=b.action;typeof x=="function"?o[u+1]=x:(o.splice(u,3),u-=3),UE(o)}}}function Xm(r){this._internalRoot=r}gf.prototype.render=Xm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=ir();OE(o,u,r,s,null,null)},gf.prototype.unmount=Xm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;OE(r.current,2,null,r,null,null),Kh(),s[fr]=null}};function gf(r){this._internalRoot=r}gf.prototype.unstable_scheduleHydration=function(r){if(r){var s=hr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<$s.length&&s!==0&&s<$s[o].priority;o++);$s.splice(o,0,r),o===0&&jE(r)}};var qE=e.version;if(qE!=="19.1.0")throw Error(i(527,qE,"19.1.0"));ie.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var FR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yf.isDisabled&&yf.supportsFiber)try{xt=yf.inject(FR),nt=yf}catch{}}return Wu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=n0,m=r0,b=i0,x=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(x=s.unstable_transitionCallbacks)),s=IE(r,1,!1,null,null,o,u,f,m,b,x,null),r[fr]=s.current,Mm(r),new Xm(s)},Wu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=n0,b=r0,x=i0,j=null,K=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(x=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(j=o.unstable_transitionCallbacks),o.formState!==void 0&&(K=o.formState)),s=IE(r,1,!0,s,o??null,u,f,m,b,x,j,K),s.context=kE(null),o=s.current,u=ir(),u=Gr(u),f=As(u),f.callback=null,Rs(o,f,u),o=u,s.current.lanes=o,et(s,o),li(s),r[fr]=s.current,Mm(r),new gf(s)},Wu.version="19.1.0",Wu}var KE;function tC(){if(KE)return eg.exports;KE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),eg.exports=eC(),eg.exports}var nC=tC();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var XE="popstate";function rC(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Dg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:gc(a)}return sC(e,n,null,t)}function Dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Br(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iC(){return Math.random().toString(36).substring(2,10)}function ZE(t,e){return{usr:t.state,key:t.key,idx:e}}function Dg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ml(e):e,state:n,key:e&&e.key||i||iC()}}function gc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ml(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function sC(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function E(){d="POP";let N=v(),F=N==null?null:N-g;g=N,p&&p({action:d,location:q.location,delta:F})}function T(N,F){d="PUSH";let z=Dg(q.location,N,F);g=v()+1;let M=ZE(z,g),J=q.createHref(z);try{c.pushState(M,"",J)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(J)}l&&p&&p({action:d,location:q.location,delta:1})}function D(N,F){d="REPLACE";let z=Dg(q.location,N,F);g=v();let M=ZE(z,g),J=q.createHref(z);c.replaceState(M,"",J),l&&p&&p({action:d,location:q.location,delta:0})}function P(N){return aC(N)}let q={get action(){return d},get location(){return t(a,c)},listen(N){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(XE,E),p=N,()=>{a.removeEventListener(XE,E),p=null}},createHref(N){return e(a,N)},createURL:P,encodeLocation(N){let F=P(N);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:D,go(N){return c.go(N)}};return q}function aC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:gc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function ST(t,e,n="/"){return oC(t,e,n,!1)}function oC(t,e,n,i){let a=typeof e=="string"?Ml(e):e,l=ls(a.pathname||"/",n);if(l==null)return null;let c=xT(t);lC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=vC(l);d=yC(c[p],g,i)}return d}function xT(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Dt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=ss([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(Dt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xT(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:mC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of AT(l.path))a(l,c,p)}),e}function AT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=AT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function lC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var uC=/^:[\w-]+$/,cC=3,hC=2,fC=1,dC=10,pC=-2,JE=t=>t==="*";function mC(t,e){let n=t.split("/"),i=n.length;return n.some(JE)&&(i+=pC),e&&(i+=hC),n.filter(a=>!JE(a)).reduce((a,l)=>a+(uC.test(l)?cC:l===""?fC:dC),i)}function gC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function yC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=Qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!E&&g&&n&&!i[i.length-1].route.index&&(E=Qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!E)return null;Object.assign(a,E.params),c.push({params:a,pathname:ss([l,E.pathname]),pathnameBase:TC(ss([l,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(l=ss([l,E.pathnameBase]))}return c}function Qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=_C(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let P=d[T]||"";c=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const D=d[T];return E&&!D?g[v]=void 0:g[v]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function _C(t,e=!1,n=!0){Br(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function vC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Br(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ls(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function EC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Ml(t):t;return{pathname:n?n.startsWith("/")?n:wC(n,e):e,search:SC(i),hash:xC(a)}}function wC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ig(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gy(t){let e=bC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function yy(t,e,n,i=!1){let a;typeof t=="string"?a=Ml(t):(a={...t},Dt(!a.pathname||!a.pathname.includes("?"),ig("?","pathname","search",a)),Dt(!a.pathname||!a.pathname.includes("#"),ig("#","pathname","hash",a)),Dt(!a.search||!a.search.includes("#"),ig("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;a.pathname=T.join("/")}d=E>=0?e[E]:"/"}let p=EC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var ss=t=>t.join("/").replace(/\/\/+/g,"/"),TC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var RT=["POST","PUT","PATCH","DELETE"];new Set(RT);var RC=["GET",...RT];new Set(RC);var Nl=U.createContext(null);Nl.displayName="DataRouter";var vd=U.createContext(null);vd.displayName="DataRouterState";U.createContext(!1);var CT=U.createContext({isTransitioning:!1});CT.displayName="ViewTransition";var CC=U.createContext(new Map);CC.displayName="Fetchers";var DC=U.createContext(null);DC.displayName="Await";var Fr=U.createContext(null);Fr.displayName="Navigation";var Oc=U.createContext(null);Oc.displayName="Location";var bi=U.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var _y=U.createContext(null);_y.displayName="RouteError";function IC(t,{relative:e}={}){Dt(Pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=U.useContext(Fr),{hash:a,pathname:l,search:c}=Nc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:ss([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Pl(){return U.useContext(Oc)!=null}function pa(){return Dt(Pl(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(Oc).location}var DT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function IT(t){U.useContext(Fr).static||U.useLayoutEffect(t)}function Mc(){let{isDataRoute:t}=U.useContext(bi);return t?$C():kC()}function kC(){Dt(Pl(),"useNavigate() may be used only in the context of a <Router> component.");let t=U.useContext(Nl),{basename:e,navigator:n}=U.useContext(Fr),{matches:i}=U.useContext(bi),{pathname:a}=pa(),l=JSON.stringify(gy(i)),c=U.useRef(!1);return IT(()=>{c.current=!0}),U.useCallback((p,g={})=>{if(Br(c.current,DT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=yy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ss([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}U.createContext(null);function Nc(t,{relative:e}={}){let{matches:n}=U.useContext(bi),{pathname:i}=pa(),a=JSON.stringify(gy(n));return U.useMemo(()=>yy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function OC(t,e){return kT(t,e)}function kT(t,e,n,i){var F;Dt(Pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=U.useContext(Fr),{matches:l}=U.useContext(bi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let z=v&&v.path||"";OT(p,!v||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let E=pa(),T;if(e){let z=typeof e=="string"?Ml(e):e;Dt(g==="/"||((F=z.pathname)==null?void 0:F.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${z.pathname}" was given in the \`location\` prop.`),T=z}else T=E;let D=T.pathname||"/",P=D;if(g!=="/"){let z=g.replace(/^\//,"").split("/");P="/"+D.replace(/^\//,"").split("/").slice(z.length).join("/")}let q=ST(t,{pathname:P});Br(v||q!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Br(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=jC(q&&q.map(z=>Object.assign({},z,{params:Object.assign({},d,z.params),pathname:ss([g,a.encodeLocation?a.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?g:ss([g,a.encodeLocation?a.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),l,n,i);return e&&N?U.createElement(Oc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},N):N}function MC(){let t=zC(),e=AC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:l},"ErrorBoundary")," or"," ",U.createElement("code",{style:l},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:a},n):null,c)}var NC=U.createElement(MC,null),PC=class extends U.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?U.createElement(bi.Provider,{value:this.props.routeContext},U.createElement(_y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function VC({routeContext:t,match:e,children:n}){let i=U.useContext(Nl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(bi.Provider,{value:t},n)}function jC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);Dt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:E}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let E,T=!1,D=null,P=null;n&&(E=l&&g.route.id?l[g.route.id]:void 0,D=g.route.errorElement||NC,c&&(d<0&&v===0?(OT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,P=null):d===v&&(T=!0,P=g.route.hydrateFallbackElement||null)));let q=e.concat(a.slice(0,v+1)),N=()=>{let F;return E?F=D:T?F=P:g.route.Component?F=U.createElement(g.route.Component,null):g.route.element?F=g.route.element:F=p,U.createElement(VC,{match:g,routeContext:{outlet:p,matches:q,isDataRoute:n!=null},children:F})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?U.createElement(PC,{location:n.location,revalidation:n.revalidation,component:D,error:E,children:N(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):N()},null)}function vy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LC(t){let e=U.useContext(Nl);return Dt(e,vy(t)),e}function UC(t){let e=U.useContext(vd);return Dt(e,vy(t)),e}function qC(t){let e=U.useContext(bi);return Dt(e,vy(t)),e}function Ey(t){let e=qC(t),n=e.matches[e.matches.length-1];return Dt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function BC(){return Ey("useRouteId")}function zC(){var i;let t=U.useContext(_y),e=UC("useRouteError"),n=Ey("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function $C(){let{router:t}=LC("useNavigate"),e=Ey("useNavigate"),n=U.useRef(!1);return IT(()=>{n.current=!0}),U.useCallback(async(a,l={})=>{Br(n.current,DT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var ew={};function OT(t,e,n){!e&&!ew[t]&&(ew[t]=!0,Br(!1,n))}U.memo(FC);function FC({routes:t,future:e,state:n}){return kT(t,void 0,n,e)}function HC({to:t,replace:e,state:n,relative:i}){Dt(Pl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=U.useContext(Fr);Br(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=U.useContext(bi),{pathname:c}=pa(),d=Mc(),p=yy(t,gy(l),c,i==="path"),g=JSON.stringify(p);return U.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function kf(t){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Dt(!Pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Ml(n));let{pathname:p="/",search:g="",hash:v="",state:E=null,key:T="default"}=n,D=U.useMemo(()=>{let P=ls(p,c);return P==null?null:{location:{pathname:P,search:g,hash:v,state:E,key:T},navigationType:i}},[c,p,g,v,E,T,i]);return Br(D!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:U.createElement(Fr.Provider,{value:d},U.createElement(Oc.Provider,{children:e,value:D}))}function GC({children:t,location:e}){return OC(Ig(t),e)}function Ig(t,e=[]){let n=[];return U.Children.forEach(t,(i,a)=>{if(!U.isValidElement(i))return;let l=[...e,a];if(i.type===U.Fragment){n.push.apply(n,Ig(i.props.children,l));return}Dt(i.type===kf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ig(i.props.children,l)),n.push(c)}),n}var Of="get",Mf="application/x-www-form-urlencoded";function Ed(t){return t!=null&&typeof t.tagName=="string"}function WC(t){return Ed(t)&&t.tagName.toLowerCase()==="button"}function QC(t){return Ed(t)&&t.tagName.toLowerCase()==="form"}function KC(t){return Ed(t)&&t.tagName.toLowerCase()==="input"}function XC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZC(t,e){return t.button===0&&(!e||e==="_self")&&!XC(t)}var _f=null;function JC(){if(_f===null)try{new FormData(document.createElement("form"),0),_f=!1}catch{_f=!0}return _f}var eD=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sg(t){return t!=null&&!eD.has(t)?(Br(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mf}"`),null):t}function tD(t,e){let n,i,a,l,c;if(QC(t)){let d=t.getAttribute("action");i=d?ls(d,e):null,n=t.getAttribute("method")||Of,a=sg(t.getAttribute("enctype"))||Mf,l=new FormData(t)}else if(WC(t)||KC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?ls(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Of,a=sg(t.getAttribute("formenctype"))||sg(d.getAttribute("enctype"))||Mf,l=new FormData(d,t),!JC()){let{name:g,type:v,value:E}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,E)}}else{if(Ed(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Of,i=null,a=Mf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nD(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&ls(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function rD(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iD(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function sD(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await rD(l,n);return c.links?c.links():[]}return[]}));return uD(i.flat(1).filter(iD).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function tw(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var E;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function aD(t,e,{includeHydrateFallback:n}={}){return oD(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function oD(t){return[...new Set(t)]}function lD(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function uD(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(lD(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function MT(){let t=U.useContext(Nl);return wy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function cD(){let t=U.useContext(vd);return wy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var by=U.createContext(void 0);by.displayName="FrameworkContext";function NT(){let t=U.useContext(by);return wy(t,"You must render this element inside a <HydratedRouter> element"),t}function hD(t,e){let n=U.useContext(by),[i,a]=U.useState(!1),[l,c]=U.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=e,T=U.useRef(null);U.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let q=F=>{F.forEach(z=>{c(z.isIntersecting)})},N=new IntersectionObserver(q,{threshold:.5});return T.current&&N.observe(T.current),()=>{N.disconnect()}}},[t]),U.useEffect(()=>{if(i){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[i]);let D=()=>{a(!0)},P=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Qu(d,D),onBlur:Qu(p,P),onMouseEnter:Qu(g,D),onMouseLeave:Qu(v,P),onTouchStart:Qu(E,D)}]:[!1,T,{}]}function Qu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function fD({page:t,...e}){let{router:n}=MT(),i=U.useMemo(()=>ST(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?U.createElement(pD,{page:t,matches:i,...e}):null}function dD(t){let{manifest:e,routeModules:n}=NT(),[i,a]=U.useState([]);return U.useEffect(()=>{let l=!1;return sD(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function pD({page:t,matches:e,...n}){let i=pa(),{manifest:a,routeModules:l}=NT(),{basename:c}=MT(),{loaderData:d,matches:p}=cD(),g=U.useMemo(()=>tw(t,e,p,a,i,"data"),[t,e,p,a,i]),v=U.useMemo(()=>tw(t,e,p,a,i,"assets"),[t,e,p,a,i]),E=U.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let P=new Set,q=!1;if(e.forEach(F=>{var M;let z=a.routes[F.route.id];!z||!z.hasLoader||(!g.some(J=>J.route.id===F.route.id)&&F.route.id in d&&((M=l[F.route.id])!=null&&M.shouldRevalidate)||z.hasClientLoader?q=!0:P.add(F.route.id))}),P.size===0)return[];let N=nD(t,c,"data");return q&&P.size>0&&N.searchParams.set("_routes",e.filter(F=>P.has(F.route.id)).map(F=>F.route.id).join(",")),[N.pathname+N.search]},[c,d,i,a,g,e,t,l]),T=U.useMemo(()=>aD(v,a),[v,a]),D=dD(v);return U.createElement(U.Fragment,null,E.map(P=>U.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),T.map(P=>U.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),D.map(({key:P,link:q})=>U.createElement("link",{key:P,...q})))}function mD(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var PT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PT&&(window.__reactRouterVersion="7.7.0")}catch{}function gD({basename:t,children:e,window:n}){let i=U.useRef();i.current==null&&(i.current=rC({window:n,v5Compat:!0}));let a=i.current,[l,c]=U.useState({action:a.action,location:a.location}),d=U.useCallback(p=>{U.startTransition(()=>c(p))},[c]);return U.useLayoutEffect(()=>a.listen(d),[a,d]),U.createElement(YC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var VT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jT=U.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:E,...T},D){let{basename:P}=U.useContext(Fr),q=typeof g=="string"&&VT.test(g),N,F=!1;if(typeof g=="string"&&q&&(N=g,PT))try{let A=new URL(window.location.href),V=g.startsWith("//")?new URL(A.protocol+g):new URL(g),I=ls(V.pathname,P);V.origin===A.origin&&I!=null?g=I+V.search+V.hash:F=!0}catch{Br(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=IC(g,{relative:a}),[M,J,$]=hD(i,T),re=ED(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:E});function C(A){e&&e(A),A.defaultPrevented||re(A)}let S=U.createElement("a",{...T,...$,href:N||z,onClick:F||l?e:C,ref:mD(D,J),target:p,"data-discover":!q&&n==="render"?"true":void 0});return M&&!q?U.createElement(U.Fragment,null,S,U.createElement(fD,{page:z})):S});jT.displayName="Link";var yD=U.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let E=Nc(c,{relative:g.relative}),T=pa(),D=U.useContext(vd),{navigator:P,basename:q}=U.useContext(Fr),N=D!=null&&xD(E)&&d===!0,F=P.encodeLocation?P.encodeLocation(E).pathname:E.pathname,z=T.pathname,M=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(z=z.toLowerCase(),M=M?M.toLowerCase():null,F=F.toLowerCase()),M&&q&&(M=ls(M,q)||M);const J=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let $=z===F||!a&&z.startsWith(F)&&z.charAt(J)==="/",re=M!=null&&(M===F||!a&&M.startsWith(F)&&M.charAt(F.length)==="/"),C={isActive:$,isPending:re,isTransitioning:N},S=$?e:void 0,A;typeof i=="function"?A=i(C):A=[i,$?"active":null,re?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let V=typeof l=="function"?l(C):l;return U.createElement(jT,{...g,"aria-current":S,className:A,ref:v,style:V,to:c,viewTransition:d},typeof p=="function"?p(C):p)});yD.displayName="NavLink";var _D=U.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Of,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:E,...T},D)=>{let P=TD(),q=SD(d,{relative:g}),N=c.toLowerCase()==="get"?"get":"post",F=typeof d=="string"&&VT.test(d),z=M=>{if(p&&p(M),M.defaultPrevented)return;M.preventDefault();let J=M.nativeEvent.submitter,$=(J==null?void 0:J.getAttribute("formmethod"))||c;P(J||M.currentTarget,{fetcherKey:e,method:$,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:E})};return U.createElement("form",{ref:D,method:N,action:q,onSubmit:i?p:z,...T,"data-discover":!F&&t==="render"?"true":void 0})});_D.displayName="Form";function vD(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LT(t){let e=U.useContext(Nl);return Dt(e,vD(t)),e}function ED(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Mc(),p=pa(),g=Nc(t,{relative:l});return U.useCallback(v=>{if(ZC(v,e)){v.preventDefault();let E=n!==void 0?n:gc(p)===gc(g);d(t,{replace:E,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var wD=0,bD=()=>`__${String(++wD)}__`;function TD(){let{router:t}=LT("useSubmit"),{basename:e}=U.useContext(Fr),n=BC();return U.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=tD(i,e);if(a.navigate===!1){let v=a.fetcherKey||bD();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function SD(t,{relative:e}={}){let{basename:n}=U.useContext(Fr),i=U.useContext(bi);Dt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Nc(t||".",{relative:e})},c=pa();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:ss([n,l.pathname])),gc(l)}function xD(t,e={}){let n=U.useContext(CT);Dt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=LT("useViewTransitionState"),a=Nc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=ls(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=ls(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Qf(a.pathname,c)!=null||Qf(a.pathname,l)!=null}var _n=function(){return _n=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_n.apply(this,arguments)};function yc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var St="-ms-",lc="-moz-",ot="-webkit-",UT="comm",wd="rule",Ty="decl",AD="@import",qT="@keyframes",RD="@layer",BT=Math.abs,Sy=String.fromCharCode,kg=Object.assign;function CD(t,e){return yn(t,0)^45?(((e<<2^yn(t,0))<<2^yn(t,1))<<2^yn(t,2))<<2^yn(t,3):0}function zT(t){return t.trim()}function es(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function Nf(t,e,n){return t.indexOf(e,n)}function yn(t,e){return t.charCodeAt(e)|0}function El(t,e,n){return t.slice(e,n)}function hi(t){return t.length}function $T(t){return t.length}function ec(t,e){return e.push(t),t}function DD(t,e){return t.map(e).join("")}function nw(t,e){return t.filter(function(n){return!es(n,e)})}var bd=1,wl=1,FT=0,Dr=0,Kt=0,Vl="";function Td(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:bd,column:wl,length:c,return:"",siblings:d}}function Ws(t,e){return kg(Td("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ol(t){for(;t.root;)t=Ws(t.root,{children:[t]});ec(t,t.siblings)}function ID(){return Kt}function kD(){return Kt=Dr>0?yn(Vl,--Dr):0,wl--,Kt===10&&(wl=1,bd--),Kt}function Ur(){return Kt=Dr<FT?yn(Vl,Dr++):0,wl++,Kt===10&&(wl=1,bd++),Kt}function to(){return yn(Vl,Dr)}function Pf(){return Dr}function Sd(t,e){return El(Vl,t,e)}function Og(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OD(t){return bd=wl=1,FT=hi(Vl=t),Dr=0,[]}function MD(t){return Vl="",t}function ag(t){return zT(Sd(Dr-1,Mg(t===91?t+2:t===40?t+1:t)))}function ND(t){for(;(Kt=to())&&Kt<33;)Ur();return Og(t)>2||Og(Kt)>3?"":" "}function PD(t,e){for(;--e&&Ur()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return Sd(t,Pf()+(e<6&&to()==32&&Ur()==32))}function Mg(t){for(;Ur();)switch(Kt){case t:return Dr;case 34:case 39:t!==34&&t!==39&&Mg(Kt);break;case 40:t===41&&Mg(t);break;case 92:Ur();break}return Dr}function VD(t,e){for(;Ur()&&t+Kt!==57;)if(t+Kt===84&&to()===47)break;return"/*"+Sd(e,Dr-1)+"*"+Sy(t===47?t:Ur())}function jD(t){for(;!Og(to());)Ur();return Sd(t,Dr)}function LD(t){return MD(Vf("",null,null,null,[""],t=OD(t),0,[0],t))}function Vf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,E=c,T=0,D=0,P=0,q=1,N=1,F=1,z=0,M="",J=a,$=l,re=i,C=M;N;)switch(P=z,z=Ur()){case 40:if(P!=108&&yn(C,E-1)==58){Nf(C+=Be(ag(z),"&","&\f"),"&\f",BT(g?d[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:C+=ag(z);break;case 9:case 10:case 13:case 32:C+=ND(P);break;case 92:C+=PD(Pf()-1,7);continue;case 47:switch(to()){case 42:case 47:ec(UD(VD(Ur(),Pf()),e,n,p),p);break;default:C+="/"}break;case 123*q:d[g++]=hi(C)*F;case 125*q:case 59:case 0:switch(z){case 0:case 125:N=0;case 59+v:F==-1&&(C=Be(C,/\f/g,"")),D>0&&hi(C)-E&&ec(D>32?iw(C+";",i,n,E-1,p):iw(Be(C," ","")+";",i,n,E-2,p),p);break;case 59:C+=";";default:if(ec(re=rw(C,e,n,g,v,a,d,M,J=[],$=[],E,l),l),z===123)if(v===0)Vf(C,e,re,re,J,l,E,d,$);else switch(T===99&&yn(C,3)===110?100:T){case 100:case 108:case 109:case 115:Vf(t,re,re,i&&ec(rw(t,re,re,0,0,a,d,M,a,J=[],E,$),$),a,$,E,d,i?J:$);break;default:Vf(C,re,re,re,[""],$,0,d,$)}}g=v=D=0,q=F=1,M=C="",E=c;break;case 58:E=1+hi(C),D=P;default:if(q<1){if(z==123)--q;else if(z==125&&q++==0&&kD()==125)continue}switch(C+=Sy(z),z*q){case 38:F=v>0?1:(C+="\f",-1);break;case 44:d[g++]=(hi(C)-1)*F,F=1;break;case 64:to()===45&&(C+=ag(Ur())),T=to(),v=E=hi(M=C+=jD(Pf())),z++;break;case 45:P===45&&hi(C)==2&&(q=0)}}return l}function rw(t,e,n,i,a,l,c,d,p,g,v,E){for(var T=a-1,D=a===0?l:[""],P=$T(D),q=0,N=0,F=0;q<i;++q)for(var z=0,M=El(t,T+1,T=BT(N=c[q])),J=t;z<P;++z)(J=zT(N>0?D[z]+" "+M:Be(M,/&\f/g,D[z])))&&(p[F++]=J);return Td(t,e,n,a===0?wd:d,p,g,v,E)}function UD(t,e,n,i){return Td(t,e,n,UT,Sy(ID()),El(t,2,-2),0,i)}function iw(t,e,n,i,a){return Td(t,e,n,Ty,El(t,0,i),El(t,i+1,-1),i,a)}function HT(t,e,n){switch(CD(t,e)){case 5103:return ot+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ot+t+t;case 4789:return lc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+t+lc+t+St+t+t;case 5936:switch(yn(t,e+11)){case 114:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ot+t+St+t+t;case 6165:return ot+t+St+"flex-"+t+t;case 5187:return ot+t+Be(t,/(\w+).+(:[^]+)/,ot+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return ot+t+St+"flex-item-"+Be(t,/flex-|-self/g,"")+(es(t,/flex-|baseline/)?"":St+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return ot+t+St+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return ot+t+St+Be(t,"shrink","negative")+t;case 5292:return ot+t+St+Be(t,"basis","preferred-size")+t;case 6060:return ot+"box-"+Be(t,"-grow","")+ot+t+St+Be(t,"grow","positive")+t;case 4554:return ot+Be(t,/([^-])(transform)/g,"$1"+ot+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ot+t+t;case 4200:if(!es(t,/flex-|baseline/))return St+"grid-column-align"+El(t,e)+t;break;case 2592:case 3360:return St+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,es(i.props,/grid-\w+-end/)})?~Nf(t+(n=n[e].value),"span",0)?t:St+Be(t,"-start","")+t+St+"grid-row-span:"+(~Nf(n,"span",0)?es(n,/\d+/):+es(n,/\d+/)-+es(t,/\d+/))+";":St+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return es(i.props,/grid-\w+-start/)})?t:St+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,ot+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hi(t)-1-e>6)switch(yn(t,e+1)){case 109:if(yn(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+lc+(yn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nf(t,"stretch",0)?HT(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return St+a+":"+l+g+(c?St+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(yn(t,e+6)===121)return Be(t,":",":"+ot)+t;break;case 6444:switch(yn(t,yn(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(yn(t,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+St+"$2box$3")+t;case 100:return Be(t,":",":"+St)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function Kf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function qD(t,e,n,i){switch(t.type){case RD:if(t.children.length)break;case AD:case Ty:return t.return=t.return||t.value;case UT:return"";case qT:return t.return=t.value+"{"+Kf(t.children,i)+"}";case wd:if(!hi(t.value=t.props.join(",")))return""}return hi(n=Kf(t.children,i))?t.return=t.value+"{"+n+"}":""}function BD(t){var e=$T(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function zD(t){return function(e){e.root||(e=e.return)&&t(e)}}function $D(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Ty:t.return=HT(t.value,t.length,n);return;case qT:return Kf([Ws(t,{value:Be(t.value,"@","@"+ot)})],i);case wd:if(t.length)return DD(n=t.props,function(a){switch(es(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ol(Ws(t,{props:[Be(a,/:(read-\w+)/,":"+lc+"$1")]})),ol(Ws(t,{props:[a]})),kg(t,{props:nw(n,i)});break;case"::placeholder":ol(Ws(t,{props:[Be(a,/:(plac\w+)/,":"+ot+"input-$1")]})),ol(Ws(t,{props:[Be(a,/:(plac\w+)/,":"+lc+"$1")]})),ol(Ws(t,{props:[Be(a,/:(plac\w+)/,St+"input-$1")]})),ol(Ws(t,{props:[a]})),kg(t,{props:nw(n,i)});break}return""})}}var FD={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ar={},bl=typeof process<"u"&&ar!==void 0&&(ar.REACT_APP_SC_ATTR||ar.SC_ATTR)||"data-styled",YT="active",GT="data-styled-version",xd="6.1.19",xy=`/*!sc*/
`,Xf=typeof window<"u"&&typeof document<"u",HD=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ar!==void 0&&ar.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ar.REACT_APP_SC_DISABLE_SPEEDY!==""?ar.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ar.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ar!==void 0&&ar.SC_DISABLE_SPEEDY!==void 0&&ar.SC_DISABLE_SPEEDY!==""&&ar.SC_DISABLE_SPEEDY!=="false"&&ar.SC_DISABLE_SPEEDY),YD={},Ad=Object.freeze([]),Tl=Object.freeze({});function WT(t,e,n){return n===void 0&&(n=Tl),t.theme!==n.theme&&t.theme||e||n.theme}var QT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WD=/(^-|-$)/g;function sw(t){return t.replace(GD,"-").replace(WD,"")}var QD=/(a)(d)/gi,vf=52,aw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ng(t){var e,n="";for(e=Math.abs(t);e>vf;e=e/vf|0)n=aw(e%vf)+n;return(aw(e%vf)+n).replace(QD,"$1-$2")}var og,KT=5381,dl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XT=function(t){return dl(KT,t)};function ZT(t){return Ng(XT(t)>>>0)}function KD(t){return t.displayName||t.name||"Component"}function lg(t){return typeof t=="string"&&!0}var JT=typeof Symbol=="function"&&Symbol.for,e1=JT?Symbol.for("react.memo"):60115,XD=JT?Symbol.for("react.forward_ref"):60112,ZD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},JD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eI=((og={})[XD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},og[e1]=t1,og);function ow(t){return("type"in(e=t)&&e.type.$$typeof)===e1?t1:"$$typeof"in t?eI[t.$$typeof]:ZD;var e}var tI=Object.defineProperty,nI=Object.getOwnPropertyNames,lw=Object.getOwnPropertySymbols,rI=Object.getOwnPropertyDescriptor,iI=Object.getPrototypeOf,uw=Object.prototype;function n1(t,e,n){if(typeof e!="string"){if(uw){var i=iI(e);i&&i!==uw&&n1(t,i,n)}var a=nI(e);lw&&(a=a.concat(lw(e)));for(var l=ow(t),c=ow(e),d=0;d<a.length;++d){var p=a[d];if(!(p in JD||n&&n[p]||c&&p in c||l&&p in l)){var g=rI(e,p);try{tI(t,p,g)}catch{}}}}return t}function io(t){return typeof t=="function"}function Ay(t){return typeof t=="object"&&"styledComponentId"in t}function Za(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Pg(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function _c(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Vg(t,e,n){if(n===void 0&&(n=!1),!n&&!_c(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Vg(t[i],e[i]);else if(_c(e))for(var i in e)t[i]=Vg(t[i],e[i]);return t}function Ry(t,e){Object.defineProperty(t,"toString",{value:e})}function so(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var sI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw so(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(xy);return n},t}(),jf=new Map,Zf=new Map,Lf=1,Ef=function(t){if(jf.has(t))return jf.get(t);for(;Zf.has(Lf);)Lf++;var e=Lf++;return jf.set(t,e),Zf.set(e,t),e},aI=function(t,e){Lf=e+1,jf.set(t,e),Zf.set(e,t)},oI="style[".concat(bl,"][").concat(GT,'="').concat(xd,'"]'),lI=new RegExp("^".concat(bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uI=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},cI=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(xy),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(lI);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(aI(v,g),uI(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},cw=function(t){for(var e=document.querySelectorAll(oI),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(bl)!==YT&&(cI(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function hI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r1=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(bl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(bl,YT),i.setAttribute(GT,xd);var c=hI();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},fI=function(){function t(e){this.element=r1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw so(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),dI=function(){function t(e){this.element=r1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),pI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),hw=Xf,mI={isServer:!Xf,useCSSOMInjection:!HD},Jf=function(){function t(e,n,i){e===void 0&&(e=Tl),n===void 0&&(n={});var a=this;this.options=_n(_n({},mI),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Xf&&hw&&(hw=!1,cw(this)),Ry(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(E){var T=function(F){return Zf.get(F)}(E);if(T===void 0)return"continue";var D=l.names.get(T),P=c.getGroup(E);if(D===void 0||!D.size||P.length===0)return"continue";var q="".concat(bl,".g").concat(E,'[id="').concat(T,'"]'),N="";D!==void 0&&D.forEach(function(F){F.length>0&&(N+="".concat(F,","))}),p+="".concat(P).concat(q,'{content:"').concat(N,'"}').concat(xy)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return Ef(e)},t.prototype.rehydrate=function(){!this.server&&Xf&&cw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(_n(_n({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new pI(a):i?new fI(a):new dI(a)}(this.options),new sI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ef(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Ef(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ef(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),gI=/&/g,yI=/^\s*\/\/.*$/gm;function i1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=i1(n.children,e)),n})}function _I(t){var e,n,i,a=Tl,l=a.options,c=l===void 0?Tl:l,d=a.plugins,p=d===void 0?Ad:d,g=function(T,D,P){return P.startsWith(n)&&P.endsWith(n)&&P.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===wd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(gI,n).replace(i,g))}),c.prefix&&v.push($D),v.push(qD);var E=function(T,D,P,q){D===void 0&&(D=""),P===void 0&&(P=""),q===void 0&&(q="&"),e=q,n=D,i=new RegExp("\\".concat(n,"\\b"),"g");var N=T.replace(yI,""),F=LD(P||D?"".concat(P," ").concat(D," { ").concat(N," }"):N);c.namespace&&(F=i1(F,c.namespace));var z=[];return Kf(F,BD(v.concat(zD(function(M){return z.push(M)})))),z};return E.hash=p.length?p.reduce(function(T,D){return D.name||so(15),dl(T,D.name)},KT).toString():"",E}var vI=new Jf,jg=_I(),s1=me.createContext({shouldForwardProp:void 0,styleSheet:vI,stylis:jg});s1.Consumer;me.createContext(void 0);function Lg(){return U.useContext(s1)}var EI=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=jg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ry(this,function(){throw so(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=jg),this.name+e.hash},t}(),wI=function(t){return t>="A"&&t<="Z"};function fw(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;wI(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var a1=function(t){return t==null||t===!1||t===""},o1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!a1(l)&&(Array.isArray(l)&&l.isCss||io(l)?i.push("".concat(fw(a),":"),l,";"):_c(l)?i.push.apply(i,yc(yc(["".concat(a," {")],o1(l),!1),["}"],!1)):i.push("".concat(fw(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in FD||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ea(t,e,n,i){if(a1(t))return[];if(Ay(t))return[".".concat(t.styledComponentId)];if(io(t)){if(!io(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return ea(a,e,n,i)}var l;return t instanceof EI?n?(t.inject(n,i),[t.getName(i)]):[t]:_c(t)?o1(t):Array.isArray(t)?Array.prototype.concat.apply(Ad,t.map(function(c){return ea(c,e,n,i)})):[t.toString()]}function l1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(io(n)&&!Ay(n))return!1}return!0}var bI=XT(xd),TI=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&l1(e),this.componentId=n,this.baseHash=dl(bI,n),this.baseStyle=i,Jf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Za(a,this.staticRulesId);else{var l=Pg(ea(this.rules,e,n,i)),c=Ng(dl(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Za(a,c),this.staticRulesId=c}else{for(var p=dl(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var T=Pg(ea(E,e,n,i));p=dl(p,T+v),g+=T}}if(g){var D=Ng(p>>>0);n.hasNameForId(this.componentId,D)||n.insertRules(this.componentId,D,i(g,".".concat(D),void 0,this.componentId)),a=Za(a,D)}}return a},t}(),vc=me.createContext(void 0);vc.Consumer;function SI(t){var e=me.useContext(vc),n=U.useMemo(function(){return function(i,a){if(!i)throw so(14);if(io(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw so(8);return a?_n(_n({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?me.createElement(vc.Provider,{value:n},t.children):null}var ug={};function xI(t,e,n){var i=Ay(t),a=t,l=!lg(t),c=e.attrs,d=c===void 0?Ad:c,p=e.componentId,g=p===void 0?function(J,$){var re=typeof J!="string"?"sc":sw(J);ug[re]=(ug[re]||0)+1;var C="".concat(re,"-").concat(ZT(xd+re+ug[re]));return $?"".concat($,"-").concat(C):C}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(J){return lg(J)?"styled.".concat(J):"Styled(".concat(KD(J),")")}(t):v,T=e.displayName&&e.componentId?"".concat(sw(e.displayName),"-").concat(e.componentId):e.componentId||g,D=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(i&&a.shouldForwardProp){var q=a.shouldForwardProp;if(e.shouldForwardProp){var N=e.shouldForwardProp;P=function(J,$){return q(J,$)&&N(J,$)}}else P=q}var F=new TI(n,T,i?a.componentStyle:void 0);function z(J,$){return function(re,C,S){var A=re.attrs,V=re.componentStyle,I=re.defaultProps,O=re.foldedComponentIds,k=re.styledComponentId,Me=re.target,oe=me.useContext(vc),Y=Lg(),ie=re.shouldForwardProp||Y.shouldForwardProp,fe=WT(C,oe,I)||Tl,ye=function(De,be,yt){for(var Fe,Tt=_n(_n({},be),{className:void 0,theme:yt}),Cn=0;Cn<De.length;Cn+=1){var de=io(Fe=De[Cn])?Fe(Tt):Fe;for(var Te in de)Tt[Te]=Te==="className"?Za(Tt[Te],de[Te]):Te==="style"?_n(_n({},Tt[Te]),de[Te]):de[Te]}return be.className&&(Tt.className=Za(Tt.className,be.className)),Tt}(A,C,fe),L=ye.as||Me,te={};for(var he in ye)ye[he]===void 0||he[0]==="$"||he==="as"||he==="theme"&&ye.theme===fe||(he==="forwardedAs"?te.as=ye.forwardedAs:ie&&!ie(he,L)||(te[he]=ye[he]));var ce=function(De,be){var yt=Lg(),Fe=De.generateAndInjectStyles(be,yt.styleSheet,yt.stylis);return Fe}(V,ye),ve=Za(O,k);return ce&&(ve+=" "+ce),ye.className&&(ve+=" "+ye.className),te[lg(L)&&!QT.has(L)?"class":"className"]=ve,S&&(te.ref=S),U.createElement(L,te)}(M,J,$)}z.displayName=E;var M=me.forwardRef(z);return M.attrs=D,M.componentStyle=F,M.displayName=E,M.shouldForwardProp=P,M.foldedComponentIds=i?Za(a.foldedComponentIds,a.styledComponentId):"",M.styledComponentId=T,M.target=i?a.target:t,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=i?function($){for(var re=[],C=1;C<arguments.length;C++)re[C-1]=arguments[C];for(var S=0,A=re;S<A.length;S++)Vg($,A[S],!0);return $}({},a.defaultProps,J):J}}),Ry(M,function(){return".".concat(M.styledComponentId)}),l&&n1(M,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function dw(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var pw=function(t){return Object.assign(t,{isCss:!0})};function u1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(io(t)||_c(t))return pw(ea(dw(Ad,yc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ea(i):pw(ea(dw(i,e)))}function Ug(t,e,n){if(n===void 0&&(n=Tl),!e)throw so(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,u1.apply(void 0,yc([a],l,!1)))};return i.attrs=function(a){return Ug(t,e,_n(_n({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ug(t,e,_n(_n({},n),a))},i}var c1=function(t){return Ug(xI,t)},H=c1;QT.forEach(function(t){H[t]=c1(t)});var AI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=l1(e),Jf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Pg(ea(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Jf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function h1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=u1.apply(void 0,yc([t],e,!1)),a="sc-global-".concat(ZT(JSON.stringify(i))),l=new AI(i,a),c=function(p){var g=Lg(),v=me.useContext(vc),E=me.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(E,p,g.styleSheet,v,g.stylis),me.useLayoutEffect(function(){if(!g.styleSheet.server)return d(E,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(E,g.styleSheet)}},[E,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,E,T){if(l.isStatic)l.renderStyles(p,YD,v,T);else{var D=_n(_n({},g),{theme:WT(g,E,c.defaultProps)});l.renderStyles(p,D,v,T)}}return me.memo(c)}/**
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
 */const RI=()=>{};var mw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},CI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},d1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,D=g&63;p||(D=64,c||(T=64)),i.push(n[v],n[E],n[T],n[D])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const E=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||E==null)throw new DI;const T=l<<2|d>>4;if(i.push(T),g!==64){const D=d<<4&240|g>>2;if(i.push(D),E!==64){const P=g<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(t){const e=f1(t);return d1.encodeByteArray(e,!0)},ed=function(t){return II(t).replace(/\./g,"")},p1=function(t){try{return d1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OI=()=>kI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof mw>"u")return;const t=mw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p1(t[1]);return e&&JSON.parse(e)},Rd=()=>{try{return RI()||OI()||MI()||NI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},m1=t=>{var e,n;return(n=(e=Rd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},PI=t=>{const e=m1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},g1=()=>{var t;return(t=Rd())==null?void 0:t.config},y1=t=>{var e;return(e=Rd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function jl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function jI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ed(JSON.stringify(n)),ed(JSON.stringify(c)),""].join(".")}const uc={};function LI(){const t={prod:[],emulator:[]};for(const e of Object.keys(uc))uc[e]?t.emulator.push(e):t.prod.push(e);return t}function UI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gw=!1;function v1(t,e){if(typeof window>"u"||typeof document>"u"||!jl(window.location.host)||uc[t]===e||uc[t]||gw)return;uc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=LI().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,D){T.setAttribute("width","24"),T.setAttribute("id",D),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{gw=!0,c()},T}function v(T,D){T.setAttribute("id",D),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=UI(i),D=n("text"),P=document.getElementById(D)||document.createElement("span"),q=n("learnmore"),N=document.getElementById(q)||document.createElement("a"),F=n("preprendIcon"),z=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const M=T.element;d(M),v(N,q);const J=g();p(z,F),M.append(z,P,N,J),document.body.appendChild(M)}l?(P.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pn())}function BI(){var e;const t=(e=Rd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){const t=Pn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YI(){return!BI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GI(){try{return typeof indexedDB=="object"}catch{return!1}}function WI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="FirebaseError";class ds extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=QI,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?KI(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new ds(a,d,i)}}function KI(t,e){return t.replace(XI,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const XI=/\{\$([^}]+)}/g;function ZI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(yw(l)&&yw(c)){if(!ao(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tc(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function nc(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JI(t,e){const n=new ek(t,e);return n.subscribe.bind(n)}class ek{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");tk(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=cg),a.error===void 0&&(a.error=cg),a.complete===void 0&&(a.complete=cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cg(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class oo{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ka="[DEFAULT]";/**
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
 */class nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new VI;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ik(e))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Ka){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ka){return this.instances.has(e)}getOptions(e=Ka){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ka){return this.component?this.component.multipleInstances?e:Ka:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rk(t){return t===Ka?void 0:t}function ik(t){return t.instantiationMode==="EAGER"}/**
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
 */class sk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ge||(Ge={}));const ak={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},ok=Ge.INFO,lk={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},uk=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=lk[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cy{constructor(e){this.name=e,this._logLevel=ok,this._logHandler=uk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ak[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...e),this._logHandler(this,Ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...e),this._logHandler(this,Ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...e),this._logHandler(this,Ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...e),this._logHandler(this,Ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...e),this._logHandler(this,Ge.ERROR,...e)}}const ck=(t,e)=>e.some(n=>t instanceof n);let _w,vw;function hk(){return _w||(_w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fk(){return vw||(vw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E1=new WeakMap,qg=new WeakMap,w1=new WeakMap,hg=new WeakMap,Dy=new WeakMap;function dk(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(ta(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&E1.set(n,t)}).catch(()=>{}),Dy.set(e,t),e}function pk(t){if(qg.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});qg.set(t,e)}let Bg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||w1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ta(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mk(t){Bg=t(Bg)}function gk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fg(this),e,...n);return w1.set(i,e.sort?e.sort():[e]),ta(i)}:fk().includes(t)?function(...e){return t.apply(fg(this),e),ta(E1.get(this))}:function(...e){return ta(t.apply(fg(this),e))}}function yk(t){return typeof t=="function"?gk(t):(t instanceof IDBTransaction&&pk(t),ck(t,hk())?new Proxy(t,Bg):t)}function ta(t){if(t instanceof IDBRequest)return dk(t);if(hg.has(t))return hg.get(t);const e=yk(t);return e!==t&&(hg.set(t,e),Dy.set(e,t)),e}const fg=t=>Dy.get(t);function _k(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=ta(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ta(c.result),p.oldVersion,p.newVersion,ta(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const vk=["get","getKey","getAll","getAllKeys","count"],Ek=["put","add","delete","clear"],dg=new Map;function Ew(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dg.get(e))return dg.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=Ek.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||vk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return dg.set(e,l),l}mk(t=>({...t,get:(e,n,i)=>Ew(e,n)||t.get(e,n,i),has:(e,n)=>!!Ew(e,n)||t.has(e,n)}));/**
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
 */class wk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zg="@firebase/app",ww="0.14.0";/**
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
 */const us=new Cy("@firebase/app"),Tk="@firebase/app-compat",Sk="@firebase/analytics-compat",xk="@firebase/analytics",Ak="@firebase/app-check-compat",Rk="@firebase/app-check",Ck="@firebase/auth",Dk="@firebase/auth-compat",Ik="@firebase/database",kk="@firebase/data-connect",Ok="@firebase/database-compat",Mk="@firebase/functions",Nk="@firebase/functions-compat",Pk="@firebase/installations",Vk="@firebase/installations-compat",jk="@firebase/messaging",Lk="@firebase/messaging-compat",Uk="@firebase/performance",qk="@firebase/performance-compat",Bk="@firebase/remote-config",zk="@firebase/remote-config-compat",$k="@firebase/storage",Fk="@firebase/storage-compat",Hk="@firebase/firestore",Yk="@firebase/ai",Gk="@firebase/firestore-compat",Wk="firebase",Qk="12.0.0";/**
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
 */const $g="[DEFAULT]",Kk={[zg]:"fire-core",[Tk]:"fire-core-compat",[xk]:"fire-analytics",[Sk]:"fire-analytics-compat",[Rk]:"fire-app-check",[Ak]:"fire-app-check-compat",[Ck]:"fire-auth",[Dk]:"fire-auth-compat",[Ik]:"fire-rtdb",[kk]:"fire-data-connect",[Ok]:"fire-rtdb-compat",[Mk]:"fire-fn",[Nk]:"fire-fn-compat",[Pk]:"fire-iid",[Vk]:"fire-iid-compat",[jk]:"fire-fcm",[Lk]:"fire-fcm-compat",[Uk]:"fire-perf",[qk]:"fire-perf-compat",[Bk]:"fire-rc",[zk]:"fire-rc-compat",[$k]:"fire-gcs",[Fk]:"fire-gcs-compat",[Hk]:"fire-fst",[Gk]:"fire-fst-compat",[Yk]:"fire-vertex","fire-js":"fire-js",[Wk]:"fire-js-all"};/**
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
 */const td=new Map,Xk=new Map,Fg=new Map;function bw(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sl(t){const e=t.name;if(Fg.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Fg.set(e,t);for(const n of td.values())bw(n,t);for(const n of Xk.values())bw(n,t);return!0}function Iy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Zk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},na=new Pc("app","Firebase",Zk);/**
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
 */class Jk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new oo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw na.create("app-deleted",{appName:this._name})}}/**
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
 */const Ll=Qk;function b1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:$g,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw na.create("bad-app-name",{appName:String(a)});if(n||(n=g1()),!n)throw na.create("no-options");const l=td.get(a);if(l){if(ao(n,l.options)&&ao(i,l.config))return l;throw na.create("duplicate-app",{appName:a})}const c=new sk(a);for(const p of Fg.values())c.addComponent(p);const d=new Jk(n,i,c);return td.set(a,d),d}function T1(t=$g){const e=td.get(t);if(!e&&t===$g&&g1())return b1();if(!e)throw na.create("no-app",{appName:t});return e}function ra(t,e,n){let i=Kk[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(c.join(" "));return}Sl(new oo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const eO="firebase-heartbeat-database",tO=1,Ec="firebase-heartbeat-store";let pg=null;function S1(){return pg||(pg=_k(eO,tO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ec)}catch(n){console.warn(n)}}}}).catch(t=>{throw na.create("idb-open",{originalErrorMessage:t.message})})),pg}async function nO(t){try{const n=(await S1()).transaction(Ec),i=await n.objectStore(Ec).get(x1(t));return await n.done,i}catch(e){if(e instanceof ds)us.warn(e.message);else{const n=na.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Tw(t,e){try{const i=(await S1()).transaction(Ec,"readwrite");await i.objectStore(Ec).put(e,x1(t)),await i.done}catch(n){if(n instanceof ds)us.warn(n.message);else{const i=na.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(i.message)}}}function x1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rO=1024,iO=30;class sO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Sw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>iO){const c=lO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){us.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sw(),{heartbeatsToSend:i,unsentEntries:a}=aO(this._heartbeatsCache.heartbeats),l=ed(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return us.warn(n),""}}}function Sw(){return new Date().toISOString().substring(0,10)}function aO(t,e=rO){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),xw(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),xw(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class oO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GI()?WI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xw(t){return ed(JSON.stringify({version:2,heartbeats:t})).length}function lO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function uO(t){Sl(new oo("platform-logger",e=>new wk(e),"PRIVATE")),Sl(new oo("heartbeat",e=>new sO(e),"PRIVATE")),ra(zg,ww,t),ra(zg,ww,"esm2020"),ra("fire-js","")}uO("");function A1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cO=A1,R1=new Pc("auth","Firebase",A1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Cy("@firebase/auth");function hO(t,...e){nd.logLevel<=Ge.WARN&&nd.warn(`Auth (${Ll}): ${t}`,...e)}function Uf(t,...e){nd.logLevel<=Ge.ERROR&&nd.error(`Auth (${Ll}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,...e){throw ky(t,...e)}function mi(t,...e){return ky(t,...e)}function C1(t,e,n){const i={...cO(),[e]:n};return new Pc("auth","Firebase",i).create(e,{appName:t.name})}function as(t){return C1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ky(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return R1.create(t,...e)}function ke(t,e,...n){if(!t)throw ky(e,...n)}function ts(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uf(e),new Error(e)}function cs(t,e){t||ts(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fO(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fO()||$I()||"connection"in navigator)?navigator.onLine:!0}function pO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.shortDelay=e,this.longDelay=n,cs(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||FI()}get(){return dO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e){cs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yO=new jc(3e4,6e4);function ma(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ps(t,e,n,i,a={}){return I1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Vc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return zI()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&jl(t.emulatorConfig.host)&&(g.credentials="include"),D1.fetch()(await k1(t,t.config.apiHost,n,d),g)})}async function I1(t,e,n){t._canInitEmulator=!1;const i={...mO,...e};try{const a=new vO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw wf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw wf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw wf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw C1(t,v,g);zr(t,v)}}catch(a){if(a instanceof ds)throw a;zr(t,"network-request-failed",{message:String(a)})}}async function Lc(t,e,n,i,a={}){const l=await ps(t,e,n,i,a);return"mfaPendingCredential"in l&&zr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function k1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Oy(t.config,a):`${t.config.apiScheme}://${a}`;return gO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function _O(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),yO.get())})}}function wf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=mi(t,e,i);return a.customData._tokenResponse=n,a}function Rw(t){return t!==void 0&&t.enterprise!==void 0}class EO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _O(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wO(t,e){return ps(t,"GET","/v2/recaptchaConfig",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function rd(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TO(t,e=!1){const n=Jt(t),i=await n.getIdToken(e),a=My(i);ke(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:cc(mg(a.auth_time)),issuedAtTime:cc(mg(a.iat)),expirationTime:cc(mg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function mg(t){return Number(t)*1e3}function My(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const a=p1(n);return a?JSON.parse(a):(Uf("Failed to decode base64 JWT payload"),null)}catch(a){return Uf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Cw(t){const e=My(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ds&&SO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function SO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cc(this.lastLoginAt),this.creationTime=cc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function id(t){var E;const e=t.auth,n=await t.getIdToken(),i=await xl(t,rd(e,{idToken:n}));ke(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(E=a.providerUserInfo)!=null&&E.length?O1(a.providerUserInfo):[],c=RO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Yg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function AO(t){const e=Jt(t);await id(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function O1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e){const n=await I1(t,{},async()=>{const i=Vc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await k1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&jl(t.emulatorConfig.host)&&(p.credentials="include"),D1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DO(t,e){return ps(t,"POST","/v2/accounts:revokeToken",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=Cw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await CO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new ml;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ke(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return ts("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new xO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await xl(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TO(this,e)}reload(){return AO(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await id(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xr(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await xl(this,bO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:E,emailVerified:T,isAnonymous:D,providerData:P,stsTokenManager:q}=n;ke(E&&q,e,"internal-error");const N=ml.fromJSON(this.name,q);ke(typeof E=="string",e,"internal-error"),Hs(i,e.name),Hs(a,e.name),ke(typeof T=="boolean",e,"internal-error"),ke(typeof D=="boolean",e,"internal-error"),Hs(l,e.name),Hs(c,e.name),Hs(d,e.name),Hs(p,e.name),Hs(g,e.name),Hs(v,e.name);const F=new jr({uid:E,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:N,createdAt:g,lastLoginAt:v});return P&&Array.isArray(P)&&(F.providerData=P.map(z=>({...z}))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,n,i=!1){const a=new ml;a.updateFromServerResponse(n);const l=new jr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await id(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];ke(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?O1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new ml;d.updateFromIdToken(i);const p=new jr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Yg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new Map;function ns(t){cs(t instanceof Function,"Expected a class definition");let e=Dw.get(t);return e?(cs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dw.set(t,e),e)}/**
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
 */class M1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}M1.type="NONE";const Iw=M1;/**
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
 */function qf(t,e,n){return`firebase:${t}:${e}:${n}`}class gl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=qf(this.userKey,a.apiKey,l),this.fullPersistenceKey=qf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rd(this.auth,{idToken:e}).catch(()=>{});return n?jr._fromGetAccountInfoResponse(this.auth,n,e):null}return jr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gl(ns(Iw),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ns(Iw);const c=qf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const T=await rd(e,{idToken:v}).catch(()=>{});if(!T)break;E=await jr._fromGetAccountInfoResponse(e,T,v)}else E=jr._fromJSON(e,v);g!==l&&(d=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new gl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new gl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U1(e))return"Blackberry";if(q1(e))return"Webos";if(P1(e))return"Safari";if((e.includes("chrome/")||V1(e))&&!e.includes("edge/"))return"Chrome";if(L1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function N1(t=Pn()){return/firefox\//i.test(t)}function P1(t=Pn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V1(t=Pn()){return/crios\//i.test(t)}function j1(t=Pn()){return/iemobile/i.test(t)}function L1(t=Pn()){return/android/i.test(t)}function U1(t=Pn()){return/blackberry/i.test(t)}function q1(t=Pn()){return/webos/i.test(t)}function Ny(t=Pn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IO(t=Pn()){var e;return Ny(t)&&!!((e=window.navigator)!=null&&e.standalone)}function kO(){return HI()&&document.documentMode===10}function B1(t=Pn()){return Ny(t)||L1(t)||q1(t)||U1(t)||/windows phone/i.test(t)||j1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t,e=[]){let n;switch(t){case"Browser":n=kw(Pn());break;case"Worker":n=`${kw(Pn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ll}/${i}`}/**
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
 */class OO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function MO(t,e={}){return ps(t,"GET","/v2/passwordPolicy",ma(t,e))}/**
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
 */const NO=6;class PO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??NO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ow(this),this.idTokenSubscription=new Ow(this),this.beforeStateQueue=new OO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ns(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await gl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rd(this,{idToken:e}),i=await jr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(xr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await id(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xr(this.app))return Promise.reject(as(this));const n=e?Jt(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xr(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xr(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ns(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MO(this),n=new PO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await DO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ns(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await gl.create(this,[ns(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(xr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fo(t){return Jt(t)}class Ow{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jO(t){Cd=t}function $1(t){return Cd.loadJS(t)}function LO(){return Cd.recaptchaEnterpriseScript}function UO(){return Cd.gapiScript}function qO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class BO{constructor(){this.enterprise=new zO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $O="recaptcha-enterprise",F1="NO_RECAPTCHA";class FO{constructor(e){this.type=$O,this.auth=fo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{wO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new EO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Rw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(F1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Rw(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=LO();p.length!==0&&(p+=d),$1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Mw(t,e,n,i=!1,a=!1){const l=new FO(t);let c;if(a)c=F1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Gg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Mw(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Mw(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e){const n=Iy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(ao(l,e??{}))return a;zr(a,"already-initialized")}return n.initialize({options:e})}function YO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ns);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function GO(t,e,n){const i=fo(t);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=H1(e),{host:c,port:d}=WO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(ao(g,i.config.emulator)&&ao(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,jl(c)?(_1(`${l}//${c}${p}`),v1("Auth",!0)):QO()}function H1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WO(t){const e=H1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Nw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Nw(c)}}}function Nw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,n){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}async function KO(t,e){return ps(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Lc(t,"POST","/v1/accounts:signInWithPassword",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e){return Lc(t,"POST","/v1/accounts:signInWithEmailLink",ma(t,e))}async function JO(t,e){return Lc(t,"POST","/v1/accounts:signInWithEmailLink",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Py{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new wc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new wc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,n,"signInWithPassword",XO);case"emailLink":return ZO(e,{email:this._email,oobCode:this._password});default:zr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,i,"signUpPassword",KO);case"emailLink":return JO(e,{idToken:n,email:this._email,oobCode:this._password});default:zr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t,e){return Lc(t,"POST","/v1/accounts:signInWithIdp",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM="http://localhost";class lo extends Py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new lo(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return yl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,yl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yl(e,n)}buildRequest(){const e={requestUri:eM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nM(t){const e=tc(nc(t)).link,n=e?tc(nc(e)).deep_link_id:null,i=tc(nc(t)).deep_link_id;return(i?tc(nc(i)).link:null)||i||n||e||t}class Vy{constructor(e){const n=tc(nc(e)),i=n.apiKey??null,a=n.oobCode??null,l=tM(n.mode??null);ke(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=nM(e);try{return new Vy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.providerId=Ul.PROVIDER_ID}static credential(e,n){return wc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Vy.parseLink(n);return ke(i,"argument-error"),wc._fromEmailAndCode(e,i.code,i.tenantId)}}Ul.PROVIDER_ID="password";Ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Uc extends Y1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Uc{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qs.credential(e.oauthAccessToken)}catch{return null}}}Qs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Uc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lo._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ks.credential(n,i)}catch{return null}}}Ks.GOOGLE_SIGN_IN_METHOD="google.com";Ks.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Uc{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xs.credential(e.oauthAccessToken)}catch{return null}}}Xs.GITHUB_SIGN_IN_METHOD="github.com";Xs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Uc{constructor(){super("twitter.com")}static credential(e,n){return lo._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Zs.credential(n,i)}catch{return null}}}Zs.TWITTER_SIGN_IN_METHOD="twitter.com";Zs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return Lc(t,"POST","/v1/accounts:signUp",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await jr._fromIdTokenResponse(e,i,a),c=Pw(i);return new uo({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=Pw(i);return new uo({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function Pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends ds{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,sd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new sd(e,n,i,a)}}function G1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?sd._fromErrorAndOperation(t,l,e,i):l})}async function iM(t,e,n=!1){const i=await xl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",i)}/**
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
 */async function sM(t,e,n=!1){const{auth:i}=t;if(xr(i.app))return Promise.reject(as(i));const a="reauthenticate";try{const l=await xl(t,G1(i,a,e,t),n);ke(l.idToken,i,"internal-error");const c=My(l.idToken);ke(c,i,"internal-error");const{sub:d}=c;return ke(t.uid===d,i,"user-mismatch"),uo._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&zr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){if(xr(t.app))return Promise.reject(as(t));const i="signIn",a=await G1(t,i,e),l=await uo._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function aM(t,e){return W1(fo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(t){const e=fo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oM(t,e,n){if(xr(t.app))return Promise.reject(as(t));const i=fo(t),c=await Gg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Q1(t),p}),d=await uo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function lM(t,e,n){return xr(t.app)?Promise.reject(as(t)):aM(Jt(t),Ul.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Q1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Jt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await xl(i,uM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function hM(t,e,n,i){return Jt(t).onIdTokenChanged(e,n,i)}function fM(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}function qc(t,e,n,i){return Jt(t).onAuthStateChanged(e,n,i)}function dM(t){return Jt(t).signOut()}const ad="__sak";/**
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
 */class K1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ad,"1"),this.storage.removeItem(ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=1e3,mM=10;class X1 extends K1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);kO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,mM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},pM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X1.type="LOCAL";const gM=X1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1 extends K1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z1.type="SESSION";const J1=Z1;/**
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
 */function yM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Dd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await yM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _M{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=jy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(E){const T=E;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return window}function vM(t){gi().location.href=t}/**
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
 */function eS(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function EM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bM(){return eS()?self:null}/**
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
 */const tS="firebaseLocalStorageDb",TM=1,od="firebaseLocalStorage",nS="fbase_key";class Bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([od],e?"readwrite":"readonly").objectStore(od)}function SM(){const t=indexedDB.deleteDatabase(tS);return new Bc(t).toPromise()}function Wg(){const t=indexedDB.open(tS,TM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(od,{keyPath:nS})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(od)?e(i):(i.close(),await SM(),e(await Wg()))})})}async function Vw(t,e,n){const i=Id(t,!0).put({[nS]:e,value:n});return new Bc(i).toPromise()}async function xM(t,e){const n=Id(t,!1).get(e),i=await new Bc(n).toPromise();return i===void 0?null:i.value}function jw(t,e){const n=Id(t,!0).delete(e);return new Bc(n).toPromise()}const AM=800,RM=3;class rS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>RM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dd._getInstance(bM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await EM(),!this.activeServiceWorker)return;this.sender=new _M(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await Vw(e,ad,"1"),await jw(e,ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vw(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>xM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Id(a,!1).getAll();return new Bc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rS.type="LOCAL";const CM=rS;new jc(3e4,6e4);/**
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
 */function DM(t,e){return e?ns(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ly extends Py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IM(t){return W1(t.auth,new Ly(t),t.bypassAuthState)}function kM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),sM(n,new Ly(t),t.bypassAuthState)}async function OM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),iM(n,new Ly(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IM;case"linkViaPopup":case"linkViaRedirect":return OM;case"reauthViaPopup":case"reauthViaRedirect":return kM;default:zr(this.auth,"internal-error")}}resolve(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new jc(2e3,1e4);class pl extends iS{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,pl.currentPopupAction&&pl.currentPopupAction.cancel(),pl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){cs(this.filter.length===1,"Popup operations only handle one event");const e=jy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MM.get())};e()}}pl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM="pendingRedirect",Bf=new Map;class PM extends iS{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Bf.get(this.auth._key());if(!e){try{const i=await VM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bf.set(this.auth._key(),e)}return this.bypassAuthState||Bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VM(t,e){const n=UM(e),i=LM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function jM(t,e){Bf.set(t._key(),e)}function LM(t){return ns(t._redirectPersistence)}function UM(t){return qf(NM,t.config.apiKey,t.name)}async function qM(t,e,n=!1){if(xr(t.app))return Promise.reject(as(t));const i=fo(t),a=DM(i,e),c=await new PM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=600*1e3;class zM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$M(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!sS(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lw(e))}saveEventToCache(e){this.cachedEventUids.add(Lw(e)),this.lastProcessedEventTime=Date.now()}}function Lw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $M(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YM=/^https?/;async function GM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FM(t);for(const n of e)try{if(WM(n))return}catch{}zr(t,"unauthorized-domain")}function WM(t){const e=Hg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!YM.test(n))return!1;if(HM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const QM=new jc(3e4,6e4);function Uw(){const t=gi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KM(t){return new Promise((e,n)=>{var a,l,c;function i(){Uw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uw(),n(mi(t,"network-request-failed"))},timeout:QM.get()})}if((l=(a=gi().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=gi().gapi)!=null&&c.load)i();else{const d=qO("iframefcb");return gi()[d]=()=>{gapi.load?i():n(mi(t,"network-request-failed"))},$1(`${UO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw zf=null,e})}let zf=null;function XM(t){return zf=zf||KM(t),zf}/**
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
 */const ZM=new jc(5e3,15e3),JM="__/auth/iframe",eN="emulator/auth/iframe",tN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rN(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oy(e,eN):`https://${t.config.authDomain}/${JM}`,i={apiKey:e.apiKey,appName:t.name,v:Ll},a=nN.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Vc(i).slice(1)}`}async function iN(t){const e=await XM(t),n=gi().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:rN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tN,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=mi(t,"network-request-failed"),d=gi().setTimeout(()=>{l(c)},ZM.get());function p(){gi().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const sN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aN=500,oN=600,lN="_blank",uN="http://localhost";class qw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cN(t,e,n,i=aN,a=oN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...sN,width:i.toString(),height:a.toString(),top:l,left:c},g=Pn().toLowerCase();n&&(d=V1(g)?lN:n),N1(g)&&(e=e||uN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[D,P])=>`${T}${D}=${P},`,"");if(IO(g)&&d!=="_self")return hN(e||"",d),new qw(null);const E=window.open(e||"",d,v);ke(E,t,"popup-blocked");try{E.focus()}catch{}return new qw(E)}function hN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const fN="__/auth/handler",dN="emulator/auth/handler",pN=encodeURIComponent("fac");async function Bw(t,e,n,i,a,l){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ll,eventId:a};if(e instanceof Y1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",ZI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Uc){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${pN}=${encodeURIComponent(p)}`:"";return`${mN(t)}?${Vc(d).slice(1)}${g}`}function mN({config:t}){return t.emulator?Oy(t,dN):`https://${t.authDomain}/${fN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="webStorageSupport";class gN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J1,this._completeRedirectFn=qM,this._overrideRedirectResult=jM}async _openPopup(e,n,i,a){var c;cs((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Bw(e,n,i,Hg(),a);return cN(e,l,jy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await Bw(e,n,i,Hg(),a);return vM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(cs(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await iN(e),i=new zM(e);return n.register("authEvent",a=>(ke(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gg,{type:gg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[gg];l!==void 0&&n(!!l),zr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B1()||P1()||Ny()}}const yN=gN;var zw="@firebase/auth",$w="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EN(t){Sl(new oo("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z1(t)},g=new VO(i,a,l,p);return YO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Sl(new oo("auth-internal",e=>{const n=fo(e.getProvider("auth").getImmediate());return(i=>new _N(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ra(zw,$w,vN(t)),ra(zw,$w,"esm2020")}/**
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
 */const wN=300,bN=y1("authIdTokenMaxAge")||wN;let Fw=null;const TN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>bN)return;const a=n==null?void 0:n.token;Fw!==a&&(Fw=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function SN(t=T1()){const e=Iy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HO(t,{popupRedirectResolver:yN,persistence:[CM,gM,J1]}),i=y1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=TN(l.toString());fM(n,c,()=>c(n.currentUser)),hM(n,d=>c(d))}}const a=m1("auth");return a&&GO(n,`http://${a}`),n}function xN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}jO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=mi("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",xN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EN("Browser");var AN="firebase",RN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ra(AN,RN,"app");var Hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ia,aS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function A(){}A.prototype=S.prototype,C.D=S.prototype,C.prototype=new A,C.prototype.constructor=C,C.C=function(V,I,O){for(var k=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)k[Me-2]=arguments[Me];return S.prototype[I].apply(V,k)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,S,A){A||(A=0);var V=Array(16);if(typeof S=="string")for(var I=0;16>I;++I)V[I]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(I=0;16>I;++I)V[I]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=C.g[0],A=C.g[1],I=C.g[2];var O=C.g[3],k=S+(O^A&(I^O))+V[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=O+(I^S&(A^I))+V[1]+3905402710&4294967295,O=S+(k<<12&4294967295|k>>>20),k=I+(A^O&(S^A))+V[2]+606105819&4294967295,I=O+(k<<17&4294967295|k>>>15),k=A+(S^I&(O^S))+V[3]+3250441966&4294967295,A=I+(k<<22&4294967295|k>>>10),k=S+(O^A&(I^O))+V[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(I^S&(A^I))+V[5]+1200080426&4294967295,O=S+(k<<12&4294967295|k>>>20),k=I+(A^O&(S^A))+V[6]+2821735955&4294967295,I=O+(k<<17&4294967295|k>>>15),k=A+(S^I&(O^S))+V[7]+4249261313&4294967295,A=I+(k<<22&4294967295|k>>>10),k=S+(O^A&(I^O))+V[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(I^S&(A^I))+V[9]+2336552879&4294967295,O=S+(k<<12&4294967295|k>>>20),k=I+(A^O&(S^A))+V[10]+4294925233&4294967295,I=O+(k<<17&4294967295|k>>>15),k=A+(S^I&(O^S))+V[11]+2304563134&4294967295,A=I+(k<<22&4294967295|k>>>10),k=S+(O^A&(I^O))+V[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=O+(I^S&(A^I))+V[13]+4254626195&4294967295,O=S+(k<<12&4294967295|k>>>20),k=I+(A^O&(S^A))+V[14]+2792965006&4294967295,I=O+(k<<17&4294967295|k>>>15),k=A+(S^I&(O^S))+V[15]+1236535329&4294967295,A=I+(k<<22&4294967295|k>>>10),k=S+(I^O&(A^I))+V[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^I&(S^A))+V[6]+3225465664&4294967295,O=S+(k<<9&4294967295|k>>>23),k=I+(S^A&(O^S))+V[11]+643717713&4294967295,I=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(I^O))+V[0]+3921069994&4294967295,A=I+(k<<20&4294967295|k>>>12),k=S+(I^O&(A^I))+V[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^I&(S^A))+V[10]+38016083&4294967295,O=S+(k<<9&4294967295|k>>>23),k=I+(S^A&(O^S))+V[15]+3634488961&4294967295,I=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(I^O))+V[4]+3889429448&4294967295,A=I+(k<<20&4294967295|k>>>12),k=S+(I^O&(A^I))+V[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^I&(S^A))+V[14]+3275163606&4294967295,O=S+(k<<9&4294967295|k>>>23),k=I+(S^A&(O^S))+V[3]+4107603335&4294967295,I=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(I^O))+V[8]+1163531501&4294967295,A=I+(k<<20&4294967295|k>>>12),k=S+(I^O&(A^I))+V[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=O+(A^I&(S^A))+V[2]+4243563512&4294967295,O=S+(k<<9&4294967295|k>>>23),k=I+(S^A&(O^S))+V[7]+1735328473&4294967295,I=O+(k<<14&4294967295|k>>>18),k=A+(O^S&(I^O))+V[12]+2368359562&4294967295,A=I+(k<<20&4294967295|k>>>12),k=S+(A^I^O)+V[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^I)+V[8]+2272392833&4294967295,O=S+(k<<11&4294967295|k>>>21),k=I+(O^S^A)+V[11]+1839030562&4294967295,I=O+(k<<16&4294967295|k>>>16),k=A+(I^O^S)+V[14]+4259657740&4294967295,A=I+(k<<23&4294967295|k>>>9),k=S+(A^I^O)+V[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^I)+V[4]+1272893353&4294967295,O=S+(k<<11&4294967295|k>>>21),k=I+(O^S^A)+V[7]+4139469664&4294967295,I=O+(k<<16&4294967295|k>>>16),k=A+(I^O^S)+V[10]+3200236656&4294967295,A=I+(k<<23&4294967295|k>>>9),k=S+(A^I^O)+V[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^I)+V[0]+3936430074&4294967295,O=S+(k<<11&4294967295|k>>>21),k=I+(O^S^A)+V[3]+3572445317&4294967295,I=O+(k<<16&4294967295|k>>>16),k=A+(I^O^S)+V[6]+76029189&4294967295,A=I+(k<<23&4294967295|k>>>9),k=S+(A^I^O)+V[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=O+(S^A^I)+V[12]+3873151461&4294967295,O=S+(k<<11&4294967295|k>>>21),k=I+(O^S^A)+V[15]+530742520&4294967295,I=O+(k<<16&4294967295|k>>>16),k=A+(I^O^S)+V[2]+3299628645&4294967295,A=I+(k<<23&4294967295|k>>>9),k=S+(I^(A|~O))+V[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~I))+V[7]+1126891415&4294967295,O=S+(k<<10&4294967295|k>>>22),k=I+(S^(O|~A))+V[14]+2878612391&4294967295,I=O+(k<<15&4294967295|k>>>17),k=A+(O^(I|~S))+V[5]+4237533241&4294967295,A=I+(k<<21&4294967295|k>>>11),k=S+(I^(A|~O))+V[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~I))+V[3]+2399980690&4294967295,O=S+(k<<10&4294967295|k>>>22),k=I+(S^(O|~A))+V[10]+4293915773&4294967295,I=O+(k<<15&4294967295|k>>>17),k=A+(O^(I|~S))+V[1]+2240044497&4294967295,A=I+(k<<21&4294967295|k>>>11),k=S+(I^(A|~O))+V[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~I))+V[15]+4264355552&4294967295,O=S+(k<<10&4294967295|k>>>22),k=I+(S^(O|~A))+V[6]+2734768916&4294967295,I=O+(k<<15&4294967295|k>>>17),k=A+(O^(I|~S))+V[13]+1309151649&4294967295,A=I+(k<<21&4294967295|k>>>11),k=S+(I^(A|~O))+V[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=O+(A^(S|~I))+V[11]+3174756917&4294967295,O=S+(k<<10&4294967295|k>>>22),k=I+(S^(O|~A))+V[2]+718787259&4294967295,I=O+(k<<15&4294967295|k>>>17),k=A+(O^(I|~S))+V[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(I+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+O&4294967295}i.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var A=S-this.blockSize,V=this.B,I=this.h,O=0;O<S;){if(I==0)for(;O<=A;)a(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<S;)if(V[I++]=C.charCodeAt(O++),I==this.blockSize){a(this,V),I=0;break}}else for(;O<S;)if(V[I++]=C[O++],I==this.blockSize){a(this,V),I=0;break}}this.h=I,this.o+=S},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var A=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=A&255,A/=256;for(this.u(C),C=Array(16),S=A=0;4>S;++S)for(var V=0;32>V;V+=8)C[A++]=this.g[S]>>>V&255;return C};function l(C,S){var A=d;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=S(C)}function c(C,S){this.h=S;for(var A=[],V=!0,I=C.length-1;0<=I;I--){var O=C[I]|0;V&&O==S||(A[I]=O,V=!1)}this.g=A}var d={};function p(C){return-128<=C&&128>C?l(C,function(S){return new c([S|0],0>S?-1:0)}):new c([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return E;if(0>C)return N(g(-C));for(var S=[],A=1,V=0;C>=A;V++)S[V]=C/A|0,A*=4294967296;return new c(S,0)}function v(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return N(v(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(S,8)),V=E,I=0;I<C.length;I+=8){var O=Math.min(8,C.length-I),k=parseInt(C.substring(I,I+O),S);8>O?(O=g(Math.pow(S,O)),V=V.j(O).add(g(k))):(V=V.j(A),V=V.add(g(k)))}return V}var E=p(0),T=p(1),D=p(16777216);t=c.prototype,t.m=function(){if(q(this))return-N(this).m();for(var C=0,S=1,A=0;A<this.g.length;A++){var V=this.i(A);C+=(0<=V?V:4294967296+V)*S,S*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P(this))return"0";if(q(this))return"-"+N(this).toString(C);for(var S=g(Math.pow(C,6)),A=this,V="";;){var I=J(A,S).g;A=F(A,I.j(S));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(C);if(A=I,P(A))return O+V;for(;6>O.length;)O="0"+O;V=O+V}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function P(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function q(C){return C.h==-1}t.l=function(C){return C=F(this,C),q(C)?-1:P(C)?0:1};function N(C){for(var S=C.g.length,A=[],V=0;V<S;V++)A[V]=~C.g[V];return new c(A,~C.h).add(T)}t.abs=function(){return q(this)?N(this):this},t.add=function(C){for(var S=Math.max(this.g.length,C.g.length),A=[],V=0,I=0;I<=S;I++){var O=V+(this.i(I)&65535)+(C.i(I)&65535),k=(O>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);V=k>>>16,O&=65535,k&=65535,A[I]=k<<16|O}return new c(A,A[A.length-1]&-2147483648?-1:0)};function F(C,S){return C.add(N(S))}t.j=function(C){if(P(this)||P(C))return E;if(q(this))return q(C)?N(this).j(N(C)):N(N(this).j(C));if(q(C))return N(this.j(N(C)));if(0>this.l(D)&&0>C.l(D))return g(this.m()*C.m());for(var S=this.g.length+C.g.length,A=[],V=0;V<2*S;V++)A[V]=0;for(V=0;V<this.g.length;V++)for(var I=0;I<C.g.length;I++){var O=this.i(V)>>>16,k=this.i(V)&65535,Me=C.i(I)>>>16,oe=C.i(I)&65535;A[2*V+2*I]+=k*oe,z(A,2*V+2*I),A[2*V+2*I+1]+=O*oe,z(A,2*V+2*I+1),A[2*V+2*I+1]+=k*Me,z(A,2*V+2*I+1),A[2*V+2*I+2]+=O*Me,z(A,2*V+2*I+2)}for(V=0;V<S;V++)A[V]=A[2*V+1]<<16|A[2*V];for(V=S;V<2*S;V++)A[V]=0;return new c(A,0)};function z(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function M(C,S){this.g=C,this.h=S}function J(C,S){if(P(S))throw Error("division by zero");if(P(C))return new M(E,E);if(q(C))return S=J(N(C),S),new M(N(S.g),N(S.h));if(q(S))return S=J(C,N(S)),new M(N(S.g),S.h);if(30<C.g.length){if(q(C)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var A=T,V=S;0>=V.l(C);)A=$(A),V=$(V);var I=re(A,1),O=re(V,1);for(V=re(V,2),A=re(A,2);!P(V);){var k=O.add(V);0>=k.l(C)&&(I=I.add(A),O=k),V=re(V,1),A=re(A,1)}return S=F(C,I.j(S)),new M(I,S)}for(I=E;0<=C.l(S);){for(A=Math.max(1,Math.floor(C.m()/S.m())),V=Math.ceil(Math.log(A)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),O=g(A),k=O.j(S);q(k)||0<k.l(C);)A-=V,O=g(A),k=O.j(S);P(O)&&(O=T),I=I.add(O),C=F(C,k)}return new M(I,C)}t.A=function(C){return J(this,C).h},t.and=function(C){for(var S=Math.max(this.g.length,C.g.length),A=[],V=0;V<S;V++)A[V]=this.i(V)&C.i(V);return new c(A,this.h&C.h)},t.or=function(C){for(var S=Math.max(this.g.length,C.g.length),A=[],V=0;V<S;V++)A[V]=this.i(V)|C.i(V);return new c(A,this.h|C.h)},t.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),A=[],V=0;V<S;V++)A[V]=this.i(V)^C.i(V);return new c(A,this.h^C.h)};function $(C){for(var S=C.g.length+1,A=[],V=0;V<S;V++)A[V]=C.i(V)<<1|C.i(V-1)>>>31;return new c(A,C.h)}function re(C,S){var A=S>>5;S%=32;for(var V=C.g.length-A,I=[],O=0;O<V;O++)I[O]=0<S?C.i(O+A)>>>S|C.i(O+A+1)<<32-S:C.i(O+A);return new c(I,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,aS=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,ia=c}).apply(typeof Hw<"u"?Hw:typeof self<"u"?self:typeof window<"u"?window:{});var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oS,rc,lS,$f,Qg,uS,cS,hS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,w){return h==Array.prototype||h==Object.prototype||(h[y]=w.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof bf=="object"&&bf];for(var y=0;y<h.length;++y){var w=h[y];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var w=i;h=h.split(".");for(var R=0;R<h.length-1;R++){var W=h[R];if(!(W in w))break e;w=w[W]}h=h[h.length-1],R=w[h],y=y(R),y!=R&&y!=null&&e(w,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var w=0,R=!1,W={next:function(){if(!R&&w<h.length){var ee=w++;return{value:y(ee,h[ee]),done:!1}}return R=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,w){return h.call.apply(h.bind,arguments)}function E(h,y,w){if(!h)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var W=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(W,R),h.apply(y,W)}}return function(){return h.apply(y,arguments)}}function T(h,y,w){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function D(h,y){var w=Array.prototype.slice.call(arguments,1);return function(){var R=w.slice();return R.push.apply(R,arguments),h.apply(this,R)}}function P(h,y){function w(){}w.prototype=y.prototype,h.aa=y.prototype,h.prototype=new w,h.prototype.constructor=h,h.Qb=function(R,W,ee){for(var pe=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)pe[Ke-2]=arguments[Ke];return y.prototype[W].apply(R,pe)}}function q(h){const y=h.length;if(0<y){const w=Array(y);for(let R=0;R<y;R++)w[R]=h[R];return w}return[]}function N(h,y){for(let w=1;w<arguments.length;w++){const R=arguments[w];if(p(R)){const W=h.length||0,ee=R.length||0;h.length=W+ee;for(let pe=0;pe<ee;pe++)h[W+pe]=R[pe]}else h.push(R)}}class F{constructor(y,w){this.i=y,this.j=w,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function z(h){return/^[\s\xa0]*$/.test(h)}function M(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function J(h){return J[" "](h),h}J[" "]=function(){};var $=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function re(h,y,w){for(const R in h)y.call(w,h[R],R,h)}function C(h,y){for(const w in h)y.call(void 0,h[w],w,h)}function S(h){const y={};for(const w in h)y[w]=h[w];return y}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,y){let w,R;for(let W=1;W<arguments.length;W++){R=arguments[W];for(w in R)h[w]=R[w];for(let ee=0;ee<A.length;ee++)w=A[ee],Object.prototype.hasOwnProperty.call(R,w)&&(h[w]=R[w])}}function I(h){var y=1;h=h.split(":");const w=[];for(;0<y&&h.length;)w.push(h.shift()),y--;return h.length&&w.push(h.join(":")),w}function O(h){d.setTimeout(()=>{throw h},0)}function k(){var h=ye;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Me{constructor(){this.h=this.g=null}add(y,w){const R=oe.get();R.set(y,w),this.h?this.h.next=R:this.g=R,this.h=R}}var oe=new F(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,w){this.h=y,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,fe=!1,ye=new Me,L=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(te)}};var te=()=>{for(var h;h=k();){try{h.h.call(h.g)}catch(w){O(w)}var y=oe;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}fe=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const w=()=>{};d.addEventListener("test",w,y),d.removeEventListener("test",w,y)}catch{}return h}();function De(h,y){if(ce.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var w=this.type=h.type,R=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if($){e:{try{J(y.nodeName);var W=!0;break e}catch{}W=!1}W||(y=null)}}else w=="mouseover"?y=h.fromElement:w=="mouseout"&&(y=h.toElement);this.relatedTarget=y,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}P(De,ce);var be={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Tt(h,y,w,R,W){this.listener=h,this.proxy=null,this.src=y,this.type=w,this.capture=!!R,this.ha=W,this.key=++Fe,this.da=this.fa=!1}function Cn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function de(h){this.src=h,this.g={},this.h=0}de.prototype.add=function(h,y,w,R,W){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var pe=we(h,y,R,W);return-1<pe?(y=h[pe],w||(y.fa=!1)):(y=new Tt(y,this.src,ee,!!R,W),y.fa=w,h.push(y)),y};function Te(h,y){var w=y.type;if(w in h.g){var R=h.g[w],W=Array.prototype.indexOf.call(R,y,void 0),ee;(ee=0<=W)&&Array.prototype.splice.call(R,W,1),ee&&(Cn(y),h.g[w].length==0&&(delete h.g[w],h.h--))}}function we(h,y,w,R){for(var W=0;W<h.length;++W){var ee=h[W];if(!ee.da&&ee.listener==y&&ee.capture==!!w&&ee.ha==R)return W}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),it={};function Qn(h,y,w,R,W){if(Array.isArray(y)){for(var ee=0;ee<y.length;ee++)Qn(h,y[ee],w,R,W);return null}return w=yo(w),h&&h[yt]?h.K(y,w,g(R)?!!R.capture:!1,W):Lt(h,y,w,!1,R,W)}function Lt(h,y,w,R,W,ee){if(!y)throw Error("Invalid event type");var pe=g(W)?!!W.capture:!!W,Ke=Yr(h);if(Ke||(h[Pe]=Ke=new de(h)),w=Ke.add(y,w,R,pe,ee),w.proxy)return w;if(R=Hr(),w.proxy=R,R.src=h,R.listener=w,h.addEventListener)ve||(W=pe),W===void 0&&(W=!1),h.addEventListener(y.toString(),R,W);else if(h.attachEvent)h.attachEvent(Si(y.toString()),R);else if(h.addListener&&h.removeListener)h.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return w}function Hr(){function h(w){return y.call(h.src,h.listener,w)}const y=go;return h}function Kn(h,y,w,R,W){if(Array.isArray(y))for(var ee=0;ee<y.length;ee++)Kn(h,y[ee],w,R,W);else R=g(R)?!!R.capture:!!R,w=yo(w),h&&h[yt]?(h=h.i,y=String(y).toString(),y in h.g&&(ee=h.g[y],w=we(ee,w,R,W),-1<w&&(Cn(ee[w]),Array.prototype.splice.call(ee,w,1),ee.length==0&&(delete h.g[y],h.h--)))):h&&(h=Yr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=we(y,w,R,W)),(w=-1<h?y[h]:null)&&cr(w))}function cr(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[yt])Te(y.i,h);else{var w=h.type,R=h.proxy;y.removeEventListener?y.removeEventListener(w,R,h.capture):y.detachEvent?y.detachEvent(Si(w),R):y.addListener&&y.removeListener&&y.removeListener(R),(w=Yr(y))?(Te(w,h),w.h==0&&(w.src=null,y[Pe]=null)):Cn(h)}}}function Si(h){return h in it?it[h]:it[h]="on"+h}function go(h,y){if(h.da)h=!0;else{y=new De(y,this);var w=h.listener,R=h.ha||h.src;h.fa&&cr(h),h=w.call(R,y)}return h}function Yr(h){return h=h[Pe],h instanceof de?h:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(h){return typeof h=="function"?h:(h[xi]||(h[xi]=function(y){return h.handleEvent(y)}),h[xi])}function xt(){he.call(this),this.i=new de(this),this.M=this,this.F=null}P(xt,he),xt.prototype[yt]=!0,xt.prototype.removeEventListener=function(h,y,w,R){Kn(this,h,y,w,R)};function nt(h,y){var w,R=h.F;if(R)for(w=[];R;R=R.F)w.push(R);if(h=h.M,R=y.type||y,typeof y=="string")y=new ce(y,h);else if(y instanceof ce)y.target=y.target||h;else{var W=y;y=new ce(R,h),V(y,W)}if(W=!0,w)for(var ee=w.length-1;0<=ee;ee--){var pe=y.g=w[ee];W=Vn(pe,R,!0,y)&&W}if(pe=y.g=h,W=Vn(pe,R,!0,y)&&W,W=Vn(pe,R,!1,y)&&W,w)for(ee=0;ee<w.length;ee++)pe=y.g=w[ee],W=Vn(pe,R,!1,y)&&W}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var w=h.g[y],R=0;R<w.length;R++)Cn(w[R]);delete h.g[y],h.h--}}this.F=null},xt.prototype.K=function(h,y,w,R){return this.i.add(String(h),y,!1,w,R)},xt.prototype.L=function(h,y,w,R){return this.i.add(String(h),y,!0,w,R)};function Vn(h,y,w,R){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var W=!0,ee=0;ee<y.length;++ee){var pe=y[ee];if(pe&&!pe.da&&pe.capture==w){var Ke=pe.listener,tn=pe.ha||pe.src;pe.fa&&Te(h.i,pe),W=Ke.call(tn,R)!==!1&&W}}return W&&!R.defaultPrevented}function ln(h,y,w){if(typeof h=="function")w&&(h=T(h,w));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function _o(h){h.g=ln(()=>{h.g=null,h.i&&(h.i=!1,_o(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Yl extends he{constructor(y,w){super(),this.m=y,this.l=w,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(h){he.call(this),this.h=h,this.g={}}P(Ai,he);var Ri=[];function Ci(h){re(h.g,function(y,w){this.g.hasOwnProperty(w)&&cr(y)},h),h.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Ci(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=d.JSON.stringify,Di=d.JSON.parse,Ii=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function gs(){}gs.prototype.h=null;function Le(h){return h.h||(h.h=h.i())}function st(){}var Ie={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){ce.call(this,"d")}P(et,ce);function un(){ce.call(this,"c")}P(un,ce);var Ue={},va=null;function Gr(){return va=va||new xt}Ue.La="serverreachability";function ys(h){ce.call(this,Ue.La,h)}P(ys,ce);function hr(h){const y=Gr();nt(y,new ys(y))}Ue.STAT_EVENT="statevent";function _s(h,y){ce.call(this,Ue.STAT_EVENT,h),this.stat=y}P(_s,ce);function At(h){const y=Gr();nt(y,new _s(y,h))}Ue.Ma="timingevent";function en(h,y){ce.call(this,Ue.Ma,h),this.size=y}P(en,ce);function $t(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function Gl(h,y,w,R,W,ee){h.info(function(){if(h.g)if(ee)for(var pe="",Ke=ee.split("&"),tn=0;tn<Ke.length;tn++){var Xe=Ke[tn].split("=");if(1<Xe.length){var hn=Xe[0];Xe=Xe[1];var nn=hn.split("_");pe=2<=nn.length&&nn[1]=="type"?pe+(hn+"="+Xe+"&"):pe+(hn+"=redacted&")}}else pe=null;else pe=ee;return"XMLHTTP REQ ("+R+") [attempt "+W+"]: "+y+`
`+w+`
`+pe})}function tp(h,y,w,R,W,ee,pe){h.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+W+"]: "+y+`
`+w+`
`+ee+" "+pe})}function vs(h,y,w,R){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ea(h,w)+(R?" "+R:"")})}function Xc(h,y){h.info(function(){return"TIMEOUT: "+y})}fr.prototype.info=function(){};function Ea(h,y){if(!h.g)return y;if(!y)return null;try{var w=JSON.parse(y);if(w){for(h=0;h<w.length;h++)if(Array.isArray(w[h])){var R=w[h];if(!(2>R.length)){var W=R[1];if(Array.isArray(W)&&!(1>W.length)){var ee=W[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var pe=1;pe<W.length;pe++)W[pe]=""}}}}return Xn(w)}catch{return y}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function Qr(){}P(Qr,gs),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Wr=new Qr;function jn(h,y,w,R){this.j=h,this.i=y,this.l=w,this.R=R||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ut}function Ut(){this.i=null,this.g="",this.h=!1}var Wl={},vo={};function Ir(h,y,w){h.L=1,h.v=xa(Zn(y)),h.m=w,h.P=!0,Oi(h,null)}function Oi(h,y){h.F=Date.now(),wa(h),h.A=Zn(h.v);var w=h.A,R=h.R;Array.isArray(R)||(R=[String(R)]),eu(w.i,"t",R),h.C=0,w=h.j.J,h.h=new Ut,h.g=dh(h.j,w?y:null,!h.m),0<h.O&&(h.M=new Yl(T(h.Y,h,h.g),h.O)),y=h.U,w=h.g,R=h.ca;var W="readystatechange";Array.isArray(W)||(W&&(Ri[0]=W.toString()),W=Ri);for(var ee=0;ee<W.length;ee++){var pe=Qn(w,W[ee],R||y.handleEvent,!1,y.h||y);if(!pe)break;y.g[pe.key]=pe}y=h.H?S(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),hr(),Gl(h.i,h.u,h.A,h.l,h.R,h.m)}jn.prototype.ca=function(h){h=h.target;const y=this.M;y&&gr(h)==3?y.j():this.Y(h)},jn.prototype.Y=function(h){try{if(h==this.g)e:{const nn=gr(this.g);var y=this.g.Ba();const qi=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||sh(this.g)))){this.J||nn!=4||y==7||(y==8||0>=qi?hr(3):hr(2)),ws(this);var w=this.g.Z();this.X=w;t:if(Zc(this)){var R=sh(this.g);h="";var W=R.length,ee=gr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Kr(this);var pe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<W;y++)this.h.h=!0,h+=this.h.i.decode(R[y],{stream:!(ee&&y==W-1)});R.length=0,this.h.g+=h,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=w==200,tp(this.i,this.u,this.A,this.l,this.R,nn,w),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,tn=this.g;if((Ke=tn.g?tn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Ke)){var Xe=Ke;break t}}Xe=null}if(w=Xe)vs(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,w);else{this.o=!1,this.s=3,At(12),vn(this),Kr(this);break e}}if(this.P){w=!0;let En;for(;!this.J&&this.C<pe.length;)if(En=Jc(this,pe),En==vo){nn==4&&(this.s=4,At(14),w=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Wl){this.s=4,At(15),vs(this.i,this.l,pe,"[Invalid Chunk]"),w=!1;break}else vs(this.i,this.l,En,null),ba(this,En);if(Zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||pe.length!=0||this.h.h||(this.s=1,At(16),w=!1),this.o=this.o&&w,!w)vs(this.i,this.l,pe,"[Invalid Chunked Response]"),vn(this),Kr(this);else if(0<pe.length&&!this.W){this.W=!0;var hn=this.j;hn.g==this&&hn.ba&&!hn.M&&(hn.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Ma(hn),hn.M=!0,At(11))}}else vs(this.i,this.l,pe,null),ba(this,pe);nn==4&&vn(this),this.o&&!this.J&&(nn==4?ch(this.j,this):(this.o=!1,wa(this)))}else ap(this.g),w==400&&0<pe.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),vn(this),Kr(this)}}}catch{}finally{}};function Zc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Jc(h,y){var w=h.C,R=y.indexOf(`
`,w);return R==-1?vo:(w=Number(y.substring(w,R)),isNaN(w)?Wl:(R+=1,R+w>y.length?vo:(y=y.slice(R,R+w),h.C=R+w,y)))}jn.prototype.cancel=function(){this.J=!0,vn(this)};function wa(h){h.S=Date.now()+h.I,eh(h,h.I)}function eh(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=$t(T(h.ba,h),y)}function ws(h){h.B&&(d.clearTimeout(h.B),h.B=null)}jn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Xc(this.i,this.A),this.L!=2&&(hr(),At(17)),vn(this),this.s=2,Kr(this)):eh(this,this.S-h)};function Kr(h){h.j.G==0||h.J||ch(h.j,h)}function vn(h){ws(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Ci(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function ba(h,y){try{var w=h.j;if(w.G!=0&&(w.g==h||Ql(w.h,h))){if(!h.K&&Ql(w.h,h)&&w.G==3){try{var R=w.Da.g.parse(y)}catch{R=null}if(Array.isArray(R)&&R.length==3){var W=R;if(W[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<h.F)ko(w),Do(w);else break e;su(w),At(18)}}else w.za=W[1],0<w.za-w.T&&37500>W[2]&&w.F&&w.v==0&&!w.C&&(w.C=$t(T(w.Za,w),6e3));if(1>=wo(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else Ui(w,11)}else if((h.K||w.g==h)&&ko(w),!z(y))for(W=w.Da.g.parse(y),y=0;y<W.length;y++){let Xe=W[y];if(w.T=Xe[0],Xe=Xe[1],w.G==2)if(Xe[0]=="c"){w.K=Xe[1],w.ia=Xe[2];const hn=Xe[3];hn!=null&&(w.la=hn,w.j.info("VER="+w.la));const nn=Xe[4];nn!=null&&(w.Aa=nn,w.j.info("SVER="+w.Aa));const qi=Xe[5];qi!=null&&typeof qi=="number"&&0<qi&&(R=1.5*qi,w.L=R,w.j.info("backChannelRequestTimeoutMs_="+R)),R=w;const En=h.g;if(En){const ri=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var ee=R.h;ee.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(bo(ee,ee.h),ee.h=null))}if(R.D){const ou=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;ou&&(R.ya=ou,ft(R.I,R.D,ou))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-h.F,w.j.info("Handshake RTT: "+w.R+"ms")),R=w;var pe=h;if(R.qa=fh(R,R.J?R.ia:null,R.W),pe.K){Ln(R.h,pe);var Ke=pe,tn=R.L;tn&&(Ke.I=tn),Ke.B&&(ws(Ke),wa(Ke)),R.g=pe}else lh(R);0<w.i.length&&Io(w)}else Xe[0]!="stop"&&Xe[0]!="close"||Ui(w,7);else w.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Ui(w,7):ru(w):Xe[0]!="noop"&&w.l&&w.l.ta(Xe),w.v=0)}}hr(4)}catch{}}var th=class{constructor(h,y){this.g=h,this.map=y}};function Mi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function wo(h){return h.h?1:h.g?h.g.size:0}function Ql(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function bo(h,y){h.g?h.g.add(y):h.h=y}function Ln(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Mi.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Kl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const w of h.g.values())y=y.concat(w.D);return y}return q(h.i)}function np(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],w=h.length,R=0;R<w;R++)y.push(h[R]);return y}y=[],w=0;for(R in h)y[w++]=h[R];return y}function To(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var w=0;w<h;w++)y.push(w);return y}y=[],w=0;for(const R in h)y[w++]=R;return y}}}function Xl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var w=To(h),R=np(h),W=R.length,ee=0;ee<W;ee++)y.call(void 0,R[ee],w&&w[ee],h)}var Ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(h,y){if(h){h=h.split("&");for(var w=0;w<h.length;w++){var R=h[w].indexOf("="),W=null;if(0<=R){var ee=h[w].substring(0,R);W=h[w].substring(R+1)}else ee=h[w];y(ee,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Ft(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ft){this.h=h.h,Sa(this,h.j),this.o=h.o,this.g=h.g,bs(this,h.s),this.l=h.l;var y=h.i,w=new Pi;w.i=y.i,y.g&&(w.g=new Map(y.g),w.h=y.h),Ni(this,w),this.m=h.m}else h&&(y=String(h).match(Ta))?(this.h=!1,Sa(this,y[1]||"",!0),this.o=dr(y[2]||""),this.g=dr(y[3]||"",!0),bs(this,y[4]),this.l=dr(y[5]||"",!0),Ni(this,y[6]||"",!0),this.m=dr(y[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}Ft.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Aa(y,Zl,!0),":");var w=this.g;return(w||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Aa(y,Zl,!0),"@"),h.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&h.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&h.push("/"),h.push(Aa(w,w.charAt(0)=="/"?ip:Jl,!0))),(w=this.i.toString())&&h.push("?",w),(w=this.m)&&h.push("#",Aa(w,So)),h.join("")};function Zn(h){return new Ft(h)}function Sa(h,y,w){h.j=w?dr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function bs(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Ni(h,y,w){y instanceof Pi?(h.i=y,rh(h.i,h.h)):(w||(y=Aa(y,sp)),h.i=new Pi(y,h.h))}function ft(h,y,w){h.i.set(y,w)}function xa(h){return ft(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function dr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Aa(h,y,w){return typeof h=="string"?(h=encodeURI(h).replace(y,nh),w&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function nh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Zl=/[#\/\?@]/g,Jl=/[#\?:]/g,ip=/[#\?]/g,sp=/[#\?@]/g,So=/#/g;function Pi(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function pr(h){h.g||(h.g=new Map,h.h=0,h.i&&rp(h.i,function(y,w){h.add(decodeURIComponent(y.replace(/\+/g," ")),w)}))}t=Pi.prototype,t.add=function(h,y){pr(this),this.i=null,h=Xr(this,h);var w=this.g.get(h);return w||this.g.set(h,w=[]),w.push(y),this.h+=1,this};function Vi(h,y){pr(h),y=Xr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function ji(h,y){return pr(h),y=Xr(h,y),h.g.has(y)}t.forEach=function(h,y){pr(this),this.g.forEach(function(w,R){w.forEach(function(W){h.call(y,W,R,this)},this)},this)},t.na=function(){pr(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),w=[];for(let R=0;R<y.length;R++){const W=h[R];for(let ee=0;ee<W.length;ee++)w.push(y[R])}return w},t.V=function(h){pr(this);let y=[];if(typeof h=="string")ji(this,h)&&(y=y.concat(this.g.get(Xr(this,h))));else{h=Array.from(this.g.values());for(let w=0;w<h.length;w++)y=y.concat(h[w])}return y},t.set=function(h,y){return pr(this),this.i=null,h=Xr(this,h),ji(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function eu(h,y,w){Vi(h,y),0<w.length&&(h.i=null,h.g.set(Xr(h,y),q(w)),h.h+=w.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var w=0;w<y.length;w++){var R=y[w];const ee=encodeURIComponent(String(R)),pe=this.V(R);for(R=0;R<pe.length;R++){var W=ee;pe[R]!==""&&(W+="="+encodeURIComponent(String(pe[R]))),h.push(W)}}return this.i=h.join("&")};function Xr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function rh(h,y){y&&!h.j&&(pr(h),h.i=null,h.g.forEach(function(w,R){var W=R.toLowerCase();R!=W&&(Vi(this,R),eu(this,W,w))},h)),h.j=y}function Ra(h,y){const w=new fr;if(d.Image){const R=new Image;R.onload=D(mr,w,"TestLoadImage: loaded",!0,y,R),R.onerror=D(mr,w,"TestLoadImage: error",!1,y,R),R.onabort=D(mr,w,"TestLoadImage: abort",!1,y,R),R.ontimeout=D(mr,w,"TestLoadImage: timeout",!1,y,R),d.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=h}else y(!1)}function kr(h,y){const w=new fr,R=new AbortController,W=setTimeout(()=>{R.abort(),mr(w,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:R.signal}).then(ee=>{clearTimeout(W),ee.ok?mr(w,"TestPingServer: ok",!0,y):mr(w,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(W),mr(w,"TestPingServer: error",!1,y)})}function mr(h,y,w,R,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),R(w)}catch{}}function Ca(){this.g=new Ii}function Zr(h,y,w){const R=w||"";try{Xl(h,function(W,ee){let pe=W;g(W)&&(pe=Xn(W)),y.push(R+ee+"="+encodeURIComponent(pe))})}catch(W){throw y.push(R+"type="+encodeURIComponent("_badmap")),W}}function Ts(h){this.l=h.Ub||null,this.j=h.eb||!1}P(Ts,gs),Ts.prototype.g=function(){return new Li(this.l,this.j)},Ts.prototype.i=function(h){return function(){return h}}({});function Li(h,y){xt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Li,xt),t=Li.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ei(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function tu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Jr(this):ei(this),this.readyState==3&&tu(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Jr(this))},t.Qa=function(h){this.g&&(this.response=h,Jr(this))},t.ga=function(){this.g&&Jr(this)};function Jr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ei(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var w=y.next();!w.done;)w=w.value,h.push(w[0]+": "+w[1]),w=y.next();return h.join(`\r
`)};function ei(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function nu(h){let y="";return re(h,function(w,R){y+=R,y+=":",y+=w,y+=`\r
`}),y}function cn(h,y,w){e:{for(R in w){var R=!1;break e}R=!0}R||(w=nu(w),typeof h=="string"?w!=null&&encodeURIComponent(String(w)):ft(h,y,w))}function at(h){xt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(at,xt);var xo=/^https?$/i,Da=["POST","PUT"];t=at.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,w,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Le(this.o):Le(Wr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(ee){ih(this,ee);return}if(h=w||"",w=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var W in R)w.set(W,R[W]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const ee of R.keys())w.set(ee,R.get(ee));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(w.keys()).find(ee=>ee.toLowerCase()=="content-type"),W=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Da,y,void 0))||R||W||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,pe]of w)this.g.setRequestHeader(ee,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ia(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){ih(this,ee)}};function ih(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Ao(h),ti(h)}function Ao(h){h.A||(h.A=!0,nt(h,"complete"),nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nt(this,"complete"),nt(this,"abort"),ti(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ro(this):this.bb())},t.bb=function(){Ro(this)};function Ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||gr(h)!=4||h.Z()!=2)){if(h.u&&gr(h)==4)ln(h.Ea,0,h);else if(nt(h,"readystatechange"),gr(h)==4){h.h=!1;try{const pe=h.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var w;if(!(w=y)){var R;if(R=pe===0){var W=String(h.D).match(Ta)[1]||null;!W&&d.self&&d.self.location&&(W=d.self.location.protocol.slice(0,-1)),R=!xo.test(W?W.toLowerCase():"")}w=R}if(w)nt(h,"complete"),nt(h,"success");else{h.m=6;try{var ee=2<gr(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",Ao(h)}}finally{ti(h)}}}}function ti(h,y){if(h.g){Ia(h);const w=h.g,R=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||nt(h,"ready");try{w.onreadystatechange=R}catch{}}}function Ia(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function gr(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<gr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Di(y)}};function sh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ap(h){const y={};h=(h.g&&2<=gr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<h.length;R++){if(z(h[R]))continue;var w=I(h[R]);const W=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const ee=y[W]||[];y[W]=ee,ee.push(w)}C(y,function(R){return R.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ka(h,y,w){return w&&w.internalChannelParams&&w.internalChannelParams[h]||y}function Co(h){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ka("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ka("baseRetryDelayMs",5e3,h),this.cb=ka("retryDelaySeedMs",1e4,h),this.Wa=ka("forwardChannelMaxRetries",2,h),this.wa=ka("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(h&&h.concurrentRequestLimit),this.Da=new Ca,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Co.prototype,t.la=8,t.G=1,t.connect=function(h,y,w,R){At(0),this.W=h,this.H=y||{},w&&R!==void 0&&(this.H.OSID=w,this.H.OAID=R),this.F=this.X,this.I=fh(this,null,this.W),Io(this)};function ru(h){if(ah(h),h.G==3){var y=h.U++,w=Zn(h.I);if(ft(w,"SID",h.K),ft(w,"RID",y),ft(w,"TYPE","terminate"),Oa(h,w),y=new jn(h,h.j,y),y.L=2,y.v=xa(Zn(w)),w=!1,d.navigator&&d.navigator.sendBeacon)try{w=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!w&&d.Image&&(new Image().src=y.v,w=!0),w||(y.g=dh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),wa(y)}hh(h)}function Do(h){h.g&&(Ma(h),h.g.cancel(),h.g=null)}function ah(h){Do(h),h.u&&(d.clearTimeout(h.u),h.u=null),ko(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Io(h){if(!Eo(h.h)&&!h.s){h.s=!0;var y=h.Ga;ie||L(),fe||(ie(),fe=!0),ye.add(y,h),h.B=0}}function op(h,y){return wo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=$t(T(h.Ga,h,y),au(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const W=new jn(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=S(ee),V(ee,this.S)):ee=this.S),this.m!==null||this.O||(W.H=ee,ee=null),this.P)e:{for(var y=0,w=0;w<this.i.length;w++){t:{var R=this.i[w];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(y+=R,4096<y){y=w;break e}if(y===4096||w===this.i.length-1){y=w+1;break e}}y=1e3}else y=1e3;y=oh(this,W,y),w=Zn(this.I),ft(w,"RID",h),ft(w,"CVER",22),this.D&&ft(w,"X-HTTP-Session-Id",this.D),Oa(this,w),ee&&(this.O?y="headers="+encodeURIComponent(String(nu(ee)))+"&"+y:this.m&&cn(w,this.m,ee)),bo(this.h,W),this.Ua&&ft(w,"TYPE","init"),this.P?(ft(w,"$req",y),ft(w,"SID","null"),W.T=!0,Ir(W,w,null)):Ir(W,w,y),this.G=2}}else this.G==3&&(h?iu(this,h):this.i.length==0||Eo(this.h)||iu(this))};function iu(h,y){var w;y?w=y.l:w=h.U++;const R=Zn(h.I);ft(R,"SID",h.K),ft(R,"RID",w),ft(R,"AID",h.T),Oa(h,R),h.m&&h.o&&cn(R,h.m,h.o),w=new jn(h,h.j,w,h.B+1),h.m===null&&(w.H=h.o),y&&(h.i=y.D.concat(h.i)),y=oh(h,w,1e3),w.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),bo(h.h,w),Ir(w,R,y)}function Oa(h,y){h.H&&re(h.H,function(w,R){ft(y,R,w)}),h.l&&Xl({},function(w,R){ft(y,R,w)})}function oh(h,y,w){w=Math.min(h.i.length,w);var R=h.l?T(h.l.Na,h.l,h):null;e:{var W=h.i;let ee=-1;for(;;){const pe=["count="+w];ee==-1?0<w?(ee=W[0].g,pe.push("ofs="+ee)):ee=0:pe.push("ofs="+ee);let Ke=!0;for(let tn=0;tn<w;tn++){let Xe=W[tn].g;const hn=W[tn].map;if(Xe-=ee,0>Xe)ee=Math.max(0,W[tn].g-100),Ke=!1;else try{Zr(hn,pe,"req"+Xe+"_")}catch{R&&R(hn)}}if(Ke){R=pe.join("&");break e}}}return h=h.i.splice(0,w),y.D=h,R}function lh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;ie||L(),fe||(ie(),fe=!0),ye.add(y,h),h.v=0}}function su(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=$t(T(h.Fa,h),au(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=$t(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Do(this),uh(this))};function Ma(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function uh(h){h.g=new jn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Zn(h.qa);ft(y,"RID","rpc"),ft(y,"SID",h.K),ft(y,"AID",h.T),ft(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&ft(y,"TO",h.ja),ft(y,"TYPE","xmlhttp"),Oa(h,y),h.m&&h.o&&cn(y,h.m,h.o),h.L&&(h.g.I=h.L);var w=h.g;h=h.ia,w.L=1,w.v=xa(Zn(y)),w.m=null,w.P=!0,Oi(w,h)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),su(this),At(19))};function ko(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ch(h,y){var w=null;if(h.g==y){ko(h),Ma(h),h.g=null;var R=2}else if(Ql(h.h,y))w=y.D,Ln(h.h,y),R=1;else return;if(h.G!=0){if(y.o)if(R==1){w=y.m?y.m.length:0,y=Date.now()-y.F;var W=h.B;R=Gr(),nt(R,new en(R,w)),Io(h)}else lh(h);else if(W=y.s,W==3||W==0&&0<y.X||!(R==1&&op(h,y)||R==2&&su(h)))switch(w&&0<w.length&&(y=h.h,y.i=y.i.concat(w)),W){case 1:Ui(h,5);break;case 4:Ui(h,10);break;case 3:Ui(h,6);break;default:Ui(h,2)}}}function au(h,y){let w=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(w*=2),w*y}function Ui(h,y){if(h.j.info("Error code "+y),y==2){var w=T(h.fb,h),R=h.Xa;const W=!R;R=new Ft(R||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Sa(R,"https"),xa(R),W?Ra(R.toString(),w):kr(R.toString(),w)}else At(2);h.G=0,h.l&&h.l.sa(y),hh(h),ah(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function hh(h){if(h.G=0,h.ka=[],h.l){const y=Kl(h.h);(y.length!=0||h.i.length!=0)&&(N(h.ka,y),N(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function fh(h,y,w){var R=w instanceof Ft?Zn(w):new Ft(w);if(R.g!="")y&&(R.g=y+"."+R.g),bs(R,R.s);else{var W=d.location;R=W.protocol,y=y?y+"."+W.hostname:W.hostname,W=+W.port;var ee=new Ft(null);R&&Sa(ee,R),y&&(ee.g=y),W&&bs(ee,W),w&&(ee.l=w),R=ee}return w=h.D,y=h.ya,w&&y&&ft(R,w,y),ft(R,"VER",h.la),Oa(h,R),R}function dh(h,y,w){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new at(new Ts({eb:w})):new at(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ph(){}t=ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(h,y){return new Un(h,y)};function Un(h,y){xt.call(this),this.g=new Co(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!z(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!z(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new ni(this)}P(Un,xt),Un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Un.prototype.close=function(){ru(this.g)},Un.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var w={};w.__data__=h,h=w}else this.u&&(w={},w.__data__=Xn(h),h=w);y.i.push(new th(y.Ya++,h)),y.G==3&&Io(y)},Un.prototype.N=function(){this.g.l=null,delete this.j,ru(this.g),delete this.g,Un.aa.N.call(this)};function mh(h){et.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const w in y){h=w;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}P(mh,et);function gh(){un.call(this),this.status=1}P(gh,un);function ni(h){this.g=h}P(ni,ph),ni.prototype.ua=function(){nt(this.g,"a")},ni.prototype.ta=function(h){nt(this.g,new mh(h))},ni.prototype.sa=function(h){nt(this.g,new gh)},ni.prototype.ra=function(){nt(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,Un.prototype.send=Un.prototype.o,Un.prototype.open=Un.prototype.m,Un.prototype.close=Un.prototype.close,hS=function(){return new Oo},cS=function(){return Gr()},uS=Ue,Qg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,$f=Es,ki.COMPLETE="complete",lS=ki,st.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",xt.prototype.listen=xt.prototype.K,rc=st,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,oS=at}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});const Yw="@firebase/firestore",Gw="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mn.UNAUTHENTICATED=new Mn(null),Mn.GOOGLE_CREDENTIALS=new Mn("google-credentials-uid"),Mn.FIRST_PARTY=new Mn("first-party-uid"),Mn.MOCK_USER=new Mn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Cy("@firebase/firestore");function ul(){return co.logLevel}function _e(t,...e){if(co.logLevel<=Ge.DEBUG){const n=e.map(Uy);co.debug(`Firestore (${ql}): ${t}`,...n)}}function hs(t,...e){if(co.logLevel<=Ge.ERROR){const n=e.map(Uy);co.error(`Firestore (${ql}): ${t}`,...n)}}function Al(t,...e){if(co.logLevel<=Ge.WARN){const n=e.map(Uy);co.warn(`Firestore (${ql}): ${t}`,...n)}}function Uy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Oe(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,fS(t,i,n)}function fS(t,e,n){let i=`FIRESTORE (${ql}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw hs(i),new Error(i)}function lt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||fS(e,a,i)}function je(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends ds{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mn.UNAUTHENTICATED))}shutdown(){}}class DN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IN{constructor(e){this.t=e,this.currentUser=Mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new os;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new os,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new os)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new dS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Mn(e)}}class kN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ON{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new kN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Mn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ww{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const i=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ww(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ww(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=NN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function We(t,e){return t<e?-1:t>e?1:0}function Kg(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return yg(a)===yg(l)?We(a,l):yg(a)?1:-1}return We(t.length,e.length)}const PN=55296,VN=57343;function yg(t){const e=t.charCodeAt(0);return e>=PN&&e<=VN}function Rl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="__name__";class ci{constructor(e,n,i){n===void 0?n=0:n>e.length&&Oe(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Oe(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ci?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=ci.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const i=ci.isNumericId(e),a=ci.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?ci.extractNumericId(e).compare(ci.extractNumericId(n)):Kg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ia.fromString(e.substring(4,e.length-2))}}class bt extends ci{construct(e,n,i){return new bt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(ae.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const jN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class An extends ci{construct(e,n,i){return new An(e,n,i)}static isValidIdentifier(e){return jN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),An.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qw}static keyField(){return new An([Qw])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ge(ae.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(ae.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ae.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ge(ae.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new An(n)}static emptyPath(){return new An([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.path=e}static fromPath(e){return new Ae(bt.fromString(e))}static fromName(e){return new Ae(bt.fromString(e).popFirst(5))}static empty(){return new Ae(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ae(new bt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e,n){if(!n)throw new ge(ae.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LN(t,e,n,i){if(e===!0&&i===!0)throw new ge(ae.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kw(t){if(!Ae.isDocumentKey(t))throw new ge(ae.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xw(t){if(Ae.isDocumentKey(t))throw new ge(ae.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe(12329,{type:typeof t})}function ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kd(t);throw new ge(ae.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Zt(t,e){const n={typeString:t};return e&&(n.value=e),n}function zc(t,e){if(!mS(t))throw new ge(ae.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ge(ae.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=-62135596800,Jw=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Jw);return new vt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zw)throw new ge(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jw}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zc(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Zt("string",vt._jsonSchemaVersion),seconds:Zt("number"),nanoseconds:Zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new vt(0,0))}static max(){return new Ve(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bc=-1;function UN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Ve.fromTimestamp(i===1e9?new vt(n+1,0):new vt(n,i));return new aa(a,Ae.empty(),e)}function qN(t){return new aa(t.readTime,t.key,bc)}class aa{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new aa(Ve.min(),Ae.empty(),bc)}static max(){return new aa(Ve.max(),Ae.empty(),bc)}}function BN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ae.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $N{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){if(t.code!==ae.FAILED_PRECONDITION||t.message!==zN)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ue((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ue?n:ue.resolve(n)}catch(n){return ue.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.reject(n)}static resolve(e){return new ue((n,i)=>{n(e)})}static reject(e){return new ue((n,i)=>{i(e)})}static waitFor(e){return new ue((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=ue.resolve(!1);for(const i of e)n=n.next(a=>a?ue.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new ue((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new ue((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function FN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Od.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=-1;function Md(t){return t==null}function ld(t){return t===0&&1/t==-1/0}function HN(t){return typeof t=="number"&&Number.isInteger(t)&&!ld(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="";function YN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=eb(e)),e=GN(t.get(n),e);return eb(e)}function GN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case gS:n+="";break;default:n+=l}}return n}function eb(t){return t+gS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ga(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.comparator=e,this.root=n||xn.EMPTY}insert(e,n){return new Nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xn.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tf(this.root,e,this.comparator,!0)}}class Tf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??xn.RED,this.left=a??xn.EMPTY,this.right=l??xn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new xn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return xn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return xn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Oe(27949);return e+(this.isRed()?0:1)}}xn.EMPTY=null,xn.RED=!0,xn.BLACK=!1;xn.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe(57766)}get value(){throw Oe(16141)}get color(){throw Oe(16727)}get left(){throw Oe(29726)}get right(){throw Oe(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new xn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nb(this.data.getIterator())}getIteratorFrom(e){return new nb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new an(this.comparator);return n.data=e,n}}class nb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.fields=e,e.sort(An.comparator)}static empty(){return new lr([])}unionWith(e){let n=new an(An.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new lr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class _S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new _S("Invalid base64 string: "+l):l}}(e);return new Rn(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rn.EMPTY_BYTE_STRING=new Rn("");const WN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oa(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=WN.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:zt(t.seconds),nanos:zt(t.nanos)}}function zt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function la(t){return typeof t=="string"?Rn.fromBase64String(t):Rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="server_timestamp",ES="__type__",wS="__previous_value__",bS="__local_write_time__";function zy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ES])==null?void 0:i.stringValue)===vS}function Nd(t){const e=t.mapValue.fields[wS];return zy(e)?Nd(e):e}function Tc(t){const e=oa(t.mapValue.fields[bS].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const ud="(default)";class Sc{constructor(e,n){this.projectId=e,this.database=n||ud}static empty(){return new Sc("","")}get isDefaultDatabase(){return this.database===ud}isEqual(e){return e instanceof Sc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="__type__",KN="__max__",Sf={mapValue:{}},SS="__vector__",cd="value";function ua(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zy(t)?4:ZN(t)?9007199254740991:XN(t)?10:11:Oe(28295,{value:t})}function wi(t,e){if(t===e)return!0;const n=ua(t);if(n!==ua(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tc(t).isEqual(Tc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=oa(a.timestampValue),d=oa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return la(a.bytesValue).isEqual(la(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return zt(a.geoPointValue.latitude)===zt(l.geoPointValue.latitude)&&zt(a.geoPointValue.longitude)===zt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return zt(a.integerValue)===zt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=zt(a.doubleValue),d=zt(l.doubleValue);return c===d?ld(c)===ld(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Rl(t.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(tb(c)!==tb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!wi(c[p],d[p])))return!1;return!0}(t,e);default:return Oe(52216,{left:t})}}function xc(t,e){return(t.values||[]).find(n=>wi(n,e))!==void 0}function Cl(t,e){if(t===e)return 0;const n=ua(t),i=ua(e);if(n!==i)return We(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=zt(l.integerValue||l.doubleValue),p=zt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return rb(t.timestampValue,e.timestampValue);case 4:return rb(Tc(t),Tc(e));case 5:return Kg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=la(l),p=la(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=We(d[g],p[g]);if(v!==0)return v}return We(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=We(zt(l.latitude),zt(c.latitude));return d!==0?d:We(zt(l.longitude),zt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ib(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,D,P,q;const d=l.fields||{},p=c.fields||{},g=(T=d[cd])==null?void 0:T.arrayValue,v=(D=p[cd])==null?void 0:D.arrayValue,E=We(((P=g==null?void 0:g.values)==null?void 0:P.length)||0,((q=v==null?void 0:v.values)==null?void 0:q.length)||0);return E!==0?E:ib(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===Sf.mapValue&&c===Sf.mapValue)return 0;if(l===Sf.mapValue)return 1;if(c===Sf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const T=Kg(p[E],v[E]);if(T!==0)return T;const D=Cl(d[p[E]],g[v[E]]);if(D!==0)return D}return We(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Oe(23264,{he:n})}}function rb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=oa(t),i=oa(e),a=We(n.seconds,i.seconds);return a!==0?a:We(n.nanos,i.nanos)}function ib(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=Cl(n[a],i[a]);if(l)return l}return We(n.length,i.length)}function Dl(t){return Xg(t)}function Xg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=oa(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return la(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Xg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Xg(n.fields[c])}`;return a+"}"}(t.mapValue):Oe(61005,{value:t})}function Ff(t){switch(ua(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(t);return e?16+Ff(e):16;case 5:return 2*t.stringValue.length;case 6:return la(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Ff(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return ga(i.fields,(l,c)=>{a+=l.length+Ff(c)}),a}(t.mapValue);default:throw Oe(13486,{value:t})}}function sb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zg(t){return!!t&&"integerValue"in t}function $y(t){return!!t&&"arrayValue"in t}function ab(t){return!!t&&"nullValue"in t}function ob(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hf(t){return!!t&&"mapValue"in t}function XN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[TS])==null?void 0:i.stringValue)===SS}function hc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ga(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=hc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hc(t.arrayValue.values[n]);return e}return{...t}}function ZN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===KN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.value=e}static empty(){return new Wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Hf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hc(n)}setAll(e){let n=An.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=hc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Hf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Hf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){ga(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Wn(hc(this.value))}}function xS(t){const e=[];return ga(t.fields,(n,i)=>{const a=new An([n]);if(Hf(i)){const l=xS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new lr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Nn(e,0,Ve.min(),Ve.min(),Ve.min(),Wn.empty(),0)}static newFoundDocument(e,n,i,a){return new Nn(e,1,n,Ve.min(),i,a,0)}static newNoDocument(e,n){return new Nn(e,2,n,Ve.min(),Ve.min(),Wn.empty(),0)}static newUnknownDocument(e,n){return new Nn(e,3,n,Ve.min(),Ve.min(),Wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hd{constructor(e,n){this.position=e,this.inclusive=n}}function lb(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Ae.comparator(Ae.fromName(c.referenceValue),n.key):i=Cl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function ub(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function JN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class AS{}class Xt extends AS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new t2(e,n,i):n==="array-contains"?new i2(e,i):n==="in"?new s2(e,i):n==="not-in"?new a2(e,i):n==="array-contains-any"?new o2(e,i):new Xt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new n2(e,i):new r2(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cl(n,this.value)):n!==null&&ua(this.value)===ua(n)&&this.matchesComparison(Cl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $r extends AS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new $r(e,n)}matches(e){return RS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function RS(t){return t.op==="and"}function CS(t){return e2(t)&&RS(t)}function e2(t){for(const e of t.filters)if(e instanceof $r)return!1;return!0}function Jg(t){if(t instanceof Xt)return t.field.canonicalString()+t.op.toString()+Dl(t.value);if(CS(t))return t.filters.map(e=>Jg(e)).join(",");{const e=t.filters.map(n=>Jg(n)).join(",");return`${t.op}(${e})`}}function DS(t,e){return t instanceof Xt?function(i,a){return a instanceof Xt&&i.op===a.op&&i.field.isEqual(a.field)&&wi(i.value,a.value)}(t,e):t instanceof $r?function(i,a){return a instanceof $r&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&DS(c,a.filters[d]),!0):!1}(t,e):void Oe(19439)}function IS(t){return t instanceof Xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Dl(n.value)}`}(t):t instanceof $r?function(n){return n.op.toString()+" {"+n.getFilters().map(IS).join(" ,")+"}"}(t):"Filter"}class t2 extends Xt{constructor(e,n,i){super(e,n,i),this.key=Ae.fromName(i.referenceValue)}matches(e){const n=Ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class n2 extends Xt{constructor(e,n){super(e,"in",n),this.keys=kS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r2 extends Xt{constructor(e,n){super(e,"not-in",n),this.keys=kS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Ae.fromName(i.referenceValue))}class i2 extends Xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $y(n)&&xc(n.arrayValue,this.value)}}class s2 extends Xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xc(this.value.arrayValue,n)}}class a2 extends Xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xc(this.value.arrayValue,n)}}class o2 extends Xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$y(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>xc(this.value.arrayValue,i))}}/**
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
 */class l2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function cb(t,e=null,n=[],i=[],a=null,l=null,c=null){return new l2(t,e,n,i,a,l,c)}function Fy(t){const e=je(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Jg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Dl(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Dl(i)).join(",")),e.Te=n}return e.Te}function Hy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!DS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ub(t.startAt,e.startAt)&&ub(t.endAt,e.endAt)}function ey(t){return Ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function u2(t,e,n,i,a,l,c,d){return new $l(t,e,n,i,a,l,c,d)}function Pd(t){return new $l(t)}function hb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OS(t){return t.collectionGroup!==null}function fc(t){const e=je(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new an(An.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Ac(l,i))}),n.has(An.keyField().canonicalString())||e.Ie.push(new Ac(An.keyField(),i))}return e.Ie}function yi(t){const e=je(t);return e.Ee||(e.Ee=c2(e,fc(t))),e.Ee}function c2(t,e){if(t.limitType==="F")return cb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Ac(a.field,l)});const n=t.endAt?new hd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new hd(t.startAt.position,t.startAt.inclusive):null;return cb(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ty(t,e){const n=t.filters.concat([e]);return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ny(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vd(t,e){return Hy(yi(t),yi(e))&&t.limitType===e.limitType}function MS(t){return`${Fy(yi(t))}|lt:${t.limitType}`}function cl(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>IS(a)).join(", ")}]`),Md(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Dl(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Dl(a)).join(",")),`Target(${i})`}(yi(t))}; limitType=${t.limitType})`}function jd(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ae.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of fc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=lb(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,fc(i),a)||i.endAt&&!function(c,d,p){const g=lb(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,fc(i),a))}(t,e)}function h2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NS(t){return(e,n)=>{let i=!1;for(const a of fc(t)){const l=f2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function f2(t,e,n){const i=t.field.isKeyField()?Ae.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Cl(p,g):Oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ga(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return yS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new Nt(Ae.comparator);function fs(){return d2}const PS=new Nt(Ae.comparator);function ic(...t){let e=PS;for(const n of t)e=e.insert(n.key,n);return e}function VS(t){let e=PS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ja(){return dc()}function jS(){return dc()}function dc(){return new po(t=>t.toString(),(t,e)=>t.isEqual(e))}const p2=new Nt(Ae.comparator),m2=new an(Ae.comparator);function Qe(...t){let e=m2;for(const n of t)e=e.add(n);return e}const g2=new an(We);function y2(){return g2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ld(e)?"-0":e}}function LS(t){return{integerValue:""+t}}function _2(t,e){return HN(e)?LS(e):Yy(t,e)}/**
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
 */class Ld{constructor(){this._=void 0}}function v2(t,e,n){return t instanceof Rc?function(a,l){const c={fields:{[ES]:{stringValue:vS},[bS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&zy(l)&&(l=Nd(l)),l&&(c.fields[wS]=l),{mapValue:c}}(n,e):t instanceof Cc?qS(t,e):t instanceof Dc?BS(t,e):function(a,l){const c=US(a,l),d=fb(c)+fb(a.Ae);return Zg(c)&&Zg(a.Ae)?LS(d):Yy(a.serializer,d)}(t,e)}function E2(t,e,n){return t instanceof Cc?qS(t,e):t instanceof Dc?BS(t,e):n}function US(t,e){return t instanceof fd?function(i){return Zg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Rc extends Ld{}class Cc extends Ld{constructor(e){super(),this.elements=e}}function qS(t,e){const n=zS(e);for(const i of t.elements)n.some(a=>wi(a,i))||n.push(i);return{arrayValue:{values:n}}}class Dc extends Ld{constructor(e){super(),this.elements=e}}function BS(t,e){let n=zS(e);for(const i of t.elements)n=n.filter(a=>!wi(a,i));return{arrayValue:{values:n}}}class fd extends Ld{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fb(t){return zt(t.integerValue||t.doubleValue)}function zS(t){return $y(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n){this.field=e,this.transform=n}}function b2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof Cc&&a instanceof Cc||i instanceof Dc&&a instanceof Dc?Rl(i.elements,a.elements,wi):i instanceof fd&&a instanceof fd?wi(i.Ae,a.Ae):i instanceof Rc&&a instanceof Rc}(t.transform,e.transform)}class T2{constructor(e,n){this.version=e,this.transformResults=n}}class qr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qr}static exists(e){return new qr(void 0,e)}static updateTime(e){return new qr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ud{}function $S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HS(t.key,qr.none()):new $c(t.key,t.data,qr.none());{const n=t.data,i=Wn.empty();let a=new an(An.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new ya(t.key,i,new lr(a.toArray()),qr.none())}}function S2(t,e,n){t instanceof $c?function(a,l,c){const d=a.value.clone(),p=pb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof ya?function(a,l,c){if(!Yf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=pb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(FS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function pc(t,e,n,i){return t instanceof $c?function(l,c,d,p){if(!Yf(l.precondition,c))return d;const g=l.value.clone(),v=mb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof ya?function(l,c,d,p){if(!Yf(l.precondition,c))return d;const g=mb(l.fieldTransforms,p,c),v=c.data;return v.setAll(FS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(t,e,n,i):function(l,c,d){return Yf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function x2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=US(i.transform,a||null);l!=null&&(n===null&&(n=Wn.empty()),n.set(i.field,l))}return n||null}function db(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Rl(i,a,(l,c)=>b2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $c extends Ud{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ya extends Ud{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function FS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function pb(t,e,n){const i=new Map;lt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,E2(c,d,n[a]))}return i}function mb(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,v2(l,c,e))}return i}class HS extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A2 extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&S2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=pc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=pc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=jS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=$S(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&Rl(this.mutations,e.mutations,(n,i)=>db(n,i))&&Rl(this.baseMutations,e.baseMutations,(n,i)=>db(n,i))}}class Gy{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){lt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return p2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new Gy(e,n,i,a)}}/**
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
 */class C2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class D2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt,Je;function I2(t){switch(t){case ae.OK:return Oe(64938);case ae.CANCELLED:case ae.UNKNOWN:case ae.DEADLINE_EXCEEDED:case ae.RESOURCE_EXHAUSTED:case ae.INTERNAL:case ae.UNAVAILABLE:case ae.UNAUTHENTICATED:return!1;case ae.INVALID_ARGUMENT:case ae.NOT_FOUND:case ae.ALREADY_EXISTS:case ae.PERMISSION_DENIED:case ae.FAILED_PRECONDITION:case ae.ABORTED:case ae.OUT_OF_RANGE:case ae.UNIMPLEMENTED:case ae.DATA_LOSS:return!0;default:return Oe(15467,{code:t})}}function YS(t){if(t===void 0)return hs("GRPC error has no .code"),ae.UNKNOWN;switch(t){case Qt.OK:return ae.OK;case Qt.CANCELLED:return ae.CANCELLED;case Qt.UNKNOWN:return ae.UNKNOWN;case Qt.DEADLINE_EXCEEDED:return ae.DEADLINE_EXCEEDED;case Qt.RESOURCE_EXHAUSTED:return ae.RESOURCE_EXHAUSTED;case Qt.INTERNAL:return ae.INTERNAL;case Qt.UNAVAILABLE:return ae.UNAVAILABLE;case Qt.UNAUTHENTICATED:return ae.UNAUTHENTICATED;case Qt.INVALID_ARGUMENT:return ae.INVALID_ARGUMENT;case Qt.NOT_FOUND:return ae.NOT_FOUND;case Qt.ALREADY_EXISTS:return ae.ALREADY_EXISTS;case Qt.PERMISSION_DENIED:return ae.PERMISSION_DENIED;case Qt.FAILED_PRECONDITION:return ae.FAILED_PRECONDITION;case Qt.ABORTED:return ae.ABORTED;case Qt.OUT_OF_RANGE:return ae.OUT_OF_RANGE;case Qt.UNIMPLEMENTED:return ae.UNIMPLEMENTED;case Qt.DATA_LOSS:return ae.DATA_LOSS;default:return Oe(39323,{code:t})}}(Je=Qt||(Qt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function k2(){return new TextEncoder}/**
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
 */const O2=new ia([4294967295,4294967295],0);function gb(t){const e=k2().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function yb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ia([n,i],0),new ia([a,l],0)]}class Wy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new sc(`Invalid padding: ${n}`);if(i<0)throw new sc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new sc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new sc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ia.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(ia.fromNumber(i)));return a.compare(O2)===1&&(a=new ia([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gb(e),[i,a]=yb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Wy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=gb(e),[i,a]=yb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class sc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new qd(Ve.min(),a,new Nt(We),fs(),Qe())}}class Fc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Fc(i,n,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class GS{constructor(e,n){this.targetId=e,this.Ce=n}}class WS{constructor(e,n,i=Rn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class _b{constructor(){this.ve=0,this.Fe=vb(),this.Me=Rn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),n=Qe(),i=Qe();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Oe(38017,{changeType:l})}}),new Fc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=vb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class M2{constructor(e){this.Ge=e,this.ze=new Map,this.je=fs(),this.Je=xf(),this.He=xf(),this.Ye=new Nt(We)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(ey(l))if(i===0){const c=new Ae(l.path);this.et(n,c,Nn.newNoDocument(c,Ve.min()))}else lt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=la(i).toUint8Array()}catch(p){if(p instanceof _S)return Al("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Wy(c,a,l)}catch(p){return Al(p instanceof sc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&ey(d.target)){const p=new Ae(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Nn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Qe();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new qd(e,n,this.Ye,this.je,i);return this.je=fs(),this.Je=xf(),this.He=xf(),this.Ye=new Nt(We),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _b,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new an(We),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new an(We),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _b),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xf(){return new Nt(Ae.comparator)}function vb(){return new Nt(Ae.comparator)}const N2={asc:"ASCENDING",desc:"DESCENDING"},P2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V2={and:"AND",or:"OR"};class j2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ry(t,e){return t.useProto3Json||Md(e)?e:{value:e}}function dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function L2(t,e){return dd(t,e.toTimestamp())}function _i(t){return lt(!!t,49232),Ve.fromTimestamp(function(n){const i=oa(n);return new vt(i.seconds,i.nanos)}(t))}function Qy(t,e){return iy(t,e).canonicalString()}function iy(t,e){const n=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KS(t){const e=bt.fromString(t);return lt(tx(e),10190,{key:e.toString()}),e}function sy(t,e){return Qy(t.databaseId,e.path)}function _g(t,e){const n=KS(e);if(n.get(1)!==t.databaseId.projectId)throw new ge(ae.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ge(ae.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ae(ZS(n))}function XS(t,e){return Qy(t.databaseId,e)}function U2(t){const e=KS(t);return e.length===4?bt.emptyPath():ZS(e)}function ay(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZS(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Eb(t,e,n){return{name:sy(t,e),fields:n.value.mapValue.fields}}function q2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Oe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(lt(v===void 0||typeof v=="string",58123),Rn.fromBase64String(v||"")):(lt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Rn.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?ae.UNKNOWN:YS(g.code);return new ge(v,g.message||"")}(c);n=new WS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=_g(t,i.document.name),l=_i(i.document.updateTime),c=i.document.createTime?_i(i.document.createTime):Ve.min(),d=new Wn({mapValue:{fields:i.document.fields}}),p=Nn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Gf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=_g(t,i.document),l=i.readTime?_i(i.readTime):Ve.min(),c=Nn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Gf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=_g(t,i.document),l=i.removedTargetIds||[];n=new Gf([],l,a,null)}else{if(!("filter"in e))return Oe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new D2(a,l),d=i.targetId;n=new GS(d,c)}}return n}function B2(t,e){let n;if(e instanceof $c)n={update:Eb(t,e.key,e.value)};else if(e instanceof HS)n={delete:sy(t,e.key)};else if(e instanceof ya)n={update:Eb(t,e.key,e.data),updateMask:K2(e.fieldMask)};else{if(!(e instanceof A2))return Oe(16599,{Vt:e.type});n={verify:sy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Rc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Cc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Dc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof fd)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Oe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:L2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Oe(27497)}(t,e.precondition)),n}function z2(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?_i(a.updateTime):_i(l);return c.isEqual(Ve.min())&&(c=_i(l)),new T2(c,a.transformResults||[])}(n,e))):[]}function $2(t,e){return{documents:[XS(t,e.path)]}}function F2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=XS(t,a);const l=function(g){if(g.length!==0)return ex($r.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:hl(T.field),direction:G2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=ry(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function H2(t){let e=U2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){lt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(E){const T=JS(E);return T instanceof $r&&CS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(E){return E.map(T=>function(P){return new Ac(fl(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,Md(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(E){const T=!!E.before,D=E.values||[];return new hd(D,T)}(n.startAt));let g=null;return n.endAt&&(g=function(E){const T=!E.before,D=E.values||[];return new hd(D,T)}(n.endAt)),u2(e,a,c,l,d,"F",p,g)}function Y2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=fl(n.unaryFilter.field);return Xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=fl(n.unaryFilter.field);return Xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=fl(n.unaryFilter.field);return Xt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=fl(n.unaryFilter.field);return Xt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Oe(61313);default:return Oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xt.create(fl(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Oe(58110);default:return Oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $r.create(n.compositeFilter.filters.map(i=>JS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Oe(1026)}}(n.compositeFilter.op))}(t):Oe(30097,{filter:t})}function G2(t){return N2[t]}function W2(t){return P2[t]}function Q2(t){return V2[t]}function hl(t){return{fieldPath:t.canonicalString()}}function fl(t){return An.fromServerFormat(t.fieldPath)}function ex(t){return t instanceof Xt?function(n){if(n.op==="=="){if(ob(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NAN"}};if(ab(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ob(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NOT_NAN"}};if(ab(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hl(n.field),op:W2(n.op),value:n.value}}}(t):t instanceof $r?function(n){const i=n.getFilters().map(a=>ex(a));return i.length===1?i[0]:{compositeFilter:{op:Q2(n.op),filters:i}}}(t):Oe(54877,{filter:t})}function K2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,i,a,l=Ve.min(),c=Ve.min(),d=Rn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.yt=e}}function Z2(t){const e=H2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ny(e,e.limit,"L"):e}/**
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
 */class J2{constructor(){this.Cn=new eP}addToCollectionParentIndex(e,n){return this.Cn.add(n),ue.resolve()}getCollectionParents(e,n){return ue.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ue.resolve()}deleteFieldIndex(e,n){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,n){return ue.resolve()}getDocumentsMatchingTarget(e,n){return ue.resolve(null)}getIndexType(e,n){return ue.resolve(0)}getFieldIndexes(e,n){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,n){return ue.resolve(aa.min())}getMinOffsetFromCollectionGroup(e,n){return ue.resolve(aa.min())}updateCollectionGroup(e,n,i){return ue.resolve()}updateIndexEntries(e,n){return ue.resolve()}}class eP{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new an(bt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new an(bt.comparator)).toArray()}}/**
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
 */const wb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nx=41943040;class Gn{static withCacheSize(e){return new Gn(e,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.DEFAULT_COLLECTION_PERCENTILE=10,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gn.DEFAULT=new Gn(nx,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gn.DISABLED=new Gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Il(0)}static cr(){return new Il(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="LruGarbageCollector",tP=1048576;function Tb([t,e],[n,i]){const a=We(t,n);return a===0?We(e,i):a}class nP{constructor(e){this.Ir=e,this.buffer=new an(Tb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Tb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class rP{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(bb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zl(n)?_e(bb,"Ignoring IndexedDB error during garbage collection: ",n):await Bl(n)}await this.Vr(3e5)})}}class iP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return ue.resolve(Od.ce);const i=new nP(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(wb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wb):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,c=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,d=Date.now(),this.removeTargets(e,i,n))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(g=Date.now(),ul()<=Ge.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function sP(t,e){return new iP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.changes=new po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ue.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&pc(i.mutation,a,lr.empty(),vt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Qe()){const a=Ja();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=ic();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Ja();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Qe()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=fs();const c=dc(),d=function(){return dc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof ya)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),pc(v.mutation,g,v.mutation.getFieldMask(),vt.now())):c.set(g.key,lr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new oP(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=dc();let a=new Nt((c,d)=>c-d),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||lr.empty();v=d.applyToLocalView(g,v),i.set(p,v);const E=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,E)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,E=jS();v.forEach(T=>{if(!l.has(T)){const D=$S(n.get(T),i.get(T));D!==null&&E.set(T,D),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return ue.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):ue.resolve(Ja());let d=bc,p=l;return c.next(g=>ue.forEach(g,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?ue.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Qe())).next(v=>({batchId:d,changes:VS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ae(n)).next(i=>{let a=ic();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=ic();return this.indexManager.getCollectionParents(e,l).next(d=>ue.forEach(d,p=>{const g=function(E,T){return new $l(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((E,T)=>{c=c.insert(E,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Nn.newInvalidDocument(v)))});let d=ic();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&pc(v.mutation,g,lr.empty(),vt.now()),jd(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ue.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:_i(a.createTime)}}(n)),ue.resolve()}getNamedQuery(e,n){return ue.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:Z2(a.bundledQuery),readTime:_i(a.readTime)}}(n)),ue.resolve()}}/**
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
 */class cP{constructor(){this.overlays=new Nt(Ae.comparator),this.qr=new Map}getOverlay(e,n){return ue.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ja();return ue.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),ue.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),ue.resolve()}getOverlaysForCollection(e,n,i){const a=Ja(),l=n.length+1,c=new Ae(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ue.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new Nt((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Ja(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ja(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return ue.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new C2(n,i));let l=this.qr.get(n);l===void 0&&(l=Qe(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class hP{constructor(){this.sessionToken=Rn.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ue.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.Qr=new an(gn.$r),this.Ur=new an(gn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new gn(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new gn(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Ae(new bt([])),i=new gn(n,e),a=new gn(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Ae(new bt([])),i=new gn(n,e),a=new gn(n,e+1);let l=Qe();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new gn(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class gn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Ae.comparator(e.key,n.key)||We(e.Yr,n.Yr)}static Kr(e,n){return We(e.Yr,n.Yr)||Ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new an(gn.$r)}checkEmpty(e){return ue.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new R2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new gn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ue.resolve(c)}lookupMutationBatch(e,n){return ue.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return ue.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(this.mutationQueue.length===0?By:this.tr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new gn(n,0),a=new gn(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),ue.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new an(We);return n.forEach(a=>{const l=new gn(a,0),c=new gn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),ue.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Ae.isDocumentKey(l)||(l=l.child(""));const c=new gn(new Ae(l),0);let d=new an(We);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),ue.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){lt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return ue.forEach(n.mutations,a=>{const l=new gn(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new gn(n,0),a=this.Zr.firstAfterOrEqual(i);return ue.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.ri=e,this.docs=function(){return new Nt(Ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ue.resolve(i?i.document.mutableCopy():Nn.newInvalidDocument(n))}getEntries(e,n){let i=fs();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Nn.newInvalidDocument(a))}),ue.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=fs();const c=n.path,d=new Ae(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||BN(qN(v),i)<=0||(a.has(v.key)||jd(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ue.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Oe(9500)}ii(e,n){return ue.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new pP(this)}getSize(e){return ue.resolve(this.size)}}class pP extends aP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),ue.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.persistence=e,this.si=new po(n=>Fy(n),Hy),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Ky,this.targetCount=0,this.ai=Il.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),ue.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Il(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ue.resolve()}updateTargetData(e,n){return this.Pr(n),ue.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ue.waitFor(l).next(()=>a)}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return ue.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),ue.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ue.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ue.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return ue.resolve(i)}containsKey(e,n){return ue.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n){this.ui={},this.overlays={},this.ci=new Od(0),this.li=!1,this.li=!0,this.hi=new hP,this.referenceDelegate=e(this),this.Pi=new mP(this),this.indexManager=new J2,this.remoteDocumentCache=function(a){return new dP(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new X2(n),this.Ii=new uP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new fP(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){_e("MemoryPersistence","Starting transaction:",e);const a=new gP(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return ue.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class gP extends $N{constructor(e){super(),this.currentSequenceNumber=e}}class Xy{constructor(e){this.persistence=e,this.Ri=new Ky,this.Vi=null}static mi(e){return new Xy(e)}get fi(){if(this.Vi)return this.Vi;throw Oe(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),ue.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),ue.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ue.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.fi,i=>{const a=Ae.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ue.or([()=>ue.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class pd{constructor(e,n){this.persistence=e,this.pi=new po(i=>YN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=sP(this,n)}static mi(e,n){return new pd(e,n)}Ei(){}di(e){return ue.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return ue.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?ue.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Ve.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ff(e.data.value)),n}br(e,n,i){return ue.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return ue.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=Qe(),a=Qe();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Zy(e,n.fromCache,i,a)}}/**
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
 */class yP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _P{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return YI()?8:FN(Pn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new yP;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(ul()<=Ge.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",cl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ue.resolve()):(ul()<=Ge.DEBUG&&_e("QueryEngine","Query:",cl(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(ul()<=Ge.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",cl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):ue.resolve())}ys(e,n){if(hb(n))return ue.resolve(null);let i=yi(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=ny(n,null,"F"),i=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,ny(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return hb(n)||a.isEqual(Ve.min())?ue.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?ue.resolve(null):(ul()<=Ge.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),cl(n)),this.vs(e,c,n,UN(a,bc)).next(d=>d))})}Ds(e,n){let i=new an(NS(e));return n.forEach((a,l)=>{jd(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return ul()<=Ge.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",cl(n)),this.ps.getDocumentsMatchingQuery(e,n,aa.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="LocalStore",vP=3e8;class EP{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Nt(We),this.xs=new po(l=>Fy(l),Hy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function wP(t,e,n,i){return new EP(t,e,n,i)}async function ix(t,e){const n=je(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function bP(t,e){const n=je(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const E=g.batch,T=E.keys();let D=ue.resolve();return T.forEach(P=>{D=D.next(()=>v.getEntry(p,P)).next(q=>{const N=g.docVersions.get(P);lt(N!==null,48541),q.version.compareTo(N)<0&&(E.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),v.addEntry(q)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function sx(t){const e=je(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function TP(t,e){const n=je(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,E)=>{const T=a.get(E);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,E).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,E)));let D=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?D=D.withResumeToken(Rn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,i)),a=a.insert(E,D),function(q,N,F){return q.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=vP?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,D,v)&&d.push(n.Pi.updateTargetData(l,D))});let p=fs(),g=Qe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(SP(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Ve.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(E=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return ue.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function SP(t,e,n){let i=Qe(),a=Qe();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=fs();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):_e(Jy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function xP(t,e){const n=je(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=By),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function AP(t,e){const n=je(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,ue.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Js(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function oy(t,e,n){const i=je(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!zl(c))throw c;_e(Jy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Sb(t,e,n){const i=je(t);let a=Ve.min(),l=Qe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const E=je(p),T=E.xs.get(v);return T!==void 0?ue.resolve(E.Ms.get(T)):E.Pi.getTargetData(g,v)}(i,c,yi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Ve.min(),n?l:Qe())).next(d=>(RP(i,h2(e),d),{documents:d,Qs:l})))}function RP(t,e,n){let i=t.Os.get(e)||Ve.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class xb{constructor(){this.activeTargetIds=y2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.Mo=new xb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DP{Oo(e){}shutdown(){}}/**
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
 */const Ab="ConnectivityMonitor";class Rb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(Ab,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(Ab,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Af=null;function ly(){return Af===null?Af=function(){return 268435456+Math.round(2147483648*Math.random())}():Af++,"0x"+Af.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="RestConnection",IP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===ud?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=ly(),d=this.zo(e,n.toUriEncodedString());_e(vg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=jl(g);return this.Jo(e,d,p,i,v).then(E=>(_e(vg,`Received RPC '${e}' ${c}: `,E),E),E=>{throw Al(vg,`RPC '${e}' ${c} failed with error: `,E,"url: ",d,"request:",i),E})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ql}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=IP[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="WebChannelConnection";class MP extends kP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=ly();return new Promise((d,p)=>{const g=new oS;g.setWithCredentials(!0),g.listenOnce(lS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case $f.NO_ERROR:const E=g.getResponseJson();_e(kn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),d(E);break;case $f.TIMEOUT:_e(kn,`RPC '${e}' ${c} timed out`),p(new ge(ae.DEADLINE_EXCEEDED,"Request time out"));break;case $f.HTTP_ERROR:const T=g.getStatus();if(_e(kn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const P=D==null?void 0:D.error;if(P&&P.status&&P.message){const q=function(F){const z=F.toLowerCase().replace(/_/g,"-");return Object.values(ae).indexOf(z)>=0?z:ae.UNKNOWN}(P.status);p(new ge(q,P.message))}else p(new ge(ae.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(ae.UNAVAILABLE,"Connection failed."));break;default:Oe(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{_e(kn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);_e(kn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=ly(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=hS(),d=cS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");_e(kn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const E=c.createWebChannel(v,p);this.I_(E);let T=!1,D=!1;const P=new OP({Yo:N=>{D?_e(kn,`Not sending because RPC '${e}' stream ${a} is closed:`,N):(T||(_e(kn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),T=!0),_e(kn,`RPC '${e}' stream ${a} sending:`,N),E.send(N))},Zo:()=>E.close()}),q=(N,F,z)=>{N.listen(F,M=>{try{z(M)}catch(J){setTimeout(()=>{throw J},0)}})};return q(E,rc.EventType.OPEN,()=>{D||(_e(kn,`RPC '${e}' stream ${a} transport opened.`),P.o_())}),q(E,rc.EventType.CLOSE,()=>{D||(D=!0,_e(kn,`RPC '${e}' stream ${a} transport closed`),P.a_(),this.E_(E))}),q(E,rc.EventType.ERROR,N=>{D||(D=!0,Al(kn,`RPC '${e}' stream ${a} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new ge(ae.UNAVAILABLE,"The operation could not be completed")))}),q(E,rc.EventType.MESSAGE,N=>{var F;if(!D){const z=N.data[0];lt(!!z,16349);const M=z,J=(M==null?void 0:M.error)||((F=M[0])==null?void 0:F.error);if(J){_e(kn,`RPC '${e}' stream ${a} received error:`,J);const $=J.status;let re=function(A){const V=Qt[A];if(V!==void 0)return YS(V)}($),C=J.message;re===void 0&&(re=ae.INTERNAL,C="Unknown error status: "+$+" with message "+J.message),D=!0,P.a_(new ge(re,C)),E.close()}else _e(kn,`RPC '${e}' stream ${a} received:`,z),P.u_(z)}}),q(d,uS.STAT_EVENT,N=>{N.stat===Qg.PROXY?_e(kn,`RPC '${e}' stream ${a} detected buffering proxy`):N.stat===Qg.NOPROXY&&_e(kn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Eg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){return new j2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="PersistentStream";class ox{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ax(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ae.RESOURCE_EXHAUSTED?(hs(n.toString()),hs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ae.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ge(ae.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return _e(Cb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(_e(Cb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NP extends ox{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=q2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ve.min():c.readTime?_i(c.readTime):Ve.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=ay(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=ey(p)?{documents:$2(l,p)}:{query:F2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=QS(l,c.resumeToken);const g=ry(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ve.min())>0){d.readTime=dd(l,c.snapshotVersion.toTimestamp());const g=ry(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=Y2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=ay(this.serializer),n.removeTarget=e,this.q_(n)}}class PP extends ox{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=z2(e.writeResults,e.commitTime),i=_i(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=ay(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>B2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{}class jP extends VP{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ge(ae.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,iy(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ae.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,iy(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ae.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class LP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hs(n),this.aa=!1):_e("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="RemoteStore";class UP{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{mo(this)&&(_e(ho,"Restarting streams for network reachability change."),await async function(p){const g=je(p);g.Ea.add(4),await Hc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await zd(g)}(this))})}),this.Ra=new LP(i,a)}}async function zd(t){if(mo(t))for(const e of t.da)await e(!0)}async function Hc(t){for(const e of t.da)await e(!1)}function lx(t,e){const n=je(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),r_(n)?n_(n):Fl(n).O_()&&t_(n,e))}function e_(t,e){const n=je(t),i=Fl(n);n.Ia.delete(e),i.O_()&&ux(n,e),n.Ia.size===0&&(i.O_()?i.L_():mo(n)&&n.Ra.set("Unknown"))}function t_(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fl(t).Y_(e)}function ux(t,e){t.Va.Ue(e),Fl(t).Z_(e)}function n_(t){t.Va=new M2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Fl(t).start(),t.Ra.ua()}function r_(t){return mo(t)&&!Fl(t).x_()&&t.Ia.size>0}function mo(t){return je(t).Ea.size===0}function cx(t){t.Va=void 0}async function qP(t){t.Ra.set("Online")}async function BP(t){t.Ia.forEach((e,n)=>{t_(t,e)})}async function zP(t,e){cx(t),r_(t)?(t.Ra.ha(e),n_(t)):t.Ra.set("Unknown")}async function $P(t,e,n){if(t.Ra.set("Online"),e instanceof WS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){_e(ho,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await md(t,i)}else if(e instanceof Gf?t.Va.Ze(e):e instanceof GS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ve.min()))try{const i=await sx(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Rn.EMPTY_BYTE_STRING,v.snapshotVersion)),ux(l,p);const E=new Js(v.target,p,g,v.sequenceNumber);t_(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){_e(ho,"Failed to raise snapshot:",i),await md(t,i)}}async function md(t,e,n){if(!zl(e))throw e;t.Ea.add(1),await Hc(t),t.Ra.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e(ho,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zd(t)})}function hx(t,e){return e().catch(n=>md(t,n,e))}async function $d(t){const e=je(t),n=ca(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:By;for(;FP(e);)try{const a=await xP(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,HP(e,a)}catch(a){await md(e,a)}fx(e)&&dx(e)}function FP(t){return mo(t)&&t.Ta.length<10}function HP(t,e){t.Ta.push(e);const n=ca(t);n.O_()&&n.X_&&n.ea(e.mutations)}function fx(t){return mo(t)&&!ca(t).x_()&&t.Ta.length>0}function dx(t){ca(t).start()}async function YP(t){ca(t).ra()}async function GP(t){const e=ca(t);for(const n of t.Ta)e.ea(n.mutations)}async function WP(t,e,n){const i=t.Ta.shift(),a=Gy.from(i,e,n);await hx(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await $d(t)}async function QP(t,e){e&&ca(t).X_&&await async function(i,a){if(function(c){return I2(c)&&c!==ae.ABORTED}(a.code)){const l=i.Ta.shift();ca(i).B_(),await hx(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await $d(i)}}(t,e),fx(t)&&dx(t)}async function Db(t,e){const n=je(t);n.asyncQueue.verifyOperationInProgress(),_e(ho,"RemoteStore received new credentials");const i=mo(n);n.Ea.add(3),await Hc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zd(n)}async function KP(t,e){const n=je(t);e?(n.Ea.delete(2),await zd(n)):e||(n.Ea.add(2),await Hc(n),n.Ra.set("Unknown"))}function Fl(t){return t.ma||(t.ma=function(n,i,a){const l=je(n);return l.sa(),new NP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:qP.bind(null,t),t_:BP.bind(null,t),r_:zP.bind(null,t),H_:$P.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),r_(t)?n_(t):t.Ra.set("Unknown")):(await t.ma.stop(),cx(t))})),t.ma}function ca(t){return t.fa||(t.fa=function(n,i,a){const l=je(n);return l.sa(),new PP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YP.bind(null,t),r_:QP.bind(null,t),ta:GP.bind(null,t),na:WP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await $d(t)):(await t.fa.stop(),t.Ta.length>0&&(_e(ho,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new i_(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ae.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s_(t,e){if(hs("AsyncQueue",`${e}: ${t}`),zl(t))return new ge(ae.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{static emptySet(e){return new _l(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Ae.comparator(n.key,i.key):(n,i)=>Ae.comparator(n.key,i.key),this.keyedMap=ic(),this.sortedSet=new Nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _l)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new _l;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.ga=new Nt(Ae.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Oe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class kl{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new kl(e,n,_l.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class ZP{constructor(){this.queries=kb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=je(n),l=a.queries;a.queries=kb(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ge(ae.ABORTED,"Firestore shutting down"))}}function kb(){return new po(t=>MS(t),Vd)}async function a_(t,e){const n=je(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new XP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=s_(c,`Initialization of query '${cl(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&l_(n)}async function o_(t,e){const n=je(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function JP(t,e){const n=je(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&l_(n)}function e4(t,e,n){const i=je(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function l_(t){t.Ca.forEach(e=>{e.next()})}var uy,Ob;(Ob=uy||(uy={})).Ma="default",Ob.Cache="cache";class u_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new kl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==uy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.key=e}}class mx{constructor(e){this.key=e}}class t4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=NS(e),this.tu=new _l(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Ib,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,E)=>{const T=a.get(v),D=jd(this.query,E)?E:null,P=!!T&&this.mutatedKeys.has(T.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let N=!1;T&&D?T.data.isEqual(D.data)?P!==q&&(i.track({type:3,doc:D}),N=!0):this.su(T,D)||(i.track({type:2,doc:D}),N=!0,(p&&this.eu(D,p)>0||g&&this.eu(D,g)<0)&&(d=!0)):!T&&D?(i.track({type:0,doc:D}),N=!0):T&&!D&&(i.track({type:1,doc:T}),N=!0,(p||g)&&(d=!0)),N&&(D?(c=c.add(D),l=q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,E)=>function(D,P){const q=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe(20277,{Rt:N})}};return q(D)-q(P)}(v.type,E.type)||this.eu(v.doc,E.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new kl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ib,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new mx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new px(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Qe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return kl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const c_="SyncEngine";class n4{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class r4{constructor(e){this.key=e,this.hu=!1}}class i4{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new po(d=>MS(d),Vd),this.Iu=new Map,this.Eu=new Set,this.du=new Nt(Ae.comparator),this.Au=new Map,this.Ru=new Ky,this.Vu={},this.mu=new Map,this.fu=Il.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function s4(t,e,n=!0){const i=wx(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await gx(i,e,n,!0),a}async function a4(t,e){const n=wx(t);await gx(n,e,!0,!1)}async function gx(t,e,n,i){const a=await AP(t.localStore,yi(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await o4(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&lx(t.remoteStore,a),d}async function o4(t,e,n,i,a){t.pu=(E,T,D)=>async function(q,N,F,z){let M=N.view.ru(F);M.Cs&&(M=await Sb(q.localStore,N.query,!1).then(({documents:C})=>N.view.ru(C,M)));const J=z&&z.targetChanges.get(N.targetId),$=z&&z.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(M,q.isPrimaryClient,J,$);return Nb(q,N.targetId,re.au),re.snapshot}(t,E,T,D);const l=await Sb(t.localStore,e,!0),c=new t4(e,l.Qs),d=c.ru(l.documents),p=Fc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Nb(t,n,g.au);const v=new n4(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function l4(t,e,n){const i=je(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Vd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await oy(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&e_(i.remoteStore,a.targetId),cy(i,a.targetId)}).catch(Bl)):(cy(i,a.targetId),await oy(i.localStore,a.targetId,!0))}async function u4(t,e){const n=je(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),e_(n.remoteStore,i.targetId))}async function c4(t,e,n){const i=y4(t);try{const a=await function(c,d){const p=je(c),g=vt.now(),v=d.reduce((D,P)=>D.add(P.key),Qe());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let P=fs(),q=Qe();return p.Ns.getEntries(D,v).next(N=>{P=N,P.forEach((F,z)=>{z.isValidDocument()||(q=q.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,P)).next(N=>{E=N;const F=[];for(const z of d){const M=x2(z,E.get(z.key).overlayedDocument);M!=null&&F.push(new ya(z.key,M,xS(M.value.mapValue),qr.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,F,d)}).next(N=>{T=N;const F=N.applyToLocalDocumentSet(E,q);return p.documentOverlayCache.saveOverlays(D,N.batchId,F)})}).then(()=>({batchId:T.batchId,changes:VS(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Nt(We)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await Yc(i,a.changes),await $d(i.remoteStore)}catch(a){const l=s_(a,"Failed to persist write");n.reject(l)}}async function yx(t,e){const n=je(t);try{const i=await TP(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(lt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?lt(c.hu,14607):a.removedDocuments.size>0&&(lt(c.hu,42227),c.hu=!1))}),await Yc(n,i,e)}catch(i){await Bl(i)}}function Mb(t,e,n){const i=je(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=je(c);p.onlineState=d;let g=!1;p.queries.forEach((v,E)=>{for(const T of E.Sa)T.va(d)&&(g=!0)}),g&&l_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function h4(t,e,n){const i=je(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new Nt(Ae.comparator);c=c.insert(l,Nn.newNoDocument(l,Ve.min()));const d=Qe().add(l),p=new qd(Ve.min(),new Map,new Nt(We),c,d);await yx(i,p),i.du=i.du.remove(l),i.Au.delete(e),h_(i)}else await oy(i.localStore,e,!1).then(()=>cy(i,e,n)).catch(Bl)}async function f4(t,e){const n=je(t),i=e.batch.batchId;try{const a=await bP(n.localStore,e);vx(n,i,null),_x(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Yc(n,a)}catch(a){await Bl(a)}}async function d4(t,e,n){const i=je(t);try{const a=await function(c,d){const p=je(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(E=>(lt(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);vx(i,e,n),_x(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Yc(i,a)}catch(a){await Bl(a)}}function _x(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vx(t,e,n){const i=je(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function cy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||Ex(t,i)})}function Ex(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(e_(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),h_(t))}function Nb(t,e,n){for(const i of n)i instanceof px?(t.Ru.addReference(i.key,e),p4(t,i)):i instanceof mx?(_e(c_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||Ex(t,i.key)):Oe(19791,{wu:i})}function p4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(_e(c_,"New document in limbo: "+n),t.Eu.add(i),h_(t))}function h_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Ae(bt.fromString(e)),i=t.fu.next();t.Au.set(i,new r4(n)),t.du=t.du.insert(n,i),lx(t.remoteStore,new Js(yi(Pd(n.path)),i,"TargetPurposeLimboResolution",Od.ce))}}async function Yc(t,e,n){const i=je(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const E=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){a.push(g);const E=Zy.As(p.targetId,g);l.push(E)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=je(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ue.forEach(g,T=>ue.forEach(T.Es,D=>v.persistence.referenceDelegate.addReference(E,T.targetId,D)).next(()=>ue.forEach(T.ds,D=>v.persistence.referenceDelegate.removeReference(E,T.targetId,D)))))}catch(E){if(!zl(E))throw E;_e(Jy,"Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const D=v.Ms.get(T),P=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(P);v.Ms=v.Ms.insert(T,q)}}}(i.localStore,l))}async function m4(t,e){const n=je(t);if(!n.currentUser.isEqual(e)){_e(c_,"User change. New user:",e.toKey());const i=await ix(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ge(ae.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Yc(n,i.Ls)}}function g4(t,e){const n=je(t),i=n.Au.get(e);if(i&&i.hu)return Qe().add(i.key);{let a=Qe();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function wx(t){const e=je(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=h4.bind(null,e),e.Pu.H_=JP.bind(null,e.eventManager),e.Pu.yu=e4.bind(null,e.eventManager),e}function y4(t){const e=je(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d4.bind(null,e),e}class gd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return wP(this.persistence,new _P,e.initialUser,this.serializer)}Cu(e){return new rx(Xy.mi,this.serializer)}Du(e){return new CP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gd.provider={build:()=>new gd};class _4 extends gd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof pd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new rP(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gn.withCacheSize(this.cacheSizeBytes):Gn.DEFAULT;return new rx(i=>pd.mi(i,n),this.serializer)}}class hy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Mb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=m4.bind(null,this.syncEngine),await KP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZP}()}createDatastore(e){const n=Bd(e.databaseInfo.databaseId),i=function(l){return new MP(l)}(e.databaseInfo);return function(l,c,d,p){return new jP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new UP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Mb(this.syncEngine,n,0),function(){return Rb.v()?new Rb:new DP}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const E=new i4(a,l,c,d,p,g);return v&&(E.gu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=je(a);_e(ho,"RemoteStore shutting down."),l.Ea.add(5),await Hc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}hy.provider={build:()=>new hy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class f_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="FirestoreClient";class v4{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Mn.UNAUTHENTICATED,this.clientId=qy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{_e(ha,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(_e(ha,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=s_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function wg(t,e){t.asyncQueue.verifyOperationInProgress(),_e(ha,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await ix(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E4(t);_e(ha,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Db(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>Db(e.remoteStore,a)),t._onlineComponents=e}async function E4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_e(ha,"Using user provided OfflineComponentProvider");try{await wg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===ae.FAILED_PRECONDITION||a.code===ae.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Al("Error using user provided cache. Falling back to memory cache: "+n),await wg(t,new gd)}}else _e(ha,"Using default OfflineComponentProvider"),await wg(t,new _4(void 0));return t._offlineComponents}async function bx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_e(ha,"Using user provided OnlineComponentProvider"),await Pb(t,t._uninitializedComponentsProvider._online)):(_e(ha,"Using default OnlineComponentProvider"),await Pb(t,new hy))),t._onlineComponents}function w4(t){return bx(t).then(e=>e.syncEngine)}async function yd(t){const e=await bx(t),n=e.eventManager;return n.onListen=s4.bind(null,e.syncEngine),n.onUnlisten=l4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=a4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=u4.bind(null,e.syncEngine),n}function b4(t,e,n={}){const i=new os;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new f_({next:T=>{v.Nu(),c.enqueueAndForget(()=>o_(l,E));const D=T.docs.has(d);!D&&T.fromCache?g.reject(new ge(ae.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&T.fromCache&&p&&p.source==="server"?g.reject(new ge(ae.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new u_(Pd(d.path),v,{includeMetadataChanges:!0,qa:!0});return a_(l,E)}(await yd(t),t.asyncQueue,e,n,i)),i.promise}function T4(t,e,n={}){const i=new os;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new f_({next:T=>{v.Nu(),c.enqueueAndForget(()=>o_(l,E)),T.fromCache&&p.source==="server"?g.reject(new ge(ae.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new u_(d,v,{includeMetadataChanges:!0,qa:!0});return a_(l,E)}(await yd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function Tx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="firestore.googleapis.com",jb=!0;class Lb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sx,this.ssl=jb}else this.host=e.host,this.ssl=e.ssl??jb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new ge(ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ge(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ge(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ge(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new CN;switch(i.type){case"firstParty":return new ON(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Vb.get(n);i&&(_e("ComponentProvider","Removing Datastore"),Vb.delete(n),i.terminate())}(this),Promise.resolve()}}function S4(t,e,n,i={}){var g;t=ur(t,Fd);const a=jl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(_1(`https://${d}`),v1("Firestore",!0)),l.host!==Sx&&l.host!==d&&Al("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!ao(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,E;if(typeof i.mockUserToken=="string")v=i.mockUserToken,E=Mn.MOCK_USER;else{v=jI(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ge(ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Mn(T)}t._authCredentials=new DN(new dS(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class jt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(zc(n,jt._jsonSchema))return new jt(e,i||null,new Ae(bt.fromString(n.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:Zt("string",jt._jsonSchemaVersion),referencePath:Zt("string")};class sa extends _a{constructor(e,n,i){super(e,n,Pd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new Ae(e))}withConverter(e){return new sa(this.firestore,e,this._path)}}function Rr(t,e,...n){if(t=Jt(t),pS("collection","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Xw(i),new sa(t,null,i)}{if(!(t instanceof jt||t instanceof sa))throw new ge(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Xw(i),new sa(t.firestore,null,i)}}function zn(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=qy.newId()),pS("doc","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Kw(i),new jt(t,null,new Ae(i))}{if(!(t instanceof jt||t instanceof sa))throw new ge(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Kw(i),new jt(t.firestore,t instanceof sa?t.converter:null,new Ae(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="AsyncQueue";class qb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ax(this,"async_queue_retry"),this._c=()=>{const i=Eg();i&&_e(Ub,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Eg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Eg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new os;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zl(e))throw e;_e(Ub,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,hs("INTERNAL UNHANDLED ERROR: ",Bb(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=i_.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Oe(47125,{Pc:Bb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function zb(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class fa extends Fd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new qb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qb(e),this._firestoreClient=void 0,await e}}}function xx(t,e){const n=typeof t=="object"?t:T1(),i=typeof t=="string"?t:ud,a=Iy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=PI("firestore");l&&S4(a,...l)}return a}function Hd(t){if(t._terminated)throw new ge(ae.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||x4(t),t._firestoreClient}function x4(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new QN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Tx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new v4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ar(Rn.fromBase64String(e))}catch(n){throw new ge(ae.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ar(Rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ar._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zc(e,Ar._jsonSchema))return Ar.fromBase64String(e.bytes)}}Ar._jsonSchemaVersion="firestore/bytes/1.0",Ar._jsonSchema={type:Zt("string",Ar._jsonSchemaVersion),bytes:Zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(ae.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new An(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(ae.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(ae.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vi._jsonSchemaVersion}}static fromJSON(e){if(zc(e,vi._jsonSchema))return new vi(e.latitude,e.longitude)}}vi._jsonSchemaVersion="firestore/geoPoint/1.0",vi._jsonSchema={type:Zt("string",vi._jsonSchemaVersion),latitude:Zt("number"),longitude:Zt("number")};/**
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
 */class Ei{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ei._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zc(e,Ei._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ei(e.vectorValues);throw new ge(ae.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ei._jsonSchemaVersion="firestore/vectorValue/1.0",Ei._jsonSchema={type:Zt("string",Ei._jsonSchemaVersion),vectorValues:Zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=/^__.*__$/;class R4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ya(e,this.data,this.fieldMask,n,this.fieldTransforms):new $c(e,this.data,n,this.fieldTransforms)}}class Ax{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ya(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe(40011,{Ac:t})}}class d_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new d_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _d(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Rx(this.Ac)&&A4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class C4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Bd(e)}Cc(e,n,i,a=!1){return new d_({Ac:e,methodName:n,Dc:i,path:An.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(t){const e=t._freezeSettings(),n=Bd(t._databaseId);return new C4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);m_("Data must be an object, but it was:",c,i);const d=Dx(i,c);let p,g;if(l.merge)p=new lr(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const T=fy(e,E,n);if(!c.contains(T))throw new ge(ae.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);kx(v,T)||v.push(T)}p=new lr(v),g=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,g=c.fieldTransforms;return new R4(new Wn(d),p,g)}class Qd extends Gd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qd}}class p_ extends Gd{_toFieldTransform(e){return new w2(e.path,new Rc)}isEqual(e){return e instanceof p_}}function D4(t,e,n,i){const a=t.Cc(1,e,n);m_("Data must be an object, but it was:",a,i);const l=[],c=Wn.empty();ga(i,(p,g)=>{const v=g_(e,p,n);g=Jt(g);const E=a.yc(v);if(g instanceof Qd)l.push(v);else{const T=Gc(g,E);T!=null&&(l.push(v),c.set(v,T))}});const d=new lr(l);return new Ax(c,d,a.fieldTransforms)}function I4(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[fy(e,i,n)],p=[a];if(l.length%2!=0)throw new ge(ae.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(fy(e,l[T])),p.push(l[T+1]);const g=[],v=Wn.empty();for(let T=d.length-1;T>=0;--T)if(!kx(g,d[T])){const D=d[T];let P=p[T];P=Jt(P);const q=c.yc(D);if(P instanceof Qd)g.push(D);else{const N=Gc(P,q);N!=null&&(g.push(D),v.set(D,N))}}const E=new lr(g);return new Ax(v,E,c.fieldTransforms)}function k4(t,e,n,i=!1){return Gc(n,t.Cc(i?4:3,e))}function Gc(t,e){if(Ix(t=Jt(t)))return m_("Unsupported field value:",e,t),Dx(t,e);if(t instanceof Gd)return function(i,a){if(!Rx(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Gc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return _2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:dd(a.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:dd(a.serializer,l)}}if(i instanceof vi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ar)return{bytesValue:QS(a.serializer,i._byteString)};if(i instanceof jt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof Ei)return function(c,d){return{mapValue:{fields:{[TS]:{stringValue:SS},[cd]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return Yy(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${kd(i)}`)}(t,e)}function Dx(t,e){const n={};return yS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ga(t,(i,a)=>{const l=Gc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Ix(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof vi||t instanceof Ar||t instanceof jt||t instanceof Gd||t instanceof Ei)}function m_(t,e,n){if(!Ix(n)||!mS(n)){const i=kd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function fy(t,e,n){if((e=Jt(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return g_(t,e);throw _d("Field path arguments must be of type string or ",t,!1,void 0,n)}const O4=new RegExp("[~\\*/\\[\\]]");function g_(t,e,n){if(e.search(O4)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _d(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ge(ae.INVALID_ARGUMENT,d+t+p)}function kx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M4 extends Ox{data(){return super.data()}}function Kd(t,e){return typeof e=="string"?g_(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ge(ae.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class y_{}class Nx extends y_{}function di(t,e,...n){let i=[];e instanceof y_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof __).length,d=l.filter(p=>p instanceof Xd).length;if(c>1||c>0&&d>0)throw new ge(ae.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Xd extends Nx{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Xd(e,n,i)}_apply(e){const n=this._parse(e);return Px(e._query,n),new _a(e.firestore,e.converter,ty(e._query,n))}_parse(e){const n=Wd(e.firestore);return function(l,c,d,p,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ge(ae.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Fb(E,v);const P=[];for(const q of E)P.push($b(p,l,q));T={arrayValue:{values:P}}}else T=$b(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Fb(E,v),T=k4(d,c,E,v==="in"||v==="not-in");return Xt.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Cr(t,e,n){const i=e,a=Kd("where",t);return Xd._create(a,i,n)}class __ extends y_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new __(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:$r.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Px(c,p),c=ty(c,p)}(e._query,n),new _a(e.firestore,e.converter,ty(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class v_ extends Nx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new v_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ge(ae.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ge(ae.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ac(l,c)}(e._query,this._field,this._direction);return new _a(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new $l(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function E_(t,e="asc"){const n=e,i=Kd("orderBy",t);return v_._create(i,n)}function $b(t,e,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new ge(ae.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OS(e)&&n.indexOf("/")!==-1)throw new ge(ae.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(bt.fromString(n));if(!Ae.isDocumentKey(i))throw new ge(ae.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return sb(t,new Ae(i))}if(n instanceof jt)return sb(t,n._key);throw new ge(ae.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kd(n)}.`)}function Fb(t,e){if(!Array.isArray(t)||t.length===0)throw new ge(ae.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Px(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ge(ae.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(ae.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class N4{convertValue(e,n="none"){switch(ua(e)){case 0:return null;case 1:return e.booleanValue;case 2:return zt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(la(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ga(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[cd].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>zt(c.doubleValue));return new Ei(n)}convertGeoPoint(e){return new vi(zt(e.latitude),zt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Nd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Tc(e));default:return null}}convertTimestamp(e){const n=oa(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=bt.fromString(e);lt(tx(i),9688,{name:e});const a=new Sc(i.get(1),i.get(3)),l=new Ae(i.popFirst(5));return a.isEqual(n)||hs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class ac{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class no extends Ox{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Kd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ae.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=no._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}no._jsonSchemaVersion="firestore/documentSnapshot/1.0",no._jsonSchema={type:Zt("string",no._jsonSchemaVersion),bundleSource:Zt("string","DocumentSnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class Wf extends no{data(e={}){return super.data(e)}}class ro{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ac(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Wf(this._firestore,this._userDataWriter,i.key,i,new ac(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(ae.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ac(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ac(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:P4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ae.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function P4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){t=ur(t,jt);const e=ur(t.firestore,fa);return b4(Hd(e),t._key).then(n=>jx(e,t,n))}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:Zt("string",ro._jsonSchemaVersion),bundleSource:Zt("string","QuerySnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class w_ extends N4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function mc(t){t=ur(t,_a);const e=ur(t.firestore,fa),n=Hd(e),i=new w_(e);return Mx(t._query),T4(n,t._query).then(a=>new ro(e,i,t,a))}function V4(t,e,n){t=ur(t,jt);const i=ur(t.firestore,fa),a=Vx(t.converter,e);return b_(i,[Cx(Wd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,qr.none())])}function fi(t,e,n,...i){t=ur(t,jt);const a=ur(t.firestore,fa),l=Wd(a);let c;return c=typeof(e=Jt(e))=="string"||e instanceof Yd?I4(l,"updateDoc",t._key,e,n,i):D4(l,"updateDoc",t._key,e),b_(a,[c.toMutation(t._key,qr.exists(!0))])}function j4(t,e){const n=ur(t.firestore,fa),i=zn(t),a=Vx(t.converter,e);return b_(n,[Cx(Wd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,qr.exists(!1))]).then(()=>i)}function Jd(t,...e){var p,g,v;t=Jt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||zb(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(zb(e[i])){const E=e[i];e[i]=(p=E.next)==null?void 0:p.bind(E),e[i+1]=(g=E.error)==null?void 0:g.bind(E),e[i+2]=(v=E.complete)==null?void 0:v.bind(E)}let l,c,d;if(t instanceof jt)c=ur(t.firestore,fa),d=Pd(t._key.path),l={next:E=>{e[i]&&e[i](jx(c,t,E))},error:e[i+1],complete:e[i+2]};else{const E=ur(t,_a);c=ur(E.firestore,fa),d=E._query;const T=new w_(c);l={next:D=>{e[i]&&e[i](new ro(c,T,E,D))},error:e[i+1],complete:e[i+2]},Mx(t._query)}return function(T,D,P,q){const N=new f_(q),F=new u_(D,N,P);return T.asyncQueue.enqueueAndForget(async()=>a_(await yd(T),F)),()=>{N.Nu(),T.asyncQueue.enqueueAndForget(async()=>o_(await yd(T),F))}}(Hd(c),d,a,l)}function b_(t,e){return function(i,a){const l=new os;return i.asyncQueue.enqueueAndForget(async()=>c4(await w4(i),a,l)),l.promise}(Hd(t),e)}function jx(t,e,n){const i=n.docs.get(e._key),a=new w_(t);return new no(t,a,e._key,i,new ac(n.hasPendingWrites,n.fromCache),e.converter)}function dy(){return new p_("serverTimestamp")}(function(e,n=!0){(function(a){ql=a})(Ll),Sl(new oo("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new fa(new IN(i.getProvider("auth-internal")),new MN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ra(Yw,Gw,e),ra(Yw,Gw,"esm2020")})();const L4={apiKey:"AIzaSyDPpncxsw6-M6CvwfqvDFCOXgnUuHXo44o",authDomain:"pdms-eda37.firebaseapp.com",projectId:"pdms-eda37",storageBucket:"pdms-eda37.firebasestorage.app",messagingSenderId:"62711519276",appId:"1:62711519276:web:1d66a26228c184d135d989"},T_=b1(L4);xx(T_);const wt=xx(T_),da=SN(T_);function U4({onLoginSuccess:t}){const[e,n]=U.useState(""),[i,a]=U.useState(""),l=Mc(),c=()=>{l("/signup")},d=()=>{lM(da,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(q4,{children:[_.jsxs(B4,{children:[_.jsxs(z4,{children:[_.jsx($4,{children:"PDMS"}),_.jsx(F4,{children:"Pushcomz Design Management System"})]}),_.jsxs(H4,{children:[_.jsx(Y4,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(G4,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(W4,{onClick:d,children:"로그인"}),_.jsxs(K4,{children:[_.jsx(X4,{children:"계정이 없습니까?"}),_.jsx(Z4,{onClick:c,children:"등록하기"})]})]}),_.jsx(Q4,{children:"© Pushcomz Corp."})]})}const q4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,B4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,z4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,$4=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,F4=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,H4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,Y4=H.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,G4=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,W4=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,Q4=H.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,K4=H.div`
  
`,X4=H.span`
  margin-right: 10px;
  font-size: 13px;
`,Z4=H.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,J4="./assets/logo-NEcdCz8m.svg";function eV(){const[t,e]=U.useState(""),[n,i]=U.useState(""),[a,l]=U.useState(null),c=Mc();U.useEffect(()=>{const g=qc(da,async v=>{if(v){v.displayName&&e(v.displayName);const E=await Zd(zn(wt,"users",v.uid));if(E.exists()){const T=E.data();l(T.role??null),i(T.company??"")}else l(null),i("")}else e(""),l(null),i("")});return()=>g()},[]);const d=()=>{dM(da).then(()=>{c("/")}).catch(g=>{alert("로그아웃 중 오류가 발생했습니다: "+g.message)})},p=g=>{switch(g){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(tV,{children:[_.jsx(nV,{src:J4}),_.jsxs(rV,{children:[_.jsxs(iV,{children:[_.jsx(sV,{children:t}),"님(",p(a),") ",n,"환영합니다."]}),_.jsx(aV,{onClick:d,children:"로그아웃"}),_.jsx(oV,{})]})]})}const tV=H.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,nV=H.img``,rV=H.div``,iV=H.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,sV=H.span`
  font-weight: 700;
`,aV=H.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,oV=H.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,S_="./assets/url-icon-DJKri2bW.svg";function lV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(uV,{isCanceled:t.status==="취소",children:[_.jsx(Sr,{children:e}),_.jsx(Sr,{children:_.jsx(mV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(Sr,{children:c(t.request_date)}),_.jsx(cV,{children:c(t.completion_dt)}),_.jsx(hV,{children:c(t.open_dt)}),_.jsx(Sr,{children:t.merchandiser}),_.jsx(Sr,{children:t.task_form}),_.jsx(fV,{children:_.jsxs(gV,{children:[_.jsx(yV,{children:t.task_type}),_.jsx(_V,{children:t.task_type_detail})]})}),_.jsx(dV,{children:_.jsxs(vV,{children:[t.emergency?_.jsx(Lx,{children:"긴급"}):"",_.jsx(EV,{onClick:d,children:t.requirement})]})}),_.jsx(Sr,{children:_.jsx(Hb,{href:t.url,target:"_blank"})}),_.jsx(pV,{children:_.jsx(wV,{onClick:d,children:t.note||""})}),_.jsx(Sr,{children:_.jsx(bV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status||"대기"})}),_.jsx(Sr,{children:t.assigned_designer||"미배정"}),_.jsx(Sr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(Hb,{href:t.result_url,target:"_blank"}):""}),_.jsx(Sr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(Ux,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(TV,{children:"검수완료"}):""}),_.jsx(Sr,{children:_.jsx(qx,{onClick:()=>a(t.id),disabled:t.status==="취소"||t.status==="완료",children:"수정"})}),_.jsx(Sr,{children:_.jsx(Bx,{onClick:()=>i(t.id),disabled:t.status==="취소"||t.status==="완료",children:"취소"})})]})}const uV=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Lx} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Ux}, ${qx}, ${Bx} {
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
`,Sr=H.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,cV=H.td`
  color: ${({theme:t})=>t.colors.red};
`,hV=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,fV=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,dV=H.td`
  line-height: 15px;
  text-align: left;
`,pV=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,mV=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -2px;
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
`,gV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,yV=H.span`
  
`,_V=H.span`
  
`,vV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,EV=H.span`
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
`,Lx=H.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Hb=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${S_}) no-repeat center / contain;
`,wV=H.span`
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
`,bV=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,Ux=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,TV=H.span`
  color: green;
  font-weight: bold;
`,qx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};

  &:disabled {
    background-color: ${({theme:t})=>t.colors.gray07};
    color: ${({theme:t})=>t.colors.gray06};
    border-color: ${({theme:t})=>t.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`,Bx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};

  &:disabled {
    background-color: ${({theme:t})=>t.colors.gray07};
    color: ${({theme:t})=>t.colors.gray06};
    border-color: ${({theme:t})=>t.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;function SV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(xV,{children:_.jsxs(AV,{children:[_.jsx(RV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Sn,{children:"번호"}),_.jsx(Sn,{children:"문서번호"}),_.jsx(Sn,{children:"요청일"}),_.jsxs(Sn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Sn,{children:"오픈일"}),_.jsx(Sn,{children:"담당MD"}),_.jsx(Sn,{children:"업무부서"}),_.jsx(Sn,{children:"업무유형"}),_.jsx(Sn,{children:"작업항목"}),_.jsx(Sn,{children:"요청서 URL"}),_.jsx(Sn,{children:"메모"}),_.jsx(Sn,{children:"진행상태"}),_.jsx(Sn,{children:"디자이너"}),_.jsx(Sn,{children:"산출물 URL"}),_.jsx(Sn,{children:"검수"}),_.jsx(Sn,{children:"수정"}),_.jsx(Sn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(lV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const xV=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,AV=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,RV=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
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

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function x_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(CV,{children:_.jsxs(DV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const CV=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,DV=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,zx="./assets/selectbox-arrow-BwC8UGU0.svg";function IV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const bg={},oc={};function eo(t,e){try{const i=(bg[t]||(bg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in oc?oc[i]:Yb(i,i.split(":"))}catch{if(t in oc)return oc[t];const n=t==null?void 0:t.match(kV);return n?Yb(t,n.slice(1)):NaN}}const kV=/([+-]\d\d):?(\d\d)?/;function Yb(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return oc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class pi extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(eo(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),$x(this),py(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new pi(...n,e):new pi(Date.now(),e)}withTimeZone(e){return new pi(+this,e)}getTimezoneOffset(){const e=-eo(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),py(this),+this}[Symbol.for("constructDateFrom")](e){return new pi(+new Date(e),this.timeZone)}}const Gb=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!Gb.test(t))return;const e=t.replace(Gb,"$1UTC");pi.prototype[e]&&(t.startsWith("get")?pi.prototype[t]=function(){return this.internal[e]()}:(pi.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),OV(this),+this},pi.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),py(this),+this}))});function py(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-eo(t.timeZone,t)*60))}function OV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),$x(t)}function $x(t){const e=eo(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,E=Math.round(-(eo(t.timeZone,t)*60))%60;(E||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+E),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+E+v));const T=eo(t.timeZone,t),D=T>0?Math.floor(T):Math.ceil(T),q=-new Date(+t).getTimezoneOffset()-D,N=D!==n,F=q-p;if(N&&F){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+F);const z=eo(t.timeZone,t),M=z>0?Math.floor(z):Math.ceil(z),J=D-M;J&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+J),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+J))}}class On extends pi{static tz(e,...n){return n.length?new On(...n,e):new On(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${IV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new On(+this,e)}[Symbol.for("constructDateFrom")](e){return new On(+new Date(e),this.timeZone)}}const Fx=6048e5,MV=864e5,Wb=Symbol.for("constructDateFrom");function on(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Wb in t?t[Wb](e):t instanceof Date?new t.constructor(e):new Date(e)}function gt(t,e){return on(e||t,t)}function Hx(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(e)?on(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function Yx(t,e,n){const i=gt(t,n==null?void 0:n.in);if(isNaN(e))return on(t,NaN);if(!e)return i;const a=i.getDate(),l=on(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let NV={};function Wc(){return NV}function Ol(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Ic(t,e){return Ol(t,{...e,weekStartsOn:1})}function Gx(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=on(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Ic(a),c=on(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Ic(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Qb(t){const e=gt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Hl(t,...e){const n=on.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function kc(t,e){const n=gt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Wx(t,e,n){const[i,a]=Hl(n==null?void 0:n.in,t,e),l=kc(i),c=kc(a),d=+l-Qb(l),p=+c-Qb(c);return Math.round((d-p)/MV)}function PV(t,e){const n=Gx(t,e),i=on(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Ic(i)}function VV(t,e,n){return Hx(t,e*7,n)}function jV(t,e,n){return Yx(t,e*12,n)}function LV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=gt(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function UV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=gt(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function qV(t,e,n){const[i,a]=Hl(n==null?void 0:n.in,t,e);return+kc(i)==+kc(a)}function Qx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function BV(t){return!(!Qx(t)&&typeof t!="number"||isNaN(+gt(t)))}function zV(t,e,n){const[i,a]=Hl(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function $V(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function FV(t,e){const[n,i]=Hl(t,e.start,e.end);return{start:n,end:i}}function HV(t,e){const{start:n,end:i}=FV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(on(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function YV(t,e){const n=gt(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function GV(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function Kx(t,e){const n=gt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Xx(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function WV(t,e){return Xx(t,{...e,weekStartsOn:1})}const QV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},KV=(t,e,n)=>{let i;const a=QV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function Tg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const XV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ZV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},JV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},e6={date:Tg({formats:XV,defaultWidth:"full"}),time:Tg({formats:ZV,defaultWidth:"full"}),dateTime:Tg({formats:JV,defaultWidth:"full"})},t6={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},n6=(t,e,n,i)=>t6[t];function Ku(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const r6={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},i6={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s6={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a6={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},o6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},l6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},u6=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},c6={ordinalNumber:u6,era:Ku({values:r6,defaultWidth:"wide"}),quarter:Ku({values:i6,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ku({values:s6,defaultWidth:"wide"}),day:Ku({values:a6,defaultWidth:"wide"}),dayPeriod:Ku({values:o6,defaultWidth:"wide",formattingValues:l6,defaultFormattingWidth:"wide"})};function Xu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?f6(d,E=>E.test(c)):h6(d,E=>E.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function h6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function f6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function d6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const p6=/^(\d+)(th|st|nd|rd)?/i,m6=/\d+/i,g6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},y6={any:[/^b/i,/^(a|c)/i]},_6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},v6={any:[/1/i,/2/i,/3/i,/4/i]},E6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},w6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},b6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},T6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},S6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},x6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},A6={ordinalNumber:d6({matchPattern:p6,parsePattern:m6,valueCallback:t=>parseInt(t,10)}),era:Xu({matchPatterns:g6,defaultMatchWidth:"wide",parsePatterns:y6,defaultParseWidth:"any"}),quarter:Xu({matchPatterns:_6,defaultMatchWidth:"wide",parsePatterns:v6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Xu({matchPatterns:E6,defaultMatchWidth:"wide",parsePatterns:w6,defaultParseWidth:"any"}),day:Xu({matchPatterns:b6,defaultMatchWidth:"wide",parsePatterns:T6,defaultParseWidth:"any"}),dayPeriod:Xu({matchPatterns:S6,defaultMatchWidth:"any",parsePatterns:x6,defaultParseWidth:"any"})},A_={code:"en-US",formatDistance:KV,formatLong:e6,formatRelative:n6,localize:c6,match:A6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function R6(t,e){const n=gt(t,e==null?void 0:e.in);return Wx(n,Kx(n))+1}function Zx(t,e){const n=gt(t,e==null?void 0:e.in),i=+Ic(n)-+PV(n);return Math.round(i/Fx)+1}function Jx(t,e){var v,E,T,D;const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Wc(),l=(e==null?void 0:e.firstWeekContainsDate)??((E=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??a.firstWeekContainsDate??((D=(T=a.locale)==null?void 0:T.options)==null?void 0:D.firstWeekContainsDate)??1,c=on((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Ol(c,e),p=on((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Ol(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function C6(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Jx(t,e),l=on((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Ol(l,e)}function eA(t,e){const n=gt(t,e==null?void 0:e.in),i=+Ol(n,e)-+C6(n,e);return Math.round(i/Fx)+1}function ht(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Ys={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ht(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ht(n+1,2)},d(t,e){return ht(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ht(t.getHours()%12||12,e.length)},H(t,e){return ht(t.getHours(),e.length)},m(t,e){return ht(t.getMinutes(),e.length)},s(t,e){return ht(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ht(a,e.length)}},ll={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Kb={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Ys.y(t,e)},Y:function(t,e,n,i){const a=Jx(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ht(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ht(l,e.length)},R:function(t,e){const n=Gx(t);return ht(n,e.length)},u:function(t,e){const n=t.getFullYear();return ht(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ht(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ht(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Ys.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ht(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=eA(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ht(a,e.length)},I:function(t,e,n){const i=Zx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ht(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ys.d(t,e)},D:function(t,e,n){const i=R6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ht(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ht(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ht(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ht(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=ll.noon:i===0?a=ll.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=ll.evening:i>=12?a=ll.afternoon:i>=4?a=ll.morning:a=ll.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ys.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ys.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ys.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ys.s(t,e)},S:function(t,e){return Ys.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Zb(i);case"XXXX":case"XX":return Xa(i);case"XXXXX":case"XXX":default:return Xa(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Zb(i);case"xxxx":case"xx":return Xa(i);case"xxxxx":case"xxx":default:return Xa(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Xb(i,":");case"OOOO":default:return"GMT"+Xa(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Xb(i,":");case"zzzz":default:return"GMT"+Xa(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ht(i,e.length)},T:function(t,e,n){return ht(+t,e.length)}};function Xb(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ht(l,2)}function Zb(t,e){return t%60===0?(t>0?"-":"+")+ht(Math.abs(t)/60,2):Xa(t,e)}function Xa(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ht(Math.trunc(i/60),2),l=ht(i%60,2);return n+a+e+l}const Jb=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},tA=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},D6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Jb(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Jb(i,e)).replace("{{time}}",tA(a,e))},I6={p:tA,P:D6},k6=/^D+$/,O6=/^Y+$/,M6=["D","DD","YY","YYYY"];function N6(t){return k6.test(t)}function P6(t){return O6.test(t)}function V6(t,e,n){const i=j6(t,e,n);if(console.warn(i),M6.includes(t))throw new RangeError(i)}function j6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const L6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,U6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,q6=/^'([^]*?)'?$/,B6=/''/g,z6=/[a-zA-Z]/;function $6(t,e,n){var v,E,T,D,P,q,N,F;const i=Wc(),a=(n==null?void 0:n.locale)??i.locale??A_,l=(n==null?void 0:n.firstWeekContainsDate)??((E=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??i.firstWeekContainsDate??((D=(T=i.locale)==null?void 0:T.options)==null?void 0:D.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((q=(P=n==null?void 0:n.locale)==null?void 0:P.options)==null?void 0:q.weekStartsOn)??i.weekStartsOn??((F=(N=i.locale)==null?void 0:N.options)==null?void 0:F.weekStartsOn)??0,d=gt(t,n==null?void 0:n.in);if(!BV(d))throw new RangeError("Invalid time value");let p=e.match(U6).map(z=>{const M=z[0];if(M==="p"||M==="P"){const J=I6[M];return J(z,a.formatLong)}return z}).join("").match(L6).map(z=>{if(z==="''")return{isToken:!1,value:"'"};const M=z[0];if(M==="'")return{isToken:!1,value:F6(z)};if(Kb[M])return{isToken:!0,value:z};if(M.match(z6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");return{isToken:!1,value:z}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(z=>{if(!z.isToken)return z.value;const M=z.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&P6(M)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&N6(M))&&V6(M,e,String(t));const J=Kb[M[0]];return J(d,M,a.localize,g)}).join("")}function F6(t){const e=t.match(q6);return e?e[1].replace(B6,"'"):t}function H6(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=on(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function Y6(t,e){return gt(t,e==null?void 0:e.in).getMonth()}function G6(t,e){return gt(t,e==null?void 0:e.in).getFullYear()}function W6(t,e){return+gt(t)>+gt(e)}function Q6(t,e){return+gt(t)<+gt(e)}function K6(t,e,n){const[i,a]=Hl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function X6(t,e,n){const[i,a]=Hl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function Z6(t,e,n){const i=gt(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=on(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=H6(c);return i.setMonth(e,Math.min(l,d)),i}function J6(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(+i)?on(t,NaN):(i.setFullYear(e),i)}const eT=5,ej=4;function tj(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,eT*7-1);return e.getMonth(t)===e.getMonth(l)?eT:ej}function nA(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function nj(t,e){const n=nA(t,e),i=tj(t,e);return e.addDays(n,i*7-1)}class ms{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?On.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new On(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Hx(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):Yx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):VV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):jV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):Wx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):zV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):HV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):nj(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):WV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):$V(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Xx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):GV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):$6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Zx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):Y6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):G6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):eA(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):W6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):Q6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):Qx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):qV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):K6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):X6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):LV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):UV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):Z6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):J6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):nA(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):kc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Ic(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):YV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Ol(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):Kx(i)},this.options={locale:A_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const Ti=new ms;class rA{constructor(e,n,i=Ti){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class rj{constructor(e,n){this.date=e,this.weeks=n}}class ij{constructor(e,n){this.days=n,this.weekNumber=e}}function sj(t){return me.createElement("button",{...t})}function aj(t){return me.createElement("span",{...t})}function oj(t){const{size:e=24,orientation:n="left",className:i}=t;return me.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&me.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&me.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&me.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&me.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function lj(t){const{day:e,modifiers:n,...i}=t;return me.createElement("td",{...i})}function uj(t){const{day:e,modifiers:n,...i}=t,a=me.useRef(null);return me.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),me.createElement("button",{ref:a,...i})}var xe;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(xe||(xe={}));var Mt;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(Mt||(Mt={}));var Lr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(Lr||(Lr={}));var or;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(or||(or={}));function cj(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[xe.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return me.createElement("span",{"data-disabled":l.disabled,className:a[xe.DropdownRoot]},me.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>me.createElement(i.Option,{key:p,value:p,disabled:v},g))),me.createElement("span",{className:a[xe.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,me.createElement(i.Chevron,{orientation:"down",size:18,className:a[xe.Chevron]})))}function hj(t){return me.createElement("div",{...t})}function fj(t){return me.createElement("div",{...t})}function dj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i},t.children)}function pj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i})}function mj(t){return me.createElement("table",{...t})}function gj(t){return me.createElement("div",{...t})}const iA=U.createContext(void 0);function Qc(){const t=U.useContext(iA);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function yj(t){const{components:e}=Qc();return me.createElement(e.Dropdown,{...t})}function _j(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Qc(),v=U.useCallback(T=>{a&&(n==null||n(T))},[a,n]),E=U.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return me.createElement("nav",{...l},me.createElement(c.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:E},me.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[xe.Chevron],orientation:"left"})),me.createElement(c.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},me.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[xe.Chevron]})))}function vj(t){const{components:e}=Qc();return me.createElement(e.Button,{...t})}function Ej(t){return me.createElement("option",{...t})}function wj(t){const{components:e}=Qc();return me.createElement(e.Button,{...t})}function bj(t){const{rootRef:e,...n}=t;return me.createElement("div",{...n,ref:e})}function Tj(t){return me.createElement("select",{...t})}function Sj(t){const{week:e,...n}=t;return me.createElement("tr",{...n})}function xj(t){return me.createElement("th",{...t})}function Aj(t){return me.createElement("thead",{"aria-hidden":!0},me.createElement("tr",{...t}))}function Rj(t){const{week:e,...n}=t;return me.createElement("th",{...n})}function Cj(t){return me.createElement("th",{...t})}function Dj(t){return me.createElement("tbody",{...t})}function Ij(t){const{components:e}=Qc();return me.createElement(e.Dropdown,{...t})}const kj=Object.freeze(Object.defineProperty({__proto__:null,Button:sj,CaptionLabel:aj,Chevron:oj,Day:lj,DayButton:uj,Dropdown:cj,DropdownNav:hj,Footer:fj,Month:dj,MonthCaption:pj,MonthGrid:mj,Months:gj,MonthsDropdown:yj,Nav:_j,NextMonthButton:vj,Option:Ej,PreviousMonthButton:wj,Root:bj,Select:Tj,Week:Sj,WeekNumber:Rj,WeekNumberHeader:Cj,Weekday:xj,Weekdays:Aj,Weeks:Dj,YearsDropdown:Ij},Symbol.toStringTag,{value:"Module"}));function rs(t,e,n=!1,i=Ti){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function sA(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function R_(t){return!!(t&&typeof t=="object"&&"from"in t)}function aA(t){return!!(t&&typeof t=="object"&&"after"in t)}function oA(t){return!!(t&&typeof t=="object"&&"before"in t)}function lA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function uA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function is(t,e,n=Ti){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(uA(d,n))return d.includes(t);if(R_(d))return rs(d,t,!1,n);if(lA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(sA(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,E=g<0;return c(d.before,d.after)?E&&v:v||E}return aA(d)?l(t,d.after)>0:oA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function Oj(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:E,isSameMonth:T,startOfMonth:D,isBefore:P,endOfMonth:q,isAfter:N}=a,F=n&&D(n),z=i&&q(i),M={[Mt.focused]:[],[Mt.outside]:[],[Mt.disabled]:[],[Mt.hidden]:[],[Mt.today]:[]},J={};for(const $ of t){const{date:re,displayMonth:C}=$,S=!!(C&&!T(re,C)),A=!!(F&&P(re,F)),V=!!(z&&N(re,z)),I=!!(l&&is(re,l,a)),O=!!(c&&is(re,c,a))||A||V||!g&&!p&&S||g&&p===!1&&S,k=E(re,v??a.today());S&&M.outside.push($),I&&M.disabled.push($),O&&M.hidden.push($),k&&M.today.push($),d&&Object.keys(d).forEach(Me=>{const oe=d==null?void 0:d[Me];oe&&is(re,oe,a)&&(J[Me]?J[Me].push($):J[Me]=[$])})}return $=>{const re={[Mt.focused]:!1,[Mt.disabled]:!1,[Mt.hidden]:!1,[Mt.outside]:!1,[Mt.today]:!1},C={};for(const S in M){const A=M[S];re[S]=A.some(V=>V===$)}for(const S in J)C[S]=J[S].some(A=>A===$);return{...re,...C}}}function Mj(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[Mt[l]]?a.push(e[Mt[l]]):e[Lr[l]]&&a.push(e[Lr[l]]),a),[e[xe.Day]])}function Nj(t){return{...kj,...t}}function Pj(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function Vj(){const t={};for(const e in xe)t[xe[e]]=`rdp-${xe[e]}`;for(const e in Mt)t[Mt[e]]=`rdp-${Mt[e]}`;for(const e in Lr)t[Lr[e]]=`rdp-${Lr[e]}`;for(const e in or)t[or[e]]=`rdp-${or[e]}`;return t}function cA(t,e,n){return(n??new ms(e)).format(t,"LLLL y")}const jj=cA;function Lj(t,e,n){return(n??new ms(e)).format(t,"d")}function Uj(t,e=Ti){return e.format(t,"LLLL")}function qj(t,e,n){return(n??new ms(e)).format(t,"cccccc")}function Bj(t,e=Ti){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function zj(){return""}function hA(t,e=Ti){return e.format(t,"yyyy")}const $j=hA,Fj=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:cA,formatDay:Lj,formatMonthCaption:jj,formatMonthDropdown:Uj,formatWeekNumber:Bj,formatWeekNumberHeader:zj,formatWeekdayName:qj,formatYearCaption:$j,formatYearDropdown:hA},Symbol.toStringTag,{value:"Module"}));function Hj(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...Fj,...t}}function Yj(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const D=i.formatMonthDropdown(T,a),P=g(T),q=e&&T<l(e)||n&&T>l(n)||!1;return{value:P,label:D,disabled:q}})}function Gj(t,e={},n={}){let i={...e==null?void 0:e[xe.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function Wj(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function Qj(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,E=l(t),T=c(e),D=[];let P=E;for(;g(P,T)||v(P,T);)D.push(P),P=d(P,1);return a&&D.reverse(),D.map(q=>{const N=n.formatYearDropdown(q,i);return{value:p(q),label:N,disabled:!1}})}function fA(t,e,n,i){let a=(i??new ms(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const Kj=fA;function dA(t,e,n){return(n??new ms(e)).format(t,"LLLL y")}const Xj=dA;function Zj(t,e,n,i){let a=(i??new ms(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function Jj(t){return"Choose the Month"}function eL(){return""}function tL(t){return"Go to the Next Month"}function nL(t){return"Go to the Previous Month"}function rL(t,e,n){return(n??new ms(e)).format(t,"cccc")}function iL(t,e){return`Week ${t}`}function sL(t){return"Week Number"}function aL(t){return"Choose the Year"}const oL=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Xj,labelDay:Kj,labelDayButton:fA,labelGrid:dA,labelGridcell:Zj,labelMonthDropdown:Jj,labelNav:eL,labelNext:tL,labelPrevious:nL,labelWeekNumber:iL,labelWeekNumberHeader:sL,labelWeekday:rL,labelYearDropdown:aL},Symbol.toStringTag,{value:"Module"})),Kc=t=>t instanceof HTMLElement?t:null,Sg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],lL=t=>Kc(t.querySelector("[data-animated-month]")),xg=t=>Kc(t.querySelector("[data-animated-caption]")),Ag=t=>Kc(t.querySelector("[data-animated-weeks]")),uL=t=>Kc(t.querySelector("[data-animated-nav]")),cL=t=>Kc(t.querySelector("[data-animated-weekdays]"));function hL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=U.useRef(null),d=U.useRef(i),p=U.useRef(!1);U.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),E=l.isAfter(i[0].date,g[0].date),T=E?n[or.caption_after_enter]:n[or.caption_before_enter],D=E?n[or.weeks_after_enter]:n[or.weeks_before_enter],P=c.current,q=t.current.cloneNode(!0);if(q instanceof HTMLElement?(Sg(q).forEach(M=>{if(!(M instanceof HTMLElement))return;const J=lL(M);J&&M.contains(J)&&M.removeChild(J);const $=xg(M);$&&$.classList.remove(T);const re=Ag(M);re&&re.classList.remove(D)}),c.current=q):c.current=null,p.current||v||a)return;const N=P instanceof HTMLElement?Sg(P):[],F=Sg(t.current);if(F!=null&&F.every(z=>z instanceof HTMLElement)&&N&&N.every(z=>z instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const z=uL(t.current);z&&(z.style.zIndex="1"),F.forEach((M,J)=>{const $=N[J];if(!$)return;M.style.position="relative",M.style.overflow="hidden";const re=xg(M);re&&re.classList.add(T);const C=Ag(M);C&&C.classList.add(D);const S=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),z&&(z.style.zIndex=""),re&&re.classList.remove(T),C&&C.classList.remove(D),M.style.position="",M.style.overflow="",M.contains($)&&M.removeChild($)};$.style.pointerEvents="none",$.style.position="absolute",$.style.overflow="hidden",$.setAttribute("aria-hidden","true");const A=cL($);A&&(A.style.opacity="0");const V=xg($);V&&(V.classList.add(E?n[or.caption_before_exit]:n[or.caption_after_exit]),V.addEventListener("animationend",S));const I=Ag($);I&&I.classList.add(E?n[or.weeks_before_exit]:n[or.weeks_after_exit]),M.insertBefore($,M.firstChild)})}})}function fL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:E,endOfBroadcastWeek:T,endOfISOWeek:D,endOfMonth:P,endOfWeek:q,isAfter:N,startOfBroadcastWeek:F,startOfISOWeek:z,startOfWeek:M}=i,J=p?F(a,i):c?z(a):M(a),$=p?T(l):c?D(P(l)):q(P(l)),re=v($,J),C=E(l,a)+1,S=[];for(let I=0;I<=re;I++){const O=g(J,I);if(e&&N(O,e))break;S.push(O)}const V=(p?35:42)*C;if(d&&S.length<V){const I=V-S.length;for(let O=0;O<I;O++){const k=g(S[S.length-1],1);S.push(k)}}return S}function dL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function pL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function tT(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:E}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),E(p)}function mL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:E,startOfISOWeek:T,startOfWeek:D}=i,P=t.reduce((q,N)=>{const F=n.broadcastCalendar?E(N,i):n.ISOWeek?T(N):D(N),z=n.broadcastCalendar?l(N):n.ISOWeek?c(d(N)):p(d(N)),M=e.filter(C=>C>=F&&C<=z),J=n.broadcastCalendar?35:42;if(n.fixedWeeks&&M.length<J){const C=e.filter(S=>{const A=J-M.length;return S>z&&S<=a(z,A)});M.push(...C)}const $=M.reduce((C,S)=>{const A=n.ISOWeek?g(S):v(S),V=C.find(O=>O.weekNumber===A),I=new rA(S,N,i);return V?V.days.push(I):C.push(new ij(A,[I])),C},[]),re=new rj(N,$);return q.push(re),q},[]);return n.reverseMonths?P.reverse():P}function gL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:E}=e,{fromYear:T,toYear:D,fromMonth:P,toMonth:q}=t;!n&&P&&(n=P),!n&&T&&(n=e.newDate(T,0,1)),!i&&q&&(i=q),!i&&D&&(i=v(D,11,31));const N=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&N&&(n=a(p(t.today??E(),-100))),i?i=d(i):D?i=v(D,11,31):!i&&N&&(i=g(t.today??E())),[n&&l(n),i&&l(i)]}function yL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function _L(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function vL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function ep(t,e){const[n,i]=U.useState(t);return[e===void 0?n:e,i]}function EL(t,e){const[n,i]=gL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=tT(t,n,i,e),[d,p]=ep(c,t.month?c:void 0);U.useEffect(()=>{const re=tT(t,n,i,e);p(re)},[t.timeZone]);const g=pL(d,i,t,e),v=fL(g,t.endMonth?l(t.endMonth):void 0,t,e),E=mL(g,v,t,e),T=vL(E),D=dL(E),P=_L(d,n,t,e),q=yL(d,i,t,e),{disableNavigation:N,onMonthChange:F}=t,z=re=>T.some(C=>C.days.some(S=>S.isEqualTo(re))),M=re=>{if(N)return;let C=a(re);n&&C<a(n)&&(C=a(n)),i&&C>a(i)&&(C=a(i)),p(C),F==null||F(C)};return{months:E,weeks:T,days:D,navStart:n,navEnd:i,previousMonth:P,nextMonth:q,goToMonth:M,goToDay:re=>{z(re)||M(re.date)}}}var ui;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(ui||(ui={}));function nT(t){return!t[Mt.disabled]&&!t[Mt.hidden]&&!t[Mt.outside]}function wL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);nT(d)&&(d[Mt.focused]&&l<ui.FocusedModifier?(a=c,l=ui.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<ui.LastFocused?(a=c,l=ui.LastFocused):n(c.date)&&l<ui.Selected?(a=c,l=ui.Selected):d[Mt.today]&&l<ui.Today&&(a=c,l=ui.Today))}return a||(a=t.find(c=>nT(e(c)))),a}function bL(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:E,addYears:T,endOfBroadcastWeek:D,endOfISOWeek:P,endOfWeek:q,max:N,min:F,startOfBroadcastWeek:z,startOfISOWeek:M,startOfWeek:J}=c;let re={day:g,week:E,month:v,year:T,startOfWeek:C=>p?z(C,c):d?M(C):J(C),endOfWeek:C=>p?D(C):d?P(C):q(C)}[t](n,e==="after"?1:-1);return e==="before"&&i?re=N([i,re]):e==="after"&&a&&(re=F([a,re])),re}function pA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=bL(t,e,n.date,i,a,l,c),g=!!(l.disabled&&is(p,l.disabled,c)),v=!!(l.hidden&&is(p,l.hidden,c)),E=p,T=new rA(p,E,c);return!g&&!v?T:pA(t,e,T,i,a,l,c,d+1)}function TL(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=U.useState(),p=wL(e.days,n,i||(()=>!1),c),[g,v]=U.useState(l?p:void 0);return{isFocusTarget:q=>!!(p!=null&&p.isEqualTo(q)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(q,N)=>{if(!g)return;const F=pA(q,N,g,e.navStart,e.navEnd,t,a);F&&(e.goToDay(F),v(F))}}}function SL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ep(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=D=>(d==null?void 0:d.some(P=>p(P,D)))??!1,{min:v,max:E}=t;return{selected:d,select:(D,P,q)=>{let N=[...d??[]];if(g(D)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;N=d==null?void 0:d.filter(F=>!p(F,D))}else(d==null?void 0:d.length)===E?N=[D]:N=[...N,D];return a||c(N),a==null||a(N,D,P,q),N},isSelected:g}}function xL(t,e,n=0,i=0,a=!1,l=Ti){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let E;if(!c&&!d)E={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?E={from:c,to:t}:a?E={from:c,to:void 0}:E=void 0:v(t,c)?E={from:t,to:c}:E={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?E={from:c,to:d}:E=void 0;else if(p(c,t))E={from:c,to:n>0?void 0:t};else if(p(d,t))E={from:t,to:n>0?void 0:t};else if(v(t,c))E={from:t,to:d};else if(g(t,c))E={from:c,to:t};else if(g(t,d))E={from:c,to:t};else throw new Error("Invalid range");if(E!=null&&E.from&&(E!=null&&E.to)){const T=l.differenceInCalendarDays(E.to,E.from);i>0&&T>i?E={from:t,to:void 0}:n>1&&T<n&&(E={from:t,to:void 0})}return E}function AL(t,e,n=Ti){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function rT(t,e,n=Ti){return rs(t,e.from,!1,n)||rs(t,e.to,!1,n)||rs(e,t.from,!1,n)||rs(e,t.to,!1,n)}function RL(t,e,n=Ti){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?rs(t,d,!1,n):uA(d,n)?d.some(p=>rs(t,p,!1,n)):R_(d)?d.from&&d.to?rT(t,{from:d.from,to:d.to},n):!1:lA(d)?AL(t,d.dayOfWeek,n):sA(d)?n.isAfter(d.before,d.after)?rT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):is(t.from,d,n)||is(t.to,d,n):aA(d)||oA(d)?is(t.from,d,n)||is(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function CL(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=ep(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,D,P)=>{const{min:q,max:N}=t,F=T?xL(T,g,q,N,l,e):void 0;return i&&n&&(F!=null&&F.from)&&F.to&&RL({from:F.from,to:F.to},n,e)&&(F.from=T,F.to=void 0),c||p(F),c==null||c(F,T,D,P),F},isSelected:T=>g&&rs(g,T,!1,e)}}function DL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ep(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(E,T,D)=>{let P=E;return!i&&d&&d&&p(E,d)&&(P=void 0),a||c(P),a==null||a(P,E,T,D),P},isSelected:E=>d?p(d,E):!1}}function IL(t,e){const n=DL(t,e),i=SL(t,e),a=CL(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function kL(t){var gs;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new On(e.today,e.timeZone)),e.month&&(e.month=new On(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new On(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new On(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new On(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new On(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(gs=e.selected)==null?void 0:gs.map(Le=>new On(Le,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new On(e.selected.from,e.timeZone):void 0,to:e.selected.to?new On(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=U.useMemo(()=>{const Le={...A_,...e.locale};return{dateLib:new ms({locale:Le,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Nj(e.components),formatters:Hj(e.formatters),labels:{...oL,...e.labels},locale:Le,classNames:{...Vj(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:E=1,onDayBlur:T,onDayClick:D,onDayFocus:P,onDayKeyDown:q,onDayMouseEnter:N,onDayMouseLeave:F,onNextClick:z,onPrevClick:M,showWeekNumber:J,styles:$}=e,{formatCaption:re,formatDay:C,formatMonthDropdown:S,formatWeekNumber:A,formatWeekNumberHeader:V,formatWeekdayName:I,formatYearDropdown:O}=i,k=EL(e,l),{days:Me,months:oe,navStart:Y,navEnd:ie,previousMonth:fe,nextMonth:ye,goToMonth:L}=k,te=Oj(Me,e,Y,ie,l),{isSelected:he,select:ce,selected:ve}=IL(e,l)??{},{blur:De,focused:be,isFocusTarget:yt,moveFocus:Fe,setFocused:Tt}=TL(e,k,te,he??(()=>!1),l),{labelDayButton:Cn,labelGridcell:de,labelGrid:Te,labelMonthDropdown:we,labelNav:Pe,labelPrevious:it,labelNext:Qn,labelWeekday:Lt,labelWeekNumber:Hr,labelWeekNumberHeader:Kn,labelYearDropdown:cr}=a,Si=U.useMemo(()=>Wj(l,e.ISOWeek),[l,e.ISOWeek]),go=g!==void 0||D!==void 0,Yr=U.useCallback(()=>{fe&&(L(fe),M==null||M(fe))},[fe,L,M]),xi=U.useCallback(()=>{ye&&(L(ye),z==null||z(ye))},[L,ye,z]),yo=U.useCallback((Le,st)=>Ie=>{Ie.preventDefault(),Ie.stopPropagation(),Tt(Le),ce==null||ce(Le.date,st,Ie),D==null||D(Le.date,st,Ie)},[ce,D,Tt]),xt=U.useCallback((Le,st)=>Ie=>{Tt(Le),P==null||P(Le.date,st,Ie)},[P,Tt]),nt=U.useCallback((Le,st)=>Ie=>{De(),T==null||T(Le.date,st,Ie)},[De,T]),Vn=U.useCallback((Le,st)=>Ie=>{const et={ArrowLeft:[Ie.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[Ie.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[Ie.shiftKey?"year":"week","after"],ArrowUp:[Ie.shiftKey?"year":"week","before"],PageUp:[Ie.shiftKey?"year":"month","before"],PageDown:[Ie.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(et[Ie.key]){Ie.preventDefault(),Ie.stopPropagation();const[un,Ue]=et[Ie.key];Fe(un,Ue)}q==null||q(Le.date,st,Ie)},[Fe,q,e.dir]),ln=U.useCallback((Le,st)=>Ie=>{N==null||N(Le.date,st,Ie)},[N]),_o=U.useCallback((Le,st)=>Ie=>{F==null||F(Le.date,st,Ie)},[F]),Yl=U.useCallback(Le=>st=>{const Ie=Number(st.target.value),et=l.setMonth(l.startOfMonth(Le),Ie);L(et)},[l,L]),Ai=U.useCallback(Le=>st=>{const Ie=Number(st.target.value),et=l.setYear(l.startOfMonth(Le),Ie);L(et)},[l,L]),{className:Ri,style:Ci}=U.useMemo(()=>({className:[d[xe.Root],e.className].filter(Boolean).join(" "),style:{...$==null?void 0:$[xe.Root],...e.style}}),[d,e.className,e.style,$]),Xn=Pj(e),Di=U.useRef(null);hL(Di,!!e.animate,{classNames:d,months:oe,focused:be,dateLib:l});const Ii={dayPickerProps:e,selected:ve,select:ce,isSelected:he,months:oe,nextMonth:ye,previousMonth:fe,goToMonth:L,getModifiers:te,components:n,classNames:d,styles:$,labels:a,formatters:i};return me.createElement(iA.Provider,{value:Ii},me.createElement(n.Root,{rootRef:e.animate?Di:void 0,className:Ri,style:Ci,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Xn},me.createElement(n.Months,{className:d[xe.Months],style:$==null?void 0:$[xe.Months]},!e.hideNavigation&&!v&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:$==null?void 0:$[xe.Nav],"aria-label":Pe(),onPreviousClick:Yr,onNextClick:xi,previousMonth:fe,nextMonth:ye}),oe.map((Le,st)=>me.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[xe.Month],style:$==null?void 0:$[xe.Month],key:st,displayIndex:st,calendarMonth:Le},v==="around"&&!e.hideNavigation&&st===0&&me.createElement(n.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:fe?void 0:-1,"aria-disabled":fe?void 0:!0,"aria-label":it(fe),onClick:Yr,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:fe?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"right":"left"})),me.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[xe.MonthCaption],style:$==null?void 0:$[xe.MonthCaption],calendarMonth:Le,displayIndex:st},p!=null&&p.startsWith("dropdown")?me.createElement(n.DropdownNav,{className:d[xe.Dropdowns],style:$==null?void 0:$[xe.Dropdowns]},p==="dropdown"||p==="dropdown-months"?me.createElement(n.MonthsDropdown,{className:d[xe.MonthsDropdown],"aria-label":we(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Yl(Le.date),options:Yj(Le.date,Y,ie,i,l),style:$==null?void 0:$[xe.Dropdown],value:l.getMonth(Le.date)}):me.createElement("span",null,S(Le.date,l)),p==="dropdown"||p==="dropdown-years"?me.createElement(n.YearsDropdown,{className:d[xe.YearsDropdown],"aria-label":cr(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Ai(Le.date),options:Qj(Y,ie,i,l,!!e.reverseYears),style:$==null?void 0:$[xe.Dropdown],value:l.getYear(Le.date)}):me.createElement("span",null,O(Le.date,l)),me.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},re(Le.date,l.options,l))):me.createElement(n.CaptionLabel,{className:d[xe.CaptionLabel],role:"status","aria-live":"polite"},re(Le.date,l.options,l))),v==="around"&&!e.hideNavigation&&st===E-1&&me.createElement(n.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:ye?void 0:-1,"aria-disabled":ye?void 0:!0,"aria-label":Qn(ye),onClick:xi,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:ye?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"left":"right"})),st===E-1&&v==="after"&&!e.hideNavigation&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:$==null?void 0:$[xe.Nav],"aria-label":Pe(),onPreviousClick:Yr,onNextClick:xi,previousMonth:fe,nextMonth:ye}),me.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Te(Le.date,l.options,l)||void 0,className:d[xe.MonthGrid],style:$==null?void 0:$[xe.MonthGrid]},!e.hideWeekdays&&me.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[xe.Weekdays],style:$==null?void 0:$[xe.Weekdays]},J&&me.createElement(n.WeekNumberHeader,{"aria-label":Kn(l.options),className:d[xe.WeekNumberHeader],style:$==null?void 0:$[xe.WeekNumberHeader],scope:"col"},V()),Si.map(Ie=>me.createElement(n.Weekday,{"aria-label":Lt(Ie,l.options,l),className:d[xe.Weekday],key:String(Ie),style:$==null?void 0:$[xe.Weekday],scope:"col"},I(Ie,l.options,l)))),me.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[xe.Weeks],style:$==null?void 0:$[xe.Weeks]},Le.weeks.map(Ie=>me.createElement(n.Week,{className:d[xe.Week],key:Ie.weekNumber,style:$==null?void 0:$[xe.Week],week:Ie},J&&me.createElement(n.WeekNumber,{week:Ie,style:$==null?void 0:$[xe.WeekNumber],"aria-label":Hr(Ie.weekNumber,{locale:c}),className:d[xe.WeekNumber],scope:"row",role:"rowheader"},A(Ie.weekNumber,l)),Ie.days.map(et=>{const{date:un}=et,Ue=te(et);if(Ue[Mt.focused]=!Ue.hidden&&!!(be!=null&&be.isEqualTo(et)),Ue[Lr.selected]=(he==null?void 0:he(un))||Ue.selected,R_(ve)){const{from:hr,to:_s}=ve;Ue[Lr.range_start]=!!(hr&&_s&&l.isSameDay(un,hr)),Ue[Lr.range_end]=!!(hr&&_s&&l.isSameDay(un,_s)),Ue[Lr.range_middle]=rs(ve,un,!0,l)}const va=Gj(Ue,$,e.modifiersStyles),Gr=Mj(Ue,d,e.modifiersClassNames),ys=!go&&!Ue.hidden?de(un,Ue,l.options,l):void 0;return me.createElement(n.Day,{key:`${l.format(un,"yyyy-MM-dd")}_${l.format(et.displayMonth,"yyyy-MM")}`,day:et,modifiers:Ue,className:Gr.join(" "),style:va,role:"gridcell","aria-selected":Ue.selected||void 0,"aria-label":ys,"data-day":l.format(un,"yyyy-MM-dd"),"data-month":et.outside?l.format(un,"yyyy-MM"):void 0,"data-selected":Ue.selected||void 0,"data-disabled":Ue.disabled||void 0,"data-hidden":Ue.hidden||void 0,"data-outside":et.outside||void 0,"data-focused":Ue.focused||void 0,"data-today":Ue.today||void 0},!Ue.hidden&&go?me.createElement(n.DayButton,{className:d[xe.DayButton],style:$==null?void 0:$[xe.DayButton],type:"button",day:et,modifiers:Ue,disabled:Ue.disabled||void 0,tabIndex:yt(et)?0:-1,"aria-label":Cn(un,Ue,l.options,l),onClick:yo(et,Ue),onBlur:nt(et,Ue),onFocus:xt(et,Ue),onKeyDown:Vn(et,Ue),onMouseEnter:ln(et,Ue),onMouseLeave:_o(et,Ue)},C(un,l.options,l)):!Ue.hidden&&C(et.date,l.options,l))})))))))),e.footer&&me.createElement(n.Footer,{className:d[xe.Footer],style:$==null?void 0:$[xe.Footer],role:"status","aria-live":"polite"},e.footer)))}const OL="/assets/calendar-arrow-BfXL-r2k.png";function ML({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var q;const[a,l]=U.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=U.useState(((q=t==null?void 0:t.start)==null?void 0:q.getFullYear())??new Date().getFullYear()),[p,g]=U.useState(!1),v=U.useMemo(()=>{const N=F=>`${F.getFullYear()}.${String(F.getMonth()+1).padStart(2,"0")}.${String(F.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${N(a.start)} ~ ${N(a.end)}`:a.start?`${N(a.start)} ~`:""},[a]),E=new Date().getMonth(),T=U.useRef(null);U.useEffect(()=>{if(p&&T.current){const N=T.current.querySelectorAll(".month-box")[E];N&&N.scrollIntoView({block:"start"})}},[p]);const D=U.useRef(null);U.useEffect(()=>{const N=F=>{D.current&&!D.current.contains(F.target)&&g(!1)};return p&&document.addEventListener("click",N),()=>{document.removeEventListener("click",N)}},[p]),U.useEffect(()=>{const N=M=>M instanceof Date?new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime():null,F=(t==null?void 0:t.start)??null,z=(t==null?void 0:t.end)??null;(N(a.start)!==N(F)||N(a.end)!==N(z))&&(l({start:F,end:z}),d((F==null?void 0:F.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const P=N=>{if(!a.start||a.start&&a.end){l({start:N,end:null});return}if(a.start&&!a.end)if(N<a.start)l({start:N,end:null});else{const F={start:a.start,end:N};l(F),e==null||e(F),i&&g(!1)}};return _.jsxs(NL,{ref:D,children:[_.jsx(HL,{}),_.jsx(PL,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(N=>!N)}),p&&_.jsxs(jL,{children:[_.jsxs(LL,{children:[_.jsx(UL,{dir:"prev",onClick:()=>d(N=>N-1)}),_.jsx("span",{children:c}),_.jsx(qL,{dir:"next",onClick:()=>d(N=>N+1)})]}),_.jsx(BL,{children:["일","월","화","수","목","금","토"].map(N=>_.jsx("span",{children:N},N))}),_.jsx(VL,{children:_.jsx(zL,{ref:T,children:Array.from({length:12}).map((N,F)=>{const z=new Date(c,F,1),M=$=>new Date($.getFullYear(),$.getMonth(),$.getDate()).getTime(),J=$=>$.getFullYear()===z.getFullYear()&&$.getMonth()===z.getMonth();return _.jsxs($L,{className:"month-box",children:[_.jsx(FL,{children:String(F+1).padStart(2,"0")}),_.jsx(kL,{mode:"single",month:z,selected:void 0,onDayClick:P,showOutsideDays:!1,modifiers:{start:$=>!!a.start&&J($)&&M($)===M(a.start),end:$=>!!a.end&&J($)&&M($)===M(a.end),middle:$=>{if(!a.start||!a.end||!J($))return!1;const re=M($),C=M(a.start),S=M(a.end);return re>C&&re<S}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},F)})})})]})]})}const NL=H.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,PL=H.input`
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
`,VL=H.div`
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
`,jL=H.div`
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
`,LL=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,mA=H.button`
  width: 48px;
  height: 100%;
  background-image: url(${OL});
  background-repeat: no-repeat;
`,UL=H(mA)``,qL=H(mA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,BL=H.div`
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
`,zL=H.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,$L=H.div`
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
`,FL=H.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,HL=h1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,vl="진행 상태 선택",Zu="요청자 선택",Ju="디자이너 선택",Rg={start:null,end:null},YL=t=>t===3?"manager":t===2?"designer":"requester",GL={requester:[vl,"대기","진행중","검수중","완료","취소"],manager:[vl,"대기","진행중","검수중","검수요청","완료","취소"],designer:[vl,"대기","진행중","검수요청","완료","취소"]},WL=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function QL({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=U.useState(Rg),[v,E]=U.useState(vl),[T,D]=U.useState(Zu),[P,q]=U.useState(Ju),N=()=>{E(vl),g(Rg),D(Zu),q(Ju),t(vl),e(Rg),a==null||a(Zu),c==null||c(Ju)},F=YL(d),z=GL[F];return _.jsxs(KL,{children:[_.jsx(ML,{value:p,onApply:M=>{g(M),e(M)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(Cg,{"aria-label":"요청자 선택",value:T,onChange:M=>{D(M.target.value),a==null||a(M.target.value)},children:[_.jsx("option",{value:Zu,children:Zu}),i.map(M=>_.jsx("option",{value:M,children:M},M))]}),_.jsxs(Cg,{"aria-label":"디자이너 선택",value:P,onChange:M=>{const J=M.target.value;q(J),c==null||c(J)},children:[_.jsx("option",{value:Ju,children:Ju}),l.map(M=>_.jsx("option",{value:M,children:M},M))]})]}),_.jsx(Cg,{value:v,onChange:M=>{const J=M.target.value,$=WL(F,J);E(J),t($)},children:z.map(M=>_.jsx("option",{value:M,children:M},M))}),_.jsx(XL,{type:"button",onClick:N,children:"필터 초기화"})]})}const KL=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Cg=H.select`
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
  background-image: url(${zx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,XL=H.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,ZL="./assets/search-icon-g0O6fOpZ.svg";function JL({keyword:t,onKeywordChange:e,onSearch:n}){const i=a=>{e(a),n(a.trim())};return _.jsx(e3,{children:_.jsx(t3,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>i(a.target.value),onKeyDown:a=>{a.key==="Escape"&&i("")}})})}const e3=H.div`
  position: relative;
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 11px 14.5px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;

  /* 🔍 아이콘: 버튼 제거하고 래퍼에 ::after로 표시 */
  &::after {
    content: "";
    position: absolute;
    right: 12px;
    top: 50%;
    display: block;
    width: 24px;
    height: 24px;
    background: url(${ZL}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`,t3=H.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;function C_({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g,roleNumber:v}){return _.jsxs(n3,{children:[_.jsx(QL,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g,roleNumber:v}),_.jsx(JL,{keyword:i,onKeywordChange:a,onSearch:n})]})}const n3=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`,r3=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],i3=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return r3[i]}return e}).join("");function D_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=i3(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function I_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const s3="진행 상태 선택";function a3({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=U.useState(""),[l,c]=U.useState([]),[d,p]=U.useState("진행 상태 선택"),[g,v]=U.useState({start:null,end:null}),[E,T]=U.useState(""),[D,P]=U.useState("");U.useEffect(()=>{const I=qc(da,O=>{O&&O.displayName&&a(O.displayName)});return()=>I()},[]),U.useEffect(()=>{if(!i)return;const I=di(Rr(wt,"design_request"),Cr("requester","==",i),E_("design_request_id","desc")),O=Jd(I,k=>{const Me=k.docs.map(oe=>({id:oe.id,...oe.data()}));c(Me)});return()=>O()},[i]);const q=I=>v(I),N=I=>p(I),F=I=>P(I),z=I=>I==="검수요청"?"진행중":I,M=I=>new Date(I.getFullYear(),I.getMonth(),I.getDate()),J=I=>{if(!I)return null;if(typeof I=="object"&&typeof I.toDate=="function")return M(I.toDate());if(I instanceof Date)return M(I);if(typeof I=="number")return M(new Date(I));if(typeof I=="string"){const k=I.replace(/\./g,"-").replace(/\//g,"-").split("-");if(k.length===3){const[oe,Y,ie]=k.map(Number),fe=oe>31?oe:new Date().getFullYear();return new Date(fe,Y-1,ie)}if(k.length===2){const[oe,Y]=k.map(Number),ie=new Date().getFullYear();return new Date(ie,oe-1,Y)}const Me=new Date(I);return isNaN(+Me)?null:M(Me)}return null},$=U.useMemo(()=>l.map(I=>{const O=z(I.status);return D_({...I,displayStatus:O})}),[l]),re=U.useMemo(()=>{const I=g.start?M(g.start):null,O=g.end?M(g.end):null,k=D.trim();return $.filter(Me=>{if(d!==s3&&Me.displayStatus!==d)return!1;if(I&&O){const oe=J(Me.request_date)||J(Me.requested_at)||J(Me.requestDate);if(!oe||oe<I||oe>O)return!1}return!!I_(Me,k)})},[$,d,g,D]),C=async I=>{await fi(zn(wt,"design_request",I),{status:"완료",requester_review_status:"검수완료"}),c(O=>O.map(k=>k.id===I?{...k,status:"완료",requester_review_status:"검수완료"}:k)),alert("완료 처리되었습니다.")},S=async I=>{const O=zn(wt,"design_request",I);await fi(O,{requester_edit_state:!0});const k=await Zd(O);if(k.exists()){const Me={id:k.id,...k.data()};e(Me),t(!0)}},A=I=>{n(I),t(!0)},V=async I=>{await fi(zn(wt,"design_request",I),{status:"취소"}),c(O=>O.map(k=>k.id===I?{...k,status:"취소"}:k))};return _.jsxs(_.Fragment,{children:[_.jsx(x_,{}),_.jsxs(o3,{children:[_.jsx(C_,{roleNumber:1,onApplyStatus:N,onApplyRange:q,onSearch:F,keyword:E,onKeywordChange:T}),_.jsx(SV,{data:re,onReviewComplete:C,onCancel:V,onEditClick:S,onDetailClick:A})]})]})}const o3=H.div`
  padding: 0 48px;
`;function l3({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=E=>{if(!E)return"-";if(E.toDate){const T=E.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return E},d=E=>E==="검수중"?"검수요청":E??"대기",p=E=>E,g=d(n.status),v=E=>{E.stopPropagation(),l(e)};return _.jsxs(u3,{isCanceled:e.status==="취소",children:[_.jsx(Pr,{children:t}),_.jsx(Pr,{children:_.jsx(m3,{onClick:v,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Pr,{children:e.company}),_.jsx(Pr,{children:c(e.request_date)}),_.jsx(c3,{children:c(e.completion_dt)}),_.jsx(h3,{children:c(e.open_dt)}),_.jsx(Pr,{children:e.merchandiser}),_.jsx(Pr,{children:e.requester}),_.jsx(Pr,{children:e.task_form}),_.jsx(f3,{children:_.jsxs(g3,{children:[_.jsx(y3,{children:e.task_type}),_.jsx(_3,{children:e.task_type_detail})]})}),_.jsx(d3,{children:_.jsxs(v3,{children:[e.emergency?_.jsx(gA,{children:"긴급"}):"",_.jsx(E3,{onClick:v,children:e.requirement})]})}),_.jsx(Pr,{children:_.jsx(w3,{href:e.url,target:"_blank"})}),_.jsx(p3,{children:_.jsx(b3,{onClick:v,children:e.note||""})}),_.jsx(iT,{children:_.jsx(sT,{type:"date",value:n.start_dt??"",onChange:E=>i(e.id,"start_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(iT,{children:_.jsx(sT,{type:"date",value:n.end_dt??"",onChange:E=>i(e.id,"end_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(Pr,{children:_.jsx(T3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:E=>i(e.id,"result_url",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(Pr,{children:_.jsxs("select",{value:g,onChange:E=>i(e.id,"status",p(E.target.value)),disabled:e.status==="취소"||e.status==="완료",children:[_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]})}),_.jsx(Pr,{children:_.jsx(yA,{onClick:()=>a(e.id),disabled:e.status==="취소"||e.status==="완료",children:"저장"})})]})}const u3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${gA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${yA} {
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
`,Pr=H.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }
`,c3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,h3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,f3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,d3=H.td`
  line-height: 15px;
  text-align: left;
`,p3=H.td`
  line-height: 15px;
  padding: 0 12px;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
  text-align: left;
  background-color: #fffff1;

`,iT=H.td`
  padding: 0 6px;
`,m3=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -2px;
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
`,g3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,y3=H.span`
  
`,_3=H.span`
  
`,v3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,gA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
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
`,w3=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${S_}) no-repeat center / contain;
`,b3=H.span`
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
`,sT=H.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,T3=H.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,yA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function S3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(x3,{children:_.jsxs(A3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"140px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(mn,{children:"번호"}),_.jsx(mn,{children:"문서번호"}),_.jsx(mn,{children:"회사"}),_.jsx(mn,{children:"요청일"}),_.jsxs(mn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(mn,{children:"오픈일"}),_.jsx(mn,{children:"담당 MD"}),_.jsx(mn,{children:"요청자"}),_.jsx(mn,{children:"업무부서"}),_.jsx(mn,{children:"업무유형"}),_.jsx(mn,{children:"작업항목"}),_.jsxs(mn,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(mn,{children:"메모"}),_.jsx(mn,{children:"디자인 시작일"}),_.jsx(mn,{children:"디자인 종료일"}),_.jsx(mn,{children:"산출물 링크"}),_.jsx(mn,{children:"진행상태"}),_.jsx(mn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(l3,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const x3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,A3=H.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
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

  &:nth-of-type(13) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`,R3="진행 상태 선택";function C3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=U.useState([]),[a,l]=U.useState(""),[c,d]=U.useState({}),[p,g]=U.useState("진행 상태 선택"),[v,E]=U.useState({start:null,end:null}),[T,D]=U.useState(""),[P,q]=U.useState("");U.useEffect(()=>{const oe=qc(da,Y=>{Y!=null&&Y.displayName&&l(Y.displayName)});return()=>oe()},[]),U.useEffect(()=>{if(!a)return;const oe=di(Rr(wt,"design_request"),Cr("assigned_designer","==",a),E_("design_request_id","desc")),Y=Jd(oe,ie=>{const fe=ie.docs.map(ye=>({id:ye.id,...ye.data()}));i(fe)});return()=>Y()},[a]);const N=oe=>E(oe),F=oe=>g(oe),z=oe=>new Date(oe.getFullYear(),oe.getMonth(),oe.getDate()),M=oe=>{if(!oe)return null;if(typeof oe=="object"&&typeof oe.toDate=="function")return z(oe.toDate());if(oe instanceof Date)return z(oe);if(typeof oe=="number")return z(new Date(oe));if(typeof oe=="string"){const ie=oe.replace(/\./g,"-").replace(/\//g,"-").split("-");if(ie.length===3){const[ye,L,te]=ie.map(Number),he=ye>31?ye:new Date().getFullYear();return new Date(he,L-1,te)}if(ie.length===2){const[ye,L]=ie.map(Number),te=new Date().getFullYear();return new Date(te,ye-1,L)}const fe=new Date(oe);return isNaN(+fe)?null:z(fe)}return null},J=oe=>{const Y=oe.getFullYear(),ie=String(oe.getMonth()+1).padStart(2,"0"),fe=String(oe.getDate()).padStart(2,"0");return`${Y}-${ie}-${fe}`},$=oe=>{if(!oe)return"";if(typeof oe=="object"&&typeof oe.toDate=="function")return J(oe.toDate());if(oe instanceof Date)return J(oe);const Y=new Date(oe);return isNaN(+Y)?"":J(Y)},re=U.useMemo(()=>n.map(oe=>({...oe,designer_start_date:$(oe.designer_start_date),designer_end_date:$(oe.designer_end_date),result_url:oe.result_url??"",status:oe.status??"대기"})),[n]),C=oe=>oe==="검수중"?"검수요청":oe??"대기",S=U.useMemo(()=>re.map(oe=>{const Y=C(oe.status);return D_({...oe,displayStatus:Y})}),[re]),A=U.useMemo(()=>{const oe=v.start?z(v.start):null,Y=v.end?z(v.end):null;return S.filter(ie=>{let fe=!0;if(p&&p!==R3&&C(ie.status)!==p&&(fe=!1),fe&&oe&&Y){const ye=M(ie.request_date)||M(ie.requested_at)||M(ie.requestDate);(!ye||ye<oe||ye>Y)&&(fe=!1)}return fe&&P&&!I_(ie,P)&&(fe=!1),fe})},[S,p,v,P]),V=oe=>q(oe);U.useEffect(()=>{n.length&&d(oe=>{const Y={...oe};return n.forEach(ie=>{Y[ie.id]===void 0&&(Y[ie.id]={start_dt:$(ie.designer_start_date),end_dt:$(ie.designer_end_date),result_url:ie.result_url||"",status:ie.status||"대기"})}),Y})},[n]);const I=(oe,Y,ie)=>{d(fe=>({...fe,[oe]:{...fe[oe],[Y]:ie}}))},O=oe=>{if(!oe)return null;const Y=new Date(oe);return isNaN(+Y)?null:vt.fromDate(Y)},k=async oe=>{const Y=c[oe];if(!Y){alert("변경된 내용이 없습니다.");return}await fi(zn(wt,"design_request",oe),{designer_start_date:O(Y.start_dt),designer_end_date:O(Y.end_dt),result_url:Y.result_url??"",status:Y.status??"대기"}),alert("저장되었습니다.")},Me=oe=>{e(oe),t(!0)};return _.jsxs(D3,{children:[_.jsx(x_,{}),_.jsxs(I3,{children:[_.jsx(k3,{children:"디자이너 화면"}),_.jsx(C_,{roleNumber:2,onApplyStatus:F,onApplyRange:N,onSearch:V,keyword:T,onKeywordChange:D}),_.jsx(S3,{requests:A,formData:c,onChange:I,onSave:k,onDetailClick:Me})]})]})}const D3=H.div``,I3=H.div`
  padding: 0 48px;
`,k3=H.h2`
  margin-top: 20px;
`;function O3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d,workHourValue:p,onChangeWorkHour:g,onSaveWorkHour:v,onStartEditWorkHour:E,onCancelEditWorkHour:T}){const P=(M=>M==="검수요청"?"검수중":M==="검수중"?"검수요청":M)(e.status),q=M=>{if(!M)return"-";if(M.toDate){const J=M.toDate();return`${J.getMonth()+1}/${J.getDate()}`}return M},N=M=>{M.stopPropagation(),d(e)},F=!!e.work_hour_edit_state,z=U.useCallback(M=>{const J=M.relatedTarget;(!J||!M.currentTarget.contains(J))&&T()},[T]);return _.jsxs(M3,{isCanceled:e.status==="취소",children:[_.jsx(Bn,{children:t}),_.jsx(Bn,{children:_.jsx(U3,{onClick:N,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Bn,{children:e.company}),_.jsx(Bn,{children:q(e.request_date)}),_.jsx(N3,{children:q(e.completion_dt)}),_.jsx(P3,{children:q(e.open_dt)}),_.jsx(Bn,{children:e.merchandiser}),_.jsx(Bn,{children:e.requester}),_.jsx(Bn,{children:e.task_form}),_.jsx(V3,{children:_.jsxs(q3,{children:[_.jsx(B3,{children:e.task_type}),_.jsx(z3,{children:e.task_type_detail})]})}),_.jsx(j3,{children:_.jsxs($3,{children:[e.emergency?_.jsx(_A,{children:"긴급"}):"",_.jsx(F3,{onClick:N,children:e.requirement})]})}),_.jsx(Bn,{children:_.jsx(aT,{href:e.url,target:"_blank"})}),_.jsx(L3,{children:_.jsx(H3,{onClick:N,children:e.note||""})}),_.jsx(Bn,{children:_.jsx(Y3,{status:P,children:P})}),_.jsx(Bn,{children:e.result_url?_.jsx(aT,{href:e.result_url,target:"_blank"}):""}),_.jsx(Bn,{children:q(e.designer_start_date)}),_.jsx(Bn,{children:q(e.designer_end_date)}),_.jsxs(Bn,{children:[_.jsxs(G3,{value:i,onChange:M=>a(M.target.value),disabled:e.status==="취소"||e.status==="완료",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(M=>_.jsx("option",{value:M.name,children:M.name},M.id))]}),_.jsx(vA,{onClick:l,disabled:e.status==="취소"||e.status==="완료",children:"배정"})]}),_.jsx(Bn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(EA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(W3,{children:"검수완료"}):""}),_.jsx(Bn,{children:F?_.jsxs(Z3,{tabIndex:-1,onBlur:z,children:[_.jsx(Q3,{type:"text",placeholder:"공수 입력",value:p,onChange:M=>g(M.target.value),onClick:M=>M.stopPropagation(),disabled:e.status==="취소",autoFocus:!0}),_.jsx(K3,{type:"button",onClick:M=>{M.stopPropagation(),v()},disabled:e.status==="취소",children:"수정"})]}):e.out_work_hour!=null?_.jsx(X3,{tabIndex:0,onClick:M=>{M.stopPropagation(),E()},onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),E())},children:e.out_work_hour}):null})]})}const M3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${_A} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${EA}, ${vA} {
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
`,Bn=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(14) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,N3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,P3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,V3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,j3=H.td`
  line-height: 15px;
  text-align: left;
`,L3=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,U3=H.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -2px;
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
`,q3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,B3=H.span`
  
`,z3=H.span`
  
`,$3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,_A=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,F3=H.span`
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
`,aT=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${S_}) no-repeat center / contain;
`,H3=H.span`
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
`,Y3=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,vA=H.button`
  margin-left:10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};

  &:disabled {
    background-color: ${({theme:t})=>t.colors.gray07};
    color: ${({theme:t})=>t.colors.gray06};
    border-color: ${({theme:t})=>t.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`,G3=H.select`
  width: 90px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,EA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,W3=H.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,Q3=H.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`,K3=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,X3=H.span`
  display: inline-block;
  min-width: 24px;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`,Z3=H.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function J3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c,workHours:d,onChangeWorkHour:p,onSaveWorkHour:g,onStartEditWorkHour:v,onCancelEditWorkHour:E}){return _.jsx(eU,{children:_.jsxs(tU,{children:[_.jsx(nU,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"140px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"110px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Gt,{children:"번호"}),_.jsx(Gt,{children:"문서번호"}),_.jsx(Gt,{children:"회사"}),_.jsx(Gt,{children:"요청일"}),_.jsxs(Gt,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Gt,{children:"오픈일"}),_.jsx(Gt,{children:"담당 MD"}),_.jsx(Gt,{children:"요청자"}),_.jsx(Gt,{children:"업무부서"}),_.jsx(Gt,{children:"업무형태"}),_.jsx(Gt,{children:"작업항목"}),_.jsxs(Gt,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(Gt,{children:"메모"}),_.jsx(Gt,{children:"진행상태"}),_.jsxs(Gt,{children:["산출물",_.jsx("br",{}),"URL"]}),_.jsxs(Gt,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(Gt,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(Gt,{children:"디자이너 배정"}),_.jsx(Gt,{children:"검수"}),_.jsx(Gt,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((T,D)=>_.jsx(O3,{index:D+1,item:T,designerList:e,selectedDesigner:n[T.id]||"",onDesignerSelect:P=>i(T.id,P),onAssignDesigner:()=>a(T.id),onSendToRequester:()=>l(T.id),onDetailClick:c,workHourValue:d[T.id]??"",onChangeWorkHour:P=>p(T.id,P),onSaveWorkHour:()=>g(T.id),onStartEditWorkHour:()=>v(T.id),onCancelEditWorkHour:()=>E(T.id)},T.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:20,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const eU=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,tU=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,nU=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Gt=H.th`
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

  &:nth-of-type(14) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19), &:nth-of-type(20) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function rU({onClick:t,loading:e,label:n="Export CSV"}){return _.jsx(iU,{type:"button",onClick:t,disabled:!!e,children:e?"추출 중…":n})}const iU=H.button`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.colors.black};
  background: ${({theme:t})=>t.colors.white01};
  font-size: 14px;
  &:disabled { opacity: 0.5; pointer-events: none; }
`,oT=t=>{if(t==null)return"";const e=String(t).replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e},sU=(t,e)=>e.split(".").reduce((n,i)=>n?n[i]:void 0,t),Rf=t=>t<10?`0${t}`:`${t}`,aU=t=>{if(t==null)return"";if(typeof t=="object"&&typeof t.toDate=="function"){const e=t.toDate();return`${e.getFullYear()}-${Rf(e.getMonth()+1)}-${Rf(e.getDate())}`}return t instanceof Date?`${t.getFullYear()}-${Rf(t.getMonth()+1)}-${Rf(t.getDate())}`:String(t)};function oU(t){const{rows:e,fields:n,filename:i="export.csv",headers:a,serialize:l=aU}=t,c=n.map(E=>oT((a==null?void 0:a[E])??E)).join(","),d=e.map(E=>{const T={id:E.id,...E};return n.map(P=>oT(l(sU(T,P)))).join(",")}),p="\uFEFF"+[c,...d].join(`\r
`),g=new Blob([p],{type:"text/csv;charset=utf-8"}),v=document.createElement("a");v.href=URL.createObjectURL(g),v.download=i,v.click(),URL.revokeObjectURL(v.href)}const lT="진행 상태 선택",uT="요청자 선택",cT="디자이너 선택";function lU({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=U.useState([]),[a,l]=U.useState([]),[c,d]=U.useState({}),[p,g]=U.useState({}),[v,E]=U.useState(lT),[T,D]=U.useState({start:null,end:null}),[P,q]=U.useState(""),[N,F]=U.useState(""),[z,M]=U.useState([]),[J,$]=U.useState(uT),[re,C]=U.useState([]),[S,A]=U.useState(cT),[V,I]=U.useState(!1);U.useEffect(()=>{const de=di(Rr(wt,"design_request"),E_("design_request_id","desc")),Te=Jd(de,we=>{const Pe=we.docs.map(it=>({id:it.id,...it.data()}));i(Pe)});return()=>Te()},[]),U.useEffect(()=>{n.length&&d(de=>{const Te={...de};return n.forEach(we=>{Te[we.id]===void 0&&(Te[we.id]=we.assigned_designer??"")}),Te})},[n]),U.useEffect(()=>{n.length&&g(de=>{const Te={...de};return n.forEach(we=>{Te[we.id]===void 0&&(Te[we.id]=we.out_work_hour!=null?String(we.out_work_hour):"")}),Te})},[n]),U.useEffect(()=>{(async()=>{const Te=di(Rr(wt,"users"),Cr("role","==",2)),Pe=(await mc(Te)).docs.map(it=>({id:it.id,...it.data()}));l(Pe),C(Pe.map(it=>it.name).filter(Boolean))})()},[]);const O=(de,Te)=>{d(we=>({...we,[de]:Te}))},k=async de=>{const Te=c[de];if(!Te){alert("디자이너를 선택하세요.");return}const we=zn(wt,"design_request",de);await fi(we,{assigned_designer:Te}),alert("디자이너가 배정되었습니다!"),i(Pe=>Pe.map(it=>it.id===de?{...it,assigned_designer:Te}:it))},Me=async de=>{await fi(zn(wt,"design_request",de),{manager_review_status:"검수완료",status:"검수중"}),i(Te=>Te.map(we=>we.id===de?{...we,manager_review_status:"검수완료",status:"검수중"}:we)),alert("요청자에게 전달되었습니다.")};U.useEffect(()=>{(async()=>{const de=di(Rr(wt,"users"),Cr("role","==",1)),we=(await mc(de)).docs.map(Pe=>Pe.data().name).filter(Boolean);M(we)})()},[]);const oe=de=>{e(de),t(!0)},Y=de=>D(de),ie=de=>E(de),fe=de=>F(de.trim()),ye=de=>$(de),L=de=>A(de),te=de=>new Date(de.getFullYear(),de.getMonth(),de.getDate()),he=de=>{if(!de)return null;if(typeof de=="object"&&typeof de.toDate=="function")return te(de.toDate());if(de instanceof Date)return te(de);if(typeof de=="number")return te(new Date(de));if(typeof de=="string"){const we=de.replace(/\./g,"-").replace(/\//g,"-").split("-");if(we.length===3){const[it,Qn,Lt]=we.map(Number),Hr=it>31?it:new Date().getFullYear();return new Date(Hr,Qn-1,Lt)}if(we.length===2){const[it,Qn]=we.map(Number),Lt=new Date().getFullYear();return new Date(Lt,it-1,Qn)}const Pe=new Date(de);return isNaN(+Pe)?null:te(Pe)}return null},ce=de=>de==="검수요청"?"검수중":de==="검수중"?"검수요청":de??"대기",ve=U.useMemo(()=>n.map(de=>{const Te=ce(de.status);return D_({...de,displayStatus:Te})}),[n]),De=U.useMemo(()=>{const de=T.start?te(T.start):null,Te=T.end?te(T.end):null;return ve.filter(we=>{let Pe=!0;if(v!==lT&&we.status!==v&&(Pe=!1),Pe&&J!==uT&&we.requester!==J&&(Pe=!1),Pe&&S!==cT&&we.assigned_designer!==S&&(Pe=!1),Pe&&de&&Te){const it=he(we.request_date)||he(we.requested_at)||he(we.requestDate);(!it||it<de||it>Te)&&(Pe=!1)}return Pe&&N&&!I_(we,N)&&(Pe=!1),Pe})},[ve,v,J,S,T,N]),be=(de,Te)=>{const we=Te.replace(/[^0-9.]/g,"");g(Pe=>({...Pe,[de]:we}))},yt=async de=>{const Te=n.find(we=>we.id===de);await fi(zn(wt,"design_request",de),{work_hour_edit_state:!0}),i(we=>we.map(Pe=>Pe.id===de?{...Pe,work_hour_edit_state:!0}:Pe)),g(we=>({...we,[de]:we[de]!==void 0&&we[de]!==""?we[de]:(Te==null?void 0:Te.out_work_hour)!=null?String(Te.out_work_hour):""}))},Fe=async de=>{const Te=n.find(Kn=>Kn.id===de);if(!Te)return;const we=(p[de]??"").trim(),Pe=Number(we.replace(",","."));if(!Number.isFinite(Pe)||Pe<0){alert("유효한 공수를 입력하세요.");return}const it=di(Rr(wt,"task_work_hour"),Cr("task_form","==",Te.task_form),Cr("task_type","==",Te.task_type)),Qn=await mc(it);let Lt=1;if(!Qn.empty){const Kn=Qn.docs[0].data();Lt=Number(Kn.task_work_times)||1}const Hr=Number((Pe*Lt).toFixed(2));await fi(zn(wt,"design_request",de),{out_work_hour:Pe,in_work_hour:Hr,work_hour_edit_state:!1}),i(Kn=>Kn.map(cr=>cr.id===de?{...cr,out_work_hour:Pe,in_work_hour:Hr,work_hour_edit_state:!1}:cr)),alert("공수 수정 완료")},Tt=async()=>{I(!0);try{oU({rows:De,fields:["id","design_request_id","request_date","requester","task_form","task_type","requirement","status","assigned_designer","designer_start_date","designer_end_date","out_work_hour","in_work_hour"],headers:{id:"문서ID",design_request_id:"문서번호",request_date:"요청일",requester:"요청자",task_form:"업무형태",task_type:"업무타입",requirement:"작업항목",status:"진행상태",assigned_designer:"디자이너",designer_start_date:"디자인 시작일",designer_end_date:"디자인 종료일",out_work_hour:"공수(외부)",in_work_hour:"공수(내부)"},filename:"design_request_current_view.csv"})}finally{I(!1)}},Cn=async de=>{await fi(zn(wt,"design_request",de),{work_hour_edit_state:!1}),i(Te=>Te.map(we=>we.id===de?{...we,work_hour_edit_state:!1}:we))};return _.jsxs(uU,{children:[_.jsx(x_,{}),_.jsxs(cU,{children:[_.jsx(hU,{children:"매니저 요청리스트"}),_.jsx(C_,{roleNumber:3,onApplyStatus:ie,onApplyRange:Y,onSearch:fe,keyword:P,onKeywordChange:q,isManager:!0,requesterOptions:z,onApplyRequester:ye,designerOptions:re,onApplyDesigner:L}),_.jsx(rU,{onClick:Tt,loading:V}),_.jsx(J3,{data:De,designerList:a,selectedDesigners:c,designerSelect:O,assignDesigner:k,sendToRequester:Me,onDetailClick:oe,workHours:p,onChangeWorkHour:be,onSaveWorkHour:Fe,onStartEditWorkHour:yt,onCancelEditWorkHour:Cn})]})]})}const uU=H.div``,cU=H.div`
  padding: 0 48px;
`,hU=H.h2`
  margin-top: 20px;
`;function fU({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(a3,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(C3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(lU,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(dU,{children:a()})}const dU=H.main``,pU="./assets/aside-logo-DoEwMgfJ.svg",mU="./assets/myrequest-icon-DhmqrZY6.svg";function gU({item:t}){return _.jsxs(vU,{status:t.status,children:[_.jsx(EU,{children:t.status}),_.jsx(wU,{status:t.status,children:t.count})]})}const yU=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},_U=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},vU=H.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>yU(t,e)};
`,EU=H.span`
  font-size: 16px;
  font-weight: 500;
`,wU=H.span`
  position: relative;
  width: 10px;
  font-size: 14px;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -40px;
    display: block;
    width: 1px;
    height: 18px;
    transform: translateY(-50%);
    background-color: ${({status:t,theme:e})=>_U(t,e)};
  }
`,Ct={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},bU=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG,Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 2:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ,Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 3:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수중",count:n([Ct.REQ])},{status:"검수요청",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];default:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}]}},TU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function SU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=bU(e,t);return _.jsxs(xU,{children:[_.jsxs(AU,{children:[_.jsx(RU,{src:pU}),_.jsx(CU,{children:"업무 관리시스템"})]}),e===1&&_.jsx(DU,{children:_.jsx(IU,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(kU,{children:[_.jsxs(OU,{children:[_.jsx(MU,{src:mU}),_.jsx(NU,{children:TU(e,n)})]}),_.jsx(PU,{children:a.map(l=>_.jsx(gU,{item:l},l.status))})]})]})}const xU=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,AU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,RU=H.img`
  margin-right: 8px;
`,CU=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,DU=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,IU=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,kU=H.div`
  padding: 0 24px;
`,OU=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,MU=H.img``,NU=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,PU=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function VU({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(jU,{isVisible:t,onClick:e}),_.jsx(LU,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const jU=H.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,LU=H.div`
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
`,wA="./assets/requestformexit-button-BcAG546a.svg",UU="./assets/checkbox-checked-eOVFoR8b.svg",Cf={completion_dt:"",open_dt:"",merchandiser:"",task_form:"",task_type:"",task_type_detail:"",requirement:"",url:"",note:"",emergency:!1},hT=["GHS","MHC","MHC/GHS"],fT=["프론트테마","별도기획전","일자별배너","핫새배너","큐레이션배너","GNB-기획전(전문관)","GNB-주류이지픽업","GNB-택배배송관","페이/카드프로모션","이벤트배너","상품상세","제휴","클럽","팝업","푸시","홈테마","즉시배송","트레이딩","이벤트","기타"],dT=["M영업기획팀","디지털마케팅팀","M상품1팀","M상품2팀","M상품3팀","TV영업기획팀","TC영업기획팀","미디어컨텐츠팀","전략기획팀","MC서비스기획팀"],qU=["프로모션","배너(프로모션,연관)","배너(마케팅)","배너(상품)","배너(etv/etcom)","배너(엔라방)","썸네일(그룹)"],pT={프로모션:["마케팅","L-FULL","L-템플릿","상품(식품/공산품)","브랜드템플릿","etv/etcom","프로모션 수정"],"배너(프로모션,연관)":["템플릿","N썸네일형","공통","기타"],"배너(마케팅)":["템플릿","N썸네일형","공통","광고성","몰전단기간성"],"배너(상품)":["템플릿","공통"],"배너(etv/etcom)":["템플릿","공통"],"배너(엔라방)":["템플릿","공통","마케팅"],"썸네일(그룹)":["그룹코드_프로모","1팀","2팀","3팀","etv/etcom","엔라방"]},BU=t=>(t??"").trim().toLowerCase(),Yn=t=>BU(t)==="nsmall",zU=t=>Yn(t)?{forms:[...dT],types:[...qU],formDefault:dT[0],typeDefault:"업무유형을 선택해주세요."}:{forms:[...hT],types:[...fT],formDefault:hT[0],typeDefault:fT[0]};function mT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=U.useState(Cf),[d,p]=U.useState([]),[g,v]=U.useState(""),E=U.useMemo(()=>zU(g),[g]),T=U.useMemo(()=>Yn(g)?pT[l.task_type]??[]:[],[g,l.task_type]),D=U.useMemo(()=>{const S=[...E.forms];return a&&l.task_form&&!S.includes(l.task_form)&&S.unshift(l.task_form),S},[E.forms,a,l.task_form]),P=U.useMemo(()=>{const S=[...E.types];return a&&l.task_type&&!S.includes(l.task_type)&&S.unshift(l.task_type),S},[E.types,a,l.task_type]),q=(S,A)=>{if(S==="task_type"&&Yn(g)){c(V=>({...V,task_type:A,task_type_detail:""}));return}c(V=>({...V,[S]:A}))},N=()=>p(S=>[...S,{...Cf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}]),F=S=>p(A=>A.filter((V,I)=>I!==S)),z=(S,A,V)=>p(I=>{const O=[...I];return A==="task_type"&&Yn(g)?O[S]={...O[S],task_type:V,task_type_detail:""}:O[S]={...O[S],[A]:V},O}),M=S=>S?vt.fromDate(new Date(S)):null,J=async()=>{const S=new Date,A=S.getFullYear().toString().slice(2),V=(S.getMonth()+1).toString().padStart(2,"0"),I=di(Rr(wt,"design_request"),Cr("design_request_id",">=",`H${A}${V}000`),Cr("design_request_id","<",`H${A}${V}999`)),O=await mc(I);return{year:A,month:V,base:O.size}},$=(S,A,V)=>`H${S}${A}${V.toString().padStart(3,"0")}`,re=async(S,A)=>{if(!S||!A)return{base:null,times:null};const V=di(Rr(wt,"task_work_hour"),Cr("task_form","==",S),Cr("task_type","==",A)),I=await mc(V);if(I.empty)return{base:null,times:null};const O=I.docs[0].data(),k=typeof O.task_work_hour=="number"?O.task_work_hour:null,Me=typeof O.task_work_times=="number"?O.task_work_times:null;return{base:k,times:Me}},C=async S=>{if(S.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await fi(zn(wt,"design_request",e.id),{completion_dt:M(l.completion_dt),open_dt:M(l.open_dt),merchandiser:l.merchandiser??"",task_form:l.task_form||E.formDefault,task_type:l.task_type||E.typeDefault,task_type_detail:l.task_type_detail??"",requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:dy()}),alert("요청이 수정되었습니다!"),i();return}const A=[l,...d],V=A.findIndex(Y=>!Y.requirement);if(V!==-1){alert(`${V+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:I,month:O,base:k}=await J();let Me=k;const oe=new Date;for(const Y of A){Me+=1;const ie=$(I,O,Me),fe=Y.task_form||E.formDefault,ye=Y.task_type||E.typeDefault,{base:L,times:te}=await re(Y.task_form,Y.task_type),he=L!=null&&te!=null?Number((L*te).toFixed(2)):null;await j4(Rr(wt,"design_request"),{design_request_id:ie,request_date:M(oe.toISOString()),merchandiser:Y.merchandiser??"",requester:t,company:g,completion_dt:M(Y.completion_dt),open_dt:M(Y.open_dt),task_form:fe,task_type:ye,task_type_detail:Y.task_type_detail??"",requirement:Y.requirement,url:Y.url,note:Y.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:Y.emergency,requester_edit_state:!1,designer_edit_state:!1,in_work_hour:he,out_work_hour:L,work_hour_edit_state:!1,created_at:dy(),updated_at:null,delete_at:null})}alert(`${A.length}건이 등록되었습니다!`),p([]),c(Cf),i()};return U.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",merchandiser:e.merchandiser??"",task_form:e.task_form??"",task_type:e.task_type??"",task_type_detail:e.task_type_detail??"",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),U.useEffect(()=>{!n||a||(c({...Cf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}),p([]))},[n,a,E.formDefault,E.typeDefault]),U.useEffect(()=>{const S=qc(da,async A=>{var I;if(!A){v("");return}const V=await Zd(zn(wt,"users",A.uid));v(((I=V.data())==null?void 0:I.company)??"")});return()=>S()},[]),U.useEffect(()=>{a||c(S=>{const A={...S};return E.forms.includes(A.task_form||"")||(A.task_form=E.formDefault),E.types.includes(A.task_type||"")||(A.task_type=E.typeDefault,A.task_type_detail=""),A})},[E.forms,E.types,E.formDefault,E.typeDefault,a]),_.jsxs(_.Fragment,{children:[_.jsxs(FU,{children:[_.jsx(HU,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(YU,{type:"button",onClick:i})]}),_.jsxs($U,{onSubmit:C,children:[_.jsxs(GU,{children:[!a&&d.map((S,A)=>{const V=Yn(g)?pT[S.task_type]??[]:[],I=Yn(g)&&S.task_type&&S.task_type!==E.typeDefault;return _.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",A+1]}),_.jsx("button",{type:"button",onClick:()=>F(A),children:"삭제"})]}),_.jsxs(gT,{children:[_.jsx(yT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(kt,{children:"문서번호"}),_.jsx(Ot,{})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`merchandiser_ex_${A}`,children:"담당 MD"})}),_.jsx(Ot,{children:_.jsx(If,{id:`merchandiser_ex_${A}`,type:"text",value:S.merchandiser||"",onChange:O=>z(A,"merchandiser",O.target.value),placeholder:"담당 MD 이름 또는 ID를 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`completion_dt_ex_${A}`,children:"완료 요청일"})}),_.jsx(Ot,{children:_.jsx(Df,{id:`completion_dt_ex_${A}`,type:"date",value:S.completion_dt||"",onChange:O=>z(A,"completion_dt",O.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`open_dt_ex_${A}`,children:"오픈일"})}),_.jsx(Ot,{children:_.jsx(Df,{id:`open_dt_ex_${A}`,type:"date",value:S.open_dt||"",onChange:O=>z(A,"open_dt",O.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`task_form_ex_${A}`,children:"업무 부서"})}),_.jsx(Ot,{children:_.jsx(Qa,{id:`task_form_ex_${A}`,$wide:Yn(g),value:S.task_form||E.formDefault,onChange:O=>z(A,"task_form",O.target.value),children:E.forms.map(O=>_.jsx("option",{value:O,children:O},O))})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`task_type_ex_${A}`,children:"업무 유형"})}),_.jsx(Ot,{children:_.jsxs(Qa,{id:`task_type_ex_${A}`,$wide:Yn(g),value:S.task_type||E.typeDefault,onChange:O=>z(A,"task_type",O.target.value),children:[Yn(g)&&_.jsx("option",{value:"",children:"업무 유형을 선택해주세요"}),E.types.map(O=>_.jsx("option",{value:O,children:O},O))]})})]}),I&&_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`task_type_detail_ex_${A}`,children:"업무 유형 상세"})}),_.jsx(Ot,{children:_.jsxs(Qa,{id:`task_type_detail_ex_${A}`,$wide:Yn(g),value:S.task_type_detail||"",onChange:O=>z(A,"task_type_detail",O.target.value),children:[_.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),V.map(O=>_.jsx("option",{value:O,children:O},O))]})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`requirement_ex_${A}`,children:"작업 항목"})}),_.jsx(Ot,{children:_.jsx(If,{id:`requirement_ex_${A}`,type:"text",value:S.requirement||"",onChange:O=>z(A,"requirement",O.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`emergency_ex_${A}`,children:"긴급 일정"})}),_.jsx(Ot,{children:_.jsx(ET,{children:_.jsxs(wT,{htmlFor:`emergency_ex_${A}`,children:[_.jsx(bT,{id:`emergency_ex_${A}`,type:"checkbox",checked:!!S.emergency,onChange:O=>z(A,"emergency",O.target.checked)}),_.jsx(TT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`url_ex_${A}`,children:"요청서 URL"})}),_.jsx(Ot,{children:_.jsx(_T,{id:`url_ex_${A}`,value:S.url||"",onChange:O=>z(A,"url",O.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:`note_ex_${A}`,children:"메모"})}),_.jsx(Ot,{children:_.jsx(vT,{id:`note_ex_${A}`,rows:4,value:S.note||"",onChange:O=>z(A,"note",O.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},A)}),_.jsxs(gT,{children:[_.jsx(yT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(kt,{children:"문서번호"}),_.jsx(Ot,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(Ot,{children:_.jsx(Df,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:S=>q("completion_dt",S.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(Ot,{children:_.jsx(Df,{type:"date",id:"open_dt",value:l.open_dt,onChange:S=>q("open_dt",S.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"merchandiser",children:"담당 MD"})}),_.jsx(Ot,{children:_.jsx(If,{type:"text",id:"merchandiser",value:l.merchandiser||"",onChange:S=>q("merchandiser",S.target.value),placeholder:"담당 MD 이름을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"task_form",children:"업무 부서"})}),_.jsx(Ot,{children:_.jsx(Qa,{id:"task_form",$wide:Yn(g),value:l.task_form||E.formDefault,onChange:S=>q("task_form",S.target.value),children:D.map(S=>_.jsx("option",{value:S,children:S},S))})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(Ot,{children:_.jsxs(Qa,{id:"task_type",$wide:Yn(g),value:l.task_type||E.typeDefault,onChange:S=>q("task_type",S.target.value),children:[Yn(g)&&_.jsx("option",{value:"",children:"업무 유형을 선택해주세요"}),P.map(S=>_.jsx("option",{value:S,children:S},S))]})})]}),Yn(g)&&(a?l.task_type_detail?_.jsxs("tr",{children:[_.jsx(kt,{children:"업무 유형 상세"}),_.jsx(Ot,{children:_.jsx(Qa,{$wide:!0,value:l.task_type_detail,onChange:()=>{},disabled:!0,children:_.jsx("option",{value:l.task_type_detail,children:l.task_type_detail})})})]}):null:l.task_type&&l.task_type!==E.typeDefault?_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"task_type_detail",children:"업무 유형 상세"})}),_.jsx(Ot,{children:_.jsxs(Qa,{id:"task_type_detail",$wide:!0,value:l.task_type_detail||"",onChange:S=>q("task_type_detail",S.target.value),children:[_.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),T.map(S=>_.jsx("option",{value:S,children:S},S))]})})]}):null),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(Ot,{children:_.jsx(If,{type:"text",id:"requirement",value:l.requirement,onChange:S=>q("requirement",S.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(Ot,{children:_.jsx(ET,{children:_.jsxs(wT,{htmlFor:"emergency",children:[_.jsx(bT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:S=>q("emergency",S.target.checked)}),_.jsx(TT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(Ot,{children:_.jsx(_T,{id:"url",value:l.url,onChange:S=>q("url",S.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(kt,{children:_.jsx(Wt,{htmlFor:"note",children:"메모"})}),_.jsx(Ot,{children:_.jsx(vT,{id:"note",rows:2,value:l.note,onChange:S=>q("note",S.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(WU,{children:[_.jsx(QU,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(KU,{type:"button",onClick:N,children:"추가 등록하기"})]})]})]})}const $U=H.form`
  font-family: 'Pretendard';
`,FU=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,HU=H.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,YU=H.button`
  width: 24px;
  height: 24px;
  background: url(${wA}) no-repeat center;
  background-size: contain;
`,gT=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,GU=H.div`
  max-height: 690px;
  overflow: auto;
`,yT=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,kt=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Ot=H.td`
  padding: 12px 24px;
  border-right: none;
`,Wt=H.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Df=H.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,If=H.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,_T=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,vT=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,ET=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,wT=H.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,bT=H.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${UU}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,TT=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,Qa=H.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${({$wide:t})=>t?"215px":"168px"};
  padding: 7.5px 32px 7.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.white01};
  background-image: url(${zx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,WU=H.div`
  margin-top: 24px;
  text-align: center;
`,QU=H.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,KU=H.button`
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
`;function XU({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(ZU,{children:[_.jsx(JU,{children:"디자인 요청 상세"}),_.jsx(e9,{type:"button",onClick:e})]}),_.jsxs(t9,{children:[_.jsx(n9,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Vr,{children:"문서번호"}),_.jsx(Gs,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"요청일"}),_.jsx(Gs,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"완료 요청일"}),_.jsx(r9,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"오픈일"}),_.jsx(i9,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"담당 MD"}),_.jsx(Gs,{children:(t==null?void 0:t.merchandiser)||""})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"업무 부서"}),_.jsx(Gs,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"업무 유형"}),_.jsx(Gs,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"작업 항목"}),_.jsx(Gs,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"긴급 일정"}),_.jsx(Gs,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"요청서 URL"}),_.jsx(Gs,{children:t!=null&&t.url?_.jsx(a9,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"메모"}),_.jsx(s9,{children:_.jsx(o9,{children:t.note})})]})]})]})]})}const ZU=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,JU=H.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,e9=H.button`
  width: 24px;
  height: 24px;
  background: url(${wA}) no-repeat center;
  background-size: contain;
`,t9=H.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,n9=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Vr=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Gs=H.td`
  padding: 12px 24px;
  border-right: none;
`,r9=H.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,i9=H.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,s9=H.td`
  padding: 12px 24px;
  border-right: none;
  background-color: #fffff1;
`,a9=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,o9=H.p`
  min-height: 100px;
  max-height: 100px;
  overflow-y: auto;
  word-break: break-word;
`;function l9(){const[t,e]=U.useState(0),[n,i]=U.useState([]),[a,l]=U.useState(""),[c,d]=U.useState(!1),[p,g]=U.useState(void 0),[v,E]=U.useState(null);U.useEffect(()=>{const P=qc(da,async q=>{if(q){l(q.displayName||"");const N=await Zd(zn(wt,"users",q.uid));if(N.exists()){const z=N.data().role,M=q.displayName;e(z);let J;z===1?J=di(Rr(wt,"design_request"),Cr("requester","==",M)):z===2?J=di(Rr(wt,"design_request"),Cr("assigned_designer","==",M)):J=Rr(wt,"design_request"),Jd(J,$=>{const re=$.docs.map(C=>{const S=C.data();return{id:C.id,status:S.status??"대기중"}});i(re)})}}else e(0),l(""),i([])});return()=>P()},[]);const T=()=>{g(void 0),E("create"),d(!0)},D=()=>{d(!1),g(void 0)};return _.jsxs(u9,{children:[_.jsx(SU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(c9,{children:[_.jsx(eV,{}),_.jsx(fU,{userRole:t,setIsDrawerOpen:d,setEditData:P=>{g(P),E("edit")},setDetailData:P=>{g(P),E("detail")}})]}),_.jsxs(VU,{isOpen:c,onClose:D,children:[v==="create"&&_.jsx(mT,{userName:a,isDrawerOpen:c,onClose:D}),v==="edit"&&p&&_.jsx(mT,{userName:a,isDrawerOpen:c,editData:p,onClose:D}),v==="detail"&&p&&_.jsx(XU,{data:p,onClose:D})]})]})}const u9=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,c9=H.div`
  flex: 1;
`;function h9(){const[t,e]=U.useState(""),[n,i]=U.useState(""),[a,l]=U.useState(""),[c,d]=U.useState(""),[p,g]=U.useState(""),v=Mc(),E=async()=>{const T=t.trim(),D=n.trim(),P=a.trim();if(!T){alert("이름을 입력해주세요.");return}if(!D){alert("회사명을 입력해주세요.");return}if(!P){alert("이메일을 입력해주세요.");return}if(c!==p){alert("비밀번호가 일치하지 않습니다.");return}oM(da,a,c).then(async q=>{const N=q.user;await cM(N,{displayName:t}),await V4(zn(wt,"users",N.uid),{name:T,company:D,role:2,createdAt:dy()})}).then(()=>{alert("회원가입이 완료되었습니다!"),v("/")}).catch(q=>{alert("회원가입 중 오류 발생: "+q.message)})};return _.jsx(f9,{children:_.jsxs(d9,{children:[_.jsxs(p9,{children:[_.jsx(m9,{children:"PDMS"}),_.jsx(g9,{children:"Pushcomz Design Management System"})]}),_.jsxs(y9,{children:[_.jsx(_9,{type:"text",value:t,onChange:T=>e(T.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(v9,{type:"text",value:n,onChange:T=>i(T.target.value),placeholder:"회사명을 입력해주세요."})," ",_.jsx(E9,{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(w9,{type:"password",value:c,onChange:T=>d(T.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(b9,{type:"password",value:p,onChange:T=>g(T.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(T9,{onClick:E,children:"등록하기"})]})})}const f9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,d9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,p9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,m9=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,g9=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,y9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,_9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,v9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,E9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,w9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,b9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,T9=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function S9(){const[t,e]=U.useState(!1);return _.jsx(gD,{basename:"/pdms-test",children:_.jsxs(GC,{children:[_.jsx(kf,{path:"/",element:_.jsx(U4,{onLoginSuccess:()=>e(!0)})}),_.jsx(kf,{path:"/dashboard",element:t?_.jsx(l9,{}):_.jsx(HC,{to:"/"})}),_.jsx(kf,{path:"/signup",element:_.jsx(h9,{})})]})})}const x9="/assets/Pretendard-Bold-C0IAtCzs.woff2",A9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",R9="/assets/Pretendard-Medium-BCuOcOjL.woff2",C9="/assets/Pretendard-Regular-BnvhP503.woff2",D9=h1`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    overflow: hidden;
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
    src: url(${x9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${A9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${R9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${C9}) format('woff2');
    font-weight: 400;
  }

`,I9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},k9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},O9={colors:I9,mixin:k9};nC.createRoot(document.getElementById("root")).render(_.jsx(U.StrictMode,{children:_.jsxs(SI,{theme:O9,children:[_.jsx(S9,{}),_.jsx(D9,{})]})}));
