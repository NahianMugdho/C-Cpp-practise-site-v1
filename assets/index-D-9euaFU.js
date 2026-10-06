var $p=Object.defineProperty;var Vp=(e,n,t)=>n in e?$p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ls=(e,n,t)=>Vp(e,typeof n!="symbol"?n+"":n,t);function Vc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}},Wo={},Qc={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),Hp=Symbol.for("react.portal"),Wp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),Yp=Symbol.for("react.suspense"),Jp=Symbol.for("react.memo"),Zp=Symbol.for("react.lazy"),as=Symbol.iterator;function em(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kc=Object.assign,Xc={};function wr(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||qc}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gc(){}Gc.prototype=wr.prototype;function Wa(e,n,t){this.props=e,this.context=n,this.refs=Xc,this.updater=t||qc}var Qa=Wa.prototype=new Gc;Qa.constructor=Wa;Kc(Qa,wr.prototype);Qa.isPureReactComponent=!0;var us=Array.isArray,Yc=Object.prototype.hasOwnProperty,qa={current:null},Jc={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Yc.call(n,r)&&!Jc.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xi,type:e,key:o,ref:l,props:i,_owner:qa.current}}function nm(e,n){return{$$typeof:xi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function tm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ss=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?tm(""+e.key):n.toString(36)}function to(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case xi:case Hp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+yl(l,0):r,us(i)?(t="",e!=null&&(t=e.replace(ss,"$&/")+"/"),to(i,n,t,"",function(s){return s})):i!=null&&(Ka(i)&&(i=nm(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ss,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",us(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+yl(o,a);l+=to(o,n,t,u,i)}else if(u=em(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+yl(o,a++),l+=to(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function zi(e,n,t){if(e==null)return e;var r=[],i=0;return to(e,r,"","",function(o){return n.call(t,o,i++)}),r}function rm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ro={transition:null},im={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ro,ReactCurrentOwner:qa};function ed(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:zi,forEach:function(e,n,t){zi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return zi(e,function(){n++}),n},toArray:function(e){return zi(e,function(n){return n})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=wr;q.Fragment=Wp;q.Profiler=qp;q.PureComponent=Wa;q.StrictMode=Qp;q.Suspense=Yp;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=im;q.act=ed;q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kc({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=qa.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Yc.call(n,u)&&!Jc.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:xi,type:e.type,key:i,ref:o,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:Xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kp,_context:e},e.Consumer=e};q.createElement=Zc;q.createFactory=function(e){var n=Zc.bind(null,e);return n.type=e,n};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Gp,render:e}};q.isValidElement=Ka;q.lazy=function(e){return{$$typeof:Zp,_payload:{_status:-1,_result:e},_init:rm}};q.memo=function(e,n){return{$$typeof:Jp,type:e,compare:n===void 0?null:n}};q.startTransition=function(e){var n=ro.transition;ro.transition={};try{e()}finally{ro.transition=n}};q.unstable_act=ed;q.useCallback=function(e,n){return $e.current.useCallback(e,n)};q.useContext=function(e){return $e.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};q.useEffect=function(e,n){return $e.current.useEffect(e,n)};q.useId=function(){return $e.current.useId()};q.useImperativeHandle=function(e,n,t){return $e.current.useImperativeHandle(e,n,t)};q.useInsertionEffect=function(e,n){return $e.current.useInsertionEffect(e,n)};q.useLayoutEffect=function(e,n){return $e.current.useLayoutEffect(e,n)};q.useMemo=function(e,n){return $e.current.useMemo(e,n)};q.useReducer=function(e,n,t){return $e.current.useReducer(e,n,t)};q.useRef=function(e){return $e.current.useRef(e)};q.useState=function(e){return $e.current.useState(e)};q.useSyncExternalStore=function(e,n,t){return $e.current.useSyncExternalStore(e,n,t)};q.useTransition=function(){return $e.current.useTransition()};q.version="18.3.1";Qc.exports=q;var C=Qc.exports;const Qo=Hc(C),om=Vc({__proto__:null,default:Qo},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=C,am=Symbol.for("react.element"),um=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,cm=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dm={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)sm.call(n,r)&&!dm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:am,type:e,key:o,ref:l,props:i,_owner:cm.current}}Wo.Fragment=um;Wo.jsx=nd;Wo.jsxs=nd;Wc.exports=Wo;var c=Wc.exports,td={exports:{}},on={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,$){var V=L.length;L.push($);e:for(;0<V;){var J=V-1>>>1,ne=L[J];if(0<i(ne,$))L[J]=$,L[V]=ne,V=J;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var $=L[0],V=L.pop();if(V!==$){L[0]=V;e:for(var J=0,ne=L.length,mn=ne>>>1;J<mn;){var Je=2*(J+1)-1,Oe=L[Je],Ae=Je+1,an=L[Ae];if(0>i(Oe,V))Ae<ne&&0>i(an,Oe)?(L[J]=an,L[Ae]=V,J=Ae):(L[J]=Oe,L[Je]=V,J=Je);else if(Ae<ne&&0>i(an,V))L[J]=an,L[Ae]=V,J=Ae;else break e}}return $}function i(L,$){var V=L.sortIndex-$.sortIndex;return V!==0?V:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,p=null,m=3,N=!1,x=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var $=t(s);$!==null;){if($.callback===null)r(s);else if($.startTime<=L)r(s),$.sortIndex=$.expirationTime,n(u,$);else break;$=t(s)}}function j(L){if(S=!1,v(L),!x)if(t(u)!==null)x=!0,X(R);else{var $=t(s);$!==null&&Ee(j,$.startTime-L)}}function R(L,$){x=!1,S&&(S=!1,g(E),E=-1),N=!0;var V=m;try{for(v($),p=t(u);p!==null&&(!(p.expirationTime>$)||L&&!K());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var ne=J(p.expirationTime<=$);$=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===t(u)&&r(u),v($)}else r(u);p=t(u)}if(p!==null)var mn=!0;else{var Je=t(s);Je!==null&&Ee(j,Je.startTime-$),mn=!1}return mn}finally{p=null,m=V,N=!1}}var z=!1,y=null,E=-1,B=5,T=-1;function K(){return!(e.unstable_now()-T<B)}function ie(){if(y!==null){var L=e.unstable_now();T=L;var $=!0;try{$=y(!0,L)}finally{$?ye():(z=!1,y=null)}}else z=!1}var ye;if(typeof d=="function")ye=function(){d(ie)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ye=ke.port2;ke.port1.onmessage=ie,ye=function(){Ye.postMessage(null)}}else ye=function(){_(ie,0)};function X(L){y=L,z||(z=!0,ye())}function Ee(L,$){E=_(function(){L(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||N||(x=!0,X(R))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var V=m;m=$;try{return L()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=m;m=L;try{return $()}finally{m=V}},e.unstable_scheduleCallback=function(L,$,V){var J=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,L={id:f++,callback:$,priorityLevel:L,startTime:V,expirationTime:ne,sortIndex:-1},V>J?(L.sortIndex=V,n(s,L),t(u)===null&&L===t(s)&&(S?(g(E),E=-1):S=!0,Ee(j,V-J))):(L.sortIndex=ne,n(u,L),x||N||(x=!0,X(R))),L},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(L){var $=m;return function(){var V=m;m=$;try{return L.apply(this,arguments)}finally{m=V}}}})(id);rd.exports=id;var fm=rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=C,rn=fm;function D(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,ei={};function It(e,n){sr(e,n),sr(e+"Capture",n)}function sr(e,n){for(ei[e]=n,e=0;e<n.length;e++)od.add(n[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cs={},ds={};function hm(e){return Xl.call(ds,e)?!0:Xl.call(cs,e)?!1:mm.test(e)?ds[e]=!0:(cs[e]=!0,!1)}function gm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vm(e,n,t,r){if(n===null||typeof n>"u"||gm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ve(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Te[n]=new Ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Xa,Ga);Te[n]=new Ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Xa,Ga);Te[n]=new Ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Xa,Ga);Te[n]=new Ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,n,t,r){var i=Te.hasOwnProperty(n)?Te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(vm(n,t,i,r)&&(t=null),r||i===null?hm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Hn=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ad=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),fs=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,wl;function Ar(e){if(wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wl=n&&n[1]||""}return`
`+wl+e}var xl=!1;function Nl(e,n){if(!e||xl)return"";xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ar(e):""}function ym(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Wt:return"Portal";case Gl:return"Profiler";case Ja:return"StrictMode";case Yl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case Za:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return n=e.displayName||null,n!==null?n:Zl(e.type)||"Memo";case Gn:n=e._payload,e=e._init;try{return Zl(e(n))}catch{}}return null}function wm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(n);case 8:return n===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xm(e){var n=sd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ii(e){e._valueTracker||(e._valueTracker=xm(e))}function cd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=sd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,n){var t=n.checked;return pe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ps(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function dd(e,n){n=n.checked,n!=null&&Ya(e,"checked",n,!1)}function na(e,n){dd(e,n);var t=dt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ta(e,n.type,t):n.hasOwnProperty("defaultValue")&&ta(e,n.type,dt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ms(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ta(e,n,t){(n!=="number"||vo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ur=Array.isArray;function rr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ra(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(D(91));return pe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(D(92));if(Ur(t)){if(1<t.length)throw Error(D(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dt(t)}}function fd(e,n){var t=dt(n.value),r=dt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function gs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ni(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nm=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Nm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vr[n]=Vr[e]})});function hd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+n).trim():n+"px"}function gd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=hd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Sm=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,n){if(n){if(Sm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(D(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(D(61))}if(n.style!=null&&typeof n.style!="object")throw Error(D(62))}}function la(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,ir=null,or=null;function vs(e){if(e=ki(e)){if(typeof ua!="function")throw Error(D(280));var n=e.stateNode;n&&(n=Yo(n),ua(e.stateNode,e.type,n))}}function vd(e){ir?or?or.push(e):or=[e]:ir=e}function yd(){if(ir){var e=ir,n=or;if(or=ir=null,vs(e),n)for(e=0;e<n.length;e++)vs(n[e])}}function wd(e,n){return e(n)}function xd(){}var Sl=!1;function Nd(e,n,t){if(Sl)return e(n,t);Sl=!0;try{return wd(e,n,t)}finally{Sl=!1,(ir!==null||or!==null)&&(xd(),yd())}}function ti(e,n){var t=e.stateNode;if(t===null)return null;var r=Yo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(D(231,n,typeof t));return t}var sa=!1;if(Un)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){sa=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{sa=!1}function km(e,n,t,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(f){this.onError(f)}}var Hr=!1,yo=null,wo=!1,ca=null,jm={onError:function(e){Hr=!0,yo=e}};function Cm(e,n,t,r,i,o,l,a,u){Hr=!1,yo=null,km.apply(jm,arguments)}function Em(e,n,t,r,i,o,l,a,u){if(Cm.apply(this,arguments),Hr){if(Hr){var s=yo;Hr=!1,yo=null}else throw Error(D(198));wo||(wo=!0,ca=s)}}function Ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ys(e){if(Ot(e)!==e)throw Error(D(188))}function Pm(e){var n=e.alternate;if(!n){if(n=Ot(e),n===null)throw Error(D(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ys(i),e;if(o===r)return ys(i),n;o=o.sibling}throw Error(D(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(t.alternate!==r)throw Error(D(190))}if(t.tag!==3)throw Error(D(188));return t.stateNode.current===t?e:n}function kd(e){return e=Pm(e),e!==null?jd(e):null}function jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=jd(e);if(n!==null)return n;e=e.sibling}return null}var Cd=rn.unstable_scheduleCallback,ws=rn.unstable_cancelCallback,Lm=rn.unstable_shouldYield,Rm=rn.unstable_requestPaint,we=rn.unstable_now,Dm=rn.unstable_getCurrentPriorityLevel,tu=rn.unstable_ImmediatePriority,Ed=rn.unstable_UserBlockingPriority,xo=rn.unstable_NormalPriority,_m=rn.unstable_LowPriority,Pd=rn.unstable_IdlePriority,qo=null,Pn=null;function Tm(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:Fm,Mm=Math.log,zm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Mm(e)/zm|0)|0}var Ai=64,Ui=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=br(a):(o&=l,o!==0&&(r=br(o)))}else l=t&~i,l!==0?r=br(l):o!==0&&(r=br(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-xn(n),i=1<<t,r|=e[t],n&=~i;return r}function Im(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xn(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=Im(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ld(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function kl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ni(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-xn(n),e[n]=t}function Am(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-xn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function ru(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-xn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var re=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dd,iu,_d,Td,Md,fa=!1,bi=[],rt=null,it=null,ot=null,ri=new Map,ii=new Map,Jn=[],Um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":ri.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(n.pointerId)}}function Rr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ki(n),n!==null&&iu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bm(e,n,t,r,i){switch(n){case"focusin":return rt=Rr(rt,e,n,t,r,i),!0;case"dragenter":return it=Rr(it,e,n,t,r,i),!0;case"mouseover":return ot=Rr(ot,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return ri.set(o,Rr(ri.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ii.set(o,Rr(ii.get(o)||null,e,n,t,r,i)),!0}return!1}function zd(e){var n=jt(e.target);if(n!==null){var t=Ot(n);if(t!==null){if(n=t.tag,n===13){if(n=Sd(t),n!==null){e.blockedOn=n,Md(e.priority,function(){_d(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);aa=r,t.target.dispatchEvent(r),aa=null}else return n=ki(t),n!==null&&iu(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){io(e)&&t.delete(n)}function Bm(){fa=!1,rt!==null&&io(rt)&&(rt=null),it!==null&&io(it)&&(it=null),ot!==null&&io(ot)&&(ot=null),ri.forEach(Ns),ii.forEach(Ns)}function Dr(e,n){e.blockedOn===n&&(e.blockedOn=null,fa||(fa=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Bm)))}function oi(e){function n(i){return Dr(i,e)}if(0<bi.length){Dr(bi[0],e);for(var t=1;t<bi.length;t++){var r=bi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&Dr(rt,e),it!==null&&Dr(it,e),ot!==null&&Dr(ot,e),ri.forEach(n),ii.forEach(n),t=0;t<Jn.length;t++)r=Jn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)zd(t),t.blockedOn===null&&Jn.shift()}var lr=Hn.ReactCurrentBatchConfig,So=!0;function $m(e,n,t,r){var i=re,o=lr.transition;lr.transition=null;try{re=1,ou(e,n,t,r)}finally{re=i,lr.transition=o}}function Vm(e,n,t,r){var i=re,o=lr.transition;lr.transition=null;try{re=4,ou(e,n,t,r)}finally{re=i,lr.transition=o}}function ou(e,n,t,r){if(So){var i=pa(e,n,t,r);if(i===null)Ml(e,n,r,ko,t),xs(e,r);else if(bm(i,e,n,t,r))r.stopPropagation();else if(xs(e,r),n&4&&-1<Um.indexOf(e)){for(;i!==null;){var o=ki(i);if(o!==null&&Dd(o),o=pa(e,n,t,r),o===null&&Ml(e,n,r,ko,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ml(e,n,r,null,t)}}var ko=null;function pa(e,n,t,r){if(ko=null,e=nu(r),e=jt(e),e!==null)if(n=Ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ko=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dm()){case tu:return 1;case Ed:return 4;case xo:case _m:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var et=null,lu=null,oo=null;function Id(){if(oo)return oo;var e,n=lu,t=n.length,r,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return oo=i.slice(e,1<r?1-r:void 0)}function lo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Ss(){return!1}function ln(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:Ss,this.isPropagationStopped=Ss,this}return pe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),n}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=ln(xr),Si=pe({},xr,{view:0,detail:0}),Hm=ln(Si),jl,Cl,_r,Ko=pe({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(jl=e.screenX-_r.screenX,Cl=e.screenY-_r.screenY):Cl=jl=0,_r=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),ks=ln(Ko),Wm=pe({},Ko,{dataTransfer:0}),Qm=ln(Wm),qm=pe({},Si,{relatedTarget:0}),El=ln(qm),Km=pe({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xm=ln(Km),Gm=pe({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=ln(Gm),Jm=pe({},xr,{data:0}),js=ln(Jm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nh[e])?!!n[e]:!1}function uu(){return th}var rh=pe({},Si,{key:function(e){if(e.key){var n=Zm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=ln(rh),oh=pe({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=ln(oh),lh=pe({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),ah=ln(lh),uh=pe({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=ln(uh),ch=pe({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=ln(ch),fh=[9,13,27,32],su=Un&&"CompositionEvent"in window,Wr=null;Un&&"documentMode"in document&&(Wr=document.documentMode);var ph=Un&&"TextEvent"in window&&!Wr,Od=Un&&(!su||Wr&&8<Wr&&11>=Wr),Es=" ",Ps=!1;function Ad(e,n){switch(e){case"keyup":return fh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function mh(e,n){switch(e){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(Ps=!0,Es);case"textInput":return e=n.data,e===Es&&Ps?null:e;default:return null}}function hh(e,n){if(qt)return e==="compositionend"||!su&&Ad(e,n)?(e=Id(),oo=lu=et=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gh[e.type]:n==="textarea"}function bd(e,n,t,r){vd(r),n=jo(n,"onChange"),0<n.length&&(t=new au("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Qr=null,li=null;function vh(e){Yd(e,0)}function Xo(e){var n=Gt(e);if(cd(n))return e}function yh(e,n){if(e==="change")return n}var Bd=!1;if(Un){var Pl;if(Un){var Ll="oninput"in document;if(!Ll){var Rs=document.createElement("div");Rs.setAttribute("oninput","return;"),Ll=typeof Rs.oninput=="function"}Pl=Ll}else Pl=!1;Bd=Pl&&(!document.documentMode||9<document.documentMode)}function Ds(){Qr&&(Qr.detachEvent("onpropertychange",$d),li=Qr=null)}function $d(e){if(e.propertyName==="value"&&Xo(li)){var n=[];bd(n,li,e,nu(e)),Nd(vh,n)}}function wh(e,n,t){e==="focusin"?(Ds(),Qr=n,li=t,Qr.attachEvent("onpropertychange",$d)):e==="focusout"&&Ds()}function xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(li)}function Nh(e,n){if(e==="click")return Xo(n)}function Sh(e,n){if(e==="input"||e==="change")return Xo(n)}function kh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:kh;function ai(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Xl.call(n,i)||!Sn(e[i],n[i]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,n){var t=_s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_s(t)}}function Vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hd(){for(var e=window,n=vo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vo(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jh(e){var n=Hd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vd(t.ownerDocument.documentElement,t)){if(r!==null&&cu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ts(t,o);var l=Ts(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=Un&&"documentMode"in document&&11>=document.documentMode,Kt=null,ma=null,qr=null,ha=!1;function Ms(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ha||Kt==null||Kt!==vo(r)||(r=Kt,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&ai(qr,r)||(qr=r,r=jo(ma,"onSelect"),0<r.length&&(n=new au("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kt)))}function $i(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xt={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},Rl={},Wd={};Un&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Go(e){if(Rl[e])return Rl[e];if(!Xt[e])return e;var n=Xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wd)return Rl[e]=n[t];return e}var Qd=Go("animationend"),qd=Go("animationiteration"),Kd=Go("animationstart"),Xd=Go("transitionend"),Gd=new Map,zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,n){Gd.set(e,n),It(n,[e])}for(var Dl=0;Dl<zs.length;Dl++){var _l=zs[Dl],Eh=_l.toLowerCase(),Ph=_l[0].toUpperCase()+_l.slice(1);pt(Eh,"on"+Ph)}pt(Qd,"onAnimationEnd");pt(qd,"onAnimationIteration");pt(Kd,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Xd,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Fs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Em(r,n,void 0,e),e.currentTarget=null}function Yd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Fs(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Fs(i,a,s),o=u}}}if(wo)throw e=ca,wo=!1,ca=null,e}function ae(e,n){var t=n[xa];t===void 0&&(t=n[xa]=new Set);var r=e+"__bubble";t.has(r)||(Jd(n,e,2,!1),t.add(r))}function Tl(e,n,t){var r=0;n&&(r|=4),Jd(t,e,r,n)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ui(e){if(!e[Vi]){e[Vi]=!0,od.forEach(function(t){t!=="selectionchange"&&(Lh.has(t)||Tl(t,!1,e),Tl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vi]||(n[Vi]=!0,Tl("selectionchange",!1,n))}}function Jd(e,n,t,r){switch(Fd(n)){case 1:var i=$m;break;case 4:i=Vm;break;default:i=ou}t=i.bind(null,n,t,e),i=void 0,!sa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ml(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=jt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Nd(function(){var s=o,f=nu(t),p=[];e:{var m=Gd.get(e);if(m!==void 0){var N=au,x=e;switch(e){case"keypress":if(lo(t)===0)break e;case"keydown":case"keyup":N=ih;break;case"focusin":x="focus",N=El;break;case"focusout":x="blur",N=El;break;case"beforeblur":case"afterblur":N=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ah;break;case Qd:case qd:case Kd:N=Xm;break;case Xd:N=sh;break;case"scroll":N=Hm;break;case"wheel":N=dh;break;case"copy":case"cut":case"paste":N=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Cs}var S=(n&4)!==0,_=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var d=s,v;d!==null;){v=d;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,g!==null&&(j=ti(d,g),j!=null&&S.push(si(d,j,v)))),_)break;d=d.return}0<S.length&&(m=new N(m,x,null,t,f),p.push({event:m,listeners:S}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",m&&t!==aa&&(x=t.relatedTarget||t.fromElement)&&(jt(x)||x[bn]))break e;if((N||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,N?(x=t.relatedTarget||t.toElement,N=s,x=x?jt(x):null,x!==null&&(_=Ot(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(N=null,x=s),N!==x)){if(S=ks,j="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Cs,j="onPointerLeave",g="onPointerEnter",d="pointer"),_=N==null?m:Gt(N),v=x==null?m:Gt(x),m=new S(j,d+"leave",N,t,f),m.target=_,m.relatedTarget=v,j=null,jt(f)===s&&(S=new S(g,d+"enter",x,t,f),S.target=v,S.relatedTarget=_,j=S),_=j,N&&x)n:{for(S=N,g=x,d=0,v=S;v;v=Vt(v))d++;for(v=0,j=g;j;j=Vt(j))v++;for(;0<d-v;)S=Vt(S),d--;for(;0<v-d;)g=Vt(g),v--;for(;d--;){if(S===g||g!==null&&S===g.alternate)break n;S=Vt(S),g=Vt(g)}S=null}else S=null;N!==null&&Is(p,m,N,S,!1),x!==null&&_!==null&&Is(p,_,x,S,!0)}}e:{if(m=s?Gt(s):window,N=m.nodeName&&m.nodeName.toLowerCase(),N==="select"||N==="input"&&m.type==="file")var R=yh;else if(Ls(m))if(Bd)R=Sh;else{R=xh;var z=wh}else(N=m.nodeName)&&N.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=Nh);if(R&&(R=R(e,s))){bd(p,R,t,f);break e}z&&z(e,m,s),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&ta(m,"number",m.value)}switch(z=s?Gt(s):window,e){case"focusin":(Ls(z)||z.contentEditable==="true")&&(Kt=z,ma=s,qr=null);break;case"focusout":qr=ma=Kt=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Ms(p,t,f);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Ms(p,t,f)}var y;if(su)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else qt?Ad(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Od&&t.locale!=="ko"&&(qt||E!=="onCompositionStart"?E==="onCompositionEnd"&&qt&&(y=Id()):(et=f,lu="value"in et?et.value:et.textContent,qt=!0)),z=jo(s,E),0<z.length&&(E=new js(E,e,null,t,f),p.push({event:E,listeners:z}),y?E.data=y:(y=Ud(t),y!==null&&(E.data=y)))),(y=ph?mh(e,t):hh(e,t))&&(s=jo(s,"onBeforeInput"),0<s.length&&(f=new js("onBeforeInput","beforeinput",null,t,f),p.push({event:f,listeners:s}),f.data=y))}Yd(p,n)})}function si(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ti(e,t),o!=null&&r.unshift(si(e,o,i)),o=ti(e,n),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Is(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=ti(t,o),u!=null&&l.unshift(si(t,u,a))):i||(u=ti(t,o),u!=null&&l.push(si(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Rh=/\r\n?/g,Dh=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(Rh,`
`).replace(Dh,"")}function Hi(e,n,t){if(n=Os(n),Os(e)!==n&&t)throw Error(D(425))}function Co(){}var ga=null,va=null;function ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,Th=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(Mh)}:wa;function Mh(e){setTimeout(function(){throw e})}function zl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),oi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);oi(n)}function lt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Us(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),En="__reactFiber$"+Nr,ci="__reactProps$"+Nr,bn="__reactContainer$"+Nr,xa="__reactEvents$"+Nr,zh="__reactListeners$"+Nr,Fh="__reactHandles$"+Nr;function jt(e){var n=e[En];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[En]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Us(e);e!==null;){if(t=e[En])return t;e=Us(e)}return n}e=t,t=e.parentNode}return null}function ki(e){return e=e[En]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Yo(e){return e[ci]||null}var Na=[],Yt=-1;function mt(e){return{current:e}}function ue(e){0>Yt||(e.current=Na[Yt],Na[Yt]=null,Yt--)}function le(e,n){Yt++,Na[Yt]=e.current,e.current=n}var ft={},Ie=mt(ft),Ke=mt(!1),Dt=ft;function cr(e,n){var t=e.type.contextTypes;if(!t)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Eo(){ue(Ke),ue(Ie)}function bs(e,n,t){if(Ie.current!==ft)throw Error(D(168));le(Ie,n),le(Ke,t)}function Zd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(D(108,wm(e)||"Unknown",i));return pe({},t,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Dt=Ie.current,le(Ie,e),le(Ke,Ke.current),!0}function Bs(e,n,t){var r=e.stateNode;if(!r)throw Error(D(169));t?(e=Zd(e,n,Dt),r.__reactInternalMemoizedMergedChildContext=e,ue(Ke),ue(Ie),le(Ie,e)):ue(Ke),le(Ke,t)}var zn=null,Jo=!1,Fl=!1;function ef(e){zn===null?zn=[e]:zn.push(e)}function Ih(e){Jo=!0,ef(e)}function ht(){if(!Fl&&zn!==null){Fl=!0;var e=0,n=re;try{var t=zn;for(re=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,Jo=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),Cd(tu,ht),i}finally{re=n,Fl=!1}}return null}var Jt=[],Zt=0,Lo=null,Ro=0,un=[],sn=0,_t=null,Fn=1,In="";function xt(e,n){Jt[Zt++]=Ro,Jt[Zt++]=Lo,Lo=e,Ro=n}function nf(e,n,t){un[sn++]=Fn,un[sn++]=In,un[sn++]=_t,_t=e;var r=Fn;e=In;var i=32-xn(r)-1;r&=~(1<<i),t+=1;var o=32-xn(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Fn=1<<32-xn(n)+i|t<<i|r,In=o+e}else Fn=1<<o|t<<i|r,In=e}function du(e){e.return!==null&&(xt(e,1),nf(e,1,0))}function fu(e){for(;e===Lo;)Lo=Jt[--Zt],Jt[Zt]=null,Ro=Jt[--Zt],Jt[Zt]=null;for(;e===_t;)_t=un[--sn],un[sn]=null,In=un[--sn],un[sn]=null,Fn=un[--sn],un[sn]=null}var tn=null,nn=null,ce=!1,wn=null;function tf(e,n){var t=cn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function $s(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,tn=e,nn=lt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,tn=e,nn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_t!==null?{id:Fn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=cn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,tn=e,nn=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(ce){var n=nn;if(n){var t=n;if(!$s(e,n)){if(Sa(e))throw Error(D(418));n=lt(t.nextSibling);var r=tn;n&&$s(e,n)?tf(r,t):(e.flags=e.flags&-4097|2,ce=!1,tn=e)}}else{if(Sa(e))throw Error(D(418));e.flags=e.flags&-4097|2,ce=!1,tn=e}}}function Vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function Wi(e){if(e!==tn)return!1;if(!ce)return Vs(e),ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ya(e.type,e.memoizedProps)),n&&(n=nn)){if(Sa(e))throw rf(),Error(D(418));for(;n;)tf(e,n),n=lt(n.nextSibling)}if(Vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){nn=lt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}nn=null}}else nn=tn?lt(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=nn;e;)e=lt(e.nextSibling)}function dr(){nn=tn=null,ce=!1}function pu(e){wn===null?wn=[e]:wn.push(e)}var Oh=Hn.ReactCurrentBatchConfig;function Tr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(D(309));var r=t.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(D(284));if(!t._owner)throw Error(D(290,e))}return e}function Qi(e,n){throw e=Object.prototype.toString.call(n),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hs(e){var n=e._init;return n(e._payload)}function of(e){function n(g,d){if(e){var v=g.deletions;v===null?(g.deletions=[d],g.flags|=16):v.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=ct(g,d),g.index=0,g.sibling=null,g}function o(g,d,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<d?(g.flags|=2,d):v):(g.flags|=2,d)):(g.flags|=1048576,d)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,v,j){return d===null||d.tag!==6?(d=$l(v,g.mode,j),d.return=g,d):(d=i(d,v),d.return=g,d)}function u(g,d,v,j){var R=v.type;return R===Qt?f(g,d,v.props.children,j,v.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gn&&Hs(R)===d.type)?(j=i(d,v.props),j.ref=Tr(g,d,v),j.return=g,j):(j=mo(v.type,v.key,v.props,null,g.mode,j),j.ref=Tr(g,d,v),j.return=g,j)}function s(g,d,v,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=Vl(v,g.mode,j),d.return=g,d):(d=i(d,v.children||[]),d.return=g,d)}function f(g,d,v,j,R){return d===null||d.tag!==7?(d=Rt(v,g.mode,j,R),d.return=g,d):(d=i(d,v),d.return=g,d)}function p(g,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$l(""+d,g.mode,v),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fi:return v=mo(d.type,d.key,d.props,null,g.mode,v),v.ref=Tr(g,null,d),v.return=g,v;case Wt:return d=Vl(d,g.mode,v),d.return=g,d;case Gn:var j=d._init;return p(g,j(d._payload),v)}if(Ur(d)||Pr(d))return d=Rt(d,g.mode,v,null),d.return=g,d;Qi(g,d)}return null}function m(g,d,v,j){var R=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(g,d,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return v.key===R?u(g,d,v,j):null;case Wt:return v.key===R?s(g,d,v,j):null;case Gn:return R=v._init,m(g,d,R(v._payload),j)}if(Ur(v)||Pr(v))return R!==null?null:f(g,d,v,j,null);Qi(g,v)}return null}function N(g,d,v,j,R){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(v)||null,a(d,g,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Fi:return g=g.get(j.key===null?v:j.key)||null,u(d,g,j,R);case Wt:return g=g.get(j.key===null?v:j.key)||null,s(d,g,j,R);case Gn:var z=j._init;return N(g,d,v,z(j._payload),R)}if(Ur(j)||Pr(j))return g=g.get(v)||null,f(d,g,j,R,null);Qi(d,j)}return null}function x(g,d,v,j){for(var R=null,z=null,y=d,E=d=0,B=null;y!==null&&E<v.length;E++){y.index>E?(B=y,y=null):B=y.sibling;var T=m(g,y,v[E],j);if(T===null){y===null&&(y=B);break}e&&y&&T.alternate===null&&n(g,y),d=o(T,d,E),z===null?R=T:z.sibling=T,z=T,y=B}if(E===v.length)return t(g,y),ce&&xt(g,E),R;if(y===null){for(;E<v.length;E++)y=p(g,v[E],j),y!==null&&(d=o(y,d,E),z===null?R=y:z.sibling=y,z=y);return ce&&xt(g,E),R}for(y=r(g,y);E<v.length;E++)B=N(y,g,E,v[E],j),B!==null&&(e&&B.alternate!==null&&y.delete(B.key===null?E:B.key),d=o(B,d,E),z===null?R=B:z.sibling=B,z=B);return e&&y.forEach(function(K){return n(g,K)}),ce&&xt(g,E),R}function S(g,d,v,j){var R=Pr(v);if(typeof R!="function")throw Error(D(150));if(v=R.call(v),v==null)throw Error(D(151));for(var z=R=null,y=d,E=d=0,B=null,T=v.next();y!==null&&!T.done;E++,T=v.next()){y.index>E?(B=y,y=null):B=y.sibling;var K=m(g,y,T.value,j);if(K===null){y===null&&(y=B);break}e&&y&&K.alternate===null&&n(g,y),d=o(K,d,E),z===null?R=K:z.sibling=K,z=K,y=B}if(T.done)return t(g,y),ce&&xt(g,E),R;if(y===null){for(;!T.done;E++,T=v.next())T=p(g,T.value,j),T!==null&&(d=o(T,d,E),z===null?R=T:z.sibling=T,z=T);return ce&&xt(g,E),R}for(y=r(g,y);!T.done;E++,T=v.next())T=N(y,g,E,T.value,j),T!==null&&(e&&T.alternate!==null&&y.delete(T.key===null?E:T.key),d=o(T,d,E),z===null?R=T:z.sibling=T,z=T);return e&&y.forEach(function(ie){return n(g,ie)}),ce&&xt(g,E),R}function _(g,d,v,j){if(typeof v=="object"&&v!==null&&v.type===Qt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:e:{for(var R=v.key,z=d;z!==null;){if(z.key===R){if(R=v.type,R===Qt){if(z.tag===7){t(g,z.sibling),d=i(z,v.props.children),d.return=g,g=d;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gn&&Hs(R)===z.type){t(g,z.sibling),d=i(z,v.props),d.ref=Tr(g,z,v),d.return=g,g=d;break e}t(g,z);break}else n(g,z);z=z.sibling}v.type===Qt?(d=Rt(v.props.children,g.mode,j,v.key),d.return=g,g=d):(j=mo(v.type,v.key,v.props,null,g.mode,j),j.ref=Tr(g,d,v),j.return=g,g=j)}return l(g);case Wt:e:{for(z=v.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){t(g,d.sibling),d=i(d,v.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=Vl(v,g.mode,j),d.return=g,g=d}return l(g);case Gn:return z=v._init,_(g,d,z(v._payload),j)}if(Ur(v))return x(g,d,v,j);if(Pr(v))return S(g,d,v,j);Qi(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(t(g,d.sibling),d=i(d,v),d.return=g,g=d):(t(g,d),d=$l(v,g.mode,j),d.return=g,g=d),l(g)):t(g,d)}return _}var fr=of(!0),lf=of(!1),Do=mt(null),_o=null,er=null,mu=null;function hu(){mu=er=_o=null}function gu(e){var n=Do.current;ue(Do),e._currentValue=n}function ja(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ar(e,n){_o=e,mu=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(qe=!0),e.firstContext=null)}function fn(e){var n=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:n,next:null},er===null){if(_o===null)throw Error(D(308));er=e,_o.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return n}var Ct=null;function vu(e){Ct===null?Ct=[e]:Ct.push(e)}function af(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,vu(n)):(t.next=i.next,i.next=t),n.interleaved=t,Bn(e,r)}function Bn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Yn=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function at(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Bn(e,t)}return i=r.interleaved,i===null?(n.next=n,vu(r)):(n.next=i.next,i.next=n),r.interleaved=n,Bn(e,t)}function ao(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ru(e,t)}}function Ws(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function To(e,n,t,r){var i=e.updateQueue;Yn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;l=0,f=s=u=null,a=o;do{var m=a.lane,N=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(m=n,N=t,S.tag){case 1:if(x=S.payload,typeof x=="function"){p=x.call(N,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,m=typeof x=="function"?x.call(N,p,m):x,m==null)break e;p=pe({},p,m);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else N={eventTime:N,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=N,u=p):f=f.next=N,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Mt|=l,e.lanes=l,e.memoizedState=p}}function Qs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ji={},Ln=mt(ji),di=mt(ji),fi=mt(ji);function Et(e){if(e===ji)throw Error(D(174));return e}function wu(e,n){switch(le(fi,n),le(di,e),le(Ln,ji),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ia(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ia(n,e)}ue(Ln),le(Ln,n)}function pr(){ue(Ln),ue(di),ue(fi)}function sf(e){Et(fi.current);var n=Et(Ln.current),t=ia(n,e.type);n!==t&&(le(di,e),le(Ln,t))}function xu(e){di.current===e&&(ue(Ln),ue(di))}var de=mt(0);function Mo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Il=[];function Nu(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var uo=Hn.ReactCurrentDispatcher,Ol=Hn.ReactCurrentBatchConfig,Tt=0,fe=null,je=null,Pe=null,zo=!1,Kr=!1,pi=0,Ah=0;function Me(){throw Error(D(321))}function Su(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function ku(e,n,t,r,i,o){if(Tt=o,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,uo.current=e===null||e.memoizedState===null?$h:Vh,e=t(r,i),Kr){o=0;do{if(Kr=!1,pi=0,25<=o)throw Error(D(301));o+=1,Pe=je=null,n.updateQueue=null,uo.current=Hh,e=t(r,i)}while(Kr)}if(uo.current=Fo,n=je!==null&&je.next!==null,Tt=0,Pe=je=fe=null,zo=!1,n)throw Error(D(300));return e}function ju(){var e=pi!==0;return pi=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?fe.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function pn(){if(je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=Pe===null?fe.memoizedState:Pe.next;if(n!==null)Pe=n,je=e;else{if(e===null)throw Error(D(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Pe===null?fe.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function mi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=pn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var f=s.lane;if((Tt&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var p={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,fe.lanes|=f,Mt|=f}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,Sn(r,n.memoizedState)||(qe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Mt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ul(e){var n=pn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Sn(o,n.memoizedState)||(qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function cf(){}function df(e,n){var t=fe,r=pn(),i=n(),o=!Sn(r.memoizedState,i);if(o&&(r.memoizedState=i,qe=!0),r=r.queue,Cu(mf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Pe!==null&&Pe.memoizedState.tag&1){if(t.flags|=2048,hi(9,pf.bind(null,t,r,i,n),void 0,null),Le===null)throw Error(D(349));Tt&30||ff(t,n,i)}return i}function ff(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pf(e,n,t,r){n.value=t,n.getSnapshot=r,hf(n)&&gf(e)}function mf(e,n,t){return t(function(){hf(n)&&gf(e)})}function hf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function gf(e){var n=Bn(e,1);n!==null&&Nn(n,e,1,-1)}function qs(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},n.queue=e,e=e.dispatch=Bh.bind(null,fe,e),[n.memoizedState,e]}function hi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function vf(){return pn().memoizedState}function so(e,n,t,r){var i=Cn();fe.flags|=e,i.memoizedState=hi(1|n,t,void 0,r===void 0?null:r)}function Zo(e,n,t,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&Su(r,l.deps)){i.memoizedState=hi(n,t,o,r);return}}fe.flags|=e,i.memoizedState=hi(1|n,t,o,r)}function Ks(e,n){return so(8390656,8,e,n)}function Cu(e,n){return Zo(2048,8,e,n)}function yf(e,n){return Zo(4,2,e,n)}function wf(e,n){return Zo(4,4,e,n)}function xf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Nf(e,n,t){return t=t!=null?t.concat([e]):null,Zo(4,4,xf.bind(null,n,e),t)}function Eu(){}function Sf(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Su(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function kf(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Su(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function jf(e,n,t){return Tt&21?(Sn(t,n)||(t=Ld(),fe.lanes|=t,Mt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=t)}function Uh(e,n){var t=re;re=t!==0&&4>t?t:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),n()}finally{re=t,Ol.transition=r}}function Cf(){return pn().memoizedState}function bh(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ef(e))Pf(n,t);else if(t=af(e,n,t,r),t!==null){var i=Be();Nn(t,e,r,i),Lf(t,n,r)}}function Bh(e,n,t){var r=st(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ef(e))Pf(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,l)){var u=n.interleaved;u===null?(i.next=i,vu(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=af(e,n,i,r),t!==null&&(i=Be(),Nn(t,e,r,i),Lf(t,n,r))}}function Ef(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Pf(e,n){Kr=zo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Lf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ru(e,t)}}var Fo={readContext:fn,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},$h={readContext:fn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Ks,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,so(4194308,4,xf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return so(4194308,4,e,n)},useInsertionEffect:function(e,n){return so(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bh.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:qs,useDebugValue:Eu,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=qs(!1),n=e[0];return e=Uh.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=fe,i=Cn();if(ce){if(t===void 0)throw Error(D(407));t=t()}else{if(t=n(),Le===null)throw Error(D(349));Tt&30||ff(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ks(mf.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,pf.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Cn(),n=Le.identifierPrefix;if(ce){var t=In,r=Fn;t=(r&~(1<<32-xn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=pi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ah++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vh={readContext:fn,useCallback:Sf,useContext:fn,useEffect:Cu,useImperativeHandle:Nf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:kf,useReducer:Al,useRef:vf,useState:function(){return Al(mi)},useDebugValue:Eu,useDeferredValue:function(e){var n=pn();return jf(n,je.memoizedState,e)},useTransition:function(){var e=Al(mi)[0],n=pn().memoizedState;return[e,n]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1},Hh={readContext:fn,useCallback:Sf,useContext:fn,useEffect:Cu,useImperativeHandle:Nf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:kf,useReducer:Ul,useRef:vf,useState:function(){return Ul(mi)},useDebugValue:Eu,useDeferredValue:function(e){var n=pn();return je===null?n.memoizedState=e:jf(n,je.memoizedState,e)},useTransition:function(){var e=Ul(mi)[0],n=pn().memoizedState;return[e,n]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=pe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ca(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:pe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var el={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Be(),i=st(e),o=On(r,i);o.payload=n,t!=null&&(o.callback=t),n=at(e,o,i),n!==null&&(Nn(n,e,i,r),ao(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Be(),i=st(e),o=On(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=at(e,o,i),n!==null&&(Nn(n,e,i,r),ao(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),r=st(e),i=On(t,r);i.tag=2,n!=null&&(i.callback=n),n=at(e,i,r),n!==null&&(Nn(n,e,r,t),ao(n,e,r))}};function Xs(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!ai(t,r)||!ai(i,o):!0}function Rf(e,n,t){var r=!1,i=ft,o=n.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=Xe(n)?Dt:Ie.current,r=n.contextTypes,o=(r=r!=null)?cr(e,i):ft),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=el,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Gs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&el.enqueueReplaceState(n,n.state,null)}function Ea(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},yu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=Xe(n)?Dt:Ie.current,i.context=cr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ca(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&el.enqueueReplaceState(i,i.state,null),To(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,n){try{var t="",r=n;do t+=ym(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function bl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Wh=typeof WeakMap=="function"?WeakMap:Map;function Df(e,n,t){t=On(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oo||(Oo=!0,Oa=r),Pa(e,n)},t}function _f(e,n,t){t=On(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Pa(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Pa(e,n),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ys(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Wh;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=o0.bind(null,e,n,t),n.then(e,e))}function Js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=On(-1,1),n.tag=2,at(t,n,1))),t.lanes|=1),e)}var Qh=Hn.ReactCurrentOwner,qe=!1;function be(e,n,t,r){n.child=e===null?lf(n,null,t,r):fr(n,e.child,t,r)}function ec(e,n,t,r,i){t=t.render;var o=n.ref;return ar(n,i),r=ku(e,n,t,r,o,i),t=ju(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,$n(e,n,i)):(ce&&t&&du(n),n.flags|=1,be(e,n,r,i),n.child)}function nc(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!zu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Tf(e,n,o,r,i)):(e=mo(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:ai,t(l,r)&&e.ref===n.ref)return $n(e,n,i)}return n.flags|=1,e=ct(o,r),e.ref=n.ref,e.return=n,n.child=e}function Tf(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(ai(o,r)&&e.ref===n.ref)if(qe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return n.lanes=e.lanes,$n(e,n,i)}return La(e,n,t,r,i)}function Mf(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(tr,Ze),Ze|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,le(tr,Ze),Ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,le(tr,Ze),Ze|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,le(tr,Ze),Ze|=r;return be(e,n,i,t),n.child}function zf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function La(e,n,t,r,i){var o=Xe(t)?Dt:Ie.current;return o=cr(n,o),ar(n,i),t=ku(e,n,t,r,o,i),r=ju(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,$n(e,n,i)):(ce&&r&&du(n),n.flags|=1,be(e,n,t,i),n.child)}function tc(e,n,t,r,i){if(Xe(t)){var o=!0;Po(n)}else o=!1;if(ar(n,i),n.stateNode===null)co(e,n),Rf(n,t,r),Ea(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,s=t.contextType;typeof s=="object"&&s!==null?s=fn(s):(s=Xe(t)?Dt:Ie.current,s=cr(n,s));var f=t.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Gs(n,l,r,s),Yn=!1;var m=n.memoizedState;l.state=m,To(n,r,l,i),u=n.memoizedState,a!==r||m!==u||Ke.current||Yn?(typeof f=="function"&&(Ca(n,t,f,r),u=n.memoizedState),(a=Yn||Xs(n,t,a,r,m,u,s))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,uf(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:gn(n.type,a),l.props=s,p=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=Xe(t)?Dt:Ie.current,u=cr(n,u));var N=t.getDerivedStateFromProps;(f=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Gs(n,l,r,u),Yn=!1,m=n.memoizedState,l.state=m,To(n,r,l,i);var x=n.memoizedState;a!==p||m!==x||Ke.current||Yn?(typeof N=="function"&&(Ca(n,t,N,r),x=n.memoizedState),(s=Yn||Xs(n,t,s,r,m,x,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ra(e,n,t,r,o,i)}function Ra(e,n,t,r,i,o){zf(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Bs(n,t,!1),$n(e,n,o);r=n.stateNode,Qh.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=fr(n,e.child,null,o),n.child=fr(n,null,a,o)):be(e,n,a,o),n.memoizedState=r.state,i&&Bs(n,t,!0),n.child}function Ff(e){var n=e.stateNode;n.pendingContext?bs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&bs(e,n.context,!1),wu(e,n.containerInfo)}function rc(e,n,t,r,i){return dr(),pu(i),n.flags|=256,be(e,n,t,r),n.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function If(e,n,t){var r=n.pendingProps,i=de.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(de,i&1),e===null)return ka(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=rl(l,r,0,null),e=Rt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=_a(t),n.memoizedState=Da,e):Pu(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qh(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=ct(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=Rt(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?_a(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Da,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Pu(e,n){return n=rl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function qi(e,n,t,r){return r!==null&&pu(r),fr(n,e.child,null,t),e=Pu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qh(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=bl(Error(D(422))),qi(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=Rt(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&fr(n,e.child,null,l),n.child.memoizedState=_a(l),n.memoizedState=Da,o);if(!(n.mode&1))return qi(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=bl(o,r,void 0),qi(e,n,l,r)}if(a=(l&e.childLanes)!==0,qe||a){if(r=Le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bn(e,i),Nn(r,e,i,-1))}return Mu(),r=bl(Error(D(421))),qi(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=l0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,nn=lt(i.nextSibling),tn=n,ce=!0,wn=null,e!==null&&(un[sn++]=Fn,un[sn++]=In,un[sn++]=_t,Fn=e.id,In=e.overflow,_t=n),n=Pu(n,r.children),n.flags|=4096,n)}function ic(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ja(e.return,n,t)}function Bl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Of(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,n,r.children,t),r=de.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,t,n);else if(e.tag===19)ic(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(de,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Mo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Bl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Bl(n,!0,t,null,o);break;case"together":Bl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function co(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function $n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(D(153));if(n.child!==null){for(e=n.child,t=ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Kh(e,n,t){switch(n.tag){case 3:Ff(n),dr();break;case 5:sf(n);break;case 1:Xe(n.type)&&Po(n);break;case 4:wu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;le(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(le(de,de.current&1),n.flags|=128,null):t&n.child.childLanes?If(e,n,t):(le(de,de.current&1),e=$n(e,n,t),e!==null?e.sibling:null);le(de,de.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Of(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(de,de.current),r)break;return null;case 22:case 23:return n.lanes=0,Mf(e,n,t)}return $n(e,n,t)}var Af,Ta,Uf,bf;Af=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ta=function(){};Uf=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Et(Ln.current);var o=null;switch(t){case"input":i=ea(e,i),r=ea(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=ra(e,i),r=ra(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}oa(t,r);var l;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ei.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(ei.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ae("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}t&&(o=o||[]).push("style",t);var s=o;(n.updateQueue=s)&&(n.flags|=4)}};bf=function(e,n,t,r){t!==r&&(n.flags|=4)};function Mr(e,n){if(!ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Xh(e,n,t){var r=n.pendingProps;switch(fu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return Xe(n.type)&&Eo(),ze(n),null;case 3:return r=n.stateNode,pr(),ue(Ke),ue(Ie),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,wn!==null&&(ba(wn),wn=null))),Ta(e,n),ze(n),null;case 5:xu(n);var i=Et(fi.current);if(t=n.type,e!==null&&n.stateNode!=null)Uf(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(D(166));return ze(n),null}if(e=Et(Ln.current),Wi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[En]=n,r[ci]=o,e=(n.mode&1)!==0,t){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)ae(Br[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ps(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":hs(r,o),ae("invalid",r)}oa(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hi(r.textContent,a,e),i=["children",""+a]):ei.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ae("scroll",r)}switch(t){case"input":Ii(r),ms(r,o,!0);break;case"textarea":Ii(r),gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Co)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[En]=n,e[ci]=r,Af(e,n,!1,!1),n.stateNode=e;e:{switch(l=la(t,r),t){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)ae(Br[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":ps(e,r),i=ea(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":hs(e,r),i=ra(e,r),ae("invalid",e);break;default:i=r}oa(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?gd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&md(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ni(e,u):typeof u=="number"&&ni(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ei.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ya(e,o,u,l))}switch(t){case"input":Ii(e),ms(e,r,!1);break;case"textarea":Ii(e),gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Co)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ze(n),null;case 6:if(e&&n.stateNode!=null)bf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(D(166));if(t=Et(fi.current),Et(Ln.current),Wi(n)){if(r=n.stateNode,t=n.memoizedProps,r[En]=n,(o=r.nodeValue!==t)&&(e=tn,e!==null))switch(e.tag){case 3:Hi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[En]=n,n.stateNode=r}return ze(n),null;case 13:if(ue(de),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&nn!==null&&n.mode&1&&!(n.flags&128))rf(),dr(),n.flags|=98560,o=!1;else if(o=Wi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[En]=n}else dr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ze(n),o=!1}else wn!==null&&(ba(wn),wn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||de.current&1?Ce===0&&(Ce=3):Mu())),n.updateQueue!==null&&(n.flags|=4),ze(n),null);case 4:return pr(),Ta(e,n),e===null&&ui(n.stateNode.containerInfo),ze(n),null;case 10:return gu(n.type._context),ze(n),null;case 17:return Xe(n.type)&&Eo(),ze(n),null;case 19:if(ue(de),o=n.memoizedState,o===null)return ze(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Mr(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Mo(e),l!==null){for(n.flags|=128,Mr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return le(de,de.current&1|2),n.child}e=e.sibling}o.tail!==null&&we()>hr&&(n.flags|=128,r=!0,Mr(o,!1),n.lanes=4194304)}else{if(!r)if(e=Mo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ce)return ze(n),null}else 2*we()-o.renderingStartTime>hr&&t!==1073741824&&(n.flags|=128,r=!0,Mr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=we(),n.sibling=null,t=de.current,le(de,r?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return Tu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ze&1073741824&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),null;case 24:return null;case 25:return null}throw Error(D(156,n.tag))}function Gh(e,n){switch(fu(n),n.tag){case 1:return Xe(n.type)&&Eo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pr(),ue(Ke),ue(Ie),Nu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xu(n),null;case 13:if(ue(de),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(D(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(de),null;case 4:return pr(),null;case 10:return gu(n.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Ki=!1,Fe=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,F=null;function nr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ge(e,n,r)}else t.current=null}function Ma(e,n,t){try{t()}catch(r){ge(e,n,r)}}var oc=!1;function Jh(e,n){if(ga=So,e=Hd(),cu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,s=0,f=0,p=e,m=null;n:for(;;){for(var N;p!==t||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(N=p.firstChild)!==null;)m=p,p=N;for(;;){if(p===e)break n;if(m===t&&++s===i&&(a=l),m===o&&++f===r&&(u=l),(N=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=N}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(va={focusedElem:e,selectionRange:t},So=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,_=x.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:gn(n.type,S),_);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(j){ge(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return x=oc,oc=!1,x}function Xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ma(n,t,o)}i=i.next}while(i!==r)}}function nl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function za(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bf(e){var n=e.alternate;n!==null&&(e.alternate=null,Bf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[En],delete n[ci],delete n[xa],delete n[zh],delete n[Fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,n,t),e=e.sibling;e!==null;)Fa(e,n,t),e=e.sibling}function Ia(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,n,t),e=e.sibling;e!==null;)Ia(e,n,t),e=e.sibling}var De=null,vn=!1;function Kn(e,n,t){for(t=t.child;t!==null;)Vf(e,n,t),t=t.sibling}function Vf(e,n,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(qo,t)}catch{}switch(t.tag){case 5:Fe||nr(t,n);case 6:var r=De,i=vn;De=null,Kn(e,n,t),De=r,vn=i,De!==null&&(vn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(vn?(e=De,t=t.stateNode,e.nodeType===8?zl(e.parentNode,t):e.nodeType===1&&zl(e,t),oi(e)):zl(De,t.stateNode));break;case 4:r=De,i=vn,De=t.stateNode.containerInfo,vn=!0,Kn(e,n,t),De=r,vn=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ma(t,n,l),i=i.next}while(i!==r)}Kn(e,n,t);break;case 1:if(!Fe&&(nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ge(t,n,a)}Kn(e,n,t);break;case 21:Kn(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,Kn(e,n,t),Fe=r):Kn(e,n,t);break;default:Kn(e,n,t)}}function ac(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Yh),n.forEach(function(r){var i=a0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function hn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,vn=!1;break e;case 3:De=a.stateNode.containerInfo,vn=!0;break e;case 4:De=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(De===null)throw Error(D(160));Vf(o,l,i),De=null,vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){ge(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hf(n,e),n=n.sibling}function Hf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(n,e),jn(e),r&4){try{Xr(3,e,e.return),nl(3,e)}catch(S){ge(e,e.return,S)}try{Xr(5,e,e.return)}catch(S){ge(e,e.return,S)}}break;case 1:hn(n,e),jn(e),r&512&&t!==null&&nr(t,t.return);break;case 5:if(hn(n,e),jn(e),r&512&&t!==null&&nr(t,t.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(S){ge(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dd(i,o),la(a,l);var s=la(a,o);for(l=0;l<u.length;l+=2){var f=u[l],p=u[l+1];f==="style"?gd(i,p):f==="dangerouslySetInnerHTML"?md(i,p):f==="children"?ni(i,p):Ya(i,f,p,s)}switch(a){case"input":na(i,o);break;case"textarea":fd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?rr(i,!!o.multiple,N,!1):m!==!!o.multiple&&(o.defaultValue!=null?rr(i,!!o.multiple,o.defaultValue,!0):rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ci]=o}catch(S){ge(e,e.return,S)}}break;case 6:if(hn(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ge(e,e.return,S)}}break;case 3:if(hn(n,e),jn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{oi(n.containerInfo)}catch(S){ge(e,e.return,S)}break;case 4:hn(n,e),jn(e);break;case 13:hn(n,e),jn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=we())),r&4&&ac(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(s=Fe)||f,hn(n,e),Fe=s):hn(n,e),jn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(p=F=f;F!==null;){switch(m=F,N=m.child,m.tag){case 0:case 11:case 14:case 15:Xr(4,m,m.return);break;case 1:nr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(S){ge(r,t,S)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){sc(p);continue}}N!==null?(N.return=m,F=N):sc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hd("display",l))}catch(S){ge(e,e.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(S){ge(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hn(n,e),jn(e),r&4&&ac(e);break;case 21:break;default:hn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if($f(t)){var r=t;break e}t=t.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var o=lc(e);Ia(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=lc(e);Fa(e,a,l);break;default:throw Error(D(161))}}catch(u){ge(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zh(e,n,t){F=e,Wf(e)}function Wf(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ki;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Fe;a=Ki;var s=Fe;if(Ki=l,(Fe=u)&&!s)for(F=i;F!==null;)l=F,u=l.child,l.tag===22&&l.memoizedState!==null?cc(i):u!==null?(u.return=l,F=u):cc(i);for(;o!==null;)F=o,Wf(o),o=o.sibling;F=i,Ki=a,Fe=s}uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):uc(e)}}function uc(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||nl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:gn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Qs(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qs(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&oi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Fe||n.flags&512&&za(n)}catch(m){ge(n,n.return,m)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function sc(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function cc(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{nl(4,n)}catch(u){ge(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){ge(n,i,u)}}var o=n.return;try{za(n)}catch(u){ge(n,o,u)}break;case 5:var l=n.return;try{za(n)}catch(u){ge(n,l,u)}}}catch(u){ge(n,n.return,u)}if(n===e){F=null;break}var a=n.sibling;if(a!==null){a.return=n.return,F=a;break}F=n.return}}var e0=Math.ceil,Io=Hn.ReactCurrentDispatcher,Lu=Hn.ReactCurrentOwner,dn=Hn.ReactCurrentBatchConfig,Y=0,Le=null,Se=null,_e=0,Ze=0,tr=mt(0),Ce=0,gi=null,Mt=0,tl=0,Ru=0,Gr=null,We=null,Du=0,hr=1/0,Mn=null,Oo=!1,Oa=null,ut=null,Xi=!1,nt=null,Ao=0,Yr=0,Aa=null,fo=-1,po=0;function Be(){return Y&6?we():fo!==-1?fo:fo=we()}function st(e){return e.mode&1?Y&2&&_e!==0?_e&-_e:Oh.transition!==null?(po===0&&(po=Ld()),po):(e=re,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e):1}function Nn(e,n,t,r){if(50<Yr)throw Yr=0,Aa=null,Error(D(185));Ni(e,t,r),(!(Y&2)||e!==Le)&&(e===Le&&(!(Y&2)&&(tl|=t),Ce===4&&Zn(e,_e)),Ge(e,r),t===1&&Y===0&&!(n.mode&1)&&(hr=we()+500,Jo&&ht()))}function Ge(e,n){var t=e.callbackNode;Om(e,n);var r=No(e,e===Le?_e:0);if(r===0)t!==null&&ws(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ws(t),n===1)e.tag===0?Ih(dc.bind(null,e)):ef(dc.bind(null,e)),Th(function(){!(Y&6)&&ht()}),t=null;else{switch(Rd(r)){case 1:t=tu;break;case 4:t=Ed;break;case 16:t=xo;break;case 536870912:t=Pd;break;default:t=xo}t=Zf(t,Qf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Qf(e,n){if(fo=-1,po=0,Y&6)throw Error(D(327));var t=e.callbackNode;if(ur()&&e.callbackNode!==t)return null;var r=No(e,e===Le?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Uo(e,r);else{n=r;var i=Y;Y|=2;var o=Kf();(Le!==e||_e!==n)&&(Mn=null,hr=we()+500,Lt(e,n));do try{r0();break}catch(a){qf(e,a)}while(!0);hu(),Io.current=o,Y=i,Se!==null?n=0:(Le=null,_e=0,n=Ce)}if(n!==0){if(n===2&&(i=da(e),i!==0&&(r=i,n=Ua(e,i))),n===1)throw t=gi,Lt(e,0),Zn(e,r),Ge(e,we()),t;if(n===6)Zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!n0(i)&&(n=Uo(e,r),n===2&&(o=da(e),o!==0&&(r=o,n=Ua(e,o))),n===1))throw t=gi,Lt(e,0),Zn(e,r),Ge(e,we()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(D(345));case 2:Nt(e,We,Mn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=Du+500-we(),10<n)){if(No(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wa(Nt.bind(null,e,We,Mn),n);break}Nt(e,We,Mn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-xn(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e0(r/1960))-r,10<r){e.timeoutHandle=wa(Nt.bind(null,e,We,Mn),r);break}Nt(e,We,Mn);break;case 5:Nt(e,We,Mn);break;default:throw Error(D(329))}}}return Ge(e,we()),e.callbackNode===t?Qf.bind(null,e):null}function Ua(e,n){var t=Gr;return e.current.memoizedState.isDehydrated&&(Lt(e,n).flags|=256),e=Uo(e,n),e!==2&&(n=We,We=t,n!==null&&ba(n)),e}function ba(e){We===null?We=e:We.push.apply(We,e)}function n0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Sn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~Ru,n&=~tl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-xn(n),r=1<<t;e[t]=-1,n&=~r}}function dc(e){if(Y&6)throw Error(D(327));ur();var n=No(e,0);if(!(n&1))return Ge(e,we()),null;var t=Uo(e,n);if(e.tag!==0&&t===2){var r=da(e);r!==0&&(n=r,t=Ua(e,r))}if(t===1)throw t=gi,Lt(e,0),Zn(e,n),Ge(e,we()),t;if(t===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nt(e,We,Mn),Ge(e,we()),null}function _u(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(hr=we()+500,Jo&&ht())}}function zt(e){nt!==null&&nt.tag===0&&!(Y&6)&&ur();var n=Y;Y|=1;var t=dn.transition,r=re;try{if(dn.transition=null,re=1,e)return e()}finally{re=r,dn.transition=t,Y=n,!(Y&6)&&ht()}}function Tu(){Ze=tr.current,ue(tr)}function Lt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_h(t)),Se!==null)for(t=Se.return;t!==null;){var r=t;switch(fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:pr(),ue(Ke),ue(Ie),Nu();break;case 5:xu(r);break;case 4:pr();break;case 13:ue(de);break;case 19:ue(de);break;case 10:gu(r.type._context);break;case 22:case 23:Tu()}t=t.return}if(Le=e,Se=e=ct(e.current,null),_e=Ze=n,Ce=0,gi=null,Ru=tl=Mt=0,We=Gr=null,Ct!==null){for(n=0;n<Ct.length;n++)if(t=Ct[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Ct=null}return e}function qf(e,n){do{var t=Se;try{if(hu(),uo.current=Fo,zo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(Tt=0,Pe=je=fe=null,Kr=!1,pi=0,Lu.current=null,t===null||t.return===null){Ce=1,gi=n,Se=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=_e,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var N=Js(l);if(N!==null){N.flags&=-257,Zs(N,l,a,o,n),N.mode&1&&Ys(o,s,n),n=N,u=s;var x=n.updateQueue;if(x===null){var S=new Set;S.add(u),n.updateQueue=S}else x.add(u);break e}else{if(!(n&1)){Ys(o,s,n),Mu();break e}u=Error(D(426))}}else if(ce&&a.mode&1){var _=Js(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Zs(_,l,a,o,n),pu(mr(u,a));break e}}o=u=mr(u,a),Ce!==4&&(Ce=2),Gr===null?Gr=[o]:Gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=Df(o,u,n);Ws(o,g);break e;case 1:a=u;var d=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ut===null||!ut.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var j=_f(o,a,n);Ws(o,j);break e}}o=o.return}while(o!==null)}Gf(t)}catch(R){n=R,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Kf(){var e=Io.current;return Io.current=Fo,e===null?Fo:e}function Mu(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Le===null||!(Mt&268435455)&&!(tl&268435455)||Zn(Le,_e)}function Uo(e,n){var t=Y;Y|=2;var r=Kf();(Le!==e||_e!==n)&&(Mn=null,Lt(e,n));do try{t0();break}catch(i){qf(e,i)}while(!0);if(hu(),Y=t,Io.current=r,Se!==null)throw Error(D(261));return Le=null,_e=0,Ce}function t0(){for(;Se!==null;)Xf(Se)}function r0(){for(;Se!==null&&!Lm();)Xf(Se)}function Xf(e){var n=Jf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,n===null?Gf(e):Se=n,Lu.current=null}function Gf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Gh(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Se=null;return}}else if(t=Xh(t,n,Ze),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Ce===0&&(Ce=5)}function Nt(e,n,t){var r=re,i=dn.transition;try{dn.transition=null,re=1,i0(e,n,t,r)}finally{dn.transition=i,re=r}return null}function i0(e,n,t,r){do ur();while(nt!==null);if(Y&6)throw Error(D(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Am(e,o),e===Le&&(Se=Le=null,_e=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xi||(Xi=!0,Zf(xo,function(){return ur(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var l=re;re=1;var a=Y;Y|=4,Lu.current=null,Jh(e,t),Hf(t,e),jh(va),So=!!ga,va=ga=null,e.current=t,Zh(t),Rm(),Y=a,re=l,dn.transition=o}else e.current=t;if(Xi&&(Xi=!1,nt=e,Ao=i),o=e.pendingLanes,o===0&&(ut=null),Tm(t.stateNode),Ge(e,we()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oo)throw Oo=!1,e=Oa,Oa=null,e;return Ao&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===Aa?Yr++:(Yr=0,Aa=e):Yr=0,ht(),null}function ur(){if(nt!==null){var e=Rd(Ao),n=dn.transition,t=re;try{if(dn.transition=null,re=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Ao=0,Y&6)throw Error(D(331));var i=Y;for(Y|=4,F=e.current;F!==null;){var o=F,l=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(F=s;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Xr(8,f,o)}var p=f.child;if(p!==null)p.return=f,F=p;else for(;F!==null;){f=F;var m=f.sibling,N=f.return;if(Bf(f),f===s){F=null;break}if(m!==null){m.return=N,F=m;break}F=N}}}var x=o.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}F=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,F=g;break e}F=o.return}}var d=e.current;for(F=d;F!==null;){l=F;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,F=v;else e:for(l=d;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nl(9,a)}}catch(R){ge(a,a.return,R)}if(a===l){F=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,F=j;break e}F=a.return}}if(Y=i,ht(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{re=t,dn.transition=n}}return!1}function fc(e,n,t){n=mr(t,n),n=Df(e,n,1),e=at(e,n,1),n=Be(),e!==null&&(Ni(e,1,n),Ge(e,n))}function ge(e,n,t){if(e.tag===3)fc(e,e,t);else for(;n!==null;){if(n.tag===3){fc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=mr(t,e),e=_f(n,e,1),n=at(n,e,1),e=Be(),n!==null&&(Ni(n,1,e),Ge(n,e));break}}n=n.return}}function o0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(_e&t)===t&&(Ce===4||Ce===3&&(_e&130023424)===_e&&500>we()-Du?Lt(e,0):Ru|=t),Ge(e,n)}function Yf(e,n){n===0&&(e.mode&1?(n=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):n=1);var t=Be();e=Bn(e,n),e!==null&&(Ni(e,n,t),Ge(e,t))}function l0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yf(e,t)}function a0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(n),Yf(e,t)}var Jf;Jf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ke.current)qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return qe=!1,Kh(e,n,t);qe=!!(e.flags&131072)}else qe=!1,ce&&n.flags&1048576&&nf(n,Ro,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;co(e,n),e=n.pendingProps;var i=cr(n,Ie.current);ar(n,t),i=ku(null,n,r,e,i,t);var o=ju();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(r)?(o=!0,Po(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yu(n),i.updater=el,n.stateNode=i,i._reactInternals=n,Ea(n,r,e,t),n=Ra(null,n,r,!0,o,t)):(n.tag=0,ce&&o&&du(n),be(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(co(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=s0(r),e=gn(r,e),i){case 0:n=La(null,n,r,e,t);break e;case 1:n=tc(null,n,r,e,t);break e;case 11:n=ec(null,n,r,e,t);break e;case 14:n=nc(null,n,r,gn(r.type,e),t);break e}throw Error(D(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),La(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),tc(e,n,r,i,t);case 3:e:{if(Ff(n),e===null)throw Error(D(387));r=n.pendingProps,o=n.memoizedState,i=o.element,uf(e,n),To(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=mr(Error(D(423)),n),n=rc(e,n,r,t,i);break e}else if(r!==i){i=mr(Error(D(424)),n),n=rc(e,n,r,t,i);break e}else for(nn=lt(n.stateNode.containerInfo.firstChild),tn=n,ce=!0,wn=null,t=lf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(dr(),r===i){n=$n(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return sf(n),e===null&&ka(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ya(r,i)?l=null:o!==null&&ya(r,o)&&(n.flags|=32),zf(e,n),be(e,n,l,t),n.child;case 6:return e===null&&ka(n),null;case 13:return If(e,n,t);case 4:return wu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=fr(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),ec(e,n,r,i,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,le(Do,r._currentValue),r._currentValue=l,o!==null)if(Sn(o.value,l)){if(o.children===i.children&&!Ke.current){n=$n(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=On(-1,t&-t),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ja(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ja(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}be(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ar(n,t),i=fn(i),r=r(i),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,i=gn(r,n.pendingProps),i=gn(r.type,i),nc(e,n,r,i,t);case 15:return Tf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),co(e,n),n.tag=1,Xe(r)?(e=!0,Po(n)):e=!1,ar(n,t),Rf(n,r,i),Ea(n,r,i,t),Ra(null,n,r,!0,e,t);case 19:return Of(e,n,t);case 22:return Mf(e,n,t)}throw Error(D(156,n.tag))};function Zf(e,n){return Cd(e,n)}function u0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,t,r){return new u0(e,n,t,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s0(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===eu)return 14}return 2}function ct(e,n){var t=e.alternate;return t===null?(t=cn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function mo(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")zu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qt:return Rt(t.children,i,o,n);case Ja:l=8,i|=8;break;case Gl:return e=cn(12,t,n,i|2),e.elementType=Gl,e.lanes=o,e;case Yl:return e=cn(13,t,n,i),e.elementType=Yl,e.lanes=o,e;case Jl:return e=cn(19,t,n,i),e.elementType=Jl,e.lanes=o,e;case ud:return rl(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:l=10;break e;case ad:l=9;break e;case Za:l=11;break e;case eu:l=14;break e;case Gn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return n=cn(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Rt(e,n,t,r){return e=cn(7,e,r,n),e.lanes=t,e}function rl(e,n,t,r){return e=cn(22,e,r,n),e.elementType=ud,e.lanes=t,e.stateNode={isHidden:!1},e}function $l(e,n,t){return e=cn(6,e,null,n),e.lanes=t,e}function Vl(e,n,t){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function c0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,n,t,r,i,o,l,a,u){return e=new c0(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=cn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function d0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ep(e){if(!e)return ft;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(D(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(D(171))}if(e.tag===1){var t=e.type;if(Xe(t))return Zd(e,t,n)}return n}function np(e,n,t,r,i,o,l,a,u){return e=Fu(t,r,!0,e,i,o,l,a,u),e.context=ep(null),t=e.current,r=Be(),i=st(t),o=On(r,i),o.callback=n??null,at(t,o,i),e.current.lanes=i,Ni(e,i,r),Ge(e,r),e}function il(e,n,t,r){var i=n.current,o=Be(),l=st(i);return t=ep(t),n.context===null?n.context=t:n.pendingContext=t,n=On(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=at(i,n,l),e!==null&&(Nn(e,i,l,o),ao(e,i,l)),l}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Iu(e,n){pc(e,n),(e=e.alternate)&&pc(e,n)}function f0(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}ol.prototype.render=Ou.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(D(409));il(e,n,null,null)};ol.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){il(null,e,null,null)}),n[bn]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var n=Td();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Jn.length&&n!==0&&n<Jn[t].priority;t++);Jn.splice(t,0,e),t===0&&zd(e)}};function Au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function p0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=bo(l);o.call(s)}}var l=np(n,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=l,e[bn]=l.current,ui(e.nodeType===8?e.parentNode:e),zt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=bo(u);a.call(s)}}var u=Fu(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=u,e[bn]=u.current,ui(e.nodeType===8?e.parentNode:e),zt(function(){il(n,u,t,r)}),u}function al(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=bo(l);a.call(u)}}il(n,l,e,i)}else l=p0(t,n,e,i,r);return bo(l)}Dd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=br(n.pendingLanes);t!==0&&(ru(n,t|1),Ge(n,we()),!(Y&6)&&(hr=we()+500,ht()))}break;case 13:zt(function(){var r=Bn(e,1);if(r!==null){var i=Be();Nn(r,e,1,i)}}),Iu(e,1)}};iu=function(e){if(e.tag===13){var n=Bn(e,134217728);if(n!==null){var t=Be();Nn(n,e,134217728,t)}Iu(e,134217728)}};_d=function(e){if(e.tag===13){var n=st(e),t=Bn(e,n);if(t!==null){var r=Be();Nn(t,e,n,r)}Iu(e,n)}};Td=function(){return re};Md=function(e,n){var t=re;try{return re=e,n()}finally{re=t}};ua=function(e,n,t){switch(n){case"input":if(na(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error(D(90));cd(r),na(r,i)}}}break;case"textarea":fd(e,t);break;case"select":n=t.value,n!=null&&rr(e,!!t.multiple,n,!1)}};wd=_u;xd=zt;var m0={usingClientEntryPoint:!1,Events:[ki,Gt,Yo,vd,yd,_u]},zr={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||f0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{qo=Gi.inject(h0),Pn=Gi}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(n))throw Error(D(200));return d0(e,n,null,t)};on.createRoot=function(e,n){if(!Au(e))throw Error(D(299));var t=!1,r="",i=tp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Fu(e,1,!1,null,null,t,!1,r,i),e[bn]=n.current,ui(e.nodeType===8?e.parentNode:e),new Ou(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=kd(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return zt(e)};on.hydrate=function(e,n,t){if(!ll(n))throw Error(D(200));return al(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!Au(e))throw Error(D(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=tp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=np(n,null,e,1,t??null,i,!1,o,l),e[bn]=n.current,ui(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ol(n)};on.render=function(e,n,t){if(!ll(n))throw Error(D(200));return al(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!ll(e))throw Error(D(40));return e._reactRootContainer?(zt(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};on.unstable_batchedUpdates=_u;on.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ll(t))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return al(e,n,t,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),td.exports=on;var Uu=td.exports;const g0=Hc(Uu),v0=Vc({__proto__:null,default:g0},[Uu]);var ip,hc=Uu;ip=hc.createRoot,hc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function se(){return se=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},se.apply(null,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const gc="popstate";function y0(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:l,hash:a}=r.location;return vi("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Ft(i)}return x0(n,t,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function gr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function w0(){return Math.random().toString(36).substr(2,8)}function vc(e,n){return{usr:e.state,key:e.key,idx:n}}function vi(e,n,t,r){return t===void 0&&(t=null),se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?gt(n):n,{state:t,key:n&&n.key||r||w0()})}function Ft(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function gt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function x0(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ne.Pop,u=null,s=f();s==null&&(s=0,l.replaceState(se({},l.state,{idx:s}),""));function f(){return(l.state||{idx:null}).idx}function p(){a=Ne.Pop;let _=f(),g=_==null?null:_-s;s=_,u&&u({action:a,location:S.location,delta:g})}function m(_,g){a=Ne.Push;let d=vi(S.location,_,g);s=f()+1;let v=vc(d,s),j=S.createHref(d);try{l.pushState(v,"",j)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(j)}o&&u&&u({action:a,location:S.location,delta:1})}function N(_,g){a=Ne.Replace;let d=vi(S.location,_,g);s=f();let v=vc(d,s),j=S.createHref(d);l.replaceState(v,"",j),o&&u&&u({action:a,location:S.location,delta:0})}function x(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:Ft(_);return d=d.replace(/ $/,"%20"),Q(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let S={get action(){return a},get location(){return e(i,l)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gc,p),u=_,()=>{i.removeEventListener(gc,p),u=null}},createHref(_){return n(i,_)},createURL:x,encodeLocation(_){let g=x(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:N,go(_){return l.go(_)}};return S}var te;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(te||(te={}));const N0=new Set(["lazy","caseSensitive","path","id","index","children"]);function S0(e){return e.index===!0}function Bo(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((i,o)=>{let l=[...t,String(o)],a=typeof i.id=="string"?i.id:l.join("-");if(Q(i.index!==!0||!i.children,"Cannot specify children on an index route"),Q(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),S0(i)){let u=se({},i,n(i),{id:a});return r[a]=u,u}else{let u=se({},i,n(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=Bo(i.children,n,l,r)),u}})}function St(e,n,t){return t===void 0&&(t="/"),ho(e,n,t,!1)}function ho(e,n,t,r){let i=typeof n=="string"?gt(n):n,o=Vn(i.pathname||"/",t);if(o==null)return null;let l=op(e);j0(l);let a=null,u=F0(o);for(let s=0;a==null&&s<l.length;++s)a=M0(l[s],u,r);return a}function k0(e,n){let{route:t,pathname:r,params:i}=e;return{id:t.id,pathname:r,params:i,data:n[t.id],handle:t.handle}}function op(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=An([r,u.relativePath]),f=t.concat(u);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),op(o.children,n,f,s)),!(o.path==null&&!o.index)&&n.push({path:s,score:_0(s,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of lp(o.path))i(o,l,u)}),n}function lp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=lp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function j0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:T0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const C0=/^:[\w-]+$/,E0=3,P0=2,L0=1,R0=10,D0=-2,yc=e=>e==="*";function _0(e,n){let t=e.split("/"),r=t.length;return t.some(yc)&&(r+=D0),n&&(r+=P0),t.filter(i=>!yc(i)).reduce((i,o)=>i+(C0.test(o)?E0:o===""?L0:R0),r)}function T0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function M0(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],s=a===r.length-1,f=o==="/"?n:n.slice(o.length)||"/",p=$o({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},f),m=u.route;if(!p&&s&&t&&!r[r.length-1].route.index&&(p=$o({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:An([o,p.pathname]),pathnameBase:O0(An([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=An([o,p.pathnameBase]))}return l}function $o(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=z0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((s,f,p)=>{let{paramName:m,isOptional:N}=f;if(m==="*"){let S=a[p]||"";l=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const x=a[p];return N&&!x?s[m]=void 0:s[m]=(x||"").replace(/%2F/g,"/"),s},{}),pathname:o,pathnameBase:l,pattern:e}}function z0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),gr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function F0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return gr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Vn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function I0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?gt(e):e,o;return t?(t=bu(t),t.startsWith("/")?o=wc(t.substring(1),"/"):o=wc(t,n)):o=n,{pathname:o,search:A0(r),hash:U0(i)}}function wc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Hl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ap(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ul(e,n){let t=ap(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function sl(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gt(e):(i=se({},e),Q(!i.pathname||!i.pathname.includes("?"),Hl("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),Hl("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),Hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=t;else{let p=n.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?n[p]:"/"}let u=I0(i,a),s=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||f)&&(u.pathname+="/"),u}const bu=e=>e.replace(/\/\/+/g,"/"),An=e=>bu(e.join("/")),O0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Vo{constructor(n,t,r,i){i===void 0&&(i=!1),this.status=n,this.statusText=t||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function yi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const up=["post","put","patch","delete"],b0=new Set(up),B0=["get",...up],$0=new Set(B0),V0=new Set([301,302,303,307,308]),H0=new Set([307,308]),Wl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},W0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Bu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q0=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),sp="remix-router-transitions";function q0(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let h=e.detectErrorBoundary;i=w=>({hasErrorBoundary:h(w)})}else i=Q0;let o={},l=Bo(e.routes,i,void 0,o),a,u=e.basename||"/",s=e.dataStrategy||Y0,f=e.patchRoutesOnNavigation,p=se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,N=new Set,x=null,S=null,_=null,g=e.hydrationData!=null,d=St(l,e.history.location,u),v=!1,j=null;if(d==null&&!f){let h=He(404,{pathname:e.history.location.pathname}),{matches:w,route:k}=Dc(l);d=w,j={[k.id]:h}}d&&!e.hydrationData&&Di(d,l,e.history.location.pathname).active&&(d=null);let R;if(d)if(d.some(h=>h.route.lazy))R=!1;else if(!d.some(h=>h.route.loader))R=!0;else if(p.v7_partialHydration){let h=e.hydrationData?e.hydrationData.loaderData:null,w=e.hydrationData?e.hydrationData.errors:null;if(w){let k=d.findIndex(P=>w[P.route.id]!==void 0);R=d.slice(0,k+1).every(P=>!$a(P.route,h,w))}else R=d.every(k=>!$a(k.route,h,w))}else R=e.hydrationData!=null;else if(R=!1,d=[],p.v7_partialHydration){let h=Di(null,l,e.history.location.pathname);h.active&&h.matches&&(v=!0,d=h.matches)}let z,y={historyAction:e.history.action,location:e.history.location,matches:d,initialized:R,navigation:Wl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||j,fetchers:new Map,blockers:new Map},E=Ne.Pop,B=!1,T,K=!1,ie=new Map,ye=null,ke=!1,Ye=!1,X=[],Ee=new Set,L=new Map,$=0,V=-1,J=new Map,ne=new Set,mn=new Map,Je=new Map,Oe=new Set,Ae=new Map,an=new Map,Pi;function Cp(){if(m=e.history.listen(h=>{let{action:w,location:k,delta:P}=h;if(Pi){Pi(),Pi=void 0;return}gr(an.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=ts({currentLocation:y.location,nextLocation:k,historyAction:w});if(M&&P!=null){let b=new Promise(H=>{Pi=H});e.history.go(P*-1),Ri(M,{state:"blocked",location:k,proceed(){Ri(M,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),b.then(()=>e.history.go(P))},reset(){let H=new Map(y.blockers);H.set(M,Fr),Ue({blockers:H})}});return}return vt(w,k)}),t){dg(n,ie);let h=()=>fg(n,ie);n.addEventListener("pagehide",h),ye=()=>n.removeEventListener("pagehide",h)}return y.initialized||vt(Ne.Pop,y.location,{initialHydration:!0}),z}function Ep(){m&&m(),ye&&ye(),N.clear(),T&&T.abort(),y.fetchers.forEach((h,w)=>Li(w)),y.blockers.forEach((h,w)=>ns(w))}function Pp(h){return N.add(h),()=>N.delete(h)}function Ue(h,w){w===void 0&&(w={}),y=se({},y,h);let k=[],P=[];p.v7_fetcherPersist&&y.fetchers.forEach((M,b)=>{M.state==="idle"&&(Oe.has(b)?P.push(b):k.push(b))}),Oe.forEach(M=>{!y.fetchers.has(M)&&!L.has(M)&&P.push(M)}),[...N].forEach(M=>M(y,{deletedFetchers:P,viewTransitionOpts:w.viewTransitionOpts,flushSync:w.flushSync===!0})),p.v7_fetcherPersist?(k.forEach(M=>y.fetchers.delete(M)),P.forEach(M=>Li(M))):P.forEach(M=>Oe.delete(M))}function Ut(h,w,k){var P,M;let{flushSync:b}=k===void 0?{}:k,H=y.actionData!=null&&y.navigation.formMethod!=null&&yn(y.navigation.formMethod)&&y.navigation.state==="loading"&&((P=h.state)==null?void 0:P._isRedirect)!==!0,O;w.actionData?Object.keys(w.actionData).length>0?O=w.actionData:O=null:H?O=y.actionData:O=null;let A=w.loaderData?Lc(y.loaderData,w.loaderData,w.matches||[],w.errors):y.loaderData,I=y.blockers;I.size>0&&(I=new Map(I),I.forEach((G,Re)=>I.set(Re,Fr)));let U=B===!0||y.navigation.formMethod!=null&&yn(y.navigation.formMethod)&&((M=h.state)==null?void 0:M._isRedirect)!==!0;a&&(l=a,a=void 0),ke||E===Ne.Pop||(E===Ne.Push?e.history.push(h,h.state):E===Ne.Replace&&e.history.replace(h,h.state));let W;if(E===Ne.Pop){let G=ie.get(y.location.pathname);G&&G.has(h.pathname)?W={currentLocation:y.location,nextLocation:h}:ie.has(h.pathname)&&(W={currentLocation:h,nextLocation:y.location})}else if(K){let G=ie.get(y.location.pathname);G?G.add(h.pathname):(G=new Set([h.pathname]),ie.set(y.location.pathname,G)),W={currentLocation:y.location,nextLocation:h}}Ue(se({},w,{actionData:O,loaderData:A,historyAction:E,location:h,initialized:!0,navigation:Wl,revalidation:"idle",restoreScrollPosition:is(h,w.matches||y.matches),preventScrollReset:U,blockers:I}),{viewTransitionOpts:W,flushSync:b===!0}),E=Ne.Pop,B=!1,K=!1,ke=!1,Ye=!1,X=[]}async function Ku(h,w){if(typeof h=="number"){e.history.go(h);return}let k=Ba(y.location,y.matches,u,p.v7_prependBasename,h,p.v7_relativeSplatPath,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:P,submission:M,error:b}=xc(p.v7_normalizeFormMethod,!1,k,w),H=y.location,O=vi(y.location,P,w&&w.state);O=se({},O,e.history.encodeLocation(O));let A=w&&w.replace!=null?w.replace:void 0,I=Ne.Push;A===!0?I=Ne.Replace:A===!1||M!=null&&yn(M.formMethod)&&M.formAction===y.location.pathname+y.location.search&&(I=Ne.Replace);let U=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,W=(w&&w.flushSync)===!0,G=ts({currentLocation:H,nextLocation:O,historyAction:I});if(G){Ri(G,{state:"blocked",location:O,proceed(){Ri(G,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),Ku(h,w)},reset(){let Re=new Map(y.blockers);Re.set(G,Fr),Ue({blockers:Re})}});return}return await vt(I,O,{submission:M,pendingError:b,preventScrollReset:U,replace:w&&w.replace,enableViewTransition:w&&w.viewTransition,flushSync:W})}function Lp(){if(ml(),Ue({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){vt(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}vt(E||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation,enableViewTransition:K===!0})}}async function vt(h,w,k){T&&T.abort(),T=null,E=h,ke=(k&&k.startUninterruptedRevalidation)===!0,Ap(y.location,y.matches),B=(k&&k.preventScrollReset)===!0,K=(k&&k.enableViewTransition)===!0;let P=a||l,M=k&&k.overrideNavigation,b=k!=null&&k.initialHydration&&y.matches&&y.matches.length>0&&!v?y.matches:St(P,w,u),H=(k&&k.flushSync)===!0;if(b&&y.initialized&&!Ye&&rg(y.location,w)&&!(k&&k.submission&&yn(k.submission.formMethod))){Ut(w,{matches:b},{flushSync:H});return}let O=Di(b,P,w.pathname);if(O.active&&O.matches&&(b=O.matches),!b){let{error:oe,notFoundMatches:ee,route:me}=hl(w.pathname);Ut(w,{matches:ee,loaderData:{},errors:{[me.id]:oe}},{flushSync:H});return}T=new AbortController;let A=Ht(e.history,w,T.signal,k&&k.submission),I;if(k&&k.pendingError)I=[kt(b).route.id,{type:te.error,error:k.pendingError}];else if(k&&k.submission&&yn(k.submission.formMethod)){let oe=await Rp(A,w,k.submission,b,O.active,{replace:k.replace,flushSync:H});if(oe.shortCircuited)return;if(oe.pendingActionResult){let[ee,me]=oe.pendingActionResult;if(en(me)&&yi(me.error)&&me.error.status===404){T=null,Ut(w,{matches:oe.matches,loaderData:{},errors:{[ee]:me.error}});return}}b=oe.matches||b,I=oe.pendingActionResult,M=Ql(w,k.submission),H=!1,O.active=!1,A=Ht(e.history,A.url,A.signal)}let{shortCircuited:U,matches:W,loaderData:G,errors:Re}=await Dp(A,w,b,O.active,M,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,H,I);U||(T=null,Ut(w,se({matches:W||b},Rc(I),{loaderData:G,errors:Re})))}async function Rp(h,w,k,P,M,b){b===void 0&&(b={}),ml();let H=sg(w,k);if(Ue({navigation:H},{flushSync:b.flushSync===!0}),M){let I=await _i(P,w.pathname,h.signal);if(I.type==="aborted")return{shortCircuited:!0};if(I.type==="error"){let U=kt(I.partialMatches).route.id;return{matches:I.partialMatches,pendingActionResult:[U,{type:te.error,error:I.error}]}}else if(I.matches)P=I.matches;else{let{notFoundMatches:U,error:W,route:G}=hl(w.pathname);return{matches:U,pendingActionResult:[G.id,{type:te.error,error:W}]}}}let O,A=$r(P,w);if(!A.route.action&&!A.route.lazy)O={type:te.error,error:He(405,{method:h.method,pathname:w.pathname,routeId:A.route.id})};else if(O=(await kr("action",y,h,[A],P,null))[A.route.id],h.signal.aborted)return{shortCircuited:!0};if(Pt(O)){let I;return b&&b.replace!=null?I=b.replace:I=Cc(O.response.headers.get("Location"),new URL(h.url),u,e.history)===y.location.pathname+y.location.search,await yt(h,O,!0,{submission:k,replace:I}),{shortCircuited:!0}}if(tt(O))throw He(400,{type:"defer-action"});if(en(O)){let I=kt(P,A.route.id);return(b&&b.replace)!==!0&&(E=Ne.Push),{matches:P,pendingActionResult:[I.route.id,O]}}return{matches:P,pendingActionResult:[A.route.id,O]}}async function Dp(h,w,k,P,M,b,H,O,A,I,U){let W=M||Ql(w,b),G=b||H||Tc(W),Re=!ke&&(!p.v7_partialHydration||!A);if(P){if(Re){let he=Xu(U);Ue(se({navigation:W},he!==void 0?{actionData:he}:{}),{flushSync:I})}let Z=await _i(k,w.pathname,h.signal);if(Z.type==="aborted")return{shortCircuited:!0};if(Z.type==="error"){let he=kt(Z.partialMatches).route.id;return{matches:Z.partialMatches,loaderData:{},errors:{[he]:Z.error}}}else if(Z.matches)k=Z.matches;else{let{error:he,notFoundMatches:Bt,route:Er}=hl(w.pathname);return{matches:Bt,loaderData:{},errors:{[Er.id]:he}}}}let oe=a||l,[ee,me]=Sc(e.history,y,k,G,w,p.v7_partialHydration&&A===!0,p.v7_skipActionErrorRevalidation,Ye,X,Ee,Oe,mn,ne,oe,u,U);if(gl(Z=>!(k&&k.some(he=>he.route.id===Z))||ee&&ee.some(he=>he.route.id===Z)),V=++$,ee.length===0&&me.length===0){let Z=Zu();return Ut(w,se({matches:k,loaderData:{},errors:U&&en(U[1])?{[U[0]]:U[1].error}:null},Rc(U),Z?{fetchers:new Map(y.fetchers)}:{}),{flushSync:I}),{shortCircuited:!0}}if(Re){let Z={};if(!P){Z.navigation=W;let he=Xu(U);he!==void 0&&(Z.actionData=he)}me.length>0&&(Z.fetchers=_p(me)),Ue(Z,{flushSync:I})}me.forEach(Z=>{qn(Z.key),Z.controller&&L.set(Z.key,Z.controller)});let bt=()=>me.forEach(Z=>qn(Z.key));T&&T.signal.addEventListener("abort",bt);let{loaderResults:jr,fetcherResults:_n}=await Gu(y,k,ee,me,h);if(h.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",bt),me.forEach(Z=>L.delete(Z.key));let kn=Yi(jr);if(kn)return await yt(h,kn.result,!0,{replace:O}),{shortCircuited:!0};if(kn=Yi(_n),kn)return ne.add(kn.key),await yt(h,kn.result,!0,{replace:O}),{shortCircuited:!0};let{loaderData:vl,errors:Cr}=Pc(y,k,jr,U,me,_n,Ae);Ae.forEach((Z,he)=>{Z.subscribe(Bt=>{(Bt||Z.done)&&Ae.delete(he)})}),p.v7_partialHydration&&A&&y.errors&&(Cr=se({},y.errors,Cr));let wt=Zu(),Ti=es(V),Mi=wt||Ti||me.length>0;return se({matches:k,loaderData:vl,errors:Cr},Mi?{fetchers:new Map(y.fetchers)}:{})}function Xu(h){if(h&&!en(h[1]))return{[h[0]]:h[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function _p(h){return h.forEach(w=>{let k=y.fetchers.get(w.key),P=Ir(void 0,k?k.data:void 0);y.fetchers.set(w.key,P)}),new Map(y.fetchers)}function Tp(h,w,k,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");qn(h);let M=(P&&P.flushSync)===!0,b=a||l,H=Ba(y.location,y.matches,u,p.v7_prependBasename,k,p.v7_relativeSplatPath,w,P==null?void 0:P.relative),O=St(b,H,u),A=Di(O,b,H);if(A.active&&A.matches&&(O=A.matches),!O){Dn(h,w,He(404,{pathname:H}),{flushSync:M});return}let{path:I,submission:U,error:W}=xc(p.v7_normalizeFormMethod,!0,H,P);if(W){Dn(h,w,W,{flushSync:M});return}let G=$r(O,I),Re=(P&&P.preventScrollReset)===!0;if(U&&yn(U.formMethod)){Mp(h,w,I,G,O,A.active,M,Re,U);return}mn.set(h,{routeId:w,path:I}),zp(h,w,I,G,O,A.active,M,Re,U)}async function Mp(h,w,k,P,M,b,H,O,A){ml(),mn.delete(h);function I(xe){if(!xe.route.action&&!xe.route.lazy){let $t=He(405,{method:A.formMethod,pathname:k,routeId:w});return Dn(h,w,$t,{flushSync:H}),!0}return!1}if(!b&&I(P))return;let U=y.fetchers.get(h);Qn(h,cg(A,U),{flushSync:H});let W=new AbortController,G=Ht(e.history,k,W.signal,A);if(b){let xe=await _i(M,new URL(G.url).pathname,G.signal,h);if(xe.type==="aborted")return;if(xe.type==="error"){Dn(h,w,xe.error,{flushSync:H});return}else if(xe.matches){if(M=xe.matches,P=$r(M,k),I(P))return}else{Dn(h,w,He(404,{pathname:k}),{flushSync:H});return}}L.set(h,W);let Re=$,ee=(await kr("action",y,G,[P],M,h))[P.route.id];if(G.signal.aborted){L.get(h)===W&&L.delete(h);return}if(p.v7_fetcherPersist&&Oe.has(h)){if(Pt(ee)||en(ee)){Qn(h,Xn(void 0));return}}else{if(Pt(ee))if(L.delete(h),V>Re){Qn(h,Xn(void 0));return}else return ne.add(h),Qn(h,Ir(A)),yt(G,ee,!1,{fetcherSubmission:A,preventScrollReset:O});if(en(ee)){Dn(h,w,ee.error);return}}if(tt(ee))throw He(400,{type:"defer-action"});let me=y.navigation.location||y.location,bt=Ht(e.history,me,W.signal),jr=a||l,_n=y.navigation.state!=="idle"?St(jr,y.navigation.location,u):y.matches;Q(_n,"Didn't find any matches after fetcher action");let kn=++$;J.set(h,kn);let vl=Ir(A,ee.data);y.fetchers.set(h,vl);let[Cr,wt]=Sc(e.history,y,_n,A,me,!1,p.v7_skipActionErrorRevalidation,Ye,X,Ee,Oe,mn,ne,jr,u,[P.route.id,ee]);wt.filter(xe=>xe.key!==h).forEach(xe=>{let $t=xe.key,os=y.fetchers.get($t),Bp=Ir(void 0,os?os.data:void 0);y.fetchers.set($t,Bp),qn($t),xe.controller&&L.set($t,xe.controller)}),Ue({fetchers:new Map(y.fetchers)});let Ti=()=>wt.forEach(xe=>qn(xe.key));W.signal.addEventListener("abort",Ti);let{loaderResults:Mi,fetcherResults:Z}=await Gu(y,_n,Cr,wt,bt);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Ti),J.delete(h),L.delete(h),wt.forEach(xe=>L.delete(xe.key));let he=Yi(Mi);if(he)return yt(bt,he.result,!1,{preventScrollReset:O});if(he=Yi(Z),he)return ne.add(he.key),yt(bt,he.result,!1,{preventScrollReset:O});let{loaderData:Bt,errors:Er}=Pc(y,_n,Mi,void 0,wt,Z,Ae);if(y.fetchers.has(h)){let xe=Xn(ee.data);y.fetchers.set(h,xe)}es(kn),y.navigation.state==="loading"&&kn>V?(Q(E,"Expected pending action"),T&&T.abort(),Ut(y.navigation.location,{matches:_n,loaderData:Bt,errors:Er,fetchers:new Map(y.fetchers)})):(Ue({errors:Er,loaderData:Lc(y.loaderData,Bt,_n,Er),fetchers:new Map(y.fetchers)}),Ye=!1)}async function zp(h,w,k,P,M,b,H,O,A){let I=y.fetchers.get(h);Qn(h,Ir(A,I?I.data:void 0),{flushSync:H});let U=new AbortController,W=Ht(e.history,k,U.signal);if(b){let ee=await _i(M,new URL(W.url).pathname,W.signal,h);if(ee.type==="aborted")return;if(ee.type==="error"){Dn(h,w,ee.error,{flushSync:H});return}else if(ee.matches)M=ee.matches,P=$r(M,k);else{Dn(h,w,He(404,{pathname:k}),{flushSync:H});return}}L.set(h,U);let G=$,oe=(await kr("loader",y,W,[P],M,h))[P.route.id];if(tt(oe)&&(oe=await $u(oe,W.signal,!0)||oe),L.get(h)===U&&L.delete(h),!W.signal.aborted){if(Oe.has(h)){Qn(h,Xn(void 0));return}if(Pt(oe))if(V>G){Qn(h,Xn(void 0));return}else{ne.add(h),await yt(W,oe,!1,{preventScrollReset:O});return}if(en(oe)){Dn(h,w,oe.error);return}Q(!tt(oe),"Unhandled fetcher deferred data"),Qn(h,Xn(oe.data))}}async function yt(h,w,k,P){let{submission:M,fetcherSubmission:b,preventScrollReset:H,replace:O}=P===void 0?{}:P;w.response.headers.has("X-Remix-Revalidate")&&(Ye=!0);let A=w.response.headers.get("Location");Q(A,"Expected a Location header on the redirect Response"),A=Cc(A,new URL(h.url),u,e.history);let I=vi(y.location,A,{_isRedirect:!0});if(t){let ee=!1;if(w.response.headers.has("X-Remix-Reload-Document"))ee=!0;else if(Bu.test(A)){const me=e.history.createURL(A);ee=me.origin!==n.location.origin||Vn(me.pathname,u)==null}if(ee){O?n.location.replace(A):n.location.assign(A);return}}T=null;let U=O===!0||w.response.headers.has("X-Remix-Replace")?Ne.Replace:Ne.Push,{formMethod:W,formAction:G,formEncType:Re}=y.navigation;!M&&!b&&W&&G&&Re&&(M=Tc(y.navigation));let oe=M||b;if(H0.has(w.response.status)&&oe&&yn(oe.formMethod))await vt(U,I,{submission:se({},oe,{formAction:A}),preventScrollReset:H||B,enableViewTransition:k?K:void 0});else{let ee=Ql(I,M);await vt(U,I,{overrideNavigation:ee,fetcherSubmission:b,preventScrollReset:H||B,enableViewTransition:k?K:void 0})}}async function kr(h,w,k,P,M,b){let H,O={};try{H=await J0(s,h,w,k,P,M,b,o,i)}catch(A){return P.forEach(I=>{O[I.route.id]={type:te.error,error:A}}),O}for(let[A,I]of Object.entries(H))if(ig(I)){let U=I.result;O[A]={type:te.redirect,response:ng(U,k,A,M,u,p.v7_relativeSplatPath)}}else O[A]=await eg(I);return O}async function Gu(h,w,k,P,M){let b=h.matches,H=kr("loader",h,M,k,w,null),O=Promise.all(P.map(async U=>{if(U.matches&&U.match&&U.controller){let G=(await kr("loader",h,Ht(e.history,U.path,U.controller.signal),[U.match],U.matches,U.key))[U.match.route.id];return{[U.key]:G}}else return Promise.resolve({[U.key]:{type:te.error,error:He(404,{pathname:U.path})}})})),A=await H,I=(await O).reduce((U,W)=>Object.assign(U,W),{});return await Promise.all([ag(w,A,M.signal,b,h.loaderData),ug(w,I,P)]),{loaderResults:A,fetcherResults:I}}function ml(){Ye=!0,X.push(...gl()),mn.forEach((h,w)=>{L.has(w)&&Ee.add(w),qn(w)})}function Qn(h,w,k){k===void 0&&(k={}),y.fetchers.set(h,w),Ue({fetchers:new Map(y.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Dn(h,w,k,P){P===void 0&&(P={});let M=kt(y.matches,w);Li(h),Ue({errors:{[M.route.id]:k},fetchers:new Map(y.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Yu(h){return Je.set(h,(Je.get(h)||0)+1),Oe.has(h)&&Oe.delete(h),y.fetchers.get(h)||W0}function Li(h){let w=y.fetchers.get(h);L.has(h)&&!(w&&w.state==="loading"&&J.has(h))&&qn(h),mn.delete(h),J.delete(h),ne.delete(h),p.v7_fetcherPersist&&Oe.delete(h),Ee.delete(h),y.fetchers.delete(h)}function Fp(h){let w=(Je.get(h)||0)-1;w<=0?(Je.delete(h),Oe.add(h),p.v7_fetcherPersist||Li(h)):Je.set(h,w),Ue({fetchers:new Map(y.fetchers)})}function qn(h){let w=L.get(h);w&&(w.abort(),L.delete(h))}function Ju(h){for(let w of h){let k=Yu(w),P=Xn(k.data);y.fetchers.set(w,P)}}function Zu(){let h=[],w=!1;for(let k of ne){let P=y.fetchers.get(k);Q(P,"Expected fetcher: "+k),P.state==="loading"&&(ne.delete(k),h.push(k),w=!0)}return Ju(h),w}function es(h){let w=[];for(let[k,P]of J)if(P<h){let M=y.fetchers.get(k);Q(M,"Expected fetcher: "+k),M.state==="loading"&&(qn(k),J.delete(k),w.push(k))}return Ju(w),w.length>0}function Ip(h,w){let k=y.blockers.get(h)||Fr;return an.get(h)!==w&&an.set(h,w),k}function ns(h){y.blockers.delete(h),an.delete(h)}function Ri(h,w){let k=y.blockers.get(h)||Fr;Q(k.state==="unblocked"&&w.state==="blocked"||k.state==="blocked"&&w.state==="blocked"||k.state==="blocked"&&w.state==="proceeding"||k.state==="blocked"&&w.state==="unblocked"||k.state==="proceeding"&&w.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+w.state);let P=new Map(y.blockers);P.set(h,w),Ue({blockers:P})}function ts(h){let{currentLocation:w,nextLocation:k,historyAction:P}=h;if(an.size===0)return;an.size>1&&gr(!1,"A router only supports one blocker at a time");let M=Array.from(an.entries()),[b,H]=M[M.length-1],O=y.blockers.get(b);if(!(O&&O.state==="proceeding")&&H({currentLocation:w,nextLocation:k,historyAction:P}))return b}function hl(h){let w=He(404,{pathname:h}),k=a||l,{matches:P,route:M}=Dc(k);return gl(),{notFoundMatches:P,route:M,error:w}}function gl(h){let w=[];return Ae.forEach((k,P)=>{(!h||h(P))&&(k.cancel(),w.push(P),Ae.delete(P))}),w}function Op(h,w,k){if(x=h,_=w,S=k||null,!g&&y.navigation===Wl){g=!0;let P=is(y.location,y.matches);P!=null&&Ue({restoreScrollPosition:P})}return()=>{x=null,_=null,S=null}}function rs(h,w){return S&&S(h,w.map(P=>k0(P,y.loaderData)))||h.key}function Ap(h,w){if(x&&_){let k=rs(h,w);x[k]=_()}}function is(h,w){if(x){let k=rs(h,w),P=x[k];if(typeof P=="number")return P}return null}function Di(h,w,k){if(f)if(h){if(Object.keys(h[0].params).length>0)return{active:!0,matches:ho(w,k,u,!0)}}else return{active:!0,matches:ho(w,k,u,!0)||[]};return{active:!1,matches:null}}async function _i(h,w,k,P){if(!f)return{type:"success",matches:h};let M=h;for(;;){let b=a==null,H=a||l,O=o;try{await f({signal:k,path:w,matches:M,fetcherKey:P,patch:(U,W)=>{k.aborted||jc(U,W,H,O,i)}})}catch(U){return{type:"error",error:U,partialMatches:M}}finally{b&&!k.aborted&&(l=[...l])}if(k.aborted)return{type:"aborted"};let A=St(H,w,u);if(A)return{type:"success",matches:A};let I=ho(H,w,u,!0);if(!I||M.length===I.length&&M.every((U,W)=>U.route.id===I[W].route.id))return{type:"success",matches:null};M=I}}function Up(h){o={},a=Bo(h,i,void 0,o)}function bp(h,w){let k=a==null;jc(h,w,a||l,o,i),k&&(l=[...l],Ue({}))}return z={get basename(){return u},get future(){return p},get state(){return y},get routes(){return l},get window(){return n},initialize:Cp,subscribe:Pp,enableScrollRestoration:Op,navigate:Ku,fetch:Tp,revalidate:Lp,createHref:h=>e.history.createHref(h),encodeLocation:h=>e.history.encodeLocation(h),getFetcher:Yu,deleteFetcher:Fp,dispose:Ep,getBlocker:Ip,deleteBlocker:ns,patchRoutes:bp,_internalFetchControllers:L,_internalActiveDeferreds:Ae,_internalSetRoutes:Up},z}function K0(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ba(e,n,t,r,i,o,l,a){let u,s;if(l){u=[];for(let p of n)if(u.push(p),p.route.id===l){s=p;break}}else u=n,s=n[n.length-1];let f=sl(i||".",ul(u,o),Vn(e.pathname,t)||e.pathname,a==="path");if(i==null&&(f.search=e.search,f.hash=e.hash),(i==null||i===""||i===".")&&s){let p=Vu(f.search);if(s.route.index&&!p)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!s.route.index&&p){let m=new URLSearchParams(f.search),N=m.getAll("index");m.delete("index"),N.filter(S=>S).forEach(S=>m.append("index",S));let x=m.toString();f.search=x?"?"+x:""}}return r&&t!=="/"&&(f.pathname=f.pathname==="/"?t:An([t,f.pathname])),Ft(f)}function xc(e,n,t,r){if(!r||!K0(r))return{path:t};if(r.formMethod&&!lg(r.formMethod))return{path:t,error:He(405,{method:r.formMethod})};let i=()=>({path:t,error:He(400,{type:"invalid-body"})}),o=r.formMethod||"get",l=e?o.toUpperCase():o.toLowerCase(),a=fp(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yn(l))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((N,x)=>{let[S,_]=x;return""+N+S+"="+_+`
`},""):String(r.body);return{path:t,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!yn(l))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}Q(typeof FormData=="function","FormData is not available in this environment");let u,s;if(r.formData)u=Va(r.formData),s=r.formData;else if(r.body instanceof FormData)u=Va(r.body),s=r.body;else if(r.body instanceof URLSearchParams)u=r.body,s=Ec(u);else if(r.body==null)u=new URLSearchParams,s=new FormData;else try{u=new URLSearchParams(r.body),s=Ec(u)}catch{return i()}let f={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:s,json:void 0,text:void 0};if(yn(f.formMethod))return{path:t,submission:f};let p=gt(t);return n&&p.search&&Vu(p.search)&&u.append("index",""),p.search="?"+u,{path:Ft(p),submission:f}}function Nc(e,n,t){t===void 0&&(t=!1);let r=e.findIndex(i=>i.route.id===n);return r>=0?e.slice(0,t?r+1:r):e}function Sc(e,n,t,r,i,o,l,a,u,s,f,p,m,N,x,S){let _=S?en(S[1])?S[1].error:S[1].data:void 0,g=e.createURL(n.location),d=e.createURL(i),v=t;o&&n.errors?v=Nc(t,Object.keys(n.errors)[0],!0):S&&en(S[1])&&(v=Nc(t,S[0]));let j=S?S[1].statusCode:void 0,R=l&&j&&j>=400,z=v.filter((E,B)=>{let{route:T}=E;if(T.lazy)return!0;if(T.loader==null)return!1;if(o)return $a(T,n.loaderData,n.errors);if(X0(n.loaderData,n.matches[B],E)||u.some(ye=>ye===E.route.id))return!0;let K=n.matches[B],ie=E;return kc(E,se({currentUrl:g,currentParams:K.params,nextUrl:d,nextParams:ie.params},r,{actionResult:_,actionStatus:j,defaultShouldRevalidate:R?!1:a||g.pathname+g.search===d.pathname+d.search||g.search!==d.search||cp(K,ie)}))}),y=[];return p.forEach((E,B)=>{if(o||!t.some(ke=>ke.route.id===E.routeId)||f.has(B))return;let T=St(N,E.path,x);if(!T){y.push({key:B,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let K=n.fetchers.get(B),ie=$r(T,E.path),ye=!1;m.has(B)?ye=!1:s.has(B)?(s.delete(B),ye=!0):K&&K.state!=="idle"&&K.data===void 0?ye=a:ye=kc(ie,se({currentUrl:g,currentParams:n.matches[n.matches.length-1].params,nextUrl:d,nextParams:t[t.length-1].params},r,{actionResult:_,actionStatus:j,defaultShouldRevalidate:R?!1:a})),ye&&y.push({key:B,routeId:E.routeId,path:E.path,matches:T,match:ie,controller:new AbortController})}),[z,y]}function $a(e,n,t){if(e.lazy)return!0;if(!e.loader)return!1;let r=n!=null&&n[e.id]!==void 0,i=t!=null&&t[e.id]!==void 0;return!r&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!i}function X0(e,n,t){let r=!n||t.route.id!==n.route.id,i=e[t.route.id]===void 0;return r||i}function cp(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function kc(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}function jc(e,n,t,r,i){var o;let l;if(e){let s=r[e];Q(s,"No route found to patch children into: routeId = "+e),s.children||(s.children=[]),l=s.children}else l=t;let a=n.filter(s=>!l.some(f=>dp(s,f))),u=Bo(a,i,[e||"_","patch",String(((o=l)==null?void 0:o.length)||"0")],r);l.push(...u)}function dp(e,n){return"id"in e&&"id"in n&&e.id===n.id?!0:e.index===n.index&&e.path===n.path&&e.caseSensitive===n.caseSensitive?(!e.children||e.children.length===0)&&(!n.children||n.children.length===0)?!0:e.children.every((t,r)=>{var i;return(i=n.children)==null?void 0:i.some(o=>dp(t,o))}):!1}async function G0(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=t[e.id];Q(i,"No route found in manifest");let o={};for(let l in r){let u=i[l]!==void 0&&l!=="hasErrorBoundary";gr(!u,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!u&&!N0.has(l)&&(o[l]=r[l])}Object.assign(i,o),Object.assign(i,se({},n(i),{lazy:void 0}))}async function Y0(e){let{matches:n}=e,t=n.filter(i=>i.shouldLoad);return(await Promise.all(t.map(i=>i.resolve()))).reduce((i,o,l)=>Object.assign(i,{[t[l].route.id]:o}),{})}async function J0(e,n,t,r,i,o,l,a,u,s){let f=o.map(N=>N.route.lazy?G0(N.route,u,a):void 0),p=o.map((N,x)=>{let S=f[x],_=i.some(d=>d.route.id===N.route.id);return se({},N,{shouldLoad:_,resolve:async d=>(d&&r.method==="GET"&&(N.route.lazy||N.route.loader)&&(_=!0),_?Z0(n,r,N,S,d,s):Promise.resolve({type:te.data,result:void 0}))})}),m=await e({matches:p,request:r,params:o[0].params,fetcherKey:l,context:s});try{await Promise.all(f)}catch{}return m}async function Z0(e,n,t,r,i,o){let l,a,u=s=>{let f,p=new Promise((x,S)=>f=S);a=()=>f(),n.signal.addEventListener("abort",a);let m=x=>typeof s!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):s({request:n,params:t.params,context:o},...x!==void 0?[x]:[]),N=(async()=>{try{return{type:"data",result:await(i?i(S=>m(S)):m())}}catch(x){return{type:"error",result:x}}})();return Promise.race([N,p])};try{let s=t.route[e];if(r)if(s){let f,[p]=await Promise.all([u(s).catch(m=>{f=m}),r]);if(f!==void 0)throw f;l=p}else if(await r,s=t.route[e],s)l=await u(s);else if(e==="action"){let f=new URL(n.url),p=f.pathname+f.search;throw He(405,{method:n.method,pathname:p,routeId:t.route.id})}else return{type:te.data,result:void 0};else if(s)l=await u(s);else{let f=new URL(n.url),p=f.pathname+f.search;throw He(404,{pathname:p})}Q(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(s){return{type:te.error,result:s}}finally{a&&n.signal.removeEventListener("abort",a)}return l}async function eg(e){let{result:n,type:t}=e;if(pp(n)){let p;try{let m=n.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?n.body==null?p=null:p=await n.json():p=await n.text()}catch(m){return{type:te.error,error:m}}return t===te.error?{type:te.error,error:new Vo(n.status,n.statusText,p),statusCode:n.status,headers:n.headers}:{type:te.data,data:p,statusCode:n.status,headers:n.headers}}if(t===te.error){if(_c(n)){var r,i;if(n.data instanceof Error){var o,l;return{type:te.error,error:n.data,statusCode:(o=n.init)==null?void 0:o.status,headers:(l=n.init)!=null&&l.headers?new Headers(n.init.headers):void 0}}return{type:te.error,error:new Vo(((r=n.init)==null?void 0:r.status)||500,void 0,n.data),statusCode:yi(n)?n.status:void 0,headers:(i=n.init)!=null&&i.headers?new Headers(n.init.headers):void 0}}return{type:te.error,error:n,statusCode:yi(n)?n.status:void 0}}if(og(n)){var a,u;return{type:te.deferred,deferredData:n,statusCode:(a=n.init)==null?void 0:a.status,headers:((u=n.init)==null?void 0:u.headers)&&new Headers(n.init.headers)}}if(_c(n)){var s,f;return{type:te.data,data:n.data,statusCode:(s=n.init)==null?void 0:s.status,headers:(f=n.init)!=null&&f.headers?new Headers(n.init.headers):void 0}}return{type:te.data,data:n}}function ng(e,n,t,r,i,o){let l=e.headers.get("Location");if(Q(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Bu.test(l)){let a=r.slice(0,r.findIndex(u=>u.route.id===t)+1);l=Ba(new URL(n.url),a,i,!0,l,o),e.headers.set("Location",l)}return e}function Cc(e,n,t,r){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Bu.test(e)){let o=e,l=o.startsWith("//")?new URL(n.protocol+o):new URL(o);if(i.includes(l.protocol))throw new Error("Invalid redirect location");let a=Vn(l.pathname,t)!=null;if(l.origin===n.origin&&a)return bu(l.pathname)+l.search+l.hash}try{let o=r.createURL(e);if(i.includes(o.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Ht(e,n,t,r){let i=e.createURL(fp(n)).toString(),o={signal:t};if(r&&yn(r.formMethod)){let{formMethod:l,formEncType:a}=r;o.method=l.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Va(r.formData):o.body=r.formData}return new Request(i,o)}function Va(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,typeof r=="string"?r:r.name);return n}function Ec(e){let n=new FormData;for(let[t,r]of e.entries())n.append(t,r);return n}function tg(e,n,t,r,i){let o={},l=null,a,u=!1,s={},f=t&&en(t[1])?t[1].error:void 0;return e.forEach(p=>{if(!(p.route.id in n))return;let m=p.route.id,N=n[m];if(Q(!Pt(N),"Cannot handle redirect results in processLoaderData"),en(N)){let x=N.error;f!==void 0&&(x=f,f=void 0),l=l||{};{let S=kt(e,m);l[S.route.id]==null&&(l[S.route.id]=x)}o[m]=void 0,u||(u=!0,a=yi(N.error)?N.error.status:500),N.headers&&(s[m]=N.headers)}else tt(N)?(r.set(m,N.deferredData),o[m]=N.deferredData.data,N.statusCode!=null&&N.statusCode!==200&&!u&&(a=N.statusCode),N.headers&&(s[m]=N.headers)):(o[m]=N.data,N.statusCode&&N.statusCode!==200&&!u&&(a=N.statusCode),N.headers&&(s[m]=N.headers))}),f!==void 0&&t&&(l={[t[0]]:f},o[t[0]]=void 0),{loaderData:o,errors:l,statusCode:a||200,loaderHeaders:s}}function Pc(e,n,t,r,i,o,l){let{loaderData:a,errors:u}=tg(n,t,r,l);return i.forEach(s=>{let{key:f,match:p,controller:m}=s,N=o[f];if(Q(N,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(en(N)){let x=kt(e.matches,p==null?void 0:p.route.id);u&&u[x.route.id]||(u=se({},u,{[x.route.id]:N.error})),e.fetchers.delete(f)}else if(Pt(N))Q(!1,"Unhandled fetcher revalidation redirect");else if(tt(N))Q(!1,"Unhandled fetcher deferred data");else{let x=Xn(N.data);e.fetchers.set(f,x)}}),{loaderData:a,errors:u}}function Lc(e,n,t,r){let i=se({},n);for(let o of t){let l=o.route.id;if(n.hasOwnProperty(l)?n[l]!==void 0&&(i[l]=n[l]):e[l]!==void 0&&o.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Rc(e){return e?en(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function kt(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Dc(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function He(e,n){let{pathname:t,routeId:r,method:i,type:o,message:l}=n===void 0?{}:n,a="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&t&&r?u="You made a "+i+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?u="defer() is not supported in actions":o==="invalid-body"&&(u="Unable to encode submission body")):e===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+t+'"'):e===404?(a="Not Found",u='No route matches URL "'+t+'"'):e===405&&(a="Method Not Allowed",i&&t&&r?u="You made a "+i.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Vo(e||500,a,new Error(u),!0)}function Yi(e){let n=Object.entries(e);for(let t=n.length-1;t>=0;t--){let[r,i]=n[t];if(Pt(i))return{key:r,result:i}}}function fp(e){let n=typeof e=="string"?gt(e):e;return Ft(se({},n,{hash:""}))}function rg(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function ig(e){return pp(e.result)&&V0.has(e.result.status)}function tt(e){return e.type===te.deferred}function en(e){return e.type===te.error}function Pt(e){return(e&&e.type)===te.redirect}function _c(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function og(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function pp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function lg(e){return $0.has(e.toLowerCase())}function yn(e){return b0.has(e.toLowerCase())}async function ag(e,n,t,r,i){let o=Object.entries(n);for(let l=0;l<o.length;l++){let[a,u]=o[l],s=e.find(m=>(m==null?void 0:m.route.id)===a);if(!s)continue;let f=r.find(m=>m.route.id===s.route.id),p=f!=null&&!cp(f,s)&&(i&&i[s.route.id])!==void 0;tt(u)&&p&&await $u(u,t,!1).then(m=>{m&&(n[a]=m)})}}async function ug(e,n,t){for(let r=0;r<t.length;r++){let{key:i,routeId:o,controller:l}=t[r],a=n[i];e.find(s=>(s==null?void 0:s.route.id)===o)&&tt(a)&&(Q(l,"Expected an AbortController for revalidating fetcher deferred result"),await $u(a,l.signal,!0).then(s=>{s&&(n[i]=s)}))}}async function $u(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:te.data,data:e.deferredData.unwrappedData}}catch(i){return{type:te.error,error:i}}return{type:te.data,data:e.deferredData.data}}}function Vu(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function $r(e,n){let t=typeof n=="string"?gt(n).search:n.search;if(e[e.length-1].route.index&&Vu(t||""))return e[e.length-1];let r=ap(e);return r[r.length-1]}function Tc(e){let{formMethod:n,formAction:t,formEncType:r,text:i,formData:o,json:l}=e;if(!(!n||!t||!r)){if(i!=null)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:n,formAction:t,formEncType:r,formData:o,json:void 0,text:void 0};if(l!==void 0)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:l,text:void 0}}}function Ql(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function sg(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Ir(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function cg(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function Xn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dg(e,n){try{let t=e.sessionStorage.getItem(sp);if(t){let r=JSON.parse(t);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&n.set(i,new Set(o||[]))}}catch{}}function fg(e,n){if(n.size>0){let t={};for(let[r,i]of n)t[r]=[...i];try{e.sessionStorage.setItem(sp,JSON.stringify(t))}catch(r){gr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ho.apply(null,arguments)}const Ci=C.createContext(null),Hu=C.createContext(null),Wn=C.createContext(null),Wu=C.createContext(null),Rn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),mp=C.createContext(null);function pg(e,n){let{relative:t}=n===void 0?{}:n;Sr()||Q(!1);let{basename:r,navigator:i}=C.useContext(Wn),{hash:o,pathname:l,search:a}=dl(e,{relative:t}),u=l;return r!=="/"&&(u=l==="/"?r:An([r,l])),i.createHref({pathname:u,search:a,hash:o})}function Sr(){return C.useContext(Wu)!=null}function At(){return Sr()||Q(!1),C.useContext(Wu).location}function hp(e){C.useContext(Wn).static||C.useLayoutEffect(e)}function gp(){let{isDataRoute:e}=C.useContext(Rn);return e?Pg():mg()}function mg(){Sr()||Q(!1);let e=C.useContext(Ci),{basename:n,future:t,navigator:r}=C.useContext(Wn),{matches:i}=C.useContext(Rn),{pathname:o}=At(),l=JSON.stringify(ul(i,t.v7_relativeSplatPath)),a=C.useRef(!1);return hp(()=>{a.current=!0}),C.useCallback(function(s,f){if(f===void 0&&(f={}),!a.current)return;if(typeof s=="number"){r.go(s);return}let p=sl(s,JSON.parse(l),o,f.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:An([n,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[n,r,l,o,e])}const hg=C.createContext(null);function gg(e){let n=C.useContext(Rn).outlet;return n&&C.createElement(hg.Provider,{value:e},n)}function cl(){let{matches:e}=C.useContext(Rn),n=e[e.length-1];return n?n.params:{}}function dl(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=C.useContext(Wn),{matches:i}=C.useContext(Rn),{pathname:o}=At(),l=JSON.stringify(ul(i,r.v7_relativeSplatPath));return C.useMemo(()=>sl(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function vg(e,n,t,r){Sr()||Q(!1);let{navigator:i}=C.useContext(Wn),{matches:o}=C.useContext(Rn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let s=At(),f;f=s;let p=f.pathname||"/",m=p;if(u!=="/"){let S=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let N=St(e,{pathname:m});return Sg(N&&N.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:An([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:An([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,t,r)}function yg(){let e=Eg(),n=yi(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:i},t):null,null)}const wg=C.createElement(yg,null);class xg extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(Rn.Provider,{value:this.props.routeContext},C.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ng(e){let{routeContext:n,match:t,children:r}=e,i=C.useContext(Ci);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Rn.Provider,{value:n},r)}function Sg(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);f>=0||Q(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,s=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let p=l[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(s=f),p.route.id){let{loaderData:m,errors:N}=t,x=p.route.loader&&m[p.route.id]===void 0&&(!N||N[p.route.id]===void 0);if(p.route.lazy||x){u=!0,s>=0?l=l.slice(0,s+1):l=[l[0]];break}}}return l.reduceRight((f,p,m)=>{let N,x=!1,S=null,_=null;t&&(N=a&&p.route.id?a[p.route.id]:void 0,S=p.route.errorElement||wg,u&&(s<0&&m===0?(Lg("route-fallback"),x=!0,_=null):s===m&&(x=!0,_=p.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,m+1)),d=()=>{let v;return N?v=S:x?v=_:p.route.Component?v=C.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,C.createElement(Ng,{match:p,routeContext:{outlet:f,matches:g,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?C.createElement(xg,{location:t.location,revalidation:t.revalidation,component:S,error:N,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var vp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vp||{}),yp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yp||{});function kg(e){let n=C.useContext(Ci);return n||Q(!1),n}function jg(e){let n=C.useContext(Hu);return n||Q(!1),n}function Cg(e){let n=C.useContext(Rn);return n||Q(!1),n}function wp(e){let n=Cg(),t=n.matches[n.matches.length-1];return t.route.id||Q(!1),t.route.id}function Eg(){var e;let n=C.useContext(mp),t=jg(),r=wp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Pg(){let{router:e}=kg(vp.UseNavigateStable),n=wp(yp.UseNavigateStable),t=C.useRef(!1);return hp(()=>{t.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:n},o)))},[e,n])}const Mc={};function Lg(e,n,t){Mc[e]||(Mc[e]=!0)}function Rg(e,n){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!n||n.v7_relativeSplatPath),n&&(n.v7_fetcherPersist,n.v7_normalizeFormMethod,n.v7_partialHydration,n.v7_skipActionErrorRevalidation)}function vr(e){let{to:n,replace:t,state:r,relative:i}=e;Sr()||Q(!1);let{future:o,static:l}=C.useContext(Wn),{matches:a}=C.useContext(Rn),{pathname:u}=At(),s=gp(),f=sl(n,ul(a,o.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return C.useEffect(()=>s(JSON.parse(p),{replace:t,state:r,relative:i}),[s,p,i,t,r]),null}function Dg(e){return gg(e.context)}function _g(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Ne.Pop,navigator:o,static:l=!1,future:a}=e;Sr()&&Q(!1);let u=n.replace(/^\/*/,"/"),s=C.useMemo(()=>({basename:u,navigator:o,static:l,future:Ho({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=gt(r));let{pathname:f="/",search:p="",hash:m="",state:N=null,key:x="default"}=r,S=C.useMemo(()=>{let _=Vn(f,u);return _==null?null:{location:{pathname:_,search:p,hash:m,state:N,key:x},navigationType:i}},[u,f,p,m,N,x,i]);return S==null?null:C.createElement(Wn.Provider,{value:s},C.createElement(Wu.Provider,{children:t,value:S}))}new Promise(()=>{});function Tg(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:C.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yr.apply(null,arguments)}function xp(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Mg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,n){return e.button===0&&(!n||n==="_self")&&!Mg(e)}const Fg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ig=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Og="6";try{window.__reactRouterVersion=Og}catch{}function Ag(e,n){return q0({basename:n==null?void 0:n.basename,future:yr({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:y0({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Ug(),routes:e,mapRouteProperties:Tg,dataStrategy:n==null?void 0:n.dataStrategy,patchRoutesOnNavigation:n==null?void 0:n.patchRoutesOnNavigation,window:n==null?void 0:n.window}).initialize()}function Ug(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=yr({},n,{errors:bg(n.errors)})),n}function bg(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,i]of n)if(i&&i.__type==="RouteErrorResponse")t[r]=new Vo(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let l=new o(i.message);l.stack="",t[r]=l}catch{}}if(t[r]==null){let o=new Error(i.message);o.stack="",t[r]=o}}else t[r]=i;return t}const Np=C.createContext({isTransitioning:!1}),Bg=C.createContext(new Map),$g="startTransition",zc=om[$g],Vg="flushSync",Fc=v0[Vg];function Hg(e){zc?zc(e):e()}function Or(e){Fc?Fc(e):e()}class Wg{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function Qg(e){let{fallbackElement:n,router:t,future:r}=e,[i,o]=C.useState(t.state),[l,a]=C.useState(),[u,s]=C.useState({isTransitioning:!1}),[f,p]=C.useState(),[m,N]=C.useState(),[x,S]=C.useState(),_=C.useRef(new Map),{v7_startTransition:g}=r||{},d=C.useCallback(E=>{g?Hg(E):E()},[g]),v=C.useCallback((E,B)=>{let{deletedFetchers:T,flushSync:K,viewTransitionOpts:ie}=B;E.fetchers.forEach((ke,Ye)=>{ke.data!==void 0&&_.current.set(Ye,ke.data)}),T.forEach(ke=>_.current.delete(ke));let ye=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!ie||ye){K?Or(()=>o(E)):d(()=>o(E));return}if(K){Or(()=>{m&&(f&&f.resolve(),m.skipTransition()),s({isTransitioning:!0,flushSync:!0,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})});let ke=t.window.document.startViewTransition(()=>{Or(()=>o(E))});ke.finished.finally(()=>{Or(()=>{p(void 0),N(void 0),a(void 0),s({isTransitioning:!1})})}),Or(()=>N(ke));return}m?(f&&f.resolve(),m.skipTransition(),S({state:E,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})):(a(E),s({isTransitioning:!0,flushSync:!1,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation}))},[t.window,m,f,_,d]);C.useLayoutEffect(()=>t.subscribe(v),[t,v]),C.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new Wg)},[u]),C.useEffect(()=>{if(f&&l&&t.window){let E=l,B=f.promise,T=t.window.document.startViewTransition(async()=>{d(()=>o(E)),await B});T.finished.finally(()=>{p(void 0),N(void 0),a(void 0),s({isTransitioning:!1})}),N(T)}},[d,l,f,t.window]),C.useEffect(()=>{f&&l&&i.location.key===l.location.key&&f.resolve()},[f,m,i.location,l]),C.useEffect(()=>{!u.isTransitioning&&x&&(a(x.state),s({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),S(void 0))},[u.isTransitioning,x]),C.useEffect(()=>{},[]);let j=C.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:E=>t.navigate(E),push:(E,B,T)=>t.navigate(E,{state:B,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(E,B,T)=>t.navigate(E,{replace:!0,state:B,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[t]),R=t.basename||"/",z=C.useMemo(()=>({router:t,navigator:j,static:!1,basename:R}),[t,j,R]),y=C.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return C.useEffect(()=>Rg(r,t.future),[r,t.future]),C.createElement(C.Fragment,null,C.createElement(Ci.Provider,{value:z},C.createElement(Hu.Provider,{value:i},C.createElement(Bg.Provider,{value:_.current},C.createElement(Np.Provider,{value:u},C.createElement(_g,{basename:R,location:i.location,navigationType:i.historyAction,navigator:j,future:y},i.initialized||t.future.v7_partialHydration?C.createElement(qg,{routes:t.routes,future:t.future,state:i}):n))))),null)}const qg=C.memo(Kg);function Kg(e){let{routes:n,future:t,state:r}=e;return vg(n,void 0,r,t)}const Xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=C.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:f,viewTransition:p}=n,m=xp(n,Fg),{basename:N}=C.useContext(Wn),x,S=!1;if(typeof s=="string"&&Gg.test(s)&&(x=s,Xg))try{let v=new URL(window.location.href),j=s.startsWith("//")?new URL(v.protocol+s):new URL(s),R=Vn(j.pathname,N);j.origin===v.origin&&R!=null?s=R+j.search+j.hash:S=!0}catch{}let _=pg(s,{relative:i}),g=Jg(s,{replace:l,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:p});function d(v){r&&r(v),v.defaultPrevented||g(v)}return C.createElement("a",yr({},m,{href:x||_,onClick:S||o?r:d,ref:t,target:u}))}),Ji=C.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:u,viewTransition:s,children:f}=n,p=xp(n,Ig),m=dl(u,{relative:p.relative}),N=At(),x=C.useContext(Hu),{navigator:S,basename:_}=C.useContext(Wn),g=x!=null&&Zg(m)&&s===!0,d=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,v=N.pathname,j=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(v=v.toLowerCase(),j=j?j.toLowerCase():null,d=d.toLowerCase()),j&&_&&(j=Vn(j,_)||j);const R=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let z=v===d||!l&&v.startsWith(d)&&v.charAt(R)==="/",y=j!=null&&(j===d||!l&&j.startsWith(d)&&j.charAt(d.length)==="/"),E={isActive:z,isPending:y,isTransitioning:g},B=z?r:void 0,T;typeof o=="function"?T=o(E):T=[o,z?"active":null,y?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let K=typeof a=="function"?a(E):a;return C.createElement(ve,yr({},p,{"aria-current":B,className:T,ref:t,style:K,to:u,viewTransition:s}),typeof f=="function"?f(E):f)});var Ha;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ha||(Ha={}));var Ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function Yg(e){let n=C.useContext(Ci);return n||Q(!1),n}function Jg(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=n===void 0?{}:n,u=gp(),s=At(),f=dl(e,{relative:l});return C.useCallback(p=>{if(zg(p,t)){p.preventDefault();let m=r!==void 0?r:Ft(s)===Ft(f);u(e,{replace:m,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[s,u,f,r,i,t,e,o,l,a])}function Zg(e,n){n===void 0&&(n={});let t=C.useContext(Np);t==null&&Q(!1);let{basename:r}=Yg(Ha.useViewTransitionState),i=dl(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Vn(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=Vn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return $o(i.pathname,l)!=null||$o(i.pathname,o)!=null}const Jr=(e,n)=>{try{const t=localStorage.getItem(e);return t==null?n:JSON.parse(t)}catch{return n}},Qu=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(n))}catch{}},ql="cn-progress";function fl(e){const n=`cn:solved:${e}`,[t,r]=C.useState(()=>Jr(n,{}));C.useEffect(()=>{const o=()=>r(Jr(n,{}));return o(),window.addEventListener(ql,o),()=>window.removeEventListener(ql,o)},[n]);const i=C.useCallback((o,l=!0)=>{const a=Jr(n,{});l?a[o]=!0:delete a[o],Qu(n,a),r({...a}),window.dispatchEvent(new Event(ql))},[n]);return[t,i]}function ev(){const[e,n]=C.useState(()=>Jr("cn:theme","auto"));return C.useEffect(()=>{const t=document.documentElement;e==="auto"?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e),Qu("cn:theme",e)},[e]),[e,n]}class nv extends Qo.Component{constructor(){super(...arguments);ls(this,"state",{err:!1})}static getDerivedStateFromError(){return{err:!0}}componentDidUpdate(t){t.resetKey!==this.props.resetKey&&this.state.err&&this.setState({err:!1})}render(){return this.state.err?c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"পেজটি লোড হয়নি"}),c.jsx("p",{className:"muted",children:"ব্রাউজার ট্রান্সলেট/এক্সটেনশন বন্ধ করে আবার চেষ্টা করো।"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>window.location.reload(),children:"রিলোড"})]}):this.props.children}}function tv(){const[e,n]=ev(),{pathname:t}=At();Qo.useEffect(()=>{try{window.scrollTo(0,0)}catch{}},[t]);const r={auto:"light",light:"dark",dark:"auto"},i={auto:"🌓",light:"☀️",dark:"🌙"};return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"top",children:c.jsxs("div",{className:"wrap top-in",children:[c.jsxs(ve,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark",children:"{ }"}),c.jsx("span",{children:"কোড নোট"})]}),c.jsxs("nav",{className:"nav",children:[c.jsx(Ji,{to:"/",end:!0,children:"হোম"}),c.jsx(Ji,{to:"/c",children:"C"}),c.jsx(Ji,{to:"/cpp",children:"C++"}),c.jsx(Ji,{to:"/cheatsheet/c",children:"চিটশিট"})]}),c.jsx("button",{className:"btn btn-ghost btn-sm theme",onClick:()=>n(r[e]),title:`থিম: ${e}`,children:i[e]})]})}),c.jsx("main",{className:"wrap main",children:c.jsx(nv,{resetKey:t,children:c.jsx(Dg,{})})},t),c.jsx("footer",{className:"foot",children:c.jsx("div",{className:"wrap",children:"C ও C++ এক্সাম নোট · কোড পড়ো, নিজে লেখো, আউটপুট মেলাও"})})]})}const rv=[{id:"s1",no:"১",title:"বেসিক প্রোগ্রাম (Basic Programs)",items:[{id:"1-1",no:"১.১",name:"Hello World",tip:"সব C প্রোগ্রামের কাঠামো (structure) এখান থেকেই শুরু — #include, main(), return 0;।",code:`#include <stdio.h>
int main() {
    printf("Hello World\\n"); // স্ক্রিনে টেক্সট প্রিন্ট করে
    return 0; // প্রোগ্রাম সফলভাবে শেষ হলো তা বোঝায়
}`,input:"",inputNote:"",output:"Hello World",flags:[]},{id:"1-2",no:"১.২",name:"Add, Subtract, Multiply, Divide",tip:"দুইটা scanf দিয়ে ইনপুট নাও, তারপর ৪টা অপারেটর + - * / প্রয়োগ করো। ভাগের ক্ষেত্রে দ্বিতীয় সংখ্যা শূন্য কিনা চেক করা ভালো অভ্যাস।",code:`#include <stdio.h>
int main() {
    int a, b;
    printf("দুইটি সংখ্যা দিন: ");
    scanf("%d %d", &a, &b);

    printf("যোগফল = %d\\n", a + b);
    printf("বিয়োগফল = %d\\n", a - b);
    printf("গুণফল = %d\\n", a * b);

    if (b != 0) // শূন্য দিয়ে ভাগ করা যায় না
        printf("ভাগফল = %.2f\\n", (float)a / b);
    else
        printf("ভাগফল সংজ্ঞায়িত নয় (b=0)\\n");
    return 0;
}`,input:`10 3
`,inputNote:"10 3",output:`দুইটি সংখ্যা দিন: যোগফল = 13
বিয়োগফল = 7
গুণফল = 30
ভাগফল = 3.33`,flags:[]},{id:"1-3",no:"১.৩",name:"Swap two numbers (with/without third variable)",tip:"তৃতীয় ভ্যারিয়েবল ছাড়া swap করতে হলে যোগ-বিয়োগ অথবা XOR ব্যবহার করা যায়।",code:`#include <stdio.h>
int main() {
    int a = 5, b = 10, temp;

    // ---- তৃতীয় ভ্যারিয়েবল দিয়ে ----
    temp = a;
    a = b;
    b = temp;
    printf("তৃতীয় ভ্যারিয়েবল দিয়ে: a=%d, b=%d\\n", a, b);

    // ---- তৃতীয় ভ্যারিয়েবল ছাড়া (যোগ-বিয়োগ পদ্ধতি) ----
    a = 5; b = 10;
    a = a + b; // a তে দুইজনের যোগফল
    b = a - b; // b = আসল a
    a = a - b; // a = আসল b
    printf("ছাড়া (যোগ-বিয়োগ): a=%d, b=%d\\n", a, b);

    // ---- XOR পদ্ধতি ----
    a = 5; b = 10;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("XOR পদ্ধতি: a=%d, b=%d\\n", a, b);
    return 0;
}`,input:"",inputNote:"",output:`তৃতীয় ভ্যারিয়েবল দিয়ে: a=10, b=5
ছাড়া (যোগ-বিয়োগ): a=10, b=5
XOR পদ্ধতি: a=10, b=5`,flags:[]},{id:"1-4",no:"১.৪",name:"Even/Odd",tip:"% (মডুলাস) দিয়ে ২ দিয়ে ভাগশেষ বের করো — শূন্য হলে জোড়, নাহলে বিজোড়।",code:`#include <stdio.h>
int main() {
    int n;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d জোড় (Even)\\n", n);
    else
        printf("%d বিজোড় (Odd)\\n", n);
    return 0;
}`,input:`7
`,inputNote:"7",output:"সংখ্যা দিন: 7 বিজোড় (Odd)",flags:[]},{id:"1-5",no:"১.৫",name:"Positive/Negative/Zero",tip:"তিনটি শর্ত — >0, <0, ==0 — if-else if-else চেইন দিয়ে চেক করো।",code:`#include <stdio.h>
int main() {
    int n;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    if (n > 0)
        printf("ধনাত্মক (Positive)\\n");
    else if (n < 0)
        printf("ঋণাত্মক (Negative)\\n");
    else
        printf("শূন্য (Zero)\\n");
    return 0;
}`,input:`-5
`,inputNote:"-5",output:"সংখ্যা দিন: ঋণাত্মক (Negative)",flags:[]},{id:"1-6",no:"১.৬",name:"Largest of 2/3 numbers",tip:"nested if অথবা একসাথে তুলনা — a>=b && a>=c হলে a-ই সবচেয়ে বড়।",code:`#include <stdio.h>
int main() {
    int a, b, c;
    printf("তিনটি সংখ্যা দিন: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a >= b && a >= c)
        printf("সবচেয়ে বড়: %d\\n", a);
    else if (b >= a && b >= c)
        printf("সবচেয়ে বড়: %d\\n", b);
    else
        printf("সবচেয়ে বড়: %d\\n", c);
    return 0;
}`,input:`12 45 7
`,inputNote:"12 45 7",output:"তিনটি সংখ্যা দিন: সবচেয়ে বড়: 45",flags:[]},{id:"1-7",no:"১.৭",name:"Leap Year",tip:"নিয়ম — (৪ দিয়ে বিভাজ্য এবং ১০০ দিয়ে বিভাজ্য নয়) অথবা (৪০০ দিয়ে বিভাজ্য)।",code:`#include <stdio.h>
int main() {
    int y;
    printf("সাল দিন: ");
    scanf("%d", &y);
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        printf("%d অধিবর্ষ (Leap Year)\\n", y);
    else
        printf("%d অধিবর্ষ নয়\\n", y);
    return 0;
}`,input:`2024
`,inputNote:"2024",output:"সাল দিন: 2024 অধিবর্ষ (Leap Year)",flags:[]},{id:"1-8",no:"১.৮",name:"Vowel/Consonant",tip:"a,e,i,o,u (ছোট/বড় হাতের) — এই ৫টা অক্ষর হলে vowel, বাকি সব consonant।",code:`#include <stdio.h>
int main() {
    char ch;
    printf("একটি অক্ষর দিন: ");
    scanf("%c", &ch);
    if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||
        ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
        printf("স্বরবর্ণ (Vowel)\\n");
    else
        printf("ব্যঞ্জনবর্ণ (Consonant)\\n");
    return 0;
}`,input:`e
`,inputNote:"e",output:"একটি অক্ষর দিন: স্বরবর্ণ (Vowel)",flags:[]},{id:"1-9",no:"১.৯",name:"Grade Calculation",tip:"নাম্বার অনুযায়ী রেঞ্জ ধরে if-else if চেইন, সবচেয়ে বড় শর্ত আগে চেক করা ভালো।",code:`#include <stdio.h>
int main() {
    int marks;
    printf("নম্বর দিন: ");
    scanf("%d", &marks);

    if (marks >= 80) printf("গ্রেড: A+\\n");
    else if (marks >= 70) printf("গ্রেড: A\\n");
    else if (marks >= 60) printf("গ্রেড: A-\\n");
    else if (marks >= 50) printf("গ্রেড: B\\n");
    else if (marks >= 40) printf("গ্রেড: C\\n");
    else if (marks >= 33) printf("গ্রেড: D\\n");
    else printf("গ্রেড: F (ফেল)\\n");
    return 0;
}`,input:`75
`,inputNote:"75",output:"নম্বর দিন: গ্রেড: A",flags:[]}]},{id:"s2",no:"২",title:"লুপ প্রোগ্রাম (Loop Programs)",items:[{id:"2-1",no:"২.১",name:"Sum of N numbers",tip:"for লুপে sum += i — ১ থেকে n পর্যন্ত যোগ করো।",code:`#include <stdio.h>
int main() {
    int n, sum = 0;
    printf("n দিন: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum += i; // প্রতিবার i যোগ হচ্ছে
    printf("যোগফল = %d\\n", sum);
    return 0;
}`,input:`5
`,inputNote:"5",output:"n দিন: যোগফল = 15",flags:[]},{id:"2-2",no:"২.২",name:"Factorial",tip:"fact *= i, শুরুর মান ১ (গুণের identity)।",code:`#include <stdio.h>
int main() {
    int n;
    long long fact = 1;
    printf("n দিন: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        fact *= i;
    printf("%d! = %lld\\n", n, fact);
    return 0;
}`,input:`5
`,inputNote:"5",output:"n দিন: 5! = 120",flags:[]},{id:"2-3",no:"২.৩",name:"Fibonacci Series",tip:"প্রথম দুইটা 0,1 — পরেরটা আগের দুইটার যোগফল।",code:`#include <stdio.h>
int main() {
    int n, a = 0, b = 1, next;
    printf("কতগুলো পদ চান: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
    return 0;
}`,input:`8
`,inputNote:"8",output:"কতগুলো পদ চান: 0 1 1 2 3 5 8 13 ",flags:[]},{id:"2-4",no:"২.৪",name:"Prime Number",tip:"2 থেকে sqrt(n) পর্যন্ত কোনো সংখ্যা দিয়ে ভাগ গেলে prime না। 1 এবং তার নিচের সংখ্যা prime না।",code:`#include <stdio.h>
#include <math.h>
int main() {
    int n, isPrime = 1;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    if (n <= 1) isPrime = 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) { isPrime = 0; break; }
    }
    printf("%d %s\\n", n, isPrime ? "মৌলিক সংখ্যা (Prime)" : "মৌলিক সংখ্যা নয়");
    return 0;
}`,input:`29
`,inputNote:"29",output:"সংখ্যা দিন: 29 মৌলিক সংখ্যা (Prime)",flags:[]},{id:"2-5",no:"২.৫",name:"Prime numbers in a range",tip:"প্রতিটি সংখ্যার জন্য উপরের prime-চেক ফাংশন বারবার কল করো (nested loop / function)।",code:`#include <stdio.h>
int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}
int main() {
    int low, high;
    printf("শুরু ও শেষ দিন: ");
    scanf("%d %d", &low, &high);
    printf("মৌলিক সংখ্যাসমূহ: ");
    for (int i = low; i <= high; i++)
        if (isPrime(i)) printf("%d ", i);
    printf("\\n");
    return 0;
}`,input:`10 30
`,inputNote:"10 30",output:"শুরু ও শেষ দিন: মৌলিক সংখ্যাসমূহ: 11 13 17 19 23 29 ",flags:[]},{id:"2-6",no:"২.৬",name:"Perfect Number",tip:"যে সংখ্যা তার প্রকৃত ভাজকগুলোর (নিজেকে বাদে) যোগফলের সমান (যেমন 6 = 1+2+3)।",code:`#include <stdio.h>
int main() {
    int n, sum = 0;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    for (int i = 1; i < n; i++)
        if (n % i == 0) sum += i;
    if (sum == n)
        printf("%d একটি পারফেক্ট নাম্বার\\n", n);
    else
        printf("%d পারফেক্ট নাম্বার নয়\\n", n);
    return 0;
}`,input:`28
`,inputNote:"28",output:"সংখ্যা দিন: 28 একটি পারফেক্ট নাম্বার",flags:[]},{id:"2-7",no:"২.৭",name:"Armstrong Number",tip:"প্রতিটি অংককে অংকসংখ্যার (digit count) পাওয়ারে তুলে যোগ করো, মূল সংখ্যার সমান হলে Armstrong।",code:`#include <stdio.h>
#include <math.h>
int main() {
    int n, original, remainder, digits = 0;
    double result = 0;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    original = n;

    // অংক সংখ্যা বের করা
    for (int temp = n; temp != 0; temp /= 10) digits++;

    for (int temp = n; temp != 0; temp /= 10) {
        remainder = temp % 10;
        result += pow(remainder, digits);
    }
    if ((int)result == original)
        printf("%d আর্মস্ট্রং সংখ্যা\\n", original);
    else
        printf("%d আর্মস্ট্রং সংখ্যা নয়\\n", original);
    return 0;
}`,input:`153
`,inputNote:"153",output:"সংখ্যা দিন: 153 আর্মস্ট্রং সংখ্যা",flags:[]},{id:"2-8",no:"২.৮",name:"Palindrome Number",tip:"সংখ্যাটি উল্টিয়ে (reverse) মূল সংখ্যার সাথে মিলিয়ে দেখো।",code:`#include <stdio.h>
int main() {
    int n, original, reversed = 0, remainder;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    original = n;
    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }
    if (original == reversed)
        printf("%d প্যালিনড্রোম\\n", original);
    else
        printf("%d প্যালিনড্রোম নয়\\n", original);
    return 0;
}`,input:`121
`,inputNote:"121",output:"সংখ্যা দিন: 121 প্যালিনড্রোম",flags:[]},{id:"2-9",no:"২.৯",name:"Reverse Number",tip:"while লুপে শেষ অংক বের করে (n%10) নতুন সংখ্যায় বসাও, তারপর n কমাও (n/=10)।",code:`#include <stdio.h>
int main() {
    int n, reversed = 0;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    while (n != 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    printf("উল্টানো সংখ্যা = %d\\n", reversed);
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: উল্টানো সংখ্যা = 54321",flags:[]},{id:"2-10",no:"২.১০",name:"Sum of Digits",tip:"প্রতিবার n%10 যোগ করো এবং n/=10 করে ছোট করো।",code:`#include <stdio.h>
int main() {
    int n, sum = 0;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    while (n != 0) {
        sum += n % 10;
        n /= 10;
    }
    printf("অংকের যোগফল = %d\\n", sum);
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: অংকের যোগফল = 15",flags:[]},{id:"2-11",no:"২.১১",name:"Count Digits",tip:"প্রতিবার n/=10 করে একটা কাউন্টার বাড়াও, n শূন্য না হওয়া পর্যন্ত।",code:`#include <stdio.h>
int main() {
    int n, count = 0;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    while (n != 0) {
        n /= 10;
        count++;
    }
    printf("অংকের সংখ্যা = %d\\n", count);
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: অংকের সংখ্যা = 5",flags:[]},{id:"2-12",no:"২.১২",name:"GCD & LCM",tip:"ইউক্লিডের অ্যালগরিদম — while(b) { t=b; b=a%b; a=t; } দিয়ে GCD, তারপর LCM = (a*b)/GCD।",code:`#include <stdio.h>
int main() {
    int a, b, x, y, temp, gcd, lcm;
    printf("দুইটি সংখ্যা দিন: ");
    scanf("%d %d", &a, &b);
    x = a; y = b;
    while (y != 0) { // ইউক্লিডের অ্যালগরিদম
        temp = y;
        y = x % y;
        x = temp;
    }
    gcd = x;
    lcm = (a * b) / gcd;
    printf("GCD = %d\\n", gcd);
    printf("LCM = %d\\n", lcm);
    return 0;
}`,input:`48 18
`,inputNote:"48 18",output:`দুইটি সংখ্যা দিন: GCD = 6
LCM = 144`,flags:[]}]},{id:"s3",no:"৩",title:"প্যাটার্ন প্রোগ্রাম (Pattern Programs)",items:[{id:"3-1",no:"৩.১",name:"Right Triangle (*)",tip:"বাইরের লুপ সারি (row), ভিতরের লুপ কলাম — সারি নাম্বার অনুযায়ী * প্রিন্ট করো।",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`* 
* * 
* * * 
* * * * 
* * * * * `,flags:[]},{id:"3-2",no:"৩.২",name:"Inverted Triangle",tip:"বাইরের লুপ n থেকে 1 পর্যন্ত কমতে থাকবে।",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`* * * * * 
* * * * 
* * * 
* * 
* `,flags:[]},{id:"3-3",no:"৩.৩",name:"Pyramid",tip:"প্রথমে স্পেস প্রিন্ট করো (n-i বার), তারপর স্টার প্রিন্ট করো (2*i-1 বার)।",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int j = 1; j <= 2 * i - 1; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`    *
   ***
  *****
 *******
*********`,flags:[]},{id:"3-4",no:"৩.৪",name:"Floyd’s Triangle",tip:"একটি কাউন্টার (num) রাখো যেটা প্রতিটি প্রিন্টে ১ করে বাড়বে, সারি অনুযায়ী সংখ্যা বসবে।",code:`#include <stdio.h>
int main() {
    int n = 5, num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("%d ", num++);
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 `,flags:[]},{id:"3-5",no:"৩.৫",name:"Pascal’s Triangle",tip:"প্রতিটি সংখ্যা = উপরের দুইটা সংখ্যার যোগফল। সূত্র: C(i,j) = i! / (j!*(i-j)!)",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 0; i < n; i++) {
        int val = 1;
        for (int s = 0; s < n - i - 1; s++) printf(" ");
        for (int j = 0; j <= i; j++) {
            printf("%d ", val);
            val = val * (i - j) / (j + 1); // পরের বাইনমিয়াল কোএফিশিয়েন্ট বের করা
        }
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`    1 
   1 1 
  1 2 1 
 1 3 3 1 
1 4 6 4 1 `,flags:[]},{id:"3-6",no:"৩.৬",name:"Number Pattern",tip:"ভিতরের লুপে j নিজেই প্রিন্ট হয় (1,2,3…i)।",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            printf("%d ", j);
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `,flags:[]},{id:"3-7",no:"৩.৭",name:"Alphabet Pattern",tip:"'A' + j করলে অক্ষর পাওয়া যায় (ASCII এর সাহায্যে)।",code:`#include <stdio.h>
int main() {
    int n = 5;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++)
            printf("%c ", 'A' + j); // ASCII ভিত্তিতে অক্ষর
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`A 
A B 
A B C 
A B C D 
A B C D E `,flags:[]}]},{id:"s4",no:"৪",title:"অ্যারে প্রোগ্রাম (Array Programs)",items:[{id:"4-1",no:"৪.১",name:"Largest & Smallest Element",tip:"প্রথম এলিমেন্টকে max/min ধরে বাকি সবগুলোর সাথে তুলনা করো।",code:`#include <stdio.h>
int main() {
    int arr[] = {12, 45, 2, 41, 31, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = arr[0], min = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    printf("সবচেয়ে বড়: %d, সবচেয়ে ছোট: %d\\n", max, min);
    return 0;
}`,input:"",inputNote:"",output:"সবচেয়ে বড়: 45, সবচেয়ে ছোট: 2",flags:[]},{id:"4-2",no:"৪.২",name:"Second Largest",tip:"একবারে max ও secondMax দুটোই আপডেট করো — max ভাঙলে পুরনো max হবে secondMax।",code:`#include <stdio.h>
int main() {
    int arr[] = {12, 45, 2, 41, 31, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = arr[0], second = -1;
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] > second && arr[i] != max) {
            second = arr[i];
        }
    }
    printf("দ্বিতীয় বৃহত্তম: %d\\n", second);
    return 0;
}`,input:"",inputNote:"",output:"দ্বিতীয় বৃহত্তম: 41",flags:[]},{id:"4-3",no:"৪.৩",name:"Reverse Array",tip:"দুটি পয়েন্টার (start, end) দিয়ে swap করো, মাঝখানে গিয়ে থামবে।",code:`#include <stdio.h>
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0, j = n - 1; i < j; i++, j--) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"5 4 3 2 1 ",flags:[]},{id:"4-4",no:"৪.৪",name:"Array Sorting (Bubble Sort)",tip:"পাশাপাশি দুইটা এলিমেন্ট তুলনা করে বড়টাকে পিছনে ঠেলে দাও (বুদবুদের মতো ভাসে বড়টা)।",code:`#include <stdio.h>
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                int t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"1 2 5 5 6 9 ",flags:[]},{id:"4-5",no:"৪.৫",name:"Selection Sort",tip:"প্রতি ধাপে বাকি অংশ থেকে সবচেয়ে ছোট এলিমেন্টের index খুঁজে current position-এর সাথে swap করো।",code:`#include <stdio.h>
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;
        int t = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = t;
    }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"1 2 5 5 6 9 ",flags:[]},{id:"4-6",no:"৪.৬",name:"Linear Search",tip:"শুরু থেকে শেষ পর্যন্ত প্রতিটি এলিমেন্ট এক এক করে চেক করো — সহজ কিন্তু ধীর (O(n))।",code:`#include <stdio.h>
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]), key = 9, found = -1;
    for (int i = 0; i < n; i++)
        if (arr[i] == key) { found = i; break; }
    if (found != -1) printf("%d পাওয়া গেছে index %d এ\\n", key, found);
    else printf("পাওয়া যায়নি\\n");
    return 0;
}`,input:"",inputNote:"",output:"9 পাওয়া গেছে index 2 এ",flags:[]},{id:"4-7",no:"৪.৭",name:"Binary Search",tip:"অ্যারে sorted থাকতে হবে। মাঝের এলিমেন্টের সাথে তুলনা করে অর্ধেক অংশ বাদ দাও (O(log n))।",code:`#include <stdio.h>
int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int n = sizeof(arr) / sizeof(arr[0]), key = 7;
    int low = 0, high = n - 1, found = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) { found = mid; break; }
        else if (arr[mid] < key) low = mid + 1; // ডান দিকে খোঁজো
        else high = mid - 1;                    // বাম দিকে খোঁজো
    }
    if (found != -1) printf("%d পাওয়া গেছে index %d এ\\n", key, found);
    else printf("পাওয়া যায়নি\\n");
    return 0;
}`,input:"",inputNote:"",output:"7 পাওয়া গেছে index 3 এ",flags:[]},{id:"4-8",no:"৪.৮",name:"Merge Two Arrays",tip:"নতুন অ্যারেতে প্রথম অ্যারের সব উপাদান, তারপর দ্বিতীয় অ্যারের সব উপাদান কপি করো।",code:`#include <stdio.h>
int main() {
    int a[] = {1, 2, 3}, b[] = {4, 5, 6};
    int n1 = 3, n2 = 3;
    int merged[6], k = 0;
    for (int i = 0; i < n1; i++) merged[k++] = a[i];
    for (int i = 0; i < n2; i++) merged[k++] = b[i];
    for (int i = 0; i < k; i++) printf("%d ", merged[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 6 ",flags:[]},{id:"4-9",no:"৪.৯",name:"Matrix Addition",tip:"একই position-এর (i,j) দুইটা এলিমেন্ট যোগ করো।",code:`#include <stdio.h>
int main() {
    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            c[i][j] = a[i][j] + b[i][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) printf("%d ", c[i][j]);
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`6 8 
10 12 `,flags:[]},{id:"4-10",no:"৪.১০",name:"Matrix Multiplication",tip:"তিনটা লুপ লাগবে (i,j,k) — প্রথম ম্যাট্রিক্সের row × দ্বিতীয় ম্যাট্রিক্সের column, ভিতরে sum যোগ হবে।",code:`#include <stdio.h>
int main() {
    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2] = {0};
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 2; k++)
                c[i][j] += a[i][k] * b[k][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) printf("%d ", c[i][j]);
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`19 22 
43 50 `,flags:[]},{id:"4-11",no:"৪.১১",name:"Matrix Transpose",tip:"row আর column অদল-বদল করো — transpose[j][i] = matrix[i][j]।",code:`#include <stdio.h>
int main() {
    int a[2][3] = {{1,2,3},{4,5,6}};
    int t[3][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            t[j][i] = a[i][j];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) printf("%d ", t[i][j]);
        printf("\\n");
    }
    return 0;
}`,input:"",inputNote:"",output:`1 4 
2 5 
3 6 `,flags:[]}]},{id:"s5",no:"৫",title:"স্ট্রিং প্রোগ্রাম (String Programs)",items:[{id:"5-1",no:"৫.১",name:"String Length (without strlen())",tip:"যতক্ষণ না নাল ক্যারেক্টার (\\0) পাওয়া যায়, ততক্ষণ কাউন্ট বাড়াও।",code:`#include <stdio.h>
int main() {
    char str[] = "Bangladesh";
    int len = 0;
    while (str[len] != '\\0') len++;
    printf("দৈর্ঘ্য = %d\\n", len);
    return 0;
}`,input:"",inputNote:"",output:"দৈর্ঘ্য = 10",flags:[]},{id:"5-2",no:"৫.২",name:"String Copy",tip:"প্রতিটি অক্ষর এক এক করে নতুন অ্যারেতে কপি করো, শেষে \\0 বসাও।",code:`#include <stdio.h>
int main() {
    char src[] = "Hello";
    char dest[50];
    int i;
    for (i = 0; src[i] != '\\0'; i++)
        dest[i] = src[i];
    dest[i] = '\\0'; // স্ট্রিং শেষের চিহ্ন
    printf("কপি করা স্ট্রিং: %s\\n", dest);
    return 0;
}`,input:"",inputNote:"",output:"কপি করা স্ট্রিং: Hello",flags:[]},{id:"5-3",no:"৫.৩",name:"String Compare",tip:"প্রতিটি অক্ষর মিলিয়ে দেখো — কোথাও অমিল পেলে সাথে সাথে unequal ঘোষণা করো।",code:`#include <stdio.h>
int main() {
    char s1[] = "abc", s2[] = "abd";
    int i = 0, isEqual = 1;
    while (s1[i] != '\\0' && s2[i] != '\\0') {
        if (s1[i] != s2[i]) { isEqual = 0; break; }
        i++;
    }
    if (s1[i] != s2[i]) isEqual = 0; // দৈর্ঘ্য ভিন্ন হলে
    printf("%s\\n", isEqual ? "স্ট্রিং সমান" : "স্ট্রিং ভিন্ন");
    return 0;
}`,input:"",inputNote:"",output:"স্ট্রিং ভিন্ন",flags:[]},{id:"5-4",no:"৫.৪",name:"String Reverse",tip:"শুরু (start) ও শেষ (end) index থেকে অক্ষর swap করো, মাঝে গিয়ে থামো।",code:`#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "Bangladesh";
    int len = strlen(str);
    for (int i = 0, j = len - 1; i < j; i++, j--) {
        char t = str[i];
        str[i] = str[j];
        str[j] = t;
    }
    printf("উল্টানো স্ট্রিং: %s\\n", str);
    return 0;
}`,input:"",inputNote:"",output:"উল্টানো স্ট্রিং: hsedalgnaB",flags:[]},{id:"5-5",no:"৫.৫",name:"Palindrome String",tip:"স্ট্রিং উল্টিয়ে মূল স্ট্রিংয়ের সাথে মিলিয়ে দেখো, অথবা দুই প্রান্ত থেকে তুলনা করো।",code:`#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "madam";
    int len = strlen(str), isPalindrome = 1;
    for (int i = 0; i < len / 2; i++)
        if (str[i] != str[len - 1 - i]) { isPalindrome = 0; break; }
    printf("%s\\n", isPalindrome ? "প্যালিনড্রোম" : "প্যালিনড্রোম নয়");
    return 0;
}`,input:"",inputNote:"",output:"প্যালিনড্রোম",flags:[]},{id:"5-6",no:"৫.৬",name:"Count Vowels/Consonants",tip:"প্রতিটি অক্ষর চেক করো — vowel হলে vowel কাউন্টার, letter হয়েও vowel না হলে consonant কাউন্টার বাড়াও।",code:`#include <stdio.h>
#include <ctype.h>
int main() {
    char str[] = "Bangladesh";
    int vowels = 0, consonants = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') vowels++;
        else if (ch >= 'a' && ch <= 'z') consonants++;
    }
    printf("স্বরবর্ণ = %d, ব্যঞ্জনবর্ণ = %d\\n", vowels, consonants);
    return 0;
}`,input:"",inputNote:"",output:"স্বরবর্ণ = 3, ব্যঞ্জনবর্ণ = 7",flags:[]},{id:"5-7",no:"৫.৭",name:"Count Words",tip:"স্পেস থেকে non-space এ ট্রানজিশন হলেই একটা নতুন শব্দ শুরু ধরে কাউন্ট বাড়াও।",code:`#include <stdio.h>
int main() {
    char str[] = "I love Bangladesh";
    int count = 0, i = 0;
    while (str[i] != '\\0') {
        if (str[i] != ' ' && (i == 0 || str[i-1] == ' '))
            count++; // নতুন শব্দ শুরু
        i++;
    }
    printf("শব্দ সংখ্যা = %d\\n", count);
    return 0;
}`,input:"",inputNote:"",output:"শব্দ সংখ্যা = 3",flags:[]},{id:"5-8",no:"৫.৮",name:"Character Frequency",tip:"২৬টা অক্ষরের জন্য একটা freq[26] অ্যারে রাখো, প্রতিটা অক্ষরের index এ কাউন্ট বাড়াও।",code:`#include <stdio.h>
#include <ctype.h>
int main() {
    char str[] = "programming";
    int freq[26] = {0};
    for (int i = 0; str[i] != '\\0'; i++)
        freq[tolower(str[i]) - 'a']++;
    for (int i = 0; i < 26; i++)
        if (freq[i] > 0)
            printf("%c: %d বার\\n", 'a' + i, freq[i]);
    return 0;
}`,input:"",inputNote:"",output:`a: 1 বার
g: 2 বার
i: 1 বার
m: 2 বার
n: 1 বার
o: 1 বার
p: 1 বার
r: 2 বার`,flags:[]}]},{id:"s6",no:"৬",title:"ফাংশন প্রোগ্রাম (Function Programs)",items:[{id:"6-1",no:"৬.১",name:"Recursive Factorial",tip:"বেস কেস n==0 বা 1 হলে return 1, নাহলে n * fact(n-1)।",code:`#include <stdio.h>
long long fact(int n) {
    if (n <= 1) return 1; // বেস কেস
    return n * fact(n - 1); // রিকার্সিভ কল
}
int main() {
    int n = 5;
    printf("%d! = %lld\\n", n, fact(n));
    return 0;
}`,input:"",inputNote:"",output:"5! = 120",flags:[]},{id:"6-2",no:"৬.২",name:"Recursive Fibonacci",tip:"বেস কেস n==0 বা n==1, নাহলে fib(n-1) + fib(n-2)।",code:`#include <stdio.h>
int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
int main() {
    int n = 8;
    for (int i = 0; i < n; i++)
        printf("%d ", fib(i));
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"0 1 1 2 3 5 8 13 ",flags:[]},{id:"6-3",no:"৬.৩",name:"Recursive GCD",tip:"ইউক্লিডের সূত্র রিকার্সিভভাবে — gcd(a,b) = gcd(b, a%b), b==0 হলে a ই উত্তর।",code:`#include <stdio.h>
int gcd(int a, int b) {
    if (b == 0) return a; // বেস কেস
    return gcd(b, a % b);
}
int main() {
    int a = 48, b = 18;
    printf("GCD = %d\\n", gcd(a, b));
    return 0;
}`,input:"",inputNote:"",output:"GCD = 6",flags:[]},{id:"6-4",no:"৬.৪",name:"Call by Value vs Call by Reference",tip:"Call by value → কপি পাস হয় (মূল ভ্যারিয়েবল বদলায় না)। Call by reference → address (pointer) পাস হয় (মূল ভ্যারিয়েবল বদলায়)।",code:`#include <stdio.h>
void byValue(int x) {
    x = x + 10; // শুধু কপি বদলায়
}
void byReference(int *x) {
    *x = *x + 10; // মূল ভ্যারিয়েবল বদলায়
}
int main() {
    int a = 5;
    byValue(a);
    printf("byValue এর পর a = %d (অপরিবর্তিত)\\n", a);

    byReference(&a);
    printf("byReference এর পর a = %d (পরিবর্তিত)\\n", a);
    return 0;
}`,input:"",inputNote:"",output:`byValue এর পর a = 5 (অপরিবর্তিত)
byReference এর পর a = 15 (পরিবর্তিত)`,flags:[]}]},{id:"s7",no:"৭",title:"পয়েন্টার প্রোগ্রাম (Pointer Programs)",items:[{id:"7-1",no:"৭.১",name:"Pointer Basics",tip:"& মানে address নাও, * মানে সেই address এর মান নাও (dereference)।",code:`#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a; // p এখন a এর address ধারণ করছে
    printf("a এর মান = %d\\n", a);
    printf("a এর address = %p\\n", (void*)&a);
    printf("p এর মান (address) = %p\\n", (void*)p);
    printf("*p (dereference) = %d\\n", *p);
    return 0;
}`,input:"",inputNote:"",output:`a এর মান = 10
a এর address = 0x7ffc547be53c
p এর মান (address) = 0x7ffc547be53c
*p (dereference) = 10`,flags:["address"]},{id:"7-2",no:"৭.২",name:"Swap using Pointers",tip:"ফাংশনে address পাঠাও (&a, &b), ফাংশনের ভিতরে * দিয়ে মূল মান বদলাও।",code:`#include <stdio.h>
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}
int main() {
    int a = 5, b = 10;
    swap(&a, &b);
    printf("a=%d, b=%d\\n", a, b);
    return 0;
}`,input:"",inputNote:"",output:"a=10, b=5",flags:[]},{id:"7-3",no:"৭.৩",name:"Array using Pointer",tip:"অ্যারের নাম নিজেই প্রথম এলিমেন্টের address — *(arr+i) মানে arr[i]।",code:`#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr; // অ্যারের নাম = প্রথম এলিমেন্টের address
    for (int i = 0; i < 4; i++)
        printf("%d ", *(p + i)); // pointer arithmetic
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"10 20 30 40 ",flags:[]},{id:"7-4",no:"৭.৪",name:"String using Pointer",tip:"char *p দিয়ে স্ট্রিং এর উপর দিয়ে হাঁটো, \\0 না পাওয়া পর্যন্ত p++ করো।",code:`#include <stdio.h>
int main() {
    char str[] = "Hello";
    char *p = str;
    while (*p != '\\0') {
        printf("%c", *p);
        p++;
    }
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"Hello",flags:[]}]},{id:"s8",no:"৮",title:"স্ট্রাকচার ও ইউনিয়ন (Structure & Union)",items:[{id:"8-1",no:"৮.১",name:"Student Information",tip:"struct দিয়ে ভিন্ন ভিন্ন টাইপের ডেটা একসাথে গ্রুপ করা যায় — . (dot) দিয়ে মেম্বার অ্যাক্সেস করো।",code:`#include <stdio.h>
struct Student {
    char name[50];
    int roll;
    float gpa;
};
int main() {
    struct Student s1 = {"Mugdho", 101, 3.85};
    printf("নাম: %s, রোল: %d, GPA: %.2f\\n", s1.name, s1.roll, s1.gpa);
    return 0;
}`,input:"",inputNote:"",output:"নাম: Mugdho, রোল: 101, GPA: 3.85",flags:[]},{id:"8-2",no:"৮.২",name:"Employee Record",tip:"একাধিক স্ট্রাকচার ভ্যারিয়েবল অ্যারে আকারে রাখা যায় — struct Employee emp[10]।",code:`#include <stdio.h>
struct Employee {
    char name[50];
    int id;
    float salary;
};
int main() {
    struct Employee e[2] = {
        {"Karim", 1, 30000},
        {"Rahim", 2, 35000}
    };
    for (int i = 0; i < 2; i++)
        printf("ID: %d, নাম: %s, বেতন: %.2f\\n", e[i].id, e[i].name, e[i].salary);
    return 0;
}`,input:"",inputNote:"",output:`ID: 1, নাম: Karim, বেতন: 30000.00
ID: 2, নাম: Rahim, বেতন: 35000.00`,flags:[]},{id:"8-3",no:"৮.৩",name:"Nested Structure",tip:"একটা struct আরেকটা struct এর ভিতরে রাখা যায় — অ্যাক্সেস করতে . দুইবার লাগে।",code:`#include <stdio.h>
struct Date {
    int day, month, year;
};
struct Employee {
    char name[50];
    struct Date joiningDate; // নেস্টেড স্ট্রাকচার
};
int main() {
    struct Employee e1 = {"Karim", {15, 8, 2023}};
    printf("নাম: %s, যোগদান: %d/%d/%d\\n",
           e1.name, e1.joiningDate.day, e1.joiningDate.month, e1.joiningDate.year);
    return 0;
}`,input:"",inputNote:"",output:"নাম: Karim, যোগদান: 15/8/2023",flags:[]},{id:"8-4",no:"৮.৪",name:"Union Example",tip:"union এর সব মেম্বার একই memory ভাগাভাগি করে — একসাথে একটাই মেম্বারের মান ঠিক থাকে (struct এর মতো আলাদা মেমরি না)।",code:`#include <stdio.h>
union Data {
    int i;
    float f;
    char str[20];
};
int main() {
    union Data data;
    data.i = 10;
    printf("i = %d\\n", data.i);

    data.f = 3.14; // এখন data.i এর মান আর ঠিক থাকবে না, একই মেমরি শেয়ার করে
    printf("f = %.2f\\n", data.f);

    printf("union এর আকার (sizeof) = %lu bytes (সবচেয়ে বড় মেম্বারের সমান)\\n", sizeof(data));
    return 0;
}`,input:"",inputNote:"",output:`i = 10
f = 3.14
union এর আকার (sizeof) = 20 bytes (সবচেয়ে বড় মেম্বারের সমান)`,flags:[]}]},{id:"s9",no:"৯",title:"ফাইল হ্যান্ডলিং (File Handling)",items:[{id:"9-1",no:"৯.১",name:"Write to File",tip:'fopen(filename, "w") → লেখা → fclose()। “w” মানে write mode (আগের ডেটা মুছে যায়)।',code:`#include <stdio.h>
int main() {
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) { printf("ফাইল খোলা যায়নি\\n"); return 1; }
    fprintf(fp, "Hello, this is a test file.\\n");
    fclose(fp);
    printf("ফাইলে লেখা হয়েছে\\n");
    return 0;
}`,input:"",inputNote:"",output:"ফাইলে লেখা হয়েছে",flags:[]},{id:"9-2",no:"৯.২",name:"Read from File",tip:'fopen(filename, "r") → fgets() বা fscanf() দিয়ে পড়ো → fclose()।',code:`#include <stdio.h>
int main() {
    char buffer[100];
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) { printf("ফাইল খোলা যায়নি\\n"); return 1; }
    while (fgets(buffer, 100, fp) != NULL)
        printf("%s", buffer);
    fclose(fp);
    return 0;
}`,input:"",inputNote:"",output:"Hello, this is a test file.",flags:["needsFile"]},{id:"9-3",no:"৯.৩",name:"Append File",tip:"“a” মোড ব্যবহার করলে ফাইলের শেষে নতুন ডেটা যোগ হয় (আগেরটা মুছে যায় না)।",code:`#include <stdio.h>
int main() {
    FILE *fp = fopen("data.txt", "a"); // append mode
    if (fp == NULL) { printf("ফাইল খোলা যায়নি\\n"); return 1; }
    fprintf(fp, "নতুন লাইন যোগ করা হলো।\\n");
    fclose(fp);
    printf("ফাইলে যোগ করা হয়েছে\\n");
    return 0;
}`,input:"",inputNote:"",output:"ফাইলে যোগ করা হয়েছে",flags:[]},{id:"9-4",no:"৯.৪",name:"Copy File",tip:"একটা ফাইল “r” মোডে খুলে অক্ষর বা লাইন পড়ো, আরেকটা “w” মোডে খুলে লিখে দাও।",code:`#include <stdio.h>
int main() {
    FILE *src = fopen("data.txt", "r");
    FILE *dest = fopen("copy.txt", "w");
    char ch;
    if (src == NULL || dest == NULL) { printf("ফাইল খোলা যায়নি\\n"); return 1; }
    while ((ch = fgetc(src)) != EOF)
        fputc(ch, dest);
    fclose(src);
    fclose(dest);
    printf("ফাইল কপি সম্পন্ন\\n");
    return 0;
}`,input:"",inputNote:"",output:"ফাইল কপি সম্পন্ন",flags:["needsFile"]}]},{id:"s10",no:"১০",title:"ডাইনামিক মেমরি (Dynamic Memory)",items:[{id:"10-1",no:"১০.১",name:"malloc()",tip:"malloc(n * size) — মেমরি বরাদ্দ করে কিন্তু initialize করে না (garbage value থাকতে পারে)।",code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int n = 5;
    int *arr = (int*) malloc(n * sizeof(int));
    if (arr == NULL) { printf("মেমরি বরাদ্দ ব্যর্থ\\n"); return 1; }
    for (int i = 0; i < n; i++) arr[i] = i + 1;
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 ",flags:[]},{id:"10-2",no:"১০.২",name:"calloc()",tip:"calloc(n, size) — মেমরি বরাদ্দ করে এবং সব শূন্য (0) দিয়ে initialize করে দেয়।",code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int n = 5;
    int *arr = (int*) calloc(n, sizeof(int)); // সব 0 দিয়ে শুরু হয়
    if (arr == NULL) { printf("মেমরি বরাদ্দ ব্যর্থ\\n"); return 1; }
    for (int i = 0; i < n; i++) printf("%d ", arr[i]); // সব 0 দেখাবে
    printf("\\n");
    free(arr);
    return 0;
}`,input:"",inputNote:"",output:"0 0 0 0 0 ",flags:[]},{id:"10-3",no:"১০.৩",name:"realloc()",tip:"আগের বরাদ্দকৃত মেমরির আকার পরিবর্তন করে (বাড়ায়/কমায়), পুরনো ডেটা রক্ষিত থাকে।",code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *arr = (int*) malloc(3 * sizeof(int));
    arr[0]=1; arr[1]=2; arr[2]=3;

    arr = (int*) realloc(arr, 5 * sizeof(int)); // আকার ৩ থেকে ৫ করা হলো
    arr[3] = 4; arr[4] = 5;

    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 ",flags:[]},{id:"10-4",no:"১০.৪",name:"free()",tip:"যে মেমরি malloc/calloc/realloc দিয়ে নেওয়া হয়েছে, ব্যবহার শেষে অবশ্যই free() করতে হয় — নাহলে memory leak হয়।",code:`#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int*) malloc(sizeof(int));
    *p = 100;
    printf("মান = %d\\n", *p);
    free(p); // মেমরি ছেড়ে দেওয়া হলো
    p = NULL; // dangling pointer এড়ানোর জন্য ভালো অভ্যাস
    printf("মেমরি ফ্রি করা হয়েছে\\n");
    return 0;
}`,input:"",inputNote:"",output:`মান = 100
মেমরি ফ্রি করা হয়েছে`,flags:[]}]},{id:"s11",no:"১১",title:"ডেটা স্ট্রাকচার (C তে ইমপ্লিমেন্টেশন)",items:[{id:"11-1",no:"১১.১",name:"Stack (Array)",tip:"LIFO (Last In First Out) — top ভ্যারিয়েবল দিয়ে শেষ এলিমেন্ট ট্র্যাক করো। push এ top++, pop এ top–।",code:`#include <stdio.h>
#define MAX 5
int stack[MAX], top = -1;

void push(int val) {
    if (top == MAX - 1) { printf("Stack Overflow\\n"); return; }
    stack[++top] = val;
}
int pop() {
    if (top == -1) { printf("Stack Underflow\\n"); return -1; }
    return stack[top--];
}
int main() {
    push(10); push(20); push(30);
    printf("Pop: %d\\n", pop());
    printf("Pop: %d\\n", pop());
    return 0;
}`,input:"",inputNote:"",output:`Pop: 30
Pop: 20`,flags:[]},{id:"11-2",no:"১১.২",name:"Stack (Linked List)",tip:"নতুন নোড সবসময় head এর সামনে (top এ) যোগ হয় (push), head সরিয়ে remove হয় (pop)।",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *next;
};
struct Node *top = NULL;

void push(int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = top; // নতুন নোড আগেরটার আগে বসবে
    top = newNode;
}
int pop() {
    if (top == NULL) { printf("Stack Empty\\n"); return -1; }
    int val = top->data;
    struct Node *temp = top;
    top = top->next;
    free(temp);
    return val;
}
int main() {
    push(10); push(20); push(30);
    printf("Pop: %d\\n", pop());
    printf("Pop: %d\\n", pop());
    return 0;
}`,input:"",inputNote:"",output:`Pop: 30
Pop: 20`,flags:[]},{id:"11-3",no:"১১.৩",name:"Queue (Array)",tip:"FIFO (First In First Out) — front থেকে বের হয়, rear এ ঢুকে।",code:`#include <stdio.h>
#define MAX 5
int queue[MAX], front = -1, rear = -1;

void enqueue(int val) {
    if (rear == MAX - 1) { printf("Queue Full\\n"); return; }
    if (front == -1) front = 0;
    queue[++rear] = val;
}
int dequeue() {
    if (front == -1 || front > rear) { printf("Queue Empty\\n"); return -1; }
    return queue[front++];
}
int main() {
    enqueue(10); enqueue(20); enqueue(30);
    printf("Dequeue: %d\\n", dequeue());
    printf("Dequeue: %d\\n", dequeue());
    return 0;
}`,input:"",inputNote:"",output:`Dequeue: 10
Dequeue: 20`,flags:[]},{id:"11-4",no:"১১.৪",name:"Circular Queue",tip:"rear শেষে পৌঁছালে আবার 0 তে ফিরে যায় — (rear+1) % MAX সূত্র ব্যবহার করো।",code:`#include <stdio.h>
#define MAX 5
int cqueue[MAX], front = -1, rear = -1;

void enqueue(int val) {
    if ((rear + 1) % MAX == front) { printf("Queue Full\\n"); return; }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    cqueue[rear] = val;
}
int dequeue() {
    if (front == -1) { printf("Queue Empty\\n"); return -1; }
    int val = cqueue[front];
    if (front == rear) front = rear = -1; // শেষ এলিমেন্ট
    else front = (front + 1) % MAX;
    return val;
}
int main() {
    enqueue(1); enqueue(2); enqueue(3);
    printf("Dequeue: %d\\n", dequeue());
    enqueue(4);
    printf("Dequeue: %d\\n", dequeue());
    return 0;
}`,input:"",inputNote:"",output:`Dequeue: 1
Dequeue: 2`,flags:[]},{id:"11-5",no:"১১.৫",name:"Linked List",tip:"প্রতিটি নোডে data + next pointer থাকে। শেষে নতুন নোড যোগ করতে হলে শেষ নোড পর্যন্ত হাঁটতে হয়।",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *next;
};
struct Node *head = NULL;

void insert(int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = NULL;
    if (head == NULL) { head = newNode; return; }
    struct Node *temp = head;
    while (temp->next != NULL) temp = temp->next; // শেষ পর্যন্ত যাওয়া
    temp->next = newNode;
}
void display() {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}
int main() {
    insert(10); insert(20); insert(30);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 -> 20 -> 30 -> NULL",flags:[]},{id:"11-6",no:"১১.৬",name:"Doubly Linked List",tip:"প্রতিটি নোডে দুইটা pointer — prev (আগের নোড) ও next (পরের নোড), তাই দুই দিকেই যাওয়া যায়।",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *prev, *next;
};
struct Node *head = NULL;

void insert(int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->prev = NULL;
    newNode->next = head;
    if (head != NULL) head->prev = newNode;
    head = newNode;
}
void display() {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}
int main() {
    insert(30); insert(20); insert(10);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 <-> 20 <-> 30 <-> NULL",flags:[]},{id:"11-7",no:"১১.৭",name:"Circular Linked List",tip:"শেষ নোডের next হেড (head) কে নির্দেশ করে, তাই কোনো NULL থাকে না — চক্রাকারে ঘোরে।",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *next;
};
struct Node *head = NULL;

void insert(int val) {
    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));
    newNode->data = val;
    if (head == NULL) {
        head = newNode;
        newNode->next = head; // নিজের দিকে নির্দেশ করে
        return;
    }
    struct Node *temp = head;
    while (temp->next != head) temp = temp->next;
    temp->next = newNode;
    newNode->next = head; // চক্র সম্পূর্ণ করা
}
void display() {
    if (head == NULL) return;
    struct Node *temp = head;
    do {
        printf("%d -> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(head)\\n");
}
int main() {
    insert(10); insert(20); insert(30);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 -> 20 -> 30 -> (head)",flags:[]},{id:"11-8",no:"১১.৮",name:"Binary Search Tree (BST)",tip:"বামের সব নোড ছোট, ডানের সব নোড বড় — insert এ তুলনা করে বাম/ডানে যাও।",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *left, *right;
};
struct Node* newNode(int val) {
    struct Node* node = (struct Node*) malloc(sizeof(struct Node));
    node->data = val;
    node->left = node->right = NULL;
    return node;
}
struct Node* insert(struct Node* root, int val) {
    if (root == NULL) return newNode(val);
    if (val < root->data) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    return root;
}
void inorder(struct Node* root) { // ছোট থেকে বড় ক্রমে প্রিন্ট করে
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
int main() {
    struct Node* root = NULL;
    int vals[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, vals[i]);
    inorder(root);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"20 30 40 50 60 70 80 ",flags:[]},{id:"11-9",no:"১১.৯",name:"Tree Traversal (Preorder, Inorder, Postorder)",tip:"- Preorder: রুট-বাম-ডান (Root → Left → Right) - Inorder: বাম-রুট-ডান (Left → Root → Right) - Postorder: বাম-ডান-রুট (Left → Right → Root)",code:`#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *left, *right;
};
struct Node* newNode(int val) {
    struct Node* n = (struct Node*) malloc(sizeof(struct Node));
    n->data = val; n->left = n->right = NULL;
    return n;
}
void preorder(struct Node* r) {
    if (!r) return;
    printf("%d ", r->data); // রুট আগে
    preorder(r->left);
    preorder(r->right);
}
void inorder(struct Node* r) {
    if (!r) return;
    inorder(r->left);
    printf("%d ", r->data); // রুট মাঝে
    inorder(r->right);
}
void postorder(struct Node* r) {
    if (!r) return;
    postorder(r->left);
    postorder(r->right);
    printf("%d ", r->data); // রুট শেষে
}
int main() {
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    printf("Preorder: "); preorder(root); printf("\\n");
    printf("Inorder: "); inorder(root); printf("\\n");
    printf("Postorder: "); postorder(root); printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:`Preorder: 1 2 4 5 3 
Inorder: 4 2 5 1 3 
Postorder: 4 5 2 3 1 `,flags:[]},{id:"11-10",no:"১১.১০",name:"BFS (Breadth First Search)",tip:"Queue ব্যবহার করে লেভেল বাই লেভেল ঘোরে — visited অ্যারে রাখতে হয় যাতে একই নোড দুইবার ভিজিট না হয়।",code:`#include <stdio.h>
#define V 5
int adj[V][V] = { // অ্যাডজেসেন্সি ম্যাট্রিক্স (গ্রাফ)
    {0,1,1,0,0},
    {1,0,0,1,0},
    {1,0,0,0,1},
    {0,1,0,0,1},
    {0,0,1,1,0}
};
int visited[V] = {0};
int queue[V], front = -1, rear = -1;

void enqueue(int x){ queue[++rear] = x; }
int dequeue(){ return queue[++front]; }
int isEmpty(){ return front == rear; }

void bfs(int start) {
    enqueue(start);
    visited[start] = 1;
    while (!isEmpty()) {
        int node = dequeue();
        printf("%d ", node);
        for (int i = 0; i < V; i++) {
            if (adj[node][i] == 1 && !visited[i]) {
                enqueue(i);
                visited[i] = 1; // ভিজিট করা হয়ে গেছে চিহ্নিত করা
            }
        }
    }
}
int main() {
    printf("BFS: ");
    bfs(0);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"BFS: 0 1 2 3 4 ",flags:[]},{id:"11-11",no:"১১.১১",name:"DFS (Depth First Search)",tip:"রিকার্সন (বা stack) ব্যবহার করে একটা পথ ধরে যতদূর সম্ভব যাও, তারপর ফিরে এসে অন্য পথ ধরো।",code:`#include <stdio.h>
#define V 5
int adj[V][V] = {
    {0,1,1,0,0},
    {1,0,0,1,0},
    {1,0,0,0,1},
    {0,1,0,0,1},
    {0,0,1,1,0}
};
int visited[V] = {0};

void dfs(int node) {
    visited[node] = 1;
    printf("%d ", node);
    for (int i = 0; i < V; i++)
        if (adj[node][i] == 1 && !visited[i])
            dfs(i); // রিকার্সিভভাবে গভীরে যাওয়া
}
int main() {
    printf("DFS: ");
    dfs(0);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"DFS: 0 1 3 4 2 ",flags:[]}]},{id:"s12",no:"১২",title:"পরীক্ষায় প্রায়ই আসা প্রোগ্রাম (Frequently Asked Exam Programs)",items:[{id:"12-1",no:"১২.১",name:"Decimal to Binary",tip:"সংখ্যাটিকে বারবার ২ দিয়ে ভাগ করো, ভাগশেষগুলো উল্টো ক্রমে বসাও।",code:`#include <stdio.h>
int main() {
    int n, binary[32], i = 0;
    printf("দশমিক সংখ্যা দিন: ");
    scanf("%d", &n);
    if (n == 0) { printf("0\\n"); return 0; }
    while (n > 0) {
        binary[i++] = n % 2;
        n /= 2;
    }
    printf("বাইনারি = ");
    for (int j = i - 1; j >= 0; j--) printf("%d", binary[j]); // উল্টো ক্রমে প্রিন্ট
    printf("\\n");
    return 0;
}`,input:`22
`,inputNote:"22",output:"দশমিক সংখ্যা দিন: বাইনারি = 10110",flags:[]},{id:"12-2",no:"১২.২",name:"Binary to Decimal",tip:"প্রতিটি অংককে ২ এর পাওয়ারে গুণ করে যোগ করো (ডান থেকে বাম, পাওয়ার ০,১,২…)।",code:`#include <stdio.h>
#include <math.h>
int main() {
    long long binary;
    int decimal = 0, i = 0, rem;
    printf("বাইনারি সংখ্যা দিন: ");
    scanf("%lld", &binary);
    while (binary != 0) {
        rem = binary % 10;
        decimal += rem * pow(2, i);
        binary /= 10;
        i++;
    }
    printf("দশমিক = %d\\n", decimal);
    return 0;
}`,input:`10110
`,inputNote:"10110",output:"বাইনারি সংখ্যা দিন: দশমিক = 22",flags:[]},{id:"12-3",no:"১২.৩",name:"Decimal to Octal/Hexadecimal",tip:"Octal এ ৮ দিয়ে ভাগ করো, ভাগশেষ নাও। Hex এ ১৬ দিয়ে ভাগ করো, ভাগশেষ ১০ এর বেশি হলে A-F ব্যবহার করো।",code:`#include <stdio.h>
int main() {
    int n;
    printf("সংখ্যা দিন: ");
    scanf("%d", &n);
    printf("অক্টাল (Octal) = ");
    printf("%o\\n", n); // built-in format specifier
    printf("হেক্সাডেসিমাল (Hex) = ");
    printf("%X\\n", n);

    // ম্যানুয়ালি হেক্সাডেসিমাল বের করা
    int num = n, hex[32], i = 0;
    char hexDigits[] = "0123456789ABCDEF";
    if (num == 0) hex[i++] = 0;
    while (num > 0) {
        hex[i++] = num % 16;
        num /= 16;
    }
    printf("ম্যানুয়াল হেক্স = ");
    for (int j = i - 1; j >= 0; j--) printf("%c", hexDigits[hex[j]]);
    printf("\\n");
    return 0;
}`,input:`255
`,inputNote:"255",output:`সংখ্যা দিন: অক্টাল (Octal) = 377
হেক্সাডেসিমাল (Hex) = FF
ম্যানুয়াল হেক্স = FF`,flags:[]},{id:"12-4",no:"১২.৪",name:"Power using Recursion",tip:"বেস কেস exp==0 হলে return 1, নাহলে base * power(base, exp-1)।",code:`#include <stdio.h>
long long power(int base, int exp) {
    if (exp == 0) return 1; // বেস কেস
    return base * power(base, exp - 1);
}
int main() {
    printf("2^10 = %lld\\n", power(2, 10));
    return 0;
}`,input:"",inputNote:"",output:"2^10 = 1024",flags:[]},{id:"12-5",no:"১২.৫",name:"Check Anagram",tip:"দুইটা স্ট্রিং sort করে ফেলো, sort করার পর একই হলে anagram (একই অক্ষর, ভিন্ন সাজানো)।",code:`#include <stdio.h>
#include <string.h>
void sortStr(char *str) {
    int n = strlen(str);
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (str[j] > str[j+1]) {
                char t = str[j]; str[j] = str[j+1]; str[j+1] = t;
            }
}
int main() {
    char s1[] = "listen", s2[] = "silent";
    char a[50], b[50];
    strcpy(a, s1); strcpy(b, s2);
    sortStr(a); sortStr(b);
    if (strcmp(a, b) == 0)
        printf("অ্যানাগ্রাম (Anagram)\\n");
    else
        printf("অ্যানাগ্রাম নয়\\n");
    return 0;
}`,input:"",inputNote:"",output:"অ্যানাগ্রাম (Anagram)",flags:[]},{id:"12-6",no:"১২.৬",name:"Remove Duplicate from Array",tip:"আগে array sort করো, তারপর পাশাপাশি এলিমেন্ট ভিন্ন হলেই নতুন অ্যারেতে রাখো।",code:`#include <stdio.h>
int main() {
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    // sort করা আছে ধরে নিলাম
    int result[10], k = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || arr[i] != arr[i - 1]) // আগেরটার থেকে ভিন্ন হলে
            result[k++] = arr[i];
    }
    printf("ডুপ্লিকেট বাদে: ");
    for (int i = 0; i < k; i++) printf("%d ", result[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"ডুপ্লিকেট বাদে: 1 2 3 4 5 ",flags:[]},{id:"12-7",no:"১২.৭",name:"Merge & Sort Arrays",tip:"দুইটা অ্যারে একসাথে মার্জ করে তারপর যেকোনো sorting algorithm (bubble/selection) প্রয়োগ করো।",code:`#include <stdio.h>
int main() {
    int a[] = {5, 1, 4}, b[] = {2, 6, 3};
    int n1 = 3, n2 = 3;
    int merged[6], k = 0;
    for (int i = 0; i < n1; i++) merged[k++] = a[i];
    for (int i = 0; i < n2; i++) merged[k++] = b[i];

    for (int i = 0; i < k - 1; i++) // বাবল সর্ট
        for (int j = 0; j < k - i - 1; j++)
            if (merged[j] > merged[j+1]) {
                int t = merged[j]; merged[j] = merged[j+1]; merged[j+1] = t;
            }

    for (int i = 0; i < k; i++) printf("%d ", merged[i]);
    printf("\\n");
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 6 ",flags:[]},{id:"12-8",no:"১২.৮",name:"Frequency of Array Elements",tip:"প্রতিটি এলিমেন্টের জন্য visited চেক করো (আগে গোনা হয়ে থাকলে স্কিপ করো), নাহলে পুরো অ্যারেতে গুনে ফেলো।",code:`#include <stdio.h>
int main() {
    int arr[] = {1, 2, 2, 3, 1, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int visited[100] = {0};
    for (int i = 0; i < n; i++) {
        if (visited[i]) continue; // আগেই গোনা হয়ে গেছে
        int count = 1;
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) { count++; visited[j] = 1; }
        }
        printf("%d এর ফ্রিকোয়েন্সি = %d\\n", arr[i], count);
    }
    return 0;
}`,input:"",inputNote:"",output:`1 এর ফ্রিকোয়েন্সি = 2
2 এর ফ্রিকোয়েন্সি = 3
3 এর ফ্রিকোয়েন্সি = 1
4 এর ফ্রিকোয়েন্সি = 1`,flags:[]},{id:"12-9",no:"১২.৯",name:"Menu-driven Calculator",tip:"switch-case দিয়ে অপশন অনুযায়ী কাজ করো, লুপে রাখলে বারবার চালানো যায়।",code:`#include <stdio.h>
int main() {
    int choice;
    float a, b;
    do {
        printf("\\n১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান\\nপছন্দ দিন: ");
        scanf("%d", &choice);
        if (choice == 5) break;
        printf("দুইটি সংখ্যা দিন: ");
        scanf("%f %f", &a, &b);
        switch (choice) {
            case 1: printf("যোগফল = %.2f\\n", a + b); break;
            case 2: printf("বিয়োগফল = %.2f\\n", a - b); break;
            case 3: printf("গুণফল = %.2f\\n", a * b); break;
            case 4:
                if (b != 0) printf("ভাগফল = %.2f\\n", a / b);
                else printf("শূন্য দিয়ে ভাগ করা যায় না\\n");
                break;
            default: printf("ভুল অপশন\\n");
        }
    } while (choice != 5);
    return 0;
}`,input:`1
10 3
5
`,inputNote:"1  →  10 3  →  5",output:`
১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান
পছন্দ দিন: দুইটি সংখ্যা দিন: যোগফল = 13.00

১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান
পছন্দ দিন: `,flags:[]},{id:"12-10",no:"১২.১০",name:"Simple Banking System",tip:"balance ভ্যারিয়েবলে টাকা জমা রাখো, deposit এ যোগ, withdraw এ বিয়োগ (balance যথেষ্ট আছে কিনা চেক করে)।",code:`#include <stdio.h>
int main() {
    float balance = 1000;
    int choice;
    float amount;
    do {
        printf("\\n১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান\\nপছন্দ: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("জমার পরিমাণ: ");
                scanf("%f", &amount);
                balance += amount;
                printf("নতুন ব্যালেন্স = %.2f\\n", balance);
                break;
            case 2:
                printf("উত্তোলনের পরিমাণ: ");
                scanf("%f", &amount);
                if (amount > balance) printf("অপর্যাপ্ত ব্যালেন্স!\\n");
                else { balance -= amount; printf("নতুন ব্যালেন্স = %.2f\\n", balance); }
                break;
            case 3:
                printf("বর্তমান ব্যালেন্স = %.2f\\n", balance);
                break;
        }
    } while (choice != 4);
    return 0;
}`,input:`1
500
3
4
`,inputNote:"1  →  500  →  3  →  4",output:`
১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: জমার পরিমাণ: নতুন ব্যালেন্স = 1500.00

১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: বর্তমান ব্যালেন্স = 1500.00

১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: `,flags:[]},{id:"12-11",no:"১২.১১",name:"Student Result Management",tip:"struct দিয়ে ছাত্রের তথ্য রাখো, নাম্বার থেকে গড় (average) ও গ্রেড বের করো।",code:`#include <stdio.h>
struct Student {
    char name[50];
    int marks[3];
    float average;
    char grade;
};
int main() {
    struct Student s;
    printf("নাম দিন: ");
    scanf("%s", s.name);
    int total = 0;
    for (int i = 0; i < 3; i++) {
        printf("বিষয় %d এর নম্বর: ", i + 1);
        scanf("%d", &s.marks[i]);
        total += s.marks[i];
    }
    s.average = total / 3.0;
    if (s.average >= 80) s.grade = 'A';
    else if (s.average >= 60) s.grade = 'B';
    else if (s.average >= 40) s.grade = 'C';
    else s.grade = 'F';

    printf("\\nনাম: %s, গড়: %.2f, গ্রেড: %c\\n", s.name, s.average, s.grade);
    return 0;
}`,input:`Mugdho
80 75 90
`,inputNote:"Mugdho  →  80 75 90",output:`নাম দিন: বিষয় 1 এর নম্বর: বিষয় 2 এর নম্বর: বিষয় 3 এর নম্বর: 
নাম: Mugdho, গড়: 81.67, গ্রেড: A`,flags:[]},{id:"12-12",no:"১২.১২",name:"Library Management (Mini Project)",tip:"struct দিয়ে বই এর তথ্য (id, নাম, স্ট্যাটাস) রাখো, menu-driven সিস্টেমে add/search/issue করো।",code:`#include <stdio.h>
#include <string.h>
struct Book {
    int id;
    char title[50];
    int isIssued; // 0 = আছে, 1 = ইস্যু হয়েছে
};
int main() {
    struct Book books[10];
    int count = 0, choice;
    do {
        printf("\\n১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান\\nপছন্দ: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("বই আইডি ও নাম দিন: ");
                scanf("%d", &books[count].id);
                scanf("%s", books[count].title);
                books[count].isIssued = 0;
                count++;
                break;
            case 2:
                for (int i = 0; i < count; i++)
                    printf("ID:%d, নাম:%s, স্ট্যাটাস: %s\\n", books[i].id, books[i].title,
                           books[i].isIssued ? "ইস্যুকৃত" : "উপলব্ধ");
                break;
            case 3: {
                int id;
                printf("ইস্যু করার বই এর আইডি দিন: ");
                scanf("%d", &id);
                for (int i = 0; i < count; i++)
                    if (books[i].id == id) { books[i].isIssued = 1; printf("ইস্যু সম্পন্ন\\n"); }
                break;
            }
        }
    } while (choice != 4);
    return 0;
}`,input:`1
101 CProgramming
2
4
`,inputNote:"1  →  101 CProgramming  →  2  →  4",output:`
১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: বই আইডি ও নাম দিন: 
১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: ID:101, নাম:CProgramming, স্ট্যাটাস: উপলব্ধ

১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: `,flags:[]}]}],iv=[{id:"s1",no:"১",title:"বেসিক প্রোগ্রাম (Basic Programs)",items:[{id:"1-1",no:"১.১",name:"Hello World",tip:"সব C++ প্রোগ্রামের কাঠামো (structure) এখান থেকেই শুরু — #include <iostream>, using namespace std;, main(), return 0;। C এ printf() ব্যবহার হতো, C++ এ cout ব্যবহার হয়।",code:`#include <iostream>
using namespace std;
int main() {
    cout << "Hello World" << endl; // স্ক্রিনে টেক্সট প্রিন্ট করে
    return 0; // প্রোগ্রাম সফলভাবে শেষ হলো তা বোঝায়
}`,input:"",inputNote:"",output:"Hello World",flags:[]},{id:"1-2",no:"১.২",name:"Add, Subtract, Multiply, Divide",tip:"দুইটা মান cin দিয়ে ইনপুট নাও, তারপর ৪টা অপারেটর + - * / প্রয়োগ করো। ভাগের ক্ষেত্রে দ্বিতীয় সংখ্যা শূন্য কিনা চেক করা ভালো অভ্যাস।",code:`#include <iostream>
using namespace std;
int main() {
    int a, b;
    cout << "দুইটি সংখ্যা দিন: ";
    cin >> a >> b;

    cout << "যোগফল = " << (a + b) << endl;
    cout << "বিয়োগফল = " << (a - b) << endl;
    cout << "গুণফল = " << (a * b) << endl;

    if (b != 0) // শূন্য দিয়ে ভাগ করা যায় না
        cout << "ভাগফল = " << (float)a / b << endl;
    else
        cout << "ভাগফল সংজ্ঞায়িত নয় (b=0)" << endl;
    return 0;
}`,input:`10 3
`,inputNote:"10 3",output:`দুইটি সংখ্যা দিন: যোগফল = 13
বিয়োগফল = 7
গুণফল = 30
ভাগফল = 3.33333`,flags:[]},{id:"1-3",no:"১.৩",name:"Swap two numbers (with/without third variable)",tip:"তৃতীয় ভ্যারিয়েবল ছাড়া swap করতে হলে যোগ-বিয়োগ অথবা XOR ব্যবহার করা যায়।",code:`#include <iostream>
using namespace std;
int main() {
    int a = 5, b = 10, temp;

    // ---- তৃতীয় ভ্যারিয়েবল দিয়ে ----
    temp = a;
    a = b;
    b = temp;
    cout << "তৃতীয় ভ্যারিয়েবল দিয়ে: a=" << a << ", b=" << b << endl;

    // ---- তৃতীয় ভ্যারিয়েবল ছাড়া (যোগ-বিয়োগ পদ্ধতি) ----
    a = 5; b = 10;
    a = a + b; // a তে দুইজনের যোগফল
    b = a - b; // b = আসল a
    a = a - b; // a = আসল b
    cout << "ছাড়া (যোগ-বিয়োগ): a=" << a << ", b=" << b << endl;

    // ---- XOR পদ্ধতি ----
    a = 5; b = 10;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    cout << "XOR পদ্ধতি: a=" << a << ", b=" << b << endl;
    return 0;
}`,input:"",inputNote:"",output:`তৃতীয় ভ্যারিয়েবল দিয়ে: a=10, b=5
ছাড়া (যোগ-বিয়োগ): a=10, b=5
XOR পদ্ধতি: a=10, b=5`,flags:[]},{id:"1-4",no:"১.৪",name:"Even/Odd",tip:"% (মডুলাস) দিয়ে ২ দিয়ে ভাগশেষ বের করো — শূন্য হলে জোড়, নাহলে বিজোড়।",code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    if (n % 2 == 0)
        cout << n << " জোড় (Even)" << endl;
    else
        cout << n << " বিজোড় (Odd)" << endl;
    return 0;
}`,input:`7
`,inputNote:"7",output:"সংখ্যা দিন: 7 বিজোড় (Odd)",flags:[]},{id:"1-5",no:"১.৫",name:"Positive/Negative/Zero",tip:"তিনটি শর্ত — >0, <0, ==0 — if-else if-else চেইন দিয়ে চেক করো।",code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    if (n > 0)
        cout << "ধনাত্মক (Positive)" << endl;
    else if (n < 0)
        cout << "ঋণাত্মক (Negative)" << endl;
    else
        cout << "শূন্য (Zero)" << endl;
    return 0;
}`,input:`-5
`,inputNote:"-5",output:"সংখ্যা দিন: ঋণাত্মক (Negative)",flags:[]},{id:"1-6",no:"১.৬",name:"Largest of 2/3 numbers",tip:"nested if অথবা একসাথে তুলনা — a>=b && a>=c হলে a-ই সবচেয়ে বড়।",code:`#include <iostream>
using namespace std;
int main() {
    int a, b, c;
    cout << "তিনটি সংখ্যা দিন: ";
    cin >> a >> b >> c;

    if (a >= b && a >= c)
        cout << "সবচেয়ে বড়: " << a << endl;
    else if (b >= a && b >= c)
        cout << "সবচেয়ে বড়: " << b << endl;
    else
        cout << "সবচেয়ে বড়: " << c << endl;
    return 0;
}`,input:`12 45 7
`,inputNote:"12 45 7",output:"তিনটি সংখ্যা দিন: সবচেয়ে বড়: 45",flags:[]},{id:"1-7",no:"১.৭",name:"Leap Year",tip:"নিয়ম — (৪ দিয়ে বিভাজ্য এবং ১০০ দিয়ে বিভাজ্য নয়) অথবা (৪০০ দিয়ে বিভাজ্য)।",code:`#include <iostream>
using namespace std;
int main() {
    int y;
    cout << "সাল দিন: ";
    cin >> y;
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        cout << y << " অধিবর্ষ (Leap Year)" << endl;
    else
        cout << y << " অধিবর্ষ নয়" << endl;
    return 0;
}`,input:`2024
`,inputNote:"2024",output:"সাল দিন: 2024 অধিবর্ষ (Leap Year)",flags:[]},{id:"1-8",no:"১.৮",name:"Vowel/Consonant",tip:"a,e,i,o,u (ছোট/বড় হাতের) — এই ৫টা অক্ষর হলে vowel, বাকি সব consonant।",code:`#include <iostream>
using namespace std;
int main() {
    char ch;
    cout << "একটি অক্ষর দিন: ";
    cin >> ch;
    if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||
        ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
        cout << "স্বরবর্ণ (Vowel)" << endl;
    else
        cout << "ব্যঞ্জনবর্ণ (Consonant)" << endl;
    return 0;
}`,input:`e
`,inputNote:"e",output:"একটি অক্ষর দিন: স্বরবর্ণ (Vowel)",flags:[]},{id:"1-9",no:"১.৯",name:"Grade Calculation",tip:"নাম্বার অনুযায়ী রেঞ্জ ধরে if-else if চেইন, সবচেয়ে বড় শর্ত আগে চেক করা ভালো।",code:`#include <iostream>
using namespace std;
int main() {
    int marks;
    cout << "নম্বর দিন: ";
    cin >> marks;

    if (marks >= 80) cout << "গ্রেড: A+" << endl;
    else if (marks >= 70) cout << "গ্রেড: A" << endl;
    else if (marks >= 60) cout << "গ্রেড: A-" << endl;
    else if (marks >= 50) cout << "গ্রেড: B" << endl;
    else if (marks >= 40) cout << "গ্রেড: C" << endl;
    else if (marks >= 33) cout << "গ্রেড: D" << endl;
    else cout << "গ্রেড: F (ফেল)" << endl;
    return 0;
}`,input:`75
`,inputNote:"75",output:"নম্বর দিন: গ্রেড: A",flags:[]}]},{id:"s2",no:"২",title:"লুপ প্রোগ্রাম (Loop Programs)",items:[{id:"2-1",no:"২.১",name:"Sum of N numbers",tip:"for লুপে sum += i — ১ থেকে n পর্যন্ত যোগ করো।",code:`#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cout << "n দিন: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum += i; // প্রতিবার i যোগ হচ্ছে
    cout << "যোগফল = " << sum << endl;
    return 0;
}`,input:`5
`,inputNote:"5",output:"n দিন: যোগফল = 15",flags:[]},{id:"2-2",no:"২.২",name:"Factorial",tip:"fact *= i, শুরুর মান ১ (গুণের identity)।",code:`#include <iostream>
using namespace std;
int main() {
    int n;
    long long fact = 1;
    cout << "n দিন: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        fact *= i;
    cout << n << "! = " << fact << endl;
    return 0;
}`,input:`5
`,inputNote:"5",output:"n দিন: 5! = 120",flags:[]},{id:"2-3",no:"২.৩",name:"Fibonacci Series",tip:"প্রথম দুইটা 0,1 — পরেরটা আগের দুইটার যোগফল।",code:`#include <iostream>
using namespace std;
int main() {
    int n, a = 0, b = 1, next;
    cout << "কতগুলো পদ চান: ";
    cin >> n;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    return 0;
}`,input:`8
`,inputNote:"8",output:"কতগুলো পদ চান: 0 1 1 2 3 5 8 13 ",flags:[]},{id:"2-4",no:"২.৪",name:"Prime Number",tip:"2 থেকে sqrt(n) পর্যন্ত কোনো সংখ্যা দিয়ে ভাগ গেলে prime না। 1 এবং তার নিচের সংখ্যা prime না। C++ এ true/false (bool) সরাসরি ব্যবহার করা যায়, C এ 1/0 লিখতে হতো।",code:`#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int n;
    bool isPrime = true;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    if (n <= 1) isPrime = false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) { isPrime = false; break; }
    }
    cout << n << " " << (isPrime ? "মৌলিক সংখ্যা (Prime)" : "মৌলিক সংখ্যা নয়") << endl;
    return 0;
}`,input:`29
`,inputNote:"29",output:"সংখ্যা দিন: 29 মৌলিক সংখ্যা (Prime)",flags:[]},{id:"2-5",no:"২.৫",name:"Prime numbers in a range",tip:"প্রতিটি সংখ্যার জন্য উপরের prime-চেক ফাংশন বারবার কল করো (nested loop / function)।",code:`#include <iostream>
using namespace std;
bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
int main() {
    int low, high;
    cout << "শুরু ও শেষ দিন: ";
    cin >> low >> high;
    cout << "মৌলিক সংখ্যাসমূহ: ";
    for (int i = low; i <= high; i++)
        if (isPrime(i)) cout << i << " ";
    cout << endl;
    return 0;
}`,input:`10 30
`,inputNote:"10 30",output:"শুরু ও শেষ দিন: মৌলিক সংখ্যাসমূহ: 11 13 17 19 23 29 ",flags:[]},{id:"2-6",no:"২.৬",name:"Perfect Number",tip:"যে সংখ্যা তার প্রকৃত ভাজকগুলোর (নিজেকে বাদে) যোগফলের সমান (যেমন 6 = 1+2+3)।",code:`#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    for (int i = 1; i < n; i++)
        if (n % i == 0) sum += i;
    if (sum == n)
        cout << n << " একটি পারফেক্ট নাম্বার" << endl;
    else
        cout << n << " পারফেক্ট নাম্বার নয়" << endl;
    return 0;
}`,input:`28
`,inputNote:"28",output:"সংখ্যা দিন: 28 একটি পারফেক্ট নাম্বার",flags:[]},{id:"2-7",no:"২.৭",name:"Armstrong Number",tip:"প্রতিটি অংককে অংকসংখ্যার (digit count) পাওয়ারে তুলে যোগ করো, মূল সংখ্যার সমান হলে Armstrong।",code:`#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int n, original, remainder, digits = 0;
    double result = 0;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    original = n;

    // অংক সংখ্যা বের করা
    for (int temp = n; temp != 0; temp /= 10) digits++;

    for (int temp = n; temp != 0; temp /= 10) {
        remainder = temp % 10;
        result += pow(remainder, digits);
    }
    if ((int)result == original)
        cout << original << " আর্মস্ট্রং সংখ্যা" << endl;
    else
        cout << original << " আর্মস্ট্রং সংখ্যা নয়" << endl;
    return 0;
}`,input:`153
`,inputNote:"153",output:"সংখ্যা দিন: 153 আর্মস্ট্রং সংখ্যা",flags:[]},{id:"2-8",no:"২.৮",name:"Palindrome Number",tip:"সংখ্যাটি উল্টিয়ে (reverse) মূল সংখ্যার সাথে মিলিয়ে দেখো।",code:`#include <iostream>
using namespace std;
int main() {
    int n, original, reversed = 0, remainder;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    original = n;
    while (n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n /= 10;
    }
    if (original == reversed)
        cout << original << " প্যালিনড্রোম" << endl;
    else
        cout << original << " প্যালিনড্রোম নয়" << endl;
    return 0;
}`,input:`121
`,inputNote:"121",output:"সংখ্যা দিন: 121 প্যালিনড্রোম",flags:[]},{id:"2-9",no:"২.৯",name:"Reverse Number",tip:"while লুপে শেষ অংক বের করে (n%10) নতুন সংখ্যায় বসাও, তারপর n কমাও (n/=10)।",code:`#include <iostream>
using namespace std;
int main() {
    int n, reversed = 0;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    while (n != 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    cout << "উল্টানো সংখ্যা = " << reversed << endl;
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: উল্টানো সংখ্যা = 54321",flags:[]},{id:"2-10",no:"২.১০",name:"Sum of Digits",tip:"প্রতিবার n%10 যোগ করো এবং n/=10 করে ছোট করো।",code:`#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    while (n != 0) {
        sum += n % 10;
        n /= 10;
    }
    cout << "অংকের যোগফল = " << sum << endl;
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: অংকের যোগফল = 15",flags:[]},{id:"2-11",no:"২.১১",name:"Count Digits",tip:"প্রতিবার n/=10 করে একটা কাউন্টার বাড়াও, n শূন্য না হওয়া পর্যন্ত।",code:`#include <iostream>
using namespace std;
int main() {
    int n, count = 0;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    while (n != 0) {
        n /= 10;
        count++;
    }
    cout << "অংকের সংখ্যা = " << count << endl;
    return 0;
}`,input:`12345
`,inputNote:"12345",output:"সংখ্যা দিন: অংকের সংখ্যা = 5",flags:[]},{id:"2-12",no:"২.১২",name:"GCD & LCM",tip:"ইউক্লিডের অ্যালগরিদম — while(y) { t=y; y=x%y; x=t; } দিয়ে GCD, তারপর LCM = (a*b)/GCD।",code:`#include <iostream>
using namespace std;
int main() {
    int a, b, x, y, temp, gcdVal, lcmVal;
    cout << "দুইটি সংখ্যা দিন: ";
    cin >> a >> b;
    x = a; y = b;
    while (y != 0) { // ইউক্লিডের অ্যালগরিদম
        temp = y;
        y = x % y;
        x = temp;
    }
    gcdVal = x;
    lcmVal = (a * b) / gcdVal;
    cout << "GCD = " << gcdVal << endl;
    cout << "LCM = " << lcmVal << endl;
    return 0;
}`,input:`48 18
`,inputNote:"48 18",output:`দুইটি সংখ্যা দিন: GCD = 6
LCM = 144`,flags:[]}]},{id:"s3",no:"৩",title:"প্যাটার্ন প্রোগ্রাম (Pattern Programs)",items:[{id:"3-1",no:"৩.১",name:"Right Triangle (*)",tip:"বাইরের লুপ সারি (row), ভিতরের লুপ কলাম — সারি নাম্বার অনুযায়ী * প্রিন্ট করো।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`* 
* * 
* * * 
* * * * 
* * * * * `,flags:[]},{id:"3-2",no:"৩.২",name:"Inverted Triangle",tip:"বাইরের লুপ n থেকে 1 পর্যন্ত কমতে থাকবে।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`* * * * * 
* * * * 
* * * 
* * 
* `,flags:[]},{id:"3-3",no:"৩.৩",name:"Pyramid",tip:"প্রথমে স্পেস প্রিন্ট করো (n-i বার), তারপর স্টার প্রিন্ট করো (2*i-1 বার)।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`    *
   ***
  *****
 *******
*********`,flags:[]},{id:"3-4",no:"৩.৪",name:"Floyd's Triangle",tip:"একটি কাউন্টার (num) রাখো যেটা প্রতিটি প্রিন্টে ১ করে বাড়বে, সারি অনুযায়ী সংখ্যা বসবে।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5, num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            cout << num++ << " ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 `,flags:[]},{id:"3-5",no:"৩.৫",name:"Pascal's Triangle",tip:"প্রতিটি সংখ্যা = উপরের দুইটা সংখ্যার যোগফল। সূত্র: C(i,j) = i! / (j!*(i-j)!)",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 0; i < n; i++) {
        int val = 1;
        for (int s = 0; s < n - i - 1; s++) cout << " ";
        for (int j = 0; j <= i; j++) {
            cout << val << " ";
            val = val * (i - j) / (j + 1); // পরের বাইনমিয়াল কোএফিশিয়েন্ট বের করা
        }
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`    1 
   1 1 
  1 2 1 
 1 3 3 1 
1 4 6 4 1 `,flags:[]},{id:"3-6",no:"৩.৬",name:"Number Pattern",tip:"ভিতরের লুপে j নিজেই প্রিন্ট হয় (1,2,3...i)।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            cout << j << " ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `,flags:[]},{id:"3-7",no:"৩.৭",name:"Alphabet Pattern",tip:"'A' + j করলে অক্ষর পাওয়া যায় (ASCII এর সাহায্যে)।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++)
            cout << (char)('A' + j) << " "; // ASCII ভিত্তিতে অক্ষর
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`A 
A B 
A B C 
A B C D 
A B C D E `,flags:[]}]},{id:"s4",no:"৪",title:"অ্যারে প্রোগ্রাম (Array Programs)",items:[{id:"4-1",no:"৪.১",name:"Largest & Smallest Element",tip:"প্রথম এলিমেন্টকে max/min ধরে বাকি সবগুলোর সাথে তুলনা করো। (ভ্যারিয়েবলের নাম mx/mn রাখা হলো যাতে <algorithm> এর max/min ফাংশনের সাথে না মেলে)।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {12, 45, 2, 41, 31, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    int mx = arr[0], mn = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > mx) mx = arr[i];
        if (arr[i] < mn) mn = arr[i];
    }
    cout << "সবচেয়ে বড়: " << mx << ", সবচেয়ে ছোট: " << mn << endl;
    return 0;
}`,input:"",inputNote:"",output:"সবচেয়ে বড়: 45, সবচেয়ে ছোট: 2",flags:[]},{id:"4-2",no:"৪.২",name:"Second Largest",tip:"একবারে max ও second দুটোই আপডেট করো — max ভাঙলে পুরনো max হবে second।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {12, 45, 2, 41, 31, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    int mx = arr[0], second = -1;
    for (int i = 1; i < n; i++) {
        if (arr[i] > mx) {
            second = mx;
            mx = arr[i];
        } else if (arr[i] > second && arr[i] != mx) {
            second = arr[i];
        }
    }
    cout << "দ্বিতীয় বৃহত্তম: " << second << endl;
    return 0;
}`,input:"",inputNote:"",output:"দ্বিতীয় বৃহত্তম: 41",flags:[]},{id:"4-3",no:"৪.৩",name:"Reverse Array",tip:"দুটি ইনডেক্স (start, end) দিয়ে swap করো, মাঝখানে গিয়ে থামবে।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0, j = n - 1; i < j; i++, j--) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"5 4 3 2 1 ",flags:[]},{id:"4-4",no:"৪.৪",name:"Array Sorting (Bubble Sort)",tip:"পাশাপাশি দুইটা এলিমেন্ট তুলনা করে বড়টাকে পিছনে ঠেলে দাও (বুদবুদের মতো ভাসে বড়টা)।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                int t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"1 2 5 5 6 9 ",flags:[]},{id:"4-5",no:"৪.৫",name:"Selection Sort",tip:"প্রতি ধাপে বাকি অংশ থেকে সবচেয়ে ছোট এলিমেন্টের index খুঁজে current position-এর সাথে swap করো।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;
        int t = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = t;
    }
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"1 2 5 5 6 9 ",flags:[]},{id:"4-6",no:"৪.৬",name:"Linear Search",tip:"শুরু থেকে শেষ পর্যন্ত প্রতিটি এলিমেন্ট এক এক করে চেক করো — সহজ কিন্তু ধীর (O(n))।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]), key = 9, found = -1;
    for (int i = 0; i < n; i++)
        if (arr[i] == key) { found = i; break; }
    if (found != -1) cout << key << " পাওয়া গেছে index " << found << " এ" << endl;
    else cout << "পাওয়া যায়নি" << endl;
    return 0;
}`,input:"",inputNote:"",output:"9 পাওয়া গেছে index 2 এ",flags:[]},{id:"4-7",no:"৪.৭",name:"Binary Search",tip:"অ্যারে sorted থাকতে হবে। মাঝের এলিমেন্টের সাথে তুলনা করে অর্ধেক অংশ বাদ দাও (O(log n))।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int n = sizeof(arr) / sizeof(arr[0]), key = 7;
    int low = 0, high = n - 1, found = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) { found = mid; break; }
        else if (arr[mid] < key) low = mid + 1; // ডান দিকে খোঁজো
        else high = mid - 1; // বাম দিকে খোঁজো
    }
    if (found != -1) cout << key << " পাওয়া গেছে index " << found << " এ" << endl;
    else cout << "পাওয়া যায়নি" << endl;
    return 0;
}`,input:"",inputNote:"",output:"7 পাওয়া গেছে index 3 এ",flags:[]},{id:"4-8",no:"৪.৮",name:"Merge Two Arrays",tip:"নতুন অ্যারেতে প্রথম অ্যারের সব উপাদান, তারপর দ্বিতীয় অ্যারের সব উপাদান কপি করো।",code:`#include <iostream>
using namespace std;
int main() {
    int a[] = {1, 2, 3}, b[] = {4, 5, 6};
    int n1 = 3, n2 = 3;
    int merged[6], k = 0;
    for (int i = 0; i < n1; i++) merged[k++] = a[i];
    for (int i = 0; i < n2; i++) merged[k++] = b[i];
    for (int i = 0; i < k; i++) cout << merged[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 6 ",flags:[]},{id:"4-9",no:"৪.৯",name:"Matrix Addition",tip:"একই position-এর (i,j) দুইটা এলিমেন্ট যোগ করো।",code:`#include <iostream>
using namespace std;
int main() {
    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            c[i][j] = a[i][j] + b[i][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) cout << c[i][j] << " ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`6 8 
10 12 `,flags:[]},{id:"4-10",no:"৪.১০",name:"Matrix Multiplication",tip:"তিনটা লুপ লাগবে (i,j,k) — প্রথম ম্যাট্রিক্সের row × দ্বিতীয় ম্যাট্রিক্সের column, ভিতরে sum যোগ হবে।",code:`#include <iostream>
using namespace std;
int main() {
    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2] = {0};
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 2; k++)
                c[i][j] += a[i][k] * b[k][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) cout << c[i][j] << " ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`19 22 
43 50 `,flags:[]},{id:"4-11",no:"৪.১১",name:"Matrix Transpose",tip:"row আর column অদল-বদল করো — transpose[j][i] = matrix[i][j]।",code:`#include <iostream>
using namespace std;
int main() {
    int a[2][3] = {{1,2,3},{4,5,6}};
    int t[3][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 3; j++)
            t[j][i] = a[i][j];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) cout << t[i][j] << " ";
        cout << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`1 4 
2 5 
3 6 `,flags:[]}]},{id:"s5",no:"৫",title:"স্ট্রিং প্রোগ্রাম (String Programs)",items:[{id:"5-1",no:"৫.১",name:"String Length (C++ std::string দিয়ে, .length() ছাড়াই ম্যানুয়াল কাউন্ট)",tip:"range-based for লুপে প্রতিটি অক্ষরের জন্য কাউন্ট বাড়াও। C++ এ char অ্যারের বদলে string ক্লাস ব্যবহার করা যায়, যা মেমরি নিজে ম্যানেজ করে।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string str = "Bangladesh";
    int len = 0;
    for (char c : str) len++; // প্রতিটি অক্ষরের জন্য কাউন্ট বাড়াও
    cout << "দৈর্ঘ্য = " << len << endl;
    return 0;
}`,input:"",inputNote:"",output:"দৈর্ঘ্য = 10",flags:[]},{id:"5-2",no:"৫.২",name:"String Copy",tip:"C++ এ string ক্লাসের জন্য = অপারেটর দিয়েই সরাসরি কপি করা যায়, ক্যারেক্টার বাই ক্যারেক্টার লুপ লাগে না।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string src = "Hello";
    string dest = src; // C++ এ = অপারেটর দিয়ে সরাসরি কপি করা যায়
    cout << "কপি করা স্ট্রিং: " << dest << endl;
    return 0;
}`,input:"",inputNote:"",output:"কপি করা স্ট্রিং: Hello",flags:[]},{id:"5-3",no:"৫.৩",name:"String Compare",tip:"C++ std::string এ == অপারেটর দিয়ে সরাসরি তুলনা করা যায়, strcmp() লাগে না।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string s1 = "abc", s2 = "abd";
    bool isEqual = (s1 == s2); // == দিয়ে সরাসরি তুলনা
    cout << (isEqual ? "স্ট্রিং সমান" : "স্ট্রিং ভিন্ন") << endl;
    return 0;
}`,input:"",inputNote:"",output:"স্ট্রিং ভিন্ন",flags:[]},{id:"5-4",no:"৫.৪",name:"String Reverse",tip:"শুরু (start) ও শেষ (end) index থেকে অক্ষর swap করো, মাঝে গিয়ে থামো। std::string ইনডেক্স [] দিয়ে অক্ষরে অ্যাক্সেস দেয়।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string str = "Bangladesh";
    int len = str.length();
    for (int i = 0, j = len - 1; i < j; i++, j--) {
        char t = str[i];
        str[i] = str[j];
        str[j] = t;
    }
    cout << "উল্টানো স্ট্রিং: " << str << endl;
    return 0;
}`,input:"",inputNote:"",output:"উল্টানো স্ট্রিং: hsedalgnaB",flags:[]},{id:"5-5",no:"৫.৫",name:"Palindrome String",tip:"স্ট্রিং উল্টিয়ে মূল স্ট্রিংয়ের সাথে মিলিয়ে দেখো, অথবা দুই প্রান্ত থেকে তুলনা করো।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string str = "madam";
    int len = str.length();
    bool isPalindrome = true;
    for (int i = 0; i < len / 2; i++)
        if (str[i] != str[len - 1 - i]) { isPalindrome = false; break; }
    cout << (isPalindrome ? "প্যালিনড্রোম" : "প্যালিনড্রোম নয়") << endl;
    return 0;
}`,input:"",inputNote:"",output:"প্যালিনড্রোম",flags:[]},{id:"5-6",no:"৫.৬",name:"Count Vowels/Consonants",tip:"প্রতিটি অক্ষর চেক করো — vowel হলে vowel কাউন্টার, letter হয়েও vowel না হলে consonant কাউন্টার বাড়াও।",code:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main() {
    string str = "Bangladesh";
    int vowels = 0, consonants = 0;
    for (char ch : str) {
        ch = tolower(ch);
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') vowels++;
        else if (ch >= 'a' && ch <= 'z') consonants++;
    }
    cout << "স্বরবর্ণ = " << vowels << ", ব্যঞ্জনবর্ণ = " << consonants << endl;
    return 0;
}`,input:"",inputNote:"",output:"স্বরবর্ণ = 3, ব্যঞ্জনবর্ণ = 7",flags:[]},{id:"5-7",no:"৫.৭",name:"Count Words",tip:"স্পেস থেকে non-space এ ট্রানজিশন হলেই একটা নতুন শব্দ শুরু ধরে কাউন্ট বাড়াও।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    string str = "I love Bangladesh";
    int count = 0;
    for (size_t i = 0; i < str.length(); i++)
        if (str[i] != ' ' && (i == 0 || str[i-1] == ' '))
            count++; // নতুন শব্দ শুরু
    cout << "শব্দ সংখ্যা = " << count << endl;
    return 0;
}`,input:"",inputNote:"",output:"শব্দ সংখ্যা = 3",flags:[]},{id:"5-8",no:"৫.৮",name:"Character Frequency",tip:"২৬টা অক্ষরের জন্য একটা freq[26] অ্যারে রাখো, প্রতিটা অক্ষরের index এ কাউন্ট বাড়াও।",code:`#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main() {
    string str = "programming";
    int freq[26] = {0};
    for (char ch : str)
        freq[tolower(ch) - 'a']++;
    for (int i = 0; i < 26; i++)
        if (freq[i] > 0)
            cout << (char)('a' + i) << ": " << freq[i] << " বার" << endl;
    return 0;
}`,input:"",inputNote:"",output:`a: 1 বার
g: 2 বার
i: 1 বার
m: 2 বার
n: 1 বার
o: 1 বার
p: 1 বার
r: 2 বার`,flags:[]}]},{id:"s6",no:"৬",title:"ফাংশন প্রোগ্রাম (Function Programs)",items:[{id:"6-1",no:"৬.১",name:"Recursive Factorial",tip:"বেস কেস n==0 বা 1 হলে return 1, নাহলে n * fact(n-1)।",code:`#include <iostream>
using namespace std;
long long fact(int n) {
    if (n <= 1) return 1; // বেস কেস
    return n * fact(n - 1); // রিকার্সিভ কল
}
int main() {
    int n = 5;
    cout << n << "! = " << fact(n) << endl;
    return 0;
}`,input:"",inputNote:"",output:"5! = 120",flags:[]},{id:"6-2",no:"৬.২",name:"Recursive Fibonacci",tip:"বেস কেস n==0 বা n==1, নাহলে fib(n-1) + fib(n-2)।",code:`#include <iostream>
using namespace std;
int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
int main() {
    int n = 8;
    for (int i = 0; i < n; i++)
        cout << fib(i) << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"0 1 1 2 3 5 8 13 ",flags:[]},{id:"6-3",no:"৬.৩",name:"Recursive GCD",tip:"ইউক্লিডের সূত্র রিকার্সিভভাবে — gcd(a,b) = gcd(b, a%b), b==0 হলে a ই উত্তর।",code:`#include <iostream>
using namespace std;
int gcd(int a, int b) {
    if (b == 0) return a; // বেস কেস
    return gcd(b, a % b);
}
int main() {
    int a = 48, b = 18;
    cout << "GCD = " << gcd(a, b) << endl;
    return 0;
}`,input:"",inputNote:"",output:"GCD = 6",flags:[]},{id:"6-4",no:"৬.৪",name:"Call by Value vs Call by Reference",tip:"Call by value → কপি পাস হয় (মূল ভ্যারিয়েবল বদলায় না)। C++ এ Call by reference করতে পয়েন্টার লাগে না — & দিয়ে সরাসরি reference parameter লেখা যায়, যা C এ সম্ভব না।",code:`#include <iostream>
using namespace std;
void byValue(int x) {
    x = x + 10; // শুধু কপি বদলায়
}
void byReference(int &x) { // C++ এ পয়েন্টার ছাড়াই রেফারেন্স ব্যবহার করা যায়
    x = x + 10; // মূল ভ্যারিয়েবল বদলায়
}
int main() {
    int a = 5;
    byValue(a);
    cout << "byValue এর পর a = " << a << " (অপরিবর্তিত)" << endl;

    byReference(a);
    cout << "byReference এর পর a = " << a << " (পরিবর্তিত)" << endl;
    return 0;
}`,input:"",inputNote:"",output:`byValue এর পর a = 5 (অপরিবর্তিত)
byReference এর পর a = 15 (পরিবর্তিত)`,flags:[]}]},{id:"s7",no:"৭",title:"পয়েন্টার প্রোগ্রাম (Pointer Programs)",items:[{id:"7-1",no:"৭.১",name:"Pointer Basics",tip:"& মানে address নাও, * মানে সেই address এর মান নাও (dereference)। C++ এ pointer print করার সময় (void*) cast লাগে না।",code:`#include <iostream>
using namespace std;
int main() {
    int a = 10;
    int *p = &a; // p এখন a এর address ধারণ করছে
    cout << "a এর মান = " << a << endl;
    cout << "a এর address = " << &a << endl;
    cout << "p এর মান (address) = " << p << endl;
    cout << "*p (dereference) = " << *p << endl;
    return 0;
}`,input:"",inputNote:"",output:`a এর মান = 10
a এর address = 0x7ffe9d2015fc
p এর মান (address) = 0x7ffe9d2015fc
*p (dereference) = 10`,flags:["address"]},{id:"7-2",no:"৭.২",name:"Swap using Pointers",tip:"ফাংশনে address পাঠাও (&a, &b), ফাংশনের ভিতরে * দিয়ে মূল মান বদলাও। (ফাংশনের নাম swapVals রাখা হলো যাতে std::swap এর সাথে না মেলে)।",code:`#include <iostream>
using namespace std;
void swapVals(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}
int main() {
    int a = 5, b = 10;
    swapVals(&a, &b);
    cout << "a=" << a << ", b=" << b << endl;
    return 0;
}`,input:"",inputNote:"",output:"a=10, b=5",flags:[]},{id:"7-3",no:"৭.৩",name:"Array using Pointer",tip:"অ্যারের নাম নিজেই প্রথম এলিমেন্টের address — *(arr+i) মানে arr[i]।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr; // অ্যারের নাম = প্রথম এলিমেন্টের address
    for (int i = 0; i < 4; i++)
        cout << *(p + i) << " "; // pointer arithmetic
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"10 20 30 40 ",flags:[]},{id:"7-4",no:"৭.৪",name:"String using Pointer",tip:"char *p দিয়ে স্ট্রিং এর উপর দিয়ে হাঁটো, \\0 না পাওয়া পর্যন্ত p++ করো। (এখানে C-স্টাইল char অ্যারেই রাখা হলো, কারণ পয়েন্টার অ্যারিথমেটিক বোঝানোই মূল উদ্দেশ্য — std::string এ raw pointer walk করা যায় না)।",code:`#include <iostream>
using namespace std;
int main() {
    const char str[] = "Hello";
    const char *p = str;
    while (*p != '\\0') {
        cout << *p;
        p++;
    }
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"Hello",flags:[]}]},{id:"s8",no:"৮",title:"স্ট্রাকচার ও ইউনিয়ন (Structure & Union)",items:[{id:"8-1",no:"৮.১",name:"Student Information",tip:"struct দিয়ে ভিন্ন ভিন্ন টাইপের ডেটা একসাথে গ্রুপ করা যায় — . (dot) দিয়ে মেম্বার অ্যাক্সেস করো। C++ এ ভ্যারিয়েবল ডিক্লেয়ার করতে 'struct' কীওয়ার্ড বারবার লিখতে হয় না।",code:`#include <iostream>
#include <string>
using namespace std;
struct Student {
    string name;
    int roll;
    float gpa;
};
int main() {
    Student s1 = {"Mugdho", 101, 3.85};
    cout << "নাম: " << s1.name << ", রোল: " << s1.roll << ", GPA: " << s1.gpa << endl;
    return 0;
}`,input:"",inputNote:"",output:"নাম: Mugdho, রোল: 101, GPA: 3.85",flags:[]},{id:"8-2",no:"৮.২",name:"Employee Record",tip:"একাধিক স্ট্রাকচার ভ্যারিয়েবল অ্যারে আকারে রাখা যায় — Employee emp[10] (struct কীওয়ার্ড ছাড়াই)।",code:`#include <iostream>
#include <string>
using namespace std;
struct Employee {
    string name;
    int id;
    float salary;
};
int main() {
    Employee e[2] = {
        {"Karim", 1, 30000},
        {"Rahim", 2, 35000}
    };
    for (int i = 0; i < 2; i++)
        cout << "ID: " << e[i].id << ", নাম: " << e[i].name << ", বেতন: " << e[i].salary << endl;
    return 0;
}`,input:"",inputNote:"",output:`ID: 1, নাম: Karim, বেতন: 30000
ID: 2, নাম: Rahim, বেতন: 35000`,flags:[]},{id:"8-3",no:"৮.৩",name:"Nested Structure",tip:"একটা struct আরেকটা struct এর ভিতরে রাখা যায় — অ্যাক্সেস করতে . দুইবার লাগে।",code:`#include <iostream>
#include <string>
using namespace std;
struct Date {
    int day, month, year;
};
struct Employee {
    string name;
    Date joiningDate; // নেস্টেড স্ট্রাকচার
};
int main() {
    Employee e1 = {"Karim", {15, 8, 2023}};
    cout << "নাম: " << e1.name << ", যোগদান: " << e1.joiningDate.day << "/"
         << e1.joiningDate.month << "/" << e1.joiningDate.year << endl;
    return 0;
}`,input:"",inputNote:"",output:"নাম: Karim, যোগদান: 15/8/2023",flags:[]},{id:"8-4",no:"৮.৪",name:"Union Example",tip:"union এর সব মেম্বার একই memory ভাগাভাগি করে — একসাথে একটাই মেম্বারের মান ঠিক থাকে (struct এর মতো আলাদা মেমরি না)।",code:`#include <iostream>
using namespace std;
union Data {
    int i;
    float f;
    char str[20];
};
int main() {
    Data data;
    data.i = 10;
    cout << "i = " << data.i << endl;

    data.f = 3.14; // এখন data.i এর মান আর ঠিক থাকবে না, একই মেমরি শেয়ার করে
    cout << "f = " << data.f << endl;

    cout << "union এর আকার (sizeof) = " << sizeof(data) << " bytes (সবচেয়ে বড় মেম্বারের সমান)" << endl;
    return 0;
}`,input:"",inputNote:"",output:`i = 10
f = 3.14
union এর আকার (sizeof) = 20 bytes (সবচেয়ে বড় মেম্বারের সমান)`,flags:[]}]},{id:"s9",no:"৯",title:"ফাইল হ্যান্ডলিং (File Handling)",items:[{id:"9-1",no:"৯.১",name:"Write to File",tip:"C++ এ FILE* এর বদলে fstream লাইব্রেরির ofstream ক্লাস ব্যবহার হয়। ofstream ওপেন করলেই write mode এ ওপেন হয় (আগের ডেটা মুছে যায়)।",code:`#include <iostream>
#include <fstream>
using namespace std;
int main() {
    ofstream fout("data.txt"); // "w" এর সমতুল্য — write mode
    if (!fout) {
        cout << "ফাইল খোলা যায়নি" << endl;
        return 1;
    }
    fout << "Hello, this is a test file." << endl;
    fout.close();
    cout << "ফাইলে লেখা হয়েছে" << endl;
    return 0;
}`,input:"",inputNote:"",output:"ফাইলে লেখা হয়েছে",flags:[]},{id:"9-2",no:"৯.২",name:"Read from File",tip:"ifstream দিয়ে ফাইল ওপেন করো ('r' মোডের সমতুল্য), getline() দিয়ে লাইন পড়ো।",code:`#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main() {
    ifstream fin("data.txt"); // "r" এর সমতুল্য
    if (!fin) {
        cout << "ফাইল খোলা যায়নি" << endl;
        return 1;
    }
    string line;
    while (getline(fin, line))
        cout << line << endl;
    fin.close();
    return 0;
}`,input:"",inputNote:"",output:"Hello, this is a test file.",flags:["needsFile"]},{id:"9-3",no:"৯.৩",name:"Append File",tip:"ofstream ওপেন করার সময় ios::app ফ্ল্যাগ দিলে ফাইলের শেষে নতুন ডেটা যোগ হয় (আগেরটা মুছে যায় না)।",code:`#include <iostream>
#include <fstream>
using namespace std;
int main() {
    ofstream fout("data.txt", ios::app); // append mode
    if (!fout) {
        cout << "ফাইল খোলা যায়নি" << endl;
        return 1;
    }
    fout << "নতুন লাইন যোগ করা হলো।" << endl;
    fout.close();
    cout << "ফাইলে যোগ করা হয়েছে" << endl;
    return 0;
}`,input:"",inputNote:"",output:"ফাইলে যোগ করা হয়েছে",flags:[]},{id:"9-4",no:"৯.৪",name:"Copy File",tip:"একটা ফাইল ifstream দিয়ে খুলে অক্ষর পড়ো, আরেকটা ofstream দিয়ে খুলে লিখে দাও।",code:`#include <iostream>
#include <fstream>
using namespace std;
int main() {
    ifstream src("data.txt");
    ofstream dest("copy.txt");
    if (!src || !dest) {
        cout << "ফাইল খোলা যায়নি" << endl;
        return 1;
    }
    char ch;
    while (src.get(ch))
        dest.put(ch);
    src.close();
    dest.close();
    cout << "ফাইল কপি সম্পন্ন" << endl;
    return 0;
}`,input:"",inputNote:"",output:"ফাইল কপি সম্পন্ন",flags:["needsFile"]}]},{id:"s10",no:"১০",title:"ডাইনামিক মেমরি (Dynamic Memory)",items:[{id:"10-1",no:"১০.১",name:"malloc() এর C++ সমতুল্য — new",tip:"C++ এ malloc() এর বদলে new[] অপারেটর ব্যবহার হয় — টাইপ cast করার দরকার হয় না, এবং ব্যর্থ হলে exception থ্রো করে (এখানে সহজবোধ্যতার জন্য nullptr চেক দেখানো হলো)।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    int *arr = new int[n]; // new — মেমরি বরাদ্দ করে কিন্তু initialize করে না
    if (arr == nullptr) {
        cout << "মেমরি বরাদ্দ ব্যর্থ" << endl;
        return 1;
    }
    for (int i = 0; i < n; i++) arr[i] = i + 1;
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    delete[] arr;
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 ",flags:[]},{id:"10-2",no:"১০.২",name:"calloc() এর C++ সমতুল্য",tip:"new int[n]() লিখলে (শেষে ব্র্যাকেট দিলে) সব উপাদান 0 দিয়ে initialize হয় — এটাই calloc() এর C++ পদ্ধতি।",code:`#include <iostream>
using namespace std;
int main() {
    int n = 5;
    int *arr = new int[n](); // () দিলে সব 0 দিয়ে initialize হয় (calloc এর মতো)
    for (int i = 0; i < n; i++) cout << arr[i] << " "; // সব 0 দেখাবে
    cout << endl;
    delete[] arr;
    return 0;
}`,input:"",inputNote:"",output:"0 0 0 0 0 ",flags:[]},{id:"10-3",no:"১০.৩",name:"realloc() এর C++ ভালো বিকল্প — vector",tip:"C++ এ realloc() এর সরাসরি সমতুল্য নেই। এর বদলে std::vector ব্যবহার করা ভালো অভ্যাস — push_back() করলে ভেক্টর নিজে থেকেই প্রয়োজনে আকার বাড়িয়ে নেয় (realloc এর কাজ automatic ও নিরাপদ)।",code:`#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<int> arr = {1, 2, 3};
    arr.push_back(4); // ভেক্টর নিজে থেকেই আকার বাড়ায় (realloc এর কাজ automatic)
    arr.push_back(5);

    for (int x : arr) cout << x << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 ",flags:[]},{id:"10-4",no:"১০.৪",name:"free() এর C++ সমতুল্য — delete",tip:"যে মেমরি new দিয়ে নেওয়া হয়েছে, ব্যবহার শেষে অবশ্যই delete (single) বা delete[] (array) করতে হয় — নাহলে memory leak হয়। free() এর বদলে delete, malloc() এর বদলে new।",code:`#include <iostream>
using namespace std;
int main() {
    int *p = new int; // malloc(sizeof(int)) এর সমতুল্য
    *p = 100;
    cout << "মান = " << *p << endl;
    delete p; // মেমরি ছেড়ে দেওয়া হলো
    p = nullptr; // dangling pointer এড়ানোর জন্য ভালো অভ্যাস
    cout << "মেমরি ফ্রি করা হয়েছে" << endl;
    return 0;
}`,input:"",inputNote:"",output:`মান = 100
মেমরি ফ্রি করা হয়েছে`,flags:[]}]},{id:"s11",no:"১১",title:"ডেটা স্ট্রাকচার (C++ তে ইমপ্লিমেন্টেশন)",items:[{id:"11-1",no:"১১.১",name:"Stack (Array)",tip:"LIFO (Last In First Out) — top ভ্যারিয়েবল দিয়ে শেষ এলিমেন্ট ট্র্যাক করো। push এ top++, pop এ top--।",code:`#include <iostream>
using namespace std;
#define MAX 5
int stackArr[MAX], top = -1;

void push(int val) {
    if (top == MAX - 1) { cout << "Stack Overflow" << endl; return; }
    stackArr[++top] = val;
}
int pop() {
    if (top == -1) { cout << "Stack Underflow" << endl; return -1; }
    return stackArr[top--];
}
int main() {
    push(10); push(20); push(30);
    cout << "Pop: " << pop() << endl;
    cout << "Pop: " << pop() << endl;
    return 0;
}`,input:"",inputNote:"",output:`Pop: 30
Pop: 20`,flags:[]},{id:"11-2",no:"১১.২",name:"Stack (Linked List)",tip:"নতুন নোড সবসময় head এর সামনে (top এ) যোগ হয় (push), head সরিয়ে remove হয় (pop)। C++ এ struct এর ভিতরে নাম লেখার সময় 'struct' কীওয়ার্ড লাগে না, malloc এর বদলে new ব্যবহার হলো।",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *next;
};
Node *top = nullptr;

void push(int val) {
    Node *newNode = new Node();
    newNode->data = val;
    newNode->next = top; // নতুন নোড আগেরটার আগে বসবে
    top = newNode;
}
int pop() {
    if (top == nullptr) { cout << "Stack Empty" << endl; return -1; }
    int val = top->data;
    Node *temp = top;
    top = top->next;
    delete temp;
    return val;
}
int main() {
    push(10); push(20); push(30);
    cout << "Pop: " << pop() << endl;
    cout << "Pop: " << pop() << endl;
    return 0;
}`,input:"",inputNote:"",output:`Pop: 30
Pop: 20`,flags:[]},{id:"11-3",no:"১১.৩",name:"Queue (Array)",tip:"FIFO (First In First Out) — front থেকে বের হয়, rear এ ঢুকে। (অ্যারের নাম queueArr রাখা হলো যাতে std::queue এর সাথে না মেলে)।",code:`#include <iostream>
using namespace std;
#define MAX 5
int queueArr[MAX], front = -1, rear = -1;

void enqueue(int val) {
    if (rear == MAX - 1) { cout << "Queue Full" << endl; return; }
    if (front == -1) front = 0;
    queueArr[++rear] = val;
}
int dequeue() {
    if (front == -1 || front > rear) { cout << "Queue Empty" << endl; return -1; }
    return queueArr[front++];
}
int main() {
    enqueue(10); enqueue(20); enqueue(30);
    cout << "Dequeue: " << dequeue() << endl;
    cout << "Dequeue: " << dequeue() << endl;
    return 0;
}`,input:"",inputNote:"",output:`Dequeue: 10
Dequeue: 20`,flags:[]},{id:"11-4",no:"১১.৪",name:"Circular Queue",tip:"rear শেষে পৌঁছালে আবার 0 তে ফিরে যায় — (rear+1) % MAX সূত্র ব্যবহার করো।",code:`#include <iostream>
using namespace std;
#define MAX 5
int cqueue[MAX], front = -1, rear = -1;

void enqueue(int val) {
    if ((rear + 1) % MAX == front) { cout << "Queue Full" << endl; return; }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    cqueue[rear] = val;
}
int dequeue() {
    if (front == -1) { cout << "Queue Empty" << endl; return -1; }
    int val = cqueue[front];
    if (front == rear) front = rear = -1; // শেষ এলিমেন্ট
    else front = (front + 1) % MAX;
    return val;
}
int main() {
    enqueue(1); enqueue(2); enqueue(3);
    cout << "Dequeue: " << dequeue() << endl;
    enqueue(4);
    cout << "Dequeue: " << dequeue() << endl;
    return 0;
}`,input:"",inputNote:"",output:`Dequeue: 1
Dequeue: 2`,flags:[]},{id:"11-5",no:"১১.৫",name:"Linked List",tip:"প্রতিটি নোডে data + next pointer থাকে। শেষে নতুন নোড যোগ করতে হলে শেষ নোড পর্যন্ত হাঁটতে হয়।",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *next;
};
Node *head = nullptr;

void insert(int val) {
    Node *newNode = new Node();
    newNode->data = val;
    newNode->next = nullptr;
    if (head == nullptr) { head = newNode; return; }
    Node *temp = head;
    while (temp->next != nullptr) temp = temp->next; // শেষ পর্যন্ত যাওয়া
    temp->next = newNode;
}
void display() {
    Node *temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}
int main() {
    insert(10); insert(20); insert(30);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 -> 20 -> 30 -> NULL",flags:[]},{id:"11-6",no:"১১.৬",name:"Doubly Linked List",tip:"প্রতিটি নোডে দুইটা pointer — prev (আগের নোড) ও next (পরের নোড), তাই দুই দিকেই যাওয়া যায়।",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *prev, *next;
};
Node *head = nullptr;

void insert(int val) {
    Node *newNode = new Node();
    newNode->data = val;
    newNode->prev = nullptr;
    newNode->next = head;
    if (head != nullptr) head->prev = newNode;
    head = newNode;
}
void display() {
    Node *temp = head;
    while (temp != nullptr) {
        cout << temp->data << " <-> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}
int main() {
    insert(30); insert(20); insert(10);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 <-> 20 <-> 30 <-> NULL",flags:[]},{id:"11-7",no:"১১.৭",name:"Circular Linked List",tip:"শেষ নোডের next হেড (head) কে নির্দেশ করে, তাই কোনো NULL থাকে না — চক্রাকারে ঘোরে।",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *next;
};
Node *head = nullptr;

void insert(int val) {
    Node *newNode = new Node();
    newNode->data = val;
    if (head == nullptr) {
        head = newNode;
        newNode->next = head; // নিজের দিকে নির্দেশ করে
        return;
    }
    Node *temp = head;
    while (temp->next != head) temp = temp->next;
    temp->next = newNode;
    newNode->next = head; // চক্র সম্পূর্ণ করা
}
void display() {
    if (head == nullptr) return;
    Node *temp = head;
    do {
        cout << temp->data << " -> ";
        temp = temp->next;
    } while (temp != head);
    cout << "(head)" << endl;
}
int main() {
    insert(10); insert(20); insert(30);
    display();
    return 0;
}`,input:"",inputNote:"",output:"10 -> 20 -> 30 -> (head)",flags:[]},{id:"11-8",no:"১১.৮",name:"Binary Search Tree (BST)",tip:"বামের সব নোড ছোট, ডানের সব নোড বড় — insert এ তুলনা করে বাম/ডানে যাও।",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *left, *right;
};
Node* newNode(int val) {
    Node *node = new Node();
    node->data = val;
    node->left = node->right = nullptr;
    return node;
}
Node* insert(Node *root, int val) {
    if (root == nullptr) return newNode(val);
    if (val < root->data) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    return root;
}
void inorder(Node *root) { // ছোট থেকে বড় ক্রমে প্রিন্ট করে
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
int main() {
    Node *root = nullptr;
    int vals[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, vals[i]);
    inorder(root);
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"20 30 40 50 60 70 80 ",flags:[]},{id:"11-9",no:"১১.৯",name:"Tree Traversal (Preorder, Inorder, Postorder)",tip:"- Preorder: রুট-বাম-ডান (Root → Left → Right)- Inorder: বাম-রুট-ডান (Left → Root → Right)- Postorder: বাম-ডান-রুট (Left → Right → Root)",code:`#include <iostream>
using namespace std;
struct Node {
    int data;
    Node *left, *right;
};
Node* newNode(int val) {
    Node *n = new Node();
    n->data = val; n->left = n->right = nullptr;
    return n;
}
void preorder(Node *r) {
    if (!r) return;
    cout << r->data << " "; // রুট আগে
    preorder(r->left);
    preorder(r->right);
}
void inorder(Node *r) {
    if (!r) return;
    inorder(r->left);
    cout << r->data << " "; // রুট মাঝে
    inorder(r->right);
}
void postorder(Node *r) {
    if (!r) return;
    postorder(r->left);
    postorder(r->right);
    cout << r->data << " "; // রুট শেষে
}
int main() {
    Node *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    cout << "Preorder: "; preorder(root); cout << endl;
    cout << "Inorder: "; inorder(root); cout << endl;
    cout << "Postorder: "; postorder(root); cout << endl;
    return 0;
}`,input:"",inputNote:"",output:`Preorder: 1 2 4 5 3 
Inorder: 4 2 5 1 3 
Postorder: 4 5 2 3 1 `,flags:[]},{id:"11-10",no:"১১.১০",name:"BFS (Breadth First Search)",tip:"Queue ব্যবহার করে লেভেল বাই লেভেল ঘোরে — visited অ্যারে রাখতে হয় যাতে একই নোড দুইবার ভিজিট না হয়।",code:`#include <iostream>
using namespace std;
#define V 5
int adj[V][V] = { // অ্যাডজেসেন্সি ম্যাট্রিক্স (গ্রাফ)
    {0,1,1,0,0},
    {1,0,0,1,0},
    {1,0,0,0,1},
    {0,1,0,0,1},
    {0,0,1,1,0}
};
bool visited[V] = {false};
int q[V], front = -1, rear = -1;

void enqueue(int x) { q[++rear] = x; }
int dequeue() { return q[++front]; }
bool isEmpty() { return front == rear; }

void bfs(int start) {
    enqueue(start);
    visited[start] = true;
    while (!isEmpty()) {
        int node = dequeue();
        cout << node << " ";
        for (int i = 0; i < V; i++) {
            if (adj[node][i] == 1 && !visited[i]) {
                enqueue(i);
                visited[i] = true; // ভিজিট করা হয়ে গেছে চিহ্নিত করা
            }
        }
    }
}
int main() {
    cout << "BFS: ";
    bfs(0);
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"BFS: 0 1 2 3 4 ",flags:[]},{id:"11-11",no:"১১.১১",name:"DFS (Depth First Search)",tip:"রিকার্সন (বা stack) ব্যবহার করে একটা পথ ধরে যতদূর সম্ভব যাও, তারপর ফিরে এসে অন্য পথ ধরো।",code:`#include <iostream>
using namespace std;
#define V 5
int adj[V][V] = {
    {0,1,1,0,0},
    {1,0,0,1,0},
    {1,0,0,0,1},
    {0,1,0,0,1},
    {0,0,1,1,0}
};
bool visited[V] = {false};

void dfs(int node) {
    visited[node] = true;
    cout << node << " ";
    for (int i = 0; i < V; i++)
        if (adj[node][i] == 1 && !visited[i])
            dfs(i); // রিকার্সিভভাবে গভীরে যাওয়া
}
int main() {
    cout << "DFS: ";
    dfs(0);
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"DFS: 0 1 3 4 2 ",flags:[]}]},{id:"s12",no:"১২",title:"পরীক্ষায় প্রায়ই আসা প্রোগ্রাম (Frequently Asked Exam Programs)",items:[{id:"12-1",no:"১২.১",name:"Decimal to Binary",tip:"সংখ্যাটিকে বারবার ২ দিয়ে ভাগ করো, ভাগশেষগুলো উল্টো ক্রমে বসাও।",code:`#include <iostream>
using namespace std;
int main() {
    int n, binary[32], i = 0;
    cout << "দশমিক সংখ্যা দিন: ";
    cin >> n;
    if (n == 0) { cout << 0 << endl; return 0; }
    while (n > 0) {
        binary[i++] = n % 2;
        n /= 2;
    }
    cout << "বাইনারি = ";
    for (int j = i - 1; j >= 0; j--) cout << binary[j]; // উল্টো ক্রমে প্রিন্ট
    cout << endl;
    return 0;
}`,input:`22
`,inputNote:"22",output:"দশমিক সংখ্যা দিন: বাইনারি = 10110",flags:[]},{id:"12-2",no:"১২.২",name:"Binary to Decimal",tip:"প্রতিটি অংককে ২ এর পাওয়ারে গুণ করে যোগ করো (ডান থেকে বাম, পাওয়ার ০,১,২...)।",code:`#include <iostream>
#include <cmath>
using namespace std;
int main() {
    long long binary;
    int decimalVal = 0, i = 0, rem;
    cout << "বাইনারি সংখ্যা দিন: ";
    cin >> binary;
    while (binary != 0) {
        rem = binary % 10;
        decimalVal += rem * pow(2, i);
        binary /= 10;
        i++;
    }
    cout << "দশমিক = " << decimalVal << endl;
    return 0;
}`,input:`10110
`,inputNote:"10110",output:"বাইনারি সংখ্যা দিন: দশমিক = 22",flags:[]},{id:"12-3",no:"১২.৩",name:"Decimal to Octal/Hexadecimal",tip:"cout এর সাথে hex ও oct ম্যানিপুলেটর ব্যবহার করলে সরাসরি অক্টাল/হেক্স ফরম্যাটে প্রিন্ট হয় (C এর %o, %x এর সমতুল্য)। এরপর ম্যানুয়ালি হেক্স বের করার পদ্ধতিও দেখানো হলো।",code:`#include <iostream>
#include <string>
using namespace std;
int main() {
    int n;
    cout << "সংখ্যা দিন: ";
    cin >> n;
    cout << "অক্টাল (Octal) = " << oct << n << dec << endl; // stream manipulator
    cout << "হেক্সাডেসিমাল (Hex) = " << hex << n << dec << endl;

    // ম্যানুয়ালি হেক্সাডেসিমাল বের করা
    int num = n, hexArr[32], i = 0;
    string hexDigits = "0123456789ABCDEF";
    if (num == 0) hexArr[i++] = 0;
    while (num > 0) {
        hexArr[i++] = num % 16;
        num /= 16;
    }
    cout << "ম্যানুয়াল হেক্স = ";
    for (int j = i - 1; j >= 0; j--) cout << hexDigits[hexArr[j]];
    cout << endl;
    return 0;
}`,input:`255
`,inputNote:"255",output:`সংখ্যা দিন: অক্টাল (Octal) = 377
হেক্সাডেসিমাল (Hex) = ff
ম্যানুয়াল হেক্স = FF`,flags:[]},{id:"12-4",no:"১২.৪",name:"Power using Recursion",tip:"বেস কেস exp==0 হলে return 1, নাহলে base * power(base, exp-1)।",code:`#include <iostream>
using namespace std;
long long power(int base, int exp) {
    if (exp == 0) return 1; // বেস কেস
    return base * power(base, exp - 1);
}
int main() {
    cout << "2^10 = " << power(2, 10) << endl;
    return 0;
}`,input:"",inputNote:"",output:"2^10 = 1024",flags:[]},{id:"12-5",no:"১২.৫",name:"Check Anagram",tip:"দুইটা স্ট্রিং sort করে ফেলো, sort করার পর একই হলে anagram (একই অক্ষর, ভিন্ন সাজানো)। C++ এ <algorithm> এর built-in sort() ব্যবহার করা যায়, নিজে বাবল সর্ট লিখতে হয় না।",code:`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main() {
    string s1 = "listen", s2 = "silent";
    string a = s1, b = s2;
    sort(a.begin(), a.end()); // C++ এ built-in sort() ব্যবহার করা যায়
    sort(b.begin(), b.end());
    if (a == b)
        cout << "অ্যানাগ্রাম (Anagram)" << endl;
    else
        cout << "অ্যানাগ্রাম নয়" << endl;
    return 0;
}`,input:"",inputNote:"",output:"অ্যানাগ্রাম (Anagram)",flags:[]},{id:"12-6",no:"১২.৬",name:"Remove Duplicate from Array",tip:"আগে array sort করো, তারপর পাশাপাশি এলিমেন্ট ভিন্ন হলেই নতুন অ্যারেতে রাখো।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    // sort করা আছে ধরে নিলাম
    int result[10], k = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || arr[i] != arr[i - 1]) // আগেরটার থেকে ভিন্ন হলে
            result[k++] = arr[i];
    }
    cout << "ডুপ্লিকেট বাদে: ";
    for (int i = 0; i < k; i++) cout << result[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"ডুপ্লিকেট বাদে: 1 2 3 4 5 ",flags:[]},{id:"12-7",no:"১২.৭",name:"Merge & Sort Arrays",tip:"দুইটা অ্যারে একসাথে মার্জ করে তারপর sort() ফাংশন প্রয়োগ করো। C++ এ <algorithm>::sort() ব্যবহার করলে নিজে sorting algorithm লিখতে হয় না।",code:`#include <iostream>
#include <algorithm>
using namespace std;
int main() {
    int a[] = {5, 1, 4}, b[] = {2, 6, 3};
    int n1 = 3, n2 = 3;
    int merged[6], k = 0;
    for (int i = 0; i < n1; i++) merged[k++] = a[i];
    for (int i = 0; i < n2; i++) merged[k++] = b[i];

    sort(merged, merged + k); // C++ এর built-in sort() ব্যবহার করা হলো

    for (int i = 0; i < k; i++) cout << merged[i] << " ";
    cout << endl;
    return 0;
}`,input:"",inputNote:"",output:"1 2 3 4 5 6 ",flags:[]},{id:"12-8",no:"১২.৮",name:"Frequency of Array Elements",tip:"প্রতিটি এলিমেন্টের জন্য visited চেক করো (আগে গোনা হয়ে থাকলে স্কিপ করো), নাহলে পুরো অ্যারেতে গুনে ফেলো।",code:`#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 2, 2, 3, 1, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    bool visited[100] = {false};
    for (int i = 0; i < n; i++) {
        if (visited[i]) continue; // আগেই গোনা হয়ে গেছে
        int count = 1;
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) { count++; visited[j] = true; }
        }
        cout << arr[i] << " এর ফ্রিকোয়েন্সি = " << count << endl;
    }
    return 0;
}`,input:"",inputNote:"",output:`1 এর ফ্রিকোয়েন্সি = 2
2 এর ফ্রিকোয়েন্সি = 3
3 এর ফ্রিকোয়েন্সি = 1
4 এর ফ্রিকোয়েন্সি = 1`,flags:[]},{id:"12-9",no:"১২.৯",name:"Menu-driven Calculator",tip:"switch-case দিয়ে অপশন অনুযায়ী কাজ করো, লুপে রাখলে বারবার চালানো যায়।",code:`#include <iostream>
using namespace std;
int main() {
    int choice;
    float a, b;
    do {
        cout << "\\n১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান\\nপছন্দ দিন: ";
        cin >> choice;
        if (choice == 5) break;
        cout << "দুইটি সংখ্যা দিন: ";
        cin >> a >> b;
        switch (choice) {
            case 1: cout << "যোগফল = " << a + b << endl; break;
            case 2: cout << "বিয়োগফল = " << a - b << endl; break;
            case 3: cout << "গুণফল = " << a * b << endl; break;
            case 4:
                if (b != 0) cout << "ভাগফল = " << a / b << endl;
                else cout << "শূন্য দিয়ে ভাগ করা যায় না" << endl;
                break;
            default: cout << "ভুল অপশন" << endl;
        }
    } while (choice != 5);
    return 0;
}`,input:`1
10 3
5
`,inputNote:"1  →  10 3  →  5",output:`
১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান
পছন্দ দিন: দুইটি সংখ্যা দিন: যোগফল = 13

১.যোগ ২.বিয়োগ ৩.গুণ ৪.ভাগ ৫.প্রস্থান
পছন্দ দিন: `,flags:[]},{id:"12-10",no:"১২.১০",name:"Simple Banking System",tip:"balance ভ্যারিয়েবলে টাকা জমা রাখো, deposit এ যোগ, withdraw এ বিয়োগ (balance যথেষ্ট আছে কিনা চেক করে)।",code:`#include <iostream>
using namespace std;
int main() {
    float balance = 1000;
    int choice;
    float amount;
    do {
        cout << "\\n১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান\\nপছন্দ: ";
        cin >> choice;
        switch (choice) {
            case 1:
                cout << "জমার পরিমাণ: ";
                cin >> amount;
                balance += amount;
                cout << "নতুন ব্যালেন্স = " << balance << endl;
                break;
            case 2:
                cout << "উত্তোলনের পরিমাণ: ";
                cin >> amount;
                if (amount > balance) cout << "অপর্যাপ্ত ব্যালেন্স!" << endl;
                else { balance -= amount; cout << "নতুন ব্যালেন্স = " << balance << endl; }
                break;
            case 3:
                cout << "বর্তমান ব্যালেন্স = " << balance << endl;
                break;
        }
    } while (choice != 4);
    return 0;
}`,input:`1
500
3
4
`,inputNote:"1  →  500  →  3  →  4",output:`
১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: জমার পরিমাণ: নতুন ব্যালেন্স = 1500

১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: বর্তমান ব্যালেন্স = 1500

১.জমা ২.উত্তোলন ৩.ব্যালেন্স দেখুন ৪.প্রস্থান
পছন্দ: `,flags:[]},{id:"12-11",no:"১২.১১",name:"Student Result Management",tip:"struct দিয়ে ছাত্রের তথ্য রাখো, নাম্বার থেকে গড় (average) ও গ্রেড বের করো।",code:`#include <iostream>
#include <string>
using namespace std;
struct Student {
    string name;
    int marks[3];
    float average;
    char grade;
};
int main() {
    Student s;
    cout << "নাম দিন: ";
    cin >> s.name;
    int total = 0;
    for (int i = 0; i < 3; i++) {
        cout << "বিষয় " << i + 1 << " এর নম্বর: ";
        cin >> s.marks[i];
        total += s.marks[i];
    }
    s.average = total / 3.0;
    if (s.average >= 80) s.grade = 'A';
    else if (s.average >= 60) s.grade = 'B';
    else if (s.average >= 40) s.grade = 'C';
    else s.grade = 'F';

    cout << "\\nনাম: " << s.name << ", গড়: " << s.average << ", গ্রেড: " << s.grade << endl;
    return 0;
}`,input:`Mugdho
80 75 90
`,inputNote:"Mugdho  →  80 75 90",output:`নাম দিন: বিষয় 1 এর নম্বর: বিষয় 2 এর নম্বর: বিষয় 3 এর নম্বর: 
নাম: Mugdho, গড়: 81.6667, গ্রেড: A`,flags:[]},{id:"12-12",no:"১২.১২",name:"Library Management (Mini Project)",tip:"struct দিয়ে বই এর তথ্য (id, নাম, স্ট্যাটাস) রাখো, menu-driven সিস্টেমে add/search/issue করো। C++ এ bool ব্যবহার করে isIssued flag রাখা যায়।",code:`#include <iostream>
#include <string>
using namespace std;
struct Book {
    int id;
    string title;
    bool isIssued; // false = আছে, true = ইস্যু হয়েছে
};
int main() {
    Book books[10];
    int count = 0, choice;
    do {
        cout << "\\n১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান\\nপছন্দ: ";
        cin >> choice;
        switch (choice) {
            case 1:
                cout << "বই আইডি ও নাম দিন: ";
                cin >> books[count].id >> books[count].title;
                books[count].isIssued = false;
                count++;
                break;
            case 2:
                for (int i = 0; i < count; i++)
                    cout << "ID:" << books[i].id << ", নাম:" << books[i].title
                         << ", স্ট্যাটাস: " << (books[i].isIssued ? "ইস্যুকৃত" : "উপলব্ধ") << endl;
                break;
            case 3: {
                int id;
                cout << "ইস্যু করার বই এর আইডি দিন: ";
                cin >> id;
                for (int i = 0; i < count; i++)
                    if (books[i].id == id) { books[i].isIssued = true; cout << "ইস্যু সম্পন্ন" << endl; }
                break;
            }
        }
    } while (choice != 4);
    return 0;
}`,input:`1
101 CProgramming
2
4
`,inputNote:"1  →  101 CProgramming  →  2  →  4",output:`
১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: বই আইডি ও নাম দিন: 
১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: ID:101, নাম:CProgramming, স্ট্যাটাস: উপলব্ধ

১.বই যোগ ২.বই দেখুন ৩.বই ইস্যু ৪.প্রস্থান
পছন্দ: `,flags:[]}]}],ov={c:[{title:"কুইক রিভিশন — শেষ মুহূর্তের টিপস",blocks:[{type:"table",rows:[["ধরন","মূল কৌশল"],["Prime","2 থেকে √n পর্যন্ত ভাগ চেক"],["Palindrome (সংখ্যা/স্ট্রিং)","উল্টিয়ে বা দুই প্রান্ত থেকে তুলনা"],["Factorial/Power","গুণের identity = 1 দিয়ে শুরু, লুপ বা রিকার্সন"],["GCD","ইউক্লিড: while(b){t=b;b=a%b;a=t;}"],["Sorting","Bubble = পাশাপাশি swap; Selection = min খুঁজে swap"],["Searching","Linear = O(n), Binary = sorted হলে O(log n)"],["Recursion","সবসময় বেস কেস আগে লেখো"],["Pointer","&=address নাও, *=মান নাও (dereference)"],["Stack","LIFO — top দিয়ে push/pop"],["Queue","FIFO — front দিয়ে বের, rear দিয়ে ঢোকা"],["Tree Traversal","Pre=Root-L-R, In=L-Root-R, Post=L-R-Root"],["BFS/DFS","BFS=Queue (লেভেল ধরে), DFS=Recursion/Stack (গভীরে যাওয়া)"]]},{type:"p",text:"পরীক্ষায় দ্রুত মনে রাখার নিয়ম: যেকোনো লুপ প্রোগ্রামে প্রথমে ভাবো — “আমি কী জমা করছি (sum/product/count) আর কীসের উপর লুপ চালাচ্ছি?” — এই দুইটা প্রশ্নের উত্তর পেলেই প্রায় সব লুপ প্রোগ্রাম লেখা সহজ হয়ে যায়।"}]}],cpp:[{title:"C ↔ C++ কনভার্সন নোট",blocks:[{type:"p",text:"এই টেবিলে C আর C++ এর মূল পার্থক্যগুলো সংক্ষেপে দেওয়া হলো — পরীক্ষার আগে দ্রুত রিভিশনের জন্য।"},{type:"table",rows:[["বিষয়","C এ যেভাবে হতো","C++ এ যেভাবে হয়"],["হেডার ফাইল","#include <stdio.h>, <string.h>, <stdlib.h>","#include <iostream>, <string>, <fstream>, <vector>, <algorithm>"],["ইনপুট/আউটপুট","printf(), scanf() — ফরম্যাট স্পেসিফায়ার (%d, %s...) লাগে","cout <<, cin >> — টাইপ নিজে থেকেই বোঝা যায়, ফরম্যাট স্পেসিফায়ার লাগে না"],["স্ট্রিং","char অ্যারে + null terminator ('\\0'), strlen/strcpy/strcmp ফাংশন","std::string ক্লাস — নিজেই মেমরি ম্যানেজ করে, =, ==, + অপারেটর সরাসরি কাজ করে"],["struct ব্যবহার","ভ্যারিয়েবল ডিক্লেয়ার করতে 'struct' কীওয়ার্ড বারবার লিখতে হয় (struct Node *p;)","'struct' কীওয়ার্ড ছাড়াই সরাসরি টাইপের নাম লেখা যায় (Node *p;)"],["ডাইনামিক মেমরি","malloc(), calloc(), realloc(), free() — টাইপ cast লাগে","new, new[], delete, delete[] — টাইপ cast লাগে না; realloc() এর বদলে std::vector ব্যবহার করাই ভালো অভ্যাস"],["NULL পয়েন্টার","NULL","nullptr (টাইপ-সেফ, আধুনিক C++ স্ট্যান্ডার্ড)"],["বুলিয়ান মান","int দিয়ে 0/1 হিসেবে বোঝাতে হয় (stdbool.h ছাড়া)","bool টাইপ, true/false সরাসরি ব্যবহারযোগ্য"],["Call by Reference","শুধু পয়েন্টার (*) দিয়ে সম্ভব — void f(int *x)","পয়েন্টার ছাড়াই reference (&) দিয়ে সম্ভব — void f(int &x)"],["ফাইল হ্যান্ডলিং","FILE*, fopen(), fprintf(), fgets(), fclose()","ifstream, ofstream, fstream — <<, >>, getline() অপারেটর/ফাংশন"],["সর্টিং/সার্চিং","নিজে বাবল সর্ট, লিনিয়ার সার্চ ইত্যাদি লিখতে হয়","<algorithm> লাইব্রেরির sort(), find() ইত্যাদি built-in ফাংশন সরাসরি ব্যবহারযোগ্য (তবে অ্যালগরিদম শেখার জন্য ম্যানুয়াল কোডও এই নোটে রাখা হয়েছে)"],["ডেটা স্ট্রাকচার (Stack/Queue)","নিজে অ্যারে/লিঙ্কড লিস্ট দিয়ে ইমপ্লিমেন্ট করতে হয়","নিজে ইমপ্লিমেন্ট করা যায় (এই নোটে যেভাবে দেখানো হয়েছে), অথবা STL এর std::stack, std::queue সরাসরি ব্যবহারযোগ্য"],["ভ্যারিয়েবল ডিক্লেয়ারেশন","সাধারণত ফাংশনের শুরুতে সব ভ্যারিয়েবল ডিক্লেয়ার করার রীতি","যেকোনো জায়গায় প্রয়োজনমতো ডিক্লেয়ার করা যায় (for লুপের ভিতরেও)"],["ফাংশন ওভারলোডিং","সম্ভব না — একই নামে দুইটা ফাংশন থাকতে পারে না","সম্ভব — প্যারামিটার ভিন্ন হলে একই নামে একাধিক ফাংশন লেখা যায়"],["namespace","নেই","using namespace std; — স্ট্যান্ডার্ড লাইব্রেরির নাম (cout, cin, string...) সরাসরি ব্যবহারযোগ্য করে"]]},{type:"h",text:"সংক্ষেপে মনে রাখার নিয়ম"},{type:"p",text:"C প্রোগ্রাম C++ এ কনভার্ট করতে হলে প্রথমে ভাবো — headers (stdio.h → iostream), I/O (printf/scanf → cout/cin), string (char[] → string), memory (malloc/free → new/delete), আর struct/NULL/bool এর ছোট পার্থক্যগুলো। যুক্তি ও অ্যালগরিদম একই থাকে, শুধু সিনট্যাক্স ও লাইব্রেরি বদলায়।"},{type:"h",text:"বিস্তারিত পার্থক্য"},{type:"p",text:"উপরের প্রতিটি প্রোগ্রাম C থেকে C++ এ কনভার্ট করার সময় যে সাধারণ পরিবর্তনগুলো বারবার এসেছে, সেগুলো এক জায়গায় সংক্ষেপে দেওয়া হলো — পরীক্ষার আগে দ্রুত রিভিশনের জন্য।"},{type:"h",text:"ইনপুট/আউটপুট (I/O)"},{type:"table",rows:[["C","C++"],["#include <stdio.h>","#include <iostream>  (এবং using namespace std;)"],['printf("...", var)','cout << "..." << var  (কোনো format specifier লাগে না)'],['scanf("%d", &n)',"cin >> n  (& লাগে না, cin নিজেই address ধরে নেয়)"],["%d, %f, %c, %s ফরম্যাট স্পেসিফায়ার","লাগে না — cout/cin টাইপ নিজে থেকেই বুঝে নেয় (type-safe)"],["\\n দিয়ে নতুন লাইন",'endl বা "\\n" দুটোই চলে; endl বাফারও flush করে']]},{type:"h",text:"মেমরি ব্যবস্থাপনা (Dynamic Memory)"},{type:"table",rows:[["C","C++"],["malloc(n * sizeof(type))","new type[n]  (কাস্ট লাগে না, টাইপ-সেফ)"],["calloc(n, sizeof(type))","new type[n]()  ( () দিলে সব 0 দিয়ে initialize হয়)"],["realloc(ptr, newSize)","সরাসরি কোনো বিকল্প নেই — নতুন array বানিয়ে কপি করতে হয়, অথবা std::vector ব্যবহার করাই ভালো"],["free(ptr)","delete ptr;  (single) অথবা delete[] ptr;  (array)"],["NULL","nullptr  (টাইপ-সেফ, C++11 থেকে প্রস্তাবিত)"]]},{type:"h",text:"স্ট্রাকচার ও টাইপ"},{type:"table",rows:[["C","C++"],["struct Student s1; (struct কীওয়ার্ড বাধ্যতামূলক)","Student s1;  (struct কীওয়ার্ড ছাড়াই সরাসরি টাইপের নাম লেখা যায়)"],["struct Node* (পয়েন্টার ডিক্লেয়ারেশনেও struct লাগে)","Node*  (আলাদা করে struct লেখা লাগে না)"],["char name[50]; (ফিক্সড সাইজ char array)","string name;  (#include <string>, ডাইনামিক সাইজ, ==, + অপারেটর সাপোর্ট করে)"],["int isValid; (বুলিয়ানের বদলে int 0/1)","bool isValid;  (সত্যিকারের বুলিয়ান টাইপ, true/false)"]]},{type:"h",text:"ফাংশন ও প্যারামিটার"},{type:"table",rows:[["C","C++"],["void f(int *x) { *x = ...; }  (Call by reference করতে পয়েন্টার লাগে)","void f(int &x) { x = ...; }  (রেফারেন্স প্যারামিটার — পয়েন্টার সিনট্যাক্স ছাড়াই মূল ভ্যারিয়েবল বদলানো যায়)"],["ফাংশন ওভারলোডিং সাপোর্ট করে না (একই নামে ভিন্ন প্যারামিটারের একাধিক ফাংশন)","ফাংশন ওভারলোডিং সাপোর্ট করে"],["ডিফল্ট আর্গুমেন্ট সাপোর্ট করে না","ডিফল্ট আর্গুমেন্ট সাপোর্ট করে (যেমন void f(int x = 0))"]]},{type:"h",text:"ফাইল হ্যান্ডলিং"},{type:"table",rows:[["C","C++"],['FILE *fp = fopen("file.txt", "w");','ofstream fp("file.txt");  (লেখার জন্য) / ifstream (পড়ার জন্য)'],['fprintf(fp, "..."), fscanf(fp, "...")','fp << "...";  /  fp >> var;  (স্ট্রিম অপারেটর)'],["fgets(buffer, size, fp)","getline(fp, line)  (std::string এ সরাসরি সম্পূর্ণ লাইন পড়া যায়)"],["fclose(fp)","fp.close();  (আর ডেস্ট্রাক্টর নিজে থেকেই বন্ধ করে দেয় স্কোপ শেষ হলে)"]]},{type:"h",text:"অন্যান্য গুরুত্বপূর্ণ পার্থক্য"},{type:"table",rows:[["C","C++"],["ভ্যারিয়েবলের নাম যেমন max, min, queue, hex ইচ্ছেমতো ব্যবহার করা যায়","সতর্ক থাকতে হয় — std::max, std::min, std::queue, std::hex ইত্যাদি স্ট্যান্ডার্ড লাইব্রেরির নামের সাথে সংঘর্ষ এড়াতে ভিন্ন নাম (যেমন mx, queueArr, hexArr) ব্যবহার করা ভালো অভ্যাস"],["ম্যানুয়ালি সব ডেটা স্ট্রাকচার (stack, queue, linked list) লিখতে হয়","চাইলে <stack>, <queue>, <vector>, <list>, <map> এর ready-made STL কন্টেইনার সরাসরি ব্যবহার করা যায় — তবে এই নোটে এক্সাম প্রস্তুতির জন্য মূল অ্যালগরিদম হাতে-কলমে লেখা রাখা হয়েছে"],["ভ্যারিয়েবল যেকোনো জায়গায় ডিক্লেয়ার করা যেত না (পুরনো C স্ট্যান্ডার্ডে ব্লকের শুরুতে লাগত)","for (int i = 0; ...) এর মতো লুপের ভিতরেই ভ্যারিয়েবল ডিক্লেয়ার করা যায় (আধুনিক C এও এখন চলে, তবে C++ এ এটাই স্বাভাবিক রীতি)"],["কম্পাইল করতে gcc file.c -o file","কম্পাইল করতে g++ file.cpp -o file"]]}]}]},qu={c:rv,cpp:iv,cheat:ov},Qe={c:{key:"c",label:"C",full:"C প্রোগ্রামিং",ext:"c",godbolt:"c"},cpp:{key:"cpp",label:"C++",full:"C++ প্রোগ্রামিং",ext:"cpp",godbolt:"c++"}},Ei={};for(const e of["c","cpp"])Ei[e]=qu[e].flatMap(n=>n.items.map(t=>({...t,sectionId:n.id,sectionNo:n.no,sectionTitle:n.title})));const Sp=e=>qu[e],pl=e=>Ei[e],Tn=(e,n)=>Ei[e].find(t=>t.id===n),kp=(e,n)=>Ei[e].findIndex(t=>t.id===n),lv=e=>qu.cheat[e],wi=e=>e==="c"||e==="cpp",Oc=Ei.c.length;function Ac({lang:e}){const[n]=fl(e),t=Object.keys(n).length,r=Sp(e);return c.jsxs("div",{className:`card lang-card lang-${e}`,children:[c.jsx("div",{className:"lang-badge",children:Qe[e].label}),c.jsx("h2",{children:Qe[e].full}),c.jsxs("p",{className:"muted",children:[r.length,"টি অধ্যায় · ",pl(e).length,"টি প্রোগ্রাম · বাংলা কমেন্ট ও মনে রাখার কৌশল"]}),c.jsx("div",{className:"bar",children:c.jsx("i",{style:{width:`${t/Oc*100}%`}})}),c.jsxs("p",{className:"small muted",children:["প্র্যাক্টিস করেছ: ",t,"/",Oc]}),c.jsxs("div",{className:"row",children:[c.jsx(ve,{className:"btn btn-primary",to:`/${e}`,children:"শুরু করো →"}),c.jsx(ve,{className:"btn",to:`/${e}/read/1-1`,children:"প্রথম প্রোগ্রাম"})]})]})}function av(){return c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"hero",children:[c.jsx("p",{className:"eyebrow",children:"এক্সাম প্রস্তুতি"}),c.jsxs("h1",{children:["কোড পড়ো। ",c.jsx("em",{children:"নিজে লেখো।"}),c.jsx("br",{}),"আউটপুট মেলাও।"]}),c.jsx("p",{className:"lead",children:"C ও C++ — বেসিক থেকে ডেটা স্ট্রাকচার পর্যন্ত ৯০টি করে প্রোগ্রাম। প্রতিটিতে বাংলা কমেন্ট, মনে রাখার কৌশল আর যাচাই করা আউটপুট।"})]}),c.jsxs("section",{className:"grid2",children:[c.jsx(Ac,{lang:"c"}),c.jsx(Ac,{lang:"cpp"})]}),c.jsxs("section",{className:"modes",children:[c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"📖"}),c.jsx("h3",{children:"পড়ার মোড"}),c.jsx("p",{className:"muted",children:"কোড, কৌশল ও আউটপুট একসাথে। C আর C++ পাশাপাশি রেখে তুলনা করো।"})]}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"⌨️"}),c.jsx("h3",{children:"প্র্যাক্টিস মোড"}),c.jsx("p",{className:"muted",children:"শুধু নাম আর নমুনা আউটপুট দেখে নিজে কোড লেখো। চালিয়ে আউটপুট মেলাও — মিললে ✓ চিহ্ন পাবে।"})]}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"🧾"}),c.jsx("h3",{children:"চিটশিট"}),c.jsx("p",{className:"muted",children:"কুইক রিভিশন টেবিল আর C ↔ C++ কনভার্সন নোট — পরীক্ষার আগের শেষ দেখা।"}),c.jsx(ve,{to:"/cheatsheet/c",className:"small",children:"দেখো →"})]})]})]})}function uv(){const{lang:e}=cl(),[n,t]=C.useState(""),[r]=fl(e),i=C.useMemo(()=>wi(e)?Sp(e):[],[e]);if(!wi(e))return c.jsx(vr,{to:"/",replace:!0});const o=pl(e).length,l=Object.keys(r).length,a=n.trim().toLowerCase(),u=i.map(s=>({...s,items:s.items.filter(f=>!a||f.name.toLowerCase().includes(a)||f.no.includes(a)||f.id.includes(a))})).filter(s=>s.items.length);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:Qe[e].label}),c.jsx("h1",{children:Qe[e].full}),c.jsxs("p",{className:"muted",children:["প্র্যাক্টিস সম্পন্ন: ",l,"/",o]})]}),c.jsxs("div",{className:"seg",children:[c.jsx(ve,{className:e==="c"?"on":"",to:"/c",children:"C"}),c.jsx(ve,{className:e==="cpp"?"on":"",to:"/cpp",children:"C++"})]})]}),c.jsx("div",{className:"bar",children:c.jsx("i",{style:{width:`${l/o*100}%`}})}),c.jsx("div",{className:"toolbar",children:c.jsx("input",{className:"input",type:"search",placeholder:"প্রোগ্রাম খোঁজো… (যেমন: prime, stack, ১.৪)",value:n,onChange:s=>t(s.target.value)})}),c.jsx("div",{className:"chips",children:i.map(s=>c.jsxs("a",{className:"chip",href:`#sec-${s.id}`,onClick:f=>{var p;f.preventDefault(),(p=document.getElementById(`sec-${s.id}`))==null||p.scrollIntoView({behavior:"smooth",block:"start"})},children:[s.no,". ",s.title.split("(")[0].trim()]},s.id))}),u.length===0&&c.jsx("p",{className:"muted",children:"কিছু পাওয়া যায়নি।"}),u.map(s=>c.jsxs("section",{id:`sec-${s.id}`,className:"sec",children:[c.jsxs("h2",{children:[c.jsx("span",{className:"sec-no",children:s.no})," ",s.title]}),c.jsx("ul",{className:"plist",children:s.items.map(f=>c.jsxs("li",{className:r[f.id]?"done":"",children:[c.jsxs(ve,{className:"pname",to:`/${e}/read/${f.id}`,children:[c.jsx("span",{className:"pno",children:f.no}),c.jsx("span",{children:f.name}),r[f.id]&&c.jsx("span",{className:"tick",title:"প্র্যাক্টিস সম্পন্ন",children:"✓"})]}),c.jsxs("span",{className:"pact",children:[c.jsx(ve,{className:"btn btn-sm",to:`/${e}/read/${f.id}`,children:"পড়ো"}),c.jsx(ve,{className:"btn btn-sm btn-primary",to:`/${e}/practice/${f.id}`,children:"প্র্যাক্টিস"})]})]},f.id))})]},s.id))]})}const sv=new Set("auto break case const continue default do else enum extern for goto if inline register return sizeof static struct switch typedef union volatile while using namespace class public private protected new delete this template typename try catch throw true false nullptr bool".split(" ")),cv=new Set("int char float double long short unsigned signed void FILE size_t string vector cout cin endl cerr ifstream ofstream fstream queue stack map set pair NULL EOF".split(" ")),Zi=/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(^[ \t]*#[ \t]*\w+(?:[ \t]*<[^>\n]+>|[ \t]*"[^"\n]*")?)|(\b\d+(?:\.\d+)?[fFlLuU]*\b)|([A-Za-z_]\w*)/gm;function dv(e){const n=[];let t=0,r,i=0;for(Zi.lastIndex=0;r=Zi.exec(e);){r.index>t&&n.push(e.slice(t,r.index));const[o,l,a,u,s,f]=r;let p=null;l?p="tk-com":a?p="tk-str":u?p="tk-pre":s?p="tk-num":f&&(sv.has(f)?p="tk-kw":cv.has(f)?p="tk-ty":e[Zi.lastIndex]==="("&&(p="tk-fn")),n.push(p?c.jsx("span",{className:p,children:o},i++):o),t=Zi.lastIndex}return t<e.length&&n.push(e.slice(t)),n}function go({code:e,label:n,lang:t}){const[r,i]=C.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),1400)}catch{}},l=e.split(`
`).length;return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-bar",children:[c.jsx("span",{className:`pill pill-${t||"c"}`,children:n}),c.jsxs("span",{className:"muted small",children:[l," লাইন"]}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:o,children:r?"✓ কপি হয়েছে":"কপি"})]}),c.jsx("pre",{children:c.jsx("code",{children:dv(e)})})]})}function Zr({title:e,text:n,stdin:t}){return c.jsxs("div",{className:"term",children:[c.jsx("div",{className:"term-bar",children:e}),t?c.jsxs("div",{className:"term-in",children:[c.jsx("span",{className:"muted small",children:"ইনপুট:"})," ",c.jsx("code",{children:t.trim().split(`
`).join("  ↵  ")})]}):null,c.jsx("pre",{children:n===""?c.jsx("span",{className:"muted",children:"(কোনো আউটপুট নেই)"}):n})]})}function fv(){const{lang:e,id:n}=cl(),[t,r]=C.useState(!1),[i]=fl(e);if(!wi(e))return c.jsx(vr,{to:"/",replace:!0});const o=Tn(e,n);if(!o)return c.jsx(vr,{to:`/${e}`,replace:!0});const l=pl(e),a=kp(e,n),u=l[a-1],s=l[a+1],f=e==="c"?"cpp":"c",p=Tn(f,n);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"crumbs",children:[c.jsx(ve,{to:`/${e}`,children:Qe[e].label})," ",c.jsx("span",{children:"›"})," ",c.jsxs("span",{children:[o.sectionNo,". ",o.sectionTitle.split("(")[0]]})]}),c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:Qe[e].label}),c.jsxs("h1",{children:[c.jsx("span",{className:"pno big",children:o.no})," ",o.name," ",i[n]&&c.jsx("span",{className:"tick",children:"✓"})]})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:`btn ${t?"btn-on":""}`,onClick:()=>r(!t),children:"C ↔ C++ পাশাপাশি"}),c.jsx(ve,{className:"btn btn-primary",to:`/${e}/practice/${n}`,children:"⌨ প্র্যাক্টিস করো"})]})]}),o.tip&&c.jsxs("div",{className:"tip",children:[c.jsx("b",{children:"মনে রাখার কৌশল"}),c.jsx("p",{children:o.tip})]}),t?c.jsxs("div",{className:"grid2 tight",children:[c.jsxs("div",{children:[c.jsx(go,{code:Tn("c",n).code,label:"C",lang:"c"}),c.jsx(Zr,{title:"C আউটপুট",text:Tn("c",n).output,stdin:Tn("c",n).input})]}),c.jsxs("div",{children:[c.jsx(go,{code:Tn("cpp",n).code,label:"C++",lang:"cpp"}),c.jsx(Zr,{title:"C++ আউটপুট",text:Tn("cpp",n).output,stdin:Tn("cpp",n).input})]})]}):c.jsxs(c.Fragment,{children:[c.jsx(go,{code:o.code,label:Qe[e].label,lang:e}),c.jsx(Zr,{title:"আউটপুট",text:o.output,stdin:o.input}),p&&c.jsxs("p",{className:"small muted",children:["এই প্রোগ্রামটি ",c.jsxs(ve,{to:`/${f}/read/${n}`,children:[Qe[f].label,"-এ দেখো"]})]})]}),o.flags.includes("address")&&c.jsx("p",{className:"small muted",children:"ℹ️ address প্রতিবার আলাদা আসে (0x7ffe… এর মান বদলায়) — মান নয়, ধরনটা দেখো।"}),o.flags.includes("needsFile")&&c.jsx("p",{className:"small muted",children:"ℹ️ এই প্রোগ্রাম চালানোর আগে আগের ফাইল-রাইটিং প্রোগ্রাম (৯.১) একবার চালাতে হবে।"}),c.jsxs("div",{className:"pager",children:[u?c.jsxs(ve,{className:"btn",to:`/${e}/read/${u.id}`,children:["← ",u.no," ",u.name]}):c.jsx("span",{}),s?c.jsxs(ve,{className:"btn",to:`/${e}/read/${s.id}`,children:[s.no," ",s.name," →"]}):c.jsx("span",{})]})]})}function Uc(e,n=!1){let t=(e??"").replace(/\r\n?/g,`
`);return n&&(t=t.replace(/0x[0-9a-fA-F]+/g,"0xADDR")),t.split(`
`).map(r=>r.replace(/[ \t]+$/g,"")).join(`
`).replace(/\n+$/g,"").replace(/^\n+/g,"")}function bc(e,n,t=!1){const r=Uc(e,t).split(`
`),i=Uc(n,t).split(`
`),o=Math.max(r.length,i.length),l=[];let a=!0;for(let u=0;u<o;u++){const s=r[u]===i[u];s||(a=!1),l.push({n:u+1,e:r[u],a:i[u],same:s})}return{ok:a,rows:l}}const jp="https://godbolt.org/api",pv={c:"cg132","c++":"g132"},eo={};async function mv(e){if(eo[e])return eo[e];try{const r=(await(await fetch(`${jp}/compilers/${e}?fields=id,name,semver,instructionSet`,{headers:{Accept:"application/json"}})).json()).filter(i=>/^x86-64 gcc \d+(\.\d+)*$/.test(i.name)&&(!i.instructionSet||i.instructionSet==="amd64")).sort((i,o)=>parseFloat(o.name.split(" ").pop())-parseFloat(i.name.split(" ").pop()));if(r.length)return eo[e]=r[0].id}catch{}return eo[e]=pv[e]}const no=e=>(e||[]).map(n=>n.text).join(`
`);async function hv({lang:e,source:n,stdin:t}){const r=e==="c"?"c":"c++",i=await mv(r),o={source:n,lang:r,options:{userArguments:e==="c"?"-lm":"",executeParameters:{args:[],stdin:t||""},compilerOptions:{executorRequest:!0},filters:{execute:!0},tools:[],libraries:[]},allowStoreCodeDebug:!1},l=new AbortController,a=setTimeout(()=>l.abort(),25e3);try{const u=await fetch(`${jp}/compiler/${i}/compile`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o),signal:l.signal});if(!u.ok)throw new Error(`সার্ভার সাড়া দিয়েছে: ${u.status}`);const s=await u.json(),f=s.buildResult||{};return f.code&&f.code!==0?{stage:"compile",error:no(f.stderr)||no(s.stderr)||"Compile error",stdout:""}:{stage:"run",code:s.code,stdout:no(s.stdout),stderr:no(s.stderr)}}finally{clearTimeout(a)}}const gv={c:`#include <stdio.h>

int main() {
    
    return 0;
}
`,cpp:`#include <iostream>
using namespace std;

int main() {
    
    return 0;
}
`};function Bc({result:e}){return c.jsxs("div",{className:"diff",children:[c.jsxs("div",{className:"diff-h",children:[c.jsx("span",{children:"#"}),c.jsx("span",{children:"প্রত্যাশিত"}),c.jsx("span",{children:"তোমার"})]}),e.rows.map(n=>c.jsxs("div",{className:`diff-r ${n.same?"":"bad"}`,children:[c.jsx("span",{children:n.n}),c.jsx("pre",{children:n.e??c.jsx("i",{className:"muted",children:"—"})}),c.jsx("pre",{children:n.a??c.jsx("i",{className:"muted",children:"—"})})]},n.n))]})}function vv(){const{lang:e,id:n}=cl();if(!wi(e))return c.jsx(vr,{to:"/",replace:!0});const t=Tn(e,n);return t?c.jsx(yv,{lang:e,it:t},`${e}-${n}`):c.jsx(vr,{to:`/${e}`,replace:!0})}function yv({lang:e,it:n}){const t=n.id,r=`cn:draft:${e}:${t}`,[i,o]=C.useState(()=>Jr(r,"")),[l,a]=C.useState(n.input),[u,s]=C.useState(!1),[f,p]=C.useState(!1),[m,N]=C.useState(!1),[x,S]=C.useState(null),[_,g]=C.useState(""),[d,v]=C.useState(null),[j,R]=fl(e),z=C.useRef(null),y=n.flags.includes("address");C.useEffect(()=>{const X=setTimeout(()=>Qu(r,i),300);return()=>clearTimeout(X)},[i,r]);const E=pl(e),B=kp(e,t),T=E[B-1],K=E[B+1],ie=X=>{const Ee=X.target;if(X.key==="Tab"){X.preventDefault();const L=Ee.selectionStart,$=Ee.selectionEnd,V=i.slice(0,L)+"    "+i.slice($);o(V),requestAnimationFrame(()=>Ee.selectionStart=Ee.selectionEnd=L+4)}else if(X.key==="Enter"){const L=Ee.selectionStart,$=i.lastIndexOf(`
`,L-1)+1,V=i.slice($,L);let J=(V.match(/^[ \t]*/)||[""])[0];/\{\s*$/.test(V)&&(J+="    "),X.preventDefault();const ne=i.slice(0,L)+`
`+J+i.slice(Ee.selectionEnd);o(ne),requestAnimationFrame(()=>Ee.selectionStart=Ee.selectionEnd=L+1+J.length)}},ye=X=>{if(!(l.trim()===n.input.trim()))return{verdict:null,note:"ইনপুট বদলেছ — তাই প্রত্যাশিত আউটপুটের সাথে মেলানো হয়নি।"};const L=bc(n.output,X,y);return L.ok&&R(t,!0),{verdict:L}},ke=async()=>{if(!i.trim())return S({kind:"err",error:"আগে কিছু কোড লেখো 🙂"});N(!0),S(null);try{const X=await hv({lang:e,source:i,stdin:l});X.stage==="compile"?S({kind:"compile",error:X.error}):S({kind:"run",stdout:X.stdout,stderr:X.stderr,exit:X.code,...ye(X.stdout)})}catch{S({kind:"net",error:"অনলাইন কম্পাইলারে পৌঁছানো যায়নি (ইন্টারনেট/ব্লক হতে পারে)। নিচের “নিজের কম্পাইলারে চালিয়েছ?” অংশ ব্যবহার করে আউটপুট পেস্ট করে মেলাও।"})}finally{N(!1)}},Ye=()=>{const X=bc(n.output,_,y);v(X),X.ok&&R(t,!0)};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"crumbs",children:[c.jsx(ve,{to:`/${e}`,children:Qe[e].label})," ",c.jsx("span",{children:"›"})," ",c.jsx("span",{children:"প্র্যাক্টিস"})]}),c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:Qe[e].label}),c.jsxs("h1",{children:[c.jsx("span",{className:"pno big",children:n.no})," ",n.name," ",j[t]&&c.jsx("span",{className:"tick",children:"✓"})]})]}),c.jsx(ve,{className:"btn",to:`/${e}/read/${t}`,children:"📖 পড়ার মোডে"})]}),c.jsxs("div",{className:"prac",children:[c.jsxs("div",{className:"prac-l",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"কাজ"}),c.jsxs("p",{children:[c.jsx("b",{children:n.name})," প্রোগ্রামটি ",Qe[e].label,"-এ লেখো, যেন নিচের ইনপুটে ঠিক নিচের আউটপুট আসে।"]}),c.jsx(Zr,{title:"প্রত্যাশিত আউটপুট",text:n.output,stdin:n.input}),y&&c.jsx("p",{className:"small muted",children:"address-এর মান প্রতিবার আলাদা — মেলানোর সময় 0x… অংশ ধরা হয় না।"}),n.flags.includes("needsFile")&&c.jsx("p",{className:"small muted",children:"এই প্রোগ্রামে আগে তৈরি করা ফাইল লাগে (৯.১) — অনলাইন চালানোয় নাও মিলতে পারে; নিজের কম্পাইলারে চালিয়ে পেস্ট করো।"})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"row between",children:[c.jsx("h3",{children:"হিন্ট"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>s(!u),children:u?"লুকাও":"দেখো"})]}),u?c.jsx("p",{children:n.tip||"এই প্রোগ্রামে আলাদা হিন্ট নেই।"}):c.jsx("p",{className:"muted small",children:"আটকে গেলে খুলে দেখো।"})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"row between",children:[c.jsx("h3",{children:"উত্তর কোড"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>p(!f),children:f?"লুকাও":"দেখো"})]}),!f&&c.jsx("p",{className:"muted small",children:"আগে নিজে চেষ্টা করো, তারপর মিলিয়ে নাও।"})]})]}),c.jsxs("div",{className:"prac-r",children:[c.jsxs("div",{className:"editor",children:[c.jsxs("div",{className:"code-bar",children:[c.jsxs("span",{className:`pill pill-${e}`,children:["main.",Qe[e].ext]}),c.jsx("span",{className:"grow"}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>o(gv[e]),children:"স্কেলেটন"}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>o(""),children:"মুছো"})]}),c.jsx("textarea",{ref:z,className:"ta",spellCheck:!1,autoCapitalize:"off",autoCorrect:"off",value:i,onChange:X=>o(X.target.value),onKeyDown:ie,placeholder:`// এখানে ${Qe[e].label} কোড লেখো…`,rows:16})]}),c.jsxs("div",{className:"stdin",children:[c.jsx("label",{className:"small muted",htmlFor:"stdin",children:"ইনপুট (stdin)"}),c.jsx("textarea",{id:"stdin",className:"ta ta-sm",spellCheck:!1,value:l,onChange:X=>a(X.target.value),rows:2})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn btn-primary",disabled:m,onClick:ke,children:m?"চলছে…":"▶ চালাও ও মেলাও"}),j[t]?c.jsx("button",{className:"btn",onClick:()=>R(t,!1),children:"✓ সম্পন্ন — চিহ্ন তুলে দাও"}):c.jsx("button",{className:"btn",onClick:()=>R(t,!0),title:"নিজে মিলিয়ে দেখলে হাতে চিহ্ন দাও",children:"নিজে মিলিয়েছি ✓"})]}),x&&c.jsxs("div",{className:"result",children:[x.kind==="run"&&x.verdict&&c.jsx("div",{className:`verdict ${x.verdict.ok?"ok":"no"}`,children:x.verdict.ok?"✅ আউটপুট মিলেছে! দারুণ।":"❌ আউটপুট মেলেনি — পার্থক্যগুলো দেখো"}),x.kind==="run"&&!x.verdict&&c.jsx("div",{className:"verdict info",children:x.note}),x.kind==="compile"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"verdict no",children:"⚠️ কম্পাইল এরর"}),c.jsx("pre",{className:"errbox",children:x.error})]}),(x.kind==="net"||x.kind==="err")&&c.jsx("div",{className:"verdict info",children:x.error}),x.kind==="run"&&c.jsxs(c.Fragment,{children:[x.verdict&&!x.verdict.ok&&c.jsx(Bc,{result:x.verdict}),c.jsx(Zr,{title:`তোমার আউটপুট${x.exit?` (exit code ${x.exit})`:""}`,text:x.stdout}),x.stderr?c.jsx("pre",{className:"errbox",children:x.stderr}):null]})]}),c.jsxs("details",{className:"card paste",children:[c.jsx("summary",{children:"নিজের কম্পাইলারে চালিয়েছ? আউটপুট পেস্ট করে মেলাও"}),c.jsx("p",{className:"small muted",children:"অনলাইন কম্পাইলার না চললে (বা ফাইল/অ্যাড্রেসের প্রোগ্রামে) নিজের পিসিতে চালিয়ে আউটপুট এখানে পেস্ট করো।"}),c.jsx("textarea",{className:"ta ta-sm",rows:4,value:_,onChange:X=>g(X.target.value),placeholder:"তোমার প্রোগ্রামের আউটপুট…"}),c.jsx("div",{className:"row",children:c.jsx("button",{className:"btn btn-primary btn-sm",onClick:Ye,children:"মেলাও"})}),d&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`verdict ${d.ok?"ok":"no"}`,children:d.ok?"✅ মিলেছে!":"❌ মেলেনি"}),!d.ok&&c.jsx(Bc,{result:d})]})]})]})]}),f&&c.jsx("div",{className:"solution",children:c.jsx(go,{code:n.code,label:`উত্তর (${Qe[e].label})`,lang:e})}),c.jsxs("div",{className:"pager",children:[T?c.jsxs(ve,{className:"btn",to:`/${e}/practice/${T.id}`,children:["← ",T.no," ",T.name]}):c.jsx("span",{}),K?c.jsxs(ve,{className:"btn",to:`/${e}/practice/${K.id}`,children:[K.no," ",K.name," →"]}):c.jsx("span",{})]})]})}function wv({b:e}){if(e.type==="h")return c.jsx("h3",{className:"ch",children:e.text});if(e.type==="p")return c.jsx("p",{children:e.text});const[n,...t]=e.rows;return c.jsx("div",{className:"tbl-wrap",children:c.jsxs("table",{className:"tbl",children:[c.jsx("thead",{children:c.jsx("tr",{children:n.map((r,i)=>c.jsx("th",{children:r},i))})}),c.jsx("tbody",{children:t.map((r,i)=>c.jsx("tr",{children:r.map((o,l)=>c.jsx("td",{children:o},l))},i))})]})})}function xv(){const{lang:e}=cl();return wi(e)?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"চিটশিট"}),c.jsx("p",{className:"muted",children:"পরীক্ষার আগের দ্রুত রিভিশন"})]}),c.jsxs("div",{className:"seg",children:[c.jsx(ve,{className:e==="c"?"on":"",to:"/cheatsheet/c",children:"C রিভিশন"}),c.jsx(ve,{className:e==="cpp"?"on":"",to:"/cheatsheet/cpp",children:"C → C++"})]})]}),lv(e).map((n,t)=>c.jsxs("section",{className:"sec",children:[c.jsx("h2",{children:n.title}),n.blocks.map((r,i)=>c.jsx(wv,{b:r},i))]},t))]}):c.jsx(vr,{to:"/cheatsheet/c",replace:!0})}const Nv=["c","cpp","cheatsheet"],Kl=window.location.pathname.split("/").filter(Boolean)[0],Sv=Kl&&!Nv.includes(Kl)?`/${Kl}`:"",$c=()=>c.jsxs("div",{className:"card",style:{margin:"40px auto",maxWidth:480},children:[c.jsx("h3",{children:"পেজটি পাওয়া যায়নি"}),c.jsx("p",{className:"muted",children:"লিংকটা ঠিক আছে কিনা দেখো।"}),c.jsx(ve,{className:"btn btn-primary",to:"/",children:"হোমে যাও"})]}),kv=Ag([{path:"/",element:c.jsx(tv,{}),errorElement:c.jsx($c,{}),children:[{path:"/",element:c.jsx(av,{})},{path:"/:lang",element:c.jsx(uv,{})},{path:"/:lang/read/:id",element:c.jsx(fv,{})},{path:"/:lang/practice/:id",element:c.jsx(vv,{})},{path:"/cheatsheet/:lang",element:c.jsx(xv,{})},{path:"*",element:c.jsx($c,{})}]}],{basename:Sv});ip(document.getElementById("root")).render(c.jsx(Qo.StrictMode,{children:c.jsx(Qg,{router:kv})}));
