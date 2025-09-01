(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function HR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},Wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function GR(){if(BE)return Wu;BE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Wu.Fragment=e,Wu.jsx=n,Wu.jsxs=n,Wu}var zE;function YR(){return zE||(zE=1,Zm.exports=GR()),Zm.exports}var _=YR(),Jm={exports:{}},qe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function WR(){if($E)return qe;$E=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,B={};function O(V,te,he){this.props=V,this.context=te,this.refs=B,this.updater=he||I}O.prototype.isReactComponent={},O.prototype.setState=function(V,te){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,te,"setState")},O.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function F(){}F.prototype=O.prototype;function G(V,te,he){this.props=V,this.context=te,this.refs=B,this.updater=he||I}var N=G.prototype=new F;N.constructor=G,P(N,O.prototype),N.isPureReactComponent=!0;var J=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},re=Object.prototype.hasOwnProperty;function D(V,te,he,ue,_e,Ce){return he=Ce.ref,{$$typeof:t,type:V,key:te,ref:he!==void 0?he:null,props:Ce}}function C(V,te){return D(V.type,te,void 0,void 0,void 0,V.props)}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===t}function U(V){var te={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return te[he]})}var M=/\/+/g;function R(V,te){return typeof V=="object"&&V!==null&&V.key!=null?U(""+V.key):te.toString(36)}function x(){}function ve(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(x,x):(V.status="pending",V.then(function(te){V.status==="pending"&&(V.status="fulfilled",V.value=te)},function(te){V.status==="pending"&&(V.status="rejected",V.reason=te)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function ne(V,te,he,ue,_e){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Te=!1;if(V===null)Te=!0;else switch(Ce){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(V.$$typeof){case t:case e:Te=!0;break;case v:return Te=V._init,ne(Te(V._payload),te,he,ue,_e)}}if(Te)return _e=_e(V),Te=ue===""?"."+R(V,0):ue,J(_e)?(he="",Te!=null&&(he=Te.replace(M,"$&/")+"/"),ne(_e,te,he,"",function(Tt){return Tt})):_e!=null&&(k(_e)&&(_e=C(_e,he+(_e.key==null||V&&V.key===_e.key?"":(""+_e.key).replace(M,"$&/")+"/")+Te)),te.push(_e)),1;Te=0;var yt=ue===""?".":ue+":";if(J(V))for(var Fe=0;Fe<V.length;Fe++)ue=V[Fe],Ce=yt+R(ue,Fe),Te+=ne(ue,te,he,Ce,_e);else if(Fe=T(V),typeof Fe=="function")for(V=Fe.call(V),Fe=0;!(ue=V.next()).done;)ue=ue.value,Ce=yt+R(ue,Fe++),Te+=ne(ue,te,he,Ce,_e);else if(Ce==="object"){if(typeof V.then=="function")return ne(ve(V),te,he,ue,_e);throw te=String(V),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Te}function q(V,te,he){if(V==null)return V;var ue=[],_e=0;return ne(V,ue,"","",function(Ce){return te.call(he,Ce,_e++)}),ue}function se(V){if(V._status===-1){var te=V._result;te=te(),te.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=te)}if(V._status===1)return V._result.default;throw V._result}var fe=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function de(){}return qe.Children={map:q,forEach:function(V,te,he){q(V,function(){te.apply(this,arguments)},he)},count:function(V){var te=0;return q(V,function(){te++}),te},toArray:function(V){return q(V,function(te){return te})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},qe.Component=O,qe.Fragment=n,qe.Profiler=a,qe.PureComponent=G,qe.StrictMode=i,qe.Suspense=p,qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,qe.__COMPILER_RUNTIME={__proto__:null,c:function(V){return z.H.useMemoCache(V)}},qe.cache=function(V){return function(){return V.apply(null,arguments)}},qe.cloneElement=function(V,te,he){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ue=P({},V.props),_e=V.key,Ce=void 0;if(te!=null)for(Te in te.ref!==void 0&&(Ce=void 0),te.key!==void 0&&(_e=""+te.key),te)!re.call(te,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&te.ref===void 0||(ue[Te]=te[Te]);var Te=arguments.length-2;if(Te===1)ue.children=he;else if(1<Te){for(var yt=Array(Te),Fe=0;Fe<Te;Fe++)yt[Fe]=arguments[Fe+2];ue.children=yt}return D(V.type,_e,void 0,void 0,Ce,ue)},qe.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:l,_context:V},V},qe.createElement=function(V,te,he){var ue,_e={},Ce=null;if(te!=null)for(ue in te.key!==void 0&&(Ce=""+te.key),te)re.call(te,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(_e[ue]=te[ue]);var Te=arguments.length-2;if(Te===1)_e.children=he;else if(1<Te){for(var yt=Array(Te),Fe=0;Fe<Te;Fe++)yt[Fe]=arguments[Fe+2];_e.children=yt}if(V&&V.defaultProps)for(ue in Te=V.defaultProps,Te)_e[ue]===void 0&&(_e[ue]=Te[ue]);return D(V,Ce,void 0,void 0,null,_e)},qe.createRef=function(){return{current:null}},qe.forwardRef=function(V){return{$$typeof:d,render:V}},qe.isValidElement=k,qe.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:se}},qe.memo=function(V,te){return{$$typeof:g,type:V,compare:te===void 0?null:te}},qe.startTransition=function(V){var te=z.T,he={};z.T=he;try{var ue=V(),_e=z.S;_e!==null&&_e(he,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(de,fe)}catch(Ce){fe(Ce)}finally{z.T=te}},qe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},qe.use=function(V){return z.H.use(V)},qe.useActionState=function(V,te,he){return z.H.useActionState(V,te,he)},qe.useCallback=function(V,te){return z.H.useCallback(V,te)},qe.useContext=function(V){return z.H.useContext(V)},qe.useDebugValue=function(){},qe.useDeferredValue=function(V,te){return z.H.useDeferredValue(V,te)},qe.useEffect=function(V,te,he){var ue=z.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ue.useEffect(V,te)},qe.useId=function(){return z.H.useId()},qe.useImperativeHandle=function(V,te,he){return z.H.useImperativeHandle(V,te,he)},qe.useInsertionEffect=function(V,te){return z.H.useInsertionEffect(V,te)},qe.useLayoutEffect=function(V,te){return z.H.useLayoutEffect(V,te)},qe.useMemo=function(V,te){return z.H.useMemo(V,te)},qe.useOptimistic=function(V,te){return z.H.useOptimistic(V,te)},qe.useReducer=function(V,te,he){return z.H.useReducer(V,te,he)},qe.useRef=function(V){return z.H.useRef(V)},qe.useState=function(V){return z.H.useState(V)},qe.useSyncExternalStore=function(V,te,he){return z.H.useSyncExternalStore(V,te,he)},qe.useTransition=function(){return z.H.useTransition()},qe.version="19.1.0",qe}var FE;function my(){return FE||(FE=1,Jm.exports=WR()),Jm.exports}var j=my();const ge=HR(j);var eg={exports:{}},Qu={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function QR(){return HE||(HE=1,function(t){function e(q,se){var fe=q.length;q.push(se);e:for(;0<fe;){var de=fe-1>>>1,V=q[de];if(0<a(V,se))q[de]=se,q[fe]=V,fe=de;else break e}}function n(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var se=q[0],fe=q.pop();if(fe!==se){q[0]=fe;e:for(var de=0,V=q.length,te=V>>>1;de<te;){var he=2*(de+1)-1,ue=q[he],_e=he+1,Ce=q[_e];if(0>a(ue,fe))_e<V&&0>a(Ce,ue)?(q[de]=Ce,q[_e]=fe,de=_e):(q[de]=ue,q[he]=fe,de=he);else if(_e<V&&0>a(Ce,fe))q[de]=Ce,q[_e]=fe,de=_e;else break e}}return se}function a(q,se){var fe=q.sortIndex-se.sortIndex;return fe!==0?fe:q.id-se.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,E=null,T=3,I=!1,P=!1,B=!1,O=!1,F=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function J(q){for(var se=n(g);se!==null;){if(se.callback===null)i(g);else if(se.startTime<=q)i(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(g)}}function z(q){if(B=!1,J(q),!P)if(n(p)!==null)P=!0,re||(re=!0,R());else{var se=n(g);se!==null&&ne(z,se.startTime-q)}}var re=!1,D=-1,C=5,k=-1;function U(){return O?!0:!(t.unstable_now()-k<C)}function M(){if(O=!1,re){var q=t.unstable_now();k=q;var se=!0;try{e:{P=!1,B&&(B=!1,G(D),D=-1),I=!0;var fe=T;try{t:{for(J(q),E=n(p);E!==null&&!(E.expirationTime>q&&U());){var de=E.callback;if(typeof de=="function"){E.callback=null,T=E.priorityLevel;var V=de(E.expirationTime<=q);if(q=t.unstable_now(),typeof V=="function"){E.callback=V,J(q),se=!0;break t}E===n(p)&&i(p),J(q)}else i(p);E=n(p)}if(E!==null)se=!0;else{var te=n(g);te!==null&&ne(z,te.startTime-q),se=!1}}break e}finally{E=null,T=fe,I=!1}se=void 0}}finally{se?R():re=!1}}}var R;if(typeof N=="function")R=function(){N(M)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,ve=x.port2;x.port1.onmessage=M,R=function(){ve.postMessage(null)}}else R=function(){F(M,0)};function ne(q,se){D=F(function(){q(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(q){switch(T){case 1:case 2:case 3:var se=3;break;default:se=T}var fe=T;T=se;try{return q()}finally{T=fe}},t.unstable_requestPaint=function(){O=!0},t.unstable_runWithPriority=function(q,se){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var fe=T;T=q;try{return se()}finally{T=fe}},t.unstable_scheduleCallback=function(q,se,fe){var de=t.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?de+fe:de):fe=de,q){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=fe+V,q={id:v++,callback:se,priorityLevel:q,startTime:fe,expirationTime:V,sortIndex:-1},fe>de?(q.sortIndex=fe,e(g,q),n(p)===null&&q===n(g)&&(B?(G(D),D=-1):B=!0,ne(z,fe-de))):(q.sortIndex=V,e(p,q),P||I||(P=!0,re||(re=!0,R()))),q},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(q){var se=T;return function(){var fe=T;T=se;try{return q.apply(this,arguments)}finally{T=fe}}}}(ng)),ng}var GE;function KR(){return GE||(GE=1,tg.exports=QR()),tg.exports}var rg={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE;function XR(){if(YE)return kn;YE=1;var t=my();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,kn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},kn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},kn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},kn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},kn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:I}):v==="script"&&i.d.X(p,{crossOrigin:E,integrity:T,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},kn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},kn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},kn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},kn.requestFormReset=function(p){i.d.r(p)},kn.unstable_batchedUpdates=function(p,g){return p(g)},kn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.1.0",kn}var WE;function ZR(){if(WE)return rg.exports;WE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),rg.exports=XR(),rg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE;function JR(){if(QE)return Qu;QE=1;var t=KR(),e=my(),n=ZR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var b=!1,S=f.child;S;){if(S===o){b=!0,o=f,u=m;break}if(S===u){b=!0,u=f,o=m;break}S=S.sibling}if(!b){for(S=m.child;S;){if(S===o){b=!0,o=m,u=f;break}if(S===u){b=!0,u=m,o=f;break}S=S.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),N=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function R(r){return r===null||typeof r!="object"?null:(r=M&&r[M]||r["@@iterator"],typeof r=="function"?r:null)}var x=Symbol.for("react.client.reference");function ve(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===x?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case O:return"Profiler";case B:return"StrictMode";case z:return"Suspense";case re:return"SuspenseList";case k:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case N:return(r.displayName||"Context")+".Provider";case G:return(r._context.displayName||"Context")+".Consumer";case J:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return s=r.displayName||null,s!==null?s:ve(r.type)||"Memo";case C:s=r._payload,r=r._init;try{return ve(r(s))}catch{}}return null}var ne=Array.isArray,q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},de=[],V=-1;function te(r){return{current:r}}function he(r){0>V||(r.current=de[V],de[V]=null,V--)}function ue(r,s){V++,de[V]=r.current,r.current=s}var _e=te(null),Ce=te(null),Te=te(null),yt=te(null);function Fe(r,s){switch(ue(Te,s),ue(Ce,r),ue(_e,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?mE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=mE(s),r=gE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}he(_e),ue(_e,r)}function Tt(){he(_e),he(Ce),he(Te)}function Dn(r){r.memoizedState!==null&&ue(yt,r);var s=_e.current,o=gE(s,r.type);s!==o&&(ue(Ce,r),ue(_e,o))}function pe(r){Ce.current===r&&(he(_e),he(Ce)),yt.current===r&&(he(yt),$u._currentValue=fe)}var Se=Object.prototype.hasOwnProperty,be=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,it=t.unstable_shouldYield,Kn=t.unstable_requestPaint,Lt=t.unstable_now,Gr=t.unstable_getCurrentPriorityLevel,Xn=t.unstable_ImmediatePriority,fr=t.unstable_UserBlockingPriority,Si=t.unstable_NormalPriority,mo=t.unstable_LowPriority,Yr=t.unstable_IdlePriority,xi=t.log,go=t.unstable_setDisableYieldValue,xt=null,nt=null;function Ln(r){if(typeof xi=="function"&&go(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(xt,r)}catch{}}var ln=Math.clz32?Math.clz32:Ai,yo=Math.log,Yl=Math.LN2;function Ai(r){return r>>>=0,r===0?32:31-(yo(r)/Yl|0)|0}var Ri=256,Ci=4194304;function Zn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Di(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=Zn(u):(b&=S,b!==0?f=Zn(b):o||(o=S&~r,o!==0&&(f=Zn(o))))):(S=u&~m,S!==0?f=Zn(S):b!==0?f=Zn(b):o||(o=u&~r,o!==0&&(f=Zn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function Ii(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function gs(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var r=Ri;return Ri<<=1,(Ri&4194048)===0&&(Ri=256),r}function st(){var r=Ci;return Ci<<=1,(Ci&62914560)===0&&(Ci=4194304),r}function ke(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function et(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function un(r,s,o,u,f,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,L=r.expirationTimes,K=r.hiddenUpdates;for(o=b&~o;0<o;){var ie=31-ln(o),le=1<<ie;S[ie]=0,L[ie]=-1;var X=K[ie];if(X!==null)for(K[ie]=null,ie=0;ie<X.length;ie++){var Z=X[ie];Z!==null&&(Z.lane&=-536870913)}o&=~le}u!==0&&Ue(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ue(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-ln(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function va(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-ln(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Wr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ys(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function dr(){var r=se.p;return r!==0?r:(r=window.event,r===void 0?32:PE(r.type))}function _s(r,s){var o=se.p;try{return se.p=r,s()}finally{se.p=o}}var At=Math.random().toString(36).slice(2),en="__reactFiber$"+At,zt="__reactProps$"+At,pr="__reactContainer$"+At,Wl="__reactEvents$"+At,tp="__reactListeners$"+At,vs="__reactHandles$"+At,Xc="__reactResources$"+At,Ea="__reactMarker$"+At;function Es(r){delete r[en],delete r[zt],delete r[Wl],delete r[tp],delete r[vs]}function ki(r){var s=r[en];if(s)return s;for(var o=r.parentNode;o;){if(s=o[pr]||o[en]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=EE(r);r!==null;){if(o=r[en])return o;r=EE(r)}return s}r=o,o=r.parentNode}return null}function Qr(r){if(r=r[en]||r[pr]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Kr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function jn(r){var s=r[Xc];return s||(s=r[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function jt(r){r[Ea]=!0}var Ql=new Set,_o={};function Ir(r,s){Oi(r,s),Oi(r+"Capture",s)}function Oi(r,s){for(_o[r]=s,r=0;r<s.length;r++)Ql.add(s[r])}var Zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},wa={};function eh(r){return Se.call(wa,r)?!0:Se.call(Jc,r)?!1:Zc.test(r)?wa[r]=!0:(Jc[r]=!0,!1)}function ws(r,s,o){if(eh(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Xr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function En(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ba,th;function Mi(r){if(ba===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ba=s&&s[1]||"",th=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ba+r+th}var vo=!1;function Eo(r,s){if(!r||vo)return"";vo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(Z){var X=Z}Reflect.construct(r,[],le)}else{try{le.call()}catch(Z){X=Z}r.call(le.prototype)}}else{try{throw Error()}catch(Z){X=Z}(le=r())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],S=m[1];if(b&&S){var L=b.split(`
`),K=S.split(`
`);for(f=u=0;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(u===L.length||f===K.length)for(u=L.length-1,f=K.length-1;1<=u&&0<=f&&L[u]!==K[f];)f--;for(;1<=u&&0<=f;u--,f--)if(L[u]!==K[f]){if(u!==1||f!==1)do if(u--,f--,0>f||L[u]!==K[f]){var ie=`
`+L[u].replace(" at new "," at ");return r.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",r.displayName)),ie}while(1<=u&&0<=f);break}}}finally{vo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Mi(o):""}function Kl(r){switch(r.tag){case 26:case 27:case 5:return Mi(r.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return Eo(r.type,!1);case 11:return Eo(r.type.render,!1);case 1:return Eo(r.type,!0);case 31:return Mi("Activity");default:return""}}function wo(r){try{var s="";do s+=Kl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Un(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Xl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function np(r){var s=Xl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function bo(r){r._valueTracker||(r._valueTracker=np(r))}function Zl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Xl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function Ta(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var rp=/[\n"\\]/g;function $t(r){return r.replace(rp,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Jn(r,s,o,u,f,m,b,S){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Un(s)):r.value!==""+Un(s)&&(r.value=""+Un(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?bs(r,b,Un(s)):o!=null?bs(r,b,Un(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Un(S):r.removeAttribute("name")}function Sa(r,s,o,u,f,m,b,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Un(o):"",s=s!=null?""+Un(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function bs(r,s,o){s==="number"&&Ta(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ni(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Un(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ft(r,s,o){if(s!=null&&(s=""+Un(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Un(o):""}function xa(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(ne(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Un(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function mr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nh(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Aa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Jl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&nh(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&nh(r,m,s[m])}function eu(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function To(r){return sp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Pi=null;function gr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Vi=null,Li=null;function tu(r){var s=Qr(r);if(s&&(r=s.stateNode)){var o=r[zt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Jn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+$t(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[zt]||null;if(!f)throw Error(i(90));Jn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Zl(u)}break e;case"textarea":ft(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ni(r,!!o.multiple,s,!1)}}}var Zr=!1;function rh(r,s,o){if(Zr)return r(s,o);Zr=!0;try{var u=r(s);return u}finally{if(Zr=!1,(Vi!==null||Li!==null)&&(Kh(),Vi&&(s=Vi,r=Li,Li=Vi=null,tu(s),r)))for(s=0;s<r.length;s++)tu(r[s])}}function Ra(r,s){var o=r.stateNode;if(o===null)return null;var u=o[zt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(kr)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{yr=!1}var Jr=null,Ts=null,ji=null;function nu(){if(ji)return ji;var r,s=Ts,o=s.length,u,f="value"in Jr?Jr.value:Jr.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var b=o-r;for(u=1;u<=b&&s[o-u]===f[m-u];u++);return ji=f.slice(r,1<u?1-u:void 0)}function ei(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ti(){return!0}function ru(){return!1}function cn(r){function s(o,u,f,m,b){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ti:ru,this.isPropagationStopped=ru,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),s}var at={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=cn(at),Da=v({},at,{view:0,detail:0}),ih=cn(Da),xo,Ao,ni,Ia=v({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ni&&(ni&&r.type==="mousemove"?(xo=r.screenX-ni.screenX,Ao=r.screenY-ni.screenY):Ao=xo=0,ni=r),xo)},movementY:function(r){return"movementY"in r?r.movementY:Ao}}),_r=cn(Ia),sh=v({},Ia,{dataTransfer:0}),ap=cn(sh),ka=v({},Da,{relatedTarget:0}),Ro=cn(ka),iu=v({},at,{animationName:0,elapsedTime:0,pseudoElement:0}),Co=cn(iu),ah=v({},at,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Do=cn(ah),op=v({},at,{data:0}),su=cn(op),Oa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=lh[r])?!!s[r]:!1}function Ma(){return au}var uh=v({},Da,{key:function(r){if(r.key){var s=Oa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ei(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?oh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(r){return r.type==="keypress"?ei(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ei(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Io=cn(uh),ch=v({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=cn(ch),Ui=v({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),hh=cn(Ui),fh=v({},at,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=cn(fh),ph=v({},Ia,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ko=cn(ph),qn=v({},at,{newState:0,oldState:0}),mh=cn(qn),gh=[9,13,27,32],ri=kr&&"CompositionEvent"in window,h=null;kr&&"documentMode"in document&&(h=document.documentMode);var y=kr&&"TextEvent"in window&&!h,w=kr&&(!ri||h&&8<h&&11>=h),A=" ",W=!1;function ee(r,s){switch(r){case"keyup":return gh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function me(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ke=!1;function tn(r,s){switch(r){case"compositionend":return me(s);case"keypress":return s.which!==32?null:(W=!0,A);case"textInput":return r=s.data,r===A&&W?null:r;default:return null}}function Xe(r,s){if(Ke)return r==="compositionend"||!ri&&ee(r,s)?(r=nu(),ji=Ts=Jr=null,Ke=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return w&&s.locale!=="ko"?null:s.data;default:return null}}var hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nn(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!hn[r.type]:s==="textarea"}function qi(r,s,o,u){Vi?Li?Li.push(u):Li=[u]:Vi=u,s=nf(s,"onChange"),0<s.length&&(o=new So("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var wn=null,ii=null;function lu(r){cE(r,0)}function yh(r){var s=Kr(r);if(Zl(s))return r}function k_(r,s){if(r==="change")return s}var O_=!1;if(kr){var lp;if(kr){var up="oninput"in document;if(!up){var M_=document.createElement("div");M_.setAttribute("oninput","return;"),up=typeof M_.oninput=="function"}lp=up}else lp=!1;O_=lp&&(!document.documentMode||9<document.documentMode)}function N_(){wn&&(wn.detachEvent("onpropertychange",P_),ii=wn=null)}function P_(r){if(r.propertyName==="value"&&yh(ii)){var s=[];qi(s,ii,r,gr(r)),rh(lu,s)}}function wA(r,s,o){r==="focusin"?(N_(),wn=s,ii=o,wn.attachEvent("onpropertychange",P_)):r==="focusout"&&N_()}function bA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return yh(ii)}function TA(r,s){if(r==="click")return yh(s)}function SA(r,s){if(r==="input"||r==="change")return yh(s)}function xA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var er=typeof Object.is=="function"?Object.is:xA;function uu(r,s){if(er(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Se.call(s,f)||!er(r[f],s[f]))return!1}return!0}function V_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function L_(r,s){var o=V_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=V_(o)}}function j_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?j_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function U_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Ta(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Ta(r.document)}return s}function cp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var AA=kr&&"documentMode"in document&&11>=document.documentMode,Oo=null,hp=null,cu=null,fp=!1;function q_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fp||Oo==null||Oo!==Ta(u)||(u=Oo,"selectionStart"in u&&cp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),cu&&uu(cu,u)||(cu=u,u=nf(hp,"onSelect"),0<u.length&&(s=new So("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Oo)))}function Na(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Mo={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},dp={},B_={};kr&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function Pa(r){if(dp[r])return dp[r];if(!Mo[r])return r;var s=Mo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in B_)return dp[r]=s[o];return r}var z_=Pa("animationend"),$_=Pa("animationiteration"),F_=Pa("animationstart"),RA=Pa("transitionrun"),CA=Pa("transitionstart"),DA=Pa("transitioncancel"),H_=Pa("transitionend"),G_=new Map,pp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pp.push("scrollEnd");function Or(r,s){G_.set(r,s),Ir(s,[r])}var Y_=new WeakMap;function vr(r,s){if(typeof r=="object"&&r!==null){var o=Y_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:wo(s)},Y_.set(r,s),s)}return{value:r,source:s,stack:wo(s)}}var Er=[],No=0,mp=0;function _h(){for(var r=No,s=mp=No=0;s<r;){var o=Er[s];Er[s++]=null;var u=Er[s];Er[s++]=null;var f=Er[s];Er[s++]=null;var m=Er[s];if(Er[s++]=null,u!==null&&f!==null){var b=u.pending;b===null?f.next=f:(f.next=b.next,b.next=f),u.pending=f}m!==0&&W_(o,f,m)}}function vh(r,s,o,u){Er[No++]=r,Er[No++]=s,Er[No++]=o,Er[No++]=u,mp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function gp(r,s,o,u){return vh(r,s,o,u),Eh(r)}function Po(r,s){return vh(r,null,null,s),Eh(r)}function W_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-ln(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function Eh(r){if(50<Pu)throw Pu=0,bm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function IA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(r,s,o,u){return new IA(r,s,o,u)}function yp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Bi(r,s){var o=r.alternate;return o===null?(o=tr(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function Q_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function wh(r,s,o,u,f,m){var b=0;if(u=r,typeof r=="function")yp(r)&&(b=1);else if(typeof r=="string")b=OR(r,o,_e.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case k:return r=tr(31,o,s,f),r.elementType=k,r.lanes=m,r;case P:return Va(o.children,f,m,s);case B:b=8,f|=24;break;case O:return r=tr(12,o,s,f|2),r.elementType=O,r.lanes=m,r;case z:return r=tr(13,o,s,f),r.elementType=z,r.lanes=m,r;case re:return r=tr(19,o,s,f),r.elementType=re,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case F:case N:b=10;break e;case G:b=9;break e;case J:b=11;break e;case D:b=14;break e;case C:b=16,u=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=tr(b,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Va(r,s,o,u){return r=tr(7,r,u,s),r.lanes=o,r}function _p(r,s,o){return r=tr(6,r,null,s),r.lanes=o,r}function vp(r,s,o){return s=tr(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Lo=[],jo=0,bh=null,Th=0,wr=[],br=0,La=null,zi=1,$i="";function ja(r,s){Lo[jo++]=Th,Lo[jo++]=bh,bh=r,Th=s}function K_(r,s,o){wr[br++]=zi,wr[br++]=$i,wr[br++]=La,La=r;var u=zi;r=$i;var f=32-ln(u)-1;u&=~(1<<f),o+=1;var m=32-ln(s)+f;if(30<m){var b=f-f%5;m=(u&(1<<b)-1).toString(32),u>>=b,f-=b,zi=1<<32-ln(s)+f|o<<f|u,$i=m+r}else zi=1<<m|o<<f|u,$i=r}function Ep(r){r.return!==null&&(ja(r,1),K_(r,1,0))}function wp(r){for(;r===bh;)bh=Lo[--jo],Lo[jo]=null,Th=Lo[--jo],Lo[jo]=null;for(;r===La;)La=wr[--br],wr[br]=null,$i=wr[--br],wr[br]=null,zi=wr[--br],wr[br]=null}var Bn=null,Mt=null,rt=!1,Ua=null,si=!1,bp=Error(i(519));function qa(r){var s=Error(i(418,""));throw du(vr(s,r)),bp}function X_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[en]=r,s[zt]=u,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<Lu.length;o++)Ge(Lu[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),Sa(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),bo(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),xa(s,u.value,u.defaultValue,u.children),bo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||pE(s.textContent,o)?(u.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),u.onScroll!=null&&Ge("scroll",s),u.onScrollEnd!=null&&Ge("scrollend",s),u.onClick!=null&&(s.onclick=rf),s=!0):s=!1,s||qa(r)}function Z_(r){for(Bn=r.return;Bn;)switch(Bn.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Bn=Bn.return}}function hu(r){if(r!==Bn)return!1;if(!rt)return Z_(r),rt=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||jm(r.type,r.memoizedProps)),o=!o),o&&Mt&&qa(r),Z_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Mt=Nr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Mt=null}}else s===27?(s=Mt,Us(r.type)?(r=zm,zm=null,Mt=r):Mt=s):Mt=Bn?Nr(r.stateNode.nextSibling):null;return!0}function fu(){Mt=Bn=null,rt=!1}function J_(){var r=Ua;return r!==null&&(Gn===null?Gn=r:Gn.push.apply(Gn,r),Ua=null),r}function du(r){Ua===null?Ua=[r]:Ua.push(r)}var Tp=te(null),Ba=null,Fi=null;function Ss(r,s,o){ue(Tp,s._currentValue),s._currentValue=o}function Hi(r){r._currentValue=Tp.current,he(Tp)}function Sp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function xp(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var L=0;L<s.length;L++)if(S.context===s[L]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Sp(m.return,o,r),u||(b=null);break e}m=S.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Sp(b,o,r),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function pu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var S=f.type;er(f.pendingProps.value,b.value)||(r!==null?r.push(S):r=[S])}}else if(f===yt.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push($u):r=[$u])}f=f.return}r!==null&&xp(s,r,o,u),s.flags|=262144}function Sh(r){for(r=r.firstContext;r!==null;){if(!er(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function za(r){Ba=r,Fi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function In(r){return ev(Ba,r)}function xh(r,s){return Ba===null&&za(r),ev(r,s)}function ev(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Fi===null){if(r===null)throw Error(i(308));Fi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Fi=Fi.next=s;return o}var kA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},OA=t.unstable_scheduleCallback,MA=t.unstable_NormalPriority,rn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ap(){return{controller:new kA,data:new Map,refCount:0}}function mu(r){r.refCount--,r.refCount===0&&OA(MA,function(){r.controller.abort()})}var gu=null,Rp=0,Uo=0,qo=null;function NA(r,s){if(gu===null){var o=gu=[];Rp=0,Uo=Dm(),qo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rp++,s.then(tv,tv),s}function tv(){if(--Rp===0&&gu!==null){qo!==null&&(qo.status="fulfilled");var r=gu;gu=null,Uo=0,qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function PA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var nv=q.S;q.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&NA(r,s),nv!==null&&nv(r,s)};var $a=te(null);function Cp(){var r=$a.current;return r!==null?r:wt.pooledCache}function Ah(r,s){s===null?ue($a,$a.current):ue($a,s.pool)}function rv(){var r=Cp();return r===null?null:{parent:rn._currentValue,pool:r}}var yu=Error(i(460)),iv=Error(i(474)),Rh=Error(i(542)),Dp={then:function(){}};function sv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ch(){}function av(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ch,Ch),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,lv(r),r;default:if(typeof s.status=="string")s.then(Ch,Ch);else{if(r=wt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,lv(r),r}throw _u=s,yu}}var _u=null;function ov(){if(_u===null)throw Error(i(459));var r=_u;return _u=null,r}function lv(r){if(r===yu||r===Rh)throw Error(i(483))}var xs=!1;function Ip(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function As(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Rs(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ut&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Eh(r),W_(r,null,o),s}return vh(r,u,s,o),Eh(r)}function vu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,va(r,o)}}function Op(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Mp=!1;function Eu(){if(Mp){var r=qo;if(r!==null)throw r}}function wu(r,s,o,u){Mp=!1;var f=r.updateQueue;xs=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var L=S,K=L.next;L.next=null,b===null?m=K:b.next=K,b=L;var ie=r.alternate;ie!==null&&(ie=ie.updateQueue,S=ie.lastBaseUpdate,S!==b&&(S===null?ie.firstBaseUpdate=K:S.next=K,ie.lastBaseUpdate=L))}if(m!==null){var le=f.baseState;b=0,ie=K=L=null,S=m;do{var X=S.lane&-536870913,Z=X!==S.lane;if(Z?(Ze&X)===X:(u&X)===X){X!==0&&X===Uo&&(Mp=!0),ie!==null&&(ie=ie.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ne=r,De=S;X=s;var mt=o;switch(De.tag){case 1:if(Ne=De.payload,typeof Ne=="function"){le=Ne.call(mt,le,X);break e}le=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=De.payload,X=typeof Ne=="function"?Ne.call(mt,le,X):Ne,X==null)break e;le=v({},le,X);break e;case 2:xs=!0}}X=S.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ie===null?(K=ie=Z,L=le):ie=ie.next=Z,b|=X;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Z=S,S=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);ie===null&&(L=le),f.baseState=L,f.firstBaseUpdate=K,f.lastBaseUpdate=ie,m===null&&(f.shared.lanes=0),Ps|=b,r.lanes=b,r.memoizedState=le}}function uv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function cv(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)uv(o[r],s)}var Bo=te(null),Dh=te(0);function hv(r,s){r=Zi,ue(Dh,r),ue(Bo,s),Zi=r|s.baseLanes}function Np(){ue(Dh,Zi),ue(Bo,Bo.current)}function Pp(){Zi=Dh.current,he(Bo),he(Dh)}var Cs=0,ze=null,dt=null,Ft=null,Ih=!1,zo=!1,Fa=!1,kh=0,bu=0,$o=null,VA=0;function Ut(){throw Error(i(321))}function Vp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!er(r[o],s[o]))return!1;return!0}function Lp(r,s,o,u,f,m){return Cs=m,ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,q.H=r===null||r.memoizedState===null?Wv:Qv,Fa=!1,m=o(u,f),Fa=!1,zo&&(m=dv(s,o,u,f)),fv(r),m}function fv(r){q.H=Lh;var s=dt!==null&&dt.next!==null;if(Cs=0,Ft=dt=ze=null,Ih=!1,bu=0,$o=null,s)throw Error(i(300));r===null||fn||(r=r.dependencies,r!==null&&Sh(r)&&(fn=!0))}function dv(r,s,o,u){ze=r;var f=0;do{if(zo&&($o=null),bu=0,zo=!1,25<=f)throw Error(i(301));if(f+=1,Ft=dt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}q.H=$A,m=s(o,u)}while(zo);return m}function LA(){var r=q.H,s=r.useState()[0];return s=typeof s.then=="function"?Tu(s):s,r=r.useState()[0],(dt!==null?dt.memoizedState:null)!==r&&(ze.flags|=1024),s}function jp(){var r=kh!==0;return kh=0,r}function Up(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function qp(r){if(Ih){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ih=!1}Cs=0,Ft=dt=ze=null,zo=!1,bu=kh=0,$o=null}function Fn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r,Ft}function Ht(){if(dt===null){var r=ze.alternate;r=r!==null?r.memoizedState:null}else r=dt.next;var s=Ft===null?ze.memoizedState:Ft.next;if(s!==null)Ft=s,dt=r;else{if(r===null)throw ze.alternate===null?Error(i(467)):Error(i(310));dt=r,r={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ft===null?ze.memoizedState=Ft=r:Ft=Ft.next=r}return Ft}function Bp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tu(r){var s=bu;return bu+=1,$o===null&&($o=[]),r=av($o,r,s),s=ze,(Ft===null?s.memoizedState:Ft.next)===null&&(s=s.alternate,q.H=s===null||s.memoizedState===null?Wv:Qv),r}function Oh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Tu(r);if(r.$$typeof===N)return In(r)}throw Error(i(438,String(r)))}function zp(r){var s=null,o=ze.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=ze.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Bp(),ze.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=U;return s.index++,o}function Gi(r,s){return typeof s=="function"?s(r):s}function Mh(r){var s=Ht();return $p(s,dt,r)}function $p(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=b=null,L=null,K=s,ie=!1;do{var le=K.lane&-536870913;if(le!==K.lane?(Ze&le)===le:(Cs&le)===le){var X=K.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),le===Uo&&(ie=!0);else if((Cs&X)===X){K=K.next,X===Uo&&(ie=!0);continue}else le={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(S=L=le,b=m):L=L.next=le,ze.lanes|=X,Ps|=X;le=K.action,Fa&&o(m,le),m=K.hasEagerState?K.eagerState:o(m,le)}else X={lane:le,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(S=L=X,b=m):L=L.next=X,ze.lanes|=le,Ps|=le;K=K.next}while(K!==null&&K!==s);if(L===null?b=m:L.next=S,!er(m,r.memoizedState)&&(fn=!0,ie&&(o=qo,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=L,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Fp(r){var s=Ht(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do m=r(m,b.action),b=b.next;while(b!==f);er(m,s.memoizedState)||(fn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function pv(r,s,o){var u=ze,f=Ht(),m=rt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!er((dt||f).memoizedState,o);b&&(f.memoizedState=o,fn=!0),f=f.queue;var S=yv.bind(null,u,f,r);if(Su(2048,8,S,[r]),f.getSnapshot!==s||b||Ft!==null&&Ft.memoizedState.tag&1){if(u.flags|=2048,Fo(9,Nh(),gv.bind(null,u,f,o,s),null),wt===null)throw Error(i(349));m||(Cs&124)!==0||mv(u,s,o)}return o}function mv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=ze.updateQueue,s===null?(s=Bp(),ze.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function gv(r,s,o,u){s.value=o,s.getSnapshot=u,_v(s)&&vv(r)}function yv(r,s,o){return o(function(){_v(s)&&vv(r)})}function _v(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!er(r,o)}catch{return!0}}function vv(r){var s=Po(r,2);s!==null&&ar(s,r,2)}function Hp(r){var s=Fn();if(typeof r=="function"){var o=r;if(r=o(),Fa){Ln(!0);try{o()}finally{Ln(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:r},s}function Ev(r,s,o,u){return r.baseState=o,$p(r,dt,typeof u=="function"?u:Gi)}function jA(r,s,o,u,f){if(Vh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};q.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,wv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function wv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=q.T,b={};q.T=b;try{var S=o(f,u),L=q.S;L!==null&&L(b,S),bv(r,s,S)}catch(K){Gp(r,s,K)}finally{q.T=m}}else try{m=o(f,u),bv(r,s,m)}catch(K){Gp(r,s,K)}}function bv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Tv(r,s,u)},function(u){return Gp(r,s,u)}):Tv(r,s,o)}function Tv(r,s,o){s.status="fulfilled",s.value=o,Sv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,wv(r,o)))}function Gp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Sv(s),s=s.next;while(s!==u)}r.action=null}function Sv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function xv(r,s){return s}function Av(r,s){if(rt){var o=wt.formState;if(o!==null){e:{var u=ze;if(rt){if(Mt){t:{for(var f=Mt,m=si;f.nodeType!==8;){if(!m){f=null;break t}if(f=Nr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Mt=Nr(f.nextSibling),u=f.data==="F!";break e}}qa(u)}u=!1}u&&(s=o[0])}}return o=Fn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:s},o.queue=u,o=Hv.bind(null,ze,u),u.dispatch=o,u=Hp(!1),m=Xp.bind(null,ze,!1,u.queue),u=Fn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=jA.bind(null,ze,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Rv(r){var s=Ht();return Cv(s,dt,r)}function Cv(r,s,o){if(s=$p(r,s,xv)[0],r=Mh(Gi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Tu(s)}catch(b){throw b===yu?Rh:b}else u=s;s=Ht();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ze.flags|=2048,Fo(9,Nh(),UA.bind(null,f,o),null)),[u,m,r]}function UA(r,s){r.action=s}function Dv(r){var s=Ht(),o=dt;if(o!==null)return Cv(s,o,r);Ht(),s=s.memoizedState,o=Ht();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Fo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=ze.updateQueue,s===null&&(s=Bp(),ze.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Nh(){return{destroy:void 0,resource:void 0}}function Iv(){return Ht().memoizedState}function Ph(r,s,o,u){var f=Fn();u=u===void 0?null:u,ze.flags|=r,f.memoizedState=Fo(1|s,Nh(),o,u)}function Su(r,s,o,u){var f=Ht();u=u===void 0?null:u;var m=f.memoizedState.inst;dt!==null&&u!==null&&Vp(u,dt.memoizedState.deps)?f.memoizedState=Fo(s,m,o,u):(ze.flags|=r,f.memoizedState=Fo(1|s,m,o,u))}function kv(r,s){Ph(8390656,8,r,s)}function Ov(r,s){Su(2048,8,r,s)}function Mv(r,s){return Su(4,2,r,s)}function Nv(r,s){return Su(4,4,r,s)}function Pv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Vv(r,s,o){o=o!=null?o.concat([r]):null,Su(4,4,Pv.bind(null,s,r),o)}function Yp(){}function Lv(r,s){var o=Ht();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Vp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function jv(r,s){var o=Ht();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Vp(s,u[1]))return u[0];if(u=r(),Fa){Ln(!0);try{r()}finally{Ln(!1)}}return o.memoizedState=[u,s],u}function Wp(r,s,o){return o===void 0||(Cs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=B0(),ze.lanes|=r,Ps|=r,o)}function Uv(r,s,o,u){return er(o,s)?o:Bo.current!==null?(r=Wp(r,o,u),er(r,s)||(fn=!0),r):(Cs&42)===0?(fn=!0,r.memoizedState=o):(r=B0(),ze.lanes|=r,Ps|=r,s)}function qv(r,s,o,u,f){var m=se.p;se.p=m!==0&&8>m?m:8;var b=q.T,S={};q.T=S,Xp(r,!1,s,o);try{var L=f(),K=q.S;if(K!==null&&K(S,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ie=PA(L,u);xu(r,s,ie,sr(r))}else xu(r,s,u,sr(r))}catch(le){xu(r,s,{then:function(){},status:"rejected",reason:le},sr())}finally{se.p=m,q.T=b}}function qA(){}function Qp(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Bv(r).queue;qv(r,f,s,fe,o===null?qA:function(){return zv(r),o(u)})}function Bv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:fe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function zv(r){var s=Bv(r).next.queue;xu(r,s,{},sr())}function Kp(){return In($u)}function $v(){return Ht().memoizedState}function Fv(){return Ht().memoizedState}function BA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=sr();r=As(o);var u=Rs(s,r,o);u!==null&&(ar(u,s,o),vu(u,s,o)),s={cache:Ap()},r.payload=s;return}s=s.return}}function zA(r,s,o){var u=sr();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Vh(r)?Gv(s,o):(o=gp(r,s,o,u),o!==null&&(ar(o,r,u),Yv(o,s,u)))}function Hv(r,s,o){var u=sr();xu(r,s,o,u)}function xu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vh(r))Gv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,S=m(b,o);if(f.hasEagerState=!0,f.eagerState=S,er(S,b))return vh(r,s,f,0),wt===null&&_h(),!1}catch{}finally{}if(o=gp(r,s,f,u),o!==null)return ar(o,r,u),Yv(o,s,u),!0}return!1}function Xp(r,s,o,u){if(u={lane:2,revertLane:Dm(),action:u,hasEagerState:!1,eagerState:null,next:null},Vh(r)){if(s)throw Error(i(479))}else s=gp(r,o,u,2),s!==null&&ar(s,r,2)}function Vh(r){var s=r.alternate;return r===ze||s!==null&&s===ze}function Gv(r,s){zo=Ih=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Yv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,va(r,o)}}var Lh={readContext:In,use:Oh,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut},Wv={readContext:In,use:Oh,useCallback:function(r,s){return Fn().memoizedState=[r,s===void 0?null:s],r},useContext:In,useEffect:kv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Ph(4194308,4,Pv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Ph(4194308,4,r,s)},useInsertionEffect:function(r,s){Ph(4,2,r,s)},useMemo:function(r,s){var o=Fn();s=s===void 0?null:s;var u=r();if(Fa){Ln(!0);try{r()}finally{Ln(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Fn();if(o!==void 0){var f=o(s);if(Fa){Ln(!0);try{o(s)}finally{Ln(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=zA.bind(null,ze,r),[u.memoizedState,r]},useRef:function(r){var s=Fn();return r={current:r},s.memoizedState=r},useState:function(r){r=Hp(r);var s=r.queue,o=Hv.bind(null,ze,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Yp,useDeferredValue:function(r,s){var o=Fn();return Wp(o,r,s)},useTransition:function(){var r=Hp(!1);return r=qv.bind(null,ze,r.queue,!0,!1),Fn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=ze,f=Fn();if(rt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),wt===null)throw Error(i(349));(Ze&124)!==0||mv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,kv(yv.bind(null,u,m,r),[r]),u.flags|=2048,Fo(9,Nh(),gv.bind(null,u,m,o,s),null),o},useId:function(){var r=Fn(),s=wt.identifierPrefix;if(rt){var o=$i,u=zi;o=(u&~(1<<32-ln(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=kh++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=VA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Kp,useFormState:Av,useActionState:Av,useOptimistic:function(r){var s=Fn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Xp.bind(null,ze,!0,o),o.dispatch=s,[r,s]},useMemoCache:zp,useCacheRefresh:function(){return Fn().memoizedState=BA.bind(null,ze)}},Qv={readContext:In,use:Oh,useCallback:Lv,useContext:In,useEffect:Ov,useImperativeHandle:Vv,useInsertionEffect:Mv,useLayoutEffect:Nv,useMemo:jv,useReducer:Mh,useRef:Iv,useState:function(){return Mh(Gi)},useDebugValue:Yp,useDeferredValue:function(r,s){var o=Ht();return Uv(o,dt.memoizedState,r,s)},useTransition:function(){var r=Mh(Gi)[0],s=Ht().memoizedState;return[typeof r=="boolean"?r:Tu(r),s]},useSyncExternalStore:pv,useId:$v,useHostTransitionStatus:Kp,useFormState:Rv,useActionState:Rv,useOptimistic:function(r,s){var o=Ht();return Ev(o,dt,r,s)},useMemoCache:zp,useCacheRefresh:Fv},$A={readContext:In,use:Oh,useCallback:Lv,useContext:In,useEffect:Ov,useImperativeHandle:Vv,useInsertionEffect:Mv,useLayoutEffect:Nv,useMemo:jv,useReducer:Fp,useRef:Iv,useState:function(){return Fp(Gi)},useDebugValue:Yp,useDeferredValue:function(r,s){var o=Ht();return dt===null?Wp(o,r,s):Uv(o,dt.memoizedState,r,s)},useTransition:function(){var r=Fp(Gi)[0],s=Ht().memoizedState;return[typeof r=="boolean"?r:Tu(r),s]},useSyncExternalStore:pv,useId:$v,useHostTransitionStatus:Kp,useFormState:Dv,useActionState:Dv,useOptimistic:function(r,s){var o=Ht();return dt!==null?Ev(o,dt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:zp,useCacheRefresh:Fv},Ho=null,Au=0;function jh(r){var s=Au;return Au+=1,Ho===null&&(Ho=[]),av(Ho,r,s)}function Ru(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Uh(r,s){throw s.$$typeof===E?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Kv(r){var s=r._init;return s(r._payload)}function Xv(r){function s(Y,$){if(r){var Q=Y.deletions;Q===null?(Y.deletions=[$],Y.flags|=16):Q.push($)}}function o(Y,$){if(!r)return null;for(;$!==null;)s(Y,$),$=$.sibling;return null}function u(Y){for(var $=new Map;Y!==null;)Y.key!==null?$.set(Y.key,Y):$.set(Y.index,Y),Y=Y.sibling;return $}function f(Y,$){return Y=Bi(Y,$),Y.index=0,Y.sibling=null,Y}function m(Y,$,Q){return Y.index=Q,r?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<$?(Y.flags|=67108866,$):Q):(Y.flags|=67108866,$)):(Y.flags|=1048576,$)}function b(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function S(Y,$,Q,ae){return $===null||$.tag!==6?($=_p(Q,Y.mode,ae),$.return=Y,$):($=f($,Q),$.return=Y,$)}function L(Y,$,Q,ae){var we=Q.type;return we===P?ie(Y,$,Q.props.children,ae,Q.key):$!==null&&($.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===C&&Kv(we)===$.type)?($=f($,Q.props),Ru($,Q),$.return=Y,$):($=wh(Q.type,Q.key,Q.props,null,Y.mode,ae),Ru($,Q),$.return=Y,$)}function K(Y,$,Q,ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==Q.containerInfo||$.stateNode.implementation!==Q.implementation?($=vp(Q,Y.mode,ae),$.return=Y,$):($=f($,Q.children||[]),$.return=Y,$)}function ie(Y,$,Q,ae,we){return $===null||$.tag!==7?($=Va(Q,Y.mode,ae,we),$.return=Y,$):($=f($,Q),$.return=Y,$)}function le(Y,$,Q){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=_p(""+$,Y.mode,Q),$.return=Y,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case T:return Q=wh($.type,$.key,$.props,null,Y.mode,Q),Ru(Q,$),Q.return=Y,Q;case I:return $=vp($,Y.mode,Q),$.return=Y,$;case C:var ae=$._init;return $=ae($._payload),le(Y,$,Q)}if(ne($)||R($))return $=Va($,Y.mode,Q,null),$.return=Y,$;if(typeof $.then=="function")return le(Y,jh($),Q);if($.$$typeof===N)return le(Y,xh(Y,$),Q);Uh(Y,$)}return null}function X(Y,$,Q,ae){var we=$!==null?$.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return we!==null?null:S(Y,$,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:return Q.key===we?L(Y,$,Q,ae):null;case I:return Q.key===we?K(Y,$,Q,ae):null;case C:return we=Q._init,Q=we(Q._payload),X(Y,$,Q,ae)}if(ne(Q)||R(Q))return we!==null?null:ie(Y,$,Q,ae,null);if(typeof Q.then=="function")return X(Y,$,jh(Q),ae);if(Q.$$typeof===N)return X(Y,$,xh(Y,Q),ae);Uh(Y,Q)}return null}function Z(Y,$,Q,ae,we){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return Y=Y.get(Q)||null,S($,Y,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case T:return Y=Y.get(ae.key===null?Q:ae.key)||null,L($,Y,ae,we);case I:return Y=Y.get(ae.key===null?Q:ae.key)||null,K($,Y,ae,we);case C:var $e=ae._init;return ae=$e(ae._payload),Z(Y,$,Q,ae,we)}if(ne(ae)||R(ae))return Y=Y.get(Q)||null,ie($,Y,ae,we,null);if(typeof ae.then=="function")return Z(Y,$,Q,jh(ae),we);if(ae.$$typeof===N)return Z(Y,$,Q,xh($,ae),we);Uh($,ae)}return null}function Ne(Y,$,Q,ae){for(var we=null,$e=null,xe=$,Ie=$=0,pn=null;xe!==null&&Ie<Q.length;Ie++){xe.index>Ie?(pn=xe,xe=null):pn=xe.sibling;var tt=X(Y,xe,Q[Ie],ae);if(tt===null){xe===null&&(xe=pn);break}r&&xe&&tt.alternate===null&&s(Y,xe),$=m(tt,$,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt,xe=pn}if(Ie===Q.length)return o(Y,xe),rt&&ja(Y,Ie),we;if(xe===null){for(;Ie<Q.length;Ie++)xe=le(Y,Q[Ie],ae),xe!==null&&($=m(xe,$,Ie),$e===null?we=xe:$e.sibling=xe,$e=xe);return rt&&ja(Y,Ie),we}for(xe=u(xe);Ie<Q.length;Ie++)pn=Z(xe,Y,Ie,Q[Ie],ae),pn!==null&&(r&&pn.alternate!==null&&xe.delete(pn.key===null?Ie:pn.key),$=m(pn,$,Ie),$e===null?we=pn:$e.sibling=pn,$e=pn);return r&&xe.forEach(function(Fs){return s(Y,Fs)}),rt&&ja(Y,Ie),we}function De(Y,$,Q,ae){if(Q==null)throw Error(i(151));for(var we=null,$e=null,xe=$,Ie=$=0,pn=null,tt=Q.next();xe!==null&&!tt.done;Ie++,tt=Q.next()){xe.index>Ie?(pn=xe,xe=null):pn=xe.sibling;var Fs=X(Y,xe,tt.value,ae);if(Fs===null){xe===null&&(xe=pn);break}r&&xe&&Fs.alternate===null&&s(Y,xe),$=m(Fs,$,Ie),$e===null?we=Fs:$e.sibling=Fs,$e=Fs,xe=pn}if(tt.done)return o(Y,xe),rt&&ja(Y,Ie),we;if(xe===null){for(;!tt.done;Ie++,tt=Q.next())tt=le(Y,tt.value,ae),tt!==null&&($=m(tt,$,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt);return rt&&ja(Y,Ie),we}for(xe=u(xe);!tt.done;Ie++,tt=Q.next())tt=Z(xe,Y,Ie,tt.value,ae),tt!==null&&(r&&tt.alternate!==null&&xe.delete(tt.key===null?Ie:tt.key),$=m(tt,$,Ie),$e===null?we=tt:$e.sibling=tt,$e=tt);return r&&xe.forEach(function(FR){return s(Y,FR)}),rt&&ja(Y,Ie),we}function mt(Y,$,Q,ae){if(typeof Q=="object"&&Q!==null&&Q.type===P&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:e:{for(var we=Q.key;$!==null;){if($.key===we){if(we=Q.type,we===P){if($.tag===7){o(Y,$.sibling),ae=f($,Q.props.children),ae.return=Y,Y=ae;break e}}else if($.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===C&&Kv(we)===$.type){o(Y,$.sibling),ae=f($,Q.props),Ru(ae,Q),ae.return=Y,Y=ae;break e}o(Y,$);break}else s(Y,$);$=$.sibling}Q.type===P?(ae=Va(Q.props.children,Y.mode,ae,Q.key),ae.return=Y,Y=ae):(ae=wh(Q.type,Q.key,Q.props,null,Y.mode,ae),Ru(ae,Q),ae.return=Y,Y=ae)}return b(Y);case I:e:{for(we=Q.key;$!==null;){if($.key===we)if($.tag===4&&$.stateNode.containerInfo===Q.containerInfo&&$.stateNode.implementation===Q.implementation){o(Y,$.sibling),ae=f($,Q.children||[]),ae.return=Y,Y=ae;break e}else{o(Y,$);break}else s(Y,$);$=$.sibling}ae=vp(Q,Y.mode,ae),ae.return=Y,Y=ae}return b(Y);case C:return we=Q._init,Q=we(Q._payload),mt(Y,$,Q,ae)}if(ne(Q))return Ne(Y,$,Q,ae);if(R(Q)){if(we=R(Q),typeof we!="function")throw Error(i(150));return Q=we.call(Q),De(Y,$,Q,ae)}if(typeof Q.then=="function")return mt(Y,$,jh(Q),ae);if(Q.$$typeof===N)return mt(Y,$,xh(Y,Q),ae);Uh(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,$!==null&&$.tag===6?(o(Y,$.sibling),ae=f($,Q),ae.return=Y,Y=ae):(o(Y,$),ae=_p(Q,Y.mode,ae),ae.return=Y,Y=ae),b(Y)):o(Y,$)}return function(Y,$,Q,ae){try{Au=0;var we=mt(Y,$,Q,ae);return Ho=null,we}catch(xe){if(xe===yu||xe===Rh)throw xe;var $e=tr(29,xe,null,Y.mode);return $e.lanes=ae,$e.return=Y,$e}finally{}}}var Go=Xv(!0),Zv=Xv(!1),Tr=te(null),ai=null;function Ds(r){var s=r.alternate;ue(sn,sn.current&1),ue(Tr,r),ai===null&&(s===null||Bo.current!==null||s.memoizedState!==null)&&(ai=r)}function Jv(r){if(r.tag===22){if(ue(sn,sn.current),ue(Tr,r),ai===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(ai=r)}}else Is()}function Is(){ue(sn,sn.current),ue(Tr,Tr.current)}function Yi(r){he(Tr),ai===r&&(ai=null),he(sn)}var sn=te(0);function qh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Bm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Zp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Jp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=sr(),f=As(u);f.payload=s,o!=null&&(f.callback=o),s=Rs(r,f,u),s!==null&&(ar(s,r,u),vu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=sr(),f=As(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Rs(r,f,u),s!==null&&(ar(s,r,u),vu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=sr(),u=As(o);u.tag=2,s!=null&&(u.callback=s),s=Rs(r,u,o),s!==null&&(ar(s,r,o),vu(s,r,o))}};function e0(r,s,o,u,f,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,b):s.prototype&&s.prototype.isPureReactComponent?!uu(o,u)||!uu(f,m):!0}function t0(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Jp.enqueueReplaceState(s,s.state,null)}function Ha(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Bh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function n0(r){Bh(r)}function r0(r){console.error(r)}function i0(r){Bh(r)}function zh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function s0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function em(r,s,o){return o=As(o),o.tag=3,o.payload={element:null},o.callback=function(){zh(r,s)},o}function a0(r){return r=As(r),r.tag=3,r}function o0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){s0(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){s0(s,o,u),typeof f!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function FA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&pu(s,o,f,!0),o=Tr.current,o!==null){switch(o.tag){case 13:return ai===null?Sm():o.alternate===null&&Nt===0&&(Nt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Dp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Am(r,u,f)),!1;case 22:return o.flags|=65536,u===Dp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Am(r,u,f)),!1}throw Error(i(435,o.tag))}return Am(r,u,f),Sm(),!1}if(rt)return s=Tr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==bp&&(r=Error(i(422),{cause:u}),du(vr(r,o)))):(u!==bp&&(s=Error(i(423),{cause:u}),du(vr(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=vr(u,o),f=em(r.stateNode,u,f),Op(r,f),Nt!==4&&(Nt=2)),!1;var m=Error(i(520),{cause:u});if(m=vr(m,o),Nu===null?Nu=[m]:Nu.push(m),Nt!==4&&(Nt=2),s===null)return!0;u=vr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=em(o.stateNode,u,r),Op(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vs===null||!Vs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=a0(f),o0(f,r,o,u),Op(o,f),!1}o=o.return}while(o!==null);return!1}var l0=Error(i(461)),fn=!1;function bn(r,s,o,u){s.child=r===null?Zv(s,null,o,u):Go(s,r.child,o,u)}function u0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var b={};for(var S in u)S!=="ref"&&(b[S]=u[S])}else b=u;return za(s),u=Lp(r,s,o,b,m,f),S=jp(),r!==null&&!fn?(Up(r,s,f),Wi(r,s,f)):(rt&&S&&Ep(s),s.flags|=1,bn(r,s,u,f),s.child)}function c0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!yp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,h0(r,s,m,u,f)):(r=wh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!lm(r,f)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:uu,o(b,u)&&r.ref===s.ref)return Wi(r,s,f)}return s.flags|=1,r=Bi(m,u),r.ref=s.ref,r.return=s,s.child=r}function h0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(uu(m,u)&&r.ref===s.ref)if(fn=!1,s.pendingProps=u=m,lm(r,f))(r.flags&131072)!==0&&(fn=!0);else return s.lanes=r.lanes,Wi(r,s,f)}return tm(r,s,o,u,f)}function f0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return d0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ah(s,m!==null?m.cachePool:null),m!==null?hv(s,m):Np(),Jv(s);else return s.lanes=s.childLanes=536870912,d0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Ah(s,m.cachePool),hv(s,m),Is(),s.memoizedState=null):(r!==null&&Ah(s,null),Np(),Is());return bn(r,s,f,o),s.child}function d0(r,s,o,u){var f=Cp();return f=f===null?null:{parent:rn._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Ah(s,null),Np(),Jv(s),r!==null&&pu(r,s,u,!0),null}function $h(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function tm(r,s,o,u,f){return za(s),o=Lp(r,s,o,u,void 0,f),u=jp(),r!==null&&!fn?(Up(r,s,f),Wi(r,s,f)):(rt&&u&&Ep(s),s.flags|=1,bn(r,s,o,f),s.child)}function p0(r,s,o,u,f,m){return za(s),s.updateQueue=null,o=dv(s,u,o,f),fv(r),u=jp(),r!==null&&!fn?(Up(r,s,m),Wi(r,s,m)):(rt&&u&&Ep(s),s.flags|=1,bn(r,s,o,m),s.child)}function m0(r,s,o,u,f){if(za(s),s.stateNode===null){var m=Vo,b=o.contextType;typeof b=="object"&&b!==null&&(m=In(b)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Ip(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?In(b):Vo,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Zp(s,o,b,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Jp.enqueueReplaceState(m,m.state,null),wu(s,u,m,f),Eu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,L=Ha(o,S);m.props=L;var K=m.context,ie=o.contextType;b=Vo,typeof ie=="object"&&ie!==null&&(b=In(ie));var le=o.getDerivedStateFromProps;ie=typeof le=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||K!==b)&&t0(s,m,u,b),xs=!1;var X=s.memoizedState;m.state=X,wu(s,u,m,f),Eu(),K=s.memoizedState,S||X!==K||xs?(typeof le=="function"&&(Zp(s,o,le,u),K=s.memoizedState),(L=xs||e0(s,o,L,u,X,K,b))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=K),m.props=u,m.state=K,m.context=b,u=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,kp(r,s),b=s.memoizedProps,ie=Ha(o,b),m.props=ie,le=s.pendingProps,X=m.context,K=o.contextType,L=Vo,typeof K=="object"&&K!==null&&(L=In(K)),S=o.getDerivedStateFromProps,(K=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==le||X!==L)&&t0(s,m,u,L),xs=!1,X=s.memoizedState,m.state=X,wu(s,u,m,f),Eu();var Z=s.memoizedState;b!==le||X!==Z||xs||r!==null&&r.dependencies!==null&&Sh(r.dependencies)?(typeof S=="function"&&(Zp(s,o,S,u),Z=s.memoizedState),(ie=xs||e0(s,o,ie,u,X,Z,L)||r!==null&&r.dependencies!==null&&Sh(r.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Z,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Z,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),m.props=u,m.state=Z,m.context=L,u=ie):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,$h(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=Go(s,r.child,null,f),s.child=Go(s,null,o,f)):bn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Wi(r,s,f),r}function g0(r,s,o,u){return fu(),s.flags|=256,bn(r,s,o,u),s.child}var nm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rm(r){return{baseLanes:r,cachePool:rv()}}function im(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=Sr),r}function y0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(sn.current&2)!==0),b&&(f=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(rt){if(f?Ds(s):Is(),rt){var S=Mt,L;if(L=S){e:{for(L=S,S=si;L.nodeType!==8;){if(!S){S=null;break e}if(L=Nr(L.nextSibling),L===null){S=null;break e}}S=L}S!==null?(s.memoizedState={dehydrated:S,treeContext:La!==null?{id:zi,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},L=tr(18,null,null,0),L.stateNode=S,L.return=s,s.child=L,Bn=s,Mt=null,L=!0):L=!1}L||qa(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Bm(S)?s.lanes=32:s.lanes=536870912,null;Yi(s)}return S=u.children,u=u.fallback,f?(Is(),f=s.mode,S=Fh({mode:"hidden",children:S},f),u=Va(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=rm(o),f.childLanes=im(r,b,o),s.memoizedState=nm,u):(Ds(s),sm(s,S))}if(L=r.memoizedState,L!==null&&(S=L.dehydrated,S!==null)){if(m)s.flags&256?(Ds(s),s.flags&=-257,s=am(r,s,o)):s.memoizedState!==null?(Is(),s.child=r.child,s.flags|=128,s=null):(Is(),f=u.fallback,S=s.mode,u=Fh({mode:"visible",children:u.children},S),f=Va(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,Go(s,r.child,null,o),u=s.child,u.memoizedState=rm(o),u.childLanes=im(r,b,o),s.memoizedState=nm,s=f);else if(Ds(s),Bm(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var K=b.dgst;b=K,u=Error(i(419)),u.stack="",u.digest=b,du({value:u,source:null,stack:null}),s=am(r,s,o)}else if(fn||pu(r,s,o,!1),b=(o&r.childLanes)!==0,fn||b){if(b=wt,b!==null&&(u=o&-o,u=(u&42)!==0?1:Wr(u),u=(u&(b.suspendedLanes|o))!==0?0:u,u!==0&&u!==L.retryLane))throw L.retryLane=u,Po(r,u),ar(b,r,u),l0;S.data==="$?"||Sm(),s=am(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Mt=Nr(S.nextSibling),Bn=s,rt=!0,Ua=null,si=!1,r!==null&&(wr[br++]=zi,wr[br++]=$i,wr[br++]=La,zi=r.id,$i=r.overflow,La=s),s=sm(s,u.children),s.flags|=4096);return s}return f?(Is(),f=u.fallback,S=s.mode,L=r.child,K=L.sibling,u=Bi(L,{mode:"hidden",children:u.children}),u.subtreeFlags=L.subtreeFlags&65011712,K!==null?f=Bi(K,f):(f=Va(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=rm(o):(L=S.cachePool,L!==null?(K=rn._currentValue,L=L.parent!==K?{parent:K,pool:K}:L):L=rv(),S={baseLanes:S.baseLanes|o,cachePool:L}),f.memoizedState=S,f.childLanes=im(r,b,o),s.memoizedState=nm,u):(Ds(s),o=r.child,r=o.sibling,o=Bi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function sm(r,s){return s=Fh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Fh(r,s){return r=tr(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function am(r,s,o){return Go(s,r.child,null,o),r=sm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function _0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Sp(r.return,s,o)}function om(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function v0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(bn(r,s,u.children,o),u=sn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&_0(r,o,s);else if(r.tag===19)_0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ue(sn,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&qh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),om(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&qh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}om(s,!0,o,null,m);break;case"together":om(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wi(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),Ps|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(pu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Bi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Bi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function lm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Sh(r)))}function HA(r,s,o){switch(s.tag){case 3:Fe(s,s.stateNode.containerInfo),Ss(s,rn,r.memoizedState.cache),fu();break;case 27:case 5:Dn(s);break;case 4:Fe(s,s.stateNode.containerInfo);break;case 10:Ss(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ds(s),s.flags|=128,null):(o&s.child.childLanes)!==0?y0(r,s,o):(Ds(s),r=Wi(r,s,o),r!==null?r.sibling:null);Ds(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(pu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return v0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ue(sn,sn.current),u)break;return null;case 22:case 23:return s.lanes=0,f0(r,s,o);case 24:Ss(s,rn,r.memoizedState.cache)}return Wi(r,s,o)}function E0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)fn=!0;else{if(!lm(r,o)&&(s.flags&128)===0)return fn=!1,HA(r,s,o);fn=(r.flags&131072)!==0}else fn=!1,rt&&(s.flags&1048576)!==0&&K_(s,Th,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")yp(u)?(r=Ha(u,r),s.tag=1,s=m0(null,s,u,r,o)):(s.tag=0,s=tm(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===J){s.tag=11,s=u0(null,s,u,r,o);break e}else if(f===D){s.tag=14,s=c0(null,s,u,r,o);break e}}throw s=ve(u)||u,Error(i(306,s,""))}}return s;case 0:return tm(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ha(u,s.pendingProps),m0(r,s,u,f,o);case 3:e:{if(Fe(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,kp(r,s),wu(s,u,null,o);var b=s.memoizedState;if(u=b.cache,Ss(s,rn,u),u!==m.cache&&xp(s,[rn],o,!0),Eu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=g0(r,s,u,o);break e}else if(u!==f){f=vr(Error(i(424)),s),du(f),s=g0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Mt=Nr(r.firstChild),Bn=s,rt=!0,Ua=null,si=!0,o=Zv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(fu(),u===f){s=Wi(r,s,o);break e}bn(r,s,u,o)}s=s.child}return s;case 26:return $h(r,s),r===null?(o=SE(s.type,null,s.pendingProps,null))?s.memoizedState=o:rt||(o=s.type,r=s.pendingProps,u=sf(Te.current).createElement(o),u[en]=s,u[zt]=r,Sn(u,o,r),jt(u),s.stateNode=u):s.memoizedState=SE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Dn(s),r===null&&rt&&(u=s.stateNode=wE(s.type,s.pendingProps,Te.current),Bn=s,si=!0,f=Mt,Us(s.type)?(zm=f,Mt=Nr(u.firstChild)):Mt=f),bn(r,s,s.pendingProps.children,o),$h(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&rt&&((f=u=Mt)&&(u=vR(u,s.type,s.pendingProps,si),u!==null?(s.stateNode=u,Bn=s,Mt=Nr(u.firstChild),si=!1,f=!0):f=!1),f||qa(s)),Dn(s),f=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,u=m.children,jm(f,m)?u=null:b!==null&&jm(f,b)&&(s.flags|=32),s.memoizedState!==null&&(f=Lp(r,s,LA,null,null,o),$u._currentValue=f),$h(r,s),bn(r,s,u,o),s.child;case 6:return r===null&&rt&&((r=o=Mt)&&(o=ER(o,s.pendingProps,si),o!==null?(s.stateNode=o,Bn=s,Mt=null,r=!0):r=!1),r||qa(s)),null;case 13:return y0(r,s,o);case 4:return Fe(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Go(s,null,u,o):bn(r,s,u,o),s.child;case 11:return u0(r,s,s.type,s.pendingProps,o);case 7:return bn(r,s,s.pendingProps,o),s.child;case 8:return bn(r,s,s.pendingProps.children,o),s.child;case 12:return bn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Ss(s,s.type,u.value),bn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,za(s),f=In(f),u=u(f),s.flags|=1,bn(r,s,u,o),s.child;case 14:return c0(r,s,s.type,s.pendingProps,o);case 15:return h0(r,s,s.type,s.pendingProps,o);case 19:return v0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Fh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Bi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return f0(r,s,o);case 24:return za(s),u=In(rn),r===null?(f=Cp(),f===null&&(f=wt,m=Ap(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},Ip(s),Ss(s,rn,f)):((r.lanes&o)!==0&&(kp(r,s),wu(s,null,null,o),Eu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ss(s,rn,u)):(u=m.cache,Ss(s,rn,u),u!==f.cache&&xp(s,[rn],o,!0))),bn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Qi(r){r.flags|=4}function w0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!DE(s)){if(s=Tr.current,s!==null&&((Ze&4194048)===Ze?ai!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||s!==ai))throw _u=Dp,iv;r.flags|=8192}}function Hh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?st():536870912,r.lanes|=s,Ko|=s)}function Cu(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function It(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function GA(r,s,o){var u=s.pendingProps;switch(wp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(s),null;case 1:return It(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Hi(rn),Tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(hu(s)?Qi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,J_())),It(s),null;case 26:return o=s.memoizedState,r===null?(Qi(s),o!==null?(It(s),w0(s,o)):(It(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Qi(s),It(s),w0(s,o)):(It(s),s.flags&=-16777217):(r.memoizedProps!==u&&Qi(s),It(s),s.flags&=-16777217),null;case 27:pe(s),o=Te.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}r=_e.current,hu(s)?X_(s):(r=wE(f,u,o),s.stateNode=r,Qi(s))}return It(s),null;case 5:if(pe(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return It(s),null}if(r=_e.current,hu(s))X_(s);else{switch(f=sf(Te.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[en]=s,r[zt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(Sn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Qi(s)}}return It(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&Qi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=Te.current,hu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[en]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||pE(r.nodeValue,o)),r||qa(s)}else r=sf(r).createTextNode(u),r[en]=s,s.stateNode=r}return It(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=hu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[en]=s}else fu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;It(s),f=!1}else f=J_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Yi(s),s):(Yi(s),null)}if(Yi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Hh(s,s.updateQueue),It(s),null;case 4:return Tt(),r===null&&Mm(s.stateNode.containerInfo),It(s),null;case 10:return Hi(s.type),It(s),null;case 19:if(he(sn),f=s.memoizedState,f===null)return It(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)Cu(f,!1);else{if(Nt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=qh(r),m!==null){for(s.flags|=128,Cu(f,!1),r=m.updateQueue,s.updateQueue=r,Hh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)Q_(o,r),o=o.sibling;return ue(sn,sn.current&1|2),s.child}r=r.sibling}f.tail!==null&&Lt()>Wh&&(s.flags|=128,u=!0,Cu(f,!1),s.lanes=4194304)}else{if(!u)if(r=qh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Hh(s,r),Cu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!rt)return It(s),null}else 2*Lt()-f.renderingStartTime>Wh&&o!==536870912&&(s.flags|=128,u=!0,Cu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Lt(),s.sibling=null,r=sn.current,ue(sn,u?r&1|2:r&1),s):(It(s),null);case 22:case 23:return Yi(s),Pp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(It(s),s.subtreeFlags&6&&(s.flags|=8192)):It(s),o=s.updateQueue,o!==null&&Hh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&he($a),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Hi(rn),It(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function YA(r,s){switch(wp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Hi(rn),Tt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return pe(s),null;case 13:if(Yi(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));fu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return he(sn),null;case 4:return Tt(),null;case 10:return Hi(s.type),null;case 22:case 23:return Yi(s),Pp(),r!==null&&he($a),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Hi(rn),null;case 25:return null;default:return null}}function b0(r,s){switch(wp(s),s.tag){case 3:Hi(rn),Tt();break;case 26:case 27:case 5:pe(s);break;case 4:Tt();break;case 13:Yi(s);break;case 19:he(sn);break;case 10:Hi(s.type);break;case 22:case 23:Yi(s),Pp(),r!==null&&he($a);break;case 24:Hi(rn)}}function Du(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==f)}}catch(S){_t(s,s.return,S)}}function ks(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var b=u.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,f=s;var L=o,K=S;try{K()}catch(ie){_t(f,L,ie)}}}u=u.next}while(u!==m)}}catch(ie){_t(s,s.return,ie)}}function T0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{cv(s,o)}catch(u){_t(r,r.return,u)}}}function S0(r,s,o){o.props=Ha(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){_t(r,s,u)}}function Iu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){_t(r,s,f)}}function oi(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){_t(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){_t(r,s,f)}else o.current=null}function x0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){_t(r,r.return,f)}}function um(r,s,o){try{var u=r.stateNode;pR(u,r.type,o,s),u[zt]=s}catch(f){_t(r,r.return,f)}}function A0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Us(r.type)||r.tag===4}function cm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||A0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Us(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hm(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rf));else if(u!==4&&(u===27&&Us(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(hm(r,s,o),r=r.sibling;r!==null;)hm(r,s,o),r=r.sibling}function Gh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&Us(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Gh(r,s,o),r=r.sibling;r!==null;)Gh(r,s,o),r=r.sibling}function R0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Sn(s,u,o),s[en]=r,s[zt]=o}catch(m){_t(r,r.return,m)}}var Ki=!1,qt=!1,fm=!1,C0=typeof WeakSet=="function"?WeakSet:Set,dn=null;function WA(r,s){if(r=r.containerInfo,Vm=hf,r=U_(r),cp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,S=-1,L=-1,K=0,ie=0,le=r,X=null;t:for(;;){for(var Z;le!==o||f!==0&&le.nodeType!==3||(S=b+f),le!==m||u!==0&&le.nodeType!==3||(L=b+u),le.nodeType===3&&(b+=le.nodeValue.length),(Z=le.firstChild)!==null;)X=le,le=Z;for(;;){if(le===r)break t;if(X===o&&++K===f&&(S=b),X===m&&++ie===u&&(L=b),(Z=le.nextSibling)!==null)break;le=X,X=le.parentNode}le=Z}o=S===-1||L===-1?null:{start:S,end:L}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lm={focusedElem:r,selectionRange:o},hf=!1,dn=s;dn!==null;)if(s=dn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,dn=r;else for(;dn!==null;){switch(s=dn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ne=Ha(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ne,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(De){_t(o,o.return,De)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)qm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":qm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,dn=r;break}dn=s.return}}function D0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Os(r,o),u&4&&Du(5,o);break;case 1:if(Os(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){_t(o,o.return,b)}else{var f=Ha(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){_t(o,o.return,b)}}u&64&&T0(o),u&512&&Iu(o,o.return);break;case 3:if(Os(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{cv(r,s)}catch(b){_t(o,o.return,b)}}break;case 27:s===null&&u&4&&R0(o);case 26:case 5:Os(r,o),s===null&&u&4&&x0(o),u&512&&Iu(o,o.return);break;case 12:Os(r,o);break;case 13:Os(r,o),u&4&&O0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=rR.bind(null,o),wR(r,o))));break;case 22:if(u=o.memoizedState!==null||Ki,!u){s=s!==null&&s.memoizedState!==null||qt,f=Ki;var m=qt;Ki=u,(qt=s)&&!m?Ms(r,o,(o.subtreeFlags&8772)!==0):Os(r,o),Ki=f,qt=m}break;case 30:break;default:Os(r,o)}}function I0(r){var s=r.alternate;s!==null&&(r.alternate=null,I0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Es(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Rt=null,Hn=!1;function Xi(r,s,o){for(o=o.child;o!==null;)k0(r,s,o),o=o.sibling}function k0(r,s,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(xt,o)}catch{}switch(o.tag){case 26:qt||oi(o,s),Xi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:qt||oi(o,s);var u=Rt,f=Hn;Us(o.type)&&(Rt=o.stateNode,Hn=!1),Xi(r,s,o),Uu(o.stateNode),Rt=u,Hn=f;break;case 5:qt||oi(o,s);case 6:if(u=Rt,f=Hn,Rt=null,Xi(r,s,o),Rt=u,Hn=f,Rt!==null)if(Hn)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(o.stateNode)}catch(m){_t(o,s,m)}else try{Rt.removeChild(o.stateNode)}catch(m){_t(o,s,m)}break;case 18:Rt!==null&&(Hn?(r=Rt,vE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Yu(r)):vE(Rt,o.stateNode));break;case 4:u=Rt,f=Hn,Rt=o.stateNode.containerInfo,Hn=!0,Xi(r,s,o),Rt=u,Hn=f;break;case 0:case 11:case 14:case 15:qt||ks(2,o,s),qt||ks(4,o,s),Xi(r,s,o);break;case 1:qt||(oi(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&S0(o,s,u)),Xi(r,s,o);break;case 21:Xi(r,s,o);break;case 22:qt=(u=qt)||o.memoizedState!==null,Xi(r,s,o),qt=u;break;default:Xi(r,s,o)}}function O0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Yu(r)}catch(o){_t(s,s.return,o)}}function QA(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new C0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new C0),s;default:throw Error(i(435,r.tag))}}function dm(r,s){var o=QA(r);s.forEach(function(u){var f=iR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function nr(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,b=s,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(Us(S.type)){Rt=S.stateNode,Hn=!1;break e}break;case 5:Rt=S.stateNode,Hn=!1;break e;case 3:case 4:Rt=S.stateNode.containerInfo,Hn=!0;break e}S=S.return}if(Rt===null)throw Error(i(160));k0(m,b,f),Rt=null,Hn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)M0(s,r),s=s.sibling}var Mr=null;function M0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:nr(s,r),rr(r),u&4&&(ks(3,r,r.return),Du(3,r),ks(5,r,r.return));break;case 1:nr(s,r),rr(r),u&512&&(qt||o===null||oi(o,o.return)),u&64&&Ki&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Mr;if(nr(s,r),rr(r),u&512&&(qt||o===null||oi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ea]||m[en]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Sn(m,u,o),m[en]=r,jt(m),u=m;break e;case"link":var b=RE("link","href",f).get(u+(o.href||""));if(b){for(var S=0;S<b.length;S++)if(m=b[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(S,1);break t}}m=f.createElement(u),Sn(m,u,o),f.head.appendChild(m);break;case"meta":if(b=RE("meta","content",f).get(u+(o.content||""))){for(S=0;S<b.length;S++)if(m=b[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(S,1);break t}}m=f.createElement(u),Sn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[en]=r,jt(m),u=m}r.stateNode=u}else CE(f,r.type,r.stateNode);else r.stateNode=AE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?CE(f,r.type,r.stateNode):AE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&um(r,r.memoizedProps,o.memoizedProps)}break;case 27:nr(s,r),rr(r),u&512&&(qt||o===null||oi(o,o.return)),o!==null&&u&4&&um(r,r.memoizedProps,o.memoizedProps);break;case 5:if(nr(s,r),rr(r),u&512&&(qt||o===null||oi(o,o.return)),r.flags&32){f=r.stateNode;try{mr(f,"")}catch(Z){_t(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,um(r,f,o!==null?o.memoizedProps:f)),u&1024&&(fm=!0);break;case 6:if(nr(s,r),rr(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){_t(r,r.return,Z)}}break;case 3:if(lf=null,f=Mr,Mr=af(s.containerInfo),nr(s,r),Mr=f,rr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Yu(s.containerInfo)}catch(Z){_t(r,r.return,Z)}fm&&(fm=!1,N0(r));break;case 4:u=Mr,Mr=af(r.stateNode.containerInfo),nr(s,r),rr(r),Mr=u;break;case 12:nr(s,r),rr(r);break;case 13:nr(s,r),rr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(vm=Lt()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dm(r,u)));break;case 22:f=r.memoizedState!==null;var L=o!==null&&o.memoizedState!==null,K=Ki,ie=qt;if(Ki=K||f,qt=ie||L,nr(s,r),qt=ie,Ki=K,rr(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||L||Ki||qt||Ga(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){L=o=s;try{if(m=L.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=L.stateNode;var le=L.memoizedProps.style,X=le!=null&&le.hasOwnProperty("display")?le.display:null;S.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){_t(L,L.return,Z)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=f?"":L.memoizedProps}catch(Z){_t(L,L.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,dm(r,o))));break;case 19:nr(s,r),rr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dm(r,u)));break;case 30:break;case 21:break;default:nr(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(A0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=cm(r);Gh(r,m,f);break;case 5:var b=o.stateNode;o.flags&32&&(mr(b,""),o.flags&=-33);var S=cm(r);Gh(r,S,b);break;case 3:case 4:var L=o.stateNode.containerInfo,K=cm(r);hm(r,K,L);break;default:throw Error(i(161))}}catch(ie){_t(r,r.return,ie)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function N0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;N0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Os(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)D0(r,s.alternate,s),s=s.sibling}function Ga(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ks(4,s,s.return),Ga(s);break;case 1:oi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&S0(s,s.return,o),Ga(s);break;case 27:Uu(s.stateNode);case 26:case 5:oi(s,s.return),Ga(s);break;case 22:s.memoizedState===null&&Ga(s);break;case 30:Ga(s);break;default:Ga(s)}r=r.sibling}}function Ms(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ms(f,m,o),Du(4,m);break;case 1:if(Ms(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){_t(u,u.return,K)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var L=f.shared.hiddenCallbacks;if(L!==null)for(f.shared.hiddenCallbacks=null,f=0;f<L.length;f++)uv(L[f],S)}catch(K){_t(u,u.return,K)}}o&&b&64&&T0(m),Iu(m,m.return);break;case 27:R0(m);case 26:case 5:Ms(f,m,o),o&&u===null&&b&4&&x0(m),Iu(m,m.return);break;case 12:Ms(f,m,o);break;case 13:Ms(f,m,o),o&&b&4&&O0(f,m);break;case 22:m.memoizedState===null&&Ms(f,m,o),Iu(m,m.return);break;case 30:break;default:Ms(f,m,o)}s=s.sibling}}function pm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&mu(o))}function mm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&mu(r))}function li(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)P0(r,s,o,u),s=s.sibling}function P0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:li(r,s,o,u),f&2048&&Du(9,s);break;case 1:li(r,s,o,u);break;case 3:li(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&mu(r)));break;case 12:if(f&2048){li(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,S=m.onPostCommit;typeof S=="function"&&S(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){_t(s,s.return,L)}}else li(r,s,o,u);break;case 13:li(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?li(r,s,o,u):ku(r,s):m._visibility&2?li(r,s,o,u):(m._visibility|=2,Yo(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&pm(b,s);break;case 24:li(r,s,o,u),f&2048&&mm(s.alternate,s);break;default:li(r,s,o,u)}}function Yo(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,S=o,L=u,K=b.flags;switch(b.tag){case 0:case 11:case 15:Yo(m,b,S,L,f),Du(8,b);break;case 23:break;case 22:var ie=b.stateNode;b.memoizedState!==null?ie._visibility&2?Yo(m,b,S,L,f):ku(m,b):(ie._visibility|=2,Yo(m,b,S,L,f)),f&&K&2048&&pm(b.alternate,b);break;case 24:Yo(m,b,S,L,f),f&&K&2048&&mm(b.alternate,b);break;default:Yo(m,b,S,L,f)}s=s.sibling}}function ku(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:ku(o,u),f&2048&&pm(u.alternate,u);break;case 24:ku(o,u),f&2048&&mm(u.alternate,u);break;default:ku(o,u)}s=s.sibling}}var Ou=8192;function Wo(r){if(r.subtreeFlags&Ou)for(r=r.child;r!==null;)V0(r),r=r.sibling}function V0(r){switch(r.tag){case 26:Wo(r),r.flags&Ou&&r.memoizedState!==null&&NR(Mr,r.memoizedState,r.memoizedProps);break;case 5:Wo(r);break;case 3:case 4:var s=Mr;Mr=af(r.stateNode.containerInfo),Wo(r),Mr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ou,Ou=16777216,Wo(r),Ou=s):Wo(r));break;default:Wo(r)}}function L0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Mu(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];dn=u,U0(u,r)}L0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)j0(r),r=r.sibling}function j0(r){switch(r.tag){case 0:case 11:case 15:Mu(r),r.flags&2048&&ks(9,r,r.return);break;case 3:Mu(r);break;case 12:Mu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Yh(r)):Mu(r);break;default:Mu(r)}}function Yh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];dn=u,U0(u,r)}L0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ks(8,s,s.return),Yh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Yh(s));break;default:Yh(s)}r=r.sibling}}function U0(r,s){for(;dn!==null;){var o=dn;switch(o.tag){case 0:case 11:case 15:ks(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:mu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,dn=u;else e:for(o=r;dn!==null;){u=dn;var f=u.sibling,m=u.return;if(I0(u),u===o){dn=null;break e}if(f!==null){f.return=m,dn=f;break e}dn=m}}}var KA={getCacheForType:function(r){var s=In(rn),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},XA=typeof WeakMap=="function"?WeakMap:Map,ut=0,wt=null,He=null,Ze=0,ct=0,ir=null,Ns=!1,Qo=!1,gm=!1,Zi=0,Nt=0,Ps=0,Ya=0,ym=0,Sr=0,Ko=0,Nu=null,Gn=null,_m=!1,vm=0,Wh=1/0,Qh=null,Vs=null,Tn=0,Ls=null,Xo=null,Zo=0,Em=0,wm=null,q0=null,Pu=0,bm=null;function sr(){if((ut&2)!==0&&Ze!==0)return Ze&-Ze;if(q.T!==null){var r=Uo;return r!==0?r:Dm()}return dr()}function B0(){Sr===0&&(Sr=(Ze&536870912)===0||rt?je():536870912);var r=Tr.current;return r!==null&&(r.flags|=32),Sr}function ar(r,s,o){(r===wt&&(ct===2||ct===9)||r.cancelPendingCommit!==null)&&(Jo(r,0),js(r,Ze,Sr,!1)),et(r,o),((ut&2)===0||r!==wt)&&(r===wt&&((ut&2)===0&&(Ya|=o),Nt===4&&js(r,Ze,Sr,!1)),ui(r))}function z0(r,s,o){if((ut&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||Ii(r,s),f=u?eR(r,s):xm(r,s,!0),m=u;do{if(f===0){Qo&&!u&&js(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!ZA(o)){f=xm(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var S=r;f=Nu;var L=S.current.memoizedState.isDehydrated;if(L&&(Jo(S,b).flags|=256),b=xm(S,b,!1),b!==2){if(gm&&!L){S.errorRecoveryDisabledLanes|=m,Ya|=m,f=4;break e}m=Gn,Gn=f,m!==null&&(Gn===null?Gn=m:Gn.push.apply(Gn,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Jo(r,0),js(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:js(u,s,Sr,!Ns);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=vm+300-Lt(),10<f)){if(js(u,s,Sr,!Ns),Di(u,0,!0)!==0)break e;u.timeoutHandle=yE($0.bind(null,u,o,Gn,Qh,_m,s,Sr,Ya,Ko,Ns,m,2,-0,0),f);break e}$0(u,o,Gn,Qh,_m,s,Sr,Ya,Ko,Ns,m,0,-0,0)}}break}while(!0);ui(r)}function $0(r,s,o,u,f,m,b,S,L,K,ie,le,X,Z){if(r.timeoutHandle=-1,le=s.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(zu={stylesheets:null,count:0,unsuspend:MR},V0(s),le=PR(),le!==null)){r.cancelPendingCommit=le(K0.bind(null,r,s,m,o,u,f,b,S,L,ie,1,X,Z)),js(r,m,b,!K);return}K0(r,s,m,o,u,f,b,S,L)}function ZA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!er(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function js(r,s,o,u){s&=~ym,s&=~Ya,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-ln(f),b=1<<m;u[m]=-1,f&=~b}o!==0&&Ue(r,o,s)}function Kh(){return(ut&6)===0?(Vu(0),!1):!0}function Tm(){if(He!==null){if(ct===0)var r=He.return;else r=He,Fi=Ba=null,qp(r),Ho=null,Au=0,r=He;for(;r!==null;)b0(r.alternate,r),r=r.return;He=null}}function Jo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,gR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Tm(),wt=r,He=o=Bi(r.current,null),Ze=s,ct=0,ir=null,Ns=!1,Qo=Ii(r,s),gm=!1,Ko=Sr=ym=Ya=Ps=Nt=0,Gn=Nu=null,_m=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-ln(u),m=1<<f;s|=r[f],u&=~m}return Zi=s,_h(),o}function F0(r,s){ze=null,q.H=Lh,s===yu||s===Rh?(s=ov(),ct=3):s===iv?(s=ov(),ct=4):ct=s===l0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,ir=s,He===null&&(Nt=1,zh(r,vr(s,r.current)))}function H0(){var r=q.H;return q.H=Lh,r===null?Lh:r}function G0(){var r=q.A;return q.A=KA,r}function Sm(){Nt=4,Ns||(Ze&4194048)!==Ze&&Tr.current!==null||(Qo=!0),(Ps&134217727)===0&&(Ya&134217727)===0||wt===null||js(wt,Ze,Sr,!1)}function xm(r,s,o){var u=ut;ut|=2;var f=H0(),m=G0();(wt!==r||Ze!==s)&&(Qh=null,Jo(r,s)),s=!1;var b=Nt;e:do try{if(ct!==0&&He!==null){var S=He,L=ir;switch(ct){case 8:Tm(),b=6;break e;case 3:case 2:case 9:case 6:Tr.current===null&&(s=!0);var K=ct;if(ct=0,ir=null,el(r,S,L,K),o&&Qo){b=0;break e}break;default:K=ct,ct=0,ir=null,el(r,S,L,K)}}JA(),b=Nt;break}catch(ie){F0(r,ie)}while(!0);return s&&r.shellSuspendCounter++,Fi=Ba=null,ut=u,q.H=f,q.A=m,He===null&&(wt=null,Ze=0,_h()),b}function JA(){for(;He!==null;)Y0(He)}function eR(r,s){var o=ut;ut|=2;var u=H0(),f=G0();wt!==r||Ze!==s?(Qh=null,Wh=Lt()+500,Jo(r,s)):Qo=Ii(r,s);e:do try{if(ct!==0&&He!==null){s=He;var m=ir;t:switch(ct){case 1:ct=0,ir=null,el(r,s,m,1);break;case 2:case 9:if(sv(m)){ct=0,ir=null,W0(s);break}s=function(){ct!==2&&ct!==9||wt!==r||(ct=7),ui(r)},m.then(s,s);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:sv(m)?(ct=0,ir=null,W0(s)):(ct=0,ir=null,el(r,s,m,7));break;case 5:var b=null;switch(He.tag){case 26:b=He.memoizedState;case 5:case 27:var S=He;if(!b||DE(b)){ct=0,ir=null;var L=S.sibling;if(L!==null)He=L;else{var K=S.return;K!==null?(He=K,Xh(K)):He=null}break t}}ct=0,ir=null,el(r,s,m,5);break;case 6:ct=0,ir=null,el(r,s,m,6);break;case 8:Tm(),Nt=6;break e;default:throw Error(i(462))}}tR();break}catch(ie){F0(r,ie)}while(!0);return Fi=Ba=null,q.H=u,q.A=f,ut=o,He!==null?0:(wt=null,Ze=0,_h(),Nt)}function tR(){for(;He!==null&&!it();)Y0(He)}function Y0(r){var s=E0(r.alternate,r,Zi);r.memoizedProps=r.pendingProps,s===null?Xh(r):He=s}function W0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=p0(o,s,s.pendingProps,s.type,void 0,Ze);break;case 11:s=p0(o,s,s.pendingProps,s.type.render,s.ref,Ze);break;case 5:qp(s);default:b0(o,s),s=He=Q_(s,Zi),s=E0(o,s,Zi)}r.memoizedProps=r.pendingProps,s===null?Xh(r):He=s}function el(r,s,o,u){Fi=Ba=null,qp(s),Ho=null,Au=0;var f=s.return;try{if(FA(r,f,s,o,Ze)){Nt=1,zh(r,vr(o,r.current)),He=null;return}}catch(m){if(f!==null)throw He=f,m;Nt=1,zh(r,vr(o,r.current)),He=null;return}s.flags&32768?(rt||u===1?r=!0:Qo||(Ze&536870912)!==0?r=!1:(Ns=r=!0,(u===2||u===9||u===3||u===6)&&(u=Tr.current,u!==null&&u.tag===13&&(u.flags|=16384))),Q0(s,r)):Xh(s)}function Xh(r){var s=r;do{if((s.flags&32768)!==0){Q0(s,Ns);return}r=s.return;var o=GA(s.alternate,s,Zi);if(o!==null){He=o;return}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Nt===0&&(Nt=5)}function Q0(r,s){do{var o=YA(r.alternate,r);if(o!==null){o.flags&=32767,He=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){He=r;return}He=r=o}while(r!==null);Nt=6,He=null}function K0(r,s,o,u,f,m,b,S,L){r.cancelPendingCommit=null;do Zh();while(Tn!==0);if((ut&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=mp,un(r,o,m,b,S,L),r===wt&&(He=wt=null,Ze=0),Xo=s,Ls=r,Zo=o,Em=m,wm=f,q0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,sR(Si,function(){return tE(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=q.T,q.T=null,f=se.p,se.p=2,b=ut,ut|=4;try{WA(r,s,o)}finally{ut=b,se.p=f,q.T=u}}Tn=1,X0(),Z0(),J0()}}function X0(){if(Tn===1){Tn=0;var r=Ls,s=Xo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=q.T,q.T=null;var u=se.p;se.p=2;var f=ut;ut|=4;try{M0(s,r);var m=Lm,b=U_(r.containerInfo),S=m.focusedElem,L=m.selectionRange;if(b!==S&&S&&S.ownerDocument&&j_(S.ownerDocument.documentElement,S)){if(L!==null&&cp(S)){var K=L.start,ie=L.end;if(ie===void 0&&(ie=K),"selectionStart"in S)S.selectionStart=K,S.selectionEnd=Math.min(ie,S.value.length);else{var le=S.ownerDocument||document,X=le&&le.defaultView||window;if(X.getSelection){var Z=X.getSelection(),Ne=S.textContent.length,De=Math.min(L.start,Ne),mt=L.end===void 0?De:Math.min(L.end,Ne);!Z.extend&&De>mt&&(b=mt,mt=De,De=b);var Y=L_(S,De),$=L_(S,mt);if(Y&&$&&(Z.rangeCount!==1||Z.anchorNode!==Y.node||Z.anchorOffset!==Y.offset||Z.focusNode!==$.node||Z.focusOffset!==$.offset)){var Q=le.createRange();Q.setStart(Y.node,Y.offset),Z.removeAllRanges(),De>mt?(Z.addRange(Q),Z.extend($.node,$.offset)):(Q.setEnd($.node,$.offset),Z.addRange(Q))}}}}for(le=[],Z=S;Z=Z.parentNode;)Z.nodeType===1&&le.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<le.length;S++){var ae=le[S];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}hf=!!Vm,Lm=Vm=null}finally{ut=f,se.p=u,q.T=o}}r.current=s,Tn=2}}function Z0(){if(Tn===2){Tn=0;var r=Ls,s=Xo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=q.T,q.T=null;var u=se.p;se.p=2;var f=ut;ut|=4;try{D0(r,s.alternate,s)}finally{ut=f,se.p=u,q.T=o}}Tn=3}}function J0(){if(Tn===4||Tn===3){Tn=0,Kn();var r=Ls,s=Xo,o=Zo,u=q0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Tn=5:(Tn=0,Xo=Ls=null,eE(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Vs=null),ys(o),s=s.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(xt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=q.T,f=se.p,se.p=2,q.T=null;try{for(var m=r.onRecoverableError,b=0;b<u.length;b++){var S=u[b];m(S.value,{componentStack:S.stack})}}finally{q.T=s,se.p=f}}(Zo&3)!==0&&Zh(),ui(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===bm?Pu++:(Pu=0,bm=r):Pu=0,Vu(0)}}function eE(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,mu(s)))}function Zh(r){return X0(),Z0(),J0(),tE()}function tE(){if(Tn!==5)return!1;var r=Ls,s=Em;Em=0;var o=ys(Zo),u=q.T,f=se.p;try{se.p=32>o?32:o,q.T=null,o=wm,wm=null;var m=Ls,b=Zo;if(Tn=0,Xo=Ls=null,Zo=0,(ut&6)!==0)throw Error(i(331));var S=ut;if(ut|=4,j0(m.current),P0(m,m.current,b,o),ut=S,Vu(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(xt,m)}catch{}return!0}finally{se.p=f,q.T=u,eE(r,s)}}function nE(r,s,o){s=vr(o,s),s=em(r.stateNode,s,2),r=Rs(r,s,2),r!==null&&(et(r,2),ui(r))}function _t(r,s,o){if(r.tag===3)nE(r,r,o);else for(;s!==null;){if(s.tag===3){nE(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Vs===null||!Vs.has(u))){r=vr(o,r),o=a0(2),u=Rs(s,o,2),u!==null&&(o0(o,u,s,r),et(u,2),ui(u));break}}s=s.return}}function Am(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new XA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(gm=!0,f.add(o),r=nR.bind(null,r,s,o),s.then(r,r))}function nR(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,wt===r&&(Ze&o)===o&&(Nt===4||Nt===3&&(Ze&62914560)===Ze&&300>Lt()-vm?(ut&2)===0&&Jo(r,0):ym|=o,Ko===Ze&&(Ko=0)),ui(r)}function rE(r,s){s===0&&(s=st()),r=Po(r,s),r!==null&&(et(r,s),ui(r))}function rR(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),rE(r,o)}function iR(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),rE(r,o)}function sR(r,s){return be(r,s)}var Jh=null,tl=null,Rm=!1,ef=!1,Cm=!1,Wa=0;function ui(r){r!==tl&&r.next===null&&(tl===null?Jh=tl=r:tl=tl.next=r),ef=!0,Rm||(Rm=!0,oR())}function Vu(r,s){if(!Cm&&ef){Cm=!0;do for(var o=!1,u=Jh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var b=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-ln(42|r)+1)-1,m&=f&~(b&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,oE(u,m))}else m=Ze,m=Di(u,u===wt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ii(u,m)||(o=!0,oE(u,m));u=u.next}while(o);Cm=!1}}function aR(){iE()}function iE(){ef=Rm=!1;var r=0;Wa!==0&&(mR()&&(r=Wa),Wa=0);for(var s=Lt(),o=null,u=Jh;u!==null;){var f=u.next,m=sE(u,s);m===0?(u.next=null,o===null?Jh=f:o.next=f,f===null&&(tl=o)):(o=u,(r!==0||(m&3)!==0)&&(ef=!0)),u=f}Vu(r)}function sE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-ln(m),S=1<<b,L=f[b];L===-1?((S&o)===0||(S&u)!==0)&&(f[b]=gs(S,s)):L<=s&&(r.expiredLanes|=S),m&=~S}if(s=wt,o=Ze,o=Di(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(ct===2||ct===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Pe(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Ii(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Pe(u),ys(o)){case 2:case 8:o=fr;break;case 32:o=Si;break;case 268435456:o=Yr;break;default:o=Si}return u=aE.bind(null,r),o=be(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Pe(u),r.callbackPriority=2,r.callbackNode=null,2}function aE(r,s){if(Tn!==0&&Tn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Zh()&&r.callbackNode!==o)return null;var u=Ze;return u=Di(r,r===wt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(z0(r,u,s),sE(r,Lt()),r.callbackNode!=null&&r.callbackNode===o?aE.bind(null,r):null)}function oE(r,s){if(Zh())return null;z0(r,s,!0)}function oR(){yR(function(){(ut&6)!==0?be(Xn,aR):iE()})}function Dm(){return Wa===0&&(Wa=je()),Wa}function lE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:To(""+r)}function uE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function lR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=lE((f[zt]||null).action),b=u.submitter;b&&(s=(s=b[zt]||null)?lE(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var S=new So("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Wa!==0){var L=b?uE(f,b):new FormData(f);Qp(o,{pending:!0,data:L,method:f.method,action:m},null,L)}}else typeof m=="function"&&(S.preventDefault(),L=b?uE(f,b):new FormData(f),Qp(o,{pending:!0,data:L,method:f.method,action:m},m,L))},currentTarget:f}]})}}for(var Im=0;Im<pp.length;Im++){var km=pp[Im],uR=km.toLowerCase(),cR=km[0].toUpperCase()+km.slice(1);Or(uR,"on"+cR)}Or(z_,"onAnimationEnd"),Or($_,"onAnimationIteration"),Or(F_,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(RA,"onTransitionRun"),Or(CA,"onTransitionStart"),Or(DA,"onTransitionCancel"),Or(H_,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lu));function cE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var b=u.length-1;0<=b;b--){var S=u[b],L=S.instance,K=S.currentTarget;if(S=S.listener,L!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){Bh(ie)}f.currentTarget=null,m=L}else for(b=0;b<u.length;b++){if(S=u[b],L=S.instance,K=S.currentTarget,S=S.listener,L!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ie){Bh(ie)}f.currentTarget=null,m=L}}}}function Ge(r,s){var o=s[Wl];o===void 0&&(o=s[Wl]=new Set);var u=r+"__bubble";o.has(u)||(hE(s,r,2,!1),o.add(u))}function Om(r,s,o){var u=0;s&&(u|=4),hE(o,r,u,s)}var tf="_reactListening"+Math.random().toString(36).slice(2);function Mm(r){if(!r[tf]){r[tf]=!0,Ql.forEach(function(o){o!=="selectionchange"&&(hR.has(o)||Om(o,!1,r),Om(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tf]||(s[tf]=!0,Om("selectionchange",!1,s))}}function hE(r,s,o,u){switch(PE(s)){case 2:var f=jR;break;case 8:f=UR;break;default:f=Ym}o=f.bind(null,s,o,r),f=void 0,!yr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Nm(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var S=u.stateNode.containerInfo;if(S===f)break;if(b===4)for(b=u.return;b!==null;){var L=b.tag;if((L===3||L===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;S!==null;){if(b=ki(S),b===null)return;if(L=b.tag,L===5||L===6||L===26||L===27){u=m=b;continue e}S=S.parentNode}}u=u.return}rh(function(){var K=m,ie=gr(o),le=[];e:{var X=G_.get(r);if(X!==void 0){var Z=So,Ne=r;switch(r){case"keypress":if(ei(o)===0)break e;case"keydown":case"keyup":Z=Io;break;case"focusin":Ne="focus",Z=Ro;break;case"focusout":Ne="blur",Z=Ro;break;case"beforeblur":case"afterblur":Z=Ro;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=_r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=hh;break;case z_:case $_:case F_:Z=Co;break;case H_:Z=dh;break;case"scroll":case"scrollend":Z=ih;break;case"wheel":Z=ko;break;case"copy":case"cut":case"paste":Z=Do;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=ou;break;case"toggle":case"beforetoggle":Z=mh}var De=(s&4)!==0,mt=!De&&(r==="scroll"||r==="scrollend"),Y=De?X!==null?X+"Capture":null:X;De=[];for(var $=K,Q;$!==null;){var ae=$;if(Q=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||Q===null||Y===null||(ae=Ra($,Y),ae!=null&&De.push(ju($,ae,Q))),mt)break;$=$.return}0<De.length&&(X=new Z(X,Ne,null,o,ie),le.push({event:X,listeners:De}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&o!==Pi&&(Ne=o.relatedTarget||o.fromElement)&&(ki(Ne)||Ne[pr]))break e;if((Z||X)&&(X=ie.window===ie?ie:(X=ie.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(Ne=o.relatedTarget||o.toElement,Z=K,Ne=Ne?ki(Ne):null,Ne!==null&&(mt=l(Ne),De=Ne.tag,Ne!==mt||De!==5&&De!==27&&De!==6)&&(Ne=null)):(Z=null,Ne=K),Z!==Ne)){if(De=_r,ae="onMouseLeave",Y="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(De=ou,ae="onPointerLeave",Y="onPointerEnter",$="pointer"),mt=Z==null?X:Kr(Z),Q=Ne==null?X:Kr(Ne),X=new De(ae,$+"leave",Z,o,ie),X.target=mt,X.relatedTarget=Q,ae=null,ki(ie)===K&&(De=new De(Y,$+"enter",Ne,o,ie),De.target=Q,De.relatedTarget=mt,ae=De),mt=ae,Z&&Ne)t:{for(De=Z,Y=Ne,$=0,Q=De;Q;Q=nl(Q))$++;for(Q=0,ae=Y;ae;ae=nl(ae))Q++;for(;0<$-Q;)De=nl(De),$--;for(;0<Q-$;)Y=nl(Y),Q--;for(;$--;){if(De===Y||Y!==null&&De===Y.alternate)break t;De=nl(De),Y=nl(Y)}De=null}else De=null;Z!==null&&fE(le,X,Z,De,!1),Ne!==null&&mt!==null&&fE(le,mt,Ne,De,!0)}}e:{if(X=K?Kr(K):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var we=k_;else if(nn(X))if(O_)we=SA;else{we=bA;var $e=wA}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?K&&eu(K.elementType)&&(we=k_):we=TA;if(we&&(we=we(r,K))){qi(le,we,o,ie);break e}$e&&$e(r,X,K),r==="focusout"&&K&&X.type==="number"&&K.memoizedProps.value!=null&&bs(X,"number",X.value)}switch($e=K?Kr(K):window,r){case"focusin":(nn($e)||$e.contentEditable==="true")&&(Oo=$e,hp=K,cu=null);break;case"focusout":cu=hp=Oo=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,q_(le,o,ie);break;case"selectionchange":if(AA)break;case"keydown":case"keyup":q_(le,o,ie)}var xe;if(ri)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Ke?ee(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(w&&o.locale!=="ko"&&(Ke||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Ke&&(xe=nu()):(Jr=ie,Ts="value"in Jr?Jr.value:Jr.textContent,Ke=!0)),$e=nf(K,Ie),0<$e.length&&(Ie=new su(Ie,r,null,o,ie),le.push({event:Ie,listeners:$e}),xe?Ie.data=xe:(xe=me(o),xe!==null&&(Ie.data=xe)))),(xe=y?tn(r,o):Xe(r,o))&&(Ie=nf(K,"onBeforeInput"),0<Ie.length&&($e=new su("onBeforeInput","beforeinput",null,o,ie),le.push({event:$e,listeners:Ie}),$e.data=xe)),lR(le,r,K,o,ie)}cE(le,s)})}function ju(r,s,o){return{instance:r,listener:s,currentTarget:o}}function nf(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ra(r,o),f!=null&&u.unshift(ju(r,f,m)),f=Ra(r,s),f!=null&&u.push(ju(r,f,m))),r.tag===3)return u;r=r.return}return[]}function nl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function fE(r,s,o,u,f){for(var m=s._reactName,b=[];o!==null&&o!==u;){var S=o,L=S.alternate,K=S.stateNode;if(S=S.tag,L!==null&&L===u)break;S!==5&&S!==26&&S!==27||K===null||(L=K,f?(K=Ra(o,m),K!=null&&b.unshift(ju(o,K,L))):f||(K=Ra(o,m),K!=null&&b.push(ju(o,K,L)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var fR=/\r\n?/g,dR=/\u0000|\uFFFD/g;function dE(r){return(typeof r=="string"?r:""+r).replace(fR,`
`).replace(dR,"")}function pE(r,s){return s=dE(s),dE(r)===s}function rf(){}function pt(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||mr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&mr(r,""+u);break;case"className":Xr(r,"class",u);break;case"tabIndex":Xr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Xr(r,o,u);break;case"style":Jl(r,u,m);break;case"data":if(s!=="object"){Xr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=To(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&pt(r,s,"name",f.name,f,null),pt(r,s,"formEncType",f.formEncType,f,null),pt(r,s,"formMethod",f.formMethod,f,null),pt(r,s,"formTarget",f.formTarget,f,null)):(pt(r,s,"encType",f.encType,f,null),pt(r,s,"method",f.method,f,null),pt(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=To(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=rf);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=To(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),ws(r,"popover",u);break;case"xlinkActuate":En(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":En(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":En(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":En(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":En(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":En(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":En(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":En(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":En(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ws(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ip.get(o)||o,ws(r,o,u))}}function Pm(r,s,o,u,f,m){switch(o){case"style":Jl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?mr(r,u):(typeof u=="number"||typeof u=="bigint")&&mr(r,""+u);break;case"onScroll":u!=null&&Ge("scroll",r);break;case"onScrollEnd":u!=null&&Ge("scrollend",r);break;case"onClick":u!=null&&(r.onclick=rf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_o.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[zt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):ws(r,o,u)}}}function Sn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,m,b,o,null)}}f&&pt(r,s,"srcSet",o.srcSet,o,null),u&&pt(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var S=m=b=f=null,L=null,K=null;for(u in o)if(o.hasOwnProperty(u)){var ie=o[u];if(ie!=null)switch(u){case"name":f=ie;break;case"type":b=ie;break;case"checked":L=ie;break;case"defaultChecked":K=ie;break;case"value":m=ie;break;case"defaultValue":S=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(i(137,s));break;default:pt(r,s,u,ie,o,null)}}Sa(r,m,S,L,K,b,f,!1),bo(r);return;case"select":Ge("invalid",r),u=b=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":b=S;break;case"multiple":u=S;default:pt(r,s,f,S,o,null)}s=m,o=b,r.multiple=!!u,s!=null?Ni(r,!!u,s,!1):o!=null&&Ni(r,!!u,o,!0);return;case"textarea":Ge("invalid",r),m=f=u=null;for(b in o)if(o.hasOwnProperty(b)&&(S=o[b],S!=null))switch(b){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:pt(r,s,b,S,o,null)}xa(r,u,f,m),bo(r);return;case"option":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:pt(r,s,L,u,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(u=0;u<Lu.length;u++)Ge(Lu[u],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in o)if(o.hasOwnProperty(K)&&(u=o[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:pt(r,s,K,u,o,null)}return;default:if(eu(s)){for(ie in o)o.hasOwnProperty(ie)&&(u=o[ie],u!==void 0&&Pm(r,s,ie,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&pt(r,s,S,u,o,null))}function pR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,S=null,L=null,K=null,ie=null;for(Z in o){var le=o[Z];if(o.hasOwnProperty(Z)&&le!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":L=le;default:u.hasOwnProperty(Z)||pt(r,s,Z,null,u,le)}}for(var X in u){var Z=u[X];if(le=o[X],u.hasOwnProperty(X)&&(Z!=null||le!=null))switch(X){case"type":m=Z;break;case"name":f=Z;break;case"checked":K=Z;break;case"defaultChecked":ie=Z;break;case"value":b=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==le&&pt(r,s,X,Z,u,le)}}Jn(r,b,S,L,K,ie,m,f);return;case"select":Z=b=S=X=null;for(m in o)if(L=o[m],o.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":Z=L;default:u.hasOwnProperty(m)||pt(r,s,m,null,u,L)}for(f in u)if(m=u[f],L=o[f],u.hasOwnProperty(f)&&(m!=null||L!=null))switch(f){case"value":X=m;break;case"defaultValue":S=m;break;case"multiple":b=m;default:m!==L&&pt(r,s,f,m,u,L)}s=S,o=b,u=Z,X!=null?Ni(r,!!o,X,!1):!!u!=!!o&&(s!=null?Ni(r,!!o,s,!0):Ni(r,!!o,o?[]:"",!1));return;case"textarea":Z=X=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:pt(r,s,S,null,u,f)}for(b in u)if(f=u[b],m=o[b],u.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":X=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&pt(r,s,b,f,u,m)}ft(r,X,Z);return;case"option":for(var Ne in o)if(X=o[Ne],o.hasOwnProperty(Ne)&&X!=null&&!u.hasOwnProperty(Ne))switch(Ne){case"selected":r.selected=!1;break;default:pt(r,s,Ne,null,u,X)}for(L in u)if(X=u[L],Z=o[L],u.hasOwnProperty(L)&&X!==Z&&(X!=null||Z!=null))switch(L){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:pt(r,s,L,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in o)X=o[De],o.hasOwnProperty(De)&&X!=null&&!u.hasOwnProperty(De)&&pt(r,s,De,null,u,X);for(K in u)if(X=u[K],Z=o[K],u.hasOwnProperty(K)&&X!==Z&&(X!=null||Z!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:pt(r,s,K,X,u,Z)}return;default:if(eu(s)){for(var mt in o)X=o[mt],o.hasOwnProperty(mt)&&X!==void 0&&!u.hasOwnProperty(mt)&&Pm(r,s,mt,void 0,u,X);for(ie in u)X=u[ie],Z=o[ie],!u.hasOwnProperty(ie)||X===Z||X===void 0&&Z===void 0||Pm(r,s,ie,X,u,Z);return}}for(var Y in o)X=o[Y],o.hasOwnProperty(Y)&&X!=null&&!u.hasOwnProperty(Y)&&pt(r,s,Y,null,u,X);for(le in u)X=u[le],Z=o[le],!u.hasOwnProperty(le)||X===Z||X==null&&Z==null||pt(r,s,le,X,u,Z)}var Vm=null,Lm=null;function sf(r){return r.nodeType===9?r:r.ownerDocument}function mE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function jm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Um=null;function mR(){var r=window.event;return r&&r.type==="popstate"?r===Um?!1:(Um=r,!0):(Um=null,!1)}var yE=typeof setTimeout=="function"?setTimeout:void 0,gR=typeof clearTimeout=="function"?clearTimeout:void 0,_E=typeof Promise=="function"?Promise:void 0,yR=typeof queueMicrotask=="function"?queueMicrotask:typeof _E<"u"?function(r){return _E.resolve(null).then(r).catch(_R)}:yE;function _R(r){setTimeout(function(){throw r})}function Us(r){return r==="head"}function vE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var b=r.ownerDocument;if(o&1&&Uu(b.documentElement),o&2&&Uu(b.body),o&4)for(o=b.head,Uu(o),b=o.firstChild;b;){var S=b.nextSibling,L=b.nodeName;b[Ea]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=S}}if(f===0){r.removeChild(m),Yu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Yu(s)}function qm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":qm(o),Es(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function vR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[Ea])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Nr(r.nextSibling),r===null)break}return null}function ER(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Nr(r.nextSibling),r===null))return null;return r}function Bm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function wR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Nr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var zm=null;function EE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function wE(r,s,o){switch(s=sf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Uu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Es(r)}var xr=new Map,bE=new Set;function af(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Ji=se.d;se.d={f:bR,r:TR,D:SR,C:xR,L:AR,m:RR,X:DR,S:CR,M:IR};function bR(){var r=Ji.f(),s=Kh();return r||s}function TR(r){var s=Qr(r);s!==null&&s.tag===5&&s.type==="form"?zv(s):Ji.r(r)}var rl=typeof document>"u"?null:document;function TE(r,s,o){var u=rl;if(u&&typeof s=="string"&&s){var f=$t(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),bE.has(f)||(bE.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Sn(s,"link",r),jt(s),u.head.appendChild(s)))}}function SR(r){Ji.D(r),TE("dns-prefetch",r,null)}function xR(r,s){Ji.C(r,s),TE("preconnect",r,s)}function AR(r,s,o){Ji.L(r,s,o);var u=rl;if(u&&r&&s){var f='link[rel="preload"][as="'+$t(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+$t(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+$t(o.imageSizes)+'"]')):f+='[href="'+$t(r)+'"]';var m=f;switch(s){case"style":m=il(r);break;case"script":m=sl(r)}xr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),xr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(qu(m))||s==="script"&&u.querySelector(Bu(m))||(s=u.createElement("link"),Sn(s,"link",r),jt(s),u.head.appendChild(s)))}}function RR(r,s){Ji.m(r,s);var o=rl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+$t(u)+'"][href="'+$t(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sl(r)}if(!xr.has(m)&&(r=v({rel:"modulepreload",href:r},s),xr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Bu(m)))return}u=o.createElement("link"),Sn(u,"link",r),jt(u),o.head.appendChild(u)}}}function CR(r,s,o){Ji.S(r,s,o);var u=rl;if(u&&r){var f=jn(u).hoistableStyles,m=il(r);s=s||"default";var b=f.get(m);if(!b){var S={loading:0,preload:null};if(b=u.querySelector(qu(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=xr.get(m))&&$m(r,o);var L=b=u.createElement("link");jt(L),Sn(L,"link",r),L._p=new Promise(function(K,ie){L.onload=K,L.onerror=ie}),L.addEventListener("load",function(){S.loading|=1}),L.addEventListener("error",function(){S.loading|=2}),S.loading|=4,of(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:S},f.set(m,b)}}}function DR(r,s){Ji.X(r,s);var o=rl;if(o&&r){var u=jn(o).hoistableScripts,f=sl(r),m=u.get(f);m||(m=o.querySelector(Bu(f)),m||(r=v({src:r,async:!0},s),(s=xr.get(f))&&Fm(r,s),m=o.createElement("script"),jt(m),Sn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function IR(r,s){Ji.M(r,s);var o=rl;if(o&&r){var u=jn(o).hoistableScripts,f=sl(r),m=u.get(f);m||(m=o.querySelector(Bu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=xr.get(f))&&Fm(r,s),m=o.createElement("script"),jt(m),Sn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function SE(r,s,o,u){var f=(f=Te.current)?af(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=il(o.href),o=jn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=il(o.href);var m=jn(f).hoistableStyles,b=m.get(r);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=f.querySelector(qu(r)))&&!m._p&&(b.instance=m,b.state.loading=5),xr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},xr.set(r,o),m||kR(f,r,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=sl(o),o=jn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function il(r){return'href="'+$t(r)+'"'}function qu(r){return'link[rel="stylesheet"]['+r+"]"}function xE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function kR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Sn(s,"link",o),jt(s),r.head.appendChild(s))}function sl(r){return'[src="'+$t(r)+'"]'}function Bu(r){return"script[async]"+r}function AE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+$t(o.href)+'"]');if(u)return s.instance=u,jt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),jt(u),Sn(u,"style",f),of(u,o.precedence,r),s.instance=u;case"stylesheet":f=il(o.href);var m=r.querySelector(qu(f));if(m)return s.state.loading|=4,s.instance=m,jt(m),m;u=xE(o),(f=xr.get(f))&&$m(u,f),m=(r.ownerDocument||r).createElement("link"),jt(m);var b=m;return b._p=new Promise(function(S,L){b.onload=S,b.onerror=L}),Sn(m,"link",u),s.state.loading|=4,of(m,o.precedence,r),s.instance=m;case"script":return m=sl(o.src),(f=r.querySelector(Bu(m)))?(s.instance=f,jt(f),f):(u=o,(f=xr.get(m))&&(u=v({},o),Fm(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),jt(f),Sn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,of(u,o.precedence,r));return s.instance}function of(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,b=0;b<u.length;b++){var S=u[b];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function $m(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Fm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var lf=null;function RE(r,s,o){if(lf===null){var u=new Map,f=lf=new Map;f.set(o,u)}else f=lf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[Ea]||m[en]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var S=u.get(b);S?S.push(m):u.set(b,[m])}}return u}function CE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function OR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function DE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var zu=null;function MR(){}function NR(r,s,o){if(zu===null)throw Error(i(475));var u=zu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=il(o.href),m=r.querySelector(qu(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=uf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,jt(m);return}m=r.ownerDocument||r,o=xE(o),(f=xr.get(f))&&$m(o,f),m=m.createElement("link"),jt(m);var b=m;b._p=new Promise(function(S,L){b.onload=S,b.onerror=L}),Sn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=uf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function PR(){if(zu===null)throw Error(i(475));var r=zu;return r.stylesheets&&r.count===0&&Hm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Hm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function uf(){if(this.count--,this.count===0){if(this.stylesheets)Hm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var cf=null;function Hm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,cf=new Map,s.forEach(VR,r),cf=null,uf.call(r))}function VR(r,s){if(!(s.state.loading&4)){var o=cf.get(r);if(o)var u=o.get(null);else{o=new Map,cf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}f=s.instance,b=f.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,f),o.set(b,f),this.count++,u=uf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var $u={$$typeof:N,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function LR(r,s,o,u,f,m,b,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function IE(r,s,o,u,f,m,b,S,L,K,ie,le){return r=new LR(r,s,o,b,S,L,K,le),s=1,m===!0&&(s|=24),m=tr(3,null,null,s),r.current=m,m.stateNode=r,s=Ap(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Ip(m),r}function kE(r){return r?(r=Vo,r):Vo}function OE(r,s,o,u,f,m){f=kE(f),u.context===null?u.context=f:u.pendingContext=f,u=As(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Rs(r,u,s),o!==null&&(ar(o,r,s),vu(o,r,s))}function ME(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Gm(r,s){ME(r,s),(r=r.alternate)&&ME(r,s)}function NE(r){if(r.tag===13){var s=Po(r,67108864);s!==null&&ar(s,r,67108864),Gm(r,67108864)}}var hf=!0;function jR(r,s,o,u){var f=q.T;q.T=null;var m=se.p;try{se.p=2,Ym(r,s,o,u)}finally{se.p=m,q.T=f}}function UR(r,s,o,u){var f=q.T;q.T=null;var m=se.p;try{se.p=8,Ym(r,s,o,u)}finally{se.p=m,q.T=f}}function Ym(r,s,o,u){if(hf){var f=Wm(u);if(f===null)Nm(r,s,u,ff,o),VE(r,u);else if(BR(f,r,s,o,u))u.stopPropagation();else if(VE(r,u),s&4&&-1<qR.indexOf(r)){for(;f!==null;){var m=Qr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Zn(m.pendingLanes);if(b!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var L=1<<31-ln(b);S.entanglements[1]|=L,b&=~L}ui(m),(ut&6)===0&&(Wh=Lt()+500,Vu(0))}}break;case 13:S=Po(m,2),S!==null&&ar(S,m,2),Kh(),Gm(m,2)}if(m=Wm(u),m===null&&Nm(r,s,u,ff,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Nm(r,s,u,null,o)}}function Wm(r){return r=gr(r),Qm(r)}var ff=null;function Qm(r){if(ff=null,r=ki(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return ff=r,null}function PE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gr()){case Xn:return 2;case fr:return 8;case Si:case mo:return 32;case Yr:return 268435456;default:return 32}default:return 32}}var Km=!1,qs=null,Bs=null,zs=null,Fu=new Map,Hu=new Map,$s=[],qR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function VE(r,s){switch(r){case"focusin":case"focusout":qs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Fu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hu.delete(s.pointerId)}}function Gu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Qr(s),s!==null&&NE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function BR(r,s,o,u,f){switch(s){case"focusin":return qs=Gu(qs,r,s,o,u,f),!0;case"dragenter":return Bs=Gu(Bs,r,s,o,u,f),!0;case"mouseover":return zs=Gu(zs,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Fu.set(m,Gu(Fu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Hu.set(m,Gu(Hu.get(m)||null,r,s,o,u,f)),!0}return!1}function LE(r){var s=ki(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,_s(r.priority,function(){if(o.tag===13){var u=sr();u=Wr(u);var f=Po(o,u);f!==null&&ar(f,o,u),Gm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function df(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Wm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Pi=u,o.target.dispatchEvent(u),Pi=null}else return s=Qr(o),s!==null&&NE(s),r.blockedOn=o,!1;s.shift()}return!0}function jE(r,s,o){df(r)&&o.delete(s)}function zR(){Km=!1,qs!==null&&df(qs)&&(qs=null),Bs!==null&&df(Bs)&&(Bs=null),zs!==null&&df(zs)&&(zs=null),Fu.forEach(jE),Hu.forEach(jE)}function pf(r,s){r.blockedOn===s&&(r.blockedOn=null,Km||(Km=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,zR)))}var mf=null;function UE(r){mf!==r&&(mf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){mf===r&&(mf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Qm(u||o)===null)continue;break}var m=Qr(o);m!==null&&(r.splice(s,3),s-=3,Qp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Yu(r){function s(L){return pf(L,r)}qs!==null&&pf(qs,r),Bs!==null&&pf(Bs,r),zs!==null&&pf(zs,r),Fu.forEach(s),Hu.forEach(s);for(var o=0;o<$s.length;o++){var u=$s[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<$s.length&&(o=$s[0],o.blockedOn===null);)LE(o),o.blockedOn===null&&$s.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],b=f[zt]||null;if(typeof m=="function")b||UE(o);else if(b){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[zt]||null)S=b.formAction;else if(Qm(f)!==null)continue}else S=b.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),UE(o)}}}function Xm(r){this._internalRoot=r}gf.prototype.render=Xm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=sr();OE(o,u,r,s,null,null)},gf.prototype.unmount=Xm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;OE(r.current,2,null,r,null,null),Kh(),s[pr]=null}};function gf(r){this._internalRoot=r}gf.prototype.unstable_scheduleHydration=function(r){if(r){var s=dr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<$s.length&&s!==0&&s<$s[o].priority;o++);$s.splice(o,0,r),o===0&&LE(r)}};var qE=e.version;if(qE!=="19.1.0")throw Error(i(527,qE,"19.1.0"));se.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var $R={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yf.isDisabled&&yf.supportsFiber)try{xt=yf.inject($R),nt=yf}catch{}}return Qu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=n0,m=r0,b=i0,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=IE(r,1,!1,null,null,o,u,f,m,b,S,null),r[pr]=s.current,Mm(r),new Xm(s)},Qu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=n0,b=r0,S=i0,L=null,K=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(L=o.unstable_transitionCallbacks),o.formState!==void 0&&(K=o.formState)),s=IE(r,1,!0,s,o??null,u,f,m,b,S,L,K),s.context=kE(null),o=s.current,u=sr(),u=Wr(u),f=As(u),f.callback=null,Rs(o,f,u),o=u,s.current.lanes=o,et(s,o),ui(s),r[pr]=s.current,Mm(r),new gf(s)},Qu.version="19.1.0",Qu}var KE;function eC(){if(KE)return eg.exports;KE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),eg.exports=JR(),eg.exports}var tC=eC();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var XE="popstate";function nC(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Dg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:gc(a)}return iC(e,n,null,t)}function Dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rC(){return Math.random().toString(36).substring(2,10)}function ZE(t,e){return{usr:t.state,key:t.key,idx:e}}function Dg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Nl(e):e,state:n,key:e&&e.key||i||rC()}}function gc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Nl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function iC(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function E(){d="POP";let O=v(),F=O==null?null:O-g;g=O,p&&p({action:d,location:B.location,delta:F})}function T(O,F){d="PUSH";let G=Dg(B.location,O,F);g=v()+1;let N=ZE(G,g),J=B.createHref(G);try{c.pushState(N,"",J)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(J)}l&&p&&p({action:d,location:B.location,delta:1})}function I(O,F){d="REPLACE";let G=Dg(B.location,O,F);g=v();let N=ZE(G,g),J=B.createHref(G);c.replaceState(N,"",J),l&&p&&p({action:d,location:B.location,delta:0})}function P(O){return sC(O)}let B={get action(){return d},get location(){return t(a,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(XE,E),p=O,()=>{a.removeEventListener(XE,E),p=null}},createHref(O){return e(a,O)},createURL:P,encodeLocation(O){let F=P(O);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:I,go(O){return c.go(O)}};return B}function sC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Dt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:gc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function TT(t,e,n="/"){return aC(t,e,n,!1)}function aC(t,e,n,i){let a=typeof e=="string"?Nl(e):e,l=ls(a.pathname||"/",n);if(l==null)return null;let c=ST(t);oC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=_C(l);d=gC(c[p],g,i)}return d}function ST(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Dt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=ss([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(Dt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ST(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:pC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of xT(l.path))a(l,c,p)}),e}function xT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=xT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function oC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var lC=/^:[\w-]+$/,uC=3,cC=2,hC=1,fC=10,dC=-2,JE=t=>t==="*";function pC(t,e){let n=t.split("/"),i=n.length;return n.some(JE)&&(i+=dC),e&&(i+=cC),n.filter(a=>!JE(a)).reduce((a,l)=>a+(lC.test(l)?uC:l===""?hC:fC),i)}function mC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function gC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=Qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!E&&g&&n&&!i[i.length-1].route.index&&(E=Qf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!E)return null;Object.assign(a,E.params),c.push({params:a,pathname:ss([l,E.pathname]),pathnameBase:bC(ss([l,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(l=ss([l,E.pathnameBase]))}return c}function Qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=yC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let P=d[T]||"";c=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const I=d[T];return E&&!I?g[v]=void 0:g[v]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function yC(t,e=!1,n=!0){zr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function _C(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ls(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function vC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Nl(t):t;return{pathname:n?n.startsWith("/")?n:EC(n,e):e,search:TC(i),hash:SC(a)}}function EC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ig(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gy(t){let e=wC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function yy(t,e,n,i=!1){let a;typeof t=="string"?a=Nl(t):(a={...t},Dt(!a.pathname||!a.pathname.includes("?"),ig("?","pathname","search",a)),Dt(!a.pathname||!a.pathname.includes("#"),ig("#","pathname","hash",a)),Dt(!a.search||!a.search.includes("#"),ig("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;a.pathname=T.join("/")}d=E>=0?e[E]:"/"}let p=vC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var ss=t=>t.join("/").replace(/\/\/+/g,"/"),bC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var AT=["POST","PUT","PATCH","DELETE"];new Set(AT);var AC=["GET",...AT];new Set(AC);var Pl=j.createContext(null);Pl.displayName="DataRouter";var vd=j.createContext(null);vd.displayName="DataRouterState";j.createContext(!1);var RT=j.createContext({isTransitioning:!1});RT.displayName="ViewTransition";var RC=j.createContext(new Map);RC.displayName="Fetchers";var CC=j.createContext(null);CC.displayName="Await";var Hr=j.createContext(null);Hr.displayName="Navigation";var Oc=j.createContext(null);Oc.displayName="Location";var bi=j.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var _y=j.createContext(null);_y.displayName="RouteError";function DC(t,{relative:e}={}){Dt(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=j.useContext(Hr),{hash:a,pathname:l,search:c}=Nc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:ss([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Vl(){return j.useContext(Oc)!=null}function pa(){return Dt(Vl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Oc).location}var CT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function DT(t){j.useContext(Hr).static||j.useLayoutEffect(t)}function Mc(){let{isDataRoute:t}=j.useContext(bi);return t?zC():IC()}function IC(){Dt(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(Pl),{basename:e,navigator:n}=j.useContext(Hr),{matches:i}=j.useContext(bi),{pathname:a}=pa(),l=JSON.stringify(gy(i)),c=j.useRef(!1);return DT(()=>{c.current=!0}),j.useCallback((p,g={})=>{if(zr(c.current,CT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=yy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ss([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}j.createContext(null);function Nc(t,{relative:e}={}){let{matches:n}=j.useContext(bi),{pathname:i}=pa(),a=JSON.stringify(gy(n));return j.useMemo(()=>yy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function kC(t,e){return IT(t,e)}function IT(t,e,n,i){var F;Dt(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=j.useContext(Hr),{matches:l}=j.useContext(bi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let G=v&&v.path||"";kT(p,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let E=pa(),T;if(e){let G=typeof e=="string"?Nl(e):e;Dt(g==="/"||((F=G.pathname)==null?void 0:F.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${G.pathname}" was given in the \`location\` prop.`),T=G}else T=E;let I=T.pathname||"/",P=I;if(g!=="/"){let G=g.replace(/^\//,"").split("/");P="/"+I.replace(/^\//,"").split("/").slice(G.length).join("/")}let B=TT(t,{pathname:P});zr(v||B!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),zr(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=VC(B&&B.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:ss([g,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?g:ss([g,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),l,n,i);return e&&O?j.createElement(Oc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},O):O}function OC(){let t=BC(),e=xC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:a},n):null,c)}var MC=j.createElement(OC,null),NC=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?j.createElement(bi.Provider,{value:this.props.routeContext},j.createElement(_y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PC({routeContext:t,match:e,children:n}){let i=j.useContext(Pl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(bi.Provider,{value:t},n)}function VC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);Dt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:E}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let E,T=!1,I=null,P=null;n&&(E=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||MC,c&&(d<0&&v===0?(kT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,P=null):d===v&&(T=!0,P=g.route.hydrateFallbackElement||null)));let B=e.concat(a.slice(0,v+1)),O=()=>{let F;return E?F=I:T?F=P:g.route.Component?F=j.createElement(g.route.Component,null):g.route.element?F=g.route.element:F=p,j.createElement(PC,{match:g,routeContext:{outlet:p,matches:B,isDataRoute:n!=null},children:F})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?j.createElement(NC,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:O(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):O()},null)}function vy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LC(t){let e=j.useContext(Pl);return Dt(e,vy(t)),e}function jC(t){let e=j.useContext(vd);return Dt(e,vy(t)),e}function UC(t){let e=j.useContext(bi);return Dt(e,vy(t)),e}function Ey(t){let e=UC(t),n=e.matches[e.matches.length-1];return Dt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function qC(){return Ey("useRouteId")}function BC(){var i;let t=j.useContext(_y),e=jC("useRouteError"),n=Ey("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function zC(){let{router:t}=LC("useNavigate"),e=Ey("useNavigate"),n=j.useRef(!1);return DT(()=>{n.current=!0}),j.useCallback(async(a,l={})=>{zr(n.current,CT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var ew={};function kT(t,e,n){!e&&!ew[t]&&(ew[t]=!0,zr(!1,n))}j.memo($C);function $C({routes:t,future:e,state:n}){return IT(t,void 0,n,e)}function FC({to:t,replace:e,state:n,relative:i}){Dt(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=j.useContext(Hr);zr(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=j.useContext(bi),{pathname:c}=pa(),d=Mc(),p=yy(t,gy(l),c,i==="path"),g=JSON.stringify(p);return j.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function kf(t){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Dt(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Nl(n));let{pathname:p="/",search:g="",hash:v="",state:E=null,key:T="default"}=n,I=j.useMemo(()=>{let P=ls(p,c);return P==null?null:{location:{pathname:P,search:g,hash:v,state:E,key:T},navigationType:i}},[c,p,g,v,E,T,i]);return zr(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:j.createElement(Hr.Provider,{value:d},j.createElement(Oc.Provider,{children:e,value:I}))}function GC({children:t,location:e}){return kC(Ig(t),e)}function Ig(t,e=[]){let n=[];return j.Children.forEach(t,(i,a)=>{if(!j.isValidElement(i))return;let l=[...e,a];if(i.type===j.Fragment){n.push.apply(n,Ig(i.props.children,l));return}Dt(i.type===kf,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ig(i.props.children,l)),n.push(c)}),n}var Of="get",Mf="application/x-www-form-urlencoded";function Ed(t){return t!=null&&typeof t.tagName=="string"}function YC(t){return Ed(t)&&t.tagName.toLowerCase()==="button"}function WC(t){return Ed(t)&&t.tagName.toLowerCase()==="form"}function QC(t){return Ed(t)&&t.tagName.toLowerCase()==="input"}function KC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XC(t,e){return t.button===0&&(!e||e==="_self")&&!KC(t)}var _f=null;function ZC(){if(_f===null)try{new FormData(document.createElement("form"),0),_f=!1}catch{_f=!0}return _f}var JC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sg(t){return t!=null&&!JC.has(t)?(zr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mf}"`),null):t}function eD(t,e){let n,i,a,l,c;if(WC(t)){let d=t.getAttribute("action");i=d?ls(d,e):null,n=t.getAttribute("method")||Of,a=sg(t.getAttribute("enctype"))||Mf,l=new FormData(t)}else if(YC(t)||QC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?ls(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Of,a=sg(t.getAttribute("formenctype"))||sg(d.getAttribute("enctype"))||Mf,l=new FormData(d,t),!ZC()){let{name:g,type:v,value:E}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,E)}}else{if(Ed(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Of,i=null,a=Mf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tD(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&ls(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function nD(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rD(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function iD(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await nD(l,n);return c.links?c.links():[]}return[]}));return lD(i.flat(1).filter(rD).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function tw(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var E;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function sD(t,e,{includeHydrateFallback:n}={}){return aD(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function aD(t){return[...new Set(t)]}function oD(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function lD(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(oD(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function OT(){let t=j.useContext(Pl);return wy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function uD(){let t=j.useContext(vd);return wy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var by=j.createContext(void 0);by.displayName="FrameworkContext";function MT(){let t=j.useContext(by);return wy(t,"You must render this element inside a <HydratedRouter> element"),t}function cD(t,e){let n=j.useContext(by),[i,a]=j.useState(!1),[l,c]=j.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=e,T=j.useRef(null);j.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let B=F=>{F.forEach(G=>{c(G.isIntersecting)})},O=new IntersectionObserver(B,{threshold:.5});return T.current&&O.observe(T.current),()=>{O.disconnect()}}},[t]),j.useEffect(()=>{if(i){let B=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(B)}}},[i]);let I=()=>{a(!0)},P=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Ku(d,I),onBlur:Ku(p,P),onMouseEnter:Ku(g,I),onMouseLeave:Ku(v,P),onTouchStart:Ku(E,I)}]:[!1,T,{}]}function Ku(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function hD({page:t,...e}){let{router:n}=OT(),i=j.useMemo(()=>TT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?j.createElement(dD,{page:t,matches:i,...e}):null}function fD(t){let{manifest:e,routeModules:n}=MT(),[i,a]=j.useState([]);return j.useEffect(()=>{let l=!1;return iD(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function dD({page:t,matches:e,...n}){let i=pa(),{manifest:a,routeModules:l}=MT(),{basename:c}=OT(),{loaderData:d,matches:p}=uD(),g=j.useMemo(()=>tw(t,e,p,a,i,"data"),[t,e,p,a,i]),v=j.useMemo(()=>tw(t,e,p,a,i,"assets"),[t,e,p,a,i]),E=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let P=new Set,B=!1;if(e.forEach(F=>{var N;let G=a.routes[F.route.id];!G||!G.hasLoader||(!g.some(J=>J.route.id===F.route.id)&&F.route.id in d&&((N=l[F.route.id])!=null&&N.shouldRevalidate)||G.hasClientLoader?B=!0:P.add(F.route.id))}),P.size===0)return[];let O=tD(t,c,"data");return B&&P.size>0&&O.searchParams.set("_routes",e.filter(F=>P.has(F.route.id)).map(F=>F.route.id).join(",")),[O.pathname+O.search]},[c,d,i,a,g,e,t,l]),T=j.useMemo(()=>sD(v,a),[v,a]),I=fD(v);return j.createElement(j.Fragment,null,E.map(P=>j.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),T.map(P=>j.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),I.map(({key:P,link:B})=>j.createElement("link",{key:P,...B})))}function pD(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var NT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{NT&&(window.__reactRouterVersion="7.7.0")}catch{}function mD({basename:t,children:e,window:n}){let i=j.useRef();i.current==null&&(i.current=nC({window:n,v5Compat:!0}));let a=i.current,[l,c]=j.useState({action:a.action,location:a.location}),d=j.useCallback(p=>{j.startTransition(()=>c(p))},[c]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(HC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var PT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VT=j.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:E,...T},I){let{basename:P}=j.useContext(Hr),B=typeof g=="string"&&PT.test(g),O,F=!1;if(typeof g=="string"&&B&&(O=g,NT))try{let k=new URL(window.location.href),U=g.startsWith("//")?new URL(k.protocol+g):new URL(g),M=ls(U.pathname,P);U.origin===k.origin&&M!=null?g=M+U.search+U.hash:F=!0}catch{zr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=DC(g,{relative:a}),[N,J,z]=cD(i,T),re=vD(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:E});function D(k){e&&e(k),k.defaultPrevented||re(k)}let C=j.createElement("a",{...T,...z,href:O||G,onClick:F||l?e:D,ref:pD(I,J),target:p,"data-discover":!B&&n==="render"?"true":void 0});return N&&!B?j.createElement(j.Fragment,null,C,j.createElement(hD,{page:G})):C});VT.displayName="Link";var gD=j.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let E=Nc(c,{relative:g.relative}),T=pa(),I=j.useContext(vd),{navigator:P,basename:B}=j.useContext(Hr),O=I!=null&&SD(E)&&d===!0,F=P.encodeLocation?P.encodeLocation(E).pathname:E.pathname,G=T.pathname,N=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(G=G.toLowerCase(),N=N?N.toLowerCase():null,F=F.toLowerCase()),N&&B&&(N=ls(N,B)||N);const J=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let z=G===F||!a&&G.startsWith(F)&&G.charAt(J)==="/",re=N!=null&&(N===F||!a&&N.startsWith(F)&&N.charAt(F.length)==="/"),D={isActive:z,isPending:re,isTransitioning:O},C=z?e:void 0,k;typeof i=="function"?k=i(D):k=[i,z?"active":null,re?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(D):l;return j.createElement(VT,{...g,"aria-current":C,className:k,ref:v,style:U,to:c,viewTransition:d},typeof p=="function"?p(D):p)});gD.displayName="NavLink";var yD=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Of,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:E,...T},I)=>{let P=bD(),B=TD(d,{relative:g}),O=c.toLowerCase()==="get"?"get":"post",F=typeof d=="string"&&PT.test(d),G=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let J=N.nativeEvent.submitter,z=(J==null?void 0:J.getAttribute("formmethod"))||c;P(J||N.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:E})};return j.createElement("form",{ref:I,method:O,action:B,onSubmit:i?p:G,...T,"data-discover":!F&&t==="render"?"true":void 0})});yD.displayName="Form";function _D(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LT(t){let e=j.useContext(Pl);return Dt(e,_D(t)),e}function vD(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Mc(),p=pa(),g=Nc(t,{relative:l});return j.useCallback(v=>{if(XC(v,e)){v.preventDefault();let E=n!==void 0?n:gc(p)===gc(g);d(t,{replace:E,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var ED=0,wD=()=>`__${String(++ED)}__`;function bD(){let{router:t}=LT("useSubmit"),{basename:e}=j.useContext(Hr),n=qC();return j.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=eD(i,e);if(a.navigate===!1){let v=a.fetcherKey||wD();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function TD(t,{relative:e}={}){let{basename:n}=j.useContext(Hr),i=j.useContext(bi);Dt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Nc(t||".",{relative:e})},c=pa();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:ss([n,l.pathname])),gc(l)}function SD(t,e={}){let n=j.useContext(RT);Dt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=LT("useViewTransitionState"),a=Nc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=ls(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=ls(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Qf(a.pathname,c)!=null||Qf(a.pathname,l)!=null}var vn=function(){return vn=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},vn.apply(this,arguments)};function yc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var St="-ms-",uc="-moz-",ot="-webkit-",jT="comm",wd="rule",Ty="decl",xD="@import",UT="@keyframes",AD="@layer",qT=Math.abs,Sy=String.fromCharCode,kg=Object.assign;function RD(t,e){return _n(t,0)^45?(((e<<2^_n(t,0))<<2^_n(t,1))<<2^_n(t,2))<<2^_n(t,3):0}function BT(t){return t.trim()}function es(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function Nf(t,e,n){return t.indexOf(e,n)}function _n(t,e){return t.charCodeAt(e)|0}function wl(t,e,n){return t.slice(e,n)}function fi(t){return t.length}function zT(t){return t.length}function tc(t,e){return e.push(t),t}function CD(t,e){return t.map(e).join("")}function nw(t,e){return t.filter(function(n){return!es(n,e)})}var bd=1,bl=1,$T=0,Dr=0,Kt=0,Ll="";function Td(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:bd,column:bl,length:c,return:"",siblings:d}}function Ws(t,e){return kg(Td("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function al(t){for(;t.root;)t=Ws(t.root,{children:[t]});tc(t,t.siblings)}function DD(){return Kt}function ID(){return Kt=Dr>0?_n(Ll,--Dr):0,bl--,Kt===10&&(bl=1,bd--),Kt}function qr(){return Kt=Dr<$T?_n(Ll,Dr++):0,bl++,Kt===10&&(bl=1,bd++),Kt}function eo(){return _n(Ll,Dr)}function Pf(){return Dr}function Sd(t,e){return wl(Ll,t,e)}function Og(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kD(t){return bd=bl=1,$T=fi(Ll=t),Dr=0,[]}function OD(t){return Ll="",t}function ag(t){return BT(Sd(Dr-1,Mg(t===91?t+2:t===40?t+1:t)))}function MD(t){for(;(Kt=eo())&&Kt<33;)qr();return Og(t)>2||Og(Kt)>3?"":" "}function ND(t,e){for(;--e&&qr()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return Sd(t,Pf()+(e<6&&eo()==32&&qr()==32))}function Mg(t){for(;qr();)switch(Kt){case t:return Dr;case 34:case 39:t!==34&&t!==39&&Mg(Kt);break;case 40:t===41&&Mg(t);break;case 92:qr();break}return Dr}function PD(t,e){for(;qr()&&t+Kt!==57;)if(t+Kt===84&&eo()===47)break;return"/*"+Sd(e,Dr-1)+"*"+Sy(t===47?t:qr())}function VD(t){for(;!Og(eo());)qr();return Sd(t,Dr)}function LD(t){return OD(Vf("",null,null,null,[""],t=kD(t),0,[0],t))}function Vf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,E=c,T=0,I=0,P=0,B=1,O=1,F=1,G=0,N="",J=a,z=l,re=i,D=N;O;)switch(P=G,G=qr()){case 40:if(P!=108&&_n(D,E-1)==58){Nf(D+=Be(ag(G),"&","&\f"),"&\f",qT(g?d[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:D+=ag(G);break;case 9:case 10:case 13:case 32:D+=MD(P);break;case 92:D+=ND(Pf()-1,7);continue;case 47:switch(eo()){case 42:case 47:tc(jD(PD(qr(),Pf()),e,n,p),p);break;default:D+="/"}break;case 123*B:d[g++]=fi(D)*F;case 125*B:case 59:case 0:switch(G){case 0:case 125:O=0;case 59+v:F==-1&&(D=Be(D,/\f/g,"")),I>0&&fi(D)-E&&tc(I>32?iw(D+";",i,n,E-1,p):iw(Be(D," ","")+";",i,n,E-2,p),p);break;case 59:D+=";";default:if(tc(re=rw(D,e,n,g,v,a,d,N,J=[],z=[],E,l),l),G===123)if(v===0)Vf(D,e,re,re,J,l,E,d,z);else switch(T===99&&_n(D,3)===110?100:T){case 100:case 108:case 109:case 115:Vf(t,re,re,i&&tc(rw(t,re,re,0,0,a,d,N,a,J=[],E,z),z),a,z,E,d,i?J:z);break;default:Vf(D,re,re,re,[""],z,0,d,z)}}g=v=I=0,B=F=1,N=D="",E=c;break;case 58:E=1+fi(D),I=P;default:if(B<1){if(G==123)--B;else if(G==125&&B++==0&&ID()==125)continue}switch(D+=Sy(G),G*B){case 38:F=v>0?1:(D+="\f",-1);break;case 44:d[g++]=(fi(D)-1)*F,F=1;break;case 64:eo()===45&&(D+=ag(qr())),T=eo(),v=E=fi(N=D+=VD(Pf())),G++;break;case 45:P===45&&fi(D)==2&&(B=0)}}return l}function rw(t,e,n,i,a,l,c,d,p,g,v,E){for(var T=a-1,I=a===0?l:[""],P=zT(I),B=0,O=0,F=0;B<i;++B)for(var G=0,N=wl(t,T+1,T=qT(O=c[B])),J=t;G<P;++G)(J=BT(O>0?I[G]+" "+N:Be(N,/&\f/g,I[G])))&&(p[F++]=J);return Td(t,e,n,a===0?wd:d,p,g,v,E)}function jD(t,e,n,i){return Td(t,e,n,jT,Sy(DD()),wl(t,2,-2),0,i)}function iw(t,e,n,i,a){return Td(t,e,n,Ty,wl(t,0,i),wl(t,i+1,-1),i,a)}function FT(t,e,n){switch(RD(t,e)){case 5103:return ot+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ot+t+t;case 4789:return uc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+t+uc+t+St+t+t;case 5936:switch(_n(t,e+11)){case 114:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ot+t+St+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ot+t+St+t+t;case 6165:return ot+t+St+"flex-"+t+t;case 5187:return ot+t+Be(t,/(\w+).+(:[^]+)/,ot+"box-$1$2"+St+"flex-$1$2")+t;case 5443:return ot+t+St+"flex-item-"+Be(t,/flex-|-self/g,"")+(es(t,/flex-|baseline/)?"":St+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return ot+t+St+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return ot+t+St+Be(t,"shrink","negative")+t;case 5292:return ot+t+St+Be(t,"basis","preferred-size")+t;case 6060:return ot+"box-"+Be(t,"-grow","")+ot+t+St+Be(t,"grow","positive")+t;case 4554:return ot+Be(t,/([^-])(transform)/g,"$1"+ot+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ot+t+t;case 4200:if(!es(t,/flex-|baseline/))return St+"grid-column-align"+wl(t,e)+t;break;case 2592:case 3360:return St+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,es(i.props,/grid-\w+-end/)})?~Nf(t+(n=n[e].value),"span",0)?t:St+Be(t,"-start","")+t+St+"grid-row-span:"+(~Nf(n,"span",0)?es(n,/\d+/):+es(n,/\d+/)-+es(t,/\d+/))+";":St+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return es(i.props,/grid-\w+-start/)})?t:St+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,ot+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fi(t)-1-e>6)switch(_n(t,e+1)){case 109:if(_n(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+uc+(_n(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nf(t,"stretch",0)?FT(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return St+a+":"+l+g+(c?St+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(_n(t,e+6)===121)return Be(t,":",":"+ot)+t;break;case 6444:switch(_n(t,_n(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(_n(t,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+St+"$2box$3")+t;case 100:return Be(t,":",":"+St)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function Kf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function UD(t,e,n,i){switch(t.type){case AD:if(t.children.length)break;case xD:case Ty:return t.return=t.return||t.value;case jT:return"";case UT:return t.return=t.value+"{"+Kf(t.children,i)+"}";case wd:if(!fi(t.value=t.props.join(",")))return""}return fi(n=Kf(t.children,i))?t.return=t.value+"{"+n+"}":""}function qD(t){var e=zT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function BD(t){return function(e){e.root||(e=e.return)&&t(e)}}function zD(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Ty:t.return=FT(t.value,t.length,n);return;case UT:return Kf([Ws(t,{value:Be(t.value,"@","@"+ot)})],i);case wd:if(t.length)return CD(n=t.props,function(a){switch(es(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":al(Ws(t,{props:[Be(a,/:(read-\w+)/,":"+uc+"$1")]})),al(Ws(t,{props:[a]})),kg(t,{props:nw(n,i)});break;case"::placeholder":al(Ws(t,{props:[Be(a,/:(plac\w+)/,":"+ot+"input-$1")]})),al(Ws(t,{props:[Be(a,/:(plac\w+)/,":"+uc+"$1")]})),al(Ws(t,{props:[Be(a,/:(plac\w+)/,St+"input-$1")]})),al(Ws(t,{props:[a]})),kg(t,{props:nw(n,i)});break}return""})}}var $D={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},or={},Tl=typeof process<"u"&&or!==void 0&&(or.REACT_APP_SC_ATTR||or.SC_ATTR)||"data-styled",HT="active",GT="data-styled-version",xd="6.1.19",xy=`/*!sc*/
`,Xf=typeof window<"u"&&typeof document<"u",FD=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&or!==void 0&&or.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&or.REACT_APP_SC_DISABLE_SPEEDY!==""?or.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&or.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&or!==void 0&&or.SC_DISABLE_SPEEDY!==void 0&&or.SC_DISABLE_SPEEDY!==""&&or.SC_DISABLE_SPEEDY!=="false"&&or.SC_DISABLE_SPEEDY),HD={},Ad=Object.freeze([]),Sl=Object.freeze({});function YT(t,e,n){return n===void 0&&(n=Sl),t.theme!==n.theme&&t.theme||e||n.theme}var WT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YD=/(^-|-$)/g;function sw(t){return t.replace(GD,"-").replace(YD,"")}var WD=/(a)(d)/gi,vf=52,aw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ng(t){var e,n="";for(e=Math.abs(t);e>vf;e=e/vf|0)n=aw(e%vf)+n;return(aw(e%vf)+n).replace(WD,"$1-$2")}var og,QT=5381,dl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},KT=function(t){return dl(QT,t)};function XT(t){return Ng(KT(t)>>>0)}function QD(t){return t.displayName||t.name||"Component"}function lg(t){return typeof t=="string"&&!0}var ZT=typeof Symbol=="function"&&Symbol.for,JT=ZT?Symbol.for("react.memo"):60115,KD=ZT?Symbol.for("react.forward_ref"):60112,XD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ZD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},JD=((og={})[KD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},og[JT]=e1,og);function ow(t){return("type"in(e=t)&&e.type.$$typeof)===JT?e1:"$$typeof"in t?JD[t.$$typeof]:XD;var e}var eI=Object.defineProperty,tI=Object.getOwnPropertyNames,lw=Object.getOwnPropertySymbols,nI=Object.getOwnPropertyDescriptor,rI=Object.getPrototypeOf,uw=Object.prototype;function t1(t,e,n){if(typeof e!="string"){if(uw){var i=rI(e);i&&i!==uw&&t1(t,i,n)}var a=tI(e);lw&&(a=a.concat(lw(e)));for(var l=ow(t),c=ow(e),d=0;d<a.length;++d){var p=a[d];if(!(p in ZD||n&&n[p]||c&&p in c||l&&p in l)){var g=nI(e,p);try{eI(t,p,g)}catch{}}}}return t}function ro(t){return typeof t=="function"}function Ay(t){return typeof t=="object"&&"styledComponentId"in t}function Xa(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Pg(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function _c(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Vg(t,e,n){if(n===void 0&&(n=!1),!n&&!_c(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Vg(t[i],e[i]);else if(_c(e))for(var i in e)t[i]=Vg(t[i],e[i]);return t}function Ry(t,e){Object.defineProperty(t,"toString",{value:e})}function io(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw io(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(xy);return n},t}(),Lf=new Map,Zf=new Map,jf=1,Ef=function(t){if(Lf.has(t))return Lf.get(t);for(;Zf.has(jf);)jf++;var e=jf++;return Lf.set(t,e),Zf.set(e,t),e},sI=function(t,e){jf=e+1,Lf.set(t,e),Zf.set(e,t)},aI="style[".concat(Tl,"][").concat(GT,'="').concat(xd,'"]'),oI=new RegExp("^".concat(Tl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lI=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},uI=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(xy),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(oI);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(sI(v,g),lI(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},cw=function(t){for(var e=document.querySelectorAll(aI),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(Tl)!==HT&&(uI(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function cI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var n1=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Tl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(Tl,HT),i.setAttribute(GT,xd);var c=cI();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},hI=function(){function t(e){this.element=n1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw io(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),fI=function(){function t(e){this.element=n1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),dI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),hw=Xf,pI={isServer:!Xf,useCSSOMInjection:!FD},Jf=function(){function t(e,n,i){e===void 0&&(e=Sl),n===void 0&&(n={});var a=this;this.options=vn(vn({},pI),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Xf&&hw&&(hw=!1,cw(this)),Ry(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(E){var T=function(F){return Zf.get(F)}(E);if(T===void 0)return"continue";var I=l.names.get(T),P=c.getGroup(E);if(I===void 0||!I.size||P.length===0)return"continue";var B="".concat(Tl,".g").concat(E,'[id="').concat(T,'"]'),O="";I!==void 0&&I.forEach(function(F){F.length>0&&(O+="".concat(F,","))}),p+="".concat(P).concat(B,'{content:"').concat(O,'"}').concat(xy)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return Ef(e)},t.prototype.rehydrate=function(){!this.server&&Xf&&cw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(vn(vn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new dI(a):i?new hI(a):new fI(a)}(this.options),new iI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ef(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Ef(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ef(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),mI=/&/g,gI=/^\s*\/\/.*$/gm;function r1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=r1(n.children,e)),n})}function yI(t){var e,n,i,a=Sl,l=a.options,c=l===void 0?Sl:l,d=a.plugins,p=d===void 0?Ad:d,g=function(T,I,P){return P.startsWith(n)&&P.endsWith(n)&&P.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===wd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(mI,n).replace(i,g))}),c.prefix&&v.push(zD),v.push(UD);var E=function(T,I,P,B){I===void 0&&(I=""),P===void 0&&(P=""),B===void 0&&(B="&"),e=B,n=I,i=new RegExp("\\".concat(n,"\\b"),"g");var O=T.replace(gI,""),F=LD(P||I?"".concat(P," ").concat(I," { ").concat(O," }"):O);c.namespace&&(F=r1(F,c.namespace));var G=[];return Kf(F,qD(v.concat(BD(function(N){return G.push(N)})))),G};return E.hash=p.length?p.reduce(function(T,I){return I.name||io(15),dl(T,I.name)},QT).toString():"",E}var _I=new Jf,Lg=yI(),i1=ge.createContext({shouldForwardProp:void 0,styleSheet:_I,stylis:Lg});i1.Consumer;ge.createContext(void 0);function jg(){return j.useContext(i1)}var vI=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Lg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ry(this,function(){throw io(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Lg),this.name+e.hash},t}(),EI=function(t){return t>="A"&&t<="Z"};function fw(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;EI(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var s1=function(t){return t==null||t===!1||t===""},a1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!s1(l)&&(Array.isArray(l)&&l.isCss||ro(l)?i.push("".concat(fw(a),":"),l,";"):_c(l)?i.push.apply(i,yc(yc(["".concat(a," {")],a1(l),!1),["}"],!1)):i.push("".concat(fw(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in $D||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ea(t,e,n,i){if(s1(t))return[];if(Ay(t))return[".".concat(t.styledComponentId)];if(ro(t)){if(!ro(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return ea(a,e,n,i)}var l;return t instanceof vI?n?(t.inject(n,i),[t.getName(i)]):[t]:_c(t)?a1(t):Array.isArray(t)?Array.prototype.concat.apply(Ad,t.map(function(c){return ea(c,e,n,i)})):[t.toString()]}function o1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ro(n)&&!Ay(n))return!1}return!0}var wI=KT(xd),bI=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&o1(e),this.componentId=n,this.baseHash=dl(wI,n),this.baseStyle=i,Jf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Xa(a,this.staticRulesId);else{var l=Pg(ea(this.rules,e,n,i)),c=Ng(dl(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Xa(a,c),this.staticRulesId=c}else{for(var p=dl(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")g+=E;else if(E){var T=Pg(ea(E,e,n,i));p=dl(p,T+v),g+=T}}if(g){var I=Ng(p>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,i(g,".".concat(I),void 0,this.componentId)),a=Xa(a,I)}}return a},t}(),vc=ge.createContext(void 0);vc.Consumer;function TI(t){var e=ge.useContext(vc),n=j.useMemo(function(){return function(i,a){if(!i)throw io(14);if(ro(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw io(8);return a?vn(vn({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?ge.createElement(vc.Provider,{value:n},t.children):null}var ug={};function SI(t,e,n){var i=Ay(t),a=t,l=!lg(t),c=e.attrs,d=c===void 0?Ad:c,p=e.componentId,g=p===void 0?function(J,z){var re=typeof J!="string"?"sc":sw(J);ug[re]=(ug[re]||0)+1;var D="".concat(re,"-").concat(XT(xd+re+ug[re]));return z?"".concat(z,"-").concat(D):D}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(J){return lg(J)?"styled.".concat(J):"Styled(".concat(QD(J),")")}(t):v,T=e.displayName&&e.componentId?"".concat(sw(e.displayName),"-").concat(e.componentId):e.componentId||g,I=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(i&&a.shouldForwardProp){var B=a.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;P=function(J,z){return B(J,z)&&O(J,z)}}else P=B}var F=new bI(n,T,i?a.componentStyle:void 0);function G(J,z){return function(re,D,C){var k=re.attrs,U=re.componentStyle,M=re.defaultProps,R=re.foldedComponentIds,x=re.styledComponentId,ve=re.target,ne=ge.useContext(vc),q=jg(),se=re.shouldForwardProp||q.shouldForwardProp,fe=YT(D,ne,M)||Sl,de=function(Ce,Te,yt){for(var Fe,Tt=vn(vn({},Te),{className:void 0,theme:yt}),Dn=0;Dn<Ce.length;Dn+=1){var pe=ro(Fe=Ce[Dn])?Fe(Tt):Fe;for(var Se in pe)Tt[Se]=Se==="className"?Xa(Tt[Se],pe[Se]):Se==="style"?vn(vn({},Tt[Se]),pe[Se]):pe[Se]}return Te.className&&(Tt.className=Xa(Tt.className,Te.className)),Tt}(k,D,fe),V=de.as||ve,te={};for(var he in de)de[he]===void 0||he[0]==="$"||he==="as"||he==="theme"&&de.theme===fe||(he==="forwardedAs"?te.as=de.forwardedAs:se&&!se(he,V)||(te[he]=de[he]));var ue=function(Ce,Te){var yt=jg(),Fe=Ce.generateAndInjectStyles(Te,yt.styleSheet,yt.stylis);return Fe}(U,de),_e=Xa(R,x);return ue&&(_e+=" "+ue),de.className&&(_e+=" "+de.className),te[lg(V)&&!WT.has(V)?"class":"className"]=_e,C&&(te.ref=C),j.createElement(V,te)}(N,J,z)}G.displayName=E;var N=ge.forwardRef(G);return N.attrs=I,N.componentStyle=F,N.displayName=E,N.shouldForwardProp=P,N.foldedComponentIds=i?Xa(a.foldedComponentIds,a.styledComponentId):"",N.styledComponentId=T,N.target=i?a.target:t,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=i?function(z){for(var re=[],D=1;D<arguments.length;D++)re[D-1]=arguments[D];for(var C=0,k=re;C<k.length;C++)Vg(z,k[C],!0);return z}({},a.defaultProps,J):J}}),Ry(N,function(){return".".concat(N.styledComponentId)}),l&&t1(N,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function dw(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var pw=function(t){return Object.assign(t,{isCss:!0})};function l1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ro(t)||_c(t))return pw(ea(dw(Ad,yc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ea(i):pw(ea(dw(i,e)))}function Ug(t,e,n){if(n===void 0&&(n=Sl),!e)throw io(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,l1.apply(void 0,yc([a],l,!1)))};return i.attrs=function(a){return Ug(t,e,vn(vn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ug(t,e,vn(vn({},n),a))},i}var u1=function(t){return Ug(SI,t)},H=u1;WT.forEach(function(t){H[t]=u1(t)});var xI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=o1(e),Jf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Pg(ea(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Jf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function c1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=l1.apply(void 0,yc([t],e,!1)),a="sc-global-".concat(XT(JSON.stringify(i))),l=new xI(i,a),c=function(p){var g=jg(),v=ge.useContext(vc),E=ge.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(E,p,g.styleSheet,v,g.stylis),ge.useLayoutEffect(function(){if(!g.styleSheet.server)return d(E,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(E,g.styleSheet)}},[E,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,E,T){if(l.isStatic)l.renderStyles(p,HD,v,T);else{var I=vn(vn({},g),{theme:YT(g,E,c.defaultProps)});l.renderStyles(p,I,v,T)}}return ge.memo(c)}/**
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
 */const AI=()=>{};var mw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},RI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},f1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,I=g&63;p||(I=64,c||(T=64)),i.push(n[v],n[E],n[T],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(h1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const E=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||E==null)throw new CI;const T=l<<2|d>>4;if(i.push(T),g!==64){const I=d<<4&240|g>>2;if(i.push(I),E!==64){const P=g<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(t){const e=h1(t);return f1.encodeByteArray(e,!0)},ed=function(t){return DI(t).replace(/\./g,"")},d1=function(t){try{return f1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kI=()=>II().__FIREBASE_DEFAULTS__,OI=()=>{if(typeof process>"u"||typeof mw>"u")return;const t=mw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&d1(t[1]);return e&&JSON.parse(e)},Rd=()=>{try{return AI()||kI()||OI()||MI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},p1=t=>{var e,n;return(n=(e=Rd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},NI=t=>{const e=p1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},m1=()=>{var t;return(t=Rd())==null?void 0:t.config},g1=t=>{var e;return(e=Rd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function jl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function y1(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ed(JSON.stringify(n)),ed(JSON.stringify(c)),""].join(".")}const cc={};function LI(){const t={prod:[],emulator:[]};for(const e of Object.keys(cc))cc[e]?t.emulator.push(e):t.prod.push(e);return t}function jI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gw=!1;function _1(t,e){if(typeof window>"u"||typeof document>"u"||!jl(window.location.host)||cc[t]===e||cc[t]||gw)return;cc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=LI().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,I){T.setAttribute("width","24"),T.setAttribute("id",I),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{gw=!0,c()},T}function v(T,I){T.setAttribute("id",I),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=jI(i),I=n("text"),P=document.getElementById(I)||document.createElement("span"),B=n("learnmore"),O=document.getElementById(B)||document.createElement("a"),F=n("preprendIcon"),G=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const N=T.element;d(N),v(O,B);const J=g();p(G,F),N.append(G,P,O,J),document.body.appendChild(N)}l?(P.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vn())}function qI(){var e;const t=(e=Rd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FI(){const t=Vn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HI(){return!qI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GI(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="FirebaseError";class ds extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=WI,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?QI(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new ds(a,d,i)}}function QI(t,e){return t.replace(KI,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const KI=/\{\$([^}]+)}/g;function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(yw(l)&&yw(c)){if(!so(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nc(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function rc(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZI(t,e){const n=new JI(t,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ek(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=cg),a.error===void 0&&(a.error=cg),a.complete===void 0&&(a.complete=cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ek(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cg(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class ao{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new PI;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rk(e))try{this.getOrInitializeService({instanceIdentifier:Qa})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Qa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qa){return this.instances.has(e)}getOptions(e=Qa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qa){return this.component?this.component.multipleInstances?e:Qa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nk(t){return t===Qa?void 0:t}function rk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ye||(Ye={}));const sk={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},ak=Ye.INFO,ok={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},lk=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=ok[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cy{constructor(e){this.name=e,this._logLevel=ak,this._logHandler=lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const uk=(t,e)=>e.some(n=>t instanceof n);let _w,vw;function ck(){return _w||(_w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hk(){return vw||(vw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v1=new WeakMap,qg=new WeakMap,E1=new WeakMap,hg=new WeakMap,Dy=new WeakMap;function fk(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(ta(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&v1.set(n,t)}).catch(()=>{}),Dy.set(e,t),e}function dk(t){if(qg.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});qg.set(t,e)}let Bg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||E1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ta(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pk(t){Bg=t(Bg)}function mk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fg(this),e,...n);return E1.set(i,e.sort?e.sort():[e]),ta(i)}:hk().includes(t)?function(...e){return t.apply(fg(this),e),ta(v1.get(this))}:function(...e){return ta(t.apply(fg(this),e))}}function gk(t){return typeof t=="function"?mk(t):(t instanceof IDBTransaction&&dk(t),uk(t,ck())?new Proxy(t,Bg):t)}function ta(t){if(t instanceof IDBRequest)return fk(t);if(hg.has(t))return hg.get(t);const e=gk(t);return e!==t&&(hg.set(t,e),Dy.set(e,t)),e}const fg=t=>Dy.get(t);function yk(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=ta(c);return i&&c.addEventListener("upgradeneeded",p=>{i(ta(c.result),p.oldVersion,p.newVersion,ta(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const _k=["get","getKey","getAll","getAllKeys","count"],vk=["put","add","delete","clear"],dg=new Map;function Ew(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dg.get(e))return dg.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=vk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||_k.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return dg.set(e,l),l}pk(t=>({...t,get:(e,n,i)=>Ew(e,n)||t.get(e,n,i),has:(e,n)=>!!Ew(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zg="@firebase/app",ww="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Cy("@firebase/app"),bk="@firebase/app-compat",Tk="@firebase/analytics-compat",Sk="@firebase/analytics",xk="@firebase/app-check-compat",Ak="@firebase/app-check",Rk="@firebase/auth",Ck="@firebase/auth-compat",Dk="@firebase/database",Ik="@firebase/data-connect",kk="@firebase/database-compat",Ok="@firebase/functions",Mk="@firebase/functions-compat",Nk="@firebase/installations",Pk="@firebase/installations-compat",Vk="@firebase/messaging",Lk="@firebase/messaging-compat",jk="@firebase/performance",Uk="@firebase/performance-compat",qk="@firebase/remote-config",Bk="@firebase/remote-config-compat",zk="@firebase/storage",$k="@firebase/storage-compat",Fk="@firebase/firestore",Hk="@firebase/ai",Gk="@firebase/firestore-compat",Yk="firebase",Wk="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="[DEFAULT]",Qk={[zg]:"fire-core",[bk]:"fire-core-compat",[Sk]:"fire-analytics",[Tk]:"fire-analytics-compat",[Ak]:"fire-app-check",[xk]:"fire-app-check-compat",[Rk]:"fire-auth",[Ck]:"fire-auth-compat",[Dk]:"fire-rtdb",[Ik]:"fire-data-connect",[kk]:"fire-rtdb-compat",[Ok]:"fire-fn",[Mk]:"fire-fn-compat",[Nk]:"fire-iid",[Pk]:"fire-iid-compat",[Vk]:"fire-fcm",[Lk]:"fire-fcm-compat",[jk]:"fire-perf",[Uk]:"fire-perf-compat",[qk]:"fire-rc",[Bk]:"fire-rc-compat",[zk]:"fire-gcs",[$k]:"fire-gcs-compat",[Fk]:"fire-fst",[Gk]:"fire-fst-compat",[Hk]:"fire-vertex","fire-js":"fire-js",[Yk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map,Kk=new Map,Fg=new Map;function bw(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xl(t){const e=t.name;if(Fg.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Fg.set(e,t);for(const n of td.values())bw(n,t);for(const n of Kk.values())bw(n,t);return!0}function Iy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},na=new Pc("app","Firebase",Xk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ao("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw na.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=Wk;function w1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:$g,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw na.create("bad-app-name",{appName:String(a)});if(n||(n=m1()),!n)throw na.create("no-options");const l=td.get(a);if(l){if(so(n,l.options)&&so(i,l.config))return l;throw na.create("duplicate-app",{appName:a})}const c=new ik(a);for(const p of Fg.values())c.addComponent(p);const d=new Zk(n,i,c);return td.set(a,d),d}function b1(t=$g){const e=td.get(t);if(!e&&t===$g&&m1())return w1();if(!e)throw na.create("no-app",{appName:t});return e}function ra(t,e,n){let i=Qk[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(c.join(" "));return}xl(new ao(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jk="firebase-heartbeat-database",eO=1,Ec="firebase-heartbeat-store";let pg=null;function T1(){return pg||(pg=yk(Jk,eO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ec)}catch(n){console.warn(n)}}}}).catch(t=>{throw na.create("idb-open",{originalErrorMessage:t.message})})),pg}async function tO(t){try{const n=(await T1()).transaction(Ec),i=await n.objectStore(Ec).get(S1(t));return await n.done,i}catch(e){if(e instanceof ds)us.warn(e.message);else{const n=na.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Tw(t,e){try{const i=(await T1()).transaction(Ec,"readwrite");await i.objectStore(Ec).put(e,S1(t)),await i.done}catch(n){if(n instanceof ds)us.warn(n.message);else{const i=na.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(i.message)}}}function S1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nO=1024,rO=30;class iO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Sw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>rO){const c=oO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){us.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sw(),{heartbeatsToSend:i,unsentEntries:a}=sO(this._heartbeatsCache.heartbeats),l=ed(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return us.warn(n),""}}}function Sw(){return new Date().toISOString().substring(0,10)}function sO(t,e=nO){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),xw(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),xw(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class aO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GI()?YI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xw(t){return ed(JSON.stringify({version:2,heartbeats:t})).length}function oO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){xl(new ao("platform-logger",e=>new Ek(e),"PRIVATE")),xl(new ao("heartbeat",e=>new iO(e),"PRIVATE")),ra(zg,ww,t),ra(zg,ww,"esm2020"),ra("fire-js","")}lO("");function x1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uO=x1,A1=new Pc("auth","Firebase",x1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Cy("@firebase/auth");function cO(t,...e){nd.logLevel<=Ye.WARN&&nd.warn(`Auth (${Ul}): ${t}`,...e)}function Uf(t,...e){nd.logLevel<=Ye.ERROR&&nd.error(`Auth (${Ul}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,...e){throw ky(t,...e)}function mi(t,...e){return ky(t,...e)}function R1(t,e,n){const i={...uO(),[e]:n};return new Pc("auth","Firebase",i).create(e,{appName:t.name})}function as(t){return R1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ky(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return A1.create(t,...e)}function Oe(t,e,...n){if(!t)throw ky(e,...n)}function ts(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uf(e),new Error(e)}function cs(t,e){t||ts(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function hO(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hO()||zI()||"connection"in navigator)?navigator.onLine:!0}function dO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.shortDelay=e,this.longDelay=n,cs(n>e,"Short delay should be less than long delay!"),this.isMobile=UI()||$I()}get(){return fO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class C1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gO=new Lc(3e4,6e4);function ma(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ps(t,e,n,i,a={}){return D1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Vc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return BI()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&jl(t.emulatorConfig.host)&&(g.credentials="include"),C1.fetch()(await I1(t,t.config.apiHost,n,d),g)})}async function D1(t,e,n){t._canInitEmulator=!1;const i={...pO,...e};try{const a=new _O(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw wf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw wf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw wf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw R1(t,v,g);$r(t,v)}}catch(a){if(a instanceof ds)throw a;$r(t,"network-request-failed",{message:String(a)})}}async function jc(t,e,n,i,a={}){const l=await ps(t,e,n,i,a);return"mfaPendingCredential"in l&&$r(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function I1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Oy(t.config,a):`${t.config.apiScheme}://${a}`;return mO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _O{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),gO.get())})}}function wf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=mi(t,e,i);return a.customData._tokenResponse=n,a}function Rw(t){return t!==void 0&&t.enterprise!==void 0}class vO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EO(t,e){return ps(t,"GET","/v2/recaptchaConfig",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function rd(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bO(t,e=!1){const n=Jt(t),i=await n.getIdToken(e),a=My(i);Oe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:hc(mg(a.auth_time)),issuedAtTime:hc(mg(a.iat)),expirationTime:hc(mg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function mg(t){return Number(t)*1e3}function My(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const a=d1(n);return a?JSON.parse(a):(Uf("Failed to decode base64 JWT payload"),null)}catch(a){return Uf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Cw(t){const e=My(t);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ds&&TO(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function TO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hc(this.lastLoginAt),this.creationTime=hc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(t){var E;const e=t.auth,n=await t.getIdToken(),i=await Al(t,rd(e,{idToken:n}));Oe(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(E=a.providerUserInfo)!=null&&E.length?k1(a.providerUserInfo):[],c=AO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Gg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function xO(t){const e=Jt(t);await id(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function k1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e){const n=await D1(t,{},async()=>{const i=Vc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await I1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&jl(t.emulatorConfig.host)&&(p.credentials="include"),C1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CO(t,e){return ps(t,"POST","/v2/accounts:revokeToken",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Oe(e.length!==0,"internal-error");const n=Cw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await RO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new ml;return i&&(Oe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Oe(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Oe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return ts("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e){Oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new SO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Gg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Al(this,this.stsTokenManager.getToken(this.auth,e));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bO(this,e)}reload(){return xO(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await id(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rr(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await Al(this,wO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:E,emailVerified:T,isAnonymous:I,providerData:P,stsTokenManager:B}=n;Oe(E&&B,e,"internal-error");const O=ml.fromJSON(this.name,B);Oe(typeof E=="string",e,"internal-error"),Hs(i,e.name),Hs(a,e.name),Oe(typeof T=="boolean",e,"internal-error"),Oe(typeof I=="boolean",e,"internal-error"),Hs(l,e.name),Hs(c,e.name),Hs(d,e.name),Hs(p,e.name),Hs(g,e.name),Hs(v,e.name);const F=new Lr({uid:E,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:I,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:O,createdAt:g,lastLoginAt:v});return P&&Array.isArray(P)&&(F.providerData=P.map(G=>({...G}))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,n,i=!1){const a=new ml;a.updateFromServerResponse(n);const l=new Lr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await id(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];Oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?k1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new ml;d.updateFromIdToken(i);const p=new Lr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Gg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class O1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O1.type="NONE";const Iw=O1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e,n){return`firebase:${t}:${e}:${n}`}class gl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=qf(this.userKey,a.apiKey,l),this.fullPersistenceKey=qf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rd(this.auth,{idToken:e}).catch(()=>{});return n?Lr._fromGetAccountInfoResponse(this.auth,n,e):null}return Lr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new gl(ns(Iw),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ns(Iw);const c=qf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let E;if(typeof v=="string"){const T=await rd(e,{idToken:v}).catch(()=>{});if(!T)break;E=await Lr._fromGetAccountInfoResponse(e,T,v)}else E=Lr._fromJSON(e,v);g!==l&&(d=E),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new gl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new gl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(j1(e))return"Blackberry";if(U1(e))return"Webos";if(N1(e))return"Safari";if((e.includes("chrome/")||P1(e))&&!e.includes("edge/"))return"Chrome";if(L1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function M1(t=Vn()){return/firefox\//i.test(t)}function N1(t=Vn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P1(t=Vn()){return/crios\//i.test(t)}function V1(t=Vn()){return/iemobile/i.test(t)}function L1(t=Vn()){return/android/i.test(t)}function j1(t=Vn()){return/blackberry/i.test(t)}function U1(t=Vn()){return/webos/i.test(t)}function Ny(t=Vn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DO(t=Vn()){var e;return Ny(t)&&!!((e=window.navigator)!=null&&e.standalone)}function IO(){return FI()&&document.documentMode===10}function q1(t=Vn()){return Ny(t)||L1(t)||U1(t)||j1(t)||/windows phone/i.test(t)||V1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e=[]){let n;switch(t){case"Browser":n=kw(Vn());break;case"Worker":n=`${kw(Vn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ul}/${i}`}/**
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
 */class kO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function OO(t,e={}){return ps(t,"GET","/v2/passwordPolicy",ma(t,e))}/**
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
 */const MO=6;class NO{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ow(this),this.idTokenSubscription=new Ow(this),this.beforeStateQueue=new kO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ns(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await gl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rd(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Rr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await id(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rr(this.app))return Promise.reject(as(this));const n=e?Jt(e):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rr(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rr(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ns(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OO(this),n=new NO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await CO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ns(e)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await gl.create(this,[ns(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=B1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Rr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&cO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ho(t){return Jt(t)}class Ow{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZI(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VO(t){Cd=t}function z1(t){return Cd.loadJS(t)}function LO(){return Cd.recaptchaEnterpriseScript}function jO(){return Cd.gapiScript}function UO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qO{constructor(){this.enterprise=new BO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zO="recaptcha-enterprise",$1="NO_RECAPTCHA";class $O{constructor(e){this.type=zO,this.auth=ho(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{EO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new vO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Rw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c($1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Rw(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=LO();p.length!==0&&(p+=d),z1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Mw(t,e,n,i=!1,a=!1){const l=new $O(t);let c;if(a)c=$1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Yg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Mw(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Mw(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t,e){const n=Iy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(so(l,e??{}))return a;$r(a,"already-initialized")}return n.initialize({options:e})}function HO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ns);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function GO(t,e,n){const i=ho(t);Oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=F1(e),{host:c,port:d}=YO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(so(g,i.config.emulator)&&so(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,jl(c)?(y1(`${l}//${c}${p}`),_1("Auth",!0)):WO()}function F1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YO(t){const e=F1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Nw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Nw(c)}}}function Nw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,n){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}async function QO(t,e){return ps(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e){return jc(t,"POST","/v1/accounts:signInWithPassword",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return jc(t,"POST","/v1/accounts:signInWithEmailLink",ma(t,e))}async function ZO(t,e){return jc(t,"POST","/v1/accounts:signInWithEmailLink",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Py{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new wc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new wc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yg(e,n,"signInWithPassword",KO);case"emailLink":return XO(e,{email:this._email,oobCode:this._password});default:$r(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yg(e,i,"signUpPassword",QO);case"emailLink":return ZO(e,{idToken:n,email:this._email,oobCode:this._password});default:$r(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t,e){return jc(t,"POST","/v1/accounts:signInWithIdp",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO="http://localhost";class oo extends Py{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new oo(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return yl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,yl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yl(e,n)}buildRequest(){const e={requestUri:JO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tM(t){const e=nc(rc(t)).link,n=e?nc(rc(e)).deep_link_id:null,i=nc(rc(t)).deep_link_id;return(i?nc(rc(i)).link:null)||i||n||e||t}class Vy{constructor(e){const n=nc(rc(e)),i=n.apiKey??null,a=n.oobCode??null,l=eM(n.mode??null);Oe(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tM(e);try{return new Vy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.providerId=ql.PROVIDER_ID}static credential(e,n){return wc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Vy.parseLink(n);return Oe(i,"argument-error"),wc._fromEmailAndCode(e,i.code,i.tenantId)}}ql.PROVIDER_ID="password";ql.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ql.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends H1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Uc{constructor(){super("facebook.com")}static credential(e){return oo._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qs.credential(e.oauthAccessToken)}catch{return null}}}Qs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Uc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oo._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ks.credential(n,i)}catch{return null}}}Ks.GOOGLE_SIGN_IN_METHOD="google.com";Ks.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Uc{constructor(){super("github.com")}static credential(e){return oo._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xs.credential(e.oauthAccessToken)}catch{return null}}}Xs.GITHUB_SIGN_IN_METHOD="github.com";Xs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Uc{constructor(){super("twitter.com")}static credential(e,n){return oo._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Zs.credential(n,i)}catch{return null}}}Zs.TWITTER_SIGN_IN_METHOD="twitter.com";Zs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(t,e){return jc(t,"POST","/v1/accounts:signUp",ma(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await Lr._fromIdTokenResponse(e,i,a),c=Pw(i);return new lo({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=Pw(i);return new lo({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function Pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends ds{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,sd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new sd(e,n,i,a)}}function G1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?sd._fromErrorAndOperation(t,l,e,i):l})}async function rM(t,e,n=!1){const i=await Al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lo._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e,n=!1){const{auth:i}=t;if(Rr(i.app))return Promise.reject(as(i));const a="reauthenticate";try{const l=await Al(t,G1(i,a,e,t),n);Oe(l.idToken,i,"internal-error");const c=My(l.idToken);Oe(c,i,"internal-error");const{sub:d}=c;return Oe(t.uid===d,i,"user-mismatch"),lo._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$r(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(t,e,n=!1){if(Rr(t.app))return Promise.reject(as(t));const i="signIn",a=await G1(t,i,e),l=await lo._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function sM(t,e){return Y1(ho(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t){const e=ho(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aM(t,e,n){if(Rr(t.app))return Promise.reject(as(t));const i=ho(t),c=await Yg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&W1(t),p}),d=await lo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function oM(t,e,n){return Rr(t.app)?Promise.reject(as(t)):sM(Jt(t),ql.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&W1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Jt(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await Al(i,lM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function cM(t,e,n,i){return Jt(t).onIdTokenChanged(e,n,i)}function hM(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}function qc(t,e,n,i){return Jt(t).onAuthStateChanged(e,n,i)}function fM(t){return Jt(t).signOut()}const ad="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ad,"1"),this.storage.removeItem(ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=1e3,pM=10;class K1 extends Q1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);IO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,pM):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},dM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}K1.type="LOCAL";const mM=K1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1 extends Q1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X1.type="SESSION";const Z1=X1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Dd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await gM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Ly("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(E){const T=E;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return window}function _M(t){gi().location.href=t}/**
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
 */function J1(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function vM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function wM(){return J1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebaseLocalStorageDb",bM=1,od="firebaseLocalStorage",tS="fbase_key";class Bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([od],e?"readwrite":"readonly").objectStore(od)}function TM(){const t=indexedDB.deleteDatabase(eS);return new Bc(t).toPromise()}function Wg(){const t=indexedDB.open(eS,bM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(od,{keyPath:tS})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(od)?e(i):(i.close(),await TM(),e(await Wg()))})})}async function Vw(t,e,n){const i=Id(t,!0).put({[tS]:e,value:n});return new Bc(i).toPromise()}async function SM(t,e){const n=Id(t,!1).get(e),i=await new Bc(n).toPromise();return i===void 0?null:i.value}function Lw(t,e){const n=Id(t,!0).delete(e);return new Bc(n).toPromise()}const xM=800,AM=3;class nS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>AM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dd._getInstance(wM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await vM(),!this.activeServiceWorker)return;this.sender=new yM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await Vw(e,ad,"1"),await Lw(e,ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vw(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>SM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Id(a,!1).getAll();return new Bc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nS.type="LOCAL";const RM=nS;new Lc(3e4,6e4);/**
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
 */function CM(t,e){return e?ns(e):(Oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends Py{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DM(t){return Y1(t.auth,new jy(t),t.bypassAuthState)}function IM(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),iM(n,new jy(t),t.bypassAuthState)}async function kM(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),rM(n,new jy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DM;case"linkViaPopup":case"linkViaRedirect":return kM;case"reauthViaPopup":case"reauthViaRedirect":return IM;default:$r(this.auth,"internal-error")}}resolve(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=new Lc(2e3,1e4);class pl extends rS{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,pl.currentPopupAction&&pl.currentPopupAction.cancel(),pl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){cs(this.filter.length===1,"Popup operations only handle one event");const e=Ly();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OM.get())};e()}}pl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="pendingRedirect",Bf=new Map;class NM extends rS{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Bf.get(this.auth._key());if(!e){try{const i=await PM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bf.set(this.auth._key(),e)}return this.bypassAuthState||Bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PM(t,e){const n=jM(e),i=LM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function VM(t,e){Bf.set(t._key(),e)}function LM(t){return ns(t._redirectPersistence)}function jM(t){return qf(MM,t.config.apiKey,t.name)}async function UM(t,e,n=!1){if(Rr(t.app))return Promise.reject(as(t));const i=ho(t),a=CM(i,e),c=await new NM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=600*1e3;class BM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!iS(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qM&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $M(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HM=/^https?/;async function GM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $M(t);for(const n of e)try{if(YM(n))return}catch{}$r(t,"unauthorized-domain")}function YM(t){const e=Hg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!HM.test(n))return!1;if(FM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const WM=new Lc(3e4,6e4);function Uw(){const t=gi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QM(t){return new Promise((e,n)=>{var a,l,c;function i(){Uw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uw(),n(mi(t,"network-request-failed"))},timeout:WM.get()})}if((l=(a=gi().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=gi().gapi)!=null&&c.load)i();else{const d=UO("iframefcb");return gi()[d]=()=>{gapi.load?i():n(mi(t,"network-request-failed"))},z1(`${jO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw zf=null,e})}let zf=null;function KM(t){return zf=zf||QM(t),zf}/**
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
 */const XM=new Lc(5e3,15e3),ZM="__/auth/iframe",JM="emulator/auth/iframe",eN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nN(t){const e=t.config;Oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oy(e,JM):`https://${t.config.authDomain}/${ZM}`,i={apiKey:e.apiKey,appName:t.name,v:Ul},a=tN.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Vc(i).slice(1)}`}async function rN(t){const e=await KM(t),n=gi().gapi;return Oe(n,t,"internal-error"),e.open({where:document.body,url:nN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eN,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=mi(t,"network-request-failed"),d=gi().setTimeout(()=>{l(c)},XM.get());function p(){gi().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const iN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,aN=600,oN="_blank",lN="http://localhost";class qw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uN(t,e,n,i=sN,a=aN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...iN,width:i.toString(),height:a.toString(),top:l,left:c},g=Vn().toLowerCase();n&&(d=P1(g)?oN:n),M1(g)&&(e=e||lN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[I,P])=>`${T}${I}=${P},`,"");if(DO(g)&&d!=="_self")return cN(e||"",d),new qw(null);const E=window.open(e||"",d,v);Oe(E,t,"popup-blocked");try{E.focus()}catch{}return new qw(E)}function cN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const hN="__/auth/handler",fN="emulator/auth/handler",dN=encodeURIComponent("fac");async function Bw(t,e,n,i,a,l){Oe(t.config.authDomain,t,"auth-domain-config-required"),Oe(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ul,eventId:a};if(e instanceof H1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",XI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Uc){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${dN}=${encodeURIComponent(p)}`:"";return`${pN(t)}?${Vc(d).slice(1)}${g}`}function pN({config:t}){return t.emulator?Oy(t,fN):`https://${t.authDomain}/${hN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="webStorageSupport";class mN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z1,this._completeRedirectFn=UM,this._overrideRedirectResult=VM}async _openPopup(e,n,i,a){var c;cs((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Bw(e,n,i,Hg(),a);return uN(e,l,Ly())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await Bw(e,n,i,Hg(),a);return _M(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(cs(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await rN(e),i=new BM(e);return n.register("authEvent",a=>(Oe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gg,{type:gg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[gg];l!==void 0&&n(!!l),$r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q1()||N1()||Ny()}}const gN=mN;var zw="@firebase/auth",$w="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vN(t){xl(new ao("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Oe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:B1(t)},g=new PO(i,a,l,p);return HO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),xl(new ao("auth-internal",e=>{const n=ho(e.getProvider("auth").getImmediate());return(i=>new yN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ra(zw,$w,_N(t)),ra(zw,$w,"esm2020")}/**
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
 */const EN=300,wN=g1("authIdTokenMaxAge")||EN;let Fw=null;const bN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>wN)return;const a=n==null?void 0:n.token;Fw!==a&&(Fw=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function TN(t=b1()){const e=Iy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FO(t,{popupRedirectResolver:gN,persistence:[RM,mM,Z1]}),i=g1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bN(l.toString());hM(n,c,()=>c(n.currentUser)),cM(n,d=>c(d))}}const a=p1("auth");return a&&GO(n,`http://${a}`),n}function SN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}VO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=mi("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",SN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vN("Browser");var xN="firebase",AN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ra(xN,AN,"app");var Hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ia,sS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,C){function k(){}k.prototype=C.prototype,D.D=C.prototype,D.prototype=new k,D.prototype.constructor=D,D.C=function(U,M,R){for(var x=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)x[ve-2]=arguments[ve];return C.prototype[M].apply(U,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,C,k){k||(k=0);var U=Array(16);if(typeof C=="string")for(var M=0;16>M;++M)U[M]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(M=0;16>M;++M)U[M]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=D.g[0],k=D.g[1],M=D.g[2];var R=D.g[3],x=C+(R^k&(M^R))+U[0]+3614090360&4294967295;C=k+(x<<7&4294967295|x>>>25),x=R+(M^C&(k^M))+U[1]+3905402710&4294967295,R=C+(x<<12&4294967295|x>>>20),x=M+(k^R&(C^k))+U[2]+606105819&4294967295,M=R+(x<<17&4294967295|x>>>15),x=k+(C^M&(R^C))+U[3]+3250441966&4294967295,k=M+(x<<22&4294967295|x>>>10),x=C+(R^k&(M^R))+U[4]+4118548399&4294967295,C=k+(x<<7&4294967295|x>>>25),x=R+(M^C&(k^M))+U[5]+1200080426&4294967295,R=C+(x<<12&4294967295|x>>>20),x=M+(k^R&(C^k))+U[6]+2821735955&4294967295,M=R+(x<<17&4294967295|x>>>15),x=k+(C^M&(R^C))+U[7]+4249261313&4294967295,k=M+(x<<22&4294967295|x>>>10),x=C+(R^k&(M^R))+U[8]+1770035416&4294967295,C=k+(x<<7&4294967295|x>>>25),x=R+(M^C&(k^M))+U[9]+2336552879&4294967295,R=C+(x<<12&4294967295|x>>>20),x=M+(k^R&(C^k))+U[10]+4294925233&4294967295,M=R+(x<<17&4294967295|x>>>15),x=k+(C^M&(R^C))+U[11]+2304563134&4294967295,k=M+(x<<22&4294967295|x>>>10),x=C+(R^k&(M^R))+U[12]+1804603682&4294967295,C=k+(x<<7&4294967295|x>>>25),x=R+(M^C&(k^M))+U[13]+4254626195&4294967295,R=C+(x<<12&4294967295|x>>>20),x=M+(k^R&(C^k))+U[14]+2792965006&4294967295,M=R+(x<<17&4294967295|x>>>15),x=k+(C^M&(R^C))+U[15]+1236535329&4294967295,k=M+(x<<22&4294967295|x>>>10),x=C+(M^R&(k^M))+U[1]+4129170786&4294967295,C=k+(x<<5&4294967295|x>>>27),x=R+(k^M&(C^k))+U[6]+3225465664&4294967295,R=C+(x<<9&4294967295|x>>>23),x=M+(C^k&(R^C))+U[11]+643717713&4294967295,M=R+(x<<14&4294967295|x>>>18),x=k+(R^C&(M^R))+U[0]+3921069994&4294967295,k=M+(x<<20&4294967295|x>>>12),x=C+(M^R&(k^M))+U[5]+3593408605&4294967295,C=k+(x<<5&4294967295|x>>>27),x=R+(k^M&(C^k))+U[10]+38016083&4294967295,R=C+(x<<9&4294967295|x>>>23),x=M+(C^k&(R^C))+U[15]+3634488961&4294967295,M=R+(x<<14&4294967295|x>>>18),x=k+(R^C&(M^R))+U[4]+3889429448&4294967295,k=M+(x<<20&4294967295|x>>>12),x=C+(M^R&(k^M))+U[9]+568446438&4294967295,C=k+(x<<5&4294967295|x>>>27),x=R+(k^M&(C^k))+U[14]+3275163606&4294967295,R=C+(x<<9&4294967295|x>>>23),x=M+(C^k&(R^C))+U[3]+4107603335&4294967295,M=R+(x<<14&4294967295|x>>>18),x=k+(R^C&(M^R))+U[8]+1163531501&4294967295,k=M+(x<<20&4294967295|x>>>12),x=C+(M^R&(k^M))+U[13]+2850285829&4294967295,C=k+(x<<5&4294967295|x>>>27),x=R+(k^M&(C^k))+U[2]+4243563512&4294967295,R=C+(x<<9&4294967295|x>>>23),x=M+(C^k&(R^C))+U[7]+1735328473&4294967295,M=R+(x<<14&4294967295|x>>>18),x=k+(R^C&(M^R))+U[12]+2368359562&4294967295,k=M+(x<<20&4294967295|x>>>12),x=C+(k^M^R)+U[5]+4294588738&4294967295,C=k+(x<<4&4294967295|x>>>28),x=R+(C^k^M)+U[8]+2272392833&4294967295,R=C+(x<<11&4294967295|x>>>21),x=M+(R^C^k)+U[11]+1839030562&4294967295,M=R+(x<<16&4294967295|x>>>16),x=k+(M^R^C)+U[14]+4259657740&4294967295,k=M+(x<<23&4294967295|x>>>9),x=C+(k^M^R)+U[1]+2763975236&4294967295,C=k+(x<<4&4294967295|x>>>28),x=R+(C^k^M)+U[4]+1272893353&4294967295,R=C+(x<<11&4294967295|x>>>21),x=M+(R^C^k)+U[7]+4139469664&4294967295,M=R+(x<<16&4294967295|x>>>16),x=k+(M^R^C)+U[10]+3200236656&4294967295,k=M+(x<<23&4294967295|x>>>9),x=C+(k^M^R)+U[13]+681279174&4294967295,C=k+(x<<4&4294967295|x>>>28),x=R+(C^k^M)+U[0]+3936430074&4294967295,R=C+(x<<11&4294967295|x>>>21),x=M+(R^C^k)+U[3]+3572445317&4294967295,M=R+(x<<16&4294967295|x>>>16),x=k+(M^R^C)+U[6]+76029189&4294967295,k=M+(x<<23&4294967295|x>>>9),x=C+(k^M^R)+U[9]+3654602809&4294967295,C=k+(x<<4&4294967295|x>>>28),x=R+(C^k^M)+U[12]+3873151461&4294967295,R=C+(x<<11&4294967295|x>>>21),x=M+(R^C^k)+U[15]+530742520&4294967295,M=R+(x<<16&4294967295|x>>>16),x=k+(M^R^C)+U[2]+3299628645&4294967295,k=M+(x<<23&4294967295|x>>>9),x=C+(M^(k|~R))+U[0]+4096336452&4294967295,C=k+(x<<6&4294967295|x>>>26),x=R+(k^(C|~M))+U[7]+1126891415&4294967295,R=C+(x<<10&4294967295|x>>>22),x=M+(C^(R|~k))+U[14]+2878612391&4294967295,M=R+(x<<15&4294967295|x>>>17),x=k+(R^(M|~C))+U[5]+4237533241&4294967295,k=M+(x<<21&4294967295|x>>>11),x=C+(M^(k|~R))+U[12]+1700485571&4294967295,C=k+(x<<6&4294967295|x>>>26),x=R+(k^(C|~M))+U[3]+2399980690&4294967295,R=C+(x<<10&4294967295|x>>>22),x=M+(C^(R|~k))+U[10]+4293915773&4294967295,M=R+(x<<15&4294967295|x>>>17),x=k+(R^(M|~C))+U[1]+2240044497&4294967295,k=M+(x<<21&4294967295|x>>>11),x=C+(M^(k|~R))+U[8]+1873313359&4294967295,C=k+(x<<6&4294967295|x>>>26),x=R+(k^(C|~M))+U[15]+4264355552&4294967295,R=C+(x<<10&4294967295|x>>>22),x=M+(C^(R|~k))+U[6]+2734768916&4294967295,M=R+(x<<15&4294967295|x>>>17),x=k+(R^(M|~C))+U[13]+1309151649&4294967295,k=M+(x<<21&4294967295|x>>>11),x=C+(M^(k|~R))+U[4]+4149444226&4294967295,C=k+(x<<6&4294967295|x>>>26),x=R+(k^(C|~M))+U[11]+3174756917&4294967295,R=C+(x<<10&4294967295|x>>>22),x=M+(C^(R|~k))+U[2]+718787259&4294967295,M=R+(x<<15&4294967295|x>>>17),x=k+(R^(M|~C))+U[9]+3951481745&4294967295,D.g[0]=D.g[0]+C&4294967295,D.g[1]=D.g[1]+(M+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+M&4294967295,D.g[3]=D.g[3]+R&4294967295}i.prototype.u=function(D,C){C===void 0&&(C=D.length);for(var k=C-this.blockSize,U=this.B,M=this.h,R=0;R<C;){if(M==0)for(;R<=k;)a(this,D,R),R+=this.blockSize;if(typeof D=="string"){for(;R<C;)if(U[M++]=D.charCodeAt(R++),M==this.blockSize){a(this,U),M=0;break}}else for(;R<C;)if(U[M++]=D[R++],M==this.blockSize){a(this,U),M=0;break}}this.h=M,this.o+=C},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var C=1;C<D.length-8;++C)D[C]=0;var k=8*this.o;for(C=D.length-8;C<D.length;++C)D[C]=k&255,k/=256;for(this.u(D),D=Array(16),C=k=0;4>C;++C)for(var U=0;32>U;U+=8)D[k++]=this.g[C]>>>U&255;return D};function l(D,C){var k=d;return Object.prototype.hasOwnProperty.call(k,D)?k[D]:k[D]=C(D)}function c(D,C){this.h=C;for(var k=[],U=!0,M=D.length-1;0<=M;M--){var R=D[M]|0;U&&R==C||(k[M]=R,U=!1)}this.g=k}var d={};function p(D){return-128<=D&&128>D?l(D,function(C){return new c([C|0],0>C?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return O(g(-D));for(var C=[],k=1,U=0;D>=k;U++)C[U]=D/k|0,k*=4294967296;return new c(C,0)}function v(D,C){if(D.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D.charAt(0)=="-")return O(v(D.substring(1),C));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=g(Math.pow(C,8)),U=E,M=0;M<D.length;M+=8){var R=Math.min(8,D.length-M),x=parseInt(D.substring(M,M+R),C);8>R?(R=g(Math.pow(C,R)),U=U.j(R).add(g(x))):(U=U.j(k),U=U.add(g(x)))}return U}var E=p(0),T=p(1),I=p(16777216);t=c.prototype,t.m=function(){if(B(this))return-O(this).m();for(var D=0,C=1,k=0;k<this.g.length;k++){var U=this.i(k);D+=(0<=U?U:4294967296+U)*C,C*=4294967296}return D},t.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(B(this))return"-"+O(this).toString(D);for(var C=g(Math.pow(D,6)),k=this,U="";;){var M=J(k,C).g;k=F(k,M.j(C));var R=((0<k.g.length?k.g[0]:k.h)>>>0).toString(D);if(k=M,P(k))return R+U;for(;6>R.length;)R="0"+R;U=R+U}},t.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var C=0;C<D.g.length;C++)if(D.g[C]!=0)return!1;return!0}function B(D){return D.h==-1}t.l=function(D){return D=F(this,D),B(D)?-1:P(D)?0:1};function O(D){for(var C=D.g.length,k=[],U=0;U<C;U++)k[U]=~D.g[U];return new c(k,~D.h).add(T)}t.abs=function(){return B(this)?O(this):this},t.add=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],U=0,M=0;M<=C;M++){var R=U+(this.i(M)&65535)+(D.i(M)&65535),x=(R>>>16)+(this.i(M)>>>16)+(D.i(M)>>>16);U=x>>>16,R&=65535,x&=65535,k[M]=x<<16|R}return new c(k,k[k.length-1]&-2147483648?-1:0)};function F(D,C){return D.add(O(C))}t.j=function(D){if(P(this)||P(D))return E;if(B(this))return B(D)?O(this).j(O(D)):O(O(this).j(D));if(B(D))return O(this.j(O(D)));if(0>this.l(I)&&0>D.l(I))return g(this.m()*D.m());for(var C=this.g.length+D.g.length,k=[],U=0;U<2*C;U++)k[U]=0;for(U=0;U<this.g.length;U++)for(var M=0;M<D.g.length;M++){var R=this.i(U)>>>16,x=this.i(U)&65535,ve=D.i(M)>>>16,ne=D.i(M)&65535;k[2*U+2*M]+=x*ne,G(k,2*U+2*M),k[2*U+2*M+1]+=R*ne,G(k,2*U+2*M+1),k[2*U+2*M+1]+=x*ve,G(k,2*U+2*M+1),k[2*U+2*M+2]+=R*ve,G(k,2*U+2*M+2)}for(U=0;U<C;U++)k[U]=k[2*U+1]<<16|k[2*U];for(U=C;U<2*C;U++)k[U]=0;return new c(k,0)};function G(D,C){for(;(D[C]&65535)!=D[C];)D[C+1]+=D[C]>>>16,D[C]&=65535,C++}function N(D,C){this.g=D,this.h=C}function J(D,C){if(P(C))throw Error("division by zero");if(P(D))return new N(E,E);if(B(D))return C=J(O(D),C),new N(O(C.g),O(C.h));if(B(C))return C=J(D,O(C)),new N(O(C.g),C.h);if(30<D.g.length){if(B(D)||B(C))throw Error("slowDivide_ only works with positive integers.");for(var k=T,U=C;0>=U.l(D);)k=z(k),U=z(U);var M=re(k,1),R=re(U,1);for(U=re(U,2),k=re(k,2);!P(U);){var x=R.add(U);0>=x.l(D)&&(M=M.add(k),R=x),U=re(U,1),k=re(k,1)}return C=F(D,M.j(C)),new N(M,C)}for(M=E;0<=D.l(C);){for(k=Math.max(1,Math.floor(D.m()/C.m())),U=Math.ceil(Math.log(k)/Math.LN2),U=48>=U?1:Math.pow(2,U-48),R=g(k),x=R.j(C);B(x)||0<x.l(D);)k-=U,R=g(k),x=R.j(C);P(R)&&(R=T),M=M.add(R),D=F(D,x)}return new N(M,D)}t.A=function(D){return J(this,D).h},t.and=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],U=0;U<C;U++)k[U]=this.i(U)&D.i(U);return new c(k,this.h&D.h)},t.or=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],U=0;U<C;U++)k[U]=this.i(U)|D.i(U);return new c(k,this.h|D.h)},t.xor=function(D){for(var C=Math.max(this.g.length,D.g.length),k=[],U=0;U<C;U++)k[U]=this.i(U)^D.i(U);return new c(k,this.h^D.h)};function z(D){for(var C=D.g.length+1,k=[],U=0;U<C;U++)k[U]=D.i(U)<<1|D.i(U-1)>>>31;return new c(k,D.h)}function re(D,C){var k=C>>5;C%=32;for(var U=D.g.length-k,M=[],R=0;R<U;R++)M[R]=0<C?D.i(R+k)>>>C|D.i(R+k+1)<<32-C:D.i(R+k);return new c(M,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,sS=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,ia=c}).apply(typeof Hw<"u"?Hw:typeof self<"u"?self:typeof window<"u"?window:{});var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,ic,oS,$f,Qg,lS,uS,cS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,w){return h==Array.prototype||h==Object.prototype||(h[y]=w.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof bf=="object"&&bf];for(var y=0;y<h.length;++y){var w=h[y];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var w=i;h=h.split(".");for(var A=0;A<h.length-1;A++){var W=h[A];if(!(W in w))break e;w=w[W]}h=h[h.length-1],A=w[h],y=y(A),y!=A&&y!=null&&e(w,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var w=0,A=!1,W={next:function(){if(!A&&w<h.length){var ee=w++;return{value:y(ee,h[ee]),done:!1}}return A=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,w){return h.call.apply(h.bind,arguments)}function E(h,y,w){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var W=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(W,A),h.apply(y,W)}}return function(){return h.apply(y,arguments)}}function T(h,y,w){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function I(h,y){var w=Array.prototype.slice.call(arguments,1);return function(){var A=w.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function P(h,y){function w(){}w.prototype=y.prototype,h.aa=y.prototype,h.prototype=new w,h.prototype.constructor=h,h.Qb=function(A,W,ee){for(var me=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)me[Ke-2]=arguments[Ke];return y.prototype[W].apply(A,me)}}function B(h){const y=h.length;if(0<y){const w=Array(y);for(let A=0;A<y;A++)w[A]=h[A];return w}return[]}function O(h,y){for(let w=1;w<arguments.length;w++){const A=arguments[w];if(p(A)){const W=h.length||0,ee=A.length||0;h.length=W+ee;for(let me=0;me<ee;me++)h[W+me]=A[me]}else h.push(A)}}class F{constructor(y,w){this.i=y,this.j=w,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function G(h){return/^[\s\xa0]*$/.test(h)}function N(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function J(h){return J[" "](h),h}J[" "]=function(){};var z=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function re(h,y,w){for(const A in h)y.call(w,h[A],A,h)}function D(h,y){for(const w in h)y.call(void 0,h[w],w,h)}function C(h){const y={};for(const w in h)y[w]=h[w];return y}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(h,y){let w,A;for(let W=1;W<arguments.length;W++){A=arguments[W];for(w in A)h[w]=A[w];for(let ee=0;ee<k.length;ee++)w=k[ee],Object.prototype.hasOwnProperty.call(A,w)&&(h[w]=A[w])}}function M(h){var y=1;h=h.split(":");const w=[];for(;0<y&&h.length;)w.push(h.shift()),y--;return h.length&&w.push(h.join(":")),w}function R(h){d.setTimeout(()=>{throw h},0)}function x(){var h=de;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class ve{constructor(){this.h=this.g=null}add(y,w){const A=ne.get();A.set(y,w),this.h?this.h.next=A:this.g=A,this.h=A}}var ne=new F(()=>new q,h=>h.reset());class q{constructor(){this.next=this.g=this.h=null}set(y,w){this.h=y,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let se,fe=!1,de=new ve,V=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then(te)}};var te=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(w){R(w)}var y=ne;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}fe=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const w=()=>{};d.addEventListener("test",w,y),d.removeEventListener("test",w,y)}catch{}return h}();function Ce(h,y){if(ue.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var w=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(z){e:{try{J(y.nodeName);var W=!0;break e}catch{}W=!1}W||(y=null)}}else w=="mouseover"?y=h.fromElement:w=="mouseout"&&(y=h.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Te[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}P(Ce,ue);var Te={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Tt(h,y,w,A,W){this.listener=h,this.proxy=null,this.src=y,this.type=w,this.capture=!!A,this.ha=W,this.key=++Fe,this.da=this.fa=!1}function Dn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function pe(h){this.src=h,this.g={},this.h=0}pe.prototype.add=function(h,y,w,A,W){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var me=be(h,y,A,W);return-1<me?(y=h[me],w||(y.fa=!1)):(y=new Tt(y,this.src,ee,!!A,W),y.fa=w,h.push(y)),y};function Se(h,y){var w=y.type;if(w in h.g){var A=h.g[w],W=Array.prototype.indexOf.call(A,y,void 0),ee;(ee=0<=W)&&Array.prototype.splice.call(A,W,1),ee&&(Dn(y),h.g[w].length==0&&(delete h.g[w],h.h--))}}function be(h,y,w,A){for(var W=0;W<h.length;++W){var ee=h[W];if(!ee.da&&ee.listener==y&&ee.capture==!!w&&ee.ha==A)return W}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),it={};function Kn(h,y,w,A,W){if(Array.isArray(y)){for(var ee=0;ee<y.length;ee++)Kn(h,y[ee],w,A,W);return null}return w=go(w),h&&h[yt]?h.K(y,w,g(A)?!!A.capture:!1,W):Lt(h,y,w,!1,A,W)}function Lt(h,y,w,A,W,ee){if(!y)throw Error("Invalid event type");var me=g(W)?!!W.capture:!!W,Ke=Yr(h);if(Ke||(h[Pe]=Ke=new pe(h)),w=Ke.add(y,w,A,me,ee),w.proxy)return w;if(A=Gr(),w.proxy=A,A.src=h,A.listener=w,h.addEventListener)_e||(W=me),W===void 0&&(W=!1),h.addEventListener(y.toString(),A,W);else if(h.attachEvent)h.attachEvent(Si(y.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return w}function Gr(){function h(w){return y.call(h.src,h.listener,w)}const y=mo;return h}function Xn(h,y,w,A,W){if(Array.isArray(y))for(var ee=0;ee<y.length;ee++)Xn(h,y[ee],w,A,W);else A=g(A)?!!A.capture:!!A,w=go(w),h&&h[yt]?(h=h.i,y=String(y).toString(),y in h.g&&(ee=h.g[y],w=be(ee,w,A,W),-1<w&&(Dn(ee[w]),Array.prototype.splice.call(ee,w,1),ee.length==0&&(delete h.g[y],h.h--)))):h&&(h=Yr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=be(y,w,A,W)),(w=-1<h?y[h]:null)&&fr(w))}function fr(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[yt])Se(y.i,h);else{var w=h.type,A=h.proxy;y.removeEventListener?y.removeEventListener(w,A,h.capture):y.detachEvent?y.detachEvent(Si(w),A):y.addListener&&y.removeListener&&y.removeListener(A),(w=Yr(y))?(Se(w,h),w.h==0&&(w.src=null,y[Pe]=null)):Dn(h)}}}function Si(h){return h in it?it[h]:it[h]="on"+h}function mo(h,y){if(h.da)h=!0;else{y=new Ce(y,this);var w=h.listener,A=h.ha||h.src;h.fa&&fr(h),h=w.call(A,y)}return h}function Yr(h){return h=h[Pe],h instanceof pe?h:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(h){return typeof h=="function"?h:(h[xi]||(h[xi]=function(y){return h.handleEvent(y)}),h[xi])}function xt(){he.call(this),this.i=new pe(this),this.M=this,this.F=null}P(xt,he),xt.prototype[yt]=!0,xt.prototype.removeEventListener=function(h,y,w,A){Xn(this,h,y,w,A)};function nt(h,y){var w,A=h.F;if(A)for(w=[];A;A=A.F)w.push(A);if(h=h.M,A=y.type||y,typeof y=="string")y=new ue(y,h);else if(y instanceof ue)y.target=y.target||h;else{var W=y;y=new ue(A,h),U(y,W)}if(W=!0,w)for(var ee=w.length-1;0<=ee;ee--){var me=y.g=w[ee];W=Ln(me,A,!0,y)&&W}if(me=y.g=h,W=Ln(me,A,!0,y)&&W,W=Ln(me,A,!1,y)&&W,w)for(ee=0;ee<w.length;ee++)me=y.g=w[ee],W=Ln(me,A,!1,y)&&W}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var w=h.g[y],A=0;A<w.length;A++)Dn(w[A]);delete h.g[y],h.h--}}this.F=null},xt.prototype.K=function(h,y,w,A){return this.i.add(String(h),y,!1,w,A)},xt.prototype.L=function(h,y,w,A){return this.i.add(String(h),y,!0,w,A)};function Ln(h,y,w,A){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var W=!0,ee=0;ee<y.length;++ee){var me=y[ee];if(me&&!me.da&&me.capture==w){var Ke=me.listener,tn=me.ha||me.src;me.fa&&Se(h.i,me),W=Ke.call(tn,A)!==!1&&W}}return W&&!A.defaultPrevented}function ln(h,y,w){if(typeof h=="function")w&&(h=T(h,w));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function yo(h){h.g=ln(()=>{h.g=null,h.i&&(h.i=!1,yo(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class Yl extends he{constructor(y,w){super(),this.m=y,this.l=w,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:yo(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(h){he.call(this),this.h=h,this.g={}}P(Ai,he);var Ri=[];function Ci(h){re(h.g,function(y,w){this.g.hasOwnProperty(w)&&fr(y)},h),h.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Ci(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zn=d.JSON.stringify,Di=d.JSON.parse,Ii=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function gs(){}gs.prototype.h=null;function je(h){return h.h||(h.h=h.i())}function st(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){ue.call(this,"d")}P(et,ue);function un(){ue.call(this,"c")}P(un,ue);var Ue={},va=null;function Wr(){return va=va||new xt}Ue.La="serverreachability";function ys(h){ue.call(this,Ue.La,h)}P(ys,ue);function dr(h){const y=Wr();nt(y,new ys(y))}Ue.STAT_EVENT="statevent";function _s(h,y){ue.call(this,Ue.STAT_EVENT,h),this.stat=y}P(_s,ue);function At(h){const y=Wr();nt(y,new _s(y,h))}Ue.Ma="timingevent";function en(h,y){ue.call(this,Ue.Ma,h),this.size=y}P(en,ue);function zt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function Wl(h,y,w,A,W,ee){h.info(function(){if(h.g)if(ee)for(var me="",Ke=ee.split("&"),tn=0;tn<Ke.length;tn++){var Xe=Ke[tn].split("=");if(1<Xe.length){var hn=Xe[0];Xe=Xe[1];var nn=hn.split("_");me=2<=nn.length&&nn[1]=="type"?me+(hn+"="+Xe+"&"):me+(hn+"=redacted&")}}else me=null;else me=ee;return"XMLHTTP REQ ("+A+") [attempt "+W+"]: "+y+`
`+w+`
`+me})}function tp(h,y,w,A,W,ee,me){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+W+"]: "+y+`
`+w+`
`+ee+" "+me})}function vs(h,y,w,A){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ea(h,w)+(A?" "+A:"")})}function Xc(h,y){h.info(function(){return"TIMEOUT: "+y})}pr.prototype.info=function(){};function Ea(h,y){if(!h.g)return y;if(!y)return null;try{var w=JSON.parse(y);if(w){for(h=0;h<w.length;h++)if(Array.isArray(w[h])){var A=w[h];if(!(2>A.length)){var W=A[1];if(Array.isArray(W)&&!(1>W.length)){var ee=W[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var me=1;me<W.length;me++)W[me]=""}}}}return Zn(w)}catch{return y}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qr;function Kr(){}P(Kr,gs),Kr.prototype.g=function(){return new XMLHttpRequest},Kr.prototype.i=function(){return{}},Qr=new Kr;function jn(h,y,w,A){this.j=h,this.i=y,this.l=w,this.R=A||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jt}function jt(){this.i=null,this.g="",this.h=!1}var Ql={},_o={};function Ir(h,y,w){h.L=1,h.v=xa(Jn(y)),h.m=w,h.P=!0,Oi(h,null)}function Oi(h,y){h.F=Date.now(),wa(h),h.A=Jn(h.v);var w=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),tu(w.i,"t",A),h.C=0,w=h.j.J,h.h=new jt,h.g=dh(h.j,w?y:null,!h.m),0<h.O&&(h.M=new Yl(T(h.Y,h,h.g),h.O)),y=h.U,w=h.g,A=h.ca;var W="readystatechange";Array.isArray(W)||(W&&(Ri[0]=W.toString()),W=Ri);for(var ee=0;ee<W.length;ee++){var me=Kn(w,W[ee],A||y.handleEvent,!1,y.h||y);if(!me)break;y.g[me.key]=me}y=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),dr(),Wl(h.i,h.u,h.A,h.l,h.R,h.m)}jn.prototype.ca=function(h){h=h.target;const y=this.M;y&&_r(h)==3?y.j():this.Y(h)},jn.prototype.Y=function(h){try{if(h==this.g)e:{const nn=_r(this.g);var y=this.g.Ba();const qi=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||sh(this.g)))){this.J||nn!=4||y==7||(y==8||0>=qi?dr(3):dr(2)),ws(this);var w=this.g.Z();this.X=w;t:if(Zc(this)){var A=sh(this.g);h="";var W=A.length,ee=_r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Xr(this);var me="";break t}this.h.i=new d.TextDecoder}for(y=0;y<W;y++)this.h.h=!0,h+=this.h.i.decode(A[y],{stream:!(ee&&y==W-1)});A.length=0,this.h.g+=h,this.C=0,me=this.h.g}else me=this.g.oa();if(this.o=w==200,tp(this.i,this.u,this.A,this.l,this.R,nn,w),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,tn=this.g;if((Ke=tn.g?tn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ke)){var Xe=Ke;break t}}Xe=null}if(w=Xe)vs(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,w);else{this.o=!1,this.s=3,At(12),En(this),Xr(this);break e}}if(this.P){w=!0;let wn;for(;!this.J&&this.C<me.length;)if(wn=Jc(this,me),wn==_o){nn==4&&(this.s=4,At(14),w=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==Ql){this.s=4,At(15),vs(this.i,this.l,me,"[Invalid Chunk]"),w=!1;break}else vs(this.i,this.l,wn,null),ba(this,wn);if(Zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||me.length!=0||this.h.h||(this.s=1,At(16),w=!1),this.o=this.o&&w,!w)vs(this.i,this.l,me,"[Invalid Chunked Response]"),En(this),Xr(this);else if(0<me.length&&!this.W){this.W=!0;var hn=this.j;hn.g==this&&hn.ba&&!hn.M&&(hn.j.info("Great, no buffering proxy detected. Bytes received: "+me.length),Ma(hn),hn.M=!0,At(11))}}else vs(this.i,this.l,me,null),ba(this,me);nn==4&&En(this),this.o&&!this.J&&(nn==4?ch(this.j,this):(this.o=!1,wa(this)))}else ap(this.g),w==400&&0<me.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),En(this),Xr(this)}}}catch{}finally{}};function Zc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Jc(h,y){var w=h.C,A=y.indexOf(`
`,w);return A==-1?_o:(w=Number(y.substring(w,A)),isNaN(w)?Ql:(A+=1,A+w>y.length?_o:(y=y.slice(A,A+w),h.C=A+w,y)))}jn.prototype.cancel=function(){this.J=!0,En(this)};function wa(h){h.S=Date.now()+h.I,eh(h,h.I)}function eh(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=zt(T(h.ba,h),y)}function ws(h){h.B&&(d.clearTimeout(h.B),h.B=null)}jn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Xc(this.i,this.A),this.L!=2&&(dr(),At(17)),En(this),this.s=2,Xr(this)):eh(this,this.S-h)};function Xr(h){h.j.G==0||h.J||ch(h.j,h)}function En(h){ws(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,Ci(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function ba(h,y){try{var w=h.j;if(w.G!=0&&(w.g==h||Kl(w.h,h))){if(!h.K&&Kl(w.h,h)&&w.G==3){try{var A=w.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var W=A;if(W[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<h.F)Io(w),Co(w);else break e;au(w),At(18)}}else w.za=W[1],0<w.za-w.T&&37500>W[2]&&w.F&&w.v==0&&!w.C&&(w.C=zt(T(w.Za,w),6e3));if(1>=Eo(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else Ui(w,11)}else if((h.K||w.g==h)&&Io(w),!G(y))for(W=w.Da.g.parse(y),y=0;y<W.length;y++){let Xe=W[y];if(w.T=Xe[0],Xe=Xe[1],w.G==2)if(Xe[0]=="c"){w.K=Xe[1],w.ia=Xe[2];const hn=Xe[3];hn!=null&&(w.la=hn,w.j.info("VER="+w.la));const nn=Xe[4];nn!=null&&(w.Aa=nn,w.j.info("SVER="+w.Aa));const qi=Xe[5];qi!=null&&typeof qi=="number"&&0<qi&&(A=1.5*qi,w.L=A,w.j.info("backChannelRequestTimeoutMs_="+A)),A=w;const wn=h.g;if(wn){const ii=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var ee=A.h;ee.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(wo(ee,ee.h),ee.h=null))}if(A.D){const lu=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;lu&&(A.ya=lu,ft(A.I,A.D,lu))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-h.F,w.j.info("Handshake RTT: "+w.R+"ms")),A=w;var me=h;if(A.qa=fh(A,A.J?A.ia:null,A.W),me.K){Un(A.h,me);var Ke=me,tn=A.L;tn&&(Ke.I=tn),Ke.B&&(ws(Ke),wa(Ke)),A.g=me}else lh(A);0<w.i.length&&Do(w)}else Xe[0]!="stop"&&Xe[0]!="close"||Ui(w,7);else w.G==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?Ui(w,7):iu(w):Xe[0]!="noop"&&w.l&&w.l.ta(Xe),w.v=0)}}dr(4)}catch{}}var th=class{constructor(h,y){this.g=h,this.map=y}};function Mi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Eo(h){return h.h?1:h.g?h.g.size:0}function Kl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function wo(h,y){h.g?h.g.add(y):h.h=y}function Un(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Mi.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Xl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const w of h.g.values())y=y.concat(w.D);return y}return B(h.i)}function np(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],w=h.length,A=0;A<w;A++)y.push(h[A]);return y}y=[],w=0;for(A in h)y[w++]=h[A];return y}function bo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var w=0;w<h;w++)y.push(w);return y}y=[],w=0;for(const A in h)y[w++]=A;return y}}}function Zl(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var w=bo(h),A=np(h),W=A.length,ee=0;ee<W;ee++)y.call(void 0,A[ee],w&&w[ee],h)}var Ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(h,y){if(h){h=h.split("&");for(var w=0;w<h.length;w++){var A=h[w].indexOf("="),W=null;if(0<=A){var ee=h[w].substring(0,A);W=h[w].substring(A+1)}else ee=h[w];y(ee,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function $t(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof $t){this.h=h.h,Sa(this,h.j),this.o=h.o,this.g=h.g,bs(this,h.s),this.l=h.l;var y=h.i,w=new Pi;w.i=y.i,y.g&&(w.g=new Map(y.g),w.h=y.h),Ni(this,w),this.m=h.m}else h&&(y=String(h).match(Ta))?(this.h=!1,Sa(this,y[1]||"",!0),this.o=mr(y[2]||""),this.g=mr(y[3]||"",!0),bs(this,y[4]),this.l=mr(y[5]||"",!0),Ni(this,y[6]||"",!0),this.m=mr(y[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}$t.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Aa(y,Jl,!0),":");var w=this.g;return(w||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Aa(y,Jl,!0),"@"),h.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&h.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&h.push("/"),h.push(Aa(w,w.charAt(0)=="/"?ip:eu,!0))),(w=this.i.toString())&&h.push("?",w),(w=this.m)&&h.push("#",Aa(w,To)),h.join("")};function Jn(h){return new $t(h)}function Sa(h,y,w){h.j=w?mr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function bs(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Ni(h,y,w){y instanceof Pi?(h.i=y,rh(h.i,h.h)):(w||(y=Aa(y,sp)),h.i=new Pi(y,h.h))}function ft(h,y,w){h.i.set(y,w)}function xa(h){return ft(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function mr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Aa(h,y,w){return typeof h=="string"?(h=encodeURI(h).replace(y,nh),w&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function nh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Jl=/[#\/\?@]/g,eu=/[#\?:]/g,ip=/[#\?]/g,sp=/[#\?@]/g,To=/#/g;function Pi(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function gr(h){h.g||(h.g=new Map,h.h=0,h.i&&rp(h.i,function(y,w){h.add(decodeURIComponent(y.replace(/\+/g," ")),w)}))}t=Pi.prototype,t.add=function(h,y){gr(this),this.i=null,h=Zr(this,h);var w=this.g.get(h);return w||this.g.set(h,w=[]),w.push(y),this.h+=1,this};function Vi(h,y){gr(h),y=Zr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Li(h,y){return gr(h),y=Zr(h,y),h.g.has(y)}t.forEach=function(h,y){gr(this),this.g.forEach(function(w,A){w.forEach(function(W){h.call(y,W,A,this)},this)},this)},t.na=function(){gr(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),w=[];for(let A=0;A<y.length;A++){const W=h[A];for(let ee=0;ee<W.length;ee++)w.push(y[A])}return w},t.V=function(h){gr(this);let y=[];if(typeof h=="string")Li(this,h)&&(y=y.concat(this.g.get(Zr(this,h))));else{h=Array.from(this.g.values());for(let w=0;w<h.length;w++)y=y.concat(h[w])}return y},t.set=function(h,y){return gr(this),this.i=null,h=Zr(this,h),Li(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function tu(h,y,w){Vi(h,y),0<w.length&&(h.i=null,h.g.set(Zr(h,y),B(w)),h.h+=w.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var w=0;w<y.length;w++){var A=y[w];const ee=encodeURIComponent(String(A)),me=this.V(A);for(A=0;A<me.length;A++){var W=ee;me[A]!==""&&(W+="="+encodeURIComponent(String(me[A]))),h.push(W)}}return this.i=h.join("&")};function Zr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function rh(h,y){y&&!h.j&&(gr(h),h.i=null,h.g.forEach(function(w,A){var W=A.toLowerCase();A!=W&&(Vi(this,A),tu(this,W,w))},h)),h.j=y}function Ra(h,y){const w=new pr;if(d.Image){const A=new Image;A.onload=I(yr,w,"TestLoadImage: loaded",!0,y,A),A.onerror=I(yr,w,"TestLoadImage: error",!1,y,A),A.onabort=I(yr,w,"TestLoadImage: abort",!1,y,A),A.ontimeout=I(yr,w,"TestLoadImage: timeout",!1,y,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else y(!1)}function kr(h,y){const w=new pr,A=new AbortController,W=setTimeout(()=>{A.abort(),yr(w,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:A.signal}).then(ee=>{clearTimeout(W),ee.ok?yr(w,"TestPingServer: ok",!0,y):yr(w,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(W),yr(w,"TestPingServer: error",!1,y)})}function yr(h,y,w,A,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),A(w)}catch{}}function Ca(){this.g=new Ii}function Jr(h,y,w){const A=w||"";try{Zl(h,function(W,ee){let me=W;g(W)&&(me=Zn(W)),y.push(A+ee+"="+encodeURIComponent(me))})}catch(W){throw y.push(A+"type="+encodeURIComponent("_badmap")),W}}function Ts(h){this.l=h.Ub||null,this.j=h.eb||!1}P(Ts,gs),Ts.prototype.g=function(){return new ji(this.l,this.j)},Ts.prototype.i=function(h){return function(){return h}}({});function ji(h,y){xt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ji,xt),t=ji.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,ti(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function nu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?ei(this):ti(this),this.readyState==3&&nu(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,ei(this))},t.Qa=function(h){this.g&&(this.response=h,ei(this))},t.ga=function(){this.g&&ei(this)};function ei(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ti(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var w=y.next();!w.done;)w=w.value,h.push(w[0]+": "+w[1]),w=y.next();return h.join(`\r
`)};function ti(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ru(h){let y="";return re(h,function(w,A){y+=A,y+=":",y+=w,y+=`\r
`}),y}function cn(h,y,w){e:{for(A in w){var A=!1;break e}A=!0}A||(w=ru(w),typeof h=="string"?w!=null&&encodeURIComponent(String(w)):ft(h,y,w))}function at(h){xt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(at,xt);var So=/^https?$/i,Da=["POST","PUT"];t=at.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,w,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qr.g(),this.v=this.o?je(this.o):je(Qr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(ee){ih(this,ee);return}if(h=w||"",w=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var W in A)w.set(W,A[W]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const ee of A.keys())w.set(ee,A.get(ee));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(w.keys()).find(ee=>ee.toLowerCase()=="content-type"),W=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Da,y,void 0))||A||W||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,me]of w)this.g.setRequestHeader(ee,me);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ia(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){ih(this,ee)}};function ih(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,xo(h),ni(h)}function xo(h){h.A||(h.A=!0,nt(h,"complete"),nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,nt(this,"complete"),nt(this,"abort"),ni(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ao(this):this.bb())},t.bb=function(){Ao(this)};function Ao(h){if(h.h&&typeof c<"u"&&(!h.v[1]||_r(h)!=4||h.Z()!=2)){if(h.u&&_r(h)==4)ln(h.Ea,0,h);else if(nt(h,"readystatechange"),_r(h)==4){h.h=!1;try{const me=h.Z();e:switch(me){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var w;if(!(w=y)){var A;if(A=me===0){var W=String(h.D).match(Ta)[1]||null;!W&&d.self&&d.self.location&&(W=d.self.location.protocol.slice(0,-1)),A=!So.test(W?W.toLowerCase():"")}w=A}if(w)nt(h,"complete"),nt(h,"success");else{h.m=6;try{var ee=2<_r(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",xo(h)}}finally{ni(h)}}}}function ni(h,y){if(h.g){Ia(h);const w=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||nt(h,"ready");try{w.onreadystatechange=A}catch{}}}function Ia(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function _r(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<_r(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Di(y)}};function sh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ap(h){const y={};h=(h.g&&2<=_r(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(G(h[A]))continue;var w=M(h[A]);const W=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const ee=y[W]||[];y[W]=ee,ee.push(w)}D(y,function(A){return A.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ka(h,y,w){return w&&w.internalChannelParams&&w.internalChannelParams[h]||y}function Ro(h){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ka("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ka("baseRetryDelayMs",5e3,h),this.cb=ka("retryDelaySeedMs",1e4,h),this.Wa=ka("forwardChannelMaxRetries",2,h),this.wa=ka("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(h&&h.concurrentRequestLimit),this.Da=new Ca,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ro.prototype,t.la=8,t.G=1,t.connect=function(h,y,w,A){At(0),this.W=h,this.H=y||{},w&&A!==void 0&&(this.H.OSID=w,this.H.OAID=A),this.F=this.X,this.I=fh(this,null,this.W),Do(this)};function iu(h){if(ah(h),h.G==3){var y=h.U++,w=Jn(h.I);if(ft(w,"SID",h.K),ft(w,"RID",y),ft(w,"TYPE","terminate"),Oa(h,w),y=new jn(h,h.j,y),y.L=2,y.v=xa(Jn(w)),w=!1,d.navigator&&d.navigator.sendBeacon)try{w=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!w&&d.Image&&(new Image().src=y.v,w=!0),w||(y.g=dh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),wa(y)}hh(h)}function Co(h){h.g&&(Ma(h),h.g.cancel(),h.g=null)}function ah(h){Co(h),h.u&&(d.clearTimeout(h.u),h.u=null),Io(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Do(h){if(!vo(h.h)&&!h.s){h.s=!0;var y=h.Ga;se||V(),fe||(se(),fe=!0),de.add(y,h),h.B=0}}function op(h,y){return Eo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=zt(T(h.Ga,h,y),ou(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const W=new jn(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=C(ee),U(ee,this.S)):ee=this.S),this.m!==null||this.O||(W.H=ee,ee=null),this.P)e:{for(var y=0,w=0;w<this.i.length;w++){t:{var A=this.i[w];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=w;break e}if(y===4096||w===this.i.length-1){y=w+1;break e}}y=1e3}else y=1e3;y=oh(this,W,y),w=Jn(this.I),ft(w,"RID",h),ft(w,"CVER",22),this.D&&ft(w,"X-HTTP-Session-Id",this.D),Oa(this,w),ee&&(this.O?y="headers="+encodeURIComponent(String(ru(ee)))+"&"+y:this.m&&cn(w,this.m,ee)),wo(this.h,W),this.Ua&&ft(w,"TYPE","init"),this.P?(ft(w,"$req",y),ft(w,"SID","null"),W.T=!0,Ir(W,w,null)):Ir(W,w,y),this.G=2}}else this.G==3&&(h?su(this,h):this.i.length==0||vo(this.h)||su(this))};function su(h,y){var w;y?w=y.l:w=h.U++;const A=Jn(h.I);ft(A,"SID",h.K),ft(A,"RID",w),ft(A,"AID",h.T),Oa(h,A),h.m&&h.o&&cn(A,h.m,h.o),w=new jn(h,h.j,w,h.B+1),h.m===null&&(w.H=h.o),y&&(h.i=y.D.concat(h.i)),y=oh(h,w,1e3),w.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),wo(h.h,w),Ir(w,A,y)}function Oa(h,y){h.H&&re(h.H,function(w,A){ft(y,A,w)}),h.l&&Zl({},function(w,A){ft(y,A,w)})}function oh(h,y,w){w=Math.min(h.i.length,w);var A=h.l?T(h.l.Na,h.l,h):null;e:{var W=h.i;let ee=-1;for(;;){const me=["count="+w];ee==-1?0<w?(ee=W[0].g,me.push("ofs="+ee)):ee=0:me.push("ofs="+ee);let Ke=!0;for(let tn=0;tn<w;tn++){let Xe=W[tn].g;const hn=W[tn].map;if(Xe-=ee,0>Xe)ee=Math.max(0,W[tn].g-100),Ke=!1;else try{Jr(hn,me,"req"+Xe+"_")}catch{A&&A(hn)}}if(Ke){A=me.join("&");break e}}}return h=h.i.splice(0,w),y.D=h,A}function lh(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;se||V(),fe||(se(),fe=!0),de.add(y,h),h.v=0}}function au(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=zt(T(h.Fa,h),ou(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=zt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Co(this),uh(this))};function Ma(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function uh(h){h.g=new jn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=Jn(h.qa);ft(y,"RID","rpc"),ft(y,"SID",h.K),ft(y,"AID",h.T),ft(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&ft(y,"TO",h.ja),ft(y,"TYPE","xmlhttp"),Oa(h,y),h.m&&h.o&&cn(y,h.m,h.o),h.L&&(h.g.I=h.L);var w=h.g;h=h.ia,w.L=1,w.v=xa(Jn(y)),w.m=null,w.P=!0,Oi(w,h)}t.Za=function(){this.C!=null&&(this.C=null,Co(this),au(this),At(19))};function Io(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ch(h,y){var w=null;if(h.g==y){Io(h),Ma(h),h.g=null;var A=2}else if(Kl(h.h,y))w=y.D,Un(h.h,y),A=1;else return;if(h.G!=0){if(y.o)if(A==1){w=y.m?y.m.length:0,y=Date.now()-y.F;var W=h.B;A=Wr(),nt(A,new en(A,w)),Do(h)}else lh(h);else if(W=y.s,W==3||W==0&&0<y.X||!(A==1&&op(h,y)||A==2&&au(h)))switch(w&&0<w.length&&(y=h.h,y.i=y.i.concat(w)),W){case 1:Ui(h,5);break;case 4:Ui(h,10);break;case 3:Ui(h,6);break;default:Ui(h,2)}}}function ou(h,y){let w=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(w*=2),w*y}function Ui(h,y){if(h.j.info("Error code "+y),y==2){var w=T(h.fb,h),A=h.Xa;const W=!A;A=new $t(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Sa(A,"https"),xa(A),W?Ra(A.toString(),w):kr(A.toString(),w)}else At(2);h.G=0,h.l&&h.l.sa(y),hh(h),ah(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function hh(h){if(h.G=0,h.ka=[],h.l){const y=Xl(h.h);(y.length!=0||h.i.length!=0)&&(O(h.ka,y),O(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function fh(h,y,w){var A=w instanceof $t?Jn(w):new $t(w);if(A.g!="")y&&(A.g=y+"."+A.g),bs(A,A.s);else{var W=d.location;A=W.protocol,y=y?y+"."+W.hostname:W.hostname,W=+W.port;var ee=new $t(null);A&&Sa(ee,A),y&&(ee.g=y),W&&bs(ee,W),w&&(ee.l=w),A=ee}return w=h.D,y=h.ya,w&&y&&ft(A,w,y),ft(A,"VER",h.la),Oa(h,A),A}function dh(h,y,w){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new at(new Ts({eb:w})):new at(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ph(){}t=ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ko(){}ko.prototype.g=function(h,y){return new qn(h,y)};function qn(h,y){xt.call(this),this.g=new Ro(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!G(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!G(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new ri(this)}P(qn,xt),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){iu(this.g)},qn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var w={};w.__data__=h,h=w}else this.u&&(w={},w.__data__=Zn(h),h=w);y.i.push(new th(y.Ya++,h)),y.G==3&&Do(y)},qn.prototype.N=function(){this.g.l=null,delete this.j,iu(this.g),delete this.g,qn.aa.N.call(this)};function mh(h){et.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const w in y){h=w;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}P(mh,et);function gh(){un.call(this),this.status=1}P(gh,un);function ri(h){this.g=h}P(ri,ph),ri.prototype.ua=function(){nt(this.g,"a")},ri.prototype.ta=function(h){nt(this.g,new mh(h))},ri.prototype.sa=function(h){nt(this.g,new gh)},ri.prototype.ra=function(){nt(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,cS=function(){return new ko},uS=function(){return Wr()},lS=Ue,Qg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,$f=Es,ki.COMPLETE="complete",oS=ki,st.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",xt.prototype.listen=xt.prototype.K,ic=st,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,aS=at}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});const Gw="@firebase/firestore",Yw="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nn.UNAUTHENTICATED=new Nn(null),Nn.GOOGLE_CREDENTIALS=new Nn("google-credentials-uid"),Nn.FIRST_PARTY=new Nn("first-party-uid"),Nn.MOCK_USER=new Nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Cy("@firebase/firestore");function ul(){return uo.logLevel}function Ee(t,...e){if(uo.logLevel<=Ye.DEBUG){const n=e.map(Uy);uo.debug(`Firestore (${Bl}): ${t}`,...n)}}function hs(t,...e){if(uo.logLevel<=Ye.ERROR){const n=e.map(Uy);uo.error(`Firestore (${Bl}): ${t}`,...n)}}function Rl(t,...e){if(uo.logLevel<=Ye.WARN){const n=e.map(Uy);uo.warn(`Firestore (${Bl}): ${t}`,...n)}}function Uy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Me(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,hS(t,i,n)}function hS(t,e,n){let i=`FIRESTORE (${Bl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw hs(i),new Error(i)}function lt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||hS(e,a,i)}function Le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends ds{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nn.UNAUTHENTICATED))}shutdown(){}}class CN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DN{constructor(e){this.t=e,this.currentUser=Nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new os;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new os,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{Ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(Ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new os)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new fS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Nn(e)}}class IN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new IN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ww{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ON{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const i=l=>{l.error!=null&&Ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,Ee("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{Ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):Ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ww(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ww(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=MN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function We(t,e){return t<e?-1:t>e?1:0}function Kg(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return yg(a)===yg(l)?We(a,l):yg(a)?1:-1}return We(t.length,e.length)}const NN=55296,PN=57343;function yg(t){const e=t.charCodeAt(0);return e>=NN&&e<=PN}function Cl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="__name__";class hi{constructor(e,n,i){n===void 0?n=0:n>e.length&&Me(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Me(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=hi.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const i=hi.isNumericId(e),a=hi.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?hi.extractNumericId(e).compare(hi.extractNumericId(n)):Kg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ia.fromString(e.substring(4,e.length-2))}}class bt extends hi{construct(e,n,i){return new bt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ye(oe.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const VN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rn extends hi{construct(e,n,i){return new Rn(e,n,i)}static isValidIdentifier(e){return VN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qw}static keyField(){return new Rn([Qw])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ye(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ye(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rn(n)}static emptyPath(){return new Rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(bt.fromString(e))}static fromName(e){return new Re(bt.fromString(e).popFirst(5))}static empty(){return new Re(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new bt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e,n){if(!n)throw new ye(oe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LN(t,e,n,i){if(e===!0&&i===!0)throw new ye(oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kw(t){if(!Re.isDocumentKey(t))throw new ye(oe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xw(t){if(Re.isDocumentKey(t))throw new ye(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Me(12329,{type:typeof t})}function hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kd(t);throw new ye(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Zt(t,e){const n={typeString:t};return e&&(n.value=e),n}function zc(t,e){if(!pS(t))throw new ye(oe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ye(oe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=-62135596800,Jw=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Jw);return new Et(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zw)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jw}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Zt("string",Et._jsonSchemaVersion),seconds:Zt("number"),nanoseconds:Zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Et(0,0))}static max(){return new Ve(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bc=-1;function jN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=Ve.fromTimestamp(i===1e9?new Et(n+1,0):new Et(n,i));return new aa(a,Re.empty(),e)}function UN(t){return new aa(t.readTime,t.key,bc)}class aa{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new aa(Ve.min(),Re.empty(),bc)}static max(){return new aa(Ve.max(),Re.empty(),bc)}}function qN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Re.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){if(t.code!==oe.FAILED_PRECONDITION||t.message!==BN)throw t;Ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ce((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ce?n:ce.resolve(n)}catch(n){return ce.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ce.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ce.reject(n)}static resolve(e){return new ce((n,i)=>{n(e)})}static reject(e){return new ce((n,i)=>{i(e)})}static waitFor(e){return new ce((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=ce.resolve(!1);for(const i of e)n=n.next(a=>a?ce.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new ce((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new ce((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function $N(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $l(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const By=-1;function Md(t){return t==null}function ld(t){return t===0&&1/t==-1/0}function FN(t){return typeof t=="number"&&Number.isInteger(t)&&!ld(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="";function HN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=eb(e)),e=GN(t.get(n),e);return eb(e)}function GN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case mS:n+="";break;default:n+=l}}return n}function eb(t){return t+mS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ga(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.comparator=e,this.root=n||An.EMPTY}insert(e,n){return new Ot(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,An.BLACK,null,null))}remove(e){return new Ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,An.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tf(this.root,e,this.comparator,!0)}}class Tf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class An{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??An.RED,this.left=a??An.EMPTY,this.right=l??An.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new An(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return An.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return An.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,An.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,An.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Me(27949);return e+(this.isRed()?0:1)}}An.EMPTY=null,An.RED=!0,An.BLACK=!1;An.EMPTY=new class{constructor(){this.size=0}get key(){throw Me(57766)}get value(){throw Me(16141)}get color(){throw Me(16727)}get left(){throw Me(29726)}get right(){throw Me(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new An(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e,this.data=new Ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nb(this.data.getIterator())}getIteratorFrom(e){return new nb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new an(this.comparator);return n.data=e,n}}class nb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.fields=e,e.sort(Rn.comparator)}static empty(){return new ur([])}unionWith(e){let n=new an(Rn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new ur(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new yS("Invalid base64 string: "+l):l}}(e);return new Cn(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const YN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oa(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=YN.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Bt(t.seconds),nanos:Bt(t.nanos)}}function Bt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function la(t){return typeof t=="string"?Cn.fromBase64String(t):Cn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="server_timestamp",vS="__type__",ES="__previous_value__",wS="__local_write_time__";function zy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vS])==null?void 0:i.stringValue)===_S}function Nd(t){const e=t.mapValue.fields[ES];return zy(e)?Nd(e):e}function Tc(t){const e=oa(t.mapValue.fields[wS].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const ud="(default)";class Sc{constructor(e,n){this.projectId=e,this.database=n||ud}static empty(){return new Sc("","")}get isDefaultDatabase(){return this.database===ud}isEqual(e){return e instanceof Sc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="__type__",QN="__max__",Sf={mapValue:{}},TS="__vector__",cd="value";function ua(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zy(t)?4:XN(t)?9007199254740991:KN(t)?10:11:Me(28295,{value:t})}function wi(t,e){if(t===e)return!0;const n=ua(t);if(n!==ua(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tc(t).isEqual(Tc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=oa(a.timestampValue),d=oa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return la(a.bytesValue).isEqual(la(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return Bt(a.geoPointValue.latitude)===Bt(l.geoPointValue.latitude)&&Bt(a.geoPointValue.longitude)===Bt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Bt(a.integerValue)===Bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Bt(a.doubleValue),d=Bt(l.doubleValue);return c===d?ld(c)===ld(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Cl(t.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(tb(c)!==tb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!wi(c[p],d[p])))return!1;return!0}(t,e);default:return Me(52216,{left:t})}}function xc(t,e){return(t.values||[]).find(n=>wi(n,e))!==void 0}function Dl(t,e){if(t===e)return 0;const n=ua(t),i=ua(e);if(n!==i)return We(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Bt(l.integerValue||l.doubleValue),p=Bt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return rb(t.timestampValue,e.timestampValue);case 4:return rb(Tc(t),Tc(e));case 5:return Kg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=la(l),p=la(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=We(d[g],p[g]);if(v!==0)return v}return We(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=We(Bt(l.latitude),Bt(c.latitude));return d!==0?d:We(Bt(l.longitude),Bt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ib(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,I,P,B;const d=l.fields||{},p=c.fields||{},g=(T=d[cd])==null?void 0:T.arrayValue,v=(I=p[cd])==null?void 0:I.arrayValue,E=We(((P=g==null?void 0:g.values)==null?void 0:P.length)||0,((B=v==null?void 0:v.values)==null?void 0:B.length)||0);return E!==0?E:ib(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===Sf.mapValue&&c===Sf.mapValue)return 0;if(l===Sf.mapValue)return 1;if(c===Sf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const T=Kg(p[E],v[E]);if(T!==0)return T;const I=Dl(d[p[E]],g[v[E]]);if(I!==0)return I}return We(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Me(23264,{he:n})}}function rb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=oa(t),i=oa(e),a=We(n.seconds,i.seconds);return a!==0?a:We(n.nanos,i.nanos)}function ib(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=Dl(n[a],i[a]);if(l)return l}return We(n.length,i.length)}function Il(t){return Xg(t)}function Xg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=oa(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return la(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Xg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Xg(n.fields[c])}`;return a+"}"}(t.mapValue):Me(61005,{value:t})}function Ff(t){switch(ua(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(t);return e?16+Ff(e):16;case 5:return 2*t.stringValue.length;case 6:return la(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Ff(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return ga(i.fields,(l,c)=>{a+=l.length+Ff(c)}),a}(t.mapValue);default:throw Me(13486,{value:t})}}function sb(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zg(t){return!!t&&"integerValue"in t}function $y(t){return!!t&&"arrayValue"in t}function ab(t){return!!t&&"nullValue"in t}function ob(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hf(t){return!!t&&"mapValue"in t}function KN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bS])==null?void 0:i.stringValue)===TS}function fc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ga(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=fc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fc(t.arrayValue.values[n]);return e}return{...t}}function XN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===QN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Hf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fc(n)}setAll(e){let n=Rn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=fc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());Hf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];Hf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){ga(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new Qn(fc(this.value))}}function SS(t){const e=[];return ga(t.fields,(n,i)=>{const a=new Rn([n]);if(Hf(i)){const l=SS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new ur(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Pn(e,0,Ve.min(),Ve.min(),Ve.min(),Qn.empty(),0)}static newFoundDocument(e,n,i,a){return new Pn(e,1,n,Ve.min(),i,a,0)}static newNoDocument(e,n){return new Pn(e,2,n,Ve.min(),Ve.min(),Qn.empty(),0)}static newUnknownDocument(e,n){return new Pn(e,3,n,Ve.min(),Ve.min(),Qn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hd{constructor(e,n){this.position=e,this.inclusive=n}}function lb(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Re.comparator(Re.fromName(c.referenceValue),n.key):i=Dl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function ub(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xS{}class Xt extends xS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new e2(e,n,i):n==="array-contains"?new r2(e,i):n==="in"?new i2(e,i):n==="not-in"?new s2(e,i):n==="array-contains-any"?new a2(e,i):new Xt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new t2(e,i):new n2(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Dl(n,this.value)):n!==null&&ua(this.value)===ua(n)&&this.matchesComparison(Dl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fr extends xS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Fr(e,n)}matches(e){return AS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function AS(t){return t.op==="and"}function RS(t){return JN(t)&&AS(t)}function JN(t){for(const e of t.filters)if(e instanceof Fr)return!1;return!0}function Jg(t){if(t instanceof Xt)return t.field.canonicalString()+t.op.toString()+Il(t.value);if(RS(t))return t.filters.map(e=>Jg(e)).join(",");{const e=t.filters.map(n=>Jg(n)).join(",");return`${t.op}(${e})`}}function CS(t,e){return t instanceof Xt?function(i,a){return a instanceof Xt&&i.op===a.op&&i.field.isEqual(a.field)&&wi(i.value,a.value)}(t,e):t instanceof Fr?function(i,a){return a instanceof Fr&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&CS(c,a.filters[d]),!0):!1}(t,e):void Me(19439)}function DS(t){return t instanceof Xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Il(n.value)}`}(t):t instanceof Fr?function(n){return n.op.toString()+" {"+n.getFilters().map(DS).join(" ,")+"}"}(t):"Filter"}class e2 extends Xt{constructor(e,n,i){super(e,n,i),this.key=Re.fromName(i.referenceValue)}matches(e){const n=Re.comparator(e.key,this.key);return this.matchesComparison(n)}}class t2 extends Xt{constructor(e,n){super(e,"in",n),this.keys=IS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n2 extends Xt{constructor(e,n){super(e,"not-in",n),this.keys=IS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Re.fromName(i.referenceValue))}class r2 extends Xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $y(n)&&xc(n.arrayValue,this.value)}}class i2 extends Xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xc(this.value.arrayValue,n)}}class s2 extends Xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xc(this.value.arrayValue,n)}}class a2 extends Xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$y(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>xc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function cb(t,e=null,n=[],i=[],a=null,l=null,c=null){return new o2(t,e,n,i,a,l,c)}function Fy(t){const e=Le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Jg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Il(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Il(i)).join(",")),e.Te=n}return e.Te}function Hy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ub(t.startAt,e.startAt)&&ub(t.endAt,e.endAt)}function ey(t){return Re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function l2(t,e,n,i,a,l,c,d){return new Fl(t,e,n,i,a,l,c,d)}function Pd(t){return new Fl(t)}function hb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kS(t){return t.collectionGroup!==null}function dc(t){const e=Le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new an(Rn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Ac(l,i))}),n.has(Rn.keyField().canonicalString())||e.Ie.push(new Ac(Rn.keyField(),i))}return e.Ie}function yi(t){const e=Le(t);return e.Ee||(e.Ee=u2(e,dc(t))),e.Ee}function u2(t,e){if(t.limitType==="F")return cb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Ac(a.field,l)});const n=t.endAt?new hd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new hd(t.startAt.position,t.startAt.inclusive):null;return cb(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ty(t,e){const n=t.filters.concat([e]);return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ny(t,e,n){return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vd(t,e){return Hy(yi(t),yi(e))&&t.limitType===e.limitType}function OS(t){return`${Fy(yi(t))}|lt:${t.limitType}`}function cl(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>DS(a)).join(", ")}]`),Md(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Il(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Il(a)).join(",")),`Target(${i})`}(yi(t))}; limitType=${t.limitType})`}function Ld(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Re.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of dc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=lb(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,dc(i),a)||i.endAt&&!function(c,d,p){const g=lb(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,dc(i),a))}(t,e)}function c2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MS(t){return(e,n)=>{let i=!1;for(const a of dc(t)){const l=h2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function h2(t,e,n){const i=t.field.isKeyField()?Re.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Dl(p,g):Me(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Me(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ga(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return gS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new Ot(Re.comparator);function fs(){return f2}const NS=new Ot(Re.comparator);function sc(...t){let e=NS;for(const n of t)e=e.insert(n.key,n);return e}function PS(t){let e=NS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Za(){return pc()}function VS(){return pc()}function pc(){return new fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const d2=new Ot(Re.comparator),p2=new an(Re.comparator);function Qe(...t){let e=p2;for(const n of t)e=e.add(n);return e}const m2=new an(We);function g2(){return m2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ld(e)?"-0":e}}function LS(t){return{integerValue:""+t}}function y2(t,e){return FN(e)?LS(e):Gy(t,e)}/**
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
 */class jd{constructor(){this._=void 0}}function _2(t,e,n){return t instanceof Rc?function(a,l){const c={fields:{[vS]:{stringValue:_S},[wS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&zy(l)&&(l=Nd(l)),l&&(c.fields[ES]=l),{mapValue:c}}(n,e):t instanceof Cc?US(t,e):t instanceof Dc?qS(t,e):function(a,l){const c=jS(a,l),d=fb(c)+fb(a.Ae);return Zg(c)&&Zg(a.Ae)?LS(d):Gy(a.serializer,d)}(t,e)}function v2(t,e,n){return t instanceof Cc?US(t,e):t instanceof Dc?qS(t,e):n}function jS(t,e){return t instanceof fd?function(i){return Zg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Rc extends jd{}class Cc extends jd{constructor(e){super(),this.elements=e}}function US(t,e){const n=BS(e);for(const i of t.elements)n.some(a=>wi(a,i))||n.push(i);return{arrayValue:{values:n}}}class Dc extends jd{constructor(e){super(),this.elements=e}}function qS(t,e){let n=BS(e);for(const i of t.elements)n=n.filter(a=>!wi(a,i));return{arrayValue:{values:n}}}class fd extends jd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fb(t){return Bt(t.integerValue||t.doubleValue)}function BS(t){return $y(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.field=e,this.transform=n}}function w2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof Cc&&a instanceof Cc||i instanceof Dc&&a instanceof Dc?Cl(i.elements,a.elements,wi):i instanceof fd&&a instanceof fd?wi(i.Ae,a.Ae):i instanceof Rc&&a instanceof Rc}(t.transform,e.transform)}class b2{constructor(e,n){this.version=e,this.transformResults=n}}class Br{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Br}static exists(e){return new Br(void 0,e)}static updateTime(e){return new Br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ud{}function zS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FS(t.key,Br.none()):new $c(t.key,t.data,Br.none());{const n=t.data,i=Qn.empty();let a=new an(Rn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new ya(t.key,i,new ur(a.toArray()),Br.none())}}function T2(t,e,n){t instanceof $c?function(a,l,c){const d=a.value.clone(),p=pb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof ya?function(a,l,c){if(!Gf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=pb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll($S(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function mc(t,e,n,i){return t instanceof $c?function(l,c,d,p){if(!Gf(l.precondition,c))return d;const g=l.value.clone(),v=mb(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof ya?function(l,c,d,p){if(!Gf(l.precondition,c))return d;const g=mb(l.fieldTransforms,p,c),v=c.data;return v.setAll($S(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(t,e,n,i):function(l,c,d){return Gf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function S2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=jS(i.transform,a||null);l!=null&&(n===null&&(n=Qn.empty()),n.set(i.field,l))}return n||null}function db(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Cl(i,a,(l,c)=>w2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $c extends Ud{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ya extends Ud{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $S(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function pb(t,e,n){const i=new Map;lt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,v2(c,d,n[a]))}return i}function mb(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,_2(l,c,e))}return i}class FS extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x2 extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&T2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=mc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=mc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=VS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=zS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&Cl(this.mutations,e.mutations,(n,i)=>db(n,i))&&Cl(this.baseMutations,e.baseMutations,(n,i)=>db(n,i))}}class Yy{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){lt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return d2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new Yy(e,n,i,a)}}/**
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
 */class R2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class C2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt,Je;function D2(t){switch(t){case oe.OK:return Me(64938);case oe.CANCELLED:case oe.UNKNOWN:case oe.DEADLINE_EXCEEDED:case oe.RESOURCE_EXHAUSTED:case oe.INTERNAL:case oe.UNAVAILABLE:case oe.UNAUTHENTICATED:return!1;case oe.INVALID_ARGUMENT:case oe.NOT_FOUND:case oe.ALREADY_EXISTS:case oe.PERMISSION_DENIED:case oe.FAILED_PRECONDITION:case oe.ABORTED:case oe.OUT_OF_RANGE:case oe.UNIMPLEMENTED:case oe.DATA_LOSS:return!0;default:return Me(15467,{code:t})}}function HS(t){if(t===void 0)return hs("GRPC error has no .code"),oe.UNKNOWN;switch(t){case Qt.OK:return oe.OK;case Qt.CANCELLED:return oe.CANCELLED;case Qt.UNKNOWN:return oe.UNKNOWN;case Qt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case Qt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case Qt.INTERNAL:return oe.INTERNAL;case Qt.UNAVAILABLE:return oe.UNAVAILABLE;case Qt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case Qt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case Qt.NOT_FOUND:return oe.NOT_FOUND;case Qt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case Qt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case Qt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case Qt.ABORTED:return oe.ABORTED;case Qt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case Qt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case Qt.DATA_LOSS:return oe.DATA_LOSS;default:return Me(39323,{code:t})}}(Je=Qt||(Qt={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function I2(){return new TextEncoder}/**
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
 */const k2=new ia([4294967295,4294967295],0);function gb(t){const e=I2().encode(t),n=new sS;return n.update(e),new Uint8Array(n.digest())}function yb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ia([n,i],0),new ia([a,l],0)]}class Wy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new ac(`Invalid padding: ${n}`);if(i<0)throw new ac(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ac(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new ac(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ia.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(ia.fromNumber(i)));return a.compare(k2)===1&&(a=new ia([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gb(e),[i,a]=yb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Wy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=gb(e),[i,a]=yb(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class ac extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new qd(Ve.min(),a,new Ot(We),fs(),Qe())}}class Fc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Fc(i,n,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class GS{constructor(e,n){this.targetId=e,this.Ce=n}}class YS{constructor(e,n,i=Cn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class _b{constructor(){this.ve=0,this.Fe=vb(),this.Me=Cn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),n=Qe(),i=Qe();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Me(38017,{changeType:l})}}),new Fc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=vb()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class O2{constructor(e){this.Ge=e,this.ze=new Map,this.je=fs(),this.Je=xf(),this.He=xf(),this.Ye=new Ot(We)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(ey(l))if(i===0){const c=new Re(l.path);this.et(n,c,Pn.newNoDocument(c,Ve.min()))}else lt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=la(i).toUint8Array()}catch(p){if(p instanceof yS)return Rl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Wy(c,a,l)}catch(p){return Rl(p instanceof ac?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&ey(d.target)){const p=new Re(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Pn.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Qe();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new qd(e,n,this.Ye,this.je,i);return this.je=fs(),this.Je=xf(),this.He=xf(),this.Ye=new Ot(We),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _b,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new an(We),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new an(We),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _b),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xf(){return new Ot(Re.comparator)}function vb(){return new Ot(Re.comparator)}const M2={asc:"ASCENDING",desc:"DESCENDING"},N2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P2={and:"AND",or:"OR"};class V2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ry(t,e){return t.useProto3Json||Md(e)?e:{value:e}}function dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function L2(t,e){return dd(t,e.toTimestamp())}function _i(t){return lt(!!t,49232),Ve.fromTimestamp(function(n){const i=oa(n);return new Et(i.seconds,i.nanos)}(t))}function Qy(t,e){return iy(t,e).canonicalString()}function iy(t,e){const n=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QS(t){const e=bt.fromString(t);return lt(ex(e),10190,{key:e.toString()}),e}function sy(t,e){return Qy(t.databaseId,e.path)}function _g(t,e){const n=QS(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Re(XS(n))}function KS(t,e){return Qy(t.databaseId,e)}function j2(t){const e=QS(t);return e.length===4?bt.emptyPath():XS(e)}function ay(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XS(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Eb(t,e,n){return{name:sy(t,e),fields:n.value.mapValue.fields}}function U2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Me(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(lt(v===void 0||typeof v=="string",58123),Cn.fromBase64String(v||"")):(lt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Cn.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?oe.UNKNOWN:HS(g.code);return new ye(v,g.message||"")}(c);n=new YS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=_g(t,i.document.name),l=_i(i.document.updateTime),c=i.document.createTime?_i(i.document.createTime):Ve.min(),d=new Qn({mapValue:{fields:i.document.fields}}),p=Pn.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new Yf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=_g(t,i.document),l=i.readTime?_i(i.readTime):Ve.min(),c=Pn.newNoDocument(a,l),d=i.removedTargetIds||[];n=new Yf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=_g(t,i.document),l=i.removedTargetIds||[];n=new Yf([],l,a,null)}else{if(!("filter"in e))return Me(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new C2(a,l),d=i.targetId;n=new GS(d,c)}}return n}function q2(t,e){let n;if(e instanceof $c)n={update:Eb(t,e.key,e.value)};else if(e instanceof FS)n={delete:sy(t,e.key)};else if(e instanceof ya)n={update:Eb(t,e.key,e.data),updateMask:Q2(e.fieldMask)};else{if(!(e instanceof x2))return Me(16599,{Vt:e.type});n={verify:sy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Rc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Cc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Dc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof fd)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Me(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:L2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Me(27497)}(t,e.precondition)),n}function B2(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?_i(a.updateTime):_i(l);return c.isEqual(Ve.min())&&(c=_i(l)),new b2(c,a.transformResults||[])}(n,e))):[]}function z2(t,e){return{documents:[KS(t,e.path)]}}function $2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=KS(t,a);const l=function(g){if(g.length!==0)return JS(Fr.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:hl(T.field),direction:G2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=ry(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function F2(t){let e=j2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){lt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(E){const T=ZS(E);return T instanceof Fr&&RS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(E){return E.map(T=>function(P){return new Ac(fl(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,Md(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(E){const T=!!E.before,I=E.values||[];return new hd(I,T)}(n.startAt));let g=null;return n.endAt&&(g=function(E){const T=!E.before,I=E.values||[];return new hd(I,T)}(n.endAt)),l2(e,a,c,l,d,"F",p,g)}function H2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Me(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=fl(n.unaryFilter.field);return Xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=fl(n.unaryFilter.field);return Xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=fl(n.unaryFilter.field);return Xt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=fl(n.unaryFilter.field);return Xt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Me(61313);default:return Me(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xt.create(fl(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Me(58110);default:return Me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fr.create(n.compositeFilter.filters.map(i=>ZS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Me(1026)}}(n.compositeFilter.op))}(t):Me(30097,{filter:t})}function G2(t){return M2[t]}function Y2(t){return N2[t]}function W2(t){return P2[t]}function hl(t){return{fieldPath:t.canonicalString()}}function fl(t){return Rn.fromServerFormat(t.fieldPath)}function JS(t){return t instanceof Xt?function(n){if(n.op==="=="){if(ob(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NAN"}};if(ab(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ob(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NOT_NAN"}};if(ab(n.value))return{unaryFilter:{field:hl(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hl(n.field),op:Y2(n.op),value:n.value}}}(t):t instanceof Fr?function(n){const i=n.getFilters().map(a=>JS(a));return i.length===1?i[0]:{compositeFilter:{op:W2(n.op),filters:i}}}(t):Me(54877,{filter:t})}function Q2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ex(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,i,a,l=Ve.min(),c=Ve.min(),d=Cn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.yt=e}}function X2(t){const e=F2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ny(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.Cn=new J2}addToCollectionParentIndex(e,n){return this.Cn.add(n),ce.resolve()}getCollectionParents(e,n){return ce.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ce.resolve()}deleteFieldIndex(e,n){return ce.resolve()}deleteAllFieldIndexes(e){return ce.resolve()}createTargetIndexes(e,n){return ce.resolve()}getDocumentsMatchingTarget(e,n){return ce.resolve(null)}getIndexType(e,n){return ce.resolve(0)}getFieldIndexes(e,n){return ce.resolve([])}getNextCollectionGroupToUpdate(e){return ce.resolve(null)}getMinOffset(e,n){return ce.resolve(aa.min())}getMinOffsetFromCollectionGroup(e,n){return ce.resolve(aa.min())}updateCollectionGroup(e,n,i){return ce.resolve()}updateIndexEntries(e,n){return ce.resolve()}}class J2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new an(bt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new an(bt.comparator)).toArray()}}/**
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
 */const wb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tx=41943040;class Yn{static withCacheSize(e){return new Yn(e,Yn.DEFAULT_COLLECTION_PERCENTILE,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.DEFAULT_COLLECTION_PERCENTILE=10,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yn.DEFAULT=new Yn(tx,Yn.DEFAULT_COLLECTION_PERCENTILE,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yn.DISABLED=new Yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new kl(0)}static cr(){return new kl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="LruGarbageCollector",eP=1048576;function Tb([t,e],[n,i]){const a=We(t,n);return a===0?We(e,i):a}class tP{constructor(e){this.Ir=e,this.buffer=new an(Tb),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Tb(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nP{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Ee(bb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$l(n)?Ee(bb,"Ignoring IndexedDB error during garbage collection: ",n):await zl(n)}await this.Vr(3e5)})}}class rP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return ce.resolve(Od.ce);const i=new tP(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Ee("LruGarbageCollector","Garbage collection skipped; disabled"),ce.resolve(wb)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wb):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(Ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,c=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,d=Date.now(),this.removeTargets(e,i,n))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(g=Date.now(),ul()<=Ye.DEBUG&&Ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),ce.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function iP(t,e){return new rP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ce.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&mc(i.mutation,a,ur.empty(),Et.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Qe()){const a=Za();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=sc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Za();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Qe()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=fs();const c=pc(),d=function(){return pc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof ya)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),mc(v.mutation,g,v.mutation.getFieldMask(),Et.now())):c.set(g.key,ur.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new aP(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=pc();let a=new Ot((c,d)=>c-d),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||ur.empty();v=d.applyToLocalView(g,v),i.set(p,v);const E=(a.get(d.batchId)||Qe()).add(p);a=a.insert(d.batchId,E)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,E=VS();v.forEach(T=>{if(!l.has(T)){const I=zS(n.get(T),i.get(T));I!==null&&E.set(T,I),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return ce.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Re.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):ce.resolve(Za());let d=bc,p=l;return c.next(g=>ce.forEach(g,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?ce.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Qe())).next(v=>({batchId:d,changes:PS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Re(n)).next(i=>{let a=sc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=sc();return this.indexManager.getCollectionParents(e,l).next(d=>ce.forEach(d,p=>{const g=function(E,T){return new Fl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((E,T)=>{c=c.insert(E,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Pn.newInvalidDocument(v)))});let d=sc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&mc(v.mutation,g,ur.empty(),Et.now()),Ld(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ce.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:_i(a.createTime)}}(n)),ce.resolve()}getNamedQuery(e,n){return ce.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:X2(a.bundledQuery),readTime:_i(a.readTime)}}(n)),ce.resolve()}}/**
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
 */class uP{constructor(){this.overlays=new Ot(Re.comparator),this.qr=new Map}getOverlay(e,n){return ce.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Za();return ce.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),ce.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),ce.resolve()}getOverlaysForCollection(e,n,i){const a=Za(),l=n.length+1,c=new Re(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ce.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new Ot((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Za(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Za(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return ce.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new R2(n,i));let l=this.qr.get(n);l===void 0&&(l=Qe(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class cP{constructor(){this.sessionToken=Cn.EMPTY_BYTE_STRING}getSessionToken(e){return ce.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ce.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.Qr=new an(yn.$r),this.Ur=new an(yn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new yn(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new yn(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Re(new bt([])),i=new yn(n,e),a=new yn(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Re(new bt([])),i=new yn(n,e),a=new yn(n,e+1);let l=Qe();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new yn(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class yn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Re.comparator(e.key,n.key)||We(e.Yr,n.Yr)}static Kr(e,n){return We(e.Yr,n.Yr)||Re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new an(yn.$r)}checkEmpty(e){return ce.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new A2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new yn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ce.resolve(c)}lookupMutationBatch(e,n){return ce.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return ce.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ce.resolve(this.mutationQueue.length===0?By:this.tr-1)}getAllMutationBatches(e){return ce.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new yn(n,0),a=new yn(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),ce.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new an(We);return n.forEach(a=>{const l=new yn(a,0),c=new yn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),ce.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Re.isDocumentKey(l)||(l=l.child(""));const c=new yn(new Re(l),0);let d=new an(We);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),ce.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){lt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return ce.forEach(n.mutations,a=>{const l=new yn(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new yn(n,0),a=this.Zr.firstAfterOrEqual(i);return ce.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ce.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ri=e,this.docs=function(){return new Ot(Re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return ce.resolve(i?i.document.mutableCopy():Pn.newInvalidDocument(n))}getEntries(e,n){let i=fs();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():Pn.newInvalidDocument(a))}),ce.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=fs();const c=n.path,d=new Re(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||qN(UN(v),i)<=0||(a.has(v.key)||Ld(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return ce.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Me(9500)}ii(e,n){return ce.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new dP(this)}getSize(e){return ce.resolve(this.size)}}class dP extends sP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),ce.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.persistence=e,this.si=new fo(n=>Fy(n),Hy),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Ky,this.targetCount=0,this.ai=kl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),ce.resolve()}getLastRemoteSnapshotVersion(e){return ce.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ce.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ce.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),ce.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new kl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ce.resolve()}updateTargetData(e,n){return this.Pr(n),ce.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ce.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ce.waitFor(l).next(()=>a)}getTargetCount(e){return ce.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return ce.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),ce.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ce.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ce.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return ce.resolve(i)}containsKey(e,n){return ce.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.ui={},this.overlays={},this.ci=new Od(0),this.li=!1,this.li=!0,this.hi=new cP,this.referenceDelegate=e(this),this.Pi=new pP(this),this.indexManager=new Z2,this.remoteDocumentCache=function(a){return new fP(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new K2(n),this.Ii=new lP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new hP(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){Ee("MemoryPersistence","Starting transaction:",e);const a=new mP(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return ce.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class mP extends zN{constructor(e){super(),this.currentSequenceNumber=e}}class Xy{constructor(e){this.persistence=e,this.Ri=new Ky,this.Vi=null}static mi(e){return new Xy(e)}get fi(){if(this.Vi)return this.Vi;throw Me(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),ce.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),ce.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ce.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ce.forEach(this.fi,i=>{const a=Re.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,Ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ce.or([()=>ce.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class pd{constructor(e,n){this.persistence=e,this.pi=new fo(i=>HN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=iP(this,n)}static mi(e,n){return new pd(e,n)}Ei(){}di(e){return ce.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return ce.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?ce.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,Ve.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ce.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),ce.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ce.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ff(e.data.value)),n}br(e,n,i){return ce.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return ce.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return HI()?8:$N(Vn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new gP;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(ul()<=Ye.DEBUG&&Ee("QueryEngine","SDK will not create cache indexes for query:",cl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ce.resolve()):(ul()<=Ye.DEBUG&&Ee("QueryEngine","Query:",cl(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(ul()<=Ye.DEBUG&&Ee("QueryEngine","The SDK decides to create cache indexes for query:",cl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):ce.resolve())}ys(e,n){if(hb(n))return ce.resolve(null);let i=yi(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=ny(n,null,"F"),i=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Qe(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,ny(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return hb(n)||a.isEqual(Ve.min())?ce.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?ce.resolve(null):(ul()<=Ye.DEBUG&&Ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),cl(n)),this.vs(e,c,n,jN(a,bc)).next(d=>d))})}Ds(e,n){let i=new an(MS(e));return n.forEach((a,l)=>{Ld(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return ul()<=Ye.DEBUG&&Ee("QueryEngine","Using full collection scan to execute query:",cl(n)),this.ps.getDocumentsMatchingQuery(e,n,aa.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="LocalStore",_P=3e8;class vP{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Ot(We),this.xs=new fo(l=>Fy(l),Hy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function EP(t,e,n,i){return new vP(t,e,n,i)}async function rx(t,e){const n=Le(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Qe();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function wP(t,e){const n=Le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const E=g.batch,T=E.keys();let I=ce.resolve();return T.forEach(P=>{I=I.next(()=>v.getEntry(p,P)).next(B=>{const O=g.docVersions.get(P);lt(O!==null,48541),B.version.compareTo(O)<0&&(E.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Qe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function ix(t){const e=Le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function bP(t,e){const n=Le(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,E)=>{const T=a.get(E);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,E).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,E)));let I=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?I=I.withResumeToken(Cn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):v.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(v.resumeToken,i)),a=a.insert(E,I),function(B,O,F){return B.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=_P?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,I,v)&&d.push(n.Pi.updateTargetData(l,I))});let p=fs(),g=Qe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(TP(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(Ve.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(E=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return ce.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function TP(t,e,n){let i=Qe(),a=Qe();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=fs();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):Ee(Jy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function SP(t,e){const n=Le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=By),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function xP(t,e){const n=Le(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,ce.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new Js(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function oy(t,e,n){const i=Le(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!$l(c))throw c;Ee(Jy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Sb(t,e,n){const i=Le(t);let a=Ve.min(),l=Qe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const E=Le(p),T=E.xs.get(v);return T!==void 0?ce.resolve(E.Ms.get(T)):E.Pi.getTargetData(g,v)}(i,c,yi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:Ve.min(),n?l:Qe())).next(d=>(AP(i,c2(e),d),{documents:d,Qs:l})))}function AP(t,e,n){let i=t.Os.get(e)||Ve.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class xb{constructor(){this.activeTargetIds=g2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.Mo=new xb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xb,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="ConnectivityMonitor";class Rb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Ee(Ab,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Ee(Ab,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vg="RestConnection",DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class IP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===ud?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=ly(),d=this.zo(e,n.toUriEncodedString());Ee(vg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=jl(g);return this.Jo(e,d,p,i,v).then(E=>(Ee(vg,`Received RPC '${e}' ${c}: `,E),E),E=>{throw Rl(vg,`RPC '${e}' ${c} failed with error: `,E,"url: ",d,"request:",i),E})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=DP[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="WebChannelConnection";class OP extends IP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=ly();return new Promise((d,p)=>{const g=new aS;g.setWithCredentials(!0),g.listenOnce(oS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case $f.NO_ERROR:const E=g.getResponseJson();Ee(On,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),d(E);break;case $f.TIMEOUT:Ee(On,`RPC '${e}' ${c} timed out`),p(new ye(oe.DEADLINE_EXCEEDED,"Request time out"));break;case $f.HTTP_ERROR:const T=g.getStatus();if(Ee(On,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const B=function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf(G)>=0?G:oe.UNKNOWN}(P.status);p(new ye(B,P.message))}else p(new ye(oe.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(oe.UNAVAILABLE,"Connection failed."));break;default:Me(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{Ee(On,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);Ee(On,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=ly(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=cS(),d=uS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");Ee(On,`Creating RPC '${e}' stream ${a}: ${v}`,p);const E=c.createWebChannel(v,p);this.I_(E);let T=!1,I=!1;const P=new kP({Yo:O=>{I?Ee(On,`Not sending because RPC '${e}' stream ${a} is closed:`,O):(T||(Ee(On,`Opening RPC '${e}' stream ${a} transport.`),E.open(),T=!0),Ee(On,`RPC '${e}' stream ${a} sending:`,O),E.send(O))},Zo:()=>E.close()}),B=(O,F,G)=>{O.listen(F,N=>{try{G(N)}catch(J){setTimeout(()=>{throw J},0)}})};return B(E,ic.EventType.OPEN,()=>{I||(Ee(On,`RPC '${e}' stream ${a} transport opened.`),P.o_())}),B(E,ic.EventType.CLOSE,()=>{I||(I=!0,Ee(On,`RPC '${e}' stream ${a} transport closed`),P.a_(),this.E_(E))}),B(E,ic.EventType.ERROR,O=>{I||(I=!0,Rl(On,`RPC '${e}' stream ${a} transport errored. Name:`,O.name,"Message:",O.message),P.a_(new ye(oe.UNAVAILABLE,"The operation could not be completed")))}),B(E,ic.EventType.MESSAGE,O=>{var F;if(!I){const G=O.data[0];lt(!!G,16349);const N=G,J=(N==null?void 0:N.error)||((F=N[0])==null?void 0:F.error);if(J){Ee(On,`RPC '${e}' stream ${a} received error:`,J);const z=J.status;let re=function(k){const U=Qt[k];if(U!==void 0)return HS(U)}(z),D=J.message;re===void 0&&(re=oe.INTERNAL,D="Unknown error status: "+z+" with message "+J.message),I=!0,P.a_(new ye(re,D)),E.close()}else Ee(On,`RPC '${e}' stream ${a} received:`,G),P.u_(G)}}),B(d,lS.STAT_EVENT,O=>{O.stat===Qg.PROXY?Ee(On,`RPC '${e}' stream ${a} detected buffering proxy`):O.stat===Qg.NOPROXY&&Ee(On,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Eg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){return new V2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&Ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="PersistentStream";class ax{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===oe.RESOURCE_EXHAUSTED?(hs(n.toString()),hs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ye(oe.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ee(Cb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Ee(Cb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MP extends ax{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=U2(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ve.min():c.readTime?_i(c.readTime):Ve.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=ay(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=ey(p)?{documents:z2(l,p)}:{query:$2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=WS(l,c.resumeToken);const g=ry(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ve.min())>0){d.readTime=dd(l,c.snapshotVersion.toTimestamp());const g=ry(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=H2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=ay(this.serializer),n.removeTarget=e,this.q_(n)}}class NP extends ax{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=B2(e.writeResults,e.commitTime),i=_i(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=ay(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>q2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{}class VP extends PP{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,iy(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(oe.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,iy(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(oe.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class LP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hs(n),this.aa=!1):Ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="RemoteStore";class jP{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{po(this)&&(Ee(co,"Restarting streams for network reachability change."),await async function(p){const g=Le(p);g.Ea.add(4),await Hc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await zd(g)}(this))})}),this.Ra=new LP(i,a)}}async function zd(t){if(po(t))for(const e of t.da)await e(!0)}async function Hc(t){for(const e of t.da)await e(!1)}function ox(t,e){const n=Le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),r_(n)?n_(n):Hl(n).O_()&&t_(n,e))}function e_(t,e){const n=Le(t),i=Hl(n);n.Ia.delete(e),i.O_()&&lx(n,e),n.Ia.size===0&&(i.O_()?i.L_():po(n)&&n.Ra.set("Unknown"))}function t_(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hl(t).Y_(e)}function lx(t,e){t.Va.Ue(e),Hl(t).Z_(e)}function n_(t){t.Va=new O2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Hl(t).start(),t.Ra.ua()}function r_(t){return po(t)&&!Hl(t).x_()&&t.Ia.size>0}function po(t){return Le(t).Ea.size===0}function ux(t){t.Va=void 0}async function UP(t){t.Ra.set("Online")}async function qP(t){t.Ia.forEach((e,n)=>{t_(t,e)})}async function BP(t,e){ux(t),r_(t)?(t.Ra.ha(e),n_(t)):t.Ra.set("Unknown")}async function zP(t,e,n){if(t.Ra.set("Online"),e instanceof YS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){Ee(co,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await md(t,i)}else if(e instanceof Yf?t.Va.Ze(e):e instanceof GS?t.Va.st(e):t.Va.tt(e),!n.isEqual(Ve.min()))try{const i=await ix(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Cn.EMPTY_BYTE_STRING,v.snapshotVersion)),lx(l,p);const E=new Js(v.target,p,g,v.sequenceNumber);t_(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){Ee(co,"Failed to raise snapshot:",i),await md(t,i)}}async function md(t,e,n){if(!$l(e))throw e;t.Ea.add(1),await Hc(t),t.Ra.set("Offline"),n||(n=()=>ix(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Ee(co,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zd(t)})}function cx(t,e){return e().catch(n=>md(t,n,e))}async function $d(t){const e=Le(t),n=ca(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:By;for(;$P(e);)try{const a=await SP(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,FP(e,a)}catch(a){await md(e,a)}hx(e)&&fx(e)}function $P(t){return po(t)&&t.Ta.length<10}function FP(t,e){t.Ta.push(e);const n=ca(t);n.O_()&&n.X_&&n.ea(e.mutations)}function hx(t){return po(t)&&!ca(t).x_()&&t.Ta.length>0}function fx(t){ca(t).start()}async function HP(t){ca(t).ra()}async function GP(t){const e=ca(t);for(const n of t.Ta)e.ea(n.mutations)}async function YP(t,e,n){const i=t.Ta.shift(),a=Yy.from(i,e,n);await cx(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await $d(t)}async function WP(t,e){e&&ca(t).X_&&await async function(i,a){if(function(c){return D2(c)&&c!==oe.ABORTED}(a.code)){const l=i.Ta.shift();ca(i).B_(),await cx(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await $d(i)}}(t,e),hx(t)&&fx(t)}async function Db(t,e){const n=Le(t);n.asyncQueue.verifyOperationInProgress(),Ee(co,"RemoteStore received new credentials");const i=po(n);n.Ea.add(3),await Hc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zd(n)}async function QP(t,e){const n=Le(t);e?(n.Ea.delete(2),await zd(n)):e||(n.Ea.add(2),await Hc(n),n.Ra.set("Unknown"))}function Hl(t){return t.ma||(t.ma=function(n,i,a){const l=Le(n);return l.sa(),new MP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:UP.bind(null,t),t_:qP.bind(null,t),r_:BP.bind(null,t),H_:zP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),r_(t)?n_(t):t.Ra.set("Unknown")):(await t.ma.stop(),ux(t))})),t.ma}function ca(t){return t.fa||(t.fa=function(n,i,a){const l=Le(n);return l.sa(),new NP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:HP.bind(null,t),r_:WP.bind(null,t),ta:GP.bind(null,t),na:YP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await $d(t)):(await t.fa.stop(),t.Ta.length>0&&(Ee(co,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new i_(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s_(t,e){if(hs("AsyncQueue",`${e}: ${t}`),$l(t))return new ye(oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{static emptySet(e){return new _l(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Re.comparator(n.key,i.key):(n,i)=>Re.comparator(n.key,i.key),this.keyedMap=sc(),this.sortedSet=new Ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _l)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ib{constructor(){this.ga=new Ot(Re.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Me(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ol{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Ol(e,n,_l.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class XP{constructor(){this.queries=kb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=Le(n),l=a.queries;a.queries=kb(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ye(oe.ABORTED,"Firestore shutting down"))}}function kb(){return new fo(t=>OS(t),Vd)}async function a_(t,e){const n=Le(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new KP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=s_(c,`Initialization of query '${cl(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&l_(n)}async function o_(t,e){const n=Le(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ZP(t,e){const n=Le(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&l_(n)}function JP(t,e,n){const i=Le(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function l_(t){t.Ca.forEach(e=>{e.next()})}var uy,Ob;(Ob=uy||(uy={})).Ma="default",Ob.Cache="cache";class u_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Ol(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ol.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==uy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.key=e}}class px{constructor(e){this.key=e}}class e4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=MS(e),this.tu=new _l(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Ib,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,E)=>{const T=a.get(v),I=Ld(this.query,E)?E:null,P=!!T&&this.mutatedKeys.has(T.key),B=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;T&&I?T.data.isEqual(I.data)?P!==B&&(i.track({type:3,doc:I}),O=!0):this.su(T,I)||(i.track({type:2,doc:I}),O=!0,(p&&this.eu(I,p)>0||g&&this.eu(I,g)<0)&&(d=!0)):!T&&I?(i.track({type:0,doc:I}),O=!0):T&&!I&&(i.track({type:1,doc:T}),O=!0,(p||g)&&(d=!0)),O&&(I?(c=c.add(I),l=B?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,E)=>function(I,P){const B=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Me(20277,{Rt:O})}};return B(I)-B(P)}(v.type,E.type)||this.eu(v.doc,E.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Ol(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ib,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new px(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new dx(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Qe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ol.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const c_="SyncEngine";class t4{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class n4{constructor(e){this.key=e,this.hu=!1}}class r4{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new fo(d=>OS(d),Vd),this.Iu=new Map,this.Eu=new Set,this.du=new Ot(Re.comparator),this.Au=new Map,this.Ru=new Ky,this.Vu={},this.mu=new Map,this.fu=kl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function i4(t,e,n=!0){const i=Ex(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await mx(i,e,n,!0),a}async function s4(t,e){const n=Ex(t);await mx(n,e,!0,!1)}async function mx(t,e,n,i){const a=await xP(t.localStore,yi(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await a4(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&ox(t.remoteStore,a),d}async function a4(t,e,n,i,a){t.pu=(E,T,I)=>async function(B,O,F,G){let N=O.view.ru(F);N.Cs&&(N=await Sb(B.localStore,O.query,!1).then(({documents:D})=>O.view.ru(D,N)));const J=G&&G.targetChanges.get(O.targetId),z=G&&G.targetMismatches.get(O.targetId)!=null,re=O.view.applyChanges(N,B.isPrimaryClient,J,z);return Nb(B,O.targetId,re.au),re.snapshot}(t,E,T,I);const l=await Sb(t.localStore,e,!0),c=new e4(e,l.Qs),d=c.ru(l.documents),p=Fc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Nb(t,n,g.au);const v=new t4(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function o4(t,e,n){const i=Le(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Vd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await oy(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&e_(i.remoteStore,a.targetId),cy(i,a.targetId)}).catch(zl)):(cy(i,a.targetId),await oy(i.localStore,a.targetId,!0))}async function l4(t,e){const n=Le(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),e_(n.remoteStore,i.targetId))}async function u4(t,e,n){const i=g4(t);try{const a=await function(c,d){const p=Le(c),g=Et.now(),v=d.reduce((I,P)=>I.add(P.key),Qe());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=fs(),B=Qe();return p.Ns.getEntries(I,v).next(O=>{P=O,P.forEach((F,G)=>{G.isValidDocument()||(B=B.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,P)).next(O=>{E=O;const F=[];for(const G of d){const N=S2(G,E.get(G.key).overlayedDocument);N!=null&&F.push(new ya(G.key,N,SS(N.value.mapValue),Br.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,F,d)}).next(O=>{T=O;const F=O.applyToLocalDocumentSet(E,B);return p.documentOverlayCache.saveOverlays(I,O.batchId,F)})}).then(()=>({batchId:T.batchId,changes:PS(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Ot(We)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await Gc(i,a.changes),await $d(i.remoteStore)}catch(a){const l=s_(a,"Failed to persist write");n.reject(l)}}async function gx(t,e){const n=Le(t);try{const i=await bP(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(lt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?lt(c.hu,14607):a.removedDocuments.size>0&&(lt(c.hu,42227),c.hu=!1))}),await Gc(n,i,e)}catch(i){await zl(i)}}function Mb(t,e,n){const i=Le(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Le(c);p.onlineState=d;let g=!1;p.queries.forEach((v,E)=>{for(const T of E.Sa)T.va(d)&&(g=!0)}),g&&l_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function c4(t,e,n){const i=Le(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new Ot(Re.comparator);c=c.insert(l,Pn.newNoDocument(l,Ve.min()));const d=Qe().add(l),p=new qd(Ve.min(),new Map,new Ot(We),c,d);await gx(i,p),i.du=i.du.remove(l),i.Au.delete(e),h_(i)}else await oy(i.localStore,e,!1).then(()=>cy(i,e,n)).catch(zl)}async function h4(t,e){const n=Le(t),i=e.batch.batchId;try{const a=await wP(n.localStore,e);_x(n,i,null),yx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Gc(n,a)}catch(a){await zl(a)}}async function f4(t,e,n){const i=Le(t);try{const a=await function(c,d){const p=Le(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(E=>(lt(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(g,E))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);_x(i,e,n),yx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Gc(i,a)}catch(a){await zl(a)}}function yx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function _x(t,e,n){const i=Le(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function cy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||vx(t,i)})}function vx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(e_(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),h_(t))}function Nb(t,e,n){for(const i of n)i instanceof dx?(t.Ru.addReference(i.key,e),d4(t,i)):i instanceof px?(Ee(c_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||vx(t,i.key)):Me(19791,{wu:i})}function d4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(Ee(c_,"New document in limbo: "+n),t.Eu.add(i),h_(t))}function h_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Re(bt.fromString(e)),i=t.fu.next();t.Au.set(i,new n4(n)),t.du=t.du.insert(n,i),ox(t.remoteStore,new Js(yi(Pd(n.path)),i,"TargetPurposeLimboResolution",Od.ce))}}async function Gc(t,e,n){const i=Le(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const E=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(g){a.push(g);const E=Zy.As(p.targetId,g);l.push(E)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=Le(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ce.forEach(g,T=>ce.forEach(T.Es,I=>v.persistence.referenceDelegate.addReference(E,T.targetId,I)).next(()=>ce.forEach(T.ds,I=>v.persistence.referenceDelegate.removeReference(E,T.targetId,I)))))}catch(E){if(!$l(E))throw E;Ee(Jy,"Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const I=v.Ms.get(T),P=I.snapshotVersion,B=I.withLastLimboFreeSnapshotVersion(P);v.Ms=v.Ms.insert(T,B)}}}(i.localStore,l))}async function p4(t,e){const n=Le(t);if(!n.currentUser.isEqual(e)){Ee(c_,"User change. New user:",e.toKey());const i=await rx(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ye(oe.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Gc(n,i.Ls)}}function m4(t,e){const n=Le(t),i=n.Au.get(e);if(i&&i.hu)return Qe().add(i.key);{let a=Qe();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function Ex(t){const e=Le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c4.bind(null,e),e.Pu.H_=ZP.bind(null,e.eventManager),e.Pu.yu=JP.bind(null,e.eventManager),e}function g4(t){const e=Le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=f4.bind(null,e),e}class gd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return EP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new nx(Xy.mi,this.serializer)}Du(e){return new RP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gd.provider={build:()=>new gd};class y4 extends gd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof pd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new nP(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Yn.withCacheSize(this.cacheSizeBytes):Yn.DEFAULT;return new nx(i=>pd.mi(i,n),this.serializer)}}class hy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Mb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=p4.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XP}()}createDatastore(e){const n=Bd(e.databaseInfo.databaseId),i=function(l){return new OP(l)}(e.databaseInfo);return function(l,c,d,p){return new VP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new jP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Mb(this.syncEngine,n,0),function(){return Rb.v()?new Rb:new CP}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const E=new r4(a,l,c,d,p,g);return v&&(E.gu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=Le(a);Ee(co,"RemoteStore shutting down."),l.Ea.add(5),await Hc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}hy.provider={build:()=>new hy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ha="FirestoreClient";class _4{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Nn.UNAUTHENTICATED,this.clientId=qy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{Ee(ha,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(Ee(ha,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=s_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function wg(t,e){t.asyncQueue.verifyOperationInProgress(),Ee(ha,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await rx(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v4(t);Ee(ha,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Db(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>Db(e.remoteStore,a)),t._onlineComponents=e}async function v4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ee(ha,"Using user provided OfflineComponentProvider");try{await wg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===oe.FAILED_PRECONDITION||a.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Rl("Error using user provided cache. Falling back to memory cache: "+n),await wg(t,new gd)}}else Ee(ha,"Using default OfflineComponentProvider"),await wg(t,new y4(void 0));return t._offlineComponents}async function wx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ee(ha,"Using user provided OnlineComponentProvider"),await Pb(t,t._uninitializedComponentsProvider._online)):(Ee(ha,"Using default OnlineComponentProvider"),await Pb(t,new hy))),t._onlineComponents}function E4(t){return wx(t).then(e=>e.syncEngine)}async function yd(t){const e=await wx(t),n=e.eventManager;return n.onListen=i4.bind(null,e.syncEngine),n.onUnlisten=o4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=s4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=l4.bind(null,e.syncEngine),n}function w4(t,e,n={}){const i=new os;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new f_({next:T=>{v.Nu(),c.enqueueAndForget(()=>o_(l,E));const I=T.docs.has(d);!I&&T.fromCache?g.reject(new ye(oe.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&T.fromCache&&p&&p.source==="server"?g.reject(new ye(oe.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new u_(Pd(d.path),v,{includeMetadataChanges:!0,qa:!0});return a_(l,E)}(await yd(t),t.asyncQueue,e,n,i)),i.promise}function b4(t,e,n={}){const i=new os;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new f_({next:T=>{v.Nu(),c.enqueueAndForget(()=>o_(l,E)),T.fromCache&&p.source==="server"?g.reject(new ye(oe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new u_(d,v,{includeMetadataChanges:!0,qa:!0});return a_(l,E)}(await yd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function bx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Tx="firestore.googleapis.com",Lb=!0;class jb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tx,this.ssl=Lb}else this.host=e.host,this.ssl=e.ssl??Lb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eP)throw new ye(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new RN;switch(i.type){case"firstParty":return new kN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Vb.get(n);i&&(Ee("ComponentProvider","Removing Datastore"),Vb.delete(n),i.terminate())}(this),Promise.resolve()}}function T4(t,e,n,i={}){var g;t=hr(t,Fd);const a=jl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(y1(`https://${d}`),_1("Firestore",!0)),l.host!==Tx&&l.host!==d&&Rl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!so(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,E;if(typeof i.mockUserToken=="string")v=i.mockUserToken,E=Nn.MOCK_USER;else{v=VI(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ye(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Nn(T)}t._authCredentials=new CN(new fS(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class Vt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}toJSON(){return{type:Vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(zc(n,Vt._jsonSchema))return new Vt(e,i||null,new Re(bt.fromString(n.referencePath)))}}Vt._jsonSchemaVersion="firestore/documentReference/1.0",Vt._jsonSchema={type:Zt("string",Vt._jsonSchemaVersion),referencePath:Zt("string")};class sa extends _a{constructor(e,n,i){super(e,n,Pd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Re(e))}withConverter(e){return new sa(this.firestore,e,this._path)}}function cr(t,e,...n){if(t=Jt(t),dS("collection","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Xw(i),new sa(t,null,i)}{if(!(t instanceof Vt||t instanceof sa))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Xw(i),new sa(t.firestore,null,i)}}function $n(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=qy.newId()),dS("doc","path",e),t instanceof Fd){const i=bt.fromString(e,...n);return Kw(i),new Vt(t,null,new Re(i))}{if(!(t instanceof Vt||t instanceof sa))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(bt.fromString(e,...n));return Kw(i),new Vt(t.firestore,t instanceof sa?t.converter:null,new Re(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="AsyncQueue";class qb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sx(this,"async_queue_retry"),this._c=()=>{const i=Eg();i&&Ee(Ub,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Eg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Eg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new os;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$l(e))throw e;Ee(Ub,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,hs("INTERNAL UNHANDLED ERROR: ",Bb(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=i_.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Me(47125,{Pc:Bb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function zb(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class fa extends Fd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new qb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qb(e),this._firestoreClient=void 0,await e}}}function Sx(t,e){const n=typeof t=="object"?t:b1(),i=typeof t=="string"?t:ud,a=Iy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=NI("firestore");l&&T4(a,...l)}return a}function Hd(t){if(t._terminated)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||S4(t),t._firestoreClient}function S4(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new WN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,bx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new _4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(Cn.fromBase64String(e))}catch(n){throw new ye(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cr(Cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zc(e,Cr._jsonSchema))return Cr.fromBase64String(e.bytes)}}Cr._jsonSchemaVersion="firestore/bytes/1.0",Cr._jsonSchema={type:Zt("string",Cr._jsonSchemaVersion),bytes:Zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vi._jsonSchemaVersion}}static fromJSON(e){if(zc(e,vi._jsonSchema))return new vi(e.latitude,e.longitude)}}vi._jsonSchemaVersion="firestore/geoPoint/1.0",vi._jsonSchema={type:Zt("string",vi._jsonSchemaVersion),latitude:Zt("number"),longitude:Zt("number")};/**
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
 */class Ei{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ei._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zc(e,Ei._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ei(e.vectorValues);throw new ye(oe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ei._jsonSchemaVersion="firestore/vectorValue/1.0",Ei._jsonSchema={type:Zt("string",Ei._jsonSchemaVersion),vectorValues:Zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=/^__.*__$/;class A4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ya(e,this.data,this.fieldMask,n,this.fieldTransforms):new $c(e,this.data,n,this.fieldTransforms)}}class xx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ya(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ax(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Me(40011,{Ac:t})}}class d_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new d_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _d(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ax(this.Ac)&&x4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class R4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Bd(e)}Cc(e,n,i,a=!1){return new d_({Ac:e,methodName:n,Dc:i,path:Rn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(t){const e=t._freezeSettings(),n=Bd(t._databaseId);return new R4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);m_("Data must be an object, but it was:",c,i);const d=Cx(i,c);let p,g;if(l.merge)p=new ur(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const T=fy(e,E,n);if(!c.contains(T))throw new ye(oe.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Ix(v,T)||v.push(T)}p=new ur(v),g=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,g=c.fieldTransforms;return new A4(new Qn(d),p,g)}class Qd extends Yd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qd}}class p_ extends Yd{_toFieldTransform(e){return new E2(e.path,new Rc)}isEqual(e){return e instanceof p_}}function C4(t,e,n,i){const a=t.Cc(1,e,n);m_("Data must be an object, but it was:",a,i);const l=[],c=Qn.empty();ga(i,(p,g)=>{const v=g_(e,p,n);g=Jt(g);const E=a.yc(v);if(g instanceof Qd)l.push(v);else{const T=Yc(g,E);T!=null&&(l.push(v),c.set(v,T))}});const d=new ur(l);return new xx(c,d,a.fieldTransforms)}function D4(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[fy(e,i,n)],p=[a];if(l.length%2!=0)throw new ye(oe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(fy(e,l[T])),p.push(l[T+1]);const g=[],v=Qn.empty();for(let T=d.length-1;T>=0;--T)if(!Ix(g,d[T])){const I=d[T];let P=p[T];P=Jt(P);const B=c.yc(I);if(P instanceof Qd)g.push(I);else{const O=Yc(P,B);O!=null&&(g.push(I),v.set(I,O))}}const E=new ur(g);return new xx(v,E,c.fieldTransforms)}function I4(t,e,n,i=!1){return Yc(n,t.Cc(i?4:3,e))}function Yc(t,e){if(Dx(t=Jt(t)))return m_("Unsupported field value:",e,t),Cx(t,e);if(t instanceof Yd)return function(i,a){if(!Ax(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Yc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Jt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return y2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Et.fromDate(i);return{timestampValue:dd(a.serializer,l)}}if(i instanceof Et){const l=new Et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:dd(a.serializer,l)}}if(i instanceof vi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cr)return{bytesValue:WS(a.serializer,i._byteString)};if(i instanceof Vt){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof Ei)return function(c,d){return{mapValue:{fields:{[bS]:{stringValue:TS},[cd]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return Gy(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${kd(i)}`)}(t,e)}function Cx(t,e){const n={};return gS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ga(t,(i,a)=>{const l=Yc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Dx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof vi||t instanceof Cr||t instanceof Vt||t instanceof Yd||t instanceof Ei)}function m_(t,e,n){if(!Dx(n)||!pS(n)){const i=kd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function fy(t,e,n){if((e=Jt(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return g_(t,e);throw _d("Field path arguments must be of type string or ",t,!1,void 0,n)}const k4=new RegExp("[~\\*/\\[\\]]");function g_(t,e,n){if(e.search(k4)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gd(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _d(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ye(oe.INVALID_ARGUMENT,d+t+p)}function Ix(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O4 extends kx{data(){return super.data()}}function Kd(t,e){return typeof e=="string"?g_(t,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class y_{}class Mx extends y_{}function jr(t,e,...n){let i=[];e instanceof y_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof __).length,d=l.filter(p=>p instanceof Xd).length;if(c>1||c>0&&d>0)throw new ye(oe.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Xd extends Mx{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Xd(e,n,i)}_apply(e){const n=this._parse(e);return Nx(e._query,n),new _a(e.firestore,e.converter,ty(e._query,n))}_parse(e){const n=Wd(e.firestore);return function(l,c,d,p,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ye(oe.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Fb(E,v);const P=[];for(const B of E)P.push($b(p,l,B));T={arrayValue:{values:P}}}else T=$b(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Fb(E,v),T=I4(d,c,E,v==="in"||v==="not-in");return Xt.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wn(t,e,n){const i=e,a=Kd("where",t);return Xd._create(a,i,n)}class __ extends y_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new __(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Fr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Nx(c,p),c=ty(c,p)}(e._query,n),new _a(e.firestore,e.converter,ty(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class v_ extends Mx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new v_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ye(oe.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ye(oe.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ac(l,c)}(e._query,this._field,this._direction);return new _a(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new Fl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function E_(t,e="asc"){const n=e,i=Kd("orderBy",t);return v_._create(i,n)}function $b(t,e,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new ye(oe.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kS(e)&&n.indexOf("/")!==-1)throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(bt.fromString(n));if(!Re.isDocumentKey(i))throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return sb(t,new Re(i))}if(n instanceof Vt)return sb(t,n._key);throw new ye(oe.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kd(n)}.`)}function Fb(t,e){if(!Array.isArray(t)||t.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ye(oe.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ye(oe.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class M4{convertValue(e,n="none"){switch(ua(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(la(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ga(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[cd].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>Bt(c.doubleValue));return new Ei(n)}convertGeoPoint(e){return new vi(Bt(e.latitude),Bt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Nd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Tc(e));default:return null}}convertTimestamp(e){const n=oa(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=bt.fromString(e);lt(ex(i),9688,{name:e});const a=new Sc(i.get(1),i.get(3)),l=new Re(i.popFirst(5));return a.isEqual(n)||hs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class oc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class to extends kx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Kd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=to._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}to._jsonSchemaVersion="firestore/documentSnapshot/1.0",to._jsonSchema={type:Zt("string",to._jsonSchemaVersion),bundleSource:Zt("string","DocumentSnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class Wf extends to{data(e={}){return super.data(e)}}class no{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new oc(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Wf(this._firestore,this._userDataWriter,i.key,i,new oc(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new oc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new oc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:N4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(oe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=no._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function N4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Me(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){t=hr(t,Vt);const e=hr(t.firestore,fa);return w4(Hd(e),t._key).then(n=>Vx(e,t,n))}no._jsonSchemaVersion="firestore/querySnapshot/1.0",no._jsonSchema={type:Zt("string",no._jsonSchemaVersion),bundleSource:Zt("string","QuerySnapshot"),bundleName:Zt("string"),bundle:Zt("string")};class w_ extends M4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function vl(t){t=hr(t,_a);const e=hr(t.firestore,fa),n=Hd(e),i=new w_(e);return Ox(t._query),b4(n,t._query).then(a=>new no(e,i,t,a))}function P4(t,e,n){t=hr(t,Vt);const i=hr(t.firestore,fa),a=Px(t.converter,e);return b_(i,[Rx(Wd(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Br.none())])}function di(t,e,n,...i){t=hr(t,Vt);const a=hr(t.firestore,fa),l=Wd(a);let c;return c=typeof(e=Jt(e))=="string"||e instanceof Gd?D4(l,"updateDoc",t._key,e,n,i):C4(l,"updateDoc",t._key,e),b_(a,[c.toMutation(t._key,Br.exists(!0))])}function V4(t,e){const n=hr(t.firestore,fa),i=$n(t),a=Px(t.converter,e);return b_(n,[Rx(Wd(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Br.exists(!1))]).then(()=>i)}function Jd(t,...e){var p,g,v;t=Jt(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||zb(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(zb(e[i])){const E=e[i];e[i]=(p=E.next)==null?void 0:p.bind(E),e[i+1]=(g=E.error)==null?void 0:g.bind(E),e[i+2]=(v=E.complete)==null?void 0:v.bind(E)}let l,c,d;if(t instanceof Vt)c=hr(t.firestore,fa),d=Pd(t._key.path),l={next:E=>{e[i]&&e[i](Vx(c,t,E))},error:e[i+1],complete:e[i+2]};else{const E=hr(t,_a);c=hr(E.firestore,fa),d=E._query;const T=new w_(c);l={next:I=>{e[i]&&e[i](new no(c,T,E,I))},error:e[i+1],complete:e[i+2]},Ox(t._query)}return function(T,I,P,B){const O=new f_(B),F=new u_(I,O,P);return T.asyncQueue.enqueueAndForget(async()=>a_(await yd(T),F)),()=>{O.Nu(),T.asyncQueue.enqueueAndForget(async()=>o_(await yd(T),F))}}(Hd(c),d,a,l)}function b_(t,e){return function(i,a){const l=new os;return i.asyncQueue.enqueueAndForget(async()=>u4(await E4(i),a,l)),l.promise}(Hd(t),e)}function Vx(t,e,n){const i=n.docs.get(e._key),a=new w_(t);return new to(t,a,e._key,i,new oc(n.hasPendingWrites,n.fromCache),e.converter)}function dy(){return new p_("serverTimestamp")}(function(e,n=!0){(function(a){Bl=a})(Ul),xl(new ao("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new fa(new DN(i.getProvider("auth-internal")),new ON(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ra(Gw,Yw,e),ra(Gw,Yw,"esm2020")})();const L4={apiKey:"AIzaSyDPpncxsw6-M6CvwfqvDFCOXgnUuHXo44o",authDomain:"pdms-eda37.firebaseapp.com",projectId:"pdms-eda37",storageBucket:"pdms-eda37.firebasestorage.app",messagingSenderId:"62711519276",appId:"1:62711519276:web:1d66a26228c184d135d989"},T_=w1(L4);Sx(T_);const vt=Sx(T_),da=TN(T_);function j4({onLoginSuccess:t}){const[e,n]=j.useState(""),[i,a]=j.useState(""),l=Mc(),c=()=>{l("/signup")},d=()=>{oM(da,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(U4,{children:[_.jsxs(q4,{children:[_.jsxs(B4,{children:[_.jsx(z4,{children:"PDMS"}),_.jsx($4,{children:"Pushcomz Design Management System"})]}),_.jsxs(F4,{children:[_.jsx(H4,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(G4,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(Y4,{onClick:d,children:"로그인"}),_.jsxs(Q4,{children:[_.jsx(K4,{children:"계정이 없습니까?"}),_.jsx(X4,{onClick:c,children:"등록하기"})]})]}),_.jsx(W4,{children:"© Pushcomz Corp."})]})}const U4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,q4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,B4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,z4=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,$4=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,F4=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
`,H4=H.input`
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
`,Y4=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`,W4=H.p`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
`,Q4=H.div`
  
`,K4=H.span`
  margin-right: 10px;
  font-size: 13px;
`,X4=H.button`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.navy};
`,Z4="./assets/logo-NEcdCz8m.svg";function J4(){const[t,e]=j.useState(""),[n,i]=j.useState(""),[a,l]=j.useState(null),c=Mc();j.useEffect(()=>{const g=qc(da,async v=>{if(v){v.displayName&&e(v.displayName);const E=await Zd($n(vt,"users",v.uid));if(E.exists()){const T=E.data();l(T.role??null),i(T.company??"")}else l(null),i("")}else e(""),l(null),i("")});return()=>g()},[]);const d=()=>{fM(da).then(()=>{c("/")}).catch(g=>{alert("로그아웃 중 오류가 발생했습니다: "+g.message)})},p=g=>{switch(g){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(eV,{children:[_.jsx(tV,{src:Z4}),_.jsxs(nV,{children:[_.jsxs(rV,{children:[_.jsx(iV,{children:t}),"님(",p(a),") ",n,"환영합니다."]}),_.jsx(sV,{onClick:d,children:"로그아웃"}),_.jsx(aV,{})]})]})}const eV=H.header`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 12px 48px;
  font-family: 'Pretendard';
  background-color: ${({theme:t})=>t.colors.black};
`,tV=H.img``,nV=H.div``,rV=H.span`
  margin-right: 24px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,iV=H.span`
  font-weight: 700;
`,sV=H.button`
  padding: 5px 10px;
  border: 1px solid ${({theme:t})=>t.colors.white01};
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,aV=H.span`
  color: ${({theme:t})=>t.colors.white01};
  font-size: 16px;
`,S_="./assets/url-icon-DJKri2bW.svg";function oV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(lV,{isCanceled:t.status==="취소",children:[_.jsx(Ar,{children:e}),_.jsx(Ar,{children:_.jsx(pV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(Ar,{children:c(t.request_date)}),_.jsx(uV,{children:c(t.completion_dt)}),_.jsx(cV,{children:c(t.open_dt)}),_.jsx(Ar,{children:t.merchandiser}),_.jsx(Ar,{children:t.task_form}),_.jsx(hV,{children:_.jsxs(mV,{children:[_.jsx(gV,{children:t.task_type}),_.jsx(yV,{children:t.task_type_detail})]})}),_.jsx(fV,{children:_.jsxs(_V,{children:[t.emergency?_.jsx(Lx,{children:"긴급"}):"",_.jsx(vV,{onClick:d,children:t.requirement})]})}),_.jsx(Ar,{children:_.jsx(Hb,{href:t.url,target:"_blank"})}),_.jsx(dV,{children:_.jsx(EV,{onClick:d,children:t.note||""})}),_.jsx(Ar,{children:_.jsx(wV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status||"대기"})}),_.jsx(Ar,{children:t.assigned_designer||"미배정"}),_.jsx(Ar,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(Hb,{href:t.result_url,target:"_blank"}):""}),_.jsx(Ar,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(jx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(bV,{children:"검수완료"}):""}),_.jsx(Ar,{children:_.jsx(Ux,{onClick:()=>a(t.id),disabled:t.status==="취소"||t.status==="완료",children:"수정"})}),_.jsx(Ar,{children:_.jsx(qx,{onClick:()=>i(t.id),disabled:t.status==="취소"||t.status==="완료",children:"취소"})})]})}const lV=H.tr`
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
      ${jx}, ${Ux}, ${qx} {
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
`,Ar=H.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,uV=H.td`
  color: ${({theme:t})=>t.colors.red};
`,cV=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,hV=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,fV=H.td`
  line-height: 15px;
  text-align: left;
`,dV=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,pV=H.span`
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
`,mV=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,gV=H.span`
  
`,yV=H.span`
  
`,_V=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,vV=H.span`
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
`,EV=H.span`
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
`,wV=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.blue02;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.lightpupple;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,jx=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({theme:t})=>t.colors.white01};
  background-color: green;
`,bV=H.span`
  color: green;
  font-weight: bold;
`,Ux=H.button`
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
`;function TV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(SV,{children:_.jsxs(xV,{children:[_.jsx(AV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"180px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(xn,{children:"번호"}),_.jsx(xn,{children:"문서번호"}),_.jsx(xn,{children:"요청일"}),_.jsxs(xn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(xn,{children:"오픈일"}),_.jsx(xn,{children:"담당MD"}),_.jsx(xn,{children:"업무부서"}),_.jsx(xn,{children:"업무유형"}),_.jsx(xn,{children:"작업항목"}),_.jsx(xn,{children:"요청서 URL"}),_.jsx(xn,{children:"메모"}),_.jsx(xn,{children:"진행상태"}),_.jsx(xn,{children:"디자이너"}),_.jsx(xn,{children:"산출물 URL"}),_.jsx(xn,{children:"검수"}),_.jsx(xn,{children:"수정"}),_.jsx(xn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(oV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const SV=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,xV=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,AV=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,xn=H.th`
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
`;function x_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(RV,{children:_.jsxs(CV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const RV=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,CV=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Bx="./assets/selectbox-arrow-BwC8UGU0.svg";function DV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const bg={},lc={};function Ja(t,e){try{const i=(bg[t]||(bg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in lc?lc[i]:Gb(i,i.split(":"))}catch{if(t in lc)return lc[t];const n=t==null?void 0:t.match(IV);return n?Gb(t,n.slice(1)):NaN}}const IV=/([+-]\d\d):?(\d\d)?/;function Gb(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return lc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class pi extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Ja(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),zx(this),py(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new pi(...n,e):new pi(Date.now(),e)}withTimeZone(e){return new pi(+this,e)}getTimezoneOffset(){const e=-Ja(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),py(this),+this}[Symbol.for("constructDateFrom")](e){return new pi(+new Date(e),this.timeZone)}}const Yb=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!Yb.test(t))return;const e=t.replace(Yb,"$1UTC");pi.prototype[e]&&(t.startsWith("get")?pi.prototype[t]=function(){return this.internal[e]()}:(pi.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),kV(this),+this},pi.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),py(this),+this}))});function py(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Ja(t.timeZone,t)*60))}function kV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),zx(t)}function zx(t){const e=Ja(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,E=Math.round(-(Ja(t.timeZone,t)*60))%60;(E||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+E),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+E+v));const T=Ja(t.timeZone,t),I=T>0?Math.floor(T):Math.ceil(T),B=-new Date(+t).getTimezoneOffset()-I,O=I!==n,F=B-p;if(O&&F){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+F);const G=Ja(t.timeZone,t),N=G>0?Math.floor(G):Math.ceil(G),J=I-N;J&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+J),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+J))}}class Mn extends pi{static tz(e,...n){return n.length?new Mn(...n,e):new Mn(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${DV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new Mn(+this,e)}[Symbol.for("constructDateFrom")](e){return new Mn(+new Date(e),this.timeZone)}}const $x=6048e5,OV=864e5,Wb=Symbol.for("constructDateFrom");function on(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Wb in t?t[Wb](e):t instanceof Date?new t.constructor(e):new Date(e)}function gt(t,e){return on(e||t,t)}function Fx(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(e)?on(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function Hx(t,e,n){const i=gt(t,n==null?void 0:n.in);if(isNaN(e))return on(t,NaN);if(!e)return i;const a=i.getDate(),l=on(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let MV={};function Wc(){return MV}function Ml(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Ic(t,e){return Ml(t,{...e,weekStartsOn:1})}function Gx(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=on(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Ic(a),c=on(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Ic(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Qb(t){const e=gt(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Gl(t,...e){const n=on.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function kc(t,e){const n=gt(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function Yx(t,e,n){const[i,a]=Gl(n==null?void 0:n.in,t,e),l=kc(i),c=kc(a),d=+l-Qb(l),p=+c-Qb(c);return Math.round((d-p)/OV)}function NV(t,e){const n=Gx(t,e),i=on(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Ic(i)}function PV(t,e,n){return Fx(t,e*7,n)}function VV(t,e,n){return Hx(t,e*12,n)}function LV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=gt(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function jV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=on.bind(null,a));const l=gt(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),on(i,n||NaN)}function UV(t,e,n){const[i,a]=Gl(n==null?void 0:n.in,t,e);return+kc(i)==+kc(a)}function Wx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function qV(t){return!(!Wx(t)&&typeof t!="number"||isNaN(+gt(t)))}function BV(t,e,n){const[i,a]=Gl(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function zV(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function $V(t,e){const[n,i]=Gl(t,e.start,e.end);return{start:n,end:i}}function FV(t,e){const{start:n,end:i}=$V(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(on(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function HV(t,e){const n=gt(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function GV(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function Qx(t,e){const n=gt(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Kx(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=gt(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function YV(t,e){return Kx(t,{...e,weekStartsOn:1})}const WV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},QV=(t,e,n)=>{let i;const a=WV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function Tg(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const KV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},XV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ZV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},JV={date:Tg({formats:KV,defaultWidth:"full"}),time:Tg({formats:XV,defaultWidth:"full"}),dateTime:Tg({formats:ZV,defaultWidth:"full"})},e6={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},t6=(t,e,n,i)=>e6[t];function Xu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const n6={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},r6={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},i6={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},s6={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},a6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},o6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},l6=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},u6={ordinalNumber:l6,era:Xu({values:n6,defaultWidth:"wide"}),quarter:Xu({values:r6,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Xu({values:i6,defaultWidth:"wide"}),day:Xu({values:s6,defaultWidth:"wide"}),dayPeriod:Xu({values:a6,defaultWidth:"wide",formattingValues:o6,defaultFormattingWidth:"wide"})};function Zu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?h6(d,E=>E.test(c)):c6(d,E=>E.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function c6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function h6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function f6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const d6=/^(\d+)(th|st|nd|rd)?/i,p6=/\d+/i,m6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},g6={any:[/^b/i,/^(a|c)/i]},y6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_6={any:[/1/i,/2/i,/3/i,/4/i]},v6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},w6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},b6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},T6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},x6={ordinalNumber:f6({matchPattern:d6,parsePattern:p6,valueCallback:t=>parseInt(t,10)}),era:Zu({matchPatterns:m6,defaultMatchWidth:"wide",parsePatterns:g6,defaultParseWidth:"any"}),quarter:Zu({matchPatterns:y6,defaultMatchWidth:"wide",parsePatterns:_6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Zu({matchPatterns:v6,defaultMatchWidth:"wide",parsePatterns:E6,defaultParseWidth:"any"}),day:Zu({matchPatterns:w6,defaultMatchWidth:"wide",parsePatterns:b6,defaultParseWidth:"any"}),dayPeriod:Zu({matchPatterns:T6,defaultMatchWidth:"any",parsePatterns:S6,defaultParseWidth:"any"})},A_={code:"en-US",formatDistance:QV,formatLong:JV,formatRelative:t6,localize:u6,match:x6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function A6(t,e){const n=gt(t,e==null?void 0:e.in);return Yx(n,Qx(n))+1}function Xx(t,e){const n=gt(t,e==null?void 0:e.in),i=+Ic(n)-+NV(n);return Math.round(i/$x)+1}function Zx(t,e){var v,E,T,I;const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=Wc(),l=(e==null?void 0:e.firstWeekContainsDate)??((E=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??a.firstWeekContainsDate??((I=(T=a.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=on((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Ml(c,e),p=on((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Ml(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function R6(t,e){var d,p,g,v;const n=Wc(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Zx(t,e),l=on((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Ml(l,e)}function Jx(t,e){const n=gt(t,e==null?void 0:e.in),i=+Ml(n,e)-+R6(n,e);return Math.round(i/$x)+1}function ht(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Gs={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ht(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ht(n+1,2)},d(t,e){return ht(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ht(t.getHours()%12||12,e.length)},H(t,e){return ht(t.getHours(),e.length)},m(t,e){return ht(t.getMinutes(),e.length)},s(t,e){return ht(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ht(a,e.length)}},ol={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Kb={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Gs.y(t,e)},Y:function(t,e,n,i){const a=Zx(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ht(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ht(l,e.length)},R:function(t,e){const n=Gx(t);return ht(n,e.length)},u:function(t,e){const n=t.getFullYear();return ht(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ht(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ht(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Gs.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ht(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Jx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ht(a,e.length)},I:function(t,e,n){const i=Xx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ht(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Gs.d(t,e)},D:function(t,e,n){const i=A6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ht(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ht(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ht(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ht(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=ol.noon:i===0?a=ol.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=ol.evening:i>=12?a=ol.afternoon:i>=4?a=ol.morning:a=ol.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Gs.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Gs.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ht(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Gs.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Gs.s(t,e)},S:function(t,e){return Gs.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Zb(i);case"XXXX":case"XX":return Ka(i);case"XXXXX":case"XXX":default:return Ka(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Zb(i);case"xxxx":case"xx":return Ka(i);case"xxxxx":case"xxx":default:return Ka(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Xb(i,":");case"OOOO":default:return"GMT"+Ka(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Xb(i,":");case"zzzz":default:return"GMT"+Ka(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ht(i,e.length)},T:function(t,e,n){return ht(+t,e.length)}};function Xb(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ht(l,2)}function Zb(t,e){return t%60===0?(t>0?"-":"+")+ht(Math.abs(t)/60,2):Ka(t,e)}function Ka(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ht(Math.trunc(i/60),2),l=ht(i%60,2);return n+a+e+l}const Jb=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},eA=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},C6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Jb(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Jb(i,e)).replace("{{time}}",eA(a,e))},D6={p:eA,P:C6},I6=/^D+$/,k6=/^Y+$/,O6=["D","DD","YY","YYYY"];function M6(t){return I6.test(t)}function N6(t){return k6.test(t)}function P6(t,e,n){const i=V6(t,e,n);if(console.warn(i),O6.includes(t))throw new RangeError(i)}function V6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const L6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,j6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,U6=/^'([^]*?)'?$/,q6=/''/g,B6=/[a-zA-Z]/;function z6(t,e,n){var v,E,T,I,P,B,O,F;const i=Wc(),a=(n==null?void 0:n.locale)??i.locale??A_,l=(n==null?void 0:n.firstWeekContainsDate)??((E=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:E.firstWeekContainsDate)??i.firstWeekContainsDate??((I=(T=i.locale)==null?void 0:T.options)==null?void 0:I.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((B=(P=n==null?void 0:n.locale)==null?void 0:P.options)==null?void 0:B.weekStartsOn)??i.weekStartsOn??((F=(O=i.locale)==null?void 0:O.options)==null?void 0:F.weekStartsOn)??0,d=gt(t,n==null?void 0:n.in);if(!qV(d))throw new RangeError("Invalid time value");let p=e.match(j6).map(G=>{const N=G[0];if(N==="p"||N==="P"){const J=D6[N];return J(G,a.formatLong)}return G}).join("").match(L6).map(G=>{if(G==="''")return{isToken:!1,value:"'"};const N=G[0];if(N==="'")return{isToken:!1,value:$6(G)};if(Kb[N])return{isToken:!0,value:G};if(N.match(B6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:G}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(G=>{if(!G.isToken)return G.value;const N=G.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&N6(N)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&M6(N))&&P6(N,e,String(t));const J=Kb[N[0]];return J(d,N,a.localize,g)}).join("")}function $6(t){const e=t.match(U6);return e?e[1].replace(q6,"'"):t}function F6(t,e){const n=gt(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=on(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function H6(t,e){return gt(t,e==null?void 0:e.in).getMonth()}function G6(t,e){return gt(t,e==null?void 0:e.in).getFullYear()}function Y6(t,e){return+gt(t)>+gt(e)}function W6(t,e){return+gt(t)<+gt(e)}function Q6(t,e,n){const[i,a]=Gl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function K6(t,e,n){const[i,a]=Gl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function X6(t,e,n){const i=gt(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=on(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=F6(c);return i.setMonth(e,Math.min(l,d)),i}function Z6(t,e,n){const i=gt(t,n==null?void 0:n.in);return isNaN(+i)?on(t,NaN):(i.setFullYear(e),i)}const eT=5,J6=4;function eL(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,eT*7-1);return e.getMonth(t)===e.getMonth(l)?eT:J6}function tA(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function tL(t,e){const n=tA(t,e),i=eL(t,e);return e.addDays(n,i*7-1)}class ms{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?Mn.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new Mn(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Fx(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):Hx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):PV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):VV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):Yx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):BV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):FV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):tL(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):YV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):zV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Kx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):GV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):z6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Xx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):H6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):G6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Jx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):Y6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):W6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):Wx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):UV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):Q6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):K6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):LV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):jV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):X6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):Z6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):tA(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):kc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Ic(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):HV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Ml(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):Qx(i)},this.options={locale:A_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const Ti=new ms;class nA{constructor(e,n,i=Ti){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class nL{constructor(e,n){this.date=e,this.weeks=n}}class rL{constructor(e,n){this.days=n,this.weekNumber=e}}function iL(t){return ge.createElement("button",{...t})}function sL(t){return ge.createElement("span",{...t})}function aL(t){const{size:e=24,orientation:n="left",className:i}=t;return ge.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&ge.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&ge.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&ge.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&ge.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function oL(t){const{day:e,modifiers:n,...i}=t;return ge.createElement("td",{...i})}function lL(t){const{day:e,modifiers:n,...i}=t,a=ge.useRef(null);return ge.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),ge.createElement("button",{ref:a,...i})}var Ae;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(Ae||(Ae={}));var kt;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(kt||(kt={}));var Ur;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(Ur||(Ur={}));var lr;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(lr||(lr={}));function uL(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[Ae.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return ge.createElement("span",{"data-disabled":l.disabled,className:a[Ae.DropdownRoot]},ge.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>ge.createElement(i.Option,{key:p,value:p,disabled:v},g))),ge.createElement("span",{className:a[Ae.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,ge.createElement(i.Chevron,{orientation:"down",size:18,className:a[Ae.Chevron]})))}function cL(t){return ge.createElement("div",{...t})}function hL(t){return ge.createElement("div",{...t})}function fL(t){const{calendarMonth:e,displayIndex:n,...i}=t;return ge.createElement("div",{...i},t.children)}function dL(t){const{calendarMonth:e,displayIndex:n,...i}=t;return ge.createElement("div",{...i})}function pL(t){return ge.createElement("table",{...t})}function mL(t){return ge.createElement("div",{...t})}const rA=j.createContext(void 0);function Qc(){const t=j.useContext(rA);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function gL(t){const{components:e}=Qc();return ge.createElement(e.Dropdown,{...t})}function yL(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Qc(),v=j.useCallback(T=>{a&&(n==null||n(T))},[a,n]),E=j.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return ge.createElement("nav",{...l},ge.createElement(c.PreviousMonthButton,{type:"button",className:d[Ae.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:E},ge.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[Ae.Chevron],orientation:"left"})),ge.createElement(c.NextMonthButton,{type:"button",className:d[Ae.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},ge.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[Ae.Chevron]})))}function _L(t){const{components:e}=Qc();return ge.createElement(e.Button,{...t})}function vL(t){return ge.createElement("option",{...t})}function EL(t){const{components:e}=Qc();return ge.createElement(e.Button,{...t})}function wL(t){const{rootRef:e,...n}=t;return ge.createElement("div",{...n,ref:e})}function bL(t){return ge.createElement("select",{...t})}function TL(t){const{week:e,...n}=t;return ge.createElement("tr",{...n})}function SL(t){return ge.createElement("th",{...t})}function xL(t){return ge.createElement("thead",{"aria-hidden":!0},ge.createElement("tr",{...t}))}function AL(t){const{week:e,...n}=t;return ge.createElement("th",{...n})}function RL(t){return ge.createElement("th",{...t})}function CL(t){return ge.createElement("tbody",{...t})}function DL(t){const{components:e}=Qc();return ge.createElement(e.Dropdown,{...t})}const IL=Object.freeze(Object.defineProperty({__proto__:null,Button:iL,CaptionLabel:sL,Chevron:aL,Day:oL,DayButton:lL,Dropdown:uL,DropdownNav:cL,Footer:hL,Month:fL,MonthCaption:dL,MonthGrid:pL,Months:mL,MonthsDropdown:gL,Nav:yL,NextMonthButton:_L,Option:vL,PreviousMonthButton:EL,Root:wL,Select:bL,Week:TL,WeekNumber:AL,WeekNumberHeader:RL,Weekday:SL,Weekdays:xL,Weeks:CL,YearsDropdown:DL},Symbol.toStringTag,{value:"Module"}));function rs(t,e,n=!1,i=Ti){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function iA(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function R_(t){return!!(t&&typeof t=="object"&&"from"in t)}function sA(t){return!!(t&&typeof t=="object"&&"after"in t)}function aA(t){return!!(t&&typeof t=="object"&&"before"in t)}function oA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function lA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function is(t,e,n=Ti){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(lA(d,n))return d.includes(t);if(R_(d))return rs(d,t,!1,n);if(oA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(iA(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,E=g<0;return c(d.before,d.after)?E&&v:v||E}return sA(d)?l(t,d.after)>0:aA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function kL(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:E,isSameMonth:T,startOfMonth:I,isBefore:P,endOfMonth:B,isAfter:O}=a,F=n&&I(n),G=i&&B(i),N={[kt.focused]:[],[kt.outside]:[],[kt.disabled]:[],[kt.hidden]:[],[kt.today]:[]},J={};for(const z of t){const{date:re,displayMonth:D}=z,C=!!(D&&!T(re,D)),k=!!(F&&P(re,F)),U=!!(G&&O(re,G)),M=!!(l&&is(re,l,a)),R=!!(c&&is(re,c,a))||k||U||!g&&!p&&C||g&&p===!1&&C,x=E(re,v??a.today());C&&N.outside.push(z),M&&N.disabled.push(z),R&&N.hidden.push(z),x&&N.today.push(z),d&&Object.keys(d).forEach(ve=>{const ne=d==null?void 0:d[ve];ne&&is(re,ne,a)&&(J[ve]?J[ve].push(z):J[ve]=[z])})}return z=>{const re={[kt.focused]:!1,[kt.disabled]:!1,[kt.hidden]:!1,[kt.outside]:!1,[kt.today]:!1},D={};for(const C in N){const k=N[C];re[C]=k.some(U=>U===z)}for(const C in J)D[C]=J[C].some(k=>k===z);return{...re,...D}}}function OL(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[kt[l]]?a.push(e[kt[l]]):e[Ur[l]]&&a.push(e[Ur[l]]),a),[e[Ae.Day]])}function ML(t){return{...IL,...t}}function NL(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function PL(){const t={};for(const e in Ae)t[Ae[e]]=`rdp-${Ae[e]}`;for(const e in kt)t[kt[e]]=`rdp-${kt[e]}`;for(const e in Ur)t[Ur[e]]=`rdp-${Ur[e]}`;for(const e in lr)t[lr[e]]=`rdp-${lr[e]}`;return t}function uA(t,e,n){return(n??new ms(e)).format(t,"LLLL y")}const VL=uA;function LL(t,e,n){return(n??new ms(e)).format(t,"d")}function jL(t,e=Ti){return e.format(t,"LLLL")}function UL(t,e,n){return(n??new ms(e)).format(t,"cccccc")}function qL(t,e=Ti){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function BL(){return""}function cA(t,e=Ti){return e.format(t,"yyyy")}const zL=cA,$L=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:uA,formatDay:LL,formatMonthCaption:VL,formatMonthDropdown:jL,formatWeekNumber:qL,formatWeekNumberHeader:BL,formatWeekdayName:UL,formatYearCaption:zL,formatYearDropdown:cA},Symbol.toStringTag,{value:"Module"}));function FL(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...$L,...t}}function HL(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const I=i.formatMonthDropdown(T,a),P=g(T),B=e&&T<l(e)||n&&T>l(n)||!1;return{value:P,label:I,disabled:B}})}function GL(t,e={},n={}){let i={...e==null?void 0:e[Ae.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function YL(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function WL(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,E=l(t),T=c(e),I=[];let P=E;for(;g(P,T)||v(P,T);)I.push(P),P=d(P,1);return a&&I.reverse(),I.map(B=>{const O=n.formatYearDropdown(B,i);return{value:p(B),label:O,disabled:!1}})}function hA(t,e,n,i){let a=(i??new ms(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const QL=hA;function fA(t,e,n){return(n??new ms(e)).format(t,"LLLL y")}const KL=fA;function XL(t,e,n,i){let a=(i??new ms(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function ZL(t){return"Choose the Month"}function JL(){return""}function ej(t){return"Go to the Next Month"}function tj(t){return"Go to the Previous Month"}function nj(t,e,n){return(n??new ms(e)).format(t,"cccc")}function rj(t,e){return`Week ${t}`}function ij(t){return"Week Number"}function sj(t){return"Choose the Year"}const aj=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:KL,labelDay:QL,labelDayButton:hA,labelGrid:fA,labelGridcell:XL,labelMonthDropdown:ZL,labelNav:JL,labelNext:ej,labelPrevious:tj,labelWeekNumber:rj,labelWeekNumberHeader:ij,labelWeekday:nj,labelYearDropdown:sj},Symbol.toStringTag,{value:"Module"})),Kc=t=>t instanceof HTMLElement?t:null,Sg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],oj=t=>Kc(t.querySelector("[data-animated-month]")),xg=t=>Kc(t.querySelector("[data-animated-caption]")),Ag=t=>Kc(t.querySelector("[data-animated-weeks]")),lj=t=>Kc(t.querySelector("[data-animated-nav]")),uj=t=>Kc(t.querySelector("[data-animated-weekdays]"));function cj(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=j.useRef(null),d=j.useRef(i),p=j.useRef(!1);j.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),E=l.isAfter(i[0].date,g[0].date),T=E?n[lr.caption_after_enter]:n[lr.caption_before_enter],I=E?n[lr.weeks_after_enter]:n[lr.weeks_before_enter],P=c.current,B=t.current.cloneNode(!0);if(B instanceof HTMLElement?(Sg(B).forEach(N=>{if(!(N instanceof HTMLElement))return;const J=oj(N);J&&N.contains(J)&&N.removeChild(J);const z=xg(N);z&&z.classList.remove(T);const re=Ag(N);re&&re.classList.remove(I)}),c.current=B):c.current=null,p.current||v||a)return;const O=P instanceof HTMLElement?Sg(P):[],F=Sg(t.current);if(F!=null&&F.every(G=>G instanceof HTMLElement)&&O&&O.every(G=>G instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const G=lj(t.current);G&&(G.style.zIndex="1"),F.forEach((N,J)=>{const z=O[J];if(!z)return;N.style.position="relative",N.style.overflow="hidden";const re=xg(N);re&&re.classList.add(T);const D=Ag(N);D&&D.classList.add(I);const C=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),G&&(G.style.zIndex=""),re&&re.classList.remove(T),D&&D.classList.remove(I),N.style.position="",N.style.overflow="",N.contains(z)&&N.removeChild(z)};z.style.pointerEvents="none",z.style.position="absolute",z.style.overflow="hidden",z.setAttribute("aria-hidden","true");const k=uj(z);k&&(k.style.opacity="0");const U=xg(z);U&&(U.classList.add(E?n[lr.caption_before_exit]:n[lr.caption_after_exit]),U.addEventListener("animationend",C));const M=Ag(z);M&&M.classList.add(E?n[lr.weeks_before_exit]:n[lr.weeks_after_exit]),N.insertBefore(z,N.firstChild)})}})}function hj(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:E,endOfBroadcastWeek:T,endOfISOWeek:I,endOfMonth:P,endOfWeek:B,isAfter:O,startOfBroadcastWeek:F,startOfISOWeek:G,startOfWeek:N}=i,J=p?F(a,i):c?G(a):N(a),z=p?T(l):c?I(P(l)):B(P(l)),re=v(z,J),D=E(l,a)+1,C=[];for(let M=0;M<=re;M++){const R=g(J,M);if(e&&O(R,e))break;C.push(R)}const U=(p?35:42)*D;if(d&&C.length<U){const M=U-C.length;for(let R=0;R<M;R++){const x=g(C[C.length-1],1);C.push(x)}}return C}function fj(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function dj(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function tT(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:E}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),E(p)}function pj(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:E,startOfISOWeek:T,startOfWeek:I}=i,P=t.reduce((B,O)=>{const F=n.broadcastCalendar?E(O,i):n.ISOWeek?T(O):I(O),G=n.broadcastCalendar?l(O):n.ISOWeek?c(d(O)):p(d(O)),N=e.filter(D=>D>=F&&D<=G),J=n.broadcastCalendar?35:42;if(n.fixedWeeks&&N.length<J){const D=e.filter(C=>{const k=J-N.length;return C>G&&C<=a(G,k)});N.push(...D)}const z=N.reduce((D,C)=>{const k=n.ISOWeek?g(C):v(C),U=D.find(R=>R.weekNumber===k),M=new nA(C,O,i);return U?U.days.push(M):D.push(new rL(k,[M])),D},[]),re=new nL(O,z);return B.push(re),B},[]);return n.reverseMonths?P.reverse():P}function mj(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:E}=e,{fromYear:T,toYear:I,fromMonth:P,toMonth:B}=t;!n&&P&&(n=P),!n&&T&&(n=e.newDate(T,0,1)),!i&&B&&(i=B),!i&&I&&(i=v(I,11,31));const O=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&O&&(n=a(p(t.today??E(),-100))),i?i=d(i):I?i=v(I,11,31):!i&&O&&(i=g(t.today??E())),[n&&l(n),i&&l(i)]}function gj(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function yj(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function _j(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function ep(t,e){const[n,i]=j.useState(t);return[e===void 0?n:e,i]}function vj(t,e){const[n,i]=mj(t,e),{startOfMonth:a,endOfMonth:l}=e,c=tT(t,n,i,e),[d,p]=ep(c,t.month?c:void 0);j.useEffect(()=>{const re=tT(t,n,i,e);p(re)},[t.timeZone]);const g=dj(d,i,t,e),v=hj(g,t.endMonth?l(t.endMonth):void 0,t,e),E=pj(g,v,t,e),T=_j(E),I=fj(E),P=yj(d,n,t,e),B=gj(d,i,t,e),{disableNavigation:O,onMonthChange:F}=t,G=re=>T.some(D=>D.days.some(C=>C.isEqualTo(re))),N=re=>{if(O)return;let D=a(re);n&&D<a(n)&&(D=a(n)),i&&D>a(i)&&(D=a(i)),p(D),F==null||F(D)};return{months:E,weeks:T,days:I,navStart:n,navEnd:i,previousMonth:P,nextMonth:B,goToMonth:N,goToDay:re=>{G(re)||N(re.date)}}}var ci;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(ci||(ci={}));function nT(t){return!t[kt.disabled]&&!t[kt.hidden]&&!t[kt.outside]}function Ej(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);nT(d)&&(d[kt.focused]&&l<ci.FocusedModifier?(a=c,l=ci.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<ci.LastFocused?(a=c,l=ci.LastFocused):n(c.date)&&l<ci.Selected?(a=c,l=ci.Selected):d[kt.today]&&l<ci.Today&&(a=c,l=ci.Today))}return a||(a=t.find(c=>nT(e(c)))),a}function wj(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:E,addYears:T,endOfBroadcastWeek:I,endOfISOWeek:P,endOfWeek:B,max:O,min:F,startOfBroadcastWeek:G,startOfISOWeek:N,startOfWeek:J}=c;let re={day:g,week:E,month:v,year:T,startOfWeek:D=>p?G(D,c):d?N(D):J(D),endOfWeek:D=>p?I(D):d?P(D):B(D)}[t](n,e==="after"?1:-1);return e==="before"&&i?re=O([i,re]):e==="after"&&a&&(re=F([a,re])),re}function dA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=wj(t,e,n.date,i,a,l,c),g=!!(l.disabled&&is(p,l.disabled,c)),v=!!(l.hidden&&is(p,l.hidden,c)),E=p,T=new nA(p,E,c);return!g&&!v?T:dA(t,e,T,i,a,l,c,d+1)}function bj(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=j.useState(),p=Ej(e.days,n,i||(()=>!1),c),[g,v]=j.useState(l?p:void 0);return{isFocusTarget:B=>!!(p!=null&&p.isEqualTo(B)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(B,O)=>{if(!g)return;const F=dA(B,O,g,e.navStart,e.navEnd,t,a);F&&(e.goToDay(F),v(F))}}}function Tj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ep(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=I=>(d==null?void 0:d.some(P=>p(P,I)))??!1,{min:v,max:E}=t;return{selected:d,select:(I,P,B)=>{let O=[...d??[]];if(g(I)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;O=d==null?void 0:d.filter(F=>!p(F,I))}else(d==null?void 0:d.length)===E?O=[I]:O=[...O,I];return a||c(O),a==null||a(O,I,P,B),O},isSelected:g}}function Sj(t,e,n=0,i=0,a=!1,l=Ti){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let E;if(!c&&!d)E={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?E={from:c,to:t}:a?E={from:c,to:void 0}:E=void 0:v(t,c)?E={from:t,to:c}:E={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?E={from:c,to:d}:E=void 0;else if(p(c,t))E={from:c,to:n>0?void 0:t};else if(p(d,t))E={from:t,to:n>0?void 0:t};else if(v(t,c))E={from:t,to:d};else if(g(t,c))E={from:c,to:t};else if(g(t,d))E={from:c,to:t};else throw new Error("Invalid range");if(E!=null&&E.from&&(E!=null&&E.to)){const T=l.differenceInCalendarDays(E.to,E.from);i>0&&T>i?E={from:t,to:void 0}:n>1&&T<n&&(E={from:t,to:void 0})}return E}function xj(t,e,n=Ti){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function rT(t,e,n=Ti){return rs(t,e.from,!1,n)||rs(t,e.to,!1,n)||rs(e,t.from,!1,n)||rs(e,t.to,!1,n)}function Aj(t,e,n=Ti){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?rs(t,d,!1,n):lA(d,n)?d.some(p=>rs(t,p,!1,n)):R_(d)?d.from&&d.to?rT(t,{from:d.from,to:d.to},n):!1:oA(d)?xj(t,d.dayOfWeek,n):iA(d)?n.isAfter(d.before,d.after)?rT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):is(t.from,d,n)||is(t.to,d,n):sA(d)||aA(d)?is(t.from,d,n)||is(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function Rj(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=ep(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,I,P)=>{const{min:B,max:O}=t,F=T?Sj(T,g,B,O,l,e):void 0;return i&&n&&(F!=null&&F.from)&&F.to&&Aj({from:F.from,to:F.to},n,e)&&(F.from=T,F.to=void 0),c||p(F),c==null||c(F,T,I,P),F},isSelected:T=>g&&rs(g,T,!1,e)}}function Cj(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=ep(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(E,T,I)=>{let P=E;return!i&&d&&d&&p(E,d)&&(P=void 0),a||c(P),a==null||a(P,E,T,I),P},isSelected:E=>d?p(d,E):!1}}function Dj(t,e){const n=Cj(t,e),i=Tj(t,e),a=Rj(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function Ij(t){var gs;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new Mn(e.today,e.timeZone)),e.month&&(e.month=new Mn(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new Mn(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new Mn(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new Mn(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new Mn(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(gs=e.selected)==null?void 0:gs.map(je=>new Mn(je,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new Mn(e.selected.from,e.timeZone):void 0,to:e.selected.to?new Mn(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=j.useMemo(()=>{const je={...A_,...e.locale};return{dateLib:new ms({locale:je,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:ML(e.components),formatters:FL(e.formatters),labels:{...aj,...e.labels},locale:je,classNames:{...PL(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:E=1,onDayBlur:T,onDayClick:I,onDayFocus:P,onDayKeyDown:B,onDayMouseEnter:O,onDayMouseLeave:F,onNextClick:G,onPrevClick:N,showWeekNumber:J,styles:z}=e,{formatCaption:re,formatDay:D,formatMonthDropdown:C,formatWeekNumber:k,formatWeekNumberHeader:U,formatWeekdayName:M,formatYearDropdown:R}=i,x=vj(e,l),{days:ve,months:ne,navStart:q,navEnd:se,previousMonth:fe,nextMonth:de,goToMonth:V}=x,te=kL(ve,e,q,se,l),{isSelected:he,select:ue,selected:_e}=Dj(e,l)??{},{blur:Ce,focused:Te,isFocusTarget:yt,moveFocus:Fe,setFocused:Tt}=bj(e,x,te,he??(()=>!1),l),{labelDayButton:Dn,labelGridcell:pe,labelGrid:Se,labelMonthDropdown:be,labelNav:Pe,labelPrevious:it,labelNext:Kn,labelWeekday:Lt,labelWeekNumber:Gr,labelWeekNumberHeader:Xn,labelYearDropdown:fr}=a,Si=j.useMemo(()=>YL(l,e.ISOWeek),[l,e.ISOWeek]),mo=g!==void 0||I!==void 0,Yr=j.useCallback(()=>{fe&&(V(fe),N==null||N(fe))},[fe,V,N]),xi=j.useCallback(()=>{de&&(V(de),G==null||G(de))},[V,de,G]),go=j.useCallback((je,st)=>ke=>{ke.preventDefault(),ke.stopPropagation(),Tt(je),ue==null||ue(je.date,st,ke),I==null||I(je.date,st,ke)},[ue,I,Tt]),xt=j.useCallback((je,st)=>ke=>{Tt(je),P==null||P(je.date,st,ke)},[P,Tt]),nt=j.useCallback((je,st)=>ke=>{Ce(),T==null||T(je.date,st,ke)},[Ce,T]),Ln=j.useCallback((je,st)=>ke=>{const et={ArrowLeft:[ke.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[ke.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[ke.shiftKey?"year":"week","after"],ArrowUp:[ke.shiftKey?"year":"week","before"],PageUp:[ke.shiftKey?"year":"month","before"],PageDown:[ke.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(et[ke.key]){ke.preventDefault(),ke.stopPropagation();const[un,Ue]=et[ke.key];Fe(un,Ue)}B==null||B(je.date,st,ke)},[Fe,B,e.dir]),ln=j.useCallback((je,st)=>ke=>{O==null||O(je.date,st,ke)},[O]),yo=j.useCallback((je,st)=>ke=>{F==null||F(je.date,st,ke)},[F]),Yl=j.useCallback(je=>st=>{const ke=Number(st.target.value),et=l.setMonth(l.startOfMonth(je),ke);V(et)},[l,V]),Ai=j.useCallback(je=>st=>{const ke=Number(st.target.value),et=l.setYear(l.startOfMonth(je),ke);V(et)},[l,V]),{className:Ri,style:Ci}=j.useMemo(()=>({className:[d[Ae.Root],e.className].filter(Boolean).join(" "),style:{...z==null?void 0:z[Ae.Root],...e.style}}),[d,e.className,e.style,z]),Zn=NL(e),Di=j.useRef(null);cj(Di,!!e.animate,{classNames:d,months:ne,focused:Te,dateLib:l});const Ii={dayPickerProps:e,selected:_e,select:ue,isSelected:he,months:ne,nextMonth:de,previousMonth:fe,goToMonth:V,getModifiers:te,components:n,classNames:d,styles:z,labels:a,formatters:i};return ge.createElement(rA.Provider,{value:Ii},ge.createElement(n.Root,{rootRef:e.animate?Di:void 0,className:Ri,style:Ci,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Zn},ge.createElement(n.Months,{className:d[Ae.Months],style:z==null?void 0:z[Ae.Months]},!e.hideNavigation&&!v&&ge.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Ae.Nav],style:z==null?void 0:z[Ae.Nav],"aria-label":Pe(),onPreviousClick:Yr,onNextClick:xi,previousMonth:fe,nextMonth:de}),ne.map((je,st)=>ge.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[Ae.Month],style:z==null?void 0:z[Ae.Month],key:st,displayIndex:st,calendarMonth:je},v==="around"&&!e.hideNavigation&&st===0&&ge.createElement(n.PreviousMonthButton,{type:"button",className:d[Ae.PreviousMonthButton],tabIndex:fe?void 0:-1,"aria-disabled":fe?void 0:!0,"aria-label":it(fe),onClick:Yr,"data-animated-button":e.animate?"true":void 0},ge.createElement(n.Chevron,{disabled:fe?void 0:!0,className:d[Ae.Chevron],orientation:e.dir==="rtl"?"right":"left"})),ge.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[Ae.MonthCaption],style:z==null?void 0:z[Ae.MonthCaption],calendarMonth:je,displayIndex:st},p!=null&&p.startsWith("dropdown")?ge.createElement(n.DropdownNav,{className:d[Ae.Dropdowns],style:z==null?void 0:z[Ae.Dropdowns]},p==="dropdown"||p==="dropdown-months"?ge.createElement(n.MonthsDropdown,{className:d[Ae.MonthsDropdown],"aria-label":be(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Yl(je.date),options:HL(je.date,q,se,i,l),style:z==null?void 0:z[Ae.Dropdown],value:l.getMonth(je.date)}):ge.createElement("span",null,C(je.date,l)),p==="dropdown"||p==="dropdown-years"?ge.createElement(n.YearsDropdown,{className:d[Ae.YearsDropdown],"aria-label":fr(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:Ai(je.date),options:WL(q,se,i,l,!!e.reverseYears),style:z==null?void 0:z[Ae.Dropdown],value:l.getYear(je.date)}):ge.createElement("span",null,R(je.date,l)),ge.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},re(je.date,l.options,l))):ge.createElement(n.CaptionLabel,{className:d[Ae.CaptionLabel],role:"status","aria-live":"polite"},re(je.date,l.options,l))),v==="around"&&!e.hideNavigation&&st===E-1&&ge.createElement(n.NextMonthButton,{type:"button",className:d[Ae.NextMonthButton],tabIndex:de?void 0:-1,"aria-disabled":de?void 0:!0,"aria-label":Kn(de),onClick:xi,"data-animated-button":e.animate?"true":void 0},ge.createElement(n.Chevron,{disabled:de?void 0:!0,className:d[Ae.Chevron],orientation:e.dir==="rtl"?"left":"right"})),st===E-1&&v==="after"&&!e.hideNavigation&&ge.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Ae.Nav],style:z==null?void 0:z[Ae.Nav],"aria-label":Pe(),onPreviousClick:Yr,onNextClick:xi,previousMonth:fe,nextMonth:de}),ge.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Se(je.date,l.options,l)||void 0,className:d[Ae.MonthGrid],style:z==null?void 0:z[Ae.MonthGrid]},!e.hideWeekdays&&ge.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[Ae.Weekdays],style:z==null?void 0:z[Ae.Weekdays]},J&&ge.createElement(n.WeekNumberHeader,{"aria-label":Xn(l.options),className:d[Ae.WeekNumberHeader],style:z==null?void 0:z[Ae.WeekNumberHeader],scope:"col"},U()),Si.map(ke=>ge.createElement(n.Weekday,{"aria-label":Lt(ke,l.options,l),className:d[Ae.Weekday],key:String(ke),style:z==null?void 0:z[Ae.Weekday],scope:"col"},M(ke,l.options,l)))),ge.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[Ae.Weeks],style:z==null?void 0:z[Ae.Weeks]},je.weeks.map(ke=>ge.createElement(n.Week,{className:d[Ae.Week],key:ke.weekNumber,style:z==null?void 0:z[Ae.Week],week:ke},J&&ge.createElement(n.WeekNumber,{week:ke,style:z==null?void 0:z[Ae.WeekNumber],"aria-label":Gr(ke.weekNumber,{locale:c}),className:d[Ae.WeekNumber],scope:"row",role:"rowheader"},k(ke.weekNumber,l)),ke.days.map(et=>{const{date:un}=et,Ue=te(et);if(Ue[kt.focused]=!Ue.hidden&&!!(Te!=null&&Te.isEqualTo(et)),Ue[Ur.selected]=(he==null?void 0:he(un))||Ue.selected,R_(_e)){const{from:dr,to:_s}=_e;Ue[Ur.range_start]=!!(dr&&_s&&l.isSameDay(un,dr)),Ue[Ur.range_end]=!!(dr&&_s&&l.isSameDay(un,_s)),Ue[Ur.range_middle]=rs(_e,un,!0,l)}const va=GL(Ue,z,e.modifiersStyles),Wr=OL(Ue,d,e.modifiersClassNames),ys=!mo&&!Ue.hidden?pe(un,Ue,l.options,l):void 0;return ge.createElement(n.Day,{key:`${l.format(un,"yyyy-MM-dd")}_${l.format(et.displayMonth,"yyyy-MM")}`,day:et,modifiers:Ue,className:Wr.join(" "),style:va,role:"gridcell","aria-selected":Ue.selected||void 0,"aria-label":ys,"data-day":l.format(un,"yyyy-MM-dd"),"data-month":et.outside?l.format(un,"yyyy-MM"):void 0,"data-selected":Ue.selected||void 0,"data-disabled":Ue.disabled||void 0,"data-hidden":Ue.hidden||void 0,"data-outside":et.outside||void 0,"data-focused":Ue.focused||void 0,"data-today":Ue.today||void 0},!Ue.hidden&&mo?ge.createElement(n.DayButton,{className:d[Ae.DayButton],style:z==null?void 0:z[Ae.DayButton],type:"button",day:et,modifiers:Ue,disabled:Ue.disabled||void 0,tabIndex:yt(et)?0:-1,"aria-label":Dn(un,Ue,l.options,l),onClick:go(et,Ue),onBlur:nt(et,Ue),onFocus:xt(et,Ue),onKeyDown:Ln(et,Ue),onMouseEnter:ln(et,Ue),onMouseLeave:yo(et,Ue)},D(un,l.options,l)):!Ue.hidden&&D(et.date,l.options,l))})))))))),e.footer&&ge.createElement(n.Footer,{className:d[Ae.Footer],style:z==null?void 0:z[Ae.Footer],role:"status","aria-live":"polite"},e.footer)))}const kj="/assets/calendar-arrow-BfXL-r2k.png";function Oj({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var B;const[a,l]=j.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=j.useState(((B=t==null?void 0:t.start)==null?void 0:B.getFullYear())??new Date().getFullYear()),[p,g]=j.useState(!1),v=j.useMemo(()=>{const O=F=>`${F.getFullYear()}.${String(F.getMonth()+1).padStart(2,"0")}.${String(F.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${O(a.start)} ~ ${O(a.end)}`:a.start?`${O(a.start)} ~`:""},[a]),E=new Date().getMonth(),T=j.useRef(null);j.useEffect(()=>{if(p&&T.current){const O=T.current.querySelectorAll(".month-box")[E];O&&O.scrollIntoView({block:"start"})}},[p]);const I=j.useRef(null);j.useEffect(()=>{const O=F=>{I.current&&!I.current.contains(F.target)&&g(!1)};return p&&document.addEventListener("click",O),()=>{document.removeEventListener("click",O)}},[p]),j.useEffect(()=>{const O=N=>N instanceof Date?new Date(N.getFullYear(),N.getMonth(),N.getDate()).getTime():null,F=(t==null?void 0:t.start)??null,G=(t==null?void 0:t.end)??null;(O(a.start)!==O(F)||O(a.end)!==O(G))&&(l({start:F,end:G}),d((F==null?void 0:F.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const P=O=>{if(!a.start||a.start&&a.end){l({start:O,end:null});return}if(a.start&&!a.end)if(O<a.start)l({start:O,end:null});else{const F={start:a.start,end:O};l(F),e==null||e(F),i&&g(!1)}};return _.jsxs(Mj,{ref:I,children:[_.jsx(Fj,{}),_.jsx(Nj,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(O=>!O)}),p&&_.jsxs(Vj,{children:[_.jsxs(Lj,{children:[_.jsx(jj,{dir:"prev",onClick:()=>d(O=>O-1)}),_.jsx("span",{children:c}),_.jsx(Uj,{dir:"next",onClick:()=>d(O=>O+1)})]}),_.jsx(qj,{children:["일","월","화","수","목","금","토"].map(O=>_.jsx("span",{children:O},O))}),_.jsx(Pj,{children:_.jsx(Bj,{ref:T,children:Array.from({length:12}).map((O,F)=>{const G=new Date(c,F,1),N=z=>new Date(z.getFullYear(),z.getMonth(),z.getDate()).getTime(),J=z=>z.getFullYear()===G.getFullYear()&&z.getMonth()===G.getMonth();return _.jsxs(zj,{className:"month-box",children:[_.jsx($j,{children:String(F+1).padStart(2,"0")}),_.jsx(Ij,{mode:"single",month:G,selected:void 0,onDayClick:P,showOutsideDays:!1,modifiers:{start:z=>!!a.start&&J(z)&&N(z)===N(a.start),end:z=>!!a.end&&J(z)&&N(z)===N(a.end),middle:z=>{if(!a.start||!a.end||!J(z))return!1;const re=N(z),D=N(a.start),C=N(a.end);return re>D&&re<C}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},F)})})})]})]})}const Mj=H.div`
  position: relative;
  width: 215px;
  margin-right: 8px;
  font-family: 'Pretendard';
`,Nj=H.input`
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
`,Pj=H.div`
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
`,Vj=H.div`
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
`,Lj=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.gray02}};
`,pA=H.button`
  width: 48px;
  height: 100%;
  background-image: url(${kj});
  background-repeat: no-repeat;
`,jj=H(pA)``,Uj=H(pA)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`,qj=H.div`
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
`,Bj=H.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
`,zj=H.div`
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
`,$j=H.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({theme:t})=>{var e;return(e=t==null?void 0:t.colors)==null?void 0:e.black}};
`,Fj=c1`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`,El="진행 상태 선택",Ju="요청자 선택",ec="디자이너 선택",Rg={start:null,end:null},Hj=t=>t===3?"manager":t===2?"designer":"requester",Gj={requester:[El,"대기","진행중","검수중","완료","취소"],manager:[El,"대기","진행중","검수중","검수요청","완료","취소"],designer:[El,"대기","진행중","검수요청","완료","취소"]},Yj=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function Wj({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=j.useState(Rg),[v,E]=j.useState(El),[T,I]=j.useState(Ju),[P,B]=j.useState(ec),O=()=>{E(El),g(Rg),I(Ju),B(ec),t(El),e(Rg),a==null||a(Ju),c==null||c(ec)},F=Hj(d),G=Gj[F];return _.jsxs(Qj,{children:[_.jsx(Oj,{value:p,onApply:N=>{g(N),e(N)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(Cg,{"aria-label":"요청자 선택",value:T,onChange:N=>{I(N.target.value),a==null||a(N.target.value)},children:[_.jsx("option",{value:Ju,children:Ju}),i.map(N=>_.jsx("option",{value:N,children:N},N))]}),_.jsxs(Cg,{"aria-label":"디자이너 선택",value:P,onChange:N=>{const J=N.target.value;B(J),c==null||c(J)},children:[_.jsx("option",{value:ec,children:ec}),l.map(N=>_.jsx("option",{value:N,children:N},N))]})]}),_.jsx(Cg,{value:v,onChange:N=>{const J=N.target.value,z=Yj(F,J);E(J),t(z)},children:G.map(N=>_.jsx("option",{value:N,children:N},N))}),_.jsx(Kj,{type:"button",onClick:O,children:"필터 초기화"})]})}const Qj=H.div`
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
  background-image: url(${Bx});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.black};
  }
`,Kj=H.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,Xj="./assets/search-icon-g0O6fOpZ.svg";function Zj({keyword:t,onKeywordChange:e,onSearch:n}){const i=a=>{e(a),n(a.trim())};return _.jsx(Jj,{children:_.jsx(e3,{placeholder:"문서번호와 작업항목을 검색해 주세요.",value:t,onChange:a=>i(a.target.value),onKeyDown:a=>{a.key==="Escape"&&i("")}})})}const Jj=H.div`
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
    background: url(${Xj}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`,e3=H.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;function C_({onApplyStatus:t,onApplyRange:e,onSearch:n,keyword:i,onKeywordChange:a,isManager:l=!1,requesterOptions:c=[],onApplyRequester:d,designerOptions:p=[],onApplyDesigner:g,roleNumber:v}){return _.jsxs(t3,{children:[_.jsx(Wj,{onApplyStatus:t,onApplyRange:e,isManager:l,requesterOptions:c,onApplyRequester:d,designerOptions:p,onApplyDesigner:g,roleNumber:v}),_.jsx(Zj,{keyword:i,onKeywordChange:a,onSearch:n})]})}const t3=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  padding: 24px 0 30px;
`,n3=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],r3=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return n3[i]}return e}).join("");function D_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=r3(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function I_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const i3="진행 상태 선택";function s3({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=j.useState(""),[l,c]=j.useState([]),[d,p]=j.useState("진행 상태 선택"),[g,v]=j.useState({start:null,end:null}),[E,T]=j.useState(""),[I,P]=j.useState("");j.useEffect(()=>{const M=qc(da,R=>{R&&R.displayName&&a(R.displayName)});return()=>M()},[]),j.useEffect(()=>{if(!i)return;const M=jr(cr(vt,"design_request"),Wn("requester","==",i),E_("design_request_id","desc")),R=Jd(M,x=>{const ve=x.docs.map(ne=>({id:ne.id,...ne.data()}));c(ve)});return()=>R()},[i]);const B=M=>v(M),O=M=>p(M),F=M=>P(M),G=M=>M==="검수요청"?"진행중":M,N=M=>new Date(M.getFullYear(),M.getMonth(),M.getDate()),J=M=>{if(!M)return null;if(typeof M=="object"&&typeof M.toDate=="function")return N(M.toDate());if(M instanceof Date)return N(M);if(typeof M=="number")return N(new Date(M));if(typeof M=="string"){const x=M.replace(/\./g,"-").replace(/\//g,"-").split("-");if(x.length===3){const[ne,q,se]=x.map(Number),fe=ne>31?ne:new Date().getFullYear();return new Date(fe,q-1,se)}if(x.length===2){const[ne,q]=x.map(Number),se=new Date().getFullYear();return new Date(se,ne-1,q)}const ve=new Date(M);return isNaN(+ve)?null:N(ve)}return null},z=j.useMemo(()=>l.map(M=>{const R=G(M.status);return D_({...M,displayStatus:R})}),[l]),re=j.useMemo(()=>{const M=g.start?N(g.start):null,R=g.end?N(g.end):null,x=I.trim();return z.filter(ve=>{if(d!==i3&&ve.displayStatus!==d)return!1;if(M&&R){const ne=J(ve.request_date)||J(ve.requested_at)||J(ve.requestDate);if(!ne||ne<M||ne>R)return!1}return!!I_(ve,x)})},[z,d,g,I]),D=async M=>{await di($n(vt,"design_request",M),{status:"완료",requester_review_status:"검수완료"}),c(R=>R.map(x=>x.id===M?{...x,status:"완료",requester_review_status:"검수완료"}:x)),alert("완료 처리되었습니다.")},C=async M=>{const R=$n(vt,"design_request",M);await di(R,{requester_edit_state:!0});const x=await Zd(R);if(x.exists()){const ve={id:x.id,...x.data()};e(ve),t(!0)}},k=M=>{n(M),t(!0)},U=async M=>{await di($n(vt,"design_request",M),{status:"취소"}),c(R=>R.map(x=>x.id===M?{...x,status:"취소"}:x))};return _.jsxs(_.Fragment,{children:[_.jsx(x_,{}),_.jsxs(a3,{children:[_.jsx(C_,{roleNumber:1,onApplyStatus:O,onApplyRange:B,onSearch:F,keyword:E,onKeywordChange:T}),_.jsx(TV,{data:re,onReviewComplete:D,onCancel:U,onEditClick:C,onDetailClick:k})]})]})}const a3=H.div`
  padding: 0 48px;
`;function o3({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=E=>{if(!E)return"-";if(E.toDate){const T=E.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return E},d=E=>E==="검수중"?"검수요청":E??"대기",p=E=>E,g=d(n.status),v=E=>{E.stopPropagation(),l(e)};return _.jsxs(l3,{isCanceled:e.status==="취소",children:[_.jsx(Pr,{children:t}),_.jsx(Pr,{children:_.jsx(p3,{onClick:v,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Pr,{children:e.company}),_.jsx(Pr,{children:c(e.request_date)}),_.jsx(u3,{children:c(e.completion_dt)}),_.jsx(c3,{children:c(e.open_dt)}),_.jsx(Pr,{children:e.merchandiser}),_.jsx(Pr,{children:e.requester}),_.jsx(Pr,{children:e.task_form}),_.jsx(h3,{children:_.jsxs(m3,{children:[_.jsx(g3,{children:e.task_type}),_.jsx(y3,{children:e.task_type_detail})]})}),_.jsx(f3,{children:_.jsxs(_3,{children:[e.emergency?_.jsx(mA,{children:"긴급"}):"",_.jsx(v3,{onClick:v,children:e.requirement})]})}),_.jsx(Pr,{children:_.jsx(E3,{href:e.url,target:"_blank"})}),_.jsx(d3,{children:_.jsx(w3,{onClick:v,children:e.note||""})}),_.jsx(iT,{children:_.jsx(sT,{type:"date",value:n.start_dt??"",onChange:E=>i(e.id,"start_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(iT,{children:_.jsx(sT,{type:"date",value:n.end_dt??"",onChange:E=>i(e.id,"end_dt",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(Pr,{children:_.jsx(b3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:E=>i(e.id,"result_url",E.target.value),disabled:e.status==="취소"||e.status==="완료"})}),_.jsx(Pr,{children:_.jsxs("select",{value:g,onChange:E=>i(e.id,"status",p(E.target.value)),disabled:e.status==="취소"||e.status==="완료",children:[_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]})}),_.jsx(Pr,{children:_.jsx(gA,{onClick:()=>a(e.id),disabled:e.status==="취소"||e.status==="완료",children:"저장"})})]})}const l3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${mA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${gA} {
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
`,u3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,c3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,h3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,f3=H.td`
  line-height: 15px;
  text-align: left;
`,d3=H.td`
  line-height: 15px;
  padding: 0 12px;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
  text-align: left;
  background-color: #fffff1;

`,iT=H.td`
  padding: 0 6px;
`,p3=H.span`
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
`,m3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,g3=H.span`
  
`,y3=H.span`
  
`,_3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,mA=H.span`
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
`,E3=H.a`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${S_}) no-repeat center / contain;
`,w3=H.span`
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
`,b3=H.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`,gA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`;function T3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(S3,{children:_.jsxs(x3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"140px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(mn,{children:"번호"}),_.jsx(mn,{children:"문서번호"}),_.jsx(mn,{children:"회사"}),_.jsx(mn,{children:"요청일"}),_.jsxs(mn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(mn,{children:"오픈일"}),_.jsx(mn,{children:"담당 MD"}),_.jsx(mn,{children:"요청자"}),_.jsx(mn,{children:"업무부서"}),_.jsx(mn,{children:"업무유형"}),_.jsx(mn,{children:"작업항목"}),_.jsxs(mn,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(mn,{children:"메모"}),_.jsx(mn,{children:"디자인 시작일"}),_.jsx(mn,{children:"디자인 종료일"}),_.jsx(mn,{children:"산출물 링크"}),_.jsx(mn,{children:"진행상태"}),_.jsx(mn,{children:"저장"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(o3,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const S3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,x3=H.table`
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
`,A3="진행 상태 선택";function R3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=j.useState([]),[a,l]=j.useState(""),[c,d]=j.useState({}),[p,g]=j.useState("진행 상태 선택"),[v,E]=j.useState({start:null,end:null}),[T,I]=j.useState(""),[P,B]=j.useState("");j.useEffect(()=>{const ne=qc(da,q=>{q!=null&&q.displayName&&l(q.displayName)});return()=>ne()},[]),j.useEffect(()=>{if(!a)return;const ne=jr(cr(vt,"design_request"),Wn("assigned_designer","==",a),E_("design_request_id","desc")),q=Jd(ne,se=>{const fe=se.docs.map(de=>({id:de.id,...de.data()}));i(fe)});return()=>q()},[a]);const O=ne=>E(ne),F=ne=>g(ne),G=ne=>new Date(ne.getFullYear(),ne.getMonth(),ne.getDate()),N=ne=>{if(!ne)return null;if(typeof ne=="object"&&typeof ne.toDate=="function")return G(ne.toDate());if(ne instanceof Date)return G(ne);if(typeof ne=="number")return G(new Date(ne));if(typeof ne=="string"){const se=ne.replace(/\./g,"-").replace(/\//g,"-").split("-");if(se.length===3){const[de,V,te]=se.map(Number),he=de>31?de:new Date().getFullYear();return new Date(he,V-1,te)}if(se.length===2){const[de,V]=se.map(Number),te=new Date().getFullYear();return new Date(te,de-1,V)}const fe=new Date(ne);return isNaN(+fe)?null:G(fe)}return null},J=ne=>{const q=ne.getFullYear(),se=String(ne.getMonth()+1).padStart(2,"0"),fe=String(ne.getDate()).padStart(2,"0");return`${q}-${se}-${fe}`},z=ne=>{if(!ne)return"";if(typeof ne=="object"&&typeof ne.toDate=="function")return J(ne.toDate());if(ne instanceof Date)return J(ne);const q=new Date(ne);return isNaN(+q)?"":J(q)},re=j.useMemo(()=>n.map(ne=>({...ne,designer_start_date:z(ne.designer_start_date),designer_end_date:z(ne.designer_end_date),result_url:ne.result_url??"",status:ne.status??"대기"})),[n]),D=ne=>ne==="검수중"?"검수요청":ne??"대기",C=j.useMemo(()=>re.map(ne=>{const q=D(ne.status);return D_({...ne,displayStatus:q})}),[re]),k=j.useMemo(()=>{const ne=v.start?G(v.start):null,q=v.end?G(v.end):null;return C.filter(se=>{let fe=!0;if(p&&p!==A3&&D(se.status)!==p&&(fe=!1),fe&&ne&&q){const de=N(se.request_date)||N(se.requested_at)||N(se.requestDate);(!de||de<ne||de>q)&&(fe=!1)}return fe&&P&&!I_(se,P)&&(fe=!1),fe})},[C,p,v,P]),U=ne=>B(ne);j.useEffect(()=>{n.length&&d(ne=>{const q={...ne};return n.forEach(se=>{q[se.id]===void 0&&(q[se.id]={start_dt:z(se.designer_start_date),end_dt:z(se.designer_end_date),result_url:se.result_url||"",status:se.status||"대기"})}),q})},[n]);const M=(ne,q,se)=>{d(fe=>({...fe,[ne]:{...fe[ne],[q]:se}}))},R=ne=>{if(!ne)return null;const q=new Date(ne);return isNaN(+q)?null:Et.fromDate(q)},x=async ne=>{const q=c[ne];if(!q){alert("변경된 내용이 없습니다.");return}await di($n(vt,"design_request",ne),{designer_start_date:R(q.start_dt),designer_end_date:R(q.end_dt),result_url:q.result_url??"",status:q.status??"대기"}),alert("저장되었습니다.")},ve=ne=>{e(ne),t(!0)};return _.jsxs(C3,{children:[_.jsx(x_,{}),_.jsxs(D3,{children:[_.jsx(I3,{children:"디자이너 화면"}),_.jsx(C_,{roleNumber:2,onApplyStatus:F,onApplyRange:O,onSearch:U,keyword:T,onKeywordChange:I}),_.jsx(T3,{requests:k,formData:c,onChange:M,onSave:x,onDetailClick:ve})]})]})}const C3=H.div``,D3=H.div`
  padding: 0 48px;
`,I3=H.h2`
  margin-top: 20px;
`;function k3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d,workHourValue:p,onChangeWorkHour:g,onSaveWorkHour:v,onStartEditWorkHour:E,onCancelEditWorkHour:T}){const P=(N=>N==="검수요청"?"검수중":N==="검수중"?"검수요청":N)(e.status),B=N=>{if(!N)return"-";if(N.toDate){const J=N.toDate();return`${J.getMonth()+1}/${J.getDate()}`}return N},O=N=>{N.stopPropagation(),d(e)},F=!!e.work_hour_edit_state,G=j.useCallback(N=>{const J=N.relatedTarget;(!J||!N.currentTarget.contains(J))&&T()},[T]);return _.jsxs(O3,{isCanceled:e.status==="취소",children:[_.jsx(zn,{children:t}),_.jsx(zn,{children:_.jsx(j3,{onClick:O,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(zn,{children:e.company}),_.jsx(zn,{children:B(e.request_date)}),_.jsx(M3,{children:B(e.completion_dt)}),_.jsx(N3,{children:B(e.open_dt)}),_.jsx(zn,{children:e.merchandiser}),_.jsx(zn,{children:e.requester}),_.jsx(zn,{children:e.task_form}),_.jsx(P3,{children:_.jsxs(U3,{children:[_.jsx(q3,{children:e.task_type}),_.jsx(B3,{children:e.task_type_detail})]})}),_.jsx(V3,{children:_.jsxs(z3,{children:[e.emergency?_.jsx(yA,{children:"긴급"}):"",_.jsx($3,{onClick:O,children:e.requirement})]})}),_.jsx(zn,{children:_.jsx(aT,{href:e.url,target:"_blank"})}),_.jsx(L3,{children:_.jsx(F3,{onClick:O,children:e.note||""})}),_.jsx(zn,{children:_.jsx(H3,{status:P,children:P})}),_.jsx(zn,{children:e.result_url?_.jsx(aT,{href:e.result_url,target:"_blank"}):""}),_.jsx(zn,{children:B(e.designer_start_date)}),_.jsx(zn,{children:B(e.designer_end_date)}),_.jsxs(zn,{children:[_.jsxs(G3,{value:i,onChange:N=>a(N.target.value),disabled:e.status==="취소"||e.status==="완료",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(N=>_.jsx("option",{value:N.name,children:N.name},N.id))]}),_.jsx(_A,{onClick:l,disabled:e.status==="취소"||e.status==="완료",children:"배정"})]}),_.jsx(zn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(vA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(Y3,{children:"검수완료"}):""}),_.jsx(zn,{children:F?_.jsxs(X3,{tabIndex:-1,onBlur:G,children:[_.jsx(W3,{type:"text",placeholder:"공수 입력",value:p,onChange:N=>g(N.target.value),onClick:N=>N.stopPropagation(),disabled:e.status==="취소",autoFocus:!0}),_.jsx(Q3,{type:"button",onClick:N=>{N.stopPropagation(),v()},disabled:e.status==="취소",children:"수정"})]}):e.out_work_hour!=null?_.jsx(K3,{tabIndex:0,onClick:N=>{N.stopPropagation(),E()},onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),E())},children:e.out_work_hour}):null})]})}const O3=H.tr`
  ${({isCanceled:t})=>t&&`
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  
  ${({isCanceled:t,theme:e})=>t&&`
      ${yA} {
        background-color: ${e.colors.gray07};
        color: ${e.colors.gray06};
      }
      ${vA}, ${_A} {
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
`,zn=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(14) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,M3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,N3=H.td`
  color: ${({theme:t})=>t.colors.blue02};
`,P3=H.td`
  padding: 15px 12px;
  line-height: 15px;
`,V3=H.td`
  line-height: 15px;
  text-align: left;
`,L3=H.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`,j3=H.span`
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
`,U3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`,q3=H.span`
  white-space: nowrap;
`,B3=H.span``,z3=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  padding: 0 12px;
`,yA=H.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.red};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,$3=H.span`
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
`,H3=H.span`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue02;case"검수요청":return e.colors.red;case"검수중":return e.colors.red;case"완료":return e.colors.gray06;default:return e.colors.gray06}}};
  background-color: ${({status:t,theme:e})=>{switch(t){case"대기":return e.colors.beige02;case"진행중":return e.colors.lightpupple;case"검수요청":return e.colors.pink03;case"검수중":return e.colors.pink03;case"완료":return e.colors.white02;default:return e.colors.gray07}}};;
`,_A=H.button`
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
`,vA=H.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,Y3=H.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`,W3=H.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`,Q3=H.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,K3=H.span`
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
`,X3=H.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;function Z3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c,workHours:d,onChangeWorkHour:p,onSaveWorkHour:g,onStartEditWorkHour:v,onCancelEditWorkHour:E}){return _.jsx(J3,{children:_.jsxs(eU,{children:[_.jsx(tU,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"140px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"110px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(Gt,{children:"번호"}),_.jsx(Gt,{children:"문서번호"}),_.jsx(Gt,{children:"회사"}),_.jsx(Gt,{children:"요청일"}),_.jsxs(Gt,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(Gt,{children:"오픈일"}),_.jsx(Gt,{children:"담당 MD"}),_.jsx(Gt,{children:"요청자"}),_.jsx(Gt,{children:"업무부서"}),_.jsx(Gt,{children:"업무형태"}),_.jsx(Gt,{children:"작업항목"}),_.jsxs(Gt,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(Gt,{children:"메모"}),_.jsx(Gt,{children:"진행상태"}),_.jsxs(Gt,{children:["산출물",_.jsx("br",{}),"URL"]}),_.jsxs(Gt,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(Gt,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(Gt,{children:"디자이너 배정"}),_.jsx(Gt,{children:"검수"}),_.jsx(Gt,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((T,I)=>_.jsx(k3,{index:I+1,item:T,designerList:e,selectedDesigner:n[T.id]||"",onDesignerSelect:P=>i(T.id,P),onAssignDesigner:()=>a(T.id),onSendToRequester:()=>l(T.id),onDetailClick:c,workHourValue:d[T.id]??"",onChangeWorkHour:P=>p(T.id,P),onSaveWorkHour:()=>g(T.id),onStartEditWorkHour:()=>v(T.id),onCancelEditWorkHour:()=>E(T.id)},T.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:20,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const J3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,eU=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,tU=H.caption`
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
`;function nU({onClick:t,loading:e,label:n="Export CSV"}){return _.jsx(rU,{type:"button",onClick:t,disabled:!!e,children:e?"추출 중…":n})}const rU=H.button`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({theme:t})=>t.colors.black};
  background: ${({theme:t})=>t.colors.white01};
  font-size: 14px;
  &:disabled { opacity: 0.5; pointer-events: none; }
`,oT=t=>{if(t==null)return"";const e=String(t).replace(/"/g,'""');return/[",\n]/.test(e)?`"${e}"`:e},iU=(t,e)=>e.split(".").reduce((n,i)=>n?n[i]:void 0,t),Rf=t=>t<10?`0${t}`:`${t}`,sU=t=>{if(t==null)return"";if(typeof t=="object"&&typeof t.toDate=="function"){const e=t.toDate();return`${e.getFullYear()}-${Rf(e.getMonth()+1)}-${Rf(e.getDate())}`}return t instanceof Date?`${t.getFullYear()}-${Rf(t.getMonth()+1)}-${Rf(t.getDate())}`:String(t)};function aU(t){const{rows:e,fields:n,filename:i="export.csv",headers:a,serialize:l=sU}=t,c=n.map(E=>oT((a==null?void 0:a[E])??E)).join(","),d=e.map(E=>{const T={id:E.id,...E};return n.map(P=>oT(l(iU(T,P)))).join(",")}),p="\uFEFF"+[c,...d].join(`\r
`),g=new Blob([p],{type:"text/csv;charset=utf-8"}),v=document.createElement("a");v.href=URL.createObjectURL(g),v.download=i,v.click(),URL.revokeObjectURL(v.href)}const lT="진행 상태 선택",uT="요청자 선택",cT="디자이너 선택";function oU({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=j.useState([]),[a,l]=j.useState([]),[c,d]=j.useState({}),[p,g]=j.useState({}),[v,E]=j.useState(lT),[T,I]=j.useState({start:null,end:null}),[P,B]=j.useState(""),[O,F]=j.useState(""),[G,N]=j.useState([]),[J,z]=j.useState(uT),[re,D]=j.useState([]),[C,k]=j.useState(cT),[U,M]=j.useState(!1);j.useEffect(()=>{const pe=jr(cr(vt,"design_request"),E_("design_request_id","desc")),Se=Jd(pe,be=>{const Pe=be.docs.map(it=>({id:it.id,...it.data()}));i(Pe)});return()=>Se()},[]),j.useEffect(()=>{n.length&&d(pe=>{const Se={...pe};return n.forEach(be=>{Se[be.id]===void 0&&(Se[be.id]=be.assigned_designer??"")}),Se})},[n]),j.useEffect(()=>{n.length&&g(pe=>{const Se={...pe};return n.forEach(be=>{Se[be.id]===void 0&&(Se[be.id]=be.out_work_hour!=null?String(be.out_work_hour):"")}),Se})},[n]),j.useEffect(()=>{(async()=>{const Se=jr(cr(vt,"users"),Wn("role","==",2)),Pe=(await vl(Se)).docs.map(it=>({id:it.id,...it.data()}));l(Pe),D(Pe.map(it=>it.name).filter(Boolean))})()},[]);const R=(pe,Se)=>{d(be=>({...be,[pe]:Se}))},x=async pe=>{const Se=c[pe];if(!Se){alert("디자이너를 선택하세요.");return}const be=$n(vt,"design_request",pe);await di(be,{assigned_designer:Se}),alert("디자이너가 배정되었습니다!"),i(Pe=>Pe.map(it=>it.id===pe?{...it,assigned_designer:Se}:it))},ve=async pe=>{await di($n(vt,"design_request",pe),{manager_review_status:"검수완료",status:"검수중"}),i(Se=>Se.map(be=>be.id===pe?{...be,manager_review_status:"검수완료",status:"검수중"}:be)),alert("요청자에게 전달되었습니다.")};j.useEffect(()=>{(async()=>{const pe=jr(cr(vt,"users"),Wn("role","==",1)),be=(await vl(pe)).docs.map(Pe=>Pe.data().name).filter(Boolean);N(be)})()},[]);const ne=pe=>{e(pe),t(!0)},q=pe=>I(pe),se=pe=>E(pe),fe=pe=>F(pe.trim()),de=pe=>z(pe),V=pe=>k(pe),te=pe=>new Date(pe.getFullYear(),pe.getMonth(),pe.getDate()),he=pe=>{if(!pe)return null;if(typeof pe=="object"&&typeof pe.toDate=="function")return te(pe.toDate());if(pe instanceof Date)return te(pe);if(typeof pe=="number")return te(new Date(pe));if(typeof pe=="string"){const be=pe.replace(/\./g,"-").replace(/\//g,"-").split("-");if(be.length===3){const[it,Kn,Lt]=be.map(Number),Gr=it>31?it:new Date().getFullYear();return new Date(Gr,Kn-1,Lt)}if(be.length===2){const[it,Kn]=be.map(Number),Lt=new Date().getFullYear();return new Date(Lt,it-1,Kn)}const Pe=new Date(pe);return isNaN(+Pe)?null:te(Pe)}return null},ue=pe=>pe==="검수요청"?"검수중":pe==="검수중"?"검수요청":pe??"대기",_e=j.useMemo(()=>n.map(pe=>{const Se=ue(pe.status);return D_({...pe,displayStatus:Se})}),[n]),Ce=j.useMemo(()=>{const pe=T.start?te(T.start):null,Se=T.end?te(T.end):null;return _e.filter(be=>{let Pe=!0;if(v!==lT&&be.status!==v&&(Pe=!1),Pe&&J!==uT&&be.requester!==J&&(Pe=!1),Pe&&C!==cT&&be.assigned_designer!==C&&(Pe=!1),Pe&&pe&&Se){const it=he(be.request_date)||he(be.requested_at)||he(be.requestDate);(!it||it<pe||it>Se)&&(Pe=!1)}return Pe&&O&&!I_(be,O)&&(Pe=!1),Pe})},[_e,v,J,C,T,O]),Te=(pe,Se)=>{const be=Se.replace(/[^0-9.]/g,"");g(Pe=>({...Pe,[pe]:be}))},yt=async pe=>{const Se=n.find(be=>be.id===pe);await di($n(vt,"design_request",pe),{work_hour_edit_state:!0}),i(be=>be.map(Pe=>Pe.id===pe?{...Pe,work_hour_edit_state:!0}:Pe)),g(be=>({...be,[pe]:be[pe]!==void 0&&be[pe]!==""?be[pe]:(Se==null?void 0:Se.out_work_hour)!=null?String(Se.out_work_hour):""}))},Fe=async pe=>{const Se=n.find(Xn=>Xn.id===pe);if(!Se)return;const be=(p[pe]??"").trim(),Pe=Number(be.replace(",","."));if(!Number.isFinite(Pe)||Pe<0){alert("유효한 공수를 입력하세요.");return}const it=jr(cr(vt,"task_work_hour"),Wn("task_form","==",Se.task_form),Wn("task_type","==",Se.task_type)),Kn=await vl(it);let Lt=1;if(!Kn.empty){const Xn=Kn.docs[0].data();Lt=Number(Xn.task_work_times)||1}const Gr=Number((Pe*Lt).toFixed(2));await di($n(vt,"design_request",pe),{out_work_hour:Pe,in_work_hour:Gr,work_hour_edit_state:!1}),i(Xn=>Xn.map(fr=>fr.id===pe?{...fr,out_work_hour:Pe,in_work_hour:Gr,work_hour_edit_state:!1}:fr)),alert("공수 수정 완료")},Tt=async()=>{M(!0);try{aU({rows:Ce,fields:["id","design_request_id","request_date","requester","task_form","task_type","requirement","status","assigned_designer","designer_start_date","designer_end_date","out_work_hour","in_work_hour"],headers:{id:"문서ID",design_request_id:"문서번호",request_date:"요청일",requester:"요청자",task_form:"업무형태",task_type:"업무타입",requirement:"작업항목",status:"진행상태",assigned_designer:"디자이너",designer_start_date:"디자인 시작일",designer_end_date:"디자인 종료일",out_work_hour:"공수(외부)",in_work_hour:"공수(내부)"},filename:"design_request_current_view.csv"})}finally{M(!1)}},Dn=async pe=>{await di($n(vt,"design_request",pe),{work_hour_edit_state:!1}),i(Se=>Se.map(be=>be.id===pe?{...be,work_hour_edit_state:!1}:be))};return _.jsxs(lU,{children:[_.jsx(x_,{}),_.jsxs(uU,{children:[_.jsx(cU,{children:"매니저 요청리스트"}),_.jsx(C_,{roleNumber:3,onApplyStatus:se,onApplyRange:q,onSearch:fe,keyword:P,onKeywordChange:B,isManager:!0,requesterOptions:G,onApplyRequester:de,designerOptions:re,onApplyDesigner:V}),_.jsx(nU,{onClick:Tt,loading:U}),_.jsx(Z3,{data:Ce,designerList:a,selectedDesigners:c,designerSelect:R,assignDesigner:x,sendToRequester:ve,onDetailClick:ne,workHours:p,onChangeWorkHour:Te,onSaveWorkHour:Fe,onStartEditWorkHour:yt,onCancelEditWorkHour:Dn})]})]})}const lU=H.div``,uU=H.div`
  padding: 0 48px;
`,cU=H.h2`
  margin-top: 20px;
`;function hU({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(s3,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(R3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(oU,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx(fU,{children:a()})}const fU=H.main``,dU="./assets/aside-logo-DoEwMgfJ.svg",pU="./assets/myrequest-icon-DhmqrZY6.svg";function mU({item:t}){return _.jsxs(_U,{status:t.status,children:[_.jsx(vU,{children:t.status}),_.jsx(EU,{status:t.status,children:t.count})]})}const gU=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},yU=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},_U=H.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>gU(t,e)};
`,vU=H.span`
  font-size: 16px;
  font-weight: 500;
`,EU=H.span`
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
    background-color: ${({status:t,theme:e})=>yU(t,e)};
  }
`,Ct={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},wU=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG,Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 2:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ,Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];case 3:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수중",count:n([Ct.REQ])},{status:"검수요청",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}];default:return[{status:"대기",count:n([Ct.WAIT])},{status:"진행중",count:n([Ct.PROG])},{status:"검수요청",count:n([Ct.REQ])},{status:"검수중",count:n([Ct.REV])},{status:"완료",count:n([Ct.DONE])},{status:"취소",count:n([Ct.CAN])}]}},bU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function TU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=wU(e,t);return _.jsxs(SU,{children:[_.jsxs(xU,{children:[_.jsx(AU,{src:dU}),_.jsx(RU,{children:"업무 관리시스템"})]}),e===1&&_.jsx(CU,{children:_.jsx(DU,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(IU,{children:[_.jsxs(kU,{children:[_.jsx(OU,{src:pU}),_.jsx(MU,{children:bU(e,n)})]}),_.jsx(NU,{children:a.map(l=>_.jsx(mU,{item:l},l.status))})]})]})}const SU=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,xU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,AU=H.img`
  margin-right: 8px;
`,RU=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,CU=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,DU=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,IU=H.div`
  padding: 0 24px;
`,kU=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,OU=H.img``,MU=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,NU=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function PU({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(VU,{isVisible:t,onClick:e}),_.jsx(LU,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const VU=H.div`
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
`,EA="./assets/requestformexit-button-BcAG546a.svg",jU="./assets/checkbox-checked-eOVFoR8b.svg",Cf={completion_dt:"",open_dt:"",merchandiser:"",task_form:"",task_type:"",task_type_detail:"",requirement:"",url:"",note:"",emergency:!1},hT=["GHS","MHC","MHC/GHS"],fT=["프론트테마","별도기획전","일자별배너","핫새배너","큐레이션배너","GNB-기획전(전문관)","GNB-주류이지픽업","GNB-택배배송관","페이/카드프로모션","이벤트배너","상품상세","제휴","클럽","팝업","푸시","홈테마","즉시배송","트레이딩","이벤트","기타"],dT=["M영업기획팀","디지털마케팅팀","M상품1팀","M상품2팀","M상품3팀","TV영업기획팀","TC영업기획팀","미디어컨텐츠팀","전략기획팀","MC서비스기획팀"],UU=["프로모션","배너(프로모션,연관)","배너(마케팅)","배너(상품)","배너(etv/etcom)","배너(엔라방)","썸네일(그룹)"],qU={프로모션:["마케팅","마케팅-FULL","마케팅-템플릿","마케팅-모션적용","상품(식품/공산품)","상품(식품/공산품)-브랜드템플릿","etv/etcom","프로모션 수정"],"배너(프로모션,연관)":["템플릿","템플릿-모션","템플릿-썸네일형","공통","기타"],"배너(마케팅)":["템플릿","템플릿-썸네일형","공통","광고성","홈전단지컨셉"],"배너(상품)":["템플릿","공통"],"배너(etv/etcom)":["템플릿","공통"],"배너(엔라방)":["템플릿","공통"],"썸네일(그룹)":["마케팅","그룹코드_프로모션","1팀","2팀","3팀","etv/etcom","엔라방"]},BU=t=>(t??"").trim().toLowerCase(),Pt=t=>BU(t)==="nsmall",zU=t=>Pt(t)?{forms:[...dT],types:[...UU],formDefault:dT[0],typeDefault:""}:{forms:[...hT],types:[...fT],formDefault:hT[0],typeDefault:fT[0]};function pT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=j.useState(Cf),[d,p]=j.useState([]),[g,v]=j.useState(""),E=j.useMemo(()=>zU(g),[g]),T=R=>{const x=(R??"").trim();return qU[x]??[]},I=j.useMemo(()=>Pt(g)?T(l.task_type):[],[g,l.task_type]),P=j.useMemo(()=>{const R=[...E.forms];return a&&l.task_form&&!R.includes(l.task_form)&&R.unshift(l.task_form),R},[E.forms,a,l.task_form]),B=j.useMemo(()=>{const R=[...E.types];return a&&l.task_type&&!R.includes(l.task_type)&&R.unshift(l.task_type),R},[E.types,a,l.task_type]),O=(R,x)=>{if(R==="task_type"&&Pt(g)){c(ve=>({...ve,task_type:x,task_type_detail:""}));return}c(ve=>({...ve,[R]:x}))},F=R=>typeof R!="string"||R.trim()==="",G=(R,x)=>F(R.completion_dt)?"완료 요청일을 선택하세요.":F(R.open_dt)?"오픈일을 선택하세요.":F(R.task_form)?"업무 부서를 선택하세요.":F(R.task_type)?"업무 유형을 선택하세요.":x&&F(R.task_type_detail)?"업무 유형 상세를 선택하세요.":F(R.requirement)?"작업 항목을 입력하세요.":null,N=()=>p(R=>[...R,{...Cf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}]),J=R=>p(x=>x.filter((ve,ne)=>ne!==R)),z=(R,x,ve)=>p(ne=>{const q=[...ne];return x==="task_type"&&Pt(g)?q[R]={...q[R],task_type:ve,task_type_detail:""}:q[R]={...q[R],[x]:ve},q}),re=R=>R?Et.fromDate(new Date(R)):null,D=async()=>{const R=new Date,x=R.getFullYear().toString().slice(2),ve=(R.getMonth()+1).toString().padStart(2,"0"),ne=jr(cr(vt,"design_request"),Wn("design_request_id",">=",`H${x}${ve}0000`),Wn("design_request_id","<",`H${x}${ve}9999`)),q=await vl(ne);return{year:x,month:ve,base:q.size}},C=(R,x,ve)=>`H${R}${x}${ve.toString().padStart(4,"0")}`,k=async(R,x)=>{const ve=jr(cr(vt,"homeplus_task_work_hour"),Wn("homeplus_task_form","==",R),Wn("homeplus_task_type","==",x));return await vl(ve)},U=async(R,x,ve)=>{if(Pt(g)){if(!x||!ve)return{base:null,times:null};const de=jr(cr(vt,"nsmall_task_work_hour"),Wn("nsmall_task_type","==",x),Wn("nsmall_task_type_detail","==",ve)),V=await vl(de);if(V.empty)return{base:null,times:null};const te=V.docs[0].data(),he=typeof te.nsmall_task_work_hour=="number"?te.nsmall_task_work_hour:null,ue=typeof te.nsmall_task_work_times=="number"?te.nsmall_task_work_times:null;return console.log("[NSMALL preset]",{task_type:x,task_type_detail:ve,base:he,times:ue,docId:V.docs[0].id}),{base:he,times:ue}}if(!R||!x)return{base:null,times:null};let ne=await k(R,x);if(ne.empty&&R!=="MHC/GHS"&&(ne=await k("MHC/GHS",x)),ne.empty&&(R==="GHS"||R==="MHC")&&(ne=await k(R==="GHS"?"MHC":"GHS",x)),ne.empty)return{base:null,times:null};const q=ne.docs[0].data(),se=typeof q.homeplus_task_work_hour=="number"?q.homeplus_task_work_hour:null,fe=typeof q.homeplus_task_work_times=="number"?q.homeplus_task_work_times:null;return console.log("[HOMEPLUS preset]",{task_form:R,task_type:x,base:se,times:fe,docId:ne.docs[0].id}),{base:se,times:fe}},M=async R=>{if(R.preventDefault(),a){const de=G(l,Pt(g));if(de){alert(de);return}}if(a&&(e!=null&&e.id)){const de=(l.task_form||"")!==(e.task_form||""),V=(l.task_type||"")!==(e.task_type||""),te=Pt(g)&&(l.task_type_detail||"")!==(e.task_type_detail||""),he={completion_dt:re(l.completion_dt),open_dt:re(l.open_dt),merchandiser:l.merchandiser??"",task_form:l.task_form||E.formDefault,task_type:Pt(g)?l.task_type??"":l.task_type||E.typeDefault,task_type_detail:l.task_type_detail??"",requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:dy()};if(de||V||te){const{base:ue,times:_e}=await U(he.task_form,he.task_type,he.task_type_detail);he.out_work_hour=ue,he.in_work_hour=ue!=null&&_e!=null?Number((ue*_e).toFixed(2)):null,he.work_hour_edit_state=!1}await di($n(vt,"design_request",e.id),he),alert("요청이 수정되었습니다!"),i();return}const x=[l,...d];for(let de=0;de<x.length;de++){const V=x[de],te=G(V,Pt(g));if(te){alert(`${de===0?"메인 폼":`추가 요청 ${de}`} ${te}`);return}}const{year:ve,month:ne,base:q}=await D();let se=q;const fe=new Date;for(const de of x){se+=1;const V=C(ve,ne,se),te=de.task_form||E.formDefault,he=Pt(g)?de.task_type||"":de.task_type||E.typeDefault,{base:ue,times:_e}=await U(de.task_form,de.task_type,de.task_type_detail),Ce=ue!=null&&_e!=null?Number((ue*_e).toFixed(2)):null;await V4(cr(vt,"design_request"),{design_request_id:V,request_date:re(fe.toISOString()),merchandiser:de.merchandiser??"",requester:t,company:g,completion_dt:re(de.completion_dt),open_dt:re(de.open_dt),task_form:te,task_type:he,task_type_detail:de.task_type_detail??"",requirement:de.requirement,url:de.url,note:de.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:de.emergency,requester_edit_state:!1,designer_edit_state:!1,in_work_hour:Ce,out_work_hour:ue,work_hour_edit_state:!1,created_at:dy(),updated_at:null,delete_at:null})}alert(`${x.length}건이 등록되었습니다!`),p([]),c(Cf),i()};return j.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",merchandiser:e.merchandiser??"",task_form:e.task_form??"",task_type:e.task_type??"",task_type_detail:e.task_type_detail??"",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),j.useEffect(()=>{!n||a||(c({...Cf,task_form:E.formDefault,task_type:E.typeDefault,task_type_detail:""}),p([]))},[n,a,E.formDefault,E.typeDefault]),j.useEffect(()=>{const R=qc(da,async x=>{var ne;if(!x){v("");return}const ve=await Zd($n(vt,"users",x.uid));v(((ne=ve.data())==null?void 0:ne.company)??"")});return()=>R()},[]),j.useEffect(()=>{a||c(R=>{const x={...R};return E.forms.includes(x.task_form||"")||(x.task_form=E.formDefault),E.types.includes(x.task_type||"")||(x.task_type=E.typeDefault,x.task_type_detail=""),x})},[E.forms,E.types,E.formDefault,E.typeDefault,a]),_.jsxs(_.Fragment,{children:[_.jsxs(FU,{children:[_.jsx(HU,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(GU,{type:"button",onClick:i})]}),_.jsxs($U,{onSubmit:M,children:[_.jsxs(YU,{children:[!a&&d.map((R,x)=>{const ve=Pt(g)?T(R.task_type):[],ne=Pt(g)&&!!R.task_type;return _.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",x+1]}),_.jsx("button",{type:"button",onClick:()=>J(x),children:"삭제"})]}),_.jsxs(mT,{children:[_.jsx(gT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Yt,{children:"문서번호"}),_.jsx(Wt,{})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`merchandiser_ex_${x}`,children:"담당 MD"})}),_.jsx(Wt,{children:_.jsx(If,{id:`merchandiser_ex_${x}`,type:"text",value:R.merchandiser||"",onChange:q=>z(x,"merchandiser",q.target.value),placeholder:"담당 MD 이름 또는 ID를 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`completion_dt_ex_${x}`,children:"완료 요청일"})}),_.jsx(Wt,{children:_.jsx(Df,{id:`completion_dt_ex_${x}`,type:"date",value:R.completion_dt||"",onChange:q=>z(x,"completion_dt",q.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`open_dt_ex_${x}`,children:"오픈일"})}),_.jsx(Wt,{children:_.jsx(Df,{id:`open_dt_ex_${x}`,type:"date",value:R.open_dt||"",onChange:q=>z(x,"open_dt",q.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`task_form_ex_${x}`,children:"업무 부서"})}),_.jsx(Wt,{children:_.jsx(ll,{id:`task_form_ex_${x}`,$wide:Pt(g),value:R.task_form||E.formDefault,onChange:q=>z(x,"task_form",q.target.value),children:E.forms.map(q=>_.jsx("option",{value:q,children:q},q))})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`task_type_ex_${x}`,children:"업무 유형"})}),_.jsxs(Wt,{children:[_.jsxs(ll,{id:`task_type_ex_${x}`,$wide:Pt(g),value:Pt(g)?R.task_type||"":R.task_type||E.typeDefault,onChange:q=>z(x,"task_type",q.target.value),children:[Pt(g)&&_.jsx("option",{value:"",children:"업무 유형을 선택해주세요"})," ",E.types.map(q=>_.jsx("option",{value:q,children:q},q))]}),ne&&_.jsxs(ll,{id:`task_type_detail_ex_${x}`,$wide:Pt(g),value:R.task_type_detail||"",onChange:q=>z(x,"task_type_detail",q.target.value),children:[_.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),ve.map(q=>_.jsx("option",{value:q,children:q},q))]})]})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`requirement_ex_${x}`,children:"작업 항목"})}),_.jsx(Wt,{children:_.jsx(If,{id:`requirement_ex_${x}`,type:"text",value:R.requirement||"",onChange:q=>z(x,"requirement",q.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`emergency_ex_${x}`,children:"긴급 일정"})}),_.jsx(Wt,{children:_.jsx(vT,{children:_.jsxs(ET,{htmlFor:`emergency_ex_${x}`,children:[_.jsx(wT,{id:`emergency_ex_${x}`,type:"checkbox",checked:!!R.emergency,onChange:q=>z(x,"emergency",q.target.checked)}),_.jsx(bT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`url_ex_${x}`,children:"요청서 URL"})}),_.jsx(Wt,{children:_.jsx(yT,{id:`url_ex_${x}`,value:R.url||"",onChange:q=>z(x,"url",q.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:`note_ex_${x}`,children:"메모"})}),_.jsx(Wt,{children:_.jsx(_T,{id:`note_ex_${x}`,rows:4,value:R.note||"",onChange:q=>z(x,"note",q.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},x)}),_.jsxs(mT,{children:[_.jsx(gT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Yt,{children:"문서번호"}),_.jsx(Wt,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(Wt,{children:_.jsx(Df,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:R=>O("completion_dt",R.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(Wt,{children:_.jsx(Df,{type:"date",id:"open_dt",value:l.open_dt,onChange:R=>O("open_dt",R.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"merchandiser",children:"담당 MD"})}),_.jsx(Wt,{children:_.jsx(If,{type:"text",id:"merchandiser",value:l.merchandiser||"",onChange:R=>O("merchandiser",R.target.value),placeholder:"담당 MD 이름을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"task_form",children:"업무 부서"})}),_.jsx(Wt,{children:_.jsx(ll,{id:"task_form",$wide:Pt(g),value:l.task_form||E.formDefault,onChange:R=>O("task_form",R.target.value),children:P.map(R=>_.jsx("option",{value:R,children:R},R))})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"task_type",children:"업무 유형"})}),_.jsxs(Wt,{children:[_.jsxs(ll,{id:"task_type",$wide:Pt(g),value:Pt(g)?a?l.task_type||B[0]||"":l.task_type??"":l.task_type||E.typeDefault,onChange:R=>O("task_type",R.target.value),children:[Pt(g)&&!a&&_.jsx("option",{value:"",children:"업무 유형을 선택해주세요"}),B.map(R=>_.jsx("option",{value:R,children:R},R))]}),Pt(g)&&!!l.task_type&&_.jsxs(ll,{id:"task_type_detail",$wide:!0,value:l.task_type_detail||"",onChange:R=>O("task_type_detail",R.target.value),children:[_.jsx("option",{value:"",children:"상세 유형을 선택해주세요"}),I.map(R=>_.jsx("option",{value:R,children:R},R))]})]})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(Wt,{children:_.jsx(If,{type:"text",id:"requirement",value:l.requirement,onChange:R=>O("requirement",R.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(Wt,{children:_.jsx(vT,{children:_.jsxs(ET,{htmlFor:"emergency",children:[_.jsx(wT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:R=>O("emergency",R.target.checked)}),_.jsx(bT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(Wt,{children:_.jsx(yT,{id:"url",value:l.url,onChange:R=>O("url",R.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(Yt,{children:_.jsx(gn,{htmlFor:"note",children:"메모"})}),_.jsx(Wt,{children:_.jsx(_T,{id:"note",rows:2,value:l.note,onChange:R=>O("note",R.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(WU,{children:[_.jsx(QU,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(KU,{type:"button",onClick:N,children:"추가 등록하기"})]})]})]})}const $U=H.form`
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
`,GU=H.button`
  width: 24px;
  height: 24px;
  background: url(${EA}) no-repeat center;
  background-size: contain;
`,mT=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,YU=H.div`
  max-height: 690px;
  overflow: auto;
`,gT=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Yt=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Wt=H.td`
  padding: 10px 24px;
  border-right: none;
`,gn=H.label`
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
`,yT=H.textarea`
  width: 100%;
  padding: 10px 16px;
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
  background-color: #fffff1;
`,vT=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 5px;
`,ET=H.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,wT=H.input`
  display: none;

  &:checked + span {
    background-color: ${({theme:t})=>t.colors.red};
    background-image: url(${jU});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,bT=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,ll=H.select`
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
  background-image: url(${Bx});
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
`;function XU({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(ZU,{children:[_.jsx(JU,{children:"디자인 요청 상세"}),_.jsx(e9,{type:"button",onClick:e})]}),_.jsxs(t9,{children:[_.jsx(n9,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Vr,{children:"문서번호"}),_.jsx(Ys,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"요청일"}),_.jsx(Ys,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"완료 요청일"}),_.jsx(r9,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"오픈일"}),_.jsx(i9,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"담당 MD"}),_.jsx(Ys,{children:(t==null?void 0:t.merchandiser)||""})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"업무 부서"}),_.jsx(Ys,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"업무 유형"}),_.jsxs(Ys,{children:[_.jsx(a9,{children:t==null?void 0:t.task_type}),(t==null?void 0:t.task_type_detail)&&_.jsxs(_.Fragment,{children:[_.jsx(o9,{children:"＞"}),_.jsx(l9,{children:t==null?void 0:t.task_type_detail})]})]})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"작업 항목"}),_.jsx(Ys,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"긴급 일정"}),_.jsx(Ys,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"요청서 URL"}),_.jsx(Ys,{children:t!=null&&t.url?_.jsx(u9,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Vr,{children:"메모"}),_.jsx(s9,{children:_.jsx(c9,{children:t.note})})]})]})]})]})}const ZU=H.div`
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
  background: url(${EA}) no-repeat center;
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
`,Ys=H.td`
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
`,a9=H.span`
`,o9=H.span`
  margin: 0 5px;
`,l9=H.span`
  
`,u9=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,c9=H.p`
  min-height: 100px;
  max-height: 100px;
  overflow-y: auto;
  word-break: break-word;
`;function h9(){const[t,e]=j.useState(0),[n,i]=j.useState([]),[a,l]=j.useState(""),[c,d]=j.useState(!1),[p,g]=j.useState(void 0),[v,E]=j.useState(null);j.useEffect(()=>{const P=qc(da,async B=>{if(B){l(B.displayName||"");const O=await Zd($n(vt,"users",B.uid));if(O.exists()){const G=O.data().role,N=B.displayName;e(G);let J;G===1?J=jr(cr(vt,"design_request"),Wn("requester","==",N)):G===2?J=jr(cr(vt,"design_request"),Wn("assigned_designer","==",N)):J=cr(vt,"design_request"),Jd(J,z=>{const re=z.docs.map(D=>{const C=D.data();return{id:D.id,status:C.status??"대기중"}});i(re)})}}else e(0),l(""),i([])});return()=>P()},[]);const T=()=>{g(void 0),E("create"),d(!0)},I=()=>{d(!1),g(void 0)};return _.jsxs(f9,{children:[_.jsx(TU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(d9,{children:[_.jsx(J4,{}),_.jsx(hU,{userRole:t,setIsDrawerOpen:d,setEditData:P=>{g(P),E("edit")},setDetailData:P=>{g(P),E("detail")}})]}),_.jsxs(PU,{isOpen:c,onClose:I,children:[v==="create"&&_.jsx(pT,{userName:a,isDrawerOpen:c,onClose:I}),v==="edit"&&p&&_.jsx(pT,{userName:a,isDrawerOpen:c,editData:p,onClose:I}),v==="detail"&&p&&_.jsx(XU,{data:p,onClose:I})]})]})}const f9=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,d9=H.div`
  flex: 1;
`;function p9(){const[t,e]=j.useState(""),[n,i]=j.useState(""),[a,l]=j.useState(""),[c,d]=j.useState(""),[p,g]=j.useState(""),v=Mc(),E=async()=>{const T=t.trim(),I=n.trim(),P=a.trim();if(!T){alert("이름을 입력해주세요.");return}if(!I){alert("회사명을 입력해주세요.");return}if(!P){alert("이메일을 입력해주세요.");return}if(c!==p){alert("비밀번호가 일치하지 않습니다.");return}aM(da,a,c).then(async B=>{const O=B.user;await uM(O,{displayName:t}),await P4($n(vt,"users",O.uid),{name:T,company:I,role:2,createdAt:dy()})}).then(()=>{alert("회원가입이 완료되었습니다!"),v("/")}).catch(B=>{alert("회원가입 중 오류 발생: "+B.message)})};return _.jsx(m9,{children:_.jsxs(g9,{children:[_.jsxs(y9,{children:[_.jsx(_9,{children:"PDMS"}),_.jsx(v9,{children:"Pushcomz Design Management System"})]}),_.jsxs(E9,{children:[_.jsx(w9,{type:"text",value:t,onChange:T=>e(T.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(b9,{type:"text",value:n,onChange:T=>i(T.target.value),placeholder:"회사명을 입력해주세요."})," ",_.jsx(T9,{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(S9,{type:"password",value:c,onChange:T=>d(T.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(x9,{type:"password",value:p,onChange:T=>g(T.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(A9,{onClick:E,children:"등록하기"})]})})}const m9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,g9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,y9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,_9=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,v9=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,E9=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
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
`,T9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,S9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,x9=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,A9=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function R9(){const[t,e]=j.useState(!1);return _.jsx(mD,{basename:"/pdms-test",children:_.jsxs(GC,{children:[_.jsx(kf,{path:"/",element:_.jsx(j4,{onLoginSuccess:()=>e(!0)})}),_.jsx(kf,{path:"/dashboard",element:t?_.jsx(h9,{}):_.jsx(FC,{to:"/"})}),_.jsx(kf,{path:"/signup",element:_.jsx(p9,{})})]})})}const C9="/assets/Pretendard-Bold-C0IAtCzs.woff2",D9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",I9="/assets/Pretendard-Medium-BCuOcOjL.woff2",k9="/assets/Pretendard-Regular-BnvhP503.woff2",O9=c1`
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
    src: url(${C9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${D9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${I9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${k9}) format('woff2');
    font-weight: 400;
  }

`,M9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},N9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},P9={colors:M9,mixin:N9};tC.createRoot(document.getElementById("root")).render(_.jsx(j.StrictMode,{children:_.jsxs(TI,{theme:P9,children:[_.jsx(R9,{}),_.jsx(O9,{})]})}));
