(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function qR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ym={exports:{}},Hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE;function BR(){if(jE)return Hu;jE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:t,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Hu.Fragment=e,Hu.jsx=n,Hu.jsxs=n,Hu}var LE;function zR(){return LE||(LE=1,Ym.exports=BR()),Ym.exports}var _=zR(),Wm={exports:{}},Ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE;function FR(){if(UE)return Ve;UE=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,F={};function M(L,ae,J){this.props=L,this.context=ae,this.refs=F,this.updater=J||C}M.prototype.isReactComponent={},M.prototype.setState=function(L,ae){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ae,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=M.prototype;function j(L,ae,J){this.props=L,this.context=ae,this.refs=F,this.updater=J||C}var O=j.prototype=new P;O.constructor=j,N(O,M.prototype),O.isPureReactComponent=!0;var te=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},re=Object.prototype.hasOwnProperty;function R(L,ae,J,ie,de,_e){return J=_e.ref,{$$typeof:t,type:L,key:ae,ref:J!==void 0?J:null,props:_e}}function A(L,ae){return R(L.type,ae,void 0,void 0,void 0,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function U(L){var ae={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(J){return ae[J]})}var k=/\/+/g;function B(L,ae){return typeof L=="object"&&L!==null&&L.key!=null?U(""+L.key):ae.toString(36)}function D(){}function Me(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(D,D):(L.status="pending",L.then(function(ae){L.status==="pending"&&(L.status="fulfilled",L.value=ae)},function(ae){L.status==="pending"&&(L.status="rejected",L.reason=ae)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ce(L,ae,J,ie,de){var _e=typeof L;(_e==="undefined"||_e==="boolean")&&(L=null);var ge=!1;if(L===null)ge=!0;else switch(_e){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(L.$$typeof){case t:case e:ge=!0;break;case v:return ge=L._init,ce(ge(L._payload),ae,J,ie,de)}}if(ge)return de=de(L),ge=ie===""?"."+B(L,0):ie,te(de)?(J="",ge!=null&&(J=ge.replace(k,"$&/")+"/"),ce(de,ae,J,"",function(yt){return yt})):de!=null&&(I(de)&&(de=A(de,J+(de.key==null||L&&L.key===de.key?"":(""+de.key).replace(k,"$&/")+"/")+ge)),ae.push(de)),1;ge=0;var it=ie===""?".":ie+":";if(te(L))for(var Le=0;Le<L.length;Le++)ie=L[Le],_e=it+B(ie,Le),ge+=ce(ie,ae,J,_e,de);else if(Le=T(L),typeof Le=="function")for(L=Le.call(L),Le=0;!(ie=L.next()).done;)ie=ie.value,_e=it+B(ie,Le++),ge+=ce(ie,ae,J,_e,de);else if(_e==="object"){if(typeof L.then=="function")return ce(Me(L),ae,J,ie,de);throw ae=String(L),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Y(L,ae,J){if(L==null)return L;var ie=[],de=0;return ce(L,ie,"","",function(_e){return ae.call(J,_e,de++)}),ie}function se(L){if(L._status===-1){var ae=L._result;ae=ae(),ae.then(function(J){(L._status===0||L._status===-1)&&(L._status=1,L._result=J)},function(J){(L._status===0||L._status===-1)&&(L._status=2,L._result=J)}),L._status===-1&&(L._status=0,L._result=ae)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Ee(){}return Ve.Children={map:Y,forEach:function(L,ae,J){Y(L,function(){ae.apply(this,arguments)},J)},count:function(L){var ae=0;return Y(L,function(){ae++}),ae},toArray:function(L){return Y(L,function(ae){return ae})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ve.Component=M,Ve.Fragment=n,Ve.Profiler=a,Ve.PureComponent=j,Ve.StrictMode=i,Ve.Suspense=p,Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ve.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},Ve.cache=function(L){return function(){return L.apply(null,arguments)}},Ve.cloneElement=function(L,ae,J){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ie=N({},L.props),de=L.key,_e=void 0;if(ae!=null)for(ge in ae.ref!==void 0&&(_e=void 0),ae.key!==void 0&&(de=""+ae.key),ae)!re.call(ae,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&ae.ref===void 0||(ie[ge]=ae[ge]);var ge=arguments.length-2;if(ge===1)ie.children=J;else if(1<ge){for(var it=Array(ge),Le=0;Le<ge;Le++)it[Le]=arguments[Le+2];ie.children=it}return R(L.type,de,void 0,void 0,_e,ie)},Ve.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},Ve.createElement=function(L,ae,J){var ie,de={},_e=null;if(ae!=null)for(ie in ae.key!==void 0&&(_e=""+ae.key),ae)re.call(ae,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=ae[ie]);var ge=arguments.length-2;if(ge===1)de.children=J;else if(1<ge){for(var it=Array(ge),Le=0;Le<ge;Le++)it[Le]=arguments[Le+2];de.children=it}if(L&&L.defaultProps)for(ie in ge=L.defaultProps,ge)de[ie]===void 0&&(de[ie]=ge[ie]);return R(L,_e,void 0,void 0,null,de)},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(L){return{$$typeof:d,render:L}},Ve.isValidElement=I,Ve.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:se}},Ve.memo=function(L,ae){return{$$typeof:g,type:L,compare:ae===void 0?null:ae}},Ve.startTransition=function(L){var ae=z.T,J={};z.T=J;try{var ie=L(),de=z.S;de!==null&&de(J,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Ee,fe)}catch(_e){fe(_e)}finally{z.T=ae}},Ve.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ve.use=function(L){return z.H.use(L)},Ve.useActionState=function(L,ae,J){return z.H.useActionState(L,ae,J)},Ve.useCallback=function(L,ae){return z.H.useCallback(L,ae)},Ve.useContext=function(L){return z.H.useContext(L)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(L,ae){return z.H.useDeferredValue(L,ae)},Ve.useEffect=function(L,ae,J){var ie=z.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(L,ae)},Ve.useId=function(){return z.H.useId()},Ve.useImperativeHandle=function(L,ae,J){return z.H.useImperativeHandle(L,ae,J)},Ve.useInsertionEffect=function(L,ae){return z.H.useInsertionEffect(L,ae)},Ve.useLayoutEffect=function(L,ae){return z.H.useLayoutEffect(L,ae)},Ve.useMemo=function(L,ae){return z.H.useMemo(L,ae)},Ve.useOptimistic=function(L,ae){return z.H.useOptimistic(L,ae)},Ve.useReducer=function(L,ae,J){return z.H.useReducer(L,ae,J)},Ve.useRef=function(L){return z.H.useRef(L)},Ve.useState=function(L){return z.H.useState(L)},Ve.useSyncExternalStore=function(L,ae,J){return z.H.useSyncExternalStore(L,ae,J)},Ve.useTransition=function(){return z.H.useTransition()},Ve.version="19.1.0",Ve}var qE;function cy(){return qE||(qE=1,Wm.exports=FR()),Wm.exports}var q=cy();const me=qR(q);var Qm={exports:{}},Gu={},Km={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE;function $R(){return BE||(BE=1,function(t){function e(Y,se){var fe=Y.length;Y.push(se);e:for(;0<fe;){var Ee=fe-1>>>1,L=Y[Ee];if(0<a(L,se))Y[Ee]=se,Y[fe]=L,fe=Ee;else break e}}function n(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var se=Y[0],fe=Y.pop();if(fe!==se){Y[0]=fe;e:for(var Ee=0,L=Y.length,ae=L>>>1;Ee<ae;){var J=2*(Ee+1)-1,ie=Y[J],de=J+1,_e=Y[de];if(0>a(ie,fe))de<L&&0>a(_e,ie)?(Y[Ee]=_e,Y[de]=fe,Ee=de):(Y[Ee]=ie,Y[J]=fe,Ee=J);else if(de<L&&0>a(_e,fe))Y[Ee]=_e,Y[de]=fe,Ee=de;else break e}}return se}function a(Y,se){var fe=Y.sortIndex-se.sortIndex;return fe!==0?fe:Y.id-se.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,b=null,T=3,C=!1,N=!1,F=!1,M=!1,P=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function te(Y){for(var se=n(g);se!==null;){if(se.callback===null)i(g);else if(se.startTime<=Y)i(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(g)}}function z(Y){if(F=!1,te(Y),!N)if(n(p)!==null)N=!0,re||(re=!0,B());else{var se=n(g);se!==null&&ce(z,se.startTime-Y)}}var re=!1,R=-1,A=5,I=-1;function U(){return M?!0:!(t.unstable_now()-I<A)}function k(){if(M=!1,re){var Y=t.unstable_now();I=Y;var se=!0;try{e:{N=!1,F&&(F=!1,j(R),R=-1),C=!0;var fe=T;try{t:{for(te(Y),b=n(p);b!==null&&!(b.expirationTime>Y&&U());){var Ee=b.callback;if(typeof Ee=="function"){b.callback=null,T=b.priorityLevel;var L=Ee(b.expirationTime<=Y);if(Y=t.unstable_now(),typeof L=="function"){b.callback=L,te(Y),se=!0;break t}b===n(p)&&i(p),te(Y)}else i(p);b=n(p)}if(b!==null)se=!0;else{var ae=n(g);ae!==null&&ce(z,ae.startTime-Y),se=!1}}break e}finally{b=null,T=fe,C=!1}se=void 0}}finally{se?B():re=!1}}}var B;if(typeof O=="function")B=function(){O(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Me=D.port2;D.port1.onmessage=k,B=function(){Me.postMessage(null)}}else B=function(){P(k,0)};function ce(Y,se){R=P(function(){Y(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var se=3;break;default:se=T}var fe=T;T=se;try{return Y()}finally{T=fe}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var fe=T;T=Y;try{return se()}finally{T=fe}},t.unstable_scheduleCallback=function(Y,se,fe){var Ee=t.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ee+fe:Ee):fe=Ee,Y){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=fe+L,Y={id:v++,callback:se,priorityLevel:Y,startTime:fe,expirationTime:L,sortIndex:-1},fe>Ee?(Y.sortIndex=fe,e(g,Y),n(p)===null&&Y===n(g)&&(F?(j(R),R=-1):F=!0,ce(z,fe-Ee))):(Y.sortIndex=L,e(p,Y),N||C||(N=!0,re||(re=!0,B()))),Y},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(Y){var se=T;return function(){var fe=T;T=se;try{return Y.apply(this,arguments)}finally{T=fe}}}}(Xm)),Xm}var zE;function HR(){return zE||(zE=1,Km.exports=$R()),Km.exports}var Zm={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE;function GR(){if(FE)return Tn;FE=1;var t=cy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},Tn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,b=d(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:C}):v==="script"&&i.d.X(p,{crossOrigin:b,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,b=d(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},Tn.requestFormReset=function(p){i.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},Tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var $E;function YR(){if($E)return Zm.exports;$E=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Zm.exports=GR(),Zm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE;function WR(){if(HE)return Gu;HE=1;var t=HR(),e=cy(),n=YR();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===u)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=m;else{for(var w=!1,S=f.child;S;){if(S===o){w=!0,o=f,u=m;break}if(S===u){w=!0,u=f,o=m;break}S=S.sibling}if(!w){for(S=m.child;S;){if(S===o){w=!0,o=m,u=f;break}if(S===u){w=!0,u=m,o=f;break}S=S.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),O=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function B(r){return r===null||typeof r!="object"?null:(r=k&&r[k]||r["@@iterator"],typeof r=="function"?r:null)}var D=Symbol.for("react.client.reference");function Me(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===D?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case M:return"Profiler";case F:return"StrictMode";case z:return"Suspense";case re:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case O:return(r.displayName||"Context")+".Provider";case j:return(r._context.displayName||"Context")+".Consumer";case te:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case R:return s=r.displayName||null,s!==null?s:Me(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Me(r(s))}catch{}}return null}var ce=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ee=[],L=-1;function ae(r){return{current:r}}function J(r){0>L||(r.current=Ee[L],Ee[L]=null,L--)}function ie(r,s){L++,Ee[L]=r.current,r.current=s}var de=ae(null),_e=ae(null),ge=ae(null),it=ae(null);function Le(r,s){switch(ie(ge,s),ie(_e,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?hE(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=hE(s),r=fE(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}J(de),ie(de,r)}function yt(){J(de),J(_e),J(ge)}function Vn(r){r.memoizedState!==null&&ie(it,r);var s=de.current,o=fE(s,r.type);s!==o&&(ie(_e,r),ie(de,o))}function bn(r){_e.current===r&&(J(de),J(_e)),it.current===r&&(J(it),qu._currentValue=fe)}var Xt=Object.prototype.hasOwnProperty,pi=t.unstable_scheduleCallback,Nr=t.unstable_cancelCallback,ha=t.unstable_shouldYield,ho=t.unstable_requestPaint,jn=t.unstable_now,Fl=t.unstable_getCurrentPriorityLevel,fa=t.unstable_ImmediatePriority,os=t.unstable_UserBlockingPriority,mi=t.unstable_NormalPriority,fo=t.unstable_LowPriority,Pr=t.unstable_IdlePriority,gi=t.log,po=t.unstable_setDisableYieldValue,vt=null,Ze=null;function kn(r){if(typeof gi=="function"&&po(r),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(vt,r)}catch{}}var Zt=Math.clz32?Math.clz32:yi,mo=Math.log,$l=Math.LN2;function yi(r){return r>>>=0,r===0?32:31-(mo(r)/$l|0)|0}var _i=256,vi=4194304;function Fn(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Ei(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,m=r.suspendedLanes,w=r.pingedLanes;r=r.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=Fn(u):(w&=S,w!==0?f=Fn(w):o||(o=S&~r,o!==0&&(f=Fn(o))))):(S=u&~m,S!==0?f=Fn(S):w!==0?f=Fn(w):o||(o=u&~r,o!==0&&(f=Fn(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function bi(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ls(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var r=_i;return _i<<=1,(_i&4194048)===0&&(_i=256),r}function et(){var r=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),r}function Re(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function Ke(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Jt(r,s,o,u,f,m){var w=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,V=r.expirationTimes,K=r.hiddenUpdates;for(o=w&~o;0<o;){var ne=31-Zt(o),ue=1<<ne;S[ne]=0,V[ne]=-1;var X=K[ne];if(X!==null)for(K[ne]=null,ne=0;ne<X.length;ne++){var Z=X[ne];Z!==null&&(Z.lane&=-536870913)}o&=~ue}u!==0&&Pe(r,u,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(w&~s))}function Pe(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-Zt(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function da(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-Zt(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Vr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function us(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function rr(){var r=se.p;return r!==0?r:(r=window.event,r===void 0?32:kE(r.type))}function cs(r,s){var o=se.p;try{return se.p=r,s()}finally{se.p=o}}var Et=Math.random().toString(36).slice(2),$t="__reactFiber$"+Et,Nt="__reactProps$"+Et,ir="__reactContainer$"+Et,Hl="__reactEvents$"+Et,Kd="__reactListeners$"+Et,hs="__reactHandles$"+Et,Yc="__reactResources$"+Et,pa="__reactMarker$"+Et;function fs(r){delete r[$t],delete r[Nt],delete r[Hl],delete r[Kd],delete r[hs]}function wi(r){var s=r[$t];if(s)return s;for(var o=r.parentNode;o;){if(s=o[ir]||o[$t]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=gE(r);r!==null;){if(o=r[$t])return o;r=gE(r)}return s}r=o,o=r.parentNode}return null}function jr(r){if(r=r[$t]||r[ir]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Lr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function On(r){var s=r[Yc];return s||(s=r[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Dt(r){r[pa]=!0}var Gl=new Set,go={};function vr(r,s){Ti(r,s),Ti(r+"Capture",s)}function Ti(r,s){for(go[r]=s,r=0;r<s.length;r++)Gl.add(s[r])}var Wc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},ma={};function Kc(r){return Xt.call(ma,r)?!0:Xt.call(Qc,r)?!1:Wc.test(r)?ma[r]=!0:(Qc[r]=!0,!1)}function ds(r,s,o){if(Kc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Ur(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function fn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ga,Xc;function Si(r){if(ga===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ga=s&&s[1]||"",Xc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ga+r+Xc}var yo=!1;function _o(r,s){if(!r||yo)return"";yo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ue=function(){throw Error()};if(Object.defineProperty(ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ue,[])}catch(Z){var X=Z}Reflect.construct(r,[],ue)}else{try{ue.call()}catch(Z){X=Z}r.call(ue.prototype)}}else{try{throw Error()}catch(Z){X=Z}(ue=r())&&typeof ue.catch=="function"&&ue.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),w=m[0],S=m[1];if(w&&S){var V=w.split(`
`),K=S.split(`
`);for(f=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;f<K.length&&!K[f].includes("DetermineComponentFrameRoot");)f++;if(u===V.length||f===K.length)for(u=V.length-1,f=K.length-1;1<=u&&0<=f&&V[u]!==K[f];)f--;for(;1<=u&&0<=f;u--,f--)if(V[u]!==K[f]){if(u!==1||f!==1)do if(u--,f--,0>f||V[u]!==K[f]){var ne=`
`+V[u].replace(" at new "," at ");return r.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",r.displayName)),ne}while(1<=u&&0<=f);break}}}finally{yo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Si(o):""}function Yl(r){switch(r.tag){case 26:case 27:case 5:return Si(r.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return _o(r.type,!1);case 11:return _o(r.type.render,!1);case 1:return _o(r.type,!0);case 31:return Si("Activity");default:return""}}function vo(r){try{var s="";do s+=Yl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Mn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Wl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Xd(r){var s=Wl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Eo(r){r._valueTracker||(r._valueTracker=Xd(r))}function Ql(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Wl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function ya(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Zd=/[\n"\\]/g;function Pt(r){return r.replace(Zd,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $n(r,s,o,u,f,m,w,S){r.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.type=w:r.removeAttribute("type"),s!=null?w==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Mn(s)):r.value!==""+Mn(s)&&(r.value=""+Mn(s)):w!=="submit"&&w!=="reset"||r.removeAttribute("value"),s!=null?ps(r,w,Mn(s)):o!=null?ps(r,w,Mn(o)):u!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Mn(S):r.removeAttribute("name")}function _a(r,s,o,u,f,m,w,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Mn(o):"",s=s!=null?""+Mn(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(r.name=w)}function ps(r,s,o){s==="number"&&ya(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function xi(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Mn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function lt(r,s,o){if(s!=null&&(s=""+Mn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Mn(o):""}function va(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(ce(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Mn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function sr(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zc(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Ea.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Kl(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&Zc(r,f,u)}else for(var m in s)s.hasOwnProperty(m)&&Zc(r,m,s[m])}function Xl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bo(r){return ep.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Ai=null;function ar(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ri=null,Ci=null;function Zl(r){var s=jr(r);if(s&&(r=s.stateNode)){var o=r[Nt]||null;e:switch(r=s.stateNode,s.type){case"input":if($n(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Pt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Nt]||null;if(!f)throw Error(i(90));$n(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Ql(u)}break e;case"textarea":lt(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&xi(r,!!o.multiple,s,!1)}}}var qr=!1;function Jc(r,s,o){if(qr)return r(s,o);qr=!0;try{var u=r(s);return u}finally{if(qr=!1,(Ri!==null||Ci!==null)&&(Gh(),Ri&&(s=Ri,r=Ci,Ci=Ri=null,Zl(s),r)))for(s=0;s<r.length;s++)Zl(r[s])}}function ba(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Nt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(Er)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){or=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{or=!1}var Br=null,ms=null,Ii=null;function Jl(){if(Ii)return Ii;var r,s=ms,o=s.length,u,f="value"in Br?Br.value:Br.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var w=o-r;for(u=1;u<=w&&s[o-u]===f[m-u];u++);return Ii=f.slice(r,1<u?1-u:void 0)}function zr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Fr(){return!0}function eu(){return!1}function en(r){function s(o,u,f,m,w){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fr:eu,this.isPropagationStopped=eu,this}return v(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),s}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wo=en(tt),Ta=v({},tt,{view:0,detail:0}),eh=en(Ta),To,So,$r,Sa=v({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==$r&&($r&&r.type==="mousemove"?(To=r.screenX-$r.screenX,So=r.screenY-$r.screenY):So=To=0,$r=r),To)},movementY:function(r){return"movementY"in r?r.movementY:So}}),lr=en(Sa),th=v({},Sa,{dataTransfer:0}),tp=en(th),xa=v({},Ta,{relatedTarget:0}),xo=en(xa),tu=v({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ao=en(tu),nh=v({},tt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ro=en(nh),np=v({},tt,{data:0}),nu=en(np),Aa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ru(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ih[r])?!!s[r]:!1}function Ra(){return ru}var sh=v({},Ta,{key:function(r){if(r.key){var s=Aa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?rh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(r){return r.type==="keypress"?zr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Co=en(sh),ah=v({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=en(ah),Di=v({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),oh=en(Di),lh=v({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=en(lh),ch=v({},Sa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Io=en(ch),Nn=v({},tt,{newState:0,oldState:0}),hh=en(Nn),fh=[9,13,27,32],Hr=Er&&"CompositionEvent"in window,h=null;Er&&"documentMode"in document&&(h=document.documentMode);var y=Er&&"TextEvent"in window&&!h,E=Er&&(!Hr||h&&8<h&&11>=h),x=" ",W=!1;function ee(r,s){switch(r){case"keyup":return fh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ge=!1;function Ht(r,s){switch(r){case"compositionend":return pe(s);case"keypress":return s.which!==32?null:(W=!0,x);case"textInput":return r=s.data,r===x&&W?null:r;default:return null}}function Ye(r,s){if(Ge)return r==="compositionend"||!Hr&&ee(r,s)?(r=Jl(),Ii=ms=Br=null,Ge=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!tn[r.type]:s==="textarea"}function ki(r,s,o,u){Ri?Ci?Ci.push(u):Ci=[u]:Ri=u,s=Zh(s,"onChange"),0<s.length&&(o=new wo("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var dn=null,Gr=null;function su(r){aE(r,0)}function dh(r){var s=Lr(r);if(Ql(s))return r}function R_(r,s){if(r==="change")return s}var C_=!1;if(Er){var rp;if(Er){var ip="oninput"in document;if(!ip){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),ip=typeof I_.oninput=="function"}rp=ip}else rp=!1;C_=rp&&(!document.documentMode||9<document.documentMode)}function D_(){dn&&(dn.detachEvent("onpropertychange",k_),Gr=dn=null)}function k_(r){if(r.propertyName==="value"&&dh(Gr)){var s=[];ki(s,Gr,r,ar(r)),Jc(su,s)}}function gA(r,s,o){r==="focusin"?(D_(),dn=s,Gr=o,dn.attachEvent("onpropertychange",k_)):r==="focusout"&&D_()}function yA(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return dh(Gr)}function _A(r,s){if(r==="click")return dh(s)}function vA(r,s){if(r==="input"||r==="change")return dh(s)}function EA(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:EA;function au(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Xt.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function O_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function M_(r,s){var o=O_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=O_(o)}}function N_(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?N_(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function P_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ya(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ya(r.document)}return s}function sp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var bA=Er&&"documentMode"in document&&11>=document.documentMode,Do=null,ap=null,ou=null,op=!1;function V_(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;op||Do==null||Do!==ya(u)||(u=Do,"selectionStart"in u&&sp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ou&&au(ou,u)||(ou=u,u=Zh(ap,"onSelect"),0<u.length&&(s=new wo("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Do)))}function Ca(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var ko={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},lp={},j_={};Er&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Ia(r){if(lp[r])return lp[r];if(!ko[r])return r;var s=ko[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in j_)return lp[r]=s[o];return r}var L_=Ia("animationend"),U_=Ia("animationiteration"),q_=Ia("animationstart"),wA=Ia("transitionrun"),TA=Ia("transitionstart"),SA=Ia("transitioncancel"),B_=Ia("transitionend"),z_=new Map,up="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");up.push("scrollEnd");function br(r,s){z_.set(r,s),vr(s,[r])}var F_=new WeakMap;function ur(r,s){if(typeof r=="object"&&r!==null){var o=F_.get(r);return o!==void 0?o:(s={value:r,source:s,stack:vo(s)},F_.set(r,s),s)}return{value:r,source:s,stack:vo(s)}}var cr=[],Oo=0,cp=0;function ph(){for(var r=Oo,s=cp=Oo=0;s<r;){var o=cr[s];cr[s++]=null;var u=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var m=cr[s];if(cr[s++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}m!==0&&$_(o,f,m)}}function mh(r,s,o,u){cr[Oo++]=r,cr[Oo++]=s,cr[Oo++]=o,cr[Oo++]=u,cp|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function hp(r,s,o,u){return mh(r,s,o,u),gh(r)}function Mo(r,s){return mh(r,null,null,s),gh(r)}function $_(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-Zt(o),r=m.hiddenUpdates,u=r[f],u===null?r[f]=[s]:u.push(s),s.lane=o|536870912),m):null}function gh(r){if(50<Ou)throw Ou=0,ym=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var No={};function xA(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(r,s,o,u){return new xA(r,s,o,u)}function fp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Oi(r,s){var o=r.alternate;return o===null?(o=Gn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function H_(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function yh(r,s,o,u,f,m){var w=0;if(u=r,typeof r=="function")fp(r)&&(w=1);else if(typeof r=="string")w=RR(r,o,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=Gn(31,o,s,f),r.elementType=I,r.lanes=m,r;case N:return Da(o.children,f,m,s);case F:w=8,f|=24;break;case M:return r=Gn(12,o,s,f|2),r.elementType=M,r.lanes=m,r;case z:return r=Gn(13,o,s,f),r.elementType=z,r.lanes=m,r;case re:return r=Gn(19,o,s,f),r.elementType=re,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:case O:w=10;break e;case j:w=9;break e;case te:w=11;break e;case R:w=14;break e;case A:w=16,u=null;break e}w=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Gn(w,o,s,f),s.elementType=r,s.type=u,s.lanes=m,s}function Da(r,s,o,u){return r=Gn(7,r,u,s),r.lanes=o,r}function dp(r,s,o){return r=Gn(6,r,null,s),r.lanes=o,r}function pp(r,s,o){return s=Gn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Po=[],Vo=0,_h=null,vh=0,hr=[],fr=0,ka=null,Mi=1,Ni="";function Oa(r,s){Po[Vo++]=vh,Po[Vo++]=_h,_h=r,vh=s}function G_(r,s,o){hr[fr++]=Mi,hr[fr++]=Ni,hr[fr++]=ka,ka=r;var u=Mi;r=Ni;var f=32-Zt(u)-1;u&=~(1<<f),o+=1;var m=32-Zt(s)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,Mi=1<<32-Zt(s)+f|o<<f|u,Ni=m+r}else Mi=1<<m|o<<f|u,Ni=r}function mp(r){r.return!==null&&(Oa(r,1),G_(r,1,0))}function gp(r){for(;r===_h;)_h=Po[--Vo],Po[Vo]=null,vh=Po[--Vo],Po[Vo]=null;for(;r===ka;)ka=hr[--fr],hr[fr]=null,Ni=hr[--fr],hr[fr]=null,Mi=hr[--fr],hr[fr]=null}var Pn=null,Rt=null,Je=!1,Ma=null,Yr=!1,yp=Error(i(519));function Na(r){var s=Error(i(418,""));throw cu(ur(s,r)),yp}function Y_(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[$t]=r,s[Nt]=u,o){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(o=0;o<Nu.length;o++)ze(Nu[o],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":ze("invalid",s),_a(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Eo(s);break;case"select":ze("invalid",s);break;case"textarea":ze("invalid",s),va(s,u.value,u.defaultValue,u.children),Eo(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||cE(s.textContent,o)?(u.popover!=null&&(ze("beforetoggle",s),ze("toggle",s)),u.onScroll!=null&&ze("scroll",s),u.onScrollEnd!=null&&ze("scrollend",s),u.onClick!=null&&(s.onclick=Jh),s=!0):s=!1,s||Na(r)}function W_(r){for(Pn=r.return;Pn;)switch(Pn.tag){case 5:case 13:Yr=!1;return;case 27:case 3:Yr=!0;return;default:Pn=Pn.return}}function lu(r){if(r!==Pn)return!1;if(!Je)return W_(r),Je=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Mm(r.type,r.memoizedProps)),o=!o),o&&Rt&&Na(r),W_(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Rt=Tr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Rt=null}}else s===27?(s=Rt,ks(r.type)?(r=jm,jm=null,Rt=r):Rt=s):Rt=Pn?Tr(r.stateNode.nextSibling):null;return!0}function uu(){Rt=Pn=null,Je=!1}function Q_(){var r=Ma;return r!==null&&(qn===null?qn=r:qn.push.apply(qn,r),Ma=null),r}function cu(r){Ma===null?Ma=[r]:Ma.push(r)}var _p=ae(null),Pa=null,Pi=null;function gs(r,s,o){ie(_p,s._currentValue),s._currentValue=o}function Vi(r){r._currentValue=_p.current,J(_p)}function vp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function Ep(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var w=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var V=0;V<s.length;V++)if(S.context===s[V]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),vp(m.return,o,r),u||(w=null);break e}m=S.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(i(341));w.lanes|=o,m=w.alternate,m!==null&&(m.lanes|=o),vp(w,o,r),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===r){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function hu(r,s,o,u){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var S=f.type;Hn(f.pendingProps.value,w.value)||(r!==null?r.push(S):r=[S])}}else if(f===it.current){if(w=f.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(qu):r=[qu])}f=f.return}r!==null&&Ep(s,r,o,u),s.flags|=262144}function Eh(r){for(r=r.firstContext;r!==null;){if(!Hn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Va(r){Pa=r,Pi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function wn(r){return K_(Pa,r)}function bh(r,s){return Pa===null&&Va(r),K_(r,s)}function K_(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Pi===null){if(r===null)throw Error(i(308));Pi=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Pi=Pi.next=s;return o}var AA=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},RA=t.unstable_scheduleCallback,CA=t.unstable_NormalPriority,Yt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bp(){return{controller:new AA,data:new Map,refCount:0}}function fu(r){r.refCount--,r.refCount===0&&RA(CA,function(){r.controller.abort()})}var du=null,wp=0,jo=0,Lo=null;function IA(r,s){if(du===null){var o=du=[];wp=0,jo=Sm(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return wp++,s.then(X_,X_),s}function X_(){if(--wp===0&&du!==null){Lo!==null&&(Lo.status="fulfilled");var r=du;du=null,jo=0,Lo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function DA(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Z_=Y.S;Y.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&IA(r,s),Z_!==null&&Z_(r,s)};var ja=ae(null);function Tp(){var r=ja.current;return r!==null?r:mt.pooledCache}function wh(r,s){s===null?ie(ja,ja.current):ie(ja,s.pool)}function J_(){var r=Tp();return r===null?null:{parent:Yt._currentValue,pool:r}}var pu=Error(i(460)),ev=Error(i(474)),Th=Error(i(542)),Sp={then:function(){}};function tv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Sh(){}function nv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Sh,Sh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,iv(r),r;default:if(typeof s.status=="string")s.then(Sh,Sh);else{if(r=mt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,iv(r),r}throw mu=s,pu}}var mu=null;function rv(){if(mu===null)throw Error(i(459));var r=mu;return mu=null,r}function iv(r){if(r===pu||r===Th)throw Error(i(483))}var ys=!1;function xp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ap(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function _s(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function vs(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(st&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=gh(r),$_(r,null,o),s}return mh(r,u,s,o),gh(r)}function gu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,da(r,o)}}function Rp(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Cp=!1;function yu(){if(Cp){var r=Lo;if(r!==null)throw r}}function _u(r,s,o,u){Cp=!1;var f=r.updateQueue;ys=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var V=S,K=V.next;V.next=null,w===null?m=K:w.next=K,w=V;var ne=r.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==w&&(S===null?ne.firstBaseUpdate=K:S.next=K,ne.lastBaseUpdate=V))}if(m!==null){var ue=f.baseState;w=0,ne=K=V=null,S=m;do{var X=S.lane&-536870913,Z=X!==S.lane;if(Z?(We&X)===X:(u&X)===X){X!==0&&X===jo&&(Cp=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var De=r,xe=S;X=s;var ht=o;switch(xe.tag){case 1:if(De=xe.payload,typeof De=="function"){ue=De.call(ht,ue,X);break e}ue=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=xe.payload,X=typeof De=="function"?De.call(ht,ue,X):De,X==null)break e;ue=v({},ue,X);break e;case 2:ys=!0}}X=S.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(K=ne=Z,V=ue):ne=ne.next=Z,w|=X;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Z=S,S=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);ne===null&&(V=ue),f.baseState=V,f.firstBaseUpdate=K,f.lastBaseUpdate=ne,m===null&&(f.shared.lanes=0),Rs|=w,r.lanes=w,r.memoizedState=ue}}function sv(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function av(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)sv(o[r],s)}var Uo=ae(null),xh=ae(0);function ov(r,s){r=Fi,ie(xh,r),ie(Uo,s),Fi=r|s.baseLanes}function Ip(){ie(xh,Fi),ie(Uo,Uo.current)}function Dp(){Fi=xh.current,J(Uo),J(xh)}var Es=0,Ue=null,ut=null,Vt=null,Ah=!1,qo=!1,La=!1,Rh=0,vu=0,Bo=null,kA=0;function kt(){throw Error(i(321))}function kp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Hn(r[o],s[o]))return!1;return!0}function Op(r,s,o,u,f,m){return Es=m,Ue=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Y.H=r===null||r.memoizedState===null?$v:Hv,La=!1,m=o(u,f),La=!1,qo&&(m=uv(s,o,u,f)),lv(r),m}function lv(r){Y.H=Mh;var s=ut!==null&&ut.next!==null;if(Es=0,Vt=ut=Ue=null,Ah=!1,vu=0,Bo=null,s)throw Error(i(300));r===null||nn||(r=r.dependencies,r!==null&&Eh(r)&&(nn=!0))}function uv(r,s,o,u){Ue=r;var f=0;do{if(qo&&(Bo=null),vu=0,qo=!1,25<=f)throw Error(i(301));if(f+=1,Vt=ut=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=LA,m=s(o,u)}while(qo);return m}function OA(){var r=Y.H,s=r.useState()[0];return s=typeof s.then=="function"?Eu(s):s,r=r.useState()[0],(ut!==null?ut.memoizedState:null)!==r&&(Ue.flags|=1024),s}function Mp(){var r=Rh!==0;return Rh=0,r}function Np(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Pp(r){if(Ah){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ah=!1}Es=0,Vt=ut=Ue=null,qo=!1,vu=Rh=0,Bo=null}function Ln(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Ue.memoizedState=Vt=r:Vt=Vt.next=r,Vt}function jt(){if(ut===null){var r=Ue.alternate;r=r!==null?r.memoizedState:null}else r=ut.next;var s=Vt===null?Ue.memoizedState:Vt.next;if(s!==null)Vt=s,ut=r;else{if(r===null)throw Ue.alternate===null?Error(i(467)):Error(i(310));ut=r,r={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Vt===null?Ue.memoizedState=Vt=r:Vt=Vt.next=r}return Vt}function Vp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eu(r){var s=vu;return vu+=1,Bo===null&&(Bo=[]),r=nv(Bo,r,s),s=Ue,(Vt===null?s.memoizedState:Vt.next)===null&&(s=s.alternate,Y.H=s===null||s.memoizedState===null?$v:Hv),r}function Ch(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Eu(r);if(r.$$typeof===O)return wn(r)}throw Error(i(438,String(r)))}function jp(r){var s=null,o=Ue.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ue.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Vp(),Ue.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=U;return s.index++,o}function ji(r,s){return typeof s=="function"?s(r):s}function Ih(r){var s=jt();return Lp(s,ut,r)}function Lp(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,m=u.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}s.baseQueue=f=m,u.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var S=w=null,V=null,K=s,ne=!1;do{var ue=K.lane&-536870913;if(ue!==K.lane?(We&ue)===ue:(Es&ue)===ue){var X=K.revertLane;if(X===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),ue===jo&&(ne=!0);else if((Es&X)===X){K=K.next,X===jo&&(ne=!0);continue}else ue={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},V===null?(S=V=ue,w=m):V=V.next=ue,Ue.lanes|=X,Rs|=X;ue=K.action,La&&o(m,ue),m=K.hasEagerState?K.eagerState:o(m,ue)}else X={lane:ue,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},V===null?(S=V=X,w=m):V=V.next=X,Ue.lanes|=ue,Rs|=ue;K=K.next}while(K!==null&&K!==s);if(V===null?w=m:V.next=S,!Hn(m,r.memoizedState)&&(nn=!0,ne&&(o=Lo,o!==null)))throw o;r.memoizedState=m,r.baseState=w,r.baseQueue=V,u.lastRenderedState=m}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Up(r){var s=jt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=r(m,w.action),w=w.next;while(w!==f);Hn(m,s.memoizedState)||(nn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function cv(r,s,o){var u=Ue,f=jt(),m=Je;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var w=!Hn((ut||f).memoizedState,o);w&&(f.memoizedState=o,nn=!0),f=f.queue;var S=dv.bind(null,u,f,r);if(bu(2048,8,S,[r]),f.getSnapshot!==s||w||Vt!==null&&Vt.memoizedState.tag&1){if(u.flags|=2048,zo(9,Dh(),fv.bind(null,u,f,o,s),null),mt===null)throw Error(i(349));m||(Es&124)!==0||hv(u,s,o)}return o}function hv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ue.updateQueue,s===null?(s=Vp(),Ue.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function fv(r,s,o,u){s.value=o,s.getSnapshot=u,pv(s)&&mv(r)}function dv(r,s,o){return o(function(){pv(s)&&mv(r)})}function pv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Hn(r,o)}catch{return!0}}function mv(r){var s=Mo(r,2);s!==null&&Xn(s,r,2)}function qp(r){var s=Ln();if(typeof r=="function"){var o=r;if(r=o(),La){kn(!0);try{o()}finally{kn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:r},s}function gv(r,s,o,u){return r.baseState=o,Lp(r,ut,typeof u=="function"?u:ji)}function MA(r,s,o,u,f){if(Oh(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,yv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function yv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var m=Y.T,w={};Y.T=w;try{var S=o(f,u),V=Y.S;V!==null&&V(w,S),_v(r,s,S)}catch(K){Bp(r,s,K)}finally{Y.T=m}}else try{m=o(f,u),_v(r,s,m)}catch(K){Bp(r,s,K)}}function _v(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){vv(r,s,u)},function(u){return Bp(r,s,u)}):vv(r,s,o)}function vv(r,s,o){s.status="fulfilled",s.value=o,Ev(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,yv(r,o)))}function Bp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Ev(s),s=s.next;while(s!==u)}r.action=null}function Ev(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function bv(r,s){return s}function wv(r,s){if(Je){var o=mt.formState;if(o!==null){e:{var u=Ue;if(Je){if(Rt){t:{for(var f=Rt,m=Yr;f.nodeType!==8;){if(!m){f=null;break t}if(f=Tr(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Rt=Tr(f.nextSibling),u=f.data==="F!";break e}}Na(u)}u=!1}u&&(s=o[0])}}return o=Ln(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bv,lastRenderedState:s},o.queue=u,o=Bv.bind(null,Ue,u),u.dispatch=o,u=qp(!1),m=Gp.bind(null,Ue,!1,u.queue),u=Ln(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=MA.bind(null,Ue,f,m,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Tv(r){var s=jt();return Sv(s,ut,r)}function Sv(r,s,o){if(s=Lp(r,s,bv)[0],r=Ih(ji)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Eu(s)}catch(w){throw w===pu?Th:w}else u=s;s=jt();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(Ue.flags|=2048,zo(9,Dh(),NA.bind(null,f,o),null)),[u,m,r]}function NA(r,s){r.action=s}function xv(r){var s=jt(),o=ut;if(o!==null)return Sv(s,o,r);jt(),s=s.memoizedState,o=jt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function zo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ue.updateQueue,s===null&&(s=Vp(),Ue.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Dh(){return{destroy:void 0,resource:void 0}}function Av(){return jt().memoizedState}function kh(r,s,o,u){var f=Ln();u=u===void 0?null:u,Ue.flags|=r,f.memoizedState=zo(1|s,Dh(),o,u)}function bu(r,s,o,u){var f=jt();u=u===void 0?null:u;var m=f.memoizedState.inst;ut!==null&&u!==null&&kp(u,ut.memoizedState.deps)?f.memoizedState=zo(s,m,o,u):(Ue.flags|=r,f.memoizedState=zo(1|s,m,o,u))}function Rv(r,s){kh(8390656,8,r,s)}function Cv(r,s){bu(2048,8,r,s)}function Iv(r,s){return bu(4,2,r,s)}function Dv(r,s){return bu(4,4,r,s)}function kv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Ov(r,s,o){o=o!=null?o.concat([r]):null,bu(4,4,kv.bind(null,s,r),o)}function zp(){}function Mv(r,s){var o=jt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&kp(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Nv(r,s){var o=jt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&kp(s,u[1]))return u[0];if(u=r(),La){kn(!0);try{r()}finally{kn(!1)}}return o.memoizedState=[u,s],u}function Fp(r,s,o){return o===void 0||(Es&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=j0(),Ue.lanes|=r,Rs|=r,o)}function Pv(r,s,o,u){return Hn(o,s)?o:Uo.current!==null?(r=Fp(r,o,u),Hn(r,s)||(nn=!0),r):(Es&42)===0?(nn=!0,r.memoizedState=o):(r=j0(),Ue.lanes|=r,Rs|=r,s)}function Vv(r,s,o,u,f){var m=se.p;se.p=m!==0&&8>m?m:8;var w=Y.T,S={};Y.T=S,Gp(r,!1,s,o);try{var V=f(),K=Y.S;if(K!==null&&K(S,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ne=DA(V,u);wu(r,s,ne,Kn(r))}else wu(r,s,u,Kn(r))}catch(ue){wu(r,s,{then:function(){},status:"rejected",reason:ue},Kn())}finally{se.p=m,Y.T=w}}function PA(){}function $p(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=jv(r).queue;Vv(r,f,s,fe,o===null?PA:function(){return Lv(r),o(u)})}function jv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:fe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Lv(r){var s=jv(r).next.queue;wu(r,s,{},Kn())}function Hp(){return wn(qu)}function Uv(){return jt().memoizedState}function qv(){return jt().memoizedState}function VA(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Kn();r=_s(o);var u=vs(s,r,o);u!==null&&(Xn(u,s,o),gu(u,s,o)),s={cache:bp()},r.payload=s;return}s=s.return}}function jA(r,s,o){var u=Kn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(r)?zv(s,o):(o=hp(r,s,o,u),o!==null&&(Xn(o,r,u),Fv(o,s,u)))}function Bv(r,s,o){var u=Kn();wu(r,s,o,u)}function wu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(r))zv(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,S=m(w,o);if(f.hasEagerState=!0,f.eagerState=S,Hn(S,w))return mh(r,s,f,0),mt===null&&ph(),!1}catch{}finally{}if(o=hp(r,s,f,u),o!==null)return Xn(o,r,u),Fv(o,s,u),!0}return!1}function Gp(r,s,o,u){if(u={lane:2,revertLane:Sm(),action:u,hasEagerState:!1,eagerState:null,next:null},Oh(r)){if(s)throw Error(i(479))}else s=hp(r,o,u,2),s!==null&&Xn(s,r,2)}function Oh(r){var s=r.alternate;return r===Ue||s!==null&&s===Ue}function zv(r,s){qo=Ah=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function Fv(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,da(r,o)}}var Mh={readContext:wn,use:Ch,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},$v={readContext:wn,use:Ch,useCallback:function(r,s){return Ln().memoizedState=[r,s===void 0?null:s],r},useContext:wn,useEffect:Rv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,kh(4194308,4,kv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return kh(4194308,4,r,s)},useInsertionEffect:function(r,s){kh(4,2,r,s)},useMemo:function(r,s){var o=Ln();s=s===void 0?null:s;var u=r();if(La){kn(!0);try{r()}finally{kn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Ln();if(o!==void 0){var f=o(s);if(La){kn(!0);try{o(s)}finally{kn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=jA.bind(null,Ue,r),[u.memoizedState,r]},useRef:function(r){var s=Ln();return r={current:r},s.memoizedState=r},useState:function(r){r=qp(r);var s=r.queue,o=Bv.bind(null,Ue,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:zp,useDeferredValue:function(r,s){var o=Ln();return Fp(o,r,s)},useTransition:function(){var r=qp(!1);return r=Vv.bind(null,Ue,r.queue,!0,!1),Ln().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ue,f=Ln();if(Je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),mt===null)throw Error(i(349));(We&124)!==0||hv(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,Rv(dv.bind(null,u,m,r),[r]),u.flags|=2048,zo(9,Dh(),fv.bind(null,u,m,o,s),null),o},useId:function(){var r=Ln(),s=mt.identifierPrefix;if(Je){var o=Ni,u=Mi;o=(u&~(1<<32-Zt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Rh++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=kA++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Hp,useFormState:wv,useActionState:wv,useOptimistic:function(r){var s=Ln();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Gp.bind(null,Ue,!0,o),o.dispatch=s,[r,s]},useMemoCache:jp,useCacheRefresh:function(){return Ln().memoizedState=VA.bind(null,Ue)}},Hv={readContext:wn,use:Ch,useCallback:Mv,useContext:wn,useEffect:Cv,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Nv,useReducer:Ih,useRef:Av,useState:function(){return Ih(ji)},useDebugValue:zp,useDeferredValue:function(r,s){var o=jt();return Pv(o,ut.memoizedState,r,s)},useTransition:function(){var r=Ih(ji)[0],s=jt().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:cv,useId:Uv,useHostTransitionStatus:Hp,useFormState:Tv,useActionState:Tv,useOptimistic:function(r,s){var o=jt();return gv(o,ut,r,s)},useMemoCache:jp,useCacheRefresh:qv},LA={readContext:wn,use:Ch,useCallback:Mv,useContext:wn,useEffect:Cv,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Nv,useReducer:Up,useRef:Av,useState:function(){return Up(ji)},useDebugValue:zp,useDeferredValue:function(r,s){var o=jt();return ut===null?Fp(o,r,s):Pv(o,ut.memoizedState,r,s)},useTransition:function(){var r=Up(ji)[0],s=jt().memoizedState;return[typeof r=="boolean"?r:Eu(r),s]},useSyncExternalStore:cv,useId:Uv,useHostTransitionStatus:Hp,useFormState:xv,useActionState:xv,useOptimistic:function(r,s){var o=jt();return ut!==null?gv(o,ut,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:jp,useCacheRefresh:qv},Fo=null,Tu=0;function Nh(r){var s=Tu;return Tu+=1,Fo===null&&(Fo=[]),nv(Fo,r,s)}function Su(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Ph(r,s){throw s.$$typeof===b?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function Gv(r){var s=r._init;return s(r._payload)}function Yv(r){function s(G,$){if(r){var Q=G.deletions;Q===null?(G.deletions=[$],G.flags|=16):Q.push($)}}function o(G,$){if(!r)return null;for(;$!==null;)s(G,$),$=$.sibling;return null}function u(G){for(var $=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function f(G,$){return G=Oi(G,$),G.index=0,G.sibling=null,G}function m(G,$,Q){return G.index=Q,r?(Q=G.alternate,Q!==null?(Q=Q.index,Q<$?(G.flags|=67108866,$):Q):(G.flags|=67108866,$)):(G.flags|=1048576,$)}function w(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function S(G,$,Q,oe){return $===null||$.tag!==6?($=dp(Q,G.mode,oe),$.return=G,$):($=f($,Q),$.return=G,$)}function V(G,$,Q,oe){var be=Q.type;return be===N?ne(G,$,Q.props.children,oe,Q.key):$!==null&&($.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===A&&Gv(be)===$.type)?($=f($,Q.props),Su($,Q),$.return=G,$):($=yh(Q.type,Q.key,Q.props,null,G.mode,oe),Su($,Q),$.return=G,$)}function K(G,$,Q,oe){return $===null||$.tag!==4||$.stateNode.containerInfo!==Q.containerInfo||$.stateNode.implementation!==Q.implementation?($=pp(Q,G.mode,oe),$.return=G,$):($=f($,Q.children||[]),$.return=G,$)}function ne(G,$,Q,oe,be){return $===null||$.tag!==7?($=Da(Q,G.mode,oe,be),$.return=G,$):($=f($,Q),$.return=G,$)}function ue(G,$,Q){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=dp(""+$,G.mode,Q),$.return=G,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case T:return Q=yh($.type,$.key,$.props,null,G.mode,Q),Su(Q,$),Q.return=G,Q;case C:return $=pp($,G.mode,Q),$.return=G,$;case A:var oe=$._init;return $=oe($._payload),ue(G,$,Q)}if(ce($)||B($))return $=Da($,G.mode,Q,null),$.return=G,$;if(typeof $.then=="function")return ue(G,Nh($),Q);if($.$$typeof===O)return ue(G,bh(G,$),Q);Ph(G,$)}return null}function X(G,$,Q,oe){var be=$!==null?$.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return be!==null?null:S(G,$,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:return Q.key===be?V(G,$,Q,oe):null;case C:return Q.key===be?K(G,$,Q,oe):null;case A:return be=Q._init,Q=be(Q._payload),X(G,$,Q,oe)}if(ce(Q)||B(Q))return be!==null?null:ne(G,$,Q,oe,null);if(typeof Q.then=="function")return X(G,$,Nh(Q),oe);if(Q.$$typeof===O)return X(G,$,bh(G,Q),oe);Ph(G,Q)}return null}function Z(G,$,Q,oe,be){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return G=G.get(Q)||null,S($,G,""+oe,be);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case T:return G=G.get(oe.key===null?Q:oe.key)||null,V($,G,oe,be);case C:return G=G.get(oe.key===null?Q:oe.key)||null,K($,G,oe,be);case A:var qe=oe._init;return oe=qe(oe._payload),Z(G,$,Q,oe,be)}if(ce(oe)||B(oe))return G=G.get(Q)||null,ne($,G,oe,be,null);if(typeof oe.then=="function")return Z(G,$,Q,Nh(oe),be);if(oe.$$typeof===O)return Z(G,$,Q,bh($,oe),be);Ph($,oe)}return null}function De(G,$,Q,oe){for(var be=null,qe=null,we=$,Ae=$=0,sn=null;we!==null&&Ae<Q.length;Ae++){we.index>Ae?(sn=we,we=null):sn=we.sibling;var Xe=X(G,we,Q[Ae],oe);if(Xe===null){we===null&&(we=sn);break}r&&we&&Xe.alternate===null&&s(G,we),$=m(Xe,$,Ae),qe===null?be=Xe:qe.sibling=Xe,qe=Xe,we=sn}if(Ae===Q.length)return o(G,we),Je&&Oa(G,Ae),be;if(we===null){for(;Ae<Q.length;Ae++)we=ue(G,Q[Ae],oe),we!==null&&($=m(we,$,Ae),qe===null?be=we:qe.sibling=we,qe=we);return Je&&Oa(G,Ae),be}for(we=u(we);Ae<Q.length;Ae++)sn=Z(we,G,Ae,Q[Ae],oe),sn!==null&&(r&&sn.alternate!==null&&we.delete(sn.key===null?Ae:sn.key),$=m(sn,$,Ae),qe===null?be=sn:qe.sibling=sn,qe=sn);return r&&we.forEach(function(Vs){return s(G,Vs)}),Je&&Oa(G,Ae),be}function xe(G,$,Q,oe){if(Q==null)throw Error(i(151));for(var be=null,qe=null,we=$,Ae=$=0,sn=null,Xe=Q.next();we!==null&&!Xe.done;Ae++,Xe=Q.next()){we.index>Ae?(sn=we,we=null):sn=we.sibling;var Vs=X(G,we,Xe.value,oe);if(Vs===null){we===null&&(we=sn);break}r&&we&&Vs.alternate===null&&s(G,we),$=m(Vs,$,Ae),qe===null?be=Vs:qe.sibling=Vs,qe=Vs,we=sn}if(Xe.done)return o(G,we),Je&&Oa(G,Ae),be;if(we===null){for(;!Xe.done;Ae++,Xe=Q.next())Xe=ue(G,Xe.value,oe),Xe!==null&&($=m(Xe,$,Ae),qe===null?be=Xe:qe.sibling=Xe,qe=Xe);return Je&&Oa(G,Ae),be}for(we=u(we);!Xe.done;Ae++,Xe=Q.next())Xe=Z(we,G,Ae,Xe.value,oe),Xe!==null&&(r&&Xe.alternate!==null&&we.delete(Xe.key===null?Ae:Xe.key),$=m(Xe,$,Ae),qe===null?be=Xe:qe.sibling=Xe,qe=Xe);return r&&we.forEach(function(UR){return s(G,UR)}),Je&&Oa(G,Ae),be}function ht(G,$,Q,oe){if(typeof Q=="object"&&Q!==null&&Q.type===N&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case T:e:{for(var be=Q.key;$!==null;){if($.key===be){if(be=Q.type,be===N){if($.tag===7){o(G,$.sibling),oe=f($,Q.props.children),oe.return=G,G=oe;break e}}else if($.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===A&&Gv(be)===$.type){o(G,$.sibling),oe=f($,Q.props),Su(oe,Q),oe.return=G,G=oe;break e}o(G,$);break}else s(G,$);$=$.sibling}Q.type===N?(oe=Da(Q.props.children,G.mode,oe,Q.key),oe.return=G,G=oe):(oe=yh(Q.type,Q.key,Q.props,null,G.mode,oe),Su(oe,Q),oe.return=G,G=oe)}return w(G);case C:e:{for(be=Q.key;$!==null;){if($.key===be)if($.tag===4&&$.stateNode.containerInfo===Q.containerInfo&&$.stateNode.implementation===Q.implementation){o(G,$.sibling),oe=f($,Q.children||[]),oe.return=G,G=oe;break e}else{o(G,$);break}else s(G,$);$=$.sibling}oe=pp(Q,G.mode,oe),oe.return=G,G=oe}return w(G);case A:return be=Q._init,Q=be(Q._payload),ht(G,$,Q,oe)}if(ce(Q))return De(G,$,Q,oe);if(B(Q)){if(be=B(Q),typeof be!="function")throw Error(i(150));return Q=be.call(Q),xe(G,$,Q,oe)}if(typeof Q.then=="function")return ht(G,$,Nh(Q),oe);if(Q.$$typeof===O)return ht(G,$,bh(G,Q),oe);Ph(G,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,$!==null&&$.tag===6?(o(G,$.sibling),oe=f($,Q),oe.return=G,G=oe):(o(G,$),oe=dp(Q,G.mode,oe),oe.return=G,G=oe),w(G)):o(G,$)}return function(G,$,Q,oe){try{Tu=0;var be=ht(G,$,Q,oe);return Fo=null,be}catch(we){if(we===pu||we===Th)throw we;var qe=Gn(29,we,null,G.mode);return qe.lanes=oe,qe.return=G,qe}finally{}}}var $o=Yv(!0),Wv=Yv(!1),dr=ae(null),Wr=null;function bs(r){var s=r.alternate;ie(Wt,Wt.current&1),ie(dr,r),Wr===null&&(s===null||Uo.current!==null||s.memoizedState!==null)&&(Wr=r)}function Qv(r){if(r.tag===22){if(ie(Wt,Wt.current),ie(dr,r),Wr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Wr=r)}}else ws()}function ws(){ie(Wt,Wt.current),ie(dr,dr.current)}function Li(r){J(dr),Wr===r&&(Wr=null),J(Wt)}var Wt=ae(0);function Vh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Vm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Yp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:v({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Wp={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Kn(),f=_s(u);f.payload=s,o!=null&&(f.callback=o),s=vs(r,f,u),s!==null&&(Xn(s,r,u),gu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Kn(),f=_s(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=vs(r,f,u),s!==null&&(Xn(s,r,u),gu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Kn(),u=_s(o);u.tag=2,s!=null&&(u.callback=s),s=vs(r,u,o),s!==null&&(Xn(s,r,o),gu(s,r,o))}};function Kv(r,s,o,u,f,m,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,w):s.prototype&&s.prototype.isPureReactComponent?!au(o,u)||!au(f,m):!0}function Xv(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Wp.enqueueReplaceState(s,s.state,null)}function Ua(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=v({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var jh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Zv(r){jh(r)}function Jv(r){console.error(r)}function e0(r){jh(r)}function Lh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function t0(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Qp(r,s,o){return o=_s(o),o.tag=3,o.payload={element:null},o.callback=function(){Lh(r,s)},o}function n0(r){return r=_s(r),r.tag=3,r}function r0(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;r.payload=function(){return f(m)},r.callback=function(){t0(s,o,u)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(r.callback=function(){t0(s,o,u),typeof f!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function UA(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&hu(s,o,f,!0),o=dr.current,o!==null){switch(o.tag){case 13:return Wr===null?vm():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Sp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),bm(r,u,f)),!1;case 22:return o.flags|=65536,u===Sp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),bm(r,u,f)),!1}throw Error(i(435,o.tag))}return bm(r,u,f),vm(),!1}if(Je)return s=dr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==yp&&(r=Error(i(422),{cause:u}),cu(ur(r,o)))):(u!==yp&&(s=Error(i(423),{cause:u}),cu(ur(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=ur(u,o),f=Qp(r.stateNode,u,f),Rp(r,f),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:u});if(m=ur(m,o),ku===null?ku=[m]:ku.push(m),Ct!==4&&(Ct=2),s===null)return!0;u=ur(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Qp(o.stateNode,u,r),Rp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Cs===null||!Cs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=n0(f),r0(f,r,o,u),Rp(o,f),!1}o=o.return}while(o!==null);return!1}var i0=Error(i(461)),nn=!1;function pn(r,s,o,u){s.child=r===null?Wv(s,null,o,u):$o(s,r.child,o,u)}function s0(r,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var w={};for(var S in u)S!=="ref"&&(w[S]=u[S])}else w=u;return Va(s),u=Op(r,s,o,w,m,f),S=Mp(),r!==null&&!nn?(Np(r,s,f),Ui(r,s,f)):(Je&&S&&mp(s),s.flags|=1,pn(r,s,u,f),s.child)}function a0(r,s,o,u,f){if(r===null){var m=o.type;return typeof m=="function"&&!fp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,o0(r,s,m,u,f)):(r=yh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!rm(r,f)){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:au,o(w,u)&&r.ref===s.ref)return Ui(r,s,f)}return s.flags|=1,r=Oi(m,u),r.ref=s.ref,r.return=s,s.child=r}function o0(r,s,o,u,f){if(r!==null){var m=r.memoizedProps;if(au(m,u)&&r.ref===s.ref)if(nn=!1,s.pendingProps=u=m,rm(r,f))(r.flags&131072)!==0&&(nn=!0);else return s.lanes=r.lanes,Ui(r,s,f)}return Kp(r,s,o,u,f)}function l0(r,s,o){var u=s.pendingProps,f=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return u0(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&wh(s,m!==null?m.cachePool:null),m!==null?ov(s,m):Ip(),Qv(s);else return s.lanes=s.childLanes=536870912,u0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(wh(s,m.cachePool),ov(s,m),ws(),s.memoizedState=null):(r!==null&&wh(s,null),Ip(),ws());return pn(r,s,f,o),s.child}function u0(r,s,o,u){var f=Tp();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&wh(s,null),Ip(),Qv(s),r!==null&&hu(r,s,u,!0),null}function Uh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Kp(r,s,o,u,f){return Va(s),o=Op(r,s,o,u,void 0,f),u=Mp(),r!==null&&!nn?(Np(r,s,f),Ui(r,s,f)):(Je&&u&&mp(s),s.flags|=1,pn(r,s,o,f),s.child)}function c0(r,s,o,u,f,m){return Va(s),s.updateQueue=null,o=uv(s,u,o,f),lv(r),u=Mp(),r!==null&&!nn?(Np(r,s,m),Ui(r,s,m)):(Je&&u&&mp(s),s.flags|=1,pn(r,s,o,m),s.child)}function h0(r,s,o,u,f){if(Va(s),s.stateNode===null){var m=No,w=o.contextType;typeof w=="object"&&w!==null&&(m=wn(w)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},xp(s),w=o.contextType,m.context=typeof w=="object"&&w!==null?wn(w):No,m.state=s.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(Yp(s,o,w,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Wp.enqueueReplaceState(m,m.state,null),_u(s,u,m,f),yu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){m=s.stateNode;var S=s.memoizedProps,V=Ua(o,S);m.props=V;var K=m.context,ne=o.contextType;w=No,typeof ne=="object"&&ne!==null&&(w=wn(ne));var ue=o.getDerivedStateFromProps;ne=typeof ue=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,ne||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||K!==w)&&Xv(s,m,u,w),ys=!1;var X=s.memoizedState;m.state=X,_u(s,u,m,f),yu(),K=s.memoizedState,S||X!==K||ys?(typeof ue=="function"&&(Yp(s,o,ue,u),K=s.memoizedState),(V=ys||Kv(s,o,V,u,X,K,w))?(ne||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=K),m.props=u,m.state=K,m.context=w,u=V):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Ap(r,s),w=s.memoizedProps,ne=Ua(o,w),m.props=ne,ue=s.pendingProps,X=m.context,K=o.contextType,V=No,typeof K=="object"&&K!==null&&(V=wn(K)),S=o.getDerivedStateFromProps,(K=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==ue||X!==V)&&Xv(s,m,u,V),ys=!1,X=s.memoizedState,m.state=X,_u(s,u,m,f),yu();var Z=s.memoizedState;w!==ue||X!==Z||ys||r!==null&&r.dependencies!==null&&Eh(r.dependencies)?(typeof S=="function"&&(Yp(s,o,S,u),Z=s.memoizedState),(ne=ys||Kv(s,o,ne,u,X,Z,V)||r!==null&&r.dependencies!==null&&Eh(r.dependencies))?(K||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Z,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Z,V)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Z),m.props=u,m.state=Z,m.context=V,u=ne):(typeof m.componentDidUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),u=!1)}return m=u,Uh(r,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&u?(s.child=$o(s,r.child,null,f),s.child=$o(s,null,o,f)):pn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Ui(r,s,f),r}function f0(r,s,o,u){return uu(),s.flags|=256,pn(r,s,o,u),s.child}var Xp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zp(r){return{baseLanes:r,cachePool:J_()}}function Jp(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=pr),r}function d0(r,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,w;if((w=m)||(w=r!==null&&r.memoizedState===null?!1:(Wt.current&2)!==0),w&&(f=!0,s.flags&=-129),w=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(f?bs(s):ws(),Je){var S=Rt,V;if(V=S){e:{for(V=S,S=Yr;V.nodeType!==8;){if(!S){S=null;break e}if(V=Tr(V.nextSibling),V===null){S=null;break e}}S=V}S!==null?(s.memoizedState={dehydrated:S,treeContext:ka!==null?{id:Mi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},V=Gn(18,null,null,0),V.stateNode=S,V.return=s,s.child=V,Pn=s,Rt=null,V=!0):V=!1}V||Na(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Vm(S)?s.lanes=32:s.lanes=536870912,null;Li(s)}return S=u.children,u=u.fallback,f?(ws(),f=s.mode,S=qh({mode:"hidden",children:S},f),u=Da(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Zp(o),f.childLanes=Jp(r,w,o),s.memoizedState=Xp,u):(bs(s),em(s,S))}if(V=r.memoizedState,V!==null&&(S=V.dehydrated,S!==null)){if(m)s.flags&256?(bs(s),s.flags&=-257,s=tm(r,s,o)):s.memoizedState!==null?(ws(),s.child=r.child,s.flags|=128,s=null):(ws(),f=u.fallback,S=s.mode,u=qh({mode:"visible",children:u.children},S),f=Da(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,$o(s,r.child,null,o),u=s.child,u.memoizedState=Zp(o),u.childLanes=Jp(r,w,o),s.memoizedState=Xp,s=f);else if(bs(s),Vm(S)){if(w=S.nextSibling&&S.nextSibling.dataset,w)var K=w.dgst;w=K,u=Error(i(419)),u.stack="",u.digest=w,cu({value:u,source:null,stack:null}),s=tm(r,s,o)}else if(nn||hu(r,s,o,!1),w=(o&r.childLanes)!==0,nn||w){if(w=mt,w!==null&&(u=o&-o,u=(u&42)!==0?1:Vr(u),u=(u&(w.suspendedLanes|o))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Mo(r,u),Xn(w,r,u),i0;S.data==="$?"||vm(),s=tm(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=V.treeContext,Rt=Tr(S.nextSibling),Pn=s,Je=!0,Ma=null,Yr=!1,r!==null&&(hr[fr++]=Mi,hr[fr++]=Ni,hr[fr++]=ka,Mi=r.id,Ni=r.overflow,ka=s),s=em(s,u.children),s.flags|=4096);return s}return f?(ws(),f=u.fallback,S=s.mode,V=r.child,K=V.sibling,u=Oi(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,K!==null?f=Oi(K,f):(f=Da(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=Zp(o):(V=S.cachePool,V!==null?(K=Yt._currentValue,V=V.parent!==K?{parent:K,pool:K}:V):V=J_(),S={baseLanes:S.baseLanes|o,cachePool:V}),f.memoizedState=S,f.childLanes=Jp(r,w,o),s.memoizedState=Xp,u):(bs(s),o=r.child,r=o.sibling,o=Oi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(w=s.deletions,w===null?(s.deletions=[r],s.flags|=16):w.push(r)),s.child=o,s.memoizedState=null,o)}function em(r,s){return s=qh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function qh(r,s){return r=Gn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function tm(r,s,o){return $o(s,r.child,null,o),r=em(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function p0(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),vp(r.return,s,o)}function nm(r,s,o,u,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function m0(r,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(pn(r,s,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&p0(r,o,s);else if(r.tag===19)p0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ie(Wt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Vh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),nm(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Vh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}nm(s,!0,o,null,m);break;case"together":nm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ui(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),Rs|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(hu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Oi(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Oi(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function rm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Eh(r)))}function qA(r,s,o){switch(s.tag){case 3:Le(s,s.stateNode.containerInfo),gs(s,Yt,r.memoizedState.cache),uu();break;case 27:case 5:Vn(s);break;case 4:Le(s,s.stateNode.containerInfo);break;case 10:gs(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(bs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?d0(r,s,o):(bs(s),r=Ui(r,s,o),r!==null?r.sibling:null);bs(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(hu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return m0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Wt,Wt.current),u)break;return null;case 22:case 23:return s.lanes=0,l0(r,s,o);case 24:gs(s,Yt,r.memoizedState.cache)}return Ui(r,s,o)}function g0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)nn=!0;else{if(!rm(r,o)&&(s.flags&128)===0)return nn=!1,qA(r,s,o);nn=(r.flags&131072)!==0}else nn=!1,Je&&(s.flags&1048576)!==0&&G_(s,vh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")fp(u)?(r=Ua(u,r),s.tag=1,s=h0(null,s,u,r,o)):(s.tag=0,s=Kp(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===te){s.tag=11,s=s0(null,s,u,r,o);break e}else if(f===R){s.tag=14,s=a0(null,s,u,r,o);break e}}throw s=Me(u)||u,Error(i(306,s,""))}}return s;case 0:return Kp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Ua(u,s.pendingProps),h0(r,s,u,f,o);case 3:e:{if(Le(s,s.stateNode.containerInfo),r===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;f=m.element,Ap(r,s),_u(s,u,null,o);var w=s.memoizedState;if(u=w.cache,gs(s,Yt,u),u!==m.cache&&Ep(s,[Yt],o,!0),yu(),u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=f0(r,s,u,o);break e}else if(u!==f){f=ur(Error(i(424)),s),cu(f),s=f0(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Rt=Tr(r.firstChild),Pn=s,Je=!0,Ma=null,Yr=!0,o=Wv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(uu(),u===f){s=Ui(r,s,o);break e}pn(r,s,u,o)}s=s.child}return s;case 26:return Uh(r,s),r===null?(o=EE(s.type,null,s.pendingProps,null))?s.memoizedState=o:Je||(o=s.type,r=s.pendingProps,u=ef(ge.current).createElement(o),u[$t]=s,u[Nt]=r,gn(u,o,r),Dt(u),s.stateNode=u):s.memoizedState=EE(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Vn(s),r===null&&Je&&(u=s.stateNode=yE(s.type,s.pendingProps,ge.current),Pn=s,Yr=!0,f=Rt,ks(s.type)?(jm=f,Rt=Tr(u.firstChild)):Rt=f),pn(r,s,s.pendingProps.children,o),Uh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((f=u=Rt)&&(u=pR(u,s.type,s.pendingProps,Yr),u!==null?(s.stateNode=u,Pn=s,Rt=Tr(u.firstChild),Yr=!1,f=!0):f=!1),f||Na(s)),Vn(s),f=s.type,m=s.pendingProps,w=r!==null?r.memoizedProps:null,u=m.children,Mm(f,m)?u=null:w!==null&&Mm(f,w)&&(s.flags|=32),s.memoizedState!==null&&(f=Op(r,s,OA,null,null,o),qu._currentValue=f),Uh(r,s),pn(r,s,u,o),s.child;case 6:return r===null&&Je&&((r=o=Rt)&&(o=mR(o,s.pendingProps,Yr),o!==null?(s.stateNode=o,Pn=s,Rt=null,r=!0):r=!1),r||Na(s)),null;case 13:return d0(r,s,o);case 4:return Le(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=$o(s,null,u,o):pn(r,s,u,o),s.child;case 11:return s0(r,s,s.type,s.pendingProps,o);case 7:return pn(r,s,s.pendingProps,o),s.child;case 8:return pn(r,s,s.pendingProps.children,o),s.child;case 12:return pn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,gs(s,s.type,u.value),pn(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Va(s),f=wn(f),u=u(f),s.flags|=1,pn(r,s,u,o),s.child;case 14:return a0(r,s,s.type,s.pendingProps,o);case 15:return o0(r,s,s.type,s.pendingProps,o);case 19:return m0(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=qh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Oi(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return l0(r,s,o);case 24:return Va(s),u=wn(Yt),r===null?(f=Tp(),f===null&&(f=mt,m=bp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},xp(s),gs(s,Yt,f)):((r.lanes&o)!==0&&(Ap(r,s),_u(s,null,null,o),yu()),f=r.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),gs(s,Yt,u)):(u=m.cache,gs(s,Yt,u),u!==f.cache&&Ep(s,[Yt],o,!0))),pn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function qi(r){r.flags|=4}function y0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!xE(s)){if(s=dr.current,s!==null&&((We&4194048)===We?Wr!==null:(We&62914560)!==We&&(We&536870912)===0||s!==Wr))throw mu=Sp,ev;r.flags|=8192}}function Bh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?et():536870912,r.lanes|=s,Wo|=s)}function xu(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function St(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function BA(r,s,o){var u=s.pendingProps;switch(gp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(s),null;case 1:return St(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Vi(Yt),yt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(lu(s)?qi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Q_())),St(s),null;case 26:return o=s.memoizedState,r===null?(qi(s),o!==null?(St(s),y0(s,o)):(St(s),s.flags&=-16777217)):o?o!==r.memoizedState?(qi(s),St(s),y0(s,o)):(St(s),s.flags&=-16777217):(r.memoizedProps!==u&&qi(s),St(s),s.flags&=-16777217),null;case 27:bn(s),o=ge.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return St(s),null}r=de.current,lu(s)?Y_(s):(r=yE(f,u,o),s.stateNode=r,qi(s))}return St(s),null;case 5:if(bn(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&qi(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return St(s),null}if(r=de.current,lu(s))Y_(s);else{switch(f=ef(ge.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[$t]=s,r[Nt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(gn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&qi(s)}}return St(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&qi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=ge.current,lu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[$t]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||cE(r.nodeValue,o)),r||Na(s)}else r=ef(r).createTextNode(u),r[$t]=s,s.stateNode=r}return St(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=lu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[$t]=s}else uu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;St(s),f=!1}else f=Q_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Li(s),s):(Li(s),null)}if(Li(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Bh(s,s.updateQueue),St(s),null;case 4:return yt(),r===null&&Cm(s.stateNode.containerInfo),St(s),null;case 10:return Vi(s.type),St(s),null;case 19:if(J(Wt),f=s.memoizedState,f===null)return St(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)xu(f,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=Vh(r),m!==null){for(s.flags|=128,xu(f,!1),r=m.updateQueue,s.updateQueue=r,Bh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)H_(o,r),o=o.sibling;return ie(Wt,Wt.current&1|2),s.child}r=r.sibling}f.tail!==null&&jn()>$h&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304)}else{if(!u)if(r=Vh(m),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Bh(s,r),xu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Je)return St(s),null}else 2*jn()-f.renderingStartTime>$h&&o!==536870912&&(s.flags|=128,u=!0,xu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=jn(),s.sibling=null,r=Wt.current,ie(Wt,u?r&1|2:r&1),s):(St(s),null);case 22:case 23:return Li(s),Dp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(St(s),s.subtreeFlags&6&&(s.flags|=8192)):St(s),o=s.updateQueue,o!==null&&Bh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&J(ja),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Vi(Yt),St(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function zA(r,s){switch(gp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Vi(Yt),yt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return bn(s),null;case 13:if(Li(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));uu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return J(Wt),null;case 4:return yt(),null;case 10:return Vi(s.type),null;case 22:case 23:return Li(s),Dp(),r!==null&&J(ja),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Vi(Yt),null;case 25:return null;default:return null}}function _0(r,s){switch(gp(s),s.tag){case 3:Vi(Yt),yt();break;case 26:case 27:case 5:bn(s);break;case 4:yt();break;case 13:Li(s);break;case 19:J(Wt);break;case 10:Vi(s.type);break;case 22:case 23:Li(s),Dp(),r!==null&&J(ja);break;case 24:Vi(Yt)}}function Au(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var m=o.create,w=o.inst;u=m(),w.destroy=u}o=o.next}while(o!==f)}}catch(S){dt(s,s.return,S)}}function Ts(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&r)===r){var w=u.inst,S=w.destroy;if(S!==void 0){w.destroy=void 0,f=s;var V=o,K=S;try{K()}catch(ne){dt(f,V,ne)}}}u=u.next}while(u!==m)}}catch(ne){dt(s,s.return,ne)}}function v0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{av(s,o)}catch(u){dt(r,r.return,u)}}}function E0(r,s,o){o.props=Ua(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){dt(r,s,u)}}function Ru(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){dt(r,s,f)}}function Qr(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){dt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(r,s,f)}else o.current=null}function b0(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){dt(r,r.return,f)}}function im(r,s,o){try{var u=r.stateNode;uR(u,r.type,o,s),u[Nt]=s}catch(f){dt(r,r.return,f)}}function w0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ks(r.type)||r.tag===4}function sm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||w0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ks(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function am(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Jh));else if(u!==4&&(u===27&&ks(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(am(r,s,o),r=r.sibling;r!==null;)am(r,s,o),r=r.sibling}function zh(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&ks(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(zh(r,s,o),r=r.sibling;r!==null;)zh(r,s,o),r=r.sibling}function T0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);gn(s,u,o),s[$t]=r,s[Nt]=o}catch(m){dt(r,r.return,m)}}var Bi=!1,Ot=!1,om=!1,S0=typeof WeakSet=="function"?WeakSet:Set,rn=null;function FA(r,s){if(r=r.containerInfo,km=of,r=P_(r),sp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,S=-1,V=-1,K=0,ne=0,ue=r,X=null;t:for(;;){for(var Z;ue!==o||f!==0&&ue.nodeType!==3||(S=w+f),ue!==m||u!==0&&ue.nodeType!==3||(V=w+u),ue.nodeType===3&&(w+=ue.nodeValue.length),(Z=ue.firstChild)!==null;)X=ue,ue=Z;for(;;){if(ue===r)break t;if(X===o&&++K===f&&(S=w),X===m&&++ne===u&&(V=w),(Z=ue.nextSibling)!==null)break;ue=X,X=ue.parentNode}ue=Z}o=S===-1||V===-1?null:{start:S,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Om={focusedElem:r,selectionRange:o},of=!1,rn=s;rn!==null;)if(s=rn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,rn=r;else for(;rn!==null;){switch(s=rn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var De=Ua(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(De,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(xe){dt(o,o.return,xe)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Pm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Pm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,rn=r;break}rn=s.return}}function x0(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ss(r,o),u&4&&Au(5,o);break;case 1:if(Ss(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(w){dt(o,o.return,w)}else{var f=Ua(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(w){dt(o,o.return,w)}}u&64&&v0(o),u&512&&Ru(o,o.return);break;case 3:if(Ss(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{av(r,s)}catch(w){dt(o,o.return,w)}}break;case 27:s===null&&u&4&&T0(o);case 26:case 5:Ss(r,o),s===null&&u&4&&b0(o),u&512&&Ru(o,o.return);break;case 12:Ss(r,o);break;case 13:Ss(r,o),u&4&&C0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=ZA.bind(null,o),gR(r,o))));break;case 22:if(u=o.memoizedState!==null||Bi,!u){s=s!==null&&s.memoizedState!==null||Ot,f=Bi;var m=Ot;Bi=u,(Ot=s)&&!m?xs(r,o,(o.subtreeFlags&8772)!==0):Ss(r,o),Bi=f,Ot=m}break;case 30:break;default:Ss(r,o)}}function A0(r){var s=r.alternate;s!==null&&(r.alternate=null,A0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&fs(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var bt=null,Un=!1;function zi(r,s,o){for(o=o.child;o!==null;)R0(r,s,o),o=o.sibling}function R0(r,s,o){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(vt,o)}catch{}switch(o.tag){case 26:Ot||Qr(o,s),zi(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||Qr(o,s);var u=bt,f=Un;ks(o.type)&&(bt=o.stateNode,Un=!1),zi(r,s,o),Vu(o.stateNode),bt=u,Un=f;break;case 5:Ot||Qr(o,s);case 6:if(u=bt,f=Un,bt=null,zi(r,s,o),bt=u,Un=f,bt!==null)if(Un)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(o.stateNode)}catch(m){dt(o,s,m)}else try{bt.removeChild(o.stateNode)}catch(m){dt(o,s,m)}break;case 18:bt!==null&&(Un?(r=bt,mE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),$u(r)):mE(bt,o.stateNode));break;case 4:u=bt,f=Un,bt=o.stateNode.containerInfo,Un=!0,zi(r,s,o),bt=u,Un=f;break;case 0:case 11:case 14:case 15:Ot||Ts(2,o,s),Ot||Ts(4,o,s),zi(r,s,o);break;case 1:Ot||(Qr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&E0(o,s,u)),zi(r,s,o);break;case 21:zi(r,s,o);break;case 22:Ot=(u=Ot)||o.memoizedState!==null,zi(r,s,o),Ot=u;break;default:zi(r,s,o)}}function C0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{$u(r)}catch(o){dt(s,s.return,o)}}function $A(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new S0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new S0),s;default:throw Error(i(435,r.tag))}}function lm(r,s){var o=$A(r);s.forEach(function(u){var f=JA.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Yn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=r,w=s,S=w;e:for(;S!==null;){switch(S.tag){case 27:if(ks(S.type)){bt=S.stateNode,Un=!1;break e}break;case 5:bt=S.stateNode,Un=!1;break e;case 3:case 4:bt=S.stateNode.containerInfo,Un=!0;break e}S=S.return}if(bt===null)throw Error(i(160));R0(m,w,f),bt=null,Un=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)I0(s,r),s=s.sibling}var wr=null;function I0(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Yn(s,r),Wn(r),u&4&&(Ts(3,r,r.return),Au(3,r),Ts(5,r,r.return));break;case 1:Yn(s,r),Wn(r),u&512&&(Ot||o===null||Qr(o,o.return)),u&64&&Bi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=wr;if(Yn(s,r),Wn(r),u&512&&(Ot||o===null||Qr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[pa]||m[$t]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),gn(m,u,o),m[$t]=r,Dt(m),u=m;break e;case"link":var w=TE("link","href",f).get(u+(o.href||""));if(w){for(var S=0;S<w.length;S++)if(m=w[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(S,1);break t}}m=f.createElement(u),gn(m,u,o),f.head.appendChild(m);break;case"meta":if(w=TE("meta","content",f).get(u+(o.content||""))){for(S=0;S<w.length;S++)if(m=w[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(S,1);break t}}m=f.createElement(u),gn(m,u,o),f.head.appendChild(m);break;default:throw Error(i(468,u))}m[$t]=r,Dt(m),u=m}r.stateNode=u}else SE(f,r.type,r.stateNode);else r.stateNode=wE(f,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?SE(f,r.type,r.stateNode):wE(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&im(r,r.memoizedProps,o.memoizedProps)}break;case 27:Yn(s,r),Wn(r),u&512&&(Ot||o===null||Qr(o,o.return)),o!==null&&u&4&&im(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Yn(s,r),Wn(r),u&512&&(Ot||o===null||Qr(o,o.return)),r.flags&32){f=r.stateNode;try{sr(f,"")}catch(Z){dt(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,im(r,f,o!==null?o.memoizedProps:f)),u&1024&&(om=!0);break;case 6:if(Yn(s,r),Wn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){dt(r,r.return,Z)}}break;case 3:if(rf=null,f=wr,wr=tf(s.containerInfo),Yn(s,r),wr=f,Wn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$u(s.containerInfo)}catch(Z){dt(r,r.return,Z)}om&&(om=!1,D0(r));break;case 4:u=wr,wr=tf(r.stateNode.containerInfo),Yn(s,r),Wn(r),wr=u;break;case 12:Yn(s,r),Wn(r);break;case 13:Yn(s,r),Wn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(pm=jn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,lm(r,u)));break;case 22:f=r.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,K=Bi,ne=Ot;if(Bi=K||f,Ot=ne||V,Yn(s,r),Ot=ne,Bi=K,Wn(r),u&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||V||Bi||Ot||qa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){V=o=s;try{if(m=V.stateNode,f)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{S=V.stateNode;var ue=V.memoizedProps.style,X=ue!=null&&ue.hasOwnProperty("display")?ue.display:null;S.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){dt(V,V.return,Z)}}}else if(s.tag===6){if(o===null){V=s;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Z){dt(V,V.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,lm(r,o))));break;case 19:Yn(s,r),Wn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,lm(r,u)));break;case 30:break;case 21:break;default:Yn(s,r),Wn(r)}}function Wn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(w0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=sm(r);zh(r,m,f);break;case 5:var w=o.stateNode;o.flags&32&&(sr(w,""),o.flags&=-33);var S=sm(r);zh(r,S,w);break;case 3:case 4:var V=o.stateNode.containerInfo,K=sm(r);am(r,K,V);break;default:throw Error(i(161))}}catch(ne){dt(r,r.return,ne)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function D0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;D0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ss(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)x0(r,s.alternate,s),s=s.sibling}function qa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Ts(4,s,s.return),qa(s);break;case 1:Qr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&E0(s,s.return,o),qa(s);break;case 27:Vu(s.stateNode);case 26:case 5:Qr(s,s.return),qa(s);break;case 22:s.memoizedState===null&&qa(s);break;case 30:qa(s);break;default:qa(s)}r=r.sibling}}function xs(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,m=s,w=m.flags;switch(m.tag){case 0:case 11:case 15:xs(f,m,o),Au(4,m);break;case 1:if(xs(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(K){dt(u,u.return,K)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)sv(V[f],S)}catch(K){dt(u,u.return,K)}}o&&w&64&&v0(m),Ru(m,m.return);break;case 27:T0(m);case 26:case 5:xs(f,m,o),o&&u===null&&w&4&&b0(m),Ru(m,m.return);break;case 12:xs(f,m,o);break;case 13:xs(f,m,o),o&&w&4&&C0(f,m);break;case 22:m.memoizedState===null&&xs(f,m,o),Ru(m,m.return);break;case 30:break;default:xs(f,m,o)}s=s.sibling}}function um(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&fu(o))}function cm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r))}function Kr(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)k0(r,s,o,u),s=s.sibling}function k0(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Kr(r,s,o,u),f&2048&&Au(9,s);break;case 1:Kr(r,s,o,u);break;case 3:Kr(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&fu(r)));break;case 12:if(f&2048){Kr(r,s,o,u),r=s.stateNode;try{var m=s.memoizedProps,w=m.id,S=m.onPostCommit;typeof S=="function"&&S(w,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(V){dt(s,s.return,V)}}else Kr(r,s,o,u);break;case 13:Kr(r,s,o,u);break;case 23:break;case 22:m=s.stateNode,w=s.alternate,s.memoizedState!==null?m._visibility&2?Kr(r,s,o,u):Cu(r,s):m._visibility&2?Kr(r,s,o,u):(m._visibility|=2,Ho(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&um(w,s);break;case 24:Kr(r,s,o,u),f&2048&&cm(s.alternate,s);break;default:Kr(r,s,o,u)}}function Ho(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,w=s,S=o,V=u,K=w.flags;switch(w.tag){case 0:case 11:case 15:Ho(m,w,S,V,f),Au(8,w);break;case 23:break;case 22:var ne=w.stateNode;w.memoizedState!==null?ne._visibility&2?Ho(m,w,S,V,f):Cu(m,w):(ne._visibility|=2,Ho(m,w,S,V,f)),f&&K&2048&&um(w.alternate,w);break;case 24:Ho(m,w,S,V,f),f&&K&2048&&cm(w.alternate,w);break;default:Ho(m,w,S,V,f)}s=s.sibling}}function Cu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:Cu(o,u),f&2048&&um(u.alternate,u);break;case 24:Cu(o,u),f&2048&&cm(u.alternate,u);break;default:Cu(o,u)}s=s.sibling}}var Iu=8192;function Go(r){if(r.subtreeFlags&Iu)for(r=r.child;r!==null;)O0(r),r=r.sibling}function O0(r){switch(r.tag){case 26:Go(r),r.flags&Iu&&r.memoizedState!==null&&IR(wr,r.memoizedState,r.memoizedProps);break;case 5:Go(r);break;case 3:case 4:var s=wr;wr=tf(r.stateNode.containerInfo),Go(r),wr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Iu,Iu=16777216,Go(r),Iu=s):Go(r));break;default:Go(r)}}function M0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Du(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];rn=u,P0(u,r)}M0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)N0(r),r=r.sibling}function N0(r){switch(r.tag){case 0:case 11:case 15:Du(r),r.flags&2048&&Ts(9,r,r.return);break;case 3:Du(r);break;case 12:Du(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Fh(r)):Du(r);break;default:Du(r)}}function Fh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];rn=u,P0(u,r)}M0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Ts(8,s,s.return),Fh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Fh(s));break;default:Fh(s)}r=r.sibling}}function P0(r,s){for(;rn!==null;){var o=rn;switch(o.tag){case 0:case 11:case 15:Ts(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:fu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,rn=u;else e:for(o=r;rn!==null;){u=rn;var f=u.sibling,m=u.return;if(A0(u),u===o){rn=null;break e}if(f!==null){f.return=m,rn=f;break e}rn=m}}}var HA={getCacheForType:function(r){var s=wn(Yt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},GA=typeof WeakMap=="function"?WeakMap:Map,st=0,mt=null,Be=null,We=0,at=0,Qn=null,As=!1,Yo=!1,hm=!1,Fi=0,Ct=0,Rs=0,Ba=0,fm=0,pr=0,Wo=0,ku=null,qn=null,dm=!1,pm=0,$h=1/0,Hh=null,Cs=null,mn=0,Is=null,Qo=null,Ko=0,mm=0,gm=null,V0=null,Ou=0,ym=null;function Kn(){if((st&2)!==0&&We!==0)return We&-We;if(Y.T!==null){var r=jo;return r!==0?r:Sm()}return rr()}function j0(){pr===0&&(pr=(We&536870912)===0||Je?Ne():536870912);var r=dr.current;return r!==null&&(r.flags|=32),pr}function Xn(r,s,o){(r===mt&&(at===2||at===9)||r.cancelPendingCommit!==null)&&(Xo(r,0),Ds(r,We,pr,!1)),Ke(r,o),((st&2)===0||r!==mt)&&(r===mt&&((st&2)===0&&(Ba|=o),Ct===4&&Ds(r,We,pr,!1)),Xr(r))}function L0(r,s,o){if((st&6)!==0)throw Error(i(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||bi(r,s),f=u?QA(r,s):Em(r,s,!0),m=u;do{if(f===0){Yo&&!u&&Ds(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!YA(o)){f=Em(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){s=w;e:{var S=r;f=ku;var V=S.current.memoizedState.isDehydrated;if(V&&(Xo(S,w).flags|=256),w=Em(S,w,!1),w!==2){if(hm&&!V){S.errorRecoveryDisabledLanes|=m,Ba|=m,f=4;break e}m=qn,qn=f,m!==null&&(qn===null?qn=m:qn.push.apply(qn,m))}f=w}if(m=!1,f!==2)continue}}if(f===1){Xo(r,0),Ds(r,s,0,!0);break}e:{switch(u=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Ds(u,s,pr,!As);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=pm+300-jn(),10<f)){if(Ds(u,s,pr,!As),Ei(u,0,!0)!==0)break e;u.timeoutHandle=dE(U0.bind(null,u,o,qn,Hh,dm,s,pr,Ba,Wo,As,m,2,-0,0),f);break e}U0(u,o,qn,Hh,dm,s,pr,Ba,Wo,As,m,0,-0,0)}}break}while(!0);Xr(r)}function U0(r,s,o,u,f,m,w,S,V,K,ne,ue,X,Z){if(r.timeoutHandle=-1,ue=s.subtreeFlags,(ue&8192||(ue&16785408)===16785408)&&(Uu={stylesheets:null,count:0,unsuspend:CR},O0(s),ue=DR(),ue!==null)){r.cancelPendingCommit=ue(G0.bind(null,r,s,m,o,u,f,w,S,V,ne,1,X,Z)),Ds(r,m,w,!K);return}G0(r,s,m,o,u,f,w,S,V)}function YA(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ds(r,s,o,u){s&=~fm,s&=~Ba,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var m=31-Zt(f),w=1<<m;u[m]=-1,f&=~w}o!==0&&Pe(r,o,s)}function Gh(){return(st&6)===0?(Mu(0),!1):!0}function _m(){if(Be!==null){if(at===0)var r=Be.return;else r=Be,Pi=Pa=null,Pp(r),Fo=null,Tu=0,r=Be;for(;r!==null;)_0(r.alternate,r),r=r.return;Be=null}}function Xo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,hR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),_m(),mt=r,Be=o=Oi(r.current,null),We=s,at=0,Qn=null,As=!1,Yo=bi(r,s),hm=!1,Wo=pr=fm=Ba=Rs=Ct=0,qn=ku=null,dm=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-Zt(u),m=1<<f;s|=r[f],u&=~m}return Fi=s,ph(),o}function q0(r,s){Ue=null,Y.H=Mh,s===pu||s===Th?(s=rv(),at=3):s===ev?(s=rv(),at=4):at=s===i0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Qn=s,Be===null&&(Ct=1,Lh(r,ur(s,r.current)))}function B0(){var r=Y.H;return Y.H=Mh,r===null?Mh:r}function z0(){var r=Y.A;return Y.A=HA,r}function vm(){Ct=4,As||(We&4194048)!==We&&dr.current!==null||(Yo=!0),(Rs&134217727)===0&&(Ba&134217727)===0||mt===null||Ds(mt,We,pr,!1)}function Em(r,s,o){var u=st;st|=2;var f=B0(),m=z0();(mt!==r||We!==s)&&(Hh=null,Xo(r,s)),s=!1;var w=Ct;e:do try{if(at!==0&&Be!==null){var S=Be,V=Qn;switch(at){case 8:_m(),w=6;break e;case 3:case 2:case 9:case 6:dr.current===null&&(s=!0);var K=at;if(at=0,Qn=null,Zo(r,S,V,K),o&&Yo){w=0;break e}break;default:K=at,at=0,Qn=null,Zo(r,S,V,K)}}WA(),w=Ct;break}catch(ne){q0(r,ne)}while(!0);return s&&r.shellSuspendCounter++,Pi=Pa=null,st=u,Y.H=f,Y.A=m,Be===null&&(mt=null,We=0,ph()),w}function WA(){for(;Be!==null;)F0(Be)}function QA(r,s){var o=st;st|=2;var u=B0(),f=z0();mt!==r||We!==s?(Hh=null,$h=jn()+500,Xo(r,s)):Yo=bi(r,s);e:do try{if(at!==0&&Be!==null){s=Be;var m=Qn;t:switch(at){case 1:at=0,Qn=null,Zo(r,s,m,1);break;case 2:case 9:if(tv(m)){at=0,Qn=null,$0(s);break}s=function(){at!==2&&at!==9||mt!==r||(at=7),Xr(r)},m.then(s,s);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:tv(m)?(at=0,Qn=null,$0(s)):(at=0,Qn=null,Zo(r,s,m,7));break;case 5:var w=null;switch(Be.tag){case 26:w=Be.memoizedState;case 5:case 27:var S=Be;if(!w||xE(w)){at=0,Qn=null;var V=S.sibling;if(V!==null)Be=V;else{var K=S.return;K!==null?(Be=K,Yh(K)):Be=null}break t}}at=0,Qn=null,Zo(r,s,m,5);break;case 6:at=0,Qn=null,Zo(r,s,m,6);break;case 8:_m(),Ct=6;break e;default:throw Error(i(462))}}KA();break}catch(ne){q0(r,ne)}while(!0);return Pi=Pa=null,Y.H=u,Y.A=f,st=o,Be!==null?0:(mt=null,We=0,ph(),Ct)}function KA(){for(;Be!==null&&!ha();)F0(Be)}function F0(r){var s=g0(r.alternate,r,Fi);r.memoizedProps=r.pendingProps,s===null?Yh(r):Be=s}function $0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=c0(o,s,s.pendingProps,s.type,void 0,We);break;case 11:s=c0(o,s,s.pendingProps,s.type.render,s.ref,We);break;case 5:Pp(s);default:_0(o,s),s=Be=H_(s,Fi),s=g0(o,s,Fi)}r.memoizedProps=r.pendingProps,s===null?Yh(r):Be=s}function Zo(r,s,o,u){Pi=Pa=null,Pp(s),Fo=null,Tu=0;var f=s.return;try{if(UA(r,f,s,o,We)){Ct=1,Lh(r,ur(o,r.current)),Be=null;return}}catch(m){if(f!==null)throw Be=f,m;Ct=1,Lh(r,ur(o,r.current)),Be=null;return}s.flags&32768?(Je||u===1?r=!0:Yo||(We&536870912)!==0?r=!1:(As=r=!0,(u===2||u===9||u===3||u===6)&&(u=dr.current,u!==null&&u.tag===13&&(u.flags|=16384))),H0(s,r)):Yh(s)}function Yh(r){var s=r;do{if((s.flags&32768)!==0){H0(s,As);return}r=s.return;var o=BA(s.alternate,s,Fi);if(o!==null){Be=o;return}if(s=s.sibling,s!==null){Be=s;return}Be=s=r}while(s!==null);Ct===0&&(Ct=5)}function H0(r,s){do{var o=zA(r.alternate,r);if(o!==null){o.flags&=32767,Be=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Be=r;return}Be=r=o}while(r!==null);Ct=6,Be=null}function G0(r,s,o,u,f,m,w,S,V){r.cancelPendingCommit=null;do Wh();while(mn!==0);if((st&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=cp,Jt(r,o,m,w,S,V),r===mt&&(Be=mt=null,We=0),Qo=s,Is=r,Ko=o,mm=m,gm=f,V0=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,eR(mi,function(){return X0(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=se.p,se.p=2,w=st,st|=4;try{FA(r,s,o)}finally{st=w,se.p=f,Y.T=u}}mn=1,Y0(),W0(),Q0()}}function Y0(){if(mn===1){mn=0;var r=Is,s=Qo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=se.p;se.p=2;var f=st;st|=4;try{I0(s,r);var m=Om,w=P_(r.containerInfo),S=m.focusedElem,V=m.selectionRange;if(w!==S&&S&&S.ownerDocument&&N_(S.ownerDocument.documentElement,S)){if(V!==null&&sp(S)){var K=V.start,ne=V.end;if(ne===void 0&&(ne=K),"selectionStart"in S)S.selectionStart=K,S.selectionEnd=Math.min(ne,S.value.length);else{var ue=S.ownerDocument||document,X=ue&&ue.defaultView||window;if(X.getSelection){var Z=X.getSelection(),De=S.textContent.length,xe=Math.min(V.start,De),ht=V.end===void 0?xe:Math.min(V.end,De);!Z.extend&&xe>ht&&(w=ht,ht=xe,xe=w);var G=M_(S,xe),$=M_(S,ht);if(G&&$&&(Z.rangeCount!==1||Z.anchorNode!==G.node||Z.anchorOffset!==G.offset||Z.focusNode!==$.node||Z.focusOffset!==$.offset)){var Q=ue.createRange();Q.setStart(G.node,G.offset),Z.removeAllRanges(),xe>ht?(Z.addRange(Q),Z.extend($.node,$.offset)):(Q.setEnd($.node,$.offset),Z.addRange(Q))}}}}for(ue=[],Z=S;Z=Z.parentNode;)Z.nodeType===1&&ue.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ue.length;S++){var oe=ue[S];oe.element.scrollLeft=oe.left,oe.element.scrollTop=oe.top}}of=!!km,Om=km=null}finally{st=f,se.p=u,Y.T=o}}r.current=s,mn=2}}function W0(){if(mn===2){mn=0;var r=Is,s=Qo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=se.p;se.p=2;var f=st;st|=4;try{x0(r,s.alternate,s)}finally{st=f,se.p=u,Y.T=o}}mn=3}}function Q0(){if(mn===4||mn===3){mn=0,ho();var r=Is,s=Qo,o=Ko,u=V0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?mn=5:(mn=0,Qo=Is=null,K0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Cs=null),us(o),s=s.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(vt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=Y.T,f=se.p,se.p=2,Y.T=null;try{for(var m=r.onRecoverableError,w=0;w<u.length;w++){var S=u[w];m(S.value,{componentStack:S.stack})}}finally{Y.T=s,se.p=f}}(Ko&3)!==0&&Wh(),Xr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===ym?Ou++:(Ou=0,ym=r):Ou=0,Mu(0)}}function K0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,fu(s)))}function Wh(r){return Y0(),W0(),Q0(),X0()}function X0(){if(mn!==5)return!1;var r=Is,s=mm;mm=0;var o=us(Ko),u=Y.T,f=se.p;try{se.p=32>o?32:o,Y.T=null,o=gm,gm=null;var m=Is,w=Ko;if(mn=0,Qo=Is=null,Ko=0,(st&6)!==0)throw Error(i(331));var S=st;if(st|=4,N0(m.current),k0(m,m.current,w,o),st=S,Mu(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(vt,m)}catch{}return!0}finally{se.p=f,Y.T=u,K0(r,s)}}function Z0(r,s,o){s=ur(o,s),s=Qp(r.stateNode,s,2),r=vs(r,s,2),r!==null&&(Ke(r,2),Xr(r))}function dt(r,s,o){if(r.tag===3)Z0(r,r,o);else for(;s!==null;){if(s.tag===3){Z0(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cs===null||!Cs.has(u))){r=ur(o,r),o=n0(2),u=vs(s,o,2),u!==null&&(r0(o,u,s,r),Ke(u,2),Xr(u));break}}s=s.return}}function bm(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new GA;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(hm=!0,f.add(o),r=XA.bind(null,r,s,o),s.then(r,r))}function XA(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,mt===r&&(We&o)===o&&(Ct===4||Ct===3&&(We&62914560)===We&&300>jn()-pm?(st&2)===0&&Xo(r,0):fm|=o,Wo===We&&(Wo=0)),Xr(r)}function J0(r,s){s===0&&(s=et()),r=Mo(r,s),r!==null&&(Ke(r,s),Xr(r))}function ZA(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),J0(r,o)}function JA(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),J0(r,o)}function eR(r,s){return pi(r,s)}var Qh=null,Jo=null,wm=!1,Kh=!1,Tm=!1,za=0;function Xr(r){r!==Jo&&r.next===null&&(Jo===null?Qh=Jo=r:Jo=Jo.next=r),Kh=!0,wm||(wm=!0,nR())}function Mu(r,s){if(!Tm&&Kh){Tm=!0;do for(var o=!1,u=Qh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var w=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Zt(42|r)+1)-1,m&=f&~(w&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,rE(u,m))}else m=We,m=Ei(u,u===mt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||bi(u,m)||(o=!0,rE(u,m));u=u.next}while(o);Tm=!1}}function tR(){eE()}function eE(){Kh=wm=!1;var r=0;za!==0&&(cR()&&(r=za),za=0);for(var s=jn(),o=null,u=Qh;u!==null;){var f=u.next,m=tE(u,s);m===0?(u.next=null,o===null?Qh=f:o.next=f,f===null&&(Jo=o)):(o=u,(r!==0||(m&3)!==0)&&(Kh=!0)),u=f}Mu(r)}function tE(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var w=31-Zt(m),S=1<<w,V=f[w];V===-1?((S&o)===0||(S&u)!==0)&&(f[w]=ls(S,s)):V<=s&&(r.expiredLanes|=S),m&=~S}if(s=mt,o=We,o=Ei(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(at===2||at===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Nr(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||bi(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Nr(u),us(o)){case 2:case 8:o=os;break;case 32:o=mi;break;case 268435456:o=Pr;break;default:o=mi}return u=nE.bind(null,r),o=pi(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Nr(u),r.callbackPriority=2,r.callbackNode=null,2}function nE(r,s){if(mn!==0&&mn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Wh()&&r.callbackNode!==o)return null;var u=We;return u=Ei(r,r===mt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(L0(r,u,s),tE(r,jn()),r.callbackNode!=null&&r.callbackNode===o?nE.bind(null,r):null)}function rE(r,s){if(Wh())return null;L0(r,s,!0)}function nR(){fR(function(){(st&6)!==0?pi(fa,tR):eE()})}function Sm(){return za===0&&(za=Ne()),za}function iE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:bo(""+r)}function sE(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function rR(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=iE((f[Nt]||null).action),w=u.submitter;w&&(s=(s=w[Nt]||null)?iE(s.formAction):w.getAttribute("formAction"),s!==null&&(m=s,w=null));var S=new wo("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(za!==0){var V=w?sE(f,w):new FormData(f);$p(o,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(S.preventDefault(),V=w?sE(f,w):new FormData(f),$p(o,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var xm=0;xm<up.length;xm++){var Am=up[xm],iR=Am.toLowerCase(),sR=Am[0].toUpperCase()+Am.slice(1);br(iR,"on"+sR)}br(L_,"onAnimationEnd"),br(U_,"onAnimationIteration"),br(q_,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(wA,"onTransitionRun"),br(TA,"onTransitionStart"),br(SA,"onTransitionCancel"),br(B_,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vr("onBeforeInput",["compositionend","keypress","textInput","paste"]),vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nu));function aE(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var w=u.length-1;0<=w;w--){var S=u[w],V=S.instance,K=S.currentTarget;if(S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ne){jh(ne)}f.currentTarget=null,m=V}else for(w=0;w<u.length;w++){if(S=u[w],V=S.instance,K=S.currentTarget,S=S.listener,V!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=K;try{m(f)}catch(ne){jh(ne)}f.currentTarget=null,m=V}}}}function ze(r,s){var o=s[Hl];o===void 0&&(o=s[Hl]=new Set);var u=r+"__bubble";o.has(u)||(oE(s,r,2,!1),o.add(u))}function Rm(r,s,o){var u=0;s&&(u|=4),oE(o,r,u,s)}var Xh="_reactListening"+Math.random().toString(36).slice(2);function Cm(r){if(!r[Xh]){r[Xh]=!0,Gl.forEach(function(o){o!=="selectionchange"&&(aR.has(o)||Rm(o,!1,r),Rm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Xh]||(s[Xh]=!0,Rm("selectionchange",!1,s))}}function oE(r,s,o,u){switch(kE(s)){case 2:var f=MR;break;case 8:f=NR;break;default:f=zm}o=f.bind(null,s,o,r),f=void 0,!or||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Im(r,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var S=u.stateNode.containerInfo;if(S===f)break;if(w===4)for(w=u.return;w!==null;){var V=w.tag;if((V===3||V===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;S!==null;){if(w=wi(S),w===null)return;if(V=w.tag,V===5||V===6||V===26||V===27){u=m=w;continue e}S=S.parentNode}}u=u.return}Jc(function(){var K=m,ne=ar(o),ue=[];e:{var X=z_.get(r);if(X!==void 0){var Z=wo,De=r;switch(r){case"keypress":if(zr(o)===0)break e;case"keydown":case"keyup":Z=Co;break;case"focusin":De="focus",Z=xo;break;case"focusout":De="blur",Z=xo;break;case"beforeblur":case"afterblur":Z=xo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=oh;break;case L_:case U_:case q_:Z=Ao;break;case B_:Z=uh;break;case"scroll":case"scrollend":Z=eh;break;case"wheel":Z=Io;break;case"copy":case"cut":case"paste":Z=Ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=iu;break;case"toggle":case"beforetoggle":Z=hh}var xe=(s&4)!==0,ht=!xe&&(r==="scroll"||r==="scrollend"),G=xe?X!==null?X+"Capture":null:X;xe=[];for(var $=K,Q;$!==null;){var oe=$;if(Q=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||Q===null||G===null||(oe=ba($,G),oe!=null&&xe.push(Pu($,oe,Q))),ht)break;$=$.return}0<xe.length&&(X=new Z(X,De,null,o,ne),ue.push({event:X,listeners:xe}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&o!==Ai&&(De=o.relatedTarget||o.fromElement)&&(wi(De)||De[ir]))break e;if((Z||X)&&(X=ne.window===ne?ne:(X=ne.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(De=o.relatedTarget||o.toElement,Z=K,De=De?wi(De):null,De!==null&&(ht=l(De),xe=De.tag,De!==ht||xe!==5&&xe!==27&&xe!==6)&&(De=null)):(Z=null,De=K),Z!==De)){if(xe=lr,oe="onMouseLeave",G="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(xe=iu,oe="onPointerLeave",G="onPointerEnter",$="pointer"),ht=Z==null?X:Lr(Z),Q=De==null?X:Lr(De),X=new xe(oe,$+"leave",Z,o,ne),X.target=ht,X.relatedTarget=Q,oe=null,wi(ne)===K&&(xe=new xe(G,$+"enter",De,o,ne),xe.target=Q,xe.relatedTarget=ht,oe=xe),ht=oe,Z&&De)t:{for(xe=Z,G=De,$=0,Q=xe;Q;Q=el(Q))$++;for(Q=0,oe=G;oe;oe=el(oe))Q++;for(;0<$-Q;)xe=el(xe),$--;for(;0<Q-$;)G=el(G),Q--;for(;$--;){if(xe===G||G!==null&&xe===G.alternate)break t;xe=el(xe),G=el(G)}xe=null}else xe=null;Z!==null&&lE(ue,X,Z,xe,!1),De!==null&&ht!==null&&lE(ue,ht,De,xe,!0)}}e:{if(X=K?Lr(K):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var be=R_;else if(Gt(X))if(C_)be=vA;else{be=yA;var qe=gA}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?K&&Xl(K.elementType)&&(be=R_):be=_A;if(be&&(be=be(r,K))){ki(ue,be,o,ne);break e}qe&&qe(r,X,K),r==="focusout"&&K&&X.type==="number"&&K.memoizedProps.value!=null&&ps(X,"number",X.value)}switch(qe=K?Lr(K):window,r){case"focusin":(Gt(qe)||qe.contentEditable==="true")&&(Do=qe,ap=K,ou=null);break;case"focusout":ou=ap=Do=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,V_(ue,o,ne);break;case"selectionchange":if(bA)break;case"keydown":case"keyup":V_(ue,o,ne)}var we;if(Hr)e:{switch(r){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ge?ee(r,o)&&(Ae="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&o.locale!=="ko"&&(Ge||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ge&&(we=Jl()):(Br=ne,ms="value"in Br?Br.value:Br.textContent,Ge=!0)),qe=Zh(K,Ae),0<qe.length&&(Ae=new nu(Ae,r,null,o,ne),ue.push({event:Ae,listeners:qe}),we?Ae.data=we:(we=pe(o),we!==null&&(Ae.data=we)))),(we=y?Ht(r,o):Ye(r,o))&&(Ae=Zh(K,"onBeforeInput"),0<Ae.length&&(qe=new nu("onBeforeInput","beforeinput",null,o,ne),ue.push({event:qe,listeners:Ae}),qe.data=we)),rR(ue,r,K,o,ne)}aE(ue,s)})}function Pu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Zh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ba(r,o),f!=null&&u.unshift(Pu(r,f,m)),f=ba(r,s),f!=null&&u.push(Pu(r,f,m))),r.tag===3)return u;r=r.return}return[]}function el(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function lE(r,s,o,u,f){for(var m=s._reactName,w=[];o!==null&&o!==u;){var S=o,V=S.alternate,K=S.stateNode;if(S=S.tag,V!==null&&V===u)break;S!==5&&S!==26&&S!==27||K===null||(V=K,f?(K=ba(o,m),K!=null&&w.unshift(Pu(o,K,V))):f||(K=ba(o,m),K!=null&&w.push(Pu(o,K,V)))),o=o.return}w.length!==0&&r.push({event:s,listeners:w})}var oR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function uE(r){return(typeof r=="string"?r:""+r).replace(oR,`
`).replace(lR,"")}function cE(r,s){return s=uE(s),uE(r)===s}function Jh(){}function ct(r,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||sr(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&sr(r,""+u);break;case"className":Ur(r,"class",u);break;case"tabIndex":Ur(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ur(r,o,u);break;case"style":Kl(r,u,m);break;case"data":if(s!=="object"){Ur(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=bo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&ct(r,s,"name",f.name,f,null),ct(r,s,"formEncType",f.formEncType,f,null),ct(r,s,"formMethod",f.formMethod,f,null),ct(r,s,"formTarget",f.formTarget,f,null)):(ct(r,s,"encType",f.encType,f,null),ct(r,s,"method",f.method,f,null),ct(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=bo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Jh);break;case"onScroll":u!=null&&ze("scroll",r);break;case"onScrollEnd":u!=null&&ze("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=bo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":ze("beforetoggle",r),ze("toggle",r),ds(r,"popover",u);break;case"xlinkActuate":fn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":fn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":fn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":fn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":fn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":fn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":fn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":fn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":fn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ds(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Jd.get(o)||o,ds(r,o,u))}}function Dm(r,s,o,u,f,m){switch(o){case"style":Kl(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?sr(r,u):(typeof u=="number"||typeof u=="bigint")&&sr(r,""+u);break;case"onScroll":u!=null&&ze("scroll",r);break;case"onScrollEnd":u!=null&&ze("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Jh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!go.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Nt]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):ds(r,o,u)}}}function gn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",r),ze("load",r);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var w=o[m];if(w!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ct(r,s,m,w,o,null)}}f&&ct(r,s,"srcSet",o.srcSet,o,null),u&&ct(r,s,"src",o.src,o,null);return;case"input":ze("invalid",r);var S=m=w=f=null,V=null,K=null;for(u in o)if(o.hasOwnProperty(u)){var ne=o[u];if(ne!=null)switch(u){case"name":f=ne;break;case"type":w=ne;break;case"checked":V=ne;break;case"defaultChecked":K=ne;break;case"value":m=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,s));break;default:ct(r,s,u,ne,o,null)}}_a(r,m,S,V,K,w,f,!1),Eo(r);return;case"select":ze("invalid",r),u=w=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":w=S;break;case"multiple":u=S;default:ct(r,s,f,S,o,null)}s=m,o=w,r.multiple=!!u,s!=null?xi(r,!!u,s,!1):o!=null&&xi(r,!!u,o,!0);return;case"textarea":ze("invalid",r),m=f=u=null;for(w in o)if(o.hasOwnProperty(w)&&(S=o[w],S!=null))switch(w){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:ct(r,s,w,S,o,null)}va(r,u,f,m),Eo(r);return;case"option":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ct(r,s,V,u,o,null)}return;case"dialog":ze("beforetoggle",r),ze("toggle",r),ze("cancel",r),ze("close",r);break;case"iframe":case"object":ze("load",r);break;case"video":case"audio":for(u=0;u<Nu.length;u++)ze(Nu[u],r);break;case"image":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"embed":case"source":case"link":ze("error",r),ze("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in o)if(o.hasOwnProperty(K)&&(u=o[K],u!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ct(r,s,K,u,o,null)}return;default:if(Xl(s)){for(ne in o)o.hasOwnProperty(ne)&&(u=o[ne],u!==void 0&&Dm(r,s,ne,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ct(r,s,S,u,o,null))}function uR(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,w=null,S=null,V=null,K=null,ne=null;for(Z in o){var ue=o[Z];if(o.hasOwnProperty(Z)&&ue!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":V=ue;default:u.hasOwnProperty(Z)||ct(r,s,Z,null,u,ue)}}for(var X in u){var Z=u[X];if(ue=o[X],u.hasOwnProperty(X)&&(Z!=null||ue!=null))switch(X){case"type":m=Z;break;case"name":f=Z;break;case"checked":K=Z;break;case"defaultChecked":ne=Z;break;case"value":w=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==ue&&ct(r,s,X,Z,u,ue)}}$n(r,w,S,V,K,ne,m,f);return;case"select":Z=w=S=X=null;for(m in o)if(V=o[m],o.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":Z=V;default:u.hasOwnProperty(m)||ct(r,s,m,null,u,V)}for(f in u)if(m=u[f],V=o[f],u.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":X=m;break;case"defaultValue":S=m;break;case"multiple":w=m;default:m!==V&&ct(r,s,f,m,u,V)}s=S,o=w,u=Z,X!=null?xi(r,!!o,X,!1):!!u!=!!o&&(s!=null?xi(r,!!o,s,!0):xi(r,!!o,o?[]:"",!1));return;case"textarea":Z=X=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ct(r,s,S,null,u,f)}for(w in u)if(f=u[w],m=o[w],u.hasOwnProperty(w)&&(f!=null||m!=null))switch(w){case"value":X=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&ct(r,s,w,f,u,m)}lt(r,X,Z);return;case"option":for(var De in o)if(X=o[De],o.hasOwnProperty(De)&&X!=null&&!u.hasOwnProperty(De))switch(De){case"selected":r.selected=!1;break;default:ct(r,s,De,null,u,X)}for(V in u)if(X=u[V],Z=o[V],u.hasOwnProperty(V)&&X!==Z&&(X!=null||Z!=null))switch(V){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ct(r,s,V,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in o)X=o[xe],o.hasOwnProperty(xe)&&X!=null&&!u.hasOwnProperty(xe)&&ct(r,s,xe,null,u,X);for(K in u)if(X=u[K],Z=o[K],u.hasOwnProperty(K)&&X!==Z&&(X!=null||Z!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:ct(r,s,K,X,u,Z)}return;default:if(Xl(s)){for(var ht in o)X=o[ht],o.hasOwnProperty(ht)&&X!==void 0&&!u.hasOwnProperty(ht)&&Dm(r,s,ht,void 0,u,X);for(ne in u)X=u[ne],Z=o[ne],!u.hasOwnProperty(ne)||X===Z||X===void 0&&Z===void 0||Dm(r,s,ne,X,u,Z);return}}for(var G in o)X=o[G],o.hasOwnProperty(G)&&X!=null&&!u.hasOwnProperty(G)&&ct(r,s,G,null,u,X);for(ue in u)X=u[ue],Z=o[ue],!u.hasOwnProperty(ue)||X===Z||X==null&&Z==null||ct(r,s,ue,X,u,Z)}var km=null,Om=null;function ef(r){return r.nodeType===9?r:r.ownerDocument}function hE(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fE(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Mm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nm=null;function cR(){var r=window.event;return r&&r.type==="popstate"?r===Nm?!1:(Nm=r,!0):(Nm=null,!1)}var dE=typeof setTimeout=="function"?setTimeout:void 0,hR=typeof clearTimeout=="function"?clearTimeout:void 0,pE=typeof Promise=="function"?Promise:void 0,fR=typeof queueMicrotask=="function"?queueMicrotask:typeof pE<"u"?function(r){return pE.resolve(null).then(r).catch(dR)}:dE;function dR(r){setTimeout(function(){throw r})}function ks(r){return r==="head"}function mE(r,s){var o=s,u=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var w=r.ownerDocument;if(o&1&&Vu(w.documentElement),o&2&&Vu(w.body),o&4)for(o=w.head,Vu(o),w=o.firstChild;w;){var S=w.nextSibling,V=w.nodeName;w[pa]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=S}}if(f===0){r.removeChild(m),$u(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);$u(s)}function Pm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Pm(o),fs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function pR(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[pa])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Tr(r.nextSibling),r===null)break}return null}function mR(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Tr(r.nextSibling),r===null))return null;return r}function Vm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function gR(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Tr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var jm=null;function gE(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function yE(r,s,o){switch(s=ef(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Vu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);fs(r)}var mr=new Map,_E=new Set;function tf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var $i=se.d;se.d={f:yR,r:_R,D:vR,C:ER,L:bR,m:wR,X:SR,S:TR,M:xR};function yR(){var r=$i.f(),s=Gh();return r||s}function _R(r){var s=jr(r);s!==null&&s.tag===5&&s.type==="form"?Lv(s):$i.r(r)}var tl=typeof document>"u"?null:document;function vE(r,s,o){var u=tl;if(u&&typeof s=="string"&&s){var f=Pt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),_E.has(f)||(_E.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),gn(s,"link",r),Dt(s),u.head.appendChild(s)))}}function vR(r){$i.D(r),vE("dns-prefetch",r,null)}function ER(r,s){$i.C(r,s),vE("preconnect",r,s)}function bR(r,s,o){$i.L(r,s,o);var u=tl;if(u&&r&&s){var f='link[rel="preload"][as="'+Pt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Pt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Pt(o.imageSizes)+'"]')):f+='[href="'+Pt(r)+'"]';var m=f;switch(s){case"style":m=nl(r);break;case"script":m=rl(r)}mr.has(m)||(r=v({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),mr.set(m,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(ju(m))||s==="script"&&u.querySelector(Lu(m))||(s=u.createElement("link"),gn(s,"link",r),Dt(s),u.head.appendChild(s)))}}function wR(r,s){$i.m(r,s);var o=tl;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Pt(u)+'"][href="'+Pt(r)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=rl(r)}if(!mr.has(m)&&(r=v({rel:"modulepreload",href:r},s),mr.set(m,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Lu(m)))return}u=o.createElement("link"),gn(u,"link",r),Dt(u),o.head.appendChild(u)}}}function TR(r,s,o){$i.S(r,s,o);var u=tl;if(u&&r){var f=On(u).hoistableStyles,m=nl(r);s=s||"default";var w=f.get(m);if(!w){var S={loading:0,preload:null};if(w=u.querySelector(ju(m)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":s},o),(o=mr.get(m))&&Lm(r,o);var V=w=u.createElement("link");Dt(V),gn(V,"link",r),V._p=new Promise(function(K,ne){V.onload=K,V.onerror=ne}),V.addEventListener("load",function(){S.loading|=1}),V.addEventListener("error",function(){S.loading|=2}),S.loading|=4,nf(w,s,u)}w={type:"stylesheet",instance:w,count:1,state:S},f.set(m,w)}}}function SR(r,s){$i.X(r,s);var o=tl;if(o&&r){var u=On(o).hoistableScripts,f=rl(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0},s),(s=mr.get(f))&&Um(r,s),m=o.createElement("script"),Dt(m),gn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function xR(r,s){$i.M(r,s);var o=tl;if(o&&r){var u=On(o).hoistableScripts,f=rl(r),m=u.get(f);m||(m=o.querySelector(Lu(f)),m||(r=v({src:r,async:!0,type:"module"},s),(s=mr.get(f))&&Um(r,s),m=o.createElement("script"),Dt(m),gn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function EE(r,s,o,u){var f=(f=ge.current)?tf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=nl(o.href),o=On(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=nl(o.href);var m=On(f).hoistableStyles,w=m.get(r);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,w),(m=f.querySelector(ju(r)))&&!m._p&&(w.instance=m,w.state.loading=5),mr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},mr.set(r,o),m||AR(f,r,o,w.state))),s&&u===null)throw Error(i(528,""));return w}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=rl(o),o=On(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function nl(r){return'href="'+Pt(r)+'"'}function ju(r){return'link[rel="stylesheet"]['+r+"]"}function bE(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function AR(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),gn(s,"link",o),Dt(s),r.head.appendChild(s))}function rl(r){return'[src="'+Pt(r)+'"]'}function Lu(r){return"script[async]"+r}function wE(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Pt(o.href)+'"]');if(u)return s.instance=u,Dt(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Dt(u),gn(u,"style",f),nf(u,o.precedence,r),s.instance=u;case"stylesheet":f=nl(o.href);var m=r.querySelector(ju(f));if(m)return s.state.loading|=4,s.instance=m,Dt(m),m;u=bE(o),(f=mr.get(f))&&Lm(u,f),m=(r.ownerDocument||r).createElement("link"),Dt(m);var w=m;return w._p=new Promise(function(S,V){w.onload=S,w.onerror=V}),gn(m,"link",u),s.state.loading|=4,nf(m,o.precedence,r),s.instance=m;case"script":return m=rl(o.src),(f=r.querySelector(Lu(m)))?(s.instance=f,Dt(f),f):(u=o,(f=mr.get(m))&&(u=v({},o),Um(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),Dt(f),gn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,nf(u,o.precedence,r));return s.instance}function nf(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,w=0;w<u.length;w++){var S=u[w];if(S.dataset.precedence===s)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Lm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Um(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var rf=null;function TE(r,s,o){if(rf===null){var u=new Map,f=rf=new Map;f.set(o,u)}else f=rf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[pa]||m[$t]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(s)||"";w=r+w;var S=u.get(w);S?S.push(m):u.set(w,[m])}}return u}function SE(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function RR(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function xE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Uu=null;function CR(){}function IR(r,s,o){if(Uu===null)throw Error(i(475));var u=Uu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=nl(o.href),m=r.querySelector(ju(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=sf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=m,Dt(m);return}m=r.ownerDocument||r,o=bE(o),(f=mr.get(f))&&Lm(o,f),m=m.createElement("link"),Dt(m);var w=m;w._p=new Promise(function(S,V){w.onload=S,w.onerror=V}),gn(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=sf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function DR(){if(Uu===null)throw Error(i(475));var r=Uu;return r.stylesheets&&r.count===0&&qm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&qm(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function sf(){if(this.count--,this.count===0){if(this.stylesheets)qm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var af=null;function qm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,af=new Map,s.forEach(kR,r),af=null,sf.call(r))}function kR(r,s){if(!(s.state.loading&4)){var o=af.get(r);if(o)var u=o.get(null);else{o=new Map,af.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var w=f[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),u=w)}u&&o.set(null,u)}f=s.instance,w=f.getAttribute("data-precedence"),m=o.get(w)||u,m===u&&o.set(null,f),o.set(w,f),this.count++,u=sf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var qu={$$typeof:O,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function OR(r,s,o,u,f,m,w,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function AE(r,s,o,u,f,m,w,S,V,K,ne,ue){return r=new OR(r,s,o,w,S,V,K,ue),s=1,m===!0&&(s|=24),m=Gn(3,null,null,s),r.current=m,m.stateNode=r,s=bp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},xp(m),r}function RE(r){return r?(r=No,r):No}function CE(r,s,o,u,f,m){f=RE(f),u.context===null?u.context=f:u.pendingContext=f,u=_s(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=vs(r,u,s),o!==null&&(Xn(o,r,s),gu(o,r,s))}function IE(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Bm(r,s){IE(r,s),(r=r.alternate)&&IE(r,s)}function DE(r){if(r.tag===13){var s=Mo(r,67108864);s!==null&&Xn(s,r,67108864),Bm(r,67108864)}}var of=!0;function MR(r,s,o,u){var f=Y.T;Y.T=null;var m=se.p;try{se.p=2,zm(r,s,o,u)}finally{se.p=m,Y.T=f}}function NR(r,s,o,u){var f=Y.T;Y.T=null;var m=se.p;try{se.p=8,zm(r,s,o,u)}finally{se.p=m,Y.T=f}}function zm(r,s,o,u){if(of){var f=Fm(u);if(f===null)Im(r,s,u,lf,o),OE(r,u);else if(VR(f,r,s,o,u))u.stopPropagation();else if(OE(r,u),s&4&&-1<PR.indexOf(r)){for(;f!==null;){var m=jr(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=Fn(m.pendingLanes);if(w!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;w;){var V=1<<31-Zt(w);S.entanglements[1]|=V,w&=~V}Xr(m),(st&6)===0&&($h=jn()+500,Mu(0))}}break;case 13:S=Mo(m,2),S!==null&&Xn(S,m,2),Gh(),Bm(m,2)}if(m=Fm(u),m===null&&Im(r,s,u,lf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Im(r,s,u,null,o)}}function Fm(r){return r=ar(r),$m(r)}var lf=null;function $m(r){if(lf=null,r=wi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return lf=r,null}function kE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fl()){case fa:return 2;case os:return 8;case mi:case fo:return 32;case Pr:return 268435456;default:return 32}default:return 32}}var Hm=!1,Os=null,Ms=null,Ns=null,Bu=new Map,zu=new Map,Ps=[],PR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function OE(r,s){switch(r){case"focusin":case"focusout":Os=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":Bu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(s.pointerId)}}function Fu(r,s,o,u,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=jr(s),s!==null&&DE(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function VR(r,s,o,u,f){switch(s){case"focusin":return Os=Fu(Os,r,s,o,u,f),!0;case"dragenter":return Ms=Fu(Ms,r,s,o,u,f),!0;case"mouseover":return Ns=Fu(Ns,r,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return Bu.set(m,Fu(Bu.get(m)||null,r,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,zu.set(m,Fu(zu.get(m)||null,r,s,o,u,f)),!0}return!1}function ME(r){var s=wi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,cs(r.priority,function(){if(o.tag===13){var u=Kn();u=Vr(u);var f=Mo(o,u);f!==null&&Xn(f,o,u),Bm(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function uf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Fm(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Ai=u,o.target.dispatchEvent(u),Ai=null}else return s=jr(o),s!==null&&DE(s),r.blockedOn=o,!1;s.shift()}return!0}function NE(r,s,o){uf(r)&&o.delete(s)}function jR(){Hm=!1,Os!==null&&uf(Os)&&(Os=null),Ms!==null&&uf(Ms)&&(Ms=null),Ns!==null&&uf(Ns)&&(Ns=null),Bu.forEach(NE),zu.forEach(NE)}function cf(r,s){r.blockedOn===s&&(r.blockedOn=null,Hm||(Hm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,jR)))}var hf=null;function PE(r){hf!==r&&(hf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){hf===r&&(hf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if($m(u||o)===null)continue;break}var m=jr(o);m!==null&&(r.splice(s,3),s-=3,$p(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function $u(r){function s(V){return cf(V,r)}Os!==null&&cf(Os,r),Ms!==null&&cf(Ms,r),Ns!==null&&cf(Ns,r),Bu.forEach(s),zu.forEach(s);for(var o=0;o<Ps.length;o++){var u=Ps[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Ps.length&&(o=Ps[0],o.blockedOn===null);)ME(o),o.blockedOn===null&&Ps.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],w=f[Nt]||null;if(typeof m=="function")w||PE(o);else if(w){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,w=m[Nt]||null)S=w.formAction;else if($m(f)!==null)continue}else S=w.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),PE(o)}}}function Gm(r){this._internalRoot=r}ff.prototype.render=Gm.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Kn();CE(o,u,r,s,null,null)},ff.prototype.unmount=Gm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;CE(r.current,2,null,r,null,null),Gh(),s[ir]=null}};function ff(r){this._internalRoot=r}ff.prototype.unstable_scheduleHydration=function(r){if(r){var s=rr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Ps.length&&s!==0&&s<Ps[o].priority;o++);Ps.splice(o,0,r),o===0&&ME(r)}};var VE=e.version;if(VE!=="19.1.0")throw Error(i(527,VE,"19.1.0"));se.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var LR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{vt=df.inject(LR),Ze=df}catch{}}return Gu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=Zv,m=Jv,w=e0,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=AE(r,1,!1,null,null,o,u,f,m,w,S,null),r[ir]=s.current,Cm(r),new Gm(s)},Gu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",m=Zv,w=Jv,S=e0,V=null,K=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(V=o.unstable_transitionCallbacks),o.formState!==void 0&&(K=o.formState)),s=AE(r,1,!0,s,o??null,u,f,m,w,S,V,K),s.context=RE(null),o=s.current,u=Kn(),u=Vr(u),f=_s(u),f.callback=null,vs(o,f,u),o=u,s.current.lanes=o,Ke(s,o),Xr(s),r[ir]=s.current,Cm(r),new ff(s)},Gu.version="19.1.0",Gu}var GE;function QR(){if(GE)return Qm.exports;GE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Qm.exports=WR(),Qm.exports}var KR=QR();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var YE="popstate";function XR(t={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return Sg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:dc(a)}return JR(e,n,null,t)}function Tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZR(){return Math.random().toString(36).substring(2,10)}function WE(t,e){return{usr:t.state,key:t.key,idx:e}}function Sg(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Dl(e):e,state:n,key:e&&e.key||i||ZR()}}function dc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Dl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function JR(t,e,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",p=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function b(){d="POP";let M=v(),P=M==null?null:M-g;g=M,p&&p({action:d,location:F.location,delta:P})}function T(M,P){d="PUSH";let j=Sg(F.location,M,P);g=v()+1;let O=WE(j,g),te=F.createHref(j);try{c.pushState(O,"",te)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(te)}l&&p&&p({action:d,location:F.location,delta:1})}function C(M,P){d="REPLACE";let j=Sg(F.location,M,P);g=v();let O=WE(j,g),te=F.createHref(j);c.replaceState(O,"",te),l&&p&&p({action:d,location:F.location,delta:0})}function N(M){return eC(M)}let F={get action(){return d},get location(){return t(a,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(YE,b),p=M,()=>{a.removeEventListener(YE,b),p=null}},createHref(M){return e(a,M)},createURL:N,encodeLocation(M){let P=N(M);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:T,replace:C,go(M){return c.go(M)}};return F}function eC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Tt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:dc(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function yT(t,e,n="/"){return tC(t,e,n,!1)}function tC(t,e,n,i){let a=typeof e=="string"?Dl(e):e,l=Ji(a.pathname||"/",n);if(l==null)return null;let c=_T(t);nC(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=dC(l);d=hC(c[p],g,i)}return d}function _T(t,e=[],n=[],i=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Tt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=Ki([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(Tt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),_T(l.children,e,v,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:uC(g,l.index),routesMeta:v})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of vT(l.path))a(l,c,p)}),e}function vT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=vT(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function nC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var rC=/^:[\w-]+$/,iC=3,sC=2,aC=1,oC=10,lC=-2,QE=t=>t==="*";function uC(t,e){let n=t.split("/"),i=n.length;return n.some(QE)&&(i+=lC),e&&(i+=sC),n.filter(a=>!QE(a)).reduce((a,l)=>a+(rC.test(l)?iC:l===""?aC:oC),i)}function cC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function hC(t,e,n=!1){let{routesMeta:i}=t,a={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",b=$f({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),T=p.route;if(!b&&g&&n&&!i[i.length-1].route.index&&(b=$f({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!b)return null;Object.assign(a,b.params),c.push({params:a,pathname:Ki([l,b.pathname]),pathnameBase:yC(Ki([l,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(l=Ki([l,b.pathnameBase]))}return c}function $f(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fC(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:b},T)=>{if(v==="*"){let N=d[T]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const C=d[T];return b&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:t}}function fC(t,e=!1,n=!0){Dr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function dC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function pC(t,e="/"){let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Dl(t):t;return{pathname:n?n.startsWith("/")?n:mC(n,e):e,search:_C(i),hash:vC(a)}}function mC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Jm(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hy(t){let e=gC(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function fy(t,e,n,i=!1){let a;typeof t=="string"?a=Dl(t):(a={...t},Tt(!a.pathname||!a.pathname.includes("?"),Jm("?","pathname","search",a)),Tt(!a.pathname||!a.pathname.includes("#"),Jm("#","pathname","hash",a)),Tt(!a.search||!a.search.includes("#"),Jm("#","search","hash",a)));let l=t===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=n;else{let b=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),b-=1;a.pathname=T.join("/")}d=b>=0?e[b]:"/"}let p=pC(a,d),g=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var Ki=t=>t.join("/").replace(/\/\/+/g,"/"),yC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_C=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function EC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var ET=["POST","PUT","PATCH","DELETE"];new Set(ET);var bC=["GET",...ET];new Set(bC);var kl=q.createContext(null);kl.displayName="DataRouter";var pd=q.createContext(null);pd.displayName="DataRouterState";q.createContext(!1);var bT=q.createContext({isTransitioning:!1});bT.displayName="ViewTransition";var wC=q.createContext(new Map);wC.displayName="Fetchers";var TC=q.createContext(null);TC.displayName="Await";var Mr=q.createContext(null);Mr.displayName="Navigation";var Ic=q.createContext(null);Ic.displayName="Location";var fi=q.createContext({outlet:null,matches:[],isDataRoute:!1});fi.displayName="Route";var dy=q.createContext(null);dy.displayName="RouteError";function SC(t,{relative:e}={}){Tt(Ol(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=q.useContext(Mr),{hash:a,pathname:l,search:c}=kc(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:Ki([n,l])),i.createHref({pathname:d,search:c,hash:a})}function Ol(){return q.useContext(Ic)!=null}function aa(){return Tt(Ol(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Ic).location}var wT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function TT(t){q.useContext(Mr).static||q.useLayoutEffect(t)}function Dc(){let{isDataRoute:t}=q.useContext(fi);return t?jC():xC()}function xC(){Tt(Ol(),"useNavigate() may be used only in the context of a <Router> component.");let t=q.useContext(kl),{basename:e,navigator:n}=q.useContext(Mr),{matches:i}=q.useContext(fi),{pathname:a}=aa(),l=JSON.stringify(hy(i)),c=q.useRef(!1);return TT(()=>{c.current=!0}),q.useCallback((p,g={})=>{if(Dr(c.current,wT),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=fy(p,JSON.parse(l),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ki([e,v.pathname])),(g.replace?n.replace:n.push)(v,g.state,g)},[e,n,l,a,t])}q.createContext(null);function kc(t,{relative:e}={}){let{matches:n}=q.useContext(fi),{pathname:i}=aa(),a=JSON.stringify(hy(n));return q.useMemo(()=>fy(t,JSON.parse(a),i,e==="path"),[t,a,i,e])}function AC(t,e){return ST(t,e)}function ST(t,e,n,i){var P;Tt(Ol(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=q.useContext(Mr),{matches:l}=q.useContext(fi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let j=v&&v.path||"";xT(p,!v||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let b=aa(),T;if(e){let j=typeof e=="string"?Dl(e):e;Tt(g==="/"||((P=j.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${j.pathname}" was given in the \`location\` prop.`),T=j}else T=b;let C=T.pathname||"/",N=C;if(g!=="/"){let j=g.replace(/^\//,"").split("/");N="/"+C.replace(/^\//,"").split("/").slice(j.length).join("/")}let F=yT(t,{pathname:N});Dr(v||F!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Dr(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=kC(F&&F.map(j=>Object.assign({},j,{params:Object.assign({},d,j.params),pathname:Ki([g,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:Ki([g,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,i);return e&&M?q.createElement(Ic.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},M):M}function RC(){let t=VC(),e=EC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:l},"ErrorBoundary")," or"," ",q.createElement("code",{style:l},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:a},n):null,c)}var CC=q.createElement(RC,null),IC=class extends q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?q.createElement(fi.Provider,{value:this.props.routeContext},q.createElement(dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DC({routeContext:t,match:e,children:n}){let i=q.useContext(kl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(fi.Provider,{value:t},n)}function kC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=n==null?void 0:n.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);Tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(n)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:v,errors:b}=n,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,v)=>{let b,T=!1,C=null,N=null;n&&(b=l&&g.route.id?l[g.route.id]:void 0,C=g.route.errorElement||CC,c&&(d<0&&v===0?(xT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,N=null):d===v&&(T=!0,N=g.route.hydrateFallbackElement||null)));let F=e.concat(a.slice(0,v+1)),M=()=>{let P;return b?P=C:T?P=N:g.route.Component?P=q.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=p,q.createElement(DC,{match:g,routeContext:{outlet:p,matches:F,isDataRoute:n!=null},children:P})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(IC,{location:n.location,revalidation:n.revalidation,component:C,error:b,children:M(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):M()},null)}function py(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OC(t){let e=q.useContext(kl);return Tt(e,py(t)),e}function MC(t){let e=q.useContext(pd);return Tt(e,py(t)),e}function NC(t){let e=q.useContext(fi);return Tt(e,py(t)),e}function my(t){let e=NC(t),n=e.matches[e.matches.length-1];return Tt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function PC(){return my("useRouteId")}function VC(){var i;let t=q.useContext(dy),e=MC("useRouteError"),n=my("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function jC(){let{router:t}=OC("useNavigate"),e=my("useNavigate"),n=q.useRef(!1);return TT(()=>{n.current=!0}),q.useCallback(async(a,l={})=>{Dr(n.current,wT),n.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:e,...l}))},[t,e])}var KE={};function xT(t,e,n){!e&&!KE[t]&&(KE[t]=!0,Dr(!1,n))}q.memo(LC);function LC({routes:t,future:e,state:n}){return ST(t,void 0,n,e)}function UC({to:t,replace:e,state:n,relative:i}){Tt(Ol(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=q.useContext(Mr);Dr(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=q.useContext(fi),{pathname:c}=aa(),d=Dc(),p=fy(t,hy(l),c,i==="path"),g=JSON.stringify(p);return q.useEffect(()=>{d(JSON.parse(g),{replace:e,state:n,relative:i})},[d,g,i,e,n]),null}function Af(t){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Tt(!Ol(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof n=="string"&&(n=Dl(n));let{pathname:p="/",search:g="",hash:v="",state:b=null,key:T="default"}=n,C=q.useMemo(()=>{let N=Ji(p,c);return N==null?null:{location:{pathname:N,search:g,hash:v,state:b,key:T},navigationType:i}},[c,p,g,v,b,T,i]);return Dr(C!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:q.createElement(Mr.Provider,{value:d},q.createElement(Ic.Provider,{children:e,value:C}))}function BC({children:t,location:e}){return AC(xg(t),e)}function xg(t,e=[]){let n=[];return q.Children.forEach(t,(i,a)=>{if(!q.isValidElement(i))return;let l=[...e,a];if(i.type===q.Fragment){n.push.apply(n,xg(i.props.children,l));return}Tt(i.type===Af,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=xg(i.props.children,l)),n.push(c)}),n}var Rf="get",Cf="application/x-www-form-urlencoded";function md(t){return t!=null&&typeof t.tagName=="string"}function zC(t){return md(t)&&t.tagName.toLowerCase()==="button"}function FC(t){return md(t)&&t.tagName.toLowerCase()==="form"}function $C(t){return md(t)&&t.tagName.toLowerCase()==="input"}function HC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GC(t,e){return t.button===0&&(!e||e==="_self")&&!HC(t)}var pf=null;function YC(){if(pf===null)try{new FormData(document.createElement("form"),0),pf=!1}catch{pf=!0}return pf}var WC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eg(t){return t!=null&&!WC.has(t)?(Dr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cf}"`),null):t}function QC(t,e){let n,i,a,l,c;if(FC(t)){let d=t.getAttribute("action");i=d?Ji(d,e):null,n=t.getAttribute("method")||Rf,a=eg(t.getAttribute("enctype"))||Cf,l=new FormData(t)}else if(zC(t)||$C(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ji(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Rf,a=eg(t.getAttribute("formenctype"))||eg(d.getAttribute("enctype"))||Cf,l=new FormData(d,t),!YC()){let{name:g,type:v,value:b}=t;if(v==="image"){let T=g?`${g}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else g&&l.append(g,b)}}else{if(md(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Rf,i=null,a=Cf,c=t}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function KC(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Ji(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function XC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function JC(t,e,n){let i=await Promise.all(t.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await XC(l,n);return c.links?c.links():[]}return[]}));return rI(i.flat(1).filter(ZC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function XE(t,e,n,i,a,l){let c=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,d=(p,g)=>{var v;return n[g].pathname!==p.pathname||((v=n[g].route.path)==null?void 0:v.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var b;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((b=n[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function eI(t,e,{includeHydrateFallback:n}={}){return tI(t.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function tI(t){return[...new Set(t)]}function nI(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function rI(t,e){let n=new Set;return new Set(e),t.reduce((i,a)=>{let l=JSON.stringify(nI(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function AT(){let t=q.useContext(kl);return gy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function iI(){let t=q.useContext(pd);return gy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var yy=q.createContext(void 0);yy.displayName="FrameworkContext";function RT(){let t=q.useContext(yy);return gy(t,"You must render this element inside a <HydratedRouter> element"),t}function sI(t,e){let n=q.useContext(yy),[i,a]=q.useState(!1),[l,c]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:b}=e,T=q.useRef(null);q.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let F=P=>{P.forEach(j=>{c(j.isIntersecting)})},M=new IntersectionObserver(F,{threshold:.5});return T.current&&M.observe(T.current),()=>{M.disconnect()}}},[t]),q.useEffect(()=>{if(i){let F=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(F)}}},[i]);let C=()=>{a(!0)},N=()=>{a(!1),c(!1)};return n?t!=="intent"?[l,T,{}]:[l,T,{onFocus:Yu(d,C),onBlur:Yu(p,N),onMouseEnter:Yu(g,C),onMouseLeave:Yu(v,N),onTouchStart:Yu(b,C)}]:[!1,T,{}]}function Yu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function aI({page:t,...e}){let{router:n}=AT(),i=q.useMemo(()=>yT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?q.createElement(lI,{page:t,matches:i,...e}):null}function oI(t){let{manifest:e,routeModules:n}=RT(),[i,a]=q.useState([]);return q.useEffect(()=>{let l=!1;return JC(t,e,n).then(c=>{l||a(c)}),()=>{l=!0}},[t,e,n]),i}function lI({page:t,matches:e,...n}){let i=aa(),{manifest:a,routeModules:l}=RT(),{basename:c}=AT(),{loaderData:d,matches:p}=iI(),g=q.useMemo(()=>XE(t,e,p,a,i,"data"),[t,e,p,a,i]),v=q.useMemo(()=>XE(t,e,p,a,i,"assets"),[t,e,p,a,i]),b=q.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let N=new Set,F=!1;if(e.forEach(P=>{var O;let j=a.routes[P.route.id];!j||!j.hasLoader||(!g.some(te=>te.route.id===P.route.id)&&P.route.id in d&&((O=l[P.route.id])!=null&&O.shouldRevalidate)||j.hasClientLoader?F=!0:N.add(P.route.id))}),N.size===0)return[];let M=KC(t,c,"data");return F&&N.size>0&&M.searchParams.set("_routes",e.filter(P=>N.has(P.route.id)).map(P=>P.route.id).join(",")),[M.pathname+M.search]},[c,d,i,a,g,e,t,l]),T=q.useMemo(()=>eI(v,a),[v,a]),C=oI(v);return q.createElement(q.Fragment,null,b.map(N=>q.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),T.map(N=>q.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),C.map(({key:N,link:F})=>q.createElement("link",{key:N,...F})))}function uI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var CT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{CT&&(window.__reactRouterVersion="7.7.0")}catch{}function cI({basename:t,children:e,window:n}){let i=q.useRef();i.current==null&&(i.current=XR({window:n,v5Compat:!0}));let a=i.current,[l,c]=q.useState({action:a.action,location:a.location}),d=q.useCallback(p=>{q.startTransition(()=>c(p))},[c]);return q.useLayoutEffect(()=>a.listen(d),[a,d]),q.createElement(qC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a})}var IT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DT=q.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:v,viewTransition:b,...T},C){let{basename:N}=q.useContext(Mr),F=typeof g=="string"&&IT.test(g),M,P=!1;if(typeof g=="string"&&F&&(M=g,CT))try{let I=new URL(window.location.href),U=g.startsWith("//")?new URL(I.protocol+g):new URL(g),k=Ji(U.pathname,N);U.origin===I.origin&&k!=null?g=k+U.search+U.hash:P=!0}catch{Dr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=SC(g,{relative:a}),[O,te,z]=sI(i,T),re=pI(g,{replace:c,state:d,target:p,preventScrollReset:v,relative:a,viewTransition:b});function R(I){e&&e(I),I.defaultPrevented||re(I)}let A=q.createElement("a",{...T,...z,href:M||j,onClick:P||l?e:R,ref:uI(C,te),target:p,"data-discover":!F&&n==="render"?"true":void 0});return O&&!F?q.createElement(q.Fragment,null,A,q.createElement(aI,{page:j})):A});DT.displayName="Link";var hI=q.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},v){let b=kc(c,{relative:g.relative}),T=aa(),C=q.useContext(pd),{navigator:N,basename:F}=q.useContext(Mr),M=C!=null&&vI(b)&&d===!0,P=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,j=T.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(j=j.toLowerCase(),O=O?O.toLowerCase():null,P=P.toLowerCase()),O&&F&&(O=Ji(O,F)||O);const te=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let z=j===P||!a&&j.startsWith(P)&&j.charAt(te)==="/",re=O!=null&&(O===P||!a&&O.startsWith(P)&&O.charAt(P.length)==="/"),R={isActive:z,isPending:re,isTransitioning:M},A=z?e:void 0,I;typeof i=="function"?I=i(R):I=[i,z?"active":null,re?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(R):l;return q.createElement(DT,{...g,"aria-current":A,className:I,ref:v,style:U,to:c,viewTransition:d},typeof p=="function"?p(R):p)});hI.displayName="NavLink";var fI=q.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:a,state:l,method:c=Rf,action:d,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:b,...T},C)=>{let N=yI(),F=_I(d,{relative:g}),M=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&IT.test(d),j=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let te=O.nativeEvent.submitter,z=(te==null?void 0:te.getAttribute("formmethod"))||c;N(te||O.currentTarget,{fetcherKey:e,method:z,navigate:n,replace:a,state:l,relative:g,preventScrollReset:v,viewTransition:b})};return q.createElement("form",{ref:C,method:M,action:F,onSubmit:i?p:j,...T,"data-discover":!P&&t==="render"?"true":void 0})});fI.displayName="Form";function dI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kT(t){let e=q.useContext(kl);return Tt(e,dI(t)),e}function pI(t,{target:e,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=Dc(),p=aa(),g=kc(t,{relative:l});return q.useCallback(v=>{if(GC(v,e)){v.preventDefault();let b=n!==void 0?n:dc(p)===dc(g);d(t,{replace:b,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,n,i,e,t,a,l,c])}var mI=0,gI=()=>`__${String(++mI)}__`;function yI(){let{router:t}=kT("useSubmit"),{basename:e}=q.useContext(Mr),n=PC();return q.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=QC(i,e);if(a.navigate===!1){let v=a.fetcherKey||gI();await t.fetch(v,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await t.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,e,n])}function _I(t,{relative:e}={}){let{basename:n}=q.useContext(Mr),i=q.useContext(fi);Tt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...kc(t||".",{relative:e})},c=aa();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let v=d.toString();l.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ki([n,l.pathname])),dc(l)}function vI(t,e={}){let n=q.useContext(bT);Tt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=kT("useViewTransitionState"),a=kc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Ji(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=Ji(n.nextLocation.pathname,i)||n.nextLocation.pathname;return $f(a.pathname,c)!=null||$f(a.pathname,l)!=null}var hn=function(){return hn=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},hn.apply(this,arguments)};function pc(t,e,n){if(n||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var _t="-ms-",ac="-moz-",nt="-webkit-",OT="comm",gd="rule",_y="decl",EI="@import",MT="@keyframes",bI="@layer",NT=Math.abs,vy=String.fromCharCode,Ag=Object.assign;function wI(t,e){return cn(t,0)^45?(((e<<2^cn(t,0))<<2^cn(t,1))<<2^cn(t,2))<<2^cn(t,3):0}function PT(t){return t.trim()}function Hi(t,e){return(t=e.exec(t))?t[0]:t}function je(t,e,n){return t.replace(e,n)}function If(t,e,n){return t.indexOf(e,n)}function cn(t,e){return t.charCodeAt(e)|0}function yl(t,e,n){return t.slice(e,n)}function ni(t){return t.length}function VT(t){return t.length}function Zu(t,e){return e.push(t),t}function TI(t,e){return t.map(e).join("")}function ZE(t,e){return t.filter(function(n){return!Hi(n,e)})}var yd=1,_l=1,jT=0,_r=0,Ut=0,Ml="";function _d(t,e,n,i,a,l,c,d){return{value:t,root:e,parent:n,type:i,props:a,children:l,line:yd,column:_l,length:c,return:"",siblings:d}}function Us(t,e){return Ag(_d("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function il(t){for(;t.root;)t=Us(t.root,{children:[t]});Zu(t,t.siblings)}function SI(){return Ut}function xI(){return Ut=_r>0?cn(Ml,--_r):0,_l--,Ut===10&&(_l=1,yd--),Ut}function Rr(){return Ut=_r<jT?cn(Ml,_r++):0,_l++,Ut===10&&(_l=1,yd++),Ut}function Qa(){return cn(Ml,_r)}function Df(){return _r}function vd(t,e){return yl(Ml,t,e)}function Rg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AI(t){return yd=_l=1,jT=ni(Ml=t),_r=0,[]}function RI(t){return Ml="",t}function tg(t){return PT(vd(_r-1,Cg(t===91?t+2:t===40?t+1:t)))}function CI(t){for(;(Ut=Qa())&&Ut<33;)Rr();return Rg(t)>2||Rg(Ut)>3?"":" "}function II(t,e){for(;--e&&Rr()&&!(Ut<48||Ut>102||Ut>57&&Ut<65||Ut>70&&Ut<97););return vd(t,Df()+(e<6&&Qa()==32&&Rr()==32))}function Cg(t){for(;Rr();)switch(Ut){case t:return _r;case 34:case 39:t!==34&&t!==39&&Cg(Ut);break;case 40:t===41&&Cg(t);break;case 92:Rr();break}return _r}function DI(t,e){for(;Rr()&&t+Ut!==57;)if(t+Ut===84&&Qa()===47)break;return"/*"+vd(e,_r-1)+"*"+vy(t===47?t:Rr())}function kI(t){for(;!Rg(Qa());)Rr();return vd(t,_r)}function OI(t){return RI(kf("",null,null,null,[""],t=AI(t),0,[0],t))}function kf(t,e,n,i,a,l,c,d,p){for(var g=0,v=0,b=c,T=0,C=0,N=0,F=1,M=1,P=1,j=0,O="",te=a,z=l,re=i,R=O;M;)switch(N=j,j=Rr()){case 40:if(N!=108&&cn(R,b-1)==58){If(R+=je(tg(j),"&","&\f"),"&\f",NT(g?d[g-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:R+=tg(j);break;case 9:case 10:case 13:case 32:R+=CI(N);break;case 92:R+=II(Df()-1,7);continue;case 47:switch(Qa()){case 42:case 47:Zu(MI(DI(Rr(),Df()),e,n,p),p);break;default:R+="/"}break;case 123*F:d[g++]=ni(R)*P;case 125*F:case 59:case 0:switch(j){case 0:case 125:M=0;case 59+v:P==-1&&(R=je(R,/\f/g,"")),C>0&&ni(R)-b&&Zu(C>32?eb(R+";",i,n,b-1,p):eb(je(R," ","")+";",i,n,b-2,p),p);break;case 59:R+=";";default:if(Zu(re=JE(R,e,n,g,v,a,d,O,te=[],z=[],b,l),l),j===123)if(v===0)kf(R,e,re,re,te,l,b,d,z);else switch(T===99&&cn(R,3)===110?100:T){case 100:case 108:case 109:case 115:kf(t,re,re,i&&Zu(JE(t,re,re,0,0,a,d,O,a,te=[],b,z),z),a,z,b,d,i?te:z);break;default:kf(R,re,re,re,[""],z,0,d,z)}}g=v=C=0,F=P=1,O=R="",b=c;break;case 58:b=1+ni(R),C=N;default:if(F<1){if(j==123)--F;else if(j==125&&F++==0&&xI()==125)continue}switch(R+=vy(j),j*F){case 38:P=v>0?1:(R+="\f",-1);break;case 44:d[g++]=(ni(R)-1)*P,P=1;break;case 64:Qa()===45&&(R+=tg(Rr())),T=Qa(),v=b=ni(O=R+=kI(Df())),j++;break;case 45:N===45&&ni(R)==2&&(F=0)}}return l}function JE(t,e,n,i,a,l,c,d,p,g,v,b){for(var T=a-1,C=a===0?l:[""],N=VT(C),F=0,M=0,P=0;F<i;++F)for(var j=0,O=yl(t,T+1,T=NT(M=c[F])),te=t;j<N;++j)(te=PT(M>0?C[j]+" "+O:je(O,/&\f/g,C[j])))&&(p[P++]=te);return _d(t,e,n,a===0?gd:d,p,g,v,b)}function MI(t,e,n,i){return _d(t,e,n,OT,vy(SI()),yl(t,2,-2),0,i)}function eb(t,e,n,i,a){return _d(t,e,n,_y,yl(t,0,i),yl(t,i+1,-1),i,a)}function LT(t,e,n){switch(wI(t,e)){case 5103:return nt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nt+t+t;case 4789:return ac+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+t+ac+t+_t+t+t;case 5936:switch(cn(t,e+11)){case 114:return nt+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return nt+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return nt+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return nt+t+_t+t+t;case 6165:return nt+t+_t+"flex-"+t+t;case 5187:return nt+t+je(t,/(\w+).+(:[^]+)/,nt+"box-$1$2"+_t+"flex-$1$2")+t;case 5443:return nt+t+_t+"flex-item-"+je(t,/flex-|-self/g,"")+(Hi(t,/flex-|baseline/)?"":_t+"grid-row-"+je(t,/flex-|-self/g,""))+t;case 4675:return nt+t+_t+"flex-line-pack"+je(t,/align-content|flex-|-self/g,"")+t;case 5548:return nt+t+_t+je(t,"shrink","negative")+t;case 5292:return nt+t+_t+je(t,"basis","preferred-size")+t;case 6060:return nt+"box-"+je(t,"-grow","")+nt+t+_t+je(t,"grow","positive")+t;case 4554:return nt+je(t,/([^-])(transform)/g,"$1"+nt+"$2")+t;case 6187:return je(je(je(t,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),t,"")+t;case 5495:case 3959:return je(t,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return je(je(t,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+_t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nt+t+t;case 4200:if(!Hi(t,/flex-|baseline/))return _t+"grid-column-align"+yl(t,e)+t;break;case 2592:case 3360:return _t+je(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,Hi(i.props,/grid-\w+-end/)})?~If(t+(n=n[e].value),"span",0)?t:_t+je(t,"-start","")+t+_t+"grid-row-span:"+(~If(n,"span",0)?Hi(n,/\d+/):+Hi(n,/\d+/)-+Hi(t,/\d+/))+";":_t+je(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Hi(i.props,/grid-\w+-start/)})?t:_t+je(je(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return je(t,/(.+)-inline(.+)/,nt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ni(t)-1-e>6)switch(cn(t,e+1)){case 109:if(cn(t,e+4)!==45)break;case 102:return je(t,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+ac+(cn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~If(t,"stretch",0)?LT(je(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return je(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,d,p,g){return _t+a+":"+l+g+(c?_t+a+"-span:"+(d?p:+p-+l)+g:"")+t});case 4949:if(cn(t,e+6)===121)return je(t,":",":"+nt)+t;break;case 6444:switch(cn(t,cn(t,14)===45?18:11)){case 120:return je(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nt+(cn(t,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+_t+"$2box$3")+t;case 100:return je(t,":",":"+_t)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(t,"scroll-","scroll-snap-")+t}return t}function Hf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function NI(t,e,n,i){switch(t.type){case bI:if(t.children.length)break;case EI:case _y:return t.return=t.return||t.value;case OT:return"";case MT:return t.return=t.value+"{"+Hf(t.children,i)+"}";case gd:if(!ni(t.value=t.props.join(",")))return""}return ni(n=Hf(t.children,i))?t.return=t.value+"{"+n+"}":""}function PI(t){var e=VT(t);return function(n,i,a,l){for(var c="",d=0;d<e;d++)c+=t[d](n,i,a,l)||"";return c}}function VI(t){return function(e){e.root||(e=e.return)&&t(e)}}function jI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case _y:t.return=LT(t.value,t.length,n);return;case MT:return Hf([Us(t,{value:je(t.value,"@","@"+nt)})],i);case gd:if(t.length)return TI(n=t.props,function(a){switch(Hi(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":il(Us(t,{props:[je(a,/:(read-\w+)/,":"+ac+"$1")]})),il(Us(t,{props:[a]})),Ag(t,{props:ZE(n,i)});break;case"::placeholder":il(Us(t,{props:[je(a,/:(plac\w+)/,":"+nt+"input-$1")]})),il(Us(t,{props:[je(a,/:(plac\w+)/,":"+ac+"$1")]})),il(Us(t,{props:[je(a,/:(plac\w+)/,_t+"input-$1")]})),il(Us(t,{props:[a]})),Ag(t,{props:ZE(n,i)});break}return""})}}var LI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn={},vl=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",UT="active",qT="data-styled-version",Ed="6.1.19",Ey=`/*!sc*/
`,Gf=typeof window<"u"&&typeof document<"u",UI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==""?Jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.SC_DISABLE_SPEEDY!==void 0&&Jn.SC_DISABLE_SPEEDY!==""&&Jn.SC_DISABLE_SPEEDY!=="false"&&Jn.SC_DISABLE_SPEEDY),qI={},bd=Object.freeze([]),El=Object.freeze({});function BT(t,e,n){return n===void 0&&(n=El),t.theme!==n.theme&&t.theme||e||n.theme}var zT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zI=/(^-|-$)/g;function tb(t){return t.replace(BI,"-").replace(zI,"")}var FI=/(a)(d)/gi,mf=52,nb=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ig(t){var e,n="";for(e=Math.abs(t);e>mf;e=e/mf|0)n=nb(e%mf)+n;return(nb(e%mf)+n).replace(FI,"$1-$2")}var ng,FT=5381,cl=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},$T=function(t){return cl(FT,t)};function HT(t){return Ig($T(t)>>>0)}function $I(t){return t.displayName||t.name||"Component"}function rg(t){return typeof t=="string"&&!0}var GT=typeof Symbol=="function"&&Symbol.for,YT=GT?Symbol.for("react.memo"):60115,HI=GT?Symbol.for("react.forward_ref"):60112,GI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},WI=((ng={})[HI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ng[YT]=WT,ng);function rb(t){return("type"in(e=t)&&e.type.$$typeof)===YT?WT:"$$typeof"in t?WI[t.$$typeof]:GI;var e}var QI=Object.defineProperty,KI=Object.getOwnPropertyNames,ib=Object.getOwnPropertySymbols,XI=Object.getOwnPropertyDescriptor,ZI=Object.getPrototypeOf,sb=Object.prototype;function QT(t,e,n){if(typeof e!="string"){if(sb){var i=ZI(e);i&&i!==sb&&QT(t,i,n)}var a=KI(e);ib&&(a=a.concat(ib(e)));for(var l=rb(t),c=rb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in YI||n&&n[p]||c&&p in c||l&&p in l)){var g=XI(e,p);try{QI(t,p,g)}catch{}}}}return t}function Ja(t){return typeof t=="function"}function by(t){return typeof t=="object"&&"styledComponentId"in t}function Ga(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Dg(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function mc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function kg(t,e,n){if(n===void 0&&(n=!1),!n&&!mc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=kg(t[i],e[i]);else if(mc(e))for(var i in e)t[i]=kg(t[i],e[i]);return t}function wy(t,e){Object.defineProperty(t,"toString",{value:e})}function eo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var JI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw eo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,n.length);c<p;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),a=i+n;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,c=a;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(Ey);return n},t}(),Of=new Map,Yf=new Map,Mf=1,gf=function(t){if(Of.has(t))return Of.get(t);for(;Yf.has(Mf);)Mf++;var e=Mf++;return Of.set(t,e),Yf.set(e,t),e},eD=function(t,e){Mf=e+1,Of.set(t,e),Yf.set(e,t)},tD="style[".concat(vl,"][").concat(qT,'="').concat(Ed,'"]'),nD=new RegExp("^".concat(vl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rD=function(t,e,n){for(var i,a=n.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&t.registerName(e,i)},iD=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ey),a=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(nD);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(eD(v,g),rD(t,v,p[3]),t.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},ab=function(t){for(var e=document.querySelectorAll(tD),n=0,i=e.length;n<i;n++){var a=e[n];a&&a.getAttribute(vl)!==UT&&(iD(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function sD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var KT=function(t){var e=document.head,n=t||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(vl,"]")));return p[p.length-1]}(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(vl,UT),i.setAttribute(qT,Ed);var c=sD();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},aD=function(){function t(e){this.element=KT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===n)return c}throw eo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),oD=function(){function t(e){this.element=KT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),lD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ob=Gf,uD={isServer:!Gf,useCSSOMInjection:!UI},Wf=function(){function t(e,n,i){e===void 0&&(e=El),n===void 0&&(n={});var a=this;this.options=hn(hn({},uD),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Gf&&ob&&(ob=!1,ab(this)),wy(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",g=function(b){var T=function(P){return Yf.get(P)}(b);if(T===void 0)return"continue";var C=l.names.get(T),N=c.getGroup(b);if(C===void 0||!C.size||N.length===0)return"continue";var F="".concat(vl,".g").concat(b,'[id="').concat(T,'"]'),M="";C!==void 0&&C.forEach(function(P){P.length>0&&(M+="".concat(P,","))}),p+="".concat(N).concat(F,'{content:"').concat(M,'"}').concat(Ey)},v=0;v<d;v++)g(v);return p}(a)})}return t.registerId=function(e){return gf(e)},t.prototype.rehydrate=function(){!this.server&&Gf&&ab(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(hn(hn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new lD(a):i?new aD(a):new oD(a)}(this.options),new JI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gf(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(gf(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),cD=/&/g,hD=/^\s*\/\/.*$/gm;function XT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=XT(n.children,e)),n})}function fD(t){var e,n,i,a=El,l=a.options,c=l===void 0?El:l,d=a.plugins,p=d===void 0?bd:d,g=function(T,C,N){return N.startsWith(n)&&N.endsWith(n)&&N.replaceAll(n,"").length>0?".".concat(e):T},v=p.slice();v.push(function(T){T.type===gd&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(cD,n).replace(i,g))}),c.prefix&&v.push(jI),v.push(NI);var b=function(T,C,N,F){C===void 0&&(C=""),N===void 0&&(N=""),F===void 0&&(F="&"),e=F,n=C,i=new RegExp("\\".concat(n,"\\b"),"g");var M=T.replace(hD,""),P=OI(N||C?"".concat(N," ").concat(C," { ").concat(M," }"):M);c.namespace&&(P=XT(P,c.namespace));var j=[];return Hf(P,PI(v.concat(VI(function(O){return j.push(O)})))),j};return b.hash=p.length?p.reduce(function(T,C){return C.name||eo(15),cl(T,C.name)},FT).toString():"",b}var dD=new Wf,Og=fD(),ZT=me.createContext({shouldForwardProp:void 0,styleSheet:dD,stylis:Og});ZT.Consumer;me.createContext(void 0);function Mg(){return q.useContext(ZT)}var pD=function(){function t(e,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Og);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,wy(this,function(){throw eo(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Og),this.name+e.hash},t}(),mD=function(t){return t>="A"&&t<="Z"};function lb(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;mD(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var JT=function(t){return t==null||t===!1||t===""},e1=function(t){var e,n,i=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!JT(l)&&(Array.isArray(l)&&l.isCss||Ja(l)?i.push("".concat(lb(a),":"),l,";"):mc(l)?i.push.apply(i,pc(pc(["".concat(a," {")],e1(l),!1),["}"],!1)):i.push("".concat(lb(a),": ").concat((e=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in LI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Hs(t,e,n,i){if(JT(t))return[];if(by(t))return[".".concat(t.styledComponentId)];if(Ja(t)){if(!Ja(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var a=t(e);return Hs(a,e,n,i)}var l;return t instanceof pD?n?(t.inject(n,i),[t.getName(i)]):[t]:mc(t)?e1(t):Array.isArray(t)?Array.prototype.concat.apply(bd,t.map(function(c){return Hs(c,e,n,i)})):[t.toString()]}function t1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ja(n)&&!by(n))return!1}return!0}var gD=$T(Ed),yD=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&t1(e),this.componentId=n,this.baseHash=cl(gD,n),this.baseStyle=i,Wf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Ga(a,this.staticRulesId);else{var l=Dg(Hs(this.rules,e,n,i)),c=Ig(cl(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}a=Ga(a,c),this.staticRulesId=c}else{for(var p=cl(this.baseHash,i.hash),g="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var T=Dg(Hs(b,e,n,i));p=cl(p,T+v),g+=T}}if(g){var C=Ig(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,i(g,".".concat(C),void 0,this.componentId)),a=Ga(a,C)}}return a},t}(),gc=me.createContext(void 0);gc.Consumer;function _D(t){var e=me.useContext(gc),n=q.useMemo(function(){return function(i,a){if(!i)throw eo(14);if(Ja(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw eo(8);return a?hn(hn({},a),i):i}(t.theme,e)},[t.theme,e]);return t.children?me.createElement(gc.Provider,{value:n},t.children):null}var ig={};function vD(t,e,n){var i=by(t),a=t,l=!rg(t),c=e.attrs,d=c===void 0?bd:c,p=e.componentId,g=p===void 0?function(te,z){var re=typeof te!="string"?"sc":tb(te);ig[re]=(ig[re]||0)+1;var R="".concat(re,"-").concat(HT(Ed+re+ig[re]));return z?"".concat(z,"-").concat(R):R}(e.displayName,e.parentComponentId):p,v=e.displayName,b=v===void 0?function(te){return rg(te)?"styled.".concat(te):"Styled(".concat($I(te),")")}(t):v,T=e.displayName&&e.componentId?"".concat(tb(e.displayName),"-").concat(e.componentId):e.componentId||g,C=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,N=e.shouldForwardProp;if(i&&a.shouldForwardProp){var F=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;N=function(te,z){return F(te,z)&&M(te,z)}}else N=F}var P=new yD(n,T,i?a.componentStyle:void 0);function j(te,z){return function(re,R,A){var I=re.attrs,U=re.componentStyle,k=re.defaultProps,B=re.foldedComponentIds,D=re.styledComponentId,Me=re.target,ce=me.useContext(gc),Y=Mg(),se=re.shouldForwardProp||Y.shouldForwardProp,fe=BT(R,ce,k)||El,Ee=function(_e,ge,it){for(var Le,yt=hn(hn({},ge),{className:void 0,theme:it}),Vn=0;Vn<_e.length;Vn+=1){var bn=Ja(Le=_e[Vn])?Le(yt):Le;for(var Xt in bn)yt[Xt]=Xt==="className"?Ga(yt[Xt],bn[Xt]):Xt==="style"?hn(hn({},yt[Xt]),bn[Xt]):bn[Xt]}return ge.className&&(yt.className=Ga(yt.className,ge.className)),yt}(I,R,fe),L=Ee.as||Me,ae={};for(var J in Ee)Ee[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&Ee.theme===fe||(J==="forwardedAs"?ae.as=Ee.forwardedAs:se&&!se(J,L)||(ae[J]=Ee[J]));var ie=function(_e,ge){var it=Mg(),Le=_e.generateAndInjectStyles(ge,it.styleSheet,it.stylis);return Le}(U,Ee),de=Ga(B,D);return ie&&(de+=" "+ie),Ee.className&&(de+=" "+Ee.className),ae[rg(L)&&!zT.has(L)?"class":"className"]=de,A&&(ae.ref=A),q.createElement(L,ae)}(O,te,z)}j.displayName=b;var O=me.forwardRef(j);return O.attrs=C,O.componentStyle=P,O.displayName=b,O.shouldForwardProp=N,O.foldedComponentIds=i?Ga(a.foldedComponentIds,a.styledComponentId):"",O.styledComponentId=T,O.target=i?a.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function(z){for(var re=[],R=1;R<arguments.length;R++)re[R-1]=arguments[R];for(var A=0,I=re;A<I.length;A++)kg(z,I[A],!0);return z}({},a.defaultProps,te):te}}),wy(O,function(){return".".concat(O.styledComponentId)}),l&&QT(O,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function ub(t,e){for(var n=[t[0]],i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}var cb=function(t){return Object.assign(t,{isCss:!0})};function n1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ja(t)||mc(t))return cb(Hs(ub(bd,pc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Hs(i):cb(Hs(ub(i,e)))}function Ng(t,e,n){if(n===void 0&&(n=El),!e)throw eo(1,e);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,n1.apply(void 0,pc([a],l,!1)))};return i.attrs=function(a){return Ng(t,e,hn(hn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ng(t,e,hn(hn({},n),a))},i}var r1=function(t){return Ng(vD,t)},H=r1;zT.forEach(function(t){H[t]=r1(t)});var ED=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=t1(e),Wf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,a){var l=a(Dg(Hs(this.rules,n,i,a)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,a){e>2&&Wf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,a)},t}();function i1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=n1.apply(void 0,pc([t],e,!1)),a="sc-global-".concat(HT(JSON.stringify(i))),l=new ED(i,a),c=function(p){var g=Mg(),v=me.useContext(gc),b=me.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&d(b,p,g.styleSheet,v,g.stylis),me.useLayoutEffect(function(){if(!g.styleSheet.server)return d(b,p,g.styleSheet,v,g.stylis),function(){return l.removeStyles(b,g.styleSheet)}},[b,p,g.styleSheet,v,g.stylis]),null};function d(p,g,v,b,T){if(l.isStatic)l.renderStyles(p,qI,v,T);else{var C=hn(hn({},g),{theme:BT(g,b,c.defaultProps)});l.renderStyles(p,C,v,T)}}return me.memo(c)}/**
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
 */const bD=()=>{};var hb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},wD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const a=t[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=t[n++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=t[n++],c=t[n++],d=t[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},a1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<t.length;a+=3){const l=t[a],c=a+1<t.length,d=c?t[a+1]:0,p=a+2<t.length,g=p?t[a+2]:0,v=l>>2,b=(l&3)<<4|d>>4;let T=(d&15)<<2|g>>6,C=g&63;p||(C=64,c||(T=64)),i.push(n[v],n[b],n[T],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<t.length;){const l=n[t.charAt(a++)],d=a<t.length?n[t.charAt(a)]:0;++a;const g=a<t.length?n[t.charAt(a)]:64;++a;const b=a<t.length?n[t.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new TD;const T=l<<2|d>>4;if(i.push(T),g!==64){const C=d<<4&240|g>>2;if(i.push(C),b!==64){const N=g<<6&192|b;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SD=function(t){const e=s1(t);return a1.encodeByteArray(e,!0)},Qf=function(t){return SD(t).replace(/\./g,"")},o1=function(t){try{return a1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const AD=()=>xD().__FIREBASE_DEFAULTS__,RD=()=>{if(typeof process>"u"||typeof hb>"u")return;const t=hb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&o1(t[1]);return e&&JSON.parse(e)},wd=()=>{try{return bD()||AD()||RD()||CD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l1=t=>{var e,n;return(n=(e=wd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ID=t=>{const e=l1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},u1=()=>{var t;return(t=wd())==null?void 0:t.config},c1=t=>{var e;return(e=wd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function kD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Qf(JSON.stringify(n)),Qf(JSON.stringify(c)),""].join(".")}const oc={};function OD(){const t={prod:[],emulator:[]};for(const e of Object.keys(oc))oc[e]?t.emulator.push(e):t.prod.push(e);return t}function MD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fb=!1;function f1(t,e){if(typeof window>"u"||typeof document>"u"||!Nl(window.location.host)||oc[t]===e||oc[t]||fb)return;oc[t]=e;function n(T){return`__firebase__banner__${T}`}const i="__firebase__banner",l=OD().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{fb=!0,c()},T}function v(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function b(){const T=MD(i),C=n("text"),N=document.getElementById(C)||document.createElement("span"),F=n("learnmore"),M=document.getElementById(F)||document.createElement("a"),P=n("preprendIcon"),j=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const O=T.element;d(O),v(M,F);const te=g();p(j,P),O.append(j,N,M,te),document.body.appendChild(O)}l?(N.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ND(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dn())}function PD(){var e;const t=(e=wd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UD(){const t=Dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qD(){return!PD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BD(){try{return typeof indexedDB=="object"}catch{return!1}}function zD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="FirebaseError";class is extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=FD,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oc.prototype.create)}}class Oc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?$D(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new is(a,d,i)}}function $D(t,e){return t.replace(HD,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const HD=/\{\$([^}]+)}/g;function GD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const l=t[a],c=e[a];if(db(l)&&db(c)){if(!to(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function db(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ju(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ec(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YD(t,e){const n=new WD(t,e);return n.subscribe.bind(n)}class WD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");QD(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=sg),a.error===void 0&&(a.error=sg),a.complete===void 0&&(a.complete=sg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sg(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class no{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new DD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZD(e))try{this.getOrInitializeService({instanceIdentifier:$a})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=$a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$a){return this.instances.has(e)}getOptions(e=$a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:XD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$a){return this.component?this.component.multipleInstances?e:$a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XD(t){return t===$a?void 0:t}function ZD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Fe||(Fe={}));const ek={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},tk=Fe.INFO,nk={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),a=nk[e];if(a)console[a](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ty{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let pb,mb;function sk(){return pb||(pb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ak(){return mb||(mb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d1=new WeakMap,Pg=new WeakMap,p1=new WeakMap,ag=new WeakMap,Sy=new WeakMap;function ok(t){const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Gs(t.result)),a()},c=()=>{i(t.error),a()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&d1.set(n,t)}).catch(()=>{}),Sy.set(e,t),e}function lk(t){if(Pg.has(t))return;const e=new Promise((n,i)=>{const a=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Pg.set(t,e)}let Vg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||p1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){Vg=t(Vg)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(og(this),e,...n);return p1.set(i,e.sort?e.sort():[e]),Gs(i)}:ak().includes(t)?function(...e){return t.apply(og(this),e),Gs(d1.get(this))}:function(...e){return Gs(t.apply(og(this),e))}}function hk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,sk())?new Proxy(t,Vg):t)}function Gs(t){if(t instanceof IDBRequest)return ok(t);if(ag.has(t))return ag.get(t);const e=hk(t);return e!==t&&(ag.set(t,e),Sy.set(e,t)),e}const og=t=>Sy.get(t);function fk(t,e,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(t,e),d=Gs(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Gs(c.result),p.oldVersion,p.newVersion,Gs(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const dk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],lg=new Map;function gb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lg.get(e))return lg.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=pk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||dk.includes(n)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[n](...d),a&&p.done]))[0]};return lg.set(e,l),l}uk(t=>({...t,get:(e,n,i)=>gb(e,n)||t.get(e,n,i),has:(e,n)=>!!gb(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jg="@firebase/app",yb="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Ty("@firebase/app"),yk="@firebase/app-compat",_k="@firebase/analytics-compat",vk="@firebase/analytics",Ek="@firebase/app-check-compat",bk="@firebase/app-check",wk="@firebase/auth",Tk="@firebase/auth-compat",Sk="@firebase/database",xk="@firebase/data-connect",Ak="@firebase/database-compat",Rk="@firebase/functions",Ck="@firebase/functions-compat",Ik="@firebase/installations",Dk="@firebase/installations-compat",kk="@firebase/messaging",Ok="@firebase/messaging-compat",Mk="@firebase/performance",Nk="@firebase/performance-compat",Pk="@firebase/remote-config",Vk="@firebase/remote-config-compat",jk="@firebase/storage",Lk="@firebase/storage-compat",Uk="@firebase/firestore",qk="@firebase/ai",Bk="@firebase/firestore-compat",zk="firebase",Fk="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="[DEFAULT]",$k={[jg]:"fire-core",[yk]:"fire-core-compat",[vk]:"fire-analytics",[_k]:"fire-analytics-compat",[bk]:"fire-app-check",[Ek]:"fire-app-check-compat",[wk]:"fire-auth",[Tk]:"fire-auth-compat",[Sk]:"fire-rtdb",[xk]:"fire-data-connect",[Ak]:"fire-rtdb-compat",[Rk]:"fire-fn",[Ck]:"fire-fn-compat",[Ik]:"fire-iid",[Dk]:"fire-iid-compat",[kk]:"fire-fcm",[Ok]:"fire-fcm-compat",[Mk]:"fire-perf",[Nk]:"fire-perf-compat",[Pk]:"fire-rc",[Vk]:"fire-rc-compat",[jk]:"fire-gcs",[Lk]:"fire-gcs-compat",[Uk]:"fire-fst",[Bk]:"fire-fst-compat",[qk]:"fire-vertex","fire-js":"fire-js",[zk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map,Hk=new Map,Ug=new Map;function _b(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bl(t){const e=t.name;if(Ug.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Ug.set(e,t);for(const n of Kf.values())_b(n,t);for(const n of Hk.values())_b(n,t);return!0}function xy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ys=new Oc("app","Firebase",Gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new no("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ys.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=Fk;function m1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Lg,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Ys.create("bad-app-name",{appName:String(a)});if(n||(n=u1()),!n)throw Ys.create("no-options");const l=Kf.get(a);if(l){if(to(n,l.options)&&to(i,l.config))return l;throw Ys.create("duplicate-app",{appName:a})}const c=new JD(a);for(const p of Ug.values())c.addComponent(p);const d=new Yk(n,i,c);return Kf.set(a,d),d}function g1(t=Lg){const e=Kf.get(t);if(!e&&t===Lg&&u1())return m1();if(!e)throw Ys.create("no-app",{appName:t});return e}function Ws(t,e,n){let i=$k[t]??t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(c.join(" "));return}bl(new no(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wk="firebase-heartbeat-database",Qk=1,yc="firebase-heartbeat-store";let ug=null;function y1(){return ug||(ug=fk(Wk,Qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yc)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ys.create("idb-open",{originalErrorMessage:t.message})})),ug}async function Kk(t){try{const n=(await y1()).transaction(yc),i=await n.objectStore(yc).get(_1(t));return await n.done,i}catch(e){if(e instanceof is)es.warn(e.message);else{const n=Ys.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function vb(t,e){try{const i=(await y1()).transaction(yc,"readwrite");await i.objectStore(yc).put(e,_1(t)),await i.done}catch(n){if(n instanceof is)es.warn(n.message);else{const i=Ys.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(i.message)}}}function _1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xk=1024,Zk=30;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tO(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Eb();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Zk){const c=nO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){es.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eb(),{heartbeatsToSend:i,unsentEntries:a}=eO(this._heartbeatsCache.heartbeats),l=Qf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return es.warn(n),""}}}function Eb(){return new Date().toISOString().substring(0,10)}function eO(t,e=Xk){const n=[];let i=t.slice();for(const a of t){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),bb(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),bb(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class tO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BD()?zD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bb(t){return Qf(JSON.stringify({version:2,heartbeats:t})).length}function nO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){bl(new no("platform-logger",e=>new mk(e),"PRIVATE")),bl(new no("heartbeat",e=>new Jk(e),"PRIVATE")),Ws(jg,yb,t),Ws(jg,yb,"esm2020"),Ws("fire-js","")}rO("");function v1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iO=v1,E1=new Oc("auth","Firebase",v1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Ty("@firebase/auth");function sO(t,...e){Xf.logLevel<=Fe.WARN&&Xf.warn(`Auth (${Pl}): ${t}`,...e)}function Nf(t,...e){Xf.logLevel<=Fe.ERROR&&Xf.error(`Auth (${Pl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,...e){throw Ay(t,...e)}function ii(t,...e){return Ay(t,...e)}function b1(t,e,n){const i={...iO(),[e]:n};return new Oc("auth","Firebase",i).create(e,{appName:t.name})}function Xi(t){return b1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ay(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return E1.create(t,...e)}function Ce(t,e,...n){if(!t)throw Ay(e,...n)}function Gi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nf(e),new Error(e)}function ts(t,e){t||Gi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function aO(){return wb()==="http:"||wb()==="https:"}function wb(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ts(n>e,"Short delay should be less than long delay!"),this.isMobile=ND()||LD()}get(){return oO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t,e){ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hO=new Nc(3e4,6e4);function oa(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ss(t,e,n,i,a={}){return T1(t,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Mc({key:t.config.apiKey,...c}).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const g={method:e,headers:p,...l};return VD()||(g.referrerPolicy="no-referrer"),t.emulatorConfig&&Nl(t.emulatorConfig.host)&&(g.credentials="include"),w1.fetch()(await S1(t,t.config.apiHost,n,d),g)})}async function T1(t,e,n){t._canInitEmulator=!1;const i={...uO,...e};try{const a=new dO(t),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw yf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw yf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw yf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw yf(t,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw b1(t,v,g);kr(t,v)}}catch(a){if(a instanceof is)throw a;kr(t,"network-request-failed",{message:String(a)})}}async function Pc(t,e,n,i,a={}){const l=await ss(t,e,n,i,a);return"mfaPendingCredential"in l&&kr(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function S1(t,e,n,i){const a=`${e}${n}?${i}`,l=t,c=l.config.emulator?Ry(t.config,a):`${t.config.apiScheme}://${a}`;return cO.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function fO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ii(this.auth,"network-request-failed")),hO.get())})}}function yf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=ii(t,e,i);return a.customData._tokenResponse=n,a}function Tb(t){return t!==void 0&&t.enterprise!==void 0}class pO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mO(t,e){return ss(t,"GET","/v2/recaptchaConfig",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function Zf(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yO(t,e=!1){const n=Ft(t),i=await n.getIdToken(e),a=Cy(i);Ce(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:lc(cg(a.auth_time)),issuedAtTime:lc(cg(a.iat)),expirationTime:lc(cg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function cg(t){return Number(t)*1e3}function Cy(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Nf("JWT malformed, contained fewer than 3 sections"),null;try{const a=o1(n);return a?JSON.parse(a):(Nf("Failed to decode base64 JWT payload"),null)}catch(a){return Nf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Sb(t){const e=Cy(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof is&&_O(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _O({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lc(this.lastLoginAt),this.creationTime=lc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(t){var b;const e=t.auth,n=await t.getIdToken(),i=await wl(t,Zf(e,{idToken:n}));Ce(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const l=(b=a.providerUserInfo)!=null&&b.length?x1(a.providerUserInfo):[],c=bO(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Bg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,v)}async function EO(t){const e=Ft(t);await Jf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bO(t,e){return[...t.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function x1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){const n=await T1(t,{},async()=>{const i=Mc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=t.config,c=await S1(t,a,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return t.emulatorConfig&&Nl(t.emulatorConfig.host)&&(p.credentials="include"),w1.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TO(t,e){return ss(t,"POST","/v2/accounts:revokeToken",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const n=Sb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await wO(e,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,c=new fl;return i&&(Ce(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Ce(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ce(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fl,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor({uid:e,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new vO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Bg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await wl(this,this.stsTokenManager.getToken(this.auth,e));return Ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yO(this,e)}reload(){return EO(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Jf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await wl(this,gO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:b,emailVerified:T,isAnonymous:C,providerData:N,stsTokenManager:F}=n;Ce(b&&F,e,"internal-error");const M=fl.fromJSON(this.name,F);Ce(typeof b=="string",e,"internal-error"),js(i,e.name),js(a,e.name),Ce(typeof T=="boolean",e,"internal-error"),Ce(typeof C=="boolean",e,"internal-error"),js(l,e.name),js(c,e.name),js(d,e.name),js(p,e.name),js(g,e.name),js(v,e.name);const P=new xr({uid:b,auth:e,email:a,emailVerified:T,displayName:i,isAnonymous:C,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:M,createdAt:g,lastLoginAt:v});return N&&Array.isArray(N)&&(P.providerData=N.map(j=>({...j}))),p&&(P._redirectEventId=p),P}static async _fromIdTokenResponse(e,n,i=!1){const a=new fl;a.updateFromServerResponse(n);const l=new xr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Jf(l),l}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];Ce(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?x1(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new fl;d.updateFromIdToken(i);const p=new xr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Bg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new Map;function Yi(t){ts(t instanceof Function,"Expected a class definition");let e=xb.get(t);return e?(ts(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xb.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A1.type="NONE";const Ab=A1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e,n){return`firebase:${t}:${e}:${n}`}class dl{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Pf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Pf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Zf(this.auth,{idToken:e}).catch(()=>{});return n?xr._fromGetAccountInfoResponse(this.auth,n,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new dl(Yi(Ab),e,i);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Yi(Ab);const c=Pf(i,e.config.apiKey,e.name);let d=null;for(const g of n)try{const v=await g._get(c);if(v){let b;if(typeof v=="string"){const T=await Zf(e,{idToken:v}).catch(()=>{});if(!T)break;b=await xr._fromGetAccountInfoResponse(e,T,v)}else b=xr._fromJSON(e,v);g!==l&&(d=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new dl(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new dl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O1(e))return"Blackberry";if(M1(e))return"Webos";if(C1(e))return"Safari";if((e.includes("chrome/")||I1(e))&&!e.includes("edge/"))return"Chrome";if(k1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function R1(t=Dn()){return/firefox\//i.test(t)}function C1(t=Dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I1(t=Dn()){return/crios\//i.test(t)}function D1(t=Dn()){return/iemobile/i.test(t)}function k1(t=Dn()){return/android/i.test(t)}function O1(t=Dn()){return/blackberry/i.test(t)}function M1(t=Dn()){return/webos/i.test(t)}function Iy(t=Dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SO(t=Dn()){var e;return Iy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function xO(){return UD()&&document.documentMode===10}function N1(t=Dn()){return Iy(t)||k1(t)||M1(t)||O1(t)||/windows phone/i.test(t)||D1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e=[]){let n;switch(t){case"Browser":n=Rb(Dn());break;case"Worker":n=`${Rb(Dn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pl}/${i}`}/**
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
 */async function RO(t,e={}){return ss(t,"GET","/v2/passwordPolicy",oa(t,e))}/**
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
 */class DO{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cb(this),this.idTokenSubscription=new Cb(this),this.beforeStateQueue=new AO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await dl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zf(this,{idToken:e}),i=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(gr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(Xi(this));const n=e?Ft(e):null;return n&&Ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RO(this),n=new IO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await TO(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yi(e)||this._popupRedirectResolver;Ce(n,this,"argument-error"),this.redirectPersistenceManager=await dl.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(gr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&sO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function lo(t){return Ft(t)}class Cb{constructor(e){this.auth=e,this.observer=null,this.addObserver=YD(n=>this.observer=n)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kO(t){Td=t}function V1(t){return Td.loadJS(t)}function OO(){return Td.recaptchaEnterpriseScript}function MO(){return Td.gapiScript}function NO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class PO{constructor(){this.enterprise=new VO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jO="recaptcha-enterprise",j1="NO_RECAPTCHA";class LO{constructor(e){this.type=jO,this.auth=lo(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{mO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new pO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;Tb(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(j1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!n&&Tb(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=OO();p.length!==0&&(p+=d),V1(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Ib(t,e,n,i=!1,a=!1){const l=new LO(t);let c;if(a)c=j1;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const d={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function zg(t,e,n,i,a){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ib(t,e,n,n==="getOobCode");return i(t,c)}else return i(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ib(t,e,n,n==="getOobCode");return i(t,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e){const n=xy(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(to(l,e??{}))return a;kr(a,"already-initialized")}return n.initialize({options:e})}function qO(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function BO(t,e,n){const i=lo(t);Ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=L1(e),{host:c,port:d}=zO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Ce(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ce(to(g,i.config.emulator)&&to(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,Nl(c)?(h1(`${l}//${c}${p}`),f1("Auth",!0)):FO()}function L1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zO(t){const e=L1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Db(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Db(c)}}}function Db(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(e){return Gi("not implemented")}_linkToIdToken(e,n){return Gi("not implemented")}_getReauthenticationResolver(e){return Gi("not implemented")}}async function $O(t,e){return ss(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){return Pc(t,"POST","/v1/accounts:signInWithPassword",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}async function YO(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Dy{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new _c(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new _c(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(e,n,"signInWithPassword",HO);case"emailLink":return GO(e,{email:this._email,oobCode:this._password});default:kr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(e,i,"signUpPassword",$O);case"emailLink":return YO(e,{idToken:n,email:this._email,oobCode:this._password});default:kr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t,e){return Pc(t,"POST","/v1/accounts:signInWithIdp",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="http://localhost";class ro extends Dy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const c=new ro(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return pl(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,pl(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pl(e,n)}buildRequest(){const e={requestUri:WO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KO(t){const e=Ju(ec(t)).link,n=e?Ju(ec(e)).deep_link_id:null,i=Ju(ec(t)).deep_link_id;return(i?Ju(ec(i)).link:null)||i||n||e||t}class ky{constructor(e){const n=Ju(ec(e)),i=n.apiKey??null,a=n.oobCode??null,l=QO(n.mode??null);Ce(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=KO(e);try{return new ky(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.providerId=Vl.PROVIDER_ID}static credential(e,n){return _c._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ky.parseLink(n);return Ce(i,"argument-error"),_c._fromEmailAndCode(e,i.code,i.tenantId)}}Vl.PROVIDER_ID="password";Vl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vc extends U1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Vc{constructor(){super("facebook.com")}static credential(e){return ro._fromParams({providerId:qs.PROVIDER_ID,signInMethod:qs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qs.credentialFromTaggedObject(e)}static credentialFromError(e){return qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qs.credential(e.oauthAccessToken)}catch{return null}}}qs.FACEBOOK_SIGN_IN_METHOD="facebook.com";qs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Vc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ro._fromParams({providerId:Bs.PROVIDER_ID,signInMethod:Bs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bs.credentialFromTaggedObject(e)}static credentialFromError(e){return Bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Bs.credential(n,i)}catch{return null}}}Bs.GOOGLE_SIGN_IN_METHOD="google.com";Bs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Vc{constructor(){super("github.com")}static credential(e){return ro._fromParams({providerId:zs.PROVIDER_ID,signInMethod:zs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zs.credentialFromTaggedObject(e)}static credentialFromError(e){return zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zs.credential(e.oauthAccessToken)}catch{return null}}}zs.GITHUB_SIGN_IN_METHOD="github.com";zs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Vc{constructor(){super("twitter.com")}static credential(e,n){return ro._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Fs.credential(n,i)}catch{return null}}}Fs.TWITTER_SIGN_IN_METHOD="twitter.com";Fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){return Pc(t,"POST","/v1/accounts:signUp",oa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const l=await xr._fromIdTokenResponse(e,i,a),c=kb(i);return new io({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=kb(i);return new io({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function kb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends is{constructor(e,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,ed.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new ed(e,n,i,a)}}function q1(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ed._fromErrorAndOperation(t,l,e,i):l})}async function ZO(t,e,n=!1){const i=await wl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return io._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e,n=!1){const{auth:i}=t;if(gr(i.app))return Promise.reject(Xi(i));const a="reauthenticate";try{const l=await wl(t,q1(i,a,e,t),n);Ce(l.idToken,i,"internal-error");const c=Cy(l.idToken);Ce(c,i,"internal-error");const{sub:d}=c;return Ce(t.uid===d,i,"user-mismatch"),io._forOperation(t,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&kr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e,n=!1){if(gr(t.app))return Promise.reject(Xi(t));const i="signIn",a=await q1(t,i,e),l=await io._fromIdTokenResponse(t,i,a);return n||await t._updateCurrentUser(l.user),l}async function eM(t,e){return B1(lo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t){const e=lo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tM(t,e,n){if(gr(t.app))return Promise.reject(Xi(t));const i=lo(t),c=await zg(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&z1(t),p}),d=await io._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function nM(t,e,n){return gr(t.app)?Promise.reject(Xi(t)):eM(Ft(t),Vl.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&z1(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Ft(t),l={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},c=await wl(i,rM(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function sM(t,e,n,i){return Ft(t).onIdTokenChanged(e,n,i)}function aM(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function Sd(t,e,n,i){return Ft(t).onAuthStateChanged(e,n,i)}function oM(t){return Ft(t).signOut()}const td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(td,"1"),this.storage.removeItem(td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new xd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:l}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(n.origin,l)),p=await hM(d);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Oy("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(b){const T=b;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return window}function dM(t){si().location.href=t}/**
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
 */function Y1(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function pM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function gM(){return Y1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="firebaseLocalStorageDb",yM=1,nd="firebaseLocalStorage",Q1="fbase_key";class jc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ad(t,e){return t.transaction([nd],e?"readwrite":"readonly").objectStore(nd)}function _M(){const t=indexedDB.deleteDatabase(W1);return new jc(t).toPromise()}function Fg(){const t=indexedDB.open(W1,yM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(nd,{keyPath:Q1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(nd)?e(i):(i.close(),await _M(),e(await Fg()))})})}async function Ob(t,e,n){const i=Ad(t,!0).put({[Q1]:e,value:n});return new jc(i).toPromise()}async function vM(t,e){const n=Ad(t,!1).get(e),i=await new jc(n).toPromise();return i===void 0?null:i.value}function Mb(t,e){const n=Ad(t,!0).delete(e);return new jc(n).toPromise()}const EM=800,bM=3;class K1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>bM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xd._getInstance(gM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await pM(),!this.activeServiceWorker)return;this.sender=new fM(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fg();return await Ob(e,td,"1"),await Mb(e,td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ob(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>vM(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Ad(a,!1).getAll();return new jc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K1.type="LOCAL";const wM=K1;new Nc(3e4,6e4);/**
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
 */function TM(t,e){return e?Yi(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends Dy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SM(t){return B1(t.auth,new My(t),t.bypassAuthState)}function xM(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),JO(n,new My(t),t.bypassAuthState)}async function AM(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),ZO(n,new My(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SM;case"linkViaPopup":case"linkViaRedirect":return AM;case"reauthViaPopup":case"reauthViaRedirect":return xM;default:kr(this.auth,"internal-error")}}resolve(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=new Nc(2e3,1e4);class hl extends X1{constructor(e,n,i,a,l){super(e,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,hl.currentPopupAction&&hl.currentPopupAction.cancel(),hl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){ts(this.filter.length===1,"Popup operations only handle one event");const e=Oy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RM.get())};e()}}hl.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="pendingRedirect",Vf=new Map;class IM extends X1{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Vf.get(this.auth._key());if(!e){try{const i=await DM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Vf.set(this.auth._key(),e)}return this.bypassAuthState||Vf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DM(t,e){const n=MM(e),i=OM(t);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function kM(t,e){Vf.set(t._key(),e)}function OM(t){return Yi(t._redirectPersistence)}function MM(t){return Pf(CM,t.config.apiKey,t.name)}async function NM(t,e,n=!1){if(gr(t.app))return Promise.reject(Xi(t));const i=lo(t),a=TM(i,e),c=await new IM(i,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=600*1e3;class VM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Z1(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(ii(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nb(e))}saveEventToCache(e){this.cachedEventUids.add(Nb(e)),this.lastProcessedEventTime=Date.now()}}function Nb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qM=/^https?/;async function BM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LM(t);for(const n of e)try{if(zM(n))return}catch{}kr(t,"unauthorized-domain")}function zM(t){const e=qg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!qM.test(n))return!1;if(UM.test(t))return i===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const FM=new Nc(3e4,6e4);function Pb(){const t=si().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $M(t){return new Promise((e,n)=>{var a,l,c;function i(){Pb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pb(),n(ii(t,"network-request-failed"))},timeout:FM.get()})}if((l=(a=si().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=si().gapi)!=null&&c.load)i();else{const d=NO("iframefcb");return si()[d]=()=>{gapi.load?i():n(ii(t,"network-request-failed"))},V1(`${MO()}?onload=${d}`).catch(p=>n(p))}}).catch(e=>{throw jf=null,e})}let jf=null;function HM(t){return jf=jf||$M(t),jf}/**
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
 */const GM=new Nc(5e3,15e3),YM="__/auth/iframe",WM="emulator/auth/iframe",QM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XM(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ry(e,WM):`https://${t.config.authDomain}/${YM}`,i={apiKey:e.apiKey,appName:t.name,v:Pl},a=KM.get(t.config.apiHost);a&&(i.eid=a);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Mc(i).slice(1)}`}async function ZM(t){const e=await HM(t),n=si().gapi;return Ce(n,t,"internal-error"),e.open({where:document.body,url:XM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QM,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=ii(t,"network-request-failed"),d=si().setTimeout(()=>{l(c)},GM.get());function p(){si().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const JM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eN=500,tN=600,nN="_blank",rN="http://localhost";class Vb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iN(t,e,n,i=eN,a=tN){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p={...JM,width:i.toString(),height:a.toString(),top:l,left:c},g=Dn().toLowerCase();n&&(d=I1(g)?nN:n),R1(g)&&(e=e||rN,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[C,N])=>`${T}${C}=${N},`,"");if(SO(g)&&d!=="_self")return sN(e||"",d),new Vb(null);const b=window.open(e||"",d,v);Ce(b,t,"popup-blocked");try{b.focus()}catch{}return new Vb(b)}function sN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const aN="__/auth/handler",oN="emulator/auth/handler",lN=encodeURIComponent("fac");async function jb(t,e,n,i,a,l){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Pl,eventId:a};if(e instanceof U1){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",GD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries({}))c[v]=b}if(e instanceof Vc){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(c.scopes=v.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await t._getAppCheckToken(),g=p?`#${lN}=${encodeURIComponent(p)}`:"";return`${uN(t)}?${Mc(d).slice(1)}${g}`}function uN({config:t}){return t.emulator?Ry(t,oN):`https://${t.authDomain}/${aN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="webStorageSupport";class cN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G1,this._completeRedirectFn=NM,this._overrideRedirectResult=kM}async _openPopup(e,n,i,a){var c;ts((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await jb(e,n,i,qg(),a);return iN(e,l,Oy())}async _openRedirect(e,n,i,a){await this._originValidation(e);const l=await jb(e,n,i,qg(),a);return dM(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(ts(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ZM(e),i=new VM(e);return n.register("authEvent",a=>(Ce(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hg,{type:hg},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[hg];l!==void 0&&n(!!l),kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N1()||C1()||Iy()}}const hN=cN;var Lb="@firebase/auth",Ub="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pN(t){bl(new no("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ce(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P1(t)},g=new DO(i,a,l,p);return qO(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),bl(new no("auth-internal",e=>{const n=lo(e.getProvider("auth").getImmediate());return(i=>new fN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ws(Lb,Ub,dN(t)),Ws(Lb,Ub,"esm2020")}/**
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
 */const mN=300,gN=c1("authIdTokenMaxAge")||mN;let qb=null;const yN=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>gN)return;const a=n==null?void 0:n.token;qb!==a&&(qb=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function _N(t=g1()){const e=xy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UO(t,{popupRedirectResolver:hN,persistence:[wM,cM,G1]}),i=c1("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=yN(l.toString());aM(n,c,()=>c(n.currentUser)),sM(n,d=>c(d))}}const a=l1("auth");return a&&BO(n,`http://${a}`),n}function vN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}kO({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=a=>{const l=ii("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",vN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pN("Browser");var EN="firebase",bN="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws(EN,bN,"app");var Bb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs,J1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function I(){}I.prototype=A.prototype,R.D=A.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(U,k,B){for(var D=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)D[Me-2]=arguments[Me];return A.prototype[k].apply(U,D)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,A,I){I||(I=0);var U=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)U[k]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(k=0;16>k;++k)U[k]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=R.g[0],I=R.g[1],k=R.g[2];var B=R.g[3],D=A+(B^I&(k^B))+U[0]+3614090360&4294967295;A=I+(D<<7&4294967295|D>>>25),D=B+(k^A&(I^k))+U[1]+3905402710&4294967295,B=A+(D<<12&4294967295|D>>>20),D=k+(I^B&(A^I))+U[2]+606105819&4294967295,k=B+(D<<17&4294967295|D>>>15),D=I+(A^k&(B^A))+U[3]+3250441966&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(B^I&(k^B))+U[4]+4118548399&4294967295,A=I+(D<<7&4294967295|D>>>25),D=B+(k^A&(I^k))+U[5]+1200080426&4294967295,B=A+(D<<12&4294967295|D>>>20),D=k+(I^B&(A^I))+U[6]+2821735955&4294967295,k=B+(D<<17&4294967295|D>>>15),D=I+(A^k&(B^A))+U[7]+4249261313&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(B^I&(k^B))+U[8]+1770035416&4294967295,A=I+(D<<7&4294967295|D>>>25),D=B+(k^A&(I^k))+U[9]+2336552879&4294967295,B=A+(D<<12&4294967295|D>>>20),D=k+(I^B&(A^I))+U[10]+4294925233&4294967295,k=B+(D<<17&4294967295|D>>>15),D=I+(A^k&(B^A))+U[11]+2304563134&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(B^I&(k^B))+U[12]+1804603682&4294967295,A=I+(D<<7&4294967295|D>>>25),D=B+(k^A&(I^k))+U[13]+4254626195&4294967295,B=A+(D<<12&4294967295|D>>>20),D=k+(I^B&(A^I))+U[14]+2792965006&4294967295,k=B+(D<<17&4294967295|D>>>15),D=I+(A^k&(B^A))+U[15]+1236535329&4294967295,I=k+(D<<22&4294967295|D>>>10),D=A+(k^B&(I^k))+U[1]+4129170786&4294967295,A=I+(D<<5&4294967295|D>>>27),D=B+(I^k&(A^I))+U[6]+3225465664&4294967295,B=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(B^A))+U[11]+643717713&4294967295,k=B+(D<<14&4294967295|D>>>18),D=I+(B^A&(k^B))+U[0]+3921069994&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^B&(I^k))+U[5]+3593408605&4294967295,A=I+(D<<5&4294967295|D>>>27),D=B+(I^k&(A^I))+U[10]+38016083&4294967295,B=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(B^A))+U[15]+3634488961&4294967295,k=B+(D<<14&4294967295|D>>>18),D=I+(B^A&(k^B))+U[4]+3889429448&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^B&(I^k))+U[9]+568446438&4294967295,A=I+(D<<5&4294967295|D>>>27),D=B+(I^k&(A^I))+U[14]+3275163606&4294967295,B=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(B^A))+U[3]+4107603335&4294967295,k=B+(D<<14&4294967295|D>>>18),D=I+(B^A&(k^B))+U[8]+1163531501&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(k^B&(I^k))+U[13]+2850285829&4294967295,A=I+(D<<5&4294967295|D>>>27),D=B+(I^k&(A^I))+U[2]+4243563512&4294967295,B=A+(D<<9&4294967295|D>>>23),D=k+(A^I&(B^A))+U[7]+1735328473&4294967295,k=B+(D<<14&4294967295|D>>>18),D=I+(B^A&(k^B))+U[12]+2368359562&4294967295,I=k+(D<<20&4294967295|D>>>12),D=A+(I^k^B)+U[5]+4294588738&4294967295,A=I+(D<<4&4294967295|D>>>28),D=B+(A^I^k)+U[8]+2272392833&4294967295,B=A+(D<<11&4294967295|D>>>21),D=k+(B^A^I)+U[11]+1839030562&4294967295,k=B+(D<<16&4294967295|D>>>16),D=I+(k^B^A)+U[14]+4259657740&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^B)+U[1]+2763975236&4294967295,A=I+(D<<4&4294967295|D>>>28),D=B+(A^I^k)+U[4]+1272893353&4294967295,B=A+(D<<11&4294967295|D>>>21),D=k+(B^A^I)+U[7]+4139469664&4294967295,k=B+(D<<16&4294967295|D>>>16),D=I+(k^B^A)+U[10]+3200236656&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^B)+U[13]+681279174&4294967295,A=I+(D<<4&4294967295|D>>>28),D=B+(A^I^k)+U[0]+3936430074&4294967295,B=A+(D<<11&4294967295|D>>>21),D=k+(B^A^I)+U[3]+3572445317&4294967295,k=B+(D<<16&4294967295|D>>>16),D=I+(k^B^A)+U[6]+76029189&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(I^k^B)+U[9]+3654602809&4294967295,A=I+(D<<4&4294967295|D>>>28),D=B+(A^I^k)+U[12]+3873151461&4294967295,B=A+(D<<11&4294967295|D>>>21),D=k+(B^A^I)+U[15]+530742520&4294967295,k=B+(D<<16&4294967295|D>>>16),D=I+(k^B^A)+U[2]+3299628645&4294967295,I=k+(D<<23&4294967295|D>>>9),D=A+(k^(I|~B))+U[0]+4096336452&4294967295,A=I+(D<<6&4294967295|D>>>26),D=B+(I^(A|~k))+U[7]+1126891415&4294967295,B=A+(D<<10&4294967295|D>>>22),D=k+(A^(B|~I))+U[14]+2878612391&4294967295,k=B+(D<<15&4294967295|D>>>17),D=I+(B^(k|~A))+U[5]+4237533241&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~B))+U[12]+1700485571&4294967295,A=I+(D<<6&4294967295|D>>>26),D=B+(I^(A|~k))+U[3]+2399980690&4294967295,B=A+(D<<10&4294967295|D>>>22),D=k+(A^(B|~I))+U[10]+4293915773&4294967295,k=B+(D<<15&4294967295|D>>>17),D=I+(B^(k|~A))+U[1]+2240044497&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~B))+U[8]+1873313359&4294967295,A=I+(D<<6&4294967295|D>>>26),D=B+(I^(A|~k))+U[15]+4264355552&4294967295,B=A+(D<<10&4294967295|D>>>22),D=k+(A^(B|~I))+U[6]+2734768916&4294967295,k=B+(D<<15&4294967295|D>>>17),D=I+(B^(k|~A))+U[13]+1309151649&4294967295,I=k+(D<<21&4294967295|D>>>11),D=A+(k^(I|~B))+U[4]+4149444226&4294967295,A=I+(D<<6&4294967295|D>>>26),D=B+(I^(A|~k))+U[11]+3174756917&4294967295,B=A+(D<<10&4294967295|D>>>22),D=k+(A^(B|~I))+U[2]+718787259&4294967295,k=B+(D<<15&4294967295|D>>>17),D=I+(B^(k|~A))+U[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+B&4294967295}i.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var I=A-this.blockSize,U=this.B,k=this.h,B=0;B<A;){if(k==0)for(;B<=I;)a(this,R,B),B+=this.blockSize;if(typeof R=="string"){for(;B<A;)if(U[k++]=R.charCodeAt(B++),k==this.blockSize){a(this,U),k=0;break}}else for(;B<A;)if(U[k++]=R[B++],k==this.blockSize){a(this,U),k=0;break}}this.h=k,this.o+=A},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var I=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=I&255,I/=256;for(this.u(R),R=Array(16),A=I=0;4>A;++A)for(var U=0;32>U;U+=8)R[I++]=this.g[A]>>>U&255;return R};function l(R,A){var I=d;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=A(R)}function c(R,A){this.h=A;for(var I=[],U=!0,k=R.length-1;0<=k;k--){var B=R[k]|0;U&&B==A||(I[k]=B,U=!1)}this.g=I}var d={};function p(R){return-128<=R&&128>R?l(R,function(A){return new c([A|0],0>A?-1:0)}):new c([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return b;if(0>R)return M(g(-R));for(var A=[],I=1,U=0;R>=I;U++)A[U]=R/I|0,I*=4294967296;return new c(A,0)}function v(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return M(v(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(A,8)),U=b,k=0;k<R.length;k+=8){var B=Math.min(8,R.length-k),D=parseInt(R.substring(k,k+B),A);8>B?(B=g(Math.pow(A,B)),U=U.j(B).add(g(D))):(U=U.j(I),U=U.add(g(D)))}return U}var b=p(0),T=p(1),C=p(16777216);t=c.prototype,t.m=function(){if(F(this))return-M(this).m();for(var R=0,A=1,I=0;I<this.g.length;I++){var U=this.i(I);R+=(0<=U?U:4294967296+U)*A,A*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N(this))return"0";if(F(this))return"-"+M(this).toString(R);for(var A=g(Math.pow(R,6)),I=this,U="";;){var k=te(I,A).g;I=P(I,k.j(A));var B=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=k,N(I))return B+U;for(;6>B.length;)B="0"+B;U=B+U}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function N(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function F(R){return R.h==-1}t.l=function(R){return R=P(this,R),F(R)?-1:N(R)?0:1};function M(R){for(var A=R.g.length,I=[],U=0;U<A;U++)I[U]=~R.g[U];return new c(I,~R.h).add(T)}t.abs=function(){return F(this)?M(this):this},t.add=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],U=0,k=0;k<=A;k++){var B=U+(this.i(k)&65535)+(R.i(k)&65535),D=(B>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);U=D>>>16,B&=65535,D&=65535,I[k]=D<<16|B}return new c(I,I[I.length-1]&-2147483648?-1:0)};function P(R,A){return R.add(M(A))}t.j=function(R){if(N(this)||N(R))return b;if(F(this))return F(R)?M(this).j(M(R)):M(M(this).j(R));if(F(R))return M(this.j(M(R)));if(0>this.l(C)&&0>R.l(C))return g(this.m()*R.m());for(var A=this.g.length+R.g.length,I=[],U=0;U<2*A;U++)I[U]=0;for(U=0;U<this.g.length;U++)for(var k=0;k<R.g.length;k++){var B=this.i(U)>>>16,D=this.i(U)&65535,Me=R.i(k)>>>16,ce=R.i(k)&65535;I[2*U+2*k]+=D*ce,j(I,2*U+2*k),I[2*U+2*k+1]+=B*ce,j(I,2*U+2*k+1),I[2*U+2*k+1]+=D*Me,j(I,2*U+2*k+1),I[2*U+2*k+2]+=B*Me,j(I,2*U+2*k+2)}for(U=0;U<A;U++)I[U]=I[2*U+1]<<16|I[2*U];for(U=A;U<2*A;U++)I[U]=0;return new c(I,0)};function j(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function O(R,A){this.g=R,this.h=A}function te(R,A){if(N(A))throw Error("division by zero");if(N(R))return new O(b,b);if(F(R))return A=te(M(R),A),new O(M(A.g),M(A.h));if(F(A))return A=te(R,M(A)),new O(M(A.g),A.h);if(30<R.g.length){if(F(R)||F(A))throw Error("slowDivide_ only works with positive integers.");for(var I=T,U=A;0>=U.l(R);)I=z(I),U=z(U);var k=re(I,1),B=re(U,1);for(U=re(U,2),I=re(I,2);!N(U);){var D=B.add(U);0>=D.l(R)&&(k=k.add(I),B=D),U=re(U,1),I=re(I,1)}return A=P(R,k.j(A)),new O(k,A)}for(k=b;0<=R.l(A);){for(I=Math.max(1,Math.floor(R.m()/A.m())),U=Math.ceil(Math.log(I)/Math.LN2),U=48>=U?1:Math.pow(2,U-48),B=g(I),D=B.j(A);F(D)||0<D.l(R);)I-=U,B=g(I),D=B.j(A);N(B)&&(B=T),k=k.add(B),R=P(R,D)}return new O(k,R)}t.A=function(R){return te(this,R).h},t.and=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],U=0;U<A;U++)I[U]=this.i(U)&R.i(U);return new c(I,this.h&R.h)},t.or=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],U=0;U<A;U++)I[U]=this.i(U)|R.i(U);return new c(I,this.h|R.h)},t.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),I=[],U=0;U<A;U++)I[U]=this.i(U)^R.i(U);return new c(I,this.h^R.h)};function z(R){for(var A=R.g.length+1,I=[],U=0;U<A;U++)I[U]=R.i(U)<<1|R.i(U-1)>>>31;return new c(I,R.h)}function re(R,A){var I=A>>5;A%=32;for(var U=R.g.length-I,k=[],B=0;B<U;B++)k[B]=0<A?R.i(B+I)>>>A|R.i(B+I+1)<<32-A:R.i(B+I);return new c(k,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,J1=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Qs=c}).apply(typeof Bb<"u"?Bb:typeof self<"u"?self:typeof window<"u"?window:{});var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eS,tc,tS,Lf,$g,nS,rS,iS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof _f=="object"&&_f];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function a(h,y){if(y)e:{var E=i;h=h.split(".");for(var x=0;x<h.length-1;x++){var W=h[x];if(!(W in E))break e;E=E[W]}h=h[h.length-1],x=E[h],y=y(x),y!=x&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function l(h,y){h instanceof String&&(h+="");var E=0,x=!1,W={next:function(){if(!x&&E<h.length){var ee=E++;return{value:y(ee,h[ee]),done:!1}}return x=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}a("Array.prototype.values",function(h){return h||function(){return l(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function g(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function v(h,y,E){return h.call.apply(h.bind,arguments)}function b(h,y,E){if(!h)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var W=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(W,x),h.apply(y,W)}}return function(){return h.apply(y,arguments)}}function T(h,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,T.apply(null,arguments)}function C(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var x=E.slice();return x.push.apply(x,arguments),h.apply(this,x)}}function N(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(x,W,ee){for(var pe=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)pe[Ge-2]=arguments[Ge];return y.prototype[W].apply(x,pe)}}function F(h){const y=h.length;if(0<y){const E=Array(y);for(let x=0;x<y;x++)E[x]=h[x];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const x=arguments[E];if(p(x)){const W=h.length||0,ee=x.length||0;h.length=W+ee;for(let pe=0;pe<ee;pe++)h[W+pe]=x[pe]}else h.push(x)}}class P{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function j(h){return/^[\s\xa0]*$/.test(h)}function O(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function te(h){return te[" "](h),h}te[" "]=function(){};var z=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function re(h,y,E){for(const x in h)y.call(E,h[x],x,h)}function R(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function A(h){const y={};for(const E in h)y[E]=h[E];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(h,y){let E,x;for(let W=1;W<arguments.length;W++){x=arguments[W];for(E in x)h[E]=x[E];for(let ee=0;ee<I.length;ee++)E=I[ee],Object.prototype.hasOwnProperty.call(x,E)&&(h[E]=x[E])}}function k(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function B(h){d.setTimeout(()=>{throw h},0)}function D(){var h=Ee;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Me{constructor(){this.h=this.g=null}add(y,E){const x=ce.get();x.set(y,E),this.h?this.h.next=x:this.g=x,this.h=x}}var ce=new P(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let se,fe=!1,Ee=new Me,L=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then(ae)}};var ae=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(E){B(E)}var y=ce;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}fe=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function _e(h,y){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,x=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(z){e:{try{te(y.nodeName);var W=!0;break e}catch{}W=!1}W||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ge[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&_e.aa.h.call(this)}}N(_e,ie);var ge={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),Le=0;function yt(h,y,E,x,W){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!x,this.ha=W,this.key=++Le,this.da=this.fa=!1}function Vn(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function bn(h){this.src=h,this.g={},this.h=0}bn.prototype.add=function(h,y,E,x,W){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var pe=pi(h,y,x,W);return-1<pe?(y=h[pe],E||(y.fa=!1)):(y=new yt(y,this.src,ee,!!x,W),y.fa=E,h.push(y)),y};function Xt(h,y){var E=y.type;if(E in h.g){var x=h.g[E],W=Array.prototype.indexOf.call(x,y,void 0),ee;(ee=0<=W)&&Array.prototype.splice.call(x,W,1),ee&&(Vn(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function pi(h,y,E,x){for(var W=0;W<h.length;++W){var ee=h[W];if(!ee.da&&ee.listener==y&&ee.capture==!!E&&ee.ha==x)return W}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),ha={};function ho(h,y,E,x,W){if(Array.isArray(y)){for(var ee=0;ee<y.length;ee++)ho(h,y[ee],E,x,W);return null}return E=po(E),h&&h[it]?h.K(y,E,g(x)?!!x.capture:!1,W):jn(h,y,E,!1,x,W)}function jn(h,y,E,x,W,ee){if(!y)throw Error("Invalid event type");var pe=g(W)?!!W.capture:!!W,Ge=Pr(h);if(Ge||(h[Nr]=Ge=new bn(h)),E=Ge.add(y,E,x,pe,ee),E.proxy)return E;if(x=Fl(),E.proxy=x,x.src=h,x.listener=E,h.addEventListener)de||(W=pe),W===void 0&&(W=!1),h.addEventListener(y.toString(),x,W);else if(h.attachEvent)h.attachEvent(mi(y.toString()),x);else if(h.addListener&&h.removeListener)h.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fl(){function h(E){return y.call(h.src,h.listener,E)}const y=fo;return h}function fa(h,y,E,x,W){if(Array.isArray(y))for(var ee=0;ee<y.length;ee++)fa(h,y[ee],E,x,W);else x=g(x)?!!x.capture:!!x,E=po(E),h&&h[it]?(h=h.i,y=String(y).toString(),y in h.g&&(ee=h.g[y],E=pi(ee,E,x,W),-1<E&&(Vn(ee[E]),Array.prototype.splice.call(ee,E,1),ee.length==0&&(delete h.g[y],h.h--)))):h&&(h=Pr(h))&&(y=h.g[y.toString()],h=-1,y&&(h=pi(y,E,x,W)),(E=-1<h?y[h]:null)&&os(E))}function os(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[it])Xt(y.i,h);else{var E=h.type,x=h.proxy;y.removeEventListener?y.removeEventListener(E,x,h.capture):y.detachEvent?y.detachEvent(mi(E),x):y.addListener&&y.removeListener&&y.removeListener(x),(E=Pr(y))?(Xt(E,h),E.h==0&&(E.src=null,y[Nr]=null)):Vn(h)}}}function mi(h){return h in ha?ha[h]:ha[h]="on"+h}function fo(h,y){if(h.da)h=!0;else{y=new _e(y,this);var E=h.listener,x=h.ha||h.src;h.fa&&os(h),h=E.call(x,y)}return h}function Pr(h){return h=h[Nr],h instanceof bn?h:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(h){return typeof h=="function"?h:(h[gi]||(h[gi]=function(y){return h.handleEvent(y)}),h[gi])}function vt(){J.call(this),this.i=new bn(this),this.M=this,this.F=null}N(vt,J),vt.prototype[it]=!0,vt.prototype.removeEventListener=function(h,y,E,x){fa(this,h,y,E,x)};function Ze(h,y){var E,x=h.F;if(x)for(E=[];x;x=x.F)E.push(x);if(h=h.M,x=y.type||y,typeof y=="string")y=new ie(y,h);else if(y instanceof ie)y.target=y.target||h;else{var W=y;y=new ie(x,h),U(y,W)}if(W=!0,E)for(var ee=E.length-1;0<=ee;ee--){var pe=y.g=E[ee];W=kn(pe,x,!0,y)&&W}if(pe=y.g=h,W=kn(pe,x,!0,y)&&W,W=kn(pe,x,!1,y)&&W,E)for(ee=0;ee<E.length;ee++)pe=y.g=E[ee],W=kn(pe,x,!1,y)&&W}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],x=0;x<E.length;x++)Vn(E[x]);delete h.g[y],h.h--}}this.F=null},vt.prototype.K=function(h,y,E,x){return this.i.add(String(h),y,!1,E,x)},vt.prototype.L=function(h,y,E,x){return this.i.add(String(h),y,!0,E,x)};function kn(h,y,E,x){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var W=!0,ee=0;ee<y.length;++ee){var pe=y[ee];if(pe&&!pe.da&&pe.capture==E){var Ge=pe.listener,Ht=pe.ha||pe.src;pe.fa&&Xt(h.i,pe),W=Ge.call(Ht,x)!==!1&&W}}return W&&!x.defaultPrevented}function Zt(h,y,E){if(typeof h=="function")E&&(h=T(h,E));else if(h&&typeof h.handleEvent=="function")h=T(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function mo(h){h.g=Zt(()=>{h.g=null,h.i&&(h.i=!1,mo(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class $l extends J{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:mo(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(h){J.call(this),this.h=h,this.g={}}N(yi,J);var _i=[];function vi(h){re(h.g,function(y,E){this.g.hasOwnProperty(E)&&os(y)},h),h.g={}}yi.prototype.N=function(){yi.aa.N.call(this),vi(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fn=d.JSON.stringify,Ei=d.JSON.parse,bi=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ls(){}ls.prototype.h=null;function Ne(h){return h.h||(h.h=h.i())}function et(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ke(){ie.call(this,"d")}N(Ke,ie);function Jt(){ie.call(this,"c")}N(Jt,ie);var Pe={},da=null;function Vr(){return da=da||new vt}Pe.La="serverreachability";function us(h){ie.call(this,Pe.La,h)}N(us,ie);function rr(h){const y=Vr();Ze(y,new us(y))}Pe.STAT_EVENT="statevent";function cs(h,y){ie.call(this,Pe.STAT_EVENT,h),this.stat=y}N(cs,ie);function Et(h){const y=Vr();Ze(y,new cs(y,h))}Pe.Ma="timingevent";function $t(h,y){ie.call(this,Pe.Ma,h),this.size=y}N($t,ie);function Nt(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function ir(){this.g=!0}ir.prototype.xa=function(){this.g=!1};function Hl(h,y,E,x,W,ee){h.info(function(){if(h.g)if(ee)for(var pe="",Ge=ee.split("&"),Ht=0;Ht<Ge.length;Ht++){var Ye=Ge[Ht].split("=");if(1<Ye.length){var tn=Ye[0];Ye=Ye[1];var Gt=tn.split("_");pe=2<=Gt.length&&Gt[1]=="type"?pe+(tn+"="+Ye+"&"):pe+(tn+"=redacted&")}}else pe=null;else pe=ee;return"XMLHTTP REQ ("+x+") [attempt "+W+"]: "+y+`
`+E+`
`+pe})}function Kd(h,y,E,x,W,ee,pe){h.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+W+"]: "+y+`
`+E+`
`+ee+" "+pe})}function hs(h,y,E,x){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+pa(h,E)+(x?" "+x:"")})}function Yc(h,y){h.info(function(){return"TIMEOUT: "+y})}ir.prototype.info=function(){};function pa(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var x=E[h];if(!(2>x.length)){var W=x[1];if(Array.isArray(W)&&!(1>W.length)){var ee=W[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var pe=1;pe<W.length;pe++)W[pe]=""}}}}return Fn(E)}catch{return y}}var fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function Lr(){}N(Lr,ls),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},jr=new Lr;function On(h,y,E,x){this.j=h,this.i=y,this.l=E,this.R=x||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dt}function Dt(){this.i=null,this.g="",this.h=!1}var Gl={},go={};function vr(h,y,E){h.L=1,h.v=va($n(y)),h.m=E,h.P=!0,Ti(h,null)}function Ti(h,y){h.F=Date.now(),ma(h),h.A=$n(h.v);var E=h.A,x=h.R;Array.isArray(x)||(x=[String(x)]),Zl(E.i,"t",x),h.C=0,E=h.j.J,h.h=new Dt,h.g=uh(h.j,E?y:null,!h.m),0<h.O&&(h.M=new $l(T(h.Y,h,h.g),h.O)),y=h.U,E=h.g,x=h.ca;var W="readystatechange";Array.isArray(W)||(W&&(_i[0]=W.toString()),W=_i);for(var ee=0;ee<W.length;ee++){var pe=ho(E,W[ee],x||y.handleEvent,!1,y.h||y);if(!pe)break;y.g[pe.key]=pe}y=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),rr(),Hl(h.i,h.u,h.A,h.l,h.R,h.m)}On.prototype.ca=function(h){h=h.target;const y=this.M;y&&lr(h)==3?y.j():this.Y(h)},On.prototype.Y=function(h){try{if(h==this.g)e:{const Gt=lr(this.g);var y=this.g.Ba();const ki=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||Gt!=4||y==7||(y==8||0>=ki?rr(3):rr(2)),ds(this);var E=this.g.Z();this.X=E;t:if(Wc(this)){var x=th(this.g);h="";var W=x.length,ee=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Ur(this);var pe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<W;y++)this.h.h=!0,h+=this.h.i.decode(x[y],{stream:!(ee&&y==W-1)});x.length=0,this.h.g+=h,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=E==200,Kd(this.i,this.u,this.A,this.l,this.R,Gt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Ge,Ht=this.g;if((Ge=Ht.g?Ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ge)){var Ye=Ge;break t}}Ye=null}if(E=Ye)hs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,E);else{this.o=!1,this.s=3,Et(12),fn(this),Ur(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<pe.length;)if(dn=Qc(this,pe),dn==go){Gt==4&&(this.s=4,Et(14),E=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==Gl){this.s=4,Et(15),hs(this.i,this.l,pe,"[Invalid Chunk]"),E=!1;break}else hs(this.i,this.l,dn,null),ga(this,dn);if(Wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||pe.length!=0||this.h.h||(this.s=1,Et(16),E=!1),this.o=this.o&&E,!E)hs(this.i,this.l,pe,"[Invalid Chunked Response]"),fn(this),Ur(this);else if(0<pe.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Ra(tn),tn.M=!0,Et(11))}}else hs(this.i,this.l,pe,null),ga(this,pe);Gt==4&&fn(this),this.o&&!this.J&&(Gt==4?ah(this.j,this):(this.o=!1,ma(this)))}else tp(this.g),E==400&&0<pe.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),fn(this),Ur(this)}}}catch{}finally{}};function Wc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Qc(h,y){var E=h.C,x=y.indexOf(`
`,E);return x==-1?go:(E=Number(y.substring(E,x)),isNaN(E)?Gl:(x+=1,x+E>y.length?go:(y=y.slice(x,x+E),h.C=x+E,y)))}On.prototype.cancel=function(){this.J=!0,fn(this)};function ma(h){h.S=Date.now()+h.I,Kc(h,h.I)}function Kc(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Nt(T(h.ba,h),y)}function ds(h){h.B&&(d.clearTimeout(h.B),h.B=null)}On.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Yc(this.i,this.A),this.L!=2&&(rr(),Et(17)),fn(this),this.s=2,Ur(this)):Kc(this,this.S-h)};function Ur(h){h.j.G==0||h.J||ah(h.j,h)}function fn(h){ds(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,vi(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function ga(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||Yl(E.h,h))){if(!h.K&&Yl(E.h,h)&&E.G==3){try{var x=E.Da.g.parse(y)}catch{x=null}if(Array.isArray(x)&&x.length==3){var W=x;if(W[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Co(E),Ao(E);else break e;ru(E),Et(18)}}else E.za=W[1],0<E.za-E.T&&37500>W[2]&&E.F&&E.v==0&&!E.C&&(E.C=Nt(T(E.Za,E),6e3));if(1>=_o(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Di(E,11)}else if((h.K||E.g==h)&&Co(E),!j(y))for(W=E.Da.g.parse(y),y=0;y<W.length;y++){let Ye=W[y];if(E.T=Ye[0],Ye=Ye[1],E.G==2)if(Ye[0]=="c"){E.K=Ye[1],E.ia=Ye[2];const tn=Ye[3];tn!=null&&(E.la=tn,E.j.info("VER="+E.la));const Gt=Ye[4];Gt!=null&&(E.Aa=Gt,E.j.info("SVER="+E.Aa));const ki=Ye[5];ki!=null&&typeof ki=="number"&&0<ki&&(x=1.5*ki,E.L=x,E.j.info("backChannelRequestTimeoutMs_="+x)),x=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var ee=x.h;ee.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(vo(ee,ee.h),ee.h=null))}if(x.D){const su=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(x.ya=su,lt(x.I,x.D,su))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),x=E;var pe=h;if(x.qa=lh(x,x.J?x.ia:null,x.W),pe.K){Mn(x.h,pe);var Ge=pe,Ht=x.L;Ht&&(Ge.I=Ht),Ge.B&&(ds(Ge),ma(Ge)),x.g=pe}else ih(x);0<E.i.length&&Ro(E)}else Ye[0]!="stop"&&Ye[0]!="close"||Di(E,7);else E.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?Di(E,7):tu(E):Ye[0]!="noop"&&E.l&&E.l.ta(Ye),E.v=0)}}rr(4)}catch{}}var Xc=class{constructor(h,y){this.g=h,this.map=y}};function Si(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function _o(h){return h.h?1:h.g?h.g.size:0}function Yl(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function vo(h,y){h.g?h.g.add(y):h.h=y}function Mn(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Si.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Wl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return F(h.i)}function Xd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,x=0;x<E;x++)y.push(h[x]);return y}y=[],E=0;for(x in h)y[E++]=h[x];return y}function Eo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const x in h)y[E++]=x;return y}}}function Ql(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=Eo(h),x=Xd(h),W=x.length,ee=0;ee<W;ee++)y.call(void 0,x[ee],E&&E[ee],h)}var ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zd(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var x=h[E].indexOf("="),W=null;if(0<=x){var ee=h[E].substring(0,x);W=h[E].substring(x+1)}else ee=h[E];y(ee,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Pt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Pt){this.h=h.h,_a(this,h.j),this.o=h.o,this.g=h.g,ps(this,h.s),this.l=h.l;var y=h.i,E=new Ai;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),xi(this,E),this.m=h.m}else h&&(y=String(h).match(ya))?(this.h=!1,_a(this,y[1]||"",!0),this.o=sr(y[2]||""),this.g=sr(y[3]||"",!0),ps(this,y[4]),this.l=sr(y[5]||"",!0),xi(this,y[6]||"",!0),this.m=sr(y[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Pt.prototype.toString=function(){var h=[],y=this.j;y&&h.push(Ea(y,Kl,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(Ea(y,Kl,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(Ea(E,E.charAt(0)=="/"?Jd:Xl,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",Ea(E,bo)),h.join("")};function $n(h){return new Pt(h)}function _a(h,y,E){h.j=E?sr(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function ps(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function xi(h,y,E){y instanceof Ai?(h.i=y,Jc(h.i,h.h)):(E||(y=Ea(y,ep)),h.i=new Ai(y,h.h))}function lt(h,y,E){h.i.set(y,E)}function va(h){return lt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function sr(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ea(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,Zc),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Kl=/[#\/\?@]/g,Xl=/[#\?:]/g,Jd=/[#\?]/g,ep=/[#\?@]/g,bo=/#/g;function Ai(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function ar(h){h.g||(h.g=new Map,h.h=0,h.i&&Zd(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}t=Ai.prototype,t.add=function(h,y){ar(this),this.i=null,h=qr(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Ri(h,y){ar(h),y=qr(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Ci(h,y){return ar(h),y=qr(h,y),h.g.has(y)}t.forEach=function(h,y){ar(this),this.g.forEach(function(E,x){E.forEach(function(W){h.call(y,W,x,this)},this)},this)},t.na=function(){ar(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let x=0;x<y.length;x++){const W=h[x];for(let ee=0;ee<W.length;ee++)E.push(y[x])}return E},t.V=function(h){ar(this);let y=[];if(typeof h=="string")Ci(this,h)&&(y=y.concat(this.g.get(qr(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},t.set=function(h,y){return ar(this),this.i=null,h=qr(this,h),Ci(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},t.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function Zl(h,y,E){Ri(h,y),0<E.length&&(h.i=null,h.g.set(qr(h,y),F(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var x=y[E];const ee=encodeURIComponent(String(x)),pe=this.V(x);for(x=0;x<pe.length;x++){var W=ee;pe[x]!==""&&(W+="="+encodeURIComponent(String(pe[x]))),h.push(W)}}return this.i=h.join("&")};function qr(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function Jc(h,y){y&&!h.j&&(ar(h),h.i=null,h.g.forEach(function(E,x){var W=x.toLowerCase();x!=W&&(Ri(this,x),Zl(this,W,E))},h)),h.j=y}function ba(h,y){const E=new ir;if(d.Image){const x=new Image;x.onload=C(or,E,"TestLoadImage: loaded",!0,y,x),x.onerror=C(or,E,"TestLoadImage: error",!1,y,x),x.onabort=C(or,E,"TestLoadImage: abort",!1,y,x),x.ontimeout=C(or,E,"TestLoadImage: timeout",!1,y,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=h}else y(!1)}function Er(h,y){const E=new ir,x=new AbortController,W=setTimeout(()=>{x.abort(),or(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:x.signal}).then(ee=>{clearTimeout(W),ee.ok?or(E,"TestPingServer: ok",!0,y):or(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(W),or(E,"TestPingServer: error",!1,y)})}function or(h,y,E,x,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),x(E)}catch{}}function wa(){this.g=new bi}function Br(h,y,E){const x=E||"";try{Ql(h,function(W,ee){let pe=W;g(W)&&(pe=Fn(W)),y.push(x+ee+"="+encodeURIComponent(pe))})}catch(W){throw y.push(x+"type="+encodeURIComponent("_badmap")),W}}function ms(h){this.l=h.Ub||null,this.j=h.eb||!1}N(ms,ls),ms.prototype.g=function(){return new Ii(this.l,this.j)},ms.prototype.i=function(h){return function(){return h}}({});function Ii(h,y){vt.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ii,vt),t=Ii.prototype,t.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,Fr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?zr(this):Fr(this),this.readyState==3&&Jl(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,zr(this))},t.Qa=function(h){this.g&&(this.response=h,zr(this))},t.ga=function(){this.g&&zr(this)};function zr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Fr(h)}t.setRequestHeader=function(h,y){this.u.append(h,y)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function Fr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function eu(h){let y="";return re(h,function(E,x){y+=x,y+=":",y+=E,y+=`\r
`}),y}function en(h,y,E){e:{for(x in E){var x=!1;break e}x=!0}x||(E=eu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):lt(h,y,E))}function tt(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(tt,vt);var wo=/^https?$/i,Ta=["POST","PUT"];t=tt.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,y,E,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?Ne(this.o):Ne(jr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(ee){eh(this,ee);return}if(h=E||"",E=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var W in x)E.set(W,x[W]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const ee of x.keys())E.set(ee,x.get(ee));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(E.keys()).find(ee=>ee.toLowerCase()=="content-type"),W=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ta,y,void 0))||x||W||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,pe]of E)this.g.setRequestHeader(ee,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){eh(this,ee)}};function eh(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,To(h),$r(h)}function To(h){h.A||(h.A=!0,Ze(h,"complete"),Ze(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ze(this,"complete"),Ze(this,"abort"),$r(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?So(this):this.bb())},t.bb=function(){So(this)};function So(h){if(h.h&&typeof c<"u"&&(!h.v[1]||lr(h)!=4||h.Z()!=2)){if(h.u&&lr(h)==4)Zt(h.Ea,0,h);else if(Ze(h,"readystatechange"),lr(h)==4){h.h=!1;try{const pe=h.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var x;if(x=pe===0){var W=String(h.D).match(ya)[1]||null;!W&&d.self&&d.self.location&&(W=d.self.location.protocol.slice(0,-1)),x=!wo.test(W?W.toLowerCase():"")}E=x}if(E)Ze(h,"complete"),Ze(h,"success");else{h.m=6;try{var ee=2<lr(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",To(h)}}finally{$r(h)}}}}function $r(h,y){if(h.g){Sa(h);const E=h.g,x=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||Ze(h,"ready");try{E.onreadystatechange=x}catch{}}}function Sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function lr(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Ei(y)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function tp(h){const y={};h=(h.g&&2<=lr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<h.length;x++){if(j(h[x]))continue;var E=k(h[x]);const W=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const ee=y[W]||[];y[W]=ee,ee.push(E)}R(y,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xa(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function xo(h){this.Aa=0,this.i=[],this.j=new ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xa("baseRetryDelayMs",5e3,h),this.cb=xa("retryDelaySeedMs",1e4,h),this.Wa=xa("forwardChannelMaxRetries",2,h),this.wa=xa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(h&&h.concurrentRequestLimit),this.Da=new wa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xo.prototype,t.la=8,t.G=1,t.connect=function(h,y,E,x){Et(0),this.W=h,this.H=y||{},E&&x!==void 0&&(this.H.OSID=E,this.H.OAID=x),this.F=this.X,this.I=lh(this,null,this.W),Ro(this)};function tu(h){if(nh(h),h.G==3){var y=h.U++,E=$n(h.I);if(lt(E,"SID",h.K),lt(E,"RID",y),lt(E,"TYPE","terminate"),Aa(h,E),y=new On(h,h.j,y),y.L=2,y.v=va($n(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=uh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ma(y)}oh(h)}function Ao(h){h.g&&(Ra(h),h.g.cancel(),h.g=null)}function nh(h){Ao(h),h.u&&(d.clearTimeout(h.u),h.u=null),Co(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ro(h){if(!yo(h.h)&&!h.s){h.s=!0;var y=h.Ga;se||L(),fe||(se(),fe=!0),Ee.add(y,h),h.B=0}}function np(h,y){return _o(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Nt(T(h.Ga,h,y),iu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const W=new On(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=A(ee),U(ee,this.S)):ee=this.S),this.m!==null||this.O||(W.H=ee,ee=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var x=this.i[E];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(y+=x,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=rh(this,W,y),E=$n(this.I),lt(E,"RID",h),lt(E,"CVER",22),this.D&&lt(E,"X-HTTP-Session-Id",this.D),Aa(this,E),ee&&(this.O?y="headers="+encodeURIComponent(String(eu(ee)))+"&"+y:this.m&&en(E,this.m,ee)),vo(this.h,W),this.Ua&&lt(E,"TYPE","init"),this.P?(lt(E,"$req",y),lt(E,"SID","null"),W.T=!0,vr(W,E,null)):vr(W,E,y),this.G=2}}else this.G==3&&(h?nu(this,h):this.i.length==0||yo(this.h)||nu(this))};function nu(h,y){var E;y?E=y.l:E=h.U++;const x=$n(h.I);lt(x,"SID",h.K),lt(x,"RID",E),lt(x,"AID",h.T),Aa(h,x),h.m&&h.o&&en(x,h.m,h.o),E=new On(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=rh(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vo(h.h,E),vr(E,x,y)}function Aa(h,y){h.H&&re(h.H,function(E,x){lt(y,x,E)}),h.l&&Ql({},function(E,x){lt(y,x,E)})}function rh(h,y,E){E=Math.min(h.i.length,E);var x=h.l?T(h.l.Na,h.l,h):null;e:{var W=h.i;let ee=-1;for(;;){const pe=["count="+E];ee==-1?0<E?(ee=W[0].g,pe.push("ofs="+ee)):ee=0:pe.push("ofs="+ee);let Ge=!0;for(let Ht=0;Ht<E;Ht++){let Ye=W[Ht].g;const tn=W[Ht].map;if(Ye-=ee,0>Ye)ee=Math.max(0,W[Ht].g-100),Ge=!1;else try{Br(tn,pe,"req"+Ye+"_")}catch{x&&x(tn)}}if(Ge){x=pe.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,x}function ih(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;se||L(),fe||(se(),fe=!0),Ee.add(y,h),h.v=0}}function ru(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Nt(T(h.Fa,h),iu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Nt(T(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ao(this),sh(this))};function Ra(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function sh(h){h.g=new On(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=$n(h.qa);lt(y,"RID","rpc"),lt(y,"SID",h.K),lt(y,"AID",h.T),lt(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&lt(y,"TO",h.ja),lt(y,"TYPE","xmlhttp"),Aa(h,y),h.m&&h.o&&en(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=va($n(y)),E.m=null,E.P=!0,Ti(E,h)}t.Za=function(){this.C!=null&&(this.C=null,Ao(this),ru(this),Et(19))};function Co(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ah(h,y){var E=null;if(h.g==y){Co(h),Ra(h),h.g=null;var x=2}else if(Yl(h.h,y))E=y.D,Mn(h.h,y),x=1;else return;if(h.G!=0){if(y.o)if(x==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var W=h.B;x=Vr(),Ze(x,new $t(x,E)),Ro(h)}else ih(h);else if(W=y.s,W==3||W==0&&0<y.X||!(x==1&&np(h,y)||x==2&&ru(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),W){case 1:Di(h,5);break;case 4:Di(h,10);break;case 3:Di(h,6);break;default:Di(h,2)}}}function iu(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Di(h,y){if(h.j.info("Error code "+y),y==2){var E=T(h.fb,h),x=h.Xa;const W=!x;x=new Pt(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||_a(x,"https"),va(x),W?ba(x.toString(),E):Er(x.toString(),E)}else Et(2);h.G=0,h.l&&h.l.sa(y),oh(h),nh(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const y=Wl(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function lh(h,y,E){var x=E instanceof Pt?$n(E):new Pt(E);if(x.g!="")y&&(x.g=y+"."+x.g),ps(x,x.s);else{var W=d.location;x=W.protocol,y=y?y+"."+W.hostname:W.hostname,W=+W.port;var ee=new Pt(null);x&&_a(ee,x),y&&(ee.g=y),W&&ps(ee,W),E&&(ee.l=E),x=ee}return E=h.D,y=h.ya,E&&y&&lt(x,E,y),lt(x,"VER",h.la),Aa(h,x),x}function uh(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new tt(new ms({eb:E})):new tt(h.pa),y.Ha(h.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Io(){}Io.prototype.g=function(h,y){return new Nn(h,y)};function Nn(h,y){vt.call(this),this.g=new xo(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!j(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!j(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Hr(this)}N(Nn,vt),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){tu(this.g)},Nn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Fn(h),h=E);y.i.push(new Xc(y.Ya++,h)),y.G==3&&Ro(y)},Nn.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,Nn.aa.N.call(this)};function hh(h){Ke.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}N(hh,Ke);function fh(){Jt.call(this),this.status=1}N(fh,Jt);function Hr(h){this.g=h}N(Hr,ch),Hr.prototype.ua=function(){Ze(this.g,"a")},Hr.prototype.ta=function(h){Ze(this.g,new hh(h))},Hr.prototype.sa=function(h){Ze(this.g,new fh)},Hr.prototype.ra=function(){Ze(this.g,"b")},Io.prototype.createWebChannel=Io.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,iS=function(){return new Io},rS=function(){return Vr()},nS=Pe,$g={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,Lf=fs,wi.COMPLETE="complete",tS=wi,et.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",vt.prototype.listen=vt.prototype.K,tc=et,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,eS=tt}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});const zb="@firebase/firestore",Fb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Cn.UNAUTHENTICATED=new Cn(null),Cn.GOOGLE_CREDENTIALS=new Cn("google-credentials-uid"),Cn.FIRST_PARTY=new Cn("first-party-uid"),Cn.MOCK_USER=new Cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const so=new Ty("@firebase/firestore");function al(){return so.logLevel}function ve(t,...e){if(so.logLevel<=Fe.DEBUG){const n=e.map(Ny);so.debug(`Firestore (${jl}): ${t}`,...n)}}function ns(t,...e){if(so.logLevel<=Fe.ERROR){const n=e.map(Ny);so.error(`Firestore (${jl}): ${t}`,...n)}}function Tl(t,...e){if(so.logLevel<=Fe.WARN){const n=e.map(Ny);so.warn(`Firestore (${jl}): ${t}`,...n)}}function Ny(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,sS(t,i,n)}function sS(t,e,n){let i=`FIRESTORE (${jl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ns(i),new Error(i)}function rt(t,e,n,i){let a="Unexpected state";typeof n=="string"?a=n:i=n,t||sS(e,a,i)}function Oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends is{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Cn.UNAUTHENTICATED))}shutdown(){}}class TN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=Cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){rt(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Zi,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Zi)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(rt(typeof i.accessToken=="string",31837,{l:i}),new aS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string",2055,{h:e}),new Cn(e)}}class xN{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AN{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new xN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){rt(this.o===void 0,3512);const i=l=>{l.error!=null&&ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ve("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $b(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $b(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Py{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=CN(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<n&&(i+=e.charAt(a[l]%62))}return i}}function $e(t,e){return t<e?-1:t>e?1:0}function Hg(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const a=t.charAt(i),l=e.charAt(i);if(a!==l)return fg(a)===fg(l)?$e(a,l):fg(a)?1:-1}return $e(t.length,e.length)}const IN=55296,DN=57343;function fg(t){const e=t.charCodeAt(0);return e>=IN&&e<=DN}function Sl(t,e,n){return t.length===e.length&&t.every((i,a)=>n(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="__name__";class ti{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ie(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Ie(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++){const l=ti.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return $e(e.length,n.length)}static compareSegments(e,n){const i=ti.isNumericId(e),a=ti.isNumericId(n);return i&&!a?-1:!i&&a?1:i&&a?ti.extractNumericId(e).compare(ti.extractNumericId(n)):Hg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qs.fromString(e.substring(4,e.length-2))}}class gt extends ti{construct(e,n,i){return new gt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ye(le.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(a=>a.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const kN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vn extends ti{construct(e,n,i){return new vn(e,n,i)}static isValidIdentifier(e){return kN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hb}static keyField(){return new vn([Hb])}static fromServerFormat(e){const n=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ye(le.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ye(le.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(le.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new ye(le.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vn(n)}static emptyPath(){return new vn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function oS(t,e,n){if(!n)throw new ye(le.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ON(t,e,n,i){if(e===!0&&i===!0)throw new ye(le.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gb(t){if(!Se.isDocumentKey(t))throw new ye(le.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yb(t){if(Se.isDocumentKey(t))throw new ye(le.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie(12329,{type:typeof t})}function nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new ye(le.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function zt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lc(t,e){if(!lS(t))throw new ye(le.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(a&&typeof c!==a){n=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ye(le.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=-62135596800,Qb=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Qb);return new pt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wb)throw new ye(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qb}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lc(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:zt("string",pt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new pt(0,0))}static max(){return new ke(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vc=-1;function MN(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,a=ke.fromTimestamp(i===1e9?new pt(n+1,0):new pt(n,i));return new Zs(a,Se.empty(),e)}function NN(t){return new Zs(t.readTime,t.key,vc)}class Zs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Zs(ke.min(),Se.empty(),vc)}static max(){return new Zs(ke.max(),Se.empty(),vc)}}function PN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Se.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ll(t){if(t.code!==le.FAILED_PRECONDITION||t.message!==VN)throw t;ve("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new he((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof he?n:he.resolve(n)}catch(n){return he.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):he.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):he.reject(n)}static resolve(e){return new he((n,i)=>{n(e)})}static reject(e){return new he((n,i)=>{i(e)})}static waitFor(e){return new he((n,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&n()},p=>i(p))}),c=!0,l===a&&n()})}static or(e){let n=he.resolve(!1);for(const i of e)n=n.next(a=>a?he.resolve(a):i());return n}static forEach(e,n){const i=[];return e.forEach((a,l)=>{i.push(n.call(this,a,l))}),this.waitFor(i)}static mapArray(e,n){return new he((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;n(e[g]).next(v=>{c[g]=v,++d,d===l&&i(c)},v=>a(v))}})}static doWhile(e,n){return new he((i,a)=>{const l=()=>{e()===!0?n().next(()=>{l()},a):i()};l()})}}function LN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=-1;function Id(t){return t==null}function rd(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="";function qN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kb(e)),e=BN(t.get(n),e);return Kb(e)}function BN(t,e){let n=e;const i=t.length;for(let a=0;a<i;a++){const l=t.charAt(a);switch(l){case"\0":n+="";break;case uS:n+="";break;default:n+=l}}return n}function Kb(t){return t+uS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function la(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.comparator=e,this.root=n||_n.EMPTY}insert(e,n){return new At(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_n.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_n.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return n+i.left.size;a<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vf(this.root,e,this.comparator,!1)}getReverseIterator(){return new vf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vf(this.root,e,this.comparator,!0)}}class vf{constructor(e,n,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _n{constructor(e,n,i,a,l){this.key=e,this.value=n,this.color=i??_n.RED,this.left=a??_n.EMPTY,this.right=l??_n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,a,l){return new _n(e??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,n,i),null):l===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return _n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return _n.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}_n.EMPTY=null,_n.RED=!0,_n.BLACK=!1;_n.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,n,i,a,l){return this}insert(e,n,i){return new _n(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zb(this.data.getIterator())}getIteratorFrom(e){return new Zb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qt(this.comparator);return n.data=e,n}}class Zb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.fields=e,e.sort(vn.comparator)}static empty(){return new tr([])}unionWith(e){let n=new Qt(vn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new tr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sl(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class En{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new hS("Invalid base64 string: "+l):l}}(e);return new En(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new En(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}En.EMPTY_BYTE_STRING=new En("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Js(t){if(rt(!!t,39018),typeof t=="string"){let e=0;const n=zN.exec(t);if(rt(!!n,46558,{timestamp:t}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Mt(t.seconds),nanos:Mt(t.nanos)}}function Mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ea(t){return typeof t=="string"?En.fromBase64String(t):En.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="server_timestamp",dS="__type__",pS="__previous_value__",mS="__local_write_time__";function jy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[dS])==null?void 0:i.stringValue)===fS}function Dd(t){const e=t.mapValue.fields[pS];return jy(e)?Dd(e):e}function Ec(t){const e=Js(t.mapValue.fields[mS].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,i,a,l,c,d,p,g,v){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const id="(default)";class bc{constructor(e,n){this.projectId=e,this.database=n||id}static empty(){return new bc("","")}get isDefaultDatabase(){return this.database===id}isEqual(e){return e instanceof bc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="__type__",$N="__max__",Ef={mapValue:{}},yS="__vector__",sd="value";function ta(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jy(t)?4:GN(t)?9007199254740991:HN(t)?10:11:Ie(28295,{value:t})}function hi(t,e){if(t===e)return!0;const n=ta(t);if(n!==ta(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ec(t).isEqual(Ec(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Js(a.timestampValue),d=Js(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,l){return ea(a.bytesValue).isEqual(ea(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,l){return Mt(a.geoPointValue.latitude)===Mt(l.geoPointValue.latitude)&&Mt(a.geoPointValue.longitude)===Mt(l.geoPointValue.longitude)}(t,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Mt(a.integerValue)===Mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Mt(a.doubleValue),d=Mt(l.doubleValue);return c===d?rd(c)===rd(d):isNaN(c)&&isNaN(d)}return!1}(t,e);case 9:return Sl(t.arrayValue.values||[],e.arrayValue.values||[],hi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(Xb(c)!==Xb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!hi(c[p],d[p])))return!1;return!0}(t,e);default:return Ie(52216,{left:t})}}function wc(t,e){return(t.values||[]).find(n=>hi(n,e))!==void 0}function xl(t,e){if(t===e)return 0;const n=ta(t),i=ta(e);if(n!==i)return $e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Mt(l.integerValue||l.doubleValue),p=Mt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(t,e);case 3:return Jb(t.timestampValue,e.timestampValue);case 4:return Jb(Ec(t),Ec(e));case 5:return Hg(t.stringValue,e.stringValue);case 6:return function(l,c){const d=ea(l),p=ea(c);return d.compareTo(p)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=$e(d[g],p[g]);if(v!==0)return v}return $e(d.length,p.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const d=$e(Mt(l.latitude),Mt(c.latitude));return d!==0?d:$e(Mt(l.longitude),Mt(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ew(t.arrayValue,e.arrayValue);case 10:return function(l,c){var T,C,N,F;const d=l.fields||{},p=c.fields||{},g=(T=d[sd])==null?void 0:T.arrayValue,v=(C=p[sd])==null?void 0:C.arrayValue,b=$e(((N=g==null?void 0:g.values)==null?void 0:N.length)||0,((F=v==null?void 0:v.values)==null?void 0:F.length)||0);return b!==0?b:ew(g,v)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===Ef.mapValue&&c===Ef.mapValue)return 0;if(l===Ef.mapValue)return 1;if(c===Ef.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let b=0;b<p.length&&b<v.length;++b){const T=Hg(p[b],v[b]);if(T!==0)return T;const C=xl(d[p[b]],g[v[b]]);if(C!==0)return C}return $e(p.length,v.length)}(t.mapValue,e.mapValue);default:throw Ie(23264,{he:n})}}function Jb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=Js(t),i=Js(e),a=$e(n.seconds,i.seconds);return a!==0?a:$e(n.nanos,i.nanos)}function ew(t,e){const n=t.values||[],i=e.values||[];for(let a=0;a<n.length&&a<i.length;++a){const l=xl(n[a],i[a]);if(l)return l}return $e(n.length,i.length)}function Al(t){return Gg(t)}function Gg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Js(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ea(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",a=!0;for(const l of n.values||[])a?a=!1:i+=",",i+=Gg(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Gg(n.fields[c])}`;return a+"}"}(t.mapValue):Ie(61005,{value:t})}function Uf(t){switch(ta(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dd(t);return e?16+Uf(e):16;case 5:return 2*t.stringValue.length;case 6:return ea(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Uf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let a=0;return la(i.fields,(l,c)=>{a+=l.length+Uf(c)}),a}(t.mapValue);default:throw Ie(13486,{value:t})}}function tw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yg(t){return!!t&&"integerValue"in t}function Ly(t){return!!t&&"arrayValue"in t}function nw(t){return!!t&&"nullValue"in t}function rw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qf(t){return!!t&&"mapValue"in t}function HN(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gS])==null?void 0:i.stringValue)===yS}function uc(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return la(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=uc(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uc(t.arrayValue.values[n]);return e}return{...t}}function GN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$N}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.value=e}static empty(){return new zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!qf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uc(n)}setAll(e){let n=vn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const p=this.getFieldsMap(n);this.applyChanges(p,i,a),i={},a=[],n=d.popLast()}c?i[d.lastSegment()]=uc(c):a.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,a)}delete(e){const n=this.field(e.popLast());qf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=n.mapValue.fields[e.get(i)];qf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,i){la(n,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new zn(uc(this.value))}}function _S(t){const e=[];return la(t.fields,(n,i)=>{const a=new vn([n]);if(qf(i)){const l=_S(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new tr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,i,a,l,c,d){this.key=e,this.documentType=n,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new In(e,0,ke.min(),ke.min(),ke.min(),zn.empty(),0)}static newFoundDocument(e,n,i,a){return new In(e,1,n,ke.min(),i,a,0)}static newNoDocument(e,n){return new In(e,2,n,ke.min(),ke.min(),zn.empty(),0)}static newUnknownDocument(e,n){return new In(e,3,n,ke.min(),ke.min(),zn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof In&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new In(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ad{constructor(e,n){this.position=e,this.inclusive=n}}function iw(t,e,n){let i=0;for(let a=0;a<t.position.length;a++){const l=e[a],c=t.position[a];if(l.field.isKeyField()?i=Se.comparator(Se.fromName(c.referenceValue),n.key):i=xl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function sw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function YN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vS{}class qt extends vS{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QN(e,n,i):n==="array-contains"?new ZN(e,i):n==="in"?new JN(e,i):n==="not-in"?new e2(e,i):n==="array-contains-any"?new t2(e,i):new qt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new KN(e,i):new XN(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xl(n,this.value)):n!==null&&ta(this.value)===ta(n)&&this.matchesComparison(xl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Or extends vS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Or(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function bS(t){return WN(t)&&ES(t)}function WN(t){for(const e of t.filters)if(e instanceof Or)return!1;return!0}function Wg(t){if(t instanceof qt)return t.field.canonicalString()+t.op.toString()+Al(t.value);if(bS(t))return t.filters.map(e=>Wg(e)).join(",");{const e=t.filters.map(n=>Wg(n)).join(",");return`${t.op}(${e})`}}function wS(t,e){return t instanceof qt?function(i,a){return a instanceof qt&&i.op===a.op&&i.field.isEqual(a.field)&&hi(i.value,a.value)}(t,e):t instanceof Or?function(i,a){return a instanceof Or&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&wS(c,a.filters[d]),!0):!1}(t,e):void Ie(19439)}function TS(t){return t instanceof qt?function(n){return`${n.field.canonicalString()} ${n.op} ${Al(n.value)}`}(t):t instanceof Or?function(n){return n.op.toString()+" {"+n.getFilters().map(TS).join(" ,")+"}"}(t):"Filter"}class QN extends qt{constructor(e,n,i){super(e,n,i),this.key=Se.fromName(i.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class KN extends qt{constructor(e,n){super(e,"in",n),this.keys=SS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XN extends qt{constructor(e,n){super(e,"not-in",n),this.keys=SS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(i=>Se.fromName(i.referenceValue))}class ZN extends qt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ly(n)&&wc(n.arrayValue,this.value)}}class JN extends qt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wc(this.value.arrayValue,n)}}class e2 extends qt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wc(this.value.arrayValue,n)}}class t2 extends qt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ly(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>wc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function aw(t,e=null,n=[],i=[],a=null,l=null,c=null){return new n2(t,e,n,i,a,l,c)}function Uy(t){const e=Oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Wg(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Al(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Al(i)).join(",")),e.Te=n}return e.Te}function qy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sw(t.startAt,e.startAt)&&sw(t.endAt,e.endAt)}function Qg(t){return Se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n=null,i=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function r2(t,e,n,i,a,l,c,d){return new ql(t,e,n,i,a,l,c,d)}function kd(t){return new ql(t)}function ow(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xS(t){return t.collectionGroup!==null}function cc(t){const e=Oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Qt(vn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Tc(l,i))}),n.has(vn.keyField().canonicalString())||e.Ie.push(new Tc(vn.keyField(),i))}return e.Ie}function ai(t){const e=Oe(t);return e.Ee||(e.Ee=i2(e,cc(t))),e.Ee}function i2(t,e){if(t.limitType==="F")return aw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Tc(a.field,l)});const n=t.endAt?new ad(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ad(t.startAt.position,t.startAt.inclusive):null;return aw(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Kg(t,e){const n=t.filters.concat([e]);return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xg(t,e,n){return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Od(t,e){return qy(ai(t),ai(e))&&t.limitType===e.limitType}function AS(t){return`${Uy(ai(t))}|lt:${t.limitType}`}function ol(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(a=>TS(a)).join(", ")}]`),Id(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(a=>Al(a)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(a=>Al(a)).join(",")),`Target(${i})`}(ai(t))}; limitType=${t.limitType})`}function Md(t,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Se.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,a){for(const l of cc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(t,e)&&function(i,a){return!(i.startAt&&!function(c,d,p){const g=iw(c,d,p);return c.inclusive?g<=0:g<0}(i.startAt,cc(i),a)||i.endAt&&!function(c,d,p){const g=iw(c,d,p);return c.inclusive?g>=0:g>0}(i.endAt,cc(i),a))}(t,e)}function s2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RS(t){return(e,n)=>{let i=!1;for(const a of cc(t)){const l=a2(a,e,n);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function a2(t,e,n){const i=t.field.isKeyField()?Se.comparator(e.key,n.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?xl(p,g):Ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[n]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){la(this.inner,(n,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return cS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new At(Se.comparator);function rs(){return o2}const CS=new At(Se.comparator);function nc(...t){let e=CS;for(const n of t)e=e.insert(n.key,n);return e}function IS(t){let e=CS;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ya(){return hc()}function DS(){return hc()}function hc(){return new uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const l2=new At(Se.comparator),u2=new Qt(Se.comparator);function He(...t){let e=u2;for(const n of t)e=e.add(n);return e}const c2=new Qt($e);function h2(){return c2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rd(e)?"-0":e}}function kS(t){return{integerValue:""+t}}function f2(t,e){return UN(e)?kS(e):By(t,e)}/**
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
 */class Nd{constructor(){this._=void 0}}function d2(t,e,n){return t instanceof Sc?function(a,l){const c={fields:{[dS]:{stringValue:fS},[mS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&jy(l)&&(l=Dd(l)),l&&(c.fields[pS]=l),{mapValue:c}}(n,e):t instanceof xc?MS(t,e):t instanceof Ac?NS(t,e):function(a,l){const c=OS(a,l),d=lw(c)+lw(a.Ae);return Yg(c)&&Yg(a.Ae)?kS(d):By(a.serializer,d)}(t,e)}function p2(t,e,n){return t instanceof xc?MS(t,e):t instanceof Ac?NS(t,e):n}function OS(t,e){return t instanceof od?function(i){return Yg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Sc extends Nd{}class xc extends Nd{constructor(e){super(),this.elements=e}}function MS(t,e){const n=PS(e);for(const i of t.elements)n.some(a=>hi(a,i))||n.push(i);return{arrayValue:{values:n}}}class Ac extends Nd{constructor(e){super(),this.elements=e}}function NS(t,e){let n=PS(e);for(const i of t.elements)n=n.filter(a=>!hi(a,i));return{arrayValue:{values:n}}}class od extends Nd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function lw(t){return Mt(t.integerValue||t.doubleValue)}function PS(t){return Ly(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.field=e,this.transform=n}}function g2(t,e){return t.field.isEqual(e.field)&&function(i,a){return i instanceof xc&&a instanceof xc||i instanceof Ac&&a instanceof Ac?Sl(i.elements,a.elements,hi):i instanceof od&&a instanceof od?hi(i.Ae,a.Ae):i instanceof Sc&&a instanceof Sc}(t.transform,e.transform)}class y2{constructor(e,n){this.version=e,this.transformResults=n}}class Cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cr}static exists(e){return new Cr(void 0,e)}static updateTime(e){return new Cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pd{}function VS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LS(t.key,Cr.none()):new Uc(t.key,t.data,Cr.none());{const n=t.data,i=zn.empty();let a=new Qt(vn.comparator);for(let l of e.fields)if(!a.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new ua(t.key,i,new tr(a.toArray()),Cr.none())}}function _2(t,e,n){t instanceof Uc?function(a,l,c){const d=a.value.clone(),p=cw(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):t instanceof ua?function(a,l,c){if(!Bf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=cw(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(jS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(t,e,n):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function fc(t,e,n,i){return t instanceof Uc?function(l,c,d,p){if(!Bf(l.precondition,c))return d;const g=l.value.clone(),v=hw(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(t,e,n,i):t instanceof ua?function(l,c,d,p){if(!Bf(l.precondition,c))return d;const g=hw(l.fieldTransforms,p,c),v=c.data;return v.setAll(jS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(t,e,n,i):function(l,c,d){return Bf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(t,e,n)}function v2(t,e){let n=null;for(const i of t.fieldTransforms){const a=e.data.field(i.field),l=OS(i.transform,a||null);l!=null&&(n===null&&(n=zn.empty()),n.set(i.field,l))}return n||null}function uw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Sl(i,a,(l,c)=>g2(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uc extends Pd{constructor(e,n,i,a=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class ua extends Pd{constructor(e,n,i,a,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function cw(t,e,n){const i=new Map;rt(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let a=0;a<n.length;a++){const l=t[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,p2(c,d,n[a]))}return i}function hw(t,e,n){const i=new Map;for(const a of t){const l=a.transform,c=n.data.field(a.field);i.set(a.field,d2(l,c,e))}return i}class LS extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E2 extends Pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,i,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&_2(l,e,i[a])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=fc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=DS();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=n.has(a.key)?null:d;const p=VS(c,d);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ke.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),He())}isEqual(e){return this.batchId===e.batchId&&Sl(this.mutations,e.mutations,(n,i)=>uw(n,i))&&Sl(this.baseMutations,e.baseMutations,(n,i)=>uw(n,i))}}class zy{constructor(e,n,i,a){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=a}static from(e,n,i){rt(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=function(){return l2}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new zy(e,n,i,a)}}/**
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
 */class w2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Lt,Qe;function S2(t){switch(t){case le.OK:return Ie(64938);case le.CANCELLED:case le.UNKNOWN:case le.DEADLINE_EXCEEDED:case le.RESOURCE_EXHAUSTED:case le.INTERNAL:case le.UNAVAILABLE:case le.UNAUTHENTICATED:return!1;case le.INVALID_ARGUMENT:case le.NOT_FOUND:case le.ALREADY_EXISTS:case le.PERMISSION_DENIED:case le.FAILED_PRECONDITION:case le.ABORTED:case le.OUT_OF_RANGE:case le.UNIMPLEMENTED:case le.DATA_LOSS:return!0;default:return Ie(15467,{code:t})}}function US(t){if(t===void 0)return ns("GRPC error has no .code"),le.UNKNOWN;switch(t){case Lt.OK:return le.OK;case Lt.CANCELLED:return le.CANCELLED;case Lt.UNKNOWN:return le.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return le.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return le.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return le.INTERNAL;case Lt.UNAVAILABLE:return le.UNAVAILABLE;case Lt.UNAUTHENTICATED:return le.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return le.INVALID_ARGUMENT;case Lt.NOT_FOUND:return le.NOT_FOUND;case Lt.ALREADY_EXISTS:return le.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return le.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return le.FAILED_PRECONDITION;case Lt.ABORTED:return le.ABORTED;case Lt.OUT_OF_RANGE:return le.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return le.UNIMPLEMENTED;case Lt.DATA_LOSS:return le.DATA_LOSS;default:return Ie(39323,{code:t})}}(Qe=Lt||(Lt={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const A2=new Qs([4294967295,4294967295],0);function fw(t){const e=x2().encode(t),n=new J1;return n.update(e),new Uint8Array(n.digest())}function dw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Qs([n,i],0),new Qs([a,l],0)]}class Fy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new rc(`Invalid padding: ${n}`);if(i<0)throw new rc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rc(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new rc(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Qs.fromNumber(this.ge)}ye(e,n,i){let a=e.add(n.multiply(Qs.fromNumber(i)));return a.compare(A2)===1&&(a=new Qs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fw(e),[i,a]=dw(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Fy(l,a,n);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.ge===0)return;const n=fw(e),[i,a]=dw(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class rc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,i,a,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const a=new Map;return a.set(e,qc.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Vd(ke.min(),a,new At($e),rs(),He())}}class qc{constructor(e,n,i,a,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new qc(i,n,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n,i,a){this.be=e,this.removedTargetIds=n,this.key=i,this.De=a}}class qS{constructor(e,n){this.targetId=e,this.Ce=n}}class BS{constructor(e,n,i=En.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=a}}class pw{constructor(){this.ve=0,this.Fe=mw(),this.Me=En.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=He(),n=He(),i=He();return this.Fe.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:i=i.add(a);break;default:Ie(38017,{changeType:l})}}),new qc(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=mw()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,rt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class R2{constructor(e){this.Ge=e,this.ze=new Map,this.je=rs(),this.Je=bf(),this.He=bf(),this.Ye=new At($e)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,a)=>{this.rt(a)&&n(a)})}st(e){const n=e.targetId,i=e.Ce.count,a=this.ot(n);if(a){const l=a.target;if(Qg(l))if(i===0){const c=new Se(l.path);this.et(n,c,In.newNoDocument(c,ke.min()))}else rt(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=n;let c,d;try{c=ea(i).toUint8Array()}catch(p){if(p instanceof hS)return Tl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Fy(c,a,l)}catch(p){return Tl(p instanceof rc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let a=0;return i.forEach(l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(n,l,null),a++)}),a}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Qg(d.target)){const p=new Se(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,In.newNoDocument(p,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=He();this.He.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const a=new Vd(e,n,this.Ye,this.je,i);return this.je=rs(),this.Je=bf(),this.He=bf(),this.Ye=new At($e),a}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,n)?a.Qe(n,1):a.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new pw,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Qt($e),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Qt($e),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ve("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bf(){return new At(Se.comparator)}function mw(){return new At(Se.comparator)}const C2={asc:"ASCENDING",desc:"DESCENDING"},I2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D2={and:"AND",or:"OR"};class k2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zg(t,e){return t.useProto3Json||Id(e)?e:{value:e}}function ld(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function O2(t,e){return ld(t,e.toTimestamp())}function oi(t){return rt(!!t,49232),ke.fromTimestamp(function(n){const i=Js(n);return new pt(i.seconds,i.nanos)}(t))}function $y(t,e){return Jg(t,e).canonicalString()}function Jg(t,e){const n=function(a){return new gt(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FS(t){const e=gt.fromString(t);return rt(WS(e),10190,{key:e.toString()}),e}function ey(t,e){return $y(t.databaseId,e.path)}function dg(t,e){const n=FS(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(le.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(le.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(HS(n))}function $S(t,e){return $y(t.databaseId,e)}function M2(t){const e=FS(t);return e.length===4?gt.emptyPath():HS(e)}function ty(t){return new gt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HS(t){return rt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gw(t,e,n){return{name:ey(t,e),fields:n.value.mapValue.fields}}function N2(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ie(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,v){return g.useProto3Json?(rt(v===void 0||typeof v=="string",58123),En.fromBase64String(v||"")):(rt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),En.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?le.UNKNOWN:US(g.code);return new ye(v,g.message||"")}(c);n=new BS(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=dg(t,i.document.name),l=oi(i.document.updateTime),c=i.document.createTime?oi(i.document.createTime):ke.min(),d=new zn({mapValue:{fields:i.document.fields}}),p=In.newFoundDocument(a,l,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];n=new zf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=dg(t,i.document),l=i.readTime?oi(i.readTime):ke.min(),c=In.newNoDocument(a,l),d=i.removedTargetIds||[];n=new zf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=dg(t,i.document),l=i.removedTargetIds||[];n=new zf([],l,a,null)}else{if(!("filter"in e))return Ie(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new T2(a,l),d=i.targetId;n=new qS(d,c)}}return n}function P2(t,e){let n;if(e instanceof Uc)n={update:gw(t,e.key,e.value)};else if(e instanceof LS)n={delete:ey(t,e.key)};else if(e instanceof ua)n={update:gw(t,e.key,e.data),updateMask:$2(e.fieldMask)};else{if(!(e instanceof E2))return Ie(16599,{Vt:e.type});n={verify:ey(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Sc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof xc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ac)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof od)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Ie(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:O2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)}(t,e.precondition)),n}function V2(t,e){return t&&t.length>0?(rt(e!==void 0,14353),t.map(n=>function(a,l){let c=a.updateTime?oi(a.updateTime):oi(l);return c.isEqual(ke.min())&&(c=oi(l)),new y2(c,a.transformResults||[])}(n,e))):[]}function j2(t,e){return{documents:[$S(t,e.path)]}}function L2(t,e){const n={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=$S(t,a);const l=function(g){if(g.length!==0)return YS(Or.create(g,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:ll(T.field),direction:B2(T.dir)}}(v))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const d=Zg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:a}}function U2(t){let e=M2(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let a=null;if(i>0){rt(i===1,65062);const v=n.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];n.where&&(l=function(b){const T=GS(b);return T instanceof Or&&bS(T)?T.getFilters():[T]}(n.where));let c=[];n.orderBy&&(c=function(b){return b.map(T=>function(N){return new Tc(ul(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(n.orderBy));let d=null;n.limit&&(d=function(b){let T;return T=typeof b=="object"?b.value:b,Id(T)?null:T}(n.limit));let p=null;n.startAt&&(p=function(b){const T=!!b.before,C=b.values||[];return new ad(C,T)}(n.startAt));let g=null;return n.endAt&&(g=function(b){const T=!b.before,C=b.values||[];return new ad(C,T)}(n.endAt)),r2(e,a,c,l,d,"F",p,g)}function q2(t,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:a})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ul(n.unaryFilter.field);return qt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=ul(n.unaryFilter.field);return qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ul(n.unaryFilter.field);return qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ul(n.unaryFilter.field);return qt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return qt.create(ul(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Or.create(n.compositeFilter.filters.map(i=>GS(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(n.compositeFilter.op))}(t):Ie(30097,{filter:t})}function B2(t){return C2[t]}function z2(t){return I2[t]}function F2(t){return D2[t]}function ll(t){return{fieldPath:t.canonicalString()}}function ul(t){return vn.fromServerFormat(t.fieldPath)}function YS(t){return t instanceof qt?function(n){if(n.op==="=="){if(rw(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NAN"}};if(nw(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rw(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NOT_NAN"}};if(nw(n.value))return{unaryFilter:{field:ll(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ll(n.field),op:z2(n.op),value:n.value}}}(t):t instanceof Or?function(n){const i=n.getFilters().map(a=>YS(a));return i.length===1?i[0]:{compositeFilter:{op:F2(n.op),filters:i}}}(t):Ie(54877,{filter:t})}function $2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,i,a,l=ke.min(),c=ke.min(),d=En.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.yt=e}}function G2(t){const e=U2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(){this.Cn=new W2}addToCollectionParentIndex(e,n){return this.Cn.add(n),he.resolve()}getCollectionParents(e,n){return he.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return he.resolve()}deleteFieldIndex(e,n){return he.resolve()}deleteAllFieldIndexes(e){return he.resolve()}createTargetIndexes(e,n){return he.resolve()}getDocumentsMatchingTarget(e,n){return he.resolve(null)}getIndexType(e,n){return he.resolve(0)}getFieldIndexes(e,n){return he.resolve([])}getNextCollectionGroupToUpdate(e){return he.resolve(null)}getMinOffset(e,n){return he.resolve(Zs.min())}getMinOffsetFromCollectionGroup(e,n){return he.resolve(Zs.min())}updateCollectionGroup(e,n,i){return he.resolve()}updateIndexEntries(e,n){return he.resolve()}}class W2{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n]||new Qt(gt.comparator),l=!a.has(i);return this.index[n]=a.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),a=this.index[n];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Qt(gt.comparator)).toArray()}}/**
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
 */const yw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},QS=41943040;class Bn{static withCacheSize(e){return new Bn(e,Bn.DEFAULT_COLLECTION_PERCENTILE,Bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn.DEFAULT_COLLECTION_PERCENTILE=10,Bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bn.DEFAULT=new Bn(QS,Bn.DEFAULT_COLLECTION_PERCENTILE,Bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bn.DISABLED=new Bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _w="LruGarbageCollector",Q2=1048576;function vw([t,e],[n,i]){const a=$e(t,n);return a===0?$e(e,i):a}class K2{constructor(e){this.Ir=e,this.buffer=new Qt(vw),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();vw(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class X2{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ve(_w,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ul(n)?ve(_w,"Ignoring IndexedDB error during garbage collection: ",n):await Ll(n)}await this.Vr(3e5)})}}class Z2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return he.resolve(Cd.ce);const i=new K2(n);return this.mr.forEachTarget(e,a=>i.Ar(a.sequenceNumber)).next(()=>this.mr.pr(e,a=>i.Ar(a))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ve("LruGarbageCollector","Garbage collection skipped; disabled"),he.resolve(yw)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ve("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yw):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ve("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a))).next(b=>(i=b,d=Date.now(),this.removeTargets(e,i,n))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(g=Date.now(),al()<=Fe.DEBUG&&ve("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),he.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b})))}}function J2(t,e){return new Z2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.changes=new uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,In.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?he.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nP{constructor(e,n,i,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(i!==null&&fc(i.mutation,a,tr.empty(),pt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,He()).next(()=>i))}getLocalViewOfDocuments(e,n,i=He()){const a=Ya();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,i).next(l=>{let c=nc();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Ya();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,He()))}populateOverlays(e,n,i){const a=[];return i.forEach(l=>{n.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{n.set(c,d)})})}computeViews(e,n,i,a){let l=rs();const c=hc(),d=function(){return hc()}();return n.forEach((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof ua)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),fc(v.mutation,g,v.mutation.getFieldMask(),pt.now())):c.set(g.key,tr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,v)=>c.set(g,v)),n.forEach((g,v)=>d.set(g,new tP(v,c.get(g)??null))),d))}recalculateAndSaveOverlays(e,n){const i=hc();let a=new At((c,d)=>c-d),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let v=i.get(p)||tr.empty();v=d.applyToLocalView(g,v),i.set(p,v);const b=(a.get(d.batchId)||He()).add(p);a=a.insert(d.batchId,b)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,b=DS();v.forEach(T=>{if(!l.has(T)){const C=VS(n.get(T),i.get(T));C!==null&&b.set(T,C),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return he.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,a){return function(c){return Se.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,a):this.getDocumentsMatchingCollectionQuery(e,n,i,a)}getNextDocuments(e,n,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,a-l.size):he.resolve(Ya());let d=vc,p=l;return c.next(g=>he.forEach(g,(v,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(v)?he.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,He())).next(v=>({batchId:d,changes:IS(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Se(n)).next(i=>{let a=nc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,i,a){const l=n.collectionGroup;let c=nc();return this.indexManager.getCollectionParents(e,l).next(d=>he.forEach(d,p=>{const g=function(b,T){return new ql(T,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(v=>{v.forEach((b,T)=>{c=c.insert(b,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,a))).next(c=>{l.forEach((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,In.newInvalidDocument(v)))});let d=nc();return c.forEach((p,g)=>{const v=l.get(p);v!==void 0&&fc(v.mutation,g,tr.empty(),pt.now()),Md(n,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return he.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:oi(a.createTime)}}(n)),he.resolve()}getNamedQuery(e,n){return he.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(a){return{name:a.name,query:G2(a.bundledQuery),readTime:oi(a.readTime)}}(n)),he.resolve()}}/**
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
 */class iP{constructor(){this.overlays=new At(Se.comparator),this.qr=new Map}getOverlay(e,n){return he.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ya();return he.forEach(n,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((a,l)=>{this.St(e,n,l)}),he.resolve()}removeOverlaysForBatchId(e,n,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),he.resolve()}getOverlaysForCollection(e,n,i){const a=Ya(),l=n.length+1,c=new Se(n.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return he.resolve(a)}getOverlaysForCollectionGroup(e,n,i,a){let l=new At((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Ya(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Ya(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=a)););return he.resolve(d)}St(e,n,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new w2(n,i));let l=this.qr.get(n);l===void 0&&(l=He(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class sP{constructor(){this.sessionToken=En.EMPTY_BYTE_STRING}getSessionToken(e){return he.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,he.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Qr=new Qt(un.$r),this.Ur=new Qt(un.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new un(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new un(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new Se(new gt([])),i=new un(n,e),a=new un(n,e+1),l=[];return this.Ur.forEachInRange([i,a],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Se(new gt([])),i=new un(n,e),a=new un(n,e+1);let l=He();return this.Ur.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new un(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class un{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Se.comparator(e.key,n.key)||$e(e.Yr,n.Yr)}static Kr(e,n){return $e(e.Yr,n.Yr)||Se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Qt(un.$r)}checkEmpty(e){return he.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new b2(l,n,i,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new un(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return he.resolve(c)}lookupMutationBatch(e,n){return he.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,a=this.ei(i),l=a<0?0:a;return he.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return he.resolve(this.mutationQueue.length===0?Vy:this.tr-1)}getAllMutationBatches(e){return he.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new un(n,0),a=new un(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],c=>{const d=this.Xr(c.Yr);l.push(d)}),he.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Qt($e);return n.forEach(a=>{const l=new un(a,0),c=new un(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],d=>{i=i.add(d.Yr)})}),he.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,a=i.length+1;let l=i;Se.isDocumentKey(l)||(l=l.child(""));const c=new un(new Se(l),0);let d=new Qt($e);return this.Zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)},c),he.resolve(this.ti(d))}ti(e){const n=[];return e.forEach(i=>{const a=this.Xr(i);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){rt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return he.forEach(n.mutations,a=>{const l=new un(a.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new un(n,0),a=this.Zr.firstAfterOrEqual(i);return he.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,he.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.ri=e,this.docs=function(){return new At(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return he.resolve(i?i.document.mutableCopy():In.newInvalidDocument(n))}getEntries(e,n){let i=rs();return n.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():In.newInvalidDocument(a))}),he.resolve(i)}getDocumentsMatchingQuery(e,n,i,a){let l=rs();const c=n.path,d=new Se(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||PN(NN(v),i)<=0||(a.has(v.key)||Md(n,v))&&(l=l.insert(v.key,v.mutableCopy()))}return he.resolve(l)}getAllFromCollectionGroup(e,n,i,a){Ie(9500)}ii(e,n){return he.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new lP(this)}getSize(e){return he.resolve(this.size)}}class lP extends eP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)}),he.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.persistence=e,this.si=new uo(n=>Uy(n),qy),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new Hy,this.targetCount=0,this.ai=Rl.ur()}forEachTarget(e,n){return this.si.forEach((i,a)=>n(a)),he.resolve()}getLastRemoteSnapshotVersion(e){return he.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return he.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),he.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),he.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Rl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,he.resolve()}updateTargetData(e,n){return this.Pr(n),he.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,he.resolve()}removeTargets(e,n,i){let a=0;const l=[];return this.si.forEach((c,d)=>{d.sequenceNumber<=n&&i.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),he.waitFor(l).next(()=>a)}getTargetCount(e){return he.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return he.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),he.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const a=this.persistence.referenceDelegate,l=[];return a&&n.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),he.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),he.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return he.resolve(i)}containsKey(e,n){return he.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Cd(0),this.li=!1,this.li=!0,this.hi=new sP,this.referenceDelegate=e(this),this.Pi=new uP(this),this.indexManager=new Y2,this.remoteDocumentCache=function(a){return new oP(a)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new H2(n),this.Ii=new rP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new aP(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){ve("MemoryPersistence","Starting transaction:",e);const a=new cP(this.ci.next());return this.referenceDelegate.Ei(),i(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ai(e,n){return he.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class cP extends jN{constructor(e){super(),this.currentSequenceNumber=e}}class Gy{constructor(e){this.persistence=e,this.Ri=new Hy,this.Vi=null}static mi(e){return new Gy(e)}get fi(){if(this.Vi)return this.Vi;throw Ie(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),he.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),he.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),he.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(a=>this.fi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return he.forEach(this.fi,i=>{const a=Se.fromPath(i);return this.gi(e,a).next(l=>{l||n.removeEntry(a,ke.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return he.or([()=>he.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ud{constructor(e,n){this.persistence=e,this.pi=new uo(i=>qN(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=J2(this,n)}static mi(e,n){return new ud(e,n)}Ei(){}di(e){return he.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(a=>i+a))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return he.forEach(this.pi,(i,a)=>this.br(e,i,a).next(l=>l?he.resolve():n(a)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,c=>this.br(e,c,n).next(d=>{d||(i++,l.removeEntry(c,ke.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),he.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),he.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),he.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),he.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uf(e.data.value)),n}br(e,n,i){return he.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return he.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n,i,a){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=a}static As(e,n){let i=He(),a=He();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Yy(e,n.fromCache,i,a)}}/**
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
 */class fP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return qD()?8:LN(Dn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,a){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new hP;return this.Ss(e,n,c).next(d=>{if(l.result=d,this.Vs)return this.bs(e,n,c,d.size)})}).next(()=>l.result)}bs(e,n,i,a){return i.documentReadCount<this.fs?(al()<=Fe.DEBUG&&ve("QueryEngine","SDK will not create cache indexes for query:",ol(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),he.resolve()):(al()<=Fe.DEBUG&&ve("QueryEngine","Query:",ol(n),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(al()<=Fe.DEBUG&&ve("QueryEngine","The SDK decides to create cache indexes for query:",ol(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(n))):he.resolve())}ys(e,n){if(ow(n))return he.resolve(null);let i=ai(n);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Xg(n,null,"F"),i=ai(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=He(...l);return this.ps.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.Ds(n,d);return this.Cs(n,g,c,p.readTime)?this.ys(e,Xg(n,null,"F")):this.vs(e,g,n,p)}))})))}ws(e,n,i,a){return ow(n)||a.isEqual(ke.min())?he.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,a)?he.resolve(null):(al()<=Fe.DEBUG&&ve("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ol(n)),this.vs(e,c,n,MN(a,vc)).next(d=>d))})}Ds(e,n){let i=new Qt(RS(e));return n.forEach((a,l)=>{Md(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,a){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,n,i){return al()<=Fe.DEBUG&&ve("QueryEngine","Using full collection scan to execute query:",ol(n)),this.ps.getDocumentsMatchingQuery(e,n,Zs.min(),i)}vs(e,n,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LocalStore",dP=3e8;class pP{constructor(e,n,i,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new At($e),this.xs=new uo(l=>Uy(l),qy),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function mP(t,e,n,i){return new pP(t,e,n,i)}async function XS(t,e){const n=Oe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let a;return n.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=He();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ls:g,removedBatchIds:c,addedBatchIds:d}))})})}function gP(t,e){const n=Oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(d,p,g,v){const b=g.batch,T=b.keys();let C=he.resolve();return T.forEach(N=>{C=C.next(()=>v.getEntry(p,N)).next(F=>{const M=g.docVersions.get(N);rt(M!==null,48541),F.version.compareTo(M)<0&&(b.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),v.addEntry(F)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=He();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(i,a))})}function ZS(t){const e=Oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function yP(t,e){const n=Oe(t),i=e.snapshotVersion;let a=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});a=n.Ms;const d=[];e.targetChanges.forEach((v,b)=>{const T=a.get(b);if(!T)return;d.push(n.Pi.removeMatchingKeys(l,v.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(l,v.addedDocuments,b)));let C=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?C=C.withResumeToken(En.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,i)),a=a.insert(b,C),function(F,M,P){return F.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=dP?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(T,C,v)&&d.push(n.Pi.updateTargetData(l,C))});let p=rs(),g=He();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(_P(l,c,e.documentUpdates).next(v=>{p=v.ks,g=v.qs})),!i.isEqual(ke.min())){const v=n.Pi.getLastRemoteSnapshotVersion(l).next(b=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return he.waitFor(d).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ms=a,l))}function _P(t,e,n){let i=He(),a=He();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=rs();return n.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(ke.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ve(Wy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{ks:c,qs:a}})}function vP(t,e){const n=Oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Vy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function EP(t,e){const n=Oe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return n.Pi.getTargetData(i,e).next(l=>l?(a=l,he.resolve(a)):n.Pi.allocateTargetId(i).next(c=>(a=new $s(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=n.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function ny(t,e,n){const i=Oe(t),a=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ul(c))throw c;ve(Wy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function Ew(t,e,n){const i=Oe(t);let a=ke.min(),l=He();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,v){const b=Oe(p),T=b.xs.get(v);return T!==void 0?he.resolve(b.Ms.get(T)):b.Pi.getTargetData(g,v)}(i,c,ai(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?a:ke.min(),n?l:He())).next(d=>(bP(i,s2(e),d),{documents:d,Qs:l})))}function bP(t,e,n){let i=t.Os.get(e)||ke.min();n.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class bw{constructor(){this.activeTargetIds=h2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wP{constructor(){this.Mo=new bw,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bw,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ww="ConnectivityMonitor";class Tw{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ve(ww,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ve(ww,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wf=null;function ry(){return wf===null?wf=function(){return 268435456+Math.round(2147483648*Math.random())}():wf++,"0x"+wf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="RestConnection",SP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===id?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,n,i,a,l){const c=ry(),d=this.zo(e,n.toUriEncodedString());ve(pg,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Nl(g);return this.Jo(e,d,p,i,v).then(b=>(ve(pg,`Received RPC '${e}' ${c}: `,b),b),b=>{throw Tl(pg,`RPC '${e}' ${c} failed with error: `,b,"url: ",d,"request:",i),b})}Ho(e,n,i,a,l,c){return this.Go(e,n,i,a,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}zo(e,n){const i=SP[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Sn="WebChannelConnection";class RP extends xP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,a,l){const c=ry();return new Promise((d,p)=>{const g=new eS;g.setWithCredentials(!0),g.listenOnce(tS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Lf.NO_ERROR:const b=g.getResponseJson();ve(Sn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),d(b);break;case Lf.TIMEOUT:ve(Sn,`RPC '${e}' ${c} timed out`),p(new ye(le.DEADLINE_EXCEEDED,"Request time out"));break;case Lf.HTTP_ERROR:const T=g.getStatus();if(ve(Sn,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const F=function(P){const j=P.toLowerCase().replace(/_/g,"-");return Object.values(le).indexOf(j)>=0?j:le.UNKNOWN}(N.status);p(new ye(F,N.message))}else p(new ye(le.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(le.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ve(Sn,`RPC '${e}' ${c} completed.`)}});const v=JSON.stringify(a);ve(Sn,`RPC '${e}' ${c} sending request:`,a),g.send(n,"POST",v,i,15)})}T_(e,n,i){const a=ry(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=iS(),d=rS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ve(Sn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const b=c.createWebChannel(v,p);this.I_(b);let T=!1,C=!1;const N=new AP({Yo:M=>{C?ve(Sn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(T||(ve(Sn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),T=!0),ve(Sn,`RPC '${e}' stream ${a} sending:`,M),b.send(M))},Zo:()=>b.close()}),F=(M,P,j)=>{M.listen(P,O=>{try{j(O)}catch(te){setTimeout(()=>{throw te},0)}})};return F(b,tc.EventType.OPEN,()=>{C||(ve(Sn,`RPC '${e}' stream ${a} transport opened.`),N.o_())}),F(b,tc.EventType.CLOSE,()=>{C||(C=!0,ve(Sn,`RPC '${e}' stream ${a} transport closed`),N.a_(),this.E_(b))}),F(b,tc.EventType.ERROR,M=>{C||(C=!0,Tl(Sn,`RPC '${e}' stream ${a} transport errored. Name:`,M.name,"Message:",M.message),N.a_(new ye(le.UNAVAILABLE,"The operation could not be completed")))}),F(b,tc.EventType.MESSAGE,M=>{var P;if(!C){const j=M.data[0];rt(!!j,16349);const O=j,te=(O==null?void 0:O.error)||((P=O[0])==null?void 0:P.error);if(te){ve(Sn,`RPC '${e}' stream ${a} received error:`,te);const z=te.status;let re=function(I){const U=Lt[I];if(U!==void 0)return US(U)}(z),R=te.message;re===void 0&&(re=le.INTERNAL,R="Unknown error status: "+z+" with message "+te.message),C=!0,N.a_(new ye(re,R)),b.close()}else ve(Sn,`RPC '${e}' stream ${a} received:`,j),N.u_(j)}}),F(d,nS.STAT_EVENT,M=>{M.stat===$g.PROXY?ve(Sn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===$g.NOPROXY&&ve(Sn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function mg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){return new k2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-i);a>0&&ve("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="PersistentStream";class ex{constructor(e,n,i,a,l,c,d,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new JS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===le.RESOURCE_EXHAUSTED?(ns(n.toString()),ns("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===le.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.D_===n&&this.G_(i,a)},i=>{e(()=>{const a=new ye(le.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(a=>{i(()=>this.z_(a))}),this.stream.onMessage(a=>{i(()=>++this.F_==1?this.J_(a):this.onNext(a))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ve(Sw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ve(Sw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CP extends ex{constructor(e,n,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=N2(this.serializer,e),i=function(l){if(!("targetChange"in l))return ke.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?oi(c.readTime):ke.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=ty(this.serializer),n.addTarget=function(l,c){let d;const p=c.target;if(d=Qg(p)?{documents:j2(l,p)}:{query:L2(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=zS(l,c.resumeToken);const g=Zg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(ke.min())>0){d.readTime=ld(l,c.snapshotVersion.toTimestamp());const g=Zg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=q2(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=ty(this.serializer),n.removeTarget=e,this.q_(n)}}class IP extends ex{constructor(e,n,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return rt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){rt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=V2(e.writeResults,e.commitTime),i=oi(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=ty(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>P2(this.serializer,i))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{}class kP extends DP{constructor(e,n,i,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ye(le.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,Jg(n,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(le.UNKNOWN,l.toString())})}Ho(e,n,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Ho(e,Jg(n,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===le.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(le.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class OP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ns(n),this.aa=!1):ve("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="RemoteStore";class MP{constructor(e,n,i,a,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{co(this)&&(ve(ao,"Restarting streams for network reachability change."),await async function(p){const g=Oe(p);g.Ea.add(4),await Bc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ld(g)}(this))})}),this.Ra=new OP(i,a)}}async function Ld(t){if(co(t))for(const e of t.da)await e(!0)}async function Bc(t){for(const e of t.da)await e(!1)}function tx(t,e){const n=Oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zy(n)?Xy(n):Bl(n).O_()&&Ky(n,e))}function Qy(t,e){const n=Oe(t),i=Bl(n);n.Ia.delete(e),i.O_()&&nx(n,e),n.Ia.size===0&&(i.O_()?i.L_():co(n)&&n.Ra.set("Unknown"))}function Ky(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bl(t).Y_(e)}function nx(t,e){t.Va.Ue(e),Bl(t).Z_(e)}function Xy(t){t.Va=new R2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Bl(t).start(),t.Ra.ua()}function Zy(t){return co(t)&&!Bl(t).x_()&&t.Ia.size>0}function co(t){return Oe(t).Ea.size===0}function rx(t){t.Va=void 0}async function NP(t){t.Ra.set("Online")}async function PP(t){t.Ia.forEach((e,n)=>{Ky(t,e)})}async function VP(t,e){rx(t),Zy(t)?(t.Ra.ha(e),Xy(t)):t.Ra.set("Unknown")}async function jP(t,e,n){if(t.Ra.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))}(t,e)}catch(i){ve(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await cd(t,i)}else if(e instanceof zf?t.Va.Ze(e):e instanceof qS?t.Va.st(e):t.Va.tt(e),!n.isEqual(ke.min()))try{const i=await ZS(t.localStore);n.compareTo(i)>=0&&await function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(En.EMPTY_BYTE_STRING,v.snapshotVersion)),nx(l,p);const b=new $s(v.target,p,g,v.sequenceNumber);Ky(l,b)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(i){ve(ao,"Failed to raise snapshot:",i),await cd(t,i)}}async function cd(t,e,n){if(!Ul(e))throw e;t.Ea.add(1),await Bc(t),t.Ra.set("Offline"),n||(n=()=>ZS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ve(ao,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ld(t)})}function ix(t,e){return e().catch(n=>cd(t,n,e))}async function Ud(t){const e=Oe(t),n=na(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vy;for(;LP(e);)try{const a=await vP(e.localStore,i);if(a===null){e.Ta.length===0&&n.L_();break}i=a.batchId,UP(e,a)}catch(a){await cd(e,a)}sx(e)&&ax(e)}function LP(t){return co(t)&&t.Ta.length<10}function UP(t,e){t.Ta.push(e);const n=na(t);n.O_()&&n.X_&&n.ea(e.mutations)}function sx(t){return co(t)&&!na(t).x_()&&t.Ta.length>0}function ax(t){na(t).start()}async function qP(t){na(t).ra()}async function BP(t){const e=na(t);for(const n of t.Ta)e.ea(n.mutations)}async function zP(t,e,n){const i=t.Ta.shift(),a=zy.from(i,e,n);await ix(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await Ud(t)}async function FP(t,e){e&&na(t).X_&&await async function(i,a){if(function(c){return S2(c)&&c!==le.ABORTED}(a.code)){const l=i.Ta.shift();na(i).B_(),await ix(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Ud(i)}}(t,e),sx(t)&&ax(t)}async function xw(t,e){const n=Oe(t);n.asyncQueue.verifyOperationInProgress(),ve(ao,"RemoteStore received new credentials");const i=co(n);n.Ea.add(3),await Bc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ld(n)}async function $P(t,e){const n=Oe(t);e?(n.Ea.delete(2),await Ld(n)):e||(n.Ea.add(2),await Bc(n),n.Ra.set("Unknown"))}function Bl(t){return t.ma||(t.ma=function(n,i,a){const l=Oe(n);return l.sa(),new CP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:NP.bind(null,t),t_:PP.bind(null,t),r_:VP.bind(null,t),H_:jP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Zy(t)?Xy(t):t.Ra.set("Unknown")):(await t.ma.stop(),rx(t))})),t.ma}function na(t){return t.fa||(t.fa=function(n,i,a){const l=Oe(n);return l.sa(),new IP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:qP.bind(null,t),r_:FP.bind(null,t),ta:BP.bind(null,t),na:zP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ud(t)):(await t.fa.stop(),t.Ta.length>0&&(ve(ao,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,i,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,a,l){const c=Date.now()+i,d=new Jy(e,n,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(le.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function e_(t,e){if(ns("AsyncQueue",`${e}: ${t}`),Ul(t))return new ye(le.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{static emptySet(e){return new ml(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||Se.comparator(n.key,i.key):(n,i)=>Se.comparator(n.key,i.key),this.keyedMap=nc(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ml)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Aw{constructor(){this.ga=new At(Se.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ie(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class Cl{constructor(e,n,i,a,l,c,d,p,g){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,i,a,l){const c=[];return n.forEach(d=>{c.push({type:0,doc:d})}),new Cl(e,n,ml.emptySet(n),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==i[a].type||!n[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class GP{constructor(){this.queries=Rw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const a=Oe(n),l=a.queries;a.queries=Rw(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new ye(le.ABORTED,"Firestore shutting down"))}}function Rw(){return new uo(t=>AS(t),Od)}async function t_(t,e){const n=Oe(t);let i=3;const a=e.query;let l=n.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new HP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(a,!0);break;case 1:l.wa=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(c){const d=e_(c,`Initialization of query '${ol(e.query)}' failed`);return void e.onError(d)}n.queries.set(a,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&r_(n)}async function n_(t,e){const n=Oe(t),i=e.query;let a=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function YP(t,e){const n=Oe(t);let i=!1;for(const a of e){const l=a.query,c=n.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(i=!0);c.wa=a}}i&&r_(n)}function WP(t,e,n){const i=Oe(t),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(n);i.queries.delete(e)}function r_(t){t.Ca.forEach(e=>{e.next()})}var iy,Cw;(Cw=iy||(iy={})).Ma="default",Cw.Cache="cache";class i_{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Cl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==iy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.key=e}}class lx{constructor(e){this.key=e}}class QP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=He(),this.mutatedKeys=He(),this.eu=RS(e),this.tu=new ml(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new Aw,a=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((v,b)=>{const T=a.get(v),C=Md(this.query,b)?b:null,N=!!T&&this.mutatedKeys.has(T.key),F=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;T&&C?T.data.isEqual(C.data)?N!==F&&(i.track({type:3,doc:C}),M=!0):this.su(T,C)||(i.track({type:2,doc:C}),M=!0,(p&&this.eu(C,p)>0||g&&this.eu(C,g)<0)&&(d=!0)):!T&&C?(i.track({type:0,doc:C}),M=!0):T&&!C&&(i.track({type:1,doc:T}),M=!0,(p||g)&&(d=!0)),M&&(C?(c=c.add(C),l=F?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:d,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((v,b)=>function(C,N){const F=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Rt:M})}};return F(C)-F(N)}(v.type,b.type)||this.eu(v.doc,b.doc)),this.ou(i),a=a??!1;const d=n&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Cl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Aw,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=He(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new lx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new ox(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=He();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Cl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const s_="SyncEngine";class KP{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class XP{constructor(e){this.key=e,this.hu=!1}}class ZP{constructor(e,n,i,a,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new uo(d=>AS(d),Od),this.Iu=new Map,this.Eu=new Set,this.du=new At(Se.comparator),this.Au=new Map,this.Ru=new Hy,this.Vu={},this.mu=new Map,this.fu=Rl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JP(t,e,n=!0){const i=px(t);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await ux(i,e,n,!0),a}async function e4(t,e){const n=px(t);await ux(n,e,!0,!1)}async function ux(t,e,n,i){const a=await EP(t.localStore,ai(e)),l=a.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let d;return i&&(d=await t4(t,e,l,c==="current",a.resumeToken)),t.isPrimaryClient&&n&&tx(t.remoteStore,a),d}async function t4(t,e,n,i,a){t.pu=(b,T,C)=>async function(F,M,P,j){let O=M.view.ru(P);O.Cs&&(O=await Ew(F.localStore,M.query,!1).then(({documents:R})=>M.view.ru(R,O)));const te=j&&j.targetChanges.get(M.targetId),z=j&&j.targetMismatches.get(M.targetId)!=null,re=M.view.applyChanges(O,F.isPrimaryClient,te,z);return Dw(F,M.targetId,re.au),re.snapshot}(t,b,T,C);const l=await Ew(t.localStore,e,!0),c=new QP(e,l.Qs),d=c.ru(l.documents),p=qc.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",a),g=c.applyChanges(d,t.isPrimaryClient,p);Dw(t,n,g.au);const v=new KP(e,n,c);return t.Tu.set(e,v),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),g.snapshot}async function n4(t,e,n){const i=Oe(t),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter(c=>!Od(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await ny(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),n&&Qy(i.remoteStore,a.targetId),sy(i,a.targetId)}).catch(Ll)):(sy(i,a.targetId),await ny(i.localStore,a.targetId,!0))}async function r4(t,e){const n=Oe(t),i=n.Tu.get(e),a=n.Iu.get(i.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Qy(n.remoteStore,i.targetId))}async function i4(t,e,n){const i=h4(t);try{const a=await function(c,d){const p=Oe(c),g=pt.now(),v=d.reduce((C,N)=>C.add(N.key),He());let b,T;return p.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=rs(),F=He();return p.Ns.getEntries(C,v).next(M=>{N=M,N.forEach((P,j)=>{j.isValidDocument()||(F=F.add(P))})}).next(()=>p.localDocuments.getOverlayedDocuments(C,N)).next(M=>{b=M;const P=[];for(const j of d){const O=v2(j,b.get(j.key).overlayedDocument);O!=null&&P.push(new ua(j.key,O,_S(O.value.mapValue),Cr.exists(!0)))}return p.mutationQueue.addMutationBatch(C,g,P,d)}).next(M=>{T=M;const P=M.applyToLocalDocumentSet(b,F);return p.documentOverlayCache.saveOverlays(C,M.batchId,P)})}).then(()=>({batchId:T.batchId,changes:IS(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new At($e)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g}(i,a.batchId,n),await zc(i,a.changes),await Ud(i.remoteStore)}catch(a){const l=e_(a,"Failed to persist write");n.reject(l)}}async function cx(t,e){const n=Oe(t);try{const i=await yP(n.localStore,e);e.targetChanges.forEach((a,l)=>{const c=n.Au.get(l);c&&(rt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?rt(c.hu,14607):a.removedDocuments.size>0&&(rt(c.hu,42227),c.hu=!1))}),await zc(n,i,e)}catch(i){await Ll(i)}}function Iw(t,e,n){const i=Oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const a=[];i.Tu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Oe(c);p.onlineState=d;let g=!1;p.queries.forEach((v,b)=>{for(const T of b.Sa)T.va(d)&&(g=!0)}),g&&r_(p)}(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function s4(t,e,n){const i=Oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new At(Se.comparator);c=c.insert(l,In.newNoDocument(l,ke.min()));const d=He().add(l),p=new Vd(ke.min(),new Map,new At($e),c,d);await cx(i,p),i.du=i.du.remove(l),i.Au.delete(e),a_(i)}else await ny(i.localStore,e,!1).then(()=>sy(i,e,n)).catch(Ll)}async function a4(t,e){const n=Oe(t),i=e.batch.batchId;try{const a=await gP(n.localStore,e);fx(n,i,null),hx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await zc(n,a)}catch(a){await Ll(a)}}async function o4(t,e,n){const i=Oe(t);try{const a=await function(c,d){const p=Oe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next(b=>(rt(b!==null,37113),v=b.keys(),p.mutationQueue.removeMutationBatch(g,b))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>p.localDocuments.getDocuments(g,v))})}(i.localStore,e);fx(i,e,n),hx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await zc(i,a)}catch(a){await Ll(a)}}function hx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function fx(t,e,n){const i=Oe(t);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(n?l.reject(n):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function sy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||dx(t,i)})}function dx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Qy(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),a_(t))}function Dw(t,e,n){for(const i of n)i instanceof ox?(t.Ru.addReference(i.key,e),l4(t,i)):i instanceof lx?(ve(s_,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||dx(t,i.key)):Ie(19791,{wu:i})}function l4(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(ve(s_,"New document in limbo: "+n),t.Eu.add(i),a_(t))}function a_(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Se(gt.fromString(e)),i=t.fu.next();t.Au.set(i,new XP(n)),t.du=t.du.insert(n,i),tx(t.remoteStore,new $s(ai(kd(n.path)),i,"TargetPurposeLimboResolution",Cd.ce))}}async function zc(t,e,n){const i=Oe(t),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((d,p)=>{c.push(i.pu(p,e,n).then(g=>{var v;if((g||n)&&i.isPrimaryClient){const b=g?!g.fromCache:(v=n==null?void 0:n.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){a.push(g);const b=Yy.As(p.targetId,g);l.push(b)}}))}),await Promise.all(c),i.Pu.H_(a),await async function(p,g){const v=Oe(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>he.forEach(g,T=>he.forEach(T.Es,C=>v.persistence.referenceDelegate.addReference(b,T.targetId,C)).next(()=>he.forEach(T.ds,C=>v.persistence.referenceDelegate.removeReference(b,T.targetId,C)))))}catch(b){if(!Ul(b))throw b;ve(Wy,"Failed to update sequence numbers: "+b)}for(const b of g){const T=b.targetId;if(!b.fromCache){const C=v.Ms.get(T),N=C.snapshotVersion,F=C.withLastLimboFreeSnapshotVersion(N);v.Ms=v.Ms.insert(T,F)}}}(i.localStore,l))}async function u4(t,e){const n=Oe(t);if(!n.currentUser.isEqual(e)){ve(s_,"User change. New user:",e.toKey());const i=await XS(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(d=>{d.forEach(p=>{p.reject(new ye(le.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await zc(n,i.Ls)}}function c4(t,e){const n=Oe(t),i=n.Au.get(e);if(i&&i.hu)return He().add(i.key);{let a=He();const l=n.Iu.get(e);if(!l)return a;for(const c of l){const d=n.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function px(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s4.bind(null,e),e.Pu.H_=YP.bind(null,e.eventManager),e.Pu.yu=WP.bind(null,e.eventManager),e}function h4(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o4.bind(null,e),e}class hd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return mP(this.persistence,new fP,e.initialUser,this.serializer)}Cu(e){return new KS(Gy.mi,this.serializer)}Du(e){return new wP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hd.provider={build:()=>new hd};class f4 extends hd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){rt(this.persistence.referenceDelegate instanceof ud,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new X2(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Bn.withCacheSize(this.cacheSizeBytes):Bn.DEFAULT;return new KS(i=>ud.mi(i,n),this.serializer)}}class ay{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Iw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=u4.bind(null,this.syncEngine),await $P(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GP}()}createDatastore(e){const n=jd(e.databaseInfo.databaseId),i=function(l){return new RP(l)}(e.databaseInfo);return function(l,c,d,p){return new kP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,a,l,c,d){return new MP(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,n=>Iw(this.syncEngine,n,0),function(){return Tw.v()?new Tw:new TP}())}createSyncEngine(e,n){return function(a,l,c,d,p,g,v){const b=new ZP(a,l,c,d,p,g);return v&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const l=Oe(a);ve(ao,"RemoteStore shutting down."),l.Ea.add(5),await Bc(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ay.provider={build:()=>new ay};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class o_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ns("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="FirestoreClient";class d4{constructor(e,n,i,a,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=a,this.user=Cn.UNAUTHENTICATED,this.clientId=Py.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ve(ra,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ve(ra,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=e_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function gg(t,e){t.asyncQueue.verifyOperationInProgress(),ve(ra,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async a=>{i.isEqual(a)||(await XS(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p4(t);ve(ra,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>xw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,a)=>xw(e.remoteStore,a)),t._onlineComponents=e}async function p4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ve(ra,"Using user provided OfflineComponentProvider");try{await gg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===le.FAILED_PRECONDITION||a.code===le.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Tl("Error using user provided cache. Falling back to memory cache: "+n),await gg(t,new hd)}}else ve(ra,"Using default OfflineComponentProvider"),await gg(t,new f4(void 0));return t._offlineComponents}async function mx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ve(ra,"Using user provided OnlineComponentProvider"),await kw(t,t._uninitializedComponentsProvider._online)):(ve(ra,"Using default OnlineComponentProvider"),await kw(t,new ay))),t._onlineComponents}function m4(t){return mx(t).then(e=>e.syncEngine)}async function fd(t){const e=await mx(t),n=e.eventManager;return n.onListen=JP.bind(null,e.syncEngine),n.onUnlisten=n4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=e4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=r4.bind(null,e.syncEngine),n}function g4(t,e,n={}){const i=new Zi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new o_({next:T=>{v.Nu(),c.enqueueAndForget(()=>n_(l,b));const C=T.docs.has(d);!C&&T.fromCache?g.reject(new ye(le.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&T.fromCache&&p&&p.source==="server"?g.reject(new ye(le.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),b=new i_(kd(d.path),v,{includeMetadataChanges:!0,qa:!0});return t_(l,b)}(await fd(t),t.asyncQueue,e,n,i)),i.promise}function y4(t,e,n={}){const i=new Zi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const v=new o_({next:T=>{v.Nu(),c.enqueueAndForget(()=>n_(l,b)),T.fromCache&&p.source==="server"?g.reject(new ye(le.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),b=new i_(d,v,{includeMetadataChanges:!0,qa:!0});return t_(l,b)}(await fd(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */const Ow=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="firestore.googleapis.com",Mw=!0;class Nw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yx,this.ssl=Mw}else this.host=e.host,this.ssl=e.ssl??Mw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=QS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Q2)throw new ye(le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ye(le.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ye(le.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ye(le.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qd{constructor(e,n,i,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new wN;switch(i.type){case"firstParty":return new AN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Ow.get(n);i&&(ve("ComponentProvider","Removing Datastore"),Ow.delete(n),i.terminate())}(this),Promise.resolve()}}function _4(t,e,n,i={}){var g;t=nr(t,qd);const a=Nl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},d=`${e}:${n}`;a&&(h1(`https://${d}`),f1("Firestore",!0)),l.host!==yx&&l.host!==d&&Tl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:i};if(!to(p,c)&&(t._setSettings(p),i.mockUserToken)){let v,b;if(typeof i.mockUserToken=="string")v=i.mockUserToken,b=Cn.MOCK_USER;else{v=kD(i.mockUserToken,(g=t._app)==null?void 0:g.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ye(le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Cn(T)}t._authCredentials=new TN(new aS(v,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ca(this.firestore,e,this._query)}}class It{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Lc(n,It._jsonSchema))return new It(e,i||null,new Se(gt.fromString(n.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:zt("string",It._jsonSchemaVersion),referencePath:zt("string")};class Ks extends ca{constructor(e,n,i){super(e,n,kd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Se(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function li(t,e,...n){if(t=Ft(t),oS("collection","path",e),t instanceof qd){const i=gt.fromString(e,...n);return Yb(i),new Ks(t,null,i)}{if(!(t instanceof It||t instanceof Ks))throw new ye(le.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(gt.fromString(e,...n));return Yb(i),new Ks(t.firestore,null,i)}}function Ir(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Py.newId()),oS("doc","path",e),t instanceof qd){const i=gt.fromString(e,...n);return Gb(i),new It(t,null,new Se(i))}{if(!(t instanceof It||t instanceof Ks))throw new ye(le.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(gt.fromString(e,...n));return Gb(i),new It(t.firestore,t instanceof Ks?t.converter:null,new Se(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="AsyncQueue";class Vw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new JS(this,"async_queue_retry"),this._c=()=>{const i=mg();i&&ve(Pw,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=mg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ul(e))throw e;ve(Pw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,ns("INTERNAL UNHANDLED ERROR: ",jw(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Jy.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Ie(47125,{Pc:jw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Lw(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const a=n;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(t,["next","error","complete"])}class ia extends qd{constructor(e,n,i,a){super(e,n,i,a),this.type="firestore",this._queue=new Vw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vw(e),this._firestoreClient=void 0,await e}}}function _x(t,e){const n=typeof t=="object"?t:g1(),i=typeof t=="string"?t:id,a=xy(n,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=ID("firestore");l&&_4(a,...l)}return a}function Bd(t){if(t._terminated)throw new ye(le.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||v4(t),t._firestoreClient}function v4(t){var i,a,l;const e=t._freezeSettings(),n=function(d,p,g,v){return new FN(d,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,gx(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new d4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(En.fromBase64String(e))}catch(n){throw new ye(le.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yr(En.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lc(e,yr._jsonSchema))return yr.fromBase64String(e.bytes)}}yr._jsonSchemaVersion="firestore/bytes/1.0",yr._jsonSchema={type:zt("string",yr._jsonSchemaVersion),bytes:zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(le.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(le.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(le.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ui._jsonSchemaVersion}}static fromJSON(e){if(Lc(e,ui._jsonSchema))return new ui(e.latitude,e.longitude)}}ui._jsonSchemaVersion="firestore/geoPoint/1.0",ui._jsonSchema={type:zt("string",ui._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class ci{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ci._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lc(e,ci._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ci(e.vectorValues);throw new ye(le.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ci._jsonSchemaVersion="firestore/vectorValue/1.0",ci._jsonSchema={type:zt("string",ci._jsonSchemaVersion),vectorValues:zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=/^__.*__$/;class b4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ua(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uc(e,this.data,n,this.fieldTransforms)}}class vx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ua(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ex(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ac:t})}}class l_{constructor(e,n,i,a,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new l_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var a;const n=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return dd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ex(this.Ac)&&E4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class w4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||jd(e)}Cc(e,n,i,a=!1){return new l_({Ac:e,methodName:n,Dc:i,path:vn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $d(t){const e=t._freezeSettings(),n=jd(t._databaseId);return new w4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bx(t,e,n,i,a,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,a);c_("Data must be an object, but it was:",c,i);const d=wx(i,c);let p,g;if(l.merge)p=new tr(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const b of l.mergeFields){const T=oy(e,b,n);if(!c.contains(T))throw new ye(le.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Sx(v,T)||v.push(T)}p=new tr(v),g=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=c.fieldTransforms;return new b4(new zn(d),p,g)}class Hd extends Fd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}class u_ extends Fd{_toFieldTransform(e){return new m2(e.path,new Sc)}isEqual(e){return e instanceof u_}}function T4(t,e,n,i){const a=t.Cc(1,e,n);c_("Data must be an object, but it was:",a,i);const l=[],c=zn.empty();la(i,(p,g)=>{const v=h_(e,p,n);g=Ft(g);const b=a.yc(v);if(g instanceof Hd)l.push(v);else{const T=Fc(g,b);T!=null&&(l.push(v),c.set(v,T))}});const d=new tr(l);return new vx(c,d,a.fieldTransforms)}function S4(t,e,n,i,a,l){const c=t.Cc(1,e,n),d=[oy(e,i,n)],p=[a];if(l.length%2!=0)throw new ye(le.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<l.length;T+=2)d.push(oy(e,l[T])),p.push(l[T+1]);const g=[],v=zn.empty();for(let T=d.length-1;T>=0;--T)if(!Sx(g,d[T])){const C=d[T];let N=p[T];N=Ft(N);const F=c.yc(C);if(N instanceof Hd)g.push(C);else{const M=Fc(N,F);M!=null&&(g.push(C),v.set(C,M))}}const b=new tr(g);return new vx(v,b,c.fieldTransforms)}function x4(t,e,n,i=!1){return Fc(n,t.Cc(i?4:3,e))}function Fc(t,e){if(Tx(t=Ft(t)))return c_("Unsupported field value:",e,t),wx(t,e);if(t instanceof Fd)return function(i,a){if(!Ex(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let p=Fc(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,a){if((i=Ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return f2(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=pt.fromDate(i);return{timestampValue:ld(a.serializer,l)}}if(i instanceof pt){const l=new pt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ld(a.serializer,l)}}if(i instanceof ui)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof yr)return{bytesValue:zS(a.serializer,i._byteString)};if(i instanceof It){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$y(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof ci)return function(c,d){return{mapValue:{fields:{[gS]:{stringValue:yS},[sd]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return By(d.serializer,g)})}}}}}}(i,a);throw a.Sc(`Unsupported field value: ${Rd(i)}`)}(t,e)}function wx(t,e){const n={};return cS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):la(t,(i,a)=>{const l=Fc(a,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Tx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof ui||t instanceof yr||t instanceof It||t instanceof Fd||t instanceof ci)}function c_(t,e,n){if(!Tx(n)||!lS(n)){const i=Rd(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function oy(t,e,n){if((e=Ft(e))instanceof zd)return e._internalPath;if(typeof e=="string")return h_(t,e);throw dd("Field path arguments must be of type string or ",t,!1,void 0,n)}const A4=new RegExp("[~\\*/\\[\\]]");function h_(t,e,n){if(e.search(A4)>=0)throw dd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zd(...e.split("."))._internalPath}catch{throw dd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dd(t,e,n,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ye(le.INVALID_ARGUMENT,d+t+p)}function Sx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,i,a,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R4 extends xx{data(){return super.data()}}function Gd(t,e){return typeof e=="string"?h_(t,e):e instanceof zd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(le.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f_{}class Rx extends f_{}function Xs(t,e,...n){let i=[];e instanceof f_&&i.push(e),i=i.concat(n),function(l){const c=l.filter(p=>p instanceof d_).length,d=l.filter(p=>p instanceof Yd).length;if(c>1||c>0&&d>0)throw new ye(le.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)t=a._apply(t);return t}class Yd extends Rx{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Yd(e,n,i)}_apply(e){const n=this._parse(e);return Cx(e._query,n),new ca(e.firestore,e.converter,Kg(e._query,n))}_parse(e){const n=$d(e.firestore);return function(l,c,d,p,g,v,b){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ye(le.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){qw(b,v);const N=[];for(const F of b)N.push(Uw(p,l,F));T={arrayValue:{values:N}}}else T=Uw(p,l,b)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||qw(b,v),T=x4(d,c,b,v==="in"||v==="not-in");return qt.create(g,v,T)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sa(t,e,n){const i=e,a=Gd("where",t);return Yd._create(a,i,n)}class d_ extends f_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new d_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Or.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Cx(c,p),c=Kg(c,p)}(e._query,n),new ca(e.firestore,e.converter,Kg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class p_ extends Rx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new p_(e,n)}_apply(e){const n=function(a,l,c){if(a.startAt!==null)throw new ye(le.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ye(le.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tc(l,c)}(e._query,this._field,this._direction);return new ca(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new ql(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,n))}}function m_(t,e="asc"){const n=e,i=Gd("orderBy",t);return p_._create(i,n)}function Uw(t,e,n){if(typeof(n=Ft(n))=="string"){if(n==="")throw new ye(le.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xS(e)&&n.indexOf("/")!==-1)throw new ye(le.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(gt.fromString(n));if(!Se.isDocumentKey(i))throw new ye(le.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return tw(t,new Se(i))}if(n instanceof It)return tw(t,n._key);throw new ye(le.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(n)}.`)}function qw(t,e){if(!Array.isArray(t)||t.length===0)throw new ye(le.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cx(t,e){const n=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(t.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ye(le.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ye(le.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class C4{convertValue(e,n="none"){switch(ta(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ea(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return la(e,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertVectorValue(e){var i,a,l;const n=(l=(a=(i=e.fields)==null?void 0:i[sd].arrayValue)==null?void 0:a.values)==null?void 0:l.map(c=>Mt(c.doubleValue));return new ci(n)}convertGeoPoint(e){return new ui(Mt(e.latitude),Mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Dd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ec(e));default:return null}}convertTimestamp(e){const n=Js(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=gt.fromString(e);rt(WS(i),9688,{name:e});const a=new bc(i.get(1),i.get(3)),l=new Se(i.popFirst(5));return a.isEqual(n)||ns(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class ic{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ka extends xx{constructor(e,n,i,a,l,c){super(e,n,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ff(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Gd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(le.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ka._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ka._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ka._jsonSchema={type:zt("string",Ka._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class Ff extends Ka{data(e={}){return super.data(e)}}class Xa{constructor(e,n,i,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new ic(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ff(this._firestore,this._userDataWriter,i.key,i,new ic(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(le.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new Ff(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Ff(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ic(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:I4(d.type),doc:p,oldIndex:g,newIndex:v}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(le.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Py.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function I4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){t=nr(t,It);const e=nr(t.firestore,ia);return g4(Bd(e),t._key).then(n=>Dx(e,t,n))}Xa._jsonSchemaVersion="firestore/querySnapshot/1.0",Xa._jsonSchema={type:zt("string",Xa._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};class y_ extends C4{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function ly(t){t=nr(t,ca);const e=nr(t.firestore,ia),n=Bd(e),i=new y_(e);return Ax(t._query),y4(n,t._query).then(a=>new Xa(e,i,t,a))}function D4(t,e,n){t=nr(t,It);const i=nr(t.firestore,ia),a=Ix(t.converter,e);return __(i,[bx($d(i),"setDoc",t._key,a,t.converter!==null,n).toMutation(t._key,Cr.none())])}function Za(t,e,n,...i){t=nr(t,It);const a=nr(t.firestore,ia),l=$d(a);let c;return c=typeof(e=Ft(e))=="string"||e instanceof zd?S4(l,"updateDoc",t._key,e,n,i):T4(l,"updateDoc",t._key,e),__(a,[c.toMutation(t._key,Cr.exists(!0))])}function k4(t,e){const n=nr(t.firestore,ia),i=Ir(t),a=Ix(t.converter,e);return __(n,[bx($d(t.firestore),"addDoc",i._key,a,t.converter!==null,{}).toMutation(i._key,Cr.exists(!1))]).then(()=>i)}function Wd(t,...e){var p,g,v;t=Ft(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Lw(e[i])||(n=e[i++]);const a={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Lw(e[i])){const b=e[i];e[i]=(p=b.next)==null?void 0:p.bind(b),e[i+1]=(g=b.error)==null?void 0:g.bind(b),e[i+2]=(v=b.complete)==null?void 0:v.bind(b)}let l,c,d;if(t instanceof It)c=nr(t.firestore,ia),d=kd(t._key.path),l={next:b=>{e[i]&&e[i](Dx(c,t,b))},error:e[i+1],complete:e[i+2]};else{const b=nr(t,ca);c=nr(b.firestore,ia),d=b._query;const T=new y_(c);l={next:C=>{e[i]&&e[i](new Xa(c,T,b,C))},error:e[i+1],complete:e[i+2]},Ax(t._query)}return function(T,C,N,F){const M=new o_(F),P=new i_(C,M,N);return T.asyncQueue.enqueueAndForget(async()=>t_(await fd(T),P)),()=>{M.Nu(),T.asyncQueue.enqueueAndForget(async()=>n_(await fd(T),P))}}(Bd(c),d,a,l)}function __(t,e){return function(i,a){const l=new Zi;return i.asyncQueue.enqueueAndForget(async()=>i4(await m4(i),a,l)),l.promise}(Bd(t),e)}function Dx(t,e,n){const i=n.docs.get(e._key),a=new y_(t);return new Ka(t,a,e._key,i,new ic(n.hasPendingWrites,n.fromCache),e.converter)}function Bw(){return new u_("serverTimestamp")}(function(e,n=!0){(function(a){jl=a})(Pl),bl(new no("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new ia(new SN(i.getProvider("auth-internal")),new RN(c,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bc(g.options.projectId,v)}(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ws(zb,Fb,e),Ws(zb,Fb,"esm2020")})();const O4={apiKey:"AIzaSyB5aFUQbtG1rShW-1O88aZjCG7uErNxmgQ",authDomain:"pdms-test-8a5cc.firebaseapp.com",projectId:"pdms-test-8a5cc",storageBucket:"pdms-test-8a5cc.firebasestorage.app",messagingSenderId:"631678861167",appId:"1:631678861167:web:5cd775b77e53535700329a"},v_=m1(O4);_x(v_);const Bt=_x(v_),oo=_N(v_);function M4({onLoginSuccess:t}){const[e,n]=q.useState(""),[i,a]=q.useState(""),l=Dc(),c=()=>{l("/signup")},d=()=>{nM(oo,e,i).then(()=>{t(),l("/dashboard")}).catch(p=>{alert("로그인 실패: "+p.message)})};return _.jsxs(N4,{children:[_.jsxs(P4,{children:[_.jsxs(V4,{children:[_.jsx(j4,{children:"PDMS"}),_.jsx(L4,{children:"Pushcomz Design Management System"})]}),_.jsxs(U4,{children:[_.jsx(q4,{type:"text",value:e,onChange:p=>n(p.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(B4,{type:"password",value:i,onChange:p=>a(p.target.value),placeholder:"비밀번호를 입력해주세요."})]}),_.jsx(z4,{onClick:d,children:"로그인"}),_.jsxs($4,{children:[_.jsx(H4,{children:"계정이 없습니까?"}),_.jsx(G4,{onClick:c,children:"등록하기"})]})]}),_.jsx(F4,{children:"© Pushcomz Corp."})]})}const N4=H.div`
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
`,kx="./assets/logo-NEcdCz8m.svg";function Y4(){const[t,e]=q.useState(""),[n,i]=q.useState(null),a=Dc();q.useEffect(()=>{const d=Sd(oo,async p=>{if(p){p.displayName&&e(p.displayName);const g=await g_(Ir(Bt,"users",p.uid));g.exists()?i(g.data().role):i(null)}else e(""),i(null)});return()=>d()},[]);const l=()=>{oM(oo).then(()=>{a("/")}).catch(d=>{alert("로그아웃 중 오류가 발생했습니다: "+d.message)})},c=d=>{switch(d){case 1:return"요청자";case 2:return"디자이너";case 3:return"담당자";default:return"역할 없음"}};return _.jsxs(W4,{children:[_.jsx(Q4,{src:kx}),_.jsxs(K4,{children:[_.jsxs(X4,{children:[_.jsx(Z4,{children:t}),"님(",c(n),") 환영합니다."]}),_.jsx(J4,{onClick:l,children:"로그아웃"}),_.jsx(eV,{})]})]})}const W4=H.header`
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
`,E_="./assets/url-icon-DJKri2bW.svg";function tV({item:t,index:e,onReviewComplete:n,onCancel:i,onEditClick:a,onDetailClick:l}){const c=p=>{if(!p)return"-";if(p.toDate){const g=p.toDate();return`${g.getMonth()+1}/${g.getDate()}`}return p},d=p=>{p.stopPropagation(),l(t)};return _.jsxs(nV,{isCanceled:t.status==="취소",children:[_.jsx(Sr,{children:e}),_.jsx(Sr,{children:_.jsx(lV,{onClick:d,$hasUpdate:!!t.updated_at,children:t.design_request_id})}),_.jsx(Sr,{children:c(t.request_date)}),_.jsx(rV,{children:c(t.completion_dt)}),_.jsx(iV,{children:c(t.open_dt)}),_.jsx(Sr,{children:t.task_form}),_.jsx(sV,{children:t.task_type}),_.jsx(aV,{children:_.jsxs(uV,{children:[t.emergency?_.jsx(Ox,{children:"긴급"}):"",_.jsx(cV,{onClick:d,children:t.requirement})]})}),_.jsx(Sr,{children:_.jsx(zw,{href:t.url,target:"_blank"})}),_.jsx(oV,{children:_.jsx(hV,{onClick:d,children:t.note||""})}),_.jsx(Sr,{children:_.jsx(fV,{status:t.status,children:t.status==="검수요청"?"진행중":t.status==="검수중"?"검수중":t.status||"대기"})}),_.jsx(Sr,{children:t.assigned_designer||"미배정"}),_.jsx(Sr,{children:t.manager_review_status==="검수완료"&&t.result_url?_.jsx(zw,{href:t.result_url,target:"_blank"}):""}),_.jsx(Sr,{children:t.manager_review_status==="검수완료"?t.status!=="완료"?_.jsx(Mx,{onClick:()=>n(t.id),children:"검수완료"}):_.jsx(dV,{children:"검수완료"}):""}),_.jsx(Sr,{children:_.jsx(Nx,{onClick:()=>a(t.id),disabled:t.status==="취소",children:"수정"})}),_.jsx(Sr,{children:_.jsx(Px,{onClick:()=>i(t.id),children:"취소"})})]})}const nV=H.tr`
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
`,Sr=H.td`
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
`,zw=H.a`
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
`;function pV({data:t,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a}){return _.jsx(mV,{children:_.jsxs(gV,{children:[_.jsx(yV,{children:"요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"50px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"220px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"80px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(xn,{children:"번호"}),_.jsx(xn,{children:"문서번호"}),_.jsx(xn,{children:"요청일"}),_.jsxs(xn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(xn,{children:"오픈일"}),_.jsx(xn,{children:"업무형태"}),_.jsx(xn,{children:"업무타입"}),_.jsx(xn,{children:"작업항목"}),_.jsx(xn,{children:"요청서 URL"}),_.jsx(xn,{children:"메모"}),_.jsx(xn,{children:"진행상태"}),_.jsx(xn,{children:"디자이너"}),_.jsx(xn,{children:"산출물 URL"}),_.jsx(xn,{children:"검수"}),_.jsx(xn,{children:"수정"}),_.jsx(xn,{children:"취소"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(tV,{index:c+1,item:l,onReviewComplete:e,onCancel:n,onEditClick:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:16,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const mV=H.div`
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

  &:nth-of-type(11) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({theme:t})=>t.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`;function b_(){const t=new Date,e=t.getFullYear(),n=t.getMonth()+1;return _.jsx(_V,{children:_.jsxs(vV,{children:[e,"년 ",n,"월 디자인 편성 요청 스케줄"]})})}const _V=H.div`
  padding: 30px 48px;
  background-color: ${({theme:t})=>t.colors.gray08};
`,vV=H.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`,Vx="./assets/selectbox-arrow-BwC8UGU0.svg";function EV(t,e,n="long"){return new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:t,timeZoneName:n}).format(e).split(/\s/g).slice(2).join(" ")}const yg={},sc={};function Wa(t,e){try{const i=(yg[t]||(yg[t]=new Intl.DateTimeFormat("en-US",{timeZone:t,timeZoneName:"longOffset"}).format))(e).split("GMT")[1];return i in sc?sc[i]:Fw(i,i.split(":"))}catch{if(t in sc)return sc[t];const n=t==null?void 0:t.match(bV);return n?Fw(t,n.slice(1)):NaN}}const bV=/([+-]\d\d):?(\d\d)?/;function Fw(t,e){const n=+(e[0]||0),i=+(e[1]||0),a=+(e[2]||0)/60;return sc[t]=n*60+i>0?n*60+i+a:n*60-i-a}class ri extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]=="string"&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Wa(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]=="number"&&(e.length===1||e.length===2&&typeof e[1]!="number")?this.setTime(e[0]):typeof e[0]=="string"?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),jx(this),uy(this)):this.setTime(Date.now())}static tz(e,...n){return n.length?new ri(...n,e):new ri(Date.now(),e)}withTimeZone(e){return new ri(+this,e)}getTimezoneOffset(){const e=-Wa(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),uy(this),+this}[Symbol.for("constructDateFrom")](e){return new ri(+new Date(e),this.timeZone)}}const $w=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(t=>{if(!$w.test(t))return;const e=t.replace($w,"$1UTC");ri.prototype[e]&&(t.startsWith("get")?ri.prototype[t]=function(){return this.internal[e]()}:(ri.prototype[t]=function(){return Date.prototype[e].apply(this.internal,arguments),wV(this),+this},ri.prototype[e]=function(){return Date.prototype[e].apply(this,arguments),uy(this),+this}))});function uy(t){t.internal.setTime(+t),t.internal.setUTCSeconds(t.internal.getUTCSeconds()-Math.round(-Wa(t.timeZone,t)*60))}function wV(t){Date.prototype.setFullYear.call(t,t.internal.getUTCFullYear(),t.internal.getUTCMonth(),t.internal.getUTCDate()),Date.prototype.setHours.call(t,t.internal.getUTCHours(),t.internal.getUTCMinutes(),t.internal.getUTCSeconds(),t.internal.getUTCMilliseconds()),jx(t)}function jx(t){const e=Wa(t.timeZone,t),n=e>0?Math.floor(e):Math.ceil(e),i=new Date(+t);i.setUTCHours(i.getUTCHours()-1);const a=-new Date(+t).getTimezoneOffset(),l=-new Date(+i).getTimezoneOffset(),c=a-l,d=Date.prototype.getHours.apply(t)!==t.internal.getUTCHours();c&&d&&t.internal.setUTCMinutes(t.internal.getUTCMinutes()+c);const p=a-n;p&&Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+p);const g=new Date(+t);g.setUTCSeconds(0);const v=a>0?g.getSeconds():(g.getSeconds()-60)%60,b=Math.round(-(Wa(t.timeZone,t)*60))%60;(b||v)&&(t.internal.setUTCSeconds(t.internal.getUTCSeconds()+b),Date.prototype.setUTCSeconds.call(t,Date.prototype.getUTCSeconds.call(t)+b+v));const T=Wa(t.timeZone,t),C=T>0?Math.floor(T):Math.ceil(T),F=-new Date(+t).getTimezoneOffset()-C,M=C!==n,P=F-p;if(M&&P){Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+P);const j=Wa(t.timeZone,t),O=j>0?Math.floor(j):Math.ceil(j),te=C-O;te&&(t.internal.setUTCMinutes(t.internal.getUTCMinutes()+te),Date.prototype.setUTCMinutes.call(t,Date.prototype.getUTCMinutes.call(t)+te))}}class Rn extends ri{static tz(e,...n){return n.length?new Rn(...n,e):new Rn(Date.now(),e)}toISOString(){const[e,n,i]=this.tzComponents(),a=`${e}${n}:${i}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[e,n,i,a]=this.internal.toUTCString().split(" ");return`${e==null?void 0:e.slice(0,-1)} ${i} ${n} ${a}`}toTimeString(){const e=this.internal.toUTCString().split(" ")[4],[n,i,a]=this.tzComponents();return`${e} GMT${n}${i}${a} (${EV(this.timeZone,this)})`}toLocaleString(e,n){return Date.prototype.toLocaleString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleDateString(e,n){return Date.prototype.toLocaleDateString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}toLocaleTimeString(e,n){return Date.prototype.toLocaleTimeString.call(this,e,{...n,timeZone:(n==null?void 0:n.timeZone)||this.timeZone})}tzComponents(){const e=this.getTimezoneOffset(),n=e>0?"-":"+",i=String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),a=String(Math.abs(e)%60).padStart(2,"0");return[n,i,a]}withTimeZone(e){return new Rn(+this,e)}[Symbol.for("constructDateFrom")](e){return new Rn(+new Date(e),this.timeZone)}}const Lx=6048e5,TV=864e5,Hw=Symbol.for("constructDateFrom");function Kt(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Hw in t?t[Hw](e):t instanceof Date?new t.constructor(e):new Date(e)}function ft(t,e){return Kt(e||t,t)}function Ux(t,e,n){const i=ft(t,n==null?void 0:n.in);return isNaN(e)?Kt(t,NaN):(e&&i.setDate(i.getDate()+e),i)}function qx(t,e,n){const i=ft(t,n==null?void 0:n.in);if(isNaN(e))return Kt(t,NaN);if(!e)return i;const a=i.getDate(),l=Kt(t,i.getTime());l.setMonth(i.getMonth()+e+1,0);const c=l.getDate();return a>=c?l:(i.setFullYear(l.getFullYear(),l.getMonth(),a),i)}let SV={};function $c(){return SV}function Il(t,e){var d,p,g,v;const n=$c(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ft(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?7:0)+l-i;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function Rc(t,e){return Il(t,{...e,weekStartsOn:1})}function Bx(t,e){const n=ft(t,e==null?void 0:e.in),i=n.getFullYear(),a=Kt(n,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const l=Rc(a),c=Kt(n,0);c.setFullYear(i,0,4),c.setHours(0,0,0,0);const d=Rc(c);return n.getTime()>=l.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function Gw(t){const e=ft(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function zl(t,...e){const n=Kt.bind(null,e.find(i=>typeof i=="object"));return e.map(n)}function Cc(t,e){const n=ft(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function zx(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e),l=Cc(i),c=Cc(a),d=+l-Gw(l),p=+c-Gw(c);return Math.round((d-p)/TV)}function xV(t,e){const n=Bx(t,e),i=Kt(t,0);return i.setFullYear(n,0,4),i.setHours(0,0,0,0),Rc(i)}function AV(t,e,n){return Ux(t,e*7,n)}function RV(t,e,n){return qx(t,e*12,n)}function CV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Kt.bind(null,a));const l=ft(a,i);(!n||n<l||isNaN(+l))&&(n=l)}),Kt(i,n||NaN)}function IV(t,e){let n,i=e==null?void 0:e.in;return t.forEach(a=>{!i&&typeof a=="object"&&(i=Kt.bind(null,a));const l=ft(a,i);(!n||n>l||isNaN(+l))&&(n=l)}),Kt(i,n||NaN)}function DV(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return+Cc(i)==+Cc(a)}function Fx(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function kV(t){return!(!Fx(t)&&typeof t!="number"||isNaN(+ft(t)))}function OV(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e),l=i.getFullYear()-a.getFullYear(),c=i.getMonth()-a.getMonth();return l*12+c}function MV(t,e){const n=ft(t,e==null?void 0:e.in),i=n.getMonth();return n.setFullYear(n.getFullYear(),i+1,0),n.setHours(23,59,59,999),n}function NV(t,e){const[n,i]=zl(t,e.start,e.end);return{start:n,end:i}}function PV(t,e){const{start:n,end:i}=NV(e==null?void 0:e.in,t);let a=+n>+i;const l=a?+n:+i,c=a?i:n;c.setHours(0,0,0,0),c.setDate(1);let d=1;const p=[];for(;+c<=l;)p.push(Kt(n,c)),c.setMonth(c.getMonth()+d);return a?p.reverse():p}function VV(t,e){const n=ft(t,e==null?void 0:e.in);return n.setDate(1),n.setHours(0,0,0,0),n}function jV(t,e){const n=ft(t,e==null?void 0:e.in),i=n.getFullYear();return n.setFullYear(i+1,0,0),n.setHours(23,59,59,999),n}function $x(t,e){const n=ft(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function Hx(t,e){var d,p,g,v;const n=$c(),i=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??0,a=ft(t,e==null?void 0:e.in),l=a.getDay(),c=(l<i?-7:0)+6-(l-i);return a.setDate(a.getDate()+c),a.setHours(23,59,59,999),a}function LV(t,e){return Hx(t,{...e,weekStartsOn:1})}const UV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qV=(t,e,n)=>{let i;const a=UV[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function _g(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const BV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},zV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},FV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$V={date:_g({formats:BV,defaultWidth:"full"}),time:_g({formats:zV,defaultWidth:"full"}),dateTime:_g({formats:FV,defaultWidth:"full"})},HV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},GV=(t,e,n,i)=>HV[t];function Wu(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let a;if(i==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):c;a=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[c]}const l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}const YV={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},WV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},QV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},KV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},XV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ZV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},JV=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},e6={ordinalNumber:JV,era:Wu({values:YV,defaultWidth:"wide"}),quarter:Wu({values:WV,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Wu({values:QV,defaultWidth:"wide"}),day:Wu({values:KV,defaultWidth:"wide"}),dayPeriod:Wu({values:XV,defaultWidth:"wide",formattingValues:ZV,defaultFormattingWidth:"wide"})};function Qu(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?n6(d,b=>b.test(c)):t6(d,b=>b.test(c));let g;g=t.valueCallback?t.valueCallback(p):p,g=n.valueCallback?n.valueCallback(g):g;const v=e.slice(c.length);return{value:g,rest:v}}}function t6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function n6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function r6(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],l=e.match(t.parsePattern);if(!l)return null;let c=t.valueCallback?t.valueCallback(l[0]):l[0];c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(a.length);return{value:c,rest:d}}}const i6=/^(\d+)(th|st|nd|rd)?/i,s6=/\d+/i,a6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},o6={any:[/^b/i,/^(a|c)/i]},l6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},u6={any:[/1/i,/2/i,/3/i,/4/i]},c6={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h6={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f6={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},d6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},p6={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},m6={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},g6={ordinalNumber:r6({matchPattern:i6,parsePattern:s6,valueCallback:t=>parseInt(t,10)}),era:Qu({matchPatterns:a6,defaultMatchWidth:"wide",parsePatterns:o6,defaultParseWidth:"any"}),quarter:Qu({matchPatterns:l6,defaultMatchWidth:"wide",parsePatterns:u6,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Qu({matchPatterns:c6,defaultMatchWidth:"wide",parsePatterns:h6,defaultParseWidth:"any"}),day:Qu({matchPatterns:f6,defaultMatchWidth:"wide",parsePatterns:d6,defaultParseWidth:"any"}),dayPeriod:Qu({matchPatterns:p6,defaultMatchWidth:"any",parsePatterns:m6,defaultParseWidth:"any"})},w_={code:"en-US",formatDistance:qV,formatLong:$V,formatRelative:GV,localize:e6,match:g6,options:{weekStartsOn:0,firstWeekContainsDate:1}};function y6(t,e){const n=ft(t,e==null?void 0:e.in);return zx(n,$x(n))+1}function Gx(t,e){const n=ft(t,e==null?void 0:e.in),i=+Rc(n)-+xV(n);return Math.round(i/Lx)+1}function Yx(t,e){var v,b,T,C;const n=ft(t,e==null?void 0:e.in),i=n.getFullYear(),a=$c(),l=(e==null?void 0:e.firstWeekContainsDate)??((b=(v=e==null?void 0:e.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??a.firstWeekContainsDate??((C=(T=a.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=Kt((e==null?void 0:e.in)||t,0);c.setFullYear(i+1,0,l),c.setHours(0,0,0,0);const d=Il(c,e),p=Kt((e==null?void 0:e.in)||t,0);p.setFullYear(i,0,l),p.setHours(0,0,0,0);const g=Il(p,e);return+n>=+d?i+1:+n>=+g?i:i-1}function _6(t,e){var d,p,g,v;const n=$c(),i=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((v=(g=n.locale)==null?void 0:g.options)==null?void 0:v.firstWeekContainsDate)??1,a=Yx(t,e),l=Kt((e==null?void 0:e.in)||t,0);return l.setFullYear(a,0,i),l.setHours(0,0,0,0),Il(l,e)}function Wx(t,e){const n=ft(t,e==null?void 0:e.in),i=+Il(n,e)-+_6(n,e);return Math.round(i/Lx)+1}function ot(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Ls={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ot(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ot(n+1,2)},d(t,e){return ot(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ot(t.getHours()%12||12,e.length)},H(t,e){return ot(t.getHours(),e.length)},m(t,e){return ot(t.getMinutes(),e.length)},s(t,e){return ot(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),a=Math.trunc(i*Math.pow(10,n-3));return ot(a,e.length)}},sl={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Yw={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return Ls.y(t,e)},Y:function(t,e,n,i){const a=Yx(t,i),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return ot(c,2)}return e==="Yo"?n.ordinalNumber(l,{unit:"year"}):ot(l,e.length)},R:function(t,e){const n=Bx(t);return ot(n,e.length)},u:function(t,e){const n=t.getFullYear();return ot(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ot(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ot(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Ls.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ot(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const a=Wx(t,i);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):ot(a,e.length)},I:function(t,e,n){const i=Gx(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ot(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ls.d(t,e)},D:function(t,e,n){const i=y6(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ot(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return ot(l,2);case"eo":return n.ordinalNumber(l,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const a=t.getDay(),l=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return ot(l,e.length);case"co":return n.ordinalNumber(l,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return ot(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let a;switch(i===12?a=sl.noon:i===0?a=sl.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let a;switch(i>=17?a=sl.evening:i>=12?a=sl.afternoon:i>=4?a=sl.morning:a=sl.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ls.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ls.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ot(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ot(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ls.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ls.s(t,e)},S:function(t,e){return Ls.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Qw(i);case"XXXX":case"XX":return Ha(i);case"XXXXX":case"XXX":default:return Ha(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Qw(i);case"xxxx":case"xx":return Ha(i);case"xxxxx":case"xxx":default:return Ha(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ww(i,":");case"OOOO":default:return"GMT"+Ha(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ww(i,":");case"zzzz":default:return"GMT"+Ha(i,":")}},t:function(t,e,n){const i=Math.trunc(+t/1e3);return ot(i,e.length)},T:function(t,e,n){return ot(+t,e.length)}};function Ww(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=Math.trunc(i/60),l=i%60;return l===0?n+String(a):n+String(a)+e+ot(l,2)}function Qw(t,e){return t%60===0?(t>0?"-":"+")+ot(Math.abs(t)/60,2):Ha(t,e)}function Ha(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),a=ot(Math.trunc(i/60),2),l=ot(i%60,2);return n+a+e+l}const Kw=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},v6=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],a=n[2];if(!a)return Kw(t,e);let l;switch(i){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",Kw(i,e)).replace("{{time}}",Qx(a,e))},E6={p:Qx,P:v6},b6=/^D+$/,w6=/^Y+$/,T6=["D","DD","YY","YYYY"];function S6(t){return b6.test(t)}function x6(t){return w6.test(t)}function A6(t,e,n){const i=R6(t,e,n);if(console.warn(i),T6.includes(t))throw new RangeError(i)}function R6(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const C6=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I6=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,D6=/^'([^]*?)'?$/,k6=/''/g,O6=/[a-zA-Z]/;function M6(t,e,n){var v,b,T,C,N,F,M,P;const i=$c(),a=(n==null?void 0:n.locale)??i.locale??w_,l=(n==null?void 0:n.firstWeekContainsDate)??((b=(v=n==null?void 0:n.locale)==null?void 0:v.options)==null?void 0:b.firstWeekContainsDate)??i.firstWeekContainsDate??((C=(T=i.locale)==null?void 0:T.options)==null?void 0:C.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((F=(N=n==null?void 0:n.locale)==null?void 0:N.options)==null?void 0:F.weekStartsOn)??i.weekStartsOn??((P=(M=i.locale)==null?void 0:M.options)==null?void 0:P.weekStartsOn)??0,d=ft(t,n==null?void 0:n.in);if(!kV(d))throw new RangeError("Invalid time value");let p=e.match(I6).map(j=>{const O=j[0];if(O==="p"||O==="P"){const te=E6[O];return te(j,a.formatLong)}return j}).join("").match(C6).map(j=>{if(j==="''")return{isToken:!1,value:"'"};const O=j[0];if(O==="'")return{isToken:!1,value:N6(j)};if(Yw[O])return{isToken:!0,value:j};if(O.match(O6))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return{isToken:!1,value:j}});a.localize.preprocessor&&(p=a.localize.preprocessor(d,p));const g={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return p.map(j=>{if(!j.isToken)return j.value;const O=j.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&x6(O)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&S6(O))&&A6(O,e,String(t));const te=Yw[O[0]];return te(d,O,a.localize,g)}).join("")}function N6(t){const e=t.match(D6);return e?e[1].replace(k6,"'"):t}function P6(t,e){const n=ft(t,e==null?void 0:e.in),i=n.getFullYear(),a=n.getMonth(),l=Kt(n,0);return l.setFullYear(i,a+1,0),l.setHours(0,0,0,0),l.getDate()}function V6(t,e){return ft(t,e==null?void 0:e.in).getMonth()}function j6(t,e){return ft(t,e==null?void 0:e.in).getFullYear()}function L6(t,e){return+ft(t)>+ft(e)}function U6(t,e){return+ft(t)<+ft(e)}function q6(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()&&i.getMonth()===a.getMonth()}function B6(t,e,n){const[i,a]=zl(n==null?void 0:n.in,t,e);return i.getFullYear()===a.getFullYear()}function z6(t,e,n){const i=ft(t,n==null?void 0:n.in),a=i.getFullYear(),l=i.getDate(),c=Kt(t,0);c.setFullYear(a,e,15),c.setHours(0,0,0,0);const d=P6(c);return i.setMonth(e,Math.min(l,d)),i}function F6(t,e,n){const i=ft(t,n==null?void 0:n.in);return isNaN(+i)?Kt(t,NaN):(i.setFullYear(e),i)}const Xw=5,$6=4;function H6(t,e){const n=e.startOfMonth(t),i=n.getDay()>0?n.getDay():7,a=e.addDays(t,-i+1),l=e.addDays(a,Xw*7-1);return e.getMonth(t)===e.getMonth(l)?Xw:$6}function Kx(t,e){const n=e.startOfMonth(t),i=n.getDay();return i===1?n:i===0?e.addDays(n,-6):e.addDays(n,-1*(i-1))}function G6(t,e){const n=Kx(t,e),i=H6(t,e);return e.addDays(n,i*7-1)}class as{constructor(e,n){this.Date=Date,this.today=()=>{var i;return(i=this.overrides)!=null&&i.today?this.overrides.today():this.options.timeZone?Rn.tz(this.options.timeZone):new this.Date},this.newDate=(i,a,l)=>{var c;return(c=this.overrides)!=null&&c.newDate?this.overrides.newDate(i,a,l):this.options.timeZone?new Rn(i,a,l,this.options.timeZone):new Date(i,a,l)},this.addDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addDays?this.overrides.addDays(i,a):Ux(i,a)},this.addMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addMonths?this.overrides.addMonths(i,a):qx(i,a)},this.addWeeks=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addWeeks?this.overrides.addWeeks(i,a):AV(i,a)},this.addYears=(i,a)=>{var l;return(l=this.overrides)!=null&&l.addYears?this.overrides.addYears(i,a):RV(i,a)},this.differenceInCalendarDays=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarDays?this.overrides.differenceInCalendarDays(i,a):zx(i,a)},this.differenceInCalendarMonths=(i,a)=>{var l;return(l=this.overrides)!=null&&l.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(i,a):OV(i,a)},this.eachMonthOfInterval=i=>{var a;return(a=this.overrides)!=null&&a.eachMonthOfInterval?this.overrides.eachMonthOfInterval(i):PV(i)},this.endOfBroadcastWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(i):G6(i,this)},this.endOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.endOfISOWeek?this.overrides.endOfISOWeek(i):LV(i)},this.endOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.endOfMonth?this.overrides.endOfMonth(i):MV(i)},this.endOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.endOfWeek?this.overrides.endOfWeek(i,a):Hx(i,this.options)},this.endOfYear=i=>{var a;return(a=this.overrides)!=null&&a.endOfYear?this.overrides.endOfYear(i):jV(i)},this.format=(i,a,l)=>{var d;const c=(d=this.overrides)!=null&&d.format?this.overrides.format(i,a,this.options):M6(i,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(c):c},this.getISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.getISOWeek?this.overrides.getISOWeek(i):Gx(i)},this.getMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getMonth?this.overrides.getMonth(i,this.options):V6(i,this.options)},this.getYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getYear?this.overrides.getYear(i,this.options):j6(i,this.options)},this.getWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.getWeek?this.overrides.getWeek(i,this.options):Wx(i,this.options)},this.isAfter=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isAfter?this.overrides.isAfter(i,a):L6(i,a)},this.isBefore=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isBefore?this.overrides.isBefore(i,a):U6(i,a)},this.isDate=i=>{var a;return(a=this.overrides)!=null&&a.isDate?this.overrides.isDate(i):Fx(i)},this.isSameDay=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameDay?this.overrides.isSameDay(i,a):DV(i,a)},this.isSameMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameMonth?this.overrides.isSameMonth(i,a):q6(i,a)},this.isSameYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.isSameYear?this.overrides.isSameYear(i,a):B6(i,a)},this.max=i=>{var a;return(a=this.overrides)!=null&&a.max?this.overrides.max(i):CV(i)},this.min=i=>{var a;return(a=this.overrides)!=null&&a.min?this.overrides.min(i):IV(i)},this.setMonth=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setMonth?this.overrides.setMonth(i,a):z6(i,a)},this.setYear=(i,a)=>{var l;return(l=this.overrides)!=null&&l.setYear?this.overrides.setYear(i,a):F6(i,a)},this.startOfBroadcastWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(i,this):Kx(i,this)},this.startOfDay=i=>{var a;return(a=this.overrides)!=null&&a.startOfDay?this.overrides.startOfDay(i):Cc(i)},this.startOfISOWeek=i=>{var a;return(a=this.overrides)!=null&&a.startOfISOWeek?this.overrides.startOfISOWeek(i):Rc(i)},this.startOfMonth=i=>{var a;return(a=this.overrides)!=null&&a.startOfMonth?this.overrides.startOfMonth(i):VV(i)},this.startOfWeek=(i,a)=>{var l;return(l=this.overrides)!=null&&l.startOfWeek?this.overrides.startOfWeek(i,this.options):Il(i,this.options)},this.startOfYear=i=>{var a;return(a=this.overrides)!=null&&a.startOfYear?this.overrides.startOfYear(i):$x(i)},this.options={locale:w_,...e},this.overrides=n}getDigitMap(){const{numerals:e="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:e}),i={};for(let a=0;a<10;a++)i[a.toString()]=n.format(a);return i}replaceDigits(e){const n=this.getDigitMap();return e.replace(/\d/g,i=>n[i]||i)}formatNumber(e){return this.replaceDigits(e.toString())}}const di=new as;class Xx{constructor(e,n,i=di){this.date=e,this.displayMonth=n,this.outside=!!(n&&!i.isSameMonth(e,n)),this.dateLib=i}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class Y6{constructor(e,n){this.date=e,this.weeks=n}}class W6{constructor(e,n){this.days=n,this.weekNumber=e}}function Q6(t){return me.createElement("button",{...t})}function K6(t){return me.createElement("span",{...t})}function X6(t){const{size:e=24,orientation:n="left",className:i}=t;return me.createElement("svg",{className:i,width:e,height:e,viewBox:"0 0 24 24"},n==="up"&&me.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&me.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&me.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&me.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Z6(t){const{day:e,modifiers:n,...i}=t;return me.createElement("td",{...i})}function J6(t){const{day:e,modifiers:n,...i}=t,a=me.useRef(null);return me.useEffect(()=>{var l;n.focused&&((l=a.current)==null||l.focus())},[n.focused]),me.createElement("button",{ref:a,...i})}var Te;(function(t){t.Root="root",t.Chevron="chevron",t.Day="day",t.DayButton="day_button",t.CaptionLabel="caption_label",t.Dropdowns="dropdowns",t.Dropdown="dropdown",t.DropdownRoot="dropdown_root",t.Footer="footer",t.MonthGrid="month_grid",t.MonthCaption="month_caption",t.MonthsDropdown="months_dropdown",t.Month="month",t.Months="months",t.Nav="nav",t.NextMonthButton="button_next",t.PreviousMonthButton="button_previous",t.Week="week",t.Weeks="weeks",t.Weekday="weekday",t.Weekdays="weekdays",t.WeekNumber="week_number",t.WeekNumberHeader="week_number_header",t.YearsDropdown="years_dropdown"})(Te||(Te={}));var xt;(function(t){t.disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today"})(xt||(xt={}));var Ar;(function(t){t.range_end="range_end",t.range_middle="range_middle",t.range_start="range_start",t.selected="selected"})(Ar||(Ar={}));var er;(function(t){t.weeks_before_enter="weeks_before_enter",t.weeks_before_exit="weeks_before_exit",t.weeks_after_enter="weeks_after_enter",t.weeks_after_exit="weeks_after_exit",t.caption_after_enter="caption_after_enter",t.caption_after_exit="caption_after_exit",t.caption_before_enter="caption_before_enter",t.caption_before_exit="caption_before_exit"})(er||(er={}));function ej(t){const{options:e,className:n,components:i,classNames:a,...l}=t,c=[a[Te.Dropdown],n].join(" "),d=e==null?void 0:e.find(({value:p})=>p===l.value);return me.createElement("span",{"data-disabled":l.disabled,className:a[Te.DropdownRoot]},me.createElement(i.Select,{className:c,...l},e==null?void 0:e.map(({value:p,label:g,disabled:v})=>me.createElement(i.Option,{key:p,value:p,disabled:v},g))),me.createElement("span",{className:a[Te.CaptionLabel],"aria-hidden":!0},d==null?void 0:d.label,me.createElement(i.Chevron,{orientation:"down",size:18,className:a[Te.Chevron]})))}function tj(t){return me.createElement("div",{...t})}function nj(t){return me.createElement("div",{...t})}function rj(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i},t.children)}function ij(t){const{calendarMonth:e,displayIndex:n,...i}=t;return me.createElement("div",{...i})}function sj(t){return me.createElement("table",{...t})}function aj(t){return me.createElement("div",{...t})}const Zx=q.createContext(void 0);function Hc(){const t=q.useContext(Zx);if(t===void 0)throw new Error("useDayPicker() must be used within a custom component.");return t}function oj(t){const{components:e}=Hc();return me.createElement(e.Dropdown,{...t})}function lj(t){const{onPreviousClick:e,onNextClick:n,previousMonth:i,nextMonth:a,...l}=t,{components:c,classNames:d,labels:{labelPrevious:p,labelNext:g}}=Hc(),v=q.useCallback(T=>{a&&(n==null||n(T))},[a,n]),b=q.useCallback(T=>{i&&(e==null||e(T))},[i,e]);return me.createElement("nav",{...l},me.createElement(c.PreviousMonthButton,{type:"button",className:d[Te.PreviousMonthButton],tabIndex:i?void 0:-1,"aria-disabled":i?void 0:!0,"aria-label":p(i),onClick:b},me.createElement(c.Chevron,{disabled:i?void 0:!0,className:d[Te.Chevron],orientation:"left"})),me.createElement(c.NextMonthButton,{type:"button",className:d[Te.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:v},me.createElement(c.Chevron,{disabled:a?void 0:!0,orientation:"right",className:d[Te.Chevron]})))}function uj(t){const{components:e}=Hc();return me.createElement(e.Button,{...t})}function cj(t){return me.createElement("option",{...t})}function hj(t){const{components:e}=Hc();return me.createElement(e.Button,{...t})}function fj(t){const{rootRef:e,...n}=t;return me.createElement("div",{...n,ref:e})}function dj(t){return me.createElement("select",{...t})}function pj(t){const{week:e,...n}=t;return me.createElement("tr",{...n})}function mj(t){return me.createElement("th",{...t})}function gj(t){return me.createElement("thead",{"aria-hidden":!0},me.createElement("tr",{...t}))}function yj(t){const{week:e,...n}=t;return me.createElement("th",{...n})}function _j(t){return me.createElement("th",{...t})}function vj(t){return me.createElement("tbody",{...t})}function Ej(t){const{components:e}=Hc();return me.createElement(e.Dropdown,{...t})}const bj=Object.freeze(Object.defineProperty({__proto__:null,Button:Q6,CaptionLabel:K6,Chevron:X6,Day:Z6,DayButton:J6,Dropdown:ej,DropdownNav:tj,Footer:nj,Month:rj,MonthCaption:ij,MonthGrid:sj,Months:aj,MonthsDropdown:oj,Nav:lj,NextMonthButton:uj,Option:cj,PreviousMonthButton:hj,Root:fj,Select:dj,Week:pj,WeekNumber:yj,WeekNumberHeader:_j,Weekday:mj,Weekdays:gj,Weeks:vj,YearsDropdown:Ej},Symbol.toStringTag,{value:"Module"}));function Wi(t,e,n=!1,i=di){let{from:a,to:l}=t;const{differenceInCalendarDays:c,isSameDay:d}=i;return a&&l?(c(l,a)<0&&([a,l]=[l,a]),c(e,a)>=(n?1:0)&&c(l,e)>=(n?1:0)):!n&&l?d(l,e):!n&&a?d(a,e):!1}function Jx(t){return!!(t&&typeof t=="object"&&"before"in t&&"after"in t)}function T_(t){return!!(t&&typeof t=="object"&&"from"in t)}function eA(t){return!!(t&&typeof t=="object"&&"after"in t)}function tA(t){return!!(t&&typeof t=="object"&&"before"in t)}function nA(t){return!!(t&&typeof t=="object"&&"dayOfWeek"in t)}function rA(t,e){return Array.isArray(t)&&t.every(e.isDate)}function Qi(t,e,n=di){const i=Array.isArray(e)?e:[e],{isSameDay:a,differenceInCalendarDays:l,isAfter:c}=n;return i.some(d=>{if(typeof d=="boolean")return d;if(n.isDate(d))return a(t,d);if(rA(d,n))return d.includes(t);if(T_(d))return Wi(d,t,!1,n);if(nA(d))return Array.isArray(d.dayOfWeek)?d.dayOfWeek.includes(t.getDay()):d.dayOfWeek===t.getDay();if(Jx(d)){const p=l(d.before,t),g=l(d.after,t),v=p>0,b=g<0;return c(d.before,d.after)?b&&v:v||b}return eA(d)?l(t,d.after)>0:tA(d)?l(d.before,t)>0:typeof d=="function"?d(t):!1})}function wj(t,e,n,i,a){const{disabled:l,hidden:c,modifiers:d,showOutsideDays:p,broadcastCalendar:g,today:v}=e,{isSameDay:b,isSameMonth:T,startOfMonth:C,isBefore:N,endOfMonth:F,isAfter:M}=a,P=n&&C(n),j=i&&F(i),O={[xt.focused]:[],[xt.outside]:[],[xt.disabled]:[],[xt.hidden]:[],[xt.today]:[]},te={};for(const z of t){const{date:re,displayMonth:R}=z,A=!!(R&&!T(re,R)),I=!!(P&&N(re,P)),U=!!(j&&M(re,j)),k=!!(l&&Qi(re,l,a)),B=!!(c&&Qi(re,c,a))||I||U||!g&&!p&&A||g&&p===!1&&A,D=b(re,v??a.today());A&&O.outside.push(z),k&&O.disabled.push(z),B&&O.hidden.push(z),D&&O.today.push(z),d&&Object.keys(d).forEach(Me=>{const ce=d==null?void 0:d[Me];ce&&Qi(re,ce,a)&&(te[Me]?te[Me].push(z):te[Me]=[z])})}return z=>{const re={[xt.focused]:!1,[xt.disabled]:!1,[xt.hidden]:!1,[xt.outside]:!1,[xt.today]:!1},R={};for(const A in O){const I=O[A];re[A]=I.some(U=>U===z)}for(const A in te)R[A]=te[A].some(I=>I===z);return{...re,...R}}}function Tj(t,e,n={}){return Object.entries(t).filter(([,a])=>a===!0).reduce((a,[l])=>(n[l]?a.push(n[l]):e[xt[l]]?a.push(e[xt[l]]):e[Ar[l]]&&a.push(e[Ar[l]]),a),[e[Te.Day]])}function Sj(t){return{...bj,...t}}function xj(t){const e={"data-mode":t.mode??void 0,"data-required":"required"in t?t.required:void 0,"data-multiple-months":t.numberOfMonths&&t.numberOfMonths>1||void 0,"data-week-numbers":t.showWeekNumber||void 0,"data-broadcast-calendar":t.broadcastCalendar||void 0,"data-nav-layout":t.navLayout||void 0};return Object.entries(t).forEach(([n,i])=>{n.startsWith("data-")&&(e[n]=i)}),e}function Aj(){const t={};for(const e in Te)t[Te[e]]=`rdp-${Te[e]}`;for(const e in xt)t[xt[e]]=`rdp-${xt[e]}`;for(const e in Ar)t[Ar[e]]=`rdp-${Ar[e]}`;for(const e in er)t[er[e]]=`rdp-${er[e]}`;return t}function iA(t,e,n){return(n??new as(e)).format(t,"LLLL y")}const Rj=iA;function Cj(t,e,n){return(n??new as(e)).format(t,"d")}function Ij(t,e=di){return e.format(t,"LLLL")}function Dj(t,e,n){return(n??new as(e)).format(t,"cccccc")}function kj(t,e=di){return t<10?e.formatNumber(`0${t.toLocaleString()}`):e.formatNumber(`${t.toLocaleString()}`)}function Oj(){return""}function sA(t,e=di){return e.format(t,"yyyy")}const Mj=sA,Nj=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:iA,formatDay:Cj,formatMonthCaption:Rj,formatMonthDropdown:Ij,formatWeekNumber:kj,formatWeekNumberHeader:Oj,formatWeekdayName:Dj,formatYearCaption:Mj,formatYearDropdown:sA},Symbol.toStringTag,{value:"Module"}));function Pj(t){return t!=null&&t.formatMonthCaption&&!t.formatCaption&&(t.formatCaption=t.formatMonthCaption),t!=null&&t.formatYearCaption&&!t.formatYearDropdown&&(t.formatYearDropdown=t.formatYearCaption),{...Nj,...t}}function Vj(t,e,n,i,a){const{startOfMonth:l,startOfYear:c,endOfYear:d,eachMonthOfInterval:p,getMonth:g}=a;return p({start:c(t),end:d(t)}).map(T=>{const C=i.formatMonthDropdown(T,a),N=g(T),F=e&&T<l(e)||n&&T>l(n)||!1;return{value:N,label:C,disabled:F}})}function jj(t,e={},n={}){let i={...e==null?void 0:e[Te.Day]};return Object.entries(t).filter(([,a])=>a===!0).forEach(([a])=>{i={...i,...n==null?void 0:n[a]}}),i}function Lj(t,e,n){const i=t.today(),a=e?t.startOfISOWeek(i):t.startOfWeek(i),l=[];for(let c=0;c<7;c++){const d=t.addDays(a,c);l.push(d)}return l}function Uj(t,e,n,i,a=!1){if(!t||!e)return;const{startOfYear:l,endOfYear:c,addYears:d,getYear:p,isBefore:g,isSameYear:v}=i,b=l(t),T=c(e),C=[];let N=b;for(;g(N,T)||v(N,T);)C.push(N),N=d(N,1);return a&&C.reverse(),C.map(F=>{const M=n.formatYearDropdown(F,i);return{value:p(F),label:M,disabled:!1}})}function aA(t,e,n,i){let a=(i??new as(n)).format(t,"PPPP");return e.today&&(a=`Today, ${a}`),e.selected&&(a=`${a}, selected`),a}const qj=aA;function oA(t,e,n){return(n??new as(e)).format(t,"LLLL y")}const Bj=oA;function zj(t,e,n,i){let a=(i??new as(n)).format(t,"PPPP");return e!=null&&e.today&&(a=`Today, ${a}`),a}function Fj(t){return"Choose the Month"}function $j(){return""}function Hj(t){return"Go to the Next Month"}function Gj(t){return"Go to the Previous Month"}function Yj(t,e,n){return(n??new as(e)).format(t,"cccc")}function Wj(t,e){return`Week ${t}`}function Qj(t){return"Week Number"}function Kj(t){return"Choose the Year"}const Xj=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Bj,labelDay:qj,labelDayButton:aA,labelGrid:oA,labelGridcell:zj,labelMonthDropdown:Fj,labelNav:$j,labelNext:Hj,labelPrevious:Gj,labelWeekNumber:Wj,labelWeekNumberHeader:Qj,labelWeekday:Yj,labelYearDropdown:Kj},Symbol.toStringTag,{value:"Module"})),Gc=t=>t instanceof HTMLElement?t:null,vg=t=>[...t.querySelectorAll("[data-animated-month]")??[]],Zj=t=>Gc(t.querySelector("[data-animated-month]")),Eg=t=>Gc(t.querySelector("[data-animated-caption]")),bg=t=>Gc(t.querySelector("[data-animated-weeks]")),Jj=t=>Gc(t.querySelector("[data-animated-nav]")),eL=t=>Gc(t.querySelector("[data-animated-weekdays]"));function tL(t,e,{classNames:n,months:i,focused:a,dateLib:l}){const c=q.useRef(null),d=q.useRef(i),p=q.useRef(!1);q.useLayoutEffect(()=>{const g=d.current;if(d.current=i,!e||!t.current||!(t.current instanceof HTMLElement)||i.length===0||g.length===0||i.length!==g.length)return;const v=l.isSameMonth(i[0].date,g[0].date),b=l.isAfter(i[0].date,g[0].date),T=b?n[er.caption_after_enter]:n[er.caption_before_enter],C=b?n[er.weeks_after_enter]:n[er.weeks_before_enter],N=c.current,F=t.current.cloneNode(!0);if(F instanceof HTMLElement?(vg(F).forEach(O=>{if(!(O instanceof HTMLElement))return;const te=Zj(O);te&&O.contains(te)&&O.removeChild(te);const z=Eg(O);z&&z.classList.remove(T);const re=bg(O);re&&re.classList.remove(C)}),c.current=F):c.current=null,p.current||v||a)return;const M=N instanceof HTMLElement?vg(N):[],P=vg(t.current);if(P!=null&&P.every(j=>j instanceof HTMLElement)&&M&&M.every(j=>j instanceof HTMLElement)){p.current=!0,t.current.style.isolation="isolate";const j=Jj(t.current);j&&(j.style.zIndex="1"),P.forEach((O,te)=>{const z=M[te];if(!z)return;O.style.position="relative",O.style.overflow="hidden";const re=Eg(O);re&&re.classList.add(T);const R=bg(O);R&&R.classList.add(C);const A=()=>{p.current=!1,t.current&&(t.current.style.isolation=""),j&&(j.style.zIndex=""),re&&re.classList.remove(T),R&&R.classList.remove(C),O.style.position="",O.style.overflow="",O.contains(z)&&O.removeChild(z)};z.style.pointerEvents="none",z.style.position="absolute",z.style.overflow="hidden",z.setAttribute("aria-hidden","true");const I=eL(z);I&&(I.style.opacity="0");const U=Eg(z);U&&(U.classList.add(b?n[er.caption_before_exit]:n[er.caption_after_exit]),U.addEventListener("animationend",A));const k=bg(z);k&&k.classList.add(b?n[er.weeks_before_exit]:n[er.weeks_after_exit]),O.insertBefore(z,O.firstChild)})}})}function nL(t,e,n,i){const a=t[0],l=t[t.length-1],{ISOWeek:c,fixedWeeks:d,broadcastCalendar:p}=n??{},{addDays:g,differenceInCalendarDays:v,differenceInCalendarMonths:b,endOfBroadcastWeek:T,endOfISOWeek:C,endOfMonth:N,endOfWeek:F,isAfter:M,startOfBroadcastWeek:P,startOfISOWeek:j,startOfWeek:O}=i,te=p?P(a,i):c?j(a):O(a),z=p?T(l):c?C(N(l)):F(N(l)),re=v(z,te),R=b(l,a)+1,A=[];for(let k=0;k<=re;k++){const B=g(te,k);if(e&&M(B,e))break;A.push(B)}const U=(p?35:42)*R;if(d&&A.length<U){const k=U-A.length;for(let B=0;B<k;B++){const D=g(A[A.length-1],1);A.push(D)}}return A}function rL(t){const e=[];return t.reduce((n,i)=>{const a=i.weeks.reduce((l,c)=>l.concat(c.days.slice()),e.slice());return n.concat(a.slice())},e.slice())}function iL(t,e,n,i){const{numberOfMonths:a=1}=n,l=[];for(let c=0;c<a;c++){const d=i.addMonths(t,c);if(e&&d>e)break;l.push(d)}return l}function Zw(t,e,n,i){const{month:a,defaultMonth:l,today:c=i.today(),numberOfMonths:d=1}=t;let p=a||l||c;const{differenceInCalendarMonths:g,addMonths:v,startOfMonth:b}=i;if(n&&g(n,p)<d-1){const T=-1*(d-1);p=v(n,T)}return e&&g(p,e)<0&&(p=e),b(p)}function sL(t,e,n,i){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:c,endOfMonth:d,endOfWeek:p,getISOWeek:g,getWeek:v,startOfBroadcastWeek:b,startOfISOWeek:T,startOfWeek:C}=i,N=t.reduce((F,M)=>{const P=n.broadcastCalendar?b(M,i):n.ISOWeek?T(M):C(M),j=n.broadcastCalendar?l(M):n.ISOWeek?c(d(M)):p(d(M)),O=e.filter(R=>R>=P&&R<=j),te=n.broadcastCalendar?35:42;if(n.fixedWeeks&&O.length<te){const R=e.filter(A=>{const I=te-O.length;return A>j&&A<=a(j,I)});O.push(...R)}const z=O.reduce((R,A)=>{const I=n.ISOWeek?g(A):v(A),U=R.find(B=>B.weekNumber===I),k=new Xx(A,M,i);return U?U.days.push(k):R.push(new W6(I,[k])),R},[]),re=new Y6(M,z);return F.push(re),F},[]);return n.reverseMonths?N.reverse():N}function aL(t,e){let{startMonth:n,endMonth:i}=t;const{startOfYear:a,startOfDay:l,startOfMonth:c,endOfMonth:d,addYears:p,endOfYear:g,newDate:v,today:b}=e,{fromYear:T,toYear:C,fromMonth:N,toMonth:F}=t;!n&&N&&(n=N),!n&&T&&(n=e.newDate(T,0,1)),!i&&F&&(i=F),!i&&C&&(i=v(C,11,31));const M=t.captionLayout==="dropdown"||t.captionLayout==="dropdown-years";return n?n=c(n):T?n=v(T,0,1):!n&&M&&(n=a(p(t.today??b(),-100))),i?i=d(i):C?i=v(C,11,31):!i&&M&&(i=g(t.today??b())),[n&&l(n),i&&l(i)]}function oL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l:1,v=c(t);if(!e)return d(v,g);if(!(p(e,t)<l))return d(v,g)}function lL(t,e,n,i){if(n.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=n,{startOfMonth:c,addMonths:d,differenceInCalendarMonths:p}=i,g=a?l??1:1,v=c(t);if(!e)return d(v,-g);if(!(p(v,e)<=0))return d(v,-g)}function uL(t){const e=[];return t.reduce((n,i)=>n.concat(i.weeks.slice()),e.slice())}function Qd(t,e){const[n,i]=q.useState(t);return[e===void 0?n:e,i]}function cL(t,e){const[n,i]=aL(t,e),{startOfMonth:a,endOfMonth:l}=e,c=Zw(t,n,i,e),[d,p]=Qd(c,t.month?c:void 0);q.useEffect(()=>{const re=Zw(t,n,i,e);p(re)},[t.timeZone]);const g=iL(d,i,t,e),v=nL(g,t.endMonth?l(t.endMonth):void 0,t,e),b=sL(g,v,t,e),T=uL(b),C=rL(b),N=lL(d,n,t,e),F=oL(d,i,t,e),{disableNavigation:M,onMonthChange:P}=t,j=re=>T.some(R=>R.days.some(A=>A.isEqualTo(re))),O=re=>{if(M)return;let R=a(re);n&&R<a(n)&&(R=a(n)),i&&R>a(i)&&(R=a(i)),p(R),P==null||P(R)};return{months:b,weeks:T,days:C,navStart:n,navEnd:i,previousMonth:N,nextMonth:F,goToMonth:O,goToDay:re=>{j(re)||O(re.date)}}}var ei;(function(t){t[t.Today=0]="Today",t[t.Selected=1]="Selected",t[t.LastFocused=2]="LastFocused",t[t.FocusedModifier=3]="FocusedModifier"})(ei||(ei={}));function Jw(t){return!t[xt.disabled]&&!t[xt.hidden]&&!t[xt.outside]}function hL(t,e,n,i){let a,l=-1;for(const c of t){const d=e(c);Jw(d)&&(d[xt.focused]&&l<ei.FocusedModifier?(a=c,l=ei.FocusedModifier):i!=null&&i.isEqualTo(c)&&l<ei.LastFocused?(a=c,l=ei.LastFocused):n(c.date)&&l<ei.Selected?(a=c,l=ei.Selected):d[xt.today]&&l<ei.Today&&(a=c,l=ei.Today))}return a||(a=t.find(c=>Jw(e(c)))),a}function fL(t,e,n,i,a,l,c){const{ISOWeek:d,broadcastCalendar:p}=l,{addDays:g,addMonths:v,addWeeks:b,addYears:T,endOfBroadcastWeek:C,endOfISOWeek:N,endOfWeek:F,max:M,min:P,startOfBroadcastWeek:j,startOfISOWeek:O,startOfWeek:te}=c;let re={day:g,week:b,month:v,year:T,startOfWeek:R=>p?j(R,c):d?O(R):te(R),endOfWeek:R=>p?C(R):d?N(R):F(R)}[t](n,e==="after"?1:-1);return e==="before"&&i?re=M([i,re]):e==="after"&&a&&(re=P([a,re])),re}function lA(t,e,n,i,a,l,c,d=0){if(d>365)return;const p=fL(t,e,n.date,i,a,l,c),g=!!(l.disabled&&Qi(p,l.disabled,c)),v=!!(l.hidden&&Qi(p,l.hidden,c)),b=p,T=new Xx(p,b,c);return!g&&!v?T:lA(t,e,T,i,a,l,c,d+1)}function dL(t,e,n,i,a){const{autoFocus:l}=t,[c,d]=q.useState(),p=hL(e.days,n,i||(()=>!1),c),[g,v]=q.useState(l?p:void 0);return{isFocusTarget:F=>!!(p!=null&&p.isEqualTo(F)),setFocused:v,focused:g,blur:()=>{d(g),v(void 0)},moveFocus:(F,M)=>{if(!g)return;const P=lA(F,M,g,e.navStart,e.navEnd,t,a);P&&(e.goToDay(P),v(P))}}}function pL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Qd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e,g=C=>(d==null?void 0:d.some(N=>p(N,C)))??!1,{min:v,max:b}=t;return{selected:d,select:(C,N,F)=>{let M=[...d??[]];if(g(C)){if((d==null?void 0:d.length)===v||i&&(d==null?void 0:d.length)===1)return;M=d==null?void 0:d.filter(P=>!p(P,C))}else(d==null?void 0:d.length)===b?M=[C]:M=[...M,C];return a||c(M),a==null||a(M,C,N,F),M},isSelected:g}}function mL(t,e,n=0,i=0,a=!1,l=di){const{from:c,to:d}=e||{},{isSameDay:p,isAfter:g,isBefore:v}=l;let b;if(!c&&!d)b={from:t,to:n>0?void 0:t};else if(c&&!d)p(c,t)?n===0?b={from:c,to:t}:a?b={from:c,to:void 0}:b=void 0:v(t,c)?b={from:t,to:c}:b={from:c,to:t};else if(c&&d)if(p(c,t)&&p(d,t))a?b={from:c,to:d}:b=void 0;else if(p(c,t))b={from:c,to:n>0?void 0:t};else if(p(d,t))b={from:t,to:n>0?void 0:t};else if(v(t,c))b={from:t,to:d};else if(g(t,c))b={from:c,to:t};else if(g(t,d))b={from:c,to:t};else throw new Error("Invalid range");if(b!=null&&b.from&&(b!=null&&b.to)){const T=l.differenceInCalendarDays(b.to,b.from);i>0&&T>i?b={from:t,to:void 0}:n>1&&T<n&&(b={from:t,to:void 0})}return b}function gL(t,e,n=di){const i=Array.isArray(e)?e:[e];let a=t.from;const l=n.differenceInCalendarDays(t.to,t.from),c=Math.min(l,6);for(let d=0;d<=c;d++){if(i.includes(a.getDay()))return!0;a=n.addDays(a,1)}return!1}function eT(t,e,n=di){return Wi(t,e.from,!1,n)||Wi(t,e.to,!1,n)||Wi(e,t.from,!1,n)||Wi(e,t.to,!1,n)}function yL(t,e,n=di){const i=Array.isArray(e)?e:[e];if(i.filter(d=>typeof d!="function").some(d=>typeof d=="boolean"?d:n.isDate(d)?Wi(t,d,!1,n):rA(d,n)?d.some(p=>Wi(t,p,!1,n)):T_(d)?d.from&&d.to?eT(t,{from:d.from,to:d.to},n):!1:nA(d)?gL(t,d.dayOfWeek,n):Jx(d)?n.isAfter(d.before,d.after)?eT(t,{from:n.addDays(d.after,1),to:n.addDays(d.before,-1)},n):Qi(t.from,d,n)||Qi(t.to,d,n):eA(d)||tA(d)?Qi(t.from,d,n)||Qi(t.to,d,n):!1))return!0;const c=i.filter(d=>typeof d=="function");if(c.length){let d=t.from;const p=n.differenceInCalendarDays(t.to,t.from);for(let g=0;g<=p;g++){if(c.some(v=>v(d)))return!0;d=n.addDays(d,1)}}return!1}function _L(t,e){const{disabled:n,excludeDisabled:i,selected:a,required:l,onSelect:c}=t,[d,p]=Qd(a,c?a:void 0),g=c?a:d;return{selected:g,select:(T,C,N)=>{const{min:F,max:M}=t,P=T?mL(T,g,F,M,l,e):void 0;return i&&n&&(P!=null&&P.from)&&P.to&&yL({from:P.from,to:P.to},n,e)&&(P.from=T,P.to=void 0),c||p(P),c==null||c(P,T,C,N),P},isSelected:T=>g&&Wi(g,T,!1,e)}}function vL(t,e){const{selected:n,required:i,onSelect:a}=t,[l,c]=Qd(n,a?n:void 0),d=a?n:l,{isSameDay:p}=e;return{selected:d,select:(b,T,C)=>{let N=b;return!i&&d&&d&&p(b,d)&&(N=void 0),a||c(N),a==null||a(N,b,T,C),N},isSelected:b=>d?p(d,b):!1}}function EL(t,e){const n=vL(t,e),i=pL(t,e),a=_L(t,e);switch(t.mode){case"single":return n;case"multiple":return i;case"range":return a;default:return}}function bL(t){var ls;let e=t;e.timeZone&&(e={...t},e.today&&(e.today=new Rn(e.today,e.timeZone)),e.month&&(e.month=new Rn(e.month,e.timeZone)),e.defaultMonth&&(e.defaultMonth=new Rn(e.defaultMonth,e.timeZone)),e.startMonth&&(e.startMonth=new Rn(e.startMonth,e.timeZone)),e.endMonth&&(e.endMonth=new Rn(e.endMonth,e.timeZone)),e.mode==="single"&&e.selected?e.selected=new Rn(e.selected,e.timeZone):e.mode==="multiple"&&e.selected?e.selected=(ls=e.selected)==null?void 0:ls.map(Ne=>new Rn(Ne,e.timeZone)):e.mode==="range"&&e.selected&&(e.selected={from:e.selected.from?new Rn(e.selected.from,e.timeZone):void 0,to:e.selected.to?new Rn(e.selected.to,e.timeZone):void 0}));const{components:n,formatters:i,labels:a,dateLib:l,locale:c,classNames:d}=q.useMemo(()=>{const Ne={...w_,...e.locale};return{dateLib:new as({locale:Ne,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Sj(e.components),formatters:Pj(e.formatters),labels:{...Xj,...e.labels},locale:Ne,classNames:{...Aj(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:p,mode:g,navLayout:v,numberOfMonths:b=1,onDayBlur:T,onDayClick:C,onDayFocus:N,onDayKeyDown:F,onDayMouseEnter:M,onDayMouseLeave:P,onNextClick:j,onPrevClick:O,showWeekNumber:te,styles:z}=e,{formatCaption:re,formatDay:R,formatMonthDropdown:A,formatWeekNumber:I,formatWeekNumberHeader:U,formatWeekdayName:k,formatYearDropdown:B}=i,D=cL(e,l),{days:Me,months:ce,navStart:Y,navEnd:se,previousMonth:fe,nextMonth:Ee,goToMonth:L}=D,ae=wj(Me,e,Y,se,l),{isSelected:J,select:ie,selected:de}=EL(e,l)??{},{blur:_e,focused:ge,isFocusTarget:it,moveFocus:Le,setFocused:yt}=dL(e,D,ae,J??(()=>!1),l),{labelDayButton:Vn,labelGridcell:bn,labelGrid:Xt,labelMonthDropdown:pi,labelNav:Nr,labelPrevious:ha,labelNext:ho,labelWeekday:jn,labelWeekNumber:Fl,labelWeekNumberHeader:fa,labelYearDropdown:os}=a,mi=q.useMemo(()=>Lj(l,e.ISOWeek),[l,e.ISOWeek]),fo=g!==void 0||C!==void 0,Pr=q.useCallback(()=>{fe&&(L(fe),O==null||O(fe))},[fe,L,O]),gi=q.useCallback(()=>{Ee&&(L(Ee),j==null||j(Ee))},[L,Ee,j]),po=q.useCallback((Ne,et)=>Re=>{Re.preventDefault(),Re.stopPropagation(),yt(Ne),ie==null||ie(Ne.date,et,Re),C==null||C(Ne.date,et,Re)},[ie,C,yt]),vt=q.useCallback((Ne,et)=>Re=>{yt(Ne),N==null||N(Ne.date,et,Re)},[N,yt]),Ze=q.useCallback((Ne,et)=>Re=>{_e(),T==null||T(Ne.date,et,Re)},[_e,T]),kn=q.useCallback((Ne,et)=>Re=>{const Ke={ArrowLeft:[Re.shiftKey?"month":"day",e.dir==="rtl"?"after":"before"],ArrowRight:[Re.shiftKey?"month":"day",e.dir==="rtl"?"before":"after"],ArrowDown:[Re.shiftKey?"year":"week","after"],ArrowUp:[Re.shiftKey?"year":"week","before"],PageUp:[Re.shiftKey?"year":"month","before"],PageDown:[Re.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Ke[Re.key]){Re.preventDefault(),Re.stopPropagation();const[Jt,Pe]=Ke[Re.key];Le(Jt,Pe)}F==null||F(Ne.date,et,Re)},[Le,F,e.dir]),Zt=q.useCallback((Ne,et)=>Re=>{M==null||M(Ne.date,et,Re)},[M]),mo=q.useCallback((Ne,et)=>Re=>{P==null||P(Ne.date,et,Re)},[P]),$l=q.useCallback(Ne=>et=>{const Re=Number(et.target.value),Ke=l.setMonth(l.startOfMonth(Ne),Re);L(Ke)},[l,L]),yi=q.useCallback(Ne=>et=>{const Re=Number(et.target.value),Ke=l.setYear(l.startOfMonth(Ne),Re);L(Ke)},[l,L]),{className:_i,style:vi}=q.useMemo(()=>({className:[d[Te.Root],e.className].filter(Boolean).join(" "),style:{...z==null?void 0:z[Te.Root],...e.style}}),[d,e.className,e.style,z]),Fn=xj(e),Ei=q.useRef(null);tL(Ei,!!e.animate,{classNames:d,months:ce,focused:ge,dateLib:l});const bi={dayPickerProps:e,selected:de,select:ie,isSelected:J,months:ce,nextMonth:Ee,previousMonth:fe,goToMonth:L,getModifiers:ae,components:n,classNames:d,styles:z,labels:a,formatters:i};return me.createElement(Zx.Provider,{value:bi},me.createElement(n.Root,{rootRef:e.animate?Ei:void 0,className:_i,style:vi,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Fn},me.createElement(n.Months,{className:d[Te.Months],style:z==null?void 0:z[Te.Months]},!e.hideNavigation&&!v&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Te.Nav],style:z==null?void 0:z[Te.Nav],"aria-label":Nr(),onPreviousClick:Pr,onNextClick:gi,previousMonth:fe,nextMonth:Ee}),ce.map((Ne,et)=>me.createElement(n.Month,{"data-animated-month":e.animate?"true":void 0,className:d[Te.Month],style:z==null?void 0:z[Te.Month],key:et,displayIndex:et,calendarMonth:Ne},v==="around"&&!e.hideNavigation&&et===0&&me.createElement(n.PreviousMonthButton,{type:"button",className:d[Te.PreviousMonthButton],tabIndex:fe?void 0:-1,"aria-disabled":fe?void 0:!0,"aria-label":ha(fe),onClick:Pr,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:fe?void 0:!0,className:d[Te.Chevron],orientation:e.dir==="rtl"?"right":"left"})),me.createElement(n.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:d[Te.MonthCaption],style:z==null?void 0:z[Te.MonthCaption],calendarMonth:Ne,displayIndex:et},p!=null&&p.startsWith("dropdown")?me.createElement(n.DropdownNav,{className:d[Te.Dropdowns],style:z==null?void 0:z[Te.Dropdowns]},p==="dropdown"||p==="dropdown-months"?me.createElement(n.MonthsDropdown,{className:d[Te.MonthsDropdown],"aria-label":pi(),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:$l(Ne.date),options:Vj(Ne.date,Y,se,i,l),style:z==null?void 0:z[Te.Dropdown],value:l.getMonth(Ne.date)}):me.createElement("span",null,A(Ne.date,l)),p==="dropdown"||p==="dropdown-years"?me.createElement(n.YearsDropdown,{className:d[Te.YearsDropdown],"aria-label":os(l.options),classNames:d,components:n,disabled:!!e.disableNavigation,onChange:yi(Ne.date),options:Uj(Y,se,i,l,!!e.reverseYears),style:z==null?void 0:z[Te.Dropdown],value:l.getYear(Ne.date)}):me.createElement("span",null,B(Ne.date,l)),me.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},re(Ne.date,l.options,l))):me.createElement(n.CaptionLabel,{className:d[Te.CaptionLabel],role:"status","aria-live":"polite"},re(Ne.date,l.options,l))),v==="around"&&!e.hideNavigation&&et===b-1&&me.createElement(n.NextMonthButton,{type:"button",className:d[Te.NextMonthButton],tabIndex:Ee?void 0:-1,"aria-disabled":Ee?void 0:!0,"aria-label":ho(Ee),onClick:gi,"data-animated-button":e.animate?"true":void 0},me.createElement(n.Chevron,{disabled:Ee?void 0:!0,className:d[Te.Chevron],orientation:e.dir==="rtl"?"left":"right"})),et===b-1&&v==="after"&&!e.hideNavigation&&me.createElement(n.Nav,{"data-animated-nav":e.animate?"true":void 0,className:d[Te.Nav],style:z==null?void 0:z[Te.Nav],"aria-label":Nr(),onPreviousClick:Pr,onNextClick:gi,previousMonth:fe,nextMonth:Ee}),me.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Xt(Ne.date,l.options,l)||void 0,className:d[Te.MonthGrid],style:z==null?void 0:z[Te.MonthGrid]},!e.hideWeekdays&&me.createElement(n.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:d[Te.Weekdays],style:z==null?void 0:z[Te.Weekdays]},te&&me.createElement(n.WeekNumberHeader,{"aria-label":fa(l.options),className:d[Te.WeekNumberHeader],style:z==null?void 0:z[Te.WeekNumberHeader],scope:"col"},U()),mi.map(Re=>me.createElement(n.Weekday,{"aria-label":jn(Re,l.options,l),className:d[Te.Weekday],key:String(Re),style:z==null?void 0:z[Te.Weekday],scope:"col"},k(Re,l.options,l)))),me.createElement(n.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:d[Te.Weeks],style:z==null?void 0:z[Te.Weeks]},Ne.weeks.map(Re=>me.createElement(n.Week,{className:d[Te.Week],key:Re.weekNumber,style:z==null?void 0:z[Te.Week],week:Re},te&&me.createElement(n.WeekNumber,{week:Re,style:z==null?void 0:z[Te.WeekNumber],"aria-label":Fl(Re.weekNumber,{locale:c}),className:d[Te.WeekNumber],scope:"row",role:"rowheader"},I(Re.weekNumber,l)),Re.days.map(Ke=>{const{date:Jt}=Ke,Pe=ae(Ke);if(Pe[xt.focused]=!Pe.hidden&&!!(ge!=null&&ge.isEqualTo(Ke)),Pe[Ar.selected]=(J==null?void 0:J(Jt))||Pe.selected,T_(de)){const{from:rr,to:cs}=de;Pe[Ar.range_start]=!!(rr&&cs&&l.isSameDay(Jt,rr)),Pe[Ar.range_end]=!!(rr&&cs&&l.isSameDay(Jt,cs)),Pe[Ar.range_middle]=Wi(de,Jt,!0,l)}const da=jj(Pe,z,e.modifiersStyles),Vr=Tj(Pe,d,e.modifiersClassNames),us=!fo&&!Pe.hidden?bn(Jt,Pe,l.options,l):void 0;return me.createElement(n.Day,{key:`${l.format(Jt,"yyyy-MM-dd")}_${l.format(Ke.displayMonth,"yyyy-MM")}`,day:Ke,modifiers:Pe,className:Vr.join(" "),style:da,role:"gridcell","aria-selected":Pe.selected||void 0,"aria-label":us,"data-day":l.format(Jt,"yyyy-MM-dd"),"data-month":Ke.outside?l.format(Jt,"yyyy-MM"):void 0,"data-selected":Pe.selected||void 0,"data-disabled":Pe.disabled||void 0,"data-hidden":Pe.hidden||void 0,"data-outside":Ke.outside||void 0,"data-focused":Pe.focused||void 0,"data-today":Pe.today||void 0},!Pe.hidden&&fo?me.createElement(n.DayButton,{className:d[Te.DayButton],style:z==null?void 0:z[Te.DayButton],type:"button",day:Ke,modifiers:Pe,disabled:Pe.disabled||void 0,tabIndex:it(Ke)?0:-1,"aria-label":Vn(Jt,Pe,l.options,l),onClick:po(Ke,Pe),onBlur:Ze(Ke,Pe),onFocus:vt(Ke,Pe),onKeyDown:kn(Ke,Pe),onMouseEnter:Zt(Ke,Pe),onMouseLeave:mo(Ke,Pe)},R(Jt,l.options,l)):!Pe.hidden&&R(Ke.date,l.options,l))})))))))),e.footer&&me.createElement(n.Footer,{className:d[Te.Footer],style:z==null?void 0:z[Te.Footer],role:"status","aria-live":"polite"},e.footer)))}const wL="./assets/calendar-arrow-BfXL-r2k.png";function TL({value:t,onApply:e,placeholder:n="요청 기간 선택",autoCloseOnComplete:i=!0}){var F;const[a,l]=q.useState({start:(t==null?void 0:t.start)??null,end:(t==null?void 0:t.end)??null}),[c,d]=q.useState(((F=t==null?void 0:t.start)==null?void 0:F.getFullYear())??new Date().getFullYear()),[p,g]=q.useState(!1),v=q.useMemo(()=>{const M=P=>`${P.getFullYear()}.${String(P.getMonth()+1).padStart(2,"0")}.${String(P.getDate()).padStart(2,"0")}`;return a.start&&a.end?`${M(a.start)} ~ ${M(a.end)}`:a.start?`${M(a.start)} ~`:""},[a]),b=new Date().getMonth(),T=q.useRef(null);q.useEffect(()=>{if(p&&T.current){const M=T.current.querySelectorAll(".month-box")[b];M&&M.scrollIntoView({block:"start"})}},[p]);const C=q.useRef(null);q.useEffect(()=>{const M=P=>{C.current&&!C.current.contains(P.target)&&g(!1)};return p&&document.addEventListener("click",M),()=>{document.removeEventListener("click",M)}},[p]),q.useEffect(()=>{const M=O=>O instanceof Date?new Date(O.getFullYear(),O.getMonth(),O.getDate()).getTime():null,P=(t==null?void 0:t.start)??null,j=(t==null?void 0:t.end)??null;(M(a.start)!==M(P)||M(a.end)!==M(j))&&(l({start:P,end:j}),d((P==null?void 0:P.getFullYear())??new Date().getFullYear()))},[t==null?void 0:t.start,t==null?void 0:t.end]);const N=M=>{if(!a.start||a.start&&a.end){l({start:M,end:null});return}if(a.start&&!a.end)if(M<a.start)l({start:M,end:null});else{const P={start:a.start,end:M};l(P),e==null||e(P),i&&g(!1)}};return _.jsxs(SL,{ref:C,children:[_.jsx(PL,{}),_.jsx(xL,{value:v,placeholder:n,readOnly:!0,onClick:()=>g(M=>!M)}),p&&_.jsxs(RL,{children:[_.jsxs(CL,{children:[_.jsx(IL,{dir:"prev",onClick:()=>d(M=>M-1)}),_.jsx("span",{children:c}),_.jsx(DL,{dir:"next",onClick:()=>d(M=>M+1)})]}),_.jsx(kL,{children:["일","월","화","수","목","금","토"].map(M=>_.jsx("span",{children:M},M))}),_.jsx(AL,{children:_.jsx(OL,{ref:T,children:Array.from({length:12}).map((M,P)=>{const j=new Date(c,P,1),O=z=>new Date(z.getFullYear(),z.getMonth(),z.getDate()).getTime(),te=z=>z.getFullYear()===j.getFullYear()&&z.getMonth()===j.getMonth();return _.jsxs(ML,{className:"month-box",children:[_.jsx(NL,{children:String(P+1).padStart(2,"0")}),_.jsx(bL,{mode:"single",month:j,selected:void 0,onDayClick:N,showOutsideDays:!1,modifiers:{start:z=>!!a.start&&te(z)&&O(z)===O(a.start),end:z=>!!a.end&&te(z)&&O(z)===O(a.end),middle:z=>{if(!a.start||!a.end||!te(z))return!1;const re=O(z),R=O(a.start),A=O(a.end);return re>R&&re<A}},modifiersClassNames:{start:"sel-start",end:"sel-end",middle:"sel-mid"}})]},P)})})})]})]})}const SL=H.div`
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
  background-image: url(${wL});
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
`,gl="진행 상태 선택",Ku="요청자 선택",Xu="디자이너 선택",wg={start:null,end:null},VL=t=>t===3?"manager":t===2?"designer":"requester",jL={requester:[gl,"대기","진행중","검수중","완료","취소"],manager:[gl,"대기","진행중","검수중","검수요청","완료","취소"],designer:[gl,"대기","진행중","검수요청","완료","취소"]},LL=(t,e)=>{if(t==="manager"){if(e==="검수중")return"검수요청";if(e==="검수요청")return"검수중"}return e};function UL({onApplyStatus:t,onApplyRange:e,isManager:n=!1,requesterOptions:i=[],onApplyRequester:a,designerOptions:l=[],onApplyDesigner:c,roleNumber:d}){const[p,g]=q.useState(wg),[v,b]=q.useState(gl),[T,C]=q.useState(Ku),[N,F]=q.useState(Xu),M=()=>{b(gl),g(wg),C(Ku),F(Xu),t(gl),e(wg),a==null||a(Ku),c==null||c(Xu)},P=VL(d),j=jL[P];return _.jsxs(qL,{children:[_.jsx(TL,{value:p,onApply:O=>{g(O),e(O)}}),n&&_.jsxs(_.Fragment,{children:[_.jsxs(Tg,{"aria-label":"요청자 선택",value:T,onChange:O=>{C(O.target.value),a==null||a(O.target.value)},children:[_.jsx("option",{value:Ku,children:Ku}),i.map(O=>_.jsx("option",{value:O,children:O},O))]}),_.jsxs(Tg,{"aria-label":"디자이너 선택",value:N,onChange:O=>{const te=O.target.value;F(te),c==null||c(te)},children:[_.jsx("option",{value:Xu,children:Xu}),l.map(O=>_.jsx("option",{value:O,children:O},O))]})]}),_.jsx(Tg,{value:v,onChange:O=>{const te=O.target.value,z=LL(P,te);b(te),t(z)},children:j.map(O=>_.jsx("option",{value:O,children:O},O))}),_.jsx(BL,{type:"button",onClick:M,children:"필터 초기화"})]})}const qL=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
`,Tg=H.select`
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
`,YL=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],WL=t=>[...t||""].map(e=>{const n=e.charCodeAt(0);if(n>=44032&&n<=55203){const i=Math.floor((n-44032)/28/21);return YL[i]}return e}).join("");function x_(t){const e=l=>l==null?"":String(l).toLowerCase(),n={id:e(t.design_request_id),requirement:e(t.requirement)},i=Object.values(n).join(" "),a=WL(n.requirement);return{...t,_index:{plain:i,chosung:a}}}function A_(t,e){if(!e)return!0;const n=e.toLowerCase();return t._index.plain.includes(n)||t._index.chosung.includes(n)}const QL="진행 상태 선택";function KL({setIsDrawerOpen:t,setEditData:e,setDetailData:n}){const[i,a]=q.useState(""),[l,c]=q.useState([]),[d,p]=q.useState("진행 상태 선택"),[g,v]=q.useState({start:null,end:null}),[b,T]=q.useState(""),[C,N]=q.useState("");q.useEffect(()=>{const k=Sd(oo,B=>{B&&B.displayName&&a(B.displayName)});return()=>k()},[]),q.useEffect(()=>{if(!i)return;const k=Xs(li(Bt,"design_request"),sa("requester","==",i),m_("design_request_id","desc")),B=Wd(k,D=>{const Me=D.docs.map(ce=>({id:ce.id,...ce.data()}));c(Me)});return()=>B()},[i]);const F=k=>v(k),M=k=>p(k),P=k=>N(k),j=k=>k==="검수요청"?"진행중":k,O=k=>new Date(k.getFullYear(),k.getMonth(),k.getDate()),te=k=>{if(!k)return null;if(typeof k=="object"&&typeof k.toDate=="function")return O(k.toDate());if(k instanceof Date)return O(k);if(typeof k=="number")return O(new Date(k));if(typeof k=="string"){const D=k.replace(/\./g,"-").replace(/\//g,"-").split("-");if(D.length===3){const[ce,Y,se]=D.map(Number),fe=ce>31?ce:new Date().getFullYear();return new Date(fe,Y-1,se)}if(D.length===2){const[ce,Y]=D.map(Number),se=new Date().getFullYear();return new Date(se,ce-1,Y)}const Me=new Date(k);return isNaN(+Me)?null:O(Me)}return null},z=q.useMemo(()=>l.map(k=>{const B=j(k.status);return x_({...k,displayStatus:B})}),[l]),re=q.useMemo(()=>{const k=g.start?O(g.start):null,B=g.end?O(g.end):null,D=C.trim();return z.filter(Me=>{if(d!==QL&&Me.displayStatus!==d)return!1;if(k&&B){const ce=te(Me.request_date)||te(Me.requested_at)||te(Me.requestDate);if(!ce||ce<k||ce>B)return!1}return!!A_(Me,D)})},[z,d,g,C]),R=async k=>{await Za(Ir(Bt,"design_request",k),{status:"완료",requester_review_status:"검수완료"}),c(B=>B.map(D=>D.id===k?{...D,status:"완료",requester_review_status:"검수완료"}:D)),alert("완료 처리되었습니다.")},A=async k=>{const B=Ir(Bt,"design_request",k);await Za(B,{requester_edit_state:!0});const D=await g_(B);if(D.exists()){const Me={id:D.id,...D.data()};e(Me),t(!0)}},I=k=>{n(k),t(!0)},U=async k=>{await Za(Ir(Bt,"design_request",k),{status:"취소"}),c(B=>B.map(D=>D.id===k?{...D,status:"취소"}:D))};return _.jsxs(_.Fragment,{children:[_.jsx(b_,{}),_.jsxs(XL,{children:[_.jsx(S_,{roleNumber:1,onApplyStatus:M,onApplyRange:F,onSearch:P,keyword:b,onKeywordChange:T}),_.jsx(pV,{data:re,onReviewComplete:R,onCancel:U,onEditClick:A,onDetailClick:I})]})]})}const XL=H.div`
  padding: 0 48px;
`;function ZL({index:t,item:e,row:n,onChange:i,onSave:a,onDetailClick:l}){const c=b=>{if(!b)return"-";if(b.toDate){const T=b.toDate();return`${T.getMonth()+1}/${T.getDate()}`}return b},d=b=>b==="검수중"?"검수요청":b??"대기",p=b=>b==="검수요청"?"검수중":b,g=d(n.status),v=b=>{b.stopPropagation(),l(e)};return _.jsxs(JL,{isCanceled:e.status==="취소",children:[_.jsx(Zr,{children:t}),_.jsx(Zr,{children:_.jsx(s3,{onClick:v,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Zr,{children:c(e.request_date)}),_.jsx(Zr,{children:e.requester}),_.jsx(e3,{children:c(e.completion_dt)}),_.jsx(t3,{children:c(e.open_dt)}),_.jsx(Zr,{children:e.task_form}),_.jsx(n3,{children:e.task_type}),_.jsx(r3,{children:_.jsxs(a3,{children:[e.emergency?_.jsx(cA,{children:"긴급"}):"",_.jsx(o3,{onClick:v,children:e.requirement})]})}),_.jsx(Zr,{children:_.jsx(l3,{href:e.url,target:"_blank"})}),_.jsx(i3,{children:_.jsx(u3,{onClick:v,children:e.note||""})}),_.jsx(tT,{children:_.jsx(nT,{type:"date",value:n.start_dt??"",onChange:b=>i(e.id,"start_dt",b.target.value),disabled:e.status==="취소"})}),_.jsx(tT,{children:_.jsx(nT,{type:"date",value:n.end_dt??"",onChange:b=>i(e.id,"end_dt",b.target.value),disabled:e.status==="취소"})}),_.jsx(Zr,{children:_.jsx(c3,{type:"text",value:n.result_url??"",placeholder:"산출물 URL을 입력해주세요.",onChange:b=>i(e.id,"result_url",b.target.value),disabled:e.status==="취소"})}),_.jsx(Zr,{children:_.jsxs("select",{value:g,onChange:b=>i(e.id,"status",p(b.target.value)),disabled:e.status==="취소",children:[_.jsx("option",{value:"대기",children:"대기"}),_.jsx("option",{value:"진행중",children:"진행중"}),_.jsx("option",{value:"검수요청",children:"검수요청"}),_.jsx("option",{value:"완료",children:"완료"}),_.jsx("option",{value:"취소",children:"취소"})]})}),_.jsx(Zr,{children:_.jsx(hA,{onClick:()=>a(e.id),disabled:e.status==="취소",children:"저장"})}),_.jsx(Zr,{})]})}const JL=H.tr`
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
`,Zr=H.td`
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
`;function h3({requests:t,onChange:e,formData:n,onSave:i,onDetailClick:a}){return _.jsx(f3,{children:_.jsxs(d3,{children:[_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"100px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"60px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(yn,{children:"번호"}),_.jsx(yn,{children:"문서번호"}),_.jsx(yn,{children:"요청일"}),_.jsx(yn,{children:"요청자"}),_.jsxs(yn,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(yn,{children:"오픈일"}),_.jsx(yn,{children:"업무형태"}),_.jsx(yn,{children:"업무타입"}),_.jsx(yn,{children:"작업항목"}),_.jsxs(yn,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(yn,{children:"메모"}),_.jsx(yn,{children:"디자인 시작일"}),_.jsx(yn,{children:"디자인 종료일"}),_.jsx(yn,{children:"산출물 링크"}),_.jsx(yn,{children:"진행상태"}),_.jsx(yn,{children:"저장"}),_.jsx(yn,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((l,c)=>_.jsx(ZL,{index:c+1,item:l,row:n[l.id]??{},onChange:e,onSave:i,onDetailClick:a},l.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:17,style:{textAlign:"center"},children:"배정된 요청이 없습니다."})})})]})})}const f3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,d3=H.table`
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
`,yn=H.th`
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

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({theme:t})=>t.colors.pink01};
  }
`,p3="진행 상태 선택";function m3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=q.useState([]),[a,l]=q.useState(""),[c,d]=q.useState({}),[p,g]=q.useState("진행 상태 선택"),[v,b]=q.useState({start:null,end:null}),[T,C]=q.useState(""),[N,F]=q.useState("");q.useEffect(()=>{const ce=Sd(oo,Y=>{Y!=null&&Y.displayName&&l(Y.displayName)});return()=>ce()},[]),q.useEffect(()=>{if(!a)return;const ce=Xs(li(Bt,"design_request"),sa("assigned_designer","==",a),m_("design_request_id","desc")),Y=Wd(ce,se=>{const fe=se.docs.map(Ee=>({id:Ee.id,...Ee.data()}));i(fe)});return()=>Y()},[a]);const M=ce=>b(ce),P=ce=>g(ce),j=ce=>new Date(ce.getFullYear(),ce.getMonth(),ce.getDate()),O=ce=>{if(!ce)return null;if(typeof ce=="object"&&typeof ce.toDate=="function")return j(ce.toDate());if(ce instanceof Date)return j(ce);if(typeof ce=="number")return j(new Date(ce));if(typeof ce=="string"){const se=ce.replace(/\./g,"-").replace(/\//g,"-").split("-");if(se.length===3){const[Ee,L,ae]=se.map(Number),J=Ee>31?Ee:new Date().getFullYear();return new Date(J,L-1,ae)}if(se.length===2){const[Ee,L]=se.map(Number),ae=new Date().getFullYear();return new Date(ae,Ee-1,L)}const fe=new Date(ce);return isNaN(+fe)?null:j(fe)}return null},te=ce=>{const Y=ce.getFullYear(),se=String(ce.getMonth()+1).padStart(2,"0"),fe=String(ce.getDate()).padStart(2,"0");return`${Y}-${se}-${fe}`},z=ce=>{if(!ce)return"";if(typeof ce=="object"&&typeof ce.toDate=="function")return te(ce.toDate());if(ce instanceof Date)return te(ce);const Y=new Date(ce);return isNaN(+Y)?"":te(Y)},re=q.useMemo(()=>n.map(ce=>({...ce,designer_start_date:z(ce.designer_start_date),designer_end_date:z(ce.designer_end_date),result_url:ce.result_url??"",status:ce.status??"대기"})),[n]),R=ce=>ce==="검수중"?"검수요청":ce??"대기",A=q.useMemo(()=>re.map(ce=>{const Y=R(ce.status);return x_({...ce,displayStatus:Y})}),[re]),I=q.useMemo(()=>{const ce=v.start?j(v.start):null,Y=v.end?j(v.end):null;return A.filter(se=>{let fe=!0;if(p&&p!==p3&&R(se.status)!==p&&(fe=!1),fe&&ce&&Y){const Ee=O(se.request_date)||O(se.requested_at)||O(se.requestDate);(!Ee||Ee<ce||Ee>Y)&&(fe=!1)}return fe&&N&&!A_(se,N)&&(fe=!1),fe})},[A,p,v,N]),U=ce=>F(ce);q.useEffect(()=>{n.length&&d(ce=>{const Y={...ce};return n.forEach(se=>{Y[se.id]===void 0&&(Y[se.id]={start_dt:z(se.designer_start_date),end_dt:z(se.designer_end_date),result_url:se.result_url||"",status:se.status||"대기"})}),Y})},[n]);const k=(ce,Y,se)=>{d(fe=>({...fe,[ce]:{...fe[ce],[Y]:se}}))},B=ce=>{if(!ce)return null;const Y=new Date(ce);return isNaN(+Y)?null:pt.fromDate(Y)},D=async ce=>{const Y=c[ce];if(!Y){alert("변경된 내용이 없습니다.");return}await Za(Ir(Bt,"design_request",ce),{designer_start_date:B(Y.start_dt),designer_end_date:B(Y.end_dt),result_url:Y.result_url??"",status:Y.status??"대기"}),alert("저장되었습니다.")},Me=ce=>{e(ce),t(!0)};return _.jsxs(g3,{children:[_.jsx(b_,{}),_.jsxs(y3,{children:[_.jsx(_3,{children:"디자이너 화면"}),_.jsx(S_,{roleNumber:2,onApplyStatus:P,onApplyRange:M,onSearch:U,keyword:T,onKeywordChange:C}),_.jsx(h3,{requests:I,formData:c,onChange:k,onSave:D,onDetailClick:Me})]})]})}const g3=H.div``,y3=H.div`
  padding: 0 48px;
`,_3=H.h2`
  margin-top: 20px;
`;function v3({index:t,item:e,designerList:n,selectedDesigner:i,onDesignerSelect:a,onAssignDesigner:l,onSendToRequester:c,onDetailClick:d}){const g=(T=>T==="검수요청"?"검수중":T==="검수중"?"검수요청":T)(e.status),v=T=>{if(!T)return"-";if(T.toDate){const C=T.toDate();return`${C.getMonth()+1}/${C.getDate()}`}return T},b=T=>{T.stopPropagation(),d(e)};return _.jsxs(E3,{isCanceled:e.status==="취소",children:[_.jsx(Zn,{children:t}),_.jsx(Zn,{children:_.jsx(A3,{onClick:b,$hasUpdate:!!e.updated_at,children:e.design_request_id})}),_.jsx(Zn,{children:v(e.request_date)}),_.jsx(Zn,{children:e.requester}),_.jsx(b3,{children:v(e.completion_dt)}),_.jsx(w3,{children:v(e.open_dt)}),_.jsx(Zn,{children:e.task_form}),_.jsx(T3,{children:e.task_type}),_.jsx(S3,{children:_.jsxs(R3,{children:[e.emergency?_.jsx(fA,{children:"긴급"}):"",_.jsx(C3,{onClick:b,children:e.requirement})]})}),_.jsx(Zn,{children:_.jsx(rT,{href:e.url,target:"_blank"})}),_.jsx(x3,{children:_.jsx(I3,{onClick:b,children:e.note||""})}),_.jsx(Zn,{children:_.jsx(D3,{status:g,children:g})}),_.jsx(Zn,{children:e.result_url?_.jsx(rT,{href:e.result_url,target:"_blank"}):""}),_.jsx(Zn,{children:v(e.designer_start_date)}),_.jsx(Zn,{children:v(e.designer_end_date)}),_.jsxs(Zn,{children:[_.jsxs(k3,{value:i,onChange:T=>a(T.target.value),disabled:e.status==="취소",children:[_.jsx("option",{value:"",children:"디자이너 선택"}),n.map(T=>_.jsx("option",{value:T.name,children:T.name},T.id))]}),_.jsx(dA,{onClick:l,disabled:e.status==="취소",children:"배정"})]}),_.jsx(Zn,{children:e.status==="검수요청"&&e.manager_review_status!=="검수완료"?_.jsx(pA,{onClick:c,children:"검수완료"}):e.manager_review_status==="검수완료"?_.jsx(O3,{children:"검수완료"}):""}),_.jsxs(Zn,{children:[_.jsx(M3,{type:"text",placeholder:"공수 입력"}),_.jsx(N3,{type:"button",children:"저장"})]})]})}const E3=H.tr`
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
`,Zn=H.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({theme:t})=>t.colors.black};
  }
`,b3=H.td`
  color: ${({theme:t})=>t.colors.red};
`,w3=H.td`
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
`;function P3({data:t,designerList:e,selectedDesigners:n,designerSelect:i,assignDesigner:a,sendToRequester:l,onDetailClick:c}){return _.jsx(V3,{children:_.jsxs(j3,{children:[_.jsx(L3,{children:"매니저 요청 리스트"}),_.jsxs("colgroup",{children:[_.jsx("col",{style:{width:"40px"}}),_.jsx("col",{style:{width:"90px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"120px"}}),_.jsx("col",{}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"150px"}}),_.jsx("col",{style:{width:"85px"}}),_.jsx("col",{style:{width:"70px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"60px"}}),_.jsx("col",{style:{width:"160px"}}),_.jsx("col",{style:{width:"80px"}}),_.jsx("col",{style:{width:"110px"}})]}),_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx(an,{children:"번호"}),_.jsx(an,{children:"문서번호"}),_.jsx(an,{children:"요청일"}),_.jsx(an,{children:"요청자"}),_.jsxs(an,{children:["완료",_.jsx("br",{}),"요청일"]}),_.jsx(an,{children:"오픈일"}),_.jsx(an,{children:"업무형태"}),_.jsx(an,{children:"업무타입"}),_.jsx(an,{children:"작업항목"}),_.jsxs(an,{children:["요청서",_.jsx("br",{}),"URL"]}),_.jsx(an,{children:"메모"}),_.jsx(an,{children:"진행상태"}),_.jsxs(an,{children:["산출물",_.jsx("br",{}),"URL"]}),_.jsxs(an,{children:["디자인",_.jsx("br",{}),"시작일"]}),_.jsxs(an,{children:["디자인",_.jsx("br",{}),"종료일"]}),_.jsx(an,{children:"디자이너 배정"}),_.jsx(an,{children:"검수"}),_.jsx(an,{children:"공수"})]})}),_.jsx("tbody",{children:t.length>0?t.map((d,p)=>_.jsx(v3,{index:p+1,item:d,designerList:e,selectedDesigner:n[d.id]||"",onDesignerSelect:g=>i(d.id,g),onAssignDesigner:()=>a(d.id),onSendToRequester:()=>l(d.id),onDetailClick:c},d.id)):_.jsx("tr",{children:_.jsx("td",{colSpan:18,style:{textAlign:"center",padding:"20px"},children:"등록된 요청이 없습니다."})})})]})})}const V3=H.div`
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`,j3=H.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({theme:t})=>t.colors.black};
  text-align: center;
`,L3=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,an=H.th`
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
`,iT="진행 상태 선택",sT="요청자 선택",aT="디자이너 선택";function U3({setIsDrawerOpen:t,setDetailData:e}){const[n,i]=q.useState([]),[a,l]=q.useState([]),[c,d]=q.useState({}),[p,g]=q.useState(iT),[v,b]=q.useState({start:null,end:null}),[T,C]=q.useState(""),[N,F]=q.useState(""),[M,P]=q.useState([]),[j,O]=q.useState(sT),[te,z]=q.useState([]),[re,R]=q.useState(aT);q.useEffect(()=>{const J=Xs(li(Bt,"design_request"),m_("design_request_id","desc")),ie=Wd(J,de=>{const _e=de.docs.map(ge=>({id:ge.id,...ge.data()}));i(_e)});return()=>ie()},[]),q.useEffect(()=>{n.length&&d(J=>{const ie={...J};return n.forEach(de=>{ie[de.id]===void 0&&(ie[de.id]=de.assigned_designer??"")}),ie})},[n]),q.useEffect(()=>{(async()=>{const ie=Xs(li(Bt,"users"),sa("role","==",2)),_e=(await ly(ie)).docs.map(ge=>({id:ge.id,...ge.data()}));l(_e),z(_e.map(ge=>ge.name).filter(Boolean))})()},[]);const A=(J,ie)=>{d(de=>({...de,[J]:ie}))},I=async J=>{const ie=c[J];if(!ie){alert("디자이너를 선택하세요.");return}const de=Ir(Bt,"design_request",J);await Za(de,{assigned_designer:ie}),alert("디자이너가 배정되었습니다!"),i(_e=>_e.map(ge=>ge.id===J?{...ge,assigned_designer:ie}:ge))},U=async J=>{await Za(Ir(Bt,"design_request",J),{manager_review_status:"검수완료",status:"검수중"}),i(ie=>ie.map(de=>de.id===J?{...de,manager_review_status:"검수완료",status:"검수중"}:de)),alert("요청자에게 전달되었습니다.")};q.useEffect(()=>{(async()=>{const J=Xs(li(Bt,"users"),sa("role","==",1)),de=(await ly(J)).docs.map(_e=>_e.data().name).filter(Boolean);P(de)})()},[]);const k=J=>{e(J),t(!0)},B=J=>b(J),D=J=>g(J),Me=J=>F(J.trim()),ce=J=>O(J),Y=J=>R(J),se=J=>new Date(J.getFullYear(),J.getMonth(),J.getDate()),fe=J=>{if(!J)return null;if(typeof J=="object"&&typeof J.toDate=="function")return se(J.toDate());if(J instanceof Date)return se(J);if(typeof J=="number")return se(new Date(J));if(typeof J=="string"){const de=J.replace(/\./g,"-").replace(/\//g,"-").split("-");if(de.length===3){const[ge,it,Le]=de.map(Number),yt=ge>31?ge:new Date().getFullYear();return new Date(yt,it-1,Le)}if(de.length===2){const[ge,it]=de.map(Number),Le=new Date().getFullYear();return new Date(Le,ge-1,it)}const _e=new Date(J);return isNaN(+_e)?null:se(_e)}return null},Ee=J=>J==="검수요청"?"검수중":J==="검수중"?"검수요청":J??"대기",L=q.useMemo(()=>n.map(J=>{const ie=Ee(J.status);return x_({...J,displayStatus:ie})}),[n]),ae=q.useMemo(()=>{const J=v.start?se(v.start):null,ie=v.end?se(v.end):null;return L.filter(de=>{let _e=!0;if(p!==iT&&de.status!==p&&(_e=!1),_e&&j!==sT&&de.requester!==j&&(_e=!1),_e&&re!==aT&&de.assigned_designer!==re&&(_e=!1),_e&&J&&ie){const ge=fe(de.request_date)||fe(de.requested_at)||fe(de.requestDate);(!ge||ge<J||ge>ie)&&(_e=!1)}return _e&&N&&!A_(de,N)&&(_e=!1),_e})},[L,p,j,re,v,N]);return _.jsxs(q3,{children:[_.jsx(b_,{}),_.jsxs(B3,{children:[_.jsx(z3,{children:"매니저 요청리스트"}),_.jsx(S_,{roleNumber:3,onApplyStatus:D,onApplyRange:B,onSearch:Me,keyword:T,onKeywordChange:C,isManager:!0,requesterOptions:M,onApplyRequester:ce,designerOptions:te,onApplyDesigner:Y}),_.jsx(P3,{data:ae,designerList:a,selectedDesigners:c,designerSelect:A,assignDesigner:I,sendToRequester:U,onDetailClick:k})]})]})}const q3=H.div``,B3=H.div`
  padding: 0 48px;
`,z3=H.h2`
  margin-top: 20px;
`;function F3({userRole:t,setIsDrawerOpen:e,setEditData:n,setDetailData:i}){const a=()=>{if(t===1)return _.jsx(KL,{setIsDrawerOpen:e,setEditData:n,setDetailData:i});if(t===2)return _.jsx(m3,{setIsDrawerOpen:e,setDetailData:i});if(t===3)return _.jsx(U3,{setIsDrawerOpen:e,setDetailData:i})};return _.jsx($3,{children:a()})}const $3=H.main``,H3="./assets/aside-logo-DoEwMgfJ.svg",G3="./assets/myrequest-icon-DhmqrZY6.svg";function Y3({item:t}){return _.jsxs(K3,{status:t.status,children:[_.jsx(X3,{children:t.status}),_.jsx(Z3,{status:t.status,children:t.count})]})}const W3=(t,e)=>{switch(t){case"대기":return e.colors.beige01;case"진행중":return e.colors.lightpupple;case"검수요청":case"검수중":return e.colors.pink03;case"완료":return e.colors.gray04;case"취소":return e.colors.gray07;default:return"#f9f9f9"}},Q3=(t,e)=>{switch(t){case"대기":return e.colors.orange;case"진행중":return e.colors.blue01;case"검수요청":case"검수중":return e.colors.red;case"완료":return e.colors.gray02;case"취소":return e.colors.gray03;default:return e.colors.gray03}},K3=H.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({theme:t})=>t.colors.black};
  background-color: ${({status:t,theme:e})=>W3(t,e)};
`,X3=H.span`
  font-size: 16px;
  font-weight: 500;
`,Z3=H.span`
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
    background-color: ${({status:t,theme:e})=>Q3(t,e)};
  }
`,wt={WAIT:"대기",PROG:"진행중",REQ:"검수요청",REV:"검수중",DONE:"완료",CAN:"취소"},J3=(t,e)=>{const n=i=>e.reduce((a,l)=>l.status&&i.includes(l.status)?a+1:a,0);switch(t){case 1:return[{status:"대기",count:n([wt.WAIT])},{status:"진행중",count:n([wt.PROG,wt.REQ])},{status:"검수중",count:n([wt.REV])},{status:"완료",count:n([wt.DONE])},{status:"취소",count:n([wt.CAN])}];case 2:return[{status:"대기",count:n([wt.WAIT])},{status:"진행중",count:n([wt.PROG])},{status:"검수요청",count:n([wt.REQ,wt.REV])},{status:"완료",count:n([wt.DONE])},{status:"취소",count:n([wt.CAN])}];case 3:return[{status:"대기",count:n([wt.WAIT])},{status:"진행중",count:n([wt.PROG])},{status:"검수중",count:n([wt.REQ])},{status:"검수요청",count:n([wt.REV])},{status:"완료",count:n([wt.DONE])},{status:"취소",count:n([wt.CAN])}];default:return[{status:"대기",count:n([wt.WAIT])},{status:"진행중",count:n([wt.PROG])},{status:"검수요청",count:n([wt.REQ])},{status:"검수중",count:n([wt.REV])},{status:"완료",count:n([wt.DONE])},{status:"취소",count:n([wt.CAN])}]}},eU=(t,e)=>{switch(t){case 1:return`${e}님의 요청`;case 2:return`${e}님의 작업 현황`;case 3:return"전체 요청 현황";default:return"요청 현황"}};function tU({requests:t,role:e,userName:n,onRequestButtonClick:i}){const a=J3(e,t);return _.jsxs(nU,{children:[_.jsxs(rU,{children:[_.jsx(iU,{src:H3}),_.jsx(sU,{children:"업무 관리시스템"})]}),e===1&&_.jsx(aU,{children:_.jsx(oU,{onClick:i,children:"디자인 요청 등록"})}),_.jsxs(lU,{children:[_.jsxs(uU,{children:[_.jsx(cU,{src:G3}),_.jsx(hU,{children:eU(e,n)})]}),_.jsx(fU,{children:a.map(l=>_.jsx(Y3,{item:l},l.status))})]})]})}const nU=H.aside`
  height: 100%;
  border-right: 1px solid ${({theme:t})=>t.colors.black};
`,rU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  padding: 19.5px 23px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,iU=H.img`
  margin-right: 8px;
`,sU=H.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  white-space: nowrap;
`,aU=H.div`
  padding: 32px 20px;
  border-bottom: 1px solid ${({theme:t})=>t.colors.gray02};
`,oU=H.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
  white-space: nowrap;
`,lU=H.div`
  padding: 0 24px;
`,uU=H.div`
  ${({theme:t})=>t.mixin.flex("center")};
  gap: 12px;
  padding: 30px 0;
`,cU=H.img``,hU=H.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
`,fU=H.ul`
  ${({theme:t})=>t.mixin.flex("center")};
  flex-direction: column;
`;function dU({isOpen:t,onClose:e,children:n}){return _.jsxs(_.Fragment,{children:[_.jsx(pU,{isVisible:t,onClick:e}),_.jsx(mU,{isVisible:t,onClick:i=>i.stopPropagation(),children:n})]})}const pU=H.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({isVisible:t})=>t?1:0};
  pointer-events: ${({isVisible:t})=>t?"auto":"none"};
  transition: opacity 0.3s ease;
`,mU=H.div`
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
`,mA="./assets/requestformexit-button-BcAG546a.svg",gU="./assets/checkbox-checked-eOVFoR8b.svg",Tf={completion_dt:"",open_dt:"",task_form:"GHS",task_type:"프론트테마",requirement:"",url:"",note:"",emergency:!1};function oT({userName:t,editData:e,isDrawerOpen:n,onClose:i}){const a=(e==null?void 0:e.requester_edit_state)===!0,[l,c]=q.useState(Tf),[d,p]=q.useState([]),g=(P,j)=>{c(O=>({...O,[P]:j}))},v=()=>p(P=>[...P,{...Tf}]),b=P=>p(j=>j.filter((O,te)=>te!==P)),T=(P,j,O)=>p(te=>{const z=[...te];return z[P]={...z[P],[j]:O},z}),C=P=>P?pt.fromDate(new Date(P)):null,N=async()=>{const P=new Date,j=P.getFullYear().toString().slice(2),O=(P.getMonth()+1).toString().padStart(2,"0"),te=Xs(li(Bt,"design_request"),sa("design_request_id",">=",`H${j}${O}000`),sa("design_request_id","<",`H${j}${O}999`)),z=await ly(te);return{year:j,month:O,base:z.size}},F=(P,j,O)=>`H${P}${j}${O.toString().padStart(3,"0")}`,M=async P=>{if(P.preventDefault(),!l.requirement){alert("요청 내용을 입력하세요.");return}if(a&&(e!=null&&e.id)){await Za(Ir(Bt,"design_request",e.id),{completion_dt:C(l.completion_dt),open_dt:C(l.open_dt),task_form:l.task_form,task_type:l.task_type,requirement:l.requirement,url:l.url,note:l.note,emergency:l.emergency,requester_edit_state:!1,updated_at:Bw()}),alert("요청이 수정되었습니다!"),i();return}const j=[l,...d],O=j.findIndex(I=>!I.requirement);if(O!==-1){alert(`${O+1}번째 폼의 "작업 항목"을 입력하세요.`);return}const{year:te,month:z,base:re}=await N();let R=re;const A=new Date;for(const I of j){R+=1;const U=F(te,z,R);await k4(li(Bt,"design_request"),{design_request_id:U,request_date:C(A.toISOString()),requester:t,completion_dt:C(I.completion_dt),open_dt:C(I.open_dt),task_form:I.task_form,task_type:I.task_type,requirement:I.requirement,url:I.url,note:I.note,status:"대기",assigned_designer:"미배정",requester_review_status:"검수대기",manager_review_status:"",result_url:"",designer_start_date:null,designer_end_date:null,emergency:I.emergency,requester_edit_state:!1,designer_edit_state:!1,created_at:Bw(),updated_at:null,delete_at:null,work_hour:""})}alert(`${j.length}건이 등록되었습니다!`),p([]),c(Tf),i()};return q.useEffect(()=>{a&&e&&c({completion_dt:e.completion_dt?e.completion_dt.toDate().toISOString().slice(0,10):"",open_dt:e.open_dt?e.open_dt.toDate().toISOString().slice(0,10):"",task_form:e.task_form??"GHS",task_type:e.task_type??"프론트테마",requirement:e.requirement??"",url:e.url??"",note:e.note??"",emergency:e.emergency??!1})},[a,e]),q.useEffect(()=>{!n||a||(c(Tf),p([]))},[n]),_.jsxs(_.Fragment,{children:[_.jsxs(_U,{children:[_.jsx(vU,{children:a?"디자인 요청 수정":"디자인 요청 등록"}),_.jsx(EU,{type:"button",onClick:i})]}),_.jsxs(yU,{onSubmit:M,children:[_.jsxs(bU,{children:[!a&&d.map((P,j)=>_.jsxs("div",{style:{marginBottom:24},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 4px"},children:[_.jsxs("strong",{children:["추가 요청 ",j+1]}),_.jsx("button",{type:"button",onClick:()=>b(j),children:"삭제"})]}),_.jsxs(lT,{children:[_.jsx(uT,{children:"디자인 요청 추가 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(on,{children:"문서번호"}),_.jsx(ln,{})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`completion_dt_ex_${j}`,children:"완료 요청일"})}),_.jsx(ln,{children:_.jsx(Sf,{id:`completion_dt_ex_${j}`,type:"date",value:P.completion_dt||"",onChange:O=>T(j,"completion_dt",O.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`open_dt_ex_${j}`,children:"오픈일"})}),_.jsx(ln,{children:_.jsx(Sf,{id:`open_dt_ex_${j}`,type:"date",value:P.open_dt||"",onChange:O=>T(j,"open_dt",O.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`task_form_ex_${j}`,children:"업무 형태"})}),_.jsx(ln,{children:_.jsxs(xf,{id:`task_form_ex_${j}`,value:P.task_form||"GHS",onChange:O=>T(j,"task_form",O.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`task_type_ex_${j}`,children:"업무 유형"})}),_.jsx(ln,{children:_.jsxs(xf,{id:`task_type_ex_${j}`,value:P.task_type||"프론트테마",onChange:O=>T(j,"task_type",O.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`requirement_ex_${j}`,children:"작업 항목"})}),_.jsx(ln,{children:_.jsx(cT,{id:`requirement_ex_${j}`,type:"text",value:P.requirement||"",onChange:O=>T(j,"requirement",O.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`emergency_ex_${j}`,children:"긴급 일정"})}),_.jsx(ln,{children:_.jsx(dT,{children:_.jsxs(pT,{htmlFor:`emergency_ex_${j}`,children:[_.jsx(mT,{id:`emergency_ex_${j}`,type:"checkbox",checked:!!P.emergency,onChange:O=>T(j,"emergency",O.target.checked)}),_.jsx(gT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`url_ex_${j}`,children:"요청서 URL"})}),_.jsx(ln,{children:_.jsx(hT,{id:`url_ex_${j}`,value:P.url||"",onChange:O=>T(j,"url",O.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:`note_ex_${j}`,children:"메모"})}),_.jsx(ln,{children:_.jsx(fT,{id:`note_ex_${j}`,rows:4,value:P.note||"",onChange:O=>T(j,"note",O.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]},j)),_.jsxs(lT,{children:[_.jsx(uT,{children:"디자인 요청 등록"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(on,{children:"문서번호"}),_.jsx(ln,{children:a?e==null?void 0:e.design_request_id:""})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"completion_dt",children:"완료 요청일"})}),_.jsx(ln,{children:_.jsx(Sf,{type:"date",id:"completion_dt",value:l.completion_dt,onChange:P=>g("completion_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"open_dt",children:"오픈일"})}),_.jsx(ln,{children:_.jsx(Sf,{type:"date",id:"open_dt",value:l.open_dt,onChange:P=>g("open_dt",P.target.value)})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"task_form",children:"업무 형태"})}),_.jsx(ln,{children:_.jsxs(xf,{id:"task_form",value:l.task_form,onChange:P=>g("task_form",P.target.value),children:[_.jsx("option",{value:"GHS",children:"GHS"}),_.jsx("option",{value:"MHC",children:"MHC"}),_.jsx("option",{value:"MHC/GHS",children:"MHC/GHS"})]})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"task_type",children:"업무 유형"})}),_.jsx(ln,{children:_.jsxs(xf,{id:"task_type",value:l.task_type,onChange:P=>g("task_type",P.target.value),children:[_.jsx("option",{value:"프론트테마",children:"프론트테마"}),_.jsx("option",{value:"별도기획전",children:"별도기획전"}),_.jsx("option",{value:"일자별배너",children:"일자별배너"}),_.jsx("option",{value:"핫새배너",children:"핫새배너"}),_.jsx("option",{value:"큐레이션배너",children:"큐레이션배너"}),_.jsx("option",{value:"GNB-기획전(전문관)",children:"GNB-기획전(전문관)"}),_.jsx("option",{value:"GNB-주류이지픽업",children:"GNB-주류이지픽업"}),_.jsx("option",{value:"GNB-택배배송관",children:"GNB-택배배송관"}),_.jsx("option",{value:"페이/카드프로모션",children:"페이/카드프로모션"}),_.jsx("option",{value:"이벤트배너",children:"이벤트배너"}),_.jsx("option",{value:"상품상세",children:"상품상세"}),_.jsx("option",{value:"제휴",children:"제휴"}),_.jsx("option",{value:"클럽",children:"클럽"}),_.jsx("option",{value:"팝업",children:"팝업"}),_.jsx("option",{value:"푸시",children:"푸시"}),_.jsx("option",{value:"홈테마",children:"홈테마"}),_.jsx("option",{value:"즉시배송",children:"즉시배송"}),_.jsx("option",{value:"트레이딩",children:"트레이딩"}),_.jsx("option",{value:"이벤트",children:"이벤트"}),_.jsx("option",{value:"기타",children:"기타"})]})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"requirement",children:"작업 항목"})}),_.jsx(ln,{children:_.jsx(cT,{type:"text",id:"requirement",value:l.requirement,onChange:P=>g("requirement",P.target.value),placeholder:"작업 항목을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"emergency",children:"긴급 일정"})}),_.jsx(ln,{children:_.jsx(dT,{children:_.jsxs(pT,{htmlFor:"emergency",children:[_.jsx(mT,{type:"checkbox",id:"emergency",checked:l.emergency,onChange:P=>g("emergency",P.target.checked)}),_.jsx(gT,{}),_.jsx("span",{children:"긴급 일정으로 설정"})]})})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"url",children:"요청서 URL"})}),_.jsx(ln,{children:_.jsx(hT,{id:"url",value:l.url,onChange:P=>g("url",P.target.value),placeholder:"요청 기획안 URL을 입력하세요."})})]}),_.jsxs("tr",{children:[_.jsx(on,{children:_.jsx(An,{htmlFor:"note",children:"메모"})}),_.jsx(ln,{children:_.jsx(fT,{id:"note",rows:4,value:l.note,onChange:P=>g("note",P.target.value),placeholder:"메모를 입력하세요."})})]})]})]})]}),_.jsxs(wU,{children:[_.jsx(TU,{type:"submit",children:a?"수정 완료":"등록하기"}),!a&&_.jsx(SU,{type:"button",onClick:v,children:"추가 등록하기"})]})]})]})}const yU=H.form`
  font-family: 'Pretendard';
`,_U=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,vU=H.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,EU=H.button`
  width: 24px;
  height: 24px;
  background: url(${mA}) no-repeat center;
  background-size: contain;
`,lT=H.table`
  width: 100%;
  color: ${({theme:t})=>t.colors.black};
  border-top: 1px solid ${({theme:t})=>t.colors.black};
`,bU=H.div`
  max-height: 690px;
  overflow: auto;
`,uT=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,on=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,ln=H.td`
  padding: 12px 24px;
  border-right: none;
`,An=H.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`,Sf=H.input`
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
    background-image: url(${gU}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`,gT=H.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-radius: 2px;
`,xf=H.select`
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
`,wU=H.div`
  margin-top: 24px;
  text-align: center;
`,TU=H.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.white01};
`,SU=H.button`
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
`;function xU({data:t,onClose:e}){const n=i=>{if(!i)return"-";if(i.toDate){const a=i.toDate();return`${a.getMonth()+1}/${a.getDate()}`}return i};return _.jsxs(_.Fragment,{children:[_.jsxs(AU,{children:[_.jsx(RU,{children:"디자인 요청 상세"}),_.jsx(CU,{type:"button",onClick:e})]}),_.jsxs(IU,{children:[_.jsx(DU,{children:"디자인 요청 상세"}),_.jsx("colgroup",{children:_.jsx("col",{style:{width:"120px"}})}),_.jsxs("tbody",{children:[_.jsxs("tr",{children:[_.jsx(Jr,{children:"문서번호"}),_.jsx(Fa,{children:t==null?void 0:t.design_request_id})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"요청일"}),_.jsx(Fa,{children:n(t==null?void 0:t.request_date)})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"완료 요청일"}),_.jsx(kU,{children:n(t==null?void 0:t.completion_dt)})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"오픈일"}),_.jsx(OU,{children:n(t==null?void 0:t.open_dt)})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"업무 형태"}),_.jsx(Fa,{children:t==null?void 0:t.task_form})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"업무 유형"}),_.jsx(Fa,{children:t==null?void 0:t.task_type})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"작업 항목"}),_.jsx(Fa,{children:t==null?void 0:t.requirement})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"긴급 일정"}),_.jsx(Fa,{children:t!=null&&t.emergency?"긴급 일정으로 설정":"긴급 일정으로 설정 안함"})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"요청서 URL"}),_.jsx(Fa,{children:t!=null&&t.url?_.jsx(NU,{href:t==null?void 0:t.url,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.url}):"-"})]}),_.jsxs("tr",{children:[_.jsx(Jr,{children:"메모"}),_.jsx(MU,{children:_.jsx(PU,{children:t.note})})]})]})]})]})}const AU=H.div`
  ${({theme:t})=>t.mixin.flex("center","space-between")};
  margin-bottom: 24px;
`,RU=H.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.black};
  letter-spacing: -0.48px;
`,CU=H.button`
  width: 24px;
  height: 24px;
  background: url(${mA}) no-repeat center;
  background-size: contain;
`,IU=H.table`
  width: 100%;
  border-top: 1px solid ${({theme:t})=>t.colors.black};
  color: ${({theme:t})=>t.colors.black};
  font-family: 'Pretendard';
`,DU=H.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`,Jr=H.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({theme:t})=>t.colors.gray02};
  border-left: none;
  background-color: ${({theme:t})=>t.colors.gray04};
`,Fa=H.td`
  padding: 12px 24px;
  border-right: none;
`,kU=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,OU=H.td`
  padding: 12px 24px;
  color: ${({theme:t})=>t.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`,MU=H.td`
  padding: 12px 24px;
  background-color: #fffff1;
`,NU=H.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`,PU=H.p`
  min-height: 165px;
  max-height: 165px;
  overflow-y: auto;
  word-break: break-word;
`;function VU(){const[t,e]=q.useState(0),[n,i]=q.useState([]),[a,l]=q.useState(""),[c,d]=q.useState(!1),[p,g]=q.useState(void 0),[v,b]=q.useState(null);q.useEffect(()=>{const N=Sd(oo,async F=>{if(F){l(F.displayName||"");const M=await g_(Ir(Bt,"users",F.uid));if(M.exists()){const j=M.data().role,O=F.displayName;e(j);let te;j===1?te=Xs(li(Bt,"design_request"),sa("requester","==",O)):j===2?te=Xs(li(Bt,"design_request"),sa("assigned_designer","==",O)):te=li(Bt,"design_request"),Wd(te,z=>{const re=z.docs.map(R=>{const A=R.data();return{id:R.id,status:A.status??"대기중"}});i(re)})}}else e(0),l(""),i([])});return()=>N()},[]);const T=()=>{g(void 0),b("create"),d(!0)},C=()=>{d(!1),g(void 0)};return _.jsxs(jU,{children:[_.jsx(tU,{requests:n,userName:a,role:t,onRequestButtonClick:T}),_.jsxs(LU,{children:[_.jsx(Y4,{}),_.jsx(F3,{userRole:t,setIsDrawerOpen:d,setEditData:N=>{g(N),b("edit")},setDetailData:N=>{g(N),b("detail")}})]}),_.jsxs(dU,{isOpen:c,onClose:C,children:[v==="create"&&_.jsx(oT,{userName:a,isDrawerOpen:c,onClose:C}),v==="edit"&&p&&_.jsx(oT,{userName:a,isDrawerOpen:c,editData:p,onClose:C}),v==="detail"&&p&&_.jsx(xU,{data:p,onClose:C})]})]})}const jU=H.div`
  ${({theme:t})=>t.mixin.flex()};
  width: 100%;
  height: 100%;
`,LU=H.div`
  flex: 1;
`;function UU(){const[t,e]=q.useState(""),[n,i]=q.useState(""),[a,l]=q.useState(""),[c,d]=q.useState(""),p=Dc(),g=async()=>{if(a!==c){alert("비밀번호가 일치하지 않습니다.");return}tM(oo,n,a).then(async v=>{const b=v.user;await iM(b,{displayName:t}),await D4(Ir(Bt,"users",b.uid),{name:t,role:2,createdAt:new Date})}).then(()=>{alert("회원가입이 완료되었습니다!"),p("/")}).catch(v=>{alert("회원가입 중 오류 발생: "+v.message)})};return _.jsx(qU,{children:_.jsxs(BU,{children:[_.jsxs(zU,{children:[_.jsx(FU,{children:"PDMS"}),_.jsx($U,{children:"Pushcomz Design Management System"})]}),_.jsx(HU,{children:_.jsx(GU,{src:kx})}),_.jsxs(YU,{children:[_.jsx(WU,{type:"text",value:t,onChange:v=>e(v.target.value),placeholder:"이름을 입력해주세요."}),_.jsx(QU,{type:"text",value:n,onChange:v=>i(v.target.value),placeholder:"이메일을 입력해주세요."}),_.jsx(KU,{type:"password",value:a,onChange:v=>l(v.target.value),placeholder:"비밀번호를 입력해주세요."}),_.jsx(XU,{type:"password",value:c,onChange:v=>d(v.target.value),placeholder:"비밀번호 확인을 입력해주세요."})]}),_.jsx(ZU,{onClick:g,children:"등록하기"})]})})}const qU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>t.colors.gray01};
`,BU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  max-width: 500px;
  padding: 50px 20px;
  background-color: ${({theme:t})=>t.colors.white01};
`,zU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  margin-bottom: 50px;
`,FU=H.h1`
  line-height: 45px;
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.navy};
`,$U=H.span`
  font-size: 12px;
  font-weight: 100;
  color: #999;
`,HU=H.div`
  margin-right: auto;
`,GU=H.img`
  
`,YU=H.div`
  ${({theme:t})=>t.mixin.flex("center","center")};
  flex-direction: column;
  gap: 10px;
`,WU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`,QU=H.input`
  width: 460px;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
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
`,ZU=H.button`
  width: 100%;
  padding: 13px 0;
  margin: 25px 0 30px;
  border-radius: 4px;
  background-color: ${({theme:t})=>t.colors.navy};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.colors.white01};
`;function JU(){const[t,e]=q.useState(!1);return _.jsx(cI,{basename:"/pdms-test",children:_.jsxs(BC,{children:[_.jsx(Af,{path:"/",element:_.jsx(M4,{onLoginSuccess:()=>e(!0)})}),_.jsx(Af,{path:"/dashboard",element:t?_.jsx(VU,{}):_.jsx(UC,{to:"/"})}),_.jsx(Af,{path:"/signup",element:_.jsx(UU,{})})]})})}const e9="/assets/Pretendard-Bold-C0IAtCzs.woff2",t9="/assets/Pretendard-SemiBold-bHEaYlbJ.woff2",n9="/assets/Pretendard-Medium-BCuOcOjL.woff2",r9="/assets/Pretendard-Regular-BnvhP503.woff2",i9=i1`
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
    src: url(${e9}) format('woff2');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${t9}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${n9}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${r9}) format('woff2');
    font-weight: 400;
  }

`,s9={white01:"#fff",white02:"#f4f4f4",red:"#eb193a",navy:"#073863",beige01:"#fff4ea",beige02:"#FFEEDE",orange:"#f88017",lightpupple:"#eaedfa",blue01:"#4f76ff",blue02:"#0B1ABF",gray01:"#ECEDF0",gray02:"#ccc",gray03:"#bdbdbd",gray04:"#f4f4f4",gray05:"#888",gray06:"#666",gray07:"#e5e2e2",gray08:"#F0F3F9",black:"#212121",pink01:"#FFDDDD",pink02:"#F48193",pink03:"#FFEBEB"},a9={flex:(t="flex-start",e="flex-start")=>`
    display: flex;
    align-items: ${t};
    justify-content: ${e}
  `},o9={colors:s9,mixin:a9};KR.createRoot(document.getElementById("root")).render(_.jsx(q.StrictMode,{children:_.jsxs(_D,{theme:o9,children:[_.jsx(JU,{}),_.jsx(i9,{})]})}));
