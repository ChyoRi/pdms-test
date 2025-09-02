(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function tC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},Xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE;function nC(){if(YE)return Xu;YE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Xu.Fragment=e,Xu.jsx=n,Xu.jsxs=n,Xu}var WE;function rC(){return WE||(WE=1,ig.exports=nC()),ig.exports}var y=rC(),sg={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE;function iC(){if(QE)return qe;QE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(N){return N===null||typeof N!="object"?null:(N=E&&N[E]||N["@@iterator"],typeof N=="function"?N:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function M(N,ne,le){this.props=N,this.context=ne,this.refs=q,this.updater=le||I}M.prototype.isReactComponent={},M.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=M.prototype;function G(N,ne,le){this.props=N,this.context=ne,this.refs=q,this.updater=le||I}var P=G.prototype=new F;P.constructor=G,V(P,M.prototype),P.isPureReactComponent=!0;var te=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},re=Object.prototype.hasOwnProperty;function D(N,ne,le,ue,ve,Ae){return le=Ae.ref,{$$typeof:t,type:N,key:ne,ref:le!==void 0?le:null,props:Ae}}function R(N,ne){return D(N.type,ne,void 0,void 0,void 0,N.props)}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function U(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return ne[le]})}var B=/\/+/g;function C(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?U(""+N.key):ne.toString(36)}function x(){}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(x,x):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ye(N,ne,le,ue,ve){var Ae=typeof N;(Ae==="undefined"||Ae==="boolean")&&(N=null);var Te=!1;if(N===null)Te=!0;else switch(Ae){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(N.$$typeof){case t:case e:Te=!0;break;case v:return Te=N._init,ye(Te(N._payload),ne,le,ue,ve)}}if(Te)return ve=ve(N),Te=ue===""?"."+C(N,0):ue,te(ve)?(le="",Te!=null&&(le=Te.replace(B,"$&/")+"/"),ye(ve,ne,le,"",function(Tt){return Tt})):ve!=null&&(O(ve)&&(ve=R(ve,le+(ve.key==null||N&&N.key===ve.key?"":(""+ve.key).replace(B,"$&/")+"/")+Te)),ne.push(ve)),1;Te=0;var _t=ue===""?".":ue+":";if(te(N))for(var Fe=0;Fe<N.length;Fe++)ue=N[Fe],Ae=_t+C(ue,Fe),Te+=ye(ue,ne,le,Ae,ve);else if(Fe=T(N),typeof Fe=="function")for(N=Fe.call(N),Fe=0;!(ue=N.next()).done;)ue=ue.value,Ae=_t+C(ue,Fe++),Te+=ye(ue,ne,le,Ae,ve);else if(Ae==="object"){if(typeof N.then=="function")return ye(ce(N),ne,le,ue,ve);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Te}function k(N,ne,le){if(N==null)return N;var ue=[],ve=0;return ye(N,ue,"","",function(Ae){return ne.call(le,Ae,ve++)}),ue}function J(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function de(){}return qe.Children={map:k,forEach:function(N,ne,le){k(N,function(){ne.apply(this,arguments)},le)},count:function(N){var ne=0;return k(N,function(){ne++}),ne},toArray:function(N){return k(N,function(ne){return ne})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},qe.Component=M,qe.Fragment=n,qe.Profiler=a,qe.PureComponent=G,qe.StrictMode=i,qe.Suspense=p,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,qe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return $.H.useMemoCache(N)}},qe.cache=function(N){return function(){return N.apply(null,arguments)}},qe.cloneElement=function(N,ne,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ue=V({},N.props),ve=N.key,Ae=void 0;if(ne!=null)for(Te in ne.ref!==void 0&&(Ae=void 0),ne.key!==void 0&&(ve=""+ne.key),ne)!re.call(ne,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&ne.ref===void 0||(ue[Te]=ne[Te]);var Te=arguments.length-2;if(Te===1)ue.children=le;else if(1<Te){for(var _t=Array(Te),Fe=0;Fe<Te;Fe++)_t[Fe]=arguments[Fe+2];ue.children=_t}return D(N.type,ve,void 0,void 0,Ae,ue)},qe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},qe.createElement=function(N,ne,le){var ue,ve={},Ae=null;if(ne!=null)for(ue in ne.key!==void 0&&(Ae=""+ne.key),ne)re.call(ne,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(ve[ue]=ne[ue]);var Te=arguments.length-2;if(Te===1)ve.children=le;else if(1<Te){for(var _t=Array(Te),Fe=0;Fe<Te;Fe++)_t[Fe]=arguments[Fe+2];ve.children=_t}if(N&&N.defaultProps)for(ue in Te=N.defaultProps,Te)ve[ue]===void 0&&(ve[ue]=Te[ue]);return D(N,Ae,void 0,void 0,null,ve)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(N){return{$$typeof:d,render:N}},qe.isValidElement=O,qe.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:J}},qe.memo=function(N,ne){return{$$typeof:g,type:N,compare:ne===void 0?null:ne}},qe.startTransition=function(N){var ne=$.T,le={};$.T=le;try{var ue=N(),ve=$.S;ve!==null&&ve(le,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(de,se)}catch(Ae){se(Ae)}finally{$.T=ne}},qe.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},qe.use=function(N){return $.H.use(N)},qe.useActionState=function(N,ne,le){return $.H.useActionState(N,ne,le)},qe.useCallback=function(N,ne){return $.H.useCallback(N,ne)},qe.useContext=function(N){return $.H.useContext(N)},qe.useDebugValue=function(){},qe.useDeferredValue=function(N,ne){return $.H.useDeferredValue(N,ne)},qe.useEffect=function(N,ne,le){var ue=$.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ue.useEffect(N,ne)},qe.useId=function(){return $.H.useId()},qe.useImperativeHandle=function(N,ne,le){return $.H.useImperativeHandle(N,ne,le)},qe.useInsertionEffect=function(N,ne){return $.H.useInsertionEffect(N,ne)},qe.useLayoutEffect=function(N,ne){return $.H.useLayoutEffect(N,ne)},qe.useMemo=function(N,ne){return $.H.useMemo(N,ne)},qe.useOptimistic=function(N,ne){return $.H.useOptimistic(N,ne)},qe.useReducer=function(N,ne,le){return $.H.useReducer(N,ne,le)},qe.useRef=function(N){return $.H.useRef(N)},qe.useState=function(N){return $.H.useState(N)},qe.useSyncExternalStore=function(N,ne,le){return $.H.useSyncExternalStore(N,ne,le)},qe.useTransition=function(){return $.H.useTransition()},qe.version="19.1.0",qe}var KE;function Ty(){return KE||(KE=1,sg.exports=iC()),sg.exports}var j=Ty();const ge=tC(j);var ag={exports:{}},Zu={},og={exports:{}},lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE;function sC(){return XE||(XE=1,function(t){function e(k,J){var se=k.length;k.push(J);e:for(;0<se;){var de=se-1>>>1,N=k[de];if(0<a(N,J))k[de]=J,k[se]=N,se=de;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var J=k[0],se=k.pop();if(se!==J){k[0]=se;e:for(var de=0,N=k.length,ne=N>>>1;de<ne;){var le=2*(de+1)-1,ue=k[le],ve=le+1,Ae=k[ve];if(0>a(ue,se))ve<N&&0>a(Ae,ue)?(k[de]=Ae,k[ve]=se,de=ve):(k[de]=ue,k[le]=se,de=le);else if(ve<N&&0>a(Ae,se))k[de]=Ae,k[ve]=se,de=ve;else break e}}return J}function a(k,J){var se=k.sortIndex-J.sortIndex;return se!==0?se:k.id-J.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,E=null,T=3,I=!1,V=!1,q=!1,M=!1,F=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function te(k){for(var J=n(g);J!==null;){if(J.callback===null)i(g);else if(J.startTime<=k)i(g),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(g)}}function $(k){if(q=!1,te(k),!V)if(n(p)!==null)V=!0,re||(re=!0,C());else{var J=n(g);J!==null&&ye($,J.startTime-k)}}var re=!1,D=-1,R=5,O=-1;function U(){return M?!0:!(t.unstable_now()-O<R)}function B(){if(M=!1,re){var k=t.unstable_now();O=k;var J=!0;try{e:{V=!1,q&&(q=!1,G(D),D=-1),I=!0;var se=T;try{t:{for(te(k),E=n(p);E!==null&&!(E.expirationTime>k&&U());){var de=E.callback;if(typeof de=="function"){E.callback=null,T=E.priorityLevel;var N=de(E.expirationTime<=k);if(k=t.unstable_now(),typeof N=="function"){E.callback=N,te(k),J=!0;break t}E===n(p)&&i(p),te(k)}else i(p);E=n(p)}if(E!==null)J=!0;else{var ne=n(g);ne!==null&&ye($,ne.startTime-k),J=!1}}break e}finally{E=null,T=se,I=!1}J=void 0}}finally{J?C():re=!1}}}var C;if(typeof P=="function")C=function(){P(B)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,ce=x.port2;x.port1.onmessage=B,C=function(){ce.postMessage(null)}}else C=function(){F(B,0)};function ye(k,J){D=F(function(){k(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(k){switch(T){case 1:case 2:case 3:var J=3;break;default:J=T}var se=T;T=J;try{return k()}finally{T=se}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(k,J){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=T;T=k;try{return J()}finally{T=se}},t.unstable_scheduleCallback=function(k,J,se){var de=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?de+se:de):se=de,k){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=se+N,k={id:v++,callback:J,priorityLevel:k,startTime:se,expirationTime:N,sortIndex:-1},se>de?(k.sortIndex=se,e(g,k),n(p)===null&&k===n(g)&&(q?(G(D),D=-1):q=!0,ye($,se-de))):(k.sortIndex=N,e(p,k),V||I||(V=!0,re||(re=!0,C()))),k},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(k){var J=T;return function(){var se=T;T=J;try{return k.apply(this,arguments)}finally{T=se}}}}(lg)),lg}var ZE;function aC(){return ZE||(ZE=1,og.exports=sC()),og.exports}var ug={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE;function oC(){if(JE)return On;JE=1;var t=Ty();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,On.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},On.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},On.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},On.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},On.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:I}):v==="script"&&i.d.X(p,{crossOrigin:E,integrity:T,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},On.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},On.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},On.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},On.requestFormReset=function(p){i.d.r(p)},On.unstable_batchedUpdates=function(p,g){return p(g)},On.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},On.useFormStatus=function(){return c.H.useHostTransitionStatus()},On.version="19.1.0",On}var eb;function lC(){if(eb)return ug.exports;eb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ug.exports=oC(),ug.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tb;function uC(){if(tb)return Zu;tb=1;var t=aC(),e=Ty(),n=lC();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var w=!1,S=f.child;S;){if(S===o){w=!0,o=f,u=m;break}if(S===u){w=!0,u=f,o=m;break}S=S.sibling}if(!w){for(S=m.child;S;){if(S===o){w=!0,o=m,u=f;break}if(S===u){w=!0,u=m,o=f;break}S=S.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),P=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function C(r){return r===null||typeof r!="object"?null:(r=B&&r[B]||r["@@iterator"],typeof r=="function"?r:null)}var x=Symbol.for("react.client.reference");function ce(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===x?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case V:return"Fragment";case M:return"Profiler";case q:return"StrictMode";case $:return"Suspense";case re:return"SuspenseList";case O:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case P:return(r.displayName||"Context")+".Provider";case G:return(r._context.displayName||"Context")+".Consumer";case te:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return s=r.displayName||null,s!==null?s:ce(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return ce(r(s))}catch{}}return null}var ye=Array.isArray,k=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},de=[],N=-1;function ne(r){return{current:r}}function le(r){0>N||(r.current=de[N],de[N]=null,N--)}function ue(r,s){N++,de[N]=r.current,r.current=s}var ve=ne(null),Ae=ne(null),Te=ne(null),_t=ne(null);function Fe(r,s){switch(ue(Te,s),ue(Ae,r),ue(ve,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?bE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=bE(s),r=wE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(ve),ue(ve,r)}function Tt(){le(ve),le(Ae),le(Te)}function In(r){r.memoizedState!==null&&ue(_t,r);var s=ve.current,o=wE(s,r.type);s!==o&&(ue(Ae,r),ue(ve,o))}function ln(r){Ae.current===r&&(le(ve),le(Ae)),_t.current===r&&(le(_t),Gu._currentValue=se)}var pe=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Le=t.unstable_shouldYield,ut=t.unstable_requestPaint,jt=t.unstable_now,pr=t.unstable_getCurrentPriorityLevel,mr=t.unstable_ImmediatePriority,Yn=t.unstable_UserBlockingPriority,Jn=t.unstable_NormalPriority,go=t.unstable_LowPriority,Wr=t.unstable_IdlePriority,Ai=t.log,yo=t.unstable_setDisableYieldValue,xt=null,nt=null;function Un(r){if(typeof Ai=="function"&&yo(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(xt,r)}catch{}}var un=Math.clz32?Math.clz32:Ri,_o=Math.log,Kl=Math.LN2;function Ri(r){return r>>>=0,r===0?32:31-(_o(r)/Kl|0)|0}var Ci=256,Di=4194304;function er(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Ii(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,w=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=er(u):(w&=S,w!==0?f=er(w):o||(o=S&~r,o!==0&&(f=er(o))))):(S=u&~m,S!==0?f=er(S):w!==0?f=er(w):o||(o=u&~r,o!==0&&(f=er(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function ki(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function _s(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var r=Ci;return Ci<<=1,(Ci&4194048)===0&&(Ci=256),r}function it(){var r=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),r}function ke(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function et(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function cn(r,s,o,u,f,m){var w=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,L=r.expirationTimes,K=r.hiddenUpdates;for(o=w&~o;0<o;){var ie=31-un(o),he=1<<ie;S[ie]=0,L[ie]=-1;var X=K[ie];if(X!==null)for(K[ie]=null,ie=0;ie<X.length;ie++){var Z=X[ie];Z!==null&&(Z.lane&=-536870913)}o&=~he}u!==0&&Ue(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(w&~s))}function Ue(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-un(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Ea(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-un(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Qr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function vs(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function gr(){var r=J.p;return r!==0?r:(r=window.event,r===void 0?32:BE(r.type))}function Es(r,s){var o=J.p;try{return J.p=r,s()}finally{J.p=o}}var At=Math.random().toString(36).slice(2),en="__reactFiber$"+At,zt="__reactProps$"+At,yr="__reactContainer$"+At,Xl="__reactEvents$"+At,op="__reactListeners$"+At,bs="__reactHandles$"+At,th="__reactResources$"+At,ba="__reactMarker$"+At;function ws(r){delete r[en],delete r[zt],delete r[Xl],delete r[op],delete r[bs]}function Oi(r){var s=r[en];if(s)return s;for(var o=r.parentNode;o;){if(s=o[yr]||o[en]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=AE(r);r!==null;){if(o=r[en])return o;r=AE(r)}return s}r=o,o=r.parentNode}return null}function Kr(r){if(r=r[en]||r[yr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Xr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function qn(r){var s=r[th];return s||(s=r[th]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Lt(r){r[ba]=!0}var Zl=new Set,vo={};function Nr(r,s){Mi(r,s),Mi(r+"Capture",s)}function Mi(r,s){for(vo[r]=s,r=0;r<s.length;r++)Zl.add(s[r])}var nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rh={},wa={};function ih(r){return pe.call(wa,r)?!0:pe.call(rh,r)?!1:nh.test(r)?wa[r]=!0:(rh[r]=!0,!1)}function Ts(r,s,o){if(ih(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Zr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function bn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var Ta,sh;function Ni(r){if(Ta===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ta=s&&s[1]||"",sh=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ta+r+sh}var Eo=!1;function bo(r,s){if(!r||Eo)return"";Eo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var he=function(){throw Error()};if(Object.defineProperty(he.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(he,[])}catch(Z){var X=Z}Reflect.construct(r,[],he)}else{try{he.call()}catch(Z){X=Z}r.call(he.prototype)}}else{try{throw Error()}catch(Z){X=Z}(he=r())&&typeof he.catch=="function"&&he.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),w=m[0],S=m[1];if(w&&S){var L=w.split(`
`),K=S.split(`
`);for(f=u=0;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(u===L.length||f===K.length)for(u=L.length-1,f=K.length-1;1<=u&&0<=f&&L[u]!==K[f];)f--;for(;1<=u&&0<=f;u--,f--)if(L[u]!==K[f]){if(u!==1||f!==1)do if(u--,f--,0>f||L[u]!==K[f]){var ie=`
`+L[u].replace(" at new "," at ");return r.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",r.displayName)),ie}while(1<=u&&0<=f);break}}}finally{Eo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Ni(o):""}function Jl(r){switch(r.tag){case 26:case 27:case 5:return Ni(r.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return bo(r.type,!1);case 11:return bo(r.type.render,!1);case 1:return bo(r.type,!0);case 31:return Ni("Activity");default:return""}}function wo(r){try{var s="";do s+=Jl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Bn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function eu(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function lp(r){var s=eu(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function To(r){r._valueTracker||(r._valueTracker=lp(r))}function tu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=eu(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function Sa(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var up=/[\n"\\]/g;function $t(r){return r.replace(up,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function tr(r,s,o,u,f,m,w,S){r.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.type=w:r.removeAttribute("type"),s!=null?w==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Bn(s)):r.value!==""+Bn(s)&&(r.value=""+Bn(s)):w!=="submit"&&w!=="reset"||r.removeAttribute("value"),s!=null?Ss(r,w,Bn(s)):o!=null?Ss(r,w,Bn(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Bn(S):r.removeAttribute("name")}function xa(r,s,o,u,f,m,w,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Bn(o):"",s=s!=null?""+Bn(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(r.name=w)}function Ss(r,s,o){s==="number"&&Sa(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Pi(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Bn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function dt(r,s,o){if(s!=null&&(s=""+Bn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Bn(o):""}function Aa(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(ye(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Bn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function _r(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ah(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Ra.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function nu(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&ah(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&ah(r,m,s[m])}function ru(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(r){return hp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Vi=null;function vr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ji=null,Li=null;function iu(r){var s=Kr(r);if(s&&(r=s.stateNode)){var o=r[zt]||null;e:switch(r=s.stateNode,s.type){case"input":if(tr(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+$t(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[zt]||null;if(!f)throw Error(i(90));tr(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&tu(u)}break e;case"textarea":dt(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Pi(r,!!o.multiple,s,!1)}}}var Jr=!1;function oh(r,s,o){if(Jr)return r(s,o);Jr=!0;try{var u=r(s);return u}finally{if(Jr=!1,(ji!==null||Li!==null)&&(ef(),ji&&(s=ji,r=Li,Li=ji=null,iu(s),r)))for(s=0;s<r.length;s++)iu(r[s])}}function Ca(r,s){var o=r.stateNode;if(o===null)return null;var u=o[zt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Er=!1;if(Pr)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Er=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Er=!1}var ei=null,xs=null,Ui=null;function su(){if(Ui)return Ui;var r,s=xs,o=s.length,u,f="value"in ei?ei.value:ei.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var w=o-r;for(u=1;u<=w&&s[o-u]===f[m-u];u++);return Ui=f.slice(r,1<u?1-u:void 0)}function ti(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ni(){return!0}function au(){return!1}function hn(r){function s(o,u,f,m,w){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ni:au,this.isPropagationStopped=au,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),s}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=hn(st),Ia=v({},st,{view:0,detail:0}),lh=hn(Ia),Ao,Ro,ri,ka=v({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ri&&(ri&&r.type==="mousemove"?(Ao=r.screenX-ri.screenX,Ro=r.screenY-ri.screenY):Ro=Ao=0,ri=r),Ao)},movementY:function(r){return"movementY"in r?r.movementY:Ro}}),br=hn(ka),uh=v({},ka,{dataTransfer:0}),fp=hn(uh),Oa=v({},Ia,{relatedTarget:0}),Co=hn(Oa),ou=v({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),Do=hn(ou),ch=v({},st,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Io=hn(ch),dp=v({},st,{data:0}),lu=hn(dp),Ma={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=fh[r])?!!s[r]:!1}function Na(){return uu}var dh=v({},Ia,{key:function(r){if(r.key){var s=Ma[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ti(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?hh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(r){return r.type==="keypress"?ti(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ti(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ko=hn(dh),ph=v({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=hn(ph),qi=v({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),mh=hn(qi),gh=v({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=hn(gh),_h=v({},ka,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oo=hn(_h),zn=v({},st,{newState:0,oldState:0}),vh=hn(zn),Eh=[9,13,27,32],ii=Pr&&"CompositionEvent"in window,h=null;Pr&&"documentMode"in document&&(h=document.documentMode);var _=Pr&&"TextEvent"in window&&!h,b=Pr&&(!ii||h&&8<h&&11>=h),A=" ",W=!1;function ee(r,s){switch(r){case"keyup":return Eh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function me(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ke=!1;function tn(r,s){switch(r){case"compositionend":return me(s);case"keypress":return s.which!==32?null:(W=!0,A);case"textInput":return r=s.data,r===A&&W?null:r;default:return null}}function Xe(r,s){if(Ke)return r==="compositionend"||!ii&&ee(r,s)?(r=su(),Ui=xs=ei=null,Ke=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return b&&s.locale!=="ko"?null:s.data;default:return null}}var fn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nn(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!fn[r.type]:s==="textarea"}function Bi(r,s,o,u){ji?Li?Li.push(u):Li=[u]:ji=u,s=of(s,"onChange"),0<s.length&&(o=new xo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var wn=null,si=null;function hu(r){gE(r,0)}function bh(r){var s=Xr(r);if(tu(s))return r}function j_(r,s){if(r==="change")return s}var L_=!1;if(Pr){var pp;if(Pr){var mp="oninput"in document;if(!mp){var U_=document.createElement("div");U_.setAttribute("oninput","return;"),mp=typeof U_.oninput=="function"}pp=mp}else pp=!1;L_=pp&&(!document.documentMode||9<document.documentMode)}function q_(){wn&&(wn.detachEvent("onpropertychange",B_),si=wn=null)}function B_(r){if(r.propertyName==="value"&&bh(si)){var s=[];Bi(s,si,r,vr(r)),oh(hu,s)}}function kA(r,s,o){r==="focusin"?(q_(),wn=s,si=o,wn.attachEvent("onpropertychange",B_)):r==="focusout"&&q_()}function OA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return bh(si)}function MA(r,s){if(r==="click")return bh(s)}function NA(r,s){if(r==="input"||r==="change")return bh(s)}function PA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var nr=typeof Object.is=="function"?Object.is:PA;function fu(r,s){if(nr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!pe.call(s,f)||!nr(r[f],s[f]))return!1}return!0}function z_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function $_(r,s){var o=z_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=z_(o)}}function F_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?F_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function H_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Sa(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Sa(r.document)}return s}function gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var VA=Pr&&"documentMode"in document&&11>=document.documentMode,Mo=null,yp=null,du=null,_p=!1;function G_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_p||Mo==null||Mo!==Sa(u)||(u=Mo,"selectionStart"in u&&gp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),du&&fu(du,u)||(du=u,u=of(yp,"onSelect"),0<u.length&&(s=new xo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Mo)))}function Pa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var No={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},vp={},Y_={};Pr&&(Y_=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Va(r){if(vp[r])return vp[r];if(!No[r])return r;var s=No[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Y_)return vp[r]=s[o];return r}var W_=Va("animationend"),Q_=Va("animationiteration"),K_=Va("animationstart"),jA=Va("transitionrun"),LA=Va("transitionstart"),UA=Va("transitioncancel"),X_=Va("transitionend"),Z_=new Map,Ep="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ep.push("scrollEnd");function Vr(r,s){Z_.set(r,s),Nr(s,[r])}var J_=new WeakMap;function wr(r,s){if(typeof r=="object"&&r!==null){var o=J_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:wo(s)},J_.set(r,s),s)}return{value:r,source:s,stack:wo(s)}}var Tr=[],Po=0,bp=0;function wh(){for(var r=Po,s=bp=Po=0;s<r;){var o=Tr[s];Tr[s++]=null;var u=Tr[s];Tr[s++]=null;var f=Tr[s];Tr[s++]=null;var m=Tr[s];if(Tr[s++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}m!==0&&ev(o,f,m)}}function Th(r,s,o,u){Tr[Po++]=r,Tr[Po++]=s,Tr[Po++]=o,Tr[Po++]=u,bp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function wp(r,s,o,u){return Th(r,s,o,u),Sh(r)}function Vo(r,s){return Th(r,null,null,s),Sh(r)}function ev(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-un(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function Sh(r){if(50<Lu)throw Lu=0,Cm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var jo={};function qA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(r,s,o,u){return new qA(r,s,o,u)}function Tp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function zi(r,s){var o=r.alternate;return o===null?(o=rr(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function tv(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function xh(r,s,o,u,f,m){var w=0;if(u=r,typeof r=="function")Tp(r)&&(w=1);else if(typeof r=="string")w=zR(r,o,ve.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case O:return r=rr(31,o,s,f),r.elementType=O,r.lanes=m,r;case V:return ja(o.children,f,m,s);case q:w=8,f|=24;break;case M:return r=rr(12,o,s,f|2),r.elementType=M,r.lanes=m,r;case $:return r=rr(13,o,s,f),r.elementType=$,r.lanes=m,r;case re:return r=rr(19,o,s,f),r.elementType=re,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case F:case P:w=10;break e;case G:w=9;break e;case te:w=11;break e;case D:w=14;break e;case R:w=16,u=null;break e}w=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=rr(w,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function ja(r,s,o,u){return r=rr(7,r,u,s),r.lanes=o,r}function Sp(r,s,o){return r=rr(6,r,null,s),r.lanes=o,r}function xp(r,s,o){return s=rr(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Lo=[],Uo=0,Ah=null,Rh=0,Sr=[],xr=0,La=null,$i=1,Fi="";function Ua(r,s){Lo[Uo++]=Rh,Lo[Uo++]=Ah,Ah=r,Rh=s}function nv(r,s,o){Sr[xr++]=$i,Sr[xr++]=Fi,Sr[xr++]=La,La=r;var u=$i;r=Fi;var f=32-un(u)-1;u&=~(1<<f),o+=1;var m=32-un(s)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,$i=1<<32-un(s)+f|o<<f|u,Fi=m+r}else $i=1<<m|o<<f|u,Fi=r}function Ap(r){r.return!==null&&(Ua(r,1),nv(r,1,0))}function Rp(r){for(;r===Ah;)Ah=Lo[--Uo],Lo[Uo]=null,Rh=Lo[--Uo],Lo[Uo]=null;for(;r===La;)La=Sr[--xr],Sr[xr]=null,Fi=Sr[--xr],Sr[xr]=null,$i=Sr[--xr],Sr[xr]=null}var $n=null,Mt=null,rt=!1,qa=null,ai=!1,Cp=Error(i(519));function Ba(r){var s=Error(i(418,""));throw gu(wr(s,r)),Cp}function rv(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[en]=r,s[zt]=u,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<qu.length;o++)Ge(qu[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),xa(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),To(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),Aa(s,u.value,u.defaultValue,u.children),To(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||EE(s.textContent,o)?(u.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),u.onScroll!=null&&Ge("scroll",s),u.onScrollEnd!=null&&Ge("scrollend",s),u.onClick!=null&&(s.onclick=lf),s=!0):s=!1,s||Ba(r)}function iv(r){for($n=r.return;$n;)switch($n.tag){case 5:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:$n=$n.return}}function pu(r){if(r!==$n)return!1;if(!rt)return iv(r),rt=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Fm(r.type,r.memoizedProps)),o=!o),o&&Mt&&Ba(r),iv(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Mt=Lr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Mt=null}}else s===27?(s=Mt,Bs(r.type)?(r=Wm,Wm=null,Mt=r):Mt=s):Mt=$n?Lr(r.stateNode.nextSibling):null;return!0}function mu(){Mt=$n=null,rt=!1}function sv(){var r=qa;return r!==null&&(Kn===null?Kn=r:Kn.push.apply(Kn,r),qa=null),r}function gu(r){qa===null?qa=[r]:qa.push(r)}var Dp=ne(null),za=null,Hi=null;function As(r,s,o){ue(Dp,s._currentValue),s._currentValue=o}function Gi(r){r._currentValue=Dp.current,le(Dp)}function Ip(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function kp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var L=0;L<s.length;L++)if(S.context===s[L]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Ip(m.return,o,r),u||(w=null);break e}m=S.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(i(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),Ip(w,o,r),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===r){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function yu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var S=f.type;nr(f.pendingProps.value,w.value)||(r!==null?r.push(S):r=[S])}}else if(f===_t.current){if(w=f.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(Gu):r=[Gu])}f=f.return}r!==null&&kp(s,r,o,u),s.flags|=262144}function Ch(r){for(r=r.firstContext;r!==null;){if(!nr(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function $a(r){za=r,Hi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function kn(r){return av(za,r)}function Dh(r,s){return za===null&&$a(r),av(r,s)}function av(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Hi===null){if(r===null)throw Error(i(308));Hi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Hi=Hi.next=s;return o}var BA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},zA=t.unstable_scheduleCallback,$A=t.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Op(){return{controller:new BA,data:new Map,refCount:0}}function _u(r){r.refCount--,r.refCount===0&&zA($A,function(){r.controller.abort()})}var vu=null,Mp=0,qo=0,Bo=null;function FA(r,s){if(vu===null){var o=vu=[];Mp=0,qo=Pm(),Bo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Mp++,s.then(ov,ov),s}function ov(){if(--Mp===0&&vu!==null){Bo!==null&&(Bo.status="fulfilled");var r=vu;vu=null,qo=0,Bo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function HA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var lv=k.S;k.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&FA(r,s),lv!==null&&lv(r,s)};var Fa=ne(null);function Np(){var r=Fa.current;return r!==null?r:bt.pooledCache}function Ih(r,s){s===null?ue(Fa,Fa.current):ue(Fa,s.pool)}function uv(){var r=Np();return r===null?null:{parent:rn._currentValue,pool:r}}var Eu=Error(i(460)),cv=Error(i(474)),kh=Error(i(542)),Pp={then:function(){}};function hv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Oh(){}function fv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Oh,Oh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,pv(r),r;default:if(typeof s.status=="string")s.then(Oh,Oh);else{if(r=bt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,pv(r),r}throw bu=s,Eu}}var bu=null;function dv(){if(bu===null)throw Error(i(459));var r=bu;return bu=null,r}function pv(r){if(r===Eu||r===kh)throw Error(i(483))}var Rs=!1;function Vp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Cs(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ds(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ct&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Sh(r),ev(r,null,o),s}return Th(r,u,s,o),Sh(r)}function wu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Ea(r,o)}}function Lp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Up=!1;function Tu(){if(Up){var r=Bo;if(r!==null)throw r}}function Su(r,s,o,u){Up=!1;var f=r.updateQueue;Rs=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var L=S,K=L.next;L.next=null,w===null?m=K:w.next=K,w=L;var ie=r.alternate;ie!==null&&(ie=ie.updateQueue,S=ie.lastBaseUpdate,S!==w&&(S===null?ie.firstBaseUpdate=K:S.next=K,ie.lastBaseUpdate=L))}if(m!==null){var he=f.baseState;w=0,ie=K=L=null,S=m;do{var X=S.lane&-536870913,Z=X!==S.lane;if(Z?(Ze&X)===X:(u&X)===X){X!==0&&X===qo&&(Up=!0),ie!==null&&(ie=ie.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ne=r,Ce=S;X=s;var gt=o;switch(Ce.tag){case 1:if(Ne=Ce.payload,typeof Ne=="function"){he=Ne.call(gt,he,X);break e}he=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Ce.payload,X=typeof Ne=="function"?Ne.call(gt,he,X):Ne,X==null)break e;he=v({},he,X);break e;case 2:Rs=!0}}X=S.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ie===null?(K=ie=Z,L=he):ie=ie.next=Z,w|=X;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Z=S,S=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);ie===null&&(L=he),f.baseState=L,f.firstBaseUpdate=K,f.lastBaseUpdate=ie,m===null&&(f.shared.lanes=0),js|=w,r.lanes=w,r.memoizedState=he}}function mv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function gv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)mv(o[r],s)}var zo=ne(null),Mh=ne(0);function yv(r,s){r=Ji,ue(Mh,r),ue(zo,s),Ji=r|s.baseLanes}function qp(){ue(Mh,Ji),ue(zo,zo.current)}function Bp(){Ji=Mh.current,le(zo),le(Mh)}var Is=0,ze=null,pt=null,Ft=null,Nh=!1,$o=!1,Ha=!1,Ph=0,xu=0,Fo=null,GA=0;function Ut(){throw Error(i(321))}function zp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!nr(r[o],s[o]))return!1;return!0}function $p(r,s,o,u,f,m){return Is=m,ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,k.H=r===null||r.memoizedState===null?e0:t0,Ha=!1,m=o(u,f),Ha=!1,$o&&(m=vv(s,o,u,f)),_v(r),m}function _v(r){k.H=Bh;var s=pt!==null&&pt.next!==null;if(Is=0,Ft=pt=ze=null,Nh=!1,xu=0,Fo=null,s)throw Error(i(300));r===null||dn||(r=r.dependencies,r!==null&&Ch(r)&&(dn=!0))}function vv(r,s,o,u){ze=r;var f=0;do{if($o&&(Fo=null),xu=0,$o=!1,25<=f)throw Error(i(301));if(f+=1,Ft=pt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}k.H=JA,m=s(o,u)}while($o);return m}function YA(){var r=k.H,s=r.useState()[0];return s=typeof s.then=="function"?Au(s):s,r=r.useState()[0],(pt!==null?pt.memoizedState:null)!==r&&(ze.flags|=1024),s}function Fp(){var r=Ph!==0;return Ph=0,r}function Hp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Gp(r){if(Nh){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Nh=!1}Is=0,Ft=pt=ze=null,$o=!1,xu=Ph=0,Fo=null}function Wn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r,Ft}function Ht(){if(pt===null){var r=ze.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=Ft===null?ze.memoizedState:Ft.next;if(s!==null)Ft=s,pt=r;else{if(r===null)throw ze.alternate===null?Error(i(467)):Error(i(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r}return Ft}function Yp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Au(r){var s=xu;return xu+=1,Fo===null&&(Fo=[]),r=fv(Fo,r,s),s=ze,(Ft===null?s.memoizedState:Ft.next)===null&&(s=s.alternate,k.H=s===null||s.memoizedState===null?e0:t0),r}function Vh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Au(r);if(r.$$typeof===P)return kn(r)}throw Error(i(438,String(r)))}function Wp(r){var s=null,o=ze.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=ze.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Yp(),ze.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=U;return s.index++,o}function Yi(r,s){return typeof s=="function"?s(r):s}function jh(r){var s=Ht();return Qp(s,pt,r)}function Qp(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=w=null,L=null,K=s,ie=!1;do{var he=K.lane&-536870913;if(he!==K.lane?(Ze&he)===he:(Is&he)===he){var X=K.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),he===qo&&(ie=!0);else if((Is&X)===X){K=K.next,X===qo&&(ie=!0);continue}else he={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(S=L=he,w=m):L=L.next=he,ze.lanes|=X,js|=X;he=K.action,Ha&&o(m,he),m=K.hasEagerState?K.eagerState:o(m,he)}else X={lane:he,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(S=L=X,w=m):L=L.next=X,ze.lanes|=he,js|=he;K=K.next}while(K!==null&&K!==s);if(L===null?w=m:L.next=S,!nr(m,r.memoizedState)&&(dn=!0,ie&&(o=Bo,o!==null)))throw o;r.memoizedState=m,r.baseState=w,r.baseQueue=L,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Kp(r){var s=Ht(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=r(m,w.action),w=w.next;while(w!==f);nr(m,s.memoizedState)||(dn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function Ev(r,s,o){var u=ze,f=Ht(),m=rt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var w=!nr((pt||f).memoizedState,o);w&&(f.memoizedState=o,dn=!0),f=f.queue;var S=Tv.bind(null,u,f,r);if(Ru(2048,8,S,[r]),f.getSnapshot!==s||w||Ft!==null&&Ft.memoizedState.tag&1){if(u.flags|=2048,Ho(9,Lh(),wv.bind(null,u,f,o,s),null),bt===null)throw Error(i(349));m||(Is&124)!==0||bv(u,s,o)}return o}function bv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=ze.updateQueue,s===null?(s=Yp(),ze.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function wv(r,s,o,u){s.value=o,s.getSnapshot=u,Sv(s)&&xv(r)}function Tv(r,s,o){return o(function(){Sv(s)&&xv(r)})}function Sv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!nr(r,o)}catch{return!0}}function xv(r){var s=Vo(r,2);s!==null&&lr(s,r,2)}function Xp(r){var s=Wn();if(typeof r=="function"){var o=r;if(r=o(),Ha){Un(!0);try{o()}finally{Un(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:r},s}function Av(r,s,o,u){return r.baseState=o,Qp(r,pt,typeof u=="function"?u:Yi)}function WA(r,s,o,u,f){if(qh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};k.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,Rv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function Rv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=k.T,w={};k.T=w;try{var S=o(f,u),L=k.S;L!==null&&L(w,S),Cv(r,s,S)}catch(K){Zp(r,s,K)}finally{k.T=m}}else try{m=o(f,u),Cv(r,s,m)}catch(K){Zp(r,s,K)}}function Cv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Dv(r,s,u)},function(u){return Zp(r,s,u)}):Dv(r,s,o)}function Dv(r,s,o){s.status="fulfilled",s.value=o,Iv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,Rv(r,o)))}function Zp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Iv(s),s=s.next;while(s!==u)}r.action=null}function Iv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function kv(r,s){return s}function Ov(r,s){if(rt){var o=bt.formState;if(o!==null){e:{var u=ze;if(rt){if(Mt){t:{for(var f=Mt,m=ai;f.nodeType!==8;){if(!m){f=null;break t}if(f=Lr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Mt=Lr(f.nextSibling),u=f.data==="F!";break e}}Ba(u)}u=!1}u&&(s=o[0])}}return o=Wn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:s},o.queue=u,o=Xv.bind(null,ze,u),u.dispatch=o,u=Xp(!1),m=rm.bind(null,ze,!1,u.queue),u=Wn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=WA.bind(null,ze,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Mv(r){var s=Ht();return Nv(s,pt,r)}function Nv(r,s,o){if(s=Qp(r,s,kv)[0],r=jh(Yi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Au(s)}catch(w){throw w===Eu?kh:w}else u=s;s=Ht();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ze.flags|=2048,Ho(9,Lh(),QA.bind(null,f,o),null)),[u,m,r]}function QA(r,s){r.action=s}function Pv(r){var s=Ht(),o=pt;if(o!==null)return Nv(s,o,r);Ht(),s=s.memoizedState,o=Ht();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Ho(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=ze.updateQueue,s===null&&(s=Yp(),ze.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Lh(){return{destroy:void 0,resource:void 0}}function Vv(){return Ht().memoizedState}function Uh(r,s,o,u){var f=Wn();u=u===void 0?null:u,ze.flags|=r,f.memoizedState=Ho(1|s,Lh(),o,u)}function Ru(r,s,o,u){var f=Ht();u=u===void 0?null:u;var m=f.memoizedState.inst;pt!==null&&u!==null&&zp(u,pt.memoizedState.deps)?f.memoizedState=Ho(s,m,o,u):(ze.flags|=r,f.memoizedState=Ho(1|s,m,o,u))}function jv(r,s){Uh(8390656,8,r,s)}function Lv(r,s){Ru(2048,8,r,s)}function Uv(r,s){return Ru(4,2,r,s)}function qv(r,s){return Ru(4,4,r,s)}function Bv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zv(r,s,o){o=o!=null?o.concat([r]):null,Ru(4,4,Bv.bind(null,s,r),o)}function Jp(){}function $v(r,s){var o=Ht();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&zp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Fv(r,s){var o=Ht();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&zp(s,u[1]))return u[0];if(u=r(),Ha){Un(!0);try{r()}finally{Un(!1)}}return o.memoizedState=[u,s],u}function em(r,s,o){return o===void 0||(Is&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=Y0(),ze.lanes|=r,js|=r,o)}function Hv(r,s,o,u){return nr(o,s)?o:zo.current!==null?(r=em(r,o,u),nr(r,s)||(dn=!0),r):(Is&42)===0?(dn=!0,r.memoizedState=o):(r=Y0(),ze.lanes|=r,js|=r,s)}function Gv(r,s,o,u,f){var m=J.p;J.p=m!==0&&8>m?m:8;var w=k.T,S={};k.T=S,rm(r,!1,s,o);try{var L=f(),K=k.S;if(K!==null&&K(S,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ie=HA(L,u);Cu(r,s,ie,or(r))}else Cu(r,s,u,or(r))}catch(he){Cu(r,s,{then:function(){},status:"rejected",reason:he},or())}finally{J.p=m,k.T=w}}function KA(){}function tm(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Yv(r).queue;Gv(r,f,s,se,o===null?KA:function(){return Wv(r),o(u)})}function Yv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:se},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Wv(r){var s=Yv(r).next.queue;Cu(r,s,{},or())}function nm(){return kn(Gu)}function Qv(){return Ht().memoizedState}function Kv(){return Ht().memoizedState}function XA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=or();r=Cs(o);var u=Ds(s,r,o);u!==null&&(lr(u,s,o),wu(u,s,o)),s={cache:Op()},r.payload=s;return}s=s.return}}function ZA(r,s,o){var u=or();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},qh(r)?Zv(s,o):(o=wp(r,s,o,u),o!==null&&(lr(o,r,u),Jv(o,s,u)))}function Xv(r,s,o){var u=or();Cu(r,s,o,u)}function Cu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(qh(r))Zv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,S=m(w,o);if(f.hasEagerState=!0,f.eagerState=S,nr(S,w))return Th(r,s,f,0),bt===null&&wh(),!1}catch{}finally{}if(o=wp(r,s,f,u),o!==null)return lr(o,r,u),Jv(o,s,u),!0}return!1}function rm(r,s,o,u){if(u={lane:2,revertLane:Pm(),action:u,hasEagerState:!1,eagerState:null,next:null},qh(r)){if(s)throw Error(i(479))}else s=wp(r,o,u,2),s!==null&&lr(s,r,2)}function qh(r){var s=r.alternate;return r===ze||s!==null&&s===ze}function Zv(r,s){$o=Nh=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Jv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Ea(r,o)}}var Bh={readContext:kn,use:Vh,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut},e0={readContext:kn,use:Vh,useCallback:function(r,s){return Wn().memoizedState=[r,s===void 0?null:s],r},useContext:kn,useEffect:jv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Uh(4194308,4,Bv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Uh(4194308,4,r,s)},useInsertionEffect:function(r,s){Uh(4,2,r,s)},useMemo:function(r,s){var o=Wn();s=s===void 0?null:s;var u=r();if(Ha){Un(!0);try{r()}finally{Un(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Wn();if(o!==void 0){var f=o(s);if(Ha){Un(!0);try{o(s)}finally{Un(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=ZA.bind(null,ze,r),[u.memoizedState,r]},useRef:function(r){var s=Wn();return r={current:r},s.memoizedState=r},useState:function(r){r=Xp(r);var s=r.queue,o=Xv.bind(null,ze,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Jp,useDeferredValue:function(r,s){var o=Wn();return em(o,r,s)},useTransition:function(){var r=Xp(!1);return r=Gv.bind(null,ze,r.queue,!0,!1),Wn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=ze,f=Wn();if(rt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),bt===null)throw Error(i(349));(Ze&124)!==0||bv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,jv(Tv.bind(null,u,m,r),[r]),u.flags|=2048,Ho(9,Lh(),wv.bind(null,u,m,o,s),null),o},useId:function(){var r=Wn(),s=bt.identifierPrefix;if(rt){var o=Fi,u=$i;o=(u&~(1<<32-un(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ph++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=GA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:nm,useFormState:Ov,useActionState:Ov,useOptimistic:function(r){var s=Wn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=rm.bind(null,ze,!0,o),o.dispatch=s,[r,s]},useMemoCache:Wp,useCacheRefresh:function(){return Wn().memoizedState=XA.bind(null,ze)}},t0={readContext:kn,use:Vh,useCallback:$v,useContext:kn,useEffect:Lv,useImperativeHandle:zv,useInsertionEffect:Uv,useLayoutEffect:qv,useMemo:Fv,useReducer:jh,useRef:Vv,useState:function(){return jh(Yi)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=Ht();return Hv(o,pt.memoizedState,r,s)},useTransition:function(){var r=jh(Yi)[0],s=Ht().memoizedState;return[typeof r=="boolean"?r:Au(r),s]},useSyncExternalStore:Ev,useId:Qv,useHostTransitionStatus:nm,useFormState:Mv,useActionState:Mv,useOptimistic:function(r,s){var o=Ht();return Av(o,pt,r,s)},useMemoCache:Wp,useCacheRefresh:Kv},JA={readContext:kn,use:Vh,useCallback:$v,useContext:kn,useEffect:Lv,useImperativeHandle:zv,useInsertionEffect:Uv,useLayoutEffect:qv,useMemo:Fv,useReducer:Kp,useRef:Vv,useState:function(){return Kp(Yi)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=Ht();return pt===null?em(o,r,s):Hv(o,pt.memoizedState,r,s)},useTransition:function(){var r=Kp(Yi)[0],s=Ht().memoizedState;return[typeof r=="boolean"?r:Au(r),s]},useSyncExternalStore:Ev,useId:Qv,useHostTransitionStatus:nm,useFormState:Pv,useActionState:Pv,useOptimistic:function(r,s){var o=Ht();return pt!==null?Av(o,pt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Wp,useCacheRefresh:Kv},Go=null,Du=0;function zh(r){var s=Du;return Du+=1,Go===null&&(Go=[]),fv(Go,r,s)}function Iu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function $h(r,s){throw s.$$typeof===E?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function n0(r){var s=r._init;return s(r._payload)}function r0(r){function s(Y,H){if(r){var Q=Y.deletions;Q===null?(Y.deletions=[H],Y.flags|=16):Q.push(H)}}function o(Y,H){if(!r)return null;for(;H!==null;)s(Y,H),H=H.sibling;return null}function u(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function f(Y,H){return Y=zi(Y,H),Y.index=0,Y.sibling=null,Y}function m(Y,H,Q){return Y.index=Q,r?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<H?(Y.flags|=67108866,H):Q):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function w(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function S(Y,H,Q,ae){return H===null||H.tag!==6?(H=Sp(Q,Y.mode,ae),H.return=Y,H):(H=f(H,Q),H.return=Y,H)}function L(Y,H,Q,ae){var be=Q.type;return be===V?ie(Y,H,Q.props.children,ae,Q.key):H!==null&&(H.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&n0(be)===H.type)?(H=f(H,Q.props),Iu(H,Q),H.return=Y,H):(H=xh(Q.type,Q.key,Q.props,null,Y.mode,ae),Iu(H,Q),H.return=Y,H)}function K(Y,H,Q,ae){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=xp(Q,Y.mode,ae),H.return=Y,H):(H=f(H,Q.children||[]),H.return=Y,H)}function ie(Y,H,Q,ae,be){return H===null||H.tag!==7?(H=ja(Q,Y.mode,ae,be),H.return=Y,H):(H=f(H,Q),H.return=Y,H)}function he(Y,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Sp(""+H,Y.mode,Q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case T:return Q=xh(H.type,H.key,H.props,null,Y.mode,Q),Iu(Q,H),Q.return=Y,Q;case I:return H=xp(H,Y.mode,Q),H.return=Y,H;case R:var ae=H._init;return H=ae(H._payload),he(Y,H,Q)}if(ye(H)||C(H))return H=ja(H,Y.mode,Q,null),H.return=Y,H;if(typeof H.then=="function")return he(Y,zh(H),Q);if(H.$$typeof===P)return he(Y,Dh(Y,H),Q);$h(Y,H)}return null}function X(Y,H,Q,ae){var be=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return be!==null?null:S(Y,H,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:return Q.key===be?L(Y,H,Q,ae):null;case I:return Q.key===be?K(Y,H,Q,ae):null;case R:return be=Q._init,Q=be(Q._payload),X(Y,H,Q,ae)}if(ye(Q)||C(Q))return be!==null?null:ie(Y,H,Q,ae,null);if(typeof Q.then=="function")return X(Y,H,zh(Q),ae);if(Q.$$typeof===P)return X(Y,H,Dh(Y,Q),ae);$h(Y,Q)}return null}function Z(Y,H,Q,ae,be){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return Y=Y.get(Q)||null,S(H,Y,""+ae,be);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case T:return Y=Y.get(ae.key===null?Q:ae.key)||null,L(H,Y,ae,be);case I:return Y=Y.get(ae.key===null?Q:ae.key)||null,K(H,Y,ae,be);case R:var $e=ae._init;return ae=$e(ae._payload),Z(Y,H,Q,ae,be)}if(ye(ae)||C(ae))return Y=Y.get(Q)||null,ie(H,Y,ae,be,null);if(typeof ae.then=="function")return Z(Y,H,Q,zh(ae),be);if(ae.$$typeof===P)return Z(Y,H,Q,Dh(H,ae),be);$h(H,ae)}return null}function Ne(Y,H,Q,ae){for(var be=null,$e=null,Se=H,Ie=H=0,mn=null;Se!==null&&Ie<Q.length;Ie++){Se.index>Ie?(mn=Se,Se=null):mn=Se.sibling;var tt=X(Y,Se,Q[Ie],ae);if(tt===null){Se===null&&(Se=mn);break}r&&Se&&tt.alternate===null&&s(Y,Se),H=m(tt,H,Ie),$e===null?be=tt:$e.sibling=tt,$e=tt,Se=mn}if(Ie===Q.length)return o(Y,Se),rt&&Ua(Y,Ie),be;if(Se===null){for(;Ie<Q.length;Ie++)Se=he(Y,Q[Ie],ae),Se!==null&&(H=m(Se,H,Ie),$e===null?be=Se:$e.sibling=Se,$e=Se);return rt&&Ua(Y,Ie),be}for(Se=u(Se);Ie<Q.length;Ie++)mn=Z(Se,Y,Ie,Q[Ie],ae),mn!==null&&(r&&mn.alternate!==null&&Se.delete(mn.key===null?Ie:mn.key),H=m(mn,H,Ie),$e===null?be=mn:$e.sibling=mn,$e=mn);return r&&Se.forEach(function(Gs){return s(Y,Gs)}),rt&&Ua(Y,Ie),be}function Ce(Y,H,Q,ae){if(Q==null)throw Error(i(151));for(var be=null,$e=null,Se=H,Ie=H=0,mn=null,tt=Q.next();Se!==null&&!tt.done;Ie++,tt=Q.next()){Se.index>Ie?(mn=Se,Se=null):mn=Se.sibling;var Gs=X(Y,Se,tt.value,ae);if(Gs===null){Se===null&&(Se=mn);break}r&&Se&&Gs.alternate===null&&s(Y,Se),H=m(Gs,H,Ie),$e===null?be=Gs:$e.sibling=Gs,$e=Gs,Se=mn}if(tt.done)return o(Y,Se),rt&&Ua(Y,Ie),be;if(Se===null){for(;!tt.done;Ie++,tt=Q.next())tt=he(Y,tt.value,ae),tt!==null&&(H=m(tt,H,Ie),$e===null?be=tt:$e.sibling=tt,$e=tt);return rt&&Ua(Y,Ie),be}for(Se=u(Se);!tt.done;Ie++,tt=Q.next())tt=Z(Se,Y,Ie,tt.value,ae),tt!==null&&(r&&tt.alternate!==null&&Se.delete(tt.key===null?Ie:tt.key),H=m(tt,H,Ie),$e===null?be=tt:$e.sibling=tt,$e=tt);return r&&Se.forEach(function(eC){return s(Y,eC)}),rt&&Ua(Y,Ie),be}function gt(Y,H,Q,ae){if(typeof Q=="object"&&Q!==null&&Q.type===V&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:e:{for(var be=Q.key;H!==null;){if(H.key===be){if(be=Q.type,be===V){if(H.tag===7){o(Y,H.sibling),ae=f(H,Q.props.children),ae.return=Y,Y=ae;break e}}else if(H.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&n0(be)===H.type){o(Y,H.sibling),ae=f(H,Q.props),Iu(ae,Q),ae.return=Y,Y=ae;break e}o(Y,H);break}else s(Y,H);H=H.sibling}Q.type===V?(ae=ja(Q.props.children,Y.mode,ae,Q.key),ae.return=Y,Y=ae):(ae=xh(Q.type,Q.key,Q.props,null,Y.mode,ae),Iu(ae,Q),ae.return=Y,Y=ae)}return w(Y);case I:e:{for(be=Q.key;H!==null;){if(H.key===be)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){o(Y,H.sibling),ae=f(H,Q.children||[]),ae.return=Y,Y=ae;break e}else{o(Y,H);break}else s(Y,H);H=H.sibling}ae=xp(Q,Y.mode,ae),ae.return=Y,Y=ae}return w(Y);case R:return be=Q._init,Q=be(Q._payload),gt(Y,H,Q,ae)}if(ye(Q))return Ne(Y,H,Q,ae);if(C(Q)){if(be=C(Q),typeof be!="function")throw Error(i(150));return Q=be.call(Q),Ce(Y,H,Q,ae)}if(typeof Q.then=="function")return gt(Y,H,zh(Q),ae);if(Q.$$typeof===P)return gt(Y,H,Dh(Y,Q),ae);$h(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(o(Y,H.sibling),ae=f(H,Q),ae.return=Y,Y=ae):(o(Y,H),ae=Sp(Q,Y.mode,ae),ae.return=Y,Y=ae),w(Y)):o(Y,H)}return function(Y,H,Q,ae){try{Du=0;var be=gt(Y,H,Q,ae);return Go=null,be}catch(Se){if(Se===Eu||Se===kh)throw Se;var $e=rr(29,Se,null,Y.mode);return $e.lanes=ae,$e.return=Y,$e}finally{}}}var Yo=r0(!0),i0=r0(!1),Ar=ne(null),oi=null;function ks(r){var s=r.alternate;ue(sn,sn.current&1),ue(Ar,r),oi===null&&(s===null||zo.current!==null||s.memoizedState!==null)&&(oi=r)}function s0(r){if(r.tag===22){if(ue(sn,sn.current),ue(Ar,r),oi===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(oi=r)}}else Os()}function Os(){ue(sn,sn.current),ue(Ar,Ar.current)}function Wi(r){le(Ar),oi===r&&(oi=null),le(sn)}var sn=ne(0);function Fh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ym(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function im(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var sm={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=or(),f=Cs(u);f.payload=s,o!=null&&(f.callback=o),s=Ds(r,f,u),s!==null&&(lr(s,r,u),wu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=or(),f=Cs(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Ds(r,f,u),s!==null&&(lr(s,r,u),wu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=or(),u=Cs(o);u.tag=2,s!=null&&(u.callback=s),s=Ds(r,u,o),s!==null&&(lr(s,r,o),wu(s,r,o))}};function a0(r,s,o,u,f,m,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,w):s.prototype&&s.prototype.isPureReactComponent?!fu(o,u)||!fu(f,m):!0}function o0(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&sm.enqueueReplaceState(s,s.state,null)}function Ga(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Hh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function l0(r){Hh(r)}function u0(r){console.error(r)}function c0(r){Hh(r)}function Gh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function h0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function am(r,s,o){return o=Cs(o),o.tag=3,o.payload={element:null},o.callback=function(){Gh(r,s)},o}function f0(r){return r=Cs(r),r.tag=3,r}function d0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){h0(s,o,u)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(r.callback=function(){h0(s,o,u),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function eR(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&yu(s,o,f,!0),o=Ar.current,o!==null){switch(o.tag){case 13:return oi===null?Im():o.alternate===null&&Nt===0&&(Nt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Pp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Om(r,u,f)),!1;case 22:return o.flags|=65536,u===Pp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Om(r,u,f)),!1}throw Error(i(435,o.tag))}return Om(r,u,f),Im(),!1}if(rt)return s=Ar.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==Cp&&(r=Error(i(422),{cause:u}),gu(wr(r,o)))):(u!==Cp&&(s=Error(i(423),{cause:u}),gu(wr(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=wr(u,o),f=am(r.stateNode,u,f),Lp(r,f),Nt!==4&&(Nt=2)),!1;var m=Error(i(520),{cause:u});if(m=wr(m,o),ju===null?ju=[m]:ju.push(m),Nt!==4&&(Nt=2),s===null)return!0;u=wr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=am(o.stateNode,u,r),Lp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ls===null||!Ls.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=f0(f),d0(f,r,o,u),Lp(o,f),!1}o=o.return}while(o!==null);return!1}var p0=Error(i(461)),dn=!1;function Tn(r,s,o,u){s.child=r===null?i0(s,null,o,u):Yo(s,r.child,o,u)}function m0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var w={};for(var S in u)S!=="ref"&&(w[S]=u[S])}else w=u;return $a(s),u=$p(r,s,o,w,m,f),S=Fp(),r!==null&&!dn?(Hp(r,s,f),Qi(r,s,f)):(rt&&S&&Ap(s),s.flags|=1,Tn(r,s,u,f),s.child)}function g0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!Tp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,y0(r,s,m,u,f)):(r=xh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!pm(r,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:fu,o(w,u)&&r.ref===s.ref)return Qi(r,s,f)}return s.flags|=1,r=zi(m,u),r.ref=s.ref,r.return=s,s.child=r}function y0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(fu(m,u)&&r.ref===s.ref)if(dn=!1,s.pendingProps=u=m,pm(r,f))(r.flags&131072)!==0&&(dn=!0);else return s.lanes=r.lanes,Qi(r,s,f)}return om(r,s,o,u,f)}function _0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return v0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ih(s,m!==null?m.cachePool:null),m!==null?yv(s,m):qp(),s0(s);else return s.lanes=s.childLanes=536870912,v0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Ih(s,m.cachePool),yv(s,m),Os(),s.memoizedState=null):(r!==null&&Ih(s,null),qp(),Os());return Tn(r,s,f,o),s.child}function v0(r,s,o,u){var f=Np();return f=f===null?null:{parent:rn._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Ih(s,null),qp(),s0(s),r!==null&&yu(r,s,u,!0),null}function Yh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function om(r,s,o,u,f){return $a(s),o=$p(r,s,o,u,void 0,f),u=Fp(),r!==null&&!dn?(Hp(r,s,f),Qi(r,s,f)):(rt&&u&&Ap(s),s.flags|=1,Tn(r,s,o,f),s.child)}function E0(r,s,o,u,f,m){return $a(s),s.updateQueue=null,o=vv(s,u,o,f),_v(r),u=Fp(),r!==null&&!dn?(Hp(r,s,m),Qi(r,s,m)):(rt&&u&&Ap(s),s.flags|=1,Tn(r,s,o,m),s.child)}function b0(r,s,o,u,f){if($a(s),s.stateNode===null){var m=jo,w=o.contextType;typeof w=="object"&&w!==null&&(m=kn(w)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Vp(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?kn(w):jo,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(im(s,o,w,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&sm.enqueueReplaceState(m,m.state,null),Su(s,u,m,f),Tu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,L=Ga(o,S);m.props=L;var K=m.context,ie=o.contextType;w=jo,typeof ie=="object"&&ie!==null&&(w=kn(ie));var he=o.getDerivedStateFromProps;ie=typeof he=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||K!==w)&&o0(s,m,u,w),Rs=!1;var X=s.memoizedState;m.state=X,Su(s,u,m,f),Tu(),K=s.memoizedState,S||X!==K||Rs?(typeof he=="function"&&(im(s,o,he,u),K=s.memoizedState),(L=Rs||a0(s,o,L,u,X,K,w))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=K),m.props=u,m.state=K,m.context=w,u=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,jp(r,s),w=s.memoizedProps,ie=Ga(o,w),m.props=ie,he=s.pendingProps,X=m.context,K=o.contextType,L=jo,typeof K=="object"&&K!==null&&(L=kn(K)),S=o.getDerivedStateFromProps,(K=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==he||X!==L)&&o0(s,m,u,L),Rs=!1,X=s.memoizedState,m.state=X,Su(s,u,m,f),Tu();var Z=s.memoizedState;w!==he||X!==Z||Rs||r!==null&&r.dependencies!==null&&Ch(r.dependencies)?(typeof S=="function"&&(im(s,o,S,u),Z=s.memoizedState),(ie=Rs||a0(s,o,ie,u,X,Z,L)||r!==null&&r.dependencies!==null&&Ch(r.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Z,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Z,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),m.props=u,m.state=Z,m.context=L,u=ie):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,Yh(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Yo(s,r.child,null,f),s.child=Yo(s,null,o,f)):Tn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Qi(r,s,f),r}function w0(r,s,o,u){return mu(),s.flags|=256,Tn(r,s,o,u),s.child}var lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function um(r){return{baseLanes:r,cachePool:uv()}}function cm(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=Rr),r}function T0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=r!==null&&r.memoizedState===null?!1:(sn.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,r===null){if(rt){if(f?ks(s):Os(),rt){var S=Mt,L;if(L=S){e:{for(L=S,S=ai;L.nodeType!==8;){if(!S){S=null;break e}if(L=Lr(L.nextSibling),L===null){S=null;break e}}S=L}S!==null?(s.memoizedState={dehydrated:S,treeContext:La!==null?{id:$i,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},L=rr(18,null,null,0),L.stateNode=S,L.return=s,s.child=L,$n=s,Mt=null,L=!0):L=!1}L||Ba(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Ym(S)?s.lanes=32:s.lanes=536870912,null;Wi(s)}return S=u.children,u=u.fallback,f?(Os(),f=s.mode,S=Wh({mode:"hidden",children:S},f),u=ja(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=um(o),f.childLanes=cm(r,w,o),s.memoizedState=lm,u):(ks(s),hm(s,S))}if(L=r.memoizedState,L!==null&&(S=L.dehydrated,S!==null)){if(m)s.flags&256?(ks(s),s.flags&=-257,s=fm(r,s,o)):s.memoizedState!==null?(Os(),s.child=r.child,s.flags|=128,s=null):(Os(),f=u.fallback,S=s.mode,u=Wh({mode:"visible",children:u.children},S),f=ja(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Yo(s,r.child,null,o),u=s.child,u.memoizedState=um(o),u.childLanes=cm(r,w,o),s.memoizedState=lm,s=f);else if(ks(s),Ym(S)){if(w=S.nextSibling&&S.nextSibling.dataset,w)var K=w.dgst;w=K,u=Error(i(419)),u.stack="",u.digest=w,gu({value:u,source:null,stack:null}),s=fm(r,s,o)}else if(dn||yu(r,s,o,!1),w=(o&r.childLanes)!==0,dn||w){if(w=bt,w!==null&&(u=o&-o,u=(u&42)!==0?1:Qr(u),u=(u&(w.suspendedLanes|o))!==0?0:u,u!==0&&u!==L.retryLane))throw L.retryLane=u,Vo(r,u),lr(w,r,u),p0;S.data==="$?"||Im(),s=fm(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Mt=Lr(S.nextSibling),$n=s,rt=!0,qa=null,ai=!1,r!==null&&(Sr[xr++]=$i,Sr[xr++]=Fi,Sr[xr++]=La,$i=r.id,Fi=r.overflow,La=s),s=hm(s,u.children),s.flags|=4096);return s}return f?(Os(),f=u.fallback,S=s.mode,L=r.child,K=L.sibling,u=zi(L,{mode:"hidden",children:u.children}),u.subtreeFlags=L.subtreeFlags&65011712,K!==null?f=zi(K,f):(f=ja(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=um(o):(L=S.cachePool,L!==null?(K=rn._currentValue,L=L.parent!==K?{parent:K,pool:K}:L):L=uv(),S={baseLanes:S.baseLanes|o,cachePool:L}),f.memoizedState=S,f.childLanes=cm(r,w,o),s.memoizedState=lm,u):(ks(s),o=r.child,r=o.sibling,o=zi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(w=s.deletions,w===null?(s.deletions=[r],s.flags|=16):w.push(r)),s.child=o,s.memoizedState=null,o)}function hm(r,s){return s=Wh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Wh(r,s){return r=rr(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function fm(r,s,o){return Yo(s,r.child,null,o),r=hm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function S0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Ip(r.return,s,o)}function dm(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function x0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(Tn(r,s,u.children,o),u=sn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&S0(r,o,s);else if(r.tag===19)S0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ue(sn,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Fh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),dm(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Fh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}dm(s,!0,o,null,m);break;case"together":dm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Qi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),js|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(yu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=zi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=zi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function pm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Ch(r)))}function tR(r,s,o){switch(s.tag){case 3:Fe(s,s.stateNode.containerInfo),As(s,rn,r.memoizedState.cache),mu();break;case 27:case 5:In(s);break;case 4:Fe(s,s.stateNode.containerInfo);break;case 10:As(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(ks(s),s.flags|=128,null):(o&s.child.childLanes)!==0?T0(r,s,o):(ks(s),r=Qi(r,s,o),r!==null?r.sibling:null);ks(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(yu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return x0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ue(sn,sn.current),u)break;return null;case 22:case 23:return s.lanes=0,_0(r,s,o);case 24:As(s,rn,r.memoizedState.cache)}return Qi(r,s,o)}function A0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)dn=!0;else{if(!pm(r,o)&&(s.flags&128)===0)return dn=!1,tR(r,s,o);dn=(r.flags&131072)!==0}else dn=!1,rt&&(s.flags&1048576)!==0&&nv(s,Rh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")Tp(u)?(r=Ga(u,r),s.tag=1,s=b0(null,s,u,r,o)):(s.tag=0,s=om(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===te){s.tag=11,s=m0(null,s,u,r,o);break e}else if(f===D){s.tag=14,s=g0(null,s,u,r,o);break e}}throw s=ce(u)||u,Error(i(306,s,""))}}return s;case 0:return om(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ga(u,s.pendingProps),b0(r,s,u,f,o);case 3:e:{if(Fe(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,jp(r,s),Su(s,u,null,o);var w=s.memoizedState;if(u=w.cache,As(s,rn,u),u!==m.cache&&kp(s,[rn],o,!0),Tu(),u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=w0(r,s,u,o);break e}else if(u!==f){f=wr(Error(i(424)),s),gu(f),s=w0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Mt=Lr(r.firstChild),$n=s,rt=!0,qa=null,ai=!0,o=i0(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(mu(),u===f){s=Qi(r,s,o);break e}Tn(r,s,u,o)}s=s.child}return s;case 26:return Yh(r,s),r===null?(o=IE(s.type,null,s.pendingProps,null))?s.memoizedState=o:rt||(o=s.type,r=s.pendingProps,u=uf(Te.current).createElement(o),u[en]=s,u[zt]=r,xn(u,o,r),Lt(u),s.stateNode=u):s.memoizedState=IE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return In(s),r===null&&rt&&(u=s.stateNode=RE(s.type,s.pendingProps,Te.current),$n=s,ai=!0,f=Mt,Bs(s.type)?(Wm=f,Mt=Lr(u.firstChild)):Mt=f),Tn(r,s,s.pendingProps.children,o),Yh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&rt&&((f=u=Mt)&&(u=DR(u,s.type,s.pendingProps,ai),u!==null?(s.stateNode=u,$n=s,Mt=Lr(u.firstChild),ai=!1,f=!0):f=!1),f||Ba(s)),In(s),f=s.type,m=s.pendingProps,w=r!==null?r.memoizedProps:null,u=m.children,Fm(f,m)?u=null:w!==null&&Fm(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=$p(r,s,YA,null,null,o),Gu._currentValue=f),Yh(r,s),Tn(r,s,u,o),s.child;case 6:return r===null&&rt&&((r=o=Mt)&&(o=IR(o,s.pendingProps,ai),o!==null?(s.stateNode=o,$n=s,Mt=null,r=!0):r=!1),r||Ba(s)),null;case 13:return T0(r,s,o);case 4:return Fe(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Yo(s,null,u,o):Tn(r,s,u,o),s.child;case 11:return m0(r,s,s.type,s.pendingProps,o);case 7:return Tn(r,s,s.pendingProps,o),s.child;case 8:return Tn(r,s,s.pendingProps.children,o),s.child;case 12:return Tn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,As(s,s.type,u.value),Tn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,$a(s),f=kn(f),u=u(f),s.flags|=1,Tn(r,s,u,o),s.child;case 14:return g0(r,s,s.type,s.pendingProps,o);case 15:return y0(r,s,s.type,s.pendingProps,o);case 19:return x0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Wh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=zi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return _0(r,s,o);case 24:return $a(s),u=kn(rn),r===null?(f=Np(),f===null&&(f=bt,m=Op(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Vp(s),As(s,rn,f)):((r.lanes&o)!==0&&(jp(r,s),Su(s,null,null,o),Tu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),As(s,rn,u)):(u=m.cache,As(s,rn,u),u!==f.cache&&kp(s,[rn],o,!0))),Tn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Ki(r){r.flags|=4}function R0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!PE(s)){if(s=Ar.current,s!==null&&((Ze&4194048)===Ze?oi!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||s!==oi))throw bu=Pp,cv;r.flags|=8192}}function Qh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?it():536870912,r.lanes|=s,Xo|=s)}function ku(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function It(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function nR(r,s,o){var u=s.pendingProps;switch(Rp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(s),null;case 1:return It(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Gi(rn),Tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(pu(s)?Ki(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,sv())),It(s),null;case 26:return o=s.memoizedState,r===null?(Ki(s),o!==null?(It(s),R0(s,o)):(It(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Ki(s),It(s),R0(s,o)):(It(s),s.flags&=-16777217):(r.memoizedProps!==u&&Ki(s),It(s),s.flags&=-16777217),null;case 27:ln(s),o=Te.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Ki(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}r=ve.current,pu(s)?rv(s):(r=RE(f,u,o),s.stateNode=r,Ki(s))}return It(s),null;case 5:if(ln(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Ki(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}if(r=ve.current,pu(s))rv(s);else{switch(f=uf(Te.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[en]=s,r[zt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(xn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ki(s)}}return It(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Ki(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=Te.current,pu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=$n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[en]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||EE(r.nodeValue,o)),r||Ba(s)}else r=uf(r).createTextNode(u),r[en]=s,s.stateNode=r}return It(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=pu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[en]=s}else mu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;It(s),f=!1}else f=sv(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Wi(s),s):(Wi(s),null)}if(Wi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Qh(s,s.updateQueue),It(s),null;case 4:return Tt(),r===null&&Um(s.stateNode.containerInfo),It(s),null;case 10:return Gi(s.type),It(s),null;case 19:if(le(sn),f=s.memoizedState,f===null)return It(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)ku(f,!1);else{if(Nt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=Fh(r),m!==null){for(s.flags|=128,ku(f,!1),r=m.updateQueue,s.updateQueue=r,Qh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)tv(o,r),o=o.sibling;return ue(sn,sn.current&1|2),s.child}r=r.sibling}f.tail!==null&&jt()>Zh&&(s.flags|=128,u=!0,ku(f,!1),s.lanes=4194304)}else{if(!u)if(r=Fh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Qh(s,r),ku(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!rt)return It(s),null}else 2*jt()-f.renderingStartTime>Zh&&o!==536870912&&(s.flags|=128,u=!0,ku(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=jt(),s.sibling=null,r=sn.current,ue(sn,u?r&1|2:r&1),s):(It(s),null);case 22:case 23:return Wi(s),Bp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(It(s),s.subtreeFlags&6&&(s.flags|=8192)):It(s),o=s.updateQueue,o!==null&&Qh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&le(Fa),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Gi(rn),It(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function rR(r,s){switch(Rp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Gi(rn),Tt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return ln(s),null;case 13:if(Wi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));mu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(sn),null;case 4:return Tt(),null;case 10:return Gi(s.type),null;case 22:case 23:return Wi(s),Bp(),r!==null&&le(Fa),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Gi(rn),null;case 25:return null;default:return null}}function C0(r,s){switch(Rp(s),s.tag){case 3:Gi(rn),Tt();break;case 26:case 27:case 5:ln(s);break;case 4:Tt();break;case 13:Wi(s);break;case 19:le(sn);break;case 10:Gi(s.type);break;case 22:case 23:Wi(s),Bp(),r!==null&&le(Fa);break;case 24:Gi(rn)}}function Ou(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,w=o.inst;u=m(),w.destroy=u}o=o.next}while(o!==f)}}catch(S){vt(s,s.return,S)}}function Ms(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var w=u.inst,S=w.destroy;if(S!==void 0){w.destroy=void 0,f=s;var L=o,K=S;try{K()}catch(ie){vt(f,L,ie)}}}u=u.next}while(u!==m)}}catch(ie){vt(s,s.return,ie)}}function D0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{gv(s,o)}catch(u){vt(r,r.return,u)}}}function I0(r,s,o){o.props=Ga(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){vt(r,s,u)}}function Mu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){vt(r,s,f)}}function li(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){vt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){vt(r,s,f)}else o.current=null}function k0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){vt(r,r.return,f)}}function mm(r,s,o){try{var u=r.stateNode;SR(u,r.type,o,s),u[zt]=s}catch(f){vt(r,r.return,f)}}function O0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Bs(r.type)||r.tag===4}function gm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||O0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Bs(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ym(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=lf));else if(u!==4&&(u===27&&Bs(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(ym(r,s,o),r=r.sibling;r!==null;)ym(r,s,o),r=r.sibling}function Kh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Bs(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Kh(r,s,o),r=r.sibling;r!==null;)Kh(r,s,o),r=r.sibling}function M0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);xn(s,u,o),s[en]=r,s[zt]=o}catch(m){vt(r,r.return,m)}}var Xi=!1,qt=!1,_m=!1,N0=typeof WeakSet=="function"?WeakSet:Set,pn=null;function iR(r,s){if(r=r.containerInfo,zm=mf,r=H_(r),gp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,S=-1,L=-1,K=0,ie=0,he=r,X=null;t:for(;;){for(var Z;he!==o||f!==0&&he.nodeType!==3||(S=w+f),he!==m||u!==0&&he.nodeType!==3||(L=w+u),he.nodeType===3&&(w+=he.nodeValue.length),(Z=he.firstChild)!==null;)X=he,he=Z;for(;;){if(he===r)break t;if(X===o&&++K===f&&(S=w),X===m&&++ie===u&&(L=w),(Z=he.nextSibling)!==null)break;he=X,X=he.parentNode}he=Z}o=S===-1||L===-1?null:{start:S,end:L}}else o=null}o=o||{start:0,end:0}}else o=null;for($m={focusedElem:r,selectionRange:o},mf=!1,pn=s;pn!==null;)if(s=pn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,pn=r;else for(;pn!==null;){switch(s=pn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ne=Ga(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ne,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ce){vt(o,o.return,Ce)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Gm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,pn=r;break}pn=s.return}}function P0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ns(r,o),u&4&&Ou(5,o);break;case 1:if(Ns(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(w){vt(o,o.return,w)}else{var f=Ga(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(w){vt(o,o.return,w)}}u&64&&D0(o),u&512&&Mu(o,o.return);break;case 3:if(Ns(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{gv(r,s)}catch(w){vt(o,o.return,w)}}break;case 27:s===null&&u&4&&M0(o);case 26:case 5:Ns(r,o),s===null&&u&4&&k0(o),u&512&&Mu(o,o.return);break;case 12:Ns(r,o);break;case 13:Ns(r,o),u&4&&L0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=dR.bind(null,o),kR(r,o))));break;case 22:if(u=o.memoizedState!==null||Xi,!u){s=s!==null&&s.memoizedState!==null||qt,f=Xi;var m=qt;Xi=u,(qt=s)&&!m?Ps(r,o,(o.subtreeFlags&8772)!==0):Ns(r,o),Xi=f,qt=m}break;case 30:break;default:Ns(r,o)}}function V0(r){var s=r.alternate;s!==null&&(r.alternate=null,V0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&ws(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Rt=null,Qn=!1;function Zi(r,s,o){for(o=o.child;o!==null;)j0(r,s,o),o=o.sibling}function j0(r,s,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(xt,o)}catch{}switch(o.tag){case 26:qt||li(o,s),Zi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:qt||li(o,s);var u=Rt,f=Qn;Bs(o.type)&&(Rt=o.stateNode,Qn=!1),Zi(r,s,o),zu(o.stateNode),Rt=u,Qn=f;break;case 5:qt||li(o,s);case 6:if(u=Rt,f=Qn,Rt=null,Zi(r,s,o),Rt=u,Qn=f,Rt!==null)if(Qn)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(o.stateNode)}catch(m){vt(o,s,m)}else try{Rt.removeChild(o.stateNode)}catch(m){vt(o,s,m)}break;case 18:Rt!==null&&(Qn?(r=Rt,xE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Ku(r)):xE(Rt,o.stateNode));break;case 4:u=Rt,f=Qn,Rt=o.stateNode.containerInfo,Qn=!0,Zi(r,s,o),Rt=u,Qn=f;break;case 0:case 11:case 14:case 15:qt||Ms(2,o,s),qt||Ms(4,o,s),Zi(r,s,o);break;case 1:qt||(li(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&I0(o,s,u)),Zi(r,s,o);break;case 21:Zi(r,s,o);break;case 22:qt=(u=qt)||o.memoizedState!==null,Zi(r,s,o),qt=u;break;default:Zi(r,s,o)}}function L0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Ku(r)}catch(o){vt(s,s.return,o)}}function sR(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new N0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new N0),s;default:throw Error(i(435,r.tag))}}function vm(r,s){var o=sR(r);s.forEach(function(u){var f=pR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function ir(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,w=s,S=w;e:for(;S!==null;){switch(S.tag){case 27:if(Bs(S.type)){Rt=S.stateNode,Qn=!1;break e}break;case 5:Rt=S.stateNode,Qn=!1;break e;case 3:case 4:Rt=S.stateNode.containerInfo,Qn=!0;break e}S=S.return}if(Rt===null)throw Error(i(160));j0(m,w,f),Rt=null,Qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)U0(s,r),s=s.sibling}var jr=null;function U0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:ir(s,r),sr(r),u&4&&(Ms(3,r,r.return),Ou(3,r),Ms(5,r,r.return));break;case 1:ir(s,r),sr(r),u&512&&(qt||o===null||li(o,o.return)),u&64&&Xi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=jr;if(ir(s,r),sr(r),u&512&&(qt||o===null||li(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ba]||m[en]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),xn(m,u,o),m[en]=r,Lt(m),u=m;break e;case"link":var w=ME("link","href",f).get(u+(o.href||""));if(w){for(var S=0;S<w.length;S++)if(m=w[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(S,1);break t}}m=f.createElement(u),xn(m,u,o),f.head.appendChild(m);break;case"meta":if(w=ME("meta","content",f).get(u+(o.content||""))){for(S=0;S<w.length;S++)if(m=w[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(S,1);break t}}m=f.createElement(u),xn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[en]=r,Lt(m),u=m}r.stateNode=u}else NE(f,r.type,r.stateNode);else r.stateNode=OE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?NE(f,r.type,r.stateNode):OE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&mm(r,r.memoizedProps,o.memoizedProps)}break;case 27:ir(s,r),sr(r),u&512&&(qt||o===null||li(o,o.return)),o!==null&&u&4&&mm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(ir(s,r),sr(r),u&512&&(qt||o===null||li(o,o.return)),r.flags&32){f=r.stateNode;try{_r(f,"")}catch(Z){vt(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,mm(r,f,o!==null?o.memoizedProps:f)),u&1024&&(_m=!0);break;case 6:if(ir(s,r),sr(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){vt(r,r.return,Z)}}break;case 3:if(ff=null,f=jr,jr=cf(s.containerInfo),ir(s,r),jr=f,sr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ku(s.containerInfo)}catch(Z){vt(r,r.return,Z)}_m&&(_m=!1,q0(r));break;case 4:u=jr,jr=cf(r.stateNode.containerInfo),ir(s,r),sr(r),jr=u;break;case 12:ir(s,r),sr(r);break;case 13:ir(s,r),sr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(xm=jt()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,vm(r,u)));break;case 22:f=r.memoizedState!==null;var L=o!==null&&o.memoizedState!==null,K=Xi,ie=qt;if(Xi=K||f,qt=ie||L,ir(s,r),qt=ie,Xi=K,sr(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||L||Xi||qt||Ya(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){L=o=s;try{if(m=L.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{S=L.stateNode;var he=L.memoizedProps.style,X=he!=null&&he.hasOwnProperty("display")?he.display:null;S.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){vt(L,L.return,Z)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=f?"":L.memoizedProps}catch(Z){vt(L,L.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,vm(r,o))));break;case 19:ir(s,r),sr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,vm(r,u)));break;case 30:break;case 21:break;default:ir(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(O0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=gm(r);Kh(r,m,f);break;case 5:var w=o.stateNode;o.flags&32&&(_r(w,""),o.flags&=-33);var S=gm(r);Kh(r,S,w);break;case 3:case 4:var L=o.stateNode.containerInfo,K=gm(r);ym(r,K,L);break;default:throw Error(i(161))}}catch(ie){vt(r,r.return,ie)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function q0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;q0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ns(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)P0(r,s.alternate,s),s=s.sibling}function Ya(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Ms(4,s,s.return),Ya(s);break;case 1:li(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&I0(s,s.return,o),Ya(s);break;case 27:zu(s.stateNode);case 26:case 5:li(s,s.return),Ya(s);break;case 22:s.memoizedState===null&&Ya(s);break;case 30:Ya(s);break;default:Ya(s)}r=r.sibling}}function Ps(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:Ps(f,m,o),Ou(4,m);break;case 1:if(Ps(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){vt(u,u.return,K)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var L=f.shared.hiddenCallbacks;if(L!==null)for(f.shared.hiddenCallbacks=null,f=0;f<L.length;f++)mv(L[f],S)}catch(K){vt(u,u.return,K)}}o&&w&64&&D0(m),Mu(m,m.return);break;case 27:M0(m);case 26:case 5:Ps(f,m,o),o&&u===null&&w&4&&k0(m),Mu(m,m.return);break;case 12:Ps(f,m,o);break;case 13:Ps(f,m,o),o&&w&4&&L0(f,m);break;case 22:m.memoizedState===null&&Ps(f,m,o),Mu(m,m.return);break;case 30:break;default:Ps(f,m,o)}s=s.sibling}}function Em(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&_u(o))}function bm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&_u(r))}function ui(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)B0(r,s,o,u),s=s.sibling}function B0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ui(r,s,o,u),f&2048&&Ou(9,s);break;case 1:ui(r,s,o,u);break;case 3:ui(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&_u(r)));break;case 12:if(f&2048){ui(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,w=m.id,S=m.onPostCommit;typeof S=="function"&&S(w,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){vt(s,s.return,L)}}else ui(r,s,o,u);break;case 13:ui(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?ui(r,s,o,u):Nu(r,s):m._visibility&2?ui(r,s,o,u):(m._visibility|=2,Wo(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&Em(w,s);break;case 24:ui(r,s,o,u),f&2048&&bm(s.alternate,s);break;default:ui(r,s,o,u)}}function Wo(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,w=s,S=o,L=u,K=w.flags;switch(w.tag){case 0:case 11:case 15:Wo(m,w,S,L,f),Ou(8,w);break;case 23:break;case 22:var ie=w.stateNode;w.memoizedState!==null?ie._visibility&2?Wo(m,w,S,L,f):Nu(m,w):(ie._visibility|=2,Wo(m,w,S,L,f)),f&&K&2048&&Em(w.alternate,w);break;case 24:Wo(m,w,S,L,f),f&&K&2048&&bm(w.alternate,w);break;default:Wo(m,w,S,L,f)}s=s.sibling}}function Nu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Nu(o,u),f&2048&&Em(u.alternate,u);break;case 24:Nu(o,u),f&2048&&bm(u.alternate,u);break;default:Nu(o,u)}s=s.sibling}}var Pu=8192;function Qo(r){if(r.subtreeFlags&Pu)for(r=r.child;r!==null;)z0(r),r=r.sibling}function z0(r){switch(r.tag){case 26:Qo(r),r.flags&Pu&&r.memoizedState!==null&&FR(jr,r.memoizedState,r.memoizedProps);break;case 5:Qo(r);break;case 3:case 4:var s=jr;jr=cf(r.stateNode.containerInfo),Qo(r),jr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Pu,Pu=16777216,Qo(r),Pu=s):Qo(r));break;default:Qo(r)}}function $0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Vu(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];pn=u,H0(u,r)}$0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)F0(r),r=r.sibling}function F0(r){switch(r.tag){case 0:case 11:case 15:Vu(r),r.flags&2048&&Ms(9,r,r.return);break;case 3:Vu(r);break;case 12:Vu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Xh(r)):Vu(r);break;default:Vu(r)}}function Xh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];pn=u,H0(u,r)}$0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Ms(8,s,s.return),Xh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Xh(s));break;default:Xh(s)}r=r.sibling}}function H0(r,s){for(;pn!==null;){var o=pn;switch(o.tag){case 0:case 11:case 15:Ms(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:_u(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,pn=u;else e:for(o=r;pn!==null;){u=pn;var f=u.sibling,m=u.return;if(V0(u),u===o){pn=null;break e}if(f!==null){f.return=m,pn=f;break e}pn=m}}}var aR={getCacheForType:function(r){var s=kn(rn),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},oR=typeof WeakMap=="function"?WeakMap:Map,ct=0,bt=null,He=null,Ze=0,ht=0,ar=null,Vs=!1,Ko=!1,wm=!1,Ji=0,Nt=0,js=0,Wa=0,Tm=0,Rr=0,Xo=0,ju=null,Kn=null,Sm=!1,xm=0,Zh=1/0,Jh=null,Ls=null,Sn=0,Us=null,Zo=null,Jo=0,Am=0,Rm=null,G0=null,Lu=0,Cm=null;function or(){if((ct&2)!==0&&Ze!==0)return Ze&-Ze;if(k.T!==null){var r=qo;return r!==0?r:Pm()}return gr()}function Y0(){Rr===0&&(Rr=(Ze&536870912)===0||rt?je():536870912);var r=Ar.current;return r!==null&&(r.flags|=32),Rr}function lr(r,s,o){(r===bt&&(ht===2||ht===9)||r.cancelPendingCommit!==null)&&(el(r,0),qs(r,Ze,Rr,!1)),et(r,o),((ct&2)===0||r!==bt)&&(r===bt&&((ct&2)===0&&(Wa|=o),Nt===4&&qs(r,Ze,Rr,!1)),ci(r))}function W0(r,s,o){if((ct&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||ki(r,s),f=u?cR(r,s):km(r,s,!0),m=u;do{if(f===0){Ko&&!u&&qs(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!lR(o)){f=km(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var S=r;f=ju;var L=S.current.memoizedState.isDehydrated;if(L&&(el(S,w).flags|=256),w=km(S,w,!1),w!==2){if(wm&&!L){S.errorRecoveryDisabledLanes|=m,Wa|=m,f=4;break e}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){el(r,0),qs(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:qs(u,s,Rr,!Vs);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=xm+300-jt(),10<f)){if(qs(u,s,Rr,!Vs),Ii(u,0,!0)!==0)break e;u.timeoutHandle=TE(Q0.bind(null,u,o,Kn,Jh,Sm,s,Rr,Wa,Xo,Vs,m,2,-0,0),f);break e}Q0(u,o,Kn,Jh,Sm,s,Rr,Wa,Xo,Vs,m,0,-0,0)}}break}while(!0);ci(r)}function Q0(r,s,o,u,f,m,w,S,L,K,ie,he,X,Z){if(r.timeoutHandle=-1,he=s.subtreeFlags,(he&8192||(he&16785408)===16785408)&&(Hu={stylesheets:null,count:0,unsuspend:$R},z0(s),he=HR(),he!==null)){r.cancelPendingCommit=he(nE.bind(null,r,s,m,o,u,f,w,S,L,ie,1,X,Z)),qs(r,m,w,!K);return}nE(r,s,m,o,u,f,w,S,L)}function lR(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!nr(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qs(r,s,o,u){s&=~Tm,s&=~Wa,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-un(f),w=1<<m;u[m]=-1,f&=~w}o!==0&&Ue(r,o,s)}function ef(){return(ct&6)===0?(Uu(0),!1):!0}function Dm(){if(He!==null){if(ht===0)var r=He.return;else r=He,Hi=za=null,Gp(r),Go=null,Du=0,r=He;for(;r!==null;)C0(r.alternate,r),r=r.return;He=null}}function el(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,AR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Dm(),bt=r,He=o=zi(r.current,null),Ze=s,ht=0,ar=null,Vs=!1,Ko=ki(r,s),wm=!1,Xo=Rr=Tm=Wa=js=Nt=0,Kn=ju=null,Sm=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-un(u),m=1<<f;s|=r[f],u&=~m}return Ji=s,wh(),o}function K0(r,s){ze=null,k.H=Bh,s===Eu||s===kh?(s=dv(),ht=3):s===cv?(s=dv(),ht=4):ht=s===p0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ar=s,He===null&&(Nt=1,Gh(r,wr(s,r.current)))}function X0(){var r=k.H;return k.H=Bh,r===null?Bh:r}function Z0(){var r=k.A;return k.A=aR,r}function Im(){Nt=4,Vs||(Ze&4194048)!==Ze&&Ar.current!==null||(Ko=!0),(js&134217727)===0&&(Wa&134217727)===0||bt===null||qs(bt,Ze,Rr,!1)}function km(r,s,o){var u=ct;ct|=2;var f=X0(),m=Z0();(bt!==r||Ze!==s)&&(Jh=null,el(r,s)),s=!1;var w=Nt;e:do try{if(ht!==0&&He!==null){var S=He,L=ar;switch(ht){case 8:Dm(),w=6;break e;case 3:case 2:case 9:case 6:Ar.current===null&&(s=!0);var K=ht;if(ht=0,ar=null,tl(r,S,L,K),o&&Ko){w=0;break e}break;default:K=ht,ht=0,ar=null,tl(r,S,L,K)}}uR(),w=Nt;break}catch(ie){K0(r,ie)}while(!0);return s&&r.shellSuspendCounter++,Hi=za=null,ct=u,k.H=f,k.A=m,He===null&&(bt=null,Ze=0,wh()),w}function uR(){for(;He!==null;)J0(He)}function cR(r,s){var o=ct;ct|=2;var u=X0(),f=Z0();bt!==r||Ze!==s?(Jh=null,Zh=jt()+500,el(r,s)):Ko=ki(r,s);e:do try{if(ht!==0&&He!==null){s=He;var m=ar;t:switch(ht){case 1:ht=0,ar=null,tl(r,s,m,1);break;case 2:case 9:if(hv(m)){ht=0,ar=null,eE(s);break}s=function(){ht!==2&&ht!==9||bt!==r||(ht=7),ci(r)},m.then(s,s);break e;case 3:ht=7;break e;case 4:ht=5;break e;case 7:hv(m)?(ht=0,ar=null,eE(s)):(ht=0,ar=null,tl(r,s,m,7));break;case 5:var w=null;switch(He.tag){case 26:w=He.memoizedState;case 5:case 27:var S=He;if(!w||PE(w)){ht=0,ar=null;var L=S.sibling;if(L!==null)He=L;else{var K=S.return;K!==null?(He=K,tf(K)):He=null}break t}}ht=0,ar=null,tl(r,s,m,5);break;case 6:ht=0,ar=null,tl(r,s,m,6);break;case 8:Dm(),Nt=6;break e;default:throw Error(i(462))}}hR();break}catch(ie){K0(r,ie)}while(!0);return Hi=za=null,k.H=u,k.A=f,ct=o,He!==null?0:(bt=null,Ze=0,wh(),Nt)}function hR(){for(;He!==null&&!Le();)J0(He)}function J0(r){var s=A0(r.alternate,r,Ji);r.memoizedProps=r.pendingProps,s===null?tf(r):He=s}function eE(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=E0(o,s,s.pendingProps,s.type,void 0,Ze);break;case 11:s=E0(o,s,s.pendingProps,s.type.render,s.ref,Ze);break;case 5:Gp(s);default:C0(o,s),s=He=tv(s,Ji),s=A0(o,s,Ji)}r.memoizedProps=r.pendingProps,s===null?tf(r):He=s}function tl(r,s,o,u){Hi=za=null,Gp(s),Go=null,Du=0;var f=s.return;try{if(eR(r,f,s,o,Ze)){Nt=1,Gh(r,wr(o,r.current)),He=null;return}}catch(m){if(f!==null)throw He=f,m;Nt=1,Gh(r,wr(o,r.current)),He=null;return}s.flags&32768?(rt||u===1?r=!0:Ko||(Ze&536870912)!==0?r=!1:(Vs=r=!0,(u===2||u===9||u===3||u===6)&&(u=Ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),tE(s,r)):tf(s)}function tf(r){var s=r;do{if((s.flags&32768)!==0){tE(s,Vs);return}r=s.return;var o=nR(s.alternate,s,Ji);if(o!==null){He=o;return}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Nt===0&&(Nt=5)}function tE(r,s){do{var o=rR(r.alternate,r);if(o!==null){o.flags&=32767,He=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){He=r;return}He=r=o}while(r!==null);Nt=6,He=null}function nE(r,s,o,u,f,m,w,S,L){r.cancelPendingCommit=null;do nf();while(Sn!==0);if((ct&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=bp,cn(r,o,m,w,S,L),r===bt&&(He=bt=null,Ze=0),Zo=s,Us=r,Jo=o,Am=m,Rm=f,G0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,mR(Jn,function(){return oE(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=k.T,k.T=null,f=J.p,J.p=2,w=ct,ct|=4;try{iR(r,s,o)}finally{ct=w,J.p=f,k.T=u}}Sn=1,rE(),iE(),sE()}}function rE(){if(Sn===1){Sn=0;var r=Us,s=Zo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=k.T,k.T=null;var u=J.p;J.p=2;var f=ct;ct|=4;try{U0(s,r);var m=$m,w=H_(r.containerInfo),S=m.focusedElem,L=m.selectionRange;if(w!==S&&S&&S.ownerDocument&&F_(S.ownerDocument.documentElement,S)){if(L!==null&&gp(S)){var K=L.start,ie=L.end;if(ie===void 0&&(ie=K),"selectionStart"in S)S.selectionStart=K,S.selectionEnd=Math.min(ie,S.value.length);else{var he=S.ownerDocument||document,X=he&&he.defaultView||window;if(X.getSelection){var Z=X.getSelection(),Ne=S.textContent.length,Ce=Math.min(L.start,Ne),gt=L.end===void 0?Ce:Math.min(L.end,Ne);!Z.extend&&Ce>gt&&(w=gt,gt=Ce,Ce=w);var Y=$_(S,Ce),H=$_(S,gt);if(Y&&H&&(Z.rangeCount!==1||Z.anchorNode!==Y.node||Z.anchorOffset!==Y.offset||Z.focusNode!==H.node||Z.focusOffset!==H.offset)){var Q=he.createRange();Q.setStart(Y.node,Y.offset),Z.removeAllRanges(),Ce>gt?(Z.addRange(Q),Z.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),Z.addRange(Q))}}}}for(he=[],Z=S;Z=Z.parentNode;)Z.nodeType===1&&he.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<he.length;S++){var ae=he[S];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}mf=!!zm,$m=zm=null}finally{ct=f,J.p=u,k.T=o}}r.current=s,Sn=2}}function iE(){if(Sn===2){Sn=0;var r=Us,s=Zo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=k.T,k.T=null;var u=J.p;J.p=2;var f=ct;ct|=4;try{P0(r,s.alternate,s)}finally{ct=f,J.p=u,k.T=o}}Sn=3}}function sE(){if(Sn===4||Sn===3){Sn=0,ut();var r=Us,s=Zo,o=Jo,u=G0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Sn=5:(Sn=0,Zo=Us=null,aE(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ls=null),vs(o),s=s.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(xt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=k.T,f=J.p,J.p=2,k.T=null;try{for(var m=r.onRecoverableError,w=0;w<u.length;w++){var S=u[w];m(S.value,{componentStack:S.stack})}}finally{k.T=s,J.p=f}}(Jo&3)!==0&&nf(),ci(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===Cm?Lu++:(Lu=0,Cm=r):Lu=0,Uu(0)}}function aE(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,_u(s)))}function nf(r){return rE(),iE(),sE(),oE()}function oE(){if(Sn!==5)return!1;var r=Us,s=Am;Am=0;var o=vs(Jo),u=k.T,f=J.p;try{J.p=32>o?32:o,k.T=null,o=Rm,Rm=null;var m=Us,w=Jo;if(Sn=0,Zo=Us=null,Jo=0,(ct&6)!==0)throw Error(i(331));var S=ct;if(ct|=4,F0(m.current),B0(m,m.current,w,o),ct=S,Uu(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(xt,m)}catch{}return!0}finally{J.p=f,k.T=u,aE(r,s)}}function lE(r,s,o){s=wr(o,s),s=am(r.stateNode,s,2),r=Ds(r,s,2),r!==null&&(et(r,2),ci(r))}function vt(r,s,o){if(r.tag===3)lE(r,r,o);else for(;s!==null;){if(s.tag===3){lE(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ls===null||!Ls.has(u))){r=wr(o,r),o=f0(2),u=Ds(s,o,2),u!==null&&(d0(o,u,s,r),et(u,2),ci(u));break}}s=s.return}}function Om(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new oR;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(wm=!0,f.add(o),r=fR.bind(null,r,s,o),s.then(r,r))}function fR(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,bt===r&&(Ze&o)===o&&(Nt===4||Nt===3&&(Ze&62914560)===Ze&&300>jt()-xm?(ct&2)===0&&el(r,0):Tm|=o,Xo===Ze&&(Xo=0)),ci(r)}function uE(r,s){s===0&&(s=it()),r=Vo(r,s),r!==null&&(et(r,s),ci(r))}function dR(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),uE(r,o)}function pR(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),uE(r,o)}function mR(r,s){return De(r,s)}var rf=null,nl=null,Mm=!1,sf=!1,Nm=!1,Qa=0;function ci(r){r!==nl&&r.next===null&&(nl===null?rf=nl=r:nl=nl.next=r),sf=!0,Mm||(Mm=!0,yR())}function Uu(r,s){if(!Nm&&sf){Nm=!0;do for(var o=!1,u=rf;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var w=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-un(42|r)+1)-1,m&=f&~(w&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,dE(u,m))}else m=Ze,m=Ii(u,u===bt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||ki(u,m)||(o=!0,dE(u,m));u=u.next}while(o);Nm=!1}}function gR(){cE()}function cE(){sf=Mm=!1;var r=0;Qa!==0&&(xR()&&(r=Qa),Qa=0);for(var s=jt(),o=null,u=rf;u!==null;){var f=u.next,m=hE(u,s);m===0?(u.next=null,o===null?rf=f:o.next=f,f===null&&(nl=o)):(o=u,(r!==0||(m&3)!==0)&&(sf=!0)),u=f}Uu(r)}function hE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var w=31-un(m),S=1<<w,L=f[w];L===-1?((S&o)===0||(S&u)!==0)&&(f[w]=_s(S,s)):L<=s&&(r.expiredLanes|=S),m&=~S}if(s=bt,o=Ze,o=Ii(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(ht===2||ht===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&we(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||ki(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&we(u),vs(o)){case 2:case 8:o=Yn;break;case 32:o=Jn;break;case 268435456:o=Wr;break;default:o=Jn}return u=fE.bind(null,r),o=De(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&we(u),r.callbackPriority=2,r.callbackNode=null,2}function fE(r,s){if(Sn!==0&&Sn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(nf()&&r.callbackNode!==o)return null;var u=Ze;return u=Ii(r,r===bt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(W0(r,u,s),hE(r,jt()),r.callbackNode!=null&&r.callbackNode===o?fE.bind(null,r):null)}function dE(r,s){if(nf())return null;W0(r,s,!0)}function yR(){RR(function(){(ct&6)!==0?De(mr,gR):cE()})}function Pm(){return Qa===0&&(Qa=je()),Qa}function pE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:So(""+r)}function mE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function _R(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=pE((f[zt]||null).action),w=u.submitter;w&&(s=(s=w[zt]||null)?pE(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var S=new xo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Qa!==0){var L=w?mE(f,w):new FormData(f);tm(o,{pending:!0,data:L,method:f.method,action:m},null,L)}}else typeof m=="function"&&(S.preventDefault(),L=w?mE(f,w):new FormData(f),tm(o,{pending:!0,data:L,method:f.method,action:m},m,L))},currentTarget:f}]})}}for(var Vm=0;Vm<Ep.length;Vm++){var jm=Ep[Vm],vR=jm.toLowerCase(),ER=jm[0].toUpperCase()+jm.slice(1);Vr(vR,"on"+ER)}Vr(W_,"onAnimationEnd"),Vr(Q_,"onAnimationIteration"),Vr(K_,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(jA,"onTransitionRun"),Vr(LA,"onTransitionStart"),Vr(UA,"onTransitionCancel"),Vr(X_,"onTransitionEnd"),Mi("onMouseEnter",["mouseout","mouseover"]),Mi("onMouseLeave",["mouseout","mouseover"]),Mi("onPointerEnter",["pointerout","pointerover"]),Mi("onPointerLeave",["pointerout","pointerover"]),Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu));function gE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var w=u.length-1;0<=w;w--){var S=u[w],L=S.instance,K=S.currentTarget;if(S=S.listener,L!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){Hh(ie)}f.currentTarget=null,m=L}else for(w=0;w<u.length;w++){if(S=u[w],L=S.instance,K=S.currentTarget,S=S.listener,L!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){Hh(ie)}f.currentTarget=null,m=L}}}}function Ge(r,s){var o=s[Xl];o===void 0&&(o=s[Xl]=new Set);var u=r+"__bubble";o.has(u)||(yE(s,r,2,!1),o.add(u))}function Lm(r,s,o){var u=0;s&&(u|=4),yE(o,r,u,s)}var af="_reactListening"+Math.random().toString(36).slice(2);function Um(r){if(!r[af]){r[af]=!0,Zl.forEach(function(o){o!=="selectionchange"&&(bR.has(o)||Lm(o,!1,r),Lm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[af]||(s[af]=!0,Lm("selectionchange",!1,s))}}function yE(r,s,o,u){switch(BE(s)){case 2:var f=WR;break;case 8:f=QR;break;default:f=Jm}o=f.bind(null,s,o,r),f=void 0,!Er||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function qm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var S=u.stateNode.containerInfo;if(S===f)break;if(w===4)for(w=u.return;w!==null;){var L=w.tag;if((L===3||L===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;S!==null;){if(w=Oi(S),w===null)return;if(L=w.tag,L===5||L===6||L===26||L===27){u=m=w;continue e}S=S.parentNode}}u=u.return}oh(function(){var K=m,ie=vr(o),he=[];e:{var X=Z_.get(r);if(X!==void 0){var Z=xo,Ne=r;switch(r){case"keypress":if(ti(o)===0)break e;case"keydown":case"keyup":Z=ko;break;case"focusin":Ne="focus",Z=Co;break;case"focusout":Ne="blur",Z=Co;break;case"beforeblur":case"afterblur":Z=Co;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=mh;break;case W_:case Q_:case K_:Z=Do;break;case X_:Z=yh;break;case"scroll":case"scrollend":Z=lh;break;case"wheel":Z=Oo;break;case"copy":case"cut":case"paste":Z=Io;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=cu;break;case"toggle":case"beforetoggle":Z=vh}var Ce=(s&4)!==0,gt=!Ce&&(r==="scroll"||r==="scrollend"),Y=Ce?X!==null?X+"Capture":null:X;Ce=[];for(var H=K,Q;H!==null;){var ae=H;if(Q=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||Q===null||Y===null||(ae=Ca(H,Y),ae!=null&&Ce.push(Bu(H,ae,Q))),gt)break;H=H.return}0<Ce.length&&(X=new Z(X,Ne,null,o,ie),he.push({event:X,listeners:Ce}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&o!==Vi&&(Ne=o.relatedTarget||o.fromElement)&&(Oi(Ne)||Ne[yr]))break e;if((Z||X)&&(X=ie.window===ie?ie:(X=ie.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(Ne=o.relatedTarget||o.toElement,Z=K,Ne=Ne?Oi(Ne):null,Ne!==null&&(gt=l(Ne),Ce=Ne.tag,Ne!==gt||Ce!==5&&Ce!==27&&Ce!==6)&&(Ne=null)):(Z=null,Ne=K),Z!==Ne)){if(Ce=br,ae="onMouseLeave",Y="onMouseEnter",H="mouse",(r==="pointerout"||r==="pointerover")&&(Ce=cu,ae="onPointerLeave",Y="onPointerEnter",H="pointer"),gt=Z==null?X:Xr(Z),Q=Ne==null?X:Xr(Ne),X=new Ce(ae,H+"leave",Z,o,ie),X.target=gt,X.relatedTarget=Q,ae=null,Oi(ie)===K&&(Ce=new Ce(Y,H+"enter",Ne,o,ie),Ce.target=Q,Ce.relatedTarget=gt,ae=Ce),gt=ae,Z&&Ne)t:{for(Ce=Z,Y=Ne,H=0,Q=Ce;Q;Q=rl(Q))H++;for(Q=0,ae=Y;ae;ae=rl(ae))Q++;for(;0<H-Q;)Ce=rl(Ce),H--;for(;0<Q-H;)Y=rl(Y),Q--;for(;H--;){if(Ce===Y||Y!==null&&Ce===Y.alternate)break t;Ce=rl(Ce),Y=rl(Y)}Ce=null}else Ce=null;Z!==null&&_E(he,X,Z,Ce,!1),Ne!==null&&gt!==null&&_E(he,gt,Ne,Ce,!0)}}e:{if(X=K?Xr(K):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var be=j_;else if(nn(X))if(L_)be=NA;else{be=OA;var $e=kA}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?K&&ru(K.elementType)&&(be=j_):be=MA;if(be&&(be=be(r,K))){Bi(he,be,o,ie);break e}$e&&$e(r,X,K),r==="focusout"&&K&&X.type==="number"&&K.memoizedProps.value!=null&&Ss(X,"number",X.value)}switch($e=K?Xr(K):window,r){case"focusin":(nn($e)||$e.contentEditable==="true")&&(Mo=$e,yp=K,du=null);break;case"focusout":du=yp=Mo=null;break;case"mousedown":_p=!0;break;case"contextmenu":case"mouseup":case"dragend":_p=!1,G_(he,o,ie);break;case"selectionchange":if(VA)break;case"keydown":case"keyup":G_(he,o,ie)}var Se;if(ii)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Ke?ee(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(b&&o.locale!=="ko"&&(Ke||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Ke&&(Se=su()):(ei=ie,xs="value"in ei?ei.value:ei.textContent,Ke=!0)),$e=of(K,Ie),0<$e.length&&(Ie=new lu(Ie,r,null,o,ie),he.push({event:Ie,listeners:$e}),Se?Ie.data=Se:(Se=me(o),Se!==null&&(Ie.data=Se)))),(Se=_?tn(r,o):Xe(r,o))&&(Ie=of(K,"onBeforeInput"),0<Ie.length&&($e=new lu("onBeforeInput","beforeinput",null,o,ie),he.push({event:$e,listeners:Ie}),$e.data=Se)),_R(he,r,K,o,ie)}gE(he,s)})}function Bu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function of(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ca(r,o),f!=null&&u.unshift(Bu(r,f,m)),f=Ca(r,s),f!=null&&u.push(Bu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function rl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function _E(r,s,o,u,f){for(var m=s._reactName,w=[];o!==null&&o!==u;){var S=o,L=S.alternate,K=S.stateNode;if(S=S.tag,L!==null&&L===u)break;S!==5&&S!==26&&S!==27||K===null||(L=K,f?(K=Ca(o,m),K!=null&&w.unshift(Bu(o,K,L))):f||(K=Ca(o,m),K!=null&&w.push(Bu(o,K,L)))),o=o.return}w.length!==0&&r.push({event:s,listeners:w})}var wR=/\r\n?/g,TR=/\u0000|\uFFFD/g;function vE(r){return(typeof r=="string"?r:""+r).replace(wR,`
`).replace(TR,"")}function EE(r,s){return s=vE(s),vE(r)===s}function lf(){}function mt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||_r(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&_r(r,""+u);break;case"className":Zr(r,"class",u);break;case"tabIndex":Zr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Zr(r,o,u);break;case"style":nu(r,u,m);break;case"data":if(s!=="object"){Zr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&mt(r,s,"name",f.name,f,null),mt(r,s,"formEncType",f.formEncType,f,null),mt(r,s,"formMethod",f.formMethod,f,null),mt(r,s,"formTarget",f.formTarget,f,null)):(mt(r,s,"encType",f.encType,f,null),mt(r,s,"method",f.method,f,null),mt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=lf);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=So(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),Ts(r,"popover",u);break;case"xlinkActuate":bn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":bn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":bn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":bn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":bn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":bn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":bn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":bn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":bn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ts(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=cp.get(o)||o,Ts(r,o,u))}}function Bm(r,s,o,u,f,m){switch(o){case"style":nu(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?_r(r,u):(typeof u=="number"||typeof u=="bigint")&&_r(r,""+u);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"onClick":u!=null&&(r.onclick=lf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[zt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Ts(r,o,u)}}}function xn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:mt(r,s,m,w,o,null)}}f&&mt(r,s,"srcSet",o.srcSet,o,null),u&&mt(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var S=m=w=f=null,L=null,K=null;for(u in o)if(o.hasOwnProperty(u)){var ie=o[u];if(ie!=null)switch(u){case"name":f=ie;break;case"type":w=ie;break;case"checked":L=ie;break;case"defaultChecked":K=ie;break;case"value":m=ie;break;case"defaultValue":S=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(i(137,s));break;default:mt(r,s,u,ie,o,null)}}xa(r,m,S,L,K,w,f,!1),To(r);return;case"select":Ge("invalid",r),u=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":w=S;break;case"multiple":u=S;default:mt(r,s,f,S,o,null)}s=m,o=w,r.multiple=!!u,s!=null?Pi(r,!!u,s,!1):o!=null&&Pi(r,!!u,o,!0);return;case"textarea":Ge("invalid",r),m=f=u=null;for(w in o)if(o.hasOwnProperty(w)&&(S=o[w],S!=null))switch(w){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:mt(r,s,w,S,o,null)}Aa(r,u,f,m),To(r);return;case"option":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:mt(r,s,L,u,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(u=0;u<qu.length;u++)Ge(qu[u],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in o)if(o.hasOwnProperty(K)&&(u=o[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:mt(r,s,K,u,o,null)}return;default:if(ru(s)){for(ie in o)o.hasOwnProperty(ie)&&(u=o[ie],u!==void 0&&Bm(r,s,ie,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&mt(r,s,S,u,o,null))}function SR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,S=null,L=null,K=null,ie=null;for(Z in o){var he=o[Z];if(o.hasOwnProperty(Z)&&he!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":L=he;default:u.hasOwnProperty(Z)||mt(r,s,Z,null,u,he)}}for(var X in u){var Z=u[X];if(he=o[X],u.hasOwnProperty(X)&&(Z!=null||he!=null))switch(X){case"type":m=Z;break;case"name":f=Z;break;case"checked":K=Z;break;case"defaultChecked":ie=Z;break;case"value":w=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==he&&mt(r,s,X,Z,u,he)}}tr(r,w,S,L,K,ie,m,f);return;case"select":Z=w=S=X=null;for(m in o)if(L=o[m],o.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":Z=L;default:u.hasOwnProperty(m)||mt(r,s,m,null,u,L)}for(f in u)if(m=u[f],L=o[f],u.hasOwnProperty(f)&&(m!=null||L!=null))switch(f){case"value":X=m;break;case"defaultValue":S=m;break;case"multiple":w=m;default:m!==L&&mt(r,s,f,m,u,L)}s=S,o=w,u=Z,X!=null?Pi(r,!!o,X,!1):!!u!=!!o&&(s!=null?Pi(r,!!o,s,!0):Pi(r,!!o,o?[]:"",!1));return;case"textarea":Z=X=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:mt(r,s,S,null,u,f)}for(w in u)if(f=u[w],m=o[w],u.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":X=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&mt(r,s,w,f,u,m)}dt(r,X,Z);return;case"option":for(var Ne in o)if(X=o[Ne],o.hasOwnProperty(Ne)&&X!=null&&!u.hasOwnProperty(Ne))switch(Ne){case"selected":r.selected=!1;break;default:mt(r,s,Ne,null,u,X)}for(L in u)if(X=u[L],Z=o[L],u.hasOwnProperty(L)&&X!==Z&&(X!=null||Z!=null))switch(L){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:mt(r,s,L,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in o)X=o[Ce],o.hasOwnProperty(Ce)&&X!=null&&!u.hasOwnProperty(Ce)&&mt(r,s,Ce,null,u,X);for(K in u)if(X=u[K],Z=o[K],u.hasOwnProperty(K)&&X!==Z&&(X!=null||Z!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:mt(r,s,K,X,u,Z)}return;default:if(ru(s)){for(var gt in o)X=o[gt],o.hasOwnProperty(gt)&&X!==void 0&&!u.hasOwnProperty(gt)&&Bm(r,s,gt,void 0,u,X);for(ie in u)X=u[ie],Z=o[ie],!u.hasOwnProperty(ie)||X===Z||X===void 0&&Z===void 0||Bm(r,s,ie,X,u,Z);return}}for(var Y in o)X=o[Y],o.hasOwnProperty(Y)&&X!=null&&!u.hasOwnProperty(Y)&&mt(r,s,Y,null,u,X);for(he in u)X=u[he],Z=o[he],!u.hasOwnProperty(he)||X===Z||X==null&&Z==null||mt(r,s,he,X,u,Z)}var zm=null,$m=null;function uf(r){return r.nodeType===9?r:r.ownerDocument}function bE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Fm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Hm=null;function xR(){var r=window.event;return r&&r.type==="popstate"?r===Hm?!1:(Hm=r,!0):(Hm=null,!1)}var TE=typeof setTimeout=="function"?setTimeout:void 0,AR=typeof clearTimeout=="function"?clearTimeout:void 0,SE=typeof Promise=="function"?Promise:void 0,RR=typeof queueMicrotask=="function"?queueMicrotask:typeof SE<"u"?function(r){return SE.resolve(null).then(r).catch(CR)}:TE;function CR(r){setTimeout(function(){throw r})}function Bs(r){return r==="head"}function xE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var w=r.ownerDocument;if(o&1&&zu(w.documentElement),o&2&&zu(w.body),o&4)for(o=w.head,zu(o),w=o.firstChild;w;){var S=w.nextSibling,L=w.nodeName;w[ba]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=S}}if(f===0){r.removeChild(m),Ku(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Ku(s)}function Gm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Gm(o),ws(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function DR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[ba])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Lr(r.nextSibling),r===null)break}return null}function IR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Lr(r.nextSibling),r===null))return null;return r}function Ym(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function kR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Wm=null;function AE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function RE(r,s,o){switch(s=uf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function zu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);ws(r)}var Cr=new Map,CE=new Set;function cf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var es=J.d;J.d={f:OR,r:MR,D:NR,C:PR,L:VR,m:jR,X:UR,S:LR,M:qR};function OR(){var r=es.f(),s=ef();return r||s}function MR(r){var s=Kr(r);s!==null&&s.tag===5&&s.type==="form"?Wv(s):es.r(r)}var il=typeof document>"u"?null:document;function DE(r,s,o){var u=il;if(u&&typeof s=="string"&&s){var f=$t(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),CE.has(f)||(CE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),xn(s,"link",r),Lt(s),u.head.appendChild(s)))}}function NR(r){es.D(r),DE("dns-prefetch",r,null)}function PR(r,s){es.C(r,s),DE("preconnect",r,s)}function VR(r,s,o){es.L(r,s,o);var u=il;if(u&&r&&s){var f='link[rel="preload"][as="'+$t(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+$t(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+$t(o.imageSizes)+'"]')):f+='[href="'+$t(r)+'"]';var m=f;switch(s){case"style":m=sl(r);break;case"script":m=al(r)}Cr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),Cr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector($u(m))||s==="script"&&u.querySelector(Fu(m))||(s=u.createElement("link"),xn(s,"link",r),Lt(s),u.head.appendChild(s)))}}function jR(r,s){es.m(r,s);var o=il;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+$t(u)+'"][href="'+$t(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=al(r)}if(!Cr.has(m)&&(r=v({rel:"modulepreload",href:r},s),Cr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Fu(m)))return}u=o.createElement("link"),xn(u,"link",r),Lt(u),o.head.appendChild(u)}}}function LR(r,s,o){es.S(r,s,o);var u=il;if(u&&r){var f=qn(u).hoistableStyles,m=sl(r);s=s||"default";var w=f.get(m);if(!w){var S={loading:0,preload:null};if(w=u.querySelector($u(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=Cr.get(m))&&Qm(r,o);var L=w=u.createElement("link");Lt(L),xn(L,"link",r),L._p=new Promise(function(K,ie){L.onload=K,L.onerror=ie}),L.addEventListener("load",function(){S.loading|=1}),L.addEventListener("error",function(){S.loading|=2}),S.loading|=4,hf(w,s,u)}w={type:"stylesheet",instance:w,count:1,state:S},f.set(m,w)}}}function UR(r,s){es.X(r,s);var o=il;if(o&&r){var u=qn(o).hoistableScripts,f=al(r),m=u.get(f);m||(m=o.querySelector(Fu(f)),m||(r=v({src:r,async:!0},s),(s=Cr.get(f))&&Km(r,s),m=o.createElement("script"),Lt(m),xn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function qR(r,s){es.M(r,s);var o=il;if(o&&r){var u=qn(o).hoistableScripts,f=al(r),m=u.get(f);m||(m=o.querySelector(Fu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=Cr.get(f))&&Km(r,s),m=o.createElement("script"),Lt(m),xn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function IE(r,s,o,u){var f=(f=Te.current)?cf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=sl(o.href),o=qn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=sl(o.href);var m=qn(f).hoistableStyles,w=m.get(r);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,w),(m=f.querySelector($u(r)))&&!m._p&&(w.instance=m,w.state.loading=5),Cr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Cr.set(r,o),m||BR(f,r,o,w.state))),s&&u===null)throw Error(i(528,""));return w}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=al(o),o=qn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function sl(r){return'href="'+$t(r)+'"'}function $u(r){return'link[rel="stylesheet"]['+r+"]"}function kE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function BR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),xn(s,"link",o),Lt(s),r.head.appendChild(s))}function al(r){return'[src="'+$t(r)+'"]'}function Fu(r){return"script[async]"+r}function OE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+$t(o.href)+'"]');if(u)return s.instance=u,Lt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Lt(u),xn(u,"style",f),hf(u,o.precedence,r),s.instance=u;case"stylesheet":f=sl(o.href);var m=r.querySelector($u(f));if(m)return s.state.loading|=4,s.instance=m,Lt(m),m;u=kE(o),(f=Cr.get(f))&&Qm(u,f),m=(r.ownerDocument||r).createElement("link"),Lt(m);var w=m;return w._p=new Promise(function(S,L){w.onload=S,w.onerror=L}),xn(m,"link",u),s.state.loading|=4,hf(m,o.precedence,r),s.instance=m;case"script":return m=al(o.src),(f=r.querySelector(Fu(m)))?(s.instance=f,Lt(f),f):(u=o,(f=Cr.get(m))&&(u=v({},o),Km(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Lt(f),xn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,hf(u,o.precedence,r));return s.instance}function hf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,w=0;w<u.length;w++){var S=u[w];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Qm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Km(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var ff=null;function ME(r,s,o){if(ff===null){var u=new Map,f=ff=new Map;f.set(o,u)}else f=ff,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[ba]||m[en]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=r+w;var S=u.get(w);S?S.push(m):u.set(w,[m])}}return u}function NE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function zR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function PE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Hu=null;function $R(){}function FR(r,s,o){if(Hu===null)throw Error(i(475));var u=Hu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=sl(o.href),m=r.querySelector($u(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=df.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,Lt(m);return}m=r.ownerDocument||r,o=kE(o),(f=Cr.get(f))&&Qm(o,f),m=m.createElement("link"),Lt(m);var w=m;w._p=new Promise(function(S,L){w.onload=S,w.onerror=L}),xn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=df.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function HR(){if(Hu===null)throw Error(i(475));var r=Hu;return r.stylesheets&&r.count===0&&Xm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Xm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function df(){if(this.count--,this.count===0){if(this.stylesheets)Xm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var pf=null;function Xm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,pf=new Map,s.forEach(GR,r),pf=null,df.call(r))}function GR(r,s){if(!(s.state.loading&4)){var o=pf.get(r);if(o)var u=o.get(null);else{o=new Map,pf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),u=w)}u&&o.set(null,u)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||u,m===u&&o.set(null,f),o.set(w,f),this.count++,u=df.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var Gu={$$typeof:P,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function YR(r,s,o,u,f,m,w,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function VE(r,s,o,u,f,m,w,S,L,K,ie,he){return r=new YR(r,s,o,w,S,L,K,he),s=1,m===!0&&(s|=24),m=rr(3,null,null,s),r.current=m,m.stateNode=r,s=Op(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Vp(m),r}function jE(r){return r?(r=jo,r):jo}function LE(r,s,o,u,f,m){f=jE(f),u.context===null?u.context=f:u.pendingContext=f,u=Cs(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Ds(r,u,s),o!==null&&(lr(o,r,s),wu(o,r,s))}function UE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Zm(r,s){UE(r,s),(r=r.alternate)&&UE(r,s)}function qE(r){if(r.tag===13){var s=Vo(r,67108864);s!==null&&lr(s,r,67108864),Zm(r,67108864)}}var mf=!0;function WR(r,s,o,u){var f=k.T;k.T=null;var m=J.p;try{J.p=2,Jm(r,s,o,u)}finally{J.p=m,k.T=f}}function QR(r,s,o,u){var f=k.T;k.T=null;var m=J.p;try{J.p=8,Jm(r,s,o,u)}finally{J.p=m,k.T=f}}function Jm(r,s,o,u){if(mf){var f=eg(u);if(f===null)qm(r,s,u,gf,o),zE(r,u);else if(XR(f,r,s,o,u))u.stopPropagation();else if(zE(r,u),s&4&&-1<KR.indexOf(r)){for(;f!==null;){var m=Kr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=er(m.pendingLanes);if(w!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;w;){var L=1<<31-un(w);S.entanglements[1]|=L,w&=~L}ci(m),(ct&6)===0&&(Zh=jt()+500,Uu(0))}}break;case 13:S=Vo(m,2),S!==null&&lr(S,m,2),ef(),Zm(m,2)}if(m=eg(u),m===null&&qm(r,s,u,gf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else qm(r,s,u,null,o)}}function eg(r){return r=vr(r),tg(r)}var gf=null;function tg(r){if(gf=null,r=Oi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return gf=r,null}function BE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pr()){case mr:return 2;case Yn:return 8;case Jn:case go:return 32;case Wr:return 268435456;default:return 32}default:return 32}}var ng=!1,zs=null,$s=null,Fs=null,Yu=new Map,Wu=new Map,Hs=[],KR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zE(r,s){switch(r){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":$s=null;break;case"mouseover":case"mouseout":Fs=null;break;case"pointerover":case"pointerout":Yu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(s.pointerId)}}function Qu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Kr(s),s!==null&&qE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function XR(r,s,o,u,f){switch(s){case"focusin":return zs=Qu(zs,r,s,o,u,f),!0;case"dragenter":return $s=Qu($s,r,s,o,u,f),!0;case"mouseover":return Fs=Qu(Fs,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Yu.set(m,Qu(Yu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Wu.set(m,Qu(Wu.get(m)||null,r,s,o,u,f)),!0}return!1}function $E(r){var s=Oi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,Es(r.priority,function(){if(o.tag===13){var u=or();u=Qr(u);var f=Vo(o,u);f!==null&&lr(f,o,u),Zm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=eg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Vi=u,o.target.dispatchEvent(u),Vi=null}else return s=Kr(o),s!==null&&qE(s),r.blockedOn=o,!1;s.shift()}return!0}function FE(r,s,o){yf(r)&&o.delete(s)}function ZR(){ng=!1,zs!==null&&yf(zs)&&(zs=null),$s!==null&&yf($s)&&($s=null),Fs!==null&&yf(Fs)&&(Fs=null),Yu.forEach(FE),Wu.forEach(FE)}function _f(r,s){r.blockedOn===s&&(r.blockedOn=null,ng||(ng=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,ZR)))}var vf=null;function HE(r){vf!==r&&(vf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){vf===r&&(vf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(tg(u||o)===null)continue;break}var m=Kr(o);m!==null&&(r.splice(s,3),s-=3,tm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Ku(r){function s(L){return _f(L,r)}zs!==null&&_f(zs,r),$s!==null&&_f($s,r),Fs!==null&&_f(Fs,r),Yu.forEach(s),Wu.forEach(s);for(var o=0;o<Hs.length;o++){var u=Hs[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Hs.length&&(o=Hs[0],o.blockedOn===null);)$E(o),o.blockedOn===null&&Hs.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],w=f[zt]||null;if(typeof m=="function")w||HE(o);else if(w){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[zt]||null)S=w.formAction;else if(tg(f)!==null)continue}else S=w.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),HE(o)}}}function rg(r){this._internalRoot=r}Ef.prototype.render=rg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=or();LE(o,u,r,s,null,null)},Ef.prototype.unmount=rg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;LE(r.current,2,null,r,null,null),ef(),s[yr]=null}};function Ef(r){this._internalRoot=r}Ef.prototype.unstable_scheduleHydration=function(r){if(r){var s=gr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Hs.length&&s!==0&&s<Hs[o].priority;o++);Hs.splice(o,0,r),o===0&&$E(r)}};var GE=e.version;if(GE!=="19.1.0")throw Error(i(527,GE,"19.1.0"));J.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var JR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bf.isDisabled&&bf.supportsFiber)try{xt=bf.inject(JR),nt=bf}catch{}}return Zu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=l0,m=u0,w=c0,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=VE(r,1,!1,null,null,o,u,f,m,w,S,null),r[yr]=s.current,Um(r),new rg(s)},Zu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=l0,w=u0,S=c0,L=null,K=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(L=o.unstable_transitionCallbacks),o.formState!==void 0&&(K=o.formState)),s=VE(r,1,!0,s,o??null,u,f,m,w,S,L,K),s.context=jE(null),o=s.current,u=or(),u=Qr(u),f=Cs(u),f.callback=null,Ds(o,f,u),o=u,s.current.lanes=o,et(s,o),ci(s),r[yr]=s.current,Um(r),new Ef(s)},Zu.version="19.1.0",Zu}var nb;function cC(){if(nb)return ag.exports;nb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ag.exports=uC(),ag.exports}var hC=cC();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rb="popstate";function fC(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Vg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:vc(a)}return pC(e,n,null,t)}function Dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Or(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dC(){return Math.random().toString(36).substring(2,10)}function ib(t,e){return{usr:t.state,key:t.key,idx:e}}function Vg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Vl(e):e,state:n,key:e&&e.key||i||dC()}}function vc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Vl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function pC(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function E(){d="POP";let M=v(),F=M==null?null:M-g;g=M,p&&p({action:d,location:q.location,delta:F})}function T(M,F){d="PUSH";let G=Vg(q.location,M,F);g=v()+1;let P=ib(G,g),te=q.createHref(G);try{c.pushState(P,"",te)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(te)}l&&p&&p({action:d,location:q.location,delta:1})}function I(M,F){d="REPLACE";let G=Vg(q.location,M,F);g=v();let P=ib(G,g),te=q.createHref(G);c.replaceState(P,"",te),l&&p&&p({action:d,location:q.location,delta:0})}function V(M){return mC(M)}let q={get action(){return d},get location(){return t(a,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(rb,E),p=M,()=>{a.removeEventListener(rb,E),p=null}},createHref(M){return e(a,M)},createURL:V,encodeLocation(M){let F=V(M);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:I,go(M){return c.go(M)}};return q}function mC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:vc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function OT(t,e,n="/"){return gC(t,e,n,!1)}function gC(t,e,n,i){let a=typeof e=="string"?Vl(e):e,l=us(a.pathname||"/",n);if(l==null)return null;let c=MT(t);yC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=CC(l);d=AC(c[p],g,i)}return d}function MT(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Dt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=as([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(Dt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),MT(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:SC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of NT(l.path))a(l,c,p)}),e}function NT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=NT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function yC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var _C=/^:[\w-]+$/,vC=3,EC=2,bC=1,wC=10,TC=-2,sb=t=>t==="*";function SC(t,e){let n=t.split("/"),i=n.length;return n.some(sb)&&(i+=TC),e&&(i+=EC),n.filter(a=>!sb(a)).reduce((a,l)=>a+(_C.test(l)?vC:l===""?bC:wC),i)}function xC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function AC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=td({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!E&&g&&n&&!i[i.length-1].route.index&&(E=td({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!E)return null;Object.assign(a,E.params),c.push({params:a,pathname:as([l,E.pathname]),pathnameBase:OC(as([l,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(l=as([l,E.pathnameBase]))}return c}function td(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=RC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let V=d[T]||"";c=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const I=d[T];return E&&!I?g[v]=void 0:g[v]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function RC(t,e=!1,n=!0){Or(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function CC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Or(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function us(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function DC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Vl(t):t;return{pathname:n?n.startsWith("/")?n:IC(n,e):e,search:MC(i),hash:NC(a)}}function IC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function cg(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sy(t){let e=kC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function xy(t,e,n,i=!1){let a;typeof t=="string"?a=Vl(t):(a={...t},Dt(!a.pathname||!a.pathname.includes("?"),cg("?","pathname","search",a)),Dt(!a.pathname||!a.pathname.includes("#"),cg("#","pathname","hash",a)),Dt(!a.search||!a.search.includes("#"),cg("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;a.pathname=T.join("/")}d=E>=0?e[E]:"/"}let p=DC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var as=t=>t.join("/").replace(/\/\/+/g,"/"),OC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var PT=["POST","PUT","PATCH","DELETE"];new Set(PT);var VC=["GET",...PT];new Set(VC);var jl=j.createContext(null);jl.displayName="DataRouter";var Ad=j.createContext(null);Ad.displayName="DataRouterState";j.createContext(!1);var VT=j.createContext({isTransitioning:!1});VT.displayName="ViewTransition";var jC=j.createContext(new Map);jC.displayName="Fetchers";var LC=j.createContext(null);LC.displayName="Await";var Yr=j.createContext(null);Yr.displayName="Navigation";var jc=j.createContext(null);jc.displayName="Location";var Si=j.createContext({outlet:null,matches:[],isDataRoute:!1});Si.displayName="Route";var Ay=j.createContext(null);Ay.displayName="RouteError";function UC(t,{relative:e}={}){Dt(Ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=j.useContext(Yr),{hash:a,pathname:l,search:c}=Lc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:as([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Ll(){return j.useContext(jc)!=null}function ps(){return Dt(Ll(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(jc).location}var jT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function LT(t){j.useContext(Yr).static||j.useLayoutEffect(t)}function Ul(){let{isDataRoute:t}=j.useContext(Si);return t?ZC():qC()}function qC(){Dt(Ll(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(jl),{basename:e,navigator:n}=j.useContext(Yr),{matches:i}=j.useContext(Si),{pathname:a}=ps(),l=JSON.stringify(Sy(i)),c=j.useRef(!1);return LT(()=>{c.current=!0}),j.useCallback((p,g={})=>{if(Or(c.current,jT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=xy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:as([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}j.createContext(null);function Lc(t,{relative:e}={}){let{matches:n}=j.useContext(Si),{pathname:i}=ps(),a=JSON.stringify(Sy(n));return j.useMemo(()=>xy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function BC(t,e){return UT(t,e)}function UT(t,e,n,i){var F;Dt(Ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=j.useContext(Yr),{matches:l}=j.useContext(Si),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let G=v&&v.path||"";qT(p,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let E=ps(),T;if(e){let G=typeof e=="string"?Vl(e):e;Dt(g==="/"||((F=G.pathname)==null?void 0:F.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${G.pathname}" was given in the \`location\` prop.`),T=G}else T=E;let I=T.pathname||"/",V=I;if(g!=="/"){let G=g.replace(/^\//,"").split("/");V="/"+I.replace(/^\//,"").split("/").slice(G.length).join("/")}let q=OT(t,{pathname:V});Or(v||q!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Or(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=GC(q&&q.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:as([g,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?g:as([g,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),l,n,i);return e&&M?j.createElement(jc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},M):M}function zC(){let t=XC(),e=PC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:a},n):null,c)}var $C=j.createElement(zC,null),FC=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?j.createElement(Si.Provider,{value:this.props.routeContext},j.createElement(Ay.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function HC({routeContext:t,match:e,children:n}){let i=j.useContext(jl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Si.Provider,{value:t},n)}function GC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);Dt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:E}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let E,T=!1,I=null,V=null;n&&(E=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||$C,c&&(d<0&&v===0?(qT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,V=null):d===v&&(T=!0,V=g.route.hydrateFallbackElement||null)));let q=e.concat(a.slice(0,v+1)),M=()=>{let F;return E?F=I:T?F=V:g.route.Component?F=j.createElement(g.route.Component,null):g.route.element?F=g.route.element:F=p,j.createElement(HC,{match:g,routeContext:{outlet:p,matches:q,isDataRoute:n!=null},children:F})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?j.createElement(FC,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:M(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):M()},null)}function Ry(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YC(t){let e=j.useContext(jl);return Dt(e,Ry(t)),e}function WC(t){let e=j.useContext(Ad);return Dt(e,Ry(t)),e}function QC(t){let e=j.useContext(Si);return Dt(e,Ry(t)),e}function Cy(t){let e=QC(t),n=e.matches[e.matches.length-1];return Dt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function KC(){return Cy("useRouteId")}function XC(){var i;let t=j.useContext(Ay),e=WC("useRouteError"),n=Cy("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function ZC(){let{router:t}=YC("useNavigate"),e=Cy("useNavigate"),n=j.useRef(!1);return LT(()=>{n.current=!0}),j.useCallback(async(a,l={})=>{Or(n.current,jT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var ab={};function qT(t,e,n){!e&&!ab[t]&&(ab[t]=!0,Or(!1,n))}j.memo(JC);function JC({routes:t,future:e,state:n}){return UT(t,void 0,n,e)}function eD({to:t,replace:e,state:n,relative:i}){Dt(Ll(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=j.useContext(Yr);Or(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=j.useContext(Si),{pathname:c}=ps(),d=Ul(),p=xy(t,Sy(l),c,i==="path"),g=JSON.stringify(p);return j.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function jf(t){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tD({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Dt(!Ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Vl(n));let{pathname:p="/",search:g="",hash:v="",state:E=null,key:T="default"}=n,I=j.useMemo(()=>{let V=us(p,c);return V==null?null:{location:{pathname:V,search:g,hash:v,state:E,key:T},navigationType:i}},[c,p,g,v,E,T,i]);return Or(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:j.createElement(Yr.Provider,{value:d},j.createElement(jc.Provider,{children:e,value:I}))}function nD({children:t,location:e}){return BC(jg(t),e)}function jg(t,e=[]){let n=[];return j.Children.forEach(t,(i,a)=>{if(!j.isValidElement(i))return;let l=[...e,a];if(i.type===j.Fragment){n.push.apply(n,jg(i.props.children,l));return}Dt(i.type===jf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=jg(i.props.children,l)),n.push(c)}),n}var Lf="get",Uf="application/x-www-form-urlencoded";function Rd(t){return t!=null&&typeof t.tagName=="string"}function rD(t){return Rd(t)&&t.tagName.toLowerCase()==="button"}function iD(t){return Rd(t)&&t.tagName.toLowerCase()==="form"}function sD(t){return Rd(t)&&t.tagName.toLowerCase()==="input"}function aD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oD(t,e){return t.button===0&&(!e||e==="_self")&&!aD(t)}function Lg(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(a=>[n,a]):[[n,i]])},[]))}function lD(t,e){let n=Lg(t);return e&&e.forEach((i,a)=>{n.has(a)||e.getAll(a).forEach(l=>{n.append(a,l)})}),n}var wf=null;function uD(){if(wf===null)try{new FormData(document.createElement("form"),0),wf=!1}catch{wf=!0}return wf}var cD=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hg(t){return t!=null&&!cD.has(t)?(Or(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uf}"`),null):t}function hD(t,e){let n,i,a,l,c;if(iD(t)){let d=t.getAttribute("action");i=d?us(d,e):null,n=t.getAttribute("method")||Lf,a=hg(t.getAttribute("enctype"))||Uf,l=new FormData(t)}else if(rD(t)||sD(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?us(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Lf,a=hg(t.getAttribute("formenctype"))||hg(d.getAttribute("enctype"))||Uf,l=new FormData(d,t),!uD()){let{name:g,type:v,value:E}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,E)}}else{if(Rd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Lf,i=null,a=Uf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fD(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&us(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function dD(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pD(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function mD(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await dD(l,n);return c.links?c.links():[]}return[]}));return vD(i.flat(1).filter(pD).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function ob(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var E;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function gD(t,e,{includeHydrateFallback:n}={}){return yD(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function yD(t){return[...new Set(t)]}function _D(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function vD(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(_D(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function BT(){let t=j.useContext(jl);return Dy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ED(){let t=j.useContext(Ad);return Dy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Iy=j.createContext(void 0);Iy.displayName="FrameworkContext";function zT(){let t=j.useContext(Iy);return Dy(t,"You must render this element inside a <HydratedRouter> element"),t}function bD(t,e){let n=j.useContext(Iy),[i,a]=j.useState(!1),[l,c]=j.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=e,T=j.useRef(null);j.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let q=F=>{F.forEach(G=>{c(G.isIntersecting)})},M=new IntersectionObserver(q,{threshold:.5});return T.current&&M.observe(T.current),()=>{M.disconnect()}}},[t]),j.useEffect(()=>{if(i){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[i]);let I=()=>{a(!0)},V=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Ju(d,I),onBlur:Ju(p,V),onMouseEnter:Ju(g,I),onMouseLeave:Ju(v,V),onTouchStart:Ju(E,I)}]:[!1,T,{}]}function Ju(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function wD({page:t,...e}){let{router:n}=BT(),i=j.useMemo(()=>OT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?j.createElement(SD,{page:t,matches:i,...e}):null}function TD(t){let{manifest:e,routeModules:n}=zT(),[i,a]=j.useState([]);return j.useEffect(()=>{let l=!1;return mD(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function SD({page:t,matches:e,...n}){let i=ps(),{manifest:a,routeModules:l}=zT(),{basename:c}=BT(),{loaderData:d,matches:p}=ED(),g=j.useMemo(()=>ob(t,e,p,a,i,"data"),[t,e,p,a,i]),v=j.useMemo(()=>ob(t,e,p,a,i,"assets"),[t,e,p,a,i]),E=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let V=new Set,q=!1;if(e.forEach(F=>{var P;let G=a.routes[F.route.id];!G||!G.hasLoader||(!g.some(te=>te.route.id===F.route.id)&&F.route.id in d&&((P=l[F.route.id])!=null&&P.shouldRevalidate)||G.hasClientLoader?q=!0:V.add(F.route.id))}),V.size===0)return[];let M=fD(t,c,"data");return q&&V.size>0&&M.searchParams.set("_routes",e.filter(F=>V.has(F.route.id)).map(F=>F.route.id).join(",")),[M.pathname+M.search]},[c,d,i,a,g,e,t,l]),T=j.useMemo(()=>gD(v,a),[v,a]),I=TD(v);return j.createElement(j.Fragment,null,E.map(V=>j.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...n})),T.map(V=>j.createElement("link",{key:V,rel:"modulepreload",href:V,...n})),I.map(({key:V,link:q})=>j.createElement("link",{key:V,...q})))}function xD(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var $T=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$T&&(window.__reactRouterVersion="7.7.0")}catch{}function AD({basename:t,children:e,window:n}){let i=j.useRef();i.current==null&&(i.current=fC({window:n,v5Compat:!0}));let a=i.current,[l,c]=j.useState({action:a.action,location:a.location}),d=j.useCallback(p=>{j.startTransition(()=>c(p))},[c]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(tD,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var FT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HT=j.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:E,...T},I){let{basename:V}=j.useContext(Yr),q=typeof g=="string"&&FT.test(g),M,F=!1;if(typeof g=="string"&&q&&(M=g,$T))try{let O=new URL(window.location.href),U=g.startsWith("//")?new URL(O.protocol+g):new URL(g),B=us(U.pathname,V);U.origin===O.origin&&B!=null?g=B+U.search+U.hash:F=!0}catch{Or(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=UC(g,{relative:a}),[P,te,$]=bD(i,T),re=ID(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:E});function D(O){e&&e(O),O.defaultPrevented||re(O)}let R=j.createElement("a",{...T,...$,href:M||G,onClick:F||l?e:D,ref:xD(I,te),target:p,"data-discover":!q&&n==="render"?"true":void 0});return P&&!q?j.createElement(j.Fragment,null,R,j.createElement(wD,{page:G})):R});HT.displayName="Link";var RD=j.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let E=Lc(c,{relative:g.relative}),T=ps(),I=j.useContext(Ad),{navigator:V,basename:q}=j.useContext(Yr),M=I!=null&&PD(E)&&d===!0,F=V.encodeLocation?V.encodeLocation(E).pathname:E.pathname,G=T.pathname,P=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(G=G.toLowerCase(),P=P?P.toLowerCase():null,F=F.toLowerCase()),P&&q&&(P=us(P,q)||P);const te=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let $=G===F||!a&&G.startsWith(F)&&G.charAt(te)==="/",re=P!=null&&(P===F||!a&&P.startsWith(F)&&P.charAt(F.length)==="/"),D={isActive:$,isPending:re,isTransitioning:M},R=$?e:void 0,O;typeof i=="function"?O=i(D):O=[i,$?"active":null,re?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(D):l;return j.createElement(HT,{...g,"aria-current":R,className:O,ref:v,style:U,to:c,viewTransition:d},typeof p=="function"?p(D):p)});RD.displayName="NavLink";var CD=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Lf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:E,...T},I)=>{let V=MD(),q=ND(d,{relative:g}),M=c.toLowerCase()==="get"?"get":"post",F=typeof d=="string"&&FT.test(d),G=P=>{if(p&&p(P),P.defaultPrevented)return;P.preventDefault();let te=P.nativeEvent.submitter,$=(te==null?void 0:te.getAttribute("formmethod"))||c;V(te||P.currentTarget,{fetcherKey:e,method:$,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:E})};return j.createElement("form",{ref:I,method:M,action:q,onSubmit:i?p:G,...T,"data-discover":!F&&t==="render"?"true":void 0})});CD.displayName="Form";function DD(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GT(t){let e=j.useContext(jl);return Dt(e,DD(t)),e}function ID(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Ul(),p=ps(),g=Lc(t,{relative:l});return j.useCallback(v=>{if(oD(v,e)){v.preventDefault();let E=n!==void 0?n:vc(p)===vc(g);d(t,{replace:E,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}function YT(t){Or(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=j.useRef(Lg(t)),n=j.useRef(!1),i=ps(),a=j.useMemo(()=>lD(i.search,n.current?null:e.current),[i.search]),l=Ul(),c=j.useCallback((d,p)=>{const g=Lg(typeof d=="function"?d(new URLSearchParams(a)):d);n.current=!0,l("?"+g,p)},[l,a]);return[a,c]}var kD=0,OD=()=>`__${String(++kD)}__`;function MD(){let{router:t}=GT("useSubmit"),{basename:e}=j.useContext(Yr),n=KC();return j.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=hD(i,e);if(a.navigate===!1){let v=a.fetcherKey||OD();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function ND(t,{relative:e}={}){let{basename:n}=j.useContext(Yr),i=j.useContext(Si);Dt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Lc(t||".",{relative:e})},c=ps();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:as([n,l.pathname])),vc(l)}function PD(t,e={}){let n=j.useContext(VT);Dt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=GT("useViewTransitionState"),a=Lc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=us(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=us(n.nextLocation.pathname,i)||n.nextLocation.pathname;return td(a.pathname,c)!=null||td(a.pathname,l)!=null}var En=function(){return En=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},En.apply(this,arguments)};function Ec(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var St="-ms-",fc="-moz-",at="-webkit-",WT="comm",Cd="rule",ky="decl",VD="@import",QT="@keyframes",jD="@layer",KT=Math.abs,Oy=String.fromCharCode,Ug=Object.assign;function LD(t,e){return vn(t,0)^45?(((e<<2^vn(t,0))<<2^vn(t,1))<<2^vn(t,2))<<2^vn(t,3):0}function XT(t){return t.trim()}function ts(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function qf(t,e,n){return t.indexOf(e,n)}function vn(t,e){return t.charCodeAt(e)|0}function Tl(t,e,n){return t.slice(e,n)}function pi(t){return t.length}function ZT(t){return t.length}function ic(t,e){return e.push(t),t}function UD(t,e){return t.map(e).join("")}function lb(t,e){return t.filter(function(n){return!ts(n,e)})}var Dd=1,Sl=1,JT=0,Mr=0,Kt=0,ql="";function Id(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:Dd,column:Sl,length:c,return:"",siblings:d}}function Ks(t,e){return Ug(Id("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ol(t){for(;t.root;)t=Ks(t.root,{children:[t]});ic(t,t.siblings)}function qD(){return Kt}function BD(){return Kt=Mr>0?vn(ql,--Mr):0,Sl--,Kt===10&&(Sl=1,Dd--),Kt}function $r(){return Kt=Mr<JT?vn(ql,Mr++):0,Sl++,Kt===10&&(Sl=1,Dd++),Kt}function to(){return vn(ql,Mr)}function Bf(){return Mr}function kd(t,e){return Tl(ql,t,e)}function qg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zD(t){return Dd=Sl=1,JT=pi(ql=t),Mr=0,[]}function $D(t){return ql="",t}function fg(t){return XT(kd(Mr-1,Bg(t===91?t+2:t===40?t+1:t)))}function FD(t){for(;(Kt=to())&&Kt<33;)$r();return qg(t)>2||qg(Kt)>3?"":" "}function HD(t,e){for(;--e&&$r()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return kd(t,Bf()+(e<6&&to()==32&&$r()==32))}function Bg(t){for(;$r();)switch(Kt){case t:return Mr;case 34:case 39:t!==34&&t!==39&&Bg(Kt);break;case 40:t===41&&Bg(t);break;case 92:$r();break}return Mr}function GD(t,e){for(;$r()&&t+Kt!==57;)if(t+Kt===84&&to()===47)break;return"/*"+kd(e,Mr-1)+"*"+Oy(t===47?t:$r())}function YD(t){for(;!qg(to());)$r();return kd(t,Mr)}function WD(t){return $D(zf("",null,null,null,[""],t=zD(t),0,[0],t))}function zf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,E=c,T=0,I=0,V=0,q=1,M=1,F=1,G=0,P="",te=a,$=l,re=i,D=P;M;)switch(V=G,G=$r()){case 40:if(V!=108&&vn(D,E-1)==58){qf(D+=Be(fg(G),"&","&\f"),"&\f",KT(g?d[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:D+=fg(G);break;case 9:case 10:case 13:case 32:D+=FD(V);break;case 92:D+=HD(Bf()-1,7);continue;case 47:switch(to()){case 42:case 47:ic(QD(GD($r(),Bf()),e,n,p),p);break;default:D+="/"}break;case 123*q:d[g++]=pi(D)*F;case 125*q:case 59:case 0:switch(G){case 0:case 125:M=0;case 59+v:F==-1&&(D=Be(D,/\f/g,"")),I>0&&pi(D)-E&&ic(I>32?cb(D+";",i,n,E-1,p):cb(Be(D," ","")+";",i,n,E-2,p),p);break;case 59:D+=";";default:if(ic(re=ub(D,e,n,g,v,a,d,P,te=[],$=[],E,l),l),G===123)if(v===0)zf(D,e,re,re,te,l,E,d,$);else switch(T===99&&vn(D,3)===110?100:T){case 100:case 108:case 109:case 115:zf(t,re,re,i&&ic(ub(t,re,re,0,0,a,d,P,a,te=[],E,$),$),a,$,E,d,i?te:$);break;default:zf(D,re,re,re,[""],$,0,d,$)}}g=v=I=0,q=F=1,P=D="",E=c;break;case 58:E=1+pi(D),I=V;default:if(q<1){if(G==123)--q;else if(G==125&&q++==0&&BD()==125)continue}switch(D+=Oy(G),G*q){case 38:F=v>0?1:(D+="\f",-1);break;case 44:d[g++]=(pi(D)-1)*F,F=1;break;case 64:to()===45&&(D+=fg($r())),T=to(),v=E=pi(P=D+=YD(Bf())),G++;break;case 45:V===45&&pi(D)==2&&(q=0)}}return l}function ub(t,e,n,i,a,l,c,d,p,g,v,E){for(var T=a-1,I=a===0?l:[""],V=ZT(I),q=0,M=0,F=0;q<i;++q)for(var G=0,P=Tl(t,T+1,T=KT(M=c[q])),te=t;G<V;++G)(te=XT(M>0?I[G]+" "+P:Be(P,/&\f/g,I[G])))&&(p[F++]=te);return Id(t,e,n,a===0?Cd:d,p,g,v,E)}function QD(t,e,n,i){return Id(t,e,n,WT,Oy(qD()),Tl(t,2,-2),0,i)}function cb(t,e,n,i,a){return Id(t,e,n,ky,Tl(t,0,i),Tl(t,i+1,-1),i,a)}function e1(t,e,n){switch(LD(t,e)){case 5103:return at+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return at+t+t;case 4789:return fc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return at+t+fc+t+St+t+t;case 5936:switch(vn(t,e+11)){case 114:return at+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return at+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return at+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return at+t+St+t+t;case 6165:return at+t+St+"flex-"+t+t;case 5187:return at+t+Be(t,/(\w+).+(:[^]+)/,at+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return at+t+St+"flex-item-"+Be(t,/flex-|-self/g,"")+(ts(t,/flex-|baseline/)?"":St+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return at+t+St+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return at+t+St+Be(t,"shrink","negative")+t;case 5292:return at+t+St+Be(t,"basis","preferred-size")+t;case 6060:return at+"box-"+Be(t,"-grow","")+at+t+St+Be(t,"grow","positive")+t;case 4554:return at+Be(t,/([^-])(transform)/g,"$1"+at+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,at+"$1"),/(image-set)/,at+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,at+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,at+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+at+t+t;case 4200:if(!ts(t,/flex-|baseline/))return St+"grid-column-align"+Tl(t,e)+t;break;case 2592:case 3360:return St+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,ts(i.props,/grid-\w+-end/)})?~qf(t+(n=n[e].value),"span",0)?t:St+Be(t,"-start","")+t+St+"grid-row-span:"+(~qf(n,"span",0)?ts(n,/\d+/):+ts(n,/\d+/)-+ts(t,/\d+/))+";":St+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return ts(i.props,/grid-\w+-start/)})?t:St+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,at+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pi(t)-1-e>6)switch(vn(t,e+1)){case 109:if(vn(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+at+"$2-$3$1"+fc+(vn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qf(t,"stretch",0)?e1(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return St+a+":"+l+g+(c?St+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(vn(t,e+6)===121)return Be(t,":",":"+at)+t;break;case 6444:switch(vn(t,vn(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+at+(vn(t,14)===45?"inline-":"")+"box$3$1"+at+"$2$3$1"+St+"$2box$3")+t;case 100:return Be(t,":",":"+St)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function nd(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function KD(t,e,n,i){switch(t.type){case jD:if(t.children.length)break;case VD:case ky:return t.return=t.return||t.value;case WT:return"";case QT:return t.return=t.value+"{"+nd(t.children,i)+"}";case Cd:if(!pi(t.value=t.props.join(",")))return""}return pi(n=nd(t.children,i))?t.return=t.value+"{"+n+"}":""}function XD(t){var e=ZT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function ZD(t){return function(e){e.root||(e=e.return)&&t(e)}}function JD(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case ky:t.return=e1(t.value,t.length,n);return;case QT:return nd([Ks(t,{value:Be(t.value,"@","@"+at)})],i);case Cd:if(t.length)return UD(n=t.props,function(a){switch(ts(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ol(Ks(t,{props:[Be(a,/:(read-\w+)/,":"+fc+"$1")]})),ol(Ks(t,{props:[a]})),Ug(t,{props:lb(n,i)});break;case"::placeholder":ol(Ks(t,{props:[Be(a,/:(plac\w+)/,":"+at+"input-$1")]})),ol(Ks(t,{props:[Be(a,/:(plac\w+)/,":"+fc+"$1")]})),ol(Ks(t,{props:[Be(a,/:(plac\w+)/,St+"input-$1")]})),ol(Ks(t,{props:[a]})),Ug(t,{props:lb(n,i)});break}return""})}}var eI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur={},xl=typeof process<"u"&&ur!==void 0&&(ur.REACT_APP_SC_ATTR||ur.SC_ATTR)||"data-styled",t1="active",n1="data-styled-version",Od="6.1.19",My=`/*!sc*/
`,rd=typeof window<"u"&&typeof document<"u",tI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ur!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==""?ur.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ur.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ur!==void 0&&ur.SC_DISABLE_SPEEDY!==void 0&&ur.SC_DISABLE_SPEEDY!==""&&ur.SC_DISABLE_SPEEDY!=="false"&&ur.SC_DISABLE_SPEEDY),nI={},Md=Object.freeze([]),Al=Object.freeze({});function r1(t,e,n){return n===void 0&&(n=Al),t.theme!==n.theme&&t.theme||e||n.theme}var i1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iI=/(^-|-$)/g;function hb(t){return t.replace(rI,"-").replace(iI,"")}var sI=/(a)(d)/gi,Tf=52,fb=function(t){return String.fromCharCode(t+(t>25?39:97))};function zg(t){var e,n="";for(e=Math.abs(t);e>Tf;e=e/Tf|0)n=fb(e%Tf)+n;return(fb(e%Tf)+n).replace(sI,"$1-$2")}var dg,s1=5381,ml=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},a1=function(t){return ml(s1,t)};function o1(t){return zg(a1(t)>>>0)}function aI(t){return t.displayName||t.name||"Component"}function pg(t){return typeof t=="string"&&!0}var l1=typeof Symbol=="function"&&Symbol.for,u1=l1?Symbol.for("react.memo"):60115,oI=l1?Symbol.for("react.forward_ref"):60112,lI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cI=((dg={})[oI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dg[u1]=c1,dg);function db(t){return("type"in(e=t)&&e.type.$$typeof)===u1?c1:"$$typeof"in t?cI[t.$$typeof]:lI;var e}var hI=Object.defineProperty,fI=Object.getOwnPropertyNames,pb=Object.getOwnPropertySymbols,dI=Object.getOwnPropertyDescriptor,pI=Object.getPrototypeOf,mb=Object.prototype;function h1(t,e,n){if(typeof e!="string"){if(mb){var i=pI(e);i&&i!==mb&&h1(t,i,n)}var a=fI(e);pb&&(a=a.concat(pb(e)));for(var l=db(t),c=db(e),d=0;d<a.length;++d){var p=a[d];if(!(p in uI||n&&n[p]||c&&p in c||l&&p in l)){var g=dI(e,p);try{hI(t,p,g)}catch{}}}}return t}function io(t){return typeof t=="function"}function Ny(t){return typeof t=="object"&&"styledComponentId"in t}function Za(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function $g(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function bc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Fg(t,e,n){if(n===void 0&&(n=!1),!n&&!bc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Fg(t[i],e[i]);else if(bc(e))for(var i in e)t[i]=Fg(t[i],e[i]);return t}function Py(t,e){Object.defineProperty(t,"toString",{value:e})}function so(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var mI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw so(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(My);return n},t}(),$f=new Map,id=new Map,Ff=1,Sf=function(t){if($f.has(t))return $f.get(t);for(;id.has(Ff);)Ff++;var e=Ff++;return $f.set(t,e),id.set(e,t),e},gI=function(t,e){Ff=e+1,$f.set(t,e),id.set(e,t)},yI="style[".concat(xl,"][").concat(n1,'="').concat(Od,'"]'),_I=new RegExp("^".concat(xl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vI=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},EI=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(My),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(_I);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(gI(v,g),vI(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},gb=function(t){for(var e=document.querySelectorAll(yI),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(xl)!==t1&&(EI(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function bI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var f1=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(xl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(xl,t1),i.setAttribute(n1,Od);var c=bI();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},wI=function(){function t(e){this.element=f1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw so(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),TI=function(){function t(e){this.element=f1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),SI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),yb=rd,xI={isServer:!rd,useCSSOMInjection:!tI},sd=function(){function t(e,n,i){e===void 0&&(e=Al),n===void 0&&(n={});var a=this;this.options=En(En({},xI),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&rd&&yb&&(yb=!1,gb(this)),Py(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(E){var T=function(F){return id.get(F)}(E);if(T===void 0)return"continue";var I=l.names.get(T),V=c.getGroup(E);if(I===void 0||!I.size||V.length===0)return"continue";var q="".concat(xl,".g").concat(E,'[id="').concat(T,'"]'),M="";I!==void 0&&I.forEach(function(F){F.length>0&&(M+="".concat(F,","))}),p+="".concat(V).concat(q,'{content:"').concat(M,'"}').concat(My)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return Sf(e)},t.prototype.rehydrate=function(){!this.server&&rd&&gb(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(En(En({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new SI(a):i?new wI(a):new TI(a)}(this.options),new mI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Sf(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Sf(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Sf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),AI=/&/g,RI=/^\s*\/\/.*$/gm;function d1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=d1(n.children,e)),n})}function CI(t){var e,n,i,a=Al,l=a.options,c=l===void 0?Al:l,d=a.plugins,p=d===void 0?Md:d,g=function(T,I,V){return V.startsWith(n)&&V.endsWith(n)&&V.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===Cd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(AI,n).replace(i,g))}),c.prefix&&v.push(JD),v.push(KD);var E=function(T,I,V,q){I===void 0&&(I=""),V===void 0&&(V=""),q===void 0&&(q="&"),e=q,n=I,i=new RegExp("\\".concat(n,"\\b"),"g");var M=T.replace(RI,""),F=WD(V||I?"".concat(V," ").concat(I," { ").concat(M," }"):M);c.namespace&&(F=d1(F,c.namespace));var G=[];return nd(F,XD(v.concat(ZD(function(P){return G.push(P)})))),G};return E.hash=p.length?p.reduce(function(T,I){return I.name||so(15),ml(T,I.name)},s1).toString():"",E}var DI=new sd,Hg=CI(),p1=ge.createContext({shouldForwardProp:void 0,styleSheet:DI,stylis:Hg});p1.Consumer;ge.createContext(void 0);function Gg(){return j.useContext(p1)}var II=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Hg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Py(this,function(){throw so(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Hg),this.name+e.hash},t}(),kI=function(t){return t>="A"&&t<="Z"};function _b(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;kI(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var m1=function(t){return t==null||t===!1||t===""},g1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!m1(l)&&(Array.isArray(l)&&l.isCss||io(l)?i.push("".concat(_b(a),":"),l,";"):bc(l)?i.push.apply(i,Ec(Ec(["".concat(a," {")],g1(l),!1),["}"],!1)):i.push("".concat(_b(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in eI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function na(t,e,n,i){if(m1(t))return[];if(Ny(t))return[".".concat(t.styledComponentId)];if(io(t)){if(!io(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return na(a,e,n,i)}var l;return t instanceof II?n?(t.inject(n,i),[t.getName(i)]):[t]:bc(t)?g1(t):Array.isArray(t)?Array.prototype.concat.apply(Md,t.map(function(c){return na(c,e,n,i)})):[t.toString()]}function y1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(io(n)&&!Ny(n))return!1}return!0}var OI=a1(Od),MI=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&y1(e),this.componentId=n,this.baseHash=ml(OI,n),this.baseStyle=i,sd.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Za(a,this.staticRulesId);else{var l=$g(na(this.rules,e,n,i)),c=zg(ml(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Za(a,c),this.staticRulesId=c}else{for(var p=ml(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var T=$g(na(E,e,n,i));p=ml(p,T+v),g+=T}}if(g){var I=zg(p>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,i(g,".".concat(I),void 0,this.componentId)),a=Za(a,I)}}return a},t}(),wc=ge.createContext(void 0);wc.Consumer;function NI(t){var e=ge.useContext(wc),n=j.useMemo(function(){return function(i,a){if(!i)throw so(14);if(io(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw so(8);return a?En(En({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?ge.createElement(wc.Provider,{value:n},t.children):null}var mg={};function PI(t,e,n){var i=Ny(t),a=t,l=!pg(t),c=e.attrs,d=c===void 0?Md:c,p=e.componentId,g=p===void 0?function(te,$){var re=typeof te!="string"?"sc":hb(te);mg[re]=(mg[re]||0)+1;var D="".concat(re,"-").concat(o1(Od+re+mg[re]));return $?"".concat($,"-").concat(D):D}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(te){return pg(te)?"styled.".concat(te):"Styled(".concat(aI(te),")")}(t):v,T=e.displayName&&e.componentId?"".concat(hb(e.displayName),"-").concat(e.componentId):e.componentId||g,I=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,V=e.shouldForwardProp;if(i&&a.shouldForwardProp){var q=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;V=function(te,$){return q(te,$)&&M(te,$)}}else V=q}var F=new MI(n,T,i?a.componentStyle:void 0);function G(te,$){return function(re,D,R){var O=re.attrs,U=re.componentStyle,B=re.defaultProps,C=re.foldedComponentIds,x=re.styledComponentId,ce=re.target,ye=ge.useContext(wc),k=Gg(),J=re.shouldForwardProp||k.shouldForwardProp,se=r1(D,ye,B)||Al,de=function(Ae,Te,_t){for(var Fe,Tt=En(En({},Te),{className:void 0,theme:_t}),In=0;In<Ae.length;In+=1){var ln=io(Fe=Ae[In])?Fe(Tt):Fe;for(var pe in ln)Tt[pe]=pe==="className"?Za(Tt[pe],ln[pe]):pe==="style"?En(En({},Tt[pe]),ln[pe]):ln[pe]}return Te.className&&(Tt.className=Za(Tt.className,Te.className)),Tt}(O,D,se),N=de.as||ce,ne={};for(var le in de)de[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&de.theme===se||(le==="forwardedAs"?ne.as=de.forwardedAs:J&&!J(le,N)||(ne[le]=de[le]));var ue=function(Ae,Te){var _t=Gg(),Fe=Ae.generateAndInjectStyles(Te,_t.styleSheet,_t.stylis);return Fe}(U,de),ve=Za(C,x);return ue&&(ve+=" "+ue),de.className&&(ve+=" "+de.className),ne[pg(N)&&!i1.has(N)?"class":"className"]=ve,R&&(ne.ref=R),j.createElement(N,ne)}(P,te,$)}G.displayName=E;var P=ge.forwardRef(G);return P.attrs=I,P.componentStyle=F,P.displayName=E,P.shouldForwardProp=V,P.foldedComponentIds=i?Za(a.foldedComponentIds,a.styledComponentId):"",P.styledComponentId=T,P.target=i?a.target:t,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function($){for(var re=[],D=1;D<arguments.length;D++)re[D-1]=arguments[D];for(var R=0,O=re;R<O.length;R++)Fg($,O[R],!0);return $}({},a.defaultProps,te):te}}),Py(P,function(){return".".concat(P.styledComponentId)}),l&&h1(P,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function vb(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var Eb=function(t){return Object.assign(t,{isCss:!0})};function _1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(io(t)||bc(t))return Eb(na(vb(Md,Ec([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?na(i):Eb(na(vb(i,e)))}function Yg(t,e,n){if(n===void 0&&(n=Al),!e)throw so(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,_1.apply(void 0,Ec([a],l,!1)))};return i.attrs=function(a){return Yg(t,e,En(En({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Yg(t,e,En(En({},n),a))},i}var v1=function(t){return Yg(PI,t)},z=v1;i1.forEach(function(t){z[t]=v1(t)});var VI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=y1(e),sd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a($g(na(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&sd.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function E1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=_1.apply(void 0,Ec([t],e,!1)),a="sc-global-".concat(o1(JSON.stringify(i))),l=new VI(i,a),c=function(p){var g=Gg(),v=ge.useContext(wc),E=ge.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(E,p,g.styleSheet,v,g.stylis),ge.useLayoutEffect(function(){if(!g.styleSheet.server)return d(E,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(E,g.styleSheet)}},[E,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,E,T){if(l.isStatic)l.renderStyles(p,nI,v,T);else{var I=En(En({},g),{theme:r1(g,E,c.defaultProps)});l.renderStyles(p,I,v,T)}}return ge.memo(c)}/**
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
 */const jI=()=>{};var bb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},LI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},w1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,I=g&63;p||(I=64,c||(T=64)),i.push(n[v],n[E],n[T],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const E=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||E==null)throw new UI;const T=l<<2|d>>4;if(i.push(T),g!==64){const I=d<<4&240|g>>2;if(i.push(I),E!==64){const V=g<<6&192|E;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=b1(t);return w1.encodeByteArray(e,!0)},ad=function(t){return qI(t).replace(/\./g,"")},T1=function(t){try{return w1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zI=()=>BI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof bb>"u")return;const t=bb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T1(t[1]);return e&&JSON.parse(e)},Nd=()=>{try{return jI()||zI()||$I()||FI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S1=t=>{var e,n;return(n=(e=Nd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},HI=t=>{const e=S1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},x1=()=>{var t;return(t=Nd())==null?void 0:t.config},A1=t=>{var e;return(e=Nd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Bl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function R1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function YI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ad(JSON.stringify(n)),ad(JSON.stringify(c)),""].join(".")}const dc={};function WI(){const t={prod:[],emulator:[]};for(const e of Object.keys(dc))dc[e]?t.emulator.push(e):t.prod.push(e);return t}function QI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let wb=!1;function C1(t,e){if(typeof window>"u"||typeof document>"u"||!Bl(window.location.host)||dc[t]===e||dc[t]||wb)return;dc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=WI().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,I){T.setAttribute("width","24"),T.setAttribute("id",I),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{wb=!0,c()},T}function v(T,I){T.setAttribute("id",I),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=QI(i),I=n("text"),V=document.getElementById(I)||document.createElement("span"),q=n("learnmore"),M=document.getElementById(q)||document.createElement("a"),F=n("preprendIcon"),G=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const P=T.element;d(P),v(M,q);const te=g();p(G,F),P.append(G,V,M,te),document.body.appendChild(P)}l?(V.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ln())}function XI(){var e;const t=(e=Nd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ek(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tk(){const t=Ln();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nk(){return!XI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rk(){try{return typeof indexedDB=="object"}catch{return!1}}function ik(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="FirebaseError";class ms extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=sk,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uc.prototype.create)}}class Uc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?ak(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new ms(a,d,i)}}function ak(t,e){return t.replace(ok,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const ok=/\{\$([^}]+)}/g;function lk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(Tb(l)&&Tb(c)){if(!ao(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function Tb(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function sc(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ac(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uk(t,e){const n=new ck(t,e);return n.subscribe.bind(n)}class ck{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");hk(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=gg),a.error===void 0&&(a.error=gg),a.complete===void 0&&(a.complete=gg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gg(){}/**
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
 */class fk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new GI;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pk(e))try{this.getOrInitializeService({instanceIdentifier:Ka})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Ka){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ka){return this.instances.has(e)}getOptions(e=Ka){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ka){return this.component?this.component.multipleInstances?e:Ka:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dk(t){return t===Ka?void 0:t}function pk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ye||(Ye={}));const gk={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},yk=Ye.INFO,_k={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},vk=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=_k[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vy{constructor(e){this.name=e,this._logLevel=yk,this._logHandler=vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const Ek=(t,e)=>e.some(n=>t instanceof n);let Sb,xb;function bk(){return Sb||(Sb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wk(){return xb||(xb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D1=new WeakMap,Wg=new WeakMap,I1=new WeakMap,yg=new WeakMap,jy=new WeakMap;function Tk(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(ra(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&D1.set(n,t)}).catch(()=>{}),jy.set(e,t),e}function Sk(t){if(Wg.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Wg.set(t,e)}let Qg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ra(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xk(t){Qg=t(Qg)}function Ak(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(_g(this),e,...n);return I1.set(i,e.sort?e.sort():[e]),ra(i)}:wk().includes(t)?function(...e){return t.apply(_g(this),e),ra(D1.get(this))}:function(...e){return ra(t.apply(_g(this),e))}}function Rk(t){return typeof t=="function"?Ak(t):(t instanceof IDBTransaction&&Sk(t),Ek(t,bk())?new Proxy(t,Qg):t)}function ra(t){if(t instanceof IDBRequest)return Tk(t);if(yg.has(t))return yg.get(t);const e=Rk(t);return e!==t&&(yg.set(t,e),jy.set(e,t)),e}const _g=t=>jy.get(t);function Ck(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=ra(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ra(c.result),p.oldVersion,p.newVersion,ra(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const Dk=["get","getKey","getAll","getAllKeys","count"],Ik=["put","add","delete","clear"],vg=new Map;function Ab(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vg.get(e))return vg.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=Ik.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||Dk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return vg.set(e,l),l}xk(t=>({...t,get:(e,n,i)=>Ab(e,n)||t.get(e,n,i),has:(e,n)=>!!Ab(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ok(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kg="@firebase/app",Rb="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Vy("@firebase/app"),Mk="@firebase/app-compat",Nk="@firebase/analytics-compat",Pk="@firebase/analytics",Vk="@firebase/app-check-compat",jk="@firebase/app-check",Lk="@firebase/auth",Uk="@firebase/auth-compat",qk="@firebase/database",Bk="@firebase/data-connect",zk="@firebase/database-compat",$k="@firebase/functions",Fk="@firebase/functions-compat",Hk="@firebase/installations",Gk="@firebase/installations-compat",Yk="@firebase/messaging",Wk="@firebase/messaging-compat",Qk="@firebase/performance",Kk="@firebase/performance-compat",Xk="@firebase/remote-config",Zk="@firebase/remote-config-compat",Jk="@firebase/storage",eO="@firebase/storage-compat",tO="@firebase/firestore",nO="@firebase/ai",rO="@firebase/firestore-compat",iO="firebase",sO="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="[DEFAULT]",aO={[Kg]:"fire-core",[Mk]:"fire-core-compat",[Pk]:"fire-analytics",[Nk]:"fire-analytics-compat",[jk]:"fire-app-check",[Vk]:"fire-app-check-compat",[Lk]:"fire-auth",[Uk]:"fire-auth-compat",[qk]:"fire-rtdb",[Bk]:"fire-data-connect",[zk]:"fire-rtdb-compat",[$k]:"fire-fn",[Fk]:"fire-fn-compat",[Hk]:"fire-iid",[Gk]:"fire-iid-compat",[Yk]:"fire-fcm",[Wk]:"fire-fcm-compat",[Qk]:"fire-perf",[Kk]:"fire-perf-compat",[Xk]:"fire-rc",[Zk]:"fire-rc-compat",[Jk]:"fire-gcs",[eO]:"fire-gcs-compat",[tO]:"fire-fst",[rO]:"fire-fst-compat",[nO]:"fire-vertex","fire-js":"fire-js",[iO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map,oO=new Map,Zg=new Map;function Cb(t,e){try{t.container.addComponent(e)}catch(n){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rl(t){const e=t.name;if(Zg.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;Zg.set(e,t);for(const n of od.values())Cb(n,t);for(const n of oO.values())Cb(n,t);return!0}function Ly(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ir(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ia=new Uc("app","Firebase",lO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new oo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=sO;function k1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Xg,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw ia.create("bad-app-name",{appName:String(a)});if(n||(n=x1()),!n)throw ia.create("no-options");const l=od.get(a);if(l){if(ao(n,l.options)&&ao(i,l.config))return l;throw ia.create("duplicate-app",{appName:a})}const c=new mk(a);for(const p of Zg.values())c.addComponent(p);const d=new uO(n,i,c);return od.set(a,d),d}function O1(t=Xg){const e=od.get(t);if(!e&&t===Xg&&x1())return k1();if(!e)throw ia.create("no-app",{appName:t});return e}function sa(t,e,n){let i=aO[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(c.join(" "));return}Rl(new oo(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cO="firebase-heartbeat-database",hO=1,Tc="firebase-heartbeat-store";let Eg=null;function M1(){return Eg||(Eg=Ck(cO,hO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tc)}catch(n){console.warn(n)}}}}).catch(t=>{throw ia.create("idb-open",{originalErrorMessage:t.message})})),Eg}async function fO(t){try{const n=(await M1()).transaction(Tc),i=await n.objectStore(Tc).get(N1(t));return await n.done,i}catch(e){if(e instanceof ms)cs.warn(e.message);else{const n=ia.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cs.warn(n.message)}}}async function Db(t,e){try{const i=(await M1()).transaction(Tc,"readwrite");await i.objectStore(Tc).put(e,N1(t)),await i.done}catch(n){if(n instanceof ms)cs.warn(n.message);else{const i=ia.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cs.warn(i.message)}}}function N1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dO=1024,pO=30;class mO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ib();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>pO){const c=_O(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){cs.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ib(),{heartbeatsToSend:i,unsentEntries:a}=gO(this._heartbeatsCache.heartbeats),l=ad(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return cs.warn(n),""}}}function Ib(){return new Date().toISOString().substring(0,10)}function gO(t,e=dO){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),kb(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),kb(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class yO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rk()?ik().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Db(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Db(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kb(t){return ad(JSON.stringify({version:2,heartbeats:t})).length}function _O(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(t){Rl(new oo("platform-logger",e=>new kk(e),"PRIVATE")),Rl(new oo("heartbeat",e=>new mO(e),"PRIVATE")),sa(Kg,Rb,t),sa(Kg,Rb,"esm2020"),sa("fire-js","")}vO("");function P1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EO=P1,V1=new Uc("auth","Firebase",P1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Vy("@firebase/auth");function bO(t,...e){ld.logLevel<=Ye.WARN&&ld.warn(`Auth (${zl}): ${t}`,...e)}function Hf(t,...e){ld.logLevel<=Ye.ERROR&&ld.error(`Auth (${zl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,...e){throw Uy(t,...e)}function yi(t,...e){return Uy(t,...e)}function j1(t,e,n){const i={...EO(),[e]:n};return new Uc("auth","Firebase",i).create(e,{appName:t.name})}function os(t){return j1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uy(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return V1.create(t,...e)}function Oe(t,e,...n){if(!t)throw Uy(e,...n)}function ns(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hf(e),new Error(e)}function hs(t,e){t||ns(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wO(){return Ob()==="http:"||Ob()==="https:"}function Ob(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wO()||JI()||"connection"in navigator)?navigator.onLine:!0}function SO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.shortDelay=e,this.longDelay=n,hs(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||ek()}get(){return TO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){hs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RO=new Bc(3e4,6e4);function ga(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function gs(t,e,n,i,a={}){return U1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=qc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return ZI()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Bl(t.emulatorConfig.host)&&(g.credentials="include"),L1.fetch()(await q1(t,t.config.apiHost,n,d),g)})}async function U1(t,e,n){t._canInitEmulator=!1;const i={...xO,...e};try{const a=new DO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw xf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw xf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw xf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw xf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw j1(t,v,g);Hr(t,v)}}catch(a){if(a instanceof ms)throw a;Hr(t,"network-request-failed",{message:String(a)})}}async function zc(t,e,n,i,a={}){const l=await gs(t,e,n,i,a);return"mfaPendingCredential"in l&&Hr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function q1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?qy(t.config,a):`${t.config.apiScheme}://${a}`;return AO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function CO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yi(this.auth,"network-request-failed")),RO.get())})}}function xf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=yi(t,e,i);return a.customData._tokenResponse=n,a}function Mb(t){return t!==void 0&&t.enterprise!==void 0}class IO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kO(t,e){return gs(t,"GET","/v2/recaptchaConfig",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function ud(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MO(t,e=!1){const n=Jt(t),i=await n.getIdToken(e),a=By(i);Oe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:pc(bg(a.auth_time)),issuedAtTime:pc(bg(a.iat)),expirationTime:pc(bg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function bg(t){return Number(t)*1e3}function By(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Hf("JWT malformed, contained fewer than 3 sections"),null;try{const a=T1(n);return a?JSON.parse(a):(Hf("Failed to decode base64 JWT payload"),null)}catch(a){return Hf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Nb(t){const e=By(t);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ms&&NO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function NO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pc(this.lastLoginAt),this.creationTime=pc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t){var E;const e=t.auth,n=await t.getIdToken(),i=await Cl(t,ud(e,{idToken:n}));Oe(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(E=a.providerUserInfo)!=null&&E.length?B1(a.providerUserInfo):[],c=jO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new ey(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function VO(t){const e=Jt(t);await cd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function B1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){const n=await U1(t,{},async()=>{const i=qc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await q1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Bl(t.emulatorConfig.host)&&(p.credentials="include"),L1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UO(t,e){return gs(t,"POST","/v2/accounts:revokeToken",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Oe(e.length!==0,"internal-error");const n=Nb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await LO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new yl;return i&&(Oe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Oe(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Oe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yl,this.toJSON())}_performRefresh(){return ns("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){Oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new PO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ey(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Cl(this,this.stsTokenManager.getToken(this.auth,e));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MO(this,e)}reload(){return VO(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await cd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ir(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Cl(this,OO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:E,emailVerified:T,isAnonymous:I,providerData:V,stsTokenManager:q}=n;Oe(E&&q,e,"internal-error");const M=yl.fromJSON(this.name,q);Oe(typeof E=="string",e,"internal-error"),Ys(i,e.name),Ys(a,e.name),Oe(typeof T=="boolean",e,"internal-error"),Oe(typeof I=="boolean",e,"internal-error"),Ys(l,e.name),Ys(c,e.name),Ys(d,e.name),Ys(p,e.name),Ys(g,e.name),Ys(v,e.name);const F=new Br({uid:E,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:I,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:M,createdAt:g,lastLoginAt:v});return V&&Array.isArray(V)&&(F.providerData=V.map(G=>({...G}))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,n,i=!1){const a=new yl;a.updateFromServerResponse(n);const l=new Br({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await cd(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];Oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?B1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new yl;d.updateFromIdToken(i);const p=new Br({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new ey(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Map;function rs(t){hs(t instanceof Function,"Expected a class definition");let e=Pb.get(t);return e?(hs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pb.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z1.type="NONE";const Vb=z1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e,n){return`firebase:${t}:${e}:${n}`}class _l{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Gf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Gf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ud(this.auth,{idToken:e}).catch(()=>{});return n?Br._fromGetAccountInfoResponse(this.auth,n,e):null}return Br._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new _l(rs(Vb),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||rs(Vb);const c=Gf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const T=await ud(e,{idToken:v}).catch(()=>{});if(!T)break;E=await Br._fromGetAccountInfoResponse(e,T,v)}else E=Br._fromJSON(e,v);g!==l&&(d=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new _l(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new _l(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W1(e))return"Blackberry";if(Q1(e))return"Webos";if(F1(e))return"Safari";if((e.includes("chrome/")||H1(e))&&!e.includes("edge/"))return"Chrome";if(Y1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $1(t=Ln()){return/firefox\//i.test(t)}function F1(t=Ln()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H1(t=Ln()){return/crios\//i.test(t)}function G1(t=Ln()){return/iemobile/i.test(t)}function Y1(t=Ln()){return/android/i.test(t)}function W1(t=Ln()){return/blackberry/i.test(t)}function Q1(t=Ln()){return/webos/i.test(t)}function zy(t=Ln()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qO(t=Ln()){var e;return zy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function BO(){return tk()&&document.documentMode===10}function K1(t=Ln()){return zy(t)||Y1(t)||Q1(t)||W1(t)||/windows phone/i.test(t)||G1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t,e=[]){let n;switch(t){case"Browser":n=jb(Ln());break;case"Worker":n=`${jb(Ln())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zl}/${i}`}/**
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
 */class zO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function $O(t,e={}){return gs(t,"GET","/v2/passwordPolicy",ga(t,e))}/**
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
 */const FO=6;class HO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lb(this),this.idTokenSubscription=new Lb(this),this.beforeStateQueue=new zO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rs(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await _l.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ud(this,{idToken:e}),i=await Br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Ir(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ir(this.app))return Promise.reject(os(this));const n=e?Jt(e):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ir(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ir(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $O(this),n=new HO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Uc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await UO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rs(e)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await _l.create(this,[rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Ir(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fo(t){return Jt(t)}class Lb{constructor(e){this.auth=e,this.observer=null,this.addObserver=uk(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YO(t){Pd=t}function Z1(t){return Pd.loadJS(t)}function WO(){return Pd.recaptchaEnterpriseScript}function QO(){return Pd.gapiScript}function KO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XO{constructor(){this.enterprise=new ZO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JO="recaptcha-enterprise",J1="NO_RECAPTCHA";class eM{constructor(e){this.type=JO,this.auth=fo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{kO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new IO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Mb(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(J1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Mb(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=WO();p.length!==0&&(p+=d),Z1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Ub(t,e,n,i=!1,a=!1){const l=new eM(t);let c;if(a)c=J1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ty(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ub(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ub(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t,e){const n=Ly(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(ao(l,e??{}))return a;Hr(a,"already-initialized")}return n.initialize({options:e})}function nM(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(rs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function rM(t,e,n){const i=fo(t);Oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=eS(e),{host:c,port:d}=iM(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(ao(g,i.config.emulator)&&ao(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Bl(c)?(R1(`${l}//${c}${p}`),C1("Auth",!0)):sM()}function eS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iM(t){const e=eS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:qb(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:qb(c)}}}function qb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ns("not implemented")}_getIdTokenResponse(e){return ns("not implemented")}_linkToIdToken(e,n){return ns("not implemented")}_getReauthenticationResolver(e){return ns("not implemented")}}async function aM(t,e){return gs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e){return zc(t,"POST","/v1/accounts:signInWithPassword",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",ga(t,e))}async function uM(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends $y{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Sc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Sc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ty(e,n,"signInWithPassword",oM);case"emailLink":return lM(e,{email:this._email,oobCode:this._password});default:Hr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ty(e,i,"signUpPassword",aM);case"emailLink":return uM(e,{idToken:n,email:this._email,oobCode:this._password});default:Hr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t,e){return zc(t,"POST","/v1/accounts:signInWithIdp",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="http://localhost";class lo extends $y{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new lo(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return vl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vl(e,n)}buildRequest(){const e={requestUri:cM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fM(t){const e=sc(ac(t)).link,n=e?sc(ac(e)).deep_link_id:null,i=sc(ac(t)).deep_link_id;return(i?sc(ac(i)).link:null)||i||n||e||t}class Fy{constructor(e){const n=sc(ac(e)),i=n.apiKey??null,a=n.oobCode??null,l=hM(n.mode??null);Oe(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fM(e);try{return new Fy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.providerId=$l.PROVIDER_ID}static credential(e,n){return Sc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Fy.parseLink(n);return Oe(i,"argument-error"),Sc._fromEmailAndCode(e,i.code,i.tenantId)}}$l.PROVIDER_ID="password";$l.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$l.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends tS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends $c{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xs.credential(e.oauthAccessToken)}catch{return null}}}Xs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends $c{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lo._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Zs.credential(n,i)}catch{return null}}}Zs.GOOGLE_SIGN_IN_METHOD="google.com";Zs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends $c{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:Js.PROVIDER_ID,signInMethod:Js.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Js.credentialFromTaggedObject(e)}static credentialFromError(e){return Js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Js.credential(e.oauthAccessToken)}catch{return null}}}Js.GITHUB_SIGN_IN_METHOD="github.com";Js.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends $c{constructor(){super("twitter.com")}static credential(e,n){return lo._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ea.credentialFromTaggedObject(e)}static credentialFromError(e){return ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ea.credential(n,i)}catch{return null}}}ea.TWITTER_SIGN_IN_METHOD="twitter.com";ea.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(t,e){return zc(t,"POST","/v1/accounts:signUp",ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Br._fromIdTokenResponse(e,i,a),c=Bb(i);return new uo({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=Bb(i);return new uo({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function Bb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends ms{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,hd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new hd(e,n,i,a)}}function nS(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?hd._fromErrorAndOperation(t,l,e,i):l})}async function pM(t,e,n=!1){const i=await Cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t,e,n=!1){const{auth:i}=t;if(Ir(i.app))return Promise.reject(os(i));const a="reauthenticate";try{const l=await Cl(t,nS(i,a,e,t),n);Oe(l.idToken,i,"internal-error");const c=By(l.idToken);Oe(c,i,"internal-error");const{sub:d}=c;return Oe(t.uid===d,i,"user-mismatch"),uo._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Hr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e,n=!1){if(Ir(t.app))return Promise.reject(os(t));const i="signIn",a=await nS(t,i,e),l=await uo._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function gM(t,e){return rS(fo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t){const e=fo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yM(t,e,n){if(Ir(t.app))return Promise.reject(os(t));const i=fo(t),c=await ty(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&iS(t),p}),d=await uo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function _M(t,e,n){return Ir(t.app)?Promise.reject(os(t)):gM(Jt(t),$l.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&iS(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vM(t,e){return gs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Jt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await Cl(i,vM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function bM(t,e,n,i){return Jt(t).onIdTokenChanged(e,n,i)}function wM(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}function Fc(t,e,n,i){return Jt(t).onAuthStateChanged(e,n,i)}function TM(t){return Jt(t).signOut()}const fd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fd,"1"),this.storage.removeItem(fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=1e3,xM=10;class aS extends sS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=K1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);BO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,xM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},SM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aS.type="LOCAL";const AM=aS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS extends sS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oS.type="SESSION";const lS=oS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Vd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await RM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Hy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(E){const T=E;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function DM(t){_i().location.href=t}/**
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
 */function uS(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function IM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function OM(){return uS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="firebaseLocalStorageDb",MM=1,dd="firebaseLocalStorage",hS="fbase_key";class Hc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jd(t,e){return t.transaction([dd],e?"readwrite":"readonly").objectStore(dd)}function NM(){const t=indexedDB.deleteDatabase(cS);return new Hc(t).toPromise()}function ny(){const t=indexedDB.open(cS,MM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(dd,{keyPath:hS})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(dd)?e(i):(i.close(),await NM(),e(await ny()))})})}async function zb(t,e,n){const i=jd(t,!0).put({[hS]:e,value:n});return new Hc(i).toPromise()}async function PM(t,e){const n=jd(t,!1).get(e),i=await new Hc(n).toPromise();return i===void 0?null:i.value}function $b(t,e){const n=jd(t,!0).delete(e);return new Hc(n).toPromise()}const VM=800,jM=3;class fS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ny(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>jM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vd._getInstance(OM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await IM(),!this.activeServiceWorker)return;this.sender=new CM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ny();return await zb(e,fd,"1"),await $b(e,fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>zb(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>PM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$b(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=jd(a,!1).getAll();return new Hc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fS.type="LOCAL";const LM=fS;new Bc(3e4,6e4);/**
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
 */function UM(t,e){return e?rs(e):(Oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy extends $y{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qM(t){return rS(t.auth,new Gy(t),t.bypassAuthState)}function BM(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),mM(n,new Gy(t),t.bypassAuthState)}async function zM(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),pM(n,new Gy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qM;case"linkViaPopup":case"linkViaRedirect":return zM;case"reauthViaPopup":case"reauthViaRedirect":return BM;default:Hr(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=new Bc(2e3,1e4);class gl extends dS{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,gl.currentPopupAction&&gl.currentPopupAction.cancel(),gl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){hs(this.filter.length===1,"Popup operations only handle one event");const e=Hy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$M.get())};e()}}gl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM="pendingRedirect",Yf=new Map;class HM extends dS{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Yf.get(this.auth._key());if(!e){try{const i=await GM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Yf.set(this.auth._key(),e)}return this.bypassAuthState||Yf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GM(t,e){const n=QM(e),i=WM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function YM(t,e){Yf.set(t._key(),e)}function WM(t){return rs(t._redirectPersistence)}function QM(t){return Gf(FM,t.config.apiKey,t.name)}async function KM(t,e,n=!1){if(Ir(t.app))return Promise.reject(os(t));const i=fo(t),a=UM(i,e),c=await new HM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=600*1e3;class ZM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!pS(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(yi(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fb(e))}saveEventToCache(e){this.cachedEventUids.add(Fb(e)),this.lastProcessedEventTime=Date.now()}}function Fb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nN=/^https?/;async function rN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eN(t);for(const n of e)try{if(iN(n))return}catch{}Hr(t,"unauthorized-domain")}function iN(t){const e=Jg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!nN.test(n))return!1;if(tN.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const sN=new Bc(3e4,6e4);function Hb(){const t=_i().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aN(t){return new Promise((e,n)=>{var a,l,c;function i(){Hb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hb(),n(yi(t,"network-request-failed"))},timeout:sN.get()})}if((l=(a=_i().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=_i().gapi)!=null&&c.load)i();else{const d=KO("iframefcb");return _i()[d]=()=>{gapi.load?i():n(yi(t,"network-request-failed"))},Z1(`${QO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw Wf=null,e})}let Wf=null;function oN(t){return Wf=Wf||aN(t),Wf}/**
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
 */const lN=new Bc(5e3,15e3),uN="__/auth/iframe",cN="emulator/auth/iframe",hN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dN(t){const e=t.config;Oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qy(e,cN):`https://${t.config.authDomain}/${uN}`,i={apiKey:e.apiKey,appName:t.name,v:zl},a=fN.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${qc(i).slice(1)}`}async function pN(t){const e=await oN(t),n=_i().gapi;return Oe(n,t,"internal-error"),e.open({where:document.body,url:dN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hN,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=yi(t,"network-request-failed"),d=_i().setTimeout(()=>{l(c)},lN.get());function p(){_i().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const mN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gN=500,yN=600,_N="_blank",vN="http://localhost";class Gb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(t,e,n,i=gN,a=yN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...mN,width:i.toString(),height:a.toString(),top:l,left:c},g=Ln().toLowerCase();n&&(d=H1(g)?_N:n),$1(g)&&(e=e||vN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[I,V])=>`${T}${I}=${V},`,"");if(qO(g)&&d!=="_self")return bN(e||"",d),new Gb(null);const E=window.open(e||"",d,v);Oe(E,t,"popup-blocked");try{E.focus()}catch{}return new Gb(E)}function bN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const wN="__/auth/handler",TN="emulator/auth/handler",SN=encodeURIComponent("fac");async function Yb(t,e,n,i,a,l){Oe(t.config.authDomain,t,"auth-domain-config-required"),Oe(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:zl,eventId:a};if(e instanceof tS){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",lk(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof $c){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${SN}=${encodeURIComponent(p)}`:"";return`${xN(t)}?${qc(d).slice(1)}${g}`}function xN({config:t}){return t.emulator?qy(t,TN):`https://${t.authDomain}/${wN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="webStorageSupport";class AN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lS,this._completeRedirectFn=KM,this._overrideRedirectResult=YM}async _openPopup(e,n,i,a){var c;hs((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Yb(e,n,i,Jg(),a);return EN(e,l,Hy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await Yb(e,n,i,Jg(),a);return DM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(hs(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await pN(e),i=new ZM(e);return n.register("authEvent",a=>(Oe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wg,{type:wg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[wg];l!==void 0&&n(!!l),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K1()||F1()||zy()}}const RN=AN;var Wb="@firebase/auth",Qb="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IN(t){Rl(new oo("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Oe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X1(t)},g=new GO(i,a,l,p);return nM(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rl(new oo("auth-internal",e=>{const n=fo(e.getProvider("auth").getImmediate());return(i=>new CN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sa(Wb,Qb,DN(t)),sa(Wb,Qb,"esm2020")}/**
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
 */const kN=300,ON=A1("authIdTokenMaxAge")||kN;let Kb=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ON)return;const a=n==null?void 0:n.token;Kb!==a&&(Kb=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function NN(t=O1()){const e=Ly(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tM(t,{popupRedirectResolver:RN,persistence:[LM,AM,lS]}),i=A1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=MN(l.toString());wM(n,c,()=>c(n.currentUser)),bM(n,d=>c(d))}}const a=S1("auth");return a&&rM(n,`http://${a}`),n}function PN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}YO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=yi("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",PN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IN("Browser");var VN="firebase",jN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sa(VN,jN,"app");var Xb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aa,mS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function O(){}O.prototype=R.prototype,D.D=R.prototype,D.prototype=new O,D.prototype.constructor=D,D.C=function(U,B,C){for(var x=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)x[ce-2]=arguments[ce];return R.prototype[B].apply(U,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,O){O||(O=0);var U=Array(16);if(typeof R=="string")for(var B=0;16>B;++B)U[B]=R.charCodeAt(O++)|R.charCodeAt(O++)<<8|R.charCodeAt(O++)<<16|R.charCodeAt(O++)<<24;else for(B=0;16>B;++B)U[B]=R[O++]|R[O++]<<8|R[O++]<<16|R[O++]<<24;R=D.g[0],O=D.g[1],B=D.g[2];var C=D.g[3],x=R+(C^O&(B^C))+U[0]+3614090360&4294967295;R=O+(x<<7&4294967295|x>>>25),x=C+(B^R&(O^B))+U[1]+3905402710&4294967295,C=R+(x<<12&4294967295|x>>>20),x=B+(O^C&(R^O))+U[2]+606105819&4294967295,B=C+(x<<17&4294967295|x>>>15),x=O+(R^B&(C^R))+U[3]+3250441966&4294967295,O=B+(x<<22&4294967295|x>>>10),x=R+(C^O&(B^C))+U[4]+4118548399&4294967295,R=O+(x<<7&4294967295|x>>>25),x=C+(B^R&(O^B))+U[5]+1200080426&4294967295,C=R+(x<<12&4294967295|x>>>20),x=B+(O^C&(R^O))+U[6]+2821735955&4294967295,B=C+(x<<17&4294967295|x>>>15),x=O+(R^B&(C^R))+U[7]+4249261313&4294967295,O=B+(x<<22&4294967295|x>>>10),x=R+(C^O&(B^C))+U[8]+1770035416&4294967295,R=O+(x<<7&4294967295|x>>>25),x=C+(B^R&(O^B))+U[9]+2336552879&4294967295,C=R+(x<<12&4294967295|x>>>20),x=B+(O^C&(R^O))+U[10]+4294925233&4294967295,B=C+(x<<17&4294967295|x>>>15),x=O+(R^B&(C^R))+U[11]+2304563134&4294967295,O=B+(x<<22&4294967295|x>>>10),x=R+(C^O&(B^C))+U[12]+1804603682&4294967295,R=O+(x<<7&4294967295|x>>>25),x=C+(B^R&(O^B))+U[13]+4254626195&4294967295,C=R+(x<<12&4294967295|x>>>20),x=B+(O^C&(R^O))+U[14]+2792965006&4294967295,B=C+(x<<17&4294967295|x>>>15),x=O+(R^B&(C^R))+U[15]+1236535329&4294967295,O=B+(x<<22&4294967295|x>>>10),x=R+(B^C&(O^B))+U[1]+4129170786&4294967295,R=O+(x<<5&4294967295|x>>>27),x=C+(O^B&(R^O))+U[6]+3225465664&4294967295,C=R+(x<<9&4294967295|x>>>23),x=B+(R^O&(C^R))+U[11]+643717713&4294967295,B=C+(x<<14&4294967295|x>>>18),x=O+(C^R&(B^C))+U[0]+3921069994&4294967295,O=B+(x<<20&4294967295|x>>>12),x=R+(B^C&(O^B))+U[5]+3593408605&4294967295,R=O+(x<<5&4294967295|x>>>27),x=C+(O^B&(R^O))+U[10]+38016083&4294967295,C=R+(x<<9&4294967295|x>>>23),x=B+(R^O&(C^R))+U[15]+3634488961&4294967295,B=C+(x<<14&4294967295|x>>>18),x=O+(C^R&(B^C))+U[4]+3889429448&4294967295,O=B+(x<<20&4294967295|x>>>12),x=R+(B^C&(O^B))+U[9]+568446438&4294967295,R=O+(x<<5&4294967295|x>>>27),x=C+(O^B&(R^O))+U[14]+3275163606&4294967295,C=R+(x<<9&4294967295|x>>>23),x=B+(R^O&(C^R))+U[3]+4107603335&4294967295,B=C+(x<<14&4294967295|x>>>18),x=O+(C^R&(B^C))+U[8]+1163531501&4294967295,O=B+(x<<20&4294967295|x>>>12),x=R+(B^C&(O^B))+U[13]+2850285829&4294967295,R=O+(x<<5&4294967295|x>>>27),x=C+(O^B&(R^O))+U[2]+4243563512&4294967295,C=R+(x<<9&4294967295|x>>>23),x=B+(R^O&(C^R))+U[7]+1735328473&4294967295,B=C+(x<<14&4294967295|x>>>18),x=O+(C^R&(B^C))+U[12]+2368359562&4294967295,O=B+(x<<20&4294967295|x>>>12),x=R+(O^B^C)+U[5]+4294588738&4294967295,R=O+(x<<4&4294967295|x>>>28),x=C+(R^O^B)+U[8]+2272392833&4294967295,C=R+(x<<11&4294967295|x>>>21),x=B+(C^R^O)+U[11]+1839030562&4294967295,B=C+(x<<16&4294967295|x>>>16),x=O+(B^C^R)+U[14]+4259657740&4294967295,O=B+(x<<23&4294967295|x>>>9),x=R+(O^B^C)+U[1]+2763975236&4294967295,R=O+(x<<4&4294967295|x>>>28),x=C+(R^O^B)+U[4]+1272893353&4294967295,C=R+(x<<11&4294967295|x>>>21),x=B+(C^R^O)+U[7]+4139469664&4294967295,B=C+(x<<16&4294967295|x>>>16),x=O+(B^C^R)+U[10]+3200236656&4294967295,O=B+(x<<23&4294967295|x>>>9),x=R+(O^B^C)+U[13]+681279174&4294967295,R=O+(x<<4&4294967295|x>>>28),x=C+(R^O^B)+U[0]+3936430074&4294967295,C=R+(x<<11&4294967295|x>>>21),x=B+(C^R^O)+U[3]+3572445317&4294967295,B=C+(x<<16&4294967295|x>>>16),x=O+(B^C^R)+U[6]+76029189&4294967295,O=B+(x<<23&4294967295|x>>>9),x=R+(O^B^C)+U[9]+3654602809&4294967295,R=O+(x<<4&4294967295|x>>>28),x=C+(R^O^B)+U[12]+3873151461&4294967295,C=R+(x<<11&4294967295|x>>>21),x=B+(C^R^O)+U[15]+530742520&4294967295,B=C+(x<<16&4294967295|x>>>16),x=O+(B^C^R)+U[2]+3299628645&4294967295,O=B+(x<<23&4294967295|x>>>9),x=R+(B^(O|~C))+U[0]+4096336452&4294967295,R=O+(x<<6&4294967295|x>>>26),x=C+(O^(R|~B))+U[7]+1126891415&4294967295,C=R+(x<<10&4294967295|x>>>22),x=B+(R^(C|~O))+U[14]+2878612391&4294967295,B=C+(x<<15&4294967295|x>>>17),x=O+(C^(B|~R))+U[5]+4237533241&4294967295,O=B+(x<<21&4294967295|x>>>11),x=R+(B^(O|~C))+U[12]+1700485571&4294967295,R=O+(x<<6&4294967295|x>>>26),x=C+(O^(R|~B))+U[3]+2399980690&4294967295,C=R+(x<<10&4294967295|x>>>22),x=B+(R^(C|~O))+U[10]+4293915773&4294967295,B=C+(x<<15&4294967295|x>>>17),x=O+(C^(B|~R))+U[1]+2240044497&4294967295,O=B+(x<<21&4294967295|x>>>11),x=R+(B^(O|~C))+U[8]+1873313359&4294967295,R=O+(x<<6&4294967295|x>>>26),x=C+(O^(R|~B))+U[15]+4264355552&4294967295,C=R+(x<<10&4294967295|x>>>22),x=B+(R^(C|~O))+U[6]+2734768916&4294967295,B=C+(x<<15&4294967295|x>>>17),x=O+(C^(B|~R))+U[13]+1309151649&4294967295,O=B+(x<<21&4294967295|x>>>11),x=R+(B^(O|~C))+U[4]+4149444226&4294967295,R=O+(x<<6&4294967295|x>>>26),x=C+(O^(R|~B))+U[11]+3174756917&4294967295,C=R+(x<<10&4294967295|x>>>22),x=B+(R^(C|~O))+U[2]+718787259&4294967295,B=C+(x<<15&4294967295|x>>>17),x=O+(C^(B|~R))+U[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(B+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+B&4294967295,D.g[3]=D.g[3]+C&4294967295}i.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var O=R-this.blockSize,U=this.B,B=this.h,C=0;C<R;){if(B==0)for(;C<=O;)a(this,D,C),C+=this.blockSize;if(typeof D=="string"){for(;C<R;)if(U[B++]=D.charCodeAt(C++),B==this.blockSize){a(this,U),B=0;break}}else for(;C<R;)if(U[B++]=D[C++],B==this.blockSize){a(this,U),B=0;break}}this.h=B,this.o+=R},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var O=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=O&255,O/=256;for(this.u(D),D=Array(16),R=O=0;4>R;++R)for(var U=0;32>U;U+=8)D[O++]=this.g[R]>>>U&255;return D};function l(D,R){var O=d;return Object.prototype.hasOwnProperty.call(O,D)?O[D]:O[D]=R(D)}function c(D,R){this.h=R;for(var O=[],U=!0,B=D.length-1;0<=B;B--){var C=D[B]|0;U&&C==R||(O[B]=C,U=!1)}this.g=O}var d={};function p(D){return-128<=D&&128>D?l(D,function(R){return new c([R|0],0>R?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return M(g(-D));for(var R=[],O=1,U=0;D>=O;U++)R[U]=D/O|0,O*=4294967296;return new c(R,0)}function v(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return M(v(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var O=g(Math.pow(R,8)),U=E,B=0;B<D.length;B+=8){var C=Math.min(8,D.length-B),x=parseInt(D.substring(B,B+C),R);8>C?(C=g(Math.pow(R,C)),U=U.j(C).add(g(x))):(U=U.j(O),U=U.add(g(x)))}return U}var E=p(0),T=p(1),I=p(16777216);t=c.prototype,t.m=function(){if(q(this))return-M(this).m();for(var D=0,R=1,O=0;O<this.g.length;O++){var U=this.i(O);D+=(0<=U?U:4294967296+U)*R,R*=4294967296}return D},t.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(V(this))return"0";if(q(this))return"-"+M(this).toString(D);for(var R=g(Math.pow(D,6)),O=this,U="";;){var B=te(O,R).g;O=F(O,B.j(R));var C=((0<O.g.length?O.g[0]:O.h)>>>0).toString(D);if(O=B,V(O))return C+U;for(;6>C.length;)C="0"+C;U=C+U}},t.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function V(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function q(D){return D.h==-1}t.l=function(D){return D=F(this,D),q(D)?-1:V(D)?0:1};function M(D){for(var R=D.g.length,O=[],U=0;U<R;U++)O[U]=~D.g[U];return new c(O,~D.h).add(T)}t.abs=function(){return q(this)?M(this):this},t.add=function(D){for(var R=Math.max(this.g.length,D.g.length),O=[],U=0,B=0;B<=R;B++){var C=U+(this.i(B)&65535)+(D.i(B)&65535),x=(C>>>16)+(this.i(B)>>>16)+(D.i(B)>>>16);U=x>>>16,C&=65535,x&=65535,O[B]=x<<16|C}return new c(O,O[O.length-1]&-2147483648?-1:0)};function F(D,R){return D.add(M(R))}t.j=function(D){if(V(this)||V(D))return E;if(q(this))return q(D)?M(this).j(M(D)):M(M(this).j(D));if(q(D))return M(this.j(M(D)));if(0>this.l(I)&&0>D.l(I))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,O=[],U=0;U<2*R;U++)O[U]=0;for(U=0;U<this.g.length;U++)for(var B=0;B<D.g.length;B++){var C=this.i(U)>>>16,x=this.i(U)&65535,ce=D.i(B)>>>16,ye=D.i(B)&65535;O[2*U+2*B]+=x*ye,G(O,2*U+2*B),O[2*U+2*B+1]+=C*ye,G(O,2*U+2*B+1),O[2*U+2*B+1]+=x*ce,G(O,2*U+2*B+1),O[2*U+2*B+2]+=C*ce,G(O,2*U+2*B+2)}for(U=0;U<R;U++)O[U]=O[2*U+1]<<16|O[2*U];for(U=R;U<2*R;U++)O[U]=0;return new c(O,0)};function G(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function P(D,R){this.g=D,this.h=R}function te(D,R){if(V(R))throw Error("division by zero");if(V(D))return new P(E,E);if(q(D))return R=te(M(D),R),new P(M(R.g),M(R.h));if(q(R))return R=te(D,M(R)),new P(M(R.g),R.h);if(30<D.g.length){if(q(D)||q(R))throw Error("slowDivide_ only works with positive integers.");for(var O=T,U=R;0>=U.l(D);)O=$(O),U=$(U);var B=re(O,1),C=re(U,1);for(U=re(U,2),O=re(O,2);!V(U);){var x=C.add(U);0>=x.l(D)&&(B=B.add(O),C=x),U=re(U,1),O=re(O,1)}return R=F(D,B.j(R)),new P(B,R)}for(B=E;0<=D.l(R);){for(O=Math.max(1,Math.floor(D.m()/R.m())),U=Math.ceil(Math.log(O)/Math.LN2),U=48>=U?1:Math.pow(2,U-48),C=g(O),x=C.j(R);q(x)||0<x.l(D);)O-=U,C=g(O),x=C.j(R);V(C)&&(C=T),B=B.add(C),D=F(D,x)}return new P(B,D)}t.A=function(D){return te(this,D).h},t.and=function(D){for(var R=Math.max(this.g.length,D.g.length),O=[],U=0;U<R;U++)O[U]=this.i(U)&D.i(U);return new c(O,this.h&D.h)},t.or=function(D){for(var R=Math.max(this.g.length,D.g.length),O=[],U=0;U<R;U++)O[U]=this.i(U)|D.i(U);return new c(O,this.h|D.h)},t.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),O=[],U=0;U<R;U++)O[U]=this.i(U)^D.i(U);return new c(O,this.h^D.h)};function $(D){for(var R=D.g.length+1,O=[],U=0;U<R;U++)O[U]=D.i(U)<<1|D.i(U-1)>>>31;return new c(O,D.h)}function re(D,R){var O=R>>5;R%=32;for(var U=D.g.length-O,B=[],C=0;C<U;C++)B[C]=0<R?D.i(C+O)>>>R|D.i(C+O+1)<<32-R:D.i(C+O);return new c(B,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,mS=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,aa=c}).apply(typeof Xb<"u"?Xb:typeof self<"u"?self:typeof window<"u"?window:{});var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gS,oc,yS,Qf,ry,_S,vS,ES;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,b){return h==Array.prototype||h==Object.prototype||(h[_]=b.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Af=="object"&&Af];for(var _=0;_<h.length;++_){var b=h[_];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var i=n(this);function a(h,_){if(_)e:{var b=i;h=h.split(".");for(var A=0;A<h.length-1;A++){var W=h[A];if(!(W in b))break e;b=b[W]}h=h[h.length-1],A=b[h],_=_(A),_!=A&&_!=null&&e(b,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var b=0,A=!1,W={next:function(){if(!A&&b<h.length){var ee=b++;return{value:_(ee,h[ee]),done:!1}}return A=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,b){return h.call.apply(h.bind,arguments)}function E(h,_,b){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var W=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(W,A),h.apply(_,W)}}return function(){return h.apply(_,arguments)}}function T(h,_,b){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function I(h,_){var b=Array.prototype.slice.call(arguments,1);return function(){var A=b.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function V(h,_){function b(){}b.prototype=_.prototype,h.aa=_.prototype,h.prototype=new b,h.prototype.constructor=h,h.Qb=function(A,W,ee){for(var me=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)me[Ke-2]=arguments[Ke];return _.prototype[W].apply(A,me)}}function q(h){const _=h.length;if(0<_){const b=Array(_);for(let A=0;A<_;A++)b[A]=h[A];return b}return[]}function M(h,_){for(let b=1;b<arguments.length;b++){const A=arguments[b];if(p(A)){const W=h.length||0,ee=A.length||0;h.length=W+ee;for(let me=0;me<ee;me++)h[W+me]=A[me]}else h.push(A)}}class F{constructor(_,b){this.i=_,this.j=b,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function G(h){return/^[\s\xa0]*$/.test(h)}function P(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function te(h){return te[" "](h),h}te[" "]=function(){};var $=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function re(h,_,b){for(const A in h)_.call(b,h[A],A,h)}function D(h,_){for(const b in h)_.call(void 0,h[b],b,h)}function R(h){const _={};for(const b in h)_[b]=h[b];return _}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(h,_){let b,A;for(let W=1;W<arguments.length;W++){A=arguments[W];for(b in A)h[b]=A[b];for(let ee=0;ee<O.length;ee++)b=O[ee],Object.prototype.hasOwnProperty.call(A,b)&&(h[b]=A[b])}}function B(h){var _=1;h=h.split(":");const b=[];for(;0<_&&h.length;)b.push(h.shift()),_--;return h.length&&b.push(h.join(":")),b}function C(h){d.setTimeout(()=>{throw h},0)}function x(){var h=de;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ce{constructor(){this.h=this.g=null}add(_,b){const A=ye.get();A.set(_,b),this.h?this.h.next=A:this.g=A,this.h=A}}var ye=new F(()=>new k,h=>h.reset());class k{constructor(){this.next=this.g=this.h=null}set(_,b){this.h=_,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let J,se=!1,de=new ce,N=()=>{const h=d.Promise.resolve(void 0);J=()=>{h.then(ne)}};var ne=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(b){C(b)}var _=ye;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}se=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const b=()=>{};d.addEventListener("test",b,_),d.removeEventListener("test",b,_)}catch{}return h}();function Ae(h,_){if(ue.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var b=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if($){e:{try{te(_.nodeName);var W=!0;break e}catch{}W=!1}W||(_=null)}}else b=="mouseover"?_=h.fromElement:b=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Te[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,ue);var Te={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Tt(h,_,b,A,W){this.listener=h,this.proxy=null,this.src=_,this.type=b,this.capture=!!A,this.ha=W,this.key=++Fe,this.da=this.fa=!1}function In(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ln(h){this.src=h,this.g={},this.h=0}ln.prototype.add=function(h,_,b,A,W){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var me=De(h,_,A,W);return-1<me?(_=h[me],b||(_.fa=!1)):(_=new Tt(_,this.src,ee,!!A,W),_.fa=b,h.push(_)),_};function pe(h,_){var b=_.type;if(b in h.g){var A=h.g[b],W=Array.prototype.indexOf.call(A,_,void 0),ee;(ee=0<=W)&&Array.prototype.splice.call(A,W,1),ee&&(In(_),h.g[b].length==0&&(delete h.g[b],h.h--))}}function De(h,_,b,A){for(var W=0;W<h.length;++W){var ee=h[W];if(!ee.da&&ee.listener==_&&ee.capture==!!b&&ee.ha==A)return W}return-1}var we="closure_lm_"+(1e6*Math.random()|0),Le={};function ut(h,_,b,A,W){if(Array.isArray(_)){for(var ee=0;ee<_.length;ee++)ut(h,_[ee],b,A,W);return null}return b=yo(b),h&&h[_t]?h.K(_,b,g(A)?!!A.capture:!1,W):jt(h,_,b,!1,A,W)}function jt(h,_,b,A,W,ee){if(!_)throw Error("Invalid event type");var me=g(W)?!!W.capture:!!W,Ke=Wr(h);if(Ke||(h[we]=Ke=new ln(h)),b=Ke.add(_,b,A,me,ee),b.proxy)return b;if(A=pr(),b.proxy=A,A.src=h,A.listener=b,h.addEventListener)ve||(W=me),W===void 0&&(W=!1),h.addEventListener(_.toString(),A,W);else if(h.attachEvent)h.attachEvent(Jn(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return b}function pr(){function h(b){return _.call(h.src,h.listener,b)}const _=go;return h}function mr(h,_,b,A,W){if(Array.isArray(_))for(var ee=0;ee<_.length;ee++)mr(h,_[ee],b,A,W);else A=g(A)?!!A.capture:!!A,b=yo(b),h&&h[_t]?(h=h.i,_=String(_).toString(),_ in h.g&&(ee=h.g[_],b=De(ee,b,A,W),-1<b&&(In(ee[b]),Array.prototype.splice.call(ee,b,1),ee.length==0&&(delete h.g[_],h.h--)))):h&&(h=Wr(h))&&(_=h.g[_.toString()],h=-1,_&&(h=De(_,b,A,W)),(b=-1<h?_[h]:null)&&Yn(b))}function Yn(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[_t])pe(_.i,h);else{var b=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(b,A,h.capture):_.detachEvent?_.detachEvent(Jn(b),A):_.addListener&&_.removeListener&&_.removeListener(A),(b=Wr(_))?(pe(b,h),b.h==0&&(b.src=null,_[we]=null)):In(h)}}}function Jn(h){return h in Le?Le[h]:Le[h]="on"+h}function go(h,_){if(h.da)h=!0;else{_=new Ae(_,this);var b=h.listener,A=h.ha||h.src;h.fa&&Yn(h),h=b.call(A,_)}return h}function Wr(h){return h=h[we],h instanceof ln?h:null}var Ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(h){return typeof h=="function"?h:(h[Ai]||(h[Ai]=function(_){return h.handleEvent(_)}),h[Ai])}function xt(){le.call(this),this.i=new ln(this),this.M=this,this.F=null}V(xt,le),xt.prototype[_t]=!0,xt.prototype.removeEventListener=function(h,_,b,A){mr(this,h,_,b,A)};function nt(h,_){var b,A=h.F;if(A)for(b=[];A;A=A.F)b.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ue(_,h);else if(_ instanceof ue)_.target=_.target||h;else{var W=_;_=new ue(A,h),U(_,W)}if(W=!0,b)for(var ee=b.length-1;0<=ee;ee--){var me=_.g=b[ee];W=Un(me,A,!0,_)&&W}if(me=_.g=h,W=Un(me,A,!0,_)&&W,W=Un(me,A,!1,_)&&W,b)for(ee=0;ee<b.length;ee++)me=_.g=b[ee],W=Un(me,A,!1,_)&&W}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var b=h.g[_],A=0;A<b.length;A++)In(b[A]);delete h.g[_],h.h--}}this.F=null},xt.prototype.K=function(h,_,b,A){return this.i.add(String(h),_,!1,b,A)},xt.prototype.L=function(h,_,b,A){return this.i.add(String(h),_,!0,b,A)};function Un(h,_,b,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var W=!0,ee=0;ee<_.length;++ee){var me=_[ee];if(me&&!me.da&&me.capture==b){var Ke=me.listener,tn=me.ha||me.src;me.fa&&pe(h.i,me),W=Ke.call(tn,A)!==!1&&W}}return W&&!A.defaultPrevented}function un(h,_,b){if(typeof h=="function")b&&(h=T(h,b));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function _o(h){h.g=un(()=>{h.g=null,h.i&&(h.i=!1,_o(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Kl extends le{constructor(_,b){super(),this.m=_,this.l=b,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(h){le.call(this),this.h=h,this.g={}}V(Ri,le);var Ci=[];function Di(h){re(h.g,function(_,b){this.g.hasOwnProperty(b)&&Yn(_)},h),h.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),Di(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=d.JSON.stringify,Ii=d.JSON.parse,ki=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function _s(){}_s.prototype.h=null;function je(h){return h.h||(h.h=h.i())}function it(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){ue.call(this,"d")}V(et,ue);function cn(){ue.call(this,"c")}V(cn,ue);var Ue={},Ea=null;function Qr(){return Ea=Ea||new xt}Ue.La="serverreachability";function vs(h){ue.call(this,Ue.La,h)}V(vs,ue);function gr(h){const _=Qr();nt(_,new vs(_))}Ue.STAT_EVENT="statevent";function Es(h,_){ue.call(this,Ue.STAT_EVENT,h),this.stat=_}V(Es,ue);function At(h){const _=Qr();nt(_,new Es(_,h))}Ue.Ma="timingevent";function en(h,_){ue.call(this,Ue.Ma,h),this.size=_}V(en,ue);function zt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function yr(){this.g=!0}yr.prototype.xa=function(){this.g=!1};function Xl(h,_,b,A,W,ee){h.info(function(){if(h.g)if(ee)for(var me="",Ke=ee.split("&"),tn=0;tn<Ke.length;tn++){var Xe=Ke[tn].split("=");if(1<Xe.length){var fn=Xe[0];Xe=Xe[1];var nn=fn.split("_");me=2<=nn.length&&nn[1]=="type"?me+(fn+"="+Xe+"&"):me+(fn+"=redacted&")}}else me=null;else me=ee;return"XMLHTTP REQ ("+A+") [attempt "+W+"]: "+_+`
`+b+`
`+me})}function op(h,_,b,A,W,ee,me){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+W+"]: "+_+`
`+b+`
`+ee+" "+me})}function bs(h,_,b,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ba(h,b)+(A?" "+A:"")})}function th(h,_){h.info(function(){return"TIMEOUT: "+_})}yr.prototype.info=function(){};function ba(h,_){if(!h.g)return _;if(!_)return null;try{var b=JSON.parse(_);if(b){for(h=0;h<b.length;h++)if(Array.isArray(b[h])){var A=b[h];if(!(2>A.length)){var W=A[1];if(Array.isArray(W)&&!(1>W.length)){var ee=W[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var me=1;me<W.length;me++)W[me]=""}}}}return er(b)}catch{return _}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kr;function Xr(){}V(Xr,_s),Xr.prototype.g=function(){return new XMLHttpRequest},Xr.prototype.i=function(){return{}},Kr=new Xr;function qn(h,_,b,A){this.j=h,this.i=_,this.l=b,this.R=A||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lt}function Lt(){this.i=null,this.g="",this.h=!1}var Zl={},vo={};function Nr(h,_,b){h.L=1,h.v=Aa(tr(_)),h.m=b,h.P=!0,Mi(h,null)}function Mi(h,_){h.F=Date.now(),wa(h),h.A=tr(h.v);var b=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),iu(b.i,"t",A),h.C=0,b=h.j.J,h.h=new Lt,h.g=yh(h.j,b?_:null,!h.m),0<h.O&&(h.M=new Kl(T(h.Y,h,h.g),h.O)),_=h.U,b=h.g,A=h.ca;var W="readystatechange";Array.isArray(W)||(W&&(Ci[0]=W.toString()),W=Ci);for(var ee=0;ee<W.length;ee++){var me=ut(b,W[ee],A||_.handleEvent,!1,_.h||_);if(!me)break;_.g[me.key]=me}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),gr(),Xl(h.i,h.u,h.A,h.l,h.R,h.m)}qn.prototype.ca=function(h){h=h.target;const _=this.M;_&&br(h)==3?_.j():this.Y(h)},qn.prototype.Y=function(h){try{if(h==this.g)e:{const nn=br(this.g);var _=this.g.Ba();const Bi=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||uh(this.g)))){this.J||nn!=4||_==7||(_==8||0>=Bi?gr(3):gr(2)),Ts(this);var b=this.g.Z();this.X=b;t:if(nh(this)){var A=uh(this.g);h="";var W=A.length,ee=br(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Zr(this);var me="";break t}this.h.i=new d.TextDecoder}for(_=0;_<W;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(ee&&_==W-1)});A.length=0,this.h.g+=h,this.C=0,me=this.h.g}else me=this.g.oa();if(this.o=b==200,op(this.i,this.u,this.A,this.l,this.R,nn,b),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,tn=this.g;if((Ke=tn.g?tn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ke)){var Xe=Ke;break t}}Xe=null}if(b=Xe)bs(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,b);else{this.o=!1,this.s=3,At(12),bn(this),Zr(this);break e}}if(this.P){b=!0;let wn;for(;!this.J&&this.C<me.length;)if(wn=rh(this,me),wn==vo){nn==4&&(this.s=4,At(14),b=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Zl){this.s=4,At(15),bs(this.i,this.l,me,"[Invalid Chunk]"),b=!1;break}else bs(this.i,this.l,wn,null),Ta(this,wn);if(nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||me.length!=0||this.h.h||(this.s=1,At(16),b=!1),this.o=this.o&&b,!b)bs(this.i,this.l,me,"[Invalid Chunked Response]"),bn(this),Zr(this);else if(0<me.length&&!this.W){this.W=!0;var fn=this.j;fn.g==this&&fn.ba&&!fn.M&&(fn.j.info("Great, no buffering proxy detected. Bytes received: "+me.length),Na(fn),fn.M=!0,At(11))}}else bs(this.i,this.l,me,null),Ta(this,me);nn==4&&bn(this),this.o&&!this.J&&(nn==4?ph(this.j,this):(this.o=!1,wa(this)))}else fp(this.g),b==400&&0<me.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),bn(this),Zr(this)}}}catch{}finally{}};function nh(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function rh(h,_){var b=h.C,A=_.indexOf(`
`,b);return A==-1?vo:(b=Number(_.substring(b,A)),isNaN(b)?Zl:(A+=1,A+b>_.length?vo:(_=_.slice(A,A+b),h.C=A+b,_)))}qn.prototype.cancel=function(){this.J=!0,bn(this)};function wa(h){h.S=Date.now()+h.I,ih(h,h.I)}function ih(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=zt(T(h.ba,h),_)}function Ts(h){h.B&&(d.clearTimeout(h.B),h.B=null)}qn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(th(this.i,this.A),this.L!=2&&(gr(),At(17)),bn(this),this.s=2,Zr(this)):ih(this,this.S-h)};function Zr(h){h.j.G==0||h.J||ph(h.j,h)}function bn(h){Ts(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Di(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Ta(h,_){try{var b=h.j;if(b.G!=0&&(b.g==h||Jl(b.h,h))){if(!h.K&&Jl(b.h,h)&&b.G==3){try{var A=b.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var W=A;if(W[0]==0){e:if(!b.u){if(b.g)if(b.g.F+3e3<h.F)ko(b),Do(b);else break e;uu(b),At(18)}}else b.za=W[1],0<b.za-b.T&&37500>W[2]&&b.F&&b.v==0&&!b.C&&(b.C=zt(T(b.Za,b),6e3));if(1>=bo(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else qi(b,11)}else if((h.K||b.g==h)&&ko(b),!G(_))for(W=b.Da.g.parse(_),_=0;_<W.length;_++){let Xe=W[_];if(b.T=Xe[0],Xe=Xe[1],b.G==2)if(Xe[0]=="c"){b.K=Xe[1],b.ia=Xe[2];const fn=Xe[3];fn!=null&&(b.la=fn,b.j.info("VER="+b.la));const nn=Xe[4];nn!=null&&(b.Aa=nn,b.j.info("SVER="+b.Aa));const Bi=Xe[5];Bi!=null&&typeof Bi=="number"&&0<Bi&&(A=1.5*Bi,b.L=A,b.j.info("backChannelRequestTimeoutMs_="+A)),A=b;const wn=h.g;if(wn){const si=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var ee=A.h;ee.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(wo(ee,ee.h),ee.h=null))}if(A.D){const hu=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;hu&&(A.ya=hu,dt(A.I,A.D,hu))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-h.F,b.j.info("Handshake RTT: "+b.R+"ms")),A=b;var me=h;if(A.qa=gh(A,A.J?A.ia:null,A.W),me.K){Bn(A.h,me);var Ke=me,tn=A.L;tn&&(Ke.I=tn),Ke.B&&(Ts(Ke),wa(Ke)),A.g=me}else fh(A);0<b.i.length&&Io(b)}else Xe[0]!="stop"&&Xe[0]!="close"||qi(b,7);else b.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?qi(b,7):ou(b):Xe[0]!="noop"&&b.l&&b.l.ta(Xe),b.v=0)}}gr(4)}catch{}}var sh=class{constructor(h,_){this.g=h,this.map=_}};function Ni(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function bo(h){return h.h?1:h.g?h.g.size:0}function Jl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function wo(h,_){h.g?h.g.add(_):h.h=_}function Bn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Ni.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function eu(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const b of h.g.values())_=_.concat(b.D);return _}return q(h.i)}function lp(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],b=h.length,A=0;A<b;A++)_.push(h[A]);return _}_=[],b=0;for(A in h)_[b++]=h[A];return _}function To(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var b=0;b<h;b++)_.push(b);return _}_=[],b=0;for(const A in h)_[b++]=A;return _}}}function tu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var b=To(h),A=lp(h),W=A.length,ee=0;ee<W;ee++)_.call(void 0,A[ee],b&&b[ee],h)}var Sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function up(h,_){if(h){h=h.split("&");for(var b=0;b<h.length;b++){var A=h[b].indexOf("="),W=null;if(0<=A){var ee=h[b].substring(0,A);W=h[b].substring(A+1)}else ee=h[b];_(ee,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function $t(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof $t){this.h=h.h,xa(this,h.j),this.o=h.o,this.g=h.g,Ss(this,h.s),this.l=h.l;var _=h.i,b=new Vi;b.i=_.i,_.g&&(b.g=new Map(_.g),b.h=_.h),Pi(this,b),this.m=h.m}else h&&(_=String(h).match(Sa))?(this.h=!1,xa(this,_[1]||"",!0),this.o=_r(_[2]||""),this.g=_r(_[3]||"",!0),Ss(this,_[4]),this.l=_r(_[5]||"",!0),Pi(this,_[6]||"",!0),this.m=_r(_[7]||"")):(this.h=!1,this.i=new Vi(null,this.h))}$t.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Ra(_,nu,!0),":");var b=this.g;return(b||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Ra(_,nu,!0),"@"),h.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&h.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&h.push("/"),h.push(Ra(b,b.charAt(0)=="/"?cp:ru,!0))),(b=this.i.toString())&&h.push("?",b),(b=this.m)&&h.push("#",Ra(b,So)),h.join("")};function tr(h){return new $t(h)}function xa(h,_,b){h.j=b?_r(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ss(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Pi(h,_,b){_ instanceof Vi?(h.i=_,oh(h.i,h.h)):(b||(_=Ra(_,hp)),h.i=new Vi(_,h.h))}function dt(h,_,b){h.i.set(_,b)}function Aa(h){return dt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function _r(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ra(h,_,b){return typeof h=="string"?(h=encodeURI(h).replace(_,ah),b&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ah(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var nu=/[#\/\?@]/g,ru=/[#\?:]/g,cp=/[#\?]/g,hp=/[#\?@]/g,So=/#/g;function Vi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function vr(h){h.g||(h.g=new Map,h.h=0,h.i&&up(h.i,function(_,b){h.add(decodeURIComponent(_.replace(/\+/g," ")),b)}))}t=Vi.prototype,t.add=function(h,_){vr(this),this.i=null,h=Jr(this,h);var b=this.g.get(h);return b||this.g.set(h,b=[]),b.push(_),this.h+=1,this};function ji(h,_){vr(h),_=Jr(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Li(h,_){return vr(h),_=Jr(h,_),h.g.has(_)}t.forEach=function(h,_){vr(this),this.g.forEach(function(b,A){b.forEach(function(W){h.call(_,W,A,this)},this)},this)},t.na=function(){vr(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),b=[];for(let A=0;A<_.length;A++){const W=h[A];for(let ee=0;ee<W.length;ee++)b.push(_[A])}return b},t.V=function(h){vr(this);let _=[];if(typeof h=="string")Li(this,h)&&(_=_.concat(this.g.get(Jr(this,h))));else{h=Array.from(this.g.values());for(let b=0;b<h.length;b++)_=_.concat(h[b])}return _},t.set=function(h,_){return vr(this),this.i=null,h=Jr(this,h),Li(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},t.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function iu(h,_,b){ji(h,_),0<b.length&&(h.i=null,h.g.set(Jr(h,_),q(b)),h.h+=b.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var b=0;b<_.length;b++){var A=_[b];const ee=encodeURIComponent(String(A)),me=this.V(A);for(A=0;A<me.length;A++){var W=ee;me[A]!==""&&(W+="="+encodeURIComponent(String(me[A]))),h.push(W)}}return this.i=h.join("&")};function Jr(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function oh(h,_){_&&!h.j&&(vr(h),h.i=null,h.g.forEach(function(b,A){var W=A.toLowerCase();A!=W&&(ji(this,A),iu(this,W,b))},h)),h.j=_}function Ca(h,_){const b=new yr;if(d.Image){const A=new Image;A.onload=I(Er,b,"TestLoadImage: loaded",!0,_,A),A.onerror=I(Er,b,"TestLoadImage: error",!1,_,A),A.onabort=I(Er,b,"TestLoadImage: abort",!1,_,A),A.ontimeout=I(Er,b,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function Pr(h,_){const b=new yr,A=new AbortController,W=setTimeout(()=>{A.abort(),Er(b,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(ee=>{clearTimeout(W),ee.ok?Er(b,"TestPingServer: ok",!0,_):Er(b,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(W),Er(b,"TestPingServer: error",!1,_)})}function Er(h,_,b,A,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),A(b)}catch{}}function Da(){this.g=new ki}function ei(h,_,b){const A=b||"";try{tu(h,function(W,ee){let me=W;g(W)&&(me=er(W)),_.push(A+ee+"="+encodeURIComponent(me))})}catch(W){throw _.push(A+"type="+encodeURIComponent("_badmap")),W}}function xs(h){this.l=h.Ub||null,this.j=h.eb||!1}V(xs,_s),xs.prototype.g=function(){return new Ui(this.l,this.j)},xs.prototype.i=function(h){return function(){return h}}({});function Ui(h,_){xt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ui,xt),t=Ui.prototype,t.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,ni(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;su(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function su(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?ti(this):ni(this),this.readyState==3&&su(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,ti(this))},t.Qa=function(h){this.g&&(this.response=h,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ni(h)}t.setRequestHeader=function(h,_){this.u.append(h,_)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var b=_.next();!b.done;)b=b.value,h.push(b[0]+": "+b[1]),b=_.next();return h.join(`\r
`)};function ni(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function au(h){let _="";return re(h,function(b,A){_+=A,_+=":",_+=b,_+=`\r
`}),_}function hn(h,_,b){e:{for(A in b){var A=!1;break e}A=!0}A||(b=au(b),typeof h=="string"?b!=null&&encodeURIComponent(String(b)):dt(h,_,b))}function st(h){xt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(st,xt);var xo=/^https?$/i,Ia=["POST","PUT"];t=st.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,_,b,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kr.g(),this.v=this.o?je(this.o):je(Kr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(ee){lh(this,ee);return}if(h=b||"",b=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var W in A)b.set(W,A[W]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const ee of A.keys())b.set(ee,A.get(ee));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(b.keys()).find(ee=>ee.toLowerCase()=="content-type"),W=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ia,_,void 0))||A||W||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,me]of b)this.g.setRequestHeader(ee,me);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){lh(this,ee)}};function lh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ao(h),ri(h)}function Ao(h){h.A||(h.A=!0,nt(h,"complete"),nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nt(this,"complete"),nt(this,"abort"),ri(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),st.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ro(this):this.bb())},t.bb=function(){Ro(this)};function Ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||br(h)!=4||h.Z()!=2)){if(h.u&&br(h)==4)un(h.Ea,0,h);else if(nt(h,"readystatechange"),br(h)==4){h.h=!1;try{const me=h.Z();e:switch(me){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var b;if(!(b=_)){var A;if(A=me===0){var W=String(h.D).match(Sa)[1]||null;!W&&d.self&&d.self.location&&(W=d.self.location.protocol.slice(0,-1)),A=!xo.test(W?W.toLowerCase():"")}b=A}if(b)nt(h,"complete"),nt(h,"success");else{h.m=6;try{var ee=2<br(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",Ao(h)}}finally{ri(h)}}}}function ri(h,_){if(h.g){ka(h);const b=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||nt(h,"ready");try{b.onreadystatechange=A}catch{}}}function ka(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function br(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<br(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ii(_)}};function uh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(h){const _={};h=(h.g&&2<=br(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(G(h[A]))continue;var b=B(h[A]);const W=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const ee=_[W]||[];_[W]=ee,ee.push(b)}D(_,function(A){return A.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oa(h,_,b){return b&&b.internalChannelParams&&b.internalChannelParams[h]||_}function Co(h){this.Aa=0,this.i=[],this.j=new yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oa("baseRetryDelayMs",5e3,h),this.cb=Oa("retryDelaySeedMs",1e4,h),this.Wa=Oa("forwardChannelMaxRetries",2,h),this.wa=Oa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(h&&h.concurrentRequestLimit),this.Da=new Da,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Co.prototype,t.la=8,t.G=1,t.connect=function(h,_,b,A){At(0),this.W=h,this.H=_||{},b&&A!==void 0&&(this.H.OSID=b,this.H.OAID=A),this.F=this.X,this.I=gh(this,null,this.W),Io(this)};function ou(h){if(ch(h),h.G==3){var _=h.U++,b=tr(h.I);if(dt(b,"SID",h.K),dt(b,"RID",_),dt(b,"TYPE","terminate"),Ma(h,b),_=new qn(h,h.j,_),_.L=2,_.v=Aa(tr(b)),b=!1,d.navigator&&d.navigator.sendBeacon)try{b=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!b&&d.Image&&(new Image().src=_.v,b=!0),b||(_.g=yh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),wa(_)}mh(h)}function Do(h){h.g&&(Na(h),h.g.cancel(),h.g=null)}function ch(h){Do(h),h.u&&(d.clearTimeout(h.u),h.u=null),ko(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Io(h){if(!Eo(h.h)&&!h.s){h.s=!0;var _=h.Ga;J||N(),se||(J(),se=!0),de.add(_,h),h.B=0}}function dp(h,_){return bo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=zt(T(h.Ga,h,_),cu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const W=new qn(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=R(ee),U(ee,this.S)):ee=this.S),this.m!==null||this.O||(W.H=ee,ee=null),this.P)e:{for(var _=0,b=0;b<this.i.length;b++){t:{var A=this.i[b];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=b;break e}if(_===4096||b===this.i.length-1){_=b+1;break e}}_=1e3}else _=1e3;_=hh(this,W,_),b=tr(this.I),dt(b,"RID",h),dt(b,"CVER",22),this.D&&dt(b,"X-HTTP-Session-Id",this.D),Ma(this,b),ee&&(this.O?_="headers="+encodeURIComponent(String(au(ee)))+"&"+_:this.m&&hn(b,this.m,ee)),wo(this.h,W),this.Ua&&dt(b,"TYPE","init"),this.P?(dt(b,"$req",_),dt(b,"SID","null"),W.T=!0,Nr(W,b,null)):Nr(W,b,_),this.G=2}}else this.G==3&&(h?lu(this,h):this.i.length==0||Eo(this.h)||lu(this))};function lu(h,_){var b;_?b=_.l:b=h.U++;const A=tr(h.I);dt(A,"SID",h.K),dt(A,"RID",b),dt(A,"AID",h.T),Ma(h,A),h.m&&h.o&&hn(A,h.m,h.o),b=new qn(h,h.j,b,h.B+1),h.m===null&&(b.H=h.o),_&&(h.i=_.D.concat(h.i)),_=hh(h,b,1e3),b.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),wo(h.h,b),Nr(b,A,_)}function Ma(h,_){h.H&&re(h.H,function(b,A){dt(_,A,b)}),h.l&&tu({},function(b,A){dt(_,A,b)})}function hh(h,_,b){b=Math.min(h.i.length,b);var A=h.l?T(h.l.Na,h.l,h):null;e:{var W=h.i;let ee=-1;for(;;){const me=["count="+b];ee==-1?0<b?(ee=W[0].g,me.push("ofs="+ee)):ee=0:me.push("ofs="+ee);let Ke=!0;for(let tn=0;tn<b;tn++){let Xe=W[tn].g;const fn=W[tn].map;if(Xe-=ee,0>Xe)ee=Math.max(0,W[tn].g-100),Ke=!1;else try{ei(fn,me,"req"+Xe+"_")}catch{A&&A(fn)}}if(Ke){A=me.join("&");break e}}}return h=h.i.splice(0,b),_.D=h,A}function fh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;J||N(),se||(J(),se=!0),de.add(_,h),h.v=0}}function uu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=zt(T(h.Fa,h),cu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=zt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Do(this),dh(this))};function Na(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function dh(h){h.g=new qn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=tr(h.qa);dt(_,"RID","rpc"),dt(_,"SID",h.K),dt(_,"AID",h.T),dt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&dt(_,"TO",h.ja),dt(_,"TYPE","xmlhttp"),Ma(h,_),h.m&&h.o&&hn(_,h.m,h.o),h.L&&(h.g.I=h.L);var b=h.g;h=h.ia,b.L=1,b.v=Aa(tr(_)),b.m=null,b.P=!0,Mi(b,h)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),uu(this),At(19))};function ko(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ph(h,_){var b=null;if(h.g==_){ko(h),Na(h),h.g=null;var A=2}else if(Jl(h.h,_))b=_.D,Bn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){b=_.m?_.m.length:0,_=Date.now()-_.F;var W=h.B;A=Qr(),nt(A,new en(A,b)),Io(h)}else fh(h);else if(W=_.s,W==3||W==0&&0<_.X||!(A==1&&dp(h,_)||A==2&&uu(h)))switch(b&&0<b.length&&(_=h.h,_.i=_.i.concat(b)),W){case 1:qi(h,5);break;case 4:qi(h,10);break;case 3:qi(h,6);break;default:qi(h,2)}}}function cu(h,_){let b=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(b*=2),b*_}function qi(h,_){if(h.j.info("Error code "+_),_==2){var b=T(h.fb,h),A=h.Xa;const W=!A;A=new $t(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||xa(A,"https"),Aa(A),W?Ca(A.toString(),b):Pr(A.toString(),b)}else At(2);h.G=0,h.l&&h.l.sa(_),mh(h),ch(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function mh(h){if(h.G=0,h.ka=[],h.l){const _=eu(h.h);(_.length!=0||h.i.length!=0)&&(M(h.ka,_),M(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function gh(h,_,b){var A=b instanceof $t?tr(b):new $t(b);if(A.g!="")_&&(A.g=_+"."+A.g),Ss(A,A.s);else{var W=d.location;A=W.protocol,_=_?_+"."+W.hostname:W.hostname,W=+W.port;var ee=new $t(null);A&&xa(ee,A),_&&(ee.g=_),W&&Ss(ee,W),b&&(ee.l=b),A=ee}return b=h.D,_=h.ya,b&&_&&dt(A,b,_),dt(A,"VER",h.la),Ma(h,A),A}function yh(h,_,b){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new st(new xs({eb:b})):new st(h.pa),_.Ha(h.J),_}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _h(){}t=_h.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(h,_){return new zn(h,_)};function zn(h,_){xt.call(this),this.g=new Co(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!G(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!G(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new ii(this)}V(zn,xt),zn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zn.prototype.close=function(){ou(this.g)},zn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var b={};b.__data__=h,h=b}else this.u&&(b={},b.__data__=er(h),h=b);_.i.push(new sh(_.Ya++,h)),_.G==3&&Io(_)},zn.prototype.N=function(){this.g.l=null,delete this.j,ou(this.g),delete this.g,zn.aa.N.call(this)};function vh(h){et.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const b in _){h=b;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(vh,et);function Eh(){cn.call(this),this.status=1}V(Eh,cn);function ii(h){this.g=h}V(ii,_h),ii.prototype.ua=function(){nt(this.g,"a")},ii.prototype.ta=function(h){nt(this.g,new vh(h))},ii.prototype.sa=function(h){nt(this.g,new Eh)},ii.prototype.ra=function(){nt(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,zn.prototype.send=zn.prototype.o,zn.prototype.open=zn.prototype.m,zn.prototype.close=zn.prototype.close,ES=function(){return new Oo},vS=function(){return Qr()},_S=Ue,ry={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,Qf=ws,Oi.COMPLETE="complete",yS=Oi,it.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",xt.prototype.listen=xt.prototype.K,oc=it,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,gS=st}).apply(typeof Af<"u"?Af:typeof self<"u"?self:typeof window<"u"?window:{});const Zb="@firebase/firestore",Jb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pn.UNAUTHENTICATED=new Pn(null),Pn.GOOGLE_CREDENTIALS=new Pn("google-credentials-uid"),Pn.FIRST_PARTY=new Pn("first-party-uid"),Pn.MOCK_USER=new Pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Vy("@firebase/firestore");function hl(){return co.logLevel}function Ee(t,...e){if(co.logLevel<=Ye.DEBUG){const n=e.map(Yy);co.debug(`Firestore (${Fl}): ${t}`,...n)}}function fs(t,...e){if(co.logLevel<=Ye.ERROR){const n=e.map(Yy);co.error(`Firestore (${Fl}): ${t}`,...n)}}function Dl(t,...e){if(co.logLevel<=Ye.WARN){const n=e.map(Yy);co.warn(`Firestore (${Fl}): ${t}`,...n)}}function Yy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Me(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,bS(t,i,n)}function bS(t,e,n){let i=`FIRESTORE (${Fl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw fs(i),new Error(i)}function lt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||bS(e,a,i)}function Ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ms{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pn.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qN{constructor(e){this.t=e,this.currentUser=Pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{Ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(Ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new wS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Pn(e)}}class BN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new BN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ew{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $N{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ir(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const i=l=>{l.error!=null&&Ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,Ee("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{Ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):Ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ew(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ew(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=FN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function We(t,e){return t<e?-1:t>e?1:0}function iy(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return Tg(a)===Tg(l)?We(a,l):Tg(a)?1:-1}return We(t.length,e.length)}const HN=55296,GN=57343;function Tg(t){const e=t.charCodeAt(0);return e>=HN&&e<=GN}function Il(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="__name__";class di{constructor(e,n,i){n===void 0?n=0:n>e.length&&Me(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Me(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=di.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const i=di.isNumericId(e),a=di.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?di.extractNumericId(e).compare(di.extractNumericId(n)):iy(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return aa.fromString(e.substring(4,e.length-2))}}class wt extends di{construct(e,n,i){return new wt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(oe.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const YN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends di{construct(e,n,i){return new Cn(e,n,i)}static isValidIdentifier(e){return YN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tw}static keyField(){return new Cn([tw])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new _e(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new _e(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new _e(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(wt.fromString(e))}static fromName(e){return new Re(wt.fromString(e).popFirst(5))}static empty(){return new Re(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return wt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new wt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e,n){if(!n)throw new _e(oe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WN(t,e,n,i){if(e===!0&&i===!0)throw new _e(oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nw(t){if(!Re.isDocumentKey(t))throw new _e(oe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rw(t){if(Re.isDocumentKey(t))throw new _e(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Me(12329,{type:typeof t})}function dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _e(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ld(t);throw new _e(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Zt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Gc(t,e){if(!SS(t))throw new _e(oe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new _e(oe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=-62135596800,sw=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*sw);return new Et(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _e(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _e(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<iw)throw new _e(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sw}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Zt("string",Et._jsonSchemaVersion),seconds:Zt("number"),nanoseconds:Zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Et(0,0))}static max(){return new Pe(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xc=-1;function QN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Pe.fromTimestamp(i===1e9?new Et(n+1,0):new Et(n,i));return new la(a,Re.empty(),e)}function KN(t){return new la(t.readTime,t.key,xc)}class la{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new la(Pe.min(),Re.empty(),xc)}static max(){return new la(Pe.max(),Re.empty(),xc)}}function XN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Re.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){if(t.code!==oe.FAILED_PRECONDITION||t.message!==ZN)throw t;Ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new fe((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof fe?n:fe.resolve(n)}catch(n){return fe.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):fe.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):fe.reject(n)}static resolve(e){return new fe((n,i)=>{n(e)})}static reject(e){return new fe((n,i)=>{i(e)})}static waitFor(e){return new fe((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=fe.resolve(!1);for(const i of e)n=n.next(a=>a?fe.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new fe((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new fe((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function e2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ud{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ud.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=-1;function qd(t){return t==null}function pd(t){return t===0&&1/t==-1/0}function t2(t){return typeof t=="number"&&Number.isInteger(t)&&!pd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="";function n2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=aw(e)),e=r2(t.get(n),e);return aw(e)}function r2(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case xS:n+="";break;default:n+=l}}return n}function aw(t){return t+xS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ya(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.comparator=e,this.root=n||Rn.EMPTY}insert(e,n){return new Ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rn.BLACK,null,null))}remove(e){return new Ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rf(this.root,e,this.comparator,!0)}}class Rf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rn{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??Rn.RED,this.left=a??Rn.EMPTY,this.right=l??Rn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new Rn(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Rn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return Rn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Me(27949);return e+(this.isRed()?0:1)}}Rn.EMPTY=null,Rn.RED=!0,Rn.BLACK=!1;Rn.EMPTY=new class{constructor(){this.size=0}get key(){throw Me(57766)}get value(){throw Me(16141)}get color(){throw Me(16727)}get left(){throw Me(29726)}get right(){throw Me(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new Rn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e,this.data=new Ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lw(this.data.getIterator())}getIteratorFrom(e){return new lw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new an(this.comparator);return n.data=e,n}}class lw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.fields=e,e.sort(Cn.comparator)}static empty(){return new hr([])}unionWith(e){let n=new an(Cn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new hr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Il(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class RS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new RS("Invalid base64 string: "+l):l}}(e);return new Dn(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Dn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dn.EMPTY_BYTE_STRING=new Dn("");const i2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ua(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=i2.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Bt(t.seconds),nanos:Bt(t.nanos)}}function Bt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ca(t){return typeof t=="string"?Dn.fromBase64String(t):Dn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="server_timestamp",DS="__type__",IS="__previous_value__",kS="__local_write_time__";function Ky(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[DS])==null?void 0:i.stringValue)===CS}function Bd(t){const e=t.mapValue.fields[IS];return Ky(e)?Bd(e):e}function Ac(t){const e=ua(t.mapValue.fields[kS].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const md="(default)";class Rc{constructor(e,n){this.projectId=e,this.database=n||md}static empty(){return new Rc("","")}get isDefaultDatabase(){return this.database===md}isEqual(e){return e instanceof Rc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="__type__",a2="__max__",Cf={mapValue:{}},MS="__vector__",gd="value";function ha(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ky(t)?4:l2(t)?9007199254740991:o2(t)?10:11:Me(28295,{value:t})}function Ti(t,e){if(t===e)return!0;const n=ha(t);if(n!==ha(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ac(t).isEqual(Ac(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ua(a.timestampValue),d=ua(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return ca(a.bytesValue).isEqual(ca(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return Bt(a.geoPointValue.latitude)===Bt(l.geoPointValue.latitude)&&Bt(a.geoPointValue.longitude)===Bt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Bt(a.integerValue)===Bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Bt(a.doubleValue),d=Bt(l.doubleValue);return c===d?pd(c)===pd(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Il(t.arrayValue.values||[],e.arrayValue.values||[],Ti);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(ow(c)!==ow(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Ti(c[p],d[p])))return!1;return!0}(t,e);default:return Me(52216,{left:t})}}function Cc(t,e){return(t.values||[]).find(n=>Ti(n,e))!==void 0}function kl(t,e){if(t===e)return 0;const n=ha(t),i=ha(e);if(n!==i)return We(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Bt(l.integerValue||l.doubleValue),p=Bt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return uw(t.timestampValue,e.timestampValue);case 4:return uw(Ac(t),Ac(e));case 5:return iy(t.stringValue,e.stringValue);case 6:return function(l,c){const d=ca(l),p=ca(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=We(d[g],p[g]);if(v!==0)return v}return We(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=We(Bt(l.latitude),Bt(c.latitude));return d!==0?d:We(Bt(l.longitude),Bt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cw(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,I,V,q;const d=l.fields||{},p=c.fields||{},g=(T=d[gd])==null?void 0:T.arrayValue,v=(I=p[gd])==null?void 0:I.arrayValue,E=We(((V=g==null?void 0:g.values)==null?void 0:V.length)||0,((q=v==null?void 0:v.values)==null?void 0:q.length)||0);return E!==0?E:cw(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===Cf.mapValue&&c===Cf.mapValue)return 0;if(l===Cf.mapValue)return 1;if(c===Cf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const T=iy(p[E],v[E]);if(T!==0)return T;const I=kl(d[p[E]],g[v[E]]);if(I!==0)return I}return We(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Me(23264,{he:n})}}function uw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=ua(t),i=ua(e),a=We(n.seconds,i.seconds);return a!==0?a:We(n.nanos,i.nanos)}function cw(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=kl(n[a],i[a]);if(l)return l}return We(n.length,i.length)}function Ol(t){return sy(t)}function sy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=ua(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ca(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=sy(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${sy(n.fields[c])}`;return a+"}"}(t.mapValue):Me(61005,{value:t})}function Kf(t){switch(ha(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bd(t);return e?16+Kf(e):16;case 5:return 2*t.stringValue.length;case 6:return ca(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Kf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return ya(i.fields,(l,c)=>{a+=l.length+Kf(c)}),a}(t.mapValue);default:throw Me(13486,{value:t})}}function hw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ay(t){return!!t&&"integerValue"in t}function Xy(t){return!!t&&"arrayValue"in t}function fw(t){return!!t&&"nullValue"in t}function dw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xf(t){return!!t&&"mapValue"in t}function o2(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[OS])==null?void 0:i.stringValue)===MS}function mc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ya(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=mc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mc(t.arrayValue.values[n]);return e}return{...t}}function l2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===a2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.value=e}static empty(){return new Zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Xf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mc(n)}setAll(e){let n=Cn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=mc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Xf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ti(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Xf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){ya(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Zn(mc(this.value))}}function NS(t){const e=[];return ya(t.fields,(n,i)=>{const a=new Cn([n]);if(Xf(i)){const l=NS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new hr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Vn(e,0,Pe.min(),Pe.min(),Pe.min(),Zn.empty(),0)}static newFoundDocument(e,n,i,a){return new Vn(e,1,n,Pe.min(),i,a,0)}static newNoDocument(e,n){return new Vn(e,2,n,Pe.min(),Pe.min(),Zn.empty(),0)}static newUnknownDocument(e,n){return new Vn(e,3,n,Pe.min(),Pe.min(),Zn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yd{constructor(e,n){this.position=e,this.inclusive=n}}function pw(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Re.comparator(Re.fromName(c.referenceValue),n.key):i=kl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ti(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function u2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class PS{}class Xt extends PS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new h2(e,n,i):n==="array-contains"?new p2(e,i):n==="in"?new m2(e,i):n==="not-in"?new g2(e,i):n==="array-contains-any"?new y2(e,i):new Xt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new f2(e,i):new d2(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(kl(n,this.value)):n!==null&&ha(this.value)===ha(n)&&this.matchesComparison(kl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gr extends PS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gr(e,n)}matches(e){return VS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function VS(t){return t.op==="and"}function jS(t){return c2(t)&&VS(t)}function c2(t){for(const e of t.filters)if(e instanceof Gr)return!1;return!0}function oy(t){if(t instanceof Xt)return t.field.canonicalString()+t.op.toString()+Ol(t.value);if(jS(t))return t.filters.map(e=>oy(e)).join(",");{const e=t.filters.map(n=>oy(n)).join(",");return`${t.op}(${e})`}}function LS(t,e){return t instanceof Xt?function(i,a){return a instanceof Xt&&i.op===a.op&&i.field.isEqual(a.field)&&Ti(i.value,a.value)}(t,e):t instanceof Gr?function(i,a){return a instanceof Gr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&LS(c,a.filters[d]),!0):!1}(t,e):void Me(19439)}function US(t){return t instanceof Xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ol(n.value)}`}(t):t instanceof Gr?function(n){return n.op.toString()+" {"+n.getFilters().map(US).join(" ,")+"}"}(t):"Filter"}class h2 extends Xt{constructor(e,n,i){super(e,n,i),this.key=Re.fromName(i.referenceValue)}matches(e){const n=Re.comparator(e.key,this.key);return this.matchesComparison(n)}}class f2 extends Xt{constructor(e,n){super(e,"in",n),this.keys=qS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class d2 extends Xt{constructor(e,n){super(e,"not-in",n),this.keys=qS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Re.fromName(i.referenceValue))}class p2 extends Xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xy(n)&&Cc(n.arrayValue,this.value)}}class m2 extends Xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cc(this.value.arrayValue,n)}}class g2 extends Xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Cc(this.value.arrayValue,n)}}class y2 extends Xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Cc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function gw(t,e=null,n=[],i=[],a=null,l=null,c=null){return new _2(t,e,n,i,a,l,c)}function Zy(t){const e=Ve(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>oy(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),qd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ol(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ol(i)).join(",")),e.Te=n}return e.Te}function Jy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!u2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mw(t.startAt,e.startAt)&&mw(t.endAt,e.endAt)}function ly(t){return Re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function v2(t,e,n,i,a,l,c,d){return new Yl(t,e,n,i,a,l,c,d)}function zd(t){return new Yl(t)}function yw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BS(t){return t.collectionGroup!==null}function gc(t){const e=Ve(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new an(Cn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Dc(l,i))}),n.has(Cn.keyField().canonicalString())||e.Ie.push(new Dc(Cn.keyField(),i))}return e.Ie}function vi(t){const e=Ve(t);return e.Ee||(e.Ee=E2(e,gc(t))),e.Ee}function E2(t,e){if(t.limitType==="F")return gw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Dc(a.field,l)});const n=t.endAt?new yd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new yd(t.startAt.position,t.startAt.inclusive):null;return gw(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function uy(t,e){const n=t.filters.concat([e]);return new Yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cy(t,e,n){return new Yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $d(t,e){return Jy(vi(t),vi(e))&&t.limitType===e.limitType}function zS(t){return`${Zy(vi(t))}|lt:${t.limitType}`}function fl(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>US(a)).join(", ")}]`),qd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Ol(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Ol(a)).join(",")),`Target(${i})`}(vi(t))}; limitType=${t.limitType})`}function Fd(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Re.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of gc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=pw(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,gc(i),a)||i.endAt&&!function(c,d,p){const g=pw(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,gc(i),a))}(t,e)}function b2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $S(t){return(e,n)=>{let i=!1;for(const a of gc(t)){const l=w2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function w2(t,e,n){const i=t.field.isKeyField()?Re.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?kl(p,g):Me(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Me(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ya(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return AS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new Ot(Re.comparator);function ds(){return T2}const FS=new Ot(Re.comparator);function lc(...t){let e=FS;for(const n of t)e=e.insert(n.key,n);return e}function HS(t){let e=FS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ja(){return yc()}function GS(){return yc()}function yc(){return new po(t=>t.toString(),(t,e)=>t.isEqual(e))}const S2=new Ot(Re.comparator),x2=new an(Re.comparator);function Qe(...t){let e=x2;for(const n of t)e=e.add(n);return e}const A2=new an(We);function R2(){return A2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pd(e)?"-0":e}}function YS(t){return{integerValue:""+t}}function C2(t,e){return t2(e)?YS(e):e_(t,e)}/**
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
 */class Hd{constructor(){this._=void 0}}function D2(t,e,n){return t instanceof Ic?function(a,l){const c={fields:{[DS]:{stringValue:CS},[kS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Ky(l)&&(l=Bd(l)),l&&(c.fields[IS]=l),{mapValue:c}}(n,e):t instanceof kc?QS(t,e):t instanceof Oc?KS(t,e):function(a,l){const c=WS(a,l),d=_w(c)+_w(a.Ae);return ay(c)&&ay(a.Ae)?YS(d):e_(a.serializer,d)}(t,e)}function I2(t,e,n){return t instanceof kc?QS(t,e):t instanceof Oc?KS(t,e):n}function WS(t,e){return t instanceof _d?function(i){return ay(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Ic extends Hd{}class kc extends Hd{constructor(e){super(),this.elements=e}}function QS(t,e){const n=XS(e);for(const i of t.elements)n.some(a=>Ti(a,i))||n.push(i);return{arrayValue:{values:n}}}class Oc extends Hd{constructor(e){super(),this.elements=e}}function KS(t,e){let n=XS(e);for(const i of t.elements)n=n.filter(a=>!Ti(a,i));return{arrayValue:{values:n}}}class _d extends Hd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _w(t){return Bt(t.integerValue||t.doubleValue)}function XS(t){return Xy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n){this.field=e,this.transform=n}}function O2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof kc&&a instanceof kc||i instanceof Oc&&a instanceof Oc?Il(i.elements,a.elements,Ti):i instanceof _d&&a instanceof _d?Ti(i.Ae,a.Ae):i instanceof Ic&&a instanceof Ic}(t.transform,e.transform)}class M2{constructor(e,n){this.version=e,this.transformResults=n}}class Fr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fr}static exists(e){return new Fr(void 0,e)}static updateTime(e){return new Fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gd{}function ZS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ex(t.key,Fr.none()):new Yc(t.key,t.data,Fr.none());{const n=t.data,i=Zn.empty();let a=new an(Cn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new _a(t.key,i,new hr(a.toArray()),Fr.none())}}function N2(t,e,n){t instanceof Yc?function(a,l,c){const d=a.value.clone(),p=Ew(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof _a?function(a,l,c){if(!Zf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Ew(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(JS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function _c(t,e,n,i){return t instanceof Yc?function(l,c,d,p){if(!Zf(l.precondition,c))return d;const g=l.value.clone(),v=bw(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof _a?function(l,c,d,p){if(!Zf(l.precondition,c))return d;const g=bw(l.fieldTransforms,p,c),v=c.data;return v.setAll(JS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(t,e,n,i):function(l,c,d){return Zf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function P2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=WS(i.transform,a||null);l!=null&&(n===null&&(n=Zn.empty()),n.set(i.field,l))}return n||null}function vw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Il(i,a,(l,c)=>O2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yc extends Gd{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class _a extends Gd{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function JS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Ew(t,e,n){const i=new Map;lt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,I2(c,d,n[a]))}return i}function bw(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,D2(l,c,e))}return i}class ex extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class V2 extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&N2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=_c(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=_c(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=GS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=ZS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Pe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&Il(this.mutations,e.mutations,(n,i)=>vw(n,i))&&Il(this.baseMutations,e.baseMutations,(n,i)=>vw(n,i))}}class t_{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){lt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return S2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new t_(e,n,i,a)}}/**
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
 */class L2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt,Je;function q2(t){switch(t){case oe.OK:return Me(64938);case oe.CANCELLED:case oe.UNKNOWN:case oe.DEADLINE_EXCEEDED:case oe.RESOURCE_EXHAUSTED:case oe.INTERNAL:case oe.UNAVAILABLE:case oe.UNAUTHENTICATED:return!1;case oe.INVALID_ARGUMENT:case oe.NOT_FOUND:case oe.ALREADY_EXISTS:case oe.PERMISSION_DENIED:case oe.FAILED_PRECONDITION:case oe.ABORTED:case oe.OUT_OF_RANGE:case oe.UNIMPLEMENTED:case oe.DATA_LOSS:return!0;default:return Me(15467,{code:t})}}function tx(t){if(t===void 0)return fs("GRPC error has no .code"),oe.UNKNOWN;switch(t){case Qt.OK:return oe.OK;case Qt.CANCELLED:return oe.CANCELLED;case Qt.UNKNOWN:return oe.UNKNOWN;case Qt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case Qt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case Qt.INTERNAL:return oe.INTERNAL;case Qt.UNAVAILABLE:return oe.UNAVAILABLE;case Qt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case Qt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case Qt.NOT_FOUND:return oe.NOT_FOUND;case Qt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case Qt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case Qt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case Qt.ABORTED:return oe.ABORTED;case Qt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case Qt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case Qt.DATA_LOSS:return oe.DATA_LOSS;default:return Me(39323,{code:t})}}(Je=Qt||(Qt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B2(){return new TextEncoder}/**
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
 */const z2=new aa([4294967295,4294967295],0);function ww(t){const e=B2().encode(t),n=new mS;return n.update(e),new Uint8Array(n.digest())}function Tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new aa([n,i],0),new aa([a,l],0)]}class n_{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new uc(`Invalid padding: ${n}`);if(i<0)throw new uc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new uc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new uc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=aa.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(aa.fromNumber(i)));return a.compare(z2)===1&&(a=new aa([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ww(e),[i,a]=Tw(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new n_(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=ww(e),[i,a]=Tw(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class uc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Wc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Yd(Pe.min(),a,new Ot(We),ds(),Qe())}}class Wc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Wc(i,n,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class nx{constructor(e,n){this.targetId=e,this.Ce=n}}class rx{constructor(e,n,i=Dn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class Sw{constructor(){this.ve=0,this.Fe=xw(),this.Me=Dn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),n=Qe(),i=Qe();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Me(38017,{changeType:l})}}),new Wc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=xw()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class $2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ds(),this.Je=Df(),this.He=Df(),this.Ye=new Ot(We)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(ly(l))if(i===0){const c=new Re(l.path);this.et(n,c,Vn.newNoDocument(c,Pe.min()))}else lt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=ca(i).toUint8Array()}catch(p){if(p instanceof RS)return Dl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new n_(c,a,l)}catch(p){return Dl(p instanceof uc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&ly(d.target)){const p=new Re(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Vn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Qe();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new Yd(e,n,this.Ye,this.je,i);return this.je=ds(),this.Je=Df(),this.He=Df(),this.Ye=new Ot(We),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Sw,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new an(We),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new an(We),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Df(){return new Ot(Re.comparator)}function xw(){return new Ot(Re.comparator)}const F2={asc:"ASCENDING",desc:"DESCENDING"},H2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},G2={and:"AND",or:"OR"};class Y2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hy(t,e){return t.useProto3Json||qd(e)?e:{value:e}}function vd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ix(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function W2(t,e){return vd(t,e.toTimestamp())}function Ei(t){return lt(!!t,49232),Pe.fromTimestamp(function(n){const i=ua(n);return new Et(i.seconds,i.nanos)}(t))}function r_(t,e){return fy(t,e).canonicalString()}function fy(t,e){const n=function(a){return new wt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sx(t){const e=wt.fromString(t);return lt(cx(e),10190,{key:e.toString()}),e}function dy(t,e){return r_(t.databaseId,e.path)}function Sg(t,e){const n=sx(e);if(n.get(1)!==t.databaseId.projectId)throw new _e(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _e(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Re(ox(n))}function ax(t,e){return r_(t.databaseId,e)}function Q2(t){const e=sx(t);return e.length===4?wt.emptyPath():ox(e)}function py(t){return new wt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ox(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Aw(t,e,n){return{name:dy(t,e),fields:n.value.mapValue.fields}}function K2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Me(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(lt(v===void 0||typeof v=="string",58123),Dn.fromBase64String(v||"")):(lt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Dn.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?oe.UNKNOWN:tx(g.code);return new _e(v,g.message||"")}(c);n=new rx(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Sg(t,i.document.name),l=Ei(i.document.updateTime),c=i.document.createTime?Ei(i.document.createTime):Pe.min(),d=new Zn({mapValue:{fields:i.document.fields}}),p=Vn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Jf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Sg(t,i.document),l=i.readTime?Ei(i.readTime):Pe.min(),c=Vn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Jf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Sg(t,i.document),l=i.removedTargetIds||[];n=new Jf([],l,a,null)}else{if(!("filter"in e))return Me(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new U2(a,l),d=i.targetId;n=new nx(d,c)}}return n}function X2(t,e){let n;if(e instanceof Yc)n={update:Aw(t,e.key,e.value)};else if(e instanceof ex)n={delete:dy(t,e.key)};else if(e instanceof _a)n={update:Aw(t,e.key,e.data),updateMask:a4(e.fieldMask)};else{if(!(e instanceof V2))return Me(16599,{Vt:e.type});n={verify:dy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Ic)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof kc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Oc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _d)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Me(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:W2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Me(27497)}(t,e.precondition)),n}function Z2(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?Ei(a.updateTime):Ei(l);return c.isEqual(Pe.min())&&(c=Ei(l)),new M2(c,a.transformResults||[])}(n,e))):[]}function J2(t,e){return{documents:[ax(t,e.path)]}}function e4(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=ax(t,a);const l=function(g){if(g.length!==0)return ux(Gr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:dl(T.field),direction:r4(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=hy(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function t4(t){let e=Q2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){lt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(E){const T=lx(E);return T instanceof Gr&&jS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(E){return E.map(T=>function(V){return new Dc(pl(V.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,qd(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(E){const T=!!E.before,I=E.values||[];return new yd(I,T)}(n.startAt));let g=null;return n.endAt&&(g=function(E){const T=!E.before,I=E.values||[];return new yd(I,T)}(n.endAt)),v2(e,a,c,l,d,"F",p,g)}function n4(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Me(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=pl(n.unaryFilter.field);return Xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=pl(n.unaryFilter.field);return Xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=pl(n.unaryFilter.field);return Xt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=pl(n.unaryFilter.field);return Xt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Me(61313);default:return Me(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xt.create(pl(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Me(58110);default:return Me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gr.create(n.compositeFilter.filters.map(i=>lx(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Me(1026)}}(n.compositeFilter.op))}(t):Me(30097,{filter:t})}function r4(t){return F2[t]}function i4(t){return H2[t]}function s4(t){return G2[t]}function dl(t){return{fieldPath:t.canonicalString()}}function pl(t){return Cn.fromServerFormat(t.fieldPath)}function ux(t){return t instanceof Xt?function(n){if(n.op==="=="){if(dw(n.value))return{unaryFilter:{field:dl(n.field),op:"IS_NAN"}};if(fw(n.value))return{unaryFilter:{field:dl(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dw(n.value))return{unaryFilter:{field:dl(n.field),op:"IS_NOT_NAN"}};if(fw(n.value))return{unaryFilter:{field:dl(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dl(n.field),op:i4(n.op),value:n.value}}}(t):t instanceof Gr?function(n){const i=n.getFilters().map(a=>ux(a));return i.length===1?i[0]:{compositeFilter:{op:s4(n.op),filters:i}}}(t):Me(54877,{filter:t})}function a4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,i,a,l=Pe.min(),c=Pe.min(),d=Dn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new ta(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this.yt=e}}function l4(t){const e=t4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cy(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(){this.Cn=new c4}addToCollectionParentIndex(e,n){return this.Cn.add(n),fe.resolve()}getCollectionParents(e,n){return fe.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return fe.resolve()}deleteFieldIndex(e,n){return fe.resolve()}deleteAllFieldIndexes(e){return fe.resolve()}createTargetIndexes(e,n){return fe.resolve()}getDocumentsMatchingTarget(e,n){return fe.resolve(null)}getIndexType(e,n){return fe.resolve(0)}getFieldIndexes(e,n){return fe.resolve([])}getNextCollectionGroupToUpdate(e){return fe.resolve(null)}getMinOffset(e,n){return fe.resolve(la.min())}getMinOffsetFromCollectionGroup(e,n){return fe.resolve(la.min())}updateCollectionGroup(e,n,i){return fe.resolve()}updateIndexEntries(e,n){return fe.resolve()}}class c4{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new an(wt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new an(wt.comparator)).toArray()}}/**
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
 */const Rw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hx=41943040;class Xn{static withCacheSize(e){return new Xn(e,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.DEFAULT_COLLECTION_PERCENTILE=10,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xn.DEFAULT=new Xn(hx,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xn.DISABLED=new Xn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ml(0)}static cr(){return new Ml(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="LruGarbageCollector",h4=1048576;function Dw([t,e],[n,i]){const a=We(t,n);return a===0?We(e,i):a}class f4{constructor(e){this.Ir=e,this.buffer=new an(Dw),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Dw(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class d4{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Ee(Cw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gl(n)?Ee(Cw,"Ignoring IndexedDB error during garbage collection: ",n):await Hl(n)}await this.Vr(3e5)})}}class p4{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return fe.resolve(Ud.ce);const i=new f4(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Ee("LruGarbageCollector","Garbage collection skipped; disabled"),fe.resolve(Rw)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rw):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(Ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,c=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,d=Date.now(),this.removeTargets(e,i,n))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(g=Date.now(),hl()<=Ye.DEBUG&&Ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),fe.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function m4(t,e){return new p4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.changes=new po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?fe.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class y4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&_c(i.mutation,a,hr.empty(),Et.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Qe()){const a=Ja();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=lc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Ja();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Qe()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=ds();const c=yc(),d=function(){return yc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof _a)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),_c(v.mutation,g,v.mutation.getFieldMask(),Et.now())):c.set(g.key,hr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new y4(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=yc();let a=new Ot((c,d)=>c-d),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||hr.empty();v=d.applyToLocalView(g,v),i.set(p,v);const E=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,E)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,E=GS();v.forEach(T=>{if(!l.has(T)){const I=ZS(n.get(T),i.get(T));I!==null&&E.set(T,I),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return fe.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Re.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):fe.resolve(Ja());let d=xc,p=l;return c.next(g=>fe.forEach(g,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?fe.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Qe())).next(v=>({batchId:d,changes:HS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Re(n)).next(i=>{let a=lc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=lc();return this.indexManager.getCollectionParents(e,l).next(d=>fe.forEach(d,p=>{const g=function(E,T){return new Yl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((E,T)=>{c=c.insert(E,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Vn.newInvalidDocument(v)))});let d=lc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&_c(v.mutation,g,hr.empty(),Et.now()),Fd(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return fe.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:Ei(a.createTime)}}(n)),fe.resolve()}getNamedQuery(e,n){return fe.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:l4(a.bundledQuery),readTime:Ei(a.readTime)}}(n)),fe.resolve()}}/**
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
 */class E4{constructor(){this.overlays=new Ot(Re.comparator),this.qr=new Map}getOverlay(e,n){return fe.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ja();return fe.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),fe.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),fe.resolve()}getOverlaysForCollection(e,n,i){const a=Ja(),l=n.length+1,c=new Re(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return fe.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new Ot((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Ja(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ja(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return fe.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new L2(n,i));let l=this.qr.get(n);l===void 0&&(l=Qe(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class b4{constructor(){this.sessionToken=Dn.EMPTY_BYTE_STRING}getSessionToken(e){return fe.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,fe.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.Qr=new an(_n.$r),this.Ur=new an(_n.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new _n(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new _n(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Re(new wt([])),i=new _n(n,e),a=new _n(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Re(new wt([])),i=new _n(n,e),a=new _n(n,e+1);let l=Qe();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new _n(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class _n{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Re.comparator(e.key,n.key)||We(e.Yr,n.Yr)}static Kr(e,n){return We(e.Yr,n.Yr)||Re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new an(_n.$r)}checkEmpty(e){return fe.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new j2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new _n(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return fe.resolve(c)}lookupMutationBatch(e,n){return fe.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return fe.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return fe.resolve(this.mutationQueue.length===0?Qy:this.tr-1)}getAllMutationBatches(e){return fe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new _n(n,0),a=new _n(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),fe.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new an(We);return n.forEach(a=>{const l=new _n(a,0),c=new _n(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),fe.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Re.isDocumentKey(l)||(l=l.child(""));const c=new _n(new Re(l),0);let d=new an(We);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),fe.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){lt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return fe.forEach(n.mutations,a=>{const l=new _n(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new _n(n,0),a=this.Zr.firstAfterOrEqual(i);return fe.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,fe.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.ri=e,this.docs=function(){return new Ot(Re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return fe.resolve(i?i.document.mutableCopy():Vn.newInvalidDocument(n))}getEntries(e,n){let i=ds();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Vn.newInvalidDocument(a))}),fe.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=ds();const c=n.path,d=new Re(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||XN(KN(v),i)<=0||(a.has(v.key)||Fd(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return fe.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Me(9500)}ii(e,n){return fe.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new S4(this)}getSize(e){return fe.resolve(this.size)}}class S4 extends g4{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),fe.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.persistence=e,this.si=new po(n=>Zy(n),Jy),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.oi=0,this._i=new i_,this.targetCount=0,this.ai=Ml.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),fe.resolve()}getLastRemoteSnapshotVersion(e){return fe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return fe.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),fe.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),fe.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ml(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,fe.resolve()}updateTargetData(e,n){return this.Pr(n),fe.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,fe.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),fe.waitFor(l).next(()=>a)}getTargetCount(e){return fe.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return fe.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),fe.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),fe.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),fe.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return fe.resolve(i)}containsKey(e,n){return fe.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ud(0),this.li=!1,this.li=!0,this.hi=new b4,this.referenceDelegate=e(this),this.Pi=new x4(this),this.indexManager=new u4,this.remoteDocumentCache=function(a){return new T4(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new o4(n),this.Ii=new v4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new w4(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){Ee("MemoryPersistence","Starting transaction:",e);const a=new A4(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return fe.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class A4 extends JN{constructor(e){super(),this.currentSequenceNumber=e}}class s_{constructor(e){this.persistence=e,this.Ri=new i_,this.Vi=null}static mi(e){return new s_(e)}get fi(){if(this.Vi)return this.Vi;throw Me(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),fe.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),fe.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),fe.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fe.forEach(this.fi,i=>{const a=Re.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return fe.or([()=>fe.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ed{constructor(e,n){this.persistence=e,this.pi=new po(i=>n2(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=m4(this,n)}static mi(e,n){return new Ed(e,n)}Ei(){}di(e){return fe.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return fe.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?fe.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Pe.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),fe.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),fe.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),fe.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),fe.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Kf(e.data.value)),n}br(e,n,i){return fe.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return fe.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=Qe(),a=Qe();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new a_(e,n.fromCache,i,a)}}/**
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
 */class R4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return nk()?8:e2(Ln())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new R4;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(hl()<=Ye.DEBUG&&Ee("QueryEngine","SDK will not create cache indexes for query:",fl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),fe.resolve()):(hl()<=Ye.DEBUG&&Ee("QueryEngine","Query:",fl(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(hl()<=Ye.DEBUG&&Ee("QueryEngine","The SDK decides to create cache indexes for query:",fl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vi(n))):fe.resolve())}ys(e,n){if(yw(n))return fe.resolve(null);let i=vi(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=cy(n,null,"F"),i=vi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,cy(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return yw(n)||a.isEqual(Pe.min())?fe.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?fe.resolve(null):(hl()<=Ye.DEBUG&&Ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),fl(n)),this.vs(e,c,n,QN(a,xc)).next(d=>d))})}Ds(e,n){let i=new an($S(e));return n.forEach((a,l)=>{Fd(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return hl()<=Ye.DEBUG&&Ee("QueryEngine","Using full collection scan to execute query:",fl(n)),this.ps.getDocumentsMatchingQuery(e,n,la.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="LocalStore",D4=3e8;class I4{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Ot(We),this.xs=new po(l=>Zy(l),Jy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function k4(t,e,n,i){return new I4(t,e,n,i)}async function dx(t,e){const n=Ve(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function O4(t,e){const n=Ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const E=g.batch,T=E.keys();let I=fe.resolve();return T.forEach(V=>{I=I.next(()=>v.getEntry(p,V)).next(q=>{const M=g.docVersions.get(V);lt(M!==null,48541),q.version.compareTo(M)<0&&(E.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),v.addEntry(q)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function px(t){const e=Ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function M4(t,e){const n=Ve(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,E)=>{const T=a.get(E);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,E).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,E)));let I=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?I=I.withResumeToken(Dn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):v.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(v.resumeToken,i)),a=a.insert(E,I),function(q,M,F){return q.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=D4?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,I,v)&&d.push(n.Pi.updateTargetData(l,I))});let p=ds(),g=Qe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(N4(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Pe.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(E=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return fe.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function N4(t,e,n){let i=Qe(),a=Qe();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=ds();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Pe.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):Ee(o_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function P4(t,e){const n=Ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Qy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function V4(t,e){const n=Ve(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,fe.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new ta(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function my(t,e,n){const i=Ve(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Gl(c))throw c;Ee(o_,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Iw(t,e,n){const i=Ve(t);let a=Pe.min(),l=Qe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const E=Ve(p),T=E.xs.get(v);return T!==void 0?fe.resolve(E.Ms.get(T)):E.Pi.getTargetData(g,v)}(i,c,vi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Pe.min(),n?l:Qe())).next(d=>(j4(i,b2(e),d),{documents:d,Qs:l})))}function j4(t,e,n){let i=t.Os.get(e)||Pe.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class kw{constructor(){this.activeTargetIds=R2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L4{constructor(){this.Mo=new kw,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new kw,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="ConnectivityMonitor";class Mw{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Ee(Ow,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Ee(Ow,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let If=null;function gy(){return If===null?If=function(){return 268435456+Math.round(2147483648*Math.random())}():If++,"0x"+If.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="RestConnection",q4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class B4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===md?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=gy(),d=this.zo(e,n.toUriEncodedString());Ee(xg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Bl(g);return this.Jo(e,d,p,i,v).then(E=>(Ee(xg,`Received RPC '${e}' ${c}: `,E),E),E=>{throw Dl(xg,`RPC '${e}' ${c} failed with error: `,E,"url: ",d,"request:",i),E})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=q4[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="WebChannelConnection";class $4 extends B4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=gy();return new Promise((d,p)=>{const g=new gS;g.setWithCredentials(!0),g.listenOnce(yS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Qf.NO_ERROR:const E=g.getResponseJson();Ee(Mn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),d(E);break;case Qf.TIMEOUT:Ee(Mn,`RPC '${e}' ${c} timed out`),p(new _e(oe.DEADLINE_EXCEEDED,"Request time out"));break;case Qf.HTTP_ERROR:const T=g.getStatus();if(Ee(Mn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const V=I==null?void 0:I.error;if(V&&V.status&&V.message){const q=function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf(G)>=0?G:oe.UNKNOWN}(V.status);p(new _e(q,V.message))}else p(new _e(oe.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new _e(oe.UNAVAILABLE,"Connection failed."));break;default:Me(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{Ee(Mn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);Ee(Mn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=gy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=ES(),d=vS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");Ee(Mn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const E=c.createWebChannel(v,p);this.I_(E);let T=!1,I=!1;const V=new z4({Yo:M=>{I?Ee(Mn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(T||(Ee(Mn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),T=!0),Ee(Mn,`RPC '${e}' stream ${a} sending:`,M),E.send(M))},Zo:()=>E.close()}),q=(M,F,G)=>{M.listen(F,P=>{try{G(P)}catch(te){setTimeout(()=>{throw te},0)}})};return q(E,oc.EventType.OPEN,()=>{I||(Ee(Mn,`RPC '${e}' stream ${a} transport opened.`),V.o_())}),q(E,oc.EventType.CLOSE,()=>{I||(I=!0,Ee(Mn,`RPC '${e}' stream ${a} transport closed`),V.a_(),this.E_(E))}),q(E,oc.EventType.ERROR,M=>{I||(I=!0,Dl(Mn,`RPC '${e}' stream ${a} transport errored. Name:`,M.name,"Message:",M.message),V.a_(new _e(oe.UNAVAILABLE,"The operation could not be completed")))}),q(E,oc.EventType.MESSAGE,M=>{var F;if(!I){const G=M.data[0];lt(!!G,16349);const P=G,te=(P==null?void 0:P.error)||((F=P[0])==null?void 0:F.error);if(te){Ee(Mn,`RPC '${e}' stream ${a} received error:`,te);const $=te.status;let re=function(O){const U=Qt[O];if(U!==void 0)return tx(U)}($),D=te.message;re===void 0&&(re=oe.INTERNAL,D="Unknown error status: "+$+" with message "+te.message),I=!0,V.a_(new _e(re,D)),E.close()}else Ee(Mn,`RPC '${e}' stream ${a} received:`,G),V.u_(G)}}),q(d,_S.STAT_EVENT,M=>{M.stat===ry.PROXY?Ee(Mn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===ry.NOPROXY&&Ee(Mn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{V.__()},0),V}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ag(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){return new Y2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&Ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="PersistentStream";class gx{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===oe.RESOURCE_EXHAUSTED?(fs(n.toString()),fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new _e(oe.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ee(Nw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Ee(Nw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F4 extends gx{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=K2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Pe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Pe.min():c.readTime?Ei(c.readTime):Pe.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=py(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=ly(p)?{documents:J2(l,p)}:{query:e4(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=ix(l,c.resumeToken);const g=hy(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Pe.min())>0){d.readTime=vd(l,c.snapshotVersion.toTimestamp());const g=hy(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=n4(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=py(this.serializer),n.removeTarget=e,this.q_(n)}}class H4 extends gx{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Z2(e.writeResults,e.commitTime),i=Ei(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=py(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>X2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{}class Y4 extends G4{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new _e(oe.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,fy(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(oe.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,fy(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new _e(oe.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class W4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fs(n),this.aa=!1):Ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="RemoteStore";class Q4{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{mo(this)&&(Ee(ho,"Restarting streams for network reachability change."),await async function(p){const g=Ve(p);g.Ea.add(4),await Qc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Qd(g)}(this))})}),this.Ra=new W4(i,a)}}async function Qd(t){if(mo(t))for(const e of t.da)await e(!0)}async function Qc(t){for(const e of t.da)await e(!1)}function yx(t,e){const n=Ve(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),h_(n)?c_(n):Wl(n).O_()&&u_(n,e))}function l_(t,e){const n=Ve(t),i=Wl(n);n.Ia.delete(e),i.O_()&&_x(n,e),n.Ia.size===0&&(i.O_()?i.L_():mo(n)&&n.Ra.set("Unknown"))}function u_(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wl(t).Y_(e)}function _x(t,e){t.Va.Ue(e),Wl(t).Z_(e)}function c_(t){t.Va=new $2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Wl(t).start(),t.Ra.ua()}function h_(t){return mo(t)&&!Wl(t).x_()&&t.Ia.size>0}function mo(t){return Ve(t).Ea.size===0}function vx(t){t.Va=void 0}async function K4(t){t.Ra.set("Online")}async function X4(t){t.Ia.forEach((e,n)=>{u_(t,e)})}async function Z4(t,e){vx(t),h_(t)?(t.Ra.ha(e),c_(t)):t.Ra.set("Unknown")}async function J4(t,e,n){if(t.Ra.set("Online"),e instanceof rx&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){Ee(ho,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bd(t,i)}else if(e instanceof Jf?t.Va.Ze(e):e instanceof nx?t.Va.st(e):t.Va.tt(e),!n.isEqual(Pe.min()))try{const i=await px(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Dn.EMPTY_BYTE_STRING,v.snapshotVersion)),_x(l,p);const E=new ta(v.target,p,g,v.sequenceNumber);u_(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){Ee(ho,"Failed to raise snapshot:",i),await bd(t,i)}}async function bd(t,e,n){if(!Gl(e))throw e;t.Ea.add(1),await Qc(t),t.Ra.set("Offline"),n||(n=()=>px(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Ee(ho,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qd(t)})}function Ex(t,e){return e().catch(n=>bd(t,n,e))}async function Kd(t){const e=Ve(t),n=fa(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qy;for(;eP(e);)try{const a=await P4(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,tP(e,a)}catch(a){await bd(e,a)}bx(e)&&wx(e)}function eP(t){return mo(t)&&t.Ta.length<10}function tP(t,e){t.Ta.push(e);const n=fa(t);n.O_()&&n.X_&&n.ea(e.mutations)}function bx(t){return mo(t)&&!fa(t).x_()&&t.Ta.length>0}function wx(t){fa(t).start()}async function nP(t){fa(t).ra()}async function rP(t){const e=fa(t);for(const n of t.Ta)e.ea(n.mutations)}async function iP(t,e,n){const i=t.Ta.shift(),a=t_.from(i,e,n);await Ex(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await Kd(t)}async function sP(t,e){e&&fa(t).X_&&await async function(i,a){if(function(c){return q2(c)&&c!==oe.ABORTED}(a.code)){const l=i.Ta.shift();fa(i).B_(),await Ex(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Kd(i)}}(t,e),bx(t)&&wx(t)}async function Pw(t,e){const n=Ve(t);n.asyncQueue.verifyOperationInProgress(),Ee(ho,"RemoteStore received new credentials");const i=mo(n);n.Ea.add(3),await Qc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qd(n)}async function aP(t,e){const n=Ve(t);e?(n.Ea.delete(2),await Qd(n)):e||(n.Ea.add(2),await Qc(n),n.Ra.set("Unknown"))}function Wl(t){return t.ma||(t.ma=function(n,i,a){const l=Ve(n);return l.sa(),new F4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:K4.bind(null,t),t_:X4.bind(null,t),r_:Z4.bind(null,t),H_:J4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),h_(t)?c_(t):t.Ra.set("Unknown")):(await t.ma.stop(),vx(t))})),t.ma}function fa(t){return t.fa||(t.fa=function(n,i,a){const l=Ve(n);return l.sa(),new H4(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:nP.bind(null,t),r_:sP.bind(null,t),ta:rP.bind(null,t),na:iP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Kd(t)):(await t.fa.stop(),t.Ta.length>0&&(Ee(ho,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new f_(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function d_(t,e){if(fs("AsyncQueue",`${e}: ${t}`),Gl(t))return new _e(oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{static emptySet(e){return new El(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Re.comparator(n.key,i.key):(n,i)=>Re.comparator(n.key,i.key),this.keyedMap=lc(),this.sortedSet=new Ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof El)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new El;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.ga=new Ot(Re.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Me(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Nl{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Nl(e,n,El.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lP{constructor(){this.queries=jw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=Ve(n),l=a.queries;a.queries=jw(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new _e(oe.ABORTED,"Firestore shutting down"))}}function jw(){return new po(t=>zS(t),$d)}async function p_(t,e){const n=Ve(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new oP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=d_(c,`Initialization of query '${fl(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&g_(n)}async function m_(t,e){const n=Ve(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function uP(t,e){const n=Ve(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&g_(n)}function cP(t,e,n){const i=Ve(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function g_(t){t.Ca.forEach(e=>{e.next()})}var yy,Lw;(Lw=yy||(yy={})).Ma="default",Lw.Cache="cache";class y_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Nl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Nl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.key=e}}class Sx{constructor(e){this.key=e}}class hP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=$S(e),this.tu=new El(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Vw,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,E)=>{const T=a.get(v),I=Fd(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),q=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let M=!1;T&&I?T.data.isEqual(I.data)?V!==q&&(i.track({type:3,doc:I}),M=!0):this.su(T,I)||(i.track({type:2,doc:I}),M=!0,(p&&this.eu(I,p)>0||g&&this.eu(I,g)<0)&&(d=!0)):!T&&I?(i.track({type:0,doc:I}),M=!0):T&&!I&&(i.track({type:1,doc:T}),M=!0,(p||g)&&(d=!0)),M&&(I?(c=c.add(I),l=q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,E)=>function(I,V){const q=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Me(20277,{Rt:M})}};return q(I)-q(V)}(v.type,E.type)||this.eu(v.doc,E.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Nl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vw,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new Sx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new Tx(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Qe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Nl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const __="SyncEngine";class fP{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class dP{constructor(e){this.key=e,this.hu=!1}}class pP{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new po(d=>zS(d),$d),this.Iu=new Map,this.Eu=new Set,this.du=new Ot(Re.comparator),this.Au=new Map,this.Ru=new i_,this.Vu={},this.mu=new Map,this.fu=Ml.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mP(t,e,n=!0){const i=Ix(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await xx(i,e,n,!0),a}async function gP(t,e){const n=Ix(t);await xx(n,e,!0,!1)}async function xx(t,e,n,i){const a=await V4(t.localStore,vi(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await yP(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&yx(t.remoteStore,a),d}async function yP(t,e,n,i,a){t.pu=(E,T,I)=>async function(q,M,F,G){let P=M.view.ru(F);P.Cs&&(P=await Iw(q.localStore,M.query,!1).then(({documents:D})=>M.view.ru(D,P)));const te=G&&G.targetChanges.get(M.targetId),$=G&&G.targetMismatches.get(M.targetId)!=null,re=M.view.applyChanges(P,q.isPrimaryClient,te,$);return qw(q,M.targetId,re.au),re.snapshot}(t,E,T,I);const l=await Iw(t.localStore,e,!0),c=new hP(e,l.Qs),d=c.ru(l.documents),p=Wc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);qw(t,n,g.au);const v=new fP(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function _P(t,e,n){const i=Ve(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!$d(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await my(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&l_(i.remoteStore,a.targetId),_y(i,a.targetId)}).catch(Hl)):(_y(i,a.targetId),await my(i.localStore,a.targetId,!0))}async function vP(t,e){const n=Ve(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),l_(n.remoteStore,i.targetId))}async function EP(t,e,n){const i=RP(t);try{const a=await function(c,d){const p=Ve(c),g=Et.now(),v=d.reduce((I,V)=>I.add(V.key),Qe());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let V=ds(),q=Qe();return p.Ns.getEntries(I,v).next(M=>{V=M,V.forEach((F,G)=>{G.isValidDocument()||(q=q.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,V)).next(M=>{E=M;const F=[];for(const G of d){const P=P2(G,E.get(G.key).overlayedDocument);P!=null&&F.push(new _a(G.key,P,NS(P.value.mapValue),Fr.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,F,d)}).next(M=>{T=M;const F=M.applyToLocalDocumentSet(E,q);return p.documentOverlayCache.saveOverlays(I,M.batchId,F)})}).then(()=>({batchId:T.batchId,changes:HS(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Ot(We)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await Kc(i,a.changes),await Kd(i.remoteStore)}catch(a){const l=d_(a,"Failed to persist write");n.reject(l)}}async function Ax(t,e){const n=Ve(t);try{const i=await M4(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(lt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?lt(c.hu,14607):a.removedDocuments.size>0&&(lt(c.hu,42227),c.hu=!1))}),await Kc(n,i,e)}catch(i){await Hl(i)}}function Uw(t,e,n){const i=Ve(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Ve(c);p.onlineState=d;let g=!1;p.queries.forEach((v,E)=>{for(const T of E.Sa)T.va(d)&&(g=!0)}),g&&g_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function bP(t,e,n){const i=Ve(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new Ot(Re.comparator);c=c.insert(l,Vn.newNoDocument(l,Pe.min()));const d=Qe().add(l),p=new Yd(Pe.min(),new Map,new Ot(We),c,d);await Ax(i,p),i.du=i.du.remove(l),i.Au.delete(e),v_(i)}else await my(i.localStore,e,!1).then(()=>_y(i,e,n)).catch(Hl)}async function wP(t,e){const n=Ve(t),i=e.batch.batchId;try{const a=await O4(n.localStore,e);Cx(n,i,null),Rx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Kc(n,a)}catch(a){await Hl(a)}}async function TP(t,e,n){const i=Ve(t);try{const a=await function(c,d){const p=Ve(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(E=>(lt(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);Cx(i,e,n),Rx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Kc(i,a)}catch(a){await Hl(a)}}function Rx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Cx(t,e,n){const i=Ve(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function _y(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||Dx(t,i)})}function Dx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(l_(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),v_(t))}function qw(t,e,n){for(const i of n)i instanceof Tx?(t.Ru.addReference(i.key,e),SP(t,i)):i instanceof Sx?(Ee(__,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||Dx(t,i.key)):Me(19791,{wu:i})}function SP(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(Ee(__,"New document in limbo: "+n),t.Eu.add(i),v_(t))}function v_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Re(wt.fromString(e)),i=t.fu.next();t.Au.set(i,new dP(n)),t.du=t.du.insert(n,i),yx(t.remoteStore,new ta(vi(zd(n.path)),i,"TargetPurposeLimboResolution",Ud.ce))}}async function Kc(t,e,n){const i=Ve(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const E=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){a.push(g);const E=a_.As(p.targetId,g);l.push(E)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=Ve(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>fe.forEach(g,T=>fe.forEach(T.Es,I=>v.persistence.referenceDelegate.addReference(E,T.targetId,I)).next(()=>fe.forEach(T.ds,I=>v.persistence.referenceDelegate.removeReference(E,T.targetId,I)))))}catch(E){if(!Gl(E))throw E;Ee(o_,"Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const I=v.Ms.get(T),V=I.snapshotVersion,q=I.withLastLimboFreeSnapshotVersion(V);v.Ms=v.Ms.insert(T,q)}}}(i.localStore,l))}async function xP(t,e){const n=Ve(t);if(!n.currentUser.isEqual(e)){Ee(__,"User change. New user:",e.toKey());const i=await dx(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new _e(oe.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kc(n,i.Ls)}}function AP(t,e){const n=Ve(t),i=n.Au.get(e);if(i&&i.hu)return Qe().add(i.key);{let a=Qe();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function Ix(t){const e=Ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ax.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bP.bind(null,e),e.Pu.H_=uP.bind(null,e.eventManager),e.Pu.yu=cP.bind(null,e.eventManager),e}function RP(t){const e=Ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TP.bind(null,e),e}class wd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return k4(this.persistence,new C4,e.initialUser,this.serializer)}Cu(e){return new fx(s_.mi,this.serializer)}Du(e){return new L4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wd.provider={build:()=>new wd};class CP extends wd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof Ed,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new d4(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Xn.withCacheSize(this.cacheSizeBytes):Xn.DEFAULT;return new fx(i=>Ed.mi(i,n),this.serializer)}}class vy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Uw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=xP.bind(null,this.syncEngine),await aP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lP}()}createDatastore(e){const n=Wd(e.databaseInfo.databaseId),i=function(l){return new $4(l)}(e.databaseInfo);return function(l,c,d,p){return new Y4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new Q4(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Uw(this.syncEngine,n,0),function(){return Mw.v()?new Mw:new U4}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const E=new pP(a,l,c,d,p,g);return v&&(E.gu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=Ve(a);Ee(ho,"RemoteStore shutting down."),l.Ea.add(5),await Qc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}vy.provider={build:()=>new vy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class E_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="FirestoreClient";class DP{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Pn.UNAUTHENTICATED,this.clientId=Wy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{Ee(da,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(Ee(da,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=d_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Rg(t,e){t.asyncQueue.verifyOperationInProgress(),Ee(da,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await dx(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IP(t);Ee(da,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Pw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>Pw(e.remoteStore,a)),t._onlineComponents=e}async function IP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ee(da,"Using user provided OfflineComponentProvider");try{await Rg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===oe.FAILED_PRECONDITION||a.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Dl("Error using user provided cache. Falling back to memory cache: "+n),await Rg(t,new wd)}}else Ee(da,"Using default OfflineComponentProvider"),await Rg(t,new CP(void 0));return t._offlineComponents}async function kx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ee(da,"Using user provided OnlineComponentProvider"),await Bw(t,t._uninitializedComponentsProvider._online)):(Ee(da,"Using default OnlineComponentProvider"),await Bw(t,new vy))),t._onlineComponents}function kP(t){return kx(t).then(e=>e.syncEngine)}async function Td(t){const e=await kx(t),n=e.eventManager;return n.onListen=mP.bind(null,e.syncEngine),n.onUnlisten=_P.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vP.bind(null,e.syncEngine),n}function OP(t,e,n={}){const i=new ls;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new E_({next:T=>{v.Nu(),c.enqueueAndForget(()=>m_(l,E));const I=T.docs.has(d);!I&&T.fromCache?g.reject(new _e(oe.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&T.fromCache&&p&&p.source==="server"?g.reject(new _e(oe.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new y_(zd(d.path),v,{includeMetadataChanges:!0,qa:!0});return p_(l,E)}(await Td(t),t.asyncQueue,e,n,i)),i.promise}function MP(t,e,n={}){const i=new ls;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new E_({next:T=>{v.Nu(),c.enqueueAndForget(()=>m_(l,E)),T.fromCache&&p.source==="server"?g.reject(new _e(oe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new y_(d,v,{includeMetadataChanges:!0,qa:!0});return p_(l,E)}(await Td(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function Ox(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="firestore.googleapis.com",$w=!0;class Fw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new _e(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mx,this.ssl=$w}else this.host=e.host,this.ssl=e.ssl??$w;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<h4)throw new _e(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ox(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new LN;switch(i.type){case"firstParty":return new zN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=zw.get(n);i&&(Ee("ComponentProvider","Removing Datastore"),zw.delete(n),i.terminate())}(this),Promise.resolve()}}function NP(t,e,n,i={}){var g;t=dr(t,Xd);const a=Bl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(R1(`https://${d}`),C1("Firestore",!0)),l.host!==Mx&&l.host!==d&&Dl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!ao(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,E;if(typeof i.mockUserToken=="string")v=i.mockUserToken,E=Pn.MOCK_USER;else{v=YI(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new _e(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Pn(T)}t._authCredentials=new UN(new wS(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new va(this.firestore,e,this._query)}}class Vt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}toJSON(){return{type:Vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Gc(n,Vt._jsonSchema))return new Vt(e,i||null,new Re(wt.fromString(n.referencePath)))}}Vt._jsonSchemaVersion="firestore/documentReference/1.0",Vt._jsonSchema={type:Zt("string",Vt._jsonSchemaVersion),referencePath:Zt("string")};class oa extends va{constructor(e,n,i){super(e,n,zd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Re(e))}withConverter(e){return new oa(this.firestore,e,this._path)}}function Gn(t,e,...n){if(t=Jt(t),TS("collection","path",e),t instanceof Xd){const i=wt.fromString(e,...n);return rw(i),new oa(t,null,i)}{if(!(t instanceof Vt||t instanceof oa))throw new _e(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(wt.fromString(e,...n));return rw(i),new oa(t.firestore,null,i)}}function jn(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=Wy.newId()),TS("doc","path",e),t instanceof Xd){const i=wt.fromString(e,...n);return nw(i),new Vt(t,null,new Re(i))}{if(!(t instanceof Vt||t instanceof oa))throw new _e(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(wt.fromString(e,...n));return nw(i),new Vt(t.firestore,t instanceof oa?t.converter:null,new Re(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="AsyncQueue";class Gw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mx(this,"async_queue_retry"),this._c=()=>{const i=Ag();i&&Ee(Hw,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Ag();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ag();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ls;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gl(e))throw e;Ee(Hw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,fs("INTERNAL UNHANDLED ERROR: ",Yw(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=f_.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Me(47125,{Pc:Yw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Yw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Ww(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class pa extends Xd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new Gw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gw(e),this._firestoreClient=void 0,await e}}}function Nx(t,e){const n=typeof t=="object"?t:O1(),i=typeof t=="string"?t:md,a=Ly(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=HI("firestore");l&&NP(a,...l)}return a}function Zd(t){if(t._terminated)throw new _e(oe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PP(t),t._firestoreClient}function PP(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new s2(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Ox(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new DP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kr(Dn.fromBase64String(e))}catch(n){throw new _e(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kr(Dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gc(e,kr._jsonSchema))return kr.fromBase64String(e.bytes)}}kr._jsonSchemaVersion="firestore/bytes/1.0",kr._jsonSchema={type:Zt("string",kr._jsonSchemaVersion),bytes:Zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _e(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _e(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _e(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bi._jsonSchemaVersion}}static fromJSON(e){if(Gc(e,bi._jsonSchema))return new bi(e.latitude,e.longitude)}}bi._jsonSchemaVersion="firestore/geoPoint/1.0",bi._jsonSchema={type:Zt("string",bi._jsonSchemaVersion),latitude:Zt("number"),longitude:Zt("number")};/**
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
 */class wi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gc(e,wi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new wi(e.vectorValues);throw new _e(oe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wi._jsonSchemaVersion="firestore/vectorValue/1.0",wi._jsonSchema={type:Zt("string",wi._jsonSchemaVersion),vectorValues:Zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=/^__.*__$/;class jP{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new _a(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yc(e,this.data,n,this.fieldTransforms)}}class Px{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new _a(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Vx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Me(40011,{Ac:t})}}class b_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new b_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Vx(this.Ac)&&VP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class LP{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Wd(e)}Cc(e,n,i,a=!1){return new b_({Ac:e,methodName:n,Dc:i,path:Cn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tp(t){const e=t._freezeSettings(),n=Wd(t._databaseId);return new LP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);T_("Data must be an object, but it was:",c,i);const d=Lx(i,c);let p,g;if(l.merge)p=new hr(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const T=Ey(e,E,n);if(!c.contains(T))throw new _e(oe.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);qx(v,T)||v.push(T)}p=new hr(v),g=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,g=c.fieldTransforms;return new jP(new Zn(d),p,g)}class np extends ep{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof np}}class w_ extends ep{_toFieldTransform(e){return new k2(e.path,new Ic)}isEqual(e){return e instanceof w_}}function UP(t,e,n,i){const a=t.Cc(1,e,n);T_("Data must be an object, but it was:",a,i);const l=[],c=Zn.empty();ya(i,(p,g)=>{const v=S_(e,p,n);g=Jt(g);const E=a.yc(v);if(g instanceof np)l.push(v);else{const T=Xc(g,E);T!=null&&(l.push(v),c.set(v,T))}});const d=new hr(l);return new Px(c,d,a.fieldTransforms)}function qP(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[Ey(e,i,n)],p=[a];if(l.length%2!=0)throw new _e(oe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(Ey(e,l[T])),p.push(l[T+1]);const g=[],v=Zn.empty();for(let T=d.length-1;T>=0;--T)if(!qx(g,d[T])){const I=d[T];let V=p[T];V=Jt(V);const q=c.yc(I);if(V instanceof np)g.push(I);else{const M=Xc(V,q);M!=null&&(g.push(I),v.set(I,M))}}const E=new hr(g);return new Px(v,E,c.fieldTransforms)}function BP(t,e,n,i=!1){return Xc(n,t.Cc(i?4:3,e))}function Xc(t,e){if(Ux(t=Jt(t)))return T_("Unsupported field value:",e,t),Lx(t,e);if(t instanceof ep)return function(i,a){if(!Vx(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Xc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return C2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Et.fromDate(i);return{timestampValue:vd(a.serializer,l)}}if(i instanceof Et){const l=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vd(a.serializer,l)}}if(i instanceof bi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof kr)return{bytesValue:ix(a.serializer,i._byteString)};if(i instanceof Vt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:r_(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof wi)return function(c,d){return{mapValue:{fields:{[OS]:{stringValue:MS},[gd]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return e_(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${Ld(i)}`)}(t,e)}function Lx(t,e){const n={};return AS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ya(t,(i,a)=>{const l=Xc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Ux(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof bi||t instanceof kr||t instanceof Vt||t instanceof ep||t instanceof wi)}function T_(t,e,n){if(!Ux(n)||!SS(n)){const i=Ld(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function Ey(t,e,n){if((e=Jt(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return S_(t,e);throw Sd("Field path arguments must be of type string or ",t,!1,void 0,n)}const zP=new RegExp("[~\\*/\\[\\]]");function S_(t,e,n){if(e.search(zP)>=0)throw Sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jd(...e.split("."))._internalPath}catch{throw Sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sd(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new _e(oe.INVALID_ARGUMENT,d+t+p)}function qx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $P extends Bx{data(){return super.data()}}function rp(t,e){return typeof e=="string"?S_(t,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _e(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class x_{}class $x extends x_{}function fr(t,e,...n){let i=[];e instanceof x_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof A_).length,d=l.filter(p=>p instanceof ip).length;if(c>1||c>0&&d>0)throw new _e(oe.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class ip extends $x{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new ip(e,n,i)}_apply(e){const n=this._parse(e);return Fx(e._query,n),new va(e.firestore,e.converter,uy(e._query,n))}_parse(e){const n=tp(e.firestore);return function(l,c,d,p,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new _e(oe.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Kw(E,v);const V=[];for(const q of E)V.push(Qw(p,l,q));T={arrayValue:{values:V}}}else T=Qw(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Kw(E,v),T=BP(d,c,E,v==="in"||v==="not-in");return Xt.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Hn(t,e,n){const i=e,a=rp("where",t);return ip._create(a,i,n)}class A_ extends x_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new A_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Gr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Fx(c,p),c=uy(c,p)}(e._query,n),new va(e.firestore,e.converter,uy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class R_ extends $x{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new R_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new _e(oe.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new _e(oe.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Dc(l,c)}(e._query,this._field,this._direction);return new va(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new Yl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function Mc(t,e="asc"){const n=e,i=rp("orderBy",t);return R_._create(i,n)}function Qw(t,e,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new _e(oe.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BS(e)&&n.indexOf("/")!==-1)throw new _e(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(wt.fromString(n));if(!Re.isDocumentKey(i))throw new _e(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return hw(t,new Re(i))}if(n instanceof Vt)return hw(t,n._key);throw new _e(oe.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ld(n)}.`)}function Kw(t,e){if(!Array.isArray(t)||t.length===0)throw new _e(oe.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _e(oe.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _e(oe.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class FP{convertValue(e,n="none"){switch(ha(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ca(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ya(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[gd].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>Bt(c.doubleValue));return new wi(n)}convertGeoPoint(e){return new bi(Bt(e.latitude),Bt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Bd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ac(e));default:return null}}convertTimestamp(e){const n=ua(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=wt.fromString(e);lt(cx(i),9688,{name:e});const a=new Rc(i.get(1),i.get(3)),l=new Re(i.popFirst(5));return a.isEqual(n)||fs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class cc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class no extends Bx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(rp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new _e(oe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=no._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}no._jsonSchemaVersion="firestore/documentSnapshot/1.0",no._jsonSchema={type:Zt("string",no._jsonSchemaVersion),bundleSource:Zt("string","DocumentSnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class ed extends no{data(e={}){return super.data(e)}}class ro{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new cc(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ed(this._firestore,this._userDataWriter,i.key,i,new cc(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _e(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new ed(a._firestore,a._userDataWriter,d.doc.key,d.doc,new cc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new ed(a._firestore,a._userDataWriter,d.doc.key,d.doc,new cc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:HP(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new _e(oe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Me(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){t=dr(t,Vt);const e=dr(t.firestore,pa);return OP(Zd(e),t._key).then(n=>Gx(e,t,n))}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:Zt("string",ro._jsonSchemaVersion),bundleSource:Zt("string","QuerySnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class C_ extends FP{constructor(e){super(),this.firestore=e}convertBytes(e){return new kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function bl(t){t=dr(t,va);const e=dr(t.firestore,pa),n=Zd(e),i=new C_(e);return zx(t._query),MP(n,t._query).then(a=>new ro(e,i,t,a))}function GP(t,e,n){t=dr(t,Vt);const i=dr(t.firestore,pa),a=Hx(t.converter,e);return D_(i,[jx(tp(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Fr.none())])}function mi(t,e,n,...i){t=dr(t,Vt);const a=dr(t.firestore,pa),l=tp(a);let c;return c=typeof(e=Jt(e))=="string"||e instanceof Jd?qP(l,"updateDoc",t._key,e,n,i):UP(l,"updateDoc",t._key,e),D_(a,[c.toMutation(t._key,Fr.exists(!0))])}function YP(t,e){const n=dr(t.firestore,pa),i=jn(t),a=Hx(t.converter,e);return D_(n,[jx(tp(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Fr.exists(!1))]).then(()=>i)}function sp(t,...e){var p,g,v;t=Jt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Ww(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ww(e[i])){const E=e[i];e[i]=(p=E.next)==null?void 0:p.bind(E),e[i+1]=(g=E.error)==null?void 0:g.bind(E),e[i+2]=(v=E.complete)==null?void 0:v.bind(E)}let l,c,d;if(t instanceof Vt)c=dr(t.firestore,pa),d=zd(t._key.path),l={next:E=>{e[i]&&e[i](Gx(c,t,E))},error:e[i+1],complete:e[i+2]};else{const E=dr(t,va);c=dr(E.firestore,pa),d=E._query;const T=new C_(c);l={next:I=>{e[i]&&e[i](new ro(c,T,E,I))},error:e[i+1],complete:e[i+2]},zx(t._query)}return function(T,I,V,q){const M=new E_(q),F=new y_(I,M,V);return T.asyncQueue.enqueueAndForget(async()=>p_(await Td(T),F)),()=>{M.Nu(),T.asyncQueue.enqueueAndForget(async()=>m_(await Td(T),F))}}(Zd(c),d,a,l)}function D_(t,e){return function(i,a){const l=new ls;return i.asyncQueue.enqueueAndForget(async()=>EP(await kP(i),a,l)),l.promise}(Zd(t),e)}function Gx(t,e,n){const i=n.docs.get(e._key),a=new C_(t);return new no(t,a,e._key,i,new cc(n.hasPendingWrites,n.fromCache),e.converter)}function by(){return new w_("serverTimestamp")}(function(e,n=!0){(function(a){Fl=a})(zl),Rl(new oo("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new pa(new qN(i.getProvider("auth-internal")),new $N(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new _e(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),sa(Zb,Jb,e),sa(Zb,Jb,"esm2020")})();const WP={apiKey:"AIzaSyDPpncxsw6-M6CvwfqvDFCOXgnUuHXo44o",authDomain:"pdms-eda37.firebaseapp.com",projectId:"pdms-eda37",storageBucket:"pdms-eda37.firebasestorage.app",messagingSenderId:"62711519276",appId:"1:62711519276:web:1d66a26228c184d135d989"},I_=k1(WP);Nx(I_);const ot=Nx(I_),ma=NN(I_);function QP({onLoginSuccess:t}){const[e,n]=j.useState(""),[i,a]=j.useState(""),l=Ul(),c=()=>{l("/signup")},d=()=>{_M(ma,e,i).then(()=>{t(),l("/main")}).catch(p=>{alert("로그인 실패: "+p.message)})};return y.jsxs(KP,{children:[y.jsxs(XP,{children:[y.jsxs(ZP,{children:[y.jsx(JP,{children:"PDMS"}),y.jsx(eV,{children:"Pushcomz Design Management System"})]}),y.jsxs(tV,{children:[y.jsx(nV,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),y.jsx(rV,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),y.jsx(iV,{onClick:d,children:"로그인"}),y.jsxs(aV,{children:[y.jsx(oV,{children:"계정이 없습니까?"}),y.jsx(lV,{onClick:c,children:"등록하기"})]})]}),y.jsx(sV,{children:"© Pushcomz Corp."})]})}const KP=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,XP=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,ZP=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,JP=z.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,eV=z.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,tV=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,nV=z.input`
  width: 460px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,rV=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,iV=z.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,sV=z.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,aV=z.div`
  
`,oV=z.span`
  margin-right: 10px;
  font-size: 13px;
`,lV=z.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,uV="/assets/logo-NEcdCz8m.svg";function cV(){const[t,e]=YT(),n=t.get("view")||"dashboard",i=a=>{e(l=>{const c=new URLSearchParams(l);return c.set("view",a),c})};return y.jsx(hV,{children:y.jsxs(fV,{children:[y.jsx(kf,{children:y.jsx(Of,{type:"button",onClick:()=>i("allrequestlist"),$active:n==="allrequestlist",children:"전체 요청 리스트"})}),y.jsx(kf,{children:y.jsx(Of,{type:"button",onClick:()=>i("myrequestlist"),$active:n==="myrequestlist",children:"나의 요청 리스트"})}),y.jsx(kf,{children:y.jsx(Of,{type:"button",onClick:()=>i("dashboard"),$active:n==="dashboard",children:"전체 현황"})}),y.jsx(kf,{children:y.jsx(Of,{type:"button",onClick:()=>i("inworkhour"),$active:n==="inworkhour",children:"내부 공수"})})]})})}const hV=z.nav`
`,fV=z.ul`
  ${({theme:t})=>t.mixin.flex("center","flex-start")};
  gap: 0 20px;
`,kf=z.li`
  
`,Of=z.button`
  color: ${({theme:t,$active:e})=>e?t.colors.white01:t.colors.gray02};
  font-family: 'Pretendard';
  font-weight: 500;
  
  &:hover {
    color: ${({theme:t})=>t.colors.white01};
  }
`;function dV(){const[t,e]=j.useState(""),[n,i]=j.useState(""),[a,l]=j.useState(null),c=Ul();j.useEffect(()=>{const g=Fc(ma,async v=>{if(v){v.displayName&&e(v.displayName);const E=await Nc(jn(ot,"users",v.uid));if(E.exists()){const T=E.data();l(T.role??null),i(T.company??"")}else l(null),i("")}else e(""),l(null),i("")});return()=>g()},[]);const d=()=>{TM(ma).then(()=>{c("/")}).catch(g=>{alert("로그아웃 중 오류가 발생했습니다: "+g.message)})},p=g=>{switch(g){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return y.jsxs(pV,{children:[y.jsxs(mV,{children:[y.jsx(gV,{src:uV}),y.jsx(cV,{})]}),y.jsxs(yV,{children:[y.jsxs(_V,{children:[y.jsx(vV,{children:t}),"님(",p(a),") ",n,"환영합니다."]}),y.jsx(EV,{onClick:d,children:"로그아웃"}),y.jsx(bV,{})]})]})}const pV=z.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,mV=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 0 10px;
`,gV=z.img``,yV=z.div``,_V=z.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,vV=z.span`
  font-weight: 700;
`,EV=z.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,bV=z.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,k_="./assets/url-icon-DJKri2bW.svg";function wV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return y.jsxs(TV,{isCanceled:t.status==="취소",children:[y.jsx(Dr,{children:e}),y.jsx(Dr,{children:y.jsx(DV,{onClick:d,$hasUpdate:!!t.updated_date,children:t.design_request_id})}),y.jsx(Dr,{children:c(t.request_date)}),y.jsx(SV,{children:c(t.completion_date)}),y.jsx(xV,{children:c(t.open_date)}),y.jsx(Dr,{children:t.merchandiser}),y.jsx(Dr,{children:t.task_form}),y.jsx(AV,{children:y.jsxs(IV,{children:[y.jsx(kV,{children:t.task_type}),y.jsx(OV,{children:t.task_type_detail})]})}),y.jsx(RV,{children:y.jsxs(MV,{children:[t.emergency?y.jsx(Yx,{children:"긴급"}):"",y.jsx(NV,{onClick:d,children:t.requirement})]})}),y.jsx(Dr,{children:y.jsx(Xw,{href:t.url,target:"_blank"})}),y.jsx(CV,{children:y.jsx(PV,{onClick:d,children:t.note||""})}),y.jsx(Dr,{children:y.jsx(VV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status||"대기"})}),y.jsx(Dr,{children:t.assigned_designer||"미배정"}),y.jsx(Dr,{children:t.manager_review_status==="검수완료"&&t.result_url?y.jsx(Xw,{href:t.result_url,target:"_blank"}):""}),y.jsx(Dr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?y.jsx(Wx,{onClick:()=>n(t.id),children:"검수완료"}):y.jsx(jV,{children:"검수완료"}):""}),y.jsx(Dr,{children:y.jsx(Qx,{onClick:()=>a(t.id),disabled:t.status==="취소"||t.status==="완료",children:"수정"})}),y.jsx(Dr,{children:y.jsx(Kx,{onClick:()=>i(t.id),disabled:t.status==="취소"||t.status==="완료",children:"취소"})})]})}const TV=z.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({isCanceled:t,theme:e})=>t&&`
      ${Yx} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${Wx}, ${Qx}, ${Kx} {
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
`,Dr=z.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,SV=z.td`
  color: ${({theme:t})=>t.colors.red};
`,xV=z.td`
  color: ${({theme:t})=>t.colors.blue02};
`,AV=z.td`
  padding: 15px 12px;
  line-height: 15px;
`,RV=z.td`
  line-height: 15px;
  text-align: left;
`,CV=z.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,DV=z.span`
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
`,IV=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,kV=z.span`
  
`,OV=z.span`
  
`,MV=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,NV=z.span`
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
`,Yx=z.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,Xw=z.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${k_}) no-repeat center / contain;
`,PV=z.span`
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
`,VV=z.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,Wx=z.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,jV=z.span`
  color: green;
  font-weight: bold;
`,Qx=z.button`
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
`,Kx=z.button`
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
`;function Zw({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return y.jsx(LV,{children:y.jsxs(UV,{children:[y.jsx(qV,{children:"요청 리스트"}),y.jsxs("colgroup",{children:[y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"85px"}}),y.jsx("col",{style:{width:"60px"}}),y.jsx("col",{style:{width:"60px"}}),y.jsx("col",{style:{width:"60px"}}),y.jsx("col",{style:{width:"60px"}}),y.jsx("col",{style:{width:"100px"}}),y.jsx("col",{style:{width:"120px"}}),y.jsx("col",{}),y.jsx("col",{style:{width:"90px"}}),y.jsx("col",{style:{width:"180px"}}),y.jsx("col",{style:{width:"100px"}}),y.jsx("col",{style:{width:"85px"}}),y.jsx("col",{style:{width:"90px"}}),y.jsx("col",{style:{width:"100px"}}),y.jsx("col",{style:{width:"80px"}}),y.jsx("col",{style:{width:"80px"}})]}),y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx(An,{children:"번호"}),y.jsx(An,{children:"문서번호"}),y.jsx(An,{children:"요청일"}),y.jsxs(An,{children:["완료",y.jsx("br",{}),"요청일"]}),y.jsx(An,{children:"오픈일"}),y.jsx(An,{children:"담당MD"}),y.jsx(An,{children:"업무부서"}),y.jsx(An,{children:"업무유형"}),y.jsx(An,{children:"작업항목"}),y.jsx(An,{children:"요청서 URL"}),y.jsx(An,{children:"메모"}),y.jsx(An,{children:"진행상태"}),y.jsx(An,{children:"디자이너"}),y.jsx(An,{children:"산출물 URL"}),y.jsx(An,{children:"검수"}),y.jsx(An,{children:"수정"}),y.jsx(An,{children:"취소"})]})}),y.jsx("tbody",{children:t.length>0?t.map((l,c)=>y.jsx(wV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):y.jsx("tr",{children:y.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const LV=z.div`
  max-height: 535px;
  overflow-y: auto;
  scrollbar-width: thin;
`,UV=z.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,qV=z.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,An=z.th`
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
`;function O_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return y.jsx(BV,{children:y.jsxs(zV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const BV=z.div`
  padding: 29px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,zV=z.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Xx="./assets/selectbox-arrow-BwC8UGU0.svg";function $V(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const Cg={},hc={};function eo(t,e){try{const i=(Cg[t]||(Cg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in hc?hc[i]:Jw(i,i.split(":"))}catch{if(t in hc)return hc[t];const n=t==null?void 0:t.match(FV);return n?Jw(t,n.slice(1)):NaN}}const FV=/([+-]\d\d):?(\d\d)?/;function Jw(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return hc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class gi extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(eo(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),Zx(this),wy(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new gi(...n,e):new gi(Date.now(),e)}withTimeZone(e){return new gi(+this,e)}getTimezoneOffset(){const e=-eo(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),wy(this),+this}[Symbol.for("constructDateFrom")](e){return new gi(+new Date(e),this.timeZone)}}const eT=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!eT.test(t))return;const e=t.replace(eT,"$1UTC");gi.prototype[e]&&(t.startsWith("get")?gi.prototype[t]=function(){return this.internal[e]()}:(gi.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),HV(this),+this},gi.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),wy(this),+this}))});function wy(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-eo(t.timeZone,t)*60))}function HV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),Zx(t)}function Zx(t){const e=eo(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,E=Math.round(-(eo(t.timeZone,t)*60))%60;(E||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+E),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+E+v));const T=eo(t.timeZone,t),I=T>0?Math.floor(T):Math.ceil(T),q=-new Date(+t).getTimezoneOffset()-I,M=I!==n,F=q-p;if(M&&F){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+F);const G=eo(t.timeZone,t),P=G>0?Math.floor(G):Math.ceil(G),te=I-P;te&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+te),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+te))}}class Nn extends gi{static tz(e,...n){return n.length?new Nn(...n,e):new Nn(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${$V(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new Nn(+this,e)}[Symbol.for("constructDateFrom")](e){return new Nn(+new Date(e),this.timeZone)}}const Jx=6048e5,GV=864e5,tT=Symbol.for("constructDateFrom");function on(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&tT in t?t[tT](e):t instanceof Date?new t.constructor(e):new Date(e)}function yt(t,e){return on(e||t,t)}function eA(t,e,n){const i=yt(t,n==null?void 0:n.in);return isNaN(e)?on(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function tA(t,e,n){const i=yt(t,n==null?void 0:n.in);if(isNaN(e))return on(t,NaN);if(!e)return i;const a=i.getDate(),l=on(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let YV={};function Zc(){return YV}function Pl(t,e){var d,p,g,v;const n=Zc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=yt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Pc(t,e){return Pl(t,{...e,weekStartsOn:1})}function nA(t,e){const n=yt(t,e==null?void 0:e.in),i=n.getFullYear(),a=on(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Pc(a),c=on(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Pc(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function nT(t){const e=yt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Ql(t,...e){const n=on.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Vc(t,e){const n=yt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function rA(t,e,n){const[i,a]=Ql(n==null?void 0:n.in,t,e),l=Vc(i),c=Vc(a),d=+l-nT(l),p=+c-nT(c);return Math.round((d-p)/GV)}function WV(t,e){const n=nA(t,e),i=on(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Pc(i)}function QV(t,e,n){return eA(t,e*7,n)}function KV(t,e,n){return tA(t,e*12,n)}function XV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=yt(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function ZV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=yt(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function JV(t,e,n){const[i,a]=Ql(n==null?void 0:n.in,t,e);return+Vc(i)==+Vc(a)}function iA(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ej(t){return!(!iA(t)&&typeof t!="number"||isNaN(+yt(t)))}function tj(t,e,n){const[i,a]=Ql(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function nj(t,e){const n=yt(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function rj(t,e){const[n,i]=Ql(t,e.start,e.end);return{start:n,end:i}}function ij(t,e){const{start:n,end:i}=rj(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(on(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function sj(t,e){const n=yt(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function aj(t,e){const n=yt(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function sA(t,e){const n=yt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function aA(t,e){var d,p,g,v;const n=Zc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=yt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function oj(t,e){return aA(t,{...e,weekStartsOn:1})}const lj={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},uj=(t,e,n)=>{let i;const a=lj[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function Dg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const cj={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},hj={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},fj={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},dj={date:Dg({formats:cj,defaultWidth:"full"}),time:Dg({formats:hj,defaultWidth:"full"}),dateTime:Dg({formats:fj,defaultWidth:"full"})},pj={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mj=(t,e,n,i)=>pj[t];function ec(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const gj={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},yj={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_j={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vj={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ej={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},bj={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},wj=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Tj={ordinalNumber:wj,era:ec({values:gj,defaultWidth:"wide"}),quarter:ec({values:yj,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ec({values:_j,defaultWidth:"wide"}),day:ec({values:vj,defaultWidth:"wide"}),dayPeriod:ec({values:Ej,defaultWidth:"wide",formattingValues:bj,defaultFormattingWidth:"wide"})};function tc(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?xj(d,E=>E.test(c)):Sj(d,E=>E.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function Sj(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function xj(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Aj(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const Rj=/^(\d+)(th|st|nd|rd)?/i,Cj=/\d+/i,Dj={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ij={any:[/^b/i,/^(a|c)/i]},kj={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Oj={any:[/1/i,/2/i,/3/i,/4/i]},Mj={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nj={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Pj={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Vj={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jj={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lj={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Uj={ordinalNumber:Aj({matchPattern:Rj,parsePattern:Cj,valueCallback:t=>parseInt(t,10)}),era:tc({matchPatterns:Dj,defaultMatchWidth:"wide",parsePatterns:Ij,defaultParseWidth:"any"}),quarter:tc({matchPatterns:kj,defaultMatchWidth:"wide",parsePatterns:Oj,defaultParseWidth:"any",valueCallback:t=>t+1}),month:tc({matchPatterns:Mj,defaultMatchWidth:"wide",parsePatterns:Nj,defaultParseWidth:"any"}),day:tc({matchPatterns:Pj,defaultMatchWidth:"wide",parsePatterns:Vj,defaultParseWidth:"any"}),dayPeriod:tc({matchPatterns:jj,defaultMatchWidth:"any",parsePatterns:Lj,defaultParseWidth:"any"})},M_={code:"en-US",formatDistance:uj,formatLong:dj,formatRelative:mj,localize:Tj,match:Uj,options:{weekStartsOn:0,firstWeekContainsDate:1}};function qj(t,e){const n=yt(t,e==null?void 0:e.in);return rA(n,sA(n))+1}function oA(t,e){const n=yt(t,e==null?void 0:e.in),i=+Pc(n)-+WV(n);return Math.round(i/Jx)+1}function lA(t,e){var v,E,T,I;const n=yt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Zc(),l=(e==null?void 0:e.firstWeekContainsDate)??((E=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??a.firstWeekContainsDate??((I=(T=a.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=on((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Pl(c,e),p=on((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Pl(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function Bj(t,e){var d,p,g,v;const n=Zc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=lA(t,e),l=on((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Pl(l,e)}function uA(t,e){const n=yt(t,e==null?void 0:e.in),i=+Pl(n,e)-+Bj(n,e);return Math.round(i/Jx)+1}function ft(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Ws={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ft(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ft(n+1,2)},d(t,e){return ft(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ft(t.getHours()%12||12,e.length)},H(t,e){return ft(t.getHours(),e.length)},m(t,e){return ft(t.getMinutes(),e.length)},s(t,e){return ft(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ft(a,e.length)}},ll={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},rT={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Ws.y(t,e)},Y:function(t,e,n,i){const a=lA(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ft(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ft(l,e.length)},R:function(t,e){const n=nA(t);return ft(n,e.length)},u:function(t,e){const n=t.getFullYear();return ft(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ft(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ft(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Ws.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ft(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=uA(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ft(a,e.length)},I:function(t,e,n){const i=oA(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ft(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ws.d(t,e)},D:function(t,e,n){const i=qj(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ft(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ft(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ft(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ft(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=ll.noon:i===0?a=ll.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=ll.evening:i>=12?a=ll.afternoon:i>=4?a=ll.morning:a=ll.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ws.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ws.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ft(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ft(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ws.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ws.s(t,e)},S:function(t,e){return Ws.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return sT(i);case"XXXX":case"XX":return Xa(i);case"XXXXX":case"XXX":default:return Xa(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return sT(i);case"xxxx":case"xx":return Xa(i);case"xxxxx":case"xxx":default:return Xa(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+iT(i,":");case"OOOO":default:return"GMT"+Xa(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+iT(i,":");case"zzzz":default:return"GMT"+Xa(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ft(i,e.length)},T:function(t,e,n){return ft(+t,e.length)}};function iT(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ft(l,2)}function sT(t,e){return t%60===0?(t>0?"-":"+")+ft(Math.abs(t)/60,2):Xa(t,e)}function Xa(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ft(Math.trunc(i/60),2),l=ft(i%60,2);return n+a+e+l}const aT=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},cA=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},zj=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return aT(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",aT(i,e)).replace("{{time}}",cA(a,e))},$j={p:cA,P:zj},Fj=/^D+$/,Hj=/^Y+$/,Gj=["D","DD","YY","YYYY"];function Yj(t){return Fj.test(t)}function Wj(t){return Hj.test(t)}function Qj(t,e,n){const i=Kj(t,e,n);if(console.warn(i),Gj.includes(t))throw new RangeError(i)}function Kj(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xj=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zj=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jj=/^'([^]*?)'?$/,e6=/''/g,t6=/[a-zA-Z]/;function n6(t,e,n){var v,E,T,I,V,q,M,F;const i=Zc(),a=(n==null?void 0:n.locale)??i.locale??M_,l=(n==null?void 0:n.firstWeekContainsDate)??((E=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??i.firstWeekContainsDate??((I=(T=i.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((q=(V=n==null?void 0:n.locale)==null?void 0:V.options)==null?void 0:q.weekStartsOn)??i.weekStartsOn??((F=(M=i.locale)==null?void 0:M.options)==null?void 0:F.weekStartsOn)??0,d=yt(t,n==null?void 0:n.in);if(!ej(d))throw new RangeError("Invalid time value");let p=e.match(Zj).map(G=>{const P=G[0];if(P==="p"||P==="P"){const te=$j[P];return te(G,a.formatLong)}return G}).join("").match(Xj).map(G=>{if(G==="''")return{isToken:!1,value:"'"};const P=G[0];if(P==="'")return{isToken:!1,value:r6(G)};if(rT[P])return{isToken:!0,value:G};if(P.match(t6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:G}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(G=>{if(!G.isToken)return G.value;const P=G.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Wj(P)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Yj(P))&&Qj(P,e,String(t));const te=rT[P[0]];return te(d,P,a.localize,g)}).join("")}function r6(t){const e=t.match(Jj);return e?e[1].replace(e6,"'"):t}function i6(t,e){const n=yt(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=on(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function s6(t,e){return yt(t,e==null?void 0:e.in).getMonth()}function a6(t,e){return yt(t,e==null?void 0:e.in).getFullYear()}function o6(t,e){return+yt(t)>+yt(e)}function l6(t,e){return+yt(t)<+yt(e)}function u6(t,e,n){const[i,a]=Ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function c6(t,e,n){const[i,a]=Ql(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function h6(t,e,n){const i=yt(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=on(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=i6(c);return i.setMonth(e,Math.min(l,d)),i}function f6(t,e,n){const i=yt(t,n==null?void 0:n.in);return isNaN(+i)?on(t,NaN):(i.setFullYear(e),i)}const oT=5,d6=4;function p6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,oT*7-1);return e.getMonth(t)===e.getMonth(l)?oT:d6}function hA(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function m6(t,e){const n=hA(t,e),i=p6(t,e);return e.addDays(n,i*7-1)}class ys{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?Nn.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new Nn(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):eA(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):tA(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):QV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):KV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):rA(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):tj(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):ij(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):m6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):oj(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):nj(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):aA(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):aj(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):n6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):oA(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):s6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):a6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):uA(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):o6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):l6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):iA(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):JV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):u6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):c6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):XV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):ZV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):h6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):f6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):hA(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Vc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Pc(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):sj(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Pl(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):sA(i)},this.options={locale:M_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const xi=new ys;class fA{constructor(e,n,i=xi){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class g6{constructor(e,n){this.date=e,this.weeks=n}}class y6{constructor(e,n){this.days=n,this.weekNumber=e}}function _6(t){return ge.createElement("button",{...t})}function v6(t){return ge.createElement("span",{...t})}function E6(t){const{size:e=24,orientation:n="left",className:i}=t;return ge.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&ge.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&ge.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&ge.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&ge.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function b6(t){const{day:e,modifiers:n,...i}=t;return ge.createElement("td",{...i})}function w6(t){const{day:e,modifiers:n,...i}=t,a=ge.useRef(null);return ge.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),ge.createElement("button",{ref:a,...i})}var xe;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(xe||(xe={}));var kt;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(kt||(kt={}));var zr;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(zr||(zr={}));var cr;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(cr||(cr={}));function T6(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[xe.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return ge.createElement("span",{"data-disabled":l.disabled,className:a[xe.DropdownRoot]},ge.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>ge.createElement(i.Option,{key:p,value:p,disabled:v},g))),ge.createElement("span",{className:a[xe.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,ge.createElement(i.Chevron,{orientation:"down",size:18,className:a[xe.Chevron]})))}function S6(t){return ge.createElement("div",{...t})}function x6(t){return ge.createElement("div",{...t})}function A6(t){const{calendarMonth:e,displayIndex:n,...i}=t;return ge.createElement("div",{...i},t.children)}function R6(t){const{calendarMonth:e,displayIndex:n,...i}=t;return ge.createElement("div",{...i})}function C6(t){return ge.createElement("table",{...t})}function D6(t){return ge.createElement("div",{...t})}const dA=j.createContext(void 0);function Jc(){const t=j.useContext(dA);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function I6(t){const{components:e}=Jc();return ge.createElement(e.Dropdown,{...t})}function k6(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Jc(),v=j.useCallback(T=>{a&&(n==null||n(T))},[a,n]),E=j.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return ge.createElement("nav",{...l},ge.createElement(c.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:E},ge.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[xe.Chevron],orientation:"left"})),ge.createElement(c.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},ge.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[xe.Chevron]})))}function O6(t){const{components:e}=Jc();return ge.createElement(e.Button,{...t})}function M6(t){return ge.createElement("option",{...t})}function N6(t){const{components:e}=Jc();return ge.createElement(e.Button,{...t})}function P6(t){const{rootRef:e,...n}=t;return ge.createElement("div",{...n,ref:e})}function V6(t){return ge.createElement("select",{...t})}function j6(t){const{week:e,...n}=t;return ge.createElement("tr",{...n})}function L6(t){return ge.createElement("th",{...t})}function U6(t){return ge.createElement("thead",{"aria-hidden":!0},ge.createElement("tr",{...t}))}function q6(t){const{week:e,...n}=t;return ge.createElement("th",{...n})}function B6(t){return ge.createElement("th",{...t})}function z6(t){return ge.createElement("tbody",{...t})}function $6(t){const{components:e}=Jc();return ge.createElement(e.Dropdown,{...t})}const F6=Object.freeze(Object.defineProperty({__proto__:null,Button:_6,CaptionLabel:v6,Chevron:E6,Day:b6,DayButton:w6,Dropdown:T6,DropdownNav:S6,Footer:x6,Month:A6,MonthCaption:R6,MonthGrid:C6,Months:D6,MonthsDropdown:I6,Nav:k6,NextMonthButton:O6,Option:M6,PreviousMonthButton:N6,Root:P6,Select:V6,Week:j6,WeekNumber:q6,WeekNumberHeader:B6,Weekday:L6,Weekdays:U6,Weeks:z6,YearsDropdown:$6},Symbol.toStringTag,{value:"Module"}));function is(t,e,n=!1,i=xi){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function pA(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function N_(t){return!!(t&&typeof t=="object"&&"from"in t)}function mA(t){return!!(t&&typeof t=="object"&&"after"in t)}function gA(t){return!!(t&&typeof t=="object"&&"before"in t)}function yA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function _A(t,e){return Array.isArray(t)&&t.every(e.isDate)}function ss(t,e,n=xi){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(_A(d,n))return d.includes(t);if(N_(d))return is(d,t,!1,n);if(yA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(pA(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,E=g<0;return c(d.before,d.after)?E&&v:v||E}return mA(d)?l(t,d.after)>0:gA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function H6(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:E,isSameMonth:T,startOfMonth:I,isBefore:V,endOfMonth:q,isAfter:M}=a,F=n&&I(n),G=i&&q(i),P={[kt.focused]:[],[kt.outside]:[],[kt.disabled]:[],[kt.hidden]:[],[kt.today]:[]},te={};for(const $ of t){const{date:re,displayMonth:D}=$,R=!!(D&&!T(re,D)),O=!!(F&&V(re,F)),U=!!(G&&M(re,G)),B=!!(l&&ss(re,l,a)),C=!!(c&&ss(re,c,a))||O||U||!g&&!p&&R||g&&p===!1&&R,x=E(re,v??a.today());R&&P.outside.push($),B&&P.disabled.push($),C&&P.hidden.push($),x&&P.today.push($),d&&Object.keys(d).forEach(ce=>{const ye=d==null?void 0:d[ce];ye&&ss(re,ye,a)&&(te[ce]?te[ce].push($):te[ce]=[$])})}return $=>{const re={[kt.focused]:!1,[kt.disabled]:!1,[kt.hidden]:!1,[kt.outside]:!1,[kt.today]:!1},D={};for(const R in P){const O=P[R];re[R]=O.some(U=>U===$)}for(const R in te)D[R]=te[R].some(O=>O===$);return{...re,...D}}}function G6(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[kt[l]]?a.push(e[kt[l]]):e[zr[l]]&&a.push(e[zr[l]]),a),[e[xe.Day]])}function Y6(t){return{...F6,...t}}function W6(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function Q6(){const t={};for(const e in xe)t[xe[e]]=`rdp-${xe[e]}`;for(const e in kt)t[kt[e]]=`rdp-${kt[e]}`;for(const e in zr)t[zr[e]]=`rdp-${zr[e]}`;for(const e in cr)t[cr[e]]=`rdp-${cr[e]}`;return t}function vA(t,e,n){return(n??new ys(e)).format(t,"LLLL y")}const K6=vA;function X6(t,e,n){return(n??new ys(e)).format(t,"d")}function Z6(t,e=xi){return e.format(t,"LLLL")}function J6(t,e,n){return(n??new ys(e)).format(t,"cccccc")}function eL(t,e=xi){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function tL(){return""}function EA(t,e=xi){return e.format(t,"yyyy")}const nL=EA,rL=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:vA,formatDay:X6,formatMonthCaption:K6,formatMonthDropdown:Z6,formatWeekNumber:eL,formatWeekNumberHeader:tL,formatWeekdayName:J6,formatYearCaption:nL,formatYearDropdown:EA},Symbol.toStringTag,{value:"Module"}));function iL(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...rL,...t}}function sL(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const I=i.formatMonthDropdown(T,a),V=g(T),q=e&&T<l(e)||n&&T>l(n)||!1;return{value:V,label:I,disabled:q}})}function aL(t,e={},n={}){let i={...e==null?void 0:e[xe.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function oL(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function lL(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,E=l(t),T=c(e),I=[];let V=E;for(;g(V,T)||v(V,T);)I.push(V),V=d(V,1);return a&&I.reverse(),I.map(q=>{const M=n.formatYearDropdown(q,i);return{value:p(q),label:M,disabled:!1}})}function bA(t,e,n,i){let a=(i??new ys(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const uL=bA;function wA(t,e,n){return(n??new ys(e)).format(t,"LLLL y")}const cL=wA;function hL(t,e,n,i){let a=(i??new ys(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function fL(t){return"Choose the Month"}function dL(){return""}function pL(t){return"Go to the Next Month"}function mL(t){return"Go to the Previous Month"}function gL(t,e,n){return(n??new ys(e)).format(t,"cccc")}function yL(t,e){return`Week ${t}`}function _L(t){return"Week Number"}function vL(t){return"Choose the Year"}const EL=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:cL,labelDay:uL,labelDayButton:bA,labelGrid:wA,labelGridcell:hL,labelMonthDropdown:fL,labelNav:dL,labelNext:pL,labelPrevious:mL,labelWeekNumber:yL,labelWeekNumberHeader:_L,labelWeekday:gL,labelYearDropdown:vL},Symbol.toStringTag,{value:"Module"})),eh=t=>t instanceof HTMLElement?t:null,Ig=t=>[...t.querySelectorAll("[data-animated-month]")??[]],bL=t=>eh(t.querySelector("[data-animated-month]")),kg=t=>eh(t.querySelector("[data-animated-caption]")),Og=t=>eh(t.querySelector("[data-animated-weeks]")),wL=t=>eh(t.querySelector("[data-animated-nav]")),TL=t=>eh(t.querySelector("[data-animated-weekdays]"));function SL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=j.useRef(null),d=j.useRef(i),p=j.useRef(!1);j.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),E=l.isAfter(i[0].date,g[0].date),T=E?n[cr.caption_after_enter]:n[cr.caption_before_enter],I=E?n[cr.weeks_after_enter]:n[cr.weeks_before_enter],V=c.current,q=t.current.cloneNode(!0);if(q instanceof HTMLElement?(Ig(q).forEach(P=>{if(!(P instanceof HTMLElement))return;const te=bL(P);te&&P.contains(te)&&P.removeChild(te);const $=kg(P);$&&$.classList.remove(T);const re=Og(P);re&&re.classList.remove(I)}),c.current=q):c.current=null,p.current||v||a)return;const M=V instanceof HTMLElement?Ig(V):[],F=Ig(t.current);if(F!=null&&F.every(G=>G instanceof HTMLElement)&&M&&M.every(G=>G instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const G=wL(t.current);G&&(G.style.zIndex="1"),F.forEach((P,te)=>{const $=M[te];if(!$)return;P.style.position="relative",P.style.overflow="hidden";const re=kg(P);re&&re.classList.add(T);const D=Og(P);D&&D.classList.add(I);const R=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),G&&(G.style.zIndex=""),re&&re.classList.remove(T),D&&D.classList.remove(I),P.style.position="",P.style.overflow="",P.contains($)&&P.removeChild($)};$.style.pointerEvents="none",$.style.position="absolute",$.style.overflow="hidden",$.setAttribute("aria-hidden","true");const O=TL($);O&&(O.style.opacity="0");const U=kg($);U&&(U.classList.add(E?n[cr.caption_before_exit]:n[cr.caption_after_exit]),U.addEventListener("animationend",R));const B=Og($);B&&B.classList.add(E?n[cr.weeks_before_exit]:n[cr.weeks_after_exit]),P.insertBefore($,P.firstChild)})}})}function xL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:E,endOfBroadcastWeek:T,endOfISOWeek:I,endOfMonth:V,endOfWeek:q,isAfter:M,startOfBroadcastWeek:F,startOfISOWeek:G,startOfWeek:P}=i,te=p?F(a,i):c?G(a):P(a),$=p?T(l):c?I(V(l)):q(V(l)),re=v($,te),D=E(l,a)+1,R=[];for(let B=0;B<=re;B++){const C=g(te,B);if(e&&M(C,e))break;R.push(C)}const U=(p?35:42)*D;if(d&&R.length<U){const B=U-R.length;for(let C=0;C<B;C++){const x=g(R[R.length-1],1);R.push(x)}}return R}function AL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function RL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function lT(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:E}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),E(p)}function CL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:E,startOfISOWeek:T,startOfWeek:I}=i,V=t.reduce((q,M)=>{const F=n.broadcastCalendar?E(M,i):n.ISOWeek?T(M):I(M),G=n.broadcastCalendar?l(M):n.ISOWeek?c(d(M)):p(d(M)),P=e.filter(D=>D>=F&&D<=G),te=n.broadcastCalendar?35:42;if(n.fixedWeeks&&P.length<te){const D=e.filter(R=>{const O=te-P.length;return R>G&&R<=a(G,O)});P.push(...D)}const $=P.reduce((D,R)=>{const O=n.ISOWeek?g(R):v(R),U=D.find(C=>C.weekNumber===O),B=new fA(R,M,i);return U?U.days.push(B):D.push(new y6(O,[B])),D},[]),re=new g6(M,$);return q.push(re),q},[]);return n.reverseMonths?V.reverse():V}function DL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:E}=e,{fromYear:T,toYear:I,fromMonth:V,toMonth:q}=t;!n&&V&&(n=V),!n&&T&&(n=e.newDate(T,0,1)),!i&&q&&(i=q),!i&&I&&(i=v(I,11,31));const M=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&M&&(n=a(p(t.today??E(),-100))),i?i=d(i):I?i=v(I,11,31):!i&&M&&(i=g(t.today??E())),[n&&l(n),i&&l(i)]}function IL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function kL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function OL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function ap(t,e){const[n,i]=j.useState(t);return[e===void 0?n:e,i]}function ML(t,e){const[n,i]=DL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=lT(t,n,i,e),[d,p]=ap(c,t.month?c:void 0);j.useEffect(()=>{const re=lT(t,n,i,e);p(re)},[t.timeZone]);const g=RL(d,i,t,e),v=xL(g,t.endMonth?l(t.endMonth):void 0,t,e),E=CL(g,v,t,e),T=OL(E),I=AL(E),V=kL(d,n,t,e),q=IL(d,i,t,e),{disableNavigation:M,onMonthChange:F}=t,G=re=>T.some(D=>D.days.some(R=>R.isEqualTo(re))),P=re=>{if(M)return;let D=a(re);n&&D<a(n)&&(D=a(n)),i&&D>a(i)&&(D=a(i)),p(D),F==null||F(D)};return{months:E,weeks:T,days:I,navStart:n,navEnd:i,previousMonth:V,nextMonth:q,goToMonth:P,goToDay:re=>{G(re)||P(re.date)}}}var fi;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(fi||(fi={}));function uT(t){return!t[kt.disabled]&&!t[kt.hidden]&&!t[kt.outside]}function NL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);uT(d)&&(d[kt.focused]&&l<fi.FocusedModifier?(a=c,l=fi.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<fi.LastFocused?(a=c,l=fi.LastFocused):n(c.date)&&l<fi.Selected?(a=c,l=fi.Selected):d[kt.today]&&l<fi.Today&&(a=c,l=fi.Today))}return a||(a=t.find(c=>uT(e(c)))),a}function PL(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:E,addYears:T,endOfBroadcastWeek:I,endOfISOWeek:V,endOfWeek:q,max:M,min:F,startOfBroadcastWeek:G,startOfISOWeek:P,startOfWeek:te}=c;let re={day:g,week:E,month:v,year:T,startOfWeek:D=>p?G(D,c):d?P(D):te(D),endOfWeek:D=>p?I(D):d?V(D):q(D)}[t](n,e==="after"?1:-1);return e==="before"&&i?re=M([i,re]):e==="after"&&a&&(re=F([a,re])),re}function TA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=PL(t,e,n.date,i,a,l,c),g=!!(l.disabled&&ss(p,l.disabled,c)),v=!!(l.hidden&&ss(p,l.hidden,c)),E=p,T=new fA(p,E,c);return!g&&!v?T:TA(t,e,T,i,a,l,c,d+1)}function VL(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=j.useState(),p=NL(e.days,n,i||(()=>!1),c),[g,v]=j.useState(l?p:void 0);return{isFocusTarget:q=>!!(p!=null&&p.isEqualTo(q)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(q,M)=>{if(!g)return;const F=TA(q,M,g,e.navStart,e.navEnd,t,a);F&&(e.goToDay(F),v(F))}}}function jL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ap(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=I=>(d==null?void 0:d.some(V=>p(V,I)))??!1,{min:v,max:E}=t;return{selected:d,select:(I,V,q)=>{let M=[...d??[]];if(g(I)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;M=d==null?void 0:d.filter(F=>!p(F,I))}else(d==null?void 0:d.length)===E?M=[I]:M=[...M,I];return a||c(M),a==null||a(M,I,V,q),M},isSelected:g}}function LL(t,e,n=0,i=0,a=!1,l=xi){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let E;if(!c&&!d)E={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?E={from:c,to:t}:a?E={from:c,to:void 0}:E=void 0:v(t,c)?E={from:t,to:c}:E={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?E={from:c,to:d}:E=void 0;else if(p(c,t))E={from:c,to:n>0?void 0:t};else if(p(d,t))E={from:t,to:n>0?void 0:t};else if(v(t,c))E={from:t,to:d};else if(g(t,c))E={from:c,to:t};else if(g(t,d))E={from:c,to:t};else throw new Error("Invalid range");if(E!=null&&E.from&&(E!=null&&E.to)){const T=l.differenceInCalendarDays(E.to,E.from);i>0&&T>i?E={from:t,to:void 0}:n>1&&T<n&&(E={from:t,to:void 0})}return E}function UL(t,e,n=xi){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function cT(t,e,n=xi){return is(t,e.from,!1,n)||is(t,e.to,!1,n)||is(e,t.from,!1,n)||is(e,t.to,!1,n)}function qL(t,e,n=xi){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?is(t,d,!1,n):_A(d,n)?d.some(p=>is(t,p,!1,n)):N_(d)?d.from&&d.to?cT(t,{from:d.from,to:d.to},n):!1:yA(d)?UL(t,d.dayOfWeek,n):pA(d)?n.isAfter(d.before,d.after)?cT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):ss(t.from,d,n)||ss(t.to,d,n):mA(d)||gA(d)?ss(t.from,d,n)||ss(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function BL(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=ap(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,I,V)=>{const{min:q,max:M}=t,F=T?LL(T,g,q,M,l,e):void 0;return i&&n&&(F!=null&&F.from)&&F.to&&qL({from:F.from,to:F.to},n,e)&&(F.from=T,F.to=void 0),c||p(F),c==null||c(F,T,I,V),F},isSelected:T=>g&&is(g,T,!1,e)}}function zL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ap(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(E,T,I)=>{let V=E;return!i&&d&&d&&p(E,d)&&(V=void 0),a||c(V),a==null||a(V,E,T,I),V},isSelected:E=>d?p(d,E):!1}}function $L(t,e){const n=zL(t,e),i=jL(t,e),a=BL(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function FL(t){var _s;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new Nn(e.today,e.timeZone)),e.month&&(e.month=new Nn(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new Nn(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new Nn(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new Nn(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new Nn(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(_s=e.selected)==null?void 0:_s.map(je=>new Nn(je,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new Nn(e.selected.from,e.timeZone):void 0,to:e.selected.to?new Nn(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=j.useMemo(()=>{const je={...M_,...e.locale};return{dateLib:new ys({locale:je,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Y6(e.components),formatters:iL(e.formatters),labels:{...EL,...e.labels},locale:je,classNames:{...Q6(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:E=1,onDayBlur:T,onDayClick:I,onDayFocus:V,onDayKeyDown:q,onDayMouseEnter:M,onDayMouseLeave:F,onNextClick:G,onPrevClick:P,showWeekNumber:te,styles:$}=e,{formatCaption:re,formatDay:D,formatMonthDropdown:R,formatWeekNumber:O,formatWeekNumberHeader:U,formatWeekdayName:B,formatYearDropdown:C}=i,x=ML(e,l),{days:ce,months:ye,navStart:k,navEnd:J,previousMonth:se,nextMonth:de,goToMonth:N}=x,ne=H6(ce,e,k,J,l),{isSelected:le,select:ue,selected:ve}=$L(e,l)??{},{blur:Ae,focused:Te,isFocusTarget:_t,moveFocus:Fe,setFocused:Tt}=VL(e,x,ne,le??(()=>!1),l),{labelDayButton:In,labelGridcell:ln,labelGrid:pe,labelMonthDropdown:De,labelNav:we,labelPrevious:Le,labelNext:ut,labelWeekday:jt,labelWeekNumber:pr,labelWeekNumberHeader:mr,labelYearDropdown:Yn}=a,Jn=j.useMemo(()=>oL(l,e.ISOWeek),[l,e.ISOWeek]),go=g!==void 0||I!==void 0,Wr=j.useCallback(()=>{se&&(N(se),P==null||P(se))},[se,N,P]),Ai=j.useCallback(()=>{de&&(N(de),G==null||G(de))},[N,de,G]),yo=j.useCallback((je,it)=>ke=>{ke.preventDefault(),ke.stopPropagation(),Tt(je),ue==null||ue(je.date,it,ke),I==null||I(je.date,it,ke)},[ue,I,Tt]),xt=j.useCallback((je,it)=>ke=>{Tt(je),V==null||V(je.date,it,ke)},[V,Tt]),nt=j.useCallback((je,it)=>ke=>{Ae(),T==null||T(je.date,it,ke)},[Ae,T]),Un=j.useCallback((je,it)=>ke=>{const et={ArrowLeft:[ke.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[ke.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[ke.shiftKey?"year":"week","after"],ArrowUp:[ke.shiftKey?"year":"week","before"],PageUp:[ke.shiftKey?"year":"month","before"],PageDown:[ke.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(et[ke.key]){ke.preventDefault(),ke.stopPropagation();const[cn,Ue]=et[ke.key];Fe(cn,Ue)}q==null||q(je.date,it,ke)},[Fe,q,e.dir]),un=j.useCallback((je,it)=>ke=>{M==null||M(je.date,it,ke)},[M]),_o=j.useCallback((je,it)=>ke=>{F==null||F(je.date,it,ke)},[F]),Kl=j.useCallback(je=>it=>{const ke=Number(it.target.value),et=l.setMonth(l.startOfMonth(je),ke);N(et)},[l,N]),Ri=j.useCallback(je=>it=>{const ke=Number(it.target.value),et=l.setYear(l.startOfMonth(je),ke);N(et)},[l,N]),{className:Ci,style:Di}=j.useMemo(()=>({className:[d[xe.Root],e.className].filter(Boolean).join(" "),style:{...$==null?void 0:$[xe.Root],...e.style}}),[d,e.className,e.style,$]),er=W6(e),Ii=j.useRef(null);SL(Ii,!!e.animate,{classNames:d,months:ye,focused:Te,dateLib:l});const ki={dayPickerProps:e,selected:ve,select:ue,isSelected:le,months:ye,nextMonth:de,previousMonth:se,goToMonth:N,getModifiers:ne,components:n,classNames:d,styles:$,labels:a,formatters:i};return ge.createElement(dA.Provider,{value:ki},ge.createElement(n.Root,{rootRef:e.animate?Ii:void 0,className:Ci,style:Di,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...er},ge.createElement(n.Months,{className:d[xe.Months],style:$==null?void 0:$[xe.Months]},!e.hideNavigation&&!v&&ge.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:$==null?void 0:$[xe.Nav],"aria-label":we(),onPreviousClick:Wr,onNextClick:Ai,previousMonth:se,nextMonth:de}),ye.map((je,it)=>ge.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[xe.Month],style:$==null?void 0:$[xe.Month],key:it,displayIndex:it,calendarMonth:je},v==="around"&&!e.hideNavigation&&it===0&&ge.createElement(n.PreviousMonthButton,{type:"button",className:d[xe.PreviousMonthButton],tabIndex:se?void 0:-1,"aria-disabled":se?void 0:!0,"aria-label":Le(se),onClick:Wr,"data-animated-button":e.animate?"true":void 0},ge.createElement(n.Chevron,{disabled:se?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"right":"left"})),ge.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[xe.MonthCaption],style:$==null?void 0:$[xe.MonthCaption],calendarMonth:je,displayIndex:it},p!=null&&p.startsWith("dropdown")?ge.createElement(n.DropdownNav,{className:d[xe.Dropdowns],style:$==null?void 0:$[xe.Dropdowns]},p==="dropdown"||p==="dropdown-months"?ge.createElement(n.MonthsDropdown,{className:d[xe.MonthsDropdown],"aria-label":De(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Kl(je.date),options:sL(je.date,k,J,i,l),style:$==null?void 0:$[xe.Dropdown],value:l.getMonth(je.date)}):ge.createElement("span",null,R(je.date,l)),p==="dropdown"||p==="dropdown-years"?ge.createElement(n.YearsDropdown,{className:d[xe.YearsDropdown],"aria-label":Yn(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Ri(je.date),options:lL(k,J,i,l,!!e.reverseYears),style:$==null?void 0:$[xe.Dropdown],value:l.getYear(je.date)}):ge.createElement("span",null,C(je.date,l)),ge.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},re(je.date,l.options,l))):ge.createElement(n.CaptionLabel,{className:d[xe.CaptionLabel],role:"status","aria-live":"polite"},re(je.date,l.options,l))),v==="around"&&!e.hideNavigation&&it===E-1&&ge.createElement(n.NextMonthButton,{type:"button",className:d[xe.NextMonthButton],tabIndex:de?void 0:-1,"aria-disabled":de?void 0:!0,"aria-label":ut(de),onClick:Ai,"data-animated-button":e.animate?"true":void 0},ge.createElement(n.Chevron,{disabled:de?void 0:!0,className:d[xe.Chevron],orientation:e.dir==="rtl"?"left":"right"})),it===E-1&&v==="after"&&!e.hideNavigation&&ge.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[xe.Nav],style:$==null?void 0:$[xe.Nav],"aria-label":we(),onPreviousClick:Wr,onNextClick:Ai,previousMonth:se,nextMonth:de}),ge.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":pe(je.date,l.options,l)||void 0,className:d[xe.MonthGrid],style:$==null?void 0:$[xe.MonthGrid]},!e.hideWeekdays&&ge.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[xe.Weekdays],style:$==null?void 0:$[xe.Weekdays]},te&&ge.createElement(n.WeekNumberHeader,{"aria-label":mr(l.options),className:d[xe.WeekNumberHeader],style:$==null?void 0:$[xe.WeekNumberHeader],scope:"col"},U()),Jn.map(ke=>ge.createElement(n.Weekday,{"aria-label":jt(ke,l.options,l),className:d[xe.Weekday],key:String(ke),style:$==null?void 0:$[xe.Weekday],scope:"col"},B(ke,l.options,l)))),ge.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[xe.Weeks],style:$==null?void 0:$[xe.Weeks]},je.weeks.map(ke=>ge.createElement(n.Week,{className:d[xe.Week],key:ke.weekNumber,style:$==null?void 0:$[xe.Week],week:ke},te&&ge.createElement(n.WeekNumber,{week:ke,style:$==null?void 0:$[xe.WeekNumber],"aria-label":pr(ke.weekNumber,{locale:c}),className:d[xe.WeekNumber],scope:"row",role:"rowheader"},O(ke.weekNumber,l)),ke.days.map(et=>{const{date:cn}=et,Ue=ne(et);if(Ue[kt.focused]=!Ue.hidden&&!!(Te!=null&&Te.isEqualTo(et)),Ue[zr.selected]=(le==null?void 0:le(cn))||Ue.selected,N_(ve)){const{from:gr,to:Es}=ve;Ue[zr.range_start]=!!(gr&&Es&&l.isSameDay(cn,gr)),Ue[zr.range_end]=!!(gr&&Es&&l.isSameDay(cn,Es)),Ue[zr.range_middle]=is(ve,cn,!0,l)}const Ea=aL(Ue,$,e.modifiersStyles),Qr=G6(Ue,d,e.modifiersClassNames),vs=!go&&!Ue.hidden?ln(cn,Ue,l.options,l):void 0;return ge.createElement(n.Day,{key:`${l.format(cn,"yyyy-MM-dd")}_${l.format(et.displayMonth,"yyyy-MM")}`,day:et,modifiers:Ue,className:Qr.join(" "),style:Ea,role:"gridcell","aria-selected":Ue.selected||void 0,"aria-label":vs,"data-day":l.format(cn,"yyyy-MM-dd"),"data-month":et.outside?l.format(cn,"yyyy-MM"):void 0,"data-selected":Ue.selected||void 0,"data-disabled":Ue.disabled||void 0,"data-hidden":Ue.hidden||void 0,"data-outside":et.outside||void 0,"data-focused":Ue.focused||void 0,"data-today":Ue.today||void 0},!Ue.hidden&&go?ge.createElement(n.DayButton,{className:d[xe.DayButton],style:$==null?void 0:$[xe.DayButton],type:"button",day:et,modifiers:Ue,disabled:Ue.disabled||void 0,tabIndex:_t(et)?0:-1,"aria-label":In(cn,Ue,l.options,l),onClick:yo(et,Ue),onBlur:nt(et,Ue),onFocus:xt(et,Ue),onKeyDown:Un(et,Ue),onMouseEnter:un(et,Ue),onMouseLeave:_o(et,Ue)},D(cn,l.options,l)):!Ue.hidden&&D(et.date,l.options,l))})))))))),e.footer&&ge.createElement(n.Footer,{className:d[xe.Footer],style:$==null?void 0:$[xe.Footer],role:"status","aria-live":"polite"},e.footer)))}const HL="/assets/calendar-arrow-BfXL-r2k.png";function GL({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var q;const[a,l]=j.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=j.useState(((q=t==null?void 0:t.start)==null?void 0:q.getFullYear())??new Date().getFullYear()),[p,g]=j.useState(!1),v=j.useMemo(()=>{const M=F=>`${F.getFullYear()}.${String(F.getMonth()+1).padStart(2,"0")}.${String(F.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${M(a.start)} ~ ${M(a.end)}`:a.start?`${M(a.start)} ~`:""},[a]),E=new Date().getMonth(),T=j.useRef(null);j.useEffect(()=>{if(p&&T.current){const M=T.current.querySelectorAll(".month-box")[E];M&&M.scrollIntoView({block:"start"})}},[p]);const I=j.useRef(null);j.useEffect(()=>{const M=F=>{I.current&&!I.current.contains(F.target)&&g(!1)};return p&&document.addEventListener("click",M),()=>{document.removeEventListener("click",M)}},[p]),j.useEffect(()=>{const M=P=>P instanceof Date?new Date(P.getFullYear(),P.getMonth(),P.getDate()).getTime():null,F=(t==null?void 0:t.start)??null,G=(t==null?void 0:t.end)??null;(M(a.start)!==M(F)||M(a.end)!==M(G))&&(l({start:F,end:G}),d((F==null?void 0:F.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const V=M=>{if(!a.start||a.start&&a.end){l({start:M,end:null});return}if(a.start&&!a.end)if(M<a.start)l({start:M,end:null});else{const F={start:a.start,end:M};l(F),e==null||e(F),i&&g(!1)}};return y.jsxs(YL,{ref:I,children:[y.jsx(i3,{}),y.jsx(WL,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(M=>!M)}),p&&y.jsxs(KL,{children:[y.jsxs(XL,{children:[y.jsx(ZL,{dir:"prev",onClick:()=>d(M=>M-1)}),y.jsx("span",{children:c}),y.jsx(JL,{dir:"next",onClick:()=>d(M=>M+1)})]}),y.jsx(e3,{children:["일","월","화","수","목","금","토"].map(M=>y.jsx("span",{children:M},M))}),y.jsx(QL,{children:y.jsx(t3,{ref:T,children:Array.from({length:12}).map((M,F)=>{const G=new Date(c,F,1),P=$=>new Date($.getFullYear(),$.getMonth(),$.getDate()).getTime(),te=$=>$.getFullYear()===G.getFullYear()&&$.getMonth()===G.getMonth();return y.jsxs(n3,{className:"month-box",children:[y.jsx(r3,{children:String(F+1).padStart(2,"0")}),y.jsx(FL,{mode:"single",month:G,selected:void 0,onDayClick:V,showOutsideDays:!1,modifiers:{start:$=>!!a.start&&te($)&&P($)===P(a.start),end:$=>!!a.end&&te($)&&P($)===P(a.end),middle:$=>{if(!a.start||!a.end||!te($))return!1;const re=P($),D=P(a.start),R=P(a.end);return re>D&&re<R}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},F)})})})]})]})}const YL=z.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,WL=z.input`
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
`,QL=z.div`
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
`,KL=z.div`
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
`,XL=z.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,SA=z.button`
  width: 48px;
  height: 100%;
  background-image: url(${HL});
  background-repeat: no-repeat;
`,ZL=z(SA)``,JL=z(SA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,e3=z.div`
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
`,t3=z.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,n3=z.div`
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
`,r3=z.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,i3=E1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,wl="진행 상태 선택",nc="요청자 선택",rc="디자이너 선택",Mg={start:null,end:null},s3=t=>t===3?"manager":t===2?"designer":"requester",a3={requester:[wl,"대기","진행중","검수중","완료","취소"],manager:[wl,"대기","진행중","검수중","검수요청","완료","취소"],designer:[wl,"대기","진행중","검수요청","완료","취소"]},o3=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function l3({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=j.useState(Mg),[v,E]=j.useState(wl),[T,I]=j.useState(nc),[V,q]=j.useState(rc),M=()=>{E(wl),g(Mg),I(nc),q(rc),t(wl),e(Mg),a==null||a(nc),c==null||c(rc)},F=s3(d),G=a3[F];return y.jsxs(u3,{children:[y.jsx(GL,{value:p,onApply:P=>{g(P),e(P)}}),n&&y.jsxs(y.Fragment,{children:[y.jsxs(Ng,{"aria-label":"요청자 선택",value:T,onChange:P=>{I(P.target.value),a==null||a(P.target.value)},children:[y.jsx("option",{value:nc,children:nc}),i.map(P=>y.jsx("option",{value:P,children:P},P))]}),y.jsxs(Ng,{"aria-label":"디자이너 선택",value:V,onChange:P=>{const te=P.target.value;q(te),c==null||c(te)},children:[y.jsx("option",{value:rc,children:rc}),l.map(P=>y.jsx("option",{value:P,children:P},P))]})]}),y.jsx(Ng,{value:v,onChange:P=>{const te=P.target.value,$=o3(F,te);E(te),t($)},children:G.map(P=>y.jsx("option",{value:P,children:P},P))}),y.jsx(c3,{type:"button",onClick:M,children:"필터 초기화"})]})}const u3=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Ng=z.select`
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
  background-image: url(${Xx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,c3=z.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,h3="./assets/search-icon-g0O6fOpZ.svg";function f3({keyword:t,onKeywordChange:e,onSearch:n}){const i=a=>{e(a),n(a.trim())};return y.jsx(d3,{children:y.jsx(p3,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>i(a.target.value),onKeyDown:a=>{a.key==="Escape"&&i("")}})})}const d3=z.div`
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
    background: url(${h3}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`,p3=z.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;function xd({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g,roleNumber:v}){return y.jsxs(m3,{children:[y.jsx(l3,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g,roleNumber:v}),y.jsx(f3,{keyword:i,onKeywordChange:a,onSearch:n})]})}const m3=z.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`,g3=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],y3=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return g3[i]}return e}).join("");function P_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=y3(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function V_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const _3="진행 상태 선택";function v3({view:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const[a,l]=j.useState(""),[c,d]=j.useState(""),[p,g]=j.useState([]),[v,E]=j.useState("진행 상태 선택"),[T,I]=j.useState({start:null,end:null}),[V,q]=j.useState(""),[M,F]=j.useState("");j.useEffect(()=>{const ce=Fc(ma,async ye=>{if(!ye)return;ye.displayName&&l(ye.displayName);const k=jn(ot,"users",ye.uid),J=await Nc(k);if(J.exists()){const se=J.data();d((se==null?void 0:se.company)??"")}else d("")});return()=>ce()},[]),j.useEffect(()=>{if(t==="dashboard"||t==="inworkhour"){g([]);return}if(t==="allrequestlist"&&!c||t==="myrequestlist"&&!a)return;let ce;if(t==="allrequestlist")ce=fr(Gn(ot,"design_request"),Hn("company","==",c),Mc("design_request_id","desc"));else if(t==="myrequestlist")ce=fr(Gn(ot,"design_request"),Hn("requester","==",a),Mc("design_request_id","desc"));else return;const ye=sp(ce,k=>{const J=k.docs.map(se=>({id:se.id,...se.data()}));g(J)});return()=>ye()},[a,c,t]);const G=ce=>I(ce),P=ce=>E(ce),te=ce=>F(ce),$=ce=>ce==="검수요청"?"진행중":ce,re=ce=>new Date(ce.getFullYear(),ce.getMonth(),ce.getDate()),D=ce=>{if(!ce)return null;if(typeof ce=="object"&&typeof ce.toDate=="function")return re(ce.toDate());if(ce instanceof Date)return re(ce);if(typeof ce=="number")return re(new Date(ce));if(typeof ce=="string"){const k=ce.replace(/\./g,"-").replace(/\//g,"-").split("-");if(k.length===3){const[se,de,N]=k.map(Number),ne=se>31?se:new Date().getFullYear();return new Date(ne,de-1,N)}if(k.length===2){const[se,de]=k.map(Number),N=new Date().getFullYear();return new Date(N,se-1,de)}const J=new Date(ce);return isNaN(+J)?null:re(J)}return null},R=j.useMemo(()=>p.map(ce=>{const ye=$(ce.status);return P_({...ce,displayStatus:ye})}),[p]),O=j.useMemo(()=>{const ce=T.start?re(T.start):null,ye=T.end?re(T.end):null,k=M.trim();return R.filter(J=>{if(v!==_3&&J.displayStatus!==v)return!1;if(ce&&ye){const se=D(J.request_date)||D(J.requested_at)||D(J.requestDate);if(!se||se<ce||se>ye)return!1}return!!V_(J,k)})},[R,v,T,M]),U=async ce=>{await mi(jn(ot,"design_request",ce),{status:"완료",requester_review_status:"검수완료"}),g(ye=>ye.map(k=>k.id===ce?{...k,status:"완료",requester_review_status:"검수완료"}:k)),alert("완료 처리되었습니다.")},B=async ce=>{const ye=jn(ot,"design_request",ce);await mi(ye,{requester_edit_state:!0});const k=await Nc(ye);if(k.exists()){const J={id:k.id,...k.data()};n(J),e(!0)}},C=ce=>{i(ce),e(!0)},x=async ce=>{await mi(jn(ot,"design_request",ce),{status:"취소"}),g(ye=>ye.map(k=>k.id===ce?{...k,status:"취소"}:k))};return y.jsxs(y.Fragment,{children:[y.jsx(O_,{}),t==="dashboard"&&y.jsx(Pg,{children:y.jsxs(E3,{children:[y.jsx("h4",{children:"대시보드"}),y.jsxs("ul",{children:[y.jsxs("li",{children:["대기: ",R.filter(ce=>ce.status==="대기"||ce.status==="대기중").length]}),y.jsxs("li",{children:["진행중: ",R.filter(ce=>ce.status==="진행중"||ce.requester_review_status==="검수요청").length]}),y.jsxs("li",{children:["완료: ",R.filter(ce=>ce.status==="완료").length]}),y.jsxs("li",{children:["취소: ",R.filter(ce=>ce.status==="취소").length]})]})]})}),t==="allrequestlist"&&y.jsxs(Pg,{children:[y.jsx(xd,{roleNumber:3,onApplyStatus:P,onApplyRange:G,onSearch:te,keyword:V,onKeywordChange:q}),y.jsx(Zw,{data:O,onReviewComplete:U,onCancel:x,onEditClick:B,onDetailClick:C})]}),t==="myrequestlist"&&y.jsxs(Pg,{children:[y.jsx(xd,{roleNumber:1,onApplyStatus:P,onApplyRange:G,onSearch:te,keyword:V,onKeywordChange:q}),y.jsx(Zw,{data:O,onReviewComplete:U,onCancel:x,onEditClick:B,onDetailClick:C})]})]})}const Pg=z.div`
  padding: 0 48px;
`,E3=z.div`
  padding: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.gray04};
  h4 { margin: 0 0 8px 0; }
  ul { margin: 0; padding-left: 16px; }
`;function b3({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=E=>{if(!E)return"-";if(E.toDate){const T=E.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return E},d=E=>E==="검수중"?"검수요청":E??"대기",p=E=>E,g=d(n.status),v=E=>{E.stopPropagation(),l(e)};return y.jsxs(w3,{isCanceled:e.status==="취소",children:[y.jsx(Ur,{children:t}),y.jsx(Ur,{children:y.jsx(C3,{onClick:v,$hasUpdate:!!e.updated_date,children:e.design_request_id})}),y.jsx(Ur,{children:e.company}),y.jsx(Ur,{children:c(e.request_date)}),y.jsx(T3,{children:c(e.completion_date)}),y.jsx(S3,{children:c(e.open_date)}),y.jsx(Ur,{children:e.merchandiser}),y.jsx(Ur,{children:e.requester}),y.jsx(Ur,{children:e.task_form}),y.jsx(x3,{children:y.jsxs(D3,{children:[y.jsx(I3,{children:e.task_type}),y.jsx(k3,{children:e.task_type_detail})]})}),y.jsx(A3,{children:y.jsxs(O3,{children:[e.emergency?y.jsx(xA,{children:"긴급"}):"",y.jsx(M3,{onClick:v,children:e.requirement})]})}),y.jsx(Ur,{children:y.jsx(N3,{href:e.url,target:"_blank"})}),y.jsx(R3,{children:y.jsx(P3,{onClick:v,children:e.note||""})}),y.jsx(hT,{children:y.jsx(fT,{type:"date",value:n.start_dt??"",onChange:E=>i(e.id,"start_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),y.jsx(hT,{children:y.jsx(fT,{type:"date",value:n.end_dt??"",onChange:E=>i(e.id,"end_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),y.jsx(Ur,{children:y.jsx(V3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:E=>i(e.id,"result_url",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),y.jsx(Ur,{children:y.jsxs("select",{value:g,onChange:E=>i(e.id,"status",p(E.target.value)),disabled:e.status==="취소"||e.status==="완료",children:[y.jsx("option",{value:"대기",children:"대기"}),y.jsx("option",{value:"진행중",children:"진행중"}),y.jsx("option",{value:"검수요청",children:"검수요청"}),y.jsx("option",{value:"완료",children:"완료"}),y.jsx("option",{value:"취소",children:"취소"})]})}),y.jsx(Ur,{children:y.jsx(AA,{onClick:()=>a(e.id),disabled:e.status==="취소"||e.status==="완료",children:"저장"})})]})}const w3=z.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${xA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${AA} {
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
`,Ur=z.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }
`,T3=z.td`
  color: ${({theme:t})=>t.colors.red};
`,S3=z.td`
  color: ${({theme:t})=>t.colors.blue02};
`,x3=z.td`
  padding: 15px 12px;
  line-height: 15px;
`,A3=z.td`
  line-height: 15px;
  text-align: left;
`,R3=z.td`
  line-height: 15px;
  padding: 0 12px;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
  text-align: left;
  background-color: #fffff1;

`,hT=z.td`
  padding: 0 6px;
`,C3=z.span`
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
`,D3=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,I3=z.span`
  
`,k3=z.span`
  
`,O3=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,xA=z.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,M3=z.span`
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
`,N3=z.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${k_}) no-repeat center / contain;
`,P3=z.span`
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
`,fT=z.input.attrs({type:"date"})`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,V3=z.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,AA=z.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function j3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return y.jsx(L3,{children:y.jsxs(U3,{children:[y.jsxs("colgroup",{children:[y.jsx("col",{style:{width:"40px"}}),y.jsx("col",{style:{width:"85px"}}),y.jsx("col",{style:{width:"80px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"80px"}}),y.jsx("col",{style:{width:"120px"}}),y.jsx("col",{}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"140px"}}),y.jsx("col",{style:{width:"120px"}}),y.jsx("col",{style:{width:"120px"}}),y.jsx("col",{}),y.jsx("col",{style:{width:"100px"}}),y.jsx("col",{style:{width:"80px"}})]}),y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx(gn,{children:"번호"}),y.jsx(gn,{children:"문서번호"}),y.jsx(gn,{children:"회사"}),y.jsx(gn,{children:"요청일"}),y.jsxs(gn,{children:["완료",y.jsx("br",{}),"요청일"]}),y.jsx(gn,{children:"오픈일"}),y.jsx(gn,{children:"담당 MD"}),y.jsx(gn,{children:"요청자"}),y.jsx(gn,{children:"업무부서"}),y.jsx(gn,{children:"업무유형"}),y.jsx(gn,{children:"작업항목"}),y.jsxs(gn,{children:["요청서",y.jsx("br",{}),"URL"]}),y.jsx(gn,{children:"메모"}),y.jsx(gn,{children:"디자인 시작일"}),y.jsx(gn,{children:"디자인 종료일"}),y.jsx(gn,{children:"산출물 링크"}),y.jsx(gn,{children:"진행상태"}),y.jsx(gn,{children:"저장"})]})}),y.jsx("tbody",{children:t.length>0?t.map((l,c)=>y.jsx(b3,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):y.jsx("tr",{children:y.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const L3=z.div`
  max-height: 535px;
  overflow-y: auto;
  scrollbar-width: thin;
`,U3=z.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,gn=z.th`
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
`,q3="진행 상태 선택";function B3({view:t,setIsDrawerOpen:e,setDetailData:n}){const[i,a]=j.useState([]),[l,c]=j.useState(""),[d,p]=j.useState({}),[g,v]=j.useState("진행 상태 선택"),[E,T]=j.useState({start:null,end:null}),[I,V]=j.useState(""),[q,M]=j.useState("");j.useEffect(()=>{const k=Fc(ma,J=>{J!=null&&J.displayName&&c(J.displayName)});return()=>k()},[]),j.useEffect(()=>{if(!l)return;if(t==="dashboard"||t==="inworkhour"){a([]);return}const k=t==="allrequestlist"?fr(Gn(ot,"design_request"),Mc("design_request_id","desc")):fr(Gn(ot,"design_request"),Hn("assigned_designer","==",l),Mc("design_request_id","desc")),J=sp(k,se=>{const de=se.docs.map(N=>({id:N.id,...N.data()}));a(de)});return()=>J()},[l,t]);const F=k=>T(k),G=k=>v(k),P=k=>new Date(k.getFullYear(),k.getMonth(),k.getDate()),te=k=>{if(!k)return null;if(typeof k=="object"&&typeof k.toDate=="function")return P(k.toDate());if(k instanceof Date)return P(k);if(typeof k=="number")return P(new Date(k));if(typeof k=="string"){const se=k.replace(/\./g,"-").replace(/\//g,"-").split("-");if(se.length===3){const[N,ne,le]=se.map(Number),ue=N>31?N:new Date().getFullYear();return new Date(ue,ne-1,le)}if(se.length===2){const[N,ne]=se.map(Number),le=new Date().getFullYear();return new Date(le,N-1,ne)}const de=new Date(k);return isNaN(+de)?null:P(de)}return null},$=k=>{const J=k.getFullYear(),se=String(k.getMonth()+1).padStart(2,"0"),de=String(k.getDate()).padStart(2,"0");return`${J}-${se}-${de}`},re=k=>{if(!k)return"";if(typeof k=="object"&&typeof k.toDate=="function")return $(k.toDate());if(k instanceof Date)return $(k);const J=new Date(k);return isNaN(+J)?"":$(J)},D=j.useMemo(()=>i.map(k=>({...k,designer_start_date:re(k.designer_start_date),designer_end_date:re(k.designer_end_date),result_url:k.result_url??"",status:k.status??"대기"})),[i]),R=k=>k==="검수중"?"검수요청":k??"대기",O=j.useMemo(()=>D.map(k=>{const J=R(k.status);return P_({...k,displayStatus:J})}),[D]),U=j.useMemo(()=>{const k=E.start?P(E.start):null,J=E.end?P(E.end):null;return O.filter(se=>{let de=!0;if(g&&g!==q3&&R(se.status)!==g&&(de=!1),de&&k&&J){const N=te(se.request_date)||te(se.requested_at)||te(se.requestDate);(!N||N<k||N>J)&&(de=!1)}return de&&q&&!V_(se,q)&&(de=!1),de})},[O,g,E,q]),B=k=>M(k);j.useEffect(()=>{i.length&&p(k=>{const J={...k};return i.forEach(se=>{J[se.id]===void 0&&(J[se.id]={start_dt:re(se.designer_start_date),end_dt:re(se.designer_end_date),result_url:se.result_url||"",status:se.status||"대기"})}),J})},[i]);const C=(k,J,se)=>{p(de=>({...de,[k]:{...de[k],[J]:se}}))},x=k=>{if(!k)return null;const J=new Date(k);return isNaN(+J)?null:Et.fromDate(J)},ce=async k=>{const J=d[k];if(!J){alert("변경된 내용이 없습니다.");return}await mi(jn(ot,"design_request",k),{designer_start_date:x(J.start_dt),designer_end_date:x(J.end_dt),result_url:J.result_url??"",status:J.status??"대기"}),alert("저장되었습니다.")},ye=k=>{n(k),e(!0)};return y.jsxs(z3,{children:[y.jsx(O_,{}),t==="dashboard"&&y.jsx(F3,{children:y.jsxs(H3,{children:[y.jsx("h4",{children:"대시보드"}),y.jsxs("ul",{children:[y.jsxs("li",{children:["대기: ",D.filter(k=>(k.status??"대기")==="대기").length]}),y.jsxs("li",{children:["진행중: ",D.filter(k=>{const J=k.status??"대기";return J==="진행중"||J==="검수요청"||J==="검수중"}).length]}),y.jsxs("li",{children:["완료: ",D.filter(k=>k.status==="완료").length]}),y.jsxs("li",{children:["취소: ",D.filter(k=>k.status==="취소").length]})]})]})}),t==="myrequestlist"&&y.jsxs($3,{children:[y.jsx(G3,{children:"디자이너 화면"}),y.jsx(xd,{roleNumber:2,onApplyStatus:G,onApplyRange:F,onSearch:B,keyword:I,onKeywordChange:V}),y.jsx(j3,{requests:U,formData:d,onChange:C,onSave:ce,onDetailClick:ye})]})]})}const z3=z.div``,$3=z.div`
  padding: 0 48px;
`,F3=z.div`
  
`,H3=z.div`
  padding: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.gray04};
  h4 { margin: 0 0 8px 0; }
  ul { margin: 0; padding-left: 16px; }
`,G3=z.h2`
  margin-top: 20px;
`;function Y3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d,workHourValue:p,onChangeWorkHour:g,onSaveWorkHour:v,onStartEditWorkHour:E,onCancelEditWorkHour:T}){const V=(P=>P==="검수요청"?"검수중":P==="검수중"?"검수요청":P)(e.status),q=P=>{if(!P)return"-";if(P.toDate){const te=P.toDate();return`${te.getMonth()+1}/${te.getDate()}`}return P},M=P=>{P.stopPropagation(),d(e)},F=!!e.work_hour_edit_state,G=j.useCallback(P=>{const te=P.relatedTarget;(!te||!P.currentTarget.contains(te))&&T()},[T]);return y.jsxs(W3,{isCanceled:e.status==="취소",children:[y.jsx(Fn,{children:t}),y.jsx(Fn,{children:y.jsx(eU,{onClick:M,$hasUpdate:!!e.updated_date,children:e.design_request_id})}),y.jsx(Fn,{children:e.company}),y.jsx(Fn,{children:q(e.request_date)}),y.jsx(Q3,{children:q(e.completion_date)}),y.jsx(K3,{children:q(e.open_date)}),y.jsx(Fn,{children:e.merchandiser}),y.jsx(Fn,{children:e.requester}),y.jsx(Fn,{children:e.task_form}),y.jsx(X3,{children:y.jsxs(tU,{children:[y.jsx(nU,{children:e.task_type}),y.jsx(rU,{children:e.task_type_detail})]})}),y.jsx(Z3,{children:y.jsxs(iU,{children:[e.emergency?y.jsx(RA,{children:"긴급"}):"",y.jsx(sU,{onClick:M,children:e.requirement})]})}),y.jsx(Fn,{children:y.jsx(dT,{href:e.url,target:"_blank"})}),y.jsx(J3,{children:y.jsx(aU,{onClick:M,children:e.note||""})}),y.jsx(Fn,{children:y.jsx(oU,{status:V,children:V})}),y.jsx(Fn,{children:e.result_url?y.jsx(dT,{href:e.result_url,target:"_blank"}):""}),y.jsx(Fn,{children:q(e.designer_start_date)}),y.jsx(Fn,{children:q(e.designer_end_date)}),y.jsxs(Fn,{children:[y.jsxs(lU,{value:i,onChange:P=>a(P.target.value),disabled:e.status==="취소"||e.status==="완료",children:[y.jsx("option",{value:"",children:"디자이너 선택"}),n.map(P=>y.jsx("option",{value:P.name,children:P.name},P.id))]}),y.jsx(CA,{onClick:l,disabled:e.status==="취소"||e.status==="완료",children:"배정"})]}),y.jsx(Fn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?y.jsx(DA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?y.jsx(uU,{children:"검수완료"}):""}),y.jsx(Fn,{children:F?y.jsxs(dU,{tabIndex:-1,onBlur:G,children:[y.jsx(cU,{type:"text",placeholder:"공수 입력",value:p,onChange:P=>g(P.target.value),onClick:P=>P.stopPropagation(),disabled:e.status==="취소",autoFocus:!0}),y.jsx(hU,{type:"button",onClick:P=>{P.stopPropagation(),v()},disabled:e.status==="취소",children:"수정"})]}):e.out_work_hour!=null?y.jsx(fU,{tabIndex:0,onClick:P=>{P.stopPropagation(),E()},onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),E())},children:e.out_work_hour}):null})]})}const W3=z.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${RA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${DA}, ${CA} {
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
`,Fn=z.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(14) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,Q3=z.td`
  color: ${({theme:t})=>t.colors.red};
`,K3=z.td`
  color: ${({theme:t})=>t.colors.blue02};
`,X3=z.td`
  padding: 15px 12px;
  line-height: 15px;
`,Z3=z.td`
  line-height: 15px;
  text-align: left;
`,J3=z.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,eU=z.span`
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
`,tU=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,nU=z.span`
  white-space: nowrap;
`,rU=z.span``,iU=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,RA=z.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,sU=z.span`
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
`,dT=z.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${k_}) no-repeat center / contain;
`,aU=z.span`
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
`,oU=z.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,CA=z.button`
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
`,lU=z.select`
  width: 90px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,DA=z.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,uU=z.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,cU=z.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`,hU=z.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,fU=z.span`
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
`,dU=z.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function pU({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c,workHours:d,onChangeWorkHour:p,onSaveWorkHour:g,onStartEditWorkHour:v,onCancelEditWorkHour:E}){return y.jsx(mU,{children:y.jsxs(gU,{children:[y.jsx(yU,{children:"매니저 요청 리스트"}),y.jsxs("colgroup",{children:[y.jsx("col",{style:{width:"40px"}}),y.jsx("col",{style:{width:"85px"}}),y.jsx("col",{style:{width:"80px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"100px"}}),y.jsx("col",{style:{width:"120px"}}),y.jsx("col",{}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"140px"}}),y.jsx("col",{style:{width:"85px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"50px"}}),y.jsx("col",{style:{width:"160px"}}),y.jsx("col",{style:{width:"80px"}}),y.jsx("col",{style:{width:"110px"}})]}),y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx(Gt,{children:"번호"}),y.jsx(Gt,{children:"문서번호"}),y.jsx(Gt,{children:"회사"}),y.jsx(Gt,{children:"요청일"}),y.jsxs(Gt,{children:["완료",y.jsx("br",{}),"요청일"]}),y.jsx(Gt,{children:"오픈일"}),y.jsx(Gt,{children:"담당 MD"}),y.jsx(Gt,{children:"요청자"}),y.jsx(Gt,{children:"업무부서"}),y.jsx(Gt,{children:"업무형태"}),y.jsx(Gt,{children:"작업항목"}),y.jsxs(Gt,{children:["요청서",y.jsx("br",{}),"URL"]}),y.jsx(Gt,{children:"메모"}),y.jsx(Gt,{children:"진행상태"}),y.jsxs(Gt,{children:["산출물",y.jsx("br",{}),"URL"]}),y.jsxs(Gt,{children:["디자인",y.jsx("br",{}),"시작일"]}),y.jsxs(Gt,{children:["디자인",y.jsx("br",{}),"종료일"]}),y.jsx(Gt,{children:"디자이너 배정"}),y.jsx(Gt,{children:"검수"}),y.jsx(Gt,{children:"공수"})]})}),y.jsx("tbody",{children:t.length>0?t.map((T,I)=>y.jsx(Y3,{index:I+1,item:T,designerList:e,selectedDesigner:n[T.id]||"",onDesignerSelect:V=>i(T.id,V),onAssignDesigner:()=>a(T.id),onSendToRequester:()=>l(T.id),onDetailClick:c,workHourValue:d[T.id]??"",onChangeWorkHour:V=>p(T.id,V),onSaveWorkHour:()=>g(T.id),onStartEditWorkHour:()=>v(T.id),onCancelEditWorkHour:()=>E(T.id)},T.id)):y.jsx("tr",{children:y.jsx("td",{colSpan:20,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const mU=z.div`
  max-height: 535px;
  overflow-y: auto;
  scrollbar-width: thin;
`,gU=z.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,yU=z.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Gt=z.th`
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
`,pT=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];function _U({dailyHours:t=8,rows:e,demo:n=!1}){const i=j.useMemo(()=>Array.from({length:4},()=>({name:"김아름",wait:2,progress:1,done:4,usedHours:4,monthly:pT.map(()=>({rate:80,count:123}))})),[]),a=e&&e.length>0?e:n?i:[],l=j.useMemo(()=>a.map((c,d)=>{const p=c.monthly.length?c.monthly.reduce((v,E)=>v+E.rate,0)/c.monthly.length:0,g=c.monthly.reduce((v,E)=>v+E.count,0);return{index:d+1,avgRate:p,totalCount:g}}),[a]);return a.length===0?y.jsx(EU,{children:"표시할 데이터가 없습니다."}):y.jsx(vU,{children:y.jsxs(bU,{children:[y.jsxs("thead",{children:[y.jsxs("tr",{children:[y.jsx(hi,{rowSpan:2,width:56,children:"no"}),y.jsx(hi,{rowSpan:2,width:140,children:"디자이너명"}),y.jsxs(hi,{colSpan:4,children:["현재현황(일공수 : ",t,"h)"]}),y.jsx(hi,{colSpan:12,children:"월별 진행현황(공수달성율 / 제작건수)"}),y.jsx(hi,{rowSpan:2,width:110,children:"연평균"})]}),y.jsxs("tr",{children:[y.jsx(hi,{width:70,children:"대기"}),y.jsx(hi,{width:80,children:"진행중"}),y.jsx(hi,{width:70,children:"완료"}),y.jsx(hi,{width:110,children:"사용공수(h)"}),pT.map(c=>y.jsx(hi,{width:90,children:c},c))]})]}),y.jsx("tbody",{children:a.map((c,d)=>{const{index:p,avgRate:g,totalCount:v}=l[d];return y.jsxs("tr",{children:[y.jsx(ul,{children:p}),y.jsx(ul,{children:c.name}),y.jsx(ul,{children:c.wait}),y.jsx(ul,{children:c.progress}),y.jsx(ul,{children:c.done}),y.jsx(ul,{children:c.usedHours}),c.monthly.map((E,T)=>y.jsxs(mT,{children:[y.jsxs("div",{children:[E.rate,"%"]}),y.jsx("div",{children:E.count})]},T)),y.jsxs(mT,{children:[y.jsxs("div",{children:[g.toFixed(0),"%"]}),y.jsx("div",{children:v})]})]},c.name+d)})})]})})}const vU=z.div`
  width: 100%;
  overflow: auto;
`,EU=z.div`
  padding: 24px;
  text-align: center;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
`,bU=z.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;

  thead th {
    background: #f5f5f5;
    font-weight: 700;
  }

  th, td {
    border: 1px solid #111; /* 스샷처럼 진한 보더 */
    padding: 8px 10px;
    font-size: 14px;
  }
`,hi=z.th`
  text-align: center;
  ${({width:t})=>t?`width:${t}px;`:""}
`,ul=z.td`
  text-align: center;
`,mT=z.td`
  text-align: center;
  line-height: 1.1;
  & > div:first-child { font-weight: 700; } /* 위 줄: 퍼센트 */
`;function wU({onClick:t,loading:e,label:n="Export CSV"}){return y.jsx(TU,{type:"button",onClick:t,disabled:!!e,children:e?"추출 중…":n})}const TU=z.button`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.colors.black};
  background: ${({theme:t})=>t.colors.white01};
  font-size: 14px;
  &:disabled { opacity: 0.5; pointer-events: none; }
`,gT=t=>{if(t==null)return"";const e=String(t).replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e},SU=(t,e)=>e.split(".").reduce((n,i)=>n?n[i]:void 0,t),Mf=t=>t<10?`0${t}`:`${t}`,xU=t=>{if(t==null)return"";if(typeof t=="object"&&typeof t.toDate=="function"){const e=t.toDate();return`${e.getFullYear()}-${Mf(e.getMonth()+1)}-${Mf(e.getDate())}`}return t instanceof Date?`${t.getFullYear()}-${Mf(t.getMonth()+1)}-${Mf(t.getDate())}`:String(t)};function AU(t){const{rows:e,fields:n,filename:i="export.csv",headers:a,serialize:l=xU}=t,c=n.map(E=>gT((a==null?void 0:a[E])??E)).join(","),d=e.map(E=>{const T={id:E.id,...E};return n.map(V=>gT(l(SU(T,V)))).join(",")}),p="\uFEFF"+[c,...d].join(`\r
`),g=new Blob([p],{type:"text/csv;charset=utf-8"}),v=document.createElement("a");v.href=URL.createObjectURL(g),v.download=i,v.click(),URL.revokeObjectURL(v.href)}const yT="진행 상태 선택",_T="요청자 선택",vT="디자이너 선택";function RU({view:t,setIsDrawerOpen:e,setDetailData:n}){const[i,a]=j.useState([]),[l,c]=j.useState([]),[d,p]=j.useState({}),[g,v]=j.useState({}),[E,T]=j.useState(yT),[I,V]=j.useState({start:null,end:null}),[q,M]=j.useState(""),[F,G]=j.useState(""),[P,te]=j.useState([]),[$,re]=j.useState(_T),[D,R]=j.useState([]),[O,U]=j.useState(vT),[B,C]=j.useState(!1);j.useEffect(()=>{if(t==="dashboard"||t==="inworkhour"){a([]);return}const pe=fr(Gn(ot,"design_request"),Mc("design_request_id","desc")),De=sp(pe,we=>{const Le=we.docs.map(ut=>({id:ut.id,...ut.data()}));a(Le)});return()=>De()},[t]),j.useEffect(()=>{i.length&&p(pe=>{const De={...pe};return i.forEach(we=>{De[we.id]===void 0&&(De[we.id]=we.assigned_designer??"")}),De})},[i]),j.useEffect(()=>{i.length&&v(pe=>{const De={...pe};return i.forEach(we=>{De[we.id]===void 0&&(De[we.id]=we.out_work_hour!=null?String(we.out_work_hour):"")}),De})},[i]),j.useEffect(()=>{(async()=>{const De=fr(Gn(ot,"users"),Hn("role","==",2)),Le=(await bl(De)).docs.map(ut=>({id:ut.id,...ut.data()}));c(Le),R(Le.map(ut=>ut.name).filter(Boolean))})()},[]);const x=(pe,De)=>{p(we=>({...we,[pe]:De}))},ce=async pe=>{const De=d[pe];if(!De){alert("디자이너를 선택하세요.");return}const we=jn(ot,"design_request",pe);await mi(we,{assigned_designer:De}),alert("디자이너가 배정되었습니다!"),a(Le=>Le.map(ut=>ut.id===pe?{...ut,assigned_designer:De}:ut))},ye=async pe=>{await mi(jn(ot,"design_request",pe),{manager_review_status:"검수완료",status:"검수중"}),a(De=>De.map(we=>we.id===pe?{...we,manager_review_status:"검수완료",status:"검수중"}:we)),alert("요청자에게 전달되었습니다.")};j.useEffect(()=>{(async()=>{const pe=fr(Gn(ot,"users"),Hn("role","==",1)),we=(await bl(pe)).docs.map(Le=>Le.data().name).filter(Boolean);te(we)})()},[]);const k=pe=>{n(pe),e(!0)},J=pe=>V(pe),se=pe=>T(pe),de=pe=>G(pe.trim()),N=pe=>re(pe),ne=pe=>U(pe),le=pe=>new Date(pe.getFullYear(),pe.getMonth(),pe.getDate()),ue=pe=>{if(!pe)return null;if(typeof pe=="object"&&typeof pe.toDate=="function")return le(pe.toDate());if(pe instanceof Date)return le(pe);if(typeof pe=="number")return le(new Date(pe));if(typeof pe=="string"){const we=pe.replace(/\./g,"-").replace(/\//g,"-").split("-");if(we.length===3){const[ut,jt,pr]=we.map(Number),mr=ut>31?ut:new Date().getFullYear();return new Date(mr,jt-1,pr)}if(we.length===2){const[ut,jt]=we.map(Number),pr=new Date().getFullYear();return new Date(pr,ut-1,jt)}const Le=new Date(pe);return isNaN(+Le)?null:le(Le)}return null},ve=pe=>pe==="검수요청"?"검수중":pe==="검수중"?"검수요청":pe??"대기",Ae=j.useMemo(()=>i.map(pe=>{const De=ve(pe.status);return P_({...pe,displayStatus:De})}),[i]),Te=j.useMemo(()=>{const pe=I.start?le(I.start):null,De=I.end?le(I.end):null;return Ae.filter(we=>{let Le=!0;if(E!==yT&&we.status!==E&&(Le=!1),Le&&$!==_T&&we.requester!==$&&(Le=!1),Le&&O!==vT&&we.assigned_designer!==O&&(Le=!1),Le&&pe&&De){const ut=ue(we.request_date)||ue(we.requested_at)||ue(we.requestDate);(!ut||ut<pe||ut>De)&&(Le=!1)}return Le&&F&&!V_(we,F)&&(Le=!1),Le})},[Ae,E,$,O,I,F]),_t=(pe,De)=>{const we=De.replace(/[^0-9.]/g,"");v(Le=>({...Le,[pe]:we}))},Fe=async pe=>{const De=i.find(we=>we.id===pe);await mi(jn(ot,"design_request",pe),{work_hour_edit_state:!0}),a(we=>we.map(Le=>Le.id===pe?{...Le,work_hour_edit_state:!0}:Le)),v(we=>({...we,[pe]:we[pe]!==void 0&&we[pe]!==""?we[pe]:(De==null?void 0:De.out_work_hour)!=null?String(De.out_work_hour):""}))},Tt=async pe=>{const De=i.find(Yn=>Yn.id===pe);if(!De)return;const we=(g[pe]??"").trim(),Le=Number(we.replace(",","."));if(!Number.isFinite(Le)||Le<0){alert("유효한 공수를 입력하세요.");return}const ut=fr(Gn(ot,"task_work_hour"),Hn("task_form","==",De.task_form),Hn("task_type","==",De.task_type)),jt=await bl(ut);let pr=1;if(!jt.empty){const Yn=jt.docs[0].data();pr=Number(Yn.task_work_times)||1}const mr=Number((Le*pr).toFixed(2));await mi(jn(ot,"design_request",pe),{out_work_hour:Le,in_work_hour:mr,work_hour_edit_state:!1}),a(Yn=>Yn.map(Jn=>Jn.id===pe?{...Jn,out_work_hour:Le,in_work_hour:mr,work_hour_edit_state:!1}:Jn)),alert("공수 수정 완료")},In=async()=>{C(!0);try{AU({rows:Te,fields:["id","design_request_id","request_date","requester","task_form","task_type","requirement","status","assigned_designer","designer_start_date","designer_end_date","out_work_hour","in_work_hour"],headers:{id:"문서ID",design_request_id:"문서번호",request_date:"요청일",requester:"요청자",task_form:"업무형태",task_type:"업무타입",requirement:"작업항목",status:"진행상태",assigned_designer:"디자이너",designer_start_date:"디자인 시작일",designer_end_date:"디자인 종료일",out_work_hour:"공수(외부)",in_work_hour:"공수(내부)"},filename:"design_request_current_view.csv"})}finally{C(!1)}},ln=async pe=>{await mi(jn(ot,"design_request",pe),{work_hour_edit_state:!1}),a(De=>De.map(we=>we.id===pe?{...we,work_hour_edit_state:!1}:we))};return y.jsxs(CU,{children:[y.jsx(O_,{}),t==="dashboard"&&y.jsx(IU,{children:y.jsxs(kU,{children:[y.jsx("h4",{children:"대시보드"}),y.jsxs("ul",{children:[y.jsxs("li",{children:["대기: ",Ae.filter(pe=>pe.status==="대기"||pe.status==="대기중").length]}),y.jsxs("li",{children:["진행중: ",Ae.filter(pe=>pe.status==="진행중"||pe.requester_review_status==="검수요청").length]}),y.jsxs("li",{children:["완료: ",Ae.filter(pe=>pe.status==="완료").length]}),y.jsxs("li",{children:["취소: ",Ae.filter(pe=>pe.status==="취소").length]})]})]})}),t==="myrequestlist"&&y.jsxs(DU,{children:[y.jsx(OU,{children:"매니저 요청리스트"}),y.jsx(xd,{roleNumber:3,onApplyStatus:se,onApplyRange:J,onSearch:de,keyword:q,onKeywordChange:M,isManager:!0,requesterOptions:P,onApplyRequester:N,designerOptions:D,onApplyDesigner:ne}),y.jsx(wU,{onClick:In,loading:B}),y.jsx(pU,{data:Te,designerList:l,selectedDesigners:d,designerSelect:x,assignDesigner:ce,sendToRequester:ye,onDetailClick:k,workHours:g,onChangeWorkHour:_t,onSaveWorkHour:Tt,onStartEditWorkHour:Fe,onCancelEditWorkHour:ln})]}),t==="inworkhour"&&y.jsx(_U,{})]})}const CU=z.div``,DU=z.div`
  padding: 0 48px;
`,IU=z.div`
  
`,kU=z.div`
  padding: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 8px;
  background: ${({theme:t})=>t.colors.gray04};
  h4 { margin: 0 0 8px 0; }
  ul { margin: 0; padding-left: 16px; }
`,OU=z.h2`
  margin-top: 20px;
`;function MU({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const[a,l]=YT(),c=a.get("view")||"dashboard";j.useEffect(()=>{a.get("view")||l(p=>{const g=new URLSearchParams(p);return g.set("view","dashboard"),g},{replace:!0})},[]);const d=()=>{if(t===1)return y.jsx(v3,{view:c,setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return y.jsx(B3,{view:c,setIsDrawerOpen:e,setDetailData:i});if(t===3)return y.jsx(RU,{view:c,setIsDrawerOpen:e,setDetailData:i})};return y.jsx(NU,{children:d()})}const NU=z.main``,PU="./assets/aside-logo-DoEwMgfJ.svg",VU="./assets/myrequest-icon-DhmqrZY6.svg";function jU({item:t}){return y.jsxs(qU,{status:t.status,children:[y.jsx(BU,{children:t.status}),y.jsx(zU,{status:t.status,children:t.count})]})}const LU=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},UU=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},qU=z.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>LU(t,e)};
`,BU=z.span`
  font-size: 16px;
  font-weight: 500;
`,zU=z.span`
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
    background-color: ${({status:t,theme:e})=>UU(t,e)};
  }
`,Ct={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},$U=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG,Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 2:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ,Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 3:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수중",count:n([Ct.REQ])},{status:"검수요청",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];default:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}]}},FU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function HU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=$U(e,t);return y.jsxs(GU,{children:[y.jsxs(YU,{children:[y.jsx(WU,{src:PU}),y.jsx(QU,{children:"업무 관리시스템"})]}),e===1&&y.jsx(KU,{children:y.jsx(XU,{onClick:i,children:"디자인 요청 등록"})}),y.jsxs(ZU,{children:[y.jsxs(JU,{children:[y.jsx(e9,{src:VU}),y.jsx(t9,{children:FU(e,n)})]}),y.jsx(n9,{children:a.map(l=>y.jsx(jU,{item:l},l.status))})]})]})}const GU=z.aside`
  width: 240px;
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,YU=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 18.5px 0;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,WU=z.img`
  margin-right: 8px;
`,QU=z.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,KU=z.div`
  text-align: center;
  padding: 32px 0;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,XU=z.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,ZU=z.div`
  padding: 0 24px;
`,JU=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,e9=z.img``,t9=z.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,n9=z.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function r9({isOpen:t,onClose:e,children:n}){return y.jsxs(y.Fragment,{children:[y.jsx(i9,{isVisible:t,onClick:e}),y.jsx(s9,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const i9=z.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,s9=z.div`
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
`,IA="./assets/requestformexit-button-BcAG546a.svg",a9="./assets/checkbox-checked-eOVFoR8b.svg",Nf={completion_date:"",open_date:"",merchandiser:"",task_form:"",task_type:"",task_type_detail:"",requirement:"",url:"",note:"",emergency:!1},ET=["GHS","MHC","MHC/GHS"],bT=["프론트테마","별도기획전","일자별배너","핫새배너","큐레이션배너","GNB-기획전(전문관)","GNB-주류이지픽업","GNB-택배배송관","페이/카드프로모션","이벤트배너","상품상세","제휴","클럽","팝업","푸시","홈테마","즉시배송","트레이딩","이벤트","기타"],wT=["M영업기획팀","디지털마케팅팀","M상품1팀","M상품2팀","M상품3팀","TV영업기획팀","TC영업기획팀","미디어컨텐츠팀","전략기획팀","MC서비스기획팀"],o9=["프로모션","배너(프로모션,연관)","배너(마케팅)","배너(상품)","배너(etv/etcom)","배너(엔라방)","썸네일(그룹)"],l9={프로모션:["마케팅","마케팅-FULL","마케팅-템플릿","마케팅-모션적용","상품(식품/공산품)","상품(식품/공산품)-브랜드템플릿","etv/etcom","프로모션 수정"],"배너(프로모션,연관)":["템플릿","템플릿-모션","템플릿-썸네일형","공통","기타"],"배너(마케팅)":["템플릿","템플릿-썸네일형","공통","광고성","홈전단지컨셉"],"배너(상품)":["템플릿","공통"],"배너(etv/etcom)":["템플릿","공통"],"배너(엔라방)":["템플릿","공통"],"썸네일(그룹)":["마케팅","그룹코드_프로모션","1팀","2팀","3팀","etv/etcom","엔라방"]},u9=t=>(t??"").trim().toLowerCase(),Pt=t=>u9(t)==="nsmall",c9=t=>Pt(t)?{forms:[...wT],types:[...o9],formDefault:wT[0],typeDefault:""}:{forms:[...ET],types:[...bT],formDefault:ET[0],typeDefault:bT[0]};function TT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=j.useState(Nf),[d,p]=j.useState([]),[g,v]=j.useState(""),E=j.useMemo(()=>c9(g),[g]),T=C=>{const x=(C??"").trim();return l9[x]??[]},I=j.useMemo(()=>Pt(g)?T(l.task_type):[],[g,l.task_type]),V=j.useMemo(()=>{const C=[...E.forms];return a&&l.task_form&&!C.includes(l.task_form)&&C.unshift(l.task_form),C},[E.forms,a,l.task_form]),q=j.useMemo(()=>{const C=[...E.types];return a&&l.task_type&&!C.includes(l.task_type)&&C.unshift(l.task_type),C},[E.types,a,l.task_type]),M=(C,x)=>{if(C==="task_type"&&Pt(g)){c(ce=>({...ce,task_type:x,task_type_detail:""}));return}c(ce=>({...ce,[C]:x}))},F=C=>typeof C!="string"||C.trim()==="",G=(C,x)=>F(C.completion_date)?"완료 요청일을 선택하세요.":F(C.open_date)?"오픈일을 선택하세요.":F(C.task_form)?"업무 부서를 선택하세요.":F(C.task_type)?"업무 유형을 선택하세요.":x&&F(C.task_type_detail)?"업무 유형 상세를 선택하세요.":F(C.requirement)?"작업 항목을 입력하세요.":null,P=()=>p(C=>[...C,{...Nf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}]),te=C=>p(x=>x.filter((ce,ye)=>ye!==C)),$=(C,x,ce)=>p(ye=>{const k=[...ye];return x==="task_type"&&Pt(g)?k[C]={...k[C],task_type:ce,task_type_detail:""}:k[C]={...k[C],[x]:ce},k}),re=C=>C?Et.fromDate(new Date(C)):null,D=async()=>{const C=new Date,x=C.getFullYear().toString().slice(2),ce=(C.getMonth()+1).toString().padStart(2,"0"),ye=fr(Gn(ot,"design_request"),Hn("design_request_id",">=",`H${x}${ce}0000`),Hn("design_request_id","<",`H${x}${ce}9999`)),k=await bl(ye);return{year:x,month:ce,base:k.size}},R=(C,x,ce)=>`H${C}${x}${ce.toString().padStart(4,"0")}`,O=async(C,x)=>{const ce=fr(Gn(ot,"homeplus_task_work_hour"),Hn("homeplus_task_form","==",C),Hn("homeplus_task_type","==",x));return await bl(ce)},U=async(C,x,ce)=>{if(Pt(g)){if(!x||!ce)return{base:null,times:null};const de=fr(Gn(ot,"nsmall_task_work_hour"),Hn("nsmall_task_type","==",x),Hn("nsmall_task_type_detail","==",ce)),N=await bl(de);if(N.empty)return{base:null,times:null};const ne=N.docs[0].data(),le=typeof ne.nsmall_task_work_hour=="number"?ne.nsmall_task_work_hour:null,ue=typeof ne.nsmall_task_work_times=="number"?ne.nsmall_task_work_times:null;return console.log("[NSMALL preset]",{task_type:x,task_type_detail:ce,base:le,times:ue,docId:N.docs[0].id}),{base:le,times:ue}}if(!C||!x)return{base:null,times:null};let ye=await O(C,x);if(ye.empty&&C!=="MHC/GHS"&&(ye=await O("MHC/GHS",x)),ye.empty&&(C==="GHS"||C==="MHC")&&(ye=await O(C==="GHS"?"MHC":"GHS",x)),ye.empty)return{base:null,times:null};const k=ye.docs[0].data(),J=typeof k.homeplus_task_work_hour=="number"?k.homeplus_task_work_hour:null,se=typeof k.homeplus_task_work_times=="number"?k.homeplus_task_work_times:null;return console.log("[HOMEPLUS preset]",{task_form:C,task_type:x,base:J,times:se,docId:ye.docs[0].id}),{base:J,times:se}},B=async C=>{if(C.preventDefault(),a){const de=G(l,Pt(g));if(de){alert(de);return}}if(a&&(e!=null&&e.id)){const de=(l.task_form||"")!==(e.task_form||""),N=(l.task_type||"")!==(e.task_type||""),ne=Pt(g)&&(l.task_type_detail||"")!==(e.task_type_detail||""),le={completion_date:re(l.completion_date),open_date:re(l.open_date),merchandiser:l.merchandiser??"",task_form:l.task_form||E.formDefault,task_type:Pt(g)?l.task_type??"":l.task_type||E.typeDefault,task_type_detail:l.task_type_detail??"",requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_date:by()};if(de||N||ne){const{base:ue,times:ve}=await U(le.task_form,le.task_type,le.task_type_detail);le.out_work_hour=ue,le.in_work_hour=ue!=null&&ve!=null?Number((ue*ve).toFixed(2)):null,le.work_hour_edit_state=!1}await mi(jn(ot,"design_request",e.id),le),alert("요청이 수정되었습니다!"),i();return}const x=[l,...d];for(let de=0;de<x.length;de++){const N=x[de],ne=G(N,Pt(g));if(ne){alert(`${de===0?"메인 폼":`추가 요청 ${de}`} ${ne}`);return}}const{year:ce,month:ye,base:k}=await D();let J=k;const se=new Date;for(const de of x){J+=1;const N=R(ce,ye,J),ne=de.task_form||E.formDefault,le=Pt(g)?de.task_type||"":de.task_type||E.typeDefault,{base:ue,times:ve}=await U(de.task_form,de.task_type,de.task_type_detail),Ae=ue!=null&&ve!=null?Number((ue*ve).toFixed(2)):null;await YP(Gn(ot,"design_request"),{design_request_id:N,request_date:re(se.toISOString()),merchandiser:de.merchandiser??"",requester:t,company:g,completion_date:re(de.completion_date),open_date:re(de.open_date),task_form:ne,task_type:le,task_type_detail:de.task_type_detail??"",requirement:de.requirement,url:de.url,note:de.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:de.emergency,requester_edit_state:!1,designer_edit_state:!1,in_work_hour:Ae,out_work_hour:ue,work_hour_edit_state:!1,created_date:by(),updated_date:null,delete_date:null})}alert(`${x.length}건이 등록되었습니다!`),p([]),c(Nf),i()};return j.useEffect(()=>{a&&e&&c({completion_date:e.completion_date?e.completion_date.toDate().toISOString().slice(0,10):"",open_date:e.open_date?e.open_date.toDate().toISOString().slice(0,10):"",merchandiser:e.merchandiser??"",task_form:e.task_form??"",task_type:e.task_type??"",task_type_detail:e.task_type_detail??"",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),j.useEffect(()=>{!n||a||(c({...Nf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}),p([]))},[n,a,E.formDefault,E.typeDefault]),j.useEffect(()=>{const C=Fc(ma,async x=>{var ye;if(!x){v("");return}const ce=await Nc(jn(ot,"users",x.uid));v(((ye=ce.data())==null?void 0:ye.company)??"")});return()=>C()},[]),j.useEffect(()=>{a||c(C=>{const x={...C};return E.forms.includes(x.task_form||"")||(x.task_form=E.formDefault),E.types.includes(x.task_type||"")||(x.task_type=E.typeDefault,x.task_type_detail=""),x})},[E.forms,E.types,E.formDefault,E.typeDefault,a]),y.jsxs(y.Fragment,{children:[y.jsxs(f9,{children:[y.jsx(d9,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),y.jsx(p9,{type:"button",onClick:i})]}),y.jsxs(h9,{onSubmit:B,children:[y.jsxs(m9,{children:[!a&&d.map((C,x)=>{const ce=Pt(g)?T(C.task_type):[],ye=Pt(g)&&!!C.task_type;return y.jsxs("div",{style:{marginBottom:24},children:[y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[y.jsxs("strong",{children:["추가 요청 ",x+1]}),y.jsx("button",{type:"button",onClick:()=>te(x),children:"삭제"})]}),y.jsxs(ST,{children:[y.jsx(xT,{children:"디자인 요청 추가 등록"}),y.jsx("colgroup",{children:y.jsx("col",{style:{width:"120px"}})}),y.jsxs("tbody",{children:[y.jsxs("tr",{children:[y.jsx(Yt,{children:"문서번호"}),y.jsx(Wt,{})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`merchandiser_ex_${x}`,children:"담당 MD"})}),y.jsx(Wt,{children:y.jsx(Vf,{id:`merchandiser_ex_${x}`,type:"text",value:C.merchandiser||"",onChange:k=>$(x,"merchandiser",k.target.value),placeholder:"담당 MD 이름 또는 ID를 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`completion_date_ex_${x}`,children:"완료 요청일"})}),y.jsx(Wt,{children:y.jsx(Pf,{id:`completion_date_ex_${x}`,type:"date",value:C.completion_date||"",onChange:k=>$(x,"completion_date",k.target.value)})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`open_date_ex_${x}`,children:"오픈일"})}),y.jsx(Wt,{children:y.jsx(Pf,{id:`open_date_ex_${x}`,type:"date",value:C.open_date||"",onChange:k=>$(x,"open_date",k.target.value)})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`task_form_ex_${x}`,children:"업무 부서"})}),y.jsx(Wt,{children:y.jsx(cl,{id:`task_form_ex_${x}`,$wide:Pt(g),value:C.task_form||E.formDefault,onChange:k=>$(x,"task_form",k.target.value),children:E.forms.map(k=>y.jsx("option",{value:k,children:k},k))})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`task_type_ex_${x}`,children:"업무 유형"})}),y.jsxs(Wt,{children:[y.jsxs(cl,{id:`task_type_ex_${x}`,$wide:Pt(g),value:Pt(g)?C.task_type||"":C.task_type||E.typeDefault,onChange:k=>$(x,"task_type",k.target.value),children:[Pt(g)&&y.jsx("option",{value:"",children:"업무 유형을 선택해주세요"})," ",E.types.map(k=>y.jsx("option",{value:k,children:k},k))]}),ye&&y.jsxs(cl,{id:`task_type_detail_ex_${x}`,$wide:Pt(g),value:C.task_type_detail||"",onChange:k=>$(x,"task_type_detail",k.target.value),children:[y.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),ce.map(k=>y.jsx("option",{value:k,children:k},k))]})]})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`requirement_ex_${x}`,children:"작업 항목"})}),y.jsx(Wt,{children:y.jsx(Vf,{id:`requirement_ex_${x}`,type:"text",value:C.requirement||"",onChange:k=>$(x,"requirement",k.target.value),placeholder:"작업 항목을 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`emergency_ex_${x}`,children:"긴급 일정"})}),y.jsx(Wt,{children:y.jsx(CT,{children:y.jsxs(DT,{htmlFor:`emergency_ex_${x}`,children:[y.jsx(IT,{id:`emergency_ex_${x}`,type:"checkbox",checked:!!C.emergency,onChange:k=>$(x,"emergency",k.target.checked)}),y.jsx(kT,{}),y.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`url_ex_${x}`,children:"요청서 URL"})}),y.jsx(Wt,{children:y.jsx(AT,{id:`url_ex_${x}`,value:C.url||"",onChange:k=>$(x,"url",k.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:`note_ex_${x}`,children:"메모"})}),y.jsx(Wt,{children:y.jsx(RT,{id:`note_ex_${x}`,rows:4,value:C.note||"",onChange:k=>$(x,"note",k.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},x)}),y.jsxs(ST,{children:[y.jsx(xT,{children:"디자인 요청 등록"}),y.jsx("colgroup",{children:y.jsx("col",{style:{width:"120px"}})}),y.jsxs("tbody",{children:[y.jsxs("tr",{children:[y.jsx(Yt,{children:"문서번호"}),y.jsx(Wt,{children:a?e==null?void 0:e.design_request_id:""})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"completion_date",children:"완료 요청일"})}),y.jsx(Wt,{children:y.jsx(Pf,{type:"date",id:"completion_date",value:l.completion_date,onChange:C=>M("completion_date",C.target.value)})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"open_date",children:"오픈일"})}),y.jsx(Wt,{children:y.jsx(Pf,{type:"date",id:"open_date",value:l.open_date,onChange:C=>M("open_date",C.target.value)})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"merchandiser",children:"담당 MD"})}),y.jsx(Wt,{children:y.jsx(Vf,{type:"text",id:"merchandiser",value:l.merchandiser||"",onChange:C=>M("merchandiser",C.target.value),placeholder:"담당 MD 이름을 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"task_form",children:"업무 부서"})}),y.jsx(Wt,{children:y.jsx(cl,{id:"task_form",$wide:Pt(g),value:l.task_form||E.formDefault,onChange:C=>M("task_form",C.target.value),children:V.map(C=>y.jsx("option",{value:C,children:C},C))})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"task_type",children:"업무 유형"})}),y.jsxs(Wt,{children:[y.jsxs(cl,{id:"task_type",$wide:Pt(g),value:Pt(g)?a?l.task_type||q[0]||"":l.task_type??"":l.task_type||E.typeDefault,onChange:C=>M("task_type",C.target.value),children:[Pt(g)&&!a&&y.jsx("option",{value:"",children:"업무 유형을 선택해주세요"}),q.map(C=>y.jsx("option",{value:C,children:C},C))]}),Pt(g)&&!!l.task_type&&y.jsxs(cl,{id:"task_type_detail",$wide:!0,value:l.task_type_detail||"",onChange:C=>M("task_type_detail",C.target.value),children:[y.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),I.map(C=>y.jsx("option",{value:C,children:C},C))]})]})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"requirement",children:"작업 항목"})}),y.jsx(Wt,{children:y.jsx(Vf,{type:"text",id:"requirement",value:l.requirement,onChange:C=>M("requirement",C.target.value),placeholder:"작업 항목을 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"emergency",children:"긴급 일정"})}),y.jsx(Wt,{children:y.jsx(CT,{children:y.jsxs(DT,{htmlFor:"emergency",children:[y.jsx(IT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:C=>M("emergency",C.target.checked)}),y.jsx(kT,{}),y.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"url",children:"요청서 URL"})}),y.jsx(Wt,{children:y.jsx(AT,{id:"url",value:l.url,onChange:C=>M("url",C.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),y.jsxs("tr",{children:[y.jsx(Yt,{children:y.jsx(yn,{htmlFor:"note",children:"메모"})}),y.jsx(Wt,{children:y.jsx(RT,{id:"note",rows:2,value:l.note,onChange:C=>M("note",C.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),y.jsxs(g9,{children:[y.jsx(y9,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&y.jsx(_9,{type:"button",onClick:P,children:"추가 등록하기"})]})]})]})}const h9=z.form`
  font-family: 'Pretendard';
`,f9=z.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,d9=z.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,p9=z.button`
  width: 24px;
  height: 24px;
  background: url(${IA}) no-repeat center;
  background-size: contain;
`,ST=z.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,m9=z.div`
  max-height: 690px;
  overflow: auto;
`,xT=z.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Yt=z.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Wt=z.td`
  padding: 10px 24px;
  border-right: none;
`,yn=z.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Pf=z.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,Vf=z.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,AT=z.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`,RT=z.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
`,CT=z.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,DT=z.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,IT=z.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${a9});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,kT=z.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,cl=z.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${({$wide:t})=>t?"215px":"168px"};
  height: 36px;
  padding: 0 32px 0 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.white01};
  background-image: url(${Xx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  vertical-align: top;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }

  &:first-of-type {
    margin-right: 10px;
  }
`,g9=z.div`
  margin-top: 24px;
  text-align: center;
`,y9=z.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,_9=z.button`
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
`;function v9({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return y.jsxs(y.Fragment,{children:[y.jsxs(E9,{children:[y.jsx(b9,{children:"디자인 요청 상세"}),y.jsx(w9,{type:"button",onClick:e})]}),y.jsxs(T9,{children:[y.jsx(S9,{children:"디자인 요청 상세"}),y.jsx("colgroup",{children:y.jsx("col",{style:{width:"120px"}})}),y.jsxs("tbody",{children:[y.jsxs("tr",{children:[y.jsx(qr,{children:"문서번호"}),y.jsx(Qs,{children:t==null?void 0:t.design_request_id})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"요청일"}),y.jsx(Qs,{children:n(t==null?void 0:t.request_date)})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"완료 요청일"}),y.jsx(x9,{children:n(t==null?void 0:t.completion_date)})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"오픈일"}),y.jsx(A9,{children:n(t==null?void 0:t.open_date)})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"담당 MD"}),y.jsx(Qs,{children:(t==null?void 0:t.merchandiser)||""})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"업무 부서"}),y.jsx(Qs,{children:t==null?void 0:t.task_form})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"업무 유형"}),y.jsxs(Qs,{children:[y.jsx(C9,{children:t==null?void 0:t.task_type}),(t==null?void 0:t.task_type_detail)&&y.jsxs(y.Fragment,{children:[y.jsx(D9,{children:"＞"}),y.jsx(I9,{children:t==null?void 0:t.task_type_detail})]})]})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"작업 항목"}),y.jsx(Qs,{children:t==null?void 0:t.requirement})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"긴급 일정"}),y.jsx(Qs,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"요청서 URL"}),y.jsx(Qs,{children:t!=null&&t.url?y.jsx(k9,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),y.jsxs("tr",{children:[y.jsx(qr,{children:"메모"}),y.jsx(R9,{children:y.jsx(O9,{children:t.note})})]})]})]})]})}const E9=z.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,b9=z.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,w9=z.button`
  width: 24px;
  height: 24px;
  background: url(${IA}) no-repeat center;
  background-size: contain;
`,T9=z.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,S9=z.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,qr=z.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Qs=z.td`
  padding: 12px 24px;
  border-right: none;
`,x9=z.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,A9=z.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,R9=z.td`
  padding: 12px 24px;
  border-right: none;
  background-color: #fffff1;
`,C9=z.span`
`,D9=z.span`
  margin: 0 5px;
`,I9=z.span`
  
`,k9=z.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,O9=z.p`
  min-height: 100px;
  max-height: 100px;
  overflow-y: auto;
  word-break: break-word;
`;function M9(){const[t,e]=j.useState(0),[n,i]=j.useState([]),[a,l]=j.useState(""),[c,d]=j.useState(!1),[p,g]=j.useState(void 0),[v,E]=j.useState(null);j.useEffect(()=>{const V=Fc(ma,async q=>{if(q){l(q.displayName||"");const M=await Nc(jn(ot,"users",q.uid));if(M.exists()){const G=M.data().role,P=q.displayName;e(G);let te;G===1?te=fr(Gn(ot,"design_request"),Hn("requester","==",P)):G===2?te=fr(Gn(ot,"design_request"),Hn("assigned_designer","==",P)):te=Gn(ot,"design_request"),sp(te,$=>{const re=$.docs.map(D=>{const R=D.data();return{id:D.id,status:R.status??"대기중"}});i(re)})}}else e(0),l(""),i([])});return()=>V()},[]);const T=()=>{g(void 0),E("create"),d(!0)},I=()=>{d(!1),g(void 0)};return y.jsxs(N9,{children:[y.jsx(HU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),y.jsxs(P9,{children:[y.jsx(dV,{}),y.jsx(MU,{userRole:t,setIsDrawerOpen:d,setEditData:V=>{g(V),E("edit")},setDetailData:V=>{g(V),E("detail")}})]}),y.jsxs(r9,{isOpen:c,onClose:I,children:[v==="create"&&y.jsx(TT,{userName:a,isDrawerOpen:c,onClose:I}),v==="edit"&&p&&y.jsx(TT,{userName:a,isDrawerOpen:c,editData:p,onClose:I}),v==="detail"&&p&&y.jsx(v9,{data:p,onClose:I})]})]})}const N9=z.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,P9=z.div`
  flex: 1;
`;function V9(){const[t,e]=j.useState(""),[n,i]=j.useState(""),[a,l]=j.useState(""),[c,d]=j.useState(""),[p,g]=j.useState(""),v=Ul(),E=async()=>{const T=t.trim(),I=n.trim(),V=a.trim();if(!T){alert("이름을 입력해주세요.");return}if(!I){alert("회사명을 입력해주세요.");return}if(!V){alert("이메일을 입력해주세요.");return}if(c!==p){alert("비밀번호가 일치하지 않습니다.");return}yM(ma,a,c).then(async q=>{const M=q.user;await EM(M,{displayName:t}),await GP(jn(ot,"users",M.uid),{name:T,company:I,role:1,createdAt:by()})}).then(()=>{alert("회원가입이 완료되었습니다!"),v("/")}).catch(q=>{alert("회원가입 중 오류 발생: "+q.message)})};return y.jsx(j9,{children:y.jsxs(L9,{children:[y.jsxs(U9,{children:[y.jsx(q9,{children:"PDMS"}),y.jsx(B9,{children:"Pushcomz Design Management System"})]}),y.jsxs(z9,{children:[y.jsx($9,{type:"text",value:t,onChange:T=>e(T.target.value),placeholder:"이름을 입력해주세요."}),y.jsx(F9,{type:"text",value:n,onChange:T=>i(T.target.value),placeholder:"회사명을 입력해주세요."})," ",y.jsx(H9,{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"이메일을 입력해주세요."}),y.jsx(G9,{type:"password",value:c,onChange:T=>d(T.target.value),placeholder:"비밀번호를 입력해주세요."}),y.jsx(Y9,{type:"password",value:p,onChange:T=>g(T.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),y.jsx(W9,{onClick:E,children:"등록하기"})]})})}const j9=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,L9=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,U9=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,q9=z.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,B9=z.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,z9=z.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,$9=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,F9=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,H9=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,G9=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,Y9=z.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,W9=z.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function Q9(){const[t,e]=j.useState(!1);return y.jsx(AD,{basename:"/pdms-test",children:y.jsxs(nD,{children:[y.jsx(jf,{path:"/",element:y.jsx(QP,{onLoginSuccess:()=>e(!0)})}),y.jsx(jf,{path:"/main",element:t?y.jsx(M9,{}):y.jsx(eD,{to:"/"})}),y.jsx(jf,{path:"/signup",element:y.jsx(V9,{})})]})})}const K9=E1`
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

`,X9={white01:"#fff",white02:"#f4f4f4",white03:"#f4f6fc",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},Z9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},J9={colors:X9,mixin:Z9};hC.createRoot(document.getElementById("root")).render(y.jsx(j.StrictMode,{children:y.jsxs(NI,{theme:J9,children:[y.jsx(Q9,{}),y.jsx(K9,{})]})}));
