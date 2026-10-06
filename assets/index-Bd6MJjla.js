function Nd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qa={exports:{}},zi={},ba={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hr=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Rd=Symbol.for("react.memo"),Td=Symbol.for("react.lazy"),ju=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Ga={};function kt(e,n,t){this.props=e,this.context=n,this.refs=Ga,this.updater=t||Xa}kt.prototype.isReactComponent={};kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=kt.prototype;function Co(e,n,t){this.props=e,this.context=n,this.refs=Ga,this.updater=t||Xa}var Eo=Co.prototype=new Ya;Eo.constructor=Co;Ka(Eo,kt.prototype);Eo.isPureReactComponent=!0;var Cu=Array.isArray,Za=Object.prototype.hasOwnProperty,Po={current:null},Ja={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Za.call(n,r)&&!Ja.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var a=Array(u),s=0;s<u;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:hr,type:e,key:l,ref:o,props:i,_owner:Po.current}}function Dd(e,n){return{$$typeof:hr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Lo(e){return typeof e=="object"&&e!==null&&e.$$typeof===hr}function Id(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Eu=/\/+/g;function el(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):n.toString(36)}function qr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case hr:case Sd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+el(o,0):r,Cu(i)?(t="",e!=null&&(t=e.replace(Eu,"$&/")+"/"),qr(i,n,t,"",function(s){return s})):i!=null&&(Lo(i)&&(i=Dd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Cu(e))for(var u=0;u<e.length;u++){l=e[u];var a=r+el(l,u);o+=qr(l,n,t,a,i)}else if(a=Fd(e),typeof a=="function")for(e=a.call(e),u=0;!(l=e.next()).done;)l=l.value,a=r+el(l,u++),o+=qr(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function jr(e,n,t){if(e==null)return e;var r=[],i=0;return qr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Od(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Qr={transition:null},Md={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Po};function ns(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:jr,forEach:function(e,n,t){jr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return jr(e,function(){n++}),n},toArray:function(e){return jr(e,function(n){return n})||[]},only:function(e){if(!Lo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=kt;F.Fragment=jd;F.Profiler=Ed;F.PureComponent=Co;F.StrictMode=Cd;F.Suspense=zd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;F.act=ns;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ka({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Po.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)Za.call(n,a)&&!Ja.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var s=0;s<a;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:hr,type:e.type,key:i,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pd,_context:e},e.Consumer=e};F.createElement=es;F.createFactory=function(e){var n=es.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:_d,render:e}};F.isValidElement=Lo;F.lazy=function(e){return{$$typeof:Td,_payload:{_status:-1,_result:e},_init:Od}};F.memo=function(e,n){return{$$typeof:Rd,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=n}};F.unstable_act=ns;F.useCallback=function(e,n){return fe.current.useCallback(e,n)};F.useContext=function(e){return fe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};F.useEffect=function(e,n){return fe.current.useEffect(e,n)};F.useId=function(){return fe.current.useId()};F.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return fe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};F.useRef=function(e){return fe.current.useRef(e)};F.useState=function(e){return fe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return fe.current.useTransition()};F.version="18.3.1";ba.exports=F;var N=ba.exports;const ts=kd(N),Ad=Nd({__proto__:null,default:ts},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=N,$d=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Vd=Object.prototype.hasOwnProperty,Wd=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Vd.call(n,r)&&!Hd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:$d,type:e,key:l,ref:o,props:i,_owner:Wd.current}}zi.Fragment=Bd;zi.jsx=rs;zi.jsxs=rs;Qa.exports=zi;var c=Qa.exports,is={exports:{}},Ce={},ls={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,z){var T=C.length;C.push(z);e:for(;0<T;){var U=T-1>>>1,G=C[U];if(0<i(G,z))C[U]=z,C[T]=G,T=U;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],T=C.pop();if(T!==z){C[0]=T;e:for(var U=0,G=C.length,kr=G>>>1;U<kr;){var zn=2*(U+1)-1,Ji=C[zn],Rn=zn+1,Sr=C[Rn];if(0>i(Ji,T))Rn<G&&0>i(Sr,Ji)?(C[U]=Sr,C[Rn]=T,U=Rn):(C[U]=Ji,C[zn]=T,U=zn);else if(Rn<G&&0>i(Sr,T))C[U]=Sr,C[Rn]=T,U=Rn;else break e}}return z}function i(C,z){var T=C.sortIndex-z.sortIndex;return T!==0?T:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],s=[],m=1,f=null,g=3,w=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var z=t(s);z!==null;){if(z.callback===null)r(s);else if(z.startTime<=C)r(s),z.sortIndex=z.expirationTime,n(a,z);else break;z=t(s)}}function y(C){if(x=!1,h(C),!v)if(t(a)!==null)v=!0,I(S);else{var z=t(s);z!==null&&we(y,z.startTime-C)}}function S(C,z){v=!1,x&&(x=!1,p(_),_=-1),w=!0;var T=g;try{for(h(z),f=t(a);f!==null&&(!(f.expirationTime>z)||C&&!ee());){var U=f.callback;if(typeof U=="function"){f.callback=null,g=f.priorityLevel;var G=U(f.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?f.callback=G:f===t(a)&&r(a),h(z)}else r(a);f=t(a)}if(f!==null)var kr=!0;else{var zn=t(s);zn!==null&&we(y,zn.startTime-z),kr=!1}return kr}finally{f=null,g=T,w=!1}}var L=!1,P=null,_=-1,M=5,R=-1;function ee(){return!(e.unstable_now()-R<M)}function Ln(){if(P!==null){var C=e.unstable_now();R=C;var z=!0;try{z=P(!0,C)}finally{z?_n():(L=!1,P=null)}}else L=!1}var _n;if(typeof d=="function")_n=function(){d(Ln)};else if(typeof MessageChannel<"u"){var Nr=new MessageChannel,Zi=Nr.port2;Nr.port1.onmessage=Ln,_n=function(){Zi.postMessage(null)}}else _n=function(){j(Ln,0)};function I(C){P=C,L||(L=!0,_n())}function we(C,z){_=j(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,I(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var T=g;g=z;try{return C()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=g;g=C;try{return z()}finally{g=T}},e.unstable_scheduleCallback=function(C,z,T){var U=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?U+T:U):T=U,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,C={id:m++,callback:z,priorityLevel:C,startTime:T,expirationTime:G,sortIndex:-1},T>U?(C.sortIndex=T,n(s,C),t(a)===null&&C===t(s)&&(x?(p(_),_=-1):x=!0,we(y,T-U))):(C.sortIndex=G,n(a,C),v||w||(v=!0,I(S))),C},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(C){var z=g;return function(){var T=g;g=z;try{return C.apply(this,arguments)}finally{g=T}}}})(os);ls.exports=os;var qd=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=N,je=qd;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,Kt={};function qn(e,n){mt(e,n),mt(e+"Capture",n)}function mt(e,n){for(Kt[e]=n,e=0;e<n.length;e++)us.add(n[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},Lu={};function Xd(e){return Ll.call(Lu,e)?!0:Ll.call(Pu,e)?!1:bd.test(e)?Lu[e]=!0:(Pu[e]=!0,!1)}function Kd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gd(e,n,t,r){if(n===null||typeof n>"u"||Kd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var _o=/[\-:]([a-z])/g;function zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(_o,zo);le[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(_o,zo);le[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(_o,zo);le[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ro(e,n,t,r){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Gd(n,t,i,r)&&(t=null),r||i===null?Xd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var tn=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),as=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Fo=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Do=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),_u=Symbol.iterator;function Et(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,nl;function Dt(e){if(nl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);nl=n&&n[1]||""}return`
`+nl+e}var tl=!1;function rl(e,n){if(!e||tl)return"";tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{tl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Dt(e):""}function Yd(e){switch(e.tag){case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Gn:return"Portal";case _l:return"Profiler";case To:return"StrictMode";case zl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case as:return(e._context.displayName||"Context")+".Provider";case Fo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Do:return n=e.displayName||null,n!==null?n:Tl(e.type)||"Memo";case un:n=e._payload,e=e._init;try{return Tl(e(n))}catch{}}return null}function Zd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(n);case 8:return n===To?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jd(e){var n=ds(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Er(e){e._valueTracker||(e._valueTracker=Jd(e))}function fs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function zu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Sn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ps(e,n){n=n.checked,n!=null&&Ro(e,"checked",n,!1)}function Dl(e,n){ps(e,n);var t=Sn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Il(e,n.type,t):n.hasOwnProperty("defaultValue")&&Il(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ru(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Il(e,n,t){(n!=="number"||ii(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var It=Array.isArray;function at(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ol(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(It(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Sn(t)}}function ms(e,n){var t=Sn(n.value),r=Sn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Fu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Gt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ef=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(e){ef.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),At[n]=At[e]})});function vs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||At.hasOwnProperty(e)&&At[e]?(""+n).trim():n+"px"}function ys(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=vs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var nf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,n){if(n){if(nf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Ul(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,st=null,ct=null;function Du(e){if(e=yr(e)){if(typeof Bl!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ii(n),Bl(e.stateNode,e.type,n))}}function xs(e){st?ct?ct.push(e):ct=[e]:st=e}function ws(){if(st){var e=st,n=ct;if(ct=st=null,Du(e),n)for(e=0;e<n.length;e++)Du(n[e])}}function Ns(e,n){return e(n)}function ks(){}var il=!1;function Ss(e,n,t){if(il)return e(n,t);il=!0;try{return Ns(e,n,t)}finally{il=!1,(st!==null||ct!==null)&&(ks(),ws())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ii(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Vl=!1;if(Ze)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{Vl=!1}function tf(e,n,t,r,i,l,o,u,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(m){this.onError(m)}}var Ut=!1,li=null,oi=!1,Wl=null,rf={onError:function(e){Ut=!0,li=e}};function lf(e,n,t,r,i,l,o,u,a){Ut=!1,li=null,tf.apply(rf,arguments)}function of(e,n,t,r,i,l,o,u,a){if(lf.apply(this,arguments),Ut){if(Ut){var s=li;Ut=!1,li=null}else throw Error(k(198));oi||(oi=!0,Wl=s)}}function Qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function js(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Iu(e){if(Qn(e)!==e)throw Error(k(188))}function uf(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Iu(i),e;if(l===r)return Iu(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Cs(e){return e=uf(e),e!==null?Es(e):null}function Es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Es(e);if(n!==null)return n;e=e.sibling}return null}var Ps=je.unstable_scheduleCallback,Ou=je.unstable_cancelCallback,af=je.unstable_shouldYield,sf=je.unstable_requestPaint,X=je.unstable_now,cf=je.unstable_getCurrentPriorityLevel,Oo=je.unstable_ImmediatePriority,Ls=je.unstable_UserBlockingPriority,ui=je.unstable_NormalPriority,df=je.unstable_LowPriority,_s=je.unstable_IdlePriority,Ri=null,We=null;function ff(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:hf,pf=Math.log,mf=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(pf(e)/mf|0)|0}var Lr=64,_r=4194304;function Ot(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=Ot(u):(l&=o,l!==0&&(r=Ot(l)))}else o=t&~i,o!==0?r=Ot(o):l!==0&&(r=Ot(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),i=1<<t,r|=e[t],n&=~i;return r}function gf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Me(l),u=1<<o,a=i[o];a===-1?(!(u&t)||u&r)&&(i[o]=gf(u,n)):a<=n&&(e.expiredLanes|=u),l&=~u}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function ll(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function gr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function yf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Me(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Mo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var O=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ts,Ao,Fs,Ds,Is,ql=!1,zr=[],mn=null,hn=null,gn=null,Zt=new Map,Jt=new Map,sn=[],xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mu(e,n){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(n.pointerId)}}function Lt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=yr(n),n!==null&&Ao(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function wf(e,n,t,r,i){switch(n){case"focusin":return mn=Lt(mn,e,n,t,r,i),!0;case"dragenter":return hn=Lt(hn,e,n,t,r,i),!0;case"mouseover":return gn=Lt(gn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Zt.set(l,Lt(Zt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Jt.set(l,Lt(Jt.get(l)||null,e,n,t,r,i)),!0}return!1}function Os(e){var n=Dn(e.target);if(n!==null){var t=Qn(n);if(t!==null){if(n=t.tag,n===13){if(n=js(t),n!==null){e.blockedOn=n,Is(e.priority,function(){Fs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ql(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$l=r,t.target.dispatchEvent(r),$l=null}else return n=yr(t),n!==null&&Ao(n),e.blockedOn=t,!1;n.shift()}return!0}function Au(e,n,t){br(e)&&t.delete(n)}function Nf(){ql=!1,mn!==null&&br(mn)&&(mn=null),hn!==null&&br(hn)&&(hn=null),gn!==null&&br(gn)&&(gn=null),Zt.forEach(Au),Jt.forEach(Au)}function _t(e,n){e.blockedOn===n&&(e.blockedOn=null,ql||(ql=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Nf)))}function er(e){function n(i){return _t(i,e)}if(0<zr.length){_t(zr[0],e);for(var t=1;t<zr.length;t++){var r=zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&_t(mn,e),hn!==null&&_t(hn,e),gn!==null&&_t(gn,e),Zt.forEach(n),Jt.forEach(n),t=0;t<sn.length;t++)r=sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(t=sn[0],t.blockedOn===null);)Os(t),t.blockedOn===null&&sn.shift()}var dt=tn.ReactCurrentBatchConfig,si=!0;function kf(e,n,t,r){var i=O,l=dt.transition;dt.transition=null;try{O=1,Uo(e,n,t,r)}finally{O=i,dt.transition=l}}function Sf(e,n,t,r){var i=O,l=dt.transition;dt.transition=null;try{O=4,Uo(e,n,t,r)}finally{O=i,dt.transition=l}}function Uo(e,n,t,r){if(si){var i=Ql(e,n,t,r);if(i===null)hl(e,n,r,ci,t),Mu(e,r);else if(wf(i,e,n,t,r))r.stopPropagation();else if(Mu(e,r),n&4&&-1<xf.indexOf(e)){for(;i!==null;){var l=yr(i);if(l!==null&&Ts(l),l=Ql(e,n,t,r),l===null&&hl(e,n,r,ci,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else hl(e,n,r,null,t)}}var ci=null;function Ql(e,n,t,r){if(ci=null,e=Io(r),e=Dn(e),e!==null)if(n=Qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=js(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ci=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cf()){case Oo:return 1;case Ls:return 4;case ui:case df:return 16;case _s:return 536870912;default:return 16}default:return 16}}var dn=null,$o=null,Xr=null;function As(){if(Xr)return Xr;var e,n=$o,t=n.length,r,i="value"in dn?dn.value:dn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Xr=i.slice(e,1<r?1-r:void 0)}function Kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function Uu(){return!1}function Ee(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Rr:Uu,this.isPropagationStopped=Uu,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),n}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Ee(St),vr=Q({},St,{view:0,detail:0}),jf=Ee(vr),ol,ul,zt,Ti=Q({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(ol=e.screenX-zt.screenX,ul=e.screenY-zt.screenY):ul=ol=0,zt=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),$u=Ee(Ti),Cf=Q({},Ti,{dataTransfer:0}),Ef=Ee(Cf),Pf=Q({},vr,{relatedTarget:0}),al=Ee(Pf),Lf=Q({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=Ee(Lf),zf=Q({},St,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=Ee(zf),Tf=Q({},St,{data:0}),Bu=Ee(Tf),Ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},If={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Of(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=If[e])?!!n[e]:!1}function Vo(){return Of}var Mf=Q({},vr,{key:function(e){if(e.key){var n=Ff[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=Ee(Mf),Uf=Q({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=Ee(Uf),$f=Q({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),Bf=Ee($f),Vf=Q({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wf=Ee(Vf),Hf=Q({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=Ee(Hf),Qf=[9,13,27,32],Wo=Ze&&"CompositionEvent"in window,$t=null;Ze&&"documentMode"in document&&($t=document.documentMode);var bf=Ze&&"TextEvent"in window&&!$t,Us=Ze&&(!Wo||$t&&8<$t&&11>=$t),Wu=" ",Hu=!1;function $s(e,n){switch(e){case"keyup":return Qf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Xf(e,n){switch(e){case"compositionend":return Bs(n);case"keypress":return n.which!==32?null:(Hu=!0,Wu);case"textInput":return e=n.data,e===Wu&&Hu?null:e;default:return null}}function Kf(e,n){if(Zn)return e==="compositionend"||!Wo&&$s(e,n)?(e=As(),Xr=$o=dn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gf[e.type]:n==="textarea"}function Vs(e,n,t,r){xs(r),n=di(n,"onChange"),0<n.length&&(t=new Bo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Bt=null,nr=null;function Yf(e){Js(e,0)}function Fi(e){var n=nt(e);if(fs(n))return e}function Zf(e,n){if(e==="change")return n}var Ws=!1;if(Ze){var sl;if(Ze){var cl="oninput"in document;if(!cl){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),cl=typeof Qu.oninput=="function"}sl=cl}else sl=!1;Ws=sl&&(!document.documentMode||9<document.documentMode)}function bu(){Bt&&(Bt.detachEvent("onpropertychange",Hs),nr=Bt=null)}function Hs(e){if(e.propertyName==="value"&&Fi(nr)){var n=[];Vs(n,nr,e,Io(e)),Ss(Yf,n)}}function Jf(e,n,t){e==="focusin"?(bu(),Bt=n,nr=t,Bt.attachEvent("onpropertychange",Hs)):e==="focusout"&&bu()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(nr)}function np(e,n){if(e==="click")return Fi(n)}function tp(e,n){if(e==="input"||e==="change")return Fi(n)}function rp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:rp;function tr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ll.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,n){var t=Xu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xu(t)}}function qs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qs(){for(var e=window,n=ii();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ii(e.document)}return n}function Ho(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ip(e){var n=Qs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(r!==null&&Ho(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ku(t,l);var o=Ku(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=Ze&&"documentMode"in document&&11>=document.documentMode,Jn=null,bl=null,Vt=null,Xl=!1;function Gu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xl||Jn==null||Jn!==ii(r)||(r=Jn,"selectionStart"in r&&Ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vt&&tr(Vt,r)||(Vt=r,r=di(bl,"onSelect"),0<r.length&&(n=new Bo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Jn)))}function Tr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var et={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},dl={},bs={};Ze&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete et.animationend.animation,delete et.animationiteration.animation,delete et.animationstart.animation),"TransitionEvent"in window||delete et.transitionend.transition);function Di(e){if(dl[e])return dl[e];if(!et[e])return e;var n=et[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bs)return dl[e]=n[t];return e}var Xs=Di("animationend"),Ks=Di("animationiteration"),Gs=Di("animationstart"),Ys=Di("transitionend"),Zs=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){Zs.set(e,n),qn(n,[e])}for(var fl=0;fl<Yu.length;fl++){var pl=Yu[fl],op=pl.toLowerCase(),up=pl[0].toUpperCase()+pl.slice(1);Cn(op,"on"+up)}Cn(Xs,"onAnimationEnd");Cn(Ks,"onAnimationIteration");Cn(Gs,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Ys,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mt));function Zu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,of(r,n,void 0,e),e.currentTarget=null}function Js(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,s=u.currentTarget;if(u=u.listener,a!==l&&i.isPropagationStopped())break e;Zu(i,u,s),l=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,s=u.currentTarget,u=u.listener,a!==l&&i.isPropagationStopped())break e;Zu(i,u,s),l=a}}}if(oi)throw e=Wl,oi=!1,Wl=null,e}function $(e,n){var t=n[Jl];t===void 0&&(t=n[Jl]=new Set);var r=e+"__bubble";t.has(r)||(ec(n,e,2,!1),t.add(r))}function ml(e,n,t){var r=0;n&&(r|=4),ec(t,e,r,n)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Fr]){e[Fr]=!0,us.forEach(function(t){t!=="selectionchange"&&(ap.has(t)||ml(t,!1,e),ml(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fr]||(n[Fr]=!0,ml("selectionchange",!1,n))}}function ec(e,n,t,r){switch(Ms(n)){case 1:var i=kf;break;case 4:i=Sf;break;default:i=Uo}t=i.bind(null,n,t,e),i=void 0,!Vl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function hl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Dn(u),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Ss(function(){var s=l,m=Io(t),f=[];e:{var g=Zs.get(e);if(g!==void 0){var w=Bo,v=e;switch(e){case"keypress":if(Kr(t)===0)break e;case"keydown":case"keyup":w=Af;break;case"focusin":v="focus",w=al;break;case"focusout":v="blur",w=al;break;case"beforeblur":case"afterblur":w=al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Bf;break;case Xs:case Ks:case Gs:w=_f;break;case Ys:w=Wf;break;case"scroll":w=jf;break;case"wheel":w=qf;break;case"copy":case"cut":case"paste":w=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Vu}var x=(n&4)!==0,j=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=s,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=Yt(d,p),y!=null&&x.push(ir(d,y,h)))),j)break;d=d.return}0<x.length&&(g=new w(g,v,null,t,m),f.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==$l&&(v=t.relatedTarget||t.fromElement)&&(Dn(v)||v[Je]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=t.relatedTarget||t.toElement,w=s,v=v?Dn(v):null,v!==null&&(j=Qn(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=s),w!==v)){if(x=$u,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Vu,y="onPointerLeave",p="onPointerEnter",d="pointer"),j=w==null?g:nt(w),h=v==null?g:nt(v),g=new x(y,d+"leave",w,t,m),g.target=j,g.relatedTarget=h,y=null,Dn(m)===s&&(x=new x(p,d+"enter",v,t,m),x.target=h,x.relatedTarget=j,y=x),j=y,w&&v)n:{for(x=w,p=v,d=0,h=x;h;h=Kn(h))d++;for(h=0,y=p;y;y=Kn(y))h++;for(;0<d-h;)x=Kn(x),d--;for(;0<h-d;)p=Kn(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break n;x=Kn(x),p=Kn(p)}x=null}else x=null;w!==null&&Ju(f,g,w,x,!1),v!==null&&j!==null&&Ju(f,j,v,x,!0)}}e:{if(g=s?nt(s):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=Zf;else if(qu(g))if(Ws)S=tp;else{S=ep;var L=Jf}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=np);if(S&&(S=S(e,s))){Vs(f,S,t,m);break e}L&&L(e,g,s),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Il(g,"number",g.value)}switch(L=s?nt(s):window,e){case"focusin":(qu(L)||L.contentEditable==="true")&&(Jn=L,bl=s,Vt=null);break;case"focusout":Vt=bl=Jn=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,Gu(f,t,m);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":Gu(f,t,m)}var P;if(Wo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zn?$s(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Us&&t.locale!=="ko"&&(Zn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zn&&(P=As()):(dn=m,$o="value"in dn?dn.value:dn.textContent,Zn=!0)),L=di(s,_),0<L.length&&(_=new Bu(_,e,null,t,m),f.push({event:_,listeners:L}),P?_.data=P:(P=Bs(t),P!==null&&(_.data=P)))),(P=bf?Xf(e,t):Kf(e,t))&&(s=di(s,"onBeforeInput"),0<s.length&&(m=new Bu("onBeforeInput","beforeinput",null,t,m),f.push({event:m,listeners:s}),m.data=P))}Js(f,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function di(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Yt(e,t),l!=null&&r.unshift(ir(e,l,i)),l=Yt(e,n),l!=null&&r.push(ir(e,l,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,s=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&s!==null&&(u=s,i?(a=Yt(t,l),a!=null&&o.unshift(ir(t,a,u))):i||(a=Yt(t,l),a!=null&&o.push(ir(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var sp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function ea(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(cp,"")}function Dr(e,n,t){if(n=ea(n),ea(e)!==n&&t)throw Error(k(425))}function fi(){}var Kl=null,Gl=null;function Yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,dp=typeof clearTimeout=="function"?clearTimeout:void 0,na=typeof Promise=="function"?Promise:void 0,fp=typeof queueMicrotask=="function"?queueMicrotask:typeof na<"u"?function(e){return na.resolve(null).then(e).catch(pp)}:Zl;function pp(e){setTimeout(function(){throw e})}function gl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);er(n)}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ta(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+jt,lr="__reactProps$"+jt,Je="__reactContainer$"+jt,Jl="__reactEvents$"+jt,mp="__reactListeners$"+jt,hp="__reactHandles$"+jt;function Dn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ta(e);e!==null;){if(t=e[Ve])return t;e=ta(e)}return n}e=t,t=e.parentNode}return null}function yr(e){return e=e[Ve]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ii(e){return e[lr]||null}var eo=[],tt=-1;function En(e){return{current:e}}function B(e){0>tt||(e.current=eo[tt],eo[tt]=null,tt--)}function A(e,n){tt++,eo[tt]=e.current,e.current=n}var jn={},se=En(jn),ve=En(!1),Un=jn;function ht(e,n){var t=e.type.contextTypes;if(!t)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function pi(){B(ve),B(se)}function ra(e,n,t){if(se.current!==jn)throw Error(k(168));A(se,n),A(ve,t)}function nc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,Zd(e)||"Unknown",i));return Q({},t,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Un=se.current,A(se,e),A(ve,ve.current),!0}function ia(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=nc(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(se),A(se,e)):B(ve),A(ve,t)}var Xe=null,Oi=!1,vl=!1;function tc(e){Xe===null?Xe=[e]:Xe.push(e)}function gp(e){Oi=!0,tc(e)}function Pn(){if(!vl&&Xe!==null){vl=!0;var e=0,n=O;try{var t=Xe;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xe=null,Oi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),Ps(Oo,Pn),i}finally{O=n,vl=!1}}return null}var rt=[],it=0,hi=null,gi=0,Pe=[],Le=0,$n=null,Ke=1,Ge="";function Tn(e,n){rt[it++]=gi,rt[it++]=hi,hi=e,gi=n}function rc(e,n,t){Pe[Le++]=Ke,Pe[Le++]=Ge,Pe[Le++]=$n,$n=e;var r=Ke;e=Ge;var i=32-Me(r)-1;r&=~(1<<i),t+=1;var l=32-Me(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ke=1<<32-Me(n)+i|t<<i|r,Ge=l+e}else Ke=1<<l|t<<i|r,Ge=e}function qo(e){e.return!==null&&(Tn(e,1),rc(e,1,0))}function Qo(e){for(;e===hi;)hi=rt[--it],rt[it]=null,gi=rt[--it],rt[it]=null;for(;e===$n;)$n=Pe[--Le],Pe[Le]=null,Ge=Pe[--Le],Pe[Le]=null,Ke=Pe[--Le],Pe[Le]=null}var Se=null,ke=null,V=!1,Oe=null;function ic(e,n){var t=_e(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function la(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,ke=vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:Ke,overflow:Ge}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=_e(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,ke=null,!0):!1;default:return!1}}function no(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(V){var n=ke;if(n){var t=n;if(!la(e,n)){if(no(e))throw Error(k(418));n=vn(t.nextSibling);var r=Se;n&&la(e,n)?ic(r,t):(e.flags=e.flags&-4097|2,V=!1,Se=e)}}else{if(no(e))throw Error(k(418));e.flags=e.flags&-4097|2,V=!1,Se=e}}}function oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ir(e){if(e!==Se)return!1;if(!V)return oa(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yl(e.type,e.memoizedProps)),n&&(n=ke)){if(no(e))throw lc(),Error(k(418));for(;n;)ic(e,n),n=vn(n.nextSibling)}if(oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ke=vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ke=null}}else ke=Se?vn(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=ke;e;)e=vn(e.nextSibling)}function gt(){ke=Se=null,V=!1}function bo(e){Oe===null?Oe=[e]:Oe.push(e)}var vp=tn.ReactCurrentBatchConfig;function Rt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Or(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ua(e){var n=e._init;return n(e._payload)}function oc(e){function n(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Nn(p,d),p.index=0,p.sibling=null,p}function l(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,d,h,y){return d===null||d.tag!==6?(d=jl(h,p.mode,y),d.return=p,d):(d=i(d,h),d.return=p,d)}function a(p,d,h,y){var S=h.type;return S===Yn?m(p,d,h.props.children,y,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&ua(S)===d.type)?(y=i(d,h.props),y.ref=Rt(p,d,h),y.return=p,y):(y=ti(h.type,h.key,h.props,null,p.mode,y),y.ref=Rt(p,d,h),y.return=p,y)}function s(p,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Cl(h,p.mode,y),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function m(p,d,h,y,S){return d===null||d.tag!==7?(d=An(h,p.mode,y,S),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=jl(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Cr:return h=ti(d.type,d.key,d.props,null,p.mode,h),h.ref=Rt(p,null,d),h.return=p,h;case Gn:return d=Cl(d,p.mode,h),d.return=p,d;case un:var y=d._init;return f(p,y(d._payload),h)}if(It(d)||Et(d))return d=An(d,p.mode,h,null),d.return=p,d;Or(p,d)}return null}function g(p,d,h,y){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:u(p,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Cr:return h.key===S?a(p,d,h,y):null;case Gn:return h.key===S?s(p,d,h,y):null;case un:return S=h._init,g(p,d,S(h._payload),y)}if(It(h)||Et(h))return S!==null?null:m(p,d,h,y,null);Or(p,h)}return null}function w(p,d,h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,u(d,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cr:return p=p.get(y.key===null?h:y.key)||null,a(d,p,y,S);case Gn:return p=p.get(y.key===null?h:y.key)||null,s(d,p,y,S);case un:var L=y._init;return w(p,d,h,L(y._payload),S)}if(It(y)||Et(y))return p=p.get(h)||null,m(d,p,y,S,null);Or(d,y)}return null}function v(p,d,h,y){for(var S=null,L=null,P=d,_=d=0,M=null;P!==null&&_<h.length;_++){P.index>_?(M=P,P=null):M=P.sibling;var R=g(p,P,h[_],y);if(R===null){P===null&&(P=M);break}e&&P&&R.alternate===null&&n(p,P),d=l(R,d,_),L===null?S=R:L.sibling=R,L=R,P=M}if(_===h.length)return t(p,P),V&&Tn(p,_),S;if(P===null){for(;_<h.length;_++)P=f(p,h[_],y),P!==null&&(d=l(P,d,_),L===null?S=P:L.sibling=P,L=P);return V&&Tn(p,_),S}for(P=r(p,P);_<h.length;_++)M=w(P,p,_,h[_],y),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?_:M.key),d=l(M,d,_),L===null?S=M:L.sibling=M,L=M);return e&&P.forEach(function(ee){return n(p,ee)}),V&&Tn(p,_),S}function x(p,d,h,y){var S=Et(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var L=S=null,P=d,_=d=0,M=null,R=h.next();P!==null&&!R.done;_++,R=h.next()){P.index>_?(M=P,P=null):M=P.sibling;var ee=g(p,P,R.value,y);if(ee===null){P===null&&(P=M);break}e&&P&&ee.alternate===null&&n(p,P),d=l(ee,d,_),L===null?S=ee:L.sibling=ee,L=ee,P=M}if(R.done)return t(p,P),V&&Tn(p,_),S;if(P===null){for(;!R.done;_++,R=h.next())R=f(p,R.value,y),R!==null&&(d=l(R,d,_),L===null?S=R:L.sibling=R,L=R);return V&&Tn(p,_),S}for(P=r(p,P);!R.done;_++,R=h.next())R=w(P,p,_,R.value,y),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?_:R.key),d=l(R,d,_),L===null?S=R:L.sibling=R,L=R);return e&&P.forEach(function(Ln){return n(p,Ln)}),V&&Tn(p,_),S}function j(p,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Yn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Cr:e:{for(var S=h.key,L=d;L!==null;){if(L.key===S){if(S=h.type,S===Yn){if(L.tag===7){t(p,L.sibling),d=i(L,h.props.children),d.return=p,p=d;break e}}else if(L.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&ua(S)===L.type){t(p,L.sibling),d=i(L,h.props),d.ref=Rt(p,L,h),d.return=p,p=d;break e}t(p,L);break}else n(p,L);L=L.sibling}h.type===Yn?(d=An(h.props.children,p.mode,y,h.key),d.return=p,p=d):(y=ti(h.type,h.key,h.props,null,p.mode,y),y.ref=Rt(p,d,h),y.return=p,p=y)}return o(p);case Gn:e:{for(L=h.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=Cl(h,p.mode,y),d.return=p,p=d}return o(p);case un:return L=h._init,j(p,d,L(h._payload),y)}if(It(h))return v(p,d,h,y);if(Et(h))return x(p,d,h,y);Or(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(p,d.sibling),d=i(d,h),d.return=p,p=d):(t(p,d),d=jl(h,p.mode,y),d.return=p,p=d),o(p)):t(p,d)}return j}var vt=oc(!0),uc=oc(!1),vi=En(null),yi=null,lt=null,Xo=null;function Ko(){Xo=lt=yi=null}function Go(e){var n=vi.current;B(vi),e._currentValue=n}function ro(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ft(e,n){yi=e,Xo=lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function Re(e){var n=e._currentValue;if(Xo!==e)if(e={context:e,memoizedValue:n,next:null},lt===null){if(yi===null)throw Error(k(308));lt=e,yi.dependencies={lanes:0,firstContext:e}}else lt=lt.next=e;return n}var In=null;function Yo(e){In===null?In=[e]:In.push(e)}function ac(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Yo(n)):(t.next=i.next,i.next=t),n.interleaved=t,en(e,r)}function en(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,en(e,t)}return i=r.interleaved,i===null?(n.next=n,Yo(r)):(n.next=i.next,i.next=n),r.interleaved=n,en(e,t)}function Gr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}function aa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function xi(e,n,t,r){var i=e.updateQueue;an=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var a=u,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==o&&(u===null?m.firstBaseUpdate=s:u.next=s,m.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,m=s=a=null,u=l;do{var g=u.lane,w=u.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,x=u;switch(g=n,w=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(w,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(w,f,g):v,g==null)break e;f=Q({},f,g);break e;case 2:an=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else w={eventTime:w,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(s=m=w,a=f):m=m.next=w,o|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(a=f),i.baseState=a,i.firstBaseUpdate=s,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=f}}function sa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var xr={},He=En(xr),or=En(xr),ur=En(xr);function On(e){if(e===xr)throw Error(k(174));return e}function Jo(e,n){switch(A(ur,n),A(or,e),A(He,xr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}B(He),A(He,n)}function yt(){B(He),B(or),B(ur)}function cc(e){On(ur.current);var n=On(He.current),t=Ml(n,e.type);n!==t&&(A(or,e),A(He,t))}function eu(e){or.current===e&&(B(He),B(or))}var W=En(0);function wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var yl=[];function nu(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var Yr=tn.ReactCurrentDispatcher,xl=tn.ReactCurrentBatchConfig,Bn=0,H=null,Z=null,ne=null,Ni=!1,Wt=!1,ar=0,yp=0;function oe(){throw Error(k(321))}function tu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function ru(e,n,t,r,i,l){if(Bn=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yr.current=e===null||e.memoizedState===null?kp:Sp,e=t(r,i),Wt){l=0;do{if(Wt=!1,ar=0,25<=l)throw Error(k(301));l+=1,ne=Z=null,n.updateQueue=null,Yr.current=jp,e=t(r,i)}while(Wt)}if(Yr.current=ki,n=Z!==null&&Z.next!==null,Bn=0,ne=Z=H=null,Ni=!1,n)throw Error(k(300));return e}function iu(){var e=ar!==0;return ar=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function Te(){if(Z===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=ne===null?H.memoizedState:ne.next;if(n!==null)ne=n,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function sr(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=Te(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=Z,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,a=null,s=l;do{var m=s.lane;if((Bn&m)===m)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:m,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(u=a=f,o=r):a=a.next=f,H.lanes|=m,Vn|=m}s=s.next}while(s!==null&&s!==l);a===null?o=r:a.next=u,Ue(r,n.memoizedState)||(ge=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Vn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Nl(e){var n=Te(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ue(l,n.memoizedState)||(ge=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function dc(){}function fc(e,n){var t=H,r=Te(),i=n(),l=!Ue(r.memoizedState,i);if(l&&(r.memoizedState=i,ge=!0),r=r.queue,lu(hc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,cr(9,mc.bind(null,t,r,i,n),void 0,null),te===null)throw Error(k(349));Bn&30||pc(t,n,i)}return i}function pc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function mc(e,n,t,r){n.value=t,n.getSnapshot=r,gc(n)&&vc(e)}function hc(e,n,t){return t(function(){gc(n)&&vc(e)})}function gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function vc(e){var n=en(e,1);n!==null&&Ae(n,e,1,-1)}function ca(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Np.bind(null,H,e),[n.memoizedState,e]}function cr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yc(){return Te().memoizedState}function Zr(e,n,t,r){var i=Be();H.flags|=e,i.memoizedState=cr(1|n,t,void 0,r===void 0?null:r)}function Mi(e,n,t,r){var i=Te();r=r===void 0?null:r;var l=void 0;if(Z!==null){var o=Z.memoizedState;if(l=o.destroy,r!==null&&tu(r,o.deps)){i.memoizedState=cr(n,t,l,r);return}}H.flags|=e,i.memoizedState=cr(1|n,t,l,r)}function da(e,n){return Zr(8390656,8,e,n)}function lu(e,n){return Mi(2048,8,e,n)}function xc(e,n){return Mi(4,2,e,n)}function wc(e,n){return Mi(4,4,e,n)}function Nc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kc(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4,4,Nc.bind(null,n,e),t)}function ou(){}function Sc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&tu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function jc(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&tu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cc(e,n,t){return Bn&21?(Ue(t,n)||(t=zs(),H.lanes|=t,Vn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=t)}function xp(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),n()}finally{O=t,xl.transition=r}}function Ec(){return Te().memoizedState}function wp(e,n,t){var r=wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pc(e))Lc(n,t);else if(t=ac(e,n,t,r),t!==null){var i=de();Ae(t,e,r,i),_c(t,n,r)}}function Np(e,n,t){var r=wn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Lc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,Ue(u,o)){var a=n.interleaved;a===null?(i.next=i,Yo(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=ac(e,n,i,r),t!==null&&(i=de(),Ae(t,e,r,i),_c(t,n,r))}}function Pc(e){var n=e.alternate;return e===H||n!==null&&n===H}function Lc(e,n){Wt=Ni=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _c(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Mo(e,t)}}var ki={readContext:Re,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},kp={readContext:Re,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:da,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,Nc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=Be();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Be();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=wp.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:ca,useDebugValue:ou,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=ca(!1),n=e[0];return e=xp.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Be();if(V){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),te===null)throw Error(k(349));Bn&30||pc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,da(hc.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,mc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Be(),n=te.identifierPrefix;if(V){var t=Ge,r=Ke;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=yp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Sp={readContext:Re,useCallback:Sc,useContext:Re,useEffect:lu,useImperativeHandle:kc,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:jc,useReducer:wl,useRef:yc,useState:function(){return wl(sr)},useDebugValue:ou,useDeferredValue:function(e){var n=Te();return Cc(n,Z.memoizedState,e)},useTransition:function(){var e=wl(sr)[0],n=Te().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:Ec,unstable_isNewReconciler:!1},jp={readContext:Re,useCallback:Sc,useContext:Re,useEffect:lu,useImperativeHandle:kc,useInsertionEffect:xc,useLayoutEffect:wc,useMemo:jc,useReducer:Nl,useRef:yc,useState:function(){return Nl(sr)},useDebugValue:ou,useDeferredValue:function(e){var n=Te();return Z===null?n.memoizedState=e:Cc(n,Z.memoizedState,e)},useTransition:function(){var e=Nl(sr)[0],n=Te().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:Ec,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function io(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=wn(e),l=Ye(r,i);l.payload=n,t!=null&&(l.callback=t),n=yn(e,l,i),n!==null&&(Ae(n,e,i,r),Gr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=wn(e),l=Ye(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=yn(e,l,i),n!==null&&(Ae(n,e,i,r),Gr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=wn(e),i=Ye(t,r);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,r),n!==null&&(Ae(n,e,r,t),Gr(n,e,r))}};function fa(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(i,l):!0}function zc(e,n,t){var r=!1,i=jn,l=n.contextType;return typeof l=="object"&&l!==null?l=Re(l):(i=ye(n)?Un:se.current,r=n.contextTypes,l=(r=r!=null)?ht(e,i):jn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ai,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function pa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ai.enqueueReplaceState(n,n.state,null)}function lo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Zo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Re(l):(l=ye(n)?Un:se.current,i.context=ht(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(io(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ai.enqueueReplaceState(i,i.state,null),xi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xt(e,n){try{var t="",r=n;do t+=Yd(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function kl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function oo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ji||(ji=!0,vo=r),oo(e,n)},t}function Tc(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){oo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){oo(e,n),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ma(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Up.bind(null,e,n,t),n.then(e,e))}function ha(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ga(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var Ep=tn.ReactCurrentOwner,ge=!1;function ce(e,n,t,r){n.child=e===null?uc(n,null,t,r):vt(n,e.child,t,r)}function va(e,n,t,r,i){t=t.render;var l=n.ref;return ft(n,i),r=ru(e,n,t,r,l,i),t=iu(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):(V&&t&&qo(n),n.flags|=1,ce(e,n,r,i),n.child)}function ya(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!mu(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Fc(e,n,l,r,i)):(e=ti(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(o,r)&&e.ref===n.ref)return nn(e,n,i)}return n.flags|=1,e=Nn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Fc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(tr(l,r)&&e.ref===n.ref)if(ge=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,nn(e,n,i)}return uo(e,n,t,r,i)}function Dc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(ut,Ne),Ne|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(ut,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,A(ut,Ne),Ne|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,A(ut,Ne),Ne|=r;return ce(e,n,i,t),n.child}function Ic(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function uo(e,n,t,r,i){var l=ye(t)?Un:se.current;return l=ht(n,l),ft(n,i),t=ru(e,n,t,r,l,i),r=iu(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nn(e,n,i)):(V&&r&&qo(n),n.flags|=1,ce(e,n,t,i),n.child)}function xa(e,n,t,r,i){if(ye(t)){var l=!0;mi(n)}else l=!1;if(ft(n,i),n.stateNode===null)Jr(e,n),zc(n,t,r),lo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Re(s):(s=ye(t)?Un:se.current,s=ht(n,s));var m=t.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==s)&&pa(n,o,r,s),an=!1;var g=n.memoizedState;o.state=g,xi(n,r,o,i),a=n.memoizedState,u!==r||g!==a||ve.current||an?(typeof m=="function"&&(io(n,t,m,r),a=n.memoizedState),(u=an||fa(n,t,u,r,g,a,s))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,sc(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:De(n.type,u),o.props=s,f=n.pendingProps,g=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Re(a):(a=ye(t)?Un:se.current,a=ht(n,a));var w=t.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==f||g!==a)&&pa(n,o,r,a),an=!1,g=n.memoizedState,o.state=g,xi(n,r,o,i);var v=n.memoizedState;u!==f||g!==v||ve.current||an?(typeof w=="function"&&(io(n,t,w,r),v=n.memoizedState),(s=an||fa(n,t,s,r,g,v,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=a,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return ao(e,n,t,r,l,i)}function ao(e,n,t,r,i,l){Ic(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ia(n,t,!1),nn(e,n,l);r=n.stateNode,Ep.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=vt(n,e.child,null,l),n.child=vt(n,null,u,l)):ce(e,n,u,l),n.memoizedState=r.state,i&&ia(n,t,!0),n.child}function Oc(e){var n=e.stateNode;n.pendingContext?ra(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ra(e,n.context,!1),Jo(e,n.containerInfo)}function wa(e,n,t,r,i){return gt(),bo(i),n.flags|=256,ce(e,n,t,r),n.child}var so={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,n,t){var r=n.pendingProps,i=W.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(W,i&1),e===null)return to(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Bi(o,r,0,null),e=An(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=co(t),n.memoizedState=so,e):uu(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Pp(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=Nn(u,l):(l=An(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?co(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=so,r}return l=e.child,e=l.sibling,r=Nn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function uu(e,n){return n=Bi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Mr(e,n,t,r){return r!==null&&bo(r),vt(n,e.child,null,t),e=uu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pp(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=kl(Error(k(422))),Mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Bi({mode:"visible",children:r.children},i,0,null),l=An(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&vt(n,e.child,null,o),n.child.memoizedState=co(o),n.memoizedState=so,l);if(!(n.mode&1))return Mr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(k(419)),r=kl(l,r,void 0),Mr(e,n,o,r)}if(u=(o&e.childLanes)!==0,ge||u){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,en(e,i),Ae(r,e,i,-1))}return pu(),r=kl(Error(k(421))),Mr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=$p.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ke=vn(i.nextSibling),Se=n,V=!0,Oe=null,e!==null&&(Pe[Le++]=Ke,Pe[Le++]=Ge,Pe[Le++]=$n,Ke=e.id,Ge=e.overflow,$n=n),n=uu(n,r.children),n.flags|=4096,n)}function Na(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ro(e.return,n,t)}function Sl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Ac(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ce(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Na(e,t,n);else if(e.tag===19)Na(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(W,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Sl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Sl(n,!0,t,null,l);break;case"together":Sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Nn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Nn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lp(e,n,t){switch(n.tag){case 3:Oc(n),gt();break;case 5:cc(n);break;case 1:ye(n.type)&&mi(n);break;case 4:Jo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;A(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Mc(e,n,t):(A(W,W.current&1),e=nn(e,n,t),e!==null?e.sibling:null);A(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ac(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Dc(e,n,t)}return nn(e,n,t)}var Uc,fo,$c,Bc;Uc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fo=function(){};$c=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,On(He.current);var l=null;switch(t){case"input":i=Fl(e,i),r=Fl(e,r),l=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":i=Ol(e,i),r=Ol(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Al(t,r);var o;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Kt.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var a=r[s];if(u=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&a!==u&&(a!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Kt.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&$("scroll",e),l||u===a||(l=[])):(l=l||[]).push(s,a))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};Bc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tt(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function _p(e,n,t){var r=n.pendingProps;switch(Qo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(n),null;case 1:return ye(n.type)&&pi(),ue(n),null;case 3:return r=n.stateNode,yt(),B(ve),B(se),nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(wo(Oe),Oe=null))),fo(e,n),ue(n),null;case 5:eu(n);var i=On(ur.current);if(t=n.type,e!==null&&n.stateNode!=null)$c(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ue(n),null}if(e=On(He.current),Ir(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ve]=n,r[lr]=l,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Mt.length;i++)$(Mt[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":zu(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":Tu(r,l),$("invalid",r)}Al(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,u,e),i=["children",""+u]):Kt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&$("scroll",r)}switch(t){case"input":Er(r),Ru(r,l,!0);break;case"textarea":Er(r),Fu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ve]=n,e[lr]=r,Uc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ul(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mt.length;i++)$(Mt[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":zu(e,r),i=Fl(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Tu(e,r),i=Ol(e,r),$("invalid",e);break;default:i=r}Al(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?ys(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&gs(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Gt(e,a):typeof a=="number"&&Gt(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kt.hasOwnProperty(l)?a!=null&&l==="onScroll"&&$("scroll",e):a!=null&&Ro(e,l,a,o))}switch(t){case"input":Er(e),Ru(e,r,!1);break;case"textarea":Er(e),Fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?at(e,!!r.multiple,l,!1):r.defaultValue!=null&&at(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ue(n),null;case 6:if(e&&n.stateNode!=null)Bc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=On(ur.current),On(He.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ve]=n,(l=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ve]=n,n.stateNode=r}return ue(n),null;case 13:if(B(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ke!==null&&n.mode&1&&!(n.flags&128))lc(),gt(),n.flags|=98560,l=!1;else if(l=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Ve]=n}else gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ue(n),l=!1}else Oe!==null&&(wo(Oe),Oe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?J===0&&(J=3):pu())),n.updateQueue!==null&&(n.flags|=4),ue(n),null);case 4:return yt(),fo(e,n),e===null&&rr(n.stateNode.containerInfo),ue(n),null;case 10:return Go(n.type._context),ue(n),null;case 17:return ye(n.type)&&pi(),ue(n),null;case 19:if(B(W),l=n.memoizedState,l===null)return ue(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Tt(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=wi(e),o!==null){for(n.flags|=128,Tt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(W,W.current&1|2),n.child}e=e.sibling}l.tail!==null&&X()>wt&&(n.flags|=128,r=!0,Tt(l,!1),n.lanes=4194304)}else{if(!r)if(e=wi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!V)return ue(n),null}else 2*X()-l.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,r=!0,Tt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=X(),n.sibling=null,t=W.current,A(W,r?t&1|2:t&1),n):(ue(n),null);case 22:case 23:return fu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ne&1073741824&&(ue(n),n.subtreeFlags&6&&(n.flags|=8192)):ue(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function zp(e,n){switch(Qo(n),n.tag){case 1:return ye(n.type)&&pi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),B(ve),B(se),nu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return eu(n),null;case 13:if(B(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(W),null;case 4:return yt(),null;case 10:return Go(n.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Ar=!1,ae=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,E=null;function ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){b(e,n,r)}else t.current=null}function po(e,n,t){try{t()}catch(r){b(e,n,r)}}var ka=!1;function Tp(e,n){if(Kl=si,e=Qs(),Ho(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,s=0,m=0,f=e,g=null;n:for(;;){for(var w;f!==t||i!==0&&f.nodeType!==3||(u=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break n;if(g===t&&++s===i&&(u=o),g===l&&++m===r&&(a=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gl={focusedElem:e,selectionRange:t},si=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:De(n.type,x),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){b(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return v=ka,ka=!1,v}function Ht(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&po(n,t,l)}i=i.next}while(i!==r)}}function Ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function mo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Vc(e){var n=e.alternate;n!==null&&(e.alternate=null,Vc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[lr],delete n[Jl],delete n[mp],delete n[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function Sa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(ho(e,n,t),e=e.sibling;e!==null;)ho(e,n,t),e=e.sibling}function go(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(go(e,n,t),e=e.sibling;e!==null;)go(e,n,t),e=e.sibling}var re=null,Ie=!1;function ln(e,n,t){for(t=t.child;t!==null;)Hc(e,n,t),t=t.sibling}function Hc(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ri,t)}catch{}switch(t.tag){case 5:ae||ot(t,n);case 6:var r=re,i=Ie;re=null,ln(e,n,t),re=r,Ie=i,re!==null&&(Ie?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Ie?(e=re,t=t.stateNode,e.nodeType===8?gl(e.parentNode,t):e.nodeType===1&&gl(e,t),er(e)):gl(re,t.stateNode));break;case 4:r=re,i=Ie,re=t.stateNode.containerInfo,Ie=!0,ln(e,n,t),re=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&po(t,n,o),i=i.next}while(i!==r)}ln(e,n,t);break;case 1:if(!ae&&(ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){b(t,n,u)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,ln(e,n,t),ae=r):ln(e,n,t);break;default:ln(e,n,t)}}function ja(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Rp),n.forEach(function(r){var i=Bp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Fe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:re=u.stateNode,Ie=!1;break e;case 3:re=u.stateNode.containerInfo,Ie=!0;break e;case 4:re=u.stateNode.containerInfo,Ie=!0;break e}u=u.return}if(re===null)throw Error(k(160));Hc(l,o,i),re=null,Ie=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(s){b(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qc(n,e),n=n.sibling}function qc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(n,e),$e(e),r&4){try{Ht(3,e,e.return),Ui(3,e)}catch(x){b(e,e.return,x)}try{Ht(5,e,e.return)}catch(x){b(e,e.return,x)}}break;case 1:Fe(n,e),$e(e),r&512&&t!==null&&ot(t,t.return);break;case 5:if(Fe(n,e),$e(e),r&512&&t!==null&&ot(t,t.return),e.flags&32){var i=e.stateNode;try{Gt(i,"")}catch(x){b(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ps(i,l),Ul(u,o);var s=Ul(u,l);for(o=0;o<a.length;o+=2){var m=a[o],f=a[o+1];m==="style"?ys(i,f):m==="dangerouslySetInnerHTML"?gs(i,f):m==="children"?Gt(i,f):Ro(i,m,f,s)}switch(u){case"input":Dl(i,l);break;case"textarea":ms(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?at(i,!!l.multiple,w,!1):g!==!!l.multiple&&(l.defaultValue!=null?at(i,!!l.multiple,l.defaultValue,!0):at(i,!!l.multiple,l.multiple?[]:"",!1))}i[lr]=l}catch(x){b(e,e.return,x)}}break;case 6:if(Fe(n,e),$e(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){b(e,e.return,x)}}break;case 3:if(Fe(n,e),$e(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(x){b(e,e.return,x)}break;case 4:Fe(n,e),$e(e);break;case 13:Fe(n,e),$e(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(cu=X())),r&4&&ja(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(s=ae)||m,Fe(n,e),ae=s):Fe(n,e),$e(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(f=E=m;E!==null;){switch(g=E,w=g.child,g.tag){case 0:case 11:case 14:case 15:Ht(4,g,g.return);break;case 1:ot(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){b(r,t,x)}}break;case 5:ot(g,g.return);break;case 22:if(g.memoizedState!==null){Ea(f);continue}}w!==null?(w.return=g,E=w):Ea(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=vs("display",o))}catch(x){b(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(x){b(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fe(n,e),$e(e),r&4&&ja(e);break;case 21:break;default:Fe(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Wc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gt(i,""),r.flags&=-33);var l=Sa(e);go(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Sa(e);ho(e,u,o);break;default:throw Error(k(161))}}catch(a){b(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fp(e,n,t){E=e,Qc(e)}function Qc(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ar;if(!o){var u=i.alternate,a=u!==null&&u.memoizedState!==null||ae;u=Ar;var s=ae;if(Ar=o,(ae=a)&&!s)for(E=i;E!==null;)o=E,a=o.child,o.tag===22&&o.memoizedState!==null?Pa(i):a!==null?(a.return=o,E=a):Pa(i);for(;l!==null;)E=l,Qc(l),l=l.sibling;E=i,Ar=u,ae=s}Ca(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,E=l):Ca(e)}}function Ca(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||Ui(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&sa(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}sa(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var m=s.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&er(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||n.flags&512&&mo(n)}catch(g){b(n,n.return,g)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function Ea(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function Pa(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ui(4,n)}catch(a){b(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){b(n,i,a)}}var l=n.return;try{mo(n)}catch(a){b(n,l,a)}break;case 5:var o=n.return;try{mo(n)}catch(a){b(n,o,a)}}}catch(a){b(n,n.return,a)}if(n===e){E=null;break}var u=n.sibling;if(u!==null){u.return=n.return,E=u;break}E=n.return}}var Dp=Math.ceil,Si=tn.ReactCurrentDispatcher,au=tn.ReactCurrentOwner,ze=tn.ReactCurrentBatchConfig,D=0,te=null,Y=null,ie=0,Ne=0,ut=En(0),J=0,dr=null,Vn=0,$i=0,su=0,qt=null,me=null,cu=0,wt=1/0,be=null,ji=!1,vo=null,xn=null,Ur=!1,fn=null,Ci=0,Qt=0,yo=null,ei=-1,ni=0;function de(){return D&6?X():ei!==-1?ei:ei=X()}function wn(e){return e.mode&1?D&2&&ie!==0?ie&-ie:vp.transition!==null?(ni===0&&(ni=zs()),ni):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e):1}function Ae(e,n,t,r){if(50<Qt)throw Qt=0,yo=null,Error(k(185));gr(e,t,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&($i|=t),J===4&&cn(e,ie)),xe(e,r),t===1&&D===0&&!(n.mode&1)&&(wt=X()+500,Oi&&Pn()))}function xe(e,n){var t=e.callbackNode;vf(e,n);var r=ai(e,e===te?ie:0);if(r===0)t!==null&&Ou(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ou(t),n===1)e.tag===0?gp(La.bind(null,e)):tc(La.bind(null,e)),fp(function(){!(D&6)&&Pn()}),t=null;else{switch(Rs(r)){case 1:t=Oo;break;case 4:t=Ls;break;case 16:t=ui;break;case 536870912:t=_s;break;default:t=ui}t=ed(t,bc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bc(e,n){if(ei=-1,ni=0,D&6)throw Error(k(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var r=ai(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ei(e,r);else{n=r;var i=D;D|=2;var l=Kc();(te!==e||ie!==n)&&(be=null,wt=X()+500,Mn(e,n));do try{Mp();break}catch(u){Xc(e,u)}while(!0);Ko(),Si.current=l,D=i,Y!==null?n=0:(te=null,ie=0,n=J)}if(n!==0){if(n===2&&(i=Hl(e),i!==0&&(r=i,n=xo(e,i))),n===1)throw t=dr,Mn(e,0),cn(e,r),xe(e,X()),t;if(n===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ip(i)&&(n=Ei(e,r),n===2&&(l=Hl(e),l!==0&&(r=l,n=xo(e,l))),n===1))throw t=dr,Mn(e,0),cn(e,r),xe(e,X()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Fn(e,me,be);break;case 3:if(cn(e,r),(r&130023424)===r&&(n=cu+500-X(),10<n)){if(ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl(Fn.bind(null,e,me,be),n);break}Fn(e,me,be);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Me(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dp(r/1960))-r,10<r){e.timeoutHandle=Zl(Fn.bind(null,e,me,be),r);break}Fn(e,me,be);break;case 5:Fn(e,me,be);break;default:throw Error(k(329))}}}return xe(e,X()),e.callbackNode===t?bc.bind(null,e):null}function xo(e,n){var t=qt;return e.current.memoizedState.isDehydrated&&(Mn(e,n).flags|=256),e=Ei(e,n),e!==2&&(n=me,me=t,n!==null&&wo(n)),e}function wo(e){me===null?me=e:me.push.apply(me,e)}function Ip(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ue(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cn(e,n){for(n&=~su,n&=~$i,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function La(e){if(D&6)throw Error(k(327));pt();var n=ai(e,0);if(!(n&1))return xe(e,X()),null;var t=Ei(e,n);if(e.tag!==0&&t===2){var r=Hl(e);r!==0&&(n=r,t=xo(e,r))}if(t===1)throw t=dr,Mn(e,0),cn(e,n),xe(e,X()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,me,be),xe(e,X()),null}function du(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(wt=X()+500,Oi&&Pn())}}function Wn(e){fn!==null&&fn.tag===0&&!(D&6)&&pt();var n=D;D|=1;var t=ze.transition,r=O;try{if(ze.transition=null,O=1,e)return e()}finally{O=r,ze.transition=t,D=n,!(D&6)&&Pn()}}function fu(){Ne=ut.current,B(ut)}function Mn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,dp(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:yt(),B(ve),B(se),nu();break;case 5:eu(r);break;case 4:yt();break;case 13:B(W);break;case 19:B(W);break;case 10:Go(r.type._context);break;case 22:case 23:fu()}t=t.return}if(te=e,Y=e=Nn(e.current,null),ie=Ne=n,J=0,dr=null,su=$i=Vn=0,me=qt=null,In!==null){for(n=0;n<In.length;n++)if(t=In[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}In=null}return e}function Xc(e,n){do{var t=Y;try{if(Ko(),Yr.current=ki,Ni){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ni=!1}if(Bn=0,ne=Z=H=null,Wt=!1,ar=0,au.current=null,t===null||t.return===null){J=1,dr=n,Y=null;break}e:{var l=e,o=t.return,u=t,a=n;if(n=ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,m=u,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=ha(o);if(w!==null){w.flags&=-257,ga(w,o,u,l,n),w.mode&1&&ma(l,s,n),n=w,a=s;var v=n.updateQueue;if(v===null){var x=new Set;x.add(a),n.updateQueue=x}else v.add(a);break e}else{if(!(n&1)){ma(l,s,n),pu();break e}a=Error(k(426))}}else if(V&&u.mode&1){var j=ha(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ga(j,o,u,l,n),bo(xt(a,u));break e}}l=a=xt(a,u),J!==4&&(J=2),qt===null?qt=[l]:qt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=Rc(l,a,n);aa(l,p);break e;case 1:u=a;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xn===null||!xn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=Tc(l,u,n);aa(l,y);break e}}l=l.return}while(l!==null)}Yc(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Kc(){var e=Si.current;return Si.current=ki,e===null?ki:e}function pu(){(J===0||J===3||J===2)&&(J=4),te===null||!(Vn&268435455)&&!($i&268435455)||cn(te,ie)}function Ei(e,n){var t=D;D|=2;var r=Kc();(te!==e||ie!==n)&&(be=null,Mn(e,n));do try{Op();break}catch(i){Xc(e,i)}while(!0);if(Ko(),D=t,Si.current=r,Y!==null)throw Error(k(261));return te=null,ie=0,J}function Op(){for(;Y!==null;)Gc(Y)}function Mp(){for(;Y!==null&&!af();)Gc(Y)}function Gc(e){var n=Jc(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?Yc(e):Y=n,au.current=null}function Yc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=zp(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(t=_p(t,n,Ne),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);J===0&&(J=5)}function Fn(e,n,t){var r=O,i=ze.transition;try{ze.transition=null,O=1,Ap(e,n,t,r)}finally{ze.transition=i,O=r}return null}function Ap(e,n,t,r){do pt();while(fn!==null);if(D&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(yf(e,l),e===te&&(Y=te=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ur||(Ur=!0,ed(ui,function(){return pt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var o=O;O=1;var u=D;D|=4,au.current=null,Tp(e,t),qc(t,e),ip(Gl),si=!!Kl,Gl=Kl=null,e.current=t,Fp(t),sf(),D=u,O=o,ze.transition=l}else e.current=t;if(Ur&&(Ur=!1,fn=e,Ci=i),l=e.pendingLanes,l===0&&(xn=null),ff(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ji)throw ji=!1,e=vo,vo=null,e;return Ci&1&&e.tag!==0&&pt(),l=e.pendingLanes,l&1?e===yo?Qt++:(Qt=0,yo=e):Qt=0,Pn(),null}function pt(){if(fn!==null){var e=Rs(Ci),n=ze.transition,t=O;try{if(ze.transition=null,O=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,Ci=0,D&6)throw Error(k(331));var i=D;for(D|=4,E=e.current;E!==null;){var l=E,o=l.child;if(E.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var s=u[a];for(E=s;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Ht(8,m,l)}var f=m.child;if(f!==null)f.return=m,E=f;else for(;E!==null;){m=E;var g=m.sibling,w=m.return;if(Vc(m),m===s){E=null;break}if(g!==null){g.return=w,E=g;break}E=w}}}var v=l.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}E=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ht(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,E=p;break e}E=l.return}}var d=e.current;for(E=d;E!==null;){o=E;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,E=h;else e:for(o=d;E!==null;){if(u=E,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ui(9,u)}}catch(S){b(u,u.return,S)}if(u===o){E=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,E=y;break e}E=u.return}}if(D=i,Pn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{O=t,ze.transition=n}}return!1}function _a(e,n,t){n=xt(t,n),n=Rc(e,n,1),e=yn(e,n,1),n=de(),e!==null&&(gr(e,1,n),xe(e,n))}function b(e,n,t){if(e.tag===3)_a(e,e,t);else for(;n!==null;){if(n.tag===3){_a(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=xt(t,e),e=Tc(n,e,1),n=yn(n,e,1),e=de(),n!==null&&(gr(n,1,e),xe(n,e));break}}n=n.return}}function Up(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(J===4||J===3&&(ie&130023424)===ie&&500>X()-cu?Mn(e,0):su|=t),xe(e,n)}function Zc(e,n){n===0&&(e.mode&1?(n=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):n=1);var t=de();e=en(e,n),e!==null&&(gr(e,n,t),xe(e,t))}function $p(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Zc(e,t)}function Bp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Zc(e,t)}var Jc;Jc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ge=!1,Lp(e,n,t);ge=!!(e.flags&131072)}else ge=!1,V&&n.flags&1048576&&rc(n,gi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Jr(e,n),e=n.pendingProps;var i=ht(n,se.current);ft(n,t),i=ru(null,n,r,e,i,t);var l=iu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(l=!0,mi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zo(n),i.updater=Ai,n.stateNode=i,i._reactInternals=n,lo(n,r,e,t),n=ao(null,n,r,!0,l,t)):(n.tag=0,V&&l&&qo(n),ce(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Jr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Wp(r),e=De(r,e),i){case 0:n=uo(null,n,r,e,t);break e;case 1:n=xa(null,n,r,e,t);break e;case 11:n=va(null,n,r,e,t);break e;case 14:n=ya(null,n,r,De(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),uo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),xa(e,n,r,i,t);case 3:e:{if(Oc(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,sc(e,n),xi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=xt(Error(k(423)),n),n=wa(e,n,r,t,i);break e}else if(r!==i){i=xt(Error(k(424)),n),n=wa(e,n,r,t,i);break e}else for(ke=vn(n.stateNode.containerInfo.firstChild),Se=n,V=!0,Oe=null,t=uc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gt(),r===i){n=nn(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return cc(n),e===null&&to(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Yl(r,i)?o=null:l!==null&&Yl(r,l)&&(n.flags|=32),Ic(e,n),ce(e,n,o,t),n.child;case 6:return e===null&&to(n),null;case 13:return Mc(e,n,t);case 4:return Jo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),va(e,n,r,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,A(vi,r._currentValue),r._currentValue=o,l!==null)if(Ue(l.value,o)){if(l.children===i.children&&!ve.current){n=nn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ye(-1,t&-t),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var m=s.pending;m===null?a.next=a:(a.next=m.next,m.next=a),s.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ro(l.return,t,n),u.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),ro(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ft(n,t),i=Re(i),r=r(i),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,i=De(r,n.pendingProps),i=De(r.type,i),ya(e,n,r,i,t);case 15:return Fc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:De(r,i),Jr(e,n),n.tag=1,ye(r)?(e=!0,mi(n)):e=!1,ft(n,t),zc(n,r,i),lo(n,r,i,t),ao(null,n,r,!0,e,t);case 19:return Ac(e,n,t);case 22:return Dc(e,n,t)}throw Error(k(156,n.tag))};function ed(e,n){return Ps(e,n)}function Vp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,n,t,r){return new Vp(e,n,t,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fo)return 11;if(e===Do)return 14}return 2}function Nn(e,n){var t=e.alternate;return t===null?(t=_e(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ti(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")mu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yn:return An(t.children,i,l,n);case To:o=8,i|=8;break;case _l:return e=_e(12,t,n,i|2),e.elementType=_l,e.lanes=l,e;case zl:return e=_e(13,t,n,i),e.elementType=zl,e.lanes=l,e;case Rl:return e=_e(19,t,n,i),e.elementType=Rl,e.lanes=l,e;case cs:return Bi(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case as:o=10;break e;case ss:o=9;break e;case Fo:o=11;break e;case Do:o=14;break e;case un:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=_e(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function An(e,n,t,r){return e=_e(7,e,r,n),e.lanes=t,e}function Bi(e,n,t,r){return e=_e(22,e,r,n),e.elementType=cs,e.lanes=t,e.stateNode={isHidden:!1},e}function jl(e,n,t){return e=_e(6,e,null,n),e.lanes=t,e}function Cl(e,n,t){return n=_e(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Hp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(e,n,t,r,i,l,o,u,a){return e=new Hp(e,n,t,u,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=_e(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zo(l),e}function qp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function nd(e){if(!e)return jn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return nc(e,t,n)}return n}function td(e,n,t,r,i,l,o,u,a){return e=hu(t,r,!0,e,i,l,o,u,a),e.context=nd(null),t=e.current,r=de(),i=wn(t),l=Ye(r,i),l.callback=n??null,yn(t,l,i),e.current.lanes=i,gr(e,i,r),xe(e,r),e}function Vi(e,n,t,r){var i=n.current,l=de(),o=wn(i);return t=nd(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(i,n,o),e!==null&&(Ae(e,i,o,l),Gr(e,i,o)),o}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function za(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gu(e,n){za(e,n),(e=e.alternate)&&za(e,n)}function Qp(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}Wi.prototype.render=vu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Vi(e,n,null,null)};Wi.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){Vi(null,e,null,null)}),n[Je]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var t=0;t<sn.length&&n!==0&&n<sn[t].priority;t++);sn.splice(t,0,e),t===0&&Os(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ra(){}function bp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=Pi(o);l.call(s)}}var o=td(n,r,e,0,null,!1,!1,"",Ra);return e._reactRootContainer=o,e[Je]=o.current,rr(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var s=Pi(a);u.call(s)}}var a=hu(e,0,!1,null,null,!1,!1,"",Ra);return e._reactRootContainer=a,e[Je]=a.current,rr(e.nodeType===8?e.parentNode:e),Wn(function(){Vi(n,a,t,r)}),a}function qi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var a=Pi(o);u.call(a)}}Vi(n,o,e,i)}else o=bp(t,n,e,i,r);return Pi(o)}Ts=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ot(n.pendingLanes);t!==0&&(Mo(n,t|1),xe(n,X()),!(D&6)&&(wt=X()+500,Pn()))}break;case 13:Wn(function(){var r=en(e,1);if(r!==null){var i=de();Ae(r,e,1,i)}}),gu(e,1)}};Ao=function(e){if(e.tag===13){var n=en(e,134217728);if(n!==null){var t=de();Ae(n,e,134217728,t)}gu(e,134217728)}};Fs=function(e){if(e.tag===13){var n=wn(e),t=en(e,n);if(t!==null){var r=de();Ae(t,e,n,r)}gu(e,n)}};Ds=function(){return O};Is=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Bl=function(e,n,t){switch(n){case"input":if(Dl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ii(r);if(!i)throw Error(k(90));fs(r),Dl(r,i)}}}break;case"textarea":ms(e,t);break;case"select":n=t.value,n!=null&&at(e,!!t.multiple,n,!1)}};Ns=du;ks=Wn;var Xp={usingClientEntryPoint:!1,Events:[yr,nt,Ii,xs,ws,du]},Ft={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:Ft.bundleType,version:Ft.version,rendererPackageName:Ft.rendererPackageName,rendererConfig:Ft.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:Ft.findFiberByHostInstance||Qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{Ri=$r.inject(Kp),We=$r}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;Ce.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(n))throw Error(k(200));return qp(e,n,null,t)};Ce.createRoot=function(e,n){if(!yu(e))throw Error(k(299));var t=!1,r="",i=rd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=hu(e,1,!1,null,null,t,!1,r,i),e[Je]=n.current,rr(e.nodeType===8?e.parentNode:e),new vu(n)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Cs(n),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Wn(e)};Ce.hydrate=function(e,n,t){if(!Hi(n))throw Error(k(200));return qi(null,e,n,!0,t)};Ce.hydrateRoot=function(e,n,t){if(!yu(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=rd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=td(n,null,e,1,t??null,i,!1,l,o),e[Je]=n.current,rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Wi(n)};Ce.render=function(e,n,t){if(!Hi(n))throw Error(k(200));return qi(null,e,n,!1,t)};Ce.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(k(40));return e._reactRootContainer?(Wn(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ce.unstable_batchedUpdates=du;Ce.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Hi(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return qi(e,n,t,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(e){console.error(e)}}id(),is.exports=Ce;var Gp=is.exports,ld,Ta=Gp;ld=Ta.createRoot,Ta.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fr.apply(null,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const Fa="popstate";function Yp(e){e===void 0&&(e={});function n(i,l){let{pathname:o="/",search:u="",hash:a=""}=bn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),No("",{pathname:o,search:u,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let o=i.document.querySelector("base"),u="";if(o&&o.getAttribute("href")){let a=i.location.href,s=a.indexOf("#");u=s===-1?a:a.slice(0,s)}return u+"#"+(typeof l=="string"?l:Li(l))}function r(i,l){xu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Jp(n,t,r,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function xu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Zp(){return Math.random().toString(36).substr(2,8)}function Da(e,n){return{usr:e.state,key:e.key,idx:n}}function No(e,n,t,r){return t===void 0&&(t=null),fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?bn(n):n,{state:t,key:n&&n.key||r||Zp()})}function Li(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function bn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Jp(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,u=pn.Pop,a=null,s=m();s==null&&(s=0,o.replaceState(fr({},o.state,{idx:s}),""));function m(){return(o.state||{idx:null}).idx}function f(){u=pn.Pop;let j=m(),p=j==null?null:j-s;s=j,a&&a({action:u,location:x.location,delta:p})}function g(j,p){u=pn.Push;let d=No(x.location,j,p);t&&t(d,j),s=m()+1;let h=Da(d,s),y=x.createHref(d);try{o.pushState(h,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}l&&a&&a({action:u,location:x.location,delta:1})}function w(j,p){u=pn.Replace;let d=No(x.location,j,p);t&&t(d,j),s=m();let h=Da(d,s),y=x.createHref(d);o.replaceState(h,"",y),l&&a&&a({action:u,location:x.location,delta:0})}function v(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:Li(j);return d=d.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return u},get location(){return e(i,o)},listen(j){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Fa,f),a=j,()=>{i.removeEventListener(Fa,f),a=null}},createHref(j){return n(i,j)},createURL:v,encodeLocation(j){let p=v(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:w,go(j){return o.go(j)}};return x}var Ia;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ia||(Ia={}));function em(e,n,t){return t===void 0&&(t="/"),nm(e,n,t)}function nm(e,n,t,r){let i=typeof n=="string"?bn(n):n,l=Nt(i.pathname||"/",t);if(l==null)return null;let o=od(e);tm(o);let u=null,a=pm(l);for(let s=0;u==null&&s<o.length;++s)u=dm(o[s],a);return u}function od(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,u)=>{let a={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let s=kn([r,a.relativePath]),m=t.concat(a);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),od(l.children,n,m,s)),!(l.path==null&&!l.index)&&n.push({path:s,score:sm(s,l.index),routesMeta:m})};return e.forEach((l,o)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,o);else for(let a of ud(l.path))i(l,o,a)}),n}function ud(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=ud(r.join("/")),u=[];return u.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&u.push(...o),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function tm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:cm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const rm=/^:[\w-]+$/,im=3,lm=2,om=1,um=10,am=-2,Oa=e=>e==="*";function sm(e,n){let t=e.split("/"),r=t.length;return t.some(Oa)&&(r+=am),n&&(r+=lm),t.filter(i=>!Oa(i)).reduce((i,l)=>i+(rm.test(l)?im:l===""?om:um),r)}function cm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function dm(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let u=0;u<r.length;++u){let a=r[u],s=u===r.length-1,m=l==="/"?n:n.slice(l.length)||"/",f=ko({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},m),g=a.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:kn([l,f.pathname]),pathnameBase:gm(kn([l,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(l=kn([l,f.pathnameBase]))}return o}function ko(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=fm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((s,m,f)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let x=u[f]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const v=u[f];return w&&!v?s[g]=void 0:s[g]=(v||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:o,pattern:e}}function fm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),xu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,a)=>(r.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function pm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return xu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Nt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function mm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?bn(e):e,l;return t?(t=ad(t),t.startsWith("/")?l=Ma(t.substring(1),"/"):l=Ma(t,n)):l=n,{pathname:l,search:vm(r),hash:ym(i)}}function Ma(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function El(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function wu(e,n){let t=hm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Nu(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=bn(e):(i=fr({},e),q(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,u;if(o==null)u=t;else{let f=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}u=f>=0?n[f]:"/"}let a=mm(i,u),s=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(s||m)&&(a.pathname+="/"),a}const ad=e=>e.replace(/\/\/+/g,"/"),kn=e=>ad(e.join("/")),gm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ym=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sd=["post","put","patch","delete"];new Set(sd);const wm=["get",...sd];new Set(wm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pr.apply(null,arguments)}const Qi=N.createContext(null),cd=N.createContext(null),rn=N.createContext(null),bi=N.createContext(null),qe=N.createContext({outlet:null,matches:[],isDataRoute:!1}),dd=N.createContext(null);function Nm(e,n){let{relative:t}=n===void 0?{}:n;Ct()||q(!1);let{basename:r,navigator:i}=N.useContext(rn),{hash:l,pathname:o,search:u}=Ki(e,{relative:t}),a=o;return r!=="/"&&(a=o==="/"?r:kn([r,o])),i.createHref({pathname:a,search:u,hash:l})}function Ct(){return N.useContext(bi)!=null}function Xn(){return Ct()||q(!1),N.useContext(bi).location}function fd(e){N.useContext(rn).static||N.useLayoutEffect(e)}function pd(){let{isDataRoute:e}=N.useContext(qe);return e?Om():km()}function km(){Ct()||q(!1);let e=N.useContext(Qi),{basename:n,future:t,navigator:r}=N.useContext(rn),{matches:i}=N.useContext(qe),{pathname:l}=Xn(),o=JSON.stringify(wu(i,t.v7_relativeSplatPath)),u=N.useRef(!1);return fd(()=>{u.current=!0}),N.useCallback(function(s,m){if(m===void 0&&(m={}),!u.current)return;if(typeof s=="number"){r.go(s);return}let f=Nu(s,JSON.parse(o),l,m.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:kn([n,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[n,r,o,l,e])}const Sm=N.createContext(null);function jm(e){let n=N.useContext(qe).outlet;return n&&N.createElement(Sm.Provider,{value:e},n)}function Xi(){let{matches:e}=N.useContext(qe),n=e[e.length-1];return n?n.params:{}}function Ki(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=N.useContext(rn),{matches:i}=N.useContext(qe),{pathname:l}=Xn(),o=JSON.stringify(wu(i,r.v7_relativeSplatPath));return N.useMemo(()=>Nu(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function Cm(e,n){return Em(e,n)}function Em(e,n,t,r){Ct()||q(!1);let{navigator:i}=N.useContext(rn),{matches:l}=N.useContext(qe),o=l[l.length-1],u=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=Xn(),m;if(n){var f;let j=typeof n=="string"?bn(n):n;a==="/"||(f=j.pathname)!=null&&f.startsWith(a)||q(!1),m=j}else m=s;let g=m.pathname||"/",w=g;if(a!=="/"){let j=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=em(e,{pathname:w}),x=Rm(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},u,j.params),pathname:kn([a,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?a:kn([a,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,t,r);return n&&x?N.createElement(bi.Provider,{value:{location:pr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:pn.Pop}},x):x}function Pm(){let e=Im(),n=xm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),t?N.createElement("pre",{style:i},t):null,null)}const Lm=N.createElement(Pm,null);class _m extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?N.createElement(qe.Provider,{value:this.props.routeContext},N.createElement(dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zm(e){let{routeContext:n,match:t,children:r}=e,i=N.useContext(Qi);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(qe.Provider,{value:n},r)}function Rm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,u=(i=t)==null?void 0:i.errors;if(u!=null){let m=o.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id])!==void 0);m>=0||q(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,s=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let f=o[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=m),f.route.id){let{loaderData:g,errors:w}=t,v=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||v){a=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((m,f,g)=>{let w,v=!1,x=null,j=null;t&&(w=u&&f.route.id?u[f.route.id]:void 0,x=f.route.errorElement||Lm,a&&(s<0&&g===0?(Mm("route-fallback"),v=!0,j=null):s===g&&(v=!0,j=f.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,g+1)),d=()=>{let h;return w?h=x:v?h=j:f.route.Component?h=N.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,N.createElement(zm,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?N.createElement(_m,{location:t.location,revalidation:t.revalidation,component:x,error:w,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var md=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(md||{}),hd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hd||{});function Tm(e){let n=N.useContext(Qi);return n||q(!1),n}function Fm(e){let n=N.useContext(cd);return n||q(!1),n}function Dm(e){let n=N.useContext(qe);return n||q(!1),n}function gd(e){let n=Dm(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function Im(){var e;let n=N.useContext(dd),t=Fm(),r=gd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Om(){let{router:e}=Tm(md.UseNavigateStable),n=gd(hd.UseNavigateStable),t=N.useRef(!1);return fd(()=>{t.current=!0}),N.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pr({fromRouteId:n},l)))},[e,n])}const Aa={};function Mm(e,n,t){Aa[e]||(Aa[e]=!0)}function Am(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hn(e){let{to:n,replace:t,state:r,relative:i}=e;Ct()||q(!1);let{future:l,static:o}=N.useContext(rn),{matches:u}=N.useContext(qe),{pathname:a}=Xn(),s=pd(),m=Nu(n,wu(u,l.v7_relativeSplatPath),a,i==="path"),f=JSON.stringify(m);return N.useEffect(()=>s(JSON.parse(f),{replace:t,state:r,relative:i}),[s,f,i,t,r]),null}function Um(e){return jm(e.context)}function on(e){q(!1)}function $m(e){let{basename:n="/",children:t=null,location:r,navigationType:i=pn.Pop,navigator:l,static:o=!1,future:u}=e;Ct()&&q(!1);let a=n.replace(/^\/*/,"/"),s=N.useMemo(()=>({basename:a,navigator:l,static:o,future:pr({v7_relativeSplatPath:!1},u)}),[a,u,l,o]);typeof r=="string"&&(r=bn(r));let{pathname:m="/",search:f="",hash:g="",state:w=null,key:v="default"}=r,x=N.useMemo(()=>{let j=Nt(m,a);return j==null?null:{location:{pathname:j,search:f,hash:g,state:w,key:v},navigationType:i}},[a,m,f,g,w,v,i]);return x==null?null:N.createElement(rn.Provider,{value:s},N.createElement(bi.Provider,{children:t,value:x}))}function Bm(e){let{children:n,location:t}=e;return Cm(So(n),t)}new Promise(()=>{});function So(e,n){n===void 0&&(n=[]);let t=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let l=[...n,i];if(r.type===N.Fragment){t.push.apply(t,So(r.props.children,l));return}r.type!==on&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=So(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_i.apply(null,arguments)}function vd(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Vm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wm(e,n){return e.button===0&&(!n||n==="_self")&&!Vm(e)}const Hm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Qm="6";try{window.__reactRouterVersion=Qm}catch{}const bm=N.createContext({isTransitioning:!1}),Xm="startTransition",Ua=Ad[Xm];function Km(e){let{basename:n,children:t,future:r,window:i}=e,l=N.useRef();l.current==null&&(l.current=Yp({window:i,v5Compat:!0}));let o=l.current,[u,a]=N.useState({action:o.action,location:o.location}),{v7_startTransition:s}=r||{},m=N.useCallback(f=>{s&&Ua?Ua(()=>a(f)):a(f)},[a,s]);return N.useLayoutEffect(()=>o.listen(m),[o,m]),N.useEffect(()=>Am(r),[r]),N.createElement($m,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o,future:r})}const Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=N.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:u,target:a,to:s,preventScrollReset:m,viewTransition:f}=n,g=vd(n,Hm),{basename:w}=N.useContext(rn),v,x=!1;if(typeof s=="string"&&Ym.test(s)&&(v=s,Gm))try{let h=new URL(window.location.href),y=s.startsWith("//")?new URL(h.protocol+s):new URL(s),S=Nt(y.pathname,w);y.origin===h.origin&&S!=null?s=S+y.search+y.hash:x=!0}catch{}let j=Nm(s,{relative:i}),p=Jm(s,{replace:o,state:u,target:a,preventScrollReset:m,relative:i,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return N.createElement("a",_i({},g,{href:v||j,onClick:x||l?r:d,ref:t,target:a}))}),Br=N.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:o=!1,style:u,to:a,viewTransition:s,children:m}=n,f=vd(n,qm),g=Ki(a,{relative:f.relative}),w=Xn(),v=N.useContext(cd),{navigator:x,basename:j}=N.useContext(rn),p=v!=null&&eh(g)&&s===!0,d=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,h=w.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(h=h.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&j&&(y=Nt(y,j)||y);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let L=h===d||!o&&h.startsWith(d)&&h.charAt(S)==="/",P=y!=null&&(y===d||!o&&y.startsWith(d)&&y.charAt(d.length)==="/"),_={isActive:L,isPending:P,isTransitioning:p},M=L?r:void 0,R;typeof l=="function"?R=l(_):R=[l,L?"active":null,P?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ee=typeof u=="function"?u(_):u;return N.createElement(K,_i({},f,{"aria-current":M,className:R,ref:t,style:ee,to:a,viewTransition:s}),typeof m=="function"?m(_):m)});var jo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jo||(jo={}));var $a;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($a||($a={}));function Zm(e){let n=N.useContext(Qi);return n||q(!1),n}function Jm(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:u}=n===void 0?{}:n,a=pd(),s=Xn(),m=Ki(e,{relative:o});return N.useCallback(f=>{if(Wm(f,t)){f.preventDefault();let g=r!==void 0?r:Li(s)===Li(m);a(e,{replace:g,state:i,preventScrollReset:l,relative:o,viewTransition:u})}},[s,a,m,r,i,t,e,l,o,u])}function eh(e,n){n===void 0&&(n={});let t=N.useContext(bm);t==null&&q(!1);let{basename:r}=Zm(jo.useViewTransitionState),i=Ki(e,{relative:n.relative});if(!t.isTransitioning)return!1;let l=Nt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Nt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ko(i.pathname,o)!=null||ko(i.pathname,l)!=null}const bt=(e,n)=>{try{const t=localStorage.getItem(e);return t==null?n:JSON.parse(t)}catch{return n}},ku=(e,n)=>{try{localStorage.setItem(e,JSON.stringify(n))}catch{}},Pl="cn-progress";function Gi(e){const n=`cn:solved:${e}`,[t,r]=N.useState(()=>bt(n,{}));N.useEffect(()=>{const l=()=>r(bt(n,{}));return l(),window.addEventListener(Pl,l),()=>window.removeEventListener(Pl,l)},[n]);const i=N.useCallback((l,o=!0)=>{const u=bt(n,{});o?u[l]=!0:delete u[l],ku(n,u),r({...u}),window.dispatchEvent(new Event(Pl))},[n]);return[t,i]}function nh(){const[e,n]=N.useState(()=>bt("cn:theme","auto"));return N.useEffect(()=>{const t=document.documentElement;e==="auto"?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e),ku("cn:theme",e)},[e]),[e,n]}function th(){const[e,n]=nh(),{pathname:t}=Xn();ts.useEffect(()=>window.scrollTo(0,0),[t]);const r={auto:"light",light:"dark",dark:"auto"},i={auto:"🌓",light:"☀️",dark:"🌙"};return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"top",children:c.jsxs("div",{className:"wrap top-in",children:[c.jsxs(K,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark",children:"{ }"}),c.jsx("span",{children:"কোড নোট"})]}),c.jsxs("nav",{className:"nav",children:[c.jsx(Br,{to:"/",end:!0,children:"হোম"}),c.jsx(Br,{to:"/c",children:"C"}),c.jsx(Br,{to:"/cpp",children:"C++"}),c.jsx(Br,{to:"/cheatsheet/c",children:"চিটশিট"})]}),c.jsx("button",{className:"btn btn-ghost btn-sm theme",onClick:()=>n(r[e]),title:`থিম: ${e}`,children:i[e]})]})}),c.jsx("main",{className:"wrap main",children:c.jsx(Um,{})}),c.jsx("footer",{className:"foot",children:c.jsx("div",{className:"wrap",children:"C ও C++ এক্সাম নোট · কোড পড়ো, নিজে লেখো, আউটপুট মেলাও"})})]})}const rh=[{id:"s1",no:"১",title:"বেসিক প্রোগ্রাম (Basic Programs)",items:[{id:"1-1",no:"১.১",name:"Hello World",tip:"সব C প্রোগ্রামের কাঠামো (structure) এখান থেকেই শুরু — #include, main(), return 0;।",code:`#include <stdio.h>
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
পছন্দ: `,flags:[]}]}],ih=[{id:"s1",no:"১",title:"বেসিক প্রোগ্রাম (Basic Programs)",items:[{id:"1-1",no:"১.১",name:"Hello World",tip:"সব C++ প্রোগ্রামের কাঠামো (structure) এখান থেকেই শুরু — #include <iostream>, using namespace std;, main(), return 0;। C এ printf() ব্যবহার হতো, C++ এ cout ব্যবহার হয়।",code:`#include <iostream>
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
পছন্দ: `,flags:[]}]}],lh={c:[{title:"কুইক রিভিশন — শেষ মুহূর্তের টিপস",blocks:[{type:"table",rows:[["ধরন","মূল কৌশল"],["Prime","2 থেকে √n পর্যন্ত ভাগ চেক"],["Palindrome (সংখ্যা/স্ট্রিং)","উল্টিয়ে বা দুই প্রান্ত থেকে তুলনা"],["Factorial/Power","গুণের identity = 1 দিয়ে শুরু, লুপ বা রিকার্সন"],["GCD","ইউক্লিড: while(b){t=b;b=a%b;a=t;}"],["Sorting","Bubble = পাশাপাশি swap; Selection = min খুঁজে swap"],["Searching","Linear = O(n), Binary = sorted হলে O(log n)"],["Recursion","সবসময় বেস কেস আগে লেখো"],["Pointer","&=address নাও, *=মান নাও (dereference)"],["Stack","LIFO — top দিয়ে push/pop"],["Queue","FIFO — front দিয়ে বের, rear দিয়ে ঢোকা"],["Tree Traversal","Pre=Root-L-R, In=L-Root-R, Post=L-R-Root"],["BFS/DFS","BFS=Queue (লেভেল ধরে), DFS=Recursion/Stack (গভীরে যাওয়া)"]]},{type:"p",text:"পরীক্ষায় দ্রুত মনে রাখার নিয়ম: যেকোনো লুপ প্রোগ্রামে প্রথমে ভাবো — “আমি কী জমা করছি (sum/product/count) আর কীসের উপর লুপ চালাচ্ছি?” — এই দুইটা প্রশ্নের উত্তর পেলেই প্রায় সব লুপ প্রোগ্রাম লেখা সহজ হয়ে যায়।"}]}],cpp:[{title:"C ↔ C++ কনভার্সন নোট",blocks:[{type:"p",text:"এই টেবিলে C আর C++ এর মূল পার্থক্যগুলো সংক্ষেপে দেওয়া হলো — পরীক্ষার আগে দ্রুত রিভিশনের জন্য।"},{type:"table",rows:[["বিষয়","C এ যেভাবে হতো","C++ এ যেভাবে হয়"],["হেডার ফাইল","#include <stdio.h>, <string.h>, <stdlib.h>","#include <iostream>, <string>, <fstream>, <vector>, <algorithm>"],["ইনপুট/আউটপুট","printf(), scanf() — ফরম্যাট স্পেসিফায়ার (%d, %s...) লাগে","cout <<, cin >> — টাইপ নিজে থেকেই বোঝা যায়, ফরম্যাট স্পেসিফায়ার লাগে না"],["স্ট্রিং","char অ্যারে + null terminator ('\\0'), strlen/strcpy/strcmp ফাংশন","std::string ক্লাস — নিজেই মেমরি ম্যানেজ করে, =, ==, + অপারেটর সরাসরি কাজ করে"],["struct ব্যবহার","ভ্যারিয়েবল ডিক্লেয়ার করতে 'struct' কীওয়ার্ড বারবার লিখতে হয় (struct Node *p;)","'struct' কীওয়ার্ড ছাড়াই সরাসরি টাইপের নাম লেখা যায় (Node *p;)"],["ডাইনামিক মেমরি","malloc(), calloc(), realloc(), free() — টাইপ cast লাগে","new, new[], delete, delete[] — টাইপ cast লাগে না; realloc() এর বদলে std::vector ব্যবহার করাই ভালো অভ্যাস"],["NULL পয়েন্টার","NULL","nullptr (টাইপ-সেফ, আধুনিক C++ স্ট্যান্ডার্ড)"],["বুলিয়ান মান","int দিয়ে 0/1 হিসেবে বোঝাতে হয় (stdbool.h ছাড়া)","bool টাইপ, true/false সরাসরি ব্যবহারযোগ্য"],["Call by Reference","শুধু পয়েন্টার (*) দিয়ে সম্ভব — void f(int *x)","পয়েন্টার ছাড়াই reference (&) দিয়ে সম্ভব — void f(int &x)"],["ফাইল হ্যান্ডলিং","FILE*, fopen(), fprintf(), fgets(), fclose()","ifstream, ofstream, fstream — <<, >>, getline() অপারেটর/ফাংশন"],["সর্টিং/সার্চিং","নিজে বাবল সর্ট, লিনিয়ার সার্চ ইত্যাদি লিখতে হয়","<algorithm> লাইব্রেরির sort(), find() ইত্যাদি built-in ফাংশন সরাসরি ব্যবহারযোগ্য (তবে অ্যালগরিদম শেখার জন্য ম্যানুয়াল কোডও এই নোটে রাখা হয়েছে)"],["ডেটা স্ট্রাকচার (Stack/Queue)","নিজে অ্যারে/লিঙ্কড লিস্ট দিয়ে ইমপ্লিমেন্ট করতে হয়","নিজে ইমপ্লিমেন্ট করা যায় (এই নোটে যেভাবে দেখানো হয়েছে), অথবা STL এর std::stack, std::queue সরাসরি ব্যবহারযোগ্য"],["ভ্যারিয়েবল ডিক্লেয়ারেশন","সাধারণত ফাংশনের শুরুতে সব ভ্যারিয়েবল ডিক্লেয়ার করার রীতি","যেকোনো জায়গায় প্রয়োজনমতো ডিক্লেয়ার করা যায় (for লুপের ভিতরেও)"],["ফাংশন ওভারলোডিং","সম্ভব না — একই নামে দুইটা ফাংশন থাকতে পারে না","সম্ভব — প্যারামিটার ভিন্ন হলে একই নামে একাধিক ফাংশন লেখা যায়"],["namespace","নেই","using namespace std; — স্ট্যান্ডার্ড লাইব্রেরির নাম (cout, cin, string...) সরাসরি ব্যবহারযোগ্য করে"]]},{type:"h",text:"সংক্ষেপে মনে রাখার নিয়ম"},{type:"p",text:"C প্রোগ্রাম C++ এ কনভার্ট করতে হলে প্রথমে ভাবো — headers (stdio.h → iostream), I/O (printf/scanf → cout/cin), string (char[] → string), memory (malloc/free → new/delete), আর struct/NULL/bool এর ছোট পার্থক্যগুলো। যুক্তি ও অ্যালগরিদম একই থাকে, শুধু সিনট্যাক্স ও লাইব্রেরি বদলায়।"},{type:"h",text:"বিস্তারিত পার্থক্য"},{type:"p",text:"উপরের প্রতিটি প্রোগ্রাম C থেকে C++ এ কনভার্ট করার সময় যে সাধারণ পরিবর্তনগুলো বারবার এসেছে, সেগুলো এক জায়গায় সংক্ষেপে দেওয়া হলো — পরীক্ষার আগে দ্রুত রিভিশনের জন্য।"},{type:"h",text:"ইনপুট/আউটপুট (I/O)"},{type:"table",rows:[["C","C++"],["#include <stdio.h>","#include <iostream>  (এবং using namespace std;)"],['printf("...", var)','cout << "..." << var  (কোনো format specifier লাগে না)'],['scanf("%d", &n)',"cin >> n  (& লাগে না, cin নিজেই address ধরে নেয়)"],["%d, %f, %c, %s ফরম্যাট স্পেসিফায়ার","লাগে না — cout/cin টাইপ নিজে থেকেই বুঝে নেয় (type-safe)"],["\\n দিয়ে নতুন লাইন",'endl বা "\\n" দুটোই চলে; endl বাফারও flush করে']]},{type:"h",text:"মেমরি ব্যবস্থাপনা (Dynamic Memory)"},{type:"table",rows:[["C","C++"],["malloc(n * sizeof(type))","new type[n]  (কাস্ট লাগে না, টাইপ-সেফ)"],["calloc(n, sizeof(type))","new type[n]()  ( () দিলে সব 0 দিয়ে initialize হয়)"],["realloc(ptr, newSize)","সরাসরি কোনো বিকল্প নেই — নতুন array বানিয়ে কপি করতে হয়, অথবা std::vector ব্যবহার করাই ভালো"],["free(ptr)","delete ptr;  (single) অথবা delete[] ptr;  (array)"],["NULL","nullptr  (টাইপ-সেফ, C++11 থেকে প্রস্তাবিত)"]]},{type:"h",text:"স্ট্রাকচার ও টাইপ"},{type:"table",rows:[["C","C++"],["struct Student s1; (struct কীওয়ার্ড বাধ্যতামূলক)","Student s1;  (struct কীওয়ার্ড ছাড়াই সরাসরি টাইপের নাম লেখা যায়)"],["struct Node* (পয়েন্টার ডিক্লেয়ারেশনেও struct লাগে)","Node*  (আলাদা করে struct লেখা লাগে না)"],["char name[50]; (ফিক্সড সাইজ char array)","string name;  (#include <string>, ডাইনামিক সাইজ, ==, + অপারেটর সাপোর্ট করে)"],["int isValid; (বুলিয়ানের বদলে int 0/1)","bool isValid;  (সত্যিকারের বুলিয়ান টাইপ, true/false)"]]},{type:"h",text:"ফাংশন ও প্যারামিটার"},{type:"table",rows:[["C","C++"],["void f(int *x) { *x = ...; }  (Call by reference করতে পয়েন্টার লাগে)","void f(int &x) { x = ...; }  (রেফারেন্স প্যারামিটার — পয়েন্টার সিনট্যাক্স ছাড়াই মূল ভ্যারিয়েবল বদলানো যায়)"],["ফাংশন ওভারলোডিং সাপোর্ট করে না (একই নামে ভিন্ন প্যারামিটারের একাধিক ফাংশন)","ফাংশন ওভারলোডিং সাপোর্ট করে"],["ডিফল্ট আর্গুমেন্ট সাপোর্ট করে না","ডিফল্ট আর্গুমেন্ট সাপোর্ট করে (যেমন void f(int x = 0))"]]},{type:"h",text:"ফাইল হ্যান্ডলিং"},{type:"table",rows:[["C","C++"],['FILE *fp = fopen("file.txt", "w");','ofstream fp("file.txt");  (লেখার জন্য) / ifstream (পড়ার জন্য)'],['fprintf(fp, "..."), fscanf(fp, "...")','fp << "...";  /  fp >> var;  (স্ট্রিম অপারেটর)'],["fgets(buffer, size, fp)","getline(fp, line)  (std::string এ সরাসরি সম্পূর্ণ লাইন পড়া যায়)"],["fclose(fp)","fp.close();  (আর ডেস্ট্রাক্টর নিজে থেকেই বন্ধ করে দেয় স্কোপ শেষ হলে)"]]},{type:"h",text:"অন্যান্য গুরুত্বপূর্ণ পার্থক্য"},{type:"table",rows:[["C","C++"],["ভ্যারিয়েবলের নাম যেমন max, min, queue, hex ইচ্ছেমতো ব্যবহার করা যায়","সতর্ক থাকতে হয় — std::max, std::min, std::queue, std::hex ইত্যাদি স্ট্যান্ডার্ড লাইব্রেরির নামের সাথে সংঘর্ষ এড়াতে ভিন্ন নাম (যেমন mx, queueArr, hexArr) ব্যবহার করা ভালো অভ্যাস"],["ম্যানুয়ালি সব ডেটা স্ট্রাকচার (stack, queue, linked list) লিখতে হয়","চাইলে <stack>, <queue>, <vector>, <list>, <map> এর ready-made STL কন্টেইনার সরাসরি ব্যবহার করা যায় — তবে এই নোটে এক্সাম প্রস্তুতির জন্য মূল অ্যালগরিদম হাতে-কলমে লেখা রাখা হয়েছে"],["ভ্যারিয়েবল যেকোনো জায়গায় ডিক্লেয়ার করা যেত না (পুরনো C স্ট্যান্ডার্ডে ব্লকের শুরুতে লাগত)","for (int i = 0; ...) এর মতো লুপের ভিতরেই ভ্যারিয়েবল ডিক্লেয়ার করা যায় (আধুনিক C এও এখন চলে, তবে C++ এ এটাই স্বাভাবিক রীতি)"],["কম্পাইল করতে gcc file.c -o file","কম্পাইল করতে g++ file.cpp -o file"]]}]}]},Su={c:rh,cpp:ih,cheat:lh},he={c:{key:"c",label:"C",full:"C প্রোগ্রামিং",ext:"c",godbolt:"c"},cpp:{key:"cpp",label:"C++",full:"C++ প্রোগ্রামিং",ext:"cpp",godbolt:"c++"}},wr={};for(const e of["c","cpp"])wr[e]=Su[e].flatMap(n=>n.items.map(t=>({...t,sectionId:n.id,sectionNo:n.no,sectionTitle:n.title})));const yd=e=>Su[e],Yi=e=>wr[e],Qe=(e,n)=>wr[e].find(t=>t.id===n),xd=(e,n)=>wr[e].findIndex(t=>t.id===n),oh=e=>Su.cheat[e],mr=e=>e==="c"||e==="cpp",Ba=wr.c.length;function Va({lang:e}){const[n]=Gi(e),t=Object.keys(n).length,r=yd(e);return c.jsxs("div",{className:`card lang-card lang-${e}`,children:[c.jsx("div",{className:"lang-badge",children:he[e].label}),c.jsx("h2",{children:he[e].full}),c.jsxs("p",{className:"muted",children:[r.length,"টি অধ্যায় · ",Yi(e).length,"টি প্রোগ্রাম · বাংলা কমেন্ট ও মনে রাখার কৌশল"]}),c.jsx("div",{className:"bar",children:c.jsx("i",{style:{width:`${t/Ba*100}%`}})}),c.jsxs("p",{className:"small muted",children:["প্র্যাক্টিস করেছ: ",t,"/",Ba]}),c.jsxs("div",{className:"row",children:[c.jsx(K,{className:"btn btn-primary",to:`/${e}`,children:"শুরু করো →"}),c.jsx(K,{className:"btn",to:`/${e}/read/1-1`,children:"প্রথম প্রোগ্রাম"})]})]})}function uh(){return c.jsxs(c.Fragment,{children:[c.jsxs("section",{className:"hero",children:[c.jsx("p",{className:"eyebrow",children:"এক্সাম প্রস্তুতি"}),c.jsxs("h1",{children:["কোড পড়ো। ",c.jsx("em",{children:"নিজে লেখো।"}),c.jsx("br",{}),"আউটপুট মেলাও।"]}),c.jsx("p",{className:"lead",children:"C ও C++ — বেসিক থেকে ডেটা স্ট্রাকচার পর্যন্ত ৯০টি করে প্রোগ্রাম। প্রতিটিতে বাংলা কমেন্ট, মনে রাখার কৌশল আর যাচাই করা আউটপুট।"})]}),c.jsxs("section",{className:"grid2",children:[c.jsx(Va,{lang:"c"}),c.jsx(Va,{lang:"cpp"})]}),c.jsxs("section",{className:"modes",children:[c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"📖"}),c.jsx("h3",{children:"পড়ার মোড"}),c.jsx("p",{className:"muted",children:"কোড, কৌশল ও আউটপুট একসাথে। C আর C++ পাশাপাশি রেখে তুলনা করো।"})]}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"⌨️"}),c.jsx("h3",{children:"প্র্যাক্টিস মোড"}),c.jsx("p",{className:"muted",children:"শুধু নাম আর নমুনা আউটপুট দেখে নিজে কোড লেখো। চালিয়ে আউটপুট মেলাও — মিললে ✓ চিহ্ন পাবে।"})]}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"mode-ico",children:"🧾"}),c.jsx("h3",{children:"চিটশিট"}),c.jsx("p",{className:"muted",children:"কুইক রিভিশন টেবিল আর C ↔ C++ কনভার্সন নোট — পরীক্ষার আগের শেষ দেখা।"}),c.jsx(K,{to:"/cheatsheet/c",className:"small",children:"দেখো →"})]})]})]})}function ah(){const{lang:e}=Xi(),[n,t]=N.useState(""),[r]=Gi(e),i=N.useMemo(()=>mr(e)?yd(e):[],[e]);if(!mr(e))return c.jsx(Hn,{to:"/",replace:!0});const l=Yi(e).length,o=Object.keys(r).length,u=n.trim().toLowerCase(),a=i.map(s=>({...s,items:s.items.filter(m=>!u||m.name.toLowerCase().includes(u)||m.no.includes(u)||m.id.includes(u))})).filter(s=>s.items.length);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:he[e].label}),c.jsx("h1",{children:he[e].full}),c.jsxs("p",{className:"muted",children:["প্র্যাক্টিস সম্পন্ন: ",o,"/",l]})]}),c.jsxs("div",{className:"seg",children:[c.jsx(K,{className:e==="c"?"on":"",to:"/c",children:"C"}),c.jsx(K,{className:e==="cpp"?"on":"",to:"/cpp",children:"C++"})]})]}),c.jsx("div",{className:"bar",children:c.jsx("i",{style:{width:`${o/l*100}%`}})}),c.jsx("div",{className:"toolbar",children:c.jsx("input",{className:"input",type:"search",placeholder:"প্রোগ্রাম খোঁজো… (যেমন: prime, stack, ১.৪)",value:n,onChange:s=>t(s.target.value)})}),c.jsx("div",{className:"chips",children:i.map(s=>c.jsxs("a",{className:"chip",href:`#sec-${s.id}`,onClick:m=>{var f;m.preventDefault(),(f=document.getElementById(`sec-${s.id}`))==null||f.scrollIntoView({behavior:"smooth",block:"start"})},children:[s.no,". ",s.title.split("(")[0].trim()]},s.id))}),a.length===0&&c.jsx("p",{className:"muted",children:"কিছু পাওয়া যায়নি।"}),a.map(s=>c.jsxs("section",{id:`sec-${s.id}`,className:"sec",children:[c.jsxs("h2",{children:[c.jsx("span",{className:"sec-no",children:s.no})," ",s.title]}),c.jsx("ul",{className:"plist",children:s.items.map(m=>c.jsxs("li",{className:r[m.id]?"done":"",children:[c.jsxs(K,{className:"pname",to:`/${e}/read/${m.id}`,children:[c.jsx("span",{className:"pno",children:m.no}),c.jsx("span",{children:m.name}),r[m.id]&&c.jsx("span",{className:"tick",title:"প্র্যাক্টিস সম্পন্ন",children:"✓"})]}),c.jsxs("span",{className:"pact",children:[c.jsx(K,{className:"btn btn-sm",to:`/${e}/read/${m.id}`,children:"পড়ো"}),c.jsx(K,{className:"btn btn-sm btn-primary",to:`/${e}/practice/${m.id}`,children:"প্র্যাক্টিস"})]})]},m.id))})]},s.id))]})}const sh=new Set("auto break case const continue default do else enum extern for goto if inline register return sizeof static struct switch typedef union volatile while using namespace class public private protected new delete this template typename try catch throw true false nullptr bool".split(" ")),ch=new Set("int char float double long short unsigned signed void FILE size_t string vector cout cin endl cerr ifstream ofstream fstream queue stack map set pair NULL EOF".split(" ")),Vr=/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(^[ \t]*#[ \t]*\w+(?:[ \t]*<[^>\n]+>|[ \t]*"[^"\n]*")?)|(\b\d+(?:\.\d+)?[fFlLuU]*\b)|([A-Za-z_]\w*)/gm;function dh(e){const n=[];let t=0,r,i=0;for(Vr.lastIndex=0;r=Vr.exec(e);){r.index>t&&n.push(e.slice(t,r.index));const[l,o,u,a,s,m]=r;let f=null;o?f="tk-com":u?f="tk-str":a?f="tk-pre":s?f="tk-num":m&&(sh.has(m)?f="tk-kw":ch.has(m)?f="tk-ty":e[Vr.lastIndex]==="("&&(f="tk-fn")),n.push(f?c.jsx("span",{className:f,children:l},i++):l),t=Vr.lastIndex}return t<e.length&&n.push(e.slice(t)),n}function ri({code:e,label:n,lang:t}){const[r,i]=N.useState(!1),l=async()=>{try{await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),1400)}catch{}},o=e.split(`
`).length;return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-bar",children:[c.jsx("span",{className:`pill pill-${t||"c"}`,children:n}),c.jsxs("span",{className:"muted small",children:[o," লাইন"]}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:l,children:r?"✓ কপি হয়েছে":"কপি"})]}),c.jsx("pre",{children:c.jsx("code",{children:dh(e)})})]})}function Xt({title:e,text:n,stdin:t}){return c.jsxs("div",{className:"term",children:[c.jsx("div",{className:"term-bar",children:e}),t?c.jsxs("div",{className:"term-in",children:[c.jsx("span",{className:"muted small",children:"ইনপুট:"})," ",c.jsx("code",{children:t.trim().split(`
`).join("  ↵  ")})]}):null,c.jsx("pre",{children:n===""?c.jsx("span",{className:"muted",children:"(কোনো আউটপুট নেই)"}):n})]})}function fh(){const{lang:e,id:n}=Xi(),[t,r]=N.useState(!1),[i]=Gi(e);if(!mr(e))return c.jsx(Hn,{to:"/",replace:!0});const l=Qe(e,n);if(!l)return c.jsx(Hn,{to:`/${e}`,replace:!0});const o=Yi(e),u=xd(e,n),a=o[u-1],s=o[u+1],m=e==="c"?"cpp":"c",f=Qe(m,n);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"crumbs",children:[c.jsx(K,{to:`/${e}`,children:he[e].label})," ",c.jsx("span",{children:"›"})," ",c.jsxs("span",{children:[l.sectionNo,". ",l.sectionTitle.split("(")[0]]})]}),c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:he[e].label}),c.jsxs("h1",{children:[c.jsx("span",{className:"pno big",children:l.no})," ",l.name," ",i[n]&&c.jsx("span",{className:"tick",children:"✓"})]})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:`btn ${t?"btn-on":""}`,onClick:()=>r(!t),children:"C ↔ C++ পাশাপাশি"}),c.jsx(K,{className:"btn btn-primary",to:`/${e}/practice/${n}`,children:"⌨ প্র্যাক্টিস করো"})]})]}),l.tip&&c.jsxs("div",{className:"tip",children:[c.jsx("b",{children:"মনে রাখার কৌশল"}),c.jsx("p",{children:l.tip})]}),t?c.jsxs("div",{className:"grid2 tight",children:[c.jsxs("div",{children:[c.jsx(ri,{code:Qe("c",n).code,label:"C",lang:"c"}),c.jsx(Xt,{title:"C আউটপুট",text:Qe("c",n).output,stdin:Qe("c",n).input})]}),c.jsxs("div",{children:[c.jsx(ri,{code:Qe("cpp",n).code,label:"C++",lang:"cpp"}),c.jsx(Xt,{title:"C++ আউটপুট",text:Qe("cpp",n).output,stdin:Qe("cpp",n).input})]})]}):c.jsxs(c.Fragment,{children:[c.jsx(ri,{code:l.code,label:he[e].label,lang:e}),c.jsx(Xt,{title:"আউটপুট",text:l.output,stdin:l.input}),f&&c.jsxs("p",{className:"small muted",children:["এই প্রোগ্রামটি ",c.jsxs(K,{to:`/${m}/read/${n}`,children:[he[m].label,"-এ দেখো"]})]})]}),l.flags.includes("address")&&c.jsx("p",{className:"small muted",children:"ℹ️ address প্রতিবার আলাদা আসে (0x7ffe… এর মান বদলায়) — মান নয়, ধরনটা দেখো।"}),l.flags.includes("needsFile")&&c.jsx("p",{className:"small muted",children:"ℹ️ এই প্রোগ্রাম চালানোর আগে আগের ফাইল-রাইটিং প্রোগ্রাম (৯.১) একবার চালাতে হবে।"}),c.jsxs("div",{className:"pager",children:[a?c.jsxs(K,{className:"btn",to:`/${e}/read/${a.id}`,children:["← ",a.no," ",a.name]}):c.jsx("span",{}),s?c.jsxs(K,{className:"btn",to:`/${e}/read/${s.id}`,children:[s.no," ",s.name," →"]}):c.jsx("span",{})]})]})}function Wa(e,n=!1){let t=(e??"").replace(/\r\n?/g,`
`);return n&&(t=t.replace(/0x[0-9a-fA-F]+/g,"0xADDR")),t.split(`
`).map(r=>r.replace(/[ \t]+$/g,"")).join(`
`).replace(/\n+$/g,"").replace(/^\n+/g,"")}function Ha(e,n,t=!1){const r=Wa(e,t).split(`
`),i=Wa(n,t).split(`
`),l=Math.max(r.length,i.length),o=[];let u=!0;for(let a=0;a<l;a++){const s=r[a]===i[a];s||(u=!1),o.push({n:a+1,e:r[a],a:i[a],same:s})}return{ok:u,rows:o}}const wd="https://godbolt.org/api",ph={c:"cg132","c++":"g132"},Wr={};async function mh(e){if(Wr[e])return Wr[e];try{const r=(await(await fetch(`${wd}/compilers/${e}?fields=id,name,semver,instructionSet`,{headers:{Accept:"application/json"}})).json()).filter(i=>/^x86-64 gcc \d+(\.\d+)*$/.test(i.name)&&(!i.instructionSet||i.instructionSet==="amd64")).sort((i,l)=>parseFloat(l.name.split(" ").pop())-parseFloat(i.name.split(" ").pop()));if(r.length)return Wr[e]=r[0].id}catch{}return Wr[e]=ph[e]}const Hr=e=>(e||[]).map(n=>n.text).join(`
`);async function hh({lang:e,source:n,stdin:t}){const r=e==="c"?"c":"c++",i=await mh(r),l={source:n,lang:r,options:{userArguments:e==="c"?"-lm":"",executeParameters:{args:[],stdin:t||""},compilerOptions:{executorRequest:!0},filters:{execute:!0},tools:[],libraries:[]},allowStoreCodeDebug:!1},o=new AbortController,u=setTimeout(()=>o.abort(),25e3);try{const a=await fetch(`${wd}/compiler/${i}/compile`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l),signal:o.signal});if(!a.ok)throw new Error(`সার্ভার সাড়া দিয়েছে: ${a.status}`);const s=await a.json(),m=s.buildResult||{};return m.code&&m.code!==0?{stage:"compile",error:Hr(m.stderr)||Hr(s.stderr)||"Compile error",stdout:""}:{stage:"run",code:s.code,stdout:Hr(s.stdout),stderr:Hr(s.stderr)}}finally{clearTimeout(u)}}const gh={c:`#include <stdio.h>

int main() {
    
    return 0;
}
`,cpp:`#include <iostream>
using namespace std;

int main() {
    
    return 0;
}
`};function qa({result:e}){return c.jsxs("div",{className:"diff",children:[c.jsxs("div",{className:"diff-h",children:[c.jsx("span",{children:"#"}),c.jsx("span",{children:"প্রত্যাশিত"}),c.jsx("span",{children:"তোমার"})]}),e.rows.map(n=>c.jsxs("div",{className:`diff-r ${n.same?"":"bad"}`,children:[c.jsx("span",{children:n.n}),c.jsx("pre",{children:n.e??c.jsx("i",{className:"muted",children:"—"})}),c.jsx("pre",{children:n.a??c.jsx("i",{className:"muted",children:"—"})})]},n.n))]})}function vh(){const{lang:e,id:n}=Xi();if(!mr(e))return c.jsx(Hn,{to:"/",replace:!0});const t=Qe(e,n);return t?c.jsx(yh,{lang:e,it:t},`${e}-${n}`):c.jsx(Hn,{to:`/${e}`,replace:!0})}function yh({lang:e,it:n}){const t=n.id,r=`cn:draft:${e}:${t}`,[i,l]=N.useState(()=>bt(r,"")),[o,u]=N.useState(n.input),[a,s]=N.useState(!1),[m,f]=N.useState(!1),[g,w]=N.useState(!1),[v,x]=N.useState(null),[j,p]=N.useState(""),[d,h]=N.useState(null),[y,S]=Gi(e),L=N.useRef(null),P=n.flags.includes("address");N.useEffect(()=>{const I=setTimeout(()=>ku(r,i),300);return()=>clearTimeout(I)},[i,r]);const _=Yi(e),M=xd(e,t),R=_[M-1],ee=_[M+1],Ln=I=>{const we=I.target;if(I.key==="Tab"){I.preventDefault();const C=we.selectionStart,z=we.selectionEnd,T=i.slice(0,C)+"    "+i.slice(z);l(T),requestAnimationFrame(()=>we.selectionStart=we.selectionEnd=C+4)}else if(I.key==="Enter"){const C=we.selectionStart,z=i.lastIndexOf(`
`,C-1)+1,T=i.slice(z,C);let U=(T.match(/^[ \t]*/)||[""])[0];/\{\s*$/.test(T)&&(U+="    "),I.preventDefault();const G=i.slice(0,C)+`
`+U+i.slice(we.selectionEnd);l(G),requestAnimationFrame(()=>we.selectionStart=we.selectionEnd=C+1+U.length)}},_n=I=>{if(!(o.trim()===n.input.trim()))return{verdict:null,note:"ইনপুট বদলেছ — তাই প্রত্যাশিত আউটপুটের সাথে মেলানো হয়নি।"};const C=Ha(n.output,I,P);return C.ok&&S(t,!0),{verdict:C}},Nr=async()=>{if(!i.trim())return x({kind:"err",error:"আগে কিছু কোড লেখো 🙂"});w(!0),x(null);try{const I=await hh({lang:e,source:i,stdin:o});I.stage==="compile"?x({kind:"compile",error:I.error}):x({kind:"run",stdout:I.stdout,stderr:I.stderr,exit:I.code,..._n(I.stdout)})}catch{x({kind:"net",error:"অনলাইন কম্পাইলারে পৌঁছানো যায়নি (ইন্টারনেট/ব্লক হতে পারে)। নিচের “নিজের কম্পাইলারে চালিয়েছ?” অংশ ব্যবহার করে আউটপুট পেস্ট করে মেলাও।"})}finally{w(!1)}},Zi=()=>{const I=Ha(n.output,j,P);h(I),I.ok&&S(t,!0)};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"crumbs",children:[c.jsx(K,{to:`/${e}`,children:he[e].label})," ",c.jsx("span",{children:"›"})," ",c.jsx("span",{children:"প্র্যাক্টিস"})]}),c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:`pill pill-${e}`,children:he[e].label}),c.jsxs("h1",{children:[c.jsx("span",{className:"pno big",children:n.no})," ",n.name," ",y[t]&&c.jsx("span",{className:"tick",children:"✓"})]})]}),c.jsx(K,{className:"btn",to:`/${e}/read/${t}`,children:"📖 পড়ার মোডে"})]}),c.jsxs("div",{className:"prac",children:[c.jsxs("div",{className:"prac-l",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"কাজ"}),c.jsxs("p",{children:[c.jsx("b",{children:n.name})," প্রোগ্রামটি ",he[e].label,"-এ লেখো, যেন নিচের ইনপুটে ঠিক নিচের আউটপুট আসে।"]}),c.jsx(Xt,{title:"প্রত্যাশিত আউটপুট",text:n.output,stdin:n.input}),P&&c.jsx("p",{className:"small muted",children:"address-এর মান প্রতিবার আলাদা — মেলানোর সময় 0x… অংশ ধরা হয় না।"}),n.flags.includes("needsFile")&&c.jsx("p",{className:"small muted",children:"এই প্রোগ্রামে আগে তৈরি করা ফাইল লাগে (৯.১) — অনলাইন চালানোয় নাও মিলতে পারে; নিজের কম্পাইলারে চালিয়ে পেস্ট করো।"})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"row between",children:[c.jsx("h3",{children:"হিন্ট"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>s(!a),children:a?"লুকাও":"দেখো"})]}),a?c.jsx("p",{children:n.tip||"এই প্রোগ্রামে আলাদা হিন্ট নেই।"}):c.jsx("p",{className:"muted small",children:"আটকে গেলে খুলে দেখো।"})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"row between",children:[c.jsx("h3",{children:"উত্তর কোড"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>f(!m),children:m?"লুকাও":"দেখো"})]}),!m&&c.jsx("p",{className:"muted small",children:"আগে নিজে চেষ্টা করো, তারপর মিলিয়ে নাও।"})]})]}),c.jsxs("div",{className:"prac-r",children:[c.jsxs("div",{className:"editor",children:[c.jsxs("div",{className:"code-bar",children:[c.jsxs("span",{className:`pill pill-${e}`,children:["main.",he[e].ext]}),c.jsx("span",{className:"grow"}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>l(gh[e]),children:"স্কেলেটন"}),c.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>l(""),children:"মুছো"})]}),c.jsx("textarea",{ref:L,className:"ta",spellCheck:!1,autoCapitalize:"off",autoCorrect:"off",value:i,onChange:I=>l(I.target.value),onKeyDown:Ln,placeholder:`// এখানে ${he[e].label} কোড লেখো…`,rows:16})]}),c.jsxs("div",{className:"stdin",children:[c.jsx("label",{className:"small muted",htmlFor:"stdin",children:"ইনপুট (stdin)"}),c.jsx("textarea",{id:"stdin",className:"ta ta-sm",spellCheck:!1,value:o,onChange:I=>u(I.target.value),rows:2})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn btn-primary",disabled:g,onClick:Nr,children:g?"চলছে…":"▶ চালাও ও মেলাও"}),y[t]?c.jsx("button",{className:"btn",onClick:()=>S(t,!1),children:"✓ সম্পন্ন — চিহ্ন তুলে দাও"}):c.jsx("button",{className:"btn",onClick:()=>S(t,!0),title:"নিজে মিলিয়ে দেখলে হাতে চিহ্ন দাও",children:"নিজে মিলিয়েছি ✓"})]}),v&&c.jsxs("div",{className:"result",children:[v.kind==="run"&&v.verdict&&c.jsx("div",{className:`verdict ${v.verdict.ok?"ok":"no"}`,children:v.verdict.ok?"✅ আউটপুট মিলেছে! দারুণ।":"❌ আউটপুট মেলেনি — পার্থক্যগুলো দেখো"}),v.kind==="run"&&!v.verdict&&c.jsx("div",{className:"verdict info",children:v.note}),v.kind==="compile"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"verdict no",children:"⚠️ কম্পাইল এরর"}),c.jsx("pre",{className:"errbox",children:v.error})]}),(v.kind==="net"||v.kind==="err")&&c.jsx("div",{className:"verdict info",children:v.error}),v.kind==="run"&&c.jsxs(c.Fragment,{children:[v.verdict&&!v.verdict.ok&&c.jsx(qa,{result:v.verdict}),c.jsx(Xt,{title:`তোমার আউটপুট${v.exit?` (exit code ${v.exit})`:""}`,text:v.stdout}),v.stderr?c.jsx("pre",{className:"errbox",children:v.stderr}):null]})]}),c.jsxs("details",{className:"card paste",children:[c.jsx("summary",{children:"নিজের কম্পাইলারে চালিয়েছ? আউটপুট পেস্ট করে মেলাও"}),c.jsx("p",{className:"small muted",children:"অনলাইন কম্পাইলার না চললে (বা ফাইল/অ্যাড্রেসের প্রোগ্রামে) নিজের পিসিতে চালিয়ে আউটপুট এখানে পেস্ট করো।"}),c.jsx("textarea",{className:"ta ta-sm",rows:4,value:j,onChange:I=>p(I.target.value),placeholder:"তোমার প্রোগ্রামের আউটপুট…"}),c.jsx("div",{className:"row",children:c.jsx("button",{className:"btn btn-primary btn-sm",onClick:Zi,children:"মেলাও"})}),d&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`verdict ${d.ok?"ok":"no"}`,children:d.ok?"✅ মিলেছে!":"❌ মেলেনি"}),!d.ok&&c.jsx(qa,{result:d})]})]})]})]}),m&&c.jsx("div",{className:"solution",children:c.jsx(ri,{code:n.code,label:`উত্তর (${he[e].label})`,lang:e})}),c.jsxs("div",{className:"pager",children:[R?c.jsxs(K,{className:"btn",to:`/${e}/practice/${R.id}`,children:["← ",R.no," ",R.name]}):c.jsx("span",{}),ee?c.jsxs(K,{className:"btn",to:`/${e}/practice/${ee.id}`,children:[ee.no," ",ee.name," →"]}):c.jsx("span",{})]})]})}function xh({b:e}){if(e.type==="h")return c.jsx("h3",{className:"ch",children:e.text});if(e.type==="p")return c.jsx("p",{children:e.text});const[n,...t]=e.rows;return c.jsx("div",{className:"tbl-wrap",children:c.jsxs("table",{className:"tbl",children:[c.jsx("thead",{children:c.jsx("tr",{children:n.map((r,i)=>c.jsx("th",{children:r},i))})}),c.jsx("tbody",{children:t.map((r,i)=>c.jsx("tr",{children:r.map((l,o)=>c.jsx("td",{children:l},o))},i))})]})})}function wh(){const{lang:e}=Xi();return mr(e)?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("div",{children:[c.jsx("h1",{children:"চিটশিট"}),c.jsx("p",{className:"muted",children:"পরীক্ষার আগের দ্রুত রিভিশন"})]}),c.jsxs("div",{className:"seg",children:[c.jsx(K,{className:e==="c"?"on":"",to:"/cheatsheet/c",children:"C রিভিশন"}),c.jsx(K,{className:e==="cpp"?"on":"",to:"/cheatsheet/cpp",children:"C → C++"})]})]}),oh(e).map((n,t)=>c.jsxs("section",{className:"sec",children:[c.jsx("h2",{children:n.title}),n.blocks.map((r,i)=>c.jsx(xh,{b:r},i))]},t))]}):c.jsx(Hn,{to:"/cheatsheet/c",replace:!0})}function Nh(){return c.jsx(Km,{children:c.jsx(Bm,{children:c.jsxs(on,{element:c.jsx(th,{}),children:[c.jsx(on,{index:!0,element:c.jsx(uh,{})}),c.jsx(on,{path:":lang",element:c.jsx(ah,{})}),c.jsx(on,{path:":lang/read/:id",element:c.jsx(fh,{})}),c.jsx(on,{path:":lang/practice/:id",element:c.jsx(vh,{})}),c.jsx(on,{path:"cheatsheet/:lang",element:c.jsx(wh,{})}),c.jsx(on,{path:"*",element:c.jsx(Hn,{to:"/",replace:!0})})]})})})}ld(document.getElementById("root")).render(c.jsx(Nh,{}));
