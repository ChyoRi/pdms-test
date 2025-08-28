(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function BR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xm={exports:{}},Hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE;function zR(){if(qE)return Hu;qE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Hu.Fragment=e,Hu.jsx=n,Hu.jsxs=n,Hu}var BE;function FR(){return BE||(BE=1,Xm.exports=zR()),Xm.exports}var _=FR(),Zm={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zE;function $R(){if(zE)return qe;zE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function M(j,ne,he){this.props=j,this.context=ne,this.refs=B,this.updater=he||C}M.prototype.isReactComponent={},M.prototype.setState=function(j,ne){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,ne,"setState")},M.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function F(){}F.prototype=M.prototype;function $(j,ne,he){this.props=j,this.context=ne,this.refs=B,this.updater=he||C}var P=$.prototype=new F;P.constructor=$,O(P,M.prototype),P.isPureReactComponent=!0;var H=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function R(j,ne,he,ce,ve,Ie){return he=Ie.ref,{$$typeof:t,type:j,key:ne,ref:he!==void 0?he:null,props:Ie}}function A(j,ne){return R(j.type,ne,void 0,void 0,void 0,j.props)}function I(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function L(j){var ne={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(he){return ne[he]})}var k=/\/+/g;function U(j,ne){return typeof j=="object"&&j!==null&&j.key!=null?L(""+j.key):ne.toString(36)}function D(){}function Ne(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(D,D):(j.status="pending",j.then(function(ne){j.status==="pending"&&(j.status="fulfilled",j.value=ne)},function(ne){j.status==="pending"&&(j.status="rejected",j.reason=ne)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function oe(j,ne,he,ce,ve){var Ie=typeof j;(Ie==="undefined"||Ie==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(Ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case t:case e:be=!0;break;case v:return be=j._init,oe(be(j._payload),ne,he,ce,ve)}}if(be)return ve=ve(j),be=ce===""?"."+U(j,0):ce,H(ve)?(he="",be!=null&&(he=be.replace(k,"$&/")+"/"),oe(ve,ne,he,"",function(Tt){return Tt})):ve!=null&&(I(ve)&&(ve=A(ve,he+(ve.key==null||j&&j.key===ve.key?"":(""+ve.key).replace(k,"$&/")+"/")+be)),ne.push(ve)),1;be=0;var yt=ce===""?".":ce+":";if(H(j))for(var $e=0;$e<j.length;$e++)ce=j[$e],Ie=yt+U(ce,$e),be+=oe(ce,ne,he,Ie,ve);else if($e=T(j),typeof $e=="function")for(j=$e.call(j),$e=0;!(ce=j.next()).done;)ce=ce.value,Ie=yt+U(ce,$e++),be+=oe(ce,ne,he,Ie,ve);else if(Ie==="object"){if(typeof j.then=="function")return oe(Ne(j),ne,he,ce,ve);throw ne=String(j),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return be}function W(j,ne,he){if(j==null)return j;var ce=[],ve=0;return oe(j,ce,"","",function(Ie){return ne.call(he,Ie,ve++)}),ce}function ae(j){if(j._status===-1){var ne=j._result;ne=ne(),ne.then(function(he){(j._status===0||j._status===-1)&&(j._status=1,j._result=he)},function(he){(j._status===0||j._status===-1)&&(j._status=2,j._result=he)}),j._status===-1&&(j._status=0,j._result=ne)}if(j._status===1)return j._result.default;throw j._result}var fe=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function _e(){}return qe.Children={map:W,forEach:function(j,ne,he){W(j,function(){ne.apply(this,arguments)},he)},count:function(j){var ne=0;return W(j,function(){ne++}),ne},toArray:function(j){return W(j,function(ne){return ne})||[]},only:function(j){if(!I(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},qe.Component=M,qe.Fragment=n,qe.Profiler=a,qe.PureComponent=$,qe.StrictMode=i,qe.Suspense=p,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,qe.__COMPILER_RUNTIME={__proto__:null,c:function(j){return N.H.useMemoCache(j)}},qe.cache=function(j){return function(){return j.apply(null,arguments)}},qe.cloneElement=function(j,ne,he){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var ce=O({},j.props),ve=j.key,Ie=void 0;if(ne!=null)for(be in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(ve=""+ne.key),ne)!Z.call(ne,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&ne.ref===void 0||(ce[be]=ne[be]);var be=arguments.length-2;if(be===1)ce.children=he;else if(1<be){for(var yt=Array(be),$e=0;$e<be;$e++)yt[$e]=arguments[$e+2];ce.children=yt}return R(j.type,ve,void 0,void 0,Ie,ce)},qe.createContext=function(j){return j={$$typeof:c,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:l,_context:j},j},qe.createElement=function(j,ne,he){var ce,ve={},Ie=null;if(ne!=null)for(ce in ne.key!==void 0&&(Ie=""+ne.key),ne)Z.call(ne,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(ve[ce]=ne[ce]);var be=arguments.length-2;if(be===1)ve.children=he;else if(1<be){for(var yt=Array(be),$e=0;$e<be;$e++)yt[$e]=arguments[$e+2];ve.children=yt}if(j&&j.defaultProps)for(ce in be=j.defaultProps,be)ve[ce]===void 0&&(ve[ce]=be[ce]);return R(j,Ie,void 0,void 0,null,ve)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(j){return{$$typeof:d,render:j}},qe.isValidElement=I,qe.lazy=function(j){return{$$typeof:v,_payload:{_status:-1,_result:j},_init:ae}},qe.memo=function(j,ne){return{$$typeof:g,type:j,compare:ne===void 0?null:ne}},qe.startTransition=function(j){var ne=N.T,he={};N.T=he;try{var ce=j(),ve=N.S;ve!==null&&ve(he,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(_e,fe)}catch(Ie){fe(Ie)}finally{N.T=ne}},qe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},qe.use=function(j){return N.H.use(j)},qe.useActionState=function(j,ne,he){return N.H.useActionState(j,ne,he)},qe.useCallback=function(j,ne){return N.H.useCallback(j,ne)},qe.useContext=function(j){return N.H.useContext(j)},qe.useDebugValue=function(){},qe.useDeferredValue=function(j,ne){return N.H.useDeferredValue(j,ne)},qe.useEffect=function(j,ne,he){var ce=N.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ce.useEffect(j,ne)},qe.useId=function(){return N.H.useId()},qe.useImperativeHandle=function(j,ne,he){return N.H.useImperativeHandle(j,ne,he)},qe.useInsertionEffect=function(j,ne){return N.H.useInsertionEffect(j,ne)},qe.useLayoutEffect=function(j,ne){return N.H.useLayoutEffect(j,ne)},qe.useMemo=function(j,ne){return N.H.useMemo(j,ne)},qe.useOptimistic=function(j,ne){return N.H.useOptimistic(j,ne)},qe.useReducer=function(j,ne,he){return N.H.useReducer(j,ne,he)},qe.useRef=function(j){return N.H.useRef(j)},qe.useState=function(j){return N.H.useState(j)},qe.useSyncExternalStore=function(j,ne,he){return N.H.useSyncExternalStore(j,ne,he)},qe.useTransition=function(){return N.H.useTransition()},qe.version="19.1.0",qe}var FE;function py(){return FE||(FE=1,Zm.exports=$R()),Zm.exports}var q=py();const me=BR(q);var Jm={exports:{}},Gu={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function HR(){return $E||($E=1,function(t){function e(W,ae){var fe=W.length;W.push(ae);e:for(;0<fe;){var _e=fe-1>>>1,j=W[_e];if(0<a(j,ae))W[_e]=ae,W[fe]=j,fe=_e;else break e}}function n(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var ae=W[0],fe=W.pop();if(fe!==ae){W[0]=fe;e:for(var _e=0,j=W.length,ne=j>>>1;_e<ne;){var he=2*(_e+1)-1,ce=W[he],ve=he+1,Ie=W[ve];if(0>a(ce,fe))ve<j&&0>a(Ie,ce)?(W[_e]=Ie,W[ve]=fe,_e=ve):(W[_e]=ce,W[he]=fe,_e=he);else if(ve<j&&0>a(Ie,fe))W[_e]=Ie,W[ve]=fe,_e=ve;else break e}}return ae}function a(W,ae){var fe=W.sortIndex-ae.sortIndex;return fe!==0?fe:W.id-ae.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,w=null,T=3,C=!1,O=!1,B=!1,M=!1,F=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function H(W){for(var ae=n(g);ae!==null;){if(ae.callback===null)i(g);else if(ae.startTime<=W)i(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(g)}}function N(W){if(B=!1,H(W),!O)if(n(p)!==null)O=!0,Z||(Z=!0,U());else{var ae=n(g);ae!==null&&oe(N,ae.startTime-W)}}var Z=!1,R=-1,A=5,I=-1;function L(){return M?!0:!(t.unstable_now()-I<A)}function k(){if(M=!1,Z){var W=t.unstable_now();I=W;var ae=!0;try{e:{O=!1,B&&(B=!1,$(R),R=-1),C=!0;var fe=T;try{t:{for(H(W),w=n(p);w!==null&&!(w.expirationTime>W&&L());){var _e=w.callback;if(typeof _e=="function"){w.callback=null,T=w.priorityLevel;var j=_e(w.expirationTime<=W);if(W=t.unstable_now(),typeof j=="function"){w.callback=j,H(W),ae=!0;break t}w===n(p)&&i(p),H(W)}else i(p);w=n(p)}if(w!==null)ae=!0;else{var ne=n(g);ne!==null&&oe(N,ne.startTime-W),ae=!1}}break e}finally{w=null,T=fe,C=!1}ae=void 0}}finally{ae?U():Z=!1}}}var U;if(typeof P=="function")U=function(){P(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Ne=D.port2;D.port1.onmessage=k,U=function(){Ne.postMessage(null)}}else U=function(){F(k,0)};function oe(W,ae){R=F(function(){W(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(W){switch(T){case 1:case 2:case 3:var ae=3;break;default:ae=T}var fe=T;T=ae;try{return W()}finally{T=fe}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(W,ae){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var fe=T;T=W;try{return ae()}finally{T=fe}},t.unstable_scheduleCallback=function(W,ae,fe){var _e=t.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?_e+fe:_e):fe=_e,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=fe+j,W={id:v++,callback:ae,priorityLevel:W,startTime:fe,expirationTime:j,sortIndex:-1},fe>_e?(W.sortIndex=fe,e(g,W),n(p)===null&&W===n(g)&&(B?($(R),R=-1):B=!0,oe(N,fe-_e))):(W.sortIndex=j,e(p,W),O||C||(O=!0,Z||(Z=!0,U()))),W},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(W){var ae=T;return function(){var fe=T;T=ae;try{return W.apply(this,arguments)}finally{T=fe}}}}(tg)),tg}var HE;function GR(){return HE||(HE=1,eg.exports=HR()),eg.exports}var ng={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE;function YR(){if(GE)return Dn;GE=1;var t=py();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:w==null?null:""+w,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Dn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},Dn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},Dn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},Dn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Dn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,w=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:C}):v==="script"&&i.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},Dn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},Dn.requestFormReset=function(p){i.d.r(p)},Dn.unstable_batchedUpdates=function(p,g){return p(g)},Dn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},Dn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var YE;function WR(){if(YE)return ng.exports;YE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ng.exports=YR(),ng.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE;function QR(){if(WE)return Gu;WE=1;var t=GR(),e=py(),n=WR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var b=!1,S=f.child;S;){if(S===o){b=!0,o=f,u=m;break}if(S===u){b=!0,u=f,o=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===o){b=!0,o=m,u=f;break}if(S===u){b=!0,u=m,o=f;break}S=S.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),P=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function U(r){return r===null||typeof r!="object"?null:(r=k&&r[k]||r["@@iterator"],typeof r=="function"?r:null)}var D=Symbol.for("react.client.reference");function Ne(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===D?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case M:return"Profiler";case B:return"StrictMode";case N:return"Suspense";case Z:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case P:return(r.displayName||"Context")+".Provider";case $:return(r._context.displayName||"Context")+".Consumer";case H:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case R:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}var oe=Array.isArray,W=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},_e=[],j=-1;function ne(r){return{current:r}}function he(r){0>j||(r.current=_e[j],_e[j]=null,j--)}function ce(r,s){j++,_e[j]=r.current,r.current=s}var ve=ne(null),Ie=ne(null),be=ne(null),yt=ne(null);function $e(r,s){switch(ce(be,s),ce(Ie,r),ce(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?pE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=pE(s),r=mE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}he(ve),ce(ve,r)}function Tt(){he(ve),he(Ie),he(be)}function Cn(r){r.memoizedState!==null&&ce(yt,r);var s=ve.current,o=mE(s,r.type);s!==o&&(ce(Ie,r),ce(ve,o))}function de(r){Ie.current===r&&(he(ve),he(Ie)),yt.current===r&&(he(yt),qu._currentValue=fe)}var Te=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,it=t.unstable_shouldYield,Wn=t.unstable_requestPaint,Vt=t.unstable_now,$r=t.unstable_getCurrentPriorityLevel,Qn=t.unstable_ImmediatePriority,ur=t.unstable_UserBlockingPriority,Ti=t.unstable_NormalPriority,po=t.unstable_LowPriority,Hr=t.unstable_IdlePriority,Si=t.log,mo=t.unstable_setDisableYieldValue,xt=null,nt=null;function Vn(r){if(typeof Si=="function"&&mo(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(xt,r)}catch{}}var on=Math.clz32?Math.clz32:xi,go=Math.log,$l=Math.LN2;function xi(r){return r>>>=0,r===0?32:31-(go(r)/$l|0)|0}var Ai=256,Ri=4194304;function Kn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Ci(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=Kn(u):(b&=S,b!==0?f=Kn(b):o||(o=S&~r,o!==0&&(f=Kn(o))))):(S=u&~m,S!==0?f=Kn(S):b!==0?f=Kn(b):o||(o=u&~r,o!==0&&(f=Kn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Ii(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ms(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var r=Ai;return Ai<<=1,(Ai&4194048)===0&&(Ai=256),r}function st(){var r=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),r}function De(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function et(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ln(r,s,o,u,f,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,V=r.expirationTimes,X=r.hiddenUpdates;for(o=b&~o;0<o;){var re=31-on(o),le=1<<re;S[re]=0,V[re]=-1;var J=X[re];if(J!==null)for(X[re]=null,re=0;re<J.length;re++){var ee=J[re];ee!==null&&(ee.lane&=-536870913)}o&=~le}u!==0&&Ue(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ue(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-on(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function _a(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-on(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Gr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function gs(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function cr(){var r=ae.p;return r!==0?r:(r=window.event,r===void 0?32:NE(r.type))}function ys(r,s){var o=ae.p;try{return ae.p=r,s()}finally{ae.p=o}}var At=Math.random().toString(36).slice(2),Jt="__reactFiber$"+At,Bt="__reactProps$"+At,hr="__reactContainer$"+At,Hl="__reactEvents$"+At,ep="__reactListeners$"+At,_s="__reactHandles$"+At,Qc="__reactResources$"+At,va="__reactMarker$"+At;function vs(r){delete r[Jt],delete r[Bt],delete r[Hl],delete r[ep],delete r[_s]}function Di(r){var s=r[Jt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[hr]||o[Jt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=vE(r);r!==null;){if(o=r[Jt])return o;r=vE(r)}return s}r=o,o=r.parentNode}return null}function Yr(r){if(r=r[Jt]||r[hr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Wr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function jn(r){var s=r[Qc];return s||(s=r[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function jt(r){r[va]=!0}var Gl=new Set,yo={};function Ir(r,s){ki(r,s),ki(r+"Capture",s)}function ki(r,s){for(yo[r]=s,r=0;r<s.length;r++)Gl.add(s[r])}var Kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Ea={};function Zc(r){return Te.call(Ea,r)?!0:Te.call(Xc,r)?!1:Kc.test(r)?Ea[r]=!0:(Xc[r]=!0,!1)}function Es(r,s,o){if(Zc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Qr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function vn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var wa,Jc;function Oi(r){if(wa===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);wa=s&&s[1]||"",Jc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wa+r+Jc}var _o=!1;function vo(r,s){if(!r||_o)return"";_o=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(ee){var J=ee}Reflect.construct(r,[],le)}else{try{le.call()}catch(ee){J=ee}r.call(le.prototype)}}else{try{throw Error()}catch(ee){J=ee}(le=r())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(ee){if(ee&&J&&typeof ee.stack=="string")return[ee.stack,J.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var V=b.split(`
`),X=S.split(`
`);for(f=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;f<X.length&&!X[f].includes("DetermineComponentFrameRoot");)f++;if(u===V.length||f===X.length)for(u=V.length-1,f=X.length-1;1<=u&&0<=f&&V[u]!==X[f];)f--;for(;1<=u&&0<=f;u--,f--)if(V[u]!==X[f]){if(u!==1||f!==1)do if(u--,f--,0>f||V[u]!==X[f]){var re=`
`+V[u].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=u&&0<=f);break}}}finally{_o=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Oi(o):""}function Yl(r){switch(r.tag){case 26:case 27:case 5:return Oi(r.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return vo(r.type,!1);case 11:return vo(r.type.render,!1);case 1:return vo(r.type,!0);case 31:return Oi("Activity");default:return""}}function Eo(r){try{var s="";do s+=Yl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Ln(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Wl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tp(r){var s=Wl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function wo(r){r._valueTracker||(r._valueTracker=tp(r))}function Ql(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Wl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function ba(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var np=/[\n"\\]/g;function zt(r){return r.replace(np,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Xn(r,s,o,u,f,m,b,S){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Ln(s)):r.value!==""+Ln(s)&&(r.value=""+Ln(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?ws(r,b,Ln(s)):o!=null?ws(r,b,Ln(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Ln(S):r.removeAttribute("name")}function Ta(r,s,o,u,f,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Ln(o):"",s=s!=null?""+Ln(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function ws(r,s,o){s==="number"&&ba(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Mi(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Ln(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ft(r,s,o){if(s!=null&&(s=""+Ln(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Ln(o):""}function Sa(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(oe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Ln(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function fr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var xa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eh(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||xa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Kl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&eh(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&eh(r,m,s[m])}function Xl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bo(r){return ip.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Ni=null;function dr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Pi=null,Vi=null;function Zl(r){var s=Yr(r);if(s&&(r=s.stateNode)){var o=r[Bt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Xn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+zt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Bt]||null;if(!f)throw Error(i(90));Xn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Ql(u)}break e;case"textarea":ft(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Mi(r,!!o.multiple,s,!1)}}}var Kr=!1;function th(r,s,o){if(Kr)return r(s,o);Kr=!0;try{var u=r(s);return u}finally{if(Kr=!1,(Pi!==null||Vi!==null)&&(Wh(),Pi&&(s=Pi,r=Vi,Vi=Pi=null,Zl(s),r)))for(s=0;s<r.length;s++)Zl(r[s])}}function Aa(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Bt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pr=!1;if(Dr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){pr=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{pr=!1}var Xr=null,bs=null,ji=null;function Jl(){if(ji)return ji;var r,s=bs,o=s.length,u,f="value"in Xr?Xr.value:Xr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var b=o-r;for(u=1;u<=b&&s[o-u]===f[m-u];u++);return ji=f.slice(r,1<u?1-u:void 0)}function Zr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jr(){return!0}function eu(){return!1}function un(r){function s(o,u,f,m,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jr:eu,this.isPropagationStopped=eu,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),s}var at={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=un(at),Ca=v({},at,{view:0,detail:0}),nh=un(Ca),So,xo,ei,Ia=v({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ei&&(ei&&r.type==="mousemove"?(So=r.screenX-ei.screenX,xo=r.screenY-ei.screenY):xo=So=0,ei=r),So)},movementY:function(r){return"movementY"in r?r.movementY:xo}}),mr=un(Ia),rh=v({},Ia,{dataTransfer:0}),sp=un(rh),Da=v({},Ca,{relatedTarget:0}),Ao=un(Da),tu=v({},at,{animationName:0,elapsedTime:0,pseudoElement:0}),Ro=un(tu),ih=v({},at,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Co=un(ih),ap=v({},at,{data:0}),nu=un(ap),ka={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ru(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ah[r])?!!s[r]:!1}function Oa(){return ru}var oh=v({},Ca,{key:function(r){if(r.key){var s=ka[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Zr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(r){return r.type==="keypress"?Zr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Io=un(oh),lh=v({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=un(lh),Li=v({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),uh=un(Li),ch=v({},at,{propertyName:0,elapsedTime:0,pseudoElement:0}),hh=un(ch),fh=v({},Ia,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Do=un(fh),Un=v({},at,{newState:0,oldState:0}),dh=un(Un),ph=[9,13,27,32],ti=Dr&&"CompositionEvent"in window,h=null;Dr&&"documentMode"in document&&(h=document.documentMode);var y=Dr&&"TextEvent"in window&&!h,E=Dr&&(!ti||h&&8<h&&11>=h),x=" ",Q=!1;function te(r,s){switch(r){case"keyup":return ph.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ke=!1;function en(r,s){switch(r){case"compositionend":return pe(s);case"keypress":return s.which!==32?null:(Q=!0,x);case"textInput":return r=s.data,r===x&&Q?null:r;default:return null}}function Xe(r,s){if(Ke)return r==="compositionend"||!ti&&te(r,s)?(r=Jl(),ji=bs=Xr=null,Ke=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var cn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tn(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!cn[r.type]:s==="textarea"}function Ui(r,s,o,u){Pi?Vi?Vi.push(u):Vi=[u]:Pi=u,s=ef(s,"onChange"),0<s.length&&(o=new To("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var En=null,ni=null;function su(r){uE(r,0)}function mh(r){var s=Wr(r);if(Ql(s))return r}function D_(r,s){if(r==="change")return s}var k_=!1;if(Dr){var op;if(Dr){var lp="oninput"in document;if(!lp){var O_=document.createElement("div");O_.setAttribute("oninput","return;"),lp=typeof O_.oninput=="function"}op=lp}else op=!1;k_=op&&(!document.documentMode||9<document.documentMode)}function M_(){En&&(En.detachEvent("onpropertychange",N_),ni=En=null)}function N_(r){if(r.propertyName==="value"&&mh(ni)){var s=[];Ui(s,ni,r,dr(r)),th(su,s)}}function yA(r,s,o){r==="focusin"?(M_(),En=s,ni=o,En.attachEvent("onpropertychange",N_)):r==="focusout"&&M_()}function _A(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return mh(ni)}function vA(r,s){if(r==="click")return mh(s)}function EA(r,s){if(r==="input"||r==="change")return mh(s)}function wA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Zn=typeof Object.is=="function"?Object.is:wA;function au(r,s){if(Zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Te.call(s,f)||!Zn(r[f],s[f]))return!1}return!0}function P_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function V_(r,s){var o=P_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=P_(o)}}function j_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?j_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function L_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ba(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ba(r.document)}return s}function up(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var bA=Dr&&"documentMode"in document&&11>=document.documentMode,ko=null,cp=null,ou=null,hp=!1;function U_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hp||ko==null||ko!==ba(u)||(u=ko,"selectionStart"in u&&up(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ou&&au(ou,u)||(ou=u,u=ef(cp,"onSelect"),0<u.length&&(s=new To("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=ko)))}function Ma(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Oo={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},fp={},q_={};Dr&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function Na(r){if(fp[r])return fp[r];if(!Oo[r])return r;var s=Oo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in q_)return fp[r]=s[o];return r}var B_=Na("animationend"),z_=Na("animationiteration"),F_=Na("animationstart"),TA=Na("transitionrun"),SA=Na("transitionstart"),xA=Na("transitioncancel"),$_=Na("transitionend"),H_=new Map,dp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dp.push("scrollEnd");function kr(r,s){H_.set(r,s),Ir(s,[r])}var G_=new WeakMap;function gr(r,s){if(typeof r=="object"&&r!==null){var o=G_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Eo(s)},G_.set(r,s),s)}return{value:r,source:s,stack:Eo(s)}}var yr=[],Mo=0,pp=0;function gh(){for(var r=Mo,s=pp=Mo=0;s<r;){var o=yr[s];yr[s++]=null;var u=yr[s];yr[s++]=null;var f=yr[s];yr[s++]=null;var m=yr[s];if(yr[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}m!==0&&Y_(o,f,m)}}function yh(r,s,o,u){yr[Mo++]=r,yr[Mo++]=s,yr[Mo++]=o,yr[Mo++]=u,pp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function mp(r,s,o,u){return yh(r,s,o,u),_h(r)}function No(r,s){return yh(r,null,null,s),_h(r)}function Y_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-on(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function _h(r){if(50<Ou)throw Ou=0,wm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Po={};function AA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(r,s,o,u){return new AA(r,s,o,u)}function gp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qi(r,s){var o=r.alternate;return o===null?(o=Jn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function W_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function vh(r,s,o,u,f,m){var b=0;if(u=r,typeof r=="function")gp(r)&&(b=1);else if(typeof r=="string")b=CR(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=Jn(31,o,s,f),r.elementType=I,r.lanes=m,r;case O:return Pa(o.children,f,m,s);case B:b=8,f|=24;break;case M:return r=Jn(12,o,s,f|2),r.elementType=M,r.lanes=m,r;case N:return r=Jn(13,o,s,f),r.elementType=N,r.lanes=m,r;case Z:return r=Jn(19,o,s,f),r.elementType=Z,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case F:case P:b=10;break e;case $:b=9;break e;case H:b=11;break e;case R:b=14;break e;case A:b=16,u=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Jn(b,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Pa(r,s,o,u){return r=Jn(7,r,u,s),r.lanes=o,r}function yp(r,s,o){return r=Jn(6,r,null,s),r.lanes=o,r}function _p(r,s,o){return s=Jn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Vo=[],jo=0,Eh=null,wh=0,_r=[],vr=0,Va=null,Bi=1,zi="";function ja(r,s){Vo[jo++]=wh,Vo[jo++]=Eh,Eh=r,wh=s}function Q_(r,s,o){_r[vr++]=Bi,_r[vr++]=zi,_r[vr++]=Va,Va=r;var u=Bi;r=zi;var f=32-on(u)-1;u&=~(1<<f),o+=1;var m=32-on(s)+f;if(30<m){var b=f-f%5;m=(u&(1<<b)-1).toString(32),u>>=b,f-=b,Bi=1<<32-on(s)+f|o<<f|u,zi=m+r}else Bi=1<<m|o<<f|u,zi=r}function vp(r){r.return!==null&&(ja(r,1),Q_(r,1,0))}function Ep(r){for(;r===Eh;)Eh=Vo[--jo],Vo[jo]=null,wh=Vo[--jo],Vo[jo]=null;for(;r===Va;)Va=_r[--vr],_r[vr]=null,zi=_r[--vr],_r[vr]=null,Bi=_r[--vr],_r[vr]=null}var qn=null,Mt=null,rt=!1,La=null,ri=!1,wp=Error(i(519));function Ua(r){var s=Error(i(418,""));throw cu(gr(s,r)),wp}function K_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Jt]=r,s[Bt]=u,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<Nu.length;o++)Ge(Nu[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),Ta(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),wo(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),Sa(s,u.value,u.defaultValue,u.children),wo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||dE(s.textContent,o)?(u.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),u.onScroll!=null&&Ge("scroll",s),u.onScrollEnd!=null&&Ge("scrollend",s),u.onClick!=null&&(s.onclick=tf),s=!0):s=!1,s||Ua(r)}function X_(r){for(qn=r.return;qn;)switch(qn.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:qn=qn.return}}function lu(r){if(r!==qn)return!1;if(!rt)return X_(r),rt=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||jm(r.type,r.memoizedProps)),o=!o),o&&Mt&&Ua(r),X_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Mt=Mr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Mt=null}}else s===27?(s=Mt,Ls(r.type)?(r=Bm,Bm=null,Mt=r):Mt=s):Mt=qn?Mr(r.stateNode.nextSibling):null;return!0}function uu(){Mt=qn=null,rt=!1}function Z_(){var r=La;return r!==null&&(Hn===null?Hn=r:Hn.push.apply(Hn,r),La=null),r}function cu(r){La===null?La=[r]:La.push(r)}var bp=ne(null),qa=null,Fi=null;function Ts(r,s,o){ce(bp,s._currentValue),s._currentValue=o}function $i(r){r._currentValue=bp.current,he(bp)}function Tp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function Sp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var V=0;V<s.length;V++)if(S.context===s[V]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Tp(m.return,o,r),u||(b=null);break e}m=S.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Tp(b,o,r),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function hu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var S=f.type;Zn(f.pendingProps.value,b.value)||(r!==null?r.push(S):r=[S])}}else if(f===yt.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(qu):r=[qu])}f=f.return}r!==null&&Sp(s,r,o,u),s.flags|=262144}function bh(r){for(r=r.firstContext;r!==null;){if(!Zn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ba(r){qa=r,Fi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function In(r){return J_(qa,r)}function Th(r,s){return qa===null&&Ba(r),J_(r,s)}function J_(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Fi===null){if(r===null)throw Error(i(308));Fi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Fi=Fi.next=s;return o}var RA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},CA=t.unstable_scheduleCallback,IA=t.unstable_NormalPriority,nn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xp(){return{controller:new RA,data:new Map,refCount:0}}function fu(r){r.refCount--,r.refCount===0&&CA(IA,function(){r.controller.abort()})}var du=null,Ap=0,Lo=0,Uo=null;function DA(r,s){if(du===null){var o=du=[];Ap=0,Lo=Cm(),Uo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ap++,s.then(ev,ev),s}function ev(){if(--Ap===0&&du!==null){Uo!==null&&(Uo.status="fulfilled");var r=du;du=null,Lo=0,Uo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function kA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var tv=W.S;W.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&DA(r,s),tv!==null&&tv(r,s)};var za=ne(null);function Rp(){var r=za.current;return r!==null?r:Et.pooledCache}function Sh(r,s){s===null?ce(za,za.current):ce(za,s.pool)}function nv(){var r=Rp();return r===null?null:{parent:nn._currentValue,pool:r}}var pu=Error(i(460)),rv=Error(i(474)),xh=Error(i(542)),Cp={then:function(){}};function iv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ah(){}function sv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ah,Ah),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,ov(r),r;default:if(typeof s.status=="string")s.then(Ah,Ah);else{if(r=Et,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,ov(r),r}throw mu=s,pu}}var mu=null;function av(){if(mu===null)throw Error(i(459));var r=mu;return mu=null,r}function ov(r){if(r===pu||r===xh)throw Error(i(483))}var Ss=!1;function Ip(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function xs(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function As(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ut&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=_h(r),Y_(r,null,o),s}return yh(r,u,s,o),_h(r)}function gu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,_a(r,o)}}function kp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Op=!1;function yu(){if(Op){var r=Uo;if(r!==null)throw r}}function _u(r,s,o,u){Op=!1;var f=r.updateQueue;Ss=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var V=S,X=V.next;V.next=null,b===null?m=X:b.next=X,b=V;var re=r.alternate;re!==null&&(re=re.updateQueue,S=re.lastBaseUpdate,S!==b&&(S===null?re.firstBaseUpdate=X:S.next=X,re.lastBaseUpdate=V))}if(m!==null){var le=f.baseState;b=0,re=X=V=null,S=m;do{var J=S.lane&-536870913,ee=J!==S.lane;if(ee?(Ze&J)===J:(u&J)===J){J!==0&&J===Lo&&(Op=!0),re!==null&&(re=re.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Me=r,Re=S;J=s;var mt=o;switch(Re.tag){case 1:if(Me=Re.payload,typeof Me=="function"){le=Me.call(mt,le,J);break e}le=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Re.payload,J=typeof Me=="function"?Me.call(mt,le,J):Me,J==null)break e;le=v({},le,J);break e;case 2:Ss=!0}}J=S.callback,J!==null&&(r.flags|=64,ee&&(r.flags|=8192),ee=f.callbacks,ee===null?f.callbacks=[J]:ee.push(J))}else ee={lane:J,tag:S.tag,payload:S.payload,callback:S.callback,next:null},re===null?(X=re=ee,V=le):re=re.next=ee,b|=J;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;ee=S,S=ee.next,ee.next=null,f.lastBaseUpdate=ee,f.shared.pending=null}}while(!0);re===null&&(V=le),f.baseState=V,f.firstBaseUpdate=X,f.lastBaseUpdate=re,m===null&&(f.shared.lanes=0),Ns|=b,r.lanes=b,r.memoizedState=le}}function lv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function uv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)lv(o[r],s)}var qo=ne(null),Rh=ne(0);function cv(r,s){r=Xi,ce(Rh,r),ce(qo,s),Xi=r|s.baseLanes}function Mp(){ce(Rh,Xi),ce(qo,qo.current)}function Np(){Xi=Rh.current,he(qo),he(Rh)}var Rs=0,ze=null,dt=null,Ft=null,Ch=!1,Bo=!1,Fa=!1,Ih=0,vu=0,zo=null,OA=0;function Lt(){throw Error(i(321))}function Pp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Zn(r[o],s[o]))return!1;return!0}function Vp(r,s,o,u,f,m){return Rs=m,ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,W.H=r===null||r.memoizedState===null?Yv:Wv,Fa=!1,m=o(u,f),Fa=!1,Bo&&(m=fv(s,o,u,f)),hv(r),m}function hv(r){W.H=Ph;var s=dt!==null&&dt.next!==null;if(Rs=0,Ft=dt=ze=null,Ch=!1,vu=0,zo=null,s)throw Error(i(300));r===null||hn||(r=r.dependencies,r!==null&&bh(r)&&(hn=!0))}function fv(r,s,o,u){ze=r;var f=0;do{if(Bo&&(zo=null),vu=0,Bo=!1,25<=f)throw Error(i(301));if(f+=1,Ft=dt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}W.H=UA,m=s(o,u)}while(Bo);return m}function MA(){var r=W.H,s=r.useState()[0];return s=typeof s.then=="function"?Eu(s):s,r=r.useState()[0],(dt!==null?dt.memoizedState:null)!==r&&(ze.flags|=1024),s}function jp(){var r=Ih!==0;return Ih=0,r}function Lp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Up(r){if(Ch){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ch=!1}Rs=0,Ft=dt=ze=null,Bo=!1,vu=Ih=0,zo=null}function Fn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r,Ft}function $t(){if(dt===null){var r=ze.alternate;r=r!==null?r.memoizedState:null}else r=dt.next;var s=Ft===null?ze.memoizedState:Ft.next;if(s!==null)Ft=s,dt=r;else{if(r===null)throw ze.alternate===null?Error(i(467)):Error(i(310));dt=r,r={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r}return Ft}function qp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eu(r){var s=vu;return vu+=1,zo===null&&(zo=[]),r=sv(zo,r,s),s=ze,(Ft===null?s.memoizedState:Ft.next)===null&&(s=s.alternate,W.H=s===null||s.memoizedState===null?Yv:Wv),r}function Dh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Eu(r);if(r.$$typeof===P)return In(r)}throw Error(i(438,String(r)))}function Bp(r){var s=null,o=ze.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=ze.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=qp(),ze.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=L;return s.index++,o}function Hi(r,s){return typeof s=="function"?s(r):s}function kh(r){var s=$t();return zp(s,dt,r)}function zp(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=b=null,V=null,X=s,re=!1;do{var le=X.lane&-536870913;if(le!==X.lane?(Ze&le)===le:(Rs&le)===le){var J=X.revertLane;if(J===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),le===Lo&&(re=!0);else if((Rs&J)===J){X=X.next,J===Lo&&(re=!0);continue}else le={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},V===null?(S=V=le,b=m):V=V.next=le,ze.lanes|=J,Ns|=J;le=X.action,Fa&&o(m,le),m=X.hasEagerState?X.eagerState:o(m,le)}else J={lane:le,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},V===null?(S=V=J,b=m):V=V.next=J,ze.lanes|=le,Ns|=le;X=X.next}while(X!==null&&X!==s);if(V===null?b=m:V.next=S,!Zn(m,r.memoizedState)&&(hn=!0,re&&(o=Uo,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=V,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Fp(r){var s=$t(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do m=r(m,b.action),b=b.next;while(b!==f);Zn(m,s.memoizedState)||(hn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function dv(r,s,o){var u=ze,f=$t(),m=rt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!Zn((dt||f).memoizedState,o);b&&(f.memoizedState=o,hn=!0),f=f.queue;var S=gv.bind(null,u,f,r);if(wu(2048,8,S,[r]),f.getSnapshot!==s||b||Ft!==null&&Ft.memoizedState.tag&1){if(u.flags|=2048,Fo(9,Oh(),mv.bind(null,u,f,o,s),null),Et===null)throw Error(i(349));m||(Rs&124)!==0||pv(u,s,o)}return o}function pv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=ze.updateQueue,s===null?(s=qp(),ze.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function mv(r,s,o,u){s.value=o,s.getSnapshot=u,yv(s)&&_v(r)}function gv(r,s,o){return o(function(){yv(s)&&_v(r)})}function yv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Zn(r,o)}catch{return!0}}function _v(r){var s=No(r,2);s!==null&&ir(s,r,2)}function $p(r){var s=Fn();if(typeof r=="function"){var o=r;if(r=o(),Fa){Vn(!0);try{o()}finally{Vn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:r},s}function vv(r,s,o,u){return r.baseState=o,zp(r,dt,typeof u=="function"?u:Hi)}function NA(r,s,o,u,f){if(Nh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};W.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,Ev(s,m)):(m.next=o.next,s.pending=o.next=m)}}function Ev(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=W.T,b={};W.T=b;try{var S=o(f,u),V=W.S;V!==null&&V(b,S),wv(r,s,S)}catch(X){Hp(r,s,X)}finally{W.T=m}}else try{m=o(f,u),wv(r,s,m)}catch(X){Hp(r,s,X)}}function wv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){bv(r,s,u)},function(u){return Hp(r,s,u)}):bv(r,s,o)}function bv(r,s,o){s.status="fulfilled",s.value=o,Tv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,Ev(r,o)))}function Hp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Tv(s),s=s.next;while(s!==u)}r.action=null}function Tv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function Sv(r,s){return s}function xv(r,s){if(rt){var o=Et.formState;if(o!==null){e:{var u=ze;if(rt){if(Mt){t:{for(var f=Mt,m=ri;f.nodeType!==8;){if(!m){f=null;break t}if(f=Mr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Mt=Mr(f.nextSibling),u=f.data==="F!";break e}}Ua(u)}u=!1}u&&(s=o[0])}}return o=Fn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sv,lastRenderedState:s},o.queue=u,o=$v.bind(null,ze,u),u.dispatch=o,u=$p(!1),m=Kp.bind(null,ze,!1,u.queue),u=Fn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=NA.bind(null,ze,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Av(r){var s=$t();return Rv(s,dt,r)}function Rv(r,s,o){if(s=zp(r,s,Sv)[0],r=kh(Hi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Eu(s)}catch(b){throw b===pu?xh:b}else u=s;s=$t();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ze.flags|=2048,Fo(9,Oh(),PA.bind(null,f,o),null)),[u,m,r]}function PA(r,s){r.action=s}function Cv(r){var s=$t(),o=dt;if(o!==null)return Rv(s,o,r);$t(),s=s.memoizedState,o=$t();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Fo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=ze.updateQueue,s===null&&(s=qp(),ze.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Oh(){return{destroy:void 0,resource:void 0}}function Iv(){return $t().memoizedState}function Mh(r,s,o,u){var f=Fn();u=u===void 0?null:u,ze.flags|=r,f.memoizedState=Fo(1|s,Oh(),o,u)}function wu(r,s,o,u){var f=$t();u=u===void 0?null:u;var m=f.memoizedState.inst;dt!==null&&u!==null&&Pp(u,dt.memoizedState.deps)?f.memoizedState=Fo(s,m,o,u):(ze.flags|=r,f.memoizedState=Fo(1|s,m,o,u))}function Dv(r,s){Mh(8390656,8,r,s)}function kv(r,s){wu(2048,8,r,s)}function Ov(r,s){return wu(4,2,r,s)}function Mv(r,s){return wu(4,4,r,s)}function Nv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Pv(r,s,o){o=o!=null?o.concat([r]):null,wu(4,4,Nv.bind(null,s,r),o)}function Gp(){}function Vv(r,s){var o=$t();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Pp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function jv(r,s){var o=$t();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Pp(s,u[1]))return u[0];if(u=r(),Fa){Vn(!0);try{r()}finally{Vn(!1)}}return o.memoizedState=[u,s],u}function Yp(r,s,o){return o===void 0||(Rs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=q0(),ze.lanes|=r,Ns|=r,o)}function Lv(r,s,o,u){return Zn(o,s)?o:qo.current!==null?(r=Yp(r,o,u),Zn(r,s)||(hn=!0),r):(Rs&42)===0?(hn=!0,r.memoizedState=o):(r=q0(),ze.lanes|=r,Ns|=r,s)}function Uv(r,s,o,u,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var b=W.T,S={};W.T=S,Kp(r,!1,s,o);try{var V=f(),X=W.S;if(X!==null&&X(S,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=kA(V,u);bu(r,s,re,rr(r))}else bu(r,s,u,rr(r))}catch(le){bu(r,s,{then:function(){},status:"rejected",reason:le},rr())}finally{ae.p=m,W.T=b}}function VA(){}function Wp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=qv(r).queue;Uv(r,f,s,fe,o===null?VA:function(){return Bv(r),o(u)})}function qv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:fe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Bv(r){var s=qv(r).next.queue;bu(r,s,{},rr())}function Qp(){return In(qu)}function zv(){return $t().memoizedState}function Fv(){return $t().memoizedState}function jA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=rr();r=xs(o);var u=As(s,r,o);u!==null&&(ir(u,s,o),gu(u,s,o)),s={cache:xp()},r.payload=s;return}s=s.return}}function LA(r,s,o){var u=rr();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(r)?Hv(s,o):(o=mp(r,s,o,u),o!==null&&(ir(o,r,u),Gv(o,s,u)))}function $v(r,s,o){var u=rr();bu(r,s,o,u)}function bu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(r))Hv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,S=m(b,o);if(f.hasEagerState=!0,f.eagerState=S,Zn(S,b))return yh(r,s,f,0),Et===null&&gh(),!1}catch{}finally{}if(o=mp(r,s,f,u),o!==null)return ir(o,r,u),Gv(o,s,u),!0}return!1}function Kp(r,s,o,u){if(u={lane:2,revertLane:Cm(),action:u,hasEagerState:!1,eagerState:null,next:null},Nh(r)){if(s)throw Error(i(479))}else s=mp(r,o,u,2),s!==null&&ir(s,r,2)}function Nh(r){var s=r.alternate;return r===ze||s!==null&&s===ze}function Hv(r,s){Bo=Ch=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Gv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,_a(r,o)}}var Ph={readContext:In,use:Dh,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt},Yv={readContext:In,use:Dh,useCallback:function(r,s){return Fn().memoizedState=[r,s===void 0?null:s],r},useContext:In,useEffect:Dv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Mh(4194308,4,Nv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Mh(4194308,4,r,s)},useInsertionEffect:function(r,s){Mh(4,2,r,s)},useMemo:function(r,s){var o=Fn();s=s===void 0?null:s;var u=r();if(Fa){Vn(!0);try{r()}finally{Vn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Fn();if(o!==void 0){var f=o(s);if(Fa){Vn(!0);try{o(s)}finally{Vn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=LA.bind(null,ze,r),[u.memoizedState,r]},useRef:function(r){var s=Fn();return r={current:r},s.memoizedState=r},useState:function(r){r=$p(r);var s=r.queue,o=$v.bind(null,ze,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Gp,useDeferredValue:function(r,s){var o=Fn();return Yp(o,r,s)},useTransition:function(){var r=$p(!1);return r=Uv.bind(null,ze,r.queue,!0,!1),Fn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=ze,f=Fn();if(rt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),Et===null)throw Error(i(349));(Ze&124)!==0||pv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,Dv(gv.bind(null,u,m,r),[r]),u.flags|=2048,Fo(9,Oh(),mv.bind(null,u,m,o,s),null),o},useId:function(){var r=Fn(),s=Et.identifierPrefix;if(rt){var o=zi,u=Bi;o=(u&~(1<<32-on(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ih++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=OA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Qp,useFormState:xv,useActionState:xv,useOptimistic:function(r){var s=Fn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Kp.bind(null,ze,!0,o),o.dispatch=s,[r,s]},useMemoCache:Bp,useCacheRefresh:function(){return Fn().memoizedState=jA.bind(null,ze)}},Wv={readContext:In,use:Dh,useCallback:Vv,useContext:In,useEffect:kv,useImperativeHandle:Pv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:jv,useReducer:kh,useRef:Iv,useState:function(){return kh(Hi)},useDebugValue:Gp,useDeferredValue:function(r,s){var o=$t();return Lv(o,dt.memoizedState,r,s)},useTransition:function(){var r=kh(Hi)[0],s=$t().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:dv,useId:zv,useHostTransitionStatus:Qp,useFormState:Av,useActionState:Av,useOptimistic:function(r,s){var o=$t();return vv(o,dt,r,s)},useMemoCache:Bp,useCacheRefresh:Fv},UA={readContext:In,use:Dh,useCallback:Vv,useContext:In,useEffect:kv,useImperativeHandle:Pv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:jv,useReducer:Fp,useRef:Iv,useState:function(){return Fp(Hi)},useDebugValue:Gp,useDeferredValue:function(r,s){var o=$t();return dt===null?Yp(o,r,s):Lv(o,dt.memoizedState,r,s)},useTransition:function(){var r=Fp(Hi)[0],s=$t().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:dv,useId:zv,useHostTransitionStatus:Qp,useFormState:Cv,useActionState:Cv,useOptimistic:function(r,s){var o=$t();return dt!==null?vv(o,dt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Bp,useCacheRefresh:Fv},$o=null,Tu=0;function Vh(r){var s=Tu;return Tu+=1,$o===null&&($o=[]),sv($o,r,s)}function Su(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function jh(r,s){throw s.$$typeof===w?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Qv(r){var s=r._init;return s(r._payload)}function Kv(r){function s(Y,z){if(r){var K=Y.deletions;K===null?(Y.deletions=[z],Y.flags|=16):K.push(z)}}function o(Y,z){if(!r)return null;for(;z!==null;)s(Y,z),z=z.sibling;return null}function u(Y){for(var z=new Map;Y!==null;)Y.key!==null?z.set(Y.key,Y):z.set(Y.index,Y),Y=Y.sibling;return z}function f(Y,z){return Y=qi(Y,z),Y.index=0,Y.sibling=null,Y}function m(Y,z,K){return Y.index=K,r?(K=Y.alternate,K!==null?(K=K.index,K<z?(Y.flags|=67108866,z):K):(Y.flags|=67108866,z)):(Y.flags|=1048576,z)}function b(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function S(Y,z,K,ie){return z===null||z.tag!==6?(z=yp(K,Y.mode,ie),z.return=Y,z):(z=f(z,K),z.return=Y,z)}function V(Y,z,K,ie){var Ee=K.type;return Ee===O?re(Y,z,K.props.children,ie,K.key):z!==null&&(z.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===A&&Qv(Ee)===z.type)?(z=f(z,K.props),Su(z,K),z.return=Y,z):(z=vh(K.type,K.key,K.props,null,Y.mode,ie),Su(z,K),z.return=Y,z)}function X(Y,z,K,ie){return z===null||z.tag!==4||z.stateNode.containerInfo!==K.containerInfo||z.stateNode.implementation!==K.implementation?(z=_p(K,Y.mode,ie),z.return=Y,z):(z=f(z,K.children||[]),z.return=Y,z)}function re(Y,z,K,ie,Ee){return z===null||z.tag!==7?(z=Pa(K,Y.mode,ie,Ee),z.return=Y,z):(z=f(z,K),z.return=Y,z)}function le(Y,z,K){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=yp(""+z,Y.mode,K),z.return=Y,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return K=vh(z.type,z.key,z.props,null,Y.mode,K),Su(K,z),K.return=Y,K;case C:return z=_p(z,Y.mode,K),z.return=Y,z;case A:var ie=z._init;return z=ie(z._payload),le(Y,z,K)}if(oe(z)||U(z))return z=Pa(z,Y.mode,K,null),z.return=Y,z;if(typeof z.then=="function")return le(Y,Vh(z),K);if(z.$$typeof===P)return le(Y,Th(Y,z),K);jh(Y,z)}return null}function J(Y,z,K,ie){var Ee=z!==null?z.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ee!==null?null:S(Y,z,""+K,ie);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case T:return K.key===Ee?V(Y,z,K,ie):null;case C:return K.key===Ee?X(Y,z,K,ie):null;case A:return Ee=K._init,K=Ee(K._payload),J(Y,z,K,ie)}if(oe(K)||U(K))return Ee!==null?null:re(Y,z,K,ie,null);if(typeof K.then=="function")return J(Y,z,Vh(K),ie);if(K.$$typeof===P)return J(Y,z,Th(Y,K),ie);jh(Y,K)}return null}function ee(Y,z,K,ie,Ee){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Y=Y.get(K)||null,S(z,Y,""+ie,Ee);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case T:return Y=Y.get(ie.key===null?K:ie.key)||null,V(z,Y,ie,Ee);case C:return Y=Y.get(ie.key===null?K:ie.key)||null,X(z,Y,ie,Ee);case A:var Fe=ie._init;return ie=Fe(ie._payload),ee(Y,z,K,ie,Ee)}if(oe(ie)||U(ie))return Y=Y.get(K)||null,re(z,Y,ie,Ee,null);if(typeof ie.then=="function")return ee(Y,z,K,Vh(ie),Ee);if(ie.$$typeof===P)return ee(Y,z,K,Th(z,ie),Ee);jh(z,ie)}return null}function Me(Y,z,K,ie){for(var Ee=null,Fe=null,Se=z,Ce=z=0,dn=null;Se!==null&&Ce<K.length;Ce++){Se.index>Ce?(dn=Se,Se=null):dn=Se.sibling;var tt=J(Y,Se,K[Ce],ie);if(tt===null){Se===null&&(Se=dn);break}r&&Se&&tt.alternate===null&&s(Y,Se),z=m(tt,z,Ce),Fe===null?Ee=tt:Fe.sibling=tt,Fe=tt,Se=dn}if(Ce===K.length)return o(Y,Se),rt&&ja(Y,Ce),Ee;if(Se===null){for(;Ce<K.length;Ce++)Se=le(Y,K[Ce],ie),Se!==null&&(z=m(Se,z,Ce),Fe===null?Ee=Se:Fe.sibling=Se,Fe=Se);return rt&&ja(Y,Ce),Ee}for(Se=u(Se);Ce<K.length;Ce++)dn=ee(Se,Y,Ce,K[Ce],ie),dn!==null&&(r&&dn.alternate!==null&&Se.delete(dn.key===null?Ce:dn.key),z=m(dn,z,Ce),Fe===null?Ee=dn:Fe.sibling=dn,Fe=dn);return r&&Se.forEach(function(Fs){return s(Y,Fs)}),rt&&ja(Y,Ce),Ee}function Re(Y,z,K,ie){if(K==null)throw Error(i(151));for(var Ee=null,Fe=null,Se=z,Ce=z=0,dn=null,tt=K.next();Se!==null&&!tt.done;Ce++,tt=K.next()){Se.index>Ce?(dn=Se,Se=null):dn=Se.sibling;var Fs=J(Y,Se,tt.value,ie);if(Fs===null){Se===null&&(Se=dn);break}r&&Se&&Fs.alternate===null&&s(Y,Se),z=m(Fs,z,Ce),Fe===null?Ee=Fs:Fe.sibling=Fs,Fe=Fs,Se=dn}if(tt.done)return o(Y,Se),rt&&ja(Y,Ce),Ee;if(Se===null){for(;!tt.done;Ce++,tt=K.next())tt=le(Y,tt.value,ie),tt!==null&&(z=m(tt,z,Ce),Fe===null?Ee=tt:Fe.sibling=tt,Fe=tt);return rt&&ja(Y,Ce),Ee}for(Se=u(Se);!tt.done;Ce++,tt=K.next())tt=ee(Se,Y,Ce,tt.value,ie),tt!==null&&(r&&tt.alternate!==null&&Se.delete(tt.key===null?Ce:tt.key),z=m(tt,z,Ce),Fe===null?Ee=tt:Fe.sibling=tt,Fe=tt);return r&&Se.forEach(function(qR){return s(Y,qR)}),rt&&ja(Y,Ce),Ee}function mt(Y,z,K,ie){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case T:e:{for(var Ee=K.key;z!==null;){if(z.key===Ee){if(Ee=K.type,Ee===O){if(z.tag===7){o(Y,z.sibling),ie=f(z,K.props.children),ie.return=Y,Y=ie;break e}}else if(z.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===A&&Qv(Ee)===z.type){o(Y,z.sibling),ie=f(z,K.props),Su(ie,K),ie.return=Y,Y=ie;break e}o(Y,z);break}else s(Y,z);z=z.sibling}K.type===O?(ie=Pa(K.props.children,Y.mode,ie,K.key),ie.return=Y,Y=ie):(ie=vh(K.type,K.key,K.props,null,Y.mode,ie),Su(ie,K),ie.return=Y,Y=ie)}return b(Y);case C:e:{for(Ee=K.key;z!==null;){if(z.key===Ee)if(z.tag===4&&z.stateNode.containerInfo===K.containerInfo&&z.stateNode.implementation===K.implementation){o(Y,z.sibling),ie=f(z,K.children||[]),ie.return=Y,Y=ie;break e}else{o(Y,z);break}else s(Y,z);z=z.sibling}ie=_p(K,Y.mode,ie),ie.return=Y,Y=ie}return b(Y);case A:return Ee=K._init,K=Ee(K._payload),mt(Y,z,K,ie)}if(oe(K))return Me(Y,z,K,ie);if(U(K)){if(Ee=U(K),typeof Ee!="function")throw Error(i(150));return K=Ee.call(K),Re(Y,z,K,ie)}if(typeof K.then=="function")return mt(Y,z,Vh(K),ie);if(K.$$typeof===P)return mt(Y,z,Th(Y,K),ie);jh(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,z!==null&&z.tag===6?(o(Y,z.sibling),ie=f(z,K),ie.return=Y,Y=ie):(o(Y,z),ie=yp(K,Y.mode,ie),ie.return=Y,Y=ie),b(Y)):o(Y,z)}return function(Y,z,K,ie){try{Tu=0;var Ee=mt(Y,z,K,ie);return $o=null,Ee}catch(Se){if(Se===pu||Se===xh)throw Se;var Fe=Jn(29,Se,null,Y.mode);return Fe.lanes=ie,Fe.return=Y,Fe}finally{}}}var Ho=Kv(!0),Xv=Kv(!1),Er=ne(null),ii=null;function Cs(r){var s=r.alternate;ce(rn,rn.current&1),ce(Er,r),ii===null&&(s===null||qo.current!==null||s.memoizedState!==null)&&(ii=r)}function Zv(r){if(r.tag===22){if(ce(rn,rn.current),ce(Er,r),ii===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(ii=r)}}else Is()}function Is(){ce(rn,rn.current),ce(Er,Er.current)}function Gi(r){he(Er),ii===r&&(ii=null),he(rn)}var rn=ne(0);function Lh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||qm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Xp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Zp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=rr(),f=xs(u);f.payload=s,o!=null&&(f.callback=o),s=As(r,f,u),s!==null&&(ir(s,r,u),gu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=rr(),f=xs(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=As(r,f,u),s!==null&&(ir(s,r,u),gu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=rr(),u=xs(o);u.tag=2,s!=null&&(u.callback=s),s=As(r,u,o),s!==null&&(ir(s,r,o),gu(s,r,o))}};function Jv(r,s,o,u,f,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,b):s.prototype&&s.prototype.isPureReactComponent?!au(o,u)||!au(f,m):!0}function e0(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Zp.enqueueReplaceState(s,s.state,null)}function $a(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Uh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function t0(r){Uh(r)}function n0(r){console.error(r)}function r0(r){Uh(r)}function qh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function i0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jp(r,s,o){return o=xs(o),o.tag=3,o.payload={element:null},o.callback=function(){qh(r,s)},o}function s0(r){return r=xs(r),r.tag=3,r}function a0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){i0(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){i0(s,o,u),typeof f!="function"&&(Ps===null?Ps=new Set([this]):Ps.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function qA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&hu(s,o,f,!0),o=Er.current,o!==null){switch(o.tag){case 13:return ii===null?Tm():o.alternate===null&&Nt===0&&(Nt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Cp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),xm(r,u,f)),!1;case 22:return o.flags|=65536,u===Cp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),xm(r,u,f)),!1}throw Error(i(435,o.tag))}return xm(r,u,f),Tm(),!1}if(rt)return s=Er.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==wp&&(r=Error(i(422),{cause:u}),cu(gr(r,o)))):(u!==wp&&(s=Error(i(423),{cause:u}),cu(gr(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=gr(u,o),f=Jp(r.stateNode,u,f),kp(r,f),Nt!==4&&(Nt=2)),!1;var m=Error(i(520),{cause:u});if(m=gr(m,o),ku===null?ku=[m]:ku.push(m),Nt!==4&&(Nt=2),s===null)return!0;u=gr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Jp(o.stateNode,u,r),kp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ps===null||!Ps.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=s0(f),a0(f,r,o,u),kp(o,f),!1}o=o.return}while(o!==null);return!1}var o0=Error(i(461)),hn=!1;function wn(r,s,o,u){s.child=r===null?Xv(s,null,o,u):Ho(s,r.child,o,u)}function l0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var b={};for(var S in u)S!=="ref"&&(b[S]=u[S])}else b=u;return Ba(s),u=Vp(r,s,o,b,m,f),S=jp(),r!==null&&!hn?(Lp(r,s,f),Yi(r,s,f)):(rt&&S&&vp(s),s.flags|=1,wn(r,s,u,f),s.child)}function u0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!gp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,c0(r,s,m,u,f)):(r=vh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!om(r,f)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:au,o(b,u)&&r.ref===s.ref)return Yi(r,s,f)}return s.flags|=1,r=qi(m,u),r.ref=s.ref,r.return=s,s.child=r}function c0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(au(m,u)&&r.ref===s.ref)if(hn=!1,s.pendingProps=u=m,om(r,f))(r.flags&131072)!==0&&(hn=!0);else return s.lanes=r.lanes,Yi(r,s,f)}return em(r,s,o,u,f)}function h0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return f0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Sh(s,m!==null?m.cachePool:null),m!==null?cv(s,m):Mp(),Zv(s);else return s.lanes=s.childLanes=536870912,f0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Sh(s,m.cachePool),cv(s,m),Is(),s.memoizedState=null):(r!==null&&Sh(s,null),Mp(),Is());return wn(r,s,f,o),s.child}function f0(r,s,o,u){var f=Rp();return f=f===null?null:{parent:nn._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Sh(s,null),Mp(),Zv(s),r!==null&&hu(r,s,u,!0),null}function Bh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function em(r,s,o,u,f){return Ba(s),o=Vp(r,s,o,u,void 0,f),u=jp(),r!==null&&!hn?(Lp(r,s,f),Yi(r,s,f)):(rt&&u&&vp(s),s.flags|=1,wn(r,s,o,f),s.child)}function d0(r,s,o,u,f,m){return Ba(s),s.updateQueue=null,o=fv(s,u,o,f),hv(r),u=jp(),r!==null&&!hn?(Lp(r,s,m),Yi(r,s,m)):(rt&&u&&vp(s),s.flags|=1,wn(r,s,o,m),s.child)}function p0(r,s,o,u,f){if(Ba(s),s.stateNode===null){var m=Po,b=o.contextType;typeof b=="object"&&b!==null&&(m=In(b)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Ip(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?In(b):Po,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Xp(s,o,b,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Zp.enqueueReplaceState(m,m.state,null),_u(s,u,m,f),yu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,V=$a(o,S);m.props=V;var X=m.context,re=o.contextType;b=Po,typeof re=="object"&&re!==null&&(b=In(re));var le=o.getDerivedStateFromProps;re=typeof le=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||X!==b)&&e0(s,m,u,b),Ss=!1;var J=s.memoizedState;m.state=J,_u(s,u,m,f),yu(),X=s.memoizedState,S||J!==X||Ss?(typeof le=="function"&&(Xp(s,o,le,u),X=s.memoizedState),(V=Ss||Jv(s,o,V,u,J,X,b))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=X),m.props=u,m.state=X,m.context=b,u=V):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Dp(r,s),b=s.memoizedProps,re=$a(o,b),m.props=re,le=s.pendingProps,J=m.context,X=o.contextType,V=Po,typeof X=="object"&&X!==null&&(V=In(X)),S=o.getDerivedStateFromProps,(X=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==le||J!==V)&&e0(s,m,u,V),Ss=!1,J=s.memoizedState,m.state=J,_u(s,u,m,f),yu();var ee=s.memoizedState;b!==le||J!==ee||Ss||r!==null&&r.dependencies!==null&&bh(r.dependencies)?(typeof S=="function"&&(Xp(s,o,S,u),ee=s.memoizedState),(re=Ss||Jv(s,o,re,u,J,ee,V)||r!==null&&r.dependencies!==null&&bh(r.dependencies))?(X||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ee,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ee,V)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=ee),m.props=u,m.state=ee,m.context=V,u=re):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,Bh(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Ho(s,r.child,null,f),s.child=Ho(s,null,o,f)):wn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Yi(r,s,f),r}function m0(r,s,o,u){return uu(),s.flags|=256,wn(r,s,o,u),s.child}var tm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nm(r){return{baseLanes:r,cachePool:nv()}}function rm(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=wr),r}function g0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(rn.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(rt){if(f?Cs(s):Is(),rt){var S=Mt,V;if(V=S){e:{for(V=S,S=ri;V.nodeType!==8;){if(!S){S=null;break e}if(V=Mr(V.nextSibling),V===null){S=null;break e}}S=V}S!==null?(s.memoizedState={dehydrated:S,treeContext:Va!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},V=Jn(18,null,null,0),V.stateNode=S,V.return=s,s.child=V,qn=s,Mt=null,V=!0):V=!1}V||Ua(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return qm(S)?s.lanes=32:s.lanes=536870912,null;Gi(s)}return S=u.children,u=u.fallback,f?(Is(),f=s.mode,S=zh({mode:"hidden",children:S},f),u=Pa(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=nm(o),f.childLanes=rm(r,b,o),s.memoizedState=tm,u):(Cs(s),im(s,S))}if(V=r.memoizedState,V!==null&&(S=V.dehydrated,S!==null)){if(m)s.flags&256?(Cs(s),s.flags&=-257,s=sm(r,s,o)):s.memoizedState!==null?(Is(),s.child=r.child,s.flags|=128,s=null):(Is(),f=u.fallback,S=s.mode,u=zh({mode:"visible",children:u.children},S),f=Pa(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Ho(s,r.child,null,o),u=s.child,u.memoizedState=nm(o),u.childLanes=rm(r,b,o),s.memoizedState=tm,s=f);else if(Cs(s),qm(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var X=b.dgst;b=X,u=Error(i(419)),u.stack="",u.digest=b,cu({value:u,source:null,stack:null}),s=sm(r,s,o)}else if(hn||hu(r,s,o,!1),b=(o&r.childLanes)!==0,hn||b){if(b=Et,b!==null&&(u=o&-o,u=(u&42)!==0?1:Gr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,No(r,u),ir(b,r,u),o0;S.data==="$?"||Tm(),s=sm(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=V.treeContext,Mt=Mr(S.nextSibling),qn=s,rt=!0,La=null,ri=!1,r!==null&&(_r[vr++]=Bi,_r[vr++]=zi,_r[vr++]=Va,Bi=r.id,zi=r.overflow,Va=s),s=im(s,u.children),s.flags|=4096);return s}return f?(Is(),f=u.fallback,S=s.mode,V=r.child,X=V.sibling,u=qi(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,X!==null?f=qi(X,f):(f=Pa(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=nm(o):(V=S.cachePool,V!==null?(X=nn._currentValue,V=V.parent!==X?{parent:X,pool:X}:V):V=nv(),S={baseLanes:S.baseLanes|o,cachePool:V}),f.memoizedState=S,f.childLanes=rm(r,b,o),s.memoizedState=tm,u):(Cs(s),o=r.child,r=o.sibling,o=qi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function im(r,s){return s=zh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function zh(r,s){return r=Jn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function sm(r,s,o){return Ho(s,r.child,null,o),r=im(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function y0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Tp(r.return,s,o)}function am(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function _0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(wn(r,s,u.children,o),u=rn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&y0(r,o,s);else if(r.tag===19)y0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ce(rn,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Lh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),am(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Lh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}am(s,!0,o,null,m);break;case"together":am(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Yi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),Ns|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(hu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=qi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=qi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function om(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&bh(r)))}function BA(r,s,o){switch(s.tag){case 3:$e(s,s.stateNode.containerInfo),Ts(s,nn,r.memoizedState.cache),uu();break;case 27:case 5:Cn(s);break;case 4:$e(s,s.stateNode.containerInfo);break;case 10:Ts(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Cs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?g0(r,s,o):(Cs(s),r=Yi(r,s,o),r!==null?r.sibling:null);Cs(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(hu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return _0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ce(rn,rn.current),u)break;return null;case 22:case 23:return s.lanes=0,h0(r,s,o);case 24:Ts(s,nn,r.memoizedState.cache)}return Yi(r,s,o)}function v0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)hn=!0;else{if(!om(r,o)&&(s.flags&128)===0)return hn=!1,BA(r,s,o);hn=(r.flags&131072)!==0}else hn=!1,rt&&(s.flags&1048576)!==0&&Q_(s,wh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")gp(u)?(r=$a(u,r),s.tag=1,s=p0(null,s,u,r,o)):(s.tag=0,s=em(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===H){s.tag=11,s=l0(null,s,u,r,o);break e}else if(f===R){s.tag=14,s=u0(null,s,u,r,o);break e}}throw s=Ne(u)||u,Error(i(306,s,""))}}return s;case 0:return em(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=$a(u,s.pendingProps),p0(r,s,u,f,o);case 3:e:{if($e(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,Dp(r,s),_u(s,u,null,o);var b=s.memoizedState;if(u=b.cache,Ts(s,nn,u),u!==m.cache&&Sp(s,[nn],o,!0),yu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=m0(r,s,u,o);break e}else if(u!==f){f=gr(Error(i(424)),s),cu(f),s=m0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Mt=Mr(r.firstChild),qn=s,rt=!0,La=null,ri=!0,o=Xv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(uu(),u===f){s=Yi(r,s,o);break e}wn(r,s,u,o)}s=s.child}return s;case 26:return Bh(r,s),r===null?(o=TE(s.type,null,s.pendingProps,null))?s.memoizedState=o:rt||(o=s.type,r=s.pendingProps,u=nf(be.current).createElement(o),u[Jt]=s,u[Bt]=r,Tn(u,o,r),jt(u),s.stateNode=u):s.memoizedState=TE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Cn(s),r===null&&rt&&(u=s.stateNode=EE(s.type,s.pendingProps,be.current),qn=s,ri=!0,f=Mt,Ls(s.type)?(Bm=f,Mt=Mr(u.firstChild)):Mt=f),wn(r,s,s.pendingProps.children,o),Bh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&rt&&((f=u=Mt)&&(u=mR(u,s.type,s.pendingProps,ri),u!==null?(s.stateNode=u,qn=s,Mt=Mr(u.firstChild),ri=!1,f=!0):f=!1),f||Ua(s)),Cn(s),f=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,u=m.children,jm(f,m)?u=null:b!==null&&jm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Vp(r,s,MA,null,null,o),qu._currentValue=f),Bh(r,s),wn(r,s,u,o),s.child;case 6:return r===null&&rt&&((r=o=Mt)&&(o=gR(o,s.pendingProps,ri),o!==null?(s.stateNode=o,qn=s,Mt=null,r=!0):r=!1),r||Ua(s)),null;case 13:return g0(r,s,o);case 4:return $e(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Ho(s,null,u,o):wn(r,s,u,o),s.child;case 11:return l0(r,s,s.type,s.pendingProps,o);case 7:return wn(r,s,s.pendingProps,o),s.child;case 8:return wn(r,s,s.pendingProps.children,o),s.child;case 12:return wn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Ts(s,s.type,u.value),wn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Ba(s),f=In(f),u=u(f),s.flags|=1,wn(r,s,u,o),s.child;case 14:return u0(r,s,s.type,s.pendingProps,o);case 15:return c0(r,s,s.type,s.pendingProps,o);case 19:return _0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=zh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=qi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return h0(r,s,o);case 24:return Ba(s),u=In(nn),r===null?(f=Rp(),f===null&&(f=Et,m=xp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Ip(s),Ts(s,nn,f)):((r.lanes&o)!==0&&(Dp(r,s),_u(s,null,null,o),yu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ts(s,nn,u)):(u=m.cache,Ts(s,nn,u),u!==f.cache&&Sp(s,[nn],o,!0))),wn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Wi(r){r.flags|=4}function E0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!CE(s)){if(s=Er.current,s!==null&&((Ze&4194048)===Ze?ii!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||s!==ii))throw mu=Cp,rv;r.flags|=8192}}function Fh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?st():536870912,r.lanes|=s,Qo|=s)}function xu(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Dt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function zA(r,s,o){var u=s.pendingProps;switch(Ep(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(s),null;case 1:return Dt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),$i(nn),Tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(lu(s)?Wi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Z_())),Dt(s),null;case 26:return o=s.memoizedState,r===null?(Wi(s),o!==null?(Dt(s),E0(s,o)):(Dt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Wi(s),Dt(s),E0(s,o)):(Dt(s),s.flags&=-16777217):(r.memoizedProps!==u&&Wi(s),Dt(s),s.flags&=-16777217),null;case 27:de(s),o=be.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Wi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Dt(s),null}r=ve.current,lu(s)?K_(s):(r=EE(f,u,o),s.stateNode=r,Wi(s))}return Dt(s),null;case 5:if(de(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Wi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return Dt(s),null}if(r=ve.current,lu(s))K_(s);else{switch(f=nf(be.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Jt]=s,r[Bt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(Tn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Wi(s)}}return Dt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Wi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=be.current,lu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=qn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Jt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||dE(r.nodeValue,o)),r||Ua(s)}else r=nf(r).createTextNode(u),r[Jt]=s,s.stateNode=r}return Dt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=lu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Jt]=s}else uu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Dt(s),f=!1}else f=Z_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Gi(s),s):(Gi(s),null)}if(Gi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Fh(s,s.updateQueue),Dt(s),null;case 4:return Tt(),r===null&&Om(s.stateNode.containerInfo),Dt(s),null;case 10:return $i(s.type),Dt(s),null;case 19:if(he(rn),f=s.memoizedState,f===null)return Dt(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)xu(f,!1);else{if(Nt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=Lh(r),m!==null){for(s.flags|=128,xu(f,!1),r=m.updateQueue,s.updateQueue=r,Fh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)W_(o,r),o=o.sibling;return ce(rn,rn.current&1|2),s.child}r=r.sibling}f.tail!==null&&Vt()>Gh&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304)}else{if(!u)if(r=Lh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Fh(s,r),xu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!rt)return Dt(s),null}else 2*Vt()-f.renderingStartTime>Gh&&o!==536870912&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Vt(),s.sibling=null,r=rn.current,ce(rn,u?r&1|2:r&1),s):(Dt(s),null);case 22:case 23:return Gi(s),Np(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(Dt(s),s.subtreeFlags&6&&(s.flags|=8192)):Dt(s),o=s.updateQueue,o!==null&&Fh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&he(za),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),$i(nn),Dt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function FA(r,s){switch(Ep(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return $i(nn),Tt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return de(s),null;case 13:if(Gi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));uu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return he(rn),null;case 4:return Tt(),null;case 10:return $i(s.type),null;case 22:case 23:return Gi(s),Np(),r!==null&&he(za),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return $i(nn),null;case 25:return null;default:return null}}function w0(r,s){switch(Ep(s),s.tag){case 3:$i(nn),Tt();break;case 26:case 27:case 5:de(s);break;case 4:Tt();break;case 13:Gi(s);break;case 19:he(rn);break;case 10:$i(s.type);break;case 22:case 23:Gi(s),Np(),r!==null&&he(za);break;case 24:$i(nn)}}function Au(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==f)}}catch(S){_t(s,s.return,S)}}function Ds(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var b=u.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,f=s;var V=o,X=S;try{X()}catch(re){_t(f,V,re)}}}u=u.next}while(u!==m)}}catch(re){_t(s,s.return,re)}}function b0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{uv(s,o)}catch(u){_t(r,r.return,u)}}}function T0(r,s,o){o.props=$a(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){_t(r,s,u)}}function Ru(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){_t(r,s,f)}}function si(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){_t(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){_t(r,s,f)}else o.current=null}function S0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){_t(r,r.return,f)}}function lm(r,s,o){try{var u=r.stateNode;cR(u,r.type,o,s),u[Bt]=s}catch(f){_t(r,r.return,f)}}function x0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ls(r.type)||r.tag===4}function um(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||x0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ls(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function cm(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=tf));else if(u!==4&&(u===27&&Ls(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(cm(r,s,o),r=r.sibling;r!==null;)cm(r,s,o),r=r.sibling}function $h(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Ls(r.type)&&(o=r.stateNode),r=r.child,r!==null))for($h(r,s,o),r=r.sibling;r!==null;)$h(r,s,o),r=r.sibling}function A0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Tn(s,u,o),s[Jt]=r,s[Bt]=o}catch(m){_t(r,r.return,m)}}var Qi=!1,Ut=!1,hm=!1,R0=typeof WeakSet=="function"?WeakSet:Set,fn=null;function $A(r,s){if(r=r.containerInfo,Pm=uf,r=L_(r),up(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,S=-1,V=-1,X=0,re=0,le=r,J=null;t:for(;;){for(var ee;le!==o||f!==0&&le.nodeType!==3||(S=b+f),le!==m||u!==0&&le.nodeType!==3||(V=b+u),le.nodeType===3&&(b+=le.nodeValue.length),(ee=le.firstChild)!==null;)J=le,le=ee;for(;;){if(le===r)break t;if(J===o&&++X===f&&(S=b),J===m&&++re===u&&(V=b),(ee=le.nextSibling)!==null)break;le=J,J=le.parentNode}le=ee}o=S===-1||V===-1?null:{start:S,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vm={focusedElem:r,selectionRange:o},uf=!1,fn=s;fn!==null;)if(s=fn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,fn=r;else for(;fn!==null;){switch(s=fn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Me=$a(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Me,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Re){_t(o,o.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Um(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Um(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,fn=r;break}fn=s.return}}function C0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ks(r,o),u&4&&Au(5,o);break;case 1:if(ks(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){_t(o,o.return,b)}else{var f=$a(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){_t(o,o.return,b)}}u&64&&b0(o),u&512&&Ru(o,o.return);break;case 3:if(ks(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{uv(r,s)}catch(b){_t(o,o.return,b)}}break;case 27:s===null&&u&4&&A0(o);case 26:case 5:ks(r,o),s===null&&u&4&&S0(o),u&512&&Ru(o,o.return);break;case 12:ks(r,o);break;case 13:ks(r,o),u&4&&k0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=JA.bind(null,o),yR(r,o))));break;case 22:if(u=o.memoizedState!==null||Qi,!u){s=s!==null&&s.memoizedState!==null||Ut,f=Qi;var m=Ut;Qi=u,(Ut=s)&&!m?Os(r,o,(o.subtreeFlags&8772)!==0):ks(r,o),Qi=f,Ut=m}break;case 30:break;default:ks(r,o)}}function I0(r){var s=r.alternate;s!==null&&(r.alternate=null,I0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&vs(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Rt=null,$n=!1;function Ki(r,s,o){for(o=o.child;o!==null;)D0(r,s,o),o=o.sibling}function D0(r,s,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(xt,o)}catch{}switch(o.tag){case 26:Ut||si(o,s),Ki(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ut||si(o,s);var u=Rt,f=$n;Ls(o.type)&&(Rt=o.stateNode,$n=!1),Ki(r,s,o),Vu(o.stateNode),Rt=u,$n=f;break;case 5:Ut||si(o,s);case 6:if(u=Rt,f=$n,Rt=null,Ki(r,s,o),Rt=u,$n=f,Rt!==null)if($n)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(o.stateNode)}catch(m){_t(o,s,m)}else try{Rt.removeChild(o.stateNode)}catch(m){_t(o,s,m)}break;case 18:Rt!==null&&($n?(r=Rt,_E(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),$u(r)):_E(Rt,o.stateNode));break;case 4:u=Rt,f=$n,Rt=o.stateNode.containerInfo,$n=!0,Ki(r,s,o),Rt=u,$n=f;break;case 0:case 11:case 14:case 15:Ut||Ds(2,o,s),Ut||Ds(4,o,s),Ki(r,s,o);break;case 1:Ut||(si(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&T0(o,s,u)),Ki(r,s,o);break;case 21:Ki(r,s,o);break;case 22:Ut=(u=Ut)||o.memoizedState!==null,Ki(r,s,o),Ut=u;break;default:Ki(r,s,o)}}function k0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{$u(r)}catch(o){_t(s,s.return,o)}}function HA(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new R0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new R0),s;default:throw Error(i(435,r.tag))}}function fm(r,s){var o=HA(r);s.forEach(function(u){var f=eR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function er(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,b=s,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(Ls(S.type)){Rt=S.stateNode,$n=!1;break e}break;case 5:Rt=S.stateNode,$n=!1;break e;case 3:case 4:Rt=S.stateNode.containerInfo,$n=!0;break e}S=S.return}if(Rt===null)throw Error(i(160));D0(m,b,f),Rt=null,$n=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)O0(s,r),s=s.sibling}var Or=null;function O0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:er(s,r),tr(r),u&4&&(Ds(3,r,r.return),Au(3,r),Ds(5,r,r.return));break;case 1:er(s,r),tr(r),u&512&&(Ut||o===null||si(o,o.return)),u&64&&Qi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Or;if(er(s,r),tr(r),u&512&&(Ut||o===null||si(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[va]||m[Jt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Tn(m,u,o),m[Jt]=r,jt(m),u=m;break e;case"link":var b=AE("link","href",f).get(u+(o.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(S,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;case"meta":if(b=AE("meta","content",f).get(u+(o.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(S,1);break t}}m=f.createElement(u),Tn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[Jt]=r,jt(m),u=m}r.stateNode=u}else RE(f,r.type,r.stateNode);else r.stateNode=xE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?RE(f,r.type,r.stateNode):xE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&lm(r,r.memoizedProps,o.memoizedProps)}break;case 27:er(s,r),tr(r),u&512&&(Ut||o===null||si(o,o.return)),o!==null&&u&4&&lm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(er(s,r),tr(r),u&512&&(Ut||o===null||si(o,o.return)),r.flags&32){f=r.stateNode;try{fr(f,"")}catch(ee){_t(r,r.return,ee)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,lm(r,f,o!==null?o.memoizedProps:f)),u&1024&&(hm=!0);break;case 6:if(er(s,r),tr(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(ee){_t(r,r.return,ee)}}break;case 3:if(af=null,f=Or,Or=rf(s.containerInfo),er(s,r),Or=f,tr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$u(s.containerInfo)}catch(ee){_t(r,r.return,ee)}hm&&(hm=!1,M0(r));break;case 4:u=Or,Or=rf(r.stateNode.containerInfo),er(s,r),tr(r),Or=u;break;case 12:er(s,r),tr(r);break;case 13:er(s,r),tr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_m=Vt()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,fm(r,u)));break;case 22:f=r.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,X=Qi,re=Ut;if(Qi=X||f,Ut=re||V,er(s,r),Ut=re,Qi=X,tr(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||V||Qi||Ut||Ha(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){V=o=s;try{if(m=V.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=V.stateNode;var le=V.memoizedProps.style,J=le!=null&&le.hasOwnProperty("display")?le.display:null;S.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(ee){_t(V,V.return,ee)}}}else if(s.tag===6){if(o===null){V=s;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(ee){_t(V,V.return,ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,fm(r,o))));break;case 19:er(s,r),tr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,fm(r,u)));break;case 30:break;case 21:break;default:er(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(x0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=um(r);$h(r,m,f);break;case 5:var b=o.stateNode;o.flags&32&&(fr(b,""),o.flags&=-33);var S=um(r);$h(r,S,b);break;case 3:case 4:var V=o.stateNode.containerInfo,X=um(r);cm(r,X,V);break;default:throw Error(i(161))}}catch(re){_t(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function M0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;M0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ks(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)C0(r,s.alternate,s),s=s.sibling}function Ha(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Ds(4,s,s.return),Ha(s);break;case 1:si(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&T0(s,s.return,o),Ha(s);break;case 27:Vu(s.stateNode);case 26:case 5:si(s,s.return),Ha(s);break;case 22:s.memoizedState===null&&Ha(s);break;case 30:Ha(s);break;default:Ha(s)}r=r.sibling}}function Os(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Os(f,m,o),Au(4,m);break;case 1:if(Os(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(X){_t(u,u.return,X)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)lv(V[f],S)}catch(X){_t(u,u.return,X)}}o&&b&64&&b0(m),Ru(m,m.return);break;case 27:A0(m);case 26:case 5:Os(f,m,o),o&&u===null&&b&4&&S0(m),Ru(m,m.return);break;case 12:Os(f,m,o);break;case 13:Os(f,m,o),o&&b&4&&k0(f,m);break;case 22:m.memoizedState===null&&Os(f,m,o),Ru(m,m.return);break;case 30:break;default:Os(f,m,o)}s=s.sibling}}function dm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&fu(o))}function pm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r))}function ai(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)N0(r,s,o,u),s=s.sibling}function N0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ai(r,s,o,u),f&2048&&Au(9,s);break;case 1:ai(r,s,o,u);break;case 3:ai(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r)));break;case 12:if(f&2048){ai(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(V){_t(s,s.return,V)}}else ai(r,s,o,u);break;case 13:ai(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?ai(r,s,o,u):Cu(r,s):m._visibility&2?ai(r,s,o,u):(m._visibility|=2,Go(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&dm(b,s);break;case 24:ai(r,s,o,u),f&2048&&pm(s.alternate,s);break;default:ai(r,s,o,u)}}function Go(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,S=o,V=u,X=b.flags;switch(b.tag){case 0:case 11:case 15:Go(m,b,S,V,f),Au(8,b);break;case 23:break;case 22:var re=b.stateNode;b.memoizedState!==null?re._visibility&2?Go(m,b,S,V,f):Cu(m,b):(re._visibility|=2,Go(m,b,S,V,f)),f&&X&2048&&dm(b.alternate,b);break;case 24:Go(m,b,S,V,f),f&&X&2048&&pm(b.alternate,b);break;default:Go(m,b,S,V,f)}s=s.sibling}}function Cu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Cu(o,u),f&2048&&dm(u.alternate,u);break;case 24:Cu(o,u),f&2048&&pm(u.alternate,u);break;default:Cu(o,u)}s=s.sibling}}var Iu=8192;function Yo(r){if(r.subtreeFlags&Iu)for(r=r.child;r!==null;)P0(r),r=r.sibling}function P0(r){switch(r.tag){case 26:Yo(r),r.flags&Iu&&r.memoizedState!==null&&DR(Or,r.memoizedState,r.memoizedProps);break;case 5:Yo(r);break;case 3:case 4:var s=Or;Or=rf(r.stateNode.containerInfo),Yo(r),Or=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Iu,Iu=16777216,Yo(r),Iu=s):Yo(r));break;default:Yo(r)}}function V0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Du(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];fn=u,L0(u,r)}V0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)j0(r),r=r.sibling}function j0(r){switch(r.tag){case 0:case 11:case 15:Du(r),r.flags&2048&&Ds(9,r,r.return);break;case 3:Du(r);break;case 12:Du(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Hh(r)):Du(r);break;default:Du(r)}}function Hh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];fn=u,L0(u,r)}V0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Ds(8,s,s.return),Hh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Hh(s));break;default:Hh(s)}r=r.sibling}}function L0(r,s){for(;fn!==null;){var o=fn;switch(o.tag){case 0:case 11:case 15:Ds(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:fu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,fn=u;else e:for(o=r;fn!==null;){u=fn;var f=u.sibling,m=u.return;if(I0(u),u===o){fn=null;break e}if(f!==null){f.return=m,fn=f;break e}fn=m}}}var GA={getCacheForType:function(r){var s=In(nn),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},YA=typeof WeakMap=="function"?WeakMap:Map,ut=0,Et=null,He=null,Ze=0,ct=0,nr=null,Ms=!1,Wo=!1,mm=!1,Xi=0,Nt=0,Ns=0,Ga=0,gm=0,wr=0,Qo=0,ku=null,Hn=null,ym=!1,_m=0,Gh=1/0,Yh=null,Ps=null,bn=0,Vs=null,Ko=null,Xo=0,vm=0,Em=null,U0=null,Ou=0,wm=null;function rr(){if((ut&2)!==0&&Ze!==0)return Ze&-Ze;if(W.T!==null){var r=Lo;return r!==0?r:Cm()}return cr()}function q0(){wr===0&&(wr=(Ze&536870912)===0||rt?Le():536870912);var r=Er.current;return r!==null&&(r.flags|=32),wr}function ir(r,s,o){(r===Et&&(ct===2||ct===9)||r.cancelPendingCommit!==null)&&(Zo(r,0),js(r,Ze,wr,!1)),et(r,o),((ut&2)===0||r!==Et)&&(r===Et&&((ut&2)===0&&(Ga|=o),Nt===4&&js(r,Ze,wr,!1)),oi(r))}function B0(r,s,o){if((ut&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||Ii(r,s),f=u?KA(r,s):Sm(r,s,!0),m=u;do{if(f===0){Wo&&!u&&js(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!WA(o)){f=Sm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var S=r;f=ku;var V=S.current.memoizedState.isDehydrated;if(V&&(Zo(S,b).flags|=256),b=Sm(S,b,!1),b!==2){if(mm&&!V){S.errorRecoveryDisabledLanes|=m,Ga|=m,f=4;break e}m=Hn,Hn=f,m!==null&&(Hn===null?Hn=m:Hn.push.apply(Hn,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Zo(r,0),js(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:js(u,s,wr,!Ms);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=_m+300-Vt(),10<f)){if(js(u,s,wr,!Ms),Ci(u,0,!0)!==0)break e;u.timeoutHandle=gE(z0.bind(null,u,o,Hn,Yh,ym,s,wr,Ga,Qo,Ms,m,2,-0,0),f);break e}z0(u,o,Hn,Yh,ym,s,wr,Ga,Qo,Ms,m,0,-0,0)}}break}while(!0);oi(r)}function z0(r,s,o,u,f,m,b,S,V,X,re,le,J,ee){if(r.timeoutHandle=-1,le=s.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(Uu={stylesheets:null,count:0,unsuspend:IR},P0(s),le=kR(),le!==null)){r.cancelPendingCommit=le(Q0.bind(null,r,s,m,o,u,f,b,S,V,re,1,J,ee)),js(r,m,b,!X);return}Q0(r,s,m,o,u,f,b,S,V)}function WA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Zn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function js(r,s,o,u){s&=~gm,s&=~Ga,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-on(f),b=1<<m;u[m]=-1,f&=~b}o!==0&&Ue(r,o,s)}function Wh(){return(ut&6)===0?(Mu(0),!1):!0}function bm(){if(He!==null){if(ct===0)var r=He.return;else r=He,Fi=qa=null,Up(r),$o=null,Tu=0,r=He;for(;r!==null;)w0(r.alternate,r),r=r.return;He=null}}function Zo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,fR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),bm(),Et=r,He=o=qi(r.current,null),Ze=s,ct=0,nr=null,Ms=!1,Wo=Ii(r,s),mm=!1,Qo=wr=gm=Ga=Ns=Nt=0,Hn=ku=null,ym=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-on(u),m=1<<f;s|=r[f],u&=~m}return Xi=s,gh(),o}function F0(r,s){ze=null,W.H=Ph,s===pu||s===xh?(s=av(),ct=3):s===rv?(s=av(),ct=4):ct=s===o0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,nr=s,He===null&&(Nt=1,qh(r,gr(s,r.current)))}function $0(){var r=W.H;return W.H=Ph,r===null?Ph:r}function H0(){var r=W.A;return W.A=GA,r}function Tm(){Nt=4,Ms||(Ze&4194048)!==Ze&&Er.current!==null||(Wo=!0),(Ns&134217727)===0&&(Ga&134217727)===0||Et===null||js(Et,Ze,wr,!1)}function Sm(r,s,o){var u=ut;ut|=2;var f=$0(),m=H0();(Et!==r||Ze!==s)&&(Yh=null,Zo(r,s)),s=!1;var b=Nt;e:do try{if(ct!==0&&He!==null){var S=He,V=nr;switch(ct){case 8:bm(),b=6;break e;case 3:case 2:case 9:case 6:Er.current===null&&(s=!0);var X=ct;if(ct=0,nr=null,Jo(r,S,V,X),o&&Wo){b=0;break e}break;default:X=ct,ct=0,nr=null,Jo(r,S,V,X)}}QA(),b=Nt;break}catch(re){F0(r,re)}while(!0);return s&&r.shellSuspendCounter++,Fi=qa=null,ut=u,W.H=f,W.A=m,He===null&&(Et=null,Ze=0,gh()),b}function QA(){for(;He!==null;)G0(He)}function KA(r,s){var o=ut;ut|=2;var u=$0(),f=H0();Et!==r||Ze!==s?(Yh=null,Gh=Vt()+500,Zo(r,s)):Wo=Ii(r,s);e:do try{if(ct!==0&&He!==null){s=He;var m=nr;t:switch(ct){case 1:ct=0,nr=null,Jo(r,s,m,1);break;case 2:case 9:if(iv(m)){ct=0,nr=null,Y0(s);break}s=function(){ct!==2&&ct!==9||Et!==r||(ct=7),oi(r)},m.then(s,s);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:iv(m)?(ct=0,nr=null,Y0(s)):(ct=0,nr=null,Jo(r,s,m,7));break;case 5:var b=null;switch(He.tag){case 26:b=He.memoizedState;case 5:case 27:var S=He;if(!b||CE(b)){ct=0,nr=null;var V=S.sibling;if(V!==null)He=V;else{var X=S.return;X!==null?(He=X,Qh(X)):He=null}break t}}ct=0,nr=null,Jo(r,s,m,5);break;case 6:ct=0,nr=null,Jo(r,s,m,6);break;case 8:bm(),Nt=6;break e;default:throw Error(i(462))}}XA();break}catch(re){F0(r,re)}while(!0);return Fi=qa=null,W.H=u,W.A=f,ut=o,He!==null?0:(Et=null,Ze=0,gh(),Nt)}function XA(){for(;He!==null&&!it();)G0(He)}function G0(r){var s=v0(r.alternate,r,Xi);r.memoizedProps=r.pendingProps,s===null?Qh(r):He=s}function Y0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=d0(o,s,s.pendingProps,s.type,void 0,Ze);break;case 11:s=d0(o,s,s.pendingProps,s.type.render,s.ref,Ze);break;case 5:Up(s);default:w0(o,s),s=He=W_(s,Xi),s=v0(o,s,Xi)}r.memoizedProps=r.pendingProps,s===null?Qh(r):He=s}function Jo(r,s,o,u){Fi=qa=null,Up(s),$o=null,Tu=0;var f=s.return;try{if(qA(r,f,s,o,Ze)){Nt=1,qh(r,gr(o,r.current)),He=null;return}}catch(m){if(f!==null)throw He=f,m;Nt=1,qh(r,gr(o,r.current)),He=null;return}s.flags&32768?(rt||u===1?r=!0:Wo||(Ze&536870912)!==0?r=!1:(Ms=r=!0,(u===2||u===9||u===3||u===6)&&(u=Er.current,u!==null&&u.tag===13&&(u.flags|=16384))),W0(s,r)):Qh(s)}function Qh(r){var s=r;do{if((s.flags&32768)!==0){W0(s,Ms);return}r=s.return;var o=zA(s.alternate,s,Xi);if(o!==null){He=o;return}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Nt===0&&(Nt=5)}function W0(r,s){do{var o=FA(r.alternate,r);if(o!==null){o.flags&=32767,He=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){He=r;return}He=r=o}while(r!==null);Nt=6,He=null}function Q0(r,s,o,u,f,m,b,S,V){r.cancelPendingCommit=null;do Kh();while(bn!==0);if((ut&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=pp,ln(r,o,m,b,S,V),r===Et&&(He=Et=null,Ze=0),Ko=s,Vs=r,Xo=o,vm=m,Em=f,U0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,tR(Ti,function(){return eE(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,f=ae.p,ae.p=2,b=ut,ut|=4;try{$A(r,s,o)}finally{ut=b,ae.p=f,W.T=u}}bn=1,K0(),X0(),Z0()}}function K0(){if(bn===1){bn=0;var r=Vs,s=Ko,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=W.T,W.T=null;var u=ae.p;ae.p=2;var f=ut;ut|=4;try{O0(s,r);var m=Vm,b=L_(r.containerInfo),S=m.focusedElem,V=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&j_(S.ownerDocument.documentElement,S)){if(V!==null&&up(S)){var X=V.start,re=V.end;if(re===void 0&&(re=X),"selectionStart"in S)S.selectionStart=X,S.selectionEnd=Math.min(re,S.value.length);else{var le=S.ownerDocument||document,J=le&&le.defaultView||window;if(J.getSelection){var ee=J.getSelection(),Me=S.textContent.length,Re=Math.min(V.start,Me),mt=V.end===void 0?Re:Math.min(V.end,Me);!ee.extend&&Re>mt&&(b=mt,mt=Re,Re=b);var Y=V_(S,Re),z=V_(S,mt);if(Y&&z&&(ee.rangeCount!==1||ee.anchorNode!==Y.node||ee.anchorOffset!==Y.offset||ee.focusNode!==z.node||ee.focusOffset!==z.offset)){var K=le.createRange();K.setStart(Y.node,Y.offset),ee.removeAllRanges(),Re>mt?(ee.addRange(K),ee.extend(z.node,z.offset)):(K.setEnd(z.node,z.offset),ee.addRange(K))}}}}for(le=[],ee=S;ee=ee.parentNode;)ee.nodeType===1&&le.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<le.length;S++){var ie=le[S];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}uf=!!Pm,Vm=Pm=null}finally{ut=f,ae.p=u,W.T=o}}r.current=s,bn=2}}function X0(){if(bn===2){bn=0;var r=Vs,s=Ko,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=W.T,W.T=null;var u=ae.p;ae.p=2;var f=ut;ut|=4;try{C0(r,s.alternate,s)}finally{ut=f,ae.p=u,W.T=o}}bn=3}}function Z0(){if(bn===4||bn===3){bn=0,Wn();var r=Vs,s=Ko,o=Xo,u=U0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?bn=5:(bn=0,Ko=Vs=null,J0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ps=null),gs(o),s=s.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(xt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=W.T,f=ae.p,ae.p=2,W.T=null;try{for(var m=r.onRecoverableError,b=0;b<u.length;b++){var S=u[b];m(S.value,{componentStack:S.stack})}}finally{W.T=s,ae.p=f}}(Xo&3)!==0&&Kh(),oi(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===wm?Ou++:(Ou=0,wm=r):Ou=0,Mu(0)}}function J0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,fu(s)))}function Kh(r){return K0(),X0(),Z0(),eE()}function eE(){if(bn!==5)return!1;var r=Vs,s=vm;vm=0;var o=gs(Xo),u=W.T,f=ae.p;try{ae.p=32>o?32:o,W.T=null,o=Em,Em=null;var m=Vs,b=Xo;if(bn=0,Ko=Vs=null,Xo=0,(ut&6)!==0)throw Error(i(331));var S=ut;if(ut|=4,j0(m.current),N0(m,m.current,b,o),ut=S,Mu(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(xt,m)}catch{}return!0}finally{ae.p=f,W.T=u,J0(r,s)}}function tE(r,s,o){s=gr(o,s),s=Jp(r.stateNode,s,2),r=As(r,s,2),r!==null&&(et(r,2),oi(r))}function _t(r,s,o){if(r.tag===3)tE(r,r,o);else for(;s!==null;){if(s.tag===3){tE(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ps===null||!Ps.has(u))){r=gr(o,r),o=s0(2),u=As(s,o,2),u!==null&&(a0(o,u,s,r),et(u,2),oi(u));break}}s=s.return}}function xm(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new YA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(mm=!0,f.add(o),r=ZA.bind(null,r,s,o),s.then(r,r))}function ZA(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,Et===r&&(Ze&o)===o&&(Nt===4||Nt===3&&(Ze&62914560)===Ze&&300>Vt()-_m?(ut&2)===0&&Zo(r,0):gm|=o,Qo===Ze&&(Qo=0)),oi(r)}function nE(r,s){s===0&&(s=st()),r=No(r,s),r!==null&&(et(r,s),oi(r))}function JA(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),nE(r,o)}function eR(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),nE(r,o)}function tR(r,s){return we(r,s)}var Xh=null,el=null,Am=!1,Zh=!1,Rm=!1,Ya=0;function oi(r){r!==el&&r.next===null&&(el===null?Xh=el=r:el=el.next=r),Zh=!0,Am||(Am=!0,rR())}function Mu(r,s){if(!Rm&&Zh){Rm=!0;do for(var o=!1,u=Xh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var b=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-on(42|r)+1)-1,m&=f&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,aE(u,m))}else m=Ze,m=Ci(u,u===Et?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ii(u,m)||(o=!0,aE(u,m));u=u.next}while(o);Rm=!1}}function nR(){rE()}function rE(){Zh=Am=!1;var r=0;Ya!==0&&(hR()&&(r=Ya),Ya=0);for(var s=Vt(),o=null,u=Xh;u!==null;){var f=u.next,m=iE(u,s);m===0?(u.next=null,o===null?Xh=f:o.next=f,f===null&&(el=o)):(o=u,(r!==0||(m&3)!==0)&&(Zh=!0)),u=f}Mu(r)}function iE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-on(m),S=1<<b,V=f[b];V===-1?((S&o)===0||(S&u)!==0)&&(f[b]=ms(S,s)):V<=s&&(r.expiredLanes|=S),m&=~S}if(s=Et,o=Ze,o=Ci(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(ct===2||ct===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Pe(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Ii(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Pe(u),gs(o)){case 2:case 8:o=ur;break;case 32:o=Ti;break;case 268435456:o=Hr;break;default:o=Ti}return u=sE.bind(null,r),o=we(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Pe(u),r.callbackPriority=2,r.callbackNode=null,2}function sE(r,s){if(bn!==0&&bn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Kh()&&r.callbackNode!==o)return null;var u=Ze;return u=Ci(r,r===Et?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(B0(r,u,s),iE(r,Vt()),r.callbackNode!=null&&r.callbackNode===o?sE.bind(null,r):null)}function aE(r,s){if(Kh())return null;B0(r,s,!0)}function rR(){dR(function(){(ut&6)!==0?we(Qn,nR):rE()})}function Cm(){return Ya===0&&(Ya=Le()),Ya}function oE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:bo(""+r)}function lE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function iR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=oE((f[Bt]||null).action),b=u.submitter;b&&(s=(s=b[Bt]||null)?oE(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var S=new To("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ya!==0){var V=b?lE(f,b):new FormData(f);Wp(o,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(S.preventDefault(),V=b?lE(f,b):new FormData(f),Wp(o,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var Im=0;Im<dp.length;Im++){var Dm=dp[Im],sR=Dm.toLowerCase(),aR=Dm[0].toUpperCase()+Dm.slice(1);kr(sR,"on"+aR)}kr(B_,"onAnimationEnd"),kr(z_,"onAnimationIteration"),kr(F_,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(TA,"onTransitionRun"),kr(SA,"onTransitionStart"),kr(xA,"onTransitionCancel"),kr($_,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nu));function uE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var b=u.length-1;0<=b;b--){var S=u[b],V=S.instance,X=S.currentTarget;if(S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=X;try{m(f)}catch(re){Uh(re)}f.currentTarget=null,m=V}else for(b=0;b<u.length;b++){if(S=u[b],V=S.instance,X=S.currentTarget,S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=X;try{m(f)}catch(re){Uh(re)}f.currentTarget=null,m=V}}}}function Ge(r,s){var o=s[Hl];o===void 0&&(o=s[Hl]=new Set);var u=r+"__bubble";o.has(u)||(cE(s,r,2,!1),o.add(u))}function km(r,s,o){var u=0;s&&(u|=4),cE(o,r,u,s)}var Jh="_reactListening"+Math.random().toString(36).slice(2);function Om(r){if(!r[Jh]){r[Jh]=!0,Gl.forEach(function(o){o!=="selectionchange"&&(oR.has(o)||km(o,!1,r),km(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Jh]||(s[Jh]=!0,km("selectionchange",!1,s))}}function cE(r,s,o,u){switch(NE(s)){case 2:var f=NR;break;case 8:f=PR;break;default:f=Gm}o=f.bind(null,s,o,r),f=void 0,!pr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Mm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===f)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;S!==null;){if(b=Di(S),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=m=b;continue e}S=S.parentNode}}u=u.return}th(function(){var X=m,re=dr(o),le=[];e:{var J=H_.get(r);if(J!==void 0){var ee=To,Me=r;switch(r){case"keypress":if(Zr(o)===0)break e;case"keydown":case"keyup":ee=Io;break;case"focusin":Me="focus",ee=Ao;break;case"focusout":Me="blur",ee=Ao;break;case"beforeblur":case"afterblur":ee=Ao;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=uh;break;case B_:case z_:case F_:ee=Ro;break;case $_:ee=hh;break;case"scroll":case"scrollend":ee=nh;break;case"wheel":ee=Do;break;case"copy":case"cut":case"paste":ee=Co;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=iu;break;case"toggle":case"beforetoggle":ee=dh}var Re=(s&4)!==0,mt=!Re&&(r==="scroll"||r==="scrollend"),Y=Re?J!==null?J+"Capture":null:J;Re=[];for(var z=X,K;z!==null;){var ie=z;if(K=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||K===null||Y===null||(ie=Aa(z,Y),ie!=null&&Re.push(Pu(z,ie,K))),mt)break;z=z.return}0<Re.length&&(J=new ee(J,Me,null,o,re),le.push({event:J,listeners:Re}))}}if((s&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",ee=r==="mouseout"||r==="pointerout",J&&o!==Ni&&(Me=o.relatedTarget||o.fromElement)&&(Di(Me)||Me[hr]))break e;if((ee||J)&&(J=re.window===re?re:(J=re.ownerDocument)?J.defaultView||J.parentWindow:window,ee?(Me=o.relatedTarget||o.toElement,ee=X,Me=Me?Di(Me):null,Me!==null&&(mt=l(Me),Re=Me.tag,Me!==mt||Re!==5&&Re!==27&&Re!==6)&&(Me=null)):(ee=null,Me=X),ee!==Me)){if(Re=mr,ie="onMouseLeave",Y="onMouseEnter",z="mouse",(r==="pointerout"||r==="pointerover")&&(Re=iu,ie="onPointerLeave",Y="onPointerEnter",z="pointer"),mt=ee==null?J:Wr(ee),K=Me==null?J:Wr(Me),J=new Re(ie,z+"leave",ee,o,re),J.target=mt,J.relatedTarget=K,ie=null,Di(re)===X&&(Re=new Re(Y,z+"enter",Me,o,re),Re.target=K,Re.relatedTarget=mt,ie=Re),mt=ie,ee&&Me)t:{for(Re=ee,Y=Me,z=0,K=Re;K;K=tl(K))z++;for(K=0,ie=Y;ie;ie=tl(ie))K++;for(;0<z-K;)Re=tl(Re),z--;for(;0<K-z;)Y=tl(Y),K--;for(;z--;){if(Re===Y||Y!==null&&Re===Y.alternate)break t;Re=tl(Re),Y=tl(Y)}Re=null}else Re=null;ee!==null&&hE(le,J,ee,Re,!1),Me!==null&&mt!==null&&hE(le,mt,Me,Re,!0)}}e:{if(J=X?Wr(X):window,ee=J.nodeName&&J.nodeName.toLowerCase(),ee==="select"||ee==="input"&&J.type==="file")var Ee=D_;else if(tn(J))if(k_)Ee=EA;else{Ee=_A;var Fe=yA}else ee=J.nodeName,!ee||ee.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?X&&Xl(X.elementType)&&(Ee=D_):Ee=vA;if(Ee&&(Ee=Ee(r,X))){Ui(le,Ee,o,re);break e}Fe&&Fe(r,J,X),r==="focusout"&&X&&J.type==="number"&&X.memoizedProps.value!=null&&ws(J,"number",J.value)}switch(Fe=X?Wr(X):window,r){case"focusin":(tn(Fe)||Fe.contentEditable==="true")&&(ko=Fe,cp=X,ou=null);break;case"focusout":ou=cp=ko=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,U_(le,o,re);break;case"selectionchange":if(bA)break;case"keydown":case"keyup":U_(le,o,re)}var Se;if(ti)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ke?te(r,o)&&(Ce="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ce="onCompositionStart");Ce&&(E&&o.locale!=="ko"&&(Ke||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ke&&(Se=Jl()):(Xr=re,bs="value"in Xr?Xr.value:Xr.textContent,Ke=!0)),Fe=ef(X,Ce),0<Fe.length&&(Ce=new nu(Ce,r,null,o,re),le.push({event:Ce,listeners:Fe}),Se?Ce.data=Se:(Se=pe(o),Se!==null&&(Ce.data=Se)))),(Se=y?en(r,o):Xe(r,o))&&(Ce=ef(X,"onBeforeInput"),0<Ce.length&&(Fe=new nu("onBeforeInput","beforeinput",null,o,re),le.push({event:Fe,listeners:Ce}),Fe.data=Se)),iR(le,r,X,o,re)}uE(le,s)})}function Pu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function ef(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Aa(r,o),f!=null&&u.unshift(Pu(r,f,m)),f=Aa(r,s),f!=null&&u.push(Pu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function tl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function hE(r,s,o,u,f){for(var m=s._reactName,b=[];o!==null&&o!==u;){var S=o,V=S.alternate,X=S.stateNode;if(S=S.tag,V!==null&&V===u)break;S!==5&&S!==26&&S!==27||X===null||(V=X,f?(X=Aa(o,m),X!=null&&b.unshift(Pu(o,X,V))):f||(X=Aa(o,m),X!=null&&b.push(Pu(o,X,V)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var lR=/\r\n?/g,uR=/\u0000|\uFFFD/g;function fE(r){return(typeof r=="string"?r:""+r).replace(lR,`
`).replace(uR,"")}function dE(r,s){return s=fE(s),fE(r)===s}function tf(){}function pt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||fr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&fr(r,""+u);break;case"className":Qr(r,"class",u);break;case"tabIndex":Qr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(r,o,u);break;case"style":Kl(r,u,m);break;case"data":if(s!=="object"){Qr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=bo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&pt(r,s,"name",f.name,f,null),pt(r,s,"formEncType",f.formEncType,f,null),pt(r,s,"formMethod",f.formMethod,f,null),pt(r,s,"formTarget",f.formTarget,f,null)):(pt(r,s,"encType",f.encType,f,null),pt(r,s,"method",f.method,f,null),pt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=bo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=tf);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=bo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),Es(r,"popover",u);break;case"xlinkActuate":vn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":vn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":vn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":vn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":vn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":vn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":vn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":vn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":vn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Es(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=rp.get(o)||o,Es(r,o,u))}}function Nm(r,s,o,u,f,m){switch(o){case"style":Kl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?fr(r,u):(typeof u=="number"||typeof u=="bigint")&&fr(r,""+u);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"onClick":u!=null&&(r.onclick=tf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Bt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Es(r,o,u)}}}function Tn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,m,b,o,null)}}f&&pt(r,s,"srcSet",o.srcSet,o,null),u&&pt(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var S=m=b=f=null,V=null,X=null;for(u in o)if(o.hasOwnProperty(u)){var re=o[u];if(re!=null)switch(u){case"name":f=re;break;case"type":b=re;break;case"checked":V=re;break;case"defaultChecked":X=re;break;case"value":m=re;break;case"defaultValue":S=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:pt(r,s,u,re,o,null)}}Ta(r,m,S,V,X,b,f,!1),wo(r);return;case"select":Ge("invalid",r),u=b=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":u=S;default:pt(r,s,f,S,o,null)}s=m,o=b,r.multiple=!!u,s!=null?Mi(r,!!u,s,!1):o!=null&&Mi(r,!!u,o,!0);return;case"textarea":Ge("invalid",r),m=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(S=o[b],S!=null))switch(b){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:pt(r,s,b,S,o,null)}Sa(r,u,f,m),wo(r);return;case"option":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:pt(r,s,V,u,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(u=0;u<Nu.length;u++)Ge(Nu[u],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in o)if(o.hasOwnProperty(X)&&(u=o[X],u!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,X,u,o,null)}return;default:if(Xl(s)){for(re in o)o.hasOwnProperty(re)&&(u=o[re],u!==void 0&&Nm(r,s,re,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&pt(r,s,S,u,o,null))}function cR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,S=null,V=null,X=null,re=null;for(ee in o){var le=o[ee];if(o.hasOwnProperty(ee)&&le!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":V=le;default:u.hasOwnProperty(ee)||pt(r,s,ee,null,u,le)}}for(var J in u){var ee=u[J];if(le=o[J],u.hasOwnProperty(J)&&(ee!=null||le!=null))switch(J){case"type":m=ee;break;case"name":f=ee;break;case"checked":X=ee;break;case"defaultChecked":re=ee;break;case"value":b=ee;break;case"defaultValue":S=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(i(137,s));break;default:ee!==le&&pt(r,s,J,ee,u,le)}}Xn(r,b,S,V,X,re,m,f);return;case"select":ee=b=S=J=null;for(m in o)if(V=o[m],o.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ee=V;default:u.hasOwnProperty(m)||pt(r,s,m,null,u,V)}for(f in u)if(m=u[f],V=o[f],u.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":J=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==V&&pt(r,s,f,m,u,V)}s=S,o=b,u=ee,J!=null?Mi(r,!!o,J,!1):!!u!=!!o&&(s!=null?Mi(r,!!o,s,!0):Mi(r,!!o,o?[]:"",!1));return;case"textarea":ee=J=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:pt(r,s,S,null,u,f)}for(b in u)if(f=u[b],m=o[b],u.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":J=f;break;case"defaultValue":ee=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&pt(r,s,b,f,u,m)}ft(r,J,ee);return;case"option":for(var Me in o)if(J=o[Me],o.hasOwnProperty(Me)&&J!=null&&!u.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:pt(r,s,Me,null,u,J)}for(V in u)if(J=u[V],ee=o[V],u.hasOwnProperty(V)&&J!==ee&&(J!=null||ee!=null))switch(V){case"selected":r.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:pt(r,s,V,J,u,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in o)J=o[Re],o.hasOwnProperty(Re)&&J!=null&&!u.hasOwnProperty(Re)&&pt(r,s,Re,null,u,J);for(X in u)if(J=u[X],ee=o[X],u.hasOwnProperty(X)&&J!==ee&&(J!=null||ee!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:pt(r,s,X,J,u,ee)}return;default:if(Xl(s)){for(var mt in o)J=o[mt],o.hasOwnProperty(mt)&&J!==void 0&&!u.hasOwnProperty(mt)&&Nm(r,s,mt,void 0,u,J);for(re in u)J=u[re],ee=o[re],!u.hasOwnProperty(re)||J===ee||J===void 0&&ee===void 0||Nm(r,s,re,J,u,ee);return}}for(var Y in o)J=o[Y],o.hasOwnProperty(Y)&&J!=null&&!u.hasOwnProperty(Y)&&pt(r,s,Y,null,u,J);for(le in u)J=u[le],ee=o[le],!u.hasOwnProperty(le)||J===ee||J==null&&ee==null||pt(r,s,le,J,u,ee)}var Pm=null,Vm=null;function nf(r){return r.nodeType===9?r:r.ownerDocument}function pE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function jm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lm=null;function hR(){var r=window.event;return r&&r.type==="popstate"?r===Lm?!1:(Lm=r,!0):(Lm=null,!1)}var gE=typeof setTimeout=="function"?setTimeout:void 0,fR=typeof clearTimeout=="function"?clearTimeout:void 0,yE=typeof Promise=="function"?Promise:void 0,dR=typeof queueMicrotask=="function"?queueMicrotask:typeof yE<"u"?function(r){return yE.resolve(null).then(r).catch(pR)}:gE;function pR(r){setTimeout(function(){throw r})}function Ls(r){return r==="head"}function _E(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var b=r.ownerDocument;if(o&1&&Vu(b.documentElement),o&2&&Vu(b.body),o&4)for(o=b.head,Vu(o),b=o.firstChild;b;){var S=b.nextSibling,V=b.nodeName;b[va]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=S}}if(f===0){r.removeChild(m),$u(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);$u(s)}function Um(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Um(o),vs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function mR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[va])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Mr(r.nextSibling),r===null)break}return null}function gR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Mr(r.nextSibling),r===null))return null;return r}function qm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function yR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Mr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Bm=null;function vE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function EE(r,s,o){switch(s=nf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Vu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);vs(r)}var br=new Map,wE=new Set;function rf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Zi=ae.d;ae.d={f:_R,r:vR,D:ER,C:wR,L:bR,m:TR,X:xR,S:SR,M:AR};function _R(){var r=Zi.f(),s=Wh();return r||s}function vR(r){var s=Yr(r);s!==null&&s.tag===5&&s.type==="form"?Bv(s):Zi.r(r)}var nl=typeof document>"u"?null:document;function bE(r,s,o){var u=nl;if(u&&typeof s=="string"&&s){var f=zt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),wE.has(f)||(wE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Tn(s,"link",r),jt(s),u.head.appendChild(s)))}}function ER(r){Zi.D(r),bE("dns-prefetch",r,null)}function wR(r,s){Zi.C(r,s),bE("preconnect",r,s)}function bR(r,s,o){Zi.L(r,s,o);var u=nl;if(u&&r&&s){var f='link[rel="preload"][as="'+zt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+zt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+zt(o.imageSizes)+'"]')):f+='[href="'+zt(r)+'"]';var m=f;switch(s){case"style":m=rl(r);break;case"script":m=il(r)}br.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),br.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(ju(m))||s==="script"&&u.querySelector(Lu(m))||(s=u.createElement("link"),Tn(s,"link",r),jt(s),u.head.appendChild(s)))}}function TR(r,s){Zi.m(r,s);var o=nl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+zt(u)+'"][href="'+zt(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=il(r)}if(!br.has(m)&&(r=v({rel:"modulepreload",href:r},s),br.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Lu(m)))return}u=o.createElement("link"),Tn(u,"link",r),jt(u),o.head.appendChild(u)}}}function SR(r,s,o){Zi.S(r,s,o);var u=nl;if(u&&r){var f=jn(u).hoistableStyles,m=rl(r);s=s||"default";var b=f.get(m);if(!b){var S={loading:0,preload:null};if(b=u.querySelector(ju(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=br.get(m))&&zm(r,o);var V=b=u.createElement("link");jt(V),Tn(V,"link",r),V._p=new Promise(function(X,re){V.onload=X,V.onerror=re}),V.addEventListener("load",function(){S.loading|=1}),V.addEventListener("error",function(){S.loading|=2}),S.loading|=4,sf(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:S},f.set(m,b)}}}function xR(r,s){Zi.X(r,s);var o=nl;if(o&&r){var u=jn(o).hoistableScripts,f=il(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0},s),(s=br.get(f))&&Fm(r,s),m=o.createElement("script"),jt(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function AR(r,s){Zi.M(r,s);var o=nl;if(o&&r){var u=jn(o).hoistableScripts,f=il(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=br.get(f))&&Fm(r,s),m=o.createElement("script"),jt(m),Tn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function TE(r,s,o,u){var f=(f=be.current)?rf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=rl(o.href),o=jn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=rl(o.href);var m=jn(f).hoistableStyles,b=m.get(r);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=f.querySelector(ju(r)))&&!m._p&&(b.instance=m,b.state.loading=5),br.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},br.set(r,o),m||RR(f,r,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=il(o),o=jn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function rl(r){return'href="'+zt(r)+'"'}function ju(r){return'link[rel="stylesheet"]['+r+"]"}function SE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function RR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Tn(s,"link",o),jt(s),r.head.appendChild(s))}function il(r){return'[src="'+zt(r)+'"]'}function Lu(r){return"script[async]"+r}function xE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+zt(o.href)+'"]');if(u)return s.instance=u,jt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),jt(u),Tn(u,"style",f),sf(u,o.precedence,r),s.instance=u;case"stylesheet":f=rl(o.href);var m=r.querySelector(ju(f));if(m)return s.state.loading|=4,s.instance=m,jt(m),m;u=SE(o),(f=br.get(f))&&zm(u,f),m=(r.ownerDocument||r).createElement("link"),jt(m);var b=m;return b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),Tn(m,"link",u),s.state.loading|=4,sf(m,o.precedence,r),s.instance=m;case"script":return m=il(o.src),(f=r.querySelector(Lu(m)))?(s.instance=f,jt(f),f):(u=o,(f=br.get(m))&&(u=v({},o),Fm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),jt(f),Tn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,sf(u,o.precedence,r));return s.instance}function sf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,b=0;b<u.length;b++){var S=u[b];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function zm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Fm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var af=null;function AE(r,s,o){if(af===null){var u=new Map,f=af=new Map;f.set(o,u)}else f=af,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[va]||m[Jt]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var S=u.get(b);S?S.push(m):u.set(b,[m])}}return u}function RE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function CR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function CE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Uu=null;function IR(){}function DR(r,s,o){if(Uu===null)throw Error(i(475));var u=Uu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=rl(o.href),m=r.querySelector(ju(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=of.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,jt(m);return}m=r.ownerDocument||r,o=SE(o),(f=br.get(f))&&zm(o,f),m=m.createElement("link"),jt(m);var b=m;b._p=new Promise(function(S,V){b.onload=S,b.onerror=V}),Tn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=of.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function kR(){if(Uu===null)throw Error(i(475));var r=Uu;return r.stylesheets&&r.count===0&&$m(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&$m(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function of(){if(this.count--,this.count===0){if(this.stylesheets)$m(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var lf=null;function $m(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,lf=new Map,s.forEach(OR,r),lf=null,of.call(r))}function OR(r,s){if(!(s.state.loading&4)){var o=lf.get(r);if(o)var u=o.get(null);else{o=new Map,lf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,f),o.set(b,f),this.count++,u=of.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var qu={$$typeof:P,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function MR(r,s,o,u,f,m,b,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function IE(r,s,o,u,f,m,b,S,V,X,re,le){return r=new MR(r,s,o,b,S,V,X,le),s=1,m===!0&&(s|=24),m=Jn(3,null,null,s),r.current=m,m.stateNode=r,s=xp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Ip(m),r}function DE(r){return r?(r=Po,r):Po}function kE(r,s,o,u,f,m){f=DE(f),u.context===null?u.context=f:u.pendingContext=f,u=xs(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=As(r,u,s),o!==null&&(ir(o,r,s),gu(o,r,s))}function OE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Hm(r,s){OE(r,s),(r=r.alternate)&&OE(r,s)}function ME(r){if(r.tag===13){var s=No(r,67108864);s!==null&&ir(s,r,67108864),Hm(r,67108864)}}var uf=!0;function NR(r,s,o,u){var f=W.T;W.T=null;var m=ae.p;try{ae.p=2,Gm(r,s,o,u)}finally{ae.p=m,W.T=f}}function PR(r,s,o,u){var f=W.T;W.T=null;var m=ae.p;try{ae.p=8,Gm(r,s,o,u)}finally{ae.p=m,W.T=f}}function Gm(r,s,o,u){if(uf){var f=Ym(u);if(f===null)Mm(r,s,u,cf,o),PE(r,u);else if(jR(f,r,s,o,u))u.stopPropagation();else if(PE(r,u),s&4&&-1<VR.indexOf(r)){for(;f!==null;){var m=Yr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Kn(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var V=1<<31-on(b);S.entanglements[1]|=V,b&=~V}oi(m),(ut&6)===0&&(Gh=Vt()+500,Mu(0))}}break;case 13:S=No(m,2),S!==null&&ir(S,m,2),Wh(),Hm(m,2)}if(m=Ym(u),m===null&&Mm(r,s,u,cf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Mm(r,s,u,null,o)}}function Ym(r){return r=dr(r),Wm(r)}var cf=null;function Wm(r){if(cf=null,r=Di(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return cf=r,null}function NE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case Qn:return 2;case ur:return 8;case Ti:case po:return 32;case Hr:return 268435456;default:return 32}default:return 32}}var Qm=!1,Us=null,qs=null,Bs=null,Bu=new Map,zu=new Map,zs=[],VR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function PE(r,s){switch(r){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":qs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":Bu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(s.pointerId)}}function Fu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Yr(s),s!==null&&ME(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function jR(r,s,o,u,f){switch(s){case"focusin":return Us=Fu(Us,r,s,o,u,f),!0;case"dragenter":return qs=Fu(qs,r,s,o,u,f),!0;case"mouseover":return Bs=Fu(Bs,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Bu.set(m,Fu(Bu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,zu.set(m,Fu(zu.get(m)||null,r,s,o,u,f)),!0}return!1}function VE(r){var s=Di(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,ys(r.priority,function(){if(o.tag===13){var u=rr();u=Gr(u);var f=No(o,u);f!==null&&ir(f,o,u),Hm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function hf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Ym(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Ni=u,o.target.dispatchEvent(u),Ni=null}else return s=Yr(o),s!==null&&ME(s),r.blockedOn=o,!1;s.shift()}return!0}function jE(r,s,o){hf(r)&&o.delete(s)}function LR(){Qm=!1,Us!==null&&hf(Us)&&(Us=null),qs!==null&&hf(qs)&&(qs=null),Bs!==null&&hf(Bs)&&(Bs=null),Bu.forEach(jE),zu.forEach(jE)}function ff(r,s){r.blockedOn===s&&(r.blockedOn=null,Qm||(Qm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,LR)))}var df=null;function LE(r){df!==r&&(df=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){df===r&&(df=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Wm(u||o)===null)continue;break}var m=Yr(o);m!==null&&(r.splice(s,3),s-=3,Wp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function $u(r){function s(V){return ff(V,r)}Us!==null&&ff(Us,r),qs!==null&&ff(qs,r),Bs!==null&&ff(Bs,r),Bu.forEach(s),zu.forEach(s);for(var o=0;o<zs.length;o++){var u=zs[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<zs.length&&(o=zs[0],o.blockedOn===null);)VE(o),o.blockedOn===null&&zs.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],b=f[Bt]||null;if(typeof m=="function")b||LE(o);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Bt]||null)S=b.formAction;else if(Wm(f)!==null)continue}else S=b.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),LE(o)}}}function Km(r){this._internalRoot=r}pf.prototype.render=Km.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=rr();kE(o,u,r,s,null,null)},pf.prototype.unmount=Km.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;kE(r.current,2,null,r,null,null),Wh(),s[hr]=null}};function pf(r){this._internalRoot=r}pf.prototype.unstable_scheduleHydration=function(r){if(r){var s=cr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<zs.length&&s!==0&&s<zs[o].priority;o++);zs.splice(o,0,r),o===0&&VE(r)}};var UE=e.version;if(UE!=="19.1.0")throw Error(i(527,UE,"19.1.0"));ae.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var UR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mf.isDisabled&&mf.supportsFiber)try{xt=mf.inject(UR),nt=mf}catch{}}return Gu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=t0,m=n0,b=r0,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=IE(r,1,!1,null,null,o,u,f,m,b,S,null),r[hr]=s.current,Om(r),new Km(s)},Gu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=t0,b=n0,S=r0,V=null,X=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(V=o.unstable_transitionCallbacks),o.formState!==void 0&&(X=o.formState)),s=IE(r,1,!0,s,o??null,u,f,m,b,S,V,X),s.context=DE(null),o=s.current,u=rr(),u=Gr(u),f=xs(u),f.callback=null,As(o,f,u),o=u,s.current.lanes=o,et(s,o),oi(s),r[hr]=s.current,Om(r),new pf(s)},Gu.version="19.1.0",Gu}var QE;function KR(){if(QE)return Jm.exports;QE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Jm.exports=QR(),Jm.exports}var XR=KR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var KE="popstate";function ZR(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Cg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:pc(a)}return eC(e,n,null,t)}function It(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JR(){return Math.random().toString(36).substring(2,10)}function XE(t,e){return{usr:t.state,key:t.key,idx:e}}function Cg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?kl(e):e,state:n,key:e&&e.key||i||JR()}}function pc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function kl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function eC(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function w(){d="POP";let M=v(),F=M==null?null:M-g;g=M,p&&p({action:d,location:B.location,delta:F})}function T(M,F){d="PUSH";let $=Cg(B.location,M,F);g=v()+1;let P=XE($,g),H=B.createHref($);try{c.pushState(P,"",H)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(H)}l&&p&&p({action:d,location:B.location,delta:1})}function C(M,F){d="REPLACE";let $=Cg(B.location,M,F);g=v();let P=XE($,g),H=B.createHref($);c.replaceState(P,"",H),l&&p&&p({action:d,location:B.location,delta:0})}function O(M){return tC(M)}let B={get action(){return d},get location(){return t(a,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(KE,w),p=M,()=>{a.removeEventListener(KE,w),p=null}},createHref(M){return e(a,M)},createURL:O,encodeLocation(M){let F=O(M);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:C,go(M){return c.go(M)}};return B}function tC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),It(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:pc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function vT(t,e,n="/"){return nC(t,e,n,!1)}function nC(t,e,n,i){let a=typeof e=="string"?kl(e):e,l=os(a.pathname||"/",n);if(l==null)return null;let c=ET(t);rC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=pC(l);d=fC(c[p],g,i)}return d}function ET(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(It(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=is([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(It(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ET(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:cC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of wT(l.path))a(l,c,p)}),e}function wT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=wT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function rC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var iC=/^:[\w-]+$/,sC=3,aC=2,oC=1,lC=10,uC=-2,ZE=t=>t==="*";function cC(t,e){let n=t.split("/"),i=n.length;return n.some(ZE)&&(i+=uC),e&&(i+=aC),n.filter(a=>!ZE(a)).reduce((a,l)=>a+(iC.test(l)?sC:l===""?oC:lC),i)}function hC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function fC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",w=Wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!w&&g&&n&&!i[i.length-1].route.index&&(w=Wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!w)return null;Object.assign(a,w.params),c.push({params:a,pathname:is([l,w.pathname]),pathnameBase:_C(is([l,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(l=is([l,w.pathnameBase]))}return c}function Wf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:w},T)=>{if(v==="*"){let O=d[T]||"";c=l.slice(0,l.length-O.length).replace(/(.)\/+$/,"$1")}const C=d[T];return w&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function dC(t,e=!1,n=!0){qr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function pC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function mC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?kl(t):t;return{pathname:n?n.startsWith("/")?n:gC(n,e):e,search:vC(i),hash:EC(a)}}function gC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function rg(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function my(t){let e=yC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function gy(t,e,n,i=!1){let a;typeof t=="string"?a=kl(t):(a={...t},It(!a.pathname||!a.pathname.includes("?"),rg("?","pathname","search",a)),It(!a.pathname||!a.pathname.includes("#"),rg("#","pathname","hash",a)),It(!a.search||!a.search.includes("#"),rg("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let w=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),w-=1;a.pathname=T.join("/")}d=w>=0?e[w]:"/"}let p=mC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var is=t=>t.join("/").replace(/\/\/+/g,"/"),_C=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,EC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var bT=["POST","PUT","PATCH","DELETE"];new Set(bT);var bC=["GET",...bT];new Set(bC);var Ol=q.createContext(null);Ol.displayName="DataRouter";var _d=q.createContext(null);_d.displayName="DataRouterState";q.createContext(!1);var TT=q.createContext({isTransitioning:!1});TT.displayName="ViewTransition";var TC=q.createContext(new Map);TC.displayName="Fetchers";var SC=q.createContext(null);SC.displayName="Await";var Fr=q.createContext(null);Fr.displayName="Navigation";var Dc=q.createContext(null);Dc.displayName="Location";var wi=q.createContext({outlet:null,matches:[],isDataRoute:!1});wi.displayName="Route";var yy=q.createContext(null);yy.displayName="RouteError";function xC(t,{relative:e}={}){It(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=q.useContext(Fr),{hash:a,pathname:l,search:c}=Oc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:is([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Ml(){return q.useContext(Dc)!=null}function da(){return It(Ml(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Dc).location}var ST="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xT(t){q.useContext(Fr).static||q.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=q.useContext(wi);return t?LC():AC()}function AC(){It(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let t=q.useContext(Ol),{basename:e,navigator:n}=q.useContext(Fr),{matches:i}=q.useContext(wi),{pathname:a}=da(),l=JSON.stringify(my(i)),c=q.useRef(!1);return xT(()=>{c.current=!0}),q.useCallback((p,g={})=>{if(qr(c.current,ST),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=gy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:is([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}q.createContext(null);function Oc(t,{relative:e}={}){let{matches:n}=q.useContext(wi),{pathname:i}=da(),a=JSON.stringify(my(n));return q.useMemo(()=>gy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function RC(t,e){return AT(t,e)}function AT(t,e,n,i){var F;It(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=q.useContext(Fr),{matches:l}=q.useContext(wi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let $=v&&v.path||"";RT(p,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=da(),T;if(e){let $=typeof e=="string"?kl(e):e;It(g==="/"||((F=$.pathname)==null?void 0:F.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${$.pathname}" was given in the \`location\` prop.`),T=$}else T=w;let C=T.pathname||"/",O=C;if(g!=="/"){let $=g.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice($.length).join("/")}let B=vT(t,{pathname:O});qr(v||B!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),qr(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=OC(B&&B.map($=>Object.assign({},$,{params:Object.assign({},d,$.params),pathname:is([g,a.encodeLocation?a.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?g:is([g,a.encodeLocation?a.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),l,n,i);return e&&M?q.createElement(Dc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},M):M}function CC(){let t=jC(),e=wC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:a},n):null,c)}var IC=q.createElement(CC,null),DC=class extends q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?q.createElement(wi.Provider,{value:this.props.routeContext},q.createElement(yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kC({routeContext:t,match:e,children:n}){let i=q.useContext(Ol);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(wi.Provider,{value:t},n)}function OC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);It(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:w}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let w,T=!1,C=null,O=null;n&&(w=l&&g.route.id?l[g.route.id]:void 0,C=g.route.errorElement||IC,c&&(d<0&&v===0?(RT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):d===v&&(T=!0,O=g.route.hydrateFallbackElement||null)));let B=e.concat(a.slice(0,v+1)),M=()=>{let F;return w?F=C:T?F=O:g.route.Component?F=q.createElement(g.route.Component,null):g.route.element?F=g.route.element:F=p,q.createElement(kC,{match:g,routeContext:{outlet:p,matches:B,isDataRoute:n!=null},children:F})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(DC,{location:n.location,revalidation:n.revalidation,component:C,error:w,children:M(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):M()},null)}function _y(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MC(t){let e=q.useContext(Ol);return It(e,_y(t)),e}function NC(t){let e=q.useContext(_d);return It(e,_y(t)),e}function PC(t){let e=q.useContext(wi);return It(e,_y(t)),e}function vy(t){let e=PC(t),n=e.matches[e.matches.length-1];return It(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function VC(){return vy("useRouteId")}function jC(){var i;let t=q.useContext(yy),e=NC("useRouteError"),n=vy("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function LC(){let{router:t}=MC("useNavigate"),e=vy("useNavigate"),n=q.useRef(!1);return xT(()=>{n.current=!0}),q.useCallback(async(a,l={})=>{qr(n.current,ST),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var JE={};function RT(t,e,n){!e&&!JE[t]&&(JE[t]=!0,qr(!1,n))}q.memo(UC);function UC({routes:t,future:e,state:n}){return AT(t,void 0,n,e)}function qC({to:t,replace:e,state:n,relative:i}){It(Ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=q.useContext(Fr);qr(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=q.useContext(wi),{pathname:c}=da(),d=kc(),p=gy(t,my(l),c,i==="path"),g=JSON.stringify(p);return q.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function Df(t){It(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){It(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=kl(n));let{pathname:p="/",search:g="",hash:v="",state:w=null,key:T="default"}=n,C=q.useMemo(()=>{let O=os(p,c);return O==null?null:{location:{pathname:O,search:g,hash:v,state:w,key:T},navigationType:i}},[c,p,g,v,w,T,i]);return qr(C!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:q.createElement(Fr.Provider,{value:d},q.createElement(Dc.Provider,{children:e,value:C}))}function zC({children:t,location:e}){return RC(Ig(t),e)}function Ig(t,e=[]){let n=[];return q.Children.forEach(t,(i,a)=>{if(!q.isValidElement(i))return;let l=[...e,a];if(i.type===q.Fragment){n.push.apply(n,Ig(i.props.children,l));return}It(i.type===Df,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),It(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ig(i.props.children,l)),n.push(c)}),n}var kf="get",Of="application/x-www-form-urlencoded";function vd(t){return t!=null&&typeof t.tagName=="string"}function FC(t){return vd(t)&&t.tagName.toLowerCase()==="button"}function $C(t){return vd(t)&&t.tagName.toLowerCase()==="form"}function HC(t){return vd(t)&&t.tagName.toLowerCase()==="input"}function GC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YC(t,e){return t.button===0&&(!e||e==="_self")&&!GC(t)}var gf=null;function WC(){if(gf===null)try{new FormData(document.createElement("form"),0),gf=!1}catch{gf=!0}return gf}var QC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ig(t){return t!=null&&!QC.has(t)?(qr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Of}"`),null):t}function KC(t,e){let n,i,a,l,c;if($C(t)){let d=t.getAttribute("action");i=d?os(d,e):null,n=t.getAttribute("method")||kf,a=ig(t.getAttribute("enctype"))||Of,l=new FormData(t)}else if(FC(t)||HC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?os(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||kf,a=ig(t.getAttribute("formenctype"))||ig(d.getAttribute("enctype"))||Of,l=new FormData(d,t),!WC()){let{name:g,type:v,value:w}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,w)}}else{if(vd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=kf,i=null,a=Of,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ey(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function XC(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&os(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function ZC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function eI(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await ZC(l,n);return c.links?c.links():[]}return[]}));return iI(i.flat(1).filter(JC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function ew(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var w;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function tI(t,e,{includeHydrateFallback:n}={}){return nI(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function nI(t){return[...new Set(t)]}function rI(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function iI(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(rI(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function CT(){let t=q.useContext(Ol);return Ey(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function sI(){let t=q.useContext(_d);return Ey(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var wy=q.createContext(void 0);wy.displayName="FrameworkContext";function IT(){let t=q.useContext(wy);return Ey(t,"You must render this element inside a <HydratedRouter> element"),t}function aI(t,e){let n=q.useContext(wy),[i,a]=q.useState(!1),[l,c]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:w}=e,T=q.useRef(null);q.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let B=F=>{F.forEach($=>{c($.isIntersecting)})},M=new IntersectionObserver(B,{threshold:.5});return T.current&&M.observe(T.current),()=>{M.disconnect()}}},[t]),q.useEffect(()=>{if(i){let B=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(B)}}},[i]);let C=()=>{a(!0)},O=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Yu(d,C),onBlur:Yu(p,O),onMouseEnter:Yu(g,C),onMouseLeave:Yu(v,O),onTouchStart:Yu(w,C)}]:[!1,T,{}]}function Yu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function oI({page:t,...e}){let{router:n}=CT(),i=q.useMemo(()=>vT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?q.createElement(uI,{page:t,matches:i,...e}):null}function lI(t){let{manifest:e,routeModules:n}=IT(),[i,a]=q.useState([]);return q.useEffect(()=>{let l=!1;return eI(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function uI({page:t,matches:e,...n}){let i=da(),{manifest:a,routeModules:l}=IT(),{basename:c}=CT(),{loaderData:d,matches:p}=sI(),g=q.useMemo(()=>ew(t,e,p,a,i,"data"),[t,e,p,a,i]),v=q.useMemo(()=>ew(t,e,p,a,i,"assets"),[t,e,p,a,i]),w=q.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let O=new Set,B=!1;if(e.forEach(F=>{var P;let $=a.routes[F.route.id];!$||!$.hasLoader||(!g.some(H=>H.route.id===F.route.id)&&F.route.id in d&&((P=l[F.route.id])!=null&&P.shouldRevalidate)||$.hasClientLoader?B=!0:O.add(F.route.id))}),O.size===0)return[];let M=XC(t,c,"data");return B&&O.size>0&&M.searchParams.set("_routes",e.filter(F=>O.has(F.route.id)).map(F=>F.route.id).join(",")),[M.pathname+M.search]},[c,d,i,a,g,e,t,l]),T=q.useMemo(()=>tI(v,a),[v,a]),C=lI(v);return q.createElement(q.Fragment,null,w.map(O=>q.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...n})),T.map(O=>q.createElement("link",{key:O,rel:"modulepreload",href:O,...n})),C.map(({key:O,link:B})=>q.createElement("link",{key:O,...B})))}function cI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var DT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{DT&&(window.__reactRouterVersion="7.7.0")}catch{}function hI({basename:t,children:e,window:n}){let i=q.useRef();i.current==null&&(i.current=ZR({window:n,v5Compat:!0}));let a=i.current,[l,c]=q.useState({action:a.action,location:a.location}),d=q.useCallback(p=>{q.startTransition(()=>c(p))},[c]);return q.useLayoutEffect(()=>a.listen(d),[a,d]),q.createElement(BC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var kT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OT=q.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:w,...T},C){let{basename:O}=q.useContext(Fr),B=typeof g=="string"&&kT.test(g),M,F=!1;if(typeof g=="string"&&B&&(M=g,DT))try{let I=new URL(window.location.href),L=g.startsWith("//")?new URL(I.protocol+g):new URL(g),k=os(L.pathname,O);L.origin===I.origin&&k!=null?g=k+L.search+L.hash:F=!0}catch{qr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=xC(g,{relative:a}),[P,H,N]=aI(i,T),Z=mI(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:w});function R(I){e&&e(I),I.defaultPrevented||Z(I)}let A=q.createElement("a",{...T,...N,href:M||$,onClick:F||l?e:R,ref:cI(C,H),target:p,"data-discover":!B&&n==="render"?"true":void 0});return P&&!B?q.createElement(q.Fragment,null,A,q.createElement(oI,{page:$})):A});OT.displayName="Link";var fI=q.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let w=Oc(c,{relative:g.relative}),T=da(),C=q.useContext(_d),{navigator:O,basename:B}=q.useContext(Fr),M=C!=null&&EI(w)&&d===!0,F=O.encodeLocation?O.encodeLocation(w).pathname:w.pathname,$=T.pathname,P=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||($=$.toLowerCase(),P=P?P.toLowerCase():null,F=F.toLowerCase()),P&&B&&(P=os(P,B)||P);const H=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let N=$===F||!a&&$.startsWith(F)&&$.charAt(H)==="/",Z=P!=null&&(P===F||!a&&P.startsWith(F)&&P.charAt(F.length)==="/"),R={isActive:N,isPending:Z,isTransitioning:M},A=N?e:void 0,I;typeof i=="function"?I=i(R):I=[i,N?"active":null,Z?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let L=typeof l=="function"?l(R):l;return q.createElement(OT,{...g,"aria-current":A,className:I,ref:v,style:L,to:c,viewTransition:d},typeof p=="function"?p(R):p)});fI.displayName="NavLink";var dI=q.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=kf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:w,...T},C)=>{let O=_I(),B=vI(d,{relative:g}),M=c.toLowerCase()==="get"?"get":"post",F=typeof d=="string"&&kT.test(d),$=P=>{if(p&&p(P),P.defaultPrevented)return;P.preventDefault();let H=P.nativeEvent.submitter,N=(H==null?void 0:H.getAttribute("formmethod"))||c;O(H||P.currentTarget,{fetcherKey:e,method:N,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:w})};return q.createElement("form",{ref:C,method:M,action:B,onSubmit:i?p:$,...T,"data-discover":!F&&t==="render"?"true":void 0})});dI.displayName="Form";function pI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MT(t){let e=q.useContext(Ol);return It(e,pI(t)),e}function mI(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=kc(),p=da(),g=Oc(t,{relative:l});return q.useCallback(v=>{if(YC(v,e)){v.preventDefault();let w=n!==void 0?n:pc(p)===pc(g);d(t,{replace:w,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var gI=0,yI=()=>`__${String(++gI)}__`;function _I(){let{router:t}=MT("useSubmit"),{basename:e}=q.useContext(Fr),n=VC();return q.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=KC(i,e);if(a.navigate===!1){let v=a.fetcherKey||yI();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function vI(t,{relative:e}={}){let{basename:n}=q.useContext(Fr),i=q.useContext(wi);It(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Oc(t||".",{relative:e})},c=da();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(w=>w).forEach(w=>d.append("index",w));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:is([n,l.pathname])),pc(l)}function EI(t,e={}){let n=q.useContext(TT);It(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=MT("useViewTransitionState"),a=Oc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=os(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=os(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Wf(a.pathname,c)!=null||Wf(a.pathname,l)!=null}var _n=function(){return _n=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_n.apply(this,arguments)};function mc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var St="-ms-",ac="-moz-",ot="-webkit-",NT="comm",Ed="rule",by="decl",wI="@import",PT="@keyframes",bI="@layer",VT=Math.abs,Ty=String.fromCharCode,Dg=Object.assign;function TI(t,e){return yn(t,0)^45?(((e<<2^yn(t,0))<<2^yn(t,1))<<2^yn(t,2))<<2^yn(t,3):0}function jT(t){return t.trim()}function Ji(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function Mf(t,e,n){return t.indexOf(e,n)}function yn(t,e){return t.charCodeAt(e)|0}function _l(t,e,n){return t.slice(e,n)}function ci(t){return t.length}function LT(t){return t.length}function Zu(t,e){return e.push(t),t}function SI(t,e){return t.map(e).join("")}function tw(t,e){return t.filter(function(n){return!Ji(n,e)})}var wd=1,vl=1,UT=0,Cr=0,Qt=0,Nl="";function bd(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:wd,column:vl,length:c,return:"",siblings:d}}function Ys(t,e){return Dg(bd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function sl(t){for(;t.root;)t=Ys(t.root,{children:[t]});Zu(t,t.siblings)}function xI(){return Qt}function AI(){return Qt=Cr>0?yn(Nl,--Cr):0,vl--,Qt===10&&(vl=1,wd--),Qt}function Lr(){return Qt=Cr<UT?yn(Nl,Cr++):0,vl++,Qt===10&&(vl=1,wd++),Qt}function Ja(){return yn(Nl,Cr)}function Nf(){return Cr}function Td(t,e){return _l(Nl,t,e)}function kg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RI(t){return wd=vl=1,UT=ci(Nl=t),Cr=0,[]}function CI(t){return Nl="",t}function sg(t){return jT(Td(Cr-1,Og(t===91?t+2:t===40?t+1:t)))}function II(t){for(;(Qt=Ja())&&Qt<33;)Lr();return kg(t)>2||kg(Qt)>3?"":" "}function DI(t,e){for(;--e&&Lr()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return Td(t,Nf()+(e<6&&Ja()==32&&Lr()==32))}function Og(t){for(;Lr();)switch(Qt){case t:return Cr;case 34:case 39:t!==34&&t!==39&&Og(Qt);break;case 40:t===41&&Og(t);break;case 92:Lr();break}return Cr}function kI(t,e){for(;Lr()&&t+Qt!==57;)if(t+Qt===84&&Ja()===47)break;return"/*"+Td(e,Cr-1)+"*"+Ty(t===47?t:Lr())}function OI(t){for(;!kg(Ja());)Lr();return Td(t,Cr)}function MI(t){return CI(Pf("",null,null,null,[""],t=RI(t),0,[0],t))}function Pf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,w=c,T=0,C=0,O=0,B=1,M=1,F=1,$=0,P="",H=a,N=l,Z=i,R=P;M;)switch(O=$,$=Lr()){case 40:if(O!=108&&yn(R,w-1)==58){Mf(R+=Be(sg($),"&","&\f"),"&\f",VT(g?d[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:R+=sg($);break;case 9:case 10:case 13:case 32:R+=II(O);break;case 92:R+=DI(Nf()-1,7);continue;case 47:switch(Ja()){case 42:case 47:Zu(NI(kI(Lr(),Nf()),e,n,p),p);break;default:R+="/"}break;case 123*B:d[g++]=ci(R)*F;case 125*B:case 59:case 0:switch($){case 0:case 125:M=0;case 59+v:F==-1&&(R=Be(R,/\f/g,"")),C>0&&ci(R)-w&&Zu(C>32?rw(R+";",i,n,w-1,p):rw(Be(R," ","")+";",i,n,w-2,p),p);break;case 59:R+=";";default:if(Zu(Z=nw(R,e,n,g,v,a,d,P,H=[],N=[],w,l),l),$===123)if(v===0)Pf(R,e,Z,Z,H,l,w,d,N);else switch(T===99&&yn(R,3)===110?100:T){case 100:case 108:case 109:case 115:Pf(t,Z,Z,i&&Zu(nw(t,Z,Z,0,0,a,d,P,a,H=[],w,N),N),a,N,w,d,i?H:N);break;default:Pf(R,Z,Z,Z,[""],N,0,d,N)}}g=v=C=0,B=F=1,P=R="",w=c;break;case 58:w=1+ci(R),C=O;default:if(B<1){if($==123)--B;else if($==125&&B++==0&&AI()==125)continue}switch(R+=Ty($),$*B){case 38:F=v>0?1:(R+="\f",-1);break;case 44:d[g++]=(ci(R)-1)*F,F=1;break;case 64:Ja()===45&&(R+=sg(Lr())),T=Ja(),v=w=ci(P=R+=OI(Nf())),$++;break;case 45:O===45&&ci(R)==2&&(B=0)}}return l}function nw(t,e,n,i,a,l,c,d,p,g,v,w){for(var T=a-1,C=a===0?l:[""],O=LT(C),B=0,M=0,F=0;B<i;++B)for(var $=0,P=_l(t,T+1,T=VT(M=c[B])),H=t;$<O;++$)(H=jT(M>0?C[$]+" "+P:Be(P,/&\f/g,C[$])))&&(p[F++]=H);return bd(t,e,n,a===0?Ed:d,p,g,v,w)}function NI(t,e,n,i){return bd(t,e,n,NT,Ty(xI()),_l(t,2,-2),0,i)}function rw(t,e,n,i,a){return bd(t,e,n,by,_l(t,0,i),_l(t,i+1,-1),i,a)}function qT(t,e,n){switch(TI(t,e)){case 5103:return ot+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ot+t+t;case 4789:return ac+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+t+ac+t+St+t+t;case 5936:switch(yn(t,e+11)){case 114:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ot+t+St+t+t;case 6165:return ot+t+St+"flex-"+t+t;case 5187:return ot+t+Be(t,/(\w+).+(:[^]+)/,ot+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return ot+t+St+"flex-item-"+Be(t,/flex-|-self/g,"")+(Ji(t,/flex-|baseline/)?"":St+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return ot+t+St+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return ot+t+St+Be(t,"shrink","negative")+t;case 5292:return ot+t+St+Be(t,"basis","preferred-size")+t;case 6060:return ot+"box-"+Be(t,"-grow","")+ot+t+St+Be(t,"grow","positive")+t;case 4554:return ot+Be(t,/([^-])(transform)/g,"$1"+ot+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ot+t+t;case 4200:if(!Ji(t,/flex-|baseline/))return St+"grid-column-align"+_l(t,e)+t;break;case 2592:case 3360:return St+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,Ji(i.props,/grid-\w+-end/)})?~Mf(t+(n=n[e].value),"span",0)?t:St+Be(t,"-start","")+t+St+"grid-row-span:"+(~Mf(n,"span",0)?Ji(n,/\d+/):+Ji(n,/\d+/)-+Ji(t,/\d+/))+";":St+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ji(i.props,/grid-\w+-start/)})?t:St+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,ot+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ci(t)-1-e>6)switch(yn(t,e+1)){case 109:if(yn(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+ac+(yn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mf(t,"stretch",0)?qT(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return St+a+":"+l+g+(c?St+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(yn(t,e+6)===121)return Be(t,":",":"+ot)+t;break;case 6444:switch(yn(t,yn(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(yn(t,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+St+"$2box$3")+t;case 100:return Be(t,":",":"+St)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function Qf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function PI(t,e,n,i){switch(t.type){case bI:if(t.children.length)break;case wI:case by:return t.return=t.return||t.value;case NT:return"";case PT:return t.return=t.value+"{"+Qf(t.children,i)+"}";case Ed:if(!ci(t.value=t.props.join(",")))return""}return ci(n=Qf(t.children,i))?t.return=t.value+"{"+n+"}":""}function VI(t){var e=LT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function jI(t){return function(e){e.root||(e=e.return)&&t(e)}}function LI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case by:t.return=qT(t.value,t.length,n);return;case PT:return Qf([Ys(t,{value:Be(t.value,"@","@"+ot)})],i);case Ed:if(t.length)return SI(n=t.props,function(a){switch(Ji(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sl(Ys(t,{props:[Be(a,/:(read-\w+)/,":"+ac+"$1")]})),sl(Ys(t,{props:[a]})),Dg(t,{props:tw(n,i)});break;case"::placeholder":sl(Ys(t,{props:[Be(a,/:(plac\w+)/,":"+ot+"input-$1")]})),sl(Ys(t,{props:[Be(a,/:(plac\w+)/,":"+ac+"$1")]})),sl(Ys(t,{props:[Be(a,/:(plac\w+)/,St+"input-$1")]})),sl(Ys(t,{props:[a]})),Dg(t,{props:tw(n,i)});break}return""})}}var UI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sr={},El=typeof process<"u"&&sr!==void 0&&(sr.REACT_APP_SC_ATTR||sr.SC_ATTR)||"data-styled",BT="active",zT="data-styled-version",Sd="6.1.19",Sy=`/*!sc*/
`,Kf=typeof window<"u"&&typeof document<"u",qI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&sr!==void 0&&sr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&sr.REACT_APP_SC_DISABLE_SPEEDY!==""?sr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&sr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&sr!==void 0&&sr.SC_DISABLE_SPEEDY!==void 0&&sr.SC_DISABLE_SPEEDY!==""&&sr.SC_DISABLE_SPEEDY!=="false"&&sr.SC_DISABLE_SPEEDY),BI={},xd=Object.freeze([]),wl=Object.freeze({});function FT(t,e,n){return n===void 0&&(n=wl),t.theme!==n.theme&&t.theme||e||n.theme}var $T=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FI=/(^-|-$)/g;function iw(t){return t.replace(zI,"-").replace(FI,"")}var $I=/(a)(d)/gi,yf=52,sw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Mg(t){var e,n="";for(e=Math.abs(t);e>yf;e=e/yf|0)n=sw(e%yf)+n;return(sw(e%yf)+n).replace($I,"$1-$2")}var ag,HT=5381,hl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},GT=function(t){return hl(HT,t)};function YT(t){return Mg(GT(t)>>>0)}function HI(t){return t.displayName||t.name||"Component"}function og(t){return typeof t=="string"&&!0}var WT=typeof Symbol=="function"&&Symbol.for,QT=WT?Symbol.for("react.memo"):60115,GI=WT?Symbol.for("react.forward_ref"):60112,YI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},QI=((ag={})[GI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ag[QT]=KT,ag);function aw(t){return("type"in(e=t)&&e.type.$$typeof)===QT?KT:"$$typeof"in t?QI[t.$$typeof]:YI;var e}var KI=Object.defineProperty,XI=Object.getOwnPropertyNames,ow=Object.getOwnPropertySymbols,ZI=Object.getOwnPropertyDescriptor,JI=Object.getPrototypeOf,lw=Object.prototype;function XT(t,e,n){if(typeof e!="string"){if(lw){var i=JI(e);i&&i!==lw&&XT(t,i,n)}var a=XI(e);ow&&(a=a.concat(ow(e)));for(var l=aw(t),c=aw(e),d=0;d<a.length;++d){var p=a[d];if(!(p in WI||n&&n[p]||c&&p in c||l&&p in l)){var g=ZI(e,p);try{KI(t,p,g)}catch{}}}}return t}function no(t){return typeof t=="function"}function xy(t){return typeof t=="object"&&"styledComponentId"in t}function Ka(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ng(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function gc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Pg(t,e,n){if(n===void 0&&(n=!1),!n&&!gc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Pg(t[i],e[i]);else if(gc(e))for(var i in e)t[i]=Pg(t[i],e[i]);return t}function Ay(t,e){Object.defineProperty(t,"toString",{value:e})}function ro(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var eD=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw ro(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(Sy);return n},t}(),Vf=new Map,Xf=new Map,jf=1,_f=function(t){if(Vf.has(t))return Vf.get(t);for(;Xf.has(jf);)jf++;var e=jf++;return Vf.set(t,e),Xf.set(e,t),e},tD=function(t,e){jf=e+1,Vf.set(t,e),Xf.set(e,t)},nD="style[".concat(El,"][").concat(zT,'="').concat(Sd,'"]'),rD=new RegExp("^".concat(El,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iD=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},sD=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Sy),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(rD);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(tD(v,g),iD(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},uw=function(t){for(var e=document.querySelectorAll(nD),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(El)!==BT&&(sD(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function aD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ZT=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(El,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(El,BT),i.setAttribute(zT,Sd);var c=aD();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},oD=function(){function t(e){this.element=ZT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw ro(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),lD=function(){function t(e){this.element=ZT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),uD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),cw=Kf,cD={isServer:!Kf,useCSSOMInjection:!qI},Zf=function(){function t(e,n,i){e===void 0&&(e=wl),n===void 0&&(n={});var a=this;this.options=_n(_n({},cD),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Kf&&cw&&(cw=!1,uw(this)),Ay(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(w){var T=function(F){return Xf.get(F)}(w);if(T===void 0)return"continue";var C=l.names.get(T),O=c.getGroup(w);if(C===void 0||!C.size||O.length===0)return"continue";var B="".concat(El,".g").concat(w,'[id="').concat(T,'"]'),M="";C!==void 0&&C.forEach(function(F){F.length>0&&(M+="".concat(F,","))}),p+="".concat(O).concat(B,'{content:"').concat(M,'"}').concat(Sy)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return _f(e)},t.prototype.rehydrate=function(){!this.server&&Kf&&uw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(_n(_n({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new uD(a):i?new oD(a):new lD(a)}(this.options),new eD(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(_f(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(_f(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(_f(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),hD=/&/g,fD=/^\s*\/\/.*$/gm;function JT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=JT(n.children,e)),n})}function dD(t){var e,n,i,a=wl,l=a.options,c=l===void 0?wl:l,d=a.plugins,p=d===void 0?xd:d,g=function(T,C,O){return O.startsWith(n)&&O.endsWith(n)&&O.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===Ed&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(hD,n).replace(i,g))}),c.prefix&&v.push(LI),v.push(PI);var w=function(T,C,O,B){C===void 0&&(C=""),O===void 0&&(O=""),B===void 0&&(B="&"),e=B,n=C,i=new RegExp("\\".concat(n,"\\b"),"g");var M=T.replace(fD,""),F=MI(O||C?"".concat(O," ").concat(C," { ").concat(M," }"):M);c.namespace&&(F=JT(F,c.namespace));var $=[];return Qf(F,VI(v.concat(jI(function(P){return $.push(P)})))),$};return w.hash=p.length?p.reduce(function(T,C){return C.name||ro(15),hl(T,C.name)},HT).toString():"",w}var pD=new Zf,Vg=dD(),e1=me.createContext({shouldForwardProp:void 0,styleSheet:pD,stylis:Vg});e1.Consumer;me.createContext(void 0);function jg(){return q.useContext(e1)}var mD=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Vg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ay(this,function(){throw ro(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Vg),this.name+e.hash},t}(),gD=function(t){return t>="A"&&t<="Z"};function hw(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;gD(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var t1=function(t){return t==null||t===!1||t===""},n1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!t1(l)&&(Array.isArray(l)&&l.isCss||no(l)?i.push("".concat(hw(a),":"),l,";"):gc(l)?i.push.apply(i,mc(mc(["".concat(a," {")],n1(l),!1),["}"],!1)):i.push("".concat(hw(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in UI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Js(t,e,n,i){if(t1(t))return[];if(xy(t))return[".".concat(t.styledComponentId)];if(no(t)){if(!no(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return Js(a,e,n,i)}var l;return t instanceof mD?n?(t.inject(n,i),[t.getName(i)]):[t]:gc(t)?n1(t):Array.isArray(t)?Array.prototype.concat.apply(xd,t.map(function(c){return Js(c,e,n,i)})):[t.toString()]}function r1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(no(n)&&!xy(n))return!1}return!0}var yD=GT(Sd),_D=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&r1(e),this.componentId=n,this.baseHash=hl(yD,n),this.baseStyle=i,Zf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Ka(a,this.staticRulesId);else{var l=Ng(Js(this.rules,e,n,i)),c=Mg(hl(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Ka(a,c),this.staticRulesId=c}else{for(var p=hl(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")g+=w;else if(w){var T=Ng(Js(w,e,n,i));p=hl(p,T+v),g+=T}}if(g){var C=Mg(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,i(g,".".concat(C),void 0,this.componentId)),a=Ka(a,C)}}return a},t}(),yc=me.createContext(void 0);yc.Consumer;function vD(t){var e=me.useContext(yc),n=q.useMemo(function(){return function(i,a){if(!i)throw ro(14);if(no(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw ro(8);return a?_n(_n({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?me.createElement(yc.Provider,{value:n},t.children):null}var lg={};function ED(t,e,n){var i=xy(t),a=t,l=!og(t),c=e.attrs,d=c===void 0?xd:c,p=e.componentId,g=p===void 0?function(H,N){var Z=typeof H!="string"?"sc":iw(H);lg[Z]=(lg[Z]||0)+1;var R="".concat(Z,"-").concat(YT(Sd+Z+lg[Z]));return N?"".concat(N,"-").concat(R):R}(e.displayName,e.parentComponentId):p,v=e.displayName,w=v===void 0?function(H){return og(H)?"styled.".concat(H):"Styled(".concat(HI(H),")")}(t):v,T=e.displayName&&e.componentId?"".concat(iw(e.displayName),"-").concat(e.componentId):e.componentId||g,C=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,O=e.shouldForwardProp;if(i&&a.shouldForwardProp){var B=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;O=function(H,N){return B(H,N)&&M(H,N)}}else O=B}var F=new _D(n,T,i?a.componentStyle:void 0);function $(H,N){return function(Z,R,A){var I=Z.attrs,L=Z.componentStyle,k=Z.defaultProps,U=Z.foldedComponentIds,D=Z.styledComponentId,Ne=Z.target,oe=me.useContext(yc),W=jg(),ae=Z.shouldForwardProp||W.shouldForwardProp,fe=FT(R,oe,k)||wl,_e=function(Ie,be,yt){for(var $e,Tt=_n(_n({},be),{className:void 0,theme:yt}),Cn=0;Cn<Ie.length;Cn+=1){var de=no($e=Ie[Cn])?$e(Tt):$e;for(var Te in de)Tt[Te]=Te==="className"?Ka(Tt[Te],de[Te]):Te==="style"?_n(_n({},Tt[Te]),de[Te]):de[Te]}return be.className&&(Tt.className=Ka(Tt.className,be.className)),Tt}(I,R,fe),j=_e.as||Ne,ne={};for(var he in _e)_e[he]===void 0||he[0]==="$"||he==="as"||he==="theme"&&_e.theme===fe||(he==="forwardedAs"?ne.as=_e.forwardedAs:ae&&!ae(he,j)||(ne[he]=_e[he]));var ce=function(Ie,be){var yt=jg(),$e=Ie.generateAndInjectStyles(be,yt.styleSheet,yt.stylis);return $e}(L,_e),ve=Ka(U,D);return ce&&(ve+=" "+ce),_e.className&&(ve+=" "+_e.className),ne[og(j)&&!$T.has(j)?"class":"className"]=ve,A&&(ne.ref=A),q.createElement(j,ne)}(P,H,N)}$.displayName=w;var P=me.forwardRef($);return P.attrs=C,P.componentStyle=F,P.displayName=w,P.shouldForwardProp=O,P.foldedComponentIds=i?Ka(a.foldedComponentIds,a.styledComponentId):"",P.styledComponentId=T,P.target=i?a.target:t,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=i?function(N){for(var Z=[],R=1;R<arguments.length;R++)Z[R-1]=arguments[R];for(var A=0,I=Z;A<I.length;A++)Pg(N,I[A],!0);return N}({},a.defaultProps,H):H}}),Ay(P,function(){return".".concat(P.styledComponentId)}),l&&XT(P,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function fw(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var dw=function(t){return Object.assign(t,{isCss:!0})};function i1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(no(t)||gc(t))return dw(Js(fw(xd,mc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Js(i):dw(Js(fw(i,e)))}function Lg(t,e,n){if(n===void 0&&(n=wl),!e)throw ro(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,i1.apply(void 0,mc([a],l,!1)))};return i.attrs=function(a){return Lg(t,e,_n(_n({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Lg(t,e,_n(_n({},n),a))},i}var s1=function(t){return Lg(ED,t)},G=s1;$T.forEach(function(t){G[t]=s1(t)});var wD=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=r1(e),Zf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Ng(Js(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Zf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function a1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=i1.apply(void 0,mc([t],e,!1)),a="sc-global-".concat(YT(JSON.stringify(i))),l=new wD(i,a),c=function(p){var g=jg(),v=me.useContext(yc),w=me.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(w,p,g.styleSheet,v,g.stylis),me.useLayoutEffect(function(){if(!g.styleSheet.server)return d(w,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(w,g.styleSheet)}},[w,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,w,T){if(l.isStatic)l.renderStyles(p,BI,v,T);else{var C=_n(_n({},g),{theme:FT(g,w,c.defaultProps)});l.renderStyles(p,C,v,T)}}return me.memo(c)}/**
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
 */const bD=()=>{};var pw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},TD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},l1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,w=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,C=g&63;p||(C=64,c||(T=64)),i.push(n[v],n[w],n[T],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const w=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||w==null)throw new SD;const T=l<<2|d>>4;if(i.push(T),g!==64){const C=d<<4&240|g>>2;if(i.push(C),w!==64){const O=g<<6&192|w;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xD=function(t){const e=o1(t);return l1.encodeByteArray(e,!0)},Jf=function(t){return xD(t).replace(/\./g,"")},u1=function(t){try{return l1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RD=()=>AD().__FIREBASE_DEFAULTS__,CD=()=>{if(typeof process>"u"||typeof pw>"u")return;const t=pw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ID=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&u1(t[1]);return e&&JSON.parse(e)},Ad=()=>{try{return bD()||RD()||CD()||ID()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c1=t=>{var e,n;return(n=(e=Ad())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},DD=t=>{const e=c1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},h1=()=>{var t;return(t=Ad())==null?void 0:t.config},f1=t=>{var e;return(e=Ad())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Pl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function d1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function OD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jf(JSON.stringify(n)),Jf(JSON.stringify(c)),""].join(".")}const oc={};function MD(){const t={prod:[],emulator:[]};for(const e of Object.keys(oc))oc[e]?t.emulator.push(e):t.prod.push(e);return t}function ND(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let mw=!1;function p1(t,e){if(typeof window>"u"||typeof document>"u"||!Pl(window.location.host)||oc[t]===e||oc[t]||mw)return;oc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=MD().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{mw=!0,c()},T}function v(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=ND(i),C=n("text"),O=document.getElementById(C)||document.createElement("span"),B=n("learnmore"),M=document.getElementById(B)||document.createElement("a"),F=n("preprendIcon"),$=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const P=T.element;d(P),v(M,B);const H=g();p($,F),P.append($,O,M,H),document.body.appendChild(P)}l?(O.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pn())}function VD(){var e;const t=(e=Ad())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qD(){const t=Pn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BD(){return!VD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zD(){try{return typeof indexedDB=="object"}catch{return!1}}function FD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="FirebaseError";class fs extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=$D,Object.setPrototypeOf(this,fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mc.prototype.create)}}class Mc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?HD(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new fs(a,d,i)}}function HD(t,e){return t.replace(GD,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const GD=/\{\$([^}]+)}/g;function YD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(gw(l)&&gw(c)){if(!io(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function gw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ju(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ec(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WD(t,e){const n=new QD(t,e);return n.subscribe.bind(n)}class QD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");KD(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=ug),a.error===void 0&&(a.error=ug),a.complete===void 0&&(a.complete=ug);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ug(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class so{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new kD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JD(e))try{this.getOrInitializeService({instanceIdentifier:Wa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Wa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wa){return this.instances.has(e)}getOptions(e=Wa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ZD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wa){return this.component?this.component.multipleInstances?e:Wa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZD(t){return t===Wa?void 0:t}function JD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ye||(Ye={}));const tk={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},nk=Ye.INFO,rk={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},ik=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=rk[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ry{constructor(e){this.name=e,this._logLevel=nk,this._logHandler=ik,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const sk=(t,e)=>e.some(n=>t instanceof n);let yw,_w;function ak(){return yw||(yw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ok(){return _w||(_w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m1=new WeakMap,Ug=new WeakMap,g1=new WeakMap,cg=new WeakMap,Cy=new WeakMap;function lk(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(ea(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&m1.set(n,t)}).catch(()=>{}),Cy.set(e,t),e}function uk(t){if(Ug.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Ug.set(t,e)}let qg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ug.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ea(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ck(t){qg=t(qg)}function hk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(hg(this),e,...n);return g1.set(i,e.sort?e.sort():[e]),ea(i)}:ok().includes(t)?function(...e){return t.apply(hg(this),e),ea(m1.get(this))}:function(...e){return ea(t.apply(hg(this),e))}}function fk(t){return typeof t=="function"?hk(t):(t instanceof IDBTransaction&&uk(t),sk(t,ak())?new Proxy(t,qg):t)}function ea(t){if(t instanceof IDBRequest)return lk(t);if(cg.has(t))return cg.get(t);const e=fk(t);return e!==t&&(cg.set(t,e),Cy.set(e,t)),e}const hg=t=>Cy.get(t);function dk(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=ea(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ea(c.result),p.oldVersion,p.newVersion,ea(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const pk=["get","getKey","getAll","getAllKeys","count"],mk=["put","add","delete","clear"],fg=new Map;function vw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fg.get(e))return fg.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=mk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||pk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return fg.set(e,l),l}ck(t=>({...t,get:(e,n,i)=>vw(e,n)||t.get(e,n,i),has:(e,n)=>!!vw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function yk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bg="@firebase/app",Ew="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Ry("@firebase/app"),_k="@firebase/app-compat",vk="@firebase/analytics-compat",Ek="@firebase/analytics",wk="@firebase/app-check-compat",bk="@firebase/app-check",Tk="@firebase/auth",Sk="@firebase/auth-compat",xk="@firebase/database",Ak="@firebase/data-connect",Rk="@firebase/database-compat",Ck="@firebase/functions",Ik="@firebase/functions-compat",Dk="@firebase/installations",kk="@firebase/installations-compat",Ok="@firebase/messaging",Mk="@firebase/messaging-compat",Nk="@firebase/performance",Pk="@firebase/performance-compat",Vk="@firebase/remote-config",jk="@firebase/remote-config-compat",Lk="@firebase/storage",Uk="@firebase/storage-compat",qk="@firebase/firestore",Bk="@firebase/ai",zk="@firebase/firestore-compat",Fk="firebase",$k="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="[DEFAULT]",Hk={[Bg]:"fire-core",[_k]:"fire-core-compat",[Ek]:"fire-analytics",[vk]:"fire-analytics-compat",[bk]:"fire-app-check",[wk]:"fire-app-check-compat",[Tk]:"fire-auth",[Sk]:"fire-auth-compat",[xk]:"fire-rtdb",[Ak]:"fire-data-connect",[Rk]:"fire-rtdb-compat",[Ck]:"fire-fn",[Ik]:"fire-fn-compat",[Dk]:"fire-iid",[kk]:"fire-iid-compat",[Ok]:"fire-fcm",[Mk]:"fire-fcm-compat",[Nk]:"fire-perf",[Pk]:"fire-perf-compat",[Vk]:"fire-rc",[jk]:"fire-rc-compat",[Lk]:"fire-gcs",[Uk]:"fire-gcs-compat",[qk]:"fire-fst",[zk]:"fire-fst-compat",[Bk]:"fire-vertex","fire-js":"fire-js",[Fk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map,Gk=new Map,Fg=new Map;function ww(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bl(t){const e=t.name;if(Fg.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;Fg.set(e,t);for(const n of ed.values())ww(n,t);for(const n of Gk.values())ww(n,t);return!0}function Iy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ta=new Mc("app","Firebase",Yk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new so("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ta.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=$k;function y1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:zg,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw ta.create("bad-app-name",{appName:String(a)});if(n||(n=h1()),!n)throw ta.create("no-options");const l=ed.get(a);if(l){if(io(n,l.options)&&io(i,l.config))return l;throw ta.create("duplicate-app",{appName:a})}const c=new ek(a);for(const p of Fg.values())c.addComponent(p);const d=new Wk(n,i,c);return ed.set(a,d),d}function _1(t=zg){const e=ed.get(t);if(!e&&t===zg&&h1())return y1();if(!e)throw ta.create("no-app",{appName:t});return e}function na(t,e,n){let i=Hk[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(c.join(" "));return}bl(new so(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Qk="firebase-heartbeat-database",Kk=1,_c="firebase-heartbeat-store";let dg=null;function v1(){return dg||(dg=dk(Qk,Kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_c)}catch(n){console.warn(n)}}}}).catch(t=>{throw ta.create("idb-open",{originalErrorMessage:t.message})})),dg}async function Xk(t){try{const n=(await v1()).transaction(_c),i=await n.objectStore(_c).get(E1(t));return await n.done,i}catch(e){if(e instanceof fs)ls.warn(e.message);else{const n=ta.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function bw(t,e){try{const i=(await v1()).transaction(_c,"readwrite");await i.objectStore(_c).put(e,E1(t)),await i.done}catch(n){if(n instanceof fs)ls.warn(n.message);else{const i=ta.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(i.message)}}}function E1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zk=1024,Jk=30;class eO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Tw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Jk){const c=rO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ls.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tw(),{heartbeatsToSend:i,unsentEntries:a}=tO(this._heartbeatsCache.heartbeats),l=Jf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return ls.warn(n),""}}}function Tw(){return new Date().toISOString().substring(0,10)}function tO(t,e=Zk){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),Sw(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Sw(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class nO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zD()?FD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sw(t){return Jf(JSON.stringify({version:2,heartbeats:t})).length}function rO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){bl(new so("platform-logger",e=>new gk(e),"PRIVATE")),bl(new so("heartbeat",e=>new eO(e),"PRIVATE")),na(Bg,Ew,t),na(Bg,Ew,"esm2020"),na("fire-js","")}iO("");function w1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sO=w1,b1=new Mc("auth","Firebase",w1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Ry("@firebase/auth");function aO(t,...e){td.logLevel<=Ye.WARN&&td.warn(`Auth (${Vl}): ${t}`,...e)}function Lf(t,...e){td.logLevel<=Ye.ERROR&&td.error(`Auth (${Vl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,...e){throw Dy(t,...e)}function pi(t,...e){return Dy(t,...e)}function T1(t,e,n){const i={...sO(),[e]:n};return new Mc("auth","Firebase",i).create(e,{appName:t.name})}function ss(t){return T1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dy(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return b1.create(t,...e)}function ke(t,e,...n){if(!t)throw Dy(e,...n)}function es(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lf(e),new Error(e)}function us(t,e){t||es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oO(){return xw()==="http:"||xw()==="https:"}function xw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oO()||LD()||"connection"in navigator)?navigator.onLine:!0}function uO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,us(n>e,"Short delay should be less than long delay!"),this.isMobile=PD()||UD()}get(){return lO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){us(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fO=new Pc(3e4,6e4);function pa(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ds(t,e,n,i,a={}){return x1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Nc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return jD()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Pl(t.emulatorConfig.host)&&(g.credentials="include"),S1.fetch()(await A1(t,t.config.apiHost,n,d),g)})}async function x1(t,e,n){t._canInitEmulator=!1;const i={...cO,...e};try{const a=new pO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw vf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw vf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw vf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw vf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw T1(t,v,g);Br(t,v)}}catch(a){if(a instanceof fs)throw a;Br(t,"network-request-failed",{message:String(a)})}}async function Vc(t,e,n,i,a={}){const l=await ds(t,e,n,i,a);return"mfaPendingCredential"in l&&Br(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function A1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?ky(t.config,a):`${t.config.apiScheme}://${a}`;return hO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function dO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(pi(this.auth,"network-request-failed")),fO.get())})}}function vf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=pi(t,e,i);return a.customData._tokenResponse=n,a}function Aw(t){return t!==void 0&&t.enterprise!==void 0}class mO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gO(t,e){return ds(t,"GET","/v2/recaptchaConfig",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function nd(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _O(t,e=!1){const n=Zt(t),i=await n.getIdToken(e),a=Oy(i);ke(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:lc(pg(a.auth_time)),issuedAtTime:lc(pg(a.iat)),expirationTime:lc(pg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function pg(t){return Number(t)*1e3}function Oy(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Lf("JWT malformed, contained fewer than 3 sections"),null;try{const a=u1(n);return a?JSON.parse(a):(Lf("Failed to decode base64 JWT payload"),null)}catch(a){return Lf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Rw(t){const e=Oy(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof fs&&vO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function vO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lc(this.lastLoginAt),this.creationTime=lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(t){var w;const e=t.auth,n=await t.getIdToken(),i=await Tl(t,nd(e,{idToken:n}));ke(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(w=a.providerUserInfo)!=null&&w.length?R1(a.providerUserInfo):[],c=bO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Hg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function wO(t){const e=Zt(t);await rd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function R1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e){const n=await x1(t,{},async()=>{const i=Nc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await A1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Pl(t.emulatorConfig.host)&&(p.credentials="include"),S1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SO(t,e){return ds(t,"POST","/v2/accounts:revokeToken",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=Rw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await TO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new dl;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ke(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dl,this.toJSON())}_performRefresh(){return es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new EO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Hg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _O(this,e)}reload(){return wO(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await rd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sr(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await Tl(this,yO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:w,emailVerified:T,isAnonymous:C,providerData:O,stsTokenManager:B}=n;ke(w&&B,e,"internal-error");const M=dl.fromJSON(this.name,B);ke(typeof w=="string",e,"internal-error"),$s(i,e.name),$s(a,e.name),ke(typeof T=="boolean",e,"internal-error"),ke(typeof C=="boolean",e,"internal-error"),$s(l,e.name),$s(c,e.name),$s(d,e.name),$s(p,e.name),$s(g,e.name),$s(v,e.name);const F=new Vr({uid:w,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:C,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:M,createdAt:g,lastLoginAt:v});return O&&Array.isArray(O)&&(F.providerData=O.map($=>({...$}))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,n,i=!1){const a=new dl;a.updateFromServerResponse(n);const l=new Vr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await rd(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];ke(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?R1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new dl;d.updateFromIdToken(i);const p=new Vr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Hg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new Map;function ts(t){us(t instanceof Function,"Expected a class definition");let e=Cw.get(t);return e?(us(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C1.type="NONE";const Iw=C1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e,n){return`firebase:${t}:${e}:${n}`}class pl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Uf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Uf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nd(this.auth,{idToken:e}).catch(()=>{});return n?Vr._fromGetAccountInfoResponse(this.auth,n,e):null}return Vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new pl(ts(Iw),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ts(Iw);const c=Uf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let w;if(typeof v=="string"){const T=await nd(e,{idToken:v}).catch(()=>{});if(!T)break;w=await Vr._fromGetAccountInfoResponse(e,T,v)}else w=Vr._fromJSON(e,v);g!==l&&(d=w),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new pl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new pl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N1(e))return"Blackberry";if(P1(e))return"Webos";if(D1(e))return"Safari";if((e.includes("chrome/")||k1(e))&&!e.includes("edge/"))return"Chrome";if(M1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function I1(t=Pn()){return/firefox\//i.test(t)}function D1(t=Pn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function k1(t=Pn()){return/crios\//i.test(t)}function O1(t=Pn()){return/iemobile/i.test(t)}function M1(t=Pn()){return/android/i.test(t)}function N1(t=Pn()){return/blackberry/i.test(t)}function P1(t=Pn()){return/webos/i.test(t)}function My(t=Pn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xO(t=Pn()){var e;return My(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AO(){return qD()&&document.documentMode===10}function V1(t=Pn()){return My(t)||M1(t)||P1(t)||N1(t)||/windows phone/i.test(t)||O1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e=[]){let n;switch(t){case"Browser":n=Dw(Pn());break;case"Worker":n=`${Dw(Pn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vl}/${i}`}/**
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
 */class RO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function CO(t,e={}){return ds(t,"GET","/v2/passwordPolicy",pa(t,e))}/**
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
 */const IO=6;class DO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??IO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kw(this),this.idTokenSubscription=new kw(this),this.beforeStateQueue=new RO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ts(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await pl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nd(this,{idToken:e}),i=await Vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Sr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sr(this.app))return Promise.reject(ss(this));const n=e?Zt(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sr(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sr(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CO(this),n=new DO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await SO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ts(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await pl.create(this,[ts(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Sr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&aO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function co(t){return Zt(t)}class kw{constructor(e){this.auth=e,this.observer=null,this.addObserver=WD(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OO(t){Rd=t}function L1(t){return Rd.loadJS(t)}function MO(){return Rd.recaptchaEnterpriseScript}function NO(){return Rd.gapiScript}function PO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class VO{constructor(){this.enterprise=new jO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const LO="recaptcha-enterprise",U1="NO_RECAPTCHA";class UO{constructor(e){this.type=LO,this.auth=co(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{gO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new mO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Aw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(U1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Aw(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=MO();p.length!==0&&(p+=d),L1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Ow(t,e,n,i=!1,a=!1){const l=new UO(t);let c;if(a)c=U1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Gg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ow(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ow(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e){const n=Iy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(io(l,e??{}))return a;Br(a,"already-initialized")}return n.initialize({options:e})}function BO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ts);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zO(t,e,n){const i=co(t);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=q1(e),{host:c,port:d}=FO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(io(g,i.config.emulator)&&io(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Pl(c)?(d1(`${l}//${c}${p}`),p1("Auth",!0)):$O()}function q1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FO(t){const e=q1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Mw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Mw(c)}}}function Mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $O(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return es("not implemented")}_getIdTokenResponse(e){return es("not implemented")}_linkToIdToken(e,n){return es("not implemented")}_getReauthenticationResolver(e){return es("not implemented")}}async function HO(t,e){return ds(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){return Vc(t,"POST","/v1/accounts:signInWithPassword",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",pa(t,e))}async function WO(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Ny{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new vc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new vc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,n,"signInWithPassword",GO);case"emailLink":return YO(e,{email:this._email,oobCode:this._password});default:Br(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gg(e,i,"signUpPassword",HO);case"emailLink":return WO(e,{idToken:n,email:this._email,oobCode:this._password});default:Br(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t,e){return Vc(t,"POST","/v1/accounts:signInWithIdp",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="http://localhost";class ao extends Ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Br("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new ao(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ml(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ml(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ml(e,n)}buildRequest(){const e={requestUri:QO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XO(t){const e=Ju(ec(t)).link,n=e?Ju(ec(e)).deep_link_id:null,i=Ju(ec(t)).deep_link_id;return(i?Ju(ec(i)).link:null)||i||n||e||t}class Py{constructor(e){const n=Ju(ec(e)),i=n.apiKey??null,a=n.oobCode??null,l=KO(n.mode??null);ke(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=XO(e);try{return new Py(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.providerId=jl.PROVIDER_ID}static credential(e,n){return vc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Py.parseLink(n);return ke(i,"argument-error"),vc._fromEmailAndCode(e,i.code,i.tenantId)}}jl.PROVIDER_ID="password";jl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends B1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends jc{constructor(){super("facebook.com")}static credential(e){return ao._fromParams({providerId:Ws.PROVIDER_ID,signInMethod:Ws.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ws.credentialFromTaggedObject(e)}static credentialFromError(e){return Ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ws.credential(e.oauthAccessToken)}catch{return null}}}Ws.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ws.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends jc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ao._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Qs.credential(n,i)}catch{return null}}}Qs.GOOGLE_SIGN_IN_METHOD="google.com";Qs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends jc{constructor(){super("github.com")}static credential(e){return ao._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ks.credential(e.oauthAccessToken)}catch{return null}}}Ks.GITHUB_SIGN_IN_METHOD="github.com";Ks.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends jc{constructor(){super("twitter.com")}static credential(e,n){return ao._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Xs.credential(n,i)}catch{return null}}}Xs.TWITTER_SIGN_IN_METHOD="twitter.com";Xs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e){return Vc(t,"POST","/v1/accounts:signUp",pa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Vr._fromIdTokenResponse(e,i,a),c=Nw(i);return new oo({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=Nw(i);return new oo({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function Nw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends fs{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,id.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new id(e,n,i,a)}}function z1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?id._fromErrorAndOperation(t,l,e,i):l})}async function JO(t,e,n=!1){const i=await Tl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oo._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(t,e,n=!1){const{auth:i}=t;if(Sr(i.app))return Promise.reject(ss(i));const a="reauthenticate";try{const l=await Tl(t,z1(i,a,e,t),n);ke(l.idToken,i,"internal-error");const c=Oy(l.idToken);ke(c,i,"internal-error");const{sub:d}=c;return ke(t.uid===d,i,"user-mismatch"),oo._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Br(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){if(Sr(t.app))return Promise.reject(ss(t));const i="signIn",a=await z1(t,i,e),l=await oo._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function tM(t,e){return F1(co(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t){const e=co(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nM(t,e,n){if(Sr(t.app))return Promise.reject(ss(t));const i=co(t),c=await Gg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&$1(t),p}),d=await oo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function rM(t,e,n){return Sr(t.app)?Promise.reject(ss(t)):tM(Zt(t),jl.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&$1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e){return ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Zt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await Tl(i,iM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function aM(t,e,n,i){return Zt(t).onIdTokenChanged(e,n,i)}function oM(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}function Lc(t,e,n,i){return Zt(t).onAuthStateChanged(e,n,i)}function lM(t){return Zt(t).signOut()}const sd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sd,"1"),this.storage.removeItem(sd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=1e3,cM=10;class G1 extends H1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=V1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);AO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,cM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},uM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G1.type="LOCAL";const hM=G1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1 extends H1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y1.type="SESSION";const W1=Y1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Cd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await fM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Vy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}function pM(t){mi().location.href=t}/**
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
 */function Q1(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function mM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yM(){return Q1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="firebaseLocalStorageDb",_M=1,ad="firebaseLocalStorage",X1="fbase_key";class Uc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([ad],e?"readwrite":"readonly").objectStore(ad)}function vM(){const t=indexedDB.deleteDatabase(K1);return new Uc(t).toPromise()}function Yg(){const t=indexedDB.open(K1,_M);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ad,{keyPath:X1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ad)?e(i):(i.close(),await vM(),e(await Yg()))})})}async function Pw(t,e,n){const i=Id(t,!0).put({[X1]:e,value:n});return new Uc(i).toPromise()}async function EM(t,e){const n=Id(t,!1).get(e),i=await new Uc(n).toPromise();return i===void 0?null:i.value}function Vw(t,e){const n=Id(t,!0).delete(e);return new Uc(n).toPromise()}const wM=800,bM=3;class Z1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>bM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cd._getInstance(yM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await mM(),!this.activeServiceWorker)return;this.sender=new dM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yg();return await Pw(e,sd,"1"),await Vw(e,sd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Pw(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>EM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Id(a,!1).getAll();return new Uc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z1.type="LOCAL";const TM=Z1;new Pc(3e4,6e4);/**
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
 */function SM(t,e){return e?ts(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends Ny{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ml(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ml(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ml(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xM(t){return F1(t.auth,new jy(t),t.bypassAuthState)}function AM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),eM(n,new jy(t),t.bypassAuthState)}async function RM(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),JO(n,new jy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xM;case"linkViaPopup":case"linkViaRedirect":return RM;case"reauthViaPopup":case"reauthViaRedirect":return AM;default:Br(this.auth,"internal-error")}}resolve(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=new Pc(2e3,1e4);class fl extends J1{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,fl.currentPopupAction&&fl.currentPopupAction.cancel(),fl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){us(this.filter.length===1,"Popup operations only handle one event");const e=Vy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CM.get())};e()}}fl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM="pendingRedirect",qf=new Map;class DM extends J1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=qf.get(this.auth._key());if(!e){try{const i=await kM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qf.set(this.auth._key(),e)}return this.bypassAuthState||qf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kM(t,e){const n=NM(e),i=MM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function OM(t,e){qf.set(t._key(),e)}function MM(t){return ts(t._redirectPersistence)}function NM(t){return Uf(IM,t.config.apiKey,t.name)}async function PM(t,e,n=!1){if(Sr(t.app))return Promise.reject(ss(t));const i=co(t),a=SM(i,e),c=await new DM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=600*1e3;class jM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!eS(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(pi(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VM&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UM(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BM=/^https?/;async function zM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UM(t);for(const n of e)try{if(FM(n))return}catch{}Br(t,"unauthorized-domain")}function FM(t){const e=$g(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!BM.test(n))return!1;if(qM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const $M=new Pc(3e4,6e4);function Lw(){const t=mi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HM(t){return new Promise((e,n)=>{var a,l,c;function i(){Lw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lw(),n(pi(t,"network-request-failed"))},timeout:$M.get()})}if((l=(a=mi().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=mi().gapi)!=null&&c.load)i();else{const d=PO("iframefcb");return mi()[d]=()=>{gapi.load?i():n(pi(t,"network-request-failed"))},L1(`${NO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw Bf=null,e})}let Bf=null;function GM(t){return Bf=Bf||HM(t),Bf}/**
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
 */const YM=new Pc(5e3,15e3),WM="__/auth/iframe",QM="emulator/auth/iframe",KM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZM(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ky(e,QM):`https://${t.config.authDomain}/${WM}`,i={apiKey:e.apiKey,appName:t.name,v:Vl},a=XM.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Nc(i).slice(1)}`}async function JM(t){const e=await GM(t),n=mi().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:ZM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KM,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=pi(t,"network-request-failed"),d=mi().setTimeout(()=>{l(c)},YM.get());function p(){mi().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const eN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tN=500,nN=600,rN="_blank",iN="http://localhost";class Uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sN(t,e,n,i=tN,a=nN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...eN,width:i.toString(),height:a.toString(),top:l,left:c},g=Pn().toLowerCase();n&&(d=k1(g)?rN:n),I1(g)&&(e=e||iN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[C,O])=>`${T}${C}=${O},`,"");if(xO(g)&&d!=="_self")return aN(e||"",d),new Uw(null);const w=window.open(e||"",d,v);ke(w,t,"popup-blocked");try{w.focus()}catch{}return new Uw(w)}function aN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const oN="__/auth/handler",lN="emulator/auth/handler",uN=encodeURIComponent("fac");async function qw(t,e,n,i,a,l){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Vl,eventId:a};if(e instanceof B1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",YD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))c[v]=w}if(e instanceof jc){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${uN}=${encodeURIComponent(p)}`:"";return`${cN(t)}?${Nc(d).slice(1)}${g}`}function cN({config:t}){return t.emulator?ky(t,lN):`https://${t.authDomain}/${oN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="webStorageSupport";class hN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W1,this._completeRedirectFn=PM,this._overrideRedirectResult=OM}async _openPopup(e,n,i,a){var c;us((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await qw(e,n,i,$g(),a);return sN(e,l,Vy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await qw(e,n,i,$g(),a);return pM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(us(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await JM(e),i=new jM(e);return n.register("authEvent",a=>(ke(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mg,{type:mg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[mg];l!==void 0&&n(!!l),Br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V1()||D1()||My()}}const fN=hN;var Bw="@firebase/auth",zw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mN(t){bl(new so("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j1(t)},g=new kO(i,a,l,p);return BO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bl(new so("auth-internal",e=>{const n=co(e.getProvider("auth").getImmediate());return(i=>new dN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),na(Bw,zw,pN(t)),na(Bw,zw,"esm2020")}/**
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
 */const gN=300,yN=f1("authIdTokenMaxAge")||gN;let Fw=null;const _N=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>yN)return;const a=n==null?void 0:n.token;Fw!==a&&(Fw=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function vN(t=_1()){const e=Iy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qO(t,{popupRedirectResolver:fN,persistence:[TM,hM,W1]}),i=f1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=_N(l.toString());oM(n,c,()=>c(n.currentUser)),aM(n,d=>c(d))}}const a=c1("auth");return a&&zO(n,`http://${a}`),n}function EN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}OO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=pi("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",EN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mN("Browser");var wN="firebase",bN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */na(wN,bN,"app");var $w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,tS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function I(){}I.prototype=A.prototype,R.D=A.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(L,k,U){for(var D=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)D[Ne-2]=arguments[Ne];return A.prototype[k].apply(L,D)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,A,I){I||(I=0);var L=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)L[k]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(k=0;16>k;++k)L[k]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=R.g[0],I=R.g[1],k=R.g[2];var U=R.g[3],D=A+(U^I&(k^U))+L[0]+3614090360&4294967295;A=I+(D<<7&4294967295|D>>>25),D=U+(k^A&(I^k))+L[1]+3905402710&4294967295,U=A+(D<<12&4294967295|D>>>20),D=k+(I^U&(A^I))+L[2]+606105819&4294967295,k=U+(D<<17&4294967295|D>>>15),D=I+(A^k&(U^A))+L[3]+3250441966&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(U^I&(k^U))+L[4]+4118548399&4294967295,A=I+(D<<7&4294967295|D>>>25),D=U+(k^A&(I^k))+L[5]+1200080426&4294967295,U=A+(D<<12&4294967295|D>>>20),D=k+(I^U&(A^I))+L[6]+2821735955&4294967295,k=U+(D<<17&4294967295|D>>>15),D=I+(A^k&(U^A))+L[7]+4249261313&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(U^I&(k^U))+L[8]+1770035416&4294967295,A=I+(D<<7&4294967295|D>>>25),D=U+(k^A&(I^k))+L[9]+2336552879&4294967295,U=A+(D<<12&4294967295|D>>>20),D=k+(I^U&(A^I))+L[10]+4294925233&4294967295,k=U+(D<<17&4294967295|D>>>15),D=I+(A^k&(U^A))+L[11]+2304563134&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(U^I&(k^U))+L[12]+1804603682&4294967295,A=I+(D<<7&4294967295|D>>>25),D=U+(k^A&(I^k))+L[13]+4254626195&4294967295,U=A+(D<<12&4294967295|D>>>20),D=k+(I^U&(A^I))+L[14]+2792965006&4294967295,k=U+(D<<17&4294967295|D>>>15),D=I+(A^k&(U^A))+L[15]+1236535329&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(k^U&(I^k))+L[1]+4129170786&4294967295,A=I+(D<<5&4294967295|D>>>27),D=U+(I^k&(A^I))+L[6]+3225465664&4294967295,U=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(U^A))+L[11]+643717713&4294967295,k=U+(D<<14&4294967295|D>>>18),D=I+(U^A&(k^U))+L[0]+3921069994&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^U&(I^k))+L[5]+3593408605&4294967295,A=I+(D<<5&4294967295|D>>>27),D=U+(I^k&(A^I))+L[10]+38016083&4294967295,U=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(U^A))+L[15]+3634488961&4294967295,k=U+(D<<14&4294967295|D>>>18),D=I+(U^A&(k^U))+L[4]+3889429448&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^U&(I^k))+L[9]+568446438&4294967295,A=I+(D<<5&4294967295|D>>>27),D=U+(I^k&(A^I))+L[14]+3275163606&4294967295,U=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(U^A))+L[3]+4107603335&4294967295,k=U+(D<<14&4294967295|D>>>18),D=I+(U^A&(k^U))+L[8]+1163531501&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^U&(I^k))+L[13]+2850285829&4294967295,A=I+(D<<5&4294967295|D>>>27),D=U+(I^k&(A^I))+L[2]+4243563512&4294967295,U=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(U^A))+L[7]+1735328473&4294967295,k=U+(D<<14&4294967295|D>>>18),D=I+(U^A&(k^U))+L[12]+2368359562&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(I^k^U)+L[5]+4294588738&4294967295,A=I+(D<<4&4294967295|D>>>28),D=U+(A^I^k)+L[8]+2272392833&4294967295,U=A+(D<<11&4294967295|D>>>21),D=k+(U^A^I)+L[11]+1839030562&4294967295,k=U+(D<<16&4294967295|D>>>16),D=I+(k^U^A)+L[14]+4259657740&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^U)+L[1]+2763975236&4294967295,A=I+(D<<4&4294967295|D>>>28),D=U+(A^I^k)+L[4]+1272893353&4294967295,U=A+(D<<11&4294967295|D>>>21),D=k+(U^A^I)+L[7]+4139469664&4294967295,k=U+(D<<16&4294967295|D>>>16),D=I+(k^U^A)+L[10]+3200236656&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^U)+L[13]+681279174&4294967295,A=I+(D<<4&4294967295|D>>>28),D=U+(A^I^k)+L[0]+3936430074&4294967295,U=A+(D<<11&4294967295|D>>>21),D=k+(U^A^I)+L[3]+3572445317&4294967295,k=U+(D<<16&4294967295|D>>>16),D=I+(k^U^A)+L[6]+76029189&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^U)+L[9]+3654602809&4294967295,A=I+(D<<4&4294967295|D>>>28),D=U+(A^I^k)+L[12]+3873151461&4294967295,U=A+(D<<11&4294967295|D>>>21),D=k+(U^A^I)+L[15]+530742520&4294967295,k=U+(D<<16&4294967295|D>>>16),D=I+(k^U^A)+L[2]+3299628645&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(k^(I|~U))+L[0]+4096336452&4294967295,A=I+(D<<6&4294967295|D>>>26),D=U+(I^(A|~k))+L[7]+1126891415&4294967295,U=A+(D<<10&4294967295|D>>>22),D=k+(A^(U|~I))+L[14]+2878612391&4294967295,k=U+(D<<15&4294967295|D>>>17),D=I+(U^(k|~A))+L[5]+4237533241&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~U))+L[12]+1700485571&4294967295,A=I+(D<<6&4294967295|D>>>26),D=U+(I^(A|~k))+L[3]+2399980690&4294967295,U=A+(D<<10&4294967295|D>>>22),D=k+(A^(U|~I))+L[10]+4293915773&4294967295,k=U+(D<<15&4294967295|D>>>17),D=I+(U^(k|~A))+L[1]+2240044497&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~U))+L[8]+1873313359&4294967295,A=I+(D<<6&4294967295|D>>>26),D=U+(I^(A|~k))+L[15]+4264355552&4294967295,U=A+(D<<10&4294967295|D>>>22),D=k+(A^(U|~I))+L[6]+2734768916&4294967295,k=U+(D<<15&4294967295|D>>>17),D=I+(U^(k|~A))+L[13]+1309151649&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~U))+L[4]+4149444226&4294967295,A=I+(D<<6&4294967295|D>>>26),D=U+(I^(A|~k))+L[11]+3174756917&4294967295,U=A+(D<<10&4294967295|D>>>22),D=k+(A^(U|~I))+L[2]+718787259&4294967295,k=U+(D<<15&4294967295|D>>>17),D=I+(U^(k|~A))+L[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+U&4294967295}i.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var I=A-this.blockSize,L=this.B,k=this.h,U=0;U<A;){if(k==0)for(;U<=I;)a(this,R,U),U+=this.blockSize;if(typeof R=="string"){for(;U<A;)if(L[k++]=R.charCodeAt(U++),k==this.blockSize){a(this,L),k=0;break}}else for(;U<A;)if(L[k++]=R[U++],k==this.blockSize){a(this,L),k=0;break}}this.h=k,this.o+=A},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var I=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=I&255,I/=256;for(this.u(R),R=Array(16),A=I=0;4>A;++A)for(var L=0;32>L;L+=8)R[I++]=this.g[A]>>>L&255;return R};function l(R,A){var I=d;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=A(R)}function c(R,A){this.h=A;for(var I=[],L=!0,k=R.length-1;0<=k;k--){var U=R[k]|0;L&&U==A||(I[k]=U,L=!1)}this.g=I}var d={};function p(R){return-128<=R&&128>R?l(R,function(A){return new c([A|0],0>A?-1:0)}):new c([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return w;if(0>R)return M(g(-R));for(var A=[],I=1,L=0;R>=I;L++)A[L]=R/I|0,I*=4294967296;return new c(A,0)}function v(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return M(v(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(A,8)),L=w,k=0;k<R.length;k+=8){var U=Math.min(8,R.length-k),D=parseInt(R.substring(k,k+U),A);8>U?(U=g(Math.pow(A,U)),L=L.j(U).add(g(D))):(L=L.j(I),L=L.add(g(D)))}return L}var w=p(0),T=p(1),C=p(16777216);t=c.prototype,t.m=function(){if(B(this))return-M(this).m();for(var R=0,A=1,I=0;I<this.g.length;I++){var L=this.i(I);R+=(0<=L?L:4294967296+L)*A,A*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(O(this))return"0";if(B(this))return"-"+M(this).toString(R);for(var A=g(Math.pow(R,6)),I=this,L="";;){var k=H(I,A).g;I=F(I,k.j(A));var U=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=k,O(I))return U+L;for(;6>U.length;)U="0"+U;L=U+L}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function O(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function B(R){return R.h==-1}t.l=function(R){return R=F(this,R),B(R)?-1:O(R)?0:1};function M(R){for(var A=R.g.length,I=[],L=0;L<A;L++)I[L]=~R.g[L];return new c(I,~R.h).add(T)}t.abs=function(){return B(this)?M(this):this},t.add=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],L=0,k=0;k<=A;k++){var U=L+(this.i(k)&65535)+(R.i(k)&65535),D=(U>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);L=D>>>16,U&=65535,D&=65535,I[k]=D<<16|U}return new c(I,I[I.length-1]&-2147483648?-1:0)};function F(R,A){return R.add(M(A))}t.j=function(R){if(O(this)||O(R))return w;if(B(this))return B(R)?M(this).j(M(R)):M(M(this).j(R));if(B(R))return M(this.j(M(R)));if(0>this.l(C)&&0>R.l(C))return g(this.m()*R.m());for(var A=this.g.length+R.g.length,I=[],L=0;L<2*A;L++)I[L]=0;for(L=0;L<this.g.length;L++)for(var k=0;k<R.g.length;k++){var U=this.i(L)>>>16,D=this.i(L)&65535,Ne=R.i(k)>>>16,oe=R.i(k)&65535;I[2*L+2*k]+=D*oe,$(I,2*L+2*k),I[2*L+2*k+1]+=U*oe,$(I,2*L+2*k+1),I[2*L+2*k+1]+=D*Ne,$(I,2*L+2*k+1),I[2*L+2*k+2]+=U*Ne,$(I,2*L+2*k+2)}for(L=0;L<A;L++)I[L]=I[2*L+1]<<16|I[2*L];for(L=A;L<2*A;L++)I[L]=0;return new c(I,0)};function $(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function P(R,A){this.g=R,this.h=A}function H(R,A){if(O(A))throw Error("division by zero");if(O(R))return new P(w,w);if(B(R))return A=H(M(R),A),new P(M(A.g),M(A.h));if(B(A))return A=H(R,M(A)),new P(M(A.g),A.h);if(30<R.g.length){if(B(R)||B(A))throw Error("slowDivide_ only works with positive integers.");for(var I=T,L=A;0>=L.l(R);)I=N(I),L=N(L);var k=Z(I,1),U=Z(L,1);for(L=Z(L,2),I=Z(I,2);!O(L);){var D=U.add(L);0>=D.l(R)&&(k=k.add(I),U=D),L=Z(L,1),I=Z(I,1)}return A=F(R,k.j(A)),new P(k,A)}for(k=w;0<=R.l(A);){for(I=Math.max(1,Math.floor(R.m()/A.m())),L=Math.ceil(Math.log(I)/Math.LN2),L=48>=L?1:Math.pow(2,L-48),U=g(I),D=U.j(A);B(D)||0<D.l(R);)I-=L,U=g(I),D=U.j(A);O(U)&&(U=T),k=k.add(U),R=F(R,D)}return new P(k,R)}t.A=function(R){return H(this,R).h},t.and=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],L=0;L<A;L++)I[L]=this.i(L)&R.i(L);return new c(I,this.h&R.h)},t.or=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],L=0;L<A;L++)I[L]=this.i(L)|R.i(L);return new c(I,this.h|R.h)},t.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],L=0;L<A;L++)I[L]=this.i(L)^R.i(L);return new c(I,this.h^R.h)};function N(R){for(var A=R.g.length+1,I=[],L=0;L<A;L++)I[L]=R.i(L)<<1|R.i(L-1)>>>31;return new c(I,R.h)}function Z(R,A){var I=A>>5;A%=32;for(var L=R.g.length-I,k=[],U=0;U<L;U++)k[U]=0<A?R.i(U+I)>>>A|R.i(U+I+1)<<32-A:R.i(U+I);return new c(k,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,tS=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,ra=c}).apply(typeof $w<"u"?$w:typeof self<"u"?self:typeof window<"u"?window:{});var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nS,tc,rS,zf,Wg,iS,sS,aS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ef=="object"&&Ef];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var x=0;x<h.length-1;x++){var Q=h[x];if(!(Q in E))break e;E=E[Q]}h=h[h.length-1],x=E[h],y=y(x),y!=x&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,x=!1,Q={next:function(){if(!x&&E<h.length){var te=E++;return{value:y(te,h[te]),done:!1}}return x=!0,{done:!0,value:void 0}}};return Q[Symbol.iterator]=function(){return Q},Q}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function w(h,y,E){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var Q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Q,x),h.apply(y,Q)}}return function(){return h.apply(y,arguments)}}function T(h,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function C(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var x=E.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function O(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(x,Q,te){for(var pe=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)pe[Ke-2]=arguments[Ke];return y.prototype[Q].apply(x,pe)}}function B(h){const y=h.length;if(0<y){const E=Array(y);for(let x=0;x<y;x++)E[x]=h[x];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const x=arguments[E];if(p(x)){const Q=h.length||0,te=x.length||0;h.length=Q+te;for(let pe=0;pe<te;pe++)h[Q+pe]=x[pe]}else h.push(x)}}class F{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function $(h){return/^[\s\xa0]*$/.test(h)}function P(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function H(h){return H[" "](h),h}H[" "]=function(){};var N=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function Z(h,y,E){for(const x in h)y.call(E,h[x],x,h)}function R(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function A(h){const y={};for(const E in h)y[E]=h[E];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(h,y){let E,x;for(let Q=1;Q<arguments.length;Q++){x=arguments[Q];for(E in x)h[E]=x[E];for(let te=0;te<I.length;te++)E=I[te],Object.prototype.hasOwnProperty.call(x,E)&&(h[E]=x[E])}}function k(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function U(h){d.setTimeout(()=>{throw h},0)}function D(){var h=_e;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Ne{constructor(){this.h=this.g=null}add(y,E){const x=oe.get();x.set(y,E),this.h?this.h.next=x:this.g=x,this.h=x}}var oe=new F(()=>new W,h=>h.reset());class W{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,fe=!1,_e=new Ne,j=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(ne)}};var ne=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(E){U(E)}var y=oe;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}fe=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function Ie(h,y){if(ce.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(N){e:{try{H(y.nodeName);var Q=!0;break e}catch{}Q=!1}Q||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ie.aa.h.call(this)}}O(Ie,ce);var be={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Tt(h,y,E,x,Q){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!x,this.ha=Q,this.key=++$e,this.da=this.fa=!1}function Cn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function de(h){this.src=h,this.g={},this.h=0}de.prototype.add=function(h,y,E,x,Q){var te=h.toString();h=this.g[te],h||(h=this.g[te]=[],this.h++);var pe=we(h,y,x,Q);return-1<pe?(y=h[pe],E||(y.fa=!1)):(y=new Tt(y,this.src,te,!!x,Q),y.fa=E,h.push(y)),y};function Te(h,y){var E=y.type;if(E in h.g){var x=h.g[E],Q=Array.prototype.indexOf.call(x,y,void 0),te;(te=0<=Q)&&Array.prototype.splice.call(x,Q,1),te&&(Cn(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function we(h,y,E,x){for(var Q=0;Q<h.length;++Q){var te=h[Q];if(!te.da&&te.listener==y&&te.capture==!!E&&te.ha==x)return Q}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),it={};function Wn(h,y,E,x,Q){if(Array.isArray(y)){for(var te=0;te<y.length;te++)Wn(h,y[te],E,x,Q);return null}return E=mo(E),h&&h[yt]?h.K(y,E,g(x)?!!x.capture:!1,Q):Vt(h,y,E,!1,x,Q)}function Vt(h,y,E,x,Q,te){if(!y)throw Error("Invalid event type");var pe=g(Q)?!!Q.capture:!!Q,Ke=Hr(h);if(Ke||(h[Pe]=Ke=new de(h)),E=Ke.add(y,E,x,pe,te),E.proxy)return E;if(x=$r(),E.proxy=x,x.src=h,x.listener=E,h.addEventListener)ve||(Q=pe),Q===void 0&&(Q=!1),h.addEventListener(y.toString(),x,Q);else if(h.attachEvent)h.attachEvent(Ti(y.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return E}function $r(){function h(E){return y.call(h.src,h.listener,E)}const y=po;return h}function Qn(h,y,E,x,Q){if(Array.isArray(y))for(var te=0;te<y.length;te++)Qn(h,y[te],E,x,Q);else x=g(x)?!!x.capture:!!x,E=mo(E),h&&h[yt]?(h=h.i,y=String(y).toString(),y in h.g&&(te=h.g[y],E=we(te,E,x,Q),-1<E&&(Cn(te[E]),Array.prototype.splice.call(te,E,1),te.length==0&&(delete h.g[y],h.h--)))):h&&(h=Hr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=we(y,E,x,Q)),(E=-1<h?y[h]:null)&&ur(E))}function ur(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[yt])Te(y.i,h);else{var E=h.type,x=h.proxy;y.removeEventListener?y.removeEventListener(E,x,h.capture):y.detachEvent?y.detachEvent(Ti(E),x):y.addListener&&y.removeListener&&y.removeListener(x),(E=Hr(y))?(Te(E,h),E.h==0&&(E.src=null,y[Pe]=null)):Cn(h)}}}function Ti(h){return h in it?it[h]:it[h]="on"+h}function po(h,y){if(h.da)h=!0;else{y=new Ie(y,this);var E=h.listener,x=h.ha||h.src;h.fa&&ur(h),h=E.call(x,y)}return h}function Hr(h){return h=h[Pe],h instanceof de?h:null}var Si="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(h){return typeof h=="function"?h:(h[Si]||(h[Si]=function(y){return h.handleEvent(y)}),h[Si])}function xt(){he.call(this),this.i=new de(this),this.M=this,this.F=null}O(xt,he),xt.prototype[yt]=!0,xt.prototype.removeEventListener=function(h,y,E,x){Qn(this,h,y,E,x)};function nt(h,y){var E,x=h.F;if(x)for(E=[];x;x=x.F)E.push(x);if(h=h.M,x=y.type||y,typeof y=="string")y=new ce(y,h);else if(y instanceof ce)y.target=y.target||h;else{var Q=y;y=new ce(x,h),L(y,Q)}if(Q=!0,E)for(var te=E.length-1;0<=te;te--){var pe=y.g=E[te];Q=Vn(pe,x,!0,y)&&Q}if(pe=y.g=h,Q=Vn(pe,x,!0,y)&&Q,Q=Vn(pe,x,!1,y)&&Q,E)for(te=0;te<E.length;te++)pe=y.g=E[te],Q=Vn(pe,x,!1,y)&&Q}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],x=0;x<E.length;x++)Cn(E[x]);delete h.g[y],h.h--}}this.F=null},xt.prototype.K=function(h,y,E,x){return this.i.add(String(h),y,!1,E,x)},xt.prototype.L=function(h,y,E,x){return this.i.add(String(h),y,!0,E,x)};function Vn(h,y,E,x){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var Q=!0,te=0;te<y.length;++te){var pe=y[te];if(pe&&!pe.da&&pe.capture==E){var Ke=pe.listener,en=pe.ha||pe.src;pe.fa&&Te(h.i,pe),Q=Ke.call(en,x)!==!1&&Q}}return Q&&!x.defaultPrevented}function on(h,y,E){if(typeof h=="function")E&&(h=T(h,E));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function go(h){h.g=on(()=>{h.g=null,h.i&&(h.i=!1,go(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class $l extends he{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:go(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(h){he.call(this),this.h=h,this.g={}}O(xi,he);var Ai=[];function Ri(h){Z(h.g,function(y,E){this.g.hasOwnProperty(E)&&ur(y)},h),h.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Ri(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=d.JSON.stringify,Ci=d.JSON.parse,Ii=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ms(){}ms.prototype.h=null;function Le(h){return h.h||(h.h=h.i())}function st(){}var De={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){ce.call(this,"d")}O(et,ce);function ln(){ce.call(this,"c")}O(ln,ce);var Ue={},_a=null;function Gr(){return _a=_a||new xt}Ue.La="serverreachability";function gs(h){ce.call(this,Ue.La,h)}O(gs,ce);function cr(h){const y=Gr();nt(y,new gs(y))}Ue.STAT_EVENT="statevent";function ys(h,y){ce.call(this,Ue.STAT_EVENT,h),this.stat=y}O(ys,ce);function At(h){const y=Gr();nt(y,new ys(y,h))}Ue.Ma="timingevent";function Jt(h,y){ce.call(this,Ue.Ma,h),this.size=y}O(Jt,ce);function Bt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function hr(){this.g=!0}hr.prototype.xa=function(){this.g=!1};function Hl(h,y,E,x,Q,te){h.info(function(){if(h.g)if(te)for(var pe="",Ke=te.split("&"),en=0;en<Ke.length;en++){var Xe=Ke[en].split("=");if(1<Xe.length){var cn=Xe[0];Xe=Xe[1];var tn=cn.split("_");pe=2<=tn.length&&tn[1]=="type"?pe+(cn+"="+Xe+"&"):pe+(cn+"=redacted&")}}else pe=null;else pe=te;return"XMLHTTP REQ ("+x+") [attempt "+Q+"]: "+y+`
`+E+`
`+pe})}function ep(h,y,E,x,Q,te,pe){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+Q+"]: "+y+`
`+E+`
`+te+" "+pe})}function _s(h,y,E,x){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+va(h,E)+(x?" "+x:"")})}function Qc(h,y){h.info(function(){return"TIMEOUT: "+y})}hr.prototype.info=function(){};function va(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var x=E[h];if(!(2>x.length)){var Q=x[1];if(Array.isArray(Q)&&!(1>Q.length)){var te=Q[0];if(te!="noop"&&te!="stop"&&te!="close")for(var pe=1;pe<Q.length;pe++)Q[pe]=""}}}}return Kn(E)}catch{return y}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function Wr(){}O(Wr,ms),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},Yr=new Wr;function jn(h,y,E,x){this.j=h,this.i=y,this.l=E,this.R=x||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jt}function jt(){this.i=null,this.g="",this.h=!1}var Gl={},yo={};function Ir(h,y,E){h.L=1,h.v=Sa(Xn(y)),h.m=E,h.P=!0,ki(h,null)}function ki(h,y){h.F=Date.now(),Ea(h),h.A=Xn(h.v);var E=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Zl(E.i,"t",x),h.C=0,E=h.j.J,h.h=new jt,h.g=hh(h.j,E?y:null,!h.m),0<h.O&&(h.M=new $l(T(h.Y,h,h.g),h.O)),y=h.U,E=h.g,x=h.ca;var Q="readystatechange";Array.isArray(Q)||(Q&&(Ai[0]=Q.toString()),Q=Ai);for(var te=0;te<Q.length;te++){var pe=Wn(E,Q[te],x||y.handleEvent,!1,y.h||y);if(!pe)break;y.g[pe.key]=pe}y=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),cr(),Hl(h.i,h.u,h.A,h.l,h.R,h.m)}jn.prototype.ca=function(h){h=h.target;const y=this.M;y&&mr(h)==3?y.j():this.Y(h)},jn.prototype.Y=function(h){try{if(h==this.g)e:{const tn=mr(this.g);var y=this.g.Ba();const Ui=this.g.Z();if(!(3>tn)&&(tn!=3||this.g&&(this.h.h||this.g.oa()||rh(this.g)))){this.J||tn!=4||y==7||(y==8||0>=Ui?cr(3):cr(2)),Es(this);var E=this.g.Z();this.X=E;t:if(Kc(this)){var x=rh(this.g);h="";var Q=x.length,te=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Qr(this);var pe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<Q;y++)this.h.h=!0,h+=this.h.i.decode(x[y],{stream:!(te&&y==Q-1)});x.length=0,this.h.g+=h,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=E==200,ep(this.i,this.u,this.A,this.l,this.R,tn,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,en=this.g;if((Ke=en.g?en.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ke)){var Xe=Ke;break t}}Xe=null}if(E=Xe)_s(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,E);else{this.o=!1,this.s=3,At(12),vn(this),Qr(this);break e}}if(this.P){E=!0;let En;for(;!this.J&&this.C<pe.length;)if(En=Xc(this,pe),En==yo){tn==4&&(this.s=4,At(14),E=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Gl){this.s=4,At(15),_s(this.i,this.l,pe,"[Invalid Chunk]"),E=!1;break}else _s(this.i,this.l,En,null),wa(this,En);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tn!=4||pe.length!=0||this.h.h||(this.s=1,At(16),E=!1),this.o=this.o&&E,!E)_s(this.i,this.l,pe,"[Invalid Chunked Response]"),vn(this),Qr(this);else if(0<pe.length&&!this.W){this.W=!0;var cn=this.j;cn.g==this&&cn.ba&&!cn.M&&(cn.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Oa(cn),cn.M=!0,At(11))}}else _s(this.i,this.l,pe,null),wa(this,pe);tn==4&&vn(this),this.o&&!this.J&&(tn==4?lh(this.j,this):(this.o=!1,Ea(this)))}else sp(this.g),E==400&&0<pe.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),vn(this),Qr(this)}}}catch{}finally{}};function Kc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Xc(h,y){var E=h.C,x=y.indexOf(`
`,E);return x==-1?yo:(E=Number(y.substring(E,x)),isNaN(E)?Gl:(x+=1,x+E>y.length?yo:(y=y.slice(x,x+E),h.C=x+E,y)))}jn.prototype.cancel=function(){this.J=!0,vn(this)};function Ea(h){h.S=Date.now()+h.I,Zc(h,h.I)}function Zc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Bt(T(h.ba,h),y)}function Es(h){h.B&&(d.clearTimeout(h.B),h.B=null)}jn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qc(this.i,this.A),this.L!=2&&(cr(),At(17)),vn(this),this.s=2,Qr(this)):Zc(this,this.S-h)};function Qr(h){h.j.G==0||h.J||lh(h.j,h)}function vn(h){Es(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Ri(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function wa(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Yl(E.h,h))){if(!h.K&&Yl(E.h,h)&&E.G==3){try{var x=E.Da.g.parse(y)}catch{x=null}if(Array.isArray(x)&&x.length==3){var Q=x;if(Q[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Io(E),Ro(E);else break e;ru(E),At(18)}}else E.za=Q[1],0<E.za-E.T&&37500>Q[2]&&E.F&&E.v==0&&!E.C&&(E.C=Bt(T(E.Za,E),6e3));if(1>=vo(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Li(E,11)}else if((h.K||E.g==h)&&Io(E),!$(y))for(Q=E.Da.g.parse(y),y=0;y<Q.length;y++){let Xe=Q[y];if(E.T=Xe[0],Xe=Xe[1],E.G==2)if(Xe[0]=="c"){E.K=Xe[1],E.ia=Xe[2];const cn=Xe[3];cn!=null&&(E.la=cn,E.j.info("VER="+E.la));const tn=Xe[4];tn!=null&&(E.Aa=tn,E.j.info("SVER="+E.Aa));const Ui=Xe[5];Ui!=null&&typeof Ui=="number"&&0<Ui&&(x=1.5*Ui,E.L=x,E.j.info("backChannelRequestTimeoutMs_="+x)),x=E;const En=h.g;if(En){const ni=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var te=x.h;te.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(te.j=te.l,te.g=new Set,te.h&&(Eo(te,te.h),te.h=null))}if(x.D){const su=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(x.ya=su,ft(x.I,x.D,su))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),x=E;var pe=h;if(x.qa=ch(x,x.J?x.ia:null,x.W),pe.K){Ln(x.h,pe);var Ke=pe,en=x.L;en&&(Ke.I=en),Ke.B&&(Es(Ke),Ea(Ke)),x.g=pe}else ah(x);0<E.i.length&&Co(E)}else Xe[0]!="stop"&&Xe[0]!="close"||Li(E,7);else E.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Li(E,7):tu(E):Xe[0]!="noop"&&E.l&&E.l.ta(Xe),E.v=0)}}cr(4)}catch{}}var Jc=class{constructor(h,y){this.g=h,this.map=y}};function Oi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _o(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function vo(h){return h.h?1:h.g?h.g.size:0}function Yl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function Eo(h,y){h.g?h.g.add(y):h.h=y}function Ln(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Oi.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Wl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return B(h.i)}function tp(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,x=0;x<E;x++)y.push(h[x]);return y}y=[],E=0;for(x in h)y[E++]=h[x];return y}function wo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const x in h)y[E++]=x;return y}}}function Ql(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=wo(h),x=tp(h),Q=x.length,te=0;te<Q;te++)y.call(void 0,x[te],E&&E[te],h)}var ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var x=h[E].indexOf("="),Q=null;if(0<=x){var te=h[E].substring(0,x);Q=h[E].substring(x+1)}else te=h[E];y(te,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function zt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof zt){this.h=h.h,Ta(this,h.j),this.o=h.o,this.g=h.g,ws(this,h.s),this.l=h.l;var y=h.i,E=new Ni;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Mi(this,E),this.m=h.m}else h&&(y=String(h).match(ba))?(this.h=!1,Ta(this,y[1]||"",!0),this.o=fr(y[2]||""),this.g=fr(y[3]||"",!0),ws(this,y[4]),this.l=fr(y[5]||"",!0),Mi(this,y[6]||"",!0),this.m=fr(y[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}zt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(xa(y,Kl,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(xa(y,Kl,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(xa(E,E.charAt(0)=="/"?rp:Xl,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",xa(E,bo)),h.join("")};function Xn(h){return new zt(h)}function Ta(h,y,E){h.j=E?fr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function ws(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Mi(h,y,E){y instanceof Ni?(h.i=y,th(h.i,h.h)):(E||(y=xa(y,ip)),h.i=new Ni(y,h.h))}function ft(h,y,E){h.i.set(y,E)}function Sa(h){return ft(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function fr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function xa(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,eh),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function eh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Kl=/[#\/\?@]/g,Xl=/[#\?:]/g,rp=/[#\?]/g,ip=/[#\?@]/g,bo=/#/g;function Ni(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function dr(h){h.g||(h.g=new Map,h.h=0,h.i&&np(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}t=Ni.prototype,t.add=function(h,y){dr(this),this.i=null,h=Kr(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Pi(h,y){dr(h),y=Kr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Vi(h,y){return dr(h),y=Kr(h,y),h.g.has(y)}t.forEach=function(h,y){dr(this),this.g.forEach(function(E,x){E.forEach(function(Q){h.call(y,Q,x,this)},this)},this)},t.na=function(){dr(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let x=0;x<y.length;x++){const Q=h[x];for(let te=0;te<Q.length;te++)E.push(y[x])}return E},t.V=function(h){dr(this);let y=[];if(typeof h=="string")Vi(this,h)&&(y=y.concat(this.g.get(Kr(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},t.set=function(h,y){return dr(this),this.i=null,h=Kr(this,h),Vi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Zl(h,y,E){Pi(h,y),0<E.length&&(h.i=null,h.g.set(Kr(h,y),B(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var x=y[E];const te=encodeURIComponent(String(x)),pe=this.V(x);for(x=0;x<pe.length;x++){var Q=te;pe[x]!==""&&(Q+="="+encodeURIComponent(String(pe[x]))),h.push(Q)}}return this.i=h.join("&")};function Kr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function th(h,y){y&&!h.j&&(dr(h),h.i=null,h.g.forEach(function(E,x){var Q=x.toLowerCase();x!=Q&&(Pi(this,x),Zl(this,Q,E))},h)),h.j=y}function Aa(h,y){const E=new hr;if(d.Image){const x=new Image;x.onload=C(pr,E,"TestLoadImage: loaded",!0,y,x),x.onerror=C(pr,E,"TestLoadImage: error",!1,y,x),x.onabort=C(pr,E,"TestLoadImage: abort",!1,y,x),x.ontimeout=C(pr,E,"TestLoadImage: timeout",!1,y,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else y(!1)}function Dr(h,y){const E=new hr,x=new AbortController,Q=setTimeout(()=>{x.abort(),pr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:x.signal}).then(te=>{clearTimeout(Q),te.ok?pr(E,"TestPingServer: ok",!0,y):pr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(Q),pr(E,"TestPingServer: error",!1,y)})}function pr(h,y,E,x,Q){try{Q&&(Q.onload=null,Q.onerror=null,Q.onabort=null,Q.ontimeout=null),x(E)}catch{}}function Ra(){this.g=new Ii}function Xr(h,y,E){const x=E||"";try{Ql(h,function(Q,te){let pe=Q;g(Q)&&(pe=Kn(Q)),y.push(x+te+"="+encodeURIComponent(pe))})}catch(Q){throw y.push(x+"type="+encodeURIComponent("_badmap")),Q}}function bs(h){this.l=h.Ub||null,this.j=h.eb||!1}O(bs,ms),bs.prototype.g=function(){return new ji(this.l,this.j)},bs.prototype.i=function(h){return function(){return h}}({});function ji(h,y){xt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(ji,xt),t=ji.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Jr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Zr(this):Jr(this),this.readyState==3&&Jl(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Zr(this))},t.Qa=function(h){this.g&&(this.response=h,Zr(this))},t.ga=function(){this.g&&Zr(this)};function Zr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Jr(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function Jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function eu(h){let y="";return Z(h,function(E,x){y+=x,y+=":",y+=E,y+=`\r
`}),y}function un(h,y,E){e:{for(x in E){var x=!1;break e}x=!0}x||(E=eu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):ft(h,y,E))}function at(h){xt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(at,xt);var To=/^https?$/i,Ca=["POST","PUT"];t=at.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,E,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?Le(this.o):Le(Yr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(te){nh(this,te);return}if(h=E||"",E=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var Q in x)E.set(Q,x[Q]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const te of x.keys())E.set(te,x.get(te));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(E.keys()).find(te=>te.toLowerCase()=="content-type"),Q=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ca,y,void 0))||x||Q||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[te,pe]of E)this.g.setRequestHeader(te,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ia(this),this.u=!0,this.g.send(h),this.u=!1}catch(te){nh(this,te)}};function nh(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,So(h),ei(h)}function So(h){h.A||(h.A=!0,nt(h,"complete"),nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nt(this,"complete"),nt(this,"abort"),ei(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},t.bb=function(){xo(this)};function xo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||mr(h)!=4||h.Z()!=2)){if(h.u&&mr(h)==4)on(h.Ea,0,h);else if(nt(h,"readystatechange"),mr(h)==4){h.h=!1;try{const pe=h.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var x;if(x=pe===0){var Q=String(h.D).match(ba)[1]||null;!Q&&d.self&&d.self.location&&(Q=d.self.location.protocol.slice(0,-1)),x=!To.test(Q?Q.toLowerCase():"")}E=x}if(E)nt(h,"complete"),nt(h,"success");else{h.m=6;try{var te=2<mr(h)?h.g.statusText:""}catch{te=""}h.l=te+" ["+h.Z()+"]",So(h)}}finally{ei(h)}}}}function ei(h,y){if(h.g){Ia(h);const E=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||nt(h,"ready");try{E.onreadystatechange=x}catch{}}}function Ia(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function mr(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Ci(y)}};function rh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function sp(h){const y={};h=(h.g&&2<=mr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if($(h[x]))continue;var E=k(h[x]);const Q=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const te=y[Q]||[];y[Q]=te,te.push(E)}R(y,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Da(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function Ao(h){this.Aa=0,this.i=[],this.j=new hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Da("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Da("baseRetryDelayMs",5e3,h),this.cb=Da("retryDelaySeedMs",1e4,h),this.Wa=Da("forwardChannelMaxRetries",2,h),this.wa=Da("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(h&&h.concurrentRequestLimit),this.Da=new Ra,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ao.prototype,t.la=8,t.G=1,t.connect=function(h,y,E,x){At(0),this.W=h,this.H=y||{},E&&x!==void 0&&(this.H.OSID=E,this.H.OAID=x),this.F=this.X,this.I=ch(this,null,this.W),Co(this)};function tu(h){if(ih(h),h.G==3){var y=h.U++,E=Xn(h.I);if(ft(E,"SID",h.K),ft(E,"RID",y),ft(E,"TYPE","terminate"),ka(h,E),y=new jn(h,h.j,y),y.L=2,y.v=Sa(Xn(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=hh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ea(y)}uh(h)}function Ro(h){h.g&&(Oa(h),h.g.cancel(),h.g=null)}function ih(h){Ro(h),h.u&&(d.clearTimeout(h.u),h.u=null),Io(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Co(h){if(!_o(h.h)&&!h.s){h.s=!0;var y=h.Ga;ae||j(),fe||(ae(),fe=!0),_e.add(y,h),h.B=0}}function ap(h,y){return vo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Bt(T(h.Ga,h,y),iu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Q=new jn(this,this.j,h);let te=this.o;if(this.S&&(te?(te=A(te),L(te,this.S)):te=this.S),this.m!==null||this.O||(Q.H=te,te=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var x=this.i[E];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(y+=x,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=sh(this,Q,y),E=Xn(this.I),ft(E,"RID",h),ft(E,"CVER",22),this.D&&ft(E,"X-HTTP-Session-Id",this.D),ka(this,E),te&&(this.O?y="headers="+encodeURIComponent(String(eu(te)))+"&"+y:this.m&&un(E,this.m,te)),Eo(this.h,Q),this.Ua&&ft(E,"TYPE","init"),this.P?(ft(E,"$req",y),ft(E,"SID","null"),Q.T=!0,Ir(Q,E,null)):Ir(Q,E,y),this.G=2}}else this.G==3&&(h?nu(this,h):this.i.length==0||_o(this.h)||nu(this))};function nu(h,y){var E;y?E=y.l:E=h.U++;const x=Xn(h.I);ft(x,"SID",h.K),ft(x,"RID",E),ft(x,"AID",h.T),ka(h,x),h.m&&h.o&&un(x,h.m,h.o),E=new jn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=sh(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Eo(h.h,E),Ir(E,x,y)}function ka(h,y){h.H&&Z(h.H,function(E,x){ft(y,x,E)}),h.l&&Ql({},function(E,x){ft(y,x,E)})}function sh(h,y,E){E=Math.min(h.i.length,E);var x=h.l?T(h.l.Na,h.l,h):null;e:{var Q=h.i;let te=-1;for(;;){const pe=["count="+E];te==-1?0<E?(te=Q[0].g,pe.push("ofs="+te)):te=0:pe.push("ofs="+te);let Ke=!0;for(let en=0;en<E;en++){let Xe=Q[en].g;const cn=Q[en].map;if(Xe-=te,0>Xe)te=Math.max(0,Q[en].g-100),Ke=!1;else try{Xr(cn,pe,"req"+Xe+"_")}catch{x&&x(cn)}}if(Ke){x=pe.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,x}function ah(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;ae||j(),fe||(ae(),fe=!0),_e.add(y,h),h.v=0}}function ru(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Bt(T(h.Fa,h),iu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Bt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Ro(this),oh(this))};function Oa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function oh(h){h.g=new jn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Xn(h.qa);ft(y,"RID","rpc"),ft(y,"SID",h.K),ft(y,"AID",h.T),ft(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&ft(y,"TO",h.ja),ft(y,"TYPE","xmlhttp"),ka(h,y),h.m&&h.o&&un(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Sa(Xn(y)),E.m=null,E.P=!0,ki(E,h)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),ru(this),At(19))};function Io(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function lh(h,y){var E=null;if(h.g==y){Io(h),Oa(h),h.g=null;var x=2}else if(Yl(h.h,y))E=y.D,Ln(h.h,y),x=1;else return;if(h.G!=0){if(y.o)if(x==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var Q=h.B;x=Gr(),nt(x,new Jt(x,E)),Co(h)}else ah(h);else if(Q=y.s,Q==3||Q==0&&0<y.X||!(x==1&&ap(h,y)||x==2&&ru(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),Q){case 1:Li(h,5);break;case 4:Li(h,10);break;case 3:Li(h,6);break;default:Li(h,2)}}}function iu(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Li(h,y){if(h.j.info("Error code "+y),y==2){var E=T(h.fb,h),x=h.Xa;const Q=!x;x=new zt(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ta(x,"https"),Sa(x),Q?Aa(x.toString(),E):Dr(x.toString(),E)}else At(2);h.G=0,h.l&&h.l.sa(y),uh(h),ih(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function uh(h){if(h.G=0,h.ka=[],h.l){const y=Wl(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function ch(h,y,E){var x=E instanceof zt?Xn(E):new zt(E);if(x.g!="")y&&(x.g=y+"."+x.g),ws(x,x.s);else{var Q=d.location;x=Q.protocol,y=y?y+"."+Q.hostname:Q.hostname,Q=+Q.port;var te=new zt(null);x&&Ta(te,x),y&&(te.g=y),Q&&ws(te,Q),E&&(te.l=E),x=te}return E=h.D,y=h.ya,E&&y&&ft(x,E,y),ft(x,"VER",h.la),ka(h,x),x}function hh(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new at(new bs({eb:E})):new at(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fh(){}t=fh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Do(){}Do.prototype.g=function(h,y){return new Un(h,y)};function Un(h,y){xt.call(this),this.g=new Ao(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!$(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!$(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new ti(this)}O(Un,xt),Un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Un.prototype.close=function(){tu(this.g)},Un.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Kn(h),h=E);y.i.push(new Jc(y.Ya++,h)),y.G==3&&Co(y)},Un.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,Un.aa.N.call(this)};function dh(h){et.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}O(dh,et);function ph(){ln.call(this),this.status=1}O(ph,ln);function ti(h){this.g=h}O(ti,fh),ti.prototype.ua=function(){nt(this.g,"a")},ti.prototype.ta=function(h){nt(this.g,new dh(h))},ti.prototype.sa=function(h){nt(this.g,new ph)},ti.prototype.ra=function(){nt(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,Un.prototype.send=Un.prototype.o,Un.prototype.open=Un.prototype.m,Un.prototype.close=Un.prototype.close,aS=function(){return new Do},sS=function(){return Gr()},iS=Ue,Wg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,zf=vs,Di.COMPLETE="complete",rS=Di,st.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",xt.prototype.listen=xt.prototype.K,tc=st,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,nS=at}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});const Hw="@firebase/firestore",Gw="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ll="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Ry("@firebase/firestore");function ol(){return lo.logLevel}function ye(t,...e){if(lo.logLevel<=Ye.DEBUG){const n=e.map(Ly);lo.debug(`Firestore (${Ll}): ${t}`,...n)}}function cs(t,...e){if(lo.logLevel<=Ye.ERROR){const n=e.map(Ly);lo.error(`Firestore (${Ll}): ${t}`,...n)}}function Sl(t,...e){if(lo.logLevel<=Ye.WARN){const n=e.map(Ly);lo.warn(`Firestore (${Ll}): ${t}`,...n)}}function Ly(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Oe(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,oS(t,i,n)}function oS(t,e,n){let i=`FIRESTORE (${Ll}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw cs(i),new Error(i)}function lt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||oS(e,a,i)}function je(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends fs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mn.UNAUTHENTICATED))}shutdown(){}}class SN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xN{constructor(e){this.t=e,this.currentUser=Mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new as;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new as,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new as)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new lS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Mn(e)}}class AN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new AN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Mn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const i=l=>{l.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ye("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Yw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=IN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function We(t,e){return t<e?-1:t>e?1:0}function Qg(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return gg(a)===gg(l)?We(a,l):gg(a)?1:-1}return We(t.length,e.length)}const DN=55296,kN=57343;function gg(t){const e=t.charCodeAt(0);return e>=DN&&e<=kN}function xl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="__name__";class ui{constructor(e,n,i){n===void 0?n=0:n>e.length&&Oe(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Oe(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=ui.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const i=ui.isNumericId(e),a=ui.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?ui.extractNumericId(e).compare(ui.extractNumericId(n)):Qg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class bt extends ui{construct(e,n,i){return new bt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(se.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const ON=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class An extends ui{construct(e,n,i){return new An(e,n,i)}static isValidIdentifier(e){return ON.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),An.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ww}static keyField(){return new An([Ww])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ge(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new An(n)}static emptyPath(){return new An([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function uS(t,e,n){if(!n)throw new ge(se.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MN(t,e,n,i){if(e===!0&&i===!0)throw new ge(se.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qw(t){if(!Ae.isDocumentKey(t))throw new ge(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kw(t){if(Ae.isDocumentKey(t))throw new ge(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe(12329,{type:typeof t})}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dd(t);throw new ge(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Xt(t,e){const n={typeString:t};return e&&(n.value=e),n}function qc(t,e){if(!cS(t))throw new ge(se.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ge(se.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=-62135596800,Zw=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Zw);return new vt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xw)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zw}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qc(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Xt("string",vt._jsonSchemaVersion),seconds:Xt("number"),nanoseconds:Xt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ec=-1;function NN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Ve.fromTimestamp(i===1e9?new vt(n+1,0):new vt(n,i));return new sa(a,Ae.empty(),e)}function PN(t){return new sa(t.readTime,t.key,Ec)}class sa{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new sa(Ve.min(),Ae.empty(),Ec)}static max(){return new sa(Ve.max(),Ae.empty(),Ec)}}function VN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ae.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){if(t.code!==se.FAILED_PRECONDITION||t.message!==jN)throw t;ye("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ue((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ue?n:ue.resolve(n)}catch(n){return ue.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ue.reject(n)}static resolve(e){return new ue((n,i)=>{n(e)})}static reject(e){return new ue((n,i)=>{i(e)})}static waitFor(e){return new ue((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=ue.resolve(!1);for(const i of e)n=n.next(a=>a?ue.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new ue((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new ue((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function UN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ql(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}kd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=-1;function Od(t){return t==null}function od(t){return t===0&&1/t==-1/0}function qN(t){return typeof t=="number"&&Number.isInteger(t)&&!od(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="";function BN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jw(e)),e=zN(t.get(n),e);return Jw(e)}function zN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case hS:n+="";break;default:n+=l}}return n}function Jw(t){return t+hS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ma(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.comparator=e,this.root=n||xn.EMPTY}insert(e,n){return new Ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xn.BLACK,null,null))}remove(e){return new Ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wf(this.root,e,this.comparator,!1)}getReverseIterator(){return new wf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wf(this.root,e,this.comparator,!0)}}class wf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??xn.RED,this.left=a??xn.EMPTY,this.right=l??xn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new xn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return xn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return xn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Oe(27949);return e+(this.isRed()?0:1)}}xn.EMPTY=null,xn.RED=!0,xn.BLACK=!1;xn.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe(57766)}get value(){throw Oe(16141)}get color(){throw Oe(16727)}get left(){throw Oe(29726)}get right(){throw Oe(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new xn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e,this.data=new Ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tb(this.data.getIterator())}getIteratorFrom(e){return new tb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new sn(this.comparator);return n.data=e,n}}class tb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.fields=e,e.sort(An.comparator)}static empty(){return new or([])}unionWith(e){let n=new sn(An.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new or(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class dS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dS("Invalid base64 string: "+l):l}}(e);return new Rn(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rn.EMPTY_BYTE_STRING=new Rn("");const FN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function aa(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=FN.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:qt(t.seconds),nanos:qt(t.nanos)}}function qt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oa(t){return typeof t=="string"?Rn.fromBase64String(t):Rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="server_timestamp",mS="__type__",gS="__previous_value__",yS="__local_write_time__";function By(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[mS])==null?void 0:i.stringValue)===pS}function Md(t){const e=t.mapValue.fields[gS];return By(e)?Md(e):e}function wc(t){const e=aa(t.mapValue.fields[yS].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const ld="(default)";class bc{constructor(e,n){this.projectId=e,this.database=n||ld}static empty(){return new bc("","")}get isDefaultDatabase(){return this.database===ld}isEqual(e){return e instanceof bc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="__type__",HN="__max__",bf={mapValue:{}},vS="__vector__",ud="value";function la(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?By(t)?4:YN(t)?9007199254740991:GN(t)?10:11:Oe(28295,{value:t})}function Ei(t,e){if(t===e)return!0;const n=la(t);if(n!==la(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wc(t).isEqual(wc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=aa(a.timestampValue),d=aa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return oa(a.bytesValue).isEqual(oa(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return qt(a.geoPointValue.latitude)===qt(l.geoPointValue.latitude)&&qt(a.geoPointValue.longitude)===qt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return qt(a.integerValue)===qt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=qt(a.doubleValue),d=qt(l.doubleValue);return c===d?od(c)===od(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return xl(t.arrayValue.values||[],e.arrayValue.values||[],Ei);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(eb(c)!==eb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Ei(c[p],d[p])))return!1;return!0}(t,e);default:return Oe(52216,{left:t})}}function Tc(t,e){return(t.values||[]).find(n=>Ei(n,e))!==void 0}function Al(t,e){if(t===e)return 0;const n=la(t),i=la(e);if(n!==i)return We(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=qt(l.integerValue||l.doubleValue),p=qt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return nb(t.timestampValue,e.timestampValue);case 4:return nb(wc(t),wc(e));case 5:return Qg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=oa(l),p=oa(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=We(d[g],p[g]);if(v!==0)return v}return We(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=We(qt(l.latitude),qt(c.latitude));return d!==0?d:We(qt(l.longitude),qt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rb(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,C,O,B;const d=l.fields||{},p=c.fields||{},g=(T=d[ud])==null?void 0:T.arrayValue,v=(C=p[ud])==null?void 0:C.arrayValue,w=We(((O=g==null?void 0:g.values)==null?void 0:O.length)||0,((B=v==null?void 0:v.values)==null?void 0:B.length)||0);return w!==0?w:rb(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===bf.mapValue&&c===bf.mapValue)return 0;if(l===bf.mapValue)return 1;if(c===bf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const T=Qg(p[w],v[w]);if(T!==0)return T;const C=Al(d[p[w]],g[v[w]]);if(C!==0)return C}return We(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Oe(23264,{he:n})}}function nb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=aa(t),i=aa(e),a=We(n.seconds,i.seconds);return a!==0?a:We(n.nanos,i.nanos)}function rb(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=Al(n[a],i[a]);if(l)return l}return We(n.length,i.length)}function Rl(t){return Kg(t)}function Kg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=aa(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Kg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Kg(n.fields[c])}`;return a+"}"}(t.mapValue):Oe(61005,{value:t})}function Ff(t){switch(la(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Md(t);return e?16+Ff(e):16;case 5:return 2*t.stringValue.length;case 6:return oa(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Ff(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return ma(i.fields,(l,c)=>{a+=l.length+Ff(c)}),a}(t.mapValue);default:throw Oe(13486,{value:t})}}function ib(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xg(t){return!!t&&"integerValue"in t}function zy(t){return!!t&&"arrayValue"in t}function sb(t){return!!t&&"nullValue"in t}function ab(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $f(t){return!!t&&"mapValue"in t}function GN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_S])==null?void 0:i.stringValue)===vS}function uc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ma(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=uc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uc(t.arrayValue.values[n]);return e}return{...t}}function YN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.value=e}static empty(){return new Yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!$f(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uc(n)}setAll(e){let n=An.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=uc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());$f(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];$f(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){ma(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Yn(uc(this.value))}}function ES(t){const e=[];return ma(t.fields,(n,i)=>{const a=new An([n]);if($f(i)){const l=ES(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new or(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Nn(e,0,Ve.min(),Ve.min(),Ve.min(),Yn.empty(),0)}static newFoundDocument(e,n,i,a){return new Nn(e,1,n,Ve.min(),i,a,0)}static newNoDocument(e,n){return new Nn(e,2,n,Ve.min(),Ve.min(),Yn.empty(),0)}static newUnknownDocument(e,n){return new Nn(e,3,n,Ve.min(),Ve.min(),Yn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cd{constructor(e,n){this.position=e,this.inclusive=n}}function ob(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Ae.comparator(Ae.fromName(c.referenceValue),n.key):i=Al(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function lb(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ei(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function WN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wS{}class Kt extends wS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new KN(e,n,i):n==="array-contains"?new JN(e,i):n==="in"?new e2(e,i):n==="not-in"?new t2(e,i):n==="array-contains-any"?new n2(e,i):new Kt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new XN(e,i):new ZN(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Al(n,this.value)):n!==null&&la(this.value)===la(n)&&this.matchesComparison(Al(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zr(e,n)}matches(e){return bS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bS(t){return t.op==="and"}function TS(t){return QN(t)&&bS(t)}function QN(t){for(const e of t.filters)if(e instanceof zr)return!1;return!0}function Zg(t){if(t instanceof Kt)return t.field.canonicalString()+t.op.toString()+Rl(t.value);if(TS(t))return t.filters.map(e=>Zg(e)).join(",");{const e=t.filters.map(n=>Zg(n)).join(",");return`${t.op}(${e})`}}function SS(t,e){return t instanceof Kt?function(i,a){return a instanceof Kt&&i.op===a.op&&i.field.isEqual(a.field)&&Ei(i.value,a.value)}(t,e):t instanceof zr?function(i,a){return a instanceof zr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&SS(c,a.filters[d]),!0):!1}(t,e):void Oe(19439)}function xS(t){return t instanceof Kt?function(n){return`${n.field.canonicalString()} ${n.op} ${Rl(n.value)}`}(t):t instanceof zr?function(n){return n.op.toString()+" {"+n.getFilters().map(xS).join(" ,")+"}"}(t):"Filter"}class KN extends Kt{constructor(e,n,i){super(e,n,i),this.key=Ae.fromName(i.referenceValue)}matches(e){const n=Ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class XN extends Kt{constructor(e,n){super(e,"in",n),this.keys=AS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZN extends Kt{constructor(e,n){super(e,"not-in",n),this.keys=AS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Ae.fromName(i.referenceValue))}class JN extends Kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zy(n)&&Tc(n.arrayValue,this.value)}}class e2 extends Kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tc(this.value.arrayValue,n)}}class t2 extends Kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Tc(this.value.arrayValue,n)}}class n2 extends Kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Tc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function ub(t,e=null,n=[],i=[],a=null,l=null,c=null){return new r2(t,e,n,i,a,l,c)}function Fy(t){const e=je(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Zg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Rl(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Rl(i)).join(",")),e.Te=n}return e.Te}function $y(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lb(t.startAt,e.startAt)&&lb(t.endAt,e.endAt)}function Jg(t){return Ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function i2(t,e,n,i,a,l,c,d){return new Bl(t,e,n,i,a,l,c,d)}function Nd(t){return new Bl(t)}function cb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RS(t){return t.collectionGroup!==null}function cc(t){const e=je(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new sn(An.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Sc(l,i))}),n.has(An.keyField().canonicalString())||e.Ie.push(new Sc(An.keyField(),i))}return e.Ie}function gi(t){const e=je(t);return e.Ee||(e.Ee=s2(e,cc(t))),e.Ee}function s2(t,e){if(t.limitType==="F")return ub(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Sc(a.field,l)});const n=t.endAt?new cd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new cd(t.startAt.position,t.startAt.inclusive):null;return ub(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ey(t,e){const n=t.filters.concat([e]);return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ty(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pd(t,e){return $y(gi(t),gi(e))&&t.limitType===e.limitType}function CS(t){return`${Fy(gi(t))}|lt:${t.limitType}`}function ll(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>xS(a)).join(", ")}]`),Od(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Rl(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Rl(a)).join(",")),`Target(${i})`}(gi(t))}; limitType=${t.limitType})`}function Vd(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ae.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of cc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=ob(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,cc(i),a)||i.endAt&&!function(c,d,p){const g=ob(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,cc(i),a))}(t,e)}function a2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IS(t){return(e,n)=>{let i=!1;for(const a of cc(t)){const l=o2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function o2(t,e,n){const i=t.field.isKeyField()?Ae.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Al(p,g):Oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ma(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return fS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=new Ot(Ae.comparator);function hs(){return l2}const DS=new Ot(Ae.comparator);function nc(...t){let e=DS;for(const n of t)e=e.insert(n.key,n);return e}function kS(t){let e=DS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Xa(){return hc()}function OS(){return hc()}function hc(){return new ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const u2=new Ot(Ae.comparator),c2=new sn(Ae.comparator);function Qe(...t){let e=c2;for(const n of t)e=e.add(n);return e}const h2=new sn(We);function f2(){return h2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:od(e)?"-0":e}}function MS(t){return{integerValue:""+t}}function d2(t,e){return qN(e)?MS(e):Hy(t,e)}/**
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
 */class jd{constructor(){this._=void 0}}function p2(t,e,n){return t instanceof xc?function(a,l){const c={fields:{[mS]:{stringValue:pS},[yS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&By(l)&&(l=Md(l)),l&&(c.fields[gS]=l),{mapValue:c}}(n,e):t instanceof Ac?PS(t,e):t instanceof Rc?VS(t,e):function(a,l){const c=NS(a,l),d=hb(c)+hb(a.Ae);return Xg(c)&&Xg(a.Ae)?MS(d):Hy(a.serializer,d)}(t,e)}function m2(t,e,n){return t instanceof Ac?PS(t,e):t instanceof Rc?VS(t,e):n}function NS(t,e){return t instanceof hd?function(i){return Xg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class xc extends jd{}class Ac extends jd{constructor(e){super(),this.elements=e}}function PS(t,e){const n=jS(e);for(const i of t.elements)n.some(a=>Ei(a,i))||n.push(i);return{arrayValue:{values:n}}}class Rc extends jd{constructor(e){super(),this.elements=e}}function VS(t,e){let n=jS(e);for(const i of t.elements)n=n.filter(a=>!Ei(a,i));return{arrayValue:{values:n}}}class hd extends jd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hb(t){return qt(t.integerValue||t.doubleValue)}function jS(t){return zy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.field=e,this.transform=n}}function y2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof Ac&&a instanceof Ac||i instanceof Rc&&a instanceof Rc?xl(i.elements,a.elements,Ei):i instanceof hd&&a instanceof hd?Ei(i.Ae,a.Ae):i instanceof xc&&a instanceof xc}(t.transform,e.transform)}class _2{constructor(e,n){this.version=e,this.transformResults=n}}class Ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ld{}function LS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qS(t.key,Ur.none()):new Bc(t.key,t.data,Ur.none());{const n=t.data,i=Yn.empty();let a=new sn(An.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new ga(t.key,i,new or(a.toArray()),Ur.none())}}function v2(t,e,n){t instanceof Bc?function(a,l,c){const d=a.value.clone(),p=db(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof ga?function(a,l,c){if(!Hf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=db(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(US(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function fc(t,e,n,i){return t instanceof Bc?function(l,c,d,p){if(!Hf(l.precondition,c))return d;const g=l.value.clone(),v=pb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof ga?function(l,c,d,p){if(!Hf(l.precondition,c))return d;const g=pb(l.fieldTransforms,p,c),v=c.data;return v.setAll(US(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(w=>w.field))}(t,e,n,i):function(l,c,d){return Hf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function E2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=NS(i.transform,a||null);l!=null&&(n===null&&(n=Yn.empty()),n.set(i.field,l))}return n||null}function fb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&xl(i,a,(l,c)=>y2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bc extends Ld{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ga extends Ld{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function US(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function db(t,e,n){const i=new Map;lt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,m2(c,d,n[a]))}return i}function pb(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,p2(l,c,e))}return i}class qS extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class w2 extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&v2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=OS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=LS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&xl(this.mutations,e.mutations,(n,i)=>fb(n,i))&&xl(this.baseMutations,e.baseMutations,(n,i)=>fb(n,i))}}class Gy{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){lt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return u2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new Gy(e,n,i,a)}}/**
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
 */class T2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class S2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt,Je;function x2(t){switch(t){case se.OK:return Oe(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Oe(15467,{code:t})}}function BS(t){if(t===void 0)return cs("GRPC error has no .code"),se.UNKNOWN;switch(t){case Wt.OK:return se.OK;case Wt.CANCELLED:return se.CANCELLED;case Wt.UNKNOWN:return se.UNKNOWN;case Wt.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case Wt.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case Wt.INTERNAL:return se.INTERNAL;case Wt.UNAVAILABLE:return se.UNAVAILABLE;case Wt.UNAUTHENTICATED:return se.UNAUTHENTICATED;case Wt.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case Wt.NOT_FOUND:return se.NOT_FOUND;case Wt.ALREADY_EXISTS:return se.ALREADY_EXISTS;case Wt.PERMISSION_DENIED:return se.PERMISSION_DENIED;case Wt.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case Wt.ABORTED:return se.ABORTED;case Wt.OUT_OF_RANGE:return se.OUT_OF_RANGE;case Wt.UNIMPLEMENTED:return se.UNIMPLEMENTED;case Wt.DATA_LOSS:return se.DATA_LOSS;default:return Oe(39323,{code:t})}}(Je=Wt||(Wt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function A2(){return new TextEncoder}/**
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
 */const R2=new ra([4294967295,4294967295],0);function mb(t){const e=A2().encode(t),n=new tS;return n.update(e),new Uint8Array(n.digest())}function gb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ra([n,i],0),new ra([a,l],0)]}class Yy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new rc(`Invalid padding: ${n}`);if(i<0)throw new rc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new rc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ra.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(ra.fromNumber(i)));return a.compare(R2)===1&&(a=new ra([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=mb(e),[i,a]=gb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Yy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=mb(e),[i,a]=gb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class rc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,zc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Ud(Ve.min(),a,new Ot(We),hs(),Qe())}}class zc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new zc(i,n,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class zS{constructor(e,n){this.targetId=e,this.Ce=n}}class FS{constructor(e,n,i=Rn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class yb{constructor(){this.ve=0,this.Fe=_b(),this.Me=Rn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),n=Qe(),i=Qe();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Oe(38017,{changeType:l})}}),new zc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=_b()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class C2{constructor(e){this.Ge=e,this.ze=new Map,this.je=hs(),this.Je=Tf(),this.He=Tf(),this.Ye=new Ot(We)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(Jg(l))if(i===0){const c=new Ae(l.path);this.et(n,c,Nn.newNoDocument(c,Ve.min()))}else lt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=oa(i).toUint8Array()}catch(p){if(p instanceof dS)return Sl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Yy(c,a,l)}catch(p){return Sl(p instanceof rc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Jg(d.target)){const p=new Ae(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Nn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Qe();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new Ud(e,n,this.Ye,this.je,i);return this.je=hs(),this.Je=Tf(),this.He=Tf(),this.Ye=new Ot(We),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new yb,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new sn(We),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new sn(We),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ye("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Tf(){return new Ot(Ae.comparator)}function _b(){return new Ot(Ae.comparator)}const I2={asc:"ASCENDING",desc:"DESCENDING"},D2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k2={and:"AND",or:"OR"};class O2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ny(t,e){return t.useProto3Json||Od(e)?e:{value:e}}function fd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $S(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function M2(t,e){return fd(t,e.toTimestamp())}function yi(t){return lt(!!t,49232),Ve.fromTimestamp(function(n){const i=aa(n);return new vt(i.seconds,i.nanos)}(t))}function Wy(t,e){return ry(t,e).canonicalString()}function ry(t,e){const n=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HS(t){const e=bt.fromString(t);return lt(KS(e),10190,{key:e.toString()}),e}function iy(t,e){return Wy(t.databaseId,e.path)}function yg(t,e){const n=HS(e);if(n.get(1)!==t.databaseId.projectId)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ge(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ae(YS(n))}function GS(t,e){return Wy(t.databaseId,e)}function N2(t){const e=HS(t);return e.length===4?bt.emptyPath():YS(e)}function sy(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YS(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vb(t,e,n){return{name:iy(t,e),fields:n.value.mapValue.fields}}function P2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Oe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(lt(v===void 0||typeof v=="string",58123),Rn.fromBase64String(v||"")):(lt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Rn.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?se.UNKNOWN:BS(g.code);return new ge(v,g.message||"")}(c);n=new FS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=yg(t,i.document.name),l=yi(i.document.updateTime),c=i.document.createTime?yi(i.document.createTime):Ve.min(),d=new Yn({mapValue:{fields:i.document.fields}}),p=Nn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Gf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=yg(t,i.document),l=i.readTime?yi(i.readTime):Ve.min(),c=Nn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Gf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=yg(t,i.document),l=i.removedTargetIds||[];n=new Gf([],l,a,null)}else{if(!("filter"in e))return Oe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new S2(a,l),d=i.targetId;n=new zS(d,c)}}return n}function V2(t,e){let n;if(e instanceof Bc)n={update:vb(t,e.key,e.value)};else if(e instanceof qS)n={delete:iy(t,e.key)};else if(e instanceof ga)n={update:vb(t,e.key,e.data),updateMask:H2(e.fieldMask)};else{if(!(e instanceof w2))return Oe(16599,{Vt:e.type});n={verify:iy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof xc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ac)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof hd)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Oe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:M2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Oe(27497)}(t,e.precondition)),n}function j2(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?yi(a.updateTime):yi(l);return c.isEqual(Ve.min())&&(c=yi(l)),new _2(c,a.transformResults||[])}(n,e))):[]}function L2(t,e){return{documents:[GS(t,e.path)]}}function U2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=GS(t,a);const l=function(g){if(g.length!==0)return QS(zr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:ul(T.field),direction:z2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=ny(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function q2(t){let e=N2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){lt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(w){const T=WS(w);return T instanceof zr&&TS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(w){return w.map(T=>function(O){return new Sc(cl(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(w){let T;return T=typeof w=="object"?w.value:w,Od(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(w){const T=!!w.before,C=w.values||[];return new cd(C,T)}(n.startAt));let g=null;return n.endAt&&(g=function(w){const T=!w.before,C=w.values||[];return new cd(C,T)}(n.endAt)),i2(e,a,c,l,d,"F",p,g)}function B2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=cl(n.unaryFilter.field);return Kt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=cl(n.unaryFilter.field);return Kt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=cl(n.unaryFilter.field);return Kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=cl(n.unaryFilter.field);return Kt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Oe(61313);default:return Oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Kt.create(cl(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Oe(58110);default:return Oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zr.create(n.compositeFilter.filters.map(i=>WS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Oe(1026)}}(n.compositeFilter.op))}(t):Oe(30097,{filter:t})}function z2(t){return I2[t]}function F2(t){return D2[t]}function $2(t){return k2[t]}function ul(t){return{fieldPath:t.canonicalString()}}function cl(t){return An.fromServerFormat(t.fieldPath)}function QS(t){return t instanceof Kt?function(n){if(n.op==="=="){if(ab(n.value))return{unaryFilter:{field:ul(n.field),op:"IS_NAN"}};if(sb(n.value))return{unaryFilter:{field:ul(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ab(n.value))return{unaryFilter:{field:ul(n.field),op:"IS_NOT_NAN"}};if(sb(n.value))return{unaryFilter:{field:ul(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ul(n.field),op:F2(n.op),value:n.value}}}(t):t instanceof zr?function(n){const i=n.getFilters().map(a=>QS(a));return i.length===1?i[0]:{compositeFilter:{op:$2(n.op),filters:i}}}(t):Oe(54877,{filter:t})}function H2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,i,a,l=Ve.min(),c=Ve.min(),d=Rn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Zs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.yt=e}}function Y2(t){const e=q2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ty(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.Cn=new Q2}addToCollectionParentIndex(e,n){return this.Cn.add(n),ue.resolve()}getCollectionParents(e,n){return ue.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ue.resolve()}deleteFieldIndex(e,n){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,n){return ue.resolve()}getDocumentsMatchingTarget(e,n){return ue.resolve(null)}getIndexType(e,n){return ue.resolve(0)}getFieldIndexes(e,n){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,n){return ue.resolve(sa.min())}getMinOffsetFromCollectionGroup(e,n){return ue.resolve(sa.min())}updateCollectionGroup(e,n,i){return ue.resolve()}updateIndexEntries(e,n){return ue.resolve()}}class Q2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new sn(bt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new sn(bt.comparator)).toArray()}}/**
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
 */const Eb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},XS=41943040;class Gn{static withCacheSize(e){return new Gn(e,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.DEFAULT_COLLECTION_PERCENTILE=10,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gn.DEFAULT=new Gn(XS,Gn.DEFAULT_COLLECTION_PERCENTILE,Gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gn.DISABLED=new Gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Cl(0)}static cr(){return new Cl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="LruGarbageCollector",K2=1048576;function bb([t,e],[n,i]){const a=We(t,n);return a===0?We(e,i):a}class X2{constructor(e){this.Ir=e,this.buffer=new sn(bb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();bb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Z2{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ye(wb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ql(n)?ye(wb,"Ignoring IndexedDB error during garbage collection: ",n):await Ul(n)}await this.Vr(3e5)})}}class J2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return ue.resolve(kd.ce);const i=new X2(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ye("LruGarbageCollector","Garbage collection skipped; disabled"),ue.resolve(Eb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ye("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eb):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(ye("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),a=this.params.maximumSequenceNumbersToCollect):a=w,c=Date.now(),this.nthSequenceNumber(e,a))).next(w=>(i=w,d=Date.now(),this.removeTargets(e,i,n))).next(w=>(l=w,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(w=>(g=Date.now(),ol()<=Ye.DEBUG&&ye("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ue.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:w})))}}function e4(t,e){return new J2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ue.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&fc(i.mutation,a,or.empty(),vt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Qe()){const a=Xa();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=nc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Xa();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Qe()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=hs();const c=hc(),d=function(){return hc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof ga)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),fc(v.mutation,g,v.mutation.getFieldMask(),vt.now())):c.set(g.key,or.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new n4(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=hc();let a=new Ot((c,d)=>c-d),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||or.empty();v=d.applyToLocalView(g,v),i.set(p,v);const w=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,w)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,w=OS();v.forEach(T=>{if(!l.has(T)){const C=LS(n.get(T),i.get(T));C!==null&&w.set(T,C),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,w))}return ue.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):ue.resolve(Xa());let d=Ec,p=l;return c.next(g=>ue.forEach(g,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),l.get(v)?ue.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Qe())).next(v=>({batchId:d,changes:kS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ae(n)).next(i=>{let a=nc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=nc();return this.indexManager.getCollectionParents(e,l).next(d=>ue.forEach(d,p=>{const g=function(w,T){return new Bl(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((w,T)=>{c=c.insert(w,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Nn.newInvalidDocument(v)))});let d=nc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&fc(v.mutation,g,or.empty(),vt.now()),Vd(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ue.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:yi(a.createTime)}}(n)),ue.resolve()}getNamedQuery(e,n){return ue.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:Y2(a.bundledQuery),readTime:yi(a.readTime)}}(n)),ue.resolve()}}/**
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
 */class s4{constructor(){this.overlays=new Ot(Ae.comparator),this.qr=new Map}getOverlay(e,n){return ue.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Xa();return ue.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),ue.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),ue.resolve()}getOverlaysForCollection(e,n,i){const a=Xa(),l=n.length+1,c=new Ae(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ue.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new Ot((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Xa(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Xa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return ue.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new T2(n,i));let l=this.qr.get(n);l===void 0&&(l=Qe(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class a4{constructor(){this.sessionToken=Rn.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ue.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.Qr=new sn(gn.$r),this.Ur=new sn(gn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new gn(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new gn(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Ae(new bt([])),i=new gn(n,e),a=new gn(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Ae(new bt([])),i=new gn(n,e),a=new gn(n,e+1);let l=Qe();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new gn(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class gn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Ae.comparator(e.key,n.key)||We(e.Yr,n.Yr)}static Kr(e,n){return We(e.Yr,n.Yr)||Ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new sn(gn.$r)}checkEmpty(e){return ue.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new b2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new gn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ue.resolve(c)}lookupMutationBatch(e,n){return ue.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return ue.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(this.mutationQueue.length===0?qy:this.tr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new gn(n,0),a=new gn(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),ue.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new sn(We);return n.forEach(a=>{const l=new gn(a,0),c=new gn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),ue.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Ae.isDocumentKey(l)||(l=l.child(""));const c=new gn(new Ae(l),0);let d=new sn(We);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),ue.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){lt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return ue.forEach(n.mutations,a=>{const l=new gn(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new gn(n,0),a=this.Zr.firstAfterOrEqual(i);return ue.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e){this.ri=e,this.docs=function(){return new Ot(Ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ue.resolve(i?i.document.mutableCopy():Nn.newInvalidDocument(n))}getEntries(e,n){let i=hs();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Nn.newInvalidDocument(a))}),ue.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=hs();const c=n.path,d=new Ae(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||VN(PN(v),i)<=0||(a.has(v.key)||Vd(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ue.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Oe(9500)}ii(e,n){return ue.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new u4(this)}getSize(e){return ue.resolve(this.size)}}class u4 extends t4{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),ue.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.persistence=e,this.si=new ho(n=>Fy(n),$y),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Qy,this.targetCount=0,this.ai=Cl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),ue.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Cl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ue.resolve()}updateTargetData(e,n){return this.Pr(n),ue.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ue.waitFor(l).next(()=>a)}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return ue.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),ue.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ue.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ue.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return ue.resolve(i)}containsKey(e,n){return ue.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.ui={},this.overlays={},this.ci=new kd(0),this.li=!1,this.li=!0,this.hi=new a4,this.referenceDelegate=e(this),this.Pi=new c4(this),this.indexManager=new W2,this.remoteDocumentCache=function(a){return new l4(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new G2(n),this.Ii=new i4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new o4(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){ye("MemoryPersistence","Starting transaction:",e);const a=new h4(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return ue.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class h4 extends LN{constructor(e){super(),this.currentSequenceNumber=e}}class Ky{constructor(e){this.persistence=e,this.Ri=new Qy,this.Vi=null}static mi(e){return new Ky(e)}get fi(){if(this.Vi)return this.Vi;throw Oe(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),ue.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),ue.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ue.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.fi,i=>{const a=Ae.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ue.or([()=>ue.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class dd{constructor(e,n){this.persistence=e,this.pi=new ho(i=>BN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=e4(this,n)}static mi(e,n){return new dd(e,n)}Ei(){}di(e){return ue.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return ue.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?ue.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Ve.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ue.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ue.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ff(e.data.value)),n}br(e,n,i){return ue.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return ue.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=Qe(),a=Qe();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Xy(e,n.fromCache,i,a)}}/**
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
 */class f4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return BD()?8:UN(Pn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new f4;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(ol()<=Ye.DEBUG&&ye("QueryEngine","SDK will not create cache indexes for query:",ll(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ue.resolve()):(ol()<=Ye.DEBUG&&ye("QueryEngine","Query:",ll(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(ol()<=Ye.DEBUG&&ye("QueryEngine","The SDK decides to create cache indexes for query:",ll(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gi(n))):ue.resolve())}ys(e,n){if(cb(n))return ue.resolve(null);let i=gi(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=ty(n,null,"F"),i=gi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,ty(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return cb(n)||a.isEqual(Ve.min())?ue.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?ue.resolve(null):(ol()<=Ye.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ll(n)),this.vs(e,c,n,NN(a,Ec)).next(d=>d))})}Ds(e,n){let i=new sn(IS(e));return n.forEach((a,l)=>{Vd(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return ol()<=Ye.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",ll(n)),this.ps.getDocumentsMatchingQuery(e,n,sa.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="LocalStore",p4=3e8;class m4{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Ot(We),this.xs=new ho(l=>Fy(l),$y),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function g4(t,e,n,i){return new m4(t,e,n,i)}async function JS(t,e){const n=je(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function y4(t,e){const n=je(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const w=g.batch,T=w.keys();let C=ue.resolve();return T.forEach(O=>{C=C.next(()=>v.getEntry(p,O)).next(B=>{const M=g.docVersions.get(O);lt(M!==null,48541),B.version.compareTo(M)<0&&(w.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function ex(t){const e=je(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function _4(t,e){const n=je(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,w)=>{const T=a.get(w);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,w).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,w)));let C=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?C=C.withResumeToken(Rn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,i)),a=a.insert(w,C),function(B,M,F){return B.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=p4?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,C,v)&&d.push(n.Pi.updateTargetData(l,C))});let p=hs(),g=Qe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(v4(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Ve.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(w=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return ue.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function v4(t,e,n){let i=Qe(),a=Qe();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=hs();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ye(Zy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function E4(t,e){const n=je(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=qy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function w4(t,e){const n=je(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,ue.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Zs(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function ay(t,e,n){const i=je(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ql(c))throw c;ye(Zy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Tb(t,e,n){const i=je(t);let a=Ve.min(),l=Qe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const w=je(p),T=w.xs.get(v);return T!==void 0?ue.resolve(w.Ms.get(T)):w.Pi.getTargetData(g,v)}(i,c,gi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Ve.min(),n?l:Qe())).next(d=>(b4(i,a2(e),d),{documents:d,Qs:l})))}function b4(t,e,n){let i=t.Os.get(e)||Ve.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class Sb{constructor(){this.activeTargetIds=f2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T4{constructor(){this.Mo=new Sb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Sb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="ConnectivityMonitor";class Ab{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ye(xb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ye(xb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sf=null;function oy(){return Sf===null?Sf=function(){return 268435456+Math.round(2147483648*Math.random())}():Sf++,"0x"+Sf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="RestConnection",x4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===ld?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=oy(),d=this.zo(e,n.toUriEncodedString());ye(_g,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Pl(g);return this.Jo(e,d,p,i,v).then(w=>(ye(_g,`Received RPC '${e}' ${c}: `,w),w),w=>{throw Sl(_g,`RPC '${e}' ${c} failed with error: `,w,"url: ",d,"request:",i),w})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ll}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=x4[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="WebChannelConnection";class C4 extends A4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=oy();return new Promise((d,p)=>{const g=new nS;g.setWithCredentials(!0),g.listenOnce(rS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case zf.NO_ERROR:const w=g.getResponseJson();ye(kn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),d(w);break;case zf.TIMEOUT:ye(kn,`RPC '${e}' ${c} timed out`),p(new ge(se.DEADLINE_EXCEEDED,"Request time out"));break;case zf.HTTP_ERROR:const T=g.getStatus();if(ye(kn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const B=function(F){const $=F.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf($)>=0?$:se.UNKNOWN}(O.status);p(new ge(B,O.message))}else p(new ge(se.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(se.UNAVAILABLE,"Connection failed."));break;default:Oe(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ye(kn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);ye(kn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=oy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=aS(),d=sS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ye(kn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const w=c.createWebChannel(v,p);this.I_(w);let T=!1,C=!1;const O=new R4({Yo:M=>{C?ye(kn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(T||(ye(kn,`Opening RPC '${e}' stream ${a} transport.`),w.open(),T=!0),ye(kn,`RPC '${e}' stream ${a} sending:`,M),w.send(M))},Zo:()=>w.close()}),B=(M,F,$)=>{M.listen(F,P=>{try{$(P)}catch(H){setTimeout(()=>{throw H},0)}})};return B(w,tc.EventType.OPEN,()=>{C||(ye(kn,`RPC '${e}' stream ${a} transport opened.`),O.o_())}),B(w,tc.EventType.CLOSE,()=>{C||(C=!0,ye(kn,`RPC '${e}' stream ${a} transport closed`),O.a_(),this.E_(w))}),B(w,tc.EventType.ERROR,M=>{C||(C=!0,Sl(kn,`RPC '${e}' stream ${a} transport errored. Name:`,M.name,"Message:",M.message),O.a_(new ge(se.UNAVAILABLE,"The operation could not be completed")))}),B(w,tc.EventType.MESSAGE,M=>{var F;if(!C){const $=M.data[0];lt(!!$,16349);const P=$,H=(P==null?void 0:P.error)||((F=P[0])==null?void 0:F.error);if(H){ye(kn,`RPC '${e}' stream ${a} received error:`,H);const N=H.status;let Z=function(I){const L=Wt[I];if(L!==void 0)return BS(L)}(N),R=H.message;Z===void 0&&(Z=se.INTERNAL,R="Unknown error status: "+N+" with message "+H.message),C=!0,O.a_(new ge(Z,R)),w.close()}else ye(kn,`RPC '${e}' stream ${a} received:`,$),O.u_($)}}),B(d,iS.STAT_EVENT,M=>{M.stat===Wg.PROXY?ye(kn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===Wg.NOPROXY&&ye(kn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function vg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){return new O2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&ye("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="PersistentStream";class nx{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(cs(n.toString()),cs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ge(se.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ye(Rb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ye(Rb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I4 extends nx{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=P2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ve.min():c.readTime?yi(c.readTime):Ve.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=sy(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Jg(p)?{documents:L2(l,p)}:{query:U2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=$S(l,c.resumeToken);const g=ny(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ve.min())>0){d.readTime=fd(l,c.snapshotVersion.toTimestamp());const g=ny(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=B2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=sy(this.serializer),n.removeTarget=e,this.q_(n)}}class D4 extends nx{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=j2(e.writeResults,e.commitTime),i=yi(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=sy(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>V2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{}class O4 extends k4{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,ry(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(se.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,ry(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(se.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class M4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(cs(n),this.aa=!1):ye("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="RemoteStore";class N4{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{fo(this)&&(ye(uo,"Restarting streams for network reachability change."),await async function(p){const g=je(p);g.Ea.add(4),await Fc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Bd(g)}(this))})}),this.Ra=new M4(i,a)}}async function Bd(t){if(fo(t))for(const e of t.da)await e(!0)}async function Fc(t){for(const e of t.da)await e(!1)}function rx(t,e){const n=je(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),n_(n)?t_(n):zl(n).O_()&&e_(n,e))}function Jy(t,e){const n=je(t),i=zl(n);n.Ia.delete(e),i.O_()&&ix(n,e),n.Ia.size===0&&(i.O_()?i.L_():fo(n)&&n.Ra.set("Unknown"))}function e_(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zl(t).Y_(e)}function ix(t,e){t.Va.Ue(e),zl(t).Z_(e)}function t_(t){t.Va=new C2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zl(t).start(),t.Ra.ua()}function n_(t){return fo(t)&&!zl(t).x_()&&t.Ia.size>0}function fo(t){return je(t).Ea.size===0}function sx(t){t.Va=void 0}async function P4(t){t.Ra.set("Online")}async function V4(t){t.Ia.forEach((e,n)=>{e_(t,e)})}async function j4(t,e){sx(t),n_(t)?(t.Ra.ha(e),t_(t)):t.Ra.set("Unknown")}async function L4(t,e,n){if(t.Ra.set("Online"),e instanceof FS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){ye(uo,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await pd(t,i)}else if(e instanceof Gf?t.Va.Ze(e):e instanceof zS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ve.min()))try{const i=await ex(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Rn.EMPTY_BYTE_STRING,v.snapshotVersion)),ix(l,p);const w=new Zs(v.target,p,g,v.sequenceNumber);e_(l,w)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){ye(uo,"Failed to raise snapshot:",i),await pd(t,i)}}async function pd(t,e,n){if(!ql(e))throw e;t.Ea.add(1),await Fc(t),t.Ra.set("Offline"),n||(n=()=>ex(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ye(uo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Bd(t)})}function ax(t,e){return e().catch(n=>pd(t,n,e))}async function zd(t){const e=je(t),n=ua(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qy;for(;U4(e);)try{const a=await E4(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,q4(e,a)}catch(a){await pd(e,a)}ox(e)&&lx(e)}function U4(t){return fo(t)&&t.Ta.length<10}function q4(t,e){t.Ta.push(e);const n=ua(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ox(t){return fo(t)&&!ua(t).x_()&&t.Ta.length>0}function lx(t){ua(t).start()}async function B4(t){ua(t).ra()}async function z4(t){const e=ua(t);for(const n of t.Ta)e.ea(n.mutations)}async function F4(t,e,n){const i=t.Ta.shift(),a=Gy.from(i,e,n);await ax(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await zd(t)}async function $4(t,e){e&&ua(t).X_&&await async function(i,a){if(function(c){return x2(c)&&c!==se.ABORTED}(a.code)){const l=i.Ta.shift();ua(i).B_(),await ax(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await zd(i)}}(t,e),ox(t)&&lx(t)}async function Cb(t,e){const n=je(t);n.asyncQueue.verifyOperationInProgress(),ye(uo,"RemoteStore received new credentials");const i=fo(n);n.Ea.add(3),await Fc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Bd(n)}async function H4(t,e){const n=je(t);e?(n.Ea.delete(2),await Bd(n)):e||(n.Ea.add(2),await Fc(n),n.Ra.set("Unknown"))}function zl(t){return t.ma||(t.ma=function(n,i,a){const l=je(n);return l.sa(),new I4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:P4.bind(null,t),t_:V4.bind(null,t),r_:j4.bind(null,t),H_:L4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),n_(t)?t_(t):t.Ra.set("Unknown")):(await t.ma.stop(),sx(t))})),t.ma}function ua(t){return t.fa||(t.fa=function(n,i,a){const l=je(n);return l.sa(),new D4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:B4.bind(null,t),r_:$4.bind(null,t),ta:z4.bind(null,t),na:F4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await zd(t)):(await t.fa.stop(),t.Ta.length>0&&(ye(uo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new r_(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function i_(t,e){if(cs("AsyncQueue",`${e}: ${t}`),ql(t))return new ge(se.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static emptySet(e){return new gl(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Ae.comparator(n.key,i.key):(n,i)=>Ae.comparator(n.key,i.key),this.keyedMap=nc(),this.sortedSet=new Ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gl)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new gl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.ga=new Ot(Ae.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Oe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Il{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Il(e,n,gl.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Y4{constructor(){this.queries=Db(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=je(n),l=a.queries;a.queries=Db(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ge(se.ABORTED,"Firestore shutting down"))}}function Db(){return new ho(t=>CS(t),Pd)}async function s_(t,e){const n=je(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new G4,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=i_(c,`Initialization of query '${ll(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&o_(n)}async function a_(t,e){const n=je(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function W4(t,e){const n=je(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&o_(n)}function Q4(t,e,n){const i=je(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function o_(t){t.Ca.forEach(e=>{e.next()})}var ly,kb;(kb=ly||(ly={})).Ma="default",kb.Cache="cache";class l_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Il(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Il.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ly.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.key=e}}class cx{constructor(e){this.key=e}}class K4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=IS(e),this.tu=new gl(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Ib,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,w)=>{const T=a.get(v),C=Vd(this.query,w)?w:null,O=!!T&&this.mutatedKeys.has(T.key),B=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;T&&C?T.data.isEqual(C.data)?O!==B&&(i.track({type:3,doc:C}),M=!0):this.su(T,C)||(i.track({type:2,doc:C}),M=!0,(p&&this.eu(C,p)>0||g&&this.eu(C,g)<0)&&(d=!0)):!T&&C?(i.track({type:0,doc:C}),M=!0):T&&!C&&(i.track({type:1,doc:T}),M=!0,(p||g)&&(d=!0)),M&&(C?(c=c.add(C),l=B?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,w)=>function(C,O){const B=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe(20277,{Rt:M})}};return B(C)-B(O)}(v.type,w.type)||this.eu(v.doc,w.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Il(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ib,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new cx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new ux(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Qe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Il.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const u_="SyncEngine";class X4{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Z4{constructor(e){this.key=e,this.hu=!1}}class J4{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ho(d=>CS(d),Pd),this.Iu=new Map,this.Eu=new Set,this.du=new Ot(Ae.comparator),this.Au=new Map,this.Ru=new Qy,this.Vu={},this.mu=new Map,this.fu=Cl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function eP(t,e,n=!0){const i=gx(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await hx(i,e,n,!0),a}async function tP(t,e){const n=gx(t);await hx(n,e,!0,!1)}async function hx(t,e,n,i){const a=await w4(t.localStore,gi(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await nP(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&rx(t.remoteStore,a),d}async function nP(t,e,n,i,a){t.pu=(w,T,C)=>async function(B,M,F,$){let P=M.view.ru(F);P.Cs&&(P=await Tb(B.localStore,M.query,!1).then(({documents:R})=>M.view.ru(R,P)));const H=$&&$.targetChanges.get(M.targetId),N=$&&$.targetMismatches.get(M.targetId)!=null,Z=M.view.applyChanges(P,B.isPrimaryClient,H,N);return Mb(B,M.targetId,Z.au),Z.snapshot}(t,w,T,C);const l=await Tb(t.localStore,e,!0),c=new K4(e,l.Qs),d=c.ru(l.documents),p=zc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Mb(t,n,g.au);const v=new X4(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function rP(t,e,n){const i=je(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Pd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await ay(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&Jy(i.remoteStore,a.targetId),uy(i,a.targetId)}).catch(Ul)):(uy(i,a.targetId),await ay(i.localStore,a.targetId,!0))}async function iP(t,e){const n=je(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Jy(n.remoteStore,i.targetId))}async function sP(t,e,n){const i=fP(t);try{const a=await function(c,d){const p=je(c),g=vt.now(),v=d.reduce((C,O)=>C.add(O.key),Qe());let w,T;return p.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=hs(),B=Qe();return p.Ns.getEntries(C,v).next(M=>{O=M,O.forEach((F,$)=>{$.isValidDocument()||(B=B.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(C,O)).next(M=>{w=M;const F=[];for(const $ of d){const P=E2($,w.get($.key).overlayedDocument);P!=null&&F.push(new ga($.key,P,ES(P.value.mapValue),Ur.exists(!0)))}return p.mutationQueue.addMutationBatch(C,g,F,d)}).next(M=>{T=M;const F=M.applyToLocalDocumentSet(w,B);return p.documentOverlayCache.saveOverlays(C,M.batchId,F)})}).then(()=>({batchId:T.batchId,changes:kS(w)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Ot(We)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await $c(i,a.changes),await zd(i.remoteStore)}catch(a){const l=i_(a,"Failed to persist write");n.reject(l)}}async function fx(t,e){const n=je(t);try{const i=await _4(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(lt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?lt(c.hu,14607):a.removedDocuments.size>0&&(lt(c.hu,42227),c.hu=!1))}),await $c(n,i,e)}catch(i){await Ul(i)}}function Ob(t,e,n){const i=je(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=je(c);p.onlineState=d;let g=!1;p.queries.forEach((v,w)=>{for(const T of w.Sa)T.va(d)&&(g=!0)}),g&&o_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function aP(t,e,n){const i=je(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new Ot(Ae.comparator);c=c.insert(l,Nn.newNoDocument(l,Ve.min()));const d=Qe().add(l),p=new Ud(Ve.min(),new Map,new Ot(We),c,d);await fx(i,p),i.du=i.du.remove(l),i.Au.delete(e),c_(i)}else await ay(i.localStore,e,!1).then(()=>uy(i,e,n)).catch(Ul)}async function oP(t,e){const n=je(t),i=e.batch.batchId;try{const a=await y4(n.localStore,e);px(n,i,null),dx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await $c(n,a)}catch(a){await Ul(a)}}async function lP(t,e,n){const i=je(t);try{const a=await function(c,d){const p=je(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(lt(w!==null,37113),v=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);px(i,e,n),dx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await $c(i,a)}catch(a){await Ul(a)}}function dx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function px(t,e,n){const i=je(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function uy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||mx(t,i)})}function mx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Jy(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),c_(t))}function Mb(t,e,n){for(const i of n)i instanceof ux?(t.Ru.addReference(i.key,e),uP(t,i)):i instanceof cx?(ye(u_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||mx(t,i.key)):Oe(19791,{wu:i})}function uP(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(ye(u_,"New document in limbo: "+n),t.Eu.add(i),c_(t))}function c_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Ae(bt.fromString(e)),i=t.fu.next();t.Au.set(i,new Z4(n)),t.du=t.du.insert(n,i),rx(t.remoteStore,new Zs(gi(Nd(n.path)),i,"TargetPurposeLimboResolution",kd.ce))}}async function $c(t,e,n){const i=je(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const w=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){a.push(g);const w=Xy.As(p.targetId,g);l.push(w)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=je(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>ue.forEach(g,T=>ue.forEach(T.Es,C=>v.persistence.referenceDelegate.addReference(w,T.targetId,C)).next(()=>ue.forEach(T.ds,C=>v.persistence.referenceDelegate.removeReference(w,T.targetId,C)))))}catch(w){if(!ql(w))throw w;ye(Zy,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const C=v.Ms.get(T),O=C.snapshotVersion,B=C.withLastLimboFreeSnapshotVersion(O);v.Ms=v.Ms.insert(T,B)}}}(i.localStore,l))}async function cP(t,e){const n=je(t);if(!n.currentUser.isEqual(e)){ye(u_,"User change. New user:",e.toKey());const i=await JS(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ge(se.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await $c(n,i.Ls)}}function hP(t,e){const n=je(t),i=n.Au.get(e);if(i&&i.hu)return Qe().add(i.key);{let a=Qe();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function gx(t){const e=je(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aP.bind(null,e),e.Pu.H_=W4.bind(null,e.eventManager),e.Pu.yu=Q4.bind(null,e.eventManager),e}function fP(t){const e=je(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lP.bind(null,e),e}class md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return g4(this.persistence,new d4,e.initialUser,this.serializer)}Cu(e){return new ZS(Ky.mi,this.serializer)}Du(e){return new T4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}md.provider={build:()=>new md};class dP extends md{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof dd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new Z2(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gn.withCacheSize(this.cacheSizeBytes):Gn.DEFAULT;return new ZS(i=>dd.mi(i,n),this.serializer)}}class cy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ob(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cP.bind(null,this.syncEngine),await H4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y4}()}createDatastore(e){const n=qd(e.databaseInfo.databaseId),i=function(l){return new C4(l)}(e.databaseInfo);return function(l,c,d,p){return new O4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new N4(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Ob(this.syncEngine,n,0),function(){return Ab.v()?new Ab:new S4}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const w=new J4(a,l,c,d,p,g);return v&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=je(a);ye(uo,"RemoteStore shutting down."),l.Ea.add(5),await Fc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}cy.provider={build:()=>new cy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class h_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):cs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="FirestoreClient";class pP{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Mn.UNAUTHENTICATED,this.clientId=Uy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ye(ca,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ye(ca,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=i_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Eg(t,e){t.asyncQueue.verifyOperationInProgress(),ye(ca,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await JS(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mP(t);ye(ca,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Cb(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>Cb(e.remoteStore,a)),t._onlineComponents=e}async function mP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ye(ca,"Using user provided OfflineComponentProvider");try{await Eg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===se.FAILED_PRECONDITION||a.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Sl("Error using user provided cache. Falling back to memory cache: "+n),await Eg(t,new md)}}else ye(ca,"Using default OfflineComponentProvider"),await Eg(t,new dP(void 0));return t._offlineComponents}async function yx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ye(ca,"Using user provided OnlineComponentProvider"),await Nb(t,t._uninitializedComponentsProvider._online)):(ye(ca,"Using default OnlineComponentProvider"),await Nb(t,new cy))),t._onlineComponents}function gP(t){return yx(t).then(e=>e.syncEngine)}async function gd(t){const e=await yx(t),n=e.eventManager;return n.onListen=eP.bind(null,e.syncEngine),n.onUnlisten=rP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iP.bind(null,e.syncEngine),n}function yP(t,e,n={}){const i=new as;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new h_({next:T=>{v.Nu(),c.enqueueAndForget(()=>a_(l,w));const C=T.docs.has(d);!C&&T.fromCache?g.reject(new ge(se.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&T.fromCache&&p&&p.source==="server"?g.reject(new ge(se.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new l_(Nd(d.path),v,{includeMetadataChanges:!0,qa:!0});return s_(l,w)}(await gd(t),t.asyncQueue,e,n,i)),i.promise}function _P(t,e,n={}){const i=new as;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new h_({next:T=>{v.Nu(),c.enqueueAndForget(()=>a_(l,w)),T.fromCache&&p.source==="server"?g.reject(new ge(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new l_(d,v,{includeMetadataChanges:!0,qa:!0});return s_(l,w)}(await gd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function _x(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="firestore.googleapis.com",Vb=!0;class jb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vx,this.ssl=Vb}else this.host=e.host,this.ssl=e.ssl??Vb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=XS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<K2)throw new ge(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_x(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ge(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new TN;switch(i.type){case"firstParty":return new RN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Pb.get(n);i&&(ye("ComponentProvider","Removing Datastore"),Pb.delete(n),i.terminate())}(this),Promise.resolve()}}function vP(t,e,n,i={}){var g;t=lr(t,Fd);const a=Pl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(d1(`https://${d}`),p1("Firestore",!0)),l.host!==vx&&l.host!==d&&Sl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!io(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,w;if(typeof i.mockUserToken=="string")v=i.mockUserToken,w=Mn.MOCK_USER;else{v=OD(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ge(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Mn(T)}t._authCredentials=new SN(new lS(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ya(this.firestore,e,this._query)}}class Pt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(qc(n,Pt._jsonSchema))return new Pt(e,i||null,new Ae(bt.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:Xt("string",Pt._jsonSchemaVersion),referencePath:Xt("string")};class ia extends ya{constructor(e,n,i){super(e,n,Nd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new Ae(e))}withConverter(e){return new ia(this.firestore,e,this._path)}}function Ar(t,e,...n){if(t=Zt(t),uS("collection","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Kw(i),new ia(t,null,i)}{if(!(t instanceof Pt||t instanceof ia))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Kw(i),new ia(t.firestore,null,i)}}function zn(t,e,...n){if(t=Zt(t),arguments.length===1&&(e=Uy.newId()),uS("doc","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Qw(i),new Pt(t,null,new Ae(i))}{if(!(t instanceof Pt||t instanceof ia))throw new ge(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Qw(i),new Pt(t.firestore,t instanceof ia?t.converter:null,new Ae(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="AsyncQueue";class Ub{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tx(this,"async_queue_retry"),this._c=()=>{const i=vg();i&&ye(Lb,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=vg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=vg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new as;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ql(e))throw e;ye(Lb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,cs("INTERNAL UNHANDLED ERROR: ",qb(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=r_.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Oe(47125,{Pc:qb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function qb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Bb(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class ha extends Fd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new Ub,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ub(e),this._firestoreClient=void 0,await e}}}function Ex(t,e){const n=typeof t=="object"?t:_1(),i=typeof t=="string"?t:ld,a=Iy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=DD("firestore");l&&vP(a,...l)}return a}function $d(t){if(t._terminated)throw new ge(se.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EP(t),t._firestoreClient}function EP(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new $N(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,_x(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new pP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xr(Rn.fromBase64String(e))}catch(n){throw new ge(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xr(Rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qc(e,xr._jsonSchema))return xr.fromBase64String(e.bytes)}}xr._jsonSchemaVersion="firestore/bytes/1.0",xr._jsonSchema={type:Xt("string",xr._jsonSchemaVersion),bytes:Xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new An(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _i{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_i._jsonSchemaVersion}}static fromJSON(e){if(qc(e,_i._jsonSchema))return new _i(e.latitude,e.longitude)}}_i._jsonSchemaVersion="firestore/geoPoint/1.0",_i._jsonSchema={type:Xt("string",_i._jsonSchemaVersion),latitude:Xt("number"),longitude:Xt("number")};/**
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
 */class vi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qc(e,vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vi(e.vectorValues);throw new ge(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vi._jsonSchemaVersion="firestore/vectorValue/1.0",vi._jsonSchema={type:Xt("string",vi._jsonSchemaVersion),vectorValues:Xt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=/^__.*__$/;class bP{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ga(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bc(e,this.data,n,this.fieldTransforms)}}class wx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ga(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe(40011,{Ac:t})}}class f_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new f_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return yd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(bx(this.Ac)&&wP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class TP{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||qd(e)}Cc(e,n,i,a=!1){return new f_({Ac:e,methodName:n,Dc:i,path:An.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yd(t){const e=t._freezeSettings(),n=qd(t._databaseId);return new TP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);p_("Data must be an object, but it was:",c,i);const d=Sx(i,c);let p,g;if(l.merge)p=new or(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const w of l.mergeFields){const T=hy(e,w,n);if(!c.contains(T))throw new ge(se.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Ax(v,T)||v.push(T)}p=new or(v),g=c.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=c.fieldTransforms;return new bP(new Yn(d),p,g)}class Wd extends Gd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wd}}class d_ extends Gd{_toFieldTransform(e){return new g2(e.path,new xc)}isEqual(e){return e instanceof d_}}function SP(t,e,n,i){const a=t.Cc(1,e,n);p_("Data must be an object, but it was:",a,i);const l=[],c=Yn.empty();ma(i,(p,g)=>{const v=m_(e,p,n);g=Zt(g);const w=a.yc(v);if(g instanceof Wd)l.push(v);else{const T=Hc(g,w);T!=null&&(l.push(v),c.set(v,T))}});const d=new or(l);return new wx(c,d,a.fieldTransforms)}function xP(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[hy(e,i,n)],p=[a];if(l.length%2!=0)throw new ge(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(hy(e,l[T])),p.push(l[T+1]);const g=[],v=Yn.empty();for(let T=d.length-1;T>=0;--T)if(!Ax(g,d[T])){const C=d[T];let O=p[T];O=Zt(O);const B=c.yc(C);if(O instanceof Wd)g.push(C);else{const M=Hc(O,B);M!=null&&(g.push(C),v.set(C,M))}}const w=new or(g);return new wx(v,w,c.fieldTransforms)}function AP(t,e,n,i=!1){return Hc(n,t.Cc(i?4:3,e))}function Hc(t,e){if(xx(t=Zt(t)))return p_("Unsupported field value:",e,t),Sx(t,e);if(t instanceof Gd)return function(i,a){if(!bx(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Hc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Zt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return d2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:fd(a.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:fd(a.serializer,l)}}if(i instanceof _i)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xr)return{bytesValue:$S(a.serializer,i._byteString)};if(i instanceof Pt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Wy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof vi)return function(c,d){return{mapValue:{fields:{[_S]:{stringValue:vS},[ud]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return Hy(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${Dd(i)}`)}(t,e)}function Sx(t,e){const n={};return fS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ma(t,(i,a)=>{const l=Hc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function xx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof _i||t instanceof xr||t instanceof Pt||t instanceof Gd||t instanceof vi)}function p_(t,e,n){if(!xx(n)||!cS(n)){const i=Dd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function hy(t,e,n){if((e=Zt(e))instanceof Hd)return e._internalPath;if(typeof e=="string")return m_(t,e);throw yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const RP=new RegExp("[~\\*/\\[\\]]");function m_(t,e,n){if(e.search(RP)>=0)throw yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hd(...e.split("."))._internalPath}catch{throw yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yd(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ge(se.INVALID_ARGUMENT,d+t+p)}function Ax(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CP extends Rx{data(){return super.data()}}function Qd(t,e){return typeof e=="string"?m_(t,e):e instanceof Hd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ge(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class g_{}class Ix extends g_{}function fi(t,e,...n){let i=[];e instanceof g_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof y_).length,d=l.filter(p=>p instanceof Kd).length;if(c>1||c>0&&d>0)throw new ge(se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Kd extends Ix{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Kd(e,n,i)}_apply(e){const n=this._parse(e);return Dx(e._query,n),new ya(e.firestore,e.converter,ey(e._query,n))}_parse(e){const n=Yd(e.firestore);return function(l,c,d,p,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ge(se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Fb(w,v);const O=[];for(const B of w)O.push(zb(p,l,B));T={arrayValue:{values:O}}}else T=zb(p,l,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Fb(w,v),T=AP(d,c,w,v==="in"||v==="not-in");return Kt.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Rr(t,e,n){const i=e,a=Qd("where",t);return Kd._create(a,i,n)}class y_ extends g_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new y_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:zr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Dx(c,p),c=ey(c,p)}(e._query,n),new ya(e.firestore,e.converter,ey(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class __ extends Ix{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new __(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ge(se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sc(l,c)}(e._query,this._field,this._direction);return new ya(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new Bl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function v_(t,e="asc"){const n=e,i=Qd("orderBy",t);return __._create(i,n)}function zb(t,e,n){if(typeof(n=Zt(n))=="string"){if(n==="")throw new ge(se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RS(e)&&n.indexOf("/")!==-1)throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(bt.fromString(n));if(!Ae.isDocumentKey(i))throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ib(t,new Ae(i))}if(n instanceof Pt)return ib(t,n._key);throw new ge(se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dd(n)}.`)}function Fb(t,e){if(!Array.isArray(t)||t.length===0)throw new ge(se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(se.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class IP{convertValue(e,n="none"){switch(la(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ma(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[ud].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>qt(c.doubleValue));return new vi(n)}convertGeoPoint(e){return new _i(qt(e.latitude),qt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Md(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(wc(e));default:return null}}convertTimestamp(e){const n=aa(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=bt.fromString(e);lt(KS(i),9688,{name:e});const a=new bc(i.get(1),i.get(3)),l=new Ae(i.popFirst(5));return a.isEqual(n)||cs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class ic{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eo extends Rx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Qd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=eo._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}eo._jsonSchemaVersion="firestore/documentSnapshot/1.0",eo._jsonSchema={type:Xt("string",eo._jsonSchemaVersion),bundleSource:Xt("string","DocumentSnapshot"),bundleName:Xt("string"),bundle:Xt("string")};class Yf extends eo{data(e={}){return super.data(e)}}class to{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ic(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Yf(this._firestore,this._userDataWriter,i.key,i,new ic(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Yf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Yf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:DP(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=to._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){t=lr(t,Pt);const e=lr(t.firestore,ha);return yP($d(e),t._key).then(n=>Ox(e,t,n))}to._jsonSchemaVersion="firestore/querySnapshot/1.0",to._jsonSchema={type:Xt("string",to._jsonSchemaVersion),bundleSource:Xt("string","QuerySnapshot"),bundleName:Xt("string"),bundle:Xt("string")};class E_ extends IP{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function dc(t){t=lr(t,ya);const e=lr(t.firestore,ha),n=$d(e),i=new E_(e);return Cx(t._query),_P(n,t._query).then(a=>new to(e,i,t,a))}function kP(t,e,n){t=lr(t,Pt);const i=lr(t.firestore,ha),a=kx(t.converter,e);return w_(i,[Tx(Yd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Ur.none())])}function hi(t,e,n,...i){t=lr(t,Pt);const a=lr(t.firestore,ha),l=Yd(a);let c;return c=typeof(e=Zt(e))=="string"||e instanceof Hd?xP(l,"updateDoc",t._key,e,n,i):SP(l,"updateDoc",t._key,e),w_(a,[c.toMutation(t._key,Ur.exists(!0))])}function OP(t,e){const n=lr(t.firestore,ha),i=zn(t),a=kx(t.converter,e);return w_(n,[Tx(Yd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Ur.exists(!1))]).then(()=>i)}function Zd(t,...e){var p,g,v;t=Zt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Bb(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Bb(e[i])){const w=e[i];e[i]=(p=w.next)==null?void 0:p.bind(w),e[i+1]=(g=w.error)==null?void 0:g.bind(w),e[i+2]=(v=w.complete)==null?void 0:v.bind(w)}let l,c,d;if(t instanceof Pt)c=lr(t.firestore,ha),d=Nd(t._key.path),l={next:w=>{e[i]&&e[i](Ox(c,t,w))},error:e[i+1],complete:e[i+2]};else{const w=lr(t,ya);c=lr(w.firestore,ha),d=w._query;const T=new E_(c);l={next:C=>{e[i]&&e[i](new to(c,T,w,C))},error:e[i+1],complete:e[i+2]},Cx(t._query)}return function(T,C,O,B){const M=new h_(B),F=new l_(C,M,O);return T.asyncQueue.enqueueAndForget(async()=>s_(await gd(T),F)),()=>{M.Nu(),T.asyncQueue.enqueueAndForget(async()=>a_(await gd(T),F))}}($d(c),d,a,l)}function w_(t,e){return function(i,a){const l=new as;return i.asyncQueue.enqueueAndForget(async()=>sP(await gP(i),a,l)),l.promise}($d(t),e)}function Ox(t,e,n){const i=n.docs.get(e._key),a=new E_(t);return new eo(t,a,e._key,i,new ic(n.hasPendingWrites,n.fromCache),e.converter)}function fy(){return new d_("serverTimestamp")}(function(e,n=!0){(function(a){Ll=a})(Vl),bl(new so("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new ha(new xN(i.getProvider("auth-internal")),new CN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),na(Hw,Gw,e),na(Hw,Gw,"esm2020")})();const MP={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},b_=y1(MP);Ex(b_);const wt=Ex(b_),fa=vN(b_);function NP({onLoginSuccess:t}){const[e,n]=q.useState(""),[i,a]=q.useState(""),l=kc(),c=()=>{l("/signup")},d=()=>{rM(fa,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(PP,{children:[_.jsxs(VP,{children:[_.jsxs(jP,{children:[_.jsx(LP,{children:"PDMS"}),_.jsx(UP,{children:"Pushcomz Design Management System"})]}),_.jsxs(qP,{children:[_.jsx(BP,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(zP,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(FP,{onClick:d,children:"로그인"}),_.jsxs(HP,{children:[_.jsx(GP,{children:"계정이 없습니까?"}),_.jsx(YP,{onClick:c,children:"등록하기"})]})]}),_.jsx($P,{children:"© Pushcomz Corp."})]})}const PP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,VP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,jP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,LP=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,UP=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,qP=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,BP=G.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,zP=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,FP=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,$P=G.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,HP=G.div`
  
`,GP=G.span`
  margin-right: 10px;
  font-size: 13px;
`,YP=G.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,WP="./assets/logo-NEcdCz8m.svg";function QP(){const[t,e]=q.useState(""),[n,i]=q.useState(""),[a,l]=q.useState(null),c=kc();q.useEffect(()=>{const g=Lc(fa,async v=>{if(v){v.displayName&&e(v.displayName);const w=await Xd(zn(wt,"users",v.uid));if(w.exists()){const T=w.data();l(T.role??null),i(T.company??"")}else l(null),i("")}else e(""),l(null),i("")});return()=>g()},[]);const d=()=>{lM(fa).then(()=>{c("/")}).catch(g=>{alert("로그아웃 중 오류가 발생했습니다: "+g.message)})},p=g=>{switch(g){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(KP,{children:[_.jsx(XP,{src:WP}),_.jsxs(ZP,{children:[_.jsxs(JP,{children:[_.jsx(eV,{children:t}),"님(",p(a),") ",n,"환영합니다."]}),_.jsx(tV,{onClick:d,children:"로그아웃"}),_.jsx(nV,{})]})]})}const KP=G.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,XP=G.img``,ZP=G.div``,JP=G.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,eV=G.span`
  font-weight: 700;
`,tV=G.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,nV=G.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,T_="./assets/url-icon-DJKri2bW.svg";function rV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(iV,{isCanceled:t.status==="취소",children:[_.jsx(Tr,{children:e}),_.jsx(Tr,{children:_.jsx(cV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(Tr,{children:c(t.request_date)}),_.jsx(sV,{children:c(t.completion_dt)}),_.jsx(aV,{children:c(t.open_dt)}),_.jsx(Tr,{children:t.merchandiser}),_.jsx(Tr,{children:t.task_form}),_.jsx(oV,{children:t.task_type}),_.jsx(lV,{children:_.jsxs(hV,{children:[t.emergency?_.jsx(Mx,{children:"긴급"}):"",_.jsx(fV,{onClick:d,children:t.requirement})]})}),_.jsx(Tr,{children:_.jsx($b,{href:t.url,target:"_blank"})}),_.jsx(uV,{children:_.jsx(dV,{onClick:d,children:t.note||""})}),_.jsx(Tr,{children:_.jsx(pV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status||"대기"})}),_.jsx(Tr,{children:t.assigned_designer||"미배정"}),_.jsx(Tr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx($b,{href:t.result_url,target:"_blank"}):""}),_.jsx(Tr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(Nx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(mV,{children:"검수완료"}):""}),_.jsx(Tr,{children:_.jsx(Px,{onClick:()=>a(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(Tr,{children:_.jsx(Vx,{onClick:()=>i(t.id),children:"취소"})})]})}const iV=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Mx} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Nx}, ${Px}, ${Vx} {
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
`,Tr=G.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,sV=G.td`
  color: ${({theme:t})=>t.colors.red};
`,aV=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,oV=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,lV=G.td`
  line-height: 15px;
  text-align: left;
`,uV=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,cV=G.span`
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
`,hV=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,fV=G.span`
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
`,Mx=G.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,$b=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${T_}) no-repeat center / contain;
`,dV=G.span`
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
`,pV=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,Nx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,mV=G.span`
  color: green;
  font-weight: bold;
`,Px=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`,Vx=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: ${({theme:t})=>t.colors.black};
`;function gV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(yV,{children:_.jsxs(_V,{children:[_.jsx(vV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Sn,{children:"번호"}),_.jsx(Sn,{children:"문서번호"}),_.jsx(Sn,{children:"요청일"}),_.jsxs(Sn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Sn,{children:"오픈일"}),_.jsx(Sn,{children:"담당MD"}),_.jsx(Sn,{children:"업무부서"}),_.jsx(Sn,{children:"업무유형"}),_.jsx(Sn,{children:"작업항목"}),_.jsx(Sn,{children:"요청서 URL"}),_.jsx(Sn,{children:"메모"}),_.jsx(Sn,{children:"진행상태"}),_.jsx(Sn,{children:"디자이너"}),_.jsx(Sn,{children:"산출물 URL"}),_.jsx(Sn,{children:"검수"}),_.jsx(Sn,{children:"수정"}),_.jsx(Sn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(rV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const yV=G.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,_V=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,vV=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
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

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function S_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(EV,{children:_.jsxs(wV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const EV=G.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,wV=G.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,jx="./assets/selectbox-arrow-BwC8UGU0.svg";function bV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const wg={},sc={};function Za(t,e){try{const i=(wg[t]||(wg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in sc?sc[i]:Hb(i,i.split(":"))}catch{if(t in sc)return sc[t];const n=t==null?void 0:t.match(TV);return n?Hb(t,n.slice(1)):NaN}}const TV=/([+-]\d\d):?(\d\d)?/;function Hb(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return sc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class di extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Za(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),Lx(this),dy(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new di(...n,e):new di(Date.now(),e)}withTimeZone(e){return new di(+this,e)}getTimezoneOffset(){const e=-Za(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),dy(this),+this}[Symbol.for("constructDateFrom")](e){return new di(+new Date(e),this.timeZone)}}const Gb=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!Gb.test(t))return;const e=t.replace(Gb,"$1UTC");di.prototype[e]&&(t.startsWith("get")?di.prototype[t]=function(){return this.internal[e]()}:(di.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),SV(this),+this},di.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),dy(this),+this}))});function dy(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Za(t.timeZone,t)*60))}function SV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),Lx(t)}function Lx(t){const e=Za(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,w=Math.round(-(Za(t.timeZone,t)*60))%60;(w||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+w),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+w+v));const T=Za(t.timeZone,t),C=T>0?Math.floor(T):Math.ceil(T),B=-new Date(+t).getTimezoneOffset()-C,M=C!==n,F=B-p;if(M&&F){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+F);const $=Za(t.timeZone,t),P=$>0?Math.floor($):Math.ceil($),H=C-P;H&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+H),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+H))}}class On extends di{static tz(e,...n){return n.length?new On(...n,e):new On(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${bV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new On(+this,e)}[Symbol.for("constructDateFrom")](e){return new On(+new Date(e),this.timeZone)}}const Ux=6048e5,xV=864e5,Yb=Symbol.for("constructDateFrom");function an(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Yb in t?t[Yb](e):t instanceof Date?new t.constructor(e):new Date(e)}function gt(t,e){return an(e||t,t)}function qx(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(e)?an(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function Bx(t,e,n){const i=gt(t,n==null?void 0:n.in);if(isNaN(e))return an(t,NaN);if(!e)return i;const a=i.getDate(),l=an(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let AV={};function Gc(){return AV}function Dl(t,e){var d,p,g,v;const n=Gc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Cc(t,e){return Dl(t,{...e,weekStartsOn:1})}function zx(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=an(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Cc(a),c=an(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Cc(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Wb(t){const e=gt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Fl(t,...e){const n=an.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Ic(t,e){const n=gt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Fx(t,e,n){const[i,a]=Fl(n==null?void 0:n.in,t,e),l=Ic(i),c=Ic(a),d=+l-Wb(l),p=+c-Wb(c);return Math.round((d-p)/xV)}function RV(t,e){const n=zx(t,e),i=an(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Cc(i)}function CV(t,e,n){return qx(t,e*7,n)}function IV(t,e,n){return Bx(t,e*12,n)}function DV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=an.bind(null,a));const l=gt(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),an(i,n||NaN)}function kV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=an.bind(null,a));const l=gt(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),an(i,n||NaN)}function OV(t,e,n){const[i,a]=Fl(n==null?void 0:n.in,t,e);return+Ic(i)==+Ic(a)}function $x(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function MV(t){return!(!$x(t)&&typeof t!="number"||isNaN(+gt(t)))}function NV(t,e,n){const[i,a]=Fl(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function PV(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function VV(t,e){const[n,i]=Fl(t,e.start,e.end);return{start:n,end:i}}function jV(t,e){const{start:n,end:i}=VV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(an(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function LV(t,e){const n=gt(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function UV(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function Hx(t,e){const n=gt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Gx(t,e){var d,p,g,v;const n=Gc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function qV(t,e){return Gx(t,{...e,weekStartsOn:1})}const BV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zV=(t,e,n)=>{let i;const a=BV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function bg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const FV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$V={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},HV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},GV={date:bg({formats:FV,defaultWidth:"full"}),time:bg({formats:$V,defaultWidth:"full"}),dateTime:bg({formats:HV,defaultWidth:"full"})},YV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},WV=(t,e,n,i)=>YV[t];function Wu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const QV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},KV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},XV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ZV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},JV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},e6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},t6=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},n6={ordinalNumber:t6,era:Wu({values:QV,defaultWidth:"wide"}),quarter:Wu({values:KV,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Wu({values:XV,defaultWidth:"wide"}),day:Wu({values:ZV,defaultWidth:"wide"}),dayPeriod:Wu({values:JV,defaultWidth:"wide",formattingValues:e6,defaultFormattingWidth:"wide"})};function Qu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?i6(d,w=>w.test(c)):r6(d,w=>w.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function r6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function i6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function s6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const a6=/^(\d+)(th|st|nd|rd)?/i,o6=/\d+/i,l6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u6={any:[/^b/i,/^(a|c)/i]},c6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},h6={any:[/1/i,/2/i,/3/i,/4/i]},f6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},d6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},m6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},g6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},y6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_6={ordinalNumber:s6({matchPattern:a6,parsePattern:o6,valueCallback:t=>parseInt(t,10)}),era:Qu({matchPatterns:l6,defaultMatchWidth:"wide",parsePatterns:u6,defaultParseWidth:"any"}),quarter:Qu({matchPatterns:c6,defaultMatchWidth:"wide",parsePatterns:h6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Qu({matchPatterns:f6,defaultMatchWidth:"wide",parsePatterns:d6,defaultParseWidth:"any"}),day:Qu({matchPatterns:p6,defaultMatchWidth:"wide",parsePatterns:m6,defaultParseWidth:"any"}),dayPeriod:Qu({matchPatterns:g6,defaultMatchWidth:"any",parsePatterns:y6,defaultParseWidth:"any"})},x_={code:"en-US",formatDistance:zV,formatLong:GV,formatRelative:WV,localize:n6,match:_6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function v6(t,e){const n=gt(t,e==null?void 0:e.in);return Fx(n,Hx(n))+1}function Yx(t,e){const n=gt(t,e==null?void 0:e.in),i=+Cc(n)-+RV(n);return Math.round(i/Ux)+1}function Wx(t,e){var v,w,T,C;const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Gc(),l=(e==null?void 0:e.firstWeekContainsDate)??((w=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((C=(T=a.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=an((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Dl(c,e),p=an((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Dl(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function E6(t,e){var d,p,g,v;const n=Gc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Wx(t,e),l=an((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Dl(l,e)}function Qx(t,e){const n=gt(t,e==null?void 0:e.in),i=+Dl(n,e)-+E6(n,e);return Math.round(i/Ux)+1}function ht(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Hs={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ht(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ht(n+1,2)},d(t,e){return ht(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ht(t.getHours()%12||12,e.length)},H(t,e){return ht(t.getHours(),e.length)},m(t,e){return ht(t.getMinutes(),e.length)},s(t,e){return ht(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ht(a,e.length)}},al={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Qb={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Hs.y(t,e)},Y:function(t,e,n,i){const a=Wx(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ht(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ht(l,e.length)},R:function(t,e){const n=zx(t);return ht(n,e.length)},u:function(t,e){const n=t.getFullYear();return ht(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ht(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ht(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Hs.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ht(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Qx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ht(a,e.length)},I:function(t,e,n){const i=Yx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ht(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Hs.d(t,e)},D:function(t,e,n){const i=v6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ht(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ht(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ht(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ht(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=al.noon:i===0?a=al.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=al.evening:i>=12?a=al.afternoon:i>=4?a=al.morning:a=al.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Hs.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Hs.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Hs.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Hs.s(t,e)},S:function(t,e){return Hs.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Xb(i);case"XXXX":case"XX":return Qa(i);case"XXXXX":case"XXX":default:return Qa(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Xb(i);case"xxxx":case"xx":return Qa(i);case"xxxxx":case"xxx":default:return Qa(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Kb(i,":");case"OOOO":default:return"GMT"+Qa(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Kb(i,":");case"zzzz":default:return"GMT"+Qa(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ht(i,e.length)},T:function(t,e,n){return ht(+t,e.length)}};function Kb(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ht(l,2)}function Xb(t,e){return t%60===0?(t>0?"-":"+")+ht(Math.abs(t)/60,2):Qa(t,e)}function Qa(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ht(Math.trunc(i/60),2),l=ht(i%60,2);return n+a+e+l}const Zb=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Kx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},w6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Zb(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Zb(i,e)).replace("{{time}}",Kx(a,e))},b6={p:Kx,P:w6},T6=/^D+$/,S6=/^Y+$/,x6=["D","DD","YY","YYYY"];function A6(t){return T6.test(t)}function R6(t){return S6.test(t)}function C6(t,e,n){const i=I6(t,e,n);if(console.warn(i),x6.includes(t))throw new RangeError(i)}function I6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const D6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,k6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,O6=/^'([^]*?)'?$/,M6=/''/g,N6=/[a-zA-Z]/;function P6(t,e,n){var v,w,T,C,O,B,M,F;const i=Gc(),a=(n==null?void 0:n.locale)??i.locale??x_,l=(n==null?void 0:n.firstWeekContainsDate)??((w=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((C=(T=i.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((B=(O=n==null?void 0:n.locale)==null?void 0:O.options)==null?void 0:B.weekStartsOn)??i.weekStartsOn??((F=(M=i.locale)==null?void 0:M.options)==null?void 0:F.weekStartsOn)??0,d=gt(t,n==null?void 0:n.in);if(!MV(d))throw new RangeError("Invalid time value");let p=e.match(k6).map($=>{const P=$[0];if(P==="p"||P==="P"){const H=b6[P];return H($,a.formatLong)}return $}).join("").match(D6).map($=>{if($==="''")return{isToken:!1,value:"'"};const P=$[0];if(P==="'")return{isToken:!1,value:V6($)};if(Qb[P])return{isToken:!0,value:$};if(P.match(N6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:$}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map($=>{if(!$.isToken)return $.value;const P=$.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&R6(P)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&A6(P))&&C6(P,e,String(t));const H=Qb[P[0]];return H(d,P,a.localize,g)}).join("")}function V6(t){const e=t.match(O6);return e?e[1].replace(M6,"'"):t}function j6(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=an(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function L6(t,e){return gt(t,e==null?void 0:e.in).getMonth()}function U6(t,e){return gt(t,e==null?void 0:e.in).getFullYear()}function q6(t,e){return+gt(t)>+gt(e)}function B6(t,e){return+gt(t)<+gt(e)}function z6(t,e,n){const[i,a]=Fl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function F6(t,e,n){const[i,a]=Fl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function $6(t,e,n){const i=gt(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=an(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=j6(c);return i.setMonth(e,Math.min(l,d)),i}function H6(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(+i)?an(t,NaN):(i.setFullYear(e),i)}const Jb=5,G6=4;function Y6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,Jb*7-1);return e.getMonth(t)===e.getMonth(l)?Jb:G6}function Xx(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function W6(t,e){const n=Xx(t,e),i=Y6(t,e);return e.addDays(n,i*7-1)}class ps{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?On.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new On(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):qx(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):Bx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):CV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):IV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):Fx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):NV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):jV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):W6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):qV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):PV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Gx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):UV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):P6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Yx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):L6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):U6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Qx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):q6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):B6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):$x(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):OV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):z6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):F6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):DV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):kV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):$6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):H6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):Xx(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Ic(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Cc(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):LV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Dl(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):Hx(i)},this.options={locale:x_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const bi=new ps;class Zx{constructor(e,n,i=bi){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class Q6{constructor(e,n){this.date=e,this.weeks=n}}class K6{constructor(e,n){this.days=n,this.weekNumber=e}}function X6(t){return me.createElement("button",{...t})}function Z6(t){return me.createElement("span",{...t})}function J6(t){const{size:e=24,orientation:n="left",className:i}=t;return me.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&me.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&me.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&me.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&me.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function ej(t){const{day:e,modifiers:n,...i}=t;return me.createElement("td",{...i})}function tj(t){const{day:e,modifiers:n,...i}=t,a=me.useRef(null);return me.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),me.createElement("button",{ref:a,...i})}var xe;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(xe||(xe={}));var kt;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(kt||(kt={}));var jr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(jr||(jr={}));var ar;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(ar||(ar={}));function nj(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[xe.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return me.createElement("span",{"data-disabled":l.disabled,className:a[xe.DropdownRoot]},me.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>me.createElement(i.Option,{key:p,value:p,disabled:v},g))),me.createElement("span",{className:a[xe.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,me.createElement(i.Chevron,{orientation:"down",size:18,className:a[xe.Chevron]})))}function rj(t){return me.createElement("div",{...t})}function ij(t){return me.createElement("div",{...t})}function sj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i},t.children)}function aj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i})}function oj(t){return me.createElement("table",{...t})}function lj(t){return me.createElement("div",{...t})}const Jx=q.createContext(void 0);function Yc(){const t=q.useContext(Jx);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function uj(t){const{components:e}=Yc();return me.createElement(e.Dropdown,{...t})}function cj(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Yc(),v=q.useCallback(T=>{a&&(n==null||n(T))},[a,n]),w=q.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return me.createElement("nav",{...l},me.createElement(c.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:w},me.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[xe.Chevron],orientation:"left"})),me.createElement(c.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},me.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[xe.Chevron]})))}function hj(t){const{components:e}=Yc();return me.createElement(e.Button,{...t})}function fj(t){return me.createElement("option",{...t})}function dj(t){const{components:e}=Yc();return me.createElement(e.Button,{...t})}function pj(t){const{rootRef:e,...n}=t;return me.createElement("div",{...n,ref:e})}function mj(t){return me.createElement("select",{...t})}function gj(t){const{week:e,...n}=t;return me.createElement("tr",{...n})}function yj(t){return me.createElement("th",{...t})}function _j(t){return me.createElement("thead",{"aria-hidden":!0},me.createElement("tr",{...t}))}function vj(t){const{week:e,...n}=t;return me.createElement("th",{...n})}function Ej(t){return me.createElement("th",{...t})}function wj(t){return me.createElement("tbody",{...t})}function bj(t){const{components:e}=Yc();return me.createElement(e.Dropdown,{...t})}const Tj=Object.freeze(Object.defineProperty({__proto__:null,Button:X6,CaptionLabel:Z6,Chevron:J6,Day:ej,DayButton:tj,Dropdown:nj,DropdownNav:rj,Footer:ij,Month:sj,MonthCaption:aj,MonthGrid:oj,Months:lj,MonthsDropdown:uj,Nav:cj,NextMonthButton:hj,Option:fj,PreviousMonthButton:dj,Root:pj,Select:mj,Week:gj,WeekNumber:vj,WeekNumberHeader:Ej,Weekday:yj,Weekdays:_j,Weeks:wj,YearsDropdown:bj},Symbol.toStringTag,{value:"Module"}));function ns(t,e,n=!1,i=bi){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function eA(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function A_(t){return!!(t&&typeof t=="object"&&"from"in t)}function tA(t){return!!(t&&typeof t=="object"&&"after"in t)}function nA(t){return!!(t&&typeof t=="object"&&"before"in t)}function rA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function iA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function rs(t,e,n=bi){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(iA(d,n))return d.includes(t);if(A_(d))return ns(d,t,!1,n);if(rA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(eA(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,w=g<0;return c(d.before,d.after)?w&&v:v||w}return tA(d)?l(t,d.after)>0:nA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function Sj(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:w,isSameMonth:T,startOfMonth:C,isBefore:O,endOfMonth:B,isAfter:M}=a,F=n&&C(n),$=i&&B(i),P={[kt.focused]:[],[kt.outside]:[],[kt.disabled]:[],[kt.hidden]:[],[kt.today]:[]},H={};for(const N of t){const{date:Z,displayMonth:R}=N,A=!!(R&&!T(Z,R)),I=!!(F&&O(Z,F)),L=!!($&&M(Z,$)),k=!!(l&&rs(Z,l,a)),U=!!(c&&rs(Z,c,a))||I||L||!g&&!p&&A||g&&p===!1&&A,D=w(Z,v??a.today());A&&P.outside.push(N),k&&P.disabled.push(N),U&&P.hidden.push(N),D&&P.today.push(N),d&&Object.keys(d).forEach(Ne=>{const oe=d==null?void 0:d[Ne];oe&&rs(Z,oe,a)&&(H[Ne]?H[Ne].push(N):H[Ne]=[N])})}return N=>{const Z={[kt.focused]:!1,[kt.disabled]:!1,[kt.hidden]:!1,[kt.outside]:!1,[kt.today]:!1},R={};for(const A in P){const I=P[A];Z[A]=I.some(L=>L===N)}for(const A in H)R[A]=H[A].some(I=>I===N);return{...Z,...R}}}function xj(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[kt[l]]?a.push(e[kt[l]]):e[jr[l]]&&a.push(e[jr[l]]),a),[e[xe.Day]])}function Aj(t){return{...Tj,...t}}function Rj(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function Cj(){const t={};for(const e in xe)t[xe[e]]=`rdp-${xe[e]}`;for(const e in kt)t[kt[e]]=`rdp-${kt[e]}`;for(const e in jr)t[jr[e]]=`rdp-${jr[e]}`;for(const e in ar)t[ar[e]]=`rdp-${ar[e]}`;return t}function sA(t,e,n){return(n??new ps(e)).format(t,"LLLL y")}const Ij=sA;function Dj(t,e,n){return(n??new ps(e)).format(t,"d")}function kj(t,e=bi){return e.format(t,"LLLL")}function Oj(t,e,n){return(n??new ps(e)).format(t,"cccccc")}function Mj(t,e=bi){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function Nj(){return""}function aA(t,e=bi){return e.format(t,"yyyy")}const Pj=aA,Vj=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:sA,formatDay:Dj,formatMonthCaption:Ij,formatMonthDropdown:kj,formatWeekNumber:Mj,formatWeekNumberHeader:Nj,formatWeekdayName:Oj,formatYearCaption:Pj,formatYearDropdown:aA},Symbol.toStringTag,{value:"Module"}));function jj(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...Vj,...t}}function Lj(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const C=i.formatMonthDropdown(T,a),O=g(T),B=e&&T<l(e)||n&&T>l(n)||!1;return{value:O,label:C,disabled:B}})}function Uj(t,e={},n={}){let i={...e==null?void 0:e[xe.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function qj(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function Bj(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,w=l(t),T=c(e),C=[];let O=w;for(;g(O,T)||v(O,T);)C.push(O),O=d(O,1);return a&&C.reverse(),C.map(B=>{const M=n.formatYearDropdown(B,i);return{value:p(B),label:M,disabled:!1}})}function oA(t,e,n,i){let a=(i??new ps(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const zj=oA;function lA(t,e,n){return(n??new ps(e)).format(t,"LLLL y")}const Fj=lA;function $j(t,e,n,i){let a=(i??new ps(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function Hj(t){return"Choose the Month"}function Gj(){return""}function Yj(t){return"Go to the Next Month"}function Wj(t){return"Go to the Previous Month"}function Qj(t,e,n){return(n??new ps(e)).format(t,"cccc")}function Kj(t,e){return`Week ${t}`}function Xj(t){return"Week Number"}function Zj(t){return"Choose the Year"}const Jj=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Fj,labelDay:zj,labelDayButton:oA,labelGrid:lA,labelGridcell:$j,labelMonthDropdown:Hj,labelNav:Gj,labelNext:Yj,labelPrevious:Wj,labelWeekNumber:Kj,labelWeekNumberHeader:Xj,labelWeekday:Qj,labelYearDropdown:Zj},Symbol.toStringTag,{value:"Module"})),Wc=t=>t instanceof HTMLElement?t:null,Tg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],eL=t=>Wc(t.querySelector("[data-animated-month]")),Sg=t=>Wc(t.querySelector("[data-animated-caption]")),xg=t=>Wc(t.querySelector("[data-animated-weeks]")),tL=t=>Wc(t.querySelector("[data-animated-nav]")),nL=t=>Wc(t.querySelector("[data-animated-weekdays]"));function rL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=q.useRef(null),d=q.useRef(i),p=q.useRef(!1);q.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),w=l.isAfter(i[0].date,g[0].date),T=w?n[ar.caption_after_enter]:n[ar.caption_before_enter],C=w?n[ar.weeks_after_enter]:n[ar.weeks_before_enter],O=c.current,B=t.current.cloneNode(!0);if(B instanceof HTMLElement?(Tg(B).forEach(P=>{if(!(P instanceof HTMLElement))return;const H=eL(P);H&&P.contains(H)&&P.removeChild(H);const N=Sg(P);N&&N.classList.remove(T);const Z=xg(P);Z&&Z.classList.remove(C)}),c.current=B):c.current=null,p.current||v||a)return;const M=O instanceof HTMLElement?Tg(O):[],F=Tg(t.current);if(F!=null&&F.every($=>$ instanceof HTMLElement)&&M&&M.every($=>$ instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const $=tL(t.current);$&&($.style.zIndex="1"),F.forEach((P,H)=>{const N=M[H];if(!N)return;P.style.position="relative",P.style.overflow="hidden";const Z=Sg(P);Z&&Z.classList.add(T);const R=xg(P);R&&R.classList.add(C);const A=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),$&&($.style.zIndex=""),Z&&Z.classList.remove(T),R&&R.classList.remove(C),P.style.position="",P.style.overflow="",P.contains(N)&&P.removeChild(N)};N.style.pointerEvents="none",N.style.position="absolute",N.style.overflow="hidden",N.setAttribute("aria-hidden","true");const I=nL(N);I&&(I.style.opacity="0");const L=Sg(N);L&&(L.classList.add(w?n[ar.caption_before_exit]:n[ar.caption_after_exit]),L.addEventListener("animationend",A));const k=xg(N);k&&k.classList.add(w?n[ar.weeks_before_exit]:n[ar.weeks_after_exit]),P.insertBefore(N,P.firstChild)})}})}function iL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:w,endOfBroadcastWeek:T,endOfISOWeek:C,endOfMonth:O,endOfWeek:B,isAfter:M,startOfBroadcastWeek:F,startOfISOWeek:$,startOfWeek:P}=i,H=p?F(a,i):c?$(a):P(a),N=p?T(l):c?C(O(l)):B(O(l)),Z=v(N,H),R=w(l,a)+1,A=[];for(let k=0;k<=Z;k++){const U=g(H,k);if(e&&M(U,e))break;A.push(U)}const L=(p?35:42)*R;if(d&&A.length<L){const k=L-A.length;for(let U=0;U<k;U++){const D=g(A[A.length-1],1);A.push(D)}}return A}function sL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function aL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function eT(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:w}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),w(p)}function oL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:w,startOfISOWeek:T,startOfWeek:C}=i,O=t.reduce((B,M)=>{const F=n.broadcastCalendar?w(M,i):n.ISOWeek?T(M):C(M),$=n.broadcastCalendar?l(M):n.ISOWeek?c(d(M)):p(d(M)),P=e.filter(R=>R>=F&&R<=$),H=n.broadcastCalendar?35:42;if(n.fixedWeeks&&P.length<H){const R=e.filter(A=>{const I=H-P.length;return A>$&&A<=a($,I)});P.push(...R)}const N=P.reduce((R,A)=>{const I=n.ISOWeek?g(A):v(A),L=R.find(U=>U.weekNumber===I),k=new Zx(A,M,i);return L?L.days.push(k):R.push(new K6(I,[k])),R},[]),Z=new Q6(M,N);return B.push(Z),B},[]);return n.reverseMonths?O.reverse():O}function lL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:w}=e,{fromYear:T,toYear:C,fromMonth:O,toMonth:B}=t;!n&&O&&(n=O),!n&&T&&(n=e.newDate(T,0,1)),!i&&B&&(i=B),!i&&C&&(i=v(C,11,31));const M=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&M&&(n=a(p(t.today??w(),-100))),i?i=d(i):C?i=v(C,11,31):!i&&M&&(i=g(t.today??w())),[n&&l(n),i&&l(i)]}function uL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function cL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function hL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function Jd(t,e){const[n,i]=q.useState(t);return[e===void 0?n:e,i]}function fL(t,e){const[n,i]=lL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=eT(t,n,i,e),[d,p]=Jd(c,t.month?c:void 0);q.useEffect(()=>{const Z=eT(t,n,i,e);p(Z)},[t.timeZone]);const g=aL(d,i,t,e),v=iL(g,t.endMonth?l(t.endMonth):void 0,t,e),w=oL(g,v,t,e),T=hL(w),C=sL(w),O=cL(d,n,t,e),B=uL(d,i,t,e),{disableNavigation:M,onMonthChange:F}=t,$=Z=>T.some(R=>R.days.some(A=>A.isEqualTo(Z))),P=Z=>{if(M)return;let R=a(Z);n&&R<a(n)&&(R=a(n)),i&&R>a(i)&&(R=a(i)),p(R),F==null||F(R)};return{months:w,weeks:T,days:C,navStart:n,navEnd:i,previousMonth:O,nextMonth:B,goToMonth:P,goToDay:Z=>{$(Z)||P(Z.date)}}}var li;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(li||(li={}));function tT(t){return!t[kt.disabled]&&!t[kt.hidden]&&!t[kt.outside]}function dL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);tT(d)&&(d[kt.focused]&&l<li.FocusedModifier?(a=c,l=li.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<li.LastFocused?(a=c,l=li.LastFocused):n(c.date)&&l<li.Selected?(a=c,l=li.Selected):d[kt.today]&&l<li.Today&&(a=c,l=li.Today))}return a||(a=t.find(c=>tT(e(c)))),a}function pL(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:w,addYears:T,endOfBroadcastWeek:C,endOfISOWeek:O,endOfWeek:B,max:M,min:F,startOfBroadcastWeek:$,startOfISOWeek:P,startOfWeek:H}=c;let Z={day:g,week:w,month:v,year:T,startOfWeek:R=>p?$(R,c):d?P(R):H(R),endOfWeek:R=>p?C(R):d?O(R):B(R)}[t](n,e==="after"?1:-1);return e==="before"&&i?Z=M([i,Z]):e==="after"&&a&&(Z=F([a,Z])),Z}function uA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=pL(t,e,n.date,i,a,l,c),g=!!(l.disabled&&rs(p,l.disabled,c)),v=!!(l.hidden&&rs(p,l.hidden,c)),w=p,T=new Zx(p,w,c);return!g&&!v?T:uA(t,e,T,i,a,l,c,d+1)}function mL(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=q.useState(),p=dL(e.days,n,i||(()=>!1),c),[g,v]=q.useState(l?p:void 0);return{isFocusTarget:B=>!!(p!=null&&p.isEqualTo(B)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(B,M)=>{if(!g)return;const F=uA(B,M,g,e.navStart,e.navEnd,t,a);F&&(e.goToDay(F),v(F))}}}function gL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Jd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=C=>(d==null?void 0:d.some(O=>p(O,C)))??!1,{min:v,max:w}=t;return{selected:d,select:(C,O,B)=>{let M=[...d??[]];if(g(C)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;M=d==null?void 0:d.filter(F=>!p(F,C))}else(d==null?void 0:d.length)===w?M=[C]:M=[...M,C];return a||c(M),a==null||a(M,C,O,B),M},isSelected:g}}function yL(t,e,n=0,i=0,a=!1,l=bi){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let w;if(!c&&!d)w={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?w={from:c,to:t}:a?w={from:c,to:void 0}:w=void 0:v(t,c)?w={from:t,to:c}:w={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?w={from:c,to:d}:w=void 0;else if(p(c,t))w={from:c,to:n>0?void 0:t};else if(p(d,t))w={from:t,to:n>0?void 0:t};else if(v(t,c))w={from:t,to:d};else if(g(t,c))w={from:c,to:t};else if(g(t,d))w={from:c,to:t};else throw new Error("Invalid range");if(w!=null&&w.from&&(w!=null&&w.to)){const T=l.differenceInCalendarDays(w.to,w.from);i>0&&T>i?w={from:t,to:void 0}:n>1&&T<n&&(w={from:t,to:void 0})}return w}function _L(t,e,n=bi){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function nT(t,e,n=bi){return ns(t,e.from,!1,n)||ns(t,e.to,!1,n)||ns(e,t.from,!1,n)||ns(e,t.to,!1,n)}function vL(t,e,n=bi){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?ns(t,d,!1,n):iA(d,n)?d.some(p=>ns(t,p,!1,n)):A_(d)?d.from&&d.to?nT(t,{from:d.from,to:d.to},n):!1:rA(d)?_L(t,d.dayOfWeek,n):eA(d)?n.isAfter(d.before,d.after)?nT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):rs(t.from,d,n)||rs(t.to,d,n):tA(d)||nA(d)?rs(t.from,d,n)||rs(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function EL(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=Jd(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,C,O)=>{const{min:B,max:M}=t,F=T?yL(T,g,B,M,l,e):void 0;return i&&n&&(F!=null&&F.from)&&F.to&&vL({from:F.from,to:F.to},n,e)&&(F.from=T,F.to=void 0),c||p(F),c==null||c(F,T,C,O),F},isSelected:T=>g&&ns(g,T,!1,e)}}function wL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Jd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(w,T,C)=>{let O=w;return!i&&d&&d&&p(w,d)&&(O=void 0),a||c(O),a==null||a(O,w,T,C),O},isSelected:w=>d?p(d,w):!1}}function bL(t,e){const n=wL(t,e),i=gL(t,e),a=EL(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function TL(t){var ms;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new On(e.today,e.timeZone)),e.month&&(e.month=new On(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new On(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new On(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new On(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new On(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(ms=e.selected)==null?void 0:ms.map(Le=>new On(Le,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new On(e.selected.from,e.timeZone):void 0,to:e.selected.to?new On(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=q.useMemo(()=>{const Le={...x_,...e.locale};return{dateLib:new ps({locale:Le,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Aj(e.components),formatters:jj(e.formatters),labels:{...Jj,...e.labels},locale:Le,classNames:{...Cj(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:w=1,onDayBlur:T,onDayClick:C,onDayFocus:O,onDayKeyDown:B,onDayMouseEnter:M,onDayMouseLeave:F,onNextClick:$,onPrevClick:P,showWeekNumber:H,styles:N}=e,{formatCaption:Z,formatDay:R,formatMonthDropdown:A,formatWeekNumber:I,formatWeekNumberHeader:L,formatWeekdayName:k,formatYearDropdown:U}=i,D=fL(e,l),{days:Ne,months:oe,navStart:W,navEnd:ae,previousMonth:fe,nextMonth:_e,goToMonth:j}=D,ne=Sj(Ne,e,W,ae,l),{isSelected:he,select:ce,selected:ve}=bL(e,l)??{},{blur:Ie,focused:be,isFocusTarget:yt,moveFocus:$e,setFocused:Tt}=mL(e,D,ne,he??(()=>!1),l),{labelDayButton:Cn,labelGridcell:de,labelGrid:Te,labelMonthDropdown:we,labelNav:Pe,labelPrevious:it,labelNext:Wn,labelWeekday:Vt,labelWeekNumber:$r,labelWeekNumberHeader:Qn,labelYearDropdown:ur}=a,Ti=q.useMemo(()=>qj(l,e.ISOWeek),[l,e.ISOWeek]),po=g!==void 0||C!==void 0,Hr=q.useCallback(()=>{fe&&(j(fe),P==null||P(fe))},[fe,j,P]),Si=q.useCallback(()=>{_e&&(j(_e),$==null||$(_e))},[j,_e,$]),mo=q.useCallback((Le,st)=>De=>{De.preventDefault(),De.stopPropagation(),Tt(Le),ce==null||ce(Le.date,st,De),C==null||C(Le.date,st,De)},[ce,C,Tt]),xt=q.useCallback((Le,st)=>De=>{Tt(Le),O==null||O(Le.date,st,De)},[O,Tt]),nt=q.useCallback((Le,st)=>De=>{Ie(),T==null||T(Le.date,st,De)},[Ie,T]),Vn=q.useCallback((Le,st)=>De=>{const et={ArrowLeft:[De.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[De.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[De.shiftKey?"year":"week","after"],ArrowUp:[De.shiftKey?"year":"week","before"],PageUp:[De.shiftKey?"year":"month","before"],PageDown:[De.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(et[De.key]){De.preventDefault(),De.stopPropagation();const[ln,Ue]=et[De.key];$e(ln,Ue)}B==null||B(Le.date,st,De)},[$e,B,e.dir]),on=q.useCallback((Le,st)=>De=>{M==null||M(Le.date,st,De)},[M]),go=q.useCallback((Le,st)=>De=>{F==null||F(Le.date,st,De)},[F]),$l=q.useCallback(Le=>st=>{const De=Number(st.target.value),et=l.setMonth(l.startOfMonth(Le),De);j(et)},[l,j]),xi=q.useCallback(Le=>st=>{const De=Number(st.target.value),et=l.setYear(l.startOfMonth(Le),De);j(et)},[l,j]),{className:Ai,style:Ri}=q.useMemo(()=>({className:[d[xe.Root],e.className].filter(Boolean).join(" "),style:{...N==null?void 0:N[xe.Root],...e.style}}),[d,e.className,e.style,N]),Kn=Rj(e),Ci=q.useRef(null);rL(Ci,!!e.animate,{classNames:d,months:oe,focused:be,dateLib:l});const Ii={dayPickerProps:e,selected:ve,select:ce,isSelected:he,months:oe,nextMonth:_e,previousMonth:fe,goToMonth:j,getModifiers:ne,components:n,classNames:d,styles:N,labels:a,formatters:i};return me.createElement(Jx.Provider,{value:Ii},me.createElement(n.Root,{rootRef:e.animate?Ci:void 0,className:Ai,style:Ri,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Kn},me.createElement(n.Months,{className:d[xe.Months],style:N==null?void 0:N[xe.Months]},!e.hideNavigation&&!v&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:N==null?void 0:N[xe.Nav],"aria-label":Pe(),onPreviousClick:Hr,onNextClick:Si,previousMonth:fe,nextMonth:_e}),oe.map((Le,st)=>me.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[xe.Month],style:N==null?void 0:N[xe.Month],key:st,displayIndex:st,calendarMonth:Le},v==="around"&&!e.hideNavigation&&st===0&&me.createElement(n.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:fe?void 0:-1,"aria-disabled":fe?void 0:!0,"aria-label":it(fe),onClick:Hr,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:fe?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"right":"left"})),me.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[xe.MonthCaption],style:N==null?void 0:N[xe.MonthCaption],calendarMonth:Le,displayIndex:st},p!=null&&p.startsWith("dropdown")?me.createElement(n.DropdownNav,{className:d[xe.Dropdowns],style:N==null?void 0:N[xe.Dropdowns]},p==="dropdown"||p==="dropdown-months"?me.createElement(n.MonthsDropdown,{className:d[xe.MonthsDropdown],"aria-label":we(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:$l(Le.date),options:Lj(Le.date,W,ae,i,l),style:N==null?void 0:N[xe.Dropdown],value:l.getMonth(Le.date)}):me.createElement("span",null,A(Le.date,l)),p==="dropdown"||p==="dropdown-years"?me.createElement(n.YearsDropdown,{className:d[xe.YearsDropdown],"aria-label":ur(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:xi(Le.date),options:Bj(W,ae,i,l,!!e.reverseYears),style:N==null?void 0:N[xe.Dropdown],value:l.getYear(Le.date)}):me.createElement("span",null,U(Le.date,l)),me.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},Z(Le.date,l.options,l))):me.createElement(n.CaptionLabel,{className:d[xe.CaptionLabel],role:"status","aria-live":"polite"},Z(Le.date,l.options,l))),v==="around"&&!e.hideNavigation&&st===w-1&&me.createElement(n.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:_e?void 0:-1,"aria-disabled":_e?void 0:!0,"aria-label":Wn(_e),onClick:Si,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:_e?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"left":"right"})),st===w-1&&v==="after"&&!e.hideNavigation&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:N==null?void 0:N[xe.Nav],"aria-label":Pe(),onPreviousClick:Hr,onNextClick:Si,previousMonth:fe,nextMonth:_e}),me.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Te(Le.date,l.options,l)||void 0,className:d[xe.MonthGrid],style:N==null?void 0:N[xe.MonthGrid]},!e.hideWeekdays&&me.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[xe.Weekdays],style:N==null?void 0:N[xe.Weekdays]},H&&me.createElement(n.WeekNumberHeader,{"aria-label":Qn(l.options),className:d[xe.WeekNumberHeader],style:N==null?void 0:N[xe.WeekNumberHeader],scope:"col"},L()),Ti.map(De=>me.createElement(n.Weekday,{"aria-label":Vt(De,l.options,l),className:d[xe.Weekday],key:String(De),style:N==null?void 0:N[xe.Weekday],scope:"col"},k(De,l.options,l)))),me.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[xe.Weeks],style:N==null?void 0:N[xe.Weeks]},Le.weeks.map(De=>me.createElement(n.Week,{className:d[xe.Week],key:De.weekNumber,style:N==null?void 0:N[xe.Week],week:De},H&&me.createElement(n.WeekNumber,{week:De,style:N==null?void 0:N[xe.WeekNumber],"aria-label":$r(De.weekNumber,{locale:c}),className:d[xe.WeekNumber],scope:"row",role:"rowheader"},I(De.weekNumber,l)),De.days.map(et=>{const{date:ln}=et,Ue=ne(et);if(Ue[kt.focused]=!Ue.hidden&&!!(be!=null&&be.isEqualTo(et)),Ue[jr.selected]=(he==null?void 0:he(ln))||Ue.selected,A_(ve)){const{from:cr,to:ys}=ve;Ue[jr.range_start]=!!(cr&&ys&&l.isSameDay(ln,cr)),Ue[jr.range_end]=!!(cr&&ys&&l.isSameDay(ln,ys)),Ue[jr.range_middle]=ns(ve,ln,!0,l)}const _a=Uj(Ue,N,e.modifiersStyles),Gr=xj(Ue,d,e.modifiersClassNames),gs=!po&&!Ue.hidden?de(ln,Ue,l.options,l):void 0;return me.createElement(n.Day,{key:`${l.format(ln,"yyyy-MM-dd")}_${l.format(et.displayMonth,"yyyy-MM")}`,day:et,modifiers:Ue,className:Gr.join(" "),style:_a,role:"gridcell","aria-selected":Ue.selected||void 0,"aria-label":gs,"data-day":l.format(ln,"yyyy-MM-dd"),"data-month":et.outside?l.format(ln,"yyyy-MM"):void 0,"data-selected":Ue.selected||void 0,"data-disabled":Ue.disabled||void 0,"data-hidden":Ue.hidden||void 0,"data-outside":et.outside||void 0,"data-focused":Ue.focused||void 0,"data-today":Ue.today||void 0},!Ue.hidden&&po?me.createElement(n.DayButton,{className:d[xe.DayButton],style:N==null?void 0:N[xe.DayButton],type:"button",day:et,modifiers:Ue,disabled:Ue.disabled||void 0,tabIndex:yt(et)?0:-1,"aria-label":Cn(ln,Ue,l.options,l),onClick:mo(et,Ue),onBlur:nt(et,Ue),onFocus:xt(et,Ue),onKeyDown:Vn(et,Ue),onMouseEnter:on(et,Ue),onMouseLeave:go(et,Ue)},R(ln,l.options,l)):!Ue.hidden&&R(et.date,l.options,l))})))))))),e.footer&&me.createElement(n.Footer,{className:d[xe.Footer],style:N==null?void 0:N[xe.Footer],role:"status","aria-live":"polite"},e.footer)))}const SL="./assets/calendar-arrow-BfXL-r2k.png";function xL({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var B;const[a,l]=q.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=q.useState(((B=t==null?void 0:t.start)==null?void 0:B.getFullYear())??new Date().getFullYear()),[p,g]=q.useState(!1),v=q.useMemo(()=>{const M=F=>`${F.getFullYear()}.${String(F.getMonth()+1).padStart(2,"0")}.${String(F.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${M(a.start)} ~ ${M(a.end)}`:a.start?`${M(a.start)} ~`:""},[a]),w=new Date().getMonth(),T=q.useRef(null);q.useEffect(()=>{if(p&&T.current){const M=T.current.querySelectorAll(".month-box")[w];M&&M.scrollIntoView({block:"start"})}},[p]);const C=q.useRef(null);q.useEffect(()=>{const M=F=>{C.current&&!C.current.contains(F.target)&&g(!1)};return p&&document.addEventListener("click",M),()=>{document.removeEventListener("click",M)}},[p]),q.useEffect(()=>{const M=P=>P instanceof Date?new Date(P.getFullYear(),P.getMonth(),P.getDate()).getTime():null,F=(t==null?void 0:t.start)??null,$=(t==null?void 0:t.end)??null;(M(a.start)!==M(F)||M(a.end)!==M($))&&(l({start:F,end:$}),d((F==null?void 0:F.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const O=M=>{if(!a.start||a.start&&a.end){l({start:M,end:null});return}if(a.start&&!a.end)if(M<a.start)l({start:M,end:null});else{const F={start:a.start,end:M};l(F),e==null||e(F),i&&g(!1)}};return _.jsxs(AL,{ref:C,children:[_.jsx(jL,{}),_.jsx(RL,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(M=>!M)}),p&&_.jsxs(IL,{children:[_.jsxs(DL,{children:[_.jsx(kL,{dir:"prev",onClick:()=>d(M=>M-1)}),_.jsx("span",{children:c}),_.jsx(OL,{dir:"next",onClick:()=>d(M=>M+1)})]}),_.jsx(ML,{children:["일","월","화","수","목","금","토"].map(M=>_.jsx("span",{children:M},M))}),_.jsx(CL,{children:_.jsx(NL,{ref:T,children:Array.from({length:12}).map((M,F)=>{const $=new Date(c,F,1),P=N=>new Date(N.getFullYear(),N.getMonth(),N.getDate()).getTime(),H=N=>N.getFullYear()===$.getFullYear()&&N.getMonth()===$.getMonth();return _.jsxs(PL,{className:"month-box",children:[_.jsx(VL,{children:String(F+1).padStart(2,"0")}),_.jsx(TL,{mode:"single",month:$,selected:void 0,onDayClick:O,showOutsideDays:!1,modifiers:{start:N=>!!a.start&&H(N)&&P(N)===P(a.start),end:N=>!!a.end&&H(N)&&P(N)===P(a.end),middle:N=>{if(!a.start||!a.end||!H(N))return!1;const Z=P(N),R=P(a.start),A=P(a.end);return Z>R&&Z<A}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},F)})})})]})]})}const AL=G.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,RL=G.input`
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
`,CL=G.div`
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
`,IL=G.div`
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
`,DL=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,cA=G.button`
  width: 48px;
  height: 100%;
  background-image: url(${SL});
  background-repeat: no-repeat;
`,kL=G(cA)``,OL=G(cA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,ML=G.div`
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
`,NL=G.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,PL=G.div`
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
`,VL=G.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,jL=a1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,yl="진행 상태 선택",Ku="요청자 선택",Xu="디자이너 선택",Ag={start:null,end:null},LL=t=>t===3?"manager":t===2?"designer":"requester",UL={requester:[yl,"대기","진행중","검수중","완료","취소"],manager:[yl,"대기","진행중","검수중","검수요청","완료","취소"],designer:[yl,"대기","진행중","검수요청","완료","취소"]},qL=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function BL({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=q.useState(Ag),[v,w]=q.useState(yl),[T,C]=q.useState(Ku),[O,B]=q.useState(Xu),M=()=>{w(yl),g(Ag),C(Ku),B(Xu),t(yl),e(Ag),a==null||a(Ku),c==null||c(Xu)},F=LL(d),$=UL[F];return _.jsxs(zL,{children:[_.jsx(xL,{value:p,onApply:P=>{g(P),e(P)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(Rg,{"aria-label":"요청자 선택",value:T,onChange:P=>{C(P.target.value),a==null||a(P.target.value)},children:[_.jsx("option",{value:Ku,children:Ku}),i.map(P=>_.jsx("option",{value:P,children:P},P))]}),_.jsxs(Rg,{"aria-label":"디자이너 선택",value:O,onChange:P=>{const H=P.target.value;B(H),c==null||c(H)},children:[_.jsx("option",{value:Xu,children:Xu}),l.map(P=>_.jsx("option",{value:P,children:P},P))]})]}),_.jsx(Rg,{value:v,onChange:P=>{const H=P.target.value,N=qL(F,H);w(H),t(N)},children:$.map(P=>_.jsx("option",{value:P,children:P},P))}),_.jsx(FL,{type:"button",onClick:M,children:"필터 초기화"})]})}const zL=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Rg=G.select`
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
  background-image: url(${jx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,FL=G.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,$L="./assets/search-icon-g0O6fOpZ.svg";function HL({keyword:t,onKeywordChange:e,onSearch:n}){const i=a=>{e(a),n(a.trim())};return _.jsx(GL,{children:_.jsx(YL,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>i(a.target.value),onKeyDown:a=>{a.key==="Escape"&&i("")}})})}const GL=G.div`
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
    background: url(${$L}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`,YL=G.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;function R_({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g,roleNumber:v}){return _.jsxs(WL,{children:[_.jsx(BL,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g,roleNumber:v}),_.jsx(HL,{keyword:i,onKeywordChange:a,onSearch:n})]})}const WL=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`,QL=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],KL=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return QL[i]}return e}).join("");function C_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=KL(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function I_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const XL="진행 상태 선택";function ZL({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=q.useState(""),[l,c]=q.useState([]),[d,p]=q.useState("진행 상태 선택"),[g,v]=q.useState({start:null,end:null}),[w,T]=q.useState(""),[C,O]=q.useState("");q.useEffect(()=>{const k=Lc(fa,U=>{U&&U.displayName&&a(U.displayName)});return()=>k()},[]),q.useEffect(()=>{if(!i)return;const k=fi(Ar(wt,"design_request"),Rr("requester","==",i),v_("design_request_id","desc")),U=Zd(k,D=>{const Ne=D.docs.map(oe=>({id:oe.id,...oe.data()}));c(Ne)});return()=>U()},[i]);const B=k=>v(k),M=k=>p(k),F=k=>O(k),$=k=>k==="검수요청"?"진행중":k,P=k=>new Date(k.getFullYear(),k.getMonth(),k.getDate()),H=k=>{if(!k)return null;if(typeof k=="object"&&typeof k.toDate=="function")return P(k.toDate());if(k instanceof Date)return P(k);if(typeof k=="number")return P(new Date(k));if(typeof k=="string"){const D=k.replace(/\./g,"-").replace(/\//g,"-").split("-");if(D.length===3){const[oe,W,ae]=D.map(Number),fe=oe>31?oe:new Date().getFullYear();return new Date(fe,W-1,ae)}if(D.length===2){const[oe,W]=D.map(Number),ae=new Date().getFullYear();return new Date(ae,oe-1,W)}const Ne=new Date(k);return isNaN(+Ne)?null:P(Ne)}return null},N=q.useMemo(()=>l.map(k=>{const U=$(k.status);return C_({...k,displayStatus:U})}),[l]),Z=q.useMemo(()=>{const k=g.start?P(g.start):null,U=g.end?P(g.end):null,D=C.trim();return N.filter(Ne=>{if(d!==XL&&Ne.displayStatus!==d)return!1;if(k&&U){const oe=H(Ne.request_date)||H(Ne.requested_at)||H(Ne.requestDate);if(!oe||oe<k||oe>U)return!1}return!!I_(Ne,D)})},[N,d,g,C]),R=async k=>{await hi(zn(wt,"design_request",k),{status:"완료",requester_review_status:"검수완료"}),c(U=>U.map(D=>D.id===k?{...D,status:"완료",requester_review_status:"검수완료"}:D)),alert("완료 처리되었습니다.")},A=async k=>{const U=zn(wt,"design_request",k);await hi(U,{requester_edit_state:!0});const D=await Xd(U);if(D.exists()){const Ne={id:D.id,...D.data()};e(Ne),t(!0)}},I=k=>{n(k),t(!0)},L=async k=>{await hi(zn(wt,"design_request",k),{status:"취소"}),c(U=>U.map(D=>D.id===k?{...D,status:"취소"}:D))};return _.jsxs(_.Fragment,{children:[_.jsx(S_,{}),_.jsxs(JL,{children:[_.jsx(R_,{roleNumber:1,onApplyStatus:M,onApplyRange:B,onSearch:F,keyword:w,onKeywordChange:T}),_.jsx(gV,{data:Z,onReviewComplete:R,onCancel:L,onEditClick:A,onDetailClick:I})]})]})}const JL=G.div`
  padding: 0 48px;
`;function e3({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=w=>{if(!w)return"-";if(w.toDate){const T=w.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return w},d=w=>w==="검수중"?"검수요청":w??"대기",p=w=>w,g=d(n.status),v=w=>{w.stopPropagation(),l(e)};return _.jsxs(t3,{isCanceled:e.status==="취소",children:[_.jsx(Nr,{children:t}),_.jsx(Nr,{children:_.jsx(o3,{onClick:v,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Nr,{children:e.company}),_.jsx(Nr,{children:c(e.request_date)}),_.jsx(n3,{children:c(e.completion_dt)}),_.jsx(r3,{children:c(e.open_dt)}),_.jsx(Nr,{children:e.merchandiser}),_.jsx(Nr,{children:e.requester}),_.jsx(Nr,{children:e.task_form}),_.jsx(i3,{children:e.task_type}),_.jsx(s3,{children:_.jsxs(l3,{children:[e.emergency?_.jsx(hA,{children:"긴급"}):"",_.jsx(u3,{onClick:v,children:e.requirement})]})}),_.jsx(Nr,{children:_.jsx(c3,{href:e.url,target:"_blank"})}),_.jsx(a3,{children:_.jsx(h3,{onClick:v,children:e.note||""})}),_.jsx(rT,{children:_.jsx(iT,{type:"date",value:n.start_dt??"",onChange:w=>i(e.id,"start_dt",w.target.value),disabled:e.status==="취소"})}),_.jsx(rT,{children:_.jsx(iT,{type:"date",value:n.end_dt??"",onChange:w=>i(e.id,"end_dt",w.target.value),disabled:e.status==="취소"})}),_.jsx(Nr,{children:_.jsx(f3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:w=>i(e.id,"result_url",w.target.value),disabled:e.status==="취소"})}),_.jsx(Nr,{children:_.jsxs("select",{value:g,onChange:w=>i(e.id,"status",p(w.target.value)),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]})}),_.jsx(Nr,{children:_.jsx(fA,{onClick:()=>a(e.id),disabled:e.status==="취소",children:"저장"})})]})}const t3=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${hA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${fA} {
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
`,Nr=G.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }
`,n3=G.td`
  color: ${({theme:t})=>t.colors.red};
`,r3=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,i3=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,s3=G.td`
  line-height: 15px;
  text-align: left;
`,a3=G.td`
  line-height: 15px;
  padding: 0 12px;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
  text-align: left;
  background-color: #fffff1;

`,rT=G.td`
  padding: 0 6px;
`,o3=G.span`
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
`,l3=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,hA=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,u3=G.span`
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
`,c3=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${T_}) no-repeat center / contain;
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
`,iT=G.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,f3=G.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,fA=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function d3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(p3,{children:_.jsxs(m3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"140px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(pn,{children:"번호"}),_.jsx(pn,{children:"문서번호"}),_.jsx(pn,{children:"회사"}),_.jsx(pn,{children:"요청일"}),_.jsxs(pn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(pn,{children:"오픈일"}),_.jsx(pn,{children:"담당 MD"}),_.jsx(pn,{children:"요청자"}),_.jsx(pn,{children:"업무부서"}),_.jsx(pn,{children:"업무유형"}),_.jsx(pn,{children:"작업항목"}),_.jsxs(pn,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(pn,{children:"메모"}),_.jsx(pn,{children:"디자인 시작일"}),_.jsx(pn,{children:"디자인 종료일"}),_.jsx(pn,{children:"산출물 링크"}),_.jsx(pn,{children:"진행상태"}),_.jsx(pn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(e3,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const p3=G.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,m3=G.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,pn=G.th`
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
`,g3="진행 상태 선택";function y3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=q.useState([]),[a,l]=q.useState(""),[c,d]=q.useState({}),[p,g]=q.useState("진행 상태 선택"),[v,w]=q.useState({start:null,end:null}),[T,C]=q.useState(""),[O,B]=q.useState("");q.useEffect(()=>{const oe=Lc(fa,W=>{W!=null&&W.displayName&&l(W.displayName)});return()=>oe()},[]),q.useEffect(()=>{if(!a)return;const oe=fi(Ar(wt,"design_request"),Rr("assigned_designer","==",a),v_("design_request_id","desc")),W=Zd(oe,ae=>{const fe=ae.docs.map(_e=>({id:_e.id,..._e.data()}));i(fe)});return()=>W()},[a]);const M=oe=>w(oe),F=oe=>g(oe),$=oe=>new Date(oe.getFullYear(),oe.getMonth(),oe.getDate()),P=oe=>{if(!oe)return null;if(typeof oe=="object"&&typeof oe.toDate=="function")return $(oe.toDate());if(oe instanceof Date)return $(oe);if(typeof oe=="number")return $(new Date(oe));if(typeof oe=="string"){const ae=oe.replace(/\./g,"-").replace(/\//g,"-").split("-");if(ae.length===3){const[_e,j,ne]=ae.map(Number),he=_e>31?_e:new Date().getFullYear();return new Date(he,j-1,ne)}if(ae.length===2){const[_e,j]=ae.map(Number),ne=new Date().getFullYear();return new Date(ne,_e-1,j)}const fe=new Date(oe);return isNaN(+fe)?null:$(fe)}return null},H=oe=>{const W=oe.getFullYear(),ae=String(oe.getMonth()+1).padStart(2,"0"),fe=String(oe.getDate()).padStart(2,"0");return`${W}-${ae}-${fe}`},N=oe=>{if(!oe)return"";if(typeof oe=="object"&&typeof oe.toDate=="function")return H(oe.toDate());if(oe instanceof Date)return H(oe);const W=new Date(oe);return isNaN(+W)?"":H(W)},Z=q.useMemo(()=>n.map(oe=>({...oe,designer_start_date:N(oe.designer_start_date),designer_end_date:N(oe.designer_end_date),result_url:oe.result_url??"",status:oe.status??"대기"})),[n]),R=oe=>oe==="검수중"?"검수요청":oe??"대기",A=q.useMemo(()=>Z.map(oe=>{const W=R(oe.status);return C_({...oe,displayStatus:W})}),[Z]),I=q.useMemo(()=>{const oe=v.start?$(v.start):null,W=v.end?$(v.end):null;return A.filter(ae=>{let fe=!0;if(p&&p!==g3&&R(ae.status)!==p&&(fe=!1),fe&&oe&&W){const _e=P(ae.request_date)||P(ae.requested_at)||P(ae.requestDate);(!_e||_e<oe||_e>W)&&(fe=!1)}return fe&&O&&!I_(ae,O)&&(fe=!1),fe})},[A,p,v,O]),L=oe=>B(oe);q.useEffect(()=>{n.length&&d(oe=>{const W={...oe};return n.forEach(ae=>{W[ae.id]===void 0&&(W[ae.id]={start_dt:N(ae.designer_start_date),end_dt:N(ae.designer_end_date),result_url:ae.result_url||"",status:ae.status||"대기"})}),W})},[n]);const k=(oe,W,ae)=>{d(fe=>({...fe,[oe]:{...fe[oe],[W]:ae}}))},U=oe=>{if(!oe)return null;const W=new Date(oe);return isNaN(+W)?null:vt.fromDate(W)},D=async oe=>{const W=c[oe];if(!W){alert("변경된 내용이 없습니다.");return}await hi(zn(wt,"design_request",oe),{designer_start_date:U(W.start_dt),designer_end_date:U(W.end_dt),result_url:W.result_url??"",status:W.status??"대기"}),alert("저장되었습니다.")},Ne=oe=>{e(oe),t(!0)};return _.jsxs(_3,{children:[_.jsx(S_,{}),_.jsxs(v3,{children:[_.jsx(E3,{children:"디자이너 화면"}),_.jsx(R_,{roleNumber:2,onApplyStatus:F,onApplyRange:M,onSearch:L,keyword:T,onKeywordChange:C}),_.jsx(d3,{requests:I,formData:c,onChange:k,onSave:D,onDetailClick:Ne})]})]})}const _3=G.div``,v3=G.div`
  padding: 0 48px;
`,E3=G.h2`
  margin-top: 20px;
`;function w3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d,workHourValue:p,onChangeWorkHour:g,onSaveWorkHour:v,onStartEditWorkHour:w,onCancelEditWorkHour:T}){const O=(P=>P==="검수요청"?"검수중":P==="검수중"?"검수요청":P)(e.status),B=P=>{if(!P)return"-";if(P.toDate){const H=P.toDate();return`${H.getMonth()+1}/${H.getDate()}`}return P},M=P=>{P.stopPropagation(),d(e)},F=!!e.work_hour_edit_state,$=q.useCallback(P=>{const H=P.relatedTarget;(!H||!P.currentTarget.contains(H))&&T()},[T]);return _.jsxs(b3,{isCanceled:e.status==="취소",children:[_.jsx(Bn,{children:t}),_.jsx(Bn,{children:_.jsx(C3,{onClick:M,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Bn,{children:e.company}),_.jsx(Bn,{children:B(e.request_date)}),_.jsx(T3,{children:B(e.completion_dt)}),_.jsx(S3,{children:B(e.open_dt)}),_.jsx(Bn,{children:e.merchandiser}),_.jsx(Bn,{children:e.requester}),_.jsx(Bn,{children:e.task_form}),_.jsx(x3,{children:e.task_type}),_.jsx(A3,{children:_.jsxs(I3,{children:[e.emergency?_.jsx(dA,{children:"긴급"}):"",_.jsx(D3,{onClick:M,children:e.requirement})]})}),_.jsx(Bn,{children:_.jsx(sT,{href:e.url,target:"_blank"})}),_.jsx(R3,{children:_.jsx(k3,{onClick:M,children:e.note||""})}),_.jsx(Bn,{children:_.jsx(O3,{status:O,children:O})}),_.jsx(Bn,{children:e.result_url?_.jsx(sT,{href:e.result_url,target:"_blank"}):""}),_.jsx(Bn,{children:B(e.designer_start_date)}),_.jsx(Bn,{children:B(e.designer_end_date)}),_.jsxs(Bn,{children:[_.jsxs(M3,{value:i,onChange:P=>a(P.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(P=>_.jsx("option",{value:P.name,children:P.name},P.id))]}),_.jsx(pA,{onClick:l,disabled:e.status==="취소",children:"배정"})]}),_.jsx(Bn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(mA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(N3,{children:"검수완료"}):""}),_.jsx(Bn,{children:F?_.jsxs(L3,{tabIndex:-1,onBlur:$,children:[_.jsx(P3,{type:"text",placeholder:"공수 입력",value:p,onChange:P=>g(P.target.value),onClick:P=>P.stopPropagation(),disabled:e.status==="취소",autoFocus:!0}),_.jsx(V3,{type:"button",onClick:P=>{P.stopPropagation(),v()},disabled:e.status==="취소",children:"수정"})]}):e.out_work_hour!=null?_.jsx(j3,{tabIndex:0,onClick:P=>{P.stopPropagation(),w()},onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),w())},children:e.out_work_hour}):null})]})}const b3=G.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${dA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${mA}, ${pA} {
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
`,Bn=G.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(14) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,T3=G.td`
  color: ${({theme:t})=>t.colors.red};
`,S3=G.td`
  color: ${({theme:t})=>t.colors.blue02};
`,x3=G.td`
  padding: 15px 12px;
  line-height: 15px;
`,A3=G.td`
  line-height: 15px;
  text-align: left;
`,R3=G.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,C3=G.span`
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
`,I3=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,dA=G.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,D3=G.span`
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
`,sT=G.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${T_}) no-repeat center / contain;
`,k3=G.span`
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
`,O3=G.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,pA=G.button`
  margin-left:10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,M3=G.select`
  width: 90px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,mA=G.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,N3=G.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,P3=G.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`,V3=G.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,j3=G.span`
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
`,L3=G.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function U3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c,workHours:d,onChangeWorkHour:p,onSaveWorkHour:g,onStartEditWorkHour:v,onCancelEditWorkHour:w}){return _.jsx(q3,{children:_.jsxs(B3,{children:[_.jsx(z3,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"150px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"110px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Ht,{children:"번호"}),_.jsx(Ht,{children:"문서번호"}),_.jsx(Ht,{children:"회사"}),_.jsx(Ht,{children:"요청일"}),_.jsxs(Ht,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Ht,{children:"오픈일"}),_.jsx(Ht,{children:"담당 MD"}),_.jsx(Ht,{children:"요청자"}),_.jsx(Ht,{children:"업무부서"}),_.jsx(Ht,{children:"업무형태"}),_.jsx(Ht,{children:"작업항목"}),_.jsxs(Ht,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(Ht,{children:"메모"}),_.jsx(Ht,{children:"진행상태"}),_.jsxs(Ht,{children:["산출물",_.jsx("br",{}),"URL"]}),_.jsxs(Ht,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(Ht,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(Ht,{children:"디자이너 배정"}),_.jsx(Ht,{children:"검수"}),_.jsx(Ht,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((T,C)=>_.jsx(w3,{index:C+1,item:T,designerList:e,selectedDesigner:n[T.id]||"",onDesignerSelect:O=>i(T.id,O),onAssignDesigner:()=>a(T.id),onSendToRequester:()=>l(T.id),onDetailClick:c,workHourValue:d[T.id]??"",onChangeWorkHour:O=>p(T.id,O),onSaveWorkHour:()=>g(T.id),onStartEditWorkHour:()=>v(T.id),onCancelEditWorkHour:()=>w(T.id)},T.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:20,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const q3=G.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,B3=G.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,z3=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Ht=G.th`
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
`;function F3({onClick:t,loading:e,label:n="Export CSV"}){return _.jsx($3,{type:"button",onClick:t,disabled:!!e,children:e?"추출 중…":n})}const $3=G.button`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.colors.black};
  background: ${({theme:t})=>t.colors.white01};
  font-size: 14px;
  &:disabled { opacity: 0.5; pointer-events: none; }
`,aT=t=>{if(t==null)return"";const e=String(t).replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e},H3=(t,e)=>e.split(".").reduce((n,i)=>n?n[i]:void 0,t),xf=t=>t<10?`0${t}`:`${t}`,G3=t=>{if(t==null)return"";if(typeof t=="object"&&typeof t.toDate=="function"){const e=t.toDate();return`${e.getFullYear()}-${xf(e.getMonth()+1)}-${xf(e.getDate())}`}return t instanceof Date?`${t.getFullYear()}-${xf(t.getMonth()+1)}-${xf(t.getDate())}`:String(t)};function Y3(t){const{rows:e,fields:n,filename:i="export.csv",headers:a,serialize:l=G3}=t,c=n.map(w=>aT((a==null?void 0:a[w])??w)).join(","),d=e.map(w=>{const T={id:w.id,...w};return n.map(O=>aT(l(H3(T,O)))).join(",")}),p="\uFEFF"+[c,...d].join(`\r
`),g=new Blob([p],{type:"text/csv;charset=utf-8"}),v=document.createElement("a");v.href=URL.createObjectURL(g),v.download=i,v.click(),URL.revokeObjectURL(v.href)}const oT="진행 상태 선택",lT="요청자 선택",uT="디자이너 선택";function W3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=q.useState([]),[a,l]=q.useState([]),[c,d]=q.useState({}),[p,g]=q.useState({}),[v,w]=q.useState(oT),[T,C]=q.useState({start:null,end:null}),[O,B]=q.useState(""),[M,F]=q.useState(""),[$,P]=q.useState([]),[H,N]=q.useState(lT),[Z,R]=q.useState([]),[A,I]=q.useState(uT),[L,k]=q.useState(!1);q.useEffect(()=>{const de=fi(Ar(wt,"design_request"),v_("design_request_id","desc")),Te=Zd(de,we=>{const Pe=we.docs.map(it=>({id:it.id,...it.data()}));i(Pe)});return()=>Te()},[]),q.useEffect(()=>{n.length&&d(de=>{const Te={...de};return n.forEach(we=>{Te[we.id]===void 0&&(Te[we.id]=we.assigned_designer??"")}),Te})},[n]),q.useEffect(()=>{n.length&&g(de=>{const Te={...de};return n.forEach(we=>{Te[we.id]===void 0&&(Te[we.id]=we.out_work_hour!=null?String(we.out_work_hour):"")}),Te})},[n]),q.useEffect(()=>{(async()=>{const Te=fi(Ar(wt,"users"),Rr("role","==",2)),Pe=(await dc(Te)).docs.map(it=>({id:it.id,...it.data()}));l(Pe),R(Pe.map(it=>it.name).filter(Boolean))})()},[]);const U=(de,Te)=>{d(we=>({...we,[de]:Te}))},D=async de=>{const Te=c[de];if(!Te){alert("디자이너를 선택하세요.");return}const we=zn(wt,"design_request",de);await hi(we,{assigned_designer:Te}),alert("디자이너가 배정되었습니다!"),i(Pe=>Pe.map(it=>it.id===de?{...it,assigned_designer:Te}:it))},Ne=async de=>{await hi(zn(wt,"design_request",de),{manager_review_status:"검수완료",status:"검수중"}),i(Te=>Te.map(we=>we.id===de?{...we,manager_review_status:"검수완료",status:"검수중"}:we)),alert("요청자에게 전달되었습니다.")};q.useEffect(()=>{(async()=>{const de=fi(Ar(wt,"users"),Rr("role","==",1)),we=(await dc(de)).docs.map(Pe=>Pe.data().name).filter(Boolean);P(we)})()},[]);const oe=de=>{e(de),t(!0)},W=de=>C(de),ae=de=>w(de),fe=de=>F(de.trim()),_e=de=>N(de),j=de=>I(de),ne=de=>new Date(de.getFullYear(),de.getMonth(),de.getDate()),he=de=>{if(!de)return null;if(typeof de=="object"&&typeof de.toDate=="function")return ne(de.toDate());if(de instanceof Date)return ne(de);if(typeof de=="number")return ne(new Date(de));if(typeof de=="string"){const we=de.replace(/\./g,"-").replace(/\//g,"-").split("-");if(we.length===3){const[it,Wn,Vt]=we.map(Number),$r=it>31?it:new Date().getFullYear();return new Date($r,Wn-1,Vt)}if(we.length===2){const[it,Wn]=we.map(Number),Vt=new Date().getFullYear();return new Date(Vt,it-1,Wn)}const Pe=new Date(de);return isNaN(+Pe)?null:ne(Pe)}return null},ce=de=>de==="검수요청"?"검수중":de==="검수중"?"검수요청":de??"대기",ve=q.useMemo(()=>n.map(de=>{const Te=ce(de.status);return C_({...de,displayStatus:Te})}),[n]),Ie=q.useMemo(()=>{const de=T.start?ne(T.start):null,Te=T.end?ne(T.end):null;return ve.filter(we=>{let Pe=!0;if(v!==oT&&we.status!==v&&(Pe=!1),Pe&&H!==lT&&we.requester!==H&&(Pe=!1),Pe&&A!==uT&&we.assigned_designer!==A&&(Pe=!1),Pe&&de&&Te){const it=he(we.request_date)||he(we.requested_at)||he(we.requestDate);(!it||it<de||it>Te)&&(Pe=!1)}return Pe&&M&&!I_(we,M)&&(Pe=!1),Pe})},[ve,v,H,A,T,M]),be=(de,Te)=>{const we=Te.replace(/[^0-9.]/g,"");g(Pe=>({...Pe,[de]:we}))},yt=async de=>{const Te=n.find(we=>we.id===de);await hi(zn(wt,"design_request",de),{work_hour_edit_state:!0}),i(we=>we.map(Pe=>Pe.id===de?{...Pe,work_hour_edit_state:!0}:Pe)),g(we=>({...we,[de]:we[de]!==void 0&&we[de]!==""?we[de]:(Te==null?void 0:Te.out_work_hour)!=null?String(Te.out_work_hour):""}))},$e=async de=>{const Te=n.find(Qn=>Qn.id===de);if(!Te)return;const we=(p[de]??"").trim(),Pe=Number(we.replace(",","."));if(!Number.isFinite(Pe)||Pe<0){alert("유효한 공수를 입력하세요.");return}const it=fi(Ar(wt,"task_work_hour"),Rr("task_form","==",Te.task_form),Rr("task_type","==",Te.task_type)),Wn=await dc(it);let Vt=1;if(!Wn.empty){const Qn=Wn.docs[0].data();Vt=Number(Qn.task_work_times)||1}const $r=Number((Pe*Vt).toFixed(2));await hi(zn(wt,"design_request",de),{out_work_hour:Pe,in_work_hour:$r,work_hour_edit_state:!1}),i(Qn=>Qn.map(ur=>ur.id===de?{...ur,out_work_hour:Pe,in_work_hour:$r,work_hour_edit_state:!1}:ur)),alert("공수 수정 완료")},Tt=async()=>{k(!0);try{Y3({rows:Ie,fields:["id","design_request_id","request_date","requester","task_form","task_type","requirement","status","assigned_designer","designer_start_date","designer_end_date","out_work_hour","in_work_hour"],headers:{id:"문서ID",design_request_id:"문서번호",request_date:"요청일",requester:"요청자",task_form:"업무형태",task_type:"업무타입",requirement:"작업항목",status:"진행상태",assigned_designer:"디자이너",designer_start_date:"디자인 시작일",designer_end_date:"디자인 종료일",out_work_hour:"공수(외부)",in_work_hour:"공수(내부)"},filename:"design_request_current_view.csv"})}finally{k(!1)}},Cn=async de=>{await hi(zn(wt,"design_request",de),{work_hour_edit_state:!1}),i(Te=>Te.map(we=>we.id===de?{...we,work_hour_edit_state:!1}:we))};return _.jsxs(Q3,{children:[_.jsx(S_,{}),_.jsxs(K3,{children:[_.jsx(X3,{children:"매니저 요청리스트"}),_.jsx(R_,{roleNumber:3,onApplyStatus:ae,onApplyRange:W,onSearch:fe,keyword:O,onKeywordChange:B,isManager:!0,requesterOptions:$,onApplyRequester:_e,designerOptions:Z,onApplyDesigner:j}),_.jsx(F3,{onClick:Tt,loading:L}),_.jsx(U3,{data:Ie,designerList:a,selectedDesigners:c,designerSelect:U,assignDesigner:D,sendToRequester:Ne,onDetailClick:oe,workHours:p,onChangeWorkHour:be,onSaveWorkHour:$e,onStartEditWorkHour:yt,onCancelEditWorkHour:Cn})]})]})}const Q3=G.div``,K3=G.div`
  padding: 0 48px;
`,X3=G.h2`
  margin-top: 20px;
`;function Z3({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(ZL,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(y3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(W3,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(J3,{children:a()})}const J3=G.main``,eU="./assets/aside-logo-DoEwMgfJ.svg",tU="./assets/myrequest-icon-DhmqrZY6.svg";function nU({item:t}){return _.jsxs(sU,{status:t.status,children:[_.jsx(aU,{children:t.status}),_.jsx(oU,{status:t.status,children:t.count})]})}const rU=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},iU=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},sU=G.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>rU(t,e)};
`,aU=G.span`
  font-size: 16px;
  font-weight: 500;
`,oU=G.span`
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
    background-color: ${({status:t,theme:e})=>iU(t,e)};
  }
`,Ct={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},lU=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG,Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 2:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ,Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 3:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수중",count:n([Ct.REQ])},{status:"검수요청",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];default:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}]}},uU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function cU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=lU(e,t);return _.jsxs(hU,{children:[_.jsxs(fU,{children:[_.jsx(dU,{src:eU}),_.jsx(pU,{children:"업무 관리시스템"})]}),e===1&&_.jsx(mU,{children:_.jsx(gU,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(yU,{children:[_.jsxs(_U,{children:[_.jsx(vU,{src:tU}),_.jsx(EU,{children:uU(e,n)})]}),_.jsx(wU,{children:a.map(l=>_.jsx(nU,{item:l},l.status))})]})]})}const hU=G.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,fU=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,dU=G.img`
  margin-right: 8px;
`,pU=G.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,mU=G.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,gU=G.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,yU=G.div`
  padding: 0 24px;
`,_U=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,vU=G.img``,EU=G.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,wU=G.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function bU({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(TU,{isVisible:t,onClick:e}),_.jsx(SU,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const TU=G.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,SU=G.div`
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
`,gA="./assets/requestformexit-button-BcAG546a.svg",xU="./assets/checkbox-checked-eOVFoR8b.svg",Af={completion_dt:"",open_dt:"",merchandiser:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function cT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=q.useState(Af),[d,p]=q.useState([]),[g,v]=q.useState(""),w=(H,N)=>{c(Z=>({...Z,[H]:N}))},T=()=>p(H=>[...H,{...Af}]),C=H=>p(N=>N.filter((Z,R)=>R!==H)),O=(H,N,Z)=>p(R=>{const A=[...R];return A[H]={...A[H],[N]:Z},A}),B=H=>H?vt.fromDate(new Date(H)):null,M=async()=>{const H=new Date,N=H.getFullYear().toString().slice(2),Z=(H.getMonth()+1).toString().padStart(2,"0"),R=fi(Ar(wt,"design_request"),Rr("design_request_id",">=",`H${N}${Z}000`),Rr("design_request_id","<",`H${N}${Z}999`)),A=await dc(R);return{year:N,month:Z,base:A.size}},F=(H,N,Z)=>`H${H}${N}${Z.toString().padStart(3,"0")}`,$=async(H,N)=>{if(!H||!N)return{base:null,times:null};const Z=fi(Ar(wt,"task_work_hour"),Rr("task_form","==",H),Rr("task_type","==",N)),R=await dc(Z);if(R.empty)return{base:null,times:null};const A=R.docs[0].data(),I=typeof A.task_work_hour=="number"?A.task_work_hour:null,L=typeof A.task_work_times=="number"?A.task_work_times:null;return{base:I,times:L}},P=async H=>{if(H.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await hi(zn(wt,"design_request",e.id),{completion_dt:B(l.completion_dt),open_dt:B(l.open_dt),merchandiser:l.merchandiser??"",task_form:l.task_form,task_type:l.task_type,requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:fy()}),alert("요청이 수정되었습니다!"),i();return}const N=[l,...d],Z=N.findIndex(U=>!U.requirement);if(Z!==-1){alert(`${Z+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:R,month:A,base:I}=await M();let L=I;const k=new Date;for(const U of N){L+=1;const D=F(R,A,L),{base:Ne,times:oe}=await $(U.task_form,U.task_type),W=Ne!=null&&oe!=null?Number((Ne*oe).toFixed(2)):null;await OP(Ar(wt,"design_request"),{design_request_id:D,request_date:B(k.toISOString()),merchandiser:U.merchandiser??"",requester:t,company:g,completion_dt:B(U.completion_dt),open_dt:B(U.open_dt),task_form:U.task_form,task_type:U.task_type,requirement:U.requirement,url:U.url,note:U.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:U.emergency,requester_edit_state:!1,designer_edit_state:!1,in_work_hour:W,out_work_hour:Ne,work_hour_edit_state:!1,created_at:fy(),updated_at:null,delete_at:null})}alert(`${N.length}건이 등록되었습니다!`),p([]),c(Af),i()};return q.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",merchandiser:e.merchandiser??"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),q.useEffect(()=>{!n||a||(c(Af),p([]))},[n]),q.useEffect(()=>{const H=Lc(fa,async N=>{var R;if(!N){v("");return}const Z=await Xd(zn(wt,"users",N.uid));v(((R=Z.data())==null?void 0:R.company)??"")});return()=>H()},[]),_.jsxs(_.Fragment,{children:[_.jsxs(RU,{children:[_.jsx(CU,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(IU,{type:"button",onClick:i})]}),_.jsxs(AU,{onSubmit:P,children:[_.jsxs(DU,{children:[!a&&d.map((H,N)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",N+1]}),_.jsx("button",{type:"button",onClick:()=>C(N),children:"삭제"})]}),_.jsxs(hT,{children:[_.jsx(fT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Gt,{children:"문서번호"}),_.jsx(Yt,{})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`merchandiser_ex_${N}`,children:"담당 MD"})}),_.jsx(Yt,{children:_.jsx(Cf,{id:`merchandiser_ex_${N}`,type:"text",value:H.merchandiser||"",onChange:Z=>O(N,"merchandiser",Z.target.value),placeholder:"담당 MD 이름 또는 ID를 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`completion_dt_ex_${N}`,children:"완료 요청일"})}),_.jsx(Yt,{children:_.jsx(Rf,{id:`completion_dt_ex_${N}`,type:"date",value:H.completion_dt||"",onChange:Z=>O(N,"completion_dt",Z.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`open_dt_ex_${N}`,children:"오픈일"})}),_.jsx(Yt,{children:_.jsx(Rf,{id:`open_dt_ex_${N}`,type:"date",value:H.open_dt||"",onChange:Z=>O(N,"open_dt",Z.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`task_form_ex_${N}`,children:"업무 부서"})}),_.jsx(Yt,{children:_.jsxs(If,{id:`task_form_ex_${N}`,value:H.task_form||"GHS",onChange:Z=>O(N,"task_form",Z.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`task_type_ex_${N}`,children:"업무 유형"})}),_.jsx(Yt,{children:_.jsxs(If,{id:`task_type_ex_${N}`,value:H.task_type||"프론트테마",onChange:Z=>O(N,"task_type",Z.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`requirement_ex_${N}`,children:"작업 항목"})}),_.jsx(Yt,{children:_.jsx(Cf,{id:`requirement_ex_${N}`,type:"text",value:H.requirement||"",onChange:Z=>O(N,"requirement",Z.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`emergency_ex_${N}`,children:"긴급 일정"})}),_.jsx(Yt,{children:_.jsx(mT,{children:_.jsxs(gT,{htmlFor:`emergency_ex_${N}`,children:[_.jsx(yT,{id:`emergency_ex_${N}`,type:"checkbox",checked:!!H.emergency,onChange:Z=>O(N,"emergency",Z.target.checked)}),_.jsx(_T,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`url_ex_${N}`,children:"요청서 URL"})}),_.jsx(Yt,{children:_.jsx(dT,{id:`url_ex_${N}`,value:H.url||"",onChange:Z=>O(N,"url",Z.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:`note_ex_${N}`,children:"메모"})}),_.jsx(Yt,{children:_.jsx(pT,{id:`note_ex_${N}`,rows:4,value:H.note||"",onChange:Z=>O(N,"note",Z.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},N)),_.jsxs(hT,{children:[_.jsx(fT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Gt,{children:"문서번호"}),_.jsx(Yt,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(Yt,{children:_.jsx(Rf,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:H=>w("completion_dt",H.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(Yt,{children:_.jsx(Rf,{type:"date",id:"open_dt",value:l.open_dt,onChange:H=>w("open_dt",H.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"merchandiser",children:"담당 MD"})}),_.jsx(Yt,{children:_.jsx(Cf,{type:"text",id:"merchandiser",value:l.merchandiser||"",onChange:H=>w("merchandiser",H.target.value),placeholder:"담당 MD 이름을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"task_form",children:"업무 부서"})}),_.jsx(Yt,{children:_.jsxs(If,{id:"task_form",value:l.task_form,onChange:H=>w("task_form",H.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(Yt,{children:_.jsxs(If,{id:"task_type",value:l.task_type,onChange:H=>w("task_type",H.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(Yt,{children:_.jsx(Cf,{type:"text",id:"requirement",value:l.requirement,onChange:H=>w("requirement",H.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(Yt,{children:_.jsx(mT,{children:_.jsxs(gT,{htmlFor:"emergency",children:[_.jsx(yT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:H=>w("emergency",H.target.checked)}),_.jsx(_T,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(Yt,{children:_.jsx(dT,{id:"url",value:l.url,onChange:H=>w("url",H.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Gt,{children:_.jsx(mn,{htmlFor:"note",children:"메모"})}),_.jsx(Yt,{children:_.jsx(pT,{id:"note",rows:4,value:l.note,onChange:H=>w("note",H.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(kU,{children:[_.jsx(OU,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(MU,{type:"button",onClick:T,children:"추가 등록하기"})]})]})]})}const AU=G.form`
  font-family: 'Pretendard';
`,RU=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,CU=G.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,IU=G.button`
  width: 24px;
  height: 24px;
  background: url(${gA}) no-repeat center;
  background-size: contain;
`,hT=G.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,DU=G.div`
  max-height: 690px;
  overflow: auto;
`,fT=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Gt=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Yt=G.td`
  padding: 12px 24px;
  border-right: none;
`,mn=G.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Rf=G.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,Cf=G.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,dT=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,pT=G.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,mT=G.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,gT=G.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,yT=G.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${xU}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,_T=G.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,If=G.select`
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
  background-image: url(${jx}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,kU=G.div`
  margin-top: 24px;
  text-align: center;
`,OU=G.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,MU=G.button`
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
`;function NU({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(PU,{children:[_.jsx(VU,{children:"디자인 요청 상세"}),_.jsx(jU,{type:"button",onClick:e})]}),_.jsxs(LU,{children:[_.jsx(UU,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Pr,{children:"문서번호"}),_.jsx(Gs,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"요청일"}),_.jsx(Gs,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"완료 요청일"}),_.jsx(qU,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"오픈일"}),_.jsx(BU,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"담당 MD"}),_.jsx(Gs,{children:(t==null?void 0:t.merchandiser)||""})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"업무 부서"}),_.jsx(Gs,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"업무 유형"}),_.jsx(Gs,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"작업 항목"}),_.jsx(Gs,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"긴급 일정"}),_.jsx(Gs,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"요청서 URL"}),_.jsx(Gs,{children:t!=null&&t.url?_.jsx(FU,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Pr,{children:"메모"}),_.jsx(zU,{children:_.jsx($U,{children:t.note})})]})]})]})]})}const PU=G.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,VU=G.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,jU=G.button`
  width: 24px;
  height: 24px;
  background: url(${gA}) no-repeat center;
  background-size: contain;
`,LU=G.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,UU=G.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Pr=G.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Gs=G.td`
  padding: 12px 24px;
  border-right: none;
`,qU=G.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,BU=G.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,zU=G.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,FU=G.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,$U=G.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function HU(){const[t,e]=q.useState(0),[n,i]=q.useState([]),[a,l]=q.useState(""),[c,d]=q.useState(!1),[p,g]=q.useState(void 0),[v,w]=q.useState(null);q.useEffect(()=>{const O=Lc(fa,async B=>{if(B){l(B.displayName||"");const M=await Xd(zn(wt,"users",B.uid));if(M.exists()){const $=M.data().role,P=B.displayName;e($);let H;$===1?H=fi(Ar(wt,"design_request"),Rr("requester","==",P)):$===2?H=fi(Ar(wt,"design_request"),Rr("assigned_designer","==",P)):H=Ar(wt,"design_request"),Zd(H,N=>{const Z=N.docs.map(R=>{const A=R.data();return{id:R.id,status:A.status??"대기중"}});i(Z)})}}else e(0),l(""),i([])});return()=>O()},[]);const T=()=>{g(void 0),w("create"),d(!0)},C=()=>{d(!1),g(void 0)};return _.jsxs(GU,{children:[_.jsx(cU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(YU,{children:[_.jsx(QP,{}),_.jsx(Z3,{userRole:t,setIsDrawerOpen:d,setEditData:O=>{g(O),w("edit")},setDetailData:O=>{g(O),w("detail")}})]}),_.jsxs(bU,{isOpen:c,onClose:C,children:[v==="create"&&_.jsx(cT,{userName:a,isDrawerOpen:c,onClose:C}),v==="edit"&&p&&_.jsx(cT,{userName:a,isDrawerOpen:c,editData:p,onClose:C}),v==="detail"&&p&&_.jsx(NU,{data:p,onClose:C})]})]})}const GU=G.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,YU=G.div`
  flex: 1;
`;function WU(){const[t,e]=q.useState(""),[n,i]=q.useState(""),[a,l]=q.useState(""),[c,d]=q.useState(""),[p,g]=q.useState(""),v=kc(),w=async()=>{const T=t.trim(),C=n.trim(),O=a.trim();if(!T){alert("이름을 입력해주세요.");return}if(!C){alert("회사명을 입력해주세요.");return}if(!O){alert("이메일을 입력해주세요.");return}if(c!==p){alert("비밀번호가 일치하지 않습니다.");return}nM(fa,a,c).then(async B=>{const M=B.user;await sM(M,{displayName:t}),await kP(zn(wt,"users",M.uid),{name:T,company:C,role:1,createdAt:fy()})}).then(()=>{alert("회원가입이 완료되었습니다!"),v("/")}).catch(B=>{alert("회원가입 중 오류 발생: "+B.message)})};return _.jsx(QU,{children:_.jsxs(KU,{children:[_.jsxs(XU,{children:[_.jsx(ZU,{children:"PDMS"}),_.jsx(JU,{children:"Pushcomz Design Management System"})]}),_.jsxs(e9,{children:[_.jsx(t9,{type:"text",value:t,onChange:T=>e(T.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(n9,{type:"text",value:n,onChange:T=>i(T.target.value),placeholder:"회사명을 입력해주세요."})," ",_.jsx(r9,{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(i9,{type:"password",value:c,onChange:T=>d(T.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(s9,{type:"password",value:p,onChange:T=>g(T.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(a9,{onClick:w,children:"등록하기"})]})})}const QU=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,KU=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,XU=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,ZU=G.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,JU=G.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,e9=G.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,t9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,n9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,r9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,i9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,s9=G.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,a9=G.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function o9(){const[t,e]=q.useState(!1);return _.jsx(hI,{basename:"pdms-test",children:_.jsxs(zC,{children:[_.jsx(Df,{path:"/",element:_.jsx(NP,{onLoginSuccess:()=>e(!0)})}),_.jsx(Df,{path:"/dashboard",element:t?_.jsx(HU,{}):_.jsx(qC,{to:"/"})}),_.jsx(Df,{path:"/signup",element:_.jsx(WU,{})})]})})}const l9="/assets/Pretendard-Bold-C0IAtCzs.woff2",u9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",c9="/assets/Pretendard-Medium-BCuOcOjL.woff2",h9="/assets/Pretendard-Regular-BnvhP503.woff2",f9=a1`
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
    src: url(${l9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${u9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${c9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${h9}) format('woff2');
    font-weight: 400;
  }

`,d9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},p9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},m9={colors:d9,mixin:p9};XR.createRoot(document.getElementById("root")).render(_.jsx(q.StrictMode,{children:_.jsxs(vD,{theme:m9,children:[_.jsx(o9,{}),_.jsx(f9,{})]})}));
