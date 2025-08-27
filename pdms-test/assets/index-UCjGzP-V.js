(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function qR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},Hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function BR(){if(jE)return Hu;jE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Hu.Fragment=e,Hu.jsx=n,Hu.jsxs=n,Hu}var LE;function zR(){return LE||(LE=1,Wm.exports=BR()),Wm.exports}var _=zR(),Qm={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function FR(){if(UE)return Be;UE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=w&&L[w]||L["@@iterator"],typeof L=="function"?L:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,B={};function M(L,re,fe){this.props=L,this.context=re,this.refs=B,this.updater=fe||I}M.prototype.isReactComponent={},M.prototype.setState=function(L,re){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,re,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function $(){}$.prototype=M.prototype;function P(L,re,fe){this.props=L,this.context=re,this.refs=B,this.updater=fe||I}var R=P.prototype=new $;R.constructor=P,N(R,M.prototype),R.isPureReactComponent=!0;var Y=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function C(L,re,fe,he,Ee,Me){return fe=Me.ref,{$$typeof:t,type:L,key:re,ref:fe!==void 0?fe:null,props:Me}}function A(L,re){return C(L.type,re,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function j(L){var re={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(fe){return re[fe]})}var O=/\/+/g;function q(L,re){return typeof L=="object"&&L!==null&&L.key!=null?j(""+L.key):re.toString(36)}function k(){}function Pe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(k,k):(L.status="pending",L.then(function(re){L.status==="pending"&&(L.status="fulfilled",L.value=re)},function(re){L.status==="pending"&&(L.status="rejected",L.reason=re)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function le(L,re,fe,he,Ee){var Me=typeof L;(Me==="undefined"||Me==="boolean")&&(L=null);var Te=!1;if(L===null)Te=!0;else switch(Me){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(L.$$typeof){case t:case e:Te=!0;break;case v:return Te=L._init,le(Te(L._payload),re,fe,he,Ee)}}if(Te)return Ee=Ee(L),Te=he===""?"."+q(L,0):he,Y(Ee)?(fe="",Te!=null&&(fe=Te.replace(O,"$&/")+"/"),le(Ee,re,fe,"",function(be){return be})):Ee!=null&&(D(Ee)&&(Ee=A(Ee,fe+(Ee.key==null||L&&L.key===Ee.key?"":(""+Ee.key).replace(O,"$&/")+"/")+Te)),re.push(Ee)),1;Te=0;var gt=he===""?".":he+":";if(Y(L))for(var ce=0;ce<L.length;ce++)he=L[ce],Me=gt+q(he,ce),Te+=le(he,re,fe,Me,Ee);else if(ce=T(L),typeof ce=="function")for(L=ce.call(L),ce=0;!(he=L.next()).done;)he=he.value,Me=gt+q(he,ce++),Te+=le(he,re,fe,Me,Ee);else if(Me==="object"){if(typeof L.then=="function")return le(Pe(L),re,fe,he,Ee);throw re=String(L),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Te}function W(L,re,fe){if(L==null)return L;var he=[],Ee=0;return le(L,he,"","",function(Me){return re.call(fe,Me,Ee++)}),he}function ae(L){if(L._status===-1){var re=L._result;re=re(),re.then(function(fe){(L._status===0||L._status===-1)&&(L._status=1,L._result=fe)},function(fe){(L._status===0||L._status===-1)&&(L._status=2,L._result=fe)}),L._status===-1&&(L._status=0,L._result=re)}if(L._status===1)return L._result.default;throw L._result}var de=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ye(){}return Be.Children={map:W,forEach:function(L,re,fe){W(L,function(){re.apply(this,arguments)},fe)},count:function(L){var re=0;return W(L,function(){re++}),re},toArray:function(L){return W(L,function(re){return re})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Be.Component=M,Be.Fragment=n,Be.Profiler=a,Be.PureComponent=P,Be.StrictMode=i,Be.Suspense=p,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Be.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},Be.cache=function(L){return function(){return L.apply(null,arguments)}},Be.cloneElement=function(L,re,fe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var he=N({},L.props),Ee=L.key,Me=void 0;if(re!=null)for(Te in re.ref!==void 0&&(Me=void 0),re.key!==void 0&&(Ee=""+re.key),re)!te.call(re,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&re.ref===void 0||(he[Te]=re[Te]);var Te=arguments.length-2;if(Te===1)he.children=fe;else if(1<Te){for(var gt=Array(Te),ce=0;ce<Te;ce++)gt[ce]=arguments[ce+2];he.children=gt}return C(L.type,Ee,void 0,void 0,Me,he)},Be.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},Be.createElement=function(L,re,fe){var he,Ee={},Me=null;if(re!=null)for(he in re.key!==void 0&&(Me=""+re.key),re)te.call(re,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(Ee[he]=re[he]);var Te=arguments.length-2;if(Te===1)Ee.children=fe;else if(1<Te){for(var gt=Array(Te),ce=0;ce<Te;ce++)gt[ce]=arguments[ce+2];Ee.children=gt}if(L&&L.defaultProps)for(he in Te=L.defaultProps,Te)Ee[he]===void 0&&(Ee[he]=Te[he]);return C(L,Me,void 0,void 0,null,Ee)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(L){return{$$typeof:d,render:L}},Be.isValidElement=D,Be.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ae}},Be.memo=function(L,re){return{$$typeof:g,type:L,compare:re===void 0?null:re}},Be.startTransition=function(L){var re=z.T,fe={};z.T=fe;try{var he=L(),Ee=z.S;Ee!==null&&Ee(fe,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(ye,de)}catch(Me){de(Me)}finally{z.T=re}},Be.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Be.use=function(L){return z.H.use(L)},Be.useActionState=function(L,re,fe){return z.H.useActionState(L,re,fe)},Be.useCallback=function(L,re){return z.H.useCallback(L,re)},Be.useContext=function(L){return z.H.useContext(L)},Be.useDebugValue=function(){},Be.useDeferredValue=function(L,re){return z.H.useDeferredValue(L,re)},Be.useEffect=function(L,re,fe){var he=z.H;if(typeof fe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return he.useEffect(L,re)},Be.useId=function(){return z.H.useId()},Be.useImperativeHandle=function(L,re,fe){return z.H.useImperativeHandle(L,re,fe)},Be.useInsertionEffect=function(L,re){return z.H.useInsertionEffect(L,re)},Be.useLayoutEffect=function(L,re){return z.H.useLayoutEffect(L,re)},Be.useMemo=function(L,re){return z.H.useMemo(L,re)},Be.useOptimistic=function(L,re){return z.H.useOptimistic(L,re)},Be.useReducer=function(L,re,fe){return z.H.useReducer(L,re,fe)},Be.useRef=function(L){return z.H.useRef(L)},Be.useState=function(L){return z.H.useState(L)},Be.useSyncExternalStore=function(L,re,fe){return z.H.useSyncExternalStore(L,re,fe)},Be.useTransition=function(){return z.H.useTransition()},Be.version="19.1.0",Be}var qE;function cy(){return qE||(qE=1,Qm.exports=FR()),Qm.exports}var U=cy();const me=qR(U);var Km={exports:{}},Gu={},Xm={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function $R(){return BE||(BE=1,function(t){function e(W,ae){var de=W.length;W.push(ae);e:for(;0<de;){var ye=de-1>>>1,L=W[ye];if(0<a(L,ae))W[ye]=ae,W[de]=L,de=ye;else break e}}function n(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var ae=W[0],de=W.pop();if(de!==ae){W[0]=de;e:for(var ye=0,L=W.length,re=L>>>1;ye<re;){var fe=2*(ye+1)-1,he=W[fe],Ee=fe+1,Me=W[Ee];if(0>a(he,de))Ee<L&&0>a(Me,he)?(W[ye]=Me,W[Ee]=de,ye=Ee):(W[ye]=he,W[fe]=de,ye=fe);else if(Ee<L&&0>a(Me,de))W[ye]=Me,W[Ee]=de,ye=Ee;else break e}}return ae}function a(W,ae){var de=W.sortIndex-ae.sortIndex;return de!==0?de:W.id-ae.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,w=null,T=3,I=!1,N=!1,B=!1,M=!1,$=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function Y(W){for(var ae=n(g);ae!==null;){if(ae.callback===null)i(g);else if(ae.startTime<=W)i(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(g)}}function z(W){if(B=!1,Y(W),!N)if(n(p)!==null)N=!0,te||(te=!0,q());else{var ae=n(g);ae!==null&&le(z,ae.startTime-W)}}var te=!1,C=-1,A=5,D=-1;function j(){return M?!0:!(t.unstable_now()-D<A)}function O(){if(M=!1,te){var W=t.unstable_now();D=W;var ae=!0;try{e:{N=!1,B&&(B=!1,P(C),C=-1),I=!0;var de=T;try{t:{for(Y(W),w=n(p);w!==null&&!(w.expirationTime>W&&j());){var ye=w.callback;if(typeof ye=="function"){w.callback=null,T=w.priorityLevel;var L=ye(w.expirationTime<=W);if(W=t.unstable_now(),typeof L=="function"){w.callback=L,Y(W),ae=!0;break t}w===n(p)&&i(p),Y(W)}else i(p);w=n(p)}if(w!==null)ae=!0;else{var re=n(g);re!==null&&le(z,re.startTime-W),ae=!1}}break e}finally{w=null,T=de,I=!1}ae=void 0}}finally{ae?q():te=!1}}}var q;if(typeof R=="function")q=function(){R(O)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Pe=k.port2;k.port1.onmessage=O,q=function(){Pe.postMessage(null)}}else q=function(){$(O,0)};function le(W,ae){C=$(function(){W(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(W){switch(T){case 1:case 2:case 3:var ae=3;break;default:ae=T}var de=T;T=ae;try{return W()}finally{T=de}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(W,ae){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=T;T=W;try{return ae()}finally{T=de}},t.unstable_scheduleCallback=function(W,ae,de){var ye=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ye+de:ye):de=ye,W){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=de+L,W={id:v++,callback:ae,priorityLevel:W,startTime:de,expirationTime:L,sortIndex:-1},de>ye?(W.sortIndex=de,e(g,W),n(p)===null&&W===n(g)&&(B?(P(C),C=-1):B=!0,le(z,de-ye))):(W.sortIndex=L,e(p,W),N||I||(N=!0,te||(te=!0,q()))),W},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(W){var ae=T;return function(){var de=T;T=ae;try{return W.apply(this,arguments)}finally{T=de}}}}(Zm)),Zm}var zE;function HR(){return zE||(zE=1,Xm.exports=$R()),Xm.exports}var Jm={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE;function GR(){if(FE)return An;FE=1;var t=cy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:w==null?null:""+w,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,An.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},An.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},An.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},An.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},An.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,w=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:I}):v==="script"&&i.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},An.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},An.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},An.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},An.requestFormReset=function(p){i.d.r(p)},An.unstable_batchedUpdates=function(p,g){return p(g)},An.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},An.useFormStatus=function(){return c.H.useHostTransitionStatus()},An.version="19.1.0",An}var $E;function YR(){if($E)return Jm.exports;$E=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Jm.exports=GR(),Jm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function WR(){if(HE)return Gu;HE=1;var t=HR(),e=cy(),n=YR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var b=!1,S=f.child;S;){if(S===o){b=!0,o=f,u=m;break}if(S===u){b=!0,u=f,o=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===o){b=!0,o=m,u=f;break}if(S===u){b=!0,u=m,o=f;break}S=S.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),R=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=O&&r[O]||r["@@iterator"],typeof r=="function"?r:null)}var k=Symbol.for("react.client.reference");function Pe(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===k?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case M:return"Profiler";case B:return"StrictMode";case z:return"Suspense";case te:return"SuspenseList";case D:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case R:return(r.displayName||"Context")+".Provider";case P:return(r._context.displayName||"Context")+".Consumer";case Y:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case C:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}var le=Array.isArray,W=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ye=[],L=-1;function re(r){return{current:r}}function fe(r){0>L||(r.current=ye[L],ye[L]=null,L--)}function he(r,s){L++,ye[L]=r.current,r.current=s}var Ee=re(null),Me=re(null),Te=re(null),gt=re(null);function ce(r,s){switch(he(Te,s),he(Me,r),he(Ee,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?hE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=hE(s),r=fE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}fe(Ee),he(Ee,r)}function be(){fe(Ee),fe(Me),fe(Te)}function ve(r){r.memoizedState!==null&&he(gt,r);var s=Ee.current,o=fE(s,r.type);s!==o&&(he(Me,r),he(Ee,o))}function Re(r){Me.current===r&&(fe(Ee),fe(Me)),gt.current===r&&(fe(gt),qu._currentValue=de)}var qe=Object.prototype.hasOwnProperty,Sn=t.unstable_scheduleCallback,mn=t.unstable_cancelCallback,ar=t.unstable_shouldYield,or=t.unstable_requestPaint,en=t.unstable_now,Fl=t.unstable_getCurrentPriorityLevel,pa=t.unstable_ImmediatePriority,fs=t.unstable_UserBlockingPriority,vi=t.unstable_NormalPriority,fo=t.unstable_LowPriority,qr=t.unstable_IdlePriority,Ei=t.log,po=t.unstable_setDisableYieldValue,Tt=null,nt=null;function Pn(r){if(typeof Ei=="function"&&po(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Tt,r)}catch{}}var tn=Math.clz32?Math.clz32:wi,mo=Math.log,$l=Math.LN2;function wi(r){return r>>>=0,r===0?32:31-(mo(r)/$l|0)|0}var bi=256,Ti=4194304;function Gn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Si(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=Gn(u):(b&=S,b!==0?f=Gn(b):o||(o=S&~r,o!==0&&(f=Gn(o))))):(S=u&~m,S!==0?f=Gn(S):b!==0?f=Gn(b):o||(o=u&~r,o!==0&&(f=Gn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function xi(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ds(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var r=bi;return bi<<=1,(bi&4194048)===0&&(bi=256),r}function it(){var r=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),r}function De(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function et(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function nn(r,s,o,u,f,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,V=r.expirationTimes,X=r.hiddenUpdates;for(o=b&~o;0<o;){var ne=31-tn(o),oe=1<<ne;S[ne]=0,V[ne]=-1;var Z=X[ne];if(Z!==null)for(X[ne]=null,ne=0;ne<Z.length;ne++){var J=Z[ne];J!==null&&(J.lane&=-536870913)}o&=~oe}u!==0&&Ue(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ue(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-tn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function ma(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-tn(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Br(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ps(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function lr(){var r=ae.p;return r!==0?r:(r=window.event,r===void 0?32:kE(r.type))}function ms(r,s){var o=ae.p;try{return ae.p=r,s()}finally{ae.p=o}}var St=Math.random().toString(36).slice(2),Yt="__reactFiber$"+St,Lt="__reactProps$"+St,ur="__reactContainer$"+St,Hl="__reactEvents$"+St,Xd="__reactListeners$"+St,gs="__reactHandles$"+St,Wc="__reactResources$"+St,ga="__reactMarker$"+St;function ys(r){delete r[Yt],delete r[Lt],delete r[Hl],delete r[Xd],delete r[gs]}function Ai(r){var s=r[Yt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[ur]||o[Yt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=gE(r);r!==null;){if(o=r[Yt])return o;r=gE(r)}return s}r=o,o=r.parentNode}return null}function zr(r){if(r=r[Yt]||r[ur]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Fr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Vn(r){var s=r[Wc];return s||(s=r[Wc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Nt(r){r[ga]=!0}var Gl=new Set,go={};function Ar(r,s){Ri(r,s),Ri(r+"Capture",s)}function Ri(r,s){for(go[r]=s,r=0;r<s.length;r++)Gl.add(s[r])}var Qc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},ya={};function Xc(r){return qe.call(ya,r)?!0:qe.call(Kc,r)?!1:Qc.test(r)?ya[r]=!0:(Kc[r]=!0,!1)}function _s(r,s,o){if(Xc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function $r(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function gn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var _a,Zc;function Ci(r){if(_a===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);_a=s&&s[1]||"",Zc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_a+r+Zc}var yo=!1;function _o(r,s){if(!r||yo)return"";yo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var V=b.split(`
`),X=S.split(`
`);for(f=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;f<X.length&&!X[f].includes("DetermineComponentFrameRoot");)f++;if(u===V.length||f===X.length)for(u=V.length-1,f=X.length-1;1<=u&&0<=f&&V[u]!==X[f];)f--;for(;1<=u&&0<=f;u--,f--)if(V[u]!==X[f]){if(u!==1||f!==1)do if(u--,f--,0>f||V[u]!==X[f]){var ne=`
`+V[u].replace(" at new "," at ");return r.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",r.displayName)),ne}while(1<=u&&0<=f);break}}}finally{yo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Ci(o):""}function Yl(r){switch(r.tag){case 26:case 27:case 5:return Ci(r.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 15:return _o(r.type,!1);case 11:return _o(r.type.render,!1);case 1:return _o(r.type,!0);case 31:return Ci("Activity");default:return""}}function vo(r){try{var s="";do s+=Yl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function jn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Wl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Zd(r){var s=Wl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Eo(r){r._valueTracker||(r._valueTracker=Zd(r))}function Ql(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Wl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function va(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Jd=/[\n"\\]/g;function Ut(r){return r.replace(Jd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Yn(r,s,o,u,f,m,b,S){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+jn(s)):r.value!==""+jn(s)&&(r.value=""+jn(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?vs(r,b,jn(s)):o!=null?vs(r,b,jn(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+jn(S):r.removeAttribute("name")}function Ea(r,s,o,u,f,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+jn(o):"",s=s!=null?""+jn(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function vs(r,s,o){s==="number"&&va(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ii(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+jn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ht(r,s,o){if(s!=null&&(s=""+jn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+jn(o):""}function wa(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(le(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=jn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function cr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var ba=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||ba.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Kl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&Jc(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&Jc(r,m,s[m])}function Xl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wo(r){return tp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Di=null;function hr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ki=null,Oi=null;function Zl(r){var s=zr(r);if(s&&(r=s.stateNode)){var o=r[Lt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Yn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ut(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Lt]||null;if(!f)throw Error(i(90));Yn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Ql(u)}break e;case"textarea":ht(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ii(r,!!o.multiple,s,!1)}}}var Hr=!1;function eh(r,s,o){if(Hr)return r(s,o);Hr=!0;try{var u=r(s);return u}finally{if(Hr=!1,(ki!==null||Oi!==null)&&(Yh(),ki&&(s=ki,r=Oi,Oi=ki=null,Zl(s),r)))for(s=0;s<r.length;s++)Zl(r[s])}}function Ta(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fr=!1;if(Rr)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){fr=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{fr=!1}var Gr=null,Es=null,Mi=null;function Jl(){if(Mi)return Mi;var r,s=Es,o=s.length,u,f="value"in Gr?Gr.value:Gr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var b=o-r;for(u=1;u<=b&&s[o-u]===f[m-u];u++);return Mi=f.slice(r,1<u?1-u:void 0)}function Yr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Wr(){return!0}function eu(){return!1}function rn(r){function s(o,u,f,m,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wr:eu,this.isPropagationStopped=eu,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),s}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=rn(st),xa=v({},st,{view:0,detail:0}),th=rn(xa),To,So,Qr,Aa=v({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Qr&&(Qr&&r.type==="mousemove"?(To=r.screenX-Qr.screenX,So=r.screenY-Qr.screenY):So=To=0,Qr=r),To)},movementY:function(r){return"movementY"in r?r.movementY:So}}),dr=rn(Aa),nh=v({},Aa,{dataTransfer:0}),np=rn(nh),Ra=v({},xa,{relatedTarget:0}),xo=rn(Ra),tu=v({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),Ao=rn(tu),rh=v({},st,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ro=rn(rh),rp=v({},st,{data:0}),nu=rn(rp),Ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ru(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=sh[r])?!!s[r]:!1}function Ia(){return ru}var ah=v({},xa,{key:function(r){if(r.key){var s=Ca[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Yr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ih[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(r){return r.type==="keypress"?Yr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Yr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Co=rn(ah),oh=v({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=rn(oh),Ni=v({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),lh=rn(Ni),uh=v({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=rn(uh),hh=v({},Aa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Io=rn(hh),Ln=v({},st,{newState:0,oldState:0}),fh=rn(Ln),dh=[9,13,27,32],Kr=Rr&&"CompositionEvent"in window,h=null;Rr&&"documentMode"in document&&(h=document.documentMode);var y=Rr&&"TextEvent"in window&&!h,E=Rr&&(!Kr||h&&8<h&&11>=h),x=" ",Q=!1;function ee(r,s){switch(r){case"keyup":return dh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ke=!1;function Wt(r,s){switch(r){case"compositionend":return pe(s);case"keypress":return s.which!==32?null:(Q=!0,x);case"textInput":return r=s.data,r===x&&Q?null:r;default:return null}}function Xe(r,s){if(Ke)return r==="compositionend"||!Kr&&ee(r,s)?(r=Jl(),Mi=Es=Gr=null,Ke=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var sn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!sn[r.type]:s==="textarea"}function Pi(r,s,o,u){ki?Oi?Oi.push(u):Oi=[u]:ki=u,s=Jh(s,"onChange"),0<s.length&&(o=new bo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var yn=null,Xr=null;function su(r){aE(r,0)}function ph(r){var s=Fr(r);if(Ql(s))return r}function R_(r,s){if(r==="change")return s}var C_=!1;if(Rr){var ip;if(Rr){var sp="oninput"in document;if(!sp){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),sp=typeof I_.oninput=="function"}ip=sp}else ip=!1;C_=ip&&(!document.documentMode||9<document.documentMode)}function D_(){yn&&(yn.detachEvent("onpropertychange",k_),Xr=yn=null)}function k_(r){if(r.propertyName==="value"&&ph(Xr)){var s=[];Pi(s,Xr,r,hr(r)),eh(su,s)}}function gA(r,s,o){r==="focusin"?(D_(),yn=s,Xr=o,yn.attachEvent("onpropertychange",k_)):r==="focusout"&&D_()}function yA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ph(Xr)}function _A(r,s){if(r==="click")return ph(s)}function vA(r,s){if(r==="input"||r==="change")return ph(s)}function EA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Wn=typeof Object.is=="function"?Object.is:EA;function au(r,s){if(Wn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!qe.call(s,f)||!Wn(r[f],s[f]))return!1}return!0}function O_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function M_(r,s){var o=O_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=O_(o)}}function N_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?N_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function P_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=va(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=va(r.document)}return s}function ap(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var wA=Rr&&"documentMode"in document&&11>=document.documentMode,Do=null,op=null,ou=null,lp=!1;function V_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lp||Do==null||Do!==va(u)||(u=Do,"selectionStart"in u&&ap(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ou&&au(ou,u)||(ou=u,u=Jh(op,"onSelect"),0<u.length&&(s=new bo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Do)))}function Da(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var ko={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},up={},j_={};Rr&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function ka(r){if(up[r])return up[r];if(!ko[r])return r;var s=ko[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in j_)return up[r]=s[o];return r}var L_=ka("animationend"),U_=ka("animationiteration"),q_=ka("animationstart"),bA=ka("transitionrun"),TA=ka("transitionstart"),SA=ka("transitioncancel"),B_=ka("transitionend"),z_=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cp.push("scrollEnd");function Cr(r,s){z_.set(r,s),Ar(s,[r])}var F_=new WeakMap;function pr(r,s){if(typeof r=="object"&&r!==null){var o=F_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:vo(s)},F_.set(r,s),s)}return{value:r,source:s,stack:vo(s)}}var mr=[],Oo=0,hp=0;function mh(){for(var r=Oo,s=hp=Oo=0;s<r;){var o=mr[s];mr[s++]=null;var u=mr[s];mr[s++]=null;var f=mr[s];mr[s++]=null;var m=mr[s];if(mr[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}m!==0&&$_(o,f,m)}}function gh(r,s,o,u){mr[Oo++]=r,mr[Oo++]=s,mr[Oo++]=o,mr[Oo++]=u,hp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function fp(r,s,o,u){return gh(r,s,o,u),yh(r)}function Mo(r,s){return gh(r,null,null,s),yh(r)}function $_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-tn(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function yh(r){if(50<Ou)throw Ou=0,_m=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var No={};function xA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(r,s,o,u){return new xA(r,s,o,u)}function dp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Vi(r,s){var o=r.alternate;return o===null?(o=Qn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function H_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function _h(r,s,o,u,f,m){var b=0;if(u=r,typeof r=="function")dp(r)&&(b=1);else if(typeof r=="string")b=RR(r,o,Ee.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case D:return r=Qn(31,o,s,f),r.elementType=D,r.lanes=m,r;case N:return Oa(o.children,f,m,s);case B:b=8,f|=24;break;case M:return r=Qn(12,o,s,f|2),r.elementType=M,r.lanes=m,r;case z:return r=Qn(13,o,s,f),r.elementType=z,r.lanes=m,r;case te:return r=Qn(19,o,s,f),r.elementType=te,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case R:b=10;break e;case P:b=9;break e;case Y:b=11;break e;case C:b=14;break e;case A:b=16,u=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Qn(b,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Oa(r,s,o,u){return r=Qn(7,r,u,s),r.lanes=o,r}function pp(r,s,o){return r=Qn(6,r,null,s),r.lanes=o,r}function mp(r,s,o){return s=Qn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Po=[],Vo=0,vh=null,Eh=0,gr=[],yr=0,Ma=null,ji=1,Li="";function Na(r,s){Po[Vo++]=Eh,Po[Vo++]=vh,vh=r,Eh=s}function G_(r,s,o){gr[yr++]=ji,gr[yr++]=Li,gr[yr++]=Ma,Ma=r;var u=ji;r=Li;var f=32-tn(u)-1;u&=~(1<<f),o+=1;var m=32-tn(s)+f;if(30<m){var b=f-f%5;m=(u&(1<<b)-1).toString(32),u>>=b,f-=b,ji=1<<32-tn(s)+f|o<<f|u,Li=m+r}else ji=1<<m|o<<f|u,Li=r}function gp(r){r.return!==null&&(Na(r,1),G_(r,1,0))}function yp(r){for(;r===vh;)vh=Po[--Vo],Po[Vo]=null,Eh=Po[--Vo],Po[Vo]=null;for(;r===Ma;)Ma=gr[--yr],gr[yr]=null,Li=gr[--yr],gr[yr]=null,ji=gr[--yr],gr[yr]=null}var Un=null,kt=null,rt=!1,Pa=null,Zr=!1,_p=Error(i(519));function Va(r){var s=Error(i(418,""));throw cu(pr(s,r)),_p}function Y_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Yt]=r,s[Lt]=u,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<Nu.length;o++)Ge(Nu[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),Ea(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Eo(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),wa(s,u.value,u.defaultValue,u.children),Eo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||cE(s.textContent,o)?(u.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),u.onScroll!=null&&Ge("scroll",s),u.onScrollEnd!=null&&Ge("scrollend",s),u.onClick!=null&&(s.onclick=ef),s=!0):s=!1,s||Va(r)}function W_(r){for(Un=r.return;Un;)switch(Un.tag){case 5:case 13:Zr=!1;return;case 27:case 3:Zr=!0;return;default:Un=Un.return}}function lu(r){if(r!==Un)return!1;if(!rt)return W_(r),rt=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Nm(r.type,r.memoizedProps)),o=!o),o&&kt&&Va(r),W_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){kt=Dr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}kt=null}}else s===27?(s=kt,Vs(r.type)?(r=Lm,Lm=null,kt=r):kt=s):kt=Un?Dr(r.stateNode.nextSibling):null;return!0}function uu(){kt=Un=null,rt=!1}function Q_(){var r=Pa;return r!==null&&(zn===null?zn=r:zn.push.apply(zn,r),Pa=null),r}function cu(r){Pa===null?Pa=[r]:Pa.push(r)}var vp=re(null),ja=null,Ui=null;function ws(r,s,o){he(vp,s._currentValue),s._currentValue=o}function qi(r){r._currentValue=vp.current,fe(vp)}function Ep(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function wp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var V=0;V<s.length;V++)if(S.context===s[V]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Ep(m.return,o,r),u||(b=null);break e}m=S.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Ep(b,o,r),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function hu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var S=f.type;Wn(f.pendingProps.value,b.value)||(r!==null?r.push(S):r=[S])}}else if(f===gt.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(qu):r=[qu])}f=f.return}r!==null&&wp(s,r,o,u),s.flags|=262144}function wh(r){for(r=r.firstContext;r!==null;){if(!Wn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function La(r){ja=r,Ui=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function xn(r){return K_(ja,r)}function bh(r,s){return ja===null&&La(r),K_(r,s)}function K_(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Ui===null){if(r===null)throw Error(i(308));Ui=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Ui=Ui.next=s;return o}var AA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},RA=t.unstable_scheduleCallback,CA=t.unstable_NormalPriority,Kt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bp(){return{controller:new AA,data:new Map,refCount:0}}function fu(r){r.refCount--,r.refCount===0&&RA(CA,function(){r.controller.abort()})}var du=null,Tp=0,jo=0,Lo=null;function IA(r,s){if(du===null){var o=du=[];Tp=0,jo=xm(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Tp++,s.then(X_,X_),s}function X_(){if(--Tp===0&&du!==null){Lo!==null&&(Lo.status="fulfilled");var r=du;du=null,jo=0,Lo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function DA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Z_=W.S;W.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&IA(r,s),Z_!==null&&Z_(r,s)};var Ua=re(null);function Sp(){var r=Ua.current;return r!==null?r:vt.pooledCache}function Th(r,s){s===null?he(Ua,Ua.current):he(Ua,s.pool)}function J_(){var r=Sp();return r===null?null:{parent:Kt._currentValue,pool:r}}var pu=Error(i(460)),ev=Error(i(474)),Sh=Error(i(542)),xp={then:function(){}};function tv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function xh(){}function nv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(xh,xh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,iv(r),r;default:if(typeof s.status=="string")s.then(xh,xh);else{if(r=vt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,iv(r),r}throw mu=s,pu}}var mu=null;function rv(){if(mu===null)throw Error(i(459));var r=mu;return mu=null,r}function iv(r){if(r===pu||r===Sh)throw Error(i(483))}var bs=!1;function Ap(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ts(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ss(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(lt&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=yh(r),$_(r,null,o),s}return gh(r,u,s,o),yh(r)}function gu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,ma(r,o)}}function Cp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Ip=!1;function yu(){if(Ip){var r=Lo;if(r!==null)throw r}}function _u(r,s,o,u){Ip=!1;var f=r.updateQueue;bs=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var V=S,X=V.next;V.next=null,b===null?m=X:b.next=X,b=V;var ne=r.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==b&&(S===null?ne.firstBaseUpdate=X:S.next=X,ne.lastBaseUpdate=V))}if(m!==null){var oe=f.baseState;b=0,ne=X=V=null,S=m;do{var Z=S.lane&-536870913,J=Z!==S.lane;if(J?(Ze&Z)===Z:(u&Z)===Z){Z!==0&&Z===jo&&(Ip=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ne=r,Ce=S;Z=s;var pt=o;switch(Ce.tag){case 1:if(Ne=Ce.payload,typeof Ne=="function"){oe=Ne.call(pt,oe,Z);break e}oe=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Ce.payload,Z=typeof Ne=="function"?Ne.call(pt,oe,Z):Ne,Z==null)break e;oe=v({},oe,Z);break e;case 2:bs=!0}}Z=S.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=f.callbacks,J===null?f.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(X=ne=J,V=oe):ne=ne.next=J,b|=Z;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;J=S,S=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);ne===null&&(V=oe),f.baseState=V,f.firstBaseUpdate=X,f.lastBaseUpdate=ne,m===null&&(f.shared.lanes=0),Os|=b,r.lanes=b,r.memoizedState=oe}}function sv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function av(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)sv(o[r],s)}var Uo=re(null),Ah=re(0);function ov(r,s){r=Yi,he(Ah,r),he(Uo,s),Yi=r|s.baseLanes}function Dp(){he(Ah,Yi),he(Uo,Uo.current)}function kp(){Yi=Ah.current,fe(Uo),fe(Ah)}var xs=0,Fe=null,ft=null,qt=null,Rh=!1,qo=!1,qa=!1,Ch=0,vu=0,Bo=null,kA=0;function Pt(){throw Error(i(321))}function Op(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Wn(r[o],s[o]))return!1;return!0}function Mp(r,s,o,u,f,m){return xs=m,Fe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,W.H=r===null||r.memoizedState===null?$v:Hv,qa=!1,m=o(u,f),qa=!1,qo&&(m=uv(s,o,u,f)),lv(r),m}function lv(r){W.H=Nh;var s=ft!==null&&ft.next!==null;if(xs=0,qt=ft=Fe=null,Rh=!1,vu=0,Bo=null,s)throw Error(i(300));r===null||an||(r=r.dependencies,r!==null&&wh(r)&&(an=!0))}function uv(r,s,o,u){Fe=r;var f=0;do{if(qo&&(Bo=null),vu=0,qo=!1,25<=f)throw Error(i(301));if(f+=1,qt=ft=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}W.H=LA,m=s(o,u)}while(qo);return m}function OA(){var r=W.H,s=r.useState()[0];return s=typeof s.then=="function"?Eu(s):s,r=r.useState()[0],(ft!==null?ft.memoizedState:null)!==r&&(Fe.flags|=1024),s}function Np(){var r=Ch!==0;return Ch=0,r}function Pp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Vp(r){if(Rh){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Rh=!1}xs=0,qt=ft=Fe=null,qo=!1,vu=Ch=0,Bo=null}function qn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Fe.memoizedState=qt=r:qt=qt.next=r,qt}function Bt(){if(ft===null){var r=Fe.alternate;r=r!==null?r.memoizedState:null}else r=ft.next;var s=qt===null?Fe.memoizedState:qt.next;if(s!==null)qt=s,ft=r;else{if(r===null)throw Fe.alternate===null?Error(i(467)):Error(i(310));ft=r,r={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},qt===null?Fe.memoizedState=qt=r:qt=qt.next=r}return qt}function jp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eu(r){var s=vu;return vu+=1,Bo===null&&(Bo=[]),r=nv(Bo,r,s),s=Fe,(qt===null?s.memoizedState:qt.next)===null&&(s=s.alternate,W.H=s===null||s.memoizedState===null?$v:Hv),r}function Ih(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Eu(r);if(r.$$typeof===R)return xn(r)}throw Error(i(438,String(r)))}function Lp(r){var s=null,o=Fe.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Fe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=jp(),Fe.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=j;return s.index++,o}function Bi(r,s){return typeof s=="function"?s(r):s}function Dh(r){var s=Bt();return Up(s,ft,r)}function Up(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=b=null,V=null,X=s,ne=!1;do{var oe=X.lane&-536870913;if(oe!==X.lane?(Ze&oe)===oe:(xs&oe)===oe){var Z=X.revertLane;if(Z===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),oe===jo&&(ne=!0);else if((xs&Z)===Z){X=X.next,Z===jo&&(ne=!0);continue}else oe={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},V===null?(S=V=oe,b=m):V=V.next=oe,Fe.lanes|=Z,Os|=Z;oe=X.action,qa&&o(m,oe),m=X.hasEagerState?X.eagerState:o(m,oe)}else Z={lane:oe,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},V===null?(S=V=Z,b=m):V=V.next=Z,Fe.lanes|=oe,Os|=oe;X=X.next}while(X!==null&&X!==s);if(V===null?b=m:V.next=S,!Wn(m,r.memoizedState)&&(an=!0,ne&&(o=Lo,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=V,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function qp(r){var s=Bt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do m=r(m,b.action),b=b.next;while(b!==f);Wn(m,s.memoizedState)||(an=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function cv(r,s,o){var u=Fe,f=Bt(),m=rt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!Wn((ft||f).memoizedState,o);b&&(f.memoizedState=o,an=!0),f=f.queue;var S=dv.bind(null,u,f,r);if(wu(2048,8,S,[r]),f.getSnapshot!==s||b||qt!==null&&qt.memoizedState.tag&1){if(u.flags|=2048,zo(9,kh(),fv.bind(null,u,f,o,s),null),vt===null)throw Error(i(349));m||(xs&124)!==0||hv(u,s,o)}return o}function hv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Fe.updateQueue,s===null?(s=jp(),Fe.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function fv(r,s,o,u){s.value=o,s.getSnapshot=u,pv(s)&&mv(r)}function dv(r,s,o){return o(function(){pv(s)&&mv(r)})}function pv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Wn(r,o)}catch{return!0}}function mv(r){var s=Mo(r,2);s!==null&&er(s,r,2)}function Bp(r){var s=qn();if(typeof r=="function"){var o=r;if(r=o(),qa){Pn(!0);try{o()}finally{Pn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:r},s}function gv(r,s,o,u){return r.baseState=o,Up(r,ft,typeof u=="function"?u:Bi)}function MA(r,s,o,u,f){if(Mh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};W.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,yv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function yv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=W.T,b={};W.T=b;try{var S=o(f,u),V=W.S;V!==null&&V(b,S),_v(r,s,S)}catch(X){zp(r,s,X)}finally{W.T=m}}else try{m=o(f,u),_v(r,s,m)}catch(X){zp(r,s,X)}}function _v(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){vv(r,s,u)},function(u){return zp(r,s,u)}):vv(r,s,o)}function vv(r,s,o){s.status="fulfilled",s.value=o,Ev(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,yv(r,o)))}function zp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Ev(s),s=s.next;while(s!==u)}r.action=null}function Ev(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function wv(r,s){return s}function bv(r,s){if(rt){var o=vt.formState;if(o!==null){e:{var u=Fe;if(rt){if(kt){t:{for(var f=kt,m=Zr;f.nodeType!==8;){if(!m){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){kt=Dr(f.nextSibling),u=f.data==="F!";break e}}Va(u)}u=!1}u&&(s=o[0])}}return o=qn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wv,lastRenderedState:s},o.queue=u,o=Bv.bind(null,Fe,u),u.dispatch=o,u=Bp(!1),m=Yp.bind(null,Fe,!1,u.queue),u=qn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=MA.bind(null,Fe,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Tv(r){var s=Bt();return Sv(s,ft,r)}function Sv(r,s,o){if(s=Up(r,s,wv)[0],r=Dh(Bi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Eu(s)}catch(b){throw b===pu?Sh:b}else u=s;s=Bt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(Fe.flags|=2048,zo(9,kh(),NA.bind(null,f,o),null)),[u,m,r]}function NA(r,s){r.action=s}function xv(r){var s=Bt(),o=ft;if(o!==null)return Sv(s,o,r);Bt(),s=s.memoizedState,o=Bt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function zo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Fe.updateQueue,s===null&&(s=jp(),Fe.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function kh(){return{destroy:void 0,resource:void 0}}function Av(){return Bt().memoizedState}function Oh(r,s,o,u){var f=qn();u=u===void 0?null:u,Fe.flags|=r,f.memoizedState=zo(1|s,kh(),o,u)}function wu(r,s,o,u){var f=Bt();u=u===void 0?null:u;var m=f.memoizedState.inst;ft!==null&&u!==null&&Op(u,ft.memoizedState.deps)?f.memoizedState=zo(s,m,o,u):(Fe.flags|=r,f.memoizedState=zo(1|s,m,o,u))}function Rv(r,s){Oh(8390656,8,r,s)}function Cv(r,s){wu(2048,8,r,s)}function Iv(r,s){return wu(4,2,r,s)}function Dv(r,s){return wu(4,4,r,s)}function kv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Ov(r,s,o){o=o!=null?o.concat([r]):null,wu(4,4,kv.bind(null,s,r),o)}function Fp(){}function Mv(r,s){var o=Bt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Op(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Nv(r,s){var o=Bt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Op(s,u[1]))return u[0];if(u=r(),qa){Pn(!0);try{r()}finally{Pn(!1)}}return o.memoizedState=[u,s],u}function $p(r,s,o){return o===void 0||(xs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=j0(),Fe.lanes|=r,Os|=r,o)}function Pv(r,s,o,u){return Wn(o,s)?o:Uo.current!==null?(r=$p(r,o,u),Wn(r,s)||(an=!0),r):(xs&42)===0?(an=!0,r.memoizedState=o):(r=j0(),Fe.lanes|=r,Os|=r,s)}function Vv(r,s,o,u,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var b=W.T,S={};W.T=S,Yp(r,!1,s,o);try{var V=f(),X=W.S;if(X!==null&&X(S,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ne=DA(V,u);bu(r,s,ne,Jn(r))}else bu(r,s,u,Jn(r))}catch(oe){bu(r,s,{then:function(){},status:"rejected",reason:oe},Jn())}finally{ae.p=m,W.T=b}}function PA(){}function Hp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=jv(r).queue;Vv(r,f,s,de,o===null?PA:function(){return Lv(r),o(u)})}function jv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:de},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Lv(r){var s=jv(r).next.queue;bu(r,s,{},Jn())}function Gp(){return xn(qu)}function Uv(){return Bt().memoizedState}function qv(){return Bt().memoizedState}function VA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Jn();r=Ts(o);var u=Ss(s,r,o);u!==null&&(er(u,s,o),gu(u,s,o)),s={cache:bp()},r.payload=s;return}s=s.return}}function jA(r,s,o){var u=Jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Mh(r)?zv(s,o):(o=fp(r,s,o,u),o!==null&&(er(o,r,u),Fv(o,s,u)))}function Bv(r,s,o){var u=Jn();bu(r,s,o,u)}function bu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mh(r))zv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,S=m(b,o);if(f.hasEagerState=!0,f.eagerState=S,Wn(S,b))return gh(r,s,f,0),vt===null&&mh(),!1}catch{}finally{}if(o=fp(r,s,f,u),o!==null)return er(o,r,u),Fv(o,s,u),!0}return!1}function Yp(r,s,o,u){if(u={lane:2,revertLane:xm(),action:u,hasEagerState:!1,eagerState:null,next:null},Mh(r)){if(s)throw Error(i(479))}else s=fp(r,o,u,2),s!==null&&er(s,r,2)}function Mh(r){var s=r.alternate;return r===Fe||s!==null&&s===Fe}function zv(r,s){qo=Rh=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Fv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,ma(r,o)}}var Nh={readContext:xn,use:Ih,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt},$v={readContext:xn,use:Ih,useCallback:function(r,s){return qn().memoizedState=[r,s===void 0?null:s],r},useContext:xn,useEffect:Rv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Oh(4194308,4,kv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Oh(4194308,4,r,s)},useInsertionEffect:function(r,s){Oh(4,2,r,s)},useMemo:function(r,s){var o=qn();s=s===void 0?null:s;var u=r();if(qa){Pn(!0);try{r()}finally{Pn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=qn();if(o!==void 0){var f=o(s);if(qa){Pn(!0);try{o(s)}finally{Pn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=jA.bind(null,Fe,r),[u.memoizedState,r]},useRef:function(r){var s=qn();return r={current:r},s.memoizedState=r},useState:function(r){r=Bp(r);var s=r.queue,o=Bv.bind(null,Fe,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Fp,useDeferredValue:function(r,s){var o=qn();return $p(o,r,s)},useTransition:function(){var r=Bp(!1);return r=Vv.bind(null,Fe,r.queue,!0,!1),qn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Fe,f=qn();if(rt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),vt===null)throw Error(i(349));(Ze&124)!==0||hv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,Rv(dv.bind(null,u,m,r),[r]),u.flags|=2048,zo(9,kh(),fv.bind(null,u,m,o,s),null),o},useId:function(){var r=qn(),s=vt.identifierPrefix;if(rt){var o=Li,u=ji;o=(u&~(1<<32-tn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ch++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=kA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Gp,useFormState:bv,useActionState:bv,useOptimistic:function(r){var s=qn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Yp.bind(null,Fe,!0,o),o.dispatch=s,[r,s]},useMemoCache:Lp,useCacheRefresh:function(){return qn().memoizedState=VA.bind(null,Fe)}},Hv={readContext:xn,use:Ih,useCallback:Mv,useContext:xn,useEffect:Cv,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Nv,useReducer:Dh,useRef:Av,useState:function(){return Dh(Bi)},useDebugValue:Fp,useDeferredValue:function(r,s){var o=Bt();return Pv(o,ft.memoizedState,r,s)},useTransition:function(){var r=Dh(Bi)[0],s=Bt().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:cv,useId:Uv,useHostTransitionStatus:Gp,useFormState:Tv,useActionState:Tv,useOptimistic:function(r,s){var o=Bt();return gv(o,ft,r,s)},useMemoCache:Lp,useCacheRefresh:qv},LA={readContext:xn,use:Ih,useCallback:Mv,useContext:xn,useEffect:Cv,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Nv,useReducer:qp,useRef:Av,useState:function(){return qp(Bi)},useDebugValue:Fp,useDeferredValue:function(r,s){var o=Bt();return ft===null?$p(o,r,s):Pv(o,ft.memoizedState,r,s)},useTransition:function(){var r=qp(Bi)[0],s=Bt().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:cv,useId:Uv,useHostTransitionStatus:Gp,useFormState:xv,useActionState:xv,useOptimistic:function(r,s){var o=Bt();return ft!==null?gv(o,ft,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Lp,useCacheRefresh:qv},Fo=null,Tu=0;function Ph(r){var s=Tu;return Tu+=1,Fo===null&&(Fo=[]),nv(Fo,r,s)}function Su(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Vh(r,s){throw s.$$typeof===w?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Gv(r){var s=r._init;return s(r._payload)}function Yv(r){function s(G,F){if(r){var K=G.deletions;K===null?(G.deletions=[F],G.flags|=16):K.push(F)}}function o(G,F){if(!r)return null;for(;F!==null;)s(G,F),F=F.sibling;return null}function u(G){for(var F=new Map;G!==null;)G.key!==null?F.set(G.key,G):F.set(G.index,G),G=G.sibling;return F}function f(G,F){return G=Vi(G,F),G.index=0,G.sibling=null,G}function m(G,F,K){return G.index=K,r?(K=G.alternate,K!==null?(K=K.index,K<F?(G.flags|=67108866,F):K):(G.flags|=67108866,F)):(G.flags|=1048576,F)}function b(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function S(G,F,K,ie){return F===null||F.tag!==6?(F=pp(K,G.mode,ie),F.return=G,F):(F=f(F,K),F.return=G,F)}function V(G,F,K,ie){var we=K.type;return we===N?ne(G,F,K.props.children,ie,K.key):F!==null&&(F.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===A&&Gv(we)===F.type)?(F=f(F,K.props),Su(F,K),F.return=G,F):(F=_h(K.type,K.key,K.props,null,G.mode,ie),Su(F,K),F.return=G,F)}function X(G,F,K,ie){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=mp(K,G.mode,ie),F.return=G,F):(F=f(F,K.children||[]),F.return=G,F)}function ne(G,F,K,ie,we){return F===null||F.tag!==7?(F=Oa(K,G.mode,ie,we),F.return=G,F):(F=f(F,K),F.return=G,F)}function oe(G,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=pp(""+F,G.mode,K),F.return=G,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case T:return K=_h(F.type,F.key,F.props,null,G.mode,K),Su(K,F),K.return=G,K;case I:return F=mp(F,G.mode,K),F.return=G,F;case A:var ie=F._init;return F=ie(F._payload),oe(G,F,K)}if(le(F)||q(F))return F=Oa(F,G.mode,K,null),F.return=G,F;if(typeof F.then=="function")return oe(G,Ph(F),K);if(F.$$typeof===R)return oe(G,bh(G,F),K);Vh(G,F)}return null}function Z(G,F,K,ie){var we=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return we!==null?null:S(G,F,""+K,ie);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case T:return K.key===we?V(G,F,K,ie):null;case I:return K.key===we?X(G,F,K,ie):null;case A:return we=K._init,K=we(K._payload),Z(G,F,K,ie)}if(le(K)||q(K))return we!==null?null:ne(G,F,K,ie,null);if(typeof K.then=="function")return Z(G,F,Ph(K),ie);if(K.$$typeof===R)return Z(G,F,bh(G,K),ie);Vh(G,K)}return null}function J(G,F,K,ie,we){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return G=G.get(K)||null,S(F,G,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case T:return G=G.get(ie.key===null?K:ie.key)||null,V(F,G,ie,we);case I:return G=G.get(ie.key===null?K:ie.key)||null,X(F,G,ie,we);case A:var $e=ie._init;return ie=$e(ie._payload),J(G,F,K,ie,we)}if(le(ie)||q(ie))return G=G.get(K)||null,ne(F,G,ie,we,null);if(typeof ie.then=="function")return J(G,F,K,Ph(ie),we);if(ie.$$typeof===R)return J(G,F,K,bh(F,ie),we);Vh(F,ie)}return null}function Ne(G,F,K,ie){for(var we=null,$e=null,Se=F,Ie=F=0,ln=null;Se!==null&&Ie<K.length;Ie++){Se.index>Ie?(ln=Se,Se=null):ln=Se.sibling;var tt=Z(G,Se,K[Ie],ie);if(tt===null){Se===null&&(Se=ln);break}r&&Se&&tt.alternate===null&&s(G,Se),F=m(tt,F,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt,Se=ln}if(Ie===K.length)return o(G,Se),rt&&Na(G,Ie),we;if(Se===null){for(;Ie<K.length;Ie++)Se=oe(G,K[Ie],ie),Se!==null&&(F=m(Se,F,Ie),$e===null?we=Se:$e.sibling=Se,$e=Se);return rt&&Na(G,Ie),we}for(Se=u(Se);Ie<K.length;Ie++)ln=J(Se,G,Ie,K[Ie],ie),ln!==null&&(r&&ln.alternate!==null&&Se.delete(ln.key===null?Ie:ln.key),F=m(ln,F,Ie),$e===null?we=ln:$e.sibling=ln,$e=ln);return r&&Se.forEach(function(Bs){return s(G,Bs)}),rt&&Na(G,Ie),we}function Ce(G,F,K,ie){if(K==null)throw Error(i(151));for(var we=null,$e=null,Se=F,Ie=F=0,ln=null,tt=K.next();Se!==null&&!tt.done;Ie++,tt=K.next()){Se.index>Ie?(ln=Se,Se=null):ln=Se.sibling;var Bs=Z(G,Se,tt.value,ie);if(Bs===null){Se===null&&(Se=ln);break}r&&Se&&Bs.alternate===null&&s(G,Se),F=m(Bs,F,Ie),$e===null?we=Bs:$e.sibling=Bs,$e=Bs,Se=ln}if(tt.done)return o(G,Se),rt&&Na(G,Ie),we;if(Se===null){for(;!tt.done;Ie++,tt=K.next())tt=oe(G,tt.value,ie),tt!==null&&(F=m(tt,F,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt);return rt&&Na(G,Ie),we}for(Se=u(Se);!tt.done;Ie++,tt=K.next())tt=J(Se,G,Ie,tt.value,ie),tt!==null&&(r&&tt.alternate!==null&&Se.delete(tt.key===null?Ie:tt.key),F=m(tt,F,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt);return r&&Se.forEach(function(UR){return s(G,UR)}),rt&&Na(G,Ie),we}function pt(G,F,K,ie){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case T:e:{for(var we=K.key;F!==null;){if(F.key===we){if(we=K.type,we===N){if(F.tag===7){o(G,F.sibling),ie=f(F,K.props.children),ie.return=G,G=ie;break e}}else if(F.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===A&&Gv(we)===F.type){o(G,F.sibling),ie=f(F,K.props),Su(ie,K),ie.return=G,G=ie;break e}o(G,F);break}else s(G,F);F=F.sibling}K.type===N?(ie=Oa(K.props.children,G.mode,ie,K.key),ie.return=G,G=ie):(ie=_h(K.type,K.key,K.props,null,G.mode,ie),Su(ie,K),ie.return=G,G=ie)}return b(G);case I:e:{for(we=K.key;F!==null;){if(F.key===we)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){o(G,F.sibling),ie=f(F,K.children||[]),ie.return=G,G=ie;break e}else{o(G,F);break}else s(G,F);F=F.sibling}ie=mp(K,G.mode,ie),ie.return=G,G=ie}return b(G);case A:return we=K._init,K=we(K._payload),pt(G,F,K,ie)}if(le(K))return Ne(G,F,K,ie);if(q(K)){if(we=q(K),typeof we!="function")throw Error(i(150));return K=we.call(K),Ce(G,F,K,ie)}if(typeof K.then=="function")return pt(G,F,Ph(K),ie);if(K.$$typeof===R)return pt(G,F,bh(G,K),ie);Vh(G,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(o(G,F.sibling),ie=f(F,K),ie.return=G,G=ie):(o(G,F),ie=pp(K,G.mode,ie),ie.return=G,G=ie),b(G)):o(G,F)}return function(G,F,K,ie){try{Tu=0;var we=pt(G,F,K,ie);return Fo=null,we}catch(Se){if(Se===pu||Se===Sh)throw Se;var $e=Qn(29,Se,null,G.mode);return $e.lanes=ie,$e.return=G,$e}finally{}}}var $o=Yv(!0),Wv=Yv(!1),_r=re(null),Jr=null;function As(r){var s=r.alternate;he(Xt,Xt.current&1),he(_r,r),Jr===null&&(s===null||Uo.current!==null||s.memoizedState!==null)&&(Jr=r)}function Qv(r){if(r.tag===22){if(he(Xt,Xt.current),he(_r,r),Jr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Jr=r)}}else Rs()}function Rs(){he(Xt,Xt.current),he(_r,_r.current)}function zi(r){fe(_r),Jr===r&&(Jr=null),fe(Xt)}var Xt=re(0);function jh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||jm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Wp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Qp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Jn(),f=Ts(u);f.payload=s,o!=null&&(f.callback=o),s=Ss(r,f,u),s!==null&&(er(s,r,u),gu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Jn(),f=Ts(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ss(r,f,u),s!==null&&(er(s,r,u),gu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Jn(),u=Ts(o);u.tag=2,s!=null&&(u.callback=s),s=Ss(r,u,o),s!==null&&(er(s,r,o),gu(s,r,o))}};function Kv(r,s,o,u,f,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,b):s.prototype&&s.prototype.isPureReactComponent?!au(o,u)||!au(f,m):!0}function Xv(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Qp.enqueueReplaceState(s,s.state,null)}function Ba(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Lh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Zv(r){Lh(r)}function Jv(r){console.error(r)}function e0(r){Lh(r)}function Uh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function t0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Kp(r,s,o){return o=Ts(o),o.tag=3,o.payload={element:null},o.callback=function(){Uh(r,s)},o}function n0(r){return r=Ts(r),r.tag=3,r}function r0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){t0(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){t0(s,o,u),typeof f!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function UA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&hu(s,o,f,!0),o=_r.current,o!==null){switch(o.tag){case 13:return Jr===null?Em():o.alternate===null&&Ot===0&&(Ot=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===xp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),bm(r,u,f)),!1;case 22:return o.flags|=65536,u===xp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),bm(r,u,f)),!1}throw Error(i(435,o.tag))}return bm(r,u,f),Em(),!1}if(rt)return s=_r.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==_p&&(r=Error(i(422),{cause:u}),cu(pr(r,o)))):(u!==_p&&(s=Error(i(423),{cause:u}),cu(pr(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=pr(u,o),f=Kp(r.stateNode,u,f),Cp(r,f),Ot!==4&&(Ot=2)),!1;var m=Error(i(520),{cause:u});if(m=pr(m,o),ku===null?ku=[m]:ku.push(m),Ot!==4&&(Ot=2),s===null)return!0;u=pr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Kp(o.stateNode,u,r),Cp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ms===null||!Ms.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=n0(f),r0(f,r,o,u),Cp(o,f),!1}o=o.return}while(o!==null);return!1}var i0=Error(i(461)),an=!1;function _n(r,s,o,u){s.child=r===null?Wv(s,null,o,u):$o(s,r.child,o,u)}function s0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var b={};for(var S in u)S!=="ref"&&(b[S]=u[S])}else b=u;return La(s),u=Mp(r,s,o,b,m,f),S=Np(),r!==null&&!an?(Pp(r,s,f),Fi(r,s,f)):(rt&&S&&gp(s),s.flags|=1,_n(r,s,u,f),s.child)}function a0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!dp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,o0(r,s,m,u,f)):(r=_h(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!im(r,f)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:au,o(b,u)&&r.ref===s.ref)return Fi(r,s,f)}return s.flags|=1,r=Vi(m,u),r.ref=s.ref,r.return=s,s.child=r}function o0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(au(m,u)&&r.ref===s.ref)if(an=!1,s.pendingProps=u=m,im(r,f))(r.flags&131072)!==0&&(an=!0);else return s.lanes=r.lanes,Fi(r,s,f)}return Xp(r,s,o,u,f)}function l0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return u0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Th(s,m!==null?m.cachePool:null),m!==null?ov(s,m):Dp(),Qv(s);else return s.lanes=s.childLanes=536870912,u0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Th(s,m.cachePool),ov(s,m),Rs(),s.memoizedState=null):(r!==null&&Th(s,null),Dp(),Rs());return _n(r,s,f,o),s.child}function u0(r,s,o,u){var f=Sp();return f=f===null?null:{parent:Kt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Th(s,null),Dp(),Qv(s),r!==null&&hu(r,s,u,!0),null}function qh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Xp(r,s,o,u,f){return La(s),o=Mp(r,s,o,u,void 0,f),u=Np(),r!==null&&!an?(Pp(r,s,f),Fi(r,s,f)):(rt&&u&&gp(s),s.flags|=1,_n(r,s,o,f),s.child)}function c0(r,s,o,u,f,m){return La(s),s.updateQueue=null,o=uv(s,u,o,f),lv(r),u=Np(),r!==null&&!an?(Pp(r,s,m),Fi(r,s,m)):(rt&&u&&gp(s),s.flags|=1,_n(r,s,o,m),s.child)}function h0(r,s,o,u,f){if(La(s),s.stateNode===null){var m=No,b=o.contextType;typeof b=="object"&&b!==null&&(m=xn(b)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Qp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Ap(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?xn(b):No,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Wp(s,o,b,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Qp.enqueueReplaceState(m,m.state,null),_u(s,u,m,f),yu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,V=Ba(o,S);m.props=V;var X=m.context,ne=o.contextType;b=No,typeof ne=="object"&&ne!==null&&(b=xn(ne));var oe=o.getDerivedStateFromProps;ne=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||X!==b)&&Xv(s,m,u,b),bs=!1;var Z=s.memoizedState;m.state=Z,_u(s,u,m,f),yu(),X=s.memoizedState,S||Z!==X||bs?(typeof oe=="function"&&(Wp(s,o,oe,u),X=s.memoizedState),(V=bs||Kv(s,o,V,u,Z,X,b))?(ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=X),m.props=u,m.state=X,m.context=b,u=V):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Rp(r,s),b=s.memoizedProps,ne=Ba(o,b),m.props=ne,oe=s.pendingProps,Z=m.context,X=o.contextType,V=No,typeof X=="object"&&X!==null&&(V=xn(X)),S=o.getDerivedStateFromProps,(X=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==oe||Z!==V)&&Xv(s,m,u,V),bs=!1,Z=s.memoizedState,m.state=Z,_u(s,u,m,f),yu();var J=s.memoizedState;b!==oe||Z!==J||bs||r!==null&&r.dependencies!==null&&wh(r.dependencies)?(typeof S=="function"&&(Wp(s,o,S,u),J=s.memoizedState),(ne=bs||Kv(s,o,ne,u,Z,J,V)||r!==null&&r.dependencies!==null&&wh(r.dependencies))?(X||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,J,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,J,V)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=J),m.props=u,m.state=J,m.context=V,u=ne):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,qh(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=$o(s,r.child,null,f),s.child=$o(s,null,o,f)):_n(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Fi(r,s,f),r}function f0(r,s,o,u){return uu(),s.flags|=256,_n(r,s,o,u),s.child}var Zp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jp(r){return{baseLanes:r,cachePool:J_()}}function em(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=vr),r}function d0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(Xt.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(rt){if(f?As(s):Rs(),rt){var S=kt,V;if(V=S){e:{for(V=S,S=Zr;V.nodeType!==8;){if(!S){S=null;break e}if(V=Dr(V.nextSibling),V===null){S=null;break e}}S=V}S!==null?(s.memoizedState={dehydrated:S,treeContext:Ma!==null?{id:ji,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},V=Qn(18,null,null,0),V.stateNode=S,V.return=s,s.child=V,Un=s,kt=null,V=!0):V=!1}V||Va(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return jm(S)?s.lanes=32:s.lanes=536870912,null;zi(s)}return S=u.children,u=u.fallback,f?(Rs(),f=s.mode,S=Bh({mode:"hidden",children:S},f),u=Oa(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Jp(o),f.childLanes=em(r,b,o),s.memoizedState=Zp,u):(As(s),tm(s,S))}if(V=r.memoizedState,V!==null&&(S=V.dehydrated,S!==null)){if(m)s.flags&256?(As(s),s.flags&=-257,s=nm(r,s,o)):s.memoizedState!==null?(Rs(),s.child=r.child,s.flags|=128,s=null):(Rs(),f=u.fallback,S=s.mode,u=Bh({mode:"visible",children:u.children},S),f=Oa(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,$o(s,r.child,null,o),u=s.child,u.memoizedState=Jp(o),u.childLanes=em(r,b,o),s.memoizedState=Zp,s=f);else if(As(s),jm(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var X=b.dgst;b=X,u=Error(i(419)),u.stack="",u.digest=b,cu({value:u,source:null,stack:null}),s=nm(r,s,o)}else if(an||hu(r,s,o,!1),b=(o&r.childLanes)!==0,an||b){if(b=vt,b!==null&&(u=o&-o,u=(u&42)!==0?1:Br(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Mo(r,u),er(b,r,u),i0;S.data==="$?"||Em(),s=nm(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=V.treeContext,kt=Dr(S.nextSibling),Un=s,rt=!0,Pa=null,Zr=!1,r!==null&&(gr[yr++]=ji,gr[yr++]=Li,gr[yr++]=Ma,ji=r.id,Li=r.overflow,Ma=s),s=tm(s,u.children),s.flags|=4096);return s}return f?(Rs(),f=u.fallback,S=s.mode,V=r.child,X=V.sibling,u=Vi(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,X!==null?f=Vi(X,f):(f=Oa(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=Jp(o):(V=S.cachePool,V!==null?(X=Kt._currentValue,V=V.parent!==X?{parent:X,pool:X}:V):V=J_(),S={baseLanes:S.baseLanes|o,cachePool:V}),f.memoizedState=S,f.childLanes=em(r,b,o),s.memoizedState=Zp,u):(As(s),o=r.child,r=o.sibling,o=Vi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function tm(r,s){return s=Bh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Bh(r,s){return r=Qn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function nm(r,s,o){return $o(s,r.child,null,o),r=tm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function p0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Ep(r.return,s,o)}function rm(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function m0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(_n(r,s,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&p0(r,o,s);else if(r.tag===19)p0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(he(Xt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&jh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),rm(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&jh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}rm(s,!0,o,null,m);break;case"together":rm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Fi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),Os|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(hu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Vi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Vi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function im(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&wh(r)))}function qA(r,s,o){switch(s.tag){case 3:ce(s,s.stateNode.containerInfo),ws(s,Kt,r.memoizedState.cache),uu();break;case 27:case 5:ve(s);break;case 4:ce(s,s.stateNode.containerInfo);break;case 10:ws(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(As(s),s.flags|=128,null):(o&s.child.childLanes)!==0?d0(r,s,o):(As(s),r=Fi(r,s,o),r!==null?r.sibling:null);As(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(hu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return m0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),he(Xt,Xt.current),u)break;return null;case 22:case 23:return s.lanes=0,l0(r,s,o);case 24:ws(s,Kt,r.memoizedState.cache)}return Fi(r,s,o)}function g0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)an=!0;else{if(!im(r,o)&&(s.flags&128)===0)return an=!1,qA(r,s,o);an=(r.flags&131072)!==0}else an=!1,rt&&(s.flags&1048576)!==0&&G_(s,Eh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")dp(u)?(r=Ba(u,r),s.tag=1,s=h0(null,s,u,r,o)):(s.tag=0,s=Xp(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===Y){s.tag=11,s=s0(null,s,u,r,o);break e}else if(f===C){s.tag=14,s=a0(null,s,u,r,o);break e}}throw s=Pe(u)||u,Error(i(306,s,""))}}return s;case 0:return Xp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ba(u,s.pendingProps),h0(r,s,u,f,o);case 3:e:{if(ce(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,Rp(r,s),_u(s,u,null,o);var b=s.memoizedState;if(u=b.cache,ws(s,Kt,u),u!==m.cache&&wp(s,[Kt],o,!0),yu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=f0(r,s,u,o);break e}else if(u!==f){f=pr(Error(i(424)),s),cu(f),s=f0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(kt=Dr(r.firstChild),Un=s,rt=!0,Pa=null,Zr=!0,o=Wv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(uu(),u===f){s=Fi(r,s,o);break e}_n(r,s,u,o)}s=s.child}return s;case 26:return qh(r,s),r===null?(o=EE(s.type,null,s.pendingProps,null))?s.memoizedState=o:rt||(o=s.type,r=s.pendingProps,u=tf(Te.current).createElement(o),u[Yt]=s,u[Lt]=r,En(u,o,r),Nt(u),s.stateNode=u):s.memoizedState=EE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return ve(s),r===null&&rt&&(u=s.stateNode=yE(s.type,s.pendingProps,Te.current),Un=s,Zr=!0,f=kt,Vs(s.type)?(Lm=f,kt=Dr(u.firstChild)):kt=f),_n(r,s,s.pendingProps.children,o),qh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&rt&&((f=u=kt)&&(u=pR(u,s.type,s.pendingProps,Zr),u!==null?(s.stateNode=u,Un=s,kt=Dr(u.firstChild),Zr=!1,f=!0):f=!1),f||Va(s)),ve(s),f=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,u=m.children,Nm(f,m)?u=null:b!==null&&Nm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Mp(r,s,OA,null,null,o),qu._currentValue=f),qh(r,s),_n(r,s,u,o),s.child;case 6:return r===null&&rt&&((r=o=kt)&&(o=mR(o,s.pendingProps,Zr),o!==null?(s.stateNode=o,Un=s,kt=null,r=!0):r=!1),r||Va(s)),null;case 13:return d0(r,s,o);case 4:return ce(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=$o(s,null,u,o):_n(r,s,u,o),s.child;case 11:return s0(r,s,s.type,s.pendingProps,o);case 7:return _n(r,s,s.pendingProps,o),s.child;case 8:return _n(r,s,s.pendingProps.children,o),s.child;case 12:return _n(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ws(s,s.type,u.value),_n(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,La(s),f=xn(f),u=u(f),s.flags|=1,_n(r,s,u,o),s.child;case 14:return a0(r,s,s.type,s.pendingProps,o);case 15:return o0(r,s,s.type,s.pendingProps,o);case 19:return m0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Bh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Vi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return l0(r,s,o);case 24:return La(s),u=xn(Kt),r===null?(f=Sp(),f===null&&(f=vt,m=bp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Ap(s),ws(s,Kt,f)):((r.lanes&o)!==0&&(Rp(r,s),_u(s,null,null,o),yu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ws(s,Kt,u)):(u=m.cache,ws(s,Kt,u),u!==f.cache&&wp(s,[Kt],o,!0))),_n(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function $i(r){r.flags|=4}function y0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!xE(s)){if(s=_r.current,s!==null&&((Ze&4194048)===Ze?Jr!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||s!==Jr))throw mu=xp,ev;r.flags|=8192}}function zh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?it():536870912,r.lanes|=s,Wo|=s)}function xu(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Ct(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function BA(r,s,o){var u=s.pendingProps;switch(yp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(s),null;case 1:return Ct(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),qi(Kt),be(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(lu(s)?$i(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Q_())),Ct(s),null;case 26:return o=s.memoizedState,r===null?($i(s),o!==null?(Ct(s),y0(s,o)):(Ct(s),s.flags&=-16777217)):o?o!==r.memoizedState?($i(s),Ct(s),y0(s,o)):(Ct(s),s.flags&=-16777217):(r.memoizedProps!==u&&$i(s),Ct(s),s.flags&=-16777217),null;case 27:Re(s),o=Te.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&$i(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Ct(s),null}r=Ee.current,lu(s)?Y_(s):(r=yE(f,u,o),s.stateNode=r,$i(s))}return Ct(s),null;case 5:if(Re(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&$i(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Ct(s),null}if(r=Ee.current,lu(s))Y_(s);else{switch(f=tf(Te.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Yt]=s,r[Lt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(En(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&$i(s)}}return Ct(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&$i(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=Te.current,lu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Un,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Yt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||cE(r.nodeValue,o)),r||Va(s)}else r=tf(r).createTextNode(u),r[Yt]=s,s.stateNode=r}return Ct(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=lu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Yt]=s}else uu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ct(s),f=!1}else f=Q_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(zi(s),s):(zi(s),null)}if(zi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),zh(s,s.updateQueue),Ct(s),null;case 4:return be(),r===null&&Im(s.stateNode.containerInfo),Ct(s),null;case 10:return qi(s.type),Ct(s),null;case 19:if(fe(Xt),f=s.memoizedState,f===null)return Ct(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)xu(f,!1);else{if(Ot!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=jh(r),m!==null){for(s.flags|=128,xu(f,!1),r=m.updateQueue,s.updateQueue=r,zh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)H_(o,r),o=o.sibling;return he(Xt,Xt.current&1|2),s.child}r=r.sibling}f.tail!==null&&en()>Hh&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304)}else{if(!u)if(r=jh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,zh(s,r),xu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!rt)return Ct(s),null}else 2*en()-f.renderingStartTime>Hh&&o!==536870912&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=en(),s.sibling=null,r=Xt.current,he(Xt,u?r&1|2:r&1),s):(Ct(s),null);case 22:case 23:return zi(s),kp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(Ct(s),s.subtreeFlags&6&&(s.flags|=8192)):Ct(s),o=s.updateQueue,o!==null&&zh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&fe(Ua),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),qi(Kt),Ct(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function zA(r,s){switch(yp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return qi(Kt),be(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return Re(s),null;case 13:if(zi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));uu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return fe(Xt),null;case 4:return be(),null;case 10:return qi(s.type),null;case 22:case 23:return zi(s),kp(),r!==null&&fe(Ua),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return qi(Kt),null;case 25:return null;default:return null}}function _0(r,s){switch(yp(s),s.tag){case 3:qi(Kt),be();break;case 26:case 27:case 5:Re(s);break;case 4:be();break;case 13:zi(s);break;case 19:fe(Xt);break;case 10:qi(s.type);break;case 22:case 23:zi(s),kp(),r!==null&&fe(Ua);break;case 24:qi(Kt)}}function Au(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==f)}}catch(S){yt(s,s.return,S)}}function Cs(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var b=u.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,f=s;var V=o,X=S;try{X()}catch(ne){yt(f,V,ne)}}}u=u.next}while(u!==m)}}catch(ne){yt(s,s.return,ne)}}function v0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{av(s,o)}catch(u){yt(r,r.return,u)}}}function E0(r,s,o){o.props=Ba(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){yt(r,s,u)}}function Ru(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){yt(r,s,f)}}function ei(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){yt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){yt(r,s,f)}else o.current=null}function w0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){yt(r,r.return,f)}}function sm(r,s,o){try{var u=r.stateNode;uR(u,r.type,o,s),u[Lt]=s}catch(f){yt(r,r.return,f)}}function b0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Vs(r.type)||r.tag===4}function am(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||b0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Vs(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function om(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ef));else if(u!==4&&(u===27&&Vs(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(om(r,s,o),r=r.sibling;r!==null;)om(r,s,o),r=r.sibling}function Fh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Vs(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Fh(r,s,o),r=r.sibling;r!==null;)Fh(r,s,o),r=r.sibling}function T0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);En(s,u,o),s[Yt]=r,s[Lt]=o}catch(m){yt(r,r.return,m)}}var Hi=!1,Vt=!1,lm=!1,S0=typeof WeakSet=="function"?WeakSet:Set,on=null;function FA(r,s){if(r=r.containerInfo,Om=lf,r=P_(r),ap(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,S=-1,V=-1,X=0,ne=0,oe=r,Z=null;t:for(;;){for(var J;oe!==o||f!==0&&oe.nodeType!==3||(S=b+f),oe!==m||u!==0&&oe.nodeType!==3||(V=b+u),oe.nodeType===3&&(b+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===o&&++X===f&&(S=b),Z===m&&++ne===u&&(V=b),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}o=S===-1||V===-1?null:{start:S,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mm={focusedElem:r,selectionRange:o},lf=!1,on=s;on!==null;)if(s=on,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,on=r;else for(;on!==null;){switch(s=on,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ne=Ba(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ne,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ce){yt(o,o.return,Ce)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Vm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,on=r;break}on=s.return}}function x0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Is(r,o),u&4&&Au(5,o);break;case 1:if(Is(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){yt(o,o.return,b)}else{var f=Ba(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){yt(o,o.return,b)}}u&64&&v0(o),u&512&&Ru(o,o.return);break;case 3:if(Is(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{av(r,s)}catch(b){yt(o,o.return,b)}}break;case 27:s===null&&u&4&&T0(o);case 26:case 5:Is(r,o),s===null&&u&4&&w0(o),u&512&&Ru(o,o.return);break;case 12:Is(r,o);break;case 13:Is(r,o),u&4&&C0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=ZA.bind(null,o),gR(r,o))));break;case 22:if(u=o.memoizedState!==null||Hi,!u){s=s!==null&&s.memoizedState!==null||Vt,f=Hi;var m=Vt;Hi=u,(Vt=s)&&!m?Ds(r,o,(o.subtreeFlags&8772)!==0):Is(r,o),Hi=f,Vt=m}break;case 30:break;default:Is(r,o)}}function A0(r){var s=r.alternate;s!==null&&(r.alternate=null,A0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&ys(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var xt=null,Bn=!1;function Gi(r,s,o){for(o=o.child;o!==null;)R0(r,s,o),o=o.sibling}function R0(r,s,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Tt,o)}catch{}switch(o.tag){case 26:Vt||ei(o,s),Gi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Vt||ei(o,s);var u=xt,f=Bn;Vs(o.type)&&(xt=o.stateNode,Bn=!1),Gi(r,s,o),Vu(o.stateNode),xt=u,Bn=f;break;case 5:Vt||ei(o,s);case 6:if(u=xt,f=Bn,xt=null,Gi(r,s,o),xt=u,Bn=f,xt!==null)if(Bn)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(o.stateNode)}catch(m){yt(o,s,m)}else try{xt.removeChild(o.stateNode)}catch(m){yt(o,s,m)}break;case 18:xt!==null&&(Bn?(r=xt,mE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),$u(r)):mE(xt,o.stateNode));break;case 4:u=xt,f=Bn,xt=o.stateNode.containerInfo,Bn=!0,Gi(r,s,o),xt=u,Bn=f;break;case 0:case 11:case 14:case 15:Vt||Cs(2,o,s),Vt||Cs(4,o,s),Gi(r,s,o);break;case 1:Vt||(ei(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&E0(o,s,u)),Gi(r,s,o);break;case 21:Gi(r,s,o);break;case 22:Vt=(u=Vt)||o.memoizedState!==null,Gi(r,s,o),Vt=u;break;default:Gi(r,s,o)}}function C0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{$u(r)}catch(o){yt(s,s.return,o)}}function $A(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new S0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new S0),s;default:throw Error(i(435,r.tag))}}function um(r,s){var o=$A(r);s.forEach(function(u){var f=JA.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Kn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,b=s,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(Vs(S.type)){xt=S.stateNode,Bn=!1;break e}break;case 5:xt=S.stateNode,Bn=!1;break e;case 3:case 4:xt=S.stateNode.containerInfo,Bn=!0;break e}S=S.return}if(xt===null)throw Error(i(160));R0(m,b,f),xt=null,Bn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)I0(s,r),s=s.sibling}var Ir=null;function I0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Kn(s,r),Xn(r),u&4&&(Cs(3,r,r.return),Au(3,r),Cs(5,r,r.return));break;case 1:Kn(s,r),Xn(r),u&512&&(Vt||o===null||ei(o,o.return)),u&64&&Hi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Ir;if(Kn(s,r),Xn(r),u&512&&(Vt||o===null||ei(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ga]||m[Yt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),En(m,u,o),m[Yt]=r,Nt(m),u=m;break e;case"link":var b=TE("link","href",f).get(u+(o.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(S,1);break t}}m=f.createElement(u),En(m,u,o),f.head.appendChild(m);break;case"meta":if(b=TE("meta","content",f).get(u+(o.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(S,1);break t}}m=f.createElement(u),En(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[Yt]=r,Nt(m),u=m}r.stateNode=u}else SE(f,r.type,r.stateNode);else r.stateNode=bE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?SE(f,r.type,r.stateNode):bE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&sm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Kn(s,r),Xn(r),u&512&&(Vt||o===null||ei(o,o.return)),o!==null&&u&4&&sm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Kn(s,r),Xn(r),u&512&&(Vt||o===null||ei(o,o.return)),r.flags&32){f=r.stateNode;try{cr(f,"")}catch(J){yt(r,r.return,J)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,sm(r,f,o!==null?o.memoizedProps:f)),u&1024&&(lm=!0);break;case 6:if(Kn(s,r),Xn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(J){yt(r,r.return,J)}}break;case 3:if(sf=null,f=Ir,Ir=nf(s.containerInfo),Kn(s,r),Ir=f,Xn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$u(s.containerInfo)}catch(J){yt(r,r.return,J)}lm&&(lm=!1,D0(r));break;case 4:u=Ir,Ir=nf(r.stateNode.containerInfo),Kn(s,r),Xn(r),Ir=u;break;case 12:Kn(s,r),Xn(r);break;case 13:Kn(s,r),Xn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(mm=en()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,um(r,u)));break;case 22:f=r.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,X=Hi,ne=Vt;if(Hi=X||f,Vt=ne||V,Kn(s,r),Vt=ne,Hi=X,Xn(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||V||Hi||Vt||za(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){V=o=s;try{if(m=V.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=V.stateNode;var oe=V.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;S.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){yt(V,V.return,J)}}}else if(s.tag===6){if(o===null){V=s;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(J){yt(V,V.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,um(r,o))));break;case 19:Kn(s,r),Xn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,um(r,u)));break;case 30:break;case 21:break;default:Kn(s,r),Xn(r)}}function Xn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(b0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=am(r);Fh(r,m,f);break;case 5:var b=o.stateNode;o.flags&32&&(cr(b,""),o.flags&=-33);var S=am(r);Fh(r,S,b);break;case 3:case 4:var V=o.stateNode.containerInfo,X=am(r);om(r,X,V);break;default:throw Error(i(161))}}catch(ne){yt(r,r.return,ne)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function D0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;D0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Is(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)x0(r,s.alternate,s),s=s.sibling}function za(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Cs(4,s,s.return),za(s);break;case 1:ei(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&E0(s,s.return,o),za(s);break;case 27:Vu(s.stateNode);case 26:case 5:ei(s,s.return),za(s);break;case 22:s.memoizedState===null&&za(s);break;case 30:za(s);break;default:za(s)}r=r.sibling}}function Ds(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ds(f,m,o),Au(4,m);break;case 1:if(Ds(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(X){yt(u,u.return,X)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)sv(V[f],S)}catch(X){yt(u,u.return,X)}}o&&b&64&&v0(m),Ru(m,m.return);break;case 27:T0(m);case 26:case 5:Ds(f,m,o),o&&u===null&&b&4&&w0(m),Ru(m,m.return);break;case 12:Ds(f,m,o);break;case 13:Ds(f,m,o),o&&b&4&&C0(f,m);break;case 22:m.memoizedState===null&&Ds(f,m,o),Ru(m,m.return);break;case 30:break;default:Ds(f,m,o)}s=s.sibling}}function cm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&fu(o))}function hm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r))}function ti(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)k0(r,s,o,u),s=s.sibling}function k0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ti(r,s,o,u),f&2048&&Au(9,s);break;case 1:ti(r,s,o,u);break;case 3:ti(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r)));break;case 12:if(f&2048){ti(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(V){yt(s,s.return,V)}}else ti(r,s,o,u);break;case 13:ti(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?ti(r,s,o,u):Cu(r,s):m._visibility&2?ti(r,s,o,u):(m._visibility|=2,Ho(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&cm(b,s);break;case 24:ti(r,s,o,u),f&2048&&hm(s.alternate,s);break;default:ti(r,s,o,u)}}function Ho(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,S=o,V=u,X=b.flags;switch(b.tag){case 0:case 11:case 15:Ho(m,b,S,V,f),Au(8,b);break;case 23:break;case 22:var ne=b.stateNode;b.memoizedState!==null?ne._visibility&2?Ho(m,b,S,V,f):Cu(m,b):(ne._visibility|=2,Ho(m,b,S,V,f)),f&&X&2048&&cm(b.alternate,b);break;case 24:Ho(m,b,S,V,f),f&&X&2048&&hm(b.alternate,b);break;default:Ho(m,b,S,V,f)}s=s.sibling}}function Cu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Cu(o,u),f&2048&&cm(u.alternate,u);break;case 24:Cu(o,u),f&2048&&hm(u.alternate,u);break;default:Cu(o,u)}s=s.sibling}}var Iu=8192;function Go(r){if(r.subtreeFlags&Iu)for(r=r.child;r!==null;)O0(r),r=r.sibling}function O0(r){switch(r.tag){case 26:Go(r),r.flags&Iu&&r.memoizedState!==null&&IR(Ir,r.memoizedState,r.memoizedProps);break;case 5:Go(r);break;case 3:case 4:var s=Ir;Ir=nf(r.stateNode.containerInfo),Go(r),Ir=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Iu,Iu=16777216,Go(r),Iu=s):Go(r));break;default:Go(r)}}function M0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Du(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];on=u,P0(u,r)}M0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)N0(r),r=r.sibling}function N0(r){switch(r.tag){case 0:case 11:case 15:Du(r),r.flags&2048&&Cs(9,r,r.return);break;case 3:Du(r);break;case 12:Du(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,$h(r)):Du(r);break;default:Du(r)}}function $h(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];on=u,P0(u,r)}M0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Cs(8,s,s.return),$h(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,$h(s));break;default:$h(s)}r=r.sibling}}function P0(r,s){for(;on!==null;){var o=on;switch(o.tag){case 0:case 11:case 15:Cs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:fu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,on=u;else e:for(o=r;on!==null;){u=on;var f=u.sibling,m=u.return;if(A0(u),u===o){on=null;break e}if(f!==null){f.return=m,on=f;break e}on=m}}}var HA={getCacheForType:function(r){var s=xn(Kt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},GA=typeof WeakMap=="function"?WeakMap:Map,lt=0,vt=null,He=null,Ze=0,ut=0,Zn=null,ks=!1,Yo=!1,fm=!1,Yi=0,Ot=0,Os=0,Fa=0,dm=0,vr=0,Wo=0,ku=null,zn=null,pm=!1,mm=0,Hh=1/0,Gh=null,Ms=null,vn=0,Ns=null,Qo=null,Ko=0,gm=0,ym=null,V0=null,Ou=0,_m=null;function Jn(){if((lt&2)!==0&&Ze!==0)return Ze&-Ze;if(W.T!==null){var r=jo;return r!==0?r:xm()}return lr()}function j0(){vr===0&&(vr=(Ze&536870912)===0||rt?Le():536870912);var r=_r.current;return r!==null&&(r.flags|=32),vr}function er(r,s,o){(r===vt&&(ut===2||ut===9)||r.cancelPendingCommit!==null)&&(Xo(r,0),Ps(r,Ze,vr,!1)),et(r,o),((lt&2)===0||r!==vt)&&(r===vt&&((lt&2)===0&&(Fa|=o),Ot===4&&Ps(r,Ze,vr,!1)),ni(r))}function L0(r,s,o){if((lt&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||xi(r,s),f=u?QA(r,s):wm(r,s,!0),m=u;do{if(f===0){Yo&&!u&&Ps(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!YA(o)){f=wm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var S=r;f=ku;var V=S.current.memoizedState.isDehydrated;if(V&&(Xo(S,b).flags|=256),b=wm(S,b,!1),b!==2){if(fm&&!V){S.errorRecoveryDisabledLanes|=m,Fa|=m,f=4;break e}m=zn,zn=f,m!==null&&(zn===null?zn=m:zn.push.apply(zn,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Xo(r,0),Ps(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Ps(u,s,vr,!ks);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=mm+300-en(),10<f)){if(Ps(u,s,vr,!ks),Si(u,0,!0)!==0)break e;u.timeoutHandle=dE(U0.bind(null,u,o,zn,Gh,pm,s,vr,Fa,Wo,ks,m,2,-0,0),f);break e}U0(u,o,zn,Gh,pm,s,vr,Fa,Wo,ks,m,0,-0,0)}}break}while(!0);ni(r)}function U0(r,s,o,u,f,m,b,S,V,X,ne,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Uu={stylesheets:null,count:0,unsuspend:CR},O0(s),oe=DR(),oe!==null)){r.cancelPendingCommit=oe(G0.bind(null,r,s,m,o,u,f,b,S,V,ne,1,Z,J)),Ps(r,m,b,!X);return}G0(r,s,m,o,u,f,b,S,V)}function YA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Wn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ps(r,s,o,u){s&=~dm,s&=~Fa,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-tn(f),b=1<<m;u[m]=-1,f&=~b}o!==0&&Ue(r,o,s)}function Yh(){return(lt&6)===0?(Mu(0),!1):!0}function vm(){if(He!==null){if(ut===0)var r=He.return;else r=He,Ui=ja=null,Vp(r),Fo=null,Tu=0,r=He;for(;r!==null;)_0(r.alternate,r),r=r.return;He=null}}function Xo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,hR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),vm(),vt=r,He=o=Vi(r.current,null),Ze=s,ut=0,Zn=null,ks=!1,Yo=xi(r,s),fm=!1,Wo=vr=dm=Fa=Os=Ot=0,zn=ku=null,pm=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-tn(u),m=1<<f;s|=r[f],u&=~m}return Yi=s,mh(),o}function q0(r,s){Fe=null,W.H=Nh,s===pu||s===Sh?(s=rv(),ut=3):s===ev?(s=rv(),ut=4):ut=s===i0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Zn=s,He===null&&(Ot=1,Uh(r,pr(s,r.current)))}function B0(){var r=W.H;return W.H=Nh,r===null?Nh:r}function z0(){var r=W.A;return W.A=HA,r}function Em(){Ot=4,ks||(Ze&4194048)!==Ze&&_r.current!==null||(Yo=!0),(Os&134217727)===0&&(Fa&134217727)===0||vt===null||Ps(vt,Ze,vr,!1)}function wm(r,s,o){var u=lt;lt|=2;var f=B0(),m=z0();(vt!==r||Ze!==s)&&(Gh=null,Xo(r,s)),s=!1;var b=Ot;e:do try{if(ut!==0&&He!==null){var S=He,V=Zn;switch(ut){case 8:vm(),b=6;break e;case 3:case 2:case 9:case 6:_r.current===null&&(s=!0);var X=ut;if(ut=0,Zn=null,Zo(r,S,V,X),o&&Yo){b=0;break e}break;default:X=ut,ut=0,Zn=null,Zo(r,S,V,X)}}WA(),b=Ot;break}catch(ne){q0(r,ne)}while(!0);return s&&r.shellSuspendCounter++,Ui=ja=null,lt=u,W.H=f,W.A=m,He===null&&(vt=null,Ze=0,mh()),b}function WA(){for(;He!==null;)F0(He)}function QA(r,s){var o=lt;lt|=2;var u=B0(),f=z0();vt!==r||Ze!==s?(Gh=null,Hh=en()+500,Xo(r,s)):Yo=xi(r,s);e:do try{if(ut!==0&&He!==null){s=He;var m=Zn;t:switch(ut){case 1:ut=0,Zn=null,Zo(r,s,m,1);break;case 2:case 9:if(tv(m)){ut=0,Zn=null,$0(s);break}s=function(){ut!==2&&ut!==9||vt!==r||(ut=7),ni(r)},m.then(s,s);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:tv(m)?(ut=0,Zn=null,$0(s)):(ut=0,Zn=null,Zo(r,s,m,7));break;case 5:var b=null;switch(He.tag){case 26:b=He.memoizedState;case 5:case 27:var S=He;if(!b||xE(b)){ut=0,Zn=null;var V=S.sibling;if(V!==null)He=V;else{var X=S.return;X!==null?(He=X,Wh(X)):He=null}break t}}ut=0,Zn=null,Zo(r,s,m,5);break;case 6:ut=0,Zn=null,Zo(r,s,m,6);break;case 8:vm(),Ot=6;break e;default:throw Error(i(462))}}KA();break}catch(ne){q0(r,ne)}while(!0);return Ui=ja=null,W.H=u,W.A=f,lt=o,He!==null?0:(vt=null,Ze=0,mh(),Ot)}function KA(){for(;He!==null&&!ar();)F0(He)}function F0(r){var s=g0(r.alternate,r,Yi);r.memoizedProps=r.pendingProps,s===null?Wh(r):He=s}function $0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=c0(o,s,s.pendingProps,s.type,void 0,Ze);break;case 11:s=c0(o,s,s.pendingProps,s.type.render,s.ref,Ze);break;case 5:Vp(s);default:_0(o,s),s=He=H_(s,Yi),s=g0(o,s,Yi)}r.memoizedProps=r.pendingProps,s===null?Wh(r):He=s}function Zo(r,s,o,u){Ui=ja=null,Vp(s),Fo=null,Tu=0;var f=s.return;try{if(UA(r,f,s,o,Ze)){Ot=1,Uh(r,pr(o,r.current)),He=null;return}}catch(m){if(f!==null)throw He=f,m;Ot=1,Uh(r,pr(o,r.current)),He=null;return}s.flags&32768?(rt||u===1?r=!0:Yo||(Ze&536870912)!==0?r=!1:(ks=r=!0,(u===2||u===9||u===3||u===6)&&(u=_r.current,u!==null&&u.tag===13&&(u.flags|=16384))),H0(s,r)):Wh(s)}function Wh(r){var s=r;do{if((s.flags&32768)!==0){H0(s,ks);return}r=s.return;var o=BA(s.alternate,s,Yi);if(o!==null){He=o;return}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Ot===0&&(Ot=5)}function H0(r,s){do{var o=zA(r.alternate,r);if(o!==null){o.flags&=32767,He=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){He=r;return}He=r=o}while(r!==null);Ot=6,He=null}function G0(r,s,o,u,f,m,b,S,V){r.cancelPendingCommit=null;do Qh();while(vn!==0);if((lt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=hp,nn(r,o,m,b,S,V),r===vt&&(He=vt=null,Ze=0),Qo=s,Ns=r,Ko=o,gm=m,ym=f,V0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,eR(vi,function(){return X0(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,f=ae.p,ae.p=2,b=lt,lt|=4;try{FA(r,s,o)}finally{lt=b,ae.p=f,W.T=u}}vn=1,Y0(),W0(),Q0()}}function Y0(){if(vn===1){vn=0;var r=Ns,s=Qo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=W.T,W.T=null;var u=ae.p;ae.p=2;var f=lt;lt|=4;try{I0(s,r);var m=Mm,b=P_(r.containerInfo),S=m.focusedElem,V=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&N_(S.ownerDocument.documentElement,S)){if(V!==null&&ap(S)){var X=V.start,ne=V.end;if(ne===void 0&&(ne=X),"selectionStart"in S)S.selectionStart=X,S.selectionEnd=Math.min(ne,S.value.length);else{var oe=S.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Ne=S.textContent.length,Ce=Math.min(V.start,Ne),pt=V.end===void 0?Ce:Math.min(V.end,Ne);!J.extend&&Ce>pt&&(b=pt,pt=Ce,Ce=b);var G=M_(S,Ce),F=M_(S,pt);if(G&&F&&(J.rangeCount!==1||J.anchorNode!==G.node||J.anchorOffset!==G.offset||J.focusNode!==F.node||J.focusOffset!==F.offset)){var K=oe.createRange();K.setStart(G.node,G.offset),J.removeAllRanges(),Ce>pt?(J.addRange(K),J.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),J.addRange(K))}}}}for(oe=[],J=S;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<oe.length;S++){var ie=oe[S];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}lf=!!Om,Mm=Om=null}finally{lt=f,ae.p=u,W.T=o}}r.current=s,vn=2}}function W0(){if(vn===2){vn=0;var r=Ns,s=Qo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=W.T,W.T=null;var u=ae.p;ae.p=2;var f=lt;lt|=4;try{x0(r,s.alternate,s)}finally{lt=f,ae.p=u,W.T=o}}vn=3}}function Q0(){if(vn===4||vn===3){vn=0,or();var r=Ns,s=Qo,o=Ko,u=V0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?vn=5:(vn=0,Qo=Ns=null,K0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ms=null),ps(o),s=s.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Tt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=W.T,f=ae.p,ae.p=2,W.T=null;try{for(var m=r.onRecoverableError,b=0;b<u.length;b++){var S=u[b];m(S.value,{componentStack:S.stack})}}finally{W.T=s,ae.p=f}}(Ko&3)!==0&&Qh(),ni(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===_m?Ou++:(Ou=0,_m=r):Ou=0,Mu(0)}}function K0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,fu(s)))}function Qh(r){return Y0(),W0(),Q0(),X0()}function X0(){if(vn!==5)return!1;var r=Ns,s=gm;gm=0;var o=ps(Ko),u=W.T,f=ae.p;try{ae.p=32>o?32:o,W.T=null,o=ym,ym=null;var m=Ns,b=Ko;if(vn=0,Qo=Ns=null,Ko=0,(lt&6)!==0)throw Error(i(331));var S=lt;if(lt|=4,N0(m.current),k0(m,m.current,b,o),lt=S,Mu(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Tt,m)}catch{}return!0}finally{ae.p=f,W.T=u,K0(r,s)}}function Z0(r,s,o){s=pr(o,s),s=Kp(r.stateNode,s,2),r=Ss(r,s,2),r!==null&&(et(r,2),ni(r))}function yt(r,s,o){if(r.tag===3)Z0(r,r,o);else for(;s!==null;){if(s.tag===3){Z0(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ms===null||!Ms.has(u))){r=pr(o,r),o=n0(2),u=Ss(s,o,2),u!==null&&(r0(o,u,s,r),et(u,2),ni(u));break}}s=s.return}}function bm(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new GA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(fm=!0,f.add(o),r=XA.bind(null,r,s,o),s.then(r,r))}function XA(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,vt===r&&(Ze&o)===o&&(Ot===4||Ot===3&&(Ze&62914560)===Ze&&300>en()-mm?(lt&2)===0&&Xo(r,0):dm|=o,Wo===Ze&&(Wo=0)),ni(r)}function J0(r,s){s===0&&(s=it()),r=Mo(r,s),r!==null&&(et(r,s),ni(r))}function ZA(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),J0(r,o)}function JA(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),J0(r,o)}function eR(r,s){return Sn(r,s)}var Kh=null,Jo=null,Tm=!1,Xh=!1,Sm=!1,$a=0;function ni(r){r!==Jo&&r.next===null&&(Jo===null?Kh=Jo=r:Jo=Jo.next=r),Xh=!0,Tm||(Tm=!0,nR())}function Mu(r,s){if(!Sm&&Xh){Sm=!0;do for(var o=!1,u=Kh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var b=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-tn(42|r)+1)-1,m&=f&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,rE(u,m))}else m=Ze,m=Si(u,u===vt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||xi(u,m)||(o=!0,rE(u,m));u=u.next}while(o);Sm=!1}}function tR(){eE()}function eE(){Xh=Tm=!1;var r=0;$a!==0&&(cR()&&(r=$a),$a=0);for(var s=en(),o=null,u=Kh;u!==null;){var f=u.next,m=tE(u,s);m===0?(u.next=null,o===null?Kh=f:o.next=f,f===null&&(Jo=o)):(o=u,(r!==0||(m&3)!==0)&&(Xh=!0)),u=f}Mu(r)}function tE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-tn(m),S=1<<b,V=f[b];V===-1?((S&o)===0||(S&u)!==0)&&(f[b]=ds(S,s)):V<=s&&(r.expiredLanes|=S),m&=~S}if(s=vt,o=Ze,o=Si(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(ut===2||ut===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&mn(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||xi(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&mn(u),ps(o)){case 2:case 8:o=fs;break;case 32:o=vi;break;case 268435456:o=qr;break;default:o=vi}return u=nE.bind(null,r),o=Sn(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&mn(u),r.callbackPriority=2,r.callbackNode=null,2}function nE(r,s){if(vn!==0&&vn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Qh()&&r.callbackNode!==o)return null;var u=Ze;return u=Si(r,r===vt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(L0(r,u,s),tE(r,en()),r.callbackNode!=null&&r.callbackNode===o?nE.bind(null,r):null)}function rE(r,s){if(Qh())return null;L0(r,s,!0)}function nR(){fR(function(){(lt&6)!==0?Sn(pa,tR):eE()})}function xm(){return $a===0&&($a=Le()),$a}function iE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:wo(""+r)}function sE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function rR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=iE((f[Lt]||null).action),b=u.submitter;b&&(s=(s=b[Lt]||null)?iE(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var S=new bo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if($a!==0){var V=b?sE(f,b):new FormData(f);Hp(o,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(S.preventDefault(),V=b?sE(f,b):new FormData(f),Hp(o,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var Am=0;Am<cp.length;Am++){var Rm=cp[Am],iR=Rm.toLowerCase(),sR=Rm[0].toUpperCase()+Rm.slice(1);Cr(iR,"on"+sR)}Cr(L_,"onAnimationEnd"),Cr(U_,"onAnimationIteration"),Cr(q_,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(bA,"onTransitionRun"),Cr(TA,"onTransitionStart"),Cr(SA,"onTransitionCancel"),Cr(B_,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nu));function aE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var b=u.length-1;0<=b;b--){var S=u[b],V=S.instance,X=S.currentTarget;if(S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=X;try{m(f)}catch(ne){Lh(ne)}f.currentTarget=null,m=V}else for(b=0;b<u.length;b++){if(S=u[b],V=S.instance,X=S.currentTarget,S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=X;try{m(f)}catch(ne){Lh(ne)}f.currentTarget=null,m=V}}}}function Ge(r,s){var o=s[Hl];o===void 0&&(o=s[Hl]=new Set);var u=r+"__bubble";o.has(u)||(oE(s,r,2,!1),o.add(u))}function Cm(r,s,o){var u=0;s&&(u|=4),oE(o,r,u,s)}var Zh="_reactListening"+Math.random().toString(36).slice(2);function Im(r){if(!r[Zh]){r[Zh]=!0,Gl.forEach(function(o){o!=="selectionchange"&&(aR.has(o)||Cm(o,!1,r),Cm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Zh]||(s[Zh]=!0,Cm("selectionchange",!1,s))}}function oE(r,s,o,u){switch(kE(s)){case 2:var f=MR;break;case 8:f=NR;break;default:f=Fm}o=f.bind(null,s,o,r),f=void 0,!fr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Dm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===f)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;S!==null;){if(b=Ai(S),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=m=b;continue e}S=S.parentNode}}u=u.return}eh(function(){var X=m,ne=hr(o),oe=[];e:{var Z=z_.get(r);if(Z!==void 0){var J=bo,Ne=r;switch(r){case"keypress":if(Yr(o)===0)break e;case"keydown":case"keyup":J=Co;break;case"focusin":Ne="focus",J=xo;break;case"focusout":Ne="blur",J=xo;break;case"beforeblur":case"afterblur":J=xo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=lh;break;case L_:case U_:case q_:J=Ao;break;case B_:J=ch;break;case"scroll":case"scrollend":J=th;break;case"wheel":J=Io;break;case"copy":case"cut":case"paste":J=Ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=iu;break;case"toggle":case"beforetoggle":J=fh}var Ce=(s&4)!==0,pt=!Ce&&(r==="scroll"||r==="scrollend"),G=Ce?Z!==null?Z+"Capture":null:Z;Ce=[];for(var F=X,K;F!==null;){var ie=F;if(K=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||K===null||G===null||(ie=Ta(F,G),ie!=null&&Ce.push(Pu(F,ie,K))),pt)break;F=F.return}0<Ce.length&&(Z=new J(Z,Ne,null,o,ne),oe.push({event:Z,listeners:Ce}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&o!==Di&&(Ne=o.relatedTarget||o.fromElement)&&(Ai(Ne)||Ne[ur]))break e;if((J||Z)&&(Z=ne.window===ne?ne:(Z=ne.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Ne=o.relatedTarget||o.toElement,J=X,Ne=Ne?Ai(Ne):null,Ne!==null&&(pt=l(Ne),Ce=Ne.tag,Ne!==pt||Ce!==5&&Ce!==27&&Ce!==6)&&(Ne=null)):(J=null,Ne=X),J!==Ne)){if(Ce=dr,ie="onMouseLeave",G="onMouseEnter",F="mouse",(r==="pointerout"||r==="pointerover")&&(Ce=iu,ie="onPointerLeave",G="onPointerEnter",F="pointer"),pt=J==null?Z:Fr(J),K=Ne==null?Z:Fr(Ne),Z=new Ce(ie,F+"leave",J,o,ne),Z.target=pt,Z.relatedTarget=K,ie=null,Ai(ne)===X&&(Ce=new Ce(G,F+"enter",Ne,o,ne),Ce.target=K,Ce.relatedTarget=pt,ie=Ce),pt=ie,J&&Ne)t:{for(Ce=J,G=Ne,F=0,K=Ce;K;K=el(K))F++;for(K=0,ie=G;ie;ie=el(ie))K++;for(;0<F-K;)Ce=el(Ce),F--;for(;0<K-F;)G=el(G),K--;for(;F--;){if(Ce===G||G!==null&&Ce===G.alternate)break t;Ce=el(Ce),G=el(G)}Ce=null}else Ce=null;J!==null&&lE(oe,Z,J,Ce,!1),Ne!==null&&pt!==null&&lE(oe,pt,Ne,Ce,!0)}}e:{if(Z=X?Fr(X):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var we=R_;else if(Qt(Z))if(C_)we=vA;else{we=yA;var $e=gA}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?X&&Xl(X.elementType)&&(we=R_):we=_A;if(we&&(we=we(r,X))){Pi(oe,we,o,ne);break e}$e&&$e(r,Z,X),r==="focusout"&&X&&Z.type==="number"&&X.memoizedProps.value!=null&&vs(Z,"number",Z.value)}switch($e=X?Fr(X):window,r){case"focusin":(Qt($e)||$e.contentEditable==="true")&&(Do=$e,op=X,ou=null);break;case"focusout":ou=op=Do=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,V_(oe,o,ne);break;case"selectionchange":if(wA)break;case"keydown":case"keyup":V_(oe,o,ne)}var Se;if(Kr)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Ke?ee(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(E&&o.locale!=="ko"&&(Ke||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Ke&&(Se=Jl()):(Gr=ne,Es="value"in Gr?Gr.value:Gr.textContent,Ke=!0)),$e=Jh(X,Ie),0<$e.length&&(Ie=new nu(Ie,r,null,o,ne),oe.push({event:Ie,listeners:$e}),Se?Ie.data=Se:(Se=pe(o),Se!==null&&(Ie.data=Se)))),(Se=y?Wt(r,o):Xe(r,o))&&(Ie=Jh(X,"onBeforeInput"),0<Ie.length&&($e=new nu("onBeforeInput","beforeinput",null,o,ne),oe.push({event:$e,listeners:Ie}),$e.data=Se)),rR(oe,r,X,o,ne)}aE(oe,s)})}function Pu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Jh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ta(r,o),f!=null&&u.unshift(Pu(r,f,m)),f=Ta(r,s),f!=null&&u.push(Pu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function el(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function lE(r,s,o,u,f){for(var m=s._reactName,b=[];o!==null&&o!==u;){var S=o,V=S.alternate,X=S.stateNode;if(S=S.tag,V!==null&&V===u)break;S!==5&&S!==26&&S!==27||X===null||(V=X,f?(X=Ta(o,m),X!=null&&b.unshift(Pu(o,X,V))):f||(X=Ta(o,m),X!=null&&b.push(Pu(o,X,V)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var oR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function uE(r){return(typeof r=="string"?r:""+r).replace(oR,`
`).replace(lR,"")}function cE(r,s){return s=uE(s),uE(r)===s}function ef(){}function dt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||cr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&cr(r,""+u);break;case"className":$r(r,"class",u);break;case"tabIndex":$r(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":$r(r,o,u);break;case"style":Kl(r,u,m);break;case"data":if(s!=="object"){$r(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=wo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&dt(r,s,"name",f.name,f,null),dt(r,s,"formEncType",f.formEncType,f,null),dt(r,s,"formMethod",f.formMethod,f,null),dt(r,s,"formTarget",f.formTarget,f,null)):(dt(r,s,"encType",f.encType,f,null),dt(r,s,"method",f.method,f,null),dt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=wo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=ef);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=wo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),_s(r,"popover",u);break;case"xlinkActuate":gn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":gn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":gn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":gn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":gn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":gn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":gn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":gn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":gn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":_s(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ep.get(o)||o,_s(r,o,u))}}function km(r,s,o,u,f,m){switch(o){case"style":Kl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?cr(r,u):(typeof u=="number"||typeof u=="bigint")&&cr(r,""+u);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"onClick":u!=null&&(r.onclick=ef);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!go.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Lt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):_s(r,o,u)}}}function En(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:dt(r,s,m,b,o,null)}}f&&dt(r,s,"srcSet",o.srcSet,o,null),u&&dt(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var S=m=b=f=null,V=null,X=null;for(u in o)if(o.hasOwnProperty(u)){var ne=o[u];if(ne!=null)switch(u){case"name":f=ne;break;case"type":b=ne;break;case"checked":V=ne;break;case"defaultChecked":X=ne;break;case"value":m=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,s));break;default:dt(r,s,u,ne,o,null)}}Ea(r,m,S,V,X,b,f,!1),Eo(r);return;case"select":Ge("invalid",r),u=b=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":u=S;default:dt(r,s,f,S,o,null)}s=m,o=b,r.multiple=!!u,s!=null?Ii(r,!!u,s,!1):o!=null&&Ii(r,!!u,o,!0);return;case"textarea":Ge("invalid",r),m=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(S=o[b],S!=null))switch(b){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:dt(r,s,b,S,o,null)}wa(r,u,f,m),Eo(r);return;case"option":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:dt(r,s,V,u,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(u=0;u<Nu.length;u++)Ge(Nu[u],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in o)if(o.hasOwnProperty(X)&&(u=o[X],u!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:dt(r,s,X,u,o,null)}return;default:if(Xl(s)){for(ne in o)o.hasOwnProperty(ne)&&(u=o[ne],u!==void 0&&km(r,s,ne,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&dt(r,s,S,u,o,null))}function uR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,S=null,V=null,X=null,ne=null;for(J in o){var oe=o[J];if(o.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":V=oe;default:u.hasOwnProperty(J)||dt(r,s,J,null,u,oe)}}for(var Z in u){var J=u[Z];if(oe=o[Z],u.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":f=J;break;case"checked":X=J;break;case"defaultChecked":ne=J;break;case"value":b=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&dt(r,s,Z,J,u,oe)}}Yn(r,b,S,V,X,ne,m,f);return;case"select":J=b=S=Z=null;for(m in o)if(V=o[m],o.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":J=V;default:u.hasOwnProperty(m)||dt(r,s,m,null,u,V)}for(f in u)if(m=u[f],V=o[f],u.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":Z=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==V&&dt(r,s,f,m,u,V)}s=S,o=b,u=J,Z!=null?Ii(r,!!o,Z,!1):!!u!=!!o&&(s!=null?Ii(r,!!o,s,!0):Ii(r,!!o,o?[]:"",!1));return;case"textarea":J=Z=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:dt(r,s,S,null,u,f)}for(b in u)if(f=u[b],m=o[b],u.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":Z=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&dt(r,s,b,f,u,m)}ht(r,Z,J);return;case"option":for(var Ne in o)if(Z=o[Ne],o.hasOwnProperty(Ne)&&Z!=null&&!u.hasOwnProperty(Ne))switch(Ne){case"selected":r.selected=!1;break;default:dt(r,s,Ne,null,u,Z)}for(V in u)if(Z=u[V],J=o[V],u.hasOwnProperty(V)&&Z!==J&&(Z!=null||J!=null))switch(V){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:dt(r,s,V,Z,u,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in o)Z=o[Ce],o.hasOwnProperty(Ce)&&Z!=null&&!u.hasOwnProperty(Ce)&&dt(r,s,Ce,null,u,Z);for(X in u)if(Z=u[X],J=o[X],u.hasOwnProperty(X)&&Z!==J&&(Z!=null||J!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:dt(r,s,X,Z,u,J)}return;default:if(Xl(s)){for(var pt in o)Z=o[pt],o.hasOwnProperty(pt)&&Z!==void 0&&!u.hasOwnProperty(pt)&&km(r,s,pt,void 0,u,Z);for(ne in u)Z=u[ne],J=o[ne],!u.hasOwnProperty(ne)||Z===J||Z===void 0&&J===void 0||km(r,s,ne,Z,u,J);return}}for(var G in o)Z=o[G],o.hasOwnProperty(G)&&Z!=null&&!u.hasOwnProperty(G)&&dt(r,s,G,null,u,Z);for(oe in u)Z=u[oe],J=o[oe],!u.hasOwnProperty(oe)||Z===J||Z==null&&J==null||dt(r,s,oe,Z,u,J)}var Om=null,Mm=null;function tf(r){return r.nodeType===9?r:r.ownerDocument}function hE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Nm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Pm=null;function cR(){var r=window.event;return r&&r.type==="popstate"?r===Pm?!1:(Pm=r,!0):(Pm=null,!1)}var dE=typeof setTimeout=="function"?setTimeout:void 0,hR=typeof clearTimeout=="function"?clearTimeout:void 0,pE=typeof Promise=="function"?Promise:void 0,fR=typeof queueMicrotask=="function"?queueMicrotask:typeof pE<"u"?function(r){return pE.resolve(null).then(r).catch(dR)}:dE;function dR(r){setTimeout(function(){throw r})}function Vs(r){return r==="head"}function mE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var b=r.ownerDocument;if(o&1&&Vu(b.documentElement),o&2&&Vu(b.body),o&4)for(o=b.head,Vu(o),b=o.firstChild;b;){var S=b.nextSibling,V=b.nodeName;b[ga]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=S}}if(f===0){r.removeChild(m),$u(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);$u(s)}function Vm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Vm(o),ys(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function pR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[ga])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Dr(r.nextSibling),r===null)break}return null}function mR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Dr(r.nextSibling),r===null))return null;return r}function jm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function gR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Dr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Lm=null;function gE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function yE(r,s,o){switch(s=tf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Vu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);ys(r)}var Er=new Map,_E=new Set;function nf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Wi=ae.d;ae.d={f:yR,r:_R,D:vR,C:ER,L:wR,m:bR,X:SR,S:TR,M:xR};function yR(){var r=Wi.f(),s=Yh();return r||s}function _R(r){var s=zr(r);s!==null&&s.tag===5&&s.type==="form"?Lv(s):Wi.r(r)}var tl=typeof document>"u"?null:document;function vE(r,s,o){var u=tl;if(u&&typeof s=="string"&&s){var f=Ut(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),_E.has(f)||(_E.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),En(s,"link",r),Nt(s),u.head.appendChild(s)))}}function vR(r){Wi.D(r),vE("dns-prefetch",r,null)}function ER(r,s){Wi.C(r,s),vE("preconnect",r,s)}function wR(r,s,o){Wi.L(r,s,o);var u=tl;if(u&&r&&s){var f='link[rel="preload"][as="'+Ut(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ut(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ut(o.imageSizes)+'"]')):f+='[href="'+Ut(r)+'"]';var m=f;switch(s){case"style":m=nl(r);break;case"script":m=rl(r)}Er.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),Er.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(ju(m))||s==="script"&&u.querySelector(Lu(m))||(s=u.createElement("link"),En(s,"link",r),Nt(s),u.head.appendChild(s)))}}function bR(r,s){Wi.m(r,s);var o=tl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Ut(u)+'"][href="'+Ut(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=rl(r)}if(!Er.has(m)&&(r=v({rel:"modulepreload",href:r},s),Er.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Lu(m)))return}u=o.createElement("link"),En(u,"link",r),Nt(u),o.head.appendChild(u)}}}function TR(r,s,o){Wi.S(r,s,o);var u=tl;if(u&&r){var f=Vn(u).hoistableStyles,m=nl(r);s=s||"default";var b=f.get(m);if(!b){var S={loading:0,preload:null};if(b=u.querySelector(ju(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=Er.get(m))&&Um(r,o);var V=b=u.createElement("link");Nt(V),En(V,"link",r),V._p=new Promise(function(X,ne){V.onload=X,V.onerror=ne}),V.addEventListener("load",function(){S.loading|=1}),V.addEventListener("error",function(){S.loading|=2}),S.loading|=4,rf(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:S},f.set(m,b)}}}function SR(r,s){Wi.X(r,s);var o=tl;if(o&&r){var u=Vn(o).hoistableScripts,f=rl(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0},s),(s=Er.get(f))&&qm(r,s),m=o.createElement("script"),Nt(m),En(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function xR(r,s){Wi.M(r,s);var o=tl;if(o&&r){var u=Vn(o).hoistableScripts,f=rl(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=Er.get(f))&&qm(r,s),m=o.createElement("script"),Nt(m),En(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function EE(r,s,o,u){var f=(f=Te.current)?nf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=Vn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=nl(o.href);var m=Vn(f).hoistableStyles,b=m.get(r);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=f.querySelector(ju(r)))&&!m._p&&(b.instance=m,b.state.loading=5),Er.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Er.set(r,o),m||AR(f,r,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=rl(o),o=Vn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function nl(r){return'href="'+Ut(r)+'"'}function ju(r){return'link[rel="stylesheet"]['+r+"]"}function wE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function AR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),En(s,"link",o),Nt(s),r.head.appendChild(s))}function rl(r){return'[src="'+Ut(r)+'"]'}function Lu(r){return"script[async]"+r}function bE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Ut(o.href)+'"]');if(u)return s.instance=u,Nt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Nt(u),En(u,"style",f),rf(u,o.precedence,r),s.instance=u;case"stylesheet":f=nl(o.href);var m=r.querySelector(ju(f));if(m)return s.state.loading|=4,s.instance=m,Nt(m),m;u=wE(o),(f=Er.get(f))&&Um(u,f),m=(r.ownerDocument||r).createElement("link"),Nt(m);var b=m;return b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),En(m,"link",u),s.state.loading|=4,rf(m,o.precedence,r),s.instance=m;case"script":return m=rl(o.src),(f=r.querySelector(Lu(m)))?(s.instance=f,Nt(f),f):(u=o,(f=Er.get(m))&&(u=v({},o),qm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Nt(f),En(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,rf(u,o.precedence,r));return s.instance}function rf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,b=0;b<u.length;b++){var S=u[b];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Um(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function qm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var sf=null;function TE(r,s,o){if(sf===null){var u=new Map,f=sf=new Map;f.set(o,u)}else f=sf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[ga]||m[Yt]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var S=u.get(b);S?S.push(m):u.set(b,[m])}}return u}function SE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function RR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function xE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Uu=null;function CR(){}function IR(r,s,o){if(Uu===null)throw Error(i(475));var u=Uu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=nl(o.href),m=r.querySelector(ju(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=af.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,Nt(m);return}m=r.ownerDocument||r,o=wE(o),(f=Er.get(f))&&Um(o,f),m=m.createElement("link"),Nt(m);var b=m;b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),En(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=af.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function DR(){if(Uu===null)throw Error(i(475));var r=Uu;return r.stylesheets&&r.count===0&&Bm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Bm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function af(){if(this.count--,this.count===0){if(this.stylesheets)Bm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var of=null;function Bm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,of=new Map,s.forEach(kR,r),of=null,af.call(r))}function kR(r,s){if(!(s.state.loading&4)){var o=of.get(r);if(o)var u=o.get(null);else{o=new Map,of.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,f),o.set(b,f),this.count++,u=af.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var qu={$$typeof:R,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function OR(r,s,o,u,f,m,b,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function AE(r,s,o,u,f,m,b,S,V,X,ne,oe){return r=new OR(r,s,o,b,S,V,X,oe),s=1,m===!0&&(s|=24),m=Qn(3,null,null,s),r.current=m,m.stateNode=r,s=bp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Ap(m),r}function RE(r){return r?(r=No,r):No}function CE(r,s,o,u,f,m){f=RE(f),u.context===null?u.context=f:u.pendingContext=f,u=Ts(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Ss(r,u,s),o!==null&&(er(o,r,s),gu(o,r,s))}function IE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function zm(r,s){IE(r,s),(r=r.alternate)&&IE(r,s)}function DE(r){if(r.tag===13){var s=Mo(r,67108864);s!==null&&er(s,r,67108864),zm(r,67108864)}}var lf=!0;function MR(r,s,o,u){var f=W.T;W.T=null;var m=ae.p;try{ae.p=2,Fm(r,s,o,u)}finally{ae.p=m,W.T=f}}function NR(r,s,o,u){var f=W.T;W.T=null;var m=ae.p;try{ae.p=8,Fm(r,s,o,u)}finally{ae.p=m,W.T=f}}function Fm(r,s,o,u){if(lf){var f=$m(u);if(f===null)Dm(r,s,u,uf,o),OE(r,u);else if(VR(f,r,s,o,u))u.stopPropagation();else if(OE(r,u),s&4&&-1<PR.indexOf(r)){for(;f!==null;){var m=zr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Gn(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var V=1<<31-tn(b);S.entanglements[1]|=V,b&=~V}ni(m),(lt&6)===0&&(Hh=en()+500,Mu(0))}}break;case 13:S=Mo(m,2),S!==null&&er(S,m,2),Yh(),zm(m,2)}if(m=$m(u),m===null&&Dm(r,s,u,uf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Dm(r,s,u,null,o)}}function $m(r){return r=hr(r),Hm(r)}var uf=null;function Hm(r){if(uf=null,r=Ai(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return uf=r,null}function kE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fl()){case pa:return 2;case fs:return 8;case vi:case fo:return 32;case qr:return 268435456;default:return 32}default:return 32}}var Gm=!1,js=null,Ls=null,Us=null,Bu=new Map,zu=new Map,qs=[],PR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function OE(r,s){switch(r){case"focusin":case"focusout":js=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":Us=null;break;case"pointerover":case"pointerout":Bu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(s.pointerId)}}function Fu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=zr(s),s!==null&&DE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function VR(r,s,o,u,f){switch(s){case"focusin":return js=Fu(js,r,s,o,u,f),!0;case"dragenter":return Ls=Fu(Ls,r,s,o,u,f),!0;case"mouseover":return Us=Fu(Us,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Bu.set(m,Fu(Bu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,zu.set(m,Fu(zu.get(m)||null,r,s,o,u,f)),!0}return!1}function ME(r){var s=Ai(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,ms(r.priority,function(){if(o.tag===13){var u=Jn();u=Br(u);var f=Mo(o,u);f!==null&&er(f,o,u),zm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function cf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=$m(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Di=u,o.target.dispatchEvent(u),Di=null}else return s=zr(o),s!==null&&DE(s),r.blockedOn=o,!1;s.shift()}return!0}function NE(r,s,o){cf(r)&&o.delete(s)}function jR(){Gm=!1,js!==null&&cf(js)&&(js=null),Ls!==null&&cf(Ls)&&(Ls=null),Us!==null&&cf(Us)&&(Us=null),Bu.forEach(NE),zu.forEach(NE)}function hf(r,s){r.blockedOn===s&&(r.blockedOn=null,Gm||(Gm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jR)))}var ff=null;function PE(r){ff!==r&&(ff=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ff===r&&(ff=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Hm(u||o)===null)continue;break}var m=zr(o);m!==null&&(r.splice(s,3),s-=3,Hp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function $u(r){function s(V){return hf(V,r)}js!==null&&hf(js,r),Ls!==null&&hf(Ls,r),Us!==null&&hf(Us,r),Bu.forEach(s),zu.forEach(s);for(var o=0;o<qs.length;o++){var u=qs[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<qs.length&&(o=qs[0],o.blockedOn===null);)ME(o),o.blockedOn===null&&qs.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],b=f[Lt]||null;if(typeof m=="function")b||PE(o);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Lt]||null)S=b.formAction;else if(Hm(f)!==null)continue}else S=b.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),PE(o)}}}function Ym(r){this._internalRoot=r}df.prototype.render=Ym.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Jn();CE(o,u,r,s,null,null)},df.prototype.unmount=Ym.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;CE(r.current,2,null,r,null,null),Yh(),s[ur]=null}};function df(r){this._internalRoot=r}df.prototype.unstable_scheduleHydration=function(r){if(r){var s=lr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<qs.length&&s!==0&&s<qs[o].priority;o++);qs.splice(o,0,r),o===0&&ME(r)}};var VE=e.version;if(VE!=="19.1.0")throw Error(i(527,VE,"19.1.0"));ae.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var LR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pf.isDisabled&&pf.supportsFiber)try{Tt=pf.inject(LR),nt=pf}catch{}}return Gu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=Zv,m=Jv,b=e0,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=AE(r,1,!1,null,null,o,u,f,m,b,S,null),r[ur]=s.current,Im(r),new Ym(s)},Gu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=Zv,b=Jv,S=e0,V=null,X=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(V=o.unstable_transitionCallbacks),o.formState!==void 0&&(X=o.formState)),s=AE(r,1,!0,s,o??null,u,f,m,b,S,V,X),s.context=RE(null),o=s.current,u=Jn(),u=Br(u),f=Ts(u),f.callback=null,Ss(o,f,u),o=u,s.current.lanes=o,et(s,o),ni(s),r[ur]=s.current,Im(r),new df(s)},Gu.version="19.1.0",Gu}var GE;function QR(){if(GE)return Km.exports;GE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Km.exports=WR(),Km.exports}var KR=QR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var YE="popstate";function XR(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return xg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:pc(a)}return JR(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZR(){return Math.random().toString(36).substring(2,10)}function WE(t,e){return{usr:t.state,key:t.key,idx:e}}function xg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Dl(e):e,state:n,key:e&&e.key||i||ZR()}}function pc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Dl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function JR(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function w(){d="POP";let M=v(),$=M==null?null:M-g;g=M,p&&p({action:d,location:B.location,delta:$})}function T(M,$){d="PUSH";let P=xg(B.location,M,$);g=v()+1;let R=WE(P,g),Y=B.createHref(P);try{c.pushState(R,"",Y)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(Y)}l&&p&&p({action:d,location:B.location,delta:1})}function I(M,$){d="REPLACE";let P=xg(B.location,M,$);g=v();let R=WE(P,g),Y=B.createHref(P);c.replaceState(R,"",Y),l&&p&&p({action:d,location:B.location,delta:0})}function N(M){return eC(M)}let B={get action(){return d},get location(){return t(a,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(YE,w),p=M,()=>{a.removeEventListener(YE,w),p=null}},createHref(M){return e(a,M)},createURL:N,encodeLocation(M){let $=N(M);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:T,replace:I,go(M){return c.go(M)}};return B}function eC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Rt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:pc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function yT(t,e,n="/"){return tC(t,e,n,!1)}function tC(t,e,n,i){let a=typeof e=="string"?Dl(e):e,l=is(a.pathname||"/",n);if(l==null)return null;let c=_T(t);nC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=dC(l);d=hC(c[p],g,i)}return d}function _T(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Rt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=ts([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(Rt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),_T(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:uC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of vT(l.path))a(l,c,p)}),e}function vT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=vT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function nC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var rC=/^:[\w-]+$/,iC=3,sC=2,aC=1,oC=10,lC=-2,QE=t=>t==="*";function uC(t,e){let n=t.split("/"),i=n.length;return n.some(QE)&&(i+=lC),e&&(i+=sC),n.filter(a=>!QE(a)).reduce((a,l)=>a+(rC.test(l)?iC:l===""?aC:oC),i)}function cC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function hC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",w=Hf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!w&&g&&n&&!i[i.length-1].route.index&&(w=Hf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!w)return null;Object.assign(a,w.params),c.push({params:a,pathname:ts([l,w.pathname]),pathnameBase:yC(ts([l,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(l=ts([l,w.pathnameBase]))}return c}function Hf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:w},T)=>{if(v==="*"){let N=d[T]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const I=d[T];return w&&!I?g[v]=void 0:g[v]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function fC(t,e=!1,n=!0){Vr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function dC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function is(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function pC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Dl(t):t;return{pathname:n?n.startsWith("/")?n:mC(n,e):e,search:_C(i),hash:vC(a)}}function mC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function eg(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hy(t){let e=gC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function fy(t,e,n,i=!1){let a;typeof t=="string"?a=Dl(t):(a={...t},Rt(!a.pathname||!a.pathname.includes("?"),eg("?","pathname","search",a)),Rt(!a.pathname||!a.pathname.includes("#"),eg("#","pathname","hash",a)),Rt(!a.search||!a.search.includes("#"),eg("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let w=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),w-=1;a.pathname=T.join("/")}d=w>=0?e[w]:"/"}let p=pC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var ts=t=>t.join("/").replace(/\/\/+/g,"/"),yC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_C=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function EC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var ET=["POST","PUT","PATCH","DELETE"];new Set(ET);var wC=["GET",...ET];new Set(wC);var kl=U.createContext(null);kl.displayName="DataRouter";var md=U.createContext(null);md.displayName="DataRouterState";U.createContext(!1);var wT=U.createContext({isTransitioning:!1});wT.displayName="ViewTransition";var bC=U.createContext(new Map);bC.displayName="Fetchers";var TC=U.createContext(null);TC.displayName="Await";var Ur=U.createContext(null);Ur.displayName="Navigation";var Dc=U.createContext(null);Dc.displayName="Location";var yi=U.createContext({outlet:null,matches:[],isDataRoute:!1});yi.displayName="Route";var dy=U.createContext(null);dy.displayName="RouteError";function SC(t,{relative:e}={}){Rt(Ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=U.useContext(Ur),{hash:a,pathname:l,search:c}=Oc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:ts([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Ol(){return U.useContext(Dc)!=null}function ua(){return Rt(Ol(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(Dc).location}var bT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function TT(t){U.useContext(Ur).static||U.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=U.useContext(yi);return t?jC():xC()}function xC(){Rt(Ol(),"useNavigate() may be used only in the context of a <Router> component.");let t=U.useContext(kl),{basename:e,navigator:n}=U.useContext(Ur),{matches:i}=U.useContext(yi),{pathname:a}=ua(),l=JSON.stringify(hy(i)),c=U.useRef(!1);return TT(()=>{c.current=!0}),U.useCallback((p,g={})=>{if(Vr(c.current,bT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=fy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ts([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}U.createContext(null);function Oc(t,{relative:e}={}){let{matches:n}=U.useContext(yi),{pathname:i}=ua(),a=JSON.stringify(hy(n));return U.useMemo(()=>fy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function AC(t,e){return ST(t,e)}function ST(t,e,n,i){var $;Rt(Ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=U.useContext(Ur),{matches:l}=U.useContext(yi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let P=v&&v.path||"";xT(p,!v||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let w=ua(),T;if(e){let P=typeof e=="string"?Dl(e):e;Rt(g==="/"||(($=P.pathname)==null?void 0:$.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${P.pathname}" was given in the \`location\` prop.`),T=P}else T=w;let I=T.pathname||"/",N=I;if(g!=="/"){let P=g.replace(/^\//,"").split("/");N="/"+I.replace(/^\//,"").split("/").slice(P.length).join("/")}let B=yT(t,{pathname:N});Vr(v||B!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Vr(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=kC(B&&B.map(P=>Object.assign({},P,{params:Object.assign({},d,P.params),pathname:ts([g,a.encodeLocation?a.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?g:ts([g,a.encodeLocation?a.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,n,i);return e&&M?U.createElement(Dc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},M):M}function RC(){let t=VC(),e=EC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:l},"ErrorBoundary")," or"," ",U.createElement("code",{style:l},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:a},n):null,c)}var CC=U.createElement(RC,null),IC=class extends U.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?U.createElement(yi.Provider,{value:this.props.routeContext},U.createElement(dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DC({routeContext:t,match:e,children:n}){let i=U.useContext(kl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(yi.Provider,{value:t},n)}function kC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);Rt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:w}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let w,T=!1,I=null,N=null;n&&(w=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||CC,c&&(d<0&&v===0?(xT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,N=null):d===v&&(T=!0,N=g.route.hydrateFallbackElement||null)));let B=e.concat(a.slice(0,v+1)),M=()=>{let $;return w?$=I:T?$=N:g.route.Component?$=U.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=p,U.createElement(DC,{match:g,routeContext:{outlet:p,matches:B,isDataRoute:n!=null},children:$})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?U.createElement(IC,{location:n.location,revalidation:n.revalidation,component:I,error:w,children:M(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):M()},null)}function py(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OC(t){let e=U.useContext(kl);return Rt(e,py(t)),e}function MC(t){let e=U.useContext(md);return Rt(e,py(t)),e}function NC(t){let e=U.useContext(yi);return Rt(e,py(t)),e}function my(t){let e=NC(t),n=e.matches[e.matches.length-1];return Rt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function PC(){return my("useRouteId")}function VC(){var i;let t=U.useContext(dy),e=MC("useRouteError"),n=my("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function jC(){let{router:t}=OC("useNavigate"),e=my("useNavigate"),n=U.useRef(!1);return TT(()=>{n.current=!0}),U.useCallback(async(a,l={})=>{Vr(n.current,bT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var KE={};function xT(t,e,n){!e&&!KE[t]&&(KE[t]=!0,Vr(!1,n))}U.memo(LC);function LC({routes:t,future:e,state:n}){return ST(t,void 0,n,e)}function UC({to:t,replace:e,state:n,relative:i}){Rt(Ol(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=U.useContext(Ur);Vr(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=U.useContext(yi),{pathname:c}=ua(),d=kc(),p=fy(t,hy(l),c,i==="path"),g=JSON.stringify(p);return U.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function Rf(t){Rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Rt(!Ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Dl(n));let{pathname:p="/",search:g="",hash:v="",state:w=null,key:T="default"}=n,I=U.useMemo(()=>{let N=is(p,c);return N==null?null:{location:{pathname:N,search:g,hash:v,state:w,key:T},navigationType:i}},[c,p,g,v,w,T,i]);return Vr(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:U.createElement(Ur.Provider,{value:d},U.createElement(Dc.Provider,{children:e,value:I}))}function BC({children:t,location:e}){return AC(Ag(t),e)}function Ag(t,e=[]){let n=[];return U.Children.forEach(t,(i,a)=>{if(!U.isValidElement(i))return;let l=[...e,a];if(i.type===U.Fragment){n.push.apply(n,Ag(i.props.children,l));return}Rt(i.type===Rf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ag(i.props.children,l)),n.push(c)}),n}var Cf="get",If="application/x-www-form-urlencoded";function gd(t){return t!=null&&typeof t.tagName=="string"}function zC(t){return gd(t)&&t.tagName.toLowerCase()==="button"}function FC(t){return gd(t)&&t.tagName.toLowerCase()==="form"}function $C(t){return gd(t)&&t.tagName.toLowerCase()==="input"}function HC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GC(t,e){return t.button===0&&(!e||e==="_self")&&!HC(t)}var mf=null;function YC(){if(mf===null)try{new FormData(document.createElement("form"),0),mf=!1}catch{mf=!0}return mf}var WC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tg(t){return t!=null&&!WC.has(t)?(Vr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${If}"`),null):t}function QC(t,e){let n,i,a,l,c;if(FC(t)){let d=t.getAttribute("action");i=d?is(d,e):null,n=t.getAttribute("method")||Cf,a=tg(t.getAttribute("enctype"))||If,l=new FormData(t)}else if(zC(t)||$C(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?is(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Cf,a=tg(t.getAttribute("formenctype"))||tg(d.getAttribute("enctype"))||If,l=new FormData(d,t),!YC()){let{name:g,type:v,value:w}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,w)}}else{if(gd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cf,i=null,a=If,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function KC(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&is(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function XC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function JC(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await XC(l,n);return c.links?c.links():[]}return[]}));return rI(i.flat(1).filter(ZC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function XE(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var w;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function eI(t,e,{includeHydrateFallback:n}={}){return tI(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function tI(t){return[...new Set(t)]}function nI(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function rI(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(nI(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function AT(){let t=U.useContext(kl);return gy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function iI(){let t=U.useContext(md);return gy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var yy=U.createContext(void 0);yy.displayName="FrameworkContext";function RT(){let t=U.useContext(yy);return gy(t,"You must render this element inside a <HydratedRouter> element"),t}function sI(t,e){let n=U.useContext(yy),[i,a]=U.useState(!1),[l,c]=U.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=e,T=U.useRef(null);U.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let B=$=>{$.forEach(P=>{c(P.isIntersecting)})},M=new IntersectionObserver(B,{threshold:.5});return T.current&&M.observe(T.current),()=>{M.disconnect()}}},[t]),U.useEffect(()=>{if(i){let B=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(B)}}},[i]);let I=()=>{a(!0)},N=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Yu(d,I),onBlur:Yu(p,N),onMouseEnter:Yu(g,I),onMouseLeave:Yu(v,N),onTouchStart:Yu(w,I)}]:[!1,T,{}]}function Yu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function aI({page:t,...e}){let{router:n}=AT(),i=U.useMemo(()=>yT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?U.createElement(lI,{page:t,matches:i,...e}):null}function oI(t){let{manifest:e,routeModules:n}=RT(),[i,a]=U.useState([]);return U.useEffect(()=>{let l=!1;return JC(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function lI({page:t,matches:e,...n}){let i=ua(),{manifest:a,routeModules:l}=RT(),{basename:c}=AT(),{loaderData:d,matches:p}=iI(),g=U.useMemo(()=>XE(t,e,p,a,i,"data"),[t,e,p,a,i]),v=U.useMemo(()=>XE(t,e,p,a,i,"assets"),[t,e,p,a,i]),w=U.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let N=new Set,B=!1;if(e.forEach($=>{var R;let P=a.routes[$.route.id];!P||!P.hasLoader||(!g.some(Y=>Y.route.id===$.route.id)&&$.route.id in d&&((R=l[$.route.id])!=null&&R.shouldRevalidate)||P.hasClientLoader?B=!0:N.add($.route.id))}),N.size===0)return[];let M=KC(t,c,"data");return B&&N.size>0&&M.searchParams.set("_routes",e.filter($=>N.has($.route.id)).map($=>$.route.id).join(",")),[M.pathname+M.search]},[c,d,i,a,g,e,t,l]),T=U.useMemo(()=>eI(v,a),[v,a]),I=oI(v);return U.createElement(U.Fragment,null,w.map(N=>U.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),T.map(N=>U.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),I.map(({key:N,link:B})=>U.createElement("link",{key:N,...B})))}function uI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var CT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{CT&&(window.__reactRouterVersion="7.7.0")}catch{}function cI({basename:t,children:e,window:n}){let i=U.useRef();i.current==null&&(i.current=XR({window:n,v5Compat:!0}));let a=i.current,[l,c]=U.useState({action:a.action,location:a.location}),d=U.useCallback(p=>{U.startTransition(()=>c(p))},[c]);return U.useLayoutEffect(()=>a.listen(d),[a,d]),U.createElement(qC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var IT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DT=U.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:w,...T},I){let{basename:N}=U.useContext(Ur),B=typeof g=="string"&&IT.test(g),M,$=!1;if(typeof g=="string"&&B&&(M=g,CT))try{let D=new URL(window.location.href),j=g.startsWith("//")?new URL(D.protocol+g):new URL(g),O=is(j.pathname,N);j.origin===D.origin&&O!=null?g=O+j.search+j.hash:$=!0}catch{Vr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=SC(g,{relative:a}),[R,Y,z]=sI(i,T),te=pI(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:w});function C(D){e&&e(D),D.defaultPrevented||te(D)}let A=U.createElement("a",{...T,...z,href:M||P,onClick:$||l?e:C,ref:uI(I,Y),target:p,"data-discover":!B&&n==="render"?"true":void 0});return R&&!B?U.createElement(U.Fragment,null,A,U.createElement(aI,{page:P})):A});DT.displayName="Link";var hI=U.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let w=Oc(c,{relative:g.relative}),T=ua(),I=U.useContext(md),{navigator:N,basename:B}=U.useContext(Ur),M=I!=null&&vI(w)&&d===!0,$=N.encodeLocation?N.encodeLocation(w).pathname:w.pathname,P=T.pathname,R=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(P=P.toLowerCase(),R=R?R.toLowerCase():null,$=$.toLowerCase()),R&&B&&(R=is(R,B)||R);const Y=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let z=P===$||!a&&P.startsWith($)&&P.charAt(Y)==="/",te=R!=null&&(R===$||!a&&R.startsWith($)&&R.charAt($.length)==="/"),C={isActive:z,isPending:te,isTransitioning:M},A=z?e:void 0,D;typeof i=="function"?D=i(C):D=[i,z?"active":null,te?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(C):l;return U.createElement(DT,{...g,"aria-current":A,className:D,ref:v,style:j,to:c,viewTransition:d},typeof p=="function"?p(C):p)});hI.displayName="NavLink";var fI=U.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Cf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:w,...T},I)=>{let N=yI(),B=_I(d,{relative:g}),M=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&IT.test(d),P=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let Y=R.nativeEvent.submitter,z=(Y==null?void 0:Y.getAttribute("formmethod"))||c;N(Y||R.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:w})};return U.createElement("form",{ref:I,method:M,action:B,onSubmit:i?p:P,...T,"data-discover":!$&&t==="render"?"true":void 0})});fI.displayName="Form";function dI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kT(t){let e=U.useContext(kl);return Rt(e,dI(t)),e}function pI(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=kc(),p=ua(),g=Oc(t,{relative:l});return U.useCallback(v=>{if(GC(v,e)){v.preventDefault();let w=n!==void 0?n:pc(p)===pc(g);d(t,{replace:w,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var mI=0,gI=()=>`__${String(++mI)}__`;function yI(){let{router:t}=kT("useSubmit"),{basename:e}=U.useContext(Ur),n=PC();return U.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=QC(i,e);if(a.navigate===!1){let v=a.fetcherKey||gI();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function _I(t,{relative:e}={}){let{basename:n}=U.useContext(Ur),i=U.useContext(yi);Rt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Oc(t||".",{relative:e})},c=ua();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(w=>w).forEach(w=>d.append("index",w));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:ts([n,l.pathname])),pc(l)}function vI(t,e={}){let n=U.useContext(wT);Rt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=kT("useViewTransitionState"),a=Oc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=is(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=is(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Hf(a.pathname,c)!=null||Hf(a.pathname,l)!=null}var pn=function(){return pn=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},pn.apply(this,arguments)};function mc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var wt="-ms-",ac="-moz-",at="-webkit-",OT="comm",yd="rule",_y="decl",EI="@import",MT="@keyframes",wI="@layer",NT=Math.abs,vy=String.fromCharCode,Rg=Object.assign;function bI(t,e){return dn(t,0)^45?(((e<<2^dn(t,0))<<2^dn(t,1))<<2^dn(t,2))<<2^dn(t,3):0}function PT(t){return t.trim()}function Ki(t,e){return(t=e.exec(t))?t[0]:t}function ze(t,e,n){return t.replace(e,n)}function Df(t,e,n){return t.indexOf(e,n)}function dn(t,e){return t.charCodeAt(e)|0}function yl(t,e,n){return t.slice(e,n)}function ai(t){return t.length}function VT(t){return t.length}function Zu(t,e){return e.push(t),t}function TI(t,e){return t.map(e).join("")}function ZE(t,e){return t.filter(function(n){return!Ki(n,e)})}var _d=1,_l=1,jT=0,xr=0,Ft=0,Ml="";function vd(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:_d,column:_l,length:c,return:"",siblings:d}}function $s(t,e){return Rg(vd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function il(t){for(;t.root;)t=$s(t.root,{children:[t]});Zu(t,t.siblings)}function SI(){return Ft}function xI(){return Ft=xr>0?dn(Ml,--xr):0,_l--,Ft===10&&(_l=1,_d--),Ft}function Nr(){return Ft=xr<jT?dn(Ml,xr++):0,_l++,Ft===10&&(_l=1,_d++),Ft}function Xa(){return dn(Ml,xr)}function kf(){return xr}function Ed(t,e){return yl(Ml,t,e)}function Cg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AI(t){return _d=_l=1,jT=ai(Ml=t),xr=0,[]}function RI(t){return Ml="",t}function ng(t){return PT(Ed(xr-1,Ig(t===91?t+2:t===40?t+1:t)))}function CI(t){for(;(Ft=Xa())&&Ft<33;)Nr();return Cg(t)>2||Cg(Ft)>3?"":" "}function II(t,e){for(;--e&&Nr()&&!(Ft<48||Ft>102||Ft>57&&Ft<65||Ft>70&&Ft<97););return Ed(t,kf()+(e<6&&Xa()==32&&Nr()==32))}function Ig(t){for(;Nr();)switch(Ft){case t:return xr;case 34:case 39:t!==34&&t!==39&&Ig(Ft);break;case 40:t===41&&Ig(t);break;case 92:Nr();break}return xr}function DI(t,e){for(;Nr()&&t+Ft!==57;)if(t+Ft===84&&Xa()===47)break;return"/*"+Ed(e,xr-1)+"*"+vy(t===47?t:Nr())}function kI(t){for(;!Cg(Xa());)Nr();return Ed(t,xr)}function OI(t){return RI(Of("",null,null,null,[""],t=AI(t),0,[0],t))}function Of(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,w=c,T=0,I=0,N=0,B=1,M=1,$=1,P=0,R="",Y=a,z=l,te=i,C=R;M;)switch(N=P,P=Nr()){case 40:if(N!=108&&dn(C,w-1)==58){Df(C+=ze(ng(P),"&","&\f"),"&\f",NT(g?d[g-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:C+=ng(P);break;case 9:case 10:case 13:case 32:C+=CI(N);break;case 92:C+=II(kf()-1,7);continue;case 47:switch(Xa()){case 42:case 47:Zu(MI(DI(Nr(),kf()),e,n,p),p);break;default:C+="/"}break;case 123*B:d[g++]=ai(C)*$;case 125*B:case 59:case 0:switch(P){case 0:case 125:M=0;case 59+v:$==-1&&(C=ze(C,/\f/g,"")),I>0&&ai(C)-w&&Zu(I>32?ew(C+";",i,n,w-1,p):ew(ze(C," ","")+";",i,n,w-2,p),p);break;case 59:C+=";";default:if(Zu(te=JE(C,e,n,g,v,a,d,R,Y=[],z=[],w,l),l),P===123)if(v===0)Of(C,e,te,te,Y,l,w,d,z);else switch(T===99&&dn(C,3)===110?100:T){case 100:case 108:case 109:case 115:Of(t,te,te,i&&Zu(JE(t,te,te,0,0,a,d,R,a,Y=[],w,z),z),a,z,w,d,i?Y:z);break;default:Of(C,te,te,te,[""],z,0,d,z)}}g=v=I=0,B=$=1,R=C="",w=c;break;case 58:w=1+ai(C),I=N;default:if(B<1){if(P==123)--B;else if(P==125&&B++==0&&xI()==125)continue}switch(C+=vy(P),P*B){case 38:$=v>0?1:(C+="\f",-1);break;case 44:d[g++]=(ai(C)-1)*$,$=1;break;case 64:Xa()===45&&(C+=ng(Nr())),T=Xa(),v=w=ai(R=C+=kI(kf())),P++;break;case 45:N===45&&ai(C)==2&&(B=0)}}return l}function JE(t,e,n,i,a,l,c,d,p,g,v,w){for(var T=a-1,I=a===0?l:[""],N=VT(I),B=0,M=0,$=0;B<i;++B)for(var P=0,R=yl(t,T+1,T=NT(M=c[B])),Y=t;P<N;++P)(Y=PT(M>0?I[P]+" "+R:ze(R,/&\f/g,I[P])))&&(p[$++]=Y);return vd(t,e,n,a===0?yd:d,p,g,v,w)}function MI(t,e,n,i){return vd(t,e,n,OT,vy(SI()),yl(t,2,-2),0,i)}function ew(t,e,n,i,a){return vd(t,e,n,_y,yl(t,0,i),yl(t,i+1,-1),i,a)}function LT(t,e,n){switch(bI(t,e)){case 5103:return at+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return at+t+t;case 4789:return ac+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return at+t+ac+t+wt+t+t;case 5936:switch(dn(t,e+11)){case 114:return at+t+wt+ze(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return at+t+wt+ze(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return at+t+wt+ze(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return at+t+wt+t+t;case 6165:return at+t+wt+"flex-"+t+t;case 5187:return at+t+ze(t,/(\w+).+(:[^]+)/,at+"box-$1$2"+wt+"flex-$1$2")+t;case 5443:return at+t+wt+"flex-item-"+ze(t,/flex-|-self/g,"")+(Ki(t,/flex-|baseline/)?"":wt+"grid-row-"+ze(t,/flex-|-self/g,""))+t;case 4675:return at+t+wt+"flex-line-pack"+ze(t,/align-content|flex-|-self/g,"")+t;case 5548:return at+t+wt+ze(t,"shrink","negative")+t;case 5292:return at+t+wt+ze(t,"basis","preferred-size")+t;case 6060:return at+"box-"+ze(t,"-grow","")+at+t+wt+ze(t,"grow","positive")+t;case 4554:return at+ze(t,/([^-])(transform)/g,"$1"+at+"$2")+t;case 6187:return ze(ze(ze(t,/(zoom-|grab)/,at+"$1"),/(image-set)/,at+"$1"),t,"")+t;case 5495:case 3959:return ze(t,/(image-set\([^]*)/,at+"$1$`$1");case 4968:return ze(ze(t,/(.+:)(flex-)?(.*)/,at+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+at+t+t;case 4200:if(!Ki(t,/flex-|baseline/))return wt+"grid-column-align"+yl(t,e)+t;break;case 2592:case 3360:return wt+ze(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,Ki(i.props,/grid-\w+-end/)})?~Df(t+(n=n[e].value),"span",0)?t:wt+ze(t,"-start","")+t+wt+"grid-row-span:"+(~Df(n,"span",0)?Ki(n,/\d+/):+Ki(n,/\d+/)-+Ki(t,/\d+/))+";":wt+ze(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ki(i.props,/grid-\w+-start/)})?t:wt+ze(ze(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ze(t,/(.+)-inline(.+)/,at+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ai(t)-1-e>6)switch(dn(t,e+1)){case 109:if(dn(t,e+4)!==45)break;case 102:return ze(t,/(.+:)(.+)-([^]+)/,"$1"+at+"$2-$3$1"+ac+(dn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Df(t,"stretch",0)?LT(ze(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ze(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return wt+a+":"+l+g+(c?wt+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(dn(t,e+6)===121)return ze(t,":",":"+at)+t;break;case 6444:switch(dn(t,dn(t,14)===45?18:11)){case 120:return ze(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+at+(dn(t,14)===45?"inline-":"")+"box$3$1"+at+"$2$3$1"+wt+"$2box$3")+t;case 100:return ze(t,":",":"+wt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(t,"scroll-","scroll-snap-")+t}return t}function Gf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function NI(t,e,n,i){switch(t.type){case wI:if(t.children.length)break;case EI:case _y:return t.return=t.return||t.value;case OT:return"";case MT:return t.return=t.value+"{"+Gf(t.children,i)+"}";case yd:if(!ai(t.value=t.props.join(",")))return""}return ai(n=Gf(t.children,i))?t.return=t.value+"{"+n+"}":""}function PI(t){var e=VT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function VI(t){return function(e){e.root||(e=e.return)&&t(e)}}function jI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case _y:t.return=LT(t.value,t.length,n);return;case MT:return Gf([$s(t,{value:ze(t.value,"@","@"+at)})],i);case yd:if(t.length)return TI(n=t.props,function(a){switch(Ki(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":il($s(t,{props:[ze(a,/:(read-\w+)/,":"+ac+"$1")]})),il($s(t,{props:[a]})),Rg(t,{props:ZE(n,i)});break;case"::placeholder":il($s(t,{props:[ze(a,/:(plac\w+)/,":"+at+"input-$1")]})),il($s(t,{props:[ze(a,/:(plac\w+)/,":"+ac+"$1")]})),il($s(t,{props:[ze(a,/:(plac\w+)/,wt+"input-$1")]})),il($s(t,{props:[a]})),Rg(t,{props:ZE(n,i)});break}return""})}}var LI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nr={},vl=typeof process<"u"&&nr!==void 0&&(nr.REACT_APP_SC_ATTR||nr.SC_ATTR)||"data-styled",UT="active",qT="data-styled-version",wd="6.1.19",Ey=`/*!sc*/
`,Yf=typeof window<"u"&&typeof document<"u",UI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&nr!==void 0&&nr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&nr.REACT_APP_SC_DISABLE_SPEEDY!==""?nr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&nr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&nr!==void 0&&nr.SC_DISABLE_SPEEDY!==void 0&&nr.SC_DISABLE_SPEEDY!==""&&nr.SC_DISABLE_SPEEDY!=="false"&&nr.SC_DISABLE_SPEEDY),qI={},bd=Object.freeze([]),El=Object.freeze({});function BT(t,e,n){return n===void 0&&(n=El),t.theme!==n.theme&&t.theme||e||n.theme}var zT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zI=/(^-|-$)/g;function tw(t){return t.replace(BI,"-").replace(zI,"")}var FI=/(a)(d)/gi,gf=52,nw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Dg(t){var e,n="";for(e=Math.abs(t);e>gf;e=e/gf|0)n=nw(e%gf)+n;return(nw(e%gf)+n).replace(FI,"$1-$2")}var rg,FT=5381,cl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},$T=function(t){return cl(FT,t)};function HT(t){return Dg($T(t)>>>0)}function $I(t){return t.displayName||t.name||"Component"}function ig(t){return typeof t=="string"&&!0}var GT=typeof Symbol=="function"&&Symbol.for,YT=GT?Symbol.for("react.memo"):60115,HI=GT?Symbol.for("react.forward_ref"):60112,GI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},WI=((rg={})[HI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rg[YT]=WT,rg);function rw(t){return("type"in(e=t)&&e.type.$$typeof)===YT?WT:"$$typeof"in t?WI[t.$$typeof]:GI;var e}var QI=Object.defineProperty,KI=Object.getOwnPropertyNames,iw=Object.getOwnPropertySymbols,XI=Object.getOwnPropertyDescriptor,ZI=Object.getPrototypeOf,sw=Object.prototype;function QT(t,e,n){if(typeof e!="string"){if(sw){var i=ZI(e);i&&i!==sw&&QT(t,i,n)}var a=KI(e);iw&&(a=a.concat(iw(e)));for(var l=rw(t),c=rw(e),d=0;d<a.length;++d){var p=a[d];if(!(p in YI||n&&n[p]||c&&p in c||l&&p in l)){var g=XI(e,p);try{QI(t,p,g)}catch{}}}}return t}function eo(t){return typeof t=="function"}function wy(t){return typeof t=="object"&&"styledComponentId"in t}function Wa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function kg(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function gc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Og(t,e,n){if(n===void 0&&(n=!1),!n&&!gc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Og(t[i],e[i]);else if(gc(e))for(var i in e)t[i]=Og(t[i],e[i]);return t}function by(t,e){Object.defineProperty(t,"toString",{value:e})}function to(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var JI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw to(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(Ey);return n},t}(),Mf=new Map,Wf=new Map,Nf=1,yf=function(t){if(Mf.has(t))return Mf.get(t);for(;Wf.has(Nf);)Nf++;var e=Nf++;return Mf.set(t,e),Wf.set(e,t),e},eD=function(t,e){Nf=e+1,Mf.set(t,e),Wf.set(e,t)},tD="style[".concat(vl,"][").concat(qT,'="').concat(wd,'"]'),nD=new RegExp("^".concat(vl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rD=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},iD=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ey),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(nD);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(eD(v,g),rD(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},aw=function(t){for(var e=document.querySelectorAll(tD),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(vl)!==UT&&(iD(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function sD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var KT=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(vl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(vl,UT),i.setAttribute(qT,wd);var c=sD();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},aD=function(){function t(e){this.element=KT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw to(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),oD=function(){function t(e){this.element=KT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),lD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ow=Yf,uD={isServer:!Yf,useCSSOMInjection:!UI},Qf=function(){function t(e,n,i){e===void 0&&(e=El),n===void 0&&(n={});var a=this;this.options=pn(pn({},uD),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Yf&&ow&&(ow=!1,aw(this)),by(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(w){var T=function($){return Wf.get($)}(w);if(T===void 0)return"continue";var I=l.names.get(T),N=c.getGroup(w);if(I===void 0||!I.size||N.length===0)return"continue";var B="".concat(vl,".g").concat(w,'[id="').concat(T,'"]'),M="";I!==void 0&&I.forEach(function($){$.length>0&&(M+="".concat($,","))}),p+="".concat(N).concat(B,'{content:"').concat(M,'"}').concat(Ey)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return yf(e)},t.prototype.rehydrate=function(){!this.server&&Yf&&aw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(pn(pn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new lD(a):i?new aD(a):new oD(a)}(this.options),new JI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(yf(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(yf(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(yf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),cD=/&/g,hD=/^\s*\/\/.*$/gm;function XT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=XT(n.children,e)),n})}function fD(t){var e,n,i,a=El,l=a.options,c=l===void 0?El:l,d=a.plugins,p=d===void 0?bd:d,g=function(T,I,N){return N.startsWith(n)&&N.endsWith(n)&&N.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===yd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(cD,n).replace(i,g))}),c.prefix&&v.push(jI),v.push(NI);var w=function(T,I,N,B){I===void 0&&(I=""),N===void 0&&(N=""),B===void 0&&(B="&"),e=B,n=I,i=new RegExp("\\".concat(n,"\\b"),"g");var M=T.replace(hD,""),$=OI(N||I?"".concat(N," ").concat(I," { ").concat(M," }"):M);c.namespace&&($=XT($,c.namespace));var P=[];return Gf($,PI(v.concat(VI(function(R){return P.push(R)})))),P};return w.hash=p.length?p.reduce(function(T,I){return I.name||to(15),cl(T,I.name)},FT).toString():"",w}var dD=new Qf,Mg=fD(),ZT=me.createContext({shouldForwardProp:void 0,styleSheet:dD,stylis:Mg});ZT.Consumer;me.createContext(void 0);function Ng(){return U.useContext(ZT)}var pD=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Mg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,by(this,function(){throw to(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Mg),this.name+e.hash},t}(),mD=function(t){return t>="A"&&t<="Z"};function lw(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;mD(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var JT=function(t){return t==null||t===!1||t===""},e1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!JT(l)&&(Array.isArray(l)&&l.isCss||eo(l)?i.push("".concat(lw(a),":"),l,";"):gc(l)?i.push.apply(i,mc(mc(["".concat(a," {")],e1(l),!1),["}"],!1)):i.push("".concat(lw(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in LI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ks(t,e,n,i){if(JT(t))return[];if(wy(t))return[".".concat(t.styledComponentId)];if(eo(t)){if(!eo(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return Ks(a,e,n,i)}var l;return t instanceof pD?n?(t.inject(n,i),[t.getName(i)]):[t]:gc(t)?e1(t):Array.isArray(t)?Array.prototype.concat.apply(bd,t.map(function(c){return Ks(c,e,n,i)})):[t.toString()]}function t1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(eo(n)&&!wy(n))return!1}return!0}var gD=$T(wd),yD=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&t1(e),this.componentId=n,this.baseHash=cl(gD,n),this.baseStyle=i,Qf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Wa(a,this.staticRulesId);else{var l=kg(Ks(this.rules,e,n,i)),c=Dg(cl(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Wa(a,c),this.staticRulesId=c}else{for(var p=cl(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var T=kg(Ks(w,e,n,i));p=cl(p,T+v),g+=T}}if(g){var I=Dg(p>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,i(g,".".concat(I),void 0,this.componentId)),a=Wa(a,I)}}return a},t}(),yc=me.createContext(void 0);yc.Consumer;function _D(t){var e=me.useContext(yc),n=U.useMemo(function(){return function(i,a){if(!i)throw to(14);if(eo(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw to(8);return a?pn(pn({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?me.createElement(yc.Provider,{value:n},t.children):null}var sg={};function vD(t,e,n){var i=wy(t),a=t,l=!ig(t),c=e.attrs,d=c===void 0?bd:c,p=e.componentId,g=p===void 0?function(Y,z){var te=typeof Y!="string"?"sc":tw(Y);sg[te]=(sg[te]||0)+1;var C="".concat(te,"-").concat(HT(wd+te+sg[te]));return z?"".concat(z,"-").concat(C):C}(e.displayName,e.parentComponentId):p,v=e.displayName,w=v===void 0?function(Y){return ig(Y)?"styled.".concat(Y):"Styled(".concat($I(Y),")")}(t):v,T=e.displayName&&e.componentId?"".concat(tw(e.displayName),"-").concat(e.componentId):e.componentId||g,I=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,N=e.shouldForwardProp;if(i&&a.shouldForwardProp){var B=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;N=function(Y,z){return B(Y,z)&&M(Y,z)}}else N=B}var $=new yD(n,T,i?a.componentStyle:void 0);function P(Y,z){return function(te,C,A){var D=te.attrs,j=te.componentStyle,O=te.defaultProps,q=te.foldedComponentIds,k=te.styledComponentId,Pe=te.target,le=me.useContext(yc),W=Ng(),ae=te.shouldForwardProp||W.shouldForwardProp,de=BT(C,le,O)||El,ye=function(Me,Te,gt){for(var ce,be=pn(pn({},Te),{className:void 0,theme:gt}),ve=0;ve<Me.length;ve+=1){var Re=eo(ce=Me[ve])?ce(be):ce;for(var qe in Re)be[qe]=qe==="className"?Wa(be[qe],Re[qe]):qe==="style"?pn(pn({},be[qe]),Re[qe]):Re[qe]}return Te.className&&(be.className=Wa(be.className,Te.className)),be}(D,C,de),L=ye.as||Pe,re={};for(var fe in ye)ye[fe]===void 0||fe[0]==="$"||fe==="as"||fe==="theme"&&ye.theme===de||(fe==="forwardedAs"?re.as=ye.forwardedAs:ae&&!ae(fe,L)||(re[fe]=ye[fe]));var he=function(Me,Te){var gt=Ng(),ce=Me.generateAndInjectStyles(Te,gt.styleSheet,gt.stylis);return ce}(j,ye),Ee=Wa(q,k);return he&&(Ee+=" "+he),ye.className&&(Ee+=" "+ye.className),re[ig(L)&&!zT.has(L)?"class":"className"]=Ee,A&&(re.ref=A),U.createElement(L,re)}(R,Y,z)}P.displayName=w;var R=me.forwardRef(P);return R.attrs=I,R.componentStyle=$,R.displayName=w,R.shouldForwardProp=N,R.foldedComponentIds=i?Wa(a.foldedComponentIds,a.styledComponentId):"",R.styledComponentId=T,R.target=i?a.target:t,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=i?function(z){for(var te=[],C=1;C<arguments.length;C++)te[C-1]=arguments[C];for(var A=0,D=te;A<D.length;A++)Og(z,D[A],!0);return z}({},a.defaultProps,Y):Y}}),by(R,function(){return".".concat(R.styledComponentId)}),l&&QT(R,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function uw(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var cw=function(t){return Object.assign(t,{isCss:!0})};function n1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(eo(t)||gc(t))return cw(Ks(uw(bd,mc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Ks(i):cw(Ks(uw(i,e)))}function Pg(t,e,n){if(n===void 0&&(n=El),!e)throw to(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,n1.apply(void 0,mc([a],l,!1)))};return i.attrs=function(a){return Pg(t,e,pn(pn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Pg(t,e,pn(pn({},n),a))},i}var r1=function(t){return Pg(vD,t)},H=r1;zT.forEach(function(t){H[t]=r1(t)});var ED=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=t1(e),Qf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(kg(Ks(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Qf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function i1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=n1.apply(void 0,mc([t],e,!1)),a="sc-global-".concat(HT(JSON.stringify(i))),l=new ED(i,a),c=function(p){var g=Ng(),v=me.useContext(yc),w=me.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(w,p,g.styleSheet,v,g.stylis),me.useLayoutEffect(function(){if(!g.styleSheet.server)return d(w,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(w,g.styleSheet)}},[w,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,w,T){if(l.isStatic)l.renderStyles(p,qI,v,T);else{var I=pn(pn({},g),{theme:BT(g,w,c.defaultProps)});l.renderStyles(p,I,v,T)}}return me.memo(c)}/**
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
 */const wD=()=>{};var hw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},bD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},a1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,w=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,I=g&63;p||(I=64,c||(T=64)),i.push(n[v],n[w],n[T],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const w=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||w==null)throw new TD;const T=l<<2|d>>4;if(i.push(T),g!==64){const I=d<<4&240|g>>2;if(i.push(I),w!==64){const N=g<<6&192|w;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SD=function(t){const e=s1(t);return a1.encodeByteArray(e,!0)},Kf=function(t){return SD(t).replace(/\./g,"")},o1=function(t){try{return a1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AD=()=>xD().__FIREBASE_DEFAULTS__,RD=()=>{if(typeof process>"u"||typeof hw>"u")return;const t=hw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&o1(t[1]);return e&&JSON.parse(e)},Td=()=>{try{return wD()||AD()||RD()||CD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l1=t=>{var e,n;return(n=(e=Td())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ID=t=>{const e=l1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},u1=()=>{var t;return(t=Td())==null?void 0:t.config},c1=t=>{var e;return(e=Td())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Nl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function h1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function kD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Kf(JSON.stringify(n)),Kf(JSON.stringify(c)),""].join(".")}const oc={};function OD(){const t={prod:[],emulator:[]};for(const e of Object.keys(oc))oc[e]?t.emulator.push(e):t.prod.push(e);return t}function MD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fw=!1;function f1(t,e){if(typeof window>"u"||typeof document>"u"||!Nl(window.location.host)||oc[t]===e||oc[t]||fw)return;oc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=OD().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,I){T.setAttribute("width","24"),T.setAttribute("id",I),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{fw=!0,c()},T}function v(T,I){T.setAttribute("id",I),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=MD(i),I=n("text"),N=document.getElementById(I)||document.createElement("span"),B=n("learnmore"),M=document.getElementById(B)||document.createElement("a"),$=n("preprendIcon"),P=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const R=T.element;d(R),v(M,B);const Y=g();p(P,$),R.append(P,N,M,Y),document.body.appendChild(R)}l?(N.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ND(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nn())}function PD(){var e;const t=(e=Td())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UD(){const t=Nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qD(){return!PD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BD(){try{return typeof indexedDB=="object"}catch{return!1}}function zD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="FirebaseError";class us extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=FD,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mc.prototype.create)}}class Mc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?$D(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new us(a,d,i)}}function $D(t,e){return t.replace(HD,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const HD=/\{\$([^}]+)}/g;function GD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function no(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(dw(l)&&dw(c)){if(!no(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function dw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ju(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ec(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YD(t,e){const n=new WD(t,e);return n.subscribe.bind(n)}class WD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");QD(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=ag),a.error===void 0&&(a.error=ag),a.complete===void 0&&(a.complete=ag);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ag(){}/**
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
 */function Gt(t){return t&&t._delegate?t._delegate:t}class ro{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ga="[DEFAULT]";/**
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
 */class KD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new DD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZD(e))try{this.getOrInitializeService({instanceIdentifier:Ga})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Ga){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ga){return this.instances.has(e)}getOptions(e=Ga){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:XD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ga){return this.component?this.component.multipleInstances?e:Ga:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XD(t){return t===Ga?void 0:t}function ZD(t){return t.instantiationMode==="EAGER"}/**
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
 */class JD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ye||(Ye={}));const ek={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},tk=Ye.INFO,nk={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=nk[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ty{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let pw,mw;function sk(){return pw||(pw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ak(){return mw||(mw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d1=new WeakMap,Vg=new WeakMap,p1=new WeakMap,og=new WeakMap,Sy=new WeakMap;function ok(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Xs(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&d1.set(n,t)}).catch(()=>{}),Sy.set(e,t),e}function lk(t){if(Vg.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Vg.set(t,e)}let jg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||p1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){jg=t(jg)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(lg(this),e,...n);return p1.set(i,e.sort?e.sort():[e]),Xs(i)}:ak().includes(t)?function(...e){return t.apply(lg(this),e),Xs(d1.get(this))}:function(...e){return Xs(t.apply(lg(this),e))}}function hk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,sk())?new Proxy(t,jg):t)}function Xs(t){if(t instanceof IDBRequest)return ok(t);if(og.has(t))return og.get(t);const e=hk(t);return e!==t&&(og.set(t,e),Sy.set(e,t)),e}const lg=t=>Sy.get(t);function fk(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=Xs(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Xs(c.result),p.oldVersion,p.newVersion,Xs(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const dk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],ug=new Map;function gw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ug.get(e))return ug.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=pk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||dk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return ug.set(e,l),l}uk(t=>({...t,get:(e,n,i)=>gw(e,n)||t.get(e,n,i),has:(e,n)=>!!gw(e,n)||t.has(e,n)}));/**
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
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lg="@firebase/app",yw="0.14.0";/**
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
 */const ss=new Ty("@firebase/app"),yk="@firebase/app-compat",_k="@firebase/analytics-compat",vk="@firebase/analytics",Ek="@firebase/app-check-compat",wk="@firebase/app-check",bk="@firebase/auth",Tk="@firebase/auth-compat",Sk="@firebase/database",xk="@firebase/data-connect",Ak="@firebase/database-compat",Rk="@firebase/functions",Ck="@firebase/functions-compat",Ik="@firebase/installations",Dk="@firebase/installations-compat",kk="@firebase/messaging",Ok="@firebase/messaging-compat",Mk="@firebase/performance",Nk="@firebase/performance-compat",Pk="@firebase/remote-config",Vk="@firebase/remote-config-compat",jk="@firebase/storage",Lk="@firebase/storage-compat",Uk="@firebase/firestore",qk="@firebase/ai",Bk="@firebase/firestore-compat",zk="firebase",Fk="12.0.0";/**
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
 */const Ug="[DEFAULT]",$k={[Lg]:"fire-core",[yk]:"fire-core-compat",[vk]:"fire-analytics",[_k]:"fire-analytics-compat",[wk]:"fire-app-check",[Ek]:"fire-app-check-compat",[bk]:"fire-auth",[Tk]:"fire-auth-compat",[Sk]:"fire-rtdb",[xk]:"fire-data-connect",[Ak]:"fire-rtdb-compat",[Rk]:"fire-fn",[Ck]:"fire-fn-compat",[Ik]:"fire-iid",[Dk]:"fire-iid-compat",[kk]:"fire-fcm",[Ok]:"fire-fcm-compat",[Mk]:"fire-perf",[Nk]:"fire-perf-compat",[Pk]:"fire-rc",[Vk]:"fire-rc-compat",[jk]:"fire-gcs",[Lk]:"fire-gcs-compat",[Uk]:"fire-fst",[Bk]:"fire-fst-compat",[qk]:"fire-vertex","fire-js":"fire-js",[zk]:"fire-js-all"};/**
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
 */const Xf=new Map,Hk=new Map,qg=new Map;function _w(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wl(t){const e=t.name;if(qg.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;qg.set(e,t);for(const n of Xf.values())_w(n,t);for(const n of Hk.values())_w(n,t);return!0}function xy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Gk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zs=new Mc("app","Firebase",Gk);/**
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
 */class Yk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ro("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zs.create("app-deleted",{appName:this._name})}}/**
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
 */const Pl=Fk;function m1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Ug,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Zs.create("bad-app-name",{appName:String(a)});if(n||(n=u1()),!n)throw Zs.create("no-options");const l=Xf.get(a);if(l){if(no(n,l.options)&&no(i,l.config))return l;throw Zs.create("duplicate-app",{appName:a})}const c=new JD(a);for(const p of qg.values())c.addComponent(p);const d=new Yk(n,i,c);return Xf.set(a,d),d}function g1(t=Ug){const e=Xf.get(t);if(!e&&t===Ug&&u1())return m1();if(!e)throw Zs.create("no-app",{appName:t});return e}function Js(t,e,n){let i=$k[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(c.join(" "));return}wl(new ro(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wk="firebase-heartbeat-database",Qk=1,_c="firebase-heartbeat-store";let cg=null;function y1(){return cg||(cg=fk(Wk,Qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_c)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zs.create("idb-open",{originalErrorMessage:t.message})})),cg}async function Kk(t){try{const n=(await y1()).transaction(_c),i=await n.objectStore(_c).get(_1(t));return await n.done,i}catch(e){if(e instanceof us)ss.warn(e.message);else{const n=Zs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function vw(t,e){try{const i=(await y1()).transaction(_c,"readwrite");await i.objectStore(_c).put(e,_1(t)),await i.done}catch(n){if(n instanceof us)ss.warn(n.message);else{const i=Zs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(i.message)}}}function _1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xk=1024,Zk=30;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ew();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Zk){const c=nO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ss.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ew(),{heartbeatsToSend:i,unsentEntries:a}=eO(this._heartbeatsCache.heartbeats),l=Kf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return ss.warn(n),""}}}function Ew(){return new Date().toISOString().substring(0,10)}function eO(t,e=Xk){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),ww(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ww(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class tO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BD()?zD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ww(t){return Kf(JSON.stringify({version:2,heartbeats:t})).length}function nO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function rO(t){wl(new ro("platform-logger",e=>new mk(e),"PRIVATE")),wl(new ro("heartbeat",e=>new Jk(e),"PRIVATE")),Js(Lg,yw,t),Js(Lg,yw,"esm2020"),Js("fire-js","")}rO("");function v1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iO=v1,E1=new Mc("auth","Firebase",v1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new Ty("@firebase/auth");function sO(t,...e){Zf.logLevel<=Ye.WARN&&Zf.warn(`Auth (${Pl}): ${t}`,...e)}function Pf(t,...e){Zf.logLevel<=Ye.ERROR&&Zf.error(`Auth (${Pl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,...e){throw Ay(t,...e)}function ci(t,...e){return Ay(t,...e)}function w1(t,e,n){const i={...iO(),[e]:n};return new Mc("auth","Firebase",i).create(e,{appName:t.name})}function ns(t){return w1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ay(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return E1.create(t,...e)}function ke(t,e,...n){if(!t)throw Ay(e,...n)}function Xi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pf(e),new Error(e)}function as(t,e){t||Xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function aO(){return bw()==="http:"||bw()==="https:"}function bw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aO()||jD()||"connection"in navigator)?navigator.onLine:!0}function lO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,as(n>e,"Short delay should be less than long delay!"),this.isMobile=ND()||LD()}get(){return oO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t,e){as(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hO=new Pc(3e4,6e4);function ca(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function cs(t,e,n,i,a={}){return T1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Nc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return VD()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Nl(t.emulatorConfig.host)&&(g.credentials="include"),b1.fetch()(await S1(t,t.config.apiHost,n,d),g)})}async function T1(t,e,n){t._canInitEmulator=!1;const i={...uO,...e};try{const a=new dO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw _f(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw _f(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw _f(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw _f(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw w1(t,v,g);jr(t,v)}}catch(a){if(a instanceof us)throw a;jr(t,"network-request-failed",{message:String(a)})}}async function Vc(t,e,n,i,a={}){const l=await cs(t,e,n,i,a);return"mfaPendingCredential"in l&&jr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function S1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Ry(t.config,a):`${t.config.apiScheme}://${a}`;return cO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function fO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ci(this.auth,"network-request-failed")),hO.get())})}}function _f(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=ci(t,e,i);return a.customData._tokenResponse=n,a}function Tw(t){return t!==void 0&&t.enterprise!==void 0}class pO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mO(t,e){return cs(t,"GET","/v2/recaptchaConfig",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e){return cs(t,"POST","/v1/accounts:delete",e)}async function Jf(t,e){return cs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yO(t,e=!1){const n=Gt(t),i=await n.getIdToken(e),a=Cy(i);ke(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:lc(hg(a.auth_time)),issuedAtTime:lc(hg(a.iat)),expirationTime:lc(hg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function hg(t){return Number(t)*1e3}function Cy(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Pf("JWT malformed, contained fewer than 3 sections"),null;try{const a=o1(n);return a?JSON.parse(a):(Pf("Failed to decode base64 JWT payload"),null)}catch(a){return Pf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Sw(t){const e=Cy(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof us&&_O(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _O({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lc(this.lastLoginAt),this.creationTime=lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ed(t){var w;const e=t.auth,n=await t.getIdToken(),i=await bl(t,Jf(e,{idToken:n}));ke(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(w=a.providerUserInfo)!=null&&w.length?x1(a.providerUserInfo):[],c=wO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new zg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function EO(t){const e=Gt(t);await ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function x1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e){const n=await T1(t,{},async()=>{const i=Nc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await S1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Nl(t.emulatorConfig.host)&&(p.credentials="include"),b1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TO(t,e){return cs(t,"POST","/v2/accounts:revokeToken",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=Sw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await bO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new fl;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ke(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fl,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Or{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new vO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new zg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await bl(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yO(this,e)}reload(){return EO(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Or({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ed(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wr(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await bl(this,gO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:w,emailVerified:T,isAnonymous:I,providerData:N,stsTokenManager:B}=n;ke(w&&B,e,"internal-error");const M=fl.fromJSON(this.name,B);ke(typeof w=="string",e,"internal-error"),zs(i,e.name),zs(a,e.name),ke(typeof T=="boolean",e,"internal-error"),ke(typeof I=="boolean",e,"internal-error"),zs(l,e.name),zs(c,e.name),zs(d,e.name),zs(p,e.name),zs(g,e.name),zs(v,e.name);const $=new Or({uid:w,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:I,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:M,createdAt:g,lastLoginAt:v});return N&&Array.isArray(N)&&($.providerData=N.map(P=>({...P}))),p&&($._redirectEventId=p),$}static async _fromIdTokenResponse(e,n,i=!1){const a=new fl;a.updateFromServerResponse(n);const l=new Or({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await ed(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];ke(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?x1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new fl;d.updateFromIdToken(i);const p=new Or({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new zg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new Map;function Zi(t){as(t instanceof Function,"Expected a class definition");let e=xw.get(t);return e?(as(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xw.set(t,e),e)}/**
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
 */class A1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A1.type="NONE";const Aw=A1;/**
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
 */function Vf(t,e,n){return`firebase:${t}:${e}:${n}`}class dl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Vf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Vf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jf(this.auth,{idToken:e}).catch(()=>{});return n?Or._fromGetAccountInfoResponse(this.auth,n,e):null}return Or._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new dl(Zi(Aw),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Zi(Aw);const c=Vf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let w;if(typeof v=="string"){const T=await Jf(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Or._fromGetAccountInfoResponse(e,T,v)}else w=Or._fromJSON(e,v);g!==l&&(d=w),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new dl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new dl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O1(e))return"Blackberry";if(M1(e))return"Webos";if(C1(e))return"Safari";if((e.includes("chrome/")||I1(e))&&!e.includes("edge/"))return"Chrome";if(k1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function R1(t=Nn()){return/firefox\//i.test(t)}function C1(t=Nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I1(t=Nn()){return/crios\//i.test(t)}function D1(t=Nn()){return/iemobile/i.test(t)}function k1(t=Nn()){return/android/i.test(t)}function O1(t=Nn()){return/blackberry/i.test(t)}function M1(t=Nn()){return/webos/i.test(t)}function Iy(t=Nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SO(t=Nn()){var e;return Iy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function xO(){return UD()&&document.documentMode===10}function N1(t=Nn()){return Iy(t)||k1(t)||M1(t)||O1(t)||/windows phone/i.test(t)||D1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e=[]){let n;switch(t){case"Browser":n=Rw(Nn());break;case"Worker":n=`${Rw(Nn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pl}/${i}`}/**
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
 */class AO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function RO(t,e={}){return cs(t,"GET","/v2/passwordPolicy",ca(t,e))}/**
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
 */const CO=6;class IO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??CO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cw(this),this.idTokenSubscription=new Cw(this),this.beforeStateQueue=new AO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zi(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await dl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jf(this,{idToken:e}),i=await Or._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(wr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ed(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wr(this.app))return Promise.reject(ns(this));const n=e?Gt(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wr(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wr(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RO(this),n=new IO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await TO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zi(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await dl.create(this,[Zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(wr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&sO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function uo(t){return Gt(t)}class Cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=YD(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kO(t){Sd=t}function V1(t){return Sd.loadJS(t)}function OO(){return Sd.recaptchaEnterpriseScript}function MO(){return Sd.gapiScript}function NO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class PO{constructor(){this.enterprise=new VO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jO="recaptcha-enterprise",j1="NO_RECAPTCHA";class LO{constructor(e){this.type=jO,this.auth=uo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{mO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new pO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Tw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(j1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Tw(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=OO();p.length!==0&&(p+=d),V1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Iw(t,e,n,i=!1,a=!1){const l=new LO(t);let c;if(a)c=j1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Fg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Iw(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Iw(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e){const n=xy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(no(l,e??{}))return a;jr(a,"already-initialized")}return n.initialize({options:e})}function qO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function BO(t,e,n){const i=uo(t);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=L1(e),{host:c,port:d}=zO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(no(g,i.config.emulator)&&no(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Nl(c)?(h1(`${l}//${c}${p}`),f1("Auth",!0)):FO()}function L1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zO(t){const e=L1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Dw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Dw(c)}}}function Dw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xi("not implemented")}_getIdTokenResponse(e){return Xi("not implemented")}_linkToIdToken(e,n){return Xi("not implemented")}_getReauthenticationResolver(e){return Xi("not implemented")}}async function $O(t,e){return cs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){return Vc(t,"POST","/v1/accounts:signInWithPassword",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",ca(t,e))}async function YO(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Dy{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new vc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new vc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,n,"signInWithPassword",HO);case"emailLink":return GO(e,{email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,i,"signUpPassword",$O);case"emailLink":return YO(e,{idToken:n,email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t,e){return Vc(t,"POST","/v1/accounts:signInWithIdp",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="http://localhost";class io extends Dy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new io(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new io(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return pl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,pl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pl(e,n)}buildRequest(){const e={requestUri:WO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KO(t){const e=Ju(ec(t)).link,n=e?Ju(ec(e)).deep_link_id:null,i=Ju(ec(t)).deep_link_id;return(i?Ju(ec(i)).link:null)||i||n||e||t}class ky{constructor(e){const n=Ju(ec(e)),i=n.apiKey??null,a=n.oobCode??null,l=QO(n.mode??null);ke(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=KO(e);try{return new ky(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.providerId=Vl.PROVIDER_ID}static credential(e,n){return vc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ky.parseLink(n);return ke(i,"argument-error"),vc._fromEmailAndCode(e,i.code,i.tenantId)}}Vl.PROVIDER_ID="password";Vl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jc extends U1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends jc{constructor(){super("facebook.com")}static credential(e){return io._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hs.credentialFromTaggedObject(e)}static credentialFromError(e){return Hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hs.credential(e.oauthAccessToken)}catch{return null}}}Hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends jc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return io._fromParams({providerId:Gs.PROVIDER_ID,signInMethod:Gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gs.credentialFromTaggedObject(e)}static credentialFromError(e){return Gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Gs.credential(n,i)}catch{return null}}}Gs.GOOGLE_SIGN_IN_METHOD="google.com";Gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends jc{constructor(){super("github.com")}static credential(e){return io._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ys.credentialFromTaggedObject(e)}static credentialFromError(e){return Ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ys.credential(e.oauthAccessToken)}catch{return null}}}Ys.GITHUB_SIGN_IN_METHOD="github.com";Ys.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends jc{constructor(){super("twitter.com")}static credential(e,n){return io._fromParams({providerId:Ws.PROVIDER_ID,signInMethod:Ws.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ws.credentialFromTaggedObject(e)}static credentialFromError(e){return Ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ws.credential(n,i)}catch{return null}}}Ws.TWITTER_SIGN_IN_METHOD="twitter.com";Ws.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Vc(t,"POST","/v1/accounts:signUp",ca(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Or._fromIdTokenResponse(e,i,a),c=kw(i);return new so({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=kw(i);return new so({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function kw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends us{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,td.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new td(e,n,i,a)}}function q1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?td._fromErrorAndOperation(t,l,e,i):l})}async function ZO(t,e,n=!1){const i=await bl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return so._forOperation(t,"link",i)}/**
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
 */async function JO(t,e,n=!1){const{auth:i}=t;if(wr(i.app))return Promise.reject(ns(i));const a="reauthenticate";try{const l=await bl(t,q1(i,a,e,t),n);ke(l.idToken,i,"internal-error");const c=Cy(l.idToken);ke(c,i,"internal-error");const{sub:d}=c;return ke(t.uid===d,i,"user-mismatch"),so._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&jr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e,n=!1){if(wr(t.app))return Promise.reject(ns(t));const i="signIn",a=await q1(t,i,e),l=await so._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function eM(t,e){return B1(uo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t){const e=uo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tM(t,e,n){if(wr(t.app))return Promise.reject(ns(t));const i=uo(t),c=await Fg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&z1(t),p}),d=await so._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function nM(t,e,n){return wr(t.app)?Promise.reject(ns(t)):eM(Gt(t),Vl.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&z1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return cs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Gt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await bl(i,rM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function sM(t,e,n,i){return Gt(t).onIdTokenChanged(e,n,i)}function aM(t,e,n){return Gt(t).beforeAuthStateChanged(e,n)}function xd(t,e,n,i){return Gt(t).onAuthStateChanged(e,n,i)}function oM(t){return Gt(t).signOut()}const nd="__sak";/**
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
 */class F1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nd,"1"),this.storage.removeItem(nd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=1e3,uM=10;class $1 extends F1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);xO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,uM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},lM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$1.type="LOCAL";const cM=$1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends F1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H1.type="SESSION";const G1=H1;/**
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
 */function hM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Ad(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await hM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Oy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}function dM(t){hi().location.href=t}/**
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
 */function Y1(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function pM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function gM(){return Y1()?self:null}/**
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
 */const W1="firebaseLocalStorageDb",yM=1,rd="firebaseLocalStorage",Q1="fbase_key";class Lc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rd(t,e){return t.transaction([rd],e?"readwrite":"readonly").objectStore(rd)}function _M(){const t=indexedDB.deleteDatabase(W1);return new Lc(t).toPromise()}function $g(){const t=indexedDB.open(W1,yM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(rd,{keyPath:Q1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(rd)?e(i):(i.close(),await _M(),e(await $g()))})})}async function Ow(t,e,n){const i=Rd(t,!0).put({[Q1]:e,value:n});return new Lc(i).toPromise()}async function vM(t,e){const n=Rd(t,!1).get(e),i=await new Lc(n).toPromise();return i===void 0?null:i.value}function Mw(t,e){const n=Rd(t,!0).delete(e);return new Lc(n).toPromise()}const EM=800,wM=3;class K1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $g(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>wM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(gM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await pM(),!this.activeServiceWorker)return;this.sender=new fM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $g();return await Ow(e,nd,"1"),await Mw(e,nd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ow(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>vM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Rd(a,!1).getAll();return new Lc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K1.type="LOCAL";const bM=K1;new Pc(3e4,6e4);/**
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
 */function TM(t,e){return e?Zi(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class My extends Dy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SM(t){return B1(t.auth,new My(t),t.bypassAuthState)}function xM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),JO(n,new My(t),t.bypassAuthState)}async function AM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),ZO(n,new My(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SM;case"linkViaPopup":case"linkViaRedirect":return AM;case"reauthViaPopup":case"reauthViaRedirect":return xM;default:jr(this.auth,"internal-error")}}resolve(e){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=new Pc(2e3,1e4);class hl extends X1{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,hl.currentPopupAction&&hl.currentPopupAction.cancel(),hl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){as(this.filter.length===1,"Popup operations only handle one event");const e=Oy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RM.get())};e()}}hl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="pendingRedirect",jf=new Map;class IM extends X1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=jf.get(this.auth._key());if(!e){try{const i=await DM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}jf.set(this.auth._key(),e)}return this.bypassAuthState||jf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DM(t,e){const n=MM(e),i=OM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function kM(t,e){jf.set(t._key(),e)}function OM(t){return Zi(t._redirectPersistence)}function MM(t){return Vf(CM,t.config.apiKey,t.name)}async function NM(t,e,n=!1){if(wr(t.app))return Promise.reject(ns(t));const i=uo(t),a=TM(i,e),c=await new IM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=600*1e3;class VM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Z1(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(ci(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nw(e))}saveEventToCache(e){this.cachedEventUids.add(Nw(e)),this.lastProcessedEventTime=Date.now()}}function Nw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(t,e={}){return cs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qM=/^https?/;async function BM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LM(t);for(const n of e)try{if(zM(n))return}catch{}jr(t,"unauthorized-domain")}function zM(t){const e=Bg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!qM.test(n))return!1;if(UM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const FM=new Pc(3e4,6e4);function Pw(){const t=hi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $M(t){return new Promise((e,n)=>{var a,l,c;function i(){Pw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pw(),n(ci(t,"network-request-failed"))},timeout:FM.get()})}if((l=(a=hi().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=hi().gapi)!=null&&c.load)i();else{const d=NO("iframefcb");return hi()[d]=()=>{gapi.load?i():n(ci(t,"network-request-failed"))},V1(`${MO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw Lf=null,e})}let Lf=null;function HM(t){return Lf=Lf||$M(t),Lf}/**
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
 */const GM=new Pc(5e3,15e3),YM="__/auth/iframe",WM="emulator/auth/iframe",QM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XM(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ry(e,WM):`https://${t.config.authDomain}/${YM}`,i={apiKey:e.apiKey,appName:t.name,v:Pl},a=KM.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Nc(i).slice(1)}`}async function ZM(t){const e=await HM(t),n=hi().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:XM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QM,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=ci(t,"network-request-failed"),d=hi().setTimeout(()=>{l(c)},GM.get());function p(){hi().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const JM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eN=500,tN=600,nN="_blank",rN="http://localhost";class Vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iN(t,e,n,i=eN,a=tN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...JM,width:i.toString(),height:a.toString(),top:l,left:c},g=Nn().toLowerCase();n&&(d=I1(g)?nN:n),R1(g)&&(e=e||rN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[I,N])=>`${T}${I}=${N},`,"");if(SO(g)&&d!=="_self")return sN(e||"",d),new Vw(null);const w=window.open(e||"",d,v);ke(w,t,"popup-blocked");try{w.focus()}catch{}return new Vw(w)}function sN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const aN="__/auth/handler",oN="emulator/auth/handler",lN=encodeURIComponent("fac");async function jw(t,e,n,i,a,l){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Pl,eventId:a};if(e instanceof U1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",GD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))c[v]=w}if(e instanceof jc){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${lN}=${encodeURIComponent(p)}`:"";return`${uN(t)}?${Nc(d).slice(1)}${g}`}function uN({config:t}){return t.emulator?Ry(t,oN):`https://${t.authDomain}/${aN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="webStorageSupport";class cN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G1,this._completeRedirectFn=NM,this._overrideRedirectResult=kM}async _openPopup(e,n,i,a){var c;as((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await jw(e,n,i,Bg(),a);return iN(e,l,Oy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await jw(e,n,i,Bg(),a);return dM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(as(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ZM(e),i=new VM(e);return n.register("authEvent",a=>(ke(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fg,{type:fg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[fg];l!==void 0&&n(!!l),jr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N1()||C1()||Iy()}}const hN=cN;var Lw="@firebase/auth",Uw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pN(t){wl(new ro("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P1(t)},g=new DO(i,a,l,p);return qO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),wl(new ro("auth-internal",e=>{const n=uo(e.getProvider("auth").getImmediate());return(i=>new fN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Js(Lw,Uw,dN(t)),Js(Lw,Uw,"esm2020")}/**
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
 */const mN=300,gN=c1("authIdTokenMaxAge")||mN;let qw=null;const yN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>gN)return;const a=n==null?void 0:n.token;qw!==a&&(qw=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function _N(t=g1()){const e=xy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UO(t,{popupRedirectResolver:hN,persistence:[bM,cM,G1]}),i=c1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=yN(l.toString());aM(n,c,()=>c(n.currentUser)),sM(n,d=>c(d))}}const a=l1("auth");return a&&BO(n,`http://${a}`),n}function vN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}kO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=ci("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",vN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pN("Browser");var EN="firebase",wN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js(EN,wN,"app");var Bw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ea,J1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,A){function D(){}D.prototype=A.prototype,C.D=A.prototype,C.prototype=new D,C.prototype.constructor=C,C.C=function(j,O,q){for(var k=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)k[Pe-2]=arguments[Pe];return A.prototype[O].apply(j,k)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,A,D){D||(D=0);var j=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)j[O]=A.charCodeAt(D++)|A.charCodeAt(D++)<<8|A.charCodeAt(D++)<<16|A.charCodeAt(D++)<<24;else for(O=0;16>O;++O)j[O]=A[D++]|A[D++]<<8|A[D++]<<16|A[D++]<<24;A=C.g[0],D=C.g[1],O=C.g[2];var q=C.g[3],k=A+(q^D&(O^q))+j[0]+3614090360&4294967295;A=D+(k<<7&4294967295|k>>>25),k=q+(O^A&(D^O))+j[1]+3905402710&4294967295,q=A+(k<<12&4294967295|k>>>20),k=O+(D^q&(A^D))+j[2]+606105819&4294967295,O=q+(k<<17&4294967295|k>>>15),k=D+(A^O&(q^A))+j[3]+3250441966&4294967295,D=O+(k<<22&4294967295|k>>>10),k=A+(q^D&(O^q))+j[4]+4118548399&4294967295,A=D+(k<<7&4294967295|k>>>25),k=q+(O^A&(D^O))+j[5]+1200080426&4294967295,q=A+(k<<12&4294967295|k>>>20),k=O+(D^q&(A^D))+j[6]+2821735955&4294967295,O=q+(k<<17&4294967295|k>>>15),k=D+(A^O&(q^A))+j[7]+4249261313&4294967295,D=O+(k<<22&4294967295|k>>>10),k=A+(q^D&(O^q))+j[8]+1770035416&4294967295,A=D+(k<<7&4294967295|k>>>25),k=q+(O^A&(D^O))+j[9]+2336552879&4294967295,q=A+(k<<12&4294967295|k>>>20),k=O+(D^q&(A^D))+j[10]+4294925233&4294967295,O=q+(k<<17&4294967295|k>>>15),k=D+(A^O&(q^A))+j[11]+2304563134&4294967295,D=O+(k<<22&4294967295|k>>>10),k=A+(q^D&(O^q))+j[12]+1804603682&4294967295,A=D+(k<<7&4294967295|k>>>25),k=q+(O^A&(D^O))+j[13]+4254626195&4294967295,q=A+(k<<12&4294967295|k>>>20),k=O+(D^q&(A^D))+j[14]+2792965006&4294967295,O=q+(k<<17&4294967295|k>>>15),k=D+(A^O&(q^A))+j[15]+1236535329&4294967295,D=O+(k<<22&4294967295|k>>>10),k=A+(O^q&(D^O))+j[1]+4129170786&4294967295,A=D+(k<<5&4294967295|k>>>27),k=q+(D^O&(A^D))+j[6]+3225465664&4294967295,q=A+(k<<9&4294967295|k>>>23),k=O+(A^D&(q^A))+j[11]+643717713&4294967295,O=q+(k<<14&4294967295|k>>>18),k=D+(q^A&(O^q))+j[0]+3921069994&4294967295,D=O+(k<<20&4294967295|k>>>12),k=A+(O^q&(D^O))+j[5]+3593408605&4294967295,A=D+(k<<5&4294967295|k>>>27),k=q+(D^O&(A^D))+j[10]+38016083&4294967295,q=A+(k<<9&4294967295|k>>>23),k=O+(A^D&(q^A))+j[15]+3634488961&4294967295,O=q+(k<<14&4294967295|k>>>18),k=D+(q^A&(O^q))+j[4]+3889429448&4294967295,D=O+(k<<20&4294967295|k>>>12),k=A+(O^q&(D^O))+j[9]+568446438&4294967295,A=D+(k<<5&4294967295|k>>>27),k=q+(D^O&(A^D))+j[14]+3275163606&4294967295,q=A+(k<<9&4294967295|k>>>23),k=O+(A^D&(q^A))+j[3]+4107603335&4294967295,O=q+(k<<14&4294967295|k>>>18),k=D+(q^A&(O^q))+j[8]+1163531501&4294967295,D=O+(k<<20&4294967295|k>>>12),k=A+(O^q&(D^O))+j[13]+2850285829&4294967295,A=D+(k<<5&4294967295|k>>>27),k=q+(D^O&(A^D))+j[2]+4243563512&4294967295,q=A+(k<<9&4294967295|k>>>23),k=O+(A^D&(q^A))+j[7]+1735328473&4294967295,O=q+(k<<14&4294967295|k>>>18),k=D+(q^A&(O^q))+j[12]+2368359562&4294967295,D=O+(k<<20&4294967295|k>>>12),k=A+(D^O^q)+j[5]+4294588738&4294967295,A=D+(k<<4&4294967295|k>>>28),k=q+(A^D^O)+j[8]+2272392833&4294967295,q=A+(k<<11&4294967295|k>>>21),k=O+(q^A^D)+j[11]+1839030562&4294967295,O=q+(k<<16&4294967295|k>>>16),k=D+(O^q^A)+j[14]+4259657740&4294967295,D=O+(k<<23&4294967295|k>>>9),k=A+(D^O^q)+j[1]+2763975236&4294967295,A=D+(k<<4&4294967295|k>>>28),k=q+(A^D^O)+j[4]+1272893353&4294967295,q=A+(k<<11&4294967295|k>>>21),k=O+(q^A^D)+j[7]+4139469664&4294967295,O=q+(k<<16&4294967295|k>>>16),k=D+(O^q^A)+j[10]+3200236656&4294967295,D=O+(k<<23&4294967295|k>>>9),k=A+(D^O^q)+j[13]+681279174&4294967295,A=D+(k<<4&4294967295|k>>>28),k=q+(A^D^O)+j[0]+3936430074&4294967295,q=A+(k<<11&4294967295|k>>>21),k=O+(q^A^D)+j[3]+3572445317&4294967295,O=q+(k<<16&4294967295|k>>>16),k=D+(O^q^A)+j[6]+76029189&4294967295,D=O+(k<<23&4294967295|k>>>9),k=A+(D^O^q)+j[9]+3654602809&4294967295,A=D+(k<<4&4294967295|k>>>28),k=q+(A^D^O)+j[12]+3873151461&4294967295,q=A+(k<<11&4294967295|k>>>21),k=O+(q^A^D)+j[15]+530742520&4294967295,O=q+(k<<16&4294967295|k>>>16),k=D+(O^q^A)+j[2]+3299628645&4294967295,D=O+(k<<23&4294967295|k>>>9),k=A+(O^(D|~q))+j[0]+4096336452&4294967295,A=D+(k<<6&4294967295|k>>>26),k=q+(D^(A|~O))+j[7]+1126891415&4294967295,q=A+(k<<10&4294967295|k>>>22),k=O+(A^(q|~D))+j[14]+2878612391&4294967295,O=q+(k<<15&4294967295|k>>>17),k=D+(q^(O|~A))+j[5]+4237533241&4294967295,D=O+(k<<21&4294967295|k>>>11),k=A+(O^(D|~q))+j[12]+1700485571&4294967295,A=D+(k<<6&4294967295|k>>>26),k=q+(D^(A|~O))+j[3]+2399980690&4294967295,q=A+(k<<10&4294967295|k>>>22),k=O+(A^(q|~D))+j[10]+4293915773&4294967295,O=q+(k<<15&4294967295|k>>>17),k=D+(q^(O|~A))+j[1]+2240044497&4294967295,D=O+(k<<21&4294967295|k>>>11),k=A+(O^(D|~q))+j[8]+1873313359&4294967295,A=D+(k<<6&4294967295|k>>>26),k=q+(D^(A|~O))+j[15]+4264355552&4294967295,q=A+(k<<10&4294967295|k>>>22),k=O+(A^(q|~D))+j[6]+2734768916&4294967295,O=q+(k<<15&4294967295|k>>>17),k=D+(q^(O|~A))+j[13]+1309151649&4294967295,D=O+(k<<21&4294967295|k>>>11),k=A+(O^(D|~q))+j[4]+4149444226&4294967295,A=D+(k<<6&4294967295|k>>>26),k=q+(D^(A|~O))+j[11]+3174756917&4294967295,q=A+(k<<10&4294967295|k>>>22),k=O+(A^(q|~D))+j[2]+718787259&4294967295,O=q+(k<<15&4294967295|k>>>17),k=D+(q^(O|~A))+j[9]+3951481745&4294967295,C.g[0]=C.g[0]+A&4294967295,C.g[1]=C.g[1]+(O+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+q&4294967295}i.prototype.u=function(C,A){A===void 0&&(A=C.length);for(var D=A-this.blockSize,j=this.B,O=this.h,q=0;q<A;){if(O==0)for(;q<=D;)a(this,C,q),q+=this.blockSize;if(typeof C=="string"){for(;q<A;)if(j[O++]=C.charCodeAt(q++),O==this.blockSize){a(this,j),O=0;break}}else for(;q<A;)if(j[O++]=C[q++],O==this.blockSize){a(this,j),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var A=1;A<C.length-8;++A)C[A]=0;var D=8*this.o;for(A=C.length-8;A<C.length;++A)C[A]=D&255,D/=256;for(this.u(C),C=Array(16),A=D=0;4>A;++A)for(var j=0;32>j;j+=8)C[D++]=this.g[A]>>>j&255;return C};function l(C,A){var D=d;return Object.prototype.hasOwnProperty.call(D,C)?D[C]:D[C]=A(C)}function c(C,A){this.h=A;for(var D=[],j=!0,O=C.length-1;0<=O;O--){var q=C[O]|0;j&&q==A||(D[O]=q,j=!1)}this.g=D}var d={};function p(C){return-128<=C&&128>C?l(C,function(A){return new c([A|0],0>A?-1:0)}):new c([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(0>C)return M(g(-C));for(var A=[],D=1,j=0;C>=D;j++)A[j]=C/D|0,D*=4294967296;return new c(A,0)}function v(C,A){if(C.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C.charAt(0)=="-")return M(v(C.substring(1),A));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var D=g(Math.pow(A,8)),j=w,O=0;O<C.length;O+=8){var q=Math.min(8,C.length-O),k=parseInt(C.substring(O,O+q),A);8>q?(q=g(Math.pow(A,q)),j=j.j(q).add(g(k))):(j=j.j(D),j=j.add(g(k)))}return j}var w=p(0),T=p(1),I=p(16777216);t=c.prototype,t.m=function(){if(B(this))return-M(this).m();for(var C=0,A=1,D=0;D<this.g.length;D++){var j=this.i(D);C+=(0<=j?j:4294967296+j)*A,A*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N(this))return"0";if(B(this))return"-"+M(this).toString(C);for(var A=g(Math.pow(C,6)),D=this,j="";;){var O=Y(D,A).g;D=$(D,O.j(A));var q=((0<D.g.length?D.g[0]:D.h)>>>0).toString(C);if(D=O,N(D))return q+j;for(;6>q.length;)q="0"+q;j=q+j}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function N(C){if(C.h!=0)return!1;for(var A=0;A<C.g.length;A++)if(C.g[A]!=0)return!1;return!0}function B(C){return C.h==-1}t.l=function(C){return C=$(this,C),B(C)?-1:N(C)?0:1};function M(C){for(var A=C.g.length,D=[],j=0;j<A;j++)D[j]=~C.g[j];return new c(D,~C.h).add(T)}t.abs=function(){return B(this)?M(this):this},t.add=function(C){for(var A=Math.max(this.g.length,C.g.length),D=[],j=0,O=0;O<=A;O++){var q=j+(this.i(O)&65535)+(C.i(O)&65535),k=(q>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);j=k>>>16,q&=65535,k&=65535,D[O]=k<<16|q}return new c(D,D[D.length-1]&-2147483648?-1:0)};function $(C,A){return C.add(M(A))}t.j=function(C){if(N(this)||N(C))return w;if(B(this))return B(C)?M(this).j(M(C)):M(M(this).j(C));if(B(C))return M(this.j(M(C)));if(0>this.l(I)&&0>C.l(I))return g(this.m()*C.m());for(var A=this.g.length+C.g.length,D=[],j=0;j<2*A;j++)D[j]=0;for(j=0;j<this.g.length;j++)for(var O=0;O<C.g.length;O++){var q=this.i(j)>>>16,k=this.i(j)&65535,Pe=C.i(O)>>>16,le=C.i(O)&65535;D[2*j+2*O]+=k*le,P(D,2*j+2*O),D[2*j+2*O+1]+=q*le,P(D,2*j+2*O+1),D[2*j+2*O+1]+=k*Pe,P(D,2*j+2*O+1),D[2*j+2*O+2]+=q*Pe,P(D,2*j+2*O+2)}for(j=0;j<A;j++)D[j]=D[2*j+1]<<16|D[2*j];for(j=A;j<2*A;j++)D[j]=0;return new c(D,0)};function P(C,A){for(;(C[A]&65535)!=C[A];)C[A+1]+=C[A]>>>16,C[A]&=65535,A++}function R(C,A){this.g=C,this.h=A}function Y(C,A){if(N(A))throw Error("division by zero");if(N(C))return new R(w,w);if(B(C))return A=Y(M(C),A),new R(M(A.g),M(A.h));if(B(A))return A=Y(C,M(A)),new R(M(A.g),A.h);if(30<C.g.length){if(B(C)||B(A))throw Error("slowDivide_ only works with positive integers.");for(var D=T,j=A;0>=j.l(C);)D=z(D),j=z(j);var O=te(D,1),q=te(j,1);for(j=te(j,2),D=te(D,2);!N(j);){var k=q.add(j);0>=k.l(C)&&(O=O.add(D),q=k),j=te(j,1),D=te(D,1)}return A=$(C,O.j(A)),new R(O,A)}for(O=w;0<=C.l(A);){for(D=Math.max(1,Math.floor(C.m()/A.m())),j=Math.ceil(Math.log(D)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),q=g(D),k=q.j(A);B(k)||0<k.l(C);)D-=j,q=g(D),k=q.j(A);N(q)&&(q=T),O=O.add(q),C=$(C,k)}return new R(O,C)}t.A=function(C){return Y(this,C).h},t.and=function(C){for(var A=Math.max(this.g.length,C.g.length),D=[],j=0;j<A;j++)D[j]=this.i(j)&C.i(j);return new c(D,this.h&C.h)},t.or=function(C){for(var A=Math.max(this.g.length,C.g.length),D=[],j=0;j<A;j++)D[j]=this.i(j)|C.i(j);return new c(D,this.h|C.h)},t.xor=function(C){for(var A=Math.max(this.g.length,C.g.length),D=[],j=0;j<A;j++)D[j]=this.i(j)^C.i(j);return new c(D,this.h^C.h)};function z(C){for(var A=C.g.length+1,D=[],j=0;j<A;j++)D[j]=C.i(j)<<1|C.i(j-1)>>>31;return new c(D,C.h)}function te(C,A){var D=A>>5;A%=32;for(var j=C.g.length-D,O=[],q=0;q<j;q++)O[q]=0<A?C.i(q+D)>>>A|C.i(q+D+1)<<32-A:C.i(q+D);return new c(O,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,J1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,ea=c}).apply(typeof Bw<"u"?Bw:typeof self<"u"?self:typeof window<"u"?window:{});var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eS,tc,tS,Uf,Hg,nS,rS,iS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof vf=="object"&&vf];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var x=0;x<h.length-1;x++){var Q=h[x];if(!(Q in E))break e;E=E[Q]}h=h[h.length-1],x=E[h],y=y(x),y!=x&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,x=!1,Q={next:function(){if(!x&&E<h.length){var ee=E++;return{value:y(ee,h[ee]),done:!1}}return x=!0,{done:!0,value:void 0}}};return Q[Symbol.iterator]=function(){return Q},Q}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function w(h,y,E){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var Q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Q,x),h.apply(y,Q)}}return function(){return h.apply(y,arguments)}}function T(h,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function I(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var x=E.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function N(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(x,Q,ee){for(var pe=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)pe[Ke-2]=arguments[Ke];return y.prototype[Q].apply(x,pe)}}function B(h){const y=h.length;if(0<y){const E=Array(y);for(let x=0;x<y;x++)E[x]=h[x];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const x=arguments[E];if(p(x)){const Q=h.length||0,ee=x.length||0;h.length=Q+ee;for(let pe=0;pe<ee;pe++)h[Q+pe]=x[pe]}else h.push(x)}}class ${constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function P(h){return/^[\s\xa0]*$/.test(h)}function R(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Y(h){return Y[" "](h),h}Y[" "]=function(){};var z=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function te(h,y,E){for(const x in h)y.call(E,h[x],x,h)}function C(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function A(h){const y={};for(const E in h)y[E]=h[E];return y}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(h,y){let E,x;for(let Q=1;Q<arguments.length;Q++){x=arguments[Q];for(E in x)h[E]=x[E];for(let ee=0;ee<D.length;ee++)E=D[ee],Object.prototype.hasOwnProperty.call(x,E)&&(h[E]=x[E])}}function O(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function q(h){d.setTimeout(()=>{throw h},0)}function k(){var h=ye;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Pe{constructor(){this.h=this.g=null}add(y,E){const x=le.get();x.set(y,E),this.h?this.h.next=x:this.g=x,this.h=x}}var le=new $(()=>new W,h=>h.reset());class W{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,de=!1,ye=new Pe,L=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(re)}};var re=()=>{for(var h;h=k();){try{h.h.call(h.g)}catch(E){q(E)}var y=le;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}de=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function Me(h,y){if(he.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(z){e:{try{Y(y.nodeName);var Q=!0;break e}catch{}Q=!1}Q||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Te[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Me.aa.h.call(this)}}N(Me,he);var Te={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),ce=0;function be(h,y,E,x,Q){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!x,this.ha=Q,this.key=++ce,this.da=this.fa=!1}function ve(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Re(h){this.src=h,this.g={},this.h=0}Re.prototype.add=function(h,y,E,x,Q){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var pe=Sn(h,y,x,Q);return-1<pe?(y=h[pe],E||(y.fa=!1)):(y=new be(y,this.src,ee,!!x,Q),y.fa=E,h.push(y)),y};function qe(h,y){var E=y.type;if(E in h.g){var x=h.g[E],Q=Array.prototype.indexOf.call(x,y,void 0),ee;(ee=0<=Q)&&Array.prototype.splice.call(x,Q,1),ee&&(ve(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function Sn(h,y,E,x){for(var Q=0;Q<h.length;++Q){var ee=h[Q];if(!ee.da&&ee.listener==y&&ee.capture==!!E&&ee.ha==x)return Q}return-1}var mn="closure_lm_"+(1e6*Math.random()|0),ar={};function or(h,y,E,x,Q){if(Array.isArray(y)){for(var ee=0;ee<y.length;ee++)or(h,y[ee],E,x,Q);return null}return E=po(E),h&&h[gt]?h.K(y,E,g(x)?!!x.capture:!1,Q):en(h,y,E,!1,x,Q)}function en(h,y,E,x,Q,ee){if(!y)throw Error("Invalid event type");var pe=g(Q)?!!Q.capture:!!Q,Ke=qr(h);if(Ke||(h[mn]=Ke=new Re(h)),E=Ke.add(y,E,x,pe,ee),E.proxy)return E;if(x=Fl(),E.proxy=x,x.src=h,x.listener=E,h.addEventListener)Ee||(Q=pe),Q===void 0&&(Q=!1),h.addEventListener(y.toString(),x,Q);else if(h.attachEvent)h.attachEvent(vi(y.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fl(){function h(E){return y.call(h.src,h.listener,E)}const y=fo;return h}function pa(h,y,E,x,Q){if(Array.isArray(y))for(var ee=0;ee<y.length;ee++)pa(h,y[ee],E,x,Q);else x=g(x)?!!x.capture:!!x,E=po(E),h&&h[gt]?(h=h.i,y=String(y).toString(),y in h.g&&(ee=h.g[y],E=Sn(ee,E,x,Q),-1<E&&(ve(ee[E]),Array.prototype.splice.call(ee,E,1),ee.length==0&&(delete h.g[y],h.h--)))):h&&(h=qr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=Sn(y,E,x,Q)),(E=-1<h?y[h]:null)&&fs(E))}function fs(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[gt])qe(y.i,h);else{var E=h.type,x=h.proxy;y.removeEventListener?y.removeEventListener(E,x,h.capture):y.detachEvent?y.detachEvent(vi(E),x):y.addListener&&y.removeListener&&y.removeListener(x),(E=qr(y))?(qe(E,h),E.h==0&&(E.src=null,y[mn]=null)):ve(h)}}}function vi(h){return h in ar?ar[h]:ar[h]="on"+h}function fo(h,y){if(h.da)h=!0;else{y=new Me(y,this);var E=h.listener,x=h.ha||h.src;h.fa&&fs(h),h=E.call(x,y)}return h}function qr(h){return h=h[mn],h instanceof Re?h:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(h){return typeof h=="function"?h:(h[Ei]||(h[Ei]=function(y){return h.handleEvent(y)}),h[Ei])}function Tt(){fe.call(this),this.i=new Re(this),this.M=this,this.F=null}N(Tt,fe),Tt.prototype[gt]=!0,Tt.prototype.removeEventListener=function(h,y,E,x){pa(this,h,y,E,x)};function nt(h,y){var E,x=h.F;if(x)for(E=[];x;x=x.F)E.push(x);if(h=h.M,x=y.type||y,typeof y=="string")y=new he(y,h);else if(y instanceof he)y.target=y.target||h;else{var Q=y;y=new he(x,h),j(y,Q)}if(Q=!0,E)for(var ee=E.length-1;0<=ee;ee--){var pe=y.g=E[ee];Q=Pn(pe,x,!0,y)&&Q}if(pe=y.g=h,Q=Pn(pe,x,!0,y)&&Q,Q=Pn(pe,x,!1,y)&&Q,E)for(ee=0;ee<E.length;ee++)pe=y.g=E[ee],Q=Pn(pe,x,!1,y)&&Q}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],x=0;x<E.length;x++)ve(E[x]);delete h.g[y],h.h--}}this.F=null},Tt.prototype.K=function(h,y,E,x){return this.i.add(String(h),y,!1,E,x)},Tt.prototype.L=function(h,y,E,x){return this.i.add(String(h),y,!0,E,x)};function Pn(h,y,E,x){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var Q=!0,ee=0;ee<y.length;++ee){var pe=y[ee];if(pe&&!pe.da&&pe.capture==E){var Ke=pe.listener,Wt=pe.ha||pe.src;pe.fa&&qe(h.i,pe),Q=Ke.call(Wt,x)!==!1&&Q}}return Q&&!x.defaultPrevented}function tn(h,y,E){if(typeof h=="function")E&&(h=T(h,E));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function mo(h){h.g=tn(()=>{h.g=null,h.i&&(h.i=!1,mo(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class $l extends fe{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:mo(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(h){fe.call(this),this.h=h,this.g={}}N(wi,fe);var bi=[];function Ti(h){te(h.g,function(y,E){this.g.hasOwnProperty(E)&&fs(y)},h),h.g={}}wi.prototype.N=function(){wi.aa.N.call(this),Ti(this)},wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gn=d.JSON.stringify,Si=d.JSON.parse,xi=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ds(){}ds.prototype.h=null;function Le(h){return h.h||(h.h=h.i())}function it(){}var De={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){he.call(this,"d")}N(et,he);function nn(){he.call(this,"c")}N(nn,he);var Ue={},ma=null;function Br(){return ma=ma||new Tt}Ue.La="serverreachability";function ps(h){he.call(this,Ue.La,h)}N(ps,he);function lr(h){const y=Br();nt(y,new ps(y))}Ue.STAT_EVENT="statevent";function ms(h,y){he.call(this,Ue.STAT_EVENT,h),this.stat=y}N(ms,he);function St(h){const y=Br();nt(y,new ms(y,h))}Ue.Ma="timingevent";function Yt(h,y){he.call(this,Ue.Ma,h),this.size=y}N(Yt,he);function Lt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function Hl(h,y,E,x,Q,ee){h.info(function(){if(h.g)if(ee)for(var pe="",Ke=ee.split("&"),Wt=0;Wt<Ke.length;Wt++){var Xe=Ke[Wt].split("=");if(1<Xe.length){var sn=Xe[0];Xe=Xe[1];var Qt=sn.split("_");pe=2<=Qt.length&&Qt[1]=="type"?pe+(sn+"="+Xe+"&"):pe+(sn+"=redacted&")}}else pe=null;else pe=ee;return"XMLHTTP REQ ("+x+") [attempt "+Q+"]: "+y+`
`+E+`
`+pe})}function Xd(h,y,E,x,Q,ee,pe){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+Q+"]: "+y+`
`+E+`
`+ee+" "+pe})}function gs(h,y,E,x){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+ga(h,E)+(x?" "+x:"")})}function Wc(h,y){h.info(function(){return"TIMEOUT: "+y})}ur.prototype.info=function(){};function ga(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var x=E[h];if(!(2>x.length)){var Q=x[1];if(Array.isArray(Q)&&!(1>Q.length)){var ee=Q[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var pe=1;pe<Q.length;pe++)Q[pe]=""}}}}return Gn(E)}catch{return y}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zr;function Fr(){}N(Fr,ds),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},zr=new Fr;function Vn(h,y,E,x){this.j=h,this.i=y,this.l=E,this.R=x||1,this.U=new wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Gl={},go={};function Ar(h,y,E){h.L=1,h.v=wa(Yn(y)),h.m=E,h.P=!0,Ri(h,null)}function Ri(h,y){h.F=Date.now(),ya(h),h.A=Yn(h.v);var E=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Zl(E.i,"t",x),h.C=0,E=h.j.J,h.h=new Nt,h.g=ch(h.j,E?y:null,!h.m),0<h.O&&(h.M=new $l(T(h.Y,h,h.g),h.O)),y=h.U,E=h.g,x=h.ca;var Q="readystatechange";Array.isArray(Q)||(Q&&(bi[0]=Q.toString()),Q=bi);for(var ee=0;ee<Q.length;ee++){var pe=or(E,Q[ee],x||y.handleEvent,!1,y.h||y);if(!pe)break;y.g[pe.key]=pe}y=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),lr(),Hl(h.i,h.u,h.A,h.l,h.R,h.m)}Vn.prototype.ca=function(h){h=h.target;const y=this.M;y&&dr(h)==3?y.j():this.Y(h)},Vn.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=dr(this.g);var y=this.g.Ba();const Pi=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||nh(this.g)))){this.J||Qt!=4||y==7||(y==8||0>=Pi?lr(3):lr(2)),_s(this);var E=this.g.Z();this.X=E;t:if(Qc(this)){var x=nh(this.g);h="";var Q=x.length,ee=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),$r(this);var pe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<Q;y++)this.h.h=!0,h+=this.h.i.decode(x[y],{stream:!(ee&&y==Q-1)});x.length=0,this.h.g+=h,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=E==200,Xd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Wt=this.g;if((Ke=Wt.g?Wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ke)){var Xe=Ke;break t}}Xe=null}if(E=Xe)gs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,E);else{this.o=!1,this.s=3,St(12),gn(this),$r(this);break e}}if(this.P){E=!0;let yn;for(;!this.J&&this.C<pe.length;)if(yn=Kc(this,pe),yn==go){Qt==4&&(this.s=4,St(14),E=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Gl){this.s=4,St(15),gs(this.i,this.l,pe,"[Invalid Chunk]"),E=!1;break}else gs(this.i,this.l,yn,null),_a(this,yn);if(Qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||pe.length!=0||this.h.h||(this.s=1,St(16),E=!1),this.o=this.o&&E,!E)gs(this.i,this.l,pe,"[Invalid Chunked Response]"),gn(this),$r(this);else if(0<pe.length&&!this.W){this.W=!0;var sn=this.j;sn.g==this&&sn.ba&&!sn.M&&(sn.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Ia(sn),sn.M=!0,St(11))}}else gs(this.i,this.l,pe,null),_a(this,pe);Qt==4&&gn(this),this.o&&!this.J&&(Qt==4?oh(this.j,this):(this.o=!1,ya(this)))}else np(this.g),E==400&&0<pe.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),gn(this),$r(this)}}}catch{}finally{}};function Qc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Kc(h,y){var E=h.C,x=y.indexOf(`
`,E);return x==-1?go:(E=Number(y.substring(E,x)),isNaN(E)?Gl:(x+=1,x+E>y.length?go:(y=y.slice(x,x+E),h.C=x+E,y)))}Vn.prototype.cancel=function(){this.J=!0,gn(this)};function ya(h){h.S=Date.now()+h.I,Xc(h,h.I)}function Xc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(T(h.ba,h),y)}function _s(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Vn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Wc(this.i,this.A),this.L!=2&&(lr(),St(17)),gn(this),this.s=2,$r(this)):Xc(this,this.S-h)};function $r(h){h.j.G==0||h.J||oh(h.j,h)}function gn(h){_s(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Ti(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function _a(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Yl(E.h,h))){if(!h.K&&Yl(E.h,h)&&E.G==3){try{var x=E.Da.g.parse(y)}catch{x=null}if(Array.isArray(x)&&x.length==3){var Q=x;if(Q[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Co(E),Ao(E);else break e;ru(E),St(18)}}else E.za=Q[1],0<E.za-E.T&&37500>Q[2]&&E.F&&E.v==0&&!E.C&&(E.C=Lt(T(E.Za,E),6e3));if(1>=_o(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Ni(E,11)}else if((h.K||E.g==h)&&Co(E),!P(y))for(Q=E.Da.g.parse(y),y=0;y<Q.length;y++){let Xe=Q[y];if(E.T=Xe[0],Xe=Xe[1],E.G==2)if(Xe[0]=="c"){E.K=Xe[1],E.ia=Xe[2];const sn=Xe[3];sn!=null&&(E.la=sn,E.j.info("VER="+E.la));const Qt=Xe[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Pi=Xe[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(x=1.5*Pi,E.L=x,E.j.info("backChannelRequestTimeoutMs_="+x)),x=E;const yn=h.g;if(yn){const Xr=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var ee=x.h;ee.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(vo(ee,ee.h),ee.h=null))}if(x.D){const su=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(x.ya=su,ht(x.I,x.D,su))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),x=E;var pe=h;if(x.qa=uh(x,x.J?x.ia:null,x.W),pe.K){jn(x.h,pe);var Ke=pe,Wt=x.L;Wt&&(Ke.I=Wt),Ke.B&&(_s(Ke),ya(Ke)),x.g=pe}else sh(x);0<E.i.length&&Ro(E)}else Xe[0]!="stop"&&Xe[0]!="close"||Ni(E,7);else E.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Ni(E,7):tu(E):Xe[0]!="noop"&&E.l&&E.l.ta(Xe),E.v=0)}}lr(4)}catch{}}var Zc=class{constructor(h,y){this.g=h,this.map=y}};function Ci(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function _o(h){return h.h?1:h.g?h.g.size:0}function Yl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function vo(h,y){h.g?h.g.add(y):h.h=y}function jn(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Ci.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Wl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return B(h.i)}function Zd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,x=0;x<E;x++)y.push(h[x]);return y}y=[],E=0;for(x in h)y[E++]=h[x];return y}function Eo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const x in h)y[E++]=x;return y}}}function Ql(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=Eo(h),x=Zd(h),Q=x.length,ee=0;ee<Q;ee++)y.call(void 0,x[ee],E&&E[ee],h)}var va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jd(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var x=h[E].indexOf("="),Q=null;if(0<=x){var ee=h[E].substring(0,x);Q=h[E].substring(x+1)}else ee=h[E];y(ee,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Ut(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ut){this.h=h.h,Ea(this,h.j),this.o=h.o,this.g=h.g,vs(this,h.s),this.l=h.l;var y=h.i,E=new Di;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Ii(this,E),this.m=h.m}else h&&(y=String(h).match(va))?(this.h=!1,Ea(this,y[1]||"",!0),this.o=cr(y[2]||""),this.g=cr(y[3]||"",!0),vs(this,y[4]),this.l=cr(y[5]||"",!0),Ii(this,y[6]||"",!0),this.m=cr(y[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Ut.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ba(y,Kl,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ba(y,Kl,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ba(E,E.charAt(0)=="/"?ep:Xl,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ba(E,wo)),h.join("")};function Yn(h){return new Ut(h)}function Ea(h,y,E){h.j=E?cr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function vs(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Ii(h,y,E){y instanceof Di?(h.i=y,eh(h.i,h.h)):(E||(y=ba(y,tp)),h.i=new Di(y,h.h))}function ht(h,y,E){h.i.set(y,E)}function wa(h){return ht(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function cr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ba(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,Jc),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Jc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Kl=/[#\/\?@]/g,Xl=/[#\?:]/g,ep=/[#\?]/g,tp=/[#\?@]/g,wo=/#/g;function Di(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function hr(h){h.g||(h.g=new Map,h.h=0,h.i&&Jd(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}t=Di.prototype,t.add=function(h,y){hr(this),this.i=null,h=Hr(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function ki(h,y){hr(h),y=Hr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Oi(h,y){return hr(h),y=Hr(h,y),h.g.has(y)}t.forEach=function(h,y){hr(this),this.g.forEach(function(E,x){E.forEach(function(Q){h.call(y,Q,x,this)},this)},this)},t.na=function(){hr(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let x=0;x<y.length;x++){const Q=h[x];for(let ee=0;ee<Q.length;ee++)E.push(y[x])}return E},t.V=function(h){hr(this);let y=[];if(typeof h=="string")Oi(this,h)&&(y=y.concat(this.g.get(Hr(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},t.set=function(h,y){return hr(this),this.i=null,h=Hr(this,h),Oi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Zl(h,y,E){ki(h,y),0<E.length&&(h.i=null,h.g.set(Hr(h,y),B(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var x=y[E];const ee=encodeURIComponent(String(x)),pe=this.V(x);for(x=0;x<pe.length;x++){var Q=ee;pe[x]!==""&&(Q+="="+encodeURIComponent(String(pe[x]))),h.push(Q)}}return this.i=h.join("&")};function Hr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function eh(h,y){y&&!h.j&&(hr(h),h.i=null,h.g.forEach(function(E,x){var Q=x.toLowerCase();x!=Q&&(ki(this,x),Zl(this,Q,E))},h)),h.j=y}function Ta(h,y){const E=new ur;if(d.Image){const x=new Image;x.onload=I(fr,E,"TestLoadImage: loaded",!0,y,x),x.onerror=I(fr,E,"TestLoadImage: error",!1,y,x),x.onabort=I(fr,E,"TestLoadImage: abort",!1,y,x),x.ontimeout=I(fr,E,"TestLoadImage: timeout",!1,y,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else y(!1)}function Rr(h,y){const E=new ur,x=new AbortController,Q=setTimeout(()=>{x.abort(),fr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:x.signal}).then(ee=>{clearTimeout(Q),ee.ok?fr(E,"TestPingServer: ok",!0,y):fr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(Q),fr(E,"TestPingServer: error",!1,y)})}function fr(h,y,E,x,Q){try{Q&&(Q.onload=null,Q.onerror=null,Q.onabort=null,Q.ontimeout=null),x(E)}catch{}}function Sa(){this.g=new xi}function Gr(h,y,E){const x=E||"";try{Ql(h,function(Q,ee){let pe=Q;g(Q)&&(pe=Gn(Q)),y.push(x+ee+"="+encodeURIComponent(pe))})}catch(Q){throw y.push(x+"type="+encodeURIComponent("_badmap")),Q}}function Es(h){this.l=h.Ub||null,this.j=h.eb||!1}N(Es,ds),Es.prototype.g=function(){return new Mi(this.l,this.j)},Es.prototype.i=function(h){return function(){return h}}({});function Mi(h,y){Tt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Mi,Tt),t=Mi.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Wr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Yr(this):Wr(this),this.readyState==3&&Jl(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Yr(this))},t.Qa=function(h){this.g&&(this.response=h,Yr(this))},t.ga=function(){this.g&&Yr(this)};function Yr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Wr(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function Wr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function eu(h){let y="";return te(h,function(E,x){y+=x,y+=":",y+=E,y+=`\r
`}),y}function rn(h,y,E){e:{for(x in E){var x=!1;break e}x=!0}x||(E=eu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):ht(h,y,E))}function st(h){Tt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(st,Tt);var bo=/^https?$/i,xa=["POST","PUT"];t=st.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,E,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?Le(this.o):Le(zr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(ee){th(this,ee);return}if(h=E||"",E=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var Q in x)E.set(Q,x[Q]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const ee of x.keys())E.set(ee,x.get(ee));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(E.keys()).find(ee=>ee.toLowerCase()=="content-type"),Q=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(xa,y,void 0))||x||Q||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,pe]of E)this.g.setRequestHeader(ee,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Aa(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){th(this,ee)}};function th(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,To(h),Qr(h)}function To(h){h.A||(h.A=!0,nt(h,"complete"),nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nt(this,"complete"),nt(this,"abort"),Qr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),st.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?So(this):this.bb())},t.bb=function(){So(this)};function So(h){if(h.h&&typeof c<"u"&&(!h.v[1]||dr(h)!=4||h.Z()!=2)){if(h.u&&dr(h)==4)tn(h.Ea,0,h);else if(nt(h,"readystatechange"),dr(h)==4){h.h=!1;try{const pe=h.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var x;if(x=pe===0){var Q=String(h.D).match(va)[1]||null;!Q&&d.self&&d.self.location&&(Q=d.self.location.protocol.slice(0,-1)),x=!bo.test(Q?Q.toLowerCase():"")}E=x}if(E)nt(h,"complete"),nt(h,"success");else{h.m=6;try{var ee=2<dr(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",To(h)}}finally{Qr(h)}}}}function Qr(h,y){if(h.g){Aa(h);const E=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||nt(h,"ready");try{E.onreadystatechange=x}catch{}}}function Aa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function dr(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Si(y)}};function nh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function np(h){const y={};h=(h.g&&2<=dr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if(P(h[x]))continue;var E=O(h[x]);const Q=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const ee=y[Q]||[];y[Q]=ee,ee.push(E)}C(y,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ra(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function xo(h){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ra("baseRetryDelayMs",5e3,h),this.cb=Ra("retryDelaySeedMs",1e4,h),this.Wa=Ra("forwardChannelMaxRetries",2,h),this.wa=Ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(h&&h.concurrentRequestLimit),this.Da=new Sa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xo.prototype,t.la=8,t.G=1,t.connect=function(h,y,E,x){St(0),this.W=h,this.H=y||{},E&&x!==void 0&&(this.H.OSID=E,this.H.OAID=x),this.F=this.X,this.I=uh(this,null,this.W),Ro(this)};function tu(h){if(rh(h),h.G==3){var y=h.U++,E=Yn(h.I);if(ht(E,"SID",h.K),ht(E,"RID",y),ht(E,"TYPE","terminate"),Ca(h,E),y=new Vn(h,h.j,y),y.L=2,y.v=wa(Yn(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=ch(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ya(y)}lh(h)}function Ao(h){h.g&&(Ia(h),h.g.cancel(),h.g=null)}function rh(h){Ao(h),h.u&&(d.clearTimeout(h.u),h.u=null),Co(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ro(h){if(!yo(h.h)&&!h.s){h.s=!0;var y=h.Ga;ae||L(),de||(ae(),de=!0),ye.add(y,h),h.B=0}}function rp(h,y){return _o(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(T(h.Ga,h,y),iu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Q=new Vn(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=A(ee),j(ee,this.S)):ee=this.S),this.m!==null||this.O||(Q.H=ee,ee=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var x=this.i[E];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(y+=x,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=ih(this,Q,y),E=Yn(this.I),ht(E,"RID",h),ht(E,"CVER",22),this.D&&ht(E,"X-HTTP-Session-Id",this.D),Ca(this,E),ee&&(this.O?y="headers="+encodeURIComponent(String(eu(ee)))+"&"+y:this.m&&rn(E,this.m,ee)),vo(this.h,Q),this.Ua&&ht(E,"TYPE","init"),this.P?(ht(E,"$req",y),ht(E,"SID","null"),Q.T=!0,Ar(Q,E,null)):Ar(Q,E,y),this.G=2}}else this.G==3&&(h?nu(this,h):this.i.length==0||yo(this.h)||nu(this))};function nu(h,y){var E;y?E=y.l:E=h.U++;const x=Yn(h.I);ht(x,"SID",h.K),ht(x,"RID",E),ht(x,"AID",h.T),Ca(h,x),h.m&&h.o&&rn(x,h.m,h.o),E=new Vn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=ih(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vo(h.h,E),Ar(E,x,y)}function Ca(h,y){h.H&&te(h.H,function(E,x){ht(y,x,E)}),h.l&&Ql({},function(E,x){ht(y,x,E)})}function ih(h,y,E){E=Math.min(h.i.length,E);var x=h.l?T(h.l.Na,h.l,h):null;e:{var Q=h.i;let ee=-1;for(;;){const pe=["count="+E];ee==-1?0<E?(ee=Q[0].g,pe.push("ofs="+ee)):ee=0:pe.push("ofs="+ee);let Ke=!0;for(let Wt=0;Wt<E;Wt++){let Xe=Q[Wt].g;const sn=Q[Wt].map;if(Xe-=ee,0>Xe)ee=Math.max(0,Q[Wt].g-100),Ke=!1;else try{Gr(sn,pe,"req"+Xe+"_")}catch{x&&x(sn)}}if(Ke){x=pe.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,x}function sh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;ae||L(),de||(ae(),de=!0),ye.add(y,h),h.v=0}}function ru(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(T(h.Fa,h),iu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Ao(this),ah(this))};function Ia(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function ah(h){h.g=new Vn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Yn(h.qa);ht(y,"RID","rpc"),ht(y,"SID",h.K),ht(y,"AID",h.T),ht(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&ht(y,"TO",h.ja),ht(y,"TYPE","xmlhttp"),Ca(h,y),h.m&&h.o&&rn(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=wa(Yn(y)),E.m=null,E.P=!0,Ri(E,h)}t.Za=function(){this.C!=null&&(this.C=null,Ao(this),ru(this),St(19))};function Co(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function oh(h,y){var E=null;if(h.g==y){Co(h),Ia(h),h.g=null;var x=2}else if(Yl(h.h,y))E=y.D,jn(h.h,y),x=1;else return;if(h.G!=0){if(y.o)if(x==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var Q=h.B;x=Br(),nt(x,new Yt(x,E)),Ro(h)}else sh(h);else if(Q=y.s,Q==3||Q==0&&0<y.X||!(x==1&&rp(h,y)||x==2&&ru(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),Q){case 1:Ni(h,5);break;case 4:Ni(h,10);break;case 3:Ni(h,6);break;default:Ni(h,2)}}}function iu(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Ni(h,y){if(h.j.info("Error code "+y),y==2){var E=T(h.fb,h),x=h.Xa;const Q=!x;x=new Ut(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ea(x,"https"),wa(x),Q?Ta(x.toString(),E):Rr(x.toString(),E)}else St(2);h.G=0,h.l&&h.l.sa(y),lh(h),rh(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function lh(h){if(h.G=0,h.ka=[],h.l){const y=Wl(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function uh(h,y,E){var x=E instanceof Ut?Yn(E):new Ut(E);if(x.g!="")y&&(x.g=y+"."+x.g),vs(x,x.s);else{var Q=d.location;x=Q.protocol,y=y?y+"."+Q.hostname:Q.hostname,Q=+Q.port;var ee=new Ut(null);x&&Ea(ee,x),y&&(ee.g=y),Q&&vs(ee,Q),E&&(ee.l=E),x=ee}return E=h.D,y=h.ya,E&&y&&ht(x,E,y),ht(x,"VER",h.la),Ca(h,x),x}function ch(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new st(new Es({eb:E})):new st(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}t=hh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Io(){}Io.prototype.g=function(h,y){return new Ln(h,y)};function Ln(h,y){Tt.call(this),this.g=new xo(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!P(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!P(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Kr(this)}N(Ln,Tt),Ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ln.prototype.close=function(){tu(this.g)},Ln.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Gn(h),h=E);y.i.push(new Zc(y.Ya++,h)),y.G==3&&Ro(y)},Ln.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,Ln.aa.N.call(this)};function fh(h){et.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}N(fh,et);function dh(){nn.call(this),this.status=1}N(dh,nn);function Kr(h){this.g=h}N(Kr,hh),Kr.prototype.ua=function(){nt(this.g,"a")},Kr.prototype.ta=function(h){nt(this.g,new fh(h))},Kr.prototype.sa=function(h){nt(this.g,new dh)},Kr.prototype.ra=function(){nt(this.g,"b")},Io.prototype.createWebChannel=Io.prototype.g,Ln.prototype.send=Ln.prototype.o,Ln.prototype.open=Ln.prototype.m,Ln.prototype.close=Ln.prototype.close,iS=function(){return new Io},rS=function(){return Br()},nS=Ue,Hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,Uf=ys,Ai.COMPLETE="complete",tS=Ai,it.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,tc=it,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,eS=st}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});const zw="@firebase/firestore",Fw="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}On.UNAUTHENTICATED=new On(null),On.GOOGLE_CREDENTIALS=new On("google-credentials-uid"),On.FIRST_PARTY=new On("first-party-uid"),On.MOCK_USER=new On("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Ty("@firebase/firestore");function al(){return ao.logLevel}function _e(t,...e){if(ao.logLevel<=Ye.DEBUG){const n=e.map(Ny);ao.debug(`Firestore (${jl}): ${t}`,...n)}}function os(t,...e){if(ao.logLevel<=Ye.ERROR){const n=e.map(Ny);ao.error(`Firestore (${jl}): ${t}`,...n)}}function Tl(t,...e){if(ao.logLevel<=Ye.WARN){const n=e.map(Ny);ao.warn(`Firestore (${jl}): ${t}`,...n)}}function Ny(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Oe(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,sS(t,i,n)}function sS(t,e,n){let i=`FIRESTORE (${jl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw os(i),new Error(i)}function ot(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||sS(e,a,i)}function je(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends us{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(On.UNAUTHENTICATED))}shutdown(){}}class TN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=On.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ot(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new rs,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new rs)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ot(typeof i.accessToken=="string",31837,{l:i}),new aS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ot(e===null||typeof e=="string",2055,{h:e}),new On(e)}}class xN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=On.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new xN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(On.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $w{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ot(this.o===void 0,3512);const i=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $w(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ot(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $w(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=CN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function We(t,e){return t<e?-1:t>e?1:0}function Gg(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return dg(a)===dg(l)?We(a,l):dg(a)?1:-1}return We(t.length,e.length)}const IN=55296,DN=57343;function dg(t){const e=t.charCodeAt(0);return e>=IN&&e<=DN}function Sl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="__name__";class si{constructor(e,n,i){n===void 0?n=0:n>e.length&&Oe(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Oe(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=si.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const i=si.isNumericId(e),a=si.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?si.extractNumericId(e).compare(si.extractNumericId(n)):Gg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ea.fromString(e.substring(4,e.length-2))}}class Et extends si{construct(e,n,i){return new Et(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(se.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new Et(n)}static emptyPath(){return new Et([])}}const kN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bn extends si{construct(e,n,i){return new bn(e,n,i)}static isValidIdentifier(e){return kN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hw}static keyField(){return new bn([Hw])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ge(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bn(n)}static emptyPath(){return new bn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.path=e}static fromPath(e){return new Ae(Et.fromString(e))}static fromName(e){return new Ae(Et.fromString(e).popFirst(5))}static empty(){return new Ae(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ae(new Et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t,e,n){if(!n)throw new ge(se.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ON(t,e,n,i){if(e===!0&&i===!0)throw new ge(se.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gw(t){if(!Ae.isDocumentKey(t))throw new ge(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yw(t){if(Ae.isDocumentKey(t))throw new ge(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Cd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe(12329,{type:typeof t})}function sr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cd(t);throw new ge(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ht(t,e){const n={typeString:t};return e&&(n.value=e),n}function Uc(t,e){if(!lS(t))throw new ge(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ge(se.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=-62135596800,Qw=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Qw);return new _t(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ww)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qw}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Uc(e,_t._jsonSchema))return new _t(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ww;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Ht("string",_t._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new _t(0,0))}static max(){return new Ve(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ec=-1;function MN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Ve.fromTimestamp(i===1e9?new _t(n+1,0):new _t(n,i));return new na(a,Ae.empty(),e)}function NN(t){return new na(t.readTime,t.key,Ec)}class na{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new na(Ve.min(),Ae.empty(),Ec)}static max(){return new na(Ve.max(),Ae.empty(),Ec)}}function PN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ae.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){if(t.code!==se.FAILED_PRECONDITION||t.message!==VN)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ue((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ue?n:ue.resolve(n)}catch(n){return ue.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.reject(n)}static resolve(e){return new ue((n,i)=>{n(e)})}static reject(e){return new ue((n,i)=>{i(e)})}static waitFor(e){return new ue((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=ue.resolve(!1);for(const i of e)n=n.next(a=>a?ue.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new ue((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new ue((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function LN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Id{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Id.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=-1;function Dd(t){return t==null}function id(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!id(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="";function qN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kw(e)),e=BN(t.get(n),e);return Kw(e)}function BN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case uS:n+="";break;default:n+=l}}return n}function Kw(t){return t+uS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ha(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.comparator=e,this.root=n||wn.EMPTY}insert(e,n){return new Dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wn.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ef(this.root,e,this.comparator,!0)}}class Ef{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??wn.RED,this.left=a??wn.EMPTY,this.right=l??wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new wn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return wn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Oe(27949);return e+(this.isRed()?0:1)}}wn.EMPTY=null,wn.RED=!0,wn.BLACK=!1;wn.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe(57766)}get value(){throw Oe(16141)}get color(){throw Oe(16727)}get left(){throw Oe(29726)}get right(){throw Oe(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new wn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zw(this.data.getIterator())}getIteratorFrom(e){return new Zw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Zt(this.comparator);return n.data=e,n}}class Zw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.fields=e,e.sort(bn.comparator)}static empty(){return new ir([])}unionWith(e){let n=new Zt(bn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new ir(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class hS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new hS("Invalid base64 string: "+l):l}}(e);return new Tn(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tn.EMPTY_BYTE_STRING=new Tn("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ra(t){if(ot(!!t,39018),typeof t=="string"){let e=0;const n=zN.exec(t);if(ot(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:jt(t.seconds),nanos:jt(t.nanos)}}function jt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ia(t){return typeof t=="string"?Tn.fromBase64String(t):Tn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="server_timestamp",dS="__type__",pS="__previous_value__",mS="__local_write_time__";function jy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[dS])==null?void 0:i.stringValue)===fS}function kd(t){const e=t.mapValue.fields[pS];return jy(e)?kd(e):e}function wc(t){const e=ra(t.mapValue.fields[mS].timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const sd="(default)";class bc{constructor(e,n){this.projectId=e,this.database=n||sd}static empty(){return new bc("","")}get isDefaultDatabase(){return this.database===sd}isEqual(e){return e instanceof bc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="__type__",$N="__max__",wf={mapValue:{}},yS="__vector__",ad="value";function sa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jy(t)?4:GN(t)?9007199254740991:HN(t)?10:11:Oe(28295,{value:t})}function gi(t,e){if(t===e)return!0;const n=sa(t);if(n!==sa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wc(t).isEqual(wc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ra(a.timestampValue),d=ra(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return ia(a.bytesValue).isEqual(ia(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return jt(a.geoPointValue.latitude)===jt(l.geoPointValue.latitude)&&jt(a.geoPointValue.longitude)===jt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return jt(a.integerValue)===jt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=jt(a.doubleValue),d=jt(l.doubleValue);return c===d?id(c)===id(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Sl(t.arrayValue.values||[],e.arrayValue.values||[],gi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(Xw(c)!==Xw(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!gi(c[p],d[p])))return!1;return!0}(t,e);default:return Oe(52216,{left:t})}}function Tc(t,e){return(t.values||[]).find(n=>gi(n,e))!==void 0}function xl(t,e){if(t===e)return 0;const n=sa(t),i=sa(e);if(n!==i)return We(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=jt(l.integerValue||l.doubleValue),p=jt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return Jw(t.timestampValue,e.timestampValue);case 4:return Jw(wc(t),wc(e));case 5:return Gg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=ia(l),p=ia(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=We(d[g],p[g]);if(v!==0)return v}return We(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=We(jt(l.latitude),jt(c.latitude));return d!==0?d:We(jt(l.longitude),jt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return eb(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,I,N,B;const d=l.fields||{},p=c.fields||{},g=(T=d[ad])==null?void 0:T.arrayValue,v=(I=p[ad])==null?void 0:I.arrayValue,w=We(((N=g==null?void 0:g.values)==null?void 0:N.length)||0,((B=v==null?void 0:v.values)==null?void 0:B.length)||0);return w!==0?w:eb(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===wf.mapValue&&c===wf.mapValue)return 0;if(l===wf.mapValue)return 1;if(c===wf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const T=Gg(p[w],v[w]);if(T!==0)return T;const I=xl(d[p[w]],g[v[w]]);if(I!==0)return I}return We(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Oe(23264,{he:n})}}function Jw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=ra(t),i=ra(e),a=We(n.seconds,i.seconds);return a!==0?a:We(n.nanos,i.nanos)}function eb(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=xl(n[a],i[a]);if(l)return l}return We(n.length,i.length)}function Al(t){return Yg(t)}function Yg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=ra(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ia(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Yg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Yg(n.fields[c])}`;return a+"}"}(t.mapValue):Oe(61005,{value:t})}function qf(t){switch(sa(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kd(t);return e?16+qf(e):16;case 5:return 2*t.stringValue.length;case 6:return ia(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+qf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return ha(i.fields,(l,c)=>{a+=l.length+qf(c)}),a}(t.mapValue);default:throw Oe(13486,{value:t})}}function tb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wg(t){return!!t&&"integerValue"in t}function Ly(t){return!!t&&"arrayValue"in t}function nb(t){return!!t&&"nullValue"in t}function rb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bf(t){return!!t&&"mapValue"in t}function HN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gS])==null?void 0:i.stringValue)===yS}function uc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ha(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=uc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uc(t.arrayValue.values[n]);return e}return{...t}}function GN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$N}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.value=e}static empty(){return new $n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Bf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uc(n)}setAll(e){let n=bn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=uc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Bf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Bf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){ha(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new $n(uc(this.value))}}function _S(t){const e=[];return ha(t.fields,(n,i)=>{const a=new bn([n]);if(Bf(i)){const l=_S(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new ir(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Mn(e,0,Ve.min(),Ve.min(),Ve.min(),$n.empty(),0)}static newFoundDocument(e,n,i,a){return new Mn(e,1,n,Ve.min(),i,a,0)}static newNoDocument(e,n){return new Mn(e,2,n,Ve.min(),Ve.min(),$n.empty(),0)}static newUnknownDocument(e,n){return new Mn(e,3,n,Ve.min(),Ve.min(),$n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class od{constructor(e,n){this.position=e,this.inclusive=n}}function ib(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Ae.comparator(Ae.fromName(c.referenceValue),n.key):i=xl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function sb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function YN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vS{}class $t extends vS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QN(e,n,i):n==="array-contains"?new ZN(e,i):n==="in"?new JN(e,i):n==="not-in"?new e2(e,i):n==="array-contains-any"?new t2(e,i):new $t(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new KN(e,i):new XN(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xl(n,this.value)):n!==null&&sa(this.value)===sa(n)&&this.matchesComparison(xl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lr extends vS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Lr(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function wS(t){return WN(t)&&ES(t)}function WN(t){for(const e of t.filters)if(e instanceof Lr)return!1;return!0}function Qg(t){if(t instanceof $t)return t.field.canonicalString()+t.op.toString()+Al(t.value);if(wS(t))return t.filters.map(e=>Qg(e)).join(",");{const e=t.filters.map(n=>Qg(n)).join(",");return`${t.op}(${e})`}}function bS(t,e){return t instanceof $t?function(i,a){return a instanceof $t&&i.op===a.op&&i.field.isEqual(a.field)&&gi(i.value,a.value)}(t,e):t instanceof Lr?function(i,a){return a instanceof Lr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&bS(c,a.filters[d]),!0):!1}(t,e):void Oe(19439)}function TS(t){return t instanceof $t?function(n){return`${n.field.canonicalString()} ${n.op} ${Al(n.value)}`}(t):t instanceof Lr?function(n){return n.op.toString()+" {"+n.getFilters().map(TS).join(" ,")+"}"}(t):"Filter"}class QN extends $t{constructor(e,n,i){super(e,n,i),this.key=Ae.fromName(i.referenceValue)}matches(e){const n=Ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class KN extends $t{constructor(e,n){super(e,"in",n),this.keys=SS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XN extends $t{constructor(e,n){super(e,"not-in",n),this.keys=SS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Ae.fromName(i.referenceValue))}class ZN extends $t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ly(n)&&Tc(n.arrayValue,this.value)}}class JN extends $t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tc(this.value.arrayValue,n)}}class e2 extends $t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Tc(this.value.arrayValue,n)}}class t2 extends $t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ly(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Tc(this.value.arrayValue,i))}}/**
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
 */class n2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function ab(t,e=null,n=[],i=[],a=null,l=null,c=null){return new n2(t,e,n,i,a,l,c)}function Uy(t){const e=je(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Qg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Dd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Al(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Al(i)).join(",")),e.Te=n}return e.Te}function qy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sb(t.startAt,e.startAt)&&sb(t.endAt,e.endAt)}function Kg(t){return Ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function r2(t,e,n,i,a,l,c,d){return new ql(t,e,n,i,a,l,c,d)}function Od(t){return new ql(t)}function ob(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xS(t){return t.collectionGroup!==null}function cc(t){const e=je(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Zt(bn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Sc(l,i))}),n.has(bn.keyField().canonicalString())||e.Ie.push(new Sc(bn.keyField(),i))}return e.Ie}function fi(t){const e=je(t);return e.Ee||(e.Ee=i2(e,cc(t))),e.Ee}function i2(t,e){if(t.limitType==="F")return ab(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Sc(a.field,l)});const n=t.endAt?new od(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new od(t.startAt.position,t.startAt.inclusive):null;return ab(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Xg(t,e){const n=t.filters.concat([e]);return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zg(t,e,n){return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Md(t,e){return qy(fi(t),fi(e))&&t.limitType===e.limitType}function AS(t){return`${Uy(fi(t))}|lt:${t.limitType}`}function ol(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>TS(a)).join(", ")}]`),Dd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Al(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Al(a)).join(",")),`Target(${i})`}(fi(t))}; limitType=${t.limitType})`}function Nd(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ae.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of cc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=ib(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,cc(i),a)||i.endAt&&!function(c,d,p){const g=ib(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,cc(i),a))}(t,e)}function s2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RS(t){return(e,n)=>{let i=!1;for(const a of cc(t)){const l=a2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function a2(t,e,n){const i=t.field.isKeyField()?Ae.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?xl(p,g):Oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ha(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return cS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new Dt(Ae.comparator);function ls(){return o2}const CS=new Dt(Ae.comparator);function nc(...t){let e=CS;for(const n of t)e=e.insert(n.key,n);return e}function IS(t){let e=CS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Qa(){return hc()}function DS(){return hc()}function hc(){return new co(t=>t.toString(),(t,e)=>t.isEqual(e))}const l2=new Dt(Ae.comparator),u2=new Zt(Ae.comparator);function Qe(...t){let e=u2;for(const n of t)e=e.add(n);return e}const c2=new Zt(We);function h2(){return c2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:id(e)?"-0":e}}function kS(t){return{integerValue:""+t}}function f2(t,e){return UN(e)?kS(e):By(t,e)}/**
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
 */class Pd{constructor(){this._=void 0}}function d2(t,e,n){return t instanceof xc?function(a,l){const c={fields:{[dS]:{stringValue:fS},[mS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&jy(l)&&(l=kd(l)),l&&(c.fields[pS]=l),{mapValue:c}}(n,e):t instanceof Ac?MS(t,e):t instanceof Rc?NS(t,e):function(a,l){const c=OS(a,l),d=lb(c)+lb(a.Ae);return Wg(c)&&Wg(a.Ae)?kS(d):By(a.serializer,d)}(t,e)}function p2(t,e,n){return t instanceof Ac?MS(t,e):t instanceof Rc?NS(t,e):n}function OS(t,e){return t instanceof ld?function(i){return Wg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class xc extends Pd{}class Ac extends Pd{constructor(e){super(),this.elements=e}}function MS(t,e){const n=PS(e);for(const i of t.elements)n.some(a=>gi(a,i))||n.push(i);return{arrayValue:{values:n}}}class Rc extends Pd{constructor(e){super(),this.elements=e}}function NS(t,e){let n=PS(e);for(const i of t.elements)n=n.filter(a=>!gi(a,i));return{arrayValue:{values:n}}}class ld extends Pd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function lb(t){return jt(t.integerValue||t.doubleValue)}function PS(t){return Ly(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.field=e,this.transform=n}}function g2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof Ac&&a instanceof Ac||i instanceof Rc&&a instanceof Rc?Sl(i.elements,a.elements,gi):i instanceof ld&&a instanceof ld?gi(i.Ae,a.Ae):i instanceof xc&&a instanceof xc}(t.transform,e.transform)}class y2{constructor(e,n){this.version=e,this.transformResults=n}}class Pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vd{}function VS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LS(t.key,Pr.none()):new qc(t.key,t.data,Pr.none());{const n=t.data,i=$n.empty();let a=new Zt(bn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new fa(t.key,i,new ir(a.toArray()),Pr.none())}}function _2(t,e,n){t instanceof qc?function(a,l,c){const d=a.value.clone(),p=cb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof fa?function(a,l,c){if(!zf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=cb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(jS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function fc(t,e,n,i){return t instanceof qc?function(l,c,d,p){if(!zf(l.precondition,c))return d;const g=l.value.clone(),v=hb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof fa?function(l,c,d,p){if(!zf(l.precondition,c))return d;const g=hb(l.fieldTransforms,p,c),v=c.data;return v.setAll(jS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(w=>w.field))}(t,e,n,i):function(l,c,d){return zf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function v2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=OS(i.transform,a||null);l!=null&&(n===null&&(n=$n.empty()),n.set(i.field,l))}return n||null}function ub(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Sl(i,a,(l,c)=>g2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qc extends Vd{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class fa extends Vd{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function cb(t,e,n){const i=new Map;ot(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,p2(c,d,n[a]))}return i}function hb(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,d2(l,c,e))}return i}class LS extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E2 extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&_2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=DS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=VS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&Sl(this.mutations,e.mutations,(n,i)=>ub(n,i))&&Sl(this.baseMutations,e.baseMutations,(n,i)=>ub(n,i))}}class zy{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){ot(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return l2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new zy(e,n,i,a)}}/**
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
 */class b2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class T2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,Je;function S2(t){switch(t){case se.OK:return Oe(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Oe(15467,{code:t})}}function US(t){if(t===void 0)return os("GRPC error has no .code"),se.UNKNOWN;switch(t){case zt.OK:return se.OK;case zt.CANCELLED:return se.CANCELLED;case zt.UNKNOWN:return se.UNKNOWN;case zt.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case zt.INTERNAL:return se.INTERNAL;case zt.UNAVAILABLE:return se.UNAVAILABLE;case zt.UNAUTHENTICATED:return se.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case zt.NOT_FOUND:return se.NOT_FOUND;case zt.ALREADY_EXISTS:return se.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return se.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case zt.ABORTED:return se.ABORTED;case zt.OUT_OF_RANGE:return se.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return se.UNIMPLEMENTED;case zt.DATA_LOSS:return se.DATA_LOSS;default:return Oe(39323,{code:t})}}(Je=zt||(zt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function x2(){return new TextEncoder}/**
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
 */const A2=new ea([4294967295,4294967295],0);function fb(t){const e=x2().encode(t),n=new J1;return n.update(e),new Uint8Array(n.digest())}function db(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ea([n,i],0),new ea([a,l],0)]}class Fy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new rc(`Invalid padding: ${n}`);if(i<0)throw new rc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new rc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ea.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(ea.fromNumber(i)));return a.compare(A2)===1&&(a=new ea([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fb(e),[i,a]=db(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Fy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=fb(e),[i,a]=db(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class rc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Bc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new jd(Ve.min(),a,new Dt(We),ls(),Qe())}}class Bc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Bc(i,n,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class qS{constructor(e,n){this.targetId=e,this.Ce=n}}class BS{constructor(e,n,i=Tn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class pb{constructor(){this.ve=0,this.Fe=mb(),this.Me=Tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),n=Qe(),i=Qe();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Oe(38017,{changeType:l})}}),new Bc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=mb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ot(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class R2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ls(),this.Je=bf(),this.He=bf(),this.Ye=new Dt(We)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(Kg(l))if(i===0){const c=new Ae(l.path);this.et(n,c,Mn.newNoDocument(c,Ve.min()))}else ot(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=ia(i).toUint8Array()}catch(p){if(p instanceof hS)return Tl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Fy(c,a,l)}catch(p){return Tl(p instanceof rc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Kg(d.target)){const p=new Ae(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Mn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Qe();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new jd(e,n,this.Ye,this.je,i);return this.je=ls(),this.Je=bf(),this.He=bf(),this.Ye=new Dt(We),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new pb,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Zt(We),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Zt(We),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bf(){return new Dt(Ae.comparator)}function mb(){return new Dt(Ae.comparator)}const C2={asc:"ASCENDING",desc:"DESCENDING"},I2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D2={and:"AND",or:"OR"};class k2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jg(t,e){return t.useProto3Json||Dd(e)?e:{value:e}}function ud(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function O2(t,e){return ud(t,e.toTimestamp())}function di(t){return ot(!!t,49232),Ve.fromTimestamp(function(n){const i=ra(n);return new _t(i.seconds,i.nanos)}(t))}function $y(t,e){return ey(t,e).canonicalString()}function ey(t,e){const n=function(a){return new Et(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FS(t){const e=Et.fromString(t);return ot(WS(e),10190,{key:e.toString()}),e}function ty(t,e){return $y(t.databaseId,e.path)}function pg(t,e){const n=FS(e);if(n.get(1)!==t.databaseId.projectId)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ae(HS(n))}function $S(t,e){return $y(t.databaseId,e)}function M2(t){const e=FS(t);return e.length===4?Et.emptyPath():HS(e)}function ny(t){return new Et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HS(t){return ot(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gb(t,e,n){return{name:ty(t,e),fields:n.value.mapValue.fields}}function N2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Oe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(ot(v===void 0||typeof v=="string",58123),Tn.fromBase64String(v||"")):(ot(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Tn.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?se.UNKNOWN:US(g.code);return new ge(v,g.message||"")}(c);n=new BS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=pg(t,i.document.name),l=di(i.document.updateTime),c=i.document.createTime?di(i.document.createTime):Ve.min(),d=new $n({mapValue:{fields:i.document.fields}}),p=Mn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Ff(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=pg(t,i.document),l=i.readTime?di(i.readTime):Ve.min(),c=Mn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Ff([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=pg(t,i.document),l=i.removedTargetIds||[];n=new Ff([],l,a,null)}else{if(!("filter"in e))return Oe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new T2(a,l),d=i.targetId;n=new qS(d,c)}}return n}function P2(t,e){let n;if(e instanceof qc)n={update:gb(t,e.key,e.value)};else if(e instanceof LS)n={delete:ty(t,e.key)};else if(e instanceof fa)n={update:gb(t,e.key,e.data),updateMask:$2(e.fieldMask)};else{if(!(e instanceof E2))return Oe(16599,{Vt:e.type});n={verify:ty(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof xc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ac)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ld)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Oe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:O2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Oe(27497)}(t,e.precondition)),n}function V2(t,e){return t&&t.length>0?(ot(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?di(a.updateTime):di(l);return c.isEqual(Ve.min())&&(c=di(l)),new y2(c,a.transformResults||[])}(n,e))):[]}function j2(t,e){return{documents:[$S(t,e.path)]}}function L2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=$S(t,a);const l=function(g){if(g.length!==0)return YS(Lr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:ll(T.field),direction:B2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=Jg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function U2(t){let e=M2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){ot(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(w){const T=GS(w);return T instanceof Lr&&wS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(w){return w.map(T=>function(N){return new Sc(ul(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(w){let T;return T=typeof w=="object"?w.value:w,Dd(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(w){const T=!!w.before,I=w.values||[];return new od(I,T)}(n.startAt));let g=null;return n.endAt&&(g=function(w){const T=!w.before,I=w.values||[];return new od(I,T)}(n.endAt)),r2(e,a,c,l,d,"F",p,g)}function q2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ul(n.unaryFilter.field);return $t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=ul(n.unaryFilter.field);return $t.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ul(n.unaryFilter.field);return $t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ul(n.unaryFilter.field);return $t.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Oe(61313);default:return Oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return $t.create(ul(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Oe(58110);default:return Oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Lr.create(n.compositeFilter.filters.map(i=>GS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Oe(1026)}}(n.compositeFilter.op))}(t):Oe(30097,{filter:t})}function B2(t){return C2[t]}function z2(t){return I2[t]}function F2(t){return D2[t]}function ll(t){return{fieldPath:t.canonicalString()}}function ul(t){return bn.fromServerFormat(t.fieldPath)}function YS(t){return t instanceof $t?function(n){if(n.op==="=="){if(rb(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NAN"}};if(nb(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rb(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NOT_NAN"}};if(nb(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ll(n.field),op:z2(n.op),value:n.value}}}(t):t instanceof Lr?function(n){const i=n.getFilters().map(a=>YS(a));return i.length===1?i[0]:{compositeFilter:{op:F2(n.op),filters:i}}}(t):Oe(54877,{filter:t})}function $2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,i,a,l=Ve.min(),c=Ve.min(),d=Tn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Qs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.yt=e}}function G2(t){const e=U2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zg(e,e.limit,"L"):e}/**
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
 */class Y2{constructor(){this.Cn=new W2}addToCollectionParentIndex(e,n){return this.Cn.add(n),ue.resolve()}getCollectionParents(e,n){return ue.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ue.resolve()}deleteFieldIndex(e,n){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,n){return ue.resolve()}getDocumentsMatchingTarget(e,n){return ue.resolve(null)}getIndexType(e,n){return ue.resolve(0)}getFieldIndexes(e,n){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,n){return ue.resolve(na.min())}getMinOffsetFromCollectionGroup(e,n){return ue.resolve(na.min())}updateCollectionGroup(e,n,i){return ue.resolve()}updateIndexEntries(e,n){return ue.resolve()}}class W2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new Zt(Et.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Zt(Et.comparator)).toArray()}}/**
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
 */const yb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},QS=41943040;class Fn{static withCacheSize(e){return new Fn(e,Fn.DEFAULT_COLLECTION_PERCENTILE,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.DEFAULT_COLLECTION_PERCENTILE=10,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fn.DEFAULT=new Fn(QS,Fn.DEFAULT_COLLECTION_PERCENTILE,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fn.DISABLED=new Fn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Rl(0)}static cr(){return new Rl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="LruGarbageCollector",Q2=1048576;function vb([t,e],[n,i]){const a=We(t,n);return a===0?We(e,i):a}class K2{constructor(e){this.Ir=e,this.buffer=new Zt(vb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();vb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class X2{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(_b,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ul(n)?_e(_b,"Ignoring IndexedDB error during garbage collection: ",n):await Ll(n)}await this.Vr(3e5)})}}class Z2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return ue.resolve(Id.ce);const i=new K2(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(yb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yb):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),a=this.params.maximumSequenceNumbersToCollect):a=w,c=Date.now(),this.nthSequenceNumber(e,a))).next(w=>(i=w,d=Date.now(),this.removeTargets(e,i,n))).next(w=>(l=w,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(w=>(g=Date.now(),al()<=Ye.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:w})))}}function J2(t,e){return new Z2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.changes=new co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ue.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&fc(i.mutation,a,ir.empty(),_t.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Qe()){const a=Qa();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=nc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Qa();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Qe()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=ls();const c=hc(),d=function(){return hc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof fa)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),fc(v.mutation,g,v.mutation.getFieldMask(),_t.now())):c.set(g.key,ir.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new tP(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=hc();let a=new Dt((c,d)=>c-d),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||ir.empty();v=d.applyToLocalView(g,v),i.set(p,v);const w=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,w)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,w=DS();v.forEach(T=>{if(!l.has(T)){const I=VS(n.get(T),i.get(T));I!==null&&w.set(T,I),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,w))}return ue.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):ue.resolve(Qa());let d=Ec,p=l;return c.next(g=>ue.forEach(g,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),l.get(v)?ue.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Qe())).next(v=>({batchId:d,changes:IS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ae(n)).next(i=>{let a=nc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=nc();return this.indexManager.getCollectionParents(e,l).next(d=>ue.forEach(d,p=>{const g=function(w,T){return new ql(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((w,T)=>{c=c.insert(w,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Mn.newInvalidDocument(v)))});let d=nc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&fc(v.mutation,g,ir.empty(),_t.now()),Nd(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ue.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:di(a.createTime)}}(n)),ue.resolve()}getNamedQuery(e,n){return ue.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:G2(a.bundledQuery),readTime:di(a.readTime)}}(n)),ue.resolve()}}/**
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
 */class iP{constructor(){this.overlays=new Dt(Ae.comparator),this.qr=new Map}getOverlay(e,n){return ue.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Qa();return ue.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),ue.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),ue.resolve()}getOverlaysForCollection(e,n,i){const a=Qa(),l=n.length+1,c=new Ae(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ue.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new Dt((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Qa(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Qa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return ue.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new b2(n,i));let l=this.qr.get(n);l===void 0&&(l=Qe(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class sP{constructor(){this.sessionToken=Tn.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ue.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Qr=new Zt(fn.$r),this.Ur=new Zt(fn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new fn(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new fn(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Ae(new Et([])),i=new fn(n,e),a=new fn(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Ae(new Et([])),i=new fn(n,e),a=new fn(n,e+1);let l=Qe();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new fn(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class fn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Ae.comparator(e.key,n.key)||We(e.Yr,n.Yr)}static Kr(e,n){return We(e.Yr,n.Yr)||Ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Zt(fn.$r)}checkEmpty(e){return ue.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new w2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new fn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ue.resolve(c)}lookupMutationBatch(e,n){return ue.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return ue.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(this.mutationQueue.length===0?Vy:this.tr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new fn(n,0),a=new fn(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),ue.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Zt(We);return n.forEach(a=>{const l=new fn(a,0),c=new fn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),ue.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Ae.isDocumentKey(l)||(l=l.child(""));const c=new fn(new Ae(l),0);let d=new Zt(We);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),ue.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){ot(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return ue.forEach(n.mutations,a=>{const l=new fn(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new fn(n,0),a=this.Zr.firstAfterOrEqual(i);return ue.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.ri=e,this.docs=function(){return new Dt(Ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ue.resolve(i?i.document.mutableCopy():Mn.newInvalidDocument(n))}getEntries(e,n){let i=ls();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Mn.newInvalidDocument(a))}),ue.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=ls();const c=n.path,d=new Ae(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||PN(NN(v),i)<=0||(a.has(v.key)||Nd(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ue.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Oe(9500)}ii(e,n){return ue.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new lP(this)}getSize(e){return ue.resolve(this.size)}}class lP extends eP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),ue.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.persistence=e,this.si=new co(n=>Uy(n),qy),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Hy,this.targetCount=0,this.ai=Rl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),ue.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Rl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ue.resolve()}updateTargetData(e,n){return this.Pr(n),ue.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ue.waitFor(l).next(()=>a)}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return ue.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),ue.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ue.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ue.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return ue.resolve(i)}containsKey(e,n){return ue.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Id(0),this.li=!1,this.li=!0,this.hi=new sP,this.referenceDelegate=e(this),this.Pi=new uP(this),this.indexManager=new Y2,this.remoteDocumentCache=function(a){return new oP(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new H2(n),this.Ii=new rP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new aP(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){_e("MemoryPersistence","Starting transaction:",e);const a=new cP(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return ue.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class cP extends jN{constructor(e){super(),this.currentSequenceNumber=e}}class Gy{constructor(e){this.persistence=e,this.Ri=new Hy,this.Vi=null}static mi(e){return new Gy(e)}get fi(){if(this.Vi)return this.Vi;throw Oe(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),ue.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),ue.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ue.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.fi,i=>{const a=Ae.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ue.or([()=>ue.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class cd{constructor(e,n){this.persistence=e,this.pi=new co(i=>qN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=J2(this,n)}static mi(e,n){return new cd(e,n)}Ei(){}di(e){return ue.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return ue.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?ue.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Ve.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qf(e.data.value)),n}br(e,n,i){return ue.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return ue.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=Qe(),a=Qe();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Yy(e,n.fromCache,i,a)}}/**
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
 */class hP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return qD()?8:LN(Nn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new hP;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(al()<=Ye.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",ol(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ue.resolve()):(al()<=Ye.DEBUG&&_e("QueryEngine","Query:",ol(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(al()<=Ye.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",ol(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fi(n))):ue.resolve())}ys(e,n){if(ob(n))return ue.resolve(null);let i=fi(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Zg(n,null,"F"),i=fi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,Zg(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return ob(n)||a.isEqual(Ve.min())?ue.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?ue.resolve(null):(al()<=Ye.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ol(n)),this.vs(e,c,n,MN(a,Ec)).next(d=>d))})}Ds(e,n){let i=new Zt(RS(e));return n.forEach((a,l)=>{Nd(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return al()<=Ye.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",ol(n)),this.ps.getDocumentsMatchingQuery(e,n,na.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LocalStore",dP=3e8;class pP{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Dt(We),this.xs=new co(l=>Uy(l),qy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function mP(t,e,n,i){return new pP(t,e,n,i)}async function XS(t,e){const n=je(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function gP(t,e){const n=je(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const w=g.batch,T=w.keys();let I=ue.resolve();return T.forEach(N=>{I=I.next(()=>v.getEntry(p,N)).next(B=>{const M=g.docVersions.get(N);ot(M!==null,48541),B.version.compareTo(M)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function ZS(t){const e=je(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function yP(t,e){const n=je(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,w)=>{const T=a.get(w);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,w).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,w)));let I=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?I=I.withResumeToken(Tn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):v.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(v.resumeToken,i)),a=a.insert(w,I),function(B,M,$){return B.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=dP?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,I,v)&&d.push(n.Pi.updateTargetData(l,I))});let p=ls(),g=Qe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(_P(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Ve.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(w=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return ue.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function _P(t,e,n){let i=Qe(),a=Qe();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=ls();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):_e(Wy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function vP(t,e){const n=je(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Vy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function EP(t,e){const n=je(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,ue.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Qs(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function ry(t,e,n){const i=je(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ul(c))throw c;_e(Wy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Eb(t,e,n){const i=je(t);let a=Ve.min(),l=Qe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const w=je(p),T=w.xs.get(v);return T!==void 0?ue.resolve(w.Ms.get(T)):w.Pi.getTargetData(g,v)}(i,c,fi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Ve.min(),n?l:Qe())).next(d=>(wP(i,s2(e),d),{documents:d,Qs:l})))}function wP(t,e,n){let i=t.Os.get(e)||Ve.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class wb{constructor(){this.activeTargetIds=h2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bP{constructor(){this.Mo=new wb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TP{Oo(e){}shutdown(){}}/**
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
 */const bb="ConnectivityMonitor";class Tb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(bb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(bb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tf=null;function iy(){return Tf===null?Tf=function(){return 268435456+Math.round(2147483648*Math.random())}():Tf++,"0x"+Tf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="RestConnection",SP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===sd?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=iy(),d=this.zo(e,n.toUriEncodedString());_e(mg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Nl(g);return this.Jo(e,d,p,i,v).then(w=>(_e(mg,`Received RPC '${e}' ${c}: `,w),w),w=>{throw Tl(mg,`RPC '${e}' ${c} failed with error: `,w,"url: ",d,"request:",i),w})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=SP[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="WebChannelConnection";class RP extends xP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=iy();return new Promise((d,p)=>{const g=new eS;g.setWithCredentials(!0),g.listenOnce(tS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Uf.NO_ERROR:const w=g.getResponseJson();_e(Rn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),d(w);break;case Uf.TIMEOUT:_e(Rn,`RPC '${e}' ${c} timed out`),p(new ge(se.DEADLINE_EXCEEDED,"Request time out"));break;case Uf.HTTP_ERROR:const T=g.getStatus();if(_e(Rn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const B=function($){const P=$.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(P)>=0?P:se.UNKNOWN}(N.status);p(new ge(B,N.message))}else p(new ge(se.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(se.UNAVAILABLE,"Connection failed."));break;default:Oe(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{_e(Rn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);_e(Rn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=iy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=iS(),d=rS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");_e(Rn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const w=c.createWebChannel(v,p);this.I_(w);let T=!1,I=!1;const N=new AP({Yo:M=>{I?_e(Rn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(T||(_e(Rn,`Opening RPC '${e}' stream ${a} transport.`),w.open(),T=!0),_e(Rn,`RPC '${e}' stream ${a} sending:`,M),w.send(M))},Zo:()=>w.close()}),B=(M,$,P)=>{M.listen($,R=>{try{P(R)}catch(Y){setTimeout(()=>{throw Y},0)}})};return B(w,tc.EventType.OPEN,()=>{I||(_e(Rn,`RPC '${e}' stream ${a} transport opened.`),N.o_())}),B(w,tc.EventType.CLOSE,()=>{I||(I=!0,_e(Rn,`RPC '${e}' stream ${a} transport closed`),N.a_(),this.E_(w))}),B(w,tc.EventType.ERROR,M=>{I||(I=!0,Tl(Rn,`RPC '${e}' stream ${a} transport errored. Name:`,M.name,"Message:",M.message),N.a_(new ge(se.UNAVAILABLE,"The operation could not be completed")))}),B(w,tc.EventType.MESSAGE,M=>{var $;if(!I){const P=M.data[0];ot(!!P,16349);const R=P,Y=(R==null?void 0:R.error)||(($=R[0])==null?void 0:$.error);if(Y){_e(Rn,`RPC '${e}' stream ${a} received error:`,Y);const z=Y.status;let te=function(D){const j=zt[D];if(j!==void 0)return US(j)}(z),C=Y.message;te===void 0&&(te=se.INTERNAL,C="Unknown error status: "+z+" with message "+Y.message),I=!0,N.a_(new ge(te,C)),w.close()}else _e(Rn,`RPC '${e}' stream ${a} received:`,P),N.u_(P)}}),B(d,nS.STAT_EVENT,M=>{M.stat===Hg.PROXY?_e(Rn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===Hg.NOPROXY&&_e(Rn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function gg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){return new k2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="PersistentStream";class ex{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new JS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(os(n.toString()),os("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ge(se.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return _e(Sb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(_e(Sb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CP extends ex{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=N2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ve.min():c.readTime?di(c.readTime):Ve.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=ny(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Kg(p)?{documents:j2(l,p)}:{query:L2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=zS(l,c.resumeToken);const g=Jg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ve.min())>0){d.readTime=ud(l,c.snapshotVersion.toTimestamp());const g=Jg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=q2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=ny(this.serializer),n.removeTarget=e,this.q_(n)}}class IP extends ex{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ot(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ot(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ot(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=V2(e.writeResults,e.commitTime),i=di(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=ny(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>P2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{}class kP extends DP{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,ey(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(se.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,ey(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(se.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class OP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(os(n),this.aa=!1):_e("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="RemoteStore";class MP{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{ho(this)&&(_e(oo,"Restarting streams for network reachability change."),await async function(p){const g=je(p);g.Ea.add(4),await zc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ud(g)}(this))})}),this.Ra=new OP(i,a)}}async function Ud(t){if(ho(t))for(const e of t.da)await e(!0)}async function zc(t){for(const e of t.da)await e(!1)}function tx(t,e){const n=je(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zy(n)?Xy(n):Bl(n).O_()&&Ky(n,e))}function Qy(t,e){const n=je(t),i=Bl(n);n.Ia.delete(e),i.O_()&&nx(n,e),n.Ia.size===0&&(i.O_()?i.L_():ho(n)&&n.Ra.set("Unknown"))}function Ky(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bl(t).Y_(e)}function nx(t,e){t.Va.Ue(e),Bl(t).Z_(e)}function Xy(t){t.Va=new R2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Bl(t).start(),t.Ra.ua()}function Zy(t){return ho(t)&&!Bl(t).x_()&&t.Ia.size>0}function ho(t){return je(t).Ea.size===0}function rx(t){t.Va=void 0}async function NP(t){t.Ra.set("Online")}async function PP(t){t.Ia.forEach((e,n)=>{Ky(t,e)})}async function VP(t,e){rx(t),Zy(t)?(t.Ra.ha(e),Xy(t)):t.Ra.set("Unknown")}async function jP(t,e,n){if(t.Ra.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){_e(oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await hd(t,i)}else if(e instanceof Ff?t.Va.Ze(e):e instanceof qS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ve.min()))try{const i=await ZS(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Tn.EMPTY_BYTE_STRING,v.snapshotVersion)),nx(l,p);const w=new Qs(v.target,p,g,v.sequenceNumber);Ky(l,w)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){_e(oo,"Failed to raise snapshot:",i),await hd(t,i)}}async function hd(t,e,n){if(!Ul(e))throw e;t.Ea.add(1),await zc(t),t.Ra.set("Offline"),n||(n=()=>ZS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e(oo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ud(t)})}function ix(t,e){return e().catch(n=>hd(t,n,e))}async function qd(t){const e=je(t),n=aa(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vy;for(;LP(e);)try{const a=await vP(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,UP(e,a)}catch(a){await hd(e,a)}sx(e)&&ax(e)}function LP(t){return ho(t)&&t.Ta.length<10}function UP(t,e){t.Ta.push(e);const n=aa(t);n.O_()&&n.X_&&n.ea(e.mutations)}function sx(t){return ho(t)&&!aa(t).x_()&&t.Ta.length>0}function ax(t){aa(t).start()}async function qP(t){aa(t).ra()}async function BP(t){const e=aa(t);for(const n of t.Ta)e.ea(n.mutations)}async function zP(t,e,n){const i=t.Ta.shift(),a=zy.from(i,e,n);await ix(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await qd(t)}async function FP(t,e){e&&aa(t).X_&&await async function(i,a){if(function(c){return S2(c)&&c!==se.ABORTED}(a.code)){const l=i.Ta.shift();aa(i).B_(),await ix(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await qd(i)}}(t,e),sx(t)&&ax(t)}async function xb(t,e){const n=je(t);n.asyncQueue.verifyOperationInProgress(),_e(oo,"RemoteStore received new credentials");const i=ho(n);n.Ea.add(3),await zc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ud(n)}async function $P(t,e){const n=je(t);e?(n.Ea.delete(2),await Ud(n)):e||(n.Ea.add(2),await zc(n),n.Ra.set("Unknown"))}function Bl(t){return t.ma||(t.ma=function(n,i,a){const l=je(n);return l.sa(),new CP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:NP.bind(null,t),t_:PP.bind(null,t),r_:VP.bind(null,t),H_:jP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Zy(t)?Xy(t):t.Ra.set("Unknown")):(await t.ma.stop(),rx(t))})),t.ma}function aa(t){return t.fa||(t.fa=function(n,i,a){const l=je(n);return l.sa(),new IP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:qP.bind(null,t),r_:FP.bind(null,t),ta:BP.bind(null,t),na:zP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await qd(t)):(await t.fa.stop(),t.Ta.length>0&&(_e(oo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new Jy(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function e_(t,e){if(os("AsyncQueue",`${e}: ${t}`),Ul(t))return new ge(se.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{static emptySet(e){return new ml(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Ae.comparator(n.key,i.key):(n,i)=>Ae.comparator(n.key,i.key),this.keyedMap=nc(),this.sortedSet=new Dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ml)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ml;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.ga=new Dt(Ae.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Oe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Cl{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Cl(e,n,ml.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class GP{constructor(){this.queries=Rb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=je(n),l=a.queries;a.queries=Rb(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ge(se.ABORTED,"Firestore shutting down"))}}function Rb(){return new co(t=>AS(t),Md)}async function t_(t,e){const n=je(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new HP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=e_(c,`Initialization of query '${ol(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&r_(n)}async function n_(t,e){const n=je(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function YP(t,e){const n=je(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&r_(n)}function WP(t,e,n){const i=je(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function r_(t){t.Ca.forEach(e=>{e.next()})}var sy,Cb;(Cb=sy||(sy={})).Ma="default",Cb.Cache="cache";class i_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Cl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.key=e}}class lx{constructor(e){this.key=e}}class QP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=RS(e),this.tu=new ml(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Ab,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,w)=>{const T=a.get(v),I=Nd(this.query,w)?w:null,N=!!T&&this.mutatedKeys.has(T.key),B=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let M=!1;T&&I?T.data.isEqual(I.data)?N!==B&&(i.track({type:3,doc:I}),M=!0):this.su(T,I)||(i.track({type:2,doc:I}),M=!0,(p&&this.eu(I,p)>0||g&&this.eu(I,g)<0)&&(d=!0)):!T&&I?(i.track({type:0,doc:I}),M=!0):T&&!I&&(i.track({type:1,doc:T}),M=!0,(p||g)&&(d=!0)),M&&(I?(c=c.add(I),l=B?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,w)=>function(I,N){const B=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe(20277,{Rt:M})}};return B(I)-B(N)}(v.type,w.type)||this.eu(v.doc,w.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Cl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ab,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new lx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new ox(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Qe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Cl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const s_="SyncEngine";class KP{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class XP{constructor(e){this.key=e,this.hu=!1}}class ZP{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new co(d=>AS(d),Md),this.Iu=new Map,this.Eu=new Set,this.du=new Dt(Ae.comparator),this.Au=new Map,this.Ru=new Hy,this.Vu={},this.mu=new Map,this.fu=Rl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JP(t,e,n=!0){const i=px(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await ux(i,e,n,!0),a}async function e4(t,e){const n=px(t);await ux(n,e,!0,!1)}async function ux(t,e,n,i){const a=await EP(t.localStore,fi(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await t4(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&tx(t.remoteStore,a),d}async function t4(t,e,n,i,a){t.pu=(w,T,I)=>async function(B,M,$,P){let R=M.view.ru($);R.Cs&&(R=await Eb(B.localStore,M.query,!1).then(({documents:C})=>M.view.ru(C,R)));const Y=P&&P.targetChanges.get(M.targetId),z=P&&P.targetMismatches.get(M.targetId)!=null,te=M.view.applyChanges(R,B.isPrimaryClient,Y,z);return Db(B,M.targetId,te.au),te.snapshot}(t,w,T,I);const l=await Eb(t.localStore,e,!0),c=new QP(e,l.Qs),d=c.ru(l.documents),p=Bc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Db(t,n,g.au);const v=new KP(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function n4(t,e,n){const i=je(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Md(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await ry(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&Qy(i.remoteStore,a.targetId),ay(i,a.targetId)}).catch(Ll)):(ay(i,a.targetId),await ry(i.localStore,a.targetId,!0))}async function r4(t,e){const n=je(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Qy(n.remoteStore,i.targetId))}async function i4(t,e,n){const i=h4(t);try{const a=await function(c,d){const p=je(c),g=_t.now(),v=d.reduce((I,N)=>I.add(N.key),Qe());let w,T;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=ls(),B=Qe();return p.Ns.getEntries(I,v).next(M=>{N=M,N.forEach(($,P)=>{P.isValidDocument()||(B=B.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,N)).next(M=>{w=M;const $=[];for(const P of d){const R=v2(P,w.get(P.key).overlayedDocument);R!=null&&$.push(new fa(P.key,R,_S(R.value.mapValue),Pr.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,$,d)}).next(M=>{T=M;const $=M.applyToLocalDocumentSet(w,B);return p.documentOverlayCache.saveOverlays(I,M.batchId,$)})}).then(()=>({batchId:T.batchId,changes:IS(w)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Dt(We)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await Fc(i,a.changes),await qd(i.remoteStore)}catch(a){const l=e_(a,"Failed to persist write");n.reject(l)}}async function cx(t,e){const n=je(t);try{const i=await yP(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(ot(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?ot(c.hu,14607):a.removedDocuments.size>0&&(ot(c.hu,42227),c.hu=!1))}),await Fc(n,i,e)}catch(i){await Ll(i)}}function Ib(t,e,n){const i=je(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=je(c);p.onlineState=d;let g=!1;p.queries.forEach((v,w)=>{for(const T of w.Sa)T.va(d)&&(g=!0)}),g&&r_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function s4(t,e,n){const i=je(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new Dt(Ae.comparator);c=c.insert(l,Mn.newNoDocument(l,Ve.min()));const d=Qe().add(l),p=new jd(Ve.min(),new Map,new Dt(We),c,d);await cx(i,p),i.du=i.du.remove(l),i.Au.delete(e),a_(i)}else await ry(i.localStore,e,!1).then(()=>ay(i,e,n)).catch(Ll)}async function a4(t,e){const n=je(t),i=e.batch.batchId;try{const a=await gP(n.localStore,e);fx(n,i,null),hx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Fc(n,a)}catch(a){await Ll(a)}}async function o4(t,e,n){const i=je(t);try{const a=await function(c,d){const p=je(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(ot(w!==null,37113),v=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);fx(i,e,n),hx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Fc(i,a)}catch(a){await Ll(a)}}function hx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function fx(t,e,n){const i=je(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function ay(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||dx(t,i)})}function dx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Qy(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),a_(t))}function Db(t,e,n){for(const i of n)i instanceof ox?(t.Ru.addReference(i.key,e),l4(t,i)):i instanceof lx?(_e(s_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||dx(t,i.key)):Oe(19791,{wu:i})}function l4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(_e(s_,"New document in limbo: "+n),t.Eu.add(i),a_(t))}function a_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Ae(Et.fromString(e)),i=t.fu.next();t.Au.set(i,new XP(n)),t.du=t.du.insert(n,i),tx(t.remoteStore,new Qs(fi(Od(n.path)),i,"TargetPurposeLimboResolution",Id.ce))}}async function Fc(t,e,n){const i=je(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const w=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){a.push(g);const w=Yy.As(p.targetId,g);l.push(w)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=je(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>ue.forEach(g,T=>ue.forEach(T.Es,I=>v.persistence.referenceDelegate.addReference(w,T.targetId,I)).next(()=>ue.forEach(T.ds,I=>v.persistence.referenceDelegate.removeReference(w,T.targetId,I)))))}catch(w){if(!Ul(w))throw w;_e(Wy,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const I=v.Ms.get(T),N=I.snapshotVersion,B=I.withLastLimboFreeSnapshotVersion(N);v.Ms=v.Ms.insert(T,B)}}}(i.localStore,l))}async function u4(t,e){const n=je(t);if(!n.currentUser.isEqual(e)){_e(s_,"User change. New user:",e.toKey());const i=await XS(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ge(se.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Fc(n,i.Ls)}}function c4(t,e){const n=je(t),i=n.Au.get(e);if(i&&i.hu)return Qe().add(i.key);{let a=Qe();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function px(t){const e=je(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s4.bind(null,e),e.Pu.H_=YP.bind(null,e.eventManager),e.Pu.yu=WP.bind(null,e.eventManager),e}function h4(t){const e=je(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o4.bind(null,e),e}class fd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ld(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return mP(this.persistence,new fP,e.initialUser,this.serializer)}Cu(e){return new KS(Gy.mi,this.serializer)}Du(e){return new bP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fd.provider={build:()=>new fd};class f4 extends fd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ot(this.persistence.referenceDelegate instanceof cd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new X2(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Fn.withCacheSize(this.cacheSizeBytes):Fn.DEFAULT;return new KS(i=>cd.mi(i,n),this.serializer)}}class oy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ib(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=u4.bind(null,this.syncEngine),await $P(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GP}()}createDatastore(e){const n=Ld(e.databaseInfo.databaseId),i=function(l){return new RP(l)}(e.databaseInfo);return function(l,c,d,p){return new kP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new MP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Ib(this.syncEngine,n,0),function(){return Tb.v()?new Tb:new TP}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const w=new ZP(a,l,c,d,p,g);return v&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=je(a);_e(oo,"RemoteStore shutting down."),l.Ea.add(5),await zc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}oy.provider={build:()=>new oy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class o_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):os("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="FirestoreClient";class d4{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=On.UNAUTHENTICATED,this.clientId=Py.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{_e(oa,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(_e(oa,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=e_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function yg(t,e){t.asyncQueue.verifyOperationInProgress(),_e(oa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await XS(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p4(t);_e(oa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>xb(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>xb(e.remoteStore,a)),t._onlineComponents=e}async function p4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){_e(oa,"Using user provided OfflineComponentProvider");try{await yg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===se.FAILED_PRECONDITION||a.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Tl("Error using user provided cache. Falling back to memory cache: "+n),await yg(t,new fd)}}else _e(oa,"Using default OfflineComponentProvider"),await yg(t,new f4(void 0));return t._offlineComponents}async function mx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(_e(oa,"Using user provided OnlineComponentProvider"),await kb(t,t._uninitializedComponentsProvider._online)):(_e(oa,"Using default OnlineComponentProvider"),await kb(t,new oy))),t._onlineComponents}function m4(t){return mx(t).then(e=>e.syncEngine)}async function dd(t){const e=await mx(t),n=e.eventManager;return n.onListen=JP.bind(null,e.syncEngine),n.onUnlisten=n4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=e4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=r4.bind(null,e.syncEngine),n}function g4(t,e,n={}){const i=new rs;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new o_({next:T=>{v.Nu(),c.enqueueAndForget(()=>n_(l,w));const I=T.docs.has(d);!I&&T.fromCache?g.reject(new ge(se.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&T.fromCache&&p&&p.source==="server"?g.reject(new ge(se.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new i_(Od(d.path),v,{includeMetadataChanges:!0,qa:!0});return t_(l,w)}(await dd(t),t.asyncQueue,e,n,i)),i.promise}function y4(t,e,n={}){const i=new rs;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new o_({next:T=>{v.Nu(),c.enqueueAndForget(()=>n_(l,w)),T.fromCache&&p.source==="server"?g.reject(new ge(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new i_(d,v,{includeMetadataChanges:!0,qa:!0});return t_(l,w)}(await dd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function gx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="firestore.googleapis.com",Mb=!0;class Nb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yx,this.ssl=Mb}else this.host=e.host,this.ssl=e.ssl??Mb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Q2)throw new ge(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bN;switch(i.type){case"firstParty":return new AN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Ob.get(n);i&&(_e("ComponentProvider","Removing Datastore"),Ob.delete(n),i.terminate())}(this),Promise.resolve()}}function _4(t,e,n,i={}){var g;t=sr(t,Bd);const a=Nl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(h1(`https://${d}`),f1("Firestore",!0)),l.host!==yx&&l.host!==d&&Tl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!no(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,w;if(typeof i.mockUserToken=="string")v=i.mockUserToken,w=On.MOCK_USER;else{v=kD(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ge(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new On(T)}t._authCredentials=new TN(new aS(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new da(this.firestore,e,this._query)}}class Mt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}toJSON(){return{type:Mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Uc(n,Mt._jsonSchema))return new Mt(e,i||null,new Ae(Et.fromString(n.referencePath)))}}Mt._jsonSchemaVersion="firestore/documentReference/1.0",Mt._jsonSchema={type:Ht("string",Mt._jsonSchemaVersion),referencePath:Ht("string")};class ta extends da{constructor(e,n,i){super(e,n,Od(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Ae(e))}withConverter(e){return new ta(this.firestore,e,this._path)}}function Tr(t,e,...n){if(t=Gt(t),oS("collection","path",e),t instanceof Bd){const i=Et.fromString(e,...n);return Yw(i),new ta(t,null,i)}{if(!(t instanceof Mt||t instanceof ta))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Et.fromString(e,...n));return Yw(i),new ta(t.firestore,null,i)}}function Hn(t,e,...n){if(t=Gt(t),arguments.length===1&&(e=Py.newId()),oS("doc","path",e),t instanceof Bd){const i=Et.fromString(e,...n);return Gw(i),new Mt(t,null,new Ae(i))}{if(!(t instanceof Mt||t instanceof ta))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Et.fromString(e,...n));return Gw(i),new Mt(t.firestore,t instanceof ta?t.converter:null,new Ae(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="AsyncQueue";class Vb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new JS(this,"async_queue_retry"),this._c=()=>{const i=gg();i&&_e(Pb,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=gg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new rs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ul(e))throw e;_e(Pb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,os("INTERNAL UNHANDLED ERROR: ",jb(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Jy.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Oe(47125,{Pc:jb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Lb(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class la extends Bd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new Vb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vb(e),this._firestoreClient=void 0,await e}}}function _x(t,e){const n=typeof t=="object"?t:g1(),i=typeof t=="string"?t:sd,a=xy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=ID("firestore");l&&_4(a,...l)}return a}function zd(t){if(t._terminated)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||v4(t),t._firestoreClient}function v4(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new FN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,gx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new d4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(Tn.fromBase64String(e))}catch(n){throw new ge(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new br(Tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:br._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Uc(e,br._jsonSchema))return br.fromBase64String(e.bytes)}}br._jsonSchemaVersion="firestore/bytes/1.0",br._jsonSchema={type:Ht("string",br._jsonSchemaVersion),bytes:Ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pi._jsonSchemaVersion}}static fromJSON(e){if(Uc(e,pi._jsonSchema))return new pi(e.latitude,e.longitude)}}pi._jsonSchemaVersion="firestore/geoPoint/1.0",pi._jsonSchema={type:Ht("string",pi._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class mi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Uc(e,mi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mi(e.vectorValues);throw new ge(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mi._jsonSchemaVersion="firestore/vectorValue/1.0",mi._jsonSchema={type:Ht("string",mi._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=/^__.*__$/;class w4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new fa(e,this.data,this.fieldMask,n,this.fieldTransforms):new qc(e,this.data,n,this.fieldTransforms)}}class vx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new fa(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ex(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe(40011,{Ac:t})}}class l_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new l_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ex(this.Ac)&&E4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class b4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ld(e)}Cc(e,n,i,a=!1){return new l_({Ac:e,methodName:n,Dc:i,path:bn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hd(t){const e=t._freezeSettings(),n=Ld(t._databaseId);return new b4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);c_("Data must be an object, but it was:",c,i);const d=bx(i,c);let p,g;if(l.merge)p=new ir(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const w of l.mergeFields){const T=ly(e,w,n);if(!c.contains(T))throw new ge(se.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Sx(v,T)||v.push(T)}p=new ir(v),g=c.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=c.fieldTransforms;return new w4(new $n(d),p,g)}class Gd extends $d{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gd}}class u_ extends $d{_toFieldTransform(e){return new m2(e.path,new xc)}isEqual(e){return e instanceof u_}}function T4(t,e,n,i){const a=t.Cc(1,e,n);c_("Data must be an object, but it was:",a,i);const l=[],c=$n.empty();ha(i,(p,g)=>{const v=h_(e,p,n);g=Gt(g);const w=a.yc(v);if(g instanceof Gd)l.push(v);else{const T=$c(g,w);T!=null&&(l.push(v),c.set(v,T))}});const d=new ir(l);return new vx(c,d,a.fieldTransforms)}function S4(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[ly(e,i,n)],p=[a];if(l.length%2!=0)throw new ge(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(ly(e,l[T])),p.push(l[T+1]);const g=[],v=$n.empty();for(let T=d.length-1;T>=0;--T)if(!Sx(g,d[T])){const I=d[T];let N=p[T];N=Gt(N);const B=c.yc(I);if(N instanceof Gd)g.push(I);else{const M=$c(N,B);M!=null&&(g.push(I),v.set(I,M))}}const w=new ir(g);return new vx(v,w,c.fieldTransforms)}function x4(t,e,n,i=!1){return $c(n,t.Cc(i?4:3,e))}function $c(t,e){if(Tx(t=Gt(t)))return c_("Unsupported field value:",e,t),bx(t,e);if(t instanceof $d)return function(i,a){if(!Ex(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=$c(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Gt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return f2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:ud(a.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ud(a.serializer,l)}}if(i instanceof pi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof br)return{bytesValue:zS(a.serializer,i._byteString)};if(i instanceof Mt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$y(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof mi)return function(c,d){return{mapValue:{fields:{[gS]:{stringValue:yS},[ad]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return By(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${Cd(i)}`)}(t,e)}function bx(t,e){const n={};return cS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ha(t,(i,a)=>{const l=$c(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Tx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof pi||t instanceof br||t instanceof Mt||t instanceof $d||t instanceof mi)}function c_(t,e,n){if(!Tx(n)||!lS(n)){const i=Cd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function ly(t,e,n){if((e=Gt(e))instanceof Fd)return e._internalPath;if(typeof e=="string")return h_(t,e);throw pd("Field path arguments must be of type string or ",t,!1,void 0,n)}const A4=new RegExp("[~\\*/\\[\\]]");function h_(t,e,n){if(e.search(A4)>=0)throw pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fd(...e.split("."))._internalPath}catch{throw pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pd(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ge(se.INVALID_ARGUMENT,d+t+p)}function Sx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R4 extends xx{data(){return super.data()}}function Yd(t,e){return typeof e=="string"?h_(t,e):e instanceof Fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ge(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f_{}class Rx extends f_{}function li(t,e,...n){let i=[];e instanceof f_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof d_).length,d=l.filter(p=>p instanceof Wd).length;if(c>1||c>0&&d>0)throw new ge(se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Wd extends Rx{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Wd(e,n,i)}_apply(e){const n=this._parse(e);return Cx(e._query,n),new da(e.firestore,e.converter,Xg(e._query,n))}_parse(e){const n=Hd(e.firestore);return function(l,c,d,p,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ge(se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){qb(w,v);const N=[];for(const B of w)N.push(Ub(p,l,B));T={arrayValue:{values:N}}}else T=Ub(p,l,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||qb(w,v),T=x4(d,c,w,v==="in"||v==="not-in");return $t.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Sr(t,e,n){const i=e,a=Yd("where",t);return Wd._create(a,i,n)}class d_ extends f_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new d_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Lr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Cx(c,p),c=Xg(c,p)}(e._query,n),new da(e.firestore,e.converter,Xg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class p_ extends Rx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new p_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sc(l,c)}(e._query,this._field,this._direction);return new da(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new ql(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function m_(t,e="asc"){const n=e,i=Yd("orderBy",t);return p_._create(i,n)}function Ub(t,e,n){if(typeof(n=Gt(n))=="string"){if(n==="")throw new ge(se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xS(e)&&n.indexOf("/")!==-1)throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Et.fromString(n));if(!Ae.isDocumentKey(i))throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return tb(t,new Ae(i))}if(n instanceof Mt)return tb(t,n._key);throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cd(n)}.`)}function qb(t,e){if(!Array.isArray(t)||t.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class C4{convertValue(e,n="none"){switch(sa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return jt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ia(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ha(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[ad].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>jt(c.doubleValue));return new mi(n)}convertGeoPoint(e){return new pi(jt(e.latitude),jt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=kd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(wc(e));default:return null}}convertTimestamp(e){const n=ra(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Et.fromString(e);ot(WS(i),9688,{name:e});const a=new bc(i.get(1),i.get(3)),l=new Ae(i.popFirst(5));return a.isEqual(n)||os(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class ic{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Za extends xx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Yd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Za._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Za._jsonSchemaVersion="firestore/documentSnapshot/1.0",Za._jsonSchema={type:Ht("string",Za._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class $f extends Za{data(e={}){return super.data(e)}}class Ja{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ic(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new $f(this._firestore,this._userDataWriter,i.key,i,new ic(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new $f(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new $f(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:I4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ja._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Py.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function I4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){t=sr(t,Mt);const e=sr(t.firestore,la);return g4(zd(e),t._key).then(n=>Dx(e,t,n))}Ja._jsonSchemaVersion="firestore/querySnapshot/1.0",Ja._jsonSchema={type:Ht("string",Ja._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class y_ extends C4{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function dc(t){t=sr(t,da);const e=sr(t.firestore,la),n=zd(e),i=new y_(e);return Ax(t._query),y4(n,t._query).then(a=>new Ja(e,i,t,a))}function D4(t,e,n){t=sr(t,Mt);const i=sr(t.firestore,la),a=Ix(t.converter,e);return __(i,[wx(Hd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Pr.none())])}function oi(t,e,n,...i){t=sr(t,Mt);const a=sr(t.firestore,la),l=Hd(a);let c;return c=typeof(e=Gt(e))=="string"||e instanceof Fd?S4(l,"updateDoc",t._key,e,n,i):T4(l,"updateDoc",t._key,e),__(a,[c.toMutation(t._key,Pr.exists(!0))])}function k4(t,e){const n=sr(t.firestore,la),i=Hn(t),a=Ix(t.converter,e);return __(n,[wx(Hd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Pr.exists(!1))]).then(()=>i)}function Qd(t,...e){var p,g,v;t=Gt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Lb(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Lb(e[i])){const w=e[i];e[i]=(p=w.next)==null?void 0:p.bind(w),e[i+1]=(g=w.error)==null?void 0:g.bind(w),e[i+2]=(v=w.complete)==null?void 0:v.bind(w)}let l,c,d;if(t instanceof Mt)c=sr(t.firestore,la),d=Od(t._key.path),l={next:w=>{e[i]&&e[i](Dx(c,t,w))},error:e[i+1],complete:e[i+2]};else{const w=sr(t,da);c=sr(w.firestore,la),d=w._query;const T=new y_(c);l={next:I=>{e[i]&&e[i](new Ja(c,T,w,I))},error:e[i+1],complete:e[i+2]},Ax(t._query)}return function(T,I,N,B){const M=new o_(B),$=new i_(I,M,N);return T.asyncQueue.enqueueAndForget(async()=>t_(await dd(T),$)),()=>{M.Nu(),T.asyncQueue.enqueueAndForget(async()=>n_(await dd(T),$))}}(zd(c),d,a,l)}function __(t,e){return function(i,a){const l=new rs;return i.asyncQueue.enqueueAndForget(async()=>i4(await m4(i),a,l)),l.promise}(zd(t),e)}function Dx(t,e,n){const i=n.docs.get(e._key),a=new y_(t);return new Za(t,a,e._key,i,new ic(n.hasPendingWrites,n.fromCache),e.converter)}function Bb(){return new u_("serverTimestamp")}(function(e,n=!0){(function(a){jl=a})(Pl),wl(new ro("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new la(new SN(i.getProvider("auth-internal")),new RN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Js(zw,Fw,e),Js(zw,Fw,"esm2020")})();const O4={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},v_=m1(O4);_x(v_);const bt=_x(v_),lo=_N(v_);function M4({onLoginSuccess:t}){const[e,n]=U.useState(""),[i,a]=U.useState(""),l=kc(),c=()=>{l("/signup")},d=()=>{nM(lo,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(N4,{children:[_.jsxs(P4,{children:[_.jsxs(V4,{children:[_.jsx(j4,{children:"PDMS"}),_.jsx(L4,{children:"Pushcomz Design Management System"})]}),_.jsxs(U4,{children:[_.jsx(q4,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(B4,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(z4,{onClick:d,children:"로그인"}),_.jsxs($4,{children:[_.jsx(H4,{children:"계정이 없습니까?"}),_.jsx(G4,{onClick:c,children:"등록하기"})]})]}),_.jsx(F4,{children:"© Pushcomz Corp."})]})}const N4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,P4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,V4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,j4=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,L4=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,U4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,q4=H.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,B4=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,z4=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,F4=H.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,$4=H.div`
  
`,H4=H.span`
  margin-right: 10px;
  font-size: 13px;
`,G4=H.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,kx="./assets/logo-NEcdCz8m.svg";function Y4(){const[t,e]=U.useState(""),[n,i]=U.useState(null),a=kc();U.useEffect(()=>{const d=xd(lo,async p=>{if(p){p.displayName&&e(p.displayName);const g=await g_(Hn(bt,"users",p.uid));g.exists()?i(g.data().role):i(null)}else e(""),i(null)});return()=>d()},[]);const l=()=>{oM(lo).then(()=>{a("/")}).catch(d=>{alert("로그아웃 중 오류가 발생했습니다: "+d.message)})},c=d=>{switch(d){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(W4,{children:[_.jsx(Q4,{src:kx}),_.jsxs(K4,{children:[_.jsxs(X4,{children:[_.jsx(Z4,{children:t}),"님(",c(n),") 환영합니다."]}),_.jsx(J4,{onClick:l,children:"로그아웃"}),_.jsx(eV,{})]})]})}const W4=H.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,Q4=H.img``,K4=H.div``,X4=H.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,Z4=H.span`
  font-weight: 700;
`,J4=H.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,eV=H.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,E_="./assets/url-icon-DJKri2bW.svg";function tV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(nV,{isCanceled:t.status==="취소",children:[_.jsx(kr,{children:e}),_.jsx(kr,{children:_.jsx(lV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(kr,{children:c(t.request_date)}),_.jsx(rV,{children:c(t.completion_dt)}),_.jsx(iV,{children:c(t.open_dt)}),_.jsx(kr,{children:t.task_form}),_.jsx(sV,{children:t.task_type}),_.jsx(aV,{children:_.jsxs(uV,{children:[t.emergency?_.jsx(Ox,{children:"긴급"}):"",_.jsx(cV,{onClick:d,children:t.requirement})]})}),_.jsx(kr,{children:_.jsx(zb,{href:t.url,target:"_blank"})}),_.jsx(oV,{children:_.jsx(hV,{onClick:d,children:t.note||""})}),_.jsx(kr,{children:_.jsx(fV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status||"대기"})}),_.jsx(kr,{children:t.assigned_designer||"미배정"}),_.jsx(kr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(zb,{href:t.result_url,target:"_blank"}):""}),_.jsx(kr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(Mx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(dV,{children:"검수완료"}):""}),_.jsx(kr,{children:_.jsx(Nx,{onClick:()=>a(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(kr,{children:_.jsx(Px,{onClick:()=>i(t.id),children:"취소"})})]})}const nV=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Ox} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Mx}, ${Nx}, ${Px} {
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
`,kr=H.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,rV=H.td`
  color: ${({theme:t})=>t.colors.red};
`,iV=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,sV=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,aV=H.td`
  line-height: 15px;
  text-align: left;
`,oV=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,lV=H.span`
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
`,uV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,cV=H.span`
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
`,Ox=H.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,zb=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${E_}) no-repeat center / contain;
`,hV=H.span`
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
`,fV=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,Mx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,dV=H.span`
  color: green;
  font-weight: bold;
`,Nx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`,Px=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`;function pV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(mV,{children:_.jsxs(gV,{children:[_.jsx(yV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Cn,{children:"번호"}),_.jsx(Cn,{children:"문서번호"}),_.jsx(Cn,{children:"요청일"}),_.jsxs(Cn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Cn,{children:"오픈일"}),_.jsx(Cn,{children:"업무형태"}),_.jsx(Cn,{children:"업무타입"}),_.jsx(Cn,{children:"작업항목"}),_.jsx(Cn,{children:"요청서 URL"}),_.jsx(Cn,{children:"메모"}),_.jsx(Cn,{children:"진행상태"}),_.jsx(Cn,{children:"디자이너"}),_.jsx(Cn,{children:"산출물 URL"}),_.jsx(Cn,{children:"검수"}),_.jsx(Cn,{children:"수정"}),_.jsx(Cn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(tV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const mV=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,gV=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,yV=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Cn=H.th`
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
`;function w_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(_V,{children:_.jsxs(vV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const _V=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,vV=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Vx="./assets/selectbox-arrow-BwC8UGU0.svg";function EV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const _g={},sc={};function Ka(t,e){try{const i=(_g[t]||(_g[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in sc?sc[i]:Fb(i,i.split(":"))}catch{if(t in sc)return sc[t];const n=t==null?void 0:t.match(wV);return n?Fb(t,n.slice(1)):NaN}}const wV=/([+-]\d\d):?(\d\d)?/;function Fb(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return sc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class ui extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Ka(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),jx(this),uy(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new ui(...n,e):new ui(Date.now(),e)}withTimeZone(e){return new ui(+this,e)}getTimezoneOffset(){const e=-Ka(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),uy(this),+this}[Symbol.for("constructDateFrom")](e){return new ui(+new Date(e),this.timeZone)}}const $b=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!$b.test(t))return;const e=t.replace($b,"$1UTC");ui.prototype[e]&&(t.startsWith("get")?ui.prototype[t]=function(){return this.internal[e]()}:(ui.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),bV(this),+this},ui.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),uy(this),+this}))});function uy(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Ka(t.timeZone,t)*60))}function bV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),jx(t)}function jx(t){const e=Ka(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,w=Math.round(-(Ka(t.timeZone,t)*60))%60;(w||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+w),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+w+v));const T=Ka(t.timeZone,t),I=T>0?Math.floor(T):Math.ceil(T),B=-new Date(+t).getTimezoneOffset()-I,M=I!==n,$=B-p;if(M&&$){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+$);const P=Ka(t.timeZone,t),R=P>0?Math.floor(P):Math.ceil(P),Y=I-R;Y&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+Y),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+Y))}}class kn extends ui{static tz(e,...n){return n.length?new kn(...n,e):new kn(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${EV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new kn(+this,e)}[Symbol.for("constructDateFrom")](e){return new kn(+new Date(e),this.timeZone)}}const Lx=6048e5,TV=864e5,Hb=Symbol.for("constructDateFrom");function Jt(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Hb in t?t[Hb](e):t instanceof Date?new t.constructor(e):new Date(e)}function mt(t,e){return Jt(e||t,t)}function Ux(t,e,n){const i=mt(t,n==null?void 0:n.in);return isNaN(e)?Jt(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function qx(t,e,n){const i=mt(t,n==null?void 0:n.in);if(isNaN(e))return Jt(t,NaN);if(!e)return i;const a=i.getDate(),l=Jt(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let SV={};function Hc(){return SV}function Il(t,e){var d,p,g,v;const n=Hc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=mt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Cc(t,e){return Il(t,{...e,weekStartsOn:1})}function Bx(t,e){const n=mt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Jt(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Cc(a),c=Jt(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Cc(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Gb(t){const e=mt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function zl(t,...e){const n=Jt.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Ic(t,e){const n=mt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function zx(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e),l=Ic(i),c=Ic(a),d=+l-Gb(l),p=+c-Gb(c);return Math.round((d-p)/TV)}function xV(t,e){const n=Bx(t,e),i=Jt(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Cc(i)}function AV(t,e,n){return Ux(t,e*7,n)}function RV(t,e,n){return qx(t,e*12,n)}function CV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Jt.bind(null,a));const l=mt(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),Jt(i,n||NaN)}function IV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Jt.bind(null,a));const l=mt(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),Jt(i,n||NaN)}function DV(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return+Ic(i)==+Ic(a)}function Fx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function kV(t){return!(!Fx(t)&&typeof t!="number"||isNaN(+mt(t)))}function OV(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function MV(t,e){const n=mt(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function NV(t,e){const[n,i]=zl(t,e.start,e.end);return{start:n,end:i}}function PV(t,e){const{start:n,end:i}=NV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(Jt(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function VV(t,e){const n=mt(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function jV(t,e){const n=mt(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function $x(t,e){const n=mt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Hx(t,e){var d,p,g,v;const n=Hc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=mt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function LV(t,e){return Hx(t,{...e,weekStartsOn:1})}const UV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qV=(t,e,n)=>{let i;const a=UV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function vg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const BV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},zV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},FV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$V={date:vg({formats:BV,defaultWidth:"full"}),time:vg({formats:zV,defaultWidth:"full"}),dateTime:vg({formats:FV,defaultWidth:"full"})},HV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},GV=(t,e,n,i)=>HV[t];function Wu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const YV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},WV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},QV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},KV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},XV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ZV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},JV=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},e6={ordinalNumber:JV,era:Wu({values:YV,defaultWidth:"wide"}),quarter:Wu({values:WV,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Wu({values:QV,defaultWidth:"wide"}),day:Wu({values:KV,defaultWidth:"wide"}),dayPeriod:Wu({values:XV,defaultWidth:"wide",formattingValues:ZV,defaultFormattingWidth:"wide"})};function Qu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?n6(d,w=>w.test(c)):t6(d,w=>w.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function t6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function n6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function r6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const i6=/^(\d+)(th|st|nd|rd)?/i,s6=/\d+/i,a6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},o6={any:[/^b/i,/^(a|c)/i]},l6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},u6={any:[/1/i,/2/i,/3/i,/4/i]},c6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},d6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},p6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},m6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},g6={ordinalNumber:r6({matchPattern:i6,parsePattern:s6,valueCallback:t=>parseInt(t,10)}),era:Qu({matchPatterns:a6,defaultMatchWidth:"wide",parsePatterns:o6,defaultParseWidth:"any"}),quarter:Qu({matchPatterns:l6,defaultMatchWidth:"wide",parsePatterns:u6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Qu({matchPatterns:c6,defaultMatchWidth:"wide",parsePatterns:h6,defaultParseWidth:"any"}),day:Qu({matchPatterns:f6,defaultMatchWidth:"wide",parsePatterns:d6,defaultParseWidth:"any"}),dayPeriod:Qu({matchPatterns:p6,defaultMatchWidth:"any",parsePatterns:m6,defaultParseWidth:"any"})},b_={code:"en-US",formatDistance:qV,formatLong:$V,formatRelative:GV,localize:e6,match:g6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function y6(t,e){const n=mt(t,e==null?void 0:e.in);return zx(n,$x(n))+1}function Gx(t,e){const n=mt(t,e==null?void 0:e.in),i=+Cc(n)-+xV(n);return Math.round(i/Lx)+1}function Yx(t,e){var v,w,T,I;const n=mt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Hc(),l=(e==null?void 0:e.firstWeekContainsDate)??((w=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((I=(T=a.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=Jt((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Il(c,e),p=Jt((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Il(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function _6(t,e){var d,p,g,v;const n=Hc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Yx(t,e),l=Jt((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Il(l,e)}function Wx(t,e){const n=mt(t,e==null?void 0:e.in),i=+Il(n,e)-+_6(n,e);return Math.round(i/Lx)+1}function ct(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Fs={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ct(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ct(n+1,2)},d(t,e){return ct(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ct(t.getHours()%12||12,e.length)},H(t,e){return ct(t.getHours(),e.length)},m(t,e){return ct(t.getMinutes(),e.length)},s(t,e){return ct(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ct(a,e.length)}},sl={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Yb={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Fs.y(t,e)},Y:function(t,e,n,i){const a=Yx(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ct(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ct(l,e.length)},R:function(t,e){const n=Bx(t);return ct(n,e.length)},u:function(t,e){const n=t.getFullYear();return ct(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ct(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ct(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Fs.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ct(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Wx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ct(a,e.length)},I:function(t,e,n){const i=Gx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ct(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Fs.d(t,e)},D:function(t,e,n){const i=y6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ct(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ct(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ct(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ct(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=sl.noon:i===0?a=sl.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=sl.evening:i>=12?a=sl.afternoon:i>=4?a=sl.morning:a=sl.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Fs.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Fs.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ct(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ct(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Fs.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Fs.s(t,e)},S:function(t,e){return Fs.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Qb(i);case"XXXX":case"XX":return Ya(i);case"XXXXX":case"XXX":default:return Ya(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Qb(i);case"xxxx":case"xx":return Ya(i);case"xxxxx":case"xxx":default:return Ya(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Wb(i,":");case"OOOO":default:return"GMT"+Ya(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Wb(i,":");case"zzzz":default:return"GMT"+Ya(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ct(i,e.length)},T:function(t,e,n){return ct(+t,e.length)}};function Wb(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ct(l,2)}function Qb(t,e){return t%60===0?(t>0?"-":"+")+ct(Math.abs(t)/60,2):Ya(t,e)}function Ya(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ct(Math.trunc(i/60),2),l=ct(i%60,2);return n+a+e+l}const Kb=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},v6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Kb(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Kb(i,e)).replace("{{time}}",Qx(a,e))},E6={p:Qx,P:v6},w6=/^D+$/,b6=/^Y+$/,T6=["D","DD","YY","YYYY"];function S6(t){return w6.test(t)}function x6(t){return b6.test(t)}function A6(t,e,n){const i=R6(t,e,n);if(console.warn(i),T6.includes(t))throw new RangeError(i)}function R6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const C6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,D6=/^'([^]*?)'?$/,k6=/''/g,O6=/[a-zA-Z]/;function M6(t,e,n){var v,w,T,I,N,B,M,$;const i=Hc(),a=(n==null?void 0:n.locale)??i.locale??b_,l=(n==null?void 0:n.firstWeekContainsDate)??((w=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((I=(T=i.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((B=(N=n==null?void 0:n.locale)==null?void 0:N.options)==null?void 0:B.weekStartsOn)??i.weekStartsOn??(($=(M=i.locale)==null?void 0:M.options)==null?void 0:$.weekStartsOn)??0,d=mt(t,n==null?void 0:n.in);if(!kV(d))throw new RangeError("Invalid time value");let p=e.match(I6).map(P=>{const R=P[0];if(R==="p"||R==="P"){const Y=E6[R];return Y(P,a.formatLong)}return P}).join("").match(C6).map(P=>{if(P==="''")return{isToken:!1,value:"'"};const R=P[0];if(R==="'")return{isToken:!1,value:N6(P)};if(Yb[R])return{isToken:!0,value:P};if(R.match(O6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:P}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(P=>{if(!P.isToken)return P.value;const R=P.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&x6(R)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&S6(R))&&A6(R,e,String(t));const Y=Yb[R[0]];return Y(d,R,a.localize,g)}).join("")}function N6(t){const e=t.match(D6);return e?e[1].replace(k6,"'"):t}function P6(t,e){const n=mt(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=Jt(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function V6(t,e){return mt(t,e==null?void 0:e.in).getMonth()}function j6(t,e){return mt(t,e==null?void 0:e.in).getFullYear()}function L6(t,e){return+mt(t)>+mt(e)}function U6(t,e){return+mt(t)<+mt(e)}function q6(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function B6(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function z6(t,e,n){const i=mt(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=Jt(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=P6(c);return i.setMonth(e,Math.min(l,d)),i}function F6(t,e,n){const i=mt(t,n==null?void 0:n.in);return isNaN(+i)?Jt(t,NaN):(i.setFullYear(e),i)}const Xb=5,$6=4;function H6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,Xb*7-1);return e.getMonth(t)===e.getMonth(l)?Xb:$6}function Kx(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function G6(t,e){const n=Kx(t,e),i=H6(t,e);return e.addDays(n,i*7-1)}class hs{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?kn.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new kn(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Ux(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):qx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):AV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):RV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):zx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):OV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):PV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):G6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):LV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):MV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Hx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):jV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):M6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Gx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):V6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):j6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Wx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):L6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):U6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):Fx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):DV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):q6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):B6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):CV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):IV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):z6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):F6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):Kx(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Ic(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Cc(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):VV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Il(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):$x(i)},this.options={locale:b_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const _i=new hs;class Xx{constructor(e,n,i=_i){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class Y6{constructor(e,n){this.date=e,this.weeks=n}}class W6{constructor(e,n){this.days=n,this.weekNumber=e}}function Q6(t){return me.createElement("button",{...t})}function K6(t){return me.createElement("span",{...t})}function X6(t){const{size:e=24,orientation:n="left",className:i}=t;return me.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&me.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&me.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&me.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&me.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Z6(t){const{day:e,modifiers:n,...i}=t;return me.createElement("td",{...i})}function J6(t){const{day:e,modifiers:n,...i}=t,a=me.useRef(null);return me.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),me.createElement("button",{ref:a,...i})}var xe;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(xe||(xe={}));var It;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(It||(It={}));var Mr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(Mr||(Mr={}));var rr;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(rr||(rr={}));function ej(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[xe.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return me.createElement("span",{"data-disabled":l.disabled,className:a[xe.DropdownRoot]},me.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>me.createElement(i.Option,{key:p,value:p,disabled:v},g))),me.createElement("span",{className:a[xe.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,me.createElement(i.Chevron,{orientation:"down",size:18,className:a[xe.Chevron]})))}function tj(t){return me.createElement("div",{...t})}function nj(t){return me.createElement("div",{...t})}function rj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i},t.children)}function ij(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i})}function sj(t){return me.createElement("table",{...t})}function aj(t){return me.createElement("div",{...t})}const Zx=U.createContext(void 0);function Gc(){const t=U.useContext(Zx);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function oj(t){const{components:e}=Gc();return me.createElement(e.Dropdown,{...t})}function lj(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Gc(),v=U.useCallback(T=>{a&&(n==null||n(T))},[a,n]),w=U.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return me.createElement("nav",{...l},me.createElement(c.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:w},me.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[xe.Chevron],orientation:"left"})),me.createElement(c.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},me.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[xe.Chevron]})))}function uj(t){const{components:e}=Gc();return me.createElement(e.Button,{...t})}function cj(t){return me.createElement("option",{...t})}function hj(t){const{components:e}=Gc();return me.createElement(e.Button,{...t})}function fj(t){const{rootRef:e,...n}=t;return me.createElement("div",{...n,ref:e})}function dj(t){return me.createElement("select",{...t})}function pj(t){const{week:e,...n}=t;return me.createElement("tr",{...n})}function mj(t){return me.createElement("th",{...t})}function gj(t){return me.createElement("thead",{"aria-hidden":!0},me.createElement("tr",{...t}))}function yj(t){const{week:e,...n}=t;return me.createElement("th",{...n})}function _j(t){return me.createElement("th",{...t})}function vj(t){return me.createElement("tbody",{...t})}function Ej(t){const{components:e}=Gc();return me.createElement(e.Dropdown,{...t})}const wj=Object.freeze(Object.defineProperty({__proto__:null,Button:Q6,CaptionLabel:K6,Chevron:X6,Day:Z6,DayButton:J6,Dropdown:ej,DropdownNav:tj,Footer:nj,Month:rj,MonthCaption:ij,MonthGrid:sj,Months:aj,MonthsDropdown:oj,Nav:lj,NextMonthButton:uj,Option:cj,PreviousMonthButton:hj,Root:fj,Select:dj,Week:pj,WeekNumber:yj,WeekNumberHeader:_j,Weekday:mj,Weekdays:gj,Weeks:vj,YearsDropdown:Ej},Symbol.toStringTag,{value:"Module"}));function Ji(t,e,n=!1,i=_i){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function Jx(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function T_(t){return!!(t&&typeof t=="object"&&"from"in t)}function eA(t){return!!(t&&typeof t=="object"&&"after"in t)}function tA(t){return!!(t&&typeof t=="object"&&"before"in t)}function nA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function rA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function es(t,e,n=_i){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(rA(d,n))return d.includes(t);if(T_(d))return Ji(d,t,!1,n);if(nA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(Jx(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,w=g<0;return c(d.before,d.after)?w&&v:v||w}return eA(d)?l(t,d.after)>0:tA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function bj(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:w,isSameMonth:T,startOfMonth:I,isBefore:N,endOfMonth:B,isAfter:M}=a,$=n&&I(n),P=i&&B(i),R={[It.focused]:[],[It.outside]:[],[It.disabled]:[],[It.hidden]:[],[It.today]:[]},Y={};for(const z of t){const{date:te,displayMonth:C}=z,A=!!(C&&!T(te,C)),D=!!($&&N(te,$)),j=!!(P&&M(te,P)),O=!!(l&&es(te,l,a)),q=!!(c&&es(te,c,a))||D||j||!g&&!p&&A||g&&p===!1&&A,k=w(te,v??a.today());A&&R.outside.push(z),O&&R.disabled.push(z),q&&R.hidden.push(z),k&&R.today.push(z),d&&Object.keys(d).forEach(Pe=>{const le=d==null?void 0:d[Pe];le&&es(te,le,a)&&(Y[Pe]?Y[Pe].push(z):Y[Pe]=[z])})}return z=>{const te={[It.focused]:!1,[It.disabled]:!1,[It.hidden]:!1,[It.outside]:!1,[It.today]:!1},C={};for(const A in R){const D=R[A];te[A]=D.some(j=>j===z)}for(const A in Y)C[A]=Y[A].some(D=>D===z);return{...te,...C}}}function Tj(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[It[l]]?a.push(e[It[l]]):e[Mr[l]]&&a.push(e[Mr[l]]),a),[e[xe.Day]])}function Sj(t){return{...wj,...t}}function xj(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function Aj(){const t={};for(const e in xe)t[xe[e]]=`rdp-${xe[e]}`;for(const e in It)t[It[e]]=`rdp-${It[e]}`;for(const e in Mr)t[Mr[e]]=`rdp-${Mr[e]}`;for(const e in rr)t[rr[e]]=`rdp-${rr[e]}`;return t}function iA(t,e,n){return(n??new hs(e)).format(t,"LLLL y")}const Rj=iA;function Cj(t,e,n){return(n??new hs(e)).format(t,"d")}function Ij(t,e=_i){return e.format(t,"LLLL")}function Dj(t,e,n){return(n??new hs(e)).format(t,"cccccc")}function kj(t,e=_i){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function Oj(){return""}function sA(t,e=_i){return e.format(t,"yyyy")}const Mj=sA,Nj=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:iA,formatDay:Cj,formatMonthCaption:Rj,formatMonthDropdown:Ij,formatWeekNumber:kj,formatWeekNumberHeader:Oj,formatWeekdayName:Dj,formatYearCaption:Mj,formatYearDropdown:sA},Symbol.toStringTag,{value:"Module"}));function Pj(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...Nj,...t}}function Vj(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const I=i.formatMonthDropdown(T,a),N=g(T),B=e&&T<l(e)||n&&T>l(n)||!1;return{value:N,label:I,disabled:B}})}function jj(t,e={},n={}){let i={...e==null?void 0:e[xe.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function Lj(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function Uj(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,w=l(t),T=c(e),I=[];let N=w;for(;g(N,T)||v(N,T);)I.push(N),N=d(N,1);return a&&I.reverse(),I.map(B=>{const M=n.formatYearDropdown(B,i);return{value:p(B),label:M,disabled:!1}})}function aA(t,e,n,i){let a=(i??new hs(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const qj=aA;function oA(t,e,n){return(n??new hs(e)).format(t,"LLLL y")}const Bj=oA;function zj(t,e,n,i){let a=(i??new hs(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function Fj(t){return"Choose the Month"}function $j(){return""}function Hj(t){return"Go to the Next Month"}function Gj(t){return"Go to the Previous Month"}function Yj(t,e,n){return(n??new hs(e)).format(t,"cccc")}function Wj(t,e){return`Week ${t}`}function Qj(t){return"Week Number"}function Kj(t){return"Choose the Year"}const Xj=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Bj,labelDay:qj,labelDayButton:aA,labelGrid:oA,labelGridcell:zj,labelMonthDropdown:Fj,labelNav:$j,labelNext:Hj,labelPrevious:Gj,labelWeekNumber:Wj,labelWeekNumberHeader:Qj,labelWeekday:Yj,labelYearDropdown:Kj},Symbol.toStringTag,{value:"Module"})),Yc=t=>t instanceof HTMLElement?t:null,Eg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],Zj=t=>Yc(t.querySelector("[data-animated-month]")),wg=t=>Yc(t.querySelector("[data-animated-caption]")),bg=t=>Yc(t.querySelector("[data-animated-weeks]")),Jj=t=>Yc(t.querySelector("[data-animated-nav]")),eL=t=>Yc(t.querySelector("[data-animated-weekdays]"));function tL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=U.useRef(null),d=U.useRef(i),p=U.useRef(!1);U.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),w=l.isAfter(i[0].date,g[0].date),T=w?n[rr.caption_after_enter]:n[rr.caption_before_enter],I=w?n[rr.weeks_after_enter]:n[rr.weeks_before_enter],N=c.current,B=t.current.cloneNode(!0);if(B instanceof HTMLElement?(Eg(B).forEach(R=>{if(!(R instanceof HTMLElement))return;const Y=Zj(R);Y&&R.contains(Y)&&R.removeChild(Y);const z=wg(R);z&&z.classList.remove(T);const te=bg(R);te&&te.classList.remove(I)}),c.current=B):c.current=null,p.current||v||a)return;const M=N instanceof HTMLElement?Eg(N):[],$=Eg(t.current);if($!=null&&$.every(P=>P instanceof HTMLElement)&&M&&M.every(P=>P instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const P=Jj(t.current);P&&(P.style.zIndex="1"),$.forEach((R,Y)=>{const z=M[Y];if(!z)return;R.style.position="relative",R.style.overflow="hidden";const te=wg(R);te&&te.classList.add(T);const C=bg(R);C&&C.classList.add(I);const A=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),P&&(P.style.zIndex=""),te&&te.classList.remove(T),C&&C.classList.remove(I),R.style.position="",R.style.overflow="",R.contains(z)&&R.removeChild(z)};z.style.pointerEvents="none",z.style.position="absolute",z.style.overflow="hidden",z.setAttribute("aria-hidden","true");const D=eL(z);D&&(D.style.opacity="0");const j=wg(z);j&&(j.classList.add(w?n[rr.caption_before_exit]:n[rr.caption_after_exit]),j.addEventListener("animationend",A));const O=bg(z);O&&O.classList.add(w?n[rr.weeks_before_exit]:n[rr.weeks_after_exit]),R.insertBefore(z,R.firstChild)})}})}function nL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:w,endOfBroadcastWeek:T,endOfISOWeek:I,endOfMonth:N,endOfWeek:B,isAfter:M,startOfBroadcastWeek:$,startOfISOWeek:P,startOfWeek:R}=i,Y=p?$(a,i):c?P(a):R(a),z=p?T(l):c?I(N(l)):B(N(l)),te=v(z,Y),C=w(l,a)+1,A=[];for(let O=0;O<=te;O++){const q=g(Y,O);if(e&&M(q,e))break;A.push(q)}const j=(p?35:42)*C;if(d&&A.length<j){const O=j-A.length;for(let q=0;q<O;q++){const k=g(A[A.length-1],1);A.push(k)}}return A}function rL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function iL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function Zb(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:w}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),w(p)}function sL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:w,startOfISOWeek:T,startOfWeek:I}=i,N=t.reduce((B,M)=>{const $=n.broadcastCalendar?w(M,i):n.ISOWeek?T(M):I(M),P=n.broadcastCalendar?l(M):n.ISOWeek?c(d(M)):p(d(M)),R=e.filter(C=>C>=$&&C<=P),Y=n.broadcastCalendar?35:42;if(n.fixedWeeks&&R.length<Y){const C=e.filter(A=>{const D=Y-R.length;return A>P&&A<=a(P,D)});R.push(...C)}const z=R.reduce((C,A)=>{const D=n.ISOWeek?g(A):v(A),j=C.find(q=>q.weekNumber===D),O=new Xx(A,M,i);return j?j.days.push(O):C.push(new W6(D,[O])),C},[]),te=new Y6(M,z);return B.push(te),B},[]);return n.reverseMonths?N.reverse():N}function aL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:w}=e,{fromYear:T,toYear:I,fromMonth:N,toMonth:B}=t;!n&&N&&(n=N),!n&&T&&(n=e.newDate(T,0,1)),!i&&B&&(i=B),!i&&I&&(i=v(I,11,31));const M=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&M&&(n=a(p(t.today??w(),-100))),i?i=d(i):I?i=v(I,11,31):!i&&M&&(i=g(t.today??w())),[n&&l(n),i&&l(i)]}function oL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function lL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function uL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function Kd(t,e){const[n,i]=U.useState(t);return[e===void 0?n:e,i]}function cL(t,e){const[n,i]=aL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=Zb(t,n,i,e),[d,p]=Kd(c,t.month?c:void 0);U.useEffect(()=>{const te=Zb(t,n,i,e);p(te)},[t.timeZone]);const g=iL(d,i,t,e),v=nL(g,t.endMonth?l(t.endMonth):void 0,t,e),w=sL(g,v,t,e),T=uL(w),I=rL(w),N=lL(d,n,t,e),B=oL(d,i,t,e),{disableNavigation:M,onMonthChange:$}=t,P=te=>T.some(C=>C.days.some(A=>A.isEqualTo(te))),R=te=>{if(M)return;let C=a(te);n&&C<a(n)&&(C=a(n)),i&&C>a(i)&&(C=a(i)),p(C),$==null||$(C)};return{months:w,weeks:T,days:I,navStart:n,navEnd:i,previousMonth:N,nextMonth:B,goToMonth:R,goToDay:te=>{P(te)||R(te.date)}}}var ii;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(ii||(ii={}));function Jb(t){return!t[It.disabled]&&!t[It.hidden]&&!t[It.outside]}function hL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);Jb(d)&&(d[It.focused]&&l<ii.FocusedModifier?(a=c,l=ii.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<ii.LastFocused?(a=c,l=ii.LastFocused):n(c.date)&&l<ii.Selected?(a=c,l=ii.Selected):d[It.today]&&l<ii.Today&&(a=c,l=ii.Today))}return a||(a=t.find(c=>Jb(e(c)))),a}function fL(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:w,addYears:T,endOfBroadcastWeek:I,endOfISOWeek:N,endOfWeek:B,max:M,min:$,startOfBroadcastWeek:P,startOfISOWeek:R,startOfWeek:Y}=c;let te={day:g,week:w,month:v,year:T,startOfWeek:C=>p?P(C,c):d?R(C):Y(C),endOfWeek:C=>p?I(C):d?N(C):B(C)}[t](n,e==="after"?1:-1);return e==="before"&&i?te=M([i,te]):e==="after"&&a&&(te=$([a,te])),te}function lA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=fL(t,e,n.date,i,a,l,c),g=!!(l.disabled&&es(p,l.disabled,c)),v=!!(l.hidden&&es(p,l.hidden,c)),w=p,T=new Xx(p,w,c);return!g&&!v?T:lA(t,e,T,i,a,l,c,d+1)}function dL(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=U.useState(),p=hL(e.days,n,i||(()=>!1),c),[g,v]=U.useState(l?p:void 0);return{isFocusTarget:B=>!!(p!=null&&p.isEqualTo(B)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(B,M)=>{if(!g)return;const $=lA(B,M,g,e.navStart,e.navEnd,t,a);$&&(e.goToDay($),v($))}}}function pL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Kd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=I=>(d==null?void 0:d.some(N=>p(N,I)))??!1,{min:v,max:w}=t;return{selected:d,select:(I,N,B)=>{let M=[...d??[]];if(g(I)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;M=d==null?void 0:d.filter($=>!p($,I))}else(d==null?void 0:d.length)===w?M=[I]:M=[...M,I];return a||c(M),a==null||a(M,I,N,B),M},isSelected:g}}function mL(t,e,n=0,i=0,a=!1,l=_i){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let w;if(!c&&!d)w={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?w={from:c,to:t}:a?w={from:c,to:void 0}:w=void 0:v(t,c)?w={from:t,to:c}:w={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?w={from:c,to:d}:w=void 0;else if(p(c,t))w={from:c,to:n>0?void 0:t};else if(p(d,t))w={from:t,to:n>0?void 0:t};else if(v(t,c))w={from:t,to:d};else if(g(t,c))w={from:c,to:t};else if(g(t,d))w={from:c,to:t};else throw new Error("Invalid range");if(w!=null&&w.from&&(w!=null&&w.to)){const T=l.differenceInCalendarDays(w.to,w.from);i>0&&T>i?w={from:t,to:void 0}:n>1&&T<n&&(w={from:t,to:void 0})}return w}function gL(t,e,n=_i){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function eT(t,e,n=_i){return Ji(t,e.from,!1,n)||Ji(t,e.to,!1,n)||Ji(e,t.from,!1,n)||Ji(e,t.to,!1,n)}function yL(t,e,n=_i){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Ji(t,d,!1,n):rA(d,n)?d.some(p=>Ji(t,p,!1,n)):T_(d)?d.from&&d.to?eT(t,{from:d.from,to:d.to},n):!1:nA(d)?gL(t,d.dayOfWeek,n):Jx(d)?n.isAfter(d.before,d.after)?eT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):es(t.from,d,n)||es(t.to,d,n):eA(d)||tA(d)?es(t.from,d,n)||es(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function _L(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=Kd(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,I,N)=>{const{min:B,max:M}=t,$=T?mL(T,g,B,M,l,e):void 0;return i&&n&&($!=null&&$.from)&&$.to&&yL({from:$.from,to:$.to},n,e)&&($.from=T,$.to=void 0),c||p($),c==null||c($,T,I,N),$},isSelected:T=>g&&Ji(g,T,!1,e)}}function vL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Kd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(w,T,I)=>{let N=w;return!i&&d&&d&&p(w,d)&&(N=void 0),a||c(N),a==null||a(N,w,T,I),N},isSelected:w=>d?p(d,w):!1}}function EL(t,e){const n=vL(t,e),i=pL(t,e),a=_L(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function wL(t){var ds;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new kn(e.today,e.timeZone)),e.month&&(e.month=new kn(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new kn(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new kn(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new kn(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new kn(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(ds=e.selected)==null?void 0:ds.map(Le=>new kn(Le,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new kn(e.selected.from,e.timeZone):void 0,to:e.selected.to?new kn(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=U.useMemo(()=>{const Le={...b_,...e.locale};return{dateLib:new hs({locale:Le,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Sj(e.components),formatters:Pj(e.formatters),labels:{...Xj,...e.labels},locale:Le,classNames:{...Aj(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:w=1,onDayBlur:T,onDayClick:I,onDayFocus:N,onDayKeyDown:B,onDayMouseEnter:M,onDayMouseLeave:$,onNextClick:P,onPrevClick:R,showWeekNumber:Y,styles:z}=e,{formatCaption:te,formatDay:C,formatMonthDropdown:A,formatWeekNumber:D,formatWeekNumberHeader:j,formatWeekdayName:O,formatYearDropdown:q}=i,k=cL(e,l),{days:Pe,months:le,navStart:W,navEnd:ae,previousMonth:de,nextMonth:ye,goToMonth:L}=k,re=bj(Pe,e,W,ae,l),{isSelected:fe,select:he,selected:Ee}=EL(e,l)??{},{blur:Me,focused:Te,isFocusTarget:gt,moveFocus:ce,setFocused:be}=dL(e,k,re,fe??(()=>!1),l),{labelDayButton:ve,labelGridcell:Re,labelGrid:qe,labelMonthDropdown:Sn,labelNav:mn,labelPrevious:ar,labelNext:or,labelWeekday:en,labelWeekNumber:Fl,labelWeekNumberHeader:pa,labelYearDropdown:fs}=a,vi=U.useMemo(()=>Lj(l,e.ISOWeek),[l,e.ISOWeek]),fo=g!==void 0||I!==void 0,qr=U.useCallback(()=>{de&&(L(de),R==null||R(de))},[de,L,R]),Ei=U.useCallback(()=>{ye&&(L(ye),P==null||P(ye))},[L,ye,P]),po=U.useCallback((Le,it)=>De=>{De.preventDefault(),De.stopPropagation(),be(Le),he==null||he(Le.date,it,De),I==null||I(Le.date,it,De)},[he,I,be]),Tt=U.useCallback((Le,it)=>De=>{be(Le),N==null||N(Le.date,it,De)},[N,be]),nt=U.useCallback((Le,it)=>De=>{Me(),T==null||T(Le.date,it,De)},[Me,T]),Pn=U.useCallback((Le,it)=>De=>{const et={ArrowLeft:[De.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[De.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[De.shiftKey?"year":"week","after"],ArrowUp:[De.shiftKey?"year":"week","before"],PageUp:[De.shiftKey?"year":"month","before"],PageDown:[De.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(et[De.key]){De.preventDefault(),De.stopPropagation();const[nn,Ue]=et[De.key];ce(nn,Ue)}B==null||B(Le.date,it,De)},[ce,B,e.dir]),tn=U.useCallback((Le,it)=>De=>{M==null||M(Le.date,it,De)},[M]),mo=U.useCallback((Le,it)=>De=>{$==null||$(Le.date,it,De)},[$]),$l=U.useCallback(Le=>it=>{const De=Number(it.target.value),et=l.setMonth(l.startOfMonth(Le),De);L(et)},[l,L]),wi=U.useCallback(Le=>it=>{const De=Number(it.target.value),et=l.setYear(l.startOfMonth(Le),De);L(et)},[l,L]),{className:bi,style:Ti}=U.useMemo(()=>({className:[d[xe.Root],e.className].filter(Boolean).join(" "),style:{...z==null?void 0:z[xe.Root],...e.style}}),[d,e.className,e.style,z]),Gn=xj(e),Si=U.useRef(null);tL(Si,!!e.animate,{classNames:d,months:le,focused:Te,dateLib:l});const xi={dayPickerProps:e,selected:Ee,select:he,isSelected:fe,months:le,nextMonth:ye,previousMonth:de,goToMonth:L,getModifiers:re,components:n,classNames:d,styles:z,labels:a,formatters:i};return me.createElement(Zx.Provider,{value:xi},me.createElement(n.Root,{rootRef:e.animate?Si:void 0,className:bi,style:Ti,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Gn},me.createElement(n.Months,{className:d[xe.Months],style:z==null?void 0:z[xe.Months]},!e.hideNavigation&&!v&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:z==null?void 0:z[xe.Nav],"aria-label":mn(),onPreviousClick:qr,onNextClick:Ei,previousMonth:de,nextMonth:ye}),le.map((Le,it)=>me.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[xe.Month],style:z==null?void 0:z[xe.Month],key:it,displayIndex:it,calendarMonth:Le},v==="around"&&!e.hideNavigation&&it===0&&me.createElement(n.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:de?void 0:-1,"aria-disabled":de?void 0:!0,"aria-label":ar(de),onClick:qr,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:de?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"right":"left"})),me.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[xe.MonthCaption],style:z==null?void 0:z[xe.MonthCaption],calendarMonth:Le,displayIndex:it},p!=null&&p.startsWith("dropdown")?me.createElement(n.DropdownNav,{className:d[xe.Dropdowns],style:z==null?void 0:z[xe.Dropdowns]},p==="dropdown"||p==="dropdown-months"?me.createElement(n.MonthsDropdown,{className:d[xe.MonthsDropdown],"aria-label":Sn(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:$l(Le.date),options:Vj(Le.date,W,ae,i,l),style:z==null?void 0:z[xe.Dropdown],value:l.getMonth(Le.date)}):me.createElement("span",null,A(Le.date,l)),p==="dropdown"||p==="dropdown-years"?me.createElement(n.YearsDropdown,{className:d[xe.YearsDropdown],"aria-label":fs(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:wi(Le.date),options:Uj(W,ae,i,l,!!e.reverseYears),style:z==null?void 0:z[xe.Dropdown],value:l.getYear(Le.date)}):me.createElement("span",null,q(Le.date,l)),me.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},te(Le.date,l.options,l))):me.createElement(n.CaptionLabel,{className:d[xe.CaptionLabel],role:"status","aria-live":"polite"},te(Le.date,l.options,l))),v==="around"&&!e.hideNavigation&&it===w-1&&me.createElement(n.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:ye?void 0:-1,"aria-disabled":ye?void 0:!0,"aria-label":or(ye),onClick:Ei,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:ye?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"left":"right"})),it===w-1&&v==="after"&&!e.hideNavigation&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:z==null?void 0:z[xe.Nav],"aria-label":mn(),onPreviousClick:qr,onNextClick:Ei,previousMonth:de,nextMonth:ye}),me.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":qe(Le.date,l.options,l)||void 0,className:d[xe.MonthGrid],style:z==null?void 0:z[xe.MonthGrid]},!e.hideWeekdays&&me.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[xe.Weekdays],style:z==null?void 0:z[xe.Weekdays]},Y&&me.createElement(n.WeekNumberHeader,{"aria-label":pa(l.options),className:d[xe.WeekNumberHeader],style:z==null?void 0:z[xe.WeekNumberHeader],scope:"col"},j()),vi.map(De=>me.createElement(n.Weekday,{"aria-label":en(De,l.options,l),className:d[xe.Weekday],key:String(De),style:z==null?void 0:z[xe.Weekday],scope:"col"},O(De,l.options,l)))),me.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[xe.Weeks],style:z==null?void 0:z[xe.Weeks]},Le.weeks.map(De=>me.createElement(n.Week,{className:d[xe.Week],key:De.weekNumber,style:z==null?void 0:z[xe.Week],week:De},Y&&me.createElement(n.WeekNumber,{week:De,style:z==null?void 0:z[xe.WeekNumber],"aria-label":Fl(De.weekNumber,{locale:c}),className:d[xe.WeekNumber],scope:"row",role:"rowheader"},D(De.weekNumber,l)),De.days.map(et=>{const{date:nn}=et,Ue=re(et);if(Ue[It.focused]=!Ue.hidden&&!!(Te!=null&&Te.isEqualTo(et)),Ue[Mr.selected]=(fe==null?void 0:fe(nn))||Ue.selected,T_(Ee)){const{from:lr,to:ms}=Ee;Ue[Mr.range_start]=!!(lr&&ms&&l.isSameDay(nn,lr)),Ue[Mr.range_end]=!!(lr&&ms&&l.isSameDay(nn,ms)),Ue[Mr.range_middle]=Ji(Ee,nn,!0,l)}const ma=jj(Ue,z,e.modifiersStyles),Br=Tj(Ue,d,e.modifiersClassNames),ps=!fo&&!Ue.hidden?Re(nn,Ue,l.options,l):void 0;return me.createElement(n.Day,{key:`${l.format(nn,"yyyy-MM-dd")}_${l.format(et.displayMonth,"yyyy-MM")}`,day:et,modifiers:Ue,className:Br.join(" "),style:ma,role:"gridcell","aria-selected":Ue.selected||void 0,"aria-label":ps,"data-day":l.format(nn,"yyyy-MM-dd"),"data-month":et.outside?l.format(nn,"yyyy-MM"):void 0,"data-selected":Ue.selected||void 0,"data-disabled":Ue.disabled||void 0,"data-hidden":Ue.hidden||void 0,"data-outside":et.outside||void 0,"data-focused":Ue.focused||void 0,"data-today":Ue.today||void 0},!Ue.hidden&&fo?me.createElement(n.DayButton,{className:d[xe.DayButton],style:z==null?void 0:z[xe.DayButton],type:"button",day:et,modifiers:Ue,disabled:Ue.disabled||void 0,tabIndex:gt(et)?0:-1,"aria-label":ve(nn,Ue,l.options,l),onClick:po(et,Ue),onBlur:nt(et,Ue),onFocus:Tt(et,Ue),onKeyDown:Pn(et,Ue),onMouseEnter:tn(et,Ue),onMouseLeave:mo(et,Ue)},C(nn,l.options,l)):!Ue.hidden&&C(et.date,l.options,l))})))))))),e.footer&&me.createElement(n.Footer,{className:d[xe.Footer],style:z==null?void 0:z[xe.Footer],role:"status","aria-live":"polite"},e.footer)))}const bL="./assets/calendar-arrow-BfXL-r2k.png";function TL({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var B;const[a,l]=U.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=U.useState(((B=t==null?void 0:t.start)==null?void 0:B.getFullYear())??new Date().getFullYear()),[p,g]=U.useState(!1),v=U.useMemo(()=>{const M=$=>`${$.getFullYear()}.${String($.getMonth()+1).padStart(2,"0")}.${String($.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${M(a.start)} ~ ${M(a.end)}`:a.start?`${M(a.start)} ~`:""},[a]),w=new Date().getMonth(),T=U.useRef(null);U.useEffect(()=>{if(p&&T.current){const M=T.current.querySelectorAll(".month-box")[w];M&&M.scrollIntoView({block:"start"})}},[p]);const I=U.useRef(null);U.useEffect(()=>{const M=$=>{I.current&&!I.current.contains($.target)&&g(!1)};return p&&document.addEventListener("click",M),()=>{document.removeEventListener("click",M)}},[p]),U.useEffect(()=>{const M=R=>R instanceof Date?new Date(R.getFullYear(),R.getMonth(),R.getDate()).getTime():null,$=(t==null?void 0:t.start)??null,P=(t==null?void 0:t.end)??null;(M(a.start)!==M($)||M(a.end)!==M(P))&&(l({start:$,end:P}),d(($==null?void 0:$.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const N=M=>{if(!a.start||a.start&&a.end){l({start:M,end:null});return}if(a.start&&!a.end)if(M<a.start)l({start:M,end:null});else{const $={start:a.start,end:M};l($),e==null||e($),i&&g(!1)}};return _.jsxs(SL,{ref:I,children:[_.jsx(PL,{}),_.jsx(xL,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(M=>!M)}),p&&_.jsxs(RL,{children:[_.jsxs(CL,{children:[_.jsx(IL,{dir:"prev",onClick:()=>d(M=>M-1)}),_.jsx("span",{children:c}),_.jsx(DL,{dir:"next",onClick:()=>d(M=>M+1)})]}),_.jsx(kL,{children:["일","월","화","수","목","금","토"].map(M=>_.jsx("span",{children:M},M))}),_.jsx(AL,{children:_.jsx(OL,{ref:T,children:Array.from({length:12}).map((M,$)=>{const P=new Date(c,$,1),R=z=>new Date(z.getFullYear(),z.getMonth(),z.getDate()).getTime(),Y=z=>z.getFullYear()===P.getFullYear()&&z.getMonth()===P.getMonth();return _.jsxs(ML,{className:"month-box",children:[_.jsx(NL,{children:String($+1).padStart(2,"0")}),_.jsx(wL,{mode:"single",month:P,selected:void 0,onDayClick:N,showOutsideDays:!1,modifiers:{start:z=>!!a.start&&Y(z)&&R(z)===R(a.start),end:z=>!!a.end&&Y(z)&&R(z)===R(a.end),middle:z=>{if(!a.start||!a.end||!Y(z))return!1;const te=R(z),C=R(a.start),A=R(a.end);return te>C&&te<A}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},$)})})})]})]})}const SL=H.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,xL=H.input`
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
`,AL=H.div`
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
`,RL=H.div`
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
`,CL=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,uA=H.button`
  width: 48px;
  height: 100%;
  background-image: url(${bL});
  background-repeat: no-repeat;
`,IL=H(uA)``,DL=H(uA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,kL=H.div`
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
`,OL=H.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,ML=H.div`
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
`,NL=H.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,PL=i1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,gl="진행 상태 선택",Ku="요청자 선택",Xu="디자이너 선택",Tg={start:null,end:null},VL=t=>t===3?"manager":t===2?"designer":"requester",jL={requester:[gl,"대기","진행중","검수중","완료","취소"],manager:[gl,"대기","진행중","검수중","검수요청","완료","취소"],designer:[gl,"대기","진행중","검수요청","완료","취소"]},LL=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function UL({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=U.useState(Tg),[v,w]=U.useState(gl),[T,I]=U.useState(Ku),[N,B]=U.useState(Xu),M=()=>{w(gl),g(Tg),I(Ku),B(Xu),t(gl),e(Tg),a==null||a(Ku),c==null||c(Xu)},$=VL(d),P=jL[$];return _.jsxs(qL,{children:[_.jsx(TL,{value:p,onApply:R=>{g(R),e(R)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(Sg,{"aria-label":"요청자 선택",value:T,onChange:R=>{I(R.target.value),a==null||a(R.target.value)},children:[_.jsx("option",{value:Ku,children:Ku}),i.map(R=>_.jsx("option",{value:R,children:R},R))]}),_.jsxs(Sg,{"aria-label":"디자이너 선택",value:N,onChange:R=>{const Y=R.target.value;B(Y),c==null||c(Y)},children:[_.jsx("option",{value:Xu,children:Xu}),l.map(R=>_.jsx("option",{value:R,children:R},R))]})]}),_.jsx(Sg,{value:v,onChange:R=>{const Y=R.target.value,z=LL($,Y);w(Y),t(z)},children:P.map(R=>_.jsx("option",{value:R,children:R},R))}),_.jsx(BL,{type:"button",onClick:M,children:"필터 초기화"})]})}const qL=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Sg=H.select`
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
  background-image: url(${Vx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,BL=H.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,zL="./assets/search-icon-g0O6fOpZ.svg";function FL({keyword:t,onKeywordChange:e,onSearch:n}){const i=a=>{e(a),n(a.trim())};return _.jsx($L,{children:_.jsx(HL,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>i(a.target.value),onKeyDown:a=>{a.key==="Escape"&&i("")}})})}const $L=H.div`
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
    background: url(${zL}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`,HL=H.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;function S_({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g,roleNumber:v}){return _.jsxs(GL,{children:[_.jsx(UL,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g,roleNumber:v}),_.jsx(FL,{keyword:i,onKeywordChange:a,onSearch:n})]})}const GL=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`,YL=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],WL=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return YL[i]}return e}).join("");function x_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=WL(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function A_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const QL="진행 상태 선택";function KL({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=U.useState(""),[l,c]=U.useState([]),[d,p]=U.useState("진행 상태 선택"),[g,v]=U.useState({start:null,end:null}),[w,T]=U.useState(""),[I,N]=U.useState("");U.useEffect(()=>{const O=xd(lo,q=>{q&&q.displayName&&a(q.displayName)});return()=>O()},[]),U.useEffect(()=>{if(!i)return;const O=li(Tr(bt,"design_request"),Sr("requester","==",i),m_("design_request_id","desc")),q=Qd(O,k=>{const Pe=k.docs.map(le=>({id:le.id,...le.data()}));c(Pe)});return()=>q()},[i]);const B=O=>v(O),M=O=>p(O),$=O=>N(O),P=O=>O==="검수요청"?"진행중":O,R=O=>new Date(O.getFullYear(),O.getMonth(),O.getDate()),Y=O=>{if(!O)return null;if(typeof O=="object"&&typeof O.toDate=="function")return R(O.toDate());if(O instanceof Date)return R(O);if(typeof O=="number")return R(new Date(O));if(typeof O=="string"){const k=O.replace(/\./g,"-").replace(/\//g,"-").split("-");if(k.length===3){const[le,W,ae]=k.map(Number),de=le>31?le:new Date().getFullYear();return new Date(de,W-1,ae)}if(k.length===2){const[le,W]=k.map(Number),ae=new Date().getFullYear();return new Date(ae,le-1,W)}const Pe=new Date(O);return isNaN(+Pe)?null:R(Pe)}return null},z=U.useMemo(()=>l.map(O=>{const q=P(O.status);return x_({...O,displayStatus:q})}),[l]),te=U.useMemo(()=>{const O=g.start?R(g.start):null,q=g.end?R(g.end):null,k=I.trim();return z.filter(Pe=>{if(d!==QL&&Pe.displayStatus!==d)return!1;if(O&&q){const le=Y(Pe.request_date)||Y(Pe.requested_at)||Y(Pe.requestDate);if(!le||le<O||le>q)return!1}return!!A_(Pe,k)})},[z,d,g,I]),C=async O=>{await oi(Hn(bt,"design_request",O),{status:"완료",requester_review_status:"검수완료"}),c(q=>q.map(k=>k.id===O?{...k,status:"완료",requester_review_status:"검수완료"}:k)),alert("완료 처리되었습니다.")},A=async O=>{const q=Hn(bt,"design_request",O);await oi(q,{requester_edit_state:!0});const k=await g_(q);if(k.exists()){const Pe={id:k.id,...k.data()};e(Pe),t(!0)}},D=O=>{n(O),t(!0)},j=async O=>{await oi(Hn(bt,"design_request",O),{status:"취소"}),c(q=>q.map(k=>k.id===O?{...k,status:"취소"}:k))};return _.jsxs(_.Fragment,{children:[_.jsx(w_,{}),_.jsxs(XL,{children:[_.jsx(S_,{roleNumber:1,onApplyStatus:M,onApplyRange:B,onSearch:$,keyword:w,onKeywordChange:T}),_.jsx(pV,{data:te,onReviewComplete:C,onCancel:j,onEditClick:A,onDetailClick:D})]})]})}const XL=H.div`
  padding: 0 48px;
`;function ZL({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=w=>{if(!w)return"-";if(w.toDate){const T=w.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return w},d=w=>w==="검수중"?"검수요청":w??"대기",p=w=>w,g=d(n.status),v=w=>{w.stopPropagation(),l(e)};return _.jsxs(JL,{isCanceled:e.status==="취소",children:[_.jsx(Qi,{children:t}),_.jsx(Qi,{children:_.jsx(s3,{onClick:v,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Qi,{children:c(e.request_date)}),_.jsx(Qi,{children:e.requester}),_.jsx(e3,{children:c(e.completion_dt)}),_.jsx(t3,{children:c(e.open_dt)}),_.jsx(Qi,{children:e.task_form}),_.jsx(n3,{children:e.task_type}),_.jsx(r3,{children:_.jsxs(a3,{children:[e.emergency?_.jsx(cA,{children:"긴급"}):"",_.jsx(o3,{onClick:v,children:e.requirement})]})}),_.jsx(Qi,{children:_.jsx(l3,{href:e.url,target:"_blank"})}),_.jsx(i3,{children:_.jsx(u3,{onClick:v,children:e.note||""})}),_.jsx(tT,{children:_.jsx(nT,{type:"date",value:n.start_dt??"",onChange:w=>i(e.id,"start_dt",w.target.value),disabled:e.status==="취소"})}),_.jsx(tT,{children:_.jsx(nT,{type:"date",value:n.end_dt??"",onChange:w=>i(e.id,"end_dt",w.target.value),disabled:e.status==="취소"})}),_.jsx(Qi,{children:_.jsx(c3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:w=>i(e.id,"result_url",w.target.value),disabled:e.status==="취소"})}),_.jsx(Qi,{children:_.jsxs("select",{value:g,onChange:w=>i(e.id,"status",p(w.target.value)),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]})}),_.jsx(Qi,{children:_.jsx(hA,{onClick:()=>a(e.id),disabled:e.status==="취소",children:"저장"})})]})}const JL=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${cA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${hA} {
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
`,Qi=H.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }
`,e3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,t3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,n3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,r3=H.td`
  line-height: 15px;
  text-align: left;
`,i3=H.td`
  line-height: 15px;
  padding: 0 12px;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
  text-align: left;
  background-color: #fffff1;

`,tT=H.td`
  padding: 0 6px;
`,s3=H.span`
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
`,a3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,cA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,o3=H.span`
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
`,l3=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${E_}) no-repeat center / contain;
`,u3=H.span`
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
`,nT=H.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,c3=H.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,hA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function h3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(f3,{children:_.jsxs(d3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(In,{children:"번호"}),_.jsx(In,{children:"문서번호"}),_.jsx(In,{children:"요청일"}),_.jsx(In,{children:"요청자"}),_.jsxs(In,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(In,{children:"오픈일"}),_.jsx(In,{children:"업무형태"}),_.jsx(In,{children:"업무타입"}),_.jsx(In,{children:"작업항목"}),_.jsxs(In,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(In,{children:"메모"}),_.jsx(In,{children:"디자인 시작일"}),_.jsx(In,{children:"디자인 종료일"}),_.jsx(In,{children:"산출물 링크"}),_.jsx(In,{children:"진행상태"}),_.jsx(In,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(ZL,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const f3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,d3=H.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,In=H.th`
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
`,p3="진행 상태 선택";function m3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=U.useState([]),[a,l]=U.useState(""),[c,d]=U.useState({}),[p,g]=U.useState("진행 상태 선택"),[v,w]=U.useState({start:null,end:null}),[T,I]=U.useState(""),[N,B]=U.useState("");U.useEffect(()=>{const le=xd(lo,W=>{W!=null&&W.displayName&&l(W.displayName)});return()=>le()},[]),U.useEffect(()=>{if(!a)return;const le=li(Tr(bt,"design_request"),Sr("assigned_designer","==",a),m_("design_request_id","desc")),W=Qd(le,ae=>{const de=ae.docs.map(ye=>({id:ye.id,...ye.data()}));i(de)});return()=>W()},[a]);const M=le=>w(le),$=le=>g(le),P=le=>new Date(le.getFullYear(),le.getMonth(),le.getDate()),R=le=>{if(!le)return null;if(typeof le=="object"&&typeof le.toDate=="function")return P(le.toDate());if(le instanceof Date)return P(le);if(typeof le=="number")return P(new Date(le));if(typeof le=="string"){const ae=le.replace(/\./g,"-").replace(/\//g,"-").split("-");if(ae.length===3){const[ye,L,re]=ae.map(Number),fe=ye>31?ye:new Date().getFullYear();return new Date(fe,L-1,re)}if(ae.length===2){const[ye,L]=ae.map(Number),re=new Date().getFullYear();return new Date(re,ye-1,L)}const de=new Date(le);return isNaN(+de)?null:P(de)}return null},Y=le=>{const W=le.getFullYear(),ae=String(le.getMonth()+1).padStart(2,"0"),de=String(le.getDate()).padStart(2,"0");return`${W}-${ae}-${de}`},z=le=>{if(!le)return"";if(typeof le=="object"&&typeof le.toDate=="function")return Y(le.toDate());if(le instanceof Date)return Y(le);const W=new Date(le);return isNaN(+W)?"":Y(W)},te=U.useMemo(()=>n.map(le=>({...le,designer_start_date:z(le.designer_start_date),designer_end_date:z(le.designer_end_date),result_url:le.result_url??"",status:le.status??"대기"})),[n]),C=le=>le==="검수중"?"검수요청":le??"대기",A=U.useMemo(()=>te.map(le=>{const W=C(le.status);return x_({...le,displayStatus:W})}),[te]),D=U.useMemo(()=>{const le=v.start?P(v.start):null,W=v.end?P(v.end):null;return A.filter(ae=>{let de=!0;if(p&&p!==p3&&C(ae.status)!==p&&(de=!1),de&&le&&W){const ye=R(ae.request_date)||R(ae.requested_at)||R(ae.requestDate);(!ye||ye<le||ye>W)&&(de=!1)}return de&&N&&!A_(ae,N)&&(de=!1),de})},[A,p,v,N]),j=le=>B(le);U.useEffect(()=>{n.length&&d(le=>{const W={...le};return n.forEach(ae=>{W[ae.id]===void 0&&(W[ae.id]={start_dt:z(ae.designer_start_date),end_dt:z(ae.designer_end_date),result_url:ae.result_url||"",status:ae.status||"대기"})}),W})},[n]);const O=(le,W,ae)=>{d(de=>({...de,[le]:{...de[le],[W]:ae}}))},q=le=>{if(!le)return null;const W=new Date(le);return isNaN(+W)?null:_t.fromDate(W)},k=async le=>{const W=c[le];if(!W){alert("변경된 내용이 없습니다.");return}await oi(Hn(bt,"design_request",le),{designer_start_date:q(W.start_dt),designer_end_date:q(W.end_dt),result_url:W.result_url??"",status:W.status??"대기"}),alert("저장되었습니다.")},Pe=le=>{e(le),t(!0)};return _.jsxs(g3,{children:[_.jsx(w_,{}),_.jsxs(y3,{children:[_.jsx(_3,{children:"디자이너 화면"}),_.jsx(S_,{roleNumber:2,onApplyStatus:$,onApplyRange:M,onSearch:j,keyword:T,onKeywordChange:I}),_.jsx(h3,{requests:D,formData:c,onChange:O,onSave:k,onDetailClick:Pe})]})]})}const g3=H.div``,y3=H.div`
  padding: 0 48px;
`,_3=H.h2`
  margin-top: 20px;
`;function v3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d,workHourValue:p,onChangeWorkHour:g,onSaveWorkHour:v,onStartEditWorkHour:w,onCancelEditWorkHour:T}){const N=(R=>R==="검수요청"?"검수중":R==="검수중"?"검수요청":R)(e.status),B=R=>{if(!R)return"-";if(R.toDate){const Y=R.toDate();return`${Y.getMonth()+1}/${Y.getDate()}`}return R},M=R=>{R.stopPropagation(),d(e)},$=!!e.work_hour_edit_state,P=U.useCallback(R=>{const Y=R.relatedTarget;(!Y||!R.currentTarget.contains(Y))&&T()},[T]);return _.jsxs(E3,{isCanceled:e.status==="취소",children:[_.jsx(tr,{children:t}),_.jsx(tr,{children:_.jsx(A3,{onClick:M,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(tr,{children:B(e.request_date)}),_.jsx(tr,{children:e.requester}),_.jsx(w3,{children:B(e.completion_dt)}),_.jsx(b3,{children:B(e.open_dt)}),_.jsx(tr,{children:e.task_form}),_.jsx(T3,{children:e.task_type}),_.jsx(S3,{children:_.jsxs(R3,{children:[e.emergency?_.jsx(fA,{children:"긴급"}):"",_.jsx(C3,{onClick:M,children:e.requirement})]})}),_.jsx(tr,{children:_.jsx(rT,{href:e.url,target:"_blank"})}),_.jsx(x3,{children:_.jsx(I3,{onClick:M,children:e.note||""})}),_.jsx(tr,{children:_.jsx(D3,{status:N,children:N})}),_.jsx(tr,{children:e.result_url?_.jsx(rT,{href:e.result_url,target:"_blank"}):""}),_.jsx(tr,{children:B(e.designer_start_date)}),_.jsx(tr,{children:B(e.designer_end_date)}),_.jsxs(tr,{children:[_.jsxs(k3,{value:i,onChange:R=>a(R.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(R=>_.jsx("option",{value:R.name,children:R.name},R.id))]}),_.jsx(dA,{onClick:l,disabled:e.status==="취소",children:"배정"})]}),_.jsx(tr,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(pA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(O3,{children:"검수완료"}):""}),_.jsx(tr,{children:$?_.jsxs(V3,{tabIndex:-1,onBlur:P,children:[_.jsx(M3,{type:"text",placeholder:"공수 입력",value:p,onChange:R=>g(R.target.value),onClick:R=>R.stopPropagation(),disabled:e.status==="취소",autoFocus:!0}),_.jsx(N3,{type:"button",onClick:R=>{R.stopPropagation(),v()},disabled:e.status==="취소",children:"수정"})]}):e.out_work_hour!=null?_.jsx(P3,{tabIndex:0,onClick:R=>{R.stopPropagation(),w()},onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),w())},children:e.out_work_hour}):null})]})}const E3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${fA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${pA}, ${dA} {
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
`,tr=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,w3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,b3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,T3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,S3=H.td`
  line-height: 15px;
  text-align: left;
`,x3=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,A3=H.span`
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
`,R3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,fA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,C3=H.span`
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
`,rT=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${E_}) no-repeat center / contain;
`,I3=H.span`
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
`,D3=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,dA=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,k3=H.select`
  width: 90px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,pA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,O3=H.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,M3=H.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`,N3=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,P3=H.span`
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
`,V3=H.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function j3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c,workHours:d,onChangeWorkHour:p,onSaveWorkHour:g,onStartEditWorkHour:v,onCancelEditWorkHour:w}){return _.jsx(L3,{children:_.jsxs(U3,{children:[_.jsx(q3,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"150px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"110px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(un,{children:"번호"}),_.jsx(un,{children:"문서번호"}),_.jsx(un,{children:"요청일"}),_.jsx(un,{children:"요청자"}),_.jsxs(un,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(un,{children:"오픈일"}),_.jsx(un,{children:"업무형태"}),_.jsx(un,{children:"업무타입"}),_.jsx(un,{children:"작업항목"}),_.jsxs(un,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(un,{children:"메모"}),_.jsx(un,{children:"진행상태"}),_.jsxs(un,{children:["산출물",_.jsx("br",{}),"URL"]}),_.jsxs(un,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(un,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(un,{children:"디자이너 배정"}),_.jsx(un,{children:"검수"}),_.jsx(un,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((T,I)=>_.jsx(v3,{index:I+1,item:T,designerList:e,selectedDesigner:n[T.id]||"",onDesignerSelect:N=>i(T.id,N),onAssignDesigner:()=>a(T.id),onSendToRequester:()=>l(T.id),onDetailClick:c,workHourValue:d[T.id]??"",onChangeWorkHour:N=>p(T.id,N),onSaveWorkHour:()=>g(T.id),onStartEditWorkHour:()=>v(T.id),onCancelEditWorkHour:()=>w(T.id)},T.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:18,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const L3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,U3=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,q3=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,un=H.th`
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

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`,iT="진행 상태 선택",sT="요청자 선택",aT="디자이너 선택";function B3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=U.useState([]),[a,l]=U.useState([]),[c,d]=U.useState({}),[p,g]=U.useState({}),[v,w]=U.useState(iT),[T,I]=U.useState({start:null,end:null}),[N,B]=U.useState(""),[M,$]=U.useState(""),[P,R]=U.useState([]),[Y,z]=U.useState(sT),[te,C]=U.useState([]),[A,D]=U.useState(aT);U.useEffect(()=>{const ce=li(Tr(bt,"design_request"),m_("design_request_id","desc")),be=Qd(ce,ve=>{const Re=ve.docs.map(qe=>({id:qe.id,...qe.data()}));i(Re)});return()=>be()},[]),U.useEffect(()=>{n.length&&d(ce=>{const be={...ce};return n.forEach(ve=>{be[ve.id]===void 0&&(be[ve.id]=ve.assigned_designer??"")}),be})},[n]),U.useEffect(()=>{n.length&&g(ce=>{const be={...ce};return n.forEach(ve=>{be[ve.id]===void 0&&(be[ve.id]=ve.out_work_hour!=null?String(ve.out_work_hour):"")}),be})},[n]),U.useEffect(()=>{(async()=>{const be=li(Tr(bt,"users"),Sr("role","==",2)),Re=(await dc(be)).docs.map(qe=>({id:qe.id,...qe.data()}));l(Re),C(Re.map(qe=>qe.name).filter(Boolean))})()},[]);const j=(ce,be)=>{d(ve=>({...ve,[ce]:be}))},O=async ce=>{const be=c[ce];if(!be){alert("디자이너를 선택하세요.");return}const ve=Hn(bt,"design_request",ce);await oi(ve,{assigned_designer:be}),alert("디자이너가 배정되었습니다!"),i(Re=>Re.map(qe=>qe.id===ce?{...qe,assigned_designer:be}:qe))},q=async ce=>{await oi(Hn(bt,"design_request",ce),{manager_review_status:"검수완료",status:"검수중"}),i(be=>be.map(ve=>ve.id===ce?{...ve,manager_review_status:"검수완료",status:"검수중"}:ve)),alert("요청자에게 전달되었습니다.")};U.useEffect(()=>{(async()=>{const ce=li(Tr(bt,"users"),Sr("role","==",1)),ve=(await dc(ce)).docs.map(Re=>Re.data().name).filter(Boolean);R(ve)})()},[]);const k=ce=>{e(ce),t(!0)},Pe=ce=>I(ce),le=ce=>w(ce),W=ce=>$(ce.trim()),ae=ce=>z(ce),de=ce=>D(ce),ye=ce=>new Date(ce.getFullYear(),ce.getMonth(),ce.getDate()),L=ce=>{if(!ce)return null;if(typeof ce=="object"&&typeof ce.toDate=="function")return ye(ce.toDate());if(ce instanceof Date)return ye(ce);if(typeof ce=="number")return ye(new Date(ce));if(typeof ce=="string"){const ve=ce.replace(/\./g,"-").replace(/\//g,"-").split("-");if(ve.length===3){const[qe,Sn,mn]=ve.map(Number),ar=qe>31?qe:new Date().getFullYear();return new Date(ar,Sn-1,mn)}if(ve.length===2){const[qe,Sn]=ve.map(Number),mn=new Date().getFullYear();return new Date(mn,qe-1,Sn)}const Re=new Date(ce);return isNaN(+Re)?null:ye(Re)}return null},re=ce=>ce==="검수요청"?"검수중":ce==="검수중"?"검수요청":ce??"대기",fe=U.useMemo(()=>n.map(ce=>{const be=re(ce.status);return x_({...ce,displayStatus:be})}),[n]),he=U.useMemo(()=>{const ce=T.start?ye(T.start):null,be=T.end?ye(T.end):null;return fe.filter(ve=>{let Re=!0;if(v!==iT&&ve.status!==v&&(Re=!1),Re&&Y!==sT&&ve.requester!==Y&&(Re=!1),Re&&A!==aT&&ve.assigned_designer!==A&&(Re=!1),Re&&ce&&be){const qe=L(ve.request_date)||L(ve.requested_at)||L(ve.requestDate);(!qe||qe<ce||qe>be)&&(Re=!1)}return Re&&M&&!A_(ve,M)&&(Re=!1),Re})},[fe,v,Y,A,T,M]),Ee=(ce,be)=>{const ve=be.replace(/[^0-9.]/g,"");g(Re=>({...Re,[ce]:ve}))},Me=async ce=>{const be=n.find(ve=>ve.id===ce);await oi(Hn(bt,"design_request",ce),{work_hour_edit_state:!0}),i(ve=>ve.map(Re=>Re.id===ce?{...Re,work_hour_edit_state:!0}:Re)),g(ve=>({...ve,[ce]:ve[ce]!==void 0&&ve[ce]!==""?ve[ce]:(be==null?void 0:be.out_work_hour)!=null?String(be.out_work_hour):""}))},Te=async ce=>{const be=n.find(or=>or.id===ce);if(!be)return;const ve=(p[ce]??"").trim(),Re=Number(ve.replace(",","."));if(!Number.isFinite(Re)||Re<0){alert("유효한 공수를 입력하세요.");return}const qe=li(Tr(bt,"task_work_hour"),Sr("task_form","==",be.task_form),Sr("task_type","==",be.task_type)),Sn=await dc(qe);let mn=1;if(!Sn.empty){const or=Sn.docs[0].data();mn=Number(or.task_work_times)||1}const ar=Number((Re*mn).toFixed(2));await oi(Hn(bt,"design_request",ce),{out_work_hour:Re,in_work_hour:ar,work_hour_edit_state:!1}),i(or=>or.map(en=>en.id===ce?{...en,out_work_hour:Re,in_work_hour:ar,work_hour_edit_state:!1}:en)),alert("공수 수정 완료")},gt=async ce=>{await oi(Hn(bt,"design_request",ce),{work_hour_edit_state:!1}),i(be=>be.map(ve=>ve.id===ce?{...ve,work_hour_edit_state:!1}:ve))};return _.jsxs(z3,{children:[_.jsx(w_,{}),_.jsxs(F3,{children:[_.jsx($3,{children:"매니저 요청리스트"}),_.jsx(S_,{roleNumber:3,onApplyStatus:le,onApplyRange:Pe,onSearch:W,keyword:N,onKeywordChange:B,isManager:!0,requesterOptions:P,onApplyRequester:ae,designerOptions:te,onApplyDesigner:de}),_.jsx(j3,{data:he,designerList:a,selectedDesigners:c,designerSelect:j,assignDesigner:O,sendToRequester:q,onDetailClick:k,workHours:p,onChangeWorkHour:Ee,onSaveWorkHour:Te,onStartEditWorkHour:Me,onCancelEditWorkHour:gt})]})]})}const z3=H.div``,F3=H.div`
  padding: 0 48px;
`,$3=H.h2`
  margin-top: 20px;
`;function H3({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(KL,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(m3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(B3,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(G3,{children:a()})}const G3=H.main``,Y3="./assets/aside-logo-DoEwMgfJ.svg",W3="./assets/myrequest-icon-DhmqrZY6.svg";function Q3({item:t}){return _.jsxs(Z3,{status:t.status,children:[_.jsx(J3,{children:t.status}),_.jsx(eU,{status:t.status,children:t.count})]})}const K3=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},X3=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},Z3=H.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>K3(t,e)};
`,J3=H.span`
  font-size: 16px;
  font-weight: 500;
`,eU=H.span`
  position: relative;
  width: 10px;
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
    background-color: ${({status:t,theme:e})=>X3(t,e)};
  }
`,At={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},tU=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([At.WAIT])},{status:"진행중",count:n([At.PROG,At.REQ])},{status:"검수중",count:n([At.REV])},{status:"완료",count:n([At.DONE])},{status:"취소",count:n([At.CAN])}];case 2:return[{status:"대기",count:n([At.WAIT])},{status:"진행중",count:n([At.PROG])},{status:"검수요청",count:n([At.REQ,At.REV])},{status:"완료",count:n([At.DONE])},{status:"취소",count:n([At.CAN])}];case 3:return[{status:"대기",count:n([At.WAIT])},{status:"진행중",count:n([At.PROG])},{status:"검수중",count:n([At.REQ])},{status:"검수요청",count:n([At.REV])},{status:"완료",count:n([At.DONE])},{status:"취소",count:n([At.CAN])}];default:return[{status:"대기",count:n([At.WAIT])},{status:"진행중",count:n([At.PROG])},{status:"검수요청",count:n([At.REQ])},{status:"검수중",count:n([At.REV])},{status:"완료",count:n([At.DONE])},{status:"취소",count:n([At.CAN])}]}},nU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function rU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=tU(e,t);return _.jsxs(iU,{children:[_.jsxs(sU,{children:[_.jsx(aU,{src:Y3}),_.jsx(oU,{children:"업무 관리시스템"})]}),e===1&&_.jsx(lU,{children:_.jsx(uU,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(cU,{children:[_.jsxs(hU,{children:[_.jsx(fU,{src:W3}),_.jsx(dU,{children:nU(e,n)})]}),_.jsx(pU,{children:a.map(l=>_.jsx(Q3,{item:l},l.status))})]})]})}const iU=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,sU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,aU=H.img`
  margin-right: 8px;
`,oU=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,lU=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,uU=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,cU=H.div`
  padding: 0 24px;
`,hU=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,fU=H.img``,dU=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,pU=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function mU({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(gU,{isVisible:t,onClick:e}),_.jsx(yU,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const gU=H.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,yU=H.div`
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
`,mA="./assets/requestformexit-button-BcAG546a.svg",_U="./assets/checkbox-checked-eOVFoR8b.svg",Sf={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function oT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=U.useState(Sf),[d,p]=U.useState([]),g=(P,R)=>{c(Y=>({...Y,[P]:R}))},v=()=>p(P=>[...P,{...Sf}]),w=P=>p(R=>R.filter((Y,z)=>z!==P)),T=(P,R,Y)=>p(z=>{const te=[...z];return te[P]={...te[P],[R]:Y},te}),I=P=>P?_t.fromDate(new Date(P)):null,N=async()=>{const P=new Date,R=P.getFullYear().toString().slice(2),Y=(P.getMonth()+1).toString().padStart(2,"0"),z=li(Tr(bt,"design_request"),Sr("design_request_id",">=",`H${R}${Y}000`),Sr("design_request_id","<",`H${R}${Y}999`)),te=await dc(z);return{year:R,month:Y,base:te.size}},B=(P,R,Y)=>`H${P}${R}${Y.toString().padStart(3,"0")}`,M=async(P,R)=>{if(!P||!R)return{base:null,times:null};const Y=li(Tr(bt,"task_work_hour"),Sr("task_form","==",P),Sr("task_type","==",R)),z=await dc(Y);if(z.empty)return{base:null,times:null};const te=z.docs[0].data(),C=typeof te.task_work_hour=="number"?te.task_work_hour:null,A=typeof te.task_work_times=="number"?te.task_work_times:null;return{base:C,times:A}},$=async P=>{if(P.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await oi(Hn(bt,"design_request",e.id),{completion_dt:I(l.completion_dt),open_dt:I(l.open_dt),task_form:l.task_form,task_type:l.task_type,requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:Bb()}),alert("요청이 수정되었습니다!"),i();return}const R=[l,...d],Y=R.findIndex(j=>!j.requirement);if(Y!==-1){alert(`${Y+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:z,month:te,base:C}=await N();let A=C;const D=new Date;for(const j of R){A+=1;const O=B(z,te,A),{base:q,times:k}=await M(j.task_form,j.task_type),Pe=q!=null&&k!=null?Number((q*k).toFixed(2)):null;await k4(Tr(bt,"design_request"),{design_request_id:O,request_date:I(D.toISOString()),requester:t,completion_dt:I(j.completion_dt),open_dt:I(j.open_dt),task_form:j.task_form,task_type:j.task_type,requirement:j.requirement,url:j.url,note:j.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:j.emergency,requester_edit_state:!1,designer_edit_state:!1,in_work_hour:Pe,out_work_hour:q,work_hour_edit_state:!1,created_at:Bb(),updated_at:null,delete_at:null})}alert(`${R.length}건이 등록되었습니다!`),p([]),c(Sf),i()};return U.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),U.useEffect(()=>{!n||a||(c(Sf),p([]))},[n]),_.jsxs(_.Fragment,{children:[_.jsxs(EU,{children:[_.jsx(wU,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(bU,{type:"button",onClick:i})]}),_.jsxs(vU,{onSubmit:$,children:[_.jsxs(TU,{children:[!a&&d.map((P,R)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",R+1]}),_.jsx("button",{type:"button",onClick:()=>w(R),children:"삭제"})]}),_.jsxs(lT,{children:[_.jsx(uT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(cn,{children:"문서번호"}),_.jsx(hn,{})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`completion_dt_ex_${R}`,children:"완료 요청일"})}),_.jsx(hn,{children:_.jsx(xf,{id:`completion_dt_ex_${R}`,type:"date",value:P.completion_dt||"",onChange:Y=>T(R,"completion_dt",Y.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`open_dt_ex_${R}`,children:"오픈일"})}),_.jsx(hn,{children:_.jsx(xf,{id:`open_dt_ex_${R}`,type:"date",value:P.open_dt||"",onChange:Y=>T(R,"open_dt",Y.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`task_form_ex_${R}`,children:"업무 형태"})}),_.jsx(hn,{children:_.jsxs(Af,{id:`task_form_ex_${R}`,value:P.task_form||"GHS",onChange:Y=>T(R,"task_form",Y.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`task_type_ex_${R}`,children:"업무 유형"})}),_.jsx(hn,{children:_.jsxs(Af,{id:`task_type_ex_${R}`,value:P.task_type||"프론트테마",onChange:Y=>T(R,"task_type",Y.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`requirement_ex_${R}`,children:"작업 항목"})}),_.jsx(hn,{children:_.jsx(cT,{id:`requirement_ex_${R}`,type:"text",value:P.requirement||"",onChange:Y=>T(R,"requirement",Y.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`emergency_ex_${R}`,children:"긴급 일정"})}),_.jsx(hn,{children:_.jsx(dT,{children:_.jsxs(pT,{htmlFor:`emergency_ex_${R}`,children:[_.jsx(mT,{id:`emergency_ex_${R}`,type:"checkbox",checked:!!P.emergency,onChange:Y=>T(R,"emergency",Y.target.checked)}),_.jsx(gT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`url_ex_${R}`,children:"요청서 URL"})}),_.jsx(hn,{children:_.jsx(hT,{id:`url_ex_${R}`,value:P.url||"",onChange:Y=>T(R,"url",Y.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:`note_ex_${R}`,children:"메모"})}),_.jsx(hn,{children:_.jsx(fT,{id:`note_ex_${R}`,rows:4,value:P.note||"",onChange:Y=>T(R,"note",Y.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},R)),_.jsxs(lT,{children:[_.jsx(uT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(cn,{children:"문서번호"}),_.jsx(hn,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(hn,{children:_.jsx(xf,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:P=>g("completion_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(hn,{children:_.jsx(xf,{type:"date",id:"open_dt",value:l.open_dt,onChange:P=>g("open_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx(hn,{children:_.jsxs(Af,{id:"task_form",value:l.task_form,onChange:P=>g("task_form",P.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(hn,{children:_.jsxs(Af,{id:"task_type",value:l.task_type,onChange:P=>g("task_type",P.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(hn,{children:_.jsx(cT,{type:"text",id:"requirement",value:l.requirement,onChange:P=>g("requirement",P.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(hn,{children:_.jsx(dT,{children:_.jsxs(pT,{htmlFor:"emergency",children:[_.jsx(mT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:P=>g("emergency",P.target.checked)}),_.jsx(gT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(hn,{children:_.jsx(hT,{id:"url",value:l.url,onChange:P=>g("url",P.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(cn,{children:_.jsx(Dn,{htmlFor:"note",children:"메모"})}),_.jsx(hn,{children:_.jsx(fT,{id:"note",rows:4,value:l.note,onChange:P=>g("note",P.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(SU,{children:[_.jsx(xU,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(AU,{type:"button",onClick:v,children:"추가 등록하기"})]})]})]})}const vU=H.form`
  font-family: 'Pretendard';
`,EU=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,wU=H.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,bU=H.button`
  width: 24px;
  height: 24px;
  background: url(${mA}) no-repeat center;
  background-size: contain;
`,lT=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,TU=H.div`
  max-height: 690px;
  overflow: auto;
`,uT=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,cn=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,hn=H.td`
  padding: 12px 24px;
  border-right: none;
`,Dn=H.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,xf=H.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,cT=H.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,hT=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,fT=H.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,dT=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,pT=H.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,mT=H.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${_U}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,gT=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,Af=H.select`
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
  background-image: url(${Vx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,SU=H.div`
  margin-top: 24px;
  text-align: center;
`,xU=H.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,AU=H.button`
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
`;function RU({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(CU,{children:[_.jsx(IU,{children:"디자인 요청 상세"}),_.jsx(DU,{type:"button",onClick:e})]}),_.jsxs(kU,{children:[_.jsx(OU,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(ri,{children:"문서번호"}),_.jsx(Ha,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"요청일"}),_.jsx(Ha,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"완료 요청일"}),_.jsx(MU,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"오픈일"}),_.jsx(NU,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"업무 형태"}),_.jsx(Ha,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"업무 유형"}),_.jsx(Ha,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"작업 항목"}),_.jsx(Ha,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"긴급 일정"}),_.jsx(Ha,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"요청서 URL"}),_.jsx(Ha,{children:t!=null&&t.url?_.jsx(VU,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(ri,{children:"메모"}),_.jsx(PU,{children:_.jsx(jU,{children:t.note})})]})]})]})]})}const CU=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,IU=H.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,DU=H.button`
  width: 24px;
  height: 24px;
  background: url(${mA}) no-repeat center;
  background-size: contain;
`,kU=H.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,OU=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,ri=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Ha=H.td`
  padding: 12px 24px;
  border-right: none;
`,MU=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,NU=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,PU=H.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,VU=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,jU=H.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function LU(){const[t,e]=U.useState(0),[n,i]=U.useState([]),[a,l]=U.useState(""),[c,d]=U.useState(!1),[p,g]=U.useState(void 0),[v,w]=U.useState(null);U.useEffect(()=>{const N=xd(lo,async B=>{if(B){l(B.displayName||"");const M=await g_(Hn(bt,"users",B.uid));if(M.exists()){const P=M.data().role,R=B.displayName;e(P);let Y;P===1?Y=li(Tr(bt,"design_request"),Sr("requester","==",R)):P===2?Y=li(Tr(bt,"design_request"),Sr("assigned_designer","==",R)):Y=Tr(bt,"design_request"),Qd(Y,z=>{const te=z.docs.map(C=>{const A=C.data();return{id:C.id,status:A.status??"대기중"}});i(te)})}}else e(0),l(""),i([])});return()=>N()},[]);const T=()=>{g(void 0),w("create"),d(!0)},I=()=>{d(!1),g(void 0)};return _.jsxs(UU,{children:[_.jsx(rU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(qU,{children:[_.jsx(Y4,{}),_.jsx(H3,{userRole:t,setIsDrawerOpen:d,setEditData:N=>{g(N),w("edit")},setDetailData:N=>{g(N),w("detail")}})]}),_.jsxs(mU,{isOpen:c,onClose:I,children:[v==="create"&&_.jsx(oT,{userName:a,isDrawerOpen:c,onClose:I}),v==="edit"&&p&&_.jsx(oT,{userName:a,isDrawerOpen:c,editData:p,onClose:I}),v==="detail"&&p&&_.jsx(RU,{data:p,onClose:I})]})]})}const UU=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,qU=H.div`
  flex: 1;
`;function BU(){const[t,e]=U.useState(""),[n,i]=U.useState(""),[a,l]=U.useState(""),[c,d]=U.useState(""),p=kc(),g=async()=>{if(a!==c){alert("비밀번호가 일치하지 않습니다.");return}tM(lo,n,a).then(async v=>{const w=v.user;await iM(w,{displayName:t}),await D4(Hn(bt,"users",w.uid),{name:t,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),p("/")}).catch(v=>{alert("회원가입 중 오류 발생: "+v.message)})};return _.jsx(zU,{children:_.jsxs(FU,{children:[_.jsxs($U,{children:[_.jsx(HU,{children:"PDMS"}),_.jsx(GU,{children:"Pushcomz Design Management System"})]}),_.jsx(YU,{children:_.jsx(WU,{src:kx})}),_.jsxs(QU,{children:[_.jsx(KU,{type:"text",value:t,onChange:v=>e(v.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(XU,{type:"text",value:n,onChange:v=>i(v.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(ZU,{type:"password",value:a,onChange:v=>l(v.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(JU,{type:"password",value:c,onChange:v=>d(v.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(e9,{onClick:g,children:"등록하기"})]})})}const zU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,FU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,$U=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,HU=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,GU=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,YU=H.div`
  margin-right: auto;
`,WU=H.img`
  
`,QU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,KU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,XU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,ZU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,JU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,e9=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function t9(){const[t,e]=U.useState(!1);return _.jsx(cI,{basename:"/pdms-test",children:_.jsxs(BC,{children:[_.jsx(Rf,{path:"/",element:_.jsx(M4,{onLoginSuccess:()=>e(!0)})}),_.jsx(Rf,{path:"/dashboard",element:t?_.jsx(LU,{}):_.jsx(UC,{to:"/"})}),_.jsx(Rf,{path:"/signup",element:_.jsx(BU,{})})]})})}const n9="/assets/Pretendard-Bold-C0IAtCzs.woff2",r9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",i9="/assets/Pretendard-Medium-BCuOcOjL.woff2",s9="/assets/Pretendard-Regular-BnvhP503.woff2",a9=i1`
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
    src: url(${n9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${r9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${i9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${s9}) format('woff2');
    font-weight: 400;
  }

`,o9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},l9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},u9={colors:o9,mixin:l9};KR.createRoot(document.getElementById("root")).render(_.jsx(U.StrictMode,{children:_.jsxs(_D,{theme:u9,children:[_.jsx(t9,{}),_.jsx(a9,{})]})}));
